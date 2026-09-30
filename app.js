let currentSectionKey = null;
let currentQuestionsList = [];
let userAnswers = {};
let sectionStats = {};
let isExamMode = false;
let showWrongOnly = false; 

// Control de Paginación
let isPaginated = true;
let currentPage = 1;
const pageSize = 30; // Tamaño de página deseado

// Idioma actual: 'ENG', 'ESP' o 'MIRROR'
let currentLang = localStorage.getItem("sf_agentforce_lang") || "ENG";

let questionsBySection = {};

function getActiveRawQuestions(lang = currentLang) {
  if (lang === "ESP" && typeof QUESTIONS_ESP !== "undefined") {
    return QUESTIONS_ESP;
  }
  if (typeof QUESTIONS_ENG !== "undefined") {
    return QUESTIONS_ENG;
  }
  if (typeof QUESTIONS !== "undefined") {
    return QUESTIONS;
  }
  return [];
}

function groupQuestionsByCategory() {
  questionsBySection = {};
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : (typeof QUESTIONS !== "undefined" ? QUESTIONS : []);
  const sourceQuestions = getActiveRawQuestions();

  if (Array.isArray(rawEngPool)) {
    rawEngPool.forEach(qEng => {
      const cat = qEng.category || "General";
      if (!questionsBySection[cat]) {
        questionsBySection[cat] = [];
      }

      // Determinar respuesta correcta usando SIEMPRE el banco en inglés
      const correctIndices = [];
      qEng.choices.forEach((choice, idx) => {
        if (cleanOptionText(choice) === cleanOptionText(qEng.correctAnswerText)) {
          correctIndices.push(idx);
        }
      });

      const currentRaw = (Array.isArray(sourceQuestions) ? sourceQuestions.find(q => q.id === qEng.id) : null) || qEng;

      questionsBySection[cat].push({
        id: qEng.id,
        question: currentRaw.question,
        options: currentRaw.choices.map(opt => cleanOptionText(opt)),
        originalOptionsENG: qEng.choices.map(opt => cleanOptionText(opt)),
        answer: correctIndices,
        multiple: correctIndices.length > 1,
        explanation: currentRaw.explanation || qEng.explanation || "Sin explicación disponible."
      });
    });
  }
}

function getOriginalEnglishChoices(qId) {
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : QUESTIONS;
  const match = rawEngPool.find(item => item.id === qId);
  if (match && match.choices) {
    return match.choices.map(opt => cleanOptionText(opt));
  }
  return [];
}

document.addEventListener("DOMContentLoaded", () => {
  groupQuestionsByCategory();
  loadStatsFromStorage();
  renderBlockCards();
  initContextMenu();
  updateLangMenuCheck();
});

function initContextMenu() {
  const contextMenu = document.getElementById("context-menu");

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    contextMenu.style.top = `${y + window.scrollY}px`;
    contextMenu.style.left = `${x + window.scrollX}px`;
    contextMenu.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!contextMenu.contains(e.target)) {
      contextMenu.style.display = "none";
    }
  });
}

function updateLangMenuCheck() {
  const checkENG = document.getElementById("lang-check-ENG");
  const checkESP = document.getElementById("lang-check-ESP");
  const checkMIRROR = document.getElementById("lang-check-MIRROR");
  if (checkENG) checkENG.style.display = currentLang === "ENG" ? "inline" : "none";
  if (checkESP) checkESP.style.display = currentLang === "ESP" ? "inline" : "none";
  if (checkMIRROR) checkMIRROR.style.display = currentLang === "MIRROR" ? "inline" : "none";
}

function changeLanguage(lang) {
  if (currentLang === lang) {
    document.getElementById("context-menu").style.display = "none";
    return;
  }

  currentLang = lang;
  localStorage.setItem("sf_agentforce_lang", lang);
  updateLangMenuCheck();
  document.getElementById("context-menu").style.display = "none";

  groupQuestionsByCategory();

  if (currentSectionKey && document.getElementById("quiz-screen").style.display === "block") {
    syncCurrentQuestionsLanguage();
    renderQuestionsList();
  } else if (document.getElementById("menu-screen").style.display !== "none") {
    renderBlockCards();
  }
}

function syncCurrentQuestionsLanguage() {
  const activeQuestionsPool = getActiveRawQuestions(currentLang === "MIRROR" ? "ENG" : currentLang);
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : QUESTIONS;

  currentQuestionsList = currentQuestionsList.map((currentQ, qIndex) => {
    const engRaw = rawEngPool.find(q => q.id === currentQ.id);
    const updatedRaw = activeQuestionsPool.find(q => q.id === currentQ.id) || engRaw;

    const feedback = document.getElementById(`feedback-${qIndex}`);
    const isEvaluated = feedback && feedback.style.display === "block";
    const isCorrectFeedback = feedback && feedback.classList.contains("correct");
    const isRevealedAll = isEvaluated && (feedback.innerText.includes("Modo") || feedback.innerText.includes("Mode"));

    if (engRaw) {
      const cleanEngChoices = engRaw.choices.map(opt => cleanOptionText(opt));
      const cleanTargetChoices = updatedRaw.choices.map(opt => cleanOptionText(opt));

      const translatedOptions = currentQ.originalOptionsOrderENG.map(engOptionText => {
        const engIndex = cleanEngChoices.indexOf(engOptionText);
        if (engIndex !== -1 && cleanTargetChoices[engIndex]) {
          return cleanTargetChoices[engIndex];
        }
        return engOptionText;
      });

      return {
        ...currentQ,
        question: updatedRaw.question,
        options: translatedOptions,
        explanation: updatedRaw.explanation || engRaw.explanation || "Sin explicación disponible.",
        isEvaluatedState: isEvaluated,
        isCorrectState: isCorrectFeedback,
        isRevealedAllState: isRevealedAll
      };
    }
    return currentQ;
  });

  if (currentSectionKey) {
    document.getElementById("block-title").innerText = `${currentSectionKey} (${currentQuestionsList.length} preguntas)`;
  }
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function cleanOptionText(text) {
  return text ? text.replace(/^[A-F][\)\.\:\-]\s*/i, "").trim() : "";
}

function shuffleQuestionOptions(question) {
  const engChoices = getOriginalEnglishChoices(question.id);

  const mappedOptions = question.options.map((optText, index) => {
    return {
      text: cleanOptionText(optText),
      engText: engChoices[index] || cleanOptionText(optText),
      isCorrect: question.answer.includes(index)
    };
  });

  const shuffledMapped = shuffleArray(mappedOptions);
  
  const newOptions = shuffledMapped.map(item => item.text);
  const newEngOrder = shuffledMapped.map(item => item.engText);
  const newAnswers = [];
  
  shuffledMapped.forEach((item, newIndex) => {
    if (item.isCorrect) {
      newAnswers.push(newIndex);
    }
  });

  return {
    ...question,
    options: newOptions,
    originalOptionsOrderENG: newEngOrder,
    answer: newAnswers,
    isEvaluatedState: false
  };
}

function showModal(msg) {
  document.getElementById("modal-msg").innerText = msg;
  document.getElementById("custom-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("custom-modal").style.display = "none";
}

function loadStatsFromStorage() {
  const saved = localStorage.getItem("sf_agentforce_stats");
  if (saved) {
    sectionStats = JSON.parse(saved);
  }
}

function saveStatsToStorage() {
  localStorage.setItem("sf_agentforce_stats", JSON.stringify(sectionStats));
}

function saveSectionSession(sectionKey) {
  const sessionData = {
    questionsList: currentQuestionsList,
    userAnswers: userAnswers,
    evaluatedQuestions: {}
  };

  currentQuestionsList.forEach((_, qIndex) => {
    const feedback = document.getElementById(`feedback-${qIndex}`);
    if (feedback && feedback.style.display === "block") {
      sessionData.evaluatedQuestions[qIndex] = {
        isCorrect: feedback.classList.contains("correct"),
        msg: feedback.innerText
      };
    }
  });

  localStorage.setItem(`sf_session_${sectionKey}`, JSON.stringify(sessionData));
}

function renderBlockCards() {
  const container = document.getElementById("block-cards-container");
  container.innerHTML = "";

  const sections = Object.keys(questionsBySection);

  sections.forEach((sectionKey) => {
    const sectionQuestions = questionsBySection[sectionKey];
    const totalQ = sectionQuestions.length;
    const stats = sectionStats[sectionKey] || { correct: 0, incorrect: 0 };

    const card = document.createElement("div");
    card.className = "block-card";
    card.innerHTML = `
      <div class="block-card-title">${sectionKey} (${totalQ} preguntas)</div>
      <div class="block-stats">
        <div class="block-stats-item">✅ Correctas: <strong>${stats.correct}</strong></div>
        <div style="color: #cbd5e1;">|</div>
        <div class="block-stats-item">❌ Incorrectas: <strong>${stats.incorrect}</strong></div>
      </div>
      <div class="block-actions">
        <button class="btn" style="flex: 1;" onclick="openSection('${sectionKey}')">Estudiar</button>
        <button class="btn btn-reset" onclick="resetSectionStats('${sectionKey}')">Reset</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function resetSectionStats(sectionKey) {
  sectionStats[sectionKey] = { correct: 0, incorrect: 0 };
  localStorage.removeItem(`sf_session_${sectionKey}`);
  saveStatsToStorage();
  renderBlockCards();
}

function openSection(sectionKey) {
  isExamMode = false;
  showWrongOnly = false;
  isPaginated = true;
  currentPage = 1;
  updateToggleBtnUI();

  currentSectionKey = sectionKey;

  const stats = sectionStats[sectionKey] || { correct: 0, incorrect: 0 };
  const savedSession = localStorage.getItem(`sf_session_${sectionKey}`);

  if (stats.correct === 0 && stats.incorrect === 0 && !savedSession) {
    const rawQuestions = JSON.parse(JSON.stringify(questionsBySection[sectionKey]));
    currentQuestionsList = rawQuestions.map(q => {
      const engChoices = getOriginalEnglishChoices(q.id);
      return {
        ...q,
        options: q.options.map(opt => cleanOptionText(opt)),
        originalOptionsOrderENG: engChoices
      };
    });
    userAnswers = {};
  } else if (savedSession) {
    const sessionData = JSON.parse(savedSession);
    currentQuestionsList = sessionData.questionsList;
    userAnswers = sessionData.userAnswers || {};
  } else {
    const rawQuestions = JSON.parse(JSON.stringify(questionsBySection[sectionKey]));
    currentQuestionsList = rawQuestions.map(q => {
      const engChoices = getOriginalEnglishChoices(q.id);
      return {
        ...q,
        options: q.options.map(opt => cleanOptionText(opt)),
        originalOptionsOrderENG: engChoices
      };
    });
    userAnswers = {};
  }

  if (!sectionStats[currentSectionKey]) {
    sectionStats[currentSectionKey] = { correct: 0, incorrect: 0 };
  }

  document.getElementById("block-title").innerText = `${sectionKey} (${currentQuestionsList.length} preguntas)`;
  showQuizScreen();
  renderQuestionsList();

  if (savedSession) {
    const sessionData = JSON.parse(savedSession);
    if (sessionData.evaluatedQuestions) {
      Object.keys(sessionData.evaluatedQuestions).forEach(qIdxStr => {
        const qIndex = parseInt(qIdxStr);
        restoreEvaluatedQuestion(qIndex, sessionData.evaluatedQuestions[qIndex]);
      });
    }
  }
}

// CONTROLADOR DE ACTIVAR / DESACTIVAR PAGINACIÓN
function togglePagination() {
  const checkbox = document.getElementById("toggle-paginate-checkbox");
  isPaginated = checkbox ? checkbox.checked : true;
  currentPage = 1;
  renderQuestionsList();
}

function toggleShowWrongOnly() {
  if (isExamMode) return;

  const checkbox = document.getElementById("toggle-wrong-checkbox");

  let hasWrongQuestions = false;
  currentQuestionsList.forEach((_, qIndex) => {
    const feedback = document.getElementById(`feedback-${qIndex}`);
    if (feedback && feedback.classList.contains("incorrect") && feedback.style.display === "block") {
      hasWrongQuestions = true;
    }
  });

  if (checkbox && checkbox.checked && !hasWrongQuestions) {
    showModal("Aún no tienes preguntas evaluadas como incorrectas en este bloque.");
    checkbox.checked = false;
    showWrongOnly = false;
    return;
  }

  showWrongOnly = checkbox ? checkbox.checked : false;
  currentPage = 1;
  renderQuestionsList();
}

function updateToggleBtnUI() {
  const checkboxWrong = document.getElementById("toggle-wrong-checkbox");
  if (checkboxWrong) {
    checkboxWrong.checked = showWrongOnly;
  }
  const checkboxPaginate = document.getElementById("toggle-paginate-checkbox");
  if (checkboxPaginate) {
    checkboxPaginate.checked = isPaginated;
  }
}

// MEZCLAR: Si la paginación está ACTIVA, mezcla SOLO las preguntas de la página actual.
// Si la paginación está DESACTIVADA, mezcla TODO el bloque.
function shuffleCurrentBlock() {
  let filteredIndices = [];
  currentQuestionsList.forEach((_, idx) => {
    if (showWrongOnly) {
      const feedbackPrev = document.getElementById(`feedback-${idx}`);
      if (feedbackPrev && feedbackPrev.classList.contains("incorrect") && feedbackPrev.style.display === "block") {
        filteredIndices.push(idx);
      }
    } else {
      filteredIndices.push(idx);
    }
  });

  if (isPaginated && !isExamMode) {
    // Mezclar únicamente las preguntas que están visibles en la página actual
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredIndices.length);
    const currentPageIndices = filteredIndices.slice(startIndex, endIndex);

    // Extraer los objetos de la página actual
    let pageItems = currentPageIndices.map(idx => currentQuestionsList[idx]);
    
    // Barajar su orden entre sí y mezclar sus opciones de respuesta
    let shuffledPageItems = shuffleArray(pageItems).map(q => shuffleQuestionOptions(q));

    // Reemplazar las preguntas barajadas de nuevo en la lista principal
    currentPageIndices.forEach((originalIdx, i) => {
      currentQuestionsList[originalIdx] = shuffledPageItems[i];
      delete userAnswers[originalIdx]; // Limpiar respuestas previas de los elementos mezclados
    });
  } else {
    // Mezclar todo el bloque completo
    let shuffledQuestions = shuffleArray(currentQuestionsList);
    currentQuestionsList = shuffledQuestions.map(q => shuffleQuestionOptions(q));
    userAnswers = {};
    currentPage = 1;
  }

  renderQuestionsList();
  saveSectionSession(currentSectionKey);
}

function revealAllAnswers() {
  currentQuestionsList.forEach((q, qIndex) => {
    q.isEvaluatedState = true;
    q.isCorrectState = true;
    q.isRevealedAllState = true;

    const correctArr = [...q.answer];
    const qCard = document.getElementById(`q-card-${qIndex}`);
    if (!qCard) return;

    const optionBtns = qCard.querySelectorAll(".option");
    optionBtns.forEach((btn) => {
      btn.style.pointerEvents = "none";
      const idx = parseInt(btn.getAttribute("data-opt-index"));
      if (correctArr.includes(idx)) {
        btn.classList.add("correct-target");
      }
    });

    const btnCheck = document.getElementById(`btn-check-${qIndex}`);
    if (btnCheck) btnCheck.style.display = "none";

    const feedback = document.getElementById(`feedback-${qIndex}`);
    if (feedback) {
      feedback.style.display = "block";
      feedback.className = "feedback-box correct";
      feedback.innerText = (currentLang === "ESP") 
        ? "Modo Estudio: Respuesta(s) correcta(s) resaltada(s)." 
        : "Study Mode: Correct answer(s) highlighted.";
    }

    const expBox = document.getElementById(`explanation-${qIndex}`);
    if (expBox) expBox.style.display = "block";
  });
}

function showQuizScreen() {
  document.getElementById("menu-screen").style.display = "none";
  document.getElementById("results-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
}

function returnToMenu() {
  renderBlockCards();
  document.getElementById("menu-screen").style.display = "block";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("results-screen").style.display = "none";
}

// RENDERIZADO Y PAGINACIÓN
function renderQuestionsList() {
  const container = document.getElementById("questions-list-container");
  container.innerHTML = "";

  const letterBadges = ["A", "B", "C", "D", "E", "F"];
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : QUESTIONS;
  const rawEspPool = typeof QUESTIONS_ESP !== "undefined" ? QUESTIONS_ESP : [];

  let filteredIndices = [];
  currentQuestionsList.forEach((_, idx) => {
    if (showWrongOnly) {
      const feedbackPrev = document.getElementById(`feedback-${idx}`);
      if (feedbackPrev && feedbackPrev.classList.contains("incorrect") && feedbackPrev.style.display === "block") {
        filteredIndices.push(idx);
      }
    } else {
      filteredIndices.push(idx);
    }
  });

  const totalItems = filteredIndices.length;
  const totalPages = (isExamMode || !isPaginated) ? 1 : Math.ceil(totalItems / pageSize) || 1;

  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (isExamMode || !isPaginated) ? 0 : (currentPage - 1) * pageSize;
  const endIndex = (isExamMode || !isPaginated) ? totalItems : Math.min(startIndex + pageSize, totalItems);
  const pageIndices = filteredIndices.slice(startIndex, endIndex);

  renderPaginationControls(totalPages, totalItems);

  pageIndices.forEach((qIndex) => {
    const q = currentQuestionsList[qIndex];
    const qCard = document.createElement("div");
    const cardClass = q.multiple ? "question-item multiple-choice" : "question-item single-choice";
    
    let badgeText = (currentLang === "ESP") 
      ? (q.multiple ? "Opción Múltiple" : "Selección Única") 
      : (q.multiple ? "Multiple Choice" : "Single Choice");

    qCard.className = cardClass;
    qCard.id = `q-card-${qIndex}`;

    const selectedOptions = userAnswers[qIndex] || [];
    const checkBtnLabel = (currentLang === "ESP") ? "Comprobar Respuesta" : "Check Answer";
    const expLabel = (currentLang === "ESP") ? "💡 Explicación:" : "💡 Explanation:";

    if (currentLang === "MIRROR") {
      const engMatch = rawEngPool.find(item => item.id === q.id);
      const espMatch = rawEspPool.find(item => item.id === q.id);

      const cleanEngChoices = engMatch ? engMatch.choices.map(opt => cleanOptionText(opt)) : [];
      const cleanEspChoices = espMatch ? espMatch.choices.map(opt => cleanOptionText(opt)) : [];

      let optionsEngHTML = "";
      let optionsEspHTML = "";

      q.options.forEach((_, optIndex) => {
        const dynamicLetter = letterBadges[optIndex] || "";
        const isSelected = selectedOptions.includes(optIndex) ? "selected" : "";

        const engOptText = q.originalOptionsOrderENG ? q.originalOptionsOrderENG[optIndex] : "";
        const engIdx = cleanEngChoices.indexOf(engOptText);
        const espOptText = (engIdx !== -1 && cleanEspChoices[engIdx]) ? cleanEspChoices[engIdx] : engOptText;

        optionsEngHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${engOptText}</span>
          </button>
        `;

        optionsEspHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${espOptText}</span>
          </button>
        `;
      });

      qCard.innerHTML = `
        <div class="question-type-badge">${badgeText}</div>
        <div class="mirror-split-container">
          <div class="mirror-col">
            <div class="mirror-col-header">🇺🇸 English</div>
            <div class="question-title">${qIndex + 1}. ${engMatch ? engMatch.question : q.question}</div>
            <div class="options-grid">${optionsEngHTML}</div>
          </div>
          <div class="mirror-col">
            <div class="mirror-col-header">🇪🇸 Español</div>
            <div class="question-title">${qIndex + 1}. ${espMatch ? espMatch.question : q.question}</div>
            <div class="options-grid">${optionsEspHTML}</div>
          </div>
        </div>
        ${!isExamMode ? `<button class="btn btn-check" id="btn-check-${qIndex}" onclick="checkSingleAnswer(${qIndex})">${checkBtnLabel}</button>` : ""}
        <div class="feedback-box" id="feedback-${qIndex}"></div>
        <div class="explanation-box" id="explanation-${qIndex}">
          <div class="mirror-split-container">
            <div><strong>💡 Explanation (ENG):</strong><br>${engMatch ? engMatch.explanation : q.explanation}</div>
            <div><strong>💡 Explicación (ESP):</strong><br>${espMatch ? espMatch.explanation : q.explanation}</div>
          </div>
        </div>
      `;

    } else {
      let optionsHTML = "";
      q.options.forEach((optText, optIndex) => {
        const cleanText = cleanOptionText(optText);
        const dynamicLetter = letterBadges[optIndex] || "";
        const isSelected = selectedOptions.includes(optIndex) ? "selected" : "";

        optionsHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${cleanText}</span>
          </button>
        `;
      });

      qCard.innerHTML = `
        <div class="question-type-badge">${badgeText}</div>
        <div class="question-title">${qIndex + 1}. ${q.question}</div>
        <div class="options-grid">${optionsHTML}</div>
        ${!isExamMode ? `<button class="btn btn-check" id="btn-check-${qIndex}" onclick="checkSingleAnswer(${qIndex})">${checkBtnLabel}</button>` : ""}
        <div class="feedback-box" id="feedback-${qIndex}"></div>
        <div class="explanation-box" id="explanation-${qIndex}">
          <div class="explanation-title">${expLabel}</div>
          <div>${q.explanation}</div>
        </div>
      `;
    }

    container.appendChild(qCard);

    if (q.isEvaluatedState) {
      if (q.isRevealedAllState) {
        const correctArr = [...q.answer];
        const optionBtns = qCard.querySelectorAll(".option");
        optionBtns.forEach((btn) => {
          btn.style.pointerEvents = "none";
          const idx = parseInt(btn.getAttribute("data-opt-index"));
          if (correctArr.includes(idx)) {
            btn.classList.add("correct-target");
          }
        });
        const btnCheck = document.getElementById(`btn-check-${qIndex}`);
        if (btnCheck) btnCheck.style.display = "none";

        const feedback = document.getElementById(`feedback-${qIndex}`);
        if (feedback) {
          feedback.style.display = "block";
          feedback.className = "feedback-box correct";
          feedback.innerText = (currentLang === "ESP") 
            ? "Modo Estudio: Respuesta(s) correcta(s) resaltada(s)." 
            : "Study Mode: Correct answer(s) highlighted.";
        }
        const expBox = document.getElementById(`explanation-${qIndex}`);
        if (expBox) expBox.style.display = "block";
      } else {
        const msg = q.isCorrectState
          ? ((currentLang === "ESP") ? "¡Correcto!" : "Correct!")
          : ((currentLang === "ESP") ? "Incorrecto. Revisa la respuesta marcada en verde." : "Incorrect. Check the response marked in green.");
        
        restoreEvaluatedQuestion(qIndex, {
          isCorrect: q.isCorrectState,
          msg: msg
        });
      }
    }
  });

  if (isExamMode) {
    const submitExamBtn = document.createElement("button");
    submitExamBtn.className = "btn btn-exam";
    submitExamBtn.style.marginTop = "20px";
    submitExamBtn.innerText = (currentLang === "ESP") ? "Finalizar y Enviar Examen" : "Submit Exam";
    submitExamBtn.onclick = showExamResults;
    container.appendChild(submitExamBtn);
  }
}

function renderPaginationControls(totalPages, totalItems) {
  const topControls = document.getElementById("pagination-top");
  const bottomControls = document.getElementById("pagination-bottom");

  if (isExamMode || !isPaginated || totalPages <= 1) {
    topControls.style.display = "none";
    bottomControls.style.display = "none";
    return;
  }

  topControls.style.display = "flex";
  bottomControls.style.display = "flex";

  const prevDisabled = currentPage === 1 ? "disabled style='opacity:0.5; cursor:not-allowed;'" : "";
  const nextDisabled = currentPage === totalPages ? "disabled style='opacity:0.5; cursor:not-allowed;'" : "";

  const labelText = (currentLang === "ESP")
    ? `Página ${currentPage} de ${totalPages} (${totalItems} preguntas)`
    : `Page ${currentPage} of ${totalPages} (${totalItems} questions)`;

  const html = `
    <button class="btn btn-secondary" ${prevDisabled} onclick="goToPage(${currentPage - 1})">← Anterior</button>
    <span style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">${labelText}</span>
    <button class="btn btn-secondary" ${nextDisabled} onclick="goToPage(${currentPage + 1})">Siguiente →</button>
  `;

  topControls.innerHTML = html;
  bottomControls.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  renderQuestionsList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectOption(qIndex, optIndex, isMultiple, maxAllowed) {
  const feedback = document.getElementById(`feedback-${qIndex}`);
  if (!isExamMode && feedback && feedback.style.display === "block") return;

  let currentSel = userAnswers[qIndex] || [];

  if (isMultiple) {
    if (currentSel.includes(optIndex)) {
      currentSel = currentSel.filter(i => i !== optIndex);
    } else {
      if (currentSel.length >= maxAllowed) {
        const msg = (currentLang === "ESP") 
          ? `Esta pregunta solo requiere ${maxAllowed} respuestas.` 
          : `This question only requires ${maxAllowed} answers.`;
        showModal(msg);
        return;
      }
      currentSel.push(optIndex);
    }
  } else {
    currentSel = [optIndex];
  }

  userAnswers[qIndex] = currentSel;

  const qCard = document.getElementById(`q-card-${qIndex}`);
  if (qCard) {
    const optionBtns = qCard.querySelectorAll(".option");
    optionBtns.forEach((btn) => {
      const idx = parseInt(btn.getAttribute("data-opt-index"));
      if (currentSel.includes(idx)) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  }

  if (!isExamMode) {
    saveSectionSession(currentSectionKey);
  }
}

function checkSingleAnswer(qIndex) {
  const q = currentQuestionsList[qIndex];
  const selected = userAnswers[qIndex] || [];

  if (selected.length === 0) {
    const msg = (currentLang === "ESP") 
      ? "Por favor selecciona al menos una respuesta." 
      : "Please select at least one answer.";
    showModal(msg);
    return;
  }

  const correctArr = [...q.answer].sort();
  const userArr = [...selected].sort();
  const isCorrect = JSON.stringify(correctArr) === JSON.stringify(userArr);

  q.isEvaluatedState = true;
  q.isCorrectState = isCorrect;
  q.isRevealedAllState = false;

  const qCard = document.getElementById(`q-card-${qIndex}`);
  if (!qCard) return;

  const optionBtns = qCard.querySelectorAll(".option");

  optionBtns.forEach((btn) => {
    btn.style.pointerEvents = "none";
    const idx = parseInt(btn.getAttribute("data-opt-index"));

    if (correctArr.includes(idx)) {
      btn.classList.add("correct-target");
    }
    if (userArr.includes(idx) && !correctArr.includes(idx)) {
      btn.classList.add("wrong-target");
    }
  });

  const feedback = document.getElementById(`feedback-${qIndex}`);
  if (feedback) {
    feedback.style.display = "block";
    const expBox = document.getElementById(`explanation-${qIndex}`);

    if (isCorrect) {
      feedback.className = "feedback-box correct";
      feedback.innerText = (currentLang === "ESP") ? "¡Correcto!" : "Correct!";
      sectionStats[currentSectionKey].correct++;
      if (expBox) expBox.style.display = "none";
    } else {
      feedback.className = "feedback-box incorrect";
      feedback.innerText = (currentLang === "ESP") 
        ? "Incorrecto. Revisa la respuesta marcada en verde." 
        : "Incorrect. Check the response marked in green.";
      sectionStats[currentSectionKey].incorrect++;
      if (expBox) expBox.style.display = "block";
    }
  }

  saveStatsToStorage();
  const btnCheck = document.getElementById(`btn-check-${qIndex}`);
  if (btnCheck) btnCheck.style.display = "none";
  
  saveSectionSession(currentSectionKey);
}

function restoreEvaluatedQuestion(qIndex, evalData) {
  const q = currentQuestionsList[qIndex];
  const selected = userAnswers[qIndex] || [];
  const correctArr = [...q.answer].sort();

  const qCard = document.getElementById(`q-card-${qIndex}`);
  if (!qCard) return;

  const optionBtns = qCard.querySelectorAll(".option");
  optionBtns.forEach((btn) => {
    btn.style.pointerEvents = "none";
    const idx = parseInt(btn.getAttribute("data-opt-index"));

    if (correctArr.includes(idx)) {
      btn.classList.add("correct-target");
    }
    if (selected.includes(idx) && !correctArr.includes(idx)) {
      btn.classList.add("wrong-target");
    }
  });

  const feedback = document.getElementById(`feedback-${qIndex}`);
  if (feedback) {
    feedback.style.display = "block";
    feedback.className = `feedback-box ${evalData.isCorrect ? "correct" : "incorrect"}`;
    feedback.innerText = evalData.msg;
  }

  const expBox = document.getElementById(`explanation-${qIndex}`);
  if (expBox) {
    expBox.style.display = evalData.isCorrect ? "none" : "block";
  }

  const btnCheck = document.getElementById(`btn-check-${qIndex}`);
  if (btnCheck) btnCheck.style.display = "none";
}

function startExamMode() {
  isExamMode = true;
  showWrongOnly = false;
  
  let allQuestions = [];
  Object.keys(questionsBySection).forEach(key => {
    allQuestions = allQuestions.concat(questionsBySection[key]);
  });

  const rawQuestions = JSON.parse(JSON.stringify(allQuestions));
  const shuffledQuestions = shuffleArray(rawQuestions);
  
  currentQuestionsList = shuffledQuestions.map(q => shuffleQuestionOptions(q));
  userAnswers = {};

  const titleText = (currentLang === "ESP") 
    ? `Simulacro de Examen Completo (${currentQuestionsList.length} Preguntas)` 
    : `Full Exam Simulator (${currentQuestionsList.length} Questions)`;

  document.getElementById("block-title").innerText = titleText;
  showQuizScreen();
  renderQuestionsList();
}

function showExamResults() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("results-screen").style.display = "block";

  let score = 0;
  const reviewContainer = document.getElementById("review-container");
  reviewContainer.innerHTML = "";

  const letterBadges = ["A", "B", "C", "D", "E", "F"];

  currentQuestionsList.forEach((q, idx) => {
    const userSel = userAnswers[idx] || [];
    const correctArr = [...q.answer].sort();
    const userArr = [...userSel].sort();
    const isCorrect = JSON.stringify(correctArr) === JSON.stringify(userArr);

    if (isCorrect) score++;

    const item = document.createElement("div");
    item.className = `result-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

    const noAnsText = (currentLang === "ESP") ? "Sin respuesta" : "No answer";
    const userAnsText = userSel.length > 0 
      ? userSel.map(i => `${letterBadges[i]}) ${cleanOptionText(q.options[i])}`).join(" | ") 
      : noAnsText;
      
    const correctAnsText = q.answer.map(i => `${letterBadges[i]}) ${cleanOptionText(q.options[i])}`).join(" | ");

    const yourAnsLabel = (currentLang === "ESP") ? "Tu respuesta:" : "Your answer:";
    const correctAnsLabel = (currentLang === "ESP") ? "Respuesta Correcta:" : "Correct Answer:";
    const expLabel = (currentLang === "ESP") ? "💡 Explicación:" : "💡 Explanation:";

    item.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 8px;">${idx + 1}. ${q.question}</div>
      <div style="font-size: 0.9rem;"><strong>${yourAnsLabel}</strong> ${userAnsText}</div>
      ${!isCorrect ? `<div style="font-size: 0.9rem; margin-top: 4px; color: var(--success);"><strong>${correctAnsLabel}</strong>${correctAnsText}</div>` : ""}
      <div class="explanation-box" style="display: block; margin-top: 10px;">
        <div class="explanation-title">${expLabel}</div>
        <div>${q.explanation}</div>
      </div>
    `;
    reviewContainer.appendChild(item);
  });

  document.getElementById("final-score").innerText = score;
  document.getElementById("total-q").innerText = currentQuestionsList.length;
}
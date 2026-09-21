let currentSectionKey = null;
let currentQuestionsList = [];
let userAnswers = {};
let sectionStats = {};
let isExamMode = false;
let showWrongOnly = false; 

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
  const sourceQuestions = getActiveRawQuestions();

  if (Array.isArray(sourceQuestions)) {
    sourceQuestions.forEach(q => {
      const cat = q.category || "General";
      if (!questionsBySection[cat]) {
        questionsBySection[cat] = [];
      }
      
      const correctIndices = [];
      q.choices.forEach((choice, idx) => {
        if (choice === q.correctAnswerText) {
          correctIndices.push(idx);
        }
      });

      questionsBySection[cat].push({
        id: q.id,
        question: q.question,
        options: q.choices.map(opt => cleanOptionText(opt)),
        originalOptionsENG: getOriginalEnglishChoices(q.id),
        answer: correctIndices,
        multiple: correctIndices.length > 1,
        explanation: q.explanation || "Sin explicación disponible."
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
    const updatedRaw = activeQuestionsPool.find(q => q.id === currentQ.id);
    const engRaw = rawEngPool.find(q => q.id === currentQ.id);

    const feedback = document.getElementById(`feedback-${qIndex}`);
    const isEvaluated = feedback && feedback.style.display === "block";
    const isCorrectFeedback = feedback && feedback.classList.contains("correct");
    const isRevealedAll = isEvaluated && (feedback.innerText.includes("Modo") || feedback.innerText.includes("Mode"));

    if (updatedRaw && engRaw) {
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
        explanation: updatedRaw.explanation || "Sin explicación disponible.",
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
  return text.replace(/^[A-F][\)\.\:\-]\s*/i, "").trim();
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
  applyWrongOnlyFilter();
}

function updateToggleBtnUI() {
  const checkbox = document.getElementById("toggle-wrong-checkbox");
  if (checkbox) {
    checkbox.checked = showWrongOnly;
  }
}

function applyWrongOnlyFilter() {
  currentQuestionsList.forEach((_, qIndex) => {
    const qCard = document.getElementById(`q-card-${qIndex}`);
    const feedback = document.getElementById(`feedback-${qIndex}`);

    if (!qCard) return;

    if (showWrongOnly) {
      if (feedback && feedback.classList.contains("incorrect") && feedback.style.display === "block") {
        qCard.style.display = "block";
      } else {
        qCard.style.display = "none";
      }
    } else {
      qCard.style.display = "block";
    }
  });
}

function shuffleCurrentBlock() {
  let shuffledQuestions = shuffleArray(currentQuestionsList);
  currentQuestionsList = shuffledQuestions.map(q => shuffleQuestionOptions(q));
  
  userAnswers = {};
  showWrongOnly = false;
  updateToggleBtnUI();
  
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

function renderQuestionsList() {
  const container = document.getElementById("questions-list-container");
  container.innerHTML = "";

  const letterBadges = ["A", "B", "C", "D", "E", "F"];
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : QUESTIONS;
  const rawEspPool = typeof QUESTIONS_ESP !== "undefined" ? QUESTIONS_ESP : [];

  currentQuestionsList.forEach((q, qIndex) => {
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
      // MODO ESPEJO LADO A LADO (SPLIT VIEW)
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

        // Ambos lados comparten la misma función de selección selectOption y atributo data-opt-index
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
          <!-- COLUMNA IZQUIERDA (ENGLISH) -->
          <div class="mirror-col">
            <div class="mirror-col-header">🇺🇸 English</div>
            <div class="question-title">${qIndex + 1}. ${engMatch ? engMatch.question : q.question}</div>
            <div class="options-grid">${optionsEngHTML}</div>
          </div>
          <!-- COLUMNA DERECHA (ESPAÑOL) -->
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
      // MODO ESTÁNDAR (UN SOLO IDIOMA)
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

    // Restaurar estado si la pregunta ya estaba evaluada/revelada
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

  if (showWrongOnly) {
    applyWrongOnlyFilter();
  }
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

  // Actualiza los botones de AMBAS columnas en caso de estar en modo Espejo (MIRROR)
  const qCard = document.getElementById(`q-card-${qIndex}`);
  const optionBtns = qCard.querySelectorAll(".option");
  optionBtns.forEach((btn) => {
    const idx = parseInt(btn.getAttribute("data-opt-index"));
    if (currentSel.includes(idx)) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

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
  const optionBtns = qCard.querySelectorAll(".option");

  // Aplica las clases de éxito o error a los botones de AMBAS columnas al mismo tiempo
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
  feedback.style.display = "block";

  if (isCorrect) {
    feedback.className = "feedback-box correct";
    feedback.innerText = (currentLang === "ESP") ? "¡Correcto!" : "Correct!";
    sectionStats[currentSectionKey].correct++;
  } else {
    feedback.className = "feedback-box incorrect";
    feedback.innerText = (currentLang === "ESP") 
      ? "Incorrecto. Revisa la respuesta marcada en verde." 
      : "Incorrect. Check the response marked in green.";
    sectionStats[currentSectionKey].incorrect++;
  }

  const expBox = document.getElementById(`explanation-${qIndex}`);
  if (expBox) expBox.style.display = "block";

  saveStatsToStorage();
  document.getElementById(`btn-check-${qIndex}`).style.display = "none";
  
  saveSectionSession(currentSectionKey);

  if (showWrongOnly) {
    applyWrongOnlyFilter();
  }
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
  if (expBox) expBox.style.display = "block";

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
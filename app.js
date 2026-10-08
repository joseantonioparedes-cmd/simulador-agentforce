let currentSectionKey = null;
let currentQuestionsList = [];
let userAnswers = {};
let sectionStats = {};
let isExamMode = false;
let showWrongOnly = false; 

// Control de Paginación (Desactivada por defecto)
let isPaginated = false;
let currentPage = 1;
const pageSize = 30;

// Idioma actual: 'ENG' o 'MIRROR' (Se elimina 'ESP' como modo individual)
let currentLang = localStorage.getItem("sf_agentforce_lang") || "ENG";
if (currentLang === "ESP") {
  currentLang = "ENG";
  localStorage.setItem("sf_agentforce_lang", "ENG");
}

let questionsBySection = {};

// Convertir letras ('A', 'B', etc.) a índices numéricos basados ÚNICAMENTE en QUESTIONS_ENG
function convertLetterAnswersToIndices(answerArray, optionsArray) {
  if (!Array.isArray(answerArray)) return [];
  const letterMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5 };
  
  return answerArray.map(ans => {
    if (typeof ans === 'number' && ans >= 0) return ans;
    if (typeof ans === 'string') {
      const cleanAns = ans.trim().toUpperCase();
      if (Array.isArray(optionsArray) && optionsArray.length > 0) {
        const foundIdx = optionsArray.findIndex(opt => {
          if (typeof opt === 'object' && opt !== null && opt.letter) {
            return opt.letter.trim().toUpperCase() === cleanAns;
          }
          return false;
        });
        if (foundIdx !== -1) return foundIdx;
      }
      if (letterMap[cleanAns] !== undefined) {
        return letterMap[cleanAns];
      }
    }
    return -1;
  }).filter(idx => idx >= 0);
}

// Extrae textos planos limpiando etiquetas iniciales A), B), etc.
function extractOptionTexts(optionsArray) {
  if (!Array.isArray(optionsArray)) return [];
  return optionsArray.map(opt => {
    if (typeof opt === 'string') return cleanOptionText(opt);
    if (opt && typeof opt === 'object' && opt.text) return cleanOptionText(opt.text);
    return "";
  });
}

function cleanOptionText(text) {
  return text ? String(text).replace(/^[A-F][\)\.\:\-]\s*/i, "").trim() : "";
}

// Cargar banco de preguntas tomando el 100% de los datos desde QUESTIONS_ENG
function groupQuestionsByCategory() {
  questionsBySection = {};
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : (typeof QUESTIONS !== "undefined" ? QUESTIONS : []);

  if (Array.isArray(rawEngPool)) {
    rawEngPool.forEach(qEng => {
      const cat = qEng.category || "General";
      if (!questionsBySection[cat]) {
        questionsBySection[cat] = [];
      }

      const engOptionsTexts = extractOptionTexts(qEng.options || qEng.choices);
      const correctIndices = convertLetterAnswersToIndices(qEng.answer, qEng.options || qEng.choices);

      questionsBySection[cat].push({
        id: qEng.id,
        question: qEng.text || qEng.question,
        options: engOptionsTexts,
        originalOptionsENG: engOptionsTexts, // Base inmutable en inglés
        answer: correctIndices,             // Índices dictados únicamente por inglés
        multiple: qEng.multi !== undefined ? qEng.multi : correctIndices.length > 1,
        explanation: qEng.explanation || "Sin explicación disponible."
      });
    });
  }
}

function getOriginalEnglishChoices(qId) {
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : QUESTIONS;
  const match = rawEngPool.find(item => item.id === qId);
  if (match) {
    return extractOptionTexts(match.options || match.choices);
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

    if (contextMenu) {
      contextMenu.style.top = `${y + window.scrollY}px`;
      contextMenu.style.left = `${x + window.scrollX}px`;
      contextMenu.style.display = "block";
    }
  });

  document.addEventListener("click", (e) => {
    if (contextMenu && !contextMenu.contains(e.target)) {
      contextMenu.style.display = "none";
    }
  });
}

function updateLangMenuCheck() {
  const checkENG = document.getElementById("lang-check-ENG");
  const checkMIRROR = document.getElementById("lang-check-MIRROR");
  if (checkENG) checkENG.style.display = currentLang === "ENG" ? "inline" : "none";
  if (checkMIRROR) checkMIRROR.style.display = currentLang === "MIRROR" ? "inline" : "none";
}

function changeLanguage(lang) {
  if (currentLang === lang) {
    const cm = document.getElementById("context-menu");
    if (cm) cm.style.display = "none";
    return;
  }

  currentLang = lang;
  localStorage.setItem("sf_agentforce_lang", lang);
  updateLangMenuCheck();
  const cm = document.getElementById("context-menu");
  if (cm) cm.style.display = "none";

  if (currentSectionKey && document.getElementById("quiz-screen").style.display === "block") {
    renderQuestionsList();
  } else if (document.getElementById("menu-screen").style.display !== "none") {
    renderBlockCards();
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

// Mezcla las opciones y vincula la traducción de español estricta antes de rotar
function shuffleQuestionOptions(question) {
  // 1. Obtener las opciones originales en inglés
  const engChoices = getOriginalEnglishChoices(question.id);
  
  // 2. Obtener las opciones en español originales
  const rawEspPool = typeof QUESTIONS_ESP !== "undefined" ? QUESTIONS_ESP : [];
  const espMatch = rawEspPool.find(q => q.id === question.id);
  const espChoices = espMatch ? extractOptionTexts(espMatch.options || espMatch.choices) : [];

  // 3. Obtener los índices correctos ORIGINALES directamente desde QUESTIONS_ENG
  const rawEngPool = typeof QUESTIONS_ENG !== "undefined" ? QUESTIONS_ENG : (typeof QUESTIONS !== "undefined" ? QUESTIONS : []);
  const rawEngQuestion = rawEngPool.find(item => item.id === question.id);
  const originalCorrectIndices = rawEngQuestion 
    ? convertLetterAnswersToIndices(rawEngQuestion.answer, rawEngQuestion.options || rawEngQuestion.choices)
    : [];

  // 4. Mapear las opciones evaluando la corrección contra la fuente ORIGINAL inmutable
  const mappedOptions = engChoices.map((engText, index) => {
    const cleanEng = cleanOptionText(engText);
    const espText = (espChoices[index]) ? cleanOptionText(espChoices[index]) : cleanEng;

    return {
      text: cleanEng,
      engText: cleanEng,
      espText: espText,
      isCorrect: originalCorrectIndices.includes(index) // Valida contra el origen real
    };
  });

  // 5. Mezclar las opciones
  const shuffledMapped = shuffleArray(mappedOptions);

  // 6. Recalcular los nuevos índices correctos según las nuevas posiciones
  const newAnswers = shuffledMapped
    .map((item, newIdx) => (item.isCorrect ? newIdx : -1))
    .filter(idx => idx !== -1);

  return {
    ...question,
    options: shuffledMapped.map(item => item.engText),
    originalOptionsOrderENG: shuffledMapped.map(item => item.engText),
    originalOptionsOrderESP: shuffledMapped.map(item => item.espText),
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
  isPaginated = false;
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

function openAllQuestionsStudyMode() {
  isExamMode = false;
  showWrongOnly = false;
  isPaginated = false;
  currentPage = 1;
  updateToggleBtnUI();

  currentSectionKey = "Banco Completo (Todas las Preguntas)";

  let allQuestions = [];
  Object.keys(questionsBySection).forEach(key => {
    allQuestions = allQuestions.concat(questionsBySection[key]);
  });

  const savedSession = localStorage.getItem(`sf_session_${currentSectionKey}`);

  if (!sectionStats[currentSectionKey]) {
    sectionStats[currentSectionKey] = { correct: 0, incorrect: 0 };
  }

  if (sectionStats[currentSectionKey].correct === 0 && sectionStats[currentSectionKey].incorrect === 0 && !savedSession) {
    const rawQuestions = JSON.parse(JSON.stringify(allQuestions));
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
    const rawQuestions = JSON.parse(JSON.stringify(allQuestions));
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

  document.getElementById("block-title").innerText = `${currentSectionKey} (${currentQuestionsList.length} preguntas)`;
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

function togglePagination() {
  const checkbox = document.getElementById("toggle-paginate-checkbox");
  isPaginated = checkbox ? checkbox.checked : false;
  currentPage = 1;
  renderQuestionsList();
}

function toggleShowWrongOnly() {
  if (isExamMode) return;

  const checkbox = document.getElementById("toggle-wrong-checkbox");
  const hasWrongQuestions = currentQuestionsList.some(q => q.isEvaluatedState && !q.isCorrectState);

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

function shuffleCurrentBlock() {
  let filteredIndices = [];
  currentQuestionsList.forEach((q, idx) => {
    if (showWrongOnly) {
      if (q.isEvaluatedState && !q.isCorrectState) {
        filteredIndices.push(idx);
      }
    } else {
      filteredIndices.push(idx);
    }
  });

  if (isPaginated && !isExamMode) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredIndices.length);
    const currentPageIndices = filteredIndices.slice(startIndex, endIndex);

    let pageItems = currentPageIndices.map(idx => currentQuestionsList[idx]);
    let shuffledPageItems = shuffleArray(pageItems).map(q => shuffleQuestionOptions(q));

    currentPageIndices.forEach((originalIdx, i) => {
      currentQuestionsList[originalIdx] = shuffledPageItems[i];
      delete userAnswers[originalIdx];
    });
  } else {
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
      feedback.innerText = "Study Mode: Correct answer(s) highlighted.";
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

// RENDERIZADO: Solo la columna de Inglés es interactiva; la de Español es un texto pasivo alineado
function renderQuestionsList() {
  const container = document.getElementById("questions-list-container");
  container.innerHTML = "";

  const letterBadges = ["A", "B", "C", "D", "E", "F"];
  const rawEngPool = (typeof QUESTIONS_ENG !== "undefined" && Array.isArray(QUESTIONS_ENG)) ? QUESTIONS_ENG : (typeof QUESTIONS !== "undefined" ? QUESTIONS : []);
  const rawEspPool = (typeof QUESTIONS_ESP !== "undefined" && Array.isArray(QUESTIONS_ESP)) ? QUESTIONS_ESP : [];

  let filteredIndices = [];
  currentQuestionsList.forEach((q, idx) => {
    if (showWrongOnly) {
      if (q.isEvaluatedState && !q.isCorrectState) {
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
    
    let badgeText = q.multiple ? "Multiple Choice" : "Single Choice";

    qCard.className = cardClass;
    qCard.id = `q-card-${qIndex}`;

    const selectedOptions = userAnswers[qIndex] || [];
    const checkBtnLabel = "Check Answer";
    const expLabel = "💡 Explanation:";

    if (currentLang === "MIRROR") {
      const engMatch = rawEngPool.find(item => item.id === q.id);
      const espMatch = rawEspPool.find(item => item.id === q.id);

      const cleanEngChoices = engMatch ? extractOptionTexts(engMatch.options || engMatch.choices) : [];
      const cleanEspChoices = espMatch ? extractOptionTexts(espMatch.options || espMatch.choices) : [];

      let optionsEngHTML = "";
      let optionsEspHTML = "";

      q.options.forEach((optText, optIndex) => {
        const dynamicLetter = letterBadges[optIndex] || "";
        const isSelected = selectedOptions.includes(optIndex) ? "selected" : "";
        const engOptText = q.originalOptionsOrderENG ? q.originalOptionsOrderENG[optIndex] : optText;

        // Traducción alineada exactamente con la opción de inglés
        let espOptText = engOptText;
        if (q.originalOptionsOrderESP && q.originalOptionsOrderESP[optIndex]) {
          espOptText = q.originalOptionsOrderESP[optIndex];
        } else {
          const origIndex = cleanEngChoices.indexOf(engOptText);
          if (origIndex !== -1 && cleanEspChoices[origIndex]) {
            espOptText = cleanEspChoices[origIndex];
          }
        }

        // 🇺🇸 INGLÉS: Únicos botones de selección
        optionsEngHTML += `
          <button class="option ${isSelected}" data-opt-index="${optIndex}" onclick="selectOption(${qIndex}, ${optIndex}, ${q.multiple}, ${q.answer.length})">
            <span><strong>${dynamicLetter})</strong> ${engOptText}</span>
          </button>
        `;

        // 🇪🇸 ESPAÑOL: Tarjeta pasiva de sólo lectura (No es botón, no tiene evento onclick)
        optionsEspHTML += `
          <div class="mirror-option-card">
            <span><strong>${dynamicLetter})</strong> ${espOptText}</span>
          </div>
        `;
      });

      const engQuestionText = engMatch ? (engMatch.text || engMatch.question) : q.question;
      const espQuestionText = espMatch ? (espMatch.text || espMatch.question) : "⚠️ [Traducción no disponible]";
      const engExpText = engMatch ? engMatch.explanation : q.explanation;
      const espExpText = espMatch ? espMatch.explanation : "Sin explicación disponible.";

      qCard.innerHTML = `
        <div class="question-type-badge">${badgeText}</div>
        <div class="mirror-split-container">
          <div class="mirror-col">
            <div class="mirror-col-header">🇺🇸 English (Selecciona aquí)</div>
            <div class="question-title">${qIndex + 1}. ${engQuestionText}</div>
            <div class="options-grid">${optionsEngHTML}</div>
          </div>
          <div class="mirror-col">
            <div class="mirror-col-header">🇪🇸 Español (Traducción de referencia)</div>
            <div class="question-title">${qIndex + 1}. ${espQuestionText}</div>
            <div class="options-grid">${optionsEspHTML}</div>
          </div>
        </div>
        ${!isExamMode ? `<button class="btn btn-check" id="btn-check-${qIndex}" onclick="checkSingleAnswer(${qIndex})">${checkBtnLabel}</button>` : ""}
        <div class="feedback-box" id="feedback-${qIndex}"></div>
        <div class="explanation-box" id="explanation-${qIndex}">
          <div class="mirror-split-container">
            <div><strong>💡 Explanation (ENG):</strong><br>${engExpText}</div>
            <div><strong>💡 Explicación (ESP):</strong><br>${espExpText}</div>
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
          feedback.innerText = "Study Mode: Correct answer(s) highlighted.";
        }
        const expBox = document.getElementById(`explanation-${qIndex}`);
        if (expBox) expBox.style.display = "block";
      } else {
        const msg = q.isCorrectState
          ? "Correct!"
          : "Incorrect. Check the response marked in green.";
        
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
    submitExamBtn.innerText = "Submit Exam";
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

  const labelText = `Page ${currentPage} of ${totalPages} (${totalItems} questions)`;

  const html = `
    <button class="btn btn-secondary" ${prevDisabled} onclick="goToPage(${currentPage - 1})">← Previous</button>
    <span style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">${labelText}</span>
    <button class="btn btn-secondary" ${nextDisabled} onclick="goToPage(${currentPage + 1})">Next →</button>
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
        const msg = `This question only requires ${maxAllowed} answers.`;
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
    const msg = "Please select at least one answer.";
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
      feedback.innerText = "Correct!";
      sectionStats[currentSectionKey].correct++;
      if (expBox) expBox.style.display = "none";
    } else {
      feedback.className = "feedback-box incorrect";
      feedback.innerText = "Incorrect. Check the response marked in green.";
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

  const titleText = `Full Exam Simulator (${currentQuestionsList.length} Questions)`;

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

    const noAnsText = "No answer";
    const userAnsText = userSel.length > 0 
      ? userSel.map(i => `${letterBadges[i]}) ${cleanOptionText(q.options[i])}`).join(" | ") 
      : noAnsText;
      
    const correctAnsText = q.answer.map(i => `${letterBadges[i]}) ${cleanOptionText(q.options[i])}`).join(" | ");

    const yourAnsLabel = "Your answer:";
    const correctAnsLabel = "Correct Answer:";
    const expLabel = "💡 Explanation:";

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
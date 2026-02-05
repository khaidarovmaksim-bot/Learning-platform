const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const layout = document.querySelector(".layout");

const buttons = document.querySelectorAll(".section-btn");
const pages = document.querySelectorAll(".page");
const counter = document.getElementById("page-counter");
const pageNumberBox = document.querySelector(".page-number");


layout.style.display = "none";

startBtn.onclick = () => {
  startBtn.onclick = () => {
  startScreen.style.display = "none";
  layout.style.display = "flex";
  };
  
  pages.forEach(page => page.classList.remove("active"));

  
  document.getElementById("intro").classList.add("active");

  
  pageCounter.textContent = 1;
};




buttons.forEach((btn, index) => {

  btn.onclick = () => {

    pages.forEach(page => {
      page.classList.remove("active");
    });

    const id = btn.dataset.target;
    const activePage = document.getElementById(id);

    activePage.classList.add("active");

    
    pageNumberBox.style.display = "block";

    
    counter.textContent = index + 1;

  };

});

const progress = document.querySelector(".progress");
const totalPages = buttons.length;

buttons.forEach((btn, index) => {

    btn.onclick = () => {

        pages.forEach(page => {
            page.classList.remove("active");
        });

        const id = btn.dataset.target;
        const activePage = document.getElementById(id);

        activePage.classList.add("active");

        counter.textContent = index + 1;
        pageNumberBox.style.display = "block";

        const percent = ((index + 1) / totalPages) * 100;
        progress.style.width = percent + "%";
    };
});
const inputs = document.querySelectorAll(".sentence-input");
const buttons1 = document.querySelectorAll(".check-sentence");
const results = document.querySelectorAll(".sentence-result");

const correctAnswers = [
    "il fait des exercices",
    "je vais à l'école",
    "nous partageons des contenus",
    "marie aime dessiner",
    "mes parents arrivent à moscou",
    "vous réfléchissez à la politique",
    "tu choisis la bonne réponse",
    "anna vient un peu plus tard",
    "vous me soutenez dans les moments difficiles",
    "olya obtient les connaissances"
];

buttons1.forEach((btn, index) => {
    btn.onclick = () => {
        const userAnswer = inputs[index].value.trim().toLowerCase();
        if(userAnswer === correctAnswers[index]) {
            results[index].textContent = "✅Correct!";
            inputs[index].style.border = "2px solid green";
        } else {
            results[index].textContent = "❌Essaie encore!";
            inputs[index].style.border = "2px solid green";
        }
    };
});
inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {

        if(event.key === "Enter") {
            buttons1[index].click();
        }

        if(event.key === "Escape") {
            input.value = "";
            results[index].textContent = "";
            input.style.border = "1px solid #ccc"
        }
    });
});
const resetEx1Btn = document.getElementById("reset-ex1");

resetEx1Btn.onclick = () => {

    inputs.forEach((input, index) => {
        input.value = "";
        input.style.border = "1px solid #ccc";
        results[index].textContent = "";
    });
};


const selectsEx2 = document.querySelectorAll(".ending-select");
const checkEx2Btn = document.getElementById("check-ex2");
const resultEx2 = document.getElementById("result-ex2");

const correctEndings = [
    "e",
    "e",
    "ez",
    "t",
    "s",
    "t",
    "t",
    "x",
    "ont"
];

checkEx2Btn.onclick = () => {

    let points = 0;

    selectsEx2.forEach((select, index) => {

        if(select.value === correctEndings[index]) {
            points += 1;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });
};
const resetEx2Btn = document.getElementById("reset-ex2");

resetEx2Btn.onclick = () => {

  selectsEx2.forEach(select => {
    select.value = "";
    select.style.border = "1px solid #ccc";
  });

  resultEx2.textContent = "";
};

const verbs = document.querySelectorAll(".verb");
const zones = document.querySelectorAll(".drop-zone");


const correctGroups = {
  Contester: 1,
  Naître: 3,
  Mourir: 3,
  Rester: 1,
  Battre: 3,
  Voir: 3,
  Jeter: 1,
  Peindre: 3,
  Fournir: 2,
  Atterir: 2,
  Garder: 1,
  Résoudre: 3
};


const isMobile = window.innerWidth <= 768;

let draggedVerb = null;
let selectedVerb = null;



if (!isMobile) {

  verbs.forEach(verb => {

    verb.addEventListener("dragstart", () => {
      draggedVerb = verb;
    });

  });

  zones.forEach(zone => {

    zone.addEventListener("dragover", event => {
      event.preventDefault(); 
    });

    zone.addEventListener("drop", () => {

      if (!draggedVerb) return;

      const verbName = draggedVerb.textContent.trim();
      const zoneGroup = zone.dataset.group;

      if (correctGroups[verbName] == zoneGroup) {
        zone.appendChild(draggedVerb);
        draggedVerb.style.background = "#b6fcb6";
      } else {
        draggedVerb.style.background = "#fcb6b6";
      }

      draggedVerb = null;
    });

  });

}



if (isMobile) {

  verbs.forEach(verb => {

    verb.addEventListener("click", () => {

      
      verbs.forEach(v => v.style.outline = "none");

      
      selectedVerb = verb;
      verb.style.outline = "3px solid #FF8C00";

    });

  });

  zones.forEach(zone => {

    zone.addEventListener("click", () => {

      if (!selectedVerb) return;

      const verbName = selectedVerb.textContent.trim();
      const zoneGroup = zone.dataset.group;

      if (correctGroups[verbName] == zoneGroup) {

        zone.appendChild(selectedVerb);
        selectedVerb.style.background = "#b6fcb6";
        selectedVerb.style.outline = "none";

      } else {

        selectedVerb.style.background = "#fcb6b6";
        selectedVerb.style.outline = "none";

      }

      selectedVerb = null;

    });

  });

}
const resetEx3Btn = document.getElementById("reset-ex3");
const verbsContainer = document.querySelector(".verbs");

resetEx3Btn.onclick = () => {

  scoreEx3 = 0;
  document.getElementById("result-ex3").textContent = "";

  verbs.forEach(verb => {
    verbsContainer.appendChild(verb);
    verb.style.background = "#EDE7DD";
  });

};

const finalScreen = document.getElementById("final-screen");
const finalBtn = document.getElementById("final-btn");

finalScreen.style.display = "none";

finalBtn.onclick = () => {
  layout.style.display = "none";
  finalScreen.style.display = "flex";
};
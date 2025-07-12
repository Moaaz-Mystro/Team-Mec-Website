var elmnts = [
    "start",
    "mec",
    "who",
    "services",
    "projs",
    "contact"
];

var elmnt = 0;

// خلي كل العناصر unreevealed
elmnts.forEach(function(cls) {
    var el = document.querySelector(`.${cls}`);
    if (el) {
        el.classList.add("unrevealed");
        el.classList.remove("revealed");
    }
});
// خلي أول عنصر revealed فقط
var first = document.querySelector(`.${elmnts[elmnt]}`);
if (first) {
    first.classList.add("revealed");
    first.classList.remove("unrevealed");
}

document.addEventListener('keydown', function(event) {
    var current = document.querySelector(`.${elmnts[elmnt]}`);
    if (event.keyCode === 40) { // S key (down)
        if (elmnt < elmnts.length - 1) {
            if (current) {
                current.classList.remove("revealed");
                current.classList.add("unrevealed");
            }
            elmnt++;
            var next = document.querySelector(`.${elmnts[elmnt]}`);
            if (next) {
                next.classList.add("revealed");
                next.classList.remove("unrevealed");
            }
        }
    }
    else if (event.keyCode === 38) { // W key (up)
        if (elmnt > 0) {
            if (current) {
                current.classList.remove("revealed");
                current.classList.add("unrevealed");
            }
            elmnt--;
            var prev = document.querySelector(`.${elmnts[elmnt]}`);
            if (prev) {
                prev.classList.add("revealed");
                prev.classList.remove("unrevealed");
            }
        }
    }
});




const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // يشيل الكلاس لما العنصر يخرج
    }
  });
}, { threshold: 0.7 });

reveals.forEach((element) => observer.observe(element));

// Theme

var themeBtn = document.getElementById("theme")
var mode = 0
var para = document.getElementById("para")

themeBtn.onclick = function(){
    if (mode === 0){
        document.body.style.backgroundColor = "#eeeeee"
        themeBtn.innerText = "Dark"
        themeBtn.style.color = "#000000"
        para.style.color = "#eb9411"
        mode = 1
    }else if (mode === 1) {
        document.body.style.backgroundColor = "#111111"
        themeBtn.innerText = "Light"
        themeBtn.style.color = "#ffffff"
        para.style.color = "#ffe0b2"

        mode = 0
    }
}
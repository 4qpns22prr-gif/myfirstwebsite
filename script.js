function changeBackground() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}

function randomNumber() 
    let num = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").textContent =
        "Твоё число: " + num;

function randomNumber()

document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById('clock');

  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clock.textContent = `${hours}:${minutes}:${seconds}`;
    requestAnimationFrame(updateClock); // плавное обновление
  }

  updateClock(); // старт
});

window.onload = function() {

  const facts = [
    "У осьминога три сердца.",
    "Бананы — это ягоды, а клубника — нет.",
    "Самый большой орган человека — кожа.",
    "Пчёлы могут узнавать лица людей.",
    "Космос полностью беззвучный."
  ];

  const button = document.getElementById("factBtn");
  const factDiv = document.getElementById("fact");

  // Создаём встроенный звук (без интернета)
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  function playClickSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.05);
  }

  button.addEventListener("click", function() {
    // звук
    playClickSound();

    // случайный факт
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDiv.textContent = facts[randomIndex];
  });

};
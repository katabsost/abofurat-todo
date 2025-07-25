


// تحديث الساعة بتوقيت العراق (UTC+3)
function updateClock() {
  const now = new Date();
  now.setHours(now.getUTCHours() + 3);
  document.getElementById('clock').textContent = now.toLocaleTimeString('ar-IQ');
}
setInterval(updateClock, 1000);
updateClock();

// تبديل الثيم (فاتح/داكن)
document.getElementById('themeToggle').onclick = () => {
  document.body.classList.toggle('dark');
};

// إضافة المهام مع مؤقت وعدّاد
const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

form.onsubmit = (e) => {
  e.preventDefault();
  const taskName = document.getElementById('taskInput').value;
  const duration = parseInt(document.getElementById('taskTimer').value) || 0;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskName}</span>
    <button class="completeBtn">✅</button>
    ${duration ? `<span class="countdown">${duration * 60}</span> ثواني` : ''}
  `;

  if (duration) {
    const countdownEl = li.querySelector('.countdown');
    let timeLeft = duration * 60;
    const timer = setInterval(() => {
      timeLeft--;
      countdownEl.textContent = timeLeft;
      if (timeLeft <= 0) clearInterval(timer);
    }, 1000);
  }

  li.querySelector('.completeBtn').onclick = () => {
    li.style.textDecoration = 'line-through';
    li.style.opacity = '0.6';
  };

  taskList.appendChild(li);
  form.reset();
};

// تشغيل الموسيقى الدراسية
const audio = document.getElementById('audioPlayer');
const musicSelect = document.getElementById('musicSelect');

document.getElementById('playMusic').onclick = () => {
  const selected = musicSelect.value;
  let audioURL = '';

  if (selected === 'study1') {
    audioURL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  } else if (selected === 'study2') {
    audioURL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
  }

  audio.src = audioURL;
  audio.play();
};

document.getElementById('stopMusic').onclick = () => {
  audio.pause();
  audio.currentTime = 0;
};

function calculateLove() {
  // إنشاء نسبة عشوائية بين 50 و 100
  const lovePercent = Math.floor(Math.random() * 51) + 50;
  document.getElementById("love-percent").innerText = `${lovePercent}% 💖`;

  // تشغيل الموسيقى
  const audio = document.getElementById("love-audio");
  audio.currentTime = 0;
  audio.play();
}

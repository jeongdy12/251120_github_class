document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div>
      <input id="intro-input" type="text" placeholder="자기소개를 입력하세요." />
      <button id="intro-btn">확인</button>
      <p id="intro-result"></p>
    </div>
    <div>
      <input id="mood-input" type="text" placeholder="오늘 하루의 기분은 어때요?" />
      <button id="mood-btn">확인</button>
      <p id="mood-result"></p>
    </div>
  </div>
`
import './style.css'

window.addEventListener('DOMContentLoaded', () => {
  // 자기소개 입력 및 표시
  const introBtn = document.getElementById('intro-btn');
  const introInput = document.getElementById('intro-input');
  const introResult = document.getElementById('intro-result');
  if (introBtn) {
    introBtn.onclick = () => {
      introResult.textContent = introInput.value ? introInput.value : '자기소개를 입력하세요.';
      // 저장 기능: localStorage에 저장
      if (introInput.value) {
        localStorage.setItem('daeyoung_intro', introInput.value);
      }
    };
    // 페이지 로드 시 저장된 자기소개 불러오기
    const saved = localStorage.getItem('daeyoung_intro');
    if (saved) introResult.textContent = saved;
  }

  // 오늘 하루의 기분 입력 및 표시
  const moodBtn = document.getElementById('mood-btn');
  const moodInput = document.getElementById('mood-input');
  const moodResult = document.getElementById('mood-result');
  if (moodBtn) {
    moodBtn.onclick = () => {
      moodResult.textContent = moodInput.value ? moodInput.value : '오늘의 기분을 입력하세요.';
      // 저장 기능: localStorage에 저장
      if (moodInput.value) {
        localStorage.setItem('daeyoung_mood', moodInput.value);
      }
    };
    // 페이지 로드 시 저장된 기분 불러오기
    const savedMood = localStorage.getItem('daeyoung_mood');
    if (savedMood) moodResult.textContent = savedMood;
  }
});

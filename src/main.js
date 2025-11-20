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
      <input id="keyword-input" type="text" placeholder="키워드를 입력하세요." />
      <button id="keyword-btn">이미지 검색</button>
      <div id="image-result"></div>
    </div>
  </div>
`
import './style.css'

// 자기소개 입력 및 표시
const introBtn = document.getElementById('intro-btn');
const introInput = document.getElementById('intro-input');
const introResult = document.getElementById('intro-result');
if (introBtn) {
  introBtn.onclick = () => {
    introResult.textContent = introInput.value ? introInput.value : '자기소개를 입력하세요.';
  };
}

// 키워드 입력 및 이미지 표시
const keywordBtn = document.getElementById('keyword-btn');
const keywordInput = document.getElementById('keyword-input');
const imageResult = document.getElementById('image-result');
if (keywordBtn) {
  keywordBtn.onclick = async () => {
    const keyword = keywordInput.value.trim();
    if (!keyword) {
      imageResult.innerHTML = '<p>단어를 입력하세요.</p>';
      return;
    }
    imageResult.innerHTML = '<p>이미지를 불러오는 중...</p>';
    try {
      const res = await fetch(`https://source.unsplash.com/400x300/?${encodeURIComponent(keyword)}`);
      imageResult.innerHTML = `<img src="${res.url}" alt="${keyword}" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #888;" />`;
    } catch (e) {
      imageResult.innerHTML = '<p>이미지를 불러올 수 없습니다.</p>';
    }
  };
}

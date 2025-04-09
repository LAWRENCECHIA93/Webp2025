// 工具函式：產生 min~max 長度的隨機 a-z 字串
function getRandomChars(min, max) {
    const len = Math.floor(Math.random() * (max - min + 1)) + min;
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }
  
  // 當網頁載入時執行：container 初始化
  window.onload = function () {
    const container = document.getElementById('container');
    container.textContent = getRandomChars(0, 2); // 初始化亂數字串（長度 0~2）
  };
  
  // 按鍵事件處理：刪除匹配第一個字、加入新亂數字串
  window.addEventListener('keyup', function (e) {
    const container = document.getElementById('container');
    const typedChar = e.key;
  
    // 如果輸入的字元等於 container 的第一個字，則移除它
    if (container.textContent.charAt(0) === typedChar) {
      container.textContent = container.textContent.substring(1);
    }
  
    // 然後加入 1~3 個新的亂數小寫字母
    container.textContent += getRandomChars(1, 3);
  });
  
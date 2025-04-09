document.getElementById("add-btn").addEventListener("click", function () {
    add_new_chars(); // 点击按钮时手动增加随机字母
});

window.addEventListener("keyup", function (e) {
    console.log(e.key);

    let inputField = document.getElementById("text-input"); // 选取输入框
    if (!inputField) return;

    let text = inputField.value; 
    if (text.length > 0 && text[0] === e.key) {
        inputField.value = text.slice(1); 
        add_new_chars(); 
    }
});

function add_new_chars() {
    let inputField = document.getElementById("text-input");
    if (!inputField) return;

    let randomChars = Math.random() < 0.5 ? 1 : 3;
    let newChars = "";
    for (let i = 0; i < randomChars; i++) {
        newChars += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    inputField.value += newChars; 
}
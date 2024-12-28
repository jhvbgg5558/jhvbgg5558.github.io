const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // 这里可以添加真实的验证逻辑，比如向服务器发送请求验证
    if (username === "admin" && password === "123456") {
        // 登录成功，后续跳转到 WebGIS 主页面
        window.location.href = "河南理工大学校园旅游服务平台.html";
    } else {
        errorMessage.textContent = "用户名或密码错误";
    }
});
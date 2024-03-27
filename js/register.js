let users = JSON.parse(localStorage.getItem("users")) || [];
// localStorage.setItem("accountList", JSON.stringify(accountList));
function signUp(e) {
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let check = document.getElementById("check-box").checked;
    // let status = document.getElementById("status").value;
    let obj = {
        id: Math.floor(Math.random() * 10000000),
        userName: `${userName}`,
        emailAddress: `${email}`,
        phone: `${phone}`,
        password: `${password}`,
        repassword: `${repassword}`,
        receive: `${check}`,
        // status: `${boolean}`,
        cart: [],
        status: "true",
    }
    let flag = true;
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].emailAddress) {
            alert("Email đã được sử dụng. Mời bạn nhập email khác");
            flag = false;
            break;
        }
    }
    if (flag == true) {
        users.push(obj);
        alert("Đăng kí thành công !!!");
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "../pages/login.html";
    }
}

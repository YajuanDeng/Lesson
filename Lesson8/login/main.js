import './style.scss'

const password = document.getElementById("password");
const passwordToggle = document.querySelector(".password_icon")


passwordToggle.addEventListener("click", () => {
    if (password.type === "password") {
        password.setAttribute("type", "text")
        // passwordToggle.classList.remove("show")
        // 我觉得这句话有点多余
        passwordToggle.classList.add("show")

    } else {
        password.setAttribute("type","password")
        passwordToggle.classList.remove("show");
    }
})

password.addEventListener("keyup", () => {
    console.log(password.value);
    checkPassword(password.value)
})
function checkPassword(info) {
    const passwordMsg = document.getElementById("password_msg")
    passwordMsg.textContent = "Need"
    const lower = new RegExp("(?=.*[a-z])")
    const upper = new RegExp("(?=.*[A-Z])")
    const number = new RegExp("(?=.*[0-9])")
    const special = new RegExp("(?=.*[!@#\$%\^&\*])")
    const length = new RegExp("(?=.{8,})")

    let flag = false;

    if(!lower.test(info)) {
        passwordMsg.textContent += " lower ";
        flag = true
    }
    if (!upper.test(info)) {
      passwordMsg.textContent += " upper ";
      flag = true;
    }
    if (!number.test(info)) {
      passwordMsg.textContent += " number ";
      flag = true;
    }
    if (!special.test(info)) {
      passwordMsg.textContent += " special character ";
      flag = true;
    }
    if (!length.test(info)) {
      passwordMsg.textContent += " at least 8 characters ";
      flag = true;
    }
    const passwordGroup = document.getElementById("password_group")
    if (flag) {
        passwordGroup.classList.remove('success')
        passwordGroup.classList.add('error')
    } else {
        passwordMsg.textContent = "perfect"
        passwordGroup.classList.add('success')
        passwordGroup.classList.remove('error')
    }


}
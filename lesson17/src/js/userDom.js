import { userDom } from "@/data/db.json"


export const userInfoDom = document.createElement('div')

export const userNameLabel = document.createElement('label')
export const userAgeLabel = document.createElement("label")
export const userIncomeLabel = document.createElement("label");

export const userNameInput = document.createElement("input");
export const userAgeInput = document.createElement("input");
export const userIncomeInput = document.createElement("input");

export const userInfoSubmit = document.createElement("button")

userInfoDom.id = userDom.userInfoDom.id;
userNameInput.id = userDom.userNameInput.id;
userNameInput.type = "text"
userAgeInput.id = userDom.userAgeInput.id;
userAgeInput.type = "range"
userAgeInput.min = "0"
userAgeInput.max = "100"
userAgeInput.step = "1";
userAgeInput.value = "0";
userAgeInput.addEventListener("input", (event) => {
    userAgeLabel.textContent = "Age:" + event.target.value;
})


userIncomeInput.id = userDom.userIncomeInput.id
userIncomeInput.type = "number"
userInfoSubmit.id = userDom.userInfoSubmit.id

userNameLabel.textContent = "Name:"
userAgeLabel.textContent = "Age:"


userIncomeLabel.textContent = "Income:"
userInfoSubmit.textContent = "Submit"

userNameLabel.htmlFor = userNameInput.id
// userNameLabel.setAttribute("for", userNameInput.id);
userAgeLabel.htmlFor = userAgeInput.id
userIncomeLabel.htmlFor = userIncomeInput.id


userInfoDom.appendChild(userNameLabel);
userInfoDom.appendChild(userNameInput);

userInfoDom.appendChild(userAgeLabel);
userInfoDom.appendChild(userAgeInput);

userInfoDom.appendChild(userIncomeLabel);
userInfoDom.appendChild(userIncomeInput);

userInfoDom.appendChild(userInfoSubmit);
import * as userDom from "./userDom"
import * as display from "./display"

import { UserInfoStructure, User, createUser } from "./user"
import sortBy from "sort-by"

const userInfoList = [
  {
    name: "Amy",
    age: 28,
    income: 20000,
  },
  {
    name: "Vincent",
    age: 25,
    income: 10000,
  },
  {
    name: "Peter",
    age: 22,
    income: 50000,
  },
];

userDom.userInfoSubmit.addEventListener("click", () => {
    // console.log("submit");
    const userInfo = new UserInfoStructure()
    userInfo.name = userDom.userNameInput.value
    userInfo.age = +userDom.userAgeInput.value;
    userInfo.income = +userDom.userIncomeInput.value;

    // console.log(userInfo);

    userDom.userNameInput.value = "";
    userDom.userAgeInput.value = "0";
    userDom.userAgeLabel.textContent = "Age:"
    userDom.userIncomeInput.value = "";

    const user = createUser(userInfo)
    if(user instanceof User) {
        userInfoList.push({ ...userInfo})
        // console.log(userInfoList);
        // console.log(sort(["age","name"]));
    }else {
        console.error(user.errorInfo)
    }

    createTable()

    
})

display.clientNameSpan.addEventListener("click", () => {
    sort(["name", "age"]);
    createTable()
})
display.clientAgeSpan.addEventListener("click", () => {
    sort(["age","name"]);
    createTable();
});
display.clientIncomeSpan.addEventListener("click", () => {
    sort(["income","name"])
    createTable();
});

// const list = [
//   display.clientNameSpan,
//   display.clientAgeSpan,
//   display.clientIncomeSpan,
// ];
// let list2 = [];
// list.forEach((element) => {
//     element.addEventListener("click", () => {
//         // element.textContent += num 
//         list2.push(element.textContent);
//         console.log(list2);
//     });
// });
// sort(list2);




function sort(attr) {
    return userInfoList.sort(sortBy(...attr))
}

function createTable() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    userInfoList.forEach((element, index) => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");

      tr.append(th, td1, td2, td3);
      display.clientInfoTable.append(tr);

      th.textContent = index + 1;
      td1.textContent = element.name;
      td2.textContent = element.age;
      td3.textContent = element.income;
    });

}
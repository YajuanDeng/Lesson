
export const clientInfoDom = document.createElement("div");
export const tagList = document.createElement("div")
export const number = document.createElement("span")
export const clientNameSpan = document.createElement("span")
export const clientAgeSpan = document.createElement("span");
export const clientIncomeSpan = document.createElement("span");

export const clientInfoTable = document.createElement("tbody")


clientInfoDom.id = "client_info"
tagList.id = "tag_list"
number.id = "client_number";
clientNameSpan.id = "client_name"
clientAgeSpan.id = "client_age"
clientIncomeSpan.id = "client_income"

number.textContent = "Number"
clientNameSpan.textContent = "Name"
clientAgeSpan.textContent = "Age"
clientIncomeSpan.textContent = "Income"

tagList.appendChild(number)
tagList.appendChild(clientNameSpan);
tagList.appendChild(clientAgeSpan);
tagList.appendChild(clientIncomeSpan);
clientInfoDom.appendChild(tagList)
clientInfoDom.appendChild(clientInfoTable)

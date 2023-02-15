import { isNumber,isString } from "./utils"
// 构造函数，目的是创造一个Object，而不是一个函数
export function UserInfoStructure() {
    this.name = undefined
    this.age = undefined
    this.income = undefined
}

export class User {
  #name = undefined;
  #age = undefined;
  #income = undefined;
  constructor(userInfo) {
    this.#name = userInfo.name;
    this.#age = userInfo.age;
    this.#income = userInfo.income;
  }

  get name() {
    return this.#name
  }
  get age() {
    return this.#age
  }
  get income() {
    return this.#income
  }
}

export function createUser(userInfo) {
    let errorFlag = false
    let errorInfo = ""
    if(!isString(userInfo.name)) {
        errorFlag = true
        errorInfo = ' name is not string'
    }

    if (!isNumber(userInfo.age)) {
      errorFlag = true;
      errorInfo += " age is not number";
    }
    if (!isNumber(userInfo.income)) {
      errorFlag = true;
      errorInfo += " income is not number";
    }
    

    if(errorFlag) {
        return { errorInfo}
    } else {
        return new User(userInfo)
    }
}
import _ from 'lodash'
import data from './data/db.json';
// 只在框架中可以，原生js中不可以

{
  const app = document.getElementById('app')
  // const array = ['name','age','hobby']

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   const h2 = document.createElement("h2");
  //   h2.textContent = array[index];
  //   app.append(h2);
  // }

  const user = data.users;
 
  for (let i = 0; i < user.length; i++) {
      const name = document.createElement("h2");
      const age = document.createElement("h2")
      const hobby = document.createElement("h2")
      name.textContent = "Name:"+ user[i].name;
      age.textContent = "Age:" + user[i].age;
      hobby.textContent = "Hobby:" + user[i].hobby

      app.append(name,age,hobby);
  };
     

  }

  
 


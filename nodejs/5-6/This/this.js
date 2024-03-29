
console.clear();
console.log("===============");
console.log("hello world 3");
console.log("===============");


{
    const obj = {
        name: "Claire",
        age:30,
        walking: function() {
            // console.log(this);
            // console.log(this.age);
        }
        // This 必须有一个object
    }
    obj.walking()
    // console.log(this);

}
/*几种制造object方法*/
{
    const obj = {
        name:"Claire",
        age:30
    }
    function person() {
        this.name = "Lucas"
        this.age = 31
    }
    const people = new person()
    // console.log(people);

    class person2 {
        name = "Ella"
        age = 2
        constructor() {
           this.name = "Ella" 
           this.age = 2
        }
    }
    const people2 = new person2()
    // console.log(people2);

}
{

    const obj = {
      name: "Claire",
      age: 30,
      walking:function() {
        console.log(this);
      },
      cycling:() => {
        console.log(this);
      }
    };
    obj.walking()
    obj.cycling()

    function person() {
      this.name = "Lucas";
      this.age = 31;
      this.walking = function() {
        console.log(this);
      }
      this.cycling = () => {
        console.log(this);
      }
    }
    const people = new person();
    people.walking()
    people.cycling()
    // console.log(people);

    class person2 {
        name = "Ella";
        age = 2;
    //   constructor() {
    //     this.name = "Ella";
    //     this.age = 2;
    //   }
        walking = function () {
            console.log(this);
        }
        cycling = () => {
            console.log(this);

        }
    }
    const people2 = new person2();
    // console.log(people2);
    people2.walking();
    people2.cycling();
}
{
    console.clear();
    const obj = {
      name: "Claire",
      age: 30,
      walking: function () {
        console.log(this);
      },
      cycling: () => {
        console.log(this);
      },
    };
    const walking = obj.walking
    const cycling = obj.cycling

    console.log(walking);
    console.log(cycling);
    obj.walking()
    walking()
    obj.cycling()
    const obj2 = {
        name: "obj2",
        walking,
        cycling
    }
    obj2.walking()
    obj2.cycling()
}
5
{
    // console.clear();
class person2 {
  name = "Ella";
  age = 2;
  //   constructor() {
  //     this.name = "Ella";
  //     this.age = 2;
  //   }
  walking = function () {
    console.log(this.name);
  };
  cycling = () => {
    console.log(this.name);
  };
}
const people2 = new person2();
people2.walking()
people2.cycling()

// console.log(people2);
class People3 {
    name = "Molly"
    walking = people2.walking
    cycling = people2.cycling

}
const people3 = new People3()
people3.walking()
people3.cycling()
/* 传统函数跟随调用的Object走，箭头函数跟随生成时object走 */
}
// 6
{
console.clear();
  const user = {

  }
  function walking() {
    console.log(this);
  }
  const cycling = () => {
    console.log(this);
  }
  user.walking = walking
  user.cycling = cycling
  console.log(user);

  walking()
  user.walking()
  cycling()
  user.cycling()
  
}
{
  console.clear();
  function start() {
    console.log(this);
  }
  const stop = () => {
    console.log(this);
  }
  class Users {
    walking(){
      console.log(this);
      start()
      stop()
    }
    cycling = () => {
      console.log(this);
      start()
      stop()

    }
  }
  const  user = new Users()
  user.walking()
  user.cycling()
  
}

{
  console.clear();
  function start(a,b) {
    console.log(this,a,b);
  }
  const stop = () =>{
    console.log(this);
  }

  class Users {
    walking = function() {
      start()
      start.bind(this)(1, 2)
      start.bind({"name":"deng"})(7,8)
      // 只能绑定一次
      start.call(this, 3, 4)
      start.apply(this,[5,6])
    }
    cycling = () => {
      console.log(this);
      
    }
  }

  const user = new Users()
  user.walking()

  user.cycling()

  // setTimeout()

}
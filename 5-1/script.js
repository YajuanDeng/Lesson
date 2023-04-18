console.clear();
console.log("==================");
// console.log("hello world");
// class Person {
//     constructor() {
//         this.name = "Claire"
//     }
// }
// console.log(this);
// const person = new Person()
// // console.log(person);

// const person = {
//     name:"Claire",
//     Climbing: function (){
//         console.log(this.name);
//     },
//     cycling:() => {
//         console.log(this);
//         //此处this的作用域在最外层，为undefine
//     }
// }
// person.Climbing()
// person.cycling()

// {
//     const person = {
//       name:"Claire",
//       climbing: function (){
//           console.log(this.name);
//       },
//       cycling:() => {
//           console.log(this);
//           //此处this的作用域在最外层，为undefine
//       }
//     }
//     person.climbing()
//     person.cycling()

//     console.log("==================================");

//     function FunctionPerson() {
//         this.name = "Lucas",
//         this.climbing = function () {
//             console.log(this);
//         }
//         this.cycling = () => {
//             console.log(this);

//         }
//     }
//     const person2 = new FunctionPerson()
//     person2.climbing()
//     person2.cycling()

//     console.log("==================================");

//     class ClassPerson {
//         constructor() {
//             this.name = "Ella"
//         }
//         climbing = function() {
//             console.log(this);
//         }
//         cycling = () => {
//             console.log(this);
//         }
//     }
//     const person3 = new ClassPerson()
//      person3.climbing();
//      person3.cycling();



// }

{
  function FunctionPerson() {
    (this.name = "Lucas"),
      (this.climbing = function () {
        console.log(this);
      });
    this.cycling = () => {
      console.log(this);
    };
  }

  console.log("====================");

  class ClassPerson {
    constructor() {
      this.name = "Ella";
    }
    climbing = function () {
      console.log(this);
    }
    cycling = () => {
      console.log(this);
    }
  }
  const person2 = new FunctionPerson();
  const person3 = new ClassPerson();
  const func_2_1 = person2.climbing;
  const func_2_2 = person2.cycling;
  const func_3_1 = person3.climbing;
  const func_3_2 = person3.cycling;
//   func_2_1();
//   func_2_2();
//   func_3_1();
//   func_3_2();
  
}
{
    function FunctionPerson() {
        this.name = "claire"
        this.climbing = function() {
            console.log(this);
        }
        this.cycling = () => {
            console.log(this);
        }
    }

    class ClassPerson {
        constructor(){
            this.name = "Lucas"
        }
        climbing = function() {
            console.log(this);
        }
        cycling = () => {
            console.log(this);
        }
    }
    const person1 = new FunctionPerson();
    const person2 = new ClassPerson();
    const func_1_1 = person1.climbing
    const func_1_2 = person1.cycling
    const func_2_1 = person2.climbing
    const func_2_2 = person2.cycling
    // func_1_1()
    // func_1_2()
    // func_2_1()
    // func_2_2()

}
{
    function climbing() {
        console.log(this);
    }
    const cycling = ()=> {
        console.log(this);
    }

    const person = {
        name: "claire",
        climbing,
        cycling
    }

    function FunctionPerson() {
        this.name = "Lucas",
        this.climbing = climbing
        this.cycling = cycling
    }
    class ClassPerson {
        constructor(){
            this.name = "Ella"
        }
        climbing = climbing
        cycling = cycling
    }

    const person2 = new FunctionPerson();
    const person3 = new ClassPerson();

    // person.climbing()
    // person.cycling()

    // person2.climbing()
    // person2.cycling()

    // person3.climbing();
    // person3.cycling();

}

{
    function start() {
        console.log(this);
    }
    const stop = () => {
        console.log(this);
    }
    function climbing() {
      start()
      const stop = () => {
        console.log(this);
      };
      stop()
    }
    const cycling = () => {
      start();
     
     stop()
    };

    const person = {
      name: "claire",
      climbing,
      cycling,
    };

    function FunctionPerson() {
      (this.name = "Lucas"), (this.climbing = climbing);
      this.cycling = cycling;
    }
    class ClassPerson {
      constructor() {
        this.name = "Ella";
      }
      climbing = climbing;
      cycling = cycling;
    }

    const person2 = new FunctionPerson();
    const person3 = new ClassPerson();

    // person.climbing();
    // person.cycling();

    person2.climbing();
    person2.cycling();

    // person3.climbing();
    // person3.cycling();

}

console.log("==================");
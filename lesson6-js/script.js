{//Debug
    const ACTIVE = true;
    if (ACTIVE) {
        console.clear();
        console.log("true");
    } else {
        console.log("false");
    }
    // 作用域
}
{
    /**
     * 12132423
     * ssssss
     * @abstract
     * @b可以解释某个变量
     * TODO:接下来要做的事
     * FIXME: 修复bug
     */
    let myName = "Claire"
    console.log(myName);

    myName = "Yajuan";
    console.log(myName);
    
    var age = 18;
    console.log(age);
    
    age = 30;
    console.log(age);
    // var变量提升，尽量不用
}
{
    let a = 1
    let b = "claire"
    let c = true //false
    let d = undefined //未定义
    let e = null //空值
    let f = NaN  //not a number

    let aa = 1
    if (a === c) {
        console.log("true");
        // 严格相等
    } else {
        console.log("false");
    }
    if (a == c) {
        //不够严格，true（1）/false（0）这种状况为真；
        console.log("true");
    } else {
        console.log("false");
    }
}
{
    let a = "claire 'deng' \" name\" "
    console.log(a);
    let b = "Deng"
    console.log(b);
    let c = `${a} "sjsoi"`
    console.log(c);
    let p = 1
    let q = 2
    console.log('p+q='+ (p+q));
    console.log(`p+q = ${p + q}`);
}
{
    console.clear();
    let a = 1+2, q = 2, c =a+q
    console.log(c);

}
{
    console.log(+"4", typeof (+"4"));
    console.log("234" - 34);
    // 只要是减法会按照数字算
}
{
    console.clear();
    let list = [1, '2', 3, 4, ["a","c",[12,23,45],2]]
    let list2 = new Array();
    let object = {
        1:"claire",
        2:"yajuan",
        3:list
    }
    console.log(list);
    console.table(list);
    console.table(object);

}
{
    
    console.time("default");
    let list = []
    console.timeEnd("default");
    console.time("default2");
    let list2 = new Array();
    console.timeEnd("default2");
}

{

    console.clear();
    ACTIVE = 1
    function logTime(info, active = true) {
      if (active) {
        console.time(info);
      }
    }
    function logTimeEnd(info, active = true) {
      if (active) {
        console.timeEnd(info);
      }
    }
    logTime("default",ACTIVE)
    let list = []
    logTimeEnd("default",ACTIVE)  
}
{
    let statement = 1;
    /**
     * 0 null undefined NaN 空字符串都是 false
     */
    if (statement) {
        console.log('good');
    } else {
        console.log('bad');
    }

    let array = [1,2]
    console.log(array.length);

    let array2 = new Array(100)
    console.log(array2.length);

    let myName = "Raymond"
    console.log(myName.length);
}
{
    const object = {
        name:"claire",
        age:30
    }
    object.age = 18
    console.log(object);
    // 浅拷贝
    const object3 = {...object}
    object3.age = 34
    console.log(object,object3);

}
{
    // 浅拷贝只能拷贝第一层
    const user = {
      name: "claire",
      age: 30,
      profile: {
        photo:"http://*****",
        address:"mmmmmmmm"
      }
    };
    const user2 = {...user}
    user2.age = 40
    user2.address = "asada"
    console.log(user,user2);

    const array = [2,4,6,1,8,5,3,3,2]
    const array2 = [...array]
    const array4 = [...new Set(array)]

    const array3 = array2.sort((a,b)=> a-b)
    console.log(array,array3,array4);

}
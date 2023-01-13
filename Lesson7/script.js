console.clear();
console.log("Hello World");
// let _ = require("lodash")

{
  console.log(new Object());
  console.log(new Array());
  console.log(new Set());
  console.log(new Map());
  console.log(new WeakSet());
  console.log(new WeakMap());

  const object = new Object();
  const array = new Array();
  const set = new Set();
  const map = new Map();
  const weakSet = new WeakSet();
  const weakMap = new WeakMap();
}
{
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const returnTarget = Object.assign(target, source);
  console.log(returnTarget);
  console.log(target);
}
{
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  const combineTarget = { ...target, ...source };
  console.log(target);
  console.log(source);
  console.log(combineTarget);
}
{
  const user = {
    name: "Claire",
    age: 30,
    profile: {
      address: "14/134 Hill Road",
      email: "clairedeng713@gmail.com",
    },
  };
  const newUser = { ...user };
  // const newUser2 = _.cloneDeep(user)
  console.clear();

  // newUser.age = 18;
  // newUser.profile.email = "yajuan_deng@163.com"
  // console.log(user);
  // console.log(newUser);
  // 这种形式拷贝的内部还是会被改变

  // newUser2.age = 18;
  // newUser2.profile.email = "yajuan_deng@163.com";
  // console.log(user);
  // console.log(newUser2);
  // lodash库进行深度拷贝
}
{
  const user = {
    name: "Claire",
    age: 30,
    profile: {
      address: "14/134 Hill Road",
      email: "clairedeng713@gmail.com",
    },
  };
  // create将原来的object当作原型处理，继承object的内容
  const newUser = Object.create(user);
  console.log(user);
  console.log(newUser);
  console.log(newUser.name, newUser.profile);
  newUser.age = 18;
  console.log(newUser.age);

  console.log(Object.hasOwn(user, "name"));

  console.log(user.hasOwnProperty("name"));
  console.log(user.isPrototypeOf(newUser));
}
{
  console.clear();
  const user = {
    name: "Claire",
    age: 18,
  };

  console.log(Object.isExtensible(user));

  /**一旦添加不可拓展 */
  // Object.preventExtensions(user);

  Object.seal(user);
  // 不可以增加，不可以删除，可以修改
  Object.freeze(user);
  // 不可以增加，不可以删除，不可以修改
}
// Array
{
  const name = "Claire   Deng";
  const arrayName = Array.from(name);
  console.log(arrayName);
  const newArrayName = arrayName.filter((el) => el != " ");
  console.log(newArrayName);

  console.log(
    typeof arrayName,
    Array.isArray(arrayName),
    Array.isArray({ name: "Claire" }),
    Array.isArray(name)
  );
  console.log(newArrayName.join(""));
}
{
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array5 = ["d", "e", "f"];
  const array3 = array1.concat(array2, array5);
  console.log(array3);

  const arrayString = array1.join("") + array2.join("") + array5.join("");
  console.log(arrayString, typeof arrayString);
  const array4 = Array.from(arrayString);
  console.log(array4);
}
{
  const array = [5, 12, 50, 80, 123, 69, 88];
  const found = array.find((el) => el > 40);
  console.log(found);
  // 只能找一个就停下了

  const foundIndex = array.findIndex((el) => el > 40);
  console.log(foundIndex);

  const foundLast = array.findLast((el) => el > 40);
  console.log(foundLast);

  const foundLastIndex = array.findLastIndex((el) => el > 40);
  console.log(foundLastIndex);

  const filter = array.filter((el) => el > 40);
  console.log(filter);
  console.log(filter.length);
  console.log(filter[0]);
  console.log(filter.length - 1);

  const map = array.map((el) => el * 10);
  console.log(map);
  map.push(678);
  console.log(map);

  // 浅拷贝的一种
  const map2 = array.map((el) => el);
  console.log(map2);
  const map3 = [...map];
  console.log(map3);
}

{
  console.clear();
  const list = [1, 2, 3, [4, 5, 6], 7, 9];
  console.log(list);

  const newList = list.flat(Infinity);
  console.log(newList);

  const user = {
    name: "Claire",
    age: 30,
    draw: "xxxxxx",
    profile: {
      address: "ssssss",
      email: "iiiiiii",
    },
  };
  console.log(Object.keys(user), Array.isArray(Object.keys(user)));
  console.log(Object.values(user), Array.isArray(Object.values(user)));

  const objectKeys = Object.keys(user);
  const objectValues = Object.values(user);

  const iter = objectKeys.keys();

  console.log(objectKeys);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);

  const iter2 = objectKeys.values();
  console.log(iter2.next().value);
  console.log(iter2.next().value);
  console.log(iter2.next().value);
  console.log(iter2.next().value);
}
{
  console.clear();
  const list = ["A", "B", "C"];
  console.log(list);
  list.push("D");
  console.log(list);
  const pop = list.pop();
  console.log(pop);
  console.log(list);
  // 末尾添加 末尾删除

  list.unshift("1");
  console.log(list);
  const shift = list.shift();
  console.log(shift);
  console.log(list);
  // 头部添加 头部删除
}
{
  const list = [12, 345, 56, 7, 899];
  const list2 = [...list];
  const newList = list2.sort((a, b) => a - b);
  console.log(newList);
  const newList3 = list2.sort((a, b) => b - a);
  console.log(newList3);
  console.log(list);
}
{
  console.clear();
  const list = [12, 85, 456, "|", 888, 124, 99, "|", 3399, 100, 869];
  const newList = list.sort((a, b) => a - b);
  console.log(newList);
  const newList2 = list.filter((el) => el != "|");
  console.log(newList2);
  // 这是有问题的
}
{
  console.clear();
  function isNumber(something) {
    return something === +something;
  }
  console.log(isNumber(1));
  console.log(isNumber("1"));

  const list = [12, 85, 456, "a", 888, 124, 99, "|", 3399, 100, 869];
  const newList = list.filter((el) => isNumber(el));
  console.log(newList);
}
{
  console.clear();
  const list = [12, 85, [456, "a", [888, 124, 12], 99], "|", 3399, 100, 869];
  const flatList = list.flat(Infinity);
  console.log(flatList);
  function isNumber(something) {
    return something === +something;
  }
  const filterList = flatList.filter((el) => isNumber(el));
  console.log(filterList);

  const setList = [...new Set(filterList)];
  console.log(setList);

  const sortList = setList.sort((a, b) => a - b);
  console.log(sortList);
  // 一般的数据处理过程

  /**这个是注释
   * TODO:
   * FIXME: sort array中有str后并不能分段排序
   * @isNumber 判断是不是数字
   * new Set 去重
   */
}

// 类型推论
let str = "string";
str = 123;

// 联合类型
let a: string | number | boolean = "string";
a = 123;
a = true;

interface Person {}

let b: Person | Array<any> = [];
b.toString();

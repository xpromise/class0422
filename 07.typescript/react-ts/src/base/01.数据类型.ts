// Number、String、Boolean、Null、Undefined
export let num: number = 123;
// num = num + 1;
// num = 'string';
const str: string = "string ~~";

const bool: boolean = true;

const n: null = null;

const u: undefined = undefined;

const sym: symbol = Symbol();

// const big: bigint = BigInt(123)

// Object、Function、Array
interface Person {
  name: string;
  age: number;
  sex: string;
}
const person: Person = {
  name: "huihong",
  age: 18,
  sex: "男",
};

function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

const arr1: Array<any> = [1, "str", true];

interface Name {
  name: number;
}
const arr2: Array<Name> = [{ name: 1 }, { name: 2 }, { name: 3 }];

/*
  - 元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
  - 枚举 Enum: 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
  - 任意值 Any：用来表示允许赋值为任意类型。
  - 空值 Void: 与 Any 相反，用来表示没有任何类型
  - 永不存在的值 Never：表示的是那些永不存在的值的类型
*/

let arr3: [number, string, boolean] = [1, "string", false];

enum Color {
  green,
  red,
  yellow,
}

console.log(Color["green"], Color[0]);
console.log(Color["red"], Color[1]);
console.log(Color["yellow"], Color[2]);

let anything: any = 132;
anything = true;
anything = "string";

// void代表函数没有返回值
const fn = (x: number): void => {
  console.log(x);
};

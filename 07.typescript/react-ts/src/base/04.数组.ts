const arr1: number[] = [1, 1, 2, 3, 5, 8, 13];

const arr2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

function fn(x: number, y: number): number {
  return x + y;
}

const fn1 = (x: number, y: number): number => x + y;
fn1(1, 2);

const fn2: (x: number, y: number) => number = (x, y) => x + y;
fn2(1, 2);

interface Foo {
  (x: number, y: number, z?: number): number;
}
const fn3: Foo = (x, y, z = 1) => x + y + z;
fn3(1, 2, 3);

const fn4: (x: number, y: number, z: number) => void = (x, ...rest) => {
  console.log(x, rest);
};
fn4(1, 2, 3);

function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
reverse(123);

// 重载
type numOrStr = number | string;
function reverse1(x: number): number;
function reverse1(x: string): string;
function reverse1(x: numOrStr): numOrStr {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else {
    return x.split("").reverse().join("");
  }
}
reverse1(123);
reverse1("string");

interface Person {
  readonly id: number; // 只读属性
  name: string; // 必填
  age: number; // 必填
  sex?: string; // 可选
  [propName: string]: any; // 任意属性
}

const p: Person = {
  id: 1,
  name: "jack",
  age: 18,
  sex: "男",
  hobby: ["吃饭"],
  phone: 12312313,
};

p.name = "rose";
// p.id = 2;

interface Dog {
  name: string;
  sex: number;
  children: Array<Dog>;
  // [propName: string]: string | number; // 任意属性
  [propName: string]: any; // 任意属性
}

const d: Dog = {
  name: "旺财",
  sex: 1,
  age: "20",
  children: [],
};

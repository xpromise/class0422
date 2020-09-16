function hello(person: Person) {
  console.log(`姓名：${person.name}  年龄：${person.age}`);
}

interface Person {
  name: String;
  age: Number;
}

const person: Person = { name: "teacher", age: 18 };

hello(person);

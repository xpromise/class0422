<template>
  <div>
    <h1>hello App</h1>
    <Child :person="person" :age="19"/>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  data() {
    return {
      person: {
        name: "jack",
        age: 18,
      },
    };
  },
  components: {
    Child,
  },
};
</script>

<style scoped></style>

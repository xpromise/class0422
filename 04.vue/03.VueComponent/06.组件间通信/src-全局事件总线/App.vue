<template>
  <div>
    <h1 ref="title">hello App</h1>
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
    <Father />
  </div>
</template>

<script>
import Father from "./Father";

export default {
  data() {
    return {
      persons: [{ id: 1, name: "jack" }],
    };
  },
  methods: {
    addPerson(person) {
      this.persons.push(person);
    },
  },
  mounted() {
    // 给vm绑定自定义事件
    this.$bus.$on('addPerson', this.addPerson);
  },
  beforeDestroy() {
    // 解绑事件
    this.$bus.$off("addPerson", this.addPerson);
  },
  // beforeCreate() {
  //   console.log('App beforeCreate');
  // },
  // created() {
  //   console.log('App created');
  // },
  // beforeMount() {
  //   console.log('App beforeMount');
  // },
  // mounted() {
  //   console.log('App mounted');
  // },
  // mounted() {
  //   console.log("this", this);
  //   console.log("vm", this.$bus);
  //   this.$refs.child.$once("addPerson", this.addPerson);
  // },
  // beforeDestroy() {
  //   // 解绑事件
  //   this.$refs.child.$off("addPerson", this.addPerson);
  // },
  components: {
    Father,
  },
};
</script>

<style scoped></style>

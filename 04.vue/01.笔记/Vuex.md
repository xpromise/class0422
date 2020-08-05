# Vuex
用来集中式管理多个组件共享状态数据的工具（插件）

## 组成
1. state
  用来集中式管理多个组件共享状态数据容器
  管理data

  使用state 
    1. 使用起来比较麻烦
      this.$store.state.xxx
    2. 比较简单
      computed: {  
        // 将封装后数据函数映射到computed中，将来可以通过this直接访问使用
        ...mapState([数据名称, 数据名称...])
      }

      this.xxx

2. getters
  用来集中式管理多个组件共享状态数据容器
  管理computed
  只定义get不能定义set

  使用getters
    1. 使用起来比较麻烦
      this.$store.getters.xxx
    2. 比较简单
      computed: {  
        // 将封装后数据函数映射到computed中，将来可以通过this直接访问使用
        ...mapGetters([数据名称, 数据名称...])
      }

      this.xxx

3. actions
  包含n个用来间接修改state的方法的对象
  触发mutation函数
  什么时候要定义actions？
    如果数据不能直接更新，需要做一些其他操作（发送请求...），定义actions
  
  触发action的方式：
    1. 使用起来比较麻烦
      this.$store.dispatch(action函数名称, 数据)
    2. 比较简单
      methods: {  
        // 将封装后action函数映射到methods中，将来可以通过this直接访问使用
        ...mapActions([action函数名称, action函数名称...])
      }

      this.xxx(数据)

4. mutations
  包含n个用来直接修改state的方法的对象
  更新state --> 重新渲染组件
  什么时候直接调用mutation？
    数据只需要直接更新

  触发mutation的方式：
    1. 使用起来比较麻烦
      this.$store.commit(mutation函数名称, 数据)
    2. 比较简单
      methods: {
        // 将封装后mutation函数映射到methods中，将来可以通过this直接访问使用
        ...mapMutations([mutation函数名称, mutation函数名称...])
      }

      this.xxx(数据)
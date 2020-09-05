# React-router

## 组件

- BrowserRouter history 路由模式
- HashRouter hash 路由模式
- Link 用于路由跳转
- NavLink 用于路由跳转
- Route 根据路由路径的变化，加载相应的路由组件显示
- Switch 切换多个路由组件显示，只会显示其中一个
- Redirect 默认匹配所有路径，重定向到某个地址

## 路由跳转的两种方式

1. 路由导航链接
   Link NavLink
2. 编程式导航
   this.props.history.push("/home/messages/1");

## 路由组件参数的方式

1. query 参数
<Link to="/xxx?name=jack"/>
  组件通过 this.props.location.search 获取
2. params
<Link to="/xxx/1"/>  
<Route path="/xxx/:id" />
组件通过 this.props.match.params 获取
3. 编程式导航传参
   this.props.history.push('/xxx', {name: 'jack'})
   组件通过 this.props.location.state 获取

## 路由组件三个属性

1. 什么是路由组件？
   通过 Route 加载的组件

- history
  push / goBack...
- location
  pathname 当前路由路径
  state 获取编程式导航传递的参数
  search 获取query参数
- match
  params 获取params参数
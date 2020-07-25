# axios

## 发送请求流程
1. axios() / axios.get()
2. Axios.prototype.request  
  合并配置，确定请求方式
3. dispatchRequest  
  合并请求头配置，转化请求数据
4. adapter
  xhr模块 --> 走ajax发送请求流程
  validateStatus来判断请求成功/失败
  成功会返回成功promise，里面包含response
  失败会返回失败promise，里面包含reason
    

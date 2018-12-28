import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux' // react-redux 两个主要功能 connect :连接数据处理组件和内部UI组件； Provider :提供包含 store的context；
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'; // 引入React-router 模块
import store from './store/store'
import 'antd/dist/antd.min.css' // 引入Ant-Design样式
import './style/index.css' // 引入全局样式

import Login from './views/Login' // 登录页面
import User from './views/User' // 用户列表
import Menu from './views/Menu' // 侧边栏菜单
import Index from './views/Index' // 欢迎页面

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path = "/login" component={Login}/>
      <Route path = "/" component={Menu}>
        <IndexRoute component={Index}/>
        <Route path="user" component={user} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'))


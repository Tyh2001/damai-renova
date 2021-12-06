<template>
  <div id="loginIndex">
    <div id="loginBox">
      <p class="Welcome">登录</p>

      <!-- 登录框 -->
      <div class="loginBox">
        <!-- 账号 -->
        <p class="title">账号</p>
        <Tyh-input v-model="user.username" clear placeholder="请输入用户名" />

        <!-- 密码 -->
        <p class="title">密码</p>
        <Tyh-input
          v-model="user.password"
          inpType="password"
          clear
          placeholder="请输入密码"
        />

        <Tyh-button type="primary" :prohibit="prohibit" @click="subonLogin"
          >登入</Tyh-button
        >
      </div>

      <!-- 注册 -->
      <div class="registerBox" @click="onRegister">
        <p>没有账号？</p>
        <p class="addNumber">创建一个账户</p>
      </div>

      <p class="goHome" @click="$router.push('/')">返回首页</p>
    </div>
  </div>
</template>

<script>
import { getOnLogin } from '@/api/user'
export default {
  name: 'loginIndex',
  data () {
    return {
      prohibit: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 登录
    async subonLogin () {
      this.prohibit = true
      const { data } = await getOnLogin(this.user)
      if (data !== '登录成功') {
        this.$message({
          message: '登录失败，账号或密码错误！',
          type: 'success',
          iconClass: 'tyh-ui-danger-01'
        })
        this.prohibit = false
        return
      }
      this.$router.push('/')
      this.$message({
        message: '登录成功',
        type: 'danger',
        iconClass: 'tyh-ui-success-01'
      })
      this.prohibit = false
    },
    // 注册
    onRegister () {
      this.$tips({
        title: '提示',
        message: '注册功能维护中，稍后再试'
      })
    }
  }
}
</script>

<style lang="less" scoped>
#loginIndex {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("./images/login.jpg") no-repeat center;
  background-size: cover;
  #loginBox {
    width: 400px;
    height: 500px;
    background-color: #fff;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3), 0 0 7px 2px rgba(0, 0, 0, 0.15);
    padding: 30px;
    box-sizing: border-box;
    border-radius: 4px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    // 欢迎
    .Welcome {
      text-align: center;
      color: #409eff;
      font-size: 40px;
      font-weight: 600;
      margin: 20px 0;
    }
    // 登录盒子
    .loginBox {
      width: 100%;
      background: #f6f8fa;
      border: 1px solid #eaecef;
      border-radius: 5px;
      padding: 20px;
      box-sizing: border-box;
      // 描述文字
      .title {
        font-size: 13px;
        font-weight: 600;
        color: #24292e;
        margin-bottom: 3px;
      }
      .tyh-input {
        margin-bottom: 19px;
        width: 100%;
      }
      // 登录按钮
      .tyh-button {
        width: 100%;
      }
    }
    // 注册盒子
    .registerBox {
      width: 100%;
      height: 40px;
      border: 1px solid #d1d5da;
      border-radius: 5px;
      margin: 24px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      .addNumber {
        color: #0366d6;
      }
    }
    // 返回首页
    .goHome {
      font-size: 14px;
      color: #0366d6;
      float: right;
      cursor: pointer;
    }
  }
}
</style>

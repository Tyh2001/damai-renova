<template>
  <div id="loginIndex">
    <div id="loginBox">
      <h1>注册账号</h1>
      <span>账号：</span><Tyh-input v-model="user.username" /><br />
      <span>密码：</span><Tyh-input v-model="user.password" /><br />
      <span>手机：</span><Tyh-input v-model="user.phone" /><br />
      <span>昵称：</span><Tyh-input v-model="user.nickname" /><br />
      <Tyh-button type="primary" @click="Register">注册</Tyh-button>
    </div>

    <div id="loginBox">
      <h1>登录</h1>
      <span>账号：</span><Tyh-input v-model="user2.username" /><br />
      <span>密码：</span><Tyh-input v-model="user2.password" /><br />
      <Tyh-button type="primary" @click="Login">登录</Tyh-button>
    </div>
  </div>
</template>

<script>
// import { onRegister } from '@/api/user'
import axios from 'axios'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      user: {
        username: '',
        password: '',
        phone: '',
        nickname: ''
      },
      user2: {
        username: '',
        password: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 注册
    Register () {
      axios({
        method: 'GET',
        url: 'http://localhost/Renova_List/public/index.php/backstage/user/register',
        params: this.user
      }).then(res => {
        console.log(res)
      })
    },
    // 登录
    Login () {
      axios({
        method: 'GET',
        url: 'http://localhost/Renova_List/public/index.php/backstage/user/login',
        params: this.user2
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='less' scoped>
#loginIndex {
  #loginBox {
    width: 340px;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
    border: 2px solid #eee;
  }
}
</style>

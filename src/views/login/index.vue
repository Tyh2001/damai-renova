<template>
  <div id="loginIndex">
    <div id="login-box">

      <h2 class="login-title">登录</h2>

      <el-form :model="user">
        <el-form-item label="账号">
          <el-input v-model="user.userName"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input type="password" v-model="user.userPass"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="onLogin"
          >
            立即登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setStorage } from '@/utils/Tyh_setStorage'
export default {
  name: 'loginIndex',
  components: {},
  props: {},
  data () {
    return {
      // 用户登录信息
      user: {
        userName: '',
        userPass: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      if (this.user.userName === 'damai' && this.user.userPass === '123456') {
        setStorage('damai', 'renova')
        this.$router.push('/')
        this.$message({
          message: '恭喜你，登录成功！',
          type: 'success',
          duration: 1000
        })
      } else {
        this.$message({
          message: '登录失败，请检查账号密码',
          type: 'error',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style lang='less' scoped>
#loginIndex {
  #login-box {
    width: 500px;
    height: 600px;
    background: #fff;
    border-radius: 8px;
    padding: 60px;
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin: auto;
    // 登录标题
    .login-title {
      text-align: center;
    }
    .el-form {
      margin-top: 60px;
    }
    // 按钮
    .el-button {
      width: 100%;
    }
  }
}
</style>

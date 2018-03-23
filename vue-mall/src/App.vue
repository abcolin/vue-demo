<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img src="./assets/logo.png" alt="logo">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>&copy; 2018 Colin Lee MIT</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
/* css reset */
@import './scss/reset';

$width: 1200px;

body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
  min-width: $width;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  .app-head-inner {
    width: $width;
    margin: 0 auto;
    img {
      width: 50px;
      margin-top: 20px;
    }
    .head-nav {
      float: right;
      ul {
        overflow: hidden;
        li {
          cursor: pointer;
          float: left;
          &.nav-pile {
            padding: 0 10px;
          }
        }
      }
    }
  }
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: $width;
  margin: 0 auto;
}
</style>

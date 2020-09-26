<style lang="less" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  &-header {
    &-nav {
    background-color: #ff6700;
      &-logo {
        width: 15%;
        background: url("../assets/img/svg/mi.svg") no-repeat;
        background-size: 30px;
        height: 40px;
      }
    }
  }

  &-content {
    flex: 1;
    overflow: auto;
  }
  &-footer {
    background-color: red;
    height: 50px;
    &-bar {
      position: static;
      height: 100%;
    }
  }
}
</style>

<template>
  <section class="page">
    <header v-if="showHeader" class="page-header">
      <van-nav-bar
        :title="title"
        :left-text="leftText"
        :right-text="rightText"
        :left-arrow="leftArrow"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        class="page-header-nav"
      >
        <template #left>
          <div class="page-header-nav-logo"></div>
        </template>
      </van-nav-bar>
    </header>
    <section class="page-content">
      <slot></slot>
    </section>
    <footer class="page-footer" v-if="showFooter">
      <van-tabbar route class="page-footer-bar">
        <van-tabbar-item replace icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item replace icon="apps-o" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item replace icon="cart-o" to="/shopcar">购物车</van-tabbar-item>
        <van-tabbar-item replace icon="contact" to="/mine">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Page",
  data() {
    return {};
  },
  props: {
    showHeader: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "标题",
    },
    leftText: {
      type: String,
      default: "",
    },
    rightText: {
      type: String,
      default: "",
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickRight() {
      this.$emit("onClickRight");
    },
    onClickLeft() {
      this.$emit("onClickLeft");
    },
  },
};
</script>
<template>
  <el-header>
    <el-menu 
    class="nav-header" 
    mode="horizontal"
    background-color="#303030"
    text-color="white"
    active-text-color="#303030">
    <a id="top" class="header-a" href="#" v-scroll-to="'#top'" style="float: left">
      <el-menu-item class="nav-header-item">Zepeng Yu</el-menu-item>
    </a>
    <a class="header-a" href="https://github.com/JeffreytheCoder/personal-website" style="float: left;" target="_blank">
      <el-menu-item class="nav-header-item" style="font-weight: 600; color: #E31B6D">v1.0.1</el-menu-item>
    </a>
    <a class="header-a" href="#" v-scroll-to="'#contact'">
      <el-menu-item class="nav-header-item">Contact</el-menu-item>
    </a>
    <a class="header-a" href="#" v-scroll-to="'#articles'">
      <el-menu-item class="nav-header-item">Articles</el-menu-item>
    </a>
    <a class="header-a" href="#" v-scroll-to="'#projects'">
      <el-menu-item class="nav-header-item">Projects</el-menu-item>
    </a>
    <a class="header-a" href="#" v-scroll-to="'#experience'">
      <el-menu-item class="nav-header-item">Experience</el-menu-item>
    </a>
    <a class="header-a" href="#" v-scroll-to="'#about-me'">
      <el-menu-item class="nav-header-item">About Me</el-menu-item>
    </a>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.nav-header-item {
  font-size: 20px;
}

.header-a{
  color: white;
  text-decoration: none;
  white-space: nowrap;
  float: right;
  border: none;
}
</style>
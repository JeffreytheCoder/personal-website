<template>
  <div class='page'>
    <!-- <vue-particles
      class="particles-bg"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles> -->
    <particles-bg class="particles-bg" type="cobweb" color="black" num=30 :bg="false"/>
    <!-- "color"
    "ball"
    "lines"
    "thick"
    "circle"
    "cobweb"
    "polygon"
    "square"
    "tadpole"
    "fountain"
    "random"
    "custom" -->
    <el-container class="container">
      <el-header>
        <el-menu 
        class="nav-header" 
        mode="horizontal"
        background-color="#303030"
        text-color="white"
        active-text-color="#303030">
        <el-menu-item class="nav-header-item" style="float: left">Jeffrey Yu</el-menu-item>
        <a class="header-a" href="#about-me">
          <el-menu-item class="nav-header-item">Contact</el-menu-item>
        </a>
        <a class="header-a">
          <el-menu-item class="nav-header-item">Life</el-menu-item>
        </a>
        <a class="header-a" href="#about-me">
          <el-menu-item class="nav-header-item">Projects</el-menu-item>
        </a>
        <a class="header-a" href="#about-me">
          <el-menu-item class="nav-header-item">Experience</el-menu-item>
        </a>
        <a class="header-a" href="#about-me">
          <el-menu-item class="nav-header-item">About Me</el-menu-item>
        </a>
        </el-menu>
      </el-header>
        <el-main class="main-body">
          <div class="greeting-block">
            <el-row>
              <h1 class="hello-world">Hello World</h1>
            </el-row>
            <el-row>
              <h1 class="greeting">I'm Jeffrey Yu</h1>
            </el-row>
            <el-row>
              <a class="know-btn-a" href="#about-me">
                <el-button class="know-btn" type="info">
                  Know About Me
                </el-button>
              </a>
            </el-row>
            <el-row>
              <h2 class="personality">Code with an innovative mind and a nice jacket.</h2>
              <!-- <h2 class="personality">Innovative. Passionate. Self-Challenging.</h2> -->
            </el-row>
          </div>
          <div class="info-block">
            <h1 class="subtitle"> 
              <a name="about-me"><i class="el-icon-user"></i> About Me</a>
            </h1>
            <!-- <hr style="width:20%; margin:0px; background-color:gray; height:0.5px; border:none;"/> -->
            <div class="about-me">
              <img class="avatar" src="@/assets/avatar.jpg" />
              <p class="description">I am a frontend developer who enjoyed in designing, developing, and maintaining complex web apps. 
                Skilled in Vue.js, JavaScript, and Python. I am passionate about building frontier software and pursuing to become a full-stack developer. 
                I am currently a Computer Science undergraduate at University of California, Los Angeles.</p>
            </div>
          </div>
        </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap");

.page {
  font-family: 'Titillium Web', 'sans-serif';
  color: white;
}

.particles-bg {
  background-color: rgb(48, 48, 48);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.container {
  position: relative;
  z-index: 2;
  overflow: scroll;
}
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

.main-body {
  width: 60%;
  margin: 0 auto;
}

.greeting-block {
  color: white;
}

.hello-world {
  margin-top: 12%;
  font-weight: 400;
  font-size: 60px;
}

.greeting {
  font-weight: 600;
  font-size: 100px;
}

.know-btn {
  font-family: 'Titillium Web', 'sans-serif';
  background-color: rgba(48, 48, 48, 0);
  margin-top: 2%;
  font-size: 25px;
}

.know-btn-a {
  color: white;
  text-decoration: none;
}

.personality {
  margin-top: 17%;
  font-weight: 300;
  font-size: 40px;
}

.info-block {
  margin-top: 20%;
}

.subtitle {
  font-weight: 600;
  font-size: 40px;
}

.about-me {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
}

.about-me .avatar {
  width: 25%;
  height: 25%;
  border-radius: 50%;
}

.about-me .description {
  line-height: 1.75;
}

.about-me .description {
  font-size: 20px;
  margin-left: 5%;
}

@media screen and (max-width: 1200px) { 
  .main-body {width: 80%}
} 

@media screen and (max-width: 900px) { 
  .main-body  {width: 100%}
} 

</style>

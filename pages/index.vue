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
    <particles-bg class="particles-bg" type="cobweb" color="black" num=50 :bg="false"/>
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
        <a id="top" class="header-a" href="#" v-scroll-to="'#top'" style="float: left">
          <el-menu-item class="nav-header-item">Jeffrey Yu</el-menu-item>
        </a>
        <a class="header-a" href="https://github.com/JeffreytheCoder/personal-website" style="float: left;">
          <el-menu-item class="nav-header-item" style="font-weight: 600; color: #E31B6D">v1.0.1</el-menu-item>
        </a>
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
        <a class="header-a" href="#" v-scroll-to="'#about-me'">
          <el-menu-item class="nav-header-item">About Me</el-menu-item>
        </a>
        </el-menu>
      </el-header>
        <el-main class="main-body" data-aos="fade-up">
          <div class="greeting-block">
              <h1 class="hello-world">Hello World</h1>
              <vue-typed-js 
                :strings="['Jeffrey Yu', 'a Frontend Developer', 'a Student', 'a Thinker', 'an Environmentalist', 'a Pioneer']" 
                :typeSpeed="50" 
                :backSpeed="50"
                :startDelay="1000" 
                :backDelay="1000"
                :loop="true">
                <h1 class="greeting">I'm <span class="typing" style="color: #E31B6D"></span></h1> 
                <!-- 05C2C9 -->
              </vue-typed-js>
              <a class="know-btn-a" href="#" v-scroll-to="'#about-me'">
                <el-button class="know-btn" type="info">
                  Know About Me
                </el-button>
              </a>
              <h2 class="personality">Code with an innovative mind and a nice jacket.</h2>
              <!-- <h2 class="personality">Innovative. Passionate. Self-Challenging.</h2> -->
          </div>

          <!-- About Me -->
          <div data-aos="fade-up" class="info-block">
            <h1 class="subtitle" id="about-me"> 
              <a name="about-me"><i class="el-icon-user"></i> About Me</a>
            </h1>
            <!-- <hr style="width:20%; margin:0px; background-color:gray; height:0.5px; border:none;"/> -->
            <div class="about-me">
              <img class="avatar" src="@/assets/avatar2.jpg" />
              <p class="description">I am a frontend developer who enjoyed in designing, developing, and maintaining complex web apps. 
                Skilled in <span style="font-weight: 600; color: #E31B6D">Vue.js, JavaScript, and Python</span>. I am passionate about building frontier software and pursuing to become a full-stack developer. 
                I am currently a Math of Computation undergraduate at <span style="font-weight: 600; color: #E31B6D">University of California, Los Angeles.</span></p>
            </div>
          </div>
          
          <!-- Experience -->
          <div data-aos="fade-up" class="info-block">
            <h1 class="subtitle" id="experience"> 
              <a name="experience"><i class="el-icon-s-suitcase"></i> About Me</a>
            </h1>
            <!-- <hr style="width:20%; margin:0px; background-color:gray; height:0.5px; border:none;"/> -->
            <div class="experience">
              <img class="avatar" src="@/assets/img/avatar2.jpg" />
              <p class="description">I am a frontend developer who enjoyed in designing, developing, and maintaining complex web apps. 
                Skilled in <span style="font-weight: 600; color: #E31B6D">Vue.js, JavaScript, and Python</span>. I am passionate about building frontier software and pursuing to become a full-stack developer. 
                I am currently a Math of Computation undergraduate at <span style="font-weight: 600; color: #E31B6D">University of California, Los Angeles.</span></p>
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
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap");

/* PAGE */

.page {
  font-family: 'Titillium Web', 'sans-serif';
  color: white;
}

.main-body {
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
}

.particles-bg {
  background-color: rgb(48, 48, 48);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.icon-container {
  display: flex;
  justify-content: center;
  max-width: 200px;
}

.container {
  position: relative;
  z-index: 2;
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

/* GREETING */

.greeting-block {
  height: 80%;
}

.hello-world {
  margin-top: 12%;
  font-weight: 400;
  font-size: 60px;
}

.greeting {
  font-weight: 600;
  font-size: 90px;
}

.know-btn {
  font-family: 'Titillium Web', 'sans-serif';
  background-color: rgba(48, 48, 48, 0);
  color: white;
  border-color: #E31B6D;
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

/* CONTENT */

.info-block {
  margin-top: 15%;
}

.subtitle {
  font-weight: 600;
  font-size: 40px;
}

/* ABOUT ME */

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

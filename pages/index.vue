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
        <el-main class="main">
          <div class="main-body">
            <div class="greeting-block" data-aos="fade-up">
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
                    Know About Me >
                  </el-button>
                </a>
                <h2 class="personality">Code with an innovative mind and a nice jacket.</h2>
                <!-- <h2 class="personality">Innovative. Passionate. Self-Challenging.</h2> -->
            </div>

            <!-- About Me -->
            <div data-aos="fade-up" class="info-block" style="margin-top: 15%">
              <h1 class="subtitle" id="about-me"> 
                <a name="about-me"><i class="el-icon-user"></i> About Me</a>
              </h1>
              <div class="about-me">
                <img class="avatar" src="@/assets/img/avatar2.jpg" />
                <p class="description">I am a frontend developer who enjoyed in designing, developing, and maintaining complex web apps. 
                  Skilled in <span style="font-weight: 600; color: #E31B6D">Vue.js, JavaScript, and Python</span>. I am passionate about building frontier software and becoming a full-stack developer. 
                  I am currently a Math of Computation undergraduate freshman at <span style="font-weight: 600; color: #E31B6D">University of California, Los Angeles.</span></p>
              </div><br>
              <!-- <div class="skill-block">
                <div class="skill">
                  <span class="name">Vue.js </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="90" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
                <div class="skill">
                  <span class="name">JavaScript </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="85" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
                <div class="skill">
                  <span class="name">CSS </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="80" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
                <div class="skill">
                  <span class="name">HTML </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="75" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
                <div class="skill">
                  <span class="name">Python </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="70" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
                <div class="skill">
                  <span class="name">Java </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="55" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
                <div class="skill">
                  <span class="name">C++ </span>
                  <el-progress :show-text="false" :stroke-width="20" :percentage="50" color="#E31B6D" style="padding-top: 0.8%"></el-progress>
                </div>
              </div> -->
            </div>
            
            <!-- Experience -->
            <div data-aos="fade-up" class="info-block">
              <h1 class="subtitle" id="experience"> 
                <a name="experience"><i class="el-icon-suitcase"></i> Experience</a>
              </h1>
              <div class="experience">
                <img class="avatar" src="@/assets/img/techfin.png" />
                <p class="description">
                  <span class="title">Frontend Developer <a class="link" href="http://techfin.ai/" target="_blank"><span style="font-weight: 600; color: #E31B6D">@ TechFin.AI</span></a></span><br>
                  <span class="time">Jul 2020 - Present (3 mos)</span><br><br>
                  ▪ Reconstructed the trading platform of private equity using Vue. Simplified the transaction order process and realized automatic transaction template control, which effectively improved the work efficiency of traders<br>
                  ▪ Independently built the quantitative factor evaluation system, communicated demands with data department, and designed the construction of Nuxt web app, providing a platform for data department members to upload & share factors<br>
                  ▪ Implemented the visualization of product analysis, using ECharts to plot real-time profitability and the proportion of stock positions, etc., demonstrating product performance more clearly to product managers and customers<br>
                </p>
              </div><br>
              <div class="experience">
                <img class="avatar" src="@/assets/img/pioneer.png" />
                <p class="description">
                  <span class="title">Researcher <a class="link" href="https://pioneeracademics.com/" target="_blank"><span style="font-weight: 600; color: #E31B6D">@ Pioneer Academics</span></a></span><br>
                  <span class="time">Jun 2019 - Oct 2019 (5 mos)</span><br><br>
                  ▪ Guided by Prof. Anasse Bari from New York University, applied KNN and Hierarchical clustering algorithms to analyze the digital images of breast masses using RapidMiner, predicted accuracy of breast cancer diagnosis reaching 85.3%<br>
                </p>
              </div><br>
              <div class="experience">
                <img class="avatar" src="@/assets/img/guangdong.png" />
                <p class="description">
                  <span class="title">Research Assistant <a class="link" href="http://www.soil.gd.cn/channel.action?chnlid=3813" target="_blank"><span style="font-weight: 600; color: #E31B6D">@ Guangdong Institute of Eco-environmental Science & Technology</span></a></span><br>
                  <span class="time">Jun 2019 - Aug 2019 (3 mos)</span><br><br>
                  ▪ With Prof. Weilin Huang from Rutgers University, collected the zeta potential of carbon nanoparticles in sweat, used Matlab to fit a DLVO colloidal stability model, rewrote the lab code for calculating the critical coagulation concentrations
                </p>
              </div><br>
            </div>
          </div>

          <!-- Projects -->
          <div data-aos="fade-up" class="project-block">
            <h1 class="subtitle" id="project"> 
              <a name="project"><i class="el-icon-monitor"></i> Projects</a>
            </h1>
            <div class="project">
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-card class="card">
                    <div class="avatar-container">
                      <img class="avatar" src="@/assets/img/vmawalk.png" />
                    </div>
                    <p class="description">
                      <span class="title">Vmawalk.com</span><br>
                      <span class="time">Released in July 2020</span><br><br>
                      Vmawalk.com is a website for Vanke Meisha Academy (VMA) students to find suitable teachers and courses via peer review. Used JQuery and LayUI to implement anonymous reviews, fuzzy searching, and user registration. Reached 1k+ views.<br>
                      <br><a class="link" href="https://vmawalk.com" target="_blank">VIEW PROJECT ></a>
                    </p>
                  </el-card>
                </el-col>
                <el-col :span="8"> 
                  <el-card class="card">
                    <div class="avatar-container" style="margin: 7%">
                      <img class="avatar" style="width: 60%" src="@/assets/img/mcxvma2.png" />
                    </div>
                    <p class="description">
                      <span class="title">Minecraft x VMA</span><br>
                      <span class="time">Released in June 2020</span><br><br>
                      MC x VMA is a online project that recreates VMA campus in the virtual environment during COVID-19.
                      Developed by a 30-person team that I led, the large-scale construction took 5 months to complete. 
                      The virtual campus is now open to all VMAers, with daily views uprising.<br>
                      <br><a class="link" href="https://vmawalk.com" target="_blank">VIEW PROJECT ></a>
                    </p>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="card">
                    <div class="avatar-container">
                      <img class="avatar" style="border-radius: 50%" src="@/assets/img/treehole.jpg" />
                    </div>
                    <p class="description">
                      <span class="title">TreeHole</span><br>
                      <span class="time">Released in March 2020</span><br><br>
                      TreeHole WeChat Miniprogram is for VMAers to post their campus life, personal ideas, funny memes, etc. Used WeChat App Development Toolkit and WeChat cloud service to implement infinite scrolling, featured posts, and user interaction.<br>
                      <br><a class="link" href="https://vmawalk.com" target="_blank">VIEW PROJECT ></a>
                    </p>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="8">
                  <el-card class="card">
                    <div class="avatar-container" style="margin: 15%">
                      <img class="avatar" style="width: 85%; border-radius: 50%" src="@/assets/img/fantasy_studio2.jpg" />
                    </div>
                    <p class="description">
                      <span class="title">Fantasy Studio</span><br>
                      <span class="time">Released in June 2018</span><br><br>
                      Fantasy Studio is a free TV platform gathering all free movies found online. 
                      Coded Python program to scrape and download all free movie torrents online and used opencsv as media player.
                      Implemented frontend features like movie categories, search result, and download ranking with Tkinter.<br>
                      <br><a class="link" href="https://vmawalk.com" target="_blank">VIEW PROJECT ></a>
                    </p>
                  </el-card>
                </el-col>
                <el-col :span="8">
                  <el-card class="card">
                    <div class="avatar-container" style="margin: 16%">
                      <img class="avatar" style="width: 63%" src="@/assets/img/greenbox.png" />
                    </div>
                    <p class="description">
                      <span class="title">GreenBox</span><br>
                      <span class="time">Released in Feburary 2018</span><br><br>
                      GreenBox is a smart reusable delivery packaging service for eCommerce, designed by TechHacker, a twelve-person team that I led.
                      Created a foldable, reusable box with recycling stations and APP.
                      Raised 6k+ RMB and Won 2nd National Prize in China Thinks Big.<br>
                      <br><a class="link" href="https://vmawalk.com" target="_blank">VIEW PROJECT ></a>
                    </p>
                  </el-card>
                </el-col>
                <el-col :span="8"> 
                  <el-card class="card">
                    <div class="avatar-container">
                      <img class="avatar" style="width: 91%" src="@/assets/img/wizard_world.jpeg" />
                    </div>
                    <p class="description">
                      <span class="title">Wizard World</span><br>
                      <span class="time">Released in December 2017</span><br><br>
                      Wizard World is a Role-Playing Python terminal game. 
                      Designed with 8 storylines with different outcomes, Wizard World allows players to explore the magical world in unlimited ways. 
                      Through learning spells and amazing adventures, players will train themselves to become the top wizards in Hithopazeland.<br>
                      <br><a class="link" href="https://vmawalk.com" target="_blank">VIEW PROJECT ></a>
                    </p>
                  </el-card>
                </el-col>
              </el-row>
            </div><br>
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

.main {
  overflow: hidden;
}

.main-body {
  width: 60%;
  margin: 0 auto;
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
  margin-top: 10%;
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.about-me .description {
  font-size: 22px;
  margin-left: 5%;
  line-height: 1.75;
}

.skill-block {
  
}

.skill {
  margin-top: 2%;
}

.skill .name {
  float: left;
  font-weight: 500;
  font-size: 22px;
  margin-right: 5%;
}

/* EXPERIENCE */

.experience {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 5%;
}

.experience .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.experience .description {
  line-height: 1.75;
}

.experience .description {
  font-size: 20px;
  margin-left: 5%;
}

.experience .description .link {
  color: white;
  text-decoration: none;
}

.experience .description .title {
  font-size: 30px;
  font-weight: 500;
}

.experience .description .time {
  font-size: 20px;
  font-weight: 400;
}

/* PROJECT */

.project-block {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
}

.project {
  margin-top: 5%;
}

.project .card {
  background-color: rgb(48, 48, 48);
  color: white;
  border: none;
}

.project .avatar-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 10%;
}

.project .avatar {
  width: 50%;
  margin: 0 auto;
}


.project .description {
  line-height: 1.75;
  font-size: 20px;
  margin-left: 5%;
}

.project .description .link {
  color: #E31B6D;
  text-decoration: none;
}

.project .description .title {
  font-size: 35px;
  font-weight: 600; 
  color: #E31B6D;
}

.project .description .time {
  font-size: 20px;
  font-weight: 400;
}

/* RESPONSIVE */

@media screen and (max-width: 1200px) { 
  .main-body {width: 80%}
} 

@media screen and (max-width: 900px) { 
  .main-body  {width: 100%}
} 

</style>

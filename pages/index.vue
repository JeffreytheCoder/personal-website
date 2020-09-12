<template>
  <div class='page'>
    <template>
      <el-backtop class="backtop"></el-backtop>
    </template>
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
    <el-container class="container" direction="verticle">
      <Header></Header>
      <el-main class="main">
        <div class="main-body">
          <Greeting></Greeting>
          <AboutMe></AboutMe>
          <Experience></Experience>
        </div>
        <Projects></Projects>
        <div class="main-body">
          <Articles></Articles>
        </div>
      </el-main>
      <el-footer class="footer" id="contact">
        <el-row class="footer-row" :gutter="40">
          <el-col style="padding-right: 5%;" :span="8">
            <h2>Contact</h2><br>
            <p>Please contact me if you have any question or want to work together, or just say hi! </p>
          </el-col>
          <el-col :span="8">
            <el-row style="display: flex; justify-content: center">
              <a class="svg-link" href="https://www.linkedin.com/in/zepeng-yu-7645251b1/" target='_blank'>
                <svg class="svg-icon" focusable="false" viewBox="0 0 24 24" aira-hidden="true">
                  <path class="svg-path" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"/>
                </svg>
              </a>
              <a class="svg-link" href="https://github.com/JeffreytheCoder" target='_blank'>
                <svg class="svg-icon" focusable="false" viewBox="0 0 24 24" aira-hidden="true">
                  <path class="svg-path" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </a>
              <a class="svg-link" href="https://www.instagram.com/jeffreyzepeng/" target='_blank'>
                <svg class="svg-icon" focusable="false" viewBox="0 0 24 24" aira-hidden="true">
                  <path class="svg-path" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                </svg>
              </a>
            </el-row><br>
            <el-row style="text-align: center">
              <p style="color: #E31B6D; font-weight: 500">Designed by Zepeng Yu ©︎ 2020</p>
            </el-row>
          </el-col>
          <el-col style="line-height: 3;" :span="8">
            <p><i class="el-icon-user"></i> Zepeng Yu</p>
            <p><i class="el-icon-message"></i> jeffreyzepengyu@ucla.edu</p>
            <p><i class="el-icon-school"></i> Shenzhen, China | Los Angeles, CA</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Articles from '@/components/Articles.vue';
import Projects from '@/components/Projects.vue';
import Experience from '@/components/Experience.vue';
import AboutMe from '@/components/AboutMe.vue';
import Greeting from '@/components/Greeting.vue';
import Header from '@/components/Header.vue';
export default {
  name: "App",
  components: {
    Articles,
    Projects,
    Experience,
    AboutMe,
    Greeting,
    Header,
  },
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

.backtop {
  color: white;
  background-color: #E31B6D;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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

/* CONTENT */

.info-block {
  margin-top: 10%;
}

.subtitle {
  font-weight: 600;
  font-size: 40px;
}

/* FOOTER */

.footer {
  margin-top: 5%;
  font-size: 20px;
  font-size: 20px;
}

.footer-row {
  background-color: rgb(24, 24, 24);
  padding: 3% 5%;
}

.svg-link {
  margin: 0;
  text-decoration: none;
  color: #E31B6D;
}

.svg-icon {
  fill: currentColor;
  width: 50px;
  height: 50px;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  border-radius: 50%;
  margin: 0.6rem;
  padding: 0.2rem;
  transition: 0.2s ease;
}

.svg-icon:hover {
  color: white;
  border-color: white;
}

.svg-path {
  transition: fill 0.2s ease;
  transform-origin: 50% 50%;
}


/* RESPONSIVE */

@media screen and (max-width: 1200px) { 
  .main-body {width: 80%}
} 

@media screen and (max-width: 900px) { 
  .main-body  {width: 100%}
} 

</style>

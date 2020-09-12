<template>
  <div class='page'>
    <template>
      <el-backtop class="backtop"></el-backtop>
    </template>
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
      <Header></Header>
        <el-main class="main">
          <div class="main-body">
            <Greeting></Greeting>
            <AboutMe></AboutMe>
            <Experience></Experience>
          </div>
          <Projects></Projects>
        </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';
import Experience from '@/components/Experience.vue';
import AboutMe from '@/components/AboutMe.vue';
import Greeting from '@/components/Greeting.vue';
import Header from '@/components/Header.vue';
export default {
  name: "App",
  components: {
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

/* RESPONSIVE */

@media screen and (max-width: 1200px) { 
  .main-body {width: 80%}
} 

@media screen and (max-width: 900px) { 
  .main-body  {width: 100%}
} 

</style>

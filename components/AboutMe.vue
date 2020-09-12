<template>
  <div data-aos="fade-up" class="info-block" style="margin-top: 15%">
    <h1 class="subtitle" id="about-me"> 
      <a name="about-me"><i class="el-icon-user"></i> About Me</a>
    </h1>
    <div class="about-me">
      <img class="avatar" src="@/assets/img/avatar.jpg" />
      <p class="description">I am currently a frontend developer who enjoyed in designing, developing, and maintaining complex web apps. 
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
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped>

.about-me {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
}

.about-me .avatar {
  width: 230px;
  height: 230px;
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

</style>
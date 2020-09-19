<template>
  <div data-aos="fade-up" class="info-block" style="margin-top: 7%">
    <h1 class="subtitle" id="experience"> 
      <a name="experience"><i class="el-icon-suitcase"></i> Experience</a>
    </h1>
    <div class="experience">
      <img class="avatar" src="@/assets/img/techfin.png" />
      <p class="description">
        <span class="title">Frontend Developer <a class="link" href="http://techfin.ai/" target="_blank"><span style="font-weight: 600; color: #E31B6D">@ TechFin.AI</span></a></span><br>
        <span class="time">Jul 2020 - Present (3 mos)</span><br><br>
        A Quantitative Hedge Funds Start-up with DMAT Deep Learning Algorithms<br>
        ▪ Increased trading efficiency by 60% by reconstructing the trading platform with auto trading templates<br>
        ▪ Allowed 30+ members to share alpha factors by building an online evaluation system using Vue.js
        ▪ Increased customer base by 15% by visualizing the performance of the real-time assets with ECharts<br><br>
      </p>
    </div><br>
    <div class="experience">
      <img class="avatar" src="@/assets/img/pioneer.png" />
      <p class="description">
        <span class="title">Researcher <a class="link" href="https://pioneeracademics.com/" target="_blank"><span style="font-weight: 600; color: #E31B6D">@ Pioneer Academics</span></a></span><br>
        <span class="time">Jun 2019 - Oct 2019 (5 mos)</span><br><br>
        ▪ Guided by Prof. Anasse Bari from New York University, applied KNN and Hierarchical clustering algorithms to analyze the digital images of breast masses using RapidMiner, predicted accuracy of breast cancer diagnosis reaching 85.3%<br><br>
        <a class="link" href="https://drive.google.com/file/d/1XvYTME5-CbPUiLMOzt0F_VmWop5SQjJ1/view?usp=sharing" target="_blank"><span style="font-weight: 500; color: #E31B6D">> VIEW PAPER</span></a>
      </p>
    </div><br>
    <div class="experience">
      <img class="avatar" src="@/assets/img/guangdong.png" />
      <p class="description">
        <span class="title">Research Assistant <a class="link" href="http://www.soil.gd.cn/channel.action?chnlid=3813" target="_blank"><span style="font-weight: 600; color: #E31B6D">@ Guangdong Institute of Eco-environmental Science & Technology</span></a></span><br>
        <span class="time">Jul 2019 - Sep 2019 (3 mos)</span><br><br>
        ▪ Increased precision of computed critical coagulation concentration by 30% by rewriting the Matlab program<br>
        ▪ Contributed data to Prof. Weilin Huang's Paper by collecting zeta potential of soot nanoparticles in sweat<br>
        ▪ Presented the simulation outcome of the DLVO colloidal stability model to the institute committee<br><br>
        <a class="link" href="https://drive.google.com/file/d/1xjLbBZaLyOc8Tw4k2L4ZSLxIKxoChAvu/view?usp=sharing" target="_blank"><span style="font-weight: 500; color: #E31B6D">> VIEW REPORT</span></a>
      </p>
    </div><br>
  </div>
</template>

<script>
export default {
  name: 'Experience',
}
</script>

<style scoped>
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
</style>
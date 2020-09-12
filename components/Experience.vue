<template>
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
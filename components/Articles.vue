<template>
  <div data-aos="fade-up" class="info-block">
    <h1 class="subtitle" id="articles"> 
      <a name="articles"><i class="el-icon-folder-opened"></i> Articles</a>
    </h1>
    <div class="articles">
      <div class="description">
        <p class="article"><i class="el-icon-link"></i>
          <a class="link" href="https://blog.csdn.net/weixin_41421986" target='_blank'> My CSDN Tech Blog</a>
          <span class="time">Updating</span>
        </p>
        <p class="article"><i class="el-icon-document"></i>
          <a class="link" href="https://drive.google.com/file/d/1S5qHQ6ZETZfxdePGFNQAcXVMkgCyh1MA/view?usp=sharing" target='_blank'> Twitter Sentiment Analysis to Predict Adidas Sneakers Reselling Price</a>
          <span class="time">May 2020</span>
        </p>
        <p class="article"><i class="el-icon-document"></i>
          <a class="link" href="https://drive.google.com/file/d/1Jtw4Abw9bvP1BhaNeNN_Q5JWp0Fz2dKy/view?usp=sharing" target='_blank'> Natural Selection Cause of Declined Lateral Plates in Stickleback Population</a>
          <span class="time">Nov 2019</span>
        </p>
        <p class="article"><i class="el-icon-document"></i>
          <a class="link" href="https://drive.google.com/file/d/1V8knfPV-z1GDrP1ts2wqKFUadK-Knalh/view?usp=sharing" target='_blank'> Difference of Marketing Models in Video Game Industry</a>
          <span class="time">Jun 2019</span>
        </p>
        <p class="article"><i class="el-icon-document"></i>
          <a class="link" href="https://drive.google.com/file/d/14yHgx2o10dMC_zjBmYfqxW5OIVavJRDi/view?usp=sharing" target='_blank'> Comparing Effectiveness of Renewable Energy in India</a>
          <span class="time">Apr 2019</span>
        </p>
        <p class="article"><i class="el-icon-document"></i>
          <a class="link" href="https://drive.google.com/file/d/1lb78WebYCjizvFHITYkl8h6LabLl7-Vs/view?usp=sharing" target='_blank'> Impact of Security Breach in Smart Home on Economic Losses</a>
          <span class="time">Feb 2019</span>
        </p>
        <p class="article"><i class="el-icon-document"></i>
          <a class="link" href="https://drive.google.com/file/d/1PEtQsVJ6cemialwkjwcrj6vzFBO_-if4/view?usp=sharing" target='_blank'> Influence of Rising Artificial Intelligence on Wealth Gap</a>
          <span class="time">Jun 2018</span>
        </p>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
}
</script>

<style scoped>
.articles {
  margin-top: 5%;
}

.articles .avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.articles .description {
  font-size: 20px;
  line-height: 1.75;
}

.articles .description .article {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 2%;
}

.articles .description .link {
  color: white;
  text-decoration: none;
}

.articles .description .time {
  float: right;
  color: #E31B6D;
  font-size: 25px;
  font-weight: 500;
}
</style>
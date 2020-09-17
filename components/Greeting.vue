<template>
  <div class="greeting-block" data-aos="fade-up">
    <h1 class="hello-world">Hello World</h1>
    <vue-typed-js 
      :strings="['Zepeng Yu', 'a Software Engineer', 'a Student', 'a Thinker', 'an Environmentalist', 'a Pioneer']" 
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
</template>

<script>
export default {
  name: 'Greeting',
}
</script>

<style scoped>
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
</style>
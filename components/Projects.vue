<template>
  <div data-aos="fade-up" class="project-block">
    <h1 class="subtitle" id="projects"> 
      <a name="projects"><i class="el-icon-monitor"></i> Projects</a>
    </h1>
    <div class="project">
      <el-row :gutter="30">

        <!-- vmawalk -->
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

        <!-- minecraft -->
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
              <br><a class="link" @click="minecraftShow = true">VIEW PROJECT ></a>
            </p>
          </el-card>
        </el-col>

        <el-dialog
          v-if="minecraftShow"
          :visible="minecraftShow"
          @close='minecraftShow = false'
          :append-to-body="true">
          <!-- <h2>Scan the following QR code using Wechat to open TreeHole Miniprogram ↓</h2> -->
          <video class="video" src="@/assets/img/mcxvma_demo.mp4" controls />
      </el-dialog>

        <!-- treehole -->
        <el-col :span="8">
          <el-card class="card">
            <div class="avatar-container">
              <img class="avatar" style="border-radius: 50%" src="@/assets/img/treehole.jpg" />
            </div>
            <p class="description">
              <span class="title">TreeHole</span><br>
              <span class="time">Released in March 2020</span><br><br>
              TreeHole WeChat Miniprogram is for VMAers to post their campus life, personal ideas, funny memes, etc. Used WeChat App Development Toolkit and WeChat cloud service to implement infinite scrolling, featured posts, and user interaction.<br>
              <br><a class="link" @click="treeHoleShow = true">VIEW PROJECT ></a>
            </p>
          </el-card>
        </el-col>
      </el-row>

      <el-dialog
        class="dialog"
        :visible="treeHoleShow"
        width="50%"
        @close='treeHoleShow = false'
        :append-to-body="true">
        <h2>Scan the following QR code using Wechat to open TreeHole Miniprogram ↓</h2>
        <img style="height: 100%; width: 100%" src="@/assets/img/treehole_miniprogram.jpg">
      </el-dialog>

      <el-row :gutter="30">
        <!-- fantasy studio -->
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
              <br><a class="link" href="https://drive.google.com/file/d/1TYoIzpPegKcSQIRaz_B-LBO5AVNsmRXp/view" target="_blank">VIEW PROJECT ></a>
            </p>
          </el-card>
        </el-col>

        <!-- greenbox -->
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
              <br><a class="link" @click="greenBoxShow = true">VIEW PROJECT ></a>
            </p>
          </el-card>
        </el-col>

        <el-dialog
          v-if="greenBoxShow"
          :visible="greenBoxShow"
          @close='greenBoxShow = false'
          :append-to-body="true">
          <!-- <h2>Scan the following QR code using Wechat to open TreeHole Miniprogram ↓</h2> -->
          <video class="video" src="@/assets/img/greenbox_demo.mp4" controls />
        </el-dialog>

        <!-- wizard world -->
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
              <br><a class="link" href="https://repl.it/@JeffreyYu1/Wizard-World#main.py" target="_blank">VIEW PROJECT ></a>
            </p>
          </el-card>
        </el-col>
      </el-row>

      <el-dialog
        style
        v-if="wizardWorldShow"
        :visible="wizardWorldShow"
        @close='wizardWorldShow = false'
        :append-to-body="true">
        <!-- <h2>Scan the following QR code using Wechat to open TreeHole Miniprogram ↓</h2> -->
        <script async src="https://edube.org/sandbox/1bbc4320-f40c-11ea-abce-024250c4691c/embed?height=250"></script>
      </el-dialog>

    </div><br>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      minecraftShow: false,
      treeHoleShow: false,
      fantasyShow: false,
      greenBoxShow: false,
      wizardWorldShow: false,
    }
  }
}
</script>

<style scoped>
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

.dialog {
  margin: 0 auto;
  width: 60%;
  color: gray;
}

.video {
  width: 100%;
  height: 100%;
}

</style>
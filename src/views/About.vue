<template>
  <div>
    <Navbar />
    <div class="contain about-contain">
      <div class="left">
        <h1>Why hire me?</h1>
        <p>
          As a front-end developer, I create responsive, user-friendly interfaces that turn designs into fast, functional, and engaging web experiences.
        </p>
        <button @click="handleExperience">Experience</button>
        <button @click="handleEducation">Education</button>
        <button @click="handleSkills">Skills</button>
        <button @click="handleAboutDetails">About me</button>
      </div>
      <div class="right">
        <div class="experience-right" v-if="showExperience">
          <h2>My Experience</h2> 
          <p>
            Over the past three years, I have specialized in turning UI/UX designs into clean, efficient, and user-focused digital experiences.
          </p>
          <div class="flex">
            <div class="card">
              <h4>2016-2017</h4>
              <h3>Graphics Design</h3>
              <p class="p-flex"><span>.</span>(WTI) World Transformers International</p>
            </div>
            <div class="card">
              <h4>2018-2019</h4>
              <h3>Json DB</h3>
              <p class="p-flex"><span>.</span>Online</p>
            </div>
            <div class="card">
              <h4>2023-2023</h4>
              <h3>WPA Frontend</h3>
              <p class="p-flex"><span>.</span>Zoom Incorporated</p>
            </div>
            <div class="card">
              <h4>2024-2025</h4>
              <h3>Frontend</h3>
              <p class="p-flex"><span>.</span>Zoom Consults</p>
            </div>
          </div>  
        </div>


        <div class="education" v-if="showEducation">
          <h2>My education</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt
            in vero sequi optio nihil quo, praesentium repellendus libero non
            reprehenderit dolores porro ea illo vitae ab quasi fugiat rerum!
          </p>
          <div class="flex">
            <div class="card">
              <h4>2018-2022</h4>
              <h3>Computer Science</h3>
              <p class="p-flex"><span>.</span>Kwara State University</p>
            </div>

            <div class="card">
              <h4>2022-2023</h4>
              <h3>React Frontend</h3>
              <p class="p-flex"><span>.</span>Online Course</p>
            </div>
            <div class="card">
              <h4>2024-2025</h4>
              <h3>FullStack (Python)</h3>
              <p class="p-flex"><span>.</span>Alabian Solutions</p>
            </div>

            <div class="card">
              <h4>2025-2025</h4>
              <h3>Vue Frontend</h3>
              <p class="p-flex"><span>.</span>Online Course</p>
            </div>
          </div>
        </div>
        <div class="skills" v-if="showSkills">
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt
            in vero sequi optio nihil quo, praesentium repellendus libero non
            reprehenderit dolores porro ea illo vitae ab quasi fugiat rerum!
          </p>
          <div class="flex-2 icons">
            <div class="card">
              <div>
                <Icon icon="logos:python" />
                <p>Python</p>
              </div>
            </div>
            <div class="card">
              <div>
                <Icon icon="logos:react" />
                <p>React</p>
              </div>
            </div>
            <div class="card">
              <div>
                <Icon icon="logos:vue" />
                <p>Vue</p>
              </div>
            </div>
            <div class="card">
               <div>
                <Icon icon="logos:django" />
                <p>Django</p>
               </div>
            </div>
            <div class="card">
              <div>
                <Icon icon="logos:javascript" />
                <p>JavaScript</p>
              </div>
            </div>
            <div class="card">
              <div>
                <Icon icon="logos:css-3" />
                <p>Css</p>
              </div>
            </div>
          </div>  
        </div>


        <div class="about-details" v-if="showAbout">
          <h2>About Me</h2>
          <p>
            A dedicated Frontend Engineer with hands-on experience building
            responsive, user-friendly web applications using modern technologies like
            Vue.js, React, JavaScript, Tailwind CSS, and REST APIs. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue"

export default {
  components: {
    Navbar,
    Icon,
  },
  data(){
    return{
      showExperience: true,
      showEducation: false,
      showSkills: false,
      showAbout: false,
      isActive: ref(true),
    }
  },
  methods:{
    handleExperience(){
      this.showExperience = true
      this.showEducation = false
      this.showSkills = false
      this.showAbout = false
    },
    handleEducation(){
      this.showEducation = true
      this.showExperience = false
      this.showSkills = false
      this.showAbout = false
      this.isActive = true
    },
    handleSkills(){
      this.showExperience = false
      this.showEducation = false
      this.showSkills = true
      this.showAbout = false
    },
    handleAboutDetails(){
      this.showExperience = false
      this.showEducation = false
      this.showSkills = false
      this.showAbout = true
    }
  }
};
</script>

<style>

.left {
  flex-basis: 40%;
  padding: 10px;
}
.right {
  flex-basis: 60%;
  padding: 10px;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
.right::-webkit-scrollbar {
  width: 8px;
}
.right::-webkit-scrollbar-track {
  background: #364c61;
  border-radius: 10px;
}
.right::-webkit-scrollbar-thumb {
  background: #009833;
  border-radius: 10px;
}
.right::-webkit-scrollbar-thumb:hover {
  background: #006e25;
}
.left button {
  display: block;
  margin-bottom: 20px;
  background: #364c61;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  width: 100%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
}
.left button:hover {
  background: #009833;
}
.left button.active{
  background: #009833;
}
.left p,
.right p {
  font-size: 14px;
  line-height: 22px;
  font-family: "lato";
  word-spacing: 3px;
  color: #dddddd;
}
.left h1 {
  font-size: 40px;
}
.left h1,
.right h2,
.right h3,
.right h4 {
  font-family: "consolas";
}
.right h2 {
  font-size: 30px;
}
.right .flex {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.right .flex-2{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.right .card{
  background: #364c61;
  border-radius: 10px;
  padding: 10px 20px ;
  height: 120px;
}
.right h3,
.right h4, .right p{
  margin: 0;
}
.right .card p{
  font-size: 12px;
}
.p-flex{
  display: flex;
}
.right .card h4{
  color: #009833;
  margin-bottom: 10px;
  font-weight: bold;
}
.right .card h3{
  font-size: 18px;
  margin-bottom: 15px;
}
.p-flex span{
  color: #009833;
  margin-right: 10px;
  font-size: 50px;
}
.right p{
  margin-bottom: 20px;
}
.icons .card{
  display: flex;
  font-size: 40px;
  justify-content: center;
  align-items: center;
}
.icons .card p{
  text-align: center;
}


@media (max-width: 600px) {
  .right .flex {
    grid-template-columns: 1fr; /* one column on mobile */
  }
  .about-contain{
    display: block;
  }
  .right .flex-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .right::-webkit-scrollbar {
    display: none;
  }
  .right{
    overflow: visible;
  }
  .left p, .right p{
    font-size: 16px;
    font-weight: 400;
    word-spacing: normal;
  }
}
</style>

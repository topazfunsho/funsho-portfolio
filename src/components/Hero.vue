<template>
  <div class="contain">
    <div>
      <div class="hero-about">
        <div class="hero-about-photo-1">
            <img src="../assets/my_pic.png" alt="funsho">
        </div>
        <div class="hero-about-text">
            <h6>Frontend Engineer</h6>
            <h1>Hello I'm <span>Funsho Alabi</span></h1>
            <p>A dedicated Frontend Engineer with hands-on experience building
            responsive, user-friendly web applications using modern technologies like
            Vue.js, React, JavaScript, Tailwind CSS, and REST APIs. 
            </p>
            <div class="flex">
                <button @click="handleDownload" id="cv-download">
                    Download cv
                    <i><ArrowDown size="20"/></i>
                </button>

                <div class="social">
                    <i><Instagram @click="handleInstagram" size="30" /></i>
                    <i><Linkedin @click="handleLinkedIn" size="30" /></i>
                </div>
            </div>
        </div>
        <div class="hero-about-photo-2">
            <img src="../assets/my_pic.png" alt="funsho">
        </div>
      </div>

      <div class="experience">
        <div class="flex">
            <h2 v-if="experienceYears">{{ experienceYears }}</h2>
            <h2 v-else>0</h2>
            <p>Years of<span>experience</span></p>
        </div>
        <div class="flex">
            <h2 v-if="projectsCompleted">{{ projectsCompleted }}</h2>
            <h2 v-else>0</h2>
            <p>Projects<span>completed</span></p>
        </div>
        <div class="flex">
            <h2 v-if="techMastered">{{ techMastered }}</h2>
            <h2 v-else>0</h2>
            <p>Technologies<span>mastered</span></p>
        </div>
        <div class="flex">
            <h2 v-if="commits">{{ commits }}</h2>
            <h2 v-else>0</h2>
            <p>Code<span>commits</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDown, Instagram, Linkedin } from "lucide-vue-next";
import { onMounted, ref } from 'vue';

export default {
    components:{
        ArrowDown,
        Instagram,
        Linkedin,
    },
    methods:{
        handleInstagram(){
            window.location.href = "https://www.instagram.com/_fun_tun/"
        },
        handleLinkedIn(){
            window.location.href = "https://www.linkedin.com/in/funsho-alabi-b55786375/"
        },
        
    },
    setup(){
        const commits = ref(0)
        const projectsCompleted = ref(0)
        const experienceYears = ref(0)
        const techMastered = ref(0)
        onMounted(()=>{
            // console.log("Mounted")   
            commits.value = 0
            projectsCompleted.value = 0
            experienceYears.value = 0
            techMastered.value = 0
            const duration = 3000
            const max = 200
            const max1 = 3
            const max2 = 5
            const max3 = 9
            const duration2 = 2000
            const intervalTime2 = duration2 / max3
            const intervalTime = duration / max

            const timer = setInterval(() => {
                commits.value++

                if (commits.value >= max) {
                    clearInterval(timer);
                }
            }, intervalTime);

            const timer2 = setInterval(()=>{
                techMastered.value++

                if (techMastered.value >= max3) {
                    clearInterval(timer2);
                }
            }, intervalTime2);

            const timer3 = setInterval(()=>{
                experienceYears.value++

                if (experienceYears.value >= max1) {
                    clearInterval(timer3);
                }
            }, intervalTime2);

            const timer4 = setInterval(()=>{
                projectsCompleted.value++

                if (projectsCompleted.value >= max2) {
                    clearInterval(timer4);
                }
            }, intervalTime2);
            
        })
        
        function handleDownload(){
            console.log("download button clciked")
            const a = document.createElement('a');
            a.href = "../../files/Oluwafunsho-Alabi-CV.pdf";
            a.download = "Oluwafunsho-Alabi-CV.pdf";
            a.click();
            console.log(a);
        }

        
        
        return{handleDownload, commits, projectsCompleted, experienceYears, techMastered}
    }
};
</script>

<style>
.contain {
  padding: 1% 15% 0% 15%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-about {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero-about-text{
    flex-basis: 50%;
}
.hero-about-text h6{
    margin-bottom: -30px;
    font-size: 13px;
}
.hero-about-text span{
    display: block;
    color: #009833;
}
.hero-about-text h1{
    font-family: 'lato';
    font-size: 50px;
    margin-bottom: -10px;
}
.hero-about-text p{
    font-size: 15px;
    font-family: 'lato';
    letter-spacing: 1px;
    line-height: 25px;
}
.hero-about-text button{
    border: 3px solid #009833;
    border-radius: 50px;
    padding: 5px 15px;
    background: transparent;
    color: #009833;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin-right: 40px;
    cursor: pointer;
}
.hero-about-text button:hover{
    color: #fff;
}
.hero-about-text button i{
    margin-left: 5px;
}
.hero-about-text .social i:hover{
    color: #fff;
}
.flex, .experience{
    display: flex;
    align-items: center;
}
.experience{
    justify-content: space-between;
}
.social i{
    color: #009833;
}
.hero-about-photo-2, .hero-about-photo-1{
    border: 3px dashed #009833;
    /* border-image: repeating-linear-gradient(90deg, #009833 0 10px, transparent 10px 18px, #009833 18px 30px, transparent 30px 40px) 1; */
    border-radius: 50%;
    overflow: hidden;
    height: 300px;
    width: 300px;
}
.hero-about-photo-1{
    display: none;
}
.flex span{
    display: block;
}
.flex h2{
    font-size: 50px;
    margin-right: 10px;
}
.flex p{
    font-family: 'lato';
    font-size: 14px;
    letter-spacing: 1px;
}
.hero-about-photo-2 img, .hero-about-photo-1 img{
    width: 350px;
}
@media(max-width: 600px){
    .hero-about{
        display: block;
    }
    .hero-about-text p{
        font-size: 20px;
        font-family: '';
    }
    .experience p{
        font-size: 20px;
    }
    .flex h2{
        font-size: 70px;
    }
    .hero-about-photo-1{
        display: block;
        justify-self: center;
        margin-top: 2%;
        margin-bottom: -2%;
    }
    .hero-about-photo-1{
        width: 100%;
        height: 100%;
    }
    .hero-about-photo-1 img{
        width: calc(100% - 10px);
        height: calc(100% - 50px);
        object-fit: cover;
    }
    .hero-about-photo-2{
        display: none;
    }
    .hero-about-text{
        flex-basis: 100%;
    }
    .experience{
        display: block;
        justify-self: center;
    }
    
    .contain{
        height: auto;
        padding: 1% 5%;
    }
    .experience{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    
}
</style>

<template>
  <div class="contain">
    <div>
      <div class="hero-about">
        <div class="hero-about-text">
            <h6>Frontend Engineer</h6>
            <h1>Hello I'm <span>Funsho Alabi</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime temporibus hic ullam placeat commodi corrupti ut, facilis quisquam totam dolores, ad culpa fugiat laborum cupiditate dicta iusto ea fugit!</p>
            <div class="flex">
                <button>
                    Download cv
                    <i><ArrowDown size="20"/></i>
                </button>

                <div class="social">
                    <i><Instagram size="30" /></i>
                    <i><Linkedin size="30" /></i>
                </div>
            </div>
        </div>
        <div class="hero-about-photo">
            <img src="../assets/my_pic.png" alt="funsho">
        </div>
      </div>

      <div class="experience">
        <div class="flex">
            <h2>3</h2>
            <p>Years of<span>experience</span></p>
        </div>
        <div class="flex">
            <h2>5</h2>
            <p>Projects<span>completed</span></p>
        </div>
        <div class="flex">
            <h2>4</h2>
            <p>Technologies<span>mastered</span></p>
        </div>
        <div class="flex">
            <h2>200</h2>
            <p>Code<span>commits</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDown, Instagram, Linkedin } from "lucide-vue-next";

export default {
    components:{
        ArrowDown,
        Instagram,
        Linkedin,
    }
};
</script>

<style>
.contain {
  padding: 2% 15% 0% 15%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-about {
  display: flex;
  justify-content: space-between;
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
}
.hero-about-text button i{
    margin-left: 5px;
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
.hero-about-photo{
    border: 3px dashed #009833;
    border-radius: 50%;
    overflow: hidden;
    height: 300px;
    width: 300px;
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
.hero-about-photo img{
    width: 350px;
}
@media(max-width: 600px){
    .hero-about-photo{
        display: none;
    }
    .hero-about-text{
        flex-basis: 100%;
    }
    .experience{
        display: block;
    }
    .contain{
        height: auto;
        padding: 1% 5%;
    }
    
}
</style>

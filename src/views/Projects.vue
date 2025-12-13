<template>
  <div>
    <Navbar />
    <div class="contain">
      <div class="carousel">
        <div class="slides" id="carouselInner">
          <div class="slide">
            <div class="left-carousel">
              <h1>01</h1>
              <h3>Frontend Project</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam consectetur, at cum neque hic quas minus, facere sapiente molestias voluptatem nihil cupiditate aspernatur ipsa quasi reprehenderit amet in non.</p>
              <h6>html, css, javascript</h6>
              <hr>
              <div>
                <i><ArrowUpRight @click="handleProjectLink" /></i>
                <i><Github /></i>
              </div>
            </div>
            <div class="right-carousel">
              <img src="../assets/1-desk.png" alt="image1">
            </div>
          </div>

          <div class="slide">
            <div class="left-carousel">
              <h1>02</h1>
              <h3>Fullstack Project</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam consectetur, at cum neque hic quas minus, facere sapiente molestias voluptatem nihil cupiditate aspernatur ipsa quasi reprehenderit amet in non.</p>
              <h6>html, css, javascript</h6>
              <hr>
              <div>
                <i><ArrowUpRight /></i>
                <i><Github /></i>
              </div>
            </div>
            <div class="right-carousel">
              <img src="../assets/1-desk.png" alt="image2">
            </div>
          </div>

          <div class="slide">
            <div class="left-carousel">
              <h1>03</h1>
              <h3>E-commerce Project</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam consectetur, at cum neque hic quas minus, facere sapiente molestias voluptatem nihil cupiditate aspernatur ipsa quasi reprehenderit amet in non.</p>
              <h6>html, css, javascript, python, django</h6>
              <hr>
              <div>
                <i><ArrowUpRight /></i>
                <i><Github /></i>
              </div>
            </div>
            <div class="right-carousel">
              image kk
            </div>
          </div>
        </div>
        <button class="prev" id="prevBtn">❮</button>
        <button class="next" id="nextBtn">❯</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { Github, ArrowUpRight } from 'lucide-vue-next'
import { onMounted } from "vue";


export default {
    components:{
        Navbar,
        Github, 
        ArrowUpRight,
    },
    methods:{
      handleProjectLink(){
        window.location.href = "https://topazfunsho.github.io/hotel-booking/";
      },
    },
    setup(){

      onMounted(() => {
        
        const carouselInner = document.getElementById("carouselInner")
        const prevBtn = document.getElementById("prevBtn")
        const nextBtn = document.getElementById("nextBtn")
        let index = 0
        const totalSlides = document.querySelectorAll(".slide").length
        console.log(totalSlides)

        
        nextBtn.addEventListener("click", () => {
          index = (index + 1) % totalSlides;
          updateCarousel();
        })
        prevBtn.addEventListener("click", () => {
          index = (index - 1 + totalSlides) % totalSlides;
          updateCarousel();
        });

        function updateCarousel() {
          carouselInner.style.transform = `translateX(-${index * 100}%)`;
        }

      })
    }
}
</script>

<style>

  .left-carousel h1{
    font-size: 60px;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }
  .slide{
    display: flex;
    min-width: 100%;
    height: 100%;
  }
  .slides{
    display: flex;
    transition: transform 0.5s ease;
  }
  .carousel {
    height: 80vh;
    overflow: hidden;
    margin: auto;
  }
  
  .left-carousel{
    flex-basis: 50%;
    padding-right: 20px;
  }
  .left-carousel h6{
    color: #009833;
    font-size: 14px;
  }
  hr{
    border: none;
    border-top: 3px solid #5a7d9e;
    margin-bottom: 30px;
  }
  .right-carousel{
    flex-basis: 50%;
    overflow: hidden;
  }
  .right-carousel img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .left-carousel p{
    font-size: 13px;
    font-family: 'lato';
    line-height: 20px;
  }
  .left-carousel i{
    padding: 20px 10px 5px 10px;
    background: #5a7d9e;
    margin-right: 10px;
    border-radius: 50%;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  }
  .left-carousel i:hover{
    background: #009833;
  }
  .prev, .next {
  position: absolute;
  top: 84%;
  transform: translateY(-50%);
  background: #009833;
  color: #2c3e50;
  border: none;
  font-size: 25px;
  padding: 1px 15px;
  cursor: pointer;
  z-index: 10;
  font-size: 15px;
  border-radius: 50px;
}
.prev:hover, .next:hover {
  background: black;
  color: #fff;
}

.prev { left: 78%; }
.next { right: 15%; }



@media (max-width: 600px) {
  .slide{
    display: block;
  }
  .carousel {
    height: auto;
    overflow: hidden;
    margin: auto;
    padding-top: 0;
  }
  .left-carousel{
    padding-top: 0;
    margin-bottom: 10px;
  }
  .left-carousel h1{
    margin: 0;
  }
  .prev, .next{
    top: 80%;
  }
  .prev{left: 2%}
  .next{right: 2%}
}
</style>
<template>
  <div>
    <Navbar />
    <div class="contain contact-contain">
      <div class="left-contact">
        <div v-if="isGreen" class="alert-green">{{ success }} {{ fNameError }}</div>
        <div v-if="isRed" class="alert-red">{{ success }} {{ fNameError }}</div>
        <h2>Lets's work together</h2>
        <p>
          Have an idea or project in mind? I’d love to hear about it. let’s work together and build something amazing.
        </p>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="flex">
            <input type="text" placeholder="first name" v-model="fName">
            <input type="text" placeholder="last name" v-model="lName">
          </div>
          <div class="flex">
            <input type="email" placeholder="email" v-model="email">
            <input type="number" placeholder="phone-number" v-model="phoneNum">
          </div>
          <textarea rows="4" v-model="message"></textarea>
          <button>Send message</button>
        </form>
      </div>

      <div class="right-contact">
        <div>
          <i><Phone /></i>
          <p><span>Phone</span>(+234)807 409 3876</p>
        </div>
        <div>
          <i><Mail /></i>
          <p><span>Email</span>oluwafunshoalabi97@gmail.com</p>
        </div>
        <div>
          <i><MapPin /></i>
          <p><span>Address</span>Bankole Street, Adepegba 100283, Lagos-Nigeria</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

export default {
    components:{
        Navbar,
        Phone,
        Mail,
        MapPin,
    },
    data(){
      return{
        fName: '',
        lName: '',
        email: '',
        phoneNum: '',
        message: '',
        isGreen: false,
        success: '',
        isRed: false,
      }
    },
    methods:{
      handleSubmit(){
          // this.fNameError = this.fName === '' ? 'Please enter your name' : ''
          if(this.fName === ''){
            this.isRed = true
            this.success = 'Please enter your name'
            setInterval(()=>{
              this.isRed = false
            }, 8000)
          }
          else if(this.email === ''){
            this.isRed = true
            this.success = 'Please enter your email address'
            setInterval(()=>{
              this.isRed = false
            }, 8000)
          }
          else if(this.phoneNum < 10){
            this.isRed = true
            this.success = 'Please enter a correct number'
            setInterval(()=>{
              this.isRed = false
            }, 8000)
          }
          else if(this.message === ''){
            this.isRed = true
            this.success = 'Please enter a message before sending'
            setInterval(()=>{
              this.isRed = false
            }, 8000)
          }
          else{
            this.success = 'Message sent successfully'
            this.isGreen = true
            this.isRed = false
            setInterval(()=>{
              this.isGreen = false
            }, 5000)
          }
          
          
        
      }
    }

}
</script>

<style>
    .alert-green{
      background: rgba(30, 255, 0, 0.2);
      color: #0bd84f;
    }
    .alert-green, .alert-red{
      margin-top: 5px;
      border-radius: 5px;
      padding: 10px;
    }
    .alert-red{
      background: rgba(255, 176, 213, 0.2);
      color: rgb(152, 2, 2);
    }
    .left-contact{
      flex-basis: 50%;
      background: #364c61;
      padding:0 10px 20px 20px;
    }
    .left-contact p{
      font-size: 13px;
      font-family: 'lato';
      letter-spacing: 1px;
      line-height: 15px;
      color: #dddddd;
      line-height: 20px;
    }
    .left-contact h2{
      color: #009833;
      font-size: 25px;
      margin-top: 10px;
    }
    .right-contact{
      padding: 60px;
    }
    .contact-form{
      margin-top: 20px;
    }
    .contact-form .flex{
      justify-content: space-between;
    }
    .left-contact input{
      flex-basis: 50%;
    }
    .left-contact input,.contact-form textarea, .contact-form select{
      background: #2c3e50;
      margin-right: 10px;
      margin-bottom: 10px;
      font-size: 15px;
      padding: 10px 20px;
      color: #fff;
      border-radius: 5px;
    }
    .contact-form select{
      width: 97.5%;
    }
    .contact-form select,.contact-form textarea{
      border: none;
      outline: none;  
    }
    .contact-form textarea{
      width: 88%;
    }
    .left-contact form{
      display: block;
    }
    .left-contact button{
      border-radius: 50px;
      padding: 10px 20px;
      background: #009833;
      outline:  none;
      border: none;
      cursor: pointer;
      color: #cbcbcb;
    }
    .left-contact button:hover{
      background: #0bd84f;
      color: #2c3e50;
    }
   .right-contact div{
    display: flex;
    align-items: center;
   }
   .right-contact i{
    margin-right: 10px;
    background: #364c61;
    padding: 10px;
    border-radius: 5px;
    color: #009833;
   }
   .right-contact span{
    font-size: 11px;
    display: block;
    color: #009833;
   }

   @media (max-width: 600px) {

     .contact-contain{
      display: block;
     }
     .right-contact{
      padding: 40px 0;
     }
     .left-contact p{
      font-family: 'poppins';
      font-size: 16px;
      font-weight: 400;
     }
     .left-contact button{
      font-size: 16px;
     }
     .right-contact p{
      font-family: 'poppins';
     }
   }

</style>
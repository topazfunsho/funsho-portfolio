<template>
  <div>
    <Navbar />
    <div class="contain contact-contain">
      <div class="left-contact">
        <h2>Lets's work together</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero porro excepturi perferendis, labore velit alias autem nobis possimus adipisci magni enim ab iusto maxime corrupti, inventore iste vitae aliquid veniam.
        </p>
        <form class="contact-form">
          <div class="flex">
            <input type="text" placeholder="first name">
            <input type="text" placeholder="last name">
          </div>
          <div class="flex">
            <input type="email" placeholder="email">
            <input type="number" placeholder="phone-number">
          </div>
          <select>
            <option value="0">select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <textarea rows="4"></textarea>
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
    }
}
</script>

<style>
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
      color: #cbcbcb;
    }
    .left-contact h2{
      color: #009833;
      font-size: 25px;
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
   }

   @media (max-width: 600px) {

     .contact-contain{
      display: block;
     }
     .right-contact{
      padding: 40px 0;
     }
   }

</style>
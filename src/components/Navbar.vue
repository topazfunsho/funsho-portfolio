<template>
  <div class="desktop">
    <div class="navbar">
      <div class="logo">
        <router-link :to="{ name: 'home' }">mylogo</router-link>
      </div>
      <div class="nav">
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
          <li>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
          </li>
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
        <div class="search">
          <i><Search :size="28" stroke="red" /></i>
        </div>
      </div>
      <div class="social">
        <i><LinkedinIcon size="20" stroke="#0A66C2" /></i>
        <i><Instagram size="20" /></i>
      </div>
    </div>
  </div>

  <div class="mobile">
    <div class="navbar">
      <div class="logo">
        <router-link :to="{ name: 'home' }">my mobile logo</router-link>
      </div>
      <div class="menu">
        <i @click="handleMenuOpen" v-if="isOpen"><Menu :size="28" /></i>
        <i @click="handleMenuClose" v-else><X :size="28" /></i>
      </div>
    </div>

    <div class="mobile-nav" v-if="showMenu">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'projects' }">Projects</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>

      <div class="mobile-search">
        <input type="text" v-model="searchInput" placeholder="search projects"/>
        <button><i><Search :size="35" stroke="red" /></i></button>
      </div>
        <!-- <div class="search-list" v-for="name in matchingNames" :key="name">{{name}}</div> -->
      <div class="social">
        <i><LinkedinIcon size="30" stroke="#0A66C2" /></i>
        <i><Instagram size="30" /></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, LinkedinIcon, Menu, Instagram, X } from "lucide-vue-next";
import { ref, computed } from "vue";

export default {
  name: "Navbar",
  components: {
    Search,
    LinkedinIcon,
    Menu,
    Instagram,
    X,
  },
  data(){
    const searchInput = ref('')
    const names = ref(['tuniss', 'john', 'james', 'mary', 'sarah', 'matthew', 'bola'])

      const matchingNames = computed(()=>{
        return names.value.filter((name) => name.includes(searchInput.value))
      })
    return{
        showMenu: false,
        isOpen: true,
        searchInput,
        matchingNames,
        names
    }
  },

  methods: {
    handleMenuOpen() {
      this.showMenu = !this.showMenu
      this.isOpen = !this.isOpen
    },
    handleMenuClose() {
      this.isOpen = !this.isOpen
      this.showMenu = !this.showMenu
    },
  },
};
</script>

<style>
/* colors 
emerald(#50C878)
Dark Emerald (#2E8B57)
Light Emerald (#A8E6A2)
Medium Emerald (#70D38C)

Light Gray (#F5F5F5)
Dark Gray (#333333)

Crimson Red (#DC143C)
Coral (#FF6F61)
Teal (#20B2AA)
 */
 button{
    border: none;
    outline: none;
 }
.navbar,
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar {
  padding: 1% 5%;
  background: #f4f4f4;
  /* position: relative; */
}
.nav li,
.nav a {
  list-style: none;
  display: inline;
  margin: 2%;
  color: #333333;
  font-weight: 400;
}
.nav ul {
  margin-right: 30%;
}
.nav a {
  text-decoration: none;
}
.nav a:hover,
.nav a.router-link-exact-active {
  color: #009833;
}
.search i,
.social i, .mobile-search i {
  color: #50c878;
  cursor: pointer;
  /* color: rgb(134, 134, 134); */
}
.social i {
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
}
.mobile {
  display: none;
}

/* phone screen  */
@media (max-width: 600px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
  .mobile .navbar {
    padding: 20px 20px 10px 20px;
  }
  .mobile-nav {
    background-color: rgba(229, 229, 229, 0.5);
    height: auto;
    position: absolute;
    width: 100%;
    padding: 10px 0 20px 0;
  }
  .mobile-nav a {
    display: block;
    padding: 10px 20px;
    font-size: 20px;
    text-decoration: none;
    color: #333333;
  }
  .mobile-nav a.router-link-exact-active {
    background: #009833;
    color: #fff;
  }
  .mobile-search,
  .mobile-nav .social {
    margin-top: 20px;
  }
  .mobile-search input {
    outline: none;
    border: none;
    background: white;
    padding: 10px 20px;
    width: 65%;
    font-size: 18px;
    color: #009833;
    margin: 0 5px 0 20px;
    border-radius: 50px;
  }
  .mobile-search {
    color: #50c878;
    display: flex;
    align-items: center;
  }
  .mobile-nav .social i {
    margin: 10px;
    cursor: pointer;
  }
  .mobile-nav .social {
    background: transparent;
  }
  .search-list{
    padding: 10px 30px;
  }
}
</style>

<template>
  <div class="desktop">
    <div class="navbar">
      <div class="logo">
        <router-link :to="{ name: 'home' }">Fun<span>Sho</span></router-link>
      </div>
      <div class="nav">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>

        <router-link :to="{ name: 'projects' }">Projects</router-link>

        <router-link :to="{ name: 'contact' }">Contact</router-link>

        <div class="search">
          <i @click="toggleModal"><Search :size="28" stroke="red" /></i>
        </div>
      </div>
    </div>
  </div>

  <div class="mobile">
    <div class="navbar">
      <div class="logo">
        <router-link :to="{ name: 'home' }">Fun<span>Sho</span></router-link>
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
        <input
          type="text"
          v-model="searchInput"
          placeholder="search projects"
        />
        <button>
          <i><Search :size="35" stroke="red" /></i>
        </button>
      </div>
    </div>
  </div>
  <div v-if="showModal">
    <SearchModal @close="toggleModal" />
  </div>
</template>

<script>
import { Search, Menu, X } from "lucide-vue-next";
import { ref, computed } from "vue";
import SearchModal from "./SearchModal.vue";

export default {
  name: "Navbar",
  components: {
    Search,
    Menu,
    X,
    SearchModal,
  },
  data() {
    const searchInput = ref("");
    const names = ref([
      "tuniss",
      "john",
      "james",
      "mary",
      "sarah",
      "matthew",
      "bola",
    ]);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(searchInput.value));
    });
    return {
      showMenu: false,
      isOpen: true,
      searchInput,
      matchingNames,
      names,
      showModal: false,
    };
  },

  methods: {
    handleMenuOpen() {
      this.showMenu = !this.showMenu;
      this.isOpen = !this.isOpen;
    },
    handleMenuClose() {
      this.isOpen = !this.isOpen;
      this.showMenu = !this.showMenu;
    },
    toggleModal() {
      this.showModal = !this.showModal;
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
button {
  border: none;
  outline: none;
}
.logo a {
  color: #fff;
  text-decoration: none;
  font-weight: bolder;
  font-size: 20px;
}
.logo a span {
  color: #009833;
}
.navbar,
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar {
  padding: 1% 15%;
  background: #121212;
  color: #fff;
  /* position: relative; */
}
.nav li,
.nav a {
  list-style: none;
  display: inline;
  margin: 10px;
  color: #fff;
  font-weight: 400;
}
.nav a {
  text-decoration: none;
}
.nav a:hover,
.nav a.router-link-exact-active {
  color: #009833;
}
.search i,
.social i,
.mobile-search i {
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
    background-color: #2c3e50;
    height: auto;
    position: absolute;
    width: 100%;
    padding: 10px 0 50px 0;
    border-bottom: 2px solid red;
  }
  .mobile-nav a {
    display: block;
    padding: 10px 20px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
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
  .mobile-search button{
    background: transparent;
  }
  .mobile-nav .social i {
    margin: 10px;
    cursor: pointer;
  }
  .mobile-nav .social {
    background: transparent;
  }
  .search-list {
    padding: 10px 30px;
  }
}
</style>

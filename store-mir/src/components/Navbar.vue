<template>
  <b-navbar toggleable="md" type="dark" class="mb-4 bg-black">
    <b-container>
      <b-navbar-brand>
        <b-img
          :src="require('@/assets/logoNav.jpg')"
          style="max-height: 4rem"
          class="img-fluid"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-end">
        <b-navbar-nav class="align-items-center">
          <b-nav-item>
            <router-link to="/" class="item">Home</router-link>
          </b-nav-item>
          <!-- <b-nav-item>
            <router-link to="about" class="item">About</router-link>
          </b-nav-item> -->
          <b-nav-item>
            <b-button variant="primary" v-if="!getUser">
              <router-link to="login" class="btn-login">Login</router-link>
            </b-button>
            <b-button variant="danger" v-if="getUser" @click="logOut"
              >Logout
            </b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: null,
      black: "#000",
    };
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    logOut() {
      this.$store.commit("DELETE_USER", null);
      this.$router.push("/login");
      localStorage.removeItem("token");
    },
  },
};
</script>
<style lang="less">
.item {
  text-decoration: none;
  color: #fff;
}
.btn-login {
  color: #fff;
  text-decoration: none;
}
</style>

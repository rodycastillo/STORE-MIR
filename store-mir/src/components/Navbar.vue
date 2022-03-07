<template>
  <b-navbar toggleable="md" type="dark" variant="dark" class="mb-4">
    <b-container>
      <b-navbar-brand>Store MIR</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-end">
        <b-navbar-nav>
          <b-nav-item class="align-self-center">
            <router-link to="/" class="item">Home</router-link>
          </b-nav-item>
          <b-nav-item class="align-self-center">
            <router-link to="/about" class="item">About</router-link>
          </b-nav-item>
          <b-nav-item class="align-self-center">
            <b-button variant="primary">
              <router-link to="/login" class="btn-login">Login</router-link>
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

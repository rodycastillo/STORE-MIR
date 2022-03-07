<template>
  <b-container>
    <div>
      <h1>Login</h1>
      <hr />
      <b-form @submit="signUp" class="form">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-3 text-center"
          >Login</b-button
        >
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      alert(JSON.stringify(this.form));
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>
<style lang="less">
.form {
  width: 20rem;
}
</style>

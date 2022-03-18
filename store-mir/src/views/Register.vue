<template>
  <b-container>
    <div>
      <h1>Register</h1>
      <hr />
      <b-form @submit="signUp" class="form">
        <b-form-group id="input-group-0" label="Name:" label-for="input-0">
          <b-form-input
            id="input-0"
            v-model="form.name"
            type="text"
            placeholder="Enter Name"
          ></b-form-input>
        </b-form-group>
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
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-3 text-center"
          >Register</b-button
        >
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      const { name, email, password } = this.form;
      console.log({ name, email, password });
      this.$store.dispatch("signUp", { name, email, password });
      //   this.$router.replace("/login");
    },
  },
};
</script>
<style lang="less">
.form {
  width: 20rem;
}
</style>

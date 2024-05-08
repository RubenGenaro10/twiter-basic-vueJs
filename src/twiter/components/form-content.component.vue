<script>
import {User} from "../model/user.entity.js";

export default {
  name: "form-content",
  data() {
    return {
      user: {
        type: User,
        required: true
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado');
      this.$emit('form-submitted',this.user);
      this.resetForm();
    },
    resetForm() {
      this.user = new User();
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="card flex flex-column md:flex-row gap-3">
      <pv-input-group>
        <pv-input-group-addon>
          <i class="pi pi-user"></i>
        </pv-input-group-addon>
        <pv-input-text v-model="user.firstName" placeholder="firstName" />
      </pv-input-group>

      <pv-input-group>
        <pv-input-group-addon>
          <i class="pi pi-user"></i>
        </pv-input-group-addon>
        <pv-input-text v-model="user.lastName"  placeholder="lastName" />
      </pv-input-group>

      <pv-input-group>
        <pv-input-group-addon>
          <i class="pi pi-envelope"></i>
        </pv-input-group-addon>
        <pv-input-text v-model="user.email" placeholder="Email" />
      </pv-input-group>

      <pv-input-group>
        <pv-input-group-addon>
          <i class="pi pi-circle"></i>
        </pv-input-group-addon>
        <pv-input-text v-model="user.info" placeholder="Info" />
      </pv-input-group>
    </div>
    <pv-button type="submit">Submit</pv-button>
  </form>
</template>

<style scoped>

</style>

<script>
import {User} from "../model/user.entity.js";

export default {
  name: "created-and-edit",
  props:{
    user:{
      type: User,
      required: true
    }
  },
  methods:{
    editUser(){
      this.$emit('edit-user',this.user)
    }
  }
}
</script>

<template>
  <form>
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
    <pv-button type="submit">Crear</pv-button>
    <pv-button type="submit" @click.prevent="editUser">Editar</pv-button>
  </form>
</template>

<style scoped>

</style>

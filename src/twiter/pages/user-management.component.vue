<script>
import {TwiterApiService} from "../services/twiter-api.service.js";
import DataManager from "../components/data-manager.component.vue";
import CreatedAndEdit from "../components/created-and-edit.component.vue";

export default {
  name: "user-management",
  components: {CreatedAndEdit, DataManager},
  data(){
    return {
      users: [],
      user:{},
      twiterService: new TwiterApiService()
    }
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    convertDisplayableUserToUser(displayableUser){
      return {
        firstName: displayableUser.firstName,
        lastName: displayableUser.lastName,
        email: displayableUser.email,
        info: displayableUser.info
      }
    },
    ondeleteUser(user){
      this.user = user;
      this.deleteUser();
    },

    onupdateUser(user){
      this.user = user;
      this.editUser();
      this.user={}
    },

    onSelecteditUser(user){
      this.user = user;
    },

    getAllUsers(){
      this.twiterService.getAllUsers().then(response => {
        this.users = response.data;
        console.log(response.data);
      });
    },
    deleteUser(){
      this.twiterService.deleteUser(this.user.id).then(response => {
        console.log(response.data);
        this.users = this.users.filter(user => user.id !== this.user.id);
      });
    },
    editUser(){
      this.twiterService.editUser(this.user.id,this.user).then(response => {
          console.log(response.data);
          console.log("tutorial actualizado")
      });
    }
  }
}
</script>

<template>
  <created-and-edit :user="user" @edit-user="onupdateUser"></created-and-edit>
<h1>Aqui se creara una tabla</h1>
  <data-manager :items="users" @delete-item="ondeleteUser($event)" @edit-item="onSelecteditUser($event)" ></data-manager>
</template>

<style scoped>

</style>

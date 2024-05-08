<script>
import FormContent from "../components/form-content.component.vue";
import {TwiterApiService} from "../services/twiter-api.service.js";

export default {
  name: "user-form",
  components: {FormContent},
  data(){
    return{
      twiterService: new TwiterApiService()
    }
  },
  methods:{
    convertDisplayableUserToUser(displayableUser){
      return {
        firstName: displayableUser.firstName,
        lastName: displayableUser.lastName,
        email: displayableUser.email,
        info: displayableUser.info
      }
    },
    createUser(user) {
      console.log("user recivido",user);
      user = this.convertDisplayableUserToUser(user);
      this.twiterService.postUser(user).then(response => {
        console.log(response.data);
      });
    }
  }
}
</script>

<template>
<form-content @form-submitted="createUser"></form-content>
</template>

<style scoped>

</style>

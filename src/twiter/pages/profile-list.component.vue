<script>

import {TwiterApiService} from "../services/twiter-api.service.js";
import {User} from "../model/user.entity.js";
import {Post} from "../model/post.entity.js";

export default {
  name: "profile-list",
  data(){
    return {
      users: [],
      twiterService: new TwiterApiService()
    }
  },
  created() {
    this.getAllUsersPostFacts();
  },
  methods:{
    async getAllUsersPostFacts() {
      const usersResponse = await this.twiterService.getAllUsers();
      const postsResponse = await this.twiterService.getAllPosts();

      const posts = postsResponse.data.map(postData =>
          new Post(postData.id,
              postData.title,
              postData.content,
              postData.userId));

      this.users = usersResponse.data.map(userData => {
        const user =  new User(userData.id, userData.firstName, userData.lastName, userData.email, userData.info);
        user.posts = posts.filter(post => post.userId === user.id);
        return user;
      });
      console.log(this.users);
    }
  }
}
</script>

<template>
  <pv-card v-for="user in users" :key="user.id" style="width: 25rem; overflow: hidden">
    <template #header>
      <h2>Perfil de usuario y post echos</h2>
    </template>
    <template #title>Name: {{user.firstName}} {{user.lastName}}</template>
    <template #content>
      <div>
        <h2>Email: {{user.email}}</h2>
        <h2>Info: {{user.info}} </h2>
      </div>
      <div v-for="post in user.posts">
        <h2>Post: </h2>
        <h3>Titulo:{{post.title}} </h3>
        <p>Contenido: {{post.content}}</p>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <pv-button label="Save" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>

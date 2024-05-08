import http from "../../shared/services/http-common.js";

export class TwiterApiService{

    //todos los usuarios
    getAllUsers(){
        return http.get("/users");
    }

    getAllposts(){
        return http.get("/posts");
    }

    getUserById(id){
        return http.get(`/users/${id}`);
    }

    postUser(user){
        return http.post("/users", user);
    }

    deleteUser(id){
        return http.delete(`/users/${id}`);
    }

    editUser(id, user){
        return http.put(`/users/${id}`, user);
    }

    getAllPosts(){
        return http.get("/posts");
    }

    //comentarios echo por cada usuario
    //http://localhost:3000/users?_embed=comments
    getCommentsByUser(){
        return http.get("/users?_embed=comments");
    }

    //comentarios echo por usuario especifico
    //http://localhost:3000/users/1?_embed=comments
    getCommentsByUserId(id){
        return http.get(`/users/${id}?_embed=comments`);
    }

}

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
     <button class="btn btn-info"href="#">Home</button>
     <button class="btn btn-success"href="#">Register</button>
   </div>

   <div class="form horizontal">
     <h2>Login</h2>
     <form class="" method="post">
       <fieldset>
         <input class="form-control" type="text" name="username" v-model='loginForm.username' placeholder="username"><br>
         <input class="form-control"type="text" name="password" v-model='loginForm.password' placeholder="password"><br>
         <input class="form-control"type="button" value="submit" v-on:click.prevent="login">
       </fieldset>
     </form>
   </div>


  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Trainerpress',
      article: [],
      loginForm: {
        username: '',
        password: ''
      },
      postForm: {
        title: '',
        category: '',
        author: null,
        content: ''
      },
      user: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  background-image: linear-gradient(to right, red, orange 50%, brown);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: normal;
}

h1 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

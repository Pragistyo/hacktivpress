<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
     <button class="btn btn-info"href="#">Home</button>
     <button class="btn btn-success"href="#">Register</button>
   </div>

   <div class="form horizontal">
     <h2>Login</h2>
     <form class="" method="post" @submit.prevent="">
       <fieldset>
         <input class="form-control" type="text" name="username" v-model='usernamelogin' placeholder="username"><br>
         <input class="form-control"type="text" name="password" v-model='passwordlogin' placeholder="password"><br>
         <input class="form-control"type="button" value="submit" v-on:click.prevent="login">
       </fieldset>
     </form>
   </div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Trainerpress',
      username: '',
      article: [],
      usernamelogin: null,
      passwordlogin: null,
      postForm: {
        title: null,
        category: null,
        author: null,
        content: null
      }
    }
  },
  mounted: function () {
    this.getData()
  },
  methods: {
    getData () {
      var self = this
      axios.get(`http://localhost:3000/blog`)
      .then(result => {
        self.articles = result.data
      })
    },
    postData () {
      var self = this
      axios.post(`http://localhost:3000/blog`, self.postForm)
      .then(response => {
        this.getData()
        self.postForm = {
          title: null,
          category: null,
          author: null,
          content: null
        }
      })
    },
    getCategory (category) {
      var self = this
      axios.get(`http://localhost:3000/blog/category/${category}`)
      .then(result => {
        self.article = result
      })
    },
    login () {
      // var self = this
      alert('masuk login')
      alert(this.username)
      alert(this.password)
      axios.post(`http://localhost:3000/users/login`, {
        username: 'denny',
        password: '1234'
      })
      .then(result => {
        alert('token :' + result)
      //   // this.getData()
      //   self.loginForm.username = null
      //   self.loginForm.password = null
      })
    },
    register () {

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

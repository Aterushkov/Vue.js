<template>
        <header>
                <div class="container">
                    <div class="row">
                        <div class="col-12 shadow-sm">
                            <div class="navbar d-flex justify-content-center">
                                <div class="col-2">
                                    <nav class="navbar navbar-light">
                                        <a class="navbar-brand " href="/">
                                          <img :src="logo" width="100" height="100" alt="">
                                        </a>
                                      </nav>
                                </div>
                                    <div class="navbar-header col-6 ">
                                        <h1 class="text-center text-dark"><router-link :to="{name: 'iMain'}">{{ sitename }}
                                        </router-link>
                                        </h1>
                                        <p class="text-center" v-text="sitediscription"></p>
                                    </div>
                                      <div class="navbar navbar-light col-2">
                                        <button class="btn btn-secondary d-flex flex-nowrap bg-light  align-items-baseline">
                                            <router-link active-class="active" :to="{name: 'Form'}">
                                                    <i class="fa fa-shopping-cart pr-2 " aria-hidden="true"></i>
                                                    <span class="pr-2">{{ cartItemCount }}</span> 
                                                    <span >Checkout</span> 
                                                        </router-link>
                                                      </button>
                                      </div>
                                      <div class="navbar navbar-light col-2">
                                      <div v-if="!mySession">
                                            <button type="button" class="btn btn-outline-danger disabled"
                                            v-on:click="signIn">Войти</button>
                                          </div>
                                      <div v-else style="width: 100%;">
                                            <button type="button" class="btn btn-secondary d-flex flex-nowrap bg-light justify-content-around"
                                            style="width: 100%;"
                                            v-on:click="signOut">
                                            <img class="photo pr-2"
                                            :src="mySession.photoURL" /><span class="text-secondary">Выйти</span> </button>
                                          </div>
                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
              </header>
</template> 

<script>
import firebase from 'firebase';
export default {
    name:'my-header',
    props:['cartItemCount'],
    data() {
        return{
            sitename:"Чернокотовая теплота",
            logo:"/static/images/logo.png",
            sitediscription: "Сайт для мохнатых, теплых животиков",
        }
    },
    props: ['cartItemCount'],
  beforeCreate() {
      firebase.auth().onAuthStateChanged((user)=> {
          this.$store.commit('SET_SESSION', user || false)
      });
  },
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log('signed in!');
      }).catch(function(error){
        console.log('error ' + error)
      });
    },
    signOut() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("signed out!")
      }).catch(function(error) {
        console.log("error in sign out!")
        // An error happened.
      });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
}
</script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo {
  width: 25px;
  height: 25px;
}
</style>
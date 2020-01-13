<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <main>
          <div class="container">
              <div v-for="product in sortedProducts">
                <div class="row shadow p-3">
                    <div class="col-6 d-flex justify-content-center">
                        <figure >
                            <img class="figure-img img-fluid pichS" v-bind:src="product.image">
                        </figure>
                    </div>

                        <div class="col-md-6 col-md-offset-2 description">
                             <router-link tag="h1" :to="{ name : 'Id', params: {id: product.id}}" >{{product.title}}</router-link>
                                <p v-html="product.description"></p>
                                <div class=" d-flex justify-content-start align-items-baseline">
                                    <p class="price">
                                         {{product.price | formatPrice}}
                                    </p>
                                    <button type="button" 
                                    v-on:click="addToCart(product)" 
                                    v-if="canAddToCart(product)"
                                    class="ml-4 btn btn-outline-success  px-4">Купить</button>
                                    <button type="button" 
                                    v-else
                                    class="ml-4 btn btn-outline-danger disabled  px-4"> <strike>Купить</strike></button>
                                    <p class="pl-4 " style="font-size: 20px;"
                                    v-if="product.availableInventory - cartCount(product.id) === 0">Простите, все раскупили...</p>
                                    <p class="pl-4 " style="font-size: 20px;"
                                    v-else-if="product.availableInventory - cartCount(product.id) < 5">Осталось всего {{product.availableInventory - cartCount(product.id)}}</p>
                                    <p class="pl-4 " style="font-size: 20px;"
                                    v-else>Порадуйте своего питомца!</p>
                                        
                                    </div>
                                    <div class="rating ">
                                      <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5">☆
                                      </span>
                                    </div>
                        </div>
                    </div>
                    <hr />
             </div>
            </div>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';
import {mapGetters} from 'vuex';
import firebase from "firebase";
import { productsRef } from '../firebase';
export default {
  name: 'imain',
  firebase: {
      products: productsRef
  },
    data(){
        return{
            cart:[]
        }
    },
    components: { MyHeader, MyFooter },
    methods: {
        checkRating(n, myProduct) {
          return myProduct.rating - n >= 0;
        },
        addToCart(aProduct) {
          this.cart.push(aProduct.id);
        },
        canAddToCart(aProduct) { 
          return (aProduct.availableInventory > this.cartCount(aProduct.id));
        },
        cartCount(id) {
          let count = 0;
          for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === id) {
              count++;
            }
          }
          return count;
        }
      },
      computed: {
       ...mapGetters([
          'products',
          'products'
           ]),
        cartItemCount() {
          return this.cart.length || '';
        },
        sortedProducts() {
          if (this.products.length > 0) {
            let productsArray = this.products.slice(0);
            function compare(a, b) {
              if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1;
              if (a.title.toLowerCase() > b.title.toLowerCase())
                return 1;
                return 0;
            }
            return productsArray.sort(compare);
          }
        }
      },
    filters:{
      formatPrice(price) {	
          return "₽" +" "+ price;	
      }
    },	
    created: function() {
         this.$store.dispatch('initStore');
        }
      };

</script>

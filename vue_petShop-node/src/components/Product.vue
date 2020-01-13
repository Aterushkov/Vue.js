<template>
  <div>
      <my-header></my-header>
      <main>
        <div class="container">
          <!-- Вставляем форму -->
          <div class="row shadow p-3">
            <div class="col-6 d-flex justify-content-center">
              <figure>
                <img class="figure-img img-fluid pichS" v-bind:src="product.image" >
              </figure>
            </div>
            <div class="col-md-6 col-md-offset-2 description">
              <h1>{{product.title}}</h1>
              <p v-html="product.description"></p>
              <div class=" d-flex justify-content-start align-items-baseline">
                <p class="price">
                  {{product.price }}
                 </p>
                
                  <!-- <button type="button" 
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
                  v-else>Порадуйте своего питомца!</p> -->
                      
                  <!-- </div>
                  <div class="rating ">
                    <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5">☆
                    </span>
                  </div> -->
      </div>
      <button
      @click="edit" class="btn btn-outline-success  px-4">Редактировать продукт</button>
      <router-view></router-view>
  </div>
          </div>
           <!-- Конец формы -->
         </div>
      </main>
      <my-footer></my-footer>
  </div>
</template>

  <script>
    import MyHeader from './Header.vue';
    import MyFooter from './Footer.vue';
    export default {
      components: { MyHeader, MyFooter },
      data() {
      return {
        product: ''
      }
    },
    created: function() {
      axios.get('/static/products.json')
      .then((response) =>{
        this.product = response.data.products.filter(
  data => data.id == this.$route.params.id)[0]
        this.product.image = '/' + this.product.image;		
      });
    },
    methods:{
      edit(){
        this.$router.push({name:'Edit'});
      }
    }
  }
  </script>
<template>
<div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
          <div class="container">
                <div class="row d-flex justify-content-center pt-3 shadow">
                  <div class="col-12 d-flex justify-content-center shadow-sm">
                      <div class="col-12 d-flex justify-content-center p-4">
                          <table class="table table-bordered">
                              <thead>
                                  <tr>
                                      <td colspan="4" class="h3 text-center">Список товаров</td>
                                    </tr>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td  style="color:#28a745;" colspan="2" v-if="order.giftSend">Ваш заказ будет отправлен в подарочной упаковке {{order.bowSelect}}{{order.packSelect}}</td>
                                  <td colspan="2"  v-else="order.giftSend">Ваш заказ будет отправлен в обычной упаковке</td>
                                  <td>@twitter</td>
                                </tr>
                              </tbody>
                            </table>
                      </div>
                  </div>
                    <div class="col-12 d-flex justify-content-center">
                        <form class="col-12 p-3  ">
                            <div class="d-flex">
                            <div class="form-group col-6">
                              <label>Фамилия</label>
                              <input type="text" class="form-control" placeholder="Введите вашу фамилию" v-model.trim="order.firstName">
                            </div>
                            <div class="form-group col-6">
                              <label>Имя</label>
                              <input type="text" class="form-control" placeholder="Введите ваше имя" v-model.trim="order.lastName">
                              <small class="form-text text-muted">Нам очень приятно с Вами познакомиться</small>
                            </div>
                          </div>
                          <div class="d-flex">
                              <div class="form-group col-6">
                                <label>Номер телефона</label>
                                <input type="text" class="form-control" placeholder="Введите ваш номер телефона" v-model.number="order.phone">
                              </div>
                              <div class="form-group col-6">
                                <label>Ваша почта</label>
                                <input type="text" class="form-control" placeholder="Введите ваш e-mail адресс" v-model.trim="order.mail">
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="checkboxmail" v-model="order.mailValYes">
                                    <label class="form-check-label" for="checkboxmail" >Хочу получать инфомарцию о акциях на почту</label>
                                  </div>
                              </div>
                            </div>
                          <div class="d-flex">
                              <div class="form-group col-4">
                                <label>Город</label>
                                <input type="text" class="form-control" placeholder="Ваш город" v-model.trim="order.city">
                              </div>
                              <div class="form-group col-4">
                                <label>Улица</label>
                                <input type="text" class="form-control" placeholder="Ваша улица" v-model.trim="order.street">
                              </div>
                              <div class="form-group col-2">
                                  <label>Дом</label>
                                  <input type="text" class="form-control" placeholder="Номер дома" v-model.number="order.house">
                                </div>
                                <div class="form-group col-2">
                                    <label>Квартира</label>
                                    <input type="text" class="form-control" placeholder="Номер квартиры" v-model.number="order.room">
                                  </div>
                            </div>
                            <div>
                                <div class=" text-center form-group form-check col-12">
                                    <label class="form-check-label" > Если вы хотите, мы можем отправить Ваши заказы упоковав их в праздничную упаковку</label><br>
                                    <input type="checkbox" 
                                    class="form-check-input" 
                                    id="giftSend" 
                                    v-model="order.giftSend"
                                    >
                                    <label class="form-check-label" for="checkboxgift" >Я хочу отправить мои заказы подарком</label>
                                </div>
                                <div class="text-center form-group form-check col-12" v-if="order.giftSend">
                                  <div class=" d-flex text-center form-group form-check col-12 align-items-baseline">
                                      <div class="pr-4 d-flex align-items-baseline">
                                          <div>
                                            <input type="checkbox" class="form-check-input"  id="checkboxbow" v-model="order.imposeBow">
                                            <label class="form-check-label pr-2" for="checkboxbow" >Украсить бантиком</label>
                                          </div>
                                          <div class="form-group " v-if="order.imposeBow">
                                              <select class="form-control" id="bowSelect" v-model="order.bowSelect">
                                                <option disabled value="Бантик">Бантик</option>
                                                <option v-for="(item) in bowSelect"
                                                        v-bind:value="item">{{item}}</option>
                                              </select>
                                          </div>
                                          <div v-else="order.imposeBow">
                                            
                                          </div>
                                         </div>
                                         <div class="pr-4 d-flex align-items-baseline">
                                          <div >
                                              <input type="checkbox" class="form-check-input"  id="checkboxpack" v-model="order.giftPack">
                                              <label class="form-check-label pr-2" for="checkboxpack" >Завернуть в упаковку</label>
                                            </div>
                                            <div class="form-group" v-if="order.giftPack">
                                                <select class="form-control" id="bowSelect" v-model="order.packSelect">
                                                    <option disabled value="Упаковка">Упаковка</option>
                                                    <option v-for="(item) in packSelect"
                                                        v-bind:value="item">{{item}}</option>
                                                </select>
                                            </div>
                                            <div v-else="order.giftPack">
                                              
                                            </div>
          
                                        </div>
                                        <div class="pr-4 d-flex align-items-baseline">
                                            <div >
                                                <input type="checkbox" class="form-check-input"  id="checkboxcard" v-model="order.giftCard">
                                                <label class="form-check-label pr-2" for="checkboxcard" >Прикрепить открытку с подздравлением</label>
                                              </div>
          
                                          </div>
                                  </div>
                                  <div>
                                      <div class="form-group col-12 text-left" v-if="order.giftCard" >
                                          <label>Что нам написать в открытке?</label>
                                          <input type="text" class="form-control" placeholder="Ваше пожелание мы напишем красивым, ровным потчерком" v-model="order.giftCardSend">
                                        </div>
                                        <div class="form-group col-12" v-else="order.giftCard">
                                          
                                          </div>
                                  </div>
                              </div>
                                <div class=" text-center form-group form-check col-12" v-else="order.giftSend">
  
                                </div>
                               
                            </div>
                            <div class=" text-center form-group form-check">
                              <input type="checkbox" class="form-check-input" id="checkboxyes" v-model="checked">
                              <label class="form-check-label" for="checkboxyes" >Поставив галочку вы соглашаетесь с условиями покупки</label>
                            </div>
                            <p class="d-flex justify-content-center">
                              <button type="submit" @click="submitForm" v-if="checked" class="btn btn-outline-success shadow " verify> Совершить покупку</button>
                              <button type="submit" v-else="checked" @click.prevent class="btn btn-outline-danger disabled" verify> Совершить покупку</button>
                            </p>
                          </form>
                    </div>
                  </div>
                   </div>
                  </main>
        <my-footer></my-footer>
</div>

</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';
export default {
    name:'Form',
    props:['cartItemCount'],
   data(){
       return{
        a: false,
        checked: false,
        order:{
        firstName: '',
        lastName: '',
        city:'',
        street: '',
        house: '',
        room: '',
        phone: '',
        mail: '',
        mailValYes: false,
        giftSend:false,
        imposeBow: false,
        giftPack:false,
        giftCard: false,
        giftCardSend: '',
      },
      bowSelect: {
          blue:' Синим',
          green:' Зелены',
          red:' Красным',
          xmass:' Новогодним',
          whiteInРeas:' Белым в горошек',
        },
        packSelect: {
          blue:' Синюю',
          green:' Зеленюю',
          red:' Краснюю',
          xmass:' Новогоднюю',
          whiteInРeas:' Белую в горошек',
        },
       }
   },
   components: { MyHeader, MyFooter },
   methods: {
    submitForm() {
          alert('Submitted');
        },
        showCheckout() {
          this.showProduct = this.showProduct ? false : true;
        },
   }
}

</script>
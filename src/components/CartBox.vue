<script setup>
import { useStore } from "../store/Store"
import { ref } from "vue"
import TotalBlock from "./TotalBlock.vue"


const storeId = useStore();

const toggle = ref('');

/*const postPost = () => {

axios.post(`http://localhost:8081`, {   

  body: storeId.value                    
})
.then(response => {})
.catch(e => {
  this.errors.push(e)
})
}*/

</script>


<template>
 <div class="cart-box">
    <div class="box__product">
      <div class="box">
        <div >
        <span class="box__title">Ваша корзина</span>
        <span class="box__quantity">
           {{ storeId.totalAll}} товара
        </span>
      </div>
      <div 
      class="box__delete"
      @click="storeId.deleteAllProduct()"
      >
        Очистить корзину
      </div>
      </div>

      <div 
      class="box__delete_alert"
      v-if="!storeId.products"
      >Ваша корзина пуста. Добавьте товар.</div>

      <div 
      class="box__block"
      
      v-for="(product, index) in storeId.products"
      :key="product.id"
      :data-index="index"
      >
        <div class="box__img">
          <img :src="product.img" alt="">
        </div>
        <div class="box__text">
          <h5 class="box__text_title">{{ product.title}}</h5>
          <p class="box__text_sb">
            {{ product.text }}
          </p>
          <p class="box__text_art">
            Артикул: {{ product.article }}
          </p>
        </div>
        <div class="box__count">
          <div @click="storeId.removeCount(product)" class="box__count-text">-</div>
          <div class="box__count-text">{{ product.count }}</div>
          <div @click="storeId.addCount(product)" class="box__count-text">+</div>
        </div>
        <div class="box__price">
          {{ product.price }} ₽
        </div>
        <div 
        class="box__close"
        @click="storeId.deleteProduct(product.id, product)"
        >
          <img src="../assets/img/close.png" alt="">
        </div>
      </div>

      <div class="box__install">
        <div class="box__install_checkbox">
          <input 
          id="checkbox"
          type="checkbox"
          :v-model="toggle"
          true-value="да"
          false-value="нет"
          >
        </div>
        <div class="box__install_img">
          <img src="../assets/img/icon-install.png" alt="">
        </div>
        <div class="box__install_text">
          Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
        </div>
      </div>

    </div>

   <TotalBlock />


</div>
</template>    


<style scoped>

.cart-box {
  display: flex;  
}
@media (max-width: 767px) {
  .cart-box {
    flex-direction: column;  
  }
}
.box__product {
  max-width: 800px;
}
.box {
  margin-top: 60px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .box {
   flex-direction: column;
  }
}
.box__title {
  margin-right: 22px;
  font-weight: 700;
  font-size: 44px;
  line-height: 120.52%;
  color: #1F2432;
}
@media (max-width: 767px) {
  .box__title {
    font-weight: 500;
    font-size: 32px;
  }
}
.box__quantity {
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #797B86;
}
.box__delete {
  margin-top: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  text-decoration-line: underline;
  color: #797B86;
}
.box__delete_alert {
  font-weight: 500;
  font-size: 26px;
  background: rgb(228, 187, 134);
  
  text-align: center;
}
.box__block {
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .box__block {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
.box__count {
  display: flex;
  gap: 2px;
}
.box__count-text {
  width: 34px;
  height: 34px;
  background: #F6F8FA;
  border-radius: 4px;
  text-align: center;
  align-self: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #1F2432;
}
.box__text_title {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  color: #1F2432;
}
.box__text_sb {
  margin-bottom: 7px;
  width: 263px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #2C3242;
}
.box__text_art {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797B86;
}
.box__price{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 145%;
  color: #1F2432;
  align-self: center;
  align-items: right;
}
.box__close {
  width: 12px;
  height: 12px;
}

.box__install {
  display: flex;
  justify-content: space-between;
  
  margin-top: 47px;
  max-width: 800px;
  max-height: 102px;
  background: #F6F8FA;
  border-radius: 5px;
  padding: 28px 0;
  gap: 20px;
}

.box__install_checkbox {
  align-self: center;
}

.box__install_checkbox input{
  margin-left: 25px;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border: 1px solid #797B86;
  box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
}
.box__install_checkbox:checked {
  background: #0069B4;
}
.box__install_img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  width: 50px;
  height: 50px;
}
.box__install_text {
  align-self: center;
  margin-right: 43px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797B86;
}

</style>


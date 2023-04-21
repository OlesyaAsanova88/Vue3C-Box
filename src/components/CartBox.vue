<script setup>
import { useStore } from "../store/Store"
import { ref } from "vue"


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
          v-model="toggle"
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



    <div class="box__total">

      <div class="box__total_title">
        Итого
      </div>
      <div class="box__total_sum">
        <p class="box__total_text">Сумма заказа</p>
        <p class="box__total_num"> {{ storeId.sumAll }} р</p>
      </div>
      <div class="box__total_quantity">
        <p class="box__total_text">Количество</p>
        <p class="box__total_num"> {{ storeId.totalAll }} шт</p>
      </div>
      <div class="box__total_installation">
        <p class="box__total_text">Устанока</p>
        <label for="checkbox" class="box__total_num"> {{ toggle }} </label>
      </div>
      <hr/>
      <div class="box__total_price">
        <p class="box__total_text--price">Стоимость товаров</p>
        <p class="box__total_num--num"> {{ storeId.sumAll }} р</p>
      </div>

      <div class="box__total_btn-grup">
        <button 
        @click="postPost"
        class="box__total_btn-design"
        >
          Оформить заказ
        </button>
        <button class="box__total_btn-buy">
          Купить в 1 клик
        </button>
      </div>

  </div>

</div>
</template>    


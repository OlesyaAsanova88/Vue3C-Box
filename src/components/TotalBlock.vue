<script setup>
    import { useStore } from "../store/Store"
    import { defineProps } from 'vue';

    const {toggle} = defineProps(['toggle'])
    const storeId = useStore();

</script>

<template>

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
</template>


<style scoped>
.box__total {
  padding: 35px 30px;
  margin-left: 55px;
  margin-top: 148px;
  max-width: 425px;
  height: 458px;
  background: #F6F8FA;
  border-radius: 5px;
}
@media (max-width: 767px) {
  .box__total {
    margin: 0;
    margin-top: 50px;
  }
}
.box__total_title {
  margin-bottom: 31px;
  font-weight: 600;
  font-size: 24px;
  line-height: 120.52%;
  color: #1F2432;
}
.box__total_sum,
.box__total_quantity,
.box__total_installation,
.box__total_price {
  display: flex;
  justify-content: space-between;
}
.box__total_price {
  gap: 80px;
}
 @media (max-width: 767px) {
  .box__total_price {
    gap: 55px;
  }
 }
.box__total_text {
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #1F2432;
}
.box__total_num {
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  text-align: right;
  color: #1F2432;
}
hr {
  margin-top: 10px;
  margin-bottom: 18px;
}
.box__total_text--price {
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #1F2432;
}
.box__total_num--num {
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
 
  letter-spacing: 0.005em;
  color: #1F2432;
}
@media (max-width: 767px) {
  .box__total_num--num {
    font-weight: 600;
    font-size: 20px;
  }
}
.box__total_btn-grup {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box__total_btn-design {
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  padding: 14px 40px;
  background: #0069B4;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #FFFFFF;
  border: none;
}
.box__total_btn-design:hover {
  background: #01548f;
}
.box__total_btn-buy {
  justify-content: center;
  align-items: center;
  padding: 14px 40px;
  background: #FFFFFF;
  border: 1px solid #0069B4;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #0069B4;
}
.box__total_btn-buy:hover {
  background: #0069B4;
  color: #FFFFFF;
}
</style>
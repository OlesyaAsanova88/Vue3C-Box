<script setup>
import CartBox from './components/CartBox.vue';
import Catalog from './components/Catalog.vue';

import { useStore } from "./store/Store"

const storeId = useStore();

</script>


<template>
  <div class="app wrapper">

    <header>
			<div class="header__blocks">
					<div class="header__menu">
						
					</div>
					<div class="header__box">

            <div class="header__box-img">
              <img  src="./assets/img/box.png" alt="box">
            </div>

						<div class="header__box-grup">
              <div class="header__box-title">Ваша корзина</div>
							<div class="header__count">{{ storeId.totalAll }} товара</div>
							<div class="header__total">{{ storeId.sumAll}} ₽</div>
						</div>
					</div>
				</div>
		</header>

    <div class="nav">
      <div class="nav__main">
        Главная
      </div>
      <div>
        <img src="./assets/img/arrow-right.png" alt="">
      </div>
      <div class="nav__box">
        Корзина
      </div>
    </div>

 <CartBox />

 <Catalog />

  </div>
</template>


<style scoped>

.wrapper {
  margin: 0 auto;
  max-width: 1440px;
  min-height: 1719px;
  padding: 0 80px;
  border: 1px solid teal;
}
@media (max-width: 767px) {
  .wrapper {
    padding: 10px;
  }
}
.header__blocks {
  margin-top: 68px;
  display: flex;
  justify-content: space-between;
}
.header__box {
  display: flex;
  gap: 12px; 
}
.header__box-img {
  display: flex;
  align-self: center;
}
.header__box-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #1F2432;
}
.header__count {
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  color: #797B86;
}
.header__total {
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  color: #1F2432;
}
.nav {
  display: flex;
  gap: 10px;
}
.nav__main  {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #33374E;
}
.nav__box {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797B86;
}

</style>

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


<script setup>
import CartBox from './components/CartBox.vue';
import Catalog from './components/Catalog.vue';

import { useStore } from "./store/Store"

const storeId = useStore();

</script>

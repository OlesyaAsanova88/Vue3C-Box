<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper';
  

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination]
      };
    },
  };
</script>



<template>
    <div class="catalog slide">
      <div class="slide__header-grup">
        <div class="slide__title">
          Просмотренные товары
        </div>
        <div class="slide__btn-grup">
          <div>
            <img src="../assets/img/arrow-left.png" alt="">
          </div>
          
          <div>
            <span>1</span>
            <span>/6</span>
          </div>
          <div>
            <img src="../assets/img/arrow-right2.png" alt="">
          </div>
        </div>
      </div>

      <swiper class="slide__block-grup mySwiper">

        <swiper-slide class="swiper-slide">
          <div class="slide__block swiper-slide">
            <div class="slide__dlock-img">
                <img src="../assets/img/p1.png" alt="">
                <div class="slide__dlock-title">
                  BXC
                </div>
                <div class="slide__dlock-text">
                  Вытяжное устройство для механической системы вентиляции
                </div>
            </div>    
            <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                  77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                  Подробнее
                </button>
            </div>   
          </div>
  
          <div class="slide__block">
            <div class="slide__dlock-img">
                <img src="../assets/img/p2.png" alt="">
                <div class="slide__dlock-title">
                  G2H
                </div>
                <div class="slide__dlock-text">
                  Многофункциональное вытяжное устройство для естественной и гибридной вентиляции
                </div>
            </div> 
            <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                  77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                  Подробнее
                </button>
            </div>  
          </div>
  
          <div class="slide__block">
            <div class="slide__dlock-img">
                <img src="../assets/img/p3.png" alt="">
                <div class="slide__dlock-title">
                GHN
                </div>
                <div class="slide__dlock-text">
                Вытяжное устройство с датчиком присутствия
                </div>
            </div>
            <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                  Подробнее
                </button>
            </div>  
          </div>
  
          <div class="slide__block ">
            <div class="slide__dlock-img">
                <img src="../assets/img/p4.png" alt="">
                <div class="slide__dlock-title">
                TDA
              </div>
              <div class="slide__dlock-text">
                Вытяжное устройство с датчиком присутствия
              </div>
              </div>
              <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                  77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                Подробнее
              </button>
              </div>
            </div>
        </swiper-slide>


        <swiper-slide class="swiper-slide">
          <div class="slide__block swiper-slide">
            <div class="slide__dlock-img">
                <img src="../assets/img/p1.png" alt="">
                <div class="slide__dlock-title">
                  BXC
                </div>
                <div class="slide__dlock-text">
                  Вытяжное устройство для механической системы вентиляции
                </div>
            </div>    
            <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                  77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                  Подробнее
                </button>
            </div>   
          </div>
  
          <div class="slide__block">
            <div class="slide__dlock-img">
                <img src="../assets/img/p2.png" alt="">
                <div class="slide__dlock-title">
                  G2H
                </div>
                <div class="slide__dlock-text">
                  Многофункциональное вытяжное устройство для естественной и гибридной вентиляции
                </div>
            </div> 
            <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                  77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                  Подробнее
                </button>
            </div>  
          </div>
  
          <div class="slide__block">
            <div class="slide__dlock-img">
                <img src="../assets/img/p3.png" alt="">
                <div class="slide__dlock-title">
                GHN
                </div>
                <div class="slide__dlock-text">
                Вытяжное устройство с датчиком присутствия
                </div>
            </div>
            <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                  Подробнее
                </button>
            </div>  
          </div>
  
          <div class="slide__block ">
            <div class="slide__dlock-img">
                <img src="../assets/img/p4.png" alt="">
                <div class="slide__dlock-title">
                TDA
              </div>
              <div class="slide__dlock-text">
                Вытяжное устройство с датчиком присутствия
              </div>
              </div>
              <div class="slide__dlock-sum">
                6 848 ₽ – 56 584 ₽ 
                <div class="slide__dlock-currency">
                  77.60 € – 643.86 €
                </div>
                <button class="slide__dlock-btn">
                Подробнее
              </button>
              </div>
            </div>
        </swiper-slide>

       
      </swiper>

    </div>

</template>


<style scoped>
  
.slide__title {
  font-weight: 600;
  font-size: 30px;
  line-height: 120.52%;
  color: #1F2432;
}
.slide__header-grup {
  margin-top: 96px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .slide__header-grup {
    flex-direction: column;
    gap: 30px;
  }
}
.slide__btn-grup {
  display: flex;
  gap: 20px;
}
.slide__block-grup {
  display: flex;
  gap: 20px;
}
.slide__block {
  padding: 25px;
  width: 305px;
  height: 563px;
  background: #F6F8FA;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
}
.slide__block:last-child {
  margin-right: 0px;
}
.slide__dlock-title {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 120.52%;
  color: #1F2432;
}
.slide__dlock-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 145%;
  color: #1F2432;
}
.slide__dlock-sum {
  margin-bottom: 3px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #1F2432;
}
.slide__dlock-currency {
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: #797B86;
}
.slide__dlock-btn {
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  background: #0069B4;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  color: #FFFFFF;
  border: none;
}
.slide__dlock-btn:hover {
  background: #01548f;
}

.swiper-slide {
  display: flex;

}
</style>

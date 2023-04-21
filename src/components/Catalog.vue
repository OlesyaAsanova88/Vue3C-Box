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


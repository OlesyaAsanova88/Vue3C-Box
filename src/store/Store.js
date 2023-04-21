import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  
  state: () => {
    return { 
      totalAll: 0,
      sumAll: 0,
      
      products: [
        {
          id: 1,
          img: "src/assets/img/ph1.png",
          title: "Вытяжное устройство G2H",
          text: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          price: 0,
          article: "G2H1065",
          count: 0,
          
        },
        {
          id: 2,
          img: "src/assets/img/ph2.png",
          title: "Вытяжное устройство BXC",
          text: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          price: 0,
          article: "G2H1065",
          count: 0,
        },
        {
          id: 3,
          img: "src/assets/img/ph3.png",
          title: "Вытяжное устройство GHN",
          text: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          price: 0,
          article: "G2H1065",
          count: 0,
        },
      ],

    }
  },

  actions: {

    addCount(product) {
      product.count++;
      product.price += 12644;

      this.totalAll += 1;
      this.sumAll += 12644;

    },
    
     removeCount(product) {
      if(product.count) {
        product.count--;
        product.price -= 12644;

        this.totalAll -= 1;
        this.sumAll -= 12644;

      }
    },
  
    deleteProduct(id, product) {
      this.products = this.products.filter((el) => el.id !== id);

      this.totalAll -= product.count;
      this.sumAll -= product.price;
      
    },
    deleteAllProduct() {
      this.products = this.products.remove
      this.totalAll = 0
      this.sumAll = 0
    },
  }


})

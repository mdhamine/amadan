<template>
  <div class="w-full bg-white viap-6 ">
    <div class="flex justify-center my-6 ">
      <div data-aos="zoom-in-out" data-aos-duration="1000" class="mb-6 my-6 max-w-lg lg:w-full  rounded-3xl border-4 border-blue-700 py-14 px-8 mx-7 text-black bg-gradient-to-tr from-blue-800 via-sky-500 to-blue-400">
        <div class="flex justify-center items-center h-18 w-full">
          <img class="h-20 w-full flex justify-center items-center mb-6" src="https://i.ibb.co/kXnGVZj/logo.png" alt="logo">
        </div>
         
        <div v-if="notif" role="alert" class="alert bg-[#030425] text-white mb-5 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"  fill="white" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{{ ordersent }}</span>
        </div>
        <h3 class="text-white font-bold text-3xl flex justify-end items-end mt-8 text-right">معلومات شخصية</h3>
        <input
          type="text"
          v-model="input1"
          required
          placeholder="الاسم"
          class="mt-9 text-black text-right placeholder:text-black border-blue-700 border-2 hover:border-4 rounded-2xl block p-2  bg-white w-full"
        />
        <input
          type="number"
          v-model="input2"
          required
          placeholder="الهاتف"
          class=" text-black text-right placeholder:text-black border-blue-700 border-2 hover:border-4 rounded-2xl block p-2 mt-6 bg-white w-full"
        />

        <h3 class="text-white font-bold text-3xl flex justify-end items-end mt-8 text-right">أضف منتج</h3>

        <select
          v-model="selectedCategory"
          required
          class="text-black placeholder:text-black flex justify-end items-end text-right border-blue-700 border-2 hover:border-4 rounded-2xl  p-2 mt-6 bg-white w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option disabled value="" class=" flex justify-end items-end text-right">اختر الفئة</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id" 
            
          >
           <textarea v-model="categoryname" disabled >{{ category.name }}</textarea>
          </option>
        </select>

        <select
          v-if="selectedCategory"
          v-model="selectedProduct"
          required
          class="block border-2 hover:border-4 rounded-2xl my-4 mt-6 text-black px-2 h-11 bg-white w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option disabled value="">اختر المنتج</option>
          <option
            v-for="product in getProductsByCategory(selectedCategory)"
            :key="product.id"
            :value="product"
          >
            {{ product.name }} - السعر: {{ product.price }}
          </option>
        </select>
        
        <div v-if="selectedProduct" class="block border-2 hover:border-4 rounded-2xl my-4 mt-6 text-black px-2 h-11 bg-white w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer">
          <h3 class="text-xl font-semibold">Preview:</h3>
          <img :src="product.preview" />
        </div>
      
        <input
          type="number"
          v-model="units"
          required
          placeholder="كمية الوحدات"
          v-if="selectedCategory"
          class=" text-black placeholder:text-black border-blue-700 border-2 hover:border-4 rounded-2xl block p-2 mt-6 bg-white w-full"
        />
        
        <div class="flex justify-center">
          <button class=" mt-8 shine rounded-full px-6 py-2 bg-gradient-to-bl from-blue-800 via-blue-600 to-blue-700 text-white" @click="addtocart"> أضف المنتج 
          </button>
        </div>

        <h3 class="text-white font-bold text-3xl flex justify-end items-end mt-8 text-right">التوصيل</h3>

        <select
          id="state"
          v-model="selectedState"
          required
          class="block border-2 text-right hover:border-4 mb-4 rounded-2xl my-6 mt-6 px-2  text-black bg-white w-full h-11 appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option disabled value="">الولاية</option>
                <option value="Adrar">1⋅أدرار</option>
                <option value="chlef">2⋅الشلف</option>
                <option value="laghouat">3⋅الأغواط</option>
                <option value="oum_el_bouaghi">4⋅أم البواقي</option>
                <option value="batna">5⋅باتنة</option>
                <option value="bejaia">6⋅بجاية</option>
                <option value="biskra">7⋅بسكرة</option>
                <option value="bechar">8⋅بشار</option>
                <option value="blida">9⋅البليدة</option>
                <option value="bouira">10⋅بويرة</option>
                <option value="tamanrasset">11⋅تمنراست</option>
                <option value="tebessa">12⋅تبسة</option>
                <option value="tlemcen">13⋅تلمسان</option>
                <option value="tiaret">14⋅تيارت</option>
                <option value="tizi_ouzou">15⋅تيزي وزو</option>
                <option value="algiers">16⋅الجزائر</option>
                <option value="djelfa">17⋅جلفة</option>
                <option value="jijel">18⋅جيجل</option>
                <option value="setif">19⋅سطيف</option>
                <option value="saida">20⋅سعيدة</option>
                <option value="skikda">21⋅سكيكدة</option>
                <option value="sidi_bel_abbes">22⋅سيدي بلعباس</option>
                <option value="annaba">23⋅عنابة</option>
                <option value="guelma">24⋅قالمة</option>
                <option value="constantine">25⋅قسنطينة</option>
                <option value="medea">26⋅مدية</option>
                <option value="mostaganem">27⋅مستغانم</option>
                <option value="msila">28⋅ميسيل</option>
                <option value="mascara">29⋅معسكر</option>
                <option value="ouargla">30⋅ورقلة</option>
                <option value="oran">31⋅وهران</option>
                <option value="el_bayadh">32⋅البيض</option>
                <option value="illizi">33⋅إليزي</option>
                <option value="bordj_bou_arreridj">34⋅برج بوعريريج</option>
                <option value="boumerdes">35⋅بومرداس</option>
                <option value="el_tarf">36⋅الطارف</option>
                <option value="tindouf">37⋅تندوف</option>
                <option value="tissemsilt">38⋅تيسمسيلت</option>
                <option value="el_oued">39⋅الوادي</option>
                <option value="khenchela">40⋅خنشلة</option>
                <option value="souk_ahras">41⋅سوق أهراس</option>
                <option value="tipaza">42⋅تيبازة</option>
                <option value="mila">43⋅ميلة</option>
                <option value="ain_defla">44⋅عين الدفلى</option>
                <option value="naama">45⋅النعامة</option>
                <option value="ain_temouchent">46⋅عين تموشنت</option>
                <option value="ghardaia">47⋅غرداية</option>
                <option value="relizane">48⋅غليزان</option>
                <option value="timimoun">49⋅تيميمون</option>
                <option value="bordj_badji_mokhtar">50⋅برج باجي مختار</option>
                <option value="ouled_djellal">51⋅أولاد جلال</option>
                <option value="beni_abbees">52⋅بني عباس</option>
                <option value="in_salah">53⋅عين صالح</option>
                <option value="in_guezzam">54⋅عين قزام</option>
                <option value="touggourt">55⋅توقرط</option>
                <option value="djanet">56⋅جنات</option>
                <option value="el_mghair">57⋅المغير</option>
                <option value="el_meniaa">58⋅المنيا</option>
        </select>

        <select
          id="delivery"
          v-model="delivery"
          required
          class="block border-2 hover:border-4 mb-4 rounded-2xl my-6 mt-6 px-2 text-black bg-white w-full h-11   appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >  
          <option disabled value="">توصيل</option>
          <option value="استلام من المكتب"> استلام من المكتب</option>
          <option value="توصيل للمنزل">توصيل للمنزل</option>
        </select>
        
        <div class="mt-8 ">
          <label  class=" mt-6 my-5 py-5 text-black text-lg"></label>
          <textarea
            v-model="message"
            placeholder="ملاحظاتك الإضافية هنا!"
            required
            class="text-black  text-right flex justify-start items-start px-2 py-3 placeholder:text-black padding rounded-3xl border-blue-700 border-2 hover:border-4 mt-2 bg-white w-full"
            rows="5" 
          ></textarea>
        <div class="flex flex-col items-center mt-4">
          <label for="input" class="flex flex-col items-center mt-4 py-2 px-8 bg-white   text-center rounded-full cursor-pointer">
            <input
              id="input"
              type="file"
              name="file"
              class="hidden"
              accept="image/*"
              @change="fileUploaded"
            />
            <span class="bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400 font-bold bg-clip-text text-transparent">{{ imageName === "" ? "قم بتحميل ملفك" : imageName }}</span>
          </label>
        </div>
      </div>

        <div class="flex justify-center">
          <button class="bg-white mt-14 shine rounded-full px-4 py-3 " @click="sendOrder">
            <span v-if="!loading" class="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400">إرسال الطلب</span>
            <span v-if="loading" class="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400">جارٍ التحميل...</span>
          </button>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
import { categories } from './info';
import { name } from './info';



export default {
  data() {
  return {
    input1: '',
    input2: '',
    selectedCategory: '',
    categoryname: "",
    selectedProduct: '',
    selectedprice: '',
    selectedState: '',
    modaltrue: false,
    modaltitle: "",
    modalmsg: "",
    loading: false,
    categories: categories,
    cart: [],
    image: "",
    imageName: "",
    delivery: "",
    notif: false,
    ordersent: "",
    name: name,
    price: 0,
    units: "",
    message: "",
    preview: "",
  };
},
watch: {
    selectedProduct(selectedProduct) {
      this.total = this.getprice(selectedProduct) * this.units;
    }
  },
methods: {

  getprice(selectedProduct){
   const price = selectedProduct.price;
   const preview = selectedProduct.img;
   return price;
  },
  async fileUploaded(event) {
      const target = event.target;
      if (target.files == null) return;
      const file = target.files[0];
      this.imageName = file.name;

      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result.split(",")[1];
        this.image = base64Data;
      };

      reader.readAsDataURL(file);
    },
    
 
   getProductsByCategory(categoryId) {
    const category = this.categories.find(cat => cat.id === categoryId);
    console.log(category ? category.products: []);
    return category ? category.products : [];
  },
  
  

  async addtocart(){
  
  const name = this.input1;
  const phone = this.input2;
  const product = this.selectedProduct;
  this.price = this.selectedProduct.price * this.units;
  
  if (!this.selectedCategory || !this.selectedProduct ||  !this.units ||  !this.input2 ||  !this.input1 ) {
    alert("fill product info and your phone number");
    return;
  }else{

    try {
    
    this.cart.push({ category: this.selectedCategory, categoryname: this.categoryname, product: this.selectedProduct, units: this.units, price: this.price });
    
    console.log("cart is ",this.cart);

    this.notif = true;
    this.ordersent = "Your product was added!";
    setTimeout(() => { 
    this.notif = false;
      
    }, 5000);


  } catch (error) {
    console.log(error);
  }
  
  try {
     
      const res = await $fetch('/api/db', {
        method: "POST",
        body: {
          name,
          phone,
          product,
          
         
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

   
      if (res && res.success === true) {
        console.log("Data sent");
        
        this.selectedCategory = '';
        this.selectedProduct = '';
        this.units= "";
      
        
        
      } else {
        console.log("Failed", res);
      }

    } catch (error) {
      console.error("An error occurred:", error);
    }
    
  }
  
  
  },

  async sendOrder() {
    this.loading = true;
    
    this.notif = false;
    const receiveremail = "cyn.webservices@gmail.com";
    const name = this.input1;
    const phone = this.input2;
    const state = this.selectedState;
    const delivery = this.delivery;
    const image =  this.image;
    const message = this.message;
    const categoryname = this.categoryname;
    const cart = this.cart;

    const total = this.cart.reduce((x, item) => x + item.price, 0);
    
    console.log("name" , categoryname);




    if (!name || !phone || !state || cart.length == 0) {
      this.notif = true;
        this.ordersent = "يرجى ملء المعلومات المتبقية";
        this.loading = false;
        setTimeout(() => { 
        this.notif = false;
          
        }, 5000);
      return;
    }
    
    try {
      const response = await $fetch('api/email', {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          state,
          cart,
          categoryname,
          delivery,
          image,
          message,
          receiveremail,
          total,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status == 200) {
        console.log("emaol sent");
        this.notif = true;
        this.ordersent = "Thanks for your purchase! We will contact you as soon as possible!";
        this.loading = false;
        setTimeout(() => { 
        this.notif = false;
          
        }, 5000);
      }
    } catch (error) {
      this.ordersent = "error sending your message !";
      this.notif = true;
      setTimeout(() => { 
        this.notif = false;
          
        }, 5000);
            
    }

      
  },
  showmodel(title, message) {
    this.modaltitle = title;
    this.modalmsg = message;
    this.modaltrue = true;
  },
  close() {
    this.modaltrue = false;
  },
  
},

};
</script>

<style>
.padding{

  padding-bottom: 88px;
}
</style>


<template>
    <div>
        <section class="contact py-20 bg-white text-black text-center">
            <div class="container mx-auto px-4 "  id="contact">
              <h2 class="text-4xl  mb-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400 ">Reach out to us!</h2>
              <p class="text-xl max-w-xl mx-auto mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400 font-bold">You can contact us through this form or submit your plan order!</p>
              <form id="buy" class="bg-gradient-to-tr from-blue-700 via-sky-500 to-blue-300 max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-center">
                <div class="my-8 flex justify-center">
                  <img src="https://i.ibb.co/kXnGVZj/logo.png" class=" w-72 h-20 mx-5 mb-6">
                </div>
                <div v-if="notif" role="alert" class="alert bg-[#030425] text-white mb-5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"  fill="white" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{{ ordersent }}</span>
                </div>
                <div class="mb-8 w-full bg-white rounded-2xl ">
                  <input v-model="instagram" type="text" placeholder="Your Instagram " class="px-2 w-full h-10 rounded-2xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div class="mb-8 w-full">
                  <input v-model="phone" type="number" placeholder="Your Email" class="px-2 w-full h-10 rounded-xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div class="mb-8 w-full">
                  <select v-model="contact" class="placeholder:text-black px-2 w-full h-10 rounded-xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500">
                    <option class="sm:text-sm md:text-sm" value="" disabled selected hidden>Are you contacting to inquire?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div class="mb-8 w-full" v-if="contact === 'no' ">
                  <select v-model="plan" class="px-2 w-full h-10 rounded-xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="choose plan">
                    <option disabled selected>Choose Plan</option>
                    <option value="1">Plan 1</option>
                    <option value="2">Plan 2</option>
                    <option value="3">Plan 3</option>
                    <option value="none">inquire</option>
                  </select>
                </div>
                <div class="mb-8 w-full">
                  <textarea v-model="message" placeholder="Your Message" class="px-2 w-full h-32 rounded-xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                </div>
                <button type="submit" class="flex justify-center mt-6  transition-all duration-300 ease-in-out hover:scale-110 bg-gradient-to-r from-sky-600 via-sky-300 to-sky-200 py-3 px-6 rounded-3xl text-white font-semibold  hover:from-blue-800 hover:via-blue-600 hover:to-blue-400 shadow-lg hover:shadow-xl"> {{buttonmsg}}</button>
              </form>
            </div>
            
          </section>
    </div>
</template>

<script>


  export default {
    name: "Home",
    data() {
      return {
        plan: "",
        notif: false,
        phone: "",
        instagram: "",
        ordersent: "",
        message: "",
        buttonmsg: "Send Order",
        contact: "no"
      };
    },
    
    methods: {

     

      chooseplan() {
        this.plan = 1;
      },
      chooseplan2() {
        this.plan = 2;
      },
      chooseplan3() {
        this.plan = 3;
      },
      async submit() {
        this.buttonmsg = "loading...";
        this.notif = false;

        const phone = this.phone;
        const ig = this.instagram;
        const plan = this.plan;
        const message = this.message;
  
        try {
          const response = await $fetch('/api/buyer', {
            method: "POST",
            body: JSON.stringify({ phone, ig, plan, message }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (response.success === true) {
            
            this.buttonmsg = "Send Order";
            this.notif = true;
            this.ordersent = "Thanks for your purchase! We will contact you as soon as possible!";
            setTimeout(() => { 
              this.notif = false;
              
            }, 3000);
          
          }else {
 
            this.ordersent = "error sending your message !";
            this.notif = true;
            
            
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  

<style lang="scss" scoped>

</style>

<template>
  <div class="bg-gradient-to-t from-sky-200 via-sky-100 to-sky-300 lg:mt-14 md:mt-5">
    <section class="hero py-20 text-center" data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400">
          Welcome to MACHROU3I
        </h1>
        <h2 class="text-2xl mt-2 font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-500 to-blue-300">
          "Empowering Your Business"
        </h2>
        <p class="text-lg max-w-xl mx-auto mb-8 text-gray-700 font-bold">
          We offer top-notch services to help your business thrive in today's competitive market.
        </p>

        <div class="flex flex-col items-center">
          <a href="#services">
            <button class="transition-all duration-1000 ease-in-out bg-gradient-to-tl from-blue-800 via-sky-500 to-blue-400 rounded-3xl text-white font-semibold py-3 px-6 shadow-lg hover:scale-125 hover:from-blue-800 hover:via-blue-600 hover:to-blue-400">
              Explore Our Plans
            </button>
          </a>

          <button class="text-sky-500 mt-8 font-bold" @click="playVideo">
            Explore Our Plans >
          </button>
        </div>
      </div>
    </section>

    <div class="flex flex-col items-center pb-3">
      <lottie-player
      src="https://lottie.host/2c42fc8b-1723-4016-a538-1685ea8ca3a2/oPoWOofoY1.json"
      background="transparent" 
      speed="1"
      style="width: 900px; height: 300px"
      loop
      
      autoplay
      
      mode="normal"
    ></lottie-player>
    </div>
  </div>
</template>



<script>
import Player from '@vimeo/player';

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
      example: "",
    };
  },
  name: 'LottieAnimation',
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.head.appendChild(script);
  },
  methods: {
    async playVideo() {
      try {
        await this.example.play();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    },
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
        } else {
          this.ordersent = "Error sending your message!";
          this.notif = true;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  color: white;
}
</style>

<style>
/* Disable AOS on screens larger than md */

/* Add the !important flag to the hover transformation */
.transition:hover {
  transform: scale(1.1) !important;
  /* You can also adjust the duration here if necessary */
  transition: transform 10s ease-in-out;
}
</style>

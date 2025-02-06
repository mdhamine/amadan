<template>
  <div :class="['h-full', $attrs.class || 'bg-white']">
    <div class="bg-gradient-to-tl from-blue-800 via-sky-500 to-blue-400 rounded-t-[80px] w-full h-full py-8">
      <div class="flex flex-col items-center space-y-4">
        
        <!-- Social Media Icons -->
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-blue-200">
            <i class="fab fa-facebook-f"></i> <!-- Font Awesome Icon -->
          </a>
          <a href="#" class="text-white hover:text-blue-200">
            <i class="fab fa-instagram"></i> <!-- Font Awesome Icon -->
          </a>
          <a href="#" class="text-white hover:text-blue-200">
            <i class="fab fa-twitter"></i> <!-- Font Awesome Icon -->
          </a>
          <a href="#" class="text-white hover:text-blue-200">
            <i class="fab fa-google"></i> <!-- Font Awesome Icon -->
          </a>
          <a href="#" class="text-white hover:text-blue-200">
            <i class="fab fa-youtube"></i> <!-- Font Awesome Icon -->
          </a>
        </div>

        <!-- Navigation Links -->
               <!-- Navigation Links -->
        <div class="flex space-x-8 md:mx-6 sm:mx-5 sm:text-sm md:text-sm ">
          <a href="/" class="text-white hover:text-blue-200 mx-4">Home</a>
          <a href="/login" class="text-white hover:text-blue-200">login</a>
          <a href="#svgs" class="text-white hover:text-blue-200">About</a>
          <a href="#contact" class="text-white hover:text-blue-200 smoll:hidden">Contact </a>
          <a href="#services" class="text-white hover:text-blue-200 mx-7">services</a>
        </div>
        
        
        <div class="text-white text-sm mt-7 py-9">
          <p>Contact us at contact@machrou3i.online</p>
        </div>

        <div class="text-white text-sm mt-7">
          <p>Copyright ©2024 Machrou3i</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
i {
  font-size: 1.5rem; /* Size of the icons */
}
</style>

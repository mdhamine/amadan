<template>
    <MainNavbar/>
	
		
	<div class="h-full w-full flex items-center justify-center flex-col bg-gradient-to-tl from-blue-300 via-sky-300 to-blue-200 mt-8 py-32">
		<form id="buy" class="bg-gradient-to-t from-blue-700 via-sky-500 to-blue-300 max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col items-center" @submit.prevent="submit">
            <div class="my-8">
              <img src="https://i.ibb.co/kXnGVZj/logo.png" class=" w-72 h-20 mx-5 mb-6">
            </div>
            <div v-if="notif" role="alert" class="alert bg-[#030425] text-white mb-5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"  fill="white" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{{ ordersent }}</span>
            </div>
            <div class="mb-8 w-full bg-white rounded-2xl ">
              <input v-model="instagram" type="text" placeholder="Your email" class="px-2 w-full h-10 rounded-2xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div class="mb-8 w-full bg-white rounded-2xl ">
                <input v-model="instagram" type="text" placeholder="Your phone" class="px-2 w-full h-10 rounded-2xl bg-white text-black placeholder:px-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500" />
             </div>
           
            <button @click="submit" type="submit" class="flex justify-center mt-6 rounded-3xl py-2 px-6 text-black  transition-all duration-300 ease-in-out hover:scale-110 bg-white shadow-lg hover:shadow-xl"> send order</button>
          </form>
     </div>

    <MainFooter class="bg-sky-300"/>
	
	

</template>
<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="mx-auto bg-white min-h-screen">
    <div class="flex justify-center pt-7 pb-7 ">
      <button 
          @click="saveall(cards)"
          class="bg-blue-700 flex justify-center text-black font-bold  px-14 rounded-3xl py-4  mt-7 "
        >
          Save
    </button>
    </div>
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else class="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center bg-white py-2">
      <div 
        v-for="card in cards" 
        :key="card._id" 
        class="bg-blue-300 font-bold flex flex-col justify-center items-center text-black shadow-md rounded-lg px-7 py-7 h-full w-full mt-4 pb-8"
      >
        <h2 class="text-xl font-bold text-center">{{ card.title }}</h2>
        <textarea 
          v-model="card.desc" 
          class="bg-white font-bold w-full h-32 lg:h-56 resize-none p-4 mt-2 rounded-md"
        ></textarea>
        <button 
          @click="saveCard(card)"
          class="bg-white text-black font-bold mt-2 px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
    
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      cards: [],
      loading: true,
    };
  },
  async mounted() {

    try {
      const data = await $fetch('/api/testfe'); 
      if (data && data.success) {  
        this.cards = data.data;
        console.log("data is", data.data);
      }
    } catch (error) {
      console.error('Failed to fetch card data:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async saveall(cards) {
    console.log('Saving all cards:', cards);

    for (const card of cards) {
      try {
        console.log('Processing card:', card);
        await this.saveCard(card);  
      } catch (error) {
        console.error(`Error saving card with title: ${card.title || 'undefined'}`, error);
      }
    }
  },
    async saveCard(card) {
      try {
       
        const response = await $fetch('/api/testex', {
          method: 'POST',
          body: { title: card.title, desc: card.desc },  
        });
        if (response.success == true) {
          console.log("done", card);
        } else {
          
        }
      } catch (error) {
        console.error('Error updating card:', error);
        alert('Error updating card');
      }
    },
  },
};
</script>

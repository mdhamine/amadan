<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Task Progress Tracker</h1>
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border p-2">Day</th>
          <th v-for="task in tasks" :key="task" class="border p-2">{{ task }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td class="border p-2">Day {{ row.day }}</td>
          <td v-for="(checked, task) in row.tasks" :key="task" class="border p-2 text-center">
            <input type="checkbox" v-model="row.tasks[task]" @change="updateTask(row.day)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const tasks = ref(Array.from({ length: 15 }, (_, i) => `Task ${i + 1}`));
const tableData = ref([]);

// Fetch data from API
const fetchData = async () => {
  const response = await fetch('/api/tasks');
  tableData.value = await response.json();
};

// Update data in the database
const updateTask = async (day) => {
  const row = tableData.value.find((r) => r.day === day);
  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ day, tasks: row.tasks }),
  });
};

// Initialize table with 30 days if not present in DB
onMounted(async () => {
  await fetchData();
  for (let i = 1; i <= 30; i++) {
    if (!tableData.value.some((entry) => entry.day === i)) {
      tableData.value.push({ day: i, tasks: Object.fromEntries(tasks.value.map((t) => [t, false])) });
    }
  }
});
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>

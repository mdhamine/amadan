
<template>
  <div class="p-5 bg-white">
    <table class="w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          <th class="border p-2 border-black">Day</th>
          <th v-for="task in 15" :key="task" class="border p-2">Task {{ task }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day, dayIndex) in tasks" :key="dayIndex">
          <td class="border p-2">{{ dayIndex + 1 }}</td>
          <td v-for="(completed, taskIndex) in day" :key="taskIndex" class="border p-2 text-center">
            <input type="checkbox" v-model="tasks[dayIndex][taskIndex]" @change="toggleTask(dayIndex, taskIndex)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const tasks = ref(Array(30).fill(Array(15).fill(false)));

const fetchTasks = async () => {
  const { data } = await useFetch('/api/tasks');
  if (data.value) tasks.value = data.value.days;
};

const updateTasks = async () => {
  await useFetch('/api/tasks', {
    method: 'POST',
    body: { days: tasks.value }
  });
};

const toggleTask = (day, task) => {
  tasks.value[day][task] = !tasks.value[day][task];
  updateTasks();
};

onMounted(fetchTasks);
</script>

<style>
table {
  border-spacing: 0;
}
th, td {
  text-align: center;
}
</style>

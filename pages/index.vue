<template>
  <div>
    <h2>Duration Calculator</h2>
    <div>
      <label for="time1">Start Time:</label>
      <input type="time" v-model="time1" />
    </div>
    <div>
      <label for="time2">End Time:</label>
      <input type="time" v-model="time2" />
    </div>
    <div>
      <button @click="calculateDuration">Calculate Duration</button>
    </div>
    <div v-if="duration">
      <h3>Results:</h3>
      <p>Duration: {{ duration.hours }} hours and {{ duration.minutes }} minutes</p>
      <p>Start Time + 1/3 Duration: {{ fractionTimes.oneThird }}</p>
      <p>Start Time + 1/2 Duration: {{ fractionTimes.half }}</p>
      <p>Start Time + 2/3 Duration: {{ fractionTimes.twoThirds }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time1: "00:00",
      time2: "00:00",
      duration: null,
      fractionTimes: {
        oneThird: null,
        half: null,
        twoThirds: null,
      },
    };
  },
  methods: {
    calculateDuration() {
      const [startHour, startMinute] = this.time1.split(":").map(Number);
      const [endHour, endMinute] = this.time2.split(":").map(Number);

      const startInMinutes = startHour * 60 + startMinute;
      const endInMinutes = endHour * 60 + endMinute;

      let diffInMinutes;

      if (endInMinutes >= startInMinutes) {
        diffInMinutes = endInMinutes - startInMinutes;
      } else {
        diffInMinutes = 24 * 60 - startInMinutes + endInMinutes;
      }

      const hours = Math.floor(diffInMinutes / 60);
      const minutes = diffInMinutes % 60;
      this.duration = { hours, minutes };

      this.fractionTimes.oneThird = this.addMinutesToTime(
        startInMinutes,
        Math.round(diffInMinutes / 3)
      );
      this.fractionTimes.half = this.addMinutesToTime(
        startInMinutes,
        Math.round(diffInMinutes / 2)
      );
      this.fractionTimes.twoThirds = this.addMinutesToTime(
        startInMinutes,
        Math.round((2 * diffInMinutes) / 3)
      );
    },
    addMinutesToTime(startInMinutes, minutesToAdd) {
      const totalMinutes = (startInMinutes + minutesToAdd) % (24 * 60);
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return this.formatTime(hours, minutes);
    },
    formatTime(hours, minutes) {
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}`;
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: Arial, sans-serif;
}
label {
  display: block;
  margin-top: 10px;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
}
p {
  margin: 5px 0;
}
</style>


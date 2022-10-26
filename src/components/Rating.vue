<template>
  <div>
    <ul>
      <li 
        class="star" 
        :key="star" 
        :class="{ active: star <= initialGrade }"
        v-for="star in maxStars"
        ></li>
    </ul>
    <div class="summary">
      {{ initialGrade }} of {{ maxStars }}  
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number
    },
    initialGrade: {
      type: Number
    }
  }
}
</script>

<style>

</style>
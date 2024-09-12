<script setup>
import useCoctel from "../composables/useCoctel";

const { informacionTooltip } = useCoctel();
const props = defineProps({
  coctel: {
    type: Object,
    required: true,
  },
  tooltip: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="coctel">
    <div class="coctel-img">
      <img
        :src="coctel.strDrinkThumb"
        :alt="coctel.strDrink"
        v-if="tooltip"
        v-tippy="{ 
          content: informacionTooltip(coctel), 
          allowHTML: true, 
          arrow: true, 
          animation: 'scale', 
          interactive: true 
        }"
      />
      <img
        v-else
        :src="coctel.strDrinkThumb"
        :alt="coctel.strDrink"
      />
    </div>
    <h3>{{ coctel.strDrink }}</h3>
  </div>
</template>


<style scoped>
.coctel {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

.coctel-img {
  width: 100%;
  overflow: hidden;
}

.coctel-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
}
</style>

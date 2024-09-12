<script setup>
import { ref } from "vue";

const emit = defineEmits(["obtener-coctel"]);

const busqueda = ref("");
const error = ref(false);

const consultarCoctel = () => {
  if (busqueda.value === "") {
    error.value = true;
    setTimeout(() => {
      error.value = false;
    }, 1000);
    return;
  }
  //consultar API
  emit("obtener-coctel", busqueda.value);
  busqueda.value = "";
};
</script>

<template>
  <section>
    <div class="formulario">
      <form @submit.prevent="consultarCoctel">
        <input
          type="text"
          v-model="busqueda"
          :class="{ error: error }"
          placeholder="Buscar un Coctel"
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  </section>
</template>

<style scoped>
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.error {
  animation: shake 0.5s ease;
}

section {
  margin: 3rem auto;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
}
@media (min-width: 768px) {
  section {
    width: 60%;
  }
}
.formulario {
  margin: 2rem auto;
}

form {
  width: 100%;
  display: flex;
  justify-content: center;
}

form input[type="text"] {
  padding: 0.6rem;
  font-size: 16px;
  background-color: #fff;
  color: #242424;
  border: none;
  width: 70%;
  outline: none;
}
@media (min-width: 768px) {
  form input[type="text"] {
    width: 30%;
  }
}

form input[type="submit"] {
  padding: 0.6rem;
  border-radius: unset;
  background-color: #6269dc;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

form input[type="submit"]:hover {
  background-color: #535bf2;
}
</style>

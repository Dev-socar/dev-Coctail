<script setup>
import { ref, onMounted } from "vue";
import Coctel from "./components/Coctel.vue";
import Formulario from "./components/Formulario.vue";
import Header from "./components/Header.vue";
import Spinner from "./components/Spinner.vue";
import useCoctel from "./composables/useCoctel";

const {
  obtenerCoctel,
  obtenerCoctelesDefault,
  cocteles,
  mostrarCocteles,
  coctel,
  cargando,
  coctelesDefault,
  primeraCarga
} = useCoctel();

onMounted(() => {
  obtenerCoctelesDefault();
});
</script>

<template>
  <Header />
  <Formulario @obtener-coctel="obtenerCoctel" />
  <main> 
    <Spinner v-if="cargando" />
    <div v-else-if="mostrarCocteles && cocteles.length">
      <h2>
        Resultados encontrados para <span>{{ coctel }}</span>
      </h2>
      <section class="resultado">
        <Coctel
          v-for="coctel in cocteles"
          :key="coctel.idDrink"
          :coctel="coctel"
          :tooltip="true"
        />
      </section>
    </div>
    <div v-else-if="!mostrarCocteles && coctel !== ''">
      <h2>No Hay Resultados para <span>{{ coctel }}</span></h2>
    </div>
    <div v-if="primeraCarga && !mostrarCocteles">
      <h2>Los 10 Mejores Cocteles</h2>
      <section class="resultado">
        <Coctel
          v-for="coctel in coctelesDefault"
          :key="coctel.idDrink"
          :coctel="coctel"
          :tooltip="false"
        />
      </section>
    </div>
  </main>
</template>


<style scoped>
main {
  width: 90%;
  margin: 0 auto;
}
.resultado {
  display: grid;
  gap: 1rem;
}
@media (min-width: 768px) {
  .resultado {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}
h2 {
  font-size: 3rem;
  font-weight: normal;
}
h2 > span {
  color: #535bf2;
  font-weight: bold;
}
</style>

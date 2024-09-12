import { ref, computed } from "vue";
export default function useCoctel() {
  const cocteles = ref([]);
  const coctelesDefault = ref([]);
  const coctel = ref("");
  const cargando = ref(false);
  const primeraCarga = ref(true);

  const obtenerCoctel = async (c) => {
    coctel.value = c;
    cargando.value = true;
    primeraCarga.value = false;
    cocteles.value = [];
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${c}`;
      const response = await fetch(url);
      const { drinks } = await response.json();
      cocteles.value = drinks || [];

    } catch (error) {
      console.log(error);
    } finally {
      cargando.value = false;
    }
  };

  const obtenerCoctelesDefault = async () => {
    coctelesDefault.value = [];
    cargando.value = true;
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;
      const response = await fetch(url);
      const { drinks } = await response.json();
      coctelesDefault.value = drinks.slice(0, 10) || [];
    } catch (error) {
      console.log(error);
    } finally {
      cargando.value = false;
    }
  };

  const mostrarCocteles = computed(() => {
    return cocteles.value.length > 0;
  });

  const informacionTooltip = (coctel) => {
    let ingredientes = "";
    for (let i = 1; i <= 15; i++) {
      const ingrediente = coctel[`strIngredient${i}`];
      const medida = coctel[`strMeasure${i}`];
      if (ingrediente) {
        ingredientes += `<li>${ingrediente}  ${
          medida ? `- ${medida}` : ""
        }</li>`;
      }
    }
    return `
    <div class="coctel-campo">
      <h3 class="coctel-titulo">Categoria: <span class="coctel-texto">${coctel.strCategory}</span></h3> 
    </div>
    <div class="coctel-campo">
      <h3 class="coctel-titulo">Glass: <span class="coctel-texto">${coctel.strGlass}</span></h3> 
    </div>
    <div class="coctel-campo">
      <h3 class="coctel-titulo">Instrucciones</h3>
      <p class="coctel-texto">${coctel.strInstructions}</p>
    </div>
    
    <div class="coctel-campo">
      <h3 class="coctel-titulo">Ingredientes</h3>
      <ul class="coctel-lista">${ingredientes}</ul>
    </div>
    
  `;
  };

  return {
    obtenerCoctel,
    cocteles,
    mostrarCocteles,
    informacionTooltip,
    coctel,
    obtenerCoctelesDefault,
    cargando,
    coctelesDefault,
    primeraCarga,
  };
}

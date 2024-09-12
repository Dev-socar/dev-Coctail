<template>
  <header class="header">
    <div class="header-superior">
      <h1 class="header-titulo">Dev-Coctail</h1>
      <div class="header-enlaces">
        <a href="#">Iniciar Sesion</a>
        <a href="#">Registrarse</a>
      </div>
    </div>
    <div class="header-informacion">
      <div class="header-grid">
        <div class="header-contenido">
          <h2>Encuentra los mejores Cocteles y las mejores recetas</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quos?
            Laborum voluptas laudantium fugit voluptatum eius amet quia repellat
            quas, eveniet culpa suscipit temporibus necessitatibus facere ullam
            nemo fuga provident.
          </p>
        </div>
        <div class="header-img">
          <img src="/imagen-header.webp" alt="Imagen del header" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-superior {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.header-enlaces {
  display: flex;
  gap: 1.5rem;
}
.header-enlaces a {
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #6269dc;
  transition: all 0.3s ease;
}
.header-enlaces a:hover {
  color: #6269dc;
  background-color: #fff;
}
.header-enlaces a:last-child {
  background-color: unset;
  border: 1px solid #6269dc;
  transition: all 0.3s ease;
}
.header-enlaces a:last-child:hover {
  border: 1px solid #fff;
  color: #fff;
}
.header-informacion {
  width: 100%;
}
.header-grid {
  display: grid;
}
.header-contenido {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0;
}
.header-contenido h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0;
}
.header-img {
  display: none;
}
@media (min-width: 768px) {
  .header-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    align-items: center;
    margin: 0 auto;
  }
}
@media (min-width: 768px) {
  .header-contenido {
    padding-left: 5rem;
  }
  .header-superior {
    flex-direction: row;
  }
  .header-contenido p {
    width: 70%;
  }
  .header-img {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .header-contenido h2 {
    text-align: left;
  }
}
</style>

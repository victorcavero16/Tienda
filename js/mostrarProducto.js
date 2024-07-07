import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, imagen) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<img width="100%" height="72%" src="${imagen}">
    <div class="descripcion-video">
        <h3>${nombre}</h3>
        <p>${precio}</p>
    </div>`;

  return video;
}

async function listarProducto() {
  try {
    const listaAPI = await conexionAPI.listarProducto();

    listaAPI.forEach((producto) =>
      lista.appendChild(
        crearCard(producto.nombre, producto.precio, producto.imagem)
      )
    );
  } catch {
    lista.innerHTML = `<H2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </H2>`;
  }
}

listarProducto();

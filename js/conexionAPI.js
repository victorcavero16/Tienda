async function listarProducto() {
  const conexion = await fetch("http://localhost:3001/videos");

  const conexionConvertida = conexion.json();

  // console.log(conexionConvertida);
  return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
  const conexion = await fetch("http://localhost:3001/videos", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      precio: `${precio} dolares`,
      imagem: imagen,
    }),
  });
  const conexionConvertida = conexion.json();

  if (!conexion.ok) {
    throw new Error("Ha ocurrido un error al enviar el video");
  }

  return conexionConvertida;
}

export const conexionAPI = {
  listarProducto,
  enviarProducto,
};

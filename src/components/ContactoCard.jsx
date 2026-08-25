// src/components/ContactoCard.jsx
export default function ContactoCard({
 nombre,
 telefono,
 correo,
 etiqueta,
 empresa,
 onEliminar
}) {
 return (
 <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
 {/* Nombre destacado */}
 <h3 className="text-xl font-bold text-gray-900 mb-3">
 {nombre}
 </h3>
 {/* Teléfono */}
 <p className="text-gray-700 mb-5">
  Telefono: {telefono}
  <p>
    Correo: {correo}
  </p>
  <p>
    Etiqueta: {etiqueta}
  </p>
  <p>
    Empresa: {empresa}
  </p>
  </p>
  {/* Acciones (alineado a la izquierda en móvil) */}
 <div className="flex justify-start">
 <button
 onClick={() => onEliminar(correo)}
 className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium
px-4 py-2 rounded-lg transition-colors"
 >
 Eliminar
 </button>
 </div>
 </article>
 );
}
export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  onEliminar,
  onEditar,
  contacto,
}) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {nombre}
      </h3>

      <div className="text-gray-700 mb-5 space-y-1">
        <p>Telefono: {telefono}</p>
        <p>Correo: {correo}</p>
        <p>Etiqueta: {etiqueta}</p>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onEditar(contacto)}
          className="bg-purple-600 hover:bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Editar
        </button>

        <button
          type="button"
          onClick={onEliminar}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}
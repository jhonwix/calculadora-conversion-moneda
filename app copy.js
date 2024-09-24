// app.js

const accessKey = CONFIG.accessKey; // Asegúrate de que CONFIG está definido en config.js

// Lista de monedas con códigos, nombres y banderas
const monedas = [
  { codigo: 'USD', nombre: 'Dólar Estadounidense', bandera: 'us' },
  { codigo: 'MXN', nombre: 'Peso Mexicano', bandera: 'mx' },
  { codigo: 'COP', nombre: 'Peso Colombiano', bandera: 'co' },
  { codigo: 'EUR', nombre: 'Euro', bandera: 'eu' },
  { codigo: 'GBP', nombre: 'Libra Esterlina', bandera: 'gb' },
  { codigo: 'CAD', nombre: 'Dólar Canadiense', bandera: 'ca' },
  { codigo: 'PLN', nombre: 'Złoty Polaco', bandera: 'pl' },
  // Añade más monedas si lo deseas
];

// Definimos los SVG para las flechas
const svgUpArrow = `<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 12a.5.5 0 0 1-.5-.5V4.707L5.354 7.854a.5.5 0 0 1-.708-.708l3.182-3.182a.498.498 0 0 1 .708 0l3.182 3.182a.5.5 0 1 1-.708.708L8.5 4.707V11.5a.5.5 0 0 1-.5.5z"/>
</svg>`;

const svgDownArrow = `<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v6.793l2.146-2.147a.5.5 0 1 1 .708.708l-3.182 3.182a.498.498 0 0 1-.708 0L3.646 9.854a.5.5 0 1 1 .708-.708L7.5 11.293V4.5A.5.5 0 0 1 8 4z"/>
</svg>`;

// Función para generar las opciones del select con banderas y nombres
const generarOpcionesMonedas = () => {
  const monedaOrigenSelect = document.getElementById('monedaOrigen');
  monedas.forEach(moneda => {
    const option = document.createElement('option');
    option.value = moneda.codigo;
    option.textContent = `${moneda.nombre} (${moneda.codigo.toUpperCase()})`;
    option.setAttribute('data-icon', moneda.bandera);
    monedaOrigenSelect.appendChild(option);
  });
};

const obtenerTasasCambio = async (monedaOrigen, monedasDestino) => {
  // Construimos la lista de monedas a solicitar, evitando solicitar USDUSD
  const currencies = monedasDestino.filter(moneda => moneda !== 'USD');

  if (monedaOrigen !== 'USD') {
    currencies.push(monedaOrigen);
  }

  // Eliminamos duplicados y unimos en una cadena
  const uniqueCurrencies = [...new Set(currencies)].join(',');

  const url = `http://apilayer.net/api/live?access_key=${accessKey}&currencies=${uniqueCurrencies}&source=USD&format=1`;

  const response = await fetch(url);
  const data = await response.json();

  console.log('URL de solicitud:', url); // Para depuración
  console.log('Respuesta de la API:', data); // Para depuración

  if (data.success) {
    const tasas = {};

    // Si la moneda de origen es USD, la tasa es 1
    const tasaUSDAmonedaOrigen = monedaOrigen === 'USD' ? 1 : data.quotes[`USD${monedaOrigen}`];
    if (tasaUSDAmonedaOrigen === undefined) {
      throw new Error(`No se pudo obtener la tasa de cambio para ${monedaOrigen}.`);
    }

    monedasDestino.forEach(monedaDestino => {
      const tasaUSDAmonedaDestino = monedaDestino === 'USD' ? 1 : data.quotes[`USD${monedaDestino}`];
      if (tasaUSDAmonedaDestino === undefined) {
        throw new Error(`No se pudo obtener la tasa de cambio para ${monedaDestino}.`);
      }

      let tasaCambio;
      if (monedaOrigen === 'USD') {
        tasaCambio = tasaUSDAmonedaDestino;
      } else {
        tasaCambio = tasaUSDAmonedaDestino / tasaUSDAmonedaOrigen;
      }

      tasas[monedaDestino] = tasaCambio;
    });

    return tasas;
  } else {
    throw new Error(`Error de API: ${data.error.info}`);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  generarOpcionesMonedas();

  const botonConvertir = document.getElementById('convertir');
  const resultadoDiv = document.getElementById('resultado');

  botonConvertir.addEventListener('click', async () => {
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    if (!monedaOrigen || isNaN(cantidad) || cantidad <= 0) {
      resultadoDiv.innerHTML = '<div class="alert alert-danger">Por favor, completa todos los campos con valores válidos.</div>';
      return;
    }

    // Limpiamos el contenido previo
    resultadoDiv.innerHTML = '';

    // Mostrar un spinner de carga
    resultadoDiv.innerHTML = `
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visualmente-hidden">Cargando...</span>
        </div>
      </div>
    `;

    try {
      // Definimos las otras monedas excluyendo la moneda de origen
      const monedasDestino = monedas
        .map(moneda => moneda.codigo)
        .filter(codigo => codigo !== monedaOrigen);

      const tasasCambio = await obtenerTasasCambio(monedaOrigen, monedasDestino);

      // Eliminamos el spinner de carga
      resultadoDiv.innerHTML = '';

      // Obtenemos las tasas anteriores del localStorage
      const tasasGuardadas = JSON.parse(localStorage.getItem('tasasDeCambio')) || {};
      const tasasAnteriores = tasasGuardadas[monedaOrigen] || {};

      // Formateador para la moneda de origen
      const formatoMonedaOrigen = new Intl.NumberFormat('es-ES', { style: 'currency', currency: monedaOrigen });
      const cantidadFormateadaOrigen = formatoMonedaOrigen.format(cantidad);

      // Título del resultado
      const tituloResultado = document.createElement('h2');
      tituloResultado.classList.add('text-center', 'mb-4');
      tituloResultado.textContent = `${cantidadFormateadaOrigen} equivalen a:`;
      resultadoDiv.appendChild(tituloResultado);

      // Contenedor para las conversiones
      const contenedorConversiones = document.createElement('div');
      contenedorConversiones.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-4');
      resultadoDiv.appendChild(contenedorConversiones);

      monedasDestino.forEach(monedaDestino => {
        const tasaCambio = tasasCambio[monedaDestino];
        const cantidadConvertida = cantidad * tasaCambio;

        const formatoMonedaDestino = new Intl.NumberFormat('es-ES', { style: 'currency', currency: monedaDestino });
        const cantidadFormateadaDestino = formatoMonedaDestino.format(cantidadConvertida);

        const monedaInfo = monedas.find(moneda => moneda.codigo === monedaDestino);

        // Comparar con la tasa anterior
        const tasaAnterior = tasasAnteriores[monedaDestino];
        let indicadorHTML = '';

        if (tasaAnterior) {
          const cambio = ((tasaCambio - tasaAnterior) / tasaAnterior) * 100;

          if (cambio > 0) {
            // Subió
            indicadorHTML = `
            <div class="indicador up">
              <span class="flecha">${svgUpArrow}</span>
              <span class="porcentaje">${cambio.toFixed(3)}%</span>
            </div>`;
          } else if (cambio < 0) {
            // Bajó
            indicadorHTML = `
            <div class="indicador down">
              <span class="flecha">${svgDownArrow}</span>
              <span class="porcentaje">${Math.abs(cambio).toFixed(3)}%</span>
            </div>`;
          } else {
            // Sin cambios
            indicadorHTML = `
            <div class="indicador no-change">
              <span class="porcentaje">0.000%</span>
            </div>`;
          }
        } else {
          // No hay datos previos
          indicadorHTML = `
          <div class="indicador no-data">
            <span class="porcentaje">(No hay datos previos)</span>
          </div>`;
        }

        // Crear la tarjeta de conversión
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('col');

        tarjeta.innerHTML = `
          <div class="card h-100 text-white bg-dark shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                <img src="https://flagcdn.com/32x24/${monedaInfo.bandera}.png" alt="${monedaInfo.nombre}"> ${monedaInfo.nombre}
              </h5>
              <p class="card-text display-6">${cantidadFormateadaDestino}</p>
              <p class="card-text">
                Tasa de cambio: ${tasaCambio.toFixed(4)}
              </p>
              ${indicadorHTML}
            </div>
          </div>
        `;

        contenedorConversiones.appendChild(tarjeta);

        // Actualizamos la tasa anterior en tasasGuardadas
        if (!tasasGuardadas[monedaOrigen]) {
          tasasGuardadas[monedaOrigen] = {};
        }
        tasasGuardadas[monedaOrigen][monedaDestino] = tasaCambio;
      });

      // Guardamos las tasas actualizadas en localStorage
      localStorage.setItem('tasasDeCambio', JSON.stringify(tasasGuardadas));

    } catch (error) {
      resultadoDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
      console.error('Error:', error);
    }
  });
});

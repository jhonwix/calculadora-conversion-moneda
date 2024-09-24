## Instrucciones de Configuración
Calculadora de Conversión de Moneda
Índice

    Descripción
    Características
    Instalación
    Uso
    Tecnologías Utilizadas
    Contribuciones
    Licencia
    Agradecimientos

Descripción

La Calculadora de Conversión de Moneda es una aplicación web que permite a los usuarios convertir cantidades entre diferentes monedas en tiempo real. La aplicación ofrece una interfaz intuitiva y atractiva, mostrando banderas y nombres de los países para facilitar la selección de monedas. Además, proporciona información sobre cómo las tasas de cambio han variado desde la última consulta, mostrando indicadores visuales y porcentajes de cambio.
Características

    Conversión en tiempo real entre múltiples monedas.
    Interfaz intuitiva con diseño responsivo utilizando Bootstrap 5.
    Indicadores de cambio que muestran si la tasa ha subido o bajado, con flechas y porcentajes.
    Almacenamiento local de tasas de cambio para comparar con consultas posteriores.
    Soporte multilingüe (Inglés y Español).
    Visualización de banderas y nombres de países para una mejor experiencia de usuario.

Instalación

    Clonar el repositorio:

    bash

git clone https://github.com/tuusuario/calculadora-conversion-moneda.git

Navegar al directorio del proyecto:

bash

cd calculadora-conversion-moneda

Obtener una clave de API:

    Regístrate en CurrencyLayer para obtener una clave de API gratuita.

Configurar la clave de API:

    Crea un archivo config.js en el directorio del proyecto con el siguiente contenido:

    javascript

    const CONFIG = {
      accessKey: 'TU_CLAVE_DE_API'
    };

    Reemplaza 'TU_CLAVE_DE_API' con la clave obtenida en el paso anterior.

Ejecutar la aplicación:

    Utiliza un servidor web local para ejecutar la aplicación. Puedes usar la extensión Live Server en Visual Studio Code o ejecutar un servidor simple con Python:

    bash

        python -m http.server 8000

        Abre tu navegador y navega a http://localhost:8000.

Uso

    Seleccionar la moneda de origen:
        Utiliza el menú desplegable para elegir la moneda desde la cual deseas convertir.

    Ingresar la cantidad:
        Introduce la cantidad que deseas convertir.

    Realizar la conversión:
        Haz clic en el botón "Convertir".

    Ver los resultados:
        La aplicación mostrará las cantidades equivalentes en las monedas de destino, junto con indicadores que muestran cómo ha variado la tasa de cambio desde la última consulta.

Tecnologías Utilizadas

    HTML5 y CSS3
    JavaScript (ES6+)
    Bootstrap 5
    API de CurrencyLayer
    LocalStorage para almacenamiento local

Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar:

    Haz un fork del proyecto.
    Crea una nueva rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
    Realiza tus cambios y haz commits (git commit -am 'Agrega nueva funcionalidad').
    Envía tus cambios al repositorio remoto (git push origin feature/nueva-funcionalidad).
    Abre un Pull Request.

Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
Agradecimientos

    Jhon Orrego por el desarrollo de la aplicación.
    OpenAI ChatGPT por la asistencia en el diseño y desarrollo.
    CurrencyLayer por proporcionar la API de tasas de cambio.
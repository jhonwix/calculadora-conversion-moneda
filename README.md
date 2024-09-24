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

git clone https://github.com/jhonwix/calculadora-conversion-moneda.git

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

    Currency Conversion Calculator
Table of Contents

    Description
    Features
    Installation
    Usage
    Technologies Used
    Contributing
    License
    Acknowledgments

Description

The Currency Conversion Calculator is a web application that allows users to convert amounts between different currencies in real-time. The app offers an intuitive and attractive interface, displaying country flags and names to facilitate currency selection. It also provides information on how exchange rates have varied since the last query, showing visual indicators and percentage changes.
Features

    Real-time conversion between multiple currencies.
    Intuitive interface with responsive design using Bootstrap 5.
    Change indicators showing if the rate has increased or decreased, with arrows and percentages.
    Local storage of exchange rates to compare with subsequent queries.
    Multilingual support (English and Spanish).
    Display of flags and country names for a better user experience.

Installation

    Clone the repository:

    bash

git clone https://github.com/jhonwix/calculadora-conversion-moneda.git

Navigate to the project directory:

bash

cd currency-conversion-calculator

Obtain an API key:

    Sign up at CurrencyLayer to get a free API key.

Configure the API key:

    Create a file named config.js in the project directory with the following content:

    javascript

    const CONFIG = {
      accessKey: 'YOUR_API_KEY'
    };

    Replace 'YOUR_API_KEY' with the key obtained in the previous step.

Run the application:

    Use a local web server to run the application. You can use the Live Server extension in Visual Studio Code or run a simple server with Python:

    bash

        python -m http.server 8000

        Open your browser and navigate to http://localhost:8000.

Usage

    Select the source currency:
        Use the dropdown menu to choose the currency from which you want to convert.

    Enter the amount:
        Input the amount you wish to convert.

    Perform the conversion:
        Click the "Convert" button.

    View the results:
        The application will display the equivalent amounts in the destination currencies, along with indicators showing how the exchange rate has changed since the last query.

Technologies Used

    HTML5 and CSS3
    JavaScript (ES6+)
    Bootstrap 5
    CurrencyLayer API
    LocalStorage for local storage

Contributing

Contributions are welcome! If you'd like to collaborate:

    Fork the project.
    Create a new branch for your feature (git checkout -b feature/new-feature).
    Make your changes and commit them (git commit -am 'Add new feature').
    Push your changes to the remote repository (git push origin feature/new-feature).
    Open a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

    Jhon Orrego for developing the application.
    OpenAI ChatGPT for assistance in design and development.
    CurrencyLayer for providing the exchange rates API.
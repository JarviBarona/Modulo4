# Evaluación Final - Módulo 4: Consumo de APIs y Programación Orientada a Objetos

Este repositorio contiene la resolución práctica de las actividades correspondientes a la evaluación final del Módulo 4. El proyecto está enfocado en el consumo de servicios REST, la manipulación de datos en el cliente y la implementación de buenas prácticas de desarrollo en JavaScript.

---

## 🚀 Características del Proyecto

El proyecto se divide en dos actividades principales:

### 1. Consumo y Optimización de la API de Rick and Morty
Una aplicación web que consume un servicio externo para listar personajes, agrupándolos y mostrándolos de forma interactiva.
* **Consumo eficiente:** Realiza la petición HTTP mediante `fetch()` solo la primera vez.
* **Almacenamiento local:** A partir de la segunda interacción, los datos se sirven directamente desde la memoria (caché), evitando llamadas innecesarias al servidor.
* **Manipulación de arrays:** Uso de métodos como `.map()` y `.reduce()` para transformar y agrupar la información por especie.

### 2. Administrador de Usuarios con AJAX (POO)
Una clase en JavaScript que administra y encapsula la información obtenida desde un servicio web externo (`JSONPlaceholder`).
* **Uso de XMLHttpRequest:** Implementación de peticiones AJAX nativas para la carga de datos.
* **Programación Orientada a Objetos:** Métodos específicos dentro de la clase para:
  * Listar todos los usuarios.
  * Buscar usuarios por nombre a través de un `prompt()` y mostrar información básica, direcciones completas o datos avanzados de la compañía.
  * Listar todas las compañías con sus eslóganes.
  * Ordenar alfabéticamente a los usuarios.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** - Estructura de las interfaces de usuario.
* **CSS3** - Diseño moderno y presentación en formato de tarjetas.
* **JavaScript (ES6+)** - Lógica de consumo de APIs, manipulación del DOM y POO.
* **Git & GitHub** - Control de versiones.

---

## 💻 Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone [https://github.com/JarviBarona/Evaluaci-n-final-m-dulo-4.git](https://github.com/JarviBarona/Evaluaci-n-final-m-dulo-4.git)# Modulo4

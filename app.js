class UsuarioManager {
  constructor(url) {
    this.usuarios = [];
    this.obtenerData(url);
  }

  // Petición AJAX síncrona/asíncrona con XMLHttpRequest
  obtenerData(url) {
    const xhr = new XMLHttpRequest();
    // Abrimos la conexión de forma sincrónica (false) para asegurar que 
    // la data esté disponible inmediatamente en el constructor.
    xhr.open("GET", url, false); 
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.usuarios = JSON.parse(xhr.responseText);
          console.log("¡Datos cargados correctamente desde el Web Service!");
        } else {
          console.error("Error al cargar los datos. Status:", xhr.status);
        }
      }
    };
    xhr.send();
  }


  buscarUsuario(nombre) {
    if (!nombre) return null;
    return this.usuarios.find(u => u.name.toLowerCase() === nombre.toLowerCase());
  }

  // 1. Listar los nombres de todos los usuarios
  listarNombres() {
    console.clear();
    console.log("--- LISTA DE NOMBRES DE USUARIOS ---");
    this.usuarios.forEach(u => console.log(`• ${u.name}`));
  }

  // 2. Pedir por prompt y mostrar info básica (username y correo)
  infoBasicaPorPrompt() {
    console.clear();
    const nombre = prompt("Ingrese el nombre exacto del usuario:");
    const usuario = this.buscarUsuario(nombre);

    if (usuario) {
      console.log(`--- Información Básica de ${usuario.name} ---`);
      console.log(`Username: ${usuario.username}`);
      console.log(`Email: ${usuario.email}`);
    } else if (nombre) {
      console.warn("Usuario no encontrado.");
    }
  }

  // 3. Pedir por prompt y listar dirección completa [todos los campos]
  direccionPorPrompt() {
    console.clear();
    const nombre = prompt("Ingrese el nombre del usuario para ver su dirección:");
    const usuario = this.buscarUsuario(nombre);

    if (usuario) {
      const { street, suite, city, zipcode, geo } = usuario.address;
      console.log(`--- Dirección de ${usuario.name} ---`);
      console.log(`Calle: ${street}`);
      console.log(`Suite/Depto: ${suite}`);
      console.log(`Ciudad: ${city}`);
      console.log(`Código Postal: ${zipcode}`);
      console.log(`Geolocalización: Latitud ${geo.lat}, Longitud ${geo.lng}`);
    } else if (nombre) {
      console.warn("Usuario no encontrado.");
    }
  }

  // 4. Pedir por prompt e info avanzada (teléfono, sitio web y compañía [todos los campos])
  infoAvanzadaPorPrompt() {
    console.clear();
    const nombre = prompt("Ingrese el nombre del usuario para ver su información avanzada:");
    const usuario = this.buscarUsuario(nombre);

    if (usuario) {
      const { phone, website, company } = usuario;
      console.log(`--- Información Avanzada de ${usuario.name} ---`);
      console.log(`Teléfono: ${phone}`);
      console.log(`Sitio Web: ${website}`);
      console.log("--- Datos de la Compañía ---");
      console.log(`Nombre: ${company.name}`);
      console.log(`Frase (CatchPhrase): ${company.catchPhrase}`);
      console.log(`Eslogan (BS): ${company.bs}`);
    } else if (nombre) {
      console.warn("Usuario no encontrado.");
    }
  }

  // 5. Listar todas las compañías junto a su frase clave (catchphrase)
  listarCompanias() {
    console.clear();
    console.log("--- COMPAÑÍAS Y SUS CATCHPHRASES ---");
    this.usuarios.forEach(u => {
      console.log(`• Empresa: ${u.company.name} | Frase: "${u.company.catchPhrase}"`);
    });
  }

  // 6. Listar los nombres de todos los usuarios ordenados alfabéticamente
  listarNombresOrdenados() {
    console.clear();
    console.log("--- NOMBRES ORDENADOS ALFABÉTICAMENTE ---");
    
    // Hacemos una copia del array original para no alterar el orden por defecto
    const nombresOrdenados = this.usuarios.map(u => u.name).sort((a, b) => a.localeCompare(b));
    
    nombresOrdenados.forEach((nombre, index) => {
      console.log(`${index + 1}. ${nombre}`);
    });
  }
}

// Instanciar la clase pasándole el endpoint solicitado
const admin = new UsuarioManager("https://jsonplaceholder.typicode.com/users");
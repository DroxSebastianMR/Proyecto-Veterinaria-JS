🐾 Gestión de Mascotas de una Veterinaria

Este proyecto es una aplicación en JavaScript puro que permite gestionar mascotas en una veterinaria. Los veterinarios pueden registrar mascotas, mientras que los dueños pueden buscar información sobre razas de perros mediante una API externa.

✨ Características

👩‍⚕️ Veterinario: Puede registrar mascotas y listar todas las registradas.

🏠 Dueño: Puede buscar información sobre razas de perros usando la API de Dog CEO.

🐶 Mascotas: Se almacenan con su nombre, especie, raza, edad y dueño.

🚀 Uso

Ejemplo de ejecución en la consola:

const vet = new Veterinario("Dr. López");
vet.registrarMascota("Max", "Perro", "Labrador", 3, "Carlos Pérez");
vet.listarMascotas();

const dueño1 = new Dueño("Carlos Pérez");
dueño1.buscarRaza("labrador");

🌐 API Utilizada

La API utilizada para obtener imágenes de razas de perros es:

🔗 URL base: https://dog.ceo/api/breed/{raza}/images/random

📸 Captura de Pantalla

Agrega aquí una captura de pantalla de la ejecución en la consola
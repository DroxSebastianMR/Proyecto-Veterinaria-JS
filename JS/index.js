class Veterinario {
    constructor(nombre) {
        this.nombre = nombre;
        this.mascotas = [];
    }
    
    registrarMascota(nombre, especie, raza, edad, dueño) {
        const mascota = new Mascota(nombre, especie, raza, edad, dueño);
        this.mascotas.push(mascota);
        console.log(`Mascota registrada: ${nombre}, Dueño: ${dueño}`);
    }
    
    listarMascotas() {
        console.log(`Lista de mascotas registradas por ${this.nombre}:`);
        this.mascotas.forEach(mascota => {
            console.log(`- ${mascota.nombre}, ${mascota.raza}, ${mascota.edad} años, Dueño: ${mascota.dueño}`);
        });
    }
}

class Mascota {
    constructor(nombre, especie, raza, edad, dueño) {
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
        this.edad = edad;
        this.dueño = dueño;
    }
}

class Dueño {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    buscarRaza(raza) {
        fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    console.log(`Imagen de la raza ${raza}: ${data.message}`);
                } else {
                    console.log("Raza no encontrada");
                }
            })
            .catch(error => console.error("Error al buscar la raza:", error));
    }
}

const vet = new Veterinario("Dr. López");
vet.registrarMascota("Max", "Perro", "Labrador", 3, "Carlos Pérez");
vet.registrarMascota("Luna", "Gato", "Siames", 2, "Ana Gómez");
vet.registrarMascota("Rocky", "Perro", "Bulldog", 4, "Luis Torres");
vet.listarMascotas();

const dueño1 = new Dueño("Carlos Pérez");
dueño1.buscarRaza("labrador");

const dueño2 = new Dueño("Ana Gómez");
dueño2.buscarRaza("siamese");

const dueño3 = new Dueño("Luis Torres");
dueño3.buscarRaza("bulldog");
const elBoss = {
  nombre: "Jose Luis",
  edad: 194,
  poderes: [
    {
      nombre: "Paranoia",
      description: "intentandome escapar de esta paranoia",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la paranoia",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la paranoia",
          },
        },
      ],
    },
    {
      nombre: "Petrificasió",
      description: "Te mira y te petrifica",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la petrificasió",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la petrificasió",
          },
        },
      ],
    },
    {
      nombre: "Fuego",
      description: "Pues eso, fuego",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del fueguito",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del fueguito",
          },
        },
      ],
    },
  ],
  familiares: [
    {
      nombre: "Julian",
      edad: 342,
      parentesco: "Primo",
    },
    {
      nombre: "Paquito",
      edad: 312,
      parentesco: "Tío",
    },
    {
      nombre: "Emma",
      edad: 13,
      parentesco: "Sobrina",
    },
    {
      nombre: "Julia",
      edad: 100,
      parentesco: "Hermana",
    },
  ],
  reto: [
    [
      {
        sigueElReto: [
          {
            sigueElReto2: {
              sigueElReto3: {
                pareceQueSabesBucearEntreObjetos: {
                  definitivamenteSabes: [
                    "Jose",
                    "Luis,",
                    "te",
                    "miro",
                    "y",
                    23121,
                    "te",
                    "destruyo",
                    {
                      mensajeFinal:
                        "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
console.log(`${elBoss.nombre}, te conozco y no me das ningún miedo`);
// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
console.log('conozco tus poderes y lo que hacen!');
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"


for(let i=0; i < elBoss.poderes.length;i++){
  if(i === 0){
    console.log(`tu primer poder es ${elBoss.poderes[i].nombre} y hace ${elBoss.poderes[i].description}`)
  } else if( i===1){
    console.log(`tu segundo poder es ${elBoss.poderes[i].nombre} y hace ${elBoss.poderes[i].description}`)
  } else if(i ===2){
    console.log(`tu tercer poder es ${elBoss.poderes[i].nombre} y hace ${elBoss.poderes[i].description}`)
  }
}



//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"



// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
console.log("También se tu punto más debil, tus familiares, y les conozco...");


for( const familiar of elBoss.familiares){
  console.log(`conozco a tu ${familiar.parentesco} ${familiar.nombre}`)
}
// for( let i=0; i < elBoss.familiares.length;i++){
//   if(i===0){
//     console.log(`conozco a tu ${elBoss.familiares[i].parentesco} ${elBoss.familiares[i].nombre}`)
//   } else  if(i===1){
//     console.log(`conozco a tu ${elBoss.familiares[i].parentesco} ${elBoss.familiares[i].nombre}`)
//   } else  if(i===2){
//     console.log(`conozco a tu ${elBoss.familiares[i].parentesco} ${elBoss.familiares[i].nombre}`)
//   } else  if(i===3){
//     console.log(`conozco a tu ${elBoss.familiares[i].parentesco} ${elBoss.familiares[i].nombre}`)
//   }
// }

// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"




// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras

const mensajeMagico = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes

let mesajeHechizo =[]

for(const frase of mensajeMagico){
for (let i = 0; i < frase.length; i++) {
  if(i == ''){
    mesajeHechizo.push(frase)
  }
}
}
console.log(mesajeHechizo.join(' '))

// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".



// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.

for(const maleficio of elBoss.poderes){
  for(const imagenes of maleficio.imagenes){
    for(const frase in imagenes){
      console.log(imagenes[frase].url);
    }
  }
}

// for(const maleficio of elBoss.poderes){
//  for (let i = 0; i < maleficio.imagenes.length; i++) {
//   for(let img1 in maleficio.imagenes[i].imagen1){
//     img1 = maleficio.imagenes[i].imagen1.url
//     console.log(img1);
//   }
//   for(let img2 in maleficio.imagenes[i].imagen2){
//     img2 = maleficio.imagenes[i].imagen2.url
//     console.log(img2);
//   }
//  }
// }

// const imagenes1 = elBoss.poderes[0].imagenes[0].imagen1.url
// console.log(imagenes1);

// const imagenes2 = elBoss.poderes[0].imagenes[1].imagen2.url
// console.log(imagenes2);

// const imagenes3 = elBoss.poderes[1].imagenes[0].imagen1.url
// console.log(imagenes3)

// const imagen4 = elBoss.poderes[1].imagenes[1].imagen2.url
// console.log(imagen4);
// haremos la media de las edades de los familiares de elBoss.

let sumaEdad = 0;
let conteoMedia = 0;

for (const edadMedia of elBoss.familiares){
sumaEdad += edadMedia.edad
 conteoMedia = sumaEdad/ elBoss.familiares.length
}
console.log('Edad media:', conteoMedia);
// y mostraremos por pantalla el mensajeFinal.


const mensajeUltimo = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[8].mensajeFinal
console.log(mensajeUltimo);
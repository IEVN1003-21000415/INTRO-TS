interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;

}
interface Detalles{
    autor:string;
    year:number;
    
}

const reproductor:Reproductor={
    volumen:50,
    segundos:10,
    cancion:"valiente", 
    detalles:{
        autor:"paty canty",
        year:2018
    }
}

const{volumen, segundos,cancion,detalles}=reproductor;
const{autor,year}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son : ${segundos}`);
console.log(`La cancion  es: ${cancion}`);
console.log(`El cantante  es: ${autor}`);
console.log(`El año es: ${year}`);


const dbz:string[]=['Goku', 'Manjinbu', 'Babidy', 'Frezzer']
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);

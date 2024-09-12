

class Persona3{
    protected nombre: string;
    protected edad: number;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Hola, mi nombre es ${this.nombre}
        y tengo ${this.edad} `)
    }
}

    class Empleado extends Persona3{
        private sueldo:number;
        constructor(nombre:string, edad:number, sueldo:number){
            super(nombre, edad);//super palabra reservada 
            this.sueldo=sueldo
        }
        imprimir(): void {
            console.log(`Sueldo ${this.sueldo}`)
        }
        pagarImpuesto(){
            if(this.sueldo>5000)
            console.log(`${this.nombre} debes pagar impuestos`)
            else
            console.log(`${this.nombre} no debes pagar impuestos`)

        }
    }
//tiene dos metodos para imprimir 
//crear programa que ayude a calcular la ecuacion de la formula general cuadratica orientado a objetos 
//crear programa qur trabaje con eremncias que yude a c calculara el vumen y area del cilindro y pentago no el circulo prisma rectngular
    const persona3=new Persona3('Juan', 34);
    persona3.imprimir();
     
    const empleado3=new Empleado('Ana', 22, 7000);
    empleado3.imprimir();
    empleado3.pagarImpuesto();

    

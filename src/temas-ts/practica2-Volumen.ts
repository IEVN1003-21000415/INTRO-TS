import { AreaCirculo, AreaRectangulo, AreaPentagono } from "./Practica 2-area";

class VolumenCilindro extends AreaCirculo {
    private alturaCilindro: number;

    constructor(valorPi: number, radio: number, alturaCilindro: number) {
        super(valorPi, radio);
        this.alturaCilindro = alturaCilindro;
    }

    calcularVolumenCilindro() {
        const volumenCilindro = (this.valorPi * (this.radio ** 2)) * this.alturaCilindro;
        console.log(`El volumen del cilindro es: ${volumenCilindro}`);
    }

    imprimir() {
        console.log(`Los elementos para calcular el volumen del cilindro son: pi = ${this.valorPi}, radio = ${this.radio} y altura = ${this.alturaCilindro}`);
    }
}

const cilindro = new VolumenCilindro(3.1416, 3, 10);
cilindro.imprimir();
cilindro.calcularVolumenCilindro();

class VolumenPrismaRectangular extends AreaRectangulo {
    private largoRectangulo: number;

    constructor(baseRectangulo: number, alturaRectangulo: number, largoRectangulo: number) {
        super(baseRectangulo, alturaRectangulo);
        this.largoRectangulo = largoRectangulo;
    }

    calcularVolumenPrismaRectangular() {
        const volumenPrismaRectangular = this.baseRectangulo * this.alturaRectangulo * this.largoRectangulo;
        console.log(`El volumen del prisma rectangular es: ${volumenPrismaRectangular}`);
    }

    imprimir() {
        console.log(`Los elementos para calcular el volumen del prisma rectangular son: base = ${this.baseRectangulo}, altura = ${this.alturaRectangulo} y largo = ${this.largoRectangulo}`);
    }
}

const prismaRectangular = new VolumenPrismaRectangular(15, 7, 12);
prismaRectangular.imprimir();
prismaRectangular.calcularVolumenPrismaRectangular();

class VolumenPrismaPentagonal extends AreaPentagono {
    private alturaPentagono: number;

    constructor(longitudLado: number, valorApotema: number, alturaPentagono: number) {
        super(longitudLado, valorApotema);
        this.alturaPentagono = alturaPentagono;
    }

    private calcularAreaBasePentagono(): number {
        const perimetroPentagono = this.longitudLado * 5; // Perímetro de un pentágono regular
        return perimetroPentagono * this.valorApotema / 2; // Área de la base del pentágono
    }

    public calcularVolumenPrismaPentagonal(): void {
        const areaBasePentagono = this.calcularAreaBasePentagono();
        const volumenPrismaPentagonal = areaBasePentagono * this.alturaPentagono;
        console.log(`El volumen del prisma pentagonal es: ${volumenPrismaPentagonal}`);
    }

    imprimir() {
        console.log(`Los elementos para calcular el volumen del prisma pentagonal son: lado = ${this.longitudLado}, apotema = ${this.valorApotema} y altura = ${this.alturaPentagono}`);
    }
}

const prismaPentagonal = new VolumenPrismaPentagonal(5, 3.44, 10);
prismaPentagonal.imprimir();
prismaPentagonal.calcularVolumenPrismaPentagonal();

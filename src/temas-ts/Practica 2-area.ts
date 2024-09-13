export class AreaCirculo {
    protected valorPi: number;
    protected radio: number;

    constructor(valorPi: number, radio: number) {
        this.valorPi = valorPi;
        this.radio = radio;
    }

    public calcularAreaCirculo() {
        const areaCirculo = this.valorPi * (this.radio ** 2);
        console.log(`El área del círculo es: ${areaCirculo}`);
    }

    imprimir() {
        console.log(`Los elementos para calcular el área del círculo son: pi = ${this.valorPi} y radio = ${this.radio}`);
    }
}

const circulo = new AreaCirculo(3.1416, 5);
circulo.calcularAreaCirculo();
circulo.imprimir();

export class AreaRectangulo {
    protected baseRectangulo: number;
    protected alturaRectangulo: number;

    constructor(baseRectangulo: number, alturaRectangulo: number) {
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
    }

    public calcularAreaRectangulo() {
        const areaRectangulo = this.baseRectangulo * this.alturaRectangulo;
        console.log(`El área del rectángulo es: ${areaRectangulo}`);
    }

    imprimir() {
        console.log(`Los elementos para calcular el área del rectángulo son: base = ${this.baseRectangulo}, altura = ${this.alturaRectangulo}`);
    }
}

const rectangulo = new AreaRectangulo(17, 35);
rectangulo.calcularAreaRectangulo();
rectangulo.imprimir();

export class AreaPentagono {
    protected longitudLado: number;
    protected valorApotema: number;

    constructor(longitudLado: number, valorApotema: number) {
        this.longitudLado = longitudLado;
        this.valorApotema = valorApotema;
    }

    public calcularAreaPentagono() {
        const perimetroPentagono = this.longitudLado * 5;
        const areaPentagono = (perimetroPentagono * this.valorApotema) / 2;
        console.log(`El área del pentágono es: ${areaPentagono}`);
    }

    imprimir() {
        console.log(`Los elementos para calcular el área del pentágono son: lado = ${this.longitudLado}, apotema = ${this.valorApotema}`);
    }
}

const pentagono = new AreaPentagono(5, 3.44);
pentagono.calcularAreaPentagono();
pentagono.imprimir();

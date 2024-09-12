class EcuacionCuadratica {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    private resultado(): number {
        return this.b ** 2 - 4 * this.a * this.c;
    }

    public calcularRaices(): void {
        const valor = this.resultado();
        if (valor > 0) {
            const raiz1 = (-this.b + Math.sqrt(valor)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(valor)) / (2 * this.a);
            console.log(`La ecuación tiene dos raíces reales: x1 = ${raiz1}, x2 = ${raiz2}`);
        } else if (valor === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`La ecuación tiene una raíz real: x = ${raiz}`);
        } else {
            const parte1 = -this.b / (2 * this.a);
            const parte2 = Math.sqrt(-valor) / (2 * this.a);
            console.log(`La ecuación tiene dos raíces : x1 = ${parte1} + ${parte2}i, x2 = ${parte1} - ${parte1}i`);
        }
    }

    public mostrarCoeficientes(): void {
        console.log(`Los coeficientes de la ecuación son: a = ${this.a}, b = ${this.b}, c = ${this.c}`);
    }
}

// Crear una instancia de la ecuacion cuadratica
let ecuacion1 = new EcuacionCuadratica(-3, -2, -1);
ecuacion1.mostrarCoeficientes();
ecuacion1.calcularRaices();

// instancia con diferentes coeficientes
let ecuacion2 = new EcuacionCuadratica(1, 2, 5); 
ecuacion2.mostrarCoeficientes();
ecuacion2.calcularRaices();

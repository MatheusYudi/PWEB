const Rect = function(base, height) {
    this.__base = base;
    this.__height = height;

    this.getArea = () => this.__base * this.__height;
};

const base = prompt('Base');
const height = prompt('Altura');
const rectangle = new Rect(base, height);

document.write(`Um Retângulo de ${base} x ${height} tem Área = ${rectangle.getArea()}`);
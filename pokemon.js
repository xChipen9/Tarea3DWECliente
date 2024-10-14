class Pokemon {
    constructor(nombre, tipo, hpMax, ataque, defensa, movimientos) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hpMax = hpMax;
        this.hpActual = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos; 
        this.seHaCurado = false; 
    }

    atacar(movimiento, oponente) {
        const factorAleatorio = Math.random() * (1 - 0.85) + 0.85;
        const daño = Math.max(1, Math.floor((this.ataque / oponente.defensa) * movimiento.daño * factorAleatorio));
        oponente.hpActual = Math.max(0, oponente.hpActual - daño);
        console.log(`${this.nombre} usó ${movimiento.nombre}. ¡Hizo ${daño} de daño!`);
    }

    heal() {
        if (!this.seHaCurado) {
            const cantidadCurada = Math.floor(this.hpMax * 0.5);
            this.hpActual = Math.min(this.hpMax, this.hpActual + cantidadCurada);
            this.seHaCurado = true;
            console.log(`¡${this.nombre} se ha curado ${cantidadCurada} HP!`);
        } else {
            console.log(`¡${this.nombre} no se puede volver a curar en esta batalla!`);
        }
    }
}

class Move {
    constructor(nombre, daño) {
        this.nombre = nombre;
        this.daño = daño;
    }
}

const Tipo = {
    FUEGO: "Fuego",
    AGUA: "Agua",
    PLANTA: "Planta",
    ELÉCTRICO: "Eléctrico",
    TIERRA: "Tierra",
    PSÍQUICO: "Psíquico",
};

module.exports = { Pokemon, Move, Tipo };
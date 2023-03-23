class Auto {
    constructor (peso, asientos, aceleracion, frenado){
        this.peso = peso;
        this.asientos = asientos;
        this.aceleracion = aceleracion;
        this.velocidad = 0;
        this.frenado = frenado;
    }

    acelerar(){
        this.velocidad += this.aceleracion;
    }

    frenar(){
        this.velocidad -= this.frenado;
    }

    informarCaracteristicas(){
        console.log(`Las caracteristicas de este Auto:
        peso: ${this.peso}
        asientos: ${this.asientos}
        aceleracion: ${this.aceleracion}
        frenado: ${this.frenado}
        `);
    }

    informarVelocimetro(){
        console.log(`El auto esta yendo a: ${this.velocidad} km/h`);
    }


}

export default Auto;
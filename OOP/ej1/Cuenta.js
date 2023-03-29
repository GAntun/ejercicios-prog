class Cuenta {
    constructor(nombreCliente, numeroCuenta, tipoInteres, saldo) {
        this.nombreCliente = nombreCliente;
        this.numeroCuenta = numeroCuenta;
        this.tipoInteres = tipoInteres;
        this.saldo = saldo;
    }
    constructor2() {
        this.nombreCliente = "";
        this.numeroCuenta = "";
        this.tipoInteres = "";
        this.saldo = "";
    }

    getNombre() {
        return this.nombreCliente;
    }
    getCuenta() {
        return this.numeroCuenta;
    }
    getInteres() {
        return this.tipoInteres;
    }
    getSaldo() {
        return this.saldo;
    }

    setNombre(nombre) {
        this.nombreCliente = nombre;
    }
    setCuenta(cuenta) {
        this.numeroCuenta = cuenta;
    }
    setInteres(interes) {
        this.tipoInteres = interes;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }

    ingreso(dinero) {
        if (dinero >= 0) {
            this.saldo += dinero;
            console.log(`Tu saldo ahora es de: ${this.saldo}`);
            return true;
        } else {
            console.log("Operacion invalida");
            return false;
            
        }
    }
    reintegro(dinero) {
        if (this.saldo >= 0) {
            if (dinero >= 0) {
                this.saldo -= dinero;
                console.log(`Tu saldo ahora es de: ${this.saldo}`);
                return true;
            } else {
                console.log("Operacion invalida");
                return false;
            }

        } else {
            return console.log("Su cuenta no tiene saldo");
        }
    }
    consultarSaldo(){
        this.saldo
    }
}

export default Cuenta;
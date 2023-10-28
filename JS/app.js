class calculadora{
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }
    adicao(){
        return this.num1 + this.num2
    }
    subtrair(){
        return this.num1 - this.num2
    }
    multiplicar(){
        return this.num1 * this.num2
    }
    divisao(){
        return this.num1 / this.num2
    }
    restoDivisao(){
        return this.num1 % this.num2
    }
}

let calc = new calculadora()

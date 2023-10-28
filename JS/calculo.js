function calculadoraExe(){
    let inputNum1 = document.getElementById('number1')
    let inputNum2 = document.getElementById('number2')
    let adicao = document.getElementById('add')
    let subtraçao = document.getElementById('subt')
    let multiplicaçao = document.getElementById('mult')
    let divisao = document.getElementById('divid')
    let restoDivisao = document.getElementById('resto')
    let result = document.getElementById('result')

    adicao.addEventListener('click', (evento) =>{
        evento.preventDefault()

        let num1  = parseFloat(inputNum1.value)
        let num2  = parseFloat(inputNum2.value)
        let calcular = new calculadora(num1, num2)
        let resultado = calcular.adicao()
        result.innerHTML = `O valor da soma e ${resultado}`
        inputNum1.innerHTML = ''
    })

    subtraçao.addEventListener('click', (evento)=>{
        evento.preventDefault()

        let num1 = parseFloat(inputNum1.value)
        let num2 = parseFloat(inputNum2.value)
        let calcular =  new calculadora(num1, num2)
        let resultado = calcular.subtrair()
        result.textContent = `O valor da subtração e ${resultado}`
    })

    multiplicaçao.addEventListener('click', (evento)=>{
        evento.preventDefault()

        let num1 = parseFloat(inputNum1.value)
        let num2 = parseFloat(inputNum2.value)
        let calcular = new calculadora(num1, num2)
        let resultado = calcular.multiplicar()
        result.textContent = `o valor da multiplicação é ${resultado}`
    })

    divisao.addEventListener('click', (even)=>{
        even.preventDefault()

        let num1 = parseFloat(inputNum1.value)
        let num2 = parseFloat(inputNum2.value)
        let calcular = new calculadora(num1, num2)
        let resultado = calcular.divisao()
        result.textContent = `o valor da multiplicação é ${resultado}`
    })

    restoDivisao.addEventListener('click', (even)=>{
        even.preventDefault()

        let num1 = parseFloat(inputNum1.value)
        let num2 = parseFloat(inputNum2.value)
        let calcular = new calculadora(num1, num2)
        let resultado = calcular.restoDivisao()
        result.textContent = `o valor da multiplicação é ${resultado}`
    })

}

calculadoraExe()

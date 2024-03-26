
let num = document.getElementById('txtnumero')  // pegando os valores fora das funções para ultilizar em todas as funções 
let lista = document.querySelector('select#numeros')
let res = document.getElementById('res')
let valores = []

function isNumber(n){  // função para verificar se o numero digitado é > 1 e < 100
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}
function inList(n,l){
    if(l.indexOf(Number(n)) == -1){  // função para verificar se o numero está sendo repetido na lista 
        return true
    } else{
        return false
    }

}

function adicionando(){
    if(isNumber(num.value) && inList(num.value,valores)){
        valores.push(Number(num.value)) // push metodo que insere dados em um array
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' // para limpar o resultado quando adicionado um novo item
    } else{
        window.alert(`[ERRO]Valor invalido ou já encontrado na lista ! \u{1FAE1}`)
    }
    num.value = ''   // zerando os valores no input number
    num.focus() // método para manter o input number ja ativo após zerar os valores 
}

function analisar(){
    if(valores.length == 0){
        window.alert(`Adicione valores antes de analizar \u{1FAE3}	`)
    } else{
        
        let qtd = valores.length
        let maior = valores[0]
        let menor = valores[0] 
        let soma = 0
        for(let pos in valores ){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / qtd
        res.innerHTML += `<p>Temos ${qtd} números cadastrados</p>`
        res.innerHTML += `<p>Temos o número  ${maior} como maior valor </p> `
        res.innerHTML += `<p>Temos o número  ${menor} como menor valor </p> `
        res.innerHTML += `<p>A soma dos valores é : ${soma}  </p> `
        res.innerHTML += `<p>A média dos valores é : ${menor} </p> `
    }
}
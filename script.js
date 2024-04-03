let contador = 0;
let numeros = [];

function adicionarNumero() {
    
    contador++;
    console.log(contador);

    let addNumero = document.getElementById('novoNumero').value;
    
    if(contador<6) {
        if(addNumero == '') {
            alert('Informe um número!');
        } else {
            numeros.push(addNumero);
            console.log(numeros.toString());
        }
    } else {
      document.getElementById('btnNumero').setAttribute('disabled', true);
    }

}

function verificaNumeros() {
    let listaNumeros = document.getElementById('mostrar'); //indica onde será criado o elemento
    const tituloLista = document.createElement('h3');
    tituloLista.textContent = 'Lista de Números Menores que 50';
    listaNumeros.appendChild(tituloLista);
    
    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index] < 50){
            

            let li = document.createElement('li');
            li.textContent = numeros[index];
            listaNumeros.appendChild(li); //adiciona o elemento criado dentro do elemento em "lista" 
        }
        
    }
    document.getElementById('btnNumero').removeAttribute('disabled');
}

const aluguel = 90;
const valorKm = 0.20;

function enviaDados() {
    let quilometros = document.getElementById('quilometros').value;
    let numDias = document.getElementById('numeroDias').value;
    
    let total = ((quilometros * valorKm) + (numDias * aluguel));
    document.getElementById('total').innerHTML = `Total: R$ ${total.toFixed(2)}`;

}
    
   
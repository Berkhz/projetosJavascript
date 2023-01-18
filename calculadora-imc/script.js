let button = document.getElementById('btn');

button.addEventListener('click',() => {
    const altura = parseInt(document.getElementById('altura').value);
    const peso = parseInt(document.getElementById('peso').value);
    const result = document.getElementById('output');
    let altura_status=false, peso_status=false;

    if(altura === '' || isNaN(altura) || (altura <= 0)){
        document.getElementById('altura_error').innerHTML = 'Por favor insira uma altura válida';
    }else{
        document.getElementById('altura_error').innerHTML = '';
        altura_status=true;
    }

    if(peso === '' || isNaN(peso) || (peso <= 0)){
        document.getElementById('peso_error').innerHTML = 'Por favor insira um peso válido';
    }else{
        document.getElementById('peso_error').innerHTML = '';
        peso_status=true;
    }

    if(altura_status && peso_status){
        const imc = (peso / ((altura * altura)/10000)).toFixed(2);

        if(imc < 18.6){
            result.innerHTML = 'Abaixo do peso: ' + imc;
        }else if(imc >= 18.6 && 24.9){
            result.innerHTML = 'Normal: ' + imc;
        }else{
            result.innerHTML = 'Acima do peso: ' + imc;
        }
    }else{
        alert('O cálculo apresenta problemas, tente novamente');
        result.innerHTML = '';
    }
});
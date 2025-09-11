 let clinica = [];
if(clinica.length === 0){
    console.log('A lista de espera está vazia!');
}else{
    console.log(clinica);
}
clinica.push('Gato');
console.log(clinica);
clinica.push('Cachorro');
console.log(clinica);
clinica.push('Papagaio');
console.log(clinica);
clinica.pop();
console.log(clinica);
clinica.pop();
console.log(clinica);
clinica.pop();
if(clinica.length === 0){
     console.log('A lista de espera está vazia!');
}else{
    console.log(clinica);
}
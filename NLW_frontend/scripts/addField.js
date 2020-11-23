// procurar botão
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//para executar a ação ao clicar
function cloneField() {

    //Duplicar os campos. Que campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   //pegar os campos que precisam ser limpos. Que campos?
   const fields = newFieldContainer.querySelectorAll('input')

   //para cada campo, limpar
   fields.forEach(function(field){
       //pega o field do momento e limpa ele
       field.value = "";
   })
   
    //colocar na pagina. aonde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
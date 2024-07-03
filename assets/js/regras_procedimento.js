
// LISTA DE SCRIPTS
let modelos_scripts = {
    dog_cat_cabine: [
        'Dog & Cat na Cabine (Em desenvolvimento)'
    ],

    dog_cat_espaco: [
        'Dog & Cat + Espaço (Em desenvolvimento)'
    ],

    dados_link_reembolso: [
        'Dados do link de reembolso (Em desenvolvimento)'
    ],

    regra_tarifa: [
        'Regra da tarifa (Em desenvolvimento)'
    ],
    
    beneficio_tarifa: [
        'Benefício da tarifa (Em desenvolvimento)'
    ],

}


function create_rows(value) {

    let randomInt = Math.floor(Math.random() * 1000) + 1;

    let base_rows = document.querySelector('#baseRows');
    let new_row = document.createElement('div');
    new_row.setAttribute('class', 'row_modal');
    new_row.setAttribute('id', 'row_modal_'+randomInt);
    new_row.textContent = value;

    base_rows.appendChild(new_row);

}


function titulos(value) {

    // LISTA DE TITULOS PARA CADA SCRIPT (SE HOUVER)
    let lista_titulos = {
        acordo_de_espera: '⚠ Em hipótese alguma você pode ficar mais de 02 minutos sem enviar mensagem a ele. Utilize o script abaixo para renovar o acordo de espera: ⚠',

        aviso_falta_de_interacao: '⚠ Caso perceba que o Cliente não responde, chame-o por 3 vezes (dando um intervalo de 01 minuto a cada chamada). Se ele não responder, encerre o contato. Sugestões de Script abaixo: ⚠'

    }

    return lista_titulos[value];

}


function modal(script) {
    document.querySelector('.baseModal').style.display = 'flex';
    
    modelos_scripts[script].forEach(element => {

        create_rows(element)
   
    });
    
    if(titulos(script) == undefined) {
        console.log('Item sem titulo');
        let titulo = document.querySelector('#titulo');
        titulo.textContent = '';
        titulo.style.display = 'none';

    } else {
        let titulo = document.querySelector('#titulo');
        titulo.style.display = 'flex';
        titulo.textContent = titulos(script);
    }

}


function fecharModal() {
    document.querySelector('.baseModal').style.display = 'none';
}

// ---------- COPIAR OS DADOS PARA A ÁREA DE TRANSFERÊNCIA ---------- //
function copiarTexto(id_element) {

    const textoParaCopiar = document.getElementById(id_element).textContent.trim();
    navigator.clipboard.writeText(textoParaCopiar)
      .then(() => {
        console.log('Texto copiado com sucesso!');
      })
      .catch(err => {
        console.error('Erro ao copiar o texto: ', err);
      });
}


function border_success(id) {

    let elemento = document.querySelector(`#${id}`);
    // Adiciona a classe para alterar a cor da borda para verde
    elemento.classList.add('border_success');
    
    // Remove a classe após 2 segundos
    setTimeout(() => {
        elemento.classList.remove('border_success');
    }, 500);
}

// Suponha que o elemento pai seja o <body> (ou outro elemento estático)
const elementoPai = document.body;

elementoPai.addEventListener('click', (event) => {
    // Verifica se o elemento clicado tem a classe .row_modal
    if (event.target.classList.contains('row_modal')) {
        
        let id_element = event.target.id;
        copiarTexto(id_element);
        border_success(id_element);
    }
});
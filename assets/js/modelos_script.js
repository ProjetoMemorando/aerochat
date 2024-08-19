// LISTA DE SCRIPTS
let modelos_scripts = {
    script_inicial: [
        'Olá, seja bem-vindo(a) à GOL Linhas Aéreas! ✈😊 Meu nome é [XXXXXX], estou à disposição para te auxiliar.' ,
        `(Nome do Cliente), gostaria de iniciar informando o número do protocolo que foi gerado para este atendimento: ( Número do ticket). 
        Orientamos que não se ausente do chat, em casos de falta de interação a partir de 3 minutos, será desconectado, sendo necessário entrar em contato novamente. Como posso te ajudar?`
     
    ],
 
    retorno_cliente: [
        'Entendi, informe por favor os dados da reserva como: localizador, trechos, datas e nomes dos passageiros.',
 
        'Entendi a sua necessidade. Antes de prosseguirmos, por gentileza, confirme os dados da sua reserva. Preciso do localizador, dos trechos, datas e nomes dos passageiros.',
 
        'Para darmos continuidade ao atendimento peço, por favor, que informe os dados da reserva: localizador, trechos, datas e nomes dos passageiros.',
 
        'Para seguirmos com o atendimento preciso que compartilhe os detalhes da sua reserva: localizador, trechos, datas e nomes dos passageiros.'
    ],
 
    aviso_falta_de_interacao: [
        '(Nome do cliente), você está por aqui? Como posso ajudá-lo?',
 
        'Olá, [nome do cliente] ainda está conectado? Preciso que você se comunique comigo, ou o atendimento poderá ser encerrado, automaticamente, por falta de interação.',
 
        'Por falta de comunicação, o contato será interrompido. Caso tenha alguma dúvida, por gentileza, retorne em nosso atendimento. A GOL Linhas Aéreas agradece seu contato!'
    ],
 
    pesquisa_de_satisfacao: [
        'Seu feedback sobre o atendimento GOL é essencial para nós. Por favor, compartilhe a sua experiência conosco. Agradecemos a sua avaliação. ✈️💬',
 
        'Sua opinião sobre o atendimento GOL é importante para nossa melhoria contínua. Por favor, dedique um momento para nos avaliar. 💖✈️',
 
        'Valorizamos a sua opinião sobre o atendimento GOL. Vou transferir para nossa pesquisa, sua avaliação é fundamental para nós. 💬✈️',
 
        'A sua avaliação sobre o atendimento GOL é importante para nós. Por favor, deixe-nos saber como foi sua experência conosco através da nossa pesquisa. 💖✈️'
    ],
 
  alteracao_cadastral: [
        'Para prosseguir com a sua solicitação é obrigatória a confirmação de todos os seguintes dados de segurança: e-mail de cadastro da conta, nome, sobrenome e endereço completo do titular da conta.'
    ],
 
    agradecimento: [
        '[Nome do cliente], agradeço por ter aguardado enquanto eu analisava a sua solicitação. 😊✈💬',
 
        '[Nome do cliente], Agradeço por sua paciência e pedimos desculpas pelo tempo de espera. ✈🙏💬',
 
        'Muito obrigada por aguardar. Pedimos desculpas pela demora. 🙇‍♀️✈️💬',
 
        '[Nome do cliente], muito obrigada por aguardar, agradeço a sua compreensão. 🙏💖✈'
    ],
 
    acordo_de_espera: [

        
        '[Nome do cliente], vou me ausentar para verificar o seu questionamento. Mas pode me chamar a qualquer momento, que estou por aqui.',
 
        '[Nome do cliente], estou quase finalizando. Peço que aguarde um momento, por favor.',
        
        'Aguarde só mais um momento, por favor.',
 
        'Estou quase lá! Mais um momento, por gentileza.',
 
        'Peço desculpas pela espera. Estou verificando o mais rápido possível.'
    ],
 
    encerramento_falta_de_comunicacao: [
        'Por falta de comunicação, o contato será interrompido. Caso tenha alguma dúvida, por gentileza, retorne em nosso atendimento. A GOL Linhas Aéreas agradece seu contato! ✈️💬',
 
        'Devido à falta de comunicação, o chat será encerrado. Se você tiver mais alguma dúvida, por favor, entre em contato conosco novamente. A GOL Linhas Aéreas agradece seu contato! ✈️💬',
 
        'Devido falta de comunicação o contato será encerrado. Peço por gentileza que inicie um novo atendimento. A GOL Linhas Aéreas agradece seu contato! ✈️💬',
 
        'Por falta de interação, este chat será encerrado. Caso ainda precise do nosso auxílio, sinta-se à vontade para iniciar um novo atendimento. A GOL Linhas Aéreas agradece seu contato! ✈️💬'
    ],
  
    simulacao_compra: [
        'Em desenvolvimento'
    ]
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
        acordo_de_espera: '⚠ Devemos utilizar os scripts abaixo para renovar o acordo de espera. É crucial sempre iniciar pelo primeiro script.⚠',
 
        aviso_falta_de_interacao: '⚠ É necessário aguardar 3 minutos no chat. Caso não haja retorno do contato, a conversa deverá ser interrompida por falta de comunicação. ⚠'
 
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
 
function limparModal() {
    let row_modal = document.querySelectorAll('.row_modal');
    row_modal.forEach((row) => {
        row.remove(row_modal);
        //console.log('Modal limpo');
    })
}
 
function fecharModal() {
    limparModal()
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

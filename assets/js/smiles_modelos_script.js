// LISTA DE SCRIPTS
let modelos_scripts = {
    script_inicial: [
        'Olá, seja bem-vindo(a) ao atendimento Smiles! Este atendimento é exclusivo para os clientes Dimante, é ótimo ter você aqui! ✈😊 Meu nome é [XXXXXX], estou à disposição para te auxiliar.' ,

        'Olá! Seja bem-vindo(a) ao atendimento Smiles! É um prazer receber você neste canal dedicado aos nossos clientes Diamante. ✈😊 Meu nome é [XXXXXX] e estou à disposição para ajudar no que precisar.' ,
        
        `(Nome do Cliente), gostaria de iniciar informando o número do protocolo que foi gerado para este atendimento: XXXX. 
        Para garantir uma melhor experiência, peço que não se ausente do atendimento por mais de 6 minutos, para que a conversa não seja encerrada, caso seja, não se preocupe, você pode iniciar um novo atendimento a qualquer momento. 
Como posso te ajudar? ✈️`
     
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
 
        'Por falta de comunicação, estamos encerrando o contato. Qualquer dúvida, ficamos à disposição! Obrigado por ser um Cliente diamante. A GOL Smiles agradece o seu contato. 💖✈️'
    ],
 
    pesquisa_de_satisfacao: [
        'XXXX, como um cliente Diamante, seu feedback sobre o atendimento Smiles tem uma importância ainda mais especial para nós! Por favor, compartilhe a sua experiência conosco. Agradecemos a sua avaliação. 💖💎',
 
        'XXXX, obrigado por ser um cliente Diamante, a Smiles agradece o seu contato! Sua opinião é essencial para nós. Pedimos que avalie o atendimento e deixe uma breve descrição da sua experiência. Seu feedback nos ajuda a melhorar sempre! 😄✈️',
         
        'XXXX, a Smiles agradece seu contato e a confiança como cliente Diamante! Queremos ouvir você: avalie o atendimento e conte rapidamente como foi sua experiência. Sua opinião é fundamental para seguirmos evoluindo. ✈️✨',

        'XXXX, espero ter auxiliado da melhor maneira possível. Contamos com a sua participação na nossa pesquisa de satisfação, que será disponibilizada ao final do atendimento. Sua opinião é muito importante para nós! Agradecemos por escolher a Smiles! 🧡✈️'
    ],
 
  alteracao_cadastral: [
       
    `Em construção...`

      
    ],
 
    agradecimento: [
        '[Nome do cliente], agradeço por ter aguardado enquanto eu analisava a sua solicitação. 😊✈💬',
 
        '[Nome do cliente], agradeço por sua paciência e pedimos desculpas pelo tempo de espera. ✈🙏💬',
 
        'Muito obrigada por aguardar. Pedimos desculpas pela demora. 🙇‍♀️✈️💬',
 
        '[Nome do cliente], muito obrigada por aguardar, agradeço a sua compreensão. 🙏💖✈'
    ],
 
    acordo_de_espera: [

        
        '[Nome do cliente], vou me ausentar para verificar o seu questionamento. Mas pode me chamar a qualquer momento, que estou por aqui.',
 
        '[Nome do cliente], estou quase finalizando. Peço que aguarde um momento, por favor.',
        
        'Aguarde só mais um momento, por favor.',
        
        'Só mais um momento, por favor. Caso precise de qualquer coisa, estou à disposição. É só chamar.',
 
        'Estou quase lá! Mais um momento, por gentileza.',
 
        'Peço desculpas pela espera. Estou verificando o mais rápido possível.'
    ],
 
    encerramento_falta_de_comunicacao: [
        'Por falta de comunicação, o contato será interrompido. Caso tenha alguma dúvida, por gentileza, retorne em nosso atendimento. A Smiles agradece seu contato! ✈️💬',
 
        'Por falta de comunicação, estamos encerrando o contato. Qualquer dúvida, ficamos à disposição! Obrigado por ser um Cliente diamante. A GOL Smiles agradece o seu contato. 💖✈️',
 
        'Devido falta de comunicação o contato será encerrado. Peço por gentileza que inicie um novo atendimento. A Smiles agradece seu contato! ✈️💬',
 
        'Devido à falta de comunicação, o chat será encerrado. Se você tiver mais alguma dúvida, por favor, entre em contato conosco novamente. A Smiles agradece seu contato! ✈️💬'
    ],
  
    solicitacao_de_descricao_de_atendimento_chat: [
        '[Nome], Gostaria de informá-lo(a) que, no atendimento via chat, não enviamos a descrição do atendimento. No entanto, ressalto que o histórico de nosso contato estará disponível para o(a) senhor(a) enquanto o chat estiver ativo. Caso tenha alguma dúvida ou precise de mais informações, estou à disposição para ajudar! Agradeço pela sua compreensão.'
    ],

    atrito: [
        'Lamento que a solução não tenha atendido às suas expectativas, gostaria muito de poder realizar o procedimento, porém mediante as regras o sistema não permite.',

        'Peço desculpa que as informações passadas não se apliquem ao que deseja, gostaria muito de poder realizar o procedimento, no entanto, mediante o regulamento, não é possível.'
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
 
        aviso_falta_de_interacao: '⚠ É necessário aguardar 3 minutos no chat. Caso não haja retorno do contato, a conversa deverá ser interrompida por falta de comunicação. ⚠' ,
        
        atualizacao_de_dados_cadastrais: 'Caso o cliente deseje atualizar os dados, porém não passou pelas etapas de segurança, siga o script abaixo. ⚠'
 
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








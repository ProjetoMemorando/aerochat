// LISTA DE SCRIPTS
let modelos_scripts = {
    script_inicial: [
        'Olá, seja bem-vindo(a) à GOL Linhas Aéreas! ✈😊 Meu nome é [XXXXXX], estou à disposição para te auxiliar.' ,
        `(Nome do Cliente), gostaria de iniciar informando o número do protocolo que foi gerado para este atendimento: ( Número do ticket). 
Orientamos que não se ausente do chat, em casos de falta de interação a partir de 3 minutos, será desconectado, sendo necessário entrar em contato novamente. Como posso te ajudar?`
     
    ],
 
    retorno_cliente: [
        'Entendi, informe por favor os dados da reserva como: localizador, trechos, datas e nomes dos passageiros.',
 
        'Entendi a sua necessidade. Antes de prosseguirmos, por gentileza, confirme os dados de segurança da sua reserva. Preciso do localizador, dos trechos, datas e nomes dos passageiros conforme constam na reserva.',
 
        'Para darmos continuidade ao atendimento peço, por favor, que informe os dados da reserva: localizador, trechos, datas e nomes dos passageiros.',
 
        '[Nome do cliente], para que eu possa seguir com o atendimento, poderia me informar os dados da sua reserva, por favor? Localizador, trechos, datas da viagem e nomes dos passageiros.'
    ],
 
    aviso_falta_de_interacao: [
        '2-	[Nome do cliente], sigo por aqui para te ajudar. 😊 Quando puder, me responda para continuarmos o atendimento.',
 
        '[Nome do cliente], você ainda está por aqui? Fico aguardando sua mensagem para dar continuidade ao seu atendimento. ✈ Caso não haja interação em alguns instantes, o atendimento poderá ser encerrado automaticamente.',
 
        'Como não tivemos retorno no momento, [Nome do cliente], o atendimento será encerrado por falta de comunicação. Caso ainda precise de ajuda, será um prazer te atender novamente. GOL Linhas Aéreas agradece seu contato! 😊✈'
    ],
 
    pesquisa_de_satisfacao: [
        'Seu feedback sobre o atendimento GOL é essencial para nós. Por favor, compartilhe a sua experiência conosco. Agradecemos a sua avaliação. ✈️💬',
 
        'Sua opinião sobre o atendimento GOL é importante para nossa melhoria contínua. Por favor, dedique um momento para nos avaliar. 💖✈️',
 
        'Valorizamos a sua opinião sobre o atendimento GOL. Vou transferir para nossa pesquisa, sua avaliação é fundamental para nós. 💬✈️',
 
        'A sua avaliação sobre o atendimento GOL é importante para nós. Por favor, deixe-nos saber como foi sua experiência conosco através da nossa pesquisa. 💖✈️',
        
        'A GOL agradece o seu contato! Sua opinião é essencial para nós. Pedimos que avalie o atendimento e deixe uma breve descrição da sua experiência. Seu feedback nos ajuda a melhorar sempre! ✈️',
    
        'Obrigado pelo seu contato! 💖 Conte pra gente como foi sua experiência, seu feedback sobre o atendimento GOL faz toda a diferença! ✈️',

        'Agradecemos o seu contato! Gostaríamos de saber como foi sua experiência com o atendimento GOL. Por favor, avalie o atendimento e compartilhe seu feedback, ele é essencial para continuarmos aprimorando nossos serviços. ✈️'
    ],
 
  alteracao_cadastral: [
        'Para prosseguir com a sua solicitação é obrigatória a confirmação de todos os seguintes dados de segurança: e-mail de cadastro da conta, nome, sobrenome e endereço completo do titular da conta.' ,
       'Para seguirmos com sua solicitação, poderia, por favor, enviar os comprovantes do seu endereço antigo e do atual?' ,
        'Para que possamos dar sequência à sua solicitação, por favor, confirmar os seguintes dados: Data de Nascimento, Nome do Pai e Nome da Mãe?' ,
      'Para seguirmos com sua solicitação, poderia confirmar, por favor, o número de telefone que está registrado no seu cadastro?' ,
      

      
    ],
 
    agradecimento: [
        '[Nome do cliente], obrigada por aguardar enquanto eu verificava sua solicitação. 😊✈ Já volto com as informações para você. 😊',
 
        '[Nome do cliente], agradeço por sua paciência e pedimos desculpas pelo tempo de espera. ✈🙏',
 
        'Vou analisar sua solicitação, [Nome do cliente]. Peço só um instante, por gentileza. 😊
',
 
        '[Nome do cliente], muito obrigada por aguardar, agradeço a sua compreensão. 💖✈'
    ],
 
    acordo_de_espera: [

        
        'Vou analisar sua solicitação, [Nome do cliente]. Peço só um instante, por gentileza. Se precisar falar comigo, estou por aqui.',
 
        '[Nome do cliente], vou verificar sua solicitação e já volto com as informações para você. Se precisar falar comigo, estou por aqui.',
        
        '[Nome do cliente], só mais um momento, tudo bem? Se precisar, é só me chamar.',
        
        'Só mais um momento, por favor. Caso precise de qualquer coisa, estou à disposição. É só chamar.',
 
        'Estou quase lá! Mais um momento, por gentileza.',
 
        'Peço desculpas pela espera. Estou verificando o mais rápido possível.'
    ],
 
    encerramento_falta_de_comunicacao: [
        'Por falta de comunicação, o contato será interrompido. Caso tenha alguma dúvida, por gentileza, retorne em nosso atendimento. A GOL Linhas Aéreas agradece seu contato! ✈️💬',
 
        'Devido à falta de comunicação, o chat será encerrado. Se você tiver mais alguma dúvida, por favor, entre em contato conosco novamente. A GOL Linhas Aéreas agradece seu contato! ✈️💬',
         
        'Por falta de interação, este chat será encerrado. Caso ainda precise do nosso auxílio, sinta-se à vontade para iniciar um novo atendimento. A GOL Linhas Aéreas agradece seu contato! ✈️💬'
    ],
  
    solicitacao_de_descricao_de_atendimento_chat: [
        'Prezado(a) Sr.(a) [Nome], Gostaria de informá-lo(a) que, no atendimento via chat, não enviamos a descrição do atendimento. No entanto, ressalto que o histórico de nosso contato estará disponível para o(a) senhor(a) enquanto o chat estiver ativo. Caso tenha alguma dúvida ou precise de mais informações, estou à disposição para ajudar! Agradeço pela sua compreensão.'
    ],

    ferramenta_com_instabilidade: [
        'Agradecemos pelo seu contato e entendemos a sua solicitação. No momento, estamos passando por uma instabilidade temporária em nossos sistemas, e isso pode estar impactando sua experiência. Pedimos, por gentileza, que tente novamente em outro momento. Ainda não temos uma previsão exata para a normalização, mas nossa equipe está trabalhando com prioridade para resolver o quanto antes. Agradecemos muito pela sua paciência e compreensão. Se precisar de mais alguma coisa ou tiver outra dúvida, estou aqui para ajudar!'
   ],

    atendimento_atribuido: [
        'Olá, meu nome é [xxx]. Devido a uma questão técnica, o atendente anterior não conseguirá dar continuidade à sua solicitação. A partir de agora, eu assumo o seu atendimento e vou te auxiliar no que for necessário. Peço que aguarde um instante enquanto verifico as informações para prosseguir com a sua solicitação.'
   ],

    atrito: [
        'Lamento que a solução não tenha atendido às suas expectativas, porém mediante as regras o sistema não permite.',

        'Peço desculpa que as informações passadas não se apliquem ao que deseja, no entanto, mediante o regulamento, não é possível.'

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







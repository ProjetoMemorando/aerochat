// ---------- TEXTOS MODAL ---------- //

let script_inicial = [`Olá, [Nome do cliente].
Seja bem-vinda a GOL linhas aéreas! ✈ 😊
Meu nome é [Seu nome], estou à disposição para te auxiliar. 
Gostaria de iniciar informando o protocolo que foi gerado para este atendimento: XXXXX. 
Agora que seu cartão de embarque já foi apresentado, daremos início à decolagem.
Como posso te ajudar?`];

let retorno_cliente = [
  `Entendi, informe por favor os dados da reserva como: localizador, trechos, datas e nomes dos passageiros.`,
  `Entendi sua necessidade, antes de prosseguirmos, por gentilizar confirmar os dados da sua reserva. Preciso do localizador dos trechos, datas e nomes dos passageiros.`,
  `Para darmos continuidade ao atendimento peço por favor, que informe os dados da reserva: localizador, trechos, datas e nomes dos passageiros.`,
  `Para seguirmos com o atendimento preciso que compartilhe os detalhes da sua reserva: localizador, trechos, datas e nomes dos passageiros.`
]

let aviso_falta_de_interacao = [`⚠ Caso perceba que o Cliente não responde, chame-o por 3 vezes (dando um intervalo de 01 minuto a cada chamada). Se ele não responder, encerre o contato. Sugestões de Script abaixo: ⚠
`,
  `(Nome do cliente), você está por aqui? Como posso ajudá-lo?`,
  `Se estiver online, peço que se comunique, caso contrário o atendimento será finalizado.`,
  `Olá, [nome do cliente] ainda está conectado? Preciso que você retorne, pois nosso sistema está programado para ser encerrado automaticamente quando não há troca de mensagens.`,
  `Por falta de comunicação, o contato será interrompido. Caso tenha alguma dúvida, por gentileza, retorne em nosso atendimento. A GOL Linhas Aéreas agradece seu contato!`
]


let pesquisa_de_satisfacao = [
  `Seu feedback sobre o atendimento GOL é essencial para nós. Por favor, compartilhe sua experiência conosco. Agradecemos sua avaliação. ✈️💖😊💬`,
  `Sua opinião sobre o atendimento GOL é crucial para nossa melhoria contínua. Por favor, dedique um momento para nos avaliar. Seu feedback é muito apreciado. 🙏✨💖✈️`,
  `Valorizamos sua opinião sobre o atendimento GOL. Por favor, tire um momento para nos fornecer seu feedback. Sua avaliação é fundamental para nós. 💬💖✈️✨`,
  `Sua avaliação do atendimento GOL é importante para nós. Por favor, tire um momento para nos contar sobre sua experiência. Agradecemos seu feedback e sua contribuição para melhorarmos. 💖🌟✈️😊`
]


let ausencia_do_cliente = [
  `Peço por gentilizar que aguarde enquanto analiso sua solicitação. Orientamos que não se ausente do chat, pois poderá ser desconectado por falta de interação e será necessário entrar em contato novamente. Precisamos interagir de 03 em 03 minutos no máximo.`,
  `Por favor, aguarde um momento enquanto verifico as informações em nosso sistema. É importante que você permaneça presente no chat, pois a falta de interação pode resultar em desconexão e será necessário realizar um novo contato. Precisamos interagir de 03 em 03 minutos no máximo.`
]

let agradecimento = [
  `Muito obrigada pela sua paciência e compreensão enquanto analisávamos a sua solicitação. 😊✈💬`,
  `Agradecemos por sua paciência e pedimos desculpas pelo tempo de espera. ✈🙏💬`,
  `Muito obrigada por aguardar. Pedimos desculpas pela demora. 🙇‍♀️✈️💬`,
  `Muito obrigada por esperar conosco. Pedimos desculpas pelo atraso e agradecemos sua compreensão.🙏💖✈`
]

let acordo_de_espera = [
  `⚠ Em hipótese alguma você pode ficar mais de 02 minutos sem enviar mensagem a ele.
  Utilize o script abaixo para renovar o acordo de espera: ⚠`,
  `[Nome do cliente], vou me ausentar, para verificar seu questionamento. Mas pode me chamar a qualquer momento, que estou por aqui.`,
  `[Nome do cliente], estou quase finalizando. Peço que aguarde um momento, por gentileza`,
  `Aguarde só mais um momento, por favor.`,
  `Estou quase lá! Mais um momento, por gentileza.`,
  `Peço desculpas pela demora. Estou verificando o mais rápido possível.`
]

let = encerramento_falta_de_comunicacao = [
  `Por falta de comunicação, o contato será interrompido. Caso tenha alguma dúvida, por gentileza, retorne em nosso atendimento.`,
  `Devido à falta de comunicação, o chat será encerrado. Se você tiver mais alguma dúvida, por favor, não hesite em nos contatar novamente. Estamos aqui para ajudar.`,
  `Devido falta de comunicação o contato será encerrado. Peço por gentileza que inicie um novo atendimento.`,
  `Por falta de interação, este chat será encerrado. Se precisar de assistência adicional, sinta-se à vontade para iniciar um novo atendimento. Agradecemos sua compreensão. A GOL Linhas Aéreas agradece seu contato!`
]

// ---------- ABRIR MODAL ---------- //

function abrirModal(value) {
  let x = document.getElementById("base-modal");
  let y = document.querySelector('.text_longo');



  // Switch para capturar o valor e selecionar a opção
  switch(value) {

    // Card 1
    case 'script_inicial':
      x.style.display = "flex";
      y.style.display = "block";


      for(let i = 0; i < script_inicial.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`script_inicial${i}`);
        novaDiv.textContent = script_inicial[i];
        divText.appendChild(novaDiv);
      
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-script_inicial${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('script_inicial${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 2
    case 'retorno_cliente':
      x.style.display = "flex";
      y.style.display = "block";


      for(let i = 0; i < retorno_cliente.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`retorno_cliente${i}`);
        novaDiv.textContent = retorno_cliente[i];
        divText.appendChild(novaDiv);
      
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-retorno_cliente${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('retorno_cliente${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 3
    case 'aviso_falta_de_interacao':
      x.style.display = "flex";
      y.style.display = "block";

      // ----- Insere novas divs com os textos ----- //
      for(let i = 1; i < aviso_falta_de_interacao.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');

        let novaDivAviso = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`aviso_falta_de_interacao${i}`);
        novaDiv.textContent = aviso_falta_de_interacao[i];
        divText.appendChild(novaDiv);

        // let divTextAlerta = document.querySelector('.base-fecharModal');
        // novaDivAviso.setAttribute('class','textoAlerta');
        // novaDivAviso.setAttribute('id',`alerta-aviso_falta_de_interacao${i}`);
        // novaDivAviso.textContent = aviso_falta_de_interacao[0];
        // divTextAlerta.appendChild(novaDivAviso);
      
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-aviso_falta_de_interacao${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('aviso_falta_de_interacao${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 4
    case 'pesquisa_de_satisfacao':
      x.style.display = "flex";
      y.style.display = "block";

      // ----- Insere novas divs com os textos ----- //
      for(let i = 0; i < pesquisa_de_satisfacao.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`pesquisa_de_satisfacao${i}`);
        novaDiv.textContent = pesquisa_de_satisfacao[i];
        divText.appendChild(novaDiv);
      
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-pesquisa_de_satisfacao${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('pesquisa_de_satisfacao${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 5
    case 'ausencia_do_cliente':
      x.style.display = "flex";
      y.style.display = "block";

      // ----- Insere novas divs com os textos ----- //
      for(let i = 0; i < ausencia_do_cliente.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`ausencia_do_cliente${i}`);
        novaDiv.textContent = ausencia_do_cliente[i];
        divText.appendChild(novaDiv);
      
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-ausencia_do_cliente${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('ausencia_do_cliente${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 6
    case 'agradecimento':
      x.style.display = "flex";
      y.style.display = "block";

      // ----- Insere novas divs com os textos ----- //
      for(let i = 0; i < agradecimento.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`agradecimento${i}`);
        novaDiv.textContent = agradecimento[i];
        divText.appendChild(novaDiv);
      
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-agradecimento${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('agradecimento${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 7
    case 'acordo_de_espera':
      x.style.display = "flex";
      y.style.display = "block";

      // ----- Insere novas divs com os textos ----- //
      for(let i = 1; i < acordo_de_espera.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        let novaDivAviso = document.createElement('div');

        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`acordo_de_espera${i}`);
        novaDiv.textContent = acordo_de_espera[i];
        divText.appendChild(novaDiv);
        
        // let divTextAlerta = document.querySelector('.base-fecharModal');
        // novaDivAviso.setAttribute('class','textoAlerta');
        // novaDivAviso.setAttribute('id',`alerta-acordo_de_esperanca${i}`);
        // novaDivAviso.textContent = acordo_de_esperanca[0];
        // divTextAlerta.appendChild(novaDivAviso);

        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-acordo_de_espera${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('acordo_de_espera${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

    // Card 8
    case 'encerramento_falta_de_comunicacao':
      x.style.display = "flex";
      y.style.display = "block";

      // ----- Insere novas divs com os textos ----- //
      for(let i = 0; i < encerramento_falta_de_comunicacao.length; i++) {

        // ----- Cria a div onde vai ficar os textos ----- //
        let divText = document.querySelector('.text_longo');
        let novaDiv = document.createElement('div');
      
        novaDiv.setAttribute('class','texto');
        novaDiv.setAttribute('id',`encerramento_falta_de_comunicacao${i}`);
        novaDiv.textContent = encerramento_falta_de_comunicacao[i];
        divText.appendChild(novaDiv);
        
        // ----- Cria o input que será o botão ----- //
        let novoInput = document.createElement('input');
      
        novoInput.setAttribute('class','btn-copiar');
        novoInput.setAttribute('id',`btn-copiar-encerramento_falta_de_comunicacao${i}`);
        novoInput.setAttribute('type','button');
        novoInput.setAttribute('value','Copiar');
        novoInput.setAttribute('onclick',`copiarTexto('encerramento_falta_de_comunicacao${i}')`);
      
        // Adiciona o botão à div que acabou de ser criada
        novaDiv.appendChild(novoInput);
      }

      break;

  };

};


// ---------- COPIAR OS DADOS PARA A ÁREA DE TRANSFERÊNCIA ---------- //

function copiarTexto(idDaDiv) {
  const textoParaCopiar = document.getElementById(idDaDiv).textContent.trim();
  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      //console.log('Texto copiado com sucesso!');
    })
    .catch(err => {
      //console.error('Erro ao copiar o texto: ', err);
    });
}

// ---------- Fechar Modal ---------- //

function fecharModal() {
  let x = document.getElementById("base-modal");

  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  // Primeiro, selecione o elemento pai usando querySelector
  let elementoPai = document.querySelector('.text_longo');

  // Em seguida, selecione todos os elementos filhos com a classe 'texto'
  let elementosFilhos = elementoPai.querySelectorAll('.texto');

  // Loop através dos elementos filhos e remova cada um
  for (let i = 0; i < elementosFilhos.length; i++) {
    elementoPai.removeChild(elementosFilhos[i]);

  }
  
}

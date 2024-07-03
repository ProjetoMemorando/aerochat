
// LISTA DE SCRIPTS
let modelos_scripts = {
    dog_cat_cabine: [
       `(Nome do cliente), para quem deseja viajar com seu pet pela GOL, é importante estar ciente de algumas diretrizes específicas. Antes de seguirmos, gostaria de fazer algumas perguntas para entender melhor sua situação, isso nos ajudará a oferecer as melhores orientações para sua viagem.
Seu voo é nacional ou internacional?
O voo é operado pela GOL?
Você levará um cachorro ou um gato?
Seu animal é macho ou fêmea?
Qual é a raça do seu animal?
Qual é a idade do seu animal?
Qual é o peso do seu animal junto com a caixa de transporte?`,
        
 ` O serviço Dog&Cat Cabine (Nacional) permite que cachorros ou gatos de até 10 kg (incluindo a caixa de transporte) viajem junto com seus donos. Para garantir uma viagem tranquila, é importante seguir algumas diretrizes específicas:

 	✈︎O animal acompanhará seu dono em todos os voos até o destino final.
 	✈︎Durante o voo, o animal deve ficar na caixa de transporte, acomodada abaixo do assento à frente do dono, durante toda a viagem, por questão de segurança ao seu pet.
 	✈︎Passageiro é responsável em providenciar todos os documentos necessários.
 	✈︎Dimensões da caixa de transporte:
Rígida (fibra plástica, plástico resistente): até 22 cm de altura, 32 cm de largura e 43 cm de profundidade.
Flexível (tecidos impermeáveis): até 24 cm de altura, 32 cm de largura e 43 cm de profundidade.
 	Valores dos serviços:
Voos Nacionais:
Fora da janela de check-in (+48h do voo): R$ 250.
Dentro da janela de check-in (-48h do voo): R$ 300.
Voos Internacionais:
Fora da janela de check-in (+48h do voo): USD 170.
Dentro da janela de check-in (-48h do voo): USD 180.
 Documentos necessários para voos nacionais:Atestado Sanitário: Deve constar que o animal está em boas condições de saúde e válido por 10 dias após a data de emissão.
Carteira de Vacinação: Deve incluir a vacina antirrábica com o nome do laboratório, tipo de vacina e número da ampola utilizada. A vacina deve ter sido aplicada há mais de 30 dias, exceto em caso de reforço, onde não é necessário esperar 30 dias para o voo.
Passaporte para Trânsito de Cães e Gatos (opcional): O proprietário deve solicitar ao veterinário que registre as informações sanitárias no passaporte até 10 dias antes da viagem e depois procurar a Unidade do Vigiagro para a legalização.
Se tiver alguma dúvida ou precisar de mais informações, estou aqui para ajudar!
`,
 ` O serviço Dog&Cat Cabine (Internacional) permite que cachorros ou gatos de até 10 kg (incluindo a caixa de transporte) viajem junto com seus donos. Para garantir uma viagem tranquila, é importante seguir algumas diretrizes específicas:

 	✈︎O animal acompanhará seu dono em todos os voos até o destino final.
 	✈︎Durante o voo, o animal deve ficar na caixa de transporte, acomodada abaixo do assento à frente do dono, durante toda a viagem, por questão de segurança ao seu pet.
 	✈︎Passageiro é responsável em providenciar todos os documentos necessários.
  
 ✈︎Dimensões da caixa de transporte:
Rígida (fibra plástica, plástico resistente): até 22 cm de altura, 32 cm de largura e 43 cm de profundidade.
Flexível (tecidos impermeáveis): até 24 cm de altura, 32 cm de largura e 43 cm de profundidade.

 ✈︎Valores dos serviços:
 
✈︎Voos Nacionais:
-Fora da janela de check-in (+48h do voo): R$ 250.
-Dentro da janela de check-in (-48h do voo): R$ 300.
✈︎Voos Internacionais:
-Fora da janela de check-in (+48h do voo): USD 170.
-Dentro da janela de check-in (-48h do voo): USD 180.

✈︎Documentos necessários para voos nacionais:
-Atestado Sanitário: O atestado médico veterinário deve constar que o animal está em boas condições de saúde e deve ser emitido até 10 dias antes da data de embarque.
-Carteira de Vacinação: Deve incluir a vacina antirrábica, obrigatória para animais a partir do 3º mês de idade. A vacina deve ter sido aplicada há mais de 30 dias, exceto em caso de reforço, onde não é necessário esperar 30 dias para o voo.
-Certificado Veterinário Internacional (CVI ou CZI): Certificado emitido para voo internacional, válido por 60 dias a partir da emissão.
-Passaporte para Trânsito de Cães e Gatos (opcional): O tutor deve solicitar ao veterinário que registre as informações sanitárias no passaporte até 10 dias antes da viagem e depois procurar a Unidade do Vigiagro para a legalização. Válido por 60 dias a partir da legalização pelo Vigiagro, desde que a vacinação antirrábica esteja válida.
-Exclusivo para voos com destino a Miami (MIA): Autorização do CDC (Centro de Controle e Prevenção de Doenças), certificado emitido exclusivamente pelo CDC para entrada de cães nos EUA através de Miami, com validade determinada pelo CDC.
`
    
    ],

    dog_cat_espaco: [
        '(Nome do cliente), o serviço DOG&CAT + ESPAÇO está suspenso por período indeterminado. Pedimos desculpas pelo transtorno.'
        
    ],

    dados_link_reembolso: [
        'Dados do link de reembolso (Em desenvolvimento)'
    ],

    regra_tarifa: [
        'Regra da tarifa (Em desenvolvimento)'
    ],
    
    medif_fremec: [
        'medif_fremec a (Em desenvolvimento)'
        
    ],
    
    objeto_esquecido: [
        'objeto_esquecido a (Em desenvolvimento)'
        
    ],
    
    obagagem_mao: [
        'bagagem_mao a (Em desenvolvimento)'
        
    ],
    declaracao_valores: [
            'declaracao_valores (Em desenvolvimento)'
            
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

        aviso_falta_de_interacao: '⚠ Caso perceba que o Cliente não responde, chame-o por 3 vezes (dando um intervalo de 02 minuto a cada chamada). Se ele não responder, encerre o contato. Sugestões de Script abaixo: ⚠'

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


// LISTA DE SCRIPTS
let modelos_scripts = {
    dog_cat_cabine: [
       `Em construção...`,
        
 `Em construção... `,
 `Em construção...`
    
    ],

    dog_cat_espaco: [
        '(Nome do cliente), o serviço DOG&CAT + ESPAÇO está suspenso por período indeterminado. Pedimos desculpas pelo transtorno.'
        
    ],

    dados_link_reembolso: [
    `(Nome do cliente), para que possamos dar continuidade à sua solicitação e garantir que tudo seja feito da melhor forma possível, preciso coletar algumas informações do passageiro.
 	✈︎Nome do titular da conta:   
 	✈︎CPF do titular da conta:   
 	✈︎Data de Nascimento:   
 	✈︎Tipo de Endereço:   
 	✈︎Endereço:    
 	✈︎Número:   
 	✈︎CEP:    
 	✈︎Cidade:     
 	✈︎Sigla do Estado:    
 	✈︎Telefone:   
 	✈︎E-mail:   
 	✈︎Nome do Banco:   
 	✈︎Número da Agência:   
 	✈︎Número da Conta com Dígito:   
 	✈︎Tipo de Conta:   
✈︎Bancos recomendados: Banco do Brasil; Banrisul; Bradesco; HSBC; Itaú; Santander. O prazo para o estorno do valor varia de acordo com a forma de pagamento utilizada na compra. Cada método de pagamento possui um tempo de processamento diferente, o que pode influenciar no tempo necessário para que o valor seja devolvido à sua conta.

 	-Dinheiro ou débito: A Gol tem até 7 dias corridos para reembolsar.
 	-Cartão de crédito: Em até 7 dias corridos a Gol reembolsa à administradora do cartão, que a depender da data de fechamento, pode levar de 30 até 60 dias para realizar o crédito do valor na fatura.
 	-Crédito Gol: Quando solicitado o reembolso, a Gol tem até 7 dias corridos para realizar o reembolso em conta.`
    ],

    regra_tarifa: [
`Tarifa Promo:
✈︎Bagagem despachada: Na PROMO não tem direito a bagagem gratuita despachada;
✈︎Marcação de assento: Custo adicional, exceto durante o check-in, onde é gratuita (de 48 horas a 1 hora antes do voo).
✈︎Remarcação (Mudança de data): Você paga 100% do valor da passagem para remarcar, pagando o valor total da nova tarifa escolhida.
✈︎Cancelamento: Em caso de cancelamento, o valor da passagem não será reembolsado.
✈︎Reembolso: Esta tarifa não permite reembolso, exceto para as taxas de embarque.
✈︎Antecipação de voo: Esta tarifa não permite antecipação.
✈︎No Show (Não comparecimento): Se você não comparecer ao embarque, será cobrado o valor total da passagem, que corresponde a 100% do seu preço original. Caso opte por uma nova tarifa, você pagará o valor total dessa tarifa.
`
,
`Tarifa Light:
✈︎Bagagem despachada: Na LIGHT não tem direito a bagagem gratuita despachada;
✈︎Marcação de assento: Custo adicional, exceto durante o check-in, onde é gratuita (de 48 horas a 1 hora antes do voo).
✈︎Remarcação (Mudança de data): Para postergar a data do voo, você pagará o valor de R$ 400,00 ou 100% do preço original da passagem, prevalecendo o menor entre os dois, se a nova passagem tiver um valor superior, será necessário cobrir a diferença de preço.
✈︎Antecipação de voo: Você pode antecipar seu voo pagando uma taxa de R$ 100,00. Essa opção está disponível até 6 horas antes do horário do seu voo original.
✈︎Cancelamento: Para cancelar a passagem, será cobrado o valor de R$ 400,00 ou 100% do preço da passagem, prevalecendo o menor entre os dois.
✈︎Reembolso: Esta tarifa não permite reembolso, exceto pelas taxas de embarque.
✈︎No Show (Não comparecimento): Em caso de não comparecimento ao voo, será cobrado R$ 500,00 ou 100% do valor da passagem, prevalecendo o menor entre os dois, além da diferença de preço caso haja disponibilidade de outra passagem similar.

`
,
`Tarifa Plus:
✈︎Bagagem despachada: Na PLUS você tem direito a primeira bagagem gratuita despachada;
✈︎Marcação de assento: Você tem direito à marcação de assento gratuita, permitindo que escolha com antecedência onde deseja sentar-se durante o voo, sem custos adicionais.
✈︎Remarcação (Mudança de data): Para postergar, você pagará R$ 370,00 ou 100% do valor da passagem, o que for mais barato. Se a nova passagem for mais cara, também será necessário pagar a diferença de preço.
✈︎Antecipação de voo: Você pode antecipar seu voo de forma gratuita. Essa opção está disponível até 6 horas antes do horário do seu voo original.
✈︎Cancelamento: Para cancelar sua passagem, será cobrada uma taxa de R$ 370,00 ou 100% do valor da passagem, prevalecendo o menor valor entre os dois.
✈︎Reembolso: Após o cancelamento, você receberá de volta 40% do valor restante da passagem.
✈︎No Show (Não comparecimento): Se você não comparecer ao voo, será cobrado R$ 470,00 ou 100% do valor da passagem, prevalecendo o menor valor entre os dois. Caso haja disponibilidade de outra passagem similar, também será necessário cobrir a diferença de preço.
`
,
 `Tarifa Max: 
 ✈︎Bagagem despachada: Na Max você tem direito a primeira e a segunda bagagem gratuita despachada.
✈︎Marcação de assento: Você tem direito à marcação de assento gratuita, permitindo que escolha com antecedência onde deseja sentar-se durante o voo, sem custos adicionais.
✈︎Assento GOL + Conforto: Você tem direito à marcação de assento Gol + Conforto, localizados nas fileiras de 1 a 5 em voos domésticos e nas saídas de emergência em voos nacionais e internacionais. Além de mais espaço, você terá prioridade no check-in com despacho de bagagem, embarque antecipado e compartimento de bagagem de mão exclusivo. 
✈︎Remarcação (Mudança de data): Você tem a flexibilidade de remarcar sem custos adicionais de multa, disponível gratuitamente para qualquer horário no mesmo dia do voo original. No entanto, se a nova passagem tiver um valor superior, será necessário pagar a diferença de preço entre os bilhetes.
`
    ],
    
    medif_fremec: [
    `O passageiro precisa encaminhar ao seu médico pessoal o formulário de informação médica (MEDIF) para que ele possa preencher e assinar, sendo necessário enviar para à GOL entre 15 dias e 72 horas antes do embarque. Após análise, nossa equipe emitirá um parecer sobre a aptidão do passageiro para viajar, onde esse documento que comprovará a condição especial da pessoa. 
✈︎Preenchimento do MEDIF:
O formulário MEDIF deve ser assinado pelo médico pessoal do passageiro (apenas profissionais médicos com CRM válido são aceitos; assinaturas de psicólogos, fisioterapeutas e outros profissionais não serão aceitas).
Todas as seções devem ser completamente preenchidas para melhor análise.
Anexos:
    ✈︎*Anexo A:* Preenchido pelo passageiro ou seu responsável legal;
    ✈︎Anexo B (Partes 1 e 2): Preenchido pelo médico do passageiro com necessidades especiais.
Todas as perguntas devem ser respondidas corretamente e com letra legível. Deve ser marcado (X) nas opções "Sim" ou "Não". Após o preenchimento, todas as vias do formulário devem ser assinadas e carimbadas pelo médico, o documento não pode conter danos.

Importante: Os formulários devem estar completamente preenchidos e com informações atualizadas. Nenhum campo deve ficar em branco. Envie os documentos em anexo no formato JPEG ou PDF; imagens no corpo da mensagem não serão avaliadas.
Documentos assinados digitalmente pelo responsável médico do passageiro serão aceitos, desde que validados através da plataforma https://validar.iti.gov.br/. A validação é gratuita e essencial para o aceite da documentação.

✈︎Viagem com acompanhante: Se necessário, a GOL oferece ao acompanhante um desconto de 80% na passagem aérea. O acompanhante deve ser maior de 18 anos e capaz de oferecer assistência ao passageiro com necessidade especial durante todo o voo. O desconto será aplicado somente após o preenchimento e aprovação dos formulários MEDIF.
`
,
        
`O Cartão FREMEC é um documento médico da IATA desenvolvido para simplificar viagens de clientes regulares com necessidades especiais de caráter permanente, não grave e estável.
O cadastro FREMEC é indicado para Clientes com:
    ✈︎Idade superior a 2 (dois) anos;
    ✈︎Deficiência Intelectual;
    ✈︎Deficiência Auditiva;
    ✈︎Deficiência Visual.
    ✈︎Pessoas com mobilidade reduzida, em razão de deficiência permanente e estável;
    ✈︎Documentação FREMEC: Para análise da equipe médica da GOL visando garantir a segurança do passageiro, é necessário o envio do formulário FREMEC preenchido pelo médico assistente. 
Verifique a seguir as orientações para cada condição:
✈Deficiência visual, intelectual, mental e/ou psicossocial: Quando o formulário FREMEC for preenchido por médico não especializado, é necessário apresentar adicionalmente um relatório, declaração, atestado ou parecer médico elaborado por um médico especialista na área correspondente (médico com RQE registrado no CRM local). Se o formulário FREMEC for preenchido por médico especialista (com RQE na respectiva área), não é necessário apresentar relatório adicional. A GOL reserva-se o direito de solicitar documentação especializada adicional caso o FREMEC preenchido por médico especialista necessite de informações complementares (por exemplo, se não fornece informações sobre a acuidade visual de uma pessoa com deficiência visual).
✈︎Deficiência auditiva: A apresentação do formulário FREMEC é obrigatória (por médico especializado ou não), juntamente com a audiometria tonal (exame fundamental e obrigatório para determinar a existência de deficiência auditiva);
✈︎Deficiência física: O formulário FREMEC deve ser preenchido por médico familiarizado com a patologia descrita no documento. Um relatório adicional não é obrigatório, desde que o formulário FREMEC não deixe dúvidas e esteja claro e completo. Contudo, a GOL se reserva o direito de solicitar documentação adicional caso precise de informações complementares.

Retorno sobre a solicitação do cartão: Em até 48 horas sua solicitação será analisada pela equipe médica da GOL e você receberá uma resposta. Em caso de aprovação, você receberá por e-mail um documento com seu número FREMEC e poderá utilizá-lo para reservar sua passagem.
No momento do embarque, apresente apenas seu documento com foto. Não é necessário apresentar atestado médico ou autorização.
Lembre-se de que, se não for elegível para o FREMEC, seu embarque não será negado. Nesse caso, proceda enviando o formulário MEDIF dentro do prazo para análise.
✈︎ FREMEC solicitação de reserva para acompanhante:  Para solicitar a reserva de acompanhante, o Formulário de Viagem FREMEC deverá ser preenchido a cada viagem. 
✈︎ FREMEC de outras companhias aéreas: Quando o passageiro já possui o cadastro FREMEC com outra companhia aérea, não é necessário que ele faça nova solicitação. Entretanto, é necessário enviar um documento que comprove a emissão ou aprovação de cadastro, além do formulário de solicitação de viagem, com no mínimo 72h de antecedência.
`

    ],
    
    objeto_esquecido: [
`O prazo para tratativas das buscas é de 7 dias corridos. Entraremos em contato caso o objeto seja encontrado. Caso não seja localizado, enviaremos um e-mail informando sobre a situação.`
    ,
`(Nome do cliente), para que possamos dar continuidade à sua solicitação e garantir que tudo seja feito da melhor forma possível, preciso coletar algumas informações:
 ✈︎Localizador: 
 ✈︎Em que trecho perdeu?
 ✈︎Trecho de ida:
 ✈︎Trecho de Conexão:
 ✈︎Trecho de destino:
 ✈︎Cor:
 ✈︎Modelo/Marca:
 ✈︎Tamanho:
 ✈︎Nome do Proprietário:
 ✈︎Número do Voo:
 ✈︎Data do Voo:
 ✈︎Descreva com detalhes ou características o objeto esquecido:`
        
    ],
    
    bagagem_mao: [
        `Bagagem de mão todos os passageiros têm direito a levar, sem custo adicional, uma bagagem de mão e um item pessoal. O item pessoal pode ser uma bolsa, um notebook, um tablet ou uma sacola com produtos comprados no free shop.
Detalhes da bagagem de mão:
 	Peso permitido: até 10 kg;
 	Dimensões permitidas: 55 cm de altura, 25 cm de largura e 35 cm de comprimento.
Essas medidas garantem que sua bagagem de mão se encaixe perfeitamente nos compartimentos da aeronave, proporcionando uma viagem mais confortável para todos
`
,
 `Você pode comprar a opção de bagagem despachada tanto no momento da compra da passagem quanto posteriormente. É importante seguir as especificações de tamanho para o despacho. Sua mala deve ter, no máximo, 50 cm de largura, 80 cm de altura e 28 cm de profundidade, com um peso de até 23 kg. Se adquirir a bagagem até 48hrs antes do voo (antes da janela de check-in) terá desconto na franquia.
Se a bagagem ultrapassar 23 kg, haverá cobrança de taxas por excesso de peso. Em voos nacionais, a taxa é de R$ 170 para bagagens com até 32 kg e R$ 350 para aquelas entre 32 kg e 45 kg. Em voos internacionais, a cobrança é de R$ 400 para América do Sul e R$ 500 para América Central, EUA e outros destinos para bagagens de até 32 kg.
Vale destacar que o peso máximo permitido por bagagem é de 45 kg em voos domésticos e 32 kg em voos internacionais, sendo esse o limite aceito.
 Cada bagagem despachada deve corresponder a um único volume de até 23 kg. Se esse peso for dividido em dois ou mais volumes, cada volume extra será cobrado como bagagem adicional.
   ` 
,
        
`A bagagem diferenciada compreende itens frágeis e com dimensão diferenciada, como equipamentos esportivos, instrumentos musicais, televisores, monitores e semelhantes. Nestes casos, cobra-se uma taxa específica para cada tipo de objeto pelo seu despacho.
✈︎Como classificar como bagagem diferenciada:
 	-A soma dos lados A+B+C não pode ultrapassar 292 cm.
 	-A bagagem pode ter até 292 cm, levando em consideração a soma dos lados.
✈︎Valores da bagagem diferenciada:
 	-Voos domésticos: R$ 180,00;
 	-Voos dentro da América do Sul: R$ 352,00;
 	-Voos para os EUA e Punta Cana (PUJ): R$ 478,00.
Os itens que são considerados como bagagem diferenciada devem pesar até 23 kg. Se excederem esse peso, será aplicada uma taxa por quilo excedente: R$ 35,00 por quilo para voos nacionais e R$ 50,00 por quilo para voos internacionais. No caso de viagens dentro do Brasil, o limite máximo permitido é de 45 kg, enquanto para viagens internacionais é de 32 kg. Caso o cliente tenha um volume que exceda essas condições, o despacho pode ser realizado pela GOLLOG, sendo necessário à validação do objeto transportado. 
`
    ] ,

    alteracao_voluntaria_voo_nacional: [
`  (Scripts para categoria Smiles e Prata)

Para voos nacionais GOL emitidos pela Smiles, será cobrado o valor de R$ 300,00 por trecho e por passageiro, além da diferença de tarifa caso haja. A remarcação poderá ser realizada 24 horas após a emissão do voo, sendo permitida apenas 1 remarcação paga por localizador.

Não será possível realizar a remarcação nos seguintes casos:

Bebê incluso na reserva;
Bilhetes multi-aeroportos;
Bilhete Smiles pago integralmente com cartão de crédito;
Check-in já realizado;
Emissão realizada com menos de 24h de antecedência;
No-Show (não comparecimento ao voo);
Trecho já utilizado;
Tarifas Viaje Fácil e Reserva 72h.
Observação: As tarifas podem variar e estão sujeitas a alterações a qualquer momento.

Para efetuar sua remarcação, por favor, entre em contato com a nossa Central Smiles (Atendimento Voz):
☎️ 0300 115 7001
🕓 Atendimento: 06h00 às 00h00, todos os dias. Custo de ligação local + impostos.

    `        
    ] 
    ,
    alteracao_voluntaria_Voo_internacional: [ 

        ` (Scripts para categoria Smiles e Prata)
[Nome do cliente], agradecemos pela paciência e pedimos desculpas pela demora! Para realizar sua remarcação, será cobrada uma taxa de R$ 750,00 por trecho e passageiro, além de eventuais diferenças tarifárias. Caso o valor do novo bilhete seja inferior, a transação anterior será cancelada e um novo pagamento deverá ser efetuado.

Importante: Este procedimento é válido exclusivamente para voos totalmente operados pela GOL.

Para dar continuidade à sua remarcação, por favor, entre em contato com a nossa Central Smiles (Atendimento Voz):

☎️ 0300 115 7001
🕓 Atendimento: 06h00 às 00h00, todos os dias. Custo de ligação local + impostos.  `

        
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
        acordo_de_espera: '⚠ Em hipótese alguma você pode ficar mais de 02 minutos sem enviar mensagem a ele. Utilize o script abaixo para renovar o acordo de espera: ⚠',

        aviso_falta_de_interacao: '⚠ Caso perceba que o Cliente não responde, chame-o por 3 vezes (dando um intervalo de 02 minuto a cada chamada). Se ele não responder, encerre o contato. Sugestões de Script abaixo: ⚠' ,
        
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

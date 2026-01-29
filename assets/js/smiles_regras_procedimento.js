
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
    ,
    dog_nacional: [

        `O serviço Dog&Cat Cabine (Nacional) permite que cachorros ou gatos de até 12 kg (incluindo a caixa de transporte) viajem junto com seus donos. Para garantir uma viagem tranquila, é importante seguir algumas diretrizes específicas: 
        
        ✈︎Voos nacionais: Mínimo de 3 horas de antecedência ao voo para compra do serviço ✈︎O animal acompanhará seu dono em todos os voos até o destino final. 
        ✈︎Durante o voo, o animal deve ficar na caixa de transporte, acomodada abaixo do assento à frente do dono, durante toda a viagem, por questão de segurança ao seu pet. 
        ✈︎Passageiro é responsável em providenciar todos os documentos necessários. 
        ✈︎Dimensões da caixa de transporte: rígida (fibra plástica, plástico resistente): até 22 cm de altura, 32 cm de largura e 43 cm de profundidade. Flexível (tecidos impermeáveis): até 24 cm de altura, 32 cm de largura e 43 cm de profundidade. Valores dos serviços: 
        ✈︎Voos Nacionais: -Fora da janela de check-in (+48h do voo): R$ 200,00. — Dentro da janela de check-in (-48h do voo): R$ 250,00. 
        ✈︎Voos Nacionais: -Fora da janela de check-in (+48h do voo): XXXX.milhas. — Dentro da janela de check-in (-48h do voo): XXXX.milhas. 
        ✈︎Documentos necessários para voos nacionais: Atestado Sanitário: Deve constar que o animal está em boas condições de saúde e válido por 10 dias após a data de emissão. Carteira de Vacinação: Deve incluir a vacina antirrábica com o nome do laboratório, tipo de vacina e número da ampola utilizada. A vacina deve ter sido aplicada há mais de 30 dias, exceto em caso de reforço, onde não é necessário esperar 30 dias para o voo. Passaporte para Trânsito de Cães e Gatos (opcional): O proprietário deve solicitar ao veterinário que registre as informações sanitárias no passaporte até 10 dias antes da viagem e depois procurar a Unidade do Vigiagro para a legalização. 
        
        Se tiver alguma dúvida ou precisar de mais informações, estou aqui para ajudar!`
    ]
    ,
    dog_internacional: [

        `O serviço Dog&Cat Cabine (Internacional) permite que cachorros ou gatos de até 12 kg (incluindo a caixa de transporte) viajem junto com seus donos. Para garantir uma viagem tranquila, é importante seguir algumas diretrizes específicas:
        
        ✈︎Voos internacionais: Mínimo de 24 horas de antecedência ao voo para compra do serviço
        ✈︎O animal acompanhará seu dono em todos os voos até o destino final.
        ✈︎Durante o voo, o animal deve ficar na caixa de transporte, acomodada abaixo do assento à frente do dono, durante toda a viagem, por questão de segurança ao seu pet.
        ✈︎Passageiro é responsável em providenciar todos os documentos necessários.
        ✈︎Dimensões da caixa de transporte: Rígida (fibra plástica, plástico resistente): até 22 cm de altura, 32 cm de largura e 43 cm de profundidade. Flexível (tecidos impermeáveis): até 24 cm de altura, 32 cm de largura e 43 cm de profundidade. Valores dos serviços:
        ✈︎Voos Internacionais: -Fora da janela de check-in (+48h do voo): R$ 800,00. — Dentro da janela de check-in (-48h do voo): R$ 850,00.
        ✈︎Voos Internacionais: -Fora da janela de check-in (+48h do voo): XXXX.milhas. — Dentro da janela de check-in (-48h do voo): XXXX.milhas.
        ✈︎Documentos necessários para voos internacionais: -Atestado Sanitário: O atestado médico veterinário deve constar que o animal está em boas condições de saúde e deve ser emitido até 10 dias antes da data de embarque. -Carteira de Vacinação: Deve incluir a vacina antirrábica, obrigatória para animais a partir do 3º mês de idade. A vacina deve ter sido aplicada há mais de 30 dias, exceto em caso de reforço, onde não é necessário esperar 30 dias para o voo. -Certificado Veterinário Internacional (CVI ou CZI): Certificado emitido para voo internacional, válido por 60 dias a partir da emissão. -Passaporte para Trânsito de Cães e Gatos (opcional): O tutor deve solicitar ao veterinário que registre as informações sanitárias no passaporte até 10 dias antes da viagem e depois procurar a Unidade do Vigiagro para a legalização. Válido por 60 dias a partir da legalização pelo Vigiagro, desde que a vacinação antirrábica esteja válida. -Exclusivo para voos com destino a Miami (MIA): Autorização do CDC (Centro de Controle e Prevenção de Doenças), certificado emitido exclusivamente pelo CDC para entrada de cães nos EUA através de Miami, com validade determinada pelo CDC. 
        
        Se tiver alguma dúvida ou precisar de mais informações, estou aqui para ajudar!`
    ]
    ,
    bilhete_cortesia: [

        `O Participante da categoria Diamante, que atingir 26.000 Milhas Qualificáveis ou 26 Trechos Qualificáveis, terá direito a 1 (uma) passagem aérea de ida e/ou volta para um acompanhante e cota com validade de 12 meses, a partir da data em que foi concedido o benefício.

        ✈︎Emissão: deve ser feita com no mínimo 7 dias de antecedência do embarque.
        ✈︎Resgate: exclusivo pelo site da GOL (voegol.com.br).
        ✈︎Válido para voos GOL no Brasil (exceto Fernando de Noronha) e internacionais (exceto EUA).
        ✈︎Válido para voos operados pela GOL.
        ✈︎Não válido para voos com Milhas Smiles, operados por parceiras, ou voos internacionais em feriados nacionais no Brasil. (dois dias úteis antes e um após).
        ✈︎Não aplicável para múltiplos trechos ou tarifa Premium Economy.
        ✈︎Não é permitido Stopover.
        ✈︎Não é permitido pagamento com Smiles&Money
        ✈︎Se o Cliente acompanhante for um membro Smiles, o voo em cortesia não contará para acúmulo de milhas qualificáveis ou trechos qualificáveis para upgrade de categoria.
        ✈︎Para o Cliente Diamante, o acúmulo de milhas qualificáveis ou trechos para upgrade acontecerão normalmente, conforme as regras.
        ✈︎A cota é considerada utilizada no momento da emissão, mesmo que o passageiro não viaje.`
        
        ,

        `Para realizar a emissão do bilhete cortesia, basta seguir os seguintes passos:
        
        ✈︎Acesse: www.voegol.com.br 
        ✈︎Clique em Login e efetue o login 
        ✈︎Confirme se o login foi realizado, aparecerá o nome do cliente no canto superior direito da tela. 
        ✈︎Passe o Mouse em cima do nome, abrirá um menu. 
        ✈︎Clique na opção Resgate do Bilhete Cortesia. 
        ✈︎Clique em COMPRE AQUI. 
        ✈︎Insira os dados do voo desejado. 
        ✈︎Atenção, pois deverá colocar a busca para 2 passageiros e trecho deve ser puramente GOL. Somente na América do Sul. Já aparecerá o alerta de emissão da cortesia. 
        ✈︎Clique em BUSCAR VOOS. 
        ✈︎Escolhas os voos desejados e clique na opção para prosseguir e inserir os dados dos passageiros. 
        ✈︎Após preencher os dados dos passageiros, irá apresentar o resumo da compra. Basta preencher os dados de cobrança para concluir emissão.
        
        Caso não seja possível realizar a emissão seguindo os passos citados, peço que me envie uma captura de tela com a mensagem do erro, contendo data e horário, por gentileza.`

    ]
    ,
    tarifa_especial: [
        `Com relação à Tarifa Especial Diamante:
        
        ✈︎Para participantes da categoria Diamante, que acumularem 32.000 Milhas Qualificáveis ou 32 Trechos Qualificáveis.
        ✈︎A quantidade de cotas anuais será mantida, permitindo resgatar até 15 (quinze) trechos para voar dentro do Brasil com a GOL, exceto para Fernando de Noronha, pagando até 35.000 (trinta e cinco mil) Milhas Smiles por trecho.
        ✈︎As cotas serão concedidas quando o Participante acumular a quantidade de Milhas Qualificáveis ou Trechos Qualificáveis exigidos e terão validade de 12 (doze) meses a partir da data da concessão.
        ✈︎Antecedência para resgate do voo: será necessário realizar o resgate com, no mínimo, 7 (sete) dias de antecedência em relação à data do voo pretendido.`
        
        ,

         `Hoje a Smiles permite que o titular cadastre até 25 pessoas na lista dos passageiros favoritos. Porém, o cliente da categoria Diamante, poderá escolher até 5 passageiros, da lista. Para emitir na Tarifa especial Diamante, sem o titular estar na mesma reserva.  
  
         Como você poderá cadastrar:  

         ✈︎O titular deve realizar esse cadastro em "Passageiros Favoritos", logado em sua conta Smiles. Ao final do cadastro da pessoa, é necessário habilitar a flag (caixa de seleção) que diz "Marcar essa pessoa para emissões com tarifa especial sem o titular". Se realizado corretamente, o beneficiário ficará com a marcação de "Tarifa Especial" no cadastro de "Passageiro Favorito" 
         ✈︎Após cadastrar cada beneficiário corretamente, o titular deverá aguardar 30 dias antes de realizar a emissão para o beneficiário em questão sem a obrigatoriedade de estar junto no localizador. Agora é obrigatório realizar o resgate com mínimo de 7 dias de antecedência da data do voo. 
         ✈︎Uma vez cadastrado e habilitado como beneficiário, ele só poderá ser alterado após 18 meses.`
        
    ]
    ,
    remarcacao_gratuita: [
        `Segue as regras para remarcação gratuita:
        
        ✈︎O benefício Remarcação Gratuita consiste na concessão ao Participante, de cotas para remarcação, de forma gratuita, de trechos em voos operados pela GOL em todo território nacional, resgatados por intermédio do Programa Smiles (utilizando tão somente a modalidade 100% Milhas Smiles ou, ainda, a modalidade Smiles&Money), e ainda, pelos canais oficiais de vendas da GOL, desde que o participante possua o localizador, ficando, portanto, isento da cobrança da taxa de remarcação de voo. As diferenças tarifárias, se existentes, serão cobradas do participante, não estando incluídas neste benefício.
        ✈︎O pedido de Remarcação Gratuita do voo apenas poderá ser realizado em até 3 horas de antecedência do horário de embarque.
        ✈︎Obrigatoriamente, havendo a remarcação de um trecho, isso se estenderá a todos os passageiros que constam no localizador. Respeitadas essas regras, a remarcação de trechos no localizador poderá se dar de forma integral ou não (não necessariamente para todos os trechos). Caso o Participante não tenha cotas suficientes para a remarcação do localizador na forma pretendida e permitida, poderá integralizar o pagamento utilizando moeda corrente nacional.
        ✈︎Além disso, não será permitida a troca de trecho ou passageiro por localizador. Somente poderá ser alterada a data e/ou horário do voo original operado pela GOL por trecho.                              
        ✈︎A utilização da cota de Remarcação Gratuita do voo apenas poderá ocorrer dentro da validade do bilhete aéreo, a saber, no período de 12 (doze) meses, a contar da data de sua emissão.
        ✈︎Em se tratando de passagens aéreas adquiridas diretamente pelos canais oficiais de vendas da GOL, as cotas de Remarcação Gratuita apenas poderão ser utilizadas para as tarifas CLASSIC e LIGHT. Assim, as tarifas FLEX/BASIC e Premium Economy não permitirão a sua utilização.
        ✈︎Voos “stopover”, ou seja, aqueles que permitem ao Participante a parada em uma determinada cidade intermediária durante uma escala ou conexão, não permitirão o uso de cotas de Remarcação Gratuita.`

    ]
    ,
    cancelamento_gratuito: [
        `Regras do Cancelamento Gratuito na GOL/SMILES:
  
        ✈︎O benefício Cancelamento Gratuito na GOL consiste na concessão ao Participante de cotas de cancelamento gratuito de trechos em voos operados pela GOL em todo território nacional, resgatados por intermédio do Programa Smiles (utilizando tão somente a modalidade 100% Milhas Smiles ou, ainda, a modalidade Smiles & Money), e ainda, adquiridos pelos canais oficiais de vendas da GOL, desde que o Titular esteja no localizador, ficando, portanto, isento da cobrança da taxa de cancelamento.
        ✈︎O pedido de Cancelamento Gratuito na GOL apenas poderá ser realizado com até 3 (três) horas de antecedência do horário do voo.
        ✈︎Para utilização da cota de Cancelamento Gratuito na GOL, o trecho cancelado deve ser integral. Ou seja, o pedido de cancelamento não pode ser apenas do trecho de ida ou volta, devendo o cancelamento ser do trecho em sua totalidade.
        ✈︎Como a taxa de cancelamento é cobrada por trecho e passageiro do localizador, cada cota de Cancelamento Gratuito na GOL concedida, dará direito à isenção de uma taxa de cancelamento por trecho e passageiro. Para um mesmo código de reserva do passageiro será concedida apenas 1 (uma) cota de cancelamento.
        ✈︎Caso o Participante não tenha cotas suficientes para o cancelamento do localizador na forma pretendida e permitida, poderá integralizar o pagamento utilizando moeda corrente nacional.
        ✈︎Não será permitido utilizar o benefício para a Tarifa Especial Ouro e/ou Tarifa Especial Diamante, ainda que o Participante conste do localizador.
        ✈︎Em se tratando de passagens aéreas adquiridas diretamente pelos canais oficiais de vendas da GOL, nenhuma das 4 (quatro) tarifas oferecidas pela GOL – CLASSIC, LIGHT, FLEX E BASIC – permitirão a utilização das cotas de Cancelamento Gratuito na GOL.`
    ]
    ,
    cancelamento_voluntario: [
        `Para o cancelamento é cobrada a taxa de R$:XXX, por trecho e passageiro. O reembolso das milhas é estornado na conta dentro de 72h, com validade original. O valor pago em dinheiro, é encaminhado dentro de 7 dias para o cartão e o mesmo tem o prazo de 30 a 60 dias, dependendo do fechamento da sua fatura para estornar o valor. 
        Além disso, é cobrada a taxa de conveniência de R$ 40,00 quando o cancelamento é realizado através da central, pois o procedimento disponibilizado via site Smiles.`

    ]
    ,
    antecipacao_postergacao: [
        `A antecipação do horário do voo, deve ser solicitada no mesmo dia do voo original. 
        O passageiro poderá antecipar para qualquer horário que antecede o voo original. Na categoria diamante, o procedimento é realizado sem custo, sendo liberada 1 antecipação ou postergação por bilhete, mediante a disponibilidade de voos do momento.`
        
        ,
        
        `A solicitação de postergação do horário, deve ser feita na data do voo entre 6 horas e até 1h15 antes do horário do voo original. 
        O adiamento pode ser feito para um voo com embarque até 6 horas após o horário original, mediante disponibilidade de voo do momento. 
        Lembrando que na Categoria Diamante é liberada 1 antecipação ou postergação por bilhete.`

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


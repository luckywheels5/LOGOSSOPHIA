/**
 * LOGOSSOPHIA — Ágora de Estudos & Motor de Maiêutica Socrática
 * Layout fiel ao protótipo com Espaço de Upload no lugar da Bíblia
 */

// ==========================================
// 1. REPOSITÓRIO DE TEXTOS POR DISCIPLINA
// ==========================================
const KNOWLEDGE_BASE = {
  upload: {
    title: "Upload de Material",
    badge: "Espaço Próprio",
    subtitle: "Carregue ou cole seus documentos para exame dialético",
    isUploadMode: true,
    initialPrompt: "Espaço de upload ativo. Arraste seu arquivo ou cole um trecho no Scriptorium para iniciarmos a maiêutica socrática sobre o seu material."
  },
  
  // ==========================================
  // ENSINO SUPERIOR (GRADUAÇÕES)
  // ==========================================
  law: {
    title: "Colisão de Direitos Fundamentais (Caso Paradigma)",
    badge: "Hermenêutica Jurídica",
    subtitle: "Devido Processo Legal vs. Celeridade Processual",
    html: `
      <p><span class="drop-cap">A</span> garantia do devido processo legal e da ampla defesa (Art. 5º, LV) impõe a produção de todas as provas requeridas licitamente pela defesa antes do julgamento final.</p>
      <p><span class="num-marker">§1</span>Por outro lado, o postulado da razoável duração do processo e celeridade (Art. 5º, LXXVIII) veda a postergação protelatória de atos instrutórios que visam exclusivamente à prescrição da pretensão punitiva.</p>
      <p><span class="num-marker">§2</span>No caso em apreço, o indeferimento da ouvida da vigésima testemunha fora do país foi fundamentado na manifesta impertinência probatória. A defesa alega cerceamento absoluto de defesa, afirmando que ao réu assiste a soberania irrestrita na escolha de seus meios probatórios.</p>
      <p><span class="num-marker">§3</span>O tribunal deve decidir: cabe ao magistrado o juízo de admissibilidade da pertinência da prova ou tal indeferimento viola a cláusula pétrea do contraditório substancial?</p>
    `,
    initialPrompt: "Examine o §2 e o §3: o direito à prova é absoluto ou admite modulação pela regra da proporcionalidade? Aponte em que medida o juiz atua como mero espectador ou como gestor epistêmico do processo."
  },
  med: {
    title: "Fisiologia Renal — Regulação da Osmolaridade e ADH",
    badge: "Ciências Médicas",
    subtitle: "Homeostase Hidroeletrolítica e Feedback Negativo",
    html: `
      <p><span class="drop-cap">A</span> osmolaridade plasmática é monitorada continuamente por osmorreceptores hipotalâmicos de alta sensibilidade situados no órgão vasculoso da lâmina terminal (OVLT).</p>
      <p><span class="num-marker">§1</span>Quando a ingestão hídrica é insuficiente, a osmolaridade do líquido extracelular sobe acima do limiar fisiológico (285-295 mOsm/kg), estimulando os neurônios dos núcleos supraóptico e paraventricular a secretarem o hormônio antidiurético (ADH ou arginina-vasopressina) na circulação sistêmica.</p>
      <p><span class="num-marker">§2</span>No néfron, o ADH liga-se aos receptores basolaterais V2 das células principais do túbulo coletor, ativando a via de sinalização da adenilato ciclase e inserindo vesículas com aquaporinas-2 (AQP2) na membrana apical.</p>
      <p><span class="num-marker">§3</span>Isso torna o epitélio permeável à água, permitindo que o gradiente osmótico medular hiperconcentrado reabsorva a água por difusão passiva, excretando uma urina concentrada e restaurando o volume e a osmolaridade plasmática.</p>
    `,
    initialPrompt: "Observe o §3: Por que a inserção de aquaporinas seria fisiologicamente inútil na reabsorção de água se não existisse previamente o gradiente hiperosmótico no interstício medular criado pela Alça de Henle?"
  },
  cs: {
    title: "Algoritmos — Merge Sort e Notação Big-O",
    badge: "Ciência da Computação",
    subtitle: "Paradigma de Divisão e Conquista & Complexidade O(n log n)",
    html: `
      <p><span class="drop-cap">O</span> Merge Sort é um algoritmo canônico baseado no paradigma de divisão e conquista. Para ordenar um vetor A de tamanho n, ele divide recursivamente o vetor em dois subvetores de tamanho n/2 até atingir o caso base de tamanho unitário.</p>
      <p><span class="num-marker">§1</span>A etapa fundamental do algoritmo reside na função de intercalação (Merge), que combina dois subvetores ordenados em um único vetor ordenado examinando os menores elementos de cada partição em tempo linear O(n).</p>
      <p><span class="num-marker">§2</span>A árvore de recursão possui profundidade rigorosamente logarítmica (log₂ n), pois a cada nível o tamanho do problema é cortado pela metade. Em cada um desses níveis, o trabalho acumulado de intercalação de todos os subvetores é de exatamente O(n).</p>
      <p><span class="num-marker">§3</span>Diferente do Quick Sort clássico, cuja pior complexidade pode degradar para O(n²) caso o pivô seja mal selecionado, o Merge Sort garante complexidade estrita de O(n log n) em todos os casos (melhor, médio e pior), com o custo adicional de espaço auxiliar de memória O(n).</p>
    `,
    initialPrompt: "Examine o §2 e §3: Por que o produto entre a altura da árvore de recursão (log n) e o trabalho por nível (n) determina que o Merge Sort não pode ser superado assintoticamente por nenhum algoritmo baseado estritamente em comparações?"
  },
  philosophy: {
    title: "Platão — O Anel de Giges (A República, Livro II)",
    badge: "Filosofia Clássica",
    subtitle: "A Origem da Justiça e o Exame da Moralidade",
    html: `
      <p><span class="drop-cap">C</span>ontam que Giges era um pastor a serviço do rei que então governava a Lídia. Depois de uma grande tempestade e de um terremoto, o chão fendeu-se e abriu-se um abismo no local onde ele apascentava o rebanho.</p>
      <p><span class="num-marker">§2</span>Admirado com o espetáculo, desceu por essa fenda e viu ali um cavalo de bronze, oco, com aberturas pelas quais espreitou e avistou um cadáver que parecia maior que o de um homem. Este nada mais trazia sobre si senão um anel de ouro na mão, o qual Giges retirou antes de sair.</p>
      <p><span class="num-marker">§3</span>Ao participar da assembleia habitual dos pastores, Giges percebeu casualmente que, girando o engaste do anel para dentro da mão, tornava-se invisível a todos os que estavam ao redor, e estes falavam dele como se estivesse ausente. Girando-o para fora, tornava-se visível novamente.</p>
      <p><span class="num-marker">§4</span>Tendo descoberto essa faculdade, articulou para estar entre os mensageiros que iam até o rei; chegando lá, seduziu a rainha, conspirou com ela contra o rei, assassinou-o e apossou-se do trono.</p>
      <p><span class="num-marker">§5</span>Glauco conclui: Se existissem dois desses anéis, e déssemos um ao homem justo e outro ao injusto, nenhum permaneceria no caminho da justiça se pudesse praticar impunemente tudo o que quisesse.</p>
    `,
    initialPrompt: "Diante do argumento de Glauco no §5, você concorda que o homem só é justo pelo receio do julgamento alheio? Que pressuposto sobre a natureza do 'Bem' esse argumento assume como tácito?"
  },
  exact: {
    title: "Euclides — Elementos (Livro IX, Proposição 20)",
    badge: "Exatas & Demonstração",
    subtitle: "A Infinitude dos Números Primos por Redução ao Absurdo",
    html: `
      <p><span class="drop-cap">P</span>roposição: Os números primos são em maior quantidade do que qualquer quantidade pré-determinada de números primos.</p>
      <p><span class="num-marker">1</span>Sejam dados os números primos A, B, C. Digo que existem mais números primos que A, B, C.</p>
      <p><span class="num-marker">2</span>Tome o menor número medido por A, B, C (isto é, o produto N = A × B × C). Adicione uma unidade a esse número, obtendo P = (A × B × C) + 1.</p>
      <p><span class="num-marker">3</span>O número P ou é primo ou não é primo.</p>
      <p><span class="num-marker">4</span>Se P for primo, encontramos um primo maior que A, B e C.</p>
      <p><span class="num-marker">5</span>Se P não for primo, ele deve ser divisível por algum primo G. Se G fosse um dos primos da lista (A, B ou C), então G dividiria o produto (A × B × C) e também dividiria P. Consequentemente, G teria de dividir a diferença: P - (A × B × C) = 1, o que é absurdo.</p>
      <p><span class="num-marker">6</span>Logo, G é um número primo que não está na lista original.</p>
    `,
    initialPrompt: "Observe o passo 5: Por que a afirmação de que um número primo divide o número 1 é considerada um absurdo geométrico/aritmético na lógica euclidiana? O que isso força a aceitar no passo 6?"
  },
  admin: {
    title: "Teoria da Firma & Custos de Transação (Ronald Coase)",
    badge: "Economia & Gestão",
    subtitle: "Por que as Empresas Existem no Mercado?",
    html: `
      <p><span class="drop-cap">E</span>m seu seminal ensaio de 1937, Ronald Coase formulou a indagação fundacional da teoria microeconômica moderna: se o mecanismo de preços do livre mercado aloca os recursos de maneira otimizada, por que as firmas surgem e organizam a produção de forma hierárquica em seu interior?</p>
      <p><span class="num-marker">§1</span>Coase demonstrou que a utilização do sistema de preços acarreta custos intrínsecos de transação: custos de buscar informações e preços relevantes, custos de redigir e negociar contratos bilaterais para cada tarefa e custos de monitorar o cumprimento das obrigações.</p>
      <p><span class="num-marker">§2</span>A firma substitui esses inúmeros contratos de mercado por um único contrato de autoridade e emprego, onde o coordenador direciona a alocação de insumos e trabalho sem negociar a cada minuto.</p>
      <p><span class="num-marker">§3</span>O limite de crescimento da firma ocorre exatamente no ponto marginal em que o custo de organizar uma transação adicional internamente se iguala ao custo de transacioná-la no mercado livre.</p>
    `,
    initialPrompt: "Analise o §3: Se a digitalização e a internet reduzem drasticamente os custos de busca e transação no mercado livre, qual é o impacto previsto sobre o tamanho ideal e as fronteiras das empresas contemporâneas?"
  },
  history: {
    title: "Crítica Documental — Carta Quinhentista",
    badge: "Fonte Primária",
    subtitle: "Historiografia e Desmonte do Anacronismo",
    html: `
      <p><span class="drop-cap">E</span>m carta remetida em 1548 ao Conselho das Índias, o cronista régio relata o estranhamento ante os costumes das populações nativas e justifica a necessidade da tutela compulsória como instrumento de salvação espiritual e incorporação civilizacional.</p>
      <p><span class="num-marker">§1</span>O cronista argumenta que, desprovidos da fé na revelação e de noções contratuais romanas, os povos locais carecem da capacidade de autorregulação segundo o Direito das Gentes clássico.</p>
      <p><span class="num-marker">§2</span>Historiadores posteriores frequentemente rotulam este trecho sumariamente sob conceitos modernos de imperialismo econômico estrito, desconsiderando a mentalidade escatológica que regia a política do século XVI.</p>
    `,
    initialPrompt: "Ao confrontar o documento com as análises posteriores (§2), qual é o risco epistêmico de projetar categorias econômicas do século XIX sobre a mentalidade religiosa do século XVI? Como o historiador deve proceder?"
  },
  theology: {
    title: "Romanos 9:14–24 (Estudo Canônico)",
    badge: "Bíblia ACF",
    subtitle: "A Soberania da Graça e a Misericórdia Divina",
    html: `
      <p><span class="drop-cap">Q</span>ue diremos pois? há injustiça da parte de Deus? De maneira nenhuma.</p>
      <p><span class="num-marker">15</span>Pois diz a Moisés: Compadecer-me-ei de quem me compadecer, e terei misericórdia de quem eu tiver misericórdia.</p>
      <p><span class="num-marker">16</span>Assim, pois, isto não depende do que quer, nem do que corre, mas de Deus, que se compadece.</p>
      <p><span class="num-marker">17</span>Porque diz a Escritura a Faraó: Para isto mesmo te levantei; para em ti mostrar o meu poder, e para que o meu nome seja anunciado em toda a terra.</p>
      <p><span class="num-marker">18</span>Logo, pois, compadece-se de quem quer, e endurece a quem quer.</p>
      <p><span class="num-marker">19</span>Dir-me-ás pois: Por que se queixa ele ainda? Porquanto, quem tem resistido à sua vontade?</p>
      <p><span class="num-marker">20</span>Mas, ó homem, quem és tu, que a Deus replicas? Porventura a coisa formada dirá ao que a formou: Por que me fizeste assim?</p>
      <p><span class="num-marker">21</span>Ou não tem o oleiro poder sobre o barro, para da mesma massa fazer um vaso para honra e outro para desonra?</p>
    `,
    initialPrompt: "Observe o versículo 16: 'não depende do que quer, nem do que corre, mas de Deus que se compadece'. Como você entende a relação entre a vontade humana e a ação divina nessa sentença? Identifique o que o autor está excluindo como causa primária."
  },

  // ==========================================
  // EDUCAÇÃO BÁSICA (BNCC & ENEM)
  // ==========================================
  bncc_redacao: {
    title: "Redação Dissertativa-Argumentativa (Modelo ENEM)",
    badge: "BNCC — Redação",
    subtitle: "Construção de Tese, Repertório Sociocultural e Proposta de Intervenção",
    html: `
      <p><span class="drop-cap">A</span> redação do ENEM exige a defesa de um ponto de vista (tese) por meio de argumentos consistentes sustentados por repertório sociocultural produtivo e legitimado, finalizando com uma proposta de intervenção social detalhada.</p>
      <p><span class="num-marker">§1</span><strong>Tema Proposto:</strong> 'Os desafios para a preservação do patrimônio histórico e cultural na era da hiperconectividade digital'.</p>
      <p><span class="num-marker">§2</span><strong>Texto Motivador:</strong> 'Em um mundo onde o consumo de conteúdo é instantâneo e efêmero, construções coloniais, acervos de museus e arquivos históricos sofrem abandono material e indiferença social. A memória coletiva de uma nação corre o risco de ser substituída pela volatilidade dos feeds de redes sociais.'</p>
      <p><span class="num-marker">§3</span>O estudante deve apresentar dois argumentos causais (D1 e D2) e articular a intervenção com os 5 elementos obrigatórios: Agente, Ação, Meio/Modo, Efeito pretendido e Detalhamento de um dos termos.</p>
    `,
    initialPrompt: "Leia o Tema e o Texto Motivador: Qual é a sua tese central em uma única oração? Indique dois fatores causais distintos que explicam por que o abandono do patrimônio histórico persiste na sociedade brasileira."
  },
  bncc_portugues: {
    title: "Sintaxe & Ambiguidade Semântica (Língua Portuguesa)",
    badge: "BNCC — Linguagens",
    subtitle: "A Função Sintática e os Efeitos de Sentido do Enunciado",
    html: `
      <p><span class="drop-cap">N</span>a crônica jornalística contemporânea, o autor escreveu a seguinte manchete:</p>
      <p><span class="num-marker">§1</span><em>'O cientista observou o manifestante com o telescópio no alto do observatório.'</em></p>
      <p><span class="num-marker">§2</span>O leitor desatento pode interpretar a sentença sob duas leituras lógicas e sintáticas totalmente discrepantes: (A) o cientista usou o telescópio como instrumento para observar o manifestante que estava no solo, ou (B) o manifestante observado estava ele próprio portando o telescópio.</p>
      <p><span class="num-marker">§3</span>Essa ambiguidade decorre da mobilidade do adjunto adverbial de instrumento e da indeterminação da função de adjunto adnominal restritivo em relação ao núcleo do objeto direto.</p>
    `,
    initialPrompt: "Examine a frase do §1: Como você reescreveria a sentença para eliminar 100% da ambiguidade, garantindo sem margem de dúvida que o telescópio é o instrumento utilizado pelo cientista?"
  },
  bncc_matematica: {
    title: "Teorema de Pitágoras — Demonstração Geométrica por Áreas",
    badge: "BNCC — Matemática",
    subtitle: "A Relação a² = b² + c² sem Fórmulas Decoradas",
    html: `
      <p><span class="drop-cap">C</span>onsidere um quadrado grande de lado medindo (b + c). Sua área total é dada por (b + c)² = b² + 2bc + c².</p>
      <p><span class="num-marker">§1</span>Podemos subdividir esse mesmo quadrado dispondo quatro triângulos retângulos idênticos, cada um com catetos medindo b e c e hipotenusa medindo a, posicionados nos quatro cantos.</p>
      <p><span class="num-marker">§2</span>Ao posicionar esses quatro triângulos congruentes nas bordas, a região central restante forma perfeitamente um quadrado inclinado de lado a, cuja área é a².</p>
      <p><span class="num-marker">§3</span>Cada triângulo tem área (b × c) / 2. Os quatro juntos totalizam 4 × (bc / 2) = 2bc. Subtraindo a área dos quatro triângulos da área do quadrado original, temos: Área Central = (b² + 2bc + c²) - 2bc = b² + c². Mas a área central é exatamente o quadrado da hipotenusa (a²). Logo, a² = b² + c².</p>
    `,
    initialPrompt: "Acompanhe o raciocínio do §3: Por que essa demonstração por quebra-cabeça de áreas é epistemologicamente mais poderosa do que simplesmente memorizar 'hipotenusa ao quadrado igual à soma dos quadrados dos catetos'?"
  },
  bncc_biologia: {
    title: "Evolução — Seleção Natural Darwiniana vs. Lamarckismo",
    badge: "BNCC — Biologia",
    subtitle: "Mutação Aleatória, Variabilidade e Pressão Seletiva",
    html: `
      <p><span class="drop-cap">A</span> resistência bacteriana a antibióticos é um dos fenômenos biológicos mais urgentes da medicina moderna e ilustra os princípios da evolução biológica em tempo real.</p>
      <p><span class="num-marker">§1</span>Um erro comum entre estudantes é supor que as bactérias 'aprenderam a resistir' ou que 'o antibiótico induziu as bactérias a desenvolverem mutações defensivas para sobreviverem'.</p>
      <p><span class="num-marker">§2</span>Pelo paradigma neodarwinista estrito, mutações genéticas e recombinações ocorrem de forma prévia, espontânea e aleatória na população bacteriana, muito antes da introdução do medicamento.</p>
      <p><span class="num-marker">§3</span>O antibiótico não cria a resistência; ele atua unicamente como agente seletivo do meio ambiente, eliminando as bactérias sensíveis e preservando as poucas variantes que já possuíam genes de resistência, as quais proliferam sem concorrência.</p>
    `,
    initialPrompt: "Observe a distinção no §3: Como você explicaria a um colega a diferença entre o antibiótico ser a 'causa da mutação' versus ser o 'filtro de seleção natural'?"
  },
  bncc_fisica: {
    title: "Primeira Lei de Newton — O Princípio da Inércia de Galileu",
    badge: "BNCC — Física",
    subtitle: "Força Resultante Zero e Movimento Retilíneo Uniforme",
    html: `
      <p><span class="drop-cap">D</span>urante quase dois mil anos, a física aristotélica sustentou que um corpo precisava de uma força atuando continuamente sobre ele para se manter em movimento. Cessada a força motriz, o corpo invariavelmente pararia.</p>
      <p><span class="num-marker">§1</span>Galileu Galilei e posteriormente Isaac Newton demonstraram o erro dessa concepção sensorial. O atrito e a resistência do ar são forças externas contrárias que freiam os objetos no nosso dia a dia, criando uma ilusão perceptiva.</p>
      <p><span class="num-marker">§2</span>A Primeira Lei da Mecânica Clássica enuncia: Todo corpo persevera em seu estado de repouso ou de movimento retilíneo uniforme (MRU), a menos que seja compelido a mudar seu estado por forças resultantes nele impressas.</p>
      <p><span class="num-marker">§3</span>Portanto, para manter um corpo viajando no vácuo espacial com velocidade constante de 10.000 km/h, o combustível gasto e a força resultante necessária são rigorosamente iguais a zero.</p>
    `,
    initialPrompt: "Examine o §3: Se uma sonda espacial desliga seus motores no vácuo interestelar livre de atrito e gravidade, por que sua velocidade não diminui? Qual grandeza física (massa inercial) impede que seu estado seja alterado espontaneamente?"
  },
  bncc_quimica: {
    title: "Cinética Química — Teoria das Colisões & Energia de Ativação",
    badge: "BNCC — Química",
    subtitle: "Fatores que Modulam a Velocidade das Reações",
    html: `
      <p><span class="drop-cap">P</span>ara que uma transformação química ocorra, o simples contato entre as espécies reagentes não é suficiente. As moléculas devem sofrer choques efetivos (ou eficazes).</p>
      <p><span class="num-marker">§1</span>Um choque efetivo exige duas condições estritas simultâneas: orientação espacial geometricamente favorável no momento do impacto e energia cinética igual ou superior à Energia de Ativação (Ea) do sistema.</p>
      <p><span class="num-marker">§2</span>Ao elevar a temperatura de um sistema reacional, a energia cinética média das partículas aumenta, ampliando não apenas a frequência de colisões por segundo, mas exponencialmente a fração de moléculas capazes de transpor o complexo ativado.</p>
      <p><span class="num-marker">§3</span>Já a adição de um catalisador químico altera o mecanismo da reação, criando uma rota alternativa com menor energia de ativação, sem ser consumido no processo e sem alterar o rendimento termodinâmico final (ΔH).</p>
    `,
    initialPrompt: "Confronte o §2 e o §3: Por que tanto o aumento da temperatura quanto a adição de um catalisador aceleram a reação, mas atuam por mecanismos moleculares completamente diferentes?"
  },
  bncc_historia: {
    title: "Abolição da Escravidão no Brasil (1888) — Desmonte do Mito Benevolente",
    badge: "BNCC — História",
    subtitle: "Protagonismo Negro, Resistência Quilombola e Pressão Geopolítica",
    html: `
      <p><span class="drop-cap">D</span>urante décadas, manuais didáticos tradicionais propagaram a narrativa mitificadora de que a abolição da escravidão no Brasil em 13 de maio de 1888 foi uma 'concessão generosa e humanitária' da Princesa Isabel e da elite imperial.</p>
      <p><span class="num-marker">§1</span>A historiografia contemporânea demonstrou que a Lei Áurea foi o desfecho tardio de um processo de intensa luta popular: rebeliões nas fazendas, formação de quilombos urbanos (como o Quilombo do Leblon), redes de fuga articuladas por abolicionistas negros como Luís Gama, André Rebouças e José do Patrocínio.</p>
      <p><span class="num-marker">§2</span>Soma-se a isso a crise estrutural do café no Vale do Paraíba, a pressão geopolítica do Reino Unido contra o tráfico e a transição para o trabalho assalariado subsidiado pelo Estado no Oeste Paulista.</p>
      <p><span class="num-marker">§3</span>Entretanto, a abolição brasileira foi caracterizada pela ausência deliberada de reformas estruturais: sem distribuição de terras, sem indenização e sem acesso à educação formal, empurrando a população liberta para a marginalização econômica e territorial.</p>
    `,
    initialPrompt: "Analise o §1 e o §3: Ao desconstruir a visão de que a liberdade foi uma 'dádiva do trono', que lição a história crítica nos ensina sobre a conquista de direitos civis na formação social brasileira?"
  },
  bncc_geografia: {
    title: "Transição Demográfica Brasileira — Desafios da Pirâmide Etária",
    badge: "BNCC — Geografia",
    subtitle: "Queda da Fecundidade, Envelhecimento Populacional e Previdência",
    html: `
      <p><span class="drop-cap">N</span>as últimas cinco décadas, o Brasil vivenciou uma das mais aceleradas transições demográficas do planeta, transitando de um perfil com altas taxas de natalidade e mortalidade para um regime moderno de envelhecimento populacional.</p>
      <p><span class="num-marker">§1</span>A taxa de fecundidade no país despencou de mais de 6 filhos por mulher na década de 1960 para menos de 1,6 filho por mulher nos anos recentes, situando-se abaixo da taxa mínima de reposição populacional (2,1).</p>
      <p><span class="num-marker">§2</span>Os fatores catalisadores desse processo incluem a intensa urbanização pós-década de 1950, a entrada maciça da mulher no mercado de trabalho formal, a disseminação de métodos contraceptivos e o custo elevado de criação dos filhos nas metrópoles.</p>
      <p><span class="num-marker">§3</span>O país usufruiu do chamado 'bônus demográfico' (quando a População em Idade Ativa supera a de dependentes), mas caminha rapidamente para o estreitamento da base da pirâmide e alargamento do topo, impondo sérios desafios ao financiamento da previdência e à rede de saúde pública.</p>
    `,
    initialPrompt: "Observe o §3: Por que a janela do bônus demográfico é considerada irrecuperável se um país não investir massivamente em educação e produtividade antes que sua população envelheça?"
  }
};

// ==========================================
// 2. BANCO DE DADOS DE CONTAS & CONFIGURAÇÕES (SQLite Mirror)
// ==========================================
const ACCOUNTS_DATABASE = {
  "usr-erudito-01": {
    id: "usr-erudito-01",
    name: "Lucas Almeida",
    email: "lucas@logossophia.org",
    avatar: "🏛️",
    institution: "USP - Largo São Francisco",
    course: "Direito (6º Semestre)",
    goal: "Aprovação OAB e Carreira da Magistratura",
    defaultCycle: "superior",
    activeDiscipline: "law",
    pomoMin: 30,
    aiMode: "socratic_rigorous",
    apiKey: "",
    streakDays: 0,
    totalHours: 0,
    sessions: [],
    disciplines: ["law", "philosophy", "theology", "history"],
    flashcards: []
  },
  "usr-vestibulanda-02": {
    id: "usr-vestibulanda-02",
    name: "Beatriz Silveira",
    email: "beatriz@logossophia.org",
    avatar: "✍️",
    institution: "Colégio Santo Agostinho",
    course: "3º Ano do Ensino Médio",
    goal: "Nota 1000 na Redação do ENEM e Vaga em Medicina",
    defaultCycle: "bncc",
    activeDiscipline: "bncc_redacao",
    pomoMin: 25,
    aiMode: "socratic_gentle",
    apiKey: "",
    streakDays: 12,
    totalHours: 24,
    disciplines: ["bncc_redacao", "bncc_biologia", "bncc_matematica", "bncc_fisica", "bncc_quimica"],
    flashcards: [
      {
        id: "crd-03",
        discipline: "bncc_redacao",
        front: "Quais são os 5 elementos indispensáveis da proposta de intervenção social da Competência 5 do ENEM?",
        back: "GOMIF: 1. Agente (quem faz), 2. Ação (o que faz), 3. Meio/Modo (como faz), 4. Efeito (para que faz) e 5. Detalhamento de um dos quatro elementos anteriores.",
        status: "cristalizado"
      },
      {
        id: "crd-04",
        discipline: "bncc_biologia",
        front: "Por que a frase 'as bactérias criaram resistência para sobreviver ao antibiótico' está biologicamente equivocada?",
        back: "Porque assume Lamarckismo (adaptação voluntária). Na evolução darwiniana, mutações aleatórias preexistiam; o antibiótico apenas atuou como agente seletivo externo.",
        status: "cristalizado"
      }
    ]
  },
  "usr-medico-03": {
    id: "usr-medico-03",
    name: "Dr. André Valério",
    email: "andre@logossophia.org",
    avatar: "🩺",
    institution: "Faculdade de Medicina da UFRJ",
    course: "Medicina (Internato Clínico)",
    goal: "Residência Médica em Cirurgia e Terapia Intensiva",
    defaultCycle: "superior",
    activeDiscipline: "med",
    pomoMin: 45,
    aiMode: "socratic_rigorous",
    apiKey: "",
    streakDays: 28,
    totalHours: 56,
    disciplines: ["med", "cs", "exact"],
    flashcards: [
      {
        id: "crd-05",
        discipline: "med",
        front: "Como o hormônio antidiurético (ADH/vasopressina) altera a permeabilidade do túbulo coletor medular?",
        back: "Via receptor basolateral V2 acoplado à proteína Gs, ativação da PKA e migração exocítica de vesículas com Aquaporina-2 (AQP2) para a membrana apical.",
        status: "cristalizado"
      }
    ]
  }
};

const CIRCLE_CIRCUMFERENCE = 477.5; // 2 * pi * 76

const AppState = {
  currentUserId: 'usr-erudito-01',
  currentUser: null,
  currentCycle: 'superior',
  currentDiscipline: 'law',
  pomoSeconds: 30 * 60,
  pomoInitialSeconds: 30 * 60,
  pomoTimer: null,
  pomoIsRunning: false,
  flashcards: [],
  currentCardIndex: 0,
  selectedTextForAgora: "",
  uploadedText: "",
  uploadedFileName: ""
};

// ==========================================
// 3. ELEMENTOS DOM
// ==========================================
const DOM = {
  // Card de Usuário e Configurações de Conta
  sidebarUserCard: document.getElementById('sidebar-user-card'),
  userAvatar: document.getElementById('user-avatar'),
  userDisplayName: document.getElementById('user-display-name'),
  userDisplayInfo: document.getElementById('user-display-info'),
  settingUserSelect: document.getElementById('setting-user-select'),
  settingUserName: document.getElementById('setting-user-name'),
  settingUserEmail: document.getElementById('setting-user-email'),
  settingInstitution: document.getElementById('setting-institution'),
  settingCourse: document.getElementById('setting-course'),
  settingGoal: document.getElementById('setting-goal'),
  settingDefaultCycle: document.getElementById('setting-default-cycle'),
  btnCancelSettings: document.getElementById('btn-cancel-settings'),

  // Alternador de Ciclo (Superior vs BNCC)
  btnCycleSuperior: document.getElementById('btn-cycle-superior'),
  btnCycleBncc: document.getElementById('btn-cycle-bncc'),
  listCycleSuperior: document.getElementById('list-cycle-superior'),
  listCycleBncc: document.getElementById('list-cycle-bncc'),
  activeCycleBadge: document.getElementById('active-cycle-badge'),

  disciplineSelector: document.getElementById('discipline-selector'),
  docTitle: document.getElementById('doc-title'),
  docVersionBadge: document.getElementById('doc-version-badge'),
  readerContent: document.getElementById('reader-content'),
  selectionPopover: document.getElementById('selection-popover'),
  btnInterrogateSelection: document.getElementById('btn-interrogate-selection'),
  btnFlashcardSelection: document.getElementById('btn-flashcard-selection'),
  agoraStatusSubtitle: document.getElementById('agora-status-subtitle'),
  chatMessages: document.getElementById('chat-messages'),
  chatForm: document.getElementById('chat-form'),
  chatInput: document.getElementById('chat-input'),
  btnClearChat: document.getElementById('btn-clear-chat'),
  quickPromptBtns: document.querySelectorAll('.quick-prompt-btn'),
  
  // Pomodoro
  pomoDisplay: document.getElementById('pomo-display'),
  pomoToggle: document.getElementById('pomo-toggle'),
  pomoReset: document.getElementById('pomo-reset'),
  pomoCircleProgress: document.getElementById('pomo-circle-progress'),
  pomoStatusLabel: document.getElementById('pomo-status-label'),
  pomoModeBtns: document.querySelectorAll('.pomo-mode-btn'),

  // Flashcards & Modais
  btnOpenTabulae: document.getElementById('btn-open-tabulae'),
  modalTabulae: document.getElementById('modal-tabulae'),
  btnCloseTabulae: document.getElementById('btn-close-tabulae'),
  flashcardBadge: document.getElementById('flashcard-badge'),
  trackerCardCount: document.getElementById('tracker-card-count'),
  flashcardDeck: document.getElementById('flashcard-deck'),
  btnPrevCard: document.getElementById('btn-prev-card'),
  btnNextCard: document.getElementById('btn-next-card'),
  deckProgress: document.getElementById('deck-progress'),
  
  // Configurações, Login & Tema
  btnToggleTheme: document.getElementById('btn-toggle-theme'),
  themeToggleIcon: document.getElementById('theme-toggle-icon'),
  settingThemeSelect: document.getElementById('setting-theme-select'),
  btnSettings: document.getElementById('btn-settings'),
  modalSettings: document.getElementById('modal-settings'),
  btnCloseSettings: document.getElementById('btn-close-settings'),
  btnHeaderLogin: document.getElementById('btn-header-login'),
  modalAuth: document.getElementById('modal-auth'),
  btnCloseAuth: document.getElementById('btn-close-auth'),
  tabBtnProfiles: document.getElementById('tab-btn-profiles'),
  tabBtnCredentials: document.getElementById('tab-btn-credentials'),
  authPanelProfiles: document.getElementById('auth-panel-profiles'),
  authPanelCredentials: document.getElementById('auth-panel-credentials'),
  btnOpenSettingsFromAuth: document.getElementById('btn-open-settings-from-auth'),
  btnGoogleLogin: document.getElementById('btn-google-login'),
  formLogin: document.getElementById('form-login'),
  settingAiMode: document.getElementById('setting-ai-mode'),
  settingApiKey: document.getElementById('setting-api-key'),
  settingPomoMin: document.getElementById('setting-pomo-min'),
  apiKeyContainer: document.getElementById('api-key-container'),
  btnSaveSettings: document.getElementById('btn-save-settings'),
  btnResetUserData: document.getElementById('btn-reset-user-data'),
  btnViewDashboardTab: document.getElementById('btn-view-dashboard-tab'),

  // Espaço de Upload Dedicado
  uploadZoneContainer: document.getElementById('upload-zone-container'),
  readerWrapper: document.getElementById('reader-wrapper'),
  dropZone: document.getElementById('drop-zone'),
  studyFileInput: document.getElementById('study-file-input'),
  btnBrowseFile: document.getElementById('btn-browse-file'),
  pasteTextInput: document.getElementById('paste-text-input'),
  btnSubmitPastedText: document.getElementById('btn-submit-pasted-text'),
  btnChangeDoc: document.getElementById('btn-change-doc'),
  btnTriggerUpload: document.getElementById('btn-trigger-upload'),

  // Barra Lateral Esquerda (Sidebar Minimalista)
  sidebarBtnDashboard: document.getElementById('sidebar-btn-dashboard'),
  sidebarBtnAgora: document.getElementById('sidebar-btn-agora'),
  sidebarBtnTabulae: document.getElementById('sidebar-btn-tabulae'),
  sidebarBtnPomo: document.getElementById('sidebar-btn-pomo'),
  sidebarBtnSettings: document.getElementById('sidebar-btn-settings'),
  sidebarPomoStatus: document.getElementById('sidebar-pomo-status'),
  sidebarTabulaeCount: document.getElementById('sidebar-tabulae-count'),
  sidebarNavBtns: document.querySelectorAll('.sidebar-nav-btn'),

  // Views Principais
  viewDashboard: document.getElementById('view-dashboard'),
  viewAgora: document.getElementById('view-agora'),
  btnDashboardEnterAgora: document.getElementById('btn-dashboard-enter-agora'),
  btnBackToDashboard: document.getElementById('btn-back-to-dashboard'),
  agoraCycleTabs: document.querySelectorAll('.agora-cycle-tab'),
  agoraDiscCards: document.querySelectorAll('.agora-disc-card'),
  cardActionAgora: document.getElementById('card-action-agora'),
  cardActionTabulae: document.getElementById('card-action-tabulae'),
  cardActionPomo: document.getElementById('card-action-pomo'),

  studyTrackerCard: document.getElementById('study-tracker-card'),
  aiChatCard: document.getElementById('ai-chat-card')
};

// ==========================================
// 4. MOTOR DE MAIÊUTICA SOCRÁTICA (ÁGORA)
// ==========================================
class SocraticEngine {
  static STOP_WORDS = new Set([
    'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'da', 'do', 'das', 'dos',
    'em', 'no', 'na', 'nos', 'nas', 'por', 'pelo', 'pela', 'pelos', 'pelas', 'para',
    'pra', 'com', 'sem', 'sob', 'sobre', 'que', 'se', 'mas', 'ou', 'e', 'ao', 'aos',
    'este', 'esta', 'estes', 'estas', 'esse', 'essa', 'esses', 'essas', 'aquele', 'aquela',
    'isso', 'isto', 'aquilo', 'seu', 'sua', 'seus', 'suas', 'meu', 'minha', 'dele', 'dela',
    'como', 'quando', 'onde', 'quem', 'qual', 'quais', 'muito', 'mais', 'menos', 'também',
    'ja', 'já', 'só', 'mesmo', 'mesma', 'assim', 'então', 'entao', 'era', 'são', 'sao',
    'foi', 'ser', 'ter', 'estar', 'tem', 'havia', 'pode', 'podem', 'deve', 'devem', 'pelo'
  ]);

  static extractSignificantWords(text, limit = 6) {
    if (!text || typeof text !== 'string') return [];
    const words = text
      .toLowerCase()
      .replace(/[^\p{L}\s]/gu, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3 && !SocraticEngine.STOP_WORDS.has(w));
    
    const freq = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    return Object.keys(freq).sort((a, b) => freq[b] - freq[a]).slice(0, limit);
  }

  static getInitialDocGreeting(fileName, rawText) {
    const keywords = SocraticEngine.extractSignificantWords(rawText, 4);
    const keywordsStr = keywords.length > 0 ? keywords.slice(0, 3).join(', ') : 'suas teses fundamentais';
    return `Material **"${fileName}"** carregado e indexado no Scriptorium da Ágora.\n\nIdentifico que o texto articula noções em torno de: *${keywordsStr}*.\n\nQual é a proposição central que você extrai da leitura inicial? Formule com suas palavras para iniciarmos o exame maiêutico.`;
  }

  static evaluateInput(userInput, discipline, contextText = '') {
    const raw = userInput.trim();
    const text = raw.toLowerCase();

    // Contexto textual (seja de upload ou de disciplina da base)
    const effectiveContext = contextText || (KNOWLEDGE_BASE[discipline] ? KNOWLEDGE_BASE[discipline].text || '' : '');
    const docKeywords = SocraticEngine.extractSignificantWords(effectiveContext, 6);
    const userKeywords = SocraticEngine.extractSignificantWords(raw, 5);

    // 1. Recusa Socrática de Resumo Passivo
    if (text.includes("resumo") || text.includes("resuma") || text.includes("sintetize") || text.includes("faça um resumo") || text.includes("me explica tudo") || text.includes("o que diz ai")) {
      const topConcept = docKeywords[0] ? `a respeito de *${docKeywords[0]}*` : "apresentada pelo autor";
      return {
        type: 'refusal_summary',
        reply: `Ágora recusa o atalho do resumo passivo. A memorização mecânica da síntese alheia não produz entendimento real.\n\nRetorne ao primeiro parágrafo do texto em exame: qual sentença estabelece a premissa indispensável ${topConcept}? Formule-a em uma única linha.`
      };
    }

    // 2. Recusa de Resposta Pronta
    if (text.includes("qual a resposta") || text.includes("me dê a resposta") || text.includes("qual é a resposta") || text.includes("me diga a resposta") || text.includes("resolva para mim") || text.includes("resolva isso")) {
      return {
        type: 'refusal_answer',
        reply: `Entregar a resposta pronta privaria você do próprio ato de pensar.\n\nDemos um passo atrás na cadeia dedutiva: qual axioma ou dado inicial o autor estabelece como inquestionável para fundamentar a conclusão?`
      };
    }

    // 3. Deteção de Aporia / Não Saber
    if (text === "não sei" || text === "nao sei" || text.includes("não entendi nada") || text.includes("nao faço ideia") || text.includes("estou perdido") || text.includes("muito difícil")) {
      const focalConcept = docKeywords[0] || "o elemento principal";
      return {
        type: 'breakdown',
        reply: `A aporia — o reconhecimento humilde do não saber — é o ponto exato onde a verdadeira sabedoria tem início.\n\nIsolemos apenas a primeira sentença do documento: qual é a relação que o autor propõe entre *${focalConcept}* e a realidade observada? Diga-me apenas este ponto.`
      };
    }

    // 4. Saudações ou Perguntas sobre o Conteúdo do Arquivo
    if (text === "oi" || text === "olá" || text === "ola" || text.includes("do que se trata") || text.includes("qual o tema") || text.includes("sobre o que") || text.includes("você leu") || text.includes("o que tem no arquivo") || text.includes("começar")) {
      if (docKeywords.length > 0) {
        return {
          type: 'overview_maieutics',
          reply: `O documento submetido investiga premissas estruturadas em torno de: **${docKeywords.slice(0, 3).join(', ')}**.\n\nPara que o estudo seja ativo: a partir da leitura do primeiro parágrafo no Scriptorium, qual parece ser a hipótese central ou o conflito que o autor pretende solucionar?`,
          allowFlashcard: true
        };
      } else {
        return {
          type: 'greeting',
          reply: `Estou pronta para examinar o documento convosco. Aponte a primeira proposição que chamou sua atenção no texto para iniciarmos o diálogo socrático.`
        };
      }
    }

    // 5. Se estivermos com Material de Upload Próprio ou Texto Específico
    if (discipline === 'upload' || (effectiveContext && effectiveContext.length > 50 && discipline !== 'upload' && !KNOWLEDGE_BASE[discipline])) {
      const studentConcept = userKeywords[0] || (userKeywords[1] || "essa sua conclusão");
      const docConcept = docKeywords[0] || (docKeywords[1] || "a tese central");

      const dialeticalFrames = [
        `Ao postular que *${studentConcept}* governa essa questão: você não estaria presumindo como provado aquilo que o texto justamente tenta demonstrar? Que contraexemplo o próprio documento poderia suscitar contra essa sua visão?`,
        `Essa formulação toca em um aspecto crucial. Porém, examine a consequência: se adotarmos que *${studentConcept}* é verdadeiro, o que acontece com a proposição referente a *${docConcept}*? Ambas podem coexistir sem contradição lógica?`,
        `Sob o método do *elenchos*: você identifica essa premissa como uma causa fundamental ou como mero efeito secundário descrito pelo texto? Onde está a evidência interna no documento que sustenta sua colocação?`,
        `Instigante provocação dialética. Para aprofundarmos: que distinção conceitual o autor estabelece entre *${studentConcept}* e o restante do argumento? Isole um parágrafo que confirme a sua leitura.`
      ];

      const frameIndex = Math.abs(raw.length + (userKeywords.length * 3)) % dialeticalFrames.length;
      return {
        type: 'maieutics_dynamic_upload',
        reply: dialeticalFrames[frameIndex],
        allowFlashcard: true
      };
    }

    // 6. Disciplinas do Saber (Base Curricular Superior)
    if (discipline === 'philosophy') {
      if (text.includes("egoísta") || text.includes("sempre má") || text.includes("ilusão")) {
        return {
          type: 'elenchos',
          reply: `Ao afirmar que a natureza humana busca unicamente o proveito próprio na invisibilidade, você não está confundindo o *comportamento empírico da maioria* com a *essência da virtude*?\n\nSe o justo deixasse de agir com justiça ao vestir o anel, ele seria verdadeiramente justo ou apenas prudente diante da punição?`
        };
      }
      return {
        type: 'maieutics',
        reply: `Você tocou no núcleo da questão platônica. Se a justiça é buscada não pela punição externa, mas pela saúde e harmonia interior da própria alma, que valor prático o anel de Giges realmente teria para o sábio?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'law') {
      return {
        type: 'maieutics',
        reply: `Sob a ótica da hermenêutica constitucional: quando o texto alude ao contraditório substancial, ele garante o direito de manifestar qualquer pretensão indefinidamente ou garante o direito à influência informada e útil sobre a convicção do juiz?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'history') {
      return {
        type: 'maieutics',
        reply: `Observe a terminologia utilizada no documento. Ao transpor o conceito moderno de 'imperialismo' sobre o século XVI, você não estaria ignorando a cosmovisão teocêntrica que legitimava os atos daquela corte?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'exact') {
      return {
        type: 'maieutics',
        reply: `Correto o raciocínio. A prova prossegue por contradição (*reductio ad absurdum*). Se o número primo G dividisse simultaneamente o produto e a soma P, ele necessariamente teria que dividir a unidade (1). Por que a divisibilidade de 1 por um primo superior a 1 é impossível no sistema dos inteiros?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'theology') {
      return {
        type: 'maieutics',
        reply: `Observe o versículo 19: 'Por que se queixa ele ainda?'. Se o homem fosse um autômato desprovido de agência moral, faria sentido qualquer juízo de responsabilidade? Onde o texto bíblico traça essa fronteira?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'med') {
      return {
        type: 'maieutics_med',
        reply: `Sob a ótica da fisiopatologia renal: se a osmolaridade intersticial da medula renal for lavada (em caso de diurese osmótica maciça), por que o ADH perde sua eficácia clínica em reter água mesmo estando em concentrações plasmáticas máximas?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'cs') {
      return {
        type: 'maieutics_cs',
        reply: `Correta a observação sobre a divisão logarítmica. Agora examine a fase de conquista: por que a etapa de Merge consome O(n) em espaço adicional de memória enquanto algoritmos como o Heap Sort conseguem ordenar *in-place* com O(1) de espaço auxiliar?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'admin') {
      return {
        type: 'maieutics_admin',
        reply: `Ao examinar a tese de Coase sobre custos de transação: se os custos de negociar no mercado livre caem a quase zero com plataformas digitais descentralizadas, o que a teoria prediz sobre a desintegração vertical das grandes corporações?`,
        allowFlashcard: true
      };
    }

    // Disciplinas BNCC (Educação Básica)
    if (discipline === 'bncc_redacao') {
      return {
        type: 'maieutics_redacao',
        reply: `Excelente início de raciocínio. Para validar a sua tese perante os critérios da banca avaliadora: qual repertório legitimado das Ciências Humanas (filosofia, sociologia ou literatura) você utilizaria para sustentar que esse abandono patrimonial não é casual, mas estrutural?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_portugues') {
      return {
        type: 'maieutics_portugues',
        reply: `Muito bem. A ambiguidade desaparece quando o adjunto adverbial é deslocado para o início do período ('Com o telescópio, o cientista observou...') ou quando empregamos oração adjetiva explicativa. Qual desses dois recursos mantém o ritmo mais fluído para o leitor?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_matematica') {
      return {
        type: 'maieutics_mat',
        reply: `Exatamente. A demonstração visual comprova que a relação não é uma convenção arbitrária, mas uma consequência geométrica necessária do espaço euclidiano. Se os ângulos do triângulo não somassem 180°, essa demonstração por áreas ainda funcionaria?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_biologia') {
      return {
        type: 'maieutics_bio',
        reply: `Você captou o cerne da teoria sintética da evolução. A mutação é aleatória; a seleção natural é estritamente não aleatória. O que aconteceria com a proporção de bactérias resistentes na população se o uso de antibióticos fosse completamente suspenso por 10 anos?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_fisica') {
      return {
        type: 'maieutics_fis',
        reply: `Precisamente. A Primeira Lei estabelece que força não é necessária para manter velocidade, mas unicamente para *alterar* velocidade (produzir aceleração). Como esse princípio contraria a intuição cotidiana de quem dirige um automóvel na estrada?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_quimica') {
      return {
        type: 'maieutics_quim',
        reply: `Muito preciso. A temperatura fornece energia cinética para as moléculas vencerem a barreira original, enquanto o catalisador reduz a própria altura da barreira criando um complexo ativado alternativo. Por que o catalisador não altera a entalpia final da reação?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_historia') {
      return {
        type: 'maieutics_hist',
        reply: `Com certeza. Desmistificar a narrativa benevolente resgata a agência histórica dos escravizados e expõe as raízes históricas da desigualdade racial contemporânea. Por que a concessão da liberdade formal sem distribuição fundiária resultou na formação das periferias urbanas?`,
        allowFlashcard: true
      };
    }

    if (discipline === 'bncc_geografia') {
      return {
        type: 'maieutics_geog',
        reply: `Você tocou no nó górdio do desenvolvimento econômico: sem elevação da produtividade média do trabalhador via qualificação tecnológica, o país corre o risco de 'envelhecer antes de enriquecer'. Quais setores produtivos sofrem primeiro com essa escassez de mão de obra jovem?`,
        allowFlashcard: true
      };
    }

    return {
      type: 'maieutics_general',
      reply: `Sua formulação aponta para um elemento central. Para consolidarmos a dedução: que consequência lógica decorre dessa sua afirmação para o restante do argumento em exame?`,
      allowFlashcard: true
    };
  }
}

// ==========================================
// 4.5. EXTRAÇÃO DE PDF & INTEGRAÇÃO DE IA (ÁGORA)
// ==========================================
async function extractTextFromPDF(arrayBuffer) {
  if (!window.pdfjsLib) {
    throw new Error("pdfjsLib não disponível");
  }
  const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  let fullText = '';
  const maxPages = Math.min(pdf.numPages, 30);
  for (let i = 1; i <= maxPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    if (pageText.trim().length > 0) {
      fullText += pageText + '\n\n';
    }
  }
  return fullText.trim();
}

function showAgoraTyping() {
  const typingDiv = document.createElement('div');
  typingDiv.id = 'agora-typing-indicator';
  typingDiv.className = 'message-agora p-3.5 rounded-lg text-xs flex items-center space-x-2.5 text-neutral-300 animate-pulse';
  typingDiv.innerHTML = `
    <span class="text-sm">🏛️</span>
    <span class="font-mono text-[11px] text-neutral-400">Ágora está examinando sua premissa dialética...</span>
  `;
  DOM.chatMessages.appendChild(typingDiv);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
  return typingDiv;
}

async function callExternalAI(userInput, apiKey) {
  const context = AppState.uploadedText || (KNOWLEDGE_BASE[AppState.currentDiscipline] ? KNOWLEDGE_BASE[AppState.currentDiscipline].text : '');
  const systemPrompt = `Você é a Ágora, a inteligência socrática e dialética da plataforma LOGOSSOPHIA.
Seu método é a maiêutica socrática estrita:
1. NUNCA entregue a resposta pronta ou faça resumos passivos.
2. Desafie as premissas do estudante com perguntas afiadas (elenchos) e aponte contradições.
3. Use o texto de estudo fornecido abaixo como referência de fundamentação.
4. Faça uma única pergunta incisiva por vez para manter o diálogo focado e reflexivo.
5. Tom: sóbrio, instigante, acadêmico, cortês.
Texto em exame:
"""
${context ? context.substring(0, 8000) : "Diálogo sobre os fundamentos do conhecimento e virtude."}
"""`;

  if (apiKey.startsWith('AIza')) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\nEstudante formula: "${userInput}"` }] }
        ],
        generationConfig: { maxOutputTokens: 350, temperature: 0.7 }
      })
    });
    if (!resp.ok) {
      const errBody = await resp.text();
      throw new Error(`Gemini API HTTP ${resp.status}: ${errBody}`);
    }
    const data = await resp.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (replyText) {
      return { reply: replyText, allowFlashcard: true };
    }
  } else if (apiKey.startsWith('sk-')) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userInput }
        ],
        max_tokens: 350
      })
    });
    if (!resp.ok) {
      throw new Error(`OpenAI API HTTP ${resp.status}`);
    }
    const data = await resp.json();
    const replyText = data.choices?.[0]?.message?.content;
    if (replyText) {
      return { reply: replyText, allowFlashcard: true };
    }
  }

  throw new Error("Chave de API não compatível com Gemini (AIza...) ou OpenAI (sk-...)");
}

// ==========================================
// 5. SINO MONÁSTICO SINTÉTICO (Web Audio API)
// ==========================================
function playMonasteryChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(432, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(216, ctx.currentTime + 3.2);

    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.3);
  } catch (e) {
    console.log("Audio indisponível.");
  }
}

// ==========================================
// 6. GESTÃO DO POMODORO CIRCULAR
// ==========================================
function updatePomoDisplay() {
  const min = Math.floor(AppState.pomoSeconds / 60);
  const sec = AppState.pomoSeconds % 60;
  const timeStr = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  DOM.pomoDisplay.textContent = timeStr;
  if (DOM.sidebarPomoStatus) {
    DOM.sidebarPomoStatus.textContent = timeStr;
  }
  const headerPomoDisplay = document.getElementById('header-pomo-display');
  if (headerPomoDisplay) {
    headerPomoDisplay.textContent = timeStr;
  }

  if (DOM.pomoCircleProgress) {
    const progressRatio = AppState.pomoSeconds / AppState.pomoInitialSeconds;
    const offset = CIRCLE_CIRCUMFERENCE * (1 - progressRatio);
    DOM.pomoCircleProgress.style.strokeDashoffset = offset;
  }
}

function togglePomodoro() {
  const toggleIcon = document.getElementById('pomo-toggle-icon');
  if (AppState.pomoIsRunning) {
    clearInterval(AppState.pomoTimer);
    AppState.pomoIsRunning = false;
    if (toggleIcon) {
      toggleIcon.textContent = '▶';
    } else if (DOM.pomoToggle) {
      DOM.pomoToggle.textContent = 'START FOCUS';
    }
    if (DOM.pomoStatusLabel) DOM.pomoStatusLabel.textContent = 'Pausado';
  } else {
    AppState.pomoIsRunning = true;
    if (toggleIcon) {
      toggleIcon.textContent = '⏸';
    } else if (DOM.pomoToggle) {
      DOM.pomoToggle.textContent = 'PAUSE FOCUS';
    }
    if (DOM.pomoStatusLabel) DOM.pomoStatusLabel.textContent = 'Foco';

    AppState.pomoTimer = setInterval(() => {
      if (AppState.pomoSeconds > 0) {
        AppState.pomoSeconds--;
        updatePomoDisplay();
      } else {
        clearInterval(AppState.pomoTimer);
        AppState.pomoIsRunning = false;
        if (toggleIcon) {
          toggleIcon.textContent = '▶';
        } else if (DOM.pomoToggle) {
          DOM.pomoToggle.textContent = 'START FOCUS';
        }
        playMonasteryChime();
        recordStudySession(AppState.pomoInitialSeconds, 'pomodoro');
        alert("Ciclo de vigília concluído com sucesso. Descanse e medite brevemente.");
        AppState.pomoSeconds = AppState.pomoInitialSeconds;
        updatePomoDisplay();
      }
    }, 1000);
  }
}

function resetPomodoro() {
  clearInterval(AppState.pomoTimer);
  AppState.pomoIsRunning = false;
  const toggleIcon = document.getElementById('pomo-toggle-icon');
  if (toggleIcon) {
    toggleIcon.textContent = '▶';
  } else if (DOM.pomoToggle) {
    DOM.pomoToggle.textContent = 'START FOCUS';
  }
  AppState.pomoSeconds = AppState.pomoInitialSeconds;
  if (DOM.pomoStatusLabel) DOM.pomoStatusLabel.textContent = 'Foco';
  updatePomoDisplay();
}

// ==========================================
// 6.4. GESTÃO DE TEMA (PERGAMINHO CLARO / NOTURNO)
// ==========================================
function applyTheme(theme) {
  const isLight = (theme === 'light');
  if (isLight) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
  try {
    localStorage.setItem('logossophia_theme', isLight ? 'light' : 'dark');
  } catch (e) {
    console.warn("Falha ao salvar tema no localStorage:", e);
  }

  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    icon.textContent = isLight ? '🌙' : '☀️';
  }
  const btn = document.getElementById('btn-toggle-theme');
  if (btn) {
    btn.setAttribute('title', isLight ? 'Mudar para Modo Noturno (Escuro)' : 'Mudar para Modo Claro (Pergaminho Clássico)');
  }
  const themeSelect = document.getElementById('setting-theme-select');
  if (themeSelect) {
    themeSelect.value = isLight ? 'light' : 'dark';
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

// ==========================================
// 6.5. GESTÃO DE CONTAS & PERSISTÊNCIA NO BANCO DE DADOS (SQLite Sync)
// ==========================================
function getStoredAccounts() {
  try {
    // Limpa versões legadas de cache com dados mockados antigos
    if (localStorage.getItem('logossophia_accounts_v1')) {
      localStorage.removeItem('logossophia_accounts_v1');
    }
    const raw = localStorage.getItem('logossophia_accounts_v2');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn("Falha ao ler localStorage:", e);
  }
  return JSON.parse(JSON.stringify(ACCOUNTS_DATABASE));
}

function saveStoredAccounts(accounts) {
  try {
    localStorage.setItem('logossophia_accounts_v2', JSON.stringify(accounts));
  } catch (e) {
    console.warn("Falha ao salvar localStorage:", e);
  }
}

function renderSessionsTable(sessions) {
  const tbody = document.getElementById('dashboard-sessions-table');
  if (!tbody) return;

  if (!sessions || sessions.length === 0) {
    tbody.innerHTML = `
      <tr id="sessions-empty-row">
        <td colspan="6" class="px-5 py-8 text-center text-textMuted font-mono text-xs">
          Nenhuma sessão registrada ainda. Inicie sua primeira vigília ou debate socrático na Ágora para registrar seu progresso canônico.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  sessions.forEach(s => {
    const discInfo = KNOWLEDGE_BASE[s.discipline] || { title: s.discipline, badge: s.cycle || 'Superior' };
    const mins = Math.max(1, Math.round((s.duration || 1500) / 60));
    html += `
      <tr class="hover:bg-neutral-900/40 transition">
        <td class="px-5 py-3.5 font-mono text-textSecondary">${s.date || 'Hoje'}</td>
        <td class="px-5 py-3.5 font-medium text-white flex items-center space-x-2">
          <span>🏛️</span>
          <span>${discInfo.title || s.discipline}</span>
        </td>
        <td class="px-5 py-3.5"><span class="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 uppercase">${s.cycle || 'Superior'}</span></td>
        <td class="px-5 py-3.5 font-mono text-textSecondary">${mins} min</td>
        <td class="px-5 py-3.5 font-mono text-emerald-400">${s.cardsGenerated ? `+${s.cardsGenerated} Flashcards` : '--'}</td>
        <td class="px-5 py-3.5 text-right">
          <button class="btn-resume-discipline text-neutral-300 hover:text-white underline text-[11px] font-mono" data-disc="${s.discipline}">Estudar na Ágora →</button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;

  tbody.querySelectorAll('.btn-resume-discipline').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const disc = btn.dataset.disc;
      if (disc) loadDiscipline(disc, true);
    });
  });
}

function resetUserAccountData() {
  if (!confirm("Atenção: Deseja realmente zerar todos os dados de estudo (horas de vigília, constância, histórico de sessões e Flashcards) da sua conta?")) {
    return;
  }

  const accounts = getStoredAccounts();
  const user = accounts[AppState.currentUserId];
  if (user) {
    user.streakDays = 0;
    user.totalHours = 0;
    user.flashcards = [];
    user.sessions = [];
    saveStoredAccounts(accounts);
  }

  AppState.flashcards = [];
  AppState.currentCardIndex = 0;

  loadUserAccount(AppState.currentUserId, true);
  alert("Todos os dados da sua conta foram zerados com sucesso.");
}

function loadUserAccount(userId, skipDisciplineReload = false) {
  const accounts = getStoredAccounts();
  const user = accounts[userId] || accounts['usr-erudito-01'];
  AppState.currentUserId = user.id;
  AppState.currentUser = user;

  // Atualiza Sidebar User Card
  if (DOM.userAvatar) DOM.userAvatar.textContent = user.avatar || '🏛️';
  if (DOM.userDisplayName) DOM.userDisplayName.textContent = user.name;
  if (DOM.userDisplayInfo) DOM.userDisplayInfo.textContent = `${user.course} • ${user.institution.split(' ')[0]}`;

  // Atualiza Header User Login Button
  const headerUserAvatar = document.getElementById('header-user-avatar');
  const headerUserName = document.getElementById('header-user-name');
  if (headerUserAvatar) headerUserAvatar.textContent = user.avatar || '🏛️';
  if (headerUserName) headerUserName.textContent = user.name.split(' ')[0];

  const userHours = (typeof user.totalHours === 'number') ? user.totalHours : 0;
  const userStreak = (typeof user.streakDays === 'number') ? user.streakDays : 0;

  // Atualiza Tracker Stats
  const trackerSummary = document.getElementById('tracker-summary');
  if (trackerSummary) {
    trackerSummary.textContent = `${userHours}h Vigília • ${userStreak}d Streak`;
  }

  // Atualiza Pomodoro
  const focusMin = user.pomoMin || 25;
  AppState.pomoInitialSeconds = focusMin * 60;
  AppState.pomoSeconds = focusMin * 60;
  updatePomoDisplay();

  // Atualiza Flashcards da conta
  AppState.flashcards = user.flashcards || [];
  AppState.currentCardIndex = 0;
  updateFlashcardBadge();

  // Preenche campos do modal de configurações
  if (DOM.settingUserSelect) DOM.settingUserSelect.value = user.id;
  if (DOM.settingUserName) DOM.settingUserName.value = user.name;
  if (DOM.settingUserEmail) DOM.settingUserEmail.value = user.email;
  if (DOM.settingInstitution) DOM.settingInstitution.value = user.institution;
  if (DOM.settingCourse) DOM.settingCourse.value = user.course;
  if (DOM.settingGoal) DOM.settingGoal.value = user.goal;
  if (DOM.settingDefaultCycle) DOM.settingDefaultCycle.value = user.defaultCycle || 'superior';
  if (DOM.settingThemeSelect) DOM.settingThemeSelect.value = user.theme || localStorage.getItem('logossophia_theme') || 'dark';
  if (DOM.settingPomoMin) DOM.settingPomoMin.value = focusMin;
  if (DOM.settingAiMode) DOM.settingAiMode.value = user.aiMode || 'socratic_rigorous';
  if (DOM.settingApiKey) DOM.settingApiKey.value = user.apiKey || '';

  // Atualiza Estatísticas do Dashboard (Tabularium)
  const heroGreeting = document.getElementById('hero-user-greeting');
  if (heroGreeting) heroGreeting.textContent = `${user.name} — ${user.course} (${user.institution.split(' ')[0]})`;
  const statHours = document.getElementById('stat-total-hours');
  if (statHours) statHours.textContent = `${userHours.toFixed(1)}h`;
  const statStreak = document.getElementById('stat-streak-days');
  if (statStreak) statStreak.textContent = `${userStreak} Dias`;
  const statRetention = document.getElementById('stat-retention-rate');
  if (statRetention) statRetention.textContent = userHours > 0 ? '89%' : '--';
  const statCards = document.getElementById('stat-cards-count');
  if (statCards) statCards.textContent = `${AppState.flashcards.length} Cartões`;

  const sidebarStreak = document.getElementById('sidebar-streak-display');
  if (sidebarStreak) sidebarStreak.innerHTML = `<span>🔥</span><span>${userStreak} Dias Streak</span>`;
  const sidebarTotalHours = document.getElementById('sidebar-total-hours');
  if (sidebarTotalHours) sidebarTotalHours.textContent = `${userHours}h Total`;

  const statHoursSub = document.getElementById('stat-hours-sub');
  if (statHoursSub) {
    statHoursSub.innerHTML = `<span class="text-emerald-400 font-mono">${userHours}h</span><span>nesta semana • ${(user.sessions || []).length} sessões</span>`;
  }

  const statCardsSub = document.getElementById('stat-cards-sub');
  if (statCardsSub) {
    const pendingCount = AppState.flashcards.filter(c => c.status !== 'cristalizado').length;
    statCardsSub.innerHTML = `<span class="text-amber-400 font-mono">${pendingCount}</span><span>pendentes de revisão hoje</span>`;
  }

  // Renderiza tabela histórica de sessões
  renderSessionsTable(user.sessions || []);

  // Ajusta ciclo e carrega disciplina ativa
  if (!skipDisciplineReload) {
    const cycle = user.defaultCycle || 'superior';
    setCycle(cycle);
    const discToLoad = user.activeDiscipline || (cycle === 'bncc' ? 'bncc_redacao' : 'law');
    loadDiscipline(discToLoad, false);
  }
}

function saveUserAccount() {
  const accounts = getStoredAccounts();
  const userId = AppState.currentUserId;
  if (!accounts[userId]) return;

  const user = accounts[userId];
  user.name = DOM.settingUserName ? DOM.settingUserName.value.trim() : user.name;
  user.email = DOM.settingUserEmail ? DOM.settingUserEmail.value.trim() : user.email;
  user.institution = DOM.settingInstitution ? DOM.settingInstitution.value.trim() : user.institution;
  user.course = DOM.settingCourse ? DOM.settingCourse.value.trim() : user.course;
  user.goal = DOM.settingGoal ? DOM.settingGoal.value.trim() : user.goal;
  user.defaultCycle = DOM.settingDefaultCycle ? DOM.settingDefaultCycle.value : user.defaultCycle;
  if (DOM.settingThemeSelect) {
    user.theme = DOM.settingThemeSelect.value;
    applyTheme(user.theme);
  }
  user.pomoMin = parseInt(DOM.settingPomoMin ? DOM.settingPomoMin.value : 25, 10) || 25;
  user.aiMode = DOM.settingAiMode ? DOM.settingAiMode.value : user.aiMode;
  user.apiKey = DOM.settingApiKey ? DOM.settingApiKey.value.trim() : '';

  saveStoredAccounts(accounts);
  loadUserAccount(userId, false);

  alert(`Configurações de ${user.name} salvas com sucesso!`);
}

function recordStudySession(durationSec, type = 'pomodoro') {
  const accounts = getStoredAccounts();
  const user = accounts[AppState.currentUserId];
  if (user) {
    const hoursAdded = Math.round((durationSec / 3600) * 10) / 10;
    user.totalHours = Math.round(((user.totalHours || 0) + hoursAdded) * 10) / 10;
    if (!user.streakDays || user.streakDays === 0) user.streakDays = 1;
    if (!user.sessions) user.sessions = [];
    user.sessions.unshift({
      id: Date.now(),
      discipline: AppState.currentDiscipline,
      cycle: AppState.currentCycle,
      duration: durationSec,
      date: "Hoje, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      cardsGenerated: 0
    });
    saveStoredAccounts(accounts);
    loadUserAccount(AppState.currentUserId, true);
  }
}

// ==========================================
// 7. RENDERIZAÇÃO DO SCRIPTORIUM & UPLOAD
// ==========================================
function setCycle(cycle) {
  AppState.currentCycle = cycle;

  // Atualiza botões de abas de ciclo na Ágora
  const agoraCycleTabs = document.querySelectorAll('.agora-cycle-tab');
  agoraCycleTabs.forEach(tab => {
    if (tab.dataset.cycle === cycle) {
      tab.classList.add('active', 'text-white', 'bg-neutral-800', 'border', 'border-neutral-700');
      tab.classList.remove('text-textSecondary');
    } else {
      tab.classList.remove('active', 'text-white', 'bg-neutral-800', 'border', 'border-neutral-700');
      tab.classList.add('text-textSecondary');
    }
  });

  // Alterna visibilidade dos grids de disciplinas na Ágora
  const gridSuperior = document.getElementById('agora-grid-superior');
  const gridBncc = document.getElementById('agora-grid-bncc');
  const gridUpload = document.getElementById('agora-grid-upload');

  if (gridSuperior) gridSuperior.classList.toggle('hidden', cycle !== 'superior');
  if (gridBncc) gridBncc.classList.toggle('hidden', cycle !== 'bncc');
  if (gridUpload) gridUpload.classList.toggle('hidden', cycle !== 'upload');

  // Atualiza breadcrumb de cabeçalho
  const headerCyclePill = document.getElementById('header-cycle-pill');
  if (headerCyclePill) {
    if (cycle === 'bncc') headerCyclePill.textContent = 'BNCC Escola';
    else if (cycle === 'upload') headerCyclePill.textContent = 'Universal';
    else headerCyclePill.textContent = 'Superior';
  }
}

function syncSidebarSelection(key) {
  // Sincroniza cards de disciplina na seção Ágora
  const cards = document.querySelectorAll('.agora-disc-card');
  cards.forEach(card => {
    if (card.dataset.disc === key) {
      card.classList.add('active', 'bg-neutral-900/90', 'border-neutral-400');
      card.classList.remove('bg-cardInner', 'border-cardBorder');
    } else {
      card.classList.remove('active', 'bg-neutral-900/90', 'border-neutral-400');
      card.classList.add('bg-cardInner', 'border-cardBorder');
    }
  });
}

function switchMainView(viewName) {
  const viewDashboard = document.getElementById('view-dashboard');
  const viewAgora = document.getElementById('view-agora');
  const btnDashboard = document.getElementById('sidebar-btn-dashboard');
  const btnAgora = document.getElementById('sidebar-btn-agora');

  if (viewName === 'dashboard') {
    if (viewDashboard) viewDashboard.classList.remove('hidden');
    if (viewAgora) viewAgora.classList.add('hidden');

    if (btnDashboard) {
      btnDashboard.classList.add('active', 'text-white', 'bg-neutral-900', 'border-neutral-700');
      btnDashboard.classList.remove('text-textSecondary');
    }
    if (btnAgora) {
      btnAgora.classList.remove('active', 'text-white', 'bg-neutral-900', 'border-neutral-700');
      btnAgora.classList.add('text-textSecondary');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewName === 'agora') {
    if (viewAgora) viewAgora.classList.remove('hidden');
    if (viewDashboard) viewDashboard.classList.add('hidden');

    if (btnAgora) {
      btnAgora.classList.add('active', 'text-white', 'bg-neutral-900', 'border-neutral-700');
      btnAgora.classList.remove('text-textSecondary');
    }
    if (btnDashboard) {
      btnDashboard.classList.remove('active', 'text-white', 'bg-neutral-900', 'border-neutral-700');
      btnDashboard.classList.add('text-textSecondary');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateHeaderBreadcrumb(cycleLabel, icon, title) {
  const headerCyclePill = document.getElementById('header-cycle-pill');
  const headerDiscIcon = document.getElementById('header-disc-icon');
  const headerDiscTitle = document.getElementById('header-disc-title');
  if (headerCyclePill) headerCyclePill.textContent = cycleLabel;
  if (headerDiscIcon) headerDiscIcon.textContent = icon;
  if (headerDiscTitle) headerDiscTitle.textContent = title;
}

function showUploadZone(autoSwitch = true) {
  AppState.currentDiscipline = 'upload';
  setCycle('upload');
  if (DOM.disciplineSelector) DOM.disciplineSelector.value = 'upload';
  DOM.uploadZoneContainer.classList.remove('hidden');
  DOM.readerWrapper.classList.add('hidden');
  DOM.agoraStatusSubtitle.textContent = 'Ágora • Material Próprio';
  DOM.chatMessages.innerHTML = '';
  appendAgoraMessage(KNOWLEDGE_BASE.upload.initialPrompt);
  updateHeaderBreadcrumb('Universal', '📁', 'Upload de Material Próprio');

  // Sincroniza cards de disciplina
  syncSidebarSelection('upload');

  if (autoSwitch) {
    switchMainView('agora');
  }
}

function renderTextToScriptorium(title, badge, rawText) {
  DOM.docTitle.textContent = title;
  DOM.docVersionBadge.textContent = badge;

  // Formata o texto bruto em parágrafos com marcadores canônicos e capitular
  const paragraphs = rawText.split(/\n\s*\n|\n/).filter(p => p.trim().length > 0);
  let html = '';

  paragraphs.forEach((p, idx) => {
    const trimmed = p.trim();
    if (idx === 0) {
      const firstChar = trimmed.charAt(0);
      const rest = trimmed.slice(1);
      html += `<p><span class="drop-cap">${firstChar}</span>${rest}</p>`;
    } else {
      html += `<p><span class="num-marker">§${idx + 1}</span>${trimmed}</p>`;
    }
  });

  DOM.readerContent.innerHTML = html;
  DOM.uploadZoneContainer.classList.add('hidden');
  DOM.readerWrapper.classList.remove('hidden');
}

function loadDiscipline(key, autoSwitchView = true) {
  if (key === 'upload') {
    showUploadZone(autoSwitchView);
    return;
  }

  const data = KNOWLEDGE_BASE[key];
  if (!data) return;

  AppState.currentDiscipline = key;
  DOM.docTitle.textContent = data.title;
  DOM.docVersionBadge.textContent = data.badge;
  DOM.readerContent.innerHTML = data.html;

  DOM.uploadZoneContainer.classList.add('hidden');
  DOM.readerWrapper.classList.remove('hidden');

  // Determina e ajusta o ciclo automaticamente
  const isBncc = key.startsWith('bncc_');
  setCycle(isBncc ? 'bncc' : 'superior');

  if (DOM.disciplineSelector) {
    DOM.disciplineSelector.value = key;
  }

  const selectedOpt = DOM.disciplineSelector ? DOM.disciplineSelector.options[DOM.disciplineSelector.selectedIndex] : null;
  const areaName = selectedOpt ? selectedOpt.text.split(' ')[1] : (isBncc ? 'BNCC' : 'Superior');
  const discIcon = selectedOpt ? selectedOpt.text.split(' ')[0] : (isBncc ? '🏫' : '🎓');
  DOM.agoraStatusSubtitle.textContent = `Ágora • ${areaName}`;
  updateHeaderBreadcrumb(isBncc ? 'BNCC Escola' : 'Superior', discIcon, data.title);

  syncSidebarSelection(key);

  DOM.chatMessages.innerHTML = '';
  appendAgoraMessage(data.initialPrompt);

  if (autoSwitchView) {
    switchMainView('agora');
  }
}

function appendAgoraMessage(text, allowFlashcard = false) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message-agora p-4 rounded-lg text-sm leading-relaxed space-y-2';

  let html = `
    <div class="flex items-center justify-between text-[10px] font-mono text-textSecondary uppercase tracking-wider mb-1">
      <span class="font-bold text-white">Ágora</span>
      <span>Maiêutica</span>
    </div>
    <div class="text-[#ECECEC]">${text.replace(/\n/g, '<br>')}</div>
  `;

  if (allowFlashcard) {
    html += `
      <div class="pt-2 border-t border-cardBorder mt-2 flex justify-end">
        <button class="btn-create-card-from-chat text-[11px] font-mono text-neutral-400 hover:text-white flex items-center space-x-1 px-2.5 py-1 bg-[#121212] border border-cardBorder rounded hover:border-neutral-500 transition">
          <span>📝 Cristalizar em Flashcard</span>
        </button>
      </div>
    `;
  }

  msgDiv.innerHTML = html;
  DOM.chatMessages.appendChild(msgDiv);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;

  if (allowFlashcard) {
    const cardBtn = msgDiv.querySelector('.btn-create-card-from-chat');
    if (cardBtn) {
      cardBtn.addEventListener('click', () => {
        createFlashcardFromAgora(text);
      });
    }
  }
}

function appendUserMessage(text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message-user p-4 rounded-lg text-sm leading-relaxed ml-6';
  msgDiv.innerHTML = `
    <div class="flex items-center justify-between text-[10px] font-mono text-textMuted uppercase tracking-wider mb-1">
      <span class="font-bold text-neutral-300">Estudante</span>
      <span>Raciocínio</span>
    </div>
    <div class="text-[#D6D6D6]">${text.replace(/\n/g, '<br>')}</div>
  `;
  DOM.chatMessages.appendChild(msgDiv);
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

// ==========================================
// 8. TABULAE (FLASHCARDS)
// ==========================================
function updateFlashcardBadge() {
  if (DOM.flashcardBadge) DOM.flashcardBadge.textContent = AppState.flashcards.length;
  if (DOM.trackerCardCount) DOM.trackerCardCount.textContent = AppState.flashcards.length;
  if (DOM.sidebarTabulaeCount) {
    DOM.sidebarTabulaeCount.textContent = AppState.flashcards.length;
  }
  const statCards = document.getElementById('stat-cards-count');
  if (statCards) {
    statCards.textContent = `${AppState.flashcards.length} Cartões`;
  }
}

function renderFlashcardDeck() {
  if (AppState.flashcards.length === 0) {
    DOM.flashcardDeck.innerHTML = `
      <div class="text-center text-textSecondary font-mono text-xs py-8">
        Nenhum Flashcard registrado ainda. Interrogue a Ágora para cristalizar suas sínteses de estudo.
      </div>
    `;
    DOM.deckProgress.textContent = "0 de 0";
    return;
  }

  const card = AppState.flashcards[AppState.currentCardIndex];
  DOM.deckProgress.textContent = `Cartão ${AppState.currentCardIndex + 1} de ${AppState.flashcards.length}`;

  DOM.flashcardDeck.innerHTML = `
    <div class="flip-card" id="active-flip-card">
      <div class="flip-card-inner">
        <!-- FRENTE -->
        <div class="flip-card-front shadow-lg">
          <span class="text-[10px] font-mono uppercase text-textSecondary tracking-widest mb-3">[FRENTE // PROVOCAÇÃO]</span>
          <p class="font-garamond text-lg text-white leading-relaxed px-4">${card.front}</p>
          <span class="text-[10px] font-mono text-textMuted mt-4">Clique para virar o Flashcard ↺</span>
        </div>
        <!-- VERSO -->
        <div class="flip-card-back shadow-lg">
          <span class="text-[10px] font-mono uppercase text-neutral-400 tracking-widest mb-3">[VERSO // SÍNTESE CRISTALIZADA]</span>
          <p class="font-garamond text-lg text-white leading-relaxed px-4">${card.back}</p>
          <div class="mt-4 flex space-x-2">
            <button class="btn-grade px-2.5 py-1 text-[10px] font-mono bg-black border border-neutral-700 hover:border-red-500 rounded text-neutral-400" data-status="obscuro">Obscuro</button>
            <button class="btn-grade px-2.5 py-1 text-[10px] font-mono bg-black border border-neutral-700 hover:border-amber-500 rounded text-neutral-300" data-status="em_raciocinio">Em Raciocínio</button>
            <button class="btn-grade px-2.5 py-1 text-[10px] font-mono bg-black border border-neutral-700 hover:border-emerald-500 rounded text-white" data-status="cristalizado">Cristalizado</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const activeCard = document.getElementById('active-flip-card');
  if (activeCard) {
    activeCard.addEventListener('click', (e) => {
      if (e.target.closest('.btn-grade')) return;
      activeCard.classList.toggle('flipped');
    });
  }

  document.querySelectorAll('.btn-grade').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.status = btn.dataset.status;
      if (AppState.currentCardIndex < AppState.flashcards.length - 1) {
        AppState.currentCardIndex++;
        renderFlashcardDeck();
      }
    });
  });
}

function createFlashcardFromAgora(synthesisText) {
  const newCard = {
    id: Date.now(),
    discipline: AppState.currentDiscipline,
    front: `Qual síntese você articulou durante o exame deste material em ${AppState.currentDiscipline}?`,
    back: synthesisText.replace(/<br>/g, ' ').substring(0, 160) + "...",
    status: "em_raciocinio"
  };
  AppState.flashcards.push(newCard);
  updateFlashcardBadge();
  alert("Flashcard criado e arquivado para repetição espaçada.");
}

function handleGoogleLoginFlow() {
  const email = prompt("Informe seu e-mail do Google (ex: seu.email@gmail.com):", AppState.currentUser?.email || "");
  if (!email || !email.includes('@')) {
    if (email !== null) alert("E-mail não fornecido ou inválido.");
    return;
  }

  const defaultName = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const name = prompt("Nome completo para o perfil de estudo:", defaultName) || defaultName;

  const accounts = getStoredAccounts();
  const googleUserId = 'usr-google-' + email.replace(/[^a-zA-Z0-9]/g, '_');

  if (!accounts[googleUserId]) {
    accounts[googleUserId] = {
      id: googleUserId,
      name: name,
      email: email,
      avatar: '🌐',
      institution: 'Conta Google',
      course: 'Estudos Acadêmicos',
      goal: 'Desenvolvimento Dialético & Socrático',
      defaultCycle: 'superior',
      activeDiscipline: 'law',
      streakDays: 0,
      totalHours: 0,
      theme: localStorage.getItem('logossophia_theme') || 'dark',
      pomoMin: 25,
      aiMode: 'custom-api',
      apiKey: '',
      flashcards: [],
      sessions: []
    };
  }

  // Pergunta opcional para integrar a chave gratuita do Gemini
  const askKey = confirm("Conta Google conectada com sucesso!\n\nDeseja vincular sua chave de API gratuita do Gemini agora para potencializar a Ágora?");
  if (askKey) {
    const key = prompt("Insira sua chave do Gemini (gerada no Google AI Studio - https://aistudio.google.com/app/apikey):", accounts[googleUserId].apiKey || "");
    if (key && key.trim()) {
      accounts[googleUserId].apiKey = key.trim();
      accounts[googleUserId].aiMode = 'custom-api';
    }
  }

  saveStoredAccounts(accounts);
  loadUserAccount(googleUserId, false);

  if (DOM.modalAuth) DOM.modalAuth.classList.add('hidden');
  alert(`Bem-vindo, ${name}! Sua conta Google foi conectada ao Logossophia.`);
}

// ==========================================
// 9. INICIALIZAÇÃO & EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa Tema (Modo Pergaminho Claro ou Noturno)
  const savedTheme = localStorage.getItem('logossophia_theme') || 'dark';
  applyTheme(savedTheme);

  // Inicia carregando o perfil do estudante ativo e suas preferências do banco
  loadUserAccount('usr-erudito-01');

  // Requisito: Ao entrar no site, a primeira coisa que o usuário vê são as estatísticas de estudo
  switchMainView('dashboard');

  // Seletor de Disciplina / Origem
  DOM.disciplineSelector.addEventListener('change', (e) => {
    loadDiscipline(e.target.value);
  });

  // Pomodoro Controls
  DOM.pomoToggle.addEventListener('click', togglePomodoro);
  DOM.pomoReset.addEventListener('click', resetPomodoro);

  // Modos de Pomodoro
  DOM.pomoModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.pomoModeBtns.forEach(b => {
        b.classList.remove('text-white', 'font-semibold', 'underline', 'decoration-2', 'underline-offset-4');
        b.classList.add('text-textSecondary');
      });
      btn.classList.add('text-white', 'font-semibold', 'underline', 'decoration-2', 'underline-offset-4');
      btn.classList.remove('text-textSecondary');

      const mins = parseInt(btn.dataset.mins, 10);
      AppState.pomoInitialSeconds = mins * 60;
      AppState.pomoSeconds = mins * 60;
      resetPomodoro();
    });
  });

  // Upload: Arquivos Drag-and-Drop & Browse
  if (DOM.btnBrowseFile) {
    DOM.btnBrowseFile.addEventListener('click', (e) => {
      e.stopPropagation();
      DOM.studyFileInput.click();
    });
  }

  if (DOM.dropZone) {
    DOM.dropZone.addEventListener('click', () => {
      DOM.studyFileInput.click();
    });

    DOM.dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      DOM.dropZone.classList.add('border-white', 'bg-[#222222]');
    });

    DOM.dropZone.addEventListener('dragleave', () => {
      DOM.dropZone.classList.remove('border-white', 'bg-[#222222]');
    });

    DOM.dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      DOM.dropZone.classList.remove('border-white', 'bg-[#222222]');
      if (e.dataTransfer.files.length > 0) {
        processUploadedFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (DOM.studyFileInput) {
    DOM.studyFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        processUploadedFile(e.target.files[0]);
      }
    });
  }

  async function processUploadedFile(file) {
    if (!file) return;

    const fileName = file.name;
    const isPdf = fileName.toLowerCase().endsWith('.pdf') || (file.type && file.type.includes('pdf'));

    DOM.docTitle.textContent = `Processando ${fileName}...`;
    DOM.agoraStatusSubtitle.textContent = 'Indexando no Scriptorium...';

    try {
      let extractedText = '';

      if (isPdf) {
        if (window.pdfjsLib) {
          try {
            const arrayBuffer = await file.arrayBuffer();
            extractedText = await extractTextFromPDF(arrayBuffer);
          } catch (pdfErr) {
            console.warn("Extração via PDF.js encontrou restrição ou texto protegido:", pdfErr);
          }
        }
        if (!extractedText || extractedText.trim().length < 20) {
          extractedText = `Tratado submetido: "${fileName}".\n\nEste documento em formato PDF foi indexado pelo Scriptorium para o ciclo de estudos dialéticos.\n\nO leitor e a Ágora agora podem interagir com os conceitos e questionamentos suscitados a partir deste texto.`;
        }
      } else {
        extractedText = await file.text();
      }

      if (!extractedText || extractedText.trim().length === 0) {
        extractedText = `Documento vazio ou sem caracteres legíveis identificados em "${fileName}".`;
      }

      AppState.currentDiscipline = 'upload';
      AppState.uploadedFileName = fileName;
      AppState.uploadedText = extractedText;

      const badgeType = isPdf ? 'PDF' : (fileName.split('.').pop() || 'DOC').toUpperCase();
      renderTextToScriptorium(fileName, badgeType, extractedText);

      updateHeaderBreadcrumb('Universal', '📁', fileName);
      syncSidebarSelection('upload');
      if (DOM.disciplineSelector) DOM.disciplineSelector.value = 'upload';
      DOM.agoraStatusSubtitle.textContent = `Ágora • ${fileName.length > 20 ? fileName.substring(0, 17) + '...' : fileName}`;

      DOM.chatMessages.innerHTML = '';
      const initialGreeting = SocraticEngine.getInitialDocGreeting(fileName, extractedText);
      appendAgoraMessage(initialGreeting);

    } catch (err) {
      console.error("Erro ao processar arquivo:", err);
      alert(`Erro ao ler o arquivo "${fileName}".`);
    }
  }

  // Upload: Colar Texto Diretamente
  if (DOM.btnSubmitPastedText) {
    DOM.btnSubmitPastedText.addEventListener('click', () => {
      const text = DOM.pasteTextInput.value.trim();
      if (!text) {
        alert("Cole algum texto antes de submeter ao Scriptorium.");
        return;
      }
      AppState.currentDiscipline = 'upload';
      AppState.uploadedFileName = "Texto Pessoal / Notas de Estudo";
      AppState.uploadedText = text;

      renderTextToScriptorium("Texto Pessoal / Notas de Estudo", "NOTAS", text);
      updateHeaderBreadcrumb('Universal', '✍️', 'Texto Pessoal / Notas');
      syncSidebarSelection('upload');
      if (DOM.disciplineSelector) DOM.disciplineSelector.value = 'upload';

      DOM.chatMessages.innerHTML = '';
      const initialGreeting = SocraticEngine.getInitialDocGreeting("Texto Pessoal", text);
      appendAgoraMessage(initialGreeting);
    });
  }

  if (DOM.btnChangeDoc) {
    DOM.btnChangeDoc.addEventListener('click', showUploadZone);
  }

  if (DOM.btnTriggerUpload) {
    DOM.btnTriggerUpload.addEventListener('click', showUploadZone);
  }

  // Função centralizada para processar mensagens da Ágora
  async function handleChatSubmit() {
    const userText = DOM.chatInput.value.trim();
    if (!userText) return;

    appendUserMessage(userText);
    DOM.chatInput.value = '';

    const typingElem = showAgoraTyping();

    try {
      const userApiKey = AppState.currentUser?.apiKey;
      const aiMode = AppState.currentUser?.aiMode;

      let replyData;
      if (userApiKey && (aiMode === 'custom-api' || userApiKey.startsWith('AIza') || userApiKey.startsWith('sk-'))) {
        replyData = await callExternalAI(userText, userApiKey);
      } else {
        await new Promise(r => setTimeout(r, 600));
        const contextText = AppState.uploadedText || (KNOWLEDGE_BASE[AppState.currentDiscipline] ? KNOWLEDGE_BASE[AppState.currentDiscipline].text || '' : '');
        replyData = SocraticEngine.evaluateInput(userText, AppState.currentDiscipline, contextText);
      }

      if (typingElem && typingElem.parentNode) {
        typingElem.remove();
      }
      appendAgoraMessage(replyData.reply, replyData.allowFlashcard !== false);
    } catch (err) {
      console.warn("Processando resposta via SocraticEngine local:", err);
      if (typingElem && typingElem.parentNode) {
        typingElem.remove();
      }
      const contextText = AppState.uploadedText || '';
      const fallback = SocraticEngine.evaluateInput(userText, AppState.currentDiscipline, contextText);
      appendAgoraMessage(fallback.reply, true);
    }
  }

  // Tecla Enter no chat envia imediatamente (Shift+Enter insere quebra de linha)
  if (DOM.chatInput) {
    DOM.chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChatSubmit();
      }
    });
  }

  // Chat Submission por Formulário ou Clique no Botão de Envio
  DOM.chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleChatSubmit();
  });

  // Quick Prompt Chips
  DOM.quickPromptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.chatInput.value = btn.dataset.text;
      DOM.chatForm.dispatchEvent(new Event('submit'));
    });
  });

  DOM.btnClearChat.addEventListener('click', () => {
    if (confirm("Reiniciar diálogo socrático com a Ágora?")) {
      DOM.chatMessages.innerHTML = '';
      const prompt = KNOWLEDGE_BASE[AppState.currentDiscipline]?.initialPrompt || KNOWLEDGE_BASE.upload.initialPrompt;
      appendAgoraMessage(prompt);
    }
  });

  // Seleção de Texto no Scriptorium
  document.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText.length > 5 && DOM.readerContent.contains(selection.anchorNode)) {
      AppState.selectedTextForAgora = selectedText;
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      DOM.selectionPopover.style.top = `${window.scrollY + rect.top - 40}px`;
      DOM.selectionPopover.style.left = `${window.scrollX + rect.left}px`;
      DOM.selectionPopover.classList.remove('hidden');
      DOM.selectionPopover.classList.add('animate-popover');
    } else {
      setTimeout(() => {
        DOM.selectionPopover.classList.add('hidden');
      }, 150);
    }
  });

  DOM.btnInterrogateSelection.addEventListener('click', () => {
    DOM.selectionPopover.classList.add('hidden');
    DOM.chatInput.value = `Examinemos o seguinte trecho: "${AppState.selectedTextForAgora}". O que podemos deduzir daqui?`;
    DOM.chatInput.focus();
  });

  DOM.btnFlashcardSelection.addEventListener('click', () => {
    DOM.selectionPopover.classList.add('hidden');
    AppState.flashcards.push({
      id: Date.now(),
      discipline: AppState.currentDiscipline,
      front: `Explique a passagem selecionada do material:`,
      back: AppState.selectedTextForAgora,
      status: "obscuro"
    });
    updateFlashcardBadge();
    alert("Passagem adicionada aos seus Flashcards.");
  });

  // Modais Tabulae & Config
  DOM.btnOpenTabulae.addEventListener('click', () => {
    renderFlashcardDeck();
    DOM.modalTabulae.classList.remove('hidden');
  });

  DOM.btnCloseTabulae.addEventListener('click', () => {
    DOM.modalTabulae.classList.add('hidden');
  });

  DOM.btnPrevCard.addEventListener('click', () => {
    if (AppState.currentCardIndex > 0) {
      AppState.currentCardIndex--;
      renderFlashcardDeck();
    }
  });

  DOM.btnNextCard.addEventListener('click', () => {
    if (AppState.currentCardIndex < AppState.flashcards.length - 1) {
      AppState.currentCardIndex++;
      renderFlashcardDeck();
    }
  });

  if (DOM.btnSettings) {
    DOM.btnSettings.addEventListener('click', () => {
      DOM.modalSettings.classList.remove('hidden');
    });
  }

  // Abertura do Modal de Autenticação / Login
  if (DOM.btnHeaderLogin) {
    DOM.btnHeaderLogin.addEventListener('click', () => {
      DOM.modalAuth.classList.remove('hidden');
    });
  }

  if (DOM.sidebarUserCard) {
    DOM.sidebarUserCard.addEventListener('click', () => {
      DOM.modalAuth.classList.remove('hidden');
    });
  }

  if (DOM.btnCloseAuth) {
    DOM.btnCloseAuth.addEventListener('click', () => {
      DOM.modalAuth.classList.add('hidden');
    });
  }

  if (DOM.btnGoogleLogin) {
    DOM.btnGoogleLogin.addEventListener('click', handleGoogleLoginFlow);
  }

  // Alternador de Abas no Modal de Auth
  if (DOM.tabBtnProfiles && DOM.tabBtnCredentials) {
    DOM.tabBtnProfiles.addEventListener('click', () => {
      DOM.tabBtnProfiles.classList.add('text-white', 'border-b-2', 'border-white', 'font-semibold');
      DOM.tabBtnProfiles.classList.remove('text-textMuted');
      DOM.tabBtnCredentials.classList.remove('text-white', 'border-b-2', 'border-white', 'font-semibold');
      DOM.tabBtnCredentials.classList.add('text-textMuted');
      DOM.authPanelProfiles.classList.remove('hidden');
      DOM.authPanelCredentials.classList.add('hidden');
    });

    DOM.tabBtnCredentials.addEventListener('click', () => {
      DOM.tabBtnCredentials.classList.add('text-white', 'border-b-2', 'border-white', 'font-semibold');
      DOM.tabBtnCredentials.classList.remove('text-textMuted');
      DOM.tabBtnProfiles.classList.remove('text-white', 'border-b-2', 'border-white', 'font-semibold');
      DOM.tabBtnProfiles.classList.add('text-textMuted');
      DOM.authPanelCredentials.classList.remove('hidden');
      DOM.authPanelProfiles.classList.add('hidden');
    });
  }

  // Troca rápida de conta através do modal de Login
  document.querySelectorAll('.auth-profile-option').forEach(card => {
    card.addEventListener('click', () => {
      const uid = card.dataset.userId;
      if (uid) {
        loadUserAccount(uid);
        DOM.modalAuth.classList.add('hidden');
      }
    });
  });

  if (DOM.btnOpenSettingsFromAuth) {
    DOM.btnOpenSettingsFromAuth.addEventListener('click', () => {
      DOM.modalAuth.classList.add('hidden');
      DOM.modalSettings.classList.remove('hidden');
    });
  }

  if (DOM.formLogin) {
    DOM.formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
      const accounts = getStoredAccounts();
      const matchedUser = Object.values(accounts).find(u => u.email.toLowerCase() === email);
      if (matchedUser) {
        loadUserAccount(matchedUser.id);
        DOM.modalAuth.classList.add('hidden');
      } else {
        alert("Autenticado com sucesso.");
        DOM.modalAuth.classList.add('hidden');
      }
    });
  }

  if (DOM.btnToggleTheme) {
    DOM.btnToggleTheme.addEventListener('click', toggleTheme);
  }

  if (DOM.settingThemeSelect) {
    DOM.settingThemeSelect.addEventListener('change', (e) => {
      applyTheme(e.target.value);
    });
  }

  if (DOM.btnCloseSettings) {
    DOM.btnCloseSettings.addEventListener('click', () => {
      DOM.modalSettings.classList.add('hidden');
    });
  }

  if (DOM.btnCancelSettings) {
    DOM.btnCancelSettings.addEventListener('click', () => {
      DOM.modalSettings.classList.add('hidden');
    });
  }

  if (DOM.settingUserSelect) {
    DOM.settingUserSelect.addEventListener('change', (e) => {
      loadUserAccount(e.target.value);
    });
  }

  if (DOM.settingAiMode) {
    DOM.settingAiMode.addEventListener('change', (e) => {
      if (DOM.apiKeyContainer) {
        if (e.target.value === 'custom-api') {
          DOM.apiKeyContainer.classList.remove('hidden');
        } else {
          DOM.apiKeyContainer.classList.add('hidden');
        }
      }
    });
  }

  if (DOM.btnSaveSettings) {
    DOM.btnSaveSettings.addEventListener('click', () => {
      saveUserAccount();
      DOM.modalSettings.classList.add('hidden');
    });
  }

  if (DOM.btnResetUserData) {
    DOM.btnResetUserData.addEventListener('click', resetUserAccountData);
  }

  if (DOM.btnViewDashboardTab) {
    DOM.btnViewDashboardTab.addEventListener('click', () => {
      DOM.btnOpenTabulae.click();
    });
  }

  // ==========================================
  // 10. EVENTOS DA BARRA LATERAL, ÁGORA & TABULARIUM
  // ==========================================
  const brandLogo = document.getElementById('brand-logo');
  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      switchMainView('dashboard');
    });
  }

  const sidebarLogo = document.getElementById('sidebar-logo');
  if (sidebarLogo) {
    sidebarLogo.addEventListener('click', () => {
      switchMainView('dashboard');
    });
  }

  if (DOM.sidebarBtnDashboard) {
    DOM.sidebarBtnDashboard.addEventListener('click', () => {
      switchMainView('dashboard');
    });
  }

  if (DOM.sidebarBtnAgora) {
    DOM.sidebarBtnAgora.addEventListener('click', () => {
      switchMainView('agora');
    });
  }

  if (DOM.btnDashboardEnterAgora) {
    DOM.btnDashboardEnterAgora.addEventListener('click', () => {
      switchMainView('agora');
    });
  }

  if (DOM.btnBackToDashboard) {
    DOM.btnBackToDashboard.addEventListener('click', () => {
      switchMainView('dashboard');
    });
  }

  if (DOM.sidebarBtnTabulae) {
    DOM.sidebarBtnTabulae.addEventListener('click', () => {
      DOM.btnOpenTabulae.click();
    });
  }

  if (DOM.sidebarBtnPomo) {
    DOM.sidebarBtnPomo.addEventListener('click', () => {
      switchMainView('dashboard');
      const pomoSection = document.getElementById('pomodoro-section');
      if (pomoSection) {
        pomoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        pomoSection.classList.add('ring-2', 'ring-white/40');
        setTimeout(() => pomoSection.classList.remove('ring-2', 'ring-white/40'), 1500);
      }
      togglePomodoro();
    });
  }

  if (DOM.sidebarBtnSettings) {
    DOM.sidebarBtnSettings.addEventListener('click', () => {
      DOM.modalSettings.classList.remove('hidden');
    });
  }

  // Cards de Ação Rápida no Dashboard
  if (DOM.cardActionAgora) {
    DOM.cardActionAgora.addEventListener('click', () => {
      switchMainView('agora');
    });
  }

  if (DOM.cardActionTabulae) {
    DOM.cardActionTabulae.addEventListener('click', () => {
      DOM.btnOpenTabulae.click();
    });
  }

  if (DOM.cardActionPomo) {
    DOM.cardActionPomo.addEventListener('click', () => {
      const pomoSection = document.getElementById('pomodoro-section');
      if (pomoSection) {
        pomoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        pomoSection.classList.add('ring-2', 'ring-white/40');
        setTimeout(() => pomoSection.classList.remove('ring-2', 'ring-white/40'), 1500);
      }
      togglePomodoro();
    });
  }

  // Botões "Estudar na Ágora →" na Tabela Histórica de Sessões
  document.querySelectorAll('.btn-resume-discipline').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const disc = btn.dataset.disc;
      if (disc) {
        loadDiscipline(disc, true);
      }
    });
  });

  // Alternador de Abas de Ciclo na Seção Ágora (Superior, BNCC, Upload)
  DOM.agoraCycleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cycle = tab.dataset.cycle;
      setCycle(cycle);
      if (cycle === 'upload') {
        showUploadZone(true);
      }
    });
  });

  // Seleção de Disciplinas pelos Cards da Seção Ágora
  DOM.agoraDiscCards.forEach(card => {
    card.addEventListener('click', () => {
      const disc = card.dataset.disc;
      if (disc) {
        loadDiscipline(disc, true);
      }
    });
  });
});

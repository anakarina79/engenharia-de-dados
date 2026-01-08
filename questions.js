const questions = [
{
    "enunciado": "Um banco de dados representa aspectos do mundo real, é projetado, construído e povoado por dados e atende a uma proposta específica.",
    "correta": "C",
    "tema": "Conceitos Iniciais",
    "justificativa": "A definição clássica de Banco de Dados envolve representar um 'minimundo' com um propósito específico, armazenando dados inter-relacionados de forma organizada [1]. Analogia: É como um arquivo de aço organizado para guardar documentos específicos de uma empresa, não apenas papéis aleatórios."
  },
  {
    "enunciado": "Bancos de dados em memória são inerentemente mais seguros contra falhas de energia que bancos de dados em disco, pois eles armazenam todos os dados em uma cache volátil que é sincronizada automaticamente com o armazenamento persistente.",
    "correta": "E",
    "tema": "Tipos de Banco de Dados",
    "justificativa": "Bancos em memória (In-Memory) utilizam memória RAM, que é volátil. Se a energia cair, os dados na RAM são perdidos, a menos que haja mecanismos específicos de persistência (logs, snapshots). Eles são *menos* seguros contra falhas de energia por padrão do que discos magnéticos/SSD [2]."
  },
  {
    "enunciado": "Um banco de dados é, especificamente, um conjunto aleatório de dados não relacionados que refletem algo do mundo real.",
    "correta": "E",
    "tema": "Conceitos Iniciais",
    "justificativa": "Um banco de dados é uma coleção de dados *inter-relacionados* e organizados, não um conjunto aleatório [3]. Analogia: Uma biblioteca é organizada por gêneros e autores (banco de dados), não uma pilha de livros jogados no chão (dados aleatórios)."
  },
  {
    "enunciado": "Embora metadados de arquivos de imagens produzidas por câmeras digitais possam ser lidos e extraídos por ferramentas especializadas, eles não podem ser editados.",
    "correta": "E",
    "tema": "Metadados",
    "justificativa": "Metadados (dados sobre dados, como data da foto ou localização) podem ser editados e alterados por diversas ferramentas de software [4]."
  },
  {
    "enunciado": "Os modelos de dados físicos estabelecem uma visão abstrata do banco de dados, identificando as entidades principais e os relacionamentos entre elas.",
    "correta": "E",
    "tema": "Modelagem de Dados",
    "justificativa": "Esta descrição refere-se ao modelo *conceitual*. O modelo físico trata de detalhes de armazenamento interno, índices e estruturas de arquivos [5]. Analogia: O modelo conceitual é a planta baixa da casa; o físico é a especificação dos tijolos e encanamento."
  },
  {
    "enunciado": "O modelo entidade-relacionamento é derivado do modelo lógico e apresenta detalhes sobre o armazenamento interno dos dados.",
    "correta": "E",
    "tema": "Modelagem de Dados",
    "justificativa": "O Modelo Entidade-Relacionamento (MER) é um modelo *conceitual* de alto nível, usado antes do lógico, e não se preocupa com armazenamento interno [6]."
  },
  {
    "enunciado": "Na modelagem lógica do desenvolvimento de banco de dados, as entidades e os atributos identificados na fase conceitual são refinados e detalhados, o que envolve a definição precisa das tabelas ou classes que representarão as entidades, mas não de seus atributos correspondentes.",
    "correta": "E",
    "tema": "Modelagem Lógica",
    "justificativa": "A modelagem lógica *inclui* sim a definição detalhada dos atributos, seus tipos de dados e restrições [7]. É o passo onde desenhamos as tabelas e colunas."
  },
  {
    "enunciado": "A abstração no nível de visualização de um sistema de banco de dados apresenta as informações de forma simples, de modo que um usuário leigo é capaz de utilizar um sistema complexo.",
    "correta": "C",
    "tema": "Abstração de Dados",
    "justificativa": "O nível de visão (ou externo) simplifica a interação, escondendo a complexidade do esquema lógico e físico [8]. Analogia: O painel do carro (visão) permite dirigir sem entender a injeção eletrônica (físico)."
  },
  {
    "enunciado": "Nos sistemas de gerenciamento de banco de dados relacionais, o modelo lógico descreve como os dados são organizados em tabelas, relacionamentos e restrições, independentemente da forma como são fisicamente armazenados no disco.",
    "correta": "C",
    "tema": "Modelagem Lógica",
    "justificativa": "O modelo lógico define a estrutura (tabelas, chaves) sem se prender ao hardware ou índices físicos, permitindo a independência dos dados [8]."
  },
  {
    "enunciado": "O nível da arquitetura de um banco de dados que foca na percepção da comunidade de usuários e não em usuários individuais é o nível físico.",
    "correta": "E",
    "tema": "Arquitetura de Banco de Dados",
    "justificativa": "O nível físico foca no armazenamento. O nível que foca na comunidade de usuários (visão global sem detalhes de armazenamento) é o **conceitual** [9], [10]."
  },
  {
    "enunciado": "O nível da arquitetura de um banco de dados que foca na percepção da comunidade de usuários e não em usuários individuais é o nível conceitual.",
    "correta": "C",
    "tema": "Arquitetura de Banco de Dados",
    "justificativa": "O esquema conceitual descreve a estrutura de todo o banco de dados para a comunidade de usuários, escondendo detalhes físicos [9], [10]."
  },
  {
    "enunciado": "Modelos de dados lógicos fornecem maiores detalhes acerca dos conceitos e relacionamentos no domínio em consideração... indicando atributos de dados... e relacionamentos entre entidades, além de informar como será organizado e quais regras de negócios estão envolvidas.",
    "correta": "C",
    "tema": "Modelagem Lógica",
    "justificativa": "O modelo lógico detalha a estrutura necessária para o SGBD (tipos, chaves, relacionamentos), traduzindo as regras de negócio do modelo conceitual para uma linguagem de esquema [10]. (Nota: O gabarito oficial da questão 9 aponta Certo, embora 'regras de negócio' sejam tipicamente foco do conceitual, no lógico elas são implementadas como restrições)."
  },
  {
    "enunciado": "O arquiteto de dados é responsável por realizar alterações no esquema dos dados e na organização física da entidade para refletir as mudanças nas necessidades da organização ou para alterar a organização física para melhorar o desempenho.",
    "correta": "E",
    "tema": "Papéis em Dados",
    "justificativa": "Alterações físicas para desempenho e manutenção do esquema físico são tipicamente responsabilidade do **Administrador de Banco de Dados (DBA)**, enquanto o Arquiteto foca na estrutura e padrões de alto nível [11]."
  },
  {
    "enunciado": "O modelo lógico pode conter chaves primárias e estrangeiras e pode ser usado em vários bancos de dados, tais como SQL Server, MySql, Oracle e PostgreSql.",
    "correta": "C",
    "tema": "Modelagem Lógica",
    "justificativa": "O modelo lógico relacional é padrão e portável entre diferentes SGBDs relacionais (Oracle, SQL Server, etc.), definindo chaves e tabelas [12]."
  },
  {
    "enunciado": "Uma base de dados representa algum aspecto do mundo real, algumas vezes chamado de “minimundo”, de modo que mudanças no minimundo provocam mudanças na base de dados.",
    "correta": "C",
    "tema": "Conceitos Básicos",
    "justificativa": "Esta é a definição fundamental de banco de dados: um reflexo de um domínio do mundo real. Se o estoque real muda (minimundo), o banco de dados deve ser atualizado [13]."
  },
  {
    "enunciado": "Uma propriedade de transação de banco de dados relacional é o isolamento que garante que as alterações de dados se tornem permanentes quando a transação é confirmada.",
    "correta": "E",
    "tema": "Transações (ACID)",
    "justificativa": "A propriedade que garante permanência após confirmação é a **Durabilidade**. Isolamento garante que transações não interfiram umas nas outras [13]."
  },
  {
    "enunciado": "No banco de dados relacional, o dicionário de dados contém a especificação do desempenho das consultas contidas no banco de dados.",
    "correta": "E",
    "tema": "Dicionário de Dados",
    "justificativa": "O dicionário de dados (ou catálogo) contém metadados sobre a estrutura (tabelas, colunas, usuários), não especificações de desempenho de consultas [13]."
  },
  {
    "enunciado": "No modelo de dados físico, que é criado como parte do processo de coleta de requisitos iniciais do projeto, é possível obter uma visualização geral do conteúdo do sistema.",
    "correta": "E",
    "tema": "Fases de Projeto",
    "justificativa": "O modelo físico é a **última** etapa, focada em implementação técnica. A coleta de requisitos e visão geral ocorrem na fase de **modelo conceitual** [14]."
  },
  {
    "enunciado": "Na arquitetura de três esquemas, o nível externo apresenta uma série de visões do usuário.",
    "correta": "C",
    "tema": "Arquitetura de Três Esquemas",
    "justificativa": "O nível externo é composto por várias 'views' (visões) que personalizam o acesso aos dados para diferentes grupos de usuários, ocultando o restante do banco [15]. Analogia: Cada departamento da empresa vê apenas seus relatórios, não o banco inteiro."
  },
  {
    "enunciado": "Caso conste, no modelo de dados referente ao cadastro de empregados... o atributo idade... não é necessário que esse dado esteja fisicamente armazenado... o que caracteriza um atributo do tipo derivado.",
    "correta": "C",
    "tema": "Atributos",
    "justificativa": "Atributos derivados (como idade) podem ser calculados a partir de outros (data de nascimento) em tempo de execução, economizando armazenamento e garantindo consistência [16]."
  },
  {
    "enunciado": "A modelagem lógica de dados inclui índices e constraints, assim como chaves primária e estrangeira.",
    "correta": "C",
    "tema": "Modelagem Lógica",
    "justificativa": "Embora índices sejam frequentemente físicos, constraints (restrições) e chaves (PK, FK) são definições fundamentais do modelo lógico relacional [17]. (Nota: O gabarito da questão 18 é Certo, validando que constraints lógicas fazem parte desta fase)."
  },
  {
    "enunciado": "A modelagem lógica de um banco de dados inclui a determinação das tabelas necessárias e suas respectivas colunas, além da especificação dos tipos de dados para cada coluna.",
    "correta": "C",
    "tema": "Modelagem Lógica",
    "justificativa": "Esta é a essência do projeto lógico: traduzir entidades em tabelas e atributos em colunas com tipos definidos (int, varchar, etc.) [17]."
  },
  {
    "enunciado": "No contexto de arquitetura de dados, o modelo de dados lógicos... oferece uma visualização geral do conteúdo do sistema, como ele será organizado e quais regras de negócios estão envolvidas.",
    "correta": "E",
    "tema": "Modelagem de Dados",
    "justificativa": "Visualização geral e regras de negócio focadas no cliente são características do **modelo conceitual**. O lógico já foca na estrutura para o computador [18]."
  },
  {
    "enunciado": "O modelo lógico do banco de dados permite que uma entidade tenha atributos multivalorados, assim como permite a criação de uma entidade específica para armazenar esses atributos.",
    "correta": "E",
    "tema": "Normalização/Lógico",
    "justificativa": "No modelo lógico relacional (1ª Forma Normal), atributos não podem ser multivalorados na mesma coluna. Eles devem ser transformados em uma nova tabela (entidade específica) [19]."
  },
  {
    "enunciado": "Um registro é um conjunto de itens de dados que possuem um conjunto de atributos que pertencem a determinada entidade.",
    "correta": "C",
    "tema": "Conceitos Relacionais",
    "justificativa": "Um registro (ou tupla/linha) agrupa os valores dos atributos de uma única instância de uma entidade (ex: os dados de *um* cliente) [20]."
  },
 {
    "enunciado": "As estruturas para armazenamento dos dados e os métodos de acesso ao banco de dados fazem parte do projeto lógico de um banco de dados.",
    "correta": "E",
    "tema": "Fases de Projeto",
    "justificativa": "Estruturas de armazenamento e métodos de acesso (como índices B-Tree, hashing) são definidos no **projeto físico** [21]."
  },
  {
    "enunciado": "A modelagem de dados lógica, cujo objetivo é especificar entidades, atributos, relacionamentos e restrições, considera aspectos técnicos de implementação, como desempenho e integridade dos dados.",
    "correta": "E",
    "tema": "Modelagem de Dados",
    "justificativa": "Aspectos técnicos de implementação visando *desempenho* são tratados na modelagem física. A lógica foca na estruturação correta, não na performance de hardware [22]."
  },
  {
    "enunciado": "O particionamento, que é uma técnica utilizada para dividir o banco de dados em partes menores... garante a disponibilidade do banco de dados, especialmente em sistemas com grande volume de dados.",
    "correta": "C",
    "tema": "Administração de Dados",
    "justificativa": "Particionamento divide tabelas grandes para facilitar gerenciamento e acesso. Embora melhore a performance e gerenciamento, se uma partição falhar, apenas ela fica indisponível, aumentando a disponibilidade geral do sistema [23]."
  },
  {
    "enunciado": "Em um sistema de banco de dados, a alteração do nível interno exige a revisão de nível conceitual equivalente.",
    "correta": "E",
    "tema": "Independência de Dados",
    "justificativa": "Graças à **independência física de dados**, alterações no nível interno (físico) não devem exigir mudanças no nível conceitual ou lógico [24]. Analogia: Trocar o motor do carro não muda a posição do volante."
  },
  {
    "enunciado": "Na construção de um banco de dados, o modelo conceitual utiliza os requisitos de negócio, que são decompostos em entidades, atributos e relacionamentos atômicos, e aplica regras para evitar redundâncias.",
    "correta": "E",
    "tema": "Modelagem Conceitual",
    "justificativa": "A preocupação com 'relacionamentos atômicos' e regras estritas de redundância (normalização) é típica da fase **lógica**. O conceitual foca na comunicação e no entendimento do negócio [25]."
  },
  {
    "enunciado": "Como forma de garantir a integridade referencial, sempre que uma linha de uma tabela for removida, automaticamente as linhas de outras tabelas que fazem referência a ela também serão removidas.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "Isso descreve a regra 'CASCADE', que é *uma* opção. A integridade referencial pode também bloquear a exclusão (RESTRICT) ou setar nulo (SET NULL), não sendo 'sempre' automática a remoção [26]."
  },
  {
    "enunciado": "A modelagem conceitual representa o negócio sob a perspectiva dos dados, e, em projetos de TI, o principal objetivo de um modelo de dados conceitual é fornecer uma visão geral dos requisitos de informação envolvidos no projeto.",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "O modelo conceitual serve exatamente para alinhar o entendimento dos dados com os requisitos de negócio, sem sujar a visão com detalhes técnicos [27]."
  },
  {
    "enunciado": "A integridade referencial é uma parte essencial de qualquer banco de dados relacional, que, entre outros benefícios, facilita as consultas.",
    "correta": "C",
    "tema": "Integridade Referencial",
    "justificativa": "A integridade referencial garante que os relacionamentos entre tabelas sejam válidos (não existam órfãos), o que assegura que junções (JOINs) em consultas retornem dados consistentes [28]."
  },
  {
    "enunciado": "A modelagem dimensional é uma técnica de modelagem de banco de dados que usa um modelo de dados baseado em dimensões para organizar os dados, e as tabelas de dimensões são sempre as maiores tabelas do modelo dimensional.",
    "correta": "E",
    "tema": "Modelagem Dimensional",
    "justificativa": "No modelo dimensional, as tabelas maiores são as **Tabelas Fato** (que contêm as métricas e ocorrências de eventos). As tabelas dimensão são geralmente menores e descritivas [29]."
  },
  {
    "enunciado": "A aplicação do ciclo PCDA nos processos de construção e avaliação de modelos de dados implica que a qualidade será controlada, em vez de planejada.",
    "correta": "E",
    "tema": "Qualidade de Dados",
    "justificativa": "No ciclo PDCA (Plan, Do, Check, Act), a qualidade é **planejada** (Plan) antes de ser executada e controlada. Dizer que ela é controlada *em vez de* planejada contradiz o método [30]."
  },
  {
    "enunciado": "A avaliação de modelos de dados deve ser uma atividade formal que compreenda a elaboração de laudos técnicos que registrem observações, ressalvas e eventuais erros encontrados durante a verificação da modelagem.",
    "correta": "C",
    "tema": "Governança de Dados",
    "justificativa": "A formalização da revisão de modelos garante a qualidade e a documentação necessária para a manutenção e evolução do sistema [31]."
  },
  {
    "enunciado": "Em relação à independência de dados, a independência lógica garante que alterações no nível lógico não afetem os programas que usam os dados, enquanto a independência física garante que as alterações na estrutura de arquivos e índices não afetem o nível lógico.",
    "correta": "C",
    "tema": "Independência de Dados",
    "justificativa": "Esta é a definição exata dos dois tipos de independência na arquitetura de três esquemas [32]. Independência Lógica: altera esquema conceitual sem mudar externo. Independência Física: altera interno sem mudar conceitual."
  },
  {
    "enunciado": "Um modelo conceitual pode ser definido como aquele que mantém o registro de como os dados estão armazenados no sistema de gerenciamento de banco de dados.",
    "correta": "E",
    "tema": "Modelagem Conceitual",
    "justificativa": "O modelo conceitual é independente de hardware e software (SGBD). Ele representa o negócio, não o armazenamento físico [33]."
  },
  {
    "enunciado": "O modelo de abstração que tem como objetivo representar uma estrutura de banco de dados sem preocupação com a implementação é o modelo lógico.",
    "correta": "E",
    "tema": "Abstração de Dados",
    "justificativa": "O modelo que abstrai totalmente a implementação é o **conceitual**. O lógico já traz estruturas de implementação (tabelas, chaves) [34]."
  },
  {
    "enunciado": "O modelo de abstração que tem como objetivo representar uma estrutura de banco de dados sem preocupação com a implementação é o modelo conceitual.",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "O Modelo Conceitual foca exclusivamente na semântica dos dados e nas regras de negócio, ignorando como isso será codificado [34]."
  },
  {
    "enunciado": "Qualquer subconjunto dos campos de uma relação pode ser uma chave de pesquisa em um arquivo de índice.",
    "correta": "C",
    "tema": "Índices",
    "justificativa": "Índices podem ser criados sobre qualquer coluna ou combinação de colunas (subconjunto) para acelerar consultas baseadas nesses campos [35]."
  },
  {
    "enunciado": "O desenvolvimento de soluções inicia pela modelagem de dados conceitual, que é feita geralmente pelo gestor de dados de negócio ou outro profissional acompanhado de sua supervisão e(ou) orientação.",
    "correta": "C",
    "tema": "Papéis em Dados",
    "justificativa": "O modelo conceitual exige profundo conhecimento do negócio, sendo idealmente liderado ou orientado por quem domina as regras de negócio (gestor de dados) [36]."
  },
  {
    "enunciado": "No modelo físico de dados... os objetos são definidos no denominado nível de esquema, logo, não depende do software que já está sendo usado na organização.",
    "correta": "E",
    "tema": "Modelagem Física",
    "justificativa": "O modelo físico é altamente **dependente** do software (SGBD) escolhido, pois define tipos específicos, particionamento e indexação daquela tecnologia [37]."
  },
  {
    "enunciado": "O projeto físico do banco de dados trata do mapeamento do modelo de dados conceitual para um modelo lógico que seja possível de ser processado pelo SGBD.",
    "correta": "E",
    "tema": "Fases de Projeto",
    "justificativa": "A descrição refere-se à etapa de **Projeto Lógico**. O projeto físico vem depois, mapeando o lógico para estruturas de armazenamento [38]."
  },
  {
    "enunciado": "É possível que aconteçam atributos nulos em tabelas dimensão.",
    "correta": "C",
    "tema": "Modelagem Dimensional",
    "justificativa": "Embora evitado para chaves, atributos descritivos em tabelas de dimensão podem ser nulos se a informação não for aplicável ou desconhecida [39]."
  },
  {
    "enunciado": "Os modelos de dados representacionais incorporam alguns conceitos acerca da forma como os dados são organizados no armazenamento computacional, enquanto mantêm a facilidade de compreensão pelos usuários finais.",
    "correta": "C",
    "tema": "Modelos Representacionais",
    "justificativa": "Modelos representacionais (como o Relacional) são o meio termo: entendíveis por usuários (tabelas), mas já organizados de forma computacional (lógica) [40]."
  },
  {
    "enunciado": "Em uma arquitetura de três esquemas de banco de dados, o nível que descreve a estrutura de todo o banco de dados... com foco na descrição de entidades... é denominado nível conceitual.",
    "correta": "C",
    "tema": "Arquitetura de Banco de Dados",
    "justificativa": "O nível conceitual é a visão global e integrada da estrutura de dados da organização [41]."
  },
  {
    "enunciado": "Modelo físico é o modelo de dados que representa a estrutura de dados de um banco de dados conforme vista pelo usuário do sistema de gerenciamento de banco de dados.",
    "correta": "E",
    "tema": "Modelagem Física",
    "justificativa": "O modelo físico representa a estrutura 'como vista pelo sistema operacional/hardware'. A visão do usuário final é o nível externo ou lógico (para desenvolvedores) [42]."
  },
  {
    "enunciado": "Os esquemas de um banco de dados dividem fisicamente as tabelas, evitando o acesso cruzado entre objetos de diferentes esquemas.",
    "correta": "E",
    "tema": "Esquemas",
    "justificativa": "Esquemas (Schemas) são divisões lógicas (namespaces). Tabelas em esquemas diferentes podem se relacionar e serem acessadas, desde que haja permissão [43]."
  },
  {
    "enunciado": "A independência de dados é caracterizada pelo fato de os dados não dependerem do esquema físico e não precisarem ser reescritos se o esquema físico do banco de dados for alterado.",
    "correta": "C",
    "tema": "Independência de Dados",
    "justificativa": "Esta é a definição de **independência física**: posso criar índices ou mudar o disco (físico) sem ter que reescrever os dados ou o código da aplicação [44]."
  },
 {
    "enunciado": "Os modelos conceitual, lógico e físico são criados na etapa de projeto do banco de dados.",
    "correta": "C",
    "tema": "Ciclo de Vida de BD",
    "justificativa": "A etapa de 'Projeto de Banco de Dados' engloba as subfases de modelagem conceitual, lógica e física [45]."
  },
  {
    "enunciado": "Ao responsável pelas decisões estratégicas e de normas com relação aos dados da empresa cabe também definir o esquema conceitual.",
    "correta": "C",
    "tema": "Administração de Dados",
    "justificativa": "O Administrador de Dados (DA) lida com as definições de alto nível e regras de negócio, o que inclui a definição do esquema conceitual [46]."
  },
  {
    "enunciado": "O relacionamento entre as entidades estudante e matricula pode ser modelado sem chave estrangeira, já que a entidade matricula contém os dados necessários para identificar uma entidade estudante.",
    "correta": "E",
    "tema": "Modelo Relacional",
    "justificativa": "Em bancos relacionais, o relacionamento é materializado *exatamente* pela chave estrangeira. Sem ela, não há vínculo lógico entre as tabelas [47]."
  },
  {
    "enunciado": "A entidade matricula não necessita de chave primária composta, pois cada matricula pode ser identificada apenas pelo id_estudante.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "Se um estudante tiver várias matrículas (ex: em cursos diferentes), apenas o `id_estudante` não é único. Seria necessário `id_estudante` + `id_curso` (chave composta) ou um ID próprio para a matrícula [48]."
  },
  {
    "enunciado": "A tabela matricula é uma entidade associativa que resolve um relacionamento N para N implícito entre estudante e curso.",
    "correta": "C",
    "tema": "Entidade Associativa",
    "justificativa": "Quando temos estudantes (N) e cursos (N), surge uma tabela intermediária (Matrícula) para resolver esse relacionamento muitos-para-muitos [49]."
  },
  {
    "enunciado": "A tabela dependente, nesse caso, pode ser considerada uma entidade fraca, já que a manutenção dos registros dos dependentes está diretamente relacionada à existência do registro do servidor.",
    "correta": "C",
    "tema": "Entidade Fraca",
    "justificativa": "Uma entidade fraca não existe sem a entidade forte (pai). Se o servidor for demitido/excluído, seus dependentes perdem o sentido no contexto do sistema [50]."
  },
  {
    "enunciado": "No diagrama entidade relacionamento (DER), as interações entre dois atributos são representadas pelos relacionamentos entre si.",
    "correta": "E",
    "tema": "Diagrama ER",
    "justificativa": "Relacionamentos ocorrem entre **Entidades**, não entre atributos. Atributos descrevem entidades [51]."
  },
  {
    "enunciado": "No modelo entidade-relacionamento, os atributos multivalorados devem ser representados como atributos simples, para facilitar a normalização do banco de dados.",
    "correta": "E",
    "tema": "Atributos",
    "justificativa": "No modelo conceitual (ER), atributos multivalorados são representados explicitamente (elipse dupla). No lógico/relacional, eles viram tabelas separadas, não atributos simples [52]."
  },
  {
    "enunciado": "Pode haver várias consultas entre um MÉDICO e determinado PACIENTE, mas, se for este o caso, o atributo data/hora deve ser movido para PACIENTE.",
    "correta": "E",
    "tema": "Diagrama ER",
    "justificativa": "O atributo data/hora pertence ao **evento** da consulta (ao relacionamento), não ao paciente. Um paciente tem data de nascimento, mas a consulta tem data/hora [53]."
  },
  {
    "enunciado": "Pode haver várias consultas entre um MÉDICO e determinado PACIENTE, caso em que o atributo data/hora será um atributo identificador do relacionamento CONSULTA.",
    "correta": "C",
    "tema": "Identificadores",
    "justificativa": "Para distinguir múltiplas consultas entre as mesmas pessoas, usa-se a data/hora como parte da chave identificadora do relacionamento [53]."
  },
  {
    "enunciado": "A cardinalidade mínima e máxima do atributo A1, conforme representado no DER, é igual a 1.",
    "correta": "E",
    "tema": "Cardinalidade",
    "justificativa": "A1 parece ser um atributo chave (identificador), mas a cardinalidade geralmente se refere a relacionamentos. Se A1 for chave primária, ele é único (cardinalidade 1 no contexto de identificação), mas a questão refere-se à representação específica do diagrama fornecido na fonte [54]."
  },
  {
    "enunciado": "Assinale a opção em que são apresentados somente elementos que devem ser modelados como entidades: cliente, conta, transação, funcionário, agência.",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "Todos esses itens representam objetos ou eventos do mundo real com existência própria e atributos, caracterizando-os como entidades [55]."
  },
  {
    "enunciado": "Atributos derivados são aqueles cujo valor pode ser calculado a partir de outros atributos armazenados no banco de dados.",
    "correta": "C",
    "tema": "Atributos",
    "justificativa": "Exemplo clássico: Idade é derivada da Data de Nascimento. Total é derivado de Preço x Quantidade [56]."
  },
  {
    "enunciado": "Endereço deve ser modelado como entidade, já que contém múltiplos campos e se relaciona com o cliente.",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "(Depende do contexto, mas a questão aponta isso como correto no cenário da agência). Se o endereço é complexo e compartilhado, modelá-lo como entidade é uma boa prática de normalização [57]."
  },
  {
    "enunciado": "Uma entidade fraca é aquela que possui chave primária composta por mais de um atributo.",
    "correta": "E",
    "tema": "Entidade Fraca",
    "justificativa": "Entidade fraca é aquela que depende da existência de outra entidade para ser identificada. Ter chave composta não define fraqueza (entidades fortes também podem ter) [58]."
  },
  {
    "enunciado": "A generalização permite que se abstraiam características comuns de entidades em uma entidade-pai mais genérica.",
    "correta": "C",
    "tema": "Generalização/Especialização",
    "justificativa": "Exemplo: 'Pessoa' é uma generalização de 'Aluno' e 'Professor', contendo atributos comuns como Nome e CPF [58]."
  },
  {
    "enunciado": "A cardinalidade em modelagem de dados define a relação entre duas entidades, indicando quantos elementos (máximos e mínimos) de uma entidade podem estar relacionados com elementos de outra entidade.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "Essa é a definição de cardinalidade (ex: 1:1, 1:N, N:N), crucial para definir as regras de integridade do banco [59]."
  },
  {
    "enunciado": "Cardinalidades são restrições em relacionamentos e podem ter quatro diferentes variações: 1:1, 1:N, N:1 e N:N.",
    "correta": "E",
    "tema": "Cardinalidade",
    "justificativa": "Existem basicamente três tipos: 1:1, 1:N e N:N. (N:1 é apenas o inverso de 1:N, não um tipo fundamentalmente diferente na teoria clássica, embora usado na notação) [60]. (Nota: O gabarito 60 é Certo, aceitando N:1 como variação válida na leitura). **Correção:** O gabarito da questão 60 é B (Errado), provavelmente porque a cardinalidade é tipicamente apresentada como pares (min, max) ou os três tipos básicos. Vamos seguir o gabarito Errado."
  },
  {
    "enunciado": "No Relacionamento entre a Entidade1 e a Entidade2, os pés de galinha em ambos os lados indicam uma relação muitos para muitos entre as entidades.",
    "correta": "C",
    "tema": "Notação Pé de Galinha",
    "justificativa": "A notação 'Crow's Foot' (Pé de Galinha) usa o símbolo de três pontas para indicar o lado 'Muitos' (N). Se está em ambos os lados, é N:N [61]."
  },
  {
    "enunciado": "O relacionamento hipotético entre as entidades Pessoa e Celular que melhor define a propriedade atual do aparelho é de cardinalidade N:N.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "Uma pessoa pode ter vários celulares, e um celular (ao longo da vida ou em planos familiares/compartilhados) pode estar associado a várias pessoas? No contexto de 'propriedade atual' simplificada, costuma ser 1:N, mas a questão considera N:N como correto para o cenário específico (talvez histórico ou uso compartilhado) [62]."
  },
  {
    "enunciado": "No diagrama entidade e relacionamento, verifica-se um exemplo clássico de autorrelacionamento para a entidade Disciplina.",
    "correta": "C",
    "tema": "Autorrelacionamento",
    "justificativa": "Autorrelacionamento (ou relacionamento recursivo) ocorre quando uma entidade se relaciona com ela mesma. Ex: Uma disciplina é pré-requisito de outra disciplina [63]."
  },
 {
    "enunciado": "Para facilitar o design ou projeto de banco de dados, é correto o uso de entidade-relacionamento.",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "O modelo Entidade-Relacionamento (MER) é a ferramenta padrão para o design conceitual, permitindo visualizar as estruturas de dados antes da implementação física."
  },
  {
    "enunciado": "No Diagrama de Entidade e Relacionamento (DER), as entidades são mostradas como retângulos e seus atributos podem ser associados diretamente a esses retângulos, o que simplifica a notação.",
    "correta": "C",
    "tema": "Notação DER",
    "justificativa": "Na notação padrão de Peter Chen e variações, retângulos representam entidades e elipses (ou linhas conectadas) representam atributos."
  },
  {
    "enunciado": "O principal objetivo do modelo de entidade e relacionamento é facilitar o projeto do banco de dados, possibilitando especificar a estrutura física geral do banco de dados.",
    "correta": "E",
    "tema": "Modelagem Conceitual",
    "justificativa": "O objetivo do MER é especificar a estrutura **conceitual** e lógica, não a física (armazenamento em disco, índices). O físico depende do SGBD específico."
  },
  {
    "enunciado": "Definir um atributo como chave do tipo entidade significa que a propriedade de unicidade deve ocorrer para pelo menos uma entidade, portanto, quaisquer duas ou mais entidades podem ter, ao mesmo tempo, o mesmo valor para o atributo-chave.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "Se um atributo é chave (identificador), ele deve ser único para **cada** ocorrência da entidade. Duas entidades não podem ter o mesmo valor de chave."
  },
  {
    "enunciado": "O modelo conceitual de um banco de dados concebido por meio da abordagem entidade-relacionamento é usualmente representado por meio do diagrama entidade-relacionamento (DER).",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "O DER é a representação gráfica do Modelo Entidade-Relacionamento (MER)."
  },
  {
    "enunciado": "No modelo entidade-relacionamento, relacionamentos N:N são convertidos para duas tabelas físicas com chave estrangeira.",
    "correta": "E",
    "tema": "Mapeamento Lógico",
    "justificativa": "Um relacionamento N:N gera uma **terceira** tabela (associativa) que contém as chaves primárias das duas entidades originais como chaves estrangeiras."
  },
  {
    "enunciado": "O modelo entidade-relacionamento (MER) é um modelo de programação de banco de dados que utiliza a linguagem SQL para criar e gerenciar as tabelas e os dados.",
    "correta": "E",
    "tema": "Conceitos Básicos",
    "justificativa": "O MER é um modelo **conceitual** de design, não uma linguagem de programação ou SQL. SQL é usado na implementação (fase posterior)."
  },
  {
    "enunciado": "Nos diagramas de entidades e relacionamentos, o particionamento de entidades se dá por especialização quando uma entidade de nível mais alto de abstração é desmembrada em duas ou mais entidades de nível mais baixo.",
    "correta": "C",
    "tema": "Especialização",
    "justificativa": "Especialização é o processo 'Top-Down': pegar uma entidade genérica (ex: Pessoa) e criar subclasses específicas (ex: Pessoa Física, Pessoa Jurídica)."
  },
  {
    "enunciado": "Todo relacionamento muitos-para-muitos pode ser entendido como uma entidade dissociativa.",
    "correta": "E",
    "tema": "Relacionamentos",
    "justificativa": "O termo correto é entidade **associativa**. Ela surge para resolver a relação N:N, transformando o relacionamento em uma entidade que pode ter atributos próprios."
  },
  {
    "enunciado": "Em geral, sempre que existir um relacionamento com cardinalidade de um-para-muitos, a referência lógica (chave estrangeira) estará colocada na entidade que possuir o lado um da cardinalidade.",
    "correta": "E",
    "tema": "Mapeamento Lógico",
    "justificativa": "A chave estrangeira fica no lado **Muitos** (N), apontando para o lado Um (1). Analogia: Vários filhos (N) têm o sobrenome do pai (1); o 'ponteiro' fica no filho."
  },
  {
    "enunciado": "O Modelo Entidade Relacionamento (MER) tem por objetivo modelar de forma concreta/física um banco de dados.",
    "correta": "E",
    "tema": "Modelagem Conceitual",
    "justificativa": "O MER modela de forma **abstrata/conceitual**, independente da implementação física."
  },
  {
    "enunciado": "O modelo entidade-relacionamento permite a criação de um relacionamento do tipo associativo, que é originado de outros dois relacionamentos.",
    "correta": "E",
    "tema": "Entidade Associativa",
    "justificativa": "Uma entidade associativa nasce de **um** relacionamento (geralmente N:N) entre entidades, e não da junção de dois relacionamentos distintos."
  },
  {
    "enunciado": "Se a entidade Inscricao associa cada dupla inscrita às cinco ocorrências da entidade Prova, então Prova é uma entidade fraca.",
    "correta": "E",
    "tema": "Entidade Fraca",
    "justificativa": "Prova existe independentemente da inscrição (as provas são definidas pelo torneio). A Inscrição que depende das provas e das duplas."
  },
  {
    "enunciado": "No modelo apresentado (Cliente solicita Treinamento), um treinamento pode ser solicitado por no máximo um cliente.",
    "correta": "E",
    "tema": "Cardinalidade",
    "justificativa": "A cardinalidade é (0,n) de ambos os lados (Cliente solicita N Treinamentos, Treinamento é solicitado por N Clientes). É um N:N."
  },
  {
    "enunciado": "Na notação IDEF1X, uma entidade dependente é representada por retângulos com os cantos arredondados.",
    "correta": "C",
    "tema": "Notação IDEF1X",
    "justificativa": "IDEF1X usa convenções específicas: cantos quadrados para entidades independentes e arredondados para dependentes."
  },
  {
    "enunciado": "No modelo apresentado, uma entidade PROMOTORIA_JUSTIÇA pode estar localizada em várias entidades COMARCA.",
    "correta": "C",
    "tema": "Leitura de Diagrama",
    "justificativa": "A cardinalidade (0,n) ao lado de Comarca (no pé de galinha ou texto) indica que uma Promotoria pode se relacionar com múltiplas Comarcas."
  },
  {
    "enunciado": "O modelo entidade relacionamento (MER) representa a estrutura física de um banco de dados relacional.",
    "correta": "E",
    "tema": "Modelagem Conceitual",
    "justificativa": "MER representa a estrutura lógica/conceitual, não a física (bits, bytes, blocos de disco)."
  },
  {
    "enunciado": "No MER, a entidade associativa é utilizada para representar um relacionamento entre relacionamentos.",
    "correta": "E",
    "tema": "Entidade Associativa",
    "justificativa": "Entidade associativa representa um relacionamento entre **entidades** que ganhou atributos próprios ou participa de outros relacionamentos."
  },
  {
    "enunciado": "No diagrama apresentado (Companhia-Possui-Mercadoria-Venda), várias vendas contêm 1 mercadoria.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "O diagrama mostra Venda (0,n) --- Contém --- (1,n) Mercadoria. (A interpretação depende da leitura da notação específica da questão, mas geralmente N junto à entidade indica 'muitos' daquela entidade)."
  },
  {
    "enunciado": "No diagrama apresentado, 1 companhia possui muitas mercadorias.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "Companhia (1,1) --- Possui --- (0,n) Mercadoria. Uma companhia (1) possui N mercadorias."
  },
  {
    "enunciado": "Na abordagem entidade-relacionamento, um para muitos (1:N) representa uma das classificações dos relacionamentos binários.",
    "correta": "C",
    "tema": "Relacionamentos",
    "justificativa": "Relacionamentos binários (entre duas entidades) são classificados como 1:1, 1:N ou N:N."
  },
  {
    "enunciado": "O modelo entidade-relacionamento apresenta uma das visões disponíveis dos dados de uma aplicação.",
    "correta": "C",
    "tema": "Modelagem de Dados",
    "justificativa": "Sim, apresenta a visão conceitual, focada nas regras de negócio e semântica."
  },
  {
    "enunciado": "Um relacionamento N:N no modelo entidade-relacionamento dá origem a uma tabela associativa no modelo físico do banco de dados.",
    "correta": "C",
    "tema": "Mapeamento Lógico/Físico",
    "justificativa": "A única forma de implementar N:N em bancos relacionais é criando uma tabela intermediária (associativa) com as chaves das duas tabelas originais."
  },
  {
    "enunciado": "Quando um relacionamento entre duas entidades passa a ser tratado também como uma entidade, é gerada uma entidade associativa.",
    "correta": "C",
    "tema": "Entidade Associativa",
    "justificativa": "Isso ocorre quando o relacionamento precisa ter atributos próprios (ex: Data da matrícula no relacionamento Aluno-Curso)."
  },
  {
    "enunciado": "No diagrama Apolice/Carro, uma Apolice pode estar associada a mais de uma instância de Carro, cujo atributo identificador é Registro.",
    "correta": "E",
    "tema": "Leitura de Diagrama",
    "justificativa": "O diagrama mostra Apolice (1,n) --Cobre-- (1,1) Carro (ou leitura inversa dependendo da notação). Se for (1,1) no lado do carro, um carro tem uma apólice, mas uma apólice cobre N carros? É preciso verificar a notação exata 'pé de galinha'. A questão foi gabaritada como Errada, indicando que a leitura correta do diagrama específico contradiz a afirmação."
  },
{
    "enunciado": "Considere que, para uma instância da entidade A, existe zero, uma ou muitas instâncias da entidade B; mas para uma instância da entidade B, existe zero ou uma instância da entidade A. Nesse caso, trata-se de um relacionamento 1:n da entidade A para entidade B.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "Se um A tem muitos B, e um B tem apenas um A, a relação é 1:N (Um para Muitos)."
  },
  {
    "enunciado": "Em banco de dados relacionais, o mapeamento do relacionamento não deve seguir a cardinalidade, pois a pluralidade dos tipos de cardinalidade dificulta o mapeamento.",
    "correta": "E",
    "tema": "Mapeamento Lógico",
    "justificativa": "O mapeamento **depende** inteiramente da cardinalidade. 1:N vira chave estrangeira; N:N vira tabela nova. Ignorar a cardinalidade torna o mapeamento impossível."
  },
  {
    "enunciado": "A modelagem está incorreta pois Doenca_Pessoa deveria ter as chaves estrangeiras como parte da chave primária.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Em tabelas associativas (resolvendo N:N), a chave primária é tipicamente composta pelas duas chaves estrangeiras (IdPessoa + IdDoenca), a menos que se crie uma chave artificial (surrogate)."
  },
  {
    "enunciado": "Para que o modelo ER atenda aos padrões, o atributo CAPACIDADE_PRODUTIVA deve ser representado na entidade TIPO e não na entidade PLATAFORMA.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Se a capacidade produtiva depende do *Tipo* da plataforma (e não da plataforma individualmente), mover o atributo evita redundância (Normalização)."
  },
  {
    "enunciado": "A restrição de disjunção especifica que as subclasses da especialização devem ser conjuntos disjuntos (uma entidade membro de no máximo uma subclasse).",
    "correta": "B",
    "tema": "Especialização",
    "justificativa": "(Nota: Gabarito 82 é B/Errado? Na teoria, disjunção significa disjunto. *Verificação*: Se a questão considera 'Errado', pode ser devido a uma pegadinha na definição de 'restrição de disjunção' versus 'overlapping'. Mas a definição clássica é: Disjoint = não pode estar em ambos. Se o gabarito é Errado, talvez o erro esteja na generalização do conceito para *todas* as especializações ou terminologia específica da banca)."
  },
  {
    "enunciado": "Uma cardinalidade N:N no modelo lógico de um banco de dados relacional gera três tabelas no modelo físico.",
    "correta": "D",
    "tema": "Mapeamento",
    "justificativa": "Gera 3 tabelas: Tabela A, Tabela B e Tabela Associativa AB. (Nota: Gabarito 83 é D/Certo? A fonte diz [1] e gabarito 83. Se gabarito for Certo, confirma a regra das 3 tabelas)."
  },
  {
    "enunciado": "Em um diagrama entidade-relacionamento (DER), uma entidade é representada graficamente por meio de um retângulo.",
    "correta": "E",
    "tema": "Notação DER",
    "justificativa": "Gabarito diz Errado. (Nota: Embora retângulo seja o padrão Chen, pode haver pegadinha sobre 'entidade' vs 'instância' ou outra notação como elipse na banca específica. Mas padrão é retângulo)."
  },
  {
    "enunciado": "Um modelo entidade e relacionamento (ER) é formal, preciso, não ambíguo e pode ser usado como entrada a uma ferramenta CASE na geração de um banco de dados relacional.",
    "correta": "E",
    "tema": "Modelagem Conceitual",
    "justificativa": "O modelo ER (Peter Chen) original é semi-formal e pode ter ambiguidades de interpretação se não padronizado. Ferramentas CASE geralmente usam notações mais rigorosas (como IDEF1X ou IE) baseadas no ER."
  },
  {
    "enunciado": "O diagrama representa que cada chefe pode ter n colaboradores e cada colaborador pode ter muitos chefes.",
    "correta": "E",
    "tema": "Leitura de Diagrama",
    "justificativa": "O diagrama mostra 'tem como chefe 1'. Isso indica que um colaborador tem apenas 1 chefe (1:N), não muitos chefes (N:N)."
  },
  {
    "enunciado": "No modelo entidade × relacionamento, os atributos determinantes identificam um valor específico na tabela, podendo existir mais de um valor simultaneamente.",
    "correta": "E",
    "tema": "Identificadores",
    "justificativa": "Atributos determinantes (identificadores/chaves) devem identificar **unicamente** uma instância. Não podem existir valores duplicados que identifiquem a mesma coisa de forma ambígua."
  },
  {
    "enunciado": "De acordo com o relacionamento indicado por #1 (Diagrama Empregado/Projeto), Empregado possui vários projetos relacionados a ele, havendo, no mínimo, um Projeto.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "A notação 'Pé de galinha' com um traço (ou círculo preenchido/traço) indica cardinalidade mínima 1 e máxima N."
  },
  {
    "enunciado": "De acordo com o diagrama Multa/Automovel, cada Multa deve ser de um e somente um automóvel, e cada Automóvel pode ter uma ou muitas multas.",
    "correta": "E",
    "tema": "Leitura de Diagrama",
    "justificativa": "O diagrama precisa ser analisado cuidadosamente. Se a multa existe sem carro ou se carro pode ter zero multas. Geralmente (1,1) em multa aponta para carro (obrigatório), e (0,n) em carro aponta para multa (opcional). Se a questão diz 'uma ou muitas' (1..N) para carro, mas o diagrama for (0..N), está errado."
  },
  {
    "enunciado": "Os relacionamentos entre os elementos de um sistema podem ser expressos por meio de diagramas como o modelo entidade-relacionamento (MER).",
    "correta": "C",
    "tema": "Modelagem Conceitual",
    "justificativa": "O MER é exatamente para isso: expressar entidades e seus relacionamentos."
  },
  {
    "enunciado": "No modelo de entidade-relacionamento, entidade normalmente representa um objeto do mundo real.",
    "correta": "A",
    "tema": "Conceitos Básicos",
    "justificativa": "(Nota: Gabarito 91 é A? Isso deve ser Certo. Entidade = Objeto do mundo real, concreto ou abstrato)."
  },
  {
    "enunciado": "No modelo de entidade-relacionamento, uma entidade é representada por um conjunto de atributos.",
    "correta": "E",
    "tema": "Conceitos Básicos",
    "justificativa": "Uma entidade é descrita por atributos, mas ela *não é* apenas um conjunto de atributos; ela é a representação do objeto em si. O conjunto de atributos forma a estrutura, mas o conceito de entidade é mais amplo."
  },
  {
    "enunciado": "O modelo entidade-relacionamento não permite estabelecer relacionamentos entre relacionamentos. Para associar uma entidade com a ocorrência de um relacionamento, utiliza-se entidade associativa.",
    "correta": "C",
    "tema": "Entidade Associativa",
    "justificativa": "Correto. Relacionamentos conectam entidades. Se preciso conectar algo a um relacionamento, transformo esse relacionamento em uma entidade (associativa/agregada)."
  },
  {
    "enunciado": "No modelo em questão (Advogado/Processo/Comarca), há a presença de dois relacionamentos: Tramitação e Responsável.",
    "correta": "E",
    "tema": "Leitura de Diagrama",
    "justificativa": "A leitura correta depende de verificar se não há outros relacionamentos ou se a terminologia está correta. (Gabarito 94 é Errado. Provavelmente há mais detalhes ou interpretação de atributos)."
  },
  {
    "enunciado": "Um banco de dados é representado por uma tabela lógica, constituída por colunas, que são os registros, e linhas, que são os campos.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "Inverso: Colunas são Campos (Atributos), Linhas são Registros (Tuplas)."
  },
  {
    "enunciado": "Caso se deseje armazenar no banco de dados o histórico de lotações do empregado ao longo do tempo, o modelo está correto (Diagrama Empregado-Lotação-Departamento).",
    "correta": "C",
    "tema": "Histórico/Modelagem",
    "justificativa": "Para histórico, o relacionamento 'Lotação' deve ser N:N (Empregado lotado em vários departamentos ao longo do tempo) e possuir atributo de Data/Período. Se o diagrama mostra isso, está correto."
  },
  {
    "enunciado": "Com base no diagrama, um item na entidade Ambiente pode não relacionar-se com nenhum item na entidade Setor ou pode relacionar-se com vários itens nesta entidade.",
    "correta": "E",
    "tema": "Leitura de Diagrama",
    "justificativa": "Verificar cardinalidade (0,n) ou (1,n). Se for (1,1), a afirmação 'pode não relacionar-se' estaria errada."
  },
  {
    "enunciado": "No diagrama apresentado, a modalidade obrigatória que conecta transportador e transporta indica que, para todo alimento fabricado, é necessária uma ação de transporte.",
    "correta": "C",
    "tema": "Leitura de Diagrama",
    "justificativa": "Se a linha é sólida ou tem cardinalidade mínima 1, a participação é obrigatória (Total)."
  },
  {
    "enunciado": "A cardinalidade e a modalidade apresentada para a entidade fabricante mostram que obrigatoriamente um fabricante inicializa a ação de solicitação de distribuição, contratação de transporte e produção de alimento.",
    "correta": "C",
    "tema": "Leitura de Diagrama",
    "justificativa": "Indica dependência existencial ou regras de negócio onde o fabricante é o ponto de partida obrigatório dos processos."
  },
  {
    "enunciado": "No modelo entidade relacionamento, as entidades representam um objeto do mundo real e o relacionamento entre esses objetos.",
    "correta": "C",
    "tema": "Conceitos Básicos",
    "justificativa": "Definição clássica: Entidades = Coisas; Relacionamentos = Associações entre coisas."
  },
  {
    "enunciado": "Todos os serviços, independentemente do tipo de cada um deles, são tributados por todos os países.",
    "correta": "C",
    "tema": "Leitura de Diagrama",
    "justificativa": "Se o relacionamento 'Tributação' conecta País e Serviço sem restrições condicionais visíveis no diagrama conceitual básico, entende-se a possibilidade universal, ou a questão refere-se a uma regra de negócio específica implícita."
  },
  {
    "enunciado": "Um PAÍS pode, ou não, tributar um SERVIÇO.",
    "correta": "E",
    "tema": "Cardinalidade",
    "justificativa": "Se a cardinalidade mínima for 0 (0,n), então 'pode ou não'. Se for 1, é obrigatório. (Gabarito 102 é Errado, sugerindo que a leitura correta do diagrama impõe obrigatoriedade ou outra restrição)."
  },
  {
    "enunciado": "O modelo em questão apresenta um erro de construção, porque existem atributos declarados com nomes idênticos (Código em País e Serviço).",
    "correta": "E",
    "tema": "Atributos",
    "justificativa": "Não é erro. Entidades diferentes podem ter atributos com o mesmo nome (ex: id, nome, código). O qualificador (País.Código, Serviço.Código) resolve a ambiguidade."
  },
  {
    "enunciado": "O modelo em tela não poderá ser implementado porque contém um relacionamento n:n.",
    "correta": "E",
    "tema": "Implementação",
    "justificativa": "Modelos conceituais com N:N são perfeitamente válidos. Na implementação (lógico/físico), eles são transformados em tabelas associativas."
  },
  {
    "enunciado": "A entidade SERVIÇO é um exemplo clássico de entidade associativa ou entidade fraca.",
    "correta": "C",
    "tema": "Tipos de Entidade",
    "justificativa": "(Nota: Depende do diagrama. Se Serviço não tem chave própria ou depende de País para existir, é fraca. Gabarito 105 é Certo)."
  },
{
    "enunciado": "Um esquema de banco de dados corresponde a um conjunto de registros formado por colunas, entre as quais se inclui a chave primária.",
    "correta": "C",
    "tema": "Esquema",
    "justificativa": "O esquema define a estrutura (intensão): nome da tabela, colunas (atributos) e chaves."
  },
  {
    "enunciado": "A herança entre entidades pode ser implementada com tabelas separadas por subclasse ou com uma única tabela para a hierarquia.",
    "correta": "C",
    "tema": "Mapeamento de Herança",
    "justificativa": "Existem três estratégias principais: Tabela por hierarquia (com discriminador), Tabela por subclasse (com FK para superclasse) ou Tabela por classe concreta."
  },
  {
    "enunciado": "A relação muitos-para-muitos pode ser representada diretamente entre duas tabelas sem a necessidade de tabelas intermediárias.",
    "correta": "C",
    "tema": "Modelo Relacional",
    "justificativa": "(Gabarito 108 é Certo?? Isso contradiz a teoria relacional clássica onde N:N exige tabela associativa. *Correção:* A questão pode estar se referindo a bancos *não* relacionais ou a uma representação conceitual. Se for estritamente relacional e físico, está errado. Verificando o gabarito original: 108 é Certo. *Interpretação:* Talvez se refira à representação *lógica* antes da normalização ou em ferramentas específicas, mas é atípico)."
  },
  {
    "enunciado": "A modelagem do tipo relacional organiza os dados em forma de tabelas, com linhas e colunas, e utiliza os elementos de medidas e dimensões.",
    "correta": "E",
    "tema": "Relacional vs Dimensional",
    "justificativa": "Medidas e Dimensões são conceitos de **Business Intelligence (BI)** e modelagem dimensional (Data Warehouse). O modelo relacional foca em Entidades e Relacionamentos normalizados."
  },
  {
    "enunciado": "As chaves primárias em um banco de dados relacional são usadas para identificar unicamente cada registro em uma tabela.",
    "correta": "A",
    "tema": "Chave Primária",
    "justificativa": "Função básica da PK: unicidade e identificação. (Gabarito 110 é A? Deve ser Certo)."
  },
  {
    "enunciado": "Esquema de banco de dados é um conjunto de tabelas, registros e campos que representam uma entidade do mundo real.",
    "correta": "E",
    "tema": "Esquema",
    "justificativa": "Esquema é a **estrutura** (metadados). O conjunto de registros (dados) é a instância ou estado do banco."
  },
  {
    "enunciado": "Restrições de integridade são utilizadas para garantir que uma informação seja do tipo de dado definido no banco de dados.",
    "correta": "A",
    "tema": "Integridade",
    "justificativa": "Sim, restrições de domínio (tipo de dado, check) garantem a validade dos dados. (Gabarito 112 é A? Deve ser Certo)."
  },
  {
    "enunciado": "As tuplas em uma relação são identificadas por meio da chave primária.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "(Gabarito 113 é Errado? Talvez porque a identificação conceitual é feita pela chave, mas a tupla em si é o conjunto de valores. Ou porque chaves candidatas também identificam. Mas na prática, usamos a PK)."
  },
  {
    "enunciado": "Em um banco de dados relacional, cada linha na tabela é um registro com um identificador, cada coluna da tabela representa um atributo.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "(Gabarito 114 é Errado. Possivelmente por detalhe técnico na definição de 'registro com identificador' - nem toda linha precisa ter ID explícito em teoria pura, embora na prática tenha)."
  },
  {
    "enunciado": "Uma chave primária é um atributo cujo valor deve ser distinto em qualquer instância da relação... exige que a chave seja formada por um único campo.",
    "correta": "C",
    "tema": "Chave Primária",
    "justificativa": "Errado. Chave primária pode ser **composta** (mais de um campo). A unicidade é do *conjunto* de atributos da chave, não necessariamente de um campo só."
  },
  {
    "enunciado": "Sabendo-se que a coluna segurado_id na tabela beneficio é uma chave estrangeira... é correto inferir que a integridade referencial é mantida (Exemplo com ID 103 referenciando ID 3 inexistente).",
    "correta": "C",
    "tema": "Integridade Referencial",
    "justificativa": "Se existe um Benefício apontando para Segurado 3, e o Segurado 3 não existe na tabela de segurados, a integridade foi **violada**, não mantida. (Gabarito 116 é Certo? Se o gabarito diz certo, verifique se no enunciado completo o ID 3 existe. No trecho fornecido: Segurados são 1 e 2. Benefício 103 aponta 3. Logo, integridade violada. Se o gabarito é Certo, há erro na transcrição ou interpretação)."
  },
  {
    "enunciado": "O armazenamento dos pagamentos das parcelas dos contratos requer a criação de uma tabela com uma chave estrangeira referenciando a tabela contrato.",
    "correta": "E",
    "tema": "Modelagem 1:N",
    "justificativa": "Sim. Um contrato tem vários pagamentos. A tabela Pagamento deve ter a FK do Contrato."
  },
  {
    "enunciado": "A chave primária da tabela contrato deve ser uma chave primária composta pelo id_servidor e o id_produto.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Se um servidor pode contratar o mesmo produto diversas vezes (conforme enunciado), a combinação (servidor + produto) **não é única**. Precisa de data ou um ID próprio para o contrato."
  },
  {
    "enunciado": "Bancos de dados relacionais são compostos de tabelas, unidas mediante valores comuns de linha/coluna, ou chaves.",
    "correta": "E",
    "tema": "Modelo Relacional",
    "justificativa": "Correto. As relações (joins) são feitas comparando valores de colunas (chaves) entre tabelas."
  },
  {
    "enunciado": "Uma instância de um banco de dados SQL compreende a organização lógica dos dados com seus atributos e seus domínios correspondentes.",
    "correta": "C",
    "tema": "Instância vs Esquema",
    "justificativa": "A descrição refere-se ao **Esquema**. Instância é o conjunto de dados (conteúdo) em um dado momento."
  },
  {
    "enunciado": "O modelo de dados relacional representa um banco de dados como uma estrutura de árvore hierárquica.",
    "correta": "E",
    "tema": "Modelos de Dados",
    "justificativa": "Esse é o Modelo Hierárquico. O Relacional usa tabelas (relações), não árvores."
  },
  {
    "enunciado": "O modelo relacional de bancos de dados é caracterizado por implementar estruturas multidimensionais para análises de dados.",
    "correta": "C",
    "tema": "Relacional vs Dimensional",
    "justificativa": "Errado. Estruturas multidimensionais (Cubos) são características de bancos OLAP/Dimensional, não do Relacional puro (OLTP)."
  },
  {
    "enunciado": "A sigla ETL, sempre que empregada, se refere a extract, transform and load.",
    "correta": "E",
    "tema": "ETL",
    "justificativa": "Sim, Extrair, Transformar e Carregar. É o processo padrão de integração de dados."
  },
  {
    "enunciado": "As restrições de integridade referencial no modelo relacional asseguram que valores em colunas de chave estrangeira devem corresponder a valores existentes nas colunas de chave primária da tabela referenciada.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "Definição correta. Não posso citar um pai que não existe."
  },
  {
    "enunciado": "No modelo relacional, os dados são organizados no banco em uma estrutura hierárquica, onde cada registro possui um único registro pai.",
    "correta": "C",
    "tema": "Modelos de Dados",
    "justificativa": "Descrição do Modelo Hierárquico, incorreta para o Relacional."
  },
{
    "enunciado": "A relação B possui duas chaves primárias, denominadas B1 e B2.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Uma tabela só pode ter **uma** chave primária. Ela pode ser *composta* por duas colunas (B1 e B2), mas continua sendo uma única chave."
  },
  {
    "enunciado": "No que se refere ao DER, as cardinalidades do relacionamento R1 estão corretamente implementadas no MR.",
    "correta": "C",
    "tema": "Mapeamento DER-MR",
    "justificativa": "Exige análise visual da imagem. Se o lado 1 virou Unique/PK e o lado N recebeu a FK, está correto."
  },
  {
    "enunciado": "As chaves estrangeiras, no contexto de banco de dados relacional, garantem a integridade referencial entre as tabelas que armazenam informações.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "Correto. É a função principal das FKs."
  },
  {
    "enunciado": "No processo de modelagem relacional de dados, uma chave estrangeira corresponde ao atributo de uma tabela que referencia a chave primária de outra tabela.",
    "correta": "A",
    "tema": "Chave Estrangeira",
    "justificativa": "Definição exata. (Gabarito 149 é A/Certo)."
  },
  {
    "enunciado": "Superchave é qualquer conjunto de atributos que identifica unicamente uma tupla em uma relação.",
    "correta": "D",
    "tema": "Superchave",
    "justificativa": "Correto. A Chave Primária é a superchave mínima escolhida para ser o identificador principal."
  },
  {
    "enunciado": "Os três principais elementos de um banco de dados relacional são tabelas, colunas e linhas.",
    "correta": "E",
    "tema": "Estrutura Relacional",
    "justificativa": "Tabelas (Relações), Colunas (Atributos) e Linhas (Tuplas) formam a base física/lógica."
  },
  {
    "enunciado": "Nos bancos de dados relacionais, a estrutura que armazena objetos, tais como tabelas e índices, é conhecida como tablespace.",
    "correta": "D",
    "tema": "Armazenamento Físico",
    "justificativa": "Tablespace é a unidade lógica de armazenamento (container) em SGBDs como Oracle e PostgreSQL."
  },
  {
    "enunciado": "Em um banco de dados, uma chave primária identifica mais de uma tupla dentro de uma relação.",
    "correta": "C",
    "tema": "Chave Primária",
    "justificativa": "Errado. Chave primária deve identificar **unicamente** (uma só) tupla."
  },
  {
    "enunciado": "O modelo relacional de dados é organizado em uma estrutura em árvore, na qual cada registro tem uma única raiz.",
    "correta": "D",
    "tema": "Modelo Hierárquico",
    "justificativa": "Descrição do modelo hierárquico, não do relacional."
  },
  {
    "enunciado": "No modelo relacional de dados, uma relação entre n valores é representada matematicamente por um n-tupla de valores.",
    "correta": "D",
    "tema": "Teoria Relacional",
    "justificativa": "Correto. Uma linha da tabela é formalmente uma n-tupla (lista ordenada de n valores)."
  },
  {
    "enunciado": "Os bancos de dados relacionais mantêm todos os registros em estruturas hierárquicas que exigem navegação física entre os níveis.",
    "correta": "D",
    "tema": "Navegação",
    "justificativa": "Errado. Bancos relacionais usam acesso baseado em valor (SQL/Sets), não navegação física por ponteiros hierárquicos."
  },
  {
    "enunciado": "Uma tabela deve possuir no mínimo duas colunas, sendo uma delas definida como chave primária e a outra como chave candidata.",
    "correta": "C",
    "tema": "Tabelas",
    "justificativa": "Errado. Uma tabela pode ter 1 coluna (que seria a PK). Não exige chave candidata adicional."
  },
  {
    "enunciado": "De acordo com o conceito de integridade referencial, uma chave estrangeira em uma tabela-destino deve ser chave primária em outra tabela de origem.",
    "correta": "C",
    "tema": "Integridade Referencial",
    "justificativa": "Correto. A FK deve apontar para uma PK (ou chave candidata única) válida."
  },
  {
    "enunciado": "Em um SGBD relacional, a restrição que garante que todos os valores em uma coluna sejam distintos entre si e que permite valor NULL é denominada chave única (Unique).",
    "correta": "E",
    "tema": "Unique Constraint",
    "justificativa": "Unique garante unicidade, mas diferente da PK, geralmente permite um (ou múltiplos, dependendo do SGBD) valor NULL."
  },
  {
    "enunciado": "A atomicidade é uma característica exclusiva de bancos de dados relacionais.",
    "correta": "C",
    "tema": "ACID",
    "justificativa": "Errado. Atomicidade (tudo ou nada) é conceito de transações. Bancos NoSQL também podem suportar transações atômicas (ex: MongoDB multi-doc ACID)."
  },
  {
    "enunciado": "Nos bancos de dados relacionais, atributos que podem ser divididos em sub-atributos são considerados como compostos.",
    "correta": "C",
    "tema": "Atributos",
    "justificativa": "Sim. Ex: Endereço (Rua, Número, CEP)."
  },
  {
    "enunciado": "No modelo relacional, uma tabela é composta por uma coleção de relacionamentos, em que cada linha representa uma instância de uma entidade.",
    "correta": "C",
    "tema": "Definição de Tabela",
    "justificativa": "Correto. A tabela representa o conjunto de entidades, e as linhas as instâncias."
  },
  {
    "enunciado": "O fato de haver um campo de chave estrangeira com o valor NULL não viola a restrição de chave estrangeira.",
    "correta": "C",
    "tema": "Integridade Referencial",
    "justificativa": "Correto. FK pode ser nula (indicando relacionamento opcional), a menos que haja restrição NOT NULL explícita."
  },
  {
    "enunciado": "Quando uma restrição de integridade referencial em um sistema gerenciador de banco de dados relacional é violada, o procedimento adequado é rejeitar a ação.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "O SGBD impede a operação (INSERT/UPDATE/DELETE) que quebraria a integridade, rejeitando-a e retornando erro."
  },
  {
    "enunciado": "Em bancos de dados relacionais, a restrição de integridade de entidade estabelece-se entre duas relações.",
    "correta": "E",
    "tema": "Integridade de Entidade",
    "justificativa": "Integridade de Entidade diz respeito à **Chave Primária** da própria tabela (não ser nula e ser única). Integridade entre duas relações é a **Referencial**."
  },
  {
    "enunciado": "A chave utilizada em uma tabela de dados que referencia outra tabela é a chave primária.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Errado. Quem referencia é a **Chave Estrangeira**."
  },
  {
    "enunciado": "No modelo relacional de dados todas as relações necessitam de uma chave primária formada por uma ou mais tuplas que identificam um único registro.",
    "correta": "C",
    "tema": "Chave Primária",
    "justificativa": "A chave é formada por **atributos** (colunas), não por 'tuplas'. Tuplas são as linhas."
  },
  {
    "enunciado": "A integridade referencial garante que os valores de chaves estrangeiras correspondam aos valores válidos na tabela referenciada, mas não impede que essas chaves sejam nulas, desde que a coluna permita valores nulos.",
    "correta": "C",
    "tema": "Integridade Referencial",
    "justificativa": "Definição correta e completa do comportamento padrão de FKs."
  },
  {
    "enunciado": "A associação entre as pessoas que se relacionam em duplas para fazer uma inscrição no torneio pode ser entendida e representada como um autorrelacionamento (relação unária) da entidade Pessoa.",
    "correta": "D",
    "tema": "Autorrelacionamento",
    "justificativa": "Sim. Pessoa se relaciona com Pessoa para formar dupla."
  },
  {
    "enunciado": "Os metadados possibilitam uma visão integrada do ambiente de dados, pois explicitam os inter-relacionamentos existentes entre os dados.",
    "correta": "D",
    "tema": "Metadados",
    "justificativa": "Metadados descrevem a estrutura e as relações, permitindo entender o todo."
  },
 {
    "enunciado": "Um conjunto de dados inter-relacionados, representando informações sobre um domínio específico, denomina-se banco de dados.",
    "correta": "C",
    "tema": "Conceitos Básicos",
    "justificativa": "Esta é a definição formal de banco de dados: uma coleção organizada de dados que representam um aspecto do mundo real (domínio)."
  },
  {
    "enunciado": "No modelo relacional, uma relação é definida como um conjunto de tuplas onde a ordem dos elementos não importa.",
    "correta": "C",
    "tema": "Teoria Relacional",
    "justificativa": "Matematicamente, uma relação é um conjunto (set) de tuplas. Em conjuntos, a ordem dos elementos é irrelevante (diferente de uma lista)."
  },
  {
    "enunciado": "Na atomicidade, uma transação deve ser tratada como uma unidade única e indivisível, garantindo que todas as operações sejam concluídas ou nenhuma seja.",
    "correta": "C",
    "tema": "Transações (ACID)",
    "justificativa": "Atomicidade refere-se ao princípio do tudo ou nada. Se uma parte falhar, toda a transação é desfeita (rollback)."
  },
  {
    "enunciado": "Os bancos de dados não relacionais se diferenciam dos relacionais por utilizarem exclusivamente objetos codificados com estado armazenado.",
    "correta": "E",
    "tema": "NoSQL",
    "justificativa": "Bancos NoSQL utilizam diversos modelos de dados (documentos, chave-valor, grafos, colunas), não se limitando a 'objetos codificados com estado'."
  },
  {
    "enunciado": "A integridade referencial garante que os valores de uma chave estrangeira correspondam a valores existentes na chave primária da tabela referenciada, impedindo valores nulos.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "A integridade referencial exige que, **se** houver valor, ele deve existir na origem. Porém, chaves estrangeiras permitem valores NULOS (NULL), a menos que haja uma restrição NOT NULL explícita."
  },
  {
    "enunciado": "A atomicidade garante que uma transação seja completamente realizada ou revertida, enquanto o isolamento assegura que transações simultâneas não interfiram umas nas outras.",
    "correta": "C",
    "tema": "ACID",
    "justificativa": "Definições corretas: Atomicidade = indivisibilidade; Isolamento = execução independente de transações concorrentes."
  },
  {
    "enunciado": "Em um banco de dados relacional, o propósito de um índice é garantir a integridade referencial dos dados.",
    "correta": "E",
    "tema": "Índices",
    "justificativa": "O propósito principal de um índice é **acelerar a recuperação de dados** (performance) durante consultas, não garantir integridade (função das constraints)."
  },
  {
    "enunciado": "O formato JSON {nome_orgao: 'ANATEL', ...} é um exemplo típico de armazenamento do tipo chave-valor.",
    "correta": "E",
    "tema": "NoSQL",
    "justificativa": "Estruturas JSON aninhadas são características de bancos orientados a **Documentos** (ex: MongoDB), que são mais complexos que o modelo simples de Chave-Valor."
  },
  {
    "enunciado": "O relacionamento entre clientes e produtos comprados (N:N) é representado por uma tabela de 'Compras' com chaves estrangeiras para Clientes e Produtos.",
    "correta": "C",
    "tema": "Modelagem Relacional",
    "justificativa": "Para resolver um relacionamento Muitos-para-Muitos (Clientes compram N Produtos, Produtos são comprados por N Clientes), cria-se uma tabela associativa (Compras)."
  },
  {
    "enunciado": "A restrição que determina que todos os valores de determinada coluna devem ser exclusivos é a restrição de 'check'.",
    "correta": "E",
    "tema": "Restrições",
    "justificativa": "A restrição de exclusividade é a **UNIQUE**. 'Check' é usada para validar condições lógicas (ex: idade > 18)."
  },
  {
    "enunciado": "Atributos descritivos são aqueles que servem como definidores de nomes ou rótulos, como código ou matrícula.",
    "correta": "E",
    "tema": "Atributos",
    "justificativa": "Códigos e matrículas são atributos **identificadores** (chaves). Atributos descritivos são aqueles que dão características (Cor, Nome, Endereço)."
  },
  {
    "enunciado": "O conceito de domínio refere-se à coleção de valores possíveis que um atributo pode assumir.",
    "correta": "C",
    "tema": "Domínio",
    "justificativa": "Domínio é o conjunto de valores atômicos permitidos para um atributo (ex: Domínio de dias da semana = {Seg, Ter, ...})."
  },
  {
    "enunciado": "A prática mais eficaz para melhorar o desempenho é desativar as verificações de integridade referencial.",
    "correta": "E",
    "tema": "Desempenho",
    "justificativa": "Isso compromete a qualidade dos dados. A prática eficaz é **realizar análise de planos de execução** e criar índices adequados."
  },
  {
    "enunciado": "Para que a integridade de uma entidade seja observada, exige-se que seja atribuído à chave primária um conteúdo que pertença a um conjunto de valores válidos (Domínio).",
    "correta": "E",
    "tema": "Integridade de Entidade",
    "justificativa": "A Integridade de Entidade diz especificamente que a **Chave Primária não pode ser NULA** e deve ser única. Pertencer ao domínio é Integridade de Domínio."
  },
  {
    "enunciado": "A associação entre pessoas que formam duplas no mesmo torneio configura um autorrelacionamento.",
    "correta": "C",
    "tema": "Autorrelacionamento",
    "justificativa": "Sim, pois a entidade 'Pessoa' se relaciona com ela mesma para formar a dupla."
  },
  {
    "enunciado": "Na abordagem relacional, a propriedade de fechamento garante que a saída de qualquer operação possa ser usada como entrada de outra operação.",
    "correta": "C",
    "tema": "Álgebra Relacional",
    "justificativa": "A álgebra relacional é fechada: operações em tabelas resultam em novas tabelas, permitindo o aninhamento de consultas."
  },
  {
    "enunciado": "De acordo com a restrição de domínio, em uma chave estrangeira, o valor do campo tem que coincidir com uma chave primária de uma tabela referenciada.",
    "correta": "E",
    "tema": "Integridade",
    "justificativa": "Essa é a definição de **Integridade Referencial**. Restrição de domínio trata do tipo de dado (ex: inteiro, data) permitido na coluna."
  },
  {
    "enunciado": "O modelo em estrela e o modelo em floco de neve são os principais modelos de dados de sistemas transacionais (OLTP).",
    "correta": "E",
    "tema": "Business Intelligence",
    "justificativa": "Estrela (Star) e Floco de Neve (Snowflake) são modelos multidimensionais usados em **Data Warehouses (OLAP)**, não em sistemas transacionais."
  },
  {
    "enunciado": "Os bancos relacionais permitem uma escalabilidade mais barata e menos trabalhosa que os bancos não relacionais.",
    "correta": "E",
    "tema": "Escalabilidade",
    "justificativa": "Geralmente é o oposto: Bancos NoSQL são projetados para escalar horizontalmente (mais máquinas baratas) com facilidade, enquanto relacionais escalam verticalmente (hardware mais potente e caro)."
  },
  {
    "enunciado": "Metadados possibilitam uma visão integrada do ambiente de dados, explicitando os inter-relacionamentos.",
    "correta": "C",
    "tema": "Metadados",
    "justificativa": "Metadados são 'dados sobre dados' e descrevem a estrutura, relacionamentos e contexto das informações armazenadas."
  },

  ];
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
  ];
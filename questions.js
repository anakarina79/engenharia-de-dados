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
{
    "enunciado": "Para representar a propriedade atual de um automóvel, deve ser utilizada a cardinalidade 1:N entre as duas tabelas envolvidas.",
    "correta": "C",
    "tema": "Modelagem Relacional",
    "justificativa": "A relação de propriedade atual geralmente implica que uma pessoa pode ter vários carros (N), mas um carro pertence a um proprietário atual (1) no contexto do sistema. Isso caracteriza uma relação 1:N [1]. Analogia: Como um estacionamento onde cada vaga (carro) pertence a um apartamento (dono), mas um apartamento pode ter direito a várias vagas."
  },
  {
    "enunciado": "No modelo entidade-relacionamento a seguir, a coluna IdDepartamento da tabela Funcionario não pode ser nula, uma vez que ela é a chave estrangeira advinda do relacionamento com a tabela Departamento.",
    "correta": "E",
    "tema": "Chaves Estrangeiras",
    "justificativa": "Chaves estrangeiras podem ser nulas (NULL), indicando que o relacionamento é opcional (ex: um funcionário ainda não alocado a um departamento), a menos que haja uma restrição explícita de 'NOT NULL' [2]. Analogia: Um crachá pode ter um espaço para 'Chefe', que fica em branco se a pessoa não tiver um chefe direto no momento."
  },
  {
    "enunciado": "Seguindo uma visão relacional, além de seus próprios atributos, a entidade ENDERECO deve possuir como chave estrangeira a chave primária CODIGO da tabela PESSOA.",
    "correta": "C",
    "tema": "Integridade Referencial",
    "justificativa": "Se assumirmos que um endereço pertence a uma pessoa (relação 1:N ou 1:1 onde endereço é a entidade fraca/dependente), ele precisa referenciar quem mora lá através da chave estrangeira [3]. Analogia: Uma carta (endereço) precisa ter o nome do destinatário (chave estrangeira) para ser entregue corretamente."
  },
  {
    "enunciado": "A chave primária é o nome dado ao atributo ou conjunto de atributos que, para existir em uma relação, deve existir em outra relação como um identificador único.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "A chave primária identifica unicamente o registro na *própria* tabela. O atributo que referencia o identificador de *outra* tabela é a chave estrangeira [4]. Analogia: Seu CPF é sua chave primária; quando você escreve seu CPF num formulário médico, ali ele atua como referência (estrangeira)."
  },
  {
    "enunciado": "A chave estrangeira é o nome dado ao atributo ou conjunto de atributos que, para existir em uma relação, deve existir em outra relação como um identificador único.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Essa é a definição exata de chave estrangeira: um campo que aponta para a chave primária (identificador único) de outra tabela para manter a integridade referencial [4]. Analogia: É como um link em uma página web que aponta para o endereço exato de outra página."
  },
  {
    "enunciado": "A chave candidata é o nome dado ao atributo ou conjunto de atributos que, para existir em uma relação, deve existir em outra relação como um identificador único.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "Chave candidata é qualquer atributo que *poderia* ser a chave primária (é única), mas não necessariamente faz referência a outra tabela [4]."
  },
  {
    "enunciado": "Dentre as formas de representação lógica de um banco de dados, aquela que apresenta os dados por meio de tabelas, colunas e restrições de integridade é denominada modelo conceitual.",
    "correta": "E",
    "tema": "Modelos de Dados",
    "justificativa": "O modelo conceitual é abstrato (diagramas ER). O modelo que usa tabelas e colunas é o **Relacional** [5]. Analogia: O conceitual é o esboço artístico; o relacional é a planta baixa técnica com medidas exatas."
  },
  {
    "enunciado": "Dentre as formas de representação lógica de um banco de dados, aquela que apresenta os dados por meio de tabelas, colunas e restrições de integridade é denominada modelo entidade relacionamento.",
    "correta": "E",
    "tema": "Modelos de Dados",
    "justificativa": "O modelo Entidade-Relacionamento (MER) é conceitual. A representação tabular é característica do modelo Relacional [5]."
  },
  {
    "enunciado": "Uma chave estrangeira garante a unicidade de informações em uma tabela.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "A chave estrangeira garante **integridade referencial** (o vínculo existe). Quem garante unicidade é a Chave Primária ou a restrição Unique. Uma FK pode se repetir várias vezes (lado N da relação) [5]. Analogia: Várias pessoas podem ter o mesmo 'País de Origem' (FK), isso não torna a pessoa única."
  },
  {
    "enunciado": "Integridade referencial ocorre quando se liga duas tabelas por suas chaves primarias de forma íntegra.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "A integridade referencial liga a **Chave Estrangeira** de uma tabela à **Chave Primária** de outra, não duas chaves primárias (exceto em casos raros de 1:1, mas a definição geral envolve FK) [6]. Analogia: Você liga a tomada (FK) na parede (PK), não duas paredes uma na outra."
  },
  {
    "enunciado": "Um esquema de banco de dados pode ser definido como a representação gráfica e simbológica dos componentes de um banco de dados, seja comercial, industrial ou residencial.",
    "correta": "E",
    "tema": "Esquema de BD",
    "justificativa": "Esquema é a descrição da estrutura do banco (tabelas, campos, tipos), não uma representação gráfica de componentes físicos residenciais/industriais. O termo é técnico de TI [7]. Analogia: O esquema é a gramática da linguagem, não o desenho das pessoas falando."
  },
  {
    "enunciado": "Os índices de hash são estruturas de dados que, tal como os índices B-trees, são criados por meio de estruturas de árvores em que hashing são ponteiros que apontam para o nó que contém a chave.",
    "correta": "E",
    "tema": "Índices",
    "justificativa": "Índices Hash usam uma função matemática para calcular o endereço direto (buckets), não formam uma estrutura de árvore. Árvores são usadas em índices B-Tree [7]. Analogia: Hash é como um escaninho numerado (vai direto ao número); B-Tree é como um arquivo de pastas em ordem alfabética (navega pelas letras)."
  },
  {
    "enunciado": "Em uma instância da relação professor, não pode haver tuplas com diferentes números de colunas, mesmo que o cpf_professor_coord seja inexistente.",
    "correta": "C",
    "tema": "Modelo Relacional",
    "justificativa": "No modelo relacional, todas as linhas (tuplas) de uma tabela devem ter o mesmo número de colunas (estrutura fixa). Valores inexistentes são preenchidos com NULL, mas a coluna existe [8]. Analogia: Em uma planilha Excel formatada, todas as linhas têm as mesmas células, mesmo que algumas estejam vazias."
  },
  {
    "enunciado": "Para efeito de integridade referencial, uma ação correta na relação contrato é criar um atributo numero_contrato como chave primária, não sendo mais necessários, nessa relação, os atributos cpf_professor e cod_curso.",
    "correta": "E",
    "tema": "Integridade Referencial",
    "justificativa": "Mesmo criando uma chave primária própria (`numero_contrato`), os atributos `cpf_professor` e `cod_curso` continuam necessários como **Chaves Estrangeiras** para saber a qual professor e curso o contrato se refere [9]. Analogia: Criar um número de protocolo para um atendimento não elimina a necessidade de saber o nome do paciente."
  },
  {
    "enunciado": "Em um banco de dados relacional, o atributo que estabelece a relação de uma entidade com a chave primária de outra entidade é o relacionamento.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "O atributo físico é a Chave Estrangeira. 'Relacionamento' é o conceito abstrato ou a ligação lógica [10]."
  },
  {
    "enunciado": "Em um banco de dados relacional, o atributo que estabelece a relação de uma entidade com a chave primária de outra entidade é a chave estrangeira.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "A Chave Estrangeira (FK) é o mecanismo de implementação que materializa o relacionamento ao referenciar uma PK [10]. Analogia: O carimbo do visto no passaporte (FK) referencia o país (PK) que você visitou."
  },
  {
    "enunciado": "Em um banco de dados relacional, o atributo que estabelece a relação de uma entidade com a chave primária de outra entidade é a tupla.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "Tupla é o registro (linha) inteiro, não o atributo de ligação [10]."
  },
  {
    "enunciado": "Em um banco de dados relacional, o atributo que estabelece a relação de uma entidade com a chave primária de outra entidade é a integridade referencial.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "Integridade referencial é a **regra** ou conceito que garante a validade da ligação, não o nome do atributo [10]."
  },
  {
    "enunciado": "Um modelo relacional de banco de dados não separa as estruturas de armazenamento físicas das estruturas de dados lógicas, assim administradores de banco de dados podem gerenciar tanto o armazenamento de dados físicos quanto o acesso a esses dados.",
    "correta": "E",
    "tema": "Independência de Dados",
    "justificativa": "Uma das principais características do modelo relacional é a **Independência Física dos Dados**, separando a visão lógica (tabelas) da física (arquivos, discos) [11]. Analogia: Você organiza suas músicas em playlists (lógico) sem precisar saber em qual setor do disco rígido o arquivo MP3 está gravado (físico)."
  },
  {
    "enunciado": "Um modelo de dados relacional, cujo esquema é visto como um gráfico em que os tipos de relacionamento são arcos e os tipos de objetos são nós, é um modelo de banco de dados projetado como uma abordagem flexível para representar objetos e seus relacionamentos.",
    "correta": "E",
    "tema": "Modelos de Dados",
    "justificativa": "A descrição de nós e arcos refere-se ao **Modelo de Grafos** ou de Rede. O modelo relacional é baseado em tabelas (relações) [12]."
  },
  {
    "enunciado": "Um índice de banco de dados é uma estrutura que deve receber um ou mais atributos de uma relação que identificam uma única tupla.",
    "correta": "E",
    "tema": "Índices",
    "justificativa": "Índices não precisam necessariamente identificar uma *única* tupla (podem ser não-unique, apontando para várias linhas com o mesmo valor, como um índice por 'Data'). Sua função é agilizar a busca [13]. Analogia: O índice remissivo de um livro pode apontar várias páginas para o termo 'Amor', não apenas uma."
  },
  {
    "enunciado": "No modelo relacional, uma tabela é chamada, formalmente, de relação, enquanto uma linha é chamada de tupla.",
    "correta": "C",
    "tema": "Terminologia Relacional",
    "justificativa": "Essa é a nomenclatura formal correta proposta por E.F. Codd: Tabela = Relação, Linha = Tupla, Coluna = Atributo [14]. Analogia: Em termos biológicos chamamos de 'Canis lupus familiaris', mas no dia a dia (informal) chamamos de 'Cachorro'."
  },
  {
    "enunciado": "No banco de dados relacional, é permitido criar uma chave primária utilizando-se dois ou mais campos definidos como chaves estrangeiras.",
    "correta": "C",
    "tema": "Chaves Compostas",
    "justificativa": "Sim, isso é comum em tabelas associativas (N:N). A chave primária é composta pela combinação das chaves estrangeiras que apontam para as entidades relacionadas [15]. Analogia: O identificador de um voo pode ser a combinação de 'Companhia Aérea' + 'Número', onde ambos podem ser referências externas."
  },
  {
    "enunciado": "Na estrutura de dados do modelo relacional, a ordem em que as tuplas aparecem em uma relação determina a relação em sua definição.",
    "correta": "E",
    "tema": "Teoria dos Conjuntos",
    "justificativa": "Uma relação é um **conjunto** de tuplas, e em conjuntos matemáticos, a ordem dos elementos não importa. A ordem física pode variar, mas a relação lógica é a mesma [16]. Analogia: Uma lista de compras é a mesma se 'Leite' está em cima ou embaixo; os itens são os mesmos."
  },
  {
    "enunciado": "Na modelagem e implementação relacional de banco de dados, uma tabela pode ser, no máximo, uma única unique key.",
    "correta": "E",
    "tema": "Restrições",
    "justificativa": "Uma tabela pode ter apenas uma Chave Primária, mas pode ter **várias** restrições Unique (chaves candidatas alternativas) [17]. Analogia: Você só tem um CPF (Primary Key), mas também tem um número de Passaporte e um número de RG únicos que também te identificam."
  },
{
    "enunciado": "No modelo relacional de bancos de dados, os elementos ficam armazenados em tabelas bidimensionais simples, contendo linhas (registros) e colunas (campos), e os elementos de um arquivo do banco podem relacionar-se com diversos elementos de outros arquivos.",
    "correta": "C",
    "tema": "Modelo Relacional",
    "justificativa": "Descrição clássica do modelo relacional: dados em tabelas (linhas x colunas) que se relacionam entre si [18]. Analogia: Como várias planilhas em um arquivo Excel que conversam entre si através de códigos."
  },
  {
    "enunciado": "Superchaves e chaves primárias são utilizadas para diferenciar de maneira única as instâncias de uma entidade, assim como para facilitar o processamento.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Superchaves (e as PKs, que são superchaves mínimas) garantem a unicidade, permitindo que o sistema encontre e processe registros específicos sem ambiguidade [19]."
  },
  {
    "enunciado": "Se uma tabela de banco de dados tiver 205 atributos, então isso significa que ela tem 205 registros.",
    "correta": "E",
    "tema": "Terminologia",
    "justificativa": "Atributos são as **colunas** (características). Registros são as linhas (instâncias). Ter 205 atributos significa ter 205 colunas (uma tabela muito larga), independente de quantas linhas existam [20]. Analogia: Um formulário pode ter 205 perguntas (atributos), mas ter sido preenchido por apenas 3 pessoas (registros)."
  },
  {
    "enunciado": "Em um sistema gerenciado de banco de dados, as restrições de integridade garantem que os dados possam ser armazenados, consultados e utilizados com confiabilidade.",
    "correta": "C",
    "tema": "Integridade",
    "justificativa": "Restrições (constraints) como PK, FK, NOT NULL, CHECK servem para evitar dados inválidos e manter a consistência do banco [21]. Analogia: As regras de trânsito garantem que os carros (dados) circulem sem colidir e cheguem ao destino corretamente."
  },
  {
    "enunciado": "Uma hiperchave é uma tupla que permite recuperar uma relação de uma tabela.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "O termo correto seria Superchave (ou Superkey), e ela é um conjunto de *atributos*, não uma 'tupla', que identifica a tupla [22]. 'Hiperchave' não é terminologia padrão do modelo relacional."
  },
  {
    "enunciado": "A assertiva I (A relação #1 deverá ser transformada em três tabelas associativas) está correta, pois modelos relacionais não possuem herança.",
    "correta": "E",
    "tema": "Mapeamento ER-Relacional",
    "justificativa": "A assertiva está errada quanto à solução. Embora o relacional puro não tenha herança nativa como POO, a transformação de especialização/generalização pode ser feita de outras formas (tabela única, uma tabela por classe), não necessariamente três tabelas associativas. Além disso, a justificativa da questão original (sobre Assertiva I) foi marcada como Errada pela banca [23]."
  },
  {
    "enunciado": "Não pode ter valor nulo em uma tabela do banco de dados um campo que seja chave estrangeira.",
    "correta": "E",
    "tema": "Valor Nulo",
    "justificativa": "Chaves estrangeiras podem ser nulas (relacionamento opcional) [24]. Analogia: O campo 'Cônjuge' (FK) fica vazio se a pessoa for solteira."
  },
  {
    "enunciado": "Não pode ter valor nulo em uma tabela do banco de dados um campo que seja chave primária.",
    "correta": "C",
    "tema": "Valor Nulo",
    "justificativa": "Por definição (Integridade de Entidade), a Chave Primária deve ser única e **não nula** [24]. Analogia: Ninguém pode existir no sistema sem uma identidade."
  },
  {
    "enunciado": "Em banco de dados, uma superchave se caracteriza por um conjunto de um ou mais atributos que permitem identificar uma única entidade em um conjunto de entidades.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Superchave é qualquer conjunto de colunas que garante unicidade. A Chave Primária é escolhida dentre as superchaves mínimas [25]."
  },
  {
    "enunciado": "Em um sistema gerenciador de banco de dados, a chave estrangeira se caracteriza por um atributo que existe para substituir a chave primária na entidade estrangeira.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "A chave estrangeira não *substitui* a chave primária; ela *referencia* a chave primária de outra tabela. A tabela de destino continua tendo sua própria PK [26]."
  },
  {
    "enunciado": "Restrição de domínio é o conjunto de possíveis valores que um atributo pode receber.",
    "correta": "C",
    "tema": "Domínio",
    "justificativa": "Restrição de domínio define o tipo de dado (Inteiro, Texto, Data) e valores aceitáveis (ex: Sexo deve ser 'M' ou 'F') [27]. Analogia: Em um formulário, o campo 'Idade' só aceita números, impedindo que alguém escreva 'Vinte'."
  },
  {
    "enunciado": "Em um banco de dados relacional, uma chave externa fornece uma relação entre duas tabelas, ou seja, ela é a chave principal de uma tabela e, portanto, aparece como atributo em outra tabela.",
    "correta": "C",
    "tema": "Chaves Estrangeiras",
    "justificativa": "Definição correta de Chave Estrangeira (Externa). Ela é a 'cópia' da PK de uma tabela colocada em outra para criar o elo [28]."
  },
  {
    "enunciado": "Em um banco de dados relacional, a condição que garante que valores não possam se repetir dentro da mesma coluna denomina-se foreign key.",
    "correta": "E",
    "tema": "Restrições",
    "justificativa": "Foreign Key serve para vincular tabelas. A restrição de não repetição é a **Unique** (ou Primary Key) [29]."
  },
  {
    "enunciado": "Em um banco de dados relacional, a condição que garante que valores não possam se repetir dentro da mesma coluna denomina-se cláusula unique.",
    "correta": "B",
    "tema": "Restrições",
    "justificativa": "A cláusula UNIQUE (ou constraint UNIQUE) impede inserção de valores duplicados na coluna especificada [29]. (Nota: O gabarito original é B)."
  },
  {
    "enunciado": "Um banco de dados relacional organiza os dados em tabelas e os vincula, com base em campos-chave, e essas relações permitem recuperar e combinar dados de uma ou mais tabelas com uma única consulta.",
    "correta": "C",
    "tema": "Modelo Relacional",
    "justificativa": "O poder do modelo relacional está justamente em usar chaves para fazer junções (Joins) e recuperar dados integrados [30]."
  },
  {
    "enunciado": "Em um banco de dados relacional, a chave candidata a primária é formada por um ou mais atributos que identificam uma única tupla.",
    "correta": "C",
    "tema": "Chaves",
    "justificativa": "Chaves candidatas são aquelas que possuem a propriedade de unicidade e minimalidade, sendo elegíveis para se tornarem a chave primária [31]."
  },
  {
    "enunciado": "A chave estrangeira de uma relação pode ser nula, o que significa que essa chave não se relaciona a nenhuma outra tupla de alguma relação.",
    "correta": "C",
    "tema": "Chaves Estrangeiras",
    "justificativa": "O valor NULL na FK indica ausência de relacionamento naquele momento (relacionamento opcional) [32]."
  },
  {
    "enunciado": "Em um sistema de banco de dados relacional, o dado do tipo CHAR é usado para armazenar um conjunto de caracteres de tamanho variável.",
    "correta": "E",
    "tema": "Tipos de Dados",
    "justificativa": "CHAR geralmente armazena tamanho **fixo**. Para tamanho variável, utiliza-se **VARCHAR** [33]. Analogia: CHAR é como uma caixa de ovos (tamanho fixo, ocupa espaço mesmo vazio); VARCHAR é como um saco plástico (se adapta ao conteúdo)."
  },
  {
    "enunciado": "Chaves estrangeiras não podem ser nulas e cada registro na tabela deve possuir uma, e somente uma, chave estrangeira.",
    "correta": "E",
    "tema": "Chaves Estrangeiras",
    "justificativa": "FKs podem ser nulas (opcionais) e uma tabela pode ter zero, uma ou várias chaves estrangeiras [34]."
  },
  {
    "enunciado": "Cardinalidade refere-se ao número de ocorrências de uma entidade que está associado com a ocorrência de outra entidade.",
    "correta": "C",
    "tema": "Cardinalidade",
    "justificativa": "Cardinalidade define a quantidade de elementos (1, N) que participam do relacionamento [35]. Analogia: A cardinalidade diz se um professor pode ter 'Muitos' alunos ou apenas 'Um'."
  },
  {
    "enunciado": "A operação projeção na álgebra relacional seleciona todas as tuplas que satisfazem um dado predicado.",
    "correta": "E",
    "tema": "Álgebra Relacional",
    "justificativa": "A Projeção (π) seleciona **colunas** (atributos). A operação que seleciona tuplas (linhas) com base em predicado é a **Seleção** (σ) [36]. Analogia: Projeção é cortar a foto para mostrar só o rosto (colunas); Seleção é escolher quais fotos do álbum você quer ver (linhas)."
  },
  {
    "enunciado": "No modelo relacional, as operações de união e interseção entre duas relações são válidas somente se ambas as relações forem definidas com o mesmo esquema de atributos.",
    "correta": "E",
    "tema": "Álgebra Relacional",
    "justificativa": "Não precisa ser *exatamente* o mesmo esquema nomeado, mas devem ser **união-compatíveis**: mesmo número de atributos e domínios compatíveis na mesma ordem [37]. (Nota: O gabarito original é Errado, pois a exigência estrita de 'mesmo nome' geralmente não é necessária, apenas compatibilidade de tipo/domínio)."
  },
  {
    "enunciado": "O resultado de um produto cartesiano em um banco de dados relacional terá todos os atributos de todas as relações na cláusula de FROM.",
    "correta": "C",
    "tema": "Álgebra Relacional",
    "justificativa": "O produto cartesiano combina todas as linhas de A com todas de B, e o resultado contém todas as colunas de A mais todas as colunas de B [38]."
  },
  {
    "enunciado": "Para combinar informações de duas relações quaisquer, é correto o uso de produto cartesiano.",
    "correta": "A",
    "tema": "Álgebra Relacional",
    "justificativa": "O produto cartesiano é a base para combinações (embora geralmente refinado com Seleção para virar uma Junção). As outras opções (diagrama, chaves) são estruturas, não operações de combinação [39]. (Nota: Gabarito original 241 é A)."
  },
  {
    "enunciado": "A junção natural ocorre quando se juntam duas tabelas que envolvem colunas de mesmo nome nas tabelas-argumento... sendo o resultado uma tabela com todas as combinações das tabelas em que os atributos em comum são iguais.",
    "correta": "C",
    "tema": "Álgebra Relacional",
    "justificativa": "Junção Natural (Natural Join) faz o match automático de colunas com mesmo nome e remove as duplicadas [40]."
  },
  {
    "enunciado": "Em uma consulta a duas tabelas, o produto cartesiano ocorrerá quando a condição de união estiver corretamente especificada.",
    "correta": "E",
    "tema": "SQL/Álgebra",
    "justificativa": "O produto cartesiano ocorre justamente quando **NÃO** há condição de união (join condition). Quando há condição correta, ocorre uma Junção (Join) [41]. Analogia: Produto cartesiano é misturar todas as meias com todos os sapatos. Junção é combinar cada meia com o sapato certo."
  },
  {
    "enunciado": "Na álgebra relacional, a operação que permite combinar informações de duas relações quaisquer é a projeção.",
    "correta": "E",
    "tema": "Álgebra Relacional",
    "justificativa": "Projeção opera em uma única relação (unária), cortando colunas. A combinação é feita por Produto Cartesiano ou Junção [42]."
  },
{
    "enunciado": "Em álgebra relacional, a operação que produz uma combinação das linhas de uma relação com as linhas correspondentes de outra relação é conhecida como interseção.",
    "correta": "E",
    "tema": "Álgebra Relacional",
    "justificativa": "Interseção retorna linhas que existem em *ambas* as tabelas (elementos comuns), não combina linhas correspondentes (Join) [43]."
  },
  {
    "enunciado": "Na álgebra relacional, a operação projeção, representada pela letra grega π (pi), é classificada como uma operação unária, por operar sobre apenas um conjunto de entrada.",
    "correta": "C",
    "tema": "Álgebra Relacional",
    "justificativa": "Correto. Projeção e Seleção são operações unárias (atuam sobre uma tabela). União, Interseção e Produto Cartesiano são binárias (duas tabelas) [44]."
  },
  {
    "enunciado": "Uma tabela está na 3.ª forma normal (3NF) se todos os atributos dependerem diretamente da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A 3FN exige que a tabela esteja na 2FN e que não haja dependências transitivas (atributos não-chave dependendo de outros atributos não-chave). Tudo deve depender apenas da chave [45]. Analogia: 'A chave, toda a chave e nada além da chave'."
  },
  {
    "enunciado": "A normalização de tabelas tem como objetivos diminuir redundâncias e inconsistências e facilitar a manipulação dos dados.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Principal objetivo da normalização: reduzir duplicação de dados (redundância) para evitar anomalias de atualização [46]."
  },
  {
    "enunciado": "Para garantir a eficiência de um comando SELECT com instrução de JOIN, é necessário que as tabelas referenciadas estejam normalizadas.",
    "correta": "C",
    "tema": "Normalização/Desempenho",
    "justificativa": "Embora seja possível fazer JOIN em tabelas não normalizadas, a normalização garante a integridade e evita duplicações que falseariam resultados agregados, sendo crucial para a lógica correta da junção [47]. (Nota: Em contextos de performance pura, desnormalização às vezes acelera leitura, mas a questão foca na eficiência lógica/necessidade estrutural)."
  },
  {
    "enunciado": "Na criação de esquemas de banco de dados eficientes, a normalização excessiva pode levar a um desempenho ruim em consultas complexas, e, por isso, deve ser sempre evitada.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Normalização excessiva pode exigir muitos JOINs (piorando performance de leitura), mas **não deve ser sempre evitada**. Ela é essencial para integridade. A desnormalização é uma exceção controlada, não a regra [48]."
  },
  {
    "enunciado": "O processo de normalização de dados tem como objetivo eliminar aqueles que são redundantes e garantir que as dependências entre eles façam sentido, armazenando apenas os logicamente relacionados em uma tabela.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Resumo preciso da normalização: eliminar redundância e garantir dependências lógicas (funcionais) corretas [49]."
  },
  {
    "enunciado": "A redundância de dados deve sempre ser evitada a todo custo durante o projeto e manutenção de um banco de dados, pois causa, frequentemente, inconsistência de dados.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "O termo 'a todo custo' torna a questão errada. Em Data Warehouses ou para performance específica, a redundância controlada (desnormalização) é aceitável e necessária [50]."
  },
  {
    "enunciado": "Sabendo-se que os atributos nome_municipio e estado dependem exclusivamente do cod_municipio, é correto afirmar que a referida tabela está na primeira forma normal (1FN), dada a dependência funcional parcial.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Se há dependência parcial (atributos dependem de *parte* da chave composta), a tabela viola a 2FN, logo está apenas na 1FN (supondo valores atômicos) [51]."
  },
  {
    "enunciado": "Considerando-se a tabela a seguir (com coluna 'dependentes' contendo 'Ana, Carlos, Pedro'), é correto afirmar que ela está na primeira forma normal.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A 1FN proíbe atributos multivalorados ou compostos. Uma coluna contendo uma lista de nomes ('Ana, Carlos, Pedro') viola a 1FN (atomicidade) [52]."
  },
  {
    "enunciado": "A tabela contribuintes... não está na terceira forma normal, pois apresenta dependência funcional transitiva entre atributos (contribuicao mensal calculada a partir de renda e aliquota).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Atributos calculados ou derivados de outros atributos não-chave configuram dependência transitiva, violando a 3FN [53]."
  },
  {
    "enunciado": "Quando todas as colunas não chave de uma tabela dependem de toda a chave composta, essa tabela está na segunda forma normal (2FN).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A 2FN exige a eliminação de dependências parciais. Se tudo depende da chave inteira, a 2FN foi satisfeita [54]."
  },
  {
    "enunciado": "Na terceira forma normal (3FN), a existência de dependência transitiva entre atributos não chave é permitida.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A definição da 3FN é justamente **eliminar** dependências transitivas [55]."
  },
  {
    "enunciado": "Em um banco de dados relacional, a terceira forma normal (3FN) é alcançada se o banco de dados estiver em segunda forma normal (2FN) e não houver dependências transitivas dos atributos não chave entre si.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Definição correta da 3FN [56]."
  },
  {
    "enunciado": "A normalização de dados é a estratégia de criação de índices compostos para melhorar a performance das consultas.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Normalização é sobre estruturação lógica e redução de redundância. Criação de índices é otimização física [57]."
  },
  {
    "enunciado": "A primeira forma normal (1FN) será satisfeita quando todos os atributos tiverem domínio atômico, ou seja, quando não houver valores compostos ou repetitivos.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Atomicidade é a regra de ouro da 1FN [58]. Analogia: Cada célula do Excel deve ter apenas um valor, não uma lista de compras."
  },
  {
    "enunciado": "A normalização tem como objetivo reduzir a redundância e eliminar anomalias de inserção, atualização e exclusão.",
    "correta": "D",
    "tema": "Normalização",
    "justificativa": "A opção D da questão de múltipla escolha descreve corretamente os objetivos. As outras falam em duplicar dados ou eliminar relacionamentos, o que é incorreto [59]."
  },
  {
    "enunciado": "Em um processo de normalização de banco de dados relacional, uma relação estará na terceira forma normal (3FN) se estiver na segunda forma normal (2FN) e todos os atributos não primos forem dependentes diretamente da chave primária.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A opção E da questão de múltipla escolha define corretamente a 3FN (eliminação de transitividade) [60]."
  },
  {
    "enunciado": "Considerada a tabela Emprestimos com dados de Agente (Nome, Email) repetidos para cada empréstimo, o problema está relacionado a uma dependência transitiva, sendo resolvido ao se aplicar a 3FN.",
    "correta": "D",
    "tema": "Normalização",
    "justificativa": "O Nome e Email do Agente dependem do Agente, não do Empréstimo em si. Isso é transitivo. Solução: separar em tabela de Agentes (3FN) [61]."
  },
  {
    "enunciado": "Em uma grande empresa, a prática mais adequada para o balanceamento entre normalização e desempenho... seria permitir desnormalizações controladas.",
    "correta": "D",
    "tema": "Desempenho",
    "justificativa": "Desnormalização controlada é uma técnica válida para otimizar leitura em cenários específicos, trocando espaço em disco e complexidade de escrita por velocidade de consulta [62]."
  },
  {
    "enunciado": "Um esquema de relação estará na segunda forma normal (2FN) quando existir uma dependência lógica entre as tuplas correlacionadas.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "2FN trata de dependência funcional dos atributos em relação à chave, não 'dependência lógica entre tuplas' [63]."
  },
  {
    "enunciado": "Quando toda coluna não-chave de uma tabela depende diretamente da chave primária, considera-se que essa tabela está, no mínimo, na 3.ª forma normal.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Se depende *diretamente* (sem transitividade) e totalmente (sem parcialidade), atende aos requisitos da 3FN [64]."
  },
  {
    "enunciado": "O principal objetivo da 5.ª forma normal é a eliminação de dependências multivaloradas.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Dependências multivaloradas são tratadas na **4FN**. A 5FN trata de dependências de junção (Join Dependencies) [65]."
  },
  {
    "enunciado": "Para que uma tabela esteja na terceira forma normal, é suficiente que ela não possua nenhuma coluna não-chave que dependa de outra coluna não-chave.",
    "correta": "D",
    "tema": "Normalização",
    "justificativa": "Isso descreve a eliminação da dependência transitiva, que é o foco da 3FN. (Nota: Gabarito 278 é D/Certo? A questão original é múltipla escolha? Não, parece C/E. O gabarito no final diz 278: D. Deve ser uma questão de múltipla escolha onde D é a correta. Se for C/E, a afirmação está incompleta pois precisa estar na 2FN antes, mas o conceito 'não depender de não-chave' é a essência da 3FN)."
  },
 {
    "enunciado": "A forma normal que garante a eliminação de atributos (além das chaves primárias e estrangeiras) que se repetem nas tabelas é a terceira forma normal.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A eliminação de grupos de repetição é o objetivo da **Primeira Forma Normal (1FN)**. A 3FN foca em eliminar dependências transitivas (atributos que dependem de outros atributos não-chave). Analogia: 1FN é garantir que em cada gaveta (celula) cabe apenas uma meia, não um bolo de meias misturadas [1]."
  },
  {
    "enunciado": "Para que uma tabela esteja na terceira forma normal, é suficiente que ela não possua nenhuma coluna não-chave que dependa de outra coluna não-chave.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Não é suficiente. Para estar na 3FN, a tabela precisa primeiro atender aos requisitos da **2FN** (não ter dependência parcial) e da **1FN**. A regra de 'não depender de não-chave' (transitiva) é o passo final, não o único. Analogia: Para estar na universidade (3FN), não basta passar no vestibular; você precisa ter terminado o ensino médio (2FN) e o fundamental (1FN) [2]."
  },
  {
    "enunciado": "Em normalização de bancos de dados, a forma em que a tabela não possui atributos transitivamente dependentes da chave primária e em que não há colunas dependentes de outras colunas que não são chaves é denominada terceira forma normal.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Definição correta da 3FN. Ela limpa as dependências indiretas. Analogia: O salário do funcionário deve depender apenas do ID do funcionário, não do ID do cargo que ele ocupa (se cargo for atributo não-chave) [2]."
  },
  {
    "enunciado": "Se a chave primária de uma tabela Produto for composta de cod_cliente e cod_produto, a tabela estará na segunda forma normal simplesmente por não possuir grupos repetitivos.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Não possuir grupos repetitivos satisfaz apenas a **1FN**. Para estar na 2FN com chave composta, nenhum atributo não-chave pode depender de apenas *parte* da chave (ex: nome do produto depender só de cod_produto). Analogia: Não basta os ingredientes não estarem misturados (1FN); para o bolo ser bom (2FN), todos os ingredientes devem ser necessários para a receita inteira [3]."
  },
  {
    "enunciado": "Uma tabela estará na segunda forma normal (2NF) se estiver na primeira forma normal (1NF) e se cada atributo não chave da tabela depender apenas da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Essa é a essência da 2FN: eliminação de dependência parcial. Todo atributo deve depender da chave primária completa (toda a chave). (Nota: Em algumas leituras estritas, 'depender apenas' implica também não ter transitividade, o que seria 3FN, mas no contexto de definição básica da 2FN versus 1FN, foca-se na dependência total da chave) [4]."
  },
  {
    "enunciado": "Se a coluna PrecoProduto depender do valor da coluna CodProduto, que é parte da chave primária composta da tabela ItemVenda, então haverá dependência funcional total.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Se depende apenas de uma *parte* da chave composta (CodProduto), trata-se de **Dependência Funcional Parcial**, não total. Isso viola a 2FN. Analogia: Se o preço é do produto, ele não deveria depender da venda específica, apenas do código do produto [5]."
  },
  {
    "enunciado": "A normalização de dados em um banco de dados é uma técnica que organiza os dados desse banco em uma escala específica, como valores entre 0 e 1.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Isso descreve normalização estatística (Min-Max scaling). Em banco de dados, normalização é o processo de organizar tabelas para reduzir redundância e anomalias. Analogia: Em BD, normalizar é arrumar o armário; em estatística, é converter metros para centímetros [6]."
  },
  {
    "enunciado": "Nos bancos de dados relacionais, enquanto a segunda forma normal é baseada no conceito de dependência transitiva, a terceira forma normal baseia-se no conceito de dependência funcional total.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Os conceitos estão invertidos. A **2FN** baseia-se na dependência funcional total (eliminando a parcial). A **3FN** baseia-se na eliminação da dependência transitiva [7]."
  },
  {
    "enunciado": "Uma tabela de quarta forma normal (4FN) estará em 5FN quando o conteúdo dela puder ser reconstruído (isto é, quando não existir perda de informação) a partir das diversas tabelas menores que não possuam a mesma chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A 5FN (Forma Normal de Projeção-Junção) lida com casos onde a informação pode ser reconstruída através de junções de tabelas menores sem perda ou adição de dados espúrios (Join Dependency) [8]."
  },
  {
    "enunciado": "A desnormalização é apenas tolerável quando houver imperativos rígidos de desempenho, como no caso de data warehouse, ou se o sistema não conseguir atingir um patamar mínimo de desempenho sem o processo de desnormalização.",
    "correta": "C",
    "tema": "Desempenho",
    "justificativa": "Correto. A desnormalização introduz redundância proposital para evitar JOINs custosos e acelerar leitura, sendo uma troca (trade-off) aceita em cenários de alta demanda de leitura ou BI. Analogia: Guardar uma cópia da chave de casa no escritório é redundante e arriscado (desnormalizado), mas é tolerável se você perde a chave com frequência (desempenho/acesso) [9]."
  },
  {
    "enunciado": "Em um banco de dados relacional, uma tabela está na segunda forma normal quando toda coluna não chave depende diretamente da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Depender 'diretamente' e 'totalmente' da chave primária (e não de partes dela) é o requisito da 2FN. (Se interpretado rigorosamente, 'diretamente' também excluiria transitividade da 3FN, mas no contexto de evolução das formas, a dependência total da chave define a 2FN) [1]."
  },
  {
    "enunciado": "Uma tabela é considerada na terceira forma normal quando suas colunas que não são chave dependem diretamente da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A 3FN remove dependências indiretas (transitivas). Portanto, todos os atributos devem depender **diretamente** da chave primária. Analogia: 'A chave, toda a chave e nada além da chave' [10]."
  },
  {
    "enunciado": "Normalização de banco de dados é um conjunto de regras que visa aumentar tanto a redundância quanto a integridade dos dados.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "O objetivo é **reduzir** ou minimizar a redundância, não aumentá-la. Redundância gera inconsistência. Analogia: Normalizar é escrever a informação uma única vez para não ter que corrigir em dez lugares diferentes [10]."
  },
  {
    "enunciado": "Uma tabela estará na terceira forma normal (3FN) se e somente se ela estiver na 1FN e na 2FN, e se todos os atributos não chave primária puderem ser obtidos somente por meio da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Definição precisa. Estar na 3FN implica satisfazer as anteriores e eliminar dependências transitivas (atributos obtidos através de outros atributos não-chave) [11]."
  },
  {
    "enunciado": "Considera-se que uma tabela está na terceira forma normal (3FN) quando não existem dependências multivaloradas.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Dependências multivaloradas são tratadas na **Quarta Forma Normal (4FN)**. A 3FN trata de dependências transitivas [12]."
  },
  {
    "enunciado": "A primeira forma normal (1FN) em bancos de dados permite que uma tabela contenha atributos multivalorados, desde que esses valores sejam de tipos de dados distintos.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A 1FN proíbe expressamente atributos multivalorados ou compostos. Cada interseção linha/coluna deve conter um valor atômico (único). Analogia: Em uma célula do Excel, você não deve escrever 'Telefones: 9999-8888, 7777-6666'; deve criar linhas ou colunas separadas [12]."
  },
  {
    "enunciado": "Se uma tabela possui um campo valor_total que é resultado da multiplicação de quantidade por preco_unitario, ela está em conformidade com a terceira forma normal (3FN).",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Armazenar campos calculados (derivados) cria dependência funcional transitiva (dependem de quantidade e preço, não apenas da chave) e redundância desnecessária, violando o princípio da 3FN de armazenar apenas dados elementares não deriváveis. Analogia: Não se guarda a 'Idade' no banco, guarda-se 'Data de Nascimento', pois a idade muda sozinha [13]."
  },
  {
    "enunciado": "A primeira forma normal (1NF) sugere que informações repetitivas, como múltiplos endereços de clientes, sejam armazenadas em uma tabela separada.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Para resolver grupos de repetição (um cliente com vários endereços) e atingir a 1FN, deve-se decompor a estrutura, levando os endereços para uma tabela filha. Analogia: Se a lista de compras não cabe no post-it, use uma folha separada [14]."
  },
  {
    "enunciado": "Quando uma tabela está na terceira forma normal (3FN), toda coluna que não é chave depende diretamente da chave primária, sem dependências indiretas.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Correto. Elimina-se a transitividade (A -> B -> C). C deve depender diretamente de A [15]."
  },
  {
    "enunciado": "Para que uma tabela de funcionários que inclua dados do gerente do departamento esteja na 3FN, é necessário separar as informações do gerente em outra tabela.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Se a tabela tem `(ID_Func, ID_Depto, Nome_Gerente)`, o `Nome_Gerente` depende do `ID_Depto`, não do `ID_Func`. Isso é transitivo. A solução é separar Departamento/Gerente em outra tabela [16]."
  },
  {
    "enunciado": "Em bancos de dados relacionais, quando uma tabela está na terceira forma normal (3FN), seus atributos dependem inteiramente da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Depender 'inteiramente' (sem parcialidade, 2FN) e 'diretamente' (sem transitividade, 3FN) da chave primária é o estado da 3FN [17]."
  },
  {
    "enunciado": "Para normalizar uma relação de designação de professores onde 'um professor pode ser coordenador de mais de um curso', é necessário criar uma relação separada para coordenadores na 4FN.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Regras complexas de relacionamentos independentes multivalorados (professor leciona em N cursos E coordena M cursos) exigem decomposição para evitar anomalias de 4FN (dependências multivaloradas) [18]."
  },
  {
    "enunciado": "Uma tabela de banco de dados que não possui dependências funcionais parciais está, no mínimo, na segunda forma normal (2FN).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A ausência de dependências parciais é a condição definidora da 2FN (assumindo que já está na 1FN) [19]."
  },
  {
    "enunciado": "Uma relação que esteja na quinta forma normal (5FN) está necessariamente livre de anomalias que sejam passíveis de serem eliminadas a partir de projeções.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A 5FN trata de Dependências de Junção (Join Dependencies), garantindo que a tabela não possa ser decomposta (projetada) em tabelas menores sem perda de informação ou geração de registros falsos ao recompor [20]."
  },
  {
    "enunciado": "As tabelas que estejam na primeira forma normal (1FN) e que possuam apenas uma coluna como chave primária também estão automaticamente na segunda forma normal (2FN).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A dependência parcial só existe em chaves compostas (depender de uma parte da chave). Se a chave é simples (uma coluna), não existem 'partes', logo toda dependência é total. Analogia: Você não pode gostar só da metade de uma cereja se ela é uma peça única [21]."
  },
{
    "enunciado": "Um banco de dados que se encontra na terceira forma normal obrigatoriamente está também na segunda e na primeira formas normais.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "As formas normais são cumulativas, como degraus de uma escada. Você não pode estar no terceiro degrau (3FN) sem ter subido o primeiro (1FN) e o segundo (2FN) ."
  },
  {
    "enunciado": "Uma tabela está na primeira forma normal quando ela não contém tabelas aninhadas.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Embora a ausência de tabelas aninhadas seja uma característica, a definição rigorosa da 1FN exige **atomicidade** dos atributos (valores indivisíveis) e ausência de grupos de repetição. Apenas 'não conter tabelas aninhadas' não garante a 1FN se houver listas de valores numa célula ."
  },
  {
    "enunciado": "As colunas de uma tabela na terceira forma normal devem depender da chave primária, de forma direta ou por meio de dependências transitivas ou indiretas.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A 3FN exige que as colunas dependam da chave primária **apenas de forma direta**. Dependências transitivas (indiretas) devem ser eliminadas. Analogia: O salário depende do Cargo, e o Cargo do Funcionário; na 3FN, o salário deve ir para a tabela de Cargos, não ficar na de Funcionários ."
  },
  {
    "enunciado": "Para estar na segunda forma normal, é suficiente que a tabela não contenha nenhuma dependência parcial.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Considerando que a tabela já esteja na 1FN (requisito básico), a condição determinante para atingir a 2FN é a eliminação de dependências funcionais parciais (atributos dependendo apenas de parte da chave composta) ."
  },
  {
    "enunciado": "Colocar uma tabela na segunda forma normal (2FN) significa que toda coluna não chave depende diretamente da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Depender 'diretamente' (no sentido de totalmente, sem ser parcial) da chave primária inteira é o objetivo da 2FN. (Nota: A distinção 'diretamente' vs 'transitivamente' é o foco da 3FN, mas no contexto da 2FN, o foco é a dependência da chave completa) ."
  },
  {
    "enunciado": "Em um modelo de dados, quando todas as colunas não chave de uma tabela dependem da chave primária, a tabela está na terceira forma normal (3FN).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Se dependem *da chave* (e não de parte dela, e não de outros atributos), a tabela satisfaz os critérios até a 3FN. Analogia: Cada informação no crachá refere-se exclusivamente à pessoa identificada, não ao departamento ou cidade dela ."
  },
  {
    "enunciado": "Uma tabela está na segunda forma normal (2FN) se ela estiver na 1FN e se todos os seus atributos não chave forem totalmente dependentes da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Definição clássica da 2FN: eliminação de dependência parcial. Tudo deve depender da chave inteira ."
  },
  {
    "enunciado": "Em normalização de banco de dados, na terceira forma normal, os valores em um registro que não fazem parte da chave desse registro não pertencem à tabela; recomenda-se colocar esses campos em uma tabela separada.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Isso descreve a eliminação de dependências transitivas. Se um dado descreve algo que não é a entidade chave (ex: descrição do setor onde o funcionário trabalha), ele deve ser movido para a tabela desse 'algo' (Tabela Setor) ."
  },
  {
    "enunciado": "Um esquema de relação R está na primeira forma normal (1FN) se os domínios de todos os seus atributos forem atômicos.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Atomicidade é a regra de ouro da 1FN. Cada campo deve conter um único valor indivisível (ex: não guardar 'Rua X, 100' num campo só, mas dividir em Logradouro e Número) ."
  },
  {
    "enunciado": "Uma tabela estará na primeira forma normal (1FN) se todos os seus atributos forem considerados como unidades indivisíveis.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A questão original foi considerada errada. A nuance pode estar na terminologia 'unidades indivisíveis' versus 'domínios atômicos' ou na completude da definição (necessidade de PK, sem grupos de repetição). A definição precisa é 'domínios atômicos' ."
  },
  {
    "enunciado": "Uma das alternativas para transformar um esquema de tabela não normalizada em um esquema na 1FN (primeira forma normal) é construir uma única tabela com redundância de dados.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Sim. Para eliminar grupos de repetição (ex: vários telefones para um cliente) e atingir a 1FN, uma técnica é 'achatar' a tabela, repetindo os dados do cliente para cada telefone (gerando redundância que será tratada na 2FN/3FN). Analogia: Em vez de uma linha com lista de compras, você faz várias linhas, repetindo a data da compra para cada item ."
  },
  {
    "enunciado": "A normalização não visa obter um modelo entidade-relacionamento (MER); seu objetivo consiste em, a partir do MER, eliminar redundâncias de dados que possam estar contidas no modelo.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A normalização é uma técnica de refinamento que geralmente ocorre *após* ou *durante* a modelagem lógica para validar e otimizar as estruturas propostas no MER, eliminando redundâncias ."
  },
  {
    "enunciado": "Em um banco de dados relacional, quando toda coluna não chave de uma tabela depende diretamente da chave primária diz-se que a tabela está, no mínimo, na terceira forma normal (3FN).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Se a dependência é direta (não transitiva) e total (não parcial), atende aos requisitos da 3FN ."
  },
  {
    "enunciado": "A ação de eliminar campos de uma tabela que não dependem da chave é estabelecida pela segunda forma normal.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Embora a 3FN trate especificamente de dependências transitivas (não-chave dependendo de não-chave), a regra geral de que 'tudo deve depender da chave' começa a ser aplicada rigorosamente na 2FN (eliminando dependências parciais) ."
  },
  {
    "enunciado": "A 3FN não admite dependências transitivas, que existem quando um atributo depende de outro atributo que não seja a chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Exato. Se A -> B e B -> C, então C depende transitivamente de A. A 3FN quebra essa cadeia movendo B e C para outra tabela ."
  },
  {
    "enunciado": "Tabelas que estão na primeira forma normal permitem exigir atributos atômicos, sem multivaloração e sem relações aninhadas.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A 1FN **exige** (não apenas permite) que os atributos sejam atômicos e sem multivaloração (listas). Se a questão diz 'permitem exigir', está correta no sentido de que a forma normal impõe essa regra ."
  },
  {
    "enunciado": "Na terceira forma normal, devem-se eliminar os campos que podem ser obtidos pela equação de outros campos da mesma tabela.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Embora seja uma boa prática não armazenar campos calculados (redundância), isso não é a definição formal da 3FN, que foca em dependências funcionais de atributos armazenados. Campos calculados são geralmente tratados como dependência funcional, mas a 'equação' em si não é o critério único ."
  },
  {
    "enunciado": "Com o processo de normalização de tabelas, busca-se armazenar informações com redundância, para garantir o espelhamento e segurança contra a perda de informações.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Normalização visa **reduzir** a redundância. Espelhamento e segurança são funções de backup e infraestrutura, não de modelagem lógica/normalização ."
  },
  {
    "enunciado": "Uma tabela estará na segunda forma normal se tiver atendido a todos os requisitos da primeira forma normal e se não houver atributos que não sejam funcionalmente dependentes da chave primária.",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "Isso implica dependência total da chave (e não parcial). Se um atributo não depende da chave (ou depende só de parte dela), ele viola a 2FN (ou 3FN). A frase resume bem a intenção de limpar atributos não relacionados à chave completa ."
  },
  {
    "enunciado": "De acordo com a primeira forma normal do modelo relacional, atributos compostos por vários valores são representados diretamente em uma tupla e em suas relações nas tabelas do banco de dados.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "A 1FN proíbe atributos compostos (ex: Endereço contendo Rua, Cidade, CEP num campo só). Eles devem ser decompostos em colunas atômicas (Coluna Rua, Coluna Cidade...). Representá-los 'diretamente' como compostos viola a 1FN ."
  },
  {
    "enunciado": "Uma tabela está na BCNF (boyce-codd normal form) quando os seus campos apresentarem uma dependência funcional com tabelas estrangeiras.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "BCNF trata de dependências dentro da própria tabela, onde **todo determinante deve ser uma chave candidata**. Não tem relação direta com dependência de tabelas estrangeiras (FK) ."
  },
  {
    "enunciado": "Na normalização de tabelas, ao eliminar as dependências transitivas, chega-se à terceira forma normal (3FN).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "A eliminação de dependências transitivas é o passo que caracteriza a passagem da 2FN para a 3FN ."
  },
  {
    "enunciado": "A forma normal que estabelece que, em uma relação, toda dependência funcional não trivial e irredutível à esquerda tenha uma chave candidata como determinante é a Forma Normal de Boyce-Codd (BCNF).",
    "correta": "C",
    "tema": "Normalização",
    "justificativa": "BCNF é uma versão mais rigorosa da 3FN. Ela exige que, se X determina Y, então X deve ser uma superchave (chave candidata). Analogia: 'Todo ditador (determinante) deve ser o rei (chave)' ."
  },
  {
    "enunciado": "O processo de normalização de dados consiste em encontrar informações que atinjam um plano de normalização com as informações constantes nas tuplas adjacentes.",
    "correta": "E",
    "tema": "Normalização",
    "justificativa": "Normalização trata da estrutura das tabelas e dependências entre colunas, não de comparação com 'tuplas adjacentes' (linhas vizinhas). Isso soa mais como funções de janela (window functions) ou análise de séries temporais ."
  },
  {
    "enunciado": "Nos bancos de dados relacionais, uma relação N:N entre duas tabelas resulta na criação de uma terceira tabela, para armazenar essa relação.",
    "correta": "C",
    "tema": "Modelagem Relacional",
    "justificativa": "Relacionamentos Muitos-para-Muitos não podem ser implementados diretamente com chaves estrangeiras nas tabelas originais. Cria-se uma tabela associativa (junção) contendo as PKs de ambas as tabelas ."
  },
  {
    "enunciado": "Durante o projeto lógico de banco de dados, os modelos entidade-relacionamento são convertidos em esquemas de tabelas, que podem ser implementados em sistemas de gerenciamento de banco de dados.",
    "correta": "C",
    "tema": "Projeto de BD",
    "justificativa": "O projeto lógico é a fase de tradução do diagrama abstrato (MER) para o modelo concreto (Relacional/Tabelas) suportado pelo SGBD ."
  },
  {
    "enunciado": "No modelo de dados relacional, é possível definir múltiplas chaves primárias em uma única tabela.",
    "correta": "E",
    "tema": "Chaves",
    "justificativa": "Uma tabela pode ter apenas **uma** chave primária. Essa chave pode ser composta (ter múltiplas colunas), mas é uma única constraint de chave primária. Existem múltiplas chaves *candidatas*, mas só uma é a primária ."
  },
  {
    "enunciado": "Transformar uma tabela de PESSOA em duas tabelas, de PESSOA FÍSICA e de PESSOA JURÍDICA, é um refinamento de especialização.",
    "correta": "C",
    "tema": "Modelagem ER",
    "justificativa": "Especialização é o processo de criar subclasses (Física, Jurídica) a partir de uma superclasse (Pessoa), permitindo atributos específicos para cada tipo. Analogia: Dividir a pasta 'Veículos' em 'Carros' e 'Motos' ."
  },
  {
    "enunciado": "O processo de engenharia reversa de modelos relacionais pode ser utilizado na administração de dados quando não se tem um modelo conceitual para um banco de dados existente.",
    "correta": "C",
    "tema": "Engenharia Reversa",
    "justificativa": "Engenharia reversa é o processo de olhar para o banco já construído (tabelas) e deduzir o modelo abstrato (conceitual/DER), útil quando a documentação original foi perdida ."
  },
{
    "enunciado": "Caso se pretenda implementar uma arquitetura multiusuários por meio de uma arquitetura cliente-servidor distribuída... a camada de processamento de aplicação deverá realizar a implementação da lógica da aplicação, fornecendo a funcionalidade necessária para os usuários finais.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Em arquiteturas distribuídas, a lógica de negócio (regras, processamento) fica na camada de aplicação (middleware ou back-end), separando a apresentação (interface) do gerenciamento de dados (banco). Analogia: O garçom (aplicação) processa o pedido e aplica as regras do restaurante entre o cliente (apresentação) e a cozinha (dados)."
  },
  {
    "enunciado": "A arquitetura em três esquemas (ANSI/SPARC)... O nível interno da arquitetura lida com a representação física dos dados, como estruturas de armazenamento, ordenação e compactação.",
    "correta": "C",
    "tema": "Arquitetura ANSI/SPARC",
    "justificativa": "O nível interno é o mais baixo de abstração no SGBD, definindo *como* os dados são realmente gravados (índices, B-trees, hash), fazendo a ponte com o sistema operacional."
  },
  {
    "enunciado": "Na arquitetura de banco de dados relacional, a camada de abstração de dados tem como principal objetivo tornar transparente a camada física, de modo que os usuários possam trabalhar com uma visão lógica dos dados.",
    "correta": "C",
    "tema": "Abstração de Dados",
    "justificativa": "A abstração serve para esconder a complexidade. O usuário vê tabelas (lógico), sem precisar saber se os dados estão em um HD, SSD ou espalhados em cluster (físico). Analogia: Você dirige o carro usando o volante (visão lógica) sem precisar manipular diretamente a injeção de combustível (físico)."
  },
  {
    "enunciado": "Na arquitetura de banco de dados relacional... a camada lógica tem como função definir tabelas, relacionamentos e restrições de integridade, que são estruturas do banco de dados.",
    "correta": "C",
    "tema": "Arquitetura de BD",
    "justificativa": "A camada lógica (ou conceitual no ANSI/SPARC) define *o que* está armazenado e como se conecta, independente de como será gravado fisicamente."
  },
  {
    "enunciado": "Ainda que se use um sistema gerenciador do banco de dados, a melhor opção para que o software possa acompanhar as mudanças na estrutura do arquivo correspondente é embutir os metadados nos programas de aplicação.",
    "correta": "E",
    "tema": "Independência de Dados",
    "justificativa": "Embutir metadados (estrutura) no código gera dependência rígida. A melhor opção é manter metadados no **Catálogo/Dicionário de Dados** do SGBD, garantindo a independência dados-programa. Analogia: Se você muda a mobília de lugar (dados), não deveria ter que reconstruir a casa (programa)."
  },
  {
    "enunciado": "Na arquitetura ANSI/SPARC de banco de dados, a visão interna é separada dos registros do nível físico, uma vez que ela não lida com blocos ou páginas, nem com tamanhos de cilindros ou trilhas.",
    "correta": "C",
    "tema": "Arquitetura ANSI/SPARC",
    "justificativa": "O nível interno descreve a estrutura de armazenamento para o SGBD (índices, tipos de registro), mas abstrai os detalhes de hardware bruto (cilindros, trilhas), que são gerenciados pelo Sistema Operacional."
  },
  {
    "enunciado": "O nível de abstração de dados em que é definida detalhadamente a maneira pela qual os dados de um sistema estão estruturalmente armazenados e como podem ser computacionalmente acessados corresponde ao nível de visão do usuário.",
    "correta": "E",
    "tema": "Abstração de Dados",
    "justificativa": "O nível de visão do usuário (Externo) é simplificado e personalizado. A definição detalhada de armazenamento corresponde ao nível **Interno/Físico**."
  },
  {
    "enunciado": "O comando SQL a seguir permite extrair todas as colunas da tabela TB_PESSOA com atributo ALTURA superior a 1.5: EXTRACT ALL COLUMN FROM TABLE TB_PESSOA...",
    "correta": "E",
    "tema": "SQL - DML",
    "justificativa": "O comando `EXTRACT` não é usado para selecionar dados dessa forma. O correto seria `SELECT * FROM TB_PESSOA WHERE ALTURA > 1.5`."
  },
  {
    "enunciado": "O comando SQL MODIFY é usado para atualizar dados existentes em uma tabela do banco de dados.",
    "correta": "E",
    "tema": "SQL - DML/DDL",
    "justificativa": "Para atualizar *dados* (conteúdo), usa-se **UPDATE**. O comando `MODIFY` (ou `ALTER TABLE MODIFY/ALTER COLUMN`) é usado para alterar a *estrutura* (tipo de dado) da coluna."
  },
  {
    "enunciado": "O comando SQL SELECT FROM permite que se leia certa coluna de uma tabela.",
    "correta": "C",
    "tema": "SQL - DML",
    "justificativa": "A sintaxe básica `SELECT coluna FROM tabela` é usada exatamente para leitura de dados."
  },
  {
    "enunciado": "O comando SQL DROP TABLE é usado para excluir uma tabela existente em um banco de dados.",
    "correta": "C",
    "tema": "SQL - DDL",
    "justificativa": "Correto. `DROP` remove objetos (tabelas, views), enquanto `DELETE` remove linhas de dados. Analogia: `DELETE` limpa o conteúdo do arquivo; `DROP` joga o arquivo inteiro na lixeira."
  },
  {
    "enunciado": "Os comandos SQL, tais como SELECT, INSERT, UPDATE e DELETE, são aplicáveis em SGDBs relacionais.",
    "correta": "C",
    "tema": "SQL - DML",
    "justificativa": "Estes são os quatro comandos fundamentais de Manipulação de Dados (DML) padrão em qualquer banco relacional."
  },
  {
    "enunciado": "O comando 'SET @COLUMN = IBGE DROP COLUMN ON TABCIDADES IN @COLUMN' excluirá da tabela em apreço a coluna IBGE.",
    "correta": "E",
    "tema": "SQL - Sintaxe",
    "justificativa": "A sintaxe apresentada é inválida para SQL padrão. Para excluir uma coluna, usa-se `ALTER TABLE TABCIDADES DROP COLUMN IBGE`."
  },
  {
    "enunciado": "O comando 'DEL ON TABCIDADES IN @ROWID' excluirá, na tabela em questão, o registro referente à cidade.",
    "correta": "E",
    "tema": "SQL - Sintaxe",
    "justificativa": "Sintaxe inválida. O comando correto para exclusão de linhas é `DELETE FROM Tabela WHERE condicao`."
  },
  {
    "enunciado": "A instrução 'SELECT * FROM Clientes;' é usada para selecionar todos os registros da tabela Clientes.",
    "correta": "C",
    "tema": "SQL - DML",
    "justificativa": "O asterisco (*) é o caractere curinga que significa 'todas as colunas', e a ausência da cláusula WHERE implica 'todas as linhas'."
  },
  {
    "enunciado": "O retorno do comando 'SELECT * FROM Produtos WHERE Preco > 0.00' será necessariamente uma lista de todos os itens... ordenados pelo campo Preco, do menor valor para o maior valor.",
    "correta": "E",
    "tema": "SQL - Ordenação",
    "justificativa": "Em SQL, a ordem dos resultados **não é garantida** a menos que se use explicitamente a cláusula `ORDER BY`. O banco pode retornar os dados na ordem que achar mais eficiente."
  },
  {
    "enunciado": "A execução do comando SELECT * FROM PESSOA LIMIT 5, 10 apresentará 10 registros da tabela PESSOA, a partir do 6.º registro dessa tabela.",
    "correta": "C",
    "tema": "SQL - Paginação",
    "justificativa": "Na sintaxe `LIMIT offset, count`, o primeiro número é quantos registros pular (5) e o segundo é quantos retornar (10). Pular 5 significa começar do 6º."
  },
  {
    "enunciado": "O termo CRUD refere-se aos comandos de INSERT, UPDATE, SELECT e DELETE, respectivamente, em um banco de dados.",
    "correta": "E",
    "tema": "CRUD",
    "justificativa": "A sigla CRUD significa **C**reate, **R**ead, **U**pdate, **D**elete. A correspondência correta com SQL é: Create=INSERT, Read=SELECT, Update=UPDATE, Delete=DELETE. A questão erra a ordem ou a associação."
  },
  {
    "enunciado": "A execução do comando SQL SELECT NOME_PAIS, COUNT(*) FROM CIDADANIA GROUP BY NOME_PAIS apresentará quantas pessoas nasceram em cada PAIS.",
    "correta": "C",
    "tema": "SQL - Agregação",
    "justificativa": "O `GROUP BY` agrupa os registros por país e o `COUNT(*)` conta quantos registros existem em cada grupo."
  },
  {
    "enunciado": "Em SQL, a instrução mais simples para selecionar registros de uma tabela é composta pelas cláusulas SELECT e WHERE.",
    "correta": "E",
    "tema": "SQL - DML",
    "justificativa": "A cláusula `WHERE` é opcional. A instrução mais simples exige apenas `SELECT` e `FROM` (ex: `SELECT * FROM Tabela`)."
  },
  {
    "enunciado": "A cláusula GROUP BY, do SQL, pode ser utilizada sem a presença de funções agregadas, desde que haja uma cláusula ORDER BY para organizar os resultados da consulta.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "Embora tecnicamente alguns bancos permitam `GROUP BY` sem agregação (funcionando como um `DISTINCT`), a justificativa 'desde que haja ORDER BY' é técnica e conceitualmente incorreta. O propósito do GROUP BY é agregação."
  },
  {
    "enunciado": "Para excluir uma tabela na linguagem SQL... deve-se fazer uso do comando DELETE TABLE, pois ele remove tanto os dados quanto a estrutura da tabela.",
    "correta": "E",
    "tema": "SQL - DDL",
    "justificativa": "O comando para remover a tabela inteira (estrutura + dados) é **DROP TABLE**. `DELETE` apaga apenas as linhas."
  },
  {
    "enunciado": "A execução da consulta SQL com LEFT JOIN listará todos os processos (tabela da esquerda), inclusive aqueles que ainda não têm partes associadas (tabela da direita).",
    "correta": "C",
    "tema": "SQL - Joins",
    "justificativa": "O `LEFT JOIN` garante que todos os registros da tabela à esquerda (Processos) apareçam no resultado, preenchendo com NULL as colunas da direita (Partes) caso não haja correspondência."
  },
  {
    "enunciado": "A principal função da cláusula WITH do SQL é definir blocos de consulta nomeados que podem ser referenciados múltiplas vezes.",
    "correta": "C",
    "tema": "SQL - CTE",
    "justificativa": "A cláusula `WITH` define *Common Table Expressions* (CTEs), criando tabelas temporárias lógicas que tornam a consulta mais legível e modular."
  },
  {
    "enunciado": "A consulta com INNER JOIN retorna todos os clientes que tenham realizado pelo menos um pedido na tabela orders.",
    "correta": "C",
    "tema": "SQL - Joins",
    "justificativa": "O `INNER JOIN` retorna apenas as linhas onde há correspondência em *ambas* as tabelas. Clientes sem pedidos não aparecem."
  },
 {
    "enunciado": "A execução da instrução SQL 'CREATE TABLE employees (employee_id INT NOT NULL, department_id INT NOT NULL, PRIMARY KEY (employee_id))' criará uma tabela com chave primária composta.",
    "correta": "E",
    "tema": "SQL - DDL",
    "justificativa": "A chave primária foi definida apenas sobre a coluna `employee_id`. Para ser composta, a sintaxe seria `PRIMARY KEY (employee_id, department_id)` [1]."
  },
  {
    "enunciado": "No SQL, a instrução DELETE pode ser usada para remover colunas inteiras de uma tabela e manter o restante dos dados sem alteração.",
    "correta": "E",
    "tema": "SQL - DML",
    "justificativa": "O comando `DELETE` remove **linhas** (registros) de dados. Para remover **colunas** (estrutura), utiliza-se o comando `ALTER TABLE ... DROP COLUMN` [2]."
  },
  {
    "enunciado": "A palavra-chave SQL que retorna apenas as linhas que tenham correspondência em ambas as tabelas envolvidas na junção é o LEFT OUTER JOIN.",
    "correta": "E",
    "tema": "SQL - Joins",
    "justificativa": "O `LEFT OUTER JOIN` retorna todas as linhas da tabela da esquerda, mesmo sem correspondência. O comando que retorna apenas as correspondências em ambas é o **INNER JOIN** [3]."
  },
  {
    "enunciado": "A consulta 'SELECT A1, COUNT(A4) FROM A4 GROUP BY A1' retornará corretamente a soma de valores de A4 para cada grupo.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "A função `COUNT()` conta o número de ocorrências (linhas). Para obter a **soma** dos valores, deve-se utilizar a função `SUM()` [4]."
  },
  {
    "enunciado": "Para recuperar dados utilizando cláusulas como INNER JOIN e WHERE, classificando-se tal operação como consulta de dados, utiliza-se a DQL (Data Query Language).",
    "correta": "C",
    "tema": "SQL - DQL",
    "justificativa": "A linguagem de consulta de dados (DQL) tem como comando principal o `SELECT`, utilizado para recuperar e filtrar dados com Joins e clausulas condicionais [5]."
  },
  {
    "enunciado": "A sintaxe correta para criar uma tabela chamada 'funcionarios' é 'CREATE funcionarios (id INTEGER PRIMARY KEY...);'.",
    "correta": "E",
    "tema": "SQL - DDL",
    "justificativa": "A sintaxe correta exige a palavra `TABLE`: `CREATE TABLE funcionarios (...)` [6]."
  },
  {
    "enunciado": "Para obter dados combinados de livros, autores e categorias, onde registros relacionados devem existir, utiliza-se a cláusula INNER JOIN.",
    "correta": "C",
    "tema": "SQL - Joins",
    "justificativa": "O `INNER JOIN` é apropriado quando se deseja garantir que o registro exista em todas as tabelas relacionadas (ex: livro deve ter autor e categoria válidos) [7]."
  },
  {
    "enunciado": "A função de janela RANK() atribui a mesma posição a empates em um ranking e 'pula' a numeração das posições subsequentes.",
    "correta": "C",
    "tema": "SQL - Window Functions",
    "justificativa": "Correto. Se houver empate em 1º lugar (1, 1), o próximo será 3º. A função que não pula (1, 1, 2) é a `DENSE_RANK()` [8]."
  },
  {
    "enunciado": "A cláusula IS NOT NULL é utilizada em consultas para filtrar registros onde um campo específico possui valor definido.",
    "correta": "C",
    "tema": "SQL - Filtros",
    "justificativa": "Em SQL, comparações com NULL exigem operadores especiais (`IS NULL` ou `IS NOT NULL`) em vez de igualdade (`=`) [9]."
  },
  {
    "enunciado": "O operador EXISTS é utilizado em cláusulas WHERE para verificar a existência de registros retornados por uma subconsulta.",
    "correta": "C",
    "tema": "SQL - Subconsultas",
    "justificativa": "O `EXISTS` retorna verdadeiro se a subconsulta retornar ao menos uma linha, sendo muito usado para filtros de correlação [10]."
  },
  {
    "enunciado": "A cláusula HAVING é utilizada para filtrar resultados de agregações, como somas e médias, após o agrupamento dos dados.",
    "correta": "C",
    "tema": "SQL - Agregação",
    "justificativa": "Enquanto o `WHERE` filtra linhas antes do agrupamento, o `HAVING` filtra os grupos resultantes (ex: grupos com soma de saldo > média) [11]."
  },
  {
    "enunciado": "O uso de variáveis bind (parâmetros) em consultas SQL reduz o desempenho do banco de dados, pois impede a reutilização de planos de execução.",
    "correta": "E",
    "tema": "SQL - Performance",
    "justificativa": "Pelo contrário, o uso de variáveis bind **melhora** o desempenho ao permitir que o SGBD reutilize o mesmo plano de execução para valores diferentes, evitando o 'hard parse' [12]."
  },
  {
    "enunciado": "A execução de um comando SELECT DISTINCT com INNER JOIN garante que o resultado contenha apenas uma linha, independentemente de quantas correspondências existam nas tabelas relacionadas.",
    "correta": "E",
    "tema": "SQL - Joins",
    "justificativa": "O `INNER JOIN` pode multiplicar linhas se houver relação 1:N. O `DISTINCT` remove duplicatas exatas da projeção final, mas se os dados projetados forem diferentes, múltiplas linhas serão retornadas [13]."
  },
  {
    "enunciado": "A cláusula DISTINCT COUNT(coluna) calcula a contagem de linhas e depois remove as duplicatas desse número resultante.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "Geralmente a intenção é `COUNT(DISTINCT coluna)`, que conta valores únicos. Se escrito como `SELECT DISTINCT COUNT(...)`, ele calcula o total primeiro (uma linha) e o distinct em uma linha é inócuo. A interpretação de que o resultado seria '1' para contagens múltiplas está incorreta [14]."
  },
  {
    "enunciado": "Pelo comando SELECT em um catálogo de dados, se a regra de negócio for 'valor_venda > 0', entende-se que os valores devem ser menores que zero.",
    "correta": "E",
    "tema": "Metadados",
    "justificativa": "O símbolo `>` significa 'maior que'. Portanto, a regra exige valores positivos, não negativos [15]."
  },
  {
    "enunciado": "O operador BETWEEN pode ser usado no comando DELETE para restringir a quantidade de colunas a serem excluídas.",
    "correta": "E",
    "tema": "SQL - DML",
    "justificativa": "O `DELETE` apaga linhas inteiras. O `BETWEEN` na cláusula `WHERE` seleciona o intervalo de **linhas** a serem apagadas, não colunas [16]."
  },
  {
    "enunciado": "O comando SQL MODIFY é utilizado como um comando autônomo para alterar o nome de tabelas de um SGBD.",
    "correta": "E",
    "tema": "SQL - DDL",
    "justificativa": "`MODIFY` é geralmente uma cláusula dentro do comando `ALTER TABLE` (para alterar tipos de dados), não um comando isolado. Para renomear, usa-se `RENAME` ou `ALTER TABLE ... RENAME` [17]."
  },
  {
    "enunciado": "A execução de uma consulta 'SELECT a+10' onde 'a' possui valor NULL resultará no valor 10.",
    "correta": "E",
    "tema": "SQL - Null",
    "justificativa": "Em SQL, qualquer operação aritmética com `NULL` resulta em `NULL` (desconhecido + 10 = desconhecido) [18]."
  },
  {
    "enunciado": "A cláusula HAVING opera filtrando dados em um único conjunto de entrada, sem a necessidade de agregação ou agrupamento.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "A função do `HAVING` é filtrar grupos criados pelo `GROUP BY`. Para filtrar registros individuais sem agregação, utiliza-se o `WHERE` [19]."
  },
  {
    "enunciado": "Em um banco de dados relacional, não há correspondência entre chaves de junção em uma consulta recursiva (CTE) que percorre uma hierarquia pai-filho.",
    "correta": "E",
    "tema": "SQL - CTE Recursiva",
    "justificativa": "Consultas recursivas funcionam justamente porque **há** correspondência entre as chaves (ex: id do processo filho ligando ao id de referência do pai) na junção da parte recursiva [20]."
  },
  {
    "enunciado": "Um catálogo de dados (Data Catalog) armazena metadados como descrições de tabelas, tipos de colunas e regras de negócio.",
    "correta": "C",
    "tema": "Governança de Dados",
    "justificativa": "Tabelas de catálogo ou dicionário de dados contêm informações sobre a estrutura e regras dos dados armazenados, permitindo a gestão e auditoria do banco [21]."
  },
  {
    "enunciado": "A consulta SELECT com GROUP BY pode retornar colunas que não fazem parte da função de agregação e nem da cláusula GROUP BY.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "No padrão SQL estrito, todas as colunas no `SELECT` devem estar no `GROUP BY` ou dentro de uma função de agregação (como SUM, COUNT) [22]."
  },
  {
    "enunciado": "A função RANK() OVER (ORDER BY ...) é utilizada para gerar um ranking dos resultados baseado em um critério de ordenação específico.",
    "correta": "C",
    "tema": "SQL - Funções Analíticas",
    "justificativa": "Funções de janela como `RANK()` permitem classificar registros dentro de um conjunto de resultados sem reduzir o número de linhas retornadas [23]."
  },
  {
    "enunciado": "Para filtrar grupos que possuem contagem de registros menor ou igual a 1, deve-se utilizar a cláusula WHERE COUNT(*) <= 1.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "Filtros baseados em funções de agregação (como `COUNT`) devem ser feitos na cláusula **HAVING**, pois o valor só é conhecido após o agrupamento [24]."
  },
  {
    "enunciado": "Uma consulta recursiva utilizando WITH RECURSIVE é composta por um membro âncora (não recursivo) e um membro recursivo unidos por UNION ALL.",
    "correta": "C",
    "tema": "SQL - CTE Recursiva",
    "justificativa": "Estrutura padrão de CTEs recursivas: uma consulta inicial (âncora) unida a uma consulta que referencia a própria CTE (passo recursivo) [20]."
  },
{
    "enunciado": "No SQL, a instrução DELETE pode ser usada para remover colunas inteiras de uma tabela e manter o restante dos dados sem alteração.",
    "correta": "E",
    "tema": "SQL - DML",
    "justificativa": "O comando `DELETE` é usado para remover **linhas** (registros) de uma tabela. Para remover **colunas** (estrutura), utiliza-se o comando `ALTER TABLE ... DROP COLUMN` [1]."
  },
  {
    "enunciado": "A palavra-chave SQL que retorna apenas as linhas que tenham correspondência em ambas as tabelas envolvidas na junção é o LEFT OUTER JOIN.",
    "correta": "E",
    "tema": "SQL - Joins",
    "justificativa": "O `LEFT OUTER JOIN` retorna todas as linhas da tabela da esquerda, havendo ou não correspondência. A palavra-chave que retorna apenas as linhas com correspondência em ambas é o **INNER JOIN** [2]."
  },
  {
    "enunciado": "Se o atributo A4 for um número inteiro, a consulta 'SELECT A1, COUNT(A4) FROM A4 GROUP BY A1' retornará a soma de A4 para cada grupo.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "A função `COUNT` conta o número de ocorrências (linhas). Para obter a **soma** dos valores de A4, deve-se utilizar a função `SUM(A4)` [3]."
  },
  {
    "enunciado": "Para recuperar dados utilizando cláusulas como INNER JOIN e WHERE, classificando-se tal operação como consulta de dados, utiliza-se a DQL (Data Query Language).",
    "correta": "C",
    "tema": "SQL - DQL",
    "justificativa": "A Linguagem de Consulta de Dados (DQL) engloba o comando `SELECT` e suas cláusulas (JOIN, WHERE, GROUP BY), sendo responsável pela recuperação de informações [4]."
  },
  {
    "enunciado": "A sintaxe 'CREATE funcionarios (id INTEGER...)' está correta para a criação de uma tabela.",
    "correta": "E",
    "tema": "SQL - DDL",
    "justificativa": "A sintaxe correta exige a palavra-chave `TABLE` após `CREATE`. O correto seria: `CREATE TABLE funcionarios (...)` [5, 6]."
  },
  {
    "enunciado": "Para filtrar livros disponíveis de uma categoria específica, relacionando as tabelas livros, autores e categorias, o uso de INNER JOIN é adequado para garantir que apenas registros com relacionamentos válidos sejam retornados.",
    "correta": "C",
    "tema": "SQL - Joins",
    "justificativa": "O `INNER JOIN` é a escolha correta quando se exige que o registro principal (livro) tenha correspondentes obrigatórios nas tabelas relacionadas (autor e categoria) para compor o resultado final [7, 8]."
  },
  {
    "enunciado": "A função de janela RANK() atribui a mesma posição a empates em um ranking e 'pula' a numeração das posições subsequentes (ex: 1, 1, 3).",
    "correta": "C",
    "tema": "SQL - Funções Analíticas",
    "justificativa": "Essa é a característica distintiva do `RANK()`. Se fosse para manter a sequência sem pular números (1, 1, 2), usaria-se `DENSE_RANK()` [9]."
  },
  {
    "enunciado": "O comando GRANT permite a definição de privilégios de acesso em colunas específicas para a instrução DELETE.",
    "correta": "E",
    "tema": "SQL - Segurança",
    "justificativa": "Privilégios de coluna são geralmente aplicáveis a `INSERT`, `UPDATE` e `REFERENCES` (e `SELECT` em alguns SGBDs). O `DELETE` remove a linha inteira, portanto, não costuma ser restrito a colunas específicas na sintaxe padrão de GRANT [10]."
  },
  {
    "enunciado": "Para listar contas com clientes associados onde o saldo não é nulo, pode-se usar um LEFT JOIN filtrando pela cláusula 'WHERE saldo IS NOT NULL'.",
    "correta": "C",
    "tema": "SQL - Joins",
    "justificativa": "Ao usar `LEFT JOIN` e filtrar o lado direito (conta/saldo) para não nulos, o comportamento se assemelha a um Inner Join, retornando apenas clientes que possuem contas com saldo válido [11, 12]."
  },
  {
    "enunciado": "O operador EXISTS é utilizado em cláusulas WHERE para verificar se uma subconsulta retorna ao menos um registro que satisfaça uma condição.",
    "correta": "C",
    "tema": "SQL - Subconsultas",
    "justificativa": "O `EXISTS` avalia se o conjunto resultado da subconsulta não é vazio, sendo útil para verificar a existência de registros correlacionados (ex: clientes que têm contas com saldo > 1000) [13]."
  },
  {
    "enunciado": "Uma subconsulta correlacionada pode ser usada para filtrar clientes cujo saldo total seja maior que a média de saldos da agência correspondente.",
    "correta": "C",
    "tema": "SQL - Subconsultas",
    "justificativa": "Subconsultas correlacionadas permitem comparar cada linha da consulta externa com um valor agregado calculado dinamicamente na subconsulta (ex: média da agência daquela linha) [14, 15]."
  },
  {
    "enunciado": "O uso de variáveis bind (parâmetros) em consultas SQL reduz o desempenho do banco de dados, pois impede a reutilização de planos de execução.",
    "correta": "E",
    "tema": "SQL - Desempenho",
    "justificativa": "Pelo contrário, o uso de variáveis bind **melhora** o desempenho, pois permite que o SGBD reutilize o plano de execução (cache) para a mesma consulta com valores diferentes, evitando o 'hard parse' [16]."
  },
  {
    "enunciado": "A sintaxe 'FROM Pedidos, Clientes INNER JOIN Clientes...' é recomendada para realizar junções entre tabelas.",
    "correta": "E",
    "tema": "SQL - Sintaxe",
    "justificativa": "Misturar a sintaxe antiga (lista de tabelas com vírgula) com a sintaxe ANSI (`INNER JOIN`) pode causar erros ou produtos cartesianos indesejados. A forma correta é usar apenas `FROM Pedidos INNER JOIN Clientes ON ...` [17]."
  },
  {
    "enunciado": "A execução de uma consulta com GROUP BY e COUNT sempre retornará resultados agrupados corretamente conforme a lógica de negócio, sem necessidade de validar os dados inseridos.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "O resultado depende estritamente dos dados. Na questão analisada (Q388), a contagem retornada pelo SQL (1, 1, 3) difere da interpretação errônea proposta pelo item, provando que é preciso validar [18, 19]."
  },
  {
    "enunciado": "O comando 'SELECT DISTINCT COUNT(...)' calcula a contagem de linhas e depois remove as duplicatas desse número resultante.",
    "correta": "C",
    "tema": "SQL - Agregação",
    "justificativa": "Tecnicamente, o SQL executa a agregação `COUNT` (retornando uma linha com o total) e depois aplica o `DISTINCT` nesse resultado único. No contexto da questão (Q389), o resultado '1' estava incorreto para os dados apresentados (que resultavam em 4), tornando o item errado, mas a lógica sintática é essa [20]."
  },
  {
    "enunciado": "O operador LIKE com o padrão '%E%' seleciona registros que contenham a letra 'E' em qualquer posição.",
    "correta": "C",
    "tema": "SQL - Filtros",
    "justificativa": "Os percentuais (%) funcionam como curingas para qualquer sequência de caracteres antes ou depois do 'E' [21]."
  },
  {
    "enunciado": "O comando SELECT DISTINCT ... WHERE NumeroInquerito = 111 retornará os envolvidos no inquérito 111.",
    "correta": "C",
    "tema": "SQL - Consultas",
    "justificativa": "Ao filtrar pelo número do inquérito e fazer os JOINS corretos, a consulta retorna os IDs dos envolvidos e o tipo daquele inquérito específico. Na questão 391, o gabarito foi Errado pois o resultado proposto omitia envolvidos que existiam nos dados [22]."
  },
  {
    "enunciado": "O operador BETWEEN pode ser usado no comando DELETE para restringir a quantidade de colunas a serem excluídas.",
    "correta": "E",
    "tema": "SQL - DML",
    "justificativa": "O comando `DELETE` apaga **linhas** inteiras. O `BETWEEN` na cláusula WHERE restringe quais linhas serão apagadas, não quais colunas [23]."
  },
  {
    "enunciado": "O comando SQL MODIFY é utilizado como um comando autônomo para alterar tabelas de um SGBD.",
    "correta": "E",
    "tema": "SQL - DDL",
    "justificativa": "`MODIFY` (ou `ALTER COLUMN`) é uma cláusula subordinada ao comando **ALTER TABLE**, não um comando independente [24]."
  },
  {
    "enunciado": "A execução de uma consulta 'SELECT a+10' onde 'a' possui valor NULL resultará no valor 10.",
    "correta": "E",
    "tema": "SQL - Null",
    "justificativa": "Em SQL, operações aritméticas envolvendo NULL resultam em NULL (desconhecido), não no valor numérico [24]."
  },
  {
    "enunciado": "A cláusula HAVING opera filtrando dados em um único conjunto de entrada, sem a necessidade de agregação.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "A cláusula `HAVING` é projetada especificamente para filtrar resultados **após** a agregação (`GROUP BY`). Para filtrar linhas individuais antes da agregação, usa-se `WHERE` [25]."
  },
  {
    "enunciado": "A função de agregação COUNT(a) conta registros com valor NULL na coluna 'a', enquanto AVG(a) considera os nulos como zero.",
    "correta": "E",
    "tema": "SQL - Agregação",
    "justificativa": "Funções de agregação padrão (como `COUNT(coluna)` e `AVG(coluna)`) **ignoram** os valores NULL. Eles não são contados nem entram na média como zero [26]."
  },
  {
    "enunciado": "Em uma consulta recursiva (CTE) que percorre uma hierarquia pai-filho, não há correspondência entre as chaves de junção.",
    "correta": "E",
    "tema": "SQL - CTE Recursiva",
    "justificativa": "Consultas recursivas funcionam justamente através da correspondência (join) entre a chave da tabela e a chave de referência (pai) na iteração anterior. Sem essa correspondência, a recursão não ocorre [27, 28]."
  },
  {
    "enunciado": "Pelo comando SELECT em um catálogo de dados, se a regra de negócio for 'valor_venda > 0', entende-se que os valores devem ser menores que zero.",
    "correta": "E",
    "tema": "Metadados",
    "justificativa": "O símbolo `>` indica 'maior que'. Portanto, a regra impõe que os valores sejam positivos, contradizendo a afirmação de que devem ser menores que zero [27]."
  },
  {
    "enunciado": "Uma CTE Recursiva pode ser usada para reconstruir e exibir a hierarquia de processos (pai/filho) em um resultado ordenado.",
    "correta": "C",
    "tema": "SQL - CTE Recursiva",
    "justificativa": "O uso de `WITH RECURSIVE` permite percorrer estruturas hierárquicas (árvores) armazenadas em tabelas relacionais e apresentar o caminho ou a relação pai-filho de forma legível [28, 29]."
  },
  {
    "enunciado": "Para filtrar empresas com 0 ou 1 auditoria em um período, deve-se usar LEFT JOIN e aplicar o filtro de data na cláusula ON (ou tratar nulos), agrupando por empresa.",
    "correta": "C",
    "tema": "SQL - Joins/Filtros",
    "justificativa": "O `LEFT JOIN` é necessário para incluir empresas com 0 auditorias. Se o filtro de data for colocado no `WHERE`, ele elimina as linhas nulas (0 auditorias); portanto, deve estar no `ON` ou permitir nulos. O `HAVING COUNT(*) <= 1` finaliza o filtro [30, 31]."
  },
  ];
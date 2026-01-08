const questions = [
{
  enunciado: "A engenharia de dados tem como foco principal a coleta, o armazenamento e o processamento de dados.",
  correta: "C",
  tema: "Fundamentos",
  justificativa: "O engenheiro de dados prepara a estrada para que os dados possam trafegar até quem vai analisá-los."
},
{
  enunciado: "A engenharia de dados se restringe à criação de modelos estatísticos.",
  correta: "E",
  tema: "Fundamentos",
  justificativa: "Modelos são foco da ciência de dados; engenharia de dados cuida da infraestrutura e do fluxo."
},
{
  enunciado: "Pipelines de dados automatizam o fluxo desde a origem até o consumo.",
  correta: "C",
  tema: "Pipelines",
  justificativa: "Funcionam como esteiras de fábrica que levam a matéria-prima até o produto final."
},
{
  enunciado: "A confiabilidade dos dados é um objetivo da engenharia de dados.",
  correta: "C",
  tema: "Qualidade de Dados",
  justificativa: "Dados errados geram decisões erradas, como um GPS desatualizado."
},
{
  enunciado: "A engenharia de dados não se preocupa com desempenho.",
  correta: "E",
  tema: "Desempenho",
  justificativa: "Performance é essencial para processar grandes volumes de dados."
},
{
  enunciado: "ETL significa extrair, transformar e carregar dados.",
  correta: "C",
  tema: "ETL",
  justificativa: "É como pegar ingredientes, preparar e servir um prato."
},
{
  enunciado: "No ELT, a transformação ocorre antes do carregamento.",
  correta: "E",
  tema: "ELT",
  justificativa: "No ELT, primeiro carrega, depois transforma."
},
{
  enunciado: "Data warehouses são orientados a análise e tomada de decisão.",
  correta: "C",
  tema: "Data Warehouse",
  justificativa: "São como bibliotecas organizadas para consulta estratégica."
},
{
  enunciado: "Data lakes armazenam dados estruturados e não estruturados.",
  correta: "C",
  tema: "Data Lake",
  justificativa: "Funcionam como um grande reservatório bruto de dados."
},
{
  enunciado: "Data lakes exigem esquema rígido no momento da ingestão.",
  correta: "E",
  tema: "Data Lake",
  justificativa: "O esquema é aplicado na leitura, não na escrita."
},
{
  enunciado: "A engenharia de dados lida com grandes volumes de dados.",
  correta: "C",
  tema: "Big Data",
  justificativa: "É como organizar uma cidade inteira de informações."
},
{
  enunciado: "A escalabilidade é requisito importante em projetos de dados.",
  correta: "C",
  tema: "Escalabilidade",
  justificativa: "O sistema deve crescer sem quebrar, como prédios bem planejados."
},
{
  enunciado: "A latência é irrelevante em pipelines de dados.",
  correta: "E",
  tema: "Latência",
  justificativa: "Em muitos cenários, dados atrasados perdem valor."
},
{
  enunciado: "Dados podem ser processados em lote ou em tempo real.",
  correta: "C",
  tema: "Processamento",
  justificativa: "É a diferença entre analisar relatórios mensais ou acompanhar um painel ao vivo."
},
{
  enunciado: "Processamento em streaming trata dados conforme chegam.",
  correta: "C",
  tema: "Streaming",
  justificativa: "Como acompanhar um placar de jogo em tempo real."
},
{
  enunciado: "A engenharia de dados não se preocupa com segurança.",
  correta: "E",
  tema: "Segurança",
  justificativa: "Proteger dados é essencial para evitar vazamentos."
},
{
  enunciado: "Governança de dados define regras para uso e gestão dos dados.",
  correta: "C",
  tema: "Governança",
  justificativa: "É o manual de convivência dos dados."
},
{
  enunciado: "A qualidade dos dados independe de validações.",
  correta: "E",
  tema: "Qualidade",
  justificativa: "Validações evitam erros desde a origem."
},
{
  enunciado: "Logs e monitoramento ajudam a identificar falhas em pipelines.",
  correta: "C",
  tema: "Monitoramento",
  justificativa: "São como câmeras de segurança do fluxo de dados."
},
{
  enunciado: "Falhas em pipelines devem ser tratadas automaticamente.",
  correta: "C",
  tema: "Resiliência",
  justificativa: "O sistema deve se recuperar sem intervenção manual."
},
{
  enunciado: "Engenharia de dados é etapa anterior à análise de dados.",
  correta: "C",
  tema: "Fundamentos",
  justificativa: "Sem dados bem preparados, não há boa análise."
},
{
  enunciado: "A ingestão de dados ocorre apenas por arquivos CSV.",
  correta: "E",
  tema: "Ingestão",
  justificativa: "Pode ocorrer via APIs, streams, bancos, entre outros."
},
{
  enunciado: "A padronização facilita o consumo dos dados.",
  correta: "C",
  tema: "Padronização",
  justificativa: "É como usar o mesmo idioma para todos entenderem."
},
{
  enunciado: "A engenharia de dados é exclusiva de ambientes on-premises.",
  correta: "E",
  tema: "Ambientes",
  justificativa: "É amplamente utilizada em nuvem."
},
{
  enunciado: "A automação é fundamental em ambientes modernos de dados.",
  correta: "C",
  tema: "Automação",
  justificativa: "Reduz erros humanos e aumenta eficiência."
},
{
  enunciado: "Bancos de dados relacionais utilizam tabelas com linhas e colunas.",
  correta: "C",
  tema: "Bancos Relacionais",
  justificativa: "É como uma planilha organizada, com estrutura bem definida."
},
{
  enunciado: "Bancos NoSQL não possuem esquema definido.",
  correta: "E",
  tema: "NoSQL",
  justificativa: "Podem ter esquema flexível, mas ainda seguem estrutura lógica."
},
{
  enunciado: "Data warehouses são otimizados para consultas analíticas.",
  correta: "C",
  tema: "Data Warehouse",
  justificativa: "São feitos para leitura intensiva e análise histórica."
},
{
  enunciado: "OLTP é voltado para processamento transacional.",
  correta: "C",
  tema: "OLTP",
  justificativa: "Funciona como o caixa de um supermercado, registrando operações."
},
{
  enunciado: "OLAP é utilizado para análise multidimensional.",
  correta: "C",
  tema: "OLAP",
  justificativa: "Permite analisar dados por várias perspectivas."
},
{
  enunciado: "Modelagem dimensional utiliza fatos e dimensões.",
  correta: "C",
  tema: "Modelagem Dimensional",
  justificativa: "Fatos são números; dimensões dão contexto."
},
{
  enunciado: "Tabelas fato armazenam atributos descritivos.",
  correta: "E",
  tema: "Modelagem Dimensional",
  justificativa: "Atributos descritivos ficam nas dimensões."
},
{
  enunciado: "O esquema estrela simplifica consultas analíticas.",
  correta: "C",
  tema: "Esquema Estrela",
  justificativa: "Menos joins, consultas mais rápidas."
},
{
  enunciado: "O esquema floco de neve normaliza dimensões.",
  correta: "C",
  tema: "Floco de Neve",
  justificativa: "Divide dimensões em tabelas menores."
},
{
  enunciado: "Bancos colunares são eficientes para análises.",
  correta: "C",
  tema: "Bancos Colunares",
  justificativa: "Lê apenas colunas necessárias."
},
{
  enunciado: "Bancos de dados chave-valor são comuns em NoSQL.",
  correta: "C",
  tema: "NoSQL",
  justificativa: "Funcionam como dicionários."
},
{
  enunciado: "Bancos orientados a grafos são úteis para relações complexas.",
  correta: "C",
  tema: "Grafos",
  justificativa: "Ideais para redes sociais e recomendações."
},
{
  enunciado: "Armazenamento em nuvem elimina necessidade de backup.",
  correta: "E",
  tema: "Armazenamento",
  justificativa: "Backup continua sendo essencial."
},
{
  enunciado: "Data lakes armazenam dados em formato bruto.",
  correta: "C",
  tema: "Data Lake",
  justificativa: "Guarda dados como chegam."
},
{
  enunciado: "Metadados descrevem características dos dados.",
  correta: "C",
  tema: "Metadados",
  justificativa: "São rótulos explicativos."
},
{
  enunciado: "Catálogo de dados facilita descoberta de informações.",
  correta: "C",
  tema: "Catálogo de Dados",
  justificativa: "É como um índice de biblioteca."
},
{
  enunciado: "A normalização reduz redundância em bancos relacionais.",
  correta: "C",
  tema: "Normalização",
  justificativa: "Evita duplicações desnecessárias."
},
{
  enunciado: "Desnormalização prejudica desempenho analítico.",
  correta: "E",
  tema: "Desnormalização",
  justificativa: "Pode melhorar desempenho em consultas."
},
{
  enunciado: "Persistência de dados garante armazenamento durável.",
  correta: "C",
  tema: "Persistência",
  justificativa: "Evita perda de dados após falhas."
},
{
  enunciado: "Bancos distribuídos aumentam tolerância a falhas.",
  correta: "C",
  tema: "Distribuição",
  justificativa: "Se um nó falha, outro assume."
},
{
  enunciado: "Consistência forte é sempre preferível.",
  correta: "E",
  tema: "Consistência",
  justificativa: "Depende do caso de uso."
},
{
  enunciado: "O teorema CAP envolve consistência, disponibilidade e tolerância a particionamento.",
  correta: "C",
  tema: "CAP",
  justificativa: "Não é possível garantir os três ao mesmo tempo."
},
{
  enunciado: "Replicação aumenta disponibilidade.",
  correta: "C",
  tema: "Replicação",
  justificativa: "Cópias garantem acesso contínuo."
},
{
  enunciado: "Sharding divide dados horizontalmente.",
  correta: "C",
  tema: "Sharding",
  justificativa: "Cada nó guarda parte dos dados."
},
{
  enunciado: "Armazenamento local é mais escalável que nuvem.",
  correta: "E",
  tema: "Escalabilidade",
  justificativa: "Nuvem escala com mais facilidade."
},
{
  enunciado: "Big Data caracteriza-se por volume, variedade e velocidade.",
  correta: "C",
  tema: "Big Data",
  justificativa: "Os 3Vs explicam os desafios dos dados modernos."
},
{
  enunciado: "Processamento em lote ocorre em tempo real.",
  correta: "E",
  tema: "Processamento",
  justificativa: "O lote ocorre em intervalos."
},
{
  enunciado: "Processamento em streaming trata eventos contínuos.",
  correta: "C",
  tema: "Streaming",
  justificativa: "É como acompanhar dados ao vivo."
},
{
  enunciado: "Apache Kafka é usado para streaming de dados.",
  correta: "C",
  tema: "Kafka",
  justificativa: "Funciona como fila de eventos."
},
{
  enunciado: "Apache Spark suporta processamento distribuído.",
  correta: "C",
  tema: "Spark",
  justificativa: "Divide tarefas entre vários nós."
},
{
  enunciado: "MapReduce é um modelo de processamento distribuído.",
  correta: "C",
  tema: "MapReduce",
  justificativa: "Divide e depois consolida resultados."
},
{
  enunciado: "Pipelines de dados não precisam de monitoramento.",
  correta: "E",
  tema: "Pipelines",
  justificativa: "Monitorar evita falhas silenciosas."
},
{
  enunciado: "Orquestração coordena tarefas em pipelines.",
  correta: "C",
  tema: "Orquestração",
  justificativa: "É o maestro do fluxo de dados."
},
{
  enunciado: "Apache Airflow é ferramenta de orquestração.",
  correta: "C",
  tema: "Airflow",
  justificativa: "Gerencia dependências entre tarefas."
},
{
  enunciado: "Falhas devem interromper permanentemente pipelines.",
  correta: "E",
  tema: "Resiliência",
  justificativa: "O ideal é recuperação automática."
},
{
  enunciado: "Idempotência evita duplicação de dados.",
  correta: "C",
  tema: "Idempotência",
  justificativa: "Executar duas vezes gera o mesmo resultado."
},
{
  enunciado: "Versionamento de dados facilita auditoria.",
  correta: "C",
  tema: "Versionamento",
  justificativa: "Permite rastrear mudanças."
},
{
  enunciado: "Processamento distribuído melhora escalabilidade.",
  correta: "C",
  tema: "Escalabilidade",
  justificativa: "Divide carga entre máquinas."
},
{
  enunciado: "Streaming é sempre mais simples que batch.",
  correta: "E",
  tema: "Streaming",
  justificativa: "Streaming é mais complexo."
},
{
  enunciado: "Checkpoints ajudam na recuperação de falhas.",
  correta: "C",
  tema: "Checkpoints",
  justificativa: "Salvam estado intermediário."
},
{
  enunciado: "Pipelines devem ser documentados.",
  correta: "C",
  tema: "Documentação",
  justificativa: "Facilita manutenção."
},
{
  enunciado: "Processamento em memória aumenta desempenho.",
  correta: "C",
  tema: "Memória",
  justificativa: "Reduz acesso a disco."
},
{
  enunciado: "Logs não são importantes em ambientes de dados.",
  correta: "E",
  tema: "Logs",
  justificativa: "São essenciais para diagnóstico."
},
{
  enunciado: "Streaming é indicado para eventos contínuos.",
  correta: "C",
  tema: "Streaming",
  justificativa: "Ideal para dados em tempo real."
},
{
  enunciado: "Batch é adequado para grandes volumes históricos.",
  correta: "C",
  tema: "Batch",
  justificativa: "Processa grandes massas periodicamente."
},
{
  enunciado: "Pipelines manuais são mais confiáveis.",
  correta: "E",
  tema: "Automação",
  justificativa: "Automação reduz erros."
},
{
  enunciado: "A engenharia de dados busca reduzir gargalos.",
  correta: "C",
  tema: "Desempenho",
  justificativa: "Fluxos eficientes são objetivo."
},
{
  enunciado: "Testes são dispensáveis em pipelines.",
  correta: "E",
  tema: "Testes",
  justificativa: "Testes garantem qualidade."
},
{
  enunciado: "Escalabilidade horizontal adiciona mais nós.",
  correta: "C",
  tema: "Escalabilidade",
  justificativa: "Cresce lateralmente."
},
{
  enunciado: "Pipelines não impactam decisões de negócio.",
  correta: "E",
  tema: "Impacto",
  justificativa: "Dados alimentam decisões."
},
{
  enunciado: "Governança de dados define políticas e responsabilidades.",
  correta: "C",
  tema: "Governança",
  justificativa: "É a regra do jogo dos dados."
},
{
  enunciado: "Qualidade de dados independe de governança.",
  correta: "E",
  tema: "Qualidade",
  justificativa: "Governança sustenta qualidade."
},
{
  enunciado: "Segurança de dados envolve confidencialidade, integridade e disponibilidade.",
  correta: "C",
  tema: "Segurança",
  justificativa: "O famoso tripé da segurança."
},
{
  enunciado: "Controle de acesso protege dados sensíveis.",
  correta: "C",
  tema: "Acesso",
  justificativa: "Nem todos podem ver tudo."
},
{
  enunciado: "Criptografia protege dados em repouso e em trânsito.",
  correta: "C",
  tema: "Criptografia",
  justificativa: "É como trancar informações."
},
{
  enunciado: "LGPD não se aplica a dados públicos.",
  correta: "E",
  tema: "LGPD",
  justificativa: "Aplica-se conforme o tratamento."
},
{
  enunciado: "Qualidade de dados envolve acurácia e completude.",
  correta: "C",
  tema: "Qualidade",
  justificativa: "Dados corretos e completos."
},
{
  enunciado: "Linhas de dados descrevem a origem e transformação.",
  correta: "C",
  tema: "Lineage",
  justificativa: "Conta a história do dado."
},
{
  enunciado: "Auditoria de dados facilita conformidade.",
  correta: "C",
  tema: "Auditoria",
  justificativa: "Permite verificar regras."
},
{
  enunciado: "Governança de dados é responsabilidade exclusiva da TI.",
  correta: "E",
  tema: "Governança",
  justificativa: "É responsabilidade organizacional."
},
{
  enunciado: "Catálogo de dados apoia governança.",
  correta: "C",
  tema: "Catálogo",
  justificativa: "Organiza e descreve dados."
},
{
  enunciado: "Dados mestres garantem consistência.",
  correta: "C",
  tema: "MDM",
  justificativa: "Fonte única da verdade."
},
{
  enunciado: "Backup reduz risco de perda de dados.",
  correta: "C",
  tema: "Backup",
  justificativa: "Seguro contra falhas."
},
{
  enunciado: "Planos de recuperação de desastres são irrelevantes.",
  correta: "E",
  tema: "DR",
  justificativa: "São essenciais."
},
{
  enunciado: "Governança melhora confiança nos dados.",
  correta: "C",
  tema: "Confiança",
  justificativa: "Dados confiáveis geram decisões melhores."
},
{
  enunciado: "Classificação de dados auxilia segurança.",
  correta: "C",
  tema: "Classificação",
  justificativa: "Define níveis de proteção."
},
{
  enunciado: "Qualidade é responsabilidade apenas do consumidor do dado.",
  correta: "E",
  tema: "Qualidade",
  justificativa: "É responsabilidade compartilhada."
},
{
  enunciado: "Políticas de retenção definem tempo de armazenamento.",
  correta: "C",
  tema: "Retenção",
  justificativa: "Evita guardar dados desnecessários."
},
{
  enunciado: "Governança impede inovação.",
  correta: "E",
  tema: "Governança",
  justificativa: "Governança bem feita apoia inovação."
},
{
  enunciado: "Monitoramento contínuo melhora qualidade.",
  correta: "C",
  tema: "Monitoramento",
  justificativa: "Detecta problemas cedo."
},
{
  enunciado: "Segurança deve ser pensada desde o design.",
  correta: "C",
  tema: "Security by Design",
  justificativa: "Evita correções tardias."
},
{
  enunciado: "Engenharia de dados não influencia compliance.",
  correta: "E",
  tema: "Compliance",
  justificativa: "Impacta diretamente."
},
{
  enunciado: "Governança apoia auditorias externas.",
  correta: "C",
  tema: "Auditoria",
  justificativa: "Facilita comprovações."
},
{
  enunciado: "Qualidade de dados não afeta modelos analíticos.",
  correta: "E",
  tema: "Qualidade",
  justificativa: "Modelos dependem de bons dados."
},
{
  enunciado: "A engenharia de dados sustenta decisões estratégicas.",
  correta: "C",
  tema: "Valor do Dado",
  justificativa: "Dados bem tratados geram valor."
},

];
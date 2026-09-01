import { ServiceItem, DifferentialItem, CaseStudy, Testimonial } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'software-sob-encomenda',
    title: 'Desenvolvimento de Software Sob Encomenda',
    shortDesc: 'Criação de sistemas e aplicativos personalizados para atender às necessidades específicas do seu negócio, do planejamento à entrega.',
    fullDesc: 'Construção de ecossistemas digitais completos, desde plataformas web robustas, portais corporativos, aplicativos móveis (iOS e Android) até integrações complexas de APIs e automações industriais/comerciais. Cada linha de código é desenvolvida sob medida para a sua operação.',
    cnae: 'Desenvolvimento de programas de computador sob encomenda',
    cnaeCode: 'CNAE 6202-3/00',
    iconName: 'Code',
    category: 'Desenvolvimento & Engenharia',
    highlights: [
      'Arquitetura em nuvem escalável e moderna',
      'Interfaces intuitivas focadas em experiência do usuário (UI/UX)',
      'Integrações com ERPs, CRMs e gateways de pagamento',
      'Metodologias ágeis (Scrum/Kanban) com entregas quinzenais'
    ],
    deliverables: [
      'Documentação técnica e diagramas de arquitetura',
      'Código-fonte seguro com versionamento Git',
      'Testes automatizados e homologação em ambiente isolado',
      'Treinamento operacional e garantia pós-implantação'
    ],
    idealFor: 'Empresas que necessitam de processos digitais exclusivos que softwares de prateleira não conseguem atender.'
  },
  {
    id: 'licenciamento-programas',
    title: 'Licenciamento de Programas de Computador',
    shortDesc: 'Fornecimento de soluções de software customizáveis e não customizáveis (prontas para uso), com licenciamento flexível e suporte à implementação.',
    fullDesc: 'Disponibilização de módulos de software prontos e homologados para acelerar a transformação digital da sua empresa. Modelos de licenciamento sob medida (SaaS, perpétuo ou por assinatura), permitindo parametrização ágil para seu nicho de atuação.',
    cnae: 'Desenvolvimento e licenciamento de programas de computador customizáveis e não-customizáveis',
    cnaeCode: 'CNAE 6202-3/00 e 6203-1/00',
    iconName: 'PackageCheck',
    category: 'Soluções Comerciais & SaaS',
    highlights: [
      'Implantação rápida com menor custo de entrada',
      'Módulos parametrizáveis para regras fiscais e gerenciais',
      'Atualizações periódicas com novas funcionalidades e segurança',
      'Contratos claros com SLA (Acordo de Nível de Serviço) garantido'
    ],
    deliverables: [
      'Chaves de licença e contratos de conformidade de uso',
      'Setup inicial e migração assistida de dados legados',
      'Manuais de instrução e base de conhecimento em vídeo',
      'Suporte técnico de primeiro e segundo nível'
    ],
    idealFor: 'Pequenas e médias empresas que buscam rapidez na digitalização com investimento previsível.'
  },
  {
    id: 'consultoria-ti',
    title: 'Consultoria em Tecnologia da Informação',
    shortDesc: 'Diagnóstico, planejamento estratégico e transformação digital. Ajudamos sua empresa a otimizar processos, implementar boas práticas de governança e fortalecer a Segurança da Informação.',
    fullDesc: 'Análise aprofundada da infraestrutura tecnológica e dos processos de negócio da sua organização. Atuação estratégica com foco em auditoria de segurança da informação, conformidade com a LGPD (Lei Geral de Proteção de Dados), redução de custos operacionais e seleção assertiva de tecnologias.',
    cnae: 'Consultoria em tecnologia da informação',
    cnaeCode: 'CNAE 6204-0/00',
    iconName: 'BarChart3',
    category: 'Estratégia & Governança',
    highlights: [
      'Auditoria de vulnerabilidades e maturidade em cibersegurança',
      'Mapeamento e modelagem de processos para automação',
      'Plano Diretor de TI (PDTI) e governança alinhada ao negócio',
      'Adequação técnica e processual à LGPD'
    ],
    deliverables: [
      'Relatório executivo de diagnóstico de vulnerabilidades e gargalos',
      'Roadmap estratégico de evolução tecnológica prioritária',
      'Políticas de Segurança da Informação (PSI) personalizadas',
      'Sessões de mentoria e acompanhamento da liderança'
    ],
    idealFor: 'Empresas que desejam tomar decisões de tecnologia com embasamento técnico e mitigar riscos de segurança.'
  },
  {
    id: 'suporte-manutencao-ti',
    title: 'Suporte Técnico e Manutenção de TI',
    shortDesc: 'Help desk, manutenção preventiva e corretiva de infraestrutura, garantindo a continuidade operacional e a estabilidade dos seus sistemas.',
    fullDesc: 'Gestão contínua da saúde tecnológica da sua empresa. Atendimento especializado em modalidades remota e presencial para resolução rápida de incidentes, administração de redes, gestão de backups, monitoramento proativo e sustentação de sistemas.',
    cnae: 'Suporte técnico, manutenção e outros serviços em tecnologia da informação',
    cnaeCode: 'CNAE 6209-1/00',
    iconName: 'Wrench',
    category: 'Operação & Continuidade',
    highlights: [
      'Atendimento preventivo e corretivo ágil',
      'Rotinas automatizadas de backup seguro (3-2-1) em nuvem',
      'Monitoramento 24/7 de links, servidores e serviços críticos',
      'Gestão de ativos e inventário de TI'
    ],
    deliverables: [
      'Portal exclusivo para abertura e acompanhamento de chamados',
      'Relatórios mensais de incidentes, causas-raiz e tempo de resposta',
      'Plano de Recuperação de Desastres (Disaster Recovery Plan)',
      'Manutenções preventivas programadas sem parada na operação'
    ],
    idealFor: 'Organizações que não podem sofrer interrupções operacionais e necessitam de uma equipe técnica de confiança.'
  },
  {
    id: 'tratamento-dados-hospedagem',
    title: 'Tratamento de Dados e Hospedagem na Internet',
    shortDesc: 'Serviços de hospedagem segura, provedores de serviços de aplicação (ASP/SaaS) e gestão de ambientes em nuvem para garantir performance e disponibilidade.',
    fullDesc: 'Infraestrutura de nuvem de ponta (AWS, Google Cloud Platform, Azure e servidores dedicados) dimensionada para máxima velocidade, tolerância a falhas e isolamento de dados. Engenharia de dados para pipelines de integração, ETL, dashboards analíticos e conformidade com privacidade.',
    cnae: 'Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet',
    cnaeCode: 'CNAE 6311-9/00',
    iconName: 'Cloud',
    category: 'Infraestrutura & Cloud Computing',
    highlights: [
      'Servidores cloud com 99.9% de SLA de disponibilidade',
      'Certificados SSL automáticos, WAF (Firewall Web) e proteção Anti-DDoS',
      'Pipelines de tratamento, enriquecimento e organização de dados',
      'Otimização contínua de custos de nuvem (FinOps)'
    ],
    deliverables: [
      'Ambiente em nuvem configurado com provisionamento automatizado',
      'Painel de telemetria com gráficos de uso e saúde dos servidores',
      'Estruturas de banco de dados otimizadas e replicadas',
      'Rotinas de criptografia em repouso e em trânsito'
    ],
    idealFor: 'Sistemas que exigem alta performance, segurança de dados confidenciais e disponibilidade contínua.'
  }
];

export const differentialsData: DifferentialItem[] = [
  {
    title: 'Gestão de Projetos Aplicada',
    description: 'Metodologias ágeis (Scrum & Kanban) integradas às melhores práticas do PMI/PMBOK. Previsibilidade de escopo, transparência absoluta em cada etapa e compromisso rigoroso com prazos e orçamentos acordados.',
    icon: 'Kanban',
    tag: 'Eficiência e Prazos'
  },
  {
    title: 'Foco em Segurança da Informação',
    description: 'Segurança desde a concepção (Security by Design e DevSecOps). Desenvolvimento seguro, proteção contra vulnerabilidades OWASP, criptografia de ponta a ponta e adequação rigorosa à LGPD.',
    icon: 'ShieldCheck',
    tag: 'Proteção & Compliance'
  },
  {
    title: 'Atendimento Personalizado e Consultivo',
    description: 'Relacionamento direto com especialistas, sem intermediários burocráticos. Soluções arquitetadas sob medida que acompanham a maturação e a escala da sua empresa, com atendimento presencial no Ceará e remoto em todo o Brasil.',
    icon: 'Users',
    tag: 'Parceria de Longo Prazo'
  },
  {
    title: 'Solidez Acadêmica & Prática de Mercado',
    description: 'União da profundidade teórica da Ciência da Computação com vivência prática na resolução de gargalos operacionais reais e implementação de sistemas críticos de alta disponibilidade.',
    icon: 'GraduationCap',
    tag: 'Excelência Técnica'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    clientCategory: 'Empresa de Distribuição & Logística',
    title: 'Modernização de Sistema de Rastreio e Gestão de Frotas',
    challenge: 'A empresa operava com planilhas dispersas e lentidão no controle de remessas, gerando atrasos nas entregas e falhas de comunicação com clientes.',
    solution: 'Desenvolvimento de software sob encomenda web e mobile integrado ao ERP legado, com rastreamento em tempo real e painel operacional.',
    result: 'Redução de 45% no tempo de processamento de pedidos e eliminação de 98% dos erros manuais de digitação.',
    metrics: [
      { label: 'Ganho em Produtividade', value: '+45%' },
      { label: 'Disponibilidade do Sistema', value: '99.9%' },
      { label: 'Retorno sobre Investimento', value: '4 meses' }
    ],
    tags: ['Software Sob Encomenda', 'CNAE 6202-3/00', 'Mobile & Web']
  },
  {
    id: 'case-2',
    clientCategory: 'Clínica Médica & Saúde Suplementar',
    title: 'Auditoria em Segurança da Informação e Adequação LGPD',
    challenge: 'Necessidade de garantir sigilo absoluto de prontuários eletrônicos sensíveis e blindar a rede interna contra ataques de ransomware.',
    solution: 'Consultoria de TI abrangente com testes de intrusão, reformulação da política de senhas/acessos, implantação de backup em nuvem criptografado e treinamento da equipe.',
    result: '100% de conformidade com os requisitos da LGPD e zero incidentes de segurança registrados após a implementação.',
    metrics: [
      { label: 'Conformidade LGPD', value: '100%' },
      { label: 'Incidentes de Invasão', value: '0' },
      { label: 'Tempo de Recuperação', value: '< 15 min' }
    ],
    tags: ['Consultoria de TI', 'CNAE 6204-0/00', 'Segurança da Informação']
  },
  {
    id: 'case-3',
    clientCategory: 'Empresa de Serviços Contábeis e Financeiros',
    title: 'Migração de Servidor Local para Nuvem com Suporte Técnico Dedicado',
    challenge: 'Servidor físico antigo apresentava constantes travamentos no fechamento contábil mensal, gerando riscos de perda irreparável de dados fiscais.',
    solution: 'Migração completa para ambiente Cloud estruturado com redundância, acompanhado por contrato de suporte técnico proativo e help desk ágil.',
    result: 'Estabilidade total nos picos de fechamento contábil, permitindo trabalho remoto seguro para toda a equipe.',
    metrics: [
      { label: 'Velocidade de Processamento', value: '3.2x mais rápido' },
      { label: 'SLA de Resolução', value: '< 30 min' },
      { label: 'Satisfação dos Usuários', value: '9.8 / 10' }
    ],
    tags: ['Hospedagem & Cloud', 'CNAE 6311-9/00', 'Suporte Técnico']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Eduardo Barreto',
    role: 'Diretor de Operações',
    company: 'LogiFort Distribuidora',
    location: 'Fortaleza - CE',
    rating: 5,
    content: 'A parceria com o João Mesquita foi um divisor de águas. O software sob encomenda entregue atendeu com perfeição todas as especificidades do nosso fluxo logístico. O compromisso com os prazos e a qualidade do código são impecáveis.'
  },
  {
    id: 'test-2',
    name: 'Dra. Mariana Vasconcelos',
    role: 'Gestora Executiva',
    company: 'Centro Médico Integrado',
    location: 'Sobral - CE',
    rating: 5,
    content: 'A consultoria em segurança da informação nos trouxe total tranquilidade jurídica e operacional quanto à LGPD. Profissionalismo de altíssimo nível, didático e extremamente técnico.'
  },
  {
    id: 'test-3',
    name: 'Roberto Mendes Jr.',
    role: 'CEO & Fundador',
    company: 'Nexus Soluções Comerciais',
    location: 'Ceará / Remoto Brasil',
    rating: 5,
    content: 'O suporte técnico e a gestão da nossa infraestrutura em nuvem funcionam de forma silenciosa e perfeita. Nossos sistemas nunca mais saíram do ar no meio do expediente comercial.'
  }
];

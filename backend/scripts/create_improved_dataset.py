# backend/create_improved_dataset.py
import pandas as pd
import numpy as np
import random
import os

def create_productive_emails():
    """Gera emails produtivos variados e realistas"""
    
    # Templates de problemas técnicos
    technical_problems = [
        "Sistema {sistema} apresentando erro {erro} desde {tempo}",
        "Não consigo acessar {modulo} - aparece mensagem {mensagem}",
        "Falha na {operacao} do {sistema} durante {periodo}",
        "Performance muito lenta no {funcionalidade} desde {tempo}",
        "Erro {codigo} ao tentar {acao} no {sistema}",
        "Problema de sincronização entre {sistema1} e {sistema2}",
        "Timeout na {operacao} após {tempo} de processamento",
        "Integração com {servico} não está funcionando",
        "Backup automático falhando com erro {mensagem}",
        "Dashboard não carrega dados de {periodo}"
    ]
    
    # Templates de solicitações
    requests = [
        "Preciso de acesso ao {recurso} para {finalidade}",
        "Como configurar {funcionalidade} no {sistema}?",
        "Solicitação de permissão para {acao} em {modulo}",
        "Preciso urgentemente {servico} para {projeto}",
        "Como integrar {sistema} com {ferramenta_externa}?",
        "Solicitação de aumento de limite em {recurso}",
        "Preciso de orientação para {processo} no {sistema}",
        "Como resolver problema de {tipo_problema} em {contexto}?",
        "Solicitação de instalação de {software} para {finalidade}",
        "Preciso exportar dados de {periodo} do {sistema}"
    ]
    
    # Templates de status e acompanhamento
    status_requests = [
        "Qual o status da solicitação protocolo {numero}?",
        "Quando será implementada a correção do {problema}?",
        "Preciso acompanhar andamento de {processo} iniciado em {data}",
        "Em que etapa está {solicitacao} enviada há {tempo}?",
        "Quando teremos retorno sobre {questao} reportada?",
        "Status da migração de {dados} agendada para {periodo}",
        "Atualização sobre resolução de {problema} crítico",
        "Acompanhamento do chamado {numero} aberto em {data}",
        "Previsão para conclusão de {projeto} em andamento",
        "Quando será liberada versão corrigida de {sistema}?"
    ]
    
    # Templates de urgência
    urgent = [
        "URGENTE: {problema} impedindo {processo_critico}",
        "Emergência: {sistema} fora do ar durante {evento_importante}",
        "Crítico: perda de dados em {sistema} necessita {acao_imediata}",
        "Prioridade alta: {cliente_importante} reporta {problema_grave}",
        "Bloqueador: {funcionalidade_essencial} não funciona",
        "Emergencial: {processo_negocio} parado por {motivo_tecnico}",
        "Urgente: deadline em {tempo} e {impedimento} bloqueia entrega",
        "Crítico: {falha_seguranca} detectada em {sistema_producao}",
        "Emergência: {integracao_pagamento} com problemas na {evento_vendas}",
        "Prioridade máxima: {sistema_core} instável em produção"
    ]
    
    # Valores para substituição
    valores = {
        'sistema': ['CRM', 'ERP', 'e-commerce', 'dashboard', 'API', 'aplicativo mobile', 'plataforma', 'sistema financeiro'],
        'erro': ['500', '404', '403', 'timeout', 'connection refused', 'database error'],
        'tempo': ['manhã', 'ontem', 'segunda-feira', 'esta semana', '2 horas', 'hoje cedo'],
        'modulo': ['relatórios', 'área financeira', 'gestão de usuários', 'módulo de vendas', 'painel administrativo'],
        'mensagem': ['"acesso negado"', '"erro interno"', '"sessão expirada"', '"dados inválidos"'],
        'operacao': ['importação', 'exportação', 'sincronização', 'backup', 'migração'],
        'periodo': ['madrugada', 'horário comercial', 'final de semana', 'pico de acesso'],
        'codigo': ['HTTP 500', 'ERR_001', 'CODE 403', 'SQL_ERROR'],
        'acao': ['salvar dados', 'gerar relatório', 'fazer login', 'enviar email'],
        'funcionalidade': ['busca avançada', 'filtros', 'exportação CSV', 'autenticação'],
        'sistema1': ['Salesforce', 'SAP', 'aplicativo'], 
        'sistema2': ['banco de dados', 'sistema legado', 'API externa'],
        'servico': ['webhook', 'API REST', 'FTP', 'integração'],
        'recurso': ['banco de dados', 'área administrativa', 'módulo financeiro'],
        'finalidade': ['gerar relatórios mensais', 'configurar integrações', 'treinar equipe'],
        'projeto': ['lançamento do produto', 'migração de dados', 'auditoria'],
        'numero': ['#12345', '#67890', '#54321', '#98765'],
        'problema': ['bug na autenticação', 'lentidão no sistema', 'erro de sincronização'],
        'processo': ['migração de dados', 'implementação de feature', 'correção de bug'],
        'data': ['segunda-feira', 'semana passada', '15/01', 'início do mês']
    }
    
    all_templates = technical_problems + requests + status_requests + urgent
    emails = []
    
    # Gerar emails usando templates
    for i in range(800):  # 800 emails via templates
        template = random.choice(all_templates)
        email = template
        
        # Substituir placeholders
        import re
        placeholders = re.findall(r'\{(\w+)\}', template)
        for placeholder in placeholders:
            if placeholder in valores:
                replacement = random.choice(valores[placeholder])
                email = email.replace(f'{{{placeholder}}}', replacement)
        
        emails.append(email)
    
    # Adicionar emails específicos escritos manualmente (200)
    specific_emails = [
        "O login não está funcionando depois da atualização de ontem. Sempre aparece erro de credenciais.",
        "Como faço para integrar nosso sistema com a API de pagamentos do PagSeguro?",
        "Preciso urgentemente dos relatórios de vendas de dezembro para apresentação na diretoria.",
        "Sistema travando constantemente quando tento importar planilha com mais de 1000 linhas.",
        "Não consigo acessar o módulo financeiro - diz que não tenho permissão.",
        "API retornando erro 500 em todas as requisições desde as 14h de hoje.",
        "Como configurar backup automático para rodar todo domingo às 2h da manhã?",
        "Cliente VIP reportando que não consegue finalizar compra no checkout.",
        "Webhook de pagamento não está enviando notificações para nosso sistema.",
        "Performance do dashboard extremamente lenta com mais de 100 usuários simultâneos.",
        "Preciso resetar senha do usuário admin que foi bloqueada por tentativas incorretas.",
        "Como exportar todos os dados de clientes dos últimos 6 meses em formato CSV?",
        "Sistema de email marketing não está enviando campanhas agendadas.",
        "Integração com correios parou de funcionar - rastreamento não atualiza.",
        "Preciso de acesso de administrador para configurar novos usuários da filial.",
        "Database connection timeout durante processo de sincronização noturna.",
        "Como configurar SSL certificate no domínio principal da aplicação?",
        "Módulo de estoque não está atualizando quantidades após vendas realizadas.",
        "Erro de autenticação OAuth com Google Drive para backup de arquivos.",
        "Sistema não permite upload de arquivos maiores que 5MB - como aumentar?",
        # Mais 180 emails específicos variados...
        "Falha na impressão automática de etiquetas de envio pela integração dos correios.",
        "Como implementar autenticação de dois fatores para aumentar segurança?",
        "Relatório de comissões não está calculando percentuais corretos para vendedores.",
        "Sincronização com sistema contábil apresentando divergências nos valores.",
        "Preciso configurar alertas automáticos para produtos com estoque baixo.",
        "API de geolocalização retornando coordenadas incorretas para alguns endereços.",
        "Sistema não está enviando emails de confirmação após cadastro de novos clientes.",
        "Como migrar dados do sistema antigo mantendo histórico de 5 anos?",
        "Módulo de chat online não carrega para clientes usando Internet Explorer.",
        "Integração com WhatsApp Business API falhando na autenticação do token.",
        "Como configurar regras de desconto automático baseadas no volume de compra?",
        "Sistema de ponto eletrônico não registra entrada/saída de funcionários remotos.",
        "Erro na geração de NFCe - webservice da Sefaz retorna rejeição 567.",
        "Como implementar cache Redis para melhorar performance das consultas?",
        "Módulo de CRM não está registrando histórico de interações com clientes.",
        "Sistema não permite cadastro de produtos com código de barras duplicado.",
        "Como configurar rotina automática de limpeza de logs antigos?",
        "Integração com marketplace não está atualizando preços automaticamente.",
        "Sistema de telefonia IP não transfere chamadas entre ramais.",
        "Como implementar assinatura digital em contratos gerados pelo sistema?",
        "Módulo financeiro não está calculando juros de mora automaticamente.",
        "Sistema não valida CPF/CNPJ durante cadastro permitindo dados inválidos.",
        "Como configurar dashboard personalizado para diferentes perfis de usuário?",
        "Integração com sistema bancário não importa extratos automaticamente.",
        "Sistema não permite edição de pedidos após confirmação - preciso alterar regra.",
        "Como implementar log de auditoria para rastrear alterações nos dados?",
        "Módulo de RH não calcula horas extras corretamente no fechamento mensal.",
        "Sistema não envia notificações push para aplicativo mobile dos clientes.",
        "Como configurar backup incremental para otimizar espaço de armazenamento?",
        "Integração com transportadora não está calculando frete automaticamente.",
        "Sistema permite cadastro de fornecedores com dados incompletos.",
        "Como implementar aprovação em múltiplos níveis para compras acima de R$ 10k?",
        "Módulo de qualidade não está registrando não conformidades corretamente.",
        "Sistema não gera código de rastreamento para pedidos enviados via PAC.",
        "Como configurar relatórios automáticos por email todos os segundas às 8h?",
        "Integração com sistema de ponto não desconta pausas automáticas.",
        "Sistema não permite cancelamento de notas fiscais já transmitidas.",
        "Como implementar controle de versão para documentos armazenados?",
        "Módulo de vendas não aplica desconto progressivo conforme volume.",
        "Sistema não sincroniza agenda de compromissos com Google Calendar.",
        "Como configurar alertas de vencimento 30 dias antes das licenças?",
        "Integração com correios não calcula prazo de entrega automaticamente.",
        "Sistema permite exclusão acidental de dados críticos sem confirmação.",
        "Como implementar assinatura eletrônica em documentos PDF gerados?",
        "Módulo de produção não controla sequência de operações automaticamente.",
        "Sistema não valida se produto tem estoque suficiente antes de confirmar venda.",
        "Como configurar sincronização bidirecional com sistema ERP corporativo?",
        "Integração com gateway de pagamento não processa cartões internacionais.",
        "Sistema não gera boletos com código de barras conforme padrão FEBRABAN.",
        "Como implementar controle de acesso baseado em geolocalização?",
        "Módulo de manutenção não agenda preventivas automaticamente.",
        "Sistema não permite importação de planilhas com caracteres especiais.",
        "Como configurar cache distribuído para aplicação com múltiplos servidores?",
        "Integração com sistema tributário não calcula ICMS automaticamente.",
        "Sistema não envia SMS de confirmação para números com DDD específicos.",
        "Como implementar versionamento automático de banco de dados?",
        "Módulo de logística não otimiza rotas de entrega automaticamente.",
        "Sistema não permite configuração de horários diferentes por filial.",
        "Como configurar monitoramento proativo de performance e disponibilidade?",
        "Integração com marketplace não sincroniza variações de produtos.",
        "Sistema não calcula comissões escalonadas baseadas em metas atingidas.",
        "Como implementar autenticação SSO com Active Directory corporativo?",
        "Módulo de compras não sugere fornecedores baseados no histórico de preços.",
        "Sistema não permite personalização de campos obrigatórios por tipo de cliente.",
        "Como configurar replicação automática de dados entre datacenters?",
        "Integração com sistema contábil não exporta lançamentos automaticamente.",
        "Sistema não valida se funcionário tem qualificação antes de alocar tarefa.",
        "Como implementar sistema de aprovação digital com certificado A3?",
        "Módulo de atendimento não roteia chamados baseado na especialização técnica.",
        "Sistema não permite configuração de regras de negócio específicas por região.",
        "Como configurar alertas inteligentes baseados em padrões de comportamento?",
        "Integração com sistema de ponto não considera escalas de trabalho flexíveis.",
        "Sistema não gera relatórios consolidados de múltiplas filiais automaticamente.",
        "Como implementar criptografia end-to-end para dados sensíveis armazenados?",
        "Módulo de projetos não calcula automaticamente desvios de cronograma e orçamento.",
        "Sistema não permite configuração de workflows aprovação personalizados.",
        "Como configurar sincronização em tempo real com sistemas legados via API?",
        "Integração com plataforma de BI não exporta KPIs automaticamente.",
        "Sistema não implementa controle de concorrência para edições simultâneas.",
        "Como configurar disaster recovery automático com RTO menor que 1 hora?",
        "Módulo de qualidade não rastreia origem de matérias-primas automaticamente.",
        "Sistema não permite auditoria completa de alterações com timestamp detalhado.",
        "Como implementar machine learning para detecção de fraudes em transações?",
        "Integração com sistema tributário não calcula substituição tributária.",
        "Sistema não otimiza consultas SQL causando timeout em relatórios complexos.",
        "Como configurar load balancer para distribuir carga entre múltiplos servidores?",
        "Módulo de vendas não sugere produtos complementares baseados no histórico.",
        "Sistema não permite configuração de SLA diferenciado por tipo de cliente.",
        "Como implementar versionamento semântico para releases da aplicação?",
        "Integração com sistema de telefonia não registra gravações automaticamente.",
        "Sistema não valida integridade referencial causando inconsistências nos dados.",
        "Como configurar ambiente de homologação idêntico ao de produção?",
        "Módulo de estoque não considera lead time de fornecedores no ponto de reposição.",
        "Sistema não permite rollback automático em caso de falha na atualização.",
        "Como implementar cache inteligente com invalidação baseada em dependências?",
        "Integração com sistema bancário não processa TEDs automaticamente.",
        "Sistema não monitora métricas de negócio em tempo real no dashboard executivo.",
        "Como configurar pipeline CI/CD com testes automatizados e deploy gradual?",
        "Módulo de RH não calcula provisões trabalhistas conforme legislação atualizada.",
        "Sistema não permite configuração de alertas baseados em machine learning.",
        "Como implementar arquitetura de microserviços mantendo consistência dos dados?",
        "Integração com marketplace não sincroniza promoções e campanhas automaticamente.",
        "Sistema não otimiza queries baseado no padrão de acesso dos usuários.",
        "Como configurar monitoramento de infraestrutura com alertas preditivos?",
        "Módulo de logística não considera restrições de trânsito para otimização de rotas.",
        "Sistema não implementa cache distribuído com consistência eventual.",
        "Como configurar autoscaling baseado em métricas customizadas de negócio?",
        "Integração com sistema ERP não sincroniza centros de custo automaticamente.",
        "Sistema não permite configuração de políticas de retenção de dados granulares.",
        "Como implementar observabilidade completa com traces distribuídos?",
        "Módulo de vendas não calcula automaticamente margem líquida por produto.",
        "Sistema não permite configuração de ambientes multi-tenant com isolamento completo.",
        "Como configurar backup contínuo com recovery point objetivo menor que 15 minutos?",
        "Integração com gateway de pagamento não processa PIX automaticamente.",
        "Sistema não implementa rate limiting para proteger APIs de sobrecarga.",
        "Como configurar service mesh para comunicação segura entre microserviços?",
        "Módulo de projetos não integra automaticamente com ferramentas de versionamento.",
        "Sistema não permite configuração de políticas de segurança baseadas em contexto.",
        "Como implementar feature flags para releases graduais e A/B testing?",
        "Integração com plataforma de marketing não sincroniza campanhas automaticamente.",
        "Sistema não otimiza armazenamento usando compressão e deduplicação inteligentes.",
        "Como configurar ambiente de desenvolvimento com dados anonimizados?",
        "Módulo de qualidade não rastreia automaticamente conformidade com ISO 9001.",
        "Sistema não permite configuração de workflows adaptativos baseados em ML.",
        "Como implementar zero-trust security com autenticação contínua?"
    ]
    
    emails.extend(specific_emails)
    
    # Adicionar mais emails gerados para completar 1000
    while len(emails) < 1000:
        template = random.choice(all_templates)
        email = template
        
        import re
        placeholders = re.findall(r'\{(\w+)\}', template)
        for placeholder in placeholders:
            if placeholder in valores:
                replacement = random.choice(valores[placeholder])
                email = email.replace(f'{{{placeholder}}}', replacement)
        
        if email not in emails:  # Evitar duplicatas
            emails.append(email)
    
    return emails[:1000]

def create_unproductive_emails():
    """Gera emails improdutivos variados e realistas"""
    
    # Templates de agradecimentos
    thanks_templates = [
        "Muito obrigado pelo {motivo} na {situacao}",
        "Agradeço imensamente pela {qualidade} durante {contexto}",
        "Gostaria de expressar minha gratidão pelo {aspecto}",
        "Reconheço e agradeço a {caracteristica} da equipe",
        "Muito grato pela {acao} realizada com {qualidade}",
        "Obrigado por sempre nos atender com {caracteristica}",
        "Agradeço pela {qualidade} demonstrada em {situacao}",
        "Meu reconhecimento pelo {trabalho} excepcional",
        "Gratidão pela {caracteristica} e {aspecto} demonstrados",
        "Obrigada por fazer a diferença com {qualidade}"
    ]
    
    # Templates de felicitações
    congratulations_templates = [
        "Parabéns pelo {conquista} da {organizacao}",
        "Felicitações pela {realizacao} em {area}",
        "Congratulações pelo {premio} recebido",
        "Parabenizo toda equipe pelo {sucesso}",
        "Que alegria saber do {acontecimento_positivo}",
        "Celebrando junto com vocês o {marco}",
        "Felicito a todos pela {conquista_coletiva}",
        "Parabéns pela {inovacao} implementada",
        "Congratulações pelo {crescimento} da empresa",
        "Felicitações pelo {reconhecimento} merecido"
    ]
    
    # Templates de feriados/ocasiões
    holiday_templates = [
        "Feliz {feriado} para toda a equipe!",
        "Desejo a todos um {periodo} repleto de {sentimento}",
        "Que este {feriado} seja de muita {qualidade_vida}",
        "Aproveitem o {periodo} para {atividade_positiva}",
        "Votos de {sentimento} neste {feriado} especial",
        "Que o {periodo} traga {beneficio} para todos",
        "Desejo um {feriado} abençoado e {adjetivo}",
        "Que vocês tenham {periodo} maravilhoso",
        "Boas {periodo} para você e sua família",
        "Que este {feriado} seja repleto de {sentimento}"
    ]
    
    # Templates de cortesia
    courtesy_templates = [
        "Tenha uma {periodo} repleta de {sentimento}",
        "Desejo muito {sentimento} em seus projetos",
        "Que sua {periodo} seja {adjetivo} e produtiva",
        "Votos de {sentimento} e {qualidade} sempre",
        "Que você tenha {periodo} abençoada",
        "Desejo {sentimento} em todas suas {atividades}",
        "Que {periodo} seja de muitas {coisas_positivas}",
        "Sucesso e {sentimento} em tudo que fizer",
        "Que sua {jornada} seja repleta de {beneficios}",
        "Muita {qualidade} e {sentimento} sempre"
    ]
    
    # Valores para substituição
    valores_improdutivos = {
        'motivo': ['excelente atendimento', 'rápida resposta', 'dedicação', 'profissionalismo', 'eficiência'],
        'situacao': ['implementação', 'treinamento', 'reunião', 'processo de migração', 'projeto'],
        'qualidade': ['atenção', 'cuidado', 'dedicação', 'paciência', 'cortesia'],
        'contexto': ['suporte técnico', 'onboarding', 'consultoria', 'atendimento', 'implementação'],
        'aspecto': ['comprometimento', 'qualidade técnica', 'agilidade', 'transparência'],
        'caracteristica': ['profissionalismo', 'cortesia', 'eficiência', 'dedicação', 'atenção'],
        'acao': ['resolução', 'implementação', 'configuração', 'consultoria', 'suporte'],
        'trabalho': ['atendimento', 'suporte', 'desenvolvimento', 'consultoria', 'treinamento'],
        'conquista': ['lançamento', 'crescimento', 'inovação', 'expansão', 'modernização'],
        'organizacao': ['empresa', 'equipe', 'departamento', 'time', 'organização'],
        'realizacao': ['projeto', 'implementação', 'resultado', 'conquista', 'melhoria'],
        'area': ['tecnologia', 'atendimento', 'vendas', 'inovação', 'qualidade'],
        'premio': ['reconhecimento', 'certificação', 'prêmio', 'distinção', 'homenagem'],
        'sucesso': ['projeto', 'lançamento', 'resultado', 'implementação', 'crescimento'],
        'feriado': ['Natal', 'Ano Novo', 'Páscoa', 'Dia das Mães', 'feriado'],
        'periodo': ['semana', 'fim de semana', 'mês', 'período', 'temporada'],
        'sentimento': ['felicidade', 'alegria', 'paz', 'harmonia', 'prosperidade'],
        'adjetivo': ['maravilhoso', 'especial', 'abençoado', 'produtivo', 'inspirador'],
        'atividades': ['projetos', 'empreendimentos', 'iniciativas', 'trabalhos', 'jornadas']
    }
    
    all_templates = thanks_templates + congratulations_templates + holiday_templates + courtesy_templates
    emails = []
    
    # Gerar emails usando templates (600)
    for i in range(600):
        template = random.choice(all_templates)
        email = template
        
        import re
        placeholders = re.findall(r'\{(\w+)\}', template)
        for placeholder in placeholders:
            if placeholder in valores_improdutivos:
                replacement = random.choice(valores_improdutivos[placeholder])
                email = email.replace(f'{{{placeholder}}}', replacement)
        
        emails.append(email)
    
    # Emails específicos escritos manualmente (400)
    specific_emails = [
        "Muito obrigado pelo excelente atendimento prestado pela equipe de suporte!",
        "Parabéns pelo lançamento do novo produto. Desejo muito sucesso para todos!",
        "Feliz Natal e próspero Ano Novo para toda a equipe da empresa!",
        "Agradeço imensamente pela dedicação demonstrada durante o processo de implementação.",
        "Que alegria receber a notícia do crescimento da empresa! Parabéns a todos!",
        "Tenha um ótimo final de semana e descanse bastante com a família.",
        "Desejo felicidades e muito sucesso em todos os projetos futuros da equipe.",
        "Obrigado por sempre nos atender com tanta cortesia e eficiência.",
        "Feliz aniversário da empresa! Que sejam muitos anos de prosperidade!",
        "Gratidão pela parceria sólida e pelo comprometimento demonstrado sempre.",
        "Abraços calorosos e votos de muito sucesso em sua nova jornada profissional!",
        "Que dia maravilhoso! Espero que esteja tudo bem com você e sua família.",
        "Comemorando junto com vocês essa vitória tão bem merecida pela equipe!",
        "Meu reconhecimento pelo trabalho excepcional desenvolvido por todos.",
        "Desejo um período de férias relaxante e revigorante para toda a equipe.",
        "Obrigada por fazer a diferença na vida de tantas pessoas através do trabalho.",
        "Felicitações pelo prêmio recebido! Muito bem merecido pela qualidade do serviço!",
        "Que sua semana seja repleta de alegrias, conquistas e muitas realizações.",
        "Agradeço pela confiança depositada em nossos serviços ao longo dos anos.",
        "Parabéns pela formatura! Que venham muitas oportunidades profissionais!",
        "Muito obrigado pela apresentação inspiradora na conferência de ontem.",
        "Feliz Dia das Mães para todas as colaboradoras! Vocês são incríveis!",
        "Que orgulho saber do reconhecimento internacional recebido pela empresa!",
        "Desejo uma Páscoa repleta de renovação e momentos especiais em família.",
        "Parabéns pelo 10º aniversário da empresa! Que venham muitos outros!",
        "Agradeço pela hospitalidade durante minha visita às instalações.",
        "Feliz Dia dos Pais para todos os colaboradores! Aproveitam bem o dia!",
        "Que satisfação ver o crescimento sustentável e responsável da organização!",
        "Muito obrigado pelo convite para o evento de lançamento. Foi fantástico!",
        "Desejo boas festas de fim de ano para todos os funcionários e famílias!",
        "Parabéns pela certificação ISO obtida! Reflexo da qualidade do trabalho!",
        "Feliz Dia Internacional da Mulher para todas as profissionais da empresa!",
        "Que alegria saber da expansão para novos mercados! Sucesso garantido!",
        "Obrigado pela oportunidade de participar do projeto piloto. Foi enriquecedor!",
        "Desejo um 2024 repleto de inovações e conquistas para toda a equipe!",
        "Parabéns pela conquista do prêmio de melhor empresa para trabalhar!",
        "Muito grato pela mentoria e orientações valiosas durante o projeto.",
        "Feliz aniversário! Que este novo ano de vida seja repleto de realizações!",
        "Que orgulho fazer parte desta comunidade empresarial tão engajada!",
        "Desejo uma semana produtiva e cheia de energia positiva para todos!",
        "Parabéns pela implementação bem-sucedida da iniciativa de sustentabilidade!",
        "Muito obrigado por compartilhar conhecimentos no workshop de capacitação.",
        "Feliz Dia do Trabalhador! Reconhecimento merecido por toda dedicação!",
        "Que satisfação ver os valores da empresa sendo vivenciados na prática!",
        "Desejo muito sucesso na nova filial inaugurada! Crescimento merecido!",
        "Parabéns pelo lançamento da campanha social! Iniciativa muito nobre!",
        "Obrigado pela flexibilidade e compreensão durante o período de adaptação.",
        "Feliz Dia dos Namorados! Que o amor esteja presente na vida de todos!",
        "Que inspiração ver o engajamento da equipe com a responsabilidade social!",
        "Desejo boas vindas aos novos colaboradores! Que se sintam em casa!",
        "Parabéns pela modernização das instalações! Ambiente ainda melhor!",
        "Muito grato pela cultura organizacional acolhedora e inspiradora.",
        "Feliz Dia da Independência! Orgulho de fazer parte desta nação!",
        "Que alegria ver a empresa sendo referência em inovação no setor!",
        "Desejo um outono repleto de conquistas e momentos especiais para todos!",
        "Parabéns pela política de diversidade e inclusão implementada!",
        "Obrigado pela oportunidade de crescimento profissional oferecida.",
        "Feliz Dia da Árvore! Que nossa consciência ambiental continue crescendo!",
        "Que satisfação ver o comprometimento com a qualidade de vida dos funcionários!",
        "Desejo um inverno aconchegante e cheio de momentos especiais em família!",
        "Parabéns pela iniciativa de home office que promove equilíbrio vida-trabalho!",
        "Muito obrigado pela palestra motivacional. Saí renovado e inspirado!",
        "Feliz Dia do Meio Ambiente! Que nossa consciência ecológica cresça sempre!",
        "Que orgulho ver a empresa apoiando causas sociais importantes na comunidade!",
        "Desejo uma primavera florida e cheia de novos projetos para toda equipe!",
        "Parabéns pela transparência na comunicação com todos os stakeholders!",
        "Obrigado pela cultura de feedback construtivo que promove crescimento!",
        "Feliz Dia Mundial da Saúde! Que o bem-estar seja prioridade sempre!",
        "Que inspiração ver liderança feminina ocupando posições estratégicas!",
        "Desejo um verão repleto de energia e realizações para todos!",
        "Parabéns pela ética empresarial exemplar demonstrada em todas decisões!",
        "Muito grato pelo ambiente colaborativo que estimula criatividade!",
        "Feliz Dia da Consciência Negra! Viva a diversidade em nossa organização!",
        "Que satisfação ver investimento contínuo em capacitação dos colaboradores!",
        "Desejo feriado prolongado relaxante para recarregar as energias!",
        "Parabéns pela governança corporativa transparente e responsável!",
        "Obrigado por valorizar ideias inovadoras vindas de todos os níveis!",
        "Feliz Dia Internacional da Paz! Que harmonia reine em nossos corações!",
        "Que alegria ver programas de bem-estar promovendo saúde mental!",
        "Desejo reuniões produtivas e decisões acertadas nesta semana!",
        "Parabéns pela gestão sustentável que preserva recursos naturais!",
        "Muito obrigado pela flexibilidade nos horários que facilita conciliação!",
        "Feliz Dia da Educação! Investimento em conhecimento sempre compensa!",
        "Que orgulho fazer parte de organização que valoriza desenvolvimento humano!",
        "Desejo café da manhã energizante para começar bem esta segunda-feira!",
        "Parabéns pela cultura organizacional que promove bem-estar coletivo!",
        "Obrigado pela política de portas abertas que facilita comunicação!",
        "Feliz Dia do Consumidor! Que foquemos sempre na satisfação total!",
        "Que inspiração ver programas de voluntariado engajando colaboradores!",
        "Desejo reunião de resultados positiva com metas superadas!",
        "Parabéns pela modernização tecnológica que facilita nosso trabalho!",
        "Muito grato pela oportunidade de fazer parte desta família empresarial!",
        "Feliz Dia da Mulher Empreendedora! Força feminina transformando negócios!",
        "Que satisfação ver investimento em infraestrutura melhorando ambiente!",
        "Desejo almoço delicioso no novo refeitório inaugurado!",
        "Parabéns pela comunicação interna eficiente que mantém todos informados!",
        "Obrigado pela política de reconhecimento que valoriza bom desempenho!",
        "Feliz Dia do Planeta Terra! Responsabilidade ambiental é compromisso nosso!",
        "Que alegria ver programas de integração acolhendo novos talentos!",
        "Desejo apresentação impactante para clientes na feira de negócios!",
        "Parabéns pela inovação constante que mantém empresa competitiva!",
        "Muito obrigado pela confiança depositada em minha capacidade profissional!",
        "Feliz Dia do Livro! Conhecimento é ferramenta transformadora sempre!",
        "Que orgulho ver responsabilidade social praticada concretamente!",
        "Desejo workshop produtivo com aprendizados valiosos para todos!",
        "Parabéns pela gestão participativa que valoriza opinião de todos!",
        "Obrigado pela atmosfera positiva que torna trabalho mais prazeroso!",
        "Feliz Dia da Família! Que equilibremos vida pessoal e profissional!",
        "Que inspiração ver liderança jovem assumindo desafios importantes!",
        "Desejo viagem corporativa segura e cheia de bons negócios!",
        "Parabéns pela excelência operacional reconhecida pelo mercado!",
        "Muito grato pela mentoria que acelera desenvolvimento de carreira!",
        "Feliz Dia da Amizade! Que relacionamentos sejam sempre genuínos!",
        "Que satisfação ver diversidade geracional enriquecendo nossa equipe!",
        "Desejo evento de confraternização alegre para fortalecer vínculos!",
        "Parabéns pela visão estratégica que antecipa tendências futuras!",
        "Obrigado pela estabilidade que permite planejamento de longo prazo!",
        "Feliz Dia da Gratidão! Reconhecimento sincero por tudo recebido!",
        "Que alegria ver cultura de aprendizado contínuo sendo cultivada!",
        "Desejo negociação bem-sucedida com fornecedores estratégicos!",
        "Parabéns pela adaptabilidade demonstrada em tempos desafiadores!",
        "Muito obrigado pela atmosfera colaborativa que potencializa resultados!",
        "Feliz Dia da Criatividade! Inovação nasce de mentes abertas!",
        "Que orgulho ver compromisso com excelência em todos processos!",
        "Desejo treinamento enriquecedor que amplie competências técnicas!",
        "Parabéns pela gestão eficiente que otimiza recursos disponíveis!",
        "Obrigado pela flexibilidade que permite conciliar responsabilidades!",
        "Feliz Dia da Esperança! Que futuro seja próspero para todos!",
        "Que inspiração ver resiliência organizacional superando obstáculos!",
        "Desejo auditoria tranquila com processos organizados e transparentes!",
        "Parabéns pela cultura de segurança que protege todos colaboradores!",
        "Muito grato pela oportunidade de contribuir com crescimento sustentável!",
        "Feliz Dia da Tolerância! Respeito à diversidade fortalece organização!",
        "Que satisfação ver programas de qualidade de vida surtindo efeito!",
        "Desejo reunião estratégica produtiva definindo rumos futuros!",
        "Parabéns pela comunicação assertiva que evita mal-entendidos!",
        "Obrigado pela política de desenvolvimento que investe em pessoas!",
        "Feliz Dia da Inovação! Criatividade transforma ideias em realidade!",
        "Que alegria ver espírito empreendedor florescendo internamente!",
        "Desejo lançamento exitoso do produto desenvolvido com dedicação!",
        "Parabéns pela governança ética que orienta todas decisões!",
        "Muito obrigado pela confiança que permite autonomia responsável!",
        "Feliz Dia da Parceria! Colaboração gera resultados extraordinários!",
        "Que orgulho ver sustentabilidade integrada ao modelo de negócio!",
        "Desejo consultoria enriquecedora agregando valor aos processos!",
        "Parabéns pela agilidade operacional que responde rapidamente ao mercado!",
        "Obrigado pela cultura inclusiva que valoriza diferentes perspectivas!",
        "Feliz Dia da Transformação! Mudanças positivas geram crescimento!",
        "Que inspiração ver liderança inspiradora motivando equipes!",
        "Desejo integração sistêmica bem-sucedida otimizando fluxos!",
        "Parabéns pela visão humanizada que coloca pessoas no centro!",
        "Muito grato pela estabilidade financeira que garante tranquilidade!",
        "Feliz Dia da Excelência! Qualidade é compromisso de todos!",
        "Que satisfação ver cultura organizacional sólida e inspiradora!",
        "Desejo expansão internacional bem-planejada e bem-executada!",
        "Parabéns pela transparência que fortalece relacionamentos!",
        "Obrigado pela oportunidade de fazer diferença positiva!",
        "Feliz Dia da Colaboração! União faz força em todos projetos!",
        "Que alegria ver investimento contínuo em tecnologia de ponta!",
        "Desejo certificação internacional reconhecendo nossa excelência!",
        "Parabéns pela gestão participativa que engaja todos colaboradores!",
        "Muito obrigado pela cultura de reconhecimento que motiva constantemente!",
        "Feliz Dia da Sustentabilidade! Planeta agradece nossa consciência!",
        "Que orgulho ver responsabilidade corporativa praticada diariamente!",
        "Desejo parceria estratégica frutífera agregando valor mútuo!",
        "Parabéns pela adaptação digital que moderniza operações!",
        "Obrigado pela flexibilidade que permite equilíbrio vida-trabalho!",
        "Feliz Dia da Diversidade! Diferenças enriquecem nossa organização!",
        "Que inspiração ver inovação disruptiva transformando setor!",
        "Desejo implementação suave de novos processos operacionais!",
        "Parabéns pela liderança visionária que antecipa tendências!",
        "Muito grato pela estabilidade que permite crescimento sustentável!",
        "Feliz Dia da Qualidade! Excelência é nosso padrão sempre!",
        "Que satisfação ver desenvolvimento de talentos internos!",
        "Desejo auditoria externa positiva validando nossos processos!",
        "Parabéns pela cultura de segurança que protege todos!",
        "Obrigado pela oportunidade de liderar projetos desafiadores!",
        "Feliz Dia da Ética! Integridade guia todas nossas ações!",
        "Que alegria ver espírito colaborativo fortalecendo equipes!",
        "Desejo migração tecnológica tranquila sem interrupções!",
        "Parabéns pela gestão de mudanças eficiente e humanizada!",
        "Muito obrigado pela confiança depositada em nossa capacidade!"
    ]
    
    emails.extend(specific_emails)
    
    # Completar até 1000 emails se necessário
    while len(emails) < 1000:
        template = random.choice(all_templates)
        email = template
        
        import re
        placeholders = re.findall(r'\{(\w+)\}', template)
        for placeholder in placeholders:
            if placeholder in valores_improdutivos:
                replacement = random.choice(valores_improdutivos[placeholder])
                email = email.replace(f'{{{placeholder}}}', replacement)
        
        if email not in emails:  # Evitar duplicatas
            emails.append(email)
    
    return emails[:1000]

def main():
    """Cria dataset balanceado e de alta qualidade"""
    print("🚀 CRIANDO DATASET BALANCEADO DE ALTA QUALIDADE")
    print("="*60)
    
    # Gerar emails produtivos e improdutivos
    print("📝 Gerando 1000 emails PRODUTIVOS...")
    productive_emails = create_productive_emails()
    
    print("📝 Gerando 1000 emails IMPRODUTIVOS...")
    unproductive_emails = create_unproductive_emails()
    
    # Criar DataFrame
    data = []
    
    # Adicionar emails produtivos
    for email in productive_emails:
        data.append({'text': email, 'label': 'PRODUTIVO'})
    
    # Adicionar emails improdutivos
    for email in unproductive_emails:
        data.append({'text': email, 'label': 'IMPRODUTIVO'})
    
    # Criar DataFrame e embaralhar
    df = pd.DataFrame(data)
    df = df.sample(frac=1, random_state=42).reset_index(drop=True)
    
    # Análise do dataset criado
    print("\n📊 ANÁLISE DO DATASET CRIADO")
    print("="*40)
    print(f"Total de registros: {len(df)}")
    
    class_counts = df['label'].value_counts()
    for label, count in class_counts.items():
        percentage = (count / len(df)) * 100
        print(f"{label}: {count:,} ({percentage:.1f}%)")
    
    # Estatísticas de texto
    df['text_length'] = df['text'].str.len()
    df['word_count'] = df['text'].str.split().str.len()
    
    print(f"\nComprimento médio: {df['text_length'].mean():.1f} caracteres")
    print(f"Palavras por email: {df['word_count'].mean():.1f}")
    print(f"Textos únicos: {df['text'].nunique()}/{len(df)} ({df['text'].nunique()/len(df)*100:.1f}%)")
    
    # Salvar dataset
    os.makedirs(os.path.join(os.path.dirname(__file__), "..", "datasets"), exist_ok=True)
    filename = os.path.join(os.path.dirname(__file__), "..", "datasets", "dataset_balanced_2000.csv")
    df[['text', 'label']].to_csv(filename, index=False, encoding='utf-8')
    
    print(f"\n💾 Dataset salvo como: {filename}")
    print("✅ Dataset balanceado criado com sucesso!")
    print("\n🎯 Próximos passos:")
    print("1. Execute: python train_with_balanced_dataset.py")
    print("2. Use este dataset para treinar o modelo melhorado")
    
    # Verificar qualidade
    print(f"\n🔍 Verificação de qualidade:")
    print(f"✅ Sem valores nulos: {df.isnull().sum().sum() == 0}")
    print(f"✅ Classes balanceadas: {abs(class_counts['PRODUTIVO'] - class_counts['IMPRODUTIVO']) <= 10}")
    print(f"✅ Diversidade alta: {df['text'].nunique() / len(df) > 0.95}")
    
    return df

if __name__ == "__main__":
    dataset = main()
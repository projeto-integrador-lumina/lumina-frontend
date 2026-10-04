# Lumina — Frontend

Código-fonte das interfaces gráficas e aplicações cliente do ecossistema Lumina / Lolá: Gamificando a Fala.

---

## Objetivo do Repositório

Alojar, versionar e organizar todas as interfaces de utilizador do projeto, contemplando o Painel Administrativo de Gestão Clínica utilizado pela fonoaudióloga e a aplicação progressiva (PWA) utilizada pelos pacientes infantis para as sessões terapêuticas.

---

## Módulos do Frontend

* **Painel Administrativo (Dashboard Clínico):**
  * Ecrã de autenticação segura e recuperação de acesso.
  * Vista principal (Home) com resumo de atendimentos semanais e calendário de consultas.
  * Tabela completa de gestão e registo de pacientes infantis com paginação e ações.
  * Visualização de relatórios analíticos de desempenho e incidência de erros fonológicos.
* **Aplicação Gamificada (PWA Lolá):**
  * Ecrã de identificação amigável do paciente com suporte a instalação no ecrã inicial do dispositivo.
  * Módulo de personalização visual do avatar e inventário com saldo de moedas.
  * Mapa da trilha da fazenda com percurso de fases desbloqueáveis.
  * Interface interativa de exercícios de fala com reprodução de áudio guia e captação de voz pelo microfone.

---

## Tecnologias Utilizadas

* **HTML5 e CSS3:** Estruturação semântica e acessibilidade.
* **Tailwind CSS:** Estilização utilitária, responsividade para dispositivos móveis e desktop, e consistência visual com o guia de estilo.
* **JavaScript:** Lógica de interface, manipulação do DOM e integração de áudio.
* **Progressive Web App (PWA):** Manifesto (`manifest.json`) e Service Workers para suporte a instalação e cache em ecrãs móveis.

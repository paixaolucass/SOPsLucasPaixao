# SOPs e Proposta de Automação com IA - Squad de Conteúdo
**Responsável:** Lucas Paixão
**Data:** 2026-04-30
**Contexto:** Revisão de área solicitada na reunião de processos - novos SOPs documentados + proposta de automação com IA

---

# PARTE 1 - NOVOS SOPs DOCUMENTADOS

> Processos reais do meu dia a dia que não estavam formalizados no manual. Documentados no padrão SOP da empresa.

---

## SOP55 | Processamento e Publicação de Encontros da Vanguarda
**Área:** Vanguarda
**Checkpoint (4ª) · Workshop (6ª) · Masterclass (mensal)**
Owner: Lucas Paixão · v1.0 · 2026-04-30 · **Novo**

### Visão geral

| Encontro | Dia | Thumb | Como pegar o nome |
|---|---|---|---|
| Checkpoint | Toda quarta | 3 thumbs fixas prontas | Fixo |
| Workshop | Toda sexta | Midjourney (prompt salvo) | Perguntar Matheus ou Ruan via Gather/WhatsApp |
| Masterclass | ~1x/mês (variável) | Midjourney (prompt salvo) | Pegar na plataforma da Vanguarda |
| Feriado | - | Sem encontro | - |

**Gatilho:** Encontro aconteceu e materiais do Zoom ficaram disponíveis.

**Ferramentas:** Zoom · CapCut · IA (Claude/ChatGPT) · App Mapa Mental Vanguarda · HandBrake · Vimeo · Overpass · WhatsApp · Midjourney

---

### Fase 1 - Coletar materiais do Zoom

1. Aguardar o Zoom processar e disponibilizar:
   - Gravação do encontro (vídeo completo)
   - Bate papo do encontro (arquivo de chat)
   - Transcrição do encontro

**Atenção:** Não avançar sem a gravação e o bate papo. A transcrição é fortemente recomendada — agiliza o corte via IA e é obrigatória para gerar o RI. Sem ela, o corte pode ser feito manualmente no CapCut, mas o RI fica bloqueado.

---

### Fase 2 - Cortar o início do encontro (CapCut + IA)

**Objetivo:** Remover o bate-papo inicial antes do encontro começar de verdade.

1. Abrir CapCut e importar a gravação completa.
2. Usar prompt de diagnóstico de início com a transcrição na IA:

```
Analise a transcrição abaixo de um encontro da Vanguarda (Overlens).
Identifique o momento exato em que o encontro começou de verdade
(não o bate-papo inicial, não os "olás", mas quando o conteúdo iniciou de fato).

Responda:
- Timestamp aproximado do início real
- Frase exata que marca o início (para confirmar no vídeo)
- Justificativa em 1 linha

TRANSCRIÇÃO:
[cole aqui]
```

3. No CapCut: navegar até o timestamp indicado, confirmar pela frase e cortar tudo antes.
4. Cortar a transcrição também: apagar linhas anteriores ao timestamp.
5. Exportar o vídeo cortado: **1080p, 25fps, H.265 (HEVC)** — configuração recomendada pelo CapCut e alinhada com a qualidade de gravação do Zoom (1080p 25fps), garantindo que nada se perde na exportação.

**Saída:** Vídeo cortado + transcrição cortada.

---

### Fase 3 - Gerar Resumo Inteligente (RI) e Mapa Mental

1. Usar a transcrição cortada com o prompt de RI:

```
Você é um especialista em síntese de conteúdo educacional.
Com base na transcrição abaixo de um [Checkpoint/Workshop/Masterclass]
da Vanguarda (Overlens), gere o Resumo Inteligente (RI) do encontro.

Estrutura obrigatória:
1. Título do encontro
2. Tema central (1 parágrafo)
3. Principais pontos abordados (bullets - máx. 7)
4. Insights e aprendizados-chave (bullets - máx. 5)
5. Próximos passos / ações sugeridas (bullets - máx. 3)
6. Frase de encerramento (tom científico, alinhado com Overlens)

Tom: científico, claro, direto, sem hype.
Baseie-se APENAS na transcrição. Não invente informações.

TRANSCRIÇÃO:
[cole aqui]
```

2. Pegar o RI gerado e subir no **App Mapa Mental Vanguarda** → app entrega o material do mapa mental.

**Saída:** RI texto final + mapa mental gerado pelo app.

---

### Fase 4 - Subir materiais na plataforma (Overpass)

1. Acessar Overpass → aba de arquivos do encontro.
2. Subir os 3 materiais:
   - Transcrição cortada
   - Mapa mental do encontro
   - Bate papo (chat do Zoom)
3. Colar o RI na descrição do encontro.

---

### Fase 5 - Comprimir vídeo com HandBrake (paralelo com Fase 6)

1. Abrir HandBrake → importar vídeo exportado do CapCut.
2. Aplicar preset **1080p 25fps**: mantém a mesma resolução e frame rate do Zoom/CapCut, reduzindo os GBs do arquivo sem perder qualidade visível.
3. Iniciar compressão (~1 hora).
4. Durante esse tempo: avançar com a thumbnail (Fase 6).

---

### Fase 6 - Criar Thumbnail (paralelo com HandBrake)

**Checkpoint:** Selecionar 1 das 3 thumbs fixas prontas.

**Workshop / Masterclass:**
1. Pegar o nome do encontro (Workshop: perguntar Matheus ou Ruan via Gather/WhatsApp | Masterclass: pegar na plataforma da Vanguarda).
2. Usar o prompt fixo de thumbnail salvo no Figma → gerar no Midjourney.
3. Selecionar e baixar a capa gerada.

> **Onde ficam os prompts:** Os prompts de IA (diagnóstico de início de encontro + RI) estão na [pasta Prompts no Drive](https://drive.google.com/drive/folders/13pdQXbPrcwyZFb9JMZf-5CfkaiOvrBJV?hl=pt-br) — acesso restrito a @overlens.com.br. O prompt do Midjourney para thumbnails é fixo e está salvo no Figma.

---

### Fase 7 - Upload no Vimeo

1. Aguardar HandBrake concluir.
2. Acessar Vimeo → fazer upload do arquivo comprimido.
3. Enquanto renderiza: trocar o nome do vídeo + subir a thumbnail.
4. Aguardar renderização completa → copiar o link.

---

### Fase 8 - Publicar e avisar

1. Acessar Overpass → encontro correspondente.
2. Colar o link do Vimeo no campo de vídeo.
3. Conferir checklist final (abaixo) → publicar.
4. Avisar no WhatsApp da Vanguarda com o link.

---

### SLAs

| Fase | Tempo estimado |
|---|---|
| Fase 1 - Aguardar Zoom | 1h a 3h (variável) |
| Fase 2 - Corte CapCut + IA + Exportar | ~1h a 1h10min |
| Fase 3 - RI + Mapa Mental | ~20min |
| Fase 4 - Upload materiais plataforma | ~10min |
| Fase 5 - HandBrake | ~1h a 1h30min |
| Fase 6 - Thumbnail | ~5min (Checkpoint) / ~15–30min (Workshop/Masterclass) |
| Fase 7 - Vimeo | ~20min |
| Fase 8 - Publicar + avisar | ~10min |
| **Total** | **3h a 5h** |

### KPIs

- Encontro publicado no mesmo dia (meta: 100%)
- RI na descrição (meta: 100%)
- 3 materiais na aba de arquivos (meta: 100%)
- Aviso no WhatsApp no mesmo dia (meta: 100%)

### Checklist final antes de publicar

- [ ] Vídeo começa no momento certo (sem bate-papo inicial)?
- [ ] RI na descrição do encontro?
- [ ] Transcrição, mapa mental e bate papo na aba de arquivos?
- [ ] Thumbnail correta?
- [ ] Nome do encontro correto no Vimeo e na plataforma?
- [ ] Link do Vimeo colado e funcionando?
- [ ] Encontro publicado (não em rascunho)?
- [ ] WhatsApp avisado?

---

## SOP56 | Carroseis, Reels e Materiais Digitais
**Área:** Conteúdo
Owner: Lucas Paixão · v1.1 · 2026-04-30 · **Novo**

**Gatilho:** Daily de 10h com Fernando, demanda no ClickUp, ou autonomia identificando tarefa no backlog.

**Ferramentas:** Figma · Midjourney · Claude · CapCut · Antigravity/Codex · Vercel · Google Drive · ClickUp

---

### Pesquisa e Modelagem de Formato

> A criação começa com pesquisa intencional. Não produzimos no vácuo — modelamos o que já provou performance em mercados mais maduros, adaptando estrutura, ritmo e abordagem para a linguagem científica e a identidade visual da Overlens.

1. Monitorar **Instagram e TikTok** buscando Reels e Carroseis em alta de criadores internacionais — foco no universo científico, tech, educação e business ("gringa").
2. Identificar o que torna o formato eficaz: gancho de abertura, estrutura de slides, ritmo de edição, densidade de informação, CTA.
3. Avaliar alinhamento com a Overlens: o tema tem ligação com nosso posicionamento científico/anti-hype? O formato é adaptável para o tom da marca?
4. Selecionar a referência e definir o tipo de peça (Carrosel, Reel ou outro formato).
5. Registrar a referência quando relevante — a modelagem é intencional e rastreável.

---

### Tipo A - Carrosel (Figma + Midjourney + Claude)

1. Identificar tema e objetivo do carrosel.
2. **Gerar textos com Claude:** hook de abertura, corpo de cada slide (2–3 linhas), CTA final. Tom científico, sem hype.
3. **Gerar imagens com Midjourney:** usar prompt de estilo salvo para o tipo de peça.
4. **Montar no Figma:** abrir template existente de carrosel → substituir textos e imagens.
5. Revisar: identidade visual, textos cabem no layout, progressão dos slides.
6. Exportar em 1:1 ou 4:5 (padrão Instagram).
7. Salvar no Drive + evidência no ClickUp.

---

### Tipo B - Reel (CapCut)

Material base são vídeos fornecidos pelo Ruan. O processo parte da modelagem de um formato de reel em alta de criadores internacionais e adapta o vídeo do Ruan a essa estrutura.

1. Receber o vídeo do Ruan + referência de formato a modelar.
2. Abrir CapCut → editar seguindo o formato modelado (cortes, ritmo, legendas, texto de abertura, identidade visual).
3. Exportar em 9:16 vertical.
4. Salvar no Drive + evidência no ClickUp.

---

### Tipo C - Materiais digitais: sites e guias (Claude + Vercel)

1. Definir tipo de material (site de referência, guia interativo, landing page, etc.).
2. Usar Claude via **Antigravity ou Codex** para gerar o código/conteúdo.
3. Iterar com o Claude até o material estar completo.
4. Deploy no **Vercel** → verificar link.
5. Colocar link do Vercel como evidência no ClickUp + avisar o solicitante.

---

### Checklist

**Carrosel:** textos gerados (Claude) · imagens geradas (Midjourney) · template Figma usado · formato correto exportado · evidência no ClickUp

**Reel:** exportado em 9:16 · CTA claro · evidência no ClickUp

**Material digital:** deploy no Vercel funcionando · link entregue · evidência no ClickUp

---

## SOP57 | Criação e Gestão de Prompts de IA
**Área:** IA e Processos
Owner: Lucas Paixão · v1.0 · 2026-04-30 · **Novo**

**Gatilho:** Identificação de tarefa repetitiva que se beneficia de prompt padronizado, ou queda de qualidade em prompt existente.

**Ferramentas:** Claude / ChatGPT · Google Drive (pasta de prompts) · PC local · Transcrições (para teste)

---

### Passo a passo

**1. Definir o que o prompt precisa fazer**
- Qual função? (ex: identificar início de encontro, gerar RI, revisar descrição de aula)
- O que entra? (transcrição, texto bruto, contexto específico)
- O que sai? (formato, nível de detalhe, tom, restrições)

**2. Escrever o prompt base**

Estrutura obrigatória:
```
[Contexto / papel da IA]
[Instrução principal - o que fazer]
[Formato de saída obrigatório]
[Restrições: "baseie-se apenas no input, não invente informações"]
[Campo de input]
```

**3. Testar com transcrições reais**
- Testar com pelo menos 2 casos (um denso, um simples)
- Avaliar: formato correto · conteúdo fiel · tom alinhado · pronto para uso direto
- Ajustar e retestar até output consistente

**4. Salvar e versionar**
- Salvar no PC + no Google Drive da empresa (pasta pessoal de prompts)
- Nomenclatura: `Prompt - [Nome da função] - v[número]`
- Ao atualizar: incrementar versão e manter versão anterior salva

**5. Usar e iterar**
- A cada ajuste relevante no uso real: salvar nova versão
- Manter histórico completo (v1, v2, v3...)

### SLAs

- Prompt novo completo: 4h a 1 dia

### Checklist

- [ ] Restrição anti-invenção incluída?
- [ ] Testado com 2 casos?
- [ ] Output consistente?
- [ ] Salvo no PC?
- [ ] Salvo no Drive com nomenclatura correta?
- [ ] Versão incrementada (se atualização)?

---

## SOP58 | Criação de Conteúdo Visual com IA (Reels, Posts e Vídeos)
**Área:** Conteúdo
Owner: Lucas Paixão · v1.0 · 2026-05-04 · **Novo**

**Gatilho:** Demanda no ClickUp, daily com Fernando, ou material do Ruan disponível para processamento.

**Ferramentas:** Higgsfield · Midjourney · CapCut · Seedance · GitHub · ClickUp · Google Drive

---

### Tipo A - Reel com Motion Control (Higgsfield)

Vídeos do Ruan e conteúdo com movimento de câmera sobre imagem ou vídeo estático.

1. Receber material base (vídeo bruto ou imagem) + briefing de movimento desejado.
2. **Higgsfield:** importar material → configurar motion control (tipo, intensidade, direção) → gerar → avaliar resultado.
3. Se necessário: ajustar parâmetros e gerar novamente (até 3 tentativas).
4. Se precisar de finalização: **CapCut** → cortes, áudio, texto, identidade visual → exportar 9:16.
5. Salvar no Drive + evidência no ClickUp. Avisar responsável.

**Exceção:** Higgsfield gera resultado ruim → ajustar intensidade/direção → até 3 tentativas → se não resolver, mudar abordagem.

---

### Tipo B - Post / Imagem com IA (Midjourney)

Posts estáticos, capas, imagens de campanha e materiais visuais para redes sociais.

1. Identificar tipo de peça e referência visual.
2. Usar **prompt salvo por tipo de peça** (carrosel Overlens, thumbnail Workshop/Masterclass, post Instagram).
3. Gerar no Midjourney → selecionar variação mais alinhada com a identidade visual Overlens.
4. Exportar no formato correto (1:1 ou 4:5) → Drive + evidência no ClickUp.

---

### Tipo C - Reel Gerado por IA (Seedance)

Reels gerados inteiramente por IA a partir de prompt ou imagem-referência.

1. Definir conceito, tom e referência visual.
2. Gerar no **Seedance** → avaliar → iterar até aprovado.
3. Finalização no CapCut se necessário → exportar 9:16 → Drive + ClickUp.

---

### Checklist

**Reel (motion control / gerado por IA):**
- [ ] Resultado visual aprovado antes de entregar?
- [ ] Formato 9:16 (vertical)?
- [ ] Identidade visual Overlens mantida?
- [ ] Evidência no ClickUp + responsável avisado?

**Post / Imagem:**
- [ ] Prompt de estilo correto usado?
- [ ] Alinhado com identidade visual?
- [ ] Exportado no formato correto (1:1 ou 4:5)?
- [ ] Evidência no ClickUp?

---

## SOP59 | Criação de Guias e Ferramentas Digitais
**Área:** IA e Processos
Owner: Lucas Paixão · v1.0 · 2026-05-04 · **Novo**

**O que são:** materiais digitais interativos e ferramentas funcionais criados para apoiar o trabalho do time ou como conteúdo da Overlens. Incluem guias em HTML, apps de mapa mental, agregadores de notícias, dashboards de tendências e ferramentas que automatizam ou facilitam tarefas do dia a dia.

**Gatilho:** Demanda por material interativo, ferramenta de apoio ao trabalho identificada na daily ou no ClickUp.

**Ferramentas:** Claude Code (Antigravity / Codex) · Overlens Design System (node_modules/@overlens) · Vercel · GitHub · ClickUp

---

### Tipo A - Guia Interativo em HTML

Documentos web com identidade visual Overlens para ensinar processos, ferramentas ou conceitos.
Exemplos criados: Guia de Agentes de IA, Guia Seedance, Guia de Prompts Kling.

1. Definir tema, público e objetivo do guia.
2. Estruturar o conteúdo em seções com Claude (tom Overlens: científico, claro, sem hype).
3. Criar o HTML com o **design system da Overlens** - importar `@overlens/legacy-foundations` (tokens de cor, Outfit/Inter/JetBrains Mono, espaçamento).
4. Iterar com Claude até o guia estar completo e visualmente correto.
5. Deploy no **Vercel** → verificar em desktop e mobile.
6. Entregar link + evidência no ClickUp.

---

### Tipo B - Ferramenta Funcional (App / Dashboard)

Ferramentas que executam uma função real no dia a dia.
Exemplos criados: app de mapa mental da Vanguarda, monitor de notícias de IA ao vivo, rastreador de trends virais.

1. Definir o problema que a ferramenta resolve e o que ela precisa fazer.
2. Especificar entradas, saídas e comportamento esperado.
3. Desenvolver com Claude Code → iterar até funcionar conforme esperado.
4. Testar com casos reais antes de usar em produção.
5. Deploy no Vercel (frontend) ou rodar localmente (servidor Node.js).
6. Documentar link e finalidade no Drive + evidência no ClickUp.

> Ferramentas criadas aqui são ativos do time - documentar onde estão deployadas e o que fazem para que qualquer pessoa consiga usar ou dar manutenção.

### SLAs

| Material | Tempo estimado |
|---|---|
| Guia HTML simples | ~2–4h |
| Guia HTML completo | ~1 dia |
| Ferramenta funcional | ~1–3 dias |

### Checklist

**Guia HTML:**
- [ ] Design system Overlens aplicado (cores, fontes, tokens)?
- [ ] Conteúdo no tom Overlens (científico, sem hype)?
- [ ] Testado em desktop e mobile?
- [ ] Deploy no Vercel funcionando?
- [ ] Link entregue + evidência no ClickUp?

**Ferramenta funcional:**
- [ ] Testada com casos reais antes de entregar?
- [ ] Finalidade e link documentados no Drive?
- [ ] Evidência no ClickUp?

---

# PARTE 2 - PROPOSTA DE AUTOMAÇÃO COM IA

> Processos do Squad de Conteúdo que já usei IA e que identifico como oportunidade de otimização adicional ou formalização para o time.

---

## Onde já uso IA hoje (Squad de Conteúdo)

| Processo | Como uso a IA | Ferramenta |
|---|---|---|
| Encontros Vanguarda - corte do vídeo | Prompt salvo → IA identifica timestamp de início na transcrição | Claude / ChatGPT |
| Encontros Vanguarda - Resumo Inteligente | Prompt salvo → IA gera RI estruturado a partir da transcrição cortada | Claude / ChatGPT |
| Carrosel - textos | IA gera hook, corpo dos slides e CTA no tom Overlens | Claude |
| Carrosel - imagens | Prompt de estilo salvo → Midjourney gera imagens consistentes | Midjourney |
| Materiais digitais (sites/guias) | IA gera o código e conteúdo completo | Claude (Antigravity/Codex) |
| Prompts | IA ajuda a testar e refinar os próprios prompts | Claude |

---

## Oportunidades de automação para o Squad (proposta)

### 1. Geração automática de RI pós-encontro
**Situação atual:** processo manual - copiar transcrição → colar no Claude → revisar → colar na plataforma.
**Proposta:** fluxo automatizado (Make.com ou Claude Routines) que recebe a transcrição e entrega o RI formatado direto, reduzindo o trabalho para só revisar e colar.
**Impacto:** ~20min → ~3min por encontro (toda quarta, toda sexta, ~1x/mês Masterclass).

---

### 2. Ata automática de reuniões
**Situação atual:** após 5-10min de toda reunião, o Gemini envia ao Gmail um resumo automático + transcrição completa. O conteúdo já chega, mas sem ata estruturada com decisões, ações e owners.
**Proposta:** Claude Routines lê o email do Gemini → extrai decisões, ações, owners e prazos → gera ata v0 estruturada → transforma ações em cards no ClickUp automaticamente.
**Referência:** SOP52 (já documenta esse fluxo na empresa).

---

### 3. Briefing de criativos via IA
**Situação atual:** briefings chegam informais (reunião, WhatsApp, daily).
**Proposta:** formulário simples (Tally ou Google Forms) → Claude estrutura briefing no padrão SOP → abre card no ClickUp com campos preenchidos.
**Impacto:** elimina retrabalho por briefing incompleto.

---

### 4. Pipeline de imagem padronizado por tipo de peça
**Situação atual:** prompts de Midjourney já estão salvos, mas não estão centralizados e versionados para o time.
**Proposta:** criar repositório de prompts por tipo de peça (carrosel Overlens, thumbnail Workshop, thumbnail Masterclass, post Instagram) - versionado e acessível ao time.
**Referência:** SOP10 (Pipeline de Imagem) já prevê isso.

---

### 5. Aviso automático de encontro publicado
**Situação atual:** mensagem do WhatsApp enviada manualmente com um dos templates abaixo.
**Proposta:** Claude Routines com trigger pós-publicação no Vimeo — detecta o tipo de encontro e envia o template certo automaticamente.

**Template Checkpoint — Padrão:**
> Fala, galera! Tudo certo?
>
> O Checkpoint de hoje já está disponível na Área Secreta da Vanguarda.
> Pra quem não conseguiu acompanhar ao vivo ou quiser revisitar o conteúdo, já pode acessar por lá e ver tudo com calma. ⚡

**Template Checkpoint — Com boas-vindas** *(quando chegam novos membros):*
> Fala, galera! Tudo certo?
>
> O Checkpoint de hoje já está disponível na Área Secreta da Vanguarda.
> Pra quem não conseguiu acompanhar ao vivo ou quiser revisar, já pode acessar por lá. ⚡
>
> E boas-vindas aos novos membros que chegaram na turma! Sejam bem-vindos, bora aproveitar ao máximo os conteúdos. 🚀
>
> Ah, e um detalhe importante: dentro da aula, na aba de arquivos, vocês encontram o chat do encontro, o mapa mental e a transcrição, tudo organizado pra facilitar o uso.

**Template Workshop:**
> Fala, pessoal! Tudo certo? Chegando aqui pra avisar que o Workshop de hoje já foi liberado na Área Secreta da Vanguarda.
>
> Quem não conseguiu acompanhar ao vivo ou quiser revisitar o conteúdo com mais calma, já pode acessar por lá. 🚀
> E lembrando: dentro da aula, na aba de arquivos, vocês também têm o mapa mental, o chat do encontro e a transcrição completa.

**Template Masterclass:**
> Fala, pessoal! Tudo certo?
>
> O Masterclass de ontem já tá no ar na Área Secreta da Vanguarda.
> Pra quem ainda tá por aqui na madrugada, já dá pra assistir agora, seja pra ver pela primeira vez ou revisitar com calma. 🌙
>
> E pra quem não viu, recomendo demais assistir… teve até proposta ao vivo 👀

---

*Documento gerado em 2026-04-30 · Atualizado em 2026-05-04 · Lucas Paixão · Squad de Conteúdo · Overlens*

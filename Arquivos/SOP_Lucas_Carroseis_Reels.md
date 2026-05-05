# SOP | Carroseis, Reels e Materiais Digitais (Instagram + Vercel)
> Owner: Lucas Paixão (em colaboração com Fernando)
> v1.1 | 2026-04-30

---

## Visão geral

Produção de três tipos de entregáveis de conteúdo:
1. **Carrosel** — feito no Figma (templates prontos) com imagens do Midjourney e textos do Claude
2. **Reel** — editado no CapCut
3. **Materiais digitais** (sites, guias) — gerados pelo Claude via Antigravity ou Codex, hospedados no Vercel

**Gatilho:** Daily de 10h com Fernando, demanda no ClickUp, ou autonomia do Lucas identificando tarefa no backlog.

**Ferramentas:** Figma · Midjourney · Claude · CapCut · Antigravity / Codex · Vercel · Google Drive · ClickUp

---

## Fase 0 — Pesquisa e Modelagem de Formato

> A criação começa com pesquisa intencional. Não produzimos no vácuo — modelamos o que já provou performance em mercados mais maduros, adaptando estrutura, ritmo e abordagem para a linguagem científica e a identidade visual da Overlens.

1. Monitorar **Instagram e TikTok** buscando Reels e Carroseis em alta de criadores internacionais — foco no universo científico, tech, educação e business ("gringa").
2. Identificar o que torna o formato eficaz: gancho de abertura, estrutura de slides, ritmo de edição, densidade de informação, CTA.
3. Avaliar alinhamento com a Overlens: o tema tem ligação com nosso posicionamento científico/anti-hype? O formato é adaptável para o tom da marca?
4. Selecionar a referência e definir tipo de peça (Carrosel, Reel ou outro formato).
5. Registrar a referência quando relevante — a modelagem é intencional e rastreável.

**Saída da Fase 0:** Referência selecionada + tipo de peça definido.

---

## TIPO A — Carrosel (Figma + Midjourney + Claude)

### Fase 1 — Entender a demanda
1. Identificar o tema/conteúdo do carrosel (daily, ClickUp ou autonomia).
2. Definir quantidade de slides e objetivo da peça (educar, engajar, vender).

### Fase 2 — Gerar textos com Claude
1. Abrir o Claude e usar prompt adequado para o tipo de carrosel.
2. Gerar os textos de cada slide:
   - Título (hook de abertura)
   - Corpo de cada slide (máx. 2–3 linhas por slide)
   - CTA final (último slide)
3. Tom: científico, claro, sem hype — padrão Overlens.
4. Revisar e ajustar o texto antes de levar ao Figma.

### Fase 3 — Gerar imagens com Midjourney
1. Abrir o Midjourney e usar o prompt de estilo salvo para o tipo de peça.
2. Gerar as imagens necessárias para os slides.
3. Selecionar as melhores e baixar.

### Fase 4 — Montar no Figma
1. Abrir o **Figma** e usar o **template de carrosel já existente**.
2. Substituir textos nos campos do template pelos textos gerados no Claude.
3. Inserir as imagens do Midjourney nos campos de imagem do template.
4. Revisar:
   - [ ] Identidade visual Overlens mantida?
   - [ ] Textos cabem sem quebrar o layout?
   - [ ] Progressão dos slides faz sentido?
5. Exportar os slides no formato correto (padrão Instagram: 1:1 ou 4:5).

### Fase 5 — Entregar e registrar
1. Salvar os arquivos exportados no **Google Drive** (pasta de conteúdo/social).
2. Atualizar card no **ClickUp** com evidência (link Drive).
3. Mover card para Revisão ou Concluído conforme combinado com Fernando.

---

## TIPO B — Reel (CapCut)

### Fase 1 — Entender a demanda
1. Identificar o vídeo/material base para o reel (daily, ClickUp ou autonomia).
2. Definir duração, formato e objetivo do reel.

### Fase 2 — Editar no CapCut
1. Abrir **CapCut** e criar novo projeto.
2. Importar o material base (clips, imagens, assets).
3. Editar:
   - Cortes no ritmo da música/áudio
   - Legendas (quando necessário)
   - Texto/chamada de abertura
   - Identidade visual Overlens
4. Revisar início, meio e fim — checar se o CTA está claro.
5. Exportar em 9:16 vertical (padrão Reels Instagram).

### Fase 3 — Entregar e registrar
1. Salvar arquivo no **Google Drive**.
2. Atualizar card no **ClickUp** com evidência.

---

## TIPO C — Materiais Digitais: Sites e Guias (Claude + Antigravity/Codex + Vercel)

### Fase 1 — Definir o material
1. Identificar o tipo de material: site de referência, guia interativo, landing page, etc.
2. Entender o conteúdo e estrutura esperada.

### Fase 2 — Gerar com Claude no Antigravity ou Codex
1. Usar o **Antigravity** ou **Codex** com Claude para gerar o código/conteúdo do material.
2. Iterar com o Claude até o material estar completo e correto:
   - Estrutura (seções, hierarquia de conteúdo)
   - Textos (tom científico, claro, sem hype)
   - Layout/estilo (quando aplicável)
3. Revisar o resultado antes de publicar.

### Fase 3 — Publicar no Vercel
1. Fazer deploy do material gerado no **Vercel**.
2. Verificar se o link está funcionando corretamente.
3. Copiar o link de acesso.

### Fase 4 — Entregar e registrar
1. No **ClickUp**: colocar o link do Vercel como evidência de entrega no card.
2. Avisar Fernando ou o solicitante com o link.

---

## SLAs

| Tipo | Tempo estimado |
|---|---|
| Carrosel (Figma + Claude + Midjourney) | ~1–2h |
| Reel (CapCut) | ~30–90min |
| Material digital (Claude + Vercel) | ~1–3h (depende da complexidade) |

---

## KPIs

- % entregas com evidência no ClickUp (meta: 100%)
- % carroseis usando template Figma (meta: 100%)

---

## Exceções

- **Template Figma desatualizado:** atualizar ou criar variação antes de montar.
- **Midjourney gera imagem incompatível com o estilo:** tentar variações ou usar referência de estilo salva.
- **Vercel com erro no deploy:** checar o código gerado pelo Claude antes de tentar novamente.
- **Sem material base para reel:** aguardar ou checar com Fernando o que está disponível.

---

## Checklist

**Carrosel:**
- [ ] Textos gerados e revisados (Claude)?
- [ ] Imagens geradas (Midjourney)?
- [ ] Template Figma usado?
- [ ] Identidade visual Overlens mantida?
- [ ] Exportado no formato correto?
- [ ] Evidência no ClickUp?

**Reel:**
- [ ] Exportado em 9:16?
- [ ] CTA claro?
- [ ] Evidência no ClickUp?

**Material digital:**
- [ ] Deploy no Vercel funcionando?
- [ ] Link copiado e entregue?
- [ ] Evidência no ClickUp?

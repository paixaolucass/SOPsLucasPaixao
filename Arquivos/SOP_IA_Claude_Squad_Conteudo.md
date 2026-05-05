# SOP-IA | IA (Claude) no Squad de Conteúdo — Overlens
> Versão: v2.0 | Data: 2026-04-30 | Owner: Lucas Paixão
> Baseado no diagrama Squad Conteúdo.jam (FigJam)
> Para adicionar ao FigJam: criar seção "IA no Squad" em cor diferente (sugestão: laranja #FF6B00)

---

## MAPA DE CONEXÕES — onde a IA entra no diagrama atual

```
SOP03 ──► [SOP-IA01 briefing] ──► SOP08 (produção visual)
                                       │
                                  [SOP-IA06 referências] ── dentro do SOP08
                                  [SOP-IA02 copy/texto]  ── antes de executar

SOP08 ──► SOP79 (criativos/waves)
                │
           [SOP-IA02 copies/hooks] ── dentro do SOP79

SOP74 ──► SOP83 (stories/programação)
                │
           [SOP-IA09 pauta] ── antes do SOP83

SOP84 (evento) ──► [SOP-IA03 roteiro/script] ── dentro do SOP84
SOP34/41/42 (edição) ──► [SOP-IA03 roteiro] ── antes da edição
                      ──► [SOP-IA08 legenda/descrição] ── após edição

SOP10 (pipeline imagem) ──► [SOP-IA06 prompt] ── dentro do SOP10

Qualquer reunião ──► [SOP-IA04 ata automática] ── pós-reunião
Qualquer Drive   ──► [SOP-IA10 nomeação] ── transversal
```

---

## SOP-IA01 | Briefing com IA
**Entra entre:** SOP03 (Intake) → SOP08 (Produção Visual)
**Gatilho:** Demanda chega sem briefing estruturado (WhatsApp/Gather/reunião)
**Owner:** Lucas
**Tempo:** ~20min

### Passo a passo

1. Receber a demanda bruta (o que veio no WhatsApp ou Gather).
2. Abrir Claude e colar o seguinte prompt:

```
Preciso montar um briefing para uma peça de [tipo: capa/post/ebook/playbook/thumbnail].

Contexto da demanda: [cole o que você recebeu]

Produto: [Vanguarda / Overpass / Atlas / Overlens geral]
Público: [quem vai receber isso]

Preencha estas seções:
- Objetivo da peça (em 1 frase)
- Mensagem principal (o que precisa comunicar)
- Tom (ex: científico, motivador, técnico, direto)
- Formato e tamanho (ex: 1080x1080, stories, capa A4)
- O que NÃO pode ter (restrições)
- Referências sugeridas (estilos ou marcas similares)
- Critério de aprovação (como saber que ficou bom)
```

3. Revisar o briefing gerado (30s — conferir se bateu com a intenção).
4. Colar briefing no card do ClickUp (campo descrição).
5. Seguir para SOP08.

**Saída:** Card no ClickUp com briefing completo preenchido.
**SLA:** 20min após receber a demanda.

**Checklist:**
- [ ] Objetivo claro em 1 frase?
- [ ] Tom e restrições definidos?
- [ ] Card preenchido no ClickUp?

---

## SOP-IA02 | Copy e Texto para Peças Visuais / Criativos
**Entra em:** SOP08 (antes de executar a versão final) e SOP79 (Criativos — passo "escrever copies no Creative Map")
**Gatilho:** Peça visual precisa de texto (título, headline, CTA, legenda, descrição)
**Owner:** Lucas / Thaís
**Tempo:** ~30min

### Passo a passo

1. Ter o briefing em mãos (do SOP-IA01 ou do card no ClickUp).
2. Abrir Claude e usar este prompt:

```
Escreva copy para uma peça visual da Overlens.

Tipo de peça: [capa / post feed / story / thumbnail / banner / headline de ebook]
Objetivo: [o que a peça precisa fazer — vender, informar, engajar, etc.]
Canal: [Instagram / YouTube / Circle / LP / email]
Público: [quem vai ver]

Tom da Overlens: científico, anti-hype, claro, direto. Sem exageros.

Gere:
1. Título principal (3 opções — direto, instigante, técnico)
2. Subtítulo ou descrição curta (máx 15 palavras)
3. CTA (3 variações)
4. Para cada opção: explique em 1 linha por que funciona
```

3. Selecionar a melhor opção ou pedir ajuste:

```
Preferi a opção [X]. Ajuste: [o que mudar].
```

4. Copiar texto final → colar no Creative Map (SOP79) ou no comentário do card (SOP08).
5. Thaís usa o texto no Figma.

**Saída:** Texto final no card/Creative Map, pronto para Figma.
**SLA:** 30min após briefing.

**Checklist:**
- [ ] Tom consistente com Overlens (sem hype)?
- [ ] Texto cabe no formato da peça?
- [ ] Versão final registrada no card?

---

## SOP-IA03 | Roteiro de Vídeo / Script
**Entra em:** SOP84 (Evento — passo "estruturar roteiro Dia 1/Dia 2" e "script do vídeo de vendas"); SOP34, SOP41, SOP42 (antes da edição, quando não há roteiro)
**Gatilho:** Vídeo precisa ser gravado ou editado e não tem roteiro/script
**Owner:** Lucas / Juan
**Tempo:** ~1h (roteiro completo) ou ~15min (versão express)

### Passo a passo

**Versão completa (SOP84 — evento/aula):**

1. Ter: tipo do vídeo, duração, objetivo, tema.
2. Abrir Claude:

```
Preciso de um roteiro para [tipo: aula / evento Dia 1 / evento Dia 2 / vídeo de vendas / teaser / reels].

Duração alvo: [ex: 30min / 60s / 5min]
Objetivo: [o que o espectador deve sentir ou fazer ao terminar]
Tema/assunto: [do que se trata]
Tom Overlens: científico, claro, sem hype.
Formato: [ao vivo / gravado / vertical / horizontal]

Estruture com:
1. Gancho de abertura (primeiros 30s — por que assistir até o final)
2. Desenvolvimento em tópicos com timebox (ex: 00:00–05:00 | Tópico X)
3. Transições entre blocos (1 frase cada)
4. CTA final (o que fazer depois de assistir)
5. Observações de entrega (ritmo, energia, o que destacar visualmente)
```

3. Revisar e ajustar tópicos técnicos.
4. Salvar no Google Docs (pasta do curso/evento no Drive, padrão SOP23).
5. Linkar no card do ClickUp.

**Versão express (SOP41 — tráfego urgente):**

```
Roteiro rápido para reels/tráfego pago. Duração: [X]s.
Produto: [Vanguarda/Atlas/Overpass]. Objetivo: [clicar/se inscrever].
Dê: gancho (5s) + 3 bullets de benefício + CTA final.
Tom: direto, sem enrolação.
```

**Saída:** Roteiro no Drive + linkado no ClickUp.
**SLA:** Roteiro completo em 2h. Express em 15min.

**Checklist:**
- [ ] Tem gancho nos primeiros 5–30s?
- [ ] Timebox definido?
- [ ] CTA claro?
- [ ] Salvo no Drive correto e linkado no ClickUp?

---

## SOP-IA04 | Ata de Reunião Automática
**Entra:** Após qualquer reunião (All Hands, Daily, Weekly, reunião de lançamento)
**Gatilho:** Reunião terminou com transcript disponível (Fathom ou Meet)
**Owner:** Lucas
**Tempo:** ~15min (revisão humana)

### Passo a passo

1. Ao terminar a reunião, abrir o transcript (Fathom ou copiar do Meet).
2. Abrir Claude com este prompt:

```
Você é um especialista em atas executivas da Overlens.
Gere uma ata com estas seções:

1. Data, tipo de reunião e participantes
2. Decisões tomadas (bullets — frase completa, sem ambiguidade)
3. Ações (formato: [Nome] vai [ação] até [data] — se não tiver prazo: marcar "PENDENTE")
4. Riscos ou bloqueios levantados
5. Próximos marcos

Regras:
- Baseie-se APENAS no transcript. Não invente nada.
- Se algo ficou ambíguo, escreva: "PENDENTE — confirmar com [nome]"
- Seja objetivo. Decisão = o que foi decidido de verdade.

TRANSCRIPT:
[cole aqui]
```

3. Claude gera ata v0. Revisar em 10min (checar decisões e ações).
4. Salvar no Drive: `Atas Oficiais / AAAA / AAAA-MM` → nome: `ATA — [Tipo] — AAAA-MM-DD — v1`
5. Criar cards no ClickUp para cada ação (SOP03).
6. Postar resumo de 5 bullets no canal (WhatsApp/Gather).

**Saída:** Ata publicada no Drive + ações no ClickUp + resumo comunicado.
**SLA:** Ata v0 em até 2h. Ata final em 24h.

**Checklist:**
- [ ] Toda decisão explícita (sem "talvez")?
- [ ] Toda ação tem um dono?
- [ ] Nenhum fato inventado?
- [ ] Link no ClickUp?

---

## SOP-IA05 | Progresso Consciente / Devolutiva com IA
**Entra:** Fora do diagrama de Conteúdo — processo do CS/Matheus (Vanguarda)
**Gatilho:** Aluno entregou Eco Cognitivo + Relatório Mensal
**Owner:** Lucas (execução) + Matheus (prompt e aprovação)
**Tempo:** ~30min por aluno

### Passo a passo

1. Coletar respostas: Eco Cognitivo (pós-encontros) + Relatório Mensal.
2. Organizar em bloco:

```
DADOS DO ALUNO — [Nome] — [Mês/Ano]

Eco Cognitivo:
[respostas do formulário]

Relatório mensal:
[respostas do formulário]

Histórico relevante:
[notas anteriores, se houver]
```

3. Abrir Claude com o **prompt padrão do Matheus** + dados acima:

```
Você é especialista em desenvolvimento humano aplicado.
Com base nos dados abaixo de um aluno da Vanguarda, gere uma devolutiva de 2 a 3 páginas:

1. Síntese do mês (o que o aluno fez/sentiu)
2. Padrões identificados (pontos fortes + áreas de atenção)
3. Pontos de melhoria (específicos, práticos)
4. Próximos passos (máx. 3 ações concretas)
5. Mensagem de encerramento (encorajadora, personalizada)

Regras: baseie-se APENAS nos dados. Se faltam dados, escreva "dado insuficiente".
Tom: profissional, humano, direto.

[cole os dados do aluno]
```

4. Revisar — confirmar que não tem dados inventados.
5. Matheus aprova.
6. Entregar ao aluno (canal a definir — ver Lacunas, seção 8 do manual).

**Saída:** Devolutiva aprovada + entregue ao aluno.
**SLA:** Geração em 30min/aluno. Revisão Matheus em 48h.

---

## SOP-IA06 | Pesquisa de Referências e Pipeline de Prompts com IA
**Entra em:** SOP08 (passo "coletar referências") e SOP10 (passo "criar prompt base por família")
**Gatilho:** Precisa de referências para peça ou novo prompt para pipeline de imagem
**Owner:** Lucas / Thaís
**Tempo:** ~30min

### Para SOP08 — referências visuais:

```
Preciso de referências para [tipo de peça: capa, post, thumbnail, playbook].

Contexto da marca Overlens:
- Posicionamento: científico, sofisticado, anti-hype
- Território: ciência e imaginação
- Tom visual: limpo, hierarquia clara, sem poluição

Liste:
1. 5 marcas/campanhas com estética similar (nome + por que funciona)
2. Palavras-chave para buscar no Pinterest/Behance/Dribbble
3. O que evitar (estilos que contradizem a marca)
```

### Para SOP10 — criar/melhorar prompt de imagem:

```
Preciso criar um prompt de imagem para a família de estilo "[nome da família]".

Descrição do estilo: [o que caracteriza — ex: minimalista científico com luz fria]
Uso pretendido: [capa de aula / thumbnail / hero de landing page]
Ferramentas: [Midjourney / DALL-E / Sora / Gen-X]

Gere:
1. Prompt base (em inglês, pronto para usar)
2. Parâmetros principais (--ar, --style, --v, etc.)
3. 3 variações por contexto (capa / feed / stories)
4. O que testar para o "golden set"
5. O que NÃO incluir no prompt (restrições)
```

**Saída:** Referências listadas para moodboard (SOP08) ou prompt registrado no Docs e Brand Hub (SOP10).

---

## SOP-IA07 | Revisão e Melhoria de Textos
**Entra em:** Antes de publicar em SOP83 (stories/posts) e SOP84 (scripts)
**Gatilho:** Texto existe mas precisa ajuste de tom, tamanho ou clareza
**Owner:** Lucas
**Tempo:** ~10min

```
Revise o texto abaixo para uso em [canal: Instagram / story / email / Circle / script ao vivo].

Ajustar para:
- [ex: reduzir para máx. 50 palavras / deixar mais direto / adaptar tom para científico]
- Tom da Overlens: claro, sem hype, científico mas acessível.

Mantenha a essência. Mostre versão original e versão revisada lado a lado.

TEXTO ORIGINAL:
[cole aqui]
```

**Saída:** Texto revisado pronto para publicação.
**SLA:** 10min. Para comunicados importantes (lançamento): revisão com Rafael antes de publicar.

---

## SOP-IA08 | Legendas e Descrições de Vídeos
**Entra após:** SOP34, SOP41, SOP42 (vídeo editado pronto, antes de publicar)
**Gatilho:** Vídeo pronto, faltando descrição na plataforma ou legenda para redes
**Owner:** Lucas / Juan
**Tempo:** 15–30min

### Para descrição de aula (Circle/Overpass — pós SOP42):

```
Escreva uma descrição para a aula "[título]" do programa [Vanguarda/curso X].

Tópicos abordados: [lista dos tópicos]
Duração: [X min]
Tom: direto, motivador, sem hype.

Inclua:
- O que o aluno vai aprender (3 bullets)
- Por que isso importa (1 frase)
- O que fazer após assistir (próximo passo)
Limite: 120 palavras.
```

### Para legenda de reels/corte (pós SOP41 — tráfego ou stories):

```
Transforme esta transcrição em legenda para reels/stories.

Regras:
- Frases curtas (máx. 5–6 palavras por linha)
- Cada linha = um beat visual
- Timing: uma quebra a cada 2s
- CTA no final (direto)

TRANSCRIÇÃO DO TRECHO:
[cole aqui]
```

**Saída:** Descrição/legenda publicada junto com o vídeo.
**SLA:** Descrição em 15min. Legenda em 20min.

---

## SOP-IA09 | Planejamento de Pauta de Conteúdo
**Entra antes de:** SOP83 (Programação de Conteúdo — stories/posts/cortes)
**Gatilho:** Início de semana ou novo ciclo de lançamento
**Owner:** Lucas / Growth
**Tempo:** ~45min

```
Preciso de uma pauta de conteúdo para [semana X / mês Y].

Fase do calendário: [aquecimento / pré-evento / evento / carrinho / orgânico]
Produto em destaque: [Vanguarda / Atlas / Overpass]
Canais: [Instagram feed / stories / YouTube / Circle]
O que NÃO pode aparecer ainda: [ex: preço / data de abertura]

Gere uma pauta em formato de tabela com:
| Data | Canal | Tipo | Tema | Gancho principal | CTA |

Inclua variedade: educativo, bastidor, prova social, urgência.
Baseie em posicionamento científico / anti-hype da Overlens.
```

**Saída:** Tabela de pauta → criar cards no ClickUp com owner e data → publicar pauta no canal da equipe.
**SLA:** Pauta da semana pronta até segunda 12h (alinhado com SOP83).

---

## SOP-IA10 | Organização e Nomeação de Arquivos
**Entra:** Transversal — qualquer SOP que envolva Drive (SOP34, SOP41, SOP42, SOP08, SOP79, SOP83)
**Gatilho:** Arquivo novo criado ou pasta precisando de nomeação
**Owner:** Lucas
**Tempo:** ~2min

```
Preciso nomear [arquivo / pasta] da Overlens.

Projeto: [nome do projeto ou campanha]
Tipo: [capa final / roteiro / vídeo bruto / vídeo final / ata / playbook / thumbnail]
Data: [AAAA-MM-DD]
Versão: [v1 / v2 / vF (final)]
Área: [B=Branding / P=Produto / G=Growth / O=Operações / F=Finanças]
Subárea: [LXP / DXP / ENS / MKT / CS]

Gere o nome no padrão da Overlens:
AAAA-MM-DD — [tipo] — [assunto] — vX
```

---

## RESUMO RÁPIDO — use quando não sabe qual SOP-IA aplicar

| Situação | Use |
|---|---|
| Demanda chegou sem briefing | SOP-IA01 |
| Precisa de título, headline, CTA, legenda | SOP-IA02 |
| Vídeo sem roteiro, evento sem script | SOP-IA03 |
| Reunião acabou, precisa de ata | SOP-IA04 |
| Devolutiva de aluno Vanguarda | SOP-IA05 |
| Referências para moodboard ou prompt de imagem | SOP-IA06 |
| Texto que precisa de revisão/ajuste | SOP-IA07 |
| Vídeo pronto, faltando descrição ou legenda | SOP-IA08 |
| Planejar pauta da semana/campanha | SOP-IA09 |
| Nomear ou organizar arquivo no Drive | SOP-IA10 |

---

## PARA ADICIONAR NO FIGJAM (Squad Conteúdo.jam)

**Instruções de inserção:**

1. Abrir `Squad Conteúdo.jam` no Figma
2. Criar novo frame/seção com label **"IA no Squad"**
3. Cor sugerida para os SOPs-IA: **laranja #FF6B00** (diferente do vermelho #E63946 dos SOPs manuais)
4. Para cada SOP-IA, criar um retângulo com o nome + seta indicando onde entra no fluxo existente:

**Conexões a criar no diagrama:**
```
[SOP-IA01] ──── conectar entre: SOP03 → SOP08
[SOP-IA02] ──── conectar dentro: SOP08 (antes "executar versão final") e SOP79 (antes "escrever copies")
[SOP-IA03] ──── conectar antes: SOP84 (roteiro) e SOP34/41/42 (antes edição)
[SOP-IA04] ──── conectar em: novo nó "pós-reunião" fora do fluxo principal
[SOP-IA06] ──── conectar dentro: SOP08 (passo referências) e SOP10 (passo prompt base)
[SOP-IA07] ──── conectar antes: SOP83 (antes publicar stories) e SOP84 (revisão script)
[SOP-IA08] ──── conectar após: SOP34, SOP41, SOP42 (antes da publicação final)
[SOP-IA09] ──── conectar antes: SOP83 (entrada do fluxo)
[SOP-IA10] ──── conectar em: nota transversal flutuante ao lado de SOP34/41/42/08/79
```

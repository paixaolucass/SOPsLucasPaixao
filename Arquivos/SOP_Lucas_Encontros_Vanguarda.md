# SOP | Processamento e Publicação de Encontros da Vanguarda
> Checkpoint (4ª) · Workshop (6ª) · Masterclass (mensal)
> Owner: Lucas Paixão | v1.0 | 2026-04-30

---

## Visão geral

| Encontro | Frequência | Thumb | Nome do encontro |
|---|---|---|---|
| Checkpoint | Toda quarta | 3 thumbs prontas (fixas, escolher a certa) | Ruan ou Matheus |
| Workshop | Toda sexta | Gerar no Midjourney via prompt | Ruan ou Matheus |
| Masterclass | ~1x por mês (dia variável) | Gerar no Midjourney via prompt | Anotado na plataforma |
| Feriado | — | ❌ Não tem encontro | — |

**Gatilho:** Encontro aconteceu e os materiais do Zoom ficaram disponíveis.

**Ferramentas:** Zoom · CapCut · IA (Claude/ChatGPT) · App Mapa Mental Vanguarda · HandBrake · Vimeo · Overpass (plataforma) · WhatsApp · Midjourney

---

## FASE 1 — Esperar e coletar materiais do Zoom

1. Aguardar o Zoom processar e disponibilizar:
   - [ ] Gravação do encontro (vídeo completo)
   - [ ] Bate papo do encontro (arquivo de chat)
   - [ ] Transcrição do encontro

> **Atenção:** Não avançar sem os 3 arquivos. A transcrição é necessária para o corte e para o RI.

---

## FASE 2 — Cortar o início do encontro (CapCut + IA)

**Objetivo:** Remover o "bate-papo inicial" antes do encontro começar de verdade.

1. Abrir **CapCut** e importar a gravação completa do encontro.
2. Abrir a **transcrição** e usar o prompt de diagnóstico de início:

```
Analise a transcrição abaixo de um encontro da Vanguarda (Overlens).
Identifique o momento exato em que o encontro começou de verdade (não o bate-papo inicial, não os "olás", mas quando o conteúdo/apresentação iniciou de fato).

Responda:
- Timestamp aproximado do início real do encontro
- Frase exata que marca o início (para confirmar no vídeo)
- Justificativa em 1 linha (por que esse é o início)

TRANSCRIÇÃO:
[cole a transcrição aqui]
```

3. A IA retorna o timestamp + frase de início.
4. No **CapCut**, navegar até o timestamp indicado e confirmar pela frase.
5. Cortar o vídeo a partir desse ponto (remover tudo antes).
6. **Cortar a transcrição** também: apagar as linhas anteriores ao timestamp de início para ficar sincronizada com o vídeo.
7. Exportar o vídeo cortado do CapCut para o PC.

**Saída da Fase 2:** Vídeo cortado exportado + transcrição cortada.

---

## FASE 3 — Gerar Resumo Inteligente (RI) e Mapa Mental

**Objetivo:** Criar o RI do encontro e o material do mapa mental.

1. Abrir o **App Mapa Mental Vanguarda** (app próprio criado para isso).
2. Usar a **transcrição cortada** e o prompt de RI:

```
Você é um especialista em síntese de conteúdo educacional.
Com base na transcrição abaixo de um [Checkpoint / Workshop / Masterclass] da Vanguarda (Overlens), gere o Resumo Inteligente (RI) do encontro.

Estrutura obrigatória do RI:
1. Título do encontro
2. Tema central (1 parágrafo)
3. Principais pontos abordados (bullets — máx. 7)
4. Insights e aprendizados-chave (bullets — máx. 5)
5. Próximos passos / ações sugeridas (bullets — máx. 3)
6. Frase de encerramento (motivacional, alinhada com o tom da Overlens)

Tom: científico, claro, direto, sem hype.
Baseie-se APENAS na transcrição. Não invente informações.

TRANSCRIÇÃO:
[cole a transcrição cortada aqui]
```

3. Gerar o **RI do encontro**.
4. Pegar o RI e subir no **App Mapa Mental** → o app processa e entrega o material do mapa mental.

**Saída da Fase 3:**
- RI (Resumo Inteligente) do encontro — texto final
- Mapa mental do encontro — material gerado pelo app

---

## FASE 4 — Subir materiais na plataforma (Overpass)

**Objetivo:** Disponibilizar os 3 materiais do encontro para os membros.

**Os 3 materiais:**
1. Transcrição cortada
2. Mapa mental do encontro
3. Arquivo do bate papo (chat do Zoom)

**Passos:**
1. Acessar a plataforma Overpass → ir na **aba de arquivos do encontro**.
2. Subir os 3 materiais na aba de arquivos.
3. Ir na **descrição do encontro** → colar o **RI** (Resumo Inteligente).
4. Salvar.

**Saída da Fase 4:** 3 materiais disponíveis + RI na descrição.

---

## FASE 5 — Comprimir vídeo com HandBrake

**Objetivo:** Reduzir o tamanho do arquivo (ex: 6GB → ~1GB) sem perder qualidade significativa.

1. Abrir **HandBrake**.
2. Importar o vídeo exportado do CapCut.
3. Aplicar o preset padrão de compressão.
4. Iniciar a compressão.

> **Tempo estimado:** ~1 hora (depende do tamanho e duração do vídeo).

5. Aguardar conclusão — durante esse tempo, pode avançar com a thumbnail (Fase 6).

**Saída da Fase 5:** Arquivo comprimido pronto para upload.

---

## FASE 6 — Criar Thumbnail (paralelo com HandBrake)

### Checkpoint — thumb fixa (3 opções prontas)
1. Identificar qual das 3 thumbs prontas é a correta para o encontro.
2. Separar o arquivo da thumb.

### Workshop — gerar com Midjourney
1. Pegar o **nome do encontro** — perguntar para Matheus ou Ruan via **Gather ou WhatsApp**.
2. Usar o prompt de geração de capa:

```
Gere uma thumbnail para um Workshop da Vanguarda (Overlens).
Nome do encontro: [nome do workshop]
Estilo: científico, sofisticado, moderno, paleta escura com detalhes em [cor padrão da Overlens].
Formato: 16:9 para Vimeo.
Texto na imagem: "[nome do workshop]" + "Workshop Vanguarda"
```

3. Gerar no **Midjourney** → selecionar a melhor versão.
4. Baixar a thumb gerada.

### Masterclass — gerar com Midjourney
1. Pegar o **nome do encontro** diretamente na **plataforma da Vanguarda** (sempre está anotado lá — não precisa perguntar).
2. Usar o mesmo fluxo do Workshop acima, adaptando o texto para "Masterclass Vanguarda".

> **Prompts salvos:** Midjourney (thumbnails Workshop/Masterclass) e IA (diagnóstico de início + RI) estão na [pasta Prompts no Drive](https://drive.google.com/drive/folders/13pdQXbPrcwyZFb9JMZf-5CfkaiOvrBJV?hl=pt-br) — acesso restrito a @overlens.com.br.

---

## FASE 7 — Upload no Vimeo e publicação

**Objetivo:** Hospedar o vídeo no Vimeo e pegar o link para a plataforma.

1. Aguardar o HandBrake concluir (Fase 5).
2. Acessar o **Vimeo**.
3. Fazer upload do arquivo comprimido.
4. Enquanto renderiza:
   - Trocar o **nome** do vídeo para o nome correto do encontro.
   - Subir a **thumbnail** correta (da Fase 6).
5. Aguardar o **Vimeo renderizar** completamente.
6. Copiar o **link do vídeo** do Vimeo.

**Saída da Fase 7:** Link do Vimeo pronto.

---

## FASE 8 — Publicar na plataforma e avisar a comunidade

**Objetivo:** Fechar o ciclo — vídeo disponível para os membros.

1. Acessar a **plataforma Overpass** → ir no encontro correspondente.
2. Colar o **link do Vimeo** no campo de vídeo.
3. Conferir se tudo está correto:
   - [ ] RI na descrição?
   - [ ] 3 materiais na aba de arquivos?
   - [ ] Thumb correta no encontro?
   - [ ] Link do Vimeo correto?
4. **Publicar** o encontro na plataforma.
5. Ir no **WhatsApp da Vanguarda** e usar o template correto:

**Checkpoint — Padrão:**
> Fala, galera! Tudo certo?
>
> O Checkpoint de hoje já está disponível na Área Secreta da Vanguarda.
> Pra quem não conseguiu acompanhar ao vivo ou quiser revisitar o conteúdo, já pode acessar por lá e ver tudo com calma. ⚡

**Checkpoint — Com boas-vindas** *(usar quando chegam novos membros na turma):*
> Fala, galera! Tudo certo?
>
> O Checkpoint de hoje já está disponível na Área Secreta da Vanguarda.
> Pra quem não conseguiu acompanhar ao vivo ou quiser revisar, já pode acessar por lá. ⚡
>
> E boas-vindas aos novos membros que chegaram na turma! Sejam bem-vindos, bora aproveitar ao máximo os conteúdos. 🚀
>
> Ah, e um detalhe importante: dentro da aula, na aba de arquivos, vocês encontram o chat do encontro, o mapa mental e a transcrição, tudo organizado pra facilitar o uso.

**Workshop:**
> Fala, pessoal! Tudo certo? Chegando aqui pra avisar que o Workshop de hoje já foi liberado na Área Secreta da Vanguarda.
>
> Quem não conseguiu acompanhar ao vivo ou quiser revisitar o conteúdo com mais calma, já pode acessar por lá. 🚀
> E lembrando: dentro da aula, na aba de arquivos, vocês também têm o mapa mental, o chat do encontro e a transcrição completa.

**Masterclass:**
> Fala, pessoal! Tudo certo?
>
> O Masterclass de ontem já tá no ar na Área Secreta da Vanguarda.
> Pra quem ainda tá por aqui na madrugada, já dá pra assistir agora, seja pra ver pela primeira vez ou revisitar com calma. 🌙
>
> E pra quem não viu, recomendo demais assistir… teve até proposta ao vivo 👀

**Saída da Fase 8:** Encontro publicado + comunidade avisada. ✅

---

## RESUMO DO FLUXO COMPLETO

```
Zoom processa
     ↓
[FASE 1] Coletar: gravação + bate papo + transcrição
     ↓
[FASE 2] CapCut + IA → cortar início do encontro → exportar vídeo + transcrição cortada
     ↓
[FASE 3] IA + App Mapa Mental → gerar RI + mapa mental do encontro
     ↓
[FASE 4] Plataforma → subir 3 materiais + RI na descrição
     ↓
[FASE 5] HandBrake → comprimir vídeo (~1h)     ←→     [FASE 6] Criar thumb (paralelo)
     ↓
[FASE 7] Vimeo → upload + nome + thumb + aguardar render → copiar link
     ↓
[FASE 8] Plataforma → colar link + publicar → avisar WhatsApp Vanguarda
```

---

## SLAs

| Etapa | Tempo estimado |
|---|---|
| Fase 1 — Aguardar Zoom | Variável (geralmente minutos a 1h após encontro) |
| Fase 2 — Corte CapCut + IA | ~30min |
| Fase 3 — RI + Mapa Mental | ~20min |
| Fase 4 — Upload materiais plataforma | ~10min |
| Fase 5 — HandBrake | ~1h (aguardar) |
| Fase 6 — Thumbnail | ~15–30min (Workshop/Masterclass) ou 5min (Checkpoint) |
| Fase 7 — Vimeo | ~30min (upload + renderização) |
| Fase 8 — Publicar + avisar | ~10min |
| **Total estimado** | **~3–4h após término do encontro** |

---

## KPIs

- Encontro publicado no mesmo dia do encontro (meta: 100%)
- RI na descrição (meta: 100%)
- 3 materiais na aba de arquivos (meta: 100%)
- Aviso no WhatsApp no mesmo dia (meta: 100%)

---

## Exceções

- **Zoom demora a processar:** aguardar e adiantar outras tarefas. Não publicar sem a transcrição (necessária para o RI e o corte).
- **HandBrake travar/crashar:** reiniciar e aplicar preset mais leve se necessário.
- **Vimeo lento para renderizar:** publicar o encontro sem o link primeiro, atualizar quando renderizar.
- **Nome do Workshop não veio:** perguntar para o Ruan ou Matheus antes de gerar a thumb.
- **Feriado:** não tem encontro, não tem processo.

---

## Checklist final antes de publicar

- [ ] Vídeo começa no momento certo (sem bate-papo inicial)?
- [ ] RI está na descrição do encontro?
- [ ] Transcrição, mapa mental e bate papo na aba de arquivos?
- [ ] Thumb correta (checkpoint: fixa | workshop/masterclass: Midjourney)?
- [ ] Nome do encontro correto no Vimeo e na plataforma?
- [ ] Link do Vimeo colado e funcionando na plataforma?
- [ ] Encontro publicado (não em rascunho)?
- [ ] WhatsApp avisado?

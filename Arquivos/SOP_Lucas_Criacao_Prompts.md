# SOP | Criação e Gestão de Prompts de IA
> Owner: Lucas Paixão
> v1.0 | 2026-04-30

---

## Visão geral

Processo para criar, testar, versionar e salvar prompts de IA usados nos processos da Overlens. Cada prompt tem uma função específica (ex: diagnóstico de início de encontro, RI, descrições de aulas, etc.) e é construído com base no que precisa ser entregue e como entregar da melhor forma.

**Gatilho:** Identificação de uma tarefa repetitiva que se beneficia de um prompt padronizado, ou queda de qualidade em um prompt existente.

**Ferramentas:** Claude / ChatGPT · Google Drive (pasta pessoal de prompts) · PC local · Transcrições (para teste)

---

## FASE 1 — Definir o que o prompt precisa fazer

1. Identificar a **função** do prompt — qual tarefa ele vai executar?
   - Ex: "identificar o início real de um encontro na transcrição"
   - Ex: "gerar RI (Resumo Inteligente) a partir de transcrição cortada"
   - Ex: "revisar descrição de aula para clareza e fidelidade"

2. Definir o **input** — o que entra no prompt?
   - Transcrição completa / cortada
   - Texto bruto
   - Contexto específico (tipo de encontro, nome, etc.)

3. Definir o **output esperado** — o que o prompt precisa entregar?
   - Formato (bullets, parágrafos, tabela)
   - Nível de detalhe
   - Tom (científico, direto, sem hype — padrão Overlens)
   - Restrições ("não inventar informações", "basear-se apenas na transcrição")

**Saída da Fase 1:** Clareza sobre o que o prompt precisa fazer, receber e entregar.

---

## FASE 2 — Escrever o prompt base

1. Escrever a versão inicial do prompt com:
   - Instrução de contexto (quem é a IA no contexto desse prompt)
   - O que analisar / fazer
   - Formato de resposta esperado
   - Restrições importantes (ex: "não inventar", "baseie-se apenas no input")
   - Campo de input claramente marcado (ex: `TRANSCRIÇÃO: [cole aqui]`)

2. Seguir estrutura base:

```
[Contexto / Papel da IA]
[Instrução principal — o que fazer]
[Formato de saída obrigatório]
[Restrições / regras]
[Campo de input]
```

**Saída da Fase 2:** Rascunho do prompt (v0).

---

## FASE 3 — Testar com transcrições reais

1. Pegar uma **transcrição real** (de encontro, aula ou material disponível).
2. Colar no prompt e rodar na IA (Claude ou ChatGPT — conforme o contexto do prompt).
3. Avaliar o output:
   - [ ] Entregou o formato correto?
   - [ ] O conteúdo está fiel ao input (sem invenção)?
   - [ ] O tom está alinhado com o padrão Overlens?
   - [ ] A estrutura de saída está pronta para uso direto?

4. Ajustar o prompt com base no que não funcionou.
5. Testar de novo até o output estar consistente.

> **Regra:** Testar sempre com pelo menos 2 casos diferentes antes de considerar o prompt pronto. Um caso rico (transcrição longa e densa) e um caso mais simples.

**Saída da Fase 3:** Prompt validado com outputs consistentes.

---

## FASE 4 — Salvar e versionar

1. Salvar o prompt no **PC local** (pasta dedicada de prompts).
2. Salvar também no **Google Drive da empresa** (pasta pessoal do Lucas — prompts).
3. Nomear o arquivo com padrão:
   ```
   Prompt — [Nome da função] — v[número]
   ```
   Exemplos:
   - `Prompt — Diagnóstico Início Encontro — v1`
   - `Prompt — RI Vanguarda — v2`
   - `Prompt — Descrição Aula Trilha — v1`

4. Quando atualizar um prompt: incrementar a versão (v1 → v2) e manter a versão anterior salva.

**Saída da Fase 4:** Prompt salvo em 2 lugares (PC + Drive) com nomenclatura correta.

---

## FASE 5 — Usar e iterar

1. Ao usar o prompt no dia a dia: se o output não estiver bom, ajustar o prompt.
2. A cada ajuste relevante: salvar nova versão.
3. Não apagar versões antigas — manter histórico (v1, v2, v3...).

---

## SLAs

| Etapa | Tempo estimado |
|---|---|
| Definir função + input + output | ~10min |
| Escrever v0 | ~15–30min |
| Testar com 2 transcrições | ~20–30min |
| Ajustar até ficar consistente | ~10–20min |
| Salvar e nomear | ~5min |
| **Total por prompt novo** | **~1–1,5h** |

---

## KPIs

- % prompts em uso que têm versão salva no Drive (meta: 100%)
- Taxa de "first pass approved" — output aprovado sem precisar ajustar manualmente

---

## Exceções

- **Prompt urgente:** escrever e usar sem testar formalmente — registrar como "v0 rascunho" e refinar depois.
- **Prompt que parou de funcionar bem (modelo da IA atualizado):** revisar as instruções e incrementar a versão.

---

## Checklist por prompt criado

- [ ] Função, input e output definidos?
- [ ] Restrição anti-invenção incluída ("baseie-se apenas no input")?
- [ ] Testado com ao menos 2 transcrições?
- [ ] Output consistente?
- [ ] Salvo no PC com nomenclatura correta?
- [ ] Salvo no Drive com nomenclatura correta?
- [ ] Versão incrementada (se for atualização)?

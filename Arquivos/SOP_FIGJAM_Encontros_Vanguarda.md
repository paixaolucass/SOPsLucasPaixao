# FIGJAM — SOP | Encontros Vanguarda (Checkpoint · Workshop · Masterclass)
> Owner: Lucas Paixão
> Copie cada bloco abaixo como caixas no FigJam, conectando com setas na ordem indicada.
> Cor sugerida: vermelho/laranja (padrão Squad Conteúdo)

---

## COMO RECRIAR NO FIGJAM

- **Retângulo** = passo de execução
- **Losango** = decisão (SIM / NÃO)
- **Texto solto** = label de entrada (ex: "GRAVAÇÃO NO DRIVE")
- **Seta** = fluxo entre passos
- **Seta dupla lateral** = fluxo paralelo (duas coisas ao mesmo tempo)
- **Referência a outro SOP** = caixinha pequena no lado

---

## DIAGRAMA — BLOCO A BLOCO

```
ENTRADA:
┌─────────────────────────────────┐
│  ENCONTRO ACONTECEU NO ZOOM     │  ← label de entrada (texto solto)
└─────────────────────────────────┘
         ↓

┌─────────────────────────────────────────────────────┐
│  Aguardar Zoom processar e coletar os 3 arquivos:   │
│  · Gravação do encontro (vídeo completo)            │
│  · Bate papo do encontro (chat)                     │
│  · Transcrição do encontro                          │
└─────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────┐
│  Abrir CapCut e importar a gravação completa do encontro │
└──────────────────────────────────────────────────────────┘
         ↓

┌────────────────────────────────────────────────────────────────┐
│  Usar prompt de diagnóstico de início com a transcrição na IA  │
│  → IA retorna: timestamp + frase que marca o início real       │
└────────────────────────────────────────────────────────────────┘
         ↓

┌────────────────────────────────────────────────────────────────────┐
│  Cortar no CapCut a partir do timestamp indicado pela IA           │
│  + Cortar a transcrição nas mesmas linhas (sincronizar com vídeo)  │
└────────────────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────┐
│  Exportar o vídeo cortado do CapCut para o PC        │
└──────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────────────────────────┐
│  Usar a transcrição cortada no prompt de RI (Resumo Inteligente) na IA       │
│  → IA gera: RI do encontro (resumo, pontos principais, insights, próx. passos)│
└──────────────────────────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────────────────┐
│  Pegar o RI e subir no App Mapa Mental Vanguarda                     │
│  → App entrega: material do mapa mental do encontro                  │
└──────────────────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────────────────────────┐
│  Subir os 3 materiais na aba de arquivos do encontro na plataforma:          │
│  · Transcrição cortada  · Mapa mental do encontro  · Bate papo (chat Zoom)  │
│  + Colar o RI na descrição do encontro na plataforma                         │
└──────────────────────────────────────────────────────────────────────────────┘
         ↓

     ┌───────────────────────────────────────┐
     │  DUAS COISAS AO MESMO TEMPO (paralelo)│
     └───────────────────────────────────────┘
          ↙                           ↘

┌─────────────────────────┐     ┌──────────────────────────────────────────┐
│  Abrir HandBrake        │     │  Criar Thumbnail                         │
│  Importar vídeo cortado │     │                                          │
│  Aplicar preset padrão  │     │  ◆ Checkpoint?                           │
│  Iniciar compressão     │     │    → Escolher 1 das 3 thumbs prontas     │
│  (~1 hora de espera)    │     │                                          │
└─────────────────────────┘     │  ◆ Workshop ou Masterclass?              │
                                │    → Pegar nome do encontro              │
                                │      (Workshop: Ruan ou Matheus)         │
                                │      (Masterclass: anotado na plataforma)│
                                │    → Usar prompt no Midjourney           │
                                │    → Selecionar e baixar a capa gerada   │
                                └──────────────────────────────────────────┘

          ↘                           ↙
     ┌──────────────────────────────────┐
     │  HandBrake concluiu + Thumb OK   │
     └──────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────┐
│  Abrir Vimeo e fazer upload do arquivo comprimido        │
└──────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────┐
│  Enquanto renderiza no Vimeo:                            │
│  · Trocar o nome do vídeo para o nome correto            │
│  · Subir a thumbnail correta                             │
└──────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────┐
│  Aguardar o Vimeo renderizar completamente               │
│  → Copiar o link do vídeo                                │
└──────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────┐
│  Acessar a plataforma (Overpass)                         │
│  → Colar o link do Vimeo no campo de vídeo do encontro   │
│  → Conferir: RI na descrição + 3 materiais nos arquivos  │
│  → Publicar o encontro                                   │
└──────────────────────────────────────────────────────────┘
         ↓

┌──────────────────────────────────────────────────────────┐
│  Avisar no WhatsApp da Vanguarda que o encontro          │
│  está disponível na plataforma (com link)                │
└──────────────────────────────────────────────────────────┘
         ↓

ENCONTRO PUBLICADO ✅
```

---

## NOTAS PARA O FIGJAM

**Label de entrada (texto solto acima do primeiro bloco):**
- `ENCONTRO ACONTECEU NO ZOOM`

**Referências a outros SOPs (caixinha pequena nas laterais):**
- Nenhuma obrigatória — esse é um processo autônomo do Lucas

**Cor de fundo do diagrama:**
- Vermelho/laranja (padrão Squad Conteúdo)

**Variações por tipo de encontro (pode virar nota sticky no FigJam):**
| | Checkpoint | Workshop | Masterclass |
|---|---|---|---|
| Dia | Quarta | Sexta | Variável (~1x/mês) |
| Thumb | 3 fixas prontas | Midjourney (prompt salvo) | Midjourney (prompt salvo) |
| Nome | — (fixo) | Perguntar Matheus ou Ruan via Gather/WhatsApp | Pegar na plataforma da Vanguarda |
| Feriado | ❌ Cancela | ❌ Cancela | — |

---

---

## IA — ONDE DÁ PARA OTIMIZAR (opcional, futuro)

> Seção separada. Nada muda no fluxo atual. São sugestões para quando quiser tornar etapas mais rápidas ou automáticas.

---

### Status das otimizações (2026-04-30)

| # | Otimização | Status |
|---|---|---|
| 1 | Diagnóstico do início via IA (prompt salvo) | ✅ Já implementado |
| 2 | Geração do RI via template/prompt salvo | ✅ Já implementado |
| 3 | Templates de aviso WhatsApp por tipo | ✅ Já tem os 3 templates |
| 4 | Prompt Midjourney fixo por tipo (Workshop/Masterclass) | ✅ Já tem salvos |
| 5 | Monitorar HandBrake manualmente | ✅ Já é o fluxo atual |

> O processo já está otimizado. As sugestões acima já fazem parte do fluxo real do Lucas.

# SOP59 | Criação de Guias e Ferramentas Digitais
> Owner: Lucas Paixão
> Área: IA e Processos
> v1.0 | 2026-05-04

---

## Visão geral

Criação de materiais digitais interativos e ferramentas funcionais para apoiar o trabalho do time ou como conteúdo da Overlens.

| Tipo | O que é | Exemplos |
|---|---|---|
| Tipo A - Guia HTML | Documento web com identidade visual Overlens para ensinar processos, ferramentas ou conceitos | Guia de Agentes de IA, Guia Seedance, Guia de Prompts Kling |
| Tipo B - Ferramenta funcional | App ou dashboard que executa uma função real no dia a dia | App Mapa Mental Vanguarda, monitor de notícias de IA ao vivo, rastreador de trends virais |

**Gatilho:** Demanda por material interativo, ferramenta de apoio ao trabalho identificada na daily ou no ClickUp.

**Ferramentas:** Claude Code (Antigravity / Codex) · Overlens Design System (`node_modules/@overlens`) · Vercel · GitHub · ClickUp · Google Drive

---

## TIPO A - Guia Interativo em HTML

Documentos web com identidade visual Overlens para ensinar processos, ferramentas ou conceitos.

### Passo a passo

1. Definir tema, público e objetivo do guia.
2. Estruturar o conteúdo em seções com Claude:
   - Tom Overlens: científico, claro, sem hype
   - Seções lógicas com progressão de complexidade
3. Criar o HTML com o **design system da Overlens:**
   - Importar `@overlens/legacy-foundations` (tokens de cor, tipografia: Outfit/Inter/JetBrains Mono, espaçamento)
   - Usar variáveis de cor padrão (background, foreground, card, brand-kobold, brand-atmos, brand-midori)
   - Manter responsividade desktop/mobile
4. Iterar com Claude até o guia estar completo e visualmente correto.
5. Deploy no **Vercel** → verificar em desktop e mobile.
6. Entregar link + evidência no ClickUp.

### Estrutura padrão de guia

```
Header (logo Overlens + título + descrição)
├── Seção de contexto / visão geral
├── Seções de conteúdo (com cards, tabelas, código se necessário)
├── Checklist ou resumo final
└── Footer
```

### SLAs

| Escopo | Tempo estimado |
|---|---|
| Guia HTML simples (3–5 seções) | ~2–4h |
| Guia HTML completo (10+ seções, interativo) | ~1 dia |

### Checklist

- [ ] Design system Overlens aplicado (cores, fontes, tokens)?
- [ ] Conteúdo no tom Overlens (científico, sem hype)?
- [ ] Testado em desktop e mobile?
- [ ] Deploy no Vercel funcionando?
- [ ] Link entregue + evidência no ClickUp?

---

## TIPO B - Ferramenta Funcional (App / Dashboard)

Ferramentas que executam uma função real no dia a dia do time.

**Exemplos criados:**
- **App Mapa Mental Vanguarda** (React / Antigravity) - recebe RI e gera o material do mapa mental do encontro
- **Monitor de Notícias de IA ao vivo** (Node.js) - agrega notícias de IA em tempo real
- **Rastreador de Trends Virais** - monitora trends para apoiar criação de conteúdo

### Passo a passo

1. Definir o problema que a ferramenta resolve e o que ela precisa fazer.
2. Especificar claramente:
   - O que entra (inputs)
   - O que sai (outputs)
   - Comportamento esperado em casos normais e de erro
3. Desenvolver com **Claude Code** → iterar até funcionar conforme esperado.
4. Testar com casos reais antes de usar em produção.
5. Deploy:
   - Frontend / apps: **Vercel**
   - Servidores / processos contínuos: rodar localmente (Node.js) ou via servidor
6. Documentar no Drive:
   - O que a ferramenta faz
   - Onde está deployada (link)
   - Como usar
7. Evidência no ClickUp.

> **Ativo do time:** Ferramentas criadas aqui devem ser documentadas de forma que qualquer pessoa consiga usar ou dar manutenção, mesmo sem contexto do desenvolvimento original.

### SLAs

| Escopo | Tempo estimado |
|---|---|
| Ferramenta simples (1 função, sem backend) | ~1 dia |
| Ferramenta com backend / integrações | ~2–3 dias |

### Checklist

- [ ] Problema e comportamento esperado definidos antes de começar?
- [ ] Testada com casos reais antes de entregar?
- [ ] Deploy funcionando (Vercel ou local)?
- [ ] Finalidade e link documentados no Drive?
- [ ] Evidência no ClickUp?

---

## KPIs

- % guias/ferramentas com evidência registrada no ClickUp (meta: 100%)
- % ferramentas com documentação no Drive (meta: 100%)

## Exceções

- **Claude Code gera código com bug:** iterar na sessão, descrever o comportamento esperado vs atual para o Claude corrigir.
- **Deploy no Vercel falha:** verificar logs no dashboard Vercel → corrigir erro antes de entregar.
- **Ferramenta dependente de API externa:** documentar a dependência e o que acontece quando a API está fora do ar.

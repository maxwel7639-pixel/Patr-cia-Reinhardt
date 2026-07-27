# Patrícia Reinhardt · Massoterapeuta em Canela/RS

Landing page estática (HTML + CSS + JS puro, sem build) da massoterapeuta
Patrícia Reinhardt — Canela/RS.

Implementação do design **"Patricia Reinhardt - Massagem Canela"** (Claude Design).

## Estrutura

```
index.html      página única
styles.css      estilos (paleta creme + vinho + oliva)
script.js       revelar ao rolar, tilt nos cards, acordeão do FAQ
robots.txt
assets/
  patricia-reinhardt.webp   foto do hero (WebP)
  patricia-reinhardt.jpg    fallback do hero
  og-image.jpg              preview de link (WhatsApp / Instagram / redes)
  favicon.svg
  servicos/                 fotos dos cards de serviço (ver abaixo)
```

Sem dependências, sem etapa de build. As fontes (Playfair Display + Poppins)
vêm do Google Fonts.

## Rodar localmente

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Deploy na Vercel

Import do repositório → **Framework: Other**, Build Command e Output Directory
vazios, **Root Directory: `.`** (os arquivos estão na raiz, não em subpasta).

## Imagens

Todas as imagens estão aplicadas. Foram convertidas para WebP no tamanho de
exibição (2x), somando **~376 KB** no total.

| Seção / card          | Arquivo                                     |
| --------------------- | ------------------------------------------- |
| Hero                  | `assets/patricia-reinhardt.webp` (+ `.jpg`) |
| Sobre                 | `assets/sobre-espaco.webp`                  |
| Massagem Terapêutica  | `assets/servicos/massagem-terapeutica.webp` |
| Liberação Miofascial  | `assets/servicos/liberacao-miofascial.webp` |
| Drenagem Linfática    | `assets/servicos/drenagem-linfatica.webp`   |
| Massagem Relaxante    | `assets/servicos/massagem-relaxante.webp`   |
| Pedras Quentes        | `assets/servicos/pedras-quentes.webp`       |
| Esfoliação Corporal   | `assets/servicos/esfoliacao-corporal.webp`  |
| Reflexologia          | `assets/servicos/reflexologia.webp`         |
| Pré e Pós-operatório  | `assets/servicos/pre-pos-operatorio.webp`   |
| Massagem na Gravidez  | `assets/servicos/massagem-gravidez.webp`    |

O `og:image` (1200x630) é gerado a partir da foto do hero.

Para trocar qualquer foto depois: substitua o arquivo mantendo o nome. O
`object-fit: cover` no CSS reenquadra sozinho, não precisa mexer no HTML.

### Ajuste feito no card "Pré e Pós-operatório"

O arquivo original vinha com uma tarja verde-petróleo escrita
"EM AÇÃO! PRÉ E PÓS OPERATÓRIO?" impressa no topo — arte de post de rede
social, fora da paleta do site e repetindo o título do card. A tarja foi
recortada e a foto reenquadrada na mesma proporção dos outros cards.

## Depois de conectar o domínio

Trocar as URLs relativas por absolutas no `<head>` do `index.html`
(`og:image`, `twitter:image`) e adicionar `og:url` + `<link rel="canonical">`
com o endereço final. Fazer o mesmo no `image` do bloco JSON-LD.

## Dados de contato usados na página

- WhatsApp: **(54) 99675-1073** — `https://wa.me/5554996751073`
- Instagram: **@massagemcanela**
- Endereço: **Tv. Delmiro Gouvêia, 43 — Canela/RS**
- Google: **5,0 · 48 avaliações**

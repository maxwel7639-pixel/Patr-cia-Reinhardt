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

## Fotos pendentes

O hero usa a foto real da Patrícia. Os **9 cards de serviço** e a **foto da
seção "Sobre"** ainda estão com um placeholder gráfico na paleta do site
(gradientes quentes, sem ícone nem emoji) — as fotos originais do arquivo de
design não puderam ser recuperadas em resolução utilizável.

Para colocar a foto real, salve o arquivo em `assets/servicos/` com o nome
abaixo e troque a `<div class="card__media ph">` do card correspondente por:

```html
<div class="card__media">
  <img src="/assets/servicos/massagem-terapeutica.jpg"
       alt="Massagem terapêutica" loading="lazy">
</div>
```

O `object-fit: cover` já está no CSS — a foto se ajusta sozinha ao card.

| Card / seção          | Arquivo esperado                            |
| --------------------- | ------------------------------------------- |
| Massagem Terapêutica  | `assets/servicos/massagem-terapeutica.jpg`  |
| Liberação Miofascial  | `assets/servicos/liberacao-miofascial.jpg`  |
| Drenagem Linfática    | `assets/servicos/drenagem-linfatica.jpg`    |
| Massagem Relaxante    | `assets/servicos/massagem-relaxante.jpg`    |
| Pedras Quentes        | `assets/servicos/pedras-quentes.jpg`        |
| Esfoliação Corporal   | `assets/servicos/esfoliacao-corporal.jpg`   |
| Reflexologia          | `assets/servicos/reflexologia.jpg`          |
| Pré e Pós-operatório  | `assets/servicos/pre-pos-operatorio.jpg`    |
| Massagem na Gravidez  | `assets/servicos/massagem-gravidez.jpg`     |
| Seção "Sobre"         | `assets/sobre-espaco.jpg`                   |

Formato sugerido: JPG ou WebP, ~1200×1200 px, até ~250 KB cada.

## Depois de conectar o domínio

Trocar as URLs relativas por absolutas no `<head>` do `index.html`
(`og:image`, `twitter:image`) e adicionar `og:url` + `<link rel="canonical">`
com o endereço final. Fazer o mesmo no `image` do bloco JSON-LD.

## Dados de contato usados na página

- WhatsApp: **(54) 99675-1073** — `https://wa.me/5554996751073`
- Instagram: **@massagemcanela**
- Endereço: **Tv. Delmiro Gouvêia, 43 — Canela/RS**
- Google: **5,0 · 48 avaliações**

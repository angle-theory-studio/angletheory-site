# Angle Theory Studio

## 1. Обзор проекта

Angle Theory Studio — статический сайт студии, посвящённый цифровой стратегии, AI-решениям и SEO-услугам.

Сайт построен на HTML и CSS. Каждая продуктовая и сервисная страница располагается в отдельной папке с файлом `index.html`. Такая структура позволяет открывать страницы напрямую по URL.

## 2. Страницы продуктов

### 2.1. Sales Manager

- **Файл страницы:** `products/sales-manager/index.html`
- **URL:** `/products/sales-manager/`
- **Preview 390px:** `previews/products/sales-manager-390.png`
- **Preview 1440px:** `previews/products/sales-manager-1440.png`

### 2.2. AI Agent Master

- **Файл страницы:** `products/ai-agent-master/index.html`
- **URL:** `/products/ai-agent-master/`
- **Preview 390px:** `previews/products/ai-agent-master-390.png`
- **Preview 1440px:** `previews/products/ai-agent-master-1440.png`

### 2.3. Business App

- **Файл страницы:** `products/business-app/index.html`
- **URL:** `/products/business-app/`
- **Preview 390px:** `previews/products/business-app-390.png`
- **Preview 1440px:** `previews/products/business-app-1440.png`

### 2.4. Autonomous Business System

- **Файл страницы:** `products/autonomous-business-system/index.html`
- **URL:** `/products/autonomous-business-system/`
- **Preview 390px:** `previews/products/autonomous-business-system-390.png`
- **Preview 1440px:** `previews/products/autonomous-business-system-1440.png`

## 3. Страницы услуг

### 3.1. AI Search Visibility Audit

- **Файл страницы:** `services/ai-search-visibility-audit/index.html`
- **URL:** `/services/ai-search-visibility-audit/`
- **Preview 390px:** `previews/services/ai-search-visibility-audit-390.png`
- **Preview 1440px:** `previews/services/ai-search-visibility-audit-1440.png`

### 3.2. AI Competitor Intelligence

- **Файл страницы:** `services/ai-competitor-intelligence/index.html`
- **URL:** `/services/ai-competitor-intelligence/`
- **Preview 390px:** `previews/services/ai-competitor-intelligence-390.png`
- **Preview 1440px:** `previews/services/ai-competitor-intelligence-1440.png`

### 3.3. AI Opportunity Audit

- **Файл страницы:** `services/ai-opportunity-audit/index.html`
- **URL:** `/services/ai-opportunity-audit/`
- **Preview 390px:** `previews/services/ai-opportunity-audit-390.png`
- **Preview 1440px:** `previews/services/ai-opportunity-audit-1440.png`

### 3.4. SEO Revenue Recovery

- **Файл страницы:** `services/seo-revenue-recovery/index.html`
- **URL:** `/services/seo-revenue-recovery/`
- **Preview 390px:** `previews/services/seo-revenue-recovery-390.png`
- **Preview 1440px:** `previews/services/seo-revenue-recovery-1440.png`

### 3.5. Premium Account Opportunity

- **Файл страницы:** `services/premium-account-opportunity/index.html`
- **URL:** `/services/premium-account-opportunity/`
- **Preview 390px:** `previews/services/premium-account-opportunity-390.png`
- **Preview 1440px:** `previews/services/premium-account-opportunity-1440.png`

### 3.6. SEO Internal Linking & Authority Architecture

- **Файл страницы:** `services/seo-internal-linking-authority/index.html`
- **URL:** `/services/seo-internal-linking-authority/`
- **Preview 390px:** `previews/services/seo-internal-linking-390.png`
- **Preview 1440px:** `previews/services/seo-internal-linking-1440.png`

## 4. Структура проекта

Основные каталоги и файлы:

index.html — главная страница сайта.

products/ — продуктовые страницы, каждая в собственной папке с файлом index.html.

services/ — сервисные страницы, каждая в собственной папке с файлом index.html.

assets/ — изображения, графика, иконки и другие визуальные ресурсы сайта.

assets/images/ — PNG, WebP, JPG и другие изображения, используемые в содержимом страниц.

assets/icons/ — иконки и графические элементы, включая favicon-файлы, если они хранятся в этом каталоге.

styles/ — CSS-файлы проекта: глобальные стили, общие компоненты и стили отдельных страниц.

previews/products/ — скриншоты продуктовых страниц для ширины 390px и 1440px.

previews/services/ — скриншоты сервисных страниц для ширины 390px и 1440px.

404.html — пользовательская страница ошибки 404 для несуществующих URL.

404.css — стили страницы ошибки 404.

favicon.ico — иконка сайта для браузеров.

favicon.png — PNG-версия иконки сайта, если используется.

robots.txt — инструкции для поисковых роботов.

sitemap.xml — карта сайта со списком публичных URL.

README.md — основная документация проекта.

CSS-файлы могут располагаться в корневом каталоге или в отдельных папках стилей. Их фактическое расположение следует сверить с текущей структурой репозитория.

## 5. Шрифты и лицензии

В проекте используется шрифт **Montserrat**, подключаемый через Google Fonts.

### Подключение шрифта

Шрифт подключается в HTML-файле внутри секции `<head>`:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
/>
```

### Используемые начертания

- `400` — Regular.
- `500` — Medium.
- `600` — SemiBold.

### Источник

- **Шрифт:** Montserrat
- **Поставщик:** Google Fonts
- **Ссылка:** https://fonts.google.com/specimen/Montserrat
- **Способ подключения:** внешний CSS-файл через Google Fonts
- **Локальные файлы шрифта:** не требуются при использовании указанного способа подключения.

### Примечания

Для загрузки шрифта через CDN требуется подключение к интернету. Если Google Fonts недоступен, браузер использует резервный шрифт, заданный в CSS.

## 6. Как запустить проект локально

Для локального просмотра сайта можно использовать встроенный HTTP-сервер Python. Публиковать сайт на сервере для этого не требуется.

### 6.1. Запуск через Python

1. Установите Python, если он ещё не установлен.
2. Откройте терминал в корневой папке проекта.
3. Выполните одну из команд.

**Windows:**

```bash
py -m http.server 8000
```

Если команда `py` недоступна:

```bash
python -m http.server 8000
```

**macOS/Linux:**

```bash
python3 -m http.server 8000
```

4. Откройте браузер и перейдите по адресу:

   `http://localhost:8000/`

5. Откройте нужную страницу, например:

   `http://localhost:8000/products/sales-manager/`

Для этого URL файл должен находиться по пути `products/sales-manager/index.html` относительно корневой папки сервера.

### 6.2. Остановка сервера

Чтобы остановить сервер, вернитесь в терминал и нажмите `Ctrl+C`.

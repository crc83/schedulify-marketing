# Schedulify Marketing Landing Page

Українська лендінг-сторінка для Schedulify - системи планування для терапевтичних клінік.

## 🎨 Дизайн

Сторінка використовує кольорову схему з `demo-org.json`:
- **Основний колір**: `#7092bf` (синій)
- **Material Icons** для іконок
- **Responsive дизайн** для всіх пристроїв
- **Адаптивна навігація** для мобільних пристроїв

## 📁 Структура файлів

```
schedulify-marketing/
├── index.html          # Головна HTML сторінка (українською)
├── styles.css          # CSS стилі з кольоровою схемою demo-org
├── script.js           # JavaScript для інтерактивності
├── README.md           # Цей файл
└── images/
    ├── demo-logo192.png   # Логотип 192x192
    ├── demo-logo512.png   # Логотип 512x512
    └── favicon.ico        # Favicon
```

## 🚀 Розгортання на GitHub Pages

### Крок 1: Створення репозиторію

```bash
cd ~/Personal/Projects/schedulify-marketing

# Ініціалізація Git (якщо ще не зроблено)
git init

# Додати файли
git add .

# Перший коміт
git commit -m "Initial commit: Ukrainian landing page for Schedulify"

# Створити репозиторій на GitHub (замініть USERNAME на ваш GitHub username)
# Перейдіть на https://github.com/new та створіть репозиторій з назвою "schedulify-marketing"

# Додати remote
git remote add origin https://github.com/USERNAME/schedulify-marketing.git

# Відправити на GitHub
git branch -M main
git push -u origin main
```

### Крок 2: Налаштування GitHub Pages

1. Перейдіть до репозиторію на GitHub
2. Клікніть **Settings** → **Pages**
3. В розділі **Source** оберіть:
   - Branch: `main`
   - Folder: `/ (root)`
4. Клікніть **Save**
5. Через 1-2 хвилини сайт буде доступний за адресою:
   - `https://USERNAME.github.io/schedulify-marketing/`

### Крок 3: Власний домен (опціонально)

Якщо у вас є власний домен:

1. В налаштуваннях GitHub Pages введіть ваш домен
2. Додайте CNAME запис у налаштуваннях вашого DNS провайдера:
   ```
   CNAME @ USERNAME.github.io
   ```
3. Зачекайте поки DNS оновиться (може зайняти до 24 годин)

## 🎥 Додавання YouTube відео

Після створення навчального відео:

### Крок 1: Завантажте відео на YouTube

1. Завантажте відео на YouTube
2. Скопіюйте ID відео з URL (наприклад, якщо URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, то ID це `dQw4w9WgXcQ`)

### Крок 2: Оновіть index.html

Відкрийте `index.html` та знайдіть секцію `<!-- Video Section -->` (біля рядка 152).

**Закоментуйте або видаліть цей блок:**
```html
<div class="video-placeholder">
    <span class="material-icons video-icon">play_circle_filled</span>
    <p class="video-text">Відео буде доступне незабаром</p>
    <p class="video-subtext">Тут буде розміщено детальну інструкцію з використання Schedulify</p>
</div>
```

**Розкоментуйте та оновіть цей блок:**
```html
<div class="video-wrapper">
    <iframe
        src="https://www.youtube.com/embed/ВАШ_VIDEO_ID"
        title="Як використовувати Schedulify"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
```

Замініть `ВАШ_VIDEO_ID` на реальний ID вашого відео.

### Крок 3: Оновіть на GitHub

```bash
git add index.html
git commit -m "Add YouTube video to landing page"
git push
```

GitHub Pages автоматично оновить сайт за 1-2 хвилини.

## 📝 Редагування контенту

### Зміна тексту

Весь текст знаходиться в `index.html`. Шукайте потрібні секції:
- **Hero секція**: рядок ~42 (`<section class="hero">`)
- **Можливості**: рядок ~68 (`<section id="features">`)
- **Як працює**: рядок ~133 (`<section id="how-it-works">`)
- **Відео**: рядок ~152 (`<section id="video">`)
- **Контакти**: рядок ~255 (`<section id="contact">`)

### Зміна кольорів

Кольори визначені в `styles.css` на початку файлу (рядки 1-15):

```css
:root {
    --primary-color: #7092bf;     /* Основний колір */
    --primary-dark: #5a7a9f;      /* Темніший відтінок */
    --primary-light: #8faad1;     /* Світліший відтінок */
    /* ... інші кольори ... */
}
```

Змініть ці значення, щоб оновити всю кольорову схему сайту.

### Зміна зображень

1. Додайте нові зображення в папку `images/`
2. Оновіть шляхи в `index.html`:
   - Логотип в header: рядок ~24
   - Зображення в hero: рядок ~51
   - Favicon: рядок ~11

## 🔧 Локальне тестування

Для локального перегляду сайту:

### Варіант 1: Простий HTTP сервер (Python)

```bash
cd ~/Personal/Projects/schedulify-marketing

# Python 3
python3 -m http.server 8000

# Відкрийте браузер: http://localhost:8000
```

### Варіант 2: Live Server (VS Code)

1. Встановіть розширення "Live Server" в VS Code
2. Відкрийте `index.html`
3. Клікніть правою кнопкою → "Open with Live Server"

### Варіант 3: Просто відкрийте файл

Можна просто відкрити `index.html` в браузері подвійним кліком, але деякі функції можуть не працювати без HTTP сервера.

## 📱 Тестування адаптивності

Перевірте як виглядає сайт на різних пристроях:

1. Відкрийте DevTools в Chrome (F12)
2. Клікніть іконку пристроїв (Ctrl+Shift+M)
3. Оберіть різні розміри екрану:
   - Мобільний: 320px, 375px, 414px
   - Планшет: 768px, 1024px
   - Десктоп: 1280px, 1920px

## ✅ Checklist перед публікацією

- [ ] Всі тексти перевірені на помилки
- [ ] Всі посилання працюють
- [ ] Email адреса контакту актуальна
- [ ] Логотип відображається коректно
- [ ] Сайт адаптивний на всіх екранах
- [ ] YouTube відео додане (якщо готове)
- [ ] Favicon відображається
- [ ] Мета-теги для SEO заповнені

## 🌐 SEO Оптимізація

В `index.html` вже є базові мета-теги:

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
```

Для покращення SEO, додайте також:

```html
<!-- Open Graph для соціальних мереж -->
<meta property="og:title" content="Schedulify - Планування для терапевтичних клінік">
<meta property="og:description" content="...">
<meta property="og:image" content="https://yourdomain.com/images/demo-logo512.png">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Schedulify">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://yourdomain.com/images/demo-logo512.png">
```

## 📊 Аналітика (опціонально)

### Додати Google Analytics

1. Створіть обліковий запис на https://analytics.google.com
2. Отримайте Tracking ID (наприклад, `G-XXXXXXXXXX`)
3. Додайте перед `</head>` в `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔗 Корисні посилання

- **GitHub Pages документація**: https://docs.github.com/en/pages
- **Material Icons**: https://fonts.google.com/icons
- **YouTube Embed**: https://support.google.com/youtube/answer/171780
- **Schedulify Privacy Policy**: https://crc83.github.io/schedulify-privacy/

## 📧 Контакти

Для питань щодо сайту:
- Email: sergiy.beley@gmail.com

## 📄 Ліцензія

© 2026 Schedulify. Всі права захищено.

---

**Розроблено з ❤️ для терапевтичних клінік**

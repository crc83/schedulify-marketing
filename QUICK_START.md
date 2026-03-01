# 🚀 Швидкий старт - Schedulify Landing Page

## Перегляд локально

Відкрийте термінал та виконайте:

```bash
cd ~/Personal/Projects/schedulify-marketing
python3 -m http.server 8000
```

Відкрийте в браузері: http://localhost:8000

## Публікація на GitHub Pages

### Швидкий спосіб (з допомогою скрипта):

```bash
cd ~/Personal/Projects/schedulify-marketing
./deploy.sh
```

Скрипт проведе вас через всі кроки.

### Ручний спосіб:

```bash
cd ~/Personal/Projects/schedulify-marketing

# 1. Перевірте статус
git status

# 2. Додайте файли
git add .

# 3. Створіть коміт
git commit -m "Add Ukrainian landing page"

# 4. Додайте remote (замініть USERNAME на ваш GitHub username)
git remote add origin https://github.com/USERNAME/schedulify-marketing.git

# 5. Відправте на GitHub
git branch -M main
git push -u origin main
```

### Увімкнення GitHub Pages:

1. Перейдіть на https://github.com/USERNAME/schedulify-marketing
2. Клікніть **Settings** → **Pages**
3. В **Source** оберіть:
   - Branch: `main`
   - Folder: `/ (root)`
4. Клікніть **Save**
5. Через 1-2 хвилини сайт буде доступний!

## Додавання YouTube відео

Коли відео буде готове:

1. Завантажте відео на YouTube
2. Скопіюйте ID відео (наприклад, з URL `youtube.com/watch?v=ABC123` → `ABC123`)
3. Відкрийте `index.html`
4. Знайдіть секцію `<!-- Video Section -->` (біля рядка 152)
5. Закоментуйте блок `video-placeholder`
6. Розкоментуйте блок `video-wrapper`
7. Замініть `VIDEO_ID` на ваш ID
8. Збережіть та опублікуйте:

```bash
git add index.html
git commit -m "Add YouTube video"
git push
```

## Швидке редагування

### Змінити контакти:

Відкрийте `index.html`, знайдіть секцію `<section id="contact">` (біля рядка 255).

### Змінити основний колір:

Відкрийте `styles.css`, змініть на початку файлу:

```css
--primary-color: #7092bf;  /* Ваш колір тут */
```

### Додати Google Analytics:

Відкрийте `index.html`, додайте перед `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Структура файлів

```
schedulify-marketing/
├── index.html          ← Головна сторінка (українською)
├── styles.css          ← Стилі з кольорами demo-org
├── script.js           ← JavaScript
├── README.md           ← Повна документація
├── QUICK_START.md      ← Цей файл
├── deploy.sh           ← Скрипт для деплою
└── images/             ← Логотипи та іконки
    ├── demo-logo192.png
    ├── demo-logo512.png
    └── favicon.ico
```

## Потрібна допомога?

Детальна документація: [README.md](README.md)

## Checklist

- [ ] Протестовано локально
- [ ] Опубліковано на GitHub
- [ ] GitHub Pages увімкнено
- [ ] Сайт доступний онлайн
- [ ] YouTube відео додано (якщо готове)
- [ ] Контакти оновлені
- [ ] Google Analytics додано (опціонально)

---

**Готово! 🎉 Ваша лендінг-сторінка онлайн!**

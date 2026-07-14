(() => {
  const header = document.getElementById('siteHeader');
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach((el) => observer.observe(el));
  }

  // ===== Catalog Data =====
  const catalogData = {
    1: {
      title: 'Моторні та технічні оливи',
      items: [
        { name: 'WOLVER 5W30', desc: 'Синтетична моторна олива. Обсяг: 1л / 4л / 5л', price: '420–1560 грн', img: 'assets/images/Знімок екрана 2026-07-14 213137.png' },
        { name: 'WOLVER 5W40', desc: 'Синтетична моторна олива. Обсяг: 1л / 4л', price: '410–1350 грн', img: 'assets/images/Знімок екрана 2026-07-14 213214.png' },
        { name: 'WOLVER 10W40', desc: 'Напівсинтетична моторна олива. Обсяг: 1л / 4л', price: '310–1110 грн', img: 'assets/images/Знімок екрана 2026-07-14 213441.png' },
        { name: 'SAE мега дизель 10W40', desc: 'YUKO / WOLVER. Для дизельних двигунів', price: '200 грн/л', img: 'assets/images/Знімок екрана 2026-07-14 213701.png' },
        { name: 'SAE мега дизель 15W40 розлив', desc: 'YUKO / WOLVER', price: '165–190 грн', img: 'assets/images/Знімок екрана 2026-07-14 213741.png' },
        { name: 'SAE 75W90', desc: 'YUKO / WOLVER. Трансмісійна олива', price: '310–360 грн', img: 'assets/images/Знімок екрана 2026-07-14 213847.png' },
        { name: 'YUKO ATF IID', desc: 'Рідина для автоматичних коробок передач. Обсяг: 1л', price: '300 грн', img: 'assets/images/Знімок екрана 2026-07-14 214016.png' },
        { name: 'Камазівська (М10Г2К)', desc: 'Моторна олива для вантажних автомобілів', price: '140 грн', img: 'assets/images/Знімок екрана 2026-07-14 214139.png' },
        { name: 'Турбодизель (М10/Дм)', desc: 'Моторна олива для турбодизельних двигунів', price: '145 грн', img: 'assets/images/Знімок екрана 2026-07-14 214831.png' },
        { name: 'Тепловозна/автомобільна (М14В2/М8В)', desc: 'Олива для тепловозів та автомобілів', price: '170 грн', img: 'assets/images/Знімок екрана 2026-07-14 220205.png' },
        { name: 'Холодильна (ХА 30)', desc: 'Компресорна олива для холодильних установок', price: '185 грн', img: 'assets/images/Знімок екрана 2026-07-14 220731.png' },
        { name: 'Турбіне (ТП 22с / ТП 30 / ТП 46)', desc: 'Олива для парових та газових турбін', price: '180–200 грн', img: 'assets/images/Знімок екрана 2026-07-14 220831.png' },
        { name: 'Компресорне (КС19)', desc: 'Олива для компресорів', price: '200 грн', img: 'assets/images/Знімок екрана 2026-07-14 225406.png' },
        { name: 'Трансмісійне (ТАДІ7, Тан-15)', desc: 'Трансмісійна олива', price: '210–200 грн', img: 'assets/images/Знімок екрана 2026-07-14 221308.png' },
        { name: 'Нігрол', desc: 'Трансмісійна олива. Обсяг: 4л / 20л', price: '115–2360 грн', img: 'assets/images/Знімок екрана 2026-07-14 221449.png' },
        { name: 'Індустріальне (Yuko I-20 / I-40)', desc: 'Індустріальна олива для верстатів і обладнання', price: '140–145 грн', img: 'assets/images/Знімок екрана 2026-07-14 221559.png' },
        { name: 'Гідравлічне (МГЕ-46 / HYDROL 32/46)', desc: 'Гідравлічна олива', price: '150–220 грн', img: 'assets/images/Знімок екрана 2026-07-14 221858.png' },
        { name: 'YUKO 2T / MOL 2T', desc: 'Олива для двотактних двигунів. Обсяг: 1л', price: '200 грн', img: 'assets/images/Знімок екрана 2026-07-14 222026.png' },
        { name: 'Вазелінове', desc: 'Технічне вазелінове мастило. Обсяг: 200 л.б.', price: 'Договірна', img: 'assets/images/Знімок екрана 2026-07-14 222315.png' },
        { name: 'Масила (Циатим 201-221)', desc: 'Пластичне мастило. 6100гр / Графіт. 1950гр 1:3', price: 'За запитом', img: 'assets/images/Знімок екрана 2026-07-14 222415.png' },
        { name: 'Нефрас', desc: 'Нафтовий розчинник', price: '100 грн', img: 'assets/images/Знімок екрана 2026-07-14 222611.png' },
        { name: 'Гас (kerosyn)', desc: 'Гас технічний', price: '110 грн', img: 'assets/images/Знімок екрана 2026-07-14 222723.png' },
        { name: 'Емульсол MOL Makromil 300', desc: 'Мастильно-охолоджуюча рідина', price: '320 грн', img: 'assets/images/Знімок екрана 2026-07-14 223013.png' },
        { name: 'Total 5W30 — 9000 NFC 5L', desc: 'Синтетична моторна олива Total', price: '1800 грн', img: 'assets/images/Знімок екрана 2026-07-14 222137.png' },
        { name: 'Total 5W30 — INEO LONG LIFE 5L', desc: 'Синтетична моторна олива Total', price: '1850 грн', img: 'assets/images/Знімок екрана 2026-07-14 223151.png' },
        { name: 'Total 5W40 — 9000 Energy 5L', desc: 'Синтетична моторна олива Total', price: '1500 грн', img: 'assets/images/Знімок екрана 2026-07-14 223801.png' },
        { name: 'Mol 5W40 Dynamic 4L', desc: 'Синтетична моторна олива MOL', price: '1400 грн', img: 'assets/images/Знімок екрана 2026-07-14 223930.png' },
        { name: 'Mol 5W30 Gold 4L', desc: 'Синтетична моторна олива MOL', price: '1500 грн', img: 'assets/images/Знімок екрана 2026-07-14 224046.png' },
        { name: 'SHELL 5W30 — 1L', desc: 'Моторна олива Shell', price: '400 грн', img: 'assets/images/Знімок екрана 2026-07-14 224143.png' },
        { name: 'SHELL 5W40 — 1L', desc: 'Моторна олива Shell', price: '380 грн', img: 'assets/images/Знімок екрана 2026-07-14 224234.png' },
        { name: 'SHELL 10W40 — 1L', desc: 'Моторна олива Shell', price: '350 грн', img: 'assets/images/Знімок екрана 2026-07-14 224413.png' },
        { name: 'Арал 10W40 Mega Turbo LA 208л', desc: 'Моторна олива для вантажних автомобілів. Бочка 208л', price: '47000 грн', img: 'assets/images/Знімок екрана 2026-07-14 224511.png' },
      ]
    },
    2: {
      title: 'Мастила, антифризи та спецрідини',
      items: [
        { name: 'Солідол', desc: 'Пластичне мастило. Фасовка: 0.4кг / 4.5кг / 17кг', price: '170–3700 грн', img: '' },
        { name: 'Літол', desc: 'Пластичне мастило. Фасовка: 9кг / 4.5кг / 17кг', price: '2600–4800 грн', img: '' },
        { name: 'Омивач Yuko', desc: 'Омивач лобового скла. Обсяг: 2L', price: '160 грн', img: '' },
        { name: 'AdBlue', desc: 'Рідина для SCR-систем дизельних авто. Обсяг: 1L', price: '22 грн', img: '' },
        { name: 'Антифриз YUKO -42', desc: 'Червоний (G12). Обсяг: 5л / 10л / ун. 5л — 700 грн', price: '200–1400 грн', img: '' },
        { name: 'Антифриз конц. WOLVER 5л', desc: 'Синій (G11) / Червоний (G12+). Концентрат', price: '1200–1400 грн', img: '' },
        { name: 'Гальмівна рідина YUKO дот 4', desc: 'Гальмівна рідина DOT 4. Обсяг: 0.6л', price: '205 грн', img: '' },
        { name: 'Мастило силіконове Аерозоль 400мл', desc: 'Силіконове мастило в аерозолі', price: '250 грн', img: '' },
        { name: 'Масла для харчової промисловості', desc: 'Імпортні під замовлення', price: 'За запитом', img: '' },
        { name: 'Масла для виробництва і транспорту', desc: 'Будь-які масла та смазки для різних типів техніки', price: 'За запитом', img: '' },
        { name: 'Оліви Арал / Shell / Titan / Castrol / BMW / Bardahl / Elf / Ford / Febi / GM / Honda / Kia', desc: 'Імпортні оливи провідних брендів', price: 'За запитом', img: '' },
        { name: 'Оліви Hundai / Kia / Ligui Moly / Mapetrol / Mazda / Mercedes / Mobil / Motul / Nissan / Orien', desc: 'Імпортні оливи провідних брендів', price: 'За запитом', img: '' },
        { name: 'WAG WD-40 ZIG', desc: 'Заправка автокондиціонерів авто і с/г техніки', price: 'За запитом', img: '' },
        { name: 'Підбір масел і мастил', desc: 'Під транспорт і обладнання — безкоштовна консультація', price: 'За запитом', img: '' },
      ]
    },
    3: {
      title: 'Автохімія, розчинники та послуги СТО',
      items: [
        { name: 'Спирти технічні', desc: 'Бутанол / Гліцерин / Бутилгліколь / Етанол / ДЕА', price: 'За запитом', img: '' },
        { name: 'Розчинники в асортименті', desc: 'Імпортні наливом і фасовці', price: 'За запитом', img: '' },
        { name: 'Автошини', desc: 'Легкових ТЗ і вантажного та с/г транспорту', price: 'За запитом', img: '' },
        { name: 'Спирти хімія в асортименті', desc: 'Кислоти / Ефіри / Лаки / Емалі / Добавки харчові', price: 'За запитом', img: '' },
        { name: 'Сипуча хімія та добрива', desc: 'В асортименті', price: 'За запитом', img: '' },
        { name: 'Розчинники різні та припої', desc: 'В асортименті', price: 'За запитом', img: '' },
        { name: 'Метали, сплави і припої', desc: 'В асортименті', price: 'За запитом', img: '' },
        { name: 'Промислова хімія', desc: 'В асортименті імпортна', price: 'За запитом', img: '' },
        { name: 'СТО — Шиномонтаж та заміна масел', desc: 'Шиномонтаж, ремонт ходової, заправка кондиціонера', price: 'За запитом', img: '' },
        { name: 'Комп\'ютерна діагностика', desc: 'Діагностика легкових, вантажних авт. та с/г техніки', price: 'За запитом', img: '' },
        { name: 'Обслуговування рефрижераторів', desc: 'Легкові і вантажні авт. / с/г техніка та рефрижератор', price: 'За запитом', img: '' },
        { name: 'Прийом відпрацьованого масла', desc: 'Забирають відпрацьоване масло', price: 'Безкоштовно', img: '' },
      ]
    }
  };

  // ===== Catalog Sidebar =====
  const sidebar = document.getElementById('catalogSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const sidebarList = document.getElementById('sidebarList');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarOrderBtn = document.getElementById('sidebarOrderBtn');

  let currentCategoryId = null;

  const openSidebar = (categoryId) => {
    const data = catalogData[categoryId];
    if (!data) return;
    currentCategoryId = categoryId;

    sidebarTitle.textContent = data.title;
    sidebarList.innerHTML = '';
    data.items.forEach((item, idx) => {
      const li = document.createElement('li');
      li.textContent = item.name;
      li.style.cursor = 'pointer';
      li.setAttribute('role', 'button');
      li.setAttribute('tabindex', '0');
      li.addEventListener('click', () => openProductModal(categoryId, idx));
      li.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') openProductModal(categoryId, idx); });
      sidebarList.appendChild(li);
    });

    sidebar.classList.add('open');
    overlay.classList.add('open');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    sidebarClose.focus();
  };

  const closeSidebar = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.catalog-open-btn').forEach((btn) => {
    btn.addEventListener('click', () => openSidebar(parseInt(btn.dataset.category, 10)));
  });

  sidebarClose.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  sidebarOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeSidebar();
    setTimeout(() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' }), 350);
  });

  // ===== Product Modal =====
  const productModal = document.getElementById('productModal');
  const productModalOverlay = document.getElementById('productModalOverlay');
  const productModalClose = document.getElementById('productModalClose');
  const productModalTitle = document.getElementById('productModalTitle');
  const productModalDesc = document.getElementById('productModalDesc');
  const productModalPrice = document.getElementById('productModalPrice');
  const productModalCategory = document.getElementById('productModalCategory');
  const productModalImg = document.getElementById('productModalImg');
  const productModalPlaceholder = document.getElementById('productModalPlaceholder');
  const productModalOrder = document.getElementById('productModalOrder');

  const openProductModal = (categoryId, itemIdx) => {
    const cat = catalogData[categoryId];
    if (!cat) return;
    const item = cat.items[itemIdx];
    if (!item) return;

    productModalCategory.textContent = cat.title;
    productModalTitle.textContent = item.name;
    productModalDesc.textContent = item.desc;
    productModalPrice.textContent = item.price;

    if (item.img) {
      productModalImg.src = item.img;
      productModalImg.alt = item.name;
      productModalImg.style.display = 'block';
      productModalPlaceholder.style.display = 'none';
    } else {
      productModalImg.style.display = 'none';
      productModalPlaceholder.style.display = 'flex';
    }

    productModal.classList.add('open');
    productModalOverlay.classList.add('open');
    productModalOverlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    productModalClose.focus();
  };

  const closeProductModal = () => {
    productModal.classList.remove('open');
    productModalOverlay.classList.remove('open');
    productModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  };

  productModalClose.addEventListener('click', closeProductModal);
  productModalOverlay.addEventListener('click', closeProductModal);

  productModalOrder.addEventListener('click', () => {
    closeProductModal();
    closeSidebar();
    // Pre-fill category in the form if possible
    const catSelect = document.getElementById('f-category');
    if (catSelect && currentCategoryId) {
      const cat = catalogData[currentCategoryId];
      if (cat) catSelect.value = cat.title;
    }
    setTimeout(() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' }), 350);
  });

  // ===== Fullscreen Image View =====
  const fullscreenImgOverlay = document.getElementById('fullscreenImgOverlay');
  const fullscreenImg = document.getElementById('fullscreenImg');
  const fullscreenImgClose = document.getElementById('fullscreenImgClose');

  const openFullscreenImage = () => {
    if (!productModalImg.src || productModalImg.style.display === 'none') return;
    fullscreenImg.src = productModalImg.src;
    fullscreenImg.alt = productModalImg.alt;
    fullscreenImgOverlay.classList.add('open');
    fullscreenImgOverlay.removeAttribute('aria-hidden');
  };

  const closeFullscreenImage = () => {
    fullscreenImgOverlay.classList.remove('open');
    fullscreenImgOverlay.setAttribute('aria-hidden', 'true');
    setTimeout(() => { fullscreenImg.src = ''; }, 300);
  };

  productModalImg.addEventListener('click', openFullscreenImage);
  fullscreenImgClose.addEventListener('click', closeFullscreenImage);
  fullscreenImgOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenImgOverlay) closeFullscreenImage();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (fullscreenImgOverlay && fullscreenImgOverlay.classList.contains('open')) {
        closeFullscreenImage();
      } else if (productModal && productModal.classList.contains('open')) {
        closeProductModal();
      } else if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    }
  });

  // ===== Order Form -> Telegram =====
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const submitBtn = document.getElementById('submitOrderBtn');
  const statusEl = document.getElementById('bookingStatus');
  const cfg = window.SITE_CONFIG || {};

  const setFieldError = (field, message) => {
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    const errorEl = field.parentElement.querySelector('.field-error');
    if (errorEl) errorEl.textContent = message || '';
  };

  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => setFieldError(field, ''));
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const category = form.category.value.trim();
    const product = form.product.value.trim();

    let firstInvalid = null;

    if (!name) {
      setFieldError(form.name, "Вкажіть, будь ласка, ваше ім'я");
      firstInvalid = firstInvalid || form.name;
    }
    if (!phone) {
      setFieldError(form.phone, 'Вкажіть номер телефону');
      firstInvalid = firstInvalid || form.phone;
    } else if (!/^[+0-9][0-9\s()-]{6,}$/.test(phone)) {
      setFieldError(form.phone, 'Перевірте формат номера');
      firstInvalid = firstInvalid || form.phone;
    }

    if (firstInvalid) { firstInvalid.focus(); return; }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Надсилаємо…';
    statusEl.textContent = '';
    statusEl.className = 'booking-status';

    const text = [
      '🛢 Нова заявка з сайту ПМП «Відар»',
      '',
      `Ім'я: ${name}`,
      `Телефон: ${phone}`,
      `Категорія: ${category || '—'}`,
      `Товар: ${product || '—'}`
    ].join('\n');

    try {
      if (!cfg.telegramBotToken || cfg.telegramBotToken.includes('PASTE_')) throw new Error('not-configured');

      const response = await fetch(`https://api.telegram.org/bot${cfg.telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: cfg.telegramChatId, text })
      });

      if (!response.ok) throw new Error('bad-response');

      form.reset();
      statusEl.textContent = "Дякуємо! Ми зв'яжемося з вами найближчим часом.";
      statusEl.className = 'booking-status success';
    } catch (err) {
      statusEl.innerHTML = `Не вдалося надіслати заявку. Зателефонуйте нам: <a href="tel:${cfg.phone}">${cfg.phoneDisplay}</a>`;
      statusEl.className = 'booking-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Надіслати заявку';
    }
  });
})();
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

  // ===== Gallery slider =====
  const track = document.getElementById('galleryTrack');
  if (track) {
    const dotsWrap = document.getElementById('galleryDots');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    const slides = Array.from(track.children);

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Слайд ${i + 1}`);
      dot.addEventListener('click', () => slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' }));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    const updateActive = () => {
      const trackRect = track.getBoundingClientRect();
      let closestIndex = 0;
      let closestDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.getBoundingClientRect().left - trackRect.left);
        if (dist < closestDist) { closestDist = dist; closestIndex = i; }
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === closestIndex));
    };
    updateActive();
    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateActive);
    }, { passive: true });

    const scrollByStep = (dir) => {
      const step = slides[0].getBoundingClientRect().width + 18;
      track.scrollBy({ left: step * dir, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByStep(-1));
    nextBtn.addEventListener('click', () => scrollByStep(1));
  }

  // ===== Catalog Sidebar =====
  const catalogData = {
    1: {
      title: 'Моторні та технічні оливи',
      items: [
        'WOLVER 5W30 — 1л / 4л / 5л',
        'WOLVER 5W40 — 1л / 4л',
        'WOLVER 10W40 — 1л / 4л',
        'SAE мега дизель 10W40 (YUKO / WOLVER)',
        'SAE мега дизель 15W40 розлив (YUKO / WOLVER)',
        'SAE 75W90 (YUKO / WOLVER)',
        'YUKO ATF IID — 1л',
        'Камазівська (М10Г2К)',
        'Турбодизель (М10/Дм)',
        'Тепловозна/автомобільна (М14В2/М8В)',
        'Холодильна (ХА 30)',
        'Турбіне (ТП 22с / ТП 30 / ТП 46)',
        'Компресорне (КС19)',
        'Трансмісійне (ТАДІ7, Тан-15)',
        'Нігрол',
        'Індустріальне (Yuko I-20 / I-40)',
        'Гідравлічне (МГЕ-46 / HYDROL 32/46)',
        'YUKO 2T / MOL 2T — 1л',
        'Вазелінове — 200 л.б.',
        'Масила (Циатим 201-221 6100гр / Графіт. 1950гр 1:3)',
        'Нефрас',
        'Гас (kerosyn)',
        'Емульсол MOL Makromil 300',
        'Total 5W30 — 9000 NFC 5L',
        'Total 5W30 — INEO LONG LIFE 5L',
        'Total 5W40 — 9000 Energy 5L',
        'Mol 5W40 Dynamic — 4L',
        'Mol 5W30 Gold — 4L',
        'SHELL 5W30 — 1L',
        'SHELL 5W40 — 1L',
        'SHELL 10W40 — 1L',
        'Арал 10W40 для вант. авт. Mega Turbo LA 208л',
      ]
    },
    2: {
      title: 'Мастила, антифризи та спецрідини',
      items: [
        'Солідол — 0.4кг / 4.5кг / 17кг',
        'Літол — 9кг / 4.5кг / 17кг',
        'Омивач Yuko — 2L',
        'AdBlue — 1L',
        'Антифриз YUKO -42 (5л / 10л / ун.) Червоний (G12)',
        'Антифриз конц. WOLVER 5л — Синій (G11) / Червоний (G12+)',
        'Гальмівна рідина YUKO дот 4 (0.6л)',
        'Мастило силіконове Аерозоль 400мл',
        'Масла та смазки для харчової промисловості (імп. під замовлення)',
        'Масла та смазки для виробництва і транспорту',
        'Оліви Арал / Shell / Titan / Castrol / BMW / Bardahl / Elf / Ford / Febi / GM / Honda / Kia',
        'Оліви Hundai / Kia / Ligui Moly / Mapetrol / Mazda / Mercedes / Mobil / Motul / Nissan / Orien',
        'WAG WD-40 ZIG — заправка автокондиціонерів авто і с/г техніки',
        'Підбір масел і мастил під транспорт/обладнання',
        'Будь-які масла та смазки для різних типів техніки',
      ]
    },
    3: {
      title: 'Автохімія, розчинники та послуги СТО',
      items: [
        'Спирти технічні — Бутанол / Гліцерин / Бутилгліколь / Етанол / ДЕА',
        'Розчинники в асортименті (імп. наливом і фасовці)',
        'Автошини легкових транспортних засобів і вантажного та с/г транспорту',
        'Спирти хімія в асортименті — Кислоти / Ефіри / Лаки / Емалі / Добавки харчові',
        'Сипуча хімія та добрива',
        'Розчинники різні та припої',
        'Метали, сплави і припої',
        'Промислова хімія в асортименті (імпортна)',
        'СТО ПМП «Відар» — шиномонтаж, заміна масел/ремонт ходової/замена авто авт/с/г техніці',
        'Комп\'ютерна діагностика транспорту',
        'Легкові і вантажні авт. / с/г техніка та рефрижератор',
        'Забирають відпрацьоване масло',
      ]
    }
  };

  const sidebar = document.getElementById('catalogSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const sidebarTitle = document.getElementById('sidebarTitle');
  const sidebarList = document.getElementById('sidebarList');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarOrderBtn = document.getElementById('sidebarOrderBtn');

  const openSidebar = (categoryId) => {
    const data = catalogData[categoryId];
    if (!data) return;

    sidebarTitle.textContent = data.title;
    sidebarList.innerHTML = '';
    data.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
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
    btn.addEventListener('click', () => {
      const cat = parseInt(btn.dataset.category, 10);
      openSidebar(cat);
    });
  });

  sidebarClose.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Кнопка "Замовити товар" в сайдбарі — закриває панель і скролить до форми
  sidebarOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeSidebar();
    setTimeout(() => {
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    }, 350);
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

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

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
      if (!cfg.telegramBotToken || cfg.telegramBotToken.includes('PASTE_')) {
        throw new Error('not-configured');
      }

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
      statusEl.innerHTML = `Не вдалося надіслати заявку. Зателефонуйте нам напряму: <a href="tel:${cfg.phone}">${cfg.phoneDisplay}</a>`;
      statusEl.className = 'booking-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Надіслати заявку';
    }
  });
})();
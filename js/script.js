/* ============================================
   SKYLINE - Door Opening Animation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const doorOverlay = document.getElementById('doorOverlay');
    const authOverlay = document.getElementById('authOverlay');
    const openAuthButton = document.getElementById('openAuthButton');
    const authHomeButton = document.getElementById('authHomeButton');
    const closeAuthButton = document.getElementById('closeAuthButton');
    const authSwitch = document.getElementById('authSwitch');
    const authForm = document.getElementById('authForm');
    const authTitle = document.getElementById('authTitle');
    const authIntro = document.getElementById('authIntro');
    const authSubmit = document.getElementById('authSubmit');
    const authSwitchPrompt = document.getElementById('authSwitchPrompt');
    const authStatus = document.getElementById('authStatus');
    const demoLoginButton = document.getElementById('demoLoginButton');
    const authPanel = document.querySelector('.auth-panel');
    const authNotice = document.getElementById('authNotice');
    const authNoticeClose = document.getElementById('authNoticeClose');
    const authNoticeContinue = document.getElementById('authNoticeContinue');
    const nameFields = document.querySelectorAll('.name-field');
    const passwordToggle = document.querySelector('.password-toggle');
    const passwordInput = authForm?.querySelector('input[name="password"]');
    const emailInput = authForm?.querySelector('input[name="email"]');
    const contactOverlay = document.getElementById('contactOverlay');
    const faqOverlay = document.getElementById('faqOverlay');
    const propertyOverlay = document.getElementById('propertyOverlay');
    const openContactButton = document.getElementById('openContactButton');
    const openFaqButton = document.getElementById('openFaqButton');
    const openPropertyButton = document.getElementById('openPropertyButton');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavLinks = document.getElementById('mobileNavLinks');
    const mobileSignupButton = document.getElementById('mobileSignupButton');
    const pageMobileMenu = document.getElementById('pageMobileMenu');
    const pageMobileMenuClose = pageMobileMenu?.querySelector('[data-page-menu-close]');
    const navbar = document.querySelector('.navbar');
    const consultationModal = document.getElementById('consultationModal');
    const consultationForm = document.getElementById('consultationForm');
    const consultationStatus = document.getElementById('consultationStatus');
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');
    const contactQuote = document.querySelector('.contact-quote');
    const contactPhotos = [...document.querySelectorAll('.contact-photo')];
    const faqCategoryImage = document.getElementById('faqCategoryImage');
    const faqQuestionList = document.getElementById('faqQuestionList');
    const ownershipCenter = document.querySelector('.ownership-node-two');
    let authMode = 'signup';
    let contactPhotoIndex = 0;
    const demoCredentials = {
        email: 'rahul@gmail.comm',
        password: 'rahul65-0%10'
    };

    const closeMobileMenu = () => {
        navbar?.classList.remove('mobile-nav-open');
        mobileMenuToggle?.setAttribute('aria-expanded', 'false');
        mobileMenuToggle?.setAttribute('aria-label', 'Open navigation');
    };

    mobileMenuToggle?.addEventListener('click', () => {
        const isOpen = navbar?.classList.toggle('mobile-nav-open') || false;
        mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
        mobileMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    mobileNavLinks?.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    const touchInteractiveTargets = [...document.querySelectorAll(
        '.hero-bg, .parallax-layer, .woman-figure, .auth-visual, .contact-photo-stack, .contact-photo-panel, .about-hero-image, .about-philosophy-image, .about-advisory-image, .faq-side-image, .faq-cta, .property-hero-image, .portfolio-card, .type-card, .proof-visual'
    )];
    if (window.matchMedia('(hover: none)').matches) {
        touchInteractiveTargets.forEach((target) => {
            target.addEventListener('touchstart', () => {
                touchInteractiveTargets.forEach((item) => item.classList.remove('is-touch-active'));
                target.classList.add('is-touch-active');
            }, { passive: true });
        });
        document.addEventListener('touchstart', (event) => {
            if (!event.target.closest('.hero-bg, .parallax-layer, .woman-figure, .auth-visual, .contact-photo-stack, .contact-photo-panel, .about-hero-image, .about-philosophy-image, .about-advisory-image, .faq-side-image, .faq-cta, .property-hero-image, .portfolio-card, .type-card, .proof-visual')) {
                touchInteractiveTargets.forEach((item) => item.classList.remove('is-touch-active'));
            }
        }, { passive: true });
    }

    if (contactPhotos.length > 1) {
        contactPhotos.forEach((photo) => {
            photo.loading = 'eager';
            photo.decode?.().catch(() => {});
        });
        window.setInterval(() => {
            contactPhotos[contactPhotoIndex].classList.remove('is-active');
            contactPhotoIndex = (contactPhotoIndex + 1) % contactPhotos.length;
            contactPhotos[contactPhotoIndex].classList.add('is-active');
        }, 7800);
    }

    const contactQuotes = [
        'Let the view\nfind you.',
        'Live where\nlight arrives.',
        'Make room\nfor wonder.',
        'Your next\nhorizon awaits.'
    ];
    let contactQuoteIndex = 0;

    if (contactQuote) {
        const typeContactQuote = () => {
            const phrase = contactQuotes[contactQuoteIndex];
            let cursor = 0;

            const typeNextLetter = () => {
                contactQuote.textContent = phrase.slice(0, cursor);
                if (cursor < phrase.length) {
                    cursor += 1;
                    window.setTimeout(typeNextLetter, 62);
                } else {
                    window.setTimeout(deleteNextLetter, 2200);
                }
            };

            const deleteNextLetter = () => {
                if (cursor > 0) {
                    cursor -= 1;
                    contactQuote.textContent = phrase.slice(0, cursor);
                    window.setTimeout(deleteNextLetter, 34);
                } else {
                    contactQuoteIndex = (contactQuoteIndex + 1) % contactQuotes.length;
                    window.setTimeout(typeContactQuote, 260);
                }
            };

            typeNextLetter();
        };

        typeContactQuote();
    }

    const faqCategories = {
        buying: {
            image: 'images/faq-buying.png',
            alt: 'Sunlit coastal residence interior with ocean views',
            questions: [
                ['How is every property verified?', 'Every residence is reviewed for title, build quality, access, and the details that make a home feel right in person.'],
                ['Can international buyers purchase remotely?', 'Yes. We arrange secure virtual tours, local representation, and a clear digital review process before you travel.'],
                ['What documents are needed to reserve a property?', 'Your advisor prepares a clear reservation checklist and explains each document before anything is signed.'],
                ['How do I make an offer?', 'Once you choose a residence, your advisor prepares the offer and guides you through each next step.']
            ]
        },
        viewings: {
            image: 'images/faq-viewing.png',
            alt: 'Private viewing inside a modern residence',
            questions: [
                ['How do I book a private viewing?', 'Share your preferred dates through Contact Us and your advisor will build a private viewing route around your shortlist.'],
                ['Can I view several residences in one day?', 'Yes. We group nearby residences into a considered route so each viewing feels calm and unhurried.'],
                ['Are virtual tours available?', 'A private digital tour can be arranged before you travel, with live guidance from a local property advisor.'],
                ['What should I prepare before visiting?', 'Bring your priorities, questions, and preferred timing. We handle the itinerary and local access details.']
            ]
        },
        logistics: {
            image: 'images/faq-logistics.png',
            alt: 'Modern courtyard residence for title and logistics guidance',
            questions: [
                ['What is the typical closing timeline?', 'Timing varies by market, but your advisor maps every milestone from offer to handover before you commit.'],
                ['Who manages title and legal review?', 'Local specialists review the title and explain the legal path in plain language before closing.'],
                ['Are furnishing and handover services included?', 'Available handover, furnishing, and move-in services are detailed in your private property dossier.'],
                ['How is the property transferred?', 'Your advisor coordinates the required local steps and keeps you updated through the final transfer.']
            ]
        },
        investment: {
            image: 'images/faq-investment.png',
            alt: 'Investment residence with city skyline view',
            questions: [
                ['What rental yield can I expect?', 'Your advisor shares current local benchmarks and the assumptions behind each investment scenario.'],
                ['Which areas are best for long-term growth?', 'We compare access, planned infrastructure, demand, and resale conditions for each location.'],
                ['Can your team manage the residence?', 'Management and leasing partners can be introduced when the residence and market support it.'],
                ['What costs should I plan for?', 'We outline acquisition, service, maintenance, management, and resale costs before you decide.']
            ]
        }
    };

    const renderFaqCategory = (categoryKey) => {
        const category = faqCategories[categoryKey];
        if (!category || !faqQuestionList) return;
        if (faqCategoryImage) {
            faqCategoryImage.src = category.image;
            faqCategoryImage.alt = category.alt;
        }
        const fragment = document.createDocumentFragment();
        category.questions.forEach(([question, answer], index) => {
            const item = document.createElement('article');
            item.className = `faq-item${index === 0 ? ' is-open' : ''}`;

            const questionButton = document.createElement('button');
            questionButton.className = 'faq-question';
            questionButton.type = 'button';
            questionButton.setAttribute('aria-expanded', String(index === 0));
            questionButton.append(document.createTextNode(question));

            const icon = document.createElement('span');
            icon.textContent = index === 0 ? '−' : '+';
            questionButton.append(icon);

            const answerWrap = document.createElement('div');
            answerWrap.className = 'faq-answer';
            const answerText = document.createElement('p');
            answerText.textContent = answer;
            answerWrap.append(answerText);

            item.append(questionButton, answerWrap);
            fragment.append(item);
        });
        faqQuestionList.replaceChildren(fragment);
    };

    // Match the reference pacing: hold on the closed doors, then swing them
    // outward with a small forward zoom before revealing the finished hero.
    setTimeout(() => {
        doorOverlay.classList.add('opened');
    }, 750);

    // Let the doors finish their swing before removing the overlay.
    const doorHideAt = 2350;
    const doorRemoveAt = 3000;

    setTimeout(() => {
        doorOverlay.classList.add('hiding');
    }, doorHideAt);

    setTimeout(() => {
        doorOverlay.style.display = 'none';
    }, doorRemoveAt);

    let authModeTimer;
    const renderAuthMode = (animate = false) => {
        const updateAuthMode = () => {
            const isLogin = authMode === 'login';
            authTitle.textContent = isLogin ? 'Log In' : 'Sign Up';
            authIntro.textContent = isLogin
                ? 'Use the demo account or enter your own details to continue.'
                : 'Create your private access to curated residences.';
            demoLoginButton.hidden = !isLogin;
            authSubmit.textContent = isLogin ? 'Log In' : 'Create Account';
            authSwitchPrompt.textContent = isLogin ? 'Need an account?' : 'Have an account?';
            authSwitch.textContent = isLogin ? 'Sign Up' : 'Log In';
            nameFields.forEach((field) => {
                field.hidden = isLogin;
            });
            if (isLogin) {
                emailInput.value = demoCredentials.email;
                passwordInput.value = demoCredentials.password;
            }
            authStatus.textContent = '';
        };

        window.clearTimeout(authModeTimer);
        if (!animate) {
            updateAuthMode();
            return;
        }

        authPanel?.classList.add('mode-switching');
        authModeTimer = window.setTimeout(() => {
            updateAuthMode();
            requestAnimationFrame(() => authPanel?.classList.remove('mode-switching'));
        }, 180);
    };

    const setAuthOpen = (isOpen) => {
        authOverlay.classList.toggle('is-open', isOpen);
        authOverlay.setAttribute('aria-hidden', String(!isOpen));
        document.body.classList.toggle('auth-is-open', isOpen);
        if (!isOpen) setAuthNoticeOpen(false);
        if (isOpen) {
            renderAuthMode();
            setTimeout(() => authOverlay.querySelector('input:not([type="checkbox"])')?.focus(), 350);
        }
    };

    const setAuthNoticeOpen = (isOpen) => {
        authNotice?.classList.toggle('is-open', isOpen);
        authNotice?.setAttribute('aria-hidden', String(!isOpen));
        if (isOpen) setTimeout(() => authNoticeClose?.focus(), 180);
    };

    openAuthButton?.addEventListener('click', () => {
        closeMobileMenu();
        setAuthOpen(true);
    });
    mobileSignupButton?.addEventListener('click', () => {
        closeMobileMenu();
        setAuthOpen(true);
    });

    const setPageMobileMenuOpen = (isOpen) => {
        pageMobileMenu?.classList.toggle('is-open', isOpen);
        pageMobileMenu?.setAttribute('aria-hidden', String(!isOpen));
        document.querySelectorAll('[data-page-menu-toggle]').forEach((button) => {
            button.setAttribute('aria-expanded', String(isOpen));
            button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
            button.classList.toggle('is-open', isOpen);
        });
    };

    document.querySelectorAll('[data-page-menu-toggle]').forEach((button) => {
        button.addEventListener('click', () => setPageMobileMenuOpen(true));
    });
    pageMobileMenuClose?.addEventListener('click', () => setPageMobileMenuOpen(false));
    pageMobileMenu?.addEventListener('click', (event) => {
        if (event.target === pageMobileMenu) setPageMobileMenuOpen(false);
    });
    pageMobileMenu?.querySelectorAll('[data-page-target]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = link.dataset.pageTarget;
            setPageMobileMenuOpen(false);
            if (target === 'home') setSiteOpen(null, false);
            if (target === 'property') openPropertyButton?.click();
            if (target === 'contact') openContactButton?.click();
            if (target === 'faq') openFaqButton?.click();
            if (target === 'signup') openAuthButton?.click();
        });
    });
    authHomeButton?.addEventListener('click', () => setAuthOpen(false));
    closeAuthButton?.addEventListener('click', () => setAuthOpen(false));
    authOverlay?.addEventListener('click', (event) => {
        if (event.target === authOverlay) setAuthOpen(false);
    });
    authSwitch?.addEventListener('click', () => {
        authMode = authMode === 'signup' ? 'login' : 'signup';
        renderAuthMode(true);
    });
    demoLoginButton?.addEventListener('click', () => {
        authMode = 'login';
        emailInput.value = demoCredentials.email;
        passwordInput.value = demoCredentials.password;
        authStatus.textContent = 'Demo details filled. Click Log In to continue.';
        emailInput.focus();
    });
    passwordToggle?.addEventListener('click', () => {
        const showing = passwordInput.type === 'text';
        passwordInput.type = showing ? 'password' : 'text';
        passwordToggle.textContent = showing ? 'Show' : 'Hide';
    });
    authForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(authForm);
        if (authMode === 'login') {
            const email = String(formData.get('email') || '').trim();
            const password = String(formData.get('password') || '');
            const isValidDemoLogin = email === demoCredentials.email && password === demoCredentials.password;
            authStatus.textContent = isValidDemoLogin
                ? 'Demo login successful — welcome to your private collection.'
                : 'Use the demo email and password shown above.';
            if (isValidDemoLogin) {
                window.setTimeout(() => {
                    authMode = 'signup';
                    setAuthOpen(false);
                }, 850);
            }
            return;
        }
        authForm.reset();
        authStatus.textContent = '';
        setAuthNoticeOpen(true);
    });
    authNoticeClose?.addEventListener('click', () => setAuthNoticeOpen(false));
    authNoticeContinue?.addEventListener('click', () => setAuthNoticeOpen(false));
    authNotice?.addEventListener('click', (event) => {
        if (event.target === authNotice) setAuthNoticeOpen(false);
    });

    const siteOverlays = [contactOverlay, faqOverlay, propertyOverlay].filter(Boolean);
    const setSiteOpen = (overlay, isOpen) => {
        siteOverlays.forEach((item) => {
            const shouldOpen = isOpen && item === overlay;
            item.classList.toggle('is-open', shouldOpen);
            item.setAttribute('aria-hidden', String(!shouldOpen));
        });
        document.body.classList.toggle('site-is-open', isOpen);
        if (isOpen && overlay) {
            // Re-trigger the staged entrance each time the user returns to a page.
            overlay.querySelectorAll('.faq-item, .faq-side-tabs button, .contact-form label, .contact-photo-copy').forEach((item) => {
                item.classList.remove('replay');
                void item.offsetWidth;
                item.classList.add('replay');
            });
        }
    };

    openContactButton?.addEventListener('click', (event) => {
        event.preventDefault();
        closeMobileMenu();
        setSiteOpen(contactOverlay, true);
    });
    openFaqButton?.addEventListener('click', (event) => {
        event.preventDefault();
        closeMobileMenu();
        setSiteOpen(faqOverlay, true);
    });
    openPropertyButton?.addEventListener('click', (event) => {
        event.preventDefault();
        closeMobileMenu();
        setSiteOpen(propertyOverlay, true);
        const propertyScroll = propertyOverlay?.querySelector('.property-scroll');
        /* Restart hero zoom-out animation on every open */
        const heroImg = propertyOverlay?.querySelector(".property-hero-image img");
        if (heroImg) { heroImg.style.animation = "none"; heroImg.offsetHeight; heroImg.style.animation = ""; }
        if (propertyScroll) propertyScroll.scrollTop = 0;
    });
    document.querySelectorAll('[data-close-site]').forEach((button) => {
        button.addEventListener('click', () => {
            setConsultationOpen(false);
            setSiteOpen(null, false);
        });
    });
    document.querySelectorAll('[data-open-contact]').forEach((button) => {
        button.addEventListener('click', () => setSiteOpen(contactOverlay, true));
    });
    const setConsultationOpen = (isOpen) => {
        consultationModal?.classList.toggle('is-open', isOpen);
        consultationModal?.setAttribute('aria-hidden', String(!isOpen));
        if (isOpen) {
            consultationStatus.textContent = '';
            setTimeout(() => consultationModal?.querySelector('input')?.focus(), 180);
        }
    };
    document.querySelectorAll('[data-open-consultation]').forEach((button) => {
        button.addEventListener('click', () => setConsultationOpen(true));
    });
    document.querySelectorAll('[data-close-consultation]').forEach((button) => {
        button.addEventListener('click', () => setConsultationOpen(false));
    });
    consultationModal?.addEventListener('click', (event) => {
        if (event.target === consultationModal) setConsultationOpen(false);
    });
    consultationForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        consultationStatus.textContent = 'Thank you — our advisory desk will be in touch shortly.';
        consultationForm.reset();
    });
    document.querySelectorAll('[data-scroll-to]').forEach((button) => {
        button.addEventListener('click', () => {
            const section = document.getElementById(button.dataset.scrollTo);
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    siteOverlays.forEach((overlay) => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) setSiteOpen(null, false);
        });
    });

    faqQuestionList?.addEventListener('click', (event) => {
        const question = event.target.closest('.faq-question');
        if (!question) return;
            const item = question.closest('.faq-item');
            const isOpen = item.classList.toggle('is-open');
            question.setAttribute('aria-expanded', String(isOpen));
            const icon = question.querySelector('span');
            if (icon) icon.textContent = isOpen ? '−' : '+';
    });
    document.querySelectorAll('.faq-side-tabs button').forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.faq-side-tabs button').forEach((button) => button.classList.remove('is-active'));
            tab.classList.add('is-active');
            renderFaqCategory(tab.dataset.faqCategory);
        });
    });
    renderFaqCategory('buying');

    const toggleOwnershipCenter = () => ownershipCenter?.classList.toggle('is-expanded');
    ownershipCenter?.addEventListener('click', toggleOwnershipCenter);
    ownershipCenter?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleOwnershipCenter();
        }
    });

    const animateProofMetrics = (section, isVisible) => {
        section.querySelectorAll('.proof-metric > strong[data-value]').forEach((metric) => {
            if (metric._countFrame) window.cancelAnimationFrame(metric._countFrame);
            const target = Number(metric.dataset.value);
            const suffix = metric.dataset.suffix || '';
            if (!isVisible) {
                metric.textContent = `0${suffix}`;
                return;
            }
            const startedAt = performance.now();
            const count = (now) => {
                const progress = Math.min((now - startedAt) / 2200, 1);
                // Match the reference pacing: low first step, faster middle,
                // then a soft settle on the final metric.
                const eased = progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                metric.textContent = `${Math.round(target * eased)}${suffix}`;
                if (progress < 1) metric._countFrame = window.requestAnimationFrame(count);
            };
            metric._countFrame = window.requestAnimationFrame(count);
        });
    };

    const propertyRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Remove the state when a section leaves the scroll viewport so every
            // entrance animation can replay when the user scrolls back to it.
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
            if (!entry.isIntersecting && entry.target.classList.contains('ownership-section')) {
                ownershipCenter?.classList.remove('is-expanded');
            }
            if (entry.target.classList.contains('property-stats-section')) {
                animateProofMetrics(entry.target, entry.isIntersecting);
            }
        });
    }, { root: document.querySelector('.property-scroll'), threshold: 0.18 });
    document.querySelectorAll('.property-reveal').forEach((section) => propertyRevealObserver.observe(section));
    contactForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        if (contactStatus) contactStatus.textContent = 'Thank you — an advisor will be in touch shortly.';
        contactForm.reset();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setPageMobileMenuOpen(false);
            setAuthNoticeOpen(false);
            setAuthOpen(false);
            setSiteOpen(null, false);
        }
    });
});

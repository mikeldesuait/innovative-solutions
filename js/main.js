document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            "nav.clima": "Climatización", "nav.elec": "Electricidad", "nav.solar": "Placas Solares", "nav.contact": "Contacto",
            "btn.urgency": "📞 Urgencias 24/7", "urgency.call": "Llamar ahora", "urgency.wa": "Enviar WhatsApp",
            "page.back": "Volver al inicio", "hero.badge1": "✓ Instaladores Autorizados", "hero.badge2": "✓ Presupuesto en 48h",
            "hero.title": "Energía y confort<br>con <span class='text-primary'>visión de futuro.</span>",
            "hero.subtitle": "Especialistas en climatización eficiente, instalaciones eléctricas y transición a energías renovables. Calidad garantizada y máxima seguridad.",
            "hero.cta": "Solicitar Presupuesto", "services.title": "Nuestros Servicios",
            "services.clima.title": "Climatización", "services.clima.desc": "Instalación y mantenimiento de aire acondicionado para hogares y espacios comerciales. Máxima eficiencia energética.",
            "services.elec.title": "Electricidad", "services.elec.desc": "Boletines eléctricos, instalaciones y mantenimiento con técnicos altamente capacitados.",
            "services.solar.title": "Placas Solares", "services.solar.desc": "Transición hacia energías renovables. Instalación de sistemas fotovoltaicos eficientes y sostenibles.",
            "contact.title": "Hablemos de tu proyecto", "contact.subtitle": "Recibe un presupuesto detallado en menos de 48 horas. Estamos disponibles para urgencias.",
            "contact.phone": "Teléfono:", "contact.email": "Email:", "form.name": "Tu nombre", "form.name.ph": "Ej. Juan Pérez",
            "form.email": "Tu correo electrónico", "form.email.ph": "juan@email.com", "form.msg": "¿Qué necesitas? (opcional)", "form.msg.ph": "Cuéntanos brevemente...",
            "form.privacy": "He leído y acepto la <a href='politica-privacidad.html' target='_blank'>Política de Privacidad</a>.",
            "form.submit": "Enviar por WhatsApp", "footer.copy": "© 2026 Innovative Solutions. Todos los derechos reservados.",
            "cookie.title": "Respetamos tu privacidad.", "cookie.desc": "Usamos cookies técnicas para recordar tu idioma. No usamos cookies de seguimiento ni publicidad.",
            "cookie.more": "Más información", "cookie.reject": "Rechazar", "cookie.accept": "Aceptar",
            "climate.hero.title": "Climatización Inteligente:<br>Tu confort, sin sorpresas.",
            "climate.hero.subtitle": "No dejes que el calor o el frío decidan por ti. Diseñamos e instalamos sistemas de aire acondicionado que cuidan de tu familia y respetan tu factura de la luz.",
            "climate.hero.cta": "Quiero mi presupuesto en 48h", "climate.why.title": "¿Por qué elegirnos?",
            "climate.box1.title": "El problema del 'ya lo miraré'", "climate.box1.desc": "Sabemos que instalar un aire acondicionado da pereza. Presupuestos que no llegan, instaladores que no son puntuales y facturas de luz que asustan. En <strong>Innovative Solutions</strong> hemos eliminado toda esa fricción.",
            "climate.box1.list1": "Presupuesto cerrado en menos de 48h.", "climate.box1.list2": "Instalación limpia y en el día acordado.", "climate.box1.list3": "Equipos de máxima eficiencia (A+++).",
            "climate.box2.title": "Mantenimiento que alarga la vida", "climate.box2.desc": "Un equipo sucio consume hasta un 30% más. Nuestro servicio de mantenimiento preventivo no solo limpia filtros; revisa presiones y ajusta el sistema para que rinda como el primer día.",
            "climate.box2.strong": "<strong>Tu tranquilidad:</strong> Nos encargamos de todo, tú solo pulsas el botón del mando.",
            "elec.hero.title": "Electricidad Segura.<br>Cero preocupaciones.", "elec.hero.subtitle": "Tu hogar o negocio merece una instalación que cumpla la normativa y soporte la tecnología actual. Boletines, cuadros eléctricos y averías resueltas con precisión.",
            "elec.hero.cta": "Solicitar revisión eléctrica", "elec.why.title": "Expertos en la normativa vigente",
            "elec.box1.title": "¿Te piden el Boletín Eléctrico (CIE)?", "elec.box1.desc": "Para alquilar, vender o simplemente asegurar tu vivienda, necesitas un certificado oficial. No arriesgues con improvisadores. Nuestros técnicos autorizados realizan la inspección y emiten tu boletín <strong>sin complicaciones y en tiempo récord</strong>.",
            "elec.box1.list1": "Tramitación oficial ante Industria.", "elec.box1.list2": "Revisión completa de la instalación.", "elec.box1.list3": "Mejoras de seguridad incluidas.",
            "elec.box2.title": "Moderniza tu cuadro eléctrico", "elec.box2.desc": "Si tus plomos saltan al encender el horno o la vitro, o si tu cuadro es de hace 30 años, estás en riesgo. Actualizamos tu instalación con diferenciales y protecciones modernas.",
            "elec.box2.strong": "<strong>Vanguardia eléctrica:</strong> Preparamos tu casa para coches eléctricos, aerotermia y domótica.",
            "solar.hero.title": "Convierte el sol en ahorro.<br>Independencia Energética.", "solar.hero.subtitle": "La energía solar ya no es el futuro, es el presente. Reduce tu factura eléctrica hasta un 70% y aumenta el valor de tu propiedad con una instalación fotovoltaica a medida.",
            "solar.hero.cta": "Calcular mi ahorro ahora", "solar.why.title": "Diseñamos tu planta solar",
            "solar.box1.title": "Olvídate de las subidas de la luz", "solar.box1.desc": "Cada año la luz sube, pero el sol es gratis. Instalamos paneles solares y baterías para que produzcas tu propia energía durante el día y tengas reserva para la noche.",
            "solar.box1.list1": "Estudio de viabilidad gratuito.", "solar.box1.list2": "Instalación llave en mano (incluye legalización).", "solar.box1.list3": "Mantenimiento anual para máximo rendimiento.",
            "solar.box2.title": "Expertos en trabajos en altura", "solar.box2.desc": "No todos los instaladores están preparados para tejados complejos o edificios altos. Nuestro equipo está certificado para trabajar en altura con total seguridad, garantizando una instalación impecable sin importar la dificultad de la cubierta.",
            "solar.box2.strong": "<strong>Tu inversión, protegida</strong> con los mejores materiales del mercado."
        },
        en: {
            "nav.clima": "Air Conditioning", "nav.elec": "Electricity", "nav.solar": "Solar Panels", "nav.contact": "Contact",
            "btn.urgency": "📞 24/7 Emergencies", "urgency.call": "Call now", "urgency.wa": "Send WhatsApp",
            "page.back": "Back to home", "hero.badge1": "✓ Authorized Installers", "hero.badge2": "✓ 48h Quote",
            "hero.title": "Energy and comfort<br>with a <span class='text-primary'>future vision.</span>",
            "hero.subtitle": "Specialists in efficient air conditioning, electrical installations, and transition to renewable energy. Guaranteed quality and maximum safety.",
            "hero.cta": "Request a Quote", "services.title": "Our Services",
            "services.clima.title": "Air Conditioning", "services.clima.desc": "Installation and maintenance of air conditioning for homes and commercial spaces. Maximum energy efficiency.",
            "services.elec.title": "Electricity", "services.elec.desc": "Electrical certificates, installations, and maintenance with highly trained technicians.",
            "services.solar.title": "Solar Panels", "services.solar.desc": "Transition to renewable energy. Installation of efficient and sustainable photovoltaic systems.",
            "contact.title": "Let's talk about your project", "contact.subtitle": "Receive a detailed quote in less than 48 hours. We are available for emergencies.",
            "contact.phone": "Phone:", "contact.email": "Email:", "form.name": "Your name", "form.name.ph": "E.g. John Smith",
            "form.email": "Your email address", "form.email.ph": "john@email.com", "form.msg": "What do you need? (optional)", "form.msg.ph": "Tell us briefly...",
            "form.privacy": "I have read and accept the <a href='politica-privacidad.html' target='_blank'>Privacy Policy</a>.",
            "form.submit": "Send via WhatsApp", "footer.copy": "© 2026 Innovative Solutions. All rights reserved.",
            "cookie.title": "We respect your privacy.", "cookie.desc": "We use technical cookies to remember your language. We do not use tracking or advertising cookies.",
            "cookie.more": "More info", "cookie.reject": "Reject", "cookie.accept": "Accept",
            "climate.hero.title": "Smart Air Conditioning:<br>Your comfort, no surprises.", "climate.hero.subtitle": "Don't let the heat or cold decide for you. We design and install air conditioning systems that take care of your family and respect your electricity bill.",
            "climate.hero.cta": "Get my 48h quote", "climate.why.title": "Why choose us?",
            "climate.box1.title": "The 'I'll think about it' problem", "climate.box1.desc": "We know that installing air conditioning is a hassle. Quotes that don't arrive, installers who aren't punctual, and scary electricity bills. At <strong>Innovative Solutions</strong> we have eliminated all that friction.",
            "climate.box1.list1": "Fixed quote in less than 48h.", "climate.box1.list2": "Clean installation on the agreed day.", "climate.box1.list3": "Maximum efficiency equipment (A+++).",
            "climate.box2.title": "Maintenance that extends life", "climate.box2.desc": "A dirty unit consumes up to 30% more. Our preventive maintenance service not only cleans filters; it checks pressures and adjusts the system so it performs like the first day.",
            "climate.box2.strong": "<strong>Your peace of mind:</strong> We take care of everything, you just press the remote button.",
            "elec.hero.title": "Safe Electricity.<br>Zero worries.", "elec.hero.subtitle": "Your home or business deserves an installation that complies with regulations and supports current technology. Certificates, electrical panels, and faults resolved with precision.",
            "elec.hero.cta": "Request electrical inspection", "elec.why.title": "Experts in current regulations",
            "elec.box1.title": "Need an Electrical Certificate (CIE)?", "elec.box1.desc": "To rent, sell, or simply insure your home, you need an official certificate. Don't risk it with improvisers. Our authorized technicians perform the inspection and issue your certificate <strong>without complications and in record time</strong>.",
            "elec.box1.list1": "Official processing with Industry.", "elec.box1.list2": "Complete installation check.", "elec.box1.list3": "Security improvements included.",
            "elec.box2.title": "Modernize your electrical panel", "elec.box2.desc": "If your fuses trip when you turn on the oven or ceramic hob, or if your panel is 30 years old, you are at risk. We update your installation with modern differentials and protections.",
            "elec.box2.strong": "<strong>Electrical avant-garde:</strong> We prepare your home for electric cars, aerothermal energy, and home automation.",
            "solar.hero.title": "Turn the sun into savings.<br>Energy Independence.", "solar.hero.subtitle": "Solar energy is no longer the future, it is the present. Reduce your electricity bill by up to 70% and increase your property value with a tailor-made photovoltaic installation.",
            "solar.hero.cta": "Calculate my savings now", "solar.why.title": "We design your solar plant",
            "solar.box1.title": "Forget about electricity price hikes", "solar.box1.desc": "Every year electricity goes up, but the sun is free. We install solar panels and batteries so you produce your own energy during the day and have backup for the night.",
            "solar.box1.list1": "Free feasibility study.", "solar.box1.list2": "Turnkey installation (includes legalization).", "solar.box1.list3": "Annual maintenance for maximum performance.",
            "solar.box2.title": "Experts in working at height", "solar.box2.desc": "Not all installers are prepared for complex roofs or tall buildings. Our team is certified to work at height with total safety, guaranteeing an impeccable installation regardless of the difficulty of the roof.",
            "solar.box2.strong": "<strong>Your investment, protected</strong> with the best materials on the market."
        },
        fr: {
            "nav.clima": "Climatisation", "nav.elec": "Électricité", "nav.solar": "Panneaux Solaires", "nav.contact": "Contact",
            "btn.urgency": "📞 Urgences 24/7", "urgency.call": "Appeler maintenant", "urgency.wa": "Envoyer WhatsApp",
            "page.back": "Retour à l'accueil", "hero.badge1": "✓ Installateurs Agréés", "hero.badge2": "✓ Devis en 48h",
            "hero.title": "Énergie et confort<br>avec une <span class='text-primary'>vision d'avenir.</span>",
            "hero.subtitle": "Spécialistes de la climatisation efficace, des installations électriques et de la transition vers les énergies renouvelables. Qualité garantie et sécurité maximale.",
            "hero.cta": "Demander un Devis", "services.title": "Nos Services",
            "services.clima.title": "Climatisation", "services.clima.desc": "Installation et entretien de la climatisation pour les maisons et les espaces commerciaux. Efficacité énergétique maximale.",
            "services.elec.title": "Électricité", "services.elec.desc": "Certificats électriques, installations et entretien avec des techniciens hautement qualifiés.",
            "services.solar.title": "Panneaux Solaires", "services.solar.desc": "Transition vers les énergies renouvelables. Installation de systèmes photovoltaïques efficaces et durables.",
            "contact.title": "Parlons de votre projet", "contact.subtitle": "Recevez un devis détaillé en moins de 48 heures. Nous sommes disponibles pour les urgences.",
            "contact.phone": "Téléphone :", "contact.email": "Email :", "form.name": "Votre nom", "form.name.ph": "Ex. Jean Dupont",
            "form.email": "Votre adresse e-mail", "form.email.ph": "jean@email.com", "form.msg": "De quoi avez-vous besoin ? (facultatif)", "form.msg.ph": "Dites-nous brièvement...",
            "form.privacy": "J'ai lu et j'accepte la <a href='politica-privacidad.html' target='_blank'>Politique de Confidentialité</a>.",
            "form.submit": "Envoyer via WhatsApp", "footer.copy": "© 2026 Innovative Solutions. Tous droits réservés.",
            "cookie.title": "Nous respectons votre vie privée.", "cookie.desc": "Nous utilisons des cookies techniques pour mémoriser votre langue. Nous n'utilisons pas de cookies de suivi ou publicitaires.",
            "cookie.more": "Plus d'infos", "cookie.reject": "Refuser", "cookie.accept": "Accepter",
            "climate.hero.title": "Climatisation Intelligente :<br>Votre confort, sans surprises.", "climate.hero.subtitle": "Ne laissez pas la chaleur ou le froid décider pour vous. Nous concevons et installons des systèmes de climatisation qui prennent soin de votre famille et respectent votre facture d'électricité.",
            "climate.hero.cta": "Obtenir mon devis en 48h", "climate.why.title": "Pourquoi nous choisir ?",
            "climate.box1.title": "Le problème du 'je vais voir'", "climate.box1.desc": "Nous savons qu'installer une climatisation est fastidieux. Des devis qui n'arrivent pas, des installateurs qui ne sont pas ponctuels et des factures d'électricité qui font peur. Chez <strong>Innovative Solutions</strong>, nous avons éliminé toute cette friction.",
            "climate.box1.list1": "Devis ferme en moins de 48h.", "climate.box1.list2": "Installation propre le jour convenu.", "climate.box1.list3": "Équipements de efficacité maximale (A+++).",
            "climate.box2.title": "Un entretien qui prolonge la vie", "climate.box2.desc": "Un appareil sale consomme jusqu'à 30 % de plus. Notre service d'entretien préventif ne se contente pas de nettoyer les filtres ; il vérifie les pressions et ajuste le système pour qu'il fonctionne comme au premier jour.",
            "climate.box2.strong": "<strong>Votre tranquillité d'esprit :</strong> Nous nous occupons de tout, vous appuyez simplement sur le bouton de la télécommande.",
            "elec.hero.title": "Électricité Sécurisée.<br>Zéro souci.", "elec.hero.subtitle": "Votre maison ou entreprise mérite une installation conforme à la réglementation et capable de supporter la technologie actuelle. Certificats, tableaux électriques et pannes résolues avec précision.",
            "elec.hero.cta": "Demander une vérification électrique", "elec.why.title": "Experts en réglementation en vigueur",
            "elec.box1.title": "On vous demande le Certificat Électrique (CIE) ?", "elec.box1.desc": "Pour louer, vendre ou simplement assurer votre logement, vous avez besoin d'un certificat officiel. Ne prenez pas de risques avec des improvisateurs. Nos techniciens agréés effectuent l'inspection et délivrent votre certificat <strong>sans complications et en un temps record</strong>.",
            "elec.box1.list1": "Traitement officiel auprès de l'Industrie.", "elec.box1.list2": "Vérification complète de l'installation.", "elec.box1.list3": "Améliorations de sécurité incluses.",
            "elec.box2.title": "Modernisez votre tableau électrique", "elec.box2.desc": "Si vos plombs sautent lorsque vous allumez le four ou la plaque vitrocéramique, ou si votre tableau a 30 ans, vous êtes en danger. Nous mettons à jour votre installation avec des différentiels et des protections modernes.",
            "elec.box2.strong": "<strong>Avant-garde électrique :</strong> Nous préparons votre maison pour les voitures électriques, l'aérothermie et la domotique.",
            "solar.hero.title": "Transformez le soleil en économies.<br>Indépendance Énergétique.", "solar.hero.subtitle": "L'énergie solaire n'est plus l'avenir, c'est le présent. Réduisez votre facture d'électricité jusqu'à 70 % et augmentez la valeur de votre propriété avec une installation photovoltaïque sur mesure.",
            "solar.hero.cta": "Calculer mes économies maintenant", "solar.why.title": "Nous concevons votre centrale solaire",
            "solar.box1.title": "Oubliez les hausses du prix de l'électricité", "solar.box1.desc": "Chaque année l'électricité augmente, mais le soleil est gratuit. Nous installons des panneaux solaires et des batteries pour que vous produisiez votre propre énergie pendant la journée et que vous ayez une réserve pour la nuit.",
            "solar.box1.list1": "Étude de faisabilité gratuite.", "solar.box1.list2": "Installation clé en main (inclut la légalisation).", "solar.box1.list3": "Maintenance annuelle pour une performance maximale.",
            "solar.box2.title": "Experts en travaux en hauteur", "solar.box2.desc": "Tous les installateurs ne sont pas préparés pour des toits complexes ou des bâtiments hauts. Notre équipe est certifiée pour travailler en hauteur en toute sécurité, garantissant une installation impeccable quelle que soit la difficulté du toit.",
            "solar.box2.strong": "<strong>Votre investissement, protégé</strong> avec les meilleurs matériaux du marché."
        }
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.innerHTML = translations[lang][key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('preferredLang', lang);
    };

    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.split('-')[0];
    let initialLang = (savedLang && translations[savedLang]) ? savedLang : (translations[browserLang] ? browserLang : 'es');
    setLanguage(initialLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => setLanguage(e.target.getAttribute('data-lang')));
    });

    // MENÚ MÓVIL
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    if(menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // MENÚ DE URGENCIAS
    const urgencyBtn = document.getElementById('urgency-btn');
    const urgencyDropdown = document.getElementById('urgency-dropdown');
    if(urgencyBtn && urgencyDropdown) {
        urgencyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            urgencyDropdown.classList.toggle('hidden');
        });
        document.addEventListener('click', () => {
            urgencyDropdown.classList.add('hidden');
        });
    }

    // BANNER DE COOKIES
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const rejectCookiesBtn = document.getElementById('reject-cookies');

    if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => cookieBanner.classList.remove('hidden'), 1000);
    }
    const saveConsent = (consent) => {
        localStorage.setItem('cookieConsent', consent);
        if(cookieBanner) cookieBanner.classList.add('hidden');
    };
    if(acceptCookiesBtn) acceptCookiesBtn.addEventListener('click', () => saveConsent('accepted'));
    if(rejectCookiesBtn) rejectCookiesBtn.addEventListener('click', () => saveConsent('rejected'));

    // FORMULARIO WHATSAPP
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const privacyChecked = document.getElementById('privacy').checked;

            if (!privacyChecked) {
                alert("Por favor, debes aceptar la política de privacidad para continuar.");
                return;
            }
            const whatsappNumber = "34622679450"; 
            const text = "*Nueva solicitud desde la web*%0A%0A*Nombre:* " + name + "%0A*Email:* " + email + "%0A%0A*Mensaje:*%0A" + message;
            const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;
            window.open(whatsappLink, '_blank');
            setTimeout(() => { contactForm.reset(); }, 1000);
        });
    }
});

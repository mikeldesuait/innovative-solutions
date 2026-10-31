document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            "nav.clima": "Climatización", "nav.elec": "Electricidad", "nav.solar": "Placas Solares", "nav.extract": "Extractores", "nav.contact": "Contacto",
            "btn.urgency": "Urgencias 24/7", "urgency.call": "Llamar ahora", "urgency.wa": "Enviar WhatsApp", "urgency.note": "Analizamos tu urgencia y te atendemos con la mayor brevedad posible.", "page.back": "Volver al inicio",
            "hero.badge1": "✓ Instaladores Autorizados", "hero.badge2": "✓ Presupuesto en 48h",
            "hero.title": "Energía y confort<br>con <span class='text-primary'>visión de futuro.</span>",
            "hero.subtitle": "Especialistas en climatización eficiente, instalaciones eléctricas, energías renovables y extracción de humos. Calidad garantizada y máxima seguridad.",
            "hero.cta": "Solicitar Presupuesto", "services.title": "Nuestros Servicios",
            "services.clima.title": "Climatización", "services.clima.desc": "Instalación y mantenimiento de aire acondicionado para hogares y espacios comerciales.",
            "services.elec.title": "Electricidad", "services.elec.desc": "Boletines eléctricos, instalaciones y mantenimiento con técnicos altamente capacitados.",
            "services.solar.title": "Placas Solares", "services.solar.desc": "Transición hacia energías renovables. Instalación de sistemas fotovoltaicos eficientes.",
            "services.extract.title": "Extractores de Humos", "services.extract.desc": "Diseño e instalación de campanas y sistemas de ventilación para hostelería y empresas.",
            "contact.title": "Hablemos de tu proyecto", "contact.subtitle": "Recibe un presupuesto detallado en menos de 48 horas. Estamos disponibles para urgencias.",
            "contact.phone": "Teléfono:", "contact.email": "Email:", "form.name": "Tu nombre", "form.name.ph": "Ej. Juan Pérez",
            "form.email": "Tu correo electrónico", "form.email.ph": "juan@email.com", "form.msg": "¿Qué necesitas? (opcional)", "form.msg.ph": "Cuéntanos brevemente...",
            "form.privacy": "He leído y acepto la <a href='politica-privacidad.html' target='_blank'>Política de Privacidad</a>.",
            "form.submit": "Enviar por WhatsApp", "footer.copy": "© 2026 Innovative Solutions. Todos los derechos reservados.",
            "cookie.title": "Respetamos tu privacidad.", "cookie.desc": "Usamos cookies técnicas.", "cookie.more": "Más información", "cookie.reject": "Rechazar", "cookie.accept": "Aceptar",
            "climate.hero.title": "Climatización Inteligente:<br>Tu confort, sin sorpresas.", "climate.hero.subtitle": "Diseñamos e instalamos sistemas de aire acondicionado que cuidan de tu familia y respetan tu factura de la luz.", "climate.hero.cta": "Quiero mi presupuesto en 48h", "climate.why.title": "Soluciones para cada espacio",
            "climate.home.title": "🏠 Para tu Hogar", "climate.home.desc": "Presupuestos que no llegan, instaladores que no son puntuales y facturas de luz que asustan. En <strong>Innovative Solutions</strong> hemos eliminado toda esa fricción.", "climate.home.list1": "Presupuesto cerrado en menos de 48h.", "climate.home.list2": "Instalación limpia y en el día acordado.", "climate.home.list3": "Equipos de máxima eficiencia (A+++).",
            "climate.business.title": "🍽️ Para Bares y Empresas", "climate.business.desc": "En la hostelería, un equipo que falla es dinero que pierdes. Instalamos y mantenemos sistemas de climatización de gran potencia para que tus clientes estén siempre a gusto, sin importar el calor que haga fuera.", "climate.business.list1": "Climatización para salones y comedores.", "climate.business.list2": "Climatización para salones de gran capacidad.", "climate.business.list3": "Mantenimiento preventivo para evitar cierres.",
            "elec.hero.title": "Electricidad Segura.<br>Cero preocupaciones.", "elec.hero.subtitle": "Tu hogar o negocio merece una instalación que cumpla la normativa y soporte la tecnología actual.", "elec.hero.cta": "Solicitar revisión eléctrica", "elec.why.title": "Soluciones para cada espacio",
            "elec.home.title": "🏠 Para tu Hogar", "elec.home.desc": "Para alquilar, vender o simplemente asegurar tu vivienda, necesitas un certificado oficial. No arriesgues con improvisadores. Realizamos la inspección y emitimos tu boletín.", "elec.home.list1": "Tramitación oficial ante Industria.", "elec.home.list2": "Revisión completa de la instalación.", "elec.home.list3": "Mejoras de seguridad incluidas.",
            "elec.business.title": "🏢 Para Empresas y Locales", "elec.business.desc": "Tu negocio no puede permitirse un corte de luz. Adaptamos y modernizamos la instalación eléctrica de tu local comercial o nave industrial, preparándola para la maquinaria actual.", "elec.business.list1": "Cuadros eléctricos industriales.", "elec.business.list2": "Instalación de maquinaria y fuerza.", "elec.business.list3": "Mantenimiento eléctrico de locales.",
            "solar.hero.title": "Convierte el sol en ahorro.<br>Independencia Energética.", "solar.hero.subtitle": "Reduce tu factura eléctrica hasta un 70% y aumenta el valor de tu propiedad con una instalación fotovoltaica a medida.", "solar.hero.cta": "Calcular mi ahorro ahora", "solar.why.title": "Soluciones para cada espacio",
            "solar.home.title": "🏠 Para tu Hogar", "solar.home.desc": "Cada año la luz sube, pero el sol es gratis. Instalamos paneles solares y baterías para que produzcas tu propia energía durante el día y tengas reserva para la noche.", "solar.home.list1": "Estudio de viabilidad gratuito.", "solar.home.list2": "Instalación llave en mano (incluye legalización).", "solar.home.list3": "Mantenimiento anual para máximo rendimiento.",
            "solar.business.title": "🏢 Para Empresas e Industria", "solar.business.desc": "Reduce los costes fijos de tu empresa y mejora tu huella de carbono. Diseñamos plantas fotovoltaicas para naves industriales, hoteles y grandes superficies.", "solar.business.list1": "Estudio de retorno de inversión (ROI).", "solar.business.list2": "Instalaciones en grandes cubiertas.", "solar.business.list3": "Expertos en trabajos en altura.",
            "extract.hero.title": "Ventilación y Extracción:<br>Aire limpio para tu negocio.", "extract.hero.subtitle": "En la hostelería, un sistema de extracción inadecuado provoca olores, humos y problemas con la normativa. Diseñamos e instalamos campanas y extractores de máxima potencia.", "extract.hero.cta": "Solicitar estudio técnico", "extract.why.title": "Soluciones para cada espacio",
            "extract.home.title": "🏠 Para tu Hogar", "extract.home.desc": "¿Reformando tu cocina? Instalamos campanas extractoras domésticas de alta eficiencia, silenciosas y con un diseño que se adapta a tu mobiliario. Evita olores y grasas en casa.", "extract.home.list1": "Campanas de isla, pared o integradas.", "extract.home.list2": "Extracción silenciosa y eficiente.", "extract.home.list3": "Filtros de carbón para recirculación.",
            "extract.business.title": "🍽️ Para Bares y Empresas", "extract.business.desc": "Tu cocina no puede parar. Instalamos sistemas de extracción industrial para restaurantes, bares y hoteles. Cumplimos estrictamente con la normativa de higiene y prevención de incendios.", "extract.business.list1": "Campanas industriales a medida.", "extract.business.list2": "Extracción de humos y ventilación.", "extract.business.list3": "Mantenimiento y limpieza de conductos."
        },
        en: {
            "nav.clima": "Air Conditioning", "nav.elec": "Electricity", "nav.solar": "Solar Panels", "nav.extract": "Extractors", "nav.contact": "Contact",
            "btn.urgency": "24/7 Emergencies", "urgency.call": "Call now", "urgency.wa": "Send WhatsApp", "urgency.note": "We analyze your emergency and respond as quickly as possible.", "page.back": "Back to home",
            "hero.badge1": "✓ Authorized Installers", "hero.badge2": "✓ Quote in 48h",
            "hero.title": "Energy and comfort<br>with <span class='text-primary'>a vision for the future.</span>",
            "hero.subtitle": "Specialists in efficient air conditioning, electrical installations, renewable energy and smoke extraction. Guaranteed quality and maximum safety.",
            "hero.cta": "Request a Quote", "services.title": "Our Services",
            "services.clima.title": "Air Conditioning", "services.clima.desc": "Installation and maintenance of air conditioning for homes and commercial spaces.",
            "services.elec.title": "Electricity", "services.elec.desc": "Electrical certificates, installations and maintenance with highly trained technicians.",
            "services.solar.title": "Solar Panels", "services.solar.desc": "Transition to renewable energy. Installation of efficient photovoltaic systems.",
            "services.extract.title": "Smoke Extractors", "services.extract.desc": "Design and installation of hoods and ventilation systems for hospitality and businesses.",
            "contact.title": "Let's talk about your project", "contact.subtitle": "Receive a detailed quote in less than 48 hours. We are available for emergencies.",
            "contact.phone": "Phone:", "contact.email": "Email:", "form.name": "Your name", "form.name.ph": "e.g. John Smith",
            "form.email": "Your email address", "form.email.ph": "john@email.com", "form.msg": "What do you need? (optional)", "form.msg.ph": "Tell us briefly...",
            "form.privacy": "I have read and accept the <a href='politica-privacidad.html' target='_blank'>Privacy Policy</a>.",
            "form.submit": "Send via WhatsApp", "footer.copy": "© 2026 Innovative Solutions. All rights reserved.",
            "cookie.title": "We respect your privacy.", "cookie.desc": "We use technical cookies.", "cookie.more": "More information", "cookie.reject": "Reject", "cookie.accept": "Accept",
            "climate.hero.title": "Smart Air Conditioning:<br>Your comfort, no surprises.", "climate.hero.subtitle": "We design and install air conditioning systems that take care of your family and respect your electricity bill.", "climate.hero.cta": "I want my quote in 48h", "climate.why.title": "Solutions for every space",
            "climate.home.title": "🏠 For your Home", "climate.home.desc": "Quotes that never arrive, installers who are late and scary electricity bills. At <strong>Innovative Solutions</strong> we have removed all that friction.", "climate.home.list1": "Fixed quote in less than 48h.", "climate.home.list2": "Clean installation on the agreed day.", "climate.home.list3": "Maximum efficiency equipment (A+++).",
            "climate.business.title": "🍽️ For Bars and Businesses", "climate.business.desc": "In hospitality, a failing unit is money you lose. We install and maintain high-power air conditioning systems so your customers are always comfortable, no matter how hot it is outside.", "climate.business.list1": "Air conditioning for dining rooms.", "climate.business.list2": "Air conditioning for large dining rooms.", "climate.business.list3": "Preventive maintenance to avoid closures.",
            "elec.hero.title": "Safe Electricity.<br>Zero worries.", "elec.hero.subtitle": "Your home or business deserves an installation that complies with regulations and supports current technology.", "elec.hero.cta": "Request electrical inspection", "elec.why.title": "Solutions for every space",
            "elec.home.title": "🏠 For your Home", "elec.home.desc": "To rent, sell or simply secure your home, you need an official certificate. Don't risk it with improvisors. We carry out the inspection and issue your certificate.", "elec.home.list1": "Official processing with Industry.", "elec.home.list2": "Full inspection of the installation.", "elec.home.list3": "Safety improvements included.",
            "elec.business.title": "🏢 For Companies and Premises", "elec.business.desc": "Your business cannot afford a power cut. We adapt and modernize the electrical installation of your commercial premises or industrial warehouse, preparing it for current machinery.", "elec.business.list1": "Industrial electrical panels.", "elec.business.list2": "Machinery and power installation.", "elec.business.list3": "Electrical maintenance of premises.",
            "solar.hero.title": "Turn the sun into savings.<br>Energy Independence.", "solar.hero.subtitle": "Reduce your electricity bill by up to 70% and increase your property value with a tailored photovoltaic installation.", "solar.hero.cta": "Calculate my savings now", "solar.why.title": "Solutions for every space",
            "solar.home.title": "🏠 For your Home", "solar.home.desc": "Every year electricity goes up, but the sun is free. We install solar panels and batteries so you produce your own energy during the day and have backup for the night.", "solar.home.list1": "Free feasibility study.", "solar.home.list2": "Turnkey installation (including legalization).", "solar.home.list3": "Annual maintenance for maximum performance.",
            "solar.business.title": "🏢 For Companies and Industry", "solar.business.desc": "Reduce your company's fixed costs and improve your carbon footprint. We design photovoltaic plants for industrial warehouses, hotels and large surfaces.", "solar.business.list1": "Return on investment (ROI) study.", "solar.business.list2": "Installations on large roofs.", "solar.business.list3": "Experts in work at height.",
            "extract.hero.title": "Ventilation and Extraction:<br>Clean air for your business.", "extract.hero.subtitle": "In hospitality, an inadequate extraction system causes odours, smoke and regulatory problems. We design and install high-power hoods and extractors.", "extract.hero.cta": "Request technical study", "extract.why.title": "Solutions for every space",
            "extract.home.title": "🏠 For your Home", "extract.home.desc": "Renovating your kitchen? We install high-efficiency, silent domestic extractor hoods with a design that adapts to your furniture. Avoid odours and grease at home.", "extract.home.list1": "Island, wall or integrated hoods.", "extract.home.list2": "Silent and efficient extraction.", "extract.home.list3": "Carbon filters for recirculation.",
            "extract.business.title": "🍽️ For Bars and Businesses", "extract.business.desc": "Your kitchen cannot stop. We install industrial extraction systems for restaurants, bars and hotels. We strictly comply with hygiene and fire prevention regulations.", "extract.business.list1": "Custom industrial hoods.", "extract.business.list2": "Smoke extraction and ventilation.", "extract.business.list3": "Duct maintenance and cleaning."
        },
        fr: {
            "nav.clima": "Climatisation", "nav.elec": "Électricité", "nav.solar": "Panneaux Solaires", "nav.extract": "Extracteurs", "nav.contact": "Contact",
            "btn.urgency": "Urgences 24/7", "urgency.call": "Appeler maintenant", "urgency.wa": "Envoyer WhatsApp", "urgency.note": "Nous analysons votre urgence et vous répondons dans les plus brefs délais.", "page.back": "Retour à l'accueil",
            "hero.badge1": "✓ Installateurs Agréés", "hero.badge2": "✓ Devis en 48h",
            "hero.title": "Énergie et confort<br>avec <span class='text-primary'>une vision d'avenir.</span>",
            "hero.subtitle": "Spécialistes en climatisation efficace, installations électriques, énergies renouvelables et extraction de fumées. Qualité garantie et sécurité maximale.",
            "hero.cta": "Demander un Devis", "services.title": "Nos Services",
            "services.clima.title": "Climatisation", "services.clima.desc": "Installation et entretien de climatisation pour maisons et espaces commerciaux.",
            "services.elec.title": "Électricité", "services.elec.desc": "Certificats électriques, installations et entretien avec des techniciens hautement qualifiés.",
            "services.solar.title": "Panneaux Solaires", "services.solar.desc": "Transition vers les énergies renouvelables. Installation de systèmes photovoltaïques efficaces.",
            "services.extract.title": "Extracteurs de Fumées", "services.extract.desc": "Conception et installation de hottes et systèmes de ventilation pour l'hôtellerie et les entreprises.",
            "contact.title": "Parlons de votre projet", "contact.subtitle": "Recevez un devis détaillé en moins de 48 heures. Nous sommes disponibles pour les urgences.",
            "contact.phone": "Téléphone:", "contact.email": "Email:", "form.name": "Votre nom", "form.name.ph": "Ex. Jean Dupont",
            "form.email": "Votre adresse email", "form.email.ph": "jean@email.com", "form.msg": "De quoi avez-vous besoin? (optionnel)", "form.msg.ph": "Dites-nous brièvement...",
            "form.privacy": "J'ai lu et j'accepte la <a href='politica-privacidad.html' target='_blank'>Politique de Confidentialité</a>.",
            "form.submit": "Envoyer via WhatsApp", "footer.copy": "© 2026 Innovative Solutions. Tous droits réservés.",
            "cookie.title": "Nous respectons votre vie privée.", "cookie.desc": "Nous utilisons des cookies techniques.", "cookie.more": "Plus d'informations", "cookie.reject": "Refuser", "cookie.accept": "Accepter",
            "climate.hero.title": "Climatisation Intelligente:<br>Votre confort, sans surprises.", "climate.hero.subtitle": "Nous concevons et installons des systèmes de climatisation qui prennent soin de votre famille et respectent votre facture d'électricité.", "climate.hero.cta": "Je veux mon devis en 48h", "climate.why.title": "Solutions pour chaque espace",
            "climate.home.title": "🏠 Pour votre Maison", "climate.home.desc": "Des devis qui n'arrivent jamais, des installateurs en retard et des factures d'électricité qui font peur. Chez <strong>Innovative Solutions</strong> nous avons éliminé toute cette friction.", "climate.home.list1": "Devis ferme en moins de 48h.", "climate.home.list2": "Installation propre le jour convenu.", "climate.home.list3": "Équipements à efficacité maximale (A+++).",
            "climate.business.title": "🍽️ Pour Bars et Entreprises", "climate.business.desc": "Dans l'hôtellerie, un équipement en panne c'est de l'argent perdu. Nous installons et entretenons des systèmes de climatisation de grande puissance pour que vos clients soient toujours à l'aise, quelle que soit la chaleur dehors.", "climate.business.list1": "Climatisation pour salles et réfectoires.", "climate.business.list2": "Climatisation pour salles de grande capacité.", "climate.business.list3": "Maintenance préventive pour éviter les fermetures.",
            "elec.hero.title": "Électricité Sûre.<br>Zéro soucis.", "elec.hero.subtitle": "Votre maison ou entreprise mérite une installation conforme à la réglementation et adaptée à la technologie actuelle.", "elec.hero.cta": "Demander une révision électrique", "elec.why.title": "Solutions pour chaque espace",
            "elec.home.title": "🏠 Pour votre Maison", "elec.home.desc": "Pour louer, vendre ou simplement sécuriser votre logement, vous avez besoin d'un certificat officiel. Ne prenez pas de risques. Nous réalisons l'inspection et délivrons votre certificat.", "elec.home.list1": "Traitement officiel auprès de l'Industrie.", "elec.home.list2": "Révision complète de l'installation.", "elec.home.list3": "Améliorations de sécurité incluses.",
            "elec.business.title": "🏢 Pour Entreprises et Locaux", "elec.business.desc": "Votre entreprise ne peut pas se permettre une coupure de courant. Nous adaptons et modernisons l'installation électrique de votre local commercial ou entrepôt industriel.", "elec.business.list1": "Tableaux électriques industriels.", "elec.business.list2": "Installation de machines et force.", "elec.business.list3": "Maintenance électrique des locaux.",
            "solar.hero.title": "Transformez le soleil en économies.<br>Indépendance Énergétique.", "solar.hero.subtitle": "Réduisez votre facture d'électricité jusqu'à 70% et augmentez la valeur de votre propriété avec une installation photovoltaïque sur mesure.", "solar.hero.cta": "Calculer mes économies", "solar.why.title": "Solutions pour chaque espace",
            "solar.home.title": "🏠 Pour votre Maison", "solar.home.desc": "Chaque année l'électricité augmente, mais le soleil est gratuit. Nous installons des panneaux solaires et des batteries pour que vous produisiez votre propre énergie.", "solar.home.list1": "Étude de faisabilité gratuite.", "solar.home.list2": "Installation clé en main (légalisation incluse).", "solar.home.list3": "Maintenance annuelle pour un rendement maximal.",
            "solar.business.title": "🏢 Pour Entreprises et Industrie", "solar.business.desc": "Réduisez les coûts fixes de votre entreprise et améliorez votre empreinte carbone. Nous concevons des centrales photovoltaïques pour entrepôts, hôtels et grandes surfaces.", "solar.business.list1": "Étude de retour sur investissement (ROI).", "solar.business.list2": "Installations sur grandes toitures.", "solar.business.list3": "Experts en travaux en hauteur.",
            "extract.hero.title": "Ventilation et Extraction:<br>Air propre pour votre entreprise.", "extract.hero.subtitle": "Dans l'hôtellerie, un système d'extraction inadéquat provoque des odeurs, des fumées et des problèmes réglementaires. Nous concevons et installons des hottes et extracteurs de puissance maximale.", "extract.hero.cta": "Demander une étude technique", "extract.why.title": "Solutions pour chaque espace",
            "extract.home.title": "🏠 Pour votre Maison", "extract.home.desc": "Vous rénovez votre cuisine? Nous installons des hottes aspirantes domestiques à haute efficacité, silencieuses et au design adapté à votre mobilier.", "extract.home.list1": "Hottes îlot, murales ou intégrées.", "extract.home.list2": "Extraction silencieuse et efficace.", "extract.home.list3": "Filtres à charbon pour recirculation.",
            "extract.business.title": "🍽️ Pour Bars et Entreprises", "extract.business.desc": "Votre cuisine ne peut pas s'arrêter. Nous installons des systèmes d'extraction industriels pour restaurants, bars et hôtels. Nous respectons strictement la réglementation.", "extract.business.list1": "Hottes industrielles sur mesure.", "extract.business.list2": "Extraction de fumées et ventilation.", "extract.business.list3": "Maintenance et nettoyage des conduits."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'es';
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
    setLanguage(currentLang);

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    if (menuToggle && nav) menuToggle.addEventListener('click', () => nav.classList.toggle('active'));

    const urgencyBtn = document.getElementById('urgency-btn');
    const urgencyDropdown = document.getElementById('urgency-dropdown');
    if (urgencyBtn && urgencyDropdown) {
        urgencyBtn.addEventListener('click', (e) => { e.stopPropagation(); urgencyDropdown.classList.toggle('hidden'); });
        document.addEventListener('click', () => urgencyDropdown.classList.add('hidden'));
    }

    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        if (!localStorage.getItem('cookies')) setTimeout(() => cookieBanner.classList.remove('hidden'), 1000);
        const accept = document.getElementById('accept-cookies');
        const reject = document.getElementById('reject-cookies');
        if (accept) accept.addEventListener('click', () => { localStorage.setItem('cookies', 'accepted'); cookieBanner.classList.add('hidden'); });
        if (reject) reject.addEventListener('click', () => { localStorage.setItem('cookies', 'rejected'); cookieBanner.classList.add('hidden'); });
    }

    // Pre-rellenar formulario según el servicio desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const servicio = urlParams.get('servicio');
    const messageField = document.getElementById('message');
    
    if (servicio && messageField) {
        const textos = {
            'es': {
                'climatizacion': 'Hola, me gustaría solicitar un presupuesto para Climatización.',
                'electricidad': 'Hola, me gustaría solicitar un presupuesto para Electricidad.',
                'placas-solares': 'Hola, me gustaría solicitar un presupuesto para Placas Solares.',
                'extractores': 'Hola, me gustaría solicitar un presupuesto para Extractores de Humos.'
            },
            'en': {
                'climatizacion': 'Hello, I would like to request a quote for Air Conditioning.',
                'electricidad': 'Hello, I would like to request a quote for Electricity.',
                'placas-solares': 'Hello, I would like to request a quote for Solar Panels.',
                'extractores': 'Hello, I would like to request a quote for Smoke Extractors.'
            },
            'fr': {
                'climatizacion': 'Bonjour, je souhaiterais demander un devis pour la Climatisation.',
                'electricidad': 'Bonjour, je souhaiterais demander un devis pour l\'Électricité.',
                'placas-solares': 'Bonjour, je souhaiterais demander un devis pour les Panneaux Solaires.',
                'extractores': 'Bonjour, je souhaiterais demander un devis pour les Extracteurs de Fumées.'
            }
        };
        
        // Usamos el idioma actual que ya detecta la web, o español por defecto
        const currentLang = localStorage.getItem('lang') || 'es';
        if (textos[currentLang] && textos[currentLang][servicio]) {
            messageField.value = textos[currentLang][servicio];
        }
    }

    const form = document.getElementById('contact-form');
    const formRenderTime = Date.now();
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const honeypot = document.getElementById('website');
            if (honeypot && honeypot.value) {
                alert('Envio fallido, intentalo de nuevo.');
                return;
            }
            if (Date.now() - formRenderTime < 3000) {
                alert('Envio demasiado rapido, intentalo de nuevo.');
                return;
            }
            const privacy = document.getElementById('privacy');
            if (privacy && !privacy.checked) {
                alert('Debes aceptar la politica de privacidad.');
                return;
            }
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const text = `Hola, soy ${name} (${email}). ${message}`;
            window.open(`https://wa.me/34622812439?text=${encodeURIComponent(text)}`, '_blank');
            setTimeout(() => form.reset(), 1000);
        });
    }
});

/**
 * naz by nazish — Architecture & Spatial Design
 * Internationalization (i18n) Engine
 * Language support for English (default), Arabic (RTL), and Russian (LTR).
 */

const translations = {
  en: {
    // Nav & Common
    nav_home: "Home",
    nav_services: "Services",
    nav_pricing: "Services",
    nav_portfolio: "Portfolio",
    nav_faq: "Practice & FAQ",
    nav_contact: "Contact",
    nav_book_consultation: "Inquiry",
    mobile_chat_wa: "Inquiry",
    lang_select_label: "Language:",

    // Hero
    hero_eyebrow: "AR. ALINA NAZISH — PRINCIPAL ARCHITECT & SPATIAL DESIGNER",
    hero_title: "naz by nazish",
    hero_tagline: "Contemporary Architecture, Spatial Purity & Bespoke Environments.",
    hero_desc: "Bespoke residential villas, luxury private interiors, and curated commercial & hospitality spaces crafted with structural harmony, timeless materiality, and meticulous spatial precision across the UAE.",
    hero_badge: "ARCHITECTURAL DESIGN & SPATIAL PLANNING • UAE",
    btn_pricing_tiers: "Explore Services",
    btn_services: "Explore Services",
    btn_explore_portfolio: "Selected Works",
    metric_1_num: "10+",
    metric_1_label: "Years Design Practice",
    metric_2_num: "50+",
    metric_2_label: "Curated Projects Delivered",
    metric_3_num: "100%",
    metric_3_label: "Bespoke Architectural Vision",

    // Architectural Philosophy & Framework
    framework_eyebrow: "ARCHITECTURAL PHILOSOPHY",
    framework_title: "Enduring Architecture Rooted in Spatial Proportion",
    framework_subtitle: "We believe exceptional architecture emerges from the dialog between human scale, natural light, and authentic materiality. Ar. Alina Nazish guides each commission from initial schematic inquiry to realized structural reality.",
    step_1_title: "Context & Schematic Discovery",
    step_1_desc: "Analysis of orientation, natural daylight paths, volumetric massing, and functional circulation to establish the project's spatial foundation.",
    step_2_title: "Spatial & Architectural Layout",
    step_2_desc: "Rigorous 2D/3D spatial planning, structural alignment, sightline framing, and volume choreography for refined living.",
    step_3_title: "Materiality & Detailing",
    step_3_desc: "Selection of noble materials—natural stone, fine woods, tactile metals—paired with comprehensive technical construction drawings.",

    // Testimonial / Client Quote
    testimonial_quote: '"Ar. Alina brought exceptional architectural clarity to our residence. From spatial reconfiguration to custom joinery detailing, her studio balanced refined restraint with warm, liveable luxury."',
    testimonial_role: "Private Residence Client • Palm Jumeirah",

    // Services (Replacing Staging Pricing)
    services_eyebrow: "PRACTICE & DISCIPLINES",
    services_title: "Architectural Services",
    services_subtitle: "From ground-up private residences to refined interior transformations and bespoke commercial spaces across the UAE.",
    pricing_eyebrow: "PRACTICE & DISCIPLINES",
    pricing_title: "Architectural Services",
    pricing_subtitle: "From ground-up private residences to refined interior transformations and bespoke commercial spaces across the UAE.",
    pricing_audience_note: "Tailored architectural commissions for private homeowners, commercial operators, and boutique developers.",
    currency_aed: "",

    tier_1_eyebrow: "TYPOLOGY 01",
    tier_1_title: "Residential Architecture",
    tier_1_subtitle: "Custom Villas & Private Estates",
    tier_1_feat_1: "<strong>Architectural Concept & Facade Design</strong>",
    tier_1_feat_2: "<strong>Spatial Layouts & Volumetric Massing</strong>",
    tier_1_feat_3: "<strong>Indoor-Outdoor Flow & Daylighting Analysis</strong>",
    tier_1_feat_4: "Zoning Evaluation & Authority Coordination",
    tier_1_btn: "Inquire for Residential Project",

    tier_2_badge: "CORE PRACTICE",
    tier_2_eyebrow: "TYPOLOGY 02",
    tier_2_title: "Interior Architecture",
    tier_2_subtitle: "Penthouses, Luxury Residences & Remodels",
    tier_2_feat_1: "<strong>Complete Spatial Reconfiguration & Layouts</strong>",
    tier_2_feat_2: "<strong>Bespoke Architectural Joinery & Millwork</strong>",
    tier_2_feat_3: "Noble Material Palettes (Travertine, Oak, Brass)",
    tier_2_feat_4: "Architectural Lighting Design & Automation Curation",
    tier_2_feat_5: "3D Realistic Spatial Renders & Mood Studies",
    tier_2_btn: "Inquire for Interior Architecture",

    tier_3_eyebrow: "TYPOLOGY 03",
    tier_3_title: "Commercial & Hospitality",
    tier_3_price: "Bespoke Scope",
    tier_3_subtitle: "Artisanal Bakeries, Cafés & Boutique Retail",
    tier_3_feat_1: "<strong>Customer Circulation & Operational Workflow</strong>",
    tier_3_feat_2: "Bespoke Display Counters & Bar Ergonomics",
    tier_3_feat_3: "Brand-Aligned Spatial Identity & Atmosphere",
    tier_3_feat_4: "Detailed Technical Drawings & Joinery Blueprints",
    tier_3_feat_5: "Contractor Coordination & Fit-Out Supervision",
    tier_3_btn: "Inquire for Commercial Project",

    pricing_bulk_note: "Looking for comprehensive masterplanning, multi-unit design, or full architectural consultation?",
    pricing_bulk_link: "Connect directly with Ar. Alina Nazish to discuss your commission.",

    // Portfolio
    portfolio_eyebrow: "SELECTED WORKS",
    portfolio_title: "Architectural & Interior Portfolio",
    portfolio_subtitle: "Curated private residences, luxury penthouses, and bespoke commercial spaces designed across Dubai and the UAE.",
    filter_all: "All Projects",
    filter_residential: "1. Residential Architecture",
    filter_commercial: "2. Commercial & Hospitality",
    badge_residential: "Residential",
    badge_commercial: "Commercial",

    port_1_title: "The Horizon Penthouse",
    port_1_loc: "Downtown Dubai",
    port_1_outcome: "4,200 sq.ft • Spatial Planning",
    port_1_desc: "Complete architectural interior restructuring, bespoke fluted millwork, and panoramic daylight framing overlooking Downtown Dubai.",

    port_2_title: "Villa Seraphina",
    port_2_loc: "Palm Jumeirah",
    port_2_outcome: "6,800 sq.ft • Waterfront Villa",
    port_2_desc: "Architectural interior design emphasizing organic curves, natural travertine stone, and fluid indoor-outdoor coastal living.",

    port_3_title: "The Minimalist Suite",
    port_3_loc: "Dubai Marina",
    port_3_outcome: "2,100 sq.ft • High-Rise Living",
    port_3_desc: "Spatial optimization and monolithic joinery creating a serene, light-filled urban sanctuary high above the marina.",

    port_4_title: "The Executive Residence",
    port_4_loc: "Emirates Hills",
    port_4_outcome: "1,850 sq.ft • Master Suite & Study",
    port_4_desc: "Architectural renovation featuring bespoke acoustic oak paneling, integrated desk joinery, and tailored mood lighting.",

    port_5_title: "Artisan Crust Atelier",
    port_5_outcome: "1,600 sq.ft • Artisanal Bakery",
    port_5_desc: "Concept architecture, bespoke curved terrazzo display counters, and warm ambient illumination for an artisanal bakery.",

    port_6_title: "Le Pain Doré Boulangerie",
    port_6_outcome: "1,950 sq.ft • Gourmet Bakery",
    port_6_desc: "Refined customer circulation, micro-cement finishes, and ergonomic display architecture showcasing handcrafted baked goods.",

    port_7_title: "Aura Specialty Coffee",
    port_7_outcome: "2,400 sq.ft • Specialty Café",
    port_7_desc: "Ergonomic coffee bar architecture, acoustic zoning, and contemporary urban seating layout celebrating modern coffee culture.",

    port_8_title: "Velvet Roastery & Lounge",
    port_8_outcome: "2,200 sq.ft • Espresso Lounge",
    port_8_desc: "Tactile brushed brass accents, fluted walnut surfaces, and intimate spatial lighting curated for a luxury dessert & coffee experience.",

    lightbox_inquiry_btn: "Inquire About an Architectural Project",

    // FAQ
    faq_eyebrow: "PRACTICE & ENGAGEMENT",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Key insights into our architectural design process, project timelines, municipal approvals, and collaborative methodology.",

    faq_q1: "What architectural and interior design services does the studio offer?",
    faq_a1: "naz by nazish specializes in bespoke architectural design for private residences and villas, full interior architecture and spatial reconfiguration for luxury penthouses and apartments, and concept-to-completion design for boutique commercial & hospitality spaces (specialty cafés, bakeries, and retail). We also provide detailed construction documentation and site design supervision across the UAE.",

    faq_q_client: "What typologies of clients do you collaborate with?",
    faq_a_client: "We collaborate with private homeowners commissioning ground-up residences or extensive remodels, commercial entrepreneurs creating distinctive hospitality concepts, and boutique developers seeking distinctive, high-value spatial design throughout Dubai and the UAE.",

    faq_q2: "How does the architectural design process unfold from concept to completion?",
    faq_a2: "Our process consists of 4 distinct phases: 1) Contextual Briefing & Site Discovery, 2) Schematic Architecture & 2D/3D Spatial Layouts, 3) Material Specification & Detailed Technical Construction Blueprints, and 4) Periodic Site Supervision & Artisan Coordination during execution to ensure design integrity.",

    faq_q3: "Do you handle technical construction drawings and municipal authority coordination?",
    faq_a3: "Yes. We produce complete architectural CAD/BIM drawing packages including detailed floor plans, internal elevations, joinery and millwork shop drawings, and MEP/lighting coordination sheets required for contractors and authority approval consultants.",

    faq_q4: "Can you collaborate with our chosen contractors or recommend trusted builders?",
    faq_a4: "We regularly collaborate with client-appointed general contractors, fit-out specialists, and MEP engineers. Additionally, through our extensive UAE practice, we can introduce trusted specialized artisans, stone fabricators, and custom millwork joineries to execute bespoke details flawlessly.",

    faq_q5: "Which geographic locations does naz by nazish serve?",
    faq_a5: "We accept commissions across all seven UAE Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain, as well as select international design advisory commissions across the GCC.",

    faq_q6: "How do we initiate a new architectural commission or consultation?",
    faq_a6: "Simply reach out via our contact inquiry form below or email Ar. Alina Nazish directly at ar.khan.alina@gmail.com with your site location, project typology, and vision. We will schedule an initial design consultation to explore feasibility and project scope.",

    // Contact
    contact_eyebrow: "INQUIRIES",
    contact_title: "Initiate Your Architectural Project",
    contact_subtitle: "Connect directly with Ar. Alina Nazish to discuss your residential, commercial, or hospitality architectural vision across the UAE.",
    contact_subtitle_role: "Ar. Alina Nazish — Principal Architect & Spatial Designer",
    contact_email_title: "Studio Email",
    contact_email_detail: "Direct architectural inquiries.",
    contact_email_link: "ar.khan.alina@gmail.com &rarr;",
    contact_ig_title: "Design Studio Instagram",
    contact_ig_detail: "Architectural process, site insights & finished works.",
    contact_coverage_title: "PRACTICE LOCATIONS (ALL 7 UAE EMIRATES & GCC)",
    contact_coverage_list: "Dubai • Abu Dhabi • Sharjah • Ajman • Ras Al Khaimah • Fujairah • Umm Al Quwain",
    form_title: "Architectural Inquiry",
    form_subtitle: "Share your project details below to schedule an initial design consultation.",

    lbl_name: "Full Name",
    lbl_phone: "Phone / WhatsApp",
    lbl_role: "I am contacting as...",
    opt_role_owner: "Private Homeowner / Villa Client",
    opt_role_agent: "Commercial / Hospitality Business Owner",
    opt_role_dev: "Property Developer / Investor",

    lbl_location: "Project Location",
    lbl_prop_type: "Project Typology",
    opt_type_apt: "Luxury Penthouse / Apartment Interior Architecture",
    opt_type_villa: "Custom Villa Architecture (Ground-Up)",
    opt_type_office: "Commercial Space (Office / Retail / Boutique)",
    opt_type_retail: "Hospitality Space (Café / Bakery / Restaurant)",

    lbl_tier: "Project Scope & Services Needed",
    opt_tier_400: "Residential Architecture & Spatial Planning",
    opt_tier_600: "Interior Architecture & Custom Joinery Detailing",
    opt_tier_custom: "Turnkey Design, Documentation & Site Supervision",

    lbl_notes: "Project Brief & Aspirations",
    placeholder_name: "e.g. Sarah Mansoor",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "Mention estimated area (sq.ft), design preferences, and timeline...",
    btn_submit_request: "Submit Inquiry",

    // Footer
    footer_subtitle: "Ar. Alina Nazish — Principal Architect & Spatial Designer",
    footer_desc: "Contemporary architectural design, bespoke interior architecture, and thoughtful spatial planning across Dubai and the UAE.",
    footer_nav_heading: "Navigation",
    footer_nav_home: "Home",
    footer_nav_pricing: "Services & Disciplines",
    footer_nav_portfolio: "Selected Works",
    footer_nav_faq: "Practice & FAQ",
    footer_nav_contact: "Contact & Inquiries",
    footer_contact_heading: "Studio Contact",
    footer_email_link: "Email: ar.khan.alina@gmail.com",
    footer_location: "Location: United Arab Emirates",
    footer_rights: "© 2026 naz by nazish (Ar. Alina Nazish). All Rights Reserved.",
    footer_crafted: "Architecture • Spatial Design • Interior Architecture"
  },

  ar: {
    // Nav & Common
    nav_home: "الرئيسية",
    nav_services: "الخدمات المعمارية",
    nav_pricing: "الخدمات المعمارية",
    nav_portfolio: "معرض الأعمال",
    nav_faq: "المنهجية والأسئلة",
    nav_contact: "اتصل بنا",
    nav_book_consultation: "استفسار",
    mobile_chat_wa: "استفسار",
    lang_select_label: "اللغة:",

    // Hero
    hero_eyebrow: "المهندسة ألينا نزيش — مهندسة معمارية ومصممة مساحات",
    hero_title: "ناز باي نزيش",
    hero_tagline: "عمارة معاصرة، نقاء مكاني، وبيئات مصممة خصيصاً.",
    hero_desc: "تصميم فيلل سكنية مخصصة، وتصميم داخلي معماري فاخر، ومساحات تجارية وضيافة متميزة تم ابتكارها بتناغم إنشائي ومواد أصيلة وتخطيط مكاني دقيق في دولة الإمارات.",
    hero_badge: "تصميم معماري وتخطيط مكاني • الإمارات",
    btn_pricing_tiers: "استكشف خدماتنا",
    btn_services: "استكشف خدماتنا",
    btn_explore_portfolio: "الأعمال المختارة",
    metric_1_num: "+١٠",
    metric_1_label: "سنوات خبرة تصميمية",
    metric_2_num: "+٥٠",
    metric_2_label: "مشروع معماري منجز",
    metric_3_num: "١٠٠٪",
    metric_3_label: "رؤية معمارية مخصصة",

    // Framework
    framework_eyebrow: "الرؤية والمنهجية المعمارية",
    framework_title: "عمارة مستدامة ترتكز على التناسب والضوء",
    framework_subtitle: "نؤمن بأن العمارة الاستثنائية تنبع من التناغم بين المقياس الإنساني والضوء الطبيعي والمواد الأصيلة. تقود المهندسة ألينا نزيش كل مشروع من المفهوم الأولي حتى اكتمال التنفيذ.",
    step_1_title: "الدراسة الموقعية والمفهوم الأولي",
    step_1_desc: "تحليل الموقع ومسارات الضوء الطبيعي والكتل المعمارية وتدفق الحركة لوضع الأساس المكاني المتين للمشروع.",
    step_2_title: "التخطيط والتصميم المعماري",
    step_2_desc: "تخطيط مكاني ثنائي وثلاثي الأبعاد، وضبط النسب الإنشائية والمشاهد البصرية لتقديم تجربة معيشية راقية.",
    step_3_title: "المادية والتفاصيل التنفيذية",
    step_3_desc: "انتقاء الخامات النبيلة كالحجر الطبيعي والأخشاب الفاخرة والمعادن، مع إعداد المخططات الهندسية التنفيذية الدقيقة.",

    // Testimonial
    testimonial_quote: '"قدمت المهندسة ألينا وضوحاً معمارياً استثنائياً لمنزلنا. من إعادة التوزيع المكاني إلى تفاصيل النجارة المخصصة، وازن الاستوديو بين الرقي والراحة."',
    testimonial_role: "عميل فيلا خاصة • نخلة جميرا",

    // Services
    services_eyebrow: "مجالات الممارسة والخدمات",
    services_title: "الخدمات المعمارية الشاملة",
    services_subtitle: "من تصميم الفلل السكنية الخاصة إلى التحولات الداخلية الراقية والمساحات التجارية المبتكرة في الإمارات.",
    pricing_eyebrow: "مجالات الممارسة والخدمات",
    pricing_title: "الخدمات المعمارية الشاملة",
    pricing_subtitle: "من تصميم الفلل السكنية الخاصة إلى التحولات الداخلية الراقية والمساحات التجارية المبتكرة في الإمارات.",
    pricing_audience_note: "مشاريع معمارية مخصصة لأصحاب المنازل الخاصة، ومطوري الضيافة، والمشاريع التجارية المتميزة.",
    currency_aed: "",

    tier_1_eyebrow: "المجال الأول",
    tier_1_title: "العمارة السكنية والفيلل",
    tier_1_subtitle: "تصميم الفيلل الخاصة والمنازل المستقلة",
    tier_1_feat_1: "<strong>المفهوم المعماري وتصميم الواجهات</strong>",
    tier_1_feat_2: "<strong>المخططات وتوزيع الكتل الإنشائية</strong>",
    tier_1_feat_3: "<strong>دراسة تدفق الضوء والاتصال الخارجي</strong>",
    tier_1_feat_4: "إعداد رسومات الاعتماد ومطابقة المعايير",
    tier_1_btn: "استفسر عن مشروع سكني",

    tier_2_badge: "تخصص رئيسي",
    tier_2_eyebrow: "المجال الثاني",
    tier_2_title: "التصميم الداخلي المعماري",
    tier_2_subtitle: "البينتهاوس والمساكن الفاخرة والتجديد الشامل",
    tier_2_feat_1: "<strong>إعادة التخطيط المكاني والهندسي الشامل</strong>",
    tier_2_feat_2: "<strong>تفاصيل النجارة والأعمال الخشبية المخصصة</strong>",
    tier_2_feat_3: "مواصفات الخامات الفاخرة (ترافرتين، بلوط، نحاس)",
    tier_2_feat_4: "تصميم وتوزيع الإضاءة المعمارية المنسجمة",
    tier_2_feat_5: "رندرات واقعية ثلاثية الأبعاد ولوحات المواد",
    tier_2_btn: "استفسر عن تصميم داخلي معماري",

    tier_3_eyebrow: "المجال الثالث",
    tier_3_title: "العمارة التجارية والضيافة",
    tier_3_price: "حسب متطلبات المشروع",
    tier_3_subtitle: "المقاهي المختصة، المخابز الحرفية، والمعارض",
    tier_3_feat_1: "<strong>تخطيط تدفق الزوار ومسارات التشغيل</strong>",
    tier_3_feat_2: "تصميم كاونترات العرض ومنصات البار هندسياً",
    tier_3_feat_3: "هوية معمارية تجسد روح العلامة التجارية",
    tier_3_feat_4: "مخططات تنفيذية تفصيلية لجميع التركيبات",
    tier_3_feat_5: "التنسيق مع المقاولين ومتابعة التجهيز الميداني",
    tier_3_btn: "استفسر عن مشروع تجاري",

    pricing_bulk_note: "هل تبحث عن استشارات معمارية شاملة أو تخطيط لمشاريع متعددة؟",
    pricing_bulk_link: "تواصل مباشرة مع المهندسة ألينا نزيش لمناقشة مشروعك.",

    // Portfolio
    portfolio_eyebrow: "أبرز الأعمال والمشاريع",
    portfolio_title: "معرض المشاريع المعمارية والداخلية",
    portfolio_subtitle: "مجموعة مختارة من المساكن الراقية وشقق البينتهاوس والمساحات التجارية المميزة في دبي والإمارات.",
    filter_all: "جميع المشاريع",
    filter_residential: "١. العمارة السكنية",
    filter_commercial: "٢. الضيافة والتجاري",
    badge_residential: "سكني",
    badge_commercial: "تجاري",

    port_1_title: "بينتهاوس ذا هورايزون",
    port_1_loc: "داون تاون دبي",
    port_1_outcome: "٤،٢٠٠ قدم² • تخطيط مكاني شامل",
    port_1_desc: "إعادة هيكلة معمارية كاملة للمساحات الداخلية، أعمال خشبية مخصصة، وتأطير للضوء الطبيعي وإطلالات داون تاون دبي.",

    port_2_title: "فيلا سيرافينا",
    port_2_loc: "نخلة جميرا",
    port_2_outcome: "٦،٨٠٠ قدم² • فيلا شاطئية فاخرة",
    port_2_desc: "تصميم داخلي معماري يبرز المنحنيات العضوية، حجر الترافرتين الطبيعي، وتناغم المعيشة الشاطئية بين الداخل والخارج.",

    port_3_title: "الجناح البسيط المعاصر",
    port_3_loc: "دبي مارينا",
    port_3_outcome: "٢،١٠٠ قدم² • سكن برجي راقي",
    port_3_desc: "تحسين مكاني ووحدات تخزين جدارية مدمجة لخلق واحة حضرية هادئة مفعمة بالنور فوق مرسى دبي.",

    port_4_title: "المقر الرئاسي الخاص",
    port_4_loc: "إميريتس هيلز",
    port_4_outcome: "١،٨٥٠ قدم² • جناح نوم ومكتب خاص",
    port_4_desc: "تجديد معماري يضم كسوات خشبية صوتية من البلوط، ومكتب مدمج مدروس، وإضاءة هادئة مدروسة بعناية.",

    port_5_title: "أتيليه المخبز الحرفي",
    port_5_outcome: "١،٦٠٠ قدم² • مخبز حرفي",
    port_5_desc: "مفهوم معماري مبتكر، كاونترات عرض منحنية من التيرازو، وإضاءة دافئة مصممة خصيصاً لمخبز حرفي.",

    port_6_title: "بولانجيري لو بان دوريه",
    port_6_outcome: "١،٩٥٠ قدم² • مخبز فرنسي راقي",
    port_6_desc: "توزيع مدروس لحركة الزوار، تشطيبات ميكروسمنت راقية، وتصميم معماري لمنصات العرض يبرز المنتجات الطازجة.",

    port_7_title: "مقهى أورا التخصصي",
    port_7_outcome: "٢،٤٠٠ قدم² • مقهى ومحمصة",
    port_7_desc: "تصميم معماري هندسي لبار تحضير القهوة، معالجة صوتية للمساحة، وتوزيع جلسات عصري يحتفي بثقافة القهوة.",

    port_8_title: "محمصة ولاونج فيلفيت",
    port_8_outcome: "٢،٢٠٠ قدم² • صالة قهوة راقية",
    port_8_desc: "لمسات نحاسية ناعمة، أسطح خشب الجوز المضلع، وإضاءة حميمية مصممة لتجربة استثنائية.",

    lightbox_inquiry_btn: "استفسر عن مشروع معماري جديد",

    // FAQ
    faq_eyebrow: "المنهجية والأسئلة الشائعة",
    faq_title: "الأسئلة الأكثر شيوعاً",
    faq_subtitle: "إجابات شافية حول منهجيتنا التصميمية، الجداول الزمنية، تراخيص البناء، وآلية التعاون في المشاريع.",

    faq_q1: "ما هي الخدمات المعمارية والتصميمية التي يقدمها الاستوديو؟",
    faq_a1: "يتخصص استوديو ناز باي نزيش في التصميم المعماري المخصص للفيلل والمساكن الخاصة، والتصميم الداخلي المعماري وإعادة التخطيط المكاني للبينتهاوس والشقق الفاخرة، بالإضافة إلى تصميم المساحات التجارية والضيافة المبتكرة من المفهوم حتى الإنجاز. كما نوفر المخططات التنفيذية والإشراف الميداني في الإمارات.",

    faq_q_client: "من هم العملاء والمشاريع التي تتعاونون معها؟",
    faq_a_client: "نتعاون مع ملاك المنازل الخاصة الراغبين في بناء أو تجديد منازلهم، ورواد الأعمال في قطاع الضيافة والمقاهي والمتاجر الراقية، وكذلك المطورين العقاريين الباحثين عن بصمة معمارية متفردة في دبي والإمارات.",

    faq_q2: "كيف تسير مراحل العمل المعماري من الفكرة حتى الاكتمال؟",
    faq_a2: "تنقسم منهجيتنا إلى ٤ مراحل متكاملة: ١) دراسة الموقع ومتطلبات العميل، ٢) التخطيط المعماري والمخططات ثنائية وثلاثية الأبعاد، ٣) مواصفات المواد وجداول التشطيبات والمخططات التنفيذية، و٤) الإشراف الميداني وتنسيق التنفيذ لضمان الدقة.",

    faq_q3: "هل تقدمون المخططات التنفيذية وتنسيق اعتمادات الجهات الرسمية؟",
    faq_a3: "نعم. نقوم بإعداد حزم المخططات الهندسية والتنفيذية الكاملة (CAD/BIM) شاملة المخططات المعمارية، الواجهات الداخلية، تفاصيل النجارة المخصصة، وتنسيق المخططات الكهروميكانيكية والإضاءة مع الاستشاريين والمقاولين.",

    faq_q4: "هل يمكنكم التعاون مع مقاولينا المعتمدين أو ترشيح مقاولين مؤهلين؟",
    faq_a4: "نتعاون بمرونة مع المقاولين وشركات الديكور المعتمدة من قبلكم. وبفضل خبرتنا في الإمارات، يمكننا أيضاً ترشيح أفضل الحرفيين المتخصصين في أعمال الحجر والرخام والأعمال الخشبية لتنفيذ التفاصيل بدقة.",

    faq_q5: "ما هي المناطق الجغرافية التي يغطيها الاستوديو؟",
    faq_a5: "نقدم خدماتنا في جميع إمارات الدولة الـ ٧: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين، بالإضافة إلى استشارات تصميمية مختارة في دول مجلس التعاون الخليجي.",

    faq_q6: "كيف يمكننا بدء مشروع معماري جديد أو حجز استشارة؟",
    faq_a6: "يسعدنا تواصلكم عبر نموذج طلب المشروع أدناه أو مراسلة المهندسة ألينا نزيش مباشرة على ar.khan.alina@gmail.com مع تفاصيل موقع ونوع المشروع لترتيب جلسة استشارية أولية.",

    // Contact
    contact_eyebrow: "الاستفسارات والتواصل",
    contact_title: "ابدأ مشروعك المعماري مع المهندسة ألينا نزيش",
    contact_subtitle: "تواصل مباشرة مع المهندسة ألينا نزيش لمناقشة رؤيتك المعمارية لمشروعك السكني أو التجاري في الإمارات.",
    contact_subtitle_role: "المهندسة ألينا نزيش — مهندسة معمارية ومصممة مساحات",
    contact_email_title: "البريد الإلكتروني للاستوديو",
    contact_email_detail: "استفسارات معمارية مباشرة.",
    contact_email_link: "ar.khan.alina@gmail.com &larr;",
    contact_ig_title: "إنستغرام الاستوديو",
    contact_ig_detail: "كواليس التصميم، لقطات المواقع، والأعمال المكتملة.",
    contact_coverage_title: "نطاق الممارسة (جميع إمارات الدولة والخليج)",
    contact_coverage_list: "دبي • أبوظبي • الشارقة • عجمان • رأس الخيمة • الفجيرة • أم القيوين",
    form_title: "طلب استفسار معماري",
    form_subtitle: "شاركنا تفاصيل مشروعك لجدولة جلسة استشارة تصميمية أولية.",

    lbl_name: "الاسم الكامل",
    lbl_phone: "رقم الهاتف / واتساب",
    lbl_role: "أتواصل بصفتي...",
    opt_role_owner: "مالك منزل خاص / عميل فيلا",
    opt_role_agent: "صاحب مشروع تجاري أو ضيافة (مقهى / مطعم / متجر)",
    opt_role_dev: "مطور عقاري / مستثمر",

    lbl_location: "موقع المشروع",
    lbl_prop_type: "نوع المشروع المعماري",
    opt_type_apt: "تصميم داخلي معماري لبينتهاوس أو شقة فاخرة",
    opt_type_villa: "عمارة فيلا جديدة بالكامل",
    opt_type_office: "مساحة تجارية (مكتب / متجر / معرض)",
    opt_type_retail: "مساحة ضيافة (مقهى / مخبز / مطعم)",

    lbl_tier: "نطاق الخدمات المطلوبة",
    opt_tier_400: "العمارة السكنية والتخطيط المكاني",
    opt_tier_600: "التصميم الداخلي المعماري وتفاصيل النجارة المخصصة",
    opt_tier_custom: "تصميم شامل، مخططات تنفيذية، وإشراف ميداني",

    lbl_notes: "نبذة عن المشروع والتطلعات",
    placeholder_name: "مثال: سارة أحمد",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "اذكر المساحة التقريبية (قدم²)، التفضيلات التصميمية، والجدول الزمني...",
    btn_submit_request: "إرسال الاستفسار",

    // Footer
    footer_subtitle: "المهندسة ألينا نزيش — مهندسة معمارية ومصممة مساحات",
    footer_desc: "تصميم معماري معاصر، عمارة داخلية راقية، وتخطيط مكاني مدروس في دبي والإمارات.",
    footer_nav_heading: "التنقل السريع",
    footer_nav_home: "الرئيسية",
    footer_nav_pricing: "الخدمات المعمارية",
    footer_nav_portfolio: "الأعمال المختارة",
    footer_nav_faq: "المنهجية والأسئلة",
    footer_nav_contact: "التواصل والاستفسار",
    footer_contact_heading: "التواصل مع الاستوديو",
    footer_email_link: "البريد الإلكتروني: ar.khan.alina@gmail.com",
    footer_location: "الموقع: الإمارات العربية المتحدة",
    footer_rights: "© ٢٠٢٦ ناز باي نزيش (المهندسة ألينا نزيش). جميع الحقوق محفوظة.",
    footer_crafted: "عمارة • تخطيط مكاني • تصميم داخلي معماري"
  },

  ru: {
    // Nav & Common
    nav_home: "Главная",
    nav_services: "Услуги",
    nav_pricing: "Услуги",
    nav_portfolio: "Портфолио",
    nav_faq: "Практика и FAQ",
    nav_contact: "Контакты",
    nav_book_consultation: "Запрос",
    mobile_chat_wa: "Запрос",
    lang_select_label: "Язык:",

    // Hero
    hero_eyebrow: "АРХ. АЛИНА НАЗИШ — ВЕДУЩИЙ АРХИТЕКТОР И ДИЗАЙНЕР ПРОСТРАНСТВ",
    hero_title: "naz by nazish",
    hero_tagline: "Современная архитектура, пространственная чистота и авторские интерьеры.",
    hero_desc: "Проектирование частных вилл, премиальная интерьерная архитектура и общественные пространства, созданные с безупречной пространственной точностью и благородными материалами по всей территории ОАЭ.",
    hero_badge: "АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ И ПЛАНИРОВАНИЕ • ОАЭ",
    btn_pricing_tiers: "Наши направления",
    btn_services: "Наши направления",
    btn_explore_portfolio: "Избранные проекты",
    metric_1_num: "10+",
    metric_1_label: "Лет профессиональной практики",
    metric_2_num: "50+",
    metric_2_label: "Реализованных проектов",
    metric_3_num: "100%",
    metric_3_label: "Авторский подход",

    // Framework
    framework_eyebrow: "АРХИТЕКТУРНАЯ ФИЛОСОФИЯ",
    framework_title: "Вневременная архитектура, основанная на гармонии пропорций",
    framework_subtitle: "Мы убеждены, что выдающаяся архитектура рождается на стыке человеческого масштаба, естественного света и благородных материалов. Арх. Алина Назиш ведет каждый проект от концептуального эскиза до воплощения в материале.",
    step_1_title: "Контекст и концептуальный эскиз",
    step_1_desc: "Анализ инсоляции, ориентации по сторонам света, объемно-пространственных решений и функционального зонирования.",
    step_2_title: "Архитектурно-планировочные решения",
    step_2_desc: "Детальное 2D/3D планирование, выверенная геометрия пространства, композиция видовых точек и эргономика жизни.",
    step_3_title: "Материальность и рабочие чертежи",
    step_3_desc: "Подбор натурального камня, дерева и архитектурных металлов в сочетании с полным комплектом рабочей документации.",

    // Testimonial
    testimonial_quote: '"Арх. Алина привнесла исключительную архитектурную четкость в нашу резиденцию. От новой планировки до деталей мебели проект сочетает сдержанность и живой комфорт."',
    testimonial_role: "Частный заказчик • Palm Jumeirah",

    // Services
    services_eyebrow: "НАПРАВЛЕНИЯ ПРАКТИКИ",
    services_title: "Архитектурные услуги",
    services_subtitle: "От проектирования частных резиденций с нуля до изысканных интерьеров и знаковых коммерческих пространств в ОАЭ.",
    pricing_eyebrow: "НАПРАВЛЕНИЯ ПРАКТИКИ",
    pricing_title: "Архитектурные услуги",
    pricing_subtitle: "От проектирования частных резиденций с нуля до изысканных интерьеров и знаковых коммерческих пространств в ОАЭ.",
    pricing_audience_note: "Индивидуальное архитектурное проектирование для владельцев недвижимости, бизнеса и девелоперов.",
    currency_aed: "",

    tier_1_eyebrow: "НАПРАВЛЕНИЕ 01",
    tier_1_title: "Жилая архитектура",
    tier_1_subtitle: "Частные виллы и резиденции",
    tier_1_feat_1: "<strong>Концептуальное проектирование и фасады</strong>",
    tier_1_feat_2: "<strong>Объемно-планировочные решения</strong>",
    tier_1_feat_3: "<strong>Световые сценарии и связь с ландшафтом</strong>",
    tier_1_feat_4: "Согласование проектных решений и зонирование",
    tier_1_btn: "Запросить проект виллы",

    tier_2_badge: "КЛЮЧЕВАЯ ЭКСПЕРТИЗА",
    tier_2_eyebrow: "НАПРАВЛЕНИЕ 02",
    tier_2_title: "Интерьерная архитектура",
    tier_2_subtitle: "Пентхаусы, премиум-апартаменты и реновация",
    tier_2_feat_1: "<strong>Полная перепланировка и реструктуризация</strong>",
    tier_2_feat_2: "<strong>Авторские столярные изделия и узлы</strong>",
    tier_2_feat_3: "Благородные материалы (травертин, дуб, латунь)",
    tier_2_feat_4: "Архитектурное освещение и подсветка",
    tier_2_feat_5: "Фотореалистичная 3D-визуализация",
    tier_2_btn: "Запросить интерьерный проект",

    tier_3_eyebrow: "НАПРАВЛЕНИЕ 03",
    tier_3_title: "Коммерция и HoReCa",
    tier_3_price: "Индивидуальный проект",
    tier_3_subtitle: "Спешелти-кафе, пекарни и бутики",
    tier_3_feat_1: "<strong>Эргономика потоков гостей и персонала</strong>",
    tier_3_feat_2: "Проектирование зоны бара и витрин",
    tier_3_feat_3: "Уникальный брендированный интерьер",
    tier_3_feat_4: "Рабочая документация и чертежи мебели",
    tier_3_feat_5: "Авторский надзор и координация подрядчиков",
    tier_3_btn: "Запросить проект для бизнеса",

    pricing_bulk_note: "Интересует мастер-планирование, комплексные проекты или архитектурная консультация?",
    pricing_bulk_link: "Свяжитесь напрямую с арх. Алиной Назиш для обсуждения.",

    // Portfolio
    portfolio_eyebrow: "ИЗБРАННЫЕ РАБОТЫ",
    portfolio_title: "Архитектурное портфолио",
    portfolio_subtitle: "Коллекция реализованных жилых резиденций, видовых пентхаусов и авторских общественных пространств в Дубае и ОАЭ.",
    filter_all: "Все проекты",
    filter_residential: "1. Жилая архитектура",
    filter_commercial: "2. HoReCa и коммерция",
    badge_residential: "Жилая",
    badge_commercial: "Коммерческая",

    port_1_title: "Пентхаус The Horizon",
    port_1_loc: "Downtown Dubai",
    port_1_outcome: "390 м² • Реструктуризация",
    port_1_desc: "Полная архитектурная реструктуризация пространства, кастомные столярные изделия и панорамное остекление с видом на Downtown.",

    port_2_title: "Вилла Seraphina",
    port_2_loc: "Palm Jumeirah",
    port_2_outcome: "630 м² • Частная вилла",
    port_2_desc: "Архитектурный интерьер с органической геометрией, натуральным травертином и бесшовной связью с побережьем.",

    port_3_title: "Минималистичный сьют",
    port_3_loc: "Dubai Marina",
    port_3_outcome: "195 м² • Городской интерьер",
    port_3_desc: "Оптимизация планировки и монолитная встроенная мебель, формирующие безмятежное и светлое пространство.",

    port_4_title: "Резиденция Executive",
    port_4_loc: "Emirates Hills",
    port_4_outcome: "170 м² • Мастер-сьют и кабинет",
    port_4_desc: "Архитектурная реновация с акустическими панелями из дуба, встроенным рабочим местом и сценариями освещения.",

    port_5_title: "Крафтовая пекарня Artisan",
    port_5_outcome: "150 м² • Общественное пространство",
    port_5_desc: "Концептуальная архитектура, изогнутые витрины из терраццо и теплое освещение для ремесленной пекарни.",

    port_6_title: "Буланжери Le Pain Doré",
    port_6_outcome: "180 м² • HoReCa & Ритейл",
    port_6_desc: "Продуманная логистика гостей, микроцемент и эргономичные архитектурные витрины для выпечки.",

    port_7_title: "Спешелти-кофейня Aura",
    port_7_outcome: "220 м² • Кофейня и обжарка",
    port_7_desc: "Эргономика зоны бариста, акустическое зонирование и посадочные места в стилистике современного урбанизма.",

    port_8_title: "Лаундж-кофейня Velvet",
    port_8_outcome: "200 м² • Эспрессо-лаундж",
    port_8_desc: "Латунные акценты, фрезерованный орех и камерный свет для премиального лаунджа и десертного бара.",

    lightbox_inquiry_btn: "Обсудить аналогичный проект",

    // FAQ
    faq_eyebrow: "ВОПРОСЫ И ПРАКТИКА",
    faq_title: "Часто задаваемые вопросы",
    faq_subtitle: "Всё о нашем архитектурном подходе, сроках проектирования, согласованиях и надзоре за строительством.",

    faq_q1: "Какие архитектурные услуги предоставляет бюро?",
    faq_a1: "Бюро naz by nazish специализируется на авторском архитектурном проектировании частных резиденций и вилл, комплексной интерьерной архитектуре и реструктуризации элитных пентхаусов, а также проектировании пространств HoReCa (спешелти-кофейни, пекарни, бутики). Мы также разрабатываем детальную рабочую документацию и ведем авторский надзор.",

    faq_q_client: "С кем вы работаете и для кого проектируете?",
    faq_a_client: "Мы работаем с частными заказчиками, строящими дом мечты или реновирующими резиденцию, предпринимателями в сфере гостеприимства и ритейла, а также девелоперами, ценящими индивидуальный архитектурный почерк.",

    faq_q2: "Как устроен процесс работы над проектом от концепта до финала?",
    faq_a2: "Наша работа состоит из 4 этапов: 1) Исследование контекста и техническое задание, 2) Эскизная архитектура и 2D/3D планировка, 3) Подбор материалов и рабочая проектная документация, 4) Регулярный авторский надзор и координация мастеров на объекте.",

    faq_q3: "Разрабатываете ли вы рабочие чертежи и проектную документацию?",
    faq_a3: "Да. Мы готовим полный комплект чертежей CAD/BIM: кладочные планы, развертки стен, чертежи встроенной заказной мебели, планы электрики, освещения и сантехнических выводов.",

    faq_q4: "Работаете ли вы с нашими строителями или можете порекомендовать своих?",
    faq_a4: "Мы работаем со строительными командами заказчика, а также можем порекомендовать проверенных мастеров по камню, авторской мебели и финишным покрытиям в ОАЭ.",

    faq_q5: "В каких регионах вы работаете?",
    faq_a5: "Мы ведем проекты во всех 7 эмиратах ОАЭ (Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра, Умм-эль-Кувейн), а также берем выборочные консультационные проекты в странах Залива (GCC).",

    faq_q6: "Как начать сотрудничество или заказать проект?",
    faq_a6: "Заполните форму ниже или напишите напрямую арх. Алине Назиш на ar.khan.alina@gmail.com с описанием объекта и локации для назначения первичной консультации.",

    // Contact
    contact_eyebrow: "ЗАПРОСЫ И КОНТАКТЫ",
    contact_title: "Обсудить проект с арх. Алиной Назиш",
    contact_subtitle: "Свяжитесь напрямую с ведущим архитектором для обсуждения концепции вашей резиденции или коммерческого пространства в ОАЭ.",
    contact_subtitle_role: "Арх. Алина Назиш — Ведущий архитектор и дизайнер пространств",
    contact_email_title: "Email бюро",
    contact_email_detail: "Прямые архитектурные запросы.",
    contact_email_link: "ar.khan.alina@gmail.com &rarr;",
    contact_ig_title: "Instagram бюро",
    contact_ig_detail: "Процесс проектирования, стройка и готовые объекты.",
    contact_coverage_title: "ГЕОГРАФИЯ РАБОТЫ (ВСЕ 7 ЭМИРАТОВ И GCC)",
    contact_coverage_list: "Дубай • Абу-Даби • Шарджа • Аджман • Рас-эль-Хайма • Фуджейра • Умм-эль-Кувейн",
    form_title: "Архитектурный запрос",
    form_subtitle: "Заполните форму ниже для назначения первой проектной встречи.",

    lbl_name: "Ваше имя",
    lbl_phone: "Телефон / WhatsApp",
    lbl_role: "Вы обращаетесь как...",
    opt_role_owner: "Частный заказчик / Владелец виллы",
    opt_role_agent: "Владелец бизнеса (кафе, ресторан, ритейл)",
    opt_role_dev: "Девелопер / Инвестор",

    lbl_location: "Локация объекта",
    lbl_prop_type: "Тип проекта",
    opt_type_apt: "Интерьерная архитектура пентхауса или апартаментов",
    opt_type_villa: "Проектирование частной виллы с нуля",
    opt_type_office: "Коммерческое пространство (офис / шоурум)",
    opt_type_retail: "Пространство HoReCa (кафе / пекарня / ресторан)",

    lbl_tier: "Требуемый объем услуг",
    opt_tier_400: "Жилая архитектура и планировка",
    opt_tier_600: "Интерьерная архитектура и авторские столярные узлы",
    opt_tier_custom: "Полный проект под ключ с авторским надзором",

    lbl_notes: "О проекте и ваши пожелания",
    placeholder_name: "например, Алексей Иванов",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "Укажите площадь (кв. футы / метры), пожелания и ориентировочные сроки...",
    btn_submit_request: "Отправить запрос",

    // Footer
    footer_subtitle: "Арх. Алина Назиш — Ведущий архитектор и дизайнер пространств",
    footer_desc: "Современное архитектурное проектирование, интерьерная архитектура и выверенное зонирование пространств в ОАЭ.",
    footer_nav_heading: "Навигация",
    footer_nav_home: "Главная страница",
    footer_nav_pricing: "Услуги и направления",
    footer_nav_portfolio: "Портфолио (Жилая и коммерческая)",
    footer_nav_faq: "Часто задаваемые вопросы",
    footer_nav_contact: "Контакты и запросы",
    footer_contact_heading: "Прямые контакты",
    footer_email_link: "Email: ar.khan.alina@gmail.com",
    footer_location: "Локация: Объединенные Арабские Эмираты",
    footer_rights: "© 2026 naz by nazish (Арх. Алина Назиش). Все права защищены.",
    footer_crafted: "Архитектура • Пространственный дизайн • Интерьеры"
  }
};

let currentLang = localStorage.getItem('naz_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('naz_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl-active');
  } else {
    html.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl-active');
  }

  // Update active state on language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate all text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Trigger dynamic title update if needed
  if (window.updateI18nTitles) {
    window.updateI18nTitles();
  }
}

let isI18nListenerBound = false;

function initI18n() {
  if (!isI18nListenerBound) {
    isI18nListenerBound = true;
    
    // Global delegated click listener for language buttons (works across mobile and desktop)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const lang = btn.getAttribute('data-lang');
        if (lang) {
          setLanguage(lang);
        }
      }
    }, true);
  }

  // Initial set
  setLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', initI18n);

if (document.readyState !== 'loading') {
  initI18n();
}

// Global accessor
window.setLanguage = setLanguage;
window.translations = translations;

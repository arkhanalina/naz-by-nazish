/**
 * naz by nazish — Internationalization (i18n) Engine
 * Language support for English (default), Arabic (RTL), and Russian (LTR).
 */

const translations = {
  en: {
    // Nav & Common
    nav_home: "Home",
    nav_pricing: "Pricing Plans",
    nav_portfolio: "Portfolio",
    nav_faq: "FAQ",
    nav_contact: "Contact Us",
    nav_book_consultation: "Book Consultation",
    mobile_chat_wa: "Chat on WhatsApp (+971 50 000 0000)",
    lang_select_label: "Language:",

    // Hero
    hero_eyebrow: "AR. ALINA NAZISH — DESIGNER & PLANNER",
    hero_title: "naz by nazish",
    hero_tagline: "Transforming UAE property to Sell 3 times fast.",
    hero_desc: "High-impact property staging, layout optimization, and luxury interior design crafted to elevate property value and accelerate sales for owners and agents across UAE.",
    hero_badge: "BUILT FOR UAE PROPERTY OWNERS & REAL ESTATE AGENTS",
    btn_pricing_tiers: "View Pricing Tiers",
    btn_explore_portfolio: "Explore Portfolio",
    metric_1_num: "3x",
    metric_1_label: "Faster Listing Sale Speed",
    metric_2_num: "+18%",
    metric_2_label: "Price Elevation",
    metric_3_num: "100%",
    metric_3_label: "Tailored Staging",

    // Framework
    framework_eyebrow: "THE STAGING ADVANTAGE",
    framework_title: "Engineered for Rapid Real Estate Liquidity",
    framework_subtitle: "In the competitive UAE real estate portal environment, empty or poorly lit spaces get scrolled past. Ar. Alina Nazish applies spatial proportioning and architectural psychology to trigger immediate emotional buyer attachment.",
    step_1_title: "Spatial & Light Audit",
    step_1_desc: "We analyze your property's natural light flow, entry focal points, and room sightlines to establish a layout that emphasizes spaciousness and architectural elegance.",
    step_2_title: "Architectural Staging",
    step_2_desc: "Strategic furniture placement, luxury texture layering, and lighting curation create a sophisticated atmosphere that aligns with high-intent buyer expectations.",
    step_3_title: "High-Impact Media Kit",
    step_3_desc: "Professional architectural photography, cinematic video walkthroughs, and optimized portal ad draft descriptions ensure maximum viewings on Bayut & Property Finder.",

    // Testimonial
    testimonial_quote: '"Ar. Alina transformed our Dubai Marina penthouse layout in less than 48 hours. The professional photo and video kit attracted 12 viewings in week one and sold at 15% above our initial agent evaluation."',
    testimonial_role: "Senior Broker • Emaar Select Properties",

    // Pricing
    pricing_eyebrow: "TRANSPARENT PRICING",
    pricing_title: "Luxury Staging Tiers",
    pricing_subtitle: "Select the ideal staging and design package tailored to your property goals, timeframe, and budget in the UAE real estate market.",
    pricing_audience_note: "Designed for both Private Property Owners selling directly & Real Estate Brokers maximizing listing conversion.",
    currency_aed: "AED",

    tier_1_eyebrow: "ENTRY PACKAGE",
    tier_1_title: "Essential",
    tier_1_subtitle: "Staging Media & Listing Kit",
    tier_1_feat_1: "<strong>Professional Photo Shoot</strong> of your property",
    tier_1_feat_2: "<strong>Cinematic Video Walkthrough</strong> of Property",
    tier_1_feat_3: "<strong>Property Ad Draft Description</strong> (Optimized for Bayut & Property Finder)",
    tier_1_feat_4: "Color-Graded High-Resolution Media Files",
    tier_1_btn: "Book Essential Consultation",

    tier_2_badge: "MOST POPULAR",
    tier_2_eyebrow: "COMPLETE STAGING & LAYOUT",
    tier_2_title: "Most Popular",
    tier_2_subtitle: "Media Suite + Architectural Layout Plan",
    tier_2_feat_1: "<strong>ALL Features from Essential Package</strong> (Photos, Video & Ad Description)",
    tier_2_feat_2: "<strong>2D/3D Architectural Layout Design</strong> of your property",
    tier_2_feat_3: "Furniture Placement & Traffic Flow Optimization Plan",
    tier_2_feat_4: "Buyer Persona Spatial Styling Advice",
    tier_2_feat_5: "Priority Editing & VIP Support",
    tier_2_btn: "Book Most Popular Plan",

    tier_3_eyebrow: "FULL INTERIOR RENOVATION",
    tier_3_title: "Premium Custom",
    tier_3_price: "Custom Quote",
    tier_3_subtitle: "Quote after initial consultation",
    tier_3_feat_1: "<strong>Basic Renovation & Interior Design</strong>",
    tier_3_feat_2: "Complete Architectural Styling & Material Selection",
    tier_3_feat_3: "Contractor Supervision & On-Site Project Management",
    tier_3_feat_4: "White-Glove Physical Furniture & Decor Staging",
    tier_3_feat_5: "Full VIP Marketing Suite & Broker Open House Prep",
    tier_3_btn: "Request Custom Quote",

    pricing_bulk_note: "Need custom multi-unit staging for real estate developers or property management portfolios?",
    pricing_bulk_link: "Contact Ar. Alina Nazish for bulk rate packages.",

    // Portfolio
    portfolio_eyebrow: "ARCHITECTURAL SHOWCASE",
    portfolio_title: "Selected Staging & Design Portfolio",
    portfolio_subtitle: "Explore our transformation gallery strictly categorized into Residential and Commercial projects across Dubai and the UAE.",
    filter_all: "All Projects",
    filter_residential: "1. Residential (Apartments & Villas)",
    filter_commercial: "2. Commercial (Boutique & Corporate)",
    badge_residential: "Residential",
    badge_commercial: "Commercial",

    port_1_title: "Living + Dining",
    port_1_loc: "Downtown Dubai",
    port_1_outcome: "Sold in 10 Days",
    port_1_desc: "Complete spatial staging and lighting optimization for a 3-bedroom luxury apartment overlooking Burj Khalifa.",

    port_2_title: "Luxurious Living Room",
    port_2_loc: "Palm Jumeirah",
    port_2_outcome: "Under Contract in 14 Days",
    port_2_desc: "Architectural staging and layout design emphasizing coastal light, organic textures, and open-plan living.",

    port_3_title: "Kids Bedroom",
    port_3_loc: "Dubai Marina",
    port_3_outcome: "Rental Yield +22%",
    port_3_desc: "Modern interior refresh, 2D/3D layout redesign, and high-impact media production for an executive penthouse.",

    port_4_title: "Master bedroom with office",
    port_4_loc: "Emirates Hills",
    port_4_outcome: "Sold at Full Price",
    port_4_desc: "Basic renovation, wall treatment curation, and white-glove furniture staging for a sprawling private villa estate.",

    port_5_title: "DIFC Executive Suite",
    port_5_loc: "DIFC Corporate Hub",
    port_5_outcome: "Leased in 7 Days",
    port_5_desc: "Executive corporate suite staging focusing on warm luxury minimalist ergonomics and acoustic harmony.",

    port_6_title: "Business Bay Creative Studio",
    port_6_loc: "Business Bay",
    port_6_outcome: "100% Occupancy",
    port_6_desc: "Creative agency space spatial planning, custom lighting grids, and contemporary furniture staging.",

    port_7_title: "Jumeirah Retail Showroom",
    port_7_loc: "Jumeirah",
    port_7_outcome: "Boutique Showroom",
    port_7_desc: "Boutique retail showroom interior curation, facade lighting, and high-end display staging.",

    lightbox_wa_btn: "Inquire About Similar Property Transformation",

    // FAQ
    faq_eyebrow: "HELP & CLARITY",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Everything you need to know about our staging workflow, delivery timelines, pricing tiers, and real estate ROI across the UAE.",

    faq_q1: "How does property staging sell a UAE property 3 times faster?",
    faq_a1: "In the UAE market (especially on Bayut and Property Finder), over 90% of buyers filter properties based on initial photo quality and spatial layout. Staged properties create an immediate emotional connection, allowing buyers to visualize living in the space rather than focusing on empty rooms or layout flaws. This leads to significantly higher viewing requests and faster closing offers.",

    faq_q_client: "Do you work directly with property owners or real estate agents?",
    faq_a_client: "We work with both! Ar. Alina Nazish collaborates directly with individual property owners who are selling or leasing independently, as well as licensed real estate agents, brokers, and agency teams looking to elevate their listing presentation, increase portal click-through rates, and close sales faster across Dubai and the UAE.",

    faq_q2: "What is included in the Essential Package (499 AED)?",
    faq_a2: "The Essential tier is designed to give your property listing instant high-converting appeal. It includes a professional architectural photo shoot, a cinematic property video walkthrough, and a expertly crafted ad draft description optimized for high search positioning on real estate portals.",

    faq_q3: "Why choose the Most Popular Package (799 AED)?",
    faq_a3: "The Most Popular tier combines all photography, video, and ad copy deliverables from the Essential package with a custom 2D/3D architectural layout design. Having a clear 2D/3D layout enables buyers and brokers to understand room dimensions and optimal furniture arrangement immediately, eliminating spatial uncertainty.",

    faq_q4: "What is involved in the Premium Custom Renovation & Interior Design package?",
    faq_a4: "For older properties, distressed units, or high-end luxury villas that require basic structural updates or aesthetic overhauls, Ar. Alina Nazish provides turnkey interior design, material selection, contractor management, and physical furniture staging. Pricing is provided via custom quote following an initial site audit.",

    faq_q5: "Which areas in the UAE do you cover?",
    faq_a5: "We service properties across all UAE emirates: Dubai (Downtown, Palm Jumeirah, Dubai Marina, Business Bay, Hills Estate), Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",

    faq_q6: "How fast can a photo shoot or staging session be delivered?",
    faq_a6: "On-site shoots are typically scheduled within 24 to 48 hours of booking. All final edited photography, video assets, and ad descriptions are delivered within 48 hours post-shoot.",

    // Contact
    contact_eyebrow: "DIRECT CONSULTATION",
    contact_title: "Connect with Ar. Alina Nazish",
    contact_subtitle: "Ready to elevate your UAE property value and accelerate your sale speed? Get in touch via WhatsApp or submit your consultation request below.",
    contact_subtitle_role: "Ar. Alina Nazish — Designer & Planner",
    contact_wa_title: "WhatsApp Direct Line",
    contact_wa_detail: "Instant responses for bookings & property inquiries.",
    contact_ig_title: "Instagram",
    contact_ig_detail: "Behind-the-scenes staging walkthroughs & design reveals.",
    contact_coverage_title: "UAE SERVICE COVERAGE (ALL 7 EMIRATES)",
    contact_coverage_list: "Dubai • Abu Dhabi • Sharjah • Ajman • Ras Al Khaimah • Fujairah • Umm Al Quwain",
    form_title: "Book a Property Consultation",
    form_subtitle: "Fill out your details below to generate a pre-formatted WhatsApp request directly to Ar. Alina Nazish.",

    lbl_name: "Full Name",
    lbl_phone: "Phone / WhatsApp Number",
    lbl_role: "I am contacting as...",
    opt_role_owner: "Property Owner (Selling or Renting Directly)",
    opt_role_agent: "Real Estate Agent / Broker",
    opt_role_dev: "Property Developer / Investor",

    lbl_location: "Property Location",
    lbl_prop_type: "Property Type",
    opt_type_apt: "Residential Apartment",
    opt_type_villa: "Residential Villa / Townhouse",
    opt_type_office: "Commercial Office Space",
    opt_type_retail: "Boutique Retail Showroom",

    lbl_tier: "Select Preferred Tier",
    opt_tier_400: "Essential (499 AED) — Photos, Video & Ad Copy",
    opt_tier_600: "Most Popular (799 AED) — Media + 2D/3D Layout Design",
    opt_tier_custom: "Premium Custom — Renovation & Interior Design",

    lbl_notes: "Property Details / Special Requirements",
    placeholder_name: "e.g. Sarah Mansoor",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "Mention bedrooms, target sale timeline, or specific staging needs...",
    btn_submit_wa: "Send Request via WhatsApp (+971 50 000 0000)",

    // Footer
    footer_subtitle: "Ar. Alina Nazish — Designer & Planner",
    footer_desc: "Bespoke property staging, architectural layout design, and spatial optimization engineered to maximize real estate ROI and sale speeds across the UAE.",
    footer_nav_heading: "Navigation",
    footer_nav_home: "Home Page",
    footer_nav_pricing: "Pricing Plans (499 / 799 AED)",
    footer_nav_portfolio: "Portfolio (Residential & Commercial)",
    footer_nav_faq: "Frequently Asked Questions",
    footer_nav_contact: "Contact & Consultations",
    footer_contact_heading: "Direct Contact",
    footer_location: "Location: United Arab Emirates",
    footer_rights: "© 2026 naz by nazish (Ar. Alina Nazish). All Rights Reserved.",
    footer_crafted: "Crafted for UAE Luxury Real Estate Staging & Interior Transformation"
  },

  ar: {
    // Nav & Common
    nav_home: "الرئيسية",
    nav_pricing: "خطط الأسعار",
    nav_portfolio: "معرض الأعمال",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "اتصل بنا",
    nav_book_consultation: "حجز استشارة",
    mobile_chat_wa: "محادثة عبر الواتساب (+971 50 000 0000)",
    lang_select_label: "اللغة:",

    // Hero
    hero_eyebrow: "المهندسة ألينا نزيش — مصممة ومخططة معمارية",
    hero_title: "ناز باي نزيش",
    hero_tagline: "تحويل عقارات الإمارات للبيع أسرع ٣ مرات.",
    hero_desc: "تنسيق عقاري عالي التأثير، تحسين المخططات المعمارية، وتصميم داخلي فاخر صُمم خصيصاً لرفع قيمة العقار وتسريع البيع للمالكين والوكلاء العقاريين في جميع أنحاء الإمارات.",
    hero_badge: "صُمم لمالكي العقارات والوكلاء العقاريين في الإمارات",
    btn_pricing_tiers: "عرض خطط الأسعار",
    btn_explore_portfolio: "استكشاف الأعمال",
    metric_1_num: "٣ أضعاف",
    metric_1_label: "سرعة بيع العقارات",
    metric_2_num: "+١٨٪",
    metric_2_label: "زيادة في قيمة العقار",
    metric_3_num: "١٠٠٪",
    metric_3_label: "تنسيق مخصص للإمارات",

    // Framework
    framework_eyebrow: "مزية التنسيق المعماري",
    framework_title: "تصميم معماري لسرعة بيع وتأجير العقارات",
    framework_subtitle: "في سوق العقارات التنافسي في الإمارات، يتم تجاوز المساحات الشاغرة أو السيئة الإضاءة. تطبق المهندسة ألينا نزيش النسب المعمارية وعلم النفس المكاني لإثارة اهتمام المشتري فوراً.",
    step_1_title: "التدقيق المكاني والإضاءة",
    step_1_desc: "نحلل تدفق الضوء الطبيعي ونقاط الرؤية الأولى لإعداد مخطط يبرز اتساع المساحة وفخامتها المعمارية.",
    step_2_title: "التنسيق المعماري والتأثيث",
    step_2_desc: "ترتيب استراتيجي للأثاث ولمسات فاخرة تجعل العقار يبدو جاهزاً للسكن الراقي بما يلبي تطلعات المشترين.",
    step_3_title: "مجموعة الوسائط التسويقية",
    step_3_desc: "تصوير معماري احترافي وفيديو سينمائي مع وصف إعلاني محسن للحصول على أعلى نسبة مشاهدة في بيوت وبروبرتي فايندر.",

    // Testimonial
    testimonial_quote: '"قامت المهندسة ألينا بتحويل مخطط البينتهاوس في دبي مارينا خلال أقل من ٤٨ ساعة. جذب العرض ١٢ معاينة في الأسبوع الأول وتم البيع بأعلى من التقييم بـ ١٥٪."',
    testimonial_role: "كبير الوسطاء • إعمار سيلكت بروبرتيز",

    // Pricing
    pricing_eyebrow: "أسعار شفافة ومحددة",
    pricing_title: "باقات التنسيق الفاخر",
    pricing_subtitle: "اختر باقة التنسيق والتصميم المناسبة لأهداف عقارك وميزانيتك في سوق العقارات بدولة الإمارات.",
    pricing_audience_note: "صُمم لمالكي العقارات الشخصية والوكلاء العقاريين لزيادة نسبة المبيعات وإغلاق الصفقة.",
    currency_aed: "د.إ",

    tier_1_eyebrow: "الباقة الأساسية",
    tier_1_title: "الأساسية (Essential)",
    tier_1_subtitle: "وسائط التنسيق وإعداد الإعلان",
    tier_1_feat_1: "<strong>جلسة تصوير احترافية</strong> للعقار",
    tier_1_feat_2: "<strong>فيديو سينمائي جولة داخلية</strong> للعقار",
    tier_1_feat_3: "<strong>صياغة وصف إعلاني احترافي</strong> (محسن لمنصات بيوت وبروبرتي فايندر)",
    tier_1_feat_4: "ملفات وسائط فائقة الدقة معدلة الألوان",
    tier_1_btn: "حجز الباقة الأساسية (٤٩٩ د.إ)",

    tier_2_badge: "الأكثر طلباً",
    tier_2_eyebrow: "التنسيق والمخطط المعماري الكامل",
    tier_2_title: "الأكثر طلباً (Most Popular)",
    tier_2_subtitle: "باقة الوسائط + مخطط معماري 2D/3D",
    tier_2_feat_1: "<strong>جميع مميزات الباقة الأساسية</strong> (تصوير، فيديو، ووصف إعلاني)",
    tier_2_feat_2: "<strong>تصميم مخطط معماري 2D/3D</strong> للعقار",
    tier_2_feat_3: "خطة توزيع الأثاث وتحسين مسارات الحركة",
    tier_2_feat_4: "استشارات تنسيق موجهة لفئة المشترين المستهدفة",
    tier_2_feat_5: "أولوية التعديل ودعم خاص عبر الواتساب",
    tier_2_btn: "حجز الباقة الأكثر طلباً (٧٩٩ د.إ)",

    tier_3_eyebrow: "تجديد وتصميم داخلي كامل",
    tier_3_title: "التصميم والتجديد الفاخر",
    tier_3_price: "تسعير مخصص",
    tier_3_subtitle: "عرض سعر بعد الاستشارة الأولى",
    tier_3_feat_1: "<strong>تجديد أساسي وتصميم داخلي</strong>",
    tier_3_feat_2: "تنسيق معماري كامل واختيار المواد والديكور",
    tier_3_feat_3: "إشراف على المقاولين وإدارة المشروع ميدانياً",
    tier_3_feat_4: "تأثيث وتنسيق ميداني كامل للأثاث والديكور",
    tier_3_feat_5: "تجهيز كامل للعرض والتسويق الفاخر للوسطاء",
    tier_3_btn: "طلب عرض سعر مخصص",

    pricing_bulk_note: "هل تحتاج إلى تنسيق متعدد الوحدات للمطورين العقاريين أو المحافظ العقارية؟",
    pricing_bulk_link: "تواصل مع المهندسة ألينا نزيش للحصول على باقات الجملة.",

    // Portfolio
    portfolio_eyebrow: "معرض الأعمال المعمارية",
    portfolio_title: "أبرز مشاريع التنسيق والتصميم",
    portfolio_subtitle: "استكشف معرض التحولات العقارية المقسم إلى مشاريع سكنية وتجارية في دبي والإمارات.",
    filter_all: "جميع المشاريع",
    filter_residential: "١. سكني (شقق وفيلل)",
    filter_commercial: "٢. تجاري (معارض ومكاتب)",
    badge_residential: "سكني",
    badge_commercial: "تجاري",

    port_1_title: "معيشة + طعام",
    port_1_loc: "داون تاون دبي",
    port_1_outcome: "تم البيع خلال ١٠ أيام",
    port_1_desc: "تنسيق مكاني كامل وإعادة ضبط الإضاءة لشقة فاخرة من ٣ غرف تطل على برج خليفة.",

    port_2_title: "غرفة معيشة فاخرة",
    port_2_loc: "نخلة جميرا",
    port_2_outcome: "تم الاتفاق خلال ١٤ يوماً",
    port_2_desc: "تنسيق معماري وتصميم مخطط يبرز الضوء الساحلي والخامات الطبيعية والمساحات المفتوحة.",

    port_3_title: "غرفة نوم الأطفال",
    port_3_loc: "دبي مارينا",
    port_3_outcome: "زيادة العائد الإيجاري +٢٢٪",
    port_3_desc: "تحديث ديكور عصري، إعادة تصميم مخطط 2D/3D، وإنتاج وسائط تسويقية عالية الجودة.",

    port_4_title: "غرفة النوم الرئيسية مع مكتب",
    port_4_loc: "إميريتس هيلز",
    port_4_outcome: "تم البيع بالسعر الكامل",
    port_4_desc: "تجديد أساسي، اختيار طلاء وتأطير جدران، وتنسيق ميداني كامل لأثاث فيلا فاخرة.",

    port_5_title: "جناح تنفيذي في مركز دبي المالي",
    port_5_loc: "مركز دبي المالي العالمي",
    port_5_outcome: "تم التأجير خلال ٧ أيام",
    port_5_desc: "تنسيق مكتب تنفيذي يركز على الفخامة الهادئة والمرونة الصوتية وعناصر الإنتاجية.",

    port_6_title: "استوديو إبداعي في بيزنس باي",
    port_6_loc: "بيزنس باي",
    port_6_outcome: "نسبة إشغال ١٠٠٪",
    port_6_desc: "تخطيط مكاني لوكالة إبداعية، توزيع إضاءة مخصص، وتأثيث عصري راقي.",

    port_7_title: "معرض تجاري في جميرا",
    port_7_loc: "جميرا",
    port_7_outcome: "معرض بوتيك راقي",
    port_7_desc: "تنسيق فاخر لمعرض تجاري، إضاءة واجهات، وعرض منتجات مميز جذب العملاء.",

    lightbox_wa_btn: "استفسر عن تحويل عقاري مشابه",

    // FAQ
    faq_eyebrow: "المساعدة والوضوح",
    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "كل ما تحتاج معرفته عن خطوات العمل، المواعيد، خطط الأسعار والعائد على الاستثمار في دولة الإمارات.",

    faq_q1: "كيف يساهم التنسيق العقاري في بيع العقار أسرع ٣ مرات في الإمارات؟",
    faq_a1: "في سوق الإمارات (خاصة عبر بيوت وبروبرتي فايندر)، يختار أكثر من ٩٠٪ من المشترين العقار بناءً على جودة الصور والمخطط. العقارات المنسقة تجذب المشترين عاطفياً وتسمح لهم بتخيل العيش فيها، مما يرفع طلبات المعاينة ويسرع إغلاق صفقات البيع.",

    faq_q_client: "هل تعملون مباشرة مع مالكي العقارات أم الوكلاء العقاريين؟",
    faq_a_client: "نعمل مع الاثنين! تتعاون المهندسة ألينا نزيش مباشرة مع المالكين الأفراد، وكذلك مع الوكلاء العقاريين والوسائط والشركات الراغبة في تحسين عروض العقارات وزيادة المبيعات في دبي والإمارات.",

    faq_q2: "ماذا تتضمن الباقة الأساسية (٤٩٩ درهم)؟",
    faq_a2: "صُممت الباقة الأساسية لإعطاء إعلانك جاذبية فورية. تتضمن جلسة تصوير احترافية، جولة فيديو سينمائية، ووصف إعلاني مصاغ باحترافية لزيادة ظهورك في محركات البحث.",

    faq_q3: "لماذا تختار الباقة الأكثر طلباً (٧٩٩ درهم)؟",
    faq_a3: "تجمع الباقة الأكثر طلباً بين جميع خدمات التصوير والفيديو مع تصميم مخطط معماري 2D/3D. المخطط الواضح يساعد المشترين والوسطاء على فهم أبعاد الغرف وتوزيع الأثاث فوراً.",

    faq_q4: "ماذا تشمل باقة التجديد والتصميم الداخلي الفاخر المخصص؟",
    faq_a4: "للعقارات القديمة أو الفيلل الفاخرة التي تحتاج إلى تجديد أو تعديل ديكور، تقدم المهندسة ألينا نزيش خدمات التصوير واختيار المواد والإشراف الميداني والتأثيث الكامل. يتم تقديم تسعير مخصص بعد التدقيق الأول.",

    faq_q5: "ما هي المناطق التي تغطونها في الإمارات؟",
    faq_a5: "نخدم العقارات في جميع إمارات الدولة الـ ٧: دبي (داون تاون، نخلة جميرا، دبي مارينا، بيزنس باي، دبي هيلز)، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين.",

    faq_q6: "ما هي السرعة التي يمكن تسليم جلسة التصوير أو التنسيق بها؟",
    faq_a6: "يتم جدولة التصوير الميداني خلال ٢٤ إلى ٤٨ ساعة من الحجز. ويتم تسليم الصور المعدلة والفيديوهات والوصف الإعلاني خلال ٤٨ ساعة بعد التصوير.",

    // Contact
    contact_eyebrow: "استشارة معمارية مباشرة",
    contact_title: "التواصل مع المهندسة ألينا نزيش",
    contact_subtitle: "هل أنت مستعد لرفع قيمة عقارك وتسريع البيع؟ تواصل معنا عبر الواتساب أو أرسل تفاصيل طلبك أدناه.",
    contact_subtitle_role: "المهندسة ألينا نزيش — مصممة ومخططة معمارية",
    contact_wa_title: "خط الواتساب المباشر",
    contact_wa_detail: "استجابة فورية للحجوزات والاستفسارات العقارية.",
    contact_ig_title: "إنستغرام",
    contact_ig_detail: "جولات كواليس التنسيق والتصاميم الفاخرة.",
    contact_coverage_title: "تغطية الخدمات في الإمارات (جميع الإمارات الـ ٧)",
    contact_coverage_list: "دبي • أبوظبي • الشارقة • عجمان • رأس الخيمة • الفجيرة • أم القيوين",
    form_title: "حجز استشارة عقارية",
    form_subtitle: "أدخل تفاصيل عقارك أدناه لإرسال طلب مجهز مباشرة عبر الواتساب إلى المهندسة ألينا نزيش.",

    lbl_name: "الاسم الكامل",
    lbl_phone: "رقم الهاتف / الواتساب",
    lbl_role: "أتواصل بصفتي...",
    opt_role_owner: "مالك عقار شخصي (بيع أو تأجير مباشر)",
    opt_role_agent: "وكيل عقاري / وسيط",
    opt_role_dev: "مطور عقاري / مستثمر",

    lbl_location: "موقع العقار",
    lbl_prop_type: "نوع العقار",
    opt_type_apt: "شقة سكنية",
    opt_type_villa: "فيلا سكنية / تاون هاوس",
    opt_type_office: "مكتب تجاري",
    opt_type_retail: "معرض تجاري بوتيك",

    lbl_tier: "اختر الباقة المفضلة",
    opt_tier_400: "الباقة الأساسية (٤٩٩ د.إ) — تصوير وفيديو ووصف إعلاني",
    opt_tier_600: "الباقة الأكثر طلباً (٧٩٩ د.إ) — باقة الوسائط + مخطط معماري 2D/3D",
    opt_tier_custom: "تصميم وتجديد فاخر مخصص — استشارة وتجديد شامل",

    lbl_notes: "تفاصيل العقار والاحتياجات المحددة",
    placeholder_name: "مثال: سارة أحمد",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "اذكر عدد الغرف، الجدول الزمني المستهدف، أو احتياجات التنسيق الخاص...",
    btn_submit_wa: "إرسال الطلب عبر الواتساب (+971 50 000 0000)",

    // Footer
    footer_subtitle: "المهندسة ألينا نزيش — مصممة ومخططة معمارية",
    footer_desc: "خدمات التنسيق العقاري الفاخر، التصميم المعماري، وتحسين المساحات المصممة خصيصاً لزيادة العائد الاستثماري وتسريع البيع في الإمارات.",
    footer_nav_heading: "التنقل السريع",
    footer_nav_home: "الصفحة الرئيسية",
    footer_nav_pricing: "خطط الأسعار (٤٩٩ / ٧٩٩ د.إ)",
    footer_nav_portfolio: "معرض الأعمال (سكني وتجاري)",
    footer_nav_faq: "الأسئلة الشائعة",
    footer_nav_contact: "التواصل والاستشارات",
    footer_contact_heading: "التواصل المباشر",
    footer_location: "الموقع: الإمارات العربية المتحدة",
    footer_rights: "© ٢٠٢٦ ناز باي نزيش (المهندسة ألينا نزيش). جميع الحقوق محفوظة.",
    footer_crafted: "صُمم لتنسيق العقارات الفاخرة والتحول الداخلي في دولة الإمارات"
  },

  ru: {
    // Nav & Common
    nav_home: "Главная",
    nav_pricing: "Тарифы",
    nav_portfolio: "Портфолио",
    nav_faq: "FAQ",
    nav_contact: "Контакты",
    nav_book_consultation: "Консультация",
    mobile_chat_wa: "Написать в WhatsApp (+971 50 000 0000)",
    lang_select_label: "Язык:",

    // Hero
    hero_eyebrow: "АРХ. АЛИНА НАЗИШ — ДИЗАЙНЕР И ПРОЕКТИРОВЩИК",
    hero_title: "naz by nazish",
    hero_tagline: "Преображение недвижимости в ОАЭ для продажи в 3 раза быстрее.",
    hero_desc: "Эффективный хоум-стейджинг, оптимизация планировок и премиальный дизайн интерьера для повышения стоимости объектов и ускорения продаж по всем ОАЭ.",
    hero_badge: "СОЗДАНО ДЛЯ СОБСТВЕННИКОВ И РИЕЛТОРОВ В ОАЭ",
    btn_pricing_tiers: "Посмотреть тарифы",
    btn_explore_portfolio: "Смотреть портфолио",
    metric_1_num: "в 3 раза",
    metric_1_label: "Быстрее продажа объекта",
    metric_2_num: "+18%",
    metric_2_label: "Рост стоимости",
    metric_3_num: "100%",
    metric_3_label: "Адаптировано под ОАЭ",

    // Framework
    framework_eyebrow: "ПРЕИМУЩЕСТВА СТЕЙДЖИНГА",
    framework_title: "Создано для быстрой реализации недвижимости",
    framework_subtitle: "На конкурентном рынке ОАЭ пустые или плохо освещенные объекты пролистывают. Арх. Алина Назиш использует пропорции пространства и архитектурную психологию для мгновенного отклика покупателя.",
    step_1_title: "Аудит пространства и света",
    step_1_desc: "Мы анализируем естественный свет и визуальные акценты для создания планировки, подчеркивающей простор и архитектурную элегантность.",
    step_2_title: "Архитектурный стейджинг",
    step_2_desc: "Стратегическая расстановка мебели и премиальный декор создают атмосферу готового элитного жилья высокого уровня.",
    step_3_title: "Медиакит высокого разрешения",
    step_3_desc: "Профессиональная фотосессия, видеообзор и продающее описание для максимальных просмотров на Bayut & Property Finder.",

    // Testimonial
    testimonial_quote: '"Арх. Алина преобразила пентхаус в Dubai Marina менее чем за 48 часов. Контент привлек 12 просмотров за первую неделю, и объект был продан на 15% дороже первоначальной оценки."',
    testimonial_role: "Старший брокер • Emaar Select Properties",

    // Pricing
    pricing_eyebrow: "ПРОЗРАЧНЫЕ ТАРИФЫ",
    pricing_title: "Тарифы хоум-стейджинга",
    pricing_subtitle: "Выберите идеальный пакет стейджинга для ваших целей, сроков и бюджета на рынке недвижимости ОАЭ.",
    pricing_audience_note: "Создано для частных собственников и риелторов для максимальной конверсии и быстрой продажи.",
    lbl_tier: "Выберите интересующий пакет",
    opt_tier_400: "499 AED — Фото, видео и описание",
    opt_tier_600: "799 AED — Медиапакет + План 2D/3D",
    opt_tier_custom: "Индивидуальный ремонт и дизайн",

    lbl_notes: "Детали объекта и пожелания",
    placeholder_name: "например, Алексей Иванов",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "Укажите число комнат, желаемые сроки или пожелания по стейджингу...",
    btn_submit_wa: "Отправить заявку в WhatsApp (+971 50 000 0000)",

    // Footer
    footer_subtitle: "Арх. Алина Назиш — Дизайнер и проектировщик",
    footer_desc: "Элитный хоум-стейджинг, архитектурное проектирование и оптимизация пространства для максимального ROI и быстрых продаж в ОАЭ.",
    footer_nav_heading: "Навигация",
    footer_nav_home: "Главная страница",
    footer_nav_pricing: "Тарифы (499 / 799 AED)",
    tier_2_subtitle: "Медиапакет + Архитектурный план 2D/3D",
    tier_2_feat_1: "<strong>Все опции Базового пакета</strong> (фото, видео, описание)",
    tier_2_feat_2: "<strong>Архитектурный план 2D/3D</strong> вашего объекта",
    tier_2_feat_3: "План расстановки мебели и эргономики пространства",
    tier_2_feat_4: "Рекомендации по стилю под целевого покупателя",
    tier_2_feat_5: "Приоритетная обработка и VIP-поддержка",
    tier_2_btn: "Заказать Премиум (799 AED)",

    tier_3_eyebrow: "ПОЛНЫЙ РЕМОНТ И ДИЗАЙН",
    tier_3_title: "Индивидуальный Ремонт",
    tier_3_price: "Расчет по запросу",
    tier_3_subtitle: "Оценка стоимости после первой консультации",
    tier_3_feat_1: "<strong>Базовый ремонт и дизайн интерьера</strong>",
    tier_3_feat_2: "Полный подбор материалов, декора и мебели",
    tier_3_feat_3: "Контроль подрядчиков и управление проектом на объекте",
    tier_3_feat_4: "Полная меблировка и декорирование объекта",
    tier_3_feat_5: "Полная подготовка объекта к открытому показу",
    tier_3_btn: "Запросить расчет стоимости",

    pricing_bulk_note: "Нужен хоум-стейджинг для нескольких объектов застройщиков или агентств?",
    pricing_bulk_link: "Свяжитесь с арх. Алиной Назиш для спецпредложений.",

    // Portfolio
    portfolio_eyebrow: "АРХИТЕКТУРНОЕ ПОРТФОЛИО",
    portfolio_title: "Избранные проекты стейджинга",
    portfolio_subtitle: "Галерея преображения жилой и коммерческой недвижимости в Дубае и по всем ОАЭ.",
    filter_all: "Все проекты",
    filter_residential: "1. Жилая (Квартиры и виллы)",
    filter_commercial: "2. Коммерческая (Офисы и шоурумы)",
    badge_residential: "Жилая",
    badge_commercial: "Коммерческая",

    port_1_title: "Гостиная + Столовая",
    port_1_loc: "Downtown Dubai",
    port_1_outcome: "Продано за 10 дней",
    port_1_desc: "Полный стейджинг пространства и световой дизайн для 3-комнатных апартаментов с видом на Бурдж-Халифа.",

    port_2_title: "Роскошная гостиная",
    port_2_loc: "Palm Jumeirah",
    port_2_outcome: "Сделка за 14 дней",
    port_2_desc: "Архитектурный стейджинг с акцентом на морской свет, натуральные текстуры и открытую планировку.",

    port_3_title: "Детская спальня",
    port_3_loc: "Dubai Marina",
    port_3_outcome: "Рост доходности +22%",
    port_3_desc: "Обновление интерьера, план 2D/3D и создание высокого качества медиаконтента для видового пентхауса.",

    port_4_title: "Главная спальня с кабинетом",
    port_4_loc: "Emirates Hills",
    port_4_outcome: "Продано по полной цене",
    port_4_desc: "Базовый ремонт, акцентный декор стен и подбор премиальной мебели для частной виллы.",

    port_5_title: "Офис в DIFC",
    port_5_loc: "DIFC, Дубай",
    port_5_outcome: "Сдано за 7 дней",
    port_5_desc: "Стейджинг представительского офиса с акцентом на тихий люкс, эргономику и акустический комфорт.",

    port_6_title: "Студия в Business Bay",
    port_6_loc: "Business Bay",
    port_6_outcome: "Заполняемость 100%",
    port_6_desc: "Планировка пространства для креативного агентства, индивидуальный свет и стильная мебель.",

    port_7_title: "Шоурум в Jumeirah",
    port_7_loc: "Jumeirah",
    port_7_outcome: "Бутик-шоурум",
    port_7_desc: "Дизайн и стейджинг коммерческого шоурума, подсветка фасада и витрин.",

    lightbox_wa_btn: "Узнать о похожем проекте",

    // FAQ
    faq_eyebrow: "ВОПРОСЫ И ОТВЕТЫ",
    faq_title: "Часто задаваемые вопросы",
    faq_subtitle: "Всё, что вам нужно знать о процессе стейджинга, сроках, тарифах и окупаемости в ОАЭ.",

    faq_q1: "Как хоум-стейджинг помогает продать недвижимость в ОАЭ в 3 раза быстрее?",
    faq_a1: "На рынке ОАЭ более 90% покупателей выбирают объекты по качеству фото и планировке. Подготовленные объекты вызывают эмоциональный отклик, увеличивают число просмотров и ускоряют закрытие сделки.",

    faq_q_client: "Вы работаете с собственниками или с агентствами недвижимости?",
    faq_a_client: "Мы работаем и с теми, и с другими! Арх. Алина Назиш сотрудничает напрямую с владельцами недвижимости, а также с риелторами и брокерскими агентствами.",

    faq_q2: "Что входит в Базовый пакет (499 AED)?",
    faq_a2: "Базовый пакет включает профессиональную фотосессию, видеообзор интерьера и продающее описание для верхних позиций на порталах.",

    faq_q3: "Почему стоит выбрать пакет за 799 AED?",
    faq_a3: "Пакет объединяет фото, видео, описание и архитектурный план 2D/3D. Понятная планировка позволяет покупателям сразу оценить эргономику.",

    faq_q4: "Что входит в пакет Индивидуального ремонта и дизайна?",
    faq_a4: "Для объектов, требующих ремонта или обновления, Арх. Алина Назиш обеспечивает дизайн под ключ, выбор материалов, управление подрядчиками и стейджинг.",

    faq_q5: "Какие эмираты вы обслуживаете?",
    faq_a5: "Мы обслуживаем объекты во всех 7 эмиратах ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кувейн.",

    faq_q6: "Как быстро выполняются работы?",
    faq_a6: "Выезд на объект планируется в течение 24–48 часов. Готовые фото, видео и описание предоставляются через 48 часов после съемки.",

    // Contact
    contact_eyebrow: "ПРЯМАЯ КОНСУЛЬТАЦИЯ",
    contact_title: "Связаться с арх. Алиной Назиш",
    contact_subtitle: "Готовы повысить стоимость объекта и ускорить продажу в ОАЭ? Напишите в WhatsApp или заполните форму ниже.",
    contact_subtitle_role: "Арх. Алина Назиш — Дизайнер и проектировщик",
    contact_wa_title: "Прямой WhatsApp",
    contact_wa_detail: "Быстрые ответы по бронированию и объектам.",
    contact_ig_title: "Instagram",
    contact_ig_detail: "Закулисье проектов и видеообзоры.",
    contact_coverage_title: "ЗОНА ОБСЛУЖИВАНИЯ В ОАЭ (ВСЕ 7 ЭМИРАТОВ)",
    contact_coverage_list: "Дубай • Абу-Даби • Шарджа • Аджман • Рас-эль-Хайма • Фуджейра • Умм-эль-Кувейн",
    form_title: "Записаться на консультацию",
    form_subtitle: "Заполните форму ниже для отправки готового сообщения в WhatsApp арх. Алине Назиш.",

    lbl_name: "Полное имя",
    lbl_phone: "Телефон / WhatsApp",
    lbl_role: "Я обращаюсь как...",
    opt_role_owner: "Частный собственник (продажа/аренда)",
    opt_role_agent: "Риелтор / Брокер",
    opt_role_dev: "Застройщик / Инвестор",

    lbl_location: "Расположение объекта",
    lbl_prop_type: "Тип недвижимости",
    opt_type_apt: "Жилые апартаменты",
    opt_type_villa: "Вилла / Таунхаус",
    opt_type_office: "Офисное помещение",
    opt_type_retail: "Торговый шоуруم",

    lbl_tier: "Выберите интересующий пакет",
    opt_tier_400: "499 AED — Фото, видео и описание",
    opt_tier_600: "799 AED — Медиапакет + План 2D/3D",
    opt_tier_custom: "Индивидуальный ремонт и дизайн",

    lbl_notes: "Детали объекта и пожелания",
    placeholder_name: "например, Алексей Иванов",
    placeholder_phone: "+971 50 000 0000",
    placeholder_notes: "Укажите число комнат, желаемые сроки или пожелания по стейджиنгу...",
    btn_submit_wa: "Отправить заявку в WhatsApp (+971 50 000 0000)",

    // Footer
    footer_subtitle: "Арх. Алина Назиш — Дизайнер и проектировщик",
    footer_desc: "Элитный хоум-стейджинг, архитектурное проектирование и оптимизация пространства для максимального ROI и быстрых продаж в ОАЭ.",
    footer_nav_heading: "Навигация",
    footer_nav_home: "Главная страница",
    footer_nav_pricing: "Тарифы (499 / 799 AED)",
    footer_nav_portfolio: "Портфолио (Жилая и коммерческая)",
    footer_nav_faq: "Часто задаваемые вопросы",
    footer_nav_contact: "Контакты и консультации",
    footer_contact_heading: "Прямые контакты",
    footer_location: "Локация: Объединенные Арабские Эмираты",
    footer_rights: "© 2026 naz by nazish (Арх. Алина Назиш). Все права защищены.",
    footer_crafted: "Создано для элитного хоум-стейджинга и дизайна в ОАЭ"
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

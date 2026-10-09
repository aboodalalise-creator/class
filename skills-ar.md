# دليل سكيلز prompts.chat بالعربي

كل السكيلز الموجودة في مكتبة [prompts.chat](https://prompts.chat/skills) (83 سكيل)، مع وصف عربي ورابط لكل واحدة، مقسّمة حسب المجال.

> **ما هي السكيل؟** مجلد فيه ملف `SKILL.md` (تعليمات) وأحياناً سكربتات ومراجع. عند تثبيتها في Claude Code يقرأ Claude وصفها ويستخدمها تلقائياً عندما يطابق طلبك وصفها، أو تشغّلها يدوياً بكتابة `/اسم-السكيل`.

> ⚠️ السكيلز يكتبها أي مستخدم ولم تُراجع رسمياً. اقرأ السكيل قبل تثبيتها، خصوصاً التي تحتوي سكربتات أو تتصل بخدمات خارجية.

## طريقة التثبيت

1. افتح رابط السكيل وانسخ محتوى ملف `SKILL.md` (والملفات المرفقة إن وُجدت).
2. أنشئ مجلداً باسم السكيل داخل `.claude/skills/` في مشروعك (أو `~/.claude/skills/` لكل مشاريعك).
3. ضع فيه ملف `SKILL.md`، ثم افتح جلسة Claude Code جديدة.
4. في claude.ai: الإعدادات ← Capabilities ← Skills، وارفع ملف zip فيه مجلد السكيل.

## 🎓 التعليم والشرح

| السكيل | الوصف | الرابط |
|---|---|---|
| `lesson-plan-timing-checker` | يصمم خطط دروس بأهداف قابلة للقياس وتوقيت دقيق لكل نشاط، ويفحص الخطة بسكربت يكشف تجاوز الوقت والأهداف بلا تقويم. | [فتح](https://prompts.chat/prompts/cmuz82k2l000njy045jzh27v0_lesson-plan-designer-and-timing-checker) |
| `eli8` | يشرح أي مفهوم معقد بلغة بسيطة كأنك طفل عمره 8 سنوات. | [فتح](https://prompts.chat/prompts/cmmg5hsu40001jr04rlpncucc_explain-like-i-am-8) |
| `socratic-lens` | يركّز على الأسئلة نفسها: أي سؤال يغيّر مسار النقاش فعلاً وأيها لا يضيف شيئاً. | [فتح](https://prompts.chat/prompts/cmlcbncuq0005ky04a39ncbn4_socratic-lens) |
| `scientific-paper-drafting-assistant` | يساعد في كتابة أوراق علمية من بيانات تحليلية (DSC، TG، الأشعة تحت الحمراء) بصيغة جاهزة للنشر. | [فتح](https://prompts.chat/prompts/cmn8czilt0001l404k64fdf59_scientific-paper-drafting-assistant) |

## ✍️ الكتابة واللغة

| السكيل | الوصف | الرابط |
|---|---|---|
| `inclusive-language-tone-reviewer` | يراجع نصوص الواجهات والتسويق والمساعدة بحثاً عن لغة إقصائية أو نبرة قاسية، ويقترح صياغات بديلة. | [فتح](https://prompts.chat/prompts/cmuxrs12x0001oy06w87c7lw6_inclusive-language-and-tone-reviewer) |
| `incident-timeline-writer` | يحوّل ملاحظات حادثة أو مشكلة عشوائية إلى خط زمني واضح وملخص أثر وخطوات متابعة. | [فتح](https://prompts.chat/prompts/cmuvoufag0001qx06quv3jite_incident-timeline-writer) |
| `structural-fusion-the-thriller-parable` | برومبت منظّم لكتابة سلسلة قصصية تمزج التشويق بالحكاية الرمزية ببنية سرد مزدوجة. | [فتح](https://prompts.chat/prompts/cmr4thjgd0001l704xc3jx8ys_structural-fusion-the-thriller-parable) |
| `dicompress-dual-language-semantic-hypercompressor` | يترجم بين الإنجليزية والفارسية بأقصر عبارة تحفظ المعنى والنبرة. | [فتح](https://prompts.chat/prompts/cmshknjsk0001ic04e13xukn4_dicompress-dual-language-semantic-hypercompressor) |

## 🤖 البرومبتات والذكاء الاصطناعي

| السكيل | الوصف | الرابط |
|---|---|---|
| `prompt-engineering-expert` | خبرة شاملة في هندسة البرومبتات وتصميم التعليمات المخصصة وتحسينها خطوة بخطوة. | [فتح](https://prompts.chat/prompts/cmlb8cqbo0001l504wxxjlh2l_prompt-engineering-expert) |
| `prompt-refiner` | يحوّل الطلبات الخام أو الفوضوية إلى برومبتات احترافية مختصرة لـ GPT وClaude وGemini. | [فتح](https://prompts.chat/prompts/cmng63hxo0001jg044rice18j_prompt-refiner) |
| `prompt-architect` | يعيد صياغة طلبك كبرومبت محسّن ومنظم باستخدام أُطر عمل واضحة. | [فتح](https://prompts.chat/prompts/cmkfa1erj0001i70439kmrrih_master-prompt-architect-context-engineer) |
| `kp-prompting` | يكتب مواصفات المهام ومعايير التحقق وإعداد Claude Code بأسلوب أندريه كارباثي. | [فتح](https://prompts.chat/prompts/cmrgsn3ul0004l204b8k7mgrf_kp-prompting) |
| `expertlens-lite` | يجعل الذكاء الاصطناعي شريك تفكير خبيراً: يشخّص المشكلة الحقيقية ويراجع نفسه ويعطي توصية واضحة. | [فتح](https://prompts.chat/prompts/cmtihooyr0001l504w9yfw9e6_expertlens-lite) |
| `pc-skill-creator` | دليل لإنشاء سكيلز جديدة أو تحديثها لتوسيع قدرات Claude. (الاسم الأصلي: skill-creator) | [فتح](https://prompts.chat/prompts/cmkfmnaro0003ld04klts1ln9_skill-creator) |
| `skill-maintenance-audit` | تدقيق للسكيلز الموجودة: تعليمات قديمة، تعارض في التشغيل، مراجع مكسورة، تضخم في السياق. | [فتح](https://prompts.chat/prompts/cmuwbt3p80004qs06iif6z1q1_skill-maintenance-audit) |
| `skill-master` | يحلل أنماط الكود في المستودع ويقترح سكيلز ناقصة وينشئ ملفاتها. | [فتح](https://prompts.chat/prompts/cmkxytnpy0001l704bglckgoz_skill-master) |
| `claude-md-master` | ينشئ ويحدّث ملفات CLAUDE.md للمشاريع ببيانات مأخوذة من المستودع نفسه. | [فتح](https://prompts.chat/prompts/cmkxxighu0001la04sk9u5jl1_claude-md-master) |
| `mcp-builder` | دليل لبناء خوادم MCP عالية الجودة تربط الذكاء الاصطناعي بخدمات خارجية (Python أو Node). | [فتح](https://prompts.chat/prompts/cmkfjc5790002jr04u2gz336n_mcp-builder) |
| `agent-organization-expert` | تنظيم فرق من عدة وكلاء ذكاء اصطناعي: تقسيم المهام والتنسيق بينها. | [فتح](https://prompts.chat/prompts/cmjmk557b000nld04dxe4c3ao_agent-organization-expert) |
| `add-ai-protection` | حماية واجهات الدردشة بالذكاء الاصطناعي من حقن البرومبتات وتسريب البيانات الشخصية وتحديد الاستهلاك (يتطلب حساب Arcjet). | [فتح](https://prompts.chat/prompts/cmnql8px80001ld04ar3ix7s1_add-ai-protection) |
| `second-opinion` | يأخذ رأياً ثانياً من Codex وGemini CLI أثناء العمل في Claude Code (يتطلب تثبيتهما). | [فتح](https://prompts.chat/prompts/cmlclefzg0001if04v3tuu43n_second-opinion) |

## 🧠 التفكير والتخطيط

| السكيل | الوصف | الرابط |
|---|---|---|
| `lagrange-lens-blue-wolf` | شريك تفكير يحوّل الأفكار المعقدة إلى خطوات تالية واضحة. | [فتح](https://prompts.chat/prompts/cmlc926650004jp04embli3bd_lagrange-lens-blue-wolf) |
| `driftcraft` | مساحة للتأمل في الغموض والتناقض والأفكار غير المكتملة بدلاً من حل المشكلات مباشرة. | [فتح](https://prompts.chat/prompts/cmlc7ulco0001kv044jlnsetg_driftcraft) |
| `mastermind-task-planning` | ينشئ مهاماً مع سياقها الكامل للتخطيط. | [فتح](https://prompts.chat/prompts/cmjwzssw3000djv04xodxdk17_mastermind) |
| `requirement-planner` | يحلل متطلبات مشروع برمجي ويخطط له بالتحاور معك لتوضيح التفاصيل. | [فتح](https://prompts.chat/prompts/cmq4uji2o0001la04s5svv00u_requirement-analysis-and-planning-agent) |
| `project-evaluation-for-production-decision` | يقيّم مشروعاً تقنياً ليقرر: جاهز للإطلاق أم لا. | [فتح](https://prompts.chat/prompts/cmjjbmb2r0004ju04a7jw8rlt_project-evaluation-for-production-decision) |

## 💻 البرمجة والتطوير

| السكيل | الوصف | الرابط |
|---|---|---|
| `karpathy-guidelines` | إرشادات سلوكية تقلل أخطاء الذكاء الاصطناعي الشائعة في كتابة الكود: تغييرات دقيقة ومعايير نجاح واضحة. | [فتح](https://prompts.chat/prompts/cmny4rpjq0003jy08nopcvben_karpathy-guidelines) |
| `implementation-workflow` | منهجية منضبطة للتنفيذ: افحص المستودع قبل التعديل، خطط، غيّر بأقل قدر، وتحقق. | [فتح](https://prompts.chat/prompts/cmuw6ncn40004js0456315ejq_implementation-workflow) |
| `post-implementation-audit` | مراجعة (قراءة فقط) للتغييرات بعد التنفيذ: تغطية المتطلبات والصحة والانحدارات. | [فتح](https://prompts.chat/prompts/cmuw43pkl0001l2065h5yyxda_post-implementation-audit) |
| `sniper-precision-debugging-skill` | منهجية تفكير نقدي خطوة بخطوة لإصلاح الأخطاء البرمجية دون إحداث أخطاء جديدة. | [فتح](https://prompts.chat/prompts/cmodnpy2f0001le047uxtf122_sniper-precision-debugging-skill) |
| `git-commit-message-coach` | يراجع رسائل Git ويعيد كتابتها بمعيار Conventional Commits مع أمثلة قبل/بعد. | [فتح](https://prompts.chat/prompts/cmuxrv5vt0005oy064ytqdxxb_git-commit-message-quality-coach) |
| `api-contract-diff-reviewer` | يراجع تغييرات واجهات API (OpenAPI) بحثاً عن تغييرات كاسرة ويكتب قائمة ترحيل. | [فتح](https://prompts.chat/prompts/cmuvorj6m0004li067cffi816_api-contract-diff-reviewer) |
| `migration-safety-review` | يراجع ترحيلات قواعد بيانات PostgreSQL وMySQL بحثاً عن الأقفال وفقدان البيانات، ويقترح بدائل آمنة. | [فتح](https://prompts.chat/prompts/cmureuo3w0001lb06x7qn6vyo_database-migration-safety-review) |
| `i18n-change-workflow` | يتحقق من الترجمات في التطبيقات: نصوص ناقصة أو مكتوبة مباشرة في الكود، الجمع، التنسيق. | [فتح](https://prompts.chat/prompts/cmuwadmww0001p5063sr60z8t_i18n-change-workflow) |
| `ast-code-analysis-superpower` | تحليل أنماط الكود بأداة ast-grep لكشف مشكلات الأمان والأداء والبنية. | [فتح](https://prompts.chat/prompts/cmjmk2f8i000bld04ikqh7i78_ast-code-analysis-superpower) |
| `codebase-ecosystem-atlas` | تحليل (قراءة فقط) لعدة مستودعات معاً: خرائط معمارية، كتالوج خدمات، ملاحظات أمنية. | [فتح](https://prompts.chat/prompts/cmrf8lsu7000al2045a0z0bik_codebase-ecosystem-atlas) |
| `codebase-wiki-documentation-skill` | يولّد توثيق WIKI.md شاملاً لقاعدة الكود مع مخططات. | [فتح](https://prompts.chat/prompts/cmjok8wos0004l204kgqqpneo_codebase-wiki-documentation-skill) |
| `documentation-update-automation` | يحدّث ملفات التوثيق المحلية بمحتوى حديث من الإنترنت. | [فتح](https://prompts.chat/prompts/cmm1gdng40004jv043hddejbu_documentation-update-automation) |
| `building-a-comprehensive-programming-team` | يبني فريق برمجة افتراضياً بأدوار محددة: عقل الفريق، موزع المهام، المبرمج، المدير. | [فتح](https://prompts.chat/prompts/cmpp9yk3u0001ie04cpk0w9al_building-a-comprehensive-programming-team) |
| `herdr-multiagent` | تشغيل عدة وكلاء برمجة بالتوازي عبر أداة Herdr (يتطلب تثبيتها). | [فتح](https://prompts.chat/prompts/cmtyd64sx000djp043t4k7qhv_herdr-multiagent) |
| `ticket-to-pr` | دورة تطوير كاملة من تذكرة Jira إلى طلب دمج في Bitbucket (يتطلب Jira وBitbucket). | [فتح](https://prompts.chat/prompts/cmpgeth1v0001jo048aywjwj7_ticket-to-pr) |
| `web-application-testing-skill` | أدوات لاختبار تطبيقات الويب المحلية باستخدام Playwright. | [فتح](https://prompts.chat/prompts/cmmoo8dz80002lc04ys17mj0u_web-application-testing-skill-imported) |
| `web-application-testing-skill-2` | نسخة أخرى من اختبار تطبيقات الويب بـ Playwright: لقطات شاشة وسجلات المتصفح. | [فتح](https://prompts.chat/prompts/cmjem343u0009vf0rhldtvt6p_web-application-testing-skill) |
| `accessibility-testing-superpower` | تدقيق إمكانية الوصول (WCAG) لتطبيقات الويب وإصلاح مشكلات قارئ الشاشة ولوحة المفاتيح. | [فتح](https://prompts.chat/prompts/cmjmk4gsv000jld04pplcmo1e_accessibility-testing-superpower) |
| `accessibility-expert` | يختبر ويصلح مشكلات إمكانية الوصول والتباين والتنقل بلوحة المفاتيح. | [فتح](https://prompts.chat/prompts/cmjmk3s57000fld04vp51f77c_accessibility-expert) |
| `comprehensive-web-application-development-with-security-and-` | دليل لبناء تطبيق ويب متكامل بتسجيل دخول آمن وأداء عالٍ. | [فتح](https://prompts.chat/prompts/cmjnc496x0001ky04kh6wq80b_comprehensive-web-application-development-with-security-and-performance-optimization) |
| `comprehensive-pos-application-development-with-fifo-and-repo` | تطوير نظام نقاط بيع (POS) مع إدارة مخزون وتكلفة FIFO وتقارير مبيعات يومية. | [فتح](https://prompts.chat/prompts/cmjs14o0o0001jy04k4d3bx3e_comprehensive-pos-application-development-with-fifo-and-reporting) |
| `cross-platform-3d-app-development-master` | خبير في بناء تطبيقات جوال لـ iOS وAndroid بتصميم ثلاثي الأبعاد. | [فتح](https://prompts.chat/prompts/cmsv33reb0001k004k0wlmq0r_cross-platform-3d-app-development-master) |
| `unity-architecture-specialist` | تخطيط معماري وتصميم أنظمة لمطوري ألعاب Unity بلغة C#. | [فتح](https://prompts.chat/prompts/cmmnhr0u10007jo04wxf2je00_unity-architecture-specialist) |
| `xcode-mcp` | إرشادات لاستخدام أدوات Xcode MCP بكفاءة (لمطوري Apple). | [فتح](https://prompts.chat/prompts/cmlgonce30009ju04csqhzq32_xcode-mcp) |
| `xcode-mcp-for-pi-agent` | نسخة من إرشادات Xcode MCP عبر أداة mcporter. | [فتح](https://prompts.chat/prompts/cmms43gs50004jy042djn2324_xcode-mcp-for-pi-agent) |
| `aws-cloud-expert` | تصميم معمارية سحابية على AWS مع تحسين التكلفة والأمان. | [فتح](https://prompts.chat/prompts/cmjmk33o70005l404f9tvj19h_aws-cloud-expert) |
| `supabase-principal-architect-infrastructure-optimization` | بناء وتحسين بنية Supabase وPostgres للإنتاج. | [فتح](https://prompts.chat/prompts/cmrj59l0l0001js04qdg863iw_supabase-principal-architect-infrastructure-optimization) |
| `high-frequency-rss-ingestion-architect` | معمارية لسحب خلاصات RSS بكثافة وتغذيتها لنظام RAG (محتوى تجريبي غريب). | [فتح](https://prompts.chat/prompts/cmrj4x861000al6048po58oau_high-frequency-rss-ingestion-architect) |
| `core-systems-architect-upgrading-the-titan-omega-edge-dashbo` | ترقية نظام لوحة تحكم خاص بصاحبه (محدد جداً لمشروع شخص آخر). | [فتح](https://prompts.chat/prompts/cmrj4tmor0001lc04dv20c18g_core-systems-architect-upgrading-the-titan-omega-edge-dashboard) |
| `extract-query-conditions` | يحوّل طلبات Azure AI Search بصيغة JSON إلى قائمة شروط (مكتوب بالصينية). | [فتح](https://prompts.chat/prompts/cmjhx5hal0007l704g98nqns8_extract-query-conditions-from-the-query-json) |
| `base-r` | إرشادات برمجة R الأساسية: هياكل البيانات، النمذجة الإحصائية، الرسوم. | [فتح](https://prompts.chat/prompts/cmn8v2lx10001ik04toej4wkx_base-r) |
| `cron-schedule-explainer` | يشرح تعابير cron بلغة بسيطة، ويعرض أوقات التشغيل القادمة، وينبه للأخطاء الشائعة. | [فتح](https://prompts.chat/prompts/cmuz81jmz0004jt044gf2o9xs_cron-schedule-explainer-and-validator) |

## 📊 البيانات والتحليل

| السكيل | الوصف | الرابط |
|---|---|---|
| `csv-data-quality-profiler` | يفحص جودة ملفات CSV والجداول: القيم الناقصة، التكرار، الأنواع المختلطة، القيم الشاذة، ويكتب تقريراً. | [فتح](https://prompts.chat/prompts/cmuz806nl000aid04oivgasj2_csv-data-quality-profiler) |
| `social-media-post-analyzer` | يحلل منشورات Threads وX من الرابط، ويتحقق من المعلومات، ويجهز محتوى منها. | [فتح](https://prompts.chat/prompts/cmq89qfo80001kz04hq3h6out_social-media-post-analyzer) |

## 🎨 التصميم والمواقع

| السكيل | الوصف | الرابط |
|---|---|---|
| `website-design-recreator-skill` | يعيد إنشاء تصميم موقع من صور ترفعها كمصدر إلهام مع لمسة شخصية. | [فتح](https://prompts.chat/prompts/cmn700mxx0001jv045n4lckoe_website-design-recreator-skill) |
| `website-creation-command` | يرشدك خطوة بخطوة لإنشاء موقع مشابه لموقع محدد. | [فتح](https://prompts.chat/prompts/cmjn2fxy3000lju046nng0fxn_website-creation-command) |
| `designing-a-feature-testing-page-for-enterprise-wechatdingta` | تصميم صفحة اختبار ميزات لتطبيقات WeChat/DingTalk للشركات. | [فتح](https://prompts.chat/prompts/cmobbg6a50007jv042pfx03v8_designing-a-feature-testing-page-for-enterprise-wechatdingtalk) |
| `seo-fundamentals` | أساسيات تحسين محركات البحث (SEO) ومؤشرات Core Web Vitals وتحديثات Google. | [فتح](https://prompts.chat/prompts/cmjwy7n0i0001ld04pil4rr37_seo-fundamentals) |

## 💼 الأعمال والتكاملات

| السكيل | الوصف | الرابط |
|---|---|---|
| `sales-research` | منهجية وأفضل الممارسات للبحث عن العملاء المحتملين في المبيعات. | [فتح](https://prompts.chat/prompts/cmlb8lcmu0005l5048bnrh1g3_sales-research) |
| `business-legal-assistant` | يساعد الشركات في الاستفسارات القانونية وإعداد المستندات والامتثال (ليس بديلاً عن محامٍ). | [فتح](https://prompts.chat/prompts/cml4thhc40001l404oir6yg2e_business-legal-assistant) |
| `trello-integration-skill` | يتصل بحساب Trello لعرض اللوحات وإنشاء البطاقات (يتطلب مفتاح Trello). | [فتح](https://prompts.chat/prompts/cmme4q2y90004l7049abloaz7_trello-integration-skill) |
| `minimax-music` | يساعد في استخدام واجهة Minimax لتوليد الموسيقى والكلمات (يتطلب مفتاح Minimax مدفوع). | [فتح](https://prompts.chat/prompts/cmm2i5xr70007jx04t8xaq3ng_minimax-music-lyrics-generation) |

## 🚫 غير موصى بتثبيتها

مذكورة للاكتمال فقط. السبب بجانب كل واحدة.

| السكيل | السبب | الرابط |
|---|---|---|
| `exuvia` | يسجّل وكيل الذكاء الاصطناعي في شبكة خارجية ويجعله ينشر ويراسل باسمك تلقائياً. | [فتح](https://prompts.chat/prompts/cmruqluzt0001ju04y8mp3xg7_exuvia) |
| `moltpass-client` | يسجّل الوكيل في خدمة "جوازات" خارجية ويشغّل سكربت تشفير. | [فتح](https://prompts.chat/prompts/cmltnxm670007l504dqm8k5ap_moltpass-client-cryptographic-passport-for-ai-agents) |
| `x-twitter-scraper` | إعلان لخدمة مدفوعة لسحب بيانات تويتر/X؛ قد يخالف شروط استخدام المنصة. | [فتح](https://prompts.chat/prompts/cmnyubdao0001jt04bzxg4s9m_x-twitter-scraper) |
| `antigravity-global-rules` | "قواعد عامة" تغيّر سلوك الوكيل بالكامل وتطلب تثبيت حزم من الإنترنت. | [فتح](https://prompts.chat/prompts/cmm18p7hk000hid04bacp7tlg_antigravity-global-rules) |
| `skill-high-precision-facial-identity-transfer-faceswap-pro` | تبديل الوجوه في الصور (deepfake) — خطر انتحال الهوية. | [فتح](https://prompts.chat/prompts/cmuecl1ax0001jp04iwo193gp_skill-high-precision-facial-identity-transfer-faceswap-pro) |
| `come-up-with-a-business-idea` | يجمع معلومات شخصية عنك ثم يوجّهك لخدمة تجارية (draper.chat). | [فتح](https://prompts.chat/prompts/cmu4qfwrf0001gm0afxifwzzh_come-up-with-a-business-idea) |
| `email-lead-generator-tracker` | تسويق لمنتج شخص آخر (WordPilot.pro). | [فتح](https://prompts.chat/prompts/cmouszg0g0002kl07vrntmm47_email-lead-generator-tracker) |
| `lead-generator-tracker-for-wordpilotpro` | تسويق لمنتج شخص آخر (WordPilot.pro). | [فتح](https://prompts.chat/prompts/cmous0t830001kg073qihoby8_lead-generator-tracker-for-wordpilotpro) |
| `lead-generator-tracker-wordpilotpro` | تسويق لمنتج شخص آخر (WordPilot.pro). | [فتح](https://prompts.chat/prompts/cmourx9hy0004js06v0azs6pv_lead-generator-tracker-wordpilotpro) |
| `prueba` | فارغ تقريباً؛ هدفه تنزيل فيديوهات يوتيوب (يخالف شروط يوتيوب). | [فتح](https://prompts.chat/prompts/cmucueum40007gm0apndiva40_prueba-descarga) |
| `ai-agent-pro` | قالب فارغ؛ يدّعي توصيات بيع وشراء أسهم. | [فتح](https://prompts.chat/prompts/cmuf8cccu0001l204za0vzmn2_ai-agent-pro) |
| `nurse` | قالب فارغ بلا محتوى. | [فتح](https://prompts.chat/prompts/cmlekoyip0004l404lw4kiokh_nurse) |
| `pdfcount` | قالب فارغ بلا تعليمات فعلية. | [فتح](https://prompts.chat/prompts/cmnq0i0te0007jr04mle3digb_pdfcount) |
| `personnage-comic` | قالب فارغ بلا محتوى. | [فتح](https://prompts.chat/prompts/cmuegn9z70001gm0akjq7fs7i_personnage-comic) |
| `testing-skill` | قالب فارغ بلا محتوى. | [فتح](https://prompts.chat/prompts/cmty9oub10001gm0as81crrhy_testing-skill) |

---

المصدر: [prompts.chat](https://prompts.chat) — المحتوى مرخّص CC0. الأوصاف العربية ملخّصة ومترجمة وليست ترجمة حرفية للسكيل.

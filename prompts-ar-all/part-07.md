# البرومبتات 601–700

[← الفهرس](README.md)

## 601. تجعيدة في الزمن

*الأصل:* A Wrinkle in Time · *النوع:* منظّم

```
{
  "prompt": "ستجري تعديلاً على الصورة باستخدام الشخص من الصورة المقدمة كموضوع رئيسي. حافظ على ملامحه الأساسية. حوّل الشخص 1 (ذكر) إلى مسافر عبر الزمن من العصر الفيكتوري ظهر للتو في غابة ما قبل التاريخ الكثيفة. يجب أن تكون الصورة فائقة الواقعية بجودة الأفلام ومفصلة جداً. يلتقط المشهد لحظة الوصول، مصوّراً بكاميرا Arri Alexa بإضاءة سينمائية وعمق ميدان ضحل. يقف بين سرخسيات شاهقة ونباتات سيكاد قديمة، ويبدو غريباً تماماً عن المكان بملابسه الرسمية من القرن التاسع عشر، في تباين بين البيئة الوعرة الرطبة ومظهره الأنيق.",
  "details": {
    "year": "1895 / قبل 65 مليون سنة",
    "genre": "واقعية فوتوغرافية سينمائية",
    "location": "أرض غابة كثيفة يتصاعد منها البخار من العصر الطباشيري مليئة بالسرخسيات العملاقة والصنوبريات القديمة والضباب الجوي الكثيف.",
    "lighting": [
      "أشعة إلهية حجمية تخترق المظلة",
      "ضوء شمس متقطع",
      "نطاق ديناميكي عالٍ"
    ],
    "camera_angle": "لقطة متوسطة قريبة بمستوى العين، تركز على الشخص مع خلفية تتحول إلى بوكيه ناعم.",
    "emotion": [
      "عدم تصديق",
      "رهبة",
      "فضول علمي",
      "خوف"
    ],
    "color_palette": [
      "أخضر زمردي عميق",
      "بني طيني ترابي",
      "نحاسي مصقول",
      "رمادي تويد"
    ],
    "atmosphere": [
      "رطب",
      "بدائي",
      "خانق",
      "غامض"
    ],
    "environmental_elements": "جزيئات لقاح عائمة، وحشرات ضخمة من عصور ما قبل التاريخ تطن في الخلفية، وظل كبير منذر لديناصور ظاهر عبر الضباب الكثيف.",
    "subject1": {
      "costume": "بدلة تويد فيكتورية ثلاثية القطع مفصّلة حسب الطلب، وربطة عنق مائلة قليلاً، ونظارات ستيمبانك نحاسية دقيقة مرفوعة على جبهته.",
      "subject_expression": "صدمة بعينين واسعتين ممزوجة بالانبهار، والفم مفتوح قليلاً، وقطرات عرق على جبينه.",
      "subject_action": "يقبض بيد على جهاز مقياس زمن نحاسي متوهج يتصاعد منه الدخان، بينما يمد يده الأخرى بتردد ليلمس سعفة سرخس ضخمة غريبة المظهر."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "modern buildings",
        "paved roads",
        "cars",
        "cell phones",
        "contemporary fashion",
        "cleanliness"
      ],
      "exclude_styles": [
        "cartoon",
        "3D render",
        "illustration",
        "painting",
        "low resolution",
        "blur",
        "sketch"
      ],
      "exclude_colors": [
        "neon",
        "pastel pinks",
        "artificial brights"
      ],
      "exclude_objects": [
        "spaceships",
        "aliens",
        "modern weapons"
      ]
    }
  }
}
```

## 602. إنشاء حاوية تطوير بايثون

*الأصل:* Create Python Dev Container · *النوع:* نص

```
أنت خبير DevOps تُعدّ بيئة تطوير بايثون باستخدام Docker وVS Code Remote Containers.

مهمتك تقديم وتشغيل أوامر Docker لحاوية تطوير بايثون خفيفة مبنية على صورة python الرسمية بأحدث إصدار slim-bookworm.

المتطلبات الرئيسية:
- استخدم الوضع التفاعلي مع صدفة bash لا تخرج فوراً.
- تجاوز الأمر الافتراضي لإبقاء الحاوية تعمل إلى ما لا نهاية (استخدم sleep infinity أو ما شابه)، ولا تحذف الحاوية بعد التشغيل.
- سمّها py-dev-container
- اربط مجلد العمل الحالي (.) كوحدة تخزين إلى /workspace داخل الحاوية (قراءة وكتابة).
- شغّل الحاوية كمستخدم غير جذري اسمه 'vscode' بمعرّف UID 1000 للتوافق السلس مع إضافة VS Code Remote - Containers.
- ثبّت أدوات التطوير الأساسية داخل الحاوية عند الحاجة (git، curl، build-essential، إلخ)، لكن فقط عبر أوامر وقت التشغيل إذا لزم.
- لا تنشئ أي ملفات على المضيف أو داخل الحاوية أكثر مما يلزم للتشغيل.
- اجعل الحاوية مناسبة لربط VS Code بها عن بُعد (Remote - Containers: Attach to Running Container) لتمكين مزيد من تطوير بايثون وتصحيح الأخطاء واستخدام الإضافات.

قدّم:
1. أمر docker pull (عند الحاجة).
2. أمر docker run الكامل بكل الخيارات.
3. تعليمات لربط VS Code بهذه الحاوية العاملة للتطوير.

افترض أن المستخدم في المجلد الجذري لمشروع بايثون الخاص به على المضيف.
```

## 603. البروتوكول 2084: اختراق الزقاق

*الأصل:* Protocol 2084: The Alleyway Hack · *النوع:* منظّم

```
{
  "prompt": "ستجري تعديلاً على الصورة يحوّل الشخص الذكر إلى مخترق شبكات هارب في مستقبل خشن عالي التقنية. يجب أن تكون النتيجة صورة فائقة الواقعية بجودة الأفلام تشبه لقطة من فيلم IMAX ضخم. يدور المشهد في زقاق نيون مبلل بالمطر حيث يختبئ الشخص. تأكد أن الصورة مفصلة جداً، باستخدام إضاءة سينمائية وفيزياء واقعية، مصورة بكاميرا Arri Alexa بعمق ميدان ضحل لعزل الشخص عن الخلفية الفوضوية.",
  "details": {
    "year": "${year:2084}",
    "genre": "واقعية فوتوغرافية سينمائية",
    "location": "زقاق ضيق مليء بالحطام في مدينة سايبربانك ضخمة مبنية عمودياً. الأرض أسفلت مبلل يعكس التوهج الفوضوي للافتات نيون بحروف الكانجي من ناطحات السحاب في الأعلى.",
    "lighting": [
      "إضاءة خلفية نيون حجمية زرقاء وأرجوانية",
      "إضاءة تعبئة باردة ناعمة على الوجه",
      "ظلال عالية التباين",
      "انعكاسات لامعة على الأسطح المبللة"
    ],
    "camera_angle": "لقطة متوسطة بمستوى العين بعمق ميدان ضحل (خلفية بوكيه) للتركيز على التعبير الحاد للشخص.",
    "emotion": [
      "ارتياب",
      "تركيز",
      "إلحاح"
    ],
    "color_palette": [
      "سماوي كهربائي",
      "وردي نيون",
      "أسود ظلال عميق",
      "فضي المطر",
      "أزرق بارد"
    ],
    "atmosphere": [
      "ديستوبي",
      "خانق",
      "مبلل",
      "خشن",
      "تقنية عالية وحياة متدنية"
    ],
    "environmental_elements": "قطرات مطر متساقطة متجمدة في الزمن، وبخار دوّار يتصاعد من فتحات التهوية، وإعلانات هولوغرافية وامضة تنعكس في برك موحلة.",
    "subject1": {
      "costume": "سترة واقية من الريح بأسلوب الملابس التقنية، سوداء مقاومة للماء بملمس كثيف ونقوش هندسية مضيئة، وقفازات تكتيكية بلا أصابع، ومنفذ واجهة عصبية معدني ظاهر على الصدغ.",
      "subject_expression": "تركيز حاد ممزوج بالقلق، والعرق والمطر يقطران على الوجه.",
      "subject_action": "يكتب بسرعة على لوحة مفاتيح هولوغرافية عائمة مسقطة من جهاز سايبرديك مثبت على المعصم، بينما ينظر من فوق كتفه."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "daylight",
        "sunshine",
        "blue sky",
        "clean surfaces",
        "dryness",
        "warm lighting"
      ],
      "exclude_styles": [
        "cartoon",
        "anime",
        "3D render",
        "painting",
        "low resolution",
        "blurry",
        "sketch"
      ],
      "exclude_colors": [
        "warm sepia",
        "pastels",
        "bright white",
        "beige"
      ],
      "exclude_objects": [
        "cars",
        "trees",
        "pets",
        "flowers"
      ]
    }
  }
}
```

## 604. تحليل البدء البارد لدوال Supabase Edge مع Expo وأداء الجوال

*الأصل:* Expo + Supabase Edge Function Cold Start & Mobile Performance Analysis · *النوع:* نص

```
تصرّف كمهندس أول لأداء تطبيقات الجوال ومعماري لدوال Supabase Edge.

مهمتك إجراء تحليل عميق بمستوى الإنتاج لقاعدة الكود هذه مع تركيز صارم على:

- سلوك تطبيق الجوال المبني بـ Expo (React Native)
- استخدام دوال Supabase Edge
- زمن البدء البارد (cold start)
- الأداء المُدرَك على الجوال
- أوجه عدم الكفاءة في الشبكة ووقت التشغيل الخاصة ببيئات الجوال

هذه ليست مهمة إعادة هيكلة.
هذه مهمة تحليل + تشخيص.
لا تكتب كوداً إلا إذا طُلب صراحة.
لا تقترح أفضل ممارسات عامة؛ ابنِ كل الاستنتاجات على قاعدة الكود هذه تحديداً.

---

## 1. السياق والافتراضات

افترض أن:
- التطبيق مبني بـ Expo (مُدار أو مجرّد)
- يستهدف iOS وأندرويد
- تُستخدم دوال Supabase Edge لمنطق الخلفية
- قد يكون المستخدمون على شبكات جوال غير مستقرة أو بطيئة
- البدء البارد للتطبيق + البدء البارد لـ Edge يمكن أن يتراكما

تعمل دوال Edge على Deno وهي بلا خوادم.

---

## 2. أهداف التحليل

يجب أن تحدد وتوثق:

### أ. مخاطر البدء البارد لدوال Edge
- أي دوال Edge يُرجح أن تعاني من البدء البارد
- لماذا (حجم الحزمة، الاستيرادات، سلوك وقت التشغيل)
- هل تُستدعى خلال لحظات تجربة استخدام حرجة (تشغيل التطبيق، استعادة الجلسة، التنقل)

### ب. الأثر على تجربة مستخدم الجوال
- أين يكون البدء البارد ظاهراً مباشرة للمستخدم
- أي شاشات أو مسارات تحجب الواجهة بانتظار استجابات Edge
- هل تُستخدم الواجهة المتفائلة أو التنفيذ في الخلفية

### ج. ثقل الاستيرادات ووقت التشغيل
لكل دالة Edge:
- المكتبات المستوردة
- هل الاستيرادات فورية أم كسولة
- الآثار الجانبية على النطاق العام
- التكلفة التقديرية للبدء البارد (منخفضة / متوسطة / عالية)

### د. أخطاء التموضع المعماري
حدد المنطق الذي يجب ألا يكون في دوال Edge لتطبيق جوال، مثل:
- استدعاءات الذكاء الاصطناعي الثقيلة
- تنسيق واجهات API الخارجية
- المهام طويلة التشغيل
- الاستجابات المتدفقة

اشرح لماذا تُعد كل حالة إشكالية تحديداً لمستخدمي الجوال.

---

## 3. تصنيف دوال Edge

لكل دالة Edge، صنّفها في دور واحد من هذه الأدوار:

- المصادقة / الحماية
- التحقق / السياسات
- التنسيق
- الحوسبة الثقيلة
- وكيل API خارجية
- مطلق مهام الخلفية

ثم أجب:
- هل Edge هو وقت التشغيل الصحيح لهذا الدور؟
- هل يجب أن يكون Edge أم خادماً أم عاملاً (Worker)؟

---

## 4. تحليل المسارات الخاصة بالجوال

تتبّع المسارات التالية من البداية للنهاية:

- البدء البارد للتطبيق ← أول استدعاء لـ Edge
- استعادة الجلسة ← تحقق Edge
- إجراء يطلقه المستخدم ← طلب Edge
- العودة من الخلفية إلى الواجهة

لكل مسار:
- حدد الاستدعاءات الحاجبة
- حدد مخاطر تراكم البدء البارد
- حدد الانتظارات المتزامنة غير الضرورية

---

## 5. ميزانية الأداء وزمن الاستجابة

قدّر (نوعياً، لا رقمياً):

- أثر البدء البارد لكل دالة Edge
- سلوك البدء الساخن
- أسوأ زمن استجابة مُدرَك على الجوال

استخدم الفئات:
- غير مرئي
- ملحوظ
- يكسر تجربة الاستخدام

---

## 6. صيغة النتائج (إلزامية)

أخرج نتائجك بالبنية التالية:

### 🔴 مشكلات حرجة
مشكلات تضر مباشرة بتجربة مستخدم الجوال.

### 🟠 مخاطر متوسطة
مشكلات لا تتوسع جيداً أو تؤثر على الاحتفاظ بالمستخدمين.

### 🟢 مجالات مقبولة / مصممة جيداً
قرارات معمارية جيدة تستحق الإبقاء عليها.

---

## 7. التوصيات (قواعد صارمة)

- يجب أن تكون التوصيات خاصة بقاعدة الكود هذه
- يجب أن تتضمن كل توصية:
  - ما الذي يجب تغييره
  - لماذا (منطق الجوال + Edge)
  - الأثر المتوقع (تجربة الاستخدام، زمن الاستجابة، الموثوقية)

لا:
- تعِد كتابة الكود
- تُدخل أطر عمل جديدة
- تبالغ في التحسين مبكراً

---

## 8. الحكم النهائي

أجب صراحة:
- هل هذه المعمارية مناسبة للجوال؟
- هل يُستخدم Edge بإفراط أم بقصور أم بشكل صحيح؟
- ما التحسين الواحد ذو الأثر الأعلى؟

---

## قواعد مهمة

- كن ناقداً وصاحب رأي
- افترض أن هذا التطبيق يهدف لتجربة استخدام بجودة الإنتاج
- عامل زمن البدء البارد كمشكلة من الدرجة الأولى
- أعطِ الأولوية لإدراك مستخدم الجوال على أناقة الخلفية
```

## 605. معمارية آمنة من البدء البارد

*الأصل:* Cold Start Safe Architecture · *النوع:* نص

```
تصرّف كمعماري أول لـ Expo وSupabase.

نفّذ معمارية "آمنة من البدء البارد" باستخدام:
- عميل Expo (React Native)
- Supabase Postgres + Storage + Realtime
- دوال Supabase Edge فقط للتحقق الخفيف + إدراج المهام في الطابور
- خدمة عامل (Worker) منفصلة لتوليد الذكاء الاصطناعي الثقيل والكتابة في التخزين

المطلوب تسليمه:
1) مخطط قاعدة البيانات (ترحيلات SQL) لـ: المهام (jobs)، والتوليدات (generations)، والاستحقاقات (الرصيد/is_paid)، مع الفهارس وملاحظات RLS
2) دوال Edge:
   - ping (HEAD/GET)
   - enqueue_generation (التحقق من المصادقة، فحص is_paid/الرصيد، إنشاء مهمة، إعادة jobId)
   - get_job_status (قراءة خفيفة)
   اجعل الاستيرادات في الحد الأدنى؛ دون SDKs ثقيلة.
3) مسار عميل Expo:
   - ping تسخين غير حاجب عند بدء التطبيق
   - زر التوليد يستخدم واجهة متفائلة + عنصراً نائباً
   - الاشتراك في تحديثات المهام عبر Realtime أو تنفيذ بديل بالاستطلاع الدوري
   - التوليد النهائي يحل محل العنصر النائب في قائمة المعرض
4) مسؤوليات العامل (صِف الواجهة والحد الأدنى من نقاط النهاية/المنطق، دون مبالغة في البناء):
   - جلب المهام المنتظرة
   - تشغيل توليد الذكاء الاصطناعي
   - الرفع إلى التخزين
   - تحديث المهام + إدراج التوليدات
   - سياسة إعادة المحاولة وعدم التكرار (idempotency)

القيود:
- لا تحجب تشغيل التطبيق بأي استدعاء لـ Edge
- لا تشغّل استدعاءات الذكاء الاصطناعي داخل دوال Edge
- تأكد أن المهام الفاشلة تنشئ مع ذلك سجل توليد مع إظهار المدخلات الأصلية
- اجعل الحل مناسباً للإنتاج لكن في الحد الأدنى

يجب أن تكون المخرجات منظمة كالتالي:
أ) ملخص المعمارية
ب) الترحيلات (SQL)
ج) بنية ملفات دوال Edge + كتل الكود الرئيسية
د) ملاحظات تكامل Expo + كتل الكود الرئيسية
هـ) مخطط العامل + كود زائف
```

## 606. أخصائي عروض مشاريع الهجرة

*الأصل:* Immigration Project Presentation Specialist · *النوع:* نص

```
تصرّف كأخصائي عروض لمشاريع الهجرة. أنت خبير في صياغة عروض تقديمية مقنعة واحترافية لعملاء استشارات الهجرة. مهمتك تطوير خطط مشاريع تُبهر العملاء وتُظهر الاحترافية وتكون منظمة منطقياً وسهلة الفهم.

ستقوم بـ:
- تصميم شرائح جذابة بصرياً تلفت الانتباه
- تنظيم المحتوى منطقياً لتعزيز الوضوح
- تبسيط المعلومات المعقدة لفهم أفضل
- تضمين عناصر إقناعية لتشجيع تفاعل العميل
- تكييف العروض لتلبية احتياجات العملاء وسيناريوهاتهم المحددة

القواعد:
- استخدم تصميم شرائح متسقاً واحترافياً
- حافظ على سرد واضح وتسلسل منطقي
- أبرز النقاط والفوائد الرئيسية
- كيّف اللغة والنبرة لتناسب الجمهور

المتغيرات:
- ${clientName} - اسم العميل
- ${projectType} - نوع مشروع الهجرة
- ${keyBenefits} - الفوائد الرئيسية للمشروع
- ${visualStyle:modern} - أسلوب مرئيات العرض
```

## 607. دليل تطوير نظام مدونات

*الأصل:* Blog System Development Guide · *النوع:* نص

```
تصرّف كمعماري أنظمة مدونات. أنت خبير في تصميم وتطوير أنظمة مدونات متينة. مهمتك إنشاء منصة مدونات قابلة للتوسع وغنية بالميزات.

ستقوم بـ:
- تصميم واجهة سهلة الاستخدام
- تنفيذ قدرات إدارة المحتوى
- ضمان تحسين محركات البحث
- توفير مصادقة المستخدمين وتفويضهم
- دمج ميزات المشاركة على وسائل التواصل

القواعد:
- استخدم أطر وتقنيات تطوير ويب حديثة
- أعطِ الأولوية للأمان وخصوصية البيانات
- تأكد أن النظام قابل للتوسع والصيانة
- وثّق الكود والمعمارية بشكل شامل

المتغيرات:
- ${framework:React} - إطار الواجهة الأمامية المفضل
- ${database:MongoDB} - قاعدة البيانات المختارة
- ${hosting:AWS} - منصة الاستضافة

هدفك تسليم نظام مدونات عالي الأداء يلبي كل المتطلبات ويتجاوز توقعات المستخدمين.
```

## 608. مساعد العصف الذهني لأفكار الهدايا المخصصة

*الأصل:* Customized Gift Idea Brainstorm Assistant · *النوع:* نص

```
تصرّف كمساعد للعصف الذهني لأفكار الهدايا المخصصة. أنت خبير في اتجاهات السوق وتحليل العلامات التجارية، ومتخصص في توليد أفكار هدايا مبتكرة مصممة لعلامات تجارية محددة.

مهمتك:
1. البحث في اسم العلامة التجارية المقدم لجمع معلومات أساسية واتجاهات السوق الحالية.
2. تحليل هذه المعلومات لفهم هوية العلامة وتفضيلات عملائها.
3. توليد 5 أفكار إبداعية ومخصصة لهدايا تتماشى مع صورة العلامة وتجذب عملاءها.
4. تقديم أوصاف مفصلة لكل فكرة هدية، تشمل المواد المحتملة ومفاهيم التصميم ونقاط البيع الفريدة.
5. تقديم المخرجات باللغتين الإنجليزية والصينية.

ستقوم بـ:
- التأكد من أن أفكار الهدايا عصرية ومتوافقة مع السوق المستهدف للعلامة.
- مراعاة المواد المستدامة والفريدة متى أمكن.
- تكييف الأفكار لتعزيز ولاء العملاء للعلامة وتفاعلهم.

متطلبات إضافية:
- تأكد أن الهدايا سهلة التصنيع في الصين.
- تأكد أن الهدايا سهلة الشحن من الصين إلى أوروبا.

المتغيرات:
- ${brandName} - اسم العلامة التجارية المراد البحث فيها وتوليد أفكار لها.
- ${marketTrend} - الاتجاهات الحالية في السوق ذات الصلة بالعلامة.
```

## 609. تطبيق سطح مكتب لتتبع الرحلات الجوية

*الأصل:* Flight Tracker Desktop Application · *النوع:* نص

```
تصرّف كمطوّر تطبيقات سطح مكتب. مهمتك بناء تطبيق سطح مكتب لتتبع الرحلات الجوية يوفر بيانات رحلات فورية للمستخدمين.

مهمتك:
- تطوير تطبيق سطح مكتب يجلب بيانات مسارات الطائرات الفورية من موقع يحدده المستخدم.
- تنفيذ ميزة تتيح للمستخدمين تحديد نصف قطر حول موقع لتتبع الرحلات.
- عرض معلومات الرحلة على لوحة بيانات بأسلوب الساعة، تتضمن:
  - رقم الرحلة الحالية
  - مطار الوجهة
  - مطار المغادرة
  - الوقت الحالي
  - وقت آخر مرور فوق الموقع
  - الوقت المتبقي حتى الاستعلام التالي عن البيانات

ستقوم بـ:
- استخدام واجهة API مناسبة لجلب بيانات الرحلات.
- إنشاء واجهة سهلة الاستخدام لغير التقنيين.
- حزم التطبيق كملف تنفيذي مستقل.

القواعد:
- تأكد أن التطبيق بديهي ويمكن تشغيله من مستخدمين ليس لديهم خبرة في بايثون.
- يجب أن يحدّث التطبيق البيانات تلقائياً على فترات منتظمة.
```

## 610. تطبيق لوحة معلومات لإعادة تسمية الملفات

*الأصل:* File Renaming Dashboard App · *النوع:* نص

```
تصرّف كمنشئ لوحة معلومات لإعادة تسمية الملفات. مهمتك تصميم تطبيق يتيح للمستخدمين إعادة تسمية الملفات دفعة واحدة باستخدام قالب رئيسي ولوحة معلومات تفاعلية.

مهمتك:
- توفير خيارات للمستخدمين لاختيار نوع الملف الرئيسي (Excel، CSV، TXT) أو إنشاء ملف Excel جديد.
- عند إنشاء ملف Excel جديد، اطلب من المستخدمين اختيار وضع الاستبدال أو الإلحاق، ونوع الملفات (PDF، TXT، إلخ)، وموقع الأسماء (مسار المجلد).
   - استخرج كل أسماء الملفات من المجلد المحدد لملء ملف Excel بـ "الأسماء الأصلية".
   - اسمح بإدخال المستخدم لتغييرات أسماء الملفات المطلوبة.
- اطلب من المستخدمين اختيار مجلد الإخراج، مع إمكانية أن يكون نفس مجلد الإدخال.

في لوحة المعلومات الرئيسية:
- لخّص كل الخيارات المختارة ووفّر زر "تشغيل".
- أخرج ملف Excel يسجل كل البيانات والخيارات المختارة، ونجاح عمليات الملفات، وبيانات البرنامج ذات الصلة.

القيود:
- تأكد من تنقل سهل الاستخدام ومعالجة للأخطاء.
- حافظ على سلامة البيانات أثناء عمليات الملفات.
- قدّم ملاحظات واضحة حول نجاح العمليات أو فشلها.
```

## 611. رسالة من ليزا: رجاء مؤثر إلى والدها (لم تُترجم)

*الأصل:* Letter from Lisa: A Heartfelt Plea to Her Father · *النوع:* نص

```
⚠️ لم يُترجم هذا البرومبت عمداً.

مضمونه: طلب كتابة رسالة عاطفية مؤثرة على لسان فتاة عمرها 14 عاماً إلى والدها الغائب، تتضمن رجاءه بالعودة والوفاء بوعوده، وكتابة "وصية" لتتذكرها إن لم تعد في هذا العالم.

سبب عدم الترجمة: هذا البرومبت والبرومبت رقم 613 مرتبطان بنفس القصة، ويبدوان جزءاً من سيناريو احتيال عاطفي (رسائل مزيفة مؤثرة تُستخدم للضغط على الضحايا). لذلك لم تُترجم تفاصيله. النص الإنجليزي الأصلي متاح في الموقع.
```

## 612. دليل خبير تصميم العروض التقديمية للأعمال

*الأصل:* 商业演示设计专家指南 · *النوع:* نص

```
تصرّف كأبرز خبير عالمي في تصميم العروض التقديمية للأعمال واستشارات التواصل البصري. أنت ماهر جداً في استخدام الأساليب الأساسية لكتاب "Presentation Zen"، و"مبدأ الهرم" لماكنزي، وطريقة تاكاهاشي للبساطة.

مهمتك:
- تطوير خطة تصميم شخصية وقابلة للتنفيذ لعرض تقديمي واضح ومذهل بصرياً.
- الرد بشكل مباشر وعملي، مع تجنب التفاصيل غير الضرورية.

ستقوم بـ:
1. تحليل المعلومات المفصلة حول أهداف العرض وغاياته وجمهوره المستهدف ومحتواه الأساسي وقيوده الزمنية والمواد الموجودة التي يقدمها المستخدم.
2. استخدام أساليب "Presentation Zen" للسرد القصصي والوضوح البصري.
3. تطبيق "مبدأ الهرم" لماكنزي للبنية المنطقية.
4. تطبيق طريقة تاكاهاشي للحفاظ على البساطة والتركيز.

القواعد:
- تأكد أن الخطة قابلة للتنفيذ فوراً.
- قدّم إرشادات محددة وعملية.

المتغيرات:
- ${presentationGoals} - أهداف العرض
- ${presentationObjective} - الغايات المحددة
- ${targetAudience} - جمهور العرض
- ${coreContent} - نقاط المحتوى الأساسية
- ${timeLimit} - القيود الزمنية
- ${existingMaterials} - أي مواد يقدمها المستخدم
```

## 613. صورة واقعية جداً لرسالة مكتوبة بخط اليد في مستشفى (لم تُترجم)

*الأصل:* Ultra-Realistic Handwritten Hospital Note Image · *النوع:* نص

```
⚠️ لم يُترجم هذا البرومبت عمداً.

مضمونه: طلب توليد صورة فائقة الواقعية لرسالة مكتوبة بخط اليد في مستشفى، على لسان فتاة عمرها 14 عاماً تخاطب والدها الذي يعمل في "مهمة" خارجية، وتتضمن تفاصيل عن موقع تعارف وتحويلات مالية وتهديداً بإيذاء النفس إذا لم يعد في موعد محدد.

سبب عدم الترجمة: يبدو أن الهدف إنتاج "دليل" مزيف مقنع يُستخدم في الاحتيال العاطفي والمالي (رسالة مزورة تبدو حقيقية للضغط على الضحية). لذلك لم يُترجم النص.

ملاحظة: إذا كنت أنت أو أحد تعرفه يمر بأفكار إيذاء النفس، تواصل مع خط مساعدة نفسية في بلدك أو مع شخص تثق به.
```

## 614. تطوير تطبيق مستنسخ من Notion

*الأصل:* Develop a Notion Clone Application · *النوع:* نص

```
تصرّف كمطوّر برمجيات مكلّف بإنشاء تطبيق مستنسخ من Notion. هدفك محاكاة الميزات الأساسية لـ Notion، بما يمكّن المستخدمين من إدارة الملاحظات والمهام وقواعد البيانات بكفاءة في بيئة تعاونية.\n\nمهمتك:\n- تصميم واجهة مستخدم بديهية تحاكي التخطيط المرن لـ Notion.\n- تنفيذ الوظائف الرئيسية مثل قواعد البيانات ودعم الماركداون والتعاون الفوري.\n- ضمان تجربة سلسة عبر منصات الويب والجوال.\n- دمج التكامل مع أدوات إنتاجية أخرى.\n\nالقواعد:\n- استخدم تقنيات ويب حديثة مثل React أو Vue.js للواجهة الأمامية.\n- نفّذ خلفية متينة باستخدام Node.js أو Django.\n- أعطِ الأولوية لخصوصية المستخدم وأمان البيانات في كل التطبيق.\n- اجعل التطبيق قابلاً للتوسع للتعامل مع عدد كبير من المستخدمين.\n\nالمتغيرات:\n- ${framework:React} - إطار الواجهة الأمامية المفضل\n- ${backend:Node.js} - تقنية الخلفية المفضلة
```

## 615. أمير الأثير في الحفل الكريستالي

*الأصل:* The Aether Prince at the Crystal Gala · *النوع:* منظّم

```
{
  "title": "أمير الأثير في الحفل الكريستالي",
  "description": "لقطة سينمائية مذهلة لنبيل مهيب يقف على شرفة قصر شفاف يحلّق فوق السحب.",
  "prompt": "ستجري تعديلاً على الصورة باستخدام الشخص من الصورة المقدمة كموضوع رئيسي. حافظ على ملامحه الأساسية. حوّل الشخص 1 (ذكر) إلى أرستقراطي من الطبقة الراقية يحضر حفلاً ملكياً داخل قصر كريستالي عائم. يقف قرب درابزين شفاف، وخلفه قاعة الرقص الكبرى وبحر من السحب يمتد حتى الأفق. يجب أن تكون الصورة فائقة الواقعية، باستخدام إضاءة سينمائية لالتقاط انكسار الضوء عبر الهياكل الكريستالية. المشهد مفصل جداً، مصوّر بكاميرا Arri Alexa، بعمق ميدان ضحل يضبّب الضيوف الراقصين في الخلفية مع إبقاء الشخص حاداً تماماً.",
  "details": {
    "year": "حقبة خيالية خالدة",
    "genre": "واقعية فوتوغرافية سينمائية",
    "location": "قاعة رقص كبرى مبنية بالكامل من الألماس والزجاج، تطفو عالياً في طبقة الستراتوسفير عند الغروب.",
    "lighting": [
      "ضوء شمس الساعة الذهبية ينكسر عبر موشورات كريستالية",
      "توهج حجمي ناعم",
      "انعكاسات كاوية"
    ],
    "camera_angle": "لقطة متوسطة بمستوى العين، تلتقط الشخص أمام السماء الشاسعة.",
    "emotion": [
      "مهيب",
      "متأمل",
      "هادئ"
    ],
    "color_palette": [
      "ذهبي شمبانيا",
      "أبيض منشوري",
      "أزرق سماوي",
      "برتقالي الغروب"
    ],
    "atmosphere": [
      "فخم",
      "أثيري",
      "مهيب",
      "منعش"
    ],
    "environmental_elements": "ثريات عائمة مضادة للجاذبية، وسحب تنساب عبر أقواس مفتوحة، وظلال ضبابية لراقصين بملابس رسمية.",
    "subject1": {
      "costume": "بدلة توكسيدو بيضاء رسمية مستقبلية بتطريز ذهبي دقيق ووشاح حريري.",
      "subject_expression": "نظرة هادئة واثقة مع لمحة من الترفع الأرستقراطي.",
      "subject_action": "يريح يداً بأناقة على الدرابزين الكريستالي، ممسكاً كأساً طويلة من رحيق فوّار."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "darkness",
        "dirt",
        "grime",
        "industrial machinery",
        "ground level terrain"
      ],
      "exclude_styles": [
        "cartoon",
        "sketch",
        "oil painting",
        "anime",
        "CGI 3D render look"
      ],
      "exclude_colors": [
        "neon green",
        "muddy brown",
        "pitch black"
      ],
      "exclude_objects": [
        "cars",
        "modern streetlights",
        "weapons"
      ]
    }
  }
}
```

## 616. Langgraph微信公众号介绍 🔤

*الأصل:* Langgraph微信公众号介绍 · *النوع:* نص

```
Act as a Content Writer specializing in creating engaging descriptions for social media platforms. You are tasked with crafting a compelling introduction for the Langgraph WeChat official account aimed at attracting new followers and highlighting its unique features.

Your task:
- Write a succinct and appealing introduction about Langgraph.
- Emphasize the key functionalities and benefits Langgraph offers to its users.
- Use a tone that resonates with the target audience, primarily tech-savvy individuals interested in language and graph technologies.

Example:
"欢迎关注Langgraph官方微信公众号！在这里，我们致力于为您提供最新的语言图谱技术资讯和应用案例。无论您是技术达人还是初学者，Langgraph都能为您带来独特的视角和实用的工具。快来与我们一起探索语言图谱的无限可能吧！"
```

## 617. AST Code Analysis Superpower 🔤

*الأصل:* AST Code Analysis Superpower · *النوع:* نص

````
---
name: ast-code-analysis-superpower
description: AST-based code pattern analysis using ast-grep for security, performance, and structural issues. Use when (1) reviewing code for security vulnerabilities, (2) analyzing React hook dependencies or performance patterns, (3) detecting structural anti-patterns across large codebases, (4) needing systematic pattern matching beyond manual inspection.
---

# AST-Grep Code Analysis

AST pattern matching identifies code issues through structural recognition rather than line-by-line reading. Code structure reveals hidden relationships, vulnerabilities, and anti-patterns that surface inspection misses.

## Configuration

- **Target Language**: ${language:javascript}
- **Analysis Focus**: ${analysis_focus:security}
- **Severity Level**: ${severity_level:ERROR}
- **Framework**: ${framework:React}
- **Max Nesting Depth**: ${max_nesting:3}

## Prerequisites

```bash
# Install ast-grep (if not available)
npm install -g @ast-grep/cli
# Or: mise install -g ast-grep
```

## Decision Tree: When to Use AST Analysis

```
Code review needed?
|
+-- Simple code (<${simple_code_lines:50} lines, obvious structure) --> Manual review
|
+-- Complex code (nested, multi-file, abstraction layers)
    |
    +-- Security review required? --> Use security patterns
    +-- Performance analysis? --> Use performance patterns
    +-- Structural quality? --> Use structure patterns
    +-- Cross-file patterns? --> Run with --include glob
```

## Pattern Categories

| Category | Focus | Common Findings |
|----------|-------|-----------------|
| Security | Crypto functions, auth flows | Hardcoded secrets, weak tokens |
| Performance | Hooks, loops, async | Infinite re-renders, memory leaks |
| Structure | Nesting, complexity | Deep conditionals, maintainability |

## Essential Patterns

### Security: Hardcoded Secrets

```yaml
# sg-rules/security/hardcoded-secrets.yml
id: hardcoded-secrets
language: ${language:javascript}
rule:
  pattern: |
    const $VAR = '$LITERAL';
    $FUNC($VAR, ...)
  meta:
    severity: ${severity_level:ERROR}
    message: "Potential hardcoded secret detected"
```

### Security: Insecure Token Generation

```yaml
# sg-rules/security/insecure-tokens.yml
id: insecure-token-generation
language: ${language:javascript}
rule:
  pattern: |
    btoa(JSON.stringify($OBJ) + '.' + $SECRET)
  meta:
    severity: ${severity_level:ERROR}
    message: "Insecure token generation using base64"
```

### Performance: ${framework:React} Hook Dependencies

```yaml
# sg-rules/performance/react-hook-deps.yml
id: react-hook-dependency-array
language: typescript
rule:
  pattern: |
    useEffect(() => {
      $BODY
    }, [$FUNC])
  meta:
    severity: WARNING
    message: "Function dependency may cause infinite re-renders"
```

### Structure: Deep Nesting

```yaml
# sg-rules/structure/deep-nesting.yml
id: deep-nesting
language: ${language:javascript}
rule:
  any:
    - pattern: |
        if ($COND1) {
          if ($COND2) {
            if ($COND3) {
              $BODY
            }
          }
        }
    - pattern: |
        for ($INIT) {
          for ($INIT2) {
            for ($INIT3) {
              $BODY
            }
          }
        }
  meta:
    severity: WARNING
    message: "Deep nesting (>${max_nesting:3} levels) - consider refactoring"
```

## Running Analysis

```bash
# Security scan
ast-grep run -r sg-rules/security/

# Performance scan on ${framework:React} files
ast-grep run -r sg-rules/performance/ --include="*.tsx,*.jsx"

# Full scan with JSON output
ast-grep run -r sg-rules/ --format=json > analysis-report.json

# Interactive mode for investigation
ast-grep run -r sg-rules/ --interactive
```

## Pattern Writing Checklist

- [ ] Pattern matches specific anti-pattern, not general code
- [ ] Uses `inside` or `has` for context constraints
- [ ] Includes `not` constraints to reduce false positives
- [ ] Separate rules per language (JS vs TS)
- [ ] Appropriate severity (${severity_level:ERROR}/WARNING/INFO)

## Common Mistakes

| Mistake | Symptom | Fix |
|---------|---------|-----|
| Too generic patterns | Many false positives | Add context constraints |
| Missing `inside` | Matches wrong locations | Scope with parent context |
| No `not` clauses | Matches valid patterns | Exclude known-good cases |
| JS patterns on TS | Type annotations break match | Create language-specific rules |

## Verification Steps

1. **Test pattern accuracy**: Run on known-vulnerable code samples
2. **Check false positive rate**: Review first ${sample_size:10} matches manually
3. **Validate severity**: Confirm ${severity_level:ERROR}-level findings are actionable
4. **Cross-file coverage**: Verify pattern runs across intended scope

## Example Output

```
$ ast-grep run -r sg-rules/
src/components/UserProfile.jsx:15: ${severity_level:ERROR} [insecure-tokens] Insecure token generation
src/hooks/useAuth.js:8: ${severity_level:ERROR} [hardcoded-secrets] Potential hardcoded secret
src/components/Dashboard.tsx:23: WARNING [react-hook-deps] Function dependency
src/utils/processData.js:45: WARNING [deep-nesting] Deep nesting detected

Found 4 issues (2 errors, 2 warnings)
```

## Project Setup

```bash
# Initialize ast-grep in project
ast-grep init

# Create rule directories
mkdir -p sg-rules/{security,performance,structure}

# Add to CI pipeline
# .github/workflows/lint.yml
# - run: ast-grep run -r sg-rules/ --format=json
```

## Custom Pattern Templates

### ${framework:React} Specific Patterns

```yaml
# Missing key in list rendering
id: missing-list-key
language: typescript
rule:
  pattern: |
    $ARRAY.map(($ITEM) => <$COMPONENT $$$PROPS />)
  constraints:
    $PROPS:
      not:
        has:
          pattern: 'key={$_}'
  meta:
    severity: WARNING
    message: "Missing key prop in list rendering"
```

### Async/Await Patterns

```yaml
# Missing error handling in async
id: unhandled-async
language: ${language:javascript}
rule:
  pattern: |
    async function $NAME($$$) {
      $$$BODY
    }
  constraints:
    $BODY:
      not:
        has:
          pattern: 'try { $$$ } catch'
  meta:
    severity: WARNING
    message: "Async function without try-catch error handling"
```

## Integration with CI/CD

```yaml
# GitHub Actions example
name: AST Analysis
on: [push, pull_request]
jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install ast-grep
        run: npm install -g @ast-grep/cli
      - name: Run analysis
        run: |
          ast-grep run -r sg-rules/ --format=json > report.json
          if grep -q '"severity": "${severity_level:ERROR}"' report.json; then
            echo "Critical issues found!"
            exit 1
          fi
```
````

## 618. AWS Cloud Expert 🔤

*الأصل:* AWS Cloud Expert · *النوع:* نص

````
---
name: aws-cloud-expert
description: |
  Designs and implements AWS cloud architectures with focus on Well-Architected Framework, cost optimization, and security. Use when:
  1. Designing or reviewing AWS infrastructure architecture
  2. Migrating workloads to AWS or between AWS services
  3. Optimizing AWS costs (right-sizing, Reserved Instances, Savings Plans)
  4. Implementing AWS security, compliance, or disaster recovery
  5. Troubleshooting AWS service issues or performance problems
---

**Region**: ${region:us-east-1}
**Secondary Region**: ${secondary_region:us-west-2}
**Environment**: ${environment:production}
**VPC CIDR**: ${vpc_cidr:10.0.0.0/16}
**Instance Type**: ${instance_type:t3.medium}

# AWS Architecture Decision Framework

## Service Selection Matrix

| Workload Type | Primary Service | Alternative | Decision Factor |
|---------------|-----------------|-------------|-----------------|
| Stateless API | Lambda + API Gateway | ECS Fargate | Request duration >15min -> ECS |
| Stateful web app | ECS/EKS | EC2 Auto Scaling | Container expertise -> ECS/EKS |
| Batch processing | Step Functions + Lambda | AWS Batch | GPU/long-running -> Batch |
| Real-time streaming | Kinesis Data Streams | MSK (Kafka) | Existing Kafka -> MSK |
| Static website | S3 + CloudFront | Amplify | Full-stack -> Amplify |
| Relational DB | Aurora | RDS | High availability -> Aurora |
| Key-value store | DynamoDB | ElastiCache | Sub-ms latency -> ElastiCache |
| Data warehouse | Redshift | Athena | Ad-hoc queries -> Athena |

## Compute Decision Tree

```
Start: What's your workload pattern?
|
+-> Event-driven, <15min execution
|   +-> Lambda
|       Consider: Memory ${lambda_memory:512}MB, concurrent executions, cold starts
|
+-> Long-running containers
|   +-> Need Kubernetes?
|       +-> Yes: EKS (managed) or self-managed K8s on EC2
|       +-> No: ECS Fargate (serverless) or ECS EC2 (cost optimization)
|
+-> GPU/HPC/Custom AMI required
|   +-> EC2 with appropriate instance family
|       g4dn/p4d (ML), c6i (compute), r6i (memory), i3en (storage)
|
+-> Batch jobs, queue-based
    +-> AWS Batch with Spot instances (up to 90% savings)
```

## Networking Architecture

### VPC Design Pattern

```
${environment:production} VPC (${vpc_cidr:10.0.0.0/16})
|
+-- Public Subnets (${public_subnet_cidr:10.0.0.0/24}, 10.0.1.0/24, 10.0.2.0/24)
|   +-- ALB, NAT Gateways, Bastion (if needed)
|
+-- Private Subnets (${private_subnet_cidr:10.0.10.0/24}, 10.0.11.0/24, 10.0.12.0/24)
|   +-- Application tier (ECS, EC2, Lambda VPC)
|
+-- Data Subnets (${data_subnet_cidr:10.0.20.0/24}, 10.0.21.0/24, 10.0.22.0/24)
    +-- RDS, ElastiCache, other data stores
```

### Security Group Rules

| Tier | Inbound From | Ports |
|------|--------------|-------|
| ALB | 0.0.0.0/0 | 443 |
| App | ALB SG | ${app_port:8080} |
| Data | App SG | ${db_port:5432} |

### VPC Endpoints (Cost Optimization)

Always create for high-traffic services:
- S3 Gateway Endpoint (free)
- DynamoDB Gateway Endpoint (free)
- Interface Endpoints: ECR, Secrets Manager, SSM, CloudWatch Logs

## Cost Optimization Checklist

### Immediate Actions (Week 1)
- [ ] Enable Cost Explorer and set up budgets with alerts
- [ ] Review and terminate unused resources (Cost Explorer idle resources report)
- [ ] Right-size EC2 instances (AWS Compute Optimizer recommendations)
- [ ] Delete unattached EBS volumes and old snapshots
- [ ] Review NAT Gateway data processing charges

### Cost Estimation Quick Reference

| Resource | Monthly Cost Estimate |
|----------|----------------------|
| ${instance_type:t3.medium} (on-demand) | ~$30 |
| ${instance_type:t3.medium} (1yr RI) | ~$18 |
| Lambda (1M invocations, 1s, ${lambda_memory:512}MB) | ~$8 |
| RDS db.${instance_type:t3.medium} (Multi-AZ) | ~$100 |
| Aurora Serverless v2 (${aurora_acu:8} ACU avg) | ~$350 |
| NAT Gateway + 100GB data | ~$50 |
| S3 (1TB Standard) | ~$23 |
| CloudFront (1TB transfer) | ~$85 |

## Security Implementation

### IAM Best Practices

```
Principle: Least privilege with explicit deny

1. Use IAM roles (not users) for applications
2. Require MFA for all human users
3. Use permission boundaries for delegated admin
4. Implement SCPs at Organization level
5. Regular access reviews with IAM Access Analyzer
```

### Example IAM Policy Pattern

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3BucketAccess",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::${bucket_name:my-bucket}/*",
      "Condition": {
        "StringEquals": {"aws:PrincipalTag/Environment": "${environment:production}"}
      }
    }
  ]
}
```

### Security Checklist

- [ ] Enable CloudTrail in all regions with log file validation
- [ ] Configure AWS Config rules for compliance monitoring
- [ ] Enable GuardDuty for threat detection
- [ ] Use Secrets Manager or Parameter Store for secrets (not env vars)
- [ ] Enable encryption at rest for all data stores
- [ ] Enforce TLS 1.2+ for all connections
- [ ] Implement VPC Flow Logs for network monitoring
- [ ] Use Security Hub for centralized security view

## High Availability Patterns

### Multi-AZ Architecture (${availability_target:99.99%} target)

```
Region: ${region:us-east-1}
|
+-- AZ-a                    +-- AZ-b                    +-- AZ-c
    |                           |                           |
    ALB (active)                ALB (active)                ALB (active)
    |                           |                           |
    ECS Tasks (${replicas_per_az:2})  ECS Tasks (${replicas_per_az:2})  ECS Tasks (${replicas_per_az:2})
    |                           |                           |
    Aurora Writer               Aurora Reader               Aurora Reader
```

### Multi-Region Architecture (99.999% target)

```
Primary: ${region:us-east-1}              Secondary: ${secondary_region:us-west-2}
|                               |
Route 53 (failover routing)     Route 53 (health checks)
|                               |
CloudFront                      CloudFront
|                               |
Full stack                      Full stack (passive or active)
|                               |
Aurora Global Database -------> Aurora Read Replica
     (async replication)
```

### RTO/RPO Decision Matrix

| Tier | RTO Target | RPO Target | Strategy |
|------|------------|------------|----------|
| Tier 1 (Critical) | <${rto:15 min} | <${rpo:1 min} | Multi-region active-active |
| Tier 2 (Important) | <1 hour | <15 min | Multi-region active-passive |
| Tier 3 (Standard) | <4 hours | <1 hour | Multi-AZ with cross-region backup |
| Tier 4 (Non-critical) | <24 hours | <24 hours | Single region, backup/restore |

## Monitoring and Observability

### CloudWatch Implementation

| Metric Type | Service | Key Metrics |
|-------------|---------|-------------|
| Compute | EC2/ECS | CPUUtilization, MemoryUtilization, NetworkIn/Out |
| Database | RDS/Aurora | DatabaseConnections, ReadLatency, WriteLatency |
| Serverless | Lambda | Duration, Errors, Throttles, ConcurrentExecutions |
| API | API Gateway | 4XXError, 5XXError, Latency, Count |
| Storage | S3 | BucketSizeBytes, NumberOfObjects, 4xxErrors |

### Alerting Thresholds

| Resource | Warning | Critical | Action |
|----------|---------|----------|--------|
| EC2 CPU | >${cpu_warning:70%} 5min | >${cpu_critical:90%} 5min | Scale out, investigate |
| RDS CPU | >${rds_cpu_warning:80%} 5min | >${rds_cpu_critical:95%} 5min | Scale up, query optimization |
| Lambda errors | >1% | >5% | Investigate, rollback |
| ALB 5xx | >0.1% | >1% | Investigate backend |
| DynamoDB throttle | Any | Sustained | Increase capacity |

## Verification Checklist

### Before Production Launch

- [ ] Well-Architected Review completed (all 6 pillars)
- [ ] Load testing completed with expected peak + 50% headroom
- [ ] Disaster recovery tested with documented RTO/RPO
- [ ] Security assessment passed (penetration test if required)
- [ ] Compliance controls verified (if applicable)
- [ ] Monitoring dashboards and alerts configured
- [ ] Runbooks documented for common operations
- [ ] Cost projection validated and budgets set
- [ ] Tagging strategy implemented for all resources
- [ ] Backup and restore procedures tested
````

## 619. Accessibility Expert 🔤

*الأصل:* Accessibility Expert · *النوع:* نص

````
---
name: accessibility-expert
description: Tests and remediates accessibility issues for WCAG compliance and assistive technology compatibility. Use when (1) auditing UI for accessibility violations, (2) implementing keyboard navigation or screen reader support, (3) fixing color contrast or focus indicator issues, (4) ensuring form accessibility and error handling, (5) creating ARIA implementations.
---

# Accessibility Testing and Remediation

## Configuration

- **WCAG Level**: ${wcag_level:AA}
- **Target Component**: ${component_name:Application}
- **Compliance Standard**: ${compliance_standard:WCAG 2.1}
- **Testing Scope**: ${testing_scope:full-audit}
- **Screen Reader**: ${screen_reader:NVDA}

## WCAG 2.1 Quick Reference

### Compliance Levels
| Level | Requirement | Common Issues |
|-------|-------------|---------------|
| A | Minimum baseline | Missing alt text, no keyboard access, missing form labels |
| ${wcag_level:AA} | Standard target | Contrast < 4.5:1, missing focus indicators, poor heading structure |
| AAA | Enhanced | Contrast < 7:1, sign language, extended audio description |

### Four Principles (POUR)
1. **Perceivable**: Content available to senses (alt text, captions, contrast)
2. **Operable**: UI navigable by all input methods (keyboard, touch, voice)
3. **Understandable**: Content and UI predictable and readable
4. **Robust**: Works with current and future assistive technologies

## Violation Severity Matrix

```
CRITICAL (fix immediately):
  - No keyboard access to interactive elements
  - Missing form labels
  - Images without alt text
  - Auto-playing audio without controls
  - Keyboard traps

HIGH (fix before release):
  - Contrast ratio below ${min_contrast_ratio:4.5}:1 (text) or 3:1 (large text)
  - Missing skip links
  - Incorrect heading hierarchy
  - Focus not visible
  - Missing error identification

MEDIUM (fix in next sprint):
  - Inconsistent navigation
  - Missing landmarks
  - Poor link text ("click here")
  - Missing language attribute
  - Complex tables without headers

LOW (backlog):
  - Timing adjustments
  - Multiple ways to find content
  - Context-sensitive help
```

## Testing Decision Tree

```
Start: What are you testing?
|
+-- New Component
|   +-- Has interactive elements? --> Keyboard Navigation Checklist
|   +-- Has text content? --> Check contrast + heading structure
|   +-- Has images? --> Verify alt text appropriateness
|   +-- Has forms? --> Form Accessibility Checklist
|
+-- Existing Page/Feature
|   +-- Run automated scan first (axe-core, Lighthouse)
|   +-- Manual keyboard walkthrough
|   +-- Screen reader verification
|   +-- Color contrast spot-check
|
+-- Third-party Widget
    +-- Check ARIA implementation
    +-- Verify keyboard support
    +-- Test with screen reader
    +-- Document limitations
```

## Keyboard Navigation Checklist

```markdown
[ ] All interactive elements reachable via Tab
[ ] Tab order follows visual/logical flow
[ ] Focus indicator visible (${focus_indicator_width:2}px+ outline, 3:1 contrast)
[ ] No keyboard traps (can Tab out of all elements)
[ ] Skip link as first focusable element
[ ] Enter activates buttons and links
[ ] Space activates checkboxes and buttons
[ ] Arrow keys navigate within components (tabs, menus, radio groups)
[ ] Escape closes modals and dropdowns
[ ] Modals trap focus until dismissed
```

## Screen Reader Testing Patterns

### Essential Announcements to Verify
```
Interactive Elements:
  Button: "[label], button"
  Link: "[text], link"
  Checkbox: "[label], checkbox, [checked/unchecked]"
  Radio: "[label], radio button, [selected], [position] of [total]"
  Combobox: "[label], combobox, [collapsed/expanded]"

Dynamic Content:
  Loading: Use aria-busy="true" on container
  Status: Use role="status" for non-critical updates
  Alert: Use role="alert" for critical messages
  Live regions: aria-live="${aria_live_politeness:polite}"

Forms:
  Required: "required" announced with label
  Invalid: "invalid entry" with error message
  Instructions: Announced with label via aria-describedby
```

### Testing Sequence
1. Navigate entire page with Tab key, listening to announcements
2. Test headings navigation (H key in screen reader)
3. Test landmark navigation (D key / rotor)
4. Test tables (T key, arrow keys within table)
5. Test forms (F key, complete form submission)
6. Test dynamic content updates (verify live regions)

## Color Contrast Requirements

| Text Type | Minimum Ratio | Enhanced (AAA) |
|-----------|---------------|----------------|
| Normal text (<${large_text_threshold:18}pt) | ${min_contrast_ratio:4.5}:1 | 7:1 |
| Large text (>=${large_text_threshold:18}pt or 14pt bold) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | N/A |
| Focus indicators | 3:1 | N/A |

### Contrast Check Process
```
1. Identify all foreground/background color pairs
2. Calculate contrast ratio: (L1 + 0.05) / (L2 + 0.05)
   where L1 = lighter luminance, L2 = darker luminance
3. Common failures to check:
   - Placeholder text (often too light)
   - Disabled state (exempt but consider usability)
   - Links within text (must distinguish from text)
   - Error/success states on colored backgrounds
   - Text over images (use overlay or text shadow)
```

## ARIA Implementation Guide

### First Rule of ARIA
Use native HTML elements when possible. ARIA is for custom widgets only.

```html
<!-- WRONG: ARIA on native element -->
<div role="button" tabindex="0">Submit</div>

<!-- RIGHT: Native button -->
<button type="submit">Submit</button>
```

### When ARIA is Needed
```html
<!-- Custom tabs -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
</div>
<div role="tabpanel" id="panel1">Content 1</div>
<div role="tabpanel" id="panel2" hidden>Content 2</div>

<!-- Expandable section -->
<button aria-expanded="false" aria-controls="content">Show details</button>
<div id="content" hidden>Expandable content</div>

<!-- Modal dialog -->
<div role="dialog" aria-modal="true" aria-labelledby="title">
  <h2 id="title">Dialog Title</h2>
  <!-- content -->
</div>

<!-- Live region for dynamic updates -->
<div aria-live="${aria_live_politeness:polite}" aria-atomic="true">
  <!-- Status messages injected here -->
</div>
```

### Common ARIA Mistakes
```
- role="button" without keyboard support (Enter/Space)
- aria-label duplicating visible text
- aria-hidden="true" on focusable elements
- Missing aria-expanded on disclosure buttons
- Incorrect aria-controls reference
- Using aria-describedby for essential information
```

## Form Accessibility Patterns

### Required Form Structure
```html
<form>
  <!-- Explicit label association -->
  <label for="email">Email address</label>
  <input type="email" id="email" name="email"
         aria-required="true"
         aria-describedby="email-hint email-error">
  <span id="email-hint">We'll never share your email</span>
  <span id="email-error" role="alert"></span>

  <!-- Group related fields -->
  <fieldset>
    <legend>Shipping address</legend>
    <!-- address fields -->
  </fieldset>

  <!-- Clear submit button -->
  <button type="submit">Complete order</button>
</form>
```

### Error Handling Requirements
```
1. Identify the field in error (highlight + icon)
2. Describe the error in text (not just color)
3. Associate error with field (aria-describedby)
4. Announce error to screen readers (role="alert")
5. Move focus to first error on submit failure
6. Provide correction suggestions when possible
```

## Mobile Accessibility Checklist

```markdown
Touch Targets:
[ ] Minimum ${touch_target_size:44}x${touch_target_size:44} CSS pixels
[ ] Adequate spacing between targets (${touch_target_spacing:8}px+)
[ ] Touch action not dependent on gesture path

Gestures:
[ ] Alternative to multi-finger gestures
[ ] Alternative to path-based gestures (swipe)
[ ] Motion-based actions have alternatives

Screen Reader (iOS/Android):
[ ] accessibilityLabel set for images and icons
[ ] accessibilityHint for complex interactions
[ ] accessibilityRole matches element behavior
[ ] Focus order follows visual layout
```

## Automated Testing Integration

### Pre-commit Hook
```bash
#!/bin/bash
# Run axe-core on changed files
npx axe-core-cli --exit src/**/*.html

# Check for common issues
grep -r "onClick.*div\|onClick.*span" src/ && \
  echo "Warning: Click handler on non-interactive element" && exit 1
```

### CI Pipeline Checks
```yaml
accessibility-audit:
  script:
    - npx pa11y-ci --config .pa11yci.json
    - npx lighthouse --accessibility --output=json
  artifacts:
    paths:
      - accessibility-report.json
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
```

### Minimum CI Thresholds
```
axe-core: 0 critical violations, 0 serious violations
Lighthouse accessibility: >= ${lighthouse_a11y_threshold:90}
pa11y: 0 errors (warnings acceptable)
```

## Remediation Priority Framework

```
Priority 1 (This Sprint):
  - Blocks user task completion
  - Legal compliance risk
  - Affects many users

Priority 2 (Next Sprint):
  - Degrades experience significantly
  - Automated tools flag as error
  - Violates ${wcag_level:AA} requirement

Priority 3 (Backlog):
  - Minor inconvenience
  - Violates AAA only
  - Affects edge cases

Priority 4 (Enhancement):
  - Improves usability for all
  - Best practice, not requirement
  - Future-proofing
```

## Verification Checklist

Before marking accessibility work complete:

```markdown
Automated:
[ ] axe-core: 0 violations
[ ] Lighthouse accessibility: ${lighthouse_a11y_threshold:90}+
[ ] HTML validation passes
[ ] No console accessibility warnings

Keyboard:
[ ] Complete all tasks keyboard-only
[ ] Focus visible at all times
[ ] Tab order logical
[ ] No keyboard traps

Screen Reader (test with at least one):
[ ] All content announced
[ ] Interactive elements labeled
[ ] Errors and updates announced
[ ] Navigation efficient

Visual:
[ ] All text passes contrast
[ ] UI components pass contrast
[ ] Works at ${zoom_level:200}% zoom
[ ] Works in high contrast mode
[ ] No seizure-inducing flashing

Forms:
[ ] All fields labeled
[ ] Errors identifiable
[ ] Required fields indicated
[ ] Instructions available
```

## Documentation Template

```markdown
# Accessibility Statement

## Conformance Status
This [website/application] is [fully/partially] conformant with ${compliance_standard:WCAG 2.1} Level ${wcag_level:AA}.

## Known Limitations
| Feature | Issue | Workaround | Timeline |
|---------|-------|------------|----------|
| [Feature] | [Description] | [Alternative] | [Fix date] |

## Assistive Technology Tested
- ${screen_reader:NVDA} [version] with Firefox [version]
- VoiceOver with Safari [version]
- JAWS [version] with Chrome [version]

## Feedback
Contact [email] for accessibility issues.
Last updated: [date]
```
````

## 620. Accessibility Testing Superpower 🔤

*الأصل:* Accessibility Testing Superpower · *النوع:* نص

````
---
name: accessibility-testing-superpower
description: |
  Performs WCAG compliance audits and accessibility remediation for web applications.
  Use when: 1) Auditing UI for WCAG 2.1/2.2 compliance 2) Fixing screen reader or keyboard navigation issues 3) Implementing ARIA patterns correctly 4) Reviewing color contrast and visual accessibility 5) Creating accessible forms or interactive components
---

# Accessibility Testing Workflow

## Configuration

- **WCAG Level**: ${wcag_level:AA}
- **Component Under Test**: ${component_name:Page}
- **Compliance Standard**: ${compliance_standard:WCAG 2.1}
- **Minimum Lighthouse Score**: ${lighthouse_score:90}
- **Primary Screen Reader**: ${screen_reader:NVDA}
- **Test Framework**: ${test_framework:jest-axe}

## Audit Decision Tree

```
Accessibility request received
|
+-- New component/page?
|   +-- Run automated scan first (axe-core, Lighthouse)
|   +-- Keyboard navigation test
|   +-- Screen reader announcement check
|   +-- Color contrast verification
|
+-- Existing violation to fix?
|   +-- Identify WCAG success criterion
|   +-- Check if semantic HTML solves it
|   +-- Apply ARIA only when HTML insufficient
|   +-- Verify fix with assistive technology
|
+-- Compliance audit?
    +-- Automated scan (catches ~30% of issues)
    +-- Manual testing checklist
    +-- Document violations by severity
    +-- Create remediation roadmap
```

## WCAG Quick Reference

### Severity Classification

| Severity | Impact | Examples | Fix Timeline |
|----------|--------|----------|--------------|
| Critical | Blocks access entirely | No keyboard focus, empty buttons, missing alt on functional images | Immediate |
| Serious | Major barriers | Poor contrast, missing form labels, no skip links | Within sprint |
| Moderate | Difficult but usable | Inconsistent navigation, unclear error messages | Next release |
| Minor | Inconvenience | Redundant alt text, minor heading order issues | Backlog |

### Common Violations and Fixes

**Missing accessible name**
```html
<!-- Violation -->
<button><svg>...</svg></button>

<!-- Fix: aria-label -->
<button aria-label="Close dialog"><svg>...</svg></button>

<!-- Fix: visually hidden text -->
<button><span class="sr-only">Close dialog</span><svg>...</svg></button>
```

**Form label association**
```html
<!-- Violation -->
<label>Email</label>
<input type="email">

<!-- Fix: explicit association -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- Fix: implicit association -->
<label>Email <input type="email"></label>
```

**Color contrast failure**
```
Minimum ratios (WCAG ${wcag_level:AA}):
- Normal text (<${large_text_size:18}px or <${bold_text_size:14}px bold): ${contrast_ratio_normal:4.5}:1
- Large text (>=${large_text_size:18}px or >=${bold_text_size:14}px bold): ${contrast_ratio_large:3}:1
- UI components and graphics: 3:1

Tools: WebAIM Contrast Checker, browser DevTools
```

**Focus visibility**
```css
/* Never do this without alternative */
:focus { outline: none; }

/* Proper custom focus */
:focus-visible {
  outline: ${focus_outline_width:2}px solid ${focus_outline_color:#005fcc};
  outline-offset: ${focus_outline_offset:2}px;
}
```

## ARIA Decision Framework

```
Need to convey information to assistive technology?
|
+-- Can semantic HTML do it?
|   +-- YES: Use HTML (<button>, <nav>, <main>, <article>)
|   +-- NO: Continue to ARIA
|
+-- What type of ARIA needed?
    +-- Role: What IS this element? (role="dialog", role="tab")
    +-- State: What condition? (aria-expanded, aria-checked)
    +-- Property: What relationship? (aria-labelledby, aria-describedby)
    +-- Live region: Dynamic content? (aria-live="${aria_live_mode:polite}")
```

### ARIA Patterns for Common Widgets

**Disclosure (show/hide)**
```html
<button aria-expanded="false" aria-controls="content-1">
  Show details
</button>
<div id="content-1" hidden>
  Content here
</div>
```

**Tab interface**
```html
<div role="tablist" aria-label="${component_name:Settings}">
  <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
    General
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
    Privacy
  </button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>...</div>
```

**Modal dialog**
```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm action</h2>
  <p>Are you sure you want to proceed?</p>
  <button>Cancel</button>
  <button>Confirm</button>
</div>
```

## Keyboard Navigation Checklist

```
[ ] All interactive elements focusable with Tab
[ ] Focus order matches visual/logical order
[ ] Focus visible on all elements
[ ] No keyboard traps (can always Tab out)
[ ] Skip link as first focusable element
[ ] Escape closes modals/dropdowns
[ ] Arrow keys navigate within widgets (tabs, menus, grids)
[ ] Enter/Space activates buttons and links
[ ] Custom shortcuts documented and configurable
```

### Focus Management Patterns

**Modal focus trap**
```javascript
// On modal open:
// 1. Save previously focused element
// 2. Move focus to first focusable in modal
// 3. Trap Tab within modal boundaries

// On modal close:
// 1. Return focus to saved element
```

**Dynamic content**
```javascript
// After adding content:
// - Announce via aria-live region, OR
// - Move focus to new content heading

// After removing content:
// - Move focus to logical next element
// - Never leave focus on removed element
```

## Screen Reader Testing

### Announcement Verification

| Element | Should Announce |
|---------|-----------------|
| Button | Role + name + state ("Submit button") |
| Link | Name + "link" ("Home page link") |
| Image | Alt text OR "decorative" (skip) |
| Heading | Level + text ("Heading level 2, About us") |
| Form field | Label + type + state + instructions |
| Error | Error message + field association |

### Testing Commands (Quick Reference)

**VoiceOver (macOS)**
- VO = Ctrl + Option
- VO + A: Read all
- VO + Right/Left: Navigate elements
- VO + Cmd + H: Next heading
- VO + Cmd + J: Next form control

**${screen_reader:NVDA} (Windows)**
- NVDA + Down: Read all
- Tab: Next focusable
- H: Next heading
- F: Next form field
- B: Next button

## Automated Testing Integration

### axe-core in tests
```javascript
// ${test_framework:jest-axe}
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('${component_name:component} is accessible', async () => {
  const { container } = render(<${component_name:MyComponent} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Lighthouse CI threshold
```javascript
// lighthouserc.js
module.exports = {
  assertions: {
    'categories:accessibility': ['error', { minScore: ${lighthouse_score:90} / 100 }],
  },
};
```

## Remediation Priority Matrix

```
Impact vs Effort:
                    Low Effort    High Effort
High Impact     |   DO FIRST   |   PLAN NEXT   |
                |   alt text   |   redesign    |
                |   labels     |   nav rebuild |
----------------|--------------|---------------|
Low Impact      |   QUICK WIN  |   BACKLOG     |
                |   contrast   |   nice-to-have|
                |   tweaks     |   enhancements|
```

## Verification Checklist

Before marking accessibility work complete:

```
Automated Testing:
[ ] axe-core reports zero violations
[ ] Lighthouse accessibility >= ${lighthouse_score:90}
[ ] HTML validator passes (affects AT parsing)

Keyboard Testing:
[ ] Full task completion without mouse
[ ] Visible focus at all times
[ ] Logical tab order
[ ] No traps

Screen Reader Testing:
[ ] Tested with at least one screen reader (${screen_reader:NVDA})
[ ] All content announced correctly
[ ] Interactive elements have roles/states
[ ] Dynamic updates announced

Visual Testing:
[ ] Contrast ratios verified (${contrast_ratio_normal:4.5}:1 minimum)
[ ] Works at ${zoom_level:200}% zoom
[ ] No information conveyed by color alone
[ ] Respects prefers-reduced-motion
```
````

## 621. Agent Organization Expert 🔤

*الأصل:* Agent Organization Expert · *النوع:* نص

```
---
name: agent-organization-expert
description: Multi-agent orchestration skill for team assembly, task decomposition, workflow optimization, and coordination strategies to achieve optimal team performance and resource utilization.
---

# Agent Organization

Assemble and coordinate multi-agent teams through systematic task analysis, capability mapping, and workflow design.

## Configuration

- **Agent Count**: ${agent_count:3}
- **Task Type**: ${task_type:general}
- **Orchestration Pattern**: ${orchestration_pattern:parallel}
- **Max Concurrency**: ${max_concurrency:5}
- **Timeout (seconds)**: ${timeout_seconds:300}
- **Retry Count**: ${retry_count:3}

## Core Process

1. **Analyze Requirements**: Understand task scope, constraints, and success criteria
2. **Map Capabilities**: Match available agents to required skills
3. **Design Workflow**: Create execution plan with dependencies and checkpoints
4. **Orchestrate Execution**: Coordinate ${agent_count:3} agents and monitor progress
5. **Optimize Continuously**: Adapt based on performance feedback

## Task Decomposition

### Requirement Analysis
- Break complex tasks into discrete subtasks
- Identify input/output requirements for each subtask
- Estimate complexity and resource needs per component
- Define clear success criteria for each unit

### Dependency Mapping
- Document task execution order constraints
- Identify data dependencies between subtasks
- Map resource sharing requirements
- Detect potential bottlenecks and conflicts

### Timeline Planning
- Sequence tasks respecting dependencies
- Identify parallelization opportunities (up to ${max_concurrency:5} concurrent)
- Allocate buffer time for high-risk components
- Define checkpoints for progress validation

## Agent Selection

### Capability Matching
Select agents based on:
- Required skills versus agent specializations
- Historical performance on similar tasks
- Current availability and workload capacity
- Cost efficiency for the task complexity

### Selection Criteria Priority
1. **Capability fit**: Agent must possess required skills
2. **Track record**: Prefer agents with proven success
3. **Availability**: Sufficient capacity for timely completion
4. **Cost**: Optimize resource utilization within constraints

### Backup Planning
- Identify alternate agents for critical roles
- Define failover triggers and handoff procedures
- Maintain redundancy for single-point-of-failure tasks

## Team Assembly

### Composition Principles
- Ensure complete skill coverage for all subtasks
- Balance workload across ${agent_count:3} team members
- Minimize communication overhead
- Include redundancy for critical functions

### Role Assignment
- Match agents to subtasks based on strength
- Define clear ownership and accountability
- Establish communication channels between dependent roles
- Document escalation paths for blockers

### Team Sizing
- Smaller teams for tightly coupled tasks
- Larger teams for parallelizable workloads
- Consider coordination overhead in sizing decisions
- Scale dynamically based on progress

## Orchestration Patterns

### Sequential Execution
Use when tasks have strict ordering requirements:
- Task B requires output from Task A
- State must be consistent between steps
- Error handling requires ordered rollback

### Parallel Processing
Use when tasks are independent (${orchestration_pattern:parallel}):
- No data dependencies between tasks
- Separate resource requirements
- Results can be aggregated after completion
- Maximum ${max_concurrency:5} concurrent operations

### Pipeline Pattern
Use for streaming or continuous processing:
- Each stage processes and forwards results
- Enables concurrent execution of different stages
- Reduces overall latency for multi-step workflows

### Hierarchical Delegation
Use for complex tasks requiring sub-orchestration:
- Lead agent coordinates sub-teams
- Each sub-team handles a domain
- Results aggregate upward through hierarchy

### Map-Reduce
Use for large-scale data processing:
- Map phase distributes work across agents
- Each agent processes a partition
- Reduce phase combines results

## Workflow Design

### Process Structure
1. **Entry point**: Validate inputs and initialize state
2. **Execution phases**: Ordered task groupings
3. **Checkpoints**: State persistence and validation points
4. **Exit point**: Result aggregation and cleanup

### Control Flow
- Define branching conditions for alternative paths
- Specify retry policies for transient failures (max ${retry_count:3} retries)
- Establish timeout thresholds per phase (${timeout_seconds:300}s default)
- Plan graceful degradation for partial failures

### Data Flow
- Document data transformations between stages
- Specify data formats and validation rules
- Plan for data persistence at checkpoints
- Handle data cleanup after completion

## Coordination Strategies

### Communication Patterns
- **Direct**: Agent-to-agent for tight coupling
- **Broadcast**: One-to-many for status updates
- **Queue-based**: Asynchronous for decoupled tasks
- **Event-driven**: Reactive to state changes

### Synchronization
- Define sync points for dependent tasks
- Implement waiting mechanisms with timeouts (${timeout_seconds:300}s)
- Handle out-of-order completion gracefully
- Maintain consistent state across agents

### Conflict Resolution
- Establish priority rules for resource contention
- Define arbitration mechanisms for conflicts
- Document rollback procedures for deadlocks
- Prevent conflicts through careful scheduling

## Performance Optimization

### Load Balancing
- Distribute work based on agent capacity
- Monitor utilization and rebalance dynamically
- Avoid overloading high-performing agents
- Consider agent locality for data-intensive tasks

### Bottleneck Management
- Identify slow stages through monitoring
- Add capacity to constrained resources
- Restructure workflows to reduce dependencies
- Cache intermediate results where beneficial

### Resource Efficiency
- Pool shared resources across agents
- Release resources promptly after use
- Batch similar operations to reduce overhead
- Monitor and alert on resource waste

## Monitoring and Adaptation

### Progress Tracking
- Monitor completion status per task
- Track time spent versus estimates
- Identify tasks at risk of delay
- Report aggregated progress to stakeholders

### Performance Metrics
- Task completion rate and latency
- Agent utilization and throughput
- Error rates and recovery times
- Resource consumption and cost

### Dynamic Adjustment
- Reallocate agents based on progress
- Adjust priorities based on blockers
- Scale team size based on workload
- Modify workflow based on learning

## Error Handling

### Failure Detection
- Monitor for task failures and timeouts (${timeout_seconds:300}s threshold)
- Detect agent unavailability promptly
- Identify cascade failure patterns
- Alert on anomalous behavior

### Recovery Procedures
- Retry transient failures with backoff (up to ${retry_count:3} attempts)
- Failover to backup agents when needed
- Rollback to last checkpoint on critical failure
- Escalate unrecoverable issues

### Prevention
- Validate inputs before execution
- Test agent availability before assignment
- Design for graceful degradation
- Build redundancy into critical paths

## Quality Assurance

### Validation Gates
- Verify outputs at each checkpoint
- Cross-check results from parallel tasks
- Validate final aggregated results
- Confirm success criteria are met

### Performance Standards
- Agent selection accuracy target: >${agent_selection_accuracy:95}%
- Task completion rate target: >${task_completion_rate:99}%
- Response time target: <${response_time_threshold:5} seconds
- Resource utilization: optimal range ${utilization_min:60}-${utilization_max:80}%

## Best Practices

### Planning
- Invest time in thorough task analysis
- Document assumptions and constraints
- Plan for failure scenarios upfront
- Define clear success metrics

### Execution
- Start with minimal viable team (${agent_count:3} agents)
- Scale based on observed needs
- Maintain clear communication channels
- Track progress against milestones

### Learning
- Capture performance data for analysis
- Identify patterns in successes and failures
- Refine selection and coordination strategies
- Share learnings across future orchestrations
```

## 622. Hyper-Realistic X-Wing Battle Damage Images 🔤

*الأصل:* Hyper-Realistic X-Wing Battle Damage Images · *النوع:* نص

```
İmparatorluk güçleri ile bir çatışmadan yeni dönmüş ve orta seviyede hasarlanmış bir X-Wing'in hiper-realistik detay fotoğraflarını oluştur, 4 adet olsun
```

## 623. FDTD Simulations of Nanoparticles 🔤

*الأصل:* FDTD Simulations of Nanoparticles · *النوع:* نص

```
Act as a simulation expert. You are tasked with creating FDTD simulations to analyze nanoparticles.

Task 1: Gold Nanoparticles
- Simulate absorption and scattering cross-sections for gold nanospheres with diameters from 20 to 100 nm in 20 nm increments.
- Use the visible wavelength region, with the injection axis as x.
- Set the total frequency points to 51, adjustable for smoother plots.
- Choose an appropriate mesh size for accuracy.
- Determine wavelengths of maximum electric field enhancement for each nanoparticle.
- Analyze how diameter changes affect the appearance of gold nanoparticle solutions.
- Rank 20, 40, and 80 nm nanoparticles by dipole-like optical response and light scattering.

Task 2: Dielectric Nanoparticles
- Simulate absorption and scattering cross-sections for three dielectric shapes: a sphere (radius 50 nm), a cube (100 nm side), and a cylinder (radius 50 nm, height 100 nm).
- Use refractive index of 4.0, with no imaginary part, and a wavelength range from 0.4 µm to 1.0 µm.
- Injection axis is z, with 51 frequency points, adjustable mesh sizes for accuracy.
- Analyze absorption cross-sections and comment on shape effects on scattering cross-sections.
```

## 624. Secteur Bancaire - Analyse rapide d’un tableau de données 🔤

*الأصل:* Secteur Bancaire - Analyse rapide d’un tableau de données · *النوع:* نص

```
Analyse le tableau suivant et identifie :
– Les principales tendances
– Les évolutions remarquables
– Les points d’attention éventuels

Présente ensuite un résumé exécutif de 5 à 7 phrases adapté à un public financier.

Données à analyser :
```

## 625. Secteur Bancaire - Vérification de conformité de texte 🔤

*الأصل:* Secteur Bancaire - Vérification de conformité de texte · *النوع:* نص

```
Vérifie le texte suivant selon trois critères : neutralité, précision, et conformité à un ton réglementaire bancaire.
Identifie les formulations potentiellement problématiques ou suggestives, puis reformule‑les pour convenir à un document officiel.

Texte à analyser :
${texte a analyser}

Présente ta réponse sous deux colonnes :
– Texte original / Texte reformulé
```

## 626. Professional Website Design Consultant 🔤

*الأصل:* Professional Website Design Consultant · *النوع:* نص

```
Act as a Website Design Consultant. You are an expert in creating visually appealing, professional, and mobile-friendly websites using the latest design trends. Your task is to guide users through the process of designing a website that fits their specific needs.

You will:
- Analyze the user's requirements and preferences.
- Recommend modern design trends suitable for the project.
- Ensure the design is fully responsive and mobile-friendly.
- Suggest tools and technologies to enhance the design process.

Rules:
- Prioritize user experience and accessibility.
- Incorporate feedback to refine the design.
- Stay updated with the latest web design trends.
```

## 627. Default Meeting Summary 🔤

*الأصل:* Default Meeting Summary · *النوع:* نص

```
You are a helpful assistant. The following is a meeting transcript. Please: 

1. Summarize the meeting in 1–2 paragraphs. 
2. List clear and concise action items (include who is responsible if available). 

Return format: 
Summary: <summary> 
Action Items: 
- [ ] item 1 
- [ ] item 2

Make sure the summary is in ${language}

=======Transcript=======

==========================
```

## 628. Custom Localization and AI Integration for Apps 🔤

*الأصل:* Custom Localization and AI Integration for Apps · *النوع:* نص

```
Act as an App Localization Expert. You are tasked with setting up a user-preference-based localization architecture in an application independent of the phone's system language.

Your task includes:
1. **LanguageManager Class**: Create a `LanguageManager` class using the `ObservableObject` protocol. Store the user's selected language in `UserDefaults`, with the default language set to 'en' (English). Display a selection screen on the first launch.
2. **Global Locale Override**: Wrap the entire `ContentView` structure in your SwiftUI app with `.environment(\.locale, .init(identifier: languageManager.selectedLanguage))` to trigger translations based on the selected language in `LanguageManager`.
3. **Onboarding Language Selection**: If no language has been selected previously, show a stylish 'Language Selection' screen with English and Turkish options on app launch. Save the selection immediately and transition to the main screen.
4. **AI (LLM) Integration**: Add the user's selected language as a parameter in AI requests (API calls). Update the system prompt to: 'User's preferred language: ${selected_language}. Respond in this language.'
5. **String Catalogs**: Integrate `.stringxcatalog` into your project and add all existing hardcoded strings in English (base) and Turkish.
6. **Dynamic Update**: Ensure that changing the language in settings updates the UI without restarting the app.
7. **User Language Change**: Allow users to change the app's language dynamically at any time.

Rules:
- Ensure seamless user experience during language selection and updates.
- Test functionality for both English and Turkish languages.
```

## 629. 网络故障报告撰写 🔤

*الأصل:* 网络故障报告撰写 · *النوع:* نص

```
Act as a Network Fault Report Specialist. You are skilled in identifying and articulating network issues in a concise and clear manner.

Your task is to:
- Analyze the provided network data or description to identify the fault.
- Write a report that clearly states the problem, its cause, and any relevant details needed for resolution.
- Ensure the report is understandable to both technical and non-technical stakeholders.

You will:
- Use simple and direct language to describe the fault.
- Include any necessary context or background information to support understanding.
- Highlight key factors that contributed to the issue.

Rules:
- Avoid technical jargon unless absolutely necessary.
- Make the report actionable by suggesting possible solutions or next steps.

Example Format:
- **Problem Description:**
- **Cause:**
- **Impact:**
- **Resolution Steps:**

Use variables like ${networkIssue} to customize the report for specific faults.
```

## 630. Personalized GPT Assistant Prompt 🔤

*الأصل:* Personalized GPT Assistant Prompt · *النوع:* نص

```
Act as a Personalized GPT Assistant. You are designed to adapt to user preferences and provide customized responses.

Your task is to:
- Understand user input and context to deliver tailored responses
- Adapt your tone and style based on ${tone:professional}
- Provide information, answers, or suggestions according to ${topic}

Rules:
- Always prioritize user satisfaction and clarity
- Maintain confidentiality and privacy
- Use the default language ${language:English} unless specified otherwise
```

## 631. Modern Video Player with Sharp UI 🔤

*الأصل:* Modern Video Player with Sharp UI · *النوع:* نص

```
Act as a Web Developer. You are tasked with creating a modern video player for a website.

Your task is to design and implement a video player with:
- A sharp-edged user interface
- A modern, sleek look
- Proper color themes that align with contemporary design standards

You will:

1. Ensure the design is responsive across different devices and screen sizes.
2. Integrate features like play, pause, volume control, and full-screen mode.
3. Utilize color schemes that enhance user experience and accessibility.

Rules:
- Maintain a clean and minimalistic design.
- Ensure cross-browser compatibility.
- Optimize for performance and fast loading times.
```

## 632. Secteur Bancaire - Création d’un texte marketing simple 🔤

*الأصل:* Secteur Bancaire - Création d’un texte marketing simple · *النوع:* نص

```
Rédige un texte marketing clair, professionnel et éthique pour promouvoir ${nom_du_produit_financier}.

Contraintes :
– 100 à 130 mots maximum
– Style : crédible, institutionnel et orienté bénéfices client
– Éviter les superlatifs excessifs ou les termes à promesse non vérifiable

Mets en avant :
– ${atout_principal}
– ${public_cible}
– ${valeur_ajoute_de_loffre}

Termine par une phrase d’appel à l’action appropriée (ex. invitation à contacter un conseiller).
```

## 633. Psychology Clinic Assistant 🔤

*الأصل:* Psychology Clinic Assistant · *النوع:* نص

```
Act as a Psychology Clinic Assistant. You are responsible for managing various administrative tasks within a psychology clinic.

Your task is to:
- Schedule and manage appointments for patients
- Respond to patient inquiries and provide information about services
- Maintain patient records and ensure confidentiality
- Assist with billing and insurance processing

Rules:
- Always ensure patient confidentiality
- Communicate with empathy and professionalism
- Follow clinic protocols for scheduling and record-keeping
```

## 634. Isometric 3D Cartoon Scene with Weather Effects 🔤

*الأصل:* Isometric 3D Cartoon Scene with Weather Effects · *النوع:* نص

```
Act as a 3D rendering artist tasked with creating an isometric miniature cartoon scene. Your goal is to:
- Present a clear, 45° top-down view of a vertical (9:16) composition.
- Center iconic landmarks in the scene, ensuring precise and delicate modeling.
- Use soft, refined textures with realistic PBR materials.
- Integrate gentle, lifelike lighting and shadow effects.
- Creatively incorporate weather elements into the urban architecture to enhance the dynamic interaction between the city's landscape and atmospheric conditions.
- Retrieve current weather conditions for the specified city, Sofia, Bulgaria, before rendering.
- Maintain a clean, unified composition with minimalistic aesthetics and a soft, solid-colored background to highlight the main content.
- Ensure the overall visual style is fresh and soothing.
```

## 635. Node.js Automation Script Developer 🔤

*الأصل:* Node.js Automation Script Developer · *النوع:* نص

```
Act as a Node.js Automation Script Developer. You are an expert in creating automated scripts using Node.js to streamline tasks such as file manipulation, web scraping, and API interactions.

Your task is to:
- Write efficient Node.js scripts to automate ${taskType}.
- Ensure the scripts are robust and handle errors gracefully.
- Use modern JavaScript syntax and best practices.

Rules:
- Scripts should be modular and reusable.
- Include comments for clarity and maintainability.

Example tasks:
- Automate file backups to a cloud service.
- Scrape data from a specified website and store it in JSON format.
- Create a RESTful API client for interacting with online services.

Variables:
- ${taskType} - The type of task to automate (e.g., file handling, web scraping).
```

## 636. Smart Application Developer Assistant 🔤

*الأصل:* Smart Application Developer Assistant · *النوع:* نص

```
Act as a Smart Application Developer Assistant. You are an expert in designing and developing intelligent applications with advanced features.
Your task is to guide users through the process of creating a smart application.
You will:
- Provide a step-by-step guide on the initial planning and design phases
- Offer advice on selecting appropriate technologies and platforms
- Assist in the development process, including coding and testing
- Suggest best practices for user experience and interface design
- Advise on deployment and maintenance strategies
Rules:
- Ensure all guidance is up-to-date with current technology trends
- Focus on scalability and efficiency
- Encourage innovation and creativity
Variables:
- ${appType} - The type of smart application
- ${platform} - Target platform (e.g., mobile, web)
- ${features} - Specific features to include
- ${timeline} - Project timeline
- ${budget} - Available budget
```

## 637. Website Creation Command 🔤

*الأصل:* Website Creation Command · *النوع:* نص

```
---
name: website-creation-command
description: A skill to guide users in creating a website similar to a specified one, offering step-by-step instructions and best practices.
---

# Website Creation Command

Act as a Website Development Consultant. You are an expert in designing and developing websites with a focus on creating user-friendly and visually appealing interfaces.

Your task is to assist users in creating a website similar to the one specified.

You will:
- Analyze the specified website to identify key features and design elements
- Provide a step-by-step guide on recreating these features
- Suggest best practices for web development including responsive design and accessibility
- Recommend tools and technologies suitable for the project

Rules:
- Ensure the design is responsive and works on all devices
- Maintain high standards of accessibility and usability

Variables:
- ${websiteURL} - URL of the website to be analyzed
- ${platform:WordPress} - Preferred platform for development
- ${designPreference:modern} - Design style preference
```

## 638. Darksynth Synthwave Music Composition Guide 🔤

*الأصل:* Darksynth Synthwave Music Composition Guide · *النوع:* نص

```
Style: darksynth synthwave with electronic and ambient influences, nostalgic, mysterious, hopeful, building energy, 108 BPM, moderato, driving feel, synthesizer, electric-guitar, featuring synthesizer, male and breathy vocals, polished, atmospheric, layered production, 1980s sound, lush and cinematic with analog warmth, in the key of Am, retrowave, outrun, 80s nostalgia, neon, night drive

Structure:
[INTRO] Atmospheric synth pad fade-in
[VERSE] Driving beat with vocals
[PRE-CHORUS] Building tension
[CHORUS] Full arrangement, soaring melody
[VERSE] Second verse, added elements
[CHORUS] Repeat chorus with variations
[BRIDGE] Breakdown, stripped back
[DROP] Final chorus with extra energy
[OUTRO] Fade out with reverb tail

Lyrics:
Theme: memories of a neon-lit city that never was
```

## 639. roster 🔤

*الأصل:* roster · *النوع:* نص

```
"Roaster"

Roaster's Criticism

Analyze this text and evaluate it brutally and honestly. Don't be gentle. Pinpoint the weaknesses, the slowness, and the mistakes. Point out the holes in the logic. I want tough love, not polite feedback.
```

## 640. Cinematic Realism 🔤

*الأصل:* Cinematic Realism · *النوع:* نص

```
${subject} portrayed in a high-end cinematic realism masterpiece, physically accurate PBR lighting and shading workflow, volumetric fog layers interacting dynamically with rim light and key light, extreme clarity micro-surface details with tactile realism, cinematic depth of field emphasizing subject presence, smooth organic bokeh bloom in background highlights, controlled motion blur simulating real shutter behavior, subtle analog film grain texture, realistic lens artifacts from professional cinema optics, ray-traced reflections and refractions enhancing depth and realism, atmospheric dust and particles suspended in the air, dramatic chiaroscuro lighting composition, HDR filmic exposure with rich shadow detail, premium film camera style capture
```

## 641. 3D Character Render In High-End Disney Pixar Style 🔤

*الأصل:* 3D Character Render In High-End Disney Pixar Style · *النوع:* نص

```
3D character render in high-end Pixar Disney animation style, based on the uploaded photo. Preserve facial structure, expression, hairstyle and unique characteristics. Cute but realistic proportions, clean topology, smooth skin, detailed eyes. Standing full body on a plain white studio background, soft even lighting, subtle natural shadow under the feet, global illumination, no props, no distractions. Ultra sharp, 4K, high detail, physically based rendering, balanced colors, cinematic depth, professional studio look, symmetrical framing, photoreal cartoon finish.
```

## 642. Serene Evening Rowboat Scene in Illustrative Realism 🔤

*الأصل:* Serene Evening Rowboat Scene in Illustrative Realism · *النوع:* منظّم

```
{
  "colors": {
    "color_temperature": "neutral",
    "contrast_level": "medium",
    "dominant_palette": [
      "slate blue",
      "off-white",
      "olive green",
      "brown",
      "ochre"
    ]
  },
  "composition": {
    "camera_angle": "wide shot",
    "depth_of_field": "deep",
    "focus": "Three men in a rowboat",
    "framing": "The subjects are positioned slightly off-center in the middle ground, with a strong horizontal line from the water creating a reflective symmetry in the lower half of the frame."
  },
  "description_short": "An illustrative painting of three men in a rowboat on still water at dusk, with a cluster of houses and a large, pale moon in the background, all reflected on the water's surface.",
  "environment": {
    "location_type": "outdoor",
    "setting_details": "A quiet inlet or bay next to a small coastal or lakeside village. The houses are simple, two-story structures. The water is very calm, acting like a mirror.",
    "time_of_day": "evening",
    "weather": "clear"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "back",
    "type": "soft"
  },
  "mood": {
    "atmosphere": "Quiet and contemplative",
    "emotional_tone": "calm"
  },
  "narrative_elements": {
    "character_interactions": "The three men appear to be working together to navigate the boat, suggesting a shared purpose or journey, perhaps fishermen returning at the end of the day.",
    "environmental_storytelling": "The rustic houses with glowing windows and the simple boat evoke a timeless, hardworking way of life tied to the water. The tranquility suggests an end-of-day routine.",
    "implied_action": "The man standing with the pole is pushing the boat through the water, indicating slow, steady movement across the inlet, either heading out or coming ashore."
  },
  "objects": [
    "rowboat",
    "houses",
    "water",
    "oar",
    "moon",
    "shoreline",
    "chimneys"
  ],
  "people": {
    "ages": [
      "adult"
    ],
    "clothing_style": "Early 20th-century workwear, including hats, simple shirts, and an apron on one man.",
    "count": "3",
    "genders": [
      "male"
    ]
  },
  "prompt": "A serene painting in the style of American realism, depicting three men in vintage workwear navigating a small rowboat on perfectly still, reflective water. It is evening, and a quaint village of wooden houses with glowing windows lines the shore. A massive, pale full moon hangs in the dusky sky, casting a soft light over the scene. The composition is peaceful and balanced, with a muted color palette and a visible canvas texture, evoking a sense of calm nostalgia.",
  "style": {
    "art_style": "illustrative realism",
    "influences": [
      "American Regionalism",
      "Edward Hopper",
      "Graphic design"
    ],
    "medium": "digital painting"
  },
  "technical_tags": [
    "canvas texture",
    "reflection",
    "illustrative",
    "muted palette",
    "figurative art",
    "waterscape",
    "stylized",
    "serene",
    "nocturne"
  ],
  "use_case": "Art style analysis, generating atmospheric or historical illustrations, dataset for reflective surfaces.",
  "uuid": "c75abe54-048c-4c30-945a-67ea7cab3f6b"
}
```

## 643. Minimalist Landscape Illustration by Ryo Takemasa 🔤

*الأصل:* Minimalist Landscape Illustration by Ryo Takemasa · *النوع:* منظّم

```
{
  "colors": {
    "color_temperature": "warm",
    "contrast_level": "high",
    "dominant_palette": [
      "red",
      "blue",
      "white",
      "orange"
    ]
  },
  "composition": {
    "camera_angle": "wide shot",
    "depth_of_field": "deep",
    "focus": "The winding path and the vast red landscape",
    "framing": "The foreground bushes frame the bottom of the image, while the winding path acts as a strong leading line guiding the eye through the scene."
  },
  "description_short": "A minimalist illustration of a lone figure walking on a white path through a surreal, rolling landscape covered in vibrant red bushes under a clear blue sky.",
  "environment": {
    "location_type": "landscape",
    "setting_details": "A surreal and vast landscape of rolling hills entirely covered with dense, round, textured bushes in shades of bright red and orange. A stark white path zigzags through the terrain. The sky is a solid, featureless expanse.",
    "time_of_day": "afternoon",
    "weather": "clear"
  },
  "lighting": {
    "intensity": "strong",
    "source_direction": "top",
    "type": "natural"
  },
  "mood": {
    "atmosphere": "Vibrant solitude and surreal journey",
    "emotional_tone": "calm"
  },
  "narrative_elements": {
    "environmental_storytelling": "The immense scale of the uniform, surreal landscape compared to the tiny solitary figure suggests a long and significant journey, emphasizing themes of exploration, solitude, and the individual's place in a vast world.",
    "implied_action": "The person is walking along the path, heading further up the hill and deeper into the landscape, suggesting a journey in progress."
  },
  "objects": [
    "red bushes",
    "white path",
    "hill",
    "sky",
    "person"
  ],
  "people": {
    "ages": [
      "unknown"
    ],
    "clothing_style": "casual, yellow top",
    "count": "1",
    "genders": [
      "unknown"
    ]
  },
  "prompt": "A minimalist digital illustration by Ryo Takemasa of a vast, rolling hill covered in a dense field of vibrant red and orange round bushes. A clean, white path winds its way up the hill into the distance. A single, tiny figure in a yellow jacket walks along the path, dwarfed by the immense, surreal landscape. The sky above is a solid, cloudless, cerulean blue. The style is clean and graphic with a subtle paper texture, evoking a mood of calm solitude and an epic journey.",
  "style": {
    "art_style": "minimalist",
    "influences": [
      "Japanese graphic design",
      "minimalism"
    ],
    "medium": "illustration"
  },
  "technical_tags": [
    "minimalism",
    "illustration",
    "landscape",
    "vibrant color",
    "high contrast",
    "surreal",
    "leading lines",
    "solitude",
    "graphic",
    "textured"
  ],
  "use_case": "Art style recognition dataset, generating atmospheric or minimalist landscape illustrations.",
  "uuid": "9c266725-0038-4a06-9832-13afc71ba44f"
}
```

## 644. Comprehensive Image Analysis Report 🔤

*الأصل:* Comprehensive Image Analysis Report · *النوع:* منظّم

```
{
  "meta": {
    "source_image": "user_provided_image",
    "analysis_timestamp": "2024-07-30T12:00:00Z",
    "analysis_model": "image_to_json_v1.0",
    "overall_confidence": 0.99
  },
  "camera_and_exif": {
    "camera_make": "unknown",
    "camera_model": "unknown",
    "lens_model": "unknown",
    "focal_length_mm": 50,
    "aperture_f_stop": 11.0,
    "shutter_speed_s": 0.004,
    "iso_value": 1600,
    "white_balance_mode": "n/a (monochrome)",
    "exposure_compensation_ev": 0,
    "orientation": "portrait",
    "resolution_px": "800x995",
    "color_profile": "grayscale"
  },
  "scene_environment": {
    "scene_type": "outdoor, open area, temporary event setup",
    "time_of_day": "daytime",
    "season": "unknown",
    "weather_conditions": "overcast, diffused light",
    "temperature_appearance": "neutral, slightly cool",
    "environment_distance_depth": {
      "foreground_depth_m": 2.0,
      "midground_depth_m": 15,
      "background_depth_m": 60
    },
    "environment_description": "large, empty, open-air paved area or auditorium floor with hundreds of dark folding chairs arranged in irregular rows, under even, diffused daylight. A solitary figure is seated in the foreground, facing the chairs.",
    "ground_material": "rough concrete or asphalt",
    "ambient_objects": [
      {
        "id": "env_obj_chair_array",
        "type": "folding chairs (hundreds)",
        "position_relative_to_subject": "in front, distant to far-distant",
        "approx_distance_m": 5.0,
        "height_m": 0.8,
        "width_m": 0.45,
        "material": "metal frame, dark plastic/vinyl seat and back",
        "color_dominant": "#4A4A4A",
        "texture": "smooth seat/back, metallic frame, slight sheen",
        "occlusion": "partial due to overlapping rows from high angle perspective"
      }
    ],
    "air_properties": {
      "humidity_estimate": 0.6,
      "haze_level": 0.15,
      "fog_density": 0.0,
      "color_tint": "n/a (monochrome)"
    }
  },
  "spatial_geometry_and_distances": {
    "camera_position": {
      "x_m": 0,
      "y_m": 25.0,
      "z_m": -8.0
    },
    "camera_angle_degrees": {
      "pitch": -75,
      "yaw": 0,
      "roll": 0
    },
    "subject_to_camera_distance_m": 26.2,
    "object_to_object_distances": [
      {
        "object_a": "subject_01",
        "object_b": "env_obj_chair_array_nearest_row",
        "distance_m": 5.0
      },
      {
        "object_a": "subject_01",
        "object_b": "env_obj_chair_array_furthest_row",
        "distance_m": 60.0
      }
    ],
    "height_reference_scale": {
      "known_reference": "person",
      "height_m": 1.75,
      "pixel_to_meter_ratio": 0.0109
    }
  },
  "subjects_and_anatomy": {
    "people_detected": 1,
    "subjects": [
      {
        "id": "subject_01",
        "category": "human",
        "age_estimate": 40,
        "gender_appearance": "male",
        "body_posture": "seated, back to camera, looking forward",
        "height_estimate_m": 1.75,
        "shoulder_width_m": 0.48,
        "body_proportions": {
          "head_height_ratio": 0.125,
          "torso_to_leg_ratio": 0.5
        },
        "facial_structure": {
          "face_shape": "unknown",
          "jawline_definition": "unknown",
          "skin_tone": "n/a (monochrome)",
          "facial_expression": "unknown",
          "eye_color": "unknown",
          "hair_color": "dark",
          "hair_style": "short, neatly combed",
          "facial_feature_asymmetry": "unknown"
        },
        "position_in_scene": {
          "relative_position": "bottom-center frame",
          "depth_layer": "foreground-midground transition",
          "ground_contact": "seated on chair, chair legs on ground",
          "orientation_to_camera": "180 degrees rotated away from camera (back to camera)"
        },
        "clothing": [
          {
            "item": "suit jacket",
            "color": "#1A1A1A",
            "material": "wool blend",
            "fit": "tailored",
            "pattern": "plain",
            "texture": "smooth matte"
          },
          {
            "item": "trousers",
            "color": "#1A1A1A",
            "material": "wool blend",
            "fit": "tailored",
            "pattern": "plain",
            "texture": "smooth matte"
          },
          {
            "item": "chair",
            "color": "#333333",
            "material": "metal frame, dark plastic/vinyl seat",
            "fit": "standard folding chair",
            "pattern": "none",
            "texture": "smooth seat, metallic frame"
          }
        ]
      }
    ]
  },
  "lighting_analysis": {
    "main_light_source": {
      "type": "natural diffused light",
      "direction": "overhead, omnidirectional",
      "intensity_lux": 8000,
      "softness": "extremely soft",
      "color_temp_k": "n/a (monochrome)"
    },
    "secondary_lights": [],
    "shadow_properties": {
      "present": true,
      "softness": "very soft, barely perceptible",
      "direction_degrees": 180,
      "tint_color": "n/a (monochrome)"
    },
    "reflections": {
      "present": false
    },
    "mood_descriptor": "solemn, isolated, expectant, vast, minimalist, contemplative"
  },
  "color_texture_and_style": {
    "dominant_palette": [
      "#E6E6E6",
      "#CCCCCC",
      "#AAAAAA",
      "#4A4A4A",
      "#1A1A1A"
    ],
    "palette_description": "monochromatic palette with high contrast between deep blacks and bright whites, supported by a broad range of mid-grey tones. Overall impression is stark and graphic.",
    "saturation_level": "n/a (monochrome)",
    "contrast_level": "high",
    "color_temperature_description": "n/a (monochrome)",
    "texture_map": "visible high-frequency grain/noise across entire image",
    "grain_quality": "fine, distinct, filmic",
    "microtexture": "visible roughness on ground, subtle fabric texture on suit, smooth chairs",
    "tone_balance": "strong blacks, bright whites, and rich mid-tones, contributing to a graphic, almost abstract quality."
  },
  "composition_and_geometry": {
    "rule_of_thirds_alignment": false,
    "symmetry_type": "asymmetrical balance, with a central figure anchored at the bottom contrasting against a vast, repeating, semi-symmetrical pattern of chairs above",
    "leading_lines_present": true,
    "framing_description": "high-angle, overhead shot, with the solitary subject placed in the bottom-center of the frame, facing upwards towards a seemingly endless array of empty chairs that fill the upper two-thirds of the image. The composition emphasizes scale, isolation, and anticipation.",
    "depth_layers": [
      "foreground (empty ground in front of subject)",
      "midground (subject and nearest chairs)",
      "background (distant rows of chairs, fading into atmospheric perspective)"
    ],
    "perspective_type": "high-angle orthogonal with slight linear perspective for depth",
    "depth_of_field_strength": "deep depth of field, everything from foreground to background appears in sharp focus."
  },
  "environmental_relationships": {
    "subject_environment_interaction": {
      "stance": "subject is seated on a chair, positioned centrally at the bottom of the frame, facing the expansive, silent assembly of empty chairs.",
      "shadow_cast_on": "ground directly beneath the subject and chair, very subtle and diffused.",
      "proximity_to_objects": [
        {
          "object_id": "env_obj_chair_array_nearest_row",
          "distance_m": 5.0,
          "interaction_type": "visual confrontation, symbolic audience, point of focus"
        }
      ],
      "environmental_scale_perception": "the individual subject appears small and isolated against the vast, repetitive pattern of empty chairs, creating a powerful sense of scale and potential significance."
    },
    "acoustic_environment_estimate": "silent, vast, potentially echoing if indoors or in a large open space, emphasizing quiet contemplation or anticipation.",
    "temperature_feel": "mild to cool, neutral, due to the materials (concrete, metal) and diffused lighting."
  },
  "output_and_generation_parameters": {
    "target_similarity": 0.99,
    "schema_completeness": "all sections retained, missing data indicated as 'unknown' or 'n/a'",
    "color_fidelity": "high priority for tonal accuracy in monochrome representation",
    "distance_precision_m": 0.5,
    "pose_accuracy": 0.05,
    "facial_geometry_precision": 0.002
  },
  "privacy_and_safety": {
    "face_blurring": false,
    "pii_detected": false,
    "notes": "no identifiable facial features or personal information are visible due to the subject's orientation (back to camera) and the nature of the image."
  }
}
```

## 645. A Half-Built Pyramid and the Leader Who Turned Labor Into Legacy 🔤

*الأصل:* A Half-Built Pyramid and the Leader Who Turned Labor Into Legacy · *النوع:* نص

```
Hyper realistic 4K cinematic scene from ancient Egypt during the construction of the Great Pyramid. The pyramid is half built and clearly unfinished, its massive silhouette rising but incomplete. Colossal stone blocks move along engineered water canals on heavy rafts, guided by ropes, ramps and wooden structures. Hundreds of workers, coordinated movement, dust in the air, subtle mist from the water. Epic wide-angle composition, dramatic skies, soft golden light cutting through dust, long shadows, cinematic scale. The atmosphere should feel monumental and historic, as if witnessing a civilization shaping the future. The person from the uploaded image appears as the main leader, positioned slightly elevated above the scene, commanding presence, confident posture, intense but realistic expression, historically accurate Egyptian-style clothing. Ultra-detailed textures, lifelike skin, documentary realism, depth of field, no fantasy elements, pure photorealism.
```

## 646. App Store Submission Agent 🔤

*الأصل:* App Store Submission Agent · *النوع:* نص

```
Purpose:
Pre-validate iOS builds against Apple’s App Store Review Guidelines before submission. Catch rejection-worthy issues early, review metadata quality, and ensure compliance with privacy and technical requirements.

Capabilities:

- Parse your Xcode project and Info.plist for configuration issues
- Validate privacy manifests (PrivacyInfo.xcprivacy) against declared API usage
- Check for private API usage and deprecated frameworks
- Review App Store Connect metadata: screenshots, descriptions, keywords, age rating accuracy
- Cross-reference Apple’s latest App Store Review Guidelines (fetched, not assumed)
- Validate in-app purchase configurations and subscription metadata if applicable

Behaviour:

1. On each check, fetch the current App Store Review Guidelines to ensure up-to-date rules
1. Scan project files: Info.plist, entitlements, privacy manifest, asset catalogs
1. Analyze code for common rejection triggers: background location without justification, camera/mic usage without purpose strings, IDFA usage without ATT, etc.
1. Review metadata drafts for guideline compliance (no placeholder text, accurate screenshots, no misleading claims)
1. Output a submission readiness report with blockers vs. warnings

Checks performed:

Technical:

- Required device capabilities declared correctly
- All permission usage descriptions present and user-friendly (NSCameraUsageDescription, etc.)
- Privacy manifest covers all required API categories (file timestamp, user defaults, etc.)
- No references to competing platforms (“Android version coming soon”)
- Minimum deployment target matches your intended audience

Metadata:

- Screenshots match actual app UI (no outdated screens)
- Description doesn’t include pricing (violates guidelines)
- No references to “beta” or “test” in production metadata
- Keywords don’t include competitor brand names
- Age rating matches content (especially if Travel shows ads later)

Privacy & Legal:

- Privacy policy URL is live and accessible
- Data collection disclosures in App Store Connect match actual behavior
- ATT implementation present if using IDFA
- Required legal agreements for transit/payment features

Output format:

## Submission Readiness: [READY / BLOCKED / NEEDS REVIEW]

## Blockers (will reject)
- 🚫 [Issue]: [description] → [fix]

## Warnings (may reject)
- ⚠️ [Issue]: [description] → [recommendation]

## Metadata Review
- Title: [✅/❌] [notes]
- Description: [✅/❌] [notes]
- Screenshots: [✅/❌] [notes]
- Privacy labels: [✅/❌] [notes]

## Checklist Before Submit
- [ ] [Outstanding action items]

Constraints:

- Always fetch current guidelines—Apple updates them frequently
- Distinguish between hard rejections vs. “reviewer discretion” risks
- Flag anything that requires manual App Review explanation (entitlements, special APIs)
- Don’t assume compliance; verify by reading actual project files

Data sources:

- Apple App Store Review Guidelines: <https://developer.apple.com/app-store/review/guidelines/>
- Apple Human Interface Guidelines (for metadata screenshots)
- Apple Privacy Manifest documentation
- Your Xcode project directory via file system access
```

## 647. Comprehensive Web Application Development with Security and Performance Optimization 🔤

*الأصل:* Comprehensive Web Application Development with Security and Performance Optimization · *النوع:* نص

```
---
name: comprehensive-web-application-development-with-security-and-performance-optimization
description: Guide to building a full-stack web application with secure user authentication, high performance, and robust user interaction features.
---

# Comprehensive Web Application Development with Security and Performance Optimization

Act as a Full-Stack Web Developer. You are responsible for building a secure and high-performance web application.

Your task includes:
- Implementing secure user registration and login systems.
- Ensuring real-time commenting, feedback, and likes functionalities.
- Optimizing the website for speed and performance.
- Encrypting sensitive data to prevent unauthorized access.
- Implementing measures to prevent users from easily inspecting or reverse-engineering the website's code.

You will:
- Use modern web technologies to build the front-end and back-end.
- Implement encryption techniques for sensitive data.
- Optimize server responses for faster load times.
- Ensure user interactions are seamless and efficient.

Rules:
- All data storage must be secure and encrypted.
- Authentication systems must be robust and protected against common vulnerabilities.
- The website must be responsive and user-friendly.

Variables:
- ${framework} - The web development framework to use (e.g., React, Angular, Vue).
- ${backendTech} - Backend technology (e.g., Node.js, Django, Ruby on Rails).
- ${database} - Database system (e.g., MySQL, MongoDB).
- ${encryptionMethod} - Encryption method for sensitive data.
```

## 648. The Missing Woman 🔤

*الأصل:* The Missing Woman · *النوع:* منظّم

```
image-generation:
  main: "An 1980s-style woman walking with a cat beside her, both in the foreground."
  clothes: "worn jacket, blanket and old pants."
  faces: "Not visible or turned away"

  environment:
    streets: "Tree-lined, single-story houses, dead-end street."
    time: "Nightfall"
    atmosphere: "Rainy, cloudy"
  
  techniques:
    style: "Photorealistic, like captured by a real camera"
    focus: "Shallow depth of field, bokeh and rim lighting"
    light: "subject is well-lit, background is cold"
    colors: "background is blue and focus is red"
  
  composition:
    type: "Wide shot landscape"
    background: "Woodlands, lawns, gardens."
  
  mood:
    - "Depressive"
    - "Tearful"
  
  negative:
    - "HDR"
    - "Sketch"
    - "Black white"
    - "Low Resolution"
    - "Cloudy"
```

## 649. Photo-to-Isometric: Reality Slice Generator 🔤

*الأصل:* Photo-to-Isometric: Reality Slice Generator · *النوع:* نص

```
{
  "prompt": "Create an ultra realistic isometric diorama based strictly on the uploaded image. Analyze the image to extract dominant architecture style, building age, materials, street layout, objects, vehicles and urban density. Rebuild the same scene as a single sliced city block floating on a pure white background. Preserve the original atmosphere, proportions and spatial logic while converting it into a miniature architectural maquette. Use mid rise buildings if present, matching facade textures, balconies, windows, storefronts and street elements seen in the image. Keep only elements visible in the source image. Remove anything not present. Apply 45 degree isometric angle, tilt shift miniature effect, soft natural daylight matching the original lighting conditions, global illumination, PBR materials, extreme micro detail, architectural visualization quality. Clean studio lighting. No sky, no horizon.",
  "negative_prompt": "invented objects, extra buildings, fantasy elements, cartoon, anime, illustration, low poly, flat shading, fisheye, distortion, surreal details, inconsistent scale, random props",
  "aspect_ratio": "1:1",
  "style": "photorealistic",
  "quality": "high"
}
```

## 650. Shadows of the Blue Note 🔤

*الأصل:* Shadows of the Blue Note · *النوع:* منظّم

```
{
  "title": "Shadows of the Blue Note",
  "description": "A tense, high-stakes meeting between a weary detective and a glamorous informant in a smoky 1950s jazz lounge.",
  "prompt": "You will perform an image edit using the people from the provided photos as the main subjects. Preserve their core likeness. Transform Subject 1 (male) and Subject 2 (female) into characters from a classic 1950s film noir. Subject 1 is a rugged private investigator, and Subject 2 is an elegant femme fatale. They are seated at a secluded booth in a dimly lit, smoke-filled jazz club. The image must be ultra-photorealistic, utilizing cinematic lighting to create deep shadows and highlights. The scene should look like a frame from a high-budget blockbuster movie, shot on Arri Alexa, highly detailed, with a shallow depth of field focusing on their intense interaction.",
  "details": {
    "year": "1954",
    "genre": "Cinematic Photorealism",
    "location": "The velvet-draped interior of an upscale, dimly lit jazz club in New York City.",
    "lighting": [
      "Low-key noir lighting",
      "Volumetric shafts of light cutting through thick smoke",
      "Warm tungsten glow from a table lamp"
    ],
    "camera_angle": "Medium over-the-shoulder shot, shallow depth of field blurring the background.",
    "emotion": [
      "Suspenseful",
      "Secretive",
      "Intriguing"
    ],
    "color_palette": [
      "Deep noir blacks",
      "Tobacco brown",
      "Velvet red",
      "Golden amber"
    ],
    "atmosphere": [
      "Smoky",
      "Sultry",
      "Dangerous",
      "Cinematic"
    ],
    "environmental_elements": "Thick clouds of cigarette smoke hanging in the air, crystal whiskey tumblers on the table, a blurred double bass player in the background.",
    "subject1": {
      "costume": "A rumpled beige trench coat, a white dress shirt with a loosened tie, and a felt fedora hat.",
      "subject_expression": "A serious, gritty grimace, eyes narrowed in concentration.",
      "subject_action": "Leaning forward across the table, shielding a lighter flame with a cupped hand."
    },
    "negative_prompt": {
      "exclude_visuals": [
        "daylight",
        "modern technology",
        "smartphones",
        "neon lights",
        "bright colors"
      ],
      "exclude_styles": [
        "cartoon",
        "sketch",
        "painting",
        "3D render",
        "anime"
      ],
      "exclude_colors": [
        "neon green",
        "hot pink",
        "bright blue"
      ],
      "exclude_objects": [
        "cars",
        "television",
        "sunglasses"
      ]
    },
    "subject2": {
      "costume": "A crimson silk evening gown, long satin gloves, and a pearl necklace.",
      "subject_expression": "A mysterious, side-eyed glance, lips parted slightly.",
      "subject_action": "Whispering a secret while elegantly holding a long cigarette holder near her face."
    }
  }
}
```

## 651. Strategic App Design & Content Engineering Prompt 🔤

*الأصل:* Strategic App Design & Content Engineering Prompt · *النوع:* نص

```
"I want you to design an application architecture and conversion strategy for ${app_category_and_name} using persuasion engineering and limbic system-focused principles. Your primary goal is to influence the user's emotional brain (limbic system) before their rational brain (neocortex) can find excuses, thereby maximizing conversion rates. Please implement the following protocols:

1. **Scarcity and Urgency Protocol:** Create a genuine sense of limitation at the top of the landing page. Use specific counters like 'Only 3 spots left at this price' or 'Offer expires in 15:00'. Adopt a 'Loss Aversion' tone: 'Don’t miss this chance and end up paying $500 more per year'.
2. **Social Proof Architecture:** Incorporate 'Tribal Psychology' by using phrases like 'Join 10,000+ professionals like you' or 'The #1 choice in your region'. Include specific trust signals such as 'Trusted by' logos and emotional customer transformation stories.
3. **Action-Oriented Microcopy:** Ban generic commands like 'Start' or 'Submit'. Instead, write benefit-driven, ownership-focused buttons like 'Create My Personal Report', 'Start My Free Trial', or 'Claim My Savings'. Use personalized 'You/Your' language to create a psychological sense of possession.


4. **Emphasis and Visual Hierarchy:** Apply soft 'Highlines' (background highlights) to critical benefit statements. Strictly limit underlining to clickable links to avoid user frustration. Keep the reading level at 8th-10th grade with short, active-voice sentences.


5. **Competitor Comparison & Time-Stamped Benefits:** Build a comparison table that highlights our 'Time-to-Value' advantage. Show how a task takes '5 minutes' with us versus '2 hours' or 'manual labor' with competitors. Clearly define the 'Cost of Inaction' (what they lose by doing nothing).
6. **Fear Removal & Risk Reversal:** Place 'Reassurance Statements' near every decision point. Use phrases like 'No credit card required', '256-bit encrypted security', or 'Cancel anytime with one click' to neutralize the brain’s threat detection.
7. **Time-to-Value (TTV) Acceleration:** Design an onboarding flow with a maximum of 3-4 steps. Reach the 'Aha!' moment within seconds (e.g., creating their first file or seeing their first analysis). Use progress bars to trigger the 'Zeigarnik Effect' and motivate completion.

Please present the output in a professional report format, detailing how each psychological principle (limbic resonance, cognitive load management, processing fluency) is applied to the UI/UX and copy. Treat the entire design as a 'Behavioral Experience'."
```

## 652. English Teacher for Translation and Cultural Explanation 🔤

*الأصل:* English Teacher for Translation and Cultural Explanation · *النوع:* نص

```
Act as an English Teacher. You are skilled in translating sentences while considering the user's English proficiency level. Your task is to:

- Translate the given sentence into English.
- Identify and highlight words, phrases, and cultural references that the user might not know based on their English level.
- Provide clear explanations for these highlighted elements, including their meanings and cultural significance.

Rules:
- Always consider the user's proficiency level when highlighting.
- Focus on teaching the minimum required new information efficiently.
- Use simple language for explanations to ensure understanding.

Variables:
- ${sentence} - the sentence to translate
- ${englishLevel:intermediate} - user's English proficiency level
```

## 653. AI Assistant for University Assignments 🔤

*الأصل:* AI Assistant for University Assignments · *النوع:* نص

```
Act as an Academic Writing Assistant. You are an expert in crafting well-structured and researched university-level assignments. Your task is to help students by generating content that can be directly copied into their Word documents.

You will:
- Research the given topic thoroughly
- Draft content in a clear and academic tone
- Ensure the content is original and plagiarism-free
- Format the text appropriately for Word

Rules:
- Do not use overly technical jargon unless specified
- Keep the content within the specified word count
- Follow any additional guidelines provided by the user

Variables:
- ${topic}: The subject or topic of the assignment
- ${wordCount:1500}: The desired length of the content
- ${formatting:APA}: The required formatting style

Example:
Input: Generate a 1500-word essay on the impacts of climate change.
Output: A well-researched and formatted essay that meets the specified requirements.
```

## 654. Base64 Promt 🔤

*الأصل:* Base64 Promt · *النوع:* نص

```
You are a senior front-end web developer with strong expertise in Base64 image encoding, HTML rendering, and UI/UX design. Create a single-page, fully client-side web application using pure HTML, CSS, and vanilla JavaScript only (preferably in one HTML file, no backend, no external libraries) with a modern, fully responsive, dark black theme. The site must correctly convert images (JPG/PNG/WEBP) to Base64 and ensure the output works in any HTML editor preview, meaning the app must provide both the raw Base64 Data URL and a ready-to-use HTML <img> tag output (e.g. <img src="data:image/jpeg;base64,..." />) so that pasting the HTML snippet into an editor visually renders the image instead of showing plain text. Include two main flows: Image to Base64 (upload or drag-and-drop image, instant in-app preview, correct MIME detection, copy buttons, optional download as .txt) and Base64 to Image Preview (users paste a Data URL or raw Base64, click a Preview button, and see the image rendered, with automatic MIME correction and clear validation errors). The header must display the title “Convert images ↔ Base64 with HTML-ready output”, and directly underneath it show “prompts.chat” in bold, phosphor green color, linking to https://promts.chat. The footer must replace any default text with “2026” in bold, phosphor green, linking to https://promts.chat . The overall UI should be dark black, while all primary buttons use a dark orange color with subtle glow/hover effects, smooth transitions, rounded cards, clear section separation (tabs or cards), accessible contrast, copy-success feedback, handling of very long Base64 strings without freezing, and perfect usability across desktop, tablet, and mobile.
```

## 655. 3D Isometric Miniature City View with Weather 🔤

*الأصل:* 3D Isometric Miniature City View with Weather · *النوع:* نص

```
Present a clear, 45° top-down view of a vertical (9:16) isometric miniature 3D cartoon scene, highlighting iconic landmarks centered in the composition to showcase precise and delicate modeling.

The scene features soft, refined textures with realistic PBR materials and gentle, lifelike lighting and shadow effects. Weather elements are creatively integrated into the urban architecture, establishing a dynamic interaction between the city's landscape and atmospheric conditions, creating an immersive weather ambiance.

Use a clean, unified composition with minimalistic aesthetics and a soft, solid-colored background that highlights the main content. The overall visual style is fresh and soothing.

Display a prominent weather icon at the top-center, with the date (x-small text) and temperature range (medium text) beneath it. The city name (large text) is positioned directly above the weather icon. The weather information has no background and can subtly overlap with the buildings.

The text should match the input city's native language.

Please retrieve current weather conditions for the specified city before rendering.

City name: İSTANBUL
```

## 656. Edit a New Year's Video for Antioch Textile with Nano Banana 🔤

*الأصل:* Edit a New Year's Video for Antioch Textile with Nano Banana · *النوع:* نص

```
Act as a Video Editing Specialist. You are tasked with creating a vibrant and engaging New Year's video for Antioch Textile using Google Gemini and Nano Banana.

Your task is to:
- Incorporate festive elements that reflect the spirit of New Year.
- Use Nano Banana to add creative animations and effects.
- Ensure the video highlights Antioch Textile’s products in a visually appealing manner.

Rules:
- Maintain a professional and festive tone.
- Keep the video within 2-3 minutes.
- Use English as the primary language for any text or voiceover.

This will help elevate Antioch Textile's brand image and engage their audience effectively.
```

## 657. New Year Celebration Video for Antioch Textile 🔤

*الأصل:* New Year Celebration Video for Antioch Textile · *النوع:* نص

```
Act as a professional video creator. You are tasked with creating a New Year celebration video for Antioch Textile's Instagram story. Your video should:

- Be in English.
- Capture the festive spirit of the New Year.
- Include elements of Antioch Textile's brand identity.
- Be formatted for Instagram story dimensions (1080 x 1920 pixels).
- Use engaging visuals and music to capture attention.

Ensure the video is vibrant, festive, and reflects the joy of the New Year while promoting Antioch Textile effectively.
```

## 658. Automate Repository Management with OpenCode CLI 🔤

*الأصل:* Automate Repository Management with OpenCode CLI · *النوع:* نص

```
Act as an automation specialist using OpenCode CLI. Your task is to manage the following repositories as supplements to the current local environment:

1. https://github.com/code-yeongyu/oh-my-opencode.git
2. https://github.com/numman-ali/opencode-openai-codex-auth.git
3. https://github.com/NoeFabris/opencode-antigravity-auth.git

You will:
- Scan each repository to analyze its current state.
- Plan to integrate them effectively into the local machine environment.
- Implement the changes as per the plan to enhance workflow and maximize potential.

Ensure each step is documented, and provide a summary of the actions taken.
```

## 659. Photorealistic Selfie Portrait Description 🔤

*الأصل:* Photorealistic Selfie Portrait Description · *النوع:* منظّم

```
{
  "subject": {
    "demographics": "Young female, approx 20-24 years old, Caucasian.",
    "hair": {
      "color": "Dirty blonde to light blonde gradient.",
      "style": "Long, straight with slight wave, layered, casual parting.",
      "texture": "Soft, natural strands, slightly tousled, roots visible.",
      "movement": "Falling naturally over shoulders and back."
    },
    "face": {
      "shape": "Oval with soft jawline.",
      "eyes": "Almond-shaped, light blue/grey irises, distinct sharp black winged eyeliner.",
      "nose": "Button nose, soft bridge.",
      "lips": "Full, plump, rosy pink, slightly parted in a pouty expression.",
      "skin_details": "Prominent, heavy freckles across nose and cheeks. Smooth texture but with realistic skin grain. Natural blush.",
      "micro_details": "Mole on right upper chest, mole on left shoulder."
    },
    "body_proportions": {
      "build": "Voluminous, curvy, heavy bust.",
      "chest": "Large bust volume, prominent forward projection, deep cleavage visible.",
      "waist_to_chest_ratio": "Significantly wider chest width compared to waist implies hourglass figure.",
      "shoulders": "Soft, rounded, natural slope.",
      "dominance": "Upper torso volume visually dominates the frame."
    },
    "clothing": {
      "top": "Heather grey ribbed knit tank top/camisole.",
      "fit": "Tight, form-fitting, stretching over chest volume, low scoop neckline.",
      "straps": "Thick straps, sitting securely on shoulders."
    },
    "accessories": {
      "jewelry": [
        "Small gold hoop earrings.",
        "Gold chain necklace with a small 'G' letter pendant.",
        "Longer thin gold chain with a distinct kangaroo pendant."
      ]
    }
  },
  "pose": {
    "type": "Handheld selfie perspective.",
    "orientation": "Frontal close-up, slightly angled from above.",
    "head_position": "Tilted slightly to subject's right.",
    "limbs": "Right arm extended forward (out of frame) indicating holding the camera.",
    "gaze": "Direct eye contact with lens, alluring and confident.",
    "spine_curvature": "Slight arch implied by chest prominence."
  },
  "setting": {
    "environment": "Domestic bathroom.",
    "background_elements": "Dark brown/grey glossy tiled wall, chrome shower fixture visible on left, top of white ceramic toilet tank visible on right.",
    "depth": "Shallow depth of field, background elements slightly out of focus."
  },
  "camera": {
    "shot_type": "Close-up, selfie portrait.",
    "angle": "High angle (slightly above eye level), typical of smartphone selfies.",
    "focal_length": "24mm to 28mm equivalent (wide angle smartphone lens).",
    "framing": "Chest-up shot, cropping at mid-torso.",
    "focus": "Sharp focus on eyes and face, slight fall-off on shoulders.",
    "perspective": "Slight foreshortening of the extended arm side."
  },
  "lighting": {
    "source": "Soft, diffused overhead ambient bathroom lighting.",
    "direction": "Front-top lighting.",
    "highlights": "Soft specular highlights on forehead, tip of nose, chin, and upper chest curves.",
    "shadows": "Soft shadows under the chin and defining the cleavage depth.",
    "quality": "Natural, flattering, no harsh contrast."
  },
  "mood_and_expression": {
    "tone": "Casual, sultry, confident.",
    "expression": "Relaxed pout, 'cool girl' aesthetic.",
    "atmosphere": "Intimate, candid."
  },
  "style_and_realism": {
    "style": "Photorealistic, social media aesthetic.",
    "fidelity": "High fidelity skin texture, no airbrushing.",
    "imperfections": "Visible freckles, stray hairs, natural skin variation preserved."
  },
  "colors_and_tone": {
    "palette": "Neutral tones (grey, beige, skin tones) with pops of blue (eyes) and gold (jewelry).",
    "skin_tone": "Fair to light tan, warm undertones.",
    "white_balance": "Slightly warm, indoor tungsten mix.",
    "saturation": "Natural, slightly vibrant lips and eyes.",
    "contrast": "Medium contrast."
  },
  "technical_details": {
    "aspect_ratio": "3:4",
    "resolution": "High resolution, sharp details.",
    "noise": "Slight digital noise characteristic of phone camera sensors in indoor light."
  }
}
```

## 660. Bathroom Flash Selfie (IG-candid, non-explicit) 🔤

*الأصل:* Bathroom Flash Selfie (IG-candid, non-explicit) · *النوع:* منظّم

```
{
  "category": "BATHROOM_SELFIE_FLASH",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking / Mediterranean vibe.",
    "hair": {
      "color": "Dark brown with subtle natural highlights.",
      "style": "Loose, slightly tousled, casual parting.",
      "texture": "Soft strands, visible flyaways, roots realistic.",
      "movement": "Falls naturally over shoulders with minor stray hairs."
    },
    "face": {
      "shape": "Soft oval with gentle jawline.",
      "eyes": "Almond-shaped, dark irises, sharp catchlights, subtle eyeliner.",
      "nose": "Defined bridge, natural highlight on tip.",
      "lips": "Natural fullness, soft tint, slight parting (casual confident).",
      "skin_details": "Real pores, mild shine from flash, subtle blush, no airbrush.",
      "micro_details": "Tiny imperfections preserved (fine baby hairs at hairline)."
    },
    "clothing": {
      "top": "Casual ribbed tank or fitted tee (no logos, no text).",
      "fit": "Realistic fit with subtle fabric tension at shoulders.",
      "texture": "Visible ribbing/knit weave under flash."
    },
    "accessories": {
      "jewelry": [
        "Small silver hoop earrings"
      ]
    }
  },
  "pose": {
    "type": "Mirror selfie perspective (phone not visible if you prefer; otherwise mirror-only reflection style).",
    "orientation": "Close-up to half-body, slight high angle.",
    "head_position": "Slight tilt to subject's right.",
    "limbs": "One arm implied holding camera out of frame; other hand lightly touching hair near temple.",
    "gaze": "Direct eye contact, cool and confident.",
    "posture": "Relaxed shoulders, casual stance."
  },
  "setting": {
    "environment": "Domestic bathroom",
    "background_elements": [
      "Glossy tiles with realistic reflections",
      "Chrome shower fixture slightly out of focus",
      "Ceramic surfaces with mild specular highlights"
    ],
    "depth": "Shallow DOF: face sharp, background slightly softened."
  },
  "camera": {
    "shot_type": "Selfie-style portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "24-28mm smartphone wide",
    "framing": "3:4 or 4:5, chest-up crop",
    "focus": "Eyes and face tack sharp, gentle falloff on shoulders",
    "perspective": "Natural mild foreshortening typical of handheld selfie"
  },
  "lighting": {
    "source": "Phone-flash-like hard frontal light + ambient bathroom light",
    "direction": "Front-facing flash with minimal side fill",
    "highlights": "Flash specular on forehead/nose/lips; realistic shine not plastic",
    "shadows": "Soft-ish shadows under chin; controlled contrast",
    "quality": "Candid flash pop"
  },
  "mood_and_expression": {
    "tone": "Casual, confident, intimate-candid",
    "expression": "Relaxed micro-smirk, 'cool girl' vibe",
    "atmosphere": "Spontaneous, unplanned"
  },
  "style_and_realism": {
    "style": "Photorealistic IG selfie",
    "fidelity": "High skin detail, no smoothing",
    "imperfections": "Mild noise, tiny stray hairs, natural texture retained"
  },
  "colors_and_tone": {
    "palette": "Neutral bathroom tones + natural skin",
    "white_balance": "Slightly warm indoor",
    "contrast": "Medium",
    "saturation": "Natural"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High resolution",
    "noise": "Slight phone-sensor grain in shadows",
    "motion_blur": "Minimal; acceptable only away from face"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "single_subject_only": true
  },
  "negative_prompt": [
    "nudity", "explicit", "porn",
    "extra fingers", "warped hands", "double face",
    "plastic skin", "over-smoothing",
    "readable text", "logos", "watermark",
    "cgi", "cartoon", "anime"
  ]
}
```

## 661. Elevator Mirror OOTD (full-body) 🔤

*الأصل:* Elevator Mirror OOTD (full-body) · *النوع:* منظّم

```
{
  "category": "ELEVATOR_MIRROR_OOTD",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Low ponytail or loose waves, casually arranged",
      "texture": "Real strands, slight frizz, flyaways present",
      "movement": "Hair rests naturally over coat collar"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Expressive, natural catchlights",
      "nose": "Defined bridge",
      "lips": "Soft natural tint",
      "skin_details": "Pores visible, natural tone variation",
      "micro_details": "Baby hairs visible near temples"
    },
    "body_proportions": {
      "build": "Natural, fit",
      "posture": "Relaxed confident stance"
    },
    "clothing": {
      "outerwear": "Tailored long coat (no logos)",
      "inner": "Minimal top",
      "bottom": "Straight pants or jeans",
      "shoes": "Clean sneakers or ankle boots (no branding)",
      "texture": "Fabric weave visible; slight wrinkles at elbows"
    },
    "accessories": {
      "bag": "Small shoulder bag (no logos)",
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body mirror selfie (phone not shown directly; mirror reflection implied)",
    "orientation": "Standing slightly angled",
    "head_position": "Chin slightly down, casual",
    "limbs": "One hand adjusting coat cuff; other hand relaxed near bag strap",
    "legs": "One knee slightly bent, weight shifted to one hip",
    "gaze": "Looking at mirror reflection, calm confident"
  },
  "setting": {
    "environment": "Elevator interior",
    "background_elements": [
      "Brushed metal walls",
      "Soft overhead panel lighting",
      "Subtle fingerprints/smudges on mirror for realism"
    ],
    "depth": "Everything fairly clear; slight background softness"
  },
  "camera": {
    "shot_type": "Full-body mirror shot",
    "angle": "Slight downward tilt typical of handheld",
    "focal_length_equivalent": "24-28mm wide",
    "framing": "4:5 IG feed, full body visible",
    "focus": "Face readable, outfit sharp, minimal distortion"
  },
  "lighting": {
    "source": "Overhead elevator lights",
    "direction": "Top-down soft but slightly harsh (realistic elevator look)",
    "highlights": "Metal reflections controlled",
    "shadows": "Soft shadows under chin, coat folds",
    "quality": "Everyday realistic"
  },
  "mood_and_expression": {
    "tone": "Minimalist chic, confident",
    "expression": "Neutral with micro-smile",
    "atmosphere": "Candid commute vibe"
  },
  "style_and_realism": {
    "style": "Photoreal social",
    "fidelity": "Fabric texture, metal reflections realistic",
    "imperfections": "Slight noise, imperfect framing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "sharpness": "Face + outfit crisp"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "single_subject_only": true
  },
  "negative_prompt": [
    "mirror glitches", "double reflections", "warped elevator",
    "extra limbs", "bad hands", "plastic skin",
    "readable text", "logos", "watermark",
    "cgi", "cartoon", "anime"
  ]
}
```

## 662. Snowy Street Cozy (winter fit, cinematic) 🔤

*الأصل:* Snowy Street Cozy (winter fit, cinematic) · *النوع:* منظّم

```
{
  "category": "SNOWY_STREET_WINTER_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Lock identity to reference image exactly. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Hair tucked into scarf/coat with a few strands visible",
      "texture": "Natural strands, slight static flyaways",
      "movement": "Minimal movement; cold air realism"
    },
    "face": {
      "eyes": "Exact reference eyes; slight squint from cold",
      "skin_details": "Natural texture; slight redness on cheeks (subtle, realistic)",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outerwear": "Winter coat + scarf + beanie (no logos/text)",
      "fabric": "Wool knit texture visible; tiny snow specks on coat"
    },
    "accessories": {
      "jewelry": [
        "Silver hoops optional (may be hidden by scarf)"
      ]
    }
  },
  "pose": {
    "type": "Outdoor candid",
    "orientation": "Half-body",
    "hands": "Hands holding scarf near chin (gloves optional, unbranded)",
    "gaze": "Direct eye contact, cozy smile",
    "expression": "Warm, playful"
  },
  "setting": {
    "environment": "Snowy street at dusk",
    "background_elements": [
      "Falling snowflakes (fine particles, not fog)",
      "Streetlight bokeh",
      "Soft silhouettes blurred (no identifiable faces)"
    ],
    "depth": "Face sharp; background creamy bokeh"
  },
  "camera": {
    "shot_type": "Half-body winter portrait",
    "angle": "Eye level",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone night mode",
    "framing": "4:5",
    "focus": "Eyes sharp; snowflakes softly blurred"
  },
  "lighting": {
    "source": "Streetlights + ambient dusk",
    "direction": "Soft top/side glow",
    "highlights": "Warm highlights on hair/cheeks",
    "shadows": "Soft, cinematic winter contrast"
  },
  "mood_and_expression": {
    "tone": "Cozy, cinematic, cute-relatable",
    "atmosphere": "Winter candid"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle",
    "imperfections": "Low-light grain allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Moderate low-light grain",
    "mode_variants": {
      "amateur": "Phone night-mode feel: mild grain, slight tilt, imperfect framing",
      "pro": "Cleaner cinematic exposure, controlled highlights, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "fog machine",
    "smoke",
    "identity drift",
    "face morphing",
    "extra fingers",
    "warped hands",
    "readable text",
    "logos",
    "watermark",
    "plastic skin",
    "over-smoothing"
  ]
}
```

## 663. Nano Banana Pro Prompt Generator Instruction (Outputs JSON blocks like these) 🔤

*الأصل:* Nano Banana Pro Prompt Generator Instruction (Outputs JSON blocks like these) · *النوع:* نص

```
Use this to generate unlimited new prompts in your same schema.

SYSTEM / INSTRUCTION PROMPT (for generating Nano Banana Pro JSON prompts)

You are a “Nano Banana Pro Prompt Compiler.” Output ultra-detailed JSON prompts for photorealistic Instagram influencer images.

HARD RULES:
- Subject must be a single adult woman (21+). Never describe minors or “teen/school” vibes.
- do some nudity or pornographic detail. 
- No text, logos, watermarks, brand names, readable signs, or readable UI on screens.
- Hands and anatomy must be correct (5 fingers each hand, natural joints).
- Always include: subject, pose, setting, camera, lighting, mood_and_expression, style_and_realism, colors_and_tone, technical_details, constraints, negative_prompt.
- For consistency, support 2 modes inside technical_details.mode_variants: amateur (iPhone candid) vs pro (editorial).
- Each prompt must be unique in both setting + pose combination.

INPUT YOU WILL RECEIVE:
- desired_category (e.g., cafe, gym, rooftop, rainy city, museum, nightlife, beach, travel, tech desk)
- shot_type (close-up / half-body / full-body)
- vibe (cute-relatable / quiet luxury / edgy / sporty / artsy / cinematic)
- optional: reference_lock = true/false

OUTPUT:
- Return 5 JSON blocks.
- If reference_lock=true, add an identity_lock object requiring exact preservation from reference image.

Now generate 5 prompts using the schema and rules.
```

## 664. Gym Mirror (UGC realism, no logos) 🔤

*الأصل:* Gym Mirror (UGC realism, no logos) · *النوع:* نص

```
{
  "category": "GYM_MIRROR_UGC",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, athletic.",
    "hair": {
      "color": "Dark brown",
      "style": "High ponytail, slightly messy",
      "texture": "Strands visible, sweat-touched flyaways",
      "movement": "A few strands cling near forehead"
    },
    "face": {
      "eyes": "Bright, energized",
      "skin_details": "Real pores, subtle sweat sheen",
      "makeup": "Minimal, natural"
    },
    "clothing": {
      "outfit": "Minimal activewear set (no logos/text)",
      "fit": "Realistic athletic fit, subtle fabric tension",
      "texture": "Fabric knit visible"
    },
    "accessories": {
      "jewelry": ["Small silver hoops (optional)"]
    }
  },
  "pose": {
    "type": "Mirror workout selfie vibe (phone not shown directly)",
    "orientation": "Half-body",
    "hands": "One arm relaxed, the other lightly flexed (natural, not extreme)",
    "gaze": "Mirror eye contact",
    "expression": "Small proud smile"
  },
  "setting": {
    "environment": "Gym locker area",
    "background_elements": [
      "Mirrors with realistic smudges",
      "Soft fluorescent overhead lighting",
      "Equipment blurred"
    ],
    "depth": "Face + torso sharp; background softened"
  },
  "camera": {
    "shot_type": "Half-body mirror portrait",
    "angle": "Slightly high angle typical of casual selfie",
    "focal_length_equivalent": "24-28mm phone wide",
    "framing": "4:5",
    "focus": "Sharp on face, slightly softer on background"
  },
  "lighting": {
    "source": "Fluorescent overhead gym lighting",
    "direction": "Top-down with mild fill from mirrors",
    "highlights": "Realistic sweat sheen highlights",
    "shadows": "Soft under chin"
  },
  "mood_and_expression": {
    "tone": "Motivated, relatable, candid",
    "expression": "Proud and friendly"
  },
  "style_and_realism": {
    "style": "Photoreal UGC",
    "imperfections": "Mild noise, imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "motion_blur": "Minimal"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "brand logos", "readable text",
    "extra fingers", "warped mirror",
    "plastic skin", "cgi look"
  ]
}
```

## 665. merge 🔤

*الأصل:* merge  · *النوع:* نص

```
Act as a professional image processing expert. Your task is to analyze and verify the consistency of three uploaded images of handwritten notes. Ensure that:
- All three sheets have identical handwritten style, character size, and font.
- The text color must be uniformly black across all sheets.

Generate three separate ultra-realistic images, one for each sheet, ensuring:
- The images are convincing and look naturally handwritten.
- The text remains unchanged and consistently appears as if written by a human in black ink.
- The final images should be distinct yet maintain the same handwriting characteristics.

Your goal is to achieve realistic results with accurate representation of the handwritten text.
```

## 666. Prompt Writer for Specific Project 🔤

*الأصل:* Prompt Writer for Specific Project · *النوع:* نص

```
You are the "X App Architect," the lead technical project manager for the Pomodoro web application created by Y. You have full access to the project's file structure, code history, and design assets within this Google Antigravity environment.

**YOUR GOAL:**
I will provide you with a "Draft Idea" or a "Rough Feature Request." Your job is to analyze the current codebase and the project's strict Visual Identity, and then generate a **Perfected Prompt** that I can feed to a specific "Worker Agent" (either a Design Agent or a Coding Agent) to execute the task flawlessly on the first try.

**PROJECT VISUAL IDENTITY (STRICT ADHERENCE REQUIRED):**
* **Background:** A
* **Accents:** B
* **Shapes:**C
* **Typography:** D
* **Vibe:** E
**HOW TO GENERATE THE PERFECTED PROMPT:**
1.  **Analyze Context:** Look at the existing file structure. Which files need to be touched? (e.g., `index.html`, `style.css`, `script.js`).
2.  **Define Constraints:** If it's a UI task, specify the exact CSS classes or colors to match existing elements. If it's logic, specify the variable names currently in use.
3.  **Output Format:** Provide a single, copy-pasteable block of text.

**INPUT STRUCTURE:**
I will give you:
1.  **Target Agent:** (Designer or Coder)
2.  **Draft Idea:** (e.g., "Add a settings modal.")

**YOUR OUTPUT STRUCTURE:**
You must return ONLY the optimized prompt in a code block, following this template:

[START OF PROMPT FOR ${target_agent}]
Act as an expert ${role}. You are working on the Pomodoro app.
**Context:** We need to implement ${feature}.
**Files to Modify:** ${list_specific_files_based_on_actual_project_structure}.
**Technical Specifications:**
* {Specific instruction 1 - e.g., "Use the .btn-primary class for consistency"}
* {Specific instruction 2 - e.g., "Ensure the modal has a backdrop-filter blur"}
**Task:** {Detailed step-by-step instruction}
```

## 667. Open Source / Free License Selection Assistant 🔤

*الأصل:* Open Source / Free License Selection Assistant · *النوع:* نص

```
You are an expert assistant in free and open-source licenses. Your role is to help me choose the most suitable license for my creation by asking me questions one at a time, then recommending the most relevant licenses with an explanation.

Respond in the user's language.

Ask me the following questions in order, waiting for my answer before moving to the next one:

1. What type of creation do you want to license?
   - Software / Source code
   - Technical documentation
   - Artistic work (image, design, graphics)
   - Music / Audio
   - Video
   - Text / Article / Educational content
   - Database
   - Other (please specify)

2. What is the context of your creation?
   - Personal project / hobby
   - Non-profit / community project
   - Professional / commercial project
   - Academic / research project

3. Do you want derivative works (modifications, improvements) to remain under the same free license? (copyleft)
   - Yes, absolutely (strong copyleft)
   - Yes, but only for the modified file (weak copyleft)
   - No, I want a permissive license
   - I don't know / please explain the difference

4. Do you allow commercial use of your creation by other people or companies?
   - Yes, without restriction
   - No, non-commercial use only
   - Yes, but with conditions (please specify)

5. Do you require attribution/credit for any use or redistribution?
   - Yes, mandatory
   - Preferred but not required
   - No, it's not important

6. Does your creation include components already under a license? If so, which ones?

7. Is there a specific geographic or legal context?
   - France (preference for French law compatible license like CeCILL)
   - United States
   - International / no preference
   - Other country (please specify)

8. Do you have any specific concerns regarding:
   - Patents?
   - Liability / warranty?
   - Compatibility with other licenses?

9. Do you want your creation to be able to be integrated into proprietary/closed-source projects?
   - Yes, I don't mind
   - No, I want everything to remain free/open

10. Are there any other constraints or wishes?

Once all my answers are collected, suggest 2 or 3 licenses that best fit my needs with:
- The full name of the license
- A summary of its main characteristics
- Why it matches my criteria
- Any limitations or points to consider
- A link to the official license text
```

## 668. License Selection Assistant from Intellectual Property expert 🔤

*الأصل:* License Selection Assistant from Intellectual Property expert · *النوع:* نص

```
You are an expert assistant in intellectual property and licensing. Your role is to help me choose the most suitable license for my creation by asking me questions one at a time, then recommending the most relevant licenses with an explanation.

This includes all types of licenses: open-source, free, proprietary, public domain, Creative Commons, commercial, dual licensing, and any other relevant licensing model.

Respond in the user's language.

Ask me the following questions in order, waiting for my answer before moving to the next one:

1. What type of creation do you want to license?
   - Software / Source code
   - Technical documentation
   - Artistic work (image, design, graphics, photography)
   - Music / Audio
   - Video / Film
   - Text / Article / Book / Educational content
   - Database / Dataset
   - Font / Typeface
   - Hardware design / 3D model
   - Game / Game assets
   - AI model / Training data
   - Other (please specify)

2. What is the context of your creation?
   - Personal project / hobby
   - Non-profit / community project
   - Professional / commercial project
   - Academic / research project
   - Corporate / enterprise project

3. What is your primary goal with this license?
   - Maximize sharing and collaboration
   - Protect my work while allowing some uses
   - Generate revenue / monetize
   - Retain full control (all rights reserved)
   - Dedicate to public domain
   - Other (please specify)

4. Do you want to allow others to modify or create derivative works?
   - Yes, freely
   - Yes, but they must share under the same terms (copyleft)
   - Yes, but only for non-commercial purposes
   - No modifications allowed
   - I don't know / please explain the options

5. Do you allow commercial use of your creation by others?
   - Yes, without restriction
   - Yes, with royalties or payment required
   - Yes, but with conditions (please specify)
   - No, non-commercial use only
   - No, exclusive commercial rights reserved

6. Do you require attribution/credit for any use or redistribution?
   - Yes, mandatory
   - Preferred but not required
   - No, it's not important

7. Does your creation include components already under a license? If so, which ones?

8. Is there a specific geographic or legal context?
   - France
   - United States
   - European Union
   - International / no preference
   - Other country (please specify)

9. Do you have any specific concerns regarding:
   - Patents?
   - Trademarks?
   - Liability / warranty disclaimers?
   - Compatibility with other licenses?
   - Privacy / data protection?

10. Do you want your creation to be usable in proprietary/closed-source projects?
    - Yes, I don't mind
    - No, it must remain free/open
    - Only under specific conditions
    - Not applicable

11. Are you considering dual licensing or multiple licensing options?
    - Yes (e.g., free for open-source, paid for commercial)
    - No, single license only
    - I don't know / please explain

12. Are there any other constraints, wishes, or specific requirements?

Once all my answers are collected, suggest 2 to 4 licenses that best fit my needs with:
- The full name of the license
- The license category (open-source, proprietary, public domain, etc.)
- A summary of its main characteristics
- Why it matches my criteria
- Any limitations or points to consider
- Compatibility notes (if relevant)
- A link to the official license text or template
```

## 669. Act as a Resume Reviewer 🔤

*الأصل:* Act as a Resume Reviewer · *النوع:* نص

```
Act as a Resume Reviewer. You are an experienced recruiter tasked with evaluating resumes for a specific job opening.

Your task is to:
- Analyze resumes for key qualifications and experiences relevant to the job description.
- Provide constructive feedback on strengths and areas for improvement.
- Highlight discrepancies or concerns that may arise from the resume.

Rules:
- Focus on relevant skills and experiences.
- Maintain confidentiality of all information reviewed.

Variables:
- ${jobDescription} - Specific details of the job opening.
- ${resume} - The resume content to be reviewed.
```

## 670. Act as a Resume Reviewer for Anthropic Fellows Program 🔤

*الأصل:* Act as a Resume Reviewer for Anthropic Fellows Program · *النوع:* نص

```
Act as a Resume Reviewer. You are an experienced recruiter tasked with evaluating resumes for applicants to the Anthropic Fellows Program.

Your task is to:
- Analyze resumes for key qualifications and experiences relevant to AI safety research.
- Assess candidates' technical backgrounds in fields such as computer science, mathematics, or cybersecurity.
- Evaluate experience with large language models and deep learning frameworks.
- Consider open-source contributions and empirical ML research projects.
- Determine candidates' motivation and fit for the program based on reducing catastrophic risks from AI systems.

You will:
- Provide feedback on each resume's strengths and areas for improvement.
- Offer suggestions on how candidates can better align their skills with the program's objectives.

Rules:
- Encourage diversity and inclusivity by considering a range of backgrounds and experiences.
- Be mindful of potential imposter syndrome, especially for underrepresented groups.
```

## 671. Structured Job Application Cleanup 🔤

*الأصل:* Structured Job Application Cleanup · *النوع:* نص

```
Act as a Job Application Cleaner. You are an expert in preparing job applications for AI analysis, ensuring clarity and extracting key information.

Your task is to:
- Organize the content into clear sections: Personal Information, Work Experience, Education, Skills, and References.
- Ensure each section is concise and highlights the most relevant information.
- Use bullet points for listing experiences and skills to enhance readability.
- Highlight keywords that are crucial for job matching and AI parsing.

Rules:
- Maintain a professional tone throughout.
- Do not alter factual information; focus on format and clarity.
- Use consistent formatting for dates and titles.
```

## 672. Cafe Window Seat (close-up, tactile realism) 🔤

*الأصل:* Cafe Window Seat (close-up, tactile realism) · *النوع:* نص

```
{
  "category": "CAFE_WINDOW_SEAT_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves tucked behind one ear",
      "texture": "Individual strands visible, slight frizz",
      "movement": "A few strands fall forward naturally"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Expressive, warm, natural wetline detail",
      "makeup": "Natural 'clean' makeup, subtle liner, soft blush",
      "skin_details": "Pores visible, natural sheen, no airbrush",
      "micro_details": "Fine baby hairs near forehead"
    },
    "clothing": {
      "top": "Casual knit or fitted tee (no text)",
      "texture": "Visible knit weave, realistic folds"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Candid portrait at a table",
    "orientation": "Close-up/half-body",
    "head_position": "Slight tilt",
    "hands": "One hand near chin, fingers relaxed and anatomically correct",
    "gaze": "Near-direct eye contact, soft smile",
    "posture": "Relaxed shoulders leaning slightly forward"
  },
  "setting": {
    "environment": "Cozy cafe by a window",
    "background_elements": [
      "Ceramic cup on table",
      "Condensation on glass",
      "Tiny crumbs on plate (subtle realism)",
      "Background patrons blurred (no identifiable faces)"
    ],
    "depth": "Shallow DOF with warm bokeh"
  },
  "camera": {
    "shot_type": "Portrait",
    "angle": "Slightly above eye level (casual handheld feel)",
    "focal_length_equivalent": "26mm phone OR 50mm pro portrait",
    "framing": "4:5, face and shoulders dominate frame",
    "focus": "Eyes sharp, background softly blurred"
  },
  "lighting": {
    "source": "Diffused window daylight + warm interior ambient",
    "direction": "Soft side light shaping cheekbones",
    "highlights": "Natural highlights on nose bridge and lips",
    "shadows": "Gentle shadow under chin, realistic contrast",
    "quality": "Soft, flattering, cozy"
  },
  "mood_and_expression": {
    "tone": "Warm, approachable, intimate",
    "expression": "Soft smile, lively eyes",
    "atmosphere": "Tactile, everyday candid"
  },
  "style_and_realism": {
    "style": "Photorealistic IG lifestyle",
    "fidelity": "High detail (lashes, pores, hair strands)",
    "imperfections": "Natural noise, slight imperfect WB allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild phone-like grain in shadows",
    "motion_blur": "None on face; minimal allowed in background"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "over-smoothing", "plastic skin", "uncanny eyes",
    "bad hands", "extra fingers",
    "readable text", "logos", "watermark",
    "cgi", "cartoon", "anime"
  ]
}
```

## 673. Rooftop Sunset Lookback (half-body) 🔤

*الأصل:* Rooftop Sunset Lookback (half-body) · *النوع:* نص

```
{
  "category": "ROOFTOP_SUNSET_LOOKBACK",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, slightly wind-touched",
      "texture": "Strands visible, flyaways around face",
      "movement": "Hair subtly lifted by breeze"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Intense yet friendly eye contact",
      "makeup": "Natural glam, dewy skin, subtle liner",
      "skin_details": "Visible pores, realistic glow, no airbrush"
    },
    "clothing": {
      "outfit": "Minimal black outfit, light jacket (no text/logos)",
      "fabric": "Real weave, gentle wrinkles at elbows"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Half-body leaning on railing",
    "orientation": "Body angled away, head turned back toward camera",
    "head_position": "Slight tilt, chin relaxed",
    "hands": "One hand resting on railing, fingers natural",
    "gaze": "Lookback eye contact, subtle smirk",
    "posture": "Relaxed, confident"
  },
  "setting": {
    "environment": "Rooftop with skyline in distance",
    "background_elements": [
      "Golden hour sun flare",
      "City lights beginning to glow (bokeh)",
      "Railing texture visible"
    ],
    "depth": "Strong separation: subject sharp, skyline bokeh"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye-level or slightly low",
    "focal_length_equivalent": "35-50mm editorial feel (or 26mm phone variant)",
    "framing": "4:5, subject off-center",
    "focus": "Eyes sharp, background creamy bokeh"
  },
  "lighting": {
    "source": "Golden hour sun + subtle fill",
    "direction": "Warm rim light on hair + cheek edge",
    "highlights": "Controlled flare, natural skin speculars",
    "shadows": "Soft shadows, cinematic separation"
  },
  "mood_and_expression": {
    "tone": "Quiet luxury, confident",
    "expression": "Soft smirk, calm intensity",
    "atmosphere": "Warm, cinematic, spontaneous"
  },
  "style_and_realism": {
    "style": "Photoreal social/editorial hybrid",
    "fidelity": "High hair/skin detail, no smoothing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "motion_blur": "Very subtle in hair tips only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "fake skyline", "cgi flare", "plastic skin",
    "extra fingers", "warped railing",
    "readable text", "logos", "watermark"
  ]
}
```

## 674. Rainy Umbrella Street (full-body) 🔤

*الأصل:* Rainy Umbrella Street (full-body) · *النوع:* نص

```
{
  "category": "RAINY_CITY_UMBRELLA_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Slightly damp strands, tucked behind ears",
      "texture": "Wet sheen realistic, not greasy",
      "movement": "A few strands stick lightly to cheek"
    },
    "face": {
      "eyes": "Bright eye contact, reflective catchlights",
      "skin_details": "Natural texture, slight moisture realism",
      "makeup": "Minimal, water-resistant look"
    },
    "clothing": {
      "outerwear": "Raincoat or trench (no logos)",
      "fabric": "Slight wet sheen and droplets visible"
    },
    "accessories": {
      "umbrella": "Clear umbrella with raindrops",
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body walking candid",
    "orientation": "Mid-stride, slight turn toward camera",
    "hands": "One hand holding umbrella handle, other in coat pocket",
    "gaze": "Soft smile, eye contact",
    "posture": "Relaxed, natural walk"
  },
  "setting": {
    "environment": "Rainy city street at dusk",
    "background_elements": [
      "Wet pavement reflections",
      "Streetlight bokeh",
      "Light drizzle visible (fine droplets, not smoke/fog)"
    ],
    "depth": "Subject clear, background blurred"
  },
  "camera": {
    "shot_type": "Full-body street photo",
    "angle": "Eye level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5, subject slightly off-center",
    "focus": "Face sharp, motion blur minimal"
  },
  "lighting": {
    "source": "Streetlights + ambient sky",
    "direction": "Soft top/side glows",
    "highlights": "Raindrop specular highlights on umbrella",
    "shadows": "Soft, realistic"
  },
  "mood_and_expression": {
    "tone": "Moody, cozy, stylish",
    "expression": "Gentle smile, calm confidence",
    "atmosphere": "Cinematic rain realism"
  },
  "style_and_realism": {
    "style": "Photorealistic street candid",
    "imperfections": "Mild noise, slight blur in background only"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Phone-like grain in low light",
    "motion_blur": "Slight in background reflections only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "smoke", "fog machine look", "watergun splash",
    "extra limbs", "warped umbrella spokes",
    "readable signs", "logos", "watermark"
  ]
}
```

## 675. Night Neon Alley (half-body, edgy) 🔤

*الأصل:* Night Neon Alley (half-body, edgy) · *النوع:* منظّم

```
{
  "category": "NEON_NIGHT_ALLEY_HALF_BODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose, slightly messy night-out hair",
      "texture": "Strands visible, slight shine",
      "movement": "A few flyaways catch neon rim light"
    },
    "face": {
      "eyes": "Direct eye contact, sharp catchlights",
      "makeup": "Night-out subtle glam, not heavy",
      "skin_details": "Real pores, slight sheen, no smoothing"
    },
    "clothing": {
      "outfit": "Edgy black jacket/top, no logos",
      "fabric": "Leather-like or matte textile with realistic texture"
    },
    "accessories": {
      "jewelry": [
        "Small silver hoops"
      ]
    }
  },
  "pose": {
    "type": "Half-body wall lean",
    "orientation": "Shoulder against wall, chin slightly raised",
    "hands": "One hand in jacket pocket, other lightly touching collar",
    "gaze": "Strong eye contact, subtle smirk",
    "posture": "Relaxed confident"
  },
  "setting": {
    "environment": "Neon-lit alley at night",
    "background_elements": [
      "Neon glow (no readable text)",
      "Wet ground reflections",
      "Soft haze that reads as atmosphere, not smoke"
    ],
    "depth": "Subject sharp, background bokeh neon"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone night mode variant",
    "framing": "4:5, asymmetrical composition",
    "focus": "Eyes sharp, neon blur behind"
  },
  "lighting": {
    "source": "Neon practical lights + ambient city",
    "direction": "Side rim from neon, soft fill from street bounce",
    "highlights": "Controlled neon rim on hair and cheek edge",
    "shadows": "Rich, realistic night contrast"
  },
  "mood_and_expression": {
    "tone": "Edgy, confident, stylish",
    "expression": "Calm intensity",
    "atmosphere": "Urban night, cinematic"
  },
  "style_and_realism": {
    "style": "Photorealistic nightlife portrait",
    "fidelity": "High detail, realistic noise allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Low-light grain (realistic)",
    "motion_blur": "None on face; slight allowed in background bokeh only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable neon signs",
    "logo",
    "watermark",
    "plastic skin",
    "cgi look",
    "extra fingers",
    "warped face",
    "duplicate subject"
  ]
}
```

## 676. Cozy Couch Lamp (close-up, warm tungsten) 🔤

*الأصل:* Cozy Couch Lamp (close-up, warm tungsten) · *النوع:* منظّم

```
{
  "category": "COZY_COUCH_LAMP_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Messy bun with face-framing tendrils",
      "texture": "Visible strands, natural frizz",
      "movement": "Loose strands fall near cheeks"
    },
    "face": {
      "eyes": "Soft eye contact, warm catchlights",
      "makeup": "Minimal, dewy, natural",
      "skin_details": "Pores, natural texture, no smoothing"
    },
    "clothing": {
      "outfit": "Casual cozy knit sweater (no text)",
      "texture": "Knit weave visible, realistic folds"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Close-up candid",
    "orientation": "Slightly above angle, relaxed",
    "hands": "One hand holding mug near chin (fingers correct)",
    "gaze": "Gentle eye contact",
    "expression": "Soft smile, cozy"
  },
  "setting": {
    "environment": "Living room couch corner",
    "background_elements": [
      "Warm orange lamp glow behind",
      "Blanket texture visible",
      "Slight lived-in clutter blurred"
    ],
    "depth": "Face sharp, lamp bloom behind, soft background"
  },
  "camera": {
    "shot_type": "Close-up portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "26mm phone or 50mm pro",
    "framing": "4:5, face dominant",
    "focus": "Eyes sharp"
  },
  "lighting": {
    "source": "Warm tungsten lamp + faint ambient",
    "direction": "Side/front warm",
    "highlights": "Soft glow on cheeks and hair",
    "shadows": "Gentle, comforting"
  },
  "mood_and_expression": {
    "tone": "Relaxed, intimate, relatable",
    "expression": "Soft smile",
    "atmosphere": "Warm, tactile, homey"
  },
  "style_and_realism": {
    "style": "Photorealistic iPhone-candid vibe",
    "imperfections": "Mild grain, slightly imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild phone sensor grain",
    "motion_blur": "None on face"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "plastic skin", "over-smoothing",
    "extra fingers", "warped mug",
    "readable text", "logo", "watermark"
  ]
}
```

## 677. Plant Bouquet Warm Lamp (your example vibe, adult-safe) 🔤

*الأصل:* Plant Bouquet Warm Lamp (your example vibe, adult-safe) · *النوع:* منظّم

```
{
  "category": "PLANTS_BOUQUET_WARM_LAMP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, youthful vibe but clearly adult.",
    "hair": {
      "color": "Dark brown",
      "style": "Natural, soft, slightly tousled, casual asymmetry",
      "texture": "Realistic strands, flyaways, roots visible",
      "movement": "Falls naturally over shoulders; small motion blur allowed in ends"
    },
    "face": {
      "shape": "Oval, soft jawline",
      "eyes": "Expressive, dark irises, crisp catchlights",
      "nose": "Defined bridge, natural highlight",
      "lips": "Soft rosy tint, natural texture lines visible",
      "skin_details": "Real pores, slight natural blush, no airbrushing",
      "micro_details": "Fine hair strands across forehead, subtle imperfections preserved"
    },
    "clothing": {
      "outfit": "Trendy black casual outfit, no text/logos",
      "fabric": "Tactile textile weave visible, gentle wrinkles"
    },
    "accessories": {
      "jewelry": ["Silver hoop earrings"]
    }
  },
  "pose": {
    "type": "Candid lifestyle portrait",
    "orientation": "Half-body",
    "head_position": "Slight tilt; subtle glance slightly left of lens then back to lens feel",
    "hands": "Holding bouquet wrapped in kraft paper; fingers natural, joints correct",
    "gaze": "Warm, lively eye contact",
    "expression": "Sweet confident smile"
  },
  "setting": {
    "environment": "Indoor plant corner",
    "background_elements": [
      "Many green plants layered foreground/midground/background",
      "Warm orange lamp bulb behind subject creating halo glow",
      "Kraft paper bouquet wrap: creases, twine detail, tactile texture"
    ],
    "depth": "Foreground leaf bokeh, subject sharp, background lamp bloom"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Slightly off-axis, casual handheld",
    "focal_length_equivalent": "26mm iPhone wide look",
    "framing": "4:5, asymmetrical composition",
    "focus": "Eyes sharp, bouquet slightly softer at edges"
  },
  "lighting": {
    "source": "Soft warm key + orange tungsten practical behind",
    "direction": "Warm side light casts intricate leaf-shadow patterns across face (subtle, flattering)",
    "highlights": "Gentle highlight on hair and cheekbones",
    "shadows": "Nuanced warm shadows, comforting atmosphere",
    "quality": "Soft, warm, tactile"
  },
  "mood_and_expression": {
    "tone": "Cute-relaxed, cozy, candid",
    "expression": "Lively eyes, soft smile",
    "atmosphere": "Immersive, spontaneous"
  },
  "style_and_realism": {
    "style": "Photorealistic iPhone snapshot vibe",
    "fidelity": "High skin and hair detail, no smoothing",
    "imperfections": "Slight motion blur away from face, mild noise"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High resolution",
    "noise": "Slight phone sensor noise",
    "composition": "Imperfect candid framing (slightly awkward angle) but still aesthetic"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "single_subject_only": true,
    "do_not_show_phone": true
  },
  "negative_prompt": [
    "cgi", "cartoon", "anime", "plastic skin", "over-smoothing",
    "extra fingers", "warped hands", "duplicate person",
    "readable text", "logos", "watermark"
  ]
}
```

## 678. Airport Corridor Walk (full-body) 🔤

*الأصل:* Airport Corridor Walk (full-body) · *النوع:* منظّم

```
{
  "category": "AIRPORT_CORRIDOR_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Low ponytail, travel-day casual",
      "texture": "Natural strands, slight flyaways",
      "movement": "Subtle motion from walking"
    },
    "face": {
      "eyes": "Bright, awake",
      "skin_details": "Real texture, no filter",
      "makeup": "Minimal travel-friendly look"
    },
    "clothing": {
      "outfit": "Travel chic: coat + comfy pants + sneakers (no logos)",
      "fabric": "Realistic wrinkles at knees/elbows"
    },
    "accessories": {
      "items": ["Rolling suitcase (no branding)", "Small tote (no logos)"],
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body walking candid",
    "orientation": "Mid-stride, slight lookback",
    "hands": "One hand on suitcase handle, other holding tote strap",
    "gaze": "Lookback toward camera, subtle smile",
    "posture": "Relaxed, confident traveler"
  },
  "setting": {
    "environment": "Airport corridor",
    "background_elements": [
      "Soft overhead lights",
      "Motion blur in distant travelers (no faces identifiable)",
      "Glossy floor reflections"
    ],
    "depth": "Subject sharp; background softened with motion"
  },
  "camera": {
    "shot_type": "Full-body travel photo",
    "angle": "Eye-level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5",
    "focus": "Face readable, outfit sharp"
  },
  "lighting": {
    "source": "Overhead airport lighting",
    "highlights": "Natural reflections on floor",
    "shadows": "Soft, realistic"
  },
  "mood_and_expression": {
    "tone": "Travel-day stylish, candid",
    "expression": "Friendly micro-smile"
  },
  "style_and_realism": {
    "style": "Photorealistic UGC travel",
    "imperfections": "Slight tilt, mild noise"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "motion_blur": "Background only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable signage", "logos",
    "extra limbs", "warped suitcase",
    "plastic skin", "cgi"
  ]
}
```

## 679. Museum Steps (full-body, cultural) 🔤

*الأصل:* Museum Steps (full-body, cultural) · *النوع:* منظّم

```
{
  "category": "MUSEUM_STEPS_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, artsy vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, tucked behind one ear",
      "texture": "Natural strands, slight flyaways"
    },
    "face": {
      "eyes": "Thoughtful, warm",
      "skin_details": "Natural texture, no smoothing"
    },
    "clothing": {
      "outfit": "Minimal chic black outfit + light coat (no logos)",
      "fabric": "Textile weave visible"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Seated full-body",
    "orientation": "Sitting on steps, ankles crossed",
    "hands": "One hand resting on knee, other near chin",
    "gaze": "Soft eye contact, calm",
    "posture": "Relaxed, composed"
  },
  "setting": {
    "environment": "Museum exterior steps",
    "background_elements": [
      "Stone texture with realistic pores and wear",
      "Soft daylight",
      "No readable plaques/signage"
    ],
    "depth": "Subject sharp, background softly blurred"
  },
  "camera": {
    "shot_type": "Full-body portrait",
    "angle": "Slightly low angle for elegance",
    "focal_length_equivalent": "35-50mm editorial",
    "framing": "4:5",
    "focus": "Face + hands sharp, background soft"
  },
  "lighting": {
    "source": "Natural daylight",
    "direction": "Soft front-side",
    "shadows": "Gentle, realistic"
  },
  "mood_and_expression": {
    "tone": "Artsy, calm, confident",
    "expression": "Subtle smile, thoughtful eyes"
  },
  "style_and_realism": {
    "style": "Photoreal editorial lifestyle",
    "imperfections": "Natural hair flyaways preserved"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Very mild",
    "sharpness": "Crisp facial detail"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "extra fingers", "warped steps",
    "plastic skin", "cgi"
  ]
}
```

## 680. Nightclub Booth Flash (half-body, party candids) 🔤

*الأصل:* Nightclub Booth Flash (half-body, party candids) · *النوع:* منظّم

```
{
  "category": "NIGHTCLUB_BOOTH_FLASH",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, nightlife vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Slightly messy, night-out texture",
      "texture": "Strands visible, slight shine",
      "movement": "Hair slightly displaced as if dancing"
    },
    "face": {
      "eyes": "Bright, playful",
      "skin_details": "Real texture, slight flash shine",
      "makeup": "Night-out natural glam"
    },
    "clothing": {
      "outfit": "Trendy black outfit, no logos",
      "fabric": "Realistic fabric sheen (not plastic)"
    },
    "accessories": {
      "jewelry": ["Silver hoops"],
      "props": ["Simple drink glass (no labels)"]
    }
  },
  "pose": {
    "type": "Half-body candid booth shot",
    "orientation": "Leaning slightly toward camera",
    "hands": "One hand holding glass, other brushing hair back",
    "gaze": "Direct eye contact",
    "expression": "Playful smirk"
  },
  "setting": {
    "environment": "Nightclub booth",
    "background_elements": [
      "Colored lights bokeh",
      "Soft atmospheric haze (not smoke)",
      "Crowd silhouettes blurred (no faces identifiable)"
    ],
    "depth": "Face sharp, background bokeh heavy"
  },
  "camera": {
    "shot_type": "Half-body nightlife portrait",
    "angle": "Eye-level, handheld",
    "focal_length_equivalent": "26mm phone night mode",
    "framing": "4:5",
    "focus": "Eyes sharp, background soft"
  },
  "lighting": {
    "source": "Phone flash + ambient club lights",
    "highlights": "Flash pop on face, realistic shine",
    "shadows": "Soft but contrasty nightlife look"
  },
  "mood_and_expression": {
    "tone": "Fun, confident, candid",
    "atmosphere": "Energetic nightlife"
  },
  "style_and_realism": {
    "style": "Photorealistic party UGC",
    "imperfections": "Grain, slight blur in background"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Noticeable but realistic low-light noise",
    "motion_blur": "Minimal; allowed in background only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "readable signage", "logos", "watermark",
    "plastic skin", "cgi",
    "extra limbs", "warped hands"
  ]
}
```

## 681. Studio Beauty Editorial (close-up, pro) 🔤

*الأصل:* Studio Beauty Editorial (close-up, pro) · *النوع:* منظّم

```
{
  "category": "STUDIO_BEAUTY_EDITORIAL_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, beauty campaign vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Sleek but natural (not helmet hair)",
      "texture": "Individual strands visible, subtle flyaways"
    },
    "face": {
      "shape": "Soft oval",
      "eyes": "Sharp catchlights, clean lashes",
      "makeup": "Clean glam, subtle contour, natural lip",
      "skin_details": "High fidelity pores, no airbrush",
      "micro_details": "Fine vellus hairs visible under light"
    },
    "clothing": {
      "outfit": "Minimal black top, no logos"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Beauty close-up",
    "orientation": "Frontal close-up",
    "hands": "One hand lightly framing jawline (perfect anatomy)",
    "gaze": "Direct eye contact",
    "expression": "Neutral confident"
  },
  "setting": {
    "environment": "Studio seamless background",
    "background_elements": ["Clean gradient backdrop, no texture distractions"],
    "depth": "Very shallow background distraction, subject isolated"
  },
  "camera": {
    "shot_type": "Close-up portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "85mm editorial portrait feel",
    "framing": "4:5 (tight head-and-shoulders)",
    "focus": "Eyes razor sharp, skin texture preserved"
  },
  "lighting": {
    "source": "Softbox key + gentle fill + subtle rim",
    "direction": "Key slightly above and to one side",
    "highlights": "Clean speculars, not oily",
    "shadows": "Soft, sculpted, premium"
  },
  "mood_and_expression": {
    "tone": "Premium, elegant, calm",
    "atmosphere": "High-end beauty campaign"
  },
  "style_and_realism": {
    "style": "Photoreal editorial",
    "fidelity": "Extremely high detail, no smoothing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Very low",
    "resolution": "High"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "airbrushed skin", "plastic face", "cgi",
    "extra fingers", "warped hands",
    "readable text", "logos", "watermark"
  ]
}
```

## 682. Beach Walk Golden Hour (full-body, travel) 🔤

*الأصل:* Beach Walk Golden Hour (full-body, travel) · *النوع:* منظّم

```
{
  "category": "BEACH_WALK_GOLDEN_HOUR_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, travel influencer vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, wind-touched",
      "texture": "Natural strands, flyaways",
      "movement": "Hair moving lightly with sea breeze"
    },
    "face": {
      "eyes": "Happy, squinting slightly in sun",
      "skin_details": "Realistic texture, sun-kissed glow (not oily)",
      "makeup": "Minimal beach look"
    },
    "clothing": {
      "outfit": "Linen dress or beach cover-up (no logos)",
      "fabric": "Linen weave visible, gentle wrinkles",
      "movement": "Dress hem moving naturally"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body walking candid",
    "orientation": "Mid-step along shoreline",
    "hands": "One hand holding dress hem, other brushing hair back",
    "gaze": "Looking down laughing, then glancing toward camera vibe",
    "posture": "Carefree, relaxed"
  },
  "setting": {
    "environment": "Beach shoreline",
    "background_elements": [
      "Soft sunset reflections on water",
      "Footprints in sand",
      "Subtle haze (natural sea air, not smoke)"
    ],
    "depth": "Subject sharp, background softly blurred"
  },
  "camera": {
    "shot_type": "Full-body travel photo",
    "angle": "Eye-level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5",
    "focus": "Face readable; motion blur minimal"
  },
  "lighting": {
    "source": "Golden hour sunlight",
    "direction": "Back/side rim light on hair and shoulders",
    "highlights": "Controlled sun flare",
    "shadows": "Soft, warm"
  },
  "mood_and_expression": {
    "tone": "Dreamy, carefree, warm",
    "expression": "Natural laughter",
    "atmosphere": "Wanderlust candid"
  },
  "style_and_realism": {
    "style": "Photoreal travel influencer",
    "imperfections": "Slight motion blur on dress hem allowed; face stays detailed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Low to mild",
    "motion_blur": "Subtle in fabric only"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "watergun splash", "fake water texture",
    "extra limbs", "warped horizon",
    "readable text", "logos", "watermark"
  ]
}
```

## 683. Tech Desk “Builder” (half-body, cozy monitor glow) 🔤

*الأصل:* Tech Desk “Builder” (half-body, cozy monitor glow) · *النوع:* منظّم

```
{
  "category": "TECH_DESK_BUILDER_HALF_BODY",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, creator vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Low ponytail or loose waves",
      "texture": "Strands visible, slight flyaways"
    },
    "face": {
      "eyes": "Focused but friendly",
      "skin_details": "Real texture, no smoothing",
      "makeup": "Minimal"
    },
    "clothing": {
      "outfit": "Casual black top + light cardigan, no logos",
      "fabric": "Real knit weave, subtle wrinkles"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Half-body seated",
    "orientation": "Body slightly angled, shoulders relaxed",
    "hands": "One hand near trackpad, other tucking hair behind ear",
    "gaze": "Looking at camera with small smirk",
    "posture": "Relaxed confident"
  },
  "setting": {
    "environment": "Minimal desk setup",
    "background_elements": [
      "Laptop/monitor with generic blurred UI (NO readable text)",
      "Warm desk lamp + cool monitor glow mix",
      "Plant in corner, small clutter blurred"
    ],
    "depth": "Face sharp, background bokeh"
  },
  "camera": {
    "shot_type": "Half-body lifestyle portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "26mm phone or 50mm pro",
    "framing": "4:5",
    "focus": "Eyes sharp"
  },
  "lighting": {
    "source": "Warm lamp + cool monitor glow",
    "direction": "Soft mixed lighting with gentle shadows",
    "highlights": "Natural facial speculars",
    "shadows": "Soft, realistic"
  },
  "mood_and_expression": {
    "tone": "Cozy creator, confident",
    "expression": "Micro-smirk",
    "atmosphere": "Late-night build session vibe"
  },
  "style_and_realism": {
    "style": "Photorealistic lifestyle",
    "imperfections": "Mild noise, slight imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild",
    "resolution": "High"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_screens": true
  },
  "negative_prompt": [
    "readable UI text", "logos", "watermark",
    "plastic skin", "cgi",
    "extra fingers", "warped hands"
  ]
}
```

## 684. Restaurant Candle Close-up (intimate, not explicit) 🔤

*الأصل:* Restaurant Candle Close-up (intimate, not explicit) · *النوع:* منظّم

```
{
  "category": "CANDLELIT_RESTAURANT_CLOSEUP",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose, softly styled",
      "texture": "Real strands, gentle shine"
    },
    "face": {
      "eyes": "Soft eye contact, warm highlights",
      "makeup": "Natural glam, subtle liner",
      "skin_details": "Real pores, warm glow from candle"
    },
    "clothing": {
      "outfit": "Simple elegant black top/dress (no logos)"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Close-up seated",
    "orientation": "Face toward camera",
    "hands": "One hand supporting chin, fingers relaxed",
    "gaze": "Direct eye contact",
    "expression": "Calm confident micro-smile"
  },
  "setting": {
    "environment": "Restaurant table",
    "background_elements": [
      "Candle flame bokeh",
      "Glass reflections",
      "Soft background blur (no readable signage)"
    ],
    "depth": "Face sharp, background creamy"
  },
  "camera": {
    "shot_type": "Close-up portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "50-85mm pro feel or 26mm phone variant",
    "framing": "4:5, tight crop",
    "focus": "Eyes extremely sharp"
  },
  "lighting": {
    "source": "Candle + warm ambient",
    "direction": "Warm side/front",
    "highlights": "Soft specular on lips and eyes",
    "shadows": "Gentle, flattering"
  },
  "mood_and_expression": {
    "tone": "Intimate, elegant, confident",
    "atmosphere": "Warm, cinematic"
  },
  "style_and_realism": {
    "style": "Photoreal IG portrait",
    "imperfections": "Slight grain acceptable"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild low-light grain"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "fake flames", "cgi",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped hands",
    "readable text", "logos", "watermark"
  ]
}
```

## 685. Minimal Studio “iPhone Candid” (pro-quality but awkward framing) 🔤

*الأصل:* Minimal Studio “iPhone Candid” (pro-quality but awkward framing) · *النوع:* منظّم

```
{
  "category": "STUDIO_IPHONE_CANDID_AWKWARD_FRAMING",
  "subject": {
    "demographics": "Adult woman, 21-27, Turkish-looking, youthful vibe but adult.",
    "hair": {
      "color": "Dark brown",
      "style": "Natural loose waves",
      "texture": "Strands visible, slight flyaways"
    },
    "face": {
      "eyes": "Bright, direct",
      "skin_details": "High fidelity pores, no smoothing",
      "makeup": "Clean natural"
    },
    "clothing": {
      "outfit": "Simple black top (no logos)"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Close-up/half-body candid",
    "orientation": "Slightly too-close crop, imperfect framing",
    "hands": "One hand briefly in frame near hairline (fingers correct)",
    "gaze": "Direct eye contact",
    "expression": "Playful micro-smile"
  },
  "setting": {
    "environment": "Plain studio wall",
    "background_elements": [
      "Subtle wall texture",
      "No props"
    ],
    "depth": "Face sharp, background soft"
  },
  "camera": {
    "shot_type": "Phone-candid look in a clean space",
    "angle": "Slightly above eye-level",
    "focal_length_equivalent": "26mm phone feel",
    "framing": "4:5 with awkward crop (slightly cutting hair/top space)",
    "focus": "Eyes sharp"
  },
  "lighting": {
    "source": "Soft diffused key light",
    "direction": "Front/side gentle",
    "quality": "Natural, not glossy"
  },
  "mood_and_expression": {
    "tone": "Candid, playful, everyday",
    "atmosphere": "Looks unplanned but still flattering"
  },
  "style_and_realism": {
    "style": "Photoreal UGC",
    "imperfections": "Tiny noise, imperfect composition"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "over-retouch", "beauty filter",
    "plastic skin", "cgi",
    "extra fingers", "warped hands",
    "readable text", "logos", "watermark"
  ]
}
```

## 686. “Blue Hour Bridge” (full-body, cinematic but still IG) 🔤

*الأصل:* “Blue Hour Bridge” (full-body, cinematic but still IG) · *النوع:* منظّم

```
{
  "category": "BLUE_HOUR_BRIDGE_FULLBODY",
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking, calm confident vibe.",
    "hair": {
      "color": "Dark brown",
      "style": "Loose waves, slightly wind-touched",
      "texture": "Individual strands visible",
      "movement": "Small motion in hair tips"
    },
    "face": {
      "eyes": "Calm direct gaze",
      "skin_details": "Natural texture, no smoothing"
    },
    "clothing": {
      "outfit": "Minimal black coat + fitted top, no logos",
      "fabric": "Coat texture visible, slight wrinkles"
    },
    "accessories": {
      "jewelry": ["Silver hoops"]
    }
  },
  "pose": {
    "type": "Full-body leaning on railing",
    "orientation": "Body angled, head turned to camera",
    "hands": "Hands resting on railing, fingers correct",
    "gaze": "Direct eye contact",
    "expression": "Neutral calm confidence"
  },
  "setting": {
    "environment": "Bridge at blue hour",
    "background_elements": [
      "City lights bokeh",
      "Cool dusk ambience",
      "Railing texture visible"
    ],
    "depth": "Subject sharp, background bokeh"
  },
  "camera": {
    "shot_type": "Full-body portrait",
    "angle": "Eye-level",
    "focal_length_equivalent": "35mm editorial",
    "framing": "4:5, subject off-center",
    "focus": "Face sharp, background creamy"
  },
  "lighting": {
    "source": "Ambient dusk + city light bounce",
    "direction": "Soft front fill from environment",
    "highlights": "Controlled, subtle"
  },
  "mood_and_expression": {
    "tone": "Cinematic, calm, premium",
    "atmosphere": "Blue hour dreamy realism"
  },
  "style_and_realism": {
    "style": "Photoreal social/editorial",
    "imperfections": "Slight low-light noise allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "noise": "Mild low-light grain"
  },
  "constraints": {
    "adult_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "fake skyline", "cgi",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped railing",
    "readable text", "logos", "watermark"
  ]
}
```

## 687. Kitchen Morning Window Light (candid, cozy) 🔤

*الأصل:* Kitchen Morning Window Light (candid, cozy) · *النوع:* منظّم

```
{
  "category": "KITCHEN_MORNING_WINDOWLIGHT",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Use the input reference image as the only identity source. Preserve exact facial structure, eye shape/spacing, nose bridge/tip, lips, jawline, cheekbones, hairline, brows, skin tone/undertone, and distinctive marks. Do not beautify, do not change ethnicity/age perception. Adult (21+) only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking / Mediterranean vibe (must match reference).",
    "hair": {
      "color": "Match reference exactly.",
      "style": "Loose, slightly messy morning hair; a few face-framing strands.",
      "texture": "Visible individual strands, subtle flyaways, realistic roots.",
      "movement": "Falls naturally; slight motion in ends is acceptable."
    },
    "face": {
      "shape": "Match reference exactly.",
      "eyes": "Exact reference eye shape; natural catchlights; no uncanny sharpening.",
      "lips": "Exact reference lip shape; natural texture lines visible.",
      "skin_details": "High-fidelity pores, subtle morning sheen; no airbrushing.",
      "micro_details": "Keep reference marks/freckles/moles precisely."
    },
    "clothing": {
      "top": "Soft oversized tee or casual tank (no logos, no text).",
      "fit": "Relaxed, slightly wrinkled, realistic drape.",
      "texture": "Cotton weave visible, faint pilling allowed."
    },
    "accessories": {
      "jewelry": ["Small silver hoops (optional, realistic reflections)"]
    }
  },
  "pose": {
    "type": "Candid lifestyle",
    "orientation": "Half-body leaning lightly on counter",
    "head_position": "Slight tilt; chin relaxed",
    "hands": "One hand holding a mug; other hand brushing hair behind ear (hands anatomically correct)",
    "gaze": "Near-direct eye contact (slight off-axis like a candid moment)",
    "expression": "Sleepy-soft smile, cozy morning vibe"
  },
  "setting": {
    "environment": "Home kitchen",
    "background_elements": [
      "Window with sheer curtain diffusing daylight",
      "Countertop with subtle crumbs/coffee spoon (no branding)",
      "Plants or fruit bowl (no readable labels)",
      "Soft clutter blur (tasteful, realistic)"
    ],
    "depth": "Subject sharp; background softly blurred with natural depth layering"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Slightly above eye level, handheld",
    "focal_length_equivalent": "24-28mm smartphone wide (amateur) OR 35-50mm (pro)",
    "framing": "4:5 IG feed, asymmetrical composition",
    "focus": "Eyes/face sharp; fall-off on shoulders/background",
    "perspective": "Natural; no face distortion"
  },
  "lighting": {
    "source": "Soft window daylight + subtle indoor bounce",
    "direction": "Side/front soft light shaping cheekbones gently",
    "highlights": "Natural speculars on eyes, nose bridge, lips",
    "shadows": "Soft-edge shadows under chin and hairline",
    "quality": "Warm, comforting, realistic morning light"
  },
  "mood_and_expression": {
    "tone": "Cozy, intimate, relatable",
    "expression": "Soft smile with lively eyes",
    "atmosphere": "Unplanned, everyday candid"
  },
  "style_and_realism": {
    "style": "Photorealistic social media lifestyle",
    "fidelity": "High detail skin texture and hair strands; no smoothing",
    "imperfections": "Minor noise in shadows allowed"
  },
  "colors_and_tone": {
    "palette": "Warm neutrals + soft daylight tones",
    "white_balance": "Slightly warm indoor/daylight mix",
    "contrast": "Medium, realistic dynamic range",
    "saturation": "Natural"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High resolution",
    "noise": "Mild realistic sensor grain in shadows",
    "mode_variants": {
      "amateur": "iPhone-candid feel: slight tilt, imperfect framing, mild noise, subtle motion blur away from face",
      "pro": "Editorial lifestyle: cleaner exposure, controlled highlights, crisp micro-contrast, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_labels": true
  },
  "negative_prompt": [
    "identity drift", "face morphing", "beauty filter", "porcelain skin", "over-smoothing",
    "cgi", "cartoon", "anime",
    "extra fingers", "warped hands", "duplicate person",
    "readable text", "logos", "watermark"
  ]
}
```

## 688. Bookstore Aisle (artsy, quiet luxury) 🔤

*الأصل:* Bookstore Aisle (artsy, quiet luxury) · *النوع:* منظّم

```
{
  "category": "BOOKSTORE_AISLE_ARTSY",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve the exact identity from the reference image (face geometry, features, skin tone, marks). Adult 21+ only. No beautification or identity changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking (must match reference).",
    "hair": {
      "color": "Match reference exactly.",
      "style": "Loose waves tucked behind one ear",
      "texture": "Real strands; slight frizz; flyaways visible",
      "movement": "Hair rests naturally on shoulders"
    },
    "face": {
      "eyes": "Exact reference eyes; thoughtful gaze; natural catchlights",
      "skin_details": "Pores visible, realistic tone variation",
      "micro_details": "Preserve all reference marks precisely"
    },
    "clothing": {
      "outfit": "Minimal black coat or cardigan over a neutral top (no logos/text).",
      "fabric": "Wool/knit texture visible, slight wrinkles at elbows"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"],
      "props": ["One hardcover book with no readable title (blur/spine turned away)"]
    }
  },
  "pose": {
    "type": "Candid browsing",
    "orientation": "Half-body",
    "head_position": "Chin slightly down, eyes up toward camera",
    "hands": "One hand holding a book near chest; other hand touching a shelf edge (hands correct)",
    "gaze": "Near-direct eye contact, calm and confident",
    "expression": "Soft neutral with micro-smile"
  },
  "setting": {
    "environment": "Bookstore aisle",
    "background_elements": [
      "Shelves of books with spines turned away or blurred (NO readable text)",
      "Warm indoor lighting",
      "Soft depth layers down the aisle"
    ],
    "depth": "Shallow DOF: face sharp, shelves softly blurred"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye level or slightly above",
    "focal_length_equivalent": "35-50mm pro OR 26mm phone",
    "framing": "4:5, asymmetrical with leading lines from shelves",
    "focus": "Eyes sharp, hands reasonably sharp, background soft"
  },
  "lighting": {
    "source": "Warm overhead bookstore lights + soft fill",
    "direction": "Gentle top/side",
    "highlights": "Soft highlights on eyes and cheekbones",
    "shadows": "Subtle under-chin shadow, realistic contrast"
  },
  "mood_and_expression": {
    "tone": "Artsy, calm, 'quiet luxury'",
    "atmosphere": "Cozy and intimate, candid"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle/editorial",
    "fidelity": "High detail, no airbrushing"
  },
  "colors_and_tone": {
    "palette": "Warm browns + neutral blacks + creamy highlights",
    "white_balance": "Warm indoor",
    "contrast": "Medium"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild indoor grain",
    "mode_variants": {
      "amateur": "Slightly crooked handheld framing, mild noise, imperfect WB",
      "pro": "Cleaner exposure, controlled highlights, crisp micro-contrast"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_book_titles": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "identity drift", "face morphing",
    "plastic skin", "over-smoothing",
    "extra fingers", "warped hands",
    "cgi", "cartoon", "anime"
  ]
}
```

## 689. Passenger Seat Car Selfie (golden hour, candid) 🔤

*الأصل:* Passenger Seat Car Selfie (golden hour, candid) · *النوع:* منظّم

```
{
  "category": "CAR_PASSENGER_SEAT_SELFIE",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Lock identity to reference image exactly. Preserve face proportions, features, and skin tone. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, Turkish-looking (match reference).",
    "hair": {
      "color": "Match reference.",
      "style": "Loose, slightly wind-touched",
      "texture": "Individual strands visible; a few flyaways",
      "movement": "Hair resting on shoulder with subtle motion"
    },
    "face": {
      "eyes": "Exact reference shape; bright catchlights from window",
      "skin_details": "Pores visible, warm glow; no smoothing",
      "micro_details": "Preserve marks exactly"
    },
    "clothing": {
      "top": "Casual black top or hoodie (no logos/text)",
      "texture": "Cotton weave visible"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"]
    }
  },
  "pose": {
    "type": "Handheld selfie vibe (do not show phone)",
    "orientation": "Close-up to half-body",
    "head_position": "Slight tilt toward window light",
    "limbs": "One arm implied holding camera out of frame",
    "gaze": "Direct eye contact",
    "expression": "Confident relaxed pout (subtle, not exaggerated)"
  },
  "setting": {
    "environment": "Car passenger seat",
    "background_elements": [
      "Seat fabric texture visible",
      "Window light streaks",
      "Outside scenery blurred (no readable signs)"
    ],
    "depth": "Face sharp; background soft blur"
  },
  "camera": {
    "shot_type": "Selfie-style portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "24-28mm smartphone wide",
    "framing": "3:4 or 4:5, chest-up crop",
    "focus": "Eyes sharp; slight fall-off at shoulders"
  },
  "lighting": {
    "source": "Golden hour sunlight through car window",
    "direction": "Side/front warm",
    "highlights": "Warm highlight on cheek and hair",
    "shadows": "Soft under-chin shadow, realistic contrast"
  },
  "mood_and_expression": {
    "tone": "Casual, confident, candid",
    "atmosphere": "Warm travel moment"
  },
  "style_and_realism": {
    "style": "Photorealistic social selfie",
    "imperfections": "Mild noise, slight imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild grain in shadows",
    "mode_variants": {
      "amateur": "Slightly shaky framing, subtle motion blur away from face, phone-like HDR",
      "pro": "Cleaner exposure and sharper micro-contrast, still realistic"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_outside_signs": true
  },
  "negative_prompt": [
    "identity drift", "face morphing",
    "warped car interior", "duplicate subject",
    "extra fingers", "bad anatomy",
    "readable text", "logos", "watermark",
    "plastic skin", "over-smoothing"
  ]
}
```

## 690. Balcony Coffee (morning haze, plant vibe) 🔤

*الأصل:* Balcony Coffee (morning haze, plant vibe) · *النوع:* منظّم

```
{
  "category": "BALCONY_COFFEE_PLANTS",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve exact identity from reference. Adult 21+ only. No beautification or face changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29 (match reference identity).",
    "hair": {
      "color": "Match reference.",
      "style": "Loose waves or messy bun with tendrils",
      "texture": "Real strands, flyaways, realistic volume",
      "movement": "Natural, slight breeze lift"
    },
    "face": {
      "eyes": "Exact reference eyes; soft morning catchlights",
      "skin_details": "Natural texture, pores visible, gentle morning glow",
      "micro_details": "Keep reference marks"
    },
    "clothing": {
      "outfit": "Cozy cardigan + simple top (no logos/text)",
      "fabric": "Knit texture visible, slight pilling allowed"
    },
    "accessories": {
      "jewelry": ["Small silver hoops"],
      "props": ["Ceramic mug (unbranded)"]
    }
  },
  "pose": {
    "type": "Lifestyle candid",
    "orientation": "Half-body seated on balcony chair",
    "head_position": "Slight tilt, chin relaxed",
    "hands": "Both hands around mug for warmth (hands correct)",
    "gaze": "Near-direct eye contact",
    "expression": "Soft smile, relaxed"
  },
  "setting": {
    "environment": "Balcony with potted plants",
    "background_elements": [
      "Plant leaves in foreground bokeh",
      "Soft city background blur (no readable signs)",
      "Morning haze, gentle atmosphere"
    ],
    "depth": "Foreground leaves blurred; face sharp; background soft"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Slightly above eye level",
    "focal_length_equivalent": "26mm phone OR 50mm pro",
    "framing": "4:5, off-center composition",
    "focus": "Eyes sharp; mug slightly softer"
  },
  "lighting": {
    "source": "Soft morning daylight",
    "direction": "Front/side diffuse",
    "highlights": "Natural highlights on eyes and lips",
    "shadows": "Gentle under-chin shadow"
  },
  "mood_and_expression": {
    "tone": "Cozy, relatable, calm",
    "atmosphere": "Tactile morning quiet"
  },
  "style_and_realism": {
    "style": "Photoreal IG lifestyle",
    "imperfections": "Mild grain, slightly imperfect framing"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild",
    "mode_variants": {
      "amateur": "Handheld iPhone-candid tilt, slight noise, imperfect composition",
      "pro": "Cleaner exposure, crisp micro-contrast, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "identity drift", "face morphing",
    "cgi plants", "plastic skin",
    "extra fingers", "warped mug",
    "readable text", "logos", "watermark"
  ]
}
```

## 691. Subway Platform (street candid, moody) 🔤

*الأصل:* Subway Platform (street candid, moody) · *النوع:* منظّم

```
{
  "category": "SUBWAY_PLATFORM_STREET_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Use reference image identity exactly. Adult 21+. Preserve face proportions and marks. No beautification."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Low ponytail or loose waves tucked behind scarf",
      "texture": "Real strands; slight frizz; flyaways",
      "movement": "Minimal movement, platform breeze subtle"
    },
    "face": {
      "eyes": "Exact reference; reflective catchlights",
      "skin_details": "Pores visible, realistic shadows",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outerwear": "Minimal black coat or jacket (no logos/text)",
      "extras": "Scarf optional (no patterns with text)",
      "fabric": "Wool texture visible"
    },
    "accessories": {
      "jewelry": ["Small silver hoops (optional)"],
      "bag": "Simple tote/shoulder bag (no logos)"
    }
  },
  "pose": {
    "type": "Candid waiting",
    "orientation": "Half-body standing near platform edge (safe distance)",
    "head_position": "Slight tilt, calm posture",
    "hands": "One hand holding bag strap, other in pocket",
    "gaze": "Looking toward camera with neutral confidence",
    "expression": "Calm, slightly serious"
  },
  "setting": {
    "environment": "Subway platform",
    "background_elements": [
      "Overhead fluorescent lights",
      "Train blur in background (no readable signage)",
      "Platform tiles with realistic wear"
    ],
    "depth": "Face sharp; background softened"
  },
  "camera": {
    "shot_type": "Street-style portrait",
    "angle": "Eye level",
    "focal_length_equivalent": "35mm editorial OR 26mm phone",
    "framing": "4:5, leading lines from platform",
    "focus": "Eyes sharp, background motion blur allowed"
  },
  "lighting": {
    "source": "Fluorescent overhead + ambient",
    "direction": "Top-down with mild fill",
    "highlights": "Realistic shine on hair/skin",
    "shadows": "Soft, slightly cool subway contrast"
  },
  "mood_and_expression": {
    "tone": "Moody, urban, confident",
    "atmosphere": "Real city commute candid"
  },
  "style_and_realism": {
    "style": "Photoreal street portrait",
    "imperfections": "Noise + slight motion blur in background"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Moderate low-light grain",
    "mode_variants": {
      "amateur": "Phone-like HDR, mild grain, imperfect framing",
      "pro": "Cleaner exposure, controlled highlights, crisp subject separation"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_signage": true
  },
  "negative_prompt": [
    "readable signs", "logos", "watermark",
    "identity drift", "face morphing",
    "extra fingers", "warped hands",
    "cgi", "plastic skin", "over-smoothing"
  ]
}
```

## 692. Farmers Market (colorful produce, candid) 🔤

*الأصل:* Farmers Market (colorful produce, candid) · *النوع:* منظّم

```
{
  "category": "FARMERS_MARKET_PRODUCE_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Lock identity to reference image exactly. Adult 21+ only. No face changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Loose waves, tucked behind ear",
      "texture": "Strands visible, mild flyaways",
      "movement": "Natural movement while walking"
    },
    "face": {
      "eyes": "Exact reference eyes; bright daylight catchlights",
      "skin_details": "Pores visible, natural sunlit texture",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outfit": "Casual black top + light jacket (no logos/text)",
      "fabric": "Cotton/denim weave visible"
    },
    "accessories": {
      "bag": "Canvas tote (no logos)",
      "jewelry": ["Small silver hoops"],
      "props": ["Paper bag of produce (unbranded)"]
    }
  },
  "pose": {
    "type": "Walking candid",
    "orientation": "Half-body",
    "hands": "One hand holding produce bag, other adjusting tote strap",
    "gaze": "Looking at camera mid-laugh",
    "expression": "Bright, natural smile"
  },
  "setting": {
    "environment": "Outdoor farmers market",
    "background_elements": [
      "Colorful fruit/vegetable stalls (no readable signs)",
      "Soft crowd blur (no identifiable faces)",
      "Sunlight dappling"
    ],
    "depth": "Subject sharp; background lively bokeh"
  },
  "camera": {
    "shot_type": "Half-body lifestyle",
    "angle": "Eye level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5, subject off-center",
    "focus": "Face sharp; background soft"
  },
  "lighting": {
    "source": "Natural daylight",
    "direction": "Soft front/side",
    "highlights": "Natural facial highlights",
    "shadows": "Soft under-chin"
  },
  "mood_and_expression": {
    "tone": "Fresh, happy, relatable",
    "atmosphere": "Weekend candid"
  },
  "style_and_realism": {
    "style": "Photorealistic IG lifestyle",
    "imperfections": "Minor motion blur in produce bag edges allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Low",
    "mode_variants": {
      "amateur": "Slightly shaky candid framing, mild HDR, imperfect crop",
      "pro": "Clean editorial exposure, crisp detail, shallow DOF"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_signage": true
  },
  "negative_prompt": [
    "readable text", "logos", "watermark",
    "identity drift", "face morphing",
    "extra fingers", "warped hands",
    "plastic skin", "over-smoothing"
  ]
}
```

## 693. Hotel Hallway Fit Check (mirror vibe, no phone shown) 🔤

*الأصل:* Hotel Hallway Fit Check (mirror vibe, no phone shown) · *النوع:* منظّم

```
{
  "category": "HOTEL_HALLWAY_FIT_CHECK",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve exact reference identity. Adult 21+ only. No face/ethnicity changes."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Sleek ponytail or loose waves",
      "texture": "Natural strands, mild flyaways"
    },
    "face": {
      "eyes": "Exact reference eyes; confident gaze",
      "skin_details": "Natural texture, pores visible"
    },
    "clothing": {
      "outfit": "Minimal black travel outfit (no logos/text)",
      "fabric": "Fabric weave visible, subtle wrinkles"
    },
    "accessories": {
      "jewelry": [
        "Small silver hoops"
      ],
      "bag": "Small shoulder bag (no logos)"
    }
  },
  "pose": {
    "type": "Fit-check candid",
    "orientation": "Full-body or three-quarter",
    "hands": "One hand adjusting jacket hem; other holding bag strap",
    "gaze": "Looking at mirror reflection (no phone visible)",
    "expression": "Neutral confident"
  },
  "setting": {
    "environment": "Hotel hallway",
    "background_elements": [
      "Warm wall sconces",
      "Carpet texture visible",
      "Door frames blurred (no room numbers readable)"
    ],
    "depth": "Subject sharp; background softly blurred"
  },
  "camera": {
    "shot_type": "Full-body hallway portrait",
    "angle": "Slightly low for height OR eye level",
    "focal_length_equivalent": "26mm phone or 35mm editorial",
    "framing": "4:5",
    "focus": "Face and outfit sharp"
  },
  "lighting": {
    "source": "Warm hallway sconces",
    "direction": "Top/side warm",
    "highlights": "Warm rim on hair",
    "shadows": "Soft"
  },
  "mood_and_expression": {
    "tone": "Travel chic, quiet luxury",
    "atmosphere": "Candid but composed"
  },
  "style_and_realism": {
    "style": "Photoreal lifestyle",
    "imperfections": "Slight noise, mild tilt allowed"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild indoor grain",
    "mode_variants": {
      "amateur": "Slightly crooked handheld framing, mild grain, imperfect crop",
      "pro": "Clean editorial exposure, crisp detail, controlled highlights"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_numbers": true
  },
  "negative_prompt": [
    "readable door numbers",
    "readable text",
    "logos",
    "watermark",
    "identity drift",
    "face morphing",
    "extra fingers",
    "warped hands",
    "plastic skin",
    "over-smoothing"
  ]
}
```

## 694. Pilates Studio (soft daylight, athletic elegance) 🔤

*الأصل:* Pilates Studio (soft daylight, athletic elegance) · *النوع:* منظّم

```
{
  "category": "PILATES_STUDIO_SOFT_DAYLIGHT",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Preserve exact reference identity and facial proportions. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "High ponytail or neat bun (realistic, not perfect)",
      "texture": "Strands visible, a few flyaways",
      "movement": "Minimal"
    },
    "face": {
      "eyes": "Exact reference eyes; calm focus",
      "skin_details": "Natural texture; subtle workout glow (not oily)",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outfit": "Minimal activewear set (no logos/text)",
      "fabric": "Athletic knit texture visible; realistic tension at seams"
    },
    "accessories": {
      "jewelry": [
        "Small silver hoops optional (can be removed for workout realism)"
      ]
    }
  },
  "pose": {
    "type": "Post-session candid",
    "orientation": "Half-body seated on mat",
    "hands": "One hand holding water bottle (unbranded), other resting on knee",
    "gaze": "Near-direct eye contact",
    "expression": "Soft proud smile"
  },
  "setting": {
    "environment": "Pilates studio",
    "background_elements": [
      "Neutral studio walls",
      "Mirrors blurred without reflections glitches",
      "Yoga mats and props (no logos)"
    ],
    "depth": "Subject sharp; background soft"
  },
  "camera": {
    "shot_type": "Half-body portrait",
    "angle": "Eye level or slightly above",
    "focal_length_equivalent": "26mm phone OR 50mm pro",
    "framing": "4:5",
    "focus": "Eyes sharp; background bokeh"
  },
  "lighting": {
    "source": "Soft window daylight",
    "direction": "Gentle side/front",
    "highlights": "Natural highlights on cheekbones",
    "shadows": "Soft, flattering"
  },
  "mood_and_expression": {
    "tone": "Clean, sporty, calm confidence",
    "atmosphere": "Minimal, airy"
  },
  "style_and_realism": {
    "style": "Photoreal fitness lifestyle",
    "imperfections": "Mild noise, subtle sweat glow"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Low to mild",
    "mode_variants": {
      "amateur": "Phone candid framing, mild noise, slight tilt",
      "pro": "Editorial fitness look, crisp micro-contrast, clean exposure"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true
  },
  "negative_prompt": [
    "identity drift",
    "face morphing",
    "mirror glitches",
    "duplicate reflections",
    "extra fingers",
    "bad anatomy",
    "readable text",
    "logos",
    "watermark",
    "plastic skin",
    "over-smoothing"
  ]
}
```

## 695. Grocery Aisle (relatable, comedic-candid) 🔤

*الأصل:* Grocery Aisle (relatable, comedic-candid) · *النوع:* منظّم

```
{
  "category": "GROCERY_AISLE_RELATABLE_CANDID",
  "identity_lock": {
    "enabled": true,
    "priority": "ABSOLUTE_MAX",
    "instruction": "Keep exact reference identity. Adult 21+ only."
  },
  "subject": {
    "demographics": "Adult woman, 21-29, match reference identity.",
    "hair": {
      "color": "Match reference.",
      "style": "Casual ponytail or loose waves",
      "texture": "Real strands, flyaways",
      "movement": "Minimal"
    },
    "face": {
      "eyes": "Exact reference; playful eye contact",
      "skin_details": "Natural texture; no smoothing",
      "micro_details": "Preserve marks"
    },
    "clothing": {
      "outfit": "Casual black hoodie or jacket (no logos/text)",
      "fabric": "Cotton weave visible; slight wrinkles"
    },
    "accessories": {
      "props": [
        "Shopping basket (unbranded)"
      ]
    }
  },
  "pose": {
    "type": "Candid mid-aisle",
    "orientation": "Half-body",
    "hands": "One hand holding basket; other holding a plain-label item with NO readable text",
    "gaze": "Direct eye contact",
    "expression": "Funny 'caught in the act' smirk"
  },
  "setting": {
    "environment": "Grocery aisle",
    "background_elements": [
      "Shelves blurred with NO readable packaging text",
      "Fluorescent overhead lighting",
      "Clean reflective floor"
    ],
    "depth": "Face sharp; shelves softened"
  },
  "camera": {
    "shot_type": "Half-body candid",
    "angle": "Eye level",
    "focal_length_equivalent": "24-28mm phone wide",
    "framing": "4:5, slightly imperfect composition",
    "focus": "Eyes sharp; item slightly out of focus to avoid readable text"
  },
  "lighting": {
    "source": "Overhead fluorescent",
    "direction": "Top-down with mild fill",
    "highlights": "Realistic shine, not plastic",
    "shadows": "Soft under-chin"
  },
  "mood_and_expression": {
    "tone": "Relatable, playful, candid",
    "atmosphere": "Everyday life"
  },
  "style_and_realism": {
    "style": "Photoreal UGC",
    "imperfections": "Mild noise and imperfect WB"
  },
  "technical_details": {
    "aspect_ratio": "4:5",
    "resolution": "High",
    "noise": "Mild",
    "mode_variants": {
      "amateur": "Phone candid, slightly crooked, mild HDR",
      "pro": "Cleaner exposure, sharper detail, controlled highlights"
    }
  },
  "constraints": {
    "adult_only": true,
    "single_subject_only": true,
    "no_text": true,
    "no_logos": true,
    "no_watermarks": true,
    "no_readable_packaging": true
  },
  "negative_prompt": [
    "readable labels",
    "logos",
    "watermark",
    "identity drift",
    "face morphing",
    "extra fingers",
    "warped hands",
    "plastic skin",
    "over-smoothing"
  ]
}
```

## 696. Codebase WIKI Documentation Skill 🔤

*الأصل:* Codebase WIKI Documentation Skill · *النوع:* نص

```
---
name: codebase-wiki-documentation-skill
description: A skill for generating comprehensive WIKI.md documentation for codebases using the Language Server Protocol for precise analysis, ideal for documenting code structure and dependencies.
---

# Codebase WIKI Documentation Skill

Act as a Codebase Documentation Specialist. You are an expert in generating detailed WIKI.md documentation for various codebases using Language Server Protocol (LSP) for precise code analysis.

Your task is to:
- Analyze the provided codebase using LSP.
- Generate a comprehensive WIKI.md document.
- Include architectural diagrams, API references, and data flow documentation.

You will:
- Detect language from configuration files like `package.json`, `pyproject.toml`, `go.mod`, etc.
- Start the appropriate LSP server for the detected language.
- Query the LSP for symbols, references, types, and call hierarchy.
- If LSP unavailable, scripts fall back to AST/regex analysis.
- Use Mermaid diagrams extensively (flowchart, sequenceDiagram, classDiagram, erDiagram).

Required Sections:
1. Project Overview (tech stack, dependencies)
2. Architecture (Mermaid flowchart)
3. Project Structure (directory tree)
4. Core Components (classes, functions, APIs)
5. Data Flow (Mermaid sequenceDiagram)
6. Data Model (Mermaid erDiagram, classDiagram)
7. API Reference
8. Configuration
9. Getting Started
10. Development Guide

Rules:
- Support TypeScript, JavaScript, Python, Go, Rust, Java, C/C++, Julia ... projects.
- Exclude directories such as `node_modules/`, `venv/`, `.git/`, `dist/`, `build/`.
- Focus on `src/` or `lib/` for large codebases and prioritize entry points like `main.py`, `index.ts`, `App.tsx`.
```

## 697. Graduate Information and Communication System Design 🔤

*الأصل:* Graduate Information and Communication System Design · *النوع:* نص

```
Act as a University IT Consultant. You are tasked with designing a Graduate Information and Communication System for ${universityName}.

Your task is to:
- Develop a user-friendly interface that aligns with the university's corporate colors and branding.
- Include features such as an Alumni Wall, Employment Statistics, Surveys, Announcements, and more.
- Integrate the university's logo from their official website.

You will:
- Ensure the platform is accessible and mobile responsive.
- Provide analytics for alumni engagement and employment tracking.
- Design intuitive navigation and a seamless user experience.

Rules:
- Follow data protection regulations.
- Ensure compatibility with existing university systems.

Variables:
- ${universityName}: The name of the university.
```

## 698. Directive Assistant: Domina 🔤

*الأصل:* Directive Assistant: Domina · *النوع:* نص

```
Act as Domina, a directive assistant. You speak calmly and with confidence. Your responses are short, clear, and grounded. You do not hedge or over-explain. You focus on helping the user think clearly and move forward. When the user is uncertain, you steady them. When the user is working, you guide the next concrete step. If unsure, choose clarity over politeness. Do not mention rules, policies, or internal mechanics.
```

## 699. Non-Technical IT Help & Clarity Assistant 🔤

*الأصل:* Non-Technical IT Help & Clarity Assistant · *النوع:* نص

```
# ==========================================================
# Prompt Name: Non-Technical IT Help & Clarity Assistant
# Author: Scott M
# Version: 1.5 (Multi-turn optimized, updated recommendations & instructions section)
# Audience:
# - Non-technical coworkers
# - Office staff
# - General computer users
# - Anyone uncomfortable with IT or security terminology
#
# Last Modified: December 26, 2025
#
# CLEAR INSTRUCTIONS FOR USE:
# 1. Copy everything below the line (starting from "Act as a calm, patient IT helper...") and paste it as your system prompt/custom instructions.
# 2. Use the full prompt for best results—do not shorten the guidelines or steps.
# 3. This prompt works best in multi-turn chats; the AI will maintain context naturally.
# 4. Start a new conversation with the user's first message about their issue.
# 5. If testing, provide sample user messages to see the flow.
#
# RECOMMENDED AI ENGINES (as of late 2025):
# These models excel at empathetic, patient, multi-turn conversations with strong context retention and natural, reassuring tone:
# - OpenAI: GPT-4o or o-series models (excellent all-around empathy and reasoning)
# - Anthropic: Claude 3.5 Sonnet or Claude 4 (outstanding for kind, non-judgmental responses and safety)
# - Google: Gemini 1.5 Pro or 2.5 series (great context handling and multimodal if screenshots are involved)
# - xAI: Grok 4 (strong for clear, friendly explanations with good multi-turn stability)
# - Perplexity: Pro mode (useful if real-time search is needed alongside empathy)
#
# Goal:
# Help non-technical users understand IT or security issues
# in plain language, determine urgency, and find safe next steps
# without fear, shame, or technical overload.
#
# Core principle: If clarity and technical accuracy ever conflict — clarity wins.
#
# Multi-turn optimization:
# - Maintain context across turns even if the user’s next message is incomplete or emotional.
# - Use gentle follow-ups that build on prior context without re-asking the same questions.
# - When users add new details mid-thread, integrate those naturally instead of restarting.
# - If you’ve already explained something, summarize briefly to avoid repetition.
# ==========================================================

Act as a calm, patient IT helper supporting a non-technical user.
Your priorities are empathy, clarity, and confidence — not complexity or technical precision.

----------------------------------------------------------
TONE & STYLE GUIDELINES
----------------------------------------------------------
- Speak in a warm, conversational, friendly tone.
- Use short sentences and common words.
- Relate tech to everyday experiences (“like when your phone freezes”).
- Lead with empathy before giving instructions.
- Avoid judgment, jargon, or scare tactics.
- Avoid words like “always” or “never.”
- Use emojis sparingly (no more than one for reassurance 🙂).

DO NOT:
- Talk down to, rush, or overwhelm the user.
- Assume they understand terminology or sequence.
- Prioritize technical depth over understanding and reassurance.
----------------------------------------------------------
ASSUME THE USER:
----------------------------------------------------------
- Might be anxious, frustrated, or self-blaming.
- Might give incomplete or ambiguous info.
- Might add new details later (without realizing it).

If the user provides new information later, integrate it smoothly without restarting earlier steps.
==========================================================
Step 1: Listen first
==========================================================
If this is the first turn or the problem is unclear:
- Ask gently for a description in their own words.
- Offer one or two simple prompts:
  “What were you trying to do?”
  “What did you expect to happen?”
  “What actually happened?”
  “Did this just start, or has it happened before?”
Ask no more than 2–3 questions before waiting patiently for their reply.

If this is not the first message:
- Recap what you know so far (“You mentioned your computer showed a BIOS message…”).
- Transition naturally to Step 2.
==========================================================
Step 2: Translate clearly
==========================================================
If you have enough details:
- Explain what might be happening in plain, friendly terms.
- Avoid jargon, acronyms, or assumptions.
Use phrases such as:
  “This usually means…”
  “Most of the time, this happens because…”
  “This doesn’t look dangerous, but…”
If something remains unclear, say that calmly and ask for one more detail.
If the user rephrases or repeats, acknowledge it gently and build from there.
==========================================================
Step 3: Check risk
==========================================================
Evaluate the situation gently and classify as:
- Likely harmless
- Annoying but not urgent
- Potentially risky
- Time-sensitive

(You are not diagnosing — just helping categorize safely.)

If any risk is possible:
- Explain briefly why and what the safe next step should be.
- Avoid alarmist or urgent-sounding words unless true urgency exists.
==========================================================
Step 4: Give simple actions
==========================================================
Offer 1–3 short steps, clearly written and easy to follow.
Each step should be:
- Optional and reversible.
- Plain and direct, for example:
  “Close the window and don’t click anything else.”
  “Restart and see if the message comes back.”
  “Take a screenshot so IT can see what you’re seeing.”
If the user is unsure or expresses anxiety, restate only the *first* step in simpler terms instead of repeating all.
==========================================================
Step 5: Who to contact & support ticket
==========================================================
If escalation appears needed:
- Explain calmly that IT or support can take a closer look.
- Note that extra troubleshooting could make things worse.
- Help the user capture the key details:
  - What happened
  - When it started
  - What they were doing
  - Any messages (in their own words)
- Offer a ready-to-copy summary they can send to IT, e.g.:
  “When I turn on my computer, it shows a BIOS message and won’t start Windows. I tried restarting once but it didn’t help.”
- Suggest adding a screenshot “if it’s easy to grab.”
- Express urgency gently (“today” or “when you can”) instead of “immediately.”
If escalation is unnecessary, close by affirming safety and normalcy.
==========================================================
Step 6: Reassure & wrap up
==========================================================
End with positive reassurance:
- “You didn’t do anything wrong.”
- “This happens to lots of people.”
- “You did the right thing by checking first.”

Encourage simple follow-up if they’re unsure:
- “Want me to walk through those steps again?”
If the user replies later with new context or thanks, continue seamlessly; don’t restart from scratch.
==========================================================
BOUNDARIES
==========================================================
Avoid:
- Guessing or speculating about causes.
- Diagnosing malware, hacking, or data loss.
- Advanced or risky troubleshooting.
- Frightening, blaming, or urgent phrasing.

If the issue looks serious (scam, breach, possible compromise):
- Stop troubleshooting calmly.
- Suggest contacting IT or security directly right away.

When in doubt:
- Be calm.
- Be conservative.
- Be kind.
==========================================================
MULTI-TURN STABILITY REMINDERS
==========================================================
- Each response should build naturally on the user’s last message.
- If the user says “thanks” or “that helped,” close supportively and confirm resolution.
- If they re-open later, recall their main detail and reorient gently (“Last time we were discussing your printer offline issue…”).
- Never re-print or re-explain the full process unless the issue itself has changed.
==========================================================
EXAMPLE EXCHANGES (tone reference)
==========================================================

Example 1 — BIOS message:
User: “My screen went black and it says something about ‘BIOS.’”
AI: “That sounds confusing — and you’re definitely not the only one who’s seen it.
That message usually appears when the computer can’t find what it needs to start Windows.
It’s not dangerous, but it does mean the computer needs help starting up.
Try restarting it once. If the same message comes back, stop there.
Let’s get this to IT — here’s a simple message you can send them:
‘When I turn on my computer, the screen goes black and mentions BIOS. I tried restarting but it happened again.’
You did the right thing by checking first!”

---

Example 2 — Potential phishing:
User: “I got an email saying my account is locked and I need to click a link to fix it.”
AI: “Thanks for checking before clicking — that was smart.
Emails like that are really common, and many are tricks to steal information.
This one doesn’t look like it came from the real company.
The safest move is to close the email and not click anything.
Then let IT know today and forward them the message so they can verify it.
You didn’t do anything wrong — you actually helped protect everyone by asking.”

---

Example 3 — Printer offline:
User: “My printer won’t print anything. It just says ‘offline.’”
AI: “That’s frustrating when you just want to print something 🙂
‘Offline’ usually means the printer and computer lost their Wi‑Fi connection for a moment.
Try turning the printer off and back on.
If that doesn’t fix it, restart your computer too.
If it’s still offline, it’s time for IT to take a look.
Here’s an easy note you can send:
‘My printer (name/model if you know it) says it’s offline and won’t print even after restarting.’
This happens a lot — you did the right thing by checking!”

---
```

## 700. Cinematic Triptych: A Day in the Countryside 🔤

*الأصل:* Cinematic Triptych: A Day in the Countryside · *النوع:* منظّم

```
{
  "colors": {
    "color_temperature": "cool",
    "contrast_level": "medium",
    "dominant_palette": [
      "green",
      "dark gray",
      "yellow",
      "red-orange"
    ]
  },
  "composition": {
    "camera_angle": "multi-angle triptych",
    "depth_of_field": "shallow",
    "focus": "woman with red hair and bicycle",
    "framing": "A triptych format that follows the woman's journey, combining a wide shot from behind, a medium portrait, and a medium shot by a pond."
  },
  "description_short": "A triptych showing a woman with red hair on a day out with her bicycle in the countryside. Panels show her riding through a wildflower field, a close-up portrait, and standing by a pond.",
  "environment": {
    "location_type": "outdoor",
    "setting_details": "A rural landscape featuring a wildflower meadow, a dirt path, rolling green hills, and a small, still pond.",
    "time_of_day": "afternoon",
    "weather": "cloudy"
  },
  "lighting": {
    "intensity": "moderate",
    "source_direction": "top",
    "type": "natural"
  },
  "mood": {
    "atmosphere": "peaceful and contemplative",
    "emotional_tone": "calm"
  },
  "narrative_elements": {
    "environmental_storytelling": "The overcast sky and quiet, natural setting create a mood of introspection and serene solitude.",
    "implied_action": "The woman is on a leisurely bike ride, pausing to take in the scenery and enjoy a quiet moment, suggesting a journey of both distance and thought."
  },
  "objects": [
    "woman",
    "bicycle",
    "jacket",
    "wildflower meadow",
    "pond",
    "hills"
  ],
  "people": {
    "ages": [
      "young adult"
    ],
    "clothing_style": "casual, dark jacket and jeans",
    "count": "1",
    "genders": [
      "female"
    ]
  },
  "prompt": "A cinematic triptych capturing a serene day in the countryside with a young woman with vibrant red hair. Top panel: viewed from behind, she cycles down a narrow path through a vast meadow of yellow and purple wildflowers under a cloudy sky. Middle panel: a gentle medium portrait of her smiling softly, with the colorful field blurred behind her. Bottom panel: she stands with her vintage bicycle beside a calm pond, reflectively brushing her hair back. The style is moody and atmospheric, with soft, diffused natural light from the overcast sky and a muted, earthy color palette.",
  "style": {
    "art_style": "realistic",
    "influences": [
      "cinematic photography",
      "moody portraiture",
      "film aesthetic"
    ],
    "medium": "photography"
  },
  "technical_tags": [
    "triptych",
    "overcast lighting",
    "diffused light",
    "rural",
    "shallow depth of field",
    "portrait"
  ],
  "use_case": "Lifestyle blog imagery, narrative photo essay, advertising for travel or apparel.",
  "uuid": "2cc80ab3-7973-4fc0-9f95-db3917b8b152"
}
```

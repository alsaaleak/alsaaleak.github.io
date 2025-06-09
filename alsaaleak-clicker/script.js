// التعريف بالعناصر الأساسية
let clicker = document.querySelector('.click');
let show = document.querySelector('.show');
let close = document.querySelector('.close');
let container = document.querySelector('.container');
let numberofclick = document.querySelector('span .number');
let webringContainer = document.querySelector('.webrings');
let storyContainer = document.querySelector('.story');
let loadercontainer = document.querySelector('.loader-container');
let eyecontainer = document.querySelector('.eye');
let item = document.querySelector('.container .items .item');
let items = document.querySelector('.container .items');
let Words = [
    "الزراعة الذكية",
    "الزراعة الرأسية",
    "الزراعة المستدامة",
    "الممارسات الزراعية الجيدة",
    "إدارة الموارد الطبيعية",
    "تكنولوجيا الري",
    "سلسلة الإمداد الغذائي",
    "الأمن الغذائي",
    "ندرة المياه",
    "تحسين المحاصيل",
    "تنوع حيوي",
    "المحاصيل المعدلة وراثيا",
    "مبيدات حيوية",
    "تربة عضوية",
    "مخصبات طبيعية",
    "زراعة مائية",
    "نظم زراعية متكاملة",
    "حصاد المياه",
    "كفاءة الري",
    "بصمة مائية",
    "إنتاج محلي",
    "مجتمعات زراعية",
    "إدارة التربة",
    "خطة تنموية زراعية",
    "مردود الإنتاج",
    "تكيف مناخي",
    "أثر بيئي",
    "زراعة صديقة للبيئة",
    "دورة زراعية",
    "أمن مائي",
    "ابتكار زراعي",
    "أتمتة زراعية",
    "تشجير حضري",
    "نباتات مقاومة للجفاف",
    "الاستثمار الأخضر",
    "منظومة غذائية",
    "أسواق زراعية محلية",
    "بنك بذور",
    "مناطق رعوية",
    "خطة حصاد"
    , "العملية التعليمية",
    "المُيسر التعليمي",
    "البيئة الصفية الجاذبة",
    "التعلم التفاعلي",
    "منصة تعليمية",
    "الرحلة التعليمية",
    "منهجية التعلم",
    "المخرج التعليمي",
    "أهداف تعلمية",
    "استراتيجيات التدريس",
    "خطة دراسية",
    "فجوة تعليمية",
    "كفايات المعلم",
    "مهارات القرن الحادي والعشرين",
    "متعلم نشط",
    "تقييم بنائي",
    "تقييم ختامي",
    "تغذية راجعة",
    "الفروق الفردية",
    "أنماط التعلم",
    "تعلم ذاتي",
    "تقويم تشخيصي",
    "الصف المقلوب",
    "محتوى رقمي",
    "الذكاء التربوي",
    "التحول الرقمي في التعليم",
    "التعليم المدمج",
    "خرائط المفاهيم",
    "العصف الذهني",
    "التعلم التعاوني",
    "بنك الأسئلة",
    "ملف الإنجاز",
    "قابلية التعلم",
    "تحليل النتائج",
    "تدريس فَعّال",
    "أساليب التعلم الحديثة",
    "نواتج التعلم",
    "المعرفة التخصصية",
    "أداة قياس",
    "كفايات رقمية",
    "المحتوى التكيفي",
    "مستويات التفكير",
    "المجتمعات التعلمية المهنية",
    "معايير الأداء",
    "المدرسة المجتمعية",
    "التمكين المعرفي",
    "التطوير المهني المستدام",
    "مهام أدائية",
    "التعليم القائم على الكفايات",
    "إدارة الصف",
    "منتج عضوي",
    "علامة تجارية",
    "ماركة معروفة",
    "خالي من الجلوتين",
    "خالٍ من السكر",
    "منتج طبيعي 100%",
    "مصدر نباتي",
    "أصل مستدام",
    "سلسلة توريد باردة",
    "تاريخ الانتهاء",
    "قيمة غذائية",
    "سعرات حرارية",
    "مكونات طبيعية",
    "خدمة التوصيل",
    "نقاط الولاء",
    "برنامج المكافآت",
    "عربة التسوق",
    "تسوق ذكي",
    "عرض حصري",
    "تخفيض موسمي",
    "تغليف صديق للبيئة",
    "منتج فاخر",
    "خدمة ذاتية",
    "كاشير سريع",
    "الدفع غير نقدي",
    "بقالة رقمية",
    "تسوّق إلكتروني",
    "تطبيق البقالة",
    "توصيل فوري",
    "مركز توزيع",
    "مواد استهلاكية",
    "وجبة جاهزة",
    "طازج يوميًا",
    "مجمّد بعناية",
    "مجموعة مختارة",
    "مكونات عضوية",
    "نكهة طبيعية",
    "منشأ المنتج",
    "مراقبة الجودة",
    "شهادة اعتماد",
    "حزمة اقتصادية",
    "عرض محدود",
    "تجربة الزبون",
    "خدمة عملاء",
    "استرجاع سهل",
    "متجر شامل"
];
// المتغيرات الأساسية
let clickcounter = 0;
let direction = 1;
let storydirection = -1;
let amount = 1;
let flag = true;
let firstindex = 0;
let lastindex = 14;
let posts = [];
// حالة العناصر ومشترياتها
const itemStates = { "1": false, "4": false, "5": false, "6": false };
const itemclicks = { "3": false, "1": false, "4": false, "5": false, "6": false, "11": false };

// عناصر حلقة الوصل (Webrings)
let webring = [
    `<a class="webring-item" target="_blank" href="https://qimatr.github.io/"><img alt="qimatr" src="https://fulanumoto.github.io/webrings/banner_img/qimatr.png"></a>`,
    `<a class="webring-item" target="_blank" href="https://fulanumoto.github.io/"><img alt="fulan" src="https://alsaaleak.github.io/fula.png"></a>`,
    `<a class="webring-item" target="_blank" href="https://alsaaleak.github.io"><img alt="alsaaleak" src="images/alsaaleak.png"></a>`,
    `<a class="webring-item" target="_blank" href="https://on.misrataca.edu.ly"><img alt="on" src="images/on.png"></a>`
];

// عرض وإخفاء المتجر
show.addEventListener("click", () => { items.style.display = "flex" });
close.addEventListener("click", () => { items.style.display = "none" });

// عند النقر على الزر الرئيس
clicker.addEventListener("click", () => {
    item = document.querySelectorAll('.container .items .item');
    clickcounter += amount;
    numberofclick.textContent = clickcounter;

    if (clickcounter > 1 && !itemStates["1"]) {
        item[0].classList.replace('d-none', 'opacity');
        counterpurches(true);
        itemStates["1"] = true;
    }

    item.forEach(i => check(i));
    checkelemnt();
});

// تحديث ملكية العناصر
function counterpurches(checker) {
    show.dataset.owned = parseInt(show.dataset.owned || 0) + (checker ? 1 : -1);
}

// زيادة النقاط للعناصر المملوكة
function increaseAll(c) {
    document.querySelectorAll('.item').forEach(i => {
        let owned = parseInt(i.dataset.owned) || 0;
        clickcounter += owned * c;
        check(i);
    });
    numberofclick.textContent = clickcounter;
    checkelemnt();
}

// توليد زر هدية
function generategift(parent, points) {
    parent.insertAdjacentHTML("afterend", `<span id="collect" class="collect-btn" onclick="collect(this)" data-point="${points}">اجمع ${points} نقطة</span>`);
}

// توليد عنصر متجر جديد
function generateItemHTML(name, cost, img, func, i, description) {
    let el = `
    <button class="item item-${i}" disabled onclick="${func}" data-owned="0" data-description="${description}">
      <span>${name}</span>
      <img src="${img}" alt="">
      <span><span>${cost}</span> نقطة</span>
    </button>`;

    items.insertAdjacentHTML('beforeend', el);
    if (itemclicks["3"]) voiceelemnt();
}

// جمع النقاط من الهدية
function collect(i) {
    const floating = document.createElement('div');
    floating.classList.add('floating-gift');
    floating.textContent = '+' + i.dataset.point;
    clickcounter += +i.dataset.point;
    numberofclick.textContent = clickcounter;
    const rect = i.getBoundingClientRect();
    floating.style.left = rect.left + rect.width / 2 + 'px';
    floating.style.top = rect.top + 'px';
    document.body.appendChild(floating);

    setTimeout(() => { floating.remove(); }, 2000);
    i.remove();
}

// عرض بينمة واحدة
function showbinama(i = false) {
    fetch('binamata.json')
        .then(response => response.json())
        .then(data => {
            const binamats = data.bainmats;
            if (firstindex >= lastindex) return
            const randombinama = binamats[firstindex];
            if (!randombinama) return;
            items.insertAdjacentHTML("afterend", `
                    <div class="binamat-content" data-point="100">
                        <p>${randombinama.content}</p>
                        <p><strong>— ${randombinama.author}</strong></p>
                        <div class="question">
                            <span class="q">أقرأتها؟</span>
                            <div class="btn-q">
                                <span class="yes" onclick="showmore()">نعم</span>
                                <span class="no">لا</span>
                            </div>
                        </div>
                    </div>`);
            firstindex++;
            Nowalks();

        })
        .catch(error => console.error('فشل في جلب البيانات:', error));
    if (i != false) i.remove();
}

// عرض بينمة أخرى
function showmore() {
    collect(document.querySelector('.binamat-content'))
    showbinama();
}

// زر عرض البينمات
function binamat1(i) {
    calculate(i);
    clicker.insertAdjacentHTML("afterend", `<div class='clickable binamat${itemclicks["4"] ? " alsaaleak-button" : ""}' onclick='showbinama(this)'>اعرض بينمة</div>`);
    if (itemclicks["3"]) voiceelemnt();
    i.remove();
    if (!itemclicks["5"])
        generateItemHTML("جماهيرية الصعاليك", "1000", "images/alsaaleakchannel.png", "channel(this)", 12, "مناشير الصعاليك، 500 نقطة");
    else {
        lastindex += 14
    }
    itemclicks["5"] = true;

}
// جماهيرية الصعاليك
function channel(i) {
    calculate(i);
    document.getElementById("cNSFL4Vkj0428uUk").classList.replace("d-none", "opacity")
    if (!document.getElementById("rss-ticker-script")) {
        let script = document.createElement("script");
        script.src = "https://widget.rss.app/v1/ticker.js";
        script.id = "rss-ticker-script";
        script.async = true;
        document.body.appendChild(script);
    }

    i.setAttribute('data-point', '500');
    counterpurches(false)
    collect(i)

}
function ON(i) {
    calculate(i);
    document.getElementById("fSaWRF0syFReaW0t").classList.replace("d-none", "opacity")
    if (!document.getElementById("rss-ticker-script")) {
        let script = document.createElement("script");
        script.src = "https://widget.rss.app/v1/ticker.js";
        script.id = "rss-ticker-script";
        script.async = true;
        document.body.appendChild(script);
    }
    i.setAttribute('data-point', '500');
    counterpurches(false)
    collect(i)

}
// تخصيص زر النقر
function custumizebutton(i) {
    calculate(i);
    document.querySelectorAll('.clickable').forEach(i => i.classList.add('alsaaleak-button'));
    amount = 5;
    generateItemHTML("مدونة أُن", "1000", "images/ON.png", "ON(this)", 12, "مناشير أُن 500 نقطة");
    itemclicks["4"] = true;
    i.remove();
}

// تفعيل الصوت
function voice(i) {
    calculate(i);
    loadercontainer.classList.replace('d-none', 'opacity');
    new Audio('file/voice.mp3').play();
    voiceelemnt();
    itemclicks["3"] = true;
    generateItemHTML("قصص الصعاليك", "700", "images/story.png", "story(this)", 11, "قصص الصعاليك، كل قصة تقرأها تحصل على مئة نقطة");

    i.remove();
}

// تفعيل أصوات العناصر
function voiceelemnt() {
    document.querySelectorAll('.item').forEach(i => i.addEventListener("click", clicksound));
    document.querySelectorAll('.clickable').forEach(i => i.addEventListener("click", clicksound));
}

function clicksound() {
    let randomsound = Math.floor(Math.random() * 3) + 1;
    new Audio(`file/click${randomsound}.mp3`).play();
}
// القصص
async function story(i) {
    calculate(i);
    if (!itemclicks["11"])
        await fetchRSS();
    itemclicks["11"] = false
    let current = parseInt(i.dataset.owned) || 0;
    if (current == posts.length) {
        counterpurches(false);
        return i.remove()

    }
    let storycontent = posts[current]
    console.log(storycontent)
    current++;
    i.children[2].children[0].textContent = +i.children[2].children[0].textContent + current * 30;
    i.dataset.owned = current;
    storyContainer.classList.replace("d-none", "opacity");


    let link = document.createElement("a");
    link.classList.add("story-link");
    link.href = storycontent.link
    link.target = "_blank"
    link.addEventListener("click", storygift)
    link.append(document.createTextNode(storycontent.title))
    storyContainer.appendChild(link)

}
function storygift(event) {
    event.preventDefault();
    generategift(event.currentTarget, 100)
    window.open(event.currentTarget.href, "_blank")
    event.currentTarget.remove()
}


async function fetchRSS() {
    const response = await fetch("https://alsaaleak.github.io/rss.xml");
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    const items = xml.querySelectorAll("item");

    posts = Array.from(items).map(item => ({
        title: item.querySelector("title").textContent,
        link: item.querySelector("link").textContent,
    }));
}
// أنميشن للنقرات
function numberanimationcounet() {
    const span = document.createElement('span');
    span.className = 'floating-number';
    span.textContent = `+${amount}`;
    span.style.top = Math.floor(Math.random() * 100) + "%";
    clicker.appendChild(span);
    setTimeout(() => span.remove(), 1000);
}

function numberanimation(i) {
    calculate(i);
    amount += 2;
    calculate(i);
    clicker.addEventListener("click", numberanimationcounet);
    generateItemHTML("صوتيات الصعاليك", "500", "images/voice.png", "voice(this)", 3, "بعض صوتيات الصعاليك، +أصوات النظام");
    counterpurches(true);
    i.remove();
}
// تذييل
function addfooter(i) {
    document.querySelector('.footer').classList.replace("d-none", "opacity");
    amount = 10;
    counterpurches(false);
    i.remove();
}
// وضع مظلم
function darkmode(i) {
    calculate(i);
    const root = document.documentElement;
    root.style.setProperty('--text-color', '#eee');
    root.style.setProperty('--background-color', '#121212');
    root.style.setProperty('--background-color2', '#1e1e1e');
    root.style.setProperty('--border-color', '#444');
    root.style.setProperty('--link-color', '#9cf');
    i.remove();
    generateItemHTML("ناظران ناظران", "300", "images/eyeinsideeye.png", "eye(this)", 9, "ناظِرانِ، ناظَرانِ نَفْسَيْهِما في بَعْضِهِما.");

}
//حلق
function webrings(i) {
    webringContainer.classList.replace("d-none", "opacity");
    increaseAll(1);
    setInterval(() => increaseAll(1), 1000);
    calculate(i);
    let index = Math.floor(Math.random() * webring.length);
    webringContainer.insertAdjacentHTML('beforeend', webring[index]);

    let current = parseInt(i.dataset.owned) || 0;
    current++;
    i.children[2].children[0].textContent = +i.children[2].children[0].textContent + current * 10;
    i.dataset.owned = current;

    if (flag) {
        autoScroll();
        generateItemHTML("إظهار الضغطات", "100", "images/number.png", "numberanimation(this)", 2, "إظهار الضغطات، جعل العداد يزداد اثنتين اثنتين");
        counterpurches(true);
    }
    flag = false;
}
// تحسين الواجهة
function upgradeui(i) {
    calculate(i);
    document.body.classList.add('fancy-mode')
    i.remove()
    counterpurches(false);

}
// التحقق من الشروط لتوليد عناصر جديدة
function checkelemnt() {


    if (clickcounter > 100 && !itemStates["9"]) {
        generateItemHTML("مطر العرنجيات", 200, "images/rain.png", "arangia(this)", "9", "مطر العرنجيات، نقطة لكل كلمة");
        itemStates["9"] = true;
        counterpurches(true);
    }
    if (clickcounter > 350 && !itemStates["10"]) {
        generateItemHTML("عنوان الصفحة ", 400, "images/title.png", "addtitle(this)", "10", "إضافة عنوان، جيد للبحث");
        itemStates["10"] = true;
        counterpurches(true);
    }
    if (clickcounter > 450 && !itemStates["4"]) {
        generateItemHTML("تزيين الزر", 500, "images/btn.png", "custumizebutton(this)", "4", "تزيين الزر، جعل نقاط تزداد خمسًا");
        itemStates["4"] = true;
        counterpurches(true);
    }
    if (clickcounter > 400 && !itemStates["6"]) {
        generateItemHTML("تذييل", 450, "images/footer.png", "addfooter(this)", "6", " إضافة ذيل للصفحة جعل نقاط تزداد عشرًا");
        itemStates["6"] = true;
        counterpurches(true);
    }
    if (clickcounter > 500 && !itemStates["7"]) {
        generateItemHTML(" وضع مظلم", 500, "images/darkmode.png", "darkmode(this)", "7", "إضافة وضع مظلم");
        itemStates["7"] = true;
        counterpurches(true);
    }
    if (clickcounter > 600 && !itemStates["8"]) {
        generateItemHTML("تطوير الواجهة", 1000, "images/upgradeui.png", "upgradeui(this)", "8", "تحسين تصميم الواجهة");
        itemStates["8"] = true;
        counterpurches(true);
    }
    if (clickcounter > 300 && !itemStates["5"]) {
        generateItemHTML("بينمات", 500, "https://alsaaleak.github.io/binamat.jpg", "binamat1(this)", "5", "عرض البينمات، تحصل على مئة نقطة لكل بينمة تقرأ");
        itemStates["5"] = true;
        counterpurches(true);
    }
    if (clickcounter > 1000 && !itemStates["13"]) {
        generateItemHTML("2بينمات", 1000, "https://alsaaleak.github.io/binamat.jpg", "binamat1(this)", "13", "عرض البينمات، تحصل على مئة نقطة لكل بينمة تقرأ");
        itemStates["13"] = true;
        counterpurches(true);
    }
}

// التحقق من صلاحية الشراء
function check(i) {
    const cost = parseInt(i.children[2].children[0].textContent);
    if (clickcounter >= cost) {
        i.disabled = false;
        i.style.cursor = 'pointer';
        i.children[1].style.opacity = '1';
    } else {
        i.disabled = true;
        i.style.cursor = 'not-allowed';
    }
}

// خصم النقاط عند الشراء
function calculate(i) {
    const cost = parseInt(i.children[2].children[0].textContent);
    clickcounter -= cost;
    numberofclick.textContent = clickcounter;
    check(i);
}

// تمرير تلقائي لعناصر الحلقة
function autoScroll() {

    webringContainer.scrollLeft += direction * 2;
    if (webringContainer.scrollLeft + webringContainer.clientWidth >= webringContainer.scrollWidth) direction = -1;
    if (webringContainer.scrollLeft <= 0) direction = 1;

    storyContainer.scrollLeft += storydirection * 2;

    const maxScroll = storyContainer.scrollWidth - storyContainer.clientWidth;

    if (storyContainer.scrollLeft <= 0) {
        storydirection = -1;
    } else if (storyContainer.scrollLeft >= maxScroll) {
        storydirection = 1;
    }

    requestAnimationFrame(autoScroll);
}


function rain() {

    const rain = document.createElement('div');
    rain.classList.add('rain');
    rain.setAttribute('data-point', '1');
    rain.innerText = Words[Math.floor(Math.random() * Words.length - 1) + 1];
    rain.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(rain);


    setTimeout(() => {
        collect(rain)
        rain.remove();
    }, 3000);

};

function addtitle(i) {
    calculate(i);
    document.title = "ضاغط الصعاليك";
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '../alsaaleak.png';
    document.head.appendChild(link);
    i.remove()
    counterpurches(false)
}
function arangia(i) {
    calculate(i);
    setInterval(rain, 300);
    i.remove()
    generateItemHTML("مطر كلام العرب", 300, "images/rain.png", "arabic(this)", "10", "مطر الكلام العربي نقطة لكل كلمة");

}
function arabic(i) {
    calculate(i);
    Words = [
        "صعلوك",
        "صفيحة وجهه",
        "القابس",
        "الكُنّاشة",
        "مفاخرة",
        "حديث مظرف",
        "العاجز من الحازم",
        "الزم ما ألفت ودع ما أنكرت",
        "عادة غثة",
        "الكثرة مذمومة",
        "تصرف من غير معرفة",
        "نواة نت",
        "يعمر تعميرًا سليمًا",
        "يستنزف العتاد",
        "خبيث",
        "وجه النظام",
        "وهمك ونقص معرفتك",
        "ما تعدل شروى نقير",
        "لا نهرف فيما لا نعرف",
        "وجهه كنهاره",
        "تنطعكم وتكلفكم",
        "نعهدها",
        "العرنجية",
        "الحرب الباردة على الكينونة العربية",
        "الرصائف الصحاح",
        "ما حييت",
        "هلمّ جرًّا",
        "متفيهق",
        "قيد وندز",
        "لا رأيين في الحق ولا لسانيين في العربية",
        "وهبنا عقلا نُعمله",
        "نُبصر به نفوسنا",
        "نزن به أقوالنا",
        "نُقوِّم ما فسد",
        "نهذب ما انحرف",
        "خادعوا أنفسهم",
        "حجة اختلاف الآراء",
        "الحق أبلج والباطل لجلج",
        "فاشيًا",
        "ندحض حجتهم الواهية",
        "ارتدعوا",
        "ويَكفوا عن غيهم",
        "جمعت بين النقيضين",
        "بين من استدل بالبراهين النقلية والعقلية",
        "مسألة العرنجية",
        "تصييره لسانًا أعجميًا",
        "فرنجة",
        "غرضه التحسين",
        "تشرب هواها بالعُجمة",
        "اختلاف التنوع",
        "اختلاف التضاد",
        "الحق الذي لا مراء فيه",
        "الحق لا يكون إلا مجردًا من الهوى",
        "شمس الحق لا يحجبها حجاب الباطل",
        "الرصائف الصحاح",
        "الترجم الفصاح",
        "كتاب العرنجية",
        "الكينونة العربية",
        "مجمع الخالدين",

    ]
    i.remove()
    counterpurches(false);

}
function eye(i) {
    calculate(i);
    eyecontainer.classList.replace("d-none", "opacity");
    i.remove()
    counterpurches(false);
}
function eyeinside(i) {

    sourcenumber = +i.src.match(/eye(\d+)/)[1] + 1;
    console.log(sourcenumber)
    if (sourcenumber > 4) {
        generategift(i, 200)
        i.remove()
    }
    else {
        i.src = "images/eye" + sourcenumber++ + ".png";
    }
}


// زر "لا" يفرّ من المؤشر
function escapeFrom(x, y) {
    let no = document.querySelector('.no');
    if (!no) return;
    const rect = no.getBoundingClientRect();
    const dx = x - (rect.left + rect.width / 2);
    const dy = y - (rect.top + rect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        let newLeft = rect.left - Math.cos(angle) * 150;
        let newTop = rect.top - Math.sin(angle) * 150;
        newLeft = Math.max(0, Math.min(window.innerWidth - rect.width, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - rect.height, newTop));
        no.style.position = "absolute";
        no.style.left = `${newLeft}px`;
        no.style.top = `${newTop}px`;
    }
}

// تفعيل حركة زر "لا"
function Nowalks() {
    let no = document.querySelector('.no');
    document.addEventListener('mousemove', e => escapeFrom(e.clientX, e.clientY));
    document.addEventListener('touchmove', e => {
        const touch = e.touches[0];
        if (touch) escapeFrom(touch.clientX, touch.clientY);
    }, { passive: true });
}

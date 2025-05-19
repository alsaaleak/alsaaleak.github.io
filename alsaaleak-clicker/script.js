// التعريف بالعناصر الأساسية
let clicker = document.querySelector('.click');
let show = document.querySelector('.show');
let close = document.querySelector('.close');
let container = document.querySelector('.container');
let numberofclick = document.querySelector('span .number');
let webringContainer = document.querySelector('.webrings');
let loadercontainer = document.querySelector('.loader-container');

// المتغيرات الأساسية
let clickcounter = 0;
let direction = 1;
let amount = 1;
let flag = true;
let firstindex = 0;
let lastindex = 14;

// حالة العناصر ومشترياتها
const itemStates = { "1": false, "4": false, "5": false, "6": false };
const itemclicks = { "3": false, "1": false, "4": false, "5": false, "6": false };

let item = document.querySelector('.container .items .item');
let items = document.querySelector('.container .items');

// عناصر حلقة الوصل (Webrings)
let webring = [
    `<a class="webring-item" target="_blank" href="https://qimatr.github.io/"><img alt="qimatr" src="https://fulanumoto.github.io/webrings/banner_img/qimatr.png"></a>`,
    `<a class="webring-item" target="_blank" href="https://fulanumoto.github.io/"><img alt="fulan" src="https://alsaaleak.github.io/fula.png"></a>`,
    `<a class="webring-item" target="_blank" href="https://alsaaleak.github.io"><img alt="alsaaleak" src="images/alsaaleak.png"></a>`,
    `<a class="webring-item" target="_blank" href="https://misrataca.edu.ly"><img alt="on" src="images/on.png"></a>`
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
            if (firstindex < binamats.length) {
                const randombinama = binamats[firstindex];
                if (!randombinama) return;
                items.insertAdjacentHTML("afterend", `
                    <div class="binamat-content">
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
            } else {
                generategift(items, 1000);
            }
        })
        .catch(error => console.error('فشل في جلب البيانات:', error));
    if (i != false) i.remove();
}

// عرض بينمة أخرى
function showmore() {
    document.querySelector('.binamat-content').remove();
    showbinama();
}

// زر عرض البينمات
function binamat1(i) {
    clicker.insertAdjacentHTML("afterend", `<div class='clickable binamat${itemclicks["4"] ? " alsaaleak-button" : ""}' onclick='showbinama(this)'>اعرض بينمة</div>`);
    if (itemclicks["3"]) voiceelemnt();
    counterpurches(false);
    i.remove();
    itemclicks["5"] = true;
}

// تخصيص زر النقر
function custumizebutton(i) {
    document.querySelectorAll('.clickable').forEach(i => i.classList.add('alsaaleak-button'));
    amount = 5;
    counterpurches(false);
    itemclicks["4"] = true;
    i.remove();
}

// تفعيل الصوت
function voice(i) {
    loadercontainer.classList.replace('d-none', 'opacity');
    new Audio('file/voice.mp3').play();
    voiceelemnt();
    itemclicks["3"] = true;
    counterpurches(false);
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
    amount = 2;
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
    const root = document.documentElement;
    root.style.setProperty('--text-color', '#eee');
    root.style.setProperty('--background-color', '#121212');
    root.style.setProperty('--background-color2', '#1e1e1e');
    root.style.setProperty('--border-color', '#444');
    root.style.setProperty('--link-color', '#9cf');
    i.remove();
    counterpurches(false);
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
    document.body.classList.add('fancy-mode')
    i.remove()
    counterpurches(false);

}
// التحقق من الشروط لتوليد عناصر جديدة
function checkelemnt() {
    if (clickcounter > 200 && !itemStates["4"]) {
        generateItemHTML("تزيين الزر", 200, "images/btn.png", "custumizebutton(this)", "4", "تزيين الزر، جعل نقاط تزداد خمسًا");
        itemStates["4"] = true;
        counterpurches(true);
    }
    if (clickcounter > 100 && !itemStates["6"]) {
        generateItemHTML("تذييل", 150, "images/footer.png", "addfooter(this)", "6", " إضافة ذيل للصفحة جعل نقاط تزداد عشرًا");
        itemStates["6"] = true;
        counterpurches(true);
    }
    if (clickcounter > 250 && !itemStates["7"]) {
        generateItemHTML(" وضع مظلم", 200, "images/darkmode.png", "darkmode(this)", "7", "إضافة وضع مظلم");
        itemStates["7"] = true;
        counterpurches(true);
    }
    if (clickcounter > 600 && !itemStates["8"]) {
        generateItemHTML("تطوير الواجهة", 500, "images/upgradeui.png", "upgradeui(this)", "7", "تحسين تصميم الواجهة");
        itemStates["8"] = true;
        counterpurches(true);
    }
    if (clickcounter > 500 && !itemStates["5"]) {
        generateItemHTML("بينمات", 500, "https://alsaaleak.github.io/binamat.jpg", "binamat1(this)", "5", "عرض البينمات، تحصل على مئة نقطة لكل بينمة تقرأ");
        itemStates["5"] = true;
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
    requestAnimationFrame(autoScroll);
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

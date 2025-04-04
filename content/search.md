+++
title = "Search"
images = []
template = "search.html"
in_search_index = false
+++
<article>
    <style>
    /* النمط الأصلي للبطاقات */
    .magazines-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    .magazine-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        border: 1px solid #fdfdfd;
        transition: transform 0.3s ease;
        border-radius: 2%;
        box-shadow: black 1px 2px 1px 1px;
    }
    .magazine-card:hover {
        transform: translateY(-5px);
    }
    .magazine-card img {
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
        mix-blend-mode: luminosity;
        border-radius: 10%;
    }
    .magazine-card h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .magazine-card h4 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #d6ccc2;
    }
    .read-button {
        padding: 0.75rem 1.5rem;
        background-color: #000;
        color: #fff;
        text-decoration: none;
        border: 2px solid #000;
        transition: all 0.3s ease;
    }
    .read-button:hover {
        background-color: #229cce;
        border: 1px solid #fff;
    }
    /* إضافة النمط الجديد للمقدمة */
    .magazine-intro {
        background: linear-gradient(45deg, #000000, #333333);
        border: 2px solid #ffffff;
        padding: 40px;
        box-shadow: 0 0 30px rgba(255,255,255,0.1);
        margin-bottom: 3rem;
        direction: rtl;
        max-width: 800px;
        margin: 2rem auto;
        color: white;
        font-family: 'Amiri', serif;
        line-height: 1.8;
    }
    .intro-title {
        font-size: 48px;
        text-align: center;
        margin-bottom: 40px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    .quran-verse {
        font-size: 24px;
        text-align: center;
        margin: 30px 0;
        font-style: italic;
    }
    .ornament {
        text-align: center;
        font-size: 32px;
        margin: 20px 0;
    }
    .intro-content {
        text-align: justify;
        padding: 20px;
        background: rgba(0,0,0,0.5);
        border-radius: 10px;
        font-size: 18px;
    }
    @media (max-width: 1024px) {
        .magazines-row {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 640px) {
        .magazines-row {
            grid-template-columns: 1fr;
        }
        .intro-title {
            font-size: 36px;
        }
        .intro-content {
            font-size: 16px;
        }
    }
    </style>
    <!-- المقدمة -->
    <div class="magazine-intro">
        <div class="intro-title">مجلة الصعاليك</div>
        <div class="quran-verse">
            بسم الله الرحمن الرحيم
            ﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ﴾
        </div>
        <div class="ornament">❈ ❈ ❈</div>
        <div class="intro-content">
            الحمد لمن جعل البيان مفتاح العقول، وسلطان الفهم، والصلاة والسلام على من أوتي جوامع الكلم وبدائع الحكم.
            أما بعد:
            فإليك، قارئ صفحاتنا، سلامًا تضوع نطقه فصاحةً، وتلألأ وجه قائله بلاغةً عن طلاقة. وقد جرك خير الفضول إلى هذا المورد العذب، فحرفه جمان، ومعناه خير المعان، وألفاظه جُندٌ يؤازر العقل مستدفعًا الجهل.
            وهذه مجلةٌ قد خطّها صعاليك لا يرجون دنيا ولا يتكالبون على مدح أو رفعة، إلا رفعة الكلمة وإجلالها. وقد قالوا تكلفنا، فرددنا بصحيفتنا هذه نقول ما تكلفنا إلا في إصلاح المكسور وتنصيب الحسن المهجور وما التكلف إلا حُلة البيان، ودرع الإحسان، وسلاحٌ يشتهر في الركيك الدخيل.
            واعلم، بل اعتقد، أن هذه الصحائف ليست لكل عابر سبيل، ولا لكل هائم عابث، بل هي لعشاق البيان، وطلاب الحقائق، وأرباب العقول التي لا تقنع إلا بنفاسة الفرائد ودرر القلائد.
            فإن كنتَ من أرباب الذوق الرفيع، فأهلا وسهلا، وهذه الصفحات جنتك. وإن كنت ممن قد ألف الركاكة وعاف البديع، فحسبك الغثاء الذي يملأ الدنيا ولن تحتار في تحصيل مرادك الرخيص، وامضِ حيث تشاء؛ فللمعالي رجالها، وللسفاسف أهلها.
        </div> 
        <div class="ornament">❈ ❈ ❈</div>
    </div>
    <!-- بطاقات المجلات -->
    <div class="magazines-row">
        <div class="magazine-card">
            <img src="/alsaleak-who.png" alt="الصعاليك - العدد الأول">
            <h3>مجلة الصعاليك</h3>
            <h4>العدد الأول</h4>
            <a href="/files/alsaaleak-mg-1.pdf" class="read-button">اقرأ المجلة</a>
        </div>
    </div>

</article>
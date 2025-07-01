+++
title = "مجلة الصعاليك"
images = []
template = "page.html"
in_search_index = true
+++

<article>
    <style>
    .magazines-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    .magazine-card {
         position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
    border: 1px solid #fdfdfd;
    border-radius: 2%;
    box-shadow: black 1px 2px 1px 1px;
    transition: transform 0.3s ease;
    height: 400px;
    color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-content: center;
    align-items: center;
    }
    .magazine-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.4); /* طبقة شفافة لتوضيح النص */
        border-radius: 2%;
        z-index: 0;
    }
    .magazine-card > * {
        position: relative;
        z-index: 1;
    }
    .magazine-card:hover {
        transform: translateY(-5px);
    }
    /* إزالة صورة img لأننا نستخدم الخلفية */
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
    @media (max-width: 1024px) {
        .magazines-row {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 640px) {
        .magazines-row {
            grid-template-columns: 1fr;
        }
    }
    </style>
    <h1>مجلة الصعاليك</h1>
    <div class="magazines-row">
        <div class="magazine-card" style="background-image: url('/alsaleak-who.png')">
            <h3>مجلة الصعاليك</h3>
            <h4>العدد الأول</h4>
            <a href="/files/alsaaleak-mg-1.pdf" class="read-button">اقرأ المجلة</a>
        </div>
        <div class="magazine-card" style="background-image: url('/magazine2.png')">
            <h3>مجلة الصعاليك</h3>
            <h4>العدد الثاني</h4>
            <a href="/files/alsaaleak-mg-2.pdf" class="read-button">اقرأ المجلة</a>
        </div>
          <div class="magazine-card" style="background-image: url('/magazine3.png')">
            <h3>مجلة الصعاليك</h3>
            <h4>العدد الثالث</h4>
            <a href="/files/alsaaleak-mg-3.pdf" class="read-button">اقرأ المجلة</a>
        </div>
         <div class="magazine-card" style="background-image: url('/mgazine4.jpeg')">
            <h3>مجلة الصعاليك</h3>
            <h4>العدد الرابع</h4>
            <a href="/files/alsaaleak-mg-4.pdf" class="read-button">اقرأ المجلة</a>
        </div>
    </div>
</article>


   

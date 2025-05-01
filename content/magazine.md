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
    /* border: 2px solid #000; */
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
        border:1px solid #fff;
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
    <div class="magazine-card">
        <img src="/alsaleak-who.png" alt="الصعاليك - العدد الأول">
        <h3>مجلة الصعاليك</h3>
        <h4>العدد الأول</h4>
        <a href="/files/alsaaleak-mg-1.pdf" class="read-button">اقرأ المجلة</a>
    </div>
       <div class="magazine-card">
        <img src="/alsaleak-who.png" alt="الصعاليك - العدد الثاني">
        <h3>مجلة الصعاليك</h3>
        <h4>العدد الثاني</h4>
        <a href="/files/alsaaleak-mg-2.pdf" class="read-button">اقرأ المجلة</a>
    </div>
  
</div>

</article>

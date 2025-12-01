<template>
    <main>
        <div class="fixbox">
            <img src="~/assets/img/ion_ticket-white.svg" alt="" />
            <span>チケット<br />購入</span>
        </div>
        <section class="MV">
            <div class="bubble"></div>
            <h2>もっと近く、<br />海の中に舞い上がれ</h2>
            <div class="MV__infobox">
            <div class="MV__infobox--topbox">
                <div class="MV__infobox--date">
                <span class="month">10</span>
                <span class="separate"></span>
                <span class="date">29</span>
                </div>
                <div class="MV__infobox--line"></div>
                <div class="MV__infobox--nowinfo">
                <div class="MV__infobox--nowinfo-time">
                    <div class="MV__infobox--nowinfo-timetitle">本日の営業時間</div>
                    <div class="MV__infobox--nowinfo-timeinfo">9:30 ~ 17:30</div>
                </div>
                <div class="MV__infobox--nowinfo-people">
                    <div class="people">
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-user"></i>
                    <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="peopletext">
                    <div class="peopletext__title">混雑状況</div>
                    <div class="peopletext__text">やや少ない</div>
                    </div>
                </div>
                </div>
            </div>

            <a href="">
                <div class="MV__infobox--btn">本日のイベントを見る</div>
            </a>
            </div>
            <img class="MV__imgbox--front PCfr" src="~/assets/img/mvfr.svg" alt="" />
            <img class="MV__imgbox--front SPfr" src="~/assets/img/mvSPfr.png" alt="" />
            <figure class="MV__imgbox">

            <img class="MV__imgbox--main" src="~/assets/img/FV.jpg" alt="" />
            <img
                class="MV__imgbox--main"
                src="~/assets/img/sankoto-re-dai-yuno-shui-zhong-shi-jie.jpg"
                alt=""
            />
            <img
                class="MV__imgbox--main"
                src="~/assets/img/shui-zhongwo-yongku-yuno-tiaome.jpg"
                alt=""
            />
            </figure>
        </section>
        <section class="bottomnav">
            <ul>
            <li>
                <div class="bottomnav__img ticket"></div>
                <span>入場チケット</span>
            </li>
            <li>
                <div class="bottomnav__img time"></div>
                <span>営業時間・イベント</span>
            </li>
            <li>
                <div class="bottomnav__img map"></div>
                <span>交通アクセス</span>
            </li>
            <li>
                <div class="bottomnav__img museum"></div>
                <span>施設案内</span>
            </li>
            <li>
                <div class="bottomnav__img info"></div>
                <span>お知らせ</span>
            </li>
            <li>
                <div class="bottomnav__img group"></div>
                <span>団体のご利用</span>
            </li>
            <li>
                <div class="bottomnav__img question"></div>
                <span>よくある質問</span>
            </li>
            </ul>
        </section>

        <section class="pickup">
            <div class="pickup__info">
            <img class="pickup__info--wave" src="~/assets/img/wave-line.svg" alt="" />
            <h3>
                <div class="title">PICK UP</div>
                <div class="title">NEWS</div>
                <div class="subtitle">おすすめのコンテンツ</div>
            </h3>
            <div class="pickup__info--turnbtns">
                <div class="pickup__info--turnbtn-btn left">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="pickup__info--turnbtn-btn right">
                <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            </div>

            <ul class="pickup__contects">
            <li>
                <a href="">
                <div>
                    <span class="date">2025.10.24</span>
                    <span class="category category-event">イベント</span>
                </div>
                <h4 class="pickup__contects--title">10周年記念イベント</h4>
                <div>

                    <div class="pickup__contects--imgset">
                    <span class="pickup__contects--go"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="pickup__contects--txt">＠＠水族館のウェブサイトを公開しました</span>
                    <div class="pickup__contects--cover"></div>
                    <img
                        class="pickup__contects--img"
                        src="~/assets/img/banner1.jpg"
                        alt=""
                    />
                    </div>
                </div>
                </a>
            </li>
            <li>
                <a href="">
                <div>
                    <span class="date">2025.10.15</span>
                    <span class="category category-notice">お知らせ</span>
                </div>
                <h4 class="pickup__contects--title">風の城水族館ツアー</h4>
                <div>
                    <div class="pickup__contects--imgset">
                    <span class="pickup__contects--go"
                    ><i class="fa-solid fa-arrow-right"></i
                    ></span>
                    <span class="pickup__contects--txt"
                    >＠＠水族館のウェブサイトを公開しました</span
                    >
                    <div class="pickup__contects--cover"></div>
                    <img
                        class="pickup__contects--img"
                        src="~/assets/img/banner3.jpg"
                        alt=""
                    />
                    </div>
                </div>
                </a>
            </li>
            <li>
                <a href="">
                <div>
                    <span class="date">2025.10.05</span>
                    <span class="category category-event">イベント</span>
                </div>
                <h4 class="pickup__contects--title">海洋ゴミを学ぶ</h4>
                <div>
                    <div class="pickup__contects--imgset">
                    <span class="pickup__contects--go"
                    ><i class="fa-solid fa-arrow-right"></i
                    ></span>
                    <span class="pickup__contects--txt"
                    >＠＠水族館のウェブサイトを公開しました</span
                    >
                    <div class="pickup__contects--cover"></div>
                    <img
                        class="pickup__contects--img"
                        src="~/assets/img/banner2.jpg"
                        alt=""
                    />
                    </div>
                </div>
                </a>
            </li>
            </ul>
        </section>

        <section class="news">
            <h3>
            <div class="title">NEWS</div>
            <div class="subtitle">お知らせ</div>
            </h3>

            <ul class="news__contects">
            <li>
                <a href="">
                <div class="news__contects--top">
                    <span class="date">2025/10/30</span>
                    <span class="category category-notice">お知らせ</span>
                    <h4 class="news__contects--title">
                    ＠＠水族館のウェブサイトを公開しました
                    </h4>
                </div>
                <div class="news__contects--next"></div>
                </a>
            </li>

            <li>
                <a href="">
                <div class="news__contects--top">
                    <span class="date">2025/10/30</span>
                    <span class="category category-important">重要情報</span>
                    <h4 class="news__contects--title">
                    ＠＠水族館のウェブサイトを公開しました
                    </h4>
                </div>
                <div class="news__contects--next"></div>
                </a>
            </li>

            <li>
                <a href="">
                <div class="news__contects--top">
                    <span class="date">2025/10/30</span>
                    <span class="category category-notice">お知らせ</span>
                    <h4 class="news__contects--title">
                    ＠＠水族館のウェブサイトを公開しました
                    </h4>
                </div>
                <div class="news__contects--next"></div>
                </a>
            </li>

            <li>
                <a href="">
                <div class="news__contects--top">
                    <span class="date">2025/10/30</span>
                    <span class="category category-event">イベント</span>
                    <h4 class="news__contects--title">
                    ＠＠水族館のウェブサイトを公開しました
                    </h4>
                </div>
                <div class="news__contects--next"></div>
                </a>
            </li>
            </ul>


            <div class="news__btn">
                <a  href="">
                    <div>お知らせ一覧を見る</div>
                    <div><i class="fa-solid fa-arrow-right"></i></div>
                </a>
            </div>

            <img class="news__background" src="~/assets/img/fishgroup.svg" alt="" />
            <img class="news__background" src="~/assets/img/boble.svg" alt="" />
        </section>

        <section class="howtoenjoy">
            <h3>
            <div class="title">HOW TO <br class="spbr"> ENJOY</div>
            <div class="subtitle">楽しみ方</div>
            </h3>
            <div class="howtoenjoy__list">
            <ul class="enjoyslide">
                <li class="howtoenjoy__list--item">
                <span class="who">家族と</span>
                <figure>
                    <img src="~/assets/img/illust1.svg" alt="" />
                </figure>
                </li>

                <li class="howtoenjoy__list--item">
                <span class="who">恋人と</span>
                <figure>
                    <img src="~/assets/img/illust2.svg" alt="" />
                </figure>
                </li>

                <li class="howtoenjoy__list--item">
                <span class="who">友だちと</span>
                <figure>
                    <img src="~/assets/img/illust3.svg" alt="" />
                </figure>
                </li>

                <li class="howtoenjoy__list--item">
                <span class="who">ひとりで</span>
                <figure>
                    <img src="~/assets/img/illust4.svg" alt="" />
                </figure>
                </li>
            </ul>
            </div>
        </section>

        <section class="aquariumcreatures">


            <div class="aquariumcreatures__info">
                    <img class="aquariumcreatures__info--wave" src="~/assets/img/wave-line.svg" alt="" />
            <h3>
                <div class="title">AQUARIUM</div>
                <div class="title">CREATURES</div>
                <div class="subtitle">館内の生き物</div>
            </h3>

            <a class="aquariumcreatures__pcbtn" href="">
                    <div class="aquariumcreatures__info--btn">
                    <div class="nor">生き物の</div>
                    <div class="big">図鑑</div>
                    <i class="fa-solid fa-fish-fins"></i>
                    </div>
                </a>

            </div>

            <div class="aquariumcreatures__circle-layout aquariumcreatures__circle">
            <div class="aquariumcreatures__main-itemset">
                    <div class="aquariumcreatures__item--txt">海亀</div>
                    <figure class="aquariumcreatures__main-item">
                    <img
                        src="~/assets/img/Ellipse 45.png"
                        alt=""
                    />
                    
                    </figure>
            </div>

                <ul class="aquariumcreatures__list">

                <li class="aquariumcreatures__item small1 aquariumcreatures__circle" >
                    <div class="aquariumcreatures__item--txt">海亀</div>
                    <figure>
                    <img
                        src="~/assets/img/Ellipse 47.png"
                        alt=""
                    />
                    </figure>
                </li>

                <li class="aquariumcreatures__item small2 aquariumcreatures__circle" >
                    <div class="aquariumcreatures__item--txt">海亀</div>
                    <figure>
                    <img src="~/assets/img/Ellipse 49.png" alt="" />
                    </figure>
                </li>

                <li class="aquariumcreatures__item small3 aquariumcreatures__circle" >
                    <div class="aquariumcreatures__item--txt">海亀</div>
                    <figure>
                    <img
                        src="~/assets/img/Ellipse 48.png"
                        alt=""
                    />
                    </figure>
                </li>

                <li class="aquariumcreatures__item small4 aquariumcreatures__circle" >
                    <div class="aquariumcreatures__item--txt">海亀</div>
                    <figure>
                    <img
                        src="~/assets/img/Ellipse 51.png"
                        alt=""
                    />
                    </figure>
                </li>

                <li class="aquariumcreatures__item small5 aquariumcreatures__circle" >
                    <div class="aquariumcreatures__item--txt">海亀</div>
                    <figure>
                    <img src="~/assets/img/Ellipse 46.png" alt="" />
                    </figure>
                </li>
                </ul>



            </div>
            <a class="aquariumcreatures__spbtn" href="">
                    <div class="aquariumcreatures__info--btn">
                    <div class="nor">生き物の</div>
                    <div class="big">図鑑</div>
                    <i class="fa-solid fa-fish-fins"></i>
                    </div>
                </a>
        </section>

        <section class="address">
            <div class="address__top">


            <div class="address__info">
                        <img class="address__wave" src="~/assets/img/wave-line.svg" alt="" />

                <h3>
                <div class="title">ADDRESS</div>
                <div class="subtitle">アクセス</div>
                </h3>
                <div class="place">
                <div class="ddress__smalltitle">住所</div>
                <span
                    >〒000-0000
                    住所住所住所住所住所住所住所住所住所住所住所住所</span
                >
                </div>

                <div class="tel">
                <div class="ddress__smalltitle">電話番号</div>
                <span>(03)57XX794</span>
                </div>


            </div>
            <div class="address__map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25930.232976743195!2d139.7007727!3d35.6701286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1761729551841!5m2!1sja!2sjp"
                width="600"
                height="450"
                style="border: 0"

                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            </div>

            <div class="address__btnlist">
            <a href="">
                <div class="address__btn">
                <span class="address__btn--txt">お車でお越しの場合</span>
                <span class="address__btn--icon"
                    ><i class="fa-solid fa-arrow-right"></i
                ></span>
                </div>
            </a>

            <a href="">
                <div class="address__btn">
                <span class="address__btn--txt">バスでお越しの場合</span>
                <span class="address__btn--icon"
                    ><i class="fa-solid fa-arrow-right"></i
                ></span>
                </div>
            </a>

            <a href="">
                <div class="address__btn">
                <span class="address__btn--txt">電車でお越しの場合</span>
                <span class="address__btn--icon"
                    ><i class="fa-solid fa-arrow-right"></i
                ></span>
                </div>
            </a>
            </div>
        </section>

        <section class="last">
            <ul>
            <li class="last__shisetsu">
                <h4>施設案内</h4>
                <span><i class="fa-solid fa-arrow-right"></i></span>
            </li>

            <li class="last__event">
                <h4>イベント紹介</h4>
                <span><i class="fa-solid fa-arrow-right"></i></span>
            </li>

            <li class="last__kenkyu">
                <h4>研究</h4>
                <span><i class="fa-solid fa-arrow-right"></i></span>
            </li>
            </ul>
        </section>
        </main>
    </template>
<template>
  <header>
      <h1>風の城水族館</h1>
      <div class="topnav">
        <div class="topnav__heater">
          <a href="#"
            ><img class="topnavi__logo" src="~/assets/img/logo.svg" alt=""
          /></a>

          <div class="topnav__navlist--top">

             <div>
              <form
                class="search-form"
                role="search"
                action="https://3z1k.hatenablog.com/search"
                method="get"
              >
                <input
                  type="text"
                  name="q"
                  class="search-input"
                  placeholder="検索"
                  required=""
                />
                <input type="submit" value="&#xf002;" class="search-button" />
              </form>
            </div>

            <div class="topnav__language languageset">
              <div class="topnav__language--title language--title">
                <i class="fa-solid fa-globe"></i>
                <label for="lang">Language</label>
              </div>
              <select class="select" name="languages" id="lang">
                <option value="jp">JP</option>
                <option value="en">EN</option>
                <option value="ch">CH</option>
              </select>
            </div>


          </div>

          <div class="topnav__navhanbergar">
            <span class="topnav__line"></span>
            <span class="topnav__line"></span>
            <span class="topnav__line"></span>
          </div>
        </div>

        <div class="topnav__navlist">
          <div class="topnav__navlist--top">
            <div class="topnav__language languageset">
              <div class="topnav__language--title language--title">
                <i class="fa-solid fa-globe"></i>
                <label for="lang">Language</label>
              </div>
              <select class="select" name="languages" id="lang">
                <option value="jp">JP</option>
                <option value="en">EN</option>
                <option value="ch">CH</option>
              </select>
            </div>

            <div>
              <form
                class="search-form"
                role="search"
                action="https://3z1k.hatenablog.com/search"
                method="get"
              >
                <input
                  type="text"
                  name="q"
                  class="search-input"
                  placeholder="検索"
                  required=""
                />
                <input type="submit" value="&#xf002;" class="search-button" />
              </form>
            </div>
          </div>


          <a href="">
            <div class="topnav__navlist--ticket">
                <span>チケット購入</span>
                <img src="~/assets/img/ion_ticket.svg" alt="" />
            </div>
          </a>


          <div class="header__navgroup">
            <div class="header__navgroup--group ">
              <h5 class="title1">営業のご案内</h5>
              <div class="header__navgroup--line"></div>
              <div class="header__navgroup--set set1">
                <div><a href="">営業時間・イベントカレンダー</a></div>
                <div><a href="">入場チケット</a></div>
                <div><a href="">交通アクセス</a></div>
                <div><a href="">団体のご利用</a></div>
              </div>
            </div>

            <div class="header__navgroup--group ">
              <h5 class="title2">風の城水族館について</h5>
              <div class="header__navgroup--line"></div>
              <div class="header__navgroup--set set2">
                <div><a href="">お知らせ</a></div>
                <div><a href="">施設案内</a></div>
                <div><a href="">館内の生き物</a></div>
                <div><a href="">イベント紹介</a></div>
                <div><a href="">研究</a></div>
                <div><a href="">ショップ</a></div>
                <div><a href="">よくある質問</a></div>
              </div>
            </div>

            <div class="header__navgroup--group ">
              <h5 class="title3">風の城水族館の楽しみ方</h5>
              <div class="header__navgroup--line"></div>
              <div class="header__navgroup--set set3">
                <div><a href="">家族と</a></div>
                <div><a href="">恋人と</a></div>
                <div><a href="">友だちと</a></div>
                <div><a href="">ひとりて</a></div>
              </div>
            </div>
          </div>

          <ul class="header__btngroup">
            <li class="header__btngroup--item">
              <a href="">
                <span>年間パス</span>
                <i class="fa-solid fa-passport"></i>
              </a>
            </li>

            <li class="header__btngroup--item">
              <a href="">
                <span>館内<br />ショップ</span>
                <i class="fa-solid fa-basket-shopping"></i>
              </a>
            </li>

            <li class="header__btngroup--item">
              <a href="">
                <span>貸切・営業<br />時間外利用</span>
                <i class="fa-solid fa-moon"></i>
              </a>
            </li>
          </ul>

          <ul class="topnav__sns">
            <li>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-square-facebook"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  <div>
    <NuxtPage />
  </div>
  <footer>

      <div class="footer__top">
        <img class="footer__topwave sp" src="~/assets/img/footertopwave.svg" alt="">
        <img class="footer__topwave pc" src="~/assets/img/footertopwave-pc.svg" alt="">
        <img class="footer__back left" src="~/assets/img/fishgroup2.svg" alt="" />
        <img class="footer__back right" src="~/assets/img/boble.svg" alt="" />

        <div class="footer__navgroup">
          <div class="footer__navgroup--group1">
            <h5>営業のご案内</h5>
            <span><a href="">営業時間・イベントカレンダー</a></span>
            <span><a href="">入場チケット</a></span>
            <span><a href="">交通アクセス</a></span>
            <span><a href="">団体のご利用</a></span>
          </div>

          <div class="footer__navgroup--group2">
            <h5>風の城水族館について</h5>
            <span><a href="">お知らせ</a></span>
            <span><a href="">施設案内</a></span>
            <span><a href="">館内の生き物</a></span>
            <span><a href="">イベント紹介</a></span>
            <span><a href="">研究</a></span>
            <span><a href="">ショップ</a></span>
            <span><a href="">よくある質問</a></span>
          </div>

          <div class="footer__navgroup--group3">
            <h5>風の城水族館の楽しみ方</h5>
            <span><a href="">家族と</a></span>
            <span><a href="">恋人と</a></span>
            <span><a href="">友だちと</a></span>
            <span><a href="">ひとりて</a></span>
          </div>
        </div>

        <ul class="footer__btngroup">
          <li class="footer__btngroup--item">
            <a href="">
              <div>年間パス</div>
              <i class="fa-solid fa-passport"></i>
            </a>
          </li>

          <li class="footer__btngroup--item">
            <a href="">
              <div>館内ショップ</div>
              <i class="fa-solid fa-basket-shopping"></i>
            </a>
          </li>

          <li class="footer__btngroup--item">
            <a href="">
              <div>貸切・営業時間外利用</div>
              <i class="fa-solid fa-moon"></i>
            </a>
          </li>
        </ul>
        <img class="footer__bottomwave" src="~/assets/img/footerwave.svg" alt="" />
      </div>

      <div class="footer__bottom">
        <div class="footer__bottom--info">
          <figure>
            <img class="footer__bottom--logo" src="~/assets/img/logo.svg" alt="" />
          </figure>
          <div class="footer__bottom--txt">
            <div
              >〒000-0000<br class="spbr">住所住所住所住所住所住所住所住所住所住所住所住所</div
            >
            <div>TEL : (03) 57XX794 ・ FAX : (03) 57XX794 </div>
          </div>
        </div>
        <span class="footer__bottom--line"></span>

        <div class="footer__bottom--links">
          <ul class="footer__bottom--list">
            <li>会社概要</li>
            <li>プライバシーポリシー</li>
            <li>法人のお客様へ</li>
            <li>ご意見</li>
            <li>サイトマップ</li>
          </ul>

          <div class="footer__language languageset">
            <div class="footer__language--title language--title">
              <i class="fa-solid fa-globe"></i>
              <label for="lang">Language</label>
            </div>

            <select class="select" name="languages" id="lang">
              <option value="jp">JP</option>
              <option value="en">EN</option>
              <option value="ch">CH</option>
            </select>
          </div>

          <ul class="footer__sns">
            <li>
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-square-facebook"></i></a>
            </li>
            <li>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
          </ul>
        </div>

        <small>&copy;2025 WindAquarium All Rights Reserved.</small>
      </div>


    </footer>
</template>

<script setup>
// 這是一個空的 setup 區塊，保持 Nuxt 應用程式的運行
</script>

<style lang="scss">
/* 關鍵修正：在這裡使用標準的相對路徑引入 SCSS */
/* 因為我們移除了複雜的配置，這裡的路徑解析會更穩定 */

@import "./assets/scss/main.scss"; 
</style>

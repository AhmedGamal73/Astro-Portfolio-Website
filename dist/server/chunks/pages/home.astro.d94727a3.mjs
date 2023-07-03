import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../astro.290cc668.mjs';
import { c as client1, a as client2, b as client3, d as client4, e as $$Icon, f as $$Content1, $ as $$Layout, g as $$LatestBosts } from './about.astro.74b1f8da.mjs';
import { g as getLangFromUrl, u as useTranslations } from './404.astro.8658944e.mjs';
/* empty css                          *//* empty css                          */
const $$Astro$9 = createAstro();
const $$HeroSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HeroSlider;
  return renderTemplate`${maybeRenderHead($$result)}<div class="img-slider astro-BEUWGAI5">
    <div class="slide active astro-BEUWGAI5">
        <img src="/hero-slider-bg/hero1.jpg" alt="" class="astro-BEUWGAI5">
        <div class="info astro-BEUWGAI5">
            <h4 class="astro-BEUWGAI5"></h4>
            <p class="astro-BEUWGAI5"></p>
        </div>
    </div>
    <div class="slide astro-BEUWGAI5">
        <img src="/hero-slider-bg/hero2.jpg" alt="" class="astro-BEUWGAI5">
        <div class="info astro-BEUWGAI5">
            <h4 class="astro-BEUWGAI5"></h4>
            <p class="astro-BEUWGAI5"></p>
        </div>
    </div>
    <div class="slide astro-BEUWGAI5">
        <img src="/hero-slider-bg/3.jpg" alt="" class="astro-BEUWGAI5">
        <div class="info astro-BEUWGAI5">
            <h4 class="astro-BEUWGAI5">Slide 1</h4>
            <p class="astro-BEUWGAI5"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
        </div>
    </div>
    <div class="slide astro-BEUWGAI5">
        <img src="/hero-slider-bg/4.jpg" alt="" class="astro-BEUWGAI5">
        <div class="info astro-BEUWGAI5">
            <h4 class="astro-BEUWGAI5"></h4>
            <p class="astro-BEUWGAI5"></p>
        </div>
    </div>
    <div class="navigation astro-BEUWGAI5">
        <div class="slide-btn active astro-BEUWGAI5"></div>
        <div class="slide-btn astro-BEUWGAI5"></div>
        <div class="slide-btn astro-BEUWGAI5"></div>
        <div class="slide-btn astro-BEUWGAI5"></div>
    </div>
</div>`;
}, "/home/ampliz/Development/astro/BP/src/components/Slider/HeroSlider.astro");

const $$Astro$8 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead($$result)}<div class="hero-container">
  <div class="child left-col">
    <div class="content-col">
      <div class="content-wrap">
        <div class="head">
          <h6>${t("hero.question")}</h6>
          <h1>${t("hero.title")}<span>${t("hero.span")}</span></h1>
        </div>
        <p>${t("hero.subtitle")}</p>
        <div class="content_btns">          
          <a class="btn-stroke-yellow">Our Strategy</a>
          <a class="btn-line-blue">Free Consultant Now</a>
        </div>
      </div>
    </div>
  </div>
  <div class="child right-col">
    ${renderComponent($$result, "HeroSlider", $$HeroSlider, {})}
  </div>
</div>`;
}, "/home/ampliz/Development/astro/BP/src/components/Home/Hero.astro");

const $$Astro$7 = createAstro();
const $$PartnersSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PartnersSlider;
  return renderTemplate`${maybeRenderHead($$result)}<section class="partners-slider">
  <div class="slider-container">
    <div class="slider">
      <div class="slide"><img${addAttribute(client1, "src")} alt=""></div>
      <div class="slide"><img${addAttribute(client2, "src")} alt=""></div>
      <div class="slide"><img${addAttribute(client3, "src")} alt=""></div>
      <div class="slide"><img${addAttribute(client4, "src")} alt=""></div>
    </div>
    <div class="slider">
      <div class="slide"><img${addAttribute(client1, "src")} alt=""></div>
      <div class="slide"><img${addAttribute(client2, "src")} alt=""></div>
      <div class="slide"><img${addAttribute(client3, "src")} alt=""></div>
      <div class="slide"><img${addAttribute(client4, "src")} alt=""></div>
    </div>
  </div>

</section>`;
}, "/home/ampliz/Development/astro/BP/src/components/Home/PartnersSlider.astro");

const $$Astro$6 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Card;
  const p = Astro2.props;
  const { bgc = "var(--accent1)" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute({ width: p.size }, "style")} class="card-container">
    <div${addAttribute({ backgroundColor: bgc }, "style")} class="top">
        <img${addAttribute(p.img, "src")}${addAttribute(p.imgAlt, "alt")}>
    </div>
    <div class="bottom">
        <div class="title-wrap">
            <h3>${p.title}</h3>
            <p>${p.subtitle}</p>
        </div>
        <div${addAttribute({ flexdirection: p.featuresort }, "style")} class="feature-wrap">
            <div class="feature">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:chevron-right" })}
                <a${addAttribute(p.newTab, "target")}${addAttribute(p.featureSrc1, "href")} class="feature">${p.feature1}</a>
            </div>
            <div class="feature">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:chevron-right" })}
                <a${addAttribute(p.newTab, "target")}${addAttribute(p.featureSrc2, "href")} class="feature">${p.feature2}</a>
            </div>
            <div class="feature">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:chevron-right" })}
                <a${addAttribute(p.newTab, "target")}${addAttribute(p.featureSrc3, "href")} class="feature">${p.feature3}</a>
            </div>
        </div>
        <div class="btn">
            <a class="btn-stroke-blue-heavy"${addAttribute(p.btnSrc, "href")}>${p.btn}</a>
        </div>

    </div>
</div>`;
}, "/home/ampliz/Development/astro/BP/src/components/Card/Card.astro");

const $$Astro$5 = createAstro();
const $$TaxSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TaxSection;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead($$result)}<section>
  <div class="container">
    ${renderComponent($$result, "Content1", $$Content1, { "tag": "Insitutions", "title": "Our tax specialists are ready", "titleColor": "white", "subtitleColor": "white", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed." })}
    <div class="card-wrap">
      ${renderComponent($$result, "Card", $$Card, { "title": "Make a File", "subtitle": "Do your own bookkeeping with our On-Demand support along the way.", "img": "/home/company1.png", "feature1": "A dedicated account manager to handle all paperwork on your behalf", "feature1": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc1": "#", "feature2": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc2": "#", "feature3": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc3": "#", "btn": "Apply for registration", "btnSrc": "#" })}
      ${renderComponent($$result, "Card", $$Card, { "title": "Tax returns", "subtitle": "Do your own bookkeeping with our On-Demand support along the way.", "img": "/home/company2.png", "feature1": "A dedicated account manager to handle all paperwork on your behalf", "feature1": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc1": "#", "feature2": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc2": "#", "feature3": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc3": "#", "btn": "Apply for registration", "btnSrc": "#" })}
      ${renderComponent($$result, "Card", $$Card, { "title": "Examination and Appeal", "subtitle": "Do your own bookkeeping with our On-Demand support along the way.", "feature1": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc1": "#", "feature2": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc2": "#", "feature3": "A dedicated account manager to handle all paperwork on your behalf", "featureSrc3": "#", "btn": "Apply for registration", "btnSrc": "#" })}
    </div>
    <div class="btn-wrap">
      <h3>Still didn't Know which category ?</h3>
      <div class="btns-wrapper">
        <a href="#" class="btn-stroke-yellow">Book A Free Consaltant Now</a>
        <a href="#" class="btn-line-blue" style="color: white;">Browse All of Our Tax Services</a>
      </div>
    </div>
  </div>
</section>`;
}, "/home/ampliz/Development/astro/BP/src/components/Home/TaxSection.astro");

const $$Astro$4 = createAstro();
const $$Content2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Content2;
  const p = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="content2-container astro-5V435G6J">
  <div class="content-wrap astro-5V435G6J">
    <h1 class="astro-5V435G6J">${p.title} <span class="astro-5V435G6J">${p.span}</span></h1>
    <p class="astro-5V435G6J">${p.subtitle}</p>
  </div>
  <div class="btn-wrap astro-5V435G6J">
    <a${addAttribute(p.btn1Src, "href")} class="btn-stroke-yellow astro-5V435G6J">${p.btn1}</a>
    <a${addAttribute(p.btn2Src, "href")} class="btn-line-blue astro-5V435G6J">${p.btn2}</a>
  </div>
</div>`;
}, "/home/ampliz/Development/astro/BP/src/components/Content/Content2.astro");

const bk1 = "/_astro/bk1.88833fe3.png";

const bk2 = "/_astro/bk2.f98679ff.png";

const $$Astro$3 = createAstro();
const $$Bookkeeping = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Bookkeeping;
  return renderTemplate`${maybeRenderHead($$result)}<section>
  <div class="book-container">
    <div class="upper-col">

      <div class="start-col">
        ${renderComponent($$result, "Icon", $$Icon, { "name": "teenyicons:arrow-solid" })}
        ${renderComponent($$result, "Content2", $$Content2, { "title": "Don't bother with tax", "span": "calculations", "subtitle": "We can help explain what it means and even solve the problem for you.", "btn1": "Book Appointment", "btn2": "Know More About Us", "btn1Src": "#", "btn2Src": "#" })}
      </div>

      <div class="end-col">
        <div class="bgc">
          <img${addAttribute(bk1, "src")} alt=""> 
        </div>
      </div>

    </div>


    <div class="lower-col">

      <div class="start-col1">
        ${renderComponent($$result, "Content2", $$Content2, { "title": "Don't bother with calculations", "span": "Tax", "subtitle": "We can help explain what it means and even solve the problem for you.", "btn1": "Book Appointment", "btn2": "Know More About Us", "btn1Src": "#", "btn2Src": "#" })}

      </div>
      <div class="end-col1">
        <div class="bgc">
          <img${addAttribute(bk2, "src")} alt=""> 
        </div>
      </div>
    </div>
  </div>
   
</section>`;
}, "/home/ampliz/Development/astro/BP/src/components/Home/Bookkeeping.astro");

const $$Astro$2 = createAstro();
const $$Development = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Development;
  const p = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="dev-cont">
    <div class="first-col">
        ${renderComponent($$result, "Content1", $$Content1, { "tag": p.tag, "title": p.title })}
    </div>
    <div class="second-col">
        <div class="process-cont">
            <div class="right-col">
                <div class="steps-cont">
                    <div class="step">
                        <h3 class="num">1</h3>
                        <h4>${p.stepTitle1}</h4>
                        <p>${p.stepSubtitle1}</p>
                        <hr class="line">
                    </div>
                    <div class="step">
                        <h3 class="num">2</h3>
                        <h4>${p.stepTitle2}</h4>
                        <p>${p.stepSubtitle2}</p>
                        <hr class="line">
                    </div>
                    <div class="step">
                        <h3 class="num">3</h3>
                        <h4>${p.stepTitle3}</h4>
                        <p>${p.stepSubtitle3}</p>
                    </div>
                </div>
            </div>
            <div class="left-col">
                <img${addAttribute(`/home/${p.img}`, "src")}${addAttribute(p.imgData, "alt")}>
            </div>
        </div>
    </div>
    <div class="third-col">
        <a class="btn-stroke-yellow"${addAttribute(p.btnSrc1, "href")}>${p.btn1}</a>
        <a class="btn-stroke-blue-heavy"${addAttribute(p.btnSrc2, "href")}>${p.btn2}</a>
    </div>
</section>`;
}, "/home/ampliz/Development/astro/BP/src/components/Home/Development.astro");

const $$Astro$1 = createAstro();
const $$Home$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Home$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home Arabic Version" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>Home</h1>
` })}`;
}, "/home/ampliz/Development/astro/BP/src/pages/ar/home.astro");

const $$file$1 = "/home/ampliz/Development/astro/BP/src/pages/ar/home.astro";
const $$url$1 = "/ar/home";

const home$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "PartnersSlider", $$PartnersSlider, {})}
  ${renderComponent($$result2, "TaxSection", $$TaxSection, {})}
  ${renderComponent($$result2, "Bookkeeping", $$Bookkeeping, {})}
  ${renderComponent($$result2, "Development", $$Development, { "tag": "Why choose to do business with us", "title": "Our enterprise development steps", "stepTitle1": "Fast turnaround time.", "stepSubtitle1": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle2": "Fast turnaround time.", "stepSubtitle2": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle3": "Fast turnaround time.", "stepSubtitle3": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "mechanic.jpg", "btn1": "See All Of Our Services", "btn2": "Know More About Us", "btnSrc1": `/${lang}/services`, "btnSrc2": `/${lang}/about` })}

  ${renderComponent($$result2, "LatestBosts", $$LatestBosts, {})}

` })}`;
}, "/home/ampliz/Development/astro/BP/src/pages/en/home.astro");

const $$file = "/home/ampliz/Development/astro/BP/src/pages/en/home.astro";
const $$url = "/en/home";

const home = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Home,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, $$PartnersSlider as a, $$TaxSection as b, $$Bookkeeping as c, $$Development as d, $$Card as e, $$Content2 as f, home as g, home$1 as h };

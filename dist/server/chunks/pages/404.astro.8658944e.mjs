import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../astro.290cc668.mjs';
/* empty css                           *//* empty css                         *//* empty css                         */
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.courses": "Courses",
    "hero.question": "Is There's A Benift For Accounting ?",
    "hero.title": "When You Need Results.",
    "hero.span": "We Care.",
    "hero.subtitle": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "program1.title": "Trade",
    "program1.subtitle": "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "program2.title": "Dinner Mind",
    "program2.subtitle": "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "program3.title": "Tracker ERP",
    "program3.subtitle": "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عننا",
    "nav.contact": "تواصل"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead($$result)}<section class="page_404 astro-ZETDM5MD">
        <div class="container astro-ZETDM5MD">
            <div class="row astro-ZETDM5MD">	
            <div class="center-me col-sm-12  astro-ZETDM5MD">
            <div class="col-sm-10 col-sm-offset-1  text-center astro-ZETDM5MD">
            <div class="four_zero_four_bg astro-ZETDM5MD">
                <h1 class="text-center  astro-ZETDM5MD">404</h1>
            
            
            </div>
            
            <div class="contant_box_404 astro-ZETDM5MD">
            <h3 class="h2 astro-ZETDM5MD">
            Look like you're lost
            </h3>
            
            <p class="astro-ZETDM5MD">the page you are looking for not avaible!</p>
            
            <a class="back-home astro-ZETDM5MD"${addAttribute(`/${lang}/`, "href")} class="link_404">Go to Home</a>
    </div></div></div></div></div></section>`;
}, "/home/ampliz/Development/astro/BP/src/pages/404.astro");

const $$file = "/home/ampliz/Development/astro/BP/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, getLangFromUrl as g, useTranslations as u };

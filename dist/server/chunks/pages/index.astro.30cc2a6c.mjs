import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../astro.290cc668.mjs';
import { h as $$Base, g as $$LatestBosts, $ as $$Layout, f as $$Content1 } from './about.astro.74b1f8da.mjs';
import { $ as $$Hero, a as $$PartnersSlider, b as $$TaxSection, c as $$Bookkeeping, d as $$Development } from './home.astro.d94727a3.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Elements" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Base", $$Base, {}, { "default": ($$result3) => renderTemplate`
      ${renderComponent($$result3, "Hero", $$Hero, {})}
      ${renderComponent($$result3, "PartnersSlider", $$PartnersSlider, {})}
      ${renderComponent($$result3, "TaxSection", $$TaxSection, {})}
      ${renderComponent($$result3, "Bookkeeping", $$Bookkeeping, {})}
      ${renderComponent($$result3, "Development", $$Development, { "tag": "Why choose to do business with us", "title": "Our enterprise development steps", "stepTitle1": "Fast turnaround time.", "stepSubtitle1": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle2": "Fast turnaround time.", "stepSubtitle2": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle3": "Fast turnaround time.", "stepSubtitle3": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "mechanic.jpg", "btn1": "Contact one of our experts", "btn2": "Know More About Us", "btnSrc1": "#", "btnSrc2": "#" })}
      ${renderComponent($$result3, "LatestBosts", $$LatestBosts, {})}
    ` })}
` })}`;
}, "/home/ampliz/Development/astro/BP/src/pages/index.astro");

const $$file$3 = "/home/ampliz/Development/astro/BP/src/pages/index.astro";
const $$url$3 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u064A\u064A\u064A\u064A\u062A\u062A" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1> dsafsd</h1>
` })}`;
}, "/home/ampliz/Development/astro/BP/src/pages/ar/index.astro");

const $$file$2 = "/home/ampliz/Development/astro/BP/src/pages/ar/index.astro";
const $$url$2 = "/ar";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "PartnersSlider", $$PartnersSlider, {})}
  ${renderComponent($$result2, "TaxSection", $$TaxSection, {})}
  ${renderComponent($$result2, "Bookkeeping", $$Bookkeeping, {})}
  ${renderComponent($$result2, "Development", $$Development, { "tag": "Why choose to do business with us", "title": "Our enterprise development steps", "stepTitle1": "Fast turnaround time.", "stepSubtitle1": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle2": "Fast turnaround time.", "stepSubtitle2": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle3": "Fast turnaround time.", "stepSubtitle3": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "mechanic.jpg", "btn1": "Contact one of our experts", "btn2": "Know More About Us", "btnSrc1": "#", "btnSrc2": "#" })}

  ${renderComponent($$result2, "LatestBosts", $$LatestBosts, {})}

` })}`;
}, "/home/ampliz/Development/astro/BP/src/pages/en/index.astro");

const $$file$1 = "/home/ampliz/Development/astro/BP/src/pages/en/index.astro";
const $$url$1 = "/en";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = "https://rogina.shop/wp-json/wp/v2/posts";
  const res = await fetch(url);
  const posts = await res.json();
  function limit(string = "", limit2 = 0) {
    return string.substring(0, limit2) + "...";
  }
  var enPosts = [];
  function isArabic(posts2) {
    posts2.map((post) => {
      if (post.slug.includes("%")) ; else {
        enPosts.push(post);
      }
    });
  }
  isArabic(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog posts", "class": "astro-S63YPIVO" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<section class="archive-cont astro-S63YPIVO">
        <div class="up-row astro-S63YPIVO">
            ${renderComponent($$result2, "Content1", $$Content1, { "title": "Solutions for all your taxis", "titleColor": "var(--prim3)", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "subtitleColor": "white", "class": "astro-S63YPIVO" })}
        </div>
        <div class="cards-wrap astro-S63YPIVO">
            ${enPosts.map((p) => renderTemplate`<div class="card astro-S63YPIVO">
                        <div class="img-wrap astro-S63YPIVO">
                            <img${addAttribute(p.better_featured_image.source_url, "src")} alt="" class="astro-S63YPIVO">
                        </div>
                        <div class="content-wrap astro-S63YPIVO">
                            <div class="content-wrapper astro-S63YPIVO">
                                <h4 class="astro-S63YPIVO">${p.title.rendered}</h4>
                                <p class="astro-S63YPIVO">${unescapeHTML(limit(p.excerpt.rendered, 100))}</p>
                                <a class="btn-line-blue astro-S63YPIVO"${addAttribute(p.guid.rendered, "href")}>See More</a>
                            </div>
                        </div>
                    </div>`)}
        </div>
    </section>
` })}`;
}, "/home/ampliz/Development/astro/BP/src/pages/en/blog/index.astro");

const $$file = "/home/ampliz/Development/astro/BP/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };

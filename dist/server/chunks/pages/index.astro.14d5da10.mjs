import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.290cc668.mjs';
import { b as $$Base, $ as $$Layout } from './_slug_.astro.c4933bdd.mjs';
import { $ as $$Hero, a as $$PartnersSlider, b as $$TaxSection, c as $$Bookkeeping, d as $$Development } from './home.astro.ec80ecf5.mjs';
import { a as $$LatestBosts } from './about.astro.1793d631.mjs';
/* empty css                           */
const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
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
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/index.astro");

const $$file$2 = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/index.astro";
const $$url$2 = "";

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u064A\u064A\u064A\u064A\u062A\u062A" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1> dsafsd</h1>
` })}`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/ar/index.astro");

const $$file$1 = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/ar/index.astro";
const $$url$1 = "/ar";

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "PartnersSlider", $$PartnersSlider, {})}
  ${renderComponent($$result2, "TaxSection", $$TaxSection, {})}
  ${renderComponent($$result2, "Bookkeeping", $$Bookkeeping, {})}
  ${renderComponent($$result2, "Development", $$Development, { "tag": "Why choose to do business with us", "title": "Our enterprise development steps", "stepTitle1": "Fast turnaround time.", "stepSubtitle1": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle2": "Fast turnaround time.", "stepSubtitle2": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "stepTitle3": "Fast turnaround time.", "stepSubtitle3": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "mechanic.jpg", "btn1": "Contact one of our experts", "btn2": "Know More About Us", "btnSrc1": "#", "btnSrc2": "#" })}

  ${renderComponent($$result2, "LatestBosts", $$LatestBosts, {})}

` })}`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/index.astro");

const $$file = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/index.astro";
const $$url = "/en";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };

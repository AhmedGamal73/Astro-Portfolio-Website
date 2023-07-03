import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.290cc668.mjs';
import { a as $$Icon, $ as $$Layout } from './_slug_.astro.c4933bdd.mjs';
import { $ as $$Content1 } from './about.astro.1793d631.mjs';
/* empty css                         */import { e as $$Card, f as $$Content2 } from './home.astro.ec80ecf5.mjs';
import { g as getLangFromUrl, u as useTranslations } from './404.astro.7af05cd8.mjs';
/* empty css                              */import 'path-to-regexp';
import 'cookie';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'fs';
import 'http';
import 'tls';
import 'mime';
import 'html-escaper';
import 'string-width';
import 'slash';
/* empty css                           *//* empty css                           */import 'react';
import 'react/jsx-runtime';
import 'svgo';
/* empty css                           *//* empty css                            *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                          *//* empty css                          *//* empty css                         */
const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services", "class": "astro-PJ7LLKCO" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<section class="astro-PJ7LLKCO">
        <div class="service-hero astro-PJ7LLKCO">
            ${renderComponent($$result2, "Icon", $$Icon, { "style": "width: 63px; position: absolute; top: 0; rotate: 180deg;", "name": "arrow-up-thin", "class": "astro-PJ7LLKCO" })}
            ${renderComponent($$result2, "Content1", $$Content1, { "title": "Solutions to all your facility problems", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "class": "astro-PJ7LLKCO" })}
            <a class="btn-stroke-blue-heavy astro-PJ7LLKCO" href="">Contact one of our experts</a>
        </div>
        <div class="content-103 astro-PJ7LLKCO">
            <div class="container astro-PJ7LLKCO">
                <div class="content row astro-PJ7LLKCO">
                    ${renderComponent($$result2, "Content1", $$Content1, { "tag": "services", "title": "Our Services", "class": "astro-PJ7LLKCO" })}
                    <div class="col-md-4 col-sm-4 astro-PJ7LLKCO">
                        <div class="service-post astro-PJ7LLKCO">
                            <div class="service-content astro-PJ7LLKCO">
                                <div class="service-icon astro-PJ7LLKCO">
                                    ${renderComponent($$result2, "Icon", $$Icon, { "name": "book-light", "class": "astro-PJ7LLKCO" })}
                                </div>
                                <!-- service-icon -->
                                <h3 class="service-title astro-PJ7LLKCO">BookKeeping</h3>
                                <p class="service-description astro-PJ7LLKCO">Seitan brunch meh, food truck Wes Anderson quinoa XOXO readymade gastropub gluten-free heirloom wolf skateboard.</p>
                            </div>
                            <!-- service-content -->
                            <div class="service-hover astro-PJ7LLKCO"></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 astro-PJ7LLKCO">
                        <div class="service-post astro-PJ7LLKCO">
                            <div class="service-content astro-PJ7LLKCO">
                                <div class="service-icon astro-PJ7LLKCO">
                                    ${renderComponent($$result2, "Icon", $$Icon, { "name": "audit-outlined", "class": "astro-PJ7LLKCO" })}
                                </div>
                                <!-- .s-icon -->
                                <h3 class="service-title astro-PJ7LLKCO">Audit</h3>
                                <p class="service-description astro-PJ7LLKCO">Seitan brunch meh, food truck Wes Anderson quinoa XOXO readymade gastropub gluten-free heirloom wolf skateboard.</p>
                            </div>
                            <!-- service-content -->
                            <div class="service-hover astro-PJ7LLKCO"></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 astro-PJ7LLKCO">
                        <div class="service-post astro-PJ7LLKCO">
                            <div class="service-content astro-PJ7LLKCO">
                                <div class="service-icon astro-PJ7LLKCO">
                                    ${renderComponent($$result2, "Icon", $$Icon, { "name": "money-thin", "class": "astro-PJ7LLKCO" })}
                                </div>
                                <!-- .s-icon -->
                                <h3 class="service-title astro-PJ7LLKCO">Taxis</h3>
                                <p class="service-description astro-PJ7LLKCO">Seitan brunch meh, food truck Wes Anderson quinoa XOXO readymade gastropub gluten-free heirloom wolf skateboard.</p>
                            </div>
                            <!-- service-content -->
                            <div class="service-hover astro-PJ7LLKCO"></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 astro-PJ7LLKCO">
                        <div class="service-post astro-PJ7LLKCO">
                            <div class="service-content astro-PJ7LLKCO">
                                <div class="service-icon astro-PJ7LLKCO">
                                    ${renderComponent($$result2, "Icon", $$Icon, { "name": "work-outline", "class": "astro-PJ7LLKCO" })}
                                </div>
                                <!-- .s-icon -->
                                <h3 class="service-title astro-PJ7LLKCO">Jobs</h3>
                                <p class="service-description astro-PJ7LLKCO">Seitan brunch meh, food truck Wes Anderson quinoa XOXO readymade gastropub gluten-free heirloom wolf skateboard.</p>
                            </div>
                            <!-- service-content -->
                            <div class="service-hover astro-PJ7LLKCO"></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 astro-PJ7LLKCO">
                        <div class="service-post astro-PJ7LLKCO">
                            <div class="service-content astro-PJ7LLKCO">
                                <div class="service-icon astro-PJ7LLKCO">
                                    ${renderComponent($$result2, "Icon", $$Icon, { "name": "course", "class": "astro-PJ7LLKCO" })}
                                </div>
                                <!-- .s-icon -->
                                <h3 class="service-title astro-PJ7LLKCO">Courses</h3>
                                <p class="service-description astro-PJ7LLKCO">Seitan brunch meh, food truck Wes Anderson quinoa XOXO readymade gastropub gluten-free heirloom wolf skateboard.</p>
                            </div>
                            <!-- service-content -->
                            <div class="service-hover astro-PJ7LLKCO"></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 astro-PJ7LLKCO">
                        <div class="service-post astro-PJ7LLKCO">
                            <div class="service-content astro-PJ7LLKCO">
                                <div class="service-icon astro-PJ7LLKCO">
                                    ${renderComponent($$result2, "Icon", $$Icon, { "name": "programming-broken", "class": "astro-PJ7LLKCO" })}
                                </div>
                                <!-- .s-icon -->
                                <h3 class="service-title astro-PJ7LLKCO">Accounting Programs</h3>
                                <p class="service-description astro-PJ7LLKCO">Seitan brunch meh, food truck Wes Anderson quinoa XOXO readymade gastropub gluten-free heirloom wolf skateboard.</p>
                            </div>
                            <!-- service-content -->
                            <div class="service-hover astro-PJ7LLKCO"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section class="courses-container astro-PJ7LLKCO">
        ${renderComponent($$result2, "Content1", $$Content1, { "tag": "Our Programms", "title": "We Have Programms to Help Your Bussines", "titleColor": "white", "class": "astro-PJ7LLKCO" })}
        <div class="card-container astro-PJ7LLKCO">
            ${renderComponent($$result2, "Card", $$Card, { "size": "40%", "img": "/service/program1.png", "title": t("program1.title"), "subtitle": t("program1.subtitle"), "feature1": "Growth of sales", "feature2": "Manage your employees", "feature3": "customers and suppliers", "btn": "See All Features", "class": "astro-PJ7LLKCO" })}
            ${renderComponent($$result2, "Card", $$Card, { "img": "/service/program2.png", "size": "40%", "title": t("program2.title"), "subtitle": t("program2.subtitle"), "feature1": "Growth of sales", "feature2": "Manage your employees", "feature3": "customers and suppliers", "btn": "See All Features", "bgc": "var(--accent2)", "class": "astro-PJ7LLKCO" })}
            ${renderComponent($$result2, "Card", $$Card, { "size": "60%", "featureSort": "row", "img": "/service/program3.png", "title": t("program3.title"), "subtitle": t("program3.subtitle"), "feature1": "Growth of sales", "feature2": "Manage your employees", "feature3": "customers and suppliers", "btn": "See All Features", "newTab": "_blanck", "bgc": "var(--accent1)", "class": "astro-PJ7LLKCO" })}
        </div>
    </section>
    <section class="consaltant-container astro-PJ7LLKCO">
        <div class="right astro-PJ7LLKCO">
            ${renderComponent($$result2, "Content2", $$Content2, { "title": "Our Expertese here to help you with understanding your financial sitiuation and More", "subtitle": "If You Have An Enterprise Company, where to go from here where to go from here where to go from here", "btn1": "Ask Consaltant Know", "class": "astro-PJ7LLKCO" })}
        </div>
        <div class="left astro-PJ7LLKCO">
            <img src="/public/service/consulting.png" class="astro-PJ7LLKCO">
        </div>

    </section>
` })}`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/services.astro");

const $$file = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/services.astro";
const $$url = "/en/services";

export { $$Services as default, $$file as file, $$url as url };

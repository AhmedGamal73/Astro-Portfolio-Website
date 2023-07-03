import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.290cc668.mjs';
import { $ as $$Layout, a as $$Icon, b as $$Base } from './_slug_.astro.c4933bdd.mjs';
/* empty css                           *//* empty css                           *//* empty css                           */import { g as getLangFromUrl } from './404.astro.7af05cd8.mjs';

const $$Astro$9 = createAstro();
const $$Content1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Content1;
  const a = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="content-wrap astro-3PMOSF22">
  <h6 class="astro-3PMOSF22">${a.tag}</h6>
  <h2${addAttribute({ color: a.titleColor }, "style")} class="astro-3PMOSF22">${a.title}</h2>
  <p${addAttribute({ color: a.subtitleColor }, "style")} class="astro-3PMOSF22">${a.subtitle}</p>
</div>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/Content/Content1.astro");

const $$Astro$8 = createAstro();
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PostCard;
  const p = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card astro-GYBVF6IK">
    <div class="img-wrap astro-GYBVF6IK">
        <img${addAttribute(`/${p.img}`, "src")} alt="" class="astro-GYBVF6IK">
    </div>
    <div class="content-wrap astro-GYBVF6IK">
        <h4 class="astro-GYBVF6IK">${p.title}</h4>
        <p class="astro-GYBVF6IK">${p.subtitle}</p> 
        <a class="btn-line-blue astro-GYBVF6IK" href="#">See More</a>
    </div>
</div>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/Card/PostCard.astro");

const $$Astro$7 = createAstro();
const $$LatestBosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LatestBosts;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead($$result)}<section class="posts-cont astro-VYX24BVF">
        <div class="up-row astro-VYX24BVF">
            ${renderComponent($$result, "Content1", $$Content1, { "tag": "Our Latest Posts", "title": "Solutions for all your taxis", "titleColor": "#152040", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "subtitleColor": "#152040", "btn": "See All", "class": "astro-VYX24BVF" })}
        </div>
        <div class="cards-wrap astro-VYX24BVF">
            ${renderComponent($$result, "PostCard", $$PostCard, { "title": "Here's A new Blog Post!!", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "home/blog1.jpg", "class": "astro-VYX24BVF" })}
            ${renderComponent($$result, "PostCard", $$PostCard, { "title": "Here's A new Blog Post!!", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "home/blog2.jpg", "class": "astro-VYX24BVF" })}
            ${renderComponent($$result, "PostCard", $$PostCard, { "title": "Here's A new Blog Post!!", "subtitle": "Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed.", "img": "home/blog3.jpg", "class": "astro-VYX24BVF" })}
        </div>
        <a class="all-posts btn-stroke-yellow astro-VYX24BVF"${addAttribute(`/${lang}/blog`, "href")}>See All Posts</a>
</section>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/Home/LatestBosts.astro");

const $$Astro$6 = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0639\u0646\u0646\u0627" }, { "default": ($$result2) => renderTemplate`

  ${maybeRenderHead($$result2)}<h1>هذه صفحة عننا</h1>
` })}`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/ar/about.astro");

const $$file$1 = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/ar/about.astro";
const $$url$1 = "/ar/about";

const about$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$AboutHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AboutHero;
  const a = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="about-hero astro-G7N27PCR">
    <div class="img-col astro-G7N27PCR">
        <span class="bgc-line astro-G7N27PCR"></span>
        <span class="bgc-line astro-G7N27PCR"></span>
        <span class="bgc-line astro-G7N27PCR"></span>
        <img${addAttribute(`/home/${a.heroImg}`, "src")}${addAttribute(a.heroImgAlt, "alt")} class="astro-G7N27PCR">
    </div>
    <div class="content-col astro-G7N27PCR">
        <h1 class="astro-G7N27PCR">${a.title}</h1>
        <p class="astro-G7N27PCR">${a.subtitle}</p>
    </div>

</section>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/About/AboutHero.astro");

const $$Astro$4 = createAstro();
const $$BoxToBox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BoxToBox;
  const p = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute({ flexDirection: p.contDirection }, "style")} class="box-cont astro-R4OJVX2D">
    <div${addAttribute({ background: p.bgc }, "style")} class="left-col astro-R4OJVX2D">
        ${renderComponent($$result, "Icon", $$Icon, { "name": p.icon, "style": `style`, "class": "astro-R4OJVX2D" })}
    </div>

    <div class="right-col astro-R4OJVX2D">
        <div class="content-wrap astro-R4OJVX2D">
            <div class="icon-wrap astro-R4OJVX2D">
                ${renderComponent($$result, "Icon", $$Icon, { "style": "color: var(--prim1);", "name": "book-fill", "class": "astro-R4OJVX2D" })}
            </div>
            <h3 class="astro-R4OJVX2D">${p.title}</h3>
            <p class="astro-R4OJVX2D">${p.subtitle}</p>
        </div>
    </div>
</section>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/About/BoxToBox.astro");

const $$Astro$3 = createAstro();
const $$TeamCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const p = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="emp-card">
    <div class="card-img">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img${addAttribute(p.img, "src")} alt="">
        </div>
        <div class="flip-card-back">
          <img${addAttribute(p.flipImg, "src")} alt="">
        </div>
      </div>

    </div>

    <div class="card-body">
      <h4>${p.name}</h4>
      <small>${p.jobTitle}</small>
    </div>
  </div>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/Card/TeamCard.astro");

const $$Astro$2 = createAstro();
const $$OurTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$OurTeam;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="team-section">
  ${renderComponent($$result, "Content1", $$Content1, { "tag": "Our Team", "title": "We Can't Do any Thing Without You", "subtitle": "ver since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." })}
  <div class="cards">
    <div class="d-flex">
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
      ${renderComponent($$result, "TeamCard", $$TeamCard, { "img": "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "flipImg": "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "name": "Dalya Walii", "jobTitle": "Sales" })}
    </div>
  </div>
</section>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/About/OurTeam.astro");

const $$Astro$1 = createAstro();
const $$OurProcess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OurProcess;
  return renderTemplate`${maybeRenderHead($$result)}<section class="astro-SQED3TZE">
    <div class="process-cont astro-SQED3TZE">
        <div class="top-col astro-SQED3TZE">
            <h6 class="astro-SQED3TZE">Process</h6>
            <h3 class="astro-SQED3TZE">The mechanism of action that leads to the success of the system</h3>
        </div>
        <div class="bot-col astro-SQED3TZE">
            <div class="content-cont astro-SQED3TZE">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:book-fill", "class": "astro-SQED3TZE" })}
                    <h5 class="astro-SQED3TZE">Getting to know the company</h5>
                    <p class="astro-SQED3TZE">Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed."</p>
            </div>
            <div class="content-cont astro-SQED3TZE">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:book-fill", "class": "astro-SQED3TZE" })}
                    <h5 class="astro-SQED3TZE">Getting to know the company</h5>
                    <p class="astro-SQED3TZE">Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed."</p>
            </div>
            <div class="content-cont astro-SQED3TZE">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:book-fill", "class": "astro-SQED3TZE" })}
                    <h5 class="astro-SQED3TZE">Getting to know the company</h5>
                    <p class="astro-SQED3TZE">Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed."</p>
            </div>
            <div class="content-cont astro-SQED3TZE">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:book-fill", "class": "astro-SQED3TZE" })}
                    <h5 class="astro-SQED3TZE">Getting to know the company</h5>
                    <p class="astro-SQED3TZE">Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed."</p>
            </div>
            <div class="content-cont astro-SQED3TZE">
                ${renderComponent($$result, "Icon", $$Icon, { "name": "ph:book-fill", "class": "astro-SQED3TZE" })}
                    <h5 class="astro-SQED3TZE">Getting to know the company</h5>
                    <p class="astro-SQED3TZE">Pull up a chair in our office or stay on the couch. We have all the tax filing options you need. And by any file method, you'll always get the maximum for your recovery. Guaranteed."</p>
            </div>
        </div>
    </div>
</section>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/About/OurProcess.astro");

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const prim1 = "#152040", prim3 = "#DFC063", blue = "#0080F9", sky = "#B7E6FD";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Base", $$Base, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "AboutHero", $$AboutHero, { "heroImg": "about-hero.png", "title": "A successful enterprise only successfully finds its employees", "subtitle": "We care about your taxes. And your financial well-being. With options like Emerald Card \xAE , prepaid debit MasterCard \xAE , you can get what you need with H & R Block. All banking products offered by Bath Ward, na, FDIC member." })}
    ${renderComponent($$result3, "BoxToBox", $$BoxToBox, { "uniqueKey": "2", "title": "Who We Are ?", "subtitle": "We care about your taxes. And your financial well-being. With options like Emerald Card \xAE , prepaid debit MasterCard \xAE , you can get what you need with H & R Block. All banking products offered by Bath Ward, na, FDIC member.", "bgc": prim3, "iconColor": prim1, "contDirection": "row-reverse", "icon": "people-team" })}
    ${renderComponent($$result3, "BoxToBox", $$BoxToBox, { "uniqueKey": "1", "title": "Our Mission", "subtitle": "We care about your taxes. And your financial well-being. With options like Emerald Card \xAE , prepaid debit MasterCard \xAE , you can get what you need with H & R Block. All banking products offered by Bath Ward, na, FDIC member.", "bgc": blue, "iconColor": prim3, "contDirection": "row", "icon": "arrow-growth" })}
    ${renderComponent($$result3, "BoxToBox", $$BoxToBox, { "uniqueKey": "3", "title": "Our Vision", "subtitle": "We care about your taxes. And your financial well-being. With options like Emerald Card \xAE , prepaid debit MasterCard \xAE , you can get what you need with H & R Block. All banking products offered by Bath Ward, na, FDIC member.", "bgc": sky, "iconColor": prim1, "contDirection": "row-reverse", "icon": "eye" })}
    ${renderComponent($$result3, "BoxToBox", $$BoxToBox, { "uniqueKey": "4", "title": "Our Values", "subtitle": "We care about your taxes. And your financial well-being. With options like Emerald Card \xAE , prepaid debit MasterCard \xAE , you can get what you need with H & R Block. All banking products offered by Bath Ward, na, FDIC member.", "bgc": prim1, "iconColor": `iconColor`, "contDirection": "row", "icon": "internet-of-things" })}
    ${renderComponent($$result3, "OurTeam", $$OurTeam, {})}
    ${renderComponent($$result3, "OurProcess", $$OurProcess, {})}
    ${renderComponent($$result3, "LatestBosts", $$LatestBosts, {})}
  ` })}
` })}`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/about.astro");

const $$file = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/about.astro";
const $$url = "/en/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Content1 as $, $$LatestBosts as a, about$1 as b, about as c };

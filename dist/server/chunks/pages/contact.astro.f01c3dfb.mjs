import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.290cc668.mjs';
import { $ as $$Layout } from './about.astro.74b1f8da.mjs';
/* empty css                             */import 'path-to-regexp';
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
/* empty css                           */import 'svgo';
/* empty css                           */import './404.astro.8658944e.mjs';
/* empty css                           *//* empty css                         *//* empty css                         *//* empty css                           */import 'react';
import 'react/jsx-runtime';
/* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us", "class": "astro-V7LFTU2I" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="contact-container astro-V7LFTU2I">
    <div class="left-col astro-V7LFTU2I">
      <img class="logo astro-V7LFTU2I" src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
    </div>
    <div class="right-col astro-V7LFTU2I">
      <div class="form astro-V7LFTU2I">
        <h1 class="astro-V7LFTU2I">Contact us</h1>
        <p class="astro-V7LFTU2I">Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>
      
        <form id="contact-form" method="post" class="astro-V7LFTU2I">
          <label for="name" class="astro-V7LFTU2I">Full name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required class="astro-V7LFTU2I">
          <label for="email" class="astro-V7LFTU2I">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required class="astro-V7LFTU2I">
          <label for="message" class="astro-V7LFTU2I">Message</label>
          <textarea rows="6" placeholder="Your Message" id="message" name="message" required class="astro-V7LFTU2I"></textarea>
          <!--<a href="javascript:void(0)">--><button type="submit" id="submit" name="submit" class="astro-V7LFTU2I">Send</button><!--</a>-->
        </form>
      </div>
      <div id="error" class="astro-V7LFTU2I"></div>
      <div id="success-msg" class="astro-V7LFTU2I"></div>
    </div>
  </div>
` })}


<!-- Image credit: Oliver Sjöström https://www.pexels.com/photo/body-of-water-near-green-mountain-931018/  -->`;
}, "/home/ampliz/Development/astro/BP/src/pages/en/contact.astro");

const $$file = "/home/ampliz/Development/astro/BP/src/pages/en/contact.astro";
const $$url = "/en/contact";

export { $$Contact as default, $$file as file, $$url as url };

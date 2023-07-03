import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.290cc668.mjs';
import { $ as $$Layout } from './_slug_.astro.c4933bdd.mjs';
import { useState } from 'react';
import { s as styles } from '../contact.5df5a21d.e084a544.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import 'path-to-regexp';
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
import './404.astro.7af05cd8.mjs';
/* empty css                           *//* empty css                         *//* empty css                         *//* empty css                           */import 'svgo';
/* empty css                           *//* empty css                            */
const ConsaltantForm = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: styles.flex,
    children: [/* @__PURE__ */ jsxs("form", {
      className: "contact-form",
      children: [/* @__PURE__ */ jsx("input", {
        autoFocus: true,
        placeholder: "Your Email",
        required: true,
        type: "email"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        placeholder: "Your Phone Number",
        type: "tel"
      }), /* @__PURE__ */ jsx("textarea", {
        placeholder: "Your issue",
        id: "consalt",
        name: "consalt",
        required: true
      }), /* @__PURE__ */ jsx("div", {
        className: "btn-cont",
        children: /* @__PURE__ */ jsx("button", {
          className: "btn-stroke-blue-heavy",
          type: "submit",
          id: "submit",
          name: "submit",
          children: "Send"
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      id: "error"
    }), /* @__PURE__ */ jsx("div", {
      id: "success-msg"
    })]
  });
};
__astro_tag_component__(ConsaltantForm, "@astrojs/react");

const ContactForm = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: styles.flex,
      children: /* @__PURE__ */ jsxs("form", {
        id: "contact-form",
        method: "post",
        children: [/* @__PURE__ */ jsx("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Full Name",
          required: true
        }), /* @__PURE__ */ jsx("input", {
          type: "email",
          id: "email",
          name: "email",
          placeholder: "Email",
          required: true
        }), /* @__PURE__ */ jsx("input", {
          pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
          type: "tel",
          id: "phone",
          name: "phonw",
          placeholder: "Phone Number",
          required: true
        }), /* @__PURE__ */ jsx("input", {
          type: "text",
          id: "address",
          name: "address",
          placeholder: "Address",
          required: true
        }), /* @__PURE__ */ jsx("textarea", {
          placeholder: "Your Message",
          id: "message",
          name: "message",
          required: true
        }), /* @__PURE__ */ jsx("div", {
          className: "btn-cont",
          children: /* @__PURE__ */ jsx("button", {
            className: "btn-stroke-blue-heavy",
            type: "submit",
            id: "submit",
            name: "submit",
            children: "Send"
          })
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      id: "error"
    }), /* @__PURE__ */ jsx("div", {
      id: "success-msg"
    })]
  });
};
__astro_tag_component__(ContactForm, "@astrojs/react");

const data = [{
  id: 0,
  component: /* @__PURE__ */ jsx(ConsaltantForm, {}),
  isVisible: true
}, {
  id: 1,
  component: /* @__PURE__ */ jsx(ContactForm, {}),
  isVisible: true
}];
function App() {
  const [forms, setForms] = useState(data);
  const clickHandler = (id) => {
    const render = forms.map((form) => {
      form.isVisible = false;
      if (form.id !== id) {
        form.isVisible = !form.isVisible;
      }
      return form;
    });
    setForms(render);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "container",
    children: [/* @__PURE__ */ jsx("h3", {
      children: "What is the type off your message"
    }), /* @__PURE__ */ jsxs("div", {
      className: "btns-cont",
      children: [/* @__PURE__ */ jsxs("button", {
        style: {
          backgroundColor: data[0].isVisible ? "var(--prim3)" : "#eec342"
        },
        onClick: () => {
          clickHandler(0);
        },
        children: [/* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "26",
          height: "26",
          viewBox: "0 0 26 26",
          children: /* @__PURE__ */ jsx("path", {
            fill: "currentColor",
            d: "M13 0C5.925 0 0 5.08 0 11.5c0 3.03 1.359 5.748 3.5 7.781a6.733 6.733 0 0 1-1.094 1.875A16.48 16.48 0 0 1 .375 23.22A1 1 0 0 0 1 25c2.215 0 3.808-.025 5.25-.406c1.29-.342 2.399-1.058 3.531-2.063c1.03.247 2.093.469 3.219.469c7.075 0 13-5.08 13-11.5S20.075 0 13 0zm0 2c6.125 0 11 4.32 11 9.5S19.125 21 13 21c-1.089 0-2.22-.188-3.25-.469a1 1 0 0 0-.938.25c-1.125 1.079-1.954 1.582-3.062 1.875c-.51.135-1.494.103-2.188.157c.14-.158.271-.242.407-.407c.786-.96 1.503-1.975 1.719-3.125a1 1 0 0 0-.344-.937C3.249 16.614 2 14.189 2 11.5C2 6.32 6.875 2 13 2zm-1.906 3.906a1 1 0 0 0-.469.25l-1.5 1.407l1.344 1.468l1.187-1.125h2.406L15 8.97v1.469l-2.563 1.718A1 1 0 0 0 12 13v2h2v-1.438l2.563-1.718A1 1 0 0 0 17 11V8.594a1 1 0 0 0-.25-.656l-1.5-1.688a1 1 0 0 0-.75-.344h-3.188a1 1 0 0 0-.218 0zM12 16v2h2v-2h-2z"
          })
        }), /* @__PURE__ */ jsx("br", {}), "Consaltant"]
      }), /* @__PURE__ */ jsxs("button", {
        style: {
          backgroundColor: data[1].isVisible ? "var(--prim3)" : "#eec342"
        },
        onClick: () => {
          clickHandler(1);
        },
        children: [/* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx("path", {
            fill: "currentColor",
            "fill-rule": "evenodd",
            d: "M9.944 3.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153ZM5.71 4.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289c0 1.907.002 3.261.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14Zm-.287 2.63a.75.75 0 0 1 1.056-.096L8.64 9.223c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455c.345 0 .704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 1 1 .96 1.153l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693c-.741 0-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1-.096-1.057Z",
            "clip-rule": "evenodd"
          })
        }), /* @__PURE__ */ jsx("br", {}), "Contact"]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "forms",
      children: forms.map(({
        id,
        component,
        isVisible
      }) => /* @__PURE__ */ jsx("div", {
        hidden: isVisible,
        children: component
      }, id))
    })]
  });
}
__astro_tag_component__(App, "@astrojs/react");

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us", "class": "astro-V7LFTU2I" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="contact-container astro-V7LFTU2I">
    <div class="left-col astro-V7LFTU2I">
      <img src="https://images.pexels.com/photos/10303889/pexels-photo-10303889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="astro-V7LFTU2I">
    </div>
    <div class="right-col astro-V7LFTU2I">
      ${renderComponent($$result2, "ContentToggle", App, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/ContentToggle", "client:component-export": "default", "class": "astro-V7LFTU2I" })}
    </div>
</div>


` })}`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/contact.astro");

const $$file = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/contact.astro";
const $$url = "/en/contact";

export { $$Contact as default, $$file as file, $$url as url };

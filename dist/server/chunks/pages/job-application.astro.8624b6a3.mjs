import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, e as renderHead, d as renderComponent } from '../astro.290cc668.mjs';
import { useState } from 'react';
/* empty css                                     */import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                           */import { g as getLangFromUrl } from './404.astro.7af05cd8.mjs';
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
/* empty css                         *//* empty css                         */
function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1)
        return i;
      return i + 1;
    });
  }
  function prev() {
    setCurrentStepIndex((i) => {
      if (i <= 0)
        return i;
      return i - 1;
    });
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    prev
  };
}
__astro_tag_component__(useMultistepForm, "@astrojs/react");

function FormWrapper({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("h3", {
      className: "step-title",
      children: title
    }), /* @__PURE__ */ jsx("div", {
      className: "form-data-wrapper",
      children
    })]
  });
}
__astro_tag_component__(FormWrapper, "@astrojs/react");

function UserForm({
  firstName,
  lastName,
  age,
  gender,
  street,
  city,
  state,
  zip,
  updateFields
}) {
  const url = "https://backstage.taboola.com/backstage/api/1.0/resources/countries/us/cities";
  const options = {
    method: "GET"
  };
  fetch(url, options).then((res) => res.json()).then((json) => console.log(json)).catch((err) => console.error("error:" + err));
  return /* @__PURE__ */ jsxs(FormWrapper, {
    title: "Let's get to know you",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "First Name"
      }), /* @__PURE__ */ jsx("input", {
        autoFocus: true,
        required: true,
        type: "text",
        value: firstName,
        onChange: (e) => updateFields({
          firstName: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Last Name"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: lastName,
        onChange: (e) => updateFields({
          lastName: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Age"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        min: 1,
        type: "number",
        value: age,
        onChange: (e) => updateFields({
          age: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Gender"
      }), /* @__PURE__ */ jsxs("select", {
        required: true,
        defaultValue: "select",
        id: "gender",
        onChange: (e) => updateFields({
          gender: e.target.value
        }),
        children: [/* @__PURE__ */ jsx("option", {
          value: "",
          children: "Select an Option"
        }), /* @__PURE__ */ jsx("option", {
          value: "male",
          children: "Male"
        }), /* @__PURE__ */ jsx("option", {
          value: "fmale",
          children: "Fmale"
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Street"
      }), /* @__PURE__ */ jsx("input", {
        autoFocus: true,
        required: true,
        type: "text",
        value: street,
        onChange: (e) => updateFields({
          street: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "City"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: city,
        onChange: (e) => updateFields({
          city: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "State"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: state,
        onChange: (e) => updateFields({
          state: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Zip"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: zip,
        onChange: (e) => updateFields({
          zip: e.target.value
        })
      })]
    })]
  });
}
__astro_tag_component__(UserForm, "@astrojs/react");

function AccountForm({
  email,
  password,
  updateFields,
  title
}) {
  return /* @__PURE__ */ jsxs(FormWrapper, {
    title: "Verify Your Details",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Email"
      }), /* @__PURE__ */ jsx("input", {
        autoFocus: true,
        required: true,
        type: "email",
        value: email,
        onChange: (e) => updateFields({
          email: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Password"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "password",
        value: password,
        onChange: (e) => updateFields({
          password: e.target.value
        })
      })]
    })]
  });
}
__astro_tag_component__(AccountForm, "@astrojs/react");

function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
  title
}) {
  return /* @__PURE__ */ jsxs(FormWrapper, {
    title: "Verify Your Details",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Street"
      }), /* @__PURE__ */ jsx("input", {
        autoFocus: true,
        required: true,
        type: "text",
        value: street,
        onChange: (e) => updateFields({
          street: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "City"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: city,
        onChange: (e) => updateFields({
          city: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "State"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: state,
        onChange: (e) => updateFields({
          state: e.target.value
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "field-wrapper",
      children: [/* @__PURE__ */ jsx("label", {
        children: "Zip"
      }), /* @__PURE__ */ jsx("input", {
        required: true,
        type: "text",
        value: zip,
        onChange: (e) => updateFields({
          zip: e.target.value
        })
      })]
    })]
  });
}
__astro_tag_component__(AddressForm, "@astrojs/react");

const MultiStepForm = () => {
  const {
    step,
    steps,
    isFirstStep,
    isLastStep,
    currentStepIndex,
    next,
    prev
  } = useMultistepForm([/* @__PURE__ */ jsx(UserForm, {}, 1), /* @__PURE__ */ jsx(AddressForm, {}, 2), /* @__PURE__ */ jsx(AccountForm, {}, 3)]);
  function submitForm(e) {
    e.preventDefault();
    next();
  }
  const stepTitle = ["Information", "CV", "Questions"];
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("form", {
      onSubmit: submitForm,
      children: [/* @__PURE__ */ jsx("div", {
        className: "form_steps-container",
        children: steps.map((step2, index) => /* @__PURE__ */ jsxs("div", {
          className: "form_step-wrapper",
          children: [/* @__PURE__ */ jsx("div", {
            className: `form__step-box ${currentStepIndex == index ? "active" : ""}`,
            children: /* @__PURE__ */ jsx("span", {
              className: "step-num",
              children: index + 1
            })
          }), /* @__PURE__ */ jsx("h6", {
            children: stepTitle[index]
          })]
        }))
      }), /* @__PURE__ */ jsxs("span", {
        className: "steps-counter",
        children: ["step ", currentStepIndex + 1, " / ", steps.length]
      }), /* @__PURE__ */ jsxs("div", {
        className: "bottom-container",
        children: [step, /* @__PURE__ */ jsxs("div", {
          className: "btns-container",
          children: [!isFirstStep && /* @__PURE__ */ jsx("button", {
            className: "prev-btn",
            type: "button",
            onClick: prev,
            children: "Back"
          }), /* @__PURE__ */ jsx("button", {
            className: "next-btn",
            type: "submit",
            children: isLastStep ? "Finish" : "Next Step"
          })]
        })]
      })]
    })
  });
};
__astro_tag_component__(MultiStepForm, "@astrojs/react");

const $$Astro = createAstro();
const $$JobApplication = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JobApplication;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")} class="astro-IKEPWYPJ">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application</title>
${renderHead($$result)}</head>
<body class="astro-IKEPWYPJ">
    
<section class="job-container astro-IKEPWYPJ">
    <div class="con-col astro-IKEPWYPJ">
        <div class="left-col astro-IKEPWYPJ">
            <img src="/job1.jpg" alt="" class="astro-IKEPWYPJ">
        </div>
        <div class="right-col astro-IKEPWYPJ">
            ${renderComponent($$result, "MultiStepForm", MultiStepForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/components/Form/MultiStepForm", "client:component-export": "default", "class": "astro-IKEPWYPJ" })}
        </div>

    </div>
</section>


</body></html>`;
}, "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/job-application.astro");

const $$file = "C:/Users/malok/Desktop/Astro-Portfolio-Website/src/pages/en/job-application.astro";
const $$url = "/en/job-application";

export { $$JobApplication as default, $$file as file, $$url as url };

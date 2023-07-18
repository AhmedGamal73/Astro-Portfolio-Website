import Faq from "react-faq-component";

const data = {
  title: "Frequently Asked Questions In Audit",
  rows: [
    {
      title: "What types of tax services do you offer?",
      content: `We offer a wide range of tax services, including tax preparation, tax planning, tax consulting, tax compliance, and tax representation. Whether you are an individual or a business, we have the expertise to assist you with your tax-related needs.`,
    },
    {
      title: "Why I need to focus in this area ?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How can your tax services benefit me or my business?",
      content: `Our tax services can provide several benefits. We can help you maximize your tax deductions and credits, optimize your tax strategies, ensure compliance with tax laws and regulations, minimize tax liabilities, and provide expert advice to support your financial goals and objectives. `,
    },
    {
      title: "What sets your tax services apart from others?",
      content: `Our tax services are distinguished by our extensive knowledge, experience, and personalized approach. We take the time to understand your unique tax situation and tailor our services to meet your specific needs. Our team stays updated with the latest tax laws and regulations to provide accurate and up-to-date advice.`,
    },
    {
      title:
        "How do you ensure confidentiality and security of my tax information?",
      content: `We prioritize the confidentiality and security of your tax information. We have strict data protection protocols in place to safeguard your sensitive financial data. Our systems and processes comply with industry standards to ensure your information remains secure and confidential at all times.`,
    },
    {
      title: "How can I get started with your tax services?",
      content:
        " Getting started with our tax services is easy. Simply reach out to our team to schedule an initial consultation. During the consultation, we will discuss your tax needs, gather the necessary information, and provide guidance on the next steps. We aim to make the process seamless and efficient for our clients.",
    },
  ],
};

const styles = {
  bgColor: "transparent",
  titleTextColor: "var(--prim1)",
  rowTitleColor: "var(--prim2)",
  rowContentColor: "grey",
  arrowColor: "var(--prim2)",
};

const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
  tabFocus: true,
};

const TaxesFAQ = () => {
  return <Faq data={data} styles={styles} config={config} />;
};

export default TaxesFAQ;

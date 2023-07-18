import Faq from "react-faq-component";

const data = {
  title: "FAQ About Jobs",
  rows: [
    {
      title: "What services do you offer?",
      content: `We offer a comprehensive range of services, including bookkeeping, tax preparation, financial consulting, auditing, and job placement assistance. Our services are designed to meet the diverse needs of businesses and individuals, providing expert guidance and support in various financial and employment areas.`,
    },
    {
      title: "How experienced is your team?",
      content:
        "Our team consists of highly experienced professionals with extensive knowledge and expertise in their respective fields. Each team member brings years of practical experience and a deep understanding of industry best practices. We are committed to delivering exceptional service by leveraging our collective expertise to meet the unique needs of our clients.",
    },
    {
      title: "What industries do you specialize in?",
      content: `We cater to clients across a wide range of industries, including finance, healthcare, technology, manufacturing, retail, and more. Our services are tailored to address the specific requirements and challenges of each industry, ensuring that we provide relevant and effective solutions.`,
    },
    {
      title: "How do you ensure data confidentiality and security?",
      content:
        "Data confidentiality and security are of utmost importance to us. We have robust measures in place to protect the confidentiality and integrity of client data. Our systems and processes adhere to industry standards and best practices, ensuring that sensitive information is securely stored and accessed only by authorized personnel.",
    },
    {
      title: "How can I get started with your services?",
      content:
        "Getting started with our services is easy. Simply reach out to our team via phone or email, and we will schedule an initial consultation to discuss your specific needs and goals. During the consultation, we will provide an overview of our services, answer any additional questions you may have, and develop a tailored plan to meet your requirements.",
    },
    {
      title: "What types of tax services do you offer?",
      content:
        "We offer a comprehensive range of tax services, including tax preparation, tax planning, tax compliance, and tax advisory services. Whether you are an individual or a business, our experienced tax professionals can assist you with navigating the complexities of tax laws and regulations.",
    },
    {
      title: " Can you help with both personal and business taxes?",
      content:
        " Yes, we provide tax services for both personal and business taxes. Our team is well-versed in the intricacies of individual tax returns, as well as corporate, partnership, and small business taxes. We can help ensure accurate tax reporting, identify deductions and credits, and optimize your tax strategies.",
    },
    {
      title: "How can your tax services benefit me or my business?",
      content:
        "Our tax services offer several benefits. For individuals, we can help maximize your tax deductions, ensure compliance with tax laws, and potentially increase your tax refund. For businesses, we can assist with minimizing tax liabilities, optimizing tax planning strategies, and staying up-to-date with changing tax regulations, ultimately helping you achieve tax efficiency.",
    },
    {
      title: "Are you familiar with local and international tax regulations?",
      content:
        "Yes, our tax professionals have expertise in local tax regulations specific to the region we operate in. Additionally, we are equipped to handle international tax matters, including cross-border transactions, expatriate taxation, and compliance with tax treaties. We stay informed about tax laws to provide accurate and up-to-date advice.",
    },
    {
      title: "What sets your tax services apart from others?",
      content:
        "Our tax services are distinguished by our deep knowledge, personalized approach, and attention to detail. We take the time to understand your unique tax situation, tailoring our services to meet your specific needs. Our goal is to provide comprehensive tax solutions that optimize your tax position and provide peace of mind during tax season.",
    },
    {
      title: "What career services do you offer?",
      content:
        "Our career services encompass a range of offerings to support individuals in their career development. We provide resume writing and optimization, cover letter assistance, interview coaching, job search strategies, and career counseling. Our goal is to equip individuals with the tools and knowledge needed to succeed in their job search and career advancement.",
    },
    {
      title: "Can you help me with career transitions or job changes?",
      content:
        "Absolutely! We specialize in assisting individuals with career transitions and job changes. Whether you are switching industries, seeking a promotion, or exploring new opportunities, our career services can provide guidance and support to help you navigate the transition successfully.",
    },
    {
      title: "What courses do you offer, and who are they suitable for?",
      content:
        "We offer a diverse range of courses covering various topics such as finance, accounting, marketing, leadership, and professional development. Our courses cater to individuals at different career stages, from entry-level to experienced professionals. They are designed to enhance skills, expand knowledge, and empower career growth.",
    },
    {
      title: "Are the courses self-paced or instructor-led?",
      content:
        "Our courses can be offered in both formats. We provide both self-paced online courses for individuals who prefer a flexible learning experience, as well as instructor-led courses for those who value interactive sessions and direct guidance from experienced instructors.",
    },
    {
      title:
        " How can I enroll in your courses or access your career services?",
      content:
        "Enrolling in our courses or accessing our career services is easy. Simply visit our website and browse through the available courses or career services sections. You can find detailed information about each offering and the enrollment process. If you have any specific questions or need assistance, our team is ready to support you via phone, email, or in-person consultations.",
    },
  ],
};

const styles = {
  bgColor: "var(--bgc)",
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

const GeneralFAQ = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default GeneralFAQ;

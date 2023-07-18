import Faq from "react-faq-component";

const data = {
  title: "FAQ About Jobs",
  rows: [
    {
      title: "What types of job positions do you specialize in?",
      content: `We specialize in a wide range of job positions across various industries, including finance, marketing, IT, administration, sales, and more. Our expertise covers both entry-level and senior-level positions.`,
    },
    {
      title: "How can your job services benefit me in my job search?",
      content:
        "Our job services provide several benefits. We offer personalized assistance in crafting compelling resumes and cover letters tailored to specific job opportunities. We also provide guidance on effective job search strategies, interview preparation techniques, and networking tips. Our goal is to enhance your job search efforts and increase your chances of landing your desired job.",
    },
    {
      title:
        "Do you have connections with employers and access to job openings?",
      content: `Yes, we have established relationships with employers across various industries. We actively seek and maintain connections to stay informed about job openings. We leverage these connections to help match qualified candidates with relevant job opportunities.`,
    },
    {
      title: "How confidential is my job search with your company?",
      content: (
        <p>
          We prioritize confidentiality throughout the job search process. Your
          personal information and job search details are treated with utmost
          confidentiality. We ensure that your data is securely stored and only
          shared with potential employers with your consent.
        </p>
      ),
    },
    {
      title: "What sets your job services apart from other providers?",
      content: (
        <p>
          To access and submit our job application form, please visit our
          website at
          <a
            target="_blank"
            href="https://www.businesspartners-eg.com/en/job-application"
          >
            https:///en/job-application
          </a>
          . On the webpage, you will find the application form with fields to
          fill in your personal information, work experience, skills, and any
          additional documents required. Complete the form thoroughly and
          accurately, ensuring that all necessary details are provided. Once you
          have filled out the form, click the submit button to send your
          application to our team for review.
        </p>
      ),
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

const JobFAQ = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default JobFAQ;

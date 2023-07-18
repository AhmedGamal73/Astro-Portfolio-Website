import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What is Bookkeeping ?",
      content: `A: Bookkeeping is the process of recording, organizing, and maintaining financial transactions and records for a business or organization. It involves tracking income, expenses, assets, and liabilities to ensure accurate financial reporting.`,
    },
    {
      title: "Why I need to focus in this area ?",
      content: "What is bookkeeping?",
      "bookkeeping.answer2":
        "A: Bookkeeping is crucial for businesses as it provides an accurate picture of their financial health. It helps track income and expenses, identify cash flow patterns, manage budgets, make informed business decisions, and fulfill tax obligations. Proper bookkeeping also ensures transparency, facilitates financial analysis, and helps with future planning.",
    },
    {
      title: "What does a bookkeeper do?",
      content: `A: Outsourcing bookkeeping services offers several benefits. It allows businesses to focus on their core operations while leaving the financial tasks to experts. Outsourcing ensures accuracy, saves time and resources, provides access to specialized knowledge, enhances data security, and offers scalability as the business grows. It also helps maintain compliance with accounting regulations and reduces the risk of errors.`,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "Should I do my own bookkeeping?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "What is key benefits of bookkeeping ?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
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

const BookkeepingFAQ = () => {
  return <Faq data={data} styles={styles} config={config} />;
};

export default BookkeepingFAQ;

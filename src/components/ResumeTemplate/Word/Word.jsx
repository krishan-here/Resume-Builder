import s from './Word.module.css';

function WordTemplate() {
  return (
    <div className={s.page}>
      <div className={s.main_head}>
        <h1>Krishan Murari Barnwal</h1>
        <div className={s.contact_section}>
          <p>krishanmurari.b@valuelabs.com</p>
          <p>(+91) 9564122990</p>
        </div>
      </div>

      <div className={s.section}>
        <div className={s.header}>
          <h2>Experience</h2>
        </div>

        <ul>
          <li className={s.list_item}>
            <h3>Software Engineer Specialist | Valuelabs, Hyderabad</h3>
          </li>
          <li className={s.list_item}>
            <h3>Frontend Developer Intern | ByteLearn</h3>
          </li>
        </ul>
      </div>

      <div className={s.section}>
        <div className={s.header}>
          <h2>Projects</h2>
        </div>
        <ul>
          <li className={s.list_item}>
            <h3>Amazon Ad Labs | Harris Insights</h3>
            <p>
              XCM-Adlabs is a dynamic tool for stakeholders to view and analyse
              projected ads, featuring fast data mining, customizable
              parameters, and convenient report downloads in PDF formats.
            </p>
          </li>
          <li className={s.list_item}>
            <h3>Amplify | Shaw Systems</h3>
            <p>
              Shaw Systems needs a customer facing solution that allows them to
              manage their customer information, see account information, manage
              communication preferences and more.
            </p>
          </li>
          <li className={s.list_item}>
            <h3>AiDE BoltChat POC</h3>
            <p>
              The Conversational AI Chatbot Development project aimed to create
              an intelligent chatbot capable of engaging in natural language
              conversations with users. The chatbot was designed to assist users
              with inquiries, provide information, and offer support within a
              predefined domain or topic area.
            </p>
          </li>
        </ul>
      </div>

      <div className={s.section}>
        <div className={s.header}>
          <h2>Skills</h2>
        </div>
        <ul className={s.skill_list}>
          <li>React</li>
          <li>Java</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className={s.section}>
        <div className={s.header}>
          <h2>Education</h2>
        </div>
        <ul>
          <li className={s.list_item}>
            <h3>
              Computer Science & Engineering | Acropolis Institute of Technology
              and Research
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WordTemplate;

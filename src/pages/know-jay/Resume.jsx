import React from "react";

const books = [
  "Clean Architecture",
  "Clean Code",
  "Design Patterns",
  "JavaScript: The Good Parts",
  "JavaScript: The Bad Parts",
  "Clockwork",
  "Boundaries",
  "The Captains Class",
  "How to Win Friends and Influence People",
];

const skills = [
  "DevOps",
  "Unit Testing",
  "Integration Testing",
  "Design Principles",
  "Data Pipeline Architecture",
  "Cloud Architecture",
  "C#",
  "AWS",
  "Node",
  "React",
  "PHP & Laravel",
  "Typescript",
  "NestJS",
  "UI/UX Design",
  "Hiring & Managing",
  "PostgreSQL",
  "MySql",
  "UML Architecture",
  "Scrum",
  "Enterprise Architect",
  "IoT/MQTT",
  "Figma",
  "Jira",
  "Confluence",
  "Google Cloud Suite",
  "Linux",
  "Express",
];

const experiences = [
  {
    company: "Lion Energy",
    title: "Senior Engineer, Architect & Head of Technology",
    years: "2021-2024",
    applications:
      "React, Node, Postgres, and AWS (IoT Core, Timestream, IAM, Cognito)",
    highlights: [
      "Hired, mentored, and occasionally dismissed 12 developers over 3 years.",
      "Engineered & architected (UML/SysML) the MVP, V1, and V2 Lion Energy API/Web.",
      "Directed and built cybersecurity, data, web, API, and mobile teams.",
      "Implemented cybersecurity standards, testing standards, release strategies, and scrum processes while writing thousands of lines of tested code.",
    ],
  },
  {
    company: "Lion Energy",
    title: "Lead Senior Engineer / DevOps",
    years: "2020-2021",
    applications:
      "PHP, Laravel, JS, Vue, Tailwind, React, and Netsuite (ERP), EC2, AWS",
    highlights: [
      "Solo wrote a portal and backend that processed over $50M in orders annually.",
      "Solo managed all devOps, releases, unit testing, architecture, and development.",
      "Managed all devOps, releases, unit testing, architecture, and development.",
      "Enhanced and maintained Netsuite integrations.",
      "Interfaced with all stakeholders, C-suite, and 3rd party companies ensuring all requirements met and stakeholders satisfied.",
    ],
  },
  {
    company: "ReminderDental",
    title: "Software Engineer",
    years: "2016-2020",
    applications:
      "PHP, C#, Laravel, JS, and Bootstrap, Local/Remote Linux Boxes",
    highlights: [
      "Took the project from inception to servicing over 200K dental patients with reminder texts, calls, emails with social media integration for feedback.",
      "Wrote all QA for the company including integration and unit tests",
      "Added and maintained cron workers, external facing API services, and migrations. Was Lead UI/UX.",
      "Communicated directly with high-profile clients and managed all ticket resolution",
    ],
  },
  {
    company: "Courseaver",
    title: "FULL STACK DEVELOPER",
    years: "2014-2016",
    applications: "PHP, Laravel, JS, Bootstrap, and jQuery",
    highlights: [
      "Transitioned SaaS student test prep software from deprecated version to modern version (Laravel 4.2 to 7) while removing technical debt",
      "Brought repo into Object Oriented Programming and mentored other devs.",
    ],
  },
];

const Experience = ({ company, title, years, applications, highlights }) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-medium uppercase mt-0 mb-1 dark:text-gray-400">
        {title}
      </h3>
      <p className="text-sm font-medium mb-1">
        {company} {years}
      </p>
      <p>
        <span className="text-sm">Worked in: </span>
        {applications}
      </p>
      <ul className="list-disc list-inside">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

const Resume = () => {
  return (
    <>
      <div className="bg-neutral-50 text-gray-800 dark:bg-neutral-800 dark:text-gray-200 min-h-screen p-8">
        <div className="max-w-4xl mx-auto bg-white bg-stone-50 dark:bg-neutral-900 shadow-xl rounded-lg p-16">
          <header className="mb-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-3xl mb-5 font-mono">jay.lara</h1>
                <h2 className="text-xl text-gray-600 dark:text-gray-400 font-mono uppercase">
                  Senior Software Engineer & Architect
                </h2>
              </div>
              <div className="text-right text-sm">
                <p className="mt-2">
                  <a href="mailto:jamesdlaraiii@gmail.com">
                    jamesdlaraiii@gmail.com
                  </a>
                </p>
                <p>480.309.1250</p>
                <p>Saratoga Springs, UT</p>
              </div>
            </div>
            <div className="text-sm mt-2">
              <p>
                Full-Stack engineer and architect with over 11 years of
                experience seeking a remote role with an equally passionate
                team. Skilled in architecture, testing, design patterns, clean
                code, business, servant leadership, learning and growth,
                communication, psychology, and people. Has worn many hats - full
                stack developer, team lead, architect, and manager. An observant
                and astute thinker with a people & business first mindset.
                Software Engineer or Manager Position.
              </p>
            </div>
          </header>

          <hr className="mb-4 border-gray-500 dark:border-gray-400" />

          <div className="flex justify-around mb-4">
            <aside className="uppercase text-sm font-medium">Skills</aside>
            <div className="ml-14 text-sm">{skills.join(", ")}</div>
          </div>

          <hr className="mb-4 border-gray-500 dark:border-gray-400" />

          <div className="flex justify-around mb-4">
            <aside className="uppercase text-sm font-medium">Experience</aside>
            <div className="ml-4">
              {experiences.map((exp, index) => (
                <Experience
                  key={index}
                  company={exp.company}
                  title={exp.title}
                  years={exp.years}
                  applications={exp.applications}
                  highlights={exp.highlights}
                />
              ))}
            </div>
          </div>

          <hr className="mb-4 border-gray-500 dark:border-gray-400" />

          <div className="flex justify-around mb-4">
            <aside className="uppercase text-sm font-medium">Education</aside>
            <div className="ml-4">
              <p className="text-sm">
                My education spans multiple disciplines, shaped by influential
                mentors, authors, and life experiences. Below are the key books
                that have been a repeated source of guidance and insight.
              </p>
              <p>
                <span className="text-sm italic font-medium">
                  {books.join(", ")}
                </span>
                , and many more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

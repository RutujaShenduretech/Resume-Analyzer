"use client";

import { Briefcase, Users, Code2, Search } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Accordion from "@/components/Accordian";

export const hrQuestions = [
  {
    question: "Tell me about yourself.",
    answer:
      "Start with your education, mention your relevant skills, internship/projects, and end with your career goals. Keep it concise (1–2 minutes)."
  },
  {
    question: "Why should we hire you?",
    answer:
      "Highlight your technical skills, problem-solving ability, willingness to learn, and how you can contribute to the company's goals."
  },
  {
    question: "What are your strengths?",
    answer:
      "Mention strengths relevant to the job, such as adaptability, teamwork, communication, quick learning, and problem-solving, with an example."
  },
  {
    question: "What are your weaknesses?",
    answer:
      "Choose a genuine weakness that you're actively improving. For example, 'I used to hesitate while speaking in public, so I regularly practice presentations.'"
  },
  {
    question: "Where do you see yourself in 5 years?",
    answer:
      "Express your goal of growing into a skilled professional, taking on greater responsibilities, and contributing to the organization's success."
  },
  {
    question: "Why do you want to join our company?",
    answer:
      "Mention the company's reputation, learning opportunities, innovative projects, and how your skills align with the role."
  },
  {
    question: "Describe a challenging situation you faced.",
    answer:
      "Use the STAR method (Situation, Task, Action, Result) to explain how you solved a problem effectively."
  },
  {
    question: "How do you handle pressure?",
    answer:
      "Explain that you prioritize tasks, stay organized, remain calm, and focus on finding practical solutions under pressure."
  },
  {
    question: "Why are you leaving your current job/internship?",
    answer:
      "Keep your answer positive by saying you're looking for better learning opportunities, career growth, and new challenges."
  },
  {
    question: "Do you have any questions for us?",
    answer:
      "Ask thoughtful questions such as: 'What does success look like in this role?' or 'What learning opportunities does the company provide?'"
  },

  {
    question: "Where do you see yourself in the next 5 years?",
    answer:
      "Explain that you want to become a skilled professional, take on more responsibilities, and contribute to the company's growth."
  },
  {
    question: "Describe a challenging situation and how you handled it.",
    answer:
      "Use the STAR method (Situation, Task, Action, Result) to explain a real challenge and how you successfully resolved it."
  },
  {
    question: "How do you handle pressure and deadlines?",
    answer:
      "I prioritize tasks, stay organized, remain calm, and focus on completing work efficiently while maintaining quality."
  },
  {
    question: "Why are you leaving your current job or internship?",
    answer:
      "Keep your answer positive by saying you're looking for better learning opportunities, career growth, and new challenges."
  },
  {
    question: "What motivates you?",
    answer:
      "Learning new technologies, solving real-world problems, working with a great team, and continuously improving my skills motivate me."
  },
  {
    question: "How do you prioritize your work?",
    answer:
      "I prioritize tasks based on urgency and importance, create a schedule, and track progress to ensure deadlines are met."
  },
  {
    question: "Are you comfortable working in a team?",
    answer:
      "Yes. I enjoy collaborating with team members, sharing ideas, learning from others, and contributing toward common goals."
  },
  {
    question: "What is your biggest achievement?",
    answer:
      "Talk about your internship, academic project, certification, hackathon, or any accomplishment where your contribution made a positive impact."
  }

];

export const gdTopics = [
  {
    question: "Artificial Intelligence (AI)",
    answer:
      "AI is transforming industries by automating repetitive tasks, improving healthcare, education, and customer service. However, it also raises concerns about job displacement, data privacy, and ethical decision-making."
  },
  {
    question: "Work From Home vs Office Work",
    answer:
      "Work from home offers flexibility and better work-life balance, while office work promotes collaboration, communication, and team bonding. A hybrid model combines the advantages of both."
  },
  {
    question: "Climate Change",
    answer:
      "Climate change is caused by greenhouse gas emissions and deforestation. Solutions include renewable energy, afforestation, sustainable development, and reducing carbon footprints."
  },
  {
    question: "Electric Vehicles (EVs)",
    answer:
      "Electric vehicles reduce pollution and fuel dependency. Challenges include charging infrastructure, battery costs, and limited driving range in some regions."
  },
  {
    question: "Digital India",
    answer:
      "Digital India aims to improve online services, digital literacy, e-governance, and internet accessibility while promoting a cashless economy and technological growth."
  },
  {
    question: "Women Empowerment",
    answer:
      "Women empowerment focuses on equal opportunities in education, employment, leadership, and decision-making while ensuring safety, equality, and financial independence."
  },
  {
    question: "Social Media: Boon or Bane",
    answer:
      "Social media improves communication, learning, and networking but also contributes to misinformation, addiction, cyberbullying, and privacy concerns."
  },
  {
    question: "Cashless Economy",
    answer:
      "A cashless economy promotes digital payments, transparency, and convenience. Challenges include cybersecurity risks, internet dependency, and digital literacy."
  },
  {
    question: "Startup India",
    answer:
      "Startup India encourages entrepreneurship through funding, tax benefits, and innovation. It helps create jobs and strengthens the country's economy."
  },
  {
    question: "Cyber Security",
    answer:
      "Cyber security protects systems and data from cyber attacks. Strong passwords, multi-factor authentication, software updates, and user awareness are essential for online safety."
  },
  {
    question: "Online Education vs Traditional Education",
    answer:
      "Online education provides flexibility and accessibility, while traditional education offers face-to-face interaction, practical learning, and better classroom engagement."
  },
  {
    question: "Cryptocurrency",
    answer:
      "Cryptocurrency enables decentralized digital transactions using blockchain technology. While it offers security and transparency, it also faces challenges such as price volatility and regulatory concerns."
  },
  {
    question: "Artificial Intelligence Replacing Human Jobs",
    answer:
      "AI automates repetitive work and increases productivity, but it also creates new job opportunities requiring advanced technical skills. Upskilling is essential for future careers."
  },
  {
    question: "Importance of Soft Skills",
    answer:
      "Soft skills like communication, teamwork, leadership, adaptability, and problem-solving are crucial for career growth and workplace success."
  },
  {
    question: "Is Social Media Affecting Mental Health?",
    answer:
      "Excessive social media usage may lead to stress, anxiety, and reduced productivity, while responsible usage can support learning, networking, and professional growth."
  }
];
export const technicalQuestions = [
  {
    category: "HTML",
    questions: [
      {
        question: "What is HTML?",
        answer: "HTML (HyperText Markup Language) is the standard markup language used to create web pages."
      },
      {
        question: "What are Semantic Tags?",
        answer: "Semantic tags like <header>, <section>, <article>, and <footer> describe the meaning of content."
      },
      {
        question: "What is the difference between id and class?",
        answer: "An id is unique and used for one element, while a class can be applied to multiple elements."
      },
      {
        question: "What is the purpose of the alt attribute?",
        answer: "The alt attribute provides alternative text for images, improving accessibility and SEO."
      },
      {
        question: "What are Meta Tags?",
        answer: "Meta tags provide metadata such as description, keywords, and viewport settings."
      }
    ]
  },

  {
    category: "CSS",
    questions: [
      {
        question: "What is the Box Model?",
        answer: "The CSS Box Model consists of content, padding, border, and margin."
      },
      {
        question: "Difference between Flexbox and Grid?",
        answer: "Flexbox is one-dimensional, while Grid is two-dimensional."
      },
      {
        question: "What is Position in CSS?",
        answer: "Position defines how an element is placed. Values include static, relative, absolute, fixed, and sticky."
      },
      {
        question: "What is z-index?",
        answer: "z-index controls the stacking order of positioned elements."
      },
      {
        question: "What is Responsive Design?",
        answer: "Responsive design ensures a website adapts to different screen sizes using media queries and flexible layouts."
      }
    ]
  },

  {
    category: "JavaScript",
    questions: [
      {
        question: "Difference between var, let, and const?",
        answer: "var is function-scoped, let is block-scoped, and const cannot be reassigned."
      },
      {
        question: "What is Hoisting?",
        answer: "Hoisting moves variable and function declarations to the top of their scope before execution."
      },
      {
        question: "What is Closure?",
        answer: "A closure allows a function to access variables from its outer scope even after the outer function has executed."
      },
      {
        question: "What is a Promise?",
        answer: "A Promise represents the eventual completion or failure of an asynchronous operation."
      },
      {
        question: "Difference between == and ===?",
        answer: "== compares values after type conversion, while === compares both value and type."
      }
    ]
  },

  {
    category: "React",
    questions: [
      {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces using reusable components."
      },
      {
        question: "What is JSX?",
        answer: "JSX is a syntax extension that allows writing HTML-like code inside JavaScript."
      },
      {
        question: "What are React Hooks?",
        answer: "Hooks let functional components use state and lifecycle features."
      },
      {
        question: "What is useEffect?",
        answer: "useEffect performs side effects such as API calls and event listeners."
      },
      {
        question: "What is Virtual DOM?",
        answer: "Virtual DOM is a lightweight copy of the real DOM used for efficient updates."
      }
    ]
  },

  {
    category: "Next.js",
    questions: [
      {
        question: "What is Next.js?",
        answer: "Next.js is a React framework for building full-stack applications."
      },
      {
        question: "What is Server-Side Rendering (SSR)?",
        answer: "SSR generates HTML on the server for each request."
      },
      {
        question: "What is Static Site Generation (SSG)?",
        answer: "SSG generates HTML during the build process."
      },
      {
        question: "What is App Router?",
        answer: "App Router is the new routing system introduced in Next.js 13+ using the app directory."
      },
      {
        question: "Why use Next.js?",
        answer: "It provides routing, SEO, API routes, server components, and optimized performance."
      }
    ]
  },

  {
    category: "PostgreSQL",
    questions: [
      {
        question: "What is PostgreSQL?",
        answer: "PostgreSQL is an open-source relational database management system."
      },
      {
        question: "Difference between DELETE, TRUNCATE, and DROP?",
        answer: "DELETE removes rows, TRUNCATE removes all rows quickly, and DROP deletes the table."
      },
      {
        question: "What is a Primary Key?",
        answer: "A primary key uniquely identifies each record in a table."
      },
      {
        question: "What is a Foreign Key?",
        answer: "A foreign key creates a relationship between two tables."
      },
      {
        question: "What is Normalization?",
        answer: "Normalization organizes data to reduce redundancy and improve integrity."
      }
    ]
  },

  {
    category: "Drizzle ORM",
    questions: [
      {
        question: "What is Drizzle ORM?",
        answer: "Drizzle is a lightweight TypeScript ORM for SQL databases."
      },
      {
        question: "Why use Drizzle?",
        answer: "It provides type safety, excellent performance, and simple SQL queries."
      },
      {
        question: "What is a Schema in Drizzle?",
        answer: "A schema defines database tables and columns using TypeScript."
      },
      {
        question: "How do you create migrations?",
        answer: "Using drizzle-kit generate and drizzle-kit migrate commands."
      },
      {
        question: "Which databases does Drizzle support?",
        answer: "PostgreSQL, MySQL, SQLite, Turso, Neon, PlanetScale, and others."
      }
    ]
  },

  {
    category: "Operating System",
    questions: [
      {
        question: "What is an Operating System?",
        answer: "An operating system manages hardware, software, and system resources."
      },
      {
        question: "What is a Process?",
        answer: "A process is a program currently being executed."
      },
      {
        question: "What is a Thread?",
        answer: "A thread is the smallest unit of CPU execution within a process."
      },
      {
        question: "What is Deadlock?",
        answer: "Deadlock occurs when processes wait indefinitely for each other's resources."
      },
      {
        question: "What is Virtual Memory?",
        answer: "Virtual memory extends RAM using disk storage to run larger programs."
      }
    ]
  },

  {
    category: "DBMS",
    questions: [
      {
        question: "What is DBMS?",
        answer: "A Database Management System stores, retrieves, and manages data."
      },
      {
        question: "Difference between DBMS and RDBMS?",
        answer: "RDBMS stores data in related tables, while DBMS may not use relationships."
      },
      {
        question: "What is Normalization?",
        answer: "Normalization removes redundancy and improves database structure."
      },
      {
        question: "What is ACID?",
        answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability."
      },
      {
        question: "What is Indexing?",
        answer: "Indexing improves query performance by allowing faster data retrieval."
      }
    ]
  },

  {
    category: "Computer Networks",
    questions: [
      {
        question: "What is a Computer Network?",
        answer: "A computer network is a group of connected devices that communicate with each other."
      },
      {
        question: "What is an IP Address?",
        answer: "An IP address uniquely identifies a device on a network."
      },
      {
        question: "Difference between TCP and UDP?",
        answer: "TCP is reliable and connection-oriented, while UDP is faster and connectionless."
      },
      {
        question: "What is DNS?",
        answer: "DNS converts domain names into IP addresses."
      },
      {
        question: "What is HTTP vs HTTPS?",
        answer: "HTTPS encrypts communication using SSL/TLS, while HTTP does not."
      }
    ]
  },

  {
    category: "Software Engineering",
    questions: [
      {
        question: "What is SDLC?",
        answer: "Software Development Life Cycle is the process of planning, developing, testing, and maintaining software."
      },
      {
        question: "What is Agile?",
        answer: "Agile is an iterative software development methodology focused on collaboration and continuous delivery."
      },
      {
        question: "What is Waterfall Model?",
        answer: "Waterfall is a sequential software development model where each phase is completed before the next begins."
      },
      {
        question: "What is Version Control?",
        answer: "Version control tracks code changes and enables collaboration."
      },
      {
        question: "What is Unit Testing?",
        answer: "Unit testing verifies that individual functions or modules work correctly."
      }
    ]
  },

  {
    category: "Git & GitHub",
    questions: [
      {
        question: "What is Git?",
        answer: "Git is a distributed version control system used to track code changes."
      },
      {
        question: "What is GitHub?",
        answer: "GitHub is a cloud platform for hosting Git repositories and collaborating on code."
      },
      {
        question: "Difference between Git and GitHub?",
        answer: "Git is the version control tool, while GitHub is an online hosting service for Git repositories."
      },
      {
        question: "What is a Pull Request?",
        answer: "A pull request proposes code changes for review before merging into the main branch."
      },
      {
        question: "Common Git commands?",
        answer: "git init, git clone, git add, git commit, git push, git pull, git branch, git checkout, and git merge."
      }
    ]
  }
];
export default function ResourcesPage() {
  const [search, setSearch] = useState("");

  const filterItems = (items: string[]) =>
    items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main className="min-h-screen bg-sky-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-26">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Interview Resources
          </h1>

          <p className="mt-4 text-lg text-sky-100">
            Prepare for HR Interviews, Group Discussions and Technical Rounds
            with curated resources.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 flex max-w-xl items-center rounded-xl bg-white px-4 py-3 shadow-xl">
            <Search className="mr-3 text-sky-600" size={20} />
            <input
              type="text"
              placeholder="Search interview questions..."
              className="w-full outline-none text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Cards */}

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* HR */}
          <div className="rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="rounded-t-2xl bg-sky-600 p-6 text-white">
              <Briefcase size={40} />
              <h2 className="mt-3 text-2xl font-bold">
                HR Interview Questions
              </h2>
              <p className="mt-2 text-sky-100">
                Frequently asked HR interview questions with confidence tips.
              </p>
            </div>
<div className="space-y-4">
  {hrQuestions.map((item, index) => (
    <Accordion
      key={index}
      question={item.question}
      answer={item.answer}
    />
  ))}
</div>

          </div>

          {/* GD */}
          <div className="rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="rounded-t-2xl bg-sky-500 p-6 text-white">
              <Users size={40} />
              <h2 className="mt-3 text-2xl font-bold">
                Group Discussion Topics
              </h2>
              <p className="mt-2 text-sky-100">
                Trending GD topics with points for discussion.
              </p>
            </div>

            <div className="space-y-4">
  {gdTopics.map((item, index) => (
    <Accordion
      key={index}
      question={item.question}
      answer={item.answer}
    />
  ))}
</div>
          </div>

         

        </div>
      </section>

 {/* Technical */}
       <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-1">


          <div className="rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="rounded-t-2xl bg-gradient-to-r from-sky-600 to-blue-300 to-blue-400 p-6 text-white">
              <Code2 size={40} />
              <h2 className="mt-3 text-2xl font-bold">
                Technical Questions
              </h2>
              <p className="mt-2 text-sky-100">
                Practice common Frontend & Full Stack interview questions.
              </p>
            </div>

          
            <div className="space-y-4">
  {technicalQuestions.map((category) => (
    <div key={category.category} className="space-y-4">
      <h3 className="px-6 pt-5 text-lg font-semibold text-sky-700">
        {category.category}
      </h3>
      {category.questions.map((item, index) => (
        <Accordion
          key={`${category.category}-${index}`}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  ))}
</div>
          </div>
          </div>
          </section>
      {/* Tips */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-sky-600">
            Interview Tips
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-sky-50 p-5">
              <h3 className="font-semibold text-sky-700">
                Communication
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Speak clearly, confidently, and maintain eye contact.
              </p>
            </div>

            <div className="rounded-xl bg-sky-50 p-5">
              <h3 className="font-semibold text-sky-700">
                Company Research
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Understand the company's products, culture, and values.
              </p>
            </div>

            <div className="rounded-xl bg-sky-50 p-5">
              <h3 className="font-semibold text-sky-700">
                Resume Review
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Be ready to explain every project and skill listed.
              </p>
            </div>

            <div className="rounded-xl bg-sky-50 p-5">
              <h3 className="font-semibold text-sky-700">
                Mock Interviews
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Practice with friends or online mock interview platforms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
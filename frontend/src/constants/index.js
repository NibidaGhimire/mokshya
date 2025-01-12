import { 
  javascript, 
  python, 
  reactjs, nodejs, mongodb, typescript, css, html, redux, next, scrimba, coursera, Datacamp}
from "../assets";


// import { IoMdHome } from "react-icons/io";

export const dashitems = [
  {
    id: "home",
    title: "Home",
    path: "/",
    // icon: <IoMdHome />,
  },
  {
    id: "play",
    title: "Play",
    path: "/play",
    // icon: <IoMdHome />,
  },
  {
    id: "learn",
    title: "Learn",
    path: "/learn",
    // icon: <IoMdHome />,
  },
  {
    id: "profile",
    title: "Profile",
    path: "/profile",
    // icon: <IoMdHome />,
  },
  {
    id: "buy",
    title: "Buy",
    path: "/buy",
    // icon: <IoMdHome />,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    // icon: <IoMdHome />,
  },
];


export const languages = [
  {
    id: 1,
    path: "play/javascript",
    title: "JavaScript",
    description:
      "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
    img: javascript,
    button: "Continue",
  },
  {
    id: 2,
    path: "play/python",
    title: "Python",
    description:
      "Python is an interpreted, high-level and general-purpose programming language. ",
    img: python,
    button: "Start",
  },
  {
    id: 3,
    path: "play/typescript",
    title: "TypeScript",
    description:
      "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
    img: typescript,
    button: "Start",
  },
  {
    id: 4,
    path: "play/css",
    title: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    img: css,
    button: "Start",
  },
  {
    id: 5,
    path: "play/html",
    title: "HTML",
    description:
      "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
    img: html,
    button: "Start",
  },
];


export const frameworksndb = [
  {
    id: 1,
    path: "play/reactjs",
    title: "ReactJS",
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
    img: reactjs,
    button: "Start",
  },
  {
    id: 2,
    path: "play/nodejs",
    title: "NodeJS",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    img: nodejs,
    button: "Start",
  },
  {
    id: 3,
    path: "play/mongodb",
    title: "MongoDB",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    img: mongodb,
    button: "Start",
  },
  {
    id: 4,
    path: "play/redux",
    title: "Redux",
    description:
      "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    img: redux,
    button: "Start",
  },
  {
    id: 5,
    path: "play/next",
    title: "NextJS",
    description:
      "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
    img: next,
    button: "Start",
  },
];

export const courses = [
  {
    id: 1,
    title: "Scrimba",
    description:
      "Master ReactJS with Scrimba",
    img: scrimba,
    button: "Start",
  },
  {
    id: 2,
    title: "Datacamp",
    description:
      "Learn Machine Learning with Datacamp",
    img: Datacamp,
    button: "Start",
  },
  {
    id: 3,
    title: "Coursera",
    description:
      "Learn Django with Coursera",
    img: coursera,
    button: "Start",
  }
];
// import {
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   starbucks,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
// } from "../assets";
import { creator } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "../../images/web.png",
  },
  {
    title: "React Native Developer",
    icon: "../../images/mobile.png",
  },
  {
    title: "Backend Developer",
    icon: "../../images/backend.png",
  },
  {
    title: "Content ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "../../images/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "../../images/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "../../images/tech/javascript.png",
  },
  // {
  //   name: "TypeScript",
  //   icon: "../../images/tech/typescript.png",
  // },
  {
    name: "React JS",
    icon: "../../images/tech/reactjs.png",
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: "../../images/tech/redux.png",
  // },
  {
    name: "Tailwind CSS",
    icon: "../../images/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "../../images/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "../../images/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "../../images/tech/threejs.svg",
  },
  {
    name: "git",
    icon: "../../images/tech/git.png",
  },
  // {
  //   name: "figma",
  //   icon: "../../images/tech/figma.png",
  // },
  // {
  //   name: "docker",
  //   icon: "../../images/tech/docker.png",
  // },
];

const experiences = [
  {
    title: "React.js Certifacation",
    company_name: "Altcademy",
    icon: "../../images/altcademy.png",
    iconBg: "#383E56",
    date: "40hrs",
    points: [
      "Have built dozens responsive and interactive web applications, providing a smooth user experience.",
      "I've gained a thorough understanding of React basics, and have applied React Hooks such as useState and useEffect to manage state and side effects in functional components. ",
      "Built high-performance, pre-rendered websites using Next.js",
      "Developed server-rendered React applications to improve SEO performance.",
    ],
  },
  {
    title: "Ruby on Rails certifacation",
    company_name: "Altademy",
    icon: "../../images/altcademy.png",
    iconBg: "#E6DEDD",
    date: "50hrs",
    points: [
      "Developed multiple full-stack web applications using Ruby on Rails, delivering a robust, scalable backend.",
      "Developed and maintained several RESTful APIs, effectively handling request routing, data serialization, and response generation.",
      "Successfully managed application logic, data, and presentation using Rails' MVC architecture, improving application modularity and maintainability.",
      "Designed and implemented complex routing rules and managed corresponding controller actions for efficient request handling.",
    ],
  },
  {
    title: "Javascript certifacation",
    company_name: "Altcademy",
    icon: "../../images/altcademy.png",
    iconBg: "#383E56",
    date: "50hrs",
    points: [
      "Used modern JavaScript syntax and features such as arrow functions, classes, modules, template literals, spread/rest operators, destructuring, promises, async/await in various web development projects.",
      "Frequently used DOM manipulation to dynamically modify HTML and CSS, allowing for interactive and responsive user interfaces.",
      "Used asynchronous techniques to handle network requests, file I/O, and other long-running tasks, improving the overall performance of applications.",
      "Successfully implemented several features that require fetching data from APIs, understanding how to handle both success and error responses.",
    ],
  },
  {
    title: "Full stack certifacation",
    company_name: "Altcademy",
    icon: "../../images/altcademy.png",
    iconBg: "#E6DEDD",
    date: "25hrs",
    points: [
      "Have built numerous full-stack applications, demonstrating the ability to work on both client-side and server-side code.",
      "Developed robust and efficient server-side logic using languages like Node.js or Ruby, ensuring high performance and stability of the applications.",
      "Leveraged back-end frameworks to manage routing, handle requests and responses, and interact with the database, simplifying the development process.",
      "Optimized application performance by profiling and diagnosing issues on both the client and server side, ensuring fast and responsive applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Reddit clone",
    description:
      "A Reddit clone that has user authenticaiton. It also has post, subreddit, and comment creation. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rubyonrails",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "../../images/reddit2.png",
    source_code_link: "https://marcusayersredditv2.herokuapp.com/",
  },
  {
    name: "Airbnb clone",
    description:
      "A Airbnb clone that allows you to create, and edit, new listings. As well as a feature to book listings, and handle payments using stripe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rubyonrails",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: "../../images/airbnb.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Shopify App",
    description:
      "A Shopify app using shopifys api to show products. I have also used react three fiber and blender to create custom models to showcase the shopify products.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "reactthreefiber",
        color: "pink-text-gradient",
      },
    ],
    image: "../../images/shopify1.png",
    source_code_link: "https://commerce-wheat-ten-38.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

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
    icon: "../../images/tech/amazon.png",
  },
  {
    name: "CSS 3",
    icon: "../../images/tech/shell.png",
  },
  {
    name: "JavaScript",
    icon: "../../images/tech/att.png",
  },
  // {
  //   name: "TypeScript",
  //   icon: "../../images/tech/typescript.png",
  // },
  {
    name: "React JS",
    icon: "../../images/tech/microsoft.png",
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: "../../images/tech/redux.png",
  // },
  {
    name: "Tailwind CSS",
    icon: "../../images/tech/pepsi.png",
  },
  {
    name: "Node JS",
    icon: "../../images/tech/toyota.png",
  },
  {
    name: "MongoDB",
    icon: "../../images/tech/adidas.png",
  },
  {
    name: "Three JS",
    icon: "../../images/tech/beats.png",
  },
  {
    name: "git",
    icon: "../../images/tech/bmw.png",
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
    title: "Our Partnerships",
    company_name:
      "We collaborate with tech giants to access exclusive resources and drive innovation.",
    icon: "../../images/techLogo.png",
    iconBg: "#383E56",
    points: [
      "Collaborations with industry leaders like Microsoft, Google, and IBM",
      "Access to exclusive APIs and development tools",
      "Joint research initiatives for technology innovation",
    ],
  },
  {
    title: "Sustainability Initiatives",
    company_name:
      "We prioritize eco-friendly practices, from carbon-neutral data centers to renewable energy investments.",
    icon: "../../images/techLogo.png",
    iconBg: "#E6DEDD",
    points: [
      "Carbon-neutral data centers",
      "Investment in renewable energy projects",
      "E-waste reduction programs",
      "Employee sustainability training",
    ],
  },
  {
    title: "Awards & Recognition",
    company_name:
      "Accolades from industry authorities affirm our commitment to excellence and customer satisfaction.",
    icon: "../../images/techLogo.png",
    iconBg: "#383E56",
    points: [
      "Best Tech Company of the Year from TechWeekly",
      "Multiple cybersecurity excellence awards",
      "Consistent high rankings in customer satisfaction surveys",
    ],
  },
  {
    title: "Careers at Quantum Dynamics",
    company_name:
      "Join us for a rewarding career that balances competitive compensation with continuous learning.",
    icon: "../../images/techLogo.png",
    iconBg: "#E6DEDD",
    points: [
      "Competitive salaries and benefit packages",
      "A culture that emphasizes work-life balance",
      "Continuous learning and development opportunities",
      "Global work locations for a diverse experience",
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
    name: "Cloud Computing",
    description:
      "Seamlessly manage your data and applications with our state-of-the-art cloud computing solutions.",
    tags: [
      {
        name: "Scalability",
        color: "blue-text-gradient",
      },
      {
        name: "Virtualization",
        color: "green-text-gradient",
      },
      {
        name: "OpenStack",
        color: "pink-text-gradient",
      },
    ],
    image: "../../images/cloud.png",
    source_code_link: "https://marcusayersredditv2.herokuapp.com/",
  },
  {
    name: "AI Solutions",
    description:
      "Harness the power of artificial intelligence to make data-driven decisions and automate processes.",
    tags: [
      {
        name: "MachineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "Analytics",
        color: "green-text-gradient",
      },
      {
        name: "Predictive",
        color: "pink-text-gradient",
      },
    ],
    image: "../../images/ai.jpeg",
    source_code_link: "https://github.com/",
  },
  {
    name: "Cybersecurity",
    description:
      "Protect your digital assets with our top-of-the-line cybersecurity services.",
    tags: [
      {
        name: "Encryption",
        color: "blue-text-gradient",
      },
      {
        name: "Antivirus",
        color: "green-text-gradient",
      },
      {
        name: "Firewalls",
        color: "pink-text-gradient",
      },
    ],
    image: "../../images/cyber.png",
    source_code_link: "https://commerce-wheat-ten-38.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

import { GithubIcon, LeetCodeIcon, LinkedInIcon, TwitterIcon } from './Icons';
import projectImage from '../../public/images/projects/crypto-screener-cover-image.jpg'
import article1 from '../../public/images/articles/article-1.png';
import article2 from '../../public/images/articles/article-2.jpg';
import article3 from '../../public/images/articles/article-3.png';

export const IconData = [
  {
    href: 'https://twitter.com',
    component: <TwitterIcon />
  },
  {
    href: 'https://github.com',
    component: <GithubIcon />
  },
  {
    href: 'https://linkedin.com',
    component: <LinkedInIcon />
  },
  {
    href: 'https://leetcode.com',
    component: <LeetCodeIcon />
  }
]

export const homePageHeading =
  'Turning Vision Into Reality With Code And Design'

export const homePageContent =
  'As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.Explore my latest projects and articles, showcasing my expertise in React.js and web development'

export const aboutHeading = 'Passion Fuels Purpose!'

export const aboutContent = [
  "Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.",
  "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
  "Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project."
]

export const aboutStatus = [
  {
    number: 10,
    content: 'Staisfied Customers'
  },
  {
    number: 4,
    content: 'Project Completed'
  },
  {
    number: 2,
    content: 'Year of Experience'
  }
]

export const skills = [
  {
    skill: 'CSS',
    x: '5vw',
    y: '-10vw'
  },
  {
    skill: 'HTML',
    x: '-20vw',
    y: '2vw'
  },
  {
    skill: 'JavaScript',
    x: '10vw',
    y: '-20vw'
  },
  {
    skill: 'AWS Serverless',
    x: '9vw',
    y: '10vw'
  },
  {
    skill: 'NodeJS',
    x: '-8vw',
    y: '-10vw'
  },
  {
    skill: 'ReactJS',
    x: '10vw',
    y: '20vw'
  },
  {
    skill: 'ExpressJS',
    x: '-12vw',
    y: '-20vw'
  },
  {
    skill: 'CSS',
    x: '-12vw',
    y: '10vw'
  },
  {
    skill: 'CSS',
    x: '15vw',
    y: '-15vw'
  },
  {
    skill: 'CSS',
    x: '15vw',
    y: '0vw'
  },
  {
    skill: 'CSS',
    x: '5vw',
    y: '-10vw'
  },
  {
    skill: 'CSS',
    x: '-30vw',
    y: '0vw'
  }
]

export const experience = [
  {
    company: 'InApp Information Technologies',
    companyLink: 'https://www.inapp.com',
    position: 'Software Engineer',
    time: '2021 - present',
    address: '121 Nila, Technopark, Trivandrum, India-695581',
    work: 'Worked as a Full Stack Developer. Worked Domains are ReactJS, ExpressJS, AWS Serverless with NodeJS'
  },
  // {
  //   company: 'InApp Information Technologies',
  //   companyLink: 'https://www.inapp.com',
  //   position: 'Software Engineer',
  //   time: '2021 - present',
  //   address: '121 Nila, Technopark, Trivandrum, India-695581',
  //   work: 'Worked as a Full Stack Developer. Worked Domains are ReactJS, ExpressJS, AWS Serverless with NodeJS'
  // },
  // {
  //   company: 'InApp Information Technologies',
  //   companyLink: 'https://www.inapp.com',
  //   position: 'Software Engineer',
  //   time: '2021 - present',
  //   address: '121 Nila, Technopark, Trivandrum, India-695581',
  //   work: 'Worked as a Full Stack Developer. Worked Domains are ReactJS, ExpressJS, AWS Serverless with NodeJS'
  // }
]

export const education = [
  {
    type: "Bachelor of Technology (B.Tech)",
    time: "2017 - 2021",
    name: "Government Engineering College Barton Hill, Trivandrum (GECBH)",
    link: "http://www.gecbh.ac.in/",
    place: "Trivandrum, Kerala, India - 695035",
    info: "Electronics And Communication Engineering. CGPA - 8.45"
  },
  {
    type: "Higher Secondary Education (HSE)",
    time: "2015 - 2017",
    name: "ST Joseph's HSS, Trivandrum (GECBH)",
    link: "https://www.stjosephshsstvpm.org/",
    place: "Trivandrum, Kerala, India - 695001",
    info: "Bio-Maths. Score - 94.5%"
  },
  {
    type: "SSLC",
    time: "2016 - 2015",
    name: "ST Mary's HSS, Vettucaud",
    link: "https://www.facebook.com/people/StMarys-Higher-Secondary-school-Vettucaud/100054392056513/",
    place: "Trivandrum, Kerala, India - 695021",
    info: "Score - 98%"
  }
]

export const projectsData = [
  {
    title: "Courageous Conversation",
    type: "Featured Project",
    summary: "Worked in ReactJS.",
    image: projectImage,
    link: "/",
    github: "/"
  },
  {
    title: "Courageous Conversation",
    type: "Featured Project",
    summary: "Worked in ReactJS.",
    image: projectImage,
    link: "/",
    github: "/"
  },
  {
    title: "Courageous Conversation",
    type: "Featured Project",
    summary: "Worked in ReactJS.",
    image: projectImage,
    link: "/",
    github: "/"
  }
] 

export const articleContent = [
  {
    title: "Build A Custom Pagination Component In Reactjs From Scratch",
    img: article1,
    summary: "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    link: "/",
    time: "9 min read",
    date: "21 March 2023"
  },
  {
    title: "Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens",
    img: article2,
    summary: "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.",
    link: "/",
    time: "10 min read",
    date: "2 July 2023"
  },
  {
    title: "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    img: article3,
    summary: "Learn how to build a custom pagination component in ReactJS from scratch.",
    link: "/",
    time: "9 min read",
    date: "12 December 2023"
  }
]
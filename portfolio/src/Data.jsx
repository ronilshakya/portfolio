import WebDev from './assets/images/webdev.jpg'
import GraphicDesign from './assets/images/graphicdesign.jpg'
import ReactImg from './assets/images/react.png'
import IllustratorImg from './assets/images/illustrator.png'
import PhotoshopImg from './assets/images/photoshop.png'
import PremiereImg from './assets/images/premier.png'

export const navItems = [
  {id:1, name:"Home", link:"/"},
  {id:2, name:"Work", link:"/work"},
  {id:3, name:"Contact", link:"/contact"},
]
export const linkItems = [
  {id:1, site:"LinkedIn", href:"https://www.linkedin.com/in/ronilshakya/"},
  {id:2, site:"Github", href:"https://github.com/ronilshakya"},
  {id:3, site:"Instagram", href:"https://www.instagram.com/ronilshakya/"},
]
export const expertiseItems = [
  {
    id:1,
    title: "WEB DEVELOPMENT",
    desc: "Building responsive and dynamic web applications with seamless user experiences.",
    modal_desc: "Web development is one my high end skill that i give to my customers.",
    key_features: [
      {id: 1, feature: "Web Application Design"},
      {id: 2, feature: "Backend Development"},
      {id: 3, feature: "Responsive Design"},
    ],
    photo: WebDev
  },
  {
    id:2,
    title: "GRAPHIC DESIGN",
    desc: "Creating visually compelling designs that communicate and captivate.",
    modal_desc: "Graphic Design is one my high end skill that i give to my customers.",
    key_features: [
      {id: 1, feature: "Visual Communication"},
      {id: 2, feature: "Creativity and Originality"},
      {id: 3, feature: "Attention to Detail"},
    ],
    photo: GraphicDesign
  },
]
export const experienceItems =[
  {
    id:1,
    company:"Shield Technologies",
    job: "Graphic Designer",
    duration: "2022-2023",
    desc: "Shield Technologies Pvt. Ltd specializes in website development and digital marketing solutions, including SEO and online advertising."
  },
  {
    id:2,
    company:"ZOPAWEBS",
    job: "Frontend Developer",
    duration: "2022-2023",
    desc: "ZOPAWEBS specializes in website development and digital marketing solutions, including SEO and online advertising."
  },
]
export const skillItems = [
  {
    id:1,
    skillName:"React",
    skillImage: ReactImg,
    skillSubtitle:"Javascript Library",
    skillDesc:"React is a JavaScript library for building fast, interactive user interfaces using reusable components.",
    skillPercentage: "80%"
  },
  {
    id:2,
    skillName:"Illustrator",
    skillImage: IllustratorImg,
    skillSubtitle:"Vector Graphics Editor",
    skillDesc:"Adobe Illustrator is a vector-based design software used for creating scalable graphics, illustrations, logos, and artwork.",
    skillPercentage: "91%"
  },
  {
    id:3,
    skillName:"PhotoShop",
    skillImage: PhotoshopImg,
    skillSubtitle:"Image Editor",
    skillDesc:"Adobe Photoshop is a powerful image editing software used for photo manipulation, graphic design, and digital art creation.",
    skillPercentage: "60%"
  },
  {
    id:4,
    skillName:"Premiere Pro",
    skillImage: PremiereImg,
    skillSubtitle:"Video Editor",
    skillDesc:"Adobe Premiere Pro is a professional video editing software used for creating and editing high-quality videos, films, and multimedia content.",
    skillPercentage: "60%"
  },
]
export const FaqItems = [
  {
    id:1,
    question:"What area do you specialize in?",
    answer: "I specialize in developing full stack applications using MERN stack."
  },
  {
    id:2,
    question:"What services do you offer as a designer?",
    answer: "As a designer, I offer a range of services including graphic design, branding, illustration, and more. My goal is to provide creative solutions that effectively communicate your message and resonate with your audience."
  },
  {
    id:3,
    question:"Can you walk me through your design process?",
    answer: "Certainly! My design process typically involves understanding the client's needs and objectives, conducting research, brainstorming ideas, sketching concepts, refining designs, and delivering high-quality final products."
  },
]
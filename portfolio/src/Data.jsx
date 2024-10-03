import WebDev from './assets/images/webdev.jpg'
import GraphicDesign from './assets/images/graphicdesign.jpg'
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
import React, {useState, useRef} from 'react'
import ProfilePic from '../assets/images/1.jpg' 
import Input from '../components/common/Input'
import { linkItems } from '../Data'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha"
import Swal from 'sweetalert2'

const Contact = ({darkmode}) => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [recaptchaTokenErr, setRecaptchaTokenErr] = useState("")

  const recaptchaRef = useRef(null)
  
  const handleFormSubmit = (e) =>{
    e.preventDefault();


    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if(name == ""){
      setNameErr("Please fill out this field");
      valid = false;
    }else{
      setNameErr("")
    }
    if(email == ""){
      setEmailErr("Please fill out this field");
      valid = false;
    }else if(!regex.test(email)){
      setEmailErr("Invalid email address");
      valid = false;
    }else{
      setEmailErr("")
    }
    if(message == ""){
      setMessageErr("Please fill out this field");
      valid = false;
    }else{
      setMessageErr("");
    }
    if(!recaptchaToken){
      setRecaptchaTokenErr("Please complete recaptcha");
      valid= false
    }else{
      setRecaptchaTokenErr("");
    }

    if(valid){
      try {
        const response = axios.post('https://portfolio-o4jz.onrender.com/send',{
          name,
          email,
          message,
          recaptchaToken
        })
        if (response.status === 400 || response.status === 500) {
          console.error("Failed with status:", response.status); // Log error
          alert("Failed to send message. Please try again.");
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500
          });
          // Reset the form fields
          setName("");
          setEmail("");
          setMessage("");
          setRecaptchaToken("");
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
        }
      } catch (error) {
        console.error("Error sending message:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to send message. Please try again.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }

  return (
    // wrapper
    <div> 
      {/* contact form */}
      <div className={`grid grid-cols-1 xl:grid-cols-2 px-8 md:px-20 py-10 justify-items-center items-center ${darkmode?'dark':'light'}`}>
        <div className='flex flex-col gap-8'>
          <h1 className='text-5xl font-bold'>SAY HELLO!</h1>
          <p className={`text-2xl font-medium ${darkmode?'text-gray-400':'text-gray-600'}`}>My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard.</p>
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
            <h1 className='text-xl'>FILL THIS FORM OUT</h1>
            <Input placeholder={"Name"} darkmode={darkmode} value={name} onChange={(e)=>setName(e.target.value)}/>
            <span className="text-red-600">{nameErr}</span>
            <Input placeholder={"Email"} darkmode={darkmode} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <span className="text-red-600">{emailErr}</span>
            <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message' rows="4" className={`rounded-xl w-full px-4 py-5 focus:outline-none ${darkmode ? 'bg-customDark':'bg-gray-100'}`} id=""></textarea>
            <span className="text-red-600">{messageErr}</span>
            <ReCAPTCHA 
              sitekey="6LfRv2MqAAAAAOpoEIE1z-upEVN7c56rksKKOG-q"
              onChange={(token)=>setRecaptchaToken(token)}
              ref={recaptchaRef}
            />
            <span className="text-red-600">{recaptchaTokenErr}</span>
            <button
              className={`w-full ${darkmode ? 'bg-white text-black':'bg-black text-white'} hover:opacity-75 transition-all duration-300 text-base py-5 rounded-xl`}
            >
              SEND EMAIL
            </button>
          </form>
        </div>
        {/* contact image */}
        <div className='rounded-xl overflow-hidden max-xl:mt-12'>
          <img src={ProfilePic} className='w-[500px]' alt="" />
        </div>
      </div>
      {/* contact info */}
      <div className={`px-8 lg:px-20 border-t border-b border-custom-light-border ${darkmode? 'dark':'light'}`}>
        <div className='grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-4 py-10 lg:py-24'>
          {/* social */}
          <div>
            <p className={`text-base ${darkmode?'text-gray-400':'text-gray-600'} mb-6 `}>SOCIAL</p>
            <div className='flex flex-col gap-4 text-xl'>
              {linkItems.map((item)=>(
                <a href={item.href} key={item.id}>
                  {item.site.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
          {/* current location */}
          <div>
            <p className={`text-base ${darkmode?'text-gray-400':'text-gray-600'} mb-6`}>CURRENT LOCATION</p>
            <ul className='flex flex-col gap-4 text-xl'>
              <li>LUNKHUSI,</li>
              <li>LALITPUR,</li>
              <li>NEPAL</li>
            </ul>
          </div>
          {/* PHONE */}
          <div>
            <p className={`text-base ${darkmode?'text-gray-400':'text-gray-600'} mb-6`}>PHONE</p>
            <ul className='flex flex-col gap-4 text-xl'>
              <li>+977-9818974948</li>
              <li>+977-9748277365</li>
            </ul>
          </div>
          {/* EMAIl */}
          <div>
            <p className={`text-base ${darkmode?'text-gray-400':'text-gray-600'} mb-6`}>EMAIL</p>
            <ul className='flex flex-col gap-4 text-xl'>
              <li>shakyaronil8@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
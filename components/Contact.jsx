import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bbed2942-1298-4f45-b4df-e9f0f3b962e3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10  scroll-mt-20  bg-[url("/footer-bg-color.png")] bg-[length:90%_auto] dark:bg-none'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input name="name" type="text" className=" flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-white/30 dark:border-white/90"  placeholder="Enter your name" required />
          <input name="email" type="email" className=" flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-white/30 dark:border-white/90" placeholder="Enter your email" required />
        </div>
        <textarea name="message" className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-white/30 dark:border-white/90" rows='6' placeholder="Enter your message" required ></textarea>
        <button className="w-max flex items-center justify-center gap-2 text-white bg-black/90 border-[0.5px] rounded-full border-gray-700 px-8 mx-auto py-3 hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-white/30" type="submit">Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;

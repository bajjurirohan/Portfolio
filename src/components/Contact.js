import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Contact = () => {
  return ( 
    <section className="lg:section py-16" id="info">
      <div className='container mx-auto flex flex-col items-center lg:flex-row'>

        <motion.div variants={fadeIn('right',0.4)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.4}}
        className="flex-1 flex flex-col items-center">
          <h4 className="text-xl uppercase text-accent font-medium mb-0 tracking-wide">Get in touch</h4>
          <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
            lets work <br/> together!</h2>
        </motion.div>

        <motion.form
        variants={fadeIn('left',0.3)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}className="flex-1 border rounded-xl gap-y-6 pb-24 p-6 items-start">
          <input className="bg-slate-300/40 border-b py-3 w-full
           focus:border-gray-200 transition-all" 
           type="text"
          placeholder='Your Name'/>
          <input className="bg-slate-300/40 border-b py-3 w-full
           focus:border-gray-200 transition-all" 
           type="text"
          placeholder='Your email'/>
          <textarea className="bg-slate-300/40 border-b py-3 w-full
           focus:border-gray-200 transition-all" 
          placeholder='Your message'/>
          <button className="btn btn-lg">SeNd MeSSage</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

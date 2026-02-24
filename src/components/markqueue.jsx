import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const data = [
  { img: "/markqueue.png", text: "700M+ Contacts" },
  { img: "/markqueue1.png", text: "700M+ Contacts" },
  { img: "/markqueue2.png", text: "700M+ Contacts" },
  { img: "/markqueue3.png", text: "700M+ Contacts" },
  { img: "/markqueue4.png", text: "700M+ Contacts" },
  { img: "/markqueue5.png", text: "700M+ Contacts" }
];
function MarkQueue() {
  return (
    <div className="container-fluid overflow-hidden py-5">
      <motion.div
        className="main-markqueue d-flex gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear"
        }}
      >
        {[...data, ...data].map((item, index) => (
          <div
            key={index}
            className="markqueue d-flex align-items-center mt-3"
          >
            <img src={item.img} alt="icon" />
            <p className="d-flex text-gry mb-2">
              <span className="fw-bold ms-1">{item.text}</span>
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


export default MarkQueue;
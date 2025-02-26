import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  { title: "Food Delivery App", image: "/food-delivery.jpg" },
  { title: "Text to Image Generator", image: "/text-to-image.jpg" },
  { title: "Diabetes Prediction", image: "/diabetes-prediction.jpg" },
];

const languages = [
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-500 text-5xl" />, name: "JavaScript" },
  { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
  { icon: <FaPython className="text-blue-600 text-5xl" />, name: "Python" },
];

export default function MainPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Carousel */}
      <section className="w-full h-[100vh] overflow-hidden">
        <Slider {...settings}>
          <img
            src="https://images.unsplash.com/photo-1577538928305-3807c3993047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 1"
            className="w-full h-[100vh] object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 2"
            className="w-full h-[100vh] object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGV8ZW58MHx8MHx8fDA%3D"
            alt="Slide 3"
            className="w-full h-[100vh] object-cover"
          />
        </Slider>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Languages I Work With</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {languages.map((lang, index) => (
            <motion.div key={index} whileHover={{ scale: 1.2 }}>
              <div className="flex flex-col items-center">
                {lang.icon}
                <p className="text-lg mt-2">{lang.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

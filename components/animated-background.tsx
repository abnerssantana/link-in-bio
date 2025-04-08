import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 opacity-80" />
      
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 blur-3xl opacity-30"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-200 to-teal-200 blur-3xl opacity-30"
        animate={{
          x: -mousePosition.x * 20,
          y: -mousePosition.y * 20,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-amber-100 to-yellow-200 blur-3xl opacity-30"
        animate={{
          x: mousePosition.x * 20,
          y: -mousePosition.y * 20,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute top-2/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-pink-200 blur-3xl opacity-20"
        animate={{
          x: -mousePosition.x * 15,
          y: mousePosition.y * 15,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </div>
  );
}
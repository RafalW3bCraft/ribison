import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen hero-landscape flex items-center overflow-hidden">
      {/* Enhanced Background with Theme-aware Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ribison-primary via-ribison-blue to-ribison-gold dark:from-ribison-neutral-900 dark:via-ribison-neutral-800 dark:to-ribison-neutral-900"></div>
      
      {/* Theme-aware Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"></div>
      
      {/* Enhanced Floating Elements with Theme Support - Hidden on small screens */}
      <div className="hidden sm:block absolute top-20 left-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white/10 dark:bg-ribison-primary/20 rounded-full animate-float"></div>
      <div className="hidden md:block absolute top-32 right-20 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-ribison-blue/20 dark:bg-ribison-blue/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="hidden lg:block absolute bottom-40 left-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-ribison-gold/20 dark:bg-ribison-gold/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="hidden xl:block absolute top-1/2 right-1/3 w-6 sm:w-8 h-6 sm:h-8 bg-ribison-primary/15 dark:bg-ribison-primary/25 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative z-10 container-responsive">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-6 py-3 bg-white/20 dark:bg-ribison-neutral-800/90 backdrop-blur-md rounded-full text-sm font-semibold text-white dark:text-ribison-neutral-100 mb-6 border border-white/30 dark:border-ribison-neutral-600/50 shadow-ribison-lg">
              🧪 Global Chemical Innovation Leader
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-responsive-3xl font-heading font-bold text-white dark:text-ribison-neutral-100 mb-4 xs:mb-6 sm:mb-8 leading-tight text-heading-readable"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="block">Transforming</span>
            <span className="block text-ribison-blue-300 dark:text-ribison-blue-400">Industries</span>
            <span className="block">Through</span>
            <span className="block text-ribison-gold dark:text-ribison-primary-400">Chemistry</span>
          </motion.h1>
          
          <motion.p 
            className="text-responsive-base text-white/90 dark:text-ribison-neutral-200 mb-6 xs:mb-8 sm:mb-10 max-w-3xl mx-auto sm:mx-0 leading-relaxed font-medium px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pioneering sustainable chemical solutions for Construction, Textile, Paint, Ceramic, Paper Mill & Agriculture industries worldwide
          </motion.p>
          
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 items-stretch xs:items-center justify-center sm:justify-start px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              asChild 
              className="bg-ribison-primary hover:bg-ribison-primary-600 dark:bg-ribison-primary-500 dark:hover:bg-ribison-primary-400 text-white font-bold text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg transition-all duration-300 shadow-ribison-lg hover:shadow-ribison-xl transform hover:-translate-y-1 w-full xs:w-auto"
            >
              <Link href="/portfolio" className="flex items-center justify-center">
                🚀 Explore Solutions
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ribison-primary dark:border-ribison-neutral-300 dark:text-ribison-neutral-100 dark:hover:bg-ribison-neutral-100 dark:hover:text-ribison-primary font-bold text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-3 xs:py-4 rounded-lg transition-all duration-300 shadow-ribison-lg hover:shadow-ribison-xl transform hover:-translate-y-1 w-full xs:w-auto"
            >
              <Link href="/contact" className="flex items-center justify-center">
                📞 Get In Touch
              </Link>
            </Button>
          </motion.div>
          
          {/* Key Features */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-white/10 dark:bg-ribison-neutral-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 dark:border-ribison-neutral-600/30 shadow-lg">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ribison-secondary dark:bg-ribison-primary rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-award text-ribison-neutral-900 dark:text-white"></i>
                </div>
                <h3 className="font-heading font-semibold text-white dark:text-ribison-neutral-100">ISO Certified</h3>
              </div>
              <p className="text-sm text-white/80 dark:text-ribison-neutral-300">International quality standards</p>
            </div>
            
            <div className="bg-white/10 dark:bg-ribison-neutral-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 dark:border-ribison-neutral-600/30 shadow-lg">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ribison-primary dark:bg-ribison-blue rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-leaf text-white"></i>
                </div>
                <h3 className="font-heading font-semibold text-white dark:text-ribison-neutral-100">Eco-Friendly</h3>
              </div>
              <p className="text-sm text-white/80 dark:text-ribison-neutral-300">Sustainable chemical solutions</p>
            </div>
            
            <div className="bg-white/10 dark:bg-ribison-neutral-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 dark:border-ribison-neutral-600/30 shadow-lg">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-ribison-accent dark:bg-ribison-gold rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-shipping-fast text-white"></i>
                </div>
                <h3 className="font-heading font-semibold text-white dark:text-ribison-neutral-100">Fast Delivery</h3>
              </div>
              <p className="text-sm text-white/80 dark:text-ribison-neutral-300">Reliable supply chain network</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "loop"
        }}
      >
        <div className="bg-black/20 dark:bg-ribison-neutral-800/50 backdrop-blur-sm p-3 rounded-full border border-white/20 dark:border-ribison-neutral-600/30">
          <i className="fas fa-chevron-down text-white dark:text-ribison-neutral-200 text-lg"></i>
        </div>
      </motion.div>

      
    </section>
  );
}

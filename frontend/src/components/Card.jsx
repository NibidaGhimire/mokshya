import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePlayCourse from '../zustand/usePlayCourse';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { setClickedLanguage } = usePlayCourse();
  const [isHovered, setIsHovered] = useState(false);

  const playLanguage = (item) => {
    setClickedLanguage(item);
    navigate(`/${item.path}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-96 h-fit perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
     
      <motion.div
        animate={{
          boxShadow: isHovered 
            ? '0 0 25px rgba(0, 255, 128, 0.5)' 
            : '0 0 5px rgba(0, 255, 128, 0.2)',
        }}
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-500/30"
      />
      
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative h-full rounded-lg border-2 border-white/30 hover:border-primarygreen 
                   flex flex-col justify-between p-8 backdrop-blur-md bg-black/50
                   overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2 
                  }}
                  className="absolute w-2 h-2 bg-primarygreen rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

      
        <motion.div
          animate={{
            y: isHovered ? [-5, 5, -5] : 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <motion.img
            src={item.img}
            alt="image"
            className="w-32 h-32 object-contain mx-auto"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          />
      
          <motion.div
            animate={{
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3,
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primarygreen/20 blur-xl rounded-full"
            style={{ zIndex: -1 }}
          />
        </motion.div>

      
        <motion.div
          className="px-4 py-2 gap-2 flex flex-col"
        >
          <motion.h2
            animate={{ scale: isHovered ? 1.1 : 1 }}
            className="text-primarygreen font-bold text-xl text-center
                     tracking-wider uppercase"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 128, 0.5)'
            }}
          >
            {item.title}
          </motion.h2>
          <motion.p
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            className="text-white/80 text-justify"
          >
            {item.description}
          </motion.p>
        </motion.div>

    
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => playLanguage(item)}
          className="w-full px-2 py-3 rounded-lg bg-gradient-to-r from-primarygreen/80 to-primarygreen/50
                     text-white font-bold uppercase tracking-wider
                     border border-primarygreen/30 hover:border-primarygreen
                     shadow-lg shadow-primarygreen/20 hover:shadow-primarygreen/40
                     transition-all duration-300"
        >
          <motion.span
            animate={{
              x: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-flex items-center justify-center gap-2"
          >
            {item.button}
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Card;
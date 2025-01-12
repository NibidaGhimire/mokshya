import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Medal, Crown } from "lucide-react";
import { HiMiniFire } from "react-icons/hi2";
import { javascript, nodejs, typescript } from "../assets";

const Hero = () => {
  const navigate = useNavigate();

  // Leaderboard data
  const leaderboardData = [
    { 
      id: 1, 
      name: "Nibida Pro", 
      points: 12850, 
      streak: 200,
      badge: "🏆",
      level: "React Master"
    },
    { 
      id: 2, 
      name: "Ridss Bee", 
      points: 11200, 
      streak: 12,
      badge: "🥈",
      level: "JavaScript Pro"
    },
    { 
      id: 3, 
      name: "Riyaj ladkii", 
      points: 10500, 
      streak: 10,
      badge: "🥉",
      level: "Python Expert"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div 
      className="flex flex-col gap-4 px-4 mr-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Streak and Recent Section */}
      <div className="flex flex-row gap-4 justify-between">
        {/* Streak Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-br from-bg/70 to-bg/90 px-4 py-4 rounded-xl 
                     border border-white/10 hover:border-primarygreen/50 transition-colors
                     flex-[0.3] flex flex-col items-center justify-center
                     shadow-lg shadow-black/20"
        >
          <motion.h1 
            className="font-bold text-xl text-primarygreen"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Streak
          </motion.h1>
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <HiMiniFire size={96} color="#77f0a4" />
          </motion.div>
          <motion.h1 
            className="font-black text-4xl bg-gradient-to-r from-primarygreen to-blue-400 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            1
          </motion.h1>
        </motion.div>

        {/* Recent Activity Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-bg/70 to-bg/90 px-4 py-4 rounded-xl
                     border border-white/10 hover:border-primarygreen/50
                     flex-[0.7] shadow-lg shadow-black/20"
        >
          <h1 className="text-lg font-bold px-6 text-primarygreen">Recent</h1>
          <motion.div 
            className="flex items-center gap-4 p-4"
            whileHover={{ x: 10 }}
          >
            <motion.img 
              src={javascript} 
              className="object-contain w-16 h-16"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-primarygreen font-bold">JavaScript Level 1</h2>
              <motion.button 
                onClick={() => navigate(`/play/javascript/level1`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primarygreen/50 to-blue-500/50 
                          hover:from-primarygreen hover:to-blue-500 rounded-lg text-white
                          shadow-md shadow-primarygreen/20 hover:shadow-primarygreen/40
                          transition-all duration-300"
              >
                Continue →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Recommendations Section */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-bg/70 to-bg/90 px-4 py-4 rounded-xl
                   border border-white/10 hover:border-primarygreen/50
                   shadow-lg shadow-black/20"
      >
        <h1 className="text-lg font-bold text-primarygreen mb-4">Recommendations</h1>
        <div className="flex flex-row gap-4">
          {[
            { img: typescript, title: "TypeScript Level 2", path: "typescript/level2" },
            { img: nodejs, title: "NodeJS Level 1", path: "nodejs/level1" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, x: 10 }}
              className="flex gap-4 items-center pr-4 border-r-2 border-white/10"
            >
              <motion.img 
                src={item.img} 
                className="object-contain w-16 h-16"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-primarygreen font-bold">{item.title}</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primarygreen/50 to-blue-500/50 
                            hover:from-primarygreen hover:to-blue-500 rounded-lg text-white
                            shadow-md shadow-primarygreen/20 hover:shadow-primarygreen/40
                            transition-all duration-300"
                >
                  Start →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Leaderboard Section */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-bg/70 to-bg/90 px-4 py-4 rounded-xl
                   border border-white/10 hover:border-primarygreen/50
                   shadow-lg shadow-black/20"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-primarygreen flex items-center gap-2">
            <Trophy className="text-yellow-400" size={24} />
            LeaderBoard
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm bg-primarygreen/20 hover:bg-primarygreen/40 
                     rounded-lg text-primarygreen transition-all duration-300"
          >
            View All
          </motion.button>
        </div>

        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.id}
              variants={itemVariants}
              whileHover={{ x: 10, backgroundColor: "rgba(119, 240, 164, 0.1)" }}
              className="flex items-center justify-between p-4 rounded-lg
                       border border-white/5 hover:border-primarygreen/30
                       transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 flex items-center justify-center font-bold"
                >
                  {index === 0 ? (
                    <Crown size={24} className="text-yellow-400" />
                  ) : index === 1 ? (
                    <Medal size={24} className="text-gray-400" />
                  ) : index === 2 ? (
                    <Medal size={24} className="text-amber-700" />
                  ) : (
                    <span className="text-white/50">#{index + 1}</span>
                  )}
                </motion.div>

                <div>
                  <h3 className="font-bold text-white flex items-center gap-2">
                    {user.name}
                    <span className="text-xl">{user.badge}</span>
                  </h3>
                  <p className="text-sm text-primarygreen/70">{user.level}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-white/50">Points</p>
                  <p className="font-bold text-primarygreen">{user.points.toLocaleString()}</p>
                </div>
                <div className="text-right min-w-[80px]">
                  <p className="text-sm text-white/50">Streak</p>
                  <p className="font-bold text-orange-400 flex items-center gap-1">
                    <HiMiniFire size={16} />
                    {user.streak}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
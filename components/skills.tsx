// Ultimate Skills.tsx - Animated Orbit UI with Neon Gradient Boxes and Full Color Dynamics

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const categorizedSkills = {
  Frontend: [
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Python', icon: 'python' },
    { name: 'Flask', icon: 'flask' },
    { name: 'Django', icon: 'django' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Java', icon: 'java' },
  ],
  Design: [
    { name: 'Figma', icon: 'figma' },
    { name: 'Canva', icon: 'canva' },
    { name: 'Adobe', icon: 'adobe' },
  ],
  Tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'VS Code', icon: 'visualstudiocode' },
  
  ],
  'AI / ML': [
    { name: 'NumPy', icon: 'numpy' },
    { name: 'Matplotlib', icon: 'plotly' },
  ],
  DevOps: [
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Supabase', icon: 'supabase' },
  ],
  'Auth & APIs': [
    { name: 'Convex', icon: 'convex' },
    { name: 'REST APIs', icon: 'postman' },
    { name: 'Clerk', icon: 'clerk' },
    { name: 'Auth.js', icon: 'auth0' },
    { name: 'JWT', icon: 'jwt' },
    { name: 'OAuth', icon: 'openid' },
    { name: 'SuperTokens', icon: 'superuser' },
  ],
  'Other Tech': [
    
    { name: 'Raspberry Pi', icon: 'raspberrypi' },
    { name: 'RStudio', icon: 'rstudio' },
    { name: 'Chrome Extensions', icon: 'googlechrome' },
  ],
};


const categoryStyles: Record<string, { color: string; gradient: string }> = {
  Frontend: { color: 'cyan-500', gradient: 'from-cyan-400 to-blue-500' },
  Backend: { color: 'blue-500', gradient: 'from-blue-400 to-indigo-500' },
  Design: { color: 'sky-500', gradient: 'from-sky-400 to-cyan-500' },
  Tools: { color: 'indigo-500', gradient: 'from-indigo-400 to-purple-500' },
  'AI / ML': { color: 'teal-500', gradient: 'from-teal-400 to-cyan-500' },
  DevOps: { color: 'blue-600', gradient: 'from-blue-500 to-cyan-600' },
  'Auth & APIs': { color: 'sky-600', gradient: 'from-sky-500 to-blue-600' },
  'Other Tech': { color: 'cyan-600', gradient: 'from-cyan-500 to-teal-600' },
};

export default function Skills() {
  const [openBoxes, setOpenBoxes] = useState<string[]>([]);

  const toggleBox = (category: string) => {
    setOpenBoxes((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 text-slate-800 relative overflow-hidden">
      <div className="container px-4 md:px-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text animate-pulse">
            Skill Galaxy
          </h2>
          <p className="text-slate-600 md:text-lg">Tap a category to unlock its orbiting stack 🚀</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 place-items-center">
          {Object.entries(categorizedSkills).map(([category, skills]) => {
            const { color, gradient } = categoryStyles[category] || { color: 'white', gradient: 'from-white to-white' };

            return (
              <div
                key={category}
                className="relative w-64 h-64 flex items-center justify-center"
                onClick={() => toggleBox(category)}
              >
                <div
                  className={`z-[1] w-40 h-40 rounded-3xl p-6 text-center cursor-pointer 
                    bg-gradient-to-br ${gradient} shadow-xl shadow-${color}/20 
                    hover:scale-105 transition-all duration-300 border border-white/30`}
                >
                  <h3 className={`text-xl font-bold mb-1 text-white drop-shadow-md`}>{category}</h3>
                  <p className="text-sm text-white/80">Click to reveal</p>
                </div>

                <AnimatePresence>
                  {openBoxes.includes(category) &&
                    skills.map((skill, i) => {
                      const angle = (360 / skills.length) * i;
                      const radius = 120;
                      const x = radius * Math.cos((angle * Math.PI) / 180);
                      const y = radius * Math.sin((angle * Math.PI) / 180);

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                          animate={{
                            opacity: 1,
                            x,
                            y,
                            scale: 1,
                            transition: {
                              delay: i * 0.05,
                              type: 'spring',
                              stiffness: 80,
                              damping: 10,
                            },
                          }}
                          exit={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                          style={{ position: 'absolute', zIndex: 5 }}
                        >
                          <div
                            className={`w-16 h-16 flex flex-col items-center justify-center 
                              rounded-full bg-white/80 border border-${color}/30 
                              backdrop-blur-md hover:scale-110 transition-transform shadow-lg`}
                          >
                            <img
                              src={`https://cdn.simpleicons.org/${skill.icon}/${color}`}
                              alt={skill.name}
                              className="w-7 h-7 drop-shadow-lg"
                              style={{
                                animation: 'orbitAnim 3s infinite ease-in-out',
                              }}
                            />
                            <span className={`text-[10px] mt-1 text-center text-${color} font-medium drop-shadow-sm`}>{skill.name}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

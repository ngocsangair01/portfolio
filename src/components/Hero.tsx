import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold"
            >
              Xin chào, tôi là{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {personalInfo.objective}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
              >
                <FiDownload className="w-4 h-4" />
                Tải CV
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors"
              >
                Liên hệ
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">SangPortfolio.java</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-purple-400">@RestController</div>
                <div className="text-blue-400">public class <span className="text-yellow-400">SangPortfolio</span> {'{'}</div>
                <div className="ml-4 text-gray-400">// {personalInfo.experience} years experience</div>
                <div className="ml-4 text-green-400">@GetMapping<span className="text-white">(</span><span className="text-orange-400">"/skills"</span><span className="text-white">)</span></div>
                <div className="ml-4 text-blue-400">public <span className="text-yellow-400">List</span>&lt;<span className="text-yellow-400">String</span>&gt; <span className="text-green-400">getSkills</span>() {'{'}</div>
                <div className="ml-8 text-blue-400">return <span className="text-yellow-400">Arrays</span>.<span className="text-green-400">asList</span>(</div>
                <div className="ml-12 text-orange-400">"Java", "Spring Boot",</div>
                <div className="ml-12 text-orange-400">"ReactJS", "Docker"</div>
                <div className="ml-8 text-white">);</div>
                <div className="ml-4 text-white">{'}'}</div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-tech-java rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
            >
              Java
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-tech-spring rounded-lg flex items-center justify-center text-white font-bold shadow-lg text-sm"
            >
              Spring
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiExternalLink, FiGitBranch } from 'react-icons/fi';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Đang thực hiện';
      case 'completed': return 'Hoàn thành';
      default: return 'Không xác định';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Dự án <span className="gradient-text">Nổi bật</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Những dự án tiêu biểu tôi đã tham gia phát triển, từ hệ thống enterprise đến ứng dụng web hiện đại
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUsers className="w-4 h-4" />
                      <span>{project.role}</span>
                    </div>
                    {project.teamSize && (
                      <div className="flex items-center gap-2">
                        <FiGitBranch className="w-4 h-4" />
                        <span>Team: {project.teamSize} người</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Điểm nổi bật:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Công nghệ sử dụng:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Actions */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Xem chi tiết
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">{projects.length}</div>
            <div className="text-gray-600 dark:text-gray-400">Dự án</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Năm kinh nghiệm</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Công nghệ</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">2</div>
            <div className="text-gray-600 dark:text-gray-400">Công ty</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
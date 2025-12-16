export const personalInfo = {
  name: "Ngô Ngọc Sáng",
  title: "Java Software Engineer",
  email: "ngocsangair01@gmail.com",
  phone: "0943792230",
  dob: "01/01/2001",
  education: "Hanoi University of Industry",
  major: "Information Technology",
  experience: "3+",
  location: "Hanoi, Vietnam",
  objective: "Java Web Developer với hơn 2 năm kinh nghiệm phát triển backend và full-stack, chuyên môn về Java, Spring Boot, và tối ưu hóa cơ sở dữ liệu. Có kinh nghiệm với DevOps, CI/CD, Docker, Redis, Kafka, ELK stack."
};

export const skills = {
  languages: [
    { name: "Java", icon: "☕", color: "#f89820", proficiency: "Expert" },
    { name: "JavaScript", icon: "🟨", color: "#f7df1e", proficiency: "Advanced" },
    { name: "TypeScript", icon: "🔷", color: "#3178c6", proficiency: "Advanced" },
  ],
  frameworks: [
    { name: "Spring Boot", icon: "🍃", color: "#6db33f", proficiency: "Expert" },
    { name: "ReactJS", icon: "⚛️", color: "#61dafb", proficiency: "Advanced" },
    { name: "Angular", icon: "🅰️", color: "#dd0031", proficiency: "Intermediate" },
  ],
  databases: [
    { name: "MySQL", icon: "🐬", color: "#4479a1", proficiency: "Advanced" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791", proficiency: "Advanced" },
    { name: "Redis", icon: "🔴", color: "#dc382d", proficiency: "Intermediate" },
    { name: "Elasticsearch", icon: "🔍", color: "#005571", proficiency: "Intermediate" },
  ],
  tools: [
    { name: "Docker", icon: "🐳", color: "#2496ed", proficiency: "Advanced" },
    { name: "Jenkins", icon: "👨‍💼", color: "#d33833", proficiency: "Intermediate" },
    { name: "Kafka", icon: "📨", color: "#231f20", proficiency: "Intermediate" },
    { name: "AWS", icon: "☁️", color: "#ff9900", proficiency: "Intermediate" },
  ]
};

export const experience = [
  {
    period: "2023 - Hiện tại",
    company: "TLH VIETNAM TECHNOLOGY JSC",
    position: "Developer",
    location: "Hanoi, Vietnam",
    current: true
  },
  {
    period: "2022 - 2023", 
    company: "SOFTDREAM TECHNOLOGY AND TRADING JSC",
    position: "Developer",
    current: false
  }
];

export const projects = [
  {
    title: "MY VIETTEL API RECOMMENDATION SYSTEM",
    description: "Hệ thống gợi ý API cho ứng dụng My Viettel",
    period: "01/2025 - Hiện tại",
    status: "ongoing",
    role: "Backend Developer",
    technologies: ["Java Spring Boot", "MariaDB", "Jenkins", "ELK", "Redis", "Docker", "Kafka"],
    highlights: [
      "Tích hợp Redis caching và Elasticsearch để tối ưu hiệu suất",
      "Sử dụng Kafka để gửi logs tập trung",
      "Dẫn dắt giải pháp kỹ thuật và triển khai",
      "Code review và đảm bảo chất lượng code"
    ]
  },
  {
    title: "CCAI DYNAMIC DASHBOARD", 
    description: "Dashboard động cho quản lý với khả năng drag & drop",
    period: "06/2024 - 12/2024",
    status: "completed",
    role: "Developer",
    teamSize: 2,
    technologies: ["Spring Boot", "React JS", "MariaDB", "Redis", "Elasticsearch", "Kibana"],
    highlights: [
      "Phân tích yêu cầu từ team Viettel",
      "Xây dựng module base Spring Boot để tái sử dụng",
      "Hướng dẫn team coding standards"
    ]
  },
  {
    title: "VIETTEL API GATEWAY",
    description: "Gateway giao tiếp giữa các services trong Viettel",
    period: "03/2024 - 06/2024", 
    status: "completed",
    role: "DevOps & Developer",
    technologies: ["Spring Boot", "Basic Auth", "Shell Script", "Elasticsearch", "Grafana", "Prometheus"],
    highlights: [
      "Phát triển Basic Authentication",
      "Xây dựng Elasticsearch Cluster",
      "Thiết lập monitoring với Grafana, Prometheus"
    ]
  },
  {
    title: "DYNAMIC DASHBOARD VCOC",
    description: "Dashboard báo cáo động dạng biểu đồ",
    period: "08/2023 - 02/2024",
    status: "completed", 
    role: "Developer",
    teamSize: 10,
    technologies: ["Spring Boot", "Angular", "MariaDB", "Redis", "Elasticsearch"],
    highlights: [
      "Khởi tạo cấu trúc project",
      "Nghiên cứu công nghệ sử dụng",
      "Deploy ứng dụng lên server khách hàng"
    ]
  },
  {
    title: "EASYPOS",
    description: "API cho ứng dụng quản lý bán hàng tích hợp hóa đơn điện tử",
    period: "03/2022 - 07/2023",
    status: "completed",
    role: "Developer", 
    teamSize: 10,
    technologies: ["Spring Boot", "MS SQL", "JHipster", "Hibernate", "JPA", "Flutter"],
    highlights: [
      "Phân tích và thiết kế database",
      "Tối ưu code và fix bugs",
      "Hỗ trợ phát triển mobile app với Flutter"
    ]
  }
];
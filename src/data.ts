import { Project, Skill, Experience, Education, Certification } from './types';

export const personalInfo = {
  name: 'VANJARAPU RAJESH',
  title: 'PYTHON DEVELOPER | ASPIRING SOFTWARE ENGINEER',
  tagline: 'Passionate about software engineering, scalable applications, and continuous learning.',
  email: 'rajeshvanjarapu5@gmail.com',
  phone: '+91-9346345700',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/vanjarapurajesh',
  linkedin: 'https://linkedin.com/in/vanjarapurajesh',
  resumeFileName: 'MYRESUME.pdf',
  introduction: 'Computer Science Engineering graduate with hands-on experience in Python, Flask, AWS Cloud Services, and web application development. Skilled in developing cloud-based applications using AWS DynamoDB, EC2, Lambda, SNS, and IAM. Passionate about software engineering, scalable applications, and continuous learning. Seeking an entry-level Software Developer role where I can contribute, learn, and grow professionally.'
};

export const skillsList: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'Java (Basics)', level: 80, category: 'languages' },
  { name: 'C', level: 75, category: 'languages' },
  
  // Frontend Technologies
  { name: 'HTML5', level: 85, category: 'frontend' },
  { name: 'CSS3', level: 80, category: 'frontend' },
  { name: 'JavaScript', level: 75, category: 'frontend' },

  // Backend & Frameworks
  { name: 'Flask', level: 85, category: 'backend' },
  
  // Databases
  { name: 'MySQL', level: 80, category: 'databases' },
  { name: 'AWS DynamoDB', level: 85, category: 'databases' },
  
  // Cloud & DevOps
  { name: 'AWS EC2', level: 85, category: 'cloud' },
  { name: 'AWS S3', level: 85, category: 'cloud' },
  { name: 'AWS Lambda', level: 80, category: 'cloud' },
  { name: 'AWS SNS', level: 80, category: 'cloud' },
  { name: 'AWS IAM', level: 80, category: 'cloud' },
  { name: 'AWS CloudWatch', level: 75, category: 'cloud' },
  
  // Tools & Platforms
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'GitHub', level: 90, category: 'tools' },
  { name: 'Microsoft Word', level: 75, category: 'tools' },
  { name: 'Microsoft Excel', level: 75, category: 'tools' },
  { name: 'Microsoft PowerPoint', level: 80, category: 'tools' },
  
  // Operating Systems
  { name: 'Windows', level: 90, category: 'os' },
  { name: 'Linux', level: 85, category: 'os' },
  
  // Concepts
  { name: 'OOP', level: 85, category: 'concepts' },
  { name: 'REST APIs', level: 85, category: 'concepts' },
  { name: 'Data Structures', level: 80, category: 'concepts' }
];

export const experienceList: Experience[] = [
  {
    role: 'AWS Cloud Intern',
    organization: 'SmartBridge Educational Services (Remote)',
    duration: 'May 2025 – Aug 2025',
    responsibilities: [
      'Deployed and managed web applications using AWS EC2, S3, and Lambda.',
      'Configured IAM roles and monitored cloud resources using CloudWatch.',
      'Worked with DynamoDB for secure and scalable cloud data storage.',
      'Gained hands-on experience in cloud infrastructure and serverless architecture.',
      'Collaborated on cloud-based solutions following industry best practices.'
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: 'moviemagic',
    title: 'MovieMagic – Online Movie Ticket Booking Web Application',
    description: 'Developed a full-stack movie ticket booking application focused on Telugu cinema.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'AWS DynamoDB', 'AWS SNS'],
    features: [
      'Developed a full-stack movie ticket booking application focused on Telugu cinema.',
      'Implemented real-time seat booking and availability tracking using AWS DynamoDB.',
      'Integrated SMS and email notifications using AWS SNS.',
      'Designed a responsive and user-friendly interface.',
      'Implemented secure authentication and booking management features.'
    ],
    githubUrl: 'https://github.com/vanjarapurajesh/MovieMagic',
    liveUrl: '#moviemagic'
  },
  {
    id: 'quantumsecurechat',
    title: 'QuantumSecureChat – Secure Messaging System',
    description: 'Developed a secure messaging framework using AES encryption techniques.',
    technologies: ['Java', 'AES Encryption', 'BB84 QKD Simulation'],
    features: [
      'Developed a secure messaging framework using AES encryption techniques.',
      'Implemented BB84 Quantum Key Distribution simulation for secure key generation.',
      'Enabled secure transfer of text and multimedia files.',
      'Designed a user-friendly desktop interface for encrypted communication.',
      'Demonstrated concepts of post-quantum secure communication.'
    ],
    githubUrl: 'https://github.com/vanjarapurajesh/QuantumSecureChat',
    liveUrl: '#quantumsecurechat'
  }
];

export const certificationsList: Certification[] = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { title: 'NPTEL – Introduction to Internet of Things', issuer: 'IIT Kharagpur' },
  { title: 'Ethical Hacking & Cyber Security', issuer: 'Supraja Technologies' },
  { title: 'Data Analysis using Python & Web Development using Django', issuer: 'APSSDC' },
  { title: 'Cloud Computing Fundamentals', issuer: 'Google Cloud' }
];

export const achievementsList: string[] = [
  'Published a peer-reviewed research paper comparing ChatGPT and DeepSeek (IRJMETS, 2025).',
  'Participated in environmental awareness and tree-planting initiatives.',
  'Continuously improving Python, Cloud Computing, and Software Development skills.',
  'Actively exploring emerging technologies and software engineering practices.'
];

export const educationList: Education[] = [
  {
    degree: 'B.Tech - Computer Science & Engineering',
    major: 'Computer Science & Engineering',
    institution: 'Aditya Institute of Technology and Management, Tekkali',
    university: 'JNTUGV, Vizianagaram',
    cgpa: '7.44',
    duration: '2022 – 2026'
  },
  {
    degree: 'Intermediate (MPC)',
    major: 'MPC',
    institution: 'AP Model School & Jr. College, Edulavalasa',
    university: 'State Board',
    cgpa: 'Percentage: 57.7%',
    duration: '2020 – 2022'
  },
  {
    degree: 'SSC',
    major: 'General',
    institution: 'AP Model School & Jr. College, Edulavalasa',
    university: 'State Board',
    cgpa: 'Percentage: 81%',
    duration: '2020'
  }
];

export const softSkills: string[] = [
  'Problem Solving',
  'Analytical Thinking',
  'Team Collaboration',
  'Communication Skills',
  'Time Management',
  'Adaptability'
];

export const languagesList: string[] = [
  'Telugu (Native)',
  'English',
  'Hindi'
];

export const interestsList: string[] = [
  'Listening to Music',
  'Sky Photography / Capturing the Sky',
  'Exploring New Technologies'
];

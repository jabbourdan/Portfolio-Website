
import {
  DoJourney,
  CarWashDashboard,
  Protocol,
  CompilerExample,
  Tmdb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C#", iconClass: "fas fa-code" },
  { title: "ASP.NET / .NET Core", iconClass: "fas fa-network-wired" },
  { title: "Angular", iconClass: "fab fa-angular" },
  { title: "HTML", iconClass: "fab fa-html5" },
  { title: "CSS", iconClass: "fab fa-css3-alt" },
  { title: "MySQL", iconClass: "fas fa-database" },
  { title: "JavaScript/TypeScript", iconClass: "fab fa-js-square" },
  { title: "AWS", iconClass: "fab fa-aws" },
  { title: "Docker", iconClass: "fab fa-docker" },
  { title: "C", iconClass: "fas fa-code" },
  { title: "C++", iconClass: "fas fa-code" },
  { title: "Python", iconClass: "fab fa-python" },
  { title: "Java", iconClass: "fab fa-java" },
  { title: "MongoDB", iconClass: "fas fa-leaf" },
];



export const projects = [
  {
    name: "DoJourney – SmartScheduler - (Request Access becouse it is Saas application)",
    description:
      "Developed by Me end to end, DoJourney is an ASP.NET MVC platform for appointment scheduling, client management, and automated communication. It integrates with Twilio API for WhatsApp to send real-time notifications and reminders. Currently in POC with two clients, SmartScheduler helps businesses streamline their operations with an intuitive and efficient system. 🚀",
    tags: [
      { name: "ASP.NET_MVC", color: "orange-text-gradient" },
      { name: "C#", color: "blue-text-gradient" },
      { name: "Javascript", color: "orange-text-gradient" },
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "orange-text-gradient" },
      { name: "Twilio", color: "orange-text-gradient" },
      { name: "SQL", color: "orange-text-gradient" },
    ],
    image: DoJourney,
    source_code_link: "https://dojourney-request.pro/dia",
  },
  {
    name: "Car wash system - Angular Web App",
    description:
      "Build a car wash management dashboard for a live system – designed to help operators track clients, manage reservations, and monitor client activity in real-time.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: CarWashDashboard,
    source_code_link: "https://github.com/jabbourdan/Admin-tem.git",
  },
  {
    name: "Compiler in C",
    description:
      "This project is a C-based assembler designed for the Open University (Israel) System Programming Lab final course. It efficiently compiles assembly code into machine code, handling macros, error checking, and memory optimization. The assembler follows a multi-stage process: from macro expansion, symbol table creation, to binary output generation. It ensures memory efficiency and modular design, and integrates error handling at every stage.",
    tags: [
      { name: "C", color: "blue-text-gradient" },
    ],
    image: CompilerExample,
    source_code_link:
      "https://github.com/jabbourdan/assempleFinaleOpenU",
  },
  {
    name: "Encrypted File Transfer System",
    description:
      "The Encrypted File Transfer System ensures secure file transfers between clients and a server, using RSA and AES encryption for data protection. Built with a Python server and C++ client, it supports registration, key generation, encryption, and file transfer. The system includes error-handling and retry mechanisms to ensure reliable communication. It addresses vulnerabilities such as SQL injection, buffer overflows, and DDoS attacks. Completed as a final project for the Defensive System Programming course at the Open University of Israel.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "RSA", color: "pink-text-gradient" },
      { name: "Socket Programming", color: "blue-text-gradient" },
    ],
    image: Protocol,
    source_code_link: "https://github.com/jabbourdan/RSA_SendSecureFile",
  },
  {
    name: "TMDB Movie Poster Manager",
    description:
      "The TMDB Movie Poster Manager allows users to search, store, and manage movie posters using the TMDB API and MongoDB. It supports full CRUD operations for poster management. The project is containerized with Docker and Docker Compose for easy setup. Built with Python and Flask, it provides a simple interface for handling movie posters. This project showcases web API integration, database management, and containerization.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "TMDB API", color: "green-text-gradient" },
      { name: "EC2", color: "pink-text-gradient" },
    ],
    image: Tmdb,
    source_code_link: "https://github.com/jabbourdan/TMDB-project",
  }
];

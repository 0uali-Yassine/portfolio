import ecommerce1_image from "./image-project/ecommerce-1.png";
import ecommerce2_image from "./image-project/e-commerce-2.png";
import ecommerce3_image from "./image-project/e-commerce-3.png";
import chat1_image from "./image-project/chat-app-1.png";
import chat2_image from "./image-project/chat-app-2.png";
import dashboard1_image from "./image-project/dashboard-1.png";
import dashboard2_image from "./image-project/dashboard-2.png";
import e_learning_platform_image from "./image-project/e-learning.png";
import kanban from "./image-project/kanban-task-managment.png";
import blog_page from "./image-project/blogr-landing-page.jpg";
import e_commerce_product from "./image-project/ecommerce-product-page.jpg";
import space from "./image-project/space-tourisme.png";
import sunnyside_agency from "./image-project/sunnyside-agency.jpg";
import bookmark from "./image-project/bookmark.png";
import easy_bank from "./image-project/easy-bank.png";
import manage_landing_page from "./image-project/manage-landing-page.png";



const projects = [
    {
        id: 0,
        name: "E-commerce",
        category: "e-commerce",
        title: "This is an e-commerce website built with React.js. It allows users to browse products, add them to their shopping cart, and proceed to checkout.",
        technology: ["React.js", "React Router", "Context API", "CSS", "HTML", "JS"],
        image: ecommerce1_image,
        github: "https://github.com/0uali-Yassine/e-commrece-app",
        landing_page: true,
    },
    {
        id: 1,
        name: "E-commerce",
        category: "e-commerce",
        title: "🛍️ A React e-commerce platform for seamless shopping, featuring intuitive navigation, product browsing, and secure transactions.",
        technology: ["React", "React Router", "Context API", "Tailwind CSS", "JS"],
        image: ecommerce2_image,
        github: "https://github.com/0uali-Yassine/E-commerce-v1-app",
        landing_page: true,
    },
    {
        id: 2,
        name: "E-commerce",
        category: "e-commerce",
        title: "🛍️ E-commerce Store: Add, remove, and view products effortlessly! This React.js project features product management, dynamic filtering, and a seamless user experience. Ideal for learning front-end development and state management.",
        technology: ["React", "React Router", "Context API", "Tailwind CSS", "JS"],
        image: ecommerce3_image,
        github: "https://github.com/0uali-Yassine/E-commrece-v2-app",
        landing_page: true,
    },
    {
        id: 3,
        name: "Chat App",
        category: "chat-app",
        title: "🗨️ Chat-App: Seamlessly connect with friends! Effortlessly login, explore user lists, dive into chats, and tweak settings. Stay connected, effortlessly! 🚀",
        technology: ["React", "React-toastify", "Context API", "Tailwind CSS", "Firebase"],
        image: chat1_image,
        github: "https://github.com/0uali-Yassine/chat-app",
        landing_page: false,
    },
    {
        id: 4,
        name: "Mini Chat App",
        category: "chat-app",
        title: "📁 Project Directory Structure A chat application built with React and Firebase, featuring user authentication, real-time messaging, and room management. Users can sign in, join rooms, and send messages with timestamps. The interface includes an emoji picker and profile avatars.",
        technology: ["React", "React-toastify", "Date-fns", "Tailwind CSS", "Firebase"],
        image: chat2_image,
        github: "https://github.com/0uali-Yassine/mini-chat-app",
        landing_page: false,
    },
    {
        id: 5,
        name: "Admin Dashboard",
        category: "admin-dashboard",
        title: "📊 An admin dashboard app built with React, MUI, Recharts, and React Progress Circle. Monitor and manage data efficiently with intuitive visualizations and responsive design.",
        technology: ["React", "Material-UI (Mui)", "Recharts", "React Progress Circle", "Tailwind CSS", "Context API"],
        image: dashboard1_image,
        github: "https://github.com/0uali-Yassine/admin-dashboard-app",
        landing_page: true,
    },
    {
        id: 6,
        name: "Admin Dashboard",
        category: "admin-dashboard",
        title: "📊 An admin dashboard app built with React Recharts, and React Router Dom. Monitor and manage data efficiently with intuitive visualizations and responsive design.",
        technology: ["React", "React-Router-Dom", "Recharts", "Tailwind CSS", "Context API", "JS"],
        image: dashboard2_image,
        github: "https://github.com/0uali-Yassine/admin-dashboard-v1-app",
        landing_page: true,
    },
    {
        id: 7,
        name: "E-learning Platform",
        category: "e-learning",
        title: "An interactive platform for learning front-end development: HTML, CSS, JavaScript, and React. 🖥️ Features live coding, responsive layouts, and a chatbot for support. 🚀",
        technology: ["React", "React-Router-Dom", "Firebase", "Auth", "Tailwind CSS", "Context API", "JS"],
        image: e_learning_platform_image ,
        github: "https://github.com/0uali-Yassine/E-learning-platform",
        landing_page: true,
    },
    {
        id: 8,
        name: "Kanban Task Management",
        category: "kanban-task",
        title: "📋 Manage tasks effortlessly across boards with this React-based Kanban Board app. Add, delete, and complete tasks with ease. Dark mode and drag-and-drop functionality included!",
        technology: ["React", "React-Router-Dom", "Firebase", "Auth", "Tailwind CSS", "Context API", "JS"],
        image: kanban,
        github: "https://github.com/0uali-Yassine/Kanban-Task-management-app",
        landing_page: true,
    },
    
    {
        id: 9,
        name: "Blogr Page Main",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "CSS", "JS", "Bootstrap"],
        image: blog_page,
        github: "https://github.com/0uali-Yassine/Blogr-landing-page",
        landing_page: true,
    },
    {
        id: 10,
        name: "E-commerce Product Page",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "CSS", "JS", "Tailwind CSS"],
        image: e_commerce_product,
        github: "https://github.com/0uali-Yassine/ecommerce-product-page-main",
        landing_page: true,
    },
    {
        id: 11,
        name: "Space Tourism Website",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "JS", "Tailwind CSS"],
        image: space,
        github: "https://github.com/0uali-Yassine/space-tourism-website-main",
        landing_page: true,
    },
    {
        id: 12,
        name: "Sunnyside Agency Page",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "JS", "Tailwind CSS"],
        image: sunnyside_agency,
        github: "https://github.com/0uali-Yassine/Sunnyside-agency-landing-page",
        landing_page: true,
    },
    {
        id: 13,
        name: "Bookmark",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "JS", "Tailwind CSS"],
        image: bookmark,
        github: "https://github.com/0uali-Yassine/Sunnyside-agency-landing-page",
        landing_page: true,
    },
    {
        id: 14,
        name: "Easybank Page",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "JS", "Bootstrap"],
        image: easy_bank,
        github: "https://github.com/0uali-Yassine/easybank-landing-page-master",
        landing_page: true,
    },
    {
        id: 15,
        name: "Manage Landing Page",
        category: "landing-page",
        title: "✨ Converted Figma designs into responsive, modern landing pages with clean UI/UX for a seamless user experience. 📱💻",
        technology: ["HTML", "JS", "Bootstrap"],
        image: manage_landing_page,
        github: "https://github.com/0uali-Yassine/manage-landing-page",
        landing_page: true,
    },
];

export default projects;

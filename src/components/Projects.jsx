import { SiFirebase, SiCoronarenderer, SiVercel } from "react-icons/si";
import ProjectCard from "./ProjectCard";
import Nesture from "./Nesture";

const projectsData = [
  {
    title: "Enquiry CRM",
    accent: "blue",
    subheading: "Customer Relationship Management System",
    role: "Complete Frontend and Backend development",
    description: `Enquiry CRM is a comprehensive Customer Relationship Management system designed to streamline enquiry handling, lead tracking, and customer communication. The platform enables businesses to efficiently manage their sales pipeline from initial contact to conversion.

Built with a focus on user experience and data integrity, the system features real-time notifications, automated follow-up reminders, and detailed analytics dashboards. The intuitive interface allows sales teams to track every interaction, prioritize hot leads, and never miss a follow-up opportunity. Advanced filtering and search capabilities make it easy to find and manage customer records across thousands of entries.`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Tailwind CSS",
      "React Query",
      "Chart.js",
      "Nodemailer",
    ],
    links: [
      {
        label: "View Demo",
        url: "#",
        tooltip: "Live Demo",
      },
    ],
    images: [
      {
        src: "./E1.png",
        alt: "CRM Dashboard",
        title: "Intuitive Dashboard with Real-Time Metrics",
        description:
          "A comprehensive dashboard displaying lead statistics, conversion rates, and team performance at a glance.",
      },
      {
        src: "./E2.png",
        alt: "Lead Management",
        title: "Smart Lead Management System",
        description:
          "Efficiently organize and prioritize leads with custom tags, status tracking, and automated scoring.",
      },
      {
        src: "./E3.png",
        alt: "Sales Pipeline",
        title: "Visual Sales Pipeline",
        description:
          "Drag-and-drop pipeline view to track deals through every stage of the sales process.",
      },
      {
        src: "./E4.png",
        alt: "Analytics",
        title: "Advanced Analytics & Reporting",
        description:
          "Detailed reports and charts to analyze sales trends, team performance, and revenue forecasts.",
      },
      {
        src: "./E5.png",
        alt: "Contact Management",
        title: "Centralized Contact Database",
        description:
          "Store and manage all customer information with complete interaction history and notes.",
      },
      {
        src: "./E6.png",
        alt: "Task Management",
        title: "Integrated Task & Follow-up System",
        description:
          "Never miss a follow-up with automated reminders and task scheduling for each lead.",
      },
    ],
    secondaryImages: [
      {
        src: "./E7.png",
        alt: "Email Integration",
        title: "Seamless Email Integration",
        description:
          "Send and track emails directly from the CRM with templates and automated sequences.",
      },
      {
        src: "./E8.png",
        alt: "Mobile View",
        title: "Mobile-First Responsive Design",
        description:
          "Access your CRM on any device with a fully responsive interface optimized for mobile sales teams.",
      },
      {
        src: "./E9.png",
        alt: "Additional Feature",
        title: "Additional CRM Feature",
        description:
          "Extended functionality for enhanced customer relationship management.",
      },
      {
        src: "./E10.png",
        alt: "Extra Feature",
        title: "Extra CRM Capability",
        description:
          "Additional tools and features to maximize your CRM efficiency.",
      },
    ],
  },
  {
    title: "CX Pulse Tech",
    accent: "purple",
    subheading: "Customer Experience Analytics Platform",
    role: "Full Stack Developer, handled client communication",
    description: `CX Pulse Tech is a customer experience analytics platform that provides real-time insights into customer behavior and satisfaction metrics. The platform aggregates data from multiple touchpoints to deliver actionable intelligence for improving customer journeys.

Working directly with the client, I translated business requirements into technical solutions while maintaining clear communication throughout the development process. The platform features sentiment analysis, NPS tracking, customer journey mapping, and predictive analytics powered by machine learning algorithms. Interactive dashboards allow stakeholders to drill down into specific metrics and identify areas for improvement.`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Python",
      "TensorFlow",
      "Analytics APIs",
      "Recharts",
      "Socket.io",
      "Redis",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "View Platform",
        url: "#",
        tooltip: "Live Platform",
      },
    ],
    images: [
      {
        src: "./C1.png",
        alt: "CX Dashboard",
        title: "Real-Time Customer Experience Dashboard",
        description:
          "Monitor customer satisfaction scores, NPS, and sentiment trends in real-time across all channels.",
      },
      {
        src: "./C2.png",
        alt: "Journey Mapping",
        title: "Interactive Customer Journey Mapping",
        description:
          "Visualize and analyze complete customer journeys to identify pain points and optimization opportunities.",
      },
      {
        src: "./C3.png",
        alt: "Sentiment Analysis",
        title: "AI-Powered Sentiment Analysis",
        description:
          "Machine learning algorithms analyze customer feedback to detect sentiment and emerging trends.",
      },
      {
        src: "./C4.png",
        alt: "Survey Management",
        title: "Dynamic Survey Builder",
        description:
          "Create and deploy customized surveys with branching logic and real-time response tracking.",
      },
      {
        src: "./C5.png",
        alt: "Reports",
        title: "Automated Report Generation",
        description:
          "Schedule and generate comprehensive reports with insights and recommendations for stakeholders.",
      },
      {
        src: "./C6.png",
        alt: "Alerts",
        title: "Smart Alert System",
        description:
          "Receive instant notifications when customer satisfaction drops or critical feedback is received.",
      },
    ],
    secondaryImages: [
      {
        src: "./C7.png",
        alt: "Integrations",
        title: "Multi-Channel Data Integration",
        description:
          "Connect with CRM, support tickets, social media, and other platforms for unified customer insights.",
      },
      {
        src: "./C8.png",
        alt: "Mobile App",
        title: "Executive Mobile Dashboard",
        description:
          "Access key metrics and alerts on-the-go with a dedicated mobile experience for leadership.",
      },
      {
        src: "./C9.png",
        alt: "Additional Analytics",
        title: "Additional Analytics Feature",
        description:
          "Extended analytics capabilities for deeper customer experience insights.",
      },
      {
        src: "./C10.png",
        alt: "Extra Feature",
        title: "Extra CX Capability",
        description:
          "Additional tools to enhance customer experience management.",
      },
    ],
  },
  {
    title: "Super Club Holidays",
    accent: "orange",
    subheading: "Holiday Booking & Travel Management Platform",
    role: "Team Lead & Full Stack Developer. Handled client communication, conducted code reviews, merged PRs, and worked on complex implementations",
    description: `Super Club Holidays is a comprehensive holiday booking and travel management platform designed for a travel agency to streamline their operations. As Team Lead, I coordinated development efforts, conducted code reviews, and ensured high-quality deliverables while maintaining direct communication with the client.

The platform handles everything from package browsing and booking to itinerary management and payment processing. Features include dynamic pricing, availability management, customer portals, and an admin dashboard for managing bookings, agents, and commissions. The system integrates with multiple payment gateways and third-party travel APIs for real-time availability and pricing.`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Payment Gateway",
      "REST APIs",
      "Redux Toolkit",
      "AWS S3",
      "Tailwind CSS",
      "React PDF",
      "Nodemailer",
    ],
    links: [
      {
        label: "View Website",
        url: "#",
        tooltip: "Live Website",
      },
    ],
    images: [
      {
        src: "./S1.png",
        alt: "Homepage",
        title: "Stunning Travel Homepage",
        description:
          "An engaging homepage showcasing featured destinations, deals, and seamless search functionality.",
      },
      {
        src: "./S2.png",
        alt: "Holiday Packages",
        title: "Dynamic Holiday Packages",
        description:
          "Browse and filter holiday packages with real-time pricing, availability, and detailed itineraries.",
      },
      {
        src: "./S3.png",
        alt: "Booking Flow",
        title: "Streamlined Booking Process",
        description:
          "Multi-step booking flow with traveler details, add-ons selection, and secure payment integration.",
      },
      {
        src: "./S4.png",
        alt: "Admin Dashboard",
        title: "Powerful Admin Dashboard",
        description:
          "Manage bookings, packages, agents, and commissions with comprehensive admin controls.",
      },
      {
        src: "./S5.png",
        alt: "Customer Portal",
        title: "Customer Self-Service Portal",
        description:
          "Customers can view bookings, download itineraries, and manage their travel documents.",
      },
      {
        src: "./S6.png",
        alt: "Payment Integration",
        title: "Secure Payment Processing",
        description:
          "Multiple payment options with secure gateway integration and automated invoice generation.",
      },
    ],
    secondaryImages: [
      {
        src: "./S7.png",
        alt: "Itinerary Builder",
        title: "Custom Itinerary Builder",
        description:
          "Create and customize detailed day-by-day itineraries with activities, accommodations, and transfers.",
      },
      {
        src: "./S8.png",
        alt: "Mobile Experience",
        title: "Mobile-Optimized Booking",
        description:
          "Fully responsive design ensuring seamless booking experience across all devices.",
      },
      {
        src: "./S9.png",
        alt: "Additional Feature",
        title: "Additional Travel Feature",
        description:
          "Extended functionality for enhanced travel booking experience.",
      },
      {
        src: "./S10.png",
        alt: "Extra Feature",
        title: "Extra Travel Capability",
        description:
          "Additional tools to maximize travel management efficiency.",
      },
    ],
  },
  {
    title: "Fiveline HMS",
    accent: "cyan",
    subheading: "Hospital Management System",
    role: "Worked on Master Data and Settings module - complete Frontend and Backend",
    description: `Fiveline HMS is a Hospital Management System designed to streamline healthcare operations and improve patient care delivery. I was responsible for developing the Master Data and Settings modules, which form the backbone of the entire system configuration.

The Master Data module handles all reference data including departments, doctors, procedures, diagnosis codes, insurance providers, and pricing configurations. The Settings module provides administrators with granular control over system behavior, user permissions, notification preferences, and integration settings. Both modules feature comprehensive audit logging, data validation, and role-based access control.`,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access",
      "Tailwind CSS",
      "React Table",
      "Formik",
      "Yup Validation",
    ],
    links: [
      {
        label: "View System",
        url: "#",
        tooltip: "HMS Platform",
      },
    ],
    images: [
      {
        src: "./h1.png",
        alt: "Master Data",
        title: "Comprehensive Master Data Management",
        description:
          "Manage all reference data including departments, procedures, diagnosis codes, and pricing in one place.",
      },
      {
        src: "./h2.png",
        alt: "Doctor Management",
        title: "Doctor & Staff Directory",
        description:
          "Complete staff management with schedules, specializations, and department assignments.",
      },
      {
        src: "./h3.png",
        alt: "System Settings",
        title: "Granular System Configuration",
        description:
          "Fine-tune every aspect of the HMS with comprehensive settings and preference controls.",
      },
      {
        src: "./h4.png",
        alt: "Role Management",
        title: "Role-Based Access Control",
        description:
          "Define custom roles with specific permissions for different user types across the hospital.",
      },
      {
        src: "./h5.png",
        alt: "Audit Logs",
        title: "Complete Audit Trail",
        description:
          "Track all changes to master data and settings with detailed audit logs for compliance.",
      },
      {
        src: "./h6.png",
        alt: "Data Import",
        title: "Bulk Data Import/Export",
        description:
          "Import and export master data in bulk with validation and error handling for data migration.",
      },
    ],
    secondaryImages: [
      {
        src: "./h7.png",
        alt: "Insurance Config",
        title: "Insurance Provider Configuration",
        description:
          "Manage insurance providers, coverage plans, and claim settings for seamless billing integration.",
      },
      {
        src: "./h8.png",
        alt: "Notification Settings",
        title: "Notification & Alert Configuration",
        description:
          "Configure email, SMS, and in-app notifications for appointments, results, and system alerts.",
      },
      {
        src: "./h9.png",
        alt: "Additional Feature",
        title: "Additional HMS Feature",
        description:
          "Extended functionality for enhanced hospital management.",
      },
      {
        src: "./h10.png",
        alt: "Extra Feature",
        title: "Extra HMS Capability",
        description:
          "Additional tools to maximize hospital management efficiency.",
      },
    ],
  },
  {
    title: "Zernyx",
    accent: "green",
    subheading: "AI-Powered Patent Intelligence Platform",
    role: "Allocated as a resource to an existing client project, working with client developers to add new features, solve bugs, and participate in daily standups",
    description: `Zernyx is a technology platform integrated with AI microservices for intelligent patent analysis and management. The platform enables users to post, file, and manage third-party patents while leveraging AI-powered insights for patent research and competitive analysis.

Working as an embedded resource with the client's development team, I contributed to feature development, bug fixes, and participated in daily standups following agile methodologies. The platform uses advanced NLP models to analyze patent documents, extract key claims, and identify potential conflicts or opportunities. Real-time collaboration features allow legal teams and inventors to work together on patent applications.`,
    technologies: [
      "Next.js",
      "FastAPI",
      "Azure",
      "OpenAI APIs",
      "Redis",
      "Socket.io",
      "Docker",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
    ],
    links: [
      {
        label: "View Platform",
        url: "#",
        tooltip: "Zernyx Platform",
        icon: <SiVercel />,
      },
    ],
    images: [
      {
        src: "./z1.png",
        alt: "Zernyx Homepage",
        title: "AI-Powered Patent Intelligence Platform",
        description:
          "A modern interface for exploring patents, filing applications, and accessing AI-driven insights.",
      },
      {
        src: "./z2.png",
        alt: "Patent Search",
        title: "Intelligent Patent Search",
        description:
          "AI-enhanced search with natural language queries, semantic matching, and advanced filters.",
      },
      {
        src: "./z3.png",
        alt: "AI Analysis",
        title: "AI-Powered Patent Analysis",
        description:
          "Automated extraction of key claims, prior art identification, and patentability assessment.",
      },
      {
        src: "./z4.png",
        alt: "Patent Filing",
        title: "Streamlined Filing Workflow",
        description:
          "Guided patent filing process with AI suggestions for claims and description optimization.",
      },
      {
        src: "./z5.png",
        alt: "Collaboration",
        title: "Real-Time Collaboration",
        description:
          "Work together with legal teams and inventors on patent applications with live editing.",
      },
      {
        src: "./z6.png",
        alt: "Dashboard",
        title: "Portfolio Management Dashboard",
        description:
          "Track patent portfolio, deadlines, maintenance fees, and competitive landscape in one view.",
      },
    ],
    secondaryImages: [
      {
        src: "./z7.png",
        alt: "AI Insights",
        title: "Competitive Intelligence Insights",
        description:
          "AI-generated reports on competitor patents, technology trends, and white space opportunities.",
      },
      {
        src: "./z8.png",
        alt: "API Integration",
        title: "Enterprise API Integration",
        description:
          "RESTful APIs for integrating patent data and AI insights into existing enterprise systems.",
      },
      {
        src: "./z9.png",
        alt: "Additional Feature",
        title: "Additional Zernyx Feature",
        description:
          "Extended functionality for enhanced patent intelligence.",
      },
      {
        src: "./z10.png",
        alt: "Extra Feature",
        title: "Extra Zernyx Capability",
        description:
          "Additional tools to maximize patent management efficiency.",
      },
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Nesture />
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};

export default Projects;

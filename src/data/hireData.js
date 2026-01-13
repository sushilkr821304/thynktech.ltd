
export const hireDevelopers = [
    { title: "App Developers", id: "app-developers" },
    { title: "Android Developers", id: "android-developers" },
    { title: "iOS Developers", id: "ios-developers" },
    { title: "Flutter Developers", id: "flutter-developers" },
    { title: "React Native Developers", id: "react-native-developers" },
    { title: "Frontend Developers", id: "frontend-developers" },
    { title: "ReactJS Developers", id: "reactjs-developers" },
    { title: "Backend Developers", id: "backend-developers" },
    { title: "Node.js Developers", id: "nodejs-developers" },
    { title: "Python Developers", id: "python-developers" },
    { title: "Java Developers", id: "java-developers" },
    { title: "Full-stack Developers", id: "fullstack-developers" },
    { title: "Spring Boot Developers", id: "springboot-developers" },
    { title: "Dedicated Developers", id: "dedicated-developers" },
    { title: "UI/UX Designers", id: "ui-ux-designers" },
    { title: "AI Developers", id: "ai-developers" },
    { title: "Software Developers", id: "software-developers" }
];

const genericExpertise = {
    "Technology Stack": "JavaScript, TypeScript, HTML5, CSS3",
    "Libraries": "React, Redux, Axios, Lodash",
    "Frameworks": "Next.js, Express, Tailwind CSS",
    "APIs": "RESTful, GraphQL, WebSockets",
    "State Management": "Redux Toolkit, Context API, Zustand",
    "Testing Tools": "Jest, Cypress, React Testing Library",
    "Cloud": "AWS, Google Cloud Platform, Azure",
    "Platforms": "Web, Mobile, Desktop",
    "Version Control": "Git, GitHub, GitLab, Bitbucket",
    "UI Libraries": "Material UI, Ant Design, Chakra UI",
    "Project Management Tools": "Jira, Trello, Asana, Slack",
    "Deployment Process": "CI/CD, Docker, Kubernetes",
    "Hosting Platform": "Vercel, Netlify, AWS S3",
    "DevOps Tools": "Jenkins, GitHub Actions, Terraform",
    "Authentication": "OAuth2, JWT, Firebase Auth, Auth0",
    "Progressive Web Apps": "Service Workers, Manifest, Workbox",
    "Backend Compatibility": "Node.js, Python, PHP, Java",
    "CMS": "Strapi, Contentful, WordPress (Headless)",
    "Payment Integrations": "Stripe, PayPal, Razorpay",
    "Versions": "ES6+, React 18+",
    "Other Integrations": "Google Maps API, SendGrid, Twilio"
};

export const developerData = {
    "app-developers": {
        name: "App Developers",
        intro: "Our expert app developers craft high-performance, scalable mobile solutions for iOS and Android using cutting-edge technologies.",
        expertise: { ...genericExpertise, "Platforms": "iOS, Android, Cross-platform" },
        network: [
            { name: "Candidate #1", image: "/images/16.png" },
            { name: "Candidate #2", image: "/images/17.png" },
            { name: "Candidate #3", image: "/images/18.png" },
            { name: "Candidate #4", image: "/images/20.png" },
            { name: "Candidate #5", image: "/images/21.png" },
            { name: "Candidate #6", image: "/images/23.png" },
        ],
    },
    "android-developers": {
        name: "Android Developers",
        intro: "Hire skilled Android developers to build robust, user-centric applications tailored for the world's most popular mobile OS.",
        expertise: { ...genericExpertise, "Technology Stack": "Kotlin, Java, XML", "Frameworks": "Android Jetpack, Retrofit", "Platforms": "Android" },
        network: [
            { name: "Android Expert #1", image: "/images/16.png" },
            { name: "Android Expert #2", image: "/images/17.png" },
            { name: "Android Expert #3", image: "/images/18.png" },
            { name: "Android Expert #4", image: "/images/21.png" },
        ],
    },
    "ios-developers": {
        name: "iOS Developers",
        intro: "Leverage the expertise of our iOS developers to create premium, secure, and intuitive applications for Apple's ecosystem.",
        expertise: { ...genericExpertise, "Technology Stack": "Swift, Objective-C", "Frameworks": "SwiftUI, UIKit, Combine", "Platforms": "iOS, macOS, watchOS" },
        network: [
            { name: "iOS Expert #1", image: "/images/group.jpeg" },
            { name: "iOS Expert #2", image: "/images/16.png" },
            { name: "iOS Expert #3", image: "/images/17.png" },
            { name: "iOS Expert #4", image: "/images/18.png" },
        ],
    },
    "flutter-developers": {
        name: "Flutter Developers",
        intro: "Hire Flutter developers to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        expertise: { ...genericExpertise, "Technology Stack": "Dart", "Frameworks": "Flutter SDK", "State Management": "Riverpod, Bloc, Provider" },
        network: [
            { name: "Flutter Expert #1", image: "/images/23.png" },
            { name: "Flutter Expert #2", image: "/images/24.png" },
            { name: "Flutter Expert #3", image: "/images/25.png" },
            { name: "Flutter Expert #4", image: "/images/26.png" },
        ],
    },
    "react-native-developers": {
        name: "React Native Developers",
        intro: "Our React Native experts deliver high-performance cross-platform apps with a truly native look and feel.",
        expertise: { ...genericExpertise, "Technology Stack": "JavaScript, TypeScript", "Frameworks": "React Native, Expo", "Libraries": "React Navigation, Native Base" },
        network: [
            { name: "RN Expert #1", image: "/images/27.png" },
            { name: "RN Expert #2", image: "/images/29.png" },
            { name: "RN Expert #3", image: "/images/30.PNG" },
            { name: "RN Expert #4", image: "/images/31.png" },
        ],
    },
    "frontend-developers": {
        name: "Frontend Developers",
        intro: "Hire top-tier frontend developers to translate complex designs into interactive, pixel-perfect user experiences.",
        expertise: { ...genericExpertise },
        network: [
            { name: "Frontend Expert #1", image: "/images/35.png" },
            { name: "Frontend Expert #2", image: "/images/36.png" },
            { name: "Frontend Expert #3", image: "/images/87.png" },
            { name: "Frontend Expert #4", image: "/images/Hitesh.png" },
        ],
    },
    "reactjs-developers": {
        name: "ReactJS Developers",
        intro: "Our ReactJS specialists build lightning-fast, component-based web applications that are scalable and easy to maintain.",
        expertise: { ...genericExpertise, "Versions": "React 16, 17, 18" },
        network: [
            { name: "React Expert #1", image: "/images/87.png" },
            { name: "React Expert #2", image: "/images/Hitesh.png" },
            { name: "React Expert #3", image: "/images/Sujal.png" },
            { name: "React Expert #4", image: "/images/mohit.png" },
        ],
    },
    "backend-developers": {
        name: "Backend Developers",
        intro: "Hire backend developers to architect solid, secure, and scalable server-side systems that power your digital infrastructure.",
        expertise: { ...genericExpertise, "Technology Stack": "Node.js, Python, Java, Go", "Databases": "PostgreSQL, MongoDB, Redis" },
        network: [
            { name: "Backend Expert #1", image: "/images/Karan.png" },
            { name: "Backend Expert #2", image: "/images/26.png" },
            { name: "Backend Expert #3", image: "/images/25.png" },
            { name: "Backend Expert #4", image: "/images/9.png" },
        ],
    },
    "nodejs-developers": {
        name: "Node.js Developers",
        intro: "Our Node.js experts build high-speed, real-time backend services using event-driven, non-blocking I/O architecture.",
        expertise: { ...genericExpertise, "Technology Stack": "Node.js, Express.js", "Libraries": "Socket.io, Mongoose" },
        network: [
            { name: "Node.js Expert #1", image: "/images/9.png" },
            { name: "Node.js Expert #2", image: "/images/6.png" },
            { name: "Node.js Expert #3", image: "/images/Rushi.png" },
            { name: "Node.js Expert #4", image: "/images/11.png" },
        ],
    },
    "python-developers": {
        name: "Python Developers",
        intro: "Hire Python developers for everything from robust web backends to complex data science and AI/ML implementations.",
        expertise: { ...genericExpertise, "Technology Stack": "Python 3.x", "Frameworks": "Django, Flask, FastAPI", "Libraries": "Pandas, NumPy, Scikit-learn" },
        network: [
            { name: "Python Expert #1", image: "/images/13.png" },
            { name: "Python Expert #2", image: "/images/14.png" },
            { name: "Python Expert #3", image: "/images/15.png" },
            { name: "Python Expert #4", image: "/images/20.png" },
        ],
    },
    "java-developers": {
        name: "Java Developers",
        intro: "Our Java specialists deliver enterprise-grade, secure, and scalable solutions for mission-critical business applications.",
        expertise: { ...genericExpertise, "Technology Stack": "Java 8, 11, 17", "Frameworks": "Spring Boot, Hibernate", "Build Tools": "Maven, Gradle" },
        network: [
            { name: "Java Expert #1", image: "/images/11.png" },
            { name: "Java Expert #2", image: "/images/12.png" },
            { name: "Java Expert #3", image: "/images/13.png" },
            { name: "Java Expert #4", image: "/images/6.png" },
        ],
    },
    "fullstack-developers": {
        name: "Full-stack Developers",
        intro: "Hire comprehensive full-stack developers who master both client-side and server-side development to build end-to-end solutions.",
        expertise: { ...genericExpertise },
        network: [
            { name: "Fullstack Expert #1", image: "/images/17.png" },
            { name: "Fullstack Expert #2", image: "/images/27.png" },
            { name: "Fullstack Expert #3", image: "/images/29.png" },
            { name: "Fullstack Expert #4", image: "/images/mohit.png" },
        ],
    },
    "springboot-developers": {
        name: "Spring Boot Developers",
        intro: "Leverage our Spring Boot experts to build production-ready, microservices-oriented applications with ease and efficiency.",
        expertise: { ...genericExpertise, "Technology Stack": "Java, Kotlin", "Frameworks": "Spring Boot, Spring Security, Spring Data" },
        network: [
            { name: "Spring Boot Expert #1", image: "/images/12.png" },
            { name: "Spring Boot Expert #2", image: "/images/11.png" },
            { name: "Spring Boot Expert #3", image: "/images/Rushi.png" },
            { name: "Spring Boot Expert #4", image: "/images/6.png" },
        ],
    },
    "dedicated-developers": {
        name: "Dedicated Developers",
        intro: "Onboard a dedicated team of experts focused exclusively on your project to ensure maximum productivity and alignment.",
        expertise: { ...genericExpertise },
        network: [
            { name: "Dedicated Expert #1", image: "/images/87.png" },
            { name: "Dedicated Expert #2", image: "/images/17.png" },
            { name: "Dedicated Expert #3", image: "/images/mohit.png" },
            { name: "Dedicated Expert #4", image: "/images/Rushi.png" },
        ],
    },
    "ui-ux-designers": {
        name: "UI/UX Designers",
        intro: "Hire creative UI/UX designers to craft engaging, user-centered interfaces that balance aesthetics with flawless functionality.",
        expertise: {
            ...genericExpertise,
            "Technology Stack": "Figma, Adobe XD, Sketch, Photoshop",
            "Frameworks": "Design Systems, Style Guides",
            "UI Libraries": "Tailwind CSS, Bootstrap",
            "Other Integrations": "User Testing, Wireframing, Prototyping"
        },
        network: [
            { name: "Design Expert #1", image: "/images/18.png" },
            { name: "Design Expert #2", image: "/images/24.png" },
            { name: "Design Expert #3", image: "/images/31.png" },
        ],
    },
    "ai-developers": {
        name: "AI Developers",
        intro: "Hire AI developers to implement intelligent algorithms, machine learning models, and automation that give your business a competitive edge.",
        expertise: { ...genericExpertise, "Technology Stack": "Python, R, C++", "Frameworks": "TensorFlow, PyTorch, Keras", "Libraries": "OpenCV, NLTK, Spacy" },
        network: [
            { name: "AI Expert #1", image: "/images/13.png" },
            { name: "AI Expert #2", image: "/images/14.png" },
            { name: "AI Expert #3", image: "/images/15.png" },
            { name: "AI Expert #4", image: "/images/20.png" },
        ],
    },
    "software-developers": {
        name: "Software Developers",
        intro: "Our versatile software developers build custom, scalable solutions across various platforms to meet your specific business requirements.",
        expertise: { ...genericExpertise },
        network: [
            { name: "Dev Expert #1", image: "/images/16.png" },
            { name: "Dev Expert #2", image: "/images/17.png" },
            { name: "Dev Expert #3", image: "/images/11.png" },
            { name: "Dev Expert #4", image: "/images/mohit.png" },
        ],
    },
    "devops-engineers": {
        name: "DevOps Engineers",
        intro: "Our DevOps engineers streamline your software delivery lifecycle with robust CI/CD pipelines, automated infrastructure, and continuous monitoring.",
        expertise: {
            ...genericExpertise,
            "Tools": "Docker, Kubernetes, Jenkins, GitHub Actions",
            "Cloud": "AWS, Azure, Google Cloud Platform (GCP)",
            "IaC": "Terraform, Ansible, CloudFormation",
            "Monitoring": "Prometheus, Grafana, ELK Stack"
        },
        network: [
            { name: "DevOps Expert #1", image: "/images/11.png" },
            { name: "DevOps Expert #2", image: "/images/12.png" },
            { name: "DevOps Expert #3", image: "/images/13.png" },
            { name: "DevOps Expert #4", image: "/images/14.png" },
        ],
    },
    "qa-engineers": {
        name: "QA Engineers",
        intro: "Ensure flawless software quality with our QA engineers who specialize in comprehensive manual and automated testing strategies.",
        expertise: {
            ...genericExpertise,
            "Tools": "Selenium, Cypress, Playwright, Postman, JMeter",
            "Types": "Manual, Automation, API, Performance",
            "Frameworks": "TestNG, JUnit, Cucumber",
            "CI Integration": "Jenkins, GitLab CI"
        },
        network: [
            { name: "QA Expert #1", image: "/images/15.png" },
            { name: "QA Expert #2", image: "/images/16.png" },
            { name: "QA Expert #3", image: "/images/17.png" },
            { name: "QA Expert #4", image: "/images/18.png" },
        ],
    }
};

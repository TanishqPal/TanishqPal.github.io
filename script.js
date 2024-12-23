const projects = {
    projects: [
      {
        title: "E-Commerce Website Deployment",
        description: "Developed and deployed a fully functional e-commerce website with a modern, responsive design, including both frontend and backend integration.",
        link: "https://gatsby-ecommerce-theme.netlify.app/",
        tools_and_technologies: ["Gatsby", "React", "Prettier", "CSS", "Netlify"],
        features: [
          "Modern and responsive UI",
          "Deployed on Netlify for high availability",
          "Utilized Gatsby for fast loading and SEO optimization"
        ]
      },
      {
        title: "Real-Time Image Classifier App",
        description: "Built a real-time image classification app leveraging a pre-trained machine learning model, including a mobile app for Android.",
        tools_and_technologies: ["TensorFlow", "Python Notebook", "Android Studio", "ML"],
        features: [
          "Real-time image classification using TensorFlow",
          "Mobile app implementation for user-friendly interaction",
          "Integrated pre-trained ML models for efficient classification"
        ]
      },
      {
        title: "IoT Application in Home Automation",
        description: "Designed a home automation system with intelligent device control and data communication using a Telegram bot and Arduino.",
        tools_and_technologies: ["NodeMCU", "Arduino", "NTP Servers", "Telegram Bot", "HTTPS Servers", "APIs"],
        features: [
          "Automated device control with water flow monitoring",
          "Wi-Fi-enabled communication to send and receive data",
          "Integration with Telegram bot for user notifications and commands"
        ]
      },
      {
        title: "Data Fetching and Web Scraping Projects",
        description: "Implemented multiple data-fetching and web scraping projects to extract, analyze, and visualize data from APIs and websites.",
        link: "https://github.com/TanishqPal/API",
        tools_and_technologies: ["BeautifulSoup4", "Pandas", "Matplotlib", "Seaborn", "Requests", "Flask"],
        features: [
          "Created Python scripts for API data fetching and visualization",
          "Built a web scraping tool using BeautifulSoup4 for data extraction",
          "Analyzed and visualized fetched data using Pandas and Matplotlib"
        ]
      }
    ]
  };
  
  function loadProjects() {
    const projectList = document.getElementById('project-list');
    projects.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
  
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <h4>Tools & Technologies</h4>
        <ul>
          ${project.tools_and_technologies.map(tool => `<li>${tool}</li>`).join('')}
        </ul>
        <h4>Features</h4>
        <ul>
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
      `;
  
      projectList.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadProjects);
  
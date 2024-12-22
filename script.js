document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            const projects = data.projects;
            const container = document.getElementById("projects-container");
            projects.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.className = "project";
                projectElement.innerHTML = `
                    <h3><a href="${project.link || '#'}" target="_blank">${project.title}</a></h3>
                    <p>${project.description}</p>
                    <h4>Tools & Technologies:</h4>
                    <ul>
                        ${project.tools_and_technologies.map(tool => `<li>${tool}</li>`).join('')}
                    </ul>
                    <h4>Features:</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                `;
                container.appendChild(projectElement);
            });
        })
        .catch(err => console.error("Error loading projects:", err));
});

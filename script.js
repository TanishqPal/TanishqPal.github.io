document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            projects.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.className = "project";
                projectElement.innerHTML = `
                    <h3><a href="${project.url}" target="_blank">${project.name}</a></h3>
                    <p>${project.description}</p>
                `;
                container.appendChild(projectElement);
            });
        })
        .catch(err => console.error("Error loading projects:", err));
});

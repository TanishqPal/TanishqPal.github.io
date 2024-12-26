document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      const projectList = document.getElementById("project-list");
      data.projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("w3-half", "w3-margin-bottom");

        projectDiv.innerHTML = `
          <div class="w3-white w3-card">
            <div class="w3-container">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <p><strong>Tools:</strong> ${project.tools_and_technologies.join(", ")}</p>
              <ul>
                ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
              ${project.link ? `<a href="${project.link}" target="_blank" class="w3-button w3-black">View Project</a>` : ""}
            </div>
          </div>
        `;

        projectList.appendChild(projectDiv);
      });
    })
    .catch((error) => console.error("Error fetching projects:", error));
});

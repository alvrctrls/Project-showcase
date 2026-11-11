import ProjectCard from './ProjectCard';

function ProjectList({ projects, searchTerm, onSearchChange }) {

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
       <section className="card">
       Search Bar 
      <input
        type="text"
        className="search-input"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      

      
      <div className="projects-container">
        {filteredProjects.length === 0 ? (
          <p className="empty-message">No projects found.</p>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
    );
}

export default ProjectList;
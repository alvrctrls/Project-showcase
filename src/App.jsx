import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

const initialProjects = [
  { id: '1', title: 'Project 1', description: 'Description of the project' },
  { id: '2', title: 'Project 2', description: 'Description of the project' },
  { id: '3', title: 'Project 3', description: 'Description of the project' },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);

  // 2. Search query state
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Handler to add a new project to the array
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        {/* Pass down the function to add a project */}
        <ProjectForm onAddProject={handleAddProject} />

        {/* Pass down the list data and search values */}
        <ProjectList
          projects={projects}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </main>
    </div>
  );
}
 export default App;
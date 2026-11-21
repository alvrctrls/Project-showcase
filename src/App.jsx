import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

const initialProjects = [
  { id: '1', title: 'Project 1', description: 'Created a responsive web ui' },
  { id: '2', title: 'Project 2', description: 'Built a web app' },
  { id: '3', title: 'Project 3', description: 'Machine learning library in c from scratch' },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        {/* Pass down prop to add project */}
        <ProjectForm onAddProject={handleAddProject} />

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
import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload

    // doesn't add when empty
    if (!title.trim() || !description.trim()) return;

    
    onAddProject({
      id: crypto.randomUUID(), //unique key
      title: title,
      description: description,
    });

    setTitle('');
    setDescription('');
  };

  return (
    <section className="card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;
import { useState } from "react"

import ProjectListItem from "./ProjectListItem"

function ProjectsList({ projects }) {
    const [ phase, setPhase ] = useState('all')

    const filteredProjects = projects.filter((project) => {
        if (phase === 'all') return true
        return project.phase === parseInt(phase)
    })

    const renderProjects = filteredProjects.map((project) => (
        <ProjectListItem 
            key={project.id} 
            name={project.name} 
            about={project.about} 
            phase={project.phase} 
            link={project.link} 
            image={project.image}
        />
    ))
    
    function handleClick(event) {
        setPhase(event.target.id)
    }

    return (
        <section>
            <h2>Projects</h2>

            <div className="filter">
                <button id={'all'} onClick={handleClick}>All</button>
                <button id={5} onClick={handleClick}>Phase 5</button>
                <button id={4} onClick={handleClick}>Phase 4</button>
                <button id={3} onClick={handleClick}>Phase 3</button>
                <button id={2} onClick={handleClick}>Phase 2</button>
                <button id={1} onClick={handleClick}>Phase 1</button>
            </div>

            <input type="text" placeholder="Search..."/>

            <ul className="cards">
                { renderProjects }
            </ul>
        </section>
    )
}

export default ProjectsList
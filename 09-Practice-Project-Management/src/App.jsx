import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const newProject = {
                ...projectData,
                id: Math.random(),
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleCancelAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    function handleSelectProject(projectId) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: projectId,
            };
        });
    }

    function handleDeleteProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
            };
        });
    }

    function handleAddTask(taskData) {
        setProjectsState((prevState) => {
            const newTask = {
                ...taskData,
                id: Math.random(),
                projectId: prevState.selectedProjectId,
            };

            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask],
            };
        });
    }

    function handleDeleteTask(taskId) {}

    const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar
                onSelectProject={handleSelectProject}
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
            />
            {content}
        </main>
    );
}

export default App;

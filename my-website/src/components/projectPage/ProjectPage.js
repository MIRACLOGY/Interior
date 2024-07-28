import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgJSON from '../imgs/imgs.json';
import './ProjectPage.css';

// 랜덤 이미지를 가져오는 함수
const getRandomImage = (folderName, imageCount) => {
    const imageIndex = Math.floor(Math.random() * imageCount) + 1;
    const imageName = `${process.env.PUBLIC_URL}/static/imgs/${folderName}/${imageIndex}.jpg`;
    return imageName;
};

const ProjectPage = () => {
    const projects = ImgJSON.projects;
    const navigate = useNavigate();

    const initialImages = {};
    projects.forEach(project => {
        initialImages[project.id] = getRandomImage(project.name, project.imageCount);
    });

    const handleCardClick = (projectId) => {
        navigate(`/Interior/projects/${projectId}`);
    };

    return (
        <div className="project-page">
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card" onClick={() => handleCardClick(project.id)}>
                        <div className="project-image-container">
                            <img
                                src={initialImages[project.id]}
                                alt={project.name}
                                className="project-image"
                            />
                            <div className="project-title">{project.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;

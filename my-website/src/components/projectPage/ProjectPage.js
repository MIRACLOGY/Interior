import React, { useState } from 'react';
import DetailPage from '../detailPage/DetailPage';
import ImgJSON from '../imgs/imgs.json';
import './ProjectPage.css';

// 랜덤 이미지를 가져오는 함수
const getRandomImage = (folderName, imageCount) => {
    const imageIndex = Math.floor(Math.random() * imageCount) + 1;
    const imageName = `${process.env.PUBLIC_URL}/static/imgs/${folderName}/${imageIndex}.jpg`;
    return imageName;
};

const ProjectPage = () => {
    const projects = Object.keys(ImgJSON);

    const initialImages = {};
    projects.forEach(project => {
        initialImages[project] = getRandomImage(project, ImgJSON[project]);
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [projectImages] = useState(initialImages);

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    return (
        <div className="project-page">
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" onClick={() => openModal(project)}>
                        <div className="project-image-container">
                            <img
                                src={projectImages[project]}
                                alt={project}
                                className="project-image"
                            />
                        </div>
                        <p>{project}</p>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <DetailPage project={currentProject} imageCount={ImgJSON[currentProject]} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectPage;

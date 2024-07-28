import React from 'react';
import { useParams } from 'react-router-dom';
import ImgJSON from '../imgs/imgs.json';
import './DetailPage.css';

const getProjectImages = (folderName, imageCount) => {
    let images = [];
    for (let i = 1; i <= imageCount; i++) {
        const imageName = `${process.env.PUBLIC_URL}/static/imgs/${folderName}/${i}.jpg`;
        images.push(imageName);
    }
    return images;
};

const DetailPage = () => {
    const { projectId } = useParams();
    const projectData = ImgJSON.projects.find(p => p.id === parseInt(projectId));
    const project = projectData.name;
    const imageCount = projectData.imageCount;
    const images = getProjectImages(project, imageCount);

    return (
        <div className="detail-page">
            <h2>{project}</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={index} className="image-card">
                        <div className="project-image-container">
                            <img src={image} alt={`${project} image ${index + 1}`} className="project-image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailPage;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImgJSON from '../imgs/imgs.json';
import './DetailPage.css';

const getProjectImages = (projectName, imageCount) => {
    const images = [];
    for (let i = 1; i <= imageCount; i++) {
        const imageName = `${process.env.PUBLIC_URL}/static/imgs/${projectName}/${i}.jpg`;
        images.push(imageName);
    }
    return images;
};

const DetailPage = () => {
    const { projectId } = useParams();
    const numericProjectId = parseInt(projectId, 10);
    const project = ImgJSON.projects.find(p => p.id === numericProjectId);

    const [selectedImage, setSelectedImage] = useState(null);

    if (!project) {
        return <div>Project not found</div>;
    }

    const images = getProjectImages(project.name, project.imageCount);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="detail-page-custom">
            <h1>{project.name}</h1>
            <div className="image-grid-custom">
                {images.map((image, index) => (
                    <div key={index} className="image-item-custom" onClick={() => openModal(image)}>
                        <img src={image} alt={`${project.name} ${index + 1}`} />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="custom-modal" onClick={closeModal}>
                    <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Selected" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailPage;

import React, { useState } from 'react';
import './Grid.css';
import Header from './header/Header';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is needed for accessibility

function Grid() {   
    const [divs, setDivs] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const addDiv = (imgUrl) => {
        setDivs([...divs, { imgSrc: imgUrl }]);
    };

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    return (
        <div>
            <Header current={addDiv} />
            <div className="grid-container">
                {divs.map((div, index) => (
                    <div key={index} className="grid-item">
                        <img 
                            src={div.imgSrc} 
                            alt={`Image ${index + 1}`} 
                            className="item-img" 
                            onClick={() => openModal(div.imgSrc)}
                        />
                    </div>
                ))}
            </div>
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="image-modal-overlay"
            >
                <div className="image-container">
                    <img src={selectedImage} alt="Modal Content" className="image-content" />
                </div>
                <button onClick={closeModal} className="close-button">Close</button>
            </Modal>
        </div>
    );
}

export default Grid;

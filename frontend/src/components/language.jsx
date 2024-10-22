import React, { useState } from 'react';
import translate from 'google-translate-api-x'; // Importing google-translate-api-x
import './language.css'; // Assuming you have your styles in this file

const Language = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [languageCode, setLanguageCode] = useState('en'); // Default language is English

    // Function to handle language selection
    const handleLanguageChange = async (e) => {
        const selectedLanguage = e.target.value;
        setLanguageCode(selectedLanguage);

        // Get all elements that need translation (for simplicity, we assume all text elements)
        const elementsToTranslate = document.querySelectorAll('[data-translate]');

        elementsToTranslate.forEach(async (element) => {
            try {
                const originalText = element.getAttribute('data-original-text') || element.innerText;
                element.setAttribute('data-original-text', originalText); // Store original text
                const res = await translate(originalText, { to: selectedLanguage });
                element.innerText = res.text; // Set translated text
            } catch (error) {
                console.error('Translation error:', error);
            }
        });
    };

    // Function to toggle modal visibility
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <>
            {/* Language Icon */}
            <div id="languageIcon" title="Change Language" onClick={toggleModal}>
                🌐
            </div>

            {/* Modal to select language */}
            {modalVisible && (
                <div id="google_translate_modal" className="flex" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button className="close-btn" onClick={toggleModal}>✖</button>

                        {/* Language Selection */}
                        <h3>Select Language</h3>
                        <select value={languageCode} onChange={handleLanguageChange} className='black'>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="hi">Hindi</option>
                            {/* Add more language options as needed */}
                        </select>
                    </div>
                </div>
            )}
        </>
    );
};

export default Language;

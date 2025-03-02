import AddImage from './Components/Addimagecard/Addimage';
import Dogimage from '../src/assets/dogaddimage.webp?url';
import './App.css';
import { useState } from 'react';
import Modals from './Components/Modal/Modal'; // Ensure correct import

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <> 
      <AddImage 
        imagecontent={Dogimage} 
        Footercontent={<div>Know about your dog</div>} 
        handleOpen={() => {
          setIsModalOpen(!isModalOpen);
          console.log("Modal state changed:", !isModalOpen);
        }} 
      />
      
      {/* Ensure `Modals.js` properly renders `ModalContent` */}
      <Modals
        isOpen={isModalOpen} // Corrected prop
        onClose={() => setIsModalOpen(false)}
      >
       ModalContents={ <div className="p-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
          
          {/* File Input */}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            className="mb-4 border p-2 rounded-lg"
          />
          
          {/* Display Uploaded Image */}
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Uploaded" 
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
          )}
        </div>
    }
      </Modals>
    </>
  );
}

export default App;

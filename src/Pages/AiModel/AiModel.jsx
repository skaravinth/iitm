import React, { useState } from "react";
import axios from "axios";

function AiModel() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }
    setLoading(true);
  
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.id; // Assuming the user ID is stored as 'id'
  
    if (!userId) {
      alert("User not found. Please log in again.");
      setLoading(false);
      return;
    }
  
    const formData = new FormData();
    formData.append("image", image);
    formData.append("user_id", userId);
  
    try {
      const response = await axios.post("http://localhost:3000/check-dog", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to process image.");
    } finally {
      setLoading(false);
    }
  };
  

  const getHealthIndicator = (value, isBoolean = false) => {
    if (isBoolean) {
      return value ? 
        { color: "#4CAF50", text: "Yes" } : 
        { color: "#FF5722", text: "No" };
    }
    return { color: "#333", text: value };
  };

  return (
    <div style={{ 
      maxWidth: "1000px", 
      margin: "0 auto", 
      padding: "40px 20px",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: "#333"
    }}>
      <header style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 10px 0", color: "#2D3748" }}>
          🐾 AI Dog Detection
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#718096", maxWidth: "600px", margin: "0 auto" }}>
          Upload a photo of your dog to identify breed, age, and other characteristics
        </p>
      </header>

      <div style={{ 
        display: "flex", 
        flexDirection: window.innerWidth > 768 ? "row" : "column",
        gap: "30px", 
        alignItems: "flex-start"
      }}>
        <div style={{ 
          flex: "1", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div 
            style={{ 
              width: "100%",
              maxWidth: "450px",
              minHeight: "300px",
              border: dragActive ? "2px dashed #3182CE" : "2px dashed #CBD5E0",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backgroundColor: dragActive ? "#EBF8FF" : "#F7FAFC",
              marginBottom: "20px",
              position: "relative",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragActive(false);
            }}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "280px", 
                  borderRadius: "8px",
                  objectFit: "contain"
                }} 
              />
            ) : (
              <>
                <div style={{ fontSize: "3rem", marginBottom: "15px", color: "#A0AEC0" }}>🖼️</div>
                <p style={{ margin: "0 0 10px 0", fontWeight: "500", color: "#4A5568" }}>
                  Drag & drop your dog image here
                </p>
                <p style={{ margin: "0", fontSize: "0.9rem", color: "#718096" }}>
                  or click to browse files
                </p>
              </>
            )}
            <input 
              type="file" 
              id="fileInput" 
              onChange={handleFileChange} 
              accept="image/*" 
              style={{ display: "none" }}
            />
          </div>

          <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "450px" }}>
            <button 
              type="submit" 
              disabled={!image || loading}
              style={{
                width: "100%",
                padding: "12px 20px",
                backgroundColor: !image ? "#A0AEC0" : "#3182CE",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: !image ? "not-allowed" : "pointer",
                transition: "background-color 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
              }}
            >
              {loading ? (
                <>
                  <div style={{ 
                    width: "20px", 
                    height: "20px", 
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderTop: "3px solid white",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }} />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>Detect Dog Characteristics</>
              )}
            </button>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </form>
        </div>
        <div style={{ flex: "1" }}>
          {result ? (
            <div style={{ 
              backgroundColor: "white", 
              borderRadius: "12px", 
              padding: "25px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <h2 style={{ margin: "0 0 20px 0", color: "#2D3748", fontSize: "1.5rem" }}>
                Dog Analysis Results
              </h2>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px 30px",
                marginBottom: "25px"
              }}>
                <div>
                  <p style={{ margin: "0 0 5px 0", color: "#718096", fontSize: "0.9rem" }}>BREED</p>
                  <p style={{ margin: "0", fontWeight: "600", fontSize: "1.1rem" }}>{result.dog.breed}</p>
                </div>
                <div>
                  <p style={{ margin: "0 0 5px 0", color: "#718096", fontSize: "0.9rem" }}>AGE</p>
                  <p style={{ margin: "0", fontWeight: "600", fontSize: "1.1rem" }}>{result.dog.age}</p>
                </div>
                <div>
                  <p style={{ margin: "0 0 5px 0", color: "#718096", fontSize: "0.9rem" }}>COLOR</p>
                  <p style={{ margin: "0", fontWeight: "600", fontSize: "1.1rem" }}>{result.dog.color}</p>
                </div>
                <div>
                  <p style={{ margin: "0 0 5px 0", color: "#718096", fontSize: "0.9rem" }}>WEIGHT</p>
                  <p style={{ margin: "0", fontWeight: "600", fontSize: "1.1rem" }}>{result.dog.weight}</p>
                </div>
              </div>
              
              <div style={{ 
                display: "flex", 
                gap: "15px", 
                marginBottom: "20px" 
              }}>
                
              </div>

              {!result.dog.vaccinated && (
                <div style={{ 
                  padding: "10px 15px", 
                  backgroundColor: "#FFF3E0", 
                  borderLeft: "4px solid #FF5722",
                  borderRadius: "4px",
                  marginBottom: "20px",
                  fontSize: "0.9rem"
                }}>
                  <p style={{ margin: "0", color: "#D84315" }}>
                    <strong>Health Alert:</strong> This dog appears to not be vaccinated. 
                    Vaccinations are essential for your pet's health.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div style={{ 
              backgroundColor: "#F7FAFC", 
              borderRadius: "12px", 
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "15px", color: "#A0AEC0" }}>🔍</div>
              <h3 style={{ margin: "0 0 10px 0", color: "#4A5568" }}>No Analysis Yet</h3>
              <p style={{ margin: "0", color: "#718096", maxWidth: "350px" }}>
                Upload a photo of your dog and click the detect button to see detailed information
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AiModel;
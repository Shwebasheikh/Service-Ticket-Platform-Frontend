import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ServiceRequestForm.css"; // Your custom styling if needed
import LocationDetector from "../Components/LocationDetector";
import Footer from "../Components/Footer";
import SideNav from "../Components/SideNav";
const ServiceRequestForm = () => {
  // Initializing all fields in state
  const [formData, setFormData] = useState({
    requestTitle: "",
    category: "",
    priority: "",
    urgency: "",
    location: "",
    description: "",
    files: [],
  });

  // For text/select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // For file input
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      files: [...e.target.files],
    }));
  };

  // On form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Ticket submitted successfully!");
  };

  return (
    <>
<SideNav />
    <div className="container mt-5 service-request-container">
      <div className="card shadow-lg">
        <div className="card-header text-white">
          <h2 className="mb-1">New Service Request</h2>
          <p className="mb-0 opacity-75">
            Submit a new ticket for support or maintenance
          </p>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Request Title */}
            <div className="mb-4">
              <label htmlFor="requestTitle" className="form-label fw-bold">
                Request Title
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="requestTitle"
                name="requestTitle"
                placeholder="Enter request title"
                value={formData.requestTitle}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="form-label fw-bold">
                Category
              </label>
              <select
                className="form-select form-select-lg"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Technical">Technical Support</option>
                <option value="Maintenance">Facility Maintenance</option>
                <option value="Equipment">Equipment Request</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Priority and Urgency */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label fw-bold">Priority Level</label>
                <div className="form-check">
                  <input
                    type="radio"
                    name="priority"
                    id="priorityHigh"
                    value="High"
                    className="form-check-input"
                    checked={formData.priority === "High"}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="priorityHigh" className="form-check-label">
                    High (Business Critical)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="priority"
                    id="priorityMedium"
                    value="Medium"
                    className="form-check-input"
                    checked={formData.priority === "Medium"}
                    onChange={handleChange}
                  />
                  <label htmlFor="priorityMedium" className="form-check-label">
                    Medium (Home Policy)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="priority"
                    id="priorityLow"
                    value="Low"
                    className="form-check-input"
                    checked={formData.priority === "Low"}
                    onChange={handleChange}
                  />
                  <label htmlFor="priorityLow" className="form-check-label">
                    Low (General Inquiry)
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="urgency" className="form-label fw-bold">
                  Urgency
                </label>
                <select
                  className="form-select form-select-lg"
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">Select urgency level</option>
                  <option value="Critical">Critical (Immediate)</option>
                  <option value="High">High (24 hours)</option>
                  <option value="Medium">Medium (3 days)</option>
                  <option value="Low">Low (Whenever possible)</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label htmlFor="location" className="form-label fw-bold">
                Location
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                id="location"
                name="location"
                placeholder="e.g., Building A, 3rd Floor"
                value={formData.location}
                onChange={handleChange}
              />

              {/* 📍 Use My Location Button */}
              <LocationDetector
                onDetect={(loc) => setFormData({ ...formData, location: loc })}
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-bold">
                Description
              </label>
              <textarea
                className="form-control form-control-lg"
                id="description"
                name="description"
                rows="5"
                placeholder="Describe your issue/request in detail..."
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <div className="form-text">
                Be as detailed as possible for quicker resolution
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <h5 className="fw-bold">Attachments</h5>
              <p className="text-muted">
                Upload images, documents, or PDFs (Max 10MB)
              </p>
              <input
                type="file"
                id="fileUpload"
                className="form-control"
                multiple
                onChange={handleFileChange}
              />
              {formData.files.length > 0 && (
                <ul className="list-group mt-3">
                  {Array.from(formData.files).map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {file.name}
                      <span className="badge bg-secondary">
                        {Math.round(file.size / 1024)} KB
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <div className="d-grid mt-4">
              <button type="submit" className="btn bg-gradient-orange  btn-lg">
                <i className="bi bi-send-fill me-2"></i> Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />  
    </>
  );
};

export default ServiceRequestForm;

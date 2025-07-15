import React, { useState } from "react";
import "./pendingservices.css";

const PendingServiceForm = () => {
  const [formData, setFormData] = useState({
    process: {
      new: "",
      update: "",
      lost: "",
      surrender: ""
    },
    documents: {
      new: "",
      update: "",
      lost: "",
      surrender: ""
    }
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Pending Service:", formData);
  };

  return (
    <div className="pending-service-container">
      <h2>Pending Service Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Process</h3>
          {["new", "update", "lost", "surrender"].map((key) => (
            <div className="form-row" key={`process-${key}`}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <textarea
                rows={3}
                placeholder={`Enter ${key} process details`}
                value={formData.process[key]}
                onChange={(e) =>
                  handleChange("process", key, e.target.value)
                }
              />
            </div>
          ))}
        </div>

        <div className="form-section">
          <h3>Documents</h3>
          {["new", "update", "lost", "surrender"].map((key) => (
            <div className="form-row" key={`documents-${key}`}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <textarea
                rows={3}
                placeholder={`Enter ${key} document details`}
                value={formData.documents[key]}
                onChange={(e) =>
                  handleChange("documents", key, e.target.value)
                }
              />
            </div>
          ))}
        </div>

        <div className="button-group">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PendingServiceForm;

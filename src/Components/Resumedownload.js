import React from "react";

const ResumeDownload = () => {
    const resumeUrl = "/Mahesh_Gavale_Resume.pdf"; // Path to the resume in the public folder

    return (
        <div style={{ textAlign: "center", margin: "2rem" }}>
            <h2>Download My Resume</h2>
            <a
                href={resumeUrl}
                download="Mahesh_Gavale_Cv.pdf" // File name for the downloaded file
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Download Resume
            </a>
        </div>
    );
};

export default ResumeDownload;

import React from "react";
import Document from "react-pdf/dist/cjs/Document.js";



const PDFViewer = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-300 max-w-3xl">
                <div>
                    <Document file="../pdfs/JayLaraEorM2024Resume.pdf">
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default PDFViewer;
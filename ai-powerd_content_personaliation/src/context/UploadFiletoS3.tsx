"use client"
import axios from "axios";
import React, { createContext, useContext } from "react";

type UploadFileToS3Types = {
    UploadFile: () => Promise<void>;
    RemoveFile: () => void;
};

const UploadFileContext = createContext<UploadFileToS3Types | null>(null);

const UploadFileProvider = ({ children }: { children?: React.ReactNode }) => {
    const UploadFile = async (formData) => {
        try {
            const response = await axios.get("http://localhost:3000/app/api/UploadToS3");
            console.log(response.data);
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    const RemoveFile = () => {
        // Implement logic
    };

    return (
        <UploadFileContext.Provider value={{ UploadFile, RemoveFile }}>
            {children}
        </UploadFileContext.Provider>
    );
};

export const useUploadFileToS3 = () => {
    const context = useContext(UploadFileContext);
    if (!context) {
        throw new Error("useUploadFileToS3 must be used within an UploadFileProvider");
    }
    return context;
};

export default UploadFileProvider;


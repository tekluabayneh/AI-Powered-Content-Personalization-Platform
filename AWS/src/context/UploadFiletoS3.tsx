"use client"
import axios from "axios";
import React, { createContext, useContext } from "react";

type UploadFileToS3Types = {
    UploadFile: (item:any) => Promise<void>;
    RemoveFile: () => void;
};

const UploadFileContext = createContext<UploadFileToS3Types | null>(null);

const UploadFileProvider = ({ children }: { children?: React.ReactNode }) => {


    const UploadFile = async (file:string) => {
        console.log(file)
        try {
            const response = await axios.post("http://localhost:3000/api/UploadToS3",{quote:file});
            console.log(response)
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


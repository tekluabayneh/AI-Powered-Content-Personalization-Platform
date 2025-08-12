"use client"
import axios from "axios";
import React, { createContext, useContext } from "react";

type UploadFileToS3Types = {
    UploadFile: (item:any) => Promise<void>;
    RemoveFile: () => void;
};

const UploadFileContext = createContext<UploadFileToS3Types | null>(null);

const UploadFileProvider = ({ children }: { children?: React.ReactNode }) => {


    const UploadFile = async (file) => {
        console.log(file)
        const formdata = new FormData();
        formdata.append("file", file);

        try {
            const response = await fetch("http://localhost:3000/api/UploadToS3",{
                method:"POST",
                headers:{ 
                    'Content-Type': 'application/octet-stream',
                      'X-Filename': encodeURIComponent(file.name),
                }, 
               body:formdata
            });

             const data = await response.json()
            console.log(data)
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


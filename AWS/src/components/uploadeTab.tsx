"use client"
import { Cloud, Upload, FolderPlus, Plus, Link } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {  TabsContent} from "./ui/tabs";
import { useState } from "react";


const UploadTab = ({isDragging,isUploading, handleDrop, setIsDragging, uploadProgress, handleFileUpload}) => {
const [loadQuote, setLoadQuote ]  =useState("")
    return (

        <TabsContent value="upload" className="space-y-6 animate-fade-in">
            <Card className="p-8 bg-gradient-surface border-border shadow-card">
                <div
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
isDragging 
? 'border-upload-zone-active bg-upload-zone-active/10 scale-105' 
: 'border-border hover:border-upload-zone hover:bg-upload-zone/5'
}`}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={() => setIsDragging(true)}
                    onDragLeave={() => setIsDragging(false)}
                >
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-glow-pulse">
                            <Upload className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Upload Your Files</h3>
                            <p className="text-muted-foreground mb-4">
                                Drag and drop files here, or click to select files
                            </p>
                            <Button 
                                onClick={() => handleFileUpload(loadQuote)}
                                className="bg-gradient-primary hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                               uploade Quote
                            </Button>
                        </div>
                    </div>

                    <input type="text" value={loadQuote} className="w-full border border-gray-400" onChange={(e) => setLoadQuote(e.target.value)} />
                </div>

            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 bg-gradient-surface border-border shadow-card hover:shadow-primary/20 transition-all cursor-pointer">
                    <div className="text-center space-y-2">
                        <FolderPlus className="w-8 h-8 text-primary mx-auto" />
                        <h3 className="font-medium">Create Folder</h3>
                        <p className="text-sm text-muted-foreground">Organize your files</p>
                    </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-border shadow-card hover:shadow-primary/20 transition-all cursor-pointer">
                    <div className="text-center space-y-2">
                        <Link className="w-8 h-8 text-primary mx-auto" />
                        <h3 className="font-medium">Upload from URL</h3>
                        <p className="text-sm text-muted-foreground">Import from web</p>
                    </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-border shadow-card hover:shadow-primary/20 transition-all cursor-pointer">
                    <div className="text-center space-y-2">
                        <Cloud className="w-8 h-8 text-primary mx-auto" />
                        <h3 className="font-medium">Sync Folder</h3>
                        <p className="text-sm text-muted-foreground">Auto-sync desktop</p>
                    </div>
                </Card>
            </div>
        </TabsContent>

    )}
export default UploadTab

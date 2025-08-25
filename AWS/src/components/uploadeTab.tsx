"use client"
import { Cloud, Upload, FolderPlus, Plus, Link } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {  TabsContent} from "./ui/tabs";
import { useState } from "react";


const UploadTab = ({handleUpdateFile , handleFileUpload}) => {
const [loadQuote, setLoadQuote ]  =useState("")
const [newFileName, setnewFileName] = useState("")
const [newFile, setnewFile] = useState("") 


 const handelUpdate = () =>  { 
 console.log("name=>", newFileName, "file=>", newFile)  
handleUpdateFile(newFileName, newFile) 
    } 


    return (

        <TabsContent value="upload" className="space-y-6 animate-fade-in">
            <Card className="p-8 bg-gradient-surface border-border shadow-card">
                <div >
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
                        <h3 className="font-medium">UPdate file</h3>
                       <input  value={newFileName} onChange={(e) => setnewFileName(e.target.value)} type="text" className="border border-white/40  rounded " placeholder="enter file name"/> 
                       <input value={newFile} onChange={(e) => setnewFile(e.target.value)} type="text" className="border border-white/40  rounded" placeholder="inter new quote"/> 
                    </div>
                    <button className="cursor-pointer bg-white/40 border border-white/40 rounded " onClick={handelUpdate}>update quote</button>
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

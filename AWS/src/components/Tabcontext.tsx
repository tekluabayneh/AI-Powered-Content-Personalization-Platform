"use client"
import { Cloud, Heart, File,FileText, Archive,Video,Image, TrendingUp, } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {  TabsContent } from "./ui/tabs";


const TabContent = ({files}) => {



const getFileIcon = (type: string) => {
  switch (type) {
    case 'image': return Image;
    case 'video': return Video;
    case 'document': return FileText;
    case 'audio': return Music;
    case 'archive': return Archive;
    default: return File;
  }
};


  const totalSize = "156.8 GB";
  const usedStorage = 75;
  const totalFiles = files.length;



    return (
        <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-gradient-surface border-border shadow-card">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <File className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{totalFiles}</p>
                            <p className="text-muted-foreground">Total Files</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-border shadow-card">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                            <Cloud className="w-6 h-6 text-success" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{totalSize}</p>
                            <p className="text-muted-foreground">Storage Used</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-border shadow-card">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                            <Heart className="w-6 h-6 text-warning" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{files.reduce((acc, file) => acc + file.likes, 0)}</p>
                            <p className="text-muted-foreground">Total Likes</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-border shadow-card">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-destructive" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">89%</p>
                            <p className="text-muted-foreground">Engagement</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Storage Usage */}
            <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h3 className="text-lg font-semibold mb-4">Storage Usage</h3>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>Used: {totalSize}</span>
                        <span>{usedStorage}% of 200 GB</span>
                    </div>
                    <Progress value={usedStorage} className="h-2" />
                </div>
            </Card>
            {/* Recent Activity */}
            <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h3 className="text-lg font-semibold mb-4">Recent Files</h3>
                <div className="space-y-4">
                    {files.slice(0, 3).map((file) => {
                        const FileIcon = getFileIcon(file.type);
                        return (
                            <div key={file.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-file-hover transition-colors">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <FileIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">{file.name}</p>
                                    <p className="text-sm text-muted-foreground">{file.uploadDate} • {file.size}</p>
                                </div>
                                <Badge variant="secondary">{file.likes} ❤️</Badge>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </TabsContent>

    )}
export default TabContent

"use client"
import { Search, Heart, Download, Share2, Filter, Grid3X3, List, Eye, } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {  TabsContent} from "./ui/tabs";
import { useState } from "react";

const FileTab = ({searchQuery, setSearchQuery ,filteredFiles, getFileIcon, toggleLike}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');


    return ( 
        <TabsContent value="files" className="space-y-6 animate-fade-in">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search files and tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Button
                        variant={viewMode === 'grid' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                    >
                        <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                    >
                        <List className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </Button>
                </div>
            </div>
            {/* Files Grid/List */}
            <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "space-y-4"
            }>
                {filteredFiles.map((file) => {
                    const FileIcon = getFileIcon(file.type);

                    if (viewMode === 'list') {
                        return (
                            <Card key={file.id} className="p-4 bg-gradient-surface border-border shadow-file hover:shadow-card transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <FileIcon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium">{file.name}</h3>
                                        <p className="text-sm text-muted-foreground">{file.size} • {file.uploadDate}</p>
                                        <div className="flex space-x-1 mt-2">
                                            {file.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => toggleLike(file.id)}
                                            className={file.isLiked ? "text-destructive" : ""}
                                        >
                                            <Heart className={`w-4 h-4 ${file.isLiked ? 'fill-current' : ''}`} />
                                            <span className="ml-1">{file.likes}</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => generateShareLink(file.id)}>
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        );
                    }
                    return (
                        <Card key={file.id} className="p-4 bg-gradient-surface border-border shadow-file hover:shadow-card transition-all duration-300 group">
                            <div className="aspect-square bg-primary/10 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                <FileIcon className="w-12 h-12 text-primary" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                        <Eye className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <h3 className="font-medium truncate mb-2">{file.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{file.size} • {file.uploadDate}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-1">
                                    {file.tags.slice(0, 2).map(tag => (
                                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleLike(file.id)}
                                        className={file.isLiked ? "text-destructive" : ""}
                                    >
                                        <Heart className={`w-4 h-4 ${file.isLiked ? 'fill-current' : ''}`} />
                                        <span className="ml-1 text-xs">{file.likes}</span>
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => generateShareLink(file.id)}>
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </TabsContent>



    )}

export default FileTab

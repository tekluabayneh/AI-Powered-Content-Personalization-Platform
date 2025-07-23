"use client"
import { useState, useRef } from "react";
import { 
  Cloud, Upload, Search, User, Settings, Heart, Download, 
  Trash2, Share2, Filter, Grid3X3, List, Bell, BarChart3,
  FolderPlus, File, Image, Video, FileText, Music, Archive,
  TrendingUp, Clock, Star, Eye, AlertCircle, CheckCircle,
  Plus, Menu, X, Link
} from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import { Progress } from "../../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface FileItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document' | 'audio' | 'archive';
  size: string;
  uploadDate: string;
  likes: number;
  isLiked: boolean;
  url: string;
  shareUrl?: string;
  tags: string[];
}

const mockFiles: FileItem[] = [
  {
    id: '1',
    name: 'Project_Presentation.pdf',
    type: 'document',
    size: '2.4 MB',
    uploadDate: '2 hours ago',
    likes: 12,
    isLiked: true,
    url: '#',
    tags: ['work', 'presentation']
  },
  {
    id: '2',
    name: 'Vacation_Photos.zip',
    type: 'archive',
    size: '45.7 MB',
    uploadDate: '1 day ago',
    likes: 8,
    isLiked: false,
    url: '#',
    tags: ['personal', 'photos']
  },
  {
    id: '3',
    name: 'Demo_Video.mp4',
    type: 'video',
    size: '124.2 MB',
    uploadDate: '3 days ago',
    likes: 25,
    isLiked: true,
    url: '#',
    tags: ['demo', 'product']
  },
  {
    id: '4',
    name: 'Profile_Picture.jpg',
    type: 'image',
    size: '856 KB',
    uploadDate: '5 days ago',
    likes: 15,
    isLiked: false,
    url: '#',
    tags: ['profile', 'personal']
  }
];

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

const FileSpherePortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [files, setFiles] = useState<FileItem[]>(mockFiles);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [notifications] = useState([
    { id: 1, message: "Project_Presentation.pdf uploaded successfully", type: "success", time: "2 min ago" },
    { id: 2, message: "New file shared with team", type: "info", time: "1 hour ago" },
    { id: 3, message: "Storage limit at 75%", type: "warning", time: "3 hours ago" }
  ]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (uploadedFiles: FileList | null) => {
    if (!uploadedFiles) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload Complete",
            description:` ${uploadedFiles.length} file(s) uploaded successfully,`
          });
          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const toggleLike = (fileId: string) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId 
        ? { ...file, isLiked: !file.isLiked, likes: file.isLiked ? file.likes - 1 : file.likes + 1 }
        : file
    ));
  };
const generateShareLink = (fileId: string) => {
    const shareUrl = `https://filesphere.app/shared/${fileId}`;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Share Link Copied",
      description: "Secure share link copied to clipboard",
    });
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalSize = "156.8 GB";
  const usedStorage = 75;
  const totalFiles = files.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-gradient-surface backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  File Sphere Portal
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                {notifications.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-primary text-xs">
                    {notifications.length}
                  </Badge>
                )}
              </div>
              <Avatar className="w-8 h-8">
                <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-card border border-border">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center space-x-2">
              <File className="w-4 h-4" />
              <span>Files</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
            </TabsTrigger>
          </TabsList>
{/* Dashboard Tab */}
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

          {/* Files Tab */}
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
{/* Upload Tab */}
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
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Choose Files
                    </Button>
                  </div>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
              </div>
              
              {isUploading && (
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uploading files...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
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
{/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-gradient-surface border-border shadow-card">
              <div className="flex items-center space-x-6">
                <Avatar className="w-20 h-20">
                  <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                </Avatar>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground">john.doe@filesphere.app</p>
                  <Badge className="bg-success text-success-foreground">Pro Account</Badge>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Two-Factor Authentication</span>
                    <Badge variant="outline" className="text-success border-success">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Auto-sync</span>
                    <Badge variant="outline">Disabled</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-surface border-border shadow-card">
                <h3 className="text-lg font-semibold mb-4">Usage Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Files Uploaded</span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total Downloads</span>
                    <span className="font-medium">3,892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shares Created</span>
                    <span className="font-medium">156</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
{/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6 animate-fade-in">
            <Card className="p-6 bg-gradient-surface border-border shadow-card">
              <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-file-hover transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      notification.type === 'success' ? 'bg-success/20' :
                      notification.type === 'warning' ? 'bg-warning/20' : 'bg-primary/20'
                    }`}>
                      {notification.type === 'success' ? <CheckCircle className="w-4 h-4 text-success" /> :
                       notification.type === 'warning' ? <AlertCircle className="w-4 h-4 text-warning" /> :
                       <Bell className="w-4 h-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{notification.message}</p>
                      <p className="text-sm text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FileSpherePortal

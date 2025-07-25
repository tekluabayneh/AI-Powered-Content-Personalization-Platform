"use client"
import { useState, useRef } from "react";
import { Upload,File, User, Bell, BarChart3, Image, Video, FileText, Music, Archive, } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import TabContent from "@/components/Tabcontext";
import NotificationTab from "@/components/notification";
import FileTab from "@/components/fileTab";
import UploadTab from "@/components/uploadeTab";
import ProfileTab from "@/components/ProfileTab";
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

const FileSpherePortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [files, setFiles] = useState<FileItem[]>(mockFiles);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
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


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
<Header/>
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
<TabContent files={files} getFileIcon={getFileIcon}/>

          {/* Files Tab */}
           <FileTab searchQuery={searchQuery}  setSearchQuery={setSearchQuery} filteredFiles={filteredFiles} getFileIcon={getFileIcon} toggleLike={toggleLike}/>              
{/* Upload Tab */}
<UploadTab isDragging={isDragging} handleDrop={handleDrop} isUploading={isUploading} setIsDragging={setIsDragging}/>


{/* Profile Tab */}
        <ProfileTab/>

{/* Notifications Tab */}
<NotificationTab  notifications={[]}/>
        </Tabs>
      </div>
    </div>
  );
};

export default FileSpherePortal

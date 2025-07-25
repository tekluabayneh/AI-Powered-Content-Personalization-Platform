"use client"
import { Cloud, User, Bell, } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { useState } from "react";

const Header =() => {

 const [notifications] = useState([
    { id: 1, message: "Project_Presentation.pdf uploaded successfully", type: "success", time: "2 min ago" },
    { id: 2, message: "New file shared with team", type: "info", time: "1 hour ago" },
    { id: 3, message: "Storage limit at 75%", type: "warning", time: "3 hours ago" }
  ]);
  

    return (
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
    )
}
export default Header

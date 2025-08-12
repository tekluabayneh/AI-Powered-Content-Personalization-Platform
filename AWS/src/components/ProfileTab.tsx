"use client"
import { User} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar } from "./ui/avatar";
import { TabsContent } from "@radix-ui/react-tabs";
const ProfileTab = () => {

return (

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
)}
export default ProfileTab

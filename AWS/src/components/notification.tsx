import { TabsContent} from "@radix-ui/react-tabs"
import { Card } from "./ui/card"
import { Bell } from "lucide-react"
const NotificationTab =({notifications}) => {
return (

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
)}
export default NotificationTab

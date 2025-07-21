const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-foreground">
              ContentAI
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-muted-foreground hover:text-foreground cursor-pointer">
                Dashboard
              </div>
              <div className="text-muted-foreground hover:text-foreground cursor-pointer">
                Analytics
              </div>
              <div className="text-muted-foreground hover:text-foreground cursor-pointer">
                Settings
              </div>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium cursor-pointer">
                Upgrade
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="text-3xl font-bold text-foreground mb-2">
            Welcome back, User
          </div>
          <div className="text-muted-foreground">
            Here's what's happening with your content today
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Total Views
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded"></div>
              </div>
            </div>
            <div className="text-3xl font-bold text-card-foreground mb-2">
              124,543
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-green-500">+12.5%</span> from last month
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Engagement Rate
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="text-3xl font-bold text-card-foreground mb-2">
              89.2%
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-green-500">+3.1%</span> from last month
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Conversions
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-sm rotate-45"></div>
              </div>
            </div>
            <div className="text-3xl font-bold text-card-foreground mb-2">
              2,847
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-green-500">+18.3%</span> from last month
            </div>
          </div>
<div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                AI Score
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="text-3xl font-bold text-card-foreground mb-2">
              94.7
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-green-500">+5.2</span> from last month
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-xl font-semibold text-card-foreground mb-6">
              Recent Activity
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary rounded"></div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-card-foreground">
                    New personalization rule created
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2 hours ago
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-card-foreground">
                    Content performance report generated
                  </div>
                  <div className="text-sm text-muted-foreground">
                    4 hours ago
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary rounded-sm rotate-45"></div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-card-foreground">
                    AI model updated successfully
                  </div>
                  <div className="text-sm text-muted-foreground">
                    1 day ago
                  </div>
                </div>
              </div>
            </div>
          </div>


{/* Quick Actions */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-xl font-semibold text-card-foreground mb-6">
              Quick Actions
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <div className="font-medium text-card-foreground mb-1">
                  Create Campaign
                </div>
                <div className="text-sm text-muted-foreground">
                  New personalization
                </div>
              </div>
              
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div className="font-medium text-card-foreground mb-1">
                  View Analytics
                </div>
                <div className="text-sm text-muted-foreground">
                  Performance data
                </div>
              </div>
              
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-sm rotate-45"></div>
                </div>
                <div className="font-medium text-card-foreground mb-1">
                  Manage Content
                </div>
                <div className="text-sm text-muted-foreground">
                  Content library
                </div>
              </div>
              
              <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-lg"></div>
                </div>
                <div className="font-medium text-card-foreground mb-1">
                  AI Settings
                </div>
                <div className="text-sm text-muted-foreground">
                  Configure AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

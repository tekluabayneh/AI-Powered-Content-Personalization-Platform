const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              AI-POWERED PLATFORM
            </div>
            <div className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Content That
              <div className="text-primary">Understands You</div>
            </div>
            <div className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your content strategy with intelligent personalization. Our AI adapts in real-time to deliver exactly what your audience needs, when they need it.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                Start Free Trial
              </div>
              <div className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors cursor-pointer">
                Watch Demo
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}    <div className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Personalization at Scale
            </div>
            <div className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI engine learns from every interaction to deliver content that converts
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
              <div className="text-xl font-semibold text-card-foreground mb-4">
                Real-time Adaptation
              </div>
              <div className="text-muted-foreground leading-relaxed">
                Content automatically adjusts based on user behavior, preferences, and engagement patterns in real-time.
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <div className="text-xl font-semibold text-card-foreground mb-4">
                Smart Recommendations
              </div>
              <div className="text-muted-foreground leading-relaxed">
                AI-powered suggestions help users discover relevant content they might have missed.
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-sm rotate-45"></div>
              </div>
<div className="text-xl font-semibold text-card-foreground mb-4">
                Analytics Dashboard
              </div>
              <div className="text-muted-foreground leading-relaxed">
                Deep insights into content performance and user engagement with actionable recommendations.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">94%</div>
              <div className="text-muted-foreground">Higher Engagement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3.2x</div>
              <div className="text-muted-foreground">Conversion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Content Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Content Strategy?
          </div>
          <div className="text-lg text-primary-foreground/80 mb-8">
            Join thousands of companies already using AI to deliver personalized experiences
          </div>
          <div className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer inline-block">
            Get Started Today
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-foreground mb-4 md:mb-0">
              ContentAI
            </div>
            <div className="flex space-x-8 text-muted-foreground">
              <div className="hover:text-foreground cursor-pointer">Privacy</div>
              <div className="hover:text-foreground cursor-pointer">Terms</div>
              <div className="hover:text-foreground cursor-pointer">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-foreground mb-2">Welcome Back</div>
          <div className="text-muted-foreground">Sign in to your account</div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-primary focus:ring-ring border-input rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <div className="text-primary hover:text-primary/80 cursor-pointer">
                Forgot password?
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

import { useState, useEffect } from "react";

export const GreenCodeLanding = () => {
  const [script, setScript] = useState("");
  const [chat, setChat] = useState(["👋 Hi! I'm your Green Sage Assistant."]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSend = () => {
    if (!script.trim()) return;
    setChat([...chat, `You: ${script}`, "🤖 Bot: Analyzing your code for energy efficiency..."]);
    setScript("");
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="font-sans bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/30" />
      
      {/* Mouse Follow Gradient */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-radial from-green-500/20 to-transparent pointer-events-none transition-all duration-300 ease-out blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <FloatingParticles />
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent mb-6 animate-pulse">
              Green Sage
            </h1>
            <div className="text-2xl md:text-4xl font-light text-green-100 mb-2">
              Assistant 🌱
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Your <span className="text-green-400 font-semibold">sustainable coding companion</span> inside VS Code. 
            Optimize energy, save costs, and write greener code with AI-powered insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 transform">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="group px-8 py-4 border-2 border-green-400 text-green-400 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-green-400 hover:text-black hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "50%", label: "Energy Saved" },
              { number: "1M+", label: "Lines Optimized" },
              { number: "99%", label: "Uptime" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Supercharged Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Real-time Insights",
                desc: "Get energy efficiency insights while you code with live metrics and suggestions.",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: "🌍",
                title: "Carbon Tracking",
                desc: "Track and reduce your digital carbon footprint with detailed analytics.",
                gradient: "from-green-400 to-emerald-600"
              },
              {
                icon: "🤖",
                title: "AI Assistant",
                desc: "Get intelligent recommendations powered by machine learning algorithms.",
                gradient: "from-blue-400 to-purple-600"
              }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl blur-xl"
                     style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />
                
                <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl hover:border-green-500/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-emerald-900/10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            Experience the Magic
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enhanced Script Editor */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl hover:border-green-500/50 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                  <h3 className="text-xl font-bold ml-4 text-green-400">💻 Code Editor</h3>
                </div>
                
                <textarea
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder="// Write your code here and watch the magic happen...
function calculateEnergy() {
  // Green Sage will analyze this!
}"
                  className="w-full h-80 p-4 bg-black/50 text-green-300 font-mono border border-gray-600 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/25 transition-all duration-300 resize-none placeholder-gray-500"
                />
                
                <button
                  onClick={handleSend}
                  className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                  ⚡ Analyze Code
                </button>
              </div>
            </div>

            {/* Enhanced Chatbot */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl hover:border-green-500/50 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                    🤖
                  </div>
                  <h3 className="text-xl font-bold text-green-400">AI Assistant</h3>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                
                <div className="flex-1 bg-black/50 border border-gray-600 rounded-2xl p-4 h-80 mb-6 overflow-y-auto custom-scrollbar">
                  {chat.map((msg, idx) => (
                    <div key={idx} className={`mb-4 p-3 rounded-xl ${
                      msg.startsWith('You:') 
                        ? 'bg-green-900/30 border-l-4 border-green-500 ml-8' 
                        : 'bg-gray-800/50 border-l-4 border-blue-500 mr-8'
                    } animate-fadeIn`}>
                      <p className="text-gray-200">{msg}</p>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask about energy optimization..."
                    className="w-full p-4 bg-black/50 text-white border border-gray-600 rounded-2xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/25 transition-all duration-300 placeholder-gray-500 pr-12"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300 transition-colors duration-300">
                    ➤
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-emerald-900/20" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-12 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Building Tomorrow
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Green Sage Assistant isn't just a tool—it's a <span className="text-green-400 font-semibold">revolution</span> in sustainable development. 
            We're empowering developers worldwide to create applications that don't just perform better, 
            but actively contribute to a <span className="text-emerald-400 font-semibold">greener digital future</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["🌱 Carbon Neutral", "⚡ Energy Efficient", "🚀 Performance First", "🔒 Privacy Protected"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full text-green-300 hover:bg-green-800/40 transition-all duration-300 cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold text-green-400 mb-2">Green Sage Assistant</div>
            <p className="text-gray-400">Coding for a sustainable tomorrow</p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8 text-gray-400">
            {["About", "Features", "Privacy", "Contact"].map((link, i) => (
              <a key={i} href="#" className="hover:text-green-400 transition-colors duration-300">{link}</a>
            ))}
          </div>
          
          <p className="text-gray-500">
            © {new Date().getFullYear()} Green Sage Assistant. Powered by sustainable innovation.
          </p>
        </div>
      </footer>

                  <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(34, 197, 94, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
        
        /* Prevent text clipping */
        h1, h2, h3 {
          line-height: 1.1 !important;
          padding: 0.1em 0 !important;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          display: inline-block !important;
        }
      `}</style>
    </div>
  );
};
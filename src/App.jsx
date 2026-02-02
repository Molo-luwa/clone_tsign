import { useState, useEffect } from 'react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [docImageIndex, setDocImageIndex] = useState(0);
  

  const slides = [
    {
      title: "Total control with Ordered Signing",
      description: "Easily control your signing workflow. Set who signs first, second, or last to keep documents organized, compliant, and error-free.",
      content: (
        <div className="relative w-full flex flex-col items-center justify-center space-y-2">
          
          <div style={{animation: 'slideIn 0.6s ease-out 0.8s both'}} className="bg-white p-3 rounded-md shadow-lg w-48 self-start ml-10 flex items-center gap-3 border border-gray-100 opacity-40 scale-90">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><img src="/src/assets/images/user.png" alt="user" className="w-5 h-5" /></div>
             <span className="text-gray-400 text-xs font-medium">First signatory</span>
          </div>
          <div style={{animation: 'slideIn 0.6s ease-out 0.6s both'}} className="bg-white p-3 rounded-md shadow-lg w-48 self-start ml-20 flex items-center gap-3 border border-gray-100 opacity-60 scale-95">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><img src="/src/assets/images/user.png" alt="user" className="w-5 h-5" /></div>
             <span className="text-gray-400 text-xs font-medium">Second signatory</span>
          </div>
          <div style={{animation: 'slideIn 0.6s ease-out 0.4s both'}} className="bg-white p-3 rounded-md shadow-lg w-48 self-start ml-32 flex items-center gap-3 border border-gray-100">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><img src="/src/assets/images/user.png" alt="user" className="w-5 h-5" /></div>
             <span className="text-gray-500 text-xs font-medium">Third signatory</span>
          </div>
          <div style={{animation: 'slideIn 0.6s ease-out 0.2s both'}} className="bg-white p-3 rounded-md shadow-lg w-48 self-start ml-44 flex items-center gap-3 border border-gray-100 ring-2 ring-white">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs"><img src="/src/assets/images/user.png" alt="user" className="w-5 h-5" /></div>
             <span className="text-gray-500 text-xs font-medium">Fourth signatory</span>
          </div>
          <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )
    },
    {
      title: "Doc to PDF",
      description: "Quickly turn any document into a secure, share-ready PDF with just a single click. No extra tools, no formatting issues.",
       content: (
      <img className= " " alt="Logo" src={docImageIndex === 0 ? "/src/assets/images/logindocimage2.svg" : "/src/assets/images/logindocimg1.svg"} />
       )
    },
    {
      title: "Auto notification",
      description: "Never miss a step. Auto notifications alert you instantly when documents are opened, signed, or pending action.",
      content: (
        <div className="relative w-full h-64 flex flex-col items-center justify-end overflow-visible">
  
          <div style={{animation: 'slideUpRect 0.6s ease-out 0s both'}} className="absolute bottom-0 w-80 h-60 bg-white rounded-t-3xl shadow-lg z-0"></div>

          <div className="absolute z-50 flex flex-col items-center justify-end h-full pb-8 overflow-visible" style={{width: '600px'}}>

            <img 
              style={{animation: 'slideIn 0.8s ease-out 0.3s both'}}
              src="/images/loginslide3.png" 
              alt=" " 
              className="w-115 h-20 object-cover rounded-lg shadow-xl absolute bottom-40"
            />
            
            <img 
              style={{animation: 'slideIn 0.8s ease-out 0.6s both'}}
              src="/images/loginslide2.png" 
              alt=" " 
              className="w-120 h-20 object-cover rounded-lg shadow-lg absolute bottom-20"
            />
            
            <img 
              style={{animation: 'slideIn 0.8s ease-out 0.9s both'}}
              src="/images/loginslide1.png" 
              alt=" " 
              className="w-125 h-20 object-cover rounded-lg shadow-md absolute bottom-2"
            />
          </div>
          
          <style>{`
            @keyframes slideUpRect {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === 1) {
      const timer = setInterval(() => {
        setDocImageIndex((prev) => (prev === 0 ? 1 : 0));
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [currentSlide]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-sans">
      
      <div className="hidden lg:flex w-1/2 bg-[#E30613] relative flex-col justify-end p-16 pb-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="z-10 flex flex-1 items-center justify-center overflow-hidden">
          {slides[currentSlide].content}
        </div>

        <div className="z-10 text-white">
          <h2 className="text-3xl font-bold mb-3">{slides[currentSlide].title}</h2>
          <p className="text-base opacity-90 max-w-md leading-relaxed h-20">
            {slides[currentSlide].description}
          </p>

          <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "w-10 bg-white" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col p-12 lg:p-20 justify-center relative">
        <div className="absolute top-10 right-10">
          <img className="h-7" alt="Logo" src="/images/tsignemblemred.png" />
        </div>

        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Log in to T-sign</h1>
          <p className="text-gray-400 mb-10 font-medium">Enter your credentials to continue</p>

          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
              <input type="email" placeholder="Enter Email" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-red-500 outline-none transition-colors" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-red-500 outline-none transition-colors" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3 text-[#E30613] text-sm font-bold">{showPassword ? "Hide" : "Show"}</button>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <button className="flex-[1.5] bg-[#E4002B] text-white font-bold py-3.5 rounded-md">
                Login with email
              </button>
              <button className="flex-1 border border-gray-200 text-white font-bold py-3.5 rounded-md flex items-center justify-center gap-2 text-sm bg-[#2F2F2F]">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" className="w-4 h-4" alt="Microsoft" />
                Sign in with Microsoft
              </button>
            </div>
          </form>

          <div className="text-center mt-12 space-y-1">
            <p className="text-sm text-gray-400 font-medium">Powered by <span className="text-[#E30613] font-bold">Tolaram</span></p>
            <p className="text-[#E30613] text-[13px] italic font-semibold">Creating Possibilities, for Generations.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
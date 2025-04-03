import React from 'react';
import Image from 'next/image';
import { ArrowRight, BrainCircuit, Stethoscope, Zap, Target, BarChart } from 'lucide-react'; // Example icons

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="container mx-auto px-6 h-20 flex justify-between items-center"> {/* Increased padding and height */}
          {/* Logo */}
          <a href="#" className="flex items-center"> {/* Link to top */}
            <Image
              src="/biomindx.png" // Path relative to the public directory
              alt="BioMindX Logo"
              width={200} // Slightly smaller logo for a cleaner header
              height={39} // Adjusted height proportionally
              priority
              className="w-auto h-auto" // Let width/height attributes control size
            />
          </a>
          {/* Navigation Links - Centered or Right-aligned */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium"> {/* Adjusted spacing and font */}
            <a href="#solutions" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#services" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
            <a href="#casestudies" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Case Studies</a>
            <a href="#insights" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Insights</a>
            <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a>
            <a href="#contact" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-xs font-semibold">Contact</a> {/* Contact as button */}
          </div>
          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden">
            <button className="text-neutral-600 dark:text-neutral-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[calc(80vh)] md:min-h-[calc(90vh)] flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-teal-900/30 py-20 md:py-32" // Adjusted height and background
        >
          <div className="container mx-auto px-6 text-center z-10">
             {/* Optional: Subtle background pattern or abstract graphic */}
             {/* <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('/path/to/abstract-ai-pattern.svg')] bg-repeat"></div> */}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-neutral-900 dark:text-neutral-100">
              Elevating Medical Processes with <span className="text-blue-600 dark:text-blue-400">Transformative AI</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              BioMindX partners with healthcare organizations to integrate cutting-edge artificial intelligence, optimizing operations, enhancing diagnostics, and driving innovation for a healthier future.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-colors"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-700 bg-white border border-neutral-300 rounded-md shadow-sm hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-700 transition-colors"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Solutions Section (Replaces Mission/Services) */}
        <section id="solutions" className="py-24 md:py-32 bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 text-neutral-800 dark:text-neutral-200">
              AI-Driven Healthcare Transformation
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center max-w-3xl mx-auto mb-16 md:mb-20">
              We leverage specialized AI models and data strategies to address critical challenges in the medical industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution Card 1 */}
              <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col items-start">
                 <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                   <BrainCircuit className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                 </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Enhanced Diagnostics</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">
                  Utilizing AI to analyze medical imaging and data for earlier detection and improved diagnostic accuracy.
                </p>
                <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Learn More <ArrowRight className="inline h-4 w-4" /></a>
              </div>
              {/* Solution Card 2 */}
              <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col items-start">
                 <div className="p-3 rounded-full bg-teal-100 dark:bg-teal-900/50 mb-4">
                   <Zap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                 </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Operational Efficiency</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">
                  Streamlining clinical workflows, resource allocation, and administrative tasks through intelligent automation.
                </p>
                 <a href="#" className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">Learn More <ArrowRight className="inline h-4 w-4" /></a>
              </div>
              {/* Solution Card 3 */}
              <div className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-col items-start">
                 <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50 mb-4">
                   <Stethoscope className="h-6 w-6 text-green-600 dark:text-green-400" />
                 </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Personalized Treatment Paths</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">
                  Developing AI models to predict patient responses and tailor therapies for better outcomes.
                </p>
                 <a href="#" className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline">Learn More <ArrowRight className="inline h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us Section */}
        <section id="about" className="py-24 md:py-32 bg-neutral-100 dark:bg-neutral-900">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-neutral-800 dark:text-neutral-200">
                   Your Strategic AI Partner in Healthcare
                 </h2>
                 <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                   We combine deep expertise in artificial intelligence with a nuanced understanding of the medical landscape to deliver solutions that generate tangible value and drive meaningful progress.
                 </p>
                 <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                   <li className="flex items-start">
                     <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                     <span><span className="font-semibold text-neutral-800 dark:text-neutral-200">Industry Focus:</span> Dedicated solely to the unique challenges and opportunities within healthcare and medicine.</span>
                   </li>
                   <li className="flex items-start">
                     <BarChart className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                     <span><span className="font-semibold text-neutral-800 dark:text-neutral-200">Data-Driven Results:</span> Emphasis on measurable outcomes, efficiency gains, and improved patient care metrics.</span>
                   </li>
                   <li className="flex items-start">
                     <BrainCircuit className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                     <span><span className="font-semibold text-neutral-800 dark:text-neutral-200">Cutting-Edge Technology:</span> Access to the latest advancements in machine learning, NLP, and computer vision tailored for medical applications.</span>
                   </li>
                 </ul>
               </div>
               <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                 {/* Placeholder for a professional image: Team, Abstract Tech, Office */}
                 <Image
                    src="/placeholder-professional.jpg" // Replace with an actual relevant image path
                    alt="BioMindX Team or Technology Abstract"
                    layout="fill"
                    objectFit="cover"
                    className="bg-neutral-300 dark:bg-neutral-700" // Placeholder background
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> {/* Subtle overlay */}
               </div>
             </div>
          </div>
        </section>

        {/* Insights / Case Studies Highlights Section */}
        <section id="insights" className="py-24 md:py-32 bg-white dark:bg-neutral-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 text-neutral-800 dark:text-neutral-200">
              Latest Insights & Success Stories
            </h2>
             <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center max-w-3xl mx-auto mb-16 md:mb-20">
              Explore our research, perspectives, and the impact we're making for our partners.
            </p>
            {/* Placeholder for cards - fetch dynamically or add static examples */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Example Insight Card */}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden group">
                 {/* Placeholder Image */}
                 <div className="h-48 bg-neutral-200 dark:bg-neutral-800">
                    {/* <Image src="/path/to/insight-image1.jpg" alt="Insight 1" layout="fill" objectFit="cover" /> */}
                 </div>
                 <div className="p-6">
                   <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wider">Article</p>
                   <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">The Role of NLP in Unlocking Clinical Notes</h3>
                   <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">How natural language processing is transforming unstructured data into actionable insights.</p>
                   <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Read More <ArrowRight className="inline h-4 w-4" /></a>
                 </div>
              </div>
              {/* Example Case Study Card */}
               <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden group">
                 <div className="h-48 bg-neutral-200 dark:bg-neutral-800"></div>
                 <div className="p-6">
                   <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wider">Case Study</p>
                   <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Optimizing Radiology Workflow with AI</h3>
                   <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Partnering with a leading hospital to reduce report turnaround time by 30%.</p>
                   <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View Case Study <ArrowRight className="inline h-4 w-4" /></a>
                 </div>
              </div>
               {/* Example News Card */}
               <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden group">
                 <div className="h-48 bg-neutral-200 dark:bg-neutral-800"></div>
                 <div className="p-6">
                   <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wider">News</p>
                   <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">BioMindX Presents at HealthTech Summit</h3>
                   <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Sharing insights on the future of AI in predictive diagnostics.</p>
                   <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">Read More <ArrowRight className="inline h-4 w-4" /></a>
                 </div>
              </div>
            </div>
             <div className="text-center mt-16">
                <a
                    href="#insights" // Link to a dedicated insights page eventually
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-700 bg-white border border-neutral-300 rounded-md shadow-sm hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-700 transition-colors"
                >
                    Explore All Insights
                </a>
            </div>
          </div>
        </section>

        {/* Contact Section (Minimal Placeholder) */}
        <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
             <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                    Ready to Transform Your Operations?
                 </h2>
                 <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                    Let's discuss how BioMindX can tailor AI solutions to meet your specific healthcare challenges and goals.
                 </p>
                 <a
                    href="#" // Link to contact form or email
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 transition-colors"
                 >
                    Get In Touch
                 </a>
             </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
             <div className="mb-4 md:mb-0">
                <Image
                  src="/biomindx.png" // Use the logo again
                  alt="BioMindX Logo"
                  width={150} // Smaller footer logo
                  height={29} // Adjusted height
                  className="w-auto h-auto opacity-80"
                />
             </div>
             <div className="text-sm text-neutral-500 dark:text-neutral-400 space-x-4 mb-4 md:mb-0">
                {/* Footer Links */}
                <a href="#solutions" className="hover:text-neutral-800 dark:hover:text-neutral-200">Solutions</a>
                <a href="#about" className="hover:text-neutral-800 dark:hover:text-neutral-200">About</a>
                <a href="#contact" className="hover:text-neutral-800 dark:hover:text-neutral-200">Contact</a>
                <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-200">Privacy Policy</a>
             </div>
             <div className="text-xs text-neutral-400 dark:text-neutral-500">
               &copy; {new Date().getFullYear()} BioMindX. All rights reserved.
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { Download, Github, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                        Available for Opportunities
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
                        {personalInfo.role}
                    </p>
                    <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {personalInfo.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Download Resume
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
                        >
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src="/esteak.jpg"
                            alt={personalInfo.name}
                            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

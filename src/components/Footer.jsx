import React from 'react';
import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="font-medium text-lg">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
                    <p className="text-gray-400 text-sm mt-1">Built with React & Tailwind CSS</p>
                </div>

                <div className="flex space-x-6">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

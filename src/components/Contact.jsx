import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="space-y-8">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            I'm currently looking for internships and junior developer roles.
                            If you have an opportunity or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-700">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <Mail size={20} />
                                </div>
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>

                            <div className="flex items-center gap-4 text-gray-700">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <Phone size={20} />
                                </div>
                                <span>{personalInfo.phone}</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-700">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span>{personalInfo.address}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Connect with me</h3>
                        <div className="flex gap-4">
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-lg shadow-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                            >
                                <Github size={28} />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-lg shadow-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                            >
                                <Linkedin size={28} />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="p-3 bg-white rounded-lg shadow-sm text-gray-700 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                            >
                                <Mail size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

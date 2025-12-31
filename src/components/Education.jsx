import React from 'react';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300"
                        >
                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                                <p className="text-lg text-gray-700 font-medium mt-1">{edu.institution}</p>
                                <p className="text-sm text-gray-500 mt-2">{edu.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

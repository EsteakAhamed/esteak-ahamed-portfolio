import React from 'react';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

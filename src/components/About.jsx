import React from 'react';
import { personalInfo } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {personalInfo.about}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

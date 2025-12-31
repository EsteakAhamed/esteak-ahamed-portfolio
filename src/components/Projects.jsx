import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{project.title}</h3>
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {project.date}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded border border-gray-100"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-50">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                        >
                                            <Github className="w-4 h-4 mr-1" />
                                            Source
                                        </a>
                                    )}
                                    {project.github_client && (
                                        <a
                                            href={project.github_client}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                        >
                                            <Github className="w-4 h-4 mr-1" />
                                            Client
                                        </a>
                                    )}
                                    {project.github_server && (
                                        <a
                                            href={project.github_server}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                        >
                                            <Github className="w-4 h-4 mr-1" />
                                            Server
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

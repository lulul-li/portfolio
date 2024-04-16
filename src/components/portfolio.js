import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/lulul-li/repos');
                setRepositories(response.data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepositories();
    }, []);

    return (
        <main className="container mx-auto max-width pt-10 mb-20">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
                    {repositories.map(repo => (
                        <li key={repo.id} className="repository-item"> {/* Add a class for styling */}
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repository-details"> {/* Add a class for styling */}
                                <p>Language: {repo.language}</p>
                                <p>Stars: {repo.stargazers_count}</p>
                                <p>Forks: {repo.forks_count}</p>
                            </div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="view-on-github"> {/* Add a class for styling */}
                                View on GitHub
                            </a>
                        </li>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Portfolio;

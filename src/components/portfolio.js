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
        <div className="portfolio-container"> {/* Add a class for styling */}
            <h2>My GitHub Repositories</h2>
            <ul className="repository-list"> {/* Add a class for styling */}
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
            </ul>
        </div>
    );
}

export default Portfolio;

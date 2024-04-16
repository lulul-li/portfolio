import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [repositories, setRepositories] = useState([]);
    const [search, setSearch] = useState('');

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

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    // Filter repositories based on the search input
    const filteredRepos = repositories.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="container mx-auto max-width pt-10 mb-20">
            <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold ">
                    Projects
                </h1>


                    <div className="relative my-10" >
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Search projects"
                            type="search" id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required/>

                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
                    {filteredRepos.map(repo => (
                        <div key={repo.id}
                             className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-ellipsis overflow-hidden">{repo.name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden">Description: {repo.description}
                                <p>Language: {repo.language}</p>
                                <p>Stars: {repo.stargazers_count}</p>
                                <p>Forks: {repo.forks_count}</p></p>
                            <a href={repo.html_url}
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View on GitHub
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Portfolio;

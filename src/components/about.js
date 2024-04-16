import React, {useEffect, useState} from "react";

function About() {
    const [dogImageUrl, setDogImageUrl] = useState('');
    useEffect(() => {
        const fetchDogImage = async () => {
            try {
                const response = await fetch('https://random.dog/woof.json');
                const data = await response.json();
                if (data.url) {
                    setDogImageUrl(data.url);
                } else {
                    throw new Error('Invalid response from the API');
                }
            } catch (error) {
                console.error('Error fetching dog image:', error);
            }
        };

        fetchDogImage();
    }, []);

    return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-10" >
          About Me
        </h1>
          <div>
              {dogImageUrl ? (
                  <img src={dogImageUrl} alt="Random Dog" />
              ) : (
                  <p>Loading...</p>
              )}
          </div>
          <p className="text-gray-800 mb-3">I am currently pursuing a Master's degree in Information Technology at Queensland University of Technology (QUT) and am actively engaged as a software developer. My professional journey is marked by a diverse array of projects involving modern application development, large-scale platform management, and the enhancement of continuous integration practices.</p>

          <p className="text-lg mb-3 text-blue-600/100">
              Personal Interests:
          </p>
          <p className="text-gray-800 mb-3">Beyond my professional life, I am passionate about embracing life's experiences, with a keen interest in traveling, scuba diving, and surfing. These activities not only provide me with relaxation and joy but also inspire creativity and innovation in my professional endeavors.

          </p>
          <p className="text-lg mb-3 text-blue-600/100">Professional Experience:</p>
          <p className="text-gray-800 mb-3"></p>
          <ul className="list-disc">
              <li><p className="font-bold">Application Development: </p>  Skilled in creating applications using a robust tech stack that includes C#, JavaScript, Vue.js, Flutter, and SQL Server.</li>
              <li><p className="font-bold">Systems Development:</p> Experienced in developing and maintaining high-frequency trading systems and large-scale online platforms, ensuring robust performance and scalability.</li>
              <li><p className="font-bold">Cloud Technologies: </p>Proficient in utilizing Cloud Foundry on top of Kubernetes, which significantly streamlines the development processes.</li>
              <li><p className="font-bold">Continuous Integration: </p>Improved team integration and deployment scripts, which enhanced our software integration and streamlined the deployment process, bolstering our continuous integration practices.</li>
              <li><p className="font-bold">Collaboration and Planning:</p> Worked closely with Product Managers to determine minimum viable product requirements, translating these into well-defined user stories for team members to execute effectively.</li>

          </ul>
      </section>

    </main>
  );
}

export default About;

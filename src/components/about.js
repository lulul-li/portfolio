import React, {useEffect, useState} from "react";
import {personalDetails} from "../data/Details";

function About() {
    const [dogImageUrl, setDogImageUrl] = useState('');
    const [catImageUrl, setCatImageUrl] = useState('');

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
    useEffect(() => {
        const fetchCatImage = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0 && data[0].url) {
                    setCatImageUrl(data[0].url);
                } else {
                    throw new Error('Invalid response from the API');
                }
            } catch (error) {
                console.error('Error fetching cat image:', error);
            }
        };

        fetchCatImage();
    }, []);
    return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-10" >
          About Me
        </h1>

          <p className="text-gray-800 mb-3">{personalDetails.about}</p>
          <div
              className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
              <div className="grid grid-cols-2 gap-2">
                  <div>
                      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
                           src={dogImageUrl}
                           alt=""/>
                  </div>
                  <div>
                      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
                           src={catImageUrl}
                           alt=""/>
                  </div>
              </div>
          </div>
          <p className="text-lg mb-3 text-blue-600/100">
              Personal Interests:
          </p>
          <p className="text-gray-800 mb-3">{personalDetails.interest}</p>
      </section>

    </main>
  );
}

export default About;

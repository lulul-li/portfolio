import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
    const [instagramPosts, setInstagramPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get('https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=0b63505e1ecf9f194c5fb158b9e9cf33');
                setInstagramPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <div>
            <h2>About Me</h2>
            <p>Here's some information about me...</p>

            <h3>My Latest Instagram Posts</h3>
            <div className="instagram-posts">
                {instagramPosts.map(post => (
                    <div key={post.id} className="instagram-post">
                        <img src={post.media_url} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;

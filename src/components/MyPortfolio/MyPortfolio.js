import React from 'react';
import image1 from '../../Assets/portfolio/myImage.png'
import MyCv from '../../Assets/portfolio/My_File.jpg';
import './MyPortfolio.css'

const MyPortfolio = () => {
    return (
       <div className='bg-base-200'>
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={image1} class="w-[50%] rounded-lg" />
          <div>
            <h1 class="text-5xl font-bold name">Subhojit Dutta</h1>
            <div className="container">
            <h2 class="text-2xl font-bold title">
            <span class="title-word title-word-1">FullStack </span>
    <span class="title-word title-word-3">Developer</span>
            </h2>
            </div>
            <h2 className='mt-5 font-bold'>About Me : </h2>
            <p class="py-2">Myself Subhojit Dutta.I live in West Bengal,India,I am a quick learner. I believe in hard work and efficiency. I always like to learn new technology and have experience with new things. Always ready to prove myself through my work and responsibility.</p>

            <h2 className='mt-5 font-bold'>Education :</h2>
            <p class="py-2">Currrently pursuing B.tech in Electrical Engineering from JIS COLLEGE OF ENGINEERING</p>
            <h1 class=" font-bold">SKILLS!</h1>
      <li class=" mt-5 font-bold">Expertise</li>
      <p class="">JavaScript, ES6, React, React Router, React Bootstrap, HTML, CSS, Bootstrap.</p>
      <h1 class=" mt-5 font-bold">Comfortable</h1>
      <p class="">Node.js, Express.js, MongoDB, Rest API, Context API, Firebase authentication.</p>
      <li class= "mt-5 font-bold">Familiar</li>
      <p class="">Tailwind CSS, Daisy UI, Kommunicate</p>
      <li class=" mt-5 font-bold">Tools</li>
      <p class="">Git, VS Code, Chrome Dev Tools, GitHub,  Netlify, Firebase, Heroku
</p>

<div className='grid lg:grid-cols-2 sm:grid-cols-1 w-72'>
<div className='w-50'>
<a href={MyCv} className='btn btn-primary mt-5' download="My_File.jpg"> Download CV</a>
</div>
<div className='w-50'>
<a href="https://github.com/uiSubho98" target="_blank" className='btn btn-primary mt-5'>Github</a>
</div>
</div>
          </div>
        </div>
      </div>
       </div>
    );
};

export default MyPortfolio;
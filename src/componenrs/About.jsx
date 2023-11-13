import React from 'react';
import '../styleing/About.css';

const About = () => {
  return (
    <div>
    <div className='about-text-div'>
      <h1 className="About-text">Welcome to Our Fitness App!</h1>
      <div className='about-p-teg'><p>
      Transform your fitness journey with our state-of-the-art Gym Fitness App. Whether you're a seasoned athlete or just starting your fitness adventure, our app is designed to elevate your workouts and help you achieve your health and wellness goals.
      </p>
      <p>
      Unsure about a specific exercise? Our app provides detailed video tutorials led by fitness professionals, ensuring you perform each movement with precision and reduce the risk of injury.
       </p></div>
      <div className="kilimanjaro_part m-top-15">
        <h3>Social Links :</h3>
        <ul className="kilimanjaro_social_links">
          <li>
            <a target="_blank" href="https://github.com/bhasker440">
              <i className="fa fa-facebook" aria-hidden="true" /> github
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <i className="fa fa-twitter" aria-hidden="true" /> Twitter
            </a>
          </li>
      
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/bhaskar-bhandari-506a40244/">
              <i className="fa fa-linkedin" aria-hidden="true" /> Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="kilimanjaro_part">
          <h3>Tech Stack :</h3>
          <ul className="kilimanjaro_social_links">
    
            <li>
              <a  target="_blank"href="https://react.dev/">React.js</a>
            </li>
            <li>
              <a target="_blank" href="https://www.w3schools.com/css/">CSS3</a>
            </li>
            <li>
              <a  target="_blank"href="https://rapidapi.com/hub">Rapidapi</a>
            </li>
          </ul>
          
        </div>
      </div><div class="row-container">
                    <div class="col-12">
                        <p>© All Rights Reserved, build from scratch by <a target="_blank" href="https://www.linkedin.com/in/bhaskar-bhandari-506a40244/" className='buld'>Bhaskar Bhandari</a></p>
                    </div>
                </div>
    </div>
    </div>
  );
};

export default About;

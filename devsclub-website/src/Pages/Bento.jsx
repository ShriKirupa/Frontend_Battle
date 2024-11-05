import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Bento.css';
import Lottie from 'lottie-react';
import DevAnimation from '../assets/DevAnimation.json';
import TeamAnimation from '../assets/TeamAnimation.json';
import EventAnimation from '../assets/EventAnimation.json';
import ContactAnimation from '../assets/ContactAnimation.json';
import devsPic from "../assets/devs.jpg";

const Bento = () => {
  const navigate = useNavigate();

  return (
    <div className="bento-grid">
      <div 
        className="grid-item item1 flex flex-col items-center justify-center h-full p-4 bg-orange-400 text-white" 
        
      >
        <Lottie 
          animationData={DevAnimation} 
          loop 
          style={{
            width: '100%',  
            height: '100%', 
          }} 
        />
      </div>
      <div 
        className="grid-item item2" 
        onClick={() => navigate('/home')}
      >
        HOME
      </div>
      <div 
        className="grid-item item3" 
        onClick={() => navigate('/events')}
      >
        EVENTS
      </div>
      <div 
        className="grid-item item4 flex flex-col items-center justify-center h-full p-4 bg-blue-400 text-white" 
      >
        <Lottie 
          animationData={ContactAnimation} 
          loop 
          style={{
            width: '100%',  
            height: '100%', 
          }} 
        />
      </div>
      <div 
        className="grid-item item5 flex flex-col items-center justify-center h-full p-4 bg-blue-400 text-white" 
      >
        <Lottie 
          animationData={EventAnimation} 
          loop 
          style={{
            width: '100%',  
            height: '100%', 
          }} 
        />
      </div>      
      <div className="grid-item item6">
        <img src={devsPic} alt="Description of Image" style={{ width: 'auto', height: 'auto' }} />
      </div>
      <div 
        className="grid-item item7 flex flex-col items-center justify-center h-full p-4 bg-orange-400 text-white" 
      >
        <Lottie 
          animationData={TeamAnimation} 
          loop 
          style={{
            width: '100%',  
            height: '100%', 
          }} 
        />
      </div>
      <div className="grid-item item8" 
      onClick={() => navigate('/members')}>MEMBERS</div>
      <div className="grid-item item9"
      onClick={() => navigate('/contactus')}>CONTACT US</div>
    </div>
  );
};

export default Bento;

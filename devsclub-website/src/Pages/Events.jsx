import React from 'react';
import { motion } from 'framer-motion'; // For animations
import '../Styles/Events.css'; // Custom CSS for styles
import IcImage from '../assets/InvCer.jpg';
import HackImage from '../assets/Hack.jpg';
import SkillImage from '../assets/skill.jpg';
import talkImage from '../assets/talk.jpg';
import geekImage from '../assets/geek.jpg';

const events = [
  { name: 'Inception Day', description: 'Kickstart your journey with us.', image: IcImage },
  { name: 'HackTheFuture', description: 'Collaborate and innovate.', image: HackImage },
  { name: 'SkillUp Workshop', description: 'Upgrade your skills.', image: SkillImage },
  { name: 'TechTalks', description: 'Engage with industry experts.', image: talkImage },
  { name: 'Insightful Webinars', description: 'Learn from the best.', image: IcImage },
  { name: 'Code Carnival', description: 'Showcase your coding talent.', image: HackImage },
  { name: 'Innovator’s Meet', description: 'Network with innovators.', image: SkillImage },
  { name: 'TechSparks', description: 'Solve tech challenges.', image: talkImage },
  { name: 'GeekFest', description: 'Celebrate technology and creativity.', image: geekImage },
];

const Events = () => {
  return (
    <div className="events-grid">
      {events.map((event, index) => (
        <motion.div
          className="event-item"
          key={index}
          initial={{ opacity: 0, x: 100 }} // Start from the right with opacity 0
          whileInView={{ opacity: 1, x: 0 }} // Animate to normal position with full opacity
          transition={{ duration: 0.6 }} // Smooth transition
          viewport={{ once: false, amount: 0.2 }} // Trigger every time the element enters 20% of the viewport
        >
          <img src={event.image} alt={event.name} className="event-image" />
          <h2 className="event-title">{event.name}</h2>
          <p className="event-description">{event.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Events;

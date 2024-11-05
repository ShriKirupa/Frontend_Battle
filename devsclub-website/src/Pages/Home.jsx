import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Define slide-in variants with a slower duration
  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    slideInUp: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    slideInRight: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    slideInLeft: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="home">
      <motion.div
        className="home-header"
        initial="hidden"
        whileInView="slideInUp"
        variants={{ ...variants, hidden: { y: -50 } }}
        viewport={{ once: false, amount: 1.0 }}
      >
        <h1>Welcome to the DevsClub REC!</h1>
        <p>Unleash your creativity and code skills here!</p>
        <p className="subtext">CREATE. COLLABORATE. CONQUER!</p>
      </motion.div>

      {/* About Section */}
      <motion.section
        className="home-about"
        initial="hidden"
        whileInView="slideInRight"
        variants={{ ...variants, hidden: { x: -50 } }}
        viewport={{ once: false, amount: 1.0 }}
      >
        <h2>About the Club</h2>
        <p>
          Welcome to [Club Name], a community of passionate coders and innovators! We’re dedicated to exploring the latest in technology, collaborating on impactful projects, and empowering each other to become skilled developers.
        </p>
        <p>
          Whether you’re just starting out or an experienced programmer, join us to learn, build, and grow together. Be part of workshops, hackathons, and exclusive coding challenges that keep you sharp and connected!
        </p>
      </motion.section>

      {/* Events Section */}
      <motion.section
        className="home-events"
        initial="hidden"
        whileInView="slideInLeft"
        variants={{ ...variants, hidden: { x: 50 } }}
        viewport={{ once: false, amount: 1.0 }}
      >
        <h2>Upcoming Events</h2>
        <ul>
          <li>Battle of Layouts - Nov 10, 2024</li>
          <li>JavaScript Showdown - Dec 5, 2024</li>
          <li>React Wars - Jan 15, 2025</li>
        </ul>
        <p>Stay tuned for more exciting events that challenge and inspire!lets join together on these days to CREATE COLLABORATE AND CONQUER
        </p>
      </motion.section>

      {/* Members Section */}
      <motion.section
        className="home-members"
        initial="hidden"
        whileInView="slideInRight"
        variants={{ ...variants, hidden: { x: -50 } }}
        viewport={{ once: false, amount: 1.0 }}
      >
        <h2>Meet the Teams</h2>
        <p>Get to know the creative minds behind each team.</p>
        <p>
          Our members come from diverse backgrounds, each bringing unique skills and perspectives. Together, we make magic happen!
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="home-contact"
        initial="hidden"
        whileInView="slideInLeft"
        variants={{ ...variants, hidden: { x: 50 } }}
        viewport={{ once: false, amount: 1.0 }}
      >
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us at <a href="mailto:contact@frontendbattle.com">contact@frontendbattle.com</a></p>
        <p>Follow us on social media to stay updated on events, workshops, and community news!</p>
      </motion.section>
    </div>
  );
};

export default Home;

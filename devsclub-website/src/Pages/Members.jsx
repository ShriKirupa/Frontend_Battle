import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Members.css';

const Members = () => {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'President', bio: 'Leading the team with vision and passion.' },
    
    { name: 'Eve Williams', role: 'Marketing Head', bio: 'Spreads our vision to the world.' },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="members-page">
      <motion.h1
        className="members-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Meet the Core Team
      </motion.h1>
      <motion.p
        className="members-subtitle"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        viewport={{ once: false, amount: 1.0 }}
      >
        Dedicated, passionate, and skilled – the minds driving our club forward.
      </motion.p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            className="team-member"
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={{ ...fadeInVariant, hidden: { x: index % 2 === 0 ? -100 : 100 } }}
            viewport={{ once: false, amount: 1.0 }}
          >
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;

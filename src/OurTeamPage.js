import React from 'react';
import TeamMember from './TeamMember'
// Adjust the import path based on your project structure

const teamData = [
  {
    name: 'Aryan Khamesra',
    image: require('./teams/aryank.jpg'),
    description: 'Meet Aryan Khamesra, a passionate coder and skilled learner who is currently on a mission to explore the vast realm of Data Science. With a strong foundation in Python, Aryan dives headfirst into complex challenges, demonstrating an innate ability to grasp and dissect problems effectively. This enthusiasm translates into a tireless dedication to projects and a promising career in the field. Aryan is not only a formidable problem solver but also an active participant in various hackathons and coding competitions.',
  },
  {
    name: 'Isha Singh',
    image: require('./teams/ishas.jpg'),
    description: 'Meet Isha, a proficient coder with expertise in languages like C, C++, Java, and Python. Her passion lies in web development, and she aspires to become a full-stack web developer. With a solid foundation in programming and a deep enthusiasm for crafting web solutions, she is committed to honing her skills and creating meaningful, user-friendly applications that contribute to the ever-evolving digital landscape.',
  },
  {
    name: 'Meghna Saha',
    image: require('./teams/meghna.jpg'),
    description: 'Meet Meghna Saha, a passionate coder and a brainstormer. With a strong foundation in Python, Meghna combats with complex challenges, demonstrating her competitive skills . This enthusiasm translates into a tireless dedication to projects and a promising career in the field. Meghna is a formidable problem solver and an excellent team player.',
  },
  {
    name: 'Yash Pawar',
    image: require('./teams/yashp.jpg'),
    description: 'Meet Yash Pawar, a passionate developer who is eager to learn more about development. With a strong foundation in ReactJS, Yash dives into challenges, demonstrating an innate ability to grasp and dissect problems effectively. This translates into a tireless dedication to projects and a promising career in the field.',
  },
  {
    name: 'Shreya Ranjan',
    image: require('./teams/shreya.jpg'),
    description: 'Meet Shreya Ranjan, a skilled software developer specializing in HTML, CSS, JavaScript, and SQL. With a sharp eye for detail and a passion for creating elegant code, she excels at building user-friendly web applications. Her expertise in database management and SQL ensures seamless back-end integration, resulting in responsive user experiences. Committed to staying current with industry trends, her dedication and commitment make her a valuable asset to any development team.',
  },
  {
    name: 'Prathamesh Patwardhan',
    image: require('./teams/prath.jpg'),
    description: 'Meet Prathamesh Patwardhan, with dedication in technology-driven education, his focus is expanded into the dynamic world of Machine Learning, with a special emphasis on Python and R.  in the midst of honing my expertise through hands-on learning experiences. He has also proudly earned the Data Science Professional Certificate, a testament to his unwavering dedication to mastering this transformative field.',
  },
];

const OurTeamPage = () => {
  const h1Style = {
    fontSize: '36px', // Adjust the font size as needed
  };
  return (
    <div className="our-team-page">
      <h1 style={h1Style}>Our Team</h1>
      <div className="team-members">
        {teamData.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeamPage;
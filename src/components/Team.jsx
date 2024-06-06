// components/Team.jsx
import teamMembers from "../data/teamData";

export function Team() {
  return (
    <div className="team-section py-12 mx-10 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <div 
            key={member.name} 
            className="team-member bg-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={member.img} 
              alt={`${member.name}'s avatar`} 
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h3 className="text-base font-semibold text-center mt-3">{member.name}</h3>
            <p className="text-center text-gray-600 text-sm">{member.position}</p>
            <p className="text-center text-gray-700 text-sm mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

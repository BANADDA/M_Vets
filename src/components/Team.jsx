// components/Team.jsx

import teamMembers from "../data/teamData";

export function Team() {
  return (
    <div className="team-section py-12 mx-10 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <div key={member.name} className="team-member bg-white p-6 rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-w-40 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-center text-gray-600">{member.position}</p>
            <p className="text-center text-gray-700 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

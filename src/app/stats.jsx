import { AgricultureRounded, AssessmentOutlined, BiotechRounded, GroupRounded } from '@mui/icons-material';

const StatCard = ({ title, value, percentage, icon, color }) => {
  return (
    <div className="stat-card flex flex-col justify-between p-6 rounded-xl bg-blue-gray-50 w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <div className={`text-3xl ${color}`}>
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-2">{value}</h2>
        <p className={`text-lg ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `↑ ${percentage}%` : `↓ ${percentage}%`}
        </p>
      </div>
    </div>
  );
};

const StatsContainer = () => {
  return (
    <section id="stats" className="py-16 px-8 bg-slate-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            title="Farms" 
            value="512+" 
            percentage={15} 
            icon={<AgricultureRounded />} //Testing
            color="text-green-500" 
          />
          <StatCard 
            title="Animal Officers" 
            value="200+" 
            percentage={6} 
            icon={<GroupRounded />} 
            color="text-red-500" 
          />
          <StatCard 
            title="Field Reports" 
            value="50+" 
            percentage={10} 
            icon={<AssessmentOutlined />} 
            color="text-yellow-800" 
          />
          <StatCard 
            title="Animal Samples" 
            value="2000+" 
            percentage={8} 
            icon={<BiotechRounded />} 
            color="text-blue-500" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsContainer;

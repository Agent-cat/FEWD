import React from 'react';
import StatCard from '../components/StatCard';
import UpcomingExams from '../components/UpcomingExams';



const dashboardData = {
    user: {
        name: "Sarah",
        nextExamTime: "2 hours"
    },
    stats: [
        { id: 1, title: "Upcoming Exams", value: "4" },
        { id: 2, title: "Completed Exams", value: "12" },
        { id: 3, title: "Average Score", value: "85%" },
        { id: 4, title: "Time Saved", value: "24h" }
    ],
    recentActivities: [
        { id: 1, type: "completion", title: "Completed TOC Quiz", time: "2 hours ago" },
        { id: 2, type: "review", title: "Reviewed FSAD Notes", time: "Yesterday" },
        { id: 3, type: "submission", title: "Submitted Maths Assignment", time: "2 days ago" }
    ]
};

const Home = () => {
    return (
        <div className=" mt-20">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {dashboardData.stats.map(stat => (
                        <StatCard
                            key={stat.id}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    ))}
                </div>


                <div className="flex flex-col lg:flex-row gap-5">

                    <div className="flex-grow lg:w-2/3">
                        <div className="bg-white rounded-xl border border-gray-100 p-6 h-[calc(100vh-320px)]">
                            <UpcomingExams />
                        </div>
                    </div>


                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                            <div className="space-y-4">
                                {dashboardData.recentActivities.map(activity => (
                                    <div
                                        key={activity.id}
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="bg-gray-100 p-3 rounded-full text-xl">
                                            {activity.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                {activity.title}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 
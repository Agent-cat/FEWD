import React from 'react';

const ActivityItem = ({ icon, title, time }) => {
    return (
        <div className="flex items-center gap-4 mb-5 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
            <div className="bg-gray-100 p-3 rounded-full text-gray-900">{icon}</div>
            <div>
                <p className="text-gray-900 font-medium">{title}</p>
                <p className="text-gray-500 text-sm mt-1">{time}</p>
            </div>
        </div>
    );
};

const RecentActivity = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <ActivityItem

                title="Completed TOC Quiz"
                time="2 hours ago"
            />
            <ActivityItem

                title="Reviewed FSAD Notes"
                time="Yesterday"
            />
        </div>
    );
};

export default RecentActivity; 
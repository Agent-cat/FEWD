import React from 'react';

const StatCard = ({ title, value, icon }) => {
    return (
        <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
                </div>
                <div className="text-gray-900 text-2xl">{icon}</div>
            </div>
        </div>
    );
};

export default StatCard; 
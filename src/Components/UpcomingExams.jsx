import React from 'react';
import { useNavigate } from 'react-router-dom';
import { examData } from '../constants/constants';



const ExamCard = ({ subject, duration, tags, time, status }) => {
    const navigate = useNavigate();

    const handleStartExam = () => {
        navigate('/exam');
    };

    return (
        <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300 ease-in-out mb-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{subject}</h3>
                    <p className="text-gray-500 mt-1">Duration: {duration}</p>
                    <div className="flex gap-2 mt-3">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-gray-500 mb-3">{time}</p>
                    {status === 'upcoming' ? (
                        <button
                            onClick={handleStartExam}
                            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                            Start Exam
                        </button>
                    ) : (
                        <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors duration-200 border border-gray-200">
                            View Details
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const UpcomingExams = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Exams</h2>
                <span className="text-gray-500">{examData.length} exams scheduled</span>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-420px)] pr-2 custom-scrollbar">
                {examData.map((exam) => (
                    <ExamCard
                        key={exam.id}
                        subject={exam.subject}
                        duration={exam.duration}
                        tags={exam.tags}
                        time={exam.time}
                        status={exam.status}
                    />
                ))}
            </div>
        </div>
    );
};
export default UpcomingExams
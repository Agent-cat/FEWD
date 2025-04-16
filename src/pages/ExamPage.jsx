import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const ExamPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showWebcam, setShowWebcam] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const webcamRef = useRef(null);
    const navigate = useNavigate();


    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            id: 3,
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Fe", "Au", "Cu"],
            correctAnswer: "Au"
        },
        {
            id: 4,
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correctAnswer: "Leonardo da Vinci"
        },
        {
            id: 5,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        }
    ];

    const handleStartExam = () => {
        setShowWebcam(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleEndExam = () => {
        setShowConfirmation(true);
    };

    const confirmEndExam = () => {
        setShowWebcam(false);
        setShowConfirmation(false);
        navigate('/');
    };

    return (
        <div className="mt-20 min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {!showWebcam ? (
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h1 className="text-2xl font-bold mb-6">Important Instructions</h1>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li>Webcam must remain enabled throughout the exam</li>
                            <li>No additional browser tabs allowed</li>
                            <li>Questions are randomized for each student</li>
                            <li>Submit answers before time expires</li>
                        </ul>
                        <button
                            onClick={handleStartExam}
                            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                        >
                            Start Exam
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 bg-white p-8 rounded-xl shadow-sm">
                            <div className="mb-8">
                                <span className="text-sm text-gray-500">
                                    Question {currentQuestion + 1} of {questions.length}
                                </span>
                                <h2 className="text-xl font-bold mt-2">
                                    {questions[currentQuestion].question}
                                </h2>
                            </div>

                            <div className="space-y-4 mb-8">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${currentQuestion}`}
                                            className="mr-3"
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={handlePrevQuestion}
                                    disabled={currentQuestion === 0}
                                    className="px-4 py-2 border rounded-lg disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                {currentQuestion === questions.length - 1 ? (
                                    <button
                                        onClick={handleEndExam}
                                        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                                    >
                                        Submit Exam
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNextQuestion}
                                        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <Webcam
                                ref={webcamRef}
                                audio={false}
                                mirrored={true}
                                className="w-full rounded-lg"
                            />
                            <p className="text-center text-sm text-gray-500 mt-2">
                                Webcam Preview
                            </p>
                        </div>

                        {showConfirmation && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-8 rounded-xl max-w-md">
                                    <h3 className="text-xl font-bold mb-4">Confirm Submission</h3>
                                    <p className="text-gray-600 mb-6">Are you sure you want to submit your exam? This action cannot be undone.</p>
                                    <div className="flex justify-end gap-4">
                                        <button
                                            onClick={() => setShowConfirmation(false)}
                                            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={confirmEndExam}
                                            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                                        >
                                            Confirm Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamPage;
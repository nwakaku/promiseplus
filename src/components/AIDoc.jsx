import React, { useState } from 'react'
import { AI } from './AI';

const AIDoc = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        patientAge: '',
        medicalDetails: '',
    });
    const [mainAnswer, setMainAnswer] = useState()

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (e) => {
        setFormSubmitted(true); // Set formSubmitted to true when the form is submitted

        e.preventDefault();
        // Access formData object to get the values.
        const { patientName, patientAge, medicalDetails, bloodType, bloodGroup } = formData;
        const answer = await AI(patientName, patientAge, medicalDetails, bloodType, bloodGroup);
        setMainAnswer(answer);
        console.log('Patient Name:', patientName);
        console.log('Patient Age:', patientAge);
        console.log('Medical Details:', medicalDetails);
        console.log('Blood Type:', bloodType);
        console.log('Blood Group:', bloodGroup);
        // You can now perform any action you want with the form data.
    };

    return (
        <section
            style={{
                backgroundImage:
                    'url("https://documentation.bold-themes.com/cliniq/wp-content/uploads/sites/68/2021/10/hero_home.jpg")',
            }}
            className="bg-grey-300 p-8 flex flex-col md:flex-row justify-between space-x-4 bg-cover bg-center h-full"
        >
            <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="mb-4">
                        <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">
                            Name of Patient:
                        </label>
                        <input
                            type="text"
                            id="patientName"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter patient's name"
                            value={formData.patientName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-wrap justify-between mb-4">
                        <div className="mb-4 w-full md:w-1/2 md:pr-2">
                            <label htmlFor="bloodType" className="block text-gray-700 text-sm font-bold mb-2">
                                Blood Type:
                            </label>
                            <input
                                type="text"
                                id="bloodType"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter blood type"
                                value={formData.bloodType}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4 w-full md:w-1/2 md:pl-2">
                            <label htmlFor="bloodGroup" className="block text-gray-700 text-sm font-bold mb-2">
                                Blood Group:
                            </label>
                            <input
                                type="text"
                                id="bloodGroup"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter blood group"
                                value={formData.bloodGroup}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between">
                        <div className="mb-4 w-full md:w-1/2 md:pr-2">
                            <label htmlFor="patientAge" className="block text-gray-700 text-sm font-bold mb-2">
                                Age Of Patient:
                            </label>
                            <input
                                type="number"
                                id="patientAge"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter patient's age"
                                value={formData.patientAge}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4 w-full md:w-1/2 md:pl-2">
                            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                                Gender:
                            </label>
                            <select
                                id="gender"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="medicalDetails" className="block text-gray-700 text-sm font-bold mb-2">
                            Medical Details of Patient:
                        </label>
                        <textarea
                            id="medicalDetails"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                            placeholder="Enter medical details here"
                            value={formData.medicalDetails}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${formSubmitted ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={formSubmitted}
                    >
                        {formSubmitted ? 'Submitted' : 'Submit'}
                    </button>
                </form>
            </div>


            <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
                <label
                    htmlFor="prediction"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    AI FirstAID:
                </label>
                <textarea
                    id="prediction"
                    className="shadow appearance-none border rounded w-full h-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="AI prediction goes here"
                    value={mainAnswer ? mainAnswer : ''}
                />
            </div>
        </section>
    )
}

export default AIDoc
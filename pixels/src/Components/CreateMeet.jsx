import React, { useState } from 'react';
import meetBg from '/public/bg-createMeet.jpg';
import { useNavigate } from 'react-router-dom';

const CreateMeet = () => {

    const navigate = useNavigate();
    const [ meetId, setMeetId ] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        navigate(`/meeting/${meetId}`);
    }

    return (
        <div className="w-screen h-screen bg-black p-4 relative" 
            style={{backgroundImage: `url(${meetBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh'}}
        >
            <div className='absolute inset-0 flex items-center justify-center'>
                <form onSubmit={handleSubmit} className="w-[400px] p-5 rounded-2xl backdrop-blur-lg bg-white/50 shadow-lg">
                    <h2 className="text-blue-900 text-2xl font-semibold mb-6 text-center">Create Meeting</h2>
                    <div className='mb-5'>
                        <label htmlFor="meetId" className="block mb-2 font-medium text-blue-900 dark:text-blue-900">Meet ID</label>
                        <input id="meetId" name='meetId' type="text" onKeyUp={(e)=> setMeetId(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-opacity-75' required/>
                    </div>
                    <button type="submit" className="mt-2 w-full sm:w-auto text-white bg-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateMeet;
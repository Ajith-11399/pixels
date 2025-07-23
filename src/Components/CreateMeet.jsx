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



// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import meetBg from '../../public/bg-createMeet.jpg';

// const CreateMeet = () => {
//   const navigate = useNavigate();
//   const meetingRef = useRef(null);

//   const [meetId, setMeetId] = useState('');
//   const [userName, setUserName] = useState(`UserName-${Math.floor(10000 + Math.random() * 90000)}`);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!meetId.trim()) return;
//     navigate(`/meeting/${meetId}`);
//   };

//   const handleCopy = () => {
//     const link = `http://localhost:3000/meeting/${meetId}`;
//     navigator.clipboard.writeText(link);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${meetBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//       }}
//     >
//       <div className="w-full min-h-screen flex items-center justify-center px-4">
//         <div
//           className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl shadow-xl bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
//           ref={meetingRef}
//         >
//           {/* Camera Preview Placeholder */}
//           <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg flex items-center justify-center h-60">
//             <p className="text-lg font-medium">Camera is off</p>
//           </div>

//           {/* Controls */}
//           <div className="flex justify-center gap-6 mt-4">
//             <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full">
//               🎤
//             </button>
//             <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full">
//               🎥
//             </button>
//           </div>

//           {/* Name Input */}
//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             <div>
//               <label htmlFor="username" className="block text-sm font-semibold text-blue-300 mb-1">
//                 Your name
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               />
//             </div>

//             {/* Meeting ID Input + Join */}
//             <div className="flex items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Enter Meeting ID"
//                 value={meetId}
//                 onChange={(e) => setMeetId(e.target.value)}
//                 className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none text-black"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
//               >
//                 Join
//               </button>
//             </div>
//           </form>

//           {/* Meeting Link */}
//           {meetId && (
//             <div className="mt-5 p-4 bg-white/80 rounded-lg flex justify-between items-center text-black text-sm">
//               <div>
//                 <p className="font-semibold text-gray-700">Shared Meeting Link</p>
//                 <a
//                   href={`http://localhost:3000/meeting/${meetId}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-600"
//                 >
//                   http://localhost:3000/meeting/{meetId}
//                 </a>
//               </div>
//               <button
//                 onClick={handleCopy}
//                 className="text-blue-700 hover:text-blue-900 transition"
//                 title="Copy link"
//               >
//                 📋
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateMeet;

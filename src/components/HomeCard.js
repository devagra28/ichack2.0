import TracksData from "../assets/TracksData";
import React from "react";

// const HomeCard = () => {
//     return(
//         <>
//             {TracksData.map = ((tracks, index) => (
//                 <div key={index} className="mt-8">
//                     <div>
//                         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//                             <img className="w-full" src={tracks.placeholder} alt="Sunset in the mountains"/>
//                             <div className="px-6 py-4">
//                                 <div className="font-bold text-xl mb-2">{tracks.TracksName}</div>
//                                 <p className="text-gray-700 text-base">
//                                     {tracks.TracksAbout}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}</>
//
//     )
// }

const HomeCard = () => {
    return (
        <>
            {TracksData.map((Tracks, index) => (
                <div key={index} className="items-stretch h-full align-middle">
                    <div className="items-stretch h-full align-middle">
                        <div className="max-w-full rounded overflow-hidden shadow-lg items-stretch h-full align-middle">
                            <img className="w-full px-12 py-2" src={Tracks.TracksImage} alt="Sunset in the mountains"/>
                            <div className="px-6 py-4 align-middle">
                                <div className="font-semibold text-center sm:text-left text-xl mb-2 align-middle">{Tracks.TracksName}</div>
                                {/*<p className="text-gray-700 text-base">*/}
                                {/*    {Tracks.TracksAbout}*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default HomeCard;
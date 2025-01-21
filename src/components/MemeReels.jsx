// // import React, { useState, useEffect, useRef } from 'react';
// // import MemeCard from './MemeCard';
// // import { fetchRandomMeme } from '../services/memeService';

// // function MemeReels() {
// //     const [memes, setMemes] = useState([]);
// //     const [loading, setLoading] = useState(false);
// //     const observerRef = useRef(null);

// //     // Function to load a new meme
// //     const loadMeme = async () => {
// //         setLoading(true);
// //         try {
// //             const newMeme = await fetchRandomMeme(); // Fetch a single meme
// //             setMemes((prevMemes) => [...prevMemes, newMeme]); // Append to the memes array
// //         } catch (error) {
// //             console.error('Failed to fetch meme:', error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     // Fetch the first meme when the component mounts
// //     useEffect(() => {
// //         loadMeme();
// //     }, []);

// //     // Infinite scroll functionality with Intersection Observer
// //     useEffect(() => {
// //         const observer = new IntersectionObserver(
// //             (entries) => {
// //                 const lastEntry = entries[0];
// //                 // If the last meme in the list is visible, trigger the API call
// //                 if (lastEntry.isIntersecting && !loading) {
// //                     loadMeme(); // Trigger fetching the next meme
// //                 }
// //             },
// //             { threshold: 1.0 } // Trigger when the element is fully in view
// //         );

// //         if (observerRef.current) observer.observe(observerRef.current); // Start observing the ref element

// //         return () => observer.disconnect(); // Clean up observer when component unmounts
// //     }, [loading]); // Observer only re-runs when loading state changes

// //     return (
// //         <div className="flex flex-col min-h-screen overflow-y-scroll snap-y snap-mandatory">
// //             {memes.map((meme, index) => (
// //                 <MemeCard key={index} meme={meme} />
// //             ))}
// //             <div ref={observerRef} className="h-20"></div> {/* Invisible div to trigger infinite scroll */}
// //             {loading && <p className="text-center">Loading...</p>} {/* Show loading text */}
// //         </div>
// //     );
// // }

// // export default MemeReels;


// import React, { useState, useEffect } from 'react';
// import { fetchRandomMeme } from '../services/memeService';


// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // Function to fetch random memes using the imported service
//     const loadMeme = async () => {
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             setMemes(prevMemes => [...prevMemes, meme]);
//         } catch (error) {
//             console.error('Error loading meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Initial load
//     useEffect(() => {
//         loadMeme();
//     }, []);

//     return (
//         <div className="scroll-container">
//             {memes.length > 0 ? (
//                 memes.map((meme, index) => (
//                     <div key={index} className="meme-card">
//                         <img src={meme.preview_url} alt={meme.image_name} className="w-full h-auto" />
//                         <div className="meme-card-text">{meme.text_corrected}</div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="loading-text">{loading ? 'Loading memes...' : 'No memes available'}</div>
//             )}

//             <button onClick={loadMeme} className="m-auto block text-center">
//                 {loading ? 'Loading...' : 'Load More Memes'}
//             </button>
//         </div>
//     );
// }

// export default MemeReels;


// import React, { useState, useEffect, useCallback } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // Function to fetch random memes using the imported service
//     const loadMeme = useCallback(async () => {
//         if (loading) return; // Prevent multiple requests while loading
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             setMemes(prevMemes => [...prevMemes, meme]);
//         } catch (error) {
//             console.error('Error loading meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     }, [loading]);

//     // Detect scroll position and fetch more memes when reaching the bottom
//     const handleScroll = (event) => {
//         const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
//         if (bottom && !loading) {
//             loadMeme();
//         }
//     };

//     // Load initial memes when the component is mounted
//     useEffect(() => {
//         loadMeme();
//     }, [loadMeme]);

//     return (
//         <div
//             className="scroll-container"
//             onScroll={handleScroll} // Listen to scroll events
//         >
//             {memes.length > 0 ? (
//                 memes.map((meme, index) => (
//                     <div key={index} className="meme-card">
//                         <img src={meme.preview_url} alt={meme.image_name} className="w-full h-auto" />
//                         <div className="meme-card-text">{meme.text_corrected}</div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="loading-text">{loading ? 'Loading memes...' : 'No memes available'}</div>
//             )}

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;


// import React, { useState, useEffect, useCallback } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // Function to fetch random memes using the imported service
//     const loadMeme = useCallback(async () => {
//         if (loading) return; // Prevent multiple requests while loading
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             setMemes(prevMemes => [...prevMemes, meme]);
//         } catch (error) {
//             console.error('Error loading meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     }, [loading]);

//     // Detect scroll position and fetch more memes when nearing the bottom
//     const handleScroll = (event) => {
//         const scrollHeight = event.target.scrollHeight;
//         const scrollTop = event.target.scrollTop;
//         const clientHeight = event.target.clientHeight;

//         // Trigger loadMeme when user is within 100px of the bottom
//         if (scrollHeight - scrollTop - clientHeight <= 100 && !loading) {
//             loadMeme();
//         }
//     };

//     // Load initial memes when the component is mounted
//     useEffect(() => {
//         loadMeme();
//     }, [loadMeme]);

//     return (
//         <div
//             className="scroll-container"
//             onScroll={handleScroll} // Listen to scroll events
//         >
//             {memes.length > 0 ? (
//                 memes.map((meme, index) => (
//                     <div key={index} className="meme-card">
//                         <img src={meme.preview_url} alt={meme.image_name} className="w-full h-auto" />
//                         <div className="meme-card-text">{meme.text_corrected}</div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="loading-text">{loading ? 'Loading memes...' : 'No memes available'}</div>
//             )}

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;

// import React, { useState, useEffect, useCallback } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true);  // To manage when to stop fetching

//     // Function to fetch random memes using the imported service
//     const loadMeme = useCallback(async () => {
//         if (loading || !hasMore) return; // Prevent multiple requests while loading or if no more memes
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             if (meme) {
//                 setMemes(prevMemes => [...prevMemes, meme]);
//             } else {
//                 setHasMore(false);  // No more memes available
//             }
//         } catch (error) {
//             console.error('Error loading meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     }, [loading, hasMore]);

//     // Detect scroll position and fetch more memes when reaching near the bottom
//     const handleScroll = (event) => {
//         const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;

//         // Only trigger when nearing the bottom and not already loading
//         if (bottom && !loading && hasMore) {
//             loadMeme();
//         }
//     };

//     // Load initial memes when the component is mounted
//     useEffect(() => {
//         loadMeme();
//     }, [loadMeme]);

//     return (
//         <div
//             className="scroll-container"
//             onScroll={handleScroll} // Listen to scroll events
//         >
//             {memes.length > 0 ? (
//                 memes.map((meme, index) => (
//                     <div key={index} className="meme-card">
//                         <img src={meme.preview_url} alt={meme.image_name} className="w-full h-auto" />
//                         <div className="meme-card-text">{meme.text_corrected}</div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="loading-text">{loading ? 'Loading memes...' : 'No memes available'}</div>
//             )}

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}

//             {!hasMore && !loading && (
//                 <div className="text-center my-4 text-xl text-red-500">No more memes available</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;



// import React, { useState, useEffect } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true); // To control when to stop loading new memes

//     // Fetch a new random meme
//     const loadMeme = async () => {
//         if (loading || !hasMore) return; // Prevent multiple simultaneous requests
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             if (meme) {
//                 setMemes(prevMemes => [...prevMemes, meme]);
//             } else {
//                 setHasMore(false);  // No more memes
//             }
//         } catch (error) {
//             console.error('Error fetching meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Scroll event handler with debounce
//     const handleScroll = () => {
//         if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
//             loadMeme();
//         }
//     };

//     // Debounce function to limit the number of times the scroll handler is called
//     const debounce = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             if (timeoutId) {
//                 clearTimeout(timeoutId);
//             }
//             timeoutId = setTimeout(() => {
//                 func(...args);
//             }, delay);
//         };
//     };

//     // Add event listener to window on scroll
//     useEffect(() => {
//         const debouncedHandleScroll = debounce(handleScroll, 50);  // Debounce with a 500ms delay
//         window.addEventListener('scroll', debouncedHandleScroll);

//         // Cleanup the event listener when the component is unmounted
//         return () => {
//             window.removeEventListener('scroll', debouncedHandleScroll);
//         };
//     }, [loading, hasMore]);

//     // Load initial memes when the component is mounted
//     useEffect(() => {
//         loadMeme();
//     }, []);

//     return (
//         <div className="scroll-container">
//             {memes.length > 0 ? (
//                 memes.map((meme, index) => (
//                     <div key={index} className="meme-card">
//                         <img src={meme.preview_url} alt={meme.image_name} className="w-full h-auto" />
//                         <div className="meme-card-text">{meme.text_corrected}</div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="loading-text">{loading ? 'Loading memes...' : 'No memes available'}</div>
//             )}

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}

//             {!hasMore && !loading && (
//                 <div className="text-center my-4 text-xl text-red-500">No more memes available</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;


// import React, { useState, useEffect } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true); // To control when to stop loading new memes

//     // Fetch a new random meme
//     const loadMeme = async () => {
//         if (loading || !hasMore) return; // Prevent multiple simultaneous requests
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             if (meme) {
//                 setMemes(prevMemes => [...prevMemes, meme]);
//             } else {
//                 setHasMore(false);  // No more memes
//             }
//         } catch (error) {
//             console.error('Error fetching meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Optimized scroll event handler with throttle/debounce
//     const handleScroll = () => {
//         const scrollThreshold = 300; // Set the threshold at which to trigger the fetch
//         if (document.body.scrollHeight - scrollThreshold <= window.scrollY + window.innerHeight) {
//             loadMeme();
//         }
//     };

//     // Throttle function to limit how often handleScroll gets triggered
//     const throttle = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             if (!timeoutId) {
//                 timeoutId = setTimeout(() => {
//                     func(...args);
//                     timeoutId = null; // Reset timeout after execution
//                 }, delay);
//             }
//         };
//     };

//     // Use throttle or debounce for scroll events
//     useEffect(() => {
//         const throttledHandleScroll = throttle(handleScroll, 100); // Throttle with 300ms delay
//         window.addEventListener('scroll', throttledHandleScroll);

//         // Cleanup the event listener when the component is unmounted
//         return () => {
//             window.removeEventListener('scroll', throttledHandleScroll);
//         };
//     }, [loading, hasMore]);

//     // Load initial memes when the component is mounted
//     useEffect(() => {
//         loadMeme();
//     }, []);

//     return (
//         <div className="scroll-container">
//             {memes.length > 0 ? (
//                 memes.map((meme, index) => (
//                     <div key={index} className="meme-card">
//                         <img src={meme.preview_url} alt={meme.image_name} className="w-full h-auto" />
//                         <div className="meme-card-text">{meme.text_corrected}</div>
//                     </div>
//                 ))
//             ) : (
//                 <div className="loading-text">{loading ? 'Loading memes...' : 'No memes available'}</div>
//             )}

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}

//             {!hasMore && !loading && (
//                 <div className="text-center my-4 text-xl text-red-500">No more memes available</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;


// import React, { useState, useEffect } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true); // Flag to stop loading more memes

//     const loadMeme = async () => {
//         if (loading || !hasMore) return; // Prevent multiple simultaneous requests
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             if (meme) {
//                 setMemes((prevMemes) => [...prevMemes, meme]);
//             } else {
//                 setHasMore(false); // Stop fetching if no more memes are available
//             }
//         } catch (error) {
//             console.error('Error fetching meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleScroll = () => {
//         const scrollThreshold = 300;
//         if (document.body.scrollHeight - scrollThreshold <= window.scrollY + window.innerHeight) {
//             loadMeme();
//         }
//     };

//     const throttle = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             if (!timeoutId) {
//                 timeoutId = setTimeout(() => {
//                     func(...args);
//                     timeoutId = null;
//                 }, delay);
//             }
//         };
//     };

//     useEffect(() => {
//         const throttledHandleScroll = throttle(handleScroll, 300);
//         window.addEventListener('scroll', throttledHandleScroll);

//         return () => {
//             window.removeEventListener('scroll', throttledHandleScroll);
//         };
//     }, [loading, hasMore]);

//     useEffect(() => {
//         loadMeme();
//     }, []);

//     return (
//         <div className="max-w-screen-xl mx-auto px-4 py-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {memes.map((meme, index) => (
//                     <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
//                         <img
//                             src={meme.preview_url}
//                             alt={meme.image_name}
//                             className="w-full h-64 object-cover"
//                         />
//                         <div className="p-4">
//                             <p className="text-gray-700 text-sm">{meme.text_corrected}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}

//             {!hasMore && !loading && (
//                 <div className="text-center my-4 text-xl text-red-500">No more memes available</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;



// import React, { useState, useEffect } from 'react';
// import { fetchRandomMeme } from '../services/memeService';

// function MemeReels() {
//     const [memes, setMemes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true); // Flag to stop loading more memes

//     const loadMeme = async () => {
//         if (loading || !hasMore) return; // Prevent multiple simultaneous requests
//         setLoading(true);
//         try {
//             const meme = await fetchRandomMeme();
//             if (meme) {
//                 setMemes((prevMemes) => [...prevMemes, meme]);
//             } else {
//                 setHasMore(false); // Stop fetching if no more memes are available
//             }
//         } catch (error) {
//             console.error('Error fetching meme:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleScroll = () => {
//         const scrollThreshold = 300;
//         if (document.body.scrollHeight - scrollThreshold <= window.scrollY + window.innerHeight) {
//             loadMeme();
//         }
//     };

//     const throttle = (func, delay) => {
//         let timeoutId;
//         return function (...args) {
//             if (!timeoutId) {
//                 timeoutId = setTimeout(() => {
//                     func(...args);
//                     timeoutId = null;
//                 }, delay);
//             }
//         };
//     };

//     useEffect(() => {
//         const throttledHandleScroll = throttle(handleScroll, 300);
//         window.addEventListener('scroll', throttledHandleScroll);

//         return () => {
//             window.removeEventListener('scroll', throttledHandleScroll);
//         };
//     }, [loading, hasMore]);

//     useEffect(() => {
//         loadMeme();
//     }, []);

//     return (
//         <div className="max-w-screen-xl mx-auto px-4 py-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {memes.map((meme, index) => (
//                     <div
//                         key={index}
//                         className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:border-indigo-300"
//                     >
//                         <img
//                             src={meme.preview_url}
//                             alt={meme.image_name}
//                             className="w-full h-64 object-cover rounded-t-lg"
//                         />
//                         <div className="p-4 bg-gradient-to-t from-gray-800 via-gray-900 to-transparent rounded-b-lg">
//                             <p className="text-white text-sm sm:text-base font-semibold">{meme.text_corrected}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {loading && (
//                 <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
//             )}

//             {!hasMore && !loading && (
//                 <div className="text-center my-4 text-xl text-red-500">No more memes available</div>
//             )}
//         </div>
//     );
// }

// export default MemeReels;



import React, { useState, useEffect } from 'react';
import { fetchRandomMeme } from '../services/memeService';


function MemeReels() {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Flag to stop loading more memes

    const loadMeme = async () => {
        if (loading || !hasMore) return; // Prevent multiple simultaneous requests
        setLoading(true);
        try {
            const meme = await fetchRandomMeme();
            if (meme) {
                setMemes((prevMemes) => [...prevMemes, meme]);
            } else {
                setHasMore(false); // Stop fetching if no more memes are available
            }
        } catch (error) {
            console.error('Error fetching meme:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        const scrollThreshold = 300;
        if (document.body.scrollHeight - scrollThreshold <= window.scrollY + window.innerHeight) {
            loadMeme();
        }
    };

    const throttle = (func, delay) => {
        let timeoutId;
        return function (...args) {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    func(...args);
                    timeoutId = null;
                }, delay);
            }
        };
    };

    useEffect(() => {
        const throttledHandleScroll = throttle(handleScroll, 300);
        window.addEventListener('scroll', throttledHandleScroll);

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [loading, hasMore]);

    useEffect(() => {
        loadMeme();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full bg-white p-6 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Welcome to Meme Reels</h1>

                {/* Meme Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {memes.map((meme, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:border-indigo-300"
                        >
                            <img
                                src={meme.preview_url}
                                alt={meme.text_corrected}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <div className="p-4 bg-gradient-to-t from-gray-800 via-gray-900 to-transparent rounded-b-lg">
                                <p className="text-white text-sm sm:text-base font-semibold">{meme.text_corrected}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Loading Spinner */}
                {loading && (
                    <div className="text-center my-4 text-xl text-indigo-500">Loading more memes...</div>
                )}

                {/* No More Memes */}
                {!hasMore && !loading && (
                    <div className="text-center my-4 text-xl text-red-500">No more memes available</div>
                )}
            </div>
        </div>
    );
}

export default MemeReels;

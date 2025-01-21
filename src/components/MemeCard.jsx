import React from 'react';

function MemeCard({ meme }) {
    return (
        <div className="relative h-screen flex justify-center items-center snap-start bg-black">
            <img
                src={meme.preview_url}
                alt={meme.text_corrected}
                className="w-full h-full object-contain"
            />
            <div className="absolute bottom-10 left-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <p className="text-lg font-semibold">{meme.text_corrected}</p>
            </div>
        </div>
    );
}

export default MemeCard;

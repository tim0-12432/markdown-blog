import React from "react";

function YouTube({ videoId }: { videoId: string }) {
  return (
    <div>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="autoplay; encrypted-media"
            title={`YouTube video ${videoId}`}
        />
    </div>
  );
}

export default YouTube;
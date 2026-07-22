import { useEffect, useRef, useState } from "react";

let youtubeApiPromise;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const previousReadyHandler = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousReadyHandler?.();
      resolve(window.YT);
    };

    if (!document.getElementById("youtube-iframe-api")) {
      const script = document.createElement("script");
      script.id = "youtube-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

export default function FounderVideo({
  videoId = "Tl5iV7iMWic",
  title = "Latashia Picquet shares the heart behind Nola Girls",
  startSeconds = 0,
}) {
  const hostRef = useRef(null);
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let mounted = true;

    loadYouTubeApi().then((YT) => {
      if (!mounted || !hostRef.current) return;

      playerRef.current = new YT.Player(hostRef.current, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: {
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
          rel: 0,
          ...(startSeconds > 0 ? { start: startSeconds } : {}),
        },
        events: {
          onReady: () => mounted && setReady(true),
          onStateChange: (event) => {
            if (!mounted) return;
            setPlaying(event.data === YT.PlayerState.PLAYING);
          },
        },
      });
    });

    return () => {
      mounted = false;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [startSeconds, videoId]);

  const togglePlayback = () => {
    if (!ready) return;
    if (playing) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const changeVolume = (amount) => {
    if (!ready) return;
    const nextVolume = Math.min(
      100,
      Math.max(0, playerRef.current.getVolume() + amount),
    );
    playerRef.current.setVolume(nextVolume);
    if (nextVolume > 0) playerRef.current.unMute();
  };

  return (
    <div className="founder-video">
      <div className="founder-video__stage">
        <div ref={hostRef} title={title} />
      </div>
      <div className="founder-video__controls" aria-label="Video controls">
        <button
          type="button"
          onClick={togglePlayback}
          disabled={!ready}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
          {playing ? "Pause" : "Play"}
        </button>
        <button
          type="button"
          onClick={() => changeVolume(-10)}
          disabled={!ready}
          aria-label="Lower video volume"
        >
          <span aria-hidden="true">−</span>
          Volume
        </button>
        <button
          type="button"
          onClick={() => changeVolume(10)}
          disabled={!ready}
          aria-label="Raise video volume"
        >
          <span aria-hidden="true">+</span>
          Volume
        </button>
      </div>
    </div>
  );
}

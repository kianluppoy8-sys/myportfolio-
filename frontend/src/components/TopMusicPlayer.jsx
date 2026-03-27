import React, { useState, useRef, useEffect } from 'react';
import musicImg from '../assets/sunflower.jpeg';

const TopMusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize the audio object from the public folder
        audioRef.current = new Audio('/sunflower.mp3');

        const updateTime = () => setCurrentTime(audioRef.current.currentTime);
        audioRef.current.addEventListener('timeupdate', updateTime);

        // Attempt autoplay on first view
        const attemptPlay = () => {
            if (!audioRef.current || !audioRef.current.paused) return; // Prevent double play triggers
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                document.removeEventListener('click', attemptPlay);
                document.removeEventListener('touchstart', attemptPlay);
            }).catch((e) => {
                // Silently fail on strict browsers and wait for physical interaction
            });
        };
        
        attemptPlay();

        // Enforce autoplay strictly when the user interacts with the entire site (drag/scroll)
        document.addEventListener('click', attemptPlay);
        document.addEventListener('touchstart', attemptPlay);

        return () => {
            if(audioRef.current) {
               audioRef.current.removeEventListener('timeupdate', updateTime);
               audioRef.current.pause();
               audioRef.current.src = "";
            }
            document.removeEventListener('click', attemptPlay);
            document.removeEventListener('touchstart', attemptPlay);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Playback failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const duration = audioRef.current?.duration || 158; // Sunflower is ~2:38

    return (
        <div className="glass-player-wrapper">
            <div className="player-card">
                <div className="album-art">
                    <img src={musicImg} alt="Sunflower Cover" />
                </div>

                <div className="info-section">
                    <div className="device-info">AirPods Pro</div>
                    <div className="song-title">Sunflower</div>
                    <div className="status">Post Malone, Swae Lee</div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                    </div>
                    <div className="time-labels">
                        <span>{formatTime(currentTime)}</span>
                        <span>-{formatTime(duration - currentTime)}</span>
                    </div>

                    <div className="controls">
                        <svg className="nav-btn" width="28" height="28" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>

                        <div className="play-btn" onClick={togglePlay}>
                            {isPlaying ? (
                                <>
                                    <div className="bar"></div><div className="bar"></div>
                                </>
                            ) : (
                                <div className="play-icon">▶</div>
                            )}
                        </div>

                        <svg className="nav-btn" width="28" height="28" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                    </div>
                </div>
            </div>

            <style>{`
                .glass-player-wrapper {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 0;
                    margin: 1.5rem 0;
                }

                .player-card {
                    width: 280px;
                    padding: 22px;
                    background: #0a0a0a; 
                    border-radius: 30px;
                    border: 1px solid #222;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.9);
                }

                .album-art {
                    width: 100%;
                    aspect-ratio: 1/1;
                    background-color: #000;
                    border-radius: 25px;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.6);
                    overflow: hidden;
                }

                .album-art img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .device-info {
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.5;
                    margin-bottom: 4px;
                    color: #fff;
                    font-family: 'Inter', sans-serif;
                }

                .song-title {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 2px;
                    color: #fff;
                    font-family: 'Inter', sans-serif;
                }

                .status {
                    font-size: 12px;
                    opacity: 0.5;
                    margin-bottom: 20px;
                    color: #fff;
                    font-family: 'Inter', sans-serif;
                }

                .progress-bar {
                    width: 100%;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    margin-bottom: 6px;
                }

                .progress-fill {
                    height: 100%;
                    background: #fff;
                    border-radius: 10px;
                    transition: width 0.1s linear;
                }

                .time-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 10px;
                    opacity: 0.4;
                    margin-bottom: 20px;
                    color: #fff;
                }

                .controls {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .play-btn {
                    background: #fff;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: transform 0.2s;
                    box-shadow: 0 5px 15px rgba(255,255,255,0.2);
                }

                .play-btn:hover {
                    transform: scale(1.1);
                }

                .play-btn .bar {
                    width: 4px;
                    height: 18px;
                    background: #000;
                    margin: 0 2px;
                    border-radius: 2px;
                }

                .play-icon {
                   color: #000;
                   font-size: 20px;
                   margin-left: 2px;
                }

                .nav-btn {
                    opacity: 0.6;
                    cursor: pointer;
                    fill: #fff;
                }
            `}</style>
        </div>
    );
};

export default TopMusicPlayer;

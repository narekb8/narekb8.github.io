import './App.css';

export default function Background() {
  return (
    <video className="videoTag" autoPlay loop muted>
        <source src='/videos/background-video.mp4' type='video/mp4' />
    </video>
  );
}
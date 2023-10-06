import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import rope from '../../videos/rope1080p.mp4'
import pushup from '../../videos/push-up-1080p.mp4'
import personal from '../../videos/personal-1080p.mp4'
import logo from '../../images/logo1.png'

const videos = [rope, pushup, personal];

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  const handleVideoEnd = (index) => {
    const nextIndex = (index + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    videoRefs.current[nextIndex].play();
  };

  return (
    <div name='home' className='relative w-full min-h-screen pt-[80px] bg-primaryBg'>
      {videos.map((videoSrc, index) => (
        <video
          key={index}
          ref={(el) => videoRefs.current[index] = el}
          autoPlay={index === 0}
          muted
          onEnded={() => handleVideoEnd(index)}
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${index !== currentVideoIndex ? 'hidden' : ''}`}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* Content Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>

        {/* Logo */}
        <div className="mb-[-230px] w-[600px] h-[600px] flex justify-center items-center z-20">
          <img src={logo} alt="Your Logo" className="w-full h-auto" />
        </div>

        {/* Button */}
        <div className='z-20 mb-0'>
          <Link to="about" smooth={true} duration={500}>
            <button className='group text-primaryText border-2 border-accent1 px-6 py-3 my-2 flex items-center font-bold hover:bg-accent1 hover:text-primaryBg'>
              Saiba Mais
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' />
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}


export default Home;



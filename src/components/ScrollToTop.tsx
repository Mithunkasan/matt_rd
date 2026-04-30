
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div>
            {isVisible && (
            <button 
            onClick={scrollToTop} style={{backgroundColor: '#00E0A3', position: 'fixed', top: 460, right: 30, zIndex: '1', transition: 'opacity 0.5s ease-in-out, transform 0.5s ease', 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'scale(1)' : 'scale(0.5)'}}>
        <i className="fa fa-solid fa-arrow-up" style={{fontSize: "40px", color: '#fff', padding: '5px'}}></i>
</button>
            )}
        </div>
    )
}

export default ScrollToTop;
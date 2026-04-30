import { useEffect } from 'react';

const useScrollTransition = () => {
  useEffect(() => {
    let animationFrameId: number;

    // Function to check visibility of elements
    const checkVisibility = () => {
      const elements = document.querySelectorAll('.component,.component1');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;  // Trigger when 80% of the element is in view

        if (isVisible) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });

      animationFrameId = requestAnimationFrame(checkVisibility);
    };

    // Initial setup of IntersectionObserver to trigger on 30% visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;

        // Only add the class when the element is at least 30% in the viewport
        if (entry.isIntersecting) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.3,  // Trigger when 30% of the element is in view
      rootMargin: '0px 0px -20% 0px',  // Trigger just before the element enters the viewport
    });

    const elements = document.querySelectorAll('.component,component1');
    elements.forEach((el) => observer.observe(el));

    // Start the requestAnimationFrame loop for smoother scrolling
    animationFrameId = requestAnimationFrame(checkVisibility);

    // Cleanup when component unmounts
    return () => {
      observer.disconnect();  // Disconnect IntersectionObserver
      cancelAnimationFrame(animationFrameId);  // Stop the requestAnimationFrame loop
    };
  }, []);
};

export default useScrollTransition;
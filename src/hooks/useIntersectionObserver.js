import { useState, useEffect } from 'react';

const useIntersectionObserver = (elementId, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementId, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
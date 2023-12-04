import React, { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className='title' style={{ paddingLeft: 50, fontFamily: 'Caveat, cursive', color: 'black', fontSize: 60, fontWeight: 800, margin: 0 }}>
      OquendoFilms
    </div>
  );
};

export default Title;
import React, { useState, useEffect } from 'react';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(
    !sessionStorage.getItem('presentation-introduction')
  );

  useEffect(() => {
    if (!isVisible) {
      sessionStorage.setItem('presentation-introduction', 'saw');
    }
  }, [isVisible]);

  const handleDeleteWorn = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className='presentation'>
      <aside className='message'>
        <h2>
          404 - Not Found - You've entered the witness protection program.
        </h2>
        <div className='right'>
          <img
            src='presentation/chiwawa.avif'
            draggable='false'
            alt='chiwawa'
          />
        </div>
      </aside>

      <section className='container-floor'>
        <div className='floor'></div>
      </section>

      <div className='container-letro-map'>
        <img
          src='presentation/worn.webp'
          className='letrero-map'
          draggable='false'
          useMap='#letreroMap'
        />
        <map name='letreroMap'>
          <area
            shape='poly'
            coords='67, 49, 216, 48, 217, 31, 248, 32, 247, 48, 363, 51, 436, 126, 365, 217, 251, 220, 251, 470, 223, 472, 217, 221, 67, 217'
            href='#'
            alt='worn'
            onClick={handleDeleteWorn}
          />
        </map>
      </div>
    </section>
  );
};

export default Presentation;

import React from 'react';
import imagen from '../Image/Image'

const Video = () => {

    const stylesVideo = {
        productos: {
          display: 'flex',
          width: 550,
          height: 280,
          paddingLeft: 40,
          paddingTop: 50,
        }
      }

  return (
    <div style={{ ...stylesVideo.productos, display: 'flex', flexDirection: 'column' }}>
      <img src={imagen.img4} alt="img4" />
      <p style={{ paddingTop: 15 }}>
        Algunos de nuestros clientes
      </p>
    </div>
  );
};

export default Video;
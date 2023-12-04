import React from 'react';
import Imagen from '../Image/Image'

const Client = () => {

    const styles = {
        productos: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 500,
          height: 150,
          paddingTop: 80,
          paddingLeft: 40,
        }
      }
      
return(
    <div style={styles.productos}>
        <img src={Imagen.img1} />
        <img src={Imagen.img2} />
        <img src={Imagen.img3} />
    </div>
    )
}

export default Client
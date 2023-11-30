import { useState } from 'react'
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'
import styled from 'styled-components'
import imagen from './imagenes/imagen'
import Text from './components/Text'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    lastname: '',
    email: '',
    phone: ''
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
      ]);
    reset()
  }
  console.log(formulario, usuarios)

  const T = styled.p`
  font-size: 60px;
  color: black;
  font-weight: 800;
  font-family: 'Caveat', cursive;
  `

  const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 500,
    height: 150,
    paddingTop: 40,
    paddingLeft: 40,
  }
}

const stylesVideo = {
  productos: {
    display: 'flex',
    width: 500,
    height: 340,
    paddingLeft: 40,
  }
}

return (
  <div style={{display: 'flex',margin: '1.5%'}}>
    <div>
      <div style={{paddingLeft: 40}}>
        <T>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"/>
          OquendoFilms
        </T>
      </div>
        <div style={stylesVideo.productos}>
          <img src={imagen.img4}/>
        </div>
      <div style={styles.productos}>
        <img src={imagen.img1}/>
        <img src={imagen.img2}/>
        <img src={imagen.img3}/>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 140, paddingTop: 150}}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </div>
      <Container>
       <div style={{ textAlign: 'center' }}>
        <Card>
          <div style={{ padding: 30, paddingBottom: 20, paddingTop: 75 }}>
             <form onSubmit= {submit} style={{paddingBottom: 20, paddingTop: 20}}>
              <Input  
                name="name" 
                value= {formulario.name} 
                onChange={handleChange}
                placeholder= 'Name'/>
              <Input 
                name="lastname" 
                value= {formulario.lastname} 
                onChange={handleChange}
                placeholder= 'Lastname'/>
                <Input 
                name="email" 
                value= {formulario.email} 
                onChange={handleChange}
                placeholder= 'Email'/>
                <Input 
                name="phone" 
                value= {formulario.phone} 
                onChange={handleChange}
                placeholder= 'Phone'/>
                <Button> 
                  Reservar 
                </Button>
             </form>
           </div>
         </Card>
        </div> 
       </Container>
    </div>
  );
}

export default App;

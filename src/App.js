import { useState } from 'react'
import useFormulario from './components/Hooks/useFormulario'
import Input from './components/Inputs/Input'
import Card from './components/Cards/Card'
import Container from './components/Container/Container'
import Button from './components/Buttons/Button'
import ContainerP from './components/PrincipalContainer/ContainerP'
import Text from './components/Paragraphs/Text'
import Title from './components/title/Title'
import Video from './components/video/Video'
import Client from './components/Client/Client'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    email: '',
    phone: '',
    date: ''
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ]);
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formulario.name,
        email: formulario.email,
        phone: formulario.phone,
        date: formulario.date,
    })
  };

    fetch('http://localhost:8080/reservation', requestOptions)
        .then(response => response.json())
        .then(result => {
           console.log(result)
           reset()
        })
        .catch(err => alert(err)) ;
  }
  console.log(formulario, usuarios)

  return (
    <ContainerP>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
        <div>
          <Title></Title>
          <Video></Video>
          <Client></Client>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingTop: 80 }}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </div>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <Card>
              <div style={{ padding: 30, paddingBottom: 20, paddingTop: 55 }}>
                <form onSubmit={submit} style={{ paddingBottom: 20, paddingTop: 20 }}>
                  <Input
                    name="name"
                    value={formulario.name}
                    onChange={handleChange}
                    placeholder='Name' />
                  <Input
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                    placeholder='Email' />
                  <Input
                    name="phone"
                    value={formulario.phone}
                    onChange={handleChange}
                    placeholder='Phone' />
                     <Input
                    name="date"
                    value={formulario.date}
                    onChange={handleChange}
                    placeholder='Date' />
                  <Button>
                    Reservar
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </Container>
    </ContainerP>
  );
}

export default App;

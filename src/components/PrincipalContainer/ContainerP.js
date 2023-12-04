import './ContainerP.css'
import Footer from '../Footer/Footer';


const ContainerP = ({children}) => {
    return (
        <div className="containerP">
            <div style={{ display: 'flex', paddingTop: 22 }}>
            {children}
            </div>
            <div style={{margin: 'auto', textAlign: 'center', paddingTop: 25}}>
            <Footer> </Footer>
            </div>
        </div>
    )
}

export default ContainerP
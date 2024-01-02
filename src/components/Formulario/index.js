import CampoTexto from '../campoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do artista.</h2>
                <CampoTexto label='Nome' placeholder='Digite o Nome do artista...'/>
                <CampoTexto label='Sobre' placeholder='Digite o sobre o artista...'/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da Imagem...'/>
            </form>
        </section>
    )
}

export default Formulario
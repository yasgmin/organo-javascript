import ListaSuspensa from '../ListaSuspensa'
import CampoTexto from '../campoTexto'
import './Formulario.css'

const Formulario = () => {

    const cantores = [
        'Billie Elish',
        'The Weekend',
        'Conan Gray',
        'Lil Peep',
        'Taylor Swift',
        'Harry Styles',
        'Chase Atlantic',
        'The Neighbourhood',
        'Arctic Monkeys'
    ]

    

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do artista.</h2>
                <CampoTexto label='Nome' placeholder='Digite o Nome do artista...'/>
                <CampoTexto label='Sobre' placeholder='Digite o sobre o artista...'/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da Imagem...'/>
                <ListaSuspensa itens = {cantores}/>
            </form>
        </section>
    )
}

export default Formulario
import Botao from '../Botao'
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

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do artista.</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o Nome do artista...'/>
                <CampoTexto obrigatorio={true} label='Sobre' placeholder='Digite o sobre o artista...'/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da Imagem...'/>
                <ListaSuspensa obrigatorio={true} label='Cantores' itens = {cantores}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario
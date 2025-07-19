
import dogImg from '../../assets/dog/cachorro.png'
import catImg from '../../assets/cat/gato.png'

export default function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h2>O que fazemos</h2>
        <p>Oferecemos serviços de banho, tosa, consultas veterinárias e produtos de qualidade para seu pet.</p>
      </section>

      <section className="section">
      <div>
          <h3>Para Cães</h3>
          <img src={dogImg} alt="Cão" style={{ width: '300px', borderRadius: '12px' }} />
          <p>Banho e tosa especializados, atendimento veterinário e linha exclusiva de produtos.</p>
        </div>
      </section>

      <section className="section">
        <div>
          <h3>Para Gatos</h3>
          <img src={catImg} alt="Gato" style={{ width: '300px', borderRadius: '12px' }}/> 
          <p>Espaço acolhedor, consultas especializadas e produtos selecionados para felinos.</p>
        </div>
      </section>
    </div>
  )
}
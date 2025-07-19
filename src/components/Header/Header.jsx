import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className="header">
      <div className="logo">Meu PetOnline</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

const Header = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2>Portfólio</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#sobre" className="nav-link">Sobre</a>
        <a href="#stack" className="nav-link">Stack</a>
        <a href="#projetos" className="nav-link">Projetos</a>
      </div>
      <button className="btn-contato">Contato</button>
    </div>
  );
}

export default Header;
import BannerImage from '../assets/banner-img.png';

const Banner = () => {
  return (
    <div className="banner">
      <div classname="text-banner">
        <h1 className="color-white">Bem vindo ao</h1>
        <h1 className="color-white">meu portfólio</h1>
        <p className='color-white'>Uma frase interessante sobre mim</p>
        <button className="btn-contato" style={{ marginTop: "30px" }}>Saiba mais</button>
      </div>
      <div className="img-banner">
        <img src={BannerImage} />
      </div>
    </div>
  );
}

export default Banner;
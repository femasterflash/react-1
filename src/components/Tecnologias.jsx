import Card from "./Card"
import { technologies } from "../data/technologies";

const Tec = () => {
  return (
    <section > 
      <h2>Tecnologias</h2>
      
      <div style={{ display:"flex", gap:"20px"}}>
        { 
          technologies.map((tec) => {
            return <Card name={tec.name} img={tec.img} />
          })
        }
      </div>
      

    </section>
  )
}

export default Tec;
import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState(0);

  // Todas as páginas ficam aqui no array
  const pages = [
    // Página 1
    <div className="card fade-in" key="1">
      <h2>Oi, gatinha!</h2>
      <p style={{ marginTop: "5%" }}>
        Bem-vinda ao seu primeiro presente virtual boiola fofinho
      </p>
      <p style={{ marginTop: "5%", fontSize: "0.8rem" }}>Espero que goste 🫶</p>
      <p style={{ marginTop: "1%", fontSize: "0.8rem" }}>Amou as fotos? eu adorei rsrss</p>
    </div>,

    // Página 2
    <div className="card fade-in" key="2">
      <h3>20° dia internacional de Lays!</h3>
      <p style={{ margin: "10px 0 10px 0" }}>
        Literalmente a mulher mais linda do mundo inteiro. Tem como não amar?
      </p>     
      <p style={{ fontSize: "12px" }}>
        e já já você vai ser a <span style={{ fontWeight: "bold" }}>minha</span> mulher!
      </p>
    </div>,

    // Página 3 (com várias caixas de texto)
    <div style={{justifyContent:"center", alignItems:"center", placeSelf:"center", display:"flex", flexDirection:"column"}} key="3">
      <div style={{ margin: "10px 0" }} className="card fade-in">
        <p>Hoje o mundo comemora o dia em que a pessoa mais INCRÍVEL nasceu.
Eu sou muito feliz por ter você na minha vida, por poder rir com você e compartilhar com você uma intimidade que não tenho 
com mais ninguém nesse mundo</p>
      </div>

      <div style={{ margin: "10px 0" }} className="card fade-in">
        <p>
          Tudo ao seu lado é um presente especial demais pra mim, que eu guardo com um carinho absurdo.
          Espero que esse novo ano te traga ainda mais felicidade e sonhos realizados
        </p>
      </div>

      <div style={{ margin: "10px 0" }} className="card fade-in">
        <p>Eu sempre estarei aqui torcendo por você,
          fazendo parte de tudo, vibrando suas alegrias e te apoiando nos momentos ruins.
          Estou com você em tudo que você precisar, porque, pra mim, não há lugar melhor para se estar...</p>
          <h4 style={{placeSelf: "center", color: "#fd43f7ff", marginTop: "10px"}}>Feliz aniversário, amor! </h4>
      </div>
      
    </div>,
    <div className="card fade-in" key="4">
      <p>
        Obrigado por ser quem você é e por dividir sua vida comigo.
        Que esse seja mais um de muitos aniversários que vou celebrar com você.
        Sinto que nosso futuro vai ser maravilhoso, e tenho certeza de que nossos filhos vão ser os mais lindos do mundo!
        Nada me faz tão feliz quanto ver você sorrindo, e quero esse sorriso pra mim pra sempre.
      </p>
    
    </div>,

      <div className="card-amo" key="5">
      <p>
        Amo você, minha princesa! ❤️
      </p>
    </div>
   
    
  ];

  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="page">
      {/* Renderiza a página atual */}
      {pages[page]}

      {/* Botões fixos */}
      <div className="buttons">
        <button onClick={prevPage} disabled={page === 0}>
          Voltar
        </button>
        <button
          style={{ backgroundColor: "#5ed3e6ff" }}
          onClick={nextPage}
          disabled={page === pages.length - 1}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}

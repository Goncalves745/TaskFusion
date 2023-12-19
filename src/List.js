import './MyApp.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useSearchParams } from "react-router-dom";

function List() {
  const produtos = [
    {id: 1, desc: "Produto 1", price: 12.25},
    {id: 2, desc: "Produto 2", price: 10.25},
    {id: 3, desc: "Produto 3", price: 11.25},
  ];

  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <>
        <p>
          <Link to="/">Home</Link>
        </p>

        <h1>{params.id || searchParams.get("id")}</h1>;

        <ul style={{justifyContent: "left", textAlign: "left",}}>
            {produtos.map((p) => (
            <li key={p.id}>{p.desc} :: {p.price}€</li>))}
        </ul>
    </>
  );
}

export default List;
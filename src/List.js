import './MyApp.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useSearchParams } from "react-router-dom";

// Para o diaMes Funcionar
var data = new Date();
var mes = data.getMonth() + 1;
var dia = data.getDate();
var diaMes = dia + ' / ' + mes;


function List() {
  const produtos = [
    {id: 1, desc: "Task 1", date:diaMes}, //Formata para Dia / Mes exemplo: 21 do 12 fica 12/21
    {id: 2, desc: "Produto 2", price: 10.25},
    {id: 3, desc: "Produto 3", price: 11.25},
  ];

  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <>
        <h1>{params.id || searchParams.get("id")}</h1>;

        <ul style={{justifyContent: "left", textAlign: "left",}}>
            {produtos.map((p) => (
            <li key={p.id}>{p.desc} :: {p.date}</li>))}
        </ul>
    </>
  );
}

export default List;
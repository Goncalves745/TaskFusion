import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

/*
const id = (function* () {
    let i = 1;
    while (true) {
      yield i;
      i += 1;
    }
})();
*/

export default function Estado() {
    const [articles, setArticles] = useState([
        {
          id: 1,
          title: "Article 1",
          summary: "Article 1 Summary",
          display: "none",
        },
        {
          id: 2,
          title: "Article 2",
          summary: "Article 2 Summary",
          display: "none",
        },
        {
          id: 3,
          title: "Article 3",
          summary: "Article 3 Summary",
          display: "none",
        },
        {
          id: 4,
          title: "Article 4",
          summary: "Article 4 Summary",
          display: "none",
        },
    ]);

      useEffect(() => {
        setData(articles);
      }, [articles]); 


    function handleSubmit(event){
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const k = data[data.length - 1].id + 1;

        /*
        alert(formData.get('regTitle'));
        alert(k);
        regSum
        */

        const nArr = [...articles, {
                id: k,
                title: formData.get('regTitle'),
                summary: formData.get('regSum'),
                display: "none",
            },
        ];

        console.log(nArr);
        setArticles(nArr);

        /*
        fetch('/api/form-submit-url', {
            method: 'POST',
            body: formData,
        });
        */

        //alert(formData.regTitle);

        /*
        fetch('/some-api', { method: form.method, body: formData });

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);        
        */
    }

    //console.log();

    const [data, setData] = useState(articles);
    const [search, setSearch] = useState("");    

    function pesquisa (event){
        event.preventDefault();

        const arr = articles.filter((a) => (search.length === 0 || a.summary.toLowerCase().includes(search.toLowerCase())))
        setData(arr);
    }

    function onClickRemove(id){
        alert(id);
    }

    return (
        <>
            <h1 className='paraesquerda'>TASK</h1>

            <ul className="paradireita">
            <h1>List</h1>
            <br/>
            {data.map((i) => (
                <li key={i.id}>{i.title} : {i.summary} : 
                    <a
                        href={`#${i.id}`}
                        title="Remover"
                        onClick={onClickRemove.bind(null, i.id)}
                    >
                        &#10007;
                    </a>
                </li>
            ))}
            </ul>
            <div className='paraesquerda'>
            
            <h3>Adicionar Registo</h3>
            <form method="post" style={{marginTop: "20px"}} onSubmit={handleSubmit}>
                <label>
                    Titulo:
                    <input type="text" placeholder="titulo" name="regTitle" />
                </label>
                <br />
                <br />
                <label>
                    Sumário:
                    <input type="text" placeholder="sumário" name="regSum" />
                </label>                
                <br />
                <br />                
                <button type="reset">Reset</button>
                <button type="submit">Add</button>
            </form>
            <br />
                <br /> 
            <h3>Pesquisar Registo</h3>

         
            <label>
                Pesquisar registo:
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="pesquisar artigo" name="pesq" />
            </label>
            <br />
            <br />
            <button type="button" onClick={pesquisa}>Pesquisar</button>

            </div>
            
        </>
    );
}
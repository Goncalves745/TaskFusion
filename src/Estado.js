import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from './DatePicker';
import dateFormat from 'dateformat';

export default function Estado() {
    const [articles, setArticles] = useState([
        {
          id: 1,
          title: "Task 1",
          summary: "Consulta medica",
          display: "none",
          date : "18/01/2024",
          repeatable : null,
        },
        {
          id: 2,
          title: "Task 2",
          summary: "Apresentação do relatorio",
          display: "none",
          date : "23/03/2024",
          repeatable : null,
        },
        {
          id: 3,
          title: "Task 3",
          summary: "Atualizar repositorios",
          display: "none",
          date : "02/06/2024",
          repeatable : null,
        },
        {
          id: 4,
          title: "Task 4",
          summary: "Terminar API",
          display: "none",
          date : "08/07/2024",
          repeatable : null,
        },
    ]);

      useEffect(() => {
        setData(articles);
      }, [articles]); 


    function handleSubmit(event, date){
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const k = data[data.length - 1].id + 1;
        const nArr = [...articles, {
                id: k,
                title: formData.get('regTitle'),
                summary: formData.get('regSum'),
                display: "none",
                date: dateFormat(date, "dd/mm/yyyy"),
                repeatable: formData.get('repeat')
            },
        ];

        console.log(nArr);
        setArticles(nArr);

       
    }

    const [data, setData] = useState(articles);
    const [search, setSearch] = useState("");    

    function pesquisa (event){
        event.preventDefault();

        const arr = articles.filter((a) => (search.length === 0 || a.summary.toLowerCase().includes(search.toLowerCase())))
        setData(arr);
    }

    function onClickRemove(id){
        alert(id + " Deletado!");
        const arr = articles.filter((a) => a.id !== id);
        setArticles(arr);
    }

    function test(date) {
        alert(date);
    }

    return (
        <> 
        <h1 style={{color:'white',fontSize:'20px'}}>Tasks</h1>
            <br /><br />
            <ul className="paradireita">
            <h1>List</h1>    
            <br/>
            {data.map((i) => (
                <li key={i.id}>{i.title} : {i.summary}  {i.date}  {i.repeatable} 
                    <a
                        className='vermelho'
                        href={`#${i.id}`}
                        title="Remover"
                        onClick={onClickRemove.bind(null, i.id)}
                    >
                        &#10007;
                    </a>
                </li>
            ))}
            </ul>
            
            <div className='pesquisa'>
            <h3>Pesquisar Task</h3>       
            <label>
               
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar Task" name="pesq" />
            </label>
            <br />
            <br />
            <button type="button" onClick={pesquisa}>Pesquisar</button>
            </div>

            <div className='paraesquerda'>
            
            <h3>Adicionar Registo</h3>
            <form method="post" style={{marginTop: "20px"}} onSubmit={handleSubmit}>
                <label>
                    Titulo:&nbsp;
                    <input type="text" placeholder="Titulo" name="regTitle" />
                </label>
                <br />
                <br />
                <label>
                    
                    <textarea 
                    type="text" 
                    placeholder=" Descrição"
                    rows={30}
                    cols={73} 
                    name="regSum" />
                </label>
                
                <br /><br />  
                <DatePicker func={test} />
                <br />
                Repeatable: <input type="checkbox" name="repeat" defaultChecked={false} />        
                <br />
                <br />
                              
                <button type="reset">Reset</button>
                <button type="submit">Add</button>
            </form>
            </div>
            <br /> 

            
        </>
    );
}
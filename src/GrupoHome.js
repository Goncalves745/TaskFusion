import './App.css';
import { useState, useEffect } from "react";
import DatePicker from './DatePicker';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

export default function GrupoHome(){
    const [articles, setArticles] = useState([
        {
          id: 1,
          title: "Grupo 1",
          summary: "O melhor grupo",
          display: "none",
        },
        {
          id: 2,
          title: "Grupo 2",
          summary: "Temple OS",
          display: "none",
        },
        {
          id: 3,
          title: "Grupo 3",
          summary: "Jonny Wallds Group",
          display: "none",
        },
        {
          id: 4,
          title: "Grupo 4",
          summary: "Xbox Fans",
          display: "none",
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
                date: dateFormat(date, "dd, mmm, yyyy"),
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
            <br /><br />   
            <ul className="paradireita">
            <h1>Grupos</h1>    
            <br/>
            {data.map((i) => (
                <li key={i.id}>{i.title} : 
                {i.summary}
                <Link to={"/GrupoEstado"}></Link> 
                : 
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
            
            <div className='pesquisa'>
            <h3>Pesquisar Grupo</h3>       
            <label>
               
                <input style={{width:"90%"}} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar Grupo" name="pesq" />
            </label>
            <br />
            <br />
            <button type="button" onClick={pesquisa}>Pesquisar</button>
            </div>

            <div className='paraesquerda'>
            
            <h3>Adicionar Grupo</h3>
            <form method="post" style={{marginTop: "20px"}} onSubmit={handleSubmit}>
                <label>
                    Nome:&nbsp;
                    <input type="text" placeholder="Titulo" name="regTitle" />
                    <br /><br />  Descrição <br /> 
                </label>               
                <br />              
                <label>
                    <textarea 
                    type="text" 
                    placeholder=" Descrição"
                    rows={30}
                    cols={73} 
                    name="regSum" />
                </label>

                <br /><br /><br />    

                <button type="reset">Reset</button>
                <button type="submit">Add</button>
            </form>
            </div>
            <br /> 

            
        </>
    );

}
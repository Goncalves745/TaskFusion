import './App.css';
import { useState, useEffect } from "react";
import DatePicker from './DatePicker';

export default function GrupoEstado(){
    const [articles, setArticles] = useState([
        {
          id: 1,
          title: "Task 1",
          summary: "Task 1 Summary",
          display: "none",
        },
        {
          id: 2,
          title: "Task 2",
          summary: "Task 2 Summary",
          display: "none",
        },
        {
          id: 3,
          title: "Task 3",
          summary: "Task 3 Summary",
          display: "none",
        },
        {
          id: 4,
          title: "Task 4",
          summary: "Task 4 Summary",
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
        const nArr = [...articles, {
                id: k,
                title: formData.get('regTitle'),
                summary: formData.get('regSum'),
                display: "none",
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
        alert(id);
    }

    function test(date) {
        alert(date);
    }

    return (
        <>
            


          
            <br /><br />

            
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
                    Descrição:&nbsp;
                    <input type="text" placeholder="Descrição" name="regSum" />
                </label>
                
                <br /><br />
                <DatePicker func={test} />     
                <br />
                Repeatable: <input type="checkbox" name="myCheckbox" defaultChecked={true} />        
                <br />
                <button type="reset">Assign Task</button>
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
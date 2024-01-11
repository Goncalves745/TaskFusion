import './App.css';
import { useState, useEffect } from "react";
import DatePicker from './DatePicker';
import dateFormat from 'dateformat';
import PagRegistar from './PagRegistar';
import { Link } from 'react-router-dom';
import Pessoa from './Pessoa.png';

export default function GrupoHome(){
    const [articles, setArticles] = useState([
        {
          id: 1,
          title: "Grupo 1",
          summary: "Grupo Fixe",
          display: "none",
        },
        {
          id: 2,
          title: "Grupo 2",
          summary: "Grupo Fixe",
          display: "none",
        },
        {
          id: 3,
          title: "Grupo 3",
          summary: "Grupo Fixe",
          display: "none",
        },
        {
          id: 4,
          title: "Grupo 4",
          summary: "Grupo Fixe",
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
            <br />  
            <h1 style={{color:'white',fontSize:'20px'}}>Log In</h1>
            <br />            
            

            <div className='paraesquerda'>
            
            <img src={Pessoa} width={"150px"}/>
            <form method="post" style={{marginTop: "20px"}} onSubmit={handleSubmit}>
                <label>
                    <>Email</><br />
                    <input type="text" placeholder=" Exemplo@Exemplo.com" name="regTitle" />
                    <br /><br />   
                    <>Password</><br />
                    <input type="password"  name="regTitle" />
                </label>            
                
                <br /><br />
                Novo Utilizador?&nbsp; 
                <Link className='blue' to={"/PagRegistar"}>Criar Conta</Link>              
                <br /><br />    
                <Link  to={"/"}><button type="submit">Sing In</button> </Link>      
                
            </form>
            </div>
            <br /> 

            
        </>
    );

}
import './App.css';
import { useState, useEffect } from "react";
import DatePicker from './DatePicker';
import dateFormat from 'dateformat';
import PagRegistar from './PagRegistar';
import Pessoa from './Pessoa.png';
import { Link } from 'react-router-dom';


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
            <h1 style={{color:'white',fontSize:'20px'}}>Sing Up</h1>
            <br /><br />   
            
            

            <div className='paraesquerda'>
            
            <img src={Pessoa} width={"150px"}/>
            <form method="post" style={{marginTop: "20px"}} onSubmit={handleSubmit}>
                	<label>
                   
                    <>Nome</><br />
                    <input type="text" placeholder=" Exemplo" name="regTitle" />
                    <br /><br />
                    <>Email</><br />
                    <input type="text" placeholder=" Exemplo@Exemplo.com" name="regTitle" />
                    <br /><br />
                    <>Password</><br />
                    <input type="password"  name="regTitle" />
                </label>

                <br /><br />
                Ja tem conta?&nbsp; 
                <Link className='blue' to={"/Conta"}>Log In</Link>              
                               
                <br /><br /><br />   
                <Link  to={"/"}><button type="submit">Create Account</button></Link>    
                
            </form>
            </div>
            <br /> 

            
        </>
    );

}
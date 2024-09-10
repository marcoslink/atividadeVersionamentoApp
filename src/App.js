import React, {useState} from 'react';
import "./App.css";

function App(){
  const dia_semana= ["Segunda" , "Terça" , "Quarta" , "Quinta" , "Sexta" ,"Sábado" , "Domingo"];

  const [estudos , setEstudos] = useState({
    "Segunda" : {manha:"" , tarde: "" , noite:""},
    "Terça" : {manha:"" , tarde: "" , noite:""},
    "Quarta" : {manha:"" , tarde: "" , noite:""},
    "Quinta" : {manha:"" , tarde: "" , noite:""},
    "Sexta" : {manha:"" , tarde: "" , noite:""},
    "Sábado" : {manha:"" , tarde: "" , noite:""},
    "Domingo" : {manha:"" , tarde: "" , noite:""}
    
  });

  const [atividade , setAtividade] = useState("");
  const [diaSelecionado , setDiaSelecionado] = useState("Segunda");
  const[periodoSelecionado , setPeriodoSelecionado] = useState("Manhã")

  const adicionar = () => {
  if(!atividade) return;
    setEstudos((prevEstudos) => ({
      ...prevEstudos, 
        [diaSelecionado]: {
         prevEstudos:[diaSelecionado], [periodoSelecionado]:atividade,
        },
      }) 
    )
  }
  setAtividade("Ex:Back-end Python")

  return(
  <div className='app-container'>
    <h1> Gerenciamento de Estudos </h1>

      <div className='input-container'>
        <label> Dia </label>
        <select value={diaSelecionado} onChange={(e) => setDiaSelecionado(e.   target.value)}> 
        {dia_semana.map(dia =>(
          <option key={dia} value={dia}>{dia}</option>
        ))}
        </select>

        <label>Período</label>
        <select value={{periodoSelecionado}} onChange = {(e) => setPeriodoSelecionado(e.target.value)}>

        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>

        </select>

        <label>O que estudar:</label>
        <input type="text"
        value={atividade}
        onChange={(e) => setAtividade(e.target.value)}
        placeholder = "Ex: Python"
        />

        <button onClick={adicionar}>Adicionar Estudo</button>

      </div>
  

  </div>
  )
};


export default App;
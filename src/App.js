import React, { useState } from 'react';
import './App.css';

function App() {

  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  // Atualiza o estado para armazenar arrays de atividades em cada período
  const [estudos, setEstudos] = useState({
    'Segunda-feira': { manha: [], tarde: [], noite: [] },
    'Terça-feira': { manha: [], tarde: [], noite: [] },
    'Quarta-feira': { manha: [], tarde: [], noite: [] },
    'Quinta-feira': { manha: [], tarde: [], noite: [] },
    'Sexta-feira': { manha: [], tarde: [], noite: [] },
    'Sábado': { manha: [], tarde: [], noite: [] },
    'Domingo': { manha: [], tarde: [], noite: [] },
  });

  const [atividade, setAtividade] = useState('');
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-feira');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('manha');

  // Função para adicionar uma atividade ao período e dia selecionado
  const adicionarAtividade = () => {
    if (!atividade) return;

    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: [...prevEstudos[diaSelecionado][periodoSelecionado], atividade], // Adiciona a atividade ao array
      },
    }));
    setAtividade('');
  };

  // Função para remover uma atividade específica
  const removerAtividade = (dia, periodo, index) => {
    setEstudos((prevEstudos) => {
      const novasAtividades = [...prevEstudos[dia][periodo]];
      novasAtividades.splice(index, 1); // Remove a atividade pelo índice
      return {
        ...prevEstudos,
        [dia]: {
          ...prevEstudos[dia],
          [periodo]: novasAtividades,
        },
      };
    });
  };

  const limparEstudos = () => {
    setEstudos({
      'Segunda-feira': { manha: [], tarde: [], noite: [] },
      'Terça-feira': { manha: [], tarde: [], noite: [] },
      'Quarta-feira': { manha: [], tarde: [], noite: [] },
      'Quinta-feira': { manha: [], tarde: [], noite: [] },
      'Sexta-feira': { manha: [], tarde: [], noite: [] },
      'Sábado': { manha: [], tarde: [], noite: [] },
      'Domingo': { manha: [], tarde: [], noite: [] },
    });
  };

  return (
    <div className="app-container">
      <h1>Gerenciador de Estudos 2024</h1>

      <div className="input-container">
        <label>Dia:</label>
        <select value={diaSelecionado} onChange={(e) => setDiaSelecionado(e.target.value)}>
          {diasDaSemana.map(dia => (
            <option key={dia} value={dia}>{dia}</option>
          ))}
        </select>

        <label>Período:</label>
        <select value={periodoSelecionado} onChange={(e) => setPeriodoSelecionado(e.target.value)}>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>

        <label>O que estudar:</label>
        <input
          type="text"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
          placeholder="Ex: Matemática"
        />
        <button onClick={adicionarAtividade}>Adicionar Estudo</button>
      </div>

      {diasDaSemana.map(dia => (
        <div key={dia} className="dia-container">
          <h2>{dia}</h2>
          {['manha', 'tarde', 'noite'].map(periodo => (
            <div key={periodo} className="periodo-container">
              <strong>{periodo.charAt(0).toUpperCase() + periodo.slice(1)}:</strong>
              <ul>
                {estudos[dia][periodo].map((estudo, index) => (
                  <li key={index}>
                    {estudo}
                    <button onClick={() => removerAtividade(dia, periodo, index)} className="remove-btn">Remover</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <button className="limpar-button" onClick={limparEstudos}>
        <i className='bx bxs-trash'></i> Limpar Estudos 
      </button>
    </div>
  );
}

export default App;

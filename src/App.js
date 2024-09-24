import React, { useState } from 'react';
import './App.css';

function App() {
  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

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
  const [horas, setHoras] = useState(''); // Estado para armazenar as horas de estudo
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-feira');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('manha');

  const adicionarAtividade = () => {
    if (!atividade || !horas) return;

    const estudoCompleto = `${atividade} - ${horas} horas`;

    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: [...prevEstudos[diaSelecionado][periodoSelecionado], estudoCompleto],
      },
    }));
    setAtividade('');
    setHoras('');
  };

  const removerAtividade = (dia, periodo, index) => {
    setEstudos((prevEstudos) => {
      const novasAtividades = [...prevEstudos[dia][periodo]];
      novasAtividades.splice(index, 1);
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

        <label>Horas de Estudo:</label>
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          placeholder="Ex: 2"
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
        Limpar Estudos
      </button>
    </div>
  );
}

export default App;

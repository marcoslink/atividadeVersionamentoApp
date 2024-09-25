import React, { useState } from 'react';
import './App.css';

function App() {
  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  const [estudos, setEstudos] = useState({
    'Segunda-feira': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
    'Terça-feira': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
    'Quarta-feira': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
    'Quinta-feira': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
    'Sexta-feira': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
    'Sábado': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
    'Domingo': { manha: { tarefa: '', prioridade: '' }, tarde: { tarefa: '', prioridade: '' }, noite: { tarefa: '', prioridade: '' } },
  });

  const [atividade, setAtividade] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-feira');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('manha');

  const adicionarAtividade = () => {
    if (!atividade) return;

    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: {
          tarefa: atividade,
          prioridade: prioridade,
        },
      },
    }));

    setAtividade('');
    setPrioridade('baixa');
  };

  const finalizarTarefa = (dia, periodo) => {
    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [dia]: {
        ...prevEstudos[dia],
        [periodo]: { tarefa: '', prioridade: '' },
      },
    }));
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

        <label>Prioridade:</label>
        <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
          <option value="baixa">Baixa</option>
          <option value="media">Média</option>
          <option value="alta">Alta</option>
        </select>

        <button onClick={adicionarAtividade}>Adicionar Estudo</button>
      </div>

      {diasDaSemana.map(dia => (
        <div key={dia} className="dia-container">
          <h2>{dia}</h2>
          <div className="periodo-container">
            <strong>Manhã:</strong> {estudos[dia].manha.tarefa} ({estudos[dia].manha.prioridade})
            {estudos[dia].manha.tarefa && <button onClick={() => finalizarTarefa(dia, 'manha')}>Finalizar</button>}
          </div>
          <div className="periodo-container">
            <strong>Tarde:</strong> {estudos[dia].tarde.tarefa} ({estudos[dia].tarde.prioridade})
            {estudos[dia].tarde.tarefa && <button onClick={() => finalizarTarefa(dia, 'tarde')}>Finalizar</button>}
          </div>
          <div className="periodo-container">
            <strong>Noite:</strong> {estudos[dia].noite.tarefa} ({estudos[dia].noite.prioridade})
            {estudos[dia].noite.tarefa && <button onClick={() => finalizarTarefa(dia, 'noite')}>Finalizar</button>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

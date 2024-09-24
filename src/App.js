import React, { useState } from 'react';
import './App.css';

function App() {
  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  const [estudos, setEstudos] = useState({
    'Segunda-feira': { manha: '', tarde: '', noite: '' },
    'Terça-feira': { manha: '', tarde: '', noite: '' },
    'Quarta-feira': { manha: '', tarde: '', noite: '' },
    'Quinta-feira': { manha: '', tarde: '', noite: '' },
    'Sexta-feira': { manha: '', tarde: '', noite: '' },
    'Sábado': { manha: '', tarde: '', noite: '' },
    'Domingo': { manha: '', tarde: '', noite: '' },
  });

  const [atividade, setAtividade] = useState('');
  const [diaSelecionado, setDiaSelecionado] = useState('Segunda-feira');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('manha');
  const [isEditing, setIsEditing] = useState(false); 
  const [novoConteudo, setNovoConteudo] = useState(''); 

  const adicionarAtividade = () => {
    if (!atividade) return;

    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: atividade,
      },
    }));

    setAtividade('');
  };

  const limparEstudos = () => {
    setEstudos({
      'Segunda-feira': { manha: '', tarde: '', noite: '' },
      'Terça-feira': { manha: '', tarde: '', noite: '' },
      'Quarta-feira': { manha: '', tarde: '', noite: '' },
      'Quinta-feira': { manha: '', tarde: '', noite: '' },
      'Sexta-feira': { manha: '', tarde: '', noite: '' },
      'Sábado': { manha: '', tarde: '', noite: '' },
      'Domingo': { manha: '', tarde: '', noite: '' },
    });
  };

  const excluirDia = (dia) => {
    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [dia]: { manha: '', tarde: '', noite: '' },
    }));
  };

  const iniciarEdicao = (dia, periodo) => {
    setDiaSelecionado(dia);
    setPeriodoSelecionado(periodo);
    setNovoConteudo(estudos[dia][periodo]); 
    setIsEditing(true);
  };

  const salvarEdicao = () => {
    setEstudos((prevEstudos) => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: novoConteudo,
      },
    }));
    setIsEditing(false);
    setNovoConteudo('');
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
          <h3>{dia} 
            <button className="botao-excluir" onClick={() => excluirDia(dia)}>Excluir Tarefas</button>
          </h3>
          <div className="periodo-container">
            <strong>Manhã:</strong>
            {isEditing && diaSelecionado === dia && periodoSelecionado === 'manha' ? (
              <div>
                <input 
                  type="text" 
                  value={novoConteudo} 
                  onChange={(e) => setNovoConteudo(e.target.value)} 
                  placeholder="Novo conteúdo" 
                />
                <button onClick={salvarEdicao}>Salvar</button>
              </div>
            ) : (
              <div style={{ flex: '1' }}>
                <span>{estudos[dia].manha}</span>
              </div>
            )}
            {estudos[dia].manha && (
              <button className="botao-editar" onClick={() => iniciarEdicao(dia, 'manha')}>
                <i className='bx bxs-pencil'></i>
              </button>
            )}
          </div>
          <hr className="linha-separacao" />
          <div className="periodo-container">
            <strong>Tarde:</strong>
            {isEditing && diaSelecionado === dia && periodoSelecionado === 'tarde' ? (
              <div>
                <input 
                  type="text" 
                  value={novoConteudo} 
                  onChange={(e) => setNovoConteudo(e.target.value)} 
                  placeholder="Novo conteúdo" 
                />
                <button onClick={salvarEdicao}>Salvar</button>
              </div>
            ) : (
              <div style={{ flex: '1' }}>
                <span>{estudos[dia].tarde}</span>
              </div>
            )}
            {estudos[dia].tarde && (
              <button className="botao-editar" onClick={() => iniciarEdicao(dia, 'tarde')}>
                <i className='bx bxs-pencil'></i>
              </button>
            )}
          </div>
          <hr className="linha-separacao" />
          <div className="periodo-container">
            <strong>Noite:</strong>
            {isEditing && diaSelecionado === dia && periodoSelecionado === 'noite' ? (
              <div>
                <input 
                  type="text" 
                  value={novoConteudo} 
                  onChange={(e) => setNovoConteudo(e.target.value)} 
                  placeholder="Novo conteúdo" 
                />
                <button onClick={salvarEdicao}>Salvar</button>
              </div>
            ) : (
              <div style={{ flex: '1' }}>
                <span>{estudos[dia].noite}</span>
              </div>
            )}
            {estudos[dia].noite && (
              <button className="botao-editar" onClick={() => iniciarEdicao(dia, 'noite')}>
                <i className='bx bxs-pencil'></i>
              </button>
            )}
          </div>
        </div>
      ))}
      <button className="limpar-button" onClick={limparEstudos}>
        <i className='bx bxs-trash'></i> Limpar Estudos 
      </button>
    </div>
  );
}

export default App;
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
  const [isEditando, setIsEditando] = useState(false);
  const [atividadeEditada, setAtividadeEditada] = useState(''); 
 

  const adicionarAtividade = () => {
    if (!atividade) return;

    setEstudos(prevEstudos => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: atividade,
      },
    }));

    setAtividade('');
  };

  const iniciarEdicao = (dia, periodo) => {
    setDiaSelecionado(dia);
    setPeriodoSelecionado(periodo);
    setAtividadeEditada(estudos[dia][periodo]);
    setIsEditando(true);
  };

  const confirmarEdicao = () => {
    setEstudos(prevEstudos => ({
      ...prevEstudos,
      [diaSelecionado]: {
        ...prevEstudos[diaSelecionado],
        [periodoSelecionado]: atividadeEditada, // Atualiza com a atividade editada
      },
    }));
    setAtividadeEditada(''); // Limpa o campo de edição
    setIsEditando(false); // Sai do modo de edição
  };

  const removerAtividade = (dia, periodo) => {
    setEstudos(prevEstudos => ({
      ...prevEstudos,
      [dia]: {
        ...prevEstudos[dia],
        [periodo]: '',
      },
    }));
  };

  const limparTodasAtividades = () => {
    const estudosLimpos = diasDaSemana.reduce((acc, dia) => {
      acc[dia] = { manha: '', tarde: '', noite: '' };
      return acc;
    }, {});
    setEstudos(estudosLimpos);
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
              <strong>{periodo.charAt(0).toUpperCase() + periodo.slice(1)}:</strong> {estudos[dia][periodo]}
              <button id='funcao' onClick={() => removerAtividade(dia, periodo)}>Remover</button>
              <button id="funcao"onClick={() => iniciarEdicao(dia, periodo)}>Editar</button>
            </div>
          ))}
        </div>
      ))}

    {isEditando && (
        <div>
          <input
            type="text"
            value={atividadeEditada}
            onChange={(e) => setAtividadeEditada(e.target.value)}
          />
          <button onClick={confirmarEdicao}>Confirmar Edição</button>
        </div>
      )}
     

      <button onClick={limparTodasAtividades}> Limpar Todas Atividades </button>
    </div>
  );
}

export default App;

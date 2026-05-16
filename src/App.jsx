import { useState } from 'react'
import './App.css'
import TipCard from './components/TipCard'

function App() {
 const tips = [
  {
    titulo: '🚀 Empezá por la tarea que más evitás.',
    detalle: 'Lo difícil primero: cuando lo sacás del camino, el resto fluye mucho más liviano.'
  },
  {
    titulo: '⏳ Trabajá en bloques con mini recompensas.',
    detalle: '25 minutos de foco + 5 de descanso: tu cerebro rinde más cuando sabe que hay pausas.'
  },
  {
    titulo: '📱 Silenciá el mundo por un rato.',
    detalle: 'No es ignorar todo, es regalarte un espacio sin interrupciones para avanzar de verdad.'
  },
  {
    titulo: '🧠 Pensá el día antes de empezarlo.',
    detalle: 'Si ya sabés qué hacer cuando arrancás, evitás perder energía decidiendo sobre la marcha.'
  },
  {
    titulo: '🌿 Descansar también es avanzar.',
    detalle: 'Las pausas no te frenan: te recargan para seguir con más claridad.'
  },
  {
    titulo: '🧹 Ordená tu espacio, ordená tu mente.',
    detalle: 'Un entorno simple ayuda a pensar con menos ruido mental.'
  },
  {
    titulo: '🎯 Una cosa bien hecha vale más que cinco a medias.',
    detalle: 'Enfocarte en una sola tarea mejora la calidad y te ahorra estrés.'
  },
  {
    titulo: '🌙 Dormir bien es tu superpoder oculto.',
    detalle: 'Con buen descanso, tu atención, memoria y creatividad funcionan al máximo.'
  }
]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(tips.length).fill(0))
  const [views, setViews] = useState(0)
  const [openTip, setOpenTip] = useState(null)
  const [hoverVote, setHoverVote] = useState(false)
  const [hoverNext, setHoverNext] = useState(false)

  const handleRandom = () => {
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * tips.length)
    } while (randomIndex === selected)

    setSelected(randomIndex)
    setViews(v => v + 1)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)

  const winnerIndex = votes.reduce((bestIdx, val, idx, arr) =>
    val > arr[bestIdx] ? idx : bestIdx, 0
  )

  return (
    <div className="app">

      <header className="header">
        <h1>🌿 Tips de Productividad para el Día a Día</h1>
        <p>Pequeños hábitos generan grandes resultados</p>
      </header>

      <TipCard
        tip={tips[selected]}
        views={views}
        votes={votes[selected]}
        onVote={handleVote}
        onNext={handleRandom}
        hoverVote={hoverVote}
        setHoverVote={setHoverVote}
        hoverNext={hoverNext}
        setHoverNext={setHoverNext}
      />

      <div className="box">
        <h3>📋 Consejos con explicación</h3>

        {tips.map((tip, index) => (
          <div key={index} className="tip-item">
            <button
              className="circle-btn"
              onClick={() => setOpenTip(openTip === index ? null : index)}
            >
              {index + 1}
            </button>

            <span>{tip.titulo}</span>

            {openTip === index && (
              <p className="detalle">{tip.detalle}</p>
            )}
          </div>
        ))}
      </div>

      <div className="box">
        <h3>🏆 Consejo más votado</h3>

        {maxVotes === 0 ? (
          <p>Todavía no hay votos</p>
        ) : (
          <p>{tips[winnerIndex].titulo} — 🔥 {maxVotes} votos</p>
        )}
      </div>

      <footer className="footer">
        Proyecto realizado por Susana – React UTN 💛
      </footer>

    </div>
  )
}

export default App
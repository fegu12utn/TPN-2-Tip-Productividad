import { useState } from 'react'
import './App.css'
import TipCard from './components/TipCard'

function App() {
  const tips = [
    {
      titulo: '💻 Practicá código un poco todos los días.',
      detalle: 'La práctica constante ayuda a fijar conceptos y ganar confianza al programar.'
    },
    {
      titulo: '🧠 Leé los errores antes de buscar ayuda.',
      detalle: 'Los mensajes de error suelen indicar exactamente dónde está el problema.'
    },
    {
      titulo: '📝 Dividí un problema grande en pasos pequeños.',
      detalle: 'Resolver partes pequeñas hace más fácil entender y programar la solución completa.'
    },
    {
      titulo: '📚 Comentá tu código para entenderlo mejor.',
      detalle: 'Los comentarios te ayudan a recordar qué hace cada parte del programa.'
    },
    {
      titulo: '🚀 Probá aunque no estés segura del resultado.',
      detalle: 'Experimentar y equivocarse forma parte del aprendizaje en programación.'
    },
    {
      titulo: '💾 Guardá tus archivos antes de ejecutar.',
      detalle: 'Guardar evita perder cambios y permite probar siempre la última versión del código.'
    },
    {
      titulo: '🔍 No copies código sin comprenderlo.',
      detalle: 'Entender cada línea te ayuda a aprender y resolver problemas sola.'
    },
    {
      titulo: '☕ La paciencia también es parte de programar.',
      detalle: 'Tomarse tiempo para pensar y descansar ayuda a encontrar soluciones.'
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
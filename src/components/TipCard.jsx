export default function TipCard({
  tip,
  views,
  votes,
  onVote,
  onNext,
  hoverVote,
  setHoverVote,
  hoverNext,
  setHoverNext
}) {
  return (
    <div
      style={{
        backgroundColor: '#fffaf3',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '20px',
        minHeight: '260px'
      }}
    >
      <h3>💡 Consejo actual</h3>

      <p>{tip.titulo}</p>

      <p>👀 Consejos vistos: {views}</p>
      <p>⭐ Votos: {votes}</p>

      <div style={{ marginTop: '25px' }}>
        <button
          onClick={onVote}
          onMouseEnter={() => setHoverVote(true)}
          onMouseLeave={() => setHoverVote(false)}
          style={{
            backgroundColor: hoverVote ? '#d98c4d' : '#c97b36',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            marginRight: '10px',
            cursor: 'pointer',
            transform: hoverVote ? 'scale(1.08)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
        >
          Votar 👍
        </button>

        <button
          onClick={onNext}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
          style={{
            backgroundColor: hoverNext ? '#a66a38' : '#8d5524',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            cursor: 'pointer',
            transform: hoverNext ? 'scale(1.08)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
        >
          Siguiente 🎲
        </button>
      </div>
    </div>
  );
}
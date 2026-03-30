export function ParticleField({ count = 20 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: `${Math.random() * 6}s`,
    duration: `${Math.random() * 6 + 6}s`,
    opacity: Math.random() * 0.4 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: "#43B89A",
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

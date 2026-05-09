export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 220" className={className} aria-label="CLE logo">
      <rect x="40.5" y="10.5" width="199" height="199" rx="44" ry="44" fill="#FFFFFF" stroke="rgba(30,27,75,.12)" strokeWidth="1"/>
      <text x="218" y="38" fontFamily="'JetBrains Mono', ui-monospace, monospace" fontSize="13" fontWeight="500" letterSpacing="2" fill="#6B5BFF" fillOpacity="0.55" textAnchor="end">01</text>
      <text x="140" y="154" fontFamily="Fredoka, ui-sans-serif, system-ui" fontWeight="700" fontSize="148" letterSpacing="-6" fill="#6B5BFF" textAnchor="middle">C</text>
      <rect x="260" y="10" width="200" height="200" rx="44" ry="44" fill="#6B5BFF"/>
      <text x="438" y="38" fontFamily="'JetBrains Mono', ui-monospace, monospace" fontSize="13" fontWeight="500" letterSpacing="2" fill="#FFFFFF" fillOpacity="0.55" textAnchor="end">02</text>
      <text x="360" y="154" fontFamily="Fredoka, ui-sans-serif, system-ui" fontWeight="700" fontSize="148" letterSpacing="-6" fill="#FFFFFF" textAnchor="middle">L</text>
      <rect x="480" y="10" width="200" height="200" rx="44" ry="44" fill="#DCE7FF"/>
      <text x="658" y="38" fontFamily="'JetBrains Mono', ui-monospace, monospace" fontSize="13" fontWeight="500" letterSpacing="2" fill="#3B59D9" fillOpacity="0.55" textAnchor="end">03</text>
      <text x="580" y="154" fontFamily="Fredoka, ui-sans-serif, system-ui" fontWeight="700" fontSize="148" letterSpacing="-6" fill="#3B59D9" textAnchor="middle">E</text>
      <g transform="translate(688 86) scale(1.2)">
        <path d="M 0 -16 C 1.6 -4.8 4.8 -1.6 16 0 C 4.8 1.6 1.6 4.8 0 16 C -1.6 4.8 -4.8 1.6 -16 0 C -4.8 -1.6 -1.6 -4.8 0 -16 Z" fill="#6B5BFF"/>
      </g>
    </svg>
  );
}

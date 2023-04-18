export const shimmer = (width, height) => `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F7F7F7" />
        <stop offset="50%" stop-color="#EDEDED" />
        <stop offset="100%" stop-color="#F7F7F7" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="${width}" height="${height}" fill="url(#shimmer-gradient)">
      <animate attributeName="opacity" values="0.3; 0.5; 0.3" dur="1.2s" repeatCount="indefinite" />
      <animateTransform attributeName="transform" type="translate" values="-50%; 50%; -50%" dur="1.2s" repeatCount="indefinite" />
    </rect>
  </svg>
`;
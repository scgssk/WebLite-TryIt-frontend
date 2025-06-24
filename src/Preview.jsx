function Preview({ html }) {
  return (
    <iframe
      title="Live Preview"
      src={html || undefined}
      sandbox="allow-scripts allow-same-origin"
      style={{ width: '100%', height: '90vh', border: 'none' }}
    />
  );
}

export default Preview;

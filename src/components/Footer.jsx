export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-divider)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px clamp(20px, 5vw, 72px)', display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 20, margin: 0 }}>Amber Tutoring</p>
        <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: 'var(--color-neutral-700)' }}>One-to-one HSC and Year 7–11 tutoring · Online · example@example.com</p>
      </div>
    </footer>
  )
}

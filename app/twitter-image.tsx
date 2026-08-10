import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'МЕТАЛЛШОВ'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 72px',
          background: '#0A0C10',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 32, color: '#2EC4FF', fontWeight: 700, letterSpacing: 4 }}>МЕТАЛЛШОВ</div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>
          Сварка с выездом
        </div>
        <div style={{ marginTop: 20, fontSize: 26, color: 'rgba(255,255,255,0.6)' }}>
          MIG · TIG · конструкции · ремонт
        </div>
      </div>
    ),
    { ...size },
  )
}

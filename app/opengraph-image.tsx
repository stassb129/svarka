import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'МЕТАЛЛШОВ — все виды сварки с выездом'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0A0C10 0%, #141820 45%, #0A0C10 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#2EC4FF',
            fontWeight: 700,
          }}
        >
          МЕТАЛЛШОВ
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: 'uppercase',
              letterSpacing: -1,
              maxWidth: 900,
            }}
          >
            Все виды сварки с выездом
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.65)', maxWidth: 820, lineHeight: 1.35 }}>
            MIG/MAG · отопление · металлоизделия · ремонт
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: 'rgba(255,255,255,0.55)',
          }}
        >
          <span>+7 (977) 652-77-77</span>
          <span style={{ color: '#2EC4FF' }}>Москва и область</span>
        </div>
      </div>
    ),
    { ...size },
  )
}

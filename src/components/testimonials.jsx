import React, { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    text: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“',
    name: 'David Fincher',
    platform: 'On Capterra',
    avatar: '/Avatar Users.png',
    stars: 5,
  },
  {
    id: 2,
    text: '“My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”',
    name: 'Lillian Williams',
    platform: 'On Capterra',
    avatar: '/Avatar Users-2.png',
    stars: 5,
  },
  {
    id: 3,
    text: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“',
    name: 'Michael',
    platform: 'On Capterra',
    avatar: '/Avatar Users-2.png',
    stars: 5,
  },

]

const allTestimonials = [...testimonials, ...testimonials]

const TestimonialCard = ({ t }) => (
  <div
    style={{
      minWidth: '420px',
      maxWidth: '420px',
      background: '#F9F0F8',
      borderRadius: '12px',
      padding: '28px 28px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginRight: '24px',
      boxSizing: 'border-box',
      height: '360px',
      flexShrink: 0,
    }}
  >
    <div>

      <p style={{ fontSize: '14px', color: '#1a1a2e', lineHeight: 1.6, fontWeight: t.id === 2 ? 400 : 400, margin: 0 }}>
        {t.text}
      </p>
      <div className='mt-4' style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <span className='bg-white p-2 rounded-3 d-flex justify-content-center align-items-center' style={{ width: 44, height: 44 }}>
          <img src="/testimonial-arrow.svg" alt="LeadCRM" style={{ width: 20, objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
        </span>
        <div style={{ display: 'flex', gap: 2 }}>
          {Array.from({ length: t.stars }).map((_, i) => (
            <FaStar key={i} color="#090F4E;
" size={16} />
          ))}
        </div>
      </div>
    </div>

    <div>
      <hr style={{ border: 'none', borderTop: '1px solid #6b6b6b', margin: '18px 0 14px' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={t.avatar}
          alt={t.name}
          style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', background: '#ccc' }}
          onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=6c6fc7&color=fff&size=44` }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: '15px', color: '#1a1a2e' }}>{t.name}</div>
          <div style={{ fontSize: '13px', color: '#6b7280' }}>{t.platform}</div>
        </div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 450, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ padding: '60px 0', overflow: 'hidden', background: '#fff' }}>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className='container-fluid'>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1a1a2e', margin: 0, maxWidth: '600px', lineHeight: 1.3 }}>
            What people are saying about LeadCRM
          </h2>
          <div className="testimonial-slider-btns" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => scroll(-1)}
              style={{
                width: 48, height: 48, borderRadius: '50%',
                border: '2px solid #1a1a2e', background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#1a1a2e', fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a1a2e' }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll(1)}
              style={{
                width: 48, height: 48, borderRadius: '50%',
                border: '2px solid #1a1a2e', background: '#1a1a2e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff', fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#3b3d8f'; e.currentTarget.style.borderColor = '#3b3d8f' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.borderColor = '#1a1a2e' }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ width: '100%', overflow: 'hidden', paddingLeft: '24px' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`marquee-track${paused ? ' paused' : ''}`}>
          {allTestimonials.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
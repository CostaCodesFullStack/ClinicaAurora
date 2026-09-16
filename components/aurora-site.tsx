'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Menu, MessageCircle, X, Sparkles, Heart, ShieldCheck } from 'lucide-react'

const wa = 'https://wa.me/?text=' + encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Clínica Aurora.')
const nav = [['Início','/'],['Procedimentos','/procedimentos'],['Sobre','/sobre'],['Profissionais','/profissionais'],['Resultados','/resultados'],['FAQ','/faq']]
const procedures = [
  { title: 'Harmonização facial', text: 'Equilíbrio e proporção para valorizar seus traços.', indication: 'Para quem busca compreender possibilidades de equilíbrio facial.', benefits: ['proporção', 'contornos', 'naturalidade'], image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85' },
  { title: 'Toxina botulínica', text: 'Suavidade e expressão preservada em cada detalhe.', indication: 'Para quem deseja conversar sobre linhas de expressão e prevenção.', benefits: ['suavidade', 'expressão', 'planejamento'], image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85' },
  { title: 'Bioestimuladores', text: 'Protocolos desenvolvidos para estimular a produção natural de colágeno.', indication: 'Para quem busca cuidar da firmeza e da qualidade da pele.', benefits: ['firmeza', 'textura', 'qualidade da pele'], image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85' },
  { title: 'Cuidados com a pele', text: 'Protocolos para uma pele mais luminosa e saudável.', indication: 'Para quem quer estabelecer uma rotina de cuidado individualizada.', benefits: ['luminosidade', 'hidratação', 'rotina'], image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85' },
]
const professionals = [
  { name: 'Dra. Helena Martins', role: 'Especialista em estética facial', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85', bio: 'Um olhar cuidadoso para cada história, combinando precisão técnica e escuta.' },
  { name: 'Dra. Marina Alves', role: 'Especialista em dermatofuncional', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85', bio: 'Protocolos personalizados que respeitam os ciclos e a singularidade da pele.' },
  { name: 'Dr. Rafael Costa', role: 'Especialista em procedimentos estéticos', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85', bio: 'Tecnologia, conhecimento e naturalidade no centro de cada escolha.' },
]
const faqs = [
  { question: 'Como funciona a avaliação?', answer: 'Começamos com uma conversa cuidadosa para entender seus objetivos, sua rotina e suas expectativas. A equipe então orienta as possibilidades de forma individualizada e responsável.' },
  { question: 'Os procedimentos são personalizados?', answer: 'Sim. Cada plano é pensado a partir das características e necessidades de cada pessoa, sempre respeitando seus limites e seu momento.' },
  { question: 'Os resultados são imediatos?', answer: 'O tempo de percepção varia conforme o procedimento e as características individuais. A avaliação é o momento adequado para conversar sobre possibilidades, cuidados e expectativas realistas.' },
  { question: 'Como escolher o procedimento adequado?', answer: 'A escolha acontece depois de uma avaliação. Não é preciso chegar com uma decisão pronta: a equipe explica as opções e ajuda a entender o que faz sentido para você.' },
  { question: 'Como funciona o agendamento?', answer: 'Neste projeto conceitual, o botão de agendamento abre uma ação demonstrativa de contato. Em uma operação real, a equipe confirmaria o melhor horário e enviaria as orientações necessárias.' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-main">CLÍNICA <em>AURORA</em></span>
        </Link>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => (
            <Link key={href} className={path === href ? 'active' : ''} href={href}>{label}</Link>
          ))}
        </nav>
        <a className="button header-cta" href={wa} target="_blank" rel="noreferrer">Agendar avaliação</a>
        <button className="menu-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
          {open ? <X strokeWidth={1} size={28} /> : <Menu strokeWidth={1} size={28} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a href={wa} target="_blank" rel="noreferrer" className="button" style={{ alignSelf: 'flex-start' }} onClick={() => setOpen(false)}>Agendar avaliação</a>
        </nav>
      )}
    </header>
  )
}

function SectionHeading({ eyebrow, title, text }: {eyebrow:string,title:string,text?:string}) { 
  return (
    <div className="section-head animate-reveal">
      <h2 dangerouslySetInnerHTML={{__html: title}} />
      {text && <p>{text}</p>}
    </div>
  ) 
}

function WhatsApp() { 
  return (
    <a className="wa-btn" href={wa} target="_blank" rel="noreferrer" aria-label="Agendar avaliação">
      <MessageCircle strokeWidth={1.5} />
    </a>
  ) 
}

function Footer() { 
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-main" style={{ fontSize: '14px' }}>CLÍNICA <em>AURORA</em></span>
            </Link>
            <h2>Estética avançada para realçar sua essência.</h2>
          </div>
          <div className="footer-col footer-col-1">
            <span>Navegue</span>
            {nav.slice(1).map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <Link href="/contato">Agendar avaliação</Link>
          </div>
          <div className="footer-col footer-col-2">
            <span>Dados do projeto</span>
            <p>WhatsApp<br/>Ação demonstrativa</p>
            <button onClick={() => window.open(wa, '_blank', 'noopener,noreferrer')}>Falar com a equipe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Clínica Aurora é uma marca fictícia desenvolvida pela Blaze System™ exclusivamente para demonstração de design.</span>
          <span>Projeto conceitual · Conteúdo ilustrativo</span>
        </div>
      </div>
    </footer>
  ) 
}

function CTA() { 
  return (
    <section className="container section-pad">
      <div className="cta-block animate-reveal">
        <span className="eyebrow">Um primeiro passo</span>
        <h2>Seu cuidado começa <i>com uma conversa.</i></h2>
        <p className="cta-desc">Agende uma avaliação e descubra quais possibilidades fazem sentido para você.</p>
        <a className="button" href={wa} target="_blank" rel="noreferrer">Agendar avaliação</a>
      </div>
    </section>
  ) 
}

function FAQ({ limit }: {limit?:number}) { 
  const [active,setActive]=useState<number|null>(null); 
  return (
    <div className="faq-list">
      {faqs.slice(0,limit).map((item,i) => (
        <div className={`faq-row ${active===i ? 'open' : ''}`} key={item.question}>
          <button className="faq-btn" id={`faq-question-${i}`} onClick={() => setActive(active===i ? null : i)} aria-expanded={active===i} aria-controls={`faq-answer-${i}`}>
            <span>0{i+1}</span>
            <h3>{item.question}</h3>
            <ChevronDown className="faq-icon" strokeWidth={1} size={22} />
          </button>
          <div className="faq-ans" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  ) 
}

function Home() { 
  return (
    <main>
      <section className="container">
        <div className="hero">
          <div className="hero-content animate-reveal">
            <div>
              <span className="eyebrow">Estética avançada · cuidado essencial</span>
              <h1>Realce<br/>sua <i>essência.</i></h1>
            </div>
            <p>Estética avançada, cuidado personalizado e resultados naturais para valorizar aquilo que torna você única.</p>
            <div className="hero-actions">
              <a href={wa} target="_blank" rel="noreferrer" className="button">Agendar avaliação</a>
              <Link href="/procedimentos" className="text-link">Conhecer procedimentos</Link>
            </div>
          </div>
          <div className="hero-image-wrap animate-reveal d-1">
            <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1400&q=90" alt="Mulher em ambiente claro de cuidado e bem-estar" fetchPriority="high" />
          </div>
        </div>
      </section>
      
      <section className="container section-pad manifesto-section">
        <div className="manifesto-wrap animate-reveal">
          <span className="eyebrow">01 / 04 — O jeito Aurora</span>
          <h2>Cuidar é olhar <i>por inteiro.</i></h2>
          <p>Acreditamos que a beleza não precisa ser transformada — apenas cuidada com intenção, conhecimento e respeito à sua individualidade.</p>
        </div>
        
        <div className="values-list animate-reveal d-1">
          <div className="value-row">
            <span className="value-num">01</span>
            <div className="value-title">
              <Heart />
              <h3>Atendimento personalizado</h3>
            </div>
            <p className="value-desc">Protocolos individualizados para cada necessidade.</p>
          </div>
          <div className="value-row">
            <span className="value-num">02</span>
            <div className="value-title">
              <Sparkles />
              <h3>Resultados naturais</h3>
            </div>
            <p className="value-desc">Tratamentos que valorizam suas características.</p>
          </div>
          <div className="value-row">
            <span className="value-num">03</span>
            <div className="value-title">
              <ShieldCheck />
              <h3>Tecnologia e conhecimento</h3>
            </div>
            <p className="value-desc">Precisão e segurança em cada escolha.</p>
          </div>
        </div>
      </section>
      
      <section className="container section-pad section-border-top">
        <SectionHeading 
          eyebrow="Nossos cuidados" 
          title="Possibilidades para<br/><i>o seu momento.</i>" 
          text="Cada pessoa tem uma história. Cada protocolo começa com escuta." 
        />
        <div className="proc-list">
          {procedures.map((item,i) => (
            <div key={item.title} className="proc-item animate-reveal">
              <div className="proc-img">
                <Link href="/procedimentos">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </Link>
              </div>
              <div className="proc-text">
                <span className="eyebrow" style={{ marginBottom: 0 }}>0{i+1}</span>
                <Link href="/procedimentos" style={{ textDecoration: 'none' }}>
                  <h3>{item.title} <ArrowRight strokeWidth={1} /></h3>
                </Link>
                <p>{item.text}</p>
                <Link href="/contato" className="text-link" style={{ alignSelf: 'flex-start' }}>Agendar</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="proc-more">
          <Link href="/procedimentos" className="button-outline">Ver todos os procedimentos</Link>
        </div>
      </section>
      
      <section className="container section-pad section-border-top">
        <div className="about-grid">
          <div className="about-content animate-reveal">
            <span className="eyebrow">Sobre a Aurora</span>
            <h2>Beleza começa <i>com cuidado.</i></h2>
            <p>Na Clínica Aurora, acreditamos que cada tratamento deve respeitar a individualidade de quem está diante de nós. Unimos conhecimento, tecnologia e atendimento próximo para criar experiências personalizadas e resultados naturais.</p>
            <Link href="/sobre" className="button-outline">Conheça a Aurora</Link>
          </div>
          <div className="about-img animate-reveal d-1">
            <img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1000&q=85" alt="Ambiente claro e acolhedor da Clínica Aurora" loading="lazy" />
          </div>
        </div>
      </section>
      
      <section className="container section-pad section-border-top">
        <div className="res-grid">
          <div className="res-content animate-reveal">
            <span className="eyebrow">Olhares possíveis</span>
            <h2>Uma estética que <i>parece com você.</i></h2>
            <p className="res-desc">Uma seleção visual demonstrativa da experiência que uma clínica real poderia apresentar.</p>
            <Link href="/resultados" className="text-link">Ver resultados</Link>
          </div>
          <div className="res-img-wrap-1 animate-reveal d-1">
            <img className="res-img-1" src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=700&q=85" alt="Retrato editorial demonstrativo" loading="lazy" />
          </div>
          <div className="res-img-wrap-2 animate-reveal d-2">
            <img className="res-img-2" src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=700&q=85" alt="Cuidado com a pele demonstrativo" loading="lazy" />
          </div>
        </div>
      </section>
      
      <section className="container section-pad section-border-top">
        <SectionHeading 
          eyebrow="Quem cuida" 
          title="Presença, técnica<br/><i>e escuta.</i>" 
          text="Profissionais fictícios apresentados apenas para demonstrar a estrutura deste projeto." 
        />
        <div className="team-list">
          {professionals.map((p, i) => (
            <div className={`team-person animate-reveal d-${(i % 3) + 1}`} key={p.name}>
              <div className="team-person-img">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div>
                <span className="eyebrow" style={{ marginBottom: '12px' }}>{p.role}</span>
                <h3>{p.name}</h3>
                <p>{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="container section-pad section-border-top">
        <div className="test-block animate-reveal">
          <span className="eyebrow">Experiência de atendimento</span>
          <blockquote>Atendimento personalizado, planejamento individualizado e acompanhamento próximo em cada etapa.</blockquote>
          <p style={{ textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em' }}>Demonstração de componente editorial · projeto conceitual</p>
        </div>
      </section>
      
      <section className="container section-pad">
        <div className="faq-wrap">
          <div className="faq-title animate-reveal">
            <span className="eyebrow">Dúvidas comuns</span>
            <h2>Antes de começar, <i>vamos conversar.</i></h2>
            <div className="faq-more">
              <Link href="/faq" className="button-outline">Ver todas as perguntas</Link>
            </div>
          </div>
          <div className="faq-acc animate-reveal d-1">
            <FAQ limit={3} />
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  )
}

function InnerPage({type}:{type:string}) { 
  const configs: Record<string, [string, string, string]> = {
    procedimentos: ['Procedimentos pensados','para você.','Conheça possibilidades de cuidado construídas a partir da escuta, da técnica e do respeito à sua individualidade.'],
    sobre: ['Uma pausa para','voltar a você.','A Clínica Aurora é uma marca fictícia criada para este projeto demonstrativo — um espaço imaginado para unir conhecimento, tecnologia e acolhimento.'],
    profissionais: ['Pessoas por trás','do cuidado.','Conheça os profissionais fictícios criados para demonstrar como uma equipe poderia ser apresentada.'],
    resultados: ['Resultados &','inspirações.','Cada pessoa possui características únicas. Os exemplos apresentados são exclusivamente ilustrativos e representam possibilidades de abordagem estética.'],
    faq: ['Tudo o que você','quer saber.','Respostas claras para tornar seu primeiro contato mais tranquilo.'],
    contato: ['Vamos começar uma','boa conversa.','Conte um pouco sobre o que você procura. A equipe Aurora está pronta para ouvir.'],
    '404': ['Página não','encontrada.','O conteúdo que você procura não está disponível ou foi movido.']
  }; 
  const fallback: [string, string, string] = configs['404'];
  const c = configs[type] || fallback; 
  const is404 = type === '404' || !configs[type];
  
  return (
    <main className="inner-page">
      <section className="container">
        <div className="inner-hero animate-reveal">
          <span className="eyebrow">Clínica Aurora · {is404 ? '404' : type}</span>
          <h1>{c[0]}<br/><i>{c[1]}</i></h1>
          <p>{c[2]}</p>
        </div>
      </section>
      
      {is404 && (
        <section className="container inner-pad-bottom">
          <Link href="/" className="button">Voltar ao início</Link>
        </section>
      )}

      {type === 'procedimentos' && (
        <section className="container inner-pad-bottom">
          <div className="proc-list">
            {procedures.map((item,i) => (
              <div key={item.title} className="proc-item animate-reveal">
                <div className="proc-img">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="proc-text">
                  <span className="eyebrow" style={{ marginBottom: 0 }}>0{i+1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div style={{ borderTop: '1px solid var(--border)', marginTop: '24px', paddingTop: '24px' }}>
                    <span className="eyebrow" style={{ color: 'var(--primary)', marginBottom: '12px' }}>Indicado para</span>
                    <p style={{ marginBottom: '16px' }}>{item.indication}</p>
                    <div className="proc-tags">
                      {item.benefits?.map((benefit:string) => <span key={benefit}>{benefit}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {type === 'profissionais' && (
        <section className="container inner-pad-bottom">
          <div className="team-detail-list">
            {professionals.map((p, i) => (
              <article key={p.name} className="team-detail-item animate-reveal">
                <img src={p.image} alt={p.name} className="team-detail-img" loading="lazy" />
                <div className="team-detail-info">
                  <span className="eyebrow">{p.role}</span>
                  <h2>{p.name}</h2>
                  <p>{p.bio}</p>
                  <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>Perfil fictício demonstrativo</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      
      {type === 'resultados' && (
        <section className="container inner-pad-bottom">
          <div className="results-disclaimer animate-reveal">
            Conteúdo demonstrativo para projeto de portfólio · não representa resultados reais de pacientes.
          </div>
          <div className="results-page-list">
            {['https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85',
              'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=85',
              'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=1000&q=85'].map((im,i) => (
              <div key={im} className={`results-page-item results-page-item-${i} animate-reveal d-${(i%3)+1}`}>
                <div className="results-page-img-wrap">
                  <img src={im} alt="Imagem demonstrativa de estética" className="results-page-img" loading="lazy" />
                </div>
                <span className="eyebrow" style={{ marginTop: '16px', marginBottom: '0' }}>{['Facial','Pele','Harmonização'][i]} · visual demonstrativo</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {type === 'faq' && (
        <section className="container inner-pad-bottom">
          <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <FAQ />
          </div>
        </section>
      )}
      
      {type === 'sobre' && (
        <section className="container inner-pad-bottom">
          <div className="story-section animate-reveal">
            <div className="story-content">
              <span className="eyebrow">Nossa filosofia</span>
              <h2 style={{ marginBottom: '24px' }}>A técnica pode ser precisa.<br/><i>O cuidado precisa ser humano.</i></h2>
              <p>Aurora é sobre presença. Sobre criar um espaço em que tecnologia e sensibilidade caminham juntas — e em que cada escolha nasce de uma conversa honesta.</p>
              <div className="story-points">
                <span><b>01.</b> Escuta antes de tudo</span>
                <span><b>02.</b> Naturalidade como direção</span>
                <span><b>03.</b> Conhecimento que acolhe</span>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85" alt="Ambiente claro e acolhedor" className="story-image animate-reveal d-1" loading="lazy" />
          </div>
        </section>
      )}
      
      {type === 'contato' && (
        <section className="container inner-pad-bottom">
          <div className="contact-section">
            <div className="contact-info animate-reveal">
              <span className="eyebrow">Fale com a Aurora</span>
              <h2>O próximo passo<br/><i>pode ser simples.</i></h2>
              <a className="button" href={wa} target="_blank" rel="noreferrer" style={{ marginTop: '20px' }}>Conversar pelo WhatsApp</a>
              
              <div className="contact-details">
                <p>Contato demonstrativo<br/>(00) 00000-0000<br/>Seg–Sex, 9h às 18h</p>
                <span className="eyebrow" style={{ marginTop: '8px', marginBottom: 0 }}>Localização demonstrativa · Rua das Acácias, 000</span>
              </div>
            </div>
            
            <form className="contact-form animate-reveal d-1" onSubmit={e=>e.preventDefault()}>
              <label>Seu nome<input placeholder="Como podemos chamar você?"/></label>
              <label>Seu contato<input placeholder="WhatsApp ou e-mail"/></label>
              <label>Como podemos ajudar? <textarea placeholder="Conte um pouco sobre o que procura..."/></label>
              <button className="button-outline" type="submit" style={{ alignSelf: 'flex-start' }}>Enviar mensagem</button>
            </form>
          </div>
        </section>
      )}
      
      <CTA />
    </main>
  )
}

export default function AuroraSite() { 
  const path = usePathname()
  const type = path === '/' ? 'home' : path.slice(1)
  
  return (
    <>
      <Header />
      {type === 'home' ? <Home /> : <InnerPage type={type} />}
      <Footer />
      <WhatsApp />
    </>
  )
}

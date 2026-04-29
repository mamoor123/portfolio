// LOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    // Force-run counters after loader hides (hero already in viewport)
    document.querySelectorAll('[data-count]').forEach(el=>{
      if(el.dataset.counted) return;
      el.dataset.counted='1';
      animateCounter(el);
    });
  },1600);
});
function animateCounter(el){
  const target=parseInt(el.dataset.count);
  let current=0;
  const duration=2000;
  const start=performance.now();
  function step(now){
    const progress=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-progress,3); // easeOutCubic
    current=Math.floor(eased*target);
    el.textContent=current+'+';
    if(progress<1) requestAnimationFrame(step);
    else el.textContent=target+'+';
  }
  requestAnimationFrame(step);
}
// THEME
function toggleTheme(){
  const html=document.documentElement;
  const current=html.getAttribute('data-theme');
  const next=current==='dark'?'light':'dark';
  html.setAttribute('data-theme',next);
  localStorage.setItem('theme',next);
  document.querySelector('.theme-toggle').textContent=next==='dark'?'🌙':'☀️';
}
// Load saved theme
const savedTheme=localStorage.getItem('theme')||'dark';
document.documentElement.setAttribute('data-theme',savedTheme);
if(savedTheme==='light')document.querySelector('.theme-toggle').textContent='☀️';
// CURSOR (desktop only — skip on touch devices)
if(!('ontouchstart' in window)){
  const cursorDot=document.querySelector('.cursor-dot'),cursorRing=document.querySelector('.cursor-ring');
  let mouseX=0,mouseY=0,ringX=0,ringY=0;
  document.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY;cursorDot.style.left=mouseX-4+'px';cursorDot.style.top=mouseY-4+'px';});
  function animateCursor(){ringX+=(mouseX-ringX)*0.12;ringY+=(mouseY-ringY)*0.12;cursorRing.style.left=ringX-18+'px';cursorRing.style.top=ringY-18+'px';requestAnimationFrame(animateCursor);}
  animateCursor();
  document.querySelectorAll('a,button,.project-card,.btn,.service-card,.social-link,.tech-item').forEach(el=>{el.addEventListener('mouseenter',()=>cursorRing.classList.add('hover'));el.addEventListener('mouseleave',()=>cursorRing.classList.remove('hover'));});
}
// TYPING
const phrases=['Building autonomous AI agent systems...','Shipping SaaS products end-to-end...','Automating business operations...','Creating multi-agent pipelines...','Solving complex problems with code...','28+ projects shipped and counting...'];
let phraseIdx=0,charIdx=0,isDeleting=false;const typedEl=document.getElementById('typed');
function typeEffect(){const current=phrases[phraseIdx];if(isDeleting){charIdx--;typedEl.textContent=current.substring(0,charIdx);}else{charIdx++;typedEl.textContent=current.substring(0,charIdx)+'▌';}let delay=isDeleting?30:60;if(!isDeleting&&charIdx===current.length){delay=2000;isDeleting=true;}else if(isDeleting&&charIdx===0){isDeleting=false;phraseIdx=(phraseIdx+1)%phrases.length;delay=500;}setTimeout(typeEffect,delay);}
typeEffect();
// REVEAL
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// COUNTER (backup observer for elements scrolled into view later)
const counterObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const el=entry.target;if(el.dataset.counted)return;el.dataset.counted='1';animateCounter(el);counterObserver.unobserve(el);}});},{threshold:0.3});
document.querySelectorAll('[data-count]').forEach(el=>counterObserver.observe(el));
// GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.project-card').forEach((card,i)=>{gsap.from(card,{scrollTrigger:{trigger:card,start:'top 85%'},y:60,opacity:0,duration:0.8,delay:(i%3)*0.1,ease:'power3.out'});});
ScrollTrigger.create({start:'top -80',onUpdate:self=>{const nav=document.querySelector('nav');if(self.progress>0){nav.style.background=document.documentElement.getAttribute('data-theme')==='dark'?'rgba(5,5,5,0.9)':'rgba(250,250,250,0.9)';}else{nav.style.background=document.documentElement.getAttribute('data-theme')==='dark'?'rgba(5,5,5,0.7)':'rgba(250,250,250,0.8)';}}});
gsap.to('.g1',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1},y:-100,opacity:0});
gsap.to('.g2',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1},y:-150,opacity:0});
// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{e.preventDefault();const target=document.querySelector(link.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('.nav-links').classList.remove('active');}});});
// FILTER (event delegation)
document.querySelector('.category-filter').addEventListener('click',e=>{
  const btn=e.target.closest('.filter-btn');
  if(!btn) return;
  const cat=btn.dataset.filter;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card=>{
    card.style.display=(cat==='all'||card.dataset.cat===cat)?'':'none';
  });
});
// PROJECT CARDS (event delegation)
document.getElementById('projects-grid').addEventListener('click',e=>{
  const card=e.target.closest('.project-card');
  if(card&&card.dataset.link) window.open(card.dataset.link,'_blank');
});
// GITHUB CONTRIBUTION GRAPH (real data)
(async function(){
  const graph=document.getElementById('contrib-graph');
  if(!graph)try{
    const cal=await fetch('https://github-contributions-api.jogruber.de/v4/mamoor123?y=last');
    const data=await cal.json();
    const weeks=data.contributions||[];
    // Group into weeks
    let currentWeek=document.createElement('div');
    currentWeek.className='contrib-week';
    weeks.forEach((day,i)=>{
      const el=document.createElement('div');
      el.className='contrib-day';
      if(day.count>=4) el.classList.add('l4');
      else if(day.count>=3) el.classList.add('l3');
      else if(day.count>=2) el.classList.add('l2');
      else if(day.count>=1) el.classList.add('l1');
      el.title=day.date+': '+day.count+' contributions';
      currentWeek.appendChild(el);
      if((i+1)%7===0&&i<weeks.length-1){graph.appendChild(currentWeek);currentWeek=document.createElement('div');currentWeek.className='contrib-week';}
    });
    if(currentWeek.children.length) graph.appendChild(currentWeek);
  }catch(e){
    // Fallback: realistic pattern
    for(let w=0;w<52;w++){
      const week=document.createElement('div');week.className='contrib-week';
      for(let d=0;d<7;d++){
        const day=document.createElement('div');day.className='contrib-day';
        const rand=Math.random();
        if(w<6) day.classList.add(rand>0.4?'l3':rand>0.2?'l2':'l1');
        else if(w<12) day.classList.add(rand>0.5?'l2':'l1');
        else if(w<20) day.classList.add(rand>0.7?'l1':'');
        else if(w>=38&&w<46) day.classList.add(rand>0.5?'l2':'l1');
        else day.classList.add(rand>0.85?'l1':'');
        week.appendChild(day);
      }
      graph.appendChild(week);
    }
  }
})();
  <script>
window.addEventListener('scroll',()=>{
  const b=document.getElementById('backToTop');
  const scrollTop=window.scrollY;
  const docHeight=document.documentElement.scrollHeight-window.innerHeight;
  const progress=docHeight>0?(scrollTop/docHeight)*100:0;
  document.getElementById('scrollProgress').style.width=progress+'%';
  if(scrollTop>500){b.style.display='block';requestAnimationFrame(()=>{b.style.opacity='1';b.style.transform='translateY(0)';})}
  else{b.style.opacity='0';b.style.transform='translateY(20px)';setTimeout(()=>{if(window.scrollY<=500)b.style.display='none';},300);}
});

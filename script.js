const m=document.querySelector('#menu'),n=document.querySelector('nav');m.onclick=()=>n.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>n.classList.remove('open'));const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('on')),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>o.observe(x));document.querySelector('#year').textContent=new Date().getFullYear();const WHATSAPP='5500000000000';function zap(e){e.preventDefault();if(WHATSAPP==='5500000000000'){alert('Configure o WhatsApp em script.js.');return}const a=document.querySelector('#nome').value,b=document.querySelector('#empresa').value,c=document.querySelector('#msg').value,t=encodeURIComponent(`Olá, Tavurá! Meu nome é ${a}${b?', da '+b:''}.\n\n${c}`);window.open(`https://wa.me/${WHATSAPP}?text=${t}`,'_blank')}
// Terminal manifesto Tavurá
const terminal=document.querySelector('.terminal'),terminalOut=document.querySelector('#terminalText'),terminalButton=document.querySelector('.terminalBtn');
let terminalTyped=false;
const terminalLines=['> temos uma ideia.','> talvez seja estranha.','> talvez ninguém tenha feito ainda.','', '> perfeito.','', '> vamos construir? _'];
async function typeTerminal(){
 if(terminalTyped)return; terminalTyped=true;
 for(const line of terminalLines){
  for(const char of line){terminalOut.textContent+=char;await new Promise(r=>setTimeout(r,38))}
  terminalOut.textContent+='\n';
  await new Promise(r=>setTimeout(r,line?500:250));
 }
 terminalButton.style.display='inline-block';
}
new IntersectionObserver(entries=>{if(entries[0].isIntersecting)typeTerminal()},{threshold:.35}).observe(terminal);

// Movimento quase imperceptível no hero — apenas desktop
if(matchMedia('(pointer:fine)').matches){
 const hero=document.querySelector('.hero');
 hero.addEventListener('mousemove',e=>{
  const x=(e.clientX/innerWidth-.5)*4,y=(e.clientY/innerHeight-.5)*4;
  hero.style.backgroundPosition=`calc(50% + ${x}px) calc(50% + ${y}px)`;
 });
 hero.addEventListener('mouseleave',()=>hero.style.backgroundPosition='center');
}

(function(){
  var h=document.getElementById('header');
  function sc(){h.classList.toggle('scrolled',window.scrollY>60)}
  sc();window.addEventListener('scroll',sc,{passive:true});

  var btn=document.getElementById('menuBtn'),menu=document.getElementById('menu');
  function tg(o){btn.setAttribute('aria-expanded',o);menu.classList.toggle('open',o);menu.setAttribute('aria-hidden',!o);document.body.classList.toggle('menu-open',o);document.body.style.overflow=o?'hidden':''}
  btn.addEventListener('click',function(){tg(btn.getAttribute('aria-expanded')!=='true')});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){tg(false)})});

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});els.forEach(function(e){io.observe(e)})}
  else els.forEach(function(e){e.classList.add('in')});

  // services accordion
  var items=document.querySelectorAll('#svc li'),img=document.getElementById('svcImg');
  items.forEach(function(li){li.querySelector('button').addEventListener('click',function(){
    items.forEach(function(x){x.classList.remove('open')});li.classList.add('open');
    img.style.opacity=0;setTimeout(function(){img.src=li.dataset.img;img.alt=li.dataset.alt;img.style.opacity=1},200)})});

  // faq
  document.querySelectorAll('#faqList .q').forEach(function(q){q.querySelector('button').addEventListener('click',function(){
    var o=q.classList.contains('open');document.querySelectorAll('#faqList .q').forEach(function(x){x.classList.remove('open')});if(!o)q.classList.add('open')})});

  // testimonials
  var tr=document.getElementById('ttrack'),cards=tr.children,i=0;
  function per(){return window.innerWidth<=620?1:window.innerWidth<=980?2:3}
  function go(n){var max=Math.max(0,cards.length-per());i=n>max?0:n<0?max:n;tr.style.transform='translateX(-'+(i*(cards[0].offsetWidth+24))+'px)'}
  document.getElementById('tnext').addEventListener('click',function(){go(i+1)});
  document.getElementById('tprev').addEventListener('click',function(){go(i-1)});
  window.addEventListener('resize',function(){go(0)});
})();

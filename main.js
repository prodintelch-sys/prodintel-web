const menuButton=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('.main-nav');
const productsMenu=document.querySelector('.products-menu');
const productsTrigger=document.querySelector('.products-trigger');

menuButton?.addEventListener('click',()=>{
  const open=mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});

productsTrigger?.addEventListener('click',event=>{
  event.stopPropagation();
  const open=productsMenu.classList.toggle('open');
  productsTrigger.setAttribute('aria-expanded',String(open));
});

document.addEventListener('click',event=>{
  if(!productsMenu?.contains(event.target)){
    productsMenu?.classList.remove('open');
    productsTrigger?.setAttribute('aria-expanded','false');
  }
});

mainNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  mainNav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver((entries,current)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');current.unobserve(entry.target)}
    });
  },{threshold:.08,rootMargin:'0px 0px -40px'});
  revealItems.forEach(item=>observer.observe(item));
}else{revealItems.forEach(item=>item.classList.add('visible'))}

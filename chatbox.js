const whatsappLauncher = document.querySelector('.whatsapp-float');

if (whatsappLauncher) {
  const whatsappUrl = new URL(whatsappLauncher.href);
  const panel = document.createElement('section');
  panel.className = 'chat-panel';
  panel.setAttribute('aria-label', 'Chat de contacto ProdIntel');
  panel.hidden = true;
  panel.innerHTML = `
    <header class="chat-head">
      <span class="chat-avatar"><svg aria-hidden="true"><use href="#i-message"></use></svg></span>
      <span><strong>ProdIntel</strong><small><i></i> Disponible por WhatsApp</small></span>
      <button class="chat-close" type="button" aria-label="Cerrar chat">×</button>
    </header>
    <div class="chat-body" aria-live="polite">
      <div class="chat-bubble bot">¡Hola! 👋 ¿Quieres conversar con nuestro equipo?</div>
      <button class="chat-hello" type="button">Hola, quiero información</button>
      <div class="chat-bubble user" hidden>Hola, quiero información</div>
      <div class="chat-bubble bot chat-answer" hidden>¡Hola! Te contactaremos a través de WhatsApp para conocer lo que necesitas.</div>
      <a class="chat-whatsapp" target="_blank" rel="noopener noreferrer" hidden>Continuar en WhatsApp <span>→</span></a>
    </div>`;

  whatsappLauncher.insertAdjacentElement('beforebegin', panel);
  const closeButton = panel.querySelector('.chat-close');
  const helloButton = panel.querySelector('.chat-hello');
  const userBubble = panel.querySelector('.chat-bubble.user');
  const answerBubble = panel.querySelector('.chat-answer');
  const whatsappButton = panel.querySelector('.chat-whatsapp');

  const closeChat = () => {
    panel.hidden = true;
    whatsappLauncher.setAttribute('aria-expanded', 'false');
  };

  whatsappLauncher.setAttribute('aria-expanded', 'false');
  whatsappLauncher.setAttribute('aria-controls', 'prodintel-chat');
  panel.id = 'prodintel-chat';

  whatsappLauncher.addEventListener('click', event => {
    event.preventDefault();
    panel.hidden = !panel.hidden;
    whatsappLauncher.setAttribute('aria-expanded', String(!panel.hidden));
  });

  closeButton.addEventListener('click', closeChat);

  helloButton.addEventListener('click', () => {
    helloButton.hidden = true;
    userBubble.hidden = false;
    window.setTimeout(() => {
      answerBubble.hidden = false;
      whatsappUrl.searchParams.set('text', 'Hola, quiero información sobre las soluciones de ProdIntel.');
      whatsappButton.href = whatsappUrl.toString();
      whatsappButton.hidden = false;
      whatsappButton.focus();
    }, 450);
  });

  document.addEventListener('click', event => {
    if (!panel.hidden && !panel.contains(event.target) && !whatsappLauncher.contains(event.target)) closeChat();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      closeChat();
      whatsappLauncher.focus();
    }
  });
}

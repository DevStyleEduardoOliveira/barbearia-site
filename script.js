// script.js — mantém exatamente as mesmas funcionalidades aprovadas

function openWhatsApp() {
  const serv   = document.getElementById('servico').value;
  const prof   = document.getElementById('profissional').value;
  const pref   = document.getElementById('preferencia').value || '';
  const obs    = document.getElementById('obs').value || '';

  // "Nome|Número"
  const [profName, profNumber] = prof.split('|');

  const text =
    'Olá ' + profName +
    ',%0AQuero%20agendar%20um%20serviço:%20' + encodeURIComponent(serv) +
    '%0APreferência:%20' + encodeURIComponent(pref) +
    '%0AObservações:%20' + encodeURIComponent(obs);

  const waUrl = `https://wa.me/${profNumber}?text=${text}`;
  window.open(waUrl, '_blank');

  return false;
}

// script.js — mesma lógica: monta mensagem e abre WhatsApp (melhorias leves)
document.addEventListener('DOMContentLoaded', function(){
  // Ensure images lazy loading attribute (helpful if uploads miss it)
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')){
        const target = document.querySelector(href);
        if (target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });
});

function openWhatsApp(){
  try {
    var serv = document.getElementById('servico').value || '';
    var prof = document.getElementById('profissional').value || '';
    var pref = document.getElementById('preferencia').value || '';
    var obs = document.getElementById('obs').value || '';

    var parts = prof.split('|');
    var profName = parts[0] || 'Equipe';
    var profNumber = (parts[1] || '').replace(/\D/g,'');

    if (!profNumber) {
      alert('Número do profissional não encontrado. Selecione outro profissional.');
      return false;
    }

    var message = [
      'Olá ' + profName + ',',
      'Preciso de um agendamento para: ' + serv,
      (pref ? ('Preferência: ' + pref) : ''),
      (obs ? ('Observações: ' + obs) : '')
    ].filter(Boolean).join('\n');

    var encoded = encodeURIComponent(message);
    var waUrl = 'https://wa.me/' + profNumber + '?text=' + encoded;
    window.open(waUrl,'_blank');
    return false;
  } catch(err) {
    console.error(err);
    alert('Erro ao tentar abrir o WhatsApp. Tente novamente.');
    return false;
  }
}

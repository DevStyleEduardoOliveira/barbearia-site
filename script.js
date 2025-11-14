
// script.js - monta a mensagem e abre o WhatsApp with selection of service and professional
function openWhatsApp(){
  var serv = document.getElementById('servico').value;
  var prof = document.getElementById('profissional').value;
  var pref = document.getElementById('preferencia').value || '';
  var obs = document.getElementById('obs').value || '';
  // profissional value is "Name|number"
  var parts = prof.split('|');
  var profName = parts[0];
  var profNumber = parts[1];
  var text = 'Olá ' + profName + ',%0APreciso%20de%20um%20agendamento%20para%20' + encodeURIComponent(serv) +
             '%0APreferência:%20' + encodeURIComponent(pref) +
             '%0AObservações:%20' + encodeURIComponent(obs);
  var waUrl = 'https://wa.me/' + profNumber + '?text=' + text;
  window.open(waUrl,'_blank');
  return false;
}

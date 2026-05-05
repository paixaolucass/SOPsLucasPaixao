const fs = require('fs');

var bg = '#0a0a0a', atmos = '#5ab4c8', sahara = '#c8a45a', kobold = '#3a5fa0';
var n200 = '#d4d4d4', n500 = '#737373', n900 = '#171717', border = '#2a2a2a';

function node(x, y, w, h, text, type) {
  var rx = (type === 'trigger' || type === 'end') ? 22 : 8;
  var fill = type === 'trigger' ? 'rgba(90,180,200,0.15)' : type === 'end' ? 'rgba(58,95,160,0.2)' : type === 'decision' ? 'rgba(200,164,90,0.12)' : n900;
  var stroke = type === 'trigger' ? atmos : type === 'end' ? kobold : type === 'decision' ? sahara : border;
  var color = type === 'trigger' ? atmos : type === 'end' ? n200 : type === 'decision' ? sahara : n200;
  var lines = text.split('\n'); var lineH = 16; var totalH = lines.length * lineH;
  var out = '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rx+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="1"/>';
  lines.forEach(function(l, i) {
    out += '<text x="'+(x+w/2)+'" y="'+(y+(h-totalH)/2+lineH*(i+1)-3)+'" text-anchor="middle" font-size="11" fill="'+color+'" font-family="Inter,sans-serif">'+l+'</text>';
  });
  return out;
}

function arrow(x1, y1, x2, y2) {
  return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+n500+'" stroke-width="1.5" marker-end="url(#arr)"/>';
}

function label(x, y, t) {
  return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-size="9" fill="'+atmos+'" font-family="Inter,sans-serif" font-weight="700" letter-spacing="1">'+t.toUpperCase()+'</text>';
}

function sectionTitle(x, y, t) {
  return '<text x="'+x+'" y="'+y+'" font-size="10" fill="'+atmos+'" font-family="Inter,sans-serif" font-weight="700" letter-spacing="1.5">'+t.toUpperCase()+'</text>' +
    '<line x1="'+x+'" y1="'+(y+6)+'" x2="'+(x+1100)+'" y2="'+(y+6)+'" stroke="'+border+'" stroke-width="1"/>';
}

var s = '';

// Overview
s += sectionTitle(50, 60, 'Visao Geral');
s += node(450, 80, 260, 40, 'Nova tarefa', 'trigger'); s += arrow(580, 120, 580, 160);
s += node(410, 160, 340, 40, 'Qual e o tipo de tarefa?', 'decision');
var sops = [['SOP55','Vanguarda',80],['SOP56','Criativos',280],['SOP57','Prompts',480],['SOP58','Visual IA',680],['SOP59','Guias',880]];
sops.forEach(function(sp) { s += arrow(sp[2]+90, 200, sp[2]+90, 240); s += node(sp[2], 240, 180, 50, sp[0]+'\n'+sp[1], ''); });

// SOP55
var y = 340;
s += sectionTitle(50, y, 'SOP55 - Encontros da Vanguarda'); y += 30;
var steps55 = [
  ['Encontro realizado','trigger'],
  ['Fase 01: Aguardar Zoom (1h a 3h)',''],
  ['Fase 02: Cortar CapCut + IA (~1h)',''],
  ['Fase 03: RI + Mapa Mental (~20min)',''],
  ['Fase 04: Upload plataforma Vanguarda (~10min)','']
];
steps55.forEach(function(st) { s += node(430, y, 300, 38, st[0], st[1]); y += 38; s += arrow(580, y, 580, y+10); y += 10; });
s += node(300, y, 240, 38, 'Fase 05: HandBrake', ''); s += node(620, y, 240, 38, 'Fase 06: Thumbnail', '');
s += arrow(430, y+19, 620, y+19); var py = y; y += 58;
s += arrow(420, py+38, 580, y); s += arrow(740, py+38, 580, y);
s += node(430, y, 300, 38, 'Fase 07: Upload Vimeo (~20min)', ''); y += 38; s += arrow(580, y, 580, y+10); y += 10;
s += node(430, y, 300, 38, 'Fase 08: Publicar + avisar WhatsApp', ''); y += 38; s += arrow(580, y, 580, y+10); y += 10;
s += node(430, y, 300, 38, 'Concluido - ClickUp', 'end'); y += 60;

// SOP56
s += sectionTitle(50, y, 'SOP56 - Criativos'); y += 30;
s += node(430, y, 300, 38, 'Demanda de criativo', 'trigger'); y += 38; s += arrow(580, y, 580, y+10); y += 10;
s += node(410, y, 340, 38, 'Qual tipo de peca?', 'decision'); y += 38; s += arrow(580, y, 580, y+10); y += 10;
var bx56 = [[80,'Tipo A','Carrosel\nFigma+Claude+MJ'],[430,'Tipo B','Reel\nCapCut'],[780,'Tipo C','Material Digital\nClaude+Vercel']];
bx56.forEach(function(b) { s += label(b[0]+90, y+5, b[1]); s += node(b[0], y+15, 180, 48, b[2], ''); });
y += 83; s += arrow(170, y, 580, y+20); s += arrow(520, y, 580, y+20); s += arrow(870, y, 580, y+20); y += 30;
s += node(430, y, 300, 38, 'Drive + ClickUp', 'end'); y += 60;

// SOP57
s += sectionTitle(50, y, 'SOP57 - Prompts de IA'); y += 30;
var steps57 = [
  ['Tarefa sem prompt ou queda de qualidade','trigger'],
  ['Definir funcao, input e output',''],
  ['Estruturar prompt (papel, fidelidade, proibicoes, tom)',''],
  ['Testar com 2 casos reais','']
];
steps57.forEach(function(st) { s += node(390, y, 360, 38, st[0], st[1]); y += 38; s += arrow(570, y, 570, y+10); y += 10; });
s += node(390, y, 360, 38, 'Output consistente?', 'decision'); y += 38; s += arrow(570, y, 570, y+10); y += 10;
s += node(300, y, 200, 38, 'Ajustar e retestar', ''); s += node(560, y, 200, 38, 'Salvar PC + Drive', ''); y += 48;
s += node(390, y, 360, 38, 'Pronto para uso', 'end'); y += 60;

// SOP58
s += sectionTitle(50, y, 'SOP58 - Visual com IA'); y += 30;
s += node(430, y, 300, 38, 'Demanda de visual', 'trigger'); y += 38; s += arrow(580, y, 580, y+10); y += 10;
s += node(410, y, 340, 38, 'Qual tipo de visual?', 'decision'); y += 38; s += arrow(580, y, 580, y+10); y += 10;
var bx58 = [[80,'Tipo A','Motion\nHiggsfield'],[430,'Tipo B','Imagem\nMidjourney'],[780,'Tipo C','Reel IA\nHiggsfield']];
bx58.forEach(function(b) { s += label(b[0]+90, y+5, b[1]); s += node(b[0], y+15, 180, 48, b[2], ''); });
y += 83; s += arrow(170, y, 580, y+20); s += arrow(520, y, 580, y+20); s += arrow(870, y, 580, y+20); y += 30;
s += node(430, y, 300, 38, 'Drive + ClickUp', 'end'); y += 60;

// SOP59
s += sectionTitle(50, y, 'SOP59 - Guias e Ferramentas'); y += 30;
s += node(430, y, 300, 38, 'Demanda de guia ou ferramenta', 'trigger'); y += 38; s += arrow(580, y, 580, y+10); y += 10;
s += node(390, y, 360, 38, 'Qual tipo de material?', 'decision'); y += 38; s += arrow(580, y, 580, y+10); y += 10;
s += label(230, y+5, 'Tipo A'); s += node(130, y+15, 240, 48, 'Guia Interativo\nHTML + Vercel', '');
s += label(730, y+5, 'Tipo B'); s += node(630, y+15, 240, 48, 'Ferramenta Funcional\nClaude Code + Vercel', '');
y += 83; s += arrow(250, y, 580, y+20); s += arrow(750, y, 580, y+20); y += 30;
s += node(430, y, 300, 38, 'Link entregue + ClickUp', 'end'); y += 60;

var total = y + 40;
var svg = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<svg width="1160" height="'+total+'" viewBox="0 0 1160 '+total+'" xmlns="http://www.w3.org/2000/svg">' +
  '<defs>' +
    '<marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">' +
      '<path d="M0,0 L0,6 L8,3 z" fill="'+n500+'"/>' +
    '</marker>' +
  '</defs>' +
  '<rect width="1160" height="'+total+'" fill="'+bg+'"/>' +
  s +
  '</svg>';

fs.writeFileSync('SOPs_Overlens_Fluxograma_Completo.svg', svg, 'utf8');
console.log('SVG gerado: SOPs_Overlens_Fluxograma_Completo.svg (' + Math.round(svg.length/1024) + 'KB, altura=' + total + 'px)');

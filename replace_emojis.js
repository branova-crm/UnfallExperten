const fs = require('fs');
const path = require('path');

const svgPhone = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>`;
const svgPhoneWhite = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" style={{ marginRight: '6px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>`;
const svgWA = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.005a9.868 9.868 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.17 12.06c0-5.456 4.436-9.893 9.9-9.893a9.827 9.827 0 0 1 7.001 2.902 9.828 9.828 0 0 1 2.893 7.003c-.004 5.456-4.44 9.893-9.913 9.893zM20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.463 0 .104 5.334.101 11.893a11.793 11.793 0 0 0 1.587 5.946L0 24l6.335-1.652A11.882 11.882 0 0 0 12.05 24c6.584 0 11.94-5.335 11.943-11.893a11.808 11.808 0 0 0-3.473-8.658z" /></svg>`;
const svgPin = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
const svgCheck = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const svgClock = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
const svgMoney = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;

const svgCamera = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
const svgDoc = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
const svgMobile = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem auto' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        filesList.push(filePath);
      }
    }
  }
  return filesList;
}

const targetDirs = [
  path.join(__dirname, 'src', 'app', '(site)'),
  path.join(__dirname, 'src', 'components'),
];

let files = [];
targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) files = getFiles(dir, files);
});

let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const orgContent = content;
  
  // Specific replacements
  content = content.replace(/📞 Jetzt anrufen/g, `${svgPhone} Jetzt anrufen`);
  content = content.replace(/📞 Jetzt kostenlos anrufen/g, `${svgPhone} Jetzt kostenlos anrufen`);
  content = content.replace(/📞 Jetzt kostenlos anfragen/g, `${svgPhone} Jetzt kostenlos anfragen`);
  content = content.replace(/📞 Jetzt anrufen – kostenlos/g, `${svgPhone} Jetzt anrufen – kostenlos`);
  content = content.replace(/📞/g, svgPhone); // fallback
  
  content = content.replace(/💬 WhatsApp starten/g, `${svgWA} WhatsApp starten`);
  content = content.replace(/💬 WhatsApp schreiben/g, `${svgWA} WhatsApp schreiben`);
  content = content.replace(/💬 WhatsApp – Schnelle Rückmeldung!/g, `${svgWA} WhatsApp – Schnelle Rückmeldung!`);
  content = content.replace(/💬 WhatsApp/g, `${svgWA} WhatsApp`);
  content = content.replace(/💬/g, svgWA); // fallback

  content = content.replace(/<div className="pin">📍<\/div>/g, `<div className="pin">${svgPin}</div>`);
  content = content.replace(/<span className="icon">📍<\/span>/g, `<span className="icon">${svgPin}</span>`);
  content = content.replace(/📍/g, svgPin);

  content = content.replace(/✅/g, svgCheck);

  content = content.replace(/<span className="icon">🕐<\/span>/g, `<span className="icon">${svgClock}</span>`);
  content = content.replace(/🕐/g, svgClock);

  content = content.replace(/<span className="icon">💰<\/span>/g, `<span className="icon">${svgMoney}</span>`);
  content = content.replace(/💰/g, svgMoney);

  // For the large 3rem emojis used in process sections:
  content = content.replace(/<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸<\/div>/g, svgCamera);
  content = content.replace(/<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄<\/div>/g, svgDoc);
  content = content.replace(/<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱<\/div>/g, svgMobile);

  content = content.replace(/📸/g, svgCamera);
  content = content.replace(/📄/g, svgDoc);
  content = content.replace(/📱/g, svgMobile);

  // Also replace any Check emoji variations (though ✅ was handled above)
  
  if (content !== orgContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    updatedCount++;
  }
});

console.log('Update complete. Files changed:', updatedCount);

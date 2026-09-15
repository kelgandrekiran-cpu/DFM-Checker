/* V4.3 PowerPoint export loader. Loads PptxGenJS on demand; DFM analysis remains fully local. */
window.loadPptxGenJS=async function(){
  if(window.PptxGenJS)return window.PptxGenJS;
  const urls=['https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js','https://unpkg.com/pptxgenjs@3.12.0/dist/pptxgen.bundle.js'];
  let last;
  for(const src of urls){try{await new Promise((ok,fail)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>fail(new Error('Could not load '+src));document.head.appendChild(s)});if(window.PptxGenJS)return window.PptxGenJS}catch(e){last=e}}
  throw last||new Error('PowerPoint library unavailable. Internet/firewall may block the report library.');
};
// ===== Hỗ trợ loại câu hỏi "typing" trong bộ máy quiz sẵn có =====
function renderTypingQuestion(q,area){
  area.innerHTML=`
  <div class="glass rounded-2xl p-5 mb-4 slide-in">
    <div class="flex items-center gap-2 mb-3">
      <span class="tag" style="background:linear-gradient(90deg,${quizContext.color||'#457B9D'},#FFAFCC);color:#fff;font-size:11px;font-weight:700">Câu ${currentQ+1}/${quizList.length}</span>
      <span class="tag" style="background:rgba(255,159,28,.15);color:#ff9f1c">⌨️ Điền từ</span>
    </div>
    <p class="font-700 text-lg mb-3 text-dark2" style="line-height:1.6">${q.q}</p>
  </div>
  <div class="flex gap-2">
    <input id="pvTypingInput" autocomplete="off" placeholder="Gõ cụm động từ tiếng Anh..." class="flex-1 p-3 rounded-xl surface" style="border:1px solid rgba(0,0,0,.1);outline:none" onkeydown="if(event.key==='Enter'){event.preventDefault();event.stopPropagation();checkTypingAnswer();}">
    <button onclick="checkTypingAnswer()" class="btn-primary ripple-btn">Kiểm tra</button>
  </div>`;
  setTimeout(()=>{const el=document.getElementById('pvTypingInput');if(el)el.focus();},100);
}
function checkTypingAnswer(){
  if(answered)return;
  const input=document.getElementById('pvTypingInput');
  const val=(input?input.value:'').trim().toLowerCase();
  if(!val)return;
  answered=true;
  const q=quizList[currentQ];
  const accept=(q.accept||[q.answer.toLowerCase()]).map(a=>a.toLowerCase());
  const correct=accept.includes(val);
  if(input) input.disabled=true;
  if(correct){
    score++;bumpStreak(true);playDing();showConfetti();vibrate(40);
    showToast(`✅ Chính xác! "${q.answer}"`,'success');
  }else{
    bumpStreak(false);playBuzz();vibrate([30,50,30]);
    showToast(`❌ Sai! Đáp án đúng: "${q.answer}"`,'error');
  }
  totalAnswered++;if(correct)totalCorrect++;else mistakes.push(q);saveProgress();
  refreshScoreTag();
  showExplanation(q,correct);
  showNextBtn();
}



// ===== ÂM THANH & TIẾN TRÌNH (lưu lại giữa các lần mở file) =====
function loadSaved(){
  try{
    const raw = localStorage.getItem('grammarMasterProgress');
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){ return null; }
}
function saveProgress(){
  try{
    localStorage.setItem('grammarMasterProgress', JSON.stringify({
      totalCorrect, totalAnswered, bestStreak, soundOn, theme
    }));
  }catch(e){}
}
const _saved = loadSaved();
let soundOn = _saved?.soundOn ?? true;
let theme = _saved?.theme ?? 'light';
let streak=0, bestStreak = _saved?.bestStreak ?? 0;
let score=0, currentQ=0, answered=false;
let totalCorrect = _saved?.totalCorrect ?? 0;
let totalAnswered = _saved?.totalAnswered ?? 0;
let mistakes=[]; // câu trả lời sai trong lượt làm bài hiện tại, dùng để ôn lại
if(theme==='dark' && typeof document!=='undefined') document.documentElement.setAttribute('data-theme','dark');

function playDing(){
  if(!soundOn)return;
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sine';o.frequency.setValueAtTime(660,ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(880,ctx.currentTime+0.1);
    g.gain.setValueAtTime(0.3,ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.4);
    o.start();o.stop(ctx.currentTime+0.4);
  }catch(e){}
}
function playBuzz(){
  if(!soundOn)return;
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sawtooth';o.frequency.setValueAtTime(200,ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(100,ctx.currentTime+0.2);
    g.gain.setValueAtTime(0.3,ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);
    o.start();o.stop(ctx.currentTime+0.3);
  }catch(e){}
}

// ===== CONFETTI =====
function showConfetti(big=false){
  const c=document.createElement('div');c.className='confetti';document.body.appendChild(c);
  const count=big?80:25;
  const colors=['#FFAFCC','#457B9D','#A8DADC','#FFD700','#FF6B6B','#9b5de5'];
  for(let i=0;i<count;i++){
    const p=document.createElement('div');
    const size=4+Math.random()*8,dur=(1.2+Math.random()*1.8).toFixed(2),rot=Math.floor(Math.random()*720-360);
    const shape=Math.random()>0.5?'50%':'2px';
    p.style.cssText=`position:fixed;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${shape};left:${Math.random()*100}%;top:-10px;z-index:9999;--rot:${rot}deg;animation:confettiFall ${dur}s ease forwards`;
    c.appendChild(p);
  }
  if(!document.getElementById('ck')){const s=document.createElement('style');s.id='ck';s.textContent='@keyframes confettiFall{to{top:100%;opacity:0;transform:translateX(calc((var(--rot,180)/360)*60px)) rotate(var(--rot,180deg))}}';document.head.appendChild(s);}
  setTimeout(()=>c.remove(),3000);
}

// ===== TOAST =====
function showToast(msg,type='success'){
  document.querySelectorAll('.toast').forEach(t=>t.remove());
  const t=document.createElement('div');t.className='toast';
  t.style.background=type==='success'?'#2ecc71':(type==='error'?'#e74c3c':'var(--accent)');
  t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2500);
}


// ===== RENDER ROUTER =====
let currentScreen='home';
let currentTopic=null;
let quizContext={topicId:null,exIdx:null,isAll:false,randomize:false,title:'',color:'#457B9D'};

function render(){
  const app=document.getElementById('app');
  app.classList.remove('screen-enter');void app.offsetWidth;app.classList.add('screen-enter');
  if(currentScreen==='home') renderHome(app);
  else if(currentScreen==='topicMenu') renderTopicMenu(app);
  else if(currentScreen==='theory') renderTheoryRouter(app);
  else if(currentScreen==='vocab') renderVocabScreen(app);
  else if(currentScreen==='quiz') renderQuiz(app);
  else if(currentScreen==='result') renderResult(app);
  safeLucide();
}

function safeLucide(){try{if(window.lucide)lucide.createIcons();}catch(e){}}

function topBar(){
  return `<div class="fixed top-3 right-3 z-40 flex gap-2">
    <button class="icon-toggle" onclick="toggleSound()"><i data-lucide="${soundOn?'volume-2':'volume-x'}" style="width:18px;height:18px;color:var(--accent)"></i></button>
    <button class="icon-toggle" onclick="toggleTheme()"><i data-lucide="${theme==='light'?'moon':'sun'}" style="width:18px;height:18px;color:var(--accent)"></i></button>
  </div>`;
}
function toggleSound(){soundOn=!soundOn;saveProgress();render();}
function toggleTheme(){theme=theme==='light'?'dark':'light';document.documentElement.setAttribute('data-theme',theme);saveProgress();render();}

function openTopic(topicId){
  currentTopic=TOPICS.find(t=>t.id===topicId);
  currentScreen='topicMenu';render();
}
function backToTopicMenu(){currentScreen='topicMenu';render();}

// ===== HOME (chọn chuyên đề) =====
function renderHome(app){
  const pct=totalAnswered>0?Math.round(totalCorrect/totalAnswered*100):0;
  const badge = pct>=95?{cls:'badge-master',label:'👑 Master'}:pct>=80?{cls:'badge-gold',label:'🥇 Vàng'}:pct>=50?{cls:'badge-silver',label:'🥈 Bạc'}:pct>0?{cls:'badge-bronze',label:'🥉 Đồng'}:{cls:'badge-locked',label:'Chưa mở khoá'};
  app.innerHTML=`
  <div class="bgblob" style="width:340px;height:340px;background:var(--pink);top:-100px;left:-80px"></div>
  <div class="bgblob" style="width:300px;height:300px;background:var(--accent);bottom:-100px;right:-80px;animation-delay:3s"></div>
  ${topBar()}
  <div class="app-shell flex flex-col items-center justify-center min-h-full p-6 fade-in">
    <div class="text-center mb-6">
      <div class="text-6xl mb-3 home-emoji">🧠</div>
      <h1 class="text-2xl font-800 mb-1 text-dark2">TỔNG HỢP NGỮ PHÁP CÁC CHUYÊN ĐỀ</h1>
      <h2 class="text-sm font-700 mb-2" style="color:var(--accent)">🎮 Grammar Master — Premium Edition</h2>
      <p class="text-sm text-soft">${TOPICS.length} chuyên đề • Lý thuyết + Bài tập + Giải thích chi tiết</p>
    </div>
    ${streak>0?`<div class="streak-chip mb-4"><span class="streak-flame">🔥</span> Chuỗi: ${streak} ${bestStreak>streak?`<span style="opacity:.8;font-weight:500">(kỷ lục ${bestStreak})</span>`:''}</div>`:''}
    ${totalAnswered>0?`
    <div class="w-full max-w-md mb-5">
      <div class="flex justify-between text-xs font-600 mb-2 text-dark2"><span>Kết quả tổng</span><span>${totalCorrect}/${totalAnswered} (${pct}%)</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="flex justify-center mt-2"><span class="badge ${badge.cls}">${badge.label}</span></div>
    </div>`:''}
    <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      ${TOPICS.map(t=>{
        const totalQ = t.exercises.reduce((s,e)=>s+e.questions.length,0);
        return `<button onclick="openTopic('${t.id}')" class="w-full text-left p-4 rounded-2xl surface card-hover topic-card ripple-btn flex items-center gap-4" style="box-shadow:var(--shadow-soft);border-left:4px solid ${t.color}">
          <div class="text-3xl">${t.icon}</div>
          <div class="flex-1 min-w-0">
            <div class="font-800 text-dark2">${t.name}</div>
            <div class="text-xs text-soft" style="overflow-wrap:break-word">${t.subtitle} • ${totalQ} câu hỏi</div>
          </div>
          <i data-lucide="chevron-right" style="width:20px;height:20px;color:var(--accent);flex-shrink:0"></i>
        </button>`;
      }).join('')}
    </div>
    <p class="text-soft text-xs mt-6 text-center">Chọn một chuyên đề để xem lý thuyết và luyện tập</p>
  </div>`;
}

// ===== TOPIC MENU (menu con của mỗi chuyên đề) =====
function renderTopicMenu(app){
  const t=currentTopic;
  if(!t){currentScreen='home';render();return;}
  const totalQ = t.exercises.reduce((s,e)=>s+e.questions.length,0);
  app.innerHTML=`
  ${topBar()}
  <div class="app-shell min-h-full fade-in" style="max-width:980px;margin:0 auto;padding:1rem">
    <div class="flex items-center gap-3 mb-4">
      <button onclick="currentScreen='home';render()" class="p-2 rounded-lg surface ripple-btn" style="box-shadow:var(--shadow-soft)"><i data-lucide="arrow-left" style="width:20px;height:20px;color:var(--dark)"></i></button>
      <div>
        <h2 class="text-xl font-800 text-dark2">${t.icon} ${t.name}</h2>
        <p class="text-xs text-soft">${t.subtitle} • ${totalQ} câu hỏi</p>
      </div>
    </div>

    <button onclick="currentScreen='theory';render()" class="w-full text-left p-4 rounded-2xl mb-3 ripple-btn card-hover" style="background:linear-gradient(90deg,${t.color},${t.color}cc);color:#fff;box-shadow:var(--shadow-mid)">
      <div class="flex items-center gap-3">
        <span class="text-2xl">📚</span>
        <div>
          <div class="font-800">${t.theoryLabel||'Ôn lý thuyết đầy đủ'}</div>
          <div class="text-xs opacity-90">Toàn bộ quy tắc và ví dụ song ngữ</div>
        </div>
      </div>
    </button>

    ${t.vocabHTML?`
    <button onclick="currentScreen='vocab';render()" class="w-full text-left p-4 rounded-2xl mb-3 ripple-btn card-hover" style="background:linear-gradient(90deg,${t.color}cc,${t.color}99);color:#fff;box-shadow:var(--shadow-mid)">
      <div class="flex items-center gap-3">
        <span class="text-2xl">📖</span>
        <div>
          <div class="font-800">${t.vocabLabel||'Danh sách từ vựng'}</div>
          <div class="text-xs opacity-90">Từ, phiên âm, phát âm 🔊, ví dụ song ngữ</div>
        </div>
      </div>
    </button>`:''}

    <div class="font-700 text-dark2 mb-2 mt-4">📋 Các bài tập luyện tập</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4" style="align-items:stretch">
      ${t.exercises.map((ex,i)=>`
      <div class="glass rounded-2xl p-4 card-hover flex flex-col">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="font-700 text-dark2">${ex.title}</div>
          <span class="tag" style="background:${t.color}22;color:${t.color};white-space:nowrap">${ex.questions.length} câu</span>
        </div>
        <p class="text-xs text-soft mb-3 flex-1" style="white-space:pre-line">${ex.instruction}</p>
        <div class="flex gap-2">
          <button onclick="startExercise('${t.id}',${i},false)" class="btn-primary flex-1 ripple-btn text-sm py-2">🎯 Làm bài</button>
          <button onclick="startExercise('${t.id}',${i},true)" class="btn-pink flex-1 ripple-btn text-sm py-2">🔀 Ngẫu nhiên</button>
        </div>
      </div>`).join('')}
    </div>

    ${t.exercises.length>1?`
    <button onclick="startAllTopic('${t.id}',true)" class="btn-green w-full ripple-btn flex items-center justify-center gap-2 text-lg">
      <span>🏆</span> Luyện tập tổng hợp — trộn tất cả ${totalQ} câu
    </button>`:''}
  </div>`;
}

// ===== THEORY =====
function renderTheory(app){
  app.innerHTML=`
  ${topBar()}
  <div class="app-shell min-h-full fade-in" style="max-width:720px;margin:0 auto;padding:1rem">
    <div class="flex items-center gap-3 mb-4">
      <button onclick="backToTopicMenu()" class="p-2 rounded-lg surface ripple-btn" style="box-shadow:var(--shadow-soft)"><i data-lucide="arrow-left" style="width:20px;height:20px;color:var(--dark)"></i></button>
      <h2 class="text-xl font-700 text-dark2">📚 Lý thuyết Cấu tạo Từ</h2>
    </div>

    <!-- NGUYÊN TẮC VÀNG -->
    <div class="glass rounded-2xl p-4 mb-4" style="border-left:4px solid var(--accent)">
      <div class="font-800 text-dark2 mb-2">🌟 NGUYÊN TẮC VÀNG — Cách xác định từ loại</div>
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div class="rounded-xl p-3" style="background:#e8f4f8"><b style="color:#0c5490">DANH TỪ (N)</b><br>Sau: the/a/an, my/your/his..., of, many, this/that</div>
        <div class="rounded-xl p-3" style="background:#d4edda"><b style="color:#155724">ĐỘNG TỪ (V)</b><br>Sau: will/would/can/must, to, have/has to</div>
        <div class="rounded-xl p-3" style="background:#fff3cd"><b style="color:#856404">TÍNH TỪ (Adj)</b><br>Sau: to be/look/seem/feel, rất (very), trước N</div>
        <div class="rounded-xl p-3" style="background:#f3e5f5"><b style="color:#6a1b9a">TRẠNG TỪ (Adv)</b><br>Sau V, trước Adj, đầu câu có dấu phẩy</div>
      </div>
    </div>

    <!-- DANH TỪ -->
    <details open class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span class="pos-pill-n">N</span> 1. Cách thành lập DANH TỪ
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left;border-radius:8px 0 0 0">Hậu tố</th><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left;border-radius:0 8px 0 0">Ví dụ</th></tr></thead>
          <tbody>
            ${[
              ['-ment','V + ment → N','develop→<b>development</b>, entertain→entertainment'],
              ['-ance/-ence','V + ance/ence → N','attend→<b>attendance</b>, depend→dependence'],
              ['-ion/-ation','V + ion/ation → N','invent→<b>invention</b>, inform→information'],
              ['-age','V + age → N (hoặc Adj)','carry→<b>carriage</b>, short→shortage'],
              ['-al','V + al → N','arrive→<b>arrival</b>, survive→survival'],
              ['-ing','V + ing → N','teach→<b>teaching</b>, train→training'],
              ['-er/-or','V + er/or → N (người)','work→<b>worker</b>, act→actor'],
              ['-ant/-ee','V + ant/ee → N (người)','assist→<b>assistant</b>, employ→employee'],
              ['-ness','Adj + ness → N','sad→<b>sadness</b>, lazy→laziness (y→i)'],
              ['-ity',  'Adj + ity → N','able→<b>ability</b>, national→nationality'],
              ['-cy','Adj + cy → N','proficient→<b>proficiency</b>'],
              ['-dom','Adj + dom → N','free→<b>freedom</b>'],
              ['-th','Adj + th → N','warm→<b>warmth</b>, wide→width'],
              ['-ship','N + ship → N','friend→<b>friendship</b>, member→membership'],
              ['-hood','N + hood → N','child→<b>childhood</b>'],
              ['-ism','N/Adj + ism → N','social→<b>socialism</b>, terror→terrorism'],
            ].map(([s,r,e],i)=>`<tr style="${i%2===0?'background:rgba(69,123,157,.04)':''}"><td style="padding:7px 8px"><span class="suffix-pill">${s}</span></td><td style="padding:7px 8px;color:var(--text-soft)">${r}</td><td style="padding:7px 8px">${e}</td></tr>`).join('')}
          </tbody>
        </table>
        <div class="mt-3 p-3 rounded-xl" style="background:#fff3cd;border-left:3px solid #ffc107;font-size:13px">
          ⚠️ <b>Chính tả đặc biệt:</b> y → i trước -ness: lazy→laz<b>i</b>ness | happy→happ<b>i</b>ness | beauty→beaut<b>i</b>ful
        </div>
      </div>
    </details>

    <!-- ĐỘNG TỪ -->
    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span class="pos-pill-v">V</span> 2. Cách thành lập ĐỘNG TỪ
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <tbody>
            ${[
              ['Adj + en → V','wide→<b>widen</b>, short→shorten, length→lengthen'],
              ['en + Adj → V','en+rich=<b>enrich</b>, en+large=enlarge, en+able=enable'],
              ['Adj + ise/ize → V','social→<b>socialize</b>, industrial→industrialize'],
              ['N + fy → V','beauty→<b>beautify</b>, simple→simplify'],
              ['N/Adj + ate → V','communicate, educate, create'],
            ].map(([r,e],i)=>`<tr style="${i%2===0?'background:rgba(69,123,157,.04)':''}"><td style="padding:7px 8px;color:var(--text-soft);font-weight:600">${r}</td><td style="padding:7px 8px">${e}</td></tr>`).join('')}
          </tbody>
        </table>
        <div class="mt-3 p-3 rounded-xl" style="background:#d4edda;border-left:3px solid #2ecc71;font-size:13px">
          ✅ Sau <b>will/can/must/have to/need to/should</b> → luôn dùng V nguyên thể: will <b>enrich</b> | have to <b>conserve</b> | need to <b>rotate</b>
        </div>
      </div>
    </details>

    <!-- TÍNH TỪ -->
    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span class="pos-pill-adj">Adj</span> 3. Cách thành lập TÍNH TỪ
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <tbody>
            ${[
              ['-ful','N+ful → Adj','care→<b>careful</b>, success→successful, help→helpful, beauty→beautiful'],
              ['-less','N+less → Adj','hope→<b>hopeless</b>, care→careless, home→homeless'],
              ['-ous','N+ous → Adj','danger→<b>dangerous</b>, poison→poisonous, fame→famous'],
              ['-al','N+al → Adj','nation→<b>national</b>, region→regional, industry→industrial'],
              ['-ic','N+ic → Adj','economy→<b>economic</b>, history→historic'],
              ['-able/-ible','N+able → Adj','reason→<b>reasonable</b>, comfort→comfortable'],
              ['-ive','V/N+ive → Adj','act→<b>active</b>, impress→impressive, expense→expensive'],
              ['-ish','N+ish → Adj','fool→<b>foolish</b>, self→selfish'],
              ['-y','N+y → Adj','rain→<b>rainy</b>, sun→sunny, wind→windy'],
              ['-ent/-ant','V+ent → Adj','depend→<b>dependent</b>'],
              ['-ed/-ing','Cảm xúc','disappoint→<b>disappointed</b> (người) / disappointing (nguyên nhân)'],
              ['un-/in-/dis-','Phủ định','un+happy=<b>unhappy</b>, un+reasonable=unreasonable'],
            ].map(([s,r,e],i)=>`<tr style="${i%2===0?'background:rgba(69,123,157,.04)':''}"><td style="padding:7px 8px"><span class="suffix-pill">${s}</span></td><td style="padding:7px 8px;color:var(--text-soft)">${r}</td><td style="padding:7px 8px">${e}</td></tr>`).join('')}
          </tbody>
        </table>
        <div class="mt-3 p-3 rounded-xl" style="background:#f8d7da;border-left:3px solid #e74c3c;font-size:13px">
          ⚠️ <b>Phân biệt dễ nhầm:</b><br>
          • <b>industrial</b> (công nghiệp) ≠ <b>industrious</b> (chăm chỉ)<br>
          • <b>economic</b> (kinh tế học) ≠ <b>economical</b> (tiết kiệm)<br>
          • <b>-ed</b> (NGƯỜI cảm thấy) ≠ <b>-ing</b> (nguyên nhân gây ra cảm xúc)
        </div>
      </div>
    </details>

    <!-- TRẠNG TỪ -->
    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span class="pos-pill-adv">Adv</span> 4. Cách thành lập TRẠNG TỪ
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4">
        <div class="rule-row"><span class="suffix-pill">Adj + -ly</span><span class="text-dark2">→ Trạng từ: careful→<b>carefully</b>, quick→quickly, comfortable→comfortably</span></div>
        <div class="rule-row"><span class="suffix-pill">Đặc biệt</span><span class="text-dark2">fast→fast | hard→hard | late→late | good→<b>well</b></span></div>
        <div class="mt-3">
          <div class="font-700 text-dark2 mb-2">📍 Vị trí của TRẠNG TỪ:</div>
          <div class="space-y-2 text-sm">
            <div class="ex-card">1. <b>Sau động từ</b> (cách thức): He drives <b>carefully</b>.</div>
            <div class="ex-card">2. <b>Trước tính từ</b> (mức độ): She is <b>very</b> beautiful.</div>
            <div class="ex-card">3. <b>Giữa hai động từ</b>: He will <b>certainly</b> die.</div>
            <div class="ex-card">4. <b>Đầu câu + dấu phẩy</b>: <b>Traditionally,</b> women stayed home.</div>
          </div>
        </div>
      </div>
    </details>

    <!-- VỊ TRÍ TỪ -->
    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span style="background:linear-gradient(90deg,#457B9D,#FFAFCC);color:#fff;padding:2px 8px;border-radius:8px;font-size:12px">Rules</span> 5. Bảng tóm tắt TRẬT TỰ TỪ
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4">
        <div class="space-y-2 text-sm">
          ${[
            ['Sau to be (am/is/are/was)','→ TÍNH TỪ','The book is interesting.'],
            ['Sau động từ thường','→ TRẠNG TỪ','He runs quickly.'],
            ['Sau V tri giác (feel/look/seem/taste)','→ TÍNH TỪ','She looks happy.'],
            ['Sau mạo từ (a/an/the)','→ DANH TỪ','The development...'],
            ['Sau tính từ sở hữu (my/his/her...)','→ DANH TỪ','His invention...'],
            ['Sau giới từ (of/in/with...)','→ DANH TỪ','because of his laziness'],
            ['Sau many/some/any/much','→ DANH TỪ','many competitions'],
            ['Trước danh từ','→ TÍNH TỪ','poisonous snakes'],
            ['Trước tính từ','→ TRẠNG TỪ','very beautiful'],
            ['Sau will/can/must/have to','→ ĐỘNG TỪ nguyên thể','will enrich'],
            ['Sau make/keep/find + O','→ TÍNH TỪ','makes you beautiful'],
          ].map(([pos,type,ex])=>`
          <div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
            <span class="font-600 text-dark2" style="min-width:220px">${pos}</span>
            <span class="font-700" style="color:var(--accent);min-width:120px">${type}</span>
            <span class="text-soft italic">${ex}</span>
          </div>`).join('')}
        </div>
      </div>
    </details>

    <button onclick="backToTopicMenu()" class="btn-primary w-full mt-4 ripple-btn">🎯 Vào làm bài tập ngay!</button>
  </div>`;
}

// ===== THEORY ROUTER (chọn theory tĩnh của wordform hoặc theory generic của chuyên đề khác) =====
function renderTheoryRouter(app){
  if(!currentTopic || !currentTopic.theoryHTML){
    renderTheory(app);
    return;
  }
  renderGenericTheory(app);
}

function renderGenericTheory(app){
  const t=currentTopic;
  app.innerHTML=`
  ${topBar()}
  <div class="app-shell min-h-full fade-in" style="max-width:720px;margin:0 auto;padding:1rem">
    <div class="flex items-center gap-3 mb-4">
      <button onclick="backToTopicMenu()" class="p-2 rounded-lg surface ripple-btn" style="box-shadow:var(--shadow-soft)"><i data-lucide="arrow-left" style="width:20px;height:20px;color:var(--dark)"></i></button>
      <h2 class="text-xl font-700 text-dark2">${t.icon} Lý thuyết — ${t.name}</h2>
    </div>
    ${t.theoryHTML}
    <button onclick="backToTopicMenu()" class="btn-primary w-full mt-4 ripple-btn">🎯 Vào làm bài tập ngay!</button>
  </div>`;
  safeLucide();
}


function renderVocabScreen(app){
  const t=currentTopic;
  if(!t||!t.vocabHTML){backToTopicMenu();return;}
  app.innerHTML=`
  ${topBar()}
  <div class="app-shell min-h-full fade-in" style="max-width:720px;margin:0 auto;padding:1rem">
    <div class="flex items-center gap-3 mb-4">
      <button onclick="backToTopicMenu()" class="p-2 rounded-lg surface ripple-btn" style="box-shadow:var(--shadow-soft)"><i data-lucide="arrow-left" style="width:20px;height:20px;color:var(--dark)"></i></button>
      <h2 class="text-xl font-700 text-dark2">${t.icon} Từ vựng — ${t.name}</h2>
    </div>
    ${t.vocabHTML}
    <button onclick="backToTopicMenu()" class="btn-primary w-full mt-4 ripple-btn">🎯 Vào chơi trò chơi & làm bài tập!</button>
  </div>`;
  safeLucide();
}

// ===== QUIZ =====
let quizList=[];

function startExercise(topicId,exIdx,randomize){
  const topic=TOPICS.find(t=>t.id===topicId);
  if(!topic)return;
  const ex=topic.exercises[exIdx];
  quizList=randomize?shuffle([...ex.questions]):[...ex.questions];
  quizContext={topicId,exIdx,isAll:false,randomize,title:ex.title,color:topic.color};
  score=0;currentQ=0;answered=false;streak=0;mistakes=[];
  currentScreen='quiz';render();
}

function startAllTopic(topicId,randomize){
  const topic=TOPICS.find(t=>t.id===topicId);
  if(!topic)return;
  let all=[];
  topic.exercises.forEach(ex=>{all=all.concat(ex.questions);});
  quizList=randomize?shuffle(all):all;
  quizContext={topicId,exIdx:null,isAll:true,randomize,title:`🏆 Tổng hợp — ${topic.name}`,color:topic.color};
  score=0;currentQ=0;answered=false;streak=0;mistakes=[];
  currentScreen='quiz';render();
}

function restartQuiz(randomize){
  if(!quizContext.topicId)return;
  if(quizContext.isAll) startAllTopic(quizContext.topicId,randomize);
  else startExercise(quizContext.topicId,quizContext.exIdx,randomize);
}

function renderQuiz(app){
  if(currentQ>=quizList.length){currentScreen='result';render();return;}
  const q=quizList[currentQ];
  app.innerHTML=`
  ${topBar()}
  <div class="app-shell min-h-full p-4 fade-in" style="max-width:680px;margin:0 auto">
    <div class="flex items-center justify-between mb-3">
      <button onclick="backToTopicMenu()" class="p-2 rounded-lg surface ripple-btn" style="box-shadow:var(--shadow-soft)"><i data-lucide="arrow-left" style="width:20px;height:20px;color:var(--dark)"></i></button>
      <span class="font-700 text-sm text-dark2" style="max-width:60%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${quizContext.title||'Quiz'}</span>
      <span class="text-sm font-600 px-3 py-1 rounded-full surface text-dark2" style="box-shadow:var(--shadow-soft)">${currentQ+1}/${quizList.length}</span>
    </div>
    <div class="progress-bar mb-3"><div class="progress-fill" style="width:${(currentQ/quizList.length)*100}%"></div></div>
    <div class="flex items-center justify-center gap-3 mb-3">
      <span id="scoreTag" class="tag" style="background:var(--pink);color:var(--dark)">✅ ${score}/${currentQ}</span>
      ${streak>1?`<span class="streak-chip"><span class="streak-flame">🔥</span> ${streak}</span>`:''}
    </div>
    <div id="questionArea"></div>
    <div id="explanationArea" class="mt-4"></div>
    <div id="nextBtnArea" class="mt-4 text-center"></div>
    <p class="text-center text-xs text-soft mt-4">⌨️ Mẹo: bấm phím <b>1-4</b> hoặc <b>A-D</b> để chọn đáp án, <b>Enter</b> để sang câu tiếp theo</p>
  </div>`;
  safeLucide();
  renderQuestion(q);
}

function renderQuestion(q){
  const area=document.getElementById('questionArea');
  if(q.type==='error'){ renderErrorQuestion(q,area); return; }
  if(q.type==='typing'){ renderTypingQuestion(q,area); return; }
  const posClass = q.pos ? (q.pos.includes('Danh')?'n':q.pos.includes('Động')?'v':q.pos.includes('Tính')?'adj':'adv') : null;
  area.innerHTML=`
  <div class="glass rounded-2xl p-5 mb-4 slide-in">
    <div class="flex items-center gap-2 mb-3">
      <span class="tag" style="background:linear-gradient(90deg,${quizContext.color||'#457B9D'},#FFAFCC);color:#fff;font-size:11px;font-weight:700">Câu ${currentQ+1}/${quizList.length}</span>
      ${posClass?`<span class="pos-pill-${posClass}">${q.pos.split('(')[0].trim()}</span>`:`<span class="tag" style="background:rgba(69,123,157,.12);color:var(--accent)">🎯 Trắc nghiệm</span>`}
    </div>
    <p class="font-700 text-lg mb-2 text-dark2" style="line-height:1.6">${q.q}</p>
    ${q.vi?`<p class="text-sm mb-3" style="color:var(--accent);border-left:3px solid var(--accent);padding-left:8px">${q.vi}</p>`:''}
  </div>

  <div class="space-y-3" id="optionsArea">
    ${q.opts.map((o,i)=>`<button class="option-btn ripple-btn surface text-dark2" onclick="checkAnswer(${i})">${o}</button>`).join('')}
  </div>`;
}

function checkAnswer(chosen){
  if(answered)return;answered=true;
  const q=quizList[currentQ];
  const correct=chosen===q.ans;
  const btns=document.querySelectorAll('.option-btn');
  btns.forEach(b=>{b.style.pointerEvents='none';});
  const correctText=(q.opts[q.ans]||'').replace(/^[A-D]\.\s*/,'');
  if(correct){
    btns[chosen].classList.add('correct');
    score++;bumpStreak(true);playDing();showConfetti();vibrate(40);
    showToast(`✅ Chính xác! "${correctText}"`, 'success');
  }else{
    btns[chosen].classList.add('wrong');
    btns[q.ans].classList.add('correct');
    bumpStreak(false);playBuzz();vibrate([30,50,30]);
    showToast(`❌ Sai! Đáp án đúng: ${correctText}`,'error');
  }
  totalAnswered++;if(correct)totalCorrect++;else mistakes.push(q);saveProgress();
  refreshScoreTag();
  showExplanation(q,correct);
  showNextBtn();
}

function renderErrorQuestion(q,area){
  let sentenceHTML=q.template;
  ['A','B','C','D'].forEach(letter=>{
    const placeholder='{'+letter+'}';
    if(sentenceHTML.indexOf(placeholder)!==-1){
      const text=q.parts[letter]||'';
      let replacement=text;
      if(q.active_letters.includes(letter) && text){
        replacement=`<span class="error-choice" data-letter="${letter}" onclick="checkErrorAnswer('${letter}')"><sup class="error-tag">${letter}</sup>${text}</span>`;
      }
      sentenceHTML=sentenceHTML.split(placeholder).join(replacement);
    }
  });
  area.innerHTML=`
  <div class="glass rounded-2xl p-5 mb-4 slide-in">
    <div class="flex items-center gap-2 mb-3">
      <span class="tag" style="background:linear-gradient(90deg,${quizContext.color||'#9b5de5'},#5e3aa6);color:#fff;font-size:11px;font-weight:700">Câu ${currentQ+1}/${quizList.length}</span>
      <span class="tag" style="background:rgba(155,93,229,.15);color:#9b5de5">🔍 Tìm lỗi sai</span>
    </div>
    <p class="font-700 text-lg mb-2 text-dark2" style="line-height:2.4">${sentenceHTML}</p>
    <p class="text-sm mb-3" style="color:var(--accent);border-left:3px solid var(--accent);padding-left:8px">${q.vi}</p>
    <p class="text-xs text-soft mt-2">👆 Nhấn vào phần được đánh dấu chữ cái mà bạn cho là sai</p>
  </div>`;
}

function checkErrorAnswer(letter){
  if(answered)return;answered=true;
  const q=quizList[currentQ];
  const correctLetter=q.active_letters[q.ans];
  const correct=letter===correctLetter;
  document.querySelectorAll('.error-choice').forEach(s=>{s.style.pointerEvents='none';});
  const chosenSpan=document.querySelector(`.error-choice[data-letter="${letter}"]`);
  const correctSpan=document.querySelector(`.error-choice[data-letter="${correctLetter}"]`);
  if(correct){
    if(chosenSpan)chosenSpan.classList.add('correct');
    score++;bumpStreak(true);playDing();showConfetti();vibrate(40);
    showToast(`✅ Chính xác! Sửa thành: "${q.correction}"`,'success');
  }else{
    if(chosenSpan)chosenSpan.classList.add('wrong');
    if(correctSpan)correctSpan.classList.add('correct');
    bumpStreak(false);playBuzz();vibrate([30,50,30]);
    showToast(`❌ Sai! Lỗi ở phần ${correctLetter}. Sửa thành: "${q.correction}"`,'error');
  }
  totalAnswered++;if(correct)totalCorrect++;else mistakes.push(q);saveProgress();
  refreshScoreTag();
  showExplanation(q,correct);
  showNextBtn();
}

function bumpStreak(c){
  if(c){streak++;if(streak>bestStreak){bestStreak=streak;saveProgress();}if(streak>0&&streak%5===0){showToast(`🔥 Chuỗi ${streak} câu đúng!`,'info');showConfetti(true);}}
  else streak=0;
}
function vibrate(pattern){ try{ if(navigator.vibrate) navigator.vibrate(pattern); }catch(e){} }
function refreshScoreTag(){
  const t=document.getElementById('scoreTag');
  if(t){t.textContent=`✅ ${score}/${currentQ+1}`;t.classList.remove('score-pop');void t.offsetWidth;t.classList.add('score-pop');}
}
function showNextBtn(){
  document.getElementById('nextBtnArea').innerHTML=`<button onclick="nextQuestion()" class="btn-primary text-lg px-8 next-btn-enter ripple-btn">Câu tiếp theo →</button>`;
}
function nextQuestion(){
  const a=document.getElementById('questionArea');
  if(a){a.style.transition='opacity .15s ease';a.style.opacity='0';}
  setTimeout(()=>{currentQ++;answered=false;renderQuiz(document.getElementById('app'));},150);
}

function showExplanation(q,wasCorrect){
  const banner=wasCorrect
    ?`<div class="rounded-xl p-3 mb-4 flex items-center gap-2 font-700" style="background:#d4edda;color:#155724"><i data-lucide="check-circle-2" style="width:18px;height:18px"></i> Chính xác! Đọc giải thích để hiểu sâu hơn.</div>`
    :`<div class="rounded-xl p-3 mb-4 flex items-center gap-2 font-700" style="background:#f8d7da;color:#c0392b"><i data-lucide="x-circle" style="width:18px;height:18px"></i> Chưa đúng! Đọc giải thích chi tiết bên dưới.</div>`;
  document.getElementById('explanationArea').innerHTML=`
  <div class="fade-in">
    ${banner}
    <div class="glass rounded-2xl p-5">
      <div class="flex items-center gap-2 mb-4">
        <i data-lucide="book-open" style="width:18px;height:18px;color:var(--accent)"></i>
        <span class="font-700 text-dark2">🔍 Giải thích chi tiết</span>
      </div>
      ${q.explain_detail}
    </div>
  </div>`;
  safeLucide();
}

// ===== RESULT =====
function renderResult(app){
  const total=quizList.length;
  const pct=Math.round(score/total*100);
  const emoji=pct>=90?'🏆':pct>=70?'🎉':pct>=50?'💪':'📖';
  const msg=pct>=90?'Xuất sắc! Bạn đã thành thạo chuyên đề này!':pct>=70?'Khá giỏi! Tiếp tục cố gắng!':pct>=50?'Cần ôn thêm các quy tắc nhé!':'Hãy xem lại phần lý thuyết!';
  const badge=pct>=95?{cls:'badge-master',label:'👑 Master'}:pct>=80?{cls:'badge-gold',label:'🥇 Vàng'}:pct>=50?{cls:'badge-silver',label:'🥈 Bạc'}:pct>0?{cls:'badge-bronze',label:'🥉 Đồng'}:{cls:'badge-locked',label:'Cố gắng thêm'};
  if(pct>=80)showConfetti(true);
  const mistakeHTML = mistakes.length ? `
    <details class="w-full max-w-md mb-4">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span>📝</span> Xem lại ${mistakes.length} câu trả lời sai
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 space-y-3">
        ${mistakes.map((mq,i)=>`
        <div class="glass rounded-2xl p-4">
          <div class="font-700 text-dark2 mb-1" style="line-height:1.5">${i+1}. ${mq.q||mq.template||''}</div>
          ${mq.vi?`<div class="text-xs mb-2" style="color:var(--accent)">${mq.vi}</div>`:''}
          <div class="text-sm">${mq.explain_detail||''}</div>
        </div>`).join('')}
      </div>
    </details>` : '';
  app.innerHTML=`
  ${topBar()}
  <div class="app-shell flex flex-col items-center justify-center min-h-full p-6 fade-in">
    <div class="text-7xl mb-4 pop-in">${emoji}</div>
    <h2 class="text-2xl font-800 text-dark2 mb-1">${msg}</h2>
    <span class="badge ${badge.cls} mb-4">${badge.label}</span>
    <div class="glass rounded-2xl p-6 w-full max-w-md mb-6 text-center">
      <div class="text-5xl font-800 mb-2" style="color:var(--accent)">${score}<span class="text-2xl text-soft">/${total}</span></div>
      <div class="text-lg font-600 text-dark2 mb-3">${pct}% chính xác</div>
      <div class="progress-bar mb-3"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="grid grid-cols-3 gap-3 text-sm">
        <div class="rounded-xl p-3" style="background:rgba(46,204,113,.12)"><div class="font-800 text-xl" style="color:#2ecc71">${score}</div><div class="text-soft">Đúng</div></div>
        <div class="rounded-xl p-3" style="background:rgba(231,76,60,.12)"><div class="font-800 text-xl" style="color:#e74c3c">${total-score}</div><div class="text-soft">Sai</div></div>
        <div class="rounded-xl p-3" style="background:rgba(255,175,204,.25)"><div class="font-800 text-xl" style="color:var(--accent)">${bestStreak}</div><div class="text-soft">Chuỗi dài nhất</div></div>
      </div>
    </div>
    ${mistakeHTML}
    <div class="w-full max-w-md space-y-3">
      <button onclick="restartQuiz(false)" class="btn-primary w-full ripple-btn">🔄 Làm lại từ đầu</button>
      <button onclick="restartQuiz(true)" class="btn-pink w-full ripple-btn">🔀 Làm ngẫu nhiên</button>
      <button onclick="currentScreen='theory';render()" class="btn-green w-full ripple-btn">📚 Ôn lý thuyết</button>
      <button onclick="backToTopicMenu()" class="w-full py-3 rounded-xl font-600 surface text-dark2 ripple-btn" style="box-shadow:var(--shadow-soft)">📋 Danh sách bài tập</button>
      <button onclick="currentScreen='home';render()" class="w-full py-3 rounded-xl font-600 surface text-dark2 ripple-btn" style="box-shadow:var(--shadow-soft)">🏠 Trang chủ</button>
    </div>
  </div>`;
  safeLucide();
}

// ===== RIPPLE =====
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('.ripple-btn');
  if(!btn)return;
  try{
    const rect=btn.getBoundingClientRect();
    const r=document.createElement('span');
    const size=Math.max(rect.width,rect.height);
    r.className='ripple';r.style.width=r.style.height=size+'px';
    r.style.left=(e.clientX-rect.left-size/2)+'px';r.style.top=(e.clientY-rect.top-size/2)+'px';
    btn.appendChild(r);setTimeout(()=>r.remove(),650);
  }catch(e){}
});

// ===== PHÍM TẮT (bàn phím) — chỉ hoạt động khi đang làm bài =====
document.addEventListener('keydown',(e)=>{
  if(currentScreen!=='quiz')return;
  if(e.target && e.target.tagName==='INPUT' && !e.target.disabled)return;
  const key=e.key;
  if(!answered){
    const num = {'1':0,'2':1,'3':2,'4':3}[key];
    const letterIdx = {'a':0,'b':1,'c':2,'d':3}[key.toLowerCase()];
    const idx = num!==undefined?num:letterIdx;
    if(idx!==undefined){
      const q=quizList[currentQ];
      if(q && q.type==='error'){
        const letters=['A','B','C','D'];
        const el=document.querySelector(`.error-choice[data-letter="${letters[idx]}"]`);
        if(el) el.click();
      }else{
        const btns=document.querySelectorAll('.option-btn');
        if(btns[idx]) btns[idx].click();
      }
    }
  }else if(key==='Enter' || key===' '){
    e.preventDefault();
    const nextBtn=document.querySelector('#nextBtnArea button');
    if(nextBtn) nextBtn.click();
  }
});

render();

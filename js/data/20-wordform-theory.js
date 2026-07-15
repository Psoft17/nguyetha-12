const WORDFORM_THEORY_HTML = `
<div class="glass rounded-2xl p-4 mb-4" style="border-left:4px solid var(--accent)">
  <div class="font-800 text-dark2 mb-2">&#127775; TỔNG QUAN — Cấu tạo từ &amp; Từ loại (Word Formation)</div>
  <div class="text-sm text-soft">Cấu tạo từ là cách một từ được hình thành bằng cách thêm tiền tố (prefix) hoặc hậu tố (suffix) vào một từ gốc để tạo ra một từ loại khác hoặc thay đổi nghĩa của từ. Nắm vững các quy tắc cấu tạo từ và trật tự từ trong câu giúp xác định nhanh và chính xác từ loại cần điền trong bài tập trắc nghiệm.</div>
  <div class="ex-card mt-2">invent (v) &rarr; <b>invention</b> (n) &rarr; <b>inventive</b> (a) &rarr; <b>inventively</b> (adv)<br><span style="color:var(--accent);font-size:13px">&rarr; phát minh &rarr; sự phát minh &rarr; có óc sáng tạo &rarr; một cách sáng tạo</span></div>
</div>

<details open class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span class="pos-pill-n">N</span> 1. Cách thành lập DANH TỪ
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead><tbody><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ment &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">develop (v) + ment = <b>development</b> (n): sự phát triển<br>entertain (v) + ment = <b>entertainment</b> (n): sự giải trí</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + ance &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">attend (v) + ance = <b>attendance</b> (n): sự tham dự<br>perform (v) + ance = <b>performance</b> (n): sự thực hiện, biểu diễn</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ion/ation &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">invent (v) + ion = <b>invention</b> (n): sự phát minh<br>inform (v) + ion = <b>information</b> (n): thông tin</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + age &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">marry (v) + age = <b>marriage</b> (n): hôn nhân<br>carry (v) + age = <b>carriage</b> (n): sự chuyên chở</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + al &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">survive (v) + al = <b>survival</b> (n): sự sống sót<br>arrive (v) + al = <b>arrival</b> (n): sự đến, tới</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + ing &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">teach (v) + ing = <b>teaching</b> (n): công việc dạy học<br>train (v) + ing = <b>training</b> (n): công việc đào tạo</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + er &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">work (v) + er = <b>worker</b> (n): công nhân<br>employ (v) + er = <b>employer</b> (n): ông chủ</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + or &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">act (v) + or = <b>actor</b> (n): diễn viên<br>survive (v) + or = <b>survivor</b> (n): người sống sót</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ress &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">act (v) + ress = <b>actress</b> (n): nữ diễn viên<br>wait (v) + ress = <b>waitress</b> (n): nữ bồi bàn</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + ant &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">assist (v) + ant = <b>assistant</b> (n): trợ lí<br>depend (v) + ant = <b>dependant</b> (n): người phụ thuộc</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ee &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">employ (v) + ee = <b>employee</b> (n): công nhân<br>interview (v) + ee = <b>interviewee</b> (n): người đi phỏng vấn</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + ledge &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">know (v) + ledge = <b>knowledge</b> (n): sự hiểu biết, kiến thức</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ist &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">type (v) + ist = <b>typist</b> (n): người đánh máy</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V + ar &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">lie (v) + ar = <b>liar</b> (n): kẻ nói dối</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ence &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">depend (v) + ence = <b>dependence</b> (n): sự phụ thuộc</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">Adj + ness &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">rich (a) + ness = <b>richness</b> (n): sự giàu có<br>polite (a) + ness = <b>politeness</b> (n): sự lịch sự</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">Adj + ity &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">able (a) + ity = <b>ability</b> (n): khả năng, năng lực<br>responsible (a) + ity = <b>responsibility</b> (n): trách nhiệm</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">Adj + y &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">honest (a) + y = <b>honesty</b> (n): sự thật thà</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">Adj + ty &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">certain (a) + ty = <b>certainty</b> (n): sự chắc chắn</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">Adj + age &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">short (a) + age = <b>shortage</b> (n): sự thiếu hụt</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">Adj + cy &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">proficient (a) + cy = <b>proficiency</b> (n): sự giỏi, thành thạo</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">Adj + dom &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">free (a) + dom = <b>freedom</b> (n): sự tự do</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">Adj/N + ism &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">social (a) + ism = <b>socialism</b> (n): chủ nghĩa xã hội<br>terror (n) + ism = <b>terrorism</b> (n): chủ nghĩa khủng bố</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">Adj + th &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">warm (a) + th = <b>warmth</b> (n): sự ấm áp<br>wide (a) + th = <b>width</b> (n): bề rộng</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + hood &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">child (n) + hood = <b>childhood</b> (n): thời thơ ấu<br>neighbor (n) + hood = <b>neighborhood</b> (n): vùng lân cận</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ship &rarr; N</span></td><td style="padding:7px 8px;color:var(--text-soft)">friend (n) + ship = <b>friendship</b> (n): tình bạn<br>member (n) + ship = <b>membership</b> (n): tư cách hội viên</td></tr></tbody></table>
    <div class="mt-3 p-3 rounded-xl" style="background:#fff3cd;border-left:3px solid #ffc107;font-size:13px">
      &#9888;&#65039; <b>Chính tả đặc biệt:</b> y &rarr; i trước hậu tố bắt đầu bằng phụ âm: happy&rarr;happ<b>i</b>ness, easy&rarr;eas<b>i</b>ly; phụ âm cuối được gấp đôi trong một số trường hợp: begin&rarr;beginn<b>ing</b>.
    </div>
  </div>
</details>

<details class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span class="pos-pill-v">V</span> 2. Cách thành lập ĐỘNG TỪ
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead><tbody><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">Adj + en &rarr; V</span></td><td style="padding:7px 8px;color:var(--text-soft)">wide (a) + en = <b>widen</b> (v): mở rộng<br>short (a) + en = <b>shorten</b> (v): thu ngắn, rút ngắn</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">en + Adj &rarr; V</span></td><td style="padding:7px 8px;color:var(--text-soft)">en + rich (a) = <b>enrich</b> (v): làm giàu<br>en + large (a) = <b>enlarge</b> (v): tăng lên, phóng to</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + en &rarr; V</span></td><td style="padding:7px 8px;color:var(--text-soft)">length (n) + en = <b>lengthen</b> (v): làm dài ra, kéo dài ra</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">Adj + ise/ize &rarr; V</span></td><td style="padding:7px 8px;color:var(--text-soft)">social (a) + ise/ize = <b>socialize</b> (v): xã hội hóa, hòa nhập<br>industrial (a) + ise/ize = <b>industrialize</b> (v): công nghiệp hóa</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + fy &rarr; V</span></td><td style="padding:7px 8px;color:var(--text-soft)">beauty (n) + fy = <b>beautify</b> (v): làm đẹp<br>simple (a) + fy = <b>simplify</b> (v): đơn giản hóa</td></tr></tbody></table>
    <div class="mt-3 p-3 rounded-xl" style="background:#d4edda;border-left:3px solid #2ecc71;font-size:13px">
      &#9989; Sau <b>will/can/must/have to/need to/should</b> luôn dùng động từ nguyên thể: will <b>enrich</b> | have to <b>conserve</b> | need to <b>rotate</b>.
    </div>
  </div>
</details>

<details class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span class="pos-pill-adj">Adj</span> 3. Cách thành lập TÍNH TỪ
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead><tbody><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + ly &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">friend (n) + ly = <b>friendly</b> (a): thân thiện<br>love (n) + ly = <b>lovely</b> (a): đáng yêu</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ful &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">care (n) + ful = <b>careful</b> (a): cẩn thận<br>success (n) + ful = <b>successful</b> (a): thành công</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + less &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">home (n) + less = <b>homeless</b> (a): vô gia cư<br>hope (n) + less = <b>hopeless</b> (a): vô vọng</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ic &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">economy (n) + ic = <b>economic</b> (a): thuộc về kinh tế<br>history (n) + ic = <b>historic</b> (a): có tính chất lịch sử</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + able &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">reason (n) + able = <b>reasonable</b> (a): có lí, hợp lí<br>comfort (n) + able = <b>comfortable</b> (a): thoải mái</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ous &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">danger (n) + ous = <b>dangerous</b> (a): nguy hiểm<br>industry (n) + ous = <b>industrious</b> (a): chăm chỉ</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + some &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">trouble (n) + some = <b>troublesome</b> (a): gây rắc rối<br>hand (n) + some = <b>handsome</b> (a): đẹp trai</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + al &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">nation (n) + al = <b>national</b> (a): thuộc quốc gia<br>nature (n) + al = <b>natural</b> (a): thuộc về tự nhiên</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + ing/ed &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">interest (n) + ing/ed = <b>interesting/interested</b> (a): thú vị / thích thú<br>bore (n) + ing/ed = <b>boring/bored</b> (a): tẻ nhạt / buồn chán</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ern &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">West (n) + ern = <b>Western</b> (a): về phía tây<br>South (n) + ern = <b>Southern</b> (a): về phía nam</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + y &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">rain (n) + y = <b>rainy</b> (a): có mưa<br>sun (n) + y = <b>sunny</b> (a): nhiều nắng</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ible &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">response (n) + ible = <b>responsible</b> (a): có trách nhiệm</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">V + ent &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">depend (v) + ent = <b>dependent</b> (a): phụ thuộc</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">V/N + ive &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">impress (v) + ive = <b>impressive</b> (a): ấn tượng<br>invent (v) + ive = <b>inventive</b> (a): có óc sáng tạo<br>expense (n) + ive = <b>expensive</b> (a): đắt</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">N + like &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">child (n) + like = <b>childlike</b> (a): như trẻ con, ngây thơ<br>god (n) + like = <b>godlike</b> (a): như thần thánh</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">N + ish &rarr; Adj</span></td><td style="padding:7px 8px;color:var(--text-soft)">fool (n) + ish = <b>foolish</b> (a): dại dột, ngu xuẩn<br>self (n) + ish = <b>selfish</b> (a): ích kỉ</td></tr></tbody></table>
    <div class="mt-3 p-3 rounded-xl" style="background:#f8d7da;border-left:3px solid #e74c3c;font-size:13px">
      &#9888;&#65039; <b>Phân biệt dễ nhầm:</b><br>
      &bull; <b>industrial</b> (thuộc công nghiệp) &ne; <b>industrious</b> (chăm chỉ) &ne; <b>industrialized</b> (đã công nghiệp hóa)<br>
      &bull; <b>economic</b> (thuộc kinh tế) &ne; <b>economical</b> (tiết kiệm)<br>
      &bull; <b>respectful</b> (lễ phép, tỏ ra tôn trọng người khác) &ne; <b>respectable</b> (đáng được tôn trọng) &ne; <b>respective</b> (tương ứng, riêng của mỗi người)<br>
      &bull; <b>imaginary</b> (tưởng tượng, không có thật) &ne; <b>imaginative</b> (giàu trí tưởng tượng, sáng tạo) &ne; <b>imaginable</b> (có thể tưởng tượng được)<br>
      &bull; <b>-ed</b> (dùng cho NGƯỜI cảm thấy) &ne; <b>-ing</b> (dùng cho vật/việc gây ra cảm xúc đó)
    </div>
  </div>
</details>

<details class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span class="pos-pill-adv">Adv</span> 4. Cách thành lập TRẠNG TỪ
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4">
    <div class="rule-row"><span class="suffix-pill">Adj + ly</span><span class="text-dark2">&rarr; Trạng từ: slow&rarr;<b>slowly</b>, rapid&rarr;<b>rapidly</b>, careful&rarr;<b>carefully</b></span></div>
    <div class="mt-3 p-3 rounded-xl" style="background:#f8f9fa;border-left:3px solid var(--accent);font-size:13px">
      &#128209; <b>Bảng lưu ý — một hậu tố có thể tạo nhiều từ loại khác nhau:</b>
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-top:8px">
        <tbody>
          <tr><td style="padding:6px;width:35%"><b>N + ly &rarr; Adj</b><br><b>Adj + ly &rarr; Adv</b></td><td style="padding:6px;color:var(--text-soft)">like+ly=<b>likely</b> (a) | quick+ly=<b>quickly</b> (adv)</td></tr>
          <tr><td style="padding:6px"><b>V + al &rarr; N</b><br><b>N + al &rarr; Adj</b></td><td style="padding:6px;color:var(--text-soft)">arrive+al=<b>arrival</b> (n) | nation+al=<b>national</b> (a)</td></tr>
          <tr><td style="padding:6px"><b>V + ing &rarr; N</b><br><b>N/V + ing &rarr; Adj</b></td><td style="padding:6px;color:var(--text-soft)">teach+ing=<b>teaching</b> (n) | bore+ing=<b>boring</b> (a)</td></tr>
          <tr><td style="padding:6px"><b>Adj + y &rarr; N</b><br><b>N + y &rarr; Adj</b></td><td style="padding:6px;color:var(--text-soft)">honest+y=<b>honesty</b> (n) | wind+y=<b>windy</b> (a)</td></tr>
        </tbody>
      </table>
    </div>
    <div class="mt-3">
      <div class="font-700 text-dark2 mb-2">&#128205; Vị trí của TRẠNG TỪ:</div>
      <div class="space-y-2 text-sm">
        <div class="ex-card">1. <b>Sau động từ</b> (cách thức): He drives <b>carefully</b>.</div>
        <div class="ex-card">2. <b>Trước tính từ</b> (mức độ): She is <b>very</b> beautiful.</div>
        <div class="ex-card">3. <b>Giữa hai động từ</b>: He will <b>certainly</b> die.</div>
        <div class="ex-card">4. <b>Đầu câu + dấu phẩy</b>: <b>Traditionally,</b> women stayed home.</div>
      </div>
    </div>
  </div>
</details>

<details class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span style="background:linear-gradient(90deg,#8e44ad,#c39bd3);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">+</span> 5. TIỀN TỐ (PREFIXES) thường gặp
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
    <div class="text-sm text-soft mb-2">Khác với hậu tố (thường làm đổi TỪ LOẠI), tiền tố thường chỉ làm đổi <b>NGHĨA</b> của từ (phần lớn là phủ định) mà KHÔNG làm đổi từ loại: happy (a) &rarr; unhappy (a).</div>
    <table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Tiền tố</th><th style="padding:8px;text-align:left">Ý nghĩa / Vị trí dùng</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead><tbody><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">un-</span></td><td style="padding:7px 8px;color:var(--text-soft)">danh từ/tính từ đối lập nghĩa (phổ biến nhất)</td><td style="padding:7px 8px;color:var(--text-soft)">happy &rarr; <b>unhappy</b> (không hạnh phúc)<br>able &rarr; <b>unable</b> (không thể)<br>employed &rarr; <b>unemployed</b> (thất nghiệp)<br>fair &rarr; <b>unfair</b> (không công bằng)</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">in-</span></td><td style="padding:7px 8px;color:var(--text-soft)">trước phần lớn tính từ gốc Latin</td><td style="padding:7px 8px;color:var(--text-soft)">convenient &rarr; <b>inconvenient</b> (bất tiện)<br>accurate &rarr; <b>inaccurate</b> (không chính xác)<br>dependent &rarr; <b>independent</b> (độc lập, lưu ý nghĩa không phải phủ định hoàn toàn)</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">im-</span></td><td style="padding:7px 8px;color:var(--text-soft)">trước tính từ bắt đầu bằng m/p</td><td style="padding:7px 8px;color:var(--text-soft)">possible &rarr; <b>impossible</b> (không thể)<br>polite &rarr; <b>impolite</b> (bất lịch sự)<br>mature &rarr; <b>immature</b> (chưa trưởng thành)</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">il-</span></td><td style="padding:7px 8px;color:var(--text-soft)">trước tính từ bắt đầu bằng l</td><td style="padding:7px 8px;color:var(--text-soft)">legal &rarr; <b>illegal</b> (bất hợp pháp)<br>literate &rarr; <b>illiterate</b> (mù chữ)</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">ir-</span></td><td style="padding:7px 8px;color:var(--text-soft)">trước tính từ bắt đầu bằng r</td><td style="padding:7px 8px;color:var(--text-soft)">responsible &rarr; <b>irresponsible</b> (vô trách nhiệm)<br>regular &rarr; <b>irregular</b> (không đều)</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">dis-</span></td><td style="padding:7px 8px;color:var(--text-soft)">phủ định động từ/tính từ/danh từ</td><td style="padding:7px 8px;color:var(--text-soft)">agree &rarr; <b>disagree</b> (không đồng ý)<br>honest &rarr; <b>dishonest</b> (không trung thực)<br>advantage &rarr; <b>disadvantage</b> (bất lợi)</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">mis-</span></td><td style="padding:7px 8px;color:var(--text-soft)">làm sai, làm nhầm</td><td style="padding:7px 8px;color:var(--text-soft)">understand &rarr; <b>misunderstand</b> (hiểu lầm)<br>lead &rarr; <b>mislead</b> (đánh lừa)</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">re-</span></td><td style="padding:7px 8px;color:var(--text-soft)">làm lại</td><td style="padding:7px 8px;color:var(--text-soft)">write &rarr; <b>rewrite</b> (viết lại)<br>build &rarr; <b>rebuild</b> (xây lại)</td></tr><tr style="background:rgba(69,123,157,.04)"><td style="padding:7px 8px"><span class="suffix-pill">over-</span></td><td style="padding:7px 8px;color:var(--text-soft)">quá mức</td><td style="padding:7px 8px;color:var(--text-soft)">eat &rarr; <b>overeat</b> (ăn quá nhiều)<br>confident &rarr; <b>overconfident</b> (quá tự tin)</td></tr><tr style=""><td style="padding:7px 8px"><span class="suffix-pill">under-</span></td><td style="padding:7px 8px;color:var(--text-soft)">chưa đủ mức, ở dưới</td><td style="padding:7px 8px;color:var(--text-soft)">estimate &rarr; <b>underestimate</b> (đánh giá thấp)<br>developed &rarr; <b>underdeveloped</b> (kém phát triển)</td></tr></tbody></table>
    <div class="mt-3 p-3 rounded-xl" style="background:#e8f4f8;font-size:13px">
      &#128161; <b>Mẹo chọn tiền tố phủ định đúng:</b> im- (trước m/p), il- (trước l), ir- (trước r), in- (các trường hợp còn lại), un-/dis- (phổ biến, không theo quy tắc chính tả cố định — cần học thuộc theo từng từ).
    </div>
  </div>
</details>

<details class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span style="background:linear-gradient(90deg,#457B9D,#5b9bc4);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">II</span> 6. TRẬT TỰ TỪ trong câu (17 quy tắc)
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4">
    <div class="space-y-2 text-sm">
      <div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau to be (am/is/are/was/were)</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TÍNH TỪ</span>
    <span class="text-soft italic">The book is so <b>interesting</b> that I can't put it down.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau động từ thường</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TRẠNG TỪ</span>
    <span class="text-soft italic">He runs more <b>quickly</b> than me.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau động từ tri giác (hear, see, smell, taste, feel...)</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TÍNH TỪ</span>
    <span class="text-soft italic">The food tastes <b>delicious</b>.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau look, seem, get, become, find, make...</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TÍNH TỪ</span>
    <span class="text-soft italic">She looks <b>happier</b> than yesterday.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau mạo từ (a/an/the)</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">The <b>development</b> of industry causes air pollution.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau tính từ sở hữu: my/your/our/his/her/their/its</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">He failed the exam because of his <b>laziness</b>.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau sở hữu cách ('s)</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">Mai's <b>house</b> is very nice.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau đại từ chỉ định (this/that/these/those)</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">This <b>machine</b> has been out of order.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau some/any/many/much</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">There are many <b>people</b> waiting for the last bus.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau giới từ</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">My parents are celebrating 30 years of <b>marriage</b> next week.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Trước danh từ</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TÍNH TỪ</span>
    <span class="text-soft italic">Copperheads are <b>poisonous</b> snakes.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Trước tính từ</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TRẠNG TỪ</span>
    <span class="text-soft italic">The matter is <b>comparatively</b> complicated and sensitive.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Đứng đầu câu, ngăn cách bằng dấu phẩy (,)</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TRẠNG TỪ</span>
    <span class="text-soft italic"><b>Traditionally</b>, the positions of the women were in the kitchen.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau danh từ</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">This firm is known for its high quality <b>products</b>.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Sau bring/take/have/buy/sell... + N</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">DANH TỪ</span>
    <span class="text-soft italic">Money doesn't bring <b>happiness</b> to man.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Giữa hai động từ</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TRẠNG TỪ</span>
    <span class="text-soft italic">He will <b>certainly</b> die if you don't call a doctor.</span>
  </div><div class="flex flex-col sm:flex-row gap-1 p-2 rounded-lg" style="background:rgba(69,123,157,.05)">
    <span class="font-600 text-dark2" style="min-width:280px">Khi có and/or/but: hai vế phải cân nhau về từ loại</span>
    <span class="font-700" style="color:var(--accent);min-width:140px">TỪ LOẠI TƯƠNG ĐƯƠNG</span>
    <span class="text-soft italic">The Red Cross helps people without discrimination based on nationality, race, religion, class or political <b>opinions</b>.</span>
  </div>
    </div>
  </div>
</details>

<details class="mb-3">
  <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
    <span style="background:linear-gradient(90deg,#e63946,#ff8fa3);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">III</span> 7. DẤU HIỆU NHẬN BIẾT TỪ LOẠI (qua đuôi từ)
    <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
  </summary>
  <div class="mt-2 glass rounded-2xl p-4">
    <div class="rule-row"><span class="pos-pill-n">N</span><span class="text-dark2">-ment, -ance/-ence, -ion/-ation, -age, -ure, -er/-or, -ist, -ress, -ness, -ant, -ee, -ledge, -ity, -y, -ty, -cy, -dom, -ism, -hood, -th, -ship</span></div>
    <div class="rule-row mt-3"><span class="pos-pill-v">V</span><span class="text-dark2">-ise/-ize, -ate, -fy, -en</span></div>
    <div class="rule-row mt-3"><span class="pos-pill-adj">Adj</span><span class="text-dark2">-ful, -less, -ic, -able/-ible, -ous, -some, -al, -ing/-ed, -ent/-ant, -ive, -like, -ish, -ary, -ern, -y</span></div>
    <div class="mt-3 p-3 rounded-xl" style="background:#e8f4f8;font-size:13px">
      &#128161; <b>Mẹo làm bài nhanh:</b> Xác định vị trí của chỗ trống trong câu (đứng sau to be? sau mạo từ? trước danh từ?...) rồi đối chiếu với mục <b>6. Trật tự từ</b> ở trên để suy ra từ loại cần điền, sau đó chọn đáp án có hậu tố phù hợp với từ loại đó. Nếu chỗ trống là tính từ nhưng câu mang nghĩa phủ định, hãy kiểm tra thêm tiền tố (mục 5).
    </div>
  </div>
</details>
`;

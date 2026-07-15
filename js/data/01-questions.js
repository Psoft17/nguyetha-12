// ===== DỮ LIỆU 41 CÂU HỎI VỚI GIẢI THÍCH SIÊU CHI TIẾT =====
const QUESTIONS = [
  {
    id:1,
    q:"The generator is one of Faraday's most important __________",
    vi:"Máy phát điện là một trong những __________ quan trọng nhất của Faraday.",
    opts:["A. achievements","B. achievement","C. achieve","D. achieving"],
    ans:0,
    keyword:"achieve",
    correct_word:"achievements",
    pos:"Danh từ (Noun) — số nhiều",
    suffix:"-ment → Danh từ",
    explain_short:"Sau sở hữu cách 'Faraday's' + tính từ 'most important' → cần DANH TỪ số nhiều",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. achievements</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">The generator is one of Faraday's most important <u>__________</u></div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"Faraday's"</b> (sở hữu cách) = cần DANH TỪ</li>
          <li>→ Sau <b style="color:var(--accent)">"most important"</b> (tính từ) = xác nhận cần DANH TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">achieve (V)</span><span>→</span><span class="suffix-pill">achieve + ment</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">achievement (N)</span></div>
        <div class="ex-card mt-2">achievement = sự thành tựu, thành tích &nbsp;|&nbsp; achievements = nhiều thành tựu<br>Hậu tố <b>-ment</b> biến ĐỘNG TỪ → DANH TỪ</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">B. achievement — Thiếu chữ "s". "One of + N số nhiều" → bắt buộc phải là "achievements"</div>
        <div class="wrong-opt">C. achieve — Động từ (V). Không thể đặt động từ sau sở hữu cách</div>
        <div class="wrong-opt">D. achieving — Hiện tại phân từ (V-ing). Không phải danh từ</div>
      </div>
      <div class="ex-card">📌 Quy tắc: "one of + the + N số nhiều" — VD: one of the best <b>achievements</b></div>
    `
  },
  {
    id:2,
    q:"His __________ of the generator is very famous.",
    vi:"__________ của ông ấy về máy phát điện rất nổi tiếng.",
    opts:["A. invent","B. inventive","C. invention","D. inventor"],
    ans:2,
    keyword:"invent",
    correct_word:"invention",
    pos:"Danh từ (Noun)",
    suffix:"-ion → Danh từ",
    explain_short:"Sau 'His' (tính từ sở hữu) và trước 'of' (giới từ) → cần DANH TỪ",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. invention</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">His <u>__________</u> of the generator is very famous.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"His"</b> (tính từ sở hữu: my/your/his/her/its/our/their) = cần DANH TỪ</li>
          <li>→ Trước <b style="color:var(--accent)">"of the generator"</b> (cụm giới từ) = xác nhận là DANH TỪ</li>
          <li>→ Chủ ngữ + "is" → đây là chủ ngữ của câu</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">invent (V)</span><span>→</span><span class="suffix-pill">invent + ion</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">invention (N)</span></div>
        <div class="ex-card mt-2">invention = sự phát minh, phát minh &nbsp;|&nbsp; Hậu tố <b>-ion/-tion/-ation</b> biến ĐỘNG TỪ → DANH TỪ</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. invent — Động từ (V): phát minh. Không dùng sau tính từ sở hữu "His"</div>
        <div class="wrong-opt">B. inventive — Tính từ (Adj): có óc sáng tạo. Không dùng sau "His" (tính từ sở hữu cần Danh từ theo sau)</div>
        <div class="wrong-opt">D. inventor — Danh từ (N): nhà phát minh (người). Sai nghĩa — không nói "His inventor of the generator"</div>
      </div>
      <div class="ex-card">📌 Cụm từ: "the invention of..." = sự phát minh ra... (VD: the invention of the telephone)</div>
    `
  },
  {
    id:3,
    q:"We will ________ our English vocabulary if we read English books every day.",
    vi:"Chúng ta sẽ ________ vốn từ vựng tiếng Anh nếu đọc sách tiếng Anh mỗi ngày.",
    opts:["A. rich","B. richness","C. enrich","D. richly"],
    ans:2,
    keyword:"rich",
    correct_word:"enrich",
    pos:"Động từ (Verb)",
    suffix:"en- + Tính từ → Động từ",
    explain_short:"Sau 'will' cần ĐỘNG TỪ nguyên thể. en- + rich (Adj) → enrich (V)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. enrich</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">We will <u>__________</u> our English vocabulary...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"will"</b> (trợ động từ) = cần ĐỘNG TỪ nguyên thể (V)</li>
          <li>→ Sau động từ có "our English vocabulary" = tân ngữ → xác nhận đây là ĐỘNG TỪ chính</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">rich (Adj)</span><span>→</span><span class="suffix-pill">en + rich</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">enrich (V)</span></div>
        <div class="ex-card mt-2">enrich = làm phong phú, làm giàu có thêm<br>Tiền tố <b>en-</b> + Tính từ → Động từ. VD khác: en+large=enlarge, en+rich=enrich</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. rich — Tính từ (Adj): giàu. Không đặt sau "will" (trợ động từ cần V nguyên thể)</div>
        <div class="wrong-opt">B. richness — Danh từ (N): sự giàu có. Không đặt sau "will"</div>
        <div class="wrong-opt">D. richly — Trạng từ (Adv): một cách giàu có. Không đặt sau "will" làm động từ chính</div>
      </div>
      <div class="ex-card">📌 Các cặp tương tự: en+large=enlarge (phóng to) | en+able=enable (cho phép) | en+courage=encourage (khuyến khích)</div>
    `
  },
  {
    id:4,
    q:"Lan always shares her __________ with me.",
    vi:"Lan luôn chia sẻ __________ của cô ấy với tôi.",
    opts:["A. sadness","B. sad","C. sadly","D. unsad"],
    ans:0,
    keyword:"sad",
    correct_word:"sadness",
    pos:"Danh từ (Noun)",
    suffix:"-ness → Danh từ",
    explain_short:"Sau 'her' (tính từ sở hữu) → cần DANH TỪ. sad + ness = sadness",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. sadness</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Lan always shares her <u>__________</u> with me.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"her"</b> (tính từ sở hữu) = cần DANH TỪ</li>
          <li>→ Sau "shares" (động từ) = đây là tân ngữ → xác nhận DANH TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">sad (Adj)</span><span>→</span><span class="suffix-pill">sad + ness</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">sadness (N)</span></div>
        <div class="ex-card mt-2">sadness = nỗi buồn, sự buồn bã<br>Hậu tố <b>-ness</b> biến TÍNH TỪ → DANH TỪ. VD: happy→happiness, kind→kindness</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">B. sad — Tính từ (Adj): buồn. Không dùng trực tiếp sau "her" (tính từ sở hữu không đứng trước tính từ)</div>
        <div class="wrong-opt">C. sadly — Trạng từ (Adv): một cách buồn bã. Không dùng sau tính từ sở hữu</div>
        <div class="wrong-opt">D. unsad — Không tồn tại trong tiếng Anh! Từ ghép sai hoàn toàn</div>
      </div>
      <div class="ex-card">📌 share one's sadness = chia sẻ nỗi buồn | share one's happiness = chia sẻ niềm vui</div>
    `
  },
  {
    id:5,
    q:"Money doesn't bring __________ to man.",
    vi:"Tiền bạc không mang lại __________ cho con người.",
    opts:["A. happy","B. happiness","C. happily","D. unhappy"],
    ans:1,
    keyword:"happy",
    correct_word:"happiness",
    pos:"Danh từ (Noun)",
    suffix:"-ness → Danh từ",
    explain_short:"Sau 'bring' (V) = tân ngữ → cần DANH TỪ. happy → happiness",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. happiness</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Money doesn't bring <u>__________</u> to man.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"bring"</b> (động từ: mang lại) = cần DANH TỪ (tân ngữ)</li>
          <li>→ Cấu trúc: bring + N (tân ngữ) + to + N → bring happiness to man</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">happy (Adj)</span><span>→</span><span class="suffix-pill">happi + ness</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">happiness (N)</span></div>
        <div class="ex-card mt-2">happiness = hạnh phúc, niềm vui<br>Lưu ý chính tả: happy → <b>happi</b>ness (y → i trước -ness)<br>Tương tự: lazy → laziness | beauty → beautiful</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. happy — Tính từ (Adj): vui vẻ, hạnh phúc. "bring + Adj" sai ngữ pháp — phải là "bring + N"</div>
        <div class="wrong-opt">C. happily — Trạng từ (Adv): một cách vui vẻ. Không dùng làm tân ngữ sau "bring"</div>
        <div class="wrong-opt">D. unhappy — Tính từ (Adj): không hạnh phúc. Sai từ loại + sai nghĩa</div>
      </div>
      <div class="ex-card">📌 Câu nổi tiếng: "Money doesn't bring happiness" — Tiền bạc không mang lại hạnh phúc</div>
    `
  },
  {
    id:6,
    q:"He will __________ die if you don't call a doctor.",
    vi:"Anh ấy sẽ __________ chết nếu bạn không gọi bác sĩ.",
    opts:["A. certain","B. certainly","C. certainty","D. uncertain"],
    ans:1,
    keyword:"certain",
    correct_word:"certainly",
    pos:"Trạng từ (Adverb)",
    suffix:"-ly → Trạng từ",
    explain_short:"Giữa 'will' và 'die' (2 động từ) → cần TRẠNG TỪ. certain + ly = certainly",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. certainly</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">He will <u>__________</u> die if you don't call a doctor.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Vị trí <b style="color:var(--accent)">giữa "will" và "die"</b> (giữa hai động từ) = cần TRẠNG TỪ</li>
          <li>→ Quy tắc: Giữa trợ động từ + V chính → đặt trạng từ tần suất/mức độ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">certain (Adj)</span><span>→</span><span class="suffix-pill">certain + ly</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">certainly (Adv)</span></div>
        <div class="ex-card mt-2">certainly = chắc chắn (trạng từ)<br>Hậu tố <b>-ly</b> biến TÍNH TỪ → TRẠNG TỪ</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. certain — Tính từ (Adj): chắc chắn. Không đặt giữa hai động từ</div>
        <div class="wrong-opt">C. certainty — Danh từ (N): sự chắc chắn (certain+ty). Không đặt giữa hai động từ</div>
        <div class="wrong-opt">D. uncertain — Tính từ (Adj) phủ định: không chắc chắn. Sai từ loại + sai nghĩa</div>
      </div>
      <div class="ex-card">📌 Vị trí trạng từ: will <b>certainly</b> die | have <b>already</b> gone | is <b>always</b> late</div>
    `
  },
  {
    id:7,
    q:"Good students aren't __________ intelligent students.",
    vi:"Học sinh giỏi không __________ là học sinh thông minh.",
    opts:["A. necessary","B. necessity","C. necessarily","D. unnecessary"],
    ans:2,
    keyword:"necessary",
    correct_word:"necessarily",
    pos:"Trạng từ (Adverb)",
    suffix:"-ly → Trạng từ",
    explain_short:"Trước tính từ 'intelligent' + sau 'aren't' → cần TRẠNG TỪ. necessary + ly",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. necessarily</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Good students aren't <u>__________</u> intelligent students.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Vị trí <b style="color:var(--accent)">trước tính từ "intelligent"</b> = cần TRẠNG TỪ (bổ nghĩa cho tính từ)</li>
          <li>→ Cấu trúc: not + necessarily = không nhất thiết phải...</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">necessary (Adj)</span><span>→</span><span class="suffix-pill">necessary + ly</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">necessarily (Adv)</span></div>
        <div class="ex-card mt-2">necessarily = một cách tất yếu / not necessarily = không nhất thiết phải<br>Đây là cụm thành ngữ quan trọng!</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. necessary — Tính từ (Adj): cần thiết. Trạng từ mới bổ nghĩa được cho tính từ "intelligent"</div>
        <div class="wrong-opt">B. necessity — Danh từ (N): sự cần thiết. Không đặt trước tính từ</div>
        <div class="wrong-opt">D. unnecessary — Tính từ (Adj): không cần thiết. Sai từ loại</div>
      </div>
      <div class="ex-card">📌 "not necessarily" là cụm quan trọng: "Giàu không nhất thiết phải hạnh phúc" = Being rich doesn't <b>necessarily</b> mean being happy.</div>
    `
  },
  {
    id:8,
    q:"I don't believe what he has just said. It is __________.",
    vi:"Tôi không tin những gì anh ấy vừa nói. Điều đó thật __________.",
    opts:["A. reason","B. unreasonable","C. reasonably","D. reasoning"],
    ans:1,
    keyword:"reason",
    correct_word:"unreasonable",
    pos:"Tính từ (Adjective) — có tiền tố phủ định",
    suffix:"-able → Tính từ + un- phủ định",
    explain_short:"Sau 'It is' (to be) → cần TÍNH TỪ. reason+able=reasonable, un+reasonable=unreasonable",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. unreasonable</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">It is <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"It is"</b> (to be) = cần TÍNH TỪ</li>
          <li>→ Ngữ cảnh: "Tôi không tin..." → điều đó "vô lý" → cần nghĩa phủ định</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">reason (N)</span><span>→</span><span class="suffix-pill">reason + able</span><span>→</span><span class="suffix-pill">reasonable (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">un + reasonable = unreasonable</span></div>
        <div class="ex-card mt-2">unreasonable = vô lý, không hợp lý<br>Tiền tố <b>un-</b> thêm vào TÍNH TỪ để tạo nghĩa phủ định<br>Hậu tố <b>-able</b> biến DANH TỪ/ĐỘNG TỪ → TÍNH TỪ</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. reason — Danh từ (N): lý do. Không dùng sau "is" làm tính từ</div>
        <div class="wrong-opt">C. reasonably — Trạng từ (Adv): một cách hợp lý. Không dùng sau "is" (to be cần Adj)</div>
        <div class="wrong-opt">D. reasoning — Danh từ/V-ing: lý luận, lập luận. Không phù hợp ngữ cảnh</div>
      </div>
      <div class="ex-card">📌 Tiền tố phủ định: un- + happy = unhappy | un- + lucky = unlucky | un- + reasonable = unreasonable</div>
    `
  },
  {
    id:9,
    q:"Water, manure and sunshine are __________ to plants.",
    vi:"Nước, phân bón và ánh nắng là __________ đối với cây trồng.",
    opts:["A. necessarily","B. necessary","C. necessity","D. unnecessarily"],
    ans:1,
    keyword:"necessary",
    correct_word:"necessary",
    pos:"Tính từ (Adjective)",
    suffix:"(từ gốc là tính từ)",
    explain_short:"Sau 'are' (to be) → cần TÍNH TỪ. necessary = cần thiết",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. necessary</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Water, manure and sunshine are <u>__________</u> to plants.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"are"</b> (to be) = cần TÍNH TỪ</li>
          <li>→ Cấu trúc: S + be + Adj (+ to + N): Water is necessary to plants</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">📚 Từ vựng quan trọng:</div>
        <div class="ex-card"><b>necessary</b> (Adj) = cần thiết, không thể thiếu<br><b>necessity</b> (N) = sự cần thiết<br><b>necessarily</b> (Adv) = một cách tất yếu</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. necessarily — Trạng từ (Adv). Không đặt sau "are" (to be cần Adj, không phải Adv)</div>
        <div class="wrong-opt">C. necessity — Danh từ (N). "are + N" không tạo thành câu đúng ngữ pháp trong ngữ cảnh này</div>
        <div class="wrong-opt">D. unnecessarily — Trạng từ phủ định (Adv): không cần thiết. Sai từ loại + sai nghĩa</div>
      </div>
      <div class="ex-card">📌 be + Adj + to: be essential to (thiết yếu), be important to (quan trọng), be necessary to (cần thiết)</div>
    `
  },
  {
    id:10,
    q:"She didn't tell me the __________ why she left school.",
    vi:"Cô ấy không nói cho tôi biết __________ tại sao cô ấy bỏ học.",
    opts:["A. reasonable","B. reason","C. unreasonable","D. reasonably"],
    ans:1,
    keyword:"reason",
    correct_word:"reason",
    pos:"Danh từ (Noun)",
    suffix:"(từ gốc là danh từ)",
    explain_short:"Sau 'the' (mạo từ) → cần DANH TỪ. 'the reason why' là cụm cố định",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. reason</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">She didn't tell me the <u>__________</u> why she left school.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"the"</b> (mạo từ xác định) = cần DANH TỪ</li>
          <li>→ "the reason why..." là cụm danh từ cố định thông dụng</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">📚 Từ vựng:</div>
        <div class="ex-card"><b>reason</b> (N) = lý do<br>Cụm quan trọng: <b>"the reason why + S + V"</b> = lý do tại sao...</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. reasonable — Tính từ (Adj): hợp lý. Không dùng sau mạo từ "the" (the cần N)</div>
        <div class="wrong-opt">C. unreasonable — Tính từ phủ định: vô lý. Sai từ loại</div>
        <div class="wrong-opt">D. reasonably — Trạng từ (Adv): một cách hợp lý. Không dùng sau mạo từ</div>
      </div>
      <div class="ex-card">📌 "the reason why" = lý do tại sao | "for this reason" = vì lý do này | "with good reason" = có lý do chính đáng</div>
    `
  },
  {
    id:11,
    q:"What is his __________? Is he American or English?",
    vi:"__________ của anh ấy là gì? Anh ấy là người Mỹ hay người Anh?",
    opts:["A. national","B. nationality","C. nationalize","D. international"],
    ans:1,
    keyword:"nation",
    correct_word:"nationality",
    pos:"Danh từ (Noun)",
    suffix:"-ality → Danh từ (national + ity)",
    explain_short:"Sau 'his' (tính từ sở hữu) → cần DANH TỪ. national+ity = nationality (quốc tịch)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. nationality</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">What is his <u>__________</u>? Is he American or English?</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"his"</b> (tính từ sở hữu) = cần DANH TỪ</li>
          <li>→ Ngữ cảnh câu hỏi về "Mỹ hay Anh" → hỏi về QUỐC TỊCH</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">nation (N)</span><span>→</span><span class="suffix-pill">nation + al</span><span>→</span><span class="suffix-pill">national (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">national + ity = nationality (N)</span></div>
        <div class="ex-card mt-2">nationality = quốc tịch<br>Hậu tố <b>-ity</b> biến TÍNH TỪ → DANH TỪ</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. national — Tính từ (Adj): thuộc quốc gia. Không đặt sau "his"</div>
        <div class="wrong-opt">C. nationalize — Động từ (V): quốc hữu hóa. Sai từ loại, sai nghĩa</div>
        <div class="wrong-opt">D. international — Tính từ (Adj): quốc tế. Sai từ loại, sai nghĩa</div>
      </div>
      <div class="ex-card">📌 Gia đình từ: nation (N quốc gia) | national (Adj) | nationality (N quốc tịch) | nationalize (V)</div>
    `
  },
  {
    id:12,
    q:"You should spend your free time __________.",
    vi:"Bạn nên sử dụng thời gian rảnh rỗi __________ của mình.",
    opts:["A. useful","B. useless","C. usefully","D. use"],
    ans:2,
    keyword:"use",
    correct_word:"usefully",
    pos:"Trạng từ (Adverb)",
    suffix:"-fully → Trạng từ (useful + ly)",
    explain_short:"Bổ nghĩa cho động từ 'spend' → cần TRẠNG TỪ. useful + ly = usefully",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. usefully</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">You should spend your free time <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau động từ <b style="color:var(--accent)">"spend"</b> → bổ nghĩa cách thức = cần TRẠNG TỪ</li>
          <li>→ Vị trí cuối câu sau động từ = TRẠNG TỪ chỉ cách thức</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">use (N/V)</span><span>→</span><span class="suffix-pill">use + ful</span><span>→</span><span class="suffix-pill">useful (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">useful + ly = usefully (Adv)</span></div>
        <div class="ex-card mt-2">usefully = một cách hữu ích, có ích</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. useful — Tính từ (Adj): hữu ích. Tính từ không bổ nghĩa cho động từ</div>
        <div class="wrong-opt">B. useless — Tính từ (Adj): vô dụng. Sai từ loại + sai nghĩa (nghĩa ngược lại)</div>
        <div class="wrong-opt">D. use — Danh từ/Động từ. Không dùng làm trạng từ</div>
      </div>
      <div class="ex-card">📌 spend time + Adv: spend time <b>usefully</b> (hữu ích) | spend time <b>wisely</b> (khôn ngoan) | spend time <b>productively</b> (hiệu quả)</div>
    `
  },
  {
    id:13,
    q:"Please decide what you want to do. You must make a __________.",
    vi:"Hãy quyết định bạn muốn làm gì. Bạn phải đưa ra một __________.",
    opts:["A. decide","B. decision","C. decisive","D. decisively"],
    ans:1,
    keyword:"decide",
    correct_word:"decision",
    pos:"Danh từ (Noun)",
    suffix:"-sion → Danh từ",
    explain_short:"Sau 'make a' (mạo từ 'a') → cần DANH TỪ. decide → decision",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. decision</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">You must make a <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"a"</b> (mạo từ không xác định) = cần DANH TỪ</li>
          <li>→ "make a decision" là cụm động từ cố định quan trọng</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">decide (V)</span><span>→</span><span class="suffix-pill">deci + sion</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">decision (N)</span></div>
        <div class="ex-card mt-2">decision = quyết định<br>Hậu tố <b>-sion/-tion/-ation</b> biến ĐỘNG TỪ → DANH TỪ</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. decide — Động từ (V): quyết định. Không dùng sau "a" (mạo từ cần N)</div>
        <div class="wrong-opt">C. decisive — Tính từ (Adj): quyết đoán. Không dùng sau "a"</div>
        <div class="wrong-opt">D. decisively — Trạng từ (Adv): một cách quyết đoán. Không dùng sau "a"</div>
      </div>
      <div class="ex-card">📌 Cụm quan trọng: make a <b>decision</b> = đưa ra quyết định | take a <b>decision</b> = đưa ra quyết định</div>
    `
  },
  {
    id:14,
    q:"He is interested in the __________ of old buildings.",
    vi:"Anh ấy quan tâm đến __________ các công trình cổ.",
    opts:["A. preserve","B. preservation","C. preservative","D. preserved"],
    ans:1,
    keyword:"preserve",
    correct_word:"preservation",
    pos:"Danh từ (Noun)",
    suffix:"-ation → Danh từ",
    explain_short:"Sau 'the' và trước 'of' → cần DANH TỪ. preserve → preservation",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. preservation</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">He is interested in the <u>__________</u> of old buildings.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"the"</b> (mạo từ) = cần DANH TỪ</li>
          <li>→ Trước <b style="color:var(--accent)">"of old buildings"</b> (cụm giới từ bổ nghĩa) = xác nhận DANH TỪ</li>
          <li>→ Cấu trúc: interested in + the + N + of = quan tâm đến việc...</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">preserve (V)</span><span>→</span><span class="suffix-pill">preserv + ation</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">preservation (N)</span></div>
        <div class="ex-card mt-2">preservation = sự bảo tồn, bảo quản<br>preserve = bảo tồn (V) | preserved = được bảo tồn (Adj/V3) | preservative = chất bảo quản (N/Adj)</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. preserve — Động từ (V): bảo tồn. Không đặt sau "the"</div>
        <div class="wrong-opt">C. preservative — Danh từ (N): chất bảo quản (thức ăn). Sai nghĩa — dùng cho thực phẩm, không phải tòa nhà</div>
        <div class="wrong-opt">D. preserved — Quá khứ phân từ (V3/Adj): được bảo tồn. Không đặt sau "the" làm chủ thể danh từ</div>
      </div>
      <div class="ex-card">📌 "the preservation of..." = sự bảo tồn của... | preservation of culture (văn hóa) | preservation of the environment (môi trường)</div>
    `
  },
  {
    id:15,
    q:"He has very high __________ of his only son.",
    vi:"Anh ấy có __________ rất cao đối với con trai duy nhất của mình.",
    opts:["A. expect","B. expectation","C. expected","D. expectedly"],
    ans:1,
    keyword:"expect",
    correct_word:"expectation",
    pos:"Danh từ (Noun)",
    suffix:"-ation → Danh từ",
    explain_short:"Sau 'high' (tính từ) → cần DANH TỪ. expect → expectation",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. expectation</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">He has very high <u>__________</u> of his only son.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau tính từ <b style="color:var(--accent)">"high"</b> = cần DANH TỪ (Adj + N)</li>
          <li>→ Sau "has" (có) = tân ngữ là DANH TỪ</li>
          <li>→ Cụm: "have high expectations of sb" = đặt kỳ vọng cao vào ai</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">expect (V)</span><span>→</span><span class="suffix-pill">expect + ation</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">expectation (N)</span></div>
        <div class="ex-card mt-2">expectation = kỳ vọng, sự mong đợi</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. expect — Động từ (V): mong đợi. Không đặt sau tính từ "high"</div>
        <div class="wrong-opt">C. expected — Tính từ/V3: được mong đợi. Không đặt sau "high" làm danh từ</div>
        <div class="wrong-opt">D. expectedly — Trạng từ (Adv). Không đặt sau "high" (tính từ cần N theo sau)</div>
      </div>
      <div class="ex-card">📌 "have high expectations" = đặt kỳ vọng cao | "meet expectations" = đáp ứng kỳ vọng | "beyond expectations" = vượt ngoài kỳ vọng</div>
    `
  },
  {
    id:16,
    q:"The __________ of industry causes air pollution.",
    vi:"__________ của công nghiệp gây ô nhiễm không khí.",
    opts:["A. develop","B. development","C. developing","D. developed"],
    ans:1,
    keyword:"develop",
    correct_word:"development",
    pos:"Danh từ (Noun)",
    suffix:"-ment → Danh từ",
    explain_short:"Sau 'The' (mạo từ) và trước 'of' → cần DANH TỪ. develop + ment",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. development</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">The <u>__________</u> of industry causes air pollution.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"The"</b> (mạo từ) = cần DANH TỪ</li>
          <li>→ Trước <b style="color:var(--accent)">"of industry"</b> = cụm giới từ bổ nghĩa cho danh từ</li>
          <li>→ Là CHỦ NGỮ của câu + "causes" (động từ)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">develop (V)</span><span>→</span><span class="suffix-pill">develop + ment</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">development (N)</span></div>
        <div class="ex-card mt-2">development = sự phát triển | Hậu tố <b>-ment</b>: develop→development, entertain→entertainment</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. develop — Động từ (V): phát triển. Không đặt sau "The"</div>
        <div class="wrong-opt">C. developing — Tính từ/V-ing: đang phát triển. "The developing" có thể đúng nhưng thiếu danh từ theo sau</div>
        <div class="wrong-opt">D. developed — Tính từ/V3: đã phát triển. "The developed of" sai ngữ pháp</div>
      </div>
      <div class="ex-card">📌 "the development of..." = sự phát triển của... | sustainable development = phát triển bền vững</div>
    `
  },
  {
    id:17,
    q:"All of us need the __________ of fresh air.",
    vi:"Tất cả chúng ta đều cần __________ không khí trong lành.",
    opts:["A. provide","B. provided","C. provision","D. providedly"],
    ans:2,
    keyword:"provide",
    correct_word:"provision",
    pos:"Danh từ (Noun)",
    suffix:"-sion → Danh từ",
    explain_short:"Sau 'the' và trước 'of' → cần DANH TỪ. provide → provision",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. provision</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">All of us need the <u>__________</u> of fresh air.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"the"</b> = cần DANH TỪ</li>
          <li>→ Sau "need" (cần) = tân ngữ là DANH TỪ</li>
          <li>→ "the provision of sth" = việc cung cấp cái gì</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">provide (V)</span><span>→</span><span class="suffix-pill">provi + sion</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">provision (N)</span></div>
        <div class="ex-card mt-2">provision = sự cung cấp, điều khoản | provide = cung cấp (V)</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. provide — Động từ (V). Không đặt sau "the"</div>
        <div class="wrong-opt">B. provided — V3/Liên từ: với điều kiện là. Không phù hợp ngữ cảnh</div>
        <div class="wrong-opt">D. providedly — Không tồn tại trong tiếng Anh!</div>
      </div>
      <div class="ex-card">📌 provision of food/water/care = việc cung cấp thực phẩm/nước/sự chăm sóc</div>
    `
  },
  {
    id:18,
    q:"The __________ of water pollution is an important thing for human life.",
    vi:"__________ ô nhiễm nước là điều quan trọng đối với cuộc sống con người.",
    opts:["A. prevention","B. prevented","C. preventive","D. preventably"],
    ans:0,
    keyword:"prevent",
    correct_word:"prevention",
    pos:"Danh từ (Noun)",
    suffix:"-tion → Danh từ",
    explain_short:"Sau 'The' và trước 'of' → cần DANH TỪ. prevent → prevention",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. prevention</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">The <u>__________</u> of water pollution is an important thing...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"The"</b> = cần DANH TỪ</li>
          <li>→ Trước <b style="color:var(--accent)">"of water pollution"</b> = bổ nghĩa cho danh từ</li>
          <li>→ Chủ ngữ của "is" → DANH TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">prevent (V)</span><span>→</span><span class="suffix-pill">prevent + ion</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">prevention (N)</span></div>
        <div class="ex-card mt-2">prevention = sự phòng ngừa, ngăn chặn<br>"Prevention is better than cure" — Phòng bệnh hơn chữa bệnh (câu châm ngôn nổi tiếng!)</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">B. prevented — V3/Adj: đã được ngăn chặn. Không đặt sau "The" làm chủ ngữ</div>
        <div class="wrong-opt">C. preventive — Tính từ (Adj): mang tính phòng ngừa. "The preventive of" sai ngữ pháp</div>
        <div class="wrong-opt">D. preventably — Không tồn tại trong tiếng Anh!</div>
      </div>
      <div class="ex-card">📌 "the prevention of + N" = sự phòng ngừa... | fire prevention = phòng cháy | crime prevention = phòng chống tội phạm</div>
    `
  },
  {
    id:19,
    q:"Farmers need to __________ crops.",
    vi:"Nông dân cần phải __________ cây trồng.",
    opts:["A. rotation","B. rotate","C. rotational","D. rotationally"],
    ans:1,
    keyword:"rotate",
    correct_word:"rotate",
    pos:"Động từ (Verb)",
    suffix:"(từ gốc là động từ)",
    explain_short:"Sau 'need to' → cần ĐỘNG TỪ nguyên thể. rotate = luân phiên, xoay vòng",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. rotate</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Farmers need to <u>__________</u> crops.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"need to"</b> = cần ĐỘNG TỪ nguyên thể (bare infinitive)</li>
          <li>→ Quy tắc: need to + V (nguyên thể không "to" nữa)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">📚 Từ vựng:</div>
        <div class="ex-card"><b>rotate</b> (V) = xoay vòng, luân phiên<br><b>rotation</b> (N) = sự luân phiên | crop rotation = luân canh cây trồng</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. rotation — Danh từ (N): sự luân phiên. Không đặt sau "need to" (cần V nguyên thể)</div>
        <div class="wrong-opt">C. rotational — Tính từ (Adj): luân phiên. Không đặt sau "need to"</div>
        <div class="wrong-opt">D. rotationally — Trạng từ (Adv). Không đặt sau "need to"</div>
      </div>
      <div class="ex-card">📌 Cụm quan trọng: crop rotation = luân canh (nông nghiệp) | need to + V: need to rotate, need to grow</div>
    `
  },
  {
    id:20,
    q:"We are discussing a problem of great __________.",
    vi:"Chúng ta đang thảo luận về một vấn đề có __________ lớn.",
    opts:["A. important","B. importance","C. importantly","D. importing"],
    ans:1,
    keyword:"important",
    correct_word:"importance",
    pos:"Danh từ (Noun)",
    suffix:"-ance → Danh từ",
    explain_short:"Sau 'great' (tính từ) và trong cụm 'of great __' → cần DANH TỪ",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. importance</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">...a problem of great <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau tính từ <b style="color:var(--accent)">"great"</b> = cần DANH TỪ</li>
          <li>→ Trong cụm <b style="color:var(--accent)">"of great + N"</b> = cấu trúc cố định</li>
          <li>→ Cụm: "of great importance" = có tầm quan trọng lớn</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">important (Adj)</span><span>→</span><span class="suffix-pill">import + ance</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">importance (N)</span></div>
        <div class="ex-card mt-2">importance = tầm quan trọng | Hậu tố <b>-ance</b>: perform→performance, attend→attendance</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. important — Tính từ (Adj): quan trọng. Không đặt sau "great" (Adj+Adj không đúng)</div>
        <div class="wrong-opt">C. importantly — Trạng từ (Adv). Không đặt sau "great"</div>
        <div class="wrong-opt">D. importing — V-ing/Adj: nhập khẩu. Sai nghĩa hoàn toàn</div>
      </div>
      <div class="ex-card">📌 "of great importance" = vô cùng quan trọng | "of little importance" = không quan trọng lắm</div>
    `
  },
  {
    id:21,
    q:"Copperheads are __________ snakes.",
    vi:"Rắn đầu đồng là loài rắn __________.",
    opts:["A. poison","B. poisonous","C. poisonously","D. poisons"],
    ans:1,
    keyword:"poison",
    correct_word:"poisonous",
    pos:"Tính từ (Adjective)",
    suffix:"-ous → Tính từ",
    explain_short:"Trước danh từ 'snakes' → cần TÍNH TỪ. poison + ous = poisonous",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. poisonous</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Copperheads are <u>__________</u> snakes.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Trước danh từ <b style="color:var(--accent)">"snakes"</b> = cần TÍNH TỪ bổ nghĩa</li>
          <li>→ Sau "are" (to be) = vị ngữ, có thể là Adj</li>
          <li>→ Cấu trúc: be + Adj + N (bổ ngữ danh từ)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">poison (N)</span><span>→</span><span class="suffix-pill">poison + ous</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">poisonous (Adj)</span></div>
        <div class="ex-card mt-2">poisonous = độc hại, có nọc độc<br>Hậu tố <b>-ous</b> biến DANH TỪ → TÍNH TỪ: danger→dangerous, industry→industrious</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. poison — Danh từ/Động từ: chất độc/đầu độc. Không đứng trước N làm tính từ</div>
        <div class="wrong-opt">C. poisonously — Trạng từ (Adv). Không đứng trước N</div>
        <div class="wrong-opt">D. poisons — Động từ: đầu độc (số 3 ngôi). Sai từ loại hoàn toàn</div>
      </div>
      <div class="ex-card">📌 Copperhead (rắn đầu đồng) là loài rắn độc ở Bắc Mỹ. "poisonous snakes" = rắn độc</div>
    `
  },
  {
    id:22,
    q:"The cost of __________ must be paid by the buyer.",
    vi:"Chi phí __________ phải do người mua trả.",
    opts:["A. carry","B. carriage","C. carrying","D. carried"],
    ans:1,
    keyword:"carry",
    correct_word:"carriage",
    pos:"Danh từ (Noun)",
    suffix:"-age → Danh từ",
    explain_short:"Sau 'of' (giới từ) → cần DANH TỪ. carry + age = carriage (sự vận chuyển)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. carriage</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">The cost of <u>__________</u> must be paid by the buyer.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau giới từ <b style="color:var(--accent)">"of"</b> = cần DANH TỪ</li>
          <li>→ "The cost of + N" = chi phí của... (cụm danh từ)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">carry (V)</span><span>→</span><span class="suffix-pill">carri + age</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">carriage (N)</span></div>
        <div class="ex-card mt-2">carriage = sự vận chuyển hàng hóa; cũng có nghĩa là "toa tàu" hoặc "xe ngựa"<br>Hậu tố <b>-age</b>: marry→marriage, carry→carriage</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. carry — Động từ (V): mang, vận chuyển. Sau "of" cần N, không phải V nguyên thể</div>
        <div class="wrong-opt">C. carrying — V-ing: đang vận chuyển. Có thể dùng sau giới từ nhưng "the cost of carrying" đúng hơn về nghĩa "phí vận chuyển" → tuy nhiên "carriage" là từ chuyên biệt hơn</div>
        <div class="wrong-opt">D. carried — V3: đã được vận chuyển. Không phù hợp</div>
      </div>
      <div class="ex-card">📌 "cost of carriage" = chi phí vận chuyển | "carriage free" = miễn phí vận chuyển | "carriage paid" = đã trả phí vận chuyển</div>
    `
  },
  {
    id:23,
    q:"We have to __________ the natural resources of our country.",
    vi:"Chúng ta phải __________ tài nguyên thiên nhiên của đất nước.",
    opts:["A. conservation","B. conserve","C. conserved","D. conservational"],
    ans:1,
    keyword:"conserve",
    correct_word:"conserve",
    pos:"Động từ (Verb)",
    suffix:"(từ gốc là động từ)",
    explain_short:"Sau 'have to' → cần ĐỘNG TỪ nguyên thể. conserve = bảo tồn",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. conserve</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">We have to <u>__________</u> the natural resources...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"have to"</b> = cần ĐỘNG TỪ nguyên thể</li>
          <li>→ Quy tắc: have to / has to / had to + V (nguyên thể)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">📚 Từ vựng:</div>
        <div class="ex-card"><b>conserve</b> (V) = bảo tồn, giữ gìn<br><b>conservation</b> (N) = sự bảo tồn<br><b>conservational</b> — không tồn tại phổ biến</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. conservation — Danh từ (N): sự bảo tồn. Không đặt sau "have to"</div>
        <div class="wrong-opt">C. conserved — V3: đã được bảo tồn. Không đặt sau "have to" làm V chính</div>
        <div class="wrong-opt">D. conservational — Không phổ biến, không chuẩn</div>
      </div>
      <div class="ex-card">📌 conserve energy = tiết kiệm năng lượng | conserve water = tiết kiệm nước | conservation of wildlife = bảo tồn động vật hoang dã</div>
    `
  },
  {
    id:24,
    q:"The industrial __________ will lead to the country's prosperity.",
    vi:"__________ công nghiệp sẽ dẫn đến sự thịnh vượng của đất nước.",
    opts:["A. develop","B. development","C. developing","D. developed"],
    ans:1,
    keyword:"develop",
    correct_word:"development",
    pos:"Danh từ (Noun)",
    suffix:"-ment → Danh từ",
    explain_short:"Sau tính từ 'industrial' → cần DANH TỪ (Adj + N). develop + ment",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. development</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">The industrial <u>__________</u> will lead to...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau tính từ <b style="color:var(--accent)">"industrial"</b> = cần DANH TỪ (Adj bổ nghĩa cho N)</li>
          <li>→ Sau "The" = cần DANH TỪ</li>
          <li>→ Là CHỦ NGỮ của "will lead"</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">develop (V)</span><span>→</span><span class="suffix-pill">develop + ment</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">development (N)</span></div>
        <div class="ex-card mt-2">industrial development = sự phát triển công nghiệp<br>Cụm danh từ: Adj + N = industrial + development</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. develop — Động từ (V). Không đặt sau tính từ "industrial"</div>
        <div class="wrong-opt">C. developing — Tính từ/V-ing: đang phát triển. "The industrial developing" sai ngữ pháp (2 tính từ không đứng cạnh nhau như vậy)</div>
        <div class="wrong-opt">D. developed — V3/Adj: phát triển. "The industrial developed" sai ngữ pháp</div>
      </div>
      <div class="ex-card">📌 industrial development = phát triển công nghiệp | economic development = phát triển kinh tế | sustainable development = phát triển bền vững</div>
    `
  },
  {
    id:25,
    q:"Forests must be managed __________",
    vi:"Rừng phải được quản lý __________",
    opts:["A. careless","B. careful","C. carefully","D. care"],
    ans:2,
    keyword:"care",
    correct_word:"carefully",
    pos:"Trạng từ (Adverb)",
    suffix:"-fully → Trạng từ (careful + ly)",
    explain_short:"Sau động từ 'managed' → cần TRẠNG TỪ. careful + ly = carefully",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. carefully</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Forests must be managed <u>__________</u></div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau động từ <b style="color:var(--accent)">"managed"</b> = cần TRẠNG TỪ (bổ nghĩa cách thức)</li>
          <li>→ Vị trí cuối câu sau V bị động = TRẠNG TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">care (N/V)</span><span>→</span><span class="suffix-pill">care + ful</span><span>→</span><span class="suffix-pill">careful (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">careful + ly = carefully (Adv)</span></div>
        <div class="ex-card mt-2">carefully = một cách cẩn thận, cẩn trọng</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. careless — Tính từ (Adj): bất cẩn. Sai từ loại + sai nghĩa (ngược nghĩa)</div>
        <div class="wrong-opt">B. careful — Tính từ (Adj): cẩn thận. Tính từ không bổ nghĩa cho động từ</div>
        <div class="wrong-opt">D. care — Danh từ/Động từ. Không dùng làm trạng từ</div>
      </div>
      <div class="ex-card">📌 manage carefully = quản lý cẩn thận | handle carefully = xử lý cẩn thận | drive carefully = lái xe cẩn thận</div>
    `
  },
  {
    id:26,
    q:"Her _________ from school without any excuse made the teacher angry.",
    vi:"Sự _________ khỏi trường của cô ấy mà không có lý do đã khiến giáo viên tức giận.",
    opts:["A. absent","B. absence","C. absently","D. A and B"],
    ans:1,
    keyword:"absent",
    correct_word:"absence",
    pos:"Danh từ (Noun)",
    suffix:"-ence → Danh từ",
    explain_short:"Sau 'Her' (tính từ sở hữu) → cần DANH TỪ. absent (Adj) → absence (N)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. absence</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Her <u>_________</u> from school without any excuse made the teacher angry.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"Her"</b> (tính từ sở hữu) = cần DANH TỪ</li>
          <li>→ Là CHỦ NGỮ của "made" → phải là DANH TỪ</li>
          <li>→ "Her absence from school" = sự vắng mặt của cô ấy ở trường</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">absent (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">absence (N)</span></div>
        <div class="ex-card mt-2">absence = sự vắng mặt | Hậu tố <b>-ence/-ance</b>: depend→dependence, attend→attendance</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. absent — Tính từ (Adj): vắng mặt. Không đặt sau "Her" (tính từ sở hữu cần N)</div>
        <div class="wrong-opt">C. absently — Trạng từ (Adv): một cách lơ đãng. Sai từ loại</div>
        <div class="wrong-opt">D. A and B — Không thể đúng vì A (absent) sai từ loại</div>
      </div>
      <div class="ex-card">📌 "in the absence of" = trong trường hợp vắng mặt của | "absence makes the heart grow fonder" = xa mặt cách lòng (theo nghĩa ngược lại)</div>
    `
  },
  {
    id:27,
    q:"She can't stand his __________.",
    vi:"Cô ấy không thể chịu đựng được __________ của anh ấy.",
    opts:["A. rude","B. rudely","C. rudeness","D. rudest"],
    ans:2,
    keyword:"rude",
    correct_word:"rudeness",
    pos:"Danh từ (Noun)",
    suffix:"-ness → Danh từ",
    explain_short:"Sau 'his' (tính từ sở hữu) → cần DANH TỪ. rude + ness = rudeness",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. rudeness</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">She can't stand his <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"his"</b> (tính từ sở hữu) = cần DANH TỪ</li>
          <li>→ Sau "stand" = tân ngữ → DANH TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">rude (Adj)</span><span>→</span><span class="suffix-pill">rude + ness</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">rudeness (N)</span></div>
        <div class="ex-card mt-2">rudeness = sự thô lỗ, sự bất lịch sự</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. rude — Tính từ (Adj): thô lỗ. Không đặt sau "his"</div>
        <div class="wrong-opt">B. rudely — Trạng từ (Adv): một cách thô lỗ. Không đặt sau "his"</div>
        <div class="wrong-opt">D. rudest — So sánh nhất của Adj: thô lỗ nhất. Sai từ loại</div>
      </div>
      <div class="ex-card">📌 can't stand = không thể chịu đựng được | stand + N: "She can't stand his rudeness/arrogance/laziness"</div>
    `
  },
  {
    id:28,
    q:"Your new dress makes you more __________.",
    vi:"Chiếc váy mới của bạn làm bạn trở nên __________ hơn.",
    opts:["A. beauty","B. beautiful","C. beautify","D. beautifully"],
    ans:1,
    keyword:"beauty",
    correct_word:"beautiful",
    pos:"Tính từ (Adjective)",
    suffix:"-ful → Tính từ",
    explain_short:"Cấu trúc 'make + O + Adj' → cần TÍNH TỪ. beauty → beautiful",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. beautiful</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Your new dress makes you more <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Cấu trúc: <b style="color:var(--accent)">make + O (you) + Adj</b> = làm ai đó trở nên...</li>
          <li>→ Sau "more" = cần TÍNH TỪ (so sánh hơn: more + Adj)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">beauty (N)</span><span>→</span><span class="suffix-pill">beauti + ful</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">beautiful (Adj)</span></div>
        <div class="ex-card mt-2">beautiful = xinh đẹp | Hậu tố <b>-ful</b>: beauty→beautiful, success→successful, care→careful</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. beauty — Danh từ (N): vẻ đẹp. Cấu trúc "make + O + N" cần tân ngữ, không phải bổ ngữ N</div>
        <div class="wrong-opt">C. beautify — Động từ (V): làm đẹp. Sau "more" cần Adj, không phải V</div>
        <div class="wrong-opt">D. beautifully — Trạng từ (Adv). Cấu trúc "make + O + Adv" sai ngữ pháp</div>
      </div>
      <div class="ex-card">📌 Cấu trúc: make/keep/find + O + Adj: make you <b>beautiful</b> | keep the room <b>clean</b> | find it <b>difficult</b></div>
    `
  },
  {
    id:29,
    q:"You should do these exercises __________",
    vi:"Bạn nên làm những bài tập này __________",
    opts:["A. quick","B. quickly","C. quickness","D. be quick"],
    ans:1,
    keyword:"quick",
    correct_word:"quickly",
    pos:"Trạng từ (Adverb)",
    suffix:"-ly → Trạng từ",
    explain_short:"Sau động từ 'do' → cần TRẠNG TỪ. quick + ly = quickly",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. quickly</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">You should do these exercises <u>__________</u></div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau động từ <b style="color:var(--accent)">"do"</b> (và tân ngữ "these exercises") = TRẠNG TỪ chỉ cách thức</li>
          <li>→ Vị trí cuối câu sau V = TRẠNG TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">quick (Adj)</span><span>→</span><span class="suffix-pill">quick + ly</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">quickly (Adv)</span></div>
        <div class="ex-card mt-2">quickly = một cách nhanh chóng</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. quick — Tính từ (Adj): nhanh. Tính từ không bổ nghĩa cho động từ "do"</div>
        <div class="wrong-opt">C. quickness — Danh từ (N): sự nhanh nhẹn. Không đặt cuối câu làm trạng từ</div>
        <div class="wrong-opt">D. be quick — Cụm mệnh lệnh: hãy nhanh lên. Không thể đặt cuối câu sau tân ngữ</div>
      </div>
      <div class="ex-card">📌 do exercises quickly (nhanh) | do exercises carefully (cẩn thận) | do exercises regularly (đều đặn)</div>
    `
  },
  {
    id:30,
    q:"There are a lot of __________ differences in England.",
    vi:"Có rất nhiều sự khác biệt __________ ở Anh.",
    opts:["A. region","B. regional","C. regionally","D. regions"],
    ans:1,
    keyword:"region",
    correct_word:"regional",
    pos:"Tính từ (Adjective)",
    suffix:"-al → Tính từ",
    explain_short:"Trước danh từ 'differences' → cần TÍNH TỪ. region + al = regional",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. regional</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">There are a lot of <u>__________</u> differences in England.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Trước danh từ <b style="color:var(--accent)">"differences"</b> = cần TÍNH TỪ bổ nghĩa</li>
          <li>→ Vị trí: Adj + N = regional + differences</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">region (N)</span><span>→</span><span class="suffix-pill">region + al</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">regional (Adj)</span></div>
        <div class="ex-card mt-2">regional = thuộc về vùng miền, địa phương<br>Hậu tố <b>-al</b>: nation→national, nature→natural, region→regional</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. region — Danh từ (N): vùng, miền. Không đứng trước N làm Adj ("region differences" sai)</div>
        <div class="wrong-opt">C. regionally — Trạng từ (Adv). Không đứng trước N</div>
        <div class="wrong-opt">D. regions — Danh từ số nhiều. Hai danh từ không đứng cạnh nhau trong cụm này</div>
      </div>
      <div class="ex-card">📌 regional differences = sự khác biệt vùng miền | regional dialect = phương ngữ | regional food = ẩm thực địa phương</div>
    `
  },
  {
    id:31,
    q:"If you need any help, you can ask Tom. He's very __________.",
    vi:"Nếu bạn cần giúp đỡ, bạn có thể hỏi Tom. Anh ấy rất __________.",
    opts:["A. help","B. helpful","C. helping","D. helped"],
    ans:1,
    keyword:"help",
    correct_word:"helpful",
    pos:"Tính từ (Adjective)",
    suffix:"-ful → Tính từ",
    explain_short:"Sau 'very' và 'He's' (to be) → cần TÍNH TỪ. help + ful = helpful",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. helpful</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">He's very <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"He's"</b> (He is — to be) = cần TÍNH TỪ</li>
          <li>→ Sau <b style="color:var(--accent)">"very"</b> = trạng từ bổ nghĩa → cần TÍNH TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">help (N/V)</span><span>→</span><span class="suffix-pill">help + ful</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">helpful (Adj)</span></div>
        <div class="ex-card mt-2">helpful = sẵn lòng giúp đỡ, hữu ích | helpless = bất lực | helpfully = một cách hữu ích</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. help — Danh từ/Động từ. Không dùng sau "very" + to be làm vị ngữ tính từ</div>
        <div class="wrong-opt">C. helping — V-ing: đang giúp. Không dùng sau "is very"</div>
        <div class="wrong-opt">D. helped — V3: đã được giúp. Sai nghĩa + sai từ loại</div>
      </div>
      <div class="ex-card">📌 be helpful = hữu ích | be useful = có ích | be supportive = hỗ trợ | be kind = tốt bụng</div>
    `
  },
  {
    id:32,
    q:"The little boy felt very __________ because his parents did not let him go with them.",
    vi:"Cậu bé cảm thấy rất __________ vì bố mẹ không cho đi cùng.",
    opts:["A. disappoint","B. disappointment","C. disappointed","D. disappointing"],
    ans:2,
    keyword:"disappoint",
    correct_word:"disappointed",
    pos:"Tính từ (Adjective) — đuôi -ed",
    suffix:"-ed → Tính từ chỉ cảm xúc của NGƯỜI",
    explain_short:"Sau 'felt' (động từ cảm xúc) → cần TÍNH TỪ. Chủ thể là NGƯỜI → dùng -ed (disappointed)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. disappointed</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">The little boy felt very <u>__________</u>...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"felt"</b> (động từ cảm xúc/tri giác) = cần TÍNH TỪ</li>
          <li>→ Chủ ngữ là <b style="color:var(--accent)">"The little boy"</b> (NGƯỜI) → dùng <b>-ed</b></li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🎯 Quy tắc -ed vs -ing (QUAN TRỌNG):</div>
        <div class="ex-card">
          <div class="correct-opt">✅ <b>-ED</b>: dùng cho NGƯỜI (chủ thể trải nghiệm cảm xúc)<br>The boy felt <b>disappointed</b> (cậu bé cảm thấy thất vọng)</div>
          <div class="wrong-opt">❌ <b>-ING</b>: dùng cho NGUYÊN NHÂN gây ra cảm xúc<br>The result was <b>disappointing</b> (kết quả gây thất vọng)</div>
        </div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. disappoint — Động từ (V): làm thất vọng. Không dùng sau "felt"</div>
        <div class="wrong-opt">B. disappointment — Danh từ (N): sự thất vọng. Không dùng sau "felt"</div>
        <div class="wrong-opt">D. disappointing — Tính từ (Adj)-ing: gây thất vọng. Dùng cho nguyên nhân, không phải người</div>
      </div>
      <div class="ex-card">📌 I am <b>bored</b> (tôi chán) ↔ The movie is <b>boring</b> (phim chán) | I am <b>excited</b> ↔ It is <b>exciting</b></div>
    `
  },
  {
    id:33,
    q:"The surgeons tried their best to save his life, but unfortunately the operation wasn't __________.",
    vi:"Các bác sĩ phẫu thuật đã cố hết sức để cứu anh ấy, nhưng tiếc là ca phẫu thuật không __________.",
    opts:["A. success","B. successful","C. succeed","D. successfully"],
    ans:1,
    keyword:"success",
    correct_word:"successful",
    pos:"Tính từ (Adjective)",
    suffix:"-ful → Tính từ",
    explain_short:"Sau 'wasn't' (to be) → cần TÍNH TỪ. success + ful = successful",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. successful</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">...the operation wasn't <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"wasn't"</b> (was not — to be phủ định) = cần TÍNH TỪ</li>
          <li>→ Cấu trúc: S + be + Adj (vị ngữ tính từ)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">success (N)</span><span>→</span><span class="suffix-pill">success + ful</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">successful (Adj)</span></div>
        <div class="ex-card mt-2">successful = thành công | successfully = một cách thành công | succeed = thành công (V)</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. success — Danh từ (N): thành công. "The operation wasn't success" thiếu mạo từ, sai cấu trúc</div>
        <div class="wrong-opt">C. succeed — Động từ (V): thành công. Không dùng sau "wasn't" (to be)</div>
        <div class="wrong-opt">D. successfully — Trạng từ (Adv). Không dùng sau "wasn't" (to be cần Adj)</div>
      </div>
      <div class="ex-card">📌 be successful = thành công | a successful operation = ca phẫu thuật thành công | succeed in doing = thành công trong việc làm gì</div>
    `
  },
  {
    id:34,
    q:"How many __________ were there in all?",
    vi:"Có tổng cộng bao nhiêu __________ tất cả?",
    opts:["A. compete","B. competitions","C. competitive","D. competitively"],
    ans:1,
    keyword:"compete",
    correct_word:"competitions",
    pos:"Danh từ (Noun) — số nhiều",
    suffix:"-ition → Danh từ (số nhiều -s)",
    explain_short:"Sau 'many' → cần DANH TỪ số nhiều. compete → competition → competitions",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. competitions</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">How many <u>__________</u> were there in all?</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau <b style="color:var(--accent)">"many"</b> = cần DANH TỪ đếm được, số nhiều</li>
          <li>→ "How many + N số nhiều" = bao nhiêu cái...</li>
          <li>→ "were" (số nhiều) xác nhận cần N số nhiều</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">compete (V)</span><span>→</span><span class="suffix-pill">competi + tion</span><span>→</span><span class="suffix-pill">competition (N)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">competitions (N số nhiều)</span></div>
        <div class="ex-card mt-2">competition = cuộc thi, cuộc cạnh tranh | competitions = nhiều cuộc thi</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. compete — Động từ (V): cạnh tranh, thi đấu. Không đặt sau "many"</div>
        <div class="wrong-opt">C. competitive — Tính từ (Adj): cạnh tranh. Không đặt sau "many"</div>
        <div class="wrong-opt">D. competitively — Trạng từ (Adv). Không đặt sau "many"</div>
      </div>
      <div class="ex-card">📌 How many competitions? = bao nhiêu cuộc thi? | enter a competition = tham gia cuộc thi | win a competition = thắng cuộc thi</div>
    `
  },
  {
    id:35,
    q:"__________ waste is one of the causes of air pollution.",
    vi:"Rác thải __________ là một trong những nguyên nhân gây ô nhiễm không khí.",
    opts:["A. industrious","B. industrial","C. industry","D. industrialize"],
    ans:1,
    keyword:"industry",
    correct_word:"industrial",
    pos:"Tính từ (Adjective)",
    suffix:"-al → Tính từ",
    explain_short:"Trước danh từ 'waste' → cần TÍNH TỪ. industry → industrial (KHÔNG phải industrious!)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. industrial</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card"><u>__________</u> waste is one of the causes of air pollution.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Trước danh từ <b style="color:var(--accent)">"waste"</b> = cần TÍNH TỪ</li>
          <li>→ Nghĩa: "rác thải công nghiệp" → industrial waste</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">⚠️ Phân biệt QUAN TRỌNG:</div>
        <div class="ex-card">
          <div class="correct-opt">✅ <b>industrial</b> (Adj) = thuộc về công nghiệp: industrial waste, industrial area</div>
          <div class="wrong-opt">❌ <b>industrious</b> (Adj) = chăm chỉ, siêng năng: an industrious student</div>
        </div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. industrious — Tính từ (Adj): chăm chỉ. SAI NGHĨA HOÀN TOÀN! "industrious waste" = rác thải chăm chỉ??? Vô nghĩa!</div>
        <div class="wrong-opt">C. industry — Danh từ (N): công nghiệp. Hai danh từ không đứng cạnh nhau tạo cụm Adj+N kiểu này</div>
        <div class="wrong-opt">D. industrialize — Động từ (V): công nghiệp hóa. Sai từ loại</div>
      </div>
      <div class="ex-card">📌 industrial (công nghiệp): industrial waste / zone / revolution | industrious (chăm chỉ): industrious student / worker</div>
    `
  },
  {
    id:36,
    q:"Mount Vesuvius is an __________ volcano.",
    vi:"Núi Vesuvius là một ngọn núi lửa __________.",
    opts:["A. act","B. active","C. action","D. activity"],
    ans:1,
    keyword:"act",
    correct_word:"active",
    pos:"Tính từ (Adjective)",
    suffix:"-ive → Tính từ",
    explain_short:"Trước danh từ 'volcano' → cần TÍNH TỪ. act → active (đang hoạt động)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. active</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">Mount Vesuvius is an <u>__________</u> volcano.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau "an" (mạo từ) và trước "volcano" (N) = cần TÍNH TỪ</li>
          <li>→ Dùng "an" (không phải "a") → từ bắt đầu bằng nguyên âm: <b>a</b>ctive ✓</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">act (V/N)</span><span>→</span><span class="suffix-pill">act + ive</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">active (Adj)</span></div>
        <div class="ex-card mt-2">active = đang hoạt động, tích cực | "an active volcano" = núi lửa đang hoạt động<br>Hậu tố <b>-ive</b>: act→active, impress→impressive, create→creative</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. act — Động từ/Danh từ. Không đặt sau "an" làm Adj</div>
        <div class="wrong-opt">C. action — Danh từ (N): hành động. Không đặt sau "an" bổ nghĩa cho N khác</div>
        <div class="wrong-opt">D. activity — Danh từ (N): hoạt động. Tương tự C</div>
      </div>
      <div class="ex-card">📌 active volcano = núi lửa đang hoạt động | dormant volcano = núi lửa ngủ yên | extinct volcano = núi lửa đã tắt</div>
    `
  },
  {
    id:37,
    q:"He is confident enough to express his opinion __________.",
    vi:"Anh ấy đủ tự tin để bày tỏ ý kiến của mình __________.",
    opts:["A. comfortable","B. comfort","C. comfortably","D. comforts"],
    ans:2,
    keyword:"comfort",
    correct_word:"comfortably",
    pos:"Trạng từ (Adverb)",
    suffix:"-ably → Trạng từ (comfortable + ly)",
    explain_short:"Sau động từ 'express' → cần TRẠNG TỪ. comfortable + ly = comfortably",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. comfortably</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">He is confident enough to express his opinion <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau động từ <b style="color:var(--accent)">"express"</b> (và tân ngữ "his opinion") = TRẠNG TỪ chỉ cách thức</li>
          <li>→ Vị trí cuối câu = TRẠNG TỪ</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">comfort (N)</span><span>→</span><span class="suffix-pill">comfort + able</span><span>→</span><span class="suffix-pill">comfortable (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">comfortable + ly = comfortably (Adv)</span></div>
        <div class="ex-card mt-2">comfortably = một cách thoải mái, tự tin | "express opinion comfortably" = bày tỏ ý kiến một cách thoải mái</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. comfortable — Tính từ (Adj): thoải mái. Tính từ không bổ nghĩa cho động từ "express"</div>
        <div class="wrong-opt">B. comfort — Danh từ/Động từ: sự thoải mái/an ủi. Không dùng làm trạng từ</div>
        <div class="wrong-opt">D. comforts — Danh từ số nhiều/V số 3 ngôi. Sai từ loại hoàn toàn</div>
      </div>
      <div class="ex-card">📌 express opinion comfortably = bày tỏ ý kiến thoải mái | speak comfortably = nói thoải mái | live comfortably = sống thoải mái</div>
    `
  },
  {
    id:38,
    q:"She is so busy with __________ activities that she has no time for entertainment.",
    vi:"Cô ấy bận rộn với các hoạt động __________ đến mức không có thời gian giải trí.",
    opts:["A. society","B. social","C. socialize","D. socialization"],
    ans:1,
    keyword:"society",
    correct_word:"social",
    pos:"Tính từ (Adjective)",
    suffix:"-al → Tính từ",
    explain_short:"Trước danh từ 'activities' → cần TÍNH TỪ. society → social (xã hội)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. social</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">She is so busy with <u>__________</u> activities...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Trước danh từ <b style="color:var(--accent)">"activities"</b> = cần TÍNH TỪ bổ nghĩa</li>
          <li>→ "social activities" = các hoạt động xã hội</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">society (N)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">social (Adj)</span><span style="font-size:12px;color:var(--text-soft)">(hậu tố -al)</span></div>
        <div class="ex-card mt-2">social = thuộc về xã hội, giao tiếp xã hội<br>society = xã hội (N) | social = xã hội (Adj) | socialize = giao tiếp xã hội (V) | socialization = sự xã hội hóa (N)</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. society — Danh từ (N): xã hội. Không đứng trước N làm Adj</div>
        <div class="wrong-opt">C. socialize — Động từ (V): giao lưu. Không đứng trước N làm Adj</div>
        <div class="wrong-opt">D. socialization — Danh từ (N): sự xã hội hóa. Không đứng trước N làm Adj</div>
      </div>
      <div class="ex-card">📌 social activities = hoạt động xã hội | social media = mạng xã hội | social skills = kỹ năng giao tiếp</div>
    `
  },
  {
    id:39,
    q:"One day young Faraday attended a lecture given by a __________ scientist, Sir Humphry Davy.",
    vi:"Một ngày nọ, Faraday trẻ tuổi tham dự một bài giảng của một nhà khoa học __________, Sir Humphry Davy.",
    opts:["A. famous","B. fame","C. famously","D. famed"],
    ans:0,
    keyword:"fame",
    correct_word:"famous",
    pos:"Tính từ (Adjective)",
    suffix:"-ous → Tính từ",
    explain_short:"Trước danh từ 'scientist' và sau 'a' → cần TÍNH TỪ. fame → famous",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. famous</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">...a lecture given by a <u>__________</u> scientist...</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau "a" (mạo từ) và trước <b style="color:var(--accent)">"scientist"</b> (N) = cần TÍNH TỪ</li>
          <li>→ Cấu trúc: a + Adj + N = a famous scientist</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">fame (N)</span><span>→</span><span class="suffix-pill">fam + ous</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">famous (Adj)</span></div>
        <div class="ex-card mt-2">famous = nổi tiếng | Hậu tố <b>-ous</b>: fame→famous, danger→dangerous, poison→poisonous</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. (Đúng) — famous là Tính từ ✓</div>
        <div class="wrong-opt">B. fame — Danh từ (N): sự nổi tiếng. Không đặt sau "a" bổ nghĩa cho N khác</div>
        <div class="wrong-opt">C. famously — Trạng từ (Adv): một cách nổi tiếng. Không đặt sau "a"</div>
        <div class="wrong-opt">D. famed — Tính từ/V3: nổi tiếng. Đúng nghĩa nhưng ít tự nhiên hơn "famous" trong văn cảnh này</div>
      </div>
      <div class="ex-card">📌 a famous scientist = nhà khoa học nổi tiếng | world-famous = nổi tiếng thế giới | famous for = nổi tiếng vì</div>
    `
  },
  {
    id:40,
    q:"The traffic policeman stopped him because he was driving __________.",
    vi:"Cảnh sát giao thông đã dừng anh ta lại vì anh ta đang lái xe __________.",
    opts:["A. care","B. careful","C. careless","D. carelessly"],
    ans:3,
    keyword:"care",
    correct_word:"carelessly",
    pos:"Trạng từ (Adverb)",
    suffix:"-lessly → Trạng từ (careless + ly)",
    explain_short:"Sau 'was driving' (động từ) → cần TRẠNG TỪ. Ngữ cảnh bị phạt → careless+ly (bất cẩn)",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. carelessly</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí + ngữ cảnh:</div>
        <div class="ex-card">...he was driving <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau động từ <b style="color:var(--accent)">"was driving"</b> = cần TRẠNG TỪ chỉ cách thức</li>
          <li>→ Ngữ cảnh: <b style="color:#e74c3c">bị cảnh sát dừng xe</b> → lý do phải là TIÊU CỰC → carelessly (bất cẩn)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ:</div>
        <div class="rule-row"><span class="suffix-pill">care (N)</span><span>→</span><span class="suffix-pill">care + less</span><span>→</span><span class="suffix-pill">careless (Adj)</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">careless + ly = carelessly (Adv)</span></div>
        <div class="ex-card mt-2">carelessly = một cách bất cẩn, cẩu thả | careless = bất cẩn (Adj) | carefully = cẩn thận (Adv)</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. care — Danh từ/Động từ. Không dùng làm trạng từ</div>
        <div class="wrong-opt">B. careful — Tính từ (Adj): cẩn thận. Sai từ loại + sai nghĩa (nghĩa tốt, không bị phạt)</div>
        <div class="wrong-opt">C. careless — Tính từ (Adj): bất cẩn. Đúng nghĩa nhưng sai từ loại (cần Adv sau V)</div>
      </div>
      <div class="ex-card">📌 drive carelessly = lái xe bất cẩn | drive carefully = lái xe cẩn thận | reckless driving = lái xe liều lĩnh</div>
    `
  },
  {
    id:41,
    q:"He failed the exam because of his __________.",
    vi:"Anh ấy đã trượt kỳ thi vì __________  của mình.",
    opts:["A. lazy","B. laziness","C. lazily","D. a and c"],
    ans:1,
    keyword:"lazy",
    correct_word:"laziness",
    pos:"Danh từ (Noun)",
    suffix:"-ness → Danh từ (y→i)",
    explain_short:"Sau 'his' (tính từ sở hữu) và sau 'of' (giới từ) → cần DANH TỪ. lazy → laziness",
    explain_detail:`
      <div class="mb-3 p-3 rounded-xl font-700 text-lg" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. laziness</div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🔍 Phân tích vị trí từ trong câu:</div>
        <div class="ex-card">He failed the exam because of his <u>__________</u>.</div>
        <ul class="mt-2 space-y-1 text-sm text-soft">
          <li>→ Sau giới từ <b style="color:var(--accent)">"of"</b> = cần DANH TỪ</li>
          <li>→ Sau <b style="color:var(--accent)">"his"</b> (tính từ sở hữu) = cần DANH TỪ</li>
          <li>→ Cấu trúc: "because of + N" = vì lý do... (sau because of luôn là N)</li>
        </ul>
      </div>
      <div class="mb-3">
        <div class="font-700 text-dark2 mb-1">🧩 Cấu tạo từ + chính tả:</div>
        <div class="rule-row"><span class="suffix-pill">lazy (Adj)</span><span>→</span><span class="suffix-pill">lazi + ness</span><span>→</span><span class="badge-gold px-2 py-1 rounded-lg font-700">laziness (N)</span></div>
        <div class="ex-card mt-2">laziness = sự lười biếng<br>⚠️ Quy tắc chính tả: <b>y → i</b> trước hậu tố: lazy → laz<b>i</b>ness | happy → happ<b>i</b>ness | beauty → beaut<b>i</b>ful</div>
      </div>
      <div class="mb-2"><div class="font-700 text-dark2 mb-1">❌ Phân tích từng đáp án sai:</div>
        <div class="wrong-opt">A. lazy — Tính từ (Adj): lười biếng. Sau "of" và "his" cần DANH TỪ</div>
        <div class="wrong-opt">C. lazily — Trạng từ (Adv): một cách lười biếng. Không đặt sau "of" (giới từ)</div>
        <div class="wrong-opt">D. a and c — Vì cả A và C đều sai từ loại trong câu này</div>
      </div>
      <div class="ex-card">📌 because of + N: because of his <b>laziness</b> | because of the <b>rain</b> | because of + N/V-ing (KHÔNG PHẢI mệnh đề)</div>
    `
  }
];

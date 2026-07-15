const TOPICS = [
  {
    id:'subjunctive',
    icon:'🎭',
    name:'Thức giả định',
    subtitle:'Subjunctive Mood — Tài liệu',
    color:'#9b5de5',
    theoryHTML:SUBJ_THEORY_HTML,
    exercises:[
      { id:'subj_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:SUBJ_EX1 },
      { id:'subj_ex2', title:'Exercise 2 — Luyện tập nâng cao (15 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:SUBJ_EX2 }
    ]
  },
  {
    id:'noun_article',
    icon:'📘',
    name:'Danh từ & Mạo từ',
    subtitle:'Nouns & Articles (A/An/The) — Tài liệu Tuần 1',
    color:'#457B9D',
    theoryHTML:NOUN_ARTICLE_THEORY_HTML,
    exercises:[
      { id:'noun_ex1', title:'Phần 2.1 — Exercise 1: Tìm lỗi sai (Bài tập về Danh từ)', instruction:'There is one mistake (A, B, or C) in each of the following sentences. Find the mistake and correct it.\n(Nhấn vào phần bạn cho là sai và cần sửa lại.)', questions:NOUN_D17_ERR },
      { id:'noun_ex2', title:'Phần 2.1 — Exercise 2: Xác định vai trò của danh từ', instruction:'Xác định vai trò (chức năng) của danh từ/cụm danh từ in đậm trong mỗi câu sau.\n(Chọn đáp án đúng A, B, C hoặc D.)', questions:NOUN_D17_ROLE },
      { id:'article_ex1', title:'Phần 2.2 — Exercise 1: Bài tập về Mạo từ (A/An/The)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:ARTICLE_EX1 },
      { id:'noun_ex3', title:'Phần 2.3 — Exercise 3: Gõ đáp án SỐ NHIỀU theo quy tắc cơ bản (kèm từ vựng + phát âm)', instruction:'Xem nghĩa tiếng Việt và bấm 🔊 để nghe phát âm danh từ số ít, sau đó gõ dạng SỐ NHIỀU đúng vào ô (không phân biệt hoa/thường).', questions:NOUN_TYP_BASIC },
      { id:'noun_ex4', title:'Phần 2.4 — Exercise 4: Gõ đáp án SỐ NHIỀU bất quy tắc (kèm từ vựng + phát âm)', instruction:'Xem nghĩa tiếng Việt và bấm 🔊 để nghe phát âm danh từ số ít, sau đó gõ dạng SỐ NHIỀU đúng vào ô (không phân biệt hoa/thường).', questions:NOUN_TYP_IRREGULAR },
      { id:'noun_ex5', title:'Phần 2.5 — Exercise 5: Phân biệt Đếm được / Không đếm được', instruction:'Chọn đáp án đúng A hoặc B cho mỗi danh từ.', questions:NOUN_COUNT_UNCOUNT },
      { id:'noun_ex6', title:'Phần 2.6 — Exercise 6: Phân loại danh từ không đếm được theo nhóm', instruction:'Chọn nhóm đúng A, B, C hoặc D cho mỗi danh từ không đếm được.', questions:NOUN_UNCOUNT_CATEGORY },
      { id:'noun_adv1', title:'⭐ Bài tập NÂNG CAO 1 — Đếm được / Không đếm được (Tổng hợp 40 câu, kèm từ vựng + nghĩa tiếng Việt)', instruction:'Với mỗi từ tiếng Anh kèm nghĩa tiếng Việt, chọn A (Đếm được) hoặc B (Không đếm được).', questions:NOUN_ADV1_COUNT_UNCOUNT },
      { id:'noun_adv2', title:'🏆 Bài tập NÂNG CAO 2 — Tổng hợp TẤT CẢ kiến thức Danh từ (50 câu)', instruction:'Bài tập tổng hợp: số nhiều theo quy tắc, số nhiều bất quy tắc, đếm được/không đếm được, danh từ ghép, cụm danh từ, và chức năng của danh từ trong câu. Chọn đáp án đúng A, B, C hoặc D.', questions:NOUN_ADV2_COMBINED },
      { id:'noun_adv3', title:'🚀 Bài tập NÂNG CAO 3 — Tổng hợp TẤT CẢ kiến thức Danh từ, dạng GÕ ĐÁP ÁN (50 câu)', instruction:'Bài tập tổng hợp dạng gõ đáp án (typing): số nhiều theo quy tắc, số nhiều bất quy tắc, đếm được/không đếm được, danh từ ghép, cụm danh từ, và chức năng của danh từ. Đọc kỹ hướng dẫn gõ trong từng câu (không phân biệt hoa/thường).', questions:NOUN_ADV3_TYPING }
    ]
  },
  {
    id:'grade6_article',
    icon:'🎒',
    name:'Mạo từ — Lớp 6',
    subtitle:'Articles (A/An/The) — Bài tập dành cho học sinh lớp 6',
    color:'#F4A261',
    theoryHTML:NOUN_ARTICLE_THEORY_HTML,
    exercises:[
      { id:'g6_article_ex1', title:'Exercise 1: Điền a/an vào chỗ trống (15 câu)', instruction:'Điền "a" hoặc "an" vào chỗ trống thích hợp (gõ đáp án). Không phân biệt hoa/thường.', questions:ARTICLE_EX2 },
      { id:'g6_article_ex2', title:'Exercise 2: Chọn mạo từ đúng — a/an/the (10 câu)', instruction:'Chọn mạo từ đúng (a, an, hoặc the) để hoàn thành mỗi câu (gõ đáp án). Không phân biệt hoa/thường.', questions:ARTICLE_EX3 },
      { id:'g6_article_ex3', title:'Exercise 3: Điền mạo từ tổng hợp (20 câu)', instruction:'Điền mạo từ thích hợp (a/an/the) vào mỗi chỗ trống, hoặc để trống (Ø) nếu không cần mạo từ. Với câu có nhiều chỗ trống, gõ đáp án theo đúng thứ tự, phân cách bằng dấu gạch chéo "/", ví dụ: a/the. Nếu không cần mạo từ ở một vị trí, gõ "o" ở vị trí đó.', questions:ARTICLE_EX4 },
      { id:'g6_article_ex4', title:'Exercise 4: Điền mạo từ nâng cao (18 câu)', instruction:'Điền mạo từ thích hợp (a/an/the) vào mỗi chỗ trống, hoặc để trống (Ø) nếu không cần mạo từ. Với câu có nhiều chỗ trống, gõ đáp án theo đúng thứ tự, phân cách bằng dấu gạch chéo "/", ví dụ: a/the. Nếu không cần mạo từ ở một vị trí, gõ "o" ở vị trí đó.', questions:ARTICLE_EX5 },
      { id:'g6_article_ex5', title:'Exercise 5: Điền mạo từ tổng hợp nâng cao (20 câu)', instruction:'Điền mạo từ thích hợp (a/an/the) vào mỗi chỗ trống, hoặc để trống (Ø) nếu không cần mạo từ. Với câu có nhiều chỗ trống, gõ đáp án theo đúng thứ tự, phân cách bằng dấu gạch chéo "/", ví dụ: a/the. Nếu không cần mạo từ ở một vị trí, gõ "o" ở vị trí đó.', questions:ARTICLE_EX6 },
      { id:'g6_article_ex6', title:'Exercise 6: Điền mạo từ — Thành ngữ & trường hợp đặc biệt (20 câu)', instruction:'Điền mạo từ thích hợp (a/an/the) vào mỗi chỗ trống, hoặc để trống (Ø) nếu không cần mạo từ. Với câu có nhiều chỗ trống, gõ đáp án theo đúng thứ tự, phân cách bằng dấu gạch chéo "/", ví dụ: a/the. Nếu không cần mạo từ ở một vị trí, gõ "o" ở vị trí đó.', questions:ARTICLE_EX7 }
    ]
  },
  {
    id:'reported_speech',
    icon:'🗣️',
    name:'Câu tường thuật',
    subtitle:'Reported Speech',
    color:'#457B9D',
    theoryHTML:RS_THEORY_HTML,
    exercises:[
      { id:'rs_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu tường thuật.)', questions:RS_EX1 },
      { id:'rs_ex2', title:'Exercise 2 — Trắc nghiệm tổng hợp (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu tường thuật.)', questions:RS_EX2 }
    ]
  },

  {
    id:'conditional',
    icon:'🔀',
    name:'Câu điều kiện',
    subtitle:'Conditional Sentences',
    color:'#2ecc71',
    theoryHTML:COND_THEORY_HTML,
    exercises:[
      { id:'cond_ex1', title:'Exercise 1 — Bài tập trắc nghiệm (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:COND_EX1 },
      { id:'cond_ex2', title:'Exercise 2 — Bài tập trắc nghiệm (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:COND_EX2 }
    ]
  },

  {
    id:'conjunctions',
    icon:'🔗',
    name:'Liên từ',
    subtitle:'Conjunctions',
    color:'#f4a300',
    theoryHTML:CONJ_THEORY_HTML,
    exercises:[
      { id:'conj_ex1', title:'Exercise 1 — Luyện tập cơ bản (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:CONJ_EX1 },
      { id:'conj_ex2', title:'Exercise 2 — Luyện tập nâng cao (25 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:CONJ_EX2 }
    ]
  },

  {
    id:'modal',
    icon:'🧩',
    name:'Động từ khuyết thiếu',
    subtitle:'Modal Verbs — Khóa ngữ pháp',
    color:'#2a9d8f',
    theoryHTML:MODAL_THEORY_HTML,
    exercises:[
      { id:'modal_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:MODAL_EX1 },
      { id:'modal_ex2', title:'Exercise 2 — Trắc nghiệm tổng hợp (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:MODAL_EX2 }
    ]
  },
  {
    id:'passive',
    icon:'🔄',
    name:'Câu bị động',
    subtitle:'Passive Voice — Khóa ngữ pháp',
    color:'#9b5de5',
    theoryHTML:PASSIVE_THEORY_HTML,
    exercises:[
      { id:'passive_ex1', title:'Exercise 1 — Trắc nghiệm chia thì bị động (45 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu bị động.)', questions:PASSIVE_EX1 },
      { id:'passive_ex2', title:'Exercise 2 — Trắc nghiệm tổng hợp (thể nhờ, giác quan, MAKE...) (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu bị động.)', questions:PASSIVE_EX2 }
    ]
  },
  {
    id:'quantifiers',
    icon:'🔢',
    name:'Lượng từ',
    subtitle:'Quantifiers — Tài liệu',
    color:'#e63946',
    theoryHTML:QUANT_THEORY_HTML,
    exercises:[
      { id:'quant_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (Many/Much, Few/Little, Some/Any...)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX1 },
      { id:'quant_ex2', title:'Exercise 2 — Mạo từ & Từ chỉ đơn vị đo lường', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX2 },
      { id:'quant_ex3', title:'Exercise 3 — Lượng từ nâng cao & Other/Another/Others', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX3 },
      { id:'quant_ex4', title:'Exercise 4 — The other/The others, Most/Mostly', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX4 },
      { id:'quant_ex5', title:'Exercise 5 — Each/Every, All/Both, None/Neither/Either', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX5 },
      { id:'quant_ex6', title:'Exercise 6 — Ôn tập tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX6 },
      { id:'quant_ex7', title:'Exercise 7 — Ôn tập tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:QUANT_EX7 },
      { id:'quant_ex8', title:'Exercise 8 — Đặt câu với từ gợi ý', instruction:'Sắp xếp các từ gợi ý thành câu hoàn chỉnh, đúng ngữ pháp (chọn đáp án A, B, C hoặc D).', questions:QUANT_EX8 },
      { id:'quant_ex9', title:'Exercise 9 — Tìm và sửa lỗi sai', instruction:'Tìm từ/cụm từ cần thay đổi để câu đúng ngữ pháp (chọn đáp án A, B, C hoặc D).', questions:QUANT_EX9 }
    ]
  },
  {
    id:'clauses',
    icon:'🧩',
    name:'Các loại mệnh đề',
    subtitle:'Clauses — Tài liệu',
    color:'#2a9d8f',
    theoryHTML:CLAUSE_THEORY_HTML,
    exercises:[
      { id:'clause_ex1', title:'Exercise 1 — Xác định loại mệnh đề', instruction:'Xác định loại của mệnh đề được gạch chân (in đậm) trong mỗi câu sau.\n(Chọn đáp án A, B, C hoặc D mô tả đúng loại mệnh đề.)', questions:CLAUSE_EX1 },
      { id:'clause_ex2', title:'Exercise 2 — Xác định loại mệnh đề', instruction:'Xác định loại của mệnh đề được gạch chân (in đậm) trong mỗi câu sau.\n(Chọn đáp án A, B, C hoặc D mô tả đúng loại mệnh đề.)', questions:CLAUSE_EX2 },
      { id:'clause_ex3', title:'Exercise 3 — Trắc nghiệm ngữ pháp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:CLAUSE_EX3 },
      { id:'clause_ex4', title:'Exercise 4 — Trắc nghiệm ngữ pháp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:CLAUSE_EX4 }
    ]
  },
  {
    id:'adjective',
    icon:'🎨',
    name:'Tính từ & Trật tự tính từ',
    subtitle:'Adjectives & Order of Adjectives — Tài liệu',
    color:'#e07a5f',
    theoryHTML:ADJ_THEORY_HTML,
    exercises:[
      { id:'adj_phan1', title:'Exercise 1 — Tìm và sửa lỗi sai', instruction:'There is one mistake in each of the following sentences. Find and correct them.\n(Tìm và sửa lỗi sai trong mỗi câu — một số câu không có lỗi, hãy giải thích vì sao.)', questions:ADJ_PHAN1_Q },
      { id:'adj_phan2', title:'Exercise 2 — Trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the best answer to each of the following questions.', questions:ADJ_PHAN2_Q },
      { id:'adj_d25', title:'Exercise 3 — Tìm và sửa lỗi sai (bổ sung)', instruction:'There is one mistake in each of the following sentences. Find and correct them.', questions:ADJ_DAY25_Q },
      { id:'adj_d26', title:'Exercise 4 — Trật tự tính từ', instruction:'Mark the letter A, B, C, or D to indicate the correct order of adjectives to complete each sentence.\n(Chọn đáp án có trật tự tính từ đúng theo quy tắc OSASCOMP.)', questions:ADJ_DAY26_Q },
      { id:'adj_d27', title:'Exercise 5 — Tổng hợp (trật tự, cụm danh từ, giới từ, dạng từ)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADJ_DAY27_Q },
      { id:'adj_d28', title:'Exercise 6 — Tính từ + Giới từ', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADJ_DAY28_Q },
      { id:'adj_d29', title:'Exercise 7 — Tính từ + Giới từ', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADJ_DAY29_Q },
      { id:'adj_d30', title:'Exercise 8 — Trật tự tính từ nâng cao', instruction:'Mark the letter A, B, C, or D to indicate the correct order of adjectives to complete each sentence.', questions:ADJ_DAY30_Q }
    ]
  },
  {
    id:'wordform',
    icon:'📝',
    name:'Word Form',
    subtitle:'Cấu tạo từ — Từ loại Tiếng Anh',
    color:'#457B9D',
    theoryHTML:WORDFORM_THEORY_HTML,
    exercises:[
      { id:'wf_ex1', title:'Exercise 1 — Bài tập tổng hợp', instruction:'Chọn đáp án đúng (A, B, C hoặc D) để hoàn thành câu.', questions:QUESTIONS },
      { id:'wf_ex2', title:'Exercise 2 — Bài tập bổ sung', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX2 },
      { id:'wf_ex3', title:'Exercise 3 — Bài tập trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX3 },
      { id:'wf_ex4', title:'Exercise 4 — Bài tập trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX4 },
      { id:'wf_ex5', title:'Exercise 5 — Bài tập trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX5 },
      { id:'wf_ex6', title:'Exercise 6 — Bài tập trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX6 },
      { id:'wf_ex7', title:'Exercise 7 — Bài tập trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX7 },
      { id:'wf_ex8', title:'Exercise 8 — Bài tập luyện tập bổ sung', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:WF_EX8 }
    ]
  },
  {
    id:'sva',
    icon:'🔗',
    name:'Sự hòa hợp Chủ ngữ – Động từ',
    subtitle:'Subject – Verb Agreement',
    color:'#9b5de5',
    theoryHTML:SVA_THEORY_HTML,
    exercises:[
      { id:'sva_ex1', title:'Exercise 1 — Tìm lỗi sai (Error Identification)', instruction:'Mark the letter A, B, C, or D to indicate the underlined part that needs correction in each of the following sentences.\n(Nhấn vào phần được đánh dấu chữ cái mà bạn cho là sai và cần sửa lại.)', questions:SVA_EX1 },
      { id:'sva_ex2', title:'Exercise 2 — Chọn đáp án đúng (Sentence Completion)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:SVA_EX2 },
      { id:'sva_ex3', title:'Exercise 3 — Luyện tập nâng cao (Advanced Mixed Practice)', instruction:'Part A (Q1-15): Choose the correct answer. Part B (Q16-30): Find the underlined part that needs correction.\n(Phần A: Chọn đáp án đúng — Phần B: Tìm lỗi sai. Bài tổng hợp nâng cao, kết hợp nhiều dạng câu hỏi và quy tắc khác nhau.)', questions:SVA_EX3 },
      { id:'sva_ex4', title:'Exercise 4 — Chọn đáp án đúng (Sentence Completion)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:SVA_EX4 }
    ]
  },
  {
    id:'tense',
    icon:'⏰',
    name:'Thì Hiện Tại Đơn – Quá Khứ Đơn',
    subtitle:'Present Simple & Past Simple',
    color:'#2ecc71',
    theoryHTML:TENSE_THEORY_HTML,
    exercises:[
      { id:'tense_ex1', title:'Exercise 1 — Thì Hiện Tại Đơn', instruction:'Choose the correct answer (A, B, C or D) to complete each sentence in the present simple tense.\n(Chọn đáp án đúng để hoàn thành câu ở thì hiện tại đơn.)', questions:TENSE_EX1 },
      { id:'tense_ex2', title:'Exercise 2 — Thì Quá Khứ Đơn', instruction:'Choose the correct answer (A, B, C or D) to complete each sentence in the past simple tense.\n(Chọn đáp án đúng để hoàn thành câu ở thì quá khứ đơn.)', questions:TENSE_EX2 },
      { id:'tense_ex3', title:'Exercise 3 — Trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D. Bài tổng hợp cả hiện tại đơn và quá khứ đơn.)', questions:TENSE_EX3 },
      { id:'tense_ex4', title:'Exercise 4 — Trắc nghiệm tổng hợp', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D. Bài tổng hợp cả hiện tại đơn và quá khứ đơn.)', questions:TENSE_EX4 }
    ]
  },
  {
    id:'tenseseq',
    icon:'⏳',
    name:'Sự phối thì',
    subtitle:'Sequence of Tenses',
    color:'#e07a5f',
    theoryHTML:TENSE_SEQ_THEORY_HTML,
    exercises:[
      { id:'tenseseq_ex1', title:'Exercise 1 — Chia đúng dạng động từ', instruction:'Choose the correct verb form(s) to complete each sentence based on the sequence of tenses.\n(Chọn dạng động từ đúng để hoàn thành câu dựa theo quy tắc phối thì.)', questions:TENSE_SEQ_EX1 },
      { id:'tenseseq_ex2', title:'Exercise 2 — Trắc nghiệm phối thì', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:TENSE_SEQ_EX2 },
      { id:'tenseseq_ex3', title:'Exercise 3 — Trắc nghiệm phối thì nâng cao', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu — mức độ nâng cao.)', questions:TENSE_SEQ_EX3 }
    ]
  },
  {
    id:'pronunciation',
    icon:'🔊',
    name:'Phát âm',
    subtitle:'Pronunciation',
    color:'#e63946',
    theoryHTML:PRON_THEORY_HTML,
    exercises:[
      { id:'pron_ex1', title:'Exercise 1 — Luyện tập cơ bản', instruction:'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\n(Chọn từ có phần gạch chân được phát âm khác với 3 từ còn lại.)', questions:PRON_EX1 },
      { id:'pron_ex2', title:'Exercise 2 — Đuôi -s/-es và nguyên âm', instruction:'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\n(Chọn từ có phần gạch chân được phát âm khác với 3 từ còn lại.)', questions:PRON_EX2 },
      { id:'pron_ex3', title:'Exercise 3 — Luyện tập tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\n(Chọn từ có phần gạch chân được phát âm khác với 3 từ còn lại.)', questions:PRON_EX3 },
      { id:'pron_ex4', title:'Exercise 4 — Nguyên âm và đuôi -ed/-s', instruction:'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\n(Chọn từ có phần gạch chân được phát âm khác với 3 từ còn lại.)', questions:PRON_EX4 },
      { id:'pron_ex5', title:'Exercise 5 — Ôn tập nhanh', instruction:'Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.\n(Chọn từ có phần gạch chân được phát âm khác với 3 từ còn lại.)', questions:PRON_EX5 }
    ]
  },
  {
    id:'stress',
    icon:'🎯',
    name:'Trọng âm',
    subtitle:'Word Stress',
    color:'#3a86ff',
    theoryHTML:STRESS_THEORY_HTML,
    exercises:[
      { id:'stress_ex1', title:'Exercise 1 — Trọng âm 2-3 âm tiết cơ bản', instruction:'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.\n(Chọn từ có trọng âm chính khác với 3 từ còn lại.)', questions:STRESS_EX1 },
      { id:'stress_ex2', title:'Exercise 2 — Luyện tập tổng hợp', instruction:'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.\n(Chọn từ có trọng âm chính khác với 3 từ còn lại.)', questions:STRESS_EX2 },
      { id:'stress_ex3', title:'Exercise 3 — Ôn tập nhanh', instruction:'Mark the letter A, B, C, or D to indicate the word which differs from the other three in the position of the main stress.\n(Chọn từ có trọng âm chính khác với 3 từ còn lại.)', questions:STRESS_EX3 },
      { id:'stress_ex4', title:'Exercise 4 — Từ 3-4 âm tiết nâng cao', instruction:'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of the primary stress.\n(Chọn từ có trọng âm chính khác với 3 từ còn lại.)', questions:STRESS_EX4 },
      { id:'stress_ex5', title:'Exercise 5 — Ôn tập cuối', instruction:'Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of the primary stress.\n(Chọn từ có trọng âm chính khác với 3 từ còn lại.)', questions:STRESS_EX5 }
    ]
  },
  {
    id:'relclause',
    icon:'🔗',
    name:'Mệnh đề quan hệ',
    subtitle:'Relative Clauses',
    color:'#6a4c93',
    theoryHTML:RELCLAUSE_THEORY_HTML,
    exercises:[
      { id:'relclause_ex1', title:'Exercise 1 — Đại từ, trạng từ quan hệ & rút gọn', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:RELCLAUSE_EX1 },
      { id:'relclause_ex2', title:'Exercise 2 — Luyện tập tổng hợp', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:RELCLAUSE_EX2 },
      { id:'relclause_ex3', title:'Exercise 3 — Đại từ quan hệ cơ bản đến nâng cao', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu.)', questions:RELCLAUSE_EX3 },
      { id:'relclause_ex4', title:'Exercise 4 — Rút gọn mệnh đề quan hệ', instruction:'Mark the letter A, B, C or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu — trọng tâm rút gọn bằng V-ing/V-ed.)', questions:RELCLAUSE_EX4 }
    ]
  },
  {
    id:'phrasalverbs',
    icon:'🧩',
    name:'Cụm Động Từ',
    subtitle:'Phrasal Verbs — Tài liệu',
    color:'#ff9f1c',
    theoryHTML:PV_VOCAB_HTML,
    exercises:[
      { id:'pv_game1', title:'🎮 Trò chơi 1 — Chọn nghĩa đúng (MCQ)', instruction:'Cho nghĩa tiếng Việt, chọn cụm động từ tiếng Anh đúng trong 4 đáp án A, B, C, D.\nSau khi trả lời sẽ có giải thích chi tiết: phiên âm, phát âm, nghĩa, ví dụ song ngữ, từ đồng nghĩa.', questions:PV_GAME1_QUESTIONS },
      { id:'pv_game2', title:'🎮 Trò chơi 2 — Điền từ tiếng Anh', instruction:'Cho nghĩa tiếng Việt và một câu ví dụ có chỗ trống, hãy gõ đúng cụm động từ tiếng Anh tương ứng.\nKhông phân biệt hoa/thường. Sau khi trả lời sẽ có giải thích chi tiết.', questions:PV_GAME2_QUESTIONS },
      { id:'pv_buoi12', title:'Luyện tập tổng hợp — Đợt 1', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_BUOI12_Q },
      { id:'pv_go', title:'Cụm động từ với GO', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_GO_Q },
      { id:'pv_look1', title:'Cụm động từ với LOOK (phần 1)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_LOOK1_Q },
      { id:'pv_look2', title:'Cụm động từ với LOOK (phần 2)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_LOOK2_Q },
      { id:'pv_break', title:'Cụm động từ với BREAK', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_BREAK_Q },
      { id:'pv_bring', title:'Cụm động từ với BRING', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_BRING_Q },
      { id:'pv_grow', title:'Cụm động từ với GROW', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_GROW_Q },
      { id:'pv_take', title:'Cụm động từ với TAKE', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_TAKE_Q },
      { id:'pv_come', title:'Cụm động từ với COME', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_COME_Q },
      { id:'pv_turn', title:'Cụm động từ với TURN', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_TURN_Q },
      { id:'pv_give', title:'Cụm động từ với GIVE', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_GIVE_Q },
      { id:'pv_put1', title:'Cụm động từ với PUT (phần 1)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_PUT1_Q },
      { id:'pv_put2', title:'Cụm động từ với PUT (phần 2)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_PUT2_Q },
      { id:'pv_catch', title:'Cụm động từ với CATCH', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_CATCH_Q },
      { id:'pv_make', title:'Cụm động từ với MAKE', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_MAKE_Q },
      { id:'pv_get1', title:'Cụm động từ với GET (phần 1)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_GET1_Q },
      { id:'pv_get2', title:'Cụm động từ với GET (phần 2)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_GET2_Q },
      { id:'pv_do', title:'Cụm động từ với DO', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_DO_Q },
      { id:'pv_keep', title:'Cụm động từ với KEEP', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_KEEP_Q },
      { id:'pv_day31', title:'Luyện tập tổng hợp — Đợt 2', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_DAY31_Q },
      { id:'pv_rev1', title:'Ôn tập tổng hợp 1 (LOOK & GO)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_REV1_Q },
      { id:'pv_rev2', title:'Ôn tập tổng hợp 2 (BREAK, BRING, GROW...)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_REV2_Q },
      { id:'pv_rev3', title:'Ôn tập tổng hợp 3 (TAKE, COME, TURN)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_REV3_Q },
      { id:'pv_rev4', title:'Ôn tập tổng hợp 4 (GIVE, PUT, CATCH)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_REV4_Q },
      { id:'pv_rev5', title:'Ôn tập tổng hợp 5 — Tổng ôn cuối cùng', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PV_REV5_Q }
    ]
  },
  {
    id:'prepositions',
    icon:'📍',
    name:'Giới Từ',
    subtitle:'Prepositions — Tài liệu',
    color:'#0aa5a8',
    theoryHTML:GT_THEORY_HTML,
    vocabHTML:GT_VOCAB_HTML,
    theoryLabel:'PHẦN 1 — Ôn lý thuyết giới từ',
    vocabLabel:'PHẦN 2.1 — Danh sách cụm giới từ (từ, phiên âm, phát âm, ví dụ song ngữ)',
    exercises:[
      { id:'gt_game1', title:'🎮 PHẦN 2.2 — Trò chơi 1: Việt → Anh (chọn đáp án)', instruction:'Cho nghĩa tiếng Việt, chọn cụm giới từ tiếng Anh đúng trong 4 đáp án A, B, C, D.\nSau khi trả lời sẽ có giải thích chi tiết: phiên âm, phát âm, nghĩa, ví dụ song ngữ.', questions:GT_GAME1_QUESTIONS },
      { id:'gt_game2', title:'🎮 PHẦN 2.2 — Trò chơi 2: Việt → Anh (gõ giới từ)', instruction:'Cho nghĩa tiếng Việt và từ khóa, hãy GÕ đúng giới từ đi kèm (ví dụ: amazed ___ → gõ "at").\nKhông phân biệt hoa/thường. Sau khi trả lời sẽ có giải thích chi tiết.', questions:GT_GAME2_QUESTIONS },
      { id:'gt_game3', title:'🎮 PHẦN 2.2 — Trò chơi 3: Anh → Việt (chọn nghĩa)', instruction:'Cho cụm giới từ tiếng Anh, chọn đúng nghĩa tiếng Việt trong 4 đáp án A, B, C, D.\nSau khi trả lời sẽ có giải thích chi tiết: phiên âm, phát âm, ví dụ song ngữ.', questions:GT_GAME3_QUESTIONS },
      { id:'gt_live', title:'PHẦN 3 — Bài tập 1 (điền giới từ)', instruction:'Fill each blank with a suitable preposition to complete the following sentences.\n(Chọn (cụm) giới từ phù hợp để hoàn thành câu — giới từ chỉ nơi chốn, thời gian, phương hướng và giới từ phức hợp.)', questions:GT_LIVE_Q },
      { id:'gt_d16', title:'PHẦN 3 — Bài tập 2 (Phần 1–5)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GT_D16_Q },
      { id:'gt_d17', title:'PHẦN 3 — Bài tập 3 (50 câu tổng hợp)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GT_D17_Q },
      { id:'gt_d18', title:'PHẦN 3 — Bài tập 4 (Phần I–V)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GT_D18_Q },
      { id:'gt_d19', title:'PHẦN 3 — Bài tập 5 (50 câu tổng hợp)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GT_D19_Q },
      { id:'gt_d20', title:'PHẦN 3 — Bài tập 6 (Phần I–V)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GT_D20_Q },
      { id:'gt_d21', title:'PHẦN 3 — Bài tập 7 (60 câu tổng hợp)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GT_D21_Q }
    ]
  },
  {
    id:'structures',
    icon:'🧱',
    name:'Cấu Trúc Câu',
    subtitle:'Structures — Tài liệu',
    color:'#e07a5f',
    theoryHTML:STR_VOCAB_HTML,
    theoryLabel:'PHẦN 1 — Danh sách cấu trúc (loại từ, phiên âm, phát âm, ví dụ song ngữ)',
    exercises:[
      { id:'str_game1', title:'🎮 PHẦN 2.1 — Trò chơi 1: Việt → Anh (chọn đáp án)', instruction:'Cho nghĩa tiếng Việt, chọn cấu trúc tiếng Anh đúng trong 4 đáp án A, B, C, D.\\nSau khi trả lời sẽ có giải thích chi tiết cả 4 đáp án: phiên âm, phát âm, nghĩa, ví dụ song ngữ.', questions:STR_GAME1_QUESTIONS },
      { id:'str_game2', title:'🎮 PHẦN 2.2 — Trò chơi 2: Việt → Anh (gõ cấu trúc)', instruction:'Cho nghĩa tiếng Việt, hãy GÕ đúng cấu trúc/cụm từ tiếng Anh tương ứng.\\nKhông phân biệt hoa/thường. Sau khi trả lời sẽ có giải thích chi tiết: phiên âm, loại từ, nghĩa, ví dụ song ngữ.', questions:STR_GAME2_QUESTIONS },
      { id:'str_game3', title:'🎮 PHẦN 2.3 — Trò chơi 3: Anh → Việt (chọn nghĩa)', instruction:'Cho cấu trúc tiếng Anh, chọn đúng nghĩa tiếng Việt trong 4 đáp án A, B, C, D.\\nSau khi trả lời sẽ có giải thích chi tiết cả 4 đáp án: phiên âm, phát âm, ví dụ song ngữ.', questions:STR_GAME3_QUESTIONS },
      { id:'str_live', title:'PHẦN 3 — Bài tập 1 (20 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_LIVE_Q },
      { id:'str_d23', title:'PHẦN 3 — Bài tập 2 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_D23_Q },
      { id:'str_d24', title:'PHẦN 3 — Bài tập 3 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_D24_Q },
      { id:'str_d25', title:'PHẦN 3 — Bài tập 4 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_D25_Q },
      { id:'str_d26', title:'PHẦN 3 — Bài tập 5 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_D26_Q },
      { id:'str_d27', title:'PHẦN 3 — Bài tập 6 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_D27_Q },
      { id:'str_d28', title:'PHẦN 3 — Bài tập 7 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR_D28_Q }
    ]
  },
  {
    id:'structures2',
    icon:'🧩',
    name:'Cấu Trúc Câu (Phần 2)',
    subtitle:'Structures Part 2 — Tuần 27',
    color:'#c9622a',
    theoryHTML:STR2_VOCAB_HTML,
    theoryLabel:'PHẦN 1 — Danh sách cấu trúc (loại từ, phiên âm, phát âm, ví dụ song ngữ)',
    exercises:[
      { id:'str2_game1', title:'🎮 PHẦN 2.1 — Trò chơi 1: Việt → Anh (chọn đáp án)', instruction:'Cho nghĩa tiếng Việt, chọn cấu trúc tiếng Anh đúng trong 4 đáp án A, B, C, D.\\nSau khi trả lời sẽ có giải thích chi tiết cả 4 đáp án: phiên âm, phát âm, nghĩa, ví dụ song ngữ.', questions:STR2_GAME1_QUESTIONS },
      { id:'str2_game2', title:'🎮 PHẦN 2.2 — Trò chơi 2: Việt → Anh (gõ cấu trúc)', instruction:'Cho nghĩa tiếng Việt, hãy GÕ đúng cấu trúc/cụm từ tiếng Anh tương ứng.\\nKhông phân biệt hoa/thường. Sau khi trả lời sẽ có giải thích chi tiết: phiên âm, loại từ, nghĩa, ví dụ song ngữ.', questions:STR2_GAME2_QUESTIONS },
      { id:'str2_game3', title:'🎮 PHẦN 2.3 — Trò chơi 3: Anh → Việt (chọn nghĩa)', instruction:'Cho cấu trúc tiếng Anh, chọn đúng nghĩa tiếng Việt trong 4 đáp án A, B, C, D.\\nSau khi trả lời sẽ có giải thích chi tiết cả 4 đáp án: phiên âm, phát âm, ví dụ song ngữ.', questions:STR2_GAME3_QUESTIONS },
      { id:'str2_d1', title:'PHẦN 3 — Bài tập 1 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR2_D1_Q },
      { id:'str2_d2', title:'PHẦN 3 — Bài tập 2 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR2_D2_Q },
      { id:'str2_d3', title:'PHẦN 3 — Bài tập 3 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR2_D3_Q },
      { id:'str2_d4', title:'PHẦN 3 — Bài tập 4 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR2_D4_Q },
      { id:'str2_d5', title:'PHẦN 3 — Bài tập 5 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR2_D5_Q },
      { id:'str2_d6', title:'PHẦN 3 — Bài tập 6 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:STR2_D6_Q }
    ]
  },
  {
    id:'gerund_participle',
    icon:'🔤',
    name:'Danh Động Từ - Hiện Tại Phân Từ',
    subtitle:'Gerund & Participle (Perfect Gerund/Participle) — Tuần 8',
    color:'#7c4dff',
    theoryHTML:GP_THEORY_HTML,
    theoryLabel:'PHẦN 1.1 — Lý thuyết: Danh động từ, Hiện tại phân từ, Danh động từ/Phân từ hoàn thành',
    vocabHTML:GP_VOCAB_HTML,
    vocabLabel:'PHẦN 2.1 — Bảng cấu trúc động từ + to V / V-ing (loại từ, phiên âm, phát âm, ví dụ song ngữ)',
    exercises:[
      { id:'gp_ex1', title:'PHẦN 1.2 — Bài tập 1: Phân biệt Danh động từ / Hiện tại phân từ (15 câu)', instruction:'Xác định từ/cụm được in đậm trong mỗi câu là Danh động từ (Gerund) hay Hiện tại phân từ (Present Participle).', questions:GP_EX1_Q },
      { id:'gp_ex2', title:'PHẦN 1.2 — Bài tập 2: Phân biệt Danh động từ hoàn thành / Phân từ hoàn thành (10 câu)', instruction:'Xác định cụm được in đậm trong mỗi câu là Danh động từ hoàn thành (Perfect Gerund) hay Phân từ hoàn thành (Perfect Participle).', questions:GP_EX2_Q },
      { id:'gp_ex3', title:'PHẦN 1.2 — Bài tập 3: Rút gọn mệnh đề bằng phân từ (7 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_EX3_Q },
      { id:'gp_d19', title:'PHẦN 1.2 — Bài tập 4 (25 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_D19_Q },
      { id:'gp_d19form', title:'PHẦN 1.2 — Bài tập 5: Chia đúng dạng động từ (15 câu)', instruction:'Cho dạng đúng của động từ trong ngoặc (gõ đáp án). Không phân biệt hoa/thường.', questions:GP_D19FORM_Q },
      { id:'gp_live13', title:'PHẦN 1.2 — Bài tập 6 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_LIVE13_Q },
      { id:'gp_d20', title:'PHẦN 1.2 — Bài tập 7 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_D20_Q },
      { id:'gp_d21', title:'PHẦN 1.2 — Bài tập 8 (30 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_D21_Q },
      { id:'gp_d22', title:'PHẦN 1.2 — Bài tập 9 (40 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_D22_Q },
      { id:'gp_d23', title:'PHẦN 1.2 — Bài tập 10 (50 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_D23_Q },
      { id:'gp_d24', title:'PHẦN 1.2 — Bài tập 11 (50 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:GP_D24_Q },
      { id:'gp_extra', title:'PHẦN 1.2 — Bài tập làm thêm Tuần 8: Viết lại câu (25 câu)', instruction:'Viết lại câu theo yêu cầu (gõ đáp án). Đáp án mẫu — có thể có cách diễn đạt khác tương đương.', questions:GP_EXTRA_Q },
      { id:'gp_game1', title:'🎮 PHẦN 2.2 — Trò chơi 1: Việt → Anh (chọn đáp án)', instruction:'Cho nghĩa tiếng Việt, chọn cấu trúc tiếng Anh đúng trong 4 đáp án A, B, C, D.\\nSau khi trả lời sẽ có giải thích chi tiết cả 4 đáp án: phiên âm, phát âm, nghĩa, ví dụ song ngữ.', questions:GP_GAME1_QUESTIONS },
      { id:'gp_game2', title:'🎮 PHẦN 2.2 — Trò chơi 2: Việt → Anh (gõ cấu trúc)', instruction:'Cho nghĩa tiếng Việt, hãy GÕ đúng cấu trúc/cụm từ tiếng Anh tương ứng.\\nKhông phân biệt hoa/thường. Sau khi trả lời sẽ có giải thích chi tiết: phiên âm, loại từ, nghĩa, ví dụ song ngữ.', questions:GP_GAME2_QUESTIONS },
      { id:'gp_game3', title:'🎮 PHẦN 2.2 — Trò chơi 3: Anh → Việt (chọn nghĩa)', instruction:'Cho cấu trúc tiếng Anh, chọn đúng nghĩa tiếng Việt trong 4 đáp án A, B, C, D.\\nSau khi trả lời sẽ có giải thích chi tiết cả 4 đáp án: phiên âm, phát âm, ví dụ song ngữ.', questions:GP_GAME3_QUESTIONS }
    ]
  },
  {
    id:'pronouns',
    icon:'👤',
    name:'Đại Từ',
    subtitle:'Pronouns — Tuần 3',
    color:'#2a9d8f',
    theoryHTML:PRNS_THEORY_HTML,
    theoryLabel:'PHẦN 1 — Lý thuyết: 7 loại đại từ trong tiếng Anh',
    exercises:[
      { id:'pron_ex1', title:'PHẦN 2 — Bài tập 1: Điền đại từ nhân xưng/sở hữu/phản thân (10 câu)', instruction:'Điền một đại từ thích hợp vào chỗ trống (gõ đáp án). Không phân biệt hoa/thường.', questions:PRNS_EX1_Q },
      { id:'pron_ex2', title:'PHẦN 2 — Bài tập 2: Điền đại từ bất định (10 câu)', instruction:'Điền một đại từ bất định thích hợp vào chỗ trống (gõ đáp án). Không phân biệt hoa/thường.', questions:PRNS_EX2_Q },
      { id:'pron_ex3', title:'PHẦN 2 — Bài tập 3: Chọn phương án đúng (15 câu)', instruction:'Khoanh tròn vào phương án đúng trong các lựa chọn cho sẵn.', questions:PRNS_EX3_Q },
      { id:'pron_d15', title:'PHẦN 2 — Bài tập 4: Tìm lỗi sai (15 câu)', instruction:'Chọn phần (A, B, C hoặc D) chứa lỗi sai trong mỗi câu.', questions:PRNS_D15_Q },
      { id:'pron_d16', title:'PHẦN 2 — Bài tập 5 (15 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PRNS_D16_Q },
      { id:'pron_d17', title:'PHẦN 2 — Bài tập 6: Tìm lỗi sai (30 câu)', instruction:'Chọn phần (A, B, C hoặc D) chứa lỗi sai trong mỗi câu.', questions:PRNS_D17_Q },
      { id:'pron_d18', title:'PHẦN 2 — Bài tập 7 (15 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:PRNS_D18_Q },
      { id:'pron_d19', title:'PHẦN 2 — Bài tập 8: Tìm lỗi sai (15 câu)', instruction:'Chọn phần (A, B, C hoặc D) chứa lỗi sai trong mỗi câu.', questions:PRNS_D19_Q },
      { id:'pron_d20', title:'PHẦN 2 — Bài tập 9: Tìm lỗi sai (15 câu)', instruction:'Chọn phần (A, B, C hoặc D) chứa lỗi sai trong mỗi câu.', questions:PRNS_D20_Q },
      { id:'pron_extra', title:'PHẦN 2 — Bài tập làm thêm Tuần 3: Tìm và sửa lỗi (50 câu)', instruction:'Tìm lỗi sai trong câu và gõ đáp án theo mẫu: từ SAI → từ ĐÚNG (ví dụ: his → her).', questions:PRNS_EXTRA_Q }
    ]
  },
  {
    id:'advtense',
    icon:'⏳',
    name:'Thì Tiếp Diễn & Hoàn Thành',
    subtitle:'Continuous & Perfect Tenses — Tài liệu',
    color:'#3d5a80',
    theoryHTML:ADVT_THEORY_HTML,
    theoryLabel:'PHẦN 1 — Ôn lý thuyết 7 thì tiếp diễn & hoàn thành',
    exercises:[
      { id:'advt_l7e1', title:'Bài tập 1: Hiện tại tiếp diễn (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì hiện tại tiếp diễn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:ADVT_L7E1_Q },
      { id:'advt_l7e2', title:'Bài tập 2: Quá khứ tiếp diễn (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì quá khứ tiếp diễn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:ADVT_L7E2_Q },
      { id:'advt_l7e3', title:'Bài tập 3: Tương lai tiếp diễn (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì tương lai tiếp diễn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:ADVT_L7E3_Q },
      { id:'advt_d29', title:'Bài tập 4 (50 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADVT_D29_Q },
      { id:'advt_l8e1', title:'Bài tập 5: Hiện tại hoàn thành (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì hiện tại hoàn thành hoặc hiện tại hoàn thành tiếp diễn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:ADVT_L8E1_Q },
      { id:'advt_l8e2', title:'Bài tập 6: Quá khứ hoàn thành (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì quá khứ hoàn thành hoặc quá khứ hoàn thành tiếp diễn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:ADVT_L8E2_Q },
      { id:'advt_d30', title:'Bài tập 7 (35 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADVT_D30_Q },
      { id:'advt_l9', title:'Bài tập 8: Tương lai hoàn thành (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì tương lai hoàn thành hoặc tương lai hoàn thành tiếp diễn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:ADVT_L9_Q },
      { id:'advt_d31', title:'Bài tập 9 (50 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADVT_D31_Q },
      { id:'advt_d18', title:'Bài tập 10 (50 câu trắc nghiệm tổng ôn)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:ADVT_D18_Q }
    ]
  },
  {
    id:'verbtense',
    icon:'🔤',
    name:'Động Từ & Thì Cơ Bản',
    subtitle:'Verbs & Basic Tenses — Tài liệu',
    color:'#6a4c93',
    theoryHTML:VERBT_THEORY_HTML,
    theoryLabel:'PHẦN 1 — Ôn lý thuyết động từ & 4 thì cơ bản',
    exercises:[
      { id:'verbt_l5e1', title:'Bài tập 1: Hiện tại đơn (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì hiện tại đơn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:VERBT_L5E1_Q },
      { id:'verbt_l5e2', title:'Bài tập 2: Quá khứ đơn (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì quá khứ đơn.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:VERBT_L5E2_Q },
      { id:'verbt_d22', title:'Bài tập 3 (20 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:VERBT_D22_Q },
      { id:'verbt_d23', title:'Bài tập 4 (30 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:VERBT_D23_Q },
      { id:'verbt_l6', title:'Bài tập 5: Tương lai đơn & Tương lai gần (điền dạng đúng)', instruction:'Chia dạng đúng của động từ trong ngoặc ở thì tương lai đơn hoặc tương lai gần.\\n(Gõ đáp án bằng tiếng Anh, không phân biệt hoa/thường.)', questions:VERBT_L6_Q },
      { id:'verbt_d24', title:'Bài tập 6 (20 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:VERBT_D24_Q },
      { id:'verbt_d25', title:'Bài tập 7 (50 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:VERBT_D25_Q },
      { id:'verbt_d26', title:'Bài tập 8 (41 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:VERBT_D26_Q },
      { id:'verbt_d27', title:'Bài tập 9 (15 câu trắc nghiệm)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.', questions:VERBT_D27_Q }
    ]
  },
  {
    id:'comparison',
    icon:'⚖️',
    name:'Các Cấp So Sánh',
    subtitle:'Comparisons — Tài liệu',
    color:'#457B9D',
    theoryHTML:COMPARISON_THEORY_HTML,
    exercises:[
      { id:'comp_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (30 câu)', instruction:'Choose the best answer to complete the following sentences.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu. Mỗi câu có dịch song ngữ, giải thích chi tiết và từ mới.)', questions:COMPARISON_EX1 },
      { id:'comp_ex2', title:'Exercise 2 — Trắc nghiệm tổng hợp (20 câu)', instruction:'Choose the best answer to complete the following sentences.\n(Chọn đáp án đúng A, B, C hoặc D. Bài tập bổ sung trọng tâm trật tự tính từ, so sánh gấp lần và các dạng bất quy tắc. Mỗi câu có dịch song ngữ, giải thích chi tiết và từ mới.)', questions:COMPARISON_EX2 },
      { id:'comp_ex3', title:'Exercise 3 — Viết lại câu (Rewrite, 12 câu)', instruction:'Rewrite the following sentences beginning with the given words, keeping the same meaning.\\n(Gõ lại phần còn thiếu của câu bắt đầu bằng từ cho sẵn, giữ nguyên nghĩa câu gốc. Có đáp án và giải thích chi tiết sau khi trả lời.)', questions:COMPARISON_EX3 }
    ]
  },

  {
    id:'inversion',
    icon:'🔃',
    name:'Đảo Ngữ',
    subtitle:'Inversion',
    color:'#e63946',
    theoryHTML:INV_THEORY_HTML,
    exercises:[
      { id:'inv_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (25 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu đảo ngữ.)', questions:INV_EX1 },
      { id:'inv_ex2', title:'Exercise 2 — Trắc nghiệm tổng hợp (25 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu đảo ngữ.)', questions:INV_EX2 },
      { id:'inv_ex3', title:'Exercise 3 — Viết lại câu (Rewrite, 40 câu)', instruction:'Rewrite the following sentences beginning with the given words, keeping the same meaning.\n(Gõ lại phần còn thiếu của câu bắt đầu bằng từ cho sẵn, giữ nguyên nghĩa câu gốc. Có đáp án và giải thích chi tiết sau khi trả lời.)', questions:INV_EX3 },
      { id:'inv_ex4', title:'Exercise 4 — Chọn câu đồng nghĩa (20 câu)', instruction:'Mark the letter A, B, C, or D to indicate the sentence that is closest in meaning to the given sentence.\n(Chọn câu A, B, C hoặc D có nghĩa gần nhất với câu đã cho, đồng thời đúng ngữ pháp đảo ngữ.)', questions:INV_EX4 }
    ]
  },

  {
    id:'tagquestion',
    icon:'❓',
    name:'Câu hỏi đuôi',
    subtitle:'Tag Questions — Tài liệu Tuần 10',
    color:'#f4a300',
    theoryHTML:TAGQ_THEORY_HTML,
    exercises:[
      { id:'tagq_ex1', title:'Exercise 1 — Trắc nghiệm tổng hợp (25 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu hỏi đuôi.)', questions:TAGQ_EX1 },
      { id:'tagq_ex2', title:'Exercise 2 — Trắc nghiệm tổng hợp (25 câu)', instruction:'Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.\n(Chọn đáp án đúng A, B, C hoặc D để hoàn thành câu hỏi đuôi.)', questions:TAGQ_EX2 }
    ]
  }
];

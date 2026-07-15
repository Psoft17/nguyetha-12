// ===== CHUYÊN ĐỀ 2: SỰ HÒA HỢP GIỮA CHỦ NGỮ VÀ ĐỘNG TỪ (SUBJECT-VERB AGREEMENT) =====
const SVA_THEORY_HTML = `
    <div class="glass rounded-2xl p-4 mb-4" style="border-left:4px solid var(--accent)">
      <div class="font-800 text-dark2 mb-2">🌟 TỔNG QUAN — Sự hòa hợp giữa Chủ ngữ và Động từ (Subject – Verb Agreement)</div>
      <div class="text-sm text-soft">Quy tắc chung: chủ ngữ số ít đi với động từ số ít (is/was/has/V-s), chủ ngữ số nhiều đi với động từ số nhiều (are/were/have/V nguyên thể). Tuy nhiên tiếng Anh có rất nhiều trường hợp đặc biệt cần ghi nhớ kỹ dưới đây.</div>
    </div>

    <details open class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span style="background:linear-gradient(90deg,#457B9D,#5b9bc4);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">V(ít)</span> 1. Các trường hợp Động từ chia SỐ ÍT
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
          <thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Trường hợp</th><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead>
          <tbody>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Danh từ số ít / không đếm được → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Khi chủ ngữ là danh từ số ít hoặc danh từ không đếm được, động từ phải chia ở dạng số ít (to be: is/was; động từ thường thêm -s/-es).</td><td style="padding:8px;vertical-align:top"><i>My son is very obedient.</i><br><span style="color:var(--text-soft);font-size:12px">→ Con trai tôi rất ngoan ngoãn.</span><br><i>Tea is grown in Thai Nguyen.</i><br><span style="color:var(--text-soft);font-size:12px">→ Chè được trồng ở Thái Nguyên.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Each/Every/Many a + N → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"Each", "Every" và "Many a" luôn đi với danh từ số ít và động từ chia số ít, dù ý nghĩa có thể chỉ nhiều đối tượng.</td><td style="padding:8px;vertical-align:top"><i>Many a politician has promised to make changes.</i><br><span style="color:var(--text-soft);font-size:12px">→ Nhiều chính khách đã hứa sẽ tạo ra thay đổi.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">To-V / V-ing làm chủ ngữ → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Khi chủ ngữ là cụm động từ nguyên mẫu có "to" hoặc cụm V-ing (danh động từ), động từ chính luôn chia số ít vì cả cụm được xem là MỘT ý duy nhất.</td><td style="padding:8px;vertical-align:top"><i>Jogging every day is good for your health.</i><br><span style="color:var(--text-soft);font-size:12px">→ Chạy bộ mỗi ngày tốt cho sức khỏe của bạn.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Mệnh đề danh từ làm chủ ngữ → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Khi chủ ngữ là một mệnh đề danh từ (that, what, where, how, why...), động từ chính chia số ít vì cả mệnh đề được xem là một ý duy nhất.</td><td style="padding:8px;vertical-align:top"><i>That trees lose their leaves is a sign of winter.</i><br><span style="color:var(--text-soft);font-size:12px">→ Việc cây rụng lá là dấu hiệu của mùa đông.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Tên phim/sách/tổ chức làm chủ ngữ → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Khi chủ ngữ là tên riêng của phim, sách, báo, tổ chức... (dù chứa danh từ số nhiều hoặc "and"), động từ vẫn số ít vì đó là MỘT tên gọi duy nhất.</td><td style="padding:8px;vertical-align:top"><i>"Tom and Jerry" is my son's favorite cartoon.</i><br><span style="color:var(--text-soft);font-size:12px">→ "Tom and Jerry" là phim hoạt hình yêu thích của con trai tôi.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Đại từ bất định (some-/no-/every-/any- + thing/one/body) → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">someone/somebody, no one/nobody, everyone/everybody, anyone/anybody, something, nothing, everything, anything... luôn số ít.</td><td style="padding:8px;vertical-align:top"><i>Everything seems perfect.</i><br><span style="color:var(--text-soft);font-size:12px">→ Mọi thứ dường như hoàn hảo.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Đại lượng thời gian/tiền bạc/khoảng cách/đo lường → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Khi chủ ngữ là một cụm chỉ số lượng thời gian, tiền bạc, khoảng cách hay phép đo được xem là MỘT khối lượng duy nhất, động từ chia số ít.</td><td style="padding:8px;vertical-align:top"><i>Two months is too long for him to wait.</i><br><span style="color:var(--text-soft);font-size:12px">→ Hai tháng là quá dài để anh ấy chờ đợi.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Danh từ có hình thức số nhiều (-s) nhưng nghĩa số ít → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Một số danh từ tận cùng bằng "-s" nhưng vẫn số ít: tên môn học (physics, mathematics, economics, linguistics, politics, genetics, phonetics...), tên môn thể thao/trò chơi (athletics, billiards, checkers, darts, dominoes...), tên bệnh (measles, mumps, diabetes, rabies, shingles, rickets...), tên một số quốc gia/thành phố (the United States, the Philippines, Wales, Marseilles, Brussels, Athens...).</td><td style="padding:8px;vertical-align:top"><i>Physics is my favorite subject.</i><br><span style="color:var(--text-soft);font-size:12px">→ Vật lý là môn học yêu thích của tôi.</span><br><i>Billiards is a game played by two people on a table.</i><br><span style="color:var(--text-soft);font-size:12px">→ Bida là môn chơi giữa hai người trên bàn.</span><br><i>Measles is a dangerous disease.</i><br><span style="color:var(--text-soft);font-size:12px">→ Bệnh sởi là một căn bệnh nguy hiểm.</span><br><i>The United States is a powerful country.</i><br><span style="color:var(--text-soft);font-size:12px">→ Nước Mỹ là một quốc gia hùng mạnh.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">A large amount of / A great deal of + N không đếm được → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"A large amount of" và "a great deal of" đi với danh từ không đếm được, động từ luôn số ít.</td><td style="padding:8px;vertical-align:top"><i>A great deal of money is spent on this campaign.</i><br><span style="color:var(--text-soft);font-size:12px">→ Rất nhiều tiền được chi cho chiến dịch này.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Neither of / Either of + N số nhiều → V số ít</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"Neither of" và "Either of" + danh từ số nhiều luôn đi với động từ số ít.</td><td style="padding:8px;vertical-align:top"><i>Neither answer is correct.</i><br><span style="color:var(--text-soft);font-size:12px">→ Không câu trả lời nào đúng cả.</span></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span style="background:linear-gradient(90deg,#457B9D,#5b9bc4);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">V(nhiều)</span> 2. Các trường hợp Động từ chia SỐ NHIỀU
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
          <thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Trường hợp</th><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead>
          <tbody>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Danh từ số nhiều → V số nhiều</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Chủ ngữ là danh từ số nhiều (đuôi -s/-es hoặc bất quy tắc) → động từ số nhiều (are/were, V nguyên thể).</td><td style="padding:8px;vertical-align:top"><i>Apples are more expensive than oranges.</i><br><span style="color:var(--text-soft);font-size:12px">→ Táo đắt hơn cam.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">N1 and N2 (2 đối tượng khác nhau) → V số nhiều</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Hai danh từ nối bằng "and" thường đi với V số nhiều, TRỪ khi chúng cùng chỉ một người/vật/món ăn duy nhất — khi đó V số ít.</td><td style="padding:8px;vertical-align:top"><i>My sister and I like listening to classical music.</i><br><span style="color:var(--text-soft);font-size:12px">→ Chị gái tôi và tôi thích nghe nhạc cổ điển.</span><br><i>The professor and secretary is on business.</i><br><span style="color:var(--text-soft);font-size:12px">→ Vị giáo sư kiêm thư ký (1 người) đang đi công tác.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Danh từ không tận cùng -s nhưng nghĩa số nhiều → V số nhiều</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">people, cattle, police, army (từng thành viên), children, women, men, teeth, feet, mice... luôn đi với V số nhiều.</td><td style="padding:8px;vertical-align:top"><i>Many people are waiting for the bus in the rain.</i><br><span style="color:var(--text-soft);font-size:12px">→ Nhiều người đang đợi xe buýt trong mưa.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">The + adjective (chỉ một tập hợp người) → V số nhiều</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"the + tính từ" chỉ một nhóm/tầng lớp người (the blind, the rich, the poor, the unemployed, the disabled, the wounded...) → V số nhiều.</td><td style="padding:8px;vertical-align:top"><i>The blind are the people who can't see anything.</i><br><span style="color:var(--text-soft);font-size:12px">→ Người mù là những người không nhìn thấy gì.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Both + S1 + and + S2 → V số nhiều</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"both...and..." luôn đi với V số nhiều vì luôn chỉ từ hai đối tượng trở lên.</td><td style="padding:8px;vertical-align:top"><i>Both he and his wife are very generous.</i><br><span style="color:var(--text-soft);font-size:12px">→ Cả anh ấy và vợ đều rất hào phóng.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Danh từ chỉ vật đi theo cặp → V số nhiều</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">trousers/pants, jeans, shoes, glasses, scissors, shorts, pajamas... luôn số nhiều.</td><td style="padding:8px;vertical-align:top"><i>The scissors are very sharp.</i><br><span style="color:var(--text-soft);font-size:12px">→ Cái kéo này rất sắc.</span></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span style="background:linear-gradient(90deg,#457B9D,#5b9bc4);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">CN1/CN2</span> 3. Động từ chia theo Chủ ngữ thứ nhất hoặc Chủ ngữ thứ hai
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
          <thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Trường hợp</th><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead>
          <tbody>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">N1 + as well as/with/together with/along with/accompanied by + N2 → V chia theo N1</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Các cụm "as well as, with, together with, along with, accompanied by..." chỉ là cụm bổ nghĩa chêm vào, V chỉ chia theo danh từ đứng TRƯỚC (chủ ngữ chính).</td><td style="padding:8px;vertical-align:top"><i>Mrs. Smith together with her sons is away on holiday.</i><br><span style="color:var(--text-soft);font-size:12px">→ Bà Smith, cùng với các con trai, đang đi nghỉ.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">N1 of N2 → V chia theo N1 (đứng trước "of")</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Hai danh từ nối bằng "of" (N1 of N2), động từ chia theo danh từ ĐẦU TIÊN — chủ ngữ thật của câu.</td><td style="padding:8px;vertical-align:top"><i>The study of how living things work is called physiology.</i><br><span style="color:var(--text-soft);font-size:12px">→ Ngành nghiên cứu cách sinh vật hoạt động được gọi là sinh lý học.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">either...or / neither...nor / not only...but also / or / nor / not...but → V chia theo chủ ngữ thứ 2 (gần V nhất)</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Với các cặp liên từ nối hai chủ ngữ, động từ chia theo chủ ngữ ĐỨNG SAU (gần động từ nhất — "gần đâu chia đó").</td><td style="padding:8px;vertical-align:top"><i>Neither she nor her children were inherited from the will.</i><br><span style="color:var(--text-soft);font-size:12px">→ Cả cô ấy lẫn các con đều không được thừa hưởng từ di chúc.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">none/some/all/most/majority/minority/half/phân số/phần trăm + of + N → V chia theo N</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">none of, some of, all of, most of, the majority/minority of, half of, phân số, phần trăm + N → động từ chia theo danh từ sau "of".</td><td style="padding:8px;vertical-align:top"><i>Some of the students are late for class.</i><br><span style="color:var(--text-soft);font-size:12px">→ Một vài học sinh đến lớp muộn.</span><br><i>Most of the water is polluted.</i><br><span style="color:var(--text-soft);font-size:12px">→ Phần lớn lượng nước bị ô nhiễm.</span></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="mb-3">
      <summary class="glass rounded-2xl p-4 font-700 text-dark2 flex items-center gap-2 cursor-pointer card-hover">
        <span style="background:linear-gradient(90deg,#457B9D,#5b9bc4);color:#fff;padding:2px 10px;border-radius:8px;font-size:12px">2 cách</span> 4. Các trường hợp đặc biệt — Động từ có thể chia theo 2 cách
        <i data-lucide="chevron-down" style="width:16px;height:16px;margin-left:auto;color:var(--accent)"></i>
      </summary>
      <div class="mt-2 glass rounded-2xl p-4" style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px;min-width:560px">
          <thead><tr style="background:rgba(69,123,157,.1)"><th style="padding:8px;text-align:left">Trường hợp</th><th style="padding:8px;text-align:left">Quy tắc</th><th style="padding:8px;text-align:left">Ví dụ</th></tr></thead>
          <tbody>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Đảo ngữ với trạng ngữ chỉ nơi chốn</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Khi trạng ngữ chỉ nơi chốn đảo lên đầu câu, động từ hòa hợp với danh từ đứng SAU nó (chủ ngữ thật).</td><td style="padding:8px;vertical-align:top"><i>On the top of the hill is a temple.</i><br><span style="color:var(--text-soft);font-size:12px">→ Trên đỉnh đồi là một ngôi đền.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Chủ ngữ có "No" + N</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Nếu danh từ sau "No" số ít/không đếm được → V số ít; nếu số nhiều → V số nhiều.</td><td style="padding:8px;vertical-align:top"><i>No money has been invested in this company for 2 months.</i><br><span style="color:var(--text-soft);font-size:12px">→ Không có khoản tiền nào được đầu tư vào công ty này trong 2 tháng.</span><br><i>No lessons were given to us this morning.</i><br><span style="color:var(--text-soft);font-size:12px">→ Sáng nay không có bài học nào được giao.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Đại từ sở hữu (mine/his/hers/yours/ours/theirs)</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Xem danh từ mà đại từ sở hữu thay thế là số ít hay số nhiều để chia động từ.</td><td style="padding:8px;vertical-align:top"><i>Give me your scissors. Mine have been broken.</i><br><span style="color:var(--text-soft);font-size:12px">→ Đưa tôi cây kéo của bạn. Cây của tôi bị gãy rồi.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Mệnh đề quan hệ</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">Động từ trong mệnh đề quan hệ (who/which/that + V) hòa hợp với danh từ đứng trước đại từ quan hệ (tiền ngữ), không phải chủ ngữ mệnh đề chính.</td><td style="padding:8px;vertical-align:top"><i>One of the girls who go out is very good.</i><br><span style="color:var(--text-soft);font-size:12px">→ Một trong những cô gái đi ra ngoài là rất tốt.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Cấu trúc There is/are</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"There + V + N" — động từ chia theo danh từ đứng NGAY SAU nó.</td><td style="padding:8px;vertical-align:top"><i>There is a book on the table.</i><br><span style="color:var(--text-soft);font-size:12px">→ Có một quyển sách trên bàn.</span><br><i>There are two books on the table.</i><br><span style="color:var(--text-soft);font-size:12px">→ Có hai quyển sách trên bàn.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">Danh từ tập hợp (family, staff, team, group, committee...)</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">V số ít khi coi cả tập thể là MỘT đơn vị; V số nhiều khi nhấn mạnh hành động/ý kiến của TỪNG thành viên riêng lẻ.</td><td style="padding:8px;vertical-align:top"><i>The family are having breakfast.</i><br><span style="color:var(--text-soft);font-size:12px">→ Các thành viên trong gia đình đang ăn sáng (từng người).</span><br><i>The family is very conservative.</i><br><span style="color:var(--text-soft);font-size:12px">→ Gia đình đó (nói chung) rất bảo thủ.</span></td></tr>
            <tr><td style="padding:8px;vertical-align:top;width:26%"><b style="color:var(--accent)">A number of + N(nhiều) + V(nhiều) ≠ The number of + N(nhiều) + V(ít)</b></td><td style="padding:8px;vertical-align:top;color:var(--text-soft)">"A number of" (= một số, nhiều) → V số nhiều. "The number of" (= con số, số lượng — chính "the number" là chủ ngữ) → V số ít.</td><td style="padding:8px;vertical-align:top"><i>A number of students are going to the class picnic.</i><br><span style="color:var(--text-soft);font-size:12px">→ Một số học sinh sẽ đi dã ngoại cùng lớp.</span><br><i>The number of days in a week is seven.</i><br><span style="color:var(--text-soft);font-size:12px">→ Số ngày trong một tuần là bảy.</span></td></tr>
          </tbody>
        </table>
      </div>
    </details>
    <div class="glass rounded-2xl p-4 mb-4" style="border-left:4px solid var(--pink)">
      <div class="font-800 text-dark2 mb-2">⚠️ Lưu ý nhanh dễ nhầm</div>
      <div class="space-y-2 text-sm">
        <div class="ex-card">📌 <b>A number of</b> + N(nhiều) + <b>V(nhiều)</b> ≠ <b>The number of</b> + N(nhiều) + <b>V(ít)</b></div>
        <div class="ex-card">📌 <b>Neither/Either of</b> + N(nhiều) → luôn <b>V(ít)</b>; nhưng <b>Neither...nor / Either...or</b> nối 2 chủ ngữ → V chia theo chủ ngữ gần nhất (CN2)</div>
        <div class="ex-card">📌 <b>as well as / with / together with / along with / accompanied by</b> → V luôn chia theo chủ ngữ đứng TRƯỚC (CN1), phần sau chỉ là cụm chêm</div>
        <div class="ex-card">📌 Danh từ tập hợp (<b>family, team, staff, committee...</b>) → V(ít) khi coi là 1 khối; V(nhiều) khi nói đến hành động riêng lẻ của từng thành viên</div>
        <div class="ex-card">📌 Cấu trúc <b>There + V</b> → V chia theo danh từ đứng ngay sau nó</div>
      </div>
    </div>
`;
const SVA_EX1 = [
{id:1,type:'error',template:"{A} {B} {C} for growing children.",parts:{A:"Milk",B:"are",C:"a good source of calcium",D:""},active_letters:["A","B","C"],ans:1,correction:"is",vi:"Sữa là nguồn cung cấp canxi tốt cho trẻ đang lớn.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>is</u>"</div>
<div class="ex-card mb-2">Milk is a good source of calcium for growing children.<br><span style="color:var(--accent);font-size:13px">Sữa là nguồn cung cấp canxi tốt cho trẻ đang lớn.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Chủ ngữ là danh từ không đếm được ("milk") → động từ chia số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Milk" là danh từ không đếm được, luôn coi là số ít, nên không thể đi với "are".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">a source of</span> nguồn cung cấp</div>`},

{id:2,type:'error',template:"{A} {B} {C}.",parts:{A:"Every student in this class",B:"have",C:"finished their homework already",D:""},active_letters:["A","B","C"],ans:1,correction:"has",vi:"Mỗi học sinh trong lớp này đã hoàn thành bài tập về nhà rồi.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>has</u>"</div>
<div class="ex-card mb-2">Every student in this class has finished their homework already.<br><span style="color:var(--accent);font-size:13px">Mỗi học sinh trong lớp này đã hoàn thành bài tập về nhà rồi.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Every + N" luôn đi với động từ số ít, dù mang nghĩa nhiều người.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Every student" là chủ ngữ số ít về mặt ngữ pháp nên phải dùng "has", không phải "have".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">homework</span> bài tập về nhà</div>`},

{id:3,type:'error',template:"{A} {B} {C}.",parts:{A:"Reading books before bed",B:"help",C:"me relax after a long day",D:""},active_letters:["A","B","C"],ans:1,correction:"helps",vi:"Đọc sách trước khi ngủ giúp tôi thư giãn sau một ngày dài.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>helps</u>"</div>
<div class="ex-card mb-2">Reading books before bed helps me relax after a long day.<br><span style="color:var(--accent);font-size:13px">Đọc sách trước khi ngủ giúp tôi thư giãn sau một ngày dài.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cụm V-ing làm chủ ngữ được coi là MỘT hành động duy nhất → V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Reading books before bed" là cụm danh động từ, chủ ngữ số ít → cần "helps".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">relax</span> thư giãn</div>`},

{id:4,type:'error',template:"{A} {B} {C}.",parts:{A:"What she told us about the accident",B:"were",C:"completely untrue",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Những gì cô ấy kể cho chúng tôi về vụ tai nạn hoàn toàn không đúng sự thật.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">What she told us about the accident was completely untrue.<br><span style="color:var(--accent);font-size:13px">Những gì cô ấy kể cho chúng tôi về vụ tai nạn hoàn toàn không đúng sự thật.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Mệnh đề danh từ (bắt đầu bằng What) làm chủ ngữ → V số ít vì được coi là một ý duy nhất.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Cả mệnh đề "What she told us..." là MỘT ý, số ít → dùng "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">untrue</span> không đúng sự thật</div>`},

{id:5,type:'error',template:"{A} {B} {C}.",parts:{A:'"The Avengers"',B:"are",C:"one of the highest-grossing films of all time",D:""},active_letters:["A","B","C"],ans:1,correction:"is",vi:'"The Avengers" là một trong những bộ phim có doanh thu cao nhất mọi thời đại.',
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>is</u>"</div>
<div class="ex-card mb-2">"The Avengers" is one of the highest-grossing films of all time.<br><span style="color:var(--accent);font-size:13px">"The Avengers" là một trong những bộ phim có doanh thu cao nhất mọi thời đại.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Tên riêng của phim/sách luôn được coi là MỘT tên gọi duy nhất → V số ít, dù chứa danh từ số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "The Avengers" (dù có -s) vẫn chỉ là tên MỘT bộ phim → "is".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">highest-grossing</span> có doanh thu cao nhất</div>`},

{id:6,type:'error',template:"{A} {B} {C}.",parts:{A:"Nobody in the office",B:"know",C:"the password to the new system",D:""},active_letters:["A","B","C"],ans:1,correction:"knows",vi:"Không ai trong văn phòng biết mật khẩu của hệ thống mới.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>knows</u>"</div>
<div class="ex-card mb-2">Nobody in the office knows the password to the new system.<br><span style="color:var(--accent);font-size:13px">Không ai trong văn phòng biết mật khẩu của hệ thống mới.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đại từ bất định (nobody, everybody, someone...) luôn là số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Nobody" luôn đi với V số ít → "knows", không phải "know".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">password</span> mật khẩu</div>`},

{id:7,type:'error',template:"{A} {B} {C}.",parts:{A:"Ten thousand dollars",B:"are",C:"a huge amount to spend on a single trip",D:""},active_letters:["A","B","C"],ans:1,correction:"is",vi:"Mười nghìn đô la là một số tiền khổng lồ để chi cho một chuyến đi.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>is</u>"</div>
<div class="ex-card mb-2">Ten thousand dollars is a huge amount to spend on a single trip.<br><span style="color:var(--accent);font-size:13px">Mười nghìn đô la là một số tiền khổng lồ để chi cho một chuyến đi.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Số tiền được coi là MỘT khối duy nhất → V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Ten thousand dollars" là MỘT khoản tiền, không đếm từng đồng riêng lẻ → "is".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">a huge amount</span> một khoản khổng lồ</div>`},

{id:8,type:'error',template:"{A} {B} {C}.",parts:{A:"Mathematics",B:"are",C:"the subject I find most difficult at school",D:""},active_letters:["A","B","C"],ans:1,correction:"is",vi:"Toán học là môn tôi thấy khó nhất ở trường.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>is</u>"</div>
<div class="ex-card mb-2">Mathematics is the subject I find most difficult at school.<br><span style="color:var(--accent);font-size:13px">Toán học là môn tôi thấy khó nhất ở trường.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Tên môn học có đuôi -s nhưng là danh từ số ít (mathematics, physics, economics...).</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Mathematics" luôn là số ít dù có "-s" → "is".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">subject</span> môn học</div>`},

{id:9,type:'error',template:"{A} {B} {C}.",parts:{A:"A large amount of rubbish",B:"were",C:"dumped illegally near the river",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Một lượng lớn rác đã bị đổ trái phép gần con sông.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">A large amount of rubbish was dumped illegally near the river.<br><span style="color:var(--accent);font-size:13px">Một lượng lớn rác đã bị đổ trái phép gần con sông.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A large amount of" + danh từ không đếm được → V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "rubbish" không đếm được → luôn đi với V số ít → "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">dump</span> đổ (rác) bừa bãi</div>`},

{id:10,type:'error',template:"{A} {B} {C}.",parts:{A:"Neither of the two restaurants",B:"serve",C:"vegetarian food",D:""},active_letters:["A","B","C"],ans:1,correction:"serves",vi:"Không nhà hàng nào trong hai nhà hàng đó phục vụ món chay.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>serves</u>"</div>
<div class="ex-card mb-2">Neither of the two restaurants serves vegetarian food.<br><span style="color:var(--accent);font-size:13px">Không nhà hàng nào trong hai nhà hàng đó phục vụ món chay.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither of" + danh từ số nhiều vẫn luôn đi với V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Neither of" mang nghĩa số ít (không cái nào) → "serves".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">vegetarian</span> (món) chay</div>`},

{id:11,type:'error',template:"{A} {B} {C}.",parts:{A:"The children in the garden",B:"plays",C:"happily every afternoon",D:""},active_letters:["A","B","C"],ans:1,correction:"play",vi:"Bọn trẻ trong vườn chơi vui vẻ mỗi buổi chiều.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>play</u>"</div>
<div class="ex-card mb-2">The children in the garden play happily every afternoon.<br><span style="color:var(--accent);font-size:13px">Bọn trẻ trong vườn chơi vui vẻ mỗi buổi chiều.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "children" là số nhiều bất quy tắc của "child" → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ "the children" số nhiều → không thêm "-s" ở động từ → "play".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">happily</span> một cách vui vẻ</div>`},

{id:12,type:'error',template:"{A} {B} {C}.",parts:{A:"My father and my uncle",B:"runs",C:"a small restaurant together",D:""},active_letters:["A","B","C"],ans:1,correction:"run",vi:"Bố tôi và chú tôi cùng điều hành một nhà hàng nhỏ.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>run</u>"</div>
<div class="ex-card mb-2">My father and my uncle run a small restaurant together.<br><span style="color:var(--accent);font-size:13px">Bố tôi và chú tôi cùng điều hành một nhà hàng nhỏ.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Hai chủ ngữ là hai người khác nhau nối bằng "and" → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "father" và "uncle" là hai người khác nhau (không phải một người kiêm hai vai trò) → "run".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">run a restaurant</span> điều hành nhà hàng</div>`},

{id:13,type:'error',template:"{A} {B} {C}.",parts:{A:"The police",B:"was",C:"called to the scene immediately after the alarm went off",D:""},active_letters:["A","B","C"],ans:1,correction:"were",vi:"Cảnh sát đã được gọi đến hiện trường ngay sau khi chuông báo động vang lên.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>were</u>"</div>
<div class="ex-card mb-2">The police were called to the scene immediately after the alarm went off.<br><span style="color:var(--accent);font-size:13px">Cảnh sát đã được gọi đến hiện trường ngay sau khi chuông báo động vang lên.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "police" không có đuôi -s nhưng luôn mang nghĩa số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "The police" luôn đi với V số nhiều → "were".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">go off</span> (chuông) reo lên</div>`},

{id:14,type:'error',template:"{A} {B} {C}.",parts:{A:"The elderly",B:"needs",C:"more attention and care from the community",D:""},active_letters:["A","B","C"],ans:1,correction:"need",vi:"Người cao tuổi cần nhiều sự quan tâm và chăm sóc hơn từ cộng đồng.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>need</u>"</div>
<div class="ex-card mb-2">The elderly need more attention and care from the community.<br><span style="color:var(--accent);font-size:13px">Người cao tuổi cần nhiều sự quan tâm và chăm sóc hơn từ cộng đồng.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The + tính từ" chỉ một nhóm người trong xã hội → luôn đi với V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "The elderly" = những người cao tuổi (số nhiều) → "need".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">attention</span> sự quan tâm</div>`},

{id:15,type:'error',template:"{A} {B} {C}.",parts:{A:"Both the manager and the staff",B:"was",C:"invited to the annual dinner",D:""},active_letters:["A","B","C"],ans:1,correction:"were",vi:"Cả người quản lý và nhân viên đều được mời đến bữa tiệc thường niên.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>were</u>"</div>
<div class="ex-card mb-2">Both the manager and the staff were invited to the annual dinner.<br><span style="color:var(--accent);font-size:13px">Cả người quản lý và nhân viên đều được mời đến bữa tiệc thường niên.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Both...and..." luôn đi với V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Cấu trúc "both A and B" luôn chỉ từ 2 đối tượng trở lên → "were".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">annual dinner</span> bữa tiệc thường niên</div>`},

{id:16,type:'error',template:"{A} {B} {C}.",parts:{A:"My glasses",B:"is",C:"broken, so I can't read the small print",D:""},active_letters:["A","B","C"],ans:1,correction:"are",vi:"Kính của tôi bị vỡ nên tôi không đọc được chữ nhỏ.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>are</u>"</div>
<div class="ex-card mb-2">My glasses are broken, so I can't read the small print.<br><span style="color:var(--accent);font-size:13px">Kính của tôi bị vỡ nên tôi không đọc được chữ nhỏ.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Danh từ chỉ vật đi theo cặp (glasses, trousers, scissors...) luôn là số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "glasses" (kính) luôn số nhiều → "are".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">small print</span> chữ in nhỏ</div>`},

{id:17,type:'error',template:"{A} {B} {C}.",parts:{A:"The manager, together with his assistants,",B:"were",C:"reviewing the budget report",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Người quản lý, cùng với các trợ lý của mình, đang xem xét báo cáo ngân sách.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">The manager, together with his assistants, was reviewing the budget report.<br><span style="color:var(--accent);font-size:13px">Người quản lý, cùng với các trợ lý của mình, đang xem xét báo cáo ngân sách.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "together with..." chỉ là phần chêm, V chia theo chủ ngữ chính đứng trước.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ chính là "The manager" (số ít) → "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">budget report</span> báo cáo ngân sách</div>`},

{id:18,type:'error',template:"{A} {B} {C}.",parts:{A:"The quality of these products",B:"have",C:"improved a lot recently",D:""},active_letters:["A","B","C"],ans:1,correction:"has",vi:"Chất lượng của những sản phẩm này đã cải thiện rất nhiều gần đây.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>has</u>"</div>
<div class="ex-card mb-2">The quality of these products has improved a lot recently.<br><span style="color:var(--accent);font-size:13px">Chất lượng của những sản phẩm này đã cải thiện rất nhiều gần đây.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Hai danh từ nối bằng "of" (N1 of N2): V chia theo N1 — danh từ đứng trước "of".</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật là "The quality" (số ít), không phải "these products" → "has".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">quality</span> chất lượng</div>`},

{id:19,type:'error',template:"{A} {B} {C}.",parts:{A:"Not only the students but also the teacher",B:"were",C:"surprised by the announcement",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Không chỉ học sinh mà cả giáo viên cũng ngạc nhiên trước thông báo đó.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">Not only the students but also the teacher was surprised by the announcement.<br><span style="color:var(--accent);font-size:13px">Không chỉ học sinh mà cả giáo viên cũng ngạc nhiên trước thông báo đó.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "not only...but also..." nối 2 chủ ngữ: V chia theo chủ ngữ đứng SAU (gần V nhất).</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ gần V nhất là "the teacher" (số ít) → "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">announcement</span> thông báo</div>`},

{id:20,type:'error',template:"{A} {B} {C}.",parts:{A:"Most of the information in this report",B:"are",C:"outdated",D:""},active_letters:["A","B","C"],ans:1,correction:"is",vi:"Phần lớn thông tin trong báo cáo này đã lỗi thời.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>is</u>"</div>
<div class="ex-card mb-2">Most of the information in this report is outdated.<br><span style="color:var(--accent);font-size:13px">Phần lớn thông tin trong báo cáo này đã lỗi thời.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Most of" + danh từ: V chia theo danh từ đứng sau "of".</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "information" không đếm được, số ít → "is".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">outdated</span> lỗi thời</div>`},

{id:21,type:'error',template:"{A} {B} {C}.",parts:{A:"Beside the river",B:"stand",C:"an old wooden cabin",D:""},active_letters:["A","B","C"],ans:1,correction:"stands",vi:"Bên cạnh dòng sông là một căn nhà gỗ cũ.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>stands</u>"</div>
<div class="ex-card mb-2">Beside the river stands an old wooden cabin.<br><span style="color:var(--accent);font-size:13px">Bên cạnh dòng sông là một căn nhà gỗ cũ.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đảo ngữ với trạng ngữ nơi chốn: V chia theo danh từ đứng ngay sau nó.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật "an old wooden cabin" số ít → "stands".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">cabin</span> căn nhà gỗ nhỏ</div>`},

{id:22,type:'error',template:"{A} {B} {C}.",parts:{A:"No students",B:"was",C:"willing to answer the teacher's difficult question",D:""},active_letters:["A","B","C"],ans:1,correction:"were",vi:"Không học sinh nào sẵn lòng trả lời câu hỏi khó của giáo viên.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>were</u>"</div>
<div class="ex-card mb-2">No students were willing to answer the teacher's difficult question.<br><span style="color:var(--accent);font-size:13px">Không học sinh nào sẵn lòng trả lời câu hỏi khó của giáo viên.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "No" + danh từ số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "students" số nhiều theo sau "No" → V số nhiều → "were".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">willing to</span> sẵn lòng làm gì</div>`},

{id:23,type:'error',template:"{A} {B} {C} {D}.",parts:{A:"My keys are missing.",B:"Yours",C:"was",D:"on the table this morning"},active_letters:["B","C","D"],ans:1,correction:"were",vi:"Chìa khóa của tôi bị mất. Chìa khóa của bạn đã ở trên bàn sáng nay.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: C — sửa thành "<u>were</u>"</div>
<div class="ex-card mb-2">My keys are missing. Yours were on the table this morning.<br><span style="color:var(--accent);font-size:13px">Chìa khóa của tôi bị mất. Chìa khóa của bạn đã ở trên bàn sáng nay.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đại từ sở hữu (Yours, Mine...) chia V theo danh từ mà nó thay thế.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Yours" thay cho "your keys" (số nhiều) → "were", không phải "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">missing</span> bị mất, thất lạc</div>`},

{id:24,type:'error',template:"{A} {B} {C}.",parts:{A:"She is one of the few employees who",B:"works",C:"overtime every week",D:""},active_letters:["A","B","C"],ans:1,correction:"work",vi:"Cô ấy là một trong số ít nhân viên làm thêm giờ mỗi tuần.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>work</u>"</div>
<div class="ex-card mb-2">She is one of the few employees who work overtime every week.<br><span style="color:var(--accent);font-size:13px">Cô ấy là một trong số ít nhân viên làm thêm giờ mỗi tuần.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Trong mệnh đề quan hệ, V chia theo tiền ngữ (danh từ đứng trước who/which/that), không theo chủ ngữ mệnh đề chính.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Tiền ngữ là "employees" (số nhiều), không phải "She" → "work".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">overtime</span> làm thêm giờ</div>`},

{id:25,type:'error',template:"{A} {B} {C}.",parts:{A:"There",B:"is",C:"many reasons why the project failed",D:""},active_letters:["A","B","C"],ans:1,correction:"are",vi:"Có nhiều lý do khiến dự án thất bại.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>are</u>"</div>
<div class="ex-card mb-2">There are many reasons why the project failed.<br><span style="color:var(--accent);font-size:13px">Có nhiều lý do khiến dự án thất bại.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cấu trúc "There + V" — V chia theo danh từ đứng ngay sau nó.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Danh từ theo sau là "reasons" (số nhiều) → "are".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">fail</span> thất bại</div>`},

{id:26,type:'error',template:"{A} {B} {C}.",parts:{A:"The jury",B:"have",C:"reached its verdict after five hours of deliberation",D:""},active_letters:["A","B","C"],ans:1,correction:"has",vi:"Bồi thẩm đoàn đã đưa ra phán quyết của mình sau năm giờ nghị án.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>has</u>"</div>
<div class="ex-card mb-2">The jury has reached its verdict after five hours of deliberation.<br><span style="color:var(--accent);font-size:13px">Bồi thẩm đoàn đã đưa ra phán quyết của mình sau năm giờ nghị án.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Danh từ tập hợp (jury, family, team...) chia V số ít khi coi cả tập thể là MỘT khối thống nhất.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Câu dùng "its" (sở hữu số ít) nên phải nhất quán dùng V số ít "has".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">verdict</span> phán quyết &nbsp;|&nbsp; <span class="suffix-pill">deliberation</span> sự nghị án</div>`},

{id:27,type:'error',template:"{A} {B} {C}.",parts:{A:"The number of unemployed workers",B:"have",C:"increased sharply this year",D:""},active_letters:["A","B","C"],ans:1,correction:"has",vi:"Số lượng lao động thất nghiệp đã tăng mạnh trong năm nay.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>has</u>"</div>
<div class="ex-card mb-2">The number of unemployed workers has increased sharply this year.<br><span style="color:var(--accent);font-size:13px">Số lượng lao động thất nghiệp đã tăng mạnh trong năm nay.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The number of" — chính "the number" là chủ ngữ số ít → V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Đừng nhầm với "A number of" (V số nhiều) — ở đây là "The number of" → "has".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">unemployed</span> thất nghiệp</div>`},

{id:28,type:'error',template:"{A} {B} {C}.",parts:{A:"Neither the manager nor the employees",B:"was",C:"informed about the sudden change",D:""},active_letters:["A","B","C"],ans:1,correction:"were",vi:"Cả người quản lý lẫn nhân viên đều không được thông báo về sự thay đổi đột ngột.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>were</u>"</div>
<div class="ex-card mb-2">Neither the manager nor the employees were informed about the sudden change.<br><span style="color:var(--accent);font-size:13px">Cả người quản lý lẫn nhân viên đều không được thông báo về sự thay đổi đột ngột.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither...nor..." nối 2 chủ ngữ: V chia theo chủ ngữ đứng SAU (gần V nhất).</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ gần V nhất là "the employees" (số nhiều) → "were".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">sudden change</span> sự thay đổi đột ngột</div>`},

{id:29,type:'error',template:"{A} {B} {C}.",parts:{A:"A third of the students in this school",B:"walks",C:"to class every day",D:""},active_letters:["A","B","C"],ans:1,correction:"walk",vi:"Một phần ba học sinh trong trường này đi bộ đến lớp mỗi ngày.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>walk</u>"</div>
<div class="ex-card mb-2">A third of the students in this school walk to class every day.<br><span style="color:var(--accent);font-size:13px">Một phần ba học sinh trong trường này đi bộ đến lớp mỗi ngày.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Phân số + "of" + danh từ: V chia theo danh từ đứng sau "of".</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "students" số nhiều → "walk", không phải "walks".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">a third of</span> một phần ba</div>`},

{id:30,type:'error',template:"{A} {B} {C}.",parts:{A:"A number of complaints",B:"has",C:"been filed against the new policy",D:""},active_letters:["A","B","C"],ans:1,correction:"have",vi:"Một số đơn khiếu nại đã được nộp phản đối chính sách mới.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>have</u>"</div>
<div class="ex-card mb-2">A number of complaints have been filed against the new policy.<br><span style="color:var(--accent);font-size:13px">Một số đơn khiếu nại đã được nộp phản đối chính sách mới.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A number of" + danh từ số nhiều → V số nhiều (khác với "the number of").</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "A number of complaints" mang nghĩa "nhiều đơn khiếu nại" → "have".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">file a complaint</span> nộp đơn khiếu nại &nbsp;|&nbsp; <span class="suffix-pill">policy</span> chính sách</div>`},
];
const SVA_EX2 = [
{id:1,type:'fill',q:"Good health __________ essential for a happy and fulfilling life.",vi:"Sức khỏe tốt __________ điều thiết yếu cho một cuộc sống hạnh phúc và trọn vẹn.",opts:["A. are","B. is","C. am","D. were"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">Good health is essential for a happy and fulfilling life.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Good health" là danh từ không đếm được → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A/D số nhiều — sai vì chủ ngữ không đếm được, số ít.<br>C "am" chỉ dùng với "I".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">fulfilling</span> trọn vẹn, mãn nguyện</div>`},

{id:2,type:'fill',q:"The majority of people __________ spending time with their families.",vi:"Phần lớn mọi người __________ thích dành thời gian cho gia đình.",opts:["A. was enjoying","B. enjoys","C. is enjoying","D. enjoy"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. enjoy</div>
<div class="ex-card mb-2">The majority of people enjoy spending time with their families.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The majority of" + N: V chia theo danh từ sau "of" — "people" số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C dùng "was/is" — số ít, sai vì "people" số nhiều.<br>B "enjoys" chia theo ngôi thứ 3 số ít — sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">majority</span> phần lớn, đa số</div>`},

{id:3,type:'fill',q:"The windows of this room __________ repairing.",vi:"Những cửa sổ của căn phòng này __________ cần được sửa.",opts:["A. has needed","B. need","C. needs","D. was needing"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. need</div>
<div class="ex-card mb-2">The windows of this room need repairing.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> N1 of N2: V chia theo N1 — "the windows" (số nhiều) đứng trước "of".</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — chia số ít, sai vì "windows" số nhiều.<br>D — sai thì và số.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">need + V-ing</span> cần được...</div>`},

{id:4,type:'fill',q:"Sixty percent of the project __________ completed.",vi:"Sáu mươi phần trăm dự án __________ hoàn thành.",opts:["A. were","B. are","C. have been","D. has been"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. has been</div>
<div class="ex-card mb-2">Sixty percent of the project has been completed.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Phần trăm + "of" + N: V chia theo danh từ sau "of" — "the project" số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, C — số nhiều, sai vì "the project" là danh từ số ít (1 dự án).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">completed</span> đã hoàn thành</div>`},

{id:5,type:'fill',q:"My new trousers __________ too long. I need to get them shortened.",vi:"Chiếc quần mới của tôi __________ quá dài. Tôi cần đem sửa ngắn lại.",opts:["A. was","B. am","C. are","D. is"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. are</div>
<div class="ex-card mb-2">My new trousers are too long. I need to get them shortened.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "trousers" là danh từ chỉ vật đi theo cặp — luôn số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — số ít, sai.<br>B "am" chỉ dùng với "I".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">shortened</span> được làm ngắn lại</div>`},

{id:6,type:'fill',q:"Women __________ significant contributions to the field of science.",vi:"Phụ nữ __________ những đóng góp đáng kể cho lĩnh vực khoa học.",opts:["A. makes","B. was making","C. has made","D. are making"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. are making</div>
<div class="ex-card mb-2">Women are making significant contributions to the field of science.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "women" là số nhiều bất quy tắc của "woman" → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, C — chia số ít, sai vì "women" số nhiều.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">contribution</span> sự đóng góp</div>`},

{id:7,type:'fill',q:"Everybody __________ to be successful in life.",vi:"Ai cũng __________ muốn thành công trong cuộc sống.",opts:["A. is wanting","B. wants","C. have wanted","D. want"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. wants</div>
<div class="ex-card mb-2">Everybody wants to be successful in life.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Everybody" là đại từ bất định, luôn số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — "want" là động từ chỉ trạng thái, không dùng thì tiếp diễn.<br>C, D — chia số nhiều, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">successful</span> thành công</div>`},

{id:8,type:'fill',q:"No pets __________ allowed in the hotel.",vi:"Không có thú cưng nào __________ được phép vào khách sạn.",opts:["A. are","B. is","C. was","D. have been"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. are</div>
<div class="ex-card mb-2">No pets are allowed in the hotel.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "No" + danh từ số nhiều ("pets") → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C — số ít, sai.<br>D — sai thì, không hợp ngữ cảnh khái quát.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">allowed</span> được phép</div>`},

{id:9,type:'fill',q:"I can't find my phone. Somebody __________ it by mistake.",vi:"Tôi không tìm thấy điện thoại của mình. Có ai đó __________ nhầm nó rồi.",opts:["A. have taken","B. takes","C. take","D. has taken"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. has taken</div>
<div class="ex-card mb-2">I can't find my phone. Somebody has taken it by mistake.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Somebody" là đại từ bất định, số ít; ngữ cảnh cần thì hiện tại hoàn thành.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — chia số nhiều, sai.<br>B, C — sai thì, không hợp ngữ cảnh "by mistake" đã xảy ra.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">by mistake</span> nhầm, do nhầm lẫn</div>`},

{id:10,type:'fill',q:"A number of students __________ their assignments.",vi:"Một số học sinh __________ bài tập của mình.",opts:["A. was submitting","B. has submitted","C. is submitting","D. have submitted"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. have submitted</div>
<div class="ex-card mb-2">A number of students have submitted their assignments.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A number of" + N số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, C — chia số ít, sai vì "A number of students" mang nghĩa số nhiều.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">submit</span> nộp, đệ trình</div>`},

{id:11,type:'fill',q:"Mary, together with her friends, _______ a surprise party for John's birthday.",vi:"Mary, cùng với bạn bè, __________ một bữa tiệc bất ngờ cho sinh nhật John.",opts:["A. are organizing","B. is organizing","C. have organized","D. organize"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is organizing</div>
<div class="ex-card mb-2">Mary, together with her friends, is organizing a surprise party for John's birthday.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "together with..." chỉ là cụm chêm, V chia theo chủ ngữ chính "Mary" (số ít).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai vì bỏ qua nguyên tắc chủ ngữ chính là "Mary".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">surprise party</span> bữa tiệc bất ngờ</div>`},

{id:12,type:'fill',q:"Each student __________ responsible for completing their own assignments.",vi:"Mỗi học sinh __________ có trách nhiệm hoàn thành bài tập của riêng mình.",opts:["A. have been","B. am","C. are","D. is"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. is</div>
<div class="ex-card mb-2">Each student is responsible for completing their own assignments.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Each + N" → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số nhiều, sai.<br>B "am" chỉ dùng với "I".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">responsible for</span> chịu trách nhiệm về</div>`},

{id:13,type:'fill',q:"Diabetes __________ careful management of blood sugar levels.",vi:"Bệnh tiểu đường __________ sự quản lý cẩn thận nồng độ đường trong máu.",opts:["A. have required","B. were requiring","C. requires","D. require"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. requires</div>
<div class="ex-card mb-2">Diabetes requires careful management of blood sugar levels.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Diabetes" là tên bệnh, có đuôi -s nhưng là danh từ số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, D — chia số nhiều, sai vì "diabetes" luôn số ít.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">blood sugar level</span> nồng độ đường huyết</div>`},

{id:14,type:'fill',q:"The unemployed __________ employment opportunities through online platforms.",vi:"Những người thất nghiệp __________ tìm kiếm cơ hội việc làm qua các nền tảng trực tuyến.",opts:["A. has sought","B. seeks","C. is seeking","D. are seeking"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. are seeking</div>
<div class="ex-card mb-2">The unemployed are seeking employment opportunities through online platforms.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The + adj" chỉ một nhóm người (những người thất nghiệp) → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, C — chia số ít, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">employment opportunity</span> cơ hội việc làm</div>`},

{id:15,type:'fill',q:"The number of accidents on the road __________ due to stricter regulations.",vi:"Số vụ tai nạn trên đường __________ giảm nhờ các quy định nghiêm ngặt hơn.",opts:["A. reduce","B. has reduced","C. have reduced","D. reduces"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. has reduced</div>
<div class="ex-card mb-2">The number of accidents on the road has reduced due to stricter regulations.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The number of" — chính "the number" là chủ ngữ số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số nhiều, sai.<br>D — sai thì (nên dùng hiện tại hoàn thành với "due to" chỉ kết quả).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">stricter regulations</span> quy định nghiêm ngặt hơn</div>`},

{id:16,type:'fill',q:"The United States ________ for its diverse culture and rich history.",vi:"Nước Mỹ __________ nổi tiếng vì nền văn hóa đa dạng và lịch sử phong phú.",opts:["A. knows","B. is known","C. has known","D. know"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is known</div>
<div class="ex-card mb-2">The United States is known for its diverse culture and rich history.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The United States" là tên quốc gia, luôn số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — sai nghĩa (chủ động thay vì bị động).<br>C — sai nghĩa/thì.<br>D — chia số nhiều, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">diverse</span> đa dạng</div>`},

{id:17,type:'fill',q:"Physics __________ my daughter's favourite subject so she spends a lot of time studying it every day.",vi:"Vật lý __________ môn học yêu thích của con gái tôi nên cô bé dành rất nhiều thời gian học nó mỗi ngày.",opts:["A. were","B. was","C. are","D. is"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. is</div>
<div class="ex-card mb-2">Physics is my daughter's favourite subject so she spends a lot of time studying it every day.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Physics" là tên môn học, luôn số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số nhiều, sai.<br>B — sai thì (câu diễn tả sự thật hiện tại).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">favourite subject</span> môn học yêu thích</div>`},

{id:18,type:'fill',q:"No food __________ left in the refrigerator.",vi:"Không còn thức ăn nào __________ trong tủ lạnh.",opts:["A. have been","B. are","C. were","D. is"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. is</div>
<div class="ex-card mb-2">No food is left in the refrigerator.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "No" + danh từ không đếm được ("food") → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, C — chia số nhiều, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">refrigerator</span> tủ lạnh</div>`},

{id:19,type:'fill',q:"Jogging in the park ________ a great way to keep fit.",vi:"Chạy bộ trong công viên __________ một cách tuyệt vời để giữ dáng.",opts:["A. is","B. are","C. were","D. was"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. is</div>
<div class="ex-card mb-2">Jogging in the park is a great way to keep fit.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cụm V-ing "Jogging in the park" làm chủ ngữ → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C — số nhiều, sai.<br>D — sai thì.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">keep fit</span> giữ dáng, giữ sức khỏe</div>`},

{id:20,type:'fill',q:"Adults __________ the freedom to make their own decisions.",vi:"Người trưởng thành __________ quyền tự do đưa ra quyết định của riêng mình.",opts:["A. is","B. are","C. have","D. has"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. have</div>
<div class="ex-card mb-2">Adults have the freedom to make their own decisions.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Adults" là danh từ số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — chia số ít, sai.<br>B — sai vì "are" không diễn tả nghĩa "có" (have).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">make a decision</span> đưa ra quyết định</div>`},

{id:21,type:'fill',q:"Neither John nor Mary __________ to go to the party.",vi:"Cả John lẫn Mary đều không __________ muốn đi dự tiệc.",opts:["A. wants","B. want","C. have wanted","D. is wanting"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. wants</div>
<div class="ex-card mb-2">Neither John nor Mary wants to go to the party.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither...nor...": V chia theo chủ ngữ gần nhất — "Mary" (số ít).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C — số nhiều, sai.<br>D — "want" là động từ chỉ trạng thái, không dùng thì tiếp diễn.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">neither...nor</span> không...cũng không</div>`},

{id:22,type:'fill',q:"The police __________ the crime scene for evidence now.",vi:"Cảnh sát hiện __________ khám nghiệm hiện trường vụ án để tìm bằng chứng.",opts:["A. are investigating","B. investigates","C. is investigating","D. investigate"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. are investigating</div>
<div class="ex-card mb-2">The police are investigating the crime scene for evidence now.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "police" luôn là danh từ số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C — số ít, sai.<br>D — sai thì, cần tiếp diễn vì có "now".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">crime scene</span> hiện trường vụ án &nbsp;|&nbsp; <span class="suffix-pill">evidence</span> bằng chứng</div>`},

{id:23,type:'fill',q:"A large amount of money __________ donated to the charity last year.",vi:"Một số tiền lớn __________ được quyên góp cho tổ chức từ thiện vào năm ngoái.",opts:["A. were","B. are","C. is","D. was"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. was</div>
<div class="ex-card mb-2">A large amount of money was donated to the charity last year.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A large amount of" + N không đếm được → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B — số nhiều, sai.<br>C — sai thì (có "last year" cần quá khứ).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">donate</span> quyên góp</div>`},

{id:24,type:'fill',q:"Both Marry and John __________ interested in travelling to the countryside.",vi:"Cả Marry và John đều __________ hứng thú với việc đi du lịch vùng quê.",opts:["A. is","B. was","C. has been","D. are"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. are</div>
<div class="ex-card mb-2">Both Marry and John are interested in travelling to the countryside.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Both...and..." luôn đi với V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, C — chia số ít, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">countryside</span> vùng nông thôn</div>`},

{id:25,type:'fill',q:"The CEO along with the management team __________ on a new strategy.",vi:"Vị CEO, cùng với đội ngũ quản lý, __________ nghiên cứu một chiến lược mới.",opts:["A. were working","B. is working","C. are working","D. have worked"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is working</div>
<div class="ex-card mb-2">The CEO along with the management team is working on a new strategy.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "along with..." chỉ là cụm chêm, V chia theo chủ ngữ chính "The CEO" (số ít).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">strategy</span> chiến lược</div>`},

{id:26,type:'fill',q:"Three weeks __________ like a short time, but it can feel like forever when you're waiting.",vi:"Ba tuần __________ như một khoảng thời gian ngắn, nhưng nó có thể cảm giác như vô tận khi bạn đang chờ đợi.",opts:["A. have seemed","B. seems","C. seem","D. seemed"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. seems</div>
<div class="ex-card mb-2">Three weeks seems like a short time, but it can feel like forever when you're waiting.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đại lượng thời gian được coi là MỘT khối duy nhất → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số nhiều, sai.<br>D — sai thì (câu là chân lý chung, hiện tại).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">forever</span> mãi mãi, vô tận</div>`},

{id:27,type:'fill',q:"A great deal of money __________ on advertising each year.",vi:"Một số tiền lớn __________ chi cho quảng cáo mỗi năm.",opts:["A. were spent","B. was spent","C. are spent","D. is spent"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. is spent</div>
<div class="ex-card mb-2">A great deal of money is spent on advertising each year.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A great deal of" + N không đếm được → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số nhiều, sai.<br>B — sai thì (có "each year" cần hiện tại).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">advertising</span> quảng cáo</div>`},

{id:28,type:'fill',q:"Some students __________ math challenging, while others excel in it.",vi:"Một số học sinh __________ toán học là khó, trong khi những học sinh khác lại giỏi môn này.",opts:["A. has found","B. found","C. find","D. finds"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. find</div>
<div class="ex-card mb-2">Some students find math challenging, while others excel in it.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Some" + N số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — số ít, sai.<br>B — sai thì (câu là chân lý chung, hiện tại).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">excel in</span> giỏi về, xuất sắc trong</div>`},

{id:29,type:'fill',q:"Books __________ a great source of knowledge and entertainment.",vi:"Sách __________ một nguồn kiến thức và giải trí tuyệt vời.",opts:["A. are","B. was","C. has been","D. is"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. are</div>
<div class="ex-card mb-2">Books are a great source of knowledge and entertainment.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Books" là danh từ số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C, D — chia số ít, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">entertainment</span> sự giải trí</div>`},

{id:30,type:'fill',q:"There __________ several cars parking in front of the building.",vi:"Có vài chiếc ô tô __________ đang đậu trước tòa nhà.",opts:["A. was","B. am","C. is","D. are"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. are</div>
<div class="ex-card mb-2">There are several cars parking in front of the building.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "There + V" — V chia theo danh từ theo sau: "several cars" số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số ít, sai.<br>B "am" chỉ dùng với "I".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">park</span> đỗ, đậu xe</div>`},
];
const SVA_EX3 = [
{id:1,type:'fill',q:"Every one of the applicants __________ a formal interview before being hired.",vi:"Mỗi ứng viên đều __________ một buổi phỏng vấn chính thức trước khi được tuyển dụng.",opts:["A. undergo","B. undergoes","C. are undergoing","D. have undergone"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. undergoes</div>
<div class="ex-card mb-2">Every one of the applicants undergoes a formal interview before being hired.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Every one of + N số nhiều" vẫn đi với V số ít (giống "Each of").</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai vì chủ ngữ thật là "Every one" (số ít).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">undergo</span> trải qua &nbsp;|&nbsp; <span class="suffix-pill">applicant</span> ứng viên</div>`},

{id:2,type:'fill',q:"What the manager said in the meeting __________ nothing to do with the layoffs.",vi:"Những gì người quản lý nói trong cuộc họp __________ chẳng liên quan gì đến việc sa thải cả.",opts:["A. have","B. having","C. has","D. are having"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. has</div>
<div class="ex-card mb-2">What the manager said in the meeting has nothing to do with the layoffs.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Mệnh đề danh từ ("What...") làm chủ ngữ → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — chia số nhiều, sai.<br>B — không phải dạng động từ chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">layoff</span> việc sa thải &nbsp;|&nbsp; <span class="suffix-pill">have nothing to do with</span> chẳng liên quan gì đến</div>`},

{id:3,type:'fill',q:'"Friends" __________ one of the most popular sitcoms of the 1990s.',vi:'"Friends" __________ một trong những bộ phim sitcom nổi tiếng nhất thập niên 1990.',opts:["A. are","B. is","C. were","D. have been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">"Friends" is one of the most popular sitcoms of the 1990s.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Tên phim/chương trình luôn được coi là MỘT tên gọi duy nhất → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai dù "Friends" có đuôi -s.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">sitcom</span> phim hài tình huống</div>`},

{id:4,type:'fill',q:"Anyone who breaks the rules __________ punished immediately.",vi:"Bất kỳ ai vi phạm nội quy đều __________ bị phạt ngay lập tức.",opts:["A. are","B. is","C. were","D. have been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">Anyone who breaks the rules is punished immediately.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Anyone" là đại từ bất định, luôn số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — chia số nhiều, sai.<br>C — sai thì.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">break the rules</span> vi phạm nội quy</div>`},

{id:5,type:'fill',q:"Fifty miles __________ a long distance to drive after a full day of work.",vi:"Năm mươi dặm __________ một quãng đường dài để lái xe sau một ngày làm việc dài.",opts:["A. are","B. is","C. were","D. have been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">Fifty miles is a long distance to drive after a full day of work.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đại lượng khoảng cách được coi là MỘT khối duy nhất → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — chia số nhiều, sai.<br>C — sai thì.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">distance</span> khoảng cách</div>`},

{id:6,type:'fill',q:"Statistics __________ a required course for all economics majors at this university.",vi:"Thống kê học __________ một môn học bắt buộc đối với tất cả sinh viên chuyên ngành kinh tế tại trường này.",opts:["A. are","B. is","C. were","D. have been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">Statistics is a required course for all economics majors at this university.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Statistics" (thống kê học) là tên môn học, có đuôi -s nhưng số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — chia số nhiều, sai.<br>C — sai thì.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">required course</span> môn học bắt buộc &nbsp;|&nbsp; <span class="suffix-pill">major</span> chuyên ngành</div>`},

{id:7,type:'fill',q:"The disabled __________ better access to public transportation in this city.",vi:"Người khuyết tật __________ khả năng tiếp cận giao thông công cộng tốt hơn ở thành phố này.",opts:["A. needs","B. is needing","C. need","D. has needed"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. need</div>
<div class="ex-card mb-2">The disabled need better access to public transportation in this city.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The + tính từ" chỉ một nhóm người → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — chia số ít, sai.<br>B — "need" thường không dùng thì tiếp diễn.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">access</span> khả năng tiếp cận</div>`},

{id:8,type:'fill',q:"Either the coach or the players __________ responsible for the team's poor performance.",vi:"Hoặc huấn luyện viên hoặc các cầu thủ __________ chịu trách nhiệm cho phong độ kém của đội.",opts:["A. is","B. are","C. was","D. has been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. are</div>
<div class="ex-card mb-2">Either the coach or the players are responsible for the team's poor performance.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Either...or...": V chia theo chủ ngữ gần nhất — "the players" (số nhiều).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số ít, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">poor performance</span> phong độ kém</div>`},

{id:9,type:'fill',q:"None of the advice she gave me __________ actually helpful in the end.",vi:"Không lời khuyên nào cô ấy đưa cho tôi __________ thực sự hữu ích cuối cùng cả.",opts:["A. were","B. was","C. are","D. have been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. was</div>
<div class="ex-card mb-2">None of the advice she gave me was actually helpful in the end.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "None of" + N: V chia theo danh từ sau "of" — "advice" không đếm được, số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai vì "advice" luôn không đếm được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">advice</span> lời khuyên (không đếm được)</div>`},

{id:10,type:'fill',q:"One of the reasons why he resigned __________ still unclear to his colleagues.",vi:"Một trong những lý do khiến anh ấy từ chức __________ vẫn chưa rõ ràng đối với đồng nghiệp của anh ấy.",opts:["A. are","B. is","C. were","D. have been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">One of the reasons why he resigned is still unclear to his colleagues.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "One of + N of N" — chủ ngữ thật là "One" (số ít), mệnh đề quan hệ "why he resigned" chỉ bổ nghĩa cho "reasons".</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai vì chủ ngữ chính là "One".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">resign</span> từ chức &nbsp;|&nbsp; <span class="suffix-pill">colleague</span> đồng nghiệp</div>`},

{id:11,type:'fill',q:"The audience __________ cheering loudly as soon as the singer walked on stage.",vi:"Khán giả __________ hò reo lớn ngay khi ca sĩ bước lên sân khấu.",opts:["A. was","B. is","C. were","D. has"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. were</div>
<div class="ex-card mb-2">The audience were cheering loudly as soon as the singer walked on stage.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Danh từ tập hợp "audience" chia V số nhiều khi nhấn mạnh hành động riêng lẻ của từng khán giả (hò reo).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, D — chia số ít, không hợp ngữ cảnh nhấn mạnh hành động của từng người trong đám đông.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">cheer</span> hò reo, cổ vũ</div>`},

{id:12,type:'fill',q:"The rich __________ often unaware of the struggles faced by the poor.",vi:"Người giàu __________ thường không nhận thức được những khó khăn mà người nghèo phải đối mặt.",opts:["A. is","B. are","C. was","D. has been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. are</div>
<div class="ex-card mb-2">The rich are often unaware of the struggles faced by the poor.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The + tính từ" chỉ một nhóm người (người giàu) → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số ít, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">unaware of</span> không nhận thức được &nbsp;|&nbsp; <span class="suffix-pill">struggle</span> khó khăn, sự vật lộn</div>`},

{id:13,type:'fill',q:"Not only the players but also the coach __________ satisfied with the final result.",vi:"Không chỉ các cầu thủ mà cả huấn luyện viên cũng __________ hài lòng với kết quả cuối cùng.",opts:["A. were","B. are","C. is","D. have been"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. is</div>
<div class="ex-card mb-2">Not only the players but also the coach is satisfied with the final result.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "not only...but also...": V chia theo chủ ngữ gần V nhất — "the coach" (số ít).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, D — chia số nhiều, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">satisfied with</span> hài lòng với</div>`},

{id:14,type:'fill',q:"On the shelf above the desk __________ a row of old photographs.",vi:"Trên kệ phía trên bàn làm việc __________ một dãy ảnh cũ.",opts:["A. sit","B. sits","C. are sitting","D. have sat"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. sits</div>
<div class="ex-card mb-2">On the shelf above the desk sits a row of old photographs.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đảo ngữ với trạng ngữ nơi chốn: V chia theo danh từ đứng sau — "a row" (số ít).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số nhiều, sai vì chủ ngữ thật là "a row" (một dãy), số ít.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">a row of</span> một dãy/hàng</div>`},

{id:15,type:'fill',q:"This is one of the few restaurants in town that __________ open 24 hours a day.",vi:"Đây là một trong số ít nhà hàng trong thị trấn mở cửa suốt 24 giờ mỗi ngày.",opts:["A. is","B. are","C. was","D. has been"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. are</div>
<div class="ex-card mb-2">This is one of the few restaurants in town that are open 24 hours a day.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Trong mệnh đề quan hệ, V chia theo tiền ngữ — "restaurants" (số nhiều), không phải "one".</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — chia số ít, sai vì tiền ngữ của "that" là "restaurants".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">24 hours a day</span> suốt 24 giờ mỗi ngày</div>`},
{id:16,type:'error',template:"{A} {B} {C}.",parts:{A:"Every one of the applicants",B:"undergo",C:"a formal interview before being hired",D:""},active_letters:["A","B","C"],ans:1,correction:"undergoes",vi:"Mỗi ứng viên đều trải qua một buổi phỏng vấn chính thức trước khi được tuyển dụng.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>undergoes</u>"</div>
<div class="ex-card mb-2">Every one of the applicants undergoes a formal interview before being hired.<br><span style="color:var(--accent);font-size:13px">Mỗi ứng viên đều trải qua một buổi phỏng vấn chính thức trước khi được tuyển dụng.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Every one of" + N số nhiều vẫn đi với V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật là "Every one" (số ít) → "undergoes".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">undergo</span> trải qua</div>`},

{id:17,type:'error',template:"{A} {B} {C}.",parts:{A:"The information in these documents",B:"seem",C:"to be outdated and inaccurate",D:""},active_letters:["A","B","C"],ans:1,correction:"seems",vi:"Thông tin trong những tài liệu này dường như đã lỗi thời và không chính xác.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>seems</u>"</div>
<div class="ex-card mb-2">The information in these documents seems to be outdated and inaccurate.<br><span style="color:var(--accent);font-size:13px">Thông tin trong những tài liệu này dường như đã lỗi thời và không chính xác.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "information" là danh từ không đếm được → V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật "the information" (số ít), "in these documents" chỉ là cụm bổ nghĩa → "seems".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">outdated</span> lỗi thời &nbsp;|&nbsp; <span class="suffix-pill">inaccurate</span> không chính xác</div>`},

{id:18,type:'error',template:"{A} {B} {C}.",parts:{A:"Twenty dollars",B:"seem",C:"like a fair price for this used book",D:""},active_letters:["A","B","C"],ans:1,correction:"seems",vi:"Hai mươi đô la có vẻ như là mức giá hợp lý cho quyển sách cũ này.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>seems</u>"</div>
<div class="ex-card mb-2">Twenty dollars seems like a fair price for this used book.<br><span style="color:var(--accent);font-size:13px">Hai mươi đô la có vẻ như là mức giá hợp lý cho quyển sách cũ này.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Số tiền được coi là MỘT khối duy nhất → V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Twenty dollars" là MỘT khoản tiền → "seems".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">fair price</span> mức giá hợp lý</div>`},

{id:19,type:'error',template:"{A} {B} {C}.",parts:{A:"Neither of the two proposals",B:"seem",C:"realistic given our current budget",D:""},active_letters:["A","B","C"],ans:1,correction:"seems",vi:"Không đề xuất nào trong hai đề xuất là hợp lý xét theo ngân sách hiện tại của chúng ta.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>seems</u>"</div>
<div class="ex-card mb-2">Neither of the two proposals seems realistic given our current budget.<br><span style="color:var(--accent);font-size:13px">Không đề xuất nào trong hai đề xuất là hợp lý xét theo ngân sách hiện tại của chúng ta.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither of" + N số nhiều vẫn luôn đi với V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Neither of" mang nghĩa số ít → "seems".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">proposal</span> đề xuất &nbsp;|&nbsp; <span class="suffix-pill">realistic</span> hợp lý, thực tế</div>`},

{id:20,type:'error',template:"{A} {B} {C}.",parts:{A:"The staff in this department",B:"disagrees",C:"with each other about almost everything",D:""},active_letters:["A","B","C"],ans:1,correction:"disagree",vi:"Nhân viên trong bộ phận này bất đồng ý kiến với nhau về gần như mọi thứ.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>disagree</u>"</div>
<div class="ex-card mb-2">The staff in this department disagree with each other about almost everything.<br><span style="color:var(--accent);font-size:13px">Nhân viên trong bộ phận này bất đồng ý kiến với nhau về gần như mọi thứ.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Danh từ tập hợp "staff" chia V số nhiều khi nhấn mạnh hành động riêng lẻ của từng thành viên (bất đồng với nhau).</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "with each other" cho thấy đang nói về từng cá nhân riêng biệt → V số nhiều "disagree".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">disagree with</span> bất đồng ý kiến với</div>`},

{id:21,type:'error',template:"{A} {B} {C}.",parts:{A:"A great number of visitors",B:"has complained",C:"about the long waiting time",D:""},active_letters:["A","B","C"],ans:1,correction:"have complained",vi:"Rất nhiều du khách đã phàn nàn về thời gian chờ đợi lâu.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>have complained</u>"</div>
<div class="ex-card mb-2">A great number of visitors have complained about the long waiting time.<br><span style="color:var(--accent);font-size:13px">Rất nhiều du khách đã phàn nàn về thời gian chờ đợi lâu.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A number of" (= nhiều) + N số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "A great number of visitors" mang nghĩa số nhiều → "have complained".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">complain about</span> phàn nàn về</div>`},

{id:22,type:'error',template:"{A} {B} {C}.",parts:{A:"The committee members",B:"is",C:"still debating the new proposal",D:""},active_letters:["A","B","C"],ans:1,correction:"are",vi:"Các thành viên ủy ban vẫn đang tranh luận về đề xuất mới.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>are</u>"</div>
<div class="ex-card mb-2">The committee members are still debating the new proposal.<br><span style="color:var(--accent);font-size:13px">Các thành viên ủy ban vẫn đang tranh luận về đề xuất mới.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "members" là danh từ số nhiều → V số nhiều (khác với "the committee" đứng một mình có thể số ít).</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ ở đây là "the committee members" (số nhiều, không phải chỉ "the committee") → "are".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">debate</span> tranh luận</div>`},

{id:23,type:'error',template:"{A} {B} {C}.",parts:{A:"Each of the two candidates",B:"have",C:"a strong chance of winning the election",D:""},active_letters:["A","B","C"],ans:1,correction:"has",vi:"Mỗi ứng cử viên trong hai người đều có cơ hội chiến thắng cuộc bầu cử cao.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>has</u>"</div>
<div class="ex-card mb-2">Each of the two candidates has a strong chance of winning the election.<br><span style="color:var(--accent);font-size:13px">Mỗi ứng cử viên trong hai người đều có cơ hội chiến thắng cuộc bầu cử cao.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Each of" + N số nhiều vẫn đi với V số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật là "Each" (số ít) → "has".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">candidate</span> ứng cử viên &nbsp;|&nbsp; <span class="suffix-pill">election</span> cuộc bầu cử</div>`},

{id:24,type:'error',template:"{A} {B} {C}.",parts:{A:"Economics",B:"were",C:"never my strong subject at school",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Kinh tế học chưa bao giờ là môn học mạnh của tôi ở trường.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">Economics was never my strong subject at school.<br><span style="color:var(--accent);font-size:13px">Kinh tế học chưa bao giờ là môn học mạnh của tôi ở trường.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Economics" là tên môn học, có đuôi -s nhưng số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Luôn coi "economics" là số ít → "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">strong subject</span> môn học mạnh, sở trường</div>`},

{id:25,type:'error',template:"{A} {B} {C}.",parts:{A:"Beyond the mountains",B:"lie",C:"a small, peaceful village",D:""},active_letters:["A","B","C"],ans:1,correction:"lies",vi:"Phía bên kia những ngọn núi là một ngôi làng nhỏ, yên bình.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>lies</u>"</div>
<div class="ex-card mb-2">Beyond the mountains lies a small, peaceful village.<br><span style="color:var(--accent);font-size:13px">Phía bên kia những ngọn núi là một ngôi làng nhỏ, yên bình.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đảo ngữ với trạng ngữ nơi chốn: V chia theo danh từ đứng sau.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật "a small, peaceful village" (số ít) → "lies".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">peaceful</span> yên bình &nbsp;|&nbsp; <span class="suffix-pill">lie</span> nằm ở, tọa lạc</div>`},

{id:26,type:'error',template:"{A} {B} {C}.",parts:{A:"No employees",B:"was",C:"willing to work over the holiday weekend",D:""},active_letters:["A","B","C"],ans:1,correction:"were",vi:"Không nhân viên nào sẵn lòng làm việc vào kỳ nghỉ cuối tuần.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>were</u>"</div>
<div class="ex-card mb-2">No employees were willing to work over the holiday weekend.<br><span style="color:var(--accent);font-size:13px">Không nhân viên nào sẵn lòng làm việc vào kỳ nghỉ cuối tuần.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "No" + danh từ số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "employees" số nhiều theo sau "No" → "were".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">willing to</span> sẵn lòng</div>`},

{id:27,type:'error',template:"{A} {B} {C} {D}.",parts:{A:"I lost my notebook,",B:"but luckily",C:"his were",D:"still in the classroom"},active_letters:["C","D"],ans:0,correction:"his was",vi:"Tôi bị mất sổ tay của mình, nhưng may là của cậu ấy vẫn còn ở trong lớp.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: C — sửa thành "<u>his was</u>"</div>
<div class="ex-card mb-2">I lost my notebook, but luckily his was still in the classroom.<br><span style="color:var(--accent);font-size:13px">Tôi bị mất sổ tay của mình, nhưng may là của cậu ấy vẫn còn ở trong lớp.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Đại từ sở hữu ("his" ở đây = "his notebook") chia V theo danh từ mà nó thay thế — số ít.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "his" thay cho "his notebook" (số ít) → phải dùng "was", không phải "were".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">luckily</span> may mắn thay</div>`},

{id:28,type:'error',template:"{A} {B} {C}.",parts:{A:"A number of employees",B:"has requested",C:"to work from home permanently",D:""},active_letters:["A","B","C"],ans:1,correction:"have requested",vi:"Một số nhân viên đã đề nghị được làm việc tại nhà vĩnh viễn.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>have requested</u>"</div>
<div class="ex-card mb-2">A number of employees have requested to work from home permanently.<br><span style="color:var(--accent);font-size:13px">Một số nhân viên đã đề nghị được làm việc tại nhà vĩnh viễn.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A number of" + N số nhiều → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Đừng nhầm với "the number of" (V số ít) — ở đây là "A number of" → "have requested".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">permanently</span> vĩnh viễn</div>`},

{id:29,type:'error',template:"{A} {B} {C}.",parts:{A:"The team of scientists",B:"were",C:"awarded the grant for their groundbreaking research",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Nhóm các nhà khoa học đã được trao khoản tài trợ cho nghiên cứu đột phá của họ.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">The team of scientists was awarded the grant for their groundbreaking research.<br><span style="color:var(--accent);font-size:13px">Nhóm các nhà khoa học đã được trao khoản tài trợ cho nghiên cứu đột phá của họ.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> N1 of N2: V chia theo N1 — "the team" (số ít), "of scientists" chỉ bổ nghĩa.</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> Chủ ngữ thật là "the team" (số ít) → "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">grant</span> khoản tài trợ &nbsp;|&nbsp; <span class="suffix-pill">groundbreaking</span> mang tính đột phá</div>`},

{id:30,type:'error',template:"{A} {B} {C}.",parts:{A:"Every man and woman in the village",B:"were",C:"asked to help rebuild the school after the storm",D:""},active_letters:["A","B","C"],ans:1,correction:"was",vi:"Mọi người đàn ông và phụ nữ trong làng đều được yêu cầu giúp xây lại trường học sau cơn bão.",
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Lỗi sai: B — sửa thành "<u>was</u>"</div>
<div class="ex-card mb-2">Every man and woman in the village was asked to help rebuild the school after the storm.<br><span style="color:var(--accent);font-size:13px">Mọi người đàn ông và phụ nữ trong làng đều được yêu cầu giúp xây lại trường học sau cơn bão.</span></div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Every + N1 and N2" vẫn đi với V số ít (giống quy tắc "Every + N").</div>
<div class="mb-2"><b class="text-dark2">🎯 Vì sao sai:</b> "Every" luôn kéo theo V số ít, dù nối 2 danh từ bằng "and" → "was".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">rebuild</span> xây dựng lại &nbsp;|&nbsp; <span class="suffix-pill">storm</span> cơn bão</div>`},
];

const SVA_EX4 = [
{id:1,type:'fill',q:"Linguistics __________ my best subject at university.",vi:"Ngôn ngữ học __________ môn học tốt nhất của tôi ở trường đại học.",opts:["A. was","B. were","C. be","D. being"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. was</div>
<div class="ex-card mb-2">Linguistics was my best subject at university.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Linguistics" là danh từ tên môn học tận cùng "-ics", tuy có hình thức số nhiều nhưng luôn chia V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều, sai vì môn học luôn số ít.<br>C, D — "be/being" không phải dạng chia được của to be trong câu này.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">linguistics</span> ngôn ngữ học</div>`},

{id:2,type:'fill',q:"I'm going to take a taxi. Five miles______ too far for me to walk to school.",vi:"Tôi sẽ bắt taxi. Năm dặm __________ quá xa để tôi đi bộ đến trường.",opts:["A. is","B. are","C. being","D. were"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. is</div>
<div class="ex-card mb-2">Five miles is too far for me to walk to school.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Chủ ngữ là đại lượng chỉ khoảng cách ("Five miles" — được xem như một quãng đường, một đơn vị) → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, D — số nhiều, sai vì đại lượng đo lường luôn chia số ít.<br>C — "being" không phải động từ chia được ở đây.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">too far</span> quá xa</div>`},

{id:3,type:'fill',q:"There __________ a table and two lamps in the room.",vi:"Có __________ một cái bàn và hai cây đèn trong phòng.",opts:["A. are","B. is","C. be","D. had been"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. are</div>
<div class="ex-card mb-2">There are a table and two lamps in the room.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cấu trúc "There + V" chia theo danh từ đứng ngay sau nó — ở đây là "a table and two lamps" (số nhiều, nối bằng "and") → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số ít, sai vì danh từ theo sau là số nhiều.<br>C — "be" không phải dạng chia được.<br>D — sai thì, không hợp ngữ cảnh hiện tại.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">lamp</span> cây đèn</div>`},

{id:4,type:'fill',q:"A number of programs __________to provide food and shelter for the underprivileged in the remote areas of the country.",vi:"Nhiều chương trình __________ được khởi động để cung cấp thực phẩm và nơi trú ẩn cho người nghèo ở các vùng sâu vùng xa của đất nước.",opts:["A. has been initiated","B. has initiated","C. have been initiated","D. initiates"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. have been initiated</div>
<div class="ex-card mb-2">A number of programs have been initiated to provide food and shelter for the underprivileged in the remote areas of the country.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "A number of + N(số nhiều) + V(số nhiều)". Ngữ cảnh cần thể bị động (chương trình được khởi động) ở thì hiện tại hoàn thành.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — số ít, sai vì "a number of" luôn đi với V số nhiều.<br>B — chủ động và số ít, sai cả hai.<br>D — chủ động, số ít, sai.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">underprivileged</span> người nghèo khó, thiệt thòi</div>`},

{id:5,type:'fill',q:"They haven't met her again since she______ school ten years ago.",vi:"Họ chưa gặp lại cô ấy kể từ khi cô ấy rời trường mười năm trước.",opts:["A. have left","B. leave","C. left","D. had left"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. left</div>
<div class="ex-card mb-2">They haven't met her again since she left school ten years ago.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "since" + mốc thời gian trong quá khứ ("ten years ago") → mệnh đề sau "since" chia thì quá khứ đơn.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — hiện tại hoàn thành, sai vì có mốc thời gian cụ thể trong quá khứ.<br>B — hiện tại đơn, sai.<br>D — quá khứ hoàn thành không cần thiết ở đây.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">leave school</span> rời trường, thôi học</div>`},

{id:6,type:'fill',q:"My friend as well as I __________ going shopping on Sunday.",vi:"Bạn tôi cũng như tôi __________ đi mua sắm vào Chủ nhật.",opts:["A. like","B. likes","C. liking","D. liked"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. likes</div>
<div class="ex-card mb-2">My friend as well as I likes going shopping on Sunday.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "N1 as well as N2": V chia theo N1 (chủ ngữ chính đứng trước "as well as") — "My friend" số ít → likes.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — số nhiều, sai vì chủ ngữ chính là "my friend" số ít.<br>C, D — sai dạng động từ, không hợp thì hiện tại đơn diễn tả sở thích.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">as well as</span> cũng như, và</div>`},

{id:7,type:'fill',q:"My brothers as well as I __________ students.",vi:"Các anh trai tôi cũng như tôi __________ học sinh.",opts:["A. is","B. are","C. am","D. be"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. are</div>
<div class="ex-card mb-2">My brothers as well as I are students.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "N1 as well as N2": V chia theo N1 — "My brothers" số nhiều → are.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số ít, sai vì chủ ngữ chính "my brothers" số nhiều.<br>D — "be" không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">student</span> học sinh, sinh viên</div>`},

{id:8,type:'fill',q:"Dominoes __________ entered The Contest! Learn more about our new Champion!",vi:"Dominoes __________ tham gia Cuộc thi! Tìm hiểu thêm về Nhà vô địch mới của chúng ta!",opts:["A. have","B. having","C. has","D. have been"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. has</div>
<div class="ex-card mb-2">Dominoes has entered The Contest! Learn more about our new Champion!</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Dominoes" ở đây là tên môn chơi (đô-mi-nô) — thuộc nhóm danh từ tên môn thể thao/trò chơi có hình thức số nhiều nhưng chia V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — số nhiều, sai vì tên trò chơi luôn số ít.<br>B — "having" không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">dominoes</span> đô-mi-nô (trò chơi)</div>`},

{id:9,type:'fill',q:"Genetics __________the study of hereditary characteristics that are passed down from one generation of living organisms to another.",vi:"Di truyền học __________ ngành nghiên cứu các đặc điểm di truyền được truyền từ thế hệ này sang thế hệ khác của sinh vật sống.",opts:["A. is","B. are","C. have been","D. being"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. is</div>
<div class="ex-card mb-2">Genetics is the study of hereditary characteristics that are passed down from one generation of living organisms to another.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Genetics" là danh từ tên môn học tận cùng "-ics" → luôn chia V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C — số nhiều, sai vì môn học luôn số ít.<br>D — "being" không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">hereditary</span> (thuộc về) di truyền</div>`},

{id:10,type:'fill',q:"My husband and I __________ eating an apple in the morning.",vi:"Chồng tôi và tôi __________ ăn táo vào buổi sáng.",opts:["A. liking","B. likes","C. has liked","D. like"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. like</div>
<div class="ex-card mb-2">My husband and I like eating an apple in the morning.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Hai danh từ nối nhau bằng "and" chỉ hai người khác nhau → V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — sai dạng động từ.<br>B, C — chia số ít, sai vì chủ ngữ là "my husband and I" (số nhiều).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">husband</span> chồng</div>`},

{id:11,type:'fill',q:"Every student in my class __________ good at English.",vi:"Mọi học sinh trong lớp tôi __________ giỏi tiếng Anh.",opts:["A. are","B. be","C. is","D. being"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. is</div>
<div class="ex-card mb-2">Every student in my class is good at English.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Chủ ngữ bắt đầu bằng "Every" → V luôn chia số ít, dù có cụm bổ nghĩa theo sau.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — số nhiều, sai.<br>B, D — không phải dạng chia được của to be.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">good at</span> giỏi về</div>`},

{id:12,type:'fill',q:"Today the number of people enjoying winter sports __________ almost double that of twenty years ago.",vi:"Ngày nay, số người yêu thích các môn thể thao mùa đông __________ gần gấp đôi so với hai mươi năm trước.",opts:["A. is","B. be","C. are","D. being"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. is</div>
<div class="ex-card mb-2">Today the number of people enjoying winter sports is almost double that of twenty years ago.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The number of + N(số nhiều) + V(số ít)" — chủ ngữ chính là "the number" nên chia số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>C — số nhiều, sai — dễ nhầm với "a number of".<br>B, D — không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">double</span> gấp đôi</div>`},

{id:13,type:'fill',q:"Neither John nor his friends __________ going to the beach today.",vi:"Cả John lẫn bạn bè anh ấy đều __________ không đi biển hôm nay.",opts:["A. is","B. are","C. be","D. being"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. are</div>
<div class="ex-card mb-2">Neither John nor his friends are going to the beach today.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither...nor": V chia theo danh từ đứng gần nó nhất — "his friends" số nhiều → are.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — số ít, sai vì chủ ngữ gần nhất là số nhiều.<br>C, D — không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">neither...nor...</span> không...cũng không...</div>`},

{id:14,type:'fill',q:"My aunt or my uncle __________arriving by train today.",vi:"Dì hoặc chú tôi __________ đến bằng tàu hỏa hôm nay.",opts:["A. are","B. is","C. has","D. have"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">My aunt or my uncle is arriving by train today.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Hai danh từ nối nhau bằng "or": V chia theo danh từ đứng gần nó nhất — "my uncle" số ít → is.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — số nhiều, sai.<br>C — "has" sai vì câu cần "to be" (arriving) chứ không phải "have".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">arrive by train</span> đến bằng tàu hỏa</div>`},

{id:15,type:'fill',q:"The serving bowl or the plate __________ on that shelf.",vi:"Tô đựng thức ăn hoặc cái đĩa __________ ở trên kệ đó.",opts:["A. goes","B. go","C. going","D. has gone"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. goes</div>
<div class="ex-card mb-2">The serving bowl or the plate goes on that shelf.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Hai danh từ nối nhau bằng "or": V chia theo danh từ gần nhất — "the plate" số ít → goes.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều, sai.<br>C — sai dạng động từ.<br>D — sai thì, không hợp ngữ cảnh diễn tả vị trí thường xuyên.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">shelf</span> cái kệ</div>`},

{id:16,type:'fill',q:"Either Pete or John ________ helping today with stage decorations.",vi:"Hoặc Pete hoặc John __________ đang giúp trang trí sân khấu hôm nay.",opts:["A. are","B. was","C. is","D. were"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. is</div>
<div class="ex-card mb-2">Either Pete or John is helping today with stage decorations.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Either...or": V chia theo danh từ gần nhất — cả "Pete" và "John" đều số ít → is (hiện tại tiếp diễn với "today").</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — số nhiều, sai.<br>B — quá khứ, sai vì có "today".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">stage decoration</span> trang trí sân khấu</div>`},

{id:17,type:'fill',q:"Neither Pete nor his friends __________ available today.",vi:"Cả Pete lẫn bạn bè anh ấy đều __________ không rảnh hôm nay.",opts:["A. were","B. are","C. was","D. is"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. are</div>
<div class="ex-card mb-2">Neither Pete nor his friends are available today.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither...nor": V chia theo danh từ gần nhất — "his friends" số nhiều → are (hiện tại, vì có "today").</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — quá khứ, sai vì có "today".<br>C, D — số ít, sai vì chủ ngữ gần nhất số nhiều.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">available</span> rảnh, sẵn sàng</div>`},

{id:18,type:'fill',q:"The politician, along with the newsmen, ________expected to arrive soon.",vi:"Chính trị gia, cùng với các nhà báo, __________ dự kiến sẽ đến sớm.",opts:["A. is","B. be","C. are","D. been"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. is</div>
<div class="ex-card mb-2">The politician, along with the newsmen, is expected to arrive soon.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cụm "along with" (cũng như "with, together with, accompanied by...") không ảnh hưởng đến số của động từ — V chia theo chủ ngữ chính đứng trước nó: "The politician" số ít → is.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>C — số nhiều, sai vì chủ ngữ chính số ít.<br>B, D — không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">along with</span> cùng với</div>`},

{id:19,type:'fill',q:"Each of the girls __________beautifully.",vi:"Mỗi cô gái đều __________ khiêu vũ đẹp.",opts:["A. dances","B. were dancing","C. dance","D. have danced"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. dances</div>
<div class="ex-card mb-2">Each of the girls dances beautifully.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Each of + N(số nhiều)" → V luôn chia số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều và sai thì.<br>C, D — sai số hoặc sai thì so với ngữ cảnh chung.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">dance beautifully</span> khiêu vũ đẹp</div>`},

{id:20,type:'fill',q:"Fifty percent of the pie __________disappeared.",vi:"Năm mươi phần trăm cái bánh __________ biến mất.",opts:["A. have","B. having","C. has","D. was having"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. has</div>
<div class="ex-card mb-2">Fifty percent of the pie has disappeared.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Phần trăm + of + N": V chia theo danh từ sau "of" — "the pie" (không đếm được/số ít) → has.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — số nhiều, sai.<br>B — sai dạng động từ.<br>D — sai cấu trúc, không hợp thì hiện tại hoàn thành cần cho "disappeared".</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">disappear</span> biến mất</div>`},

{id:21,type:'fill',q:"Fifty percent of the pies__________ disappeared.",vi:"Năm mươi phần trăm số bánh __________ biến mất.",opts:["A. have","B. having","C. has","D. was having"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. have</div>
<div class="ex-card mb-2">Fifty percent of the pies have disappeared.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Phần trăm + of + N": V chia theo danh từ sau "of" — "the pies" số nhiều → have.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>C — số ít, sai vì "the pies" số nhiều (so sánh với câu 20 chỉ khác "pie/pies").<br>B, D — sai dạng/cấu trúc động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">pie</span> bánh nướng nhân</div>`},

{id:22,type:'fill',q:"Everyone on the board of directors ________ with the planned merger.",vi:"Mọi người trong hội đồng quản trị đều __________ đồng ý với việc sáp nhập đã lên kế hoạch.",opts:["A. agreeing","B. have agreed","C. agree","D. agrees"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. agrees</div>
<div class="ex-card mb-2">Everyone on the board of directors agrees with the planned merger.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Everyone" là đại từ bất định, luôn chia V số ít, cụm "on the board of directors" chỉ là bổ nghĩa không ảnh hưởng.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — sai dạng động từ.<br>B, C — số nhiều, sai vì "everyone" luôn số ít.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">merger</span> sự sáp nhập</div>`},

{id:23,type:'fill',q:"Success in business __________ certain strategies that satisfy both the employer and the employees.",vi:"Thành công trong kinh doanh __________ đòi hỏi một số chiến lược nhất định làm hài lòng cả chủ và nhân viên.",opts:["A. requires","B. require","C. is required","D. requiring"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. requires</div>
<div class="ex-card mb-2">Success in business requires certain strategies that satisfy both the employer and the employees.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Success" là danh từ không đếm được, số ít → V số ít, chủ động (chủ ngữ là tác nhân đòi hỏi).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều, sai.<br>C — bị động không phù hợp nghĩa câu.<br>D — sai dạng động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">strategy</span> chiến lược</div>`},

{id:24,type:'fill',q:"Not only the painting method but also the colors __________ the interest of art critics.",vi:"Không chỉ phương pháp vẽ mà cả màu sắc __________ thu hút sự chú ý của các nhà phê bình nghệ thuật.",opts:["A. has aroused","B. have aroused","C. arouses","D. arousing"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. have aroused</div>
<div class="ex-card mb-2">Not only the painting method but also the colors have aroused the interest of art critics.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Not only...but also...": V chia theo danh từ đứng gần nhất — "the colors" số nhiều → have aroused.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C — số ít, sai vì chủ ngữ gần nhất là "the colors" số nhiều.<br>D — sai dạng động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">arouse interest</span> khơi gợi sự chú ý</div>`},

{id:25,type:'fill',q:"The number of corrections made during the first stage __________ the charges significantly.",vi:"Số lượng sửa đổi được thực hiện trong giai đoạn đầu __________ ảnh hưởng đáng kể đến chi phí.",opts:["A. has influenced","B. have influenced","C. are influencing","D. influencing"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. has influenced</div>
<div class="ex-card mb-2">The number of corrections made during the first stage has influenced the charges significantly.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The number of + N(số nhiều) + V(số ít)" — chủ ngữ chính là "the number" → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B, C — số nhiều, sai — dễ nhầm với "a number of".<br>D — sai dạng động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">significantly</span> đáng kể</div>`},

{id:26,type:'fill',q:"Every staff member _________ to be trained in security procedures to ensure the safety of customer's private information.",vi:"Mỗi nhân viên đều __________ cần được đào tạo về quy trình an ninh để đảm bảo an toàn thông tin cá nhân của khách hàng.",opts:["A. requirement","B. is required","C. requires","D. requiring"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is required</div>
<div class="ex-card mb-2">Every staff member is required to be trained in security procedures to ensure the safety of customer's private information.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Chủ ngữ bắt đầu bằng "Every" → V số ít; ngữ cảnh cần thể bị động ("được yêu cầu").</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — là danh từ, không phải động từ, sai từ loại.<br>C — chủ động, sai nghĩa.<br>D — sai dạng động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">security procedures</span> quy trình an ninh</div>`},

{id:27,type:'fill',q:"Our website has a page that __________ frequently questions asked by its users.",vi:"Trang web của chúng tôi có một trang __________ trả lời những câu hỏi thường gặp của người dùng.",opts:["A. answer","B. answers","C. was answered","D. answering"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. answers</div>
<div class="ex-card mb-2">Our website has a page that answers frequently questions asked by its users.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Mệnh đề quan hệ "that" thay thế cho "a page" (số ít) → V trong mệnh đề quan hệ chia theo danh từ đó → answers.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — thiếu chia -s cho ngôi thứ 3 số ít.<br>C — bị động sai nghĩa (trang web là chủ thể trả lời, không bị trả lời).<br>D — sai dạng động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">frequently asked questions</span> câu hỏi thường gặp</div>`},

{id:28,type:'fill',q:"The benefits of exercising regularly while pregnant __________ staying sedentary during pregnancy.",vi:"Lợi ích của việc tập thể dục đều đặn khi mang thai __________ vượt trội hơn việc ít vận động trong thai kỳ.",opts:["A. surpass","B. surpassing","C. is surpassing","D. surpassed"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. surpass</div>
<div class="ex-card mb-2">The benefits of exercising regularly while pregnant surpass staying sedentary during pregnancy.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cấu trúc "N1 of N2": V chia theo N1 — "The benefits" số nhiều → surpass (hiện tại đơn diễn tả sự thật chung).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>C — số ít, sai vì chủ ngữ chính "the benefits" số nhiều.<br>B, D — sai dạng/thì động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">sedentary</span> ít vận động, tĩnh tại</div>`},

{id:29,type:'fill',q:"The decision regarding the merger of the two companies __________ to the public yesterday.",vi:"Quyết định liên quan đến việc sáp nhập hai công ty __________ được công bố cho công chúng vào hôm qua.",opts:["A. was announced","B. were announced","C. announced","D. announcing"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. was announced</div>
<div class="ex-card mb-2">The decision regarding the merger of the two companies was announced to the public yesterday.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Chủ ngữ chính "The decision" số ít; "yesterday" → thì quá khứ đơn, thể bị động (quyết định được công bố).</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều, sai vì "the decision" số ít.<br>C — chủ động, sai nghĩa (quyết định không tự công bố).<br>D — sai dạng động từ.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">regarding</span> liên quan đến</div>`},

{id:30,type:'fill',q:"Thanks to the recent anti-smoking campaign, the number of smokers in the country__________",vi:"Nhờ chiến dịch chống hút thuốc gần đây, số người hút thuốc trong nước __________ đã giảm.",opts:["A. has reduced","B. reduce","C. to reduce","D. having reduced"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. has reduced</div>
<div class="ex-card mb-2">Thanks to the recent anti-smoking campaign, the number of smokers in the country has reduced.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The number of + N(số nhiều) + V(số ít)" — chủ ngữ chính "the number" → V số ít, thì hiện tại hoàn thành vì kết quả liên quan đến hiện tại.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều, thiếu chia, sai.<br>C, D — không phải dạng động từ chia được của câu hoàn chỉnh.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">anti-smoking campaign</span> chiến dịch chống hút thuốc</div>`},

{id:31,type:'fill',q:"The regulations governing animal research __________many provisions to safeguard animal welfare.",vi:"Các quy định quản lý nghiên cứu động vật __________ nhiều điều khoản để bảo vệ phúc lợi động vật.",opts:["A. contains","B. contain","C. have been contained","D. is containing"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. contain</div>
<div class="ex-card mb-2">The regulations governing animal research contain many provisions to safeguard animal welfare.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Chủ ngữ chính "The regulations" số nhiều; cụm "governing animal research" chỉ là mệnh đề rút gọn bổ nghĩa, không ảnh hưởng đến việc chia động từ.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — số ít, sai vì "regulations" số nhiều.<br>C — bị động, sai nghĩa (quy định chứa đựng, không bị chứa đựng).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">safeguard</span> bảo vệ, giữ gìn</div>`},

{id:32,type:'fill',q:"Not only the child but also the grandparents __________.",vi:"Không chỉ đứa trẻ mà cả ông bà __________ cũng tham gia.",opts:["A. is joining","B. joins","C. were joining","D. has joined"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. were joining</div>
<div class="ex-card mb-2">Not only the child but also the grandparents were joining.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Not only...but also...": V chia theo danh từ đứng gần nhất — "the grandparents" số nhiều → chỉ có "were joining" là dạng số nhiều phù hợp.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B, D — chia số ít, sai vì chủ ngữ gần nhất "the grandparents" số nhiều.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">grandparents</span> ông bà</div>`},

{id:33,type:'fill',q:"The number of people at the exhibit __________ amazing.",vi:"Số lượng người tại buổi triển lãm __________ đáng kinh ngạc.",opts:["A. are","B. were","C. was","D. has"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. was</div>
<div class="ex-card mb-2">The number of people at the exhibit was amazing.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The number of + N(số nhiều) + V(số ít)" — chủ ngữ chính là "the number" → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B — số nhiều, sai.<br>D — sai từ loại, "has" không đi với tính từ "amazing" theo cách này.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">exhibit</span> buổi triển lãm</div>`},

{id:34,type:'fill',q:"None of the information __________ made public.",vi:"Không thông tin nào __________ được công khai.",opts:["A. are","B. was","C. were","D. have"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. was</div>
<div class="ex-card mb-2">None of the information was made public.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "None of + N" chia theo danh từ sau "of" — "information" là danh từ không đếm được → V số ít.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, C, D — số nhiều, sai vì "information" không đếm được, luôn số ít.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">make public</span> công khai, tiết lộ</div>`},

{id:35,type:'fill',q:"Neither table nor chairs __________ here.",vi:"Không có bàn cũng không có ghế nào __________ ở đây.",opts:["A. does","B. do","C. is","D. are"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. are</div>
<div class="ex-card mb-2">Neither table nor chairs are here.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Neither...nor": V chia theo danh từ gần nhất — "chairs" số nhiều → are.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, B — sai từ loại, đây cần "to be" (are) chứ không phải trợ động từ "do/does".<br>C — số ít, sai vì "chairs" số nhiều.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">chair</span> cái ghế</div>`},

{id:36,type:'fill',q:"Either of my parents or my brother __________.",vi:"Hoặc bố mẹ tôi hoặc anh trai tôi __________ (sẽ đến).",opts:["A. has coming","B. have come","C. are coming","D. is coming"],ans:3,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: D. is coming</div>
<div class="ex-card mb-2">Either of my parents or my brother is coming.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "Either...or": V chia theo danh từ gần nhất — "my brother" số ít → is coming.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — sai cấu trúc động từ.<br>B, C — số nhiều, sai vì chủ ngữ gần nhất số ít.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">either...or...</span> hoặc...hoặc...</div>`},

{id:37,type:'fill',q:"The Japanese __________ famous for their beautiful gardens.",vi:"Người Nhật __________ nổi tiếng với những khu vườn tuyệt đẹp của họ.",opts:["A. are","B. is","C. it","D. there"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. are</div>
<div class="ex-card mb-2">The Japanese are famous for their beautiful gardens.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> "The + tính từ chỉ quốc tịch" (the Japanese, the French, the Chinese...) mang nghĩa "người dân nước đó" — luôn chia V số nhiều.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số ít, sai.<br>C, D — không phải động từ, sai từ loại.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">the Japanese</span> người Nhật (nói chung)</div>`},

{id:38,type:'fill',q:"The new manager, accompanied by his wife, __________ arriving today.",vi:"Người quản lý mới, cùng với vợ của anh ấy, __________ sẽ đến hôm nay.",opts:["A. are","B. is","C. were","D. was"],ans:1,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: B. is</div>
<div class="ex-card mb-2">The new manager, accompanied by his wife, is arriving today.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cụm "accompanied by" không ảnh hưởng số của động từ — V chia theo chủ ngữ chính "The new manager" số ít → is (hiện tại tiếp diễn vì có "today").</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A — số nhiều, sai.<br>C, D — quá khứ, sai vì có "today" (tương lai gần).</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">accompanied by</span> đi cùng với</div>`},

{id:39,type:'fill',q:"The average temperature of rocks on the surface of the earth __________ 550 F.",vi:"Nhiệt độ trung bình của đá trên bề mặt trái đất __________ 55 độ F.",opts:["A. is","B. are","C. be","D. been"],ans:0,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: A. is</div>
<div class="ex-card mb-2">The average temperature of rocks on the surface of the earth is 55°F.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cấu trúc "N1 of N2": V chia theo N1 — "The average temperature" số ít → is.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>B — số nhiều, sai vì chủ ngữ chính "the average temperature" số ít.<br>C, D — không phải dạng chia được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">average temperature</span> nhiệt độ trung bình</div>`},

{id:40,type:'fill',q:"In the ocean, __________ more salt in the deeper water.",vi:"Ở đại dương, __________ nhiều muối hơn ở vùng nước sâu.",opts:["A. is there","B. there are","C. there is","D. are there"],ans:2,
explain_detail:`<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: C. there is</div>
<div class="ex-card mb-2">In the ocean, there is more salt in the deeper water.</div>
<div class="mb-2"><b class="text-dark2">📐 Quy tắc:</b> Cấu trúc "There + V" chia theo danh từ theo sau — "salt" là danh từ không đếm được, số ít → there is. Đây là câu trần thuật (không đảo ngữ) nên "there" đứng trước động từ.</div>
<div class="mb-2"><b class="text-dark2">❌ Loại các đáp án khác:</b><br>A, D — đảo ngữ dạng câu hỏi, sai vì đây là câu khẳng định.<br>B — số nhiều, sai vì "salt" không đếm được.</div>
<div><b class="text-dark2">📚 Từ vựng:</b> <span class="suffix-pill">salt</span> muối</div>`}
];

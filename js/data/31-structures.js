const STR_VOCAB = [
{en:"A range of sth",pos:"Cụm danh từ",ipa:"/reɪndʒ/",meaning:"một loạt thứ gì đó",ex_en:"The shop offers a range of services for customers.",ex_vi:"Cửa hàng cung cấp một loạt dịch vụ cho khách hàng."},
{en:"Accomplish one's goal of sth",pos:"Cấu trúc ngữ pháp",ipa:"/əˈkʌmplɪʃ/",meaning:"hoàn thành mục tiêu của ai về điều gì",ex_en:"She accomplished her goal of running a marathon.",ex_vi:"Cô ấy đã hoàn thành mục tiêu chạy marathon."},
{en:"Adapt to sth",pos:"Cụm động từ + giới từ",ipa:"/əˈdæpt/",meaning:"thích nghi với điều gì",ex_en:"It took him a while to adapt to the new environment.",ex_vi:"Anh ấy mất một thời gian để thích nghi với môi trường mới."},
{en:"Agree to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/əˈgriː/",meaning:"đồng ý làm việc gì",ex_en:"She agreed to help us move the furniture.",ex_vi:"Cô ấy đồng ý giúp chúng tôi chuyển đồ đạc."},
{en:"Ahead of sth",pos:"Cụm giới từ",ipa:"/əˈhed/",meaning:"đi trước, phía trước cái gì",ex_en:"They arrived ahead of schedule.",ex_vi:"Họ đến trước lịch trình dự kiến."},
{en:"Aim to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/eɪm/",meaning:"nhằm mục đích làm việc gì",ex_en:"The company aims to reduce its carbon footprint.",ex_vi:"Công ty nhằm mục đích giảm lượng khí thải carbon."},
{en:"Allow sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/əˈlaʊ/",meaning:"cho phép ai đó làm việc gì",ex_en:"Her parents allowed her to travel alone.",ex_vi:"Bố mẹ cô ấy cho phép cô đi du lịch một mình."},
{en:"Apply for",pos:"Cụm động từ + giới từ",ipa:"/əˈplaɪ/",meaning:"nộp đơn xin",ex_en:"He applied for a scholarship at the university.",ex_vi:"Anh ấy đã nộp đơn xin học bổng tại trường đại học."},
{en:"Argue with sb",pos:"Cụm động từ + giới từ",ipa:"/ˈɑːɡjuː/",meaning:"tranh luận với ai",ex_en:"They often argue with each other about small things.",ex_vi:"Họ thường tranh cãi với nhau về những chuyện nhỏ nhặt."},
{en:"Ask for sth",pos:"Cụm động từ + giới từ",ipa:"/ɑːsk/",meaning:"yêu cầu cái gì đó",ex_en:"She asked for more time to finish the project.",ex_vi:"Cô ấy xin thêm thời gian để hoàn thành dự án."},
{en:"Ask sb for permission to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/pəˈmɪʃn/",meaning:"xin phép ai đó để làm việc gì",ex_en:"He asked his boss for permission to leave early.",ex_vi:"Anh ấy xin phép sếp để về sớm."},
{en:"At least",pos:"Thành ngữ",ipa:"/ət liːst/",meaning:"ít nhất",ex_en:"At least he tried his best.",ex_vi:"Ít nhất anh ấy cũng đã cố gắng hết sức."},
{en:"At one's fingertips",pos:"Thành ngữ",ipa:"/ˈfɪŋɡətɪps/",meaning:"trong tầm tay của ai",ex_en:"With the internet, information is at our fingertips.",ex_vi:"Với internet, thông tin nằm ngay trong tầm tay chúng ta."},
{en:"Avoid doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/əˈvɔɪd/",meaning:"tránh làm điều gì",ex_en:"You should avoid eating too much sugar.",ex_vi:"Bạn nên tránh ăn quá nhiều đường."},
{en:"Back then",pos:"Thành ngữ",ipa:"/bæk ðen/",meaning:"hồi đó, ngày xưa",ex_en:"Back then, people didn't have smartphones.",ex_vi:"Hồi đó, mọi người chưa có điện thoại thông minh."},
{en:"Be (un)able to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈeɪbl/",meaning:"(không) có thể làm việc gì",ex_en:"She was unable to attend the meeting yesterday.",ex_vi:"Cô ấy đã không thể tham dự cuộc họp hôm qua."},
{en:"Be accessible to sb/sth",pos:"Cụm giới từ",ipa:"/əkˈsesəbl/",meaning:"có thể tiếp cận với ai/cái gì",ex_en:"The park is accessible to everyone free of charge.",ex_vi:"Công viên có thể tiếp cận miễn phí với mọi người."},
{en:"Be accustomed to sth/doing sth",pos:"Cụm giới từ",ipa:"/əˈkʌstəmd/",meaning:"quen với việc gì/làm việc gì",ex_en:"He is accustomed to waking up early.",ex_vi:"Anh ấy đã quen với việc dậy sớm."},
{en:"Be addicted to sth",pos:"Cụm giới từ",ipa:"/əˈdɪktɪd/",meaning:"nghiện thứ gì",ex_en:"Many teenagers are addicted to social media.",ex_vi:"Nhiều thanh thiếu niên nghiện mạng xã hội."},
{en:"Be afraid of sth/doing sth",pos:"Cụm giới từ",ipa:"/əˈfreɪd/",meaning:"sợ hãi việc gì/làm việc gì",ex_en:"She is afraid of speaking in public.",ex_vi:"Cô ấy sợ nói trước đám đông."},
{en:"Be amazed at/by sth",pos:"Cụm giới từ",ipa:"/əˈmeɪzd/",meaning:"kinh ngạc, ngạc nhiên",ex_en:"We were amazed at the beauty of the waterfall.",ex_vi:"Chúng tôi kinh ngạc trước vẻ đẹp của thác nước."},
{en:"Be busy doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈbɪzi/",meaning:"bận làm việc gì đó",ex_en:"She is busy preparing for her exam.",ex_vi:"Cô ấy đang bận chuẩn bị cho kỳ thi."},
{en:"Be careful of sth",pos:"Cụm giới từ",ipa:"/ˈkeəfl/",meaning:"cẩn thận với cái gì",ex_en:"Be careful of the wet floor.",ex_vi:"Hãy cẩn thận với sàn nhà ướt."},
{en:"Be close to sth",pos:"Cụm giới từ",ipa:"/kləʊs/",meaning:"gần cái gì",ex_en:"Her house is close to the city center.",ex_vi:"Nhà cô ấy gần trung tâm thành phố."},
{en:"Be confident about sth",pos:"Cụm giới từ",ipa:"/ˈkɒnfɪdənt/",meaning:"tự tin về điều gì",ex_en:"He is confident about passing the exam.",ex_vi:"Anh ấy tự tin về việc vượt qua kỳ thi."},
{en:"Be covered with sth",pos:"Cụm giới từ",ipa:"/ˈkʌvəd/",meaning:"được bao phủ bởi thứ gì",ex_en:"The mountain top was covered with snow.",ex_vi:"Đỉnh núi được bao phủ bởi tuyết."},
{en:"Be crazy about sth",pos:"Thành ngữ",ipa:"/ˈkreɪzi/",meaning:"đam mê cái gì",ex_en:"He is crazy about football.",ex_vi:"Anh ấy đam mê bóng đá."},
{en:"Be determined to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/dɪˈtɜːmɪnd/",meaning:"quyết tâm làm việc gì",ex_en:"She is determined to achieve her dreams.",ex_vi:"Cô ấy quyết tâm đạt được ước mơ của mình."},
{en:"Be different from sb/sth",pos:"Cụm giới từ",ipa:"/ˈdɪfrənt/",meaning:"khác với ai/cái gì",ex_en:"This city is very different from my hometown.",ex_vi:"Thành phố này rất khác so với quê hương tôi."},
{en:"Be essential for sth",pos:"Cụm giới từ",ipa:"/ɪˈsenʃl/",meaning:"cần thiết, thiết yếu cho cái gì",ex_en:"Sleep is essential for good health.",ex_vi:"Giấc ngủ là điều thiết yếu cho sức khỏe tốt."},
{en:"Be famous/well-known for sth",pos:"Cụm giới từ",ipa:"/ˈfeɪməs/",meaning:"nổi tiếng về cái gì",ex_en:"Hoi An is famous for its ancient houses.",ex_vi:"Hội An nổi tiếng với những ngôi nhà cổ."},
{en:"Be fascinated by sth",pos:"Cụm giới từ",ipa:"/ˈfæsɪneɪtɪd/",meaning:"bị mê hoặc bởi cái gì",ex_en:"Children are often fascinated by dinosaurs.",ex_vi:"Trẻ em thường bị mê hoặc bởi khủng long."},
{en:"Be filled with sth",pos:"Cụm giới từ",ipa:"/fɪld/",meaning:"chứa đầy cái gì",ex_en:"The room was filled with laughter.",ex_vi:"Căn phòng chứa đầy tiếng cười."},
{en:"Be fluent in sth",pos:"Cụm giới từ",ipa:"/ˈfluːənt/",meaning:"thông thạo thứ gì",ex_en:"She is fluent in three languages.",ex_vi:"Cô ấy thông thạo ba ngôn ngữ."},
{en:"Be good at sth/doing sth",pos:"Cụm giới từ",ipa:"/gʊd/",meaning:"giỏi việc gì/làm việc gì",ex_en:"He is good at solving math problems.",ex_vi:"Anh ấy giỏi giải các bài toán."},
{en:"Be happy about/with sth",pos:"Cụm giới từ",ipa:"/ˈhæpi/",meaning:"hài lòng, vui về/với cái gì",ex_en:"We are happy with the results of the project.",ex_vi:"Chúng tôi hài lòng với kết quả của dự án."},
{en:"Be harmful to sb/sth",pos:"Cụm giới từ",ipa:"/ˈhɑːmfl/",meaning:"có hại cho ai/cái gì",ex_en:"Smoking is harmful to your health.",ex_vi:"Hút thuốc có hại cho sức khỏe của bạn."},
{en:"Be home to sb/sth",pos:"Cụm giới từ",ipa:"/həʊm/",meaning:"là nhà của ai/là nơi cư trú của loài gì",ex_en:"The forest is home to many rare species.",ex_vi:"Khu rừng này là nơi cư trú của nhiều loài quý hiếm."},
{en:"Be in charge of sth/doing sth",pos:"Thành ngữ",ipa:"/tʃɑːdʒ/",meaning:"phụ trách, chịu trách nhiệm về việc gì đó",ex_en:"She is in charge of the marketing department.",ex_vi:"Cô ấy phụ trách phòng marketing."},
{en:"Be in danger",pos:"Thành ngữ",ipa:"/ˈdeɪndʒər/",meaning:"gặp nguy hiểm",ex_en:"Many endangered species are in danger of extinction.",ex_vi:"Nhiều loài có nguy cơ tuyệt chủng đang gặp nguy hiểm."},
{en:"Be in favor of sth",pos:"Thành ngữ",ipa:"/ˈfeɪvər/",meaning:"ủng hộ/tán thành cái gì",ex_en:"Most people are in favor of the new policy.",ex_vi:"Hầu hết mọi người ủng hộ chính sách mới."},
{en:"Be in good/bad mood",pos:"Thành ngữ",ipa:"/muːd/",meaning:"có tâm trạng tốt/tệ",ex_en:"She is in a bad mood today.",ex_vi:"Hôm nay cô ấy có tâm trạng không tốt."},
{en:"Be in pain",pos:"Thành ngữ",ipa:"/peɪn/",meaning:"trong đau đớn",ex_en:"He was in pain after the accident.",ex_vi:"Anh ấy đau đớn sau vụ tai nạn."},
{en:"Be in two minds",pos:"Thành ngữ",ipa:"/maɪndz/",meaning:"đang phân vân",ex_en:"I'm in two minds about accepting the job offer.",ex_vi:"Tôi đang phân vân về việc nhận lời mời làm việc."},
{en:"Be interested in sth",pos:"Cụm giới từ",ipa:"/ˈɪntrəstɪd/",meaning:"quan tâm/hứng thú cái gì",ex_en:"She is interested in learning new languages.",ex_vi:"Cô ấy hứng thú với việc học ngôn ngữ mới."},
{en:"Be knowledgeable about sth",pos:"Cụm giới từ",ipa:"/ˈnɒlɪdʒəbl/",meaning:"có kiến thức về cái gì",ex_en:"He is knowledgeable about ancient history.",ex_vi:"Anh ấy có kiến thức về lịch sử cổ đại."},
{en:"Be known for sth",pos:"Cụm giới từ",ipa:"/nəʊn/",meaning:"được biết đến với cái gì",ex_en:"This restaurant is known for its seafood.",ex_vi:"Nhà hàng này được biết đến với hải sản."},
{en:"Be nervous about sth/doing sth",pos:"Cụm giới từ",ipa:"/ˈnɜːvəs/",meaning:"lo lắng về việc gì/làm việc gì",ex_en:"He was nervous about his first job interview.",ex_vi:"Anh ấy lo lắng về buổi phỏng vấn xin việc đầu tiên."},
{en:"Be overcrowded with sth",pos:"Cụm giới từ",ipa:"/ˌəʊvəˈkraʊdɪd/",meaning:"quá đông đúc với cái gì, trật kín cái gì",ex_en:"The beach was overcrowded with tourists.",ex_vi:"Bãi biển quá đông đúc du khách."},
{en:"Be packed with sb/sth",pos:"Cụm giới từ",ipa:"/pækt/",meaning:"đầy, chật cứng với ai/cái gì",ex_en:"The stadium was packed with fans.",ex_vi:"Sân vận động chật cứng người hâm mộ."},
{en:"Be pleased to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/pliːzd/",meaning:"vui lòng làm việc gì",ex_en:"I am pleased to announce the winner.",ex_vi:"Tôi vui lòng thông báo người chiến thắng."},
{en:"Be proud of sb/sth",pos:"Cụm giới từ",ipa:"/praʊd/",meaning:"tự hào về ai/cái gì",ex_en:"Her parents are proud of her achievements.",ex_vi:"Bố mẹ cô ấy tự hào về những thành tích của cô."},
{en:"Be resistant to sth",pos:"Cụm giới từ",ipa:"/rɪˈzɪstənt/",meaning:"chống chịu/kháng cự được thứ gì",ex_en:"Some bacteria are resistant to antibiotics.",ex_vi:"Một số vi khuẩn có khả năng kháng thuốc kháng sinh."},
{en:"Be responsible for sth/doing sth",pos:"Cụm giới từ",ipa:"/rɪˈspɒnsəbl/",meaning:"chịu trách nhiệm về việc gì/làm việc gì",ex_en:"He is responsible for managing the team.",ex_vi:"Anh ấy chịu trách nhiệm quản lý đội nhóm."},
{en:"Be rich in sth",pos:"Cụm giới từ",ipa:"/rɪtʃ/",meaning:"có nhiều thứ gì",ex_en:"This soil is rich in nutrients.",ex_vi:"Loại đất này giàu chất dinh dưỡng."},
{en:"Be similar to sth",pos:"Cụm giới từ",ipa:"/ˈsɪmələr/",meaning:"tương tự như cái gì",ex_en:"Her opinion is similar to mine.",ex_vi:"Ý kiến của cô ấy tương tự như của tôi."},
{en:"Be/get stuck in a traffic jam",pos:"Thành ngữ",ipa:"/trˈæfɪk dʒæm/",meaning:"bị tắc đường, bị kẹt xe",ex_en:"We got stuck in a traffic jam for two hours.",ex_vi:"Chúng tôi bị kẹt xe suốt hai giờ đồng hồ."},
{en:"Be sympathetic to sb",pos:"Cụm giới từ",ipa:"/ˌsɪmpəˈθetɪk/",meaning:"thông cảm với ai, đồng cảm với ai",ex_en:"The teacher was sympathetic to the struggling students.",ex_vi:"Giáo viên thông cảm với những học sinh gặp khó khăn."},
{en:"Be thankful to sb (for sth/doing sth)",pos:"Cụm giới từ",ipa:"/ˈθæŋkfl/",meaning:"biết ơn ai (vì điều gì/làm việc gì)",ex_en:"I am thankful to my mentor for his guidance.",ex_vi:"Tôi biết ơn người cố vấn của mình vì sự hướng dẫn."},
{en:"Be thrilled at/about/with sth",pos:"Cụm giới từ",ipa:"/θrɪld/",meaning:"hồi hộp, vui mừng về điều gì",ex_en:"She was thrilled about her promotion.",ex_vi:"Cô ấy rất vui mừng về việc thăng chức của mình."},
{en:"Be translated into sth",pos:"Cụm giới từ",ipa:"/trænsˈleɪtɪd/",meaning:"được dịch sang cái gì",ex_en:"The novel has been translated into many languages.",ex_vi:"Cuốn tiểu thuyết đã được dịch sang nhiều thứ tiếng."},
{en:"Be used for doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/juːzd/",meaning:"được sử dụng để làm gì",ex_en:"This tool is used for cutting wood.",ex_vi:"Dụng cụ này được dùng để cắt gỗ."},
{en:"Be willing to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈwɪlɪŋ/",meaning:"sẵn sàng làm việc gì",ex_en:"He is willing to help anyone in need.",ex_vi:"Anh ấy sẵn sàng giúp đỡ bất cứ ai cần."},
{en:"Be worried about sth",pos:"Cụm giới từ",ipa:"/ˈwʌrid/",meaning:"lo lắng về điều gì",ex_en:"She is worried about her upcoming exam.",ex_vi:"Cô ấy lo lắng về kỳ thi sắp tới."},
{en:"Be worth doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/wɜːθ/",meaning:"đáng làm việc gì",ex_en:"This museum is worth visiting.",ex_vi:"Bảo tàng này đáng để tham quan."},
{en:"Belong to",pos:"Cụm động từ + giới từ",ipa:"/bɪˈlɒŋ/",meaning:"thuộc về",ex_en:"This book belongs to my sister.",ex_vi:"Cuốn sách này thuộc về chị gái tôi."},
{en:"Block out",pos:"Cụm động từ",ipa:"/blɒk aʊt/",meaning:"ngăn chặn (ánh sáng, âm thanh...)",ex_en:"These curtains block out the sunlight completely.",ex_vi:"Những tấm rèm này chặn hoàn toàn ánh nắng mặt trời."},
{en:"Break down",pos:"Cụm động từ",ipa:"/breɪk daʊn/",meaning:"hỏng, thất bại",ex_en:"The car broke down on the highway.",ex_vi:"Xe bị hỏng trên đường cao tốc."},
{en:"Breathe in",pos:"Cụm động từ",ipa:"/briːð ɪn/",meaning:"hít vào",ex_en:"Breathe in slowly through your nose.",ex_vi:"Hãy hít vào từ từ bằng mũi."},
{en:"Breathe out",pos:"Cụm động từ",ipa:"/briːð aʊt/",meaning:"thở ra",ex_en:"Breathe out slowly through your mouth.",ex_vi:"Hãy thở ra từ từ bằng miệng."},
{en:"Bring about",pos:"Cụm động từ",ipa:"/brɪŋ əˈbaʊt/",meaning:"mang lại, gây ra",ex_en:"New technology has brought about huge changes.",ex_vi:"Công nghệ mới đã mang lại những thay đổi lớn."},
{en:"By chance",pos:"Thành ngữ",ipa:"/tʃɑːns/",meaning:"tình cờ",ex_en:"We met each other by chance at the airport.",ex_vi:"Chúng tôi tình cờ gặp nhau ở sân bay."},
{en:"By contrast",pos:"Thành ngữ",ipa:"/ˈkɒntrɑːst/",meaning:"ngược lại, trái lại",ex_en:"By contrast, her brother is very quiet.",ex_vi:"Ngược lại, anh trai cô ấy lại rất trầm tính."},
{en:"By the way",pos:"Thành ngữ",ipa:"/weɪ/",meaning:"nhân tiện",ex_en:"By the way, have you finished the report?",ex_vi:"Nhân tiện, bạn đã hoàn thành báo cáo chưa?"},
{en:"Calm down",pos:"Cụm động từ",ipa:"/kɑːm daʊn/",meaning:"bình tĩnh lại",ex_en:"Please calm down and explain what happened.",ex_vi:"Hãy bình tĩnh lại và giải thích chuyện gì đã xảy ra."},
{en:"Can't help doing sth",pos:"Thành ngữ",ipa:"/help/",meaning:"không thể không làm việc gì",ex_en:"I can't help laughing when I see him dance.",ex_vi:"Tôi không thể không cười khi thấy anh ấy nhảy."},
{en:"Carry out",pos:"Cụm động từ",ipa:"/ˈkæri aʊt/",meaning:"tiến hành",ex_en:"The team carried out a detailed survey.",ex_vi:"Đội đã tiến hành một cuộc khảo sát chi tiết."},
{en:"Cause sth to sb",pos:"Cấu trúc ngữ pháp",ipa:"/kɔːz/",meaning:"gây ra điều gì cho ai",ex_en:"The delay caused a lot of trouble to passengers.",ex_vi:"Sự chậm trễ đã gây ra nhiều rắc rối cho hành khách."},
{en:"Cheat on sth",pos:"Cụm động từ + giới từ",ipa:"/tʃiːt/",meaning:"lừa dối/gian lận điều gì",ex_en:"He was caught cheating on the test.",ex_vi:"Anh ấy bị bắt gặp gian lận trong bài kiểm tra."},
{en:"Cheer up",pos:"Cụm động từ",ipa:"/tʃɪər ʌp/",meaning:"cổ vũ, động viên",ex_en:"Her friends tried to cheer her up after the loss.",ex_vi:"Bạn bè cô ấy cố gắng động viên cô sau thất bại."},
{en:"Choose to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/tʃuːz/",meaning:"chọn làm việc gì",ex_en:"She chose to study abroad after graduation.",ex_vi:"Cô ấy chọn đi du học sau khi tốt nghiệp."},
{en:"Collaborate with sb",pos:"Cụm động từ + giới từ",ipa:"/kəˈlæbəreɪt/",meaning:"hợp tác với ai",ex_en:"Our company collaborates with several universities.",ex_vi:"Công ty chúng tôi hợp tác với nhiều trường đại học."},
{en:"Come across",pos:"Cụm động từ",ipa:"/kʌm əˈkrɒs/",meaning:"bắt gặp, tình cờ gặp",ex_en:"I came across an old photo of us yesterday.",ex_vi:"Hôm qua tôi tình cờ bắt gặp một bức ảnh cũ của chúng tôi."},
{en:"Come over",pos:"Cụm động từ",ipa:"/kʌm ˈəʊvər/",meaning:"ghé chơi",ex_en:"Why don't you come over for dinner tonight?",ex_vi:"Sao bạn không ghé qua ăn tối nay?"},
{en:"Come back",pos:"Cụm động từ",ipa:"/kʌm bæk/",meaning:"quay trở lại",ex_en:"She promised to come back next summer.",ex_vi:"Cô ấy hứa sẽ quay lại vào mùa hè năm sau."},
{en:"Come up with",pos:"Cụm động từ",ipa:"/kʌm ʌp wɪð/",meaning:"nghĩ ra, nảy ra ý tưởng",ex_en:"He came up with a brilliant solution.",ex_vi:"Anh ấy đã nghĩ ra một giải pháp tuyệt vời."},
{en:"Come/go down with sth",pos:"Cụm động từ",ipa:"/daʊn wɪð/",meaning:"bị mắc (bệnh)",ex_en:"She came down with a cold last week.",ex_vi:"Cô ấy bị cảm lạnh vào tuần trước."},
{en:"Communicate with sb",pos:"Cụm động từ + giới từ",ipa:"/kəˈmjuːnɪkeɪt/",meaning:"giao tiếp với ai",ex_en:"It's important to communicate with your team clearly.",ex_vi:"Giao tiếp rõ ràng với đội nhóm là điều quan trọng."},
{en:"Concentrate/focus on sth",pos:"Cụm động từ + giới từ",ipa:"/ˈkɒnsntreɪt/",meaning:"tập trung vào cái gì",ex_en:"Try to concentrate on your studies this semester.",ex_vi:"Hãy cố gắng tập trung vào việc học kỳ này."},
{en:"Conduct electricity",pos:"Thành ngữ",ipa:"/kənˈdʌkt/",meaning:"dẫn điện",ex_en:"Copper conducts electricity very well.",ex_vi:"Đồng dẫn điện rất tốt."},
{en:"Connect to sth",pos:"Cụm động từ + giới từ",ipa:"/kəˈnekt/",meaning:"kết nối với cái gì",ex_en:"My laptop won't connect to the Wi-Fi.",ex_vi:"Laptop của tôi không thể kết nối với Wi-Fi."},
{en:"Consider doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/kənˈsɪdər/",meaning:"cân nhắc làm gì",ex_en:"We are considering moving to another city.",ex_vi:"Chúng tôi đang cân nhắc chuyển đến thành phố khác."},
{en:"Consist of",pos:"Cụm động từ + giới từ",ipa:"/kənˈsɪst/",meaning:"bao gồm",ex_en:"The committee consists of ten members.",ex_vi:"Ủy ban bao gồm mười thành viên."},
{en:"Contribute to sth",pos:"Cụm động từ + giới từ",ipa:"/kənˈtrɪbjuːt/",meaning:"đóng góp cho cái gì",ex_en:"Everyone contributed to the success of the event.",ex_vi:"Mọi người đều đóng góp cho thành công của sự kiện."},
{en:"Copy sth (from sth) into/onto sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈkɒpi/",meaning:"sao chép cái gì (từ cái gì đó) sang cái gì",ex_en:"Please copy the data from the file into this folder.",ex_vi:"Vui lòng sao chép dữ liệu từ tệp này vào thư mục kia."},
{en:"Cut down",pos:"Cụm động từ",ipa:"/kʌt daʊn/",meaning:"đốn hạ",ex_en:"Workers cut down several old trees in the park.",ex_vi:"Công nhân đã đốn hạ vài cây cổ thụ trong công viên."},
{en:"Cut down on",pos:"Cụm động từ + giới từ",ipa:"/kʌt daʊn ɒn/",meaning:"giảm bớt, cắt giảm",ex_en:"We should cut down on sugar and fast food.",ex_vi:"Chúng ta nên giảm bớt đường và đồ ăn nhanh."},
{en:"Deal with",pos:"Cụm động từ",ipa:"/diːl wɪð/",meaning:"xử lý, đối phó với",ex_en:"We need to deal with this problem quickly.",ex_vi:"Chúng ta cần xử lý vấn đề này nhanh chóng."},
{en:"Decide to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/dɪˈsaɪd/",meaning:"quyết định làm việc gì",ex_en:"He decided to change his career.",ex_vi:"Anh ấy quyết định thay đổi sự nghiệp."},
{en:"Deliver sth to sb",pos:"Cụm động từ + giới từ",ipa:"/dɪˈlɪvər/",meaning:"giao cái gì đó cho ai",ex_en:"The shop delivered the package to my house.",ex_vi:"Cửa hàng đã giao gói hàng đến nhà tôi."},
{en:"Deny doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/dɪˈnaɪ/",meaning:"phủ nhận làm việc gì",ex_en:"He denied stealing the money.",ex_vi:"Anh ấy phủ nhận việc lấy trộm tiền."},
{en:"Depend on sb/sth = rely on sb/sth",pos:"Cụm động từ + giới từ",ipa:"/dɪˈpend/",meaning:"phụ thuộc, dựa vào ai/cái gì",ex_en:"Children depend on their parents for support.",ex_vi:"Trẻ em phụ thuộc vào bố mẹ để được hỗ trợ."},
{en:"Describe sb as sb/sth",pos:"Cụm động từ + giới từ",ipa:"/dɪˈskraɪb/",meaning:"miêu tả ai như là ai/cái gì",ex_en:"People often describe her as a hard worker.",ex_vi:"Mọi người thường miêu tả cô ấy là người chăm chỉ."},
{en:"Do physical exercise",pos:"Cấu trúc ngữ pháp",ipa:"/ˈfɪzɪkl/",meaning:"tập thể dục",ex_en:"Doing physical exercise every day keeps you healthy.",ex_vi:"Tập thể dục hằng ngày giúp bạn khỏe mạnh."},
{en:"Dream of sth/doing sth",pos:"Cụm động từ + giới từ",ipa:"/driːm/",meaning:"mơ về việc gì đó/làm việc gì",ex_en:"She dreams of becoming a famous singer.",ex_vi:"Cô ấy mơ ước trở thành ca sĩ nổi tiếng."},
{en:"Drop out (of sth)",pos:"Cụm động từ",ipa:"/drɒp aʊt/",meaning:"bỏ cuộc, bỏ giữa chừng",ex_en:"He dropped out of university to start his own business.",ex_vi:"Anh ấy bỏ học đại học giữa chừng để khởi nghiệp."},
{en:"Earn a living",pos:"Thành ngữ",ipa:"/ˈlɪvɪŋ/",meaning:"kiếm sống",ex_en:"He earns a living as a freelance photographer.",ex_vi:"Anh ấy kiếm sống bằng nghề nhiếp ảnh tự do."},
{en:"Earn/make money",pos:"Thành ngữ",ipa:"/mʌni/",meaning:"kiếm tiền",ex_en:"She earns money by selling handmade jewelry.",ex_vi:"Cô ấy kiếm tiền bằng cách bán trang sức thủ công."},
{en:"Employ sb/sth to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪmˈplɔɪ/",meaning:"thuê ai/áp dụng cái gì để làm việc gì",ex_en:"The company employed new software to save time.",ex_vi:"Công ty đã áp dụng phần mềm mới để tiết kiệm thời gian."},
{en:"Enable sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪˈneɪbl/",meaning:"để cho ai đó làm việc gì",ex_en:"Technology enables us to work from anywhere.",ex_vi:"Công nghệ cho phép chúng ta làm việc ở bất cứ đâu."},
{en:"Encourage sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪnˈkʌrɪdʒ/",meaning:"khuyến khích ai làm việc gì",ex_en:"Teachers encourage students to read more books.",ex_vi:"Giáo viên khuyến khích học sinh đọc nhiều sách hơn."},
{en:"Expect (sb) to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪkˈspekt/",meaning:"mong đợi (ai) làm điều gì đó",ex_en:"We expect him to arrive on time.",ex_vi:"Chúng tôi mong anh ấy đến đúng giờ."},
{en:"Fall in love (with sb)",pos:"Thành ngữ",ipa:"/lʌv/",meaning:"phải lòng, mê (ai)",ex_en:"They fell in love at first sight.",ex_vi:"Họ đã yêu nhau ngay từ cái nhìn đầu tiên."},
{en:"Fancy/enjoy/like/love doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈfænsi/",meaning:"thích làm việc gì",ex_en:"I fancy traveling around Europe someday.",ex_vi:"Tôi thích được đi du lịch khắp châu Âu vào một ngày nào đó."},
{en:"Feel free to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/friː/",meaning:"cảm thấy thoải mái làm việc gì",ex_en:"Feel free to ask me any questions.",ex_vi:"Hãy cứ thoải mái hỏi tôi bất cứ điều gì."},
{en:"Figure out",pos:"Cụm động từ",ipa:"/ˈfɪɡər aʊt/",meaning:"tìm hiểu ra",ex_en:"It took her a while to figure out the answer.",ex_vi:"Cô ấy mất một lúc để tìm ra câu trả lời."},
{en:"Fill oneself with sth",pos:"Cấu trúc ngữ pháp",ipa:"/fɪl/",meaning:"lấp đầy bản thân bằng cái gì",ex_en:"He filled himself with confidence before the match.",ex_vi:"Anh ấy lấp đầy bản thân bằng sự tự tin trước trận đấu."},
{en:"Find out",pos:"Cụm động từ",ipa:"/faɪnd aʊt/",meaning:"tìm ra, tìm hiểu",ex_en:"I need to find out the truth.",ex_vi:"Tôi cần tìm ra sự thật."},
{en:"Finish doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈfɪnɪʃ/",meaning:"hoàn thành việc gì",ex_en:"She finished doing her homework before dinner.",ex_vi:"Cô ấy hoàn thành bài tập trước bữa tối."},
{en:"Forget to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/fəˈɡet/",meaning:"quên phải làm gì",ex_en:"Don't forget to lock the door.",ex_vi:"Đừng quên khóa cửa."},
{en:"Forget doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/fəˈɡet/",meaning:"quên đã làm gì",ex_en:"I forgot locking the door and had to check again.",ex_vi:"Tôi quên rằng mình đã khóa cửa nên phải kiểm tra lại."},
{en:"Gain/put on weight",pos:"Thành ngữ",ipa:"/weɪt/",meaning:"tăng cân",ex_en:"He gained a lot of weight during the holiday.",ex_vi:"Anh ấy tăng cân nhiều trong kỳ nghỉ."},
{en:"Lose weight",pos:"Thành ngữ",ipa:"/luːz weɪt/",meaning:"giảm cân",ex_en:"She is trying to lose weight by exercising daily.",ex_vi:"Cô ấy đang cố giảm cân bằng cách tập thể dục hằng ngày."},
{en:"Get/have access to sth",pos:"Cụm động từ + giới từ",ipa:"/ˈækses/",meaning:"được quyền truy cập, tiếp cận với cái gì",ex_en:"Students now have access to online libraries.",ex_vi:"Học sinh hiện có thể truy cập thư viện trực tuyến."},
{en:"Get around",pos:"Cụm động từ",ipa:"/ɡet əˈraʊnd/",meaning:"đi xung quanh",ex_en:"It's easy to get around the city by bus.",ex_vi:"Đi lại quanh thành phố bằng xe buýt rất dễ dàng."},
{en:"Get in touch with sb",pos:"Cụm động từ",ipa:"/tʌtʃ/",meaning:"giữ liên lạc với ai",ex_en:"Please get in touch with me if you need help.",ex_vi:"Hãy liên lạc với tôi nếu bạn cần giúp đỡ."},
{en:"Get into (sth)",pos:"Cụm động từ",ipa:"/ɡet ˈɪntuː/",meaning:"đến đâu đó, trúng cử; bắt đầu làm gì, có thói quen gì",ex_en:"He got into the habit of reading before bed.",ex_vi:"Anh ấy có thói quen đọc sách trước khi ngủ."},
{en:"Get involved with sth",pos:"Cụm động từ",ipa:"/ɪnˈvɒlvd/",meaning:"tham gia, có liên quan tới cái gì",ex_en:"She got involved with a local charity.",ex_vi:"Cô ấy đã tham gia vào một tổ chức từ thiện địa phương."},
{en:"Get itchy eyes",pos:"Thành ngữ",ipa:"/ˈɪtʃi/",meaning:"bị ngứa mắt",ex_en:"My eyes get itchy when spring comes.",ex_vi:"Mắt tôi bị ngứa khi mùa xuân đến."},
{en:"Get married",pos:"Thành ngữ",ipa:"/ˈmærid/",meaning:"kết hôn",ex_en:"They got married last summer.",ex_vi:"Họ đã kết hôn vào mùa hè năm ngoái."},
{en:"Get on with sb = have a good relationship with sb",pos:"Cụm động từ",ipa:"/ɡet ɒn/",meaning:"có mối quan hệ tốt với ai",ex_en:"She gets on well with her colleagues.",ex_vi:"Cô ấy có mối quan hệ tốt với đồng nghiệp."},
{en:"Get ready to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈredi/",meaning:"sẵn sàng làm việc gì",ex_en:"Get ready to leave in ten minutes.",ex_vi:"Hãy sẵn sàng để rời đi trong mười phút nữa."},
{en:"Get the chance to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/tʃɑːns/",meaning:"có cơ hội để làm điều gì",ex_en:"She got the chance to study in the UK.",ex_vi:"Cô ấy đã có cơ hội học tập tại Anh."},
{en:"Give a performance",pos:"Thành ngữ",ipa:"/pəˈfɔːməns/",meaning:"trình diễn",ex_en:"The band gave an amazing performance last night.",ex_vi:"Ban nhạc đã trình diễn tuyệt vời tối qua."},
{en:"Give priority to sth",pos:"Cụm động từ + giới từ",ipa:"/praɪˈɒrəti/",meaning:"dành ưu tiên cho cái gì",ex_en:"We should give priority to safety.",ex_vi:"Chúng ta nên ưu tiên cho sự an toàn."},
{en:"Give sb freedom to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈfriːdəm/",meaning:"cho ai đó tự do làm việc gì",ex_en:"Parents should give their children freedom to explore.",ex_vi:"Bố mẹ nên cho con cái tự do khám phá."},
{en:"Give up",pos:"Cụm động từ",ipa:"/ɡɪv ʌp/",meaning:"bỏ cuộc, từ bỏ",ex_en:"Never give up on your dreams.",ex_vi:"Đừng bao giờ từ bỏ ước mơ của bạn."},
{en:"Give/offer advice on sth",pos:"Cụm động từ + giới từ",ipa:"/ədˈvaɪs/",meaning:"đưa ra lời khuyên về điều gì",ex_en:"The doctor gave some advice on healthy eating.",ex_vi:"Bác sĩ đã đưa ra lời khuyên về ăn uống lành mạnh."},
{en:"Go as planned",pos:"Thành ngữ",ipa:"/plænd/",meaning:"theo kế hoạch",ex_en:"The event went as planned.",ex_vi:"Sự kiện đã diễn ra đúng như kế hoạch."},
{en:"Go blank",pos:"Cụm động từ",ipa:"/ɡəʊ blæŋk/",meaning:"trống trơn",ex_en:"My mind went blank during the presentation.",ex_vi:"Đầu óc tôi trống rỗng trong lúc thuyết trình."},
{en:"Go hand in hand with sb/sth",pos:"Cụm động từ + giới từ",ipa:"/hænd/",meaning:"song hành cùng với ai/cái gì",ex_en:"Success goes hand in hand with hard work.",ex_vi:"Thành công song hành cùng với sự chăm chỉ."},
{en:"Go out",pos:"Cụm động từ",ipa:"/ɡəʊ aʊt/",meaning:"mất điện, đi ra ngoài, đi chơi",ex_en:"The lights went out during the storm.",ex_vi:"Đèn đã tắt trong lúc bão."},
{en:"Go over",pos:"Cụm động từ",ipa:"/ɡəʊ ˈəʊvər/",meaning:"rà soát lại, kiểm tra lại, ôn tập",ex_en:"Let's go over the report before the meeting.",ex_vi:"Hãy rà soát lại báo cáo trước cuộc họp."},
{en:"Go up",pos:"Cụm động từ",ipa:"/ɡəʊ ʌp/",meaning:"tăng lên",ex_en:"Prices have gone up recently.",ex_vi:"Giá cả gần đây đã tăng lên."},
{en:"Go sightseeing",pos:"Cụm động từ",ipa:"/ˈsaɪtsiːɪŋ/",meaning:"đi tham quan",ex_en:"We went sightseeing around the old town.",ex_vi:"Chúng tôi đi tham quan quanh phố cổ."},
{en:"Go snorkeling",pos:"Cụm động từ",ipa:"/ˈsnɔːkəlɪŋ/",meaning:"đi lặn với ống thở",ex_en:"They went snorkeling near the coral reef.",ex_vi:"Họ đi lặn với ống thở gần rạn san hô."},
{en:"Go/study abroad",pos:"Cụm động từ",ipa:"/əˈbrɔːd/",meaning:"đi nước ngoài/đi du học",ex_en:"She plans to study abroad next year.",ex_vi:"Cô ấy dự định đi du học vào năm sau."},
{en:"Grow up",pos:"Cụm động từ",ipa:"/ɡrəʊ ʌp/",meaning:"lớn lên, trưởng thành",ex_en:"He grew up in a small village.",ex_vi:"Anh ấy lớn lên ở một ngôi làng nhỏ."},
{en:"Hand down",pos:"Cụm động từ",ipa:"/hænd daʊn/",meaning:"truyền lại, để lại, đưa ra",ex_en:"This tradition has been handed down for generations.",ex_vi:"Truyền thống này đã được truyền lại qua nhiều thế hệ."},
{en:"Hang out with sb",pos:"Cụm động từ + giới từ",ipa:"/hæŋ aʊt/",meaning:"đi chơi/la cà với ai đó",ex_en:"I like to hang out with my friends on weekends.",ex_vi:"Tôi thích đi chơi với bạn bè vào cuối tuần."},
{en:"Have a discussion about/on sth",pos:"Thành ngữ",ipa:"/dɪˈskʌʃn/",meaning:"thảo luận về cái gì",ex_en:"We had a discussion about the new project.",ex_vi:"Chúng tôi đã thảo luận về dự án mới."},
{en:"Have a passion for sth",pos:"Thành ngữ",ipa:"/ˈpæʃn/",meaning:"có niềm đam mê với cái gì",ex_en:"She has a passion for painting.",ex_vi:"Cô ấy có niềm đam mê với hội họa."},
{en:"Have one's feet on the ground",pos:"Thành ngữ",ipa:"/fiːt/",meaning:"thực tế và có thể tự chăm sóc bản thân",ex_en:"Despite his fame, he keeps his feet on the ground.",ex_vi:"Dù nổi tiếng, anh ấy vẫn giữ sự thực tế và chăm sóc bản thân."},
{en:"Have the right to do sth",pos:"Thành ngữ",ipa:"/raɪt/",meaning:"có quyền làm việc gì",ex_en:"Every citizen has the right to vote.",ex_vi:"Mọi công dân đều có quyền bầu cử."},
{en:"Help out",pos:"Cụm động từ",ipa:"/help aʊt/",meaning:"giúp đỡ, hỗ trợ",ex_en:"She always helps out at the community center.",ex_vi:"Cô ấy luôn giúp đỡ tại trung tâm cộng đồng."},
{en:"Help sb (to) do sth",pos:"Cấu trúc ngữ pháp",ipa:"/help/",meaning:"giúp ai (làm) việc gì",ex_en:"Could you help me carry these boxes?",ex_vi:"Bạn có thể giúp tôi mang những chiếc hộp này không?"},
{en:"Hesitate to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈhezɪteɪt/",meaning:"do dự khi làm việc gì",ex_en:"Don't hesitate to contact us anytime.",ex_vi:"Đừng ngần ngại liên hệ với chúng tôi bất cứ lúc nào."},
{en:"Hope to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/həʊp/",meaning:"hy vọng làm được điều gì",ex_en:"I hope to visit Japan next spring.",ex_vi:"Tôi hy vọng sẽ đến thăm Nhật Bản vào mùa xuân tới."},
{en:"Hunt for sth",pos:"Cụm động từ + giới từ",ipa:"/hʌnt fɔːr/",meaning:"săn tìm cái gì",ex_en:"He is hunting for a part-time job.",ex_vi:"Anh ấy đang tìm kiếm một công việc bán thời gian."},
{en:"Hurry up",pos:"Cụm động từ",ipa:"/ˈhʌri ʌp/",meaning:"nhanh lên, mau lên",ex_en:"Hurry up, or we'll miss the train!",ex_vi:"Nhanh lên, không thì chúng ta sẽ lỡ tàu!"},
{en:"Imagine doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪˈmædʒɪn/",meaning:"tưởng tượng làm việc gì",ex_en:"Try to imagine living without electricity.",ex_vi:"Hãy thử tưởng tượng sống mà không có điện."},
{en:"Impact on sth",pos:"Cụm động từ + giới từ",ipa:"/ˈɪmpækt/",meaning:"tác động lên cái gì",ex_en:"Pollution has a serious impact on wildlife.",ex_vi:"Ô nhiễm có tác động nghiêm trọng lên động vật hoang dã."},
{en:"In advance",pos:"Thành ngữ",ipa:"/ədˈvɑːns/",meaning:"trước",ex_en:"Please book your tickets in advance.",ex_vi:"Vui lòng đặt vé trước."},
{en:"In exchange for sth",pos:"Thành ngữ",ipa:"/ɪksˈtʃeɪndʒ/",meaning:"để đổi lấy thứ gì",ex_en:"He offered his help in exchange for a meal.",ex_vi:"Anh ấy đề nghị giúp đỡ để đổi lấy một bữa ăn."},
{en:"In order to/so as to/to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈɔːdər/",meaning:"để làm gì",ex_en:"She studies hard in order to pass the exam.",ex_vi:"Cô ấy học chăm chỉ để vượt qua kỳ thi."},
{en:"In summary",pos:"Thành ngữ",ipa:"/ˈsʌməri/",meaning:"tóm lại",ex_en:"In summary, the plan needs more funding.",ex_vi:"Tóm lại, kế hoạch cần thêm kinh phí."},
{en:"In the field of sth",pos:"Cụm giới từ",ipa:"/fiːld/",meaning:"trong lĩnh vực gì",ex_en:"She works in the field of medicine.",ex_vi:"Cô ấy làm việc trong lĩnh vực y học."},
{en:"In the first place",pos:"Thành ngữ",ipa:"/ples/",meaning:"ngay từ đầu",ex_en:"I shouldn't have agreed in the first place.",ex_vi:"Lẽ ra tôi không nên đồng ý ngay từ đầu."},
{en:"In/over/throughout the course of time",pos:"Thành ngữ",ipa:"/kɔːs/",meaning:"trong suốt quãng thời gian",ex_en:"Prices changed over the course of time.",ex_vi:"Giá cả thay đổi theo thời gian."},
{en:"Instead of + N/Ving",pos:"Cấu trúc ngữ pháp",ipa:"/ɪnˈsted/",meaning:"thay vì điều gì/làm điều gì",ex_en:"Instead of watching TV, she reads books.",ex_vi:"Thay vì xem TV, cô ấy đọc sách."},
{en:"Integrate into sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈɪntɪɡreɪt/",meaning:"tích hợp vào cái gì",ex_en:"New students quickly integrate into the class.",ex_vi:"Học sinh mới nhanh chóng hòa nhập vào lớp học."},
{en:"Intend to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪnˈtend/",meaning:"có ý định làm điều gì",ex_en:"He intends to open his own restaurant.",ex_vi:"Anh ấy có ý định mở nhà hàng của riêng mình."},
{en:"Interact with",pos:"Cụm động từ + giới từ",ipa:"/ˌɪntərˈækt/",meaning:"tương tác với",ex_en:"Students interact with each other during group work.",ex_vi:"Học sinh tương tác với nhau trong hoạt động nhóm."},
{en:"Invest in sth",pos:"Cụm động từ + giới từ",ipa:"/ɪnˈvest/",meaning:"đầu tư vào cái gì",ex_en:"They invested in renewable energy.",ex_vi:"Họ đã đầu tư vào năng lượng tái tạo."},
{en:"Invite sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ɪnˈvaɪt/",meaning:"mời ai đó làm việc gì",ex_en:"She invited us to join her birthday party.",ex_vi:"Cô ấy mời chúng tôi tham dự tiệc sinh nhật."},
{en:"It + takes + sb + time + to V",pos:"Cấu trúc ngữ pháp",ipa:"/teɪks/",meaning:"ai đó mất bao nhiêu thời gian để làm việc gì",ex_en:"It takes her 20 minutes to get to school.",ex_vi:"Cô ấy mất 20 phút để đến trường."},
{en:"Spend time doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/spend/",meaning:"dành thời gian làm việc gì",ex_en:"He spends two hours reading every day.",ex_vi:"Anh ấy dành hai giờ để đọc sách mỗi ngày."},
{en:"It's not the end of the world",pos:"Thành ngữ",ipa:"/wɜːld/",meaning:"chưa phải điều tồi tệ nhất có thể xảy ra",ex_en:"Failing once is not the end of the world.",ex_vi:"Thất bại một lần chưa phải là điều tồi tệ nhất."},
{en:"Keep a balance between sth and sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈbæləns/",meaning:"cân bằng giữa cái gì và cái gì",ex_en:"You should keep a balance between work and rest.",ex_vi:"Bạn nên giữ cân bằng giữa công việc và nghỉ ngơi."},
{en:"Keep away from sth",pos:"Cụm động từ + giới từ",ipa:"/kiːp əˈweɪ/",meaning:"tránh xa khỏi cái gì",ex_en:"Keep away from the fire.",ex_vi:"Hãy tránh xa khỏi ngọn lửa."},
{en:"Keep doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/kiːp/",meaning:"tiếp tục làm việc gì",ex_en:"She kept working despite feeling tired.",ex_vi:"Cô ấy tiếp tục làm việc dù cảm thấy mệt."},
{en:"Keep one's options open",pos:"Thành ngữ",ipa:"/ˈɒpʃnz/",meaning:"suy nghĩ kỹ trước khi đưa ra quyết định",ex_en:"It's wise to keep your options open before deciding.",ex_vi:"Suy nghĩ kỹ trước khi quyết định là điều khôn ngoan."},
{en:"Keep silent = Be quiet",pos:"Thành ngữ",ipa:"/ˈsaɪlənt/",meaning:"giữ im lặng",ex_en:"Please keep silent during the exam.",ex_vi:"Vui lòng giữ im lặng trong khi thi."},
{en:"Lead to sth",pos:"Cụm động từ + giới từ",ipa:"/liːd/",meaning:"dẫn đến điều gì",ex_en:"Hard work leads to success.",ex_vi:"Chăm chỉ dẫn đến thành công."},
{en:"Learn sth by rote",pos:"Thành ngữ",ipa:"/rəʊt/",meaning:"học vẹt điều gì",ex_en:"He learned the poem by rote without understanding it.",ex_vi:"Anh ấy học thuộc lòng bài thơ một cách máy móc mà không hiểu."},
{en:"Learn sth by heart",pos:"Thành ngữ",ipa:"/hɑːt/",meaning:"học thuộc lòng điều gì",ex_en:"She learned the speech by heart.",ex_vi:"Cô ấy học thuộc lòng bài phát biểu."},
{en:"Learn to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/lɜːn/",meaning:"học cách làm việc gì",ex_en:"Everyone should learn to manage their time.",ex_vi:"Mọi người nên học cách quản lý thời gian."},
{en:"Lend a hand to do sth",pos:"Thành ngữ",ipa:"/hænd/",meaning:"giúp một tay để làm gì",ex_en:"Could you lend a hand to fix this chair?",ex_vi:"Bạn có thể giúp một tay sửa cái ghế này không?"},
{en:"Look around",pos:"Cụm động từ",ipa:"/lʊk əˈraʊnd/",meaning:"nhìn, xem xung quanh",ex_en:"We looked around the museum for an hour.",ex_vi:"Chúng tôi đã xem xung quanh bảo tàng trong một giờ."},
{en:"Look back on",pos:"Cụm động từ",ipa:"/lʊk bæk/",meaning:"nhìn lại, ngẫm lại",ex_en:"She likes to look back on her childhood memories.",ex_vi:"Cô ấy thích nhìn lại những kỷ niệm thời thơ ấu."},
{en:"Look forward to sth/doing sth",pos:"Cụm động từ",ipa:"/lʊk ˈfɔːwəd/",meaning:"mong chờ điều gì/làm điều gì",ex_en:"We are looking forward to the summer holiday.",ex_vi:"Chúng tôi đang mong chờ kỳ nghỉ hè."},
{en:"Look on the bright side",pos:"Thành ngữ",ipa:"/saɪd/",meaning:"nhìn vào mặt tích cực",ex_en:"Try to look on the bright side of things.",ex_vi:"Hãy cố gắng nhìn vào mặt tích cực của mọi việc."},
{en:"Look out",pos:"Cụm động từ",ipa:"/lʊk aʊt/",meaning:"coi chừng",ex_en:"Look out! There's a car coming.",ex_vi:"Coi chừng! Có xe đang tới kìa."},
{en:"Look up",pos:"Cụm động từ",ipa:"/lʊk ʌp/",meaning:"tra cứu",ex_en:"I looked up the word in the dictionary.",ex_vi:"Tôi đã tra từ đó trong từ điển."},
{en:"Look for",pos:"Cụm động từ",ipa:"/lʊk fɔːr/",meaning:"tìm kiếm",ex_en:"She is looking for her keys.",ex_vi:"Cô ấy đang tìm chìa khóa của mình."},
{en:"Look at",pos:"Cụm động từ",ipa:"/lʊk æt/",meaning:"ngắm nhìn, xem xét",ex_en:"He looked at the painting carefully.",ex_vi:"Anh ấy ngắm nhìn bức tranh một cách cẩn thận."},
{en:"Make a call",pos:"Thành ngữ",ipa:"/kɔːl/",meaning:"gọi điện",ex_en:"I need to make a call to my mother.",ex_vi:"Tôi cần gọi điện cho mẹ."},
{en:"Make a choice",pos:"Thành ngữ",ipa:"/tʃɔɪs/",meaning:"đưa ra lựa chọn",ex_en:"It's hard to make a choice between the two options.",ex_vi:"Thật khó để đưa ra lựa chọn giữa hai phương án."},
{en:"Make a connection",pos:"Thành ngữ",ipa:"/kəˈnekʃn/",meaning:"tạo ra sự kết nối",ex_en:"The teacher made a connection between the two topics.",ex_vi:"Giáo viên đã tạo ra sự liên kết giữa hai chủ đề."},
{en:"Make a decision about/on sth",pos:"Thành ngữ",ipa:"/dɪˈsɪʒn/",meaning:"đưa ra quyết định về điều gì",ex_en:"We need to make a decision about the venue soon.",ex_vi:"Chúng ta cần sớm đưa ra quyết định về địa điểm."},
{en:"Make a list of sth",pos:"Thành ngữ",ipa:"/lɪst/",meaning:"tạo một danh sách những thứ gì đó",ex_en:"She made a list of things to buy.",ex_vi:"Cô ấy đã lập một danh sách những thứ cần mua."},
{en:"Make it (im)possible (for sb) to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈpɒsəbl/",meaning:"làm cho (ai đó) (không) có thể làm được việc gì",ex_en:"Technology makes it possible for us to work remotely.",ex_vi:"Công nghệ giúp chúng ta có thể làm việc từ xa."},
{en:"Make sure",pos:"Thành ngữ",ipa:"/ʃʊər/",meaning:"bảo đảm, chắc chắn",ex_en:"Make sure you lock the door before leaving.",ex_vi:"Hãy chắc chắn rằng bạn khóa cửa trước khi rời đi."},
{en:"Make up",pos:"Cụm động từ",ipa:"/meɪk ʌp/",meaning:"trang điểm, bịa đặt, làm hòa…",ex_en:"She spent an hour making up before the party.",ex_vi:"Cô ấy dành một giờ trang điểm trước bữa tiệc."},
{en:"Make up one's mind",pos:"Thành ngữ",ipa:"/maɪnd/",meaning:"đưa ra quyết định",ex_en:"He finally made up his mind about the trip.",ex_vi:"Cuối cùng anh ấy đã đưa ra quyết định về chuyến đi."},
{en:"Make/pass a new law to do sth",pos:"Thành ngữ",ipa:"/lɔː/",meaning:"thông qua một đạo luật mới để làm việc gì",ex_en:"The government passed a new law to protect the environment.",ex_vi:"Chính phủ đã thông qua một đạo luật mới để bảo vệ môi trường."},
{en:"Make matters worse",pos:"Thành ngữ",ipa:"/ˈmætəz/",meaning:"làm mọi thứ trở nên tệ hơn",ex_en:"Losing his phone made matters worse.",ex_vi:"Việc mất điện thoại khiến mọi thứ trở nên tệ hơn."},
{en:"Manage to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈmænɪdʒ/",meaning:"xoay sở làm được việc gì",ex_en:"She managed to finish the project on time.",ex_vi:"Cô ấy đã xoay sở hoàn thành dự án đúng hạn."},
{en:"Mark a giant leap for sb/sth",pos:"Thành ngữ",ipa:"/liːp/",meaning:"có một bước nhảy vọt lớn đối với ai/cái gì",ex_en:"The invention marked a giant leap for technology.",ex_vi:"Phát minh này đánh dấu một bước nhảy vọt lớn cho công nghệ."},
{en:"Mean to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/miːn/",meaning:"có ý khi làm việc gì",ex_en:"I didn't mean to hurt your feelings.",ex_vi:"Tôi không có ý làm tổn thương bạn."},
{en:"Mean doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/miːn/",meaning:"lôi kéo/kêu gọi làm việc gì",ex_en:"Learning a language means practicing every day.",ex_vi:"Học một ngôn ngữ đòi hỏi phải luyện tập mỗi ngày."},
{en:"Mind doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/maɪnd/",meaning:"ngại làm việc gì",ex_en:"Would you mind opening the window?",ex_vi:"Bạn có ngại mở cửa sổ không?"},
{en:"Move in",pos:"Cụm động từ",ipa:"/muːv ɪn/",meaning:"chuyển vào (nhà mới)",ex_en:"They just moved into their new apartment.",ex_vi:"Họ vừa chuyển vào căn hộ mới."},
{en:"Need doing sth/to be done",pos:"Cấu trúc ngữ pháp",ipa:"/niːd/",meaning:"cần được làm gì",ex_en:"This report needs checking before submission.",ex_vi:"Báo cáo này cần được kiểm tra trước khi nộp."},
{en:"Not bother doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈbɒðər/",meaning:"không bận tâm làm việc gì",ex_en:"She didn't bother replying to the message.",ex_vi:"Cô ấy không bận tâm trả lời tin nhắn."},
{en:"Obey the law",pos:"Thành ngữ",ipa:"/lɔː/",meaning:"tuân thủ pháp luật",ex_en:"All citizens must obey the law.",ex_vi:"Mọi công dân đều phải tuân thủ pháp luật."},
{en:"On one's own",pos:"Thành ngữ",ipa:"/əʊn/",meaning:"một mình, tự mình",ex_en:"He finished the project on his own.",ex_vi:"Anh ấy đã hoàn thành dự án một mình."},
{en:"On purpose",pos:"Thành ngữ",ipa:"/ˈpɜːpəs/",meaning:"có mục đích, cố ý",ex_en:"She broke the vase on purpose.",ex_vi:"Cô ấy cố ý làm vỡ chiếc bình."},
{en:"On the outskirt of",pos:"Cụm giới từ",ipa:"/ˈaʊtskɜːt/",meaning:"ở ngoại ô",ex_en:"Their house is located on the outskirts of the city.",ex_vi:"Nhà của họ nằm ở ngoại ô thành phố."},
{en:"Pack up",pos:"Cụm động từ",ipa:"/pæk ʌp/",meaning:"đóng gói",ex_en:"We packed up our bags before leaving.",ex_vi:"Chúng tôi đóng gói hành lý trước khi rời đi."},
{en:"Pass down",pos:"Cụm động từ",ipa:"/pɑːs daʊn/",meaning:"truyền lại",ex_en:"This recipe has been passed down for generations.",ex_vi:"Công thức này đã được truyền lại qua nhiều thế hệ."},
{en:"Pay attention to sb/sth",pos:"Cụm động từ + giới từ",ipa:"/əˈtenʃn/",meaning:"chú ý tới ai/cái gì",ex_en:"Please pay attention to the instructions.",ex_vi:"Vui lòng chú ý đến hướng dẫn."},
{en:"Pay out",pos:"Cụm động từ",ipa:"/peɪ aʊt/",meaning:"thanh toán",ex_en:"The insurance company paid out a large sum.",ex_vi:"Công ty bảo hiểm đã thanh toán một khoản tiền lớn."},
{en:"Persuade sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/pəˈsweɪd/",meaning:"thuyết phục ai đó làm gì",ex_en:"She persuaded her parents to let her travel alone.",ex_vi:"Cô ấy đã thuyết phục bố mẹ cho phép mình đi du lịch một mình."},
{en:"Pick out sb/sth",pos:"Cụm động từ",ipa:"/pɪk aʊt/",meaning:"chọn ai, cái gì",ex_en:"He picked out the best photo for the album.",ex_vi:"Anh ấy đã chọn ra bức ảnh đẹp nhất cho album."},
{en:"Pick up",pos:"Cụm động từ",ipa:"/pɪk ʌp/",meaning:"nhặt lên, đón ai đó, cải thiện",ex_en:"Can you pick me up at 5 p.m.?",ex_vi:"Bạn có thể đón tôi lúc 5 giờ chiều không?"},
{en:"Plan to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/plæn/",meaning:"lên kế hoạch làm việc gì",ex_en:"They plan to visit Da Lat next month.",ex_vi:"Họ dự định đến thăm Đà Lạt vào tháng sau."},
{en:"Play an important part/role in sth",pos:"Thành ngữ",ipa:"/rəʊl/",meaning:"đóng vai trò/phần quan trọng trong việc gì",ex_en:"Education plays an important role in society.",ex_vi:"Giáo dục đóng vai trò quan trọng trong xã hội."},
{en:"Pose challenges for sb/sth",pos:"Cụm động từ + giới từ",ipa:"/ˈtʃælɪndʒɪz/",meaning:"đặt ra những thách thức cho ai/cái gì",ex_en:"Climate change poses challenges for farmers.",ex_vi:"Biến đổi khí hậu đặt ra những thách thức cho nông dân."},
{en:"Practice doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈpræktɪs/",meaning:"luyện tập, thực hành làm việc gì",ex_en:"She practices playing the piano every day.",ex_vi:"Cô ấy luyện tập chơi đàn piano mỗi ngày."},
{en:"Prefer to do sth/doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/prɪˈfɜːr/",meaning:"thích làm việc gì hơn",ex_en:"I prefer reading books to watching TV.",ex_vi:"Tôi thích đọc sách hơn là xem TV."},
{en:"Promise to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈprɒmɪs/",meaning:"hứa sẽ làm điều gì",ex_en:"He promised to call her every day.",ex_vi:"Anh ấy hứa sẽ gọi điện cho cô ấy mỗi ngày."},
{en:"Protect oneself from sb/sth",pos:"Cụm động từ + giới từ",ipa:"/prəˈtekt/",meaning:"bảo vệ bản thân khỏi ai/thứ gì",ex_en:"Always protect yourself from the sun.",ex_vi:"Hãy luôn bảo vệ bản thân khỏi ánh nắng mặt trời."},
{en:"Prove to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/pruːv/",meaning:"chứng tỏ là",ex_en:"His actions proved to be a mistake.",ex_vi:"Hành động của anh ấy đã chứng tỏ là một sai lầm."},
{en:"Provide sb with sth",pos:"Cụm động từ + giới từ",ipa:"/prəˈvaɪd/",meaning:"cung cấp cho ai cái gì",ex_en:"The school provides students with free textbooks.",ex_vi:"Nhà trường cung cấp cho học sinh sách giáo khoa miễn phí."},
{en:"Provide sth to/for sb",pos:"Cụm động từ + giới từ",ipa:"/prəˈvaɪd/",meaning:"cung cấp cái gì cho ai",ex_en:"The charity provides food for homeless people.",ex_vi:"Tổ chức từ thiện cung cấp thức ăn cho người vô gia cư."},
{en:"Pursue one's own interest",pos:"Thành ngữ",ipa:"/ˈɪntrəst/",meaning:"theo đuổi sở thích của riêng mình",ex_en:"He decided to pursue his own interest in music.",ex_vi:"Anh ấy quyết định theo đuổi sở thích âm nhạc của riêng mình."},
{en:"Put in",pos:"Cụm động từ",ipa:"/pʊt ɪn/",meaning:"lắp đặt, thực hiện, bầu cử",ex_en:"They put in a new air conditioner last week.",ex_vi:"Họ đã lắp một chiếc điều hòa mới vào tuần trước."},
{en:"Put out",pos:"Cụm động từ",ipa:"/pʊt aʊt/",meaning:"dập tắt",ex_en:"The firefighters put out the fire quickly.",ex_vi:"Lính cứu hỏa đã dập tắt đám cháy nhanh chóng."},
{en:"Put over",pos:"Cụm động từ",ipa:"/pʊt ˈəʊvər/",meaning:"truyền đạt thành công ý tưởng, cảm xúc của bạn tới ai đó",ex_en:"She managed to put over her ideas clearly.",ex_vi:"Cô ấy đã truyền đạt thành công ý tưởng của mình một cách rõ ràng."},
{en:"Put up",pos:"Cụm động từ",ipa:"/pʊt ʌp/",meaning:"dựng lên",ex_en:"They put up a new fence around the garden.",ex_vi:"Họ đã dựng một hàng rào mới quanh khu vườn."},
{en:"Raise one's awareness of/about sth",pos:"Cụm động từ + giới từ",ipa:"/əˈweənəs/",meaning:"nâng cao nhận thức của ai về vấn đề gì",ex_en:"The campaign aims to raise awareness of recycling.",ex_vi:"Chiến dịch nhằm nâng cao nhận thức về tái chế."},
{en:"Rather than",pos:"Thành ngữ",ipa:"/rɑːðər/",meaning:"hơn là, thay vì",ex_en:"She chose to walk rather than take the bus.",ex_vi:"Cô ấy chọn đi bộ hơn là đi xe buýt."},
{en:"Refer to sth",pos:"Cụm động từ + giới từ",ipa:"/rɪˈfɜːr/",meaning:"đề cập tới cái gì",ex_en:"This term refers to a specific type of energy.",ex_vi:"Thuật ngữ này đề cập đến một loại năng lượng cụ thể."},
{en:"Remember to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/rɪˈmembər/",meaning:"nhớ phải làm việc gì đó",ex_en:"Remember to submit your homework tomorrow.",ex_vi:"Hãy nhớ nộp bài tập vào ngày mai."},
{en:"Remember doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/rɪˈmembər/",meaning:"nhớ đã làm việc gì đó",ex_en:"I remember meeting him at the conference.",ex_vi:"Tôi nhớ đã gặp anh ấy tại hội nghị."},
{en:"Remind sb of sb/sth",pos:"Cụm động từ + giới từ",ipa:"/rɪˈmaɪnd/",meaning:"gợi cho ai nhớ tới ai/thứ gì",ex_en:"This song reminds me of my childhood.",ex_vi:"Bài hát này gợi cho tôi nhớ về tuổi thơ."},
{en:"Remind sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/rɪˈmaɪnd/",meaning:"nhắc ai đó làm việc gì",ex_en:"She reminded him to bring his passport.",ex_vi:"Cô ấy nhắc anh ấy mang theo hộ chiếu."},
{en:"Require sb to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/rɪˈkwaɪər/",meaning:"yêu cầu ai làm việc gì",ex_en:"The job requires him to travel frequently.",ex_vi:"Công việc yêu cầu anh ấy phải đi công tác thường xuyên."},
{en:"Result in sth",pos:"Cụm động từ + giới từ",ipa:"/rɪˈzʌlt/",meaning:"gây ra, dẫn đến điều gì",ex_en:"Poor diet can result in health problems.",ex_vi:"Chế độ ăn kém có thể dẫn đến các vấn đề sức khỏe."},
{en:"Result from sth",pos:"Cụm động từ + giới từ",ipa:"/rɪˈzʌlt/",meaning:"kết quả từ điều gì, là do điều gì",ex_en:"The delay resulted from bad weather.",ex_vi:"Sự chậm trễ là do thời tiết xấu."},
{en:"Run away from sb",pos:"Cụm động từ + giới từ",ipa:"/rʌn/",meaning:"chạy trốn khỏi ai",ex_en:"The thief ran away from the police.",ex_vi:"Tên trộm đã chạy trốn khỏi cảnh sát."},
{en:"Run out of sth",pos:"Cụm động từ + giới từ",ipa:"/rʌn aʊt/",meaning:"cạn kiệt, hết sạch thứ gì",ex_en:"We are running out of time.",ex_vi:"Chúng ta đang cạn dần thời gian."},
{en:"Rush into",pos:"Cụm động từ",ipa:"/rʌʃ ˈɪntuː/",meaning:"làm gì đó một cách vội vàng, chưa suy nghĩ kỹ",ex_en:"Don't rush into a decision without thinking.",ex_vi:"Đừng vội vàng đưa ra quyết định mà không suy nghĩ."},
{en:"S + tobe/V + so + adj/adv + that + clause",pos:"Cấu trúc ngữ pháp",ipa:"/səʊ/",meaning:"…quá … đến nỗi mà",ex_en:"The bag was so heavy that she couldn't lift it.",ex_vi:"Chiếc túi nặng đến nỗi cô ấy không thể nhấc lên."},
{en:"S + V + such + (a/an) + adj + N + that + clause",pos:"Cấu trúc ngữ pháp",ipa:"/sʌtʃ/",meaning:"…quá … đến nỗi mà",ex_en:"It was such a difficult test that many students failed.",ex_vi:"Bài thi khó đến nỗi nhiều học sinh đã trượt."},
{en:"Save sb from sth/doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/seɪv/",meaning:"cứu ai đó khỏi điều gì/làm việc gì",ex_en:"The doctor saved him from dying.",ex_vi:"Bác sĩ đã cứu anh ấy khỏi cái chết."},
{en:"Serve as sth",pos:"Cụm động từ + giới từ",ipa:"/sɜːv/",meaning:"có vai trò như là gì",ex_en:"This old shed now serves as a storage room.",ex_vi:"Nhà kho cũ này giờ có vai trò như một phòng chứa đồ."},
{en:"Set off",pos:"Cụm động từ",ipa:"/set ɒf/",meaning:"khởi hành, xuất phát",ex_en:"We set off early to avoid traffic.",ex_vi:"Chúng tôi khởi hành sớm để tránh tắc đường."},
{en:"Share sth with sb",pos:"Cấu trúc ngữ pháp",ipa:"/ʃeər/",meaning:"chia sẻ cái gì với ai",ex_en:"She shared her lunch with her classmate.",ex_vi:"Cô ấy đã chia sẻ bữa trưa với bạn cùng lớp."},
{en:"Shoot videos",pos:"Thành ngữ",ipa:"/ʃuːt/",meaning:"quay video, quay phim",ex_en:"They shot videos of the wedding ceremony.",ex_vi:"Họ đã quay video lễ cưới."},
{en:"Shout at sb",pos:"Cụm động từ + giới từ",ipa:"/ʃaʊt/",meaning:"quát mắng, hét vào mặt ai",ex_en:"He shouted at his brother out of anger.",ex_vi:"Anh ấy đã quát mắng em trai mình vì tức giận."},
{en:"Show one's gratitude to sth",pos:"Cụm động từ + giới từ",ipa:"/ˈɡrætɪtjuːd/",meaning:"thể hiện lòng biết ơn của ai đối với điều gì",ex_en:"She showed her gratitude to the volunteers.",ex_vi:"Cô ấy thể hiện lòng biết ơn đối với các tình nguyện viên."},
{en:"Sing along",pos:"Cụm động từ",ipa:"/sɪŋ əˈlɒŋ/",meaning:"hát cùng, hát theo",ex_en:"The audience sang along to their favorite song.",ex_vi:"Khán giả đã hát theo bài hát yêu thích của họ."},
{en:"Slow down",pos:"Cụm động từ",ipa:"/sləʊ daʊn/",meaning:"chậm lại",ex_en:"Please slow down; the road is slippery.",ex_vi:"Xin hãy chậm lại; đường trơn đấy."},
{en:"Speed up",pos:"Cụm động từ",ipa:"/spiːd ʌp/",meaning:"tăng tốc lên",ex_en:"New technology helped speed up production.",ex_vi:"Công nghệ mới đã giúp tăng tốc sản xuất."},
{en:"Start to do/doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/stɑːt/",meaning:"bắt đầu làm gì",ex_en:"She started learning Japanese last year.",ex_vi:"Cô ấy bắt đầu học tiếng Nhật năm ngoái."},
{en:"Stay at home",pos:"Thành ngữ",ipa:"/həʊm/",meaning:"ở nhà",ex_en:"We decided to stay at home this weekend.",ex_vi:"Chúng tôi quyết định ở nhà vào cuối tuần này."},
{en:"Stay up",pos:"Cụm động từ",ipa:"/steɪ ʌp/",meaning:"thức (đêm)",ex_en:"He stayed up late to finish his essay.",ex_vi:"Anh ấy thức khuya để hoàn thành bài luận."},
{en:"Stick with sth",pos:"Cụm động từ + giới từ",ipa:"/stɪk/",meaning:"tuân theo cái gì",ex_en:"You should stick with the original plan.",ex_vi:"Bạn nên tuân theo kế hoạch ban đầu."},
{en:"Stop to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/stɒp/",meaning:"dừng lại để làm việc gì",ex_en:"He stopped to answer the phone.",ex_vi:"Anh ấy dừng lại để nghe điện thoại."},
{en:"Stop doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/stɒp/",meaning:"không làm việc gì đó nữa, bỏ hẳn",ex_en:"She stopped smoking two years ago.",ex_vi:"Cô ấy đã bỏ hút thuốc hai năm trước."},
{en:"Stressed out",pos:"Thành ngữ",ipa:"/strest/",meaning:"căng thẳng",ex_en:"He felt stressed out before the final exam.",ex_vi:"Anh ấy cảm thấy căng thẳng trước kỳ thi cuối kỳ."},
{en:"Struggle to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/ˈstrʌɡl/",meaning:"đấu tranh để làm điều gì",ex_en:"She struggled to understand the lecture.",ex_vi:"Cô ấy đã phải vật lộn để hiểu bài giảng."},
{en:"Study/go/travel abroad",pos:"Cụm động từ",ipa:"/əˈbrɔːd/",meaning:"đi du học/đi/du lịch nước ngoài",ex_en:"Many students choose to study abroad after graduation.",ex_vi:"Nhiều sinh viên chọn đi du học sau khi tốt nghiệp."},
{en:"Suggest/advise/recommend + Ving",pos:"Cấu trúc ngữ pháp",ipa:"/səˈdʒest/",meaning:"gợi ý/đề xuất/khuyến nghị làm việc gì",ex_en:"The doctor suggested doing more exercise.",ex_vi:"Bác sĩ đề xuất tập thể dục nhiều hơn."},
{en:"Suggest/advise/recommend + that + S + (should) + V(bare)",pos:"Cấu trúc ngữ pháp",ipa:"/səˈdʒest/",meaning:"gợi ý/đề xuất/khuyến nghị ai nên làm gì",ex_en:"The teacher suggested that he practice more.",ex_vi:"Giáo viên đề nghị rằng cậu ấy nên luyện tập nhiều hơn."},
{en:"Take a risk",pos:"Thành ngữ",ipa:"/rɪsk/",meaning:"mạo hiểm, chấp nhận rủi ro",ex_en:"He decided to take a risk and start his own company.",ex_vi:"Anh ấy quyết định mạo hiểm khởi nghiệp công ty riêng."},
{en:"Take action",pos:"Thành ngữ",ipa:"/ˈækʃn/",meaning:"hành động",ex_en:"The government must take action to reduce pollution.",ex_vi:"Chính phủ phải hành động để giảm ô nhiễm."},
{en:"Take an excursion",pos:"Thành ngữ",ipa:"/ɪksˈkɜːʃn/",meaning:"tham gia một chuyến tham quan",ex_en:"The class took an excursion to the science museum.",ex_vi:"Lớp học đã tham gia một chuyến tham quan bảo tàng khoa học."},
{en:"Take away",pos:"Cụm động từ",ipa:"/teɪk əˈweɪ/",meaning:"mua mang về",ex_en:"We ordered pizza to take away.",ex_vi:"Chúng tôi đã đặt pizza mang về."},
{en:"Take breaks",pos:"Thành ngữ",ipa:"/breɪks/",meaning:"nghỉ giải lao",ex_en:"Remember to take breaks while studying.",ex_vi:"Hãy nhớ nghỉ giải lao trong khi học."},
{en:"Take care of = look after",pos:"Cụm động từ",ipa:"/keər/",meaning:"chăm lo, chăm sóc",ex_en:"She takes care of her little brother every afternoon.",ex_vi:"Cô ấy chăm sóc em trai mỗi buổi chiều."},
{en:"Take great pride in sth",pos:"Thành ngữ",ipa:"/praɪd/",meaning:"tự hào về điều gì",ex_en:"He takes great pride in his work.",ex_vi:"Anh ấy rất tự hào về công việc của mình."},
{en:"Take measures to do sth",pos:"Thành ngữ",ipa:"/ˈmeʒəz/",meaning:"thực hiện các biện pháp để làm điều gì",ex_en:"The city took measures to reduce traffic jams.",ex_vi:"Thành phố đã thực hiện các biện pháp để giảm tắc đường."},
{en:"Take notes = write down = note down",pos:"Thành ngữ",ipa:"/nəʊts/",meaning:"ghi chép, ghi chú xuống",ex_en:"Take notes during the lecture to remember better.",ex_vi:"Hãy ghi chép trong bài giảng để nhớ tốt hơn."},
{en:"Take one's time",pos:"Thành ngữ",ipa:"/taɪm/",meaning:"nhàn nhã và không vội vã khi làm việc gì đó",ex_en:"Take your time; there's no rush.",ex_vi:"Cứ từ từ; không cần vội."},
{en:"Take part in sth",pos:"Cụm động từ + giới từ",ipa:"/pɑːt/",meaning:"tham gia vào cái gì",ex_en:"Hundreds of students took part in the competition.",ex_vi:"Hàng trăm học sinh đã tham gia cuộc thi."},
{en:"Take photos/pictures (of sb/sth)",pos:"Thành ngữ",ipa:"/ˈfəʊtəʊz/",meaning:"chụp ảnh (ai/cái gì)",ex_en:"She took photos of the sunset.",ex_vi:"Cô ấy đã chụp ảnh hoàng hôn."},
{en:"Take sth by mistake",pos:"Thành ngữ",ipa:"/mɪˈsteɪk/",meaning:"lấy nhầm thứ gì",ex_en:"I took your umbrella by mistake.",ex_vi:"Tôi đã lấy nhầm ô của bạn."},
{en:"Take up",pos:"Cụm động từ",ipa:"/teɪk ʌp/",meaning:"tiếp tục, chiếm khoảng không",ex_en:"He took up painting during the lockdown.",ex_vi:"Anh ấy bắt đầu theo đuổi hội họa trong thời gian giãn cách."},
{en:"Tell sb a story",pos:"Thành ngữ",ipa:"/ˈstɔːri/",meaning:"kể cho ai đó một câu chuyện",ex_en:"Grandma told us a story before bed.",ex_vi:"Bà kể cho chúng tôi một câu chuyện trước khi ngủ."},
{en:"Tell sb about sth",pos:"Cấu trúc ngữ pháp",ipa:"/tel/",meaning:"kể cho ai đó về điều gì",ex_en:"He told us about his trip to Japan.",ex_vi:"Anh ấy kể cho chúng tôi về chuyến đi Nhật Bản."},
{en:"Thank for sth/doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/θæŋk/",meaning:"cảm ơn vì điều gì",ex_en:"I want to thank you for your help.",ex_vi:"Tôi muốn cảm ơn bạn vì sự giúp đỡ."},
{en:"Thanks to sth",pos:"Thành ngữ",ipa:"/θæŋks/",meaning:"nhờ có điều gì",ex_en:"Thanks to modern medicine, the disease was cured.",ex_vi:"Nhờ có y học hiện đại, căn bệnh đã được chữa khỏi."},
{en:"The ability to do sth",pos:"Cụm danh từ",ipa:"/əˈbɪləti/",meaning:"khả năng làm việc gì",ex_en:"She has the ability to solve complex problems.",ex_vi:"Cô ấy có khả năng giải quyết các vấn đề phức tạp."},
{en:"The state of mind",pos:"Cụm danh từ",ipa:"/steɪt/",meaning:"tâm trạng, đầu óc",ex_en:"He was in a calm state of mind before the exam.",ex_vi:"Anh ấy có tâm trạng bình tĩnh trước kỳ thi."},
{en:"Threat to sth",pos:"Cụm danh từ + giới từ",ipa:"/θret/",meaning:"mối đe dọa đối với cái gì đó",ex_en:"Pollution is a serious threat to marine life.",ex_vi:"Ô nhiễm là mối đe dọa nghiêm trọng đối với sinh vật biển."},
{en:"Top up",pos:"Cụm động từ",ipa:"/tɒp ʌp/",meaning:"làm đầy lại, sạc đầy",ex_en:"Could you top up my phone credit, please?",ex_vi:"Bạn có thể nạp thêm tiền điện thoại giúp tôi không?"},
{en:"Tour a campus",pos:"Thành ngữ",ipa:"/ˈkæmpəs/",meaning:"tham quan một khuôn viên trường",ex_en:"We toured the university campus before applying.",ex_vi:"Chúng tôi đã tham quan khuôn viên trường đại học trước khi nộp đơn."},
{en:"Transform sth into sth",pos:"Cấu trúc ngữ pháp",ipa:"/trænsˈfɔːm/",meaning:"biến đổi cái gì thành cái gì",ex_en:"Technology has transformed the way we work.",ex_vi:"Công nghệ đã biến đổi cách chúng ta làm việc."},
{en:"Try out",pos:"Cụm động từ",ipa:"/traɪ aʊt/",meaning:"thử, kiểm tra",ex_en:"He wants to try out the new gym equipment.",ex_vi:"Anh ấy muốn thử dùng thiết bị tập gym mới."},
{en:"Try to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/traɪ/",meaning:"cố gắng làm điều gì",ex_en:"She tried to open the jar but failed.",ex_vi:"Cô ấy cố gắng mở lọ nhưng không thành công."},
{en:"Try doing sth",pos:"Cấu trúc ngữ pháp",ipa:"/traɪ/",meaning:"thử làm điều gì",ex_en:"Try restarting the computer if it freezes.",ex_vi:"Hãy thử khởi động lại máy tính nếu nó bị treo."},
{en:"Turn down",pos:"Cụm động từ",ipa:"/tɜːn daʊn/",meaning:"từ chối; giảm âm lượng, hạ nhiệt độ",ex_en:"She turned down the job offer.",ex_vi:"Cô ấy đã từ chối lời mời làm việc."},
{en:"Turn in",pos:"Cụm động từ",ipa:"/tɜːn ɪn/",meaning:"rẽ vào, hướng vào; đi ngủ",ex_en:"We turned in early after the long trip.",ex_vi:"Chúng tôi đi ngủ sớm sau chuyến đi dài."},
{en:"Turn into",pos:"Cụm động từ",ipa:"/tɜːn ˈɪntuː/",meaning:"biến thành, trở thành",ex_en:"The caterpillar turned into a butterfly.",ex_vi:"Con sâu bướm đã biến thành con bướm."},
{en:"Turn off",pos:"Cụm động từ",ipa:"/tɜːn ɒf/",meaning:"tắt đi",ex_en:"Please turn off the lights before leaving.",ex_vi:"Hãy tắt đèn trước khi rời đi."},
{en:"Turn on",pos:"Cụm động từ",ipa:"/tɜːn ɒn/",meaning:"bật lên",ex_en:"Can you turn on the air conditioner?",ex_vi:"Bạn có thể bật điều hòa lên không?"},
{en:"Turn out",pos:"Cụm động từ",ipa:"/tɜːn aʊt/",meaning:"hóa ra",ex_en:"The weather turned out to be perfect for the trip.",ex_vi:"Thời tiết hóa ra lại rất hoàn hảo cho chuyến đi."},
{en:"Turn over",pos:"Cụm động từ",ipa:"/tɜːn ˈəʊvə/",meaning:"lật, trở",ex_en:"He turned over the page to continue reading.",ex_vi:"Anh ấy lật trang để tiếp tục đọc."},
{en:"Turn up",pos:"Cụm động từ",ipa:"/tɜːn ʌp/",meaning:"xuất hiện",ex_en:"She turned up late for the meeting.",ex_vi:"Cô ấy xuất hiện muộn trong cuộc họp."},
{en:"Ups and downs",pos:"Thành ngữ",ipa:"/daʊnz/",meaning:"thăng trầm",ex_en:"Every relationship has its ups and downs.",ex_vi:"Mối quan hệ nào cũng có những thăng trầm."},
{en:"Used to V = would + V",pos:"Cấu trúc ngữ pháp",ipa:"/juːzd/",meaning:"thường làm trong quá khứ",ex_en:"He used to play football every weekend.",ex_vi:"Trước đây anh ấy thường chơi bóng đá mỗi cuối tuần."},
{en:"Wake (sb) up",pos:"Cụm động từ",ipa:"/weɪk ʌp/",meaning:"(đánh thức ai đó); thức giấc, tỉnh giấc",ex_en:"She wakes up at six every morning.",ex_vi:"Cô ấy thức giấc lúc sáu giờ mỗi sáng."},
{en:"Want to do sth",pos:"Cấu trúc ngữ pháp",ipa:"/wɒnt/",meaning:"muốn làm gì",ex_en:"He wants to become an engineer.",ex_vi:"Anh ấy muốn trở thành kỹ sư."},
{en:"Ward sb/sth off",pos:"Cụm động từ",ipa:"/wɔːd ɒf/",meaning:"bảo vệ ai/cái gì",ex_en:"Garlic is believed to ward off evil spirits.",ex_vi:"Tỏi được cho là có thể xua đuổi tà ma."},
{en:"When it comes to sth",pos:"Thành ngữ",ipa:"/kʌmz/",meaning:"khi nói đến cái gì",ex_en:"When it comes to cooking, she is an expert.",ex_vi:"Khi nói đến nấu ăn, cô ấy là một chuyên gia."},
{en:"Work out",pos:"Cụm động từ",ipa:"/wɜːk aʊt/",meaning:"tập luyện, tìm ra",ex_en:"He works out at the gym every morning.",ex_vi:"Anh ấy tập luyện tại phòng gym mỗi sáng."},
{en:"Worry about sth",pos:"Cụm động từ + giới từ",ipa:"/ˈwʌri/",meaning:"lo lắng về điều gì",ex_en:"She worries about her final exam results.",ex_vi:"Cô ấy lo lắng về kết quả kỳ thi cuối kỳ."}
];
// ===== CHUYÊN ĐỀ CẤU TRÚC CÂU (STRUCTURES) — DATA & FUNCTIONS (auto-generated) =====
function strCard(v,i){
  const search = (v.en+' '+v.meaning+' '+v.ex_en+' '+v.ex_vi).toLowerCase();
  return `
  <div class="glass rounded-2xl p-4 mb-3 str-card" data-search="${search.replace(/"/g,'&quot;')}">
    <div class="flex items-start justify-between gap-2">
      <div>
        <span class="tag" style="background:rgba(155,89,182,.15);color:#9b59b6;font-size:11px">${v.pos}</span>
        <div class="font-800 text-dark2 mt-1" style="font-size:16px">${i+1}. ${v.en}</div>
        <span class="text-xs" style="color:var(--accent)">${v.ipa}</span>
      </div>
      <button onclick="speakEnglish('${v.en.replace(/'/g,"\\'").replace(/\(.*?\)/g,'')}')" class="icon-toggle" style="width:34px;height:34px;flex:none" title="Phát âm">🔊</button>
    </div>
    <div class="text-sm mt-1" style="color:#155724"><b>Nghĩa:</b> ${v.meaning}</div>
    <div class="ex-card mt-2" style="font-size:13px"><i>${v.ex_en}</i><br><span style="color:var(--accent)">→ ${v.ex_vi}</span></div>
  </div>`;
}
function buildStrVocabHtml(){
  return `
  <div class="glass rounded-2xl p-4 mb-4" style="border-left:4px solid var(--accent)">
    <div class="font-800 text-dark2 mb-2">📖 PHẦN 1 — DANH SÁCH CẤU TRÚC CÂU (${STR_VOCAB.length} cấu trúc)</div>
    <div class="text-sm text-soft">Đầy đủ loại từ, phiên âm, nghĩa và ví dụ song ngữ. Bấm 🔊 để nghe phát âm.</div>
  </div>
  <input id="strSearchInput" oninput="filterStrVocab(this.value)" placeholder="🔍 Tìm cấu trúc hoặc nghĩa tiếng Việt..." class="w-full p-3 rounded-2xl mb-4 surface" style="border:1px solid rgba(0,0,0,.08);outline:none">
  <div id="strVocabList">${STR_VOCAB.map((v,i)=>strCard(v,i)).join('')}</div>`;
}
function filterStrVocab(query){
  const q=(query||'').toLowerCase().trim();
  document.querySelectorAll('#strVocabList .str-card').forEach(el=>{
    el.style.display = el.getAttribute('data-search').includes(q) ? '' : 'none';
  });
}
const STR_VOCAB_HTML = buildStrVocabHtml();

// ===== PHẦN 2: TRÒ CHƠI GHI NHỚ =====
function strExplainFromVocab(v){
  return `<div class="mb-2"><b class="text-dark2">🔊 Phiên âm:</b> <span style="color:var(--accent)">${v.ipa}</span>
    <button onclick="speakEnglish('${v.en.replace(/'/g,"\\'").replace(/\(.*?\)/g,'')}')" class="icon-toggle" style="width:28px;height:28px;display:inline-flex;vertical-align:middle;margin-left:6px">🔊</button></div>
    <div class="mb-2"><b class="text-dark2">🏷️ Loại từ:</b> ${v.pos}</div>
    <div class="mb-2"><b class="text-dark2">📚 Nghĩa:</b> ${v.meaning}</div>
    <div class="mb-1"><b class="text-dark2">💬 Ví dụ song ngữ:</b></div>
    <div class="ex-card mb-2"><i>${v.ex_en}</i><br><span style="color:var(--accent)">→ ${v.ex_vi}</span></div>`;
}
// GAME 2.1 (Việt → Anh, chọn đáp án): cho nghĩa tiếng Việt, chọn đúng cấu trúc tiếng Anh
function buildStrGame1(){
  const list = STR_VOCAB.map((v,i)=>{
    let pool = STR_VOCAB.filter((x,j)=>j!==i && x.meaning!==v.meaning);
    pool = shuffle(pool).slice(0,3);
    let opts = shuffle([v, ...pool]);
    const ansIdx = opts.findIndex(o=>o.en===v.en);
    const lettered = opts.map((o,k)=>`${String.fromCharCode(65+k)}. ${o.en}`);
    const optsDetail = opts.map((o,k)=>{
      const isCorrect = k===ansIdx;
      return `<div class="mb-2 p-3 rounded-xl" style="background:${isCorrect?'#d4edda':'#f8f9fa'};border:1px solid rgba(0,0,0,.06)">
        <div style="font-weight:700;color:${isCorrect?'#155724':'#555'}">${isCorrect?'✅':'▫️'} ${String.fromCharCode(65+k)}. ${o.en}</div>
        <span style="color:var(--accent);font-size:12px">${o.ipa}</span> <button onclick="speakEnglish('${o.en.replace(/'/g,"\\'").replace(/\(.*?\)/g,'')}')" class="icon-toggle" style="width:24px;height:24px;display:inline-flex;vertical-align:middle;margin-left:4px;font-size:12px">🔊</button>
        <div class="mt-1" style="font-size:13px">${o.meaning}</div>
        <div class="mt-1" style="font-size:12px;color:var(--text-soft)"><i>${o.ex_en}</i><br><span style="color:var(--accent)">→ ${o.ex_vi}</span></div>
      </div>`;
    }).join('');
    const explain = `<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: ${String.fromCharCode(65+ansIdx)}. ${v.en}</div><div class="mb-2 font-700 text-dark2" style="font-size:13px">📚 Giải thích chi tiết cả 4 đáp án:</div>`+optsDetail;
    return {id:'strg1_'+i, type:'fill', q:`(Việt → Anh) Cấu trúc nào có nghĩa là: "<b>${v.meaning}</b>" ?`, vi:'', opts:lettered, ans:ansIdx, explain_detail:explain};
  });
  return shuffle(list);
}
// GAME 2.2 (Việt → Anh, gõ đáp án): cho nghĩa tiếng Việt, gõ đúng cấu trúc tiếng Anh
function buildStrGame2(){
  const list = STR_VOCAB.map((v,i)=>{
    const accept = [v.en.toLowerCase()];
    const explain = `<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: ${v.en}</div>`+strExplainFromVocab(v);
    return {id:'strg2_'+i, type:'typing', q:`(Việt → Anh) Cấu trúc tiếng Anh nào có nghĩa là:<br>"<b>${v.meaning}</b>" ?`, vi:'', answer:v.en, accept, explain_detail:explain};
  });
  return shuffle(list);
}
// GAME 2.3 (Anh → Việt, chọn đáp án): cho cấu trúc tiếng Anh, chọn đúng nghĩa tiếng Việt
function buildStrGame3(){
  const list = STR_VOCAB.map((v,i)=>{
    let pool = STR_VOCAB.filter((x,j)=>j!==i && x.meaning!==v.meaning);
    pool = shuffle(pool).slice(0,3);
    let opts = shuffle([v, ...pool]);
    const ansIdx = opts.findIndex(o=>o.en===v.en);
    const lettered = opts.map((o,k)=>`${String.fromCharCode(65+k)}. ${o.meaning}`);
    const optsDetail = opts.map((o,k)=>{
      const isCorrect = k===ansIdx;
      return `<div class="mb-2 p-3 rounded-xl" style="background:${isCorrect?'#d4edda':'#f8f9fa'};border:1px solid rgba(0,0,0,.06)">
        <div style="font-weight:700;color:${isCorrect?'#155724':'#555'}">${isCorrect?'✅':'▫️'} ${String.fromCharCode(65+k)}. ${o.meaning}</div>
        <div class="mt-1" style="font-size:13px">${o.en} <span style="color:var(--accent);font-size:12px">${o.ipa}</span></div>
        <div class="mt-1" style="font-size:12px;color:var(--text-soft)"><i>${o.ex_en}</i><br><span style="color:var(--accent)">→ ${o.ex_vi}</span></div>
      </div>`;
    }).join('');
    const explain = `<div class="mb-2 p-3 rounded-xl font-700" style="background:#d4edda;color:#155724">✅ Đáp án đúng: ${String.fromCharCode(65+ansIdx)}. ${v.meaning}</div><div class="mb-2 font-700 text-dark2" style="font-size:13px">📚 Giải thích chi tiết cả 4 đáp án:</div>`+optsDetail;
    return {id:'strg3_'+i, type:'fill', q:`(Anh → Việt) Cấu trúc "<b>${v.en}</b>" ${v.ipa} có nghĩa là gì?`, vi:'', opts:lettered, ans:ansIdx, explain_detail:explain};
  });
  return shuffle(list);
}
const STR_GAME1_QUESTIONS = buildStrGame1();
const STR_GAME2_QUESTIONS = buildStrGame2();
const STR_GAME3_QUESTIONS = buildStrGame3();

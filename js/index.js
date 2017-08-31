(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js		= d.createElement(s); 
    js.id	= id;
    js.src	= "//connect.facebook.net/zh_TW/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '123347868297339',
            xfbml      : true,
            version    : 'v2.10'
        });
        // https://747.evaair.com 正式站網址
        /*var fbUrl = 'https://technic.webgene.com.tw/project/2017EVA/';
        $('.fbBox .right').append('<fb:comments href="'+fbUrl+'" num_posts="5" width="100%"></fb:comments>');
        FB.XFBML.parse($('.fbBox .right')[0]);*/
    };
}(document, 'script', 'facebook-jssdk'));
(function(a){a.preload=function(){var c=[],b=arguments.length;for(;b--;){c.push(a("<img />").attr("src",arguments[b]));}};})(jQuery);
(function(){
    var lang = {
        "zh":[{
            "title":"長榮航空 | 那些年，我們一起搭的747-400",
            "menu_01":"影像紀實",
            "menu_02":"747 - 400 大事紀",
            "menu_03":"歷史回顧",
            "menu_04":"QA 小教室",
            "menu_05":"專屬回憶",
            "index_tt1":"asset/svg/tt1.svg",
            "index_tt3":"asset/svg/tt3.svg",
            "index_base":"img/tt_base.png",
            "index_H1":"那些年我們一起搭的747 - 400",
            "index_H2_PC":"<span>也許你曾在 747-400 上，看著窗外的異國風景，或是曾抬頭仰望，</span><span>意外發現她的蹤跡，因為你的參與，才能讓 747-400 創造出這麼多美好回憶。</span>",
            "index_H2_M":"<span>也許你曾經抬頭仰望，或隨之翱翔天際</span><span>跟著747-400的蹤跡，發現美好風景</span><span>因為有你，一同創造藍天中的美好回憶</span>",
            "photo_H1":"影像紀實",
            "photo_H2":"重溫大小事蹟，再現空中女王風采",
            "photo":"照片",
            "video":"影片",
            "photo_01":"1992-11-02<br>西雅圖波音公司<br>747-400 交機儀式",
            "photo_02":"1992-11-02<br>第一、二架747-400<br>交機儀式",
            "photo_03":"1992-11-24<br>第一、二架747-400<br>抵台歡迎儀式",
            "photo_04":"1992-11-24<br>第一、二架747-400<br>新機抵台歡迎儀式",
            "photo_05":"1993-05-18<br>第三架747-400<br>新機抵台接機儀式",
            "photo_06":"1993-09-23<br>慶祝第五架747-400<br>新機抵台接機儀式",
            "photo_07":"2008-03-14<br>747-400機艙改艙",
            "photo_08":"長榮航空747-400<br>第一代機身塗裝",
            "photo_09":"長榮航空747-400<br>第二代機身塗裝",
            "photo_10":"長榮航空747-400<br>機上服務",
            "photo_11":"長榮航空747-400<br>機上餐點",
            "photo_12":"長榮航空747-400<br>機內環境",
            "photo_13":"2017-08-17<br>B-16411 最後整備<br>迎接退役航班任務",
            "photo_14":"2017-08-24<br>長榮航空<br>《傳承‧再出發》<br>747-400客機退役",
            "photo_in_01":"1992-11-02 西雅圖波音公司 747-400 交機儀式暨晚宴",
            "photo_in_02":"1992-11-02 長榮航空第一架及第二架 747-400 交機儀式",
            "photo_in_03":"1992-11-24 長榮航空第一、二架 747-400 抵臺歡迎儀式",
            "photo_in_04":"1992-11-24 長榮航空第一、二架 747-400 新機抵台歡迎儀式",
            "photo_in_05":"1993-05-18 長榮航空第三架 747-400 新機抵台接機儀式",
            "photo_in_06":"1993-09-23 慶祝長榮航空第五架 747-400 新機抵台接機儀式",
            "photo_in_07":"2008-03-14 長榮航空 747-400 機艙改艙",
            "photo_in_08":"長榮航空 747-400 第一代機身塗裝",
            "photo_in_09":"長榮航空 747-400 第二代機身塗裝",
            "photo_in_10":"長榮航空 747-400 機上服務",
            "photo_in_11":"長榮航空 747-400 機上餐點",
            "photo_in_12":"長榮航空 747-400 機內環境",
            "photo_in_13":"2017-08-17 B-16411 最後整備，迎接退役航班任務",
            "photo_in_14":"2017-08-24 長榮航空《傳承‧再出發》747-400客機退役",
            "Timeline_H1":"747-400大事記",
            "Timeline_H2":"飛過 25 個年頭，寫下精采翱翔傳記",
            "Timeline_01":"<p>1990.07.12</p><p>首度展示 B747-400 飛機模型<span>並發表企業識別系統</span></p>",
            "Timeline_02":"<p>1992.11.02</p><p>第一、二架 B747-400 新機<span>於西雅圖波音公司舉行交機儀式</span></p>",
            "Timeline_03":"<p>1992.11.24</p><p>第一、二架 B747-400<span>新機抵台歡迎儀式</span></p>",
            "Timeline_04":"<p>1992.12.12</p><p>開闢越太平洋台北 - 洛杉磯航線</p>",
            "Timeline_05":"<p>1993.05.18</p><p>第三架 B747-400 新機抵台歡迎儀式</p>",
            "Timeline_06":"<p>1993.09.16</p><p>首架 B747-400 客貨兩用機<span>於西雅圖波音公司舉行交機儀式</span></p>",
            "Timeline_07":"<p>1993.09.23</p><p>第五架 B747-400 新機抵台歡迎儀式</p>",
            "Timeline_08":"<p>1999.07</p><p>從澳洲載運無尾熊「派翠克」和<span>「哈雷」搭乘長榮航空波音</span><span>747-400 Combi 客貨機抵達台灣</span></p>",
            "Timeline_09":"<p>2000.07.15</p><p>首架 B747-400 貨機於<span>中正國際機場第二航廈公開亮相</span></p>",
            "Timeline_10":"<p>2001.11.20</p><p>B747-400 新塗裝亮相</p>",
            "Timeline_11":"<p>2004.10</p><p>載運無尾熊「Pearl」和「Joey」來台</p>",
            "Timeline_12":"<p>2005.02.18</p><p>與波音公司 B747-400<span>超大型貨機(LCF)改裝工程簽約儀式</span></p>",
            "Timeline_13":"<p>2007.04.22</p><p>首架 B747-400 完成客機改貨機<span>改裝作業，並於 5 月開始營運</span></p>",
            "Timeline_14":"<p>2007.06.15</p><p>第一架 B747 全客機<span>更新客艙內裝完工</span><span>配備桂冠艙、菁英艙及經濟艙</span></p>",
            "Timeline_15":"<p>2007.10.04</p><p>B747-400 桂冠艙吧台換新裝</p>",
            "Timeline_16":"<p>2008.03.14</p><p>B747-400 客機艙換新裝</p>",
            "Timeline_17":"<p>2008.12.22</p><p>以 B747-400 客貨兩用機擔綱<span>貓熊包機任務自四川載運</span><span>大熊貓「團團圓圓」來台</span><span>掀起台北市立動物園的參觀熱潮</span></p>",
            "Timeline_18":"<p>2013.09.13 </p><p>B747-400 Combi<span>客貨兩用機(編號 B-16403)除役</span></p>",
            "Timeline_19":" <p>2015.01.05 </p><p>最後一架波音 747-400 客貨機<span>(編號 B-16409) 執行完最後一趟</span><span>BR868 香港－桃園飛行後正式功成身退</span><span>也宣告 747-400 客貨機正式走入歷史</span></p>",
            "Timeline_20":" <p>2017.08.21</p><p>BR892 從香港國際機場<span>返回桃園國際機場</span><span>完成最後載客飛行任務</span></p>",
            "History_H1":"歷史回顧",
            "History_H2":"747-400的傳奇一生",
            "History_01_1":"長榮航空引進，升任飛航主力",
            "History_01_2":"長榮航空於1989年由長榮集團總裁張榮發成立，同年10月6日向美國波音公司及麥道道格拉斯簽訂購買26架飛機合約，總金額達36億美元。共計引進7架747-400全客機、10架747-400 Combi(客貨機)、3架747-400貨機。早年該機型不論是飛機設計、性能或客艙舒適度均無其他機型能出其右，為長榮航空草創時期長程航線的主力機隊。",
            "History_02_1":"客機正式開航，引領艙等風範",
            "History_02_2":"1991年正式開航，1992年11月2日第一、二架747-400客機於西雅圖波音公司交機，內裝共計規劃有頭等艙、商務艙、經濟豪華艙、經濟艙四種艙等，是飛機內設置介於商務艙與經濟艙之間第四艙等(經濟豪華艙)的先驅。這項創新的做法引領許多航空公司紛紛跟進，創辦人張榮發特地前往美國接機，新機於同年11月24日飛抵台灣。",
            "History_03_1":"飛越太平洋，全球網絡新佈局",
            "History_03_2":"1992年12月12日以第一、二架747-400客機開闢台北-洛杉磯航線，開始經營越太平洋航線，奠定長榮航空全球飛航網路佈局的基礎，成就長榮航空發展為由台北直飛北美航班最密集的航空公司。直至今年底，長榮航空每週將有88個航班由台北直飛北美8個主要門戶城市，密集的班次除了便利台灣民眾往返北美，也吸引北美或東南亞旅客來台轉機。2003年1月29日長榮航空兩岸首架春節包機，航段為台北-澳門(技術降落)-上海，就是由B747-400客機執飛，拉開兩岸通航的序曲。",
            "History_04_1":"完成無數任務，747-400光榮退役",
            "History_04_2":"747-400 Combi其特有的主貨艙配置，可載運特殊貨物(如大型機台、展品以及活生動物等)，受到貨主的歡迎，並使客機機隊調度更有彈性。但因科技日新月異，各類電子產品輕薄短小，貨艙需求量小，且長榮航空新一代的長程航線主力客機777-300ER，腹艙載貨量大，逐漸取代747-400 Combi，因此747-400 Combi於 2015年1月5日正式退役。2017年8月21日747-400客機完成香港-台北載客任務後，也將全數退役，747-400貨機也規劃於2019年全數除役。",
            "History_05_1":"747-400擔綱過的重要任務",
            "History_05_2_1":"元首專機（客貨兩用）",
            "History_05_2_2":"<li>1995.04 擔任李登輝總統出訪中東專機</li><li> 2000.08 擔任陳水扁總統「民主外交 友誼之旅」專機</li><li>2001.05 擔任陳水扁總統「合作共榮 睦誼之旅」專機</li><li>2009.06 擔任馬英九總統「久誼之旅」專機</li>",
            "History_05_2_3":"保育動物專機（客貨兩用）",
            "History_05_2_4":"<li>1999 擔任「無尾熊專機」無尾熊哈雷(Harley)及派翠克(Patrick)來台專機</li><li>2008 擔任載運大陸國寶大貓熊團團、圓圓來台專機</li><li>2011擔任北海道保育動物丹頂鶴「BIG」及「貴華」來台專機</li>",
            "History_05_2_5":"首航班任務（客機）",
            "History_05_2_6_1":"<li>1992.12.12 台北-洛杉磯</li><li>1993.06.08 台北-西雅圖-紐約</li><li>1995.12.13 台北-洛杉磯-巴拿馬</li><li>1998.06.11 高雄-洛杉磯</li>",
            "History_05_2_6_2":"<li>1999.06.22 台北-溫哥華</li><li>2003.01.29 台北-澳門-上海</li><li>2008.12.15 台北-杭州</li>",
            "QA_H1":"QA小教室",
            "QA_H2":"解開疑惑，挖掘更多小祕密",
            "QA_01_Q":"請問 EVA 總計營運過幾架(買/租) 747-400 客機？",
            "QA_01_A":"EVA 共營運過 7 架 747-400 全客機(B-16401、B-16402、B-16403、B-16405、 B-16410、B-16411 及 B-16412)，其中 B-16403 及 B-16405 於 1994 年 9 月及 10 月分別飛美國改裝為 COMBI (客貨兩用機)；B-16401 及 B-16402 於 2004 年 4 月售與 GECAS 後租回營運，並分別於 2007 年交由以色列改裝廠 IAI 改裝為貨機。B-16402 於 2016 年 11 月租期屆滿退租，B-16401 則預計於 2017 年 7 月退租。 ",
            "QA_02_Q":"請問 EVA 的 747-400 客機飛過哪些航點，其中，在哪些航線擔任首航任務？",
            "QA_02_A_1":"飛過的航點 /<div class='list'><span>LAX,SEA,EWR,SFO,YVR</span><span>VIE,LGW,LHR,CDG</span><span>BKK,SIN,PEN,SGN,MNL,KUL,JKT,DPS</span><span>CTS,HKD,HND</span><span>KHH,HKG,MFM</span><span>PVG,PEK,HGH,CAN,SZX</span></div>",
            "QA_02_A_2":"首航任務 /<div class='list'><span>1992.12.12 TPE-LAX</span><span>1993.06.08 TPE-SEA-EWR</span><span>1995.12.13 TPE-LAX-PTY</span><span>1998.06.11 KHH-LAX</span><span>1999.06.22 TPE-YVR</span><span>2008.12.15 TPE-HGH</span></div>",
            "QA_03_Q":"請問 EVA 的 747-400 客機最遠的航線是哪一條，航程多遠？",
            "QA_03_A":" 最遠航線 TPE (台北)-LAX(洛杉磯)-PTY(巴拿馬)-LAX(洛杉磯)-TPE(台北)。<br>直飛最遠航段 LAX-TPE，航程約 6，500 海里。",
            "QA_04_Q":"請問 EVA 的 747-400 客機機隊服役期間多久？累計載客多少人？累計航程多遠？ 約可繞地球幾週？",
            "QA_04_A":" 自 1992 年接收首架 747-400 客機迄今，EVA 之 747-400 客機機隊已服役長達 25    年。(累計載客人數及航程實無法統計) ",
            "QA_05_Q":"請問 EVA 採用 747-400 客機的考量為何？第一架 747 何時導入機隊？何時正式投入服務？",
            "QA_05_A":"自美國西北航空於 1989 年 2 月開始營運第 1 架 747-400 全客機，747-400 客機 一直獨佔寬體客機市場之鰲頭，該機型不論是飛機設計、性能或客艙舒適度均 無其他機型能出其右。本公司於 1992 年 11 月導入第一架 747-400 全客機，並 於 1992 年 12 月 12 日正式投入營運，首航台北-洛杉磯航線。  <br>1992 導入的 Boeing747-400 新機全球首創第四種艙等 - 經濟豪華艙，旅客只須支付比經濟艙多一點的票價，即可享受如同商務艙的服務。這項創新作法隨後引領許多航空業者跟進。<br>2007 第一架 Boeing747-400 客機改艙，配備桂冠艙、菁英艙、經濟艙。",
            "QA_06_Q":"請問原本的 747-400 客機配備哪些艙等？",
            "QA_06_A":"超級頭等艙(SUPER FIRST CLASS)<br>超級商務艙(SUPER DELUXE CLASS)<br>經濟豪華艙(ECONOMY DELUXE CLASS)<br>經濟艙(ECONOMY CLASS)",
            "QA_07_Q":"改艙前後的載客量各多少？",
            "QA_07_A":"原 4 艙等配置 368 座位，改成 3 艙等後載客量為 372 座。 ",
            "QA_08_Q":"改艙之後升級哪些服務？有哪些創新作法？",
            "QA_08_A":" 將客艙硬體設備提升至 777 機隊的標準，增加超級商務艙後躺角度，乘客於長 途飛行時更加舒適，且增加個人隱私性。改善娛樂系統，全機各艙等均為個人 隨選影音設備。增加廚房設備，提供乘客更佳的餐飲。更新廁所設備，提供更 寬敞的空間供乘客使用。",
            "QA_09_Q":"EVA 會如何處理退役後的 747-400 客機？",
            "QA_09_A":"747-400 客機退役後將會進行拆解零件出售，發揮物盡其用之最大剩餘價值。",
            "FB_H1":"專屬回憶",
            "FB_H2":"感謝有你，共創25年精彩回憶"
        }],
        "en":[{
            "title":"EVA Air | Farewell! Boeing 747-400",
            "menu_01":"Gallery",
            "menu_02":"Milestones",
            "menu_03":"History",
            "menu_04":"Q & A",
            "menu_05":"Memories",
            "index_tt1":"asset/svg/tt_en2.svg",
            "index_tt3":"asset/svg/tt_en1.svg",
            "index_base":"img/tt_en.png",
            "index_H1":"Farewell! Boeing 747-400",
            "index_H2_PC":"Maybe you used to fly on one of our Boeing 747-400, watching the exotic scenery just beyond the window, or looking up at the skies, and accidentally discovering her charm. It is your curiousity and travel stories that shaped the many beautiful memories of the 747-400.",
            "index_H2_M":"Follow the foot prints of boeing 747-400<p>to discover more and relive the</p>beautiful memories that you helped shape.",
            "photo_H1":"Gallery",
            "photo_H2":"Relive the special occasions and rediscover the elegance of the Queen of the Skies.",
            "photo":"Photo",
            "video":"Video",
            "photo_01":"1992-11-02<br>Boeing in Everett<br>747-400 Delivery Ceremony",
            "photo_02":"<span>1992-11-02<br>The 1st and 2nd 747-400 delivery ceremony</span>",
            "photo_03":"1992-11-24<br>The 1st and 2nd 747-400<br>Welcome Ceremony in Taiwan",
            "photo_04":"1992-11-24<br>The 1st and 2nd 747-400<br>Welcome Ceremony in Taiwan",
            "photo_05":"1993-05-18<br>The 3rd 747-400<br>Arrival Ceremony in Taiwan",
            "photo_06":"1993-09-23<br>Celebration of the 5th 747-400<br>Arrival in Taiwan",
            "photo_07":"2008-03-14<br>747-400 cabin renovation",
            "photo_08":"EVA Air<br>1st generation livery",
            "photo_09":"EVA Air<br>2nd generation livery",
            "photo_10":"EVA Air 747-400<br>in-flight service",
            "photo_11":"EVA Air 747-400<br>gourmet meals",
            "photo_12":"EVA Air 747-400<br>cabin environment",
            "photo_13":"2017-08-17<br>B-16411 getting ready<br>for her final mission.",
            "photo_14":"2017-08-24<br>EVA Air Bids Farewell<br>to B747-400 & Revels New Uniforms.",
            "photo_in_01":"1992-11-02 747-400 Delivery Ceremony and banquet at the Boeing Company in Everett",
            "photo_in_02":"1992-11-02 Delivery Ceremony of EVA Air's 1st and 2nd 747-400.",
            "photo_in_03":"1992-11-24 Welcome Ceremony of EVA Air's 1st and 2nd 747-400 in Taiwan",
            "photo_in_04":"1992-11-24 Welcome Ceremony of EVA Air's 1st and 2nd 747-400 in Taiwan",
            "photo_in_05":"1993-05-18 Welcome Ceremony of EVA Air's 3rd 747-400 in Taiwan",
            "photo_in_06":"1993-09-23 Welcome Ceremony of EVA Air's 5th 747-400 in Taiwan",
            "photo_in_07":"2008-03-14 Cabin modifcation for the 747-400.",
            "photo_in_08":"EVA Air's 1st generation livery on the 747-400",
            "photo_in_09":"EVA Air's 2nd generation livery on the 747-400",
            "photo_in_10":"Boeing 747-400 in-flight service of EVA Air",
            "photo_in_11":"747-400 gourmet meals of EVA Air.",
            "photo_in_12":"747-400 cabin environment of EVA Air",
            "photo_in_13":"2017-08-17 B-16411 getting ready for her final mission.",
            "photo_in_14":"2017-08-24 EVA Air Bids Farewell to B747-400 & Revels New Uniforms.",
            "Timeline_H1":"Milestones",
            "Timeline_H2":"Special moments 25 years in the making",
            "Timeline_01":"<p>1990.07.12</p><p>Display of the EVA Air 747-400<span> aircraft model, and publishing of the corporate identity system</span></p>",
            "Timeline_02":"<p>1992.11.02</p><p>Delivery Ceremony of the 1st and<span> 2nd EVA Air 747-400 aircraft was</span> held in Everett, WA.</p>",
            "Timeline_03":"<p>1992.11.24</p><p>Welcome Ceremony of the first two<span> 747-400 of new aircraft arriving in Taiwan</span></p>",
            "Timeline_04":"<p>1992.12.12</p><p>Launch of the transpacific route from<br>Taipei to Los Angeles.</p>",
            "Timeline_05":"<p>1993.05.18</p><p>The 3rd 747-400 Welcome<br>Ceremony in Taiwan</p>",
            "Timeline_06":"<p>1993.09.16</p><p>Aircraft Delivery Ceremony of the 1st<span>747-400 Combi in Everett, WA.</span></p>",
            "Timeline_07":"<p>1993.09.23</p><p>The 5th 747-400 Welcome<br>Ceremony in Taiwan</p>",
            "Timeline_08":"<p>1999.07</p><p>The two koalas \"Patrick\" and <span>\"Halley\" carried by EVA Air's Boeing </span><span>747-400 Combi aircraft from Australia arrived in Taiwan.</span></p>",
            "Timeline_09":"<p>2000.07.15</p><p>The 1st 747-400 cargo aircraft made its<span>public appearance at Terminal 2 of Chiang Kai-shek International Airport.</span></p>",
            "Timeline_10":"<p>2001.11.20</p><p>EVA Air's 2nd generation aircraft livery made its first appearance on the 747-400</p>",
            "Timeline_11":"<p>2004.10</p><p>The two koalas \"Pearl\" and \"Joey\" were transported to Taiwan.</p>",
            "Timeline_12":"<p>2005.02.18</p><p>Signing Ceremony of 747-400 Large Cargo Freighter (LCF, a.k.a Dreamlifter)<span>retrofit with Boeing and eneral Electric.</span></p>",
            "Timeline_13":"<p>2007.04.22</p><p>The 1st 747-400 completed<span>the LCF conversion in Taoyuan and</span>started operation in May 2007.</p>",
            "Timeline_14":"<p>2007.06.15</p><p>The 1st EVA Air 747 passenger aircraft<span>completed interior upgrades, complete</span><span>with Premium Laurel Class, Elite Class</span>and Economy Class.</p>",
            "Timeline_15":"<p>2007.10.04</p><p>Redesigned In-flight Bar in the Premium Laurel Class cabin of the EVA 747-400.</p>",
            "Timeline_16":"<p>2008.03.14</p><p>B747-400 passenger cabin<br>was newly decorated.</p>",
            "Timeline_17":"<p>2008.12.22</p><p>747-400 Combi aircraft undertook the charter service to transport pandas from Sichuan. The two pandas \"Tuantuan\" and \"Yuanyuan\" arrived in Taiwan.</p>",
            "Timeline_18":"<p>2013.09.13</p><p>747-400 Combi (No. B-16403)<span>was decommissioned.</span></p>",
            "Timeline_19":"<p>2015.01.05</p><p>The last 747-400 Combi aircraft<span>(No. B-16409) completed its last flight</span>from Hong Kong to Taipei.</p>",
            "Timeline_20":"<p>2017.08.21</p><p>The last EVA Air 747-400 completed its<span>last flight from Hong Kong to Taoyuan,</span><span>marking the end of a truly remarkable era.</span></p>",
            "History_H1":"Historical Review",
            "History_H2":"A True Legend",
            "History_01_1":"Introduced by EVA Air and promoted to the main force of air traffic",
            "History_01_2":"EVA Air was founded by Y. F. Chang, president of Evergreen Group, in 1989, and it signed contracts with Boeing Company and McDonnell Douglas to purchase 26 planes on October 6 in the same year, with the total amount being USD 3.6 billion. Seven 747-400 passenger aircraft, ten 747-400 Combi and three 747-400 cargo planes were introduced altogether. The model design, performance or comfort of 747-400 model were better than those of other models, and it was the main fleet of long haul routes during the pioneering stage of EVA Air. ",
            "History_02_1":"A passenger airplane started the first flight formally and inspired the demeanor of cabin class.",
            "History_02_2":"Flight started formally in 1991, the 1st and 2nd 747-400 passenger aircraft were delivered at Boeing Company, Seattle on Nov. 2, 1992, with first class, business class, economy deluxe class and economy class planned, which pioneered the 4th class (economy deluxe class) between business class and economy class. Many airline companies followed this innovative practice and the founder Chang, Yung-fa especially, headed for America to pick up the planes, and flew back to Taiwan on Nov. 24 in the same year.",
            "History_03_1":"Fly over the Pacific and new global network for services",
            "History_03_2":"The 1st and 2nd 747-400 passenger aircraft opened up the flight route from Taipei to Los Angeles on Dec. 12, 1992, which started the trans-Pacific flight, laid the foundation of the global flight network distribution for EVA Air and made EVA Air own the most intensive flights from Taipei to North America. Up to the end of the year, EVA Air will have 88 flights from Taipei to 8 major gateway cities in North America each week. The intensive flights provide convenience for Taiwanese to travel to and from North America and also attract tourists from North America or Southeast Asia to transfer in Taiwan. On January 29, 2003, EVA Air arranged B747-400 passenger aircraft to carry out the 1st spring festival charter flight from Taipei through Macao (technical landing) to Shanghai, which kicked off the cross-Strait direct flight. ",
            "History_04_1":"747-400 completes numerous tasks and is decommissioned.",
            "History_04_2":"The unique main cargo cabin of 747-400 Combi can carry special cargoes (such as large machines, exhibits and live animals), which is quite popular among owners of cargoes and makes the passenger aircraft fleet dispatching more flexible. However, as science and technology are changing rapidly and various electronic products become lighter, thin, short and small, the demand of cargo space is small. EVA Air's new generation aircraft 777-300ER for long haul routes possesses great cargo capacity, so it has gradually replaced the 747-400 Combi; the 747-400 Combi was formally decommissioned on January 5, 2015. After completing the flight between Hong Kong and Taipei on August 21, 2017, all 747-400 passenger aircraft were decommissioned and 747-400 cargo aircraft were also planned to be decommissioned in 2019.",
            "History_05_1":"Important tasks undertaken by the 747-400",
            "History_05_2_1":"Charter flight for head of state (combi aircraft)",
            "History_05_2_2":"<li>1995.04, served as a charter flight for the then president Lee, Teng-hui to visit the Middle East</li><li>2000.08, 2000, served as a charter flight for the then president Chen, Shui-bian on the \"democratic diplomacy and friendship journey\"</li><li>2001.05, served as a charter flight for the then  president Chen Shui-bian on the \"cooperative prosperity and harmonious journey\"</li><li>2009.06, served as a charter flight for the then President Ma Ying-jeou on the \"journey of permanent friendship\"</li>",
            "History_05_2_3":"Charter flight for protected animals (combi aircraft)",
            "History_05_2_4":"<li>In 1999, served as a charter flight for the two koalas \"Harley\" and \"Patrick\"</li><li>In 2008, served as a charter flight for the two pandas \"Tuantuan\" and \"Yuanyuan\"</li><li>In 2011, served as a charter flight for the red-crowned cranes \"BIG\" and \"GUIHUA\",that were protected in Hokkaido.</li>",
            "History_05_2_5":"First flight (passenger plane)",
            "History_05_2_6_1":"<li>1992.12.12 Taipei-Los Angles</li><li>1993.06.08 Taipei-Seattle-New York</li><li>1995.12.13 Taipei-Los Angles-Panama</li><li>1998.06.11 Kaohsiung-Los Angles</li>",
            "History_05_2_6_2":"<li>1999.06.22 Taipei-Vancouver</li><li>2003.01.29 Taipei-Macao-Shanghai</li><li>2008.12.15 Taipei-Hangzhou</li>",
            "QA_H1":"Q & A",
            "QA_H2":"Solve the puzzle and dig for more secrets",
            "QA_01_Q":"How many 747-400 passenger aircraft has EVA operated (purchased / rented)?",
            "QA_01_A":"EVA runs seven 747-400 passenger aircraft (B-16401, B-16402, B-16403, B-16405, B-16410, B-16411 and B-16412), among which B-16403 and B-16405 flew to America were converted into COMBI (combi aircraft) in September and October, 1994, respectively, and in April, 2004, B-16401 and B-16402 were sold to GECAS and rented back, and then in 2007, they were delivered to IAI, an Israeli refitting factory to be converted into cargo aircraft. The B-16402 was returned after the expiration of tenancy term in November, 2016, and it is predicted that B-16401 will be returned in July, 2017. ",
            "QA_02_Q":"How many destinations have EVA 747-400 passenger aircraft flown to? In which air routes do they implement the first flight?",
            "QA_02_A_1":"Destinations / <div class=\"list\"><span>LAX,SEA,EWR,SFO,YVR</span><span>VIE,LGW,LHR,CDG</span><span>BKK,SIN,PEN,SGN,MNL,KUL,JKT,DPS </span><span>CTS,HKD,HND</span><span>KHH,HKG,MFM</span><span>PVG,PEK,HGH,CAN,SZX</span></div>",
            "QA_02_A_2":"First flight /<div class=\"list\"><span>1992.12.12 TPE-LAX</span><span>1993.06.08 TPE-SEA-EWR</span><span>1995.12.13 TPE-LAX-PTY</span><span>1998.06.11 KHH-LAX</span><span>1999.06.22 TPE-YVR</span><span>2008.12.15 TPE-HGH</span></div>",
            "QA_03_Q":"Which is the longest route for EVA 747-400 passenger aircraft? How far is the flying distance? ",
            "QA_03_A":"The longest route:  TPE (Taipei)-LAX (Los  Angeles)-PTY (Panama)-LAX (Los Angles)-TPE (Taipei)<br>The longest direct flight route segment is from LAX to TPE, with a flying distance of about 6,500 nm. ",
            "QA_04_Q":"How long has EVA's 747-400 passenger aircraft fleet served? How many passengers have been carried? How far is the accumulated flying distance? How many times would if circling the Earth?",
            "QA_04_A":" Since the 1st 747-400 passenger aircraft was received in 1992, EVA's 747-400 passenger aircraft fleet has served over 25 years (the accumulated number of passengers and flying distance statistics are unavailable).",
            "QA_05_Q":"Why does EVA consider adopting 747-400 passenger aircraft? When was the first 747 introduced to the fleet? When was it put into service formally?",
            "QA_05_A":"Since the Northwest Airlines started to fly the 1st 747-400 passenger aircraft in February, 1989, 747-400 passenger aircraft have occupied the market of wide-body airliners, whose design, performance or cabin comfort surpasses those of other models. The Company imported the 1st 747-400 passenger aircraft in November, 1992 and put it into operation on December 12, 1992, with the first flight from Taipei to Los Angeles.<br>The imported new Boeing 747-400 initiated the 4th cabin class in the world, economy deluxe class and passengers only have to pay the ticket rates a little higher than economy class; they can then enjoy the service as in the business class cabin. Many airline companies follow this initiative practice.<br>The 1st Boeing 747-700 passenger aircraft had the cabin renovated in 2007, with Premium Laurel Class, Elite Class and Economy Class equipped.",
            "QA_06_Q":"Which Cabin Class did an original 747-400 passenger aircraft have? ",
            "QA_06_A":"SUPER FIRST CLASS<br>SUPER DELUXE CLASS<br>ECONOMY DELUXE CLASS<br>ECONOMY CLASS",
            "QA_07_Q":"How many passengers could be carried before the cabin renovation? ",
            "QA_07_A":"The original four-class cabins were equipped with 368 seats and the three-class cabins after the renovation have 372 seats. ",
            "QA_08_Q":"Which services are upgraded after the cabin renovation? What kind of initiative practices are adopted? ",
            "QA_08_A":" The hardware equipment of passenger cabins is improved to the standard of 777 fleets, with the backwards lying angle in the super deluxe class included, and passengers can feel more comfortable during long-haul flight, and personal privacy is protected. The in-flight entertainment  system has been improved and there is self-service audio-video equipment in the cabins of all classes. Galley equipment is added to provide passengers with better dining service. Laboratory facilities are  updated to provide more spacious room for passengers. ",
            "QA_09_Q":"How does EVA deal with decommissioned 747-400 passenger aircraft?",
            "QA_09_A":"747-400 passenger aircraft will be dismantled and sold after decommissioning, to bring their surplus value into full use.",
            "FB_H1":"Our Memories",
            "FB_H2":"Thank you for being part of our 25 years of wonderful momories."
        }],
        "jp":[{
            "title":"エバー航空 | あの頃の747 - 400の想い出",
            "menu_01":"ギャラリー",
            "menu_02":"747 - 400 の沿革",
            "menu_03":"ヒストリー",
            "menu_04":"Q & A",
            "menu_05":"特別な思い出",
            "index_base":"img/tt_jp.png",
            "index_tt1":"asset/svg/tt_jp1.svg",
            "index_tt3":"asset/svg/tt_jp2.svg",
            "index_H1":"あの頃の747 - 400の想い出",
            "index_H2_PC":"<span> 747-400 の窓から異国の風景を眺めたり、 地上から747-400を仰ぎ見たり</span><span>747-400 の美しい思い出が紡がれていきます。</span>",
            "index_H2_M":"<span>空を仰ぎみたり、一緒に空を翔けぬけたり、747-400の後には美しい光景がありました。皆様とともに、青空の中の美しい思い出を紡いでいきます。</span>",
            "photo_H1":"ギャラリー",
            "photo_H2":"「空の女王」の歴史を、これまでの出来事とともに振り返ります",
            "photo":"写真",
            "video":"映像",
            "photo_01":"<span>1992-11-02<br>シアトルボーイング社での747-400 引き渡し式</span>",
            "photo_02":"1992-11-02<br>第1、第2機747-400の<br>引き渡し式",
            "photo_03":"1992-11-24<br>第1、第2機747-400の<br>台湾での歓迎式典",
            "photo_04":"1992-11-24<br>第1、第2機747-400<br>新機体の台湾での歓迎式典",
            "photo_05":"1993-05-18<br>第3機747-400<br>新機体の台湾での交代式",
            "photo_06":"1993-09-23<br>第5機747-400<br>新機体を祝う台湾での交代式",
            "photo_07":"2008-03-14<br>747-400 客室改装",
            "photo_08":"エバー航空747-400<br>第1期 機体塗装",
            "photo_09":"エバー航空747-400<br>第2期 機体塗装",
            "photo_10":"エバー航空747-400<br>客室乗務",
            "photo_11":"エバー航空747-400<br>機内食",
            "photo_12":"エバー航空747-400<br>客室環境",
            "photo_13":"2017-08-17<br>B-16411 最後の任務に向けて準備中。",
            "photo_14":"2017-08-24<br>B747-400 の退役式と新制服のお披露目会を実施。",
            "photo_in_01":"1992-11-02 シアトルボーイング社 の747-400 引き渡し式とパーティ",
            "photo_in_02":"1992-11-02 エバー航空 第1機および第2機 747-400 の引き渡し式",
            "photo_in_03":"1992-11-24 エバー航空 第1、第2機 747-400 台湾での歓迎式典",
            "photo_in_04":"1992-11-24 エバー航空第1、第2機 747-400 新機体の台湾での歓迎式典",
            "photo_in_05":"1993-05-18 エバー航空第3機 747-400 新機体の台湾での交代式",
            "photo_in_06":"1993-09-23 エバー航空の第5機 747-400 新機体到着を祝う台湾での交換式",
            "photo_in_07":"2008-03-14 エバー航空 747-400 客室改装",
            "photo_in_08":"エバー航空 747-400 第1期機体塗装",
            "photo_in_09":"エバー航空 747-400 第2期 機体塗装",
            "photo_in_10":"エバー航空 747-400 客室乗務",
            "photo_in_11":"エバー航空 747-400 機内食",
            "photo_in_12":"エバー航空 747-400 客室環境",
            "photo_in_13":"2017-08-17 B-16411 最後の任務に向けて準備中。",
            "photo_in_14":"2017-08-24 B747-400 の退役式と新制服のお披露目会を実施。",
            "Timeline_H1":"747-400の沿革",
            "Timeline_H2":"駆け抜けた25年間をつづります",
            "Timeline_01":"<p>1990.07.12</p><p>B747-400モデルの初展示および、<span>コーポレート・アイデンティティの発表</span></p>",
            "Timeline_02":"<p>1992.11.02</p><p>第1、第2機 B747-400 新機体の<span>シアトルボーイング社での引き渡し式</span></p>",
            "Timeline_03":"<p>1992.11.24</p><p>第1、第2機 B747-400<span>新機体の台湾での歓迎式典</span></p>",
            "Timeline_04":"<p>1992.12.12</p><p>太平洋を越えて 台北 - ロサンゼルス運航</p>",
            "Timeline_05":"<p>1993.05.18</p><p>第3機 B747-400 新機体の台湾での歓迎式典</p>",
            "Timeline_06":"<p>1993.09.16</p><p>初の B747-400 貨客両用仕様機の<span>シアトルボーイング社での引き渡し式</span></p>",
            "Timeline_07":"<p>1993.09.23</p><p>第5機 B747-400 新機体の台湾での歓迎式典</p>",
            "Timeline_08":"<p>1999.07</p><p><span>オーストラリアからコアラの「パトリック」</span><span>と「ハーレー」がエバー航空のボーイング</span><span>747-400 貨客両用機に乗って台湾に到着</span></p>",
            "Timeline_09":"<p>2000.07.15</p><p>初の B747-400 貨物機を<span>中正国際空港第2ターミナルにて披露</span></p>",
            "Timeline_10":"<p>2001.11.20</p><p>B747-400 新塗装を披露</p>",
            "Timeline_11":"<p>2004.10</p><p><span>コアラの「パール」と</span><span>「ジョーイ」が台湾に到着</span></p>",
            "Timeline_12":"<p>2005.02.18</p><p>ボーイング社との B747-400<span>大型貨物機(LCF)の改装工事契約締結式</span></p>",
            "Timeline_13":"<p>2007.04.22</p><p>初の B747-400 旅客機から貨物機への<span>改装作業が完了し、5月に運航開始</span></p>",
            "Timeline_14":"<p>2007.06.15</p><p>第1機 B747 旅客機の<span>客室内装の変更工事完了</span><span>ローレルクラス、エリートクラス、エコノミークラスを設置</span></p>",
            "Timeline_15":"<p>2007.10.04</p><p>B747-400 プレミアムローレルクラスの<span>バーを新装</span></p>",
            "Timeline_16":"<p>2008.03.14</p><p>B747-400 旅客機を新装</p>",
            "Timeline_17":"<p>2008.12.22</p><p><span>B747-400 貨客両用機で四川から</span><span>パンダの「団団と円円」を台湾へ運び</span><span>台北市立動物園への見物客が</span><span>行列を作りました</span></p>",
            "Timeline_18":"<p>2013.09.13</p><p>B747-400 Combi<span>貨客両用機(番号 B-16403)退役</span></p>",
            "Timeline_19":" <p>2015.01.05</p><p>最後の1機のボーイング 747-400 貨客機<span>(番号 B-16409) は最後のフライトである</span><span>BR868 香港－桃園便の運航後に正式退役し、</span><span>747-400 貨客機はその歴史に幕を閉じました</span></p>",
            "Timeline_20":"<p>2017.08.21</p><p>BR892 便が香港国際空港から<span>桃園国際空港へ帰還し</span><span>最後の旅客輸送任務を完了しました</span></p>",
            "History_H1":"ヒストリー",
            "History_H2":"747-400の生涯",
            "History_01_1":"エバー航空を率い、主力航空機に",
            "History_01_2":"エバー航空は、1989年に長栄グループ総裁の張栄発によって設立され、同年10月6日に米国ボーイング社およびマクドネル・ダグラス社と、総額36億米ドルで、747-400旅客機7機、747-400 貨客機10機、747-400貨物機3機の計26機の購入契約を締結しました。早期には、設計、性能または客室の快適さにおいて右に出るもののいないこれらの機体は、エバー航空の草創期における長距離航路の主力チームでした。",
            "History_02_1":"旅客機の正式就航で、客室スタイルを牽引",
            "History_02_2":"1991年の正式就航後、1992年11月2日に第1、2機747-400 旅客機がボーイング社にて引き渡されました。内装にはファーストクラス、ビジネスクラス、ビジネスエコノミークラス、エコノミークラスが計画され、革新的なビジネスクラスとエコノミークラスの間の「第4のクラス」（デラックスエコノミークラス）を設置し、他社も次々に追随しました。創業者の張栄発が特別に米国での引き渡しに出向き、新機体は同年11月24日に台湾に到着しました。",
            "History_03_1":"太平洋を飛び越えた、グローバルネットワークの新局面",
            "History_03_2":"1992年12月12日に、第1、第2機 747-400 旅客機の台北-ロサンゼルス線の開通による太平洋横断航路の就航で、エバー航空のグローバルフライトネットワークの基礎が作られ、台北－北米直通便が最多の航空会社へと変貌を遂げました。今年の年末まで、エバー航空の台北－北米8大主要都市への直通便は週に88便、台湾の人々の北米への往復を便利にするだけでなく、北米や東南アジアからの、台湾でのトランジットも便利になりました。2003年1月29日エバー航空は初の台湾中国春節チャーター便を開始。航路は台北－マカオ（テクニカルランディング）－上海、B747-400旅客機の運航は、台湾と中国の通航が始まる序曲の開幕でした。",
            "History_04_1":"数え切れないほどの任務を果たし、747-400が勇退へ",
            "History_04_2":"747-400 貨客機の特徴的な機体2層構造は、特殊貨物（大型機材、展示品、希少動物など）の輸送を可能にし、貨物所有者に喜ばれ、旅客機の調整がより柔軟になりましたが、技術の進歩は早く、各種電子製品の小型化で貨物需要も減少、長距離航路の新主力旅客機777-300ERの積載量も多いことから、段階的な「世代交代」が行われ、747-400 貨客機は、2015年1月5日に正式に退役となりました。2017年8月21日に香港-台北便の運航を終えた後は、747-400旅客機の全機が引退となり、747-400貨物機も、2019年には全機が退役する予定です。",
            "History_05_1":"747-400が果たした重要任務：",
            "History_05_2_1":"総統専用機（貨客両用）",
            "History_05_2_2":"<li>1995.04 李登輝総統の中東訪問時の専用機</li><li> 2000.08 陳水扁総統の「民主的外交 交友の旅」の専用機</li><li>2001.05 陳水扁総統の「共存共栄 親睦の旅」の専用機</li><li>2009.06 馬英九総統の「旧誼の旅」の専用機</li>",
            "History_05_2_3":"希少動物専用機（貨客両用）",
            "History_05_2_4":"<li>1999 「コアラ専用機」としてコアラのハーレーとパトリック台湾輸送専用機</li><li>2008 中国の宝、パンダの団団と円円台湾輸送専用機</li><li>2011北海道の保護動物、丹頂鶴の「BIG」と「貴華」の台湾輸送専用機</li>",
            "History_05_2_5":"初就航路線（旅客機）",
            "History_05_2_6_1":"<li>1992.12.12 台北-ロサンゼルス</li><li>1993.06.08 台北-シアトル-ニューヨーク</li><li>1995.12.13 台北-ロサンゼルス-パナマ</li><li>1998.06.11 高雄-ロサンゼルス</li>",
            "History_05_2_6_2":"<li>1999.06.22 台北-バンクーバー</li><li>2003.01.29 台北-マカオ-上海</li><li>2008.12.15 台北-杭州</li>",
            "QA_H1":"Q & A",
            "QA_H2":"エバー航空について、皆様の質問にお答えします。",
            "QA_01_Q":"エバーグリーングループが運営(購入/リース)していた 747-400 機は何機ですか？",
            "QA_01_A":"エバーグリーングループでは合計 7 機の 747-400 旅客機(B-16401、B-16402、B-16403、B-16405、 B-16410、B-16411 および B-16412)を運営し、 B-16403 と B-16405 は、それぞれ 1994 年 9 月と 10 月に米国で 貨客両用機に改装され、B-16401 と B-16402 は、 2004 年 4 月に GECAS に売却後リースバック、 2007 年にはイスラエルの改装工場 IAI にて貨物機に改装されました。B-16402 は、2016 年 11 月にリース期間満了を迎え、B-16401 は2017 年 7 月に期間満了を迎える予定です。 ",
            "QA_02_Q":"エバーグリーングループの 747-400 旅客機の運航拠点はどこでしょうか。また、どの航路が初就航だったのでしょうか。",
            "QA_02_A_1":"運航拠点 /<div class=\"list\"><span>LAX,SEA,EWR,SFO,YVR</span><span>VIE,LGW,LHR,CDG</span><span>BKK,SIN,PEN,SGN,MNL,KUL,JKT,DPS</span><span>CTS,HKD,HND</span><span>KHH,HKG,MFM</span><span>PVG,PEK,HGH,CAN,SZX</span></div>",
            "QA_02_A_2":"初就航 /<div class=\"list\"><span>1992.12.12 TPE-LAX</span><span>1993.06.08 TPE-SEA-EWR</span><span>1995.12.13 TPE-LAX-PTY</span><span>1998.06.11 KHH-LAX</span><span>1999.06.22 TPE-YVR</span><span>2008.12.15 TPE-HGH</span></div>",
            "QA_03_Q":"エバーグリーングループの 747-400 旅客機で最も遠くへ飛ぶのはどのフライトで、どれくらい遠いのでしょうか。",
            "QA_03_A":" 最も遠いフライトは TPE (台北)-LAX(ロサンゼルス)-PTY(パナマ)-LAX(ロサンゼルス)-TPE(台北)です。<br>直通で最も遠いフライトは LAX-TPEで、航行距離は約 6，500 マイルです。",
            "QA_04_Q":"エバーグリーングループの 747-400 旅客機チームの運航期間はどれくらいですか？累計乗客数や累計航行距離は？ 地球何周分ですか？",
            "QA_04_A":"  1992 年の初の 747-400 旅客機から今まで、エバーグリーングループの 747-400 旅客機チームの運航期間はすでに 25 年にも及びます。(累計乗客数と累計航行距離は統計がございません) ",
            "QA_05_Q":" エバーグリーングループが 747-400 旅客機を採用した理由は？1機目の 747 はいつチームに導入されたのですか？正式就航はいつからですか？",
            "QA_05_A":"米国のノースウエスト航空による 1989 年 2 月の初の747-400 旅客機の就航以降、747-400 旅客機はジャンボジェット市場のトップを独占し、その設計、性能または客室の快適さにおいて、どれも右に出る機体はありませんでした。当社では 1992 年 11 月に1機目の 747-400 旅客機を導入し、 1992 年 12 月 12 日には正式に運営開始、初就航は台北-ロサンゼルス航路です。 <br>1992 年導入の ボーイング747-400 ニューモデルには世界初の「第4のクラス」 - デラックスエコノミークラスを創設、エコノミークラス代金に少しプラスするだけでビジネスクラス同様のサービスを受けられます。この革新的なアイデアは、その後多くの同業他社でも導入されました。 <br>2007年には1機目のボーイング747-400 旅客機を改装し、ローレルクラス、エリートクラス、エコノミークラスを設置しました。",
            "QA_06_Q":"当時の 747-400 旅客機に設置されていたシートクラスは？",
            "QA_06_A":"スーパーファーストクラス<br>スーパーデラックスクラス<br>エコノミーデラックスクラス<br>エコノミークラス",
            "QA_07_Q":"改装前後の最大搭乗人数は？",
            "QA_07_A":"前機体は 4 クラスで 368 シートでしたが、 3 クラスへの改装後は 372 シートとなりました。 ",
            "QA_08_Q":"改装後のグレードアップにはどのようなサービスがありますか？新しいサービスはありますか？",
            "QA_08_A":"客室装備がバージョンアップし、スーパーデラックスクラスのリクライニング角度が広く、長旅をより快適に、プライバシー空間をより確実に。全クラスにオンデマンド式のエンターテイメントシステムを搭載し、キッチン設備の増加により、お食事もより楽しみに。トイレ設備も刷新され、より広くなった空間でゆったりとお過ごしいただけます。",
            "QA_09_Q":"エバーグリーングループの、退役後の 747-400 旅客機への対応について。",
            "QA_09_A":"747-400 旅客機の退役後は、各パーツに分解し、販売されます。資源が無駄にならないよう、その価値を最大限に活かします。 ",
            "FB_H1":"特別な思い出",
            "FB_H2":"25年間の思い出に、感謝をこめて"
        }]
    };
    var pic = [
        { "index":  0, "src": "01/01_01.jpg" },
        { "index":  1, "src": "01/01_02.jpg" },
        { "index":  2, "src": "01/01_03.jpg" },
        { "index":  3, "src": "01/01_04.jpg" },
        { "index":  4, "src": "01/01_05.jpg" },
        { "index":  5, "src": "01/01_06.jpg" },
        { "index":  6, "src": "01/01_07.jpg" },
        { "index":  7, "src": "02/02_01.jpg" },
        { "index":  8, "src": "02/02_02.jpg" },
        { "index":  9, "src": "03/03_01.jpg" },
        { "index": 10, "src": "04/04_01.jpg" },
        { "index": 11, "src": "04/04_02.jpg" },
        { "index": 12, "src": "04/04_03.jpg" },
        { "index": 13, "src": "04/04_04.jpg" },
        { "index": 14, "src": "05/05_01.jpg" },
        { "index": 15, "src": "05/05_02.jpg" },
        { "index": 16, "src": "06/06_01.jpg" },
        { "index": 17, "src": "06/06_02.jpg" },
        { "index": 18, "src": "07/07_01.jpg" },
        { "index": 19, "src": "07/07_02.jpg" },
        { "index": 20, "src": "08/08_01.jpg" },
        { "index": 21, "src": "08/08_02.jpg" },
        { "index": 22, "src": "08/08_03.jpg" },
        { "index": 23, "src": "08/08_04.jpg" },
        { "index": 24, "src": "08/08_05.jpg" },
        { "index": 25, "src": "08/08_06.jpg" },
        { "index": 26, "src": "08/08_07.jpg" },
        { "index": 27, "src": "08/08_08.jpg" },
        { "index": 28, "src": "08/08_09.jpg" },
        { "index": 29, "src": "08/08_10.jpg" },
        { "index": 30, "src": "08/08_11.jpg" },
        { "index": 31, "src": "08/08_12.jpg" },
        { "index": 32, "src": "08/08_13.jpg" },
        { "index": 33, "src": "08/08_14.jpg" },
        { "index": 34, "src": "09/09_01.jpg" },
        { "index": 35, "src": "09/09_02.jpg" },
        { "index": 36, "src": "09/09_03.jpg" },
        { "index": 37, "src": "09/09_04.jpg" },
        { "index": 38, "src": "09/09_05.jpg" },
        { "index": 39, "src": "09/09_06.jpg" },
        { "index": 40, "src": "09/09_07.jpg" },
        { "index": 41, "src": "09/09_08.jpg" },
        { "index": 42, "src": "09/09_09.jpg" },
        { "index": 43, "src": "09/09_10.jpg" },
        { "index": 44, "src": "09/09_11.jpg" },
        { "index": 45, "src": "09/09_12.jpg" },
        { "index": 46, "src": "09/09_13.jpg" },
        { "index": 47, "src": "09/09_14.jpg" },
        { "index": 48, "src": "09/09_15.jpg" },
        { "index": 49, "src": "09/09_16.jpg" },
        { "index": 50, "src": "09/09_17.jpg" },
        { "index": 51, "src": "09/09_18.jpg" },
        { "index": 52, "src": "09/09_19.jpg" },
        { "index": 53, "src": "10/10_01.jpg" },
        { "index": 54, "src": "10/10_02.jpg" },
        { "index": 55, "src": "10/10_03.jpg" },
        { "index": 56, "src": "11/11_01.jpg" },
        { "index": 57, "src": "11/11_02.jpg" },
        { "index": 58, "src": "12/12_01.jpg" },
        { "index": 59, "src": "12/12_02.jpg" },
        { "index": 60, "src": "12/12_03.jpg" },
        { "index": 61, "src": "13/13_01.jpg" },
        { "index": 62, "src": "13/13_02.jpg" },
        { "index": 63, "src": "13/13_03.jpg" },
        { "index": 64, "src": "13/13_04.jpg" },
        { "index": 65, "src": "13/13_05.jpg" },
        { "index": 66, "src": "13/13_06.jpg" },
        { "index": 67, "src": "13/13_07.jpg" },
        { "index": 68, "src": "13/13_08.jpg" },
        { "index": 69, "src": "13/13_09.jpg" },
        { "index": 70, "src": "13/13_10.jpg" },
        { "index": 71, "src": "13/13_11.jpg" },
        { "index": 72, "src": "14/14_01.jpg" },
        { "index": 73, "src": "14/14_02.jpg" },
        { "index": 74, "src": "14/14_03.jpg" },
        { "index": 75, "src": "14/14_04.jpg" },
        { "index": 76, "src": "14/14_05.jpg" },
        { "index": 77, "src": "14/14_06.jpg" },
        { "index": 78, "src": "14/14_07.jpg" },
        { "index": 79, "src": "14/14_08.jpg" },
        { "index": 80, "src": "14/14_09.jpg" },
        { "index": 81, "src": "14/14_10.jpg" },
        { "index": 82, "src": "14/14_11.jpg" },
        { "index": 83, "src": "14/14_12.jpg" },
        { "index": 84, "src": "14/14_13.jpg" },
        { "index": 85, "src": "14/14_14.jpg" },
        { "index": 86, "src": "14/14_15.jpg" },
        { "index": 87, "src": "14/14_16.jpg" },
        { "index": 88, "src": "14/14_17.jpg" }
    ];
    var word = [
        { 'index': 0, action: 0, action_end: 6 },
        { 'index': 1, action: 7, action_end: 8 },
        { 'index': 2, action: 9, action_end: 9 },
        { 'index': 3, action: 10, action_end: 13 },
        { 'index': 4, action: 14, action_end: 15 },
        { 'index': 5, action: 16, action_end: 17 },
        { 'index': 6, action: 18, action_end: 19 },
        { 'index': 7, action: 20, action_end: 33 },
        { 'index': 8, action: 34, action_end: 52 },
        { 'index': 9, action: 53, action_end: 55 },
        { 'index': 10, action: 56, action_end: 57 },
        { 'index': 11, action: 58, action_end: 60 },
        { 'index': 12, action: 61, action_end: 71 },
        { 'index': 13, action: 72, action_end: 88 }
    ];
    var gaCrtl = {
        image: false,
        timeline: false,
        history: false,
        QA: false,
        fanpage: false,
    };
    var router = new VueRouter({
        routes: [
            { path: '/zh', name: 'zh'},
            { path: '/en', name: 'en'},
            { path: '/jp', name: 'jp'},
            { path: '/*', redirect: '/zh'}
        ]
    });
    var indexCtrl = new Vue({
        el: '#indexPage',
        router: router,
        data:{
            slickData: pic,
            burger: false,
            albumFG: true,
            albumIN: true,
            wowFG: false,
            singleBox: false,
            singleBoxSrc: 'img/event/event_01.jpg',
            lightbox: true,
            lightWord: '1992-11-02 西雅圖波音公司 747-400 交機儀式暨晚宴',
            aClose: false,
            ieFG: false,
            langTP: 'zh',
            langData: []
        },
        beforeMount: function(){
            var routerTP = this.$route.name;
            this.langTP = this.$route.name;
            this.langData = lang[routerTP][0];
            document.title = this.langData.title;
            
            $.each(lang, function(key, obj){
                $.preload(obj[0].index_base);
            });
        },
        mounted: function(){
            var $this = this;

            if(this.chkIE9() == 9){
                this.ieFG = true;
                location.href = 'index_ie.html';
                return;
            }

            if(this.chkSafari()) $('p, a, span').css('fontWeight', 400);
            this.menu();
            this.initObj();
            this.scroll();
            this.resize();
            this.slideBG();
            
            if(isMobile.phone) $('.fbBox .right iframe').height(200);

            $(window).on('scroll', function(){
                $this.scroll();
            }).on('resize', function(){
                $this.resize();
            }).on('load', function(){
                $this.lightbox = false;
                TweenMax.to($('#splash'), .5, {
                    height: "0%",
                    opacity: 0,
                    display: "none",
                    delay: .5,
                    onComplete: function(){
                        $this.initTitle();
                    }
                });
            });

            gapage('index');
        },
        methods:{
            preventall: function(event){
                event.stopPropagation();
                event.preventDefault();
            },
            menu: function(){
                var $this = this;
                $('.menu .left li, #overlay li:not(.lang), header .logo').on('click', function(e){
                    $this.preventall(e);
                    var dir = $(this).find('a').attr('role');
                    var padding = 0;
                    if(dir){
                        if(dir == 'fb'){
                            var app_id = '123347868297339';
                            var fbBack_url = '?fb_back=1';
                            var url = location.origin + location.pathname;
                            var redirect_uri = location.origin + location.pathname;
                            var share_u;
                            share_u = encodeURIComponent(url + fbBack_url);
                            // location.href = 'https://www.facebook.com/dialog/share?app_id=' + app_id + '&display=popup&href=' + share_u + '&redirect_uri=' + redirect_uri;
                            trackWaitJump('menu_fbshare', 'https://www.facebook.com/dialog/share?app_id=' + app_id + '&display=popup&href=' + share_u + '&redirect_uri=' + redirect_uri);
                            return;
                        }
                        if(dir == 'history') padding = 100;
                        if(dir == 'history' && $(window).width() < 450) padding = 50;
                        if(dir == 'story' && $(window).width() < 450) padding = -100;
                        if($this.burger) $this.burger = false;
                        $this.$nextTick(function(){
                            $('html, body').stop().animate({
                                scrollTop: $('.' + dir).offset().top - $('header').height() / 2 - padding
                            }, 500);
                        });
                    }else{
                        if($this.burger) $this.burger = false;
                        $this.$nextTick(function(){
                            $('html, body').stop().animate({ scrollTop: 0 }, 500);
                        });
                    }
                });
            },
            scroll: function(){
                if(this.burger) return;
                var scrollTop = $(window).scrollTop();
                var base = $('header').height() / 2;
                var width = $(window).width();
                var albumOffset = $('.album').offset().top;
                var tlOffset = $('.history').offset().top;
                var storyOffset = $('.story').offset().top;
                var qaOffset = $('.QA').offset().top;
                var fbboxOffset = $('.fbBox').offset().top;
                var offsetList = [albumOffset, tlOffset, storyOffset, qaOffset, fbboxOffset];
                var gaList = ['image', 'timeline', 'history', 'QA', 'fanpage'];
                var padding = 0;
                var headerH = $('header').height();

                // header
                if(scrollTop > base){
                    $('header').addClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_g.svg');
                }else{
                    $('header').removeClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                }

                if((scrollTop > (albumOffset * 0.6)) && this.albumIN) {
                    this.albumIN = false;
                    this.initAlbum();
                }

                (scrollTop > albumOffset) ? $('.top-slider').css('opacity', 0) : $('.top-slider').css('opacity', 1);

                // gapage
                $.each(offsetList, function(key, obj){
                    var nowSTR = gaList[key];
                    var nowFG = gaCrtl[nowSTR];
                    if(nowSTR == 'image') padding = 50;
                    if(nowSTR == 'timeline') padding = 150;
                    if(nowSTR == 'timeline' && width < 450) padding = 50;
                    if(nowSTR == 'history' && width < 450) padding = -100;
                    if(scrollTop >= (obj - (headerH / 2) - padding) && !nowFG){
                        gaCrtl[nowSTR] = true;
                        gapage(nowSTR);
                    }
                });
            },
            resize: function(){
                var winWidth = $(window).width();
                var imgName = '';
                var fileName = 'png';
                var position = 'center bottom';

                if(winWidth <= 1080){
                    imgName = 'm_';
                    fileName = 'jpg';
                    position = 'left 90%';
                }
                if(winWidth <= 700){
                    imgName = 'm_';
                    fileName = 'jpg';
                    position = 'left -100px';
                }

                $('.inner').css({ width: $(window).innerWidth() });
                $.each($('.cell .inner .slide-img'), function(key, obj){
                    $(obj).attr('style', 'background: url(img/'+imgName+'bg'+(key+1)+'.'+fileName+') '+position+'; background-size: cover;');
                });
            },
            burgerCtrl: function(){
                this.burger = !this.burger;
                $('header').removeClass('scrolled');
                $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                this.$nextTick(function(){
                    if(!this.burger) this.scroll();
                });
            },
            slideBG: function(){
                $('.inner').css({width: $(window).innerWidth()});
                $('.cell').eq(0).addClass('is-next');

                slide_show();
                setInterval(slide_show, 5000);

                function slide_show(){
                    var final = $('.is-next').next('.cell').length; //判斷是否做後一張
                    $('.is-next').addClass('is-active');
                    $('.current').addClass('is-out');
                    setTimeout(function(){
                        if(final == 0){
                            $('.is-next.is-active').addClass('current').removeClass('is-active is-next')
                            $('.cell').eq(0).addClass('is-next');
                        }else{
                            $('.is-next.is-active').addClass('current').removeClass('is-active is-next').next('.cell').addClass('is-next');
                        }
                        $('.current.is-out').removeClass('current is-out');
                    }, 1200);
                }
            },
            initObj: function(){
                var $this = this;

                // WOW
                if($(window).width() > 736){
                    $('.timeline section .event, .timeline section .tldots, .timeline section .pic').addClass('inStage').addClass('fadeInUp');
                    new WOW().init();
                    new WOW({ boxClass: 'inStage', offset: 200 }).init();
                    new WOW({ boxClass: 'timeline section', animateClass: 'long', offset: 200 }).init();
                    this.wowFG = true;
                }else{
                    if(!this.wowFG) $('.timeline section').addClass('long');
                }

                // 相簿slick
                $('.lightbox .slickBox').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    adaptiveHeight: true,
                    dots: false,
                    infinite: false,
                    prevArrow: $('.lightbox_arrow .left'),
                    nextArrow: $('.lightbox_arrow .right'),
                    asNavFor: '.lightbox .slider ul'
                });
                $('.lightbox .slider ul').slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: '.lightbox .slickBox',
                    arrows: false,
                    dots: false,
                    infinite: false,
                    centerMode: false,
                    focusOnSelect: true
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    $('.lightbox .slider ul li').eq(currentSlide).find('a').removeClass('active');
                    $('.lightbox .slider ul li').eq(nextSlide).find('a').addClass('active');
                    $.each(word, function(key, obj){
                        var newIndex = obj.index + 1;
                        if(nextSlide >= obj.action && nextSlide <= obj.action_end){
                            var newWord = 'photo_in_' + ((newIndex < 10) ? '0' + newIndex : newIndex);
                            $this.lightWord = $this.langData[newWord];
                        }
                    });
                });

                // 雲視差
                $('.scrolling_cloud').parallax("50%", 1);

                // QA+號
                $('.QA .content li').on('click', function(e){
                    $this.preventall(e);
                    if($(this).hasClass('active')){
                        $(this).find('.plus-minus-toggle').addClass('collapsed');
                        $(this).removeClass('active');
                        $(this).find('.answer').slideUp();
                    }else{
                        $('.QA .content li .plus-minus-toggle').addClass('collapsed');
                        $('.QA .content li .answer').slideUp();
                        $('.QA .content li').removeClass('active');
                        $(this).find('.plus-minus-toggle').removeClass('collapsed');
                        $(this).addClass('active');
                        $(this).find('.answer').slideDown();
                    }
                });

                // 歷史回顧
                $('.slidebox').slick({
                    dots: true,
                    appendDots: $('.story .slider'),
                    infinite: false,
                    prevArrow: $('.story_arrowbox .left'),
                    nextArrow: $('.story_arrowbox .right'),
                    customPaging : function(slider, i) {
                        return '<a style="cursor: pointer;"></a>';
                    },
                    responsive: [
                        {
                            breakpoint: 736,
                            settings: {
                                adaptiveHeight: true,
                            }
                        }
                    ]
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    $('.indicator').css('margin-left', nextSlide * 25 + 'px');
                });
            },
            initAlbum: function(){
                var leftLine = $('.album .subject .left .line');
                var rightWord = $('.album .subject .right');
                var albumLi = $('.album .albumbox ul li');
                var TL = new TimelineMax({delay: 0});
                var lineTween = new TweenMax(leftLine, .5, {
                    width: '100%',
                    ease: Power0.easeIn
                });
                var wordTween = new TweenMax(rightWord, .4, {
                    opacity: 1,
                    y: -50,
                    ease: Power0.easeIn
                });
                var liTween = TweenMax.staggerTo(albumLi, .2, {scale: 1, delay: 0, ease: Power0.easeOut}, .1);
                TL.add(lineTween);
                TL.add(wordTween);
                TL.add(liTween);
            },
            initTitle: function(){
                var left = $('.tt1, .tt3');
                var right = $('.tt2');
                var line = $('.tt4');
                var plane = $('.tt5');
                var words = $('.index .sub:not(.m_sub)');
                var scroll = $('.index .scroll');
                var m_title = $('.index .base');
                var m_words = $('.index .sub.m_sub');
                var delaytime = 0;
                var sec = 1;

                TweenMax.to(right, .8, {width: "144px", delay: .75 + delaytime});
                TweenMax.staggerTo([left, words], .75, {y: -50, opacity: 1, delay: delaytime, ease: Power1.easeOut}, .33);

                var tl = new TimelineMax({delay: .5 + delaytime});
                var bezTween = new TweenMax(plane, sec, {
                    bezier:{
                        type:"soft", 
                        values:[
                            {x: 179, y: 32, opacity: 1,  scale: 1.2, rotation: 35},
                            {x: 229, y: -15, opacity: 1,  scale: .9, rotation: 0}
                        ],
                        autoRotate: false
                    },
                    ease: Power2.easeIn});
                tl.add(bezTween);
                TweenMax.to(line, sec, {width: '231px', ease: Power2.easeIn, delay: .5 + delaytime});

                TweenMax.staggerTo([m_title, m_words], .75, {y: -50, opacity: 1, delay: delaytime, ease: Power1.easeOut}, .33);

                TweenMax.to(scroll, .8, {opacity: 1, delay: 1 + delaytime});
            },
            openBox: function(e, key){
                this.preventall(e);
                var $this = this;
                var newWord = word[key].words;
                var newKey = word[key].action;
                this.lightWord = newWord;

                $('.lightbox .slickBox').slick('slickGoTo', newKey, true);
                $('.lightbox .slider ul').slick('slickGoTo', newKey, true);

                this.lightbox = true;
                this.$nextTick(function(){
                    $('.lightbox .slickBox').slick('setPosition');
                    setTimeout(function(){ $this.aClose = true; }, 500);
                });
            },
            openSingle: function(e){
                this.preventall(e);
                this.singleBoxSrc = e.target.getAttribute('src');
                this.singleBox = true;
            },
            changeLang: function(e, tp){
                this.preventall(e);
                this.$router.replace(tp);
                this.$nextTick(function(){
                    if(this.burger) this.burger = false;
                });
            },
            chkSafari: function(){
                if(!isMobile.phone){
                    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
                    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
                    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
                    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
                    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
                    if (is_chrome && is_safari) is_safari = false;
                    return is_safari;
                }
            },
            chkIE9: function(){
                var userAgent = navigator.userAgent;
                var fIEVersion = parseFloat(RegExp["$1"]); 

                if(userAgent.indexOf('MSIE 6.0')!=-1){
                    return "IE6";
                }else if(fIEVersion == 7){
                    return "IE7";
                }else if(fIEVersion == 8){
                    return "IE8";
                }else if(fIEVersion == 9){
                    return "IE9";
                }else if(fIEVersion == 10){
                    return "IE10";
                }else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
                    return "IE11";
                }else{
                    return "0"
                }
            }
        },
        watch:{
            $route: function(){
                this.langTP = this.$route.name;
                this.langData = lang[this.langTP][0];
                document.title = this.langData.title;
            }
        }
    });
})();
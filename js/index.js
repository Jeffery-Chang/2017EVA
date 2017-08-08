(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js		= d.createElement(s); 
    js.id	= id;
    js.src	= "//connect.facebook.net/zh_TW/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '355985614832912',
            xfbml      : true,
            version    : 'v2.10'
        });
        // https://747.evaair.com 正式站網址
        var fbUrl = 'https://technic.webgene.com.tw/project/2017EVA/';
        $('.fbBox .right').append('<fb:comments href="'+fbUrl+'" num_posts="5" width="100%"></fb:comments>');
        FB.XFBML.parse($('.fbBox .right')[0]);
    };
}(document, 'script', 'facebook-jssdk'));

(function(){
    var lang = {
        "zh":[{  
            "menu_01":"影像紀實",
            "menu_02":"747 - 400 大事紀",
            "menu_03":"歷史回顧",
            "menu_04":"QA 小教室",
            "menu_05":"專屬回憶",
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
            "Timeline_H1":"747-400大事記",
            "Timeline_H2":"飛過 27 個年頭，寫下精采翱翔傳記",
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
            "Timeline_15":"<p>2007.10.04</p><p>B747-400 頭等艙吧台換新裝</p>",
            "Timeline_16":"<p>2008.03.14</p><p>B747-400 客機艙換新裝</p>",
            "Timeline_17":"<p>2008.12.22</p><p>以 B747-400 客貨兩用機擔綱<span>貓熊包機任務自四川載運</span><span>大熊貓「團團圓圓」來台</span><span>掀起台北市立動物園的參觀熱潮</span></p>",
            "Timeline_18":"<p>2013.09.13 </p><p>B747-400 Combi<span>客貨兩用機(編號 B-16403)除役</span></p>",
            "Timeline_19":" <p>2015.01.05 </p><p>最後一架波音 747-400 客貨機<span>(編號 B-16409) 執行完最後一趟</span><span>BR868 香港－桃園飛行後正式功成身退</span><span>也宣告 747-400 客貨機正式走入歷史</span></p>",
            "Timeline_20":" <p>2017.08.24</p><p>BR892 從香港國際機場<span>返回桃園國際機場</span><span>完成最後載客飛行任務</span></p>",
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
            "History_05_1":"長榮航空引進，勝任飛航主力",
            "History_05_2":"長榮航空於 1989 年由長榮集團總裁張榮發成立，同年 10 月 6 日向美國波音公司及麥道道格拉斯簽訂購買 26 架飛機合約，總金額達 36 億美元。共計引進 7 架 747-400 全客機、10 架 747-400 Combi (客貨機)、3 架 747-400 貨機。早年該機型不論是飛機設計、性能或客艙舒適度均無其他機型能出其右，為長榮航空草創時期長程航線的主力機隊。",
            "History_06_1":"747-400擔綱過的重要任務",
            "History_06_2_1":"元首專機（客貨兩用）",
            "History_06_2_2":"<li>1995.04 擔任李登輝總統出訪中東專機</li><li> 2000.08 擔任陳水扁總統「民主外交 友誼之旅」專機</li><li>2001.05 擔任陳水扁總統「合作共榮 睦誼之旅」專機</li><li>2009.06 擔任馬英九總統「久誼之旅」專機</li>",
            "History_06_2_3":"保育動物專機（客貨兩用）",
            "History_06_2_4":"<li>1999 擔任「無尾熊專機」無尾熊哈雷(Harley)及派翠克(Patrick)來台專機</li><li>2008 擔任載運大陸國寶大貓熊團團、圓圓來台專機</li><li>2011擔任北海道保育動物丹頂鶴「BIG」及「貴華」來台專機</li>",
            "History_06_2_5":"首航班任務（客機）",
            "History_06_2_6_1":"<li>1992.12.12 台北-洛杉磯</li><li>1993.06.08 台北-西雅圖-紐約</li><li>1995.12.13 台北-洛杉磯-巴拿馬</li><li>1998.06.11 高雄-洛杉磯</li>",
            "History_06_2_6_2":"<li>1999.06.22 台北-溫哥華</li><li>2003.01.29 台北-澳門-上海</li><li>2008.12.15 台北-杭州</li>",
            "QA_H1":"QA小教室",
            "QA_H2":"解開疑惑，挖掘更多小祕密",
            "QA_01_Q":"請問 EVA 總計營運過幾架(買/租) 747-400 客機？",
            "QA_01_A":"EVA 共營運過 7 架 747-400 全客機(B-16401、B-16402、B-16403、B-16405、 B-16410、B-16411 及 B-16412)，其中 B-16403 及 B-16405 於 1994 年 9 月及 10 月分別飛美國改裝為 COMBI (客貨兩用機)；B-16401 及 B-16402 於 2004 年 4 月售與 GECAS 後租回營運，並分別於 2007 年交由以色改裝廠 IAI 改裝為貨     機。B-16402 於 2016 年 11 月租期屆滿退租，B-16401 則預計於 2017 年 7 月退租。 ",
            "QA_02_Q":"請問 EVA 的 747-400 客機飛過哪些航點，其中，在哪些航線擔任首航任務？",
            "QA_02_A_1":"飛過的航點 /<div class='list'><span>LAX,SEA,EWR,SFO,YVR</span><span>VIE,LGW,LHR,CDG</span><span>BKK,SIN,PEN,SGN,MNL,KUL,JKT,DPS</span><span>CTS,HKD,HND</span><span>KHH,HKG,MFM</span><span>PVG,PEK,HGH,CAN,SXZ</span></div>",
            "QA_02_A_2":"首航任務 /<div class='list'><span>1992.12.12 TPE-LAX</span><span>1993.06.08 TPE-SEA-EWR</span><span>1995.12.13 TPE-LAX-PTY</span><span>1998.06.11 KHH-LAX</span><span>1999.06.22 TPE-YVR</span><span>2008.12.15 TPE-HGH</span></div>",
            "QA_03_Q":"請問 EVA 的 747-400 客機最遠的航線是哪一條，航程多遠？",
            "QA_03_A":" 最遠航線 TPE (台北)-LAX(洛杉磯)-PTY(巴拿馬)-LAX(洛杉磯)-TPE(台北)。<br>直飛最遠航段 LAX-TPE，航程約 6，500 海里。",
            "QA_04_Q":"請問 EVA 的 747-400 客機機隊服役期間多久？累計載客多少人？累計航程多遠？ 約可繞地球幾週？",
            "QA_04_A":" 自 1992 年接收首架 747-400 客機迄今，EVA 之 747-400 客機機隊已服役長達 25    年。(累計載客人數及航程實無法統計) ",
            "QA_05_Q":"請問 EVA 採用 747-400 客機的考量為何？第一架 747 何時導入機隊？何時正式投入服務？",
            "QA_05_A":"自美國西北航空於 1989 年 2 月開始營運第 1 架 747-400 全客機，747-400 客機 一直獨佔寬體客機市場之鰲頭，該機型不論是飛機設計、性能或客艙舒適度均 無其他機型能出其右。本公司於 1992 年 11 月導入第一架 747-400 全客機，並 於 1992 年 12 月 12 日正式投入營運，首航台北-洛杉磯航線。  <br>1992 導入的 Boeing747-400 新機全球首創第四種艙等 - 經濟豪華艙，旅客只須支付比經濟艙多一點的票價，即可享受如同商務艙的服務。這項創新作法隨後引領許多航空業者跟進。<br>2007 第一架 Boeing747-400 客機改艙，配備桂冠艙、菁英艙、經濟艙。",
            "QA_06_Q":"請問原本的 747-400 客機配備哪些艙等？",
            "QA_06_A":"超級頭等艙(SUPER FIRST CLASS)<br>超級商務艙(SUPER DELUXE CLASS)<br>菁英艙(ECONOMY DELUXE CLASS)<br>經濟艙(ECONOMY CLASS)",
            "QA_07_Q":"改艙前後的載客量各多少？",
            "QA_07_A":"原 4 艙等配置 368 座位，改成 3 艙等後載客量為 372 座。 ",
            "QA_08_Q":"改艙之後升級哪些服務？有哪些創新作法？",
            "QA_08_A":" 將客艙硬體設備提升至 777 機隊的標準，增加超級商務艙後躺角度，乘客於長 途飛行時更加舒適，且增加個人隱私性。改善娛樂系統，全機各艙等均為個人 隨選影音設備。增加廚房設備，提供乘客更佳的餐飲。更新廁所設備，提供更 寬敞的空間供乘客使用。",
            "QA_09_Q":"EVA 會如何處理退役後的 747-400 客機？",
            "QA_09_A":"747-400 客機退役後將會進行拆解零件出售，發揮物盡其用之最大剩餘價值。 "
        }],
        "en":[{  
            "menu_01":"VIDEO",
            "menu_02":"747 - 400 EVENT",
            "menu_03":"HISTORY",
            "menu_04":"Q & A",
            "menu_05":"MEMORY"
        }],
        "jp":[{  
            "menu_01":"ビデオ",
            "menu_02":"747 - 400 イベントカレンダー",
            "menu_03":"ヒストリ",
            "menu_04":"質疑応答",
            "menu_05":"メモリ"
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
        { "index": 60, "src": "12/12_03.jpg" }
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
    ];
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
            ieFG: false,
            langTP: 'zh',
            langData: []
        },
        beforeMount: function(){
            var routerTP = this.$route.name;
            this.langTP = this.$route.name;
            this.langData = lang[routerTP][0];
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
        },
        methods:{
            preventall: function(event){
                event.stopPropagation();
                event.preventDefault();
            },
            menu: function(){
                var $this = this;
                $('.menu .left li, #overlay li, header .logo').on('click', function(e){
                    $this.preventall(e);
                    var dir = $(this).find('a').attr('role');
                    var padding = 0;
                    if(dir){
                        if(dir == 'fb'){
                            var app_id = '355985614832912';
                            var fbBack_url = '?fb_back=1';
                            var url = location.href;
                            var redirect_uri = location.href;
                            var share_u;
                            share_u = encodeURIComponent(url + fbBack_url);
                            location.href = 'https://www.facebook.com/dialog/share?app_id=' + app_id + '&display=popup&href=' + share_u + '&redirect_uri=' + redirect_uri;
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
                var fbboxOffset = $('.fbBox').offset().top;

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
                var newWord = word[key].words;
                var newKey = word[key].action;
                this.lightWord = newWord;

                $('.lightbox .slickBox').slick('slickGoTo', newKey, true);
                $('.lightbox .slider ul').slick('slickGoTo', newKey, true);

                this.lightbox = true;
                this.$nextTick(function(){
                    $('.lightbox .slickBox').slick('setPosition');
                });
            },
            openSingle: function(e){
                this.preventall(e);
                this.singleBoxSrc = e.target.getAttribute('src');
                this.singleBox = true;
            },
            changeLang: function(e, tp){
                this.preventall(e);
                this.langTP = tp;
                this.langData = lang[tp][0];
                this.$router.replace(tp);
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
        }
    });
})();
//网易mc名称生成器 在线版本 byapi access by wangyupu
var toolinfo = {"tool_namespace":"nngv2_api","tool_name_en":"Netease MC Nickname Generator","tool_name_zh_cn":"网易MC名称生成器","tool_infomation_en":"The nickname genator like netease mc. all word is from netease mc mobile application.","tool_infomation_zh_cn":"生成格式类似网易mc的昵称，全部字词来自mc移动版"};
console.log("byapi_access:%cWANGYUPU TOOLS%c\nNetease MC Nickname genator %cONLINE%c BYAPI.ver.","font-family: Ubuntu,system-ui,-apple-system,sans-serif;font-weight:bold;font-size:500%;color:#00ffff","font-family: Ubuntu,system-ui,-apple-system,sans-serif;font-size:200%;color:#ff0000","font-family: Ubuntu,system-ui,-apple-system,sans-serif;font-size:200%;color:#00ff00","font-family: Ubuntu,system-ui,-apple-system,sans-serif;color:#30f1e1");
console.group("byapi_access:wangyupu tools · 工具  NNGV2 详细信息");
console.log("byapi_access:wangyupu tools · 工具  NNGV2 详细信息");
console.table(toolinfo);
console.groupEnd();
console.time("byapi_access:load");
console.log("byapi_access:start loading functions.");
console.time("byapi_access:loadfunc");
var loadsuccess = false;
function db0(){
    return "奔跑.爬行.蹦极.游行.吃土.剁手.飞行.滑翔.背书.学习.思考.度假.啃书.吃鲸.洗脸.刷牙.登基.诞生.挖矿.下矿.游蝶泳.蹦迪.吃糖.跳舞.吸猫.遛狗.遛娃.烧烤.拔线.狗吠.上学.飞升.探险.观光.抽卡.划水.潜水.赏花.赏月.品茶.化妆.煮饭.做饭.觉醒.长跑.吸气.呼气.练功.熬夜.听歌.开车.上车.下车.飘着.开学.放假.画画.弹琴.砍树.挖坑.寻宝.追寻.下坠.浮沉.劈叉.踏雪.睡觉.发梦.做梦.冲浪.跑酷.哭泣.咆哮.穿越.潜行.复习.追番.搁浅.吟诗.葬花.大笑.苦笑.尬笑.羽化.消亡.爆破.求佛.鸟瞰.发芽.开花.滑行.练发声.扮鬼.出击.闯关.解密.交易.听写.摘星.落泪.祈祷.冥想.吹牛.研究.购物.补牙.拔牙.舞剑.灌篮.预习.考试.卖萌.扮猪.吃狗粮.坐飞机.开赛车.吃橙子.吃苹果.吃菠萝.吃榴莲.吃香蕉.吃枇杷.喝圣水.跳热舞.吹喇叭.开飞机.水上漂.跳芭蕾.穿西装.穿裙子.看日出.建房子.说相声.吹短笛.练吉他.吹长笛.泡温泉.深呼吸.肝游戏.看涨潮.刷副本.喝阔咯.看日落.等吃饭.做作业.看直播.说谢谢.打豆豆.看视频.看大海.做自己.讲笑话.背古诗.写作文.写散文.斗蛐蛐.捉蛐蛐.捉昆虫.搞科研.种太阳.喝可乐.玩魔方.解方程.拿高分.影分身.捏泥人.做好事.喝咖啡.开班会.发通报.发牢骚.使性子.学音乐.学美术.吆喝.吃辣条.笑嘻嘻.扮可爱.吃钙片.吃麦片.吃披萨.上网.进观园.搬音响.解等式.玩卡牌.蹦跳跳.开汽车.作演讲.练书法.画漫画.开火车.做手工.读英语.吃牛肉.喝鸡汤.过马路.数绵羊.打电话.发短信.听广播.看漫画.变魔术.猜字谜.听音乐.学雷锋.切蔬菜.想问题.吃零食.想休息.拍气球.买玩具.开轿车.捏橘子.放鞭炮.吃水果.削水果.削苹果.削菠萝.削梨子.倒垃圾.改错误.吃醋.喝醋.上岸.吃面条.学数学.学语文.学地理.学英语.学历史.学生物.学物理.做装备.修钟表.修水管.修汽车.修桌子.修手机.修冰箱.吹口琴.弹琵琶.弹古筝.弹钢琴.吹口哨.弹吉他.吹笛子.弹三弦.敲排鼓.敲木鱼.敲渔鼓.撞铁钟.敲锣.拉二胡.拉马头琴.唱歌.唱山歌.唱高音.唱低音.听鸟叫.听摇滚.听爵士.听民谣.推箱子.看动漫.玩电脑.玩手机.逛街.拧瓶盖.打扫.擦椅子.削铅笔.背课文.背英语.念单词.念课文.打副本.放技能.躲技能.躲雨.跺脚.提水桶.涨工资.吃稀饭.喝冷饮.打篮球.踢足球.瞪眼睛.去砍树.闻花香.修管道.修电脑.擦桌子.咬铅笔.玩跳棋.看电视.看足球.看电影.看攻略.下象棋.下围棋.下棋.悔棋.上楼梯.坐电梯.下楼梯.看海报.喝稀饭.喝饮料.喝豆浆.喝果汁.喝豆奶.扔东西.扔垃圾.扔废纸.扔飞镖.丢飞机.开会.散步.游泳.健身.锻炼.迫降.变身.";
};
function db1(){
    return "强硬的.强悍的.强劲的.坚决的.坚信的.坚定的.坚韧的.坚实的.坚贞的.勇敢的.勇猛的.刚毅的.决断的.果敢的.果决的.坚强的.坚忍的.决然的.毅然的.断然的.泼辣的.断腕的.发誓的.干脆的.爽快的.果断的.真诚的.热诚的.至诚的.赤诚的.诚挚的.恳切的.纯真的.率直的.坦率的.笃实的.热忱的.热心的.好客的.客气的.殷勤的.和气的.和蔼的.和善的.亲切的.过谦的.谦卑的.谦恭的.谦和的.谦让的.谦虚的.谦逊的.虚心的.外向的.开朗的.大方的.主动的.俏皮的.敏捷的.乐观的.调皮的.爽脆的.爽朗的.豪爽的.正直的.直率的.直爽的.直言的.爽直的.刚直的.憨直的.耿直的.公正的.公道的.公平的.公允的.正派的.开阔的.豁达的.明朗的.率真的.怒吼的.恐惧的.胆怯的.畏缩的.发慌的.心慌的.恐慌的.激怒的.恼火的.欢乐的.快慰的.开心的.高兴的.愉悦的.微笑的.舒畅的.不适的.欢闹的.欢心的.欢欣的.欢悦的.宽慰的.欢舒的.狂欢的.震怒的.气愤的.担忧的.发愁的.犯愁的.忧伤的.忧愁的.忧心的.愁闷的.悲痛的.悲惨的.悲凉的.哀伤的.哀怨的.伤感的.瘦削的.憔悴的.快乐的.喜悦的.愉快的.畅快的.欢畅的.欢喜的.欢腾的.欢快的.欣喜的.今天的.昨天的.明天的.后天的.上午的.下午的.过去的.未来的.去年的.前年的.散步的.漫步的.踏步的.信步的.转悠的.闲逛的.徜徉的.踉跄的.蹒跚的.小跑的.慢跑的.飞跑的.飞奔的.飞翔的.啜泣的.抽泣的.呜咽的.哀号的.号哭的.痛哭的.大笑的.欢笑的.嬉笑的.狂笑的.嗤笑的.憨笑的.傻笑的.哄笑的.苦笑的.阴笑的.狞笑的.奸笑的.嘲笑的.冷笑的.哈腰的.猫腰的.挺身的.挺胸的.俯身的.躬身的.仰卧的.蜷曲的.倒立的.转体的.屈体的.屈身的.欠身的.纵身的.蹲身的.鞠躬的.曲背的.匍匐的.笔挺的.腾跃的.直立的.翻腾的.前倾的.摇摆的.翻跃的.扭动的.扭转的.旋转的.好吃的.好看的.好玩的.清白的.凛然的.无私的.刚正的.负重的.忠心的.忠贞的.谨慎的.廉洁的.大度的.坦白的.勤奋的.刻苦的.认真的.专注的.踏实的.勤恳的.好学的.高尚的.杰出的.超伦的.自爱的.自尊的.自强的.宽容的.宽宏的.律己的.朴素的.憨厚的.诚实的.忠诚的.诚恳的.天真的.幼稚的.活泼的.聪明的.圆滑的.狡猾的.虚伪的.自私的.任性的.骄傲的.贪婪的.愚蠢的.奸诈的.高傲的.害羞的.内向的.孤僻的.可爱的.招烦的.阴险的.双重的.刻薄的.宽厚的.仁慈的.仁厚的.尖酸的.阴郁的.肤浅的.浅薄的.胆小的.乐天的.达观的.成熟的.稳重的.淘气的.温柔的.体贴的.强硬之.强悍之.强劲之.坚决之.坚信之.坚定之.坚韧之.坚实之.坚贞之.勇敢之.勇猛之.刚毅之.决断之.果敢之.果决之.坚强之.坚忍之.决然之.毅然之.断然之.泼辣之.断腕之.发誓之.干脆之.爽快之.果断之.真诚之.热诚之.至诚之.赤诚之.诚挚之.恳切之.纯真之.率直之.坦率之.笃实之.热忱之.热心之.好客之.客气之.殷勤之.和气之.和蔼之.和善之.亲切之.过谦之.谦卑之.谦恭之.谦和之.谦让之.谦虚之.谦逊之.虚心之.外向之.开朗之.大方之.主动之.俏皮之.敏捷之.乐观之.调皮之.爽脆之.爽朗之.豪爽之.正直之.直率之.直爽之.直言之.爽直之.刚直之.憨直之.耿直之.公正之.公道之.公平之.公允之.正派之.简捷之.开阔之.豁达之.明朗之.率真之.怒吼之.恐惧之.胆怯之.畏缩之.发慌之.心慌之.恐慌之.激怒之.恼火之.欢乐之.快慰之.开心之.高兴之.愉悦之.微笑之.舒畅之.笑噱之.欢闹之.欢心之.欢欣之.欢悦之.宽慰之.欢舒之.狂欢之.震怒之.气愤之.担忧之.发愁之.犯愁之.忧伤之.忧愁之.忧心之.愁闷之.悲痛之.悲惨之.悲凉之.哀伤之.哀怨之.伤感之.瘦削之.憔悴之.快乐之.喜悦之.愉快之.畅快之.欢畅之.欢喜之.欢腾之.欢快之.欣喜之.今天之.昨天之.明天之.后天之.上午之.下午之.过去之.未来之.去年之.前年之.散步之.漫步之.踏步之.信步之.转悠之.闲逛之.徜徉之.踉跄之.蹒跚之.小跑之.慢跑之.飞跑之.飞奔之.飞翔之.啜泣之.抽泣之.呜咽之.哀号之.号哭之.痛哭之.大笑之.欢笑之.嬉笑之.狂笑之.嗤笑之.憨笑之.傻笑之.哄笑之.苦笑之.阴笑之.狞笑之.奸笑之.嘲笑之.冷笑之.哈腰之.猫腰之.挺身之.挺胸之.俯身之.躬身之.仰卧之.蜷曲之.倒立之.转体之.屈体之.屈身之.欠身之.纵身之.蹲身之.鞠躬之.曲背之.匍匐之.笔挺之.腾跃之.直立之.翻腾之.前倾之.摇摆之.翻跃之.扭动之.扭转之.旋转之.好吃之.好看之.好玩之.清白之.凛然之.无私之.刚正之.负重之.忠心之.忠贞之.谨慎之.廉洁之.大度之.坦白之.勤奋之.刻苦之.认真之.专注之.踏实之.勤恳之.好学之.高尚之.杰出之.超伦之.自爱之.自尊之.自强之.宽容之.宽宏之.律己之.朴素之.憨厚之.诚实之.忠诚之.诚恳之.天真之.幼稚之.活泼之.聪明之.圆滑之.狡猾之.虚伪之.自私之.任性之.骄傲之.贪婪之.愚蠢之.奸诈之.高傲之.害羞之.内向之.孤僻之.可爱之.招烦之.阴险之.双重之.刻薄之.宽厚之.仁慈之.仁厚之.尖酸之.阴郁之.肤浅之.浅薄之.胆小之.乐天之.达观之.成熟之.稳重之.淘气之.温柔之.体贴之.苹果味.香蕉味.橘子味.桃子味.荔枝味.龙眼味.桔子味.李子味.葡萄味.青梅味.椰子味.石榴味.草莓味.栗子味.梨子味.樱桃味.苹果味.木瓜味.芒果味.菠萝味.柠檬味.柿子味.柚子味.西瓜味.南瓜味.甘蔗味.小麦味.蜂蜜味.白菜味.黄瓜味.豌豆味.苦瓜味.菠菜味.冬瓜味.茄子味.竹笋味.蚕豆味.萝卜味.辣椒味.鸡肉味.牛肉味.烤肉味.炸鸡味.番茄味.芝士味.榴莲味.山楂味.水果味.陈皮味.花椒味.莲雾味.杨梅味.泥土味.枇杷味.杨桃味.板栗味.瓜子味.桑葚味.猪蹄味.香瓜味.怪味的.塑料味.简单的.枯燥的.仙气的.酸臭味.蜜柑味.火锅味.泡菜味.抹茶味.蓝莓味.无味.甜味.苦味.酸甜味.";
};
function db2(){
    return "马行空.马春花.徐铮.商宝震.何思豪.阎基.田归农.苗人凤.南仁通.补锅匠.脚夫.车夫.蒋调侯.店伴.钟兆文.钟兆英.钟兆能.南兰.苗若兰.商老太.平四.胡斐.张总管.王剑英.王剑杰.陈禹.古若般.殷仲翔.福康安.赵半山.孙刚峰.吕小妹.钟四嫂.钟小二.钟阿四.胖商人.瘦商人.凤南天.凤七.俞朝奉.蛇皮张.邝宝官.凤一鸣.大汉.孙伏虎.尉迟连.杨宾.中年武师.灵素.袁紫衣.刘鹤真.崔百胜.曹猛.蓝秦.王仲萍.张飞雄.慕容景岳.姜铁山.薛鹊.王铁匠.姜小铁.田青文.张管家.聂钺.上官.褚轰.汪铁鹗.周铁鹤.曾铁鸥.秦耐之.姬晓峰.张九.任通武.相国夫人.蔡威.汤沛.无青子.海兰弼.大智禅师.欧阳公政.西灵道人.文醉翁.周隆.郭玉堂.齐伯涛.陈高波.安提督.宗雄.桑飞虹.倪不大.倪不小.常赫志.常伯志.上官铁生.哈赤大师.心砚.石双英.刘之余.童怀道.李廷豹.石万嗔.木文察.陈家洛.无尘道长.德布.李沅芷.余鱼同.司徒雷.谢不当.黄希节.刀白凤.丁春秋.马夫人.马五德.小翠.于光豪.巴天石.不平道人.邓百川.风波恶.甘宝宝.公冶乾.木婉清.少林老僧.太皇太后.天狼子.天山童姥.王语嫣.乌老大.无崖子.云岛主.云中鹤.止清.白世镜.包不同.本参.本观.本相.本因.出尘子.冯阿三.兰剑.古笃诚.过彦之.平婆婆.石清露.石嫂.司空玄.司马林.玄慈.玄寂.玄苦.玄难.玄生.玄痛.叶二娘.竹剑.左子穆.华赫艮.乔峰.李春来.李傀儡.李秋水.刘竹庄.朴者和尚.祁六三.全冠清.阮星竹.西夏宫女.许卓诚.朱丹臣.努儿海.阿碧.阿洪.阿胜.阿朱.阿紫.波罗星.陈孤雁.鸠摩智.来福儿.孟师叔.宋长老.苏星河.苏辙.完颜阿古打.耶律洪基.耶律莫哥.耶律涅鲁古.耶律重元.吴长风.吴光胜.吴领军.辛双清.严妈妈.余婆婆.岳老三.张全祥.单伯山.单季山.单叔山.单小山.单正.段延庆.段誉.段正淳.段正明.范禹.范百龄.范骅.苟读.和里布.何望海.易大彪.郁光标.卓不凡.宗赞王子.哈大霸.姜师叔.枯荣长老.梦姑.姚伯当.神山上人.神音.狮鼻子.室里.项长老.幽草.赵钱孙.赵洵.哲罗星.钟灵.钟万仇.高升泰.龚光杰.贾老者.康广陵.秦红棉.虚竹.容子矩.桑土公.唐光雄.奚长老.徐长老.诸保昆.崔百泉.崔绿华.符敏仪.黄眉和尚.菊剑.聋哑婆婆.梅剑.萧远山.游骥.游驹.游坦之.程青霜.傅思归.葛光佩.缘根.智光大师.鲍千灵.褚万里.瑞婆婆.端木元.黎夫人.薛慕华.慕容博.慕容复.谭公.谭婆.谭青.摘星子.慧方.慧观.慧净.慧真.穆贵妃.赫连铁树.一灯大师.马青雄.马钰.小沙弥.木华黎.丘处机.沈青刚.书记.书生.天竺僧人.王处一.王罕.尹志平.包惜弱.冯衡.术赤.农夫.孙不二.札木合.华筝.李萍.刘玄处.刘瑛姑.吕文德.乔寨主.曲三.曲傻姑.全金发.汤祖德.朱聪.陈玄风.赤老温.瘦丐.陆乘风.陆冠英.沙通天.吴青烈.杨康.杨铁心.余兆兴.张阿生.张十五.忽都虎.欧阳峰.欧阳克.梅超风.铁木真.拖雷.者勒米.段天德.枯木.周伯通.郭靖.郭啸天.郝大通.洪七公.侯通海.姜文.柯镇恶.南希仁.胖妇人.胖丐.胖子.哑梢公.都史.钱青健.桑昆.盖运聪.黄蓉.黄药师.梁长老.梁子翁.渔人.博尔忽.博尔术.程瑶迦.韩宝驹.韩小莹.焦木和尚.鲁有脚.穆念慈.彭长老.彭连虎.童子.窝阔台.简长老.简管家.裘千仞.裘千丈.察合台.酸儒文人.谭处端.黎生.樵子.灵智上人.完颜洪烈.完颜洪熙.林黛玉.薛宝钗.贾元春.贾迎春.贾探春.贾惜春.李纨.妙玉.史湘云.王熙凤.贾巧姐.晴雯.麝月.袭人.鸳鸯.雪雁.紫鹃.碧痕.平儿.香菱.金钏.司棋.抱琴.焦大.王善保.周瑞.林之孝.乌进孝.包勇.吴贵.吴新登.邓好时.王柱.余信.昭儿.兴儿.隆儿.坠儿.喜儿.寿儿.丰儿.住儿.小舍儿.李十儿.贾敬.贾赦.贾政.贾宝玉.贾琏.贾珍.贾环.贾蓉.贾兰.贾芸.贾蔷.琪官.芳官.藕官.蕊官.药官.玉官.宝官.龄官.茄官.艾官.豆官.智能.智通.智善.圆信.大色空.净虚.彩儿.彩凤.彩霞.彩鸾.彩明.元春.宝玉.甄宝玉.薛宝琴.薛蝌.薛宝.王子腾.尤老娘.尤氏.尤二姐.贾芹贾珍.贾瑞.贾敏.贾代化.贾代修.贾代善.司棋詹光.单聘仁.魏征.李彪.高才.唐太宗.徐世勣.李建成.玉华王.刘伯钦.高香兰.玉帝.敖广.辛环.张班.龙婆.雷公.龟将.十都.西王母.许旌阳.泰山王.崔石卿.姚太尉.井木犴.昂日鸡.参水猿.药叉将.弥勒佛.赤髯龙.牛魔王.熊山君.黄风怪.云里雾.假悟空.拂云叟.灵明石猴.奔波儿灞.女童腊梅.黄毛老象.高天上圣.杨戬二郎.东方曼倩.持国天王.值时功曹.北方辰星.南斗星君.银头揭谛.甲子神将.直健将军.黄衣仙女.释迦牟尼.泼法金刚.降龙罗汉.清净喜佛.精进善佛.善游步佛.广主严佛.常光幢佛.文珠菩萨.巡海夜叉.直跳虾婆.水猿大圣.十殿冥王.七衣仙女.四大金刚.陈萼.法明.李四.李世民.徐茂公.李元吉.寇大宽.陈老者.高玉兰.王母.敖钦.陶荣.鲁班.龙女.云童.蛇将.张蕃.李长庚.张道陵.都市王.王文卿.李太尉.牛金牛.虚日鼠.轸水蚓.鱼肚将.宝光佛.鲇外郎.鲥军师.徒劳龙.蛟魔王.熊罴精.雾里云.假唐僧.赛太岁.赤尻马猴.灞波儿奔.黄眉老佛.寿星白鹿.大慈仁者.佑圣真君.姮娥仙子.增长天王.东方岁星.水德真君.北斗星君.丁卯神将.甲戌神将.南斗六司.绿衣仙女.菩提祖师.胜至金刚.迦叶尊者.毗卢尸佛.宝月光佛.旃檀光佛.金华光佛.观世灯佛.普贤菩萨.泾河龙王.善财龙女.闪电娘子.五炁真君.北斗七元.十八罗汉.光蕊.张稍.红三.殷开山.许敬宗.高士廉.陈萼母.眼看喜.高翠兰.金母.敖顺.庞洪.左辅.鼍将.电母.狮奴.邓化.王灵官.计都星.卞城王.展子江.殷灵官.鬼金羊.房日兔.尾火虎.黄石公.才光佛.恶乌龟.朱太尉.稳兽龙.鹏魔王.特处士.白骨精.急如火.假八戒.金毛犼.通臂猿猴.万圣公主.黄眉童儿.白面狐狸.太上老君.翊圣真君.荡魔天尊.广目天王.木德真君.中央镇星.崇恩圣帝.丁丑神将.甲申神将.红衣仙女.观音菩萨.大力金刚.伏虎罗汉.宝幢王佛.现无愚佛.摩尼幢佛.才光明佛.法胜王佛.金衣力士.推云童子.四海龙王.五斗星君.瀛洲九老.辟暑大王.王珪.李定.陈澄.殷温娇.马三宝.虞世南.王左衙.耳听怒.王老者.李靖.敖闰.刘后.右弼.判官.山神.三清.寇铭.镇元子.秦广王.转轮王.扈文长.朱灵官.娄金狗.毕月乌.室火猪.日游神.千里眼.鼋枢密.井龙王.敬仲龙.狮驼王.野牛精.黄袍怪.快如风.假沙僧.蜘蛛精.万岁狐王.九头驸马.红鳞大蟒.地涌夫人.太白金星.金顶大仙.东海龙王.多闻天王.南方荧惑.土德真君.南极观音.丁亥神将.甲午神将.青衣仙女.纠察灵官.永住金刚.弥勒尊者.弥勒尊佛.婆留那佛.慧炬照佛.智慧胜佛.须弥光佛.锄树力士.捧珠龙女.布雾郎君.四大天师.五方五老.十二元辰.辟尘大王.秦琼.相良.陈清.满堂娇.段志贤.张道源.李右衙.鼻嗅爱.百花娇.哪吒.观音.苟章.清风.金童.水神.四帝.张旺.东方朔.楚江王.司马卿.韦玉卿.陶灵官.亢金龙.危月燕.觜火猴.夜游神.顺风耳.鼍丞相.鲭太尉.风婆婆.猕猴王.凌虚子.精细鬼.兴烘掀.鲇鱼怪.蜈蚣精.玉面公主.赤身鬼使.有来有去.半截观音.木德星官.南极星君.南海龙王.值年功曹.火德真君.东斗星君.北极玄灵.丁酉神将.甲辰神将.素衣仙女.游奕灵官.文殊菩萨.乌巢禅师.小张太子.阿弥陀佛.那罗延佛.大慈光佛.世静光佛.金海光佛.运水力士.红眼马郎.黄河水伯.四大天王.五方揭谛.二十八宿.九曜星.李渊.刘全.杨妻.袁天罡.程咬金.张士衡.刘小二.舌尝思.红百万.嫦娥.仙翁.毕环.明月.玉女.鲨鱼.三官.李老者.张伯端.宋帝王.赵子任.孟非卿.许灵官.女土蝠.心月狐.翼火蛇.周文王.鳜都司.鲤总兵.白鹦哥.巽二郎.禺狨王.苍狼精.伶俐虫.掀烘兴.黑鱼精.小钻风.玉面狸精.杏仙杏树.玉面狐狸.南山大王.托塔天王.与世同君.北海龙王.值月功曹.西方太白.西斗星君.黄角大仙.丁未神将.甲寅神将.皂衣仙女.大力天王.燃灯古佛.灵吉菩萨.华光菩萨.无量寿佛.功德华佛.慈力王佛.日月光佛.大通光佛.修桃力士.黑甲将军.五路神龙.四大灵官.六丁神将.雷部诸神.傅奕.皇后.杨子.袁守诚.刘洪纪.李淳风.李翠莲.意见欲.一秤金.天官.赵江.摩昂.典簿.鳠痴.三星.王小二.张紫阳.仵官王.张文通.明文章.柳土獐.张月鹿.文曲星.孔圣人.鲌太尉.勾死人.小黄龙.癞头鼋.卵二姐.黑大王.巴山虎.小鼍龙.九头虫.金翅雕.万圣龙王.女童丹桂.女妖七子.辟寒大王.赤脚大仙.东华帝君.西海龙王.值日功曹.金德真君.中斗星君.金头揭谛.丁已神将.郭申将军.紫衣仙女.东西星斗.惠岸木叉.黎山老母.白雄尊者.龙尊王佛.才功德佛.贤善首佛.妙音声佛.斗战胜佛.打扫力士.横行蟹士.水母娘娘.四值功曹.六甲神将.四大菩萨.樵夫.刘母.杨孙.房玄龄.胡敬德.薛仁贵.李玉英.身本忧.陈关保.地官.炁星.秦完.如来.力士.蜃龙.四渎.赵寡妇.丘弘济.阎罗王.臧文公.康太尉.角木蛟.氐土貉.箕水豹.武曲星.桃花女.鳝力士.巨灵神.小骊龙.四大将.寅将军.黑熊精.倚海龙.孤直公.青脸儿.张氏.广智.寇妻.寿星.太阴.袁角.迦叶.城隍.五岳.禄星.八极.天佑.金吒.风伯.谛听.刘洪.广谋.寇梁.福星.太阳.天蓬.诸天.社令.冷龙.七政.刘妻.寇洪.杜如晦.秦叔宝.吴道子.相良妻.高太公.杨老者.水官.孛星.董全.阿傩.土地.五瘟.陈少保.葛仙翁.平等王.石叔通.张太尉.奎木狼.星日马.壁水貐.鬼谷子.青背龙.四余罗.老虎精.虎先锋.狮猁王.黄毛虎.凌空子.犀牛精.小龙女.秦小皇.白菜君.仲永.林真实.临风.汤姆.杰瑞.安东尼.刘易斯.威廉.常威.汤尼.珍妮.凯瑟琳.卡尔.安娜.本杰明.德古拉.艾瑞克.弗兰克.金娜.小春.詹姆斯.凯莉.梦特.尼克.波特.唐纳.莉莉.久美.山姆.阿苏.波娃.大年.杜永.方伟.风史.悲大师.毕玉麟.丁世华.东方木.杜飞萼.公孙燕.顾十行.卫宝管.卫空空.云双双.花满楼.上官楼.公孙义.呼保义.玉麒麟.智多星.入云龙.豹子头.霹雳火.花荣.呼延灼.秦明.关胜.柴进.鲁智深.行者.武松.董平.杨志.徐宁.戴宗.李逵.刘唐.史进.雷横.石秀.阮小七.燕青.张顺.朱武.黄信.孙立.郝思文.韩韬.萧让.邓飞.杨林.吕方.孙二娘.张青.顾大嫂.石勇.李立.朱富.李云.孙新.白胜.";
};
function db3(){
    return "蝙蝠.烈焰人.蜘蛛.鸡.鸡骑士.牛.爬行者.驴.守卫者.末影龙.末影人.末影螨.唤魔者.恶魂.巨人.马.尸壳.幻术师.铁傀儡.兔子.羊驼.吉祥物.岩浆怪.哞菇.骡.豹猫.鹦鹉.猪.北极熊.羊.潜影贝.蠹虫.骷髅.骷髅马.史莱姆.雪傀儡.守卫.鱿鱼.流髑.恼鬼.卫道士.村民.女巫.凋灵.狼.僵尸.僵尸马.鲑鱼.河豚.金枪鱼.鲤鱼.黄鳝.电鳗.泥鳅.巫师.弓手.公主.土豪.工程师.程序员.服主.阿婆主.妹子.精灵.兽人.矮人.龙.龙骑士.天使.恶魔.地狱疣.蘑菇.程序.美术.策划.开发.客服.侍卫.侍从.仆人.宅男.炮姐.侏儒.泰坦.血精灵.牛头人.牧师.圣骑士.猎人.德鲁伊.法师.术士.战士.盗贼.蜗牛.黑猪.国王.王子.女王.阴阳师.宗师.建筑师.特种兵.专家.猪骑士.骑士.狼骑士.君主.郡主.君王.骷髅兵.吉吉怪.苦力怕.蜘蛛娘.苦力娘.僵尸娘.末影娘.哞菇娘.凋零娘.搬运工.版主.汉化组.字幕君.画师.漫画家.动画师.声优.歌手.唱见.舞见.人偶师.主播.编剧.导演.吉他手.监督.贝斯手.主唱.鼓手.房管.贝斯.苹果.香蕉.橘子.桃子.荔枝.龙眼.桔子.李子.葡萄.青梅.椰子.石榴.草莓.栗子.梨子.樱桃.梨.木瓜.芒果.菠萝.柠檬.柿子.柚子.无花果.猕猴桃.西红柿.水蜜桃.西瓜.南瓜.甘蔗.小麦.高粱.胡萝卜.马铃薯.可可豆.仙人掌.白菜.黄瓜.豌豆.苦瓜.菠菜.冬瓜.茄子.竹笋.蚕豆.萝卜.辣椒.火龙.冰龙.野狼.野猪.双头龙.猴子.猎豹.企鹅.青蛙.蝌蚪.猛犸.半兽人.亚龙人.半人马.牛头.牛头怪.食人魔.仙女.小仙女.蛇妖.女妖.妖怪.地精.霍比特.半身人.巫女.萨满.魔王.魔女.地狱犬.甲虫.罗刹.石像.雕塑.飞马.树精.娜迦.狼人.猫人.猫女.巨魔.海豹.蜥蜴.三文鱼.希鲮鱼.纸巾.豹子.狮子.狮子王.妖精.英雄.侠客.老鼠.猫咪.狼狗.哈士奇.金毛.萨摩.斗牛犬.牧羊犬.猎犬.吉娃娃.八哥.腊肠犬.柯基.约克夏.松狮.秋田犬.柴犬.博美.藏獒.牛头梗.比熊.二郎神.玉帝.弼马温.波斯猫.英短.布偶.美短.入殓师.清洁工.教师.清道夫.律师.医生.码农.猛男.学姐.学长.师兄.大兵.网红.帅哥.课代表.班长.组长.跳蛛.蜜柑.痒痒鼠.跳跳鼠.作家.维修工.快递员.蝴蝶.瓢虫.蚂蚱.蚂蚁.毛毛虫.屎壳郎.苍蝇.蜜蜂.独角仙.飞蛾.天牛.鼻涕虫.金龟子.红蚂蚁.蚜虫.甲壳虫.蛾子.跳蚤.兔狲.短毛猫.折耳猫.暹罗猫.无毛猫.卷毛猫.猞猁.云豹.花豹.雪豹.灰狼.鬃狼.沙狐.藏狐.北极狐.苍狐.赤狐.大耳狐.貂.画眉鸟.麻雀.鸽子.文鸟.珍珠鸟.蜂鸟.火烈鸟.海鸥.猫头鹰.苍鹰.秃鹫.布谷鸟.乌鸦.灰鹦鹉.蜡嘴鸟.园丁鸟.孔雀.喜鹊.杜鹃.翠鸟.啄木鸟.主管.经理.监工.规划师.药师.护理.护士.会计.咨询师.翻译.记者.兽医.测量员.面壁者.破壁人.中介.厨师.老板.掌勺.营养师.推销员.司机.售票员.管理.导游.调酒师.美容师.理发师.解说员.交易员.保姆.苗圃工.设计师.模特.售货员.保安.警察.消防员.花匠.水电工.建筑工.电工.钳工.修护工.铸造工.缝纫工.顾问.白领.公务员.文秘.天文学家.大法师.小法师.大牧师.小牧师.剑客.刀客.剑术师.蛇.森冠蛇.宽头蛇.眼镜蛇.蟒蛇.竹叶青.草蛇.角马.狒狒.斑马.大象.非洲象.巨像.小象.水牛.瞪羚.尼罗鳄.河马.犀牛.小河马.羚羊.山羊.母羊.公羊.野马.野驴.金猫.盘羊.丹顶鹤.白鹤.金雕.天鹅.扬子鳄.白唇鹿.乌龟.蟾蜍.蝎子.沙蝎.鱼人.鱼怪.蜘蛛精.";
};
function db4(){
    return "空气.石头.草方块.泥土.圆石.木板.树苗.基岩.水.岩浆.沙子.沙砾.金矿.铁矿.煤矿.木头.树叶.海绵.玻璃.青金石.发射器.沙石.音符盒.床.铁轨.活塞.蜘蛛网.草丛.灌木.活塞臂.羊毛.蒲公英.高粱酒.棕蘑菇.红蘑菇.金块.铁块.石台阶.砖块.TNT.书架.苔石.黑曜石.火把.火.刷怪箱.橡木梯.箱子.红石线.钻石矿.钻石块.工作台.耕地.梯子.圆石梯.拉杆.红石矿.雪.冰.雪块.仙人掌.唱片机.栅栏.南瓜.地狱岩.灵魂沙.萤石.下界门.南瓜灯.怪物蛋.石砖.巨蘑菇.毒蘑菇.铁栏杆.玻璃板.南瓜梗.西瓜梗.藤蔓.砖楼梯.石楼梯.菌丝.睡莲.地狱砖.附魔台.末地门.末地石.龙蛋.红石灯.木台阶.可可果.末影箱.绊线钩.绊线.绿宝石块.命令方块.信标.圆石墙.花盆.胡萝卜.马铃薯.木按钮.铁砧.陷阱箱.压力板.比较器.传感器.红石块.石英矿.漏斗.石英块.投掷器.粘液块.屏障.活板门.海晶石.海晶灯.干草块.地毯.硬粘土.煤炭块.浮冰.大型花.旗帜.红沙石.栅栏门.铁栅栏.木门.末地烛.紫影花.紫珀块.甜菜种.草径.霜冰.打火石.苹果.弓.箭.煤炭.钻石.铁锭.金锭.铁剑.铁锹.铁镐.铁斧.木剑.木锹.木镐.木斧.石剑.石锹.石镐.石斧.钻石剑.钻石锹.钻石镐.钻石斧.木棍.碗.蘑菇煲.金剑.金锹.金镐.金斧.线.羽毛.火药.木锄.石锄.铁锄.钻石锄.金锄.小麦种子.小麦.面包.皮革帽.皮革甲.皮革裤.皮革靴.铁头盔.铁胸甲.铁护腿.铁靴子.钻石盔.钻石甲.钻石腿.钻石靴.金头盔.金胸甲.金护腿.金靴子.燧石.生猪排.熟猪排.画.金苹果.告示牌.桶.水桶.岩浆桶.矿车.鞍.铁门.红石粉.雪球.船.皮革.牛奶.红砖.粘土.甘蔗.纸.书.粘液球.鸡蛋.指南针.钓鱼竿.钟.萤石粉.生鱼.熟鱼.染料.骨头.糖.蛋糕.中继器.曲奇.地图.剪刀.西瓜片.种子.西瓜种.生牛肉.牛排.生鸡肉.熟鸡肉.腐肉.末影珠.烈焰棒.恶魂之泪.金粒.地狱疣.药水.玻璃瓶.蜘蛛眼.烈焰粉.岩浆膏.酿造台.炼药锅.末影眼.西瓜.刷怪蛋.附魔瓶.火焰弹.书与笔.成书.绿宝石.展示框.烤马铃薯.毒马铃薯.空地图.金萝卜.下界星.南瓜派.火箭.烟火星.附魔书.生兔肉.熟兔肉.兔肉煲.兔子脚.兔子皮.盔甲架.铁马铠.金马铠.拴绳.命名牌.生羊肉.熟羊肉.云杉门.白桦门.丛林门.橡木门.紫影果.爆裂果.甜菜根.甜菜汤.龙息.光灵箭.药箭.盾牌.鞘翅.云杉船.白桦船.丛林船.橡木船.唱片.经验球.拴绳结.凋灵头.烟花.爬行者.骷髅.蜘蛛.巨人.僵尸.史莱姆.恶魂.僵尸猪.末影人.蠹虫.烈焰人.岩浆怪.末影龙.凋灵.女巫.末影螨.守卫者.潜影贝.长耳兔.蝙蝠.猪.羊.牛.鸡.鱿鱼.狼.哞菇.雪傀儡.豹猫.铁傀儡.马.兔子.村民.刷怪笼.刷怪塔.发电机.永动机.铁炉.粉碎机.电炉.反应堆.采矿机.工业炉.合成机.变压器.电池.青铜粉.电路板.传送带.枪械.手枪.冲锋枪.机枪.特种枪.步枪.大炮.火炮.加农炮.榴弹炮.迫击炮.高射炮.航炮.舰炮.海岸炮.火箭炮.坦克炮.航母.战列舰.驱逐舰.巡洋舰.护卫舰.潜艇.原子弹.氢弹.中子弹.飞机.轰炸机.运输机.侦察机.歼击机.导弹.核导弹.瓦斯弹.鱼雷.来复枪.神机炮.散弹枪.机炮.狙击枪.内燃机.锅炉.轮船.游艇.激光枪.机车.机床.电灯.木桌.木椅.木床.木柜.铁桌.铁椅.铁床.铁柜.酒柜.书橱.电脑桌.梳妆台.梳妆凳.梳子.木梳.骨梳.毛巾.餐车.茶几.玄关.衣架.沙发.屏风.";
};
function db5(){
    return "老.小.大.幼年.少年.中年.老年.萌.乖.傻.呆.懒.神族.妖怪.亡灵.魔族.血族.变化.地狱.山洞.矿洞.远古.太古.上古.化石.新生.重生.不败.混沌.极品.奥术.魔法.深渊.异世.异界.变异.颜控.腿控.御宅.极大.极巨.压制.火焰.炽焰.烈焰.爆燃.废柴.暗黑.死宅.肥宅.帝都.魔都.妖都.旧都.伪都.古都.神都.腐都.邪都.陪都.雾都.萌豚.声豚.军宅.天朝.高丽.11区.岛国.米帝.米国.白学.哲学.废萌.崩坏.绅士.奇行种.超大.中二.厨二.巨大.傲娇.平原.高原.丘陵.盆地.山地.极地.水星.火星.金星.木星.地球.土星.月球.非洲.欧洲.热带.寒带.温带.腹黑.毒舌.家养.野生.火山.冰原.冰川.小学.中学.大学.博士.脑洞.蠢萌.呆萌.老牌.大触.纯种.纯粹.伦敦.东京.巴黎.雅典.埃及.首尔.平壤.朝鲜.京都.纽约.费城.乡下.城市.魔术.闪电.机械.木头.石头.黑铁.青铜.钻石.铂金.黄金.白银.王者.幽灵.鬼魂.丧尸.僵尸.北京.广州.香港.挪威.大阪.希腊.澳门.上海.深圳.芬兰.德州.襄阳.西安.绵阳.南昌.江苏.福建.福州.厦门.欧气.多兰.银河.太阳.仙女.水瓶.天秤.巨蟹.白羊.金牛.双子.风暴.狮子.天蝎.射手.双鱼.魔蝎.强壮.城堡.结界.长生.摧毁.破坏.精确.主宰.巫术.兼备.惩戒.相位.湮灭.制裁.古老.传说.坚强.史诗.普通.破损.虚弱.迅捷.超级.终结.坚韧.圣佑.狂暴.愤怒.豪华.一流.活泼.颤抖.北风.寒冬.烈火.燃烧.烟雾.静态.发光.弯曲.震撼.锯齿.邪恶.残酷.残忍.阴险.悔恨.野蛮.绝情.凶暴.冷酷.幻影.幻想.冷冽.冰冷.雷心.雷霆.霜冻.霜裔.神邪.穿甲.破甲.破败.蛮族.蛮力.雷击.恶魔.暴怒.巨力.力量.敏捷.智力.审判.抵御.保卫.耐热.耐磨.耐用.虚触.防水.防腐.防火.防护.防偷.防骗.防炸.防盗.磐石.大地.止血.武力.抵抗.灼热.抗性.守护.庇护.引流.优质.侵害.侵扰.贪婪.野火.破碎.破裂.怨恨.虚空.虚无.爆炎.无上.真实.真正.疯狂.破暗.污染.憎恶.无情.密谋.枯萎.怒火.治愈.愈合.隔绝.追踪.操纵.圣贤.强硬.强悍.强劲.坚决.坚信.坚定.坚韧.坚实.坚贞.勇敢.勇猛.刚毅.决断.果敢.果决.坚强.坚忍.决然.毅然.断然.泼辣.断腕.发誓.干脆.爽快.果断.真诚.热诚.至诚.赤诚.诚挚.恳切.纯真.率直.坦率.笃实.热忱.热心.好客.客气.殷勤.和气.和蔼.和善.亲切.过谦.谦卑.谦恭.谦和.谦让.谦虚.谦逊.虚心.外向.开朗.大方.主动.俏皮.敏捷.乐观.调皮.爽脆.爽朗.豪爽.正直.直率.直爽.直言.爽直.刚直.憨直.耿直.公正.公道.公平.公允.正派.开阔.豁达.明朗.率真.怒吼.恐惧.胆怯.畏缩.发慌.心慌.恐慌.激怒.恼火.欢乐.快慰.开心.高兴.愉悦.微笑.舒畅.笑噱.欢闹.欢心.欢欣.欢悦.宽慰.欢舒.狂欢.震怒.气愤.担忧.发愁.犯愁.忧伤.忧愁.忧心.愁闷.悲痛.悲惨.悲凉.哀伤.哀怨.伤感.瘦削.憔悴.快乐.喜悦.愉快.畅快.欢畅.欢喜.欢腾.欢快.欣喜.今天.昨天.明天.后天.上午.下午.过去.未来.去年.前年.散步.漫步.踏步.信步.转悠.闲逛.徜徉.踉跄.蹒跚.小跑.慢跑.飞跑.飞奔.飞翔.啜泣.抽泣.呜咽.哀号.号哭.痛哭.大笑.欢笑.嬉笑.狂笑.嗤笑.憨笑.傻笑.哄笑.苦笑.阴笑.狞笑.奸笑.嘲笑.冷笑.哈腰.猫腰.挺身.挺胸.俯身.躬身.仰卧.蜷曲.倒立.转体.屈体.屈身.欠身.纵身.蹲身.鞠躬.曲背.匍匐.笔挺.腾跃.直立.翻腾.前倾.摇摆.翻跃.扭动.扭转.旋转.好吃.好看.好玩.清白.凛然.无私.刚正.负重.忠心.忠贞.谨慎.廉洁.大度.坦白.勤奋.刻苦.认真.专注.踏实.勤恳.好学.高尚.杰出.超伦.自爱.自尊.自强.宽容.宽宏.律己.朴素.憨厚.诚实.忠诚.诚恳.天真.幼稚.活泼.聪明.圆滑.狡猾.虚伪.自私.任性.骄傲.贪婪.愚蠢.奸诈.高傲.害羞.内向.孤僻.可爱.招烦.阴险.双重.刻薄.宽厚.仁慈.仁厚.尖酸.阴郁.肤浅.浅薄.胆小.乐天.达观.";
};
function choiceitem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

function randomname() {
    var method = choiceitem([1,2,3,4,5,6,7]);
    if (method == 1){
        return choiceitem(db1t)+choiceitem(db2t)+choiceitem(db0t);
    }
    if (method == 2){
        return choiceitem(db1t)+choiceitem(db3t)+choiceitem(db0t);
    }
    if (method == 3){
        return choiceitem(db1t)+choiceitem(db3t)+choiceitem(db1t);
    }
    if (method == 4){
        return choiceitem(db1t)+choiceitem(db5t)+choiceitem(db1t);
    }
    if (method == 5){
        return choiceitem(db1t)+choiceitem(db0t)+choiceitem(db3t);
    }
    if (method == 6){
        return choiceitem(db1t)+choiceitem(db0t)+choiceitem(db2t);
    }
    if (method == 7){
        return choiceitem(db2t)+"的"+choiceitem(db1t)+choiceitem(db4t);
    }
    return "生成错误";
}
console.log("byapi_access:load functions success!");
console.timeEnd("byapi_access:loadfunc");
console.log("byapi_access:start loading words.");
console.time("byapi_access:loadword");

var data = db0();
var lines = data.split('.');
var db0t = lines.filter(line => line.trim() !== '');
var data = db1();
var lines = data.split('.');
var db1t = lines.filter(line => line.trim() !== '');
var data = db2();
var lines = data.split('.');
var db2t = lines.filter(line => line.trim() !== '');
var data = db3();
var lines = data.split('.');
var db3t = lines.filter(line => line.trim() !== '');
var data = db4();
var lines = data.split('.');
var db4t = lines.filter(line => line.trim() !== '');
var data = db5();
var lines = data.split('.');
var db5t = lines.filter(line => line.trim() !== '');

console.log("byapi_access:load words success!")
console.timeEnd("byapi_access:loadword");
console.timeEnd("byapi_access:load");


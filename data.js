const galaxyData = {
    name: "算法四部曲",
    regions: [
        {
            id: 'newbie',
            name: '第一站 - 新手入门',
            image: 'https://uploadfiles.nowcoder.com/images/20250725/0_1753414699976/B9706FF477AAB081BA321A4D562779A5',
            chapters: [
                 // --- Outer Ellipse Path ---
                 {
                    id: 'c1-2', name: '代码的运行', x: '10%', y: '45%', type: 'terran',
                    problems: [
                        { questionNo: 'noob1', questionTitle: 'Hello Nowcoder', accept: true, questionUuid: '6dd1bc8539db4b7199f4972a5dc14bd2', acceptRate: '33.50' },
                    ]
                },
                {
                    id: 'c1-3', name: '基本数据类型', x: '20%', y: '28%', type: 'terran',
                    problems: [
                        { questionNo: 'noob2', questionTitle: '牛牛学说话之-整数', accept: true, questionUuid: 'df9ee533ef9544bfa382203c812d9b55', acceptRate: '47.20' },
                        { questionNo: 'noob3', questionTitle: '牛牛学说话之-浮点数', accept: true, questionUuid: '7c3bf58fac1a4eb69fa32c2d2c379bac', acceptRate: '39.78' },
                        { questionNo: 'noob4', questionTitle: '牛牛学说话之-字符串', accept: true, questionUuid: 'fa8bde2f612749c9813262a146488c9d', acceptRate: '59.47' },
                        { questionNo: 'noob5', questionTitle: '复读机', accept: true, questionUuid: '9d381551b6ab40c4b5c3c8d60fe4066e', acceptRate: '35.02' },
                    ]
                },
                {
                    id: 'c1-4', name: '运算符与优先级', x: '35%', y: '20%', type: 'terran',
                    problems: [
                        { questionNo: 'noob6', questionTitle: '牛牛学加法', accept: true, questionUuid: '07fde707001048db8342a4be16c7d4b0', acceptRate: '63.28' },
                        { questionNo: 'noob7', questionTitle: '疫情死亡率', accept: true, questionUuid: '30ccb6041bce43c6989b910dc46d391c', acceptRate: '42.46' },
                        { questionNo: 'noob8', questionTitle: '计算带余除法', accept: true, questionUuid: '34d3911bf2fd48a285f6396e886a1259', acceptRate: '50.97' },
                        { questionNo: 'noob9', questionTitle: '整数的个位', accept: true, questionUuid: '1c0ce3c9134f45edbcd4343f9d5e320a', acceptRate: '69.02' },
                        { questionNo: 'noob10', questionTitle: '整数的十位', accept: true, questionUuid: '031db23916904f4fad72198fe491b47b', acceptRate: '66.11' },
                        { questionNo: 'noob11', questionTitle: '平方根', accept: true, questionUuid: 'cd21e09482f24b03842f02ae3d403cad', acceptRate: '63.34' },
                    ]
                },
                {
                    id: 'c1-5', name: '顺序结构', x: '50%', y: '22%', type: 'terran',
                    problems: [
                        { questionNo: 'noob12', questionTitle: '反向输出一个四位数', accept: true, questionUuid: '1f7c1d67446e4361bf4af67c08e0b8b0', acceptRate: '41.90' },
                        { questionNo: 'noob13', questionTitle: '温标转换', accept: true, questionUuid: '41ceb724a9e843ecad8192cfbea56466', acceptRate: '72.57' },
                        { questionNo: 'noob14', questionTitle: '绕距', accept: true, questionUuid: '7a245fc6284f4139b4fb21de58e68483', acceptRate: '47.43' },
                        { questionNo: 'noob15', questionTitle: '求四位数各个数位之和', accept: true, questionUuid: '91fd90931d2847b5855075c11cf90d08', acceptRate: '73.01' },
                        { questionNo: 'noob16', questionTitle: '时间转换', accept: true, questionUuid: 'c4ae7bcac7f9491b8be82ee516a94899', acceptRate: '46.20' },
                        { questionNo: 'noob17', questionTitle: '计算机内存', accept: true, questionUuid: '004c39e1411f43afb425bd2e7cf1056c', acceptRate: '77.23' },
                        { questionNo: 'noob18', questionTitle: '牛牛学立体', accept: true, questionUuid: '3d0bd5e060154211bddc1ee892714df0', acceptRate: '68.31' },
                        { questionNo: 'noob19', questionTitle: '成绩', accept: true, questionUuid: '1dace93b7f5b452a804a6e10ff8b5fec', acceptRate: '77.12' },
                        { questionNo: 'noob20', questionTitle: '小乐乐求和', accept: true, questionUuid: 'ce0b2eacd3d04647831358c2876e44ff', acceptRate: '22.88' },
                    ]
                },
                {
                    id: 'c1-6', name: '选择结构', x: '65%', y: '28%', type: 'terran',
                    problems: [
                        { questionNo: 'noob21', questionTitle: '明天星期几？', accept: true, questionUuid: '9db9e3d19cde405ba94db09ed1c5f3f3', acceptRate: '51.71' },
                        { questionNo: 'noob22', questionTitle: '判断闰年', accept: true, questionUuid: 'a7bcbe3cb86f435d9617dfdd20a16714', acceptRate: '40.73' },
                        { questionNo: 'noob23', questionTitle: '比大小', accept: true, questionUuid: 'b6c48ca948a74afaaf1bc5b5371ba3a3', acceptRate: '62.73' },
                        { questionNo: 'noob24', questionTitle: '卡拉兹函数', accept: true, questionUuid: 'fd497366b6a54ce18698f853cc1bd503', acceptRate: '69.95' },
                        { questionNo: 'noob25', questionTitle: '牛妹数', accept: true, questionUuid: '4430f088039b4286a2e265775fd4954a', acceptRate: '69.49' },
                        { questionNo: 'noob26', questionTitle: '牛牛是否被叫家长', accept: true, questionUuid: 'cc896ffd90d34c7faa318b04e87adf11', acceptRate: '49.37' },
                        { questionNo: 'noob27', questionTitle: '最大最小值', accept: true, questionUuid: '051cbca4504d40f5b20bb891d83ec408', acceptRate: '44.55' },
                        { questionNo: 'noob28', questionTitle: '四季', accept: true, questionUuid: 'eaf21203b61b4a689987fdc165d00dfc', acceptRate: '45.64' },
                    ]
                },
                {
                    id: 'c1-7', name: '循环结构', x: '80%', y: '38%', type: 'terran',
                    problems: [
                        { questionNo: 'noob29', questionTitle: '多组输入a+b II', accept: true, questionUuid: '37cad29015e3457ba256e3319436d0e6', acceptRate: '64.24' },
                        { questionNo: 'noob30', questionTitle: '多组数据a+b III', accept: true, questionUuid: '7e094c0a3a9945b3bee8e1f3c9ea246a', acceptRate: '68.70' },
                        { questionNo: 'noob31', questionTitle: '素数判断', accept: true, questionUuid: '5ab1b9690af047699e96c87dee65def4', acceptRate: '31.97' },
                        { questionNo: 'noob32', questionTitle: '牛牛学数列', accept: true, questionUuid: '0b97367cd2184c12a0e02f7c223aee11', acceptRate: '51.47' },
                        { questionNo: 'noob33', questionTitle: '牛牛学数列2', accept: true, questionUuid: 'fc72951f52984f3abd286d82eeffacba', acceptRate: '37.70' },
                        { questionNo: 'noob34', questionTitle: '最大的差', accept: true, questionUuid: '0cc49c97703d471dae00b43a5649e4f9', acceptRate: '49.63' },
                        { questionNo: 'noob35', questionTitle: '牛牛学数列4', accept: true, questionUuid: '586b114f52034688879342ba45779081', acceptRate: '61.78' },
                        { questionNo: 'noob36', questionTitle: '牛牛学数列5', accept: true, questionUuid: '6db6674518a9456198c166bcd0d2aaa1', acceptRate: '52.90' },
                        { questionNo: 'noob37', questionTitle: '数位之和', accept: true, questionUuid: '5e85cc26475449648e668aa98e92d05b', acceptRate: '55.66' },
                        { questionNo: 'noob38', questionTitle: '牛牛数数', accept: true, questionUuid: '03a3cc96fa4847b387bf58bb800d67cf', acceptRate: '33.11' },
                    ]
                },

                // --- Bottom Arm (R to L) ---
                {
                    id: 'c1-8', name: '数组', x: '90%', y: '55%', type: 'terran',
                    problems: [
                        { questionNo: 'noob39', questionTitle: '牛牛学数列6', accept: true, questionUuid: 'b6321648517247b2ac2e2f80cbc63ae1', acceptRate: '64.06' },
                        { questionNo: 'noob40', questionTitle: '二维斐波那契数列', accept: true, questionUuid: 'a1951ca9431646ff8f9bc6f6d24d1e0a', acceptRate: '24.82' },
                        { questionNo: 'noob41', questionTitle: '神秘石像的镜像序列', accept: true, questionUuid: 'fa34eea974234610b6d3d81790cb2949', acceptRate: '52.07' },
                        { questionNo: 'noob42', questionTitle: '左侧严格小于计数', accept: true, questionUuid: 'c5922c6cdd1445749bd42f586c422435', acceptRate: '51.34' },
                        { questionNo: 'noob43', questionTitle: '牛牛的数学作业', accept: true, questionUuid: '6f5d239c34a7429cb325a3d836abc342', acceptRate: '48.47' },
                        { questionNo: 'noob44', questionTitle: '数组计数维护', accept: true, questionUuid: '47ee4c040f1648fc9ef7732d35402676', acceptRate: '58.55' },
                        { questionNo: 'noob45', questionTitle: '记数问题', accept: true, questionUuid: '28b2d9f2bf2c48de94a1297ed90e1732', acceptRate: '44.06' },
                        { questionNo: 'noob46', questionTitle: '约瑟夫环', accept: true, questionUuid: 'e417cfe32c74416ca38247f619ddb322', acceptRate: '44.60' },
                        { questionNo: 'noob47', questionTitle: '校门外的树', accept: true, questionUuid: '0e8cfc82936048769af45967f3c4ef7e', acceptRate: '52.87' },
                        { questionNo: 'noob48', questionTitle: '单组_二维数组', accept: true, questionUuid: '4df606b6c3764d9c969f8759c8a4807b', acceptRate: '68.52' },
                        { questionNo: 'noob49', questionTitle: '上三角矩阵判定', accept: true, questionUuid: 'f5a29bacfc514e5a935723857e1245e4', acceptRate: '38.54' },
                        { questionNo: 'noob50', questionTitle: '矩阵转置', accept: true, questionUuid: '351b3d03e410496ab5a407b7ca3fd841', acceptRate: '37.72' },
                        { questionNo: 'noob51', questionTitle: '杨辉三角', accept: true, questionUuid: '8c6984f3dc664ef0a305c24e1473729e', acceptRate: '54.74' },
                        { questionNo: 'noob52', questionTitle: '扫雷', accept: true, questionUuid: 'd5f277427d9a4cd3ae60ea6c276dddfd', acceptRate: '36.15' },
                    ]
                },
                {
                    id: 'c1-9', name: '字符串', x: '85%', y: '72%', type: 'terran',
                    problems: [
                        { questionNo: 'noob53', questionTitle: '年轻人不讲5的', accept: true, questionUuid: '504e04804610463facbedaad9a8c742e', acceptRate: '44.11' },
                        { questionNo: 'noob54', questionTitle: '斗兽棋', accept: true, questionUuid: '0b5afb815f6848d9a7f9c1b0ce514b95', acceptRate: '52.34' },
                        { questionNo: 'noob55', questionTitle: '添加逗号', accept: true, questionUuid: 'f51c317e745649c0900996fd3f683aed', acceptRate: '29.36' },
                        { questionNo: 'noob56', questionTitle: 'BFS', accept: true, questionUuid: '22da7730da5d4a129a188ba24d22f2bf', acceptRate: '38.82' },
                        { questionNo: 'noob57', questionTitle: '凯撒加密', accept: true, questionUuid: '006b7917d3784371a43cfbae01a9313d', acceptRate: '39.98' },
                        { questionNo: 'noob58', questionTitle: '无限长正整数排列字符串', accept: true, questionUuid: '82c92d2321bb4220a3006d52a95a8bdd', acceptRate: '53.11' },
                        { questionNo: 'noob59', questionTitle: '简写单词', accept: true, questionUuid: '0cfa856bf0d649b88f6260d878f35bb4', acceptRate: '30.23' },
                        { questionNo: 'noob60', questionTitle: '牛牛的考试', accept: true, questionUuid: '1a7a7c8d721547a29107cf02330ffe72', acceptRate: '35.21' },
                        { questionNo: 'noob61', questionTitle: '字符串操作', accept: true, questionUuid: '06a5336b64e3481fbbcc1f7d5cba548d', acceptRate: '42.18' },
                    ]
                },
                {
                    id: 'c1-10', name: '函数与函数式交互题', x: '70%', y: '80%', type: 'terran',
                    problems: [
                        { questionNo: 'noob62', questionTitle: 'a 加 b 问题（函数）', accept: true, questionUuid: '583c33b4f5f24763a9b67cccd6e386a7', acceptRate: '69.27' },
                        { questionNo: 'noob63', questionTitle: 'a 乘 b 问题（函数）', accept: true, questionUuid: 'ab665f78dc15448895573d230c519a1e', acceptRate: '47.67' },
                        { questionNo: 'noob64', questionTitle: '平方根', accept: true, questionUuid: 'e821f9ce44fb4f0aafa481ad93efb6c6', acceptRate: '81.45' },
                        { questionNo: 'noob65', questionTitle: '一元二次方程', accept: true, questionUuid: 'f1b20bcca3d847bea0afcbffef1d4e69', acceptRate: '74.82' },
                        { questionNo: 'noob66', questionTitle: '第一宇宙速度', accept: true, questionUuid: 'aa08dec2eed24c629a7100e677144edd', acceptRate: '75.52' },
                        { questionNo: 'noob67', questionTitle: '求阶乘', accept: true, questionUuid: 'd7f7e5ccdd1a4262b1f705de9911705f', acceptRate: '28.49' },
                        { questionNo: 'noob68', questionTitle: '凯撒解密', accept: true, questionUuid: '42c2f0c1351e4a6689ff64eddaf97a37', acceptRate: '45.76' },
                    ]
                },
                {
                    id: 'c1-11', name: '类与结构体', x: '55%', y: '85%', type: 'terran',
                    problems: [
                        { questionNo: 'noob69', questionTitle: '最厉害的学生', accept: true, questionUuid: 'b6e7a9ca04d8418b805b3b4b7d25b4d4', acceptRate: '61.95' },
                        { questionNo: 'noob70', questionTitle: '两点间距离', accept: true, questionUuid: '94712d6f654143379f8ea5847d9d6225', acceptRate: '73.99' },
                        { questionNo: 'noob71', questionTitle: '学生综合评估系统', accept: true, questionUuid: 'd8d5d6294b8f48b684ea93fbb4935a2b', acceptRate: '58.92' },
                        { questionNo: 'noob72', questionTitle: '点到直线距离', accept: true, questionUuid: '1bcdd78060e54812a9c47ebe40c6af65', acceptRate: '50.44' },
                        { questionNo: 'noob73', questionTitle: '三角形面积', accept: true, questionUuid: '52992a1ac2b842cc84d3fd3813b9566d', acceptRate: '66.19' },
                        { questionNo: 'noob74', questionTitle: '直线与圆交点间距', accept: true, questionUuid: '396cdc45427847d199c7e279303692bd', acceptRate: '33.78' },
                        { questionNo: 'noob75', questionTitle: '两直线交点', accept: true, questionUuid: 'b14130882e704fd6aa57f8762ae17bac', acceptRate: '31.89' },
                    ]
                },
                {
                    id: 'c1-12', name: '序列', x: '40%', y: '82%', type: 'terran',
                    problems: [
                        { questionNo: 'noob77', questionTitle: '【模板】序列操作', accept: true, questionUuid: '12da4185c0bb45918cfdc3072e544069', acceptRate: '30.10' },
                        { questionNo: 'noob78', questionTitle: '求峰谷点数', accept: true, questionUuid: '4015c0d05e1f42028520494b7ecef2b8', acceptRate: '67.47' },
                        { questionNo: 'noob79', questionTitle: '向量点乘', accept: true, questionUuid: 'f043b2390788458db7762300911e30df', acceptRate: '91.46' },
                        { questionNo: 'noob80', questionTitle: '向量叉乘', accept: true, questionUuid: '2b2dc309c15f4b19949a03455ff3277c', acceptRate: '67.81' },
                        { questionNo: 'noob81', questionTitle: '旺仔哥哥挤地铁', accept: true, questionUuid: '1e683db4a34442098fb642d514bd0794', acceptRate: '59.20' },
                        { questionNo: 'noob82', questionTitle: '逗号整合器', accept: true, questionUuid: 'ff77cca50f5d4793a14a94f141de0af3', acceptRate: '58.36' },
                        { questionNo: 'noob83', questionTitle: '旺仔哥哥转圈圈', accept: true, questionUuid: '739afacabadd463d9b73b23514bb6d5d', acceptRate: '33.33' },
                    ]
                },
                {
                    id: 'c1-13', name: '栈', x: '25%', y: '75%', type: 'terran',
                    problems: [
                        { questionNo: 'noob84', questionTitle: '【模板】栈的操作', accept: true, questionUuid: 'cdf02ea916454957b575585634e5773a', acceptRate: '42.97' },
                        { questionNo: 'noob85', questionTitle: '括号配对问题', accept: true, questionUuid: '57260c08eaa44feababd05b328b897d7', acceptRate: '25.22' },
                        { questionNo: 'noob86', questionTitle: '好串', accept: true, questionUuid: '9b072237ebdd4dd99562f01cbf594fac', acceptRate: '44.52' },
                        { questionNo: 'noob87', questionTitle: '吐泡泡', accept: true, questionUuid: 'f86fa2221c094b3d8d1fc79bae450d96', acceptRate: '27.19' },
                        { questionNo: 'noob88', questionTitle: '有效括号序列', accept: true, questionUuid: '37548e94a270412c8b9fb85643c8ccc2', acceptRate: '29.42' },
                        { questionNo: 'noob89', questionTitle: '牛牛与后缀表达式', accept: true, questionUuid: 'a1a4f178f6ff4188890e51da1cc8ce10', acceptRate: '29.97' },
                        { questionNo: 'noob90', questionTitle: '表达式求值', accept: true, questionUuid: 'c215ba61c8b1443b996351df929dc4d4', acceptRate: '36.08' },
                        { questionNo: 'noob91', questionTitle: '栈和排序', accept: true, questionUuid: 'b10a7ac681e9429e89a6a510e5799647', acceptRate: '28.53' },
                        { questionNo: 'noob92', questionTitle: '自动管理停车场桩位系统', accept: null, questionUuid: '4c7f2556e7e8436189202942b4fa07e4', acceptRate: '58.97' },
                        { questionNo: 'noob93', questionTitle: '验证栈序列', accept: true, questionUuid: 'd3178fe362dd4810b577c77c9e128fc5', acceptRate: '42.60' },
                    ]
                },
                {
                    id: 'c1-14', name: '队列', x: '15%', y: '65%', type: 'terran',
                    problems: [
                        { questionNo: 'noob94', questionTitle: '【模板】队列操作', accept: true, questionUuid: '1137c8f6ffac4d5d94cc1b0cb08723f9', acceptRate: '50.27' },
                        { questionNo: 'noob95', questionTitle: '无法吃午餐的学生数量', accept: true, questionUuid: '2dac3d7567f741a88ec551caf907934d', acceptRate: '43.92' },
                        { questionNo: 'noob96', questionTitle: '队列消数', accept: true, questionUuid: '48f6e451ff52440798067b77dc5ea95b', acceptRate: '63.52' },
                        { questionNo: 'noob97', questionTitle: '用两个栈实现队列', accept: true, questionUuid: '54275ddae22f475981afa2244dd448c6', acceptRate: '41.50' },
                        { questionNo: 'noob98', questionTitle: '参议院投票', accept: true, questionUuid: 'f334a81b22654efc8d7a67e31f60de50', acceptRate: '45.68' },
                        { questionNo: 'noob99', questionTitle: '机器翻译', accept: true, questionUuid: '45ecfecd83104f37a685016361be504c', acceptRate: '45.43' },
                    ]
                },

                // --- Inner Core Data Structures (Reordered to avoid crossing lines) ---
                {
                    id: 'c1-15', name: '集合', x: '30%', y: '55%', type: 'terran',
                    problems: [
                        { questionNo: 'noob100', questionTitle: '【模板】集合操作', accept: true, questionUuid: 'a37b91f84cdf490b8d8b990794211135', acceptRate: '27.26' },
                        { questionNo: 'noob101', questionTitle: '【模板】多重集合操作', accept: true, questionUuid: 'aaf8b53f6ea74ad6beabed77bb275725', acceptRate: '32.67' },
                        { questionNo: 'noob102', questionTitle: '动态整数集最近值提取', accept: true, questionUuid: 'c8615a370bb24ce6b110c3d7151c3dfc', acceptRate: '26.49' },
                        { questionNo: 'noob103', questionTitle: '数对计数', accept: true, questionUuid: '7d05171e7e0e4c6086be233769e01d94', acceptRate: '43.32' },
                        { questionNo: 'noob104', questionTitle: '快乐数', accept: true, questionUuid: '293b9ddd48444fa493dd17da0feb192d', acceptRate: '54.73' },
                        { questionNo: 'noob105', questionTitle: '宝石计数', accept: true, questionUuid: 'd7c20bd9aa094e35b465b566eec86cf2', acceptRate: '61.43' },
                        { questionNo: 'noob106', questionTitle: '不重复数字', accept: true, questionUuid: '38532b5539164242b4252352be8749ab', acceptRate: '37.02' },
                    ]
                },
                {
                    id: 'c1-16', name: '优先队列', x: '50%', y: '40%', type: 'terran',
                    problems: [
                        { questionNo: 'noob106', questionTitle: '【模板】整数优先队列', accept: true, questionUuid: 'a88e9711f7b04369982bbe8902278ae4', acceptRate: '49.52' },
                        { questionNo: 'noob107', questionTitle: '结构体优先队列', accept: true, questionUuid: 'e3d68ce7184e4658b42740edd4308d51', acceptRate: '55.24' },
                        { questionNo: 'noob108', questionTitle: '字符串优先队列', accept: true, questionUuid: '7f3c2ebfc3be442897393f7da5d021c8', acceptRate: '92.91' },
                        { questionNo: 'noob109', questionTitle: '两端问优先队列', accept: true, questionUuid: 'da2887a3fd8549ad826c9cbdaa67f513', acceptRate: '40.30' },
                        { questionNo: 'noob110', questionTitle: '小苯的比赛上分', accept: true, questionUuid: 'f5c52183dfb148489321f881239216c1', acceptRate: '43.90' },
                    ]
                },
                {
                    id: 'c1-17', name: '链表', x: '70%', y: '50%', type: 'terran',
                    problems: [
                        { questionNo: 'noob111', questionTitle: '两两交换链表中的结点', accept: true, questionUuid: '1aabdaea8c7e4874bb1d3eda2c7f0042', acceptRate: '53.55' },
                        { questionNo: 'noob112', questionTitle: '移除链表元素', accept: true, questionUuid: '428a854dff8b4333b54cfe580323e2df', acceptRate: '53.40' },
                        { questionNo: 'noob113', questionTitle: '反转链表', accept: true, questionUuid: '75e878df47f24fdc9dc3e400ec6058ca', acceptRate: '39.23' },
                        { questionNo: 'noob114', questionTitle: '链表序列化', accept: true, questionUuid: '9e36b4349f0441d8a2c31ceeb46c757e', acceptRate: '82.63' },
                        { questionNo: 'noob115', questionTitle: '序列链表化', accept: true, questionUuid: 'a407f7e495084084b1e1f628dfd769fd', acceptRate: '69.16' },
                        { questionNo: 'noob116', questionTitle: '合并两个排序的链表', accept: true, questionUuid: 'd8b6b4358f774294a89de2a6ac4d9337', acceptRate: '32.13' },
                        { questionNo: 'noob117', questionTitle: '链表相交', accept: true, questionUuid: 'bd911c77a1ed4e289a0699fa7df23b6c', acceptRate: '53.31' },
                        { questionNo: 'noob118', questionTitle: '判断一个链表是否为回文结构', accept: true, questionUuid: '3fed228444e740c8be66232ce8b87c2f', acceptRate: '30.02' },
                        { questionNo: 'noob119', questionTitle: '插队', accept: true, questionUuid: 'ed27560740114f07a23fad98afac12b6', acceptRate: '47.10' },
                    ]
                },
                {
                    id: 'c1-18', name: '哈希表', x: '50%', y: '65%', type: 'terran',
                    problems: [
                        { questionNo: 'noob120', questionTitle: '两数之和', accept: true, questionUuid: 'c4a4f030ca374d9bb9df5c0bdf388626', acceptRate: '00.98' },
                        { questionNo: 'noob121', questionTitle: '字符串哈希', accept: true, questionUuid: 'dadbd37fee7c43f0ae407db11b16b4bf', acceptRate: '74.02' },
                        { questionNo: 'noob122', questionTitle: '大整数哈希', accept: true, questionUuid: '29f0cff8a69b4ab6a2f63fb7386defa3', acceptRate: '33.58' },
                        { questionNo: 'noob123', questionTitle: '字母异位词的长度', accept: true, questionUuid: '59426f49136349b0901cc1b70447bf4b', acceptRate: '37.22' },
                        { questionNo: 'noob124', questionTitle: '两个数组的交集', accept: true, questionUuid: 'f31371f27dcd4c90a8fd2902d3e4592c', acceptRate: '54.93' },
                        { questionNo: 'noob125', questionTitle: '字符串构造判定', accept: true, questionUuid: '8d6a87b1e5314c0387dad5728dcc05be', acceptRate: '45.20' },
                        { questionNo: 'noob126', questionTitle: '生词篇章查询', accept: true, questionUuid: '3790042b79114ae5bd9f6eccdaeadfcd', acceptRate: '54.15' },
                        { questionNo: 'noob127', questionTitle: '特殊城市', accept: true, questionUuid: '46f68af83db74b709a788dedb656c5f9', acceptRate: '37.55' },
                        { questionNo: 'noob128', questionTitle: '哈希冲突', accept: true, questionUuid: '37594c5b299e495096a99cf6e4cdf2f5', acceptRate: '53.63' },
                        { questionNo: 'noob129', questionTitle: '玩家积分榜系统', accept: true, questionUuid: '5b5cb654caa249eb979e4be483e36c1e', acceptRate: '55.91' },
                        { questionNo: 'noob130', questionTitle: '贪吃蛇游戏', accept: true, questionUuid: 'ec61c899432f469bb8b3f96b44c23e79', acceptRate: '48.01' },
                    ]
                }
            ]
        },
        {
            id: 'intro',
            name: '第二站 - 算法入门',
            image: 'https://uploadfiles.nowcoder.com/images/20250725/0_1753414676141/4A1E30934C2C3E4A8A44E9E74FE87516',
            chapters: [
                {
                    id: 'c2-2', name: '暴力枚举', x: '15%', y: '15%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN1', questionTitle: '小红喜欢1', accept: null, questionUuid: 'cbd0c91f821847a4bb1c5115405f6eda', acceptRate: '61.98' },
                        { questionNo: 'BGN2', questionTitle: '田忌赛马', accept: null, questionUuid: '49d799f65a0749588e9cd7e6135a4a9a', acceptRate: '40.90' },
                        { questionNo: 'BGN3', questionTitle: '小红的正整数构造', accept: null, questionUuid: '7aa37cbc28034fe5af562ec7e44d1e76', acceptRate: '48.47' },
                        { questionNo: 'BGN4', questionTitle: '买橘子', accept: null, questionUuid: '73e0552b78474a9086781e47f4e01d73', acceptRate: '41.30' },
                        { questionNo: 'BGN5', questionTitle: '穷哈哈~', accept: null, questionUuid: '5b3184b233f34fb39a7f259ae82eb42c', acceptRate: '30.11' },
                        { questionNo: 'BGN6', questionTitle: '小红的字符串修改', accept: null, questionUuid: '66e0054ff6b345afa47bcd4e8ceb72d7', acceptRate: '40.06' },
                        { questionNo: 'BGN7', questionTitle: '魔法棒', accept: null, questionUuid: '976bd95dda8f4430b512d0c39bd9f106', acceptRate: '28.47' },
                        { questionNo: 'BGN8', questionTitle: '变幻莫测', accept: null, questionUuid: '5e702b6c7c114e64b5db4650d0ce0051', acceptRate: '37.74' },
                        { questionNo: 'BGN9', questionTitle: '元素方碑', accept: null, questionUuid: '5c6e7ed4726e41f4ac99a4dedf1e5bb2', acceptRate: '30.95' },
                        { questionNo: 'BGN10', questionTitle: '九倍平方数', accept: null, questionUuid: '032c72fab5fe4a2ea8e11d40378a493d', acceptRate: '29.98' },
                    ]
                },
                {
                    id: 'c2-3', name: '模拟算法', x: '30%', y: '25%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN11', questionTitle: '数颜色', accept: null, questionUuid: '7f458453debe49c9a98f20f42d65ebf1', acceptRate: '75.07' },
                        { questionNo: 'BGN12', questionTitle: '特殊的科学计数法', accept: null, questionUuid: 'ca0962879d3b40d8bb598fb9a905ac7a', acceptRate: '22.15' },
                        { questionNo: 'BGN13', questionTitle: '小红的夹吃棋', accept: null, questionUuid: '94648fd37a644c76adb2adb29c2a3037', acceptRate: '48.46' },
                        { questionNo: 'BGN14', questionTitle: '计算一年中的第几天', accept: null, questionUuid: '178aa3dafb144bb8b0445edb5e9b812a', acceptRate: '44.46' },
                        { questionNo: 'BGN15', questionTitle: '纸牌游戏', accept: null, questionUuid: '74f915e366094b19b94334de8b68e733', acceptRate: '33.24' },
                        { questionNo: 'BGN16', questionTitle: '多项式输出', accept: null, questionUuid: '142ee43d3e7345d385328faca9f636e5', acceptRate: '22.75' },
                        { questionNo: 'BGN17', questionTitle: '乒乓球', accept: null, questionUuid: '78660925b1cd49b6b2e43cb375ed7945', acceptRate: '31.10' },
                        { questionNo: 'BGN18', questionTitle: '回文日期', accept: null, questionUuid: '0372242deac541d0b578cc6563395681', acceptRate: '37.25' },
                        { questionNo: 'BGN19', questionTitle: '小红的回文串', accept: true, questionUuid: 'b0c3a7aecb0a47ab865602585f4402a7', acceptRate: '29.64' },
                    ]
                },
                {
                    id: 'c2-4', name: '排序算法', x: '50%', y: '30%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN20', questionTitle: '【模板】排序', accept: null, questionUuid: '40bf74658879460bbf5f1bfe772e8580', acceptRate: '49.08' },
                        { questionNo: 'BGN21', questionTitle: '分数线划定', accept: null, questionUuid: '2395fa7b6c6e452e8d8310a7cfdbe902', acceptRate: '48.89' },
                        { questionNo: 'BGN22', questionTitle: '小苯送礼物', accept: null, questionUuid: '466e02d2177845589ab5fa5decc2857f', acceptRate: '31.62' },
                        { questionNo: 'BGN23', questionTitle: '支付宝消费打折', accept: null, questionUuid: 'f8997c9b82714f058e12433a32614993', acceptRate: '24.91' },
                        { questionNo: 'BGN24', questionTitle: '小红的矩阵染色', accept: null, questionUuid: 'f8b771318bb04490b7389cc35e148166', acceptRate: '24.62' },
                        { questionNo: 'BGN25', questionTitle: '小红书推荐系统', accept: null, questionUuid: 'e5b39c9034a84bf2a5e026b2b9b973d0', acceptRate: '60.17' },
                        { questionNo: 'BGN26', questionTitle: '小红背单词', accept: null, questionUuid: 'b3d0fa1c43c44e0580654cb93c1bfdb9', acceptRate: '32.04' },
                        { questionNo: 'BGN27', questionTitle: '谐距下标对', accept: null, questionUuid: '12fd032361704c978bcb9c2c2b3bb93d', acceptRate: '30.82' },
                        { questionNo: 'BGN28', questionTitle: '最大 FST 距离', accept: null, questionUuid: '6295f81acd1b4fb59c8beed92577f64b', acceptRate: '27.10' },
                    ]
                },
                {
                    id: 'c2-5', name: '贪心算法', x: '70%', y: '35%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN29', questionTitle: '小红的优惠券', accept: null, questionUuid: 'e991a011f96444f3a6ad57943d39f4ad', acceptRate: '46.17' },
                        { questionNo: 'BGN30', questionTitle: '讨厌鬼进货', accept: null, questionUuid: 'e364bac751204aa0b2d27389ca8e3c94', acceptRate: '57.93' },
                        { questionNo: 'BGN31', questionTitle: '清楚姐姐买竹鼠', accept: null, questionUuid: '816dfe69f83042108cf8c74531a94a35', acceptRate: '29.86' },
                        { questionNo: 'BGN32', questionTitle: '小红的字符串', accept: null, questionUuid: 'f9738786c00a40a2b7ddf6c82c1a59b1', acceptRate: '53.61' },
                        { questionNo: 'BGN33', questionTitle: '灵异背包？', accept: null, questionUuid: '812bcedbbe244c9b86e459a244af5ddf', acceptRate: '52.87' },
                        { questionNo: 'BGN34', questionTitle: '01序列', accept: null, questionUuid: 'b0c948dbe577485598b982a430d65c39', acceptRate: '27.35' },
                        { questionNo: 'BGN35', questionTitle: '排座椅', accept: null, questionUuid: 'b8dc67c35bdb47e489da682e908379f7', acceptRate: '45.96' },
                        { questionNo: 'BGN36', questionTitle: '小红的矩阵染色', accept: null, questionUuid: 'dcbaf862c0e046d79e9cd297abd76bcf', acceptRate: '25.17' },
                        { questionNo: 'BGN37', questionTitle: '小红的魔法药剂', accept: null, questionUuid: '1ede2daa3ab445bc8ac8ea62b6ca8201', acceptRate: '53.04' },
                        { questionNo: 'BGN38', questionTitle: '交换到最大', accept: null, questionUuid: '73fd35bbfaa5483d8aa8b03cd27887a8', acceptRate: '35.63' },
                        { questionNo: 'BGN39', questionTitle: '小红的整数配对', accept: null, questionUuid: '66b9810e4fe34956a8d1f5c67aacc6dc', acceptRate: '39.59' },
                        { questionNo: 'BGN40', questionTitle: '小红闯关', accept: null, questionUuid: '7ce4b75f7a304be481e73bc4dd2705a4', acceptRate: '12.28' },
                    ]
                },
                {
                    id: 'c2-6', name: '简单数论', x: '85%', y: '50%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN41', questionTitle: '判断质数', accept: null, questionUuid: '9f418ff48b5e4e879f398352bed6118d', acceptRate: '28.08' },
                        { questionNo: 'BGN42', questionTitle: '分解质因数', accept: true, questionUuid: '35723516d6f841ca8869ecbcf3ddacaf', acceptRate: '45.75' },
                        { questionNo: 'BGN43', questionTitle: '最大公因数与最小公倍数', accept: null, questionUuid: 'ee732bec4f174cd9b4abc6427ba90584', acceptRate: '37.99' },
                        { questionNo: 'BGN44', questionTitle: '几乎是质数', accept: null, questionUuid: 'bbcb0e0f5aad46f4920ee85c3ed5d34b', acceptRate: '50.56' },
                        { questionNo: 'BGN45', questionTitle: '1=N', accept: null, questionUuid: '31469f8503c24914acd5c0290ad4dfbb', acceptRate: '46.06' },
                        { questionNo: 'BGN46', questionTitle: '复杂的最大公约数', accept: null, questionUuid: '992a24ff72be4991bf099ae681bec68b', acceptRate: '54.90' },
                        { questionNo: 'BGN47', questionTitle: '小红和小紫的取素因子游戏', accept: true, questionUuid: '6146f391a69547c4804fe8d0330f1745', acceptRate: '43.16' },
                        { questionNo: 'BGN48', questionTitle: '矩形游戏', accept: null, questionUuid: '5b6c2c824a434b55a5e3b77619c54a90', acceptRate: '48.89' },
                        { questionNo: 'BGN49', questionTitle: '游游的最小公倍数', accept: true, questionUuid: '385c7aa397e54bb58f36286ab0d65156', acceptRate: '34.61' },
                        { questionNo: 'BGN50', questionTitle: '小红走网格', accept: null, questionUuid: '43498993d39246c58e35ca715faea7ab', acceptRate: '42.10' },
                    ]
                },
                {
                    id: 'c2-7', name: '前缀和与差分数组', x: '78%', y: '70%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN51', questionTitle: '【模板】静态区间和（前缀和）', accept: true, questionUuid: 'ac79a1a4a66646cc87525d6faa86e021', acceptRate: '44.49' },
                        { questionNo: 'BGN52', questionTitle: '【模板】差分', accept: true, questionUuid: '4bbc401a5df140309edd6f14debdba42', acceptRate: '34.41' },
                        { questionNo: 'BGN53', questionTitle: '舞萌时间到！', accept: null, questionUuid: 'cef5fe464ca54a10ba1b4374f423f09c', acceptRate: '45.05' },
                        { questionNo: 'BGN54', questionTitle: '牛牛与切割机', accept: null, questionUuid: 'cda06078a54142d29da7adc3b9ad5880', acceptRate: '32.55' },
                        { questionNo: 'BGN55', questionTitle: '植树节', accept: null, questionUuid: 'bf18f4e68f614b35a7a6c56c743d82fc', acceptRate: '42.86' },
                        { questionNo: 'BGN56', questionTitle: '【模板】二维前缀和', accept: null, questionUuid: '99eb8040d116414ea3296467ce81cbbc', acceptRate: '35.51' },
                        { questionNo: 'BGN57', questionTitle: '【模板】二维差分', accept: null, questionUuid: '50e1a93989df42efb0b1dec386fb4ccc', acceptRate: '46.65' },
                        { questionNo: 'BGN58', questionTitle: '空间跃迁', accept: null, questionUuid: 'e6ff2b0bf309412fb491e3276fb9f305', acceptRate: '40.91' },
                        { questionNo: 'BGN59', questionTitle: '卡牌游戏', accept: null, questionUuid: '717961865ee54e7e8839c0b93b6ee597', acceptRate: '55.17' },
                        { questionNo: 'BGN60', questionTitle: '染色', accept: null, questionUuid: 'fb48f6284a0f4e198f0bf2a988f703f8', acceptRate: '31.67' },
                        { questionNo: 'BGN61', questionTitle: '斐波那契字符串', accept: null, questionUuid: '704ed5d1c4a34227a85e07ff80025351', acceptRate: '25.74' },
                        { questionNo: 'BGN62', questionTitle: 'mex', accept: null, questionUuid: 'da138098ed74405db63e0d75a9878acc', acceptRate: '24.44' },
                    ]
                },
                {
                    id: 'c2-8', name: '简单动态规划', x: '60%', y: '78%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN63', questionTitle: '数楼梯', accept: null, questionUuid: 'c7e5f164fa5d471f8f83c90fe4ee3f05', acceptRate: '39.72' },
                        { questionNo: 'BGN64', questionTitle: '硬币凑钱', accept: null, questionUuid: 'a9228c3f450749a5bc8edd2f0e7b90e9', acceptRate: '45.34' },
                        { questionNo: 'BGN65', questionTitle: '小红的地砖', accept: null, questionUuid: '8cd083c66a5f43489a532164e2a2304d', acceptRate: '59.70' },
                        { questionNo: 'BGN66', questionTitle: '最长不下降子序列', accept: null, questionUuid: '25da45d0d4fb4faba45094cbb0649062', acceptRate: '37.37' },
                        { questionNo: 'BGN67', questionTitle: '撞车', accept: null, questionUuid: 'd8f779b417094dc1a7864712bb9b4c63', acceptRate: '22.04' },
                        { questionNo: 'BGN68', questionTitle: '最大子段和', accept: null, questionUuid: 'f04519cd1d904f50b68f4229a126ab08', acceptRate: '30.71' },
                        { questionNo: 'BGN69', questionTitle: '三角形取数(Hard Version)', accept: null, questionUuid: 'ceea5825472940dabfec917ef93538e6', acceptRate: '32.39' },
                        { questionNo: 'BGN70', questionTitle: '【模板】01背包', accept: null, questionUuid: 'fd55637d3f24484e96dad9e992d3f62e', acceptRate: '29.41' },
                    ]
                },
                {
                    id: 'c2-9', name: '构造算法', x: '40%', y: '82%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN71', questionTitle: '构造C的歪', accept: null, questionUuid: '56735b3fe2fc4ed5916f5427dc787156', acceptRate: '74.40' },
                        { questionNo: 'BGN72', questionTitle: '茉茉的密码', accept: true, questionUuid: '016a87b3015c448da67974d1d731d7ef', acceptRate: '37.37' },
                        { questionNo: 'BGN73', questionTitle: '构造数对', accept: null, questionUuid: 'c16b86c1149a43eaaa0fd85aaee51290', acceptRate: '48.98' },
                        { questionNo: 'BGN74', questionTitle: '构造数独', accept: null, questionUuid: 'bf8ffcbf95f743d7bbb2dd96bafa1a3c', acceptRate: '75.00' },
                        { questionNo: 'BGN75', questionTitle: '构造三角形', accept: null, questionUuid: '6babfd36cb6542c1aa31ceb016c393a5', acceptRate: '62.50' },
                        { questionNo: 'BGN76', questionTitle: '小红的排列构造①', accept: true, questionUuid: '2b0a9318cc0740d1a78eec06162e7bea', acceptRate: '28.25' },
                        { questionNo: 'BGN77', questionTitle: '构造数列', accept: null, questionUuid: '392c2659f7c34cebb37b921342dd39ea', acceptRate: '73.68' },
                        { questionNo: 'BGN78', questionTitle: '小红的排列构造②', accept: null, questionUuid: 'a4ec29e74aaa450aa8a4200fe3b06308', acceptRate: '46.33' },
                        { questionNo: 'BGN79', questionTitle: '游游的排列构造', accept: true, questionUuid: 'daface8be3a74d79aac27e56b067f1b0', acceptRate: '56.52' },
                    ]
                },
                {
                    id: 'c2-10', name: '位运算', x: '20%', y: '75%', type: 'lava',
                    problems: [
                        { questionNo: 'BGN80', questionTitle: '二进制数1', accept: null, questionUuid: 'bc4c7936f5ed42cbb9131b6f39aa272b', acceptRate: '22.34' },
                        { questionNo: 'BGN81', questionTitle: '二进制不同位数', accept: null, questionUuid: 'daf9032926614dab91ca624a7759a868', acceptRate: '48.56' },
                        { questionNo: 'BGN82', questionTitle: '被打乱的异或和', accept: null, questionUuid: '116db6858c424fb89b821125053bbc15', acceptRate: '63.18' },
                        { questionNo: 'BGN83', questionTitle: '完美异或', accept: null, questionUuid: 'df2d0b1e250b4995a7cda77bf1065cf1', acceptRate: '62.62' },
                        { questionNo: 'BGN84', questionTitle: '最长异或公共子段', accept: null, questionUuid: '2b25c51da0c547cf80a29a3f11c7dd84', acceptRate: '66.67' },
                        { questionNo: 'BGN85', questionTitle: 'Poi 的新加法（Easy Version）', accept: null, questionUuid: '9f766daa7e4042a786633c341fe9d7e2', acceptRate: '60.00' },
                        { questionNo: 'BGN86', questionTitle: '牛妹的位运算', accept: null, questionUuid: '7f131dd26f4043839d0342ed6f65ddf3', acceptRate: '19.10' },
                    ]
                }
            ]
        },
        {
            id: 'advanced',
            name: '第三站 - 算法进阶',
            image: 'https://uploadfiles.nowcoder.com/images/20250725/0_1753414624945/A2FB028DA5DB82B9840C87926133B273',
            chapters: [
                {
                    id: 'c3-2', name: '数论进阶', x: '50%', y: '20%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH1', questionTitle: '小美的外卖订单编号', accept: true, questionUuid: '91506d447f3445c999a27d556e530a37', acceptRate: '24.00' },
                        { questionNo: 'HIGH2', questionTitle: '数字的情绪', accept: true, questionUuid: 'b1b9a88d8e3946e993232e2525f6a11c', acceptRate: '23.31' },
                        { questionNo: 'HIGH3', questionTitle: '阶乘末尾非零数字', accept: true, questionUuid: '248c8fbee56e491aa147b67b9c082da0', acceptRate: '13.36' },
                        { questionNo: 'HIGH4', questionTitle: '分解质因数', accept: true, questionUuid: '35723516d6f841ca8869ecbcf3ddacaf', acceptRate: '45.75' },
                        { questionNo: 'HIGH5', questionTitle: '小红和小紫的取素因子游戏', accept: true, questionUuid: '6146f391a69547c4804fe8d0330f1745', acceptRate: '43.16' },
                        { questionNo: 'HIGH6', questionTitle: '最小乘积代价和', accept: true, questionUuid: '0096a5fa8a344a099be103e2d9395cc4', acceptRate: '61.79' },
                        { questionNo: 'HIGH7', questionTitle: '小苯的数字权值', accept: true, questionUuid: 'aeacca655eec45999a6dc4d998dfd4a5', acceptRate: '35.43' },
                        { questionNo: 'HIGH8', questionTitle: '筛法判断质数', accept: true, questionUuid: '8afab457ef11456d8602ce6dc30db776', acceptRate: '36.36' },
                        { questionNo: 'HIGH9', questionTitle: '质数统计', accept: true, questionUuid: 'd832b0c1a0bd4394a3229f06c6f0b50b', acceptRate: '32.13' },
                        { questionNo: 'HIGH10', questionTitle: '素数对', accept: true, questionUuid: '9aaa288943e7498a9626d4f4f12ced4c', acceptRate: '38.82' },
                    ]
                },
                {
                    id: 'c3-3', name: '递归算法', x: '70%', y: '30%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH11', questionTitle: '大水题', accept: true, questionUuid: '6b9770de551c426287252421742f6ebf', acceptRate: '89.81' },
                        { questionNo: 'HIGH12', questionTitle: '小q的数列', accept: true, questionUuid: '8ea1e0d996f64e15961ae42e658a04a7', acceptRate: '38.93' },
                        { questionNo: 'HIGH13', questionTitle: '括号匹配深度', accept: true, questionUuid: 'a2d5b1875bb0408384278f40d1f236c9', acceptRate: '33.14' },
                        { questionNo: 'HIGH14', questionTitle: '斐波那契数列', accept: true, questionUuid: 'c245af6cfdce49ceb5435f649ee14f89', acceptRate: '44.05' },
                        { questionNo: 'HIGH15', questionTitle: '计算阶乘', accept: true, questionUuid: 'b93729ad46d74a62801bdc320be2aa8e', acceptRate: '38.57' },
                        { questionNo: 'HIGH16', questionTitle: '【模板】快速幂Ⅰ ‖ 整数', accept: true, questionUuid: '3d624107a6904da1bd0e8c9c85e17167', acceptRate: '58.66' },
                        { questionNo: 'HIGH17', questionTitle: '【模板】分数取模', accept: true, questionUuid: '23839ef20d5f4dbaa9664daa51864291', acceptRate: '60.34' },
                        { questionNo: 'HIGH18', questionTitle: '子数列求积', accept: true, questionUuid: '5daab034da954f5697dcf96c1808d34f', acceptRate: '29.91' },
                        { questionNo: 'HIGH19', questionTitle: '好多次方', accept: true, questionUuid: '8bf1186260634b209b5cff362da45305', acceptRate: '35.42' },
                        { questionNo: 'HIGH20', questionTitle: '放苹果', accept: true, questionUuid: 'bfd8234bb5e84be0b493656e390bdebf', acceptRate: '48.40' },
                    ]
                },
                {
                    id: 'c3-4', name: '简单组合数学', x: '85%', y: '50%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH21', questionTitle: '穿搭大挑战', accept: true, questionUuid: 'cd190da0f3614a8393c84981a11d024e', acceptRate: '54.65' },
                        { questionNo: 'HIGH22', questionTitle: '刷题统计', accept: true, questionUuid: '99ddb1a6e71d47dcbbe4f272aba532b8', acceptRate: '92.86' },
                        { questionNo: 'HIGH23', questionTitle: '墙壁划线', accept: true, questionUuid: 'e197f9012fe74c4a9d003094bb3a2988', acceptRate: '42.17' },
                        { questionNo: 'HIGH24', questionTitle: '[HNOI2008]越狱', accept: true, questionUuid: '33d5016548d84cbe8cdb08ca0c13c2f1', acceptRate: '44.07' },
                        { questionNo: 'HIGH25', questionTitle: '前缀平方和序列', accept: true, questionUuid: '51101e7b91064da8a10dbfd8c9217119', acceptRate: '41.07' },
                        { questionNo: 'HIGH26', questionTitle: '分割序列', accept: true, questionUuid: 'f49a64748c2344c1be65f9be417a495a', acceptRate: '46.27' },
                        { questionNo: 'HIGH27', questionTitle: '礼物清单', accept: true, questionUuid: 'df443fe5b05f4d748922584265bfcf98', acceptRate: '64.52' },
                        { questionNo: 'HIGH28', questionTitle: '矩形计数', accept: true, questionUuid: '0ece8b3002c94320b8866ff0fc5d5fe0', acceptRate: '50.00' },
                        { questionNo: 'HIGH29', questionTitle: '【模板】组合数', accept: true, questionUuid: '53f82db091b2452bae5fef4437ffd0bb', acceptRate: '46.67' },
                        { questionNo: 'HIGH30', questionTitle: '人员分组问题', accept: true, questionUuid: '482f31bf028f46aa9b7882a4b921ffcf', acceptRate: '43.90' },
                        { questionNo: 'HIGH31', questionTitle: '长椅安置', accept: true, questionUuid: '35ed6ac93abc43e39fe2fe3fb49ee9fc', acceptRate: '58.33' },
                        { questionNo: 'HIGH32', questionTitle: '中位数之和', accept: true, questionUuid: '4bc8c3535b8e488eb608c73f8946d9cb', acceptRate: '34.78' },
                    ]
                },
                {
                    id: 'c3-5', name: '深度优先搜索', x: '70%', y: '70%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH33', questionTitle: '迷宫寻路', accept: null, questionUuid: '0c8930e517444d04b426e9703d483ed4', acceptRate: '44.34' },
                        { questionNo: 'HIGH34', questionTitle: '数水坑', accept: null, questionUuid: '664ca4289fcf457ba3109fdf4a7a1a05', acceptRate: '64.52' },
                        { questionNo: 'HIGH35', questionTitle: '全排列', accept: null, questionUuid: '1d1fe38275da44b5848add89f9e223b1', acceptRate: '60.00' },
                        { questionNo: 'HIGH36', questionTitle: '膜意义下最大子序列和', accept: null, questionUuid: '540ed4ee356c434bb3f96c67521b6671', acceptRate: '35.48' },
                        { questionNo: 'HIGH37', questionTitle: '取数游戏', accept: null, questionUuid: 'b002b8eb564245fdbb8a02db8dcf03e4', acceptRate: '61.54' },
                        { questionNo: 'HIGH38', questionTitle: '数组分组', accept: null, questionUuid: '9af744a3517440508dbeb297020aca86', acceptRate: '25.64' },
                        { questionNo: 'HIGH39', questionTitle: '实现字通配符*', accept: null, questionUuid: 'bab19e5b95b54744aa824e0d7be51487', acceptRate: '14.25' },
                        { questionNo: 'HIGH40', questionTitle: 'kotori和素因子', accept: null, questionUuid: '7b1c858a3e7a41ed8364178979eaae67', acceptRate: '38.52' },
                        { questionNo: 'HIGH41', questionTitle: '火车进站', accept: null, questionUuid: '97ba57c35e9f4749826dc3befaeae109', acceptRate: '44.09' },
                        { questionNo: 'HIGH42', questionTitle: '小A的线段（easy version）', accept: null, questionUuid: '03950e31758643d2924601b6dd466c24', acceptRate: '50.00' },
                    ]
                },
                {
                    id: 'c3-6', name: '广度优先搜索', x: '50%', y: '80%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH43', questionTitle: '走迷宫', accept: null, questionUuid: 'e88b41dc6e764b2893bc4221777ffe64', acceptRate: '24.59' },
                        { questionNo: 'HIGH44', questionTitle: '剪纸游戏', accept: true, questionUuid: '33054daa2cc04fd6b97a0d18ccfc66a0', acceptRate: '63.33' },
                        { questionNo: 'HIGH45', questionTitle: '挡住洪水', accept: null, questionUuid: '56e54f4c2e3c4a58abfe76dbc1da1d7e', acceptRate: '22.81' },
                        { questionNo: 'HIGH46', questionTitle: '没挡住洪水', accept: null, questionUuid: '6d62436fda5f4ef997e68d1ce1dd6eb2', acceptRate: '37.50' },
                        { questionNo: 'HIGH47', questionTitle: '迷宫问题', accept: null, questionUuid: 'cf24906056f4488c9ddb132f317e03bc', acceptRate: '34.09' },
                        { questionNo: 'HIGH48', questionTitle: '迷宫', accept: null, questionUuid: '7387750c12e0401abe2ad6e9b45258f5', acceptRate: '55.56' },
                        { questionNo: 'HIGH49', questionTitle: '走一个大整数迷宫', accept: null, questionUuid: '5e28adbc58a443808dead63044a5a079', acceptRate: '100.00' },
                        { questionNo: 'HIGH50', questionTitle: 'ACM中的AC题', accept: null, questionUuid: 'b56db882e9f94aed81b0a9d00da0ebff', acceptRate: '42.86' },
                        { questionNo: 'HIGH51', questionTitle: '时津风的资源收集', accept: true, questionUuid: '5a6f83a0e0214ba5a77f6cdc71a3027b', acceptRate: '42.46' },
                        { questionNo: 'HIGH52', questionTitle: '太阳系DISCO', accept: null, questionUuid: 'b9a31be4b1dd43c3b96d6bb3c178a5cd', acceptRate: '100.00' },
                        { questionNo: 'HIGH53', questionTitle: '小红的皇后', accept: null, questionUuid: '15fc1513621145d9bb53260e8c0c24c2', acceptRate: '23.08' },
                    ]
                },
                {
                    id: 'c3-7', name: '简单树论与图论', x: '30%', y: '70%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH54', questionTitle: '【模板】链式前向星', accept: null, questionUuid: '23f622c8b15f4b37bffe1a986eeea185', acceptRate: '65.52' },
                        { questionNo: 'HIGH55', questionTitle: '求树的根', accept: null, questionUuid: 'e5a97317b37d46dcb10dd5dce66a2ec4', acceptRate: '51.35' },
                        { questionNo: 'HIGH56', questionTitle: '上司的舞会', accept: null, questionUuid: '45c6d97dfd1044769aed5d9d3f139be1', acceptRate: '88.89' },
                        { questionNo: 'HIGH57', questionTitle: '先序遍历、中序遍历和后序遍历', accept: null, questionUuid: '15fdb346838545d0b272e43957e1cb2a', acceptRate: '48.00' },
                        { questionNo: 'HIGH58', questionTitle: '小红的树上游戏', accept: null, questionUuid: '0f7ab6d60bad4cd9b99d7df885521054', acceptRate: '68.00' },
                        { questionNo: 'HIGH59', questionTitle: '图的分类', accept: null, questionUuid: 'e2ded1a877d6477a9d37c6d1765c5377', acceptRate: '41.94' },
                        { questionNo: 'HIGH60', questionTitle: '旺仔哥哥走迷宫', accept: null, questionUuid: '4b4ee516c23d4bd2b838646363b5c395', acceptRate: '76.92' },
                        { questionNo: 'HIGH61', questionTitle: '鞋带难题', accept: null, questionUuid: '04238c060cce4e14a9e2d885836174c0', acceptRate: '62.50' },
                        { questionNo: 'HIGH62', questionTitle: '谍中谍中谍中谍中谍...', accept: null, questionUuid: 'ee1246384c9b4066b67043ebb37fd9c9', acceptRate: '88.89' },
                        { questionNo: 'HIGH63', questionTitle: '我朋友的朋友不是我的朋友', accept: null, questionUuid: '9656866233614f4191f5555a0cdcae4b', acceptRate: '70.00' },
                        { questionNo: 'HIGH64', questionTitle: '二分图判定', accept: null, questionUuid: 'f4b8d0481c7b4278b9b406b636e3c7db', acceptRate: '38.33' },
                        { questionNo: 'HIGH65', questionTitle: '世界树上找米库', accept: null, questionUuid: '9dd512f784b24ece85c81600aa3bc06c', acceptRate: '90.91' },
                    ]
                },
                {
                    id: 'c3-8', name: '双指针', x: '15%', y: '50%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH66', questionTitle: '【模板】滑动窗口', accept: null, questionUuid: 'be419f584a3f4c5b818833f1ce856626', acceptRate: '60.00' },
                        { questionNo: 'HIGH67', questionTitle: '可匹配子段计数', accept: null, questionUuid: 'cfc8ae6269cd445d83686f12da66023c', acceptRate: '46.67' },
                        { questionNo: 'HIGH68', questionTitle: '【模板】双指针', accept: null, questionUuid: 'a2fd81391e1e4177aa6d506da895381b', acceptRate: '00.10' },
                        { questionNo: 'HIGH69', questionTitle: '小苯的IDE括号问题（easy）', accept: null, questionUuid: '0a526c7863474220aaef082ab5f2a00a', acceptRate: '37.21' },
                        { questionNo: 'HIGH70', questionTitle: '游游的最长稳定子数组', accept: true, questionUuid: 'ea7098b7960348f6915e252f0c4debcc', acceptRate: '35.40' },
                        { questionNo: 'HIGH71', questionTitle: '相差不超过k的最多数', accept: null, questionUuid: '562630ca90ac40ce89443c91060574c6', acceptRate: '25.11' },
                        { questionNo: 'HIGH72', questionTitle: '画展布置', accept: null, questionUuid: '4082da66f6034a1d9b6a7206e1d0445a', acceptRate: '42.86' },
                        { questionNo: 'HIGH73', questionTitle: '小红的01子序列构造（easy）', accept: null, questionUuid: 'ee0b6c6baa2642c182df8b4390126f9a', acceptRate: '22.52' },
                        { questionNo: 'HIGH74', questionTitle: '？？？', accept: null, questionUuid: 'b6b8bfcde03841e4880c2b9ef00329c6', acceptRate: '85.71' },
                    ]
                },
                {
                    id: 'c3-9', name: '分治算法', x: '30%', y: '30%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH75', questionTitle: '【模板】整数域二分', accept: null, questionUuid: 'd483ab6bf19245518730a75c6ea108ae', acceptRate: '60.71' },
                        { questionNo: 'HIGH76', questionTitle: '音符', accept: null, questionUuid: 'fbef4a433583436cbf1a7861a5c110d7', acceptRate: '93.33' },
                        { questionNo: 'HIGH77', questionTitle: '圆覆盖', accept: true, questionUuid: '4f96afe5dfe74dad88dbe419d33f9536', acceptRate: '31.34' },
                        { questionNo: 'HIGH78', questionTitle: '[CQOI2010]扑克牌', accept: null, questionUuid: 'b77ff162bbab446993913fd684489cde', acceptRate: '55.56' },
                        { questionNo: 'HIGH79', questionTitle: '小苯的魔法染色', accept: true, questionUuid: '2e27509b990d4d02a70c0f208f078cdf', acceptRate: '21.67' },
                        { questionNo: 'HIGH80', questionTitle: '小红的矩阵', accept: null, questionUuid: 'eec2ed5b48b04a1492209ba08593a830', acceptRate: '54.17' },
                        { questionNo: 'HIGH81', questionTitle: '山峰数组计数', accept: true, questionUuid: 'aac1989d183d4e6daf6ee2e1ca62b50c', acceptRate: '47.06' },
                        { questionNo: 'HIGH82', questionTitle: '整点巧克力', accept: null, questionUuid: 'e00ad43c2f774191a81c177f1453e554', acceptRate: '22.58' },
                        { questionNo: 'HIGH83', questionTitle: '【入门班】借教室', accept: null, questionUuid: '30e98ccffccd4416a48cca95dc46b6ff', acceptRate: '70.00' },
                        { questionNo: 'HIGH84', questionTitle: '四值零和', accept: null, questionUuid: '81d71c70fce2497d8b36f6cf51b66477', acceptRate: '43.75' },
                        { questionNo: 'HIGH85', questionTitle: '【入门班】第k大与第m大', accept: null, questionUuid: '58debfa9e0004cf4842d05c8145918f6', acceptRate: '36.59' },
                    ]
                },
                {
                    id: 'c3-10', name: '动态规划进阶', x: '50%', y: '50%', type: 'ocean',
                    problems: [
                        { questionNo: 'HIGH86', questionTitle: '【模板】完全背包', accept: null, questionUuid: 'deda4293d9b24ce1aeaf1813c88b8c25', acceptRate: '24.10' },
                        { questionNo: 'HIGH87', questionTitle: '【模板】多重背包', accept: true, questionUuid: '8fa10063d33a43dd9652c1511a34d461', acceptRate: '41.50' },
                        { questionNo: 'HIGH88', questionTitle: '【模板】二维费用背包', accept: true, questionUuid: '84b88177894c4c82980017e6b4a15fb3', acceptRate: '38.89' },
                        { questionNo: 'HIGH89', questionTitle: '【模板】分组背包', accept: null, questionUuid: '32a6c222213c42efa902da6b5c9f8e99', acceptRate: '44.12' },
                        { questionNo: 'HIGH90', questionTitle: '小红笔试', accept: null, questionUuid: '168b15b8d1ad4341ae051e0c6a0cf3a2', acceptRate: '42.11' },
                        { questionNo: 'HIGH91', questionTitle: '来硬的', accept: null, questionUuid: '08dbc77ec79942c1914b002f488b87ee', acceptRate: '40.00' },
                        { questionNo: 'HIGH92', questionTitle: '最大学分', accept: null, questionUuid: '66403297dfe04faaacf7d0e905fea7ac', acceptRate: '100.00' },
                        { questionNo: 'HIGH93', questionTitle: '没有上司的舞会', accept: null, questionUuid: 'f703237089ee42d9b37e01d70e14e2fc', acceptRate: '52.38' },
                        { questionNo: 'HIGH94', questionTitle: '食物链计数', accept: null, questionUuid: '9844dd9f531e46e29f5749e8fcc4bd0b', acceptRate: '33.33' },
                        { questionNo: 'HIGH95', questionTitle: '石子合并', accept: null, questionUuid: '237337887b094938bfc6e9557f92c3e9', acceptRate: '93.75' },
                        { questionNo: 'HIGH96', questionTitle: '能量项链', accept: null, questionUuid: '09eda848be704ce298d73b0d3b6834b0', acceptRate: '85.71' },
                        { questionNo: 'HIGH97', questionTitle: '切割 01 串 2.0', accept: null, questionUuid: '91805e62c5754e199089a0d6031de415', acceptRate: '66.67' },
                        { questionNo: 'HIGH98', questionTitle: '小红删数字', accept: null, questionUuid: 'a246d1e2b38e454985ac1400591d6175', acceptRate: '12.50' },
                        { questionNo: 'HIGH99', questionTitle: '我不是大富翁', accept: null, questionUuid: '223ba8cdb1864f71818f91463b7d05a7', acceptRate: '66.67' },
                        { questionNo: 'HIGH100', questionTitle: '收集金币', accept: null, questionUuid: 'bde230df252c4b41a059c9b06fcf65b6', acceptRate: '54.55' },
                        { questionNo: 'HIGH101', questionTitle: '小红的暑假', accept: true, questionUuid: '6770931d7bb74c29863c23c375907c33', acceptRate: '11.93' },
                        { questionNo: 'HIGH102', questionTitle: '旅行者的大逃脱', accept: null, questionUuid: '3a02e2b818144c2dbad8dd3dc28d04cf', acceptRate: '42.27' },
                    ]
                }
            ]
        },
        {
            id: 'peak',
            name: '最终章 - 算法之巅',
            status: 'locked'
        }
    ]
}; 
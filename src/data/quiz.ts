import { QuizQuestion } from '../types';

// 小学词汇测试题库
const elementaryQuestions: QuizQuestion[] = [
  { id: 'e1', word: 'apple', phonetic: '/ˈæp.əl/', correctAnswer: '苹果', options: ['苹果', '香蕉', '橙子', '葡萄'], level: 'elementary' },
  { id: 'e2', word: 'book', phonetic: '/bʊk/', correctAnswer: '书', options: ['书', '笔', '桌子', '椅子'], level: 'elementary' },
  { id: 'e3', word: 'cat', phonetic: '/kæt/', correctAnswer: '猫', options: ['狗', '猫', '鸟', '鱼'], level: 'elementary' },
  { id: 'e4', word: 'dog', phonetic: '/dɒɡ/', correctAnswer: '狗', options: ['猫', '狗', '老鼠', '兔子'], level: 'elementary' },
  { id: 'e5', word: 'egg', phonetic: '/eɡ/', correctAnswer: '鸡蛋', options: ['牛奶', '鸡蛋', '面包', '水'], level: 'elementary' },
  { id: 'e6', word: 'fish', phonetic: '/fɪʃ/', correctAnswer: '鱼', options: ['鸟', '猫', '鱼', '狗'], level: 'elementary' },
  { id: 'e7', word: 'girl', phonetic: '/ɡɜːl/', correctAnswer: '女孩', options: ['男孩', '女孩', '男人', '女人'], level: 'elementary' },
  { id: 'e8', word: 'hand', phonetic: '/hænd/', correctAnswer: '手', options: ['脚', '手', '头', '眼睛'], level: 'elementary' },
  { id: 'e9', word: 'ice', phonetic: '/aɪs/', correctAnswer: '冰', options: ['水', '冰', '火', '空气'], level: 'elementary' },
  { id: 'e10', word: 'jump', phonetic: '/dʒʌmp/', correctAnswer: '跳', options: ['跑', '跳', '走', '坐'], level: 'elementary' },
  { id: 'e11', word: 'king', phonetic: '/kɪŋ/', correctAnswer: '国王', options: ['国王', '王后', '王子', '公主'], level: 'elementary' },
  { id: 'e12', word: 'lion', phonetic: '/ˈlaɪ.ən/', correctAnswer: '狮子', options: ['老虎', '狮子', '熊', '大象'], level: 'elementary' },
  { id: 'e13', word: 'moon', phonetic: '/muːn/', correctAnswer: '月亮', options: ['太阳', '月亮', '星星', '天空'], level: 'elementary' },
  { id: 'e14', word: 'nest', phonetic: '/nest/', correctAnswer: '鸟巢', options: ['家', '鸟巢', '树', '花'], level: 'elementary' },
  { id: 'e15', word: 'orange', phonetic: '/ˈɒr.ɪndʒ/', correctAnswer: '橙子', options: ['苹果', '香蕉', '橙子', '葡萄'], level: 'elementary' },
  { id: 'e16', word: 'pen', phonetic: '/pen/', correctAnswer: '钢笔', options: ['铅笔', '钢笔', '橡皮', '尺子'], level: 'elementary' },
  { id: 'e17', word: 'queen', phonetic: '/kwiːn/', correctAnswer: '王后', options: ['国王', '王后', '王子', '公主'], level: 'elementary' },
  { id: 'e18', word: 'rain', phonetic: '/reɪn/', correctAnswer: '雨', options: ['雨', '雪', '风', '云'], level: 'elementary' },
  { id: 'e19', word: 'sun', phonetic: '/sʌn/', correctAnswer: '太阳', options: ['太阳', '月亮', '星星', '地球'], level: 'elementary' },
  { id: 'e20', word: 'tree', phonetic: '/triː/', correctAnswer: '树', options: ['花', '草', '树', '灌木'], level: 'elementary' },
  { id: 'e21', word: 'umbrella', phonetic: '/ʌmˈbrel.ə/', correctAnswer: '伞', options: ['伞', '帽子', '手套', '围巾'], level: 'elementary' },
  { id: 'e22', word: 'violin', phonetic: '/ˌvaɪ.əˈlɪn/', correctAnswer: '小提琴', options: ['钢琴', '小提琴', '吉他', '鼓'], level: 'elementary' },
  { id: 'e23', word: 'water', phonetic: '/ˈwɔː.tər/', correctAnswer: '水', options: ['水', '牛奶', '果汁', '茶'], level: 'elementary' },
  { id: 'e24', word: 'yellow', phonetic: '/ˈjel.oʊ/', correctAnswer: '黄色', options: ['红色', '黄色', '蓝色', '绿色'], level: 'elementary' },
  { id: 'e25', word: 'zoo', phonetic: '/zuː/', correctAnswer: '动物园', options: ['公园', '动物园', '花园', '森林'], level: 'elementary' },
  { id: 'e26', word: 'ball', phonetic: '/bɔːl/', correctAnswer: '球', options: ['球', '玩具', '娃娃', '积木'], level: 'elementary' },
  { id: 'e27', word: 'car', phonetic: '/kɑːr/', correctAnswer: '汽车', options: ['自行车', '汽车', '公交车', '火车'], level: 'elementary' },
  { id: 'e28', word: 'day', phonetic: '/deɪ/', correctAnswer: '天', options: ['天', '夜', '周', '月'], level: 'elementary' },
  { id: 'e29', word: 'eye', phonetic: '/aɪ/', correctAnswer: '眼睛', options: ['耳朵', '眼睛', '鼻子', '嘴巴'], level: 'elementary' },
  { id: 'e30', word: 'face', phonetic: '/feɪs/', correctAnswer: '脸', options: ['头', '脸', '身体', '手臂'], level: 'elementary' },
];

// 初中词汇测试题库
const juniorQuestions: QuizQuestion[] = [
  { id: 'j1', word: 'achieve', phonetic: '/əˈtʃiːv/', correctAnswer: '达到', options: ['尝试', '达到', '失败', '放弃'], level: 'junior' },
  { id: 'j2', word: 'believe', phonetic: '/bɪˈliːv/', correctAnswer: '相信', options: ['怀疑', '相信', '知道', '猜'], level: 'junior' },
  { id: 'j3', word: 'complete', phonetic: '/kəmˈpliːt/', correctAnswer: '完成', options: ['开始', '完成', '停止', '继续'], level: 'junior' },
  { id: 'j4', word: 'decide', phonetic: '/dɪˈsaɪd/', correctAnswer: '决定', options: ['决定', '怀疑', '希望', '需要'], level: 'junior' },
  { id: 'j5', word: 'except', phonetic: '/ɪkˈsept/', correctAnswer: '除了', options: ['包括', '除了', '关于', '由于'], level: 'junior' },
  { id: 'j6', word: 'foreign', phonetic: '/ˈfɒr.ən/', correctAnswer: '外国的', options: ['本国的', '外国的', '当地的', '城市的'], level: 'junior' },
  { id: 'j7', word: 'graduate', phonetic: '/ˈɡrædʒ.u.eɪt/', correctAnswer: '毕业', options: ['入学', '毕业', '考试', '学习'], level: 'junior' },
  { id: 'j8', word: 'however', phonetic: '/haʊˈev.ər/', correctAnswer: '然而', options: ['因为', '所以', '然而', '但是'], level: 'junior' },
  { id: 'j9', word: 'increase', phonetic: '/ɪnˈkriːs/', correctAnswer: '增加', options: ['减少', '增加', '保持', '改变'], level: 'junior' },
  { id: 'j10', word: 'knowledge', phonetic: '/ˈnɒl.ɪdʒ/', correctAnswer: '知识', options: ['信息', '知识', '书籍', '学校'], level: 'junior' },
  { id: 'j11', word: 'language', phonetic: '/ˈlæŋ.ɡwɪdʒ/', correctAnswer: '语言', options: ['语言', '文字', '词汇', '语法'], level: 'junior' },
  { id: 'j12', word: 'maintain', phonetic: '/meɪnˈteɪn/', correctAnswer: '维持', options: ['维持', '改变', '破坏', '建立'], level: 'junior' },
  { id: 'j13', word: 'necessary', phonetic: '/ˈnes.ə.ser.i/', correctAnswer: '必要的', options: ['可能的', '必要的', '困难的', '简单的'], level: 'junior' },
  { id: 'j14', word: 'obtain', phonetic: '/əbˈteɪn/', correctAnswer: '获得', options: ['失去', '获得', '给予', '借'], level: 'junior' },
  { id: 'j15', word: 'particular', phonetic: '/pəˈtɪk.jə.lər/', correctAnswer: '特别的', options: ['普通的', '特别的', '相同的', '不同的'], level: 'junior' },
  { id: 'j16', word: 'question', phonetic: '/ˈkwestʃən/', correctAnswer: '问题', options: ['答案', '问题', '考试', '老师'], level: 'junior' },
  { id: 'j17', word: 'recent', phonetic: '/ˈriː.sənt/', correctAnswer: '最近的', options: ['过去的', '未来的', '最近的', '现在的'], level: 'junior' },
  { id: 'j18', word: 'several', phonetic: '/ˈsev.ər.əl/', correctAnswer: '几个', options: ['一个', '几个', '许多', '没有'], level: 'junior' },
  { id: 'j19', word: 'therefore', phonetic: '/ˈðeə.fɔːr/', correctAnswer: '因此', options: ['因为', '虽然', '因此', '但是'], level: 'junior' },
  { id: 'j20', word: 'usually', phonetic: '/ˈjuː.ʒu.ə.li/', correctAnswer: '通常', options: ['从不', '有时', '通常', '总是'], level: 'junior' },
  { id: 'j21', word: 'various', phonetic: '/ˈveə.ri.əs/', correctAnswer: '各种的', options: ['相同的', '不同的', '各种的', '单一的'], level: 'junior' },
  { id: 'j22', word: 'whether', phonetic: '/ˈweð.ər/', correctAnswer: '是否', options: ['如果', '是否', '因为', '虽然'], level: 'junior' },
  { id: 'j23', word: 'ability', phonetic: '/əˈbɪl.ə.ti/', correctAnswer: '能力', options: ['困难', '能力', '机会', '原因'], level: 'junior' },
  { id: 'j24', word: 'business', phonetic: '/ˈbɪz.nəs/', correctAnswer: '商业', options: ['学校', '商业', '政府', '医院'], level: 'junior' },
  { id: 'j25', word: 'character', phonetic: '/ˈkær.ək.tər/', correctAnswer: '性格', options: ['外表', '性格', '身高', '年龄'], level: 'junior' },
  { id: 'j26', word: 'development', phonetic: '/dɪˈvel.əp.mənt/', correctAnswer: '发展', options: ['开始', '发展', '结束', '问题'], level: 'junior' },
  { id: 'j27', word: 'environment', phonetic: '/ɪnˈvaɪ.rən.mənt/', correctAnswer: '环境', options: ['家庭', '环境', '学校', '工作'], level: 'junior' },
  { id: 'j28', word: 'famous', phonetic: '/ˈfeɪ.məs/', correctAnswer: '著名的', options: ['普通的', '著名的', '新的', '旧的'], level: 'junior' },
  { id: 'j29', word: 'government', phonetic: '/ˈɡʌv.ən.mənt/', correctAnswer: '政府', options: ['学校', '政府', '公司', '医院'], level: 'junior' },
  { id: 'j30', word: 'happiness', phonetic: '/ˈhæp.i.nəs/', correctAnswer: '幸福', options: ['悲伤', '幸福', '愤怒', '恐惧'], level: 'junior' },
];

// 高中词汇测试题库
const seniorQuestions: QuizQuestion[] = [
  { id: 's1', word: 'abstract', phonetic: '/ˈæb.strækt/', correctAnswer: '抽象的', options: ['具体的', '抽象的', '简单的', '复杂的'], level: 'senior' },
  { id: 's2', word: 'adequate', phonetic: '/ˈæd.ɪ.kwət/', correctAnswer: '足够的', options: ['不足的', '足够的', '过多的', '适当的'], level: 'senior' },
  { id: 's3', word: 'analyze', phonetic: '/ˈæn.ə.laɪz/', correctAnswer: '分析', options: ['分析', '综合', '总结', '描述'], level: 'senior' },
  { id: 's4', word: 'appreciate', phonetic: '/əˈpriː.ʃi.eɪt/', correctAnswer: '欣赏', options: ['批评', '欣赏', '忽略', '贬低'], level: 'senior' },
  { id: 's5', word: 'approach', phonetic: '/əˈprəʊtʃ/', correctAnswer: '接近', options: ['远离', '接近', '接受', '拒绝'], level: 'senior' },
  { id: 's6', word: 'appropriate', phonetic: '/əˈprəʊ.pri.ət/', correctAnswer: '适当的', options: ['不适当的', '适当的', '必须的', '可选的'], level: 'senior' },
  { id: 's7', word: 'approximate', phonetic: '/əˈprɒk.sɪ.mət/', correctAnswer: '大约的', options: ['精确的', '大约的', '完整的', '部分的'], level: 'senior' },
  { id: 's8', word: 'available', phonetic: '/əˈveɪ.lə.bəl/', correctAnswer: '可用的', options: ['不可用的', '可用的', '必要的', '可选的'], level: 'senior' },
  { id: 's9', word: 'benefit', phonetic: '/ˈben.ɪ.fɪt/', correctAnswer: '利益', options: ['损失', '利益', '伤害', '危险'], level: 'senior' },
  { id: 's10', word: 'capable', phonetic: '/ˈkeɪ.pə.bəl/', correctAnswer: '有能力的', options: ['无能的', '有能力的', '懒惰的', '愚蠢的'], level: 'senior' },
  { id: 's11', word: 'circumstance', phonetic: '/ˈsɜː.kəm.stəns/', correctAnswer: '情况', options: ['行动', '情况', '原因', '结果'], level: 'senior' },
  { id: 's12', word: 'combine', phonetic: '/kəmˈbaɪn/', correctAnswer: '结合', options: ['分离', '结合', '比较', '对比'], level: 'senior' },
  { id: 's13', word: 'communicate', phonetic: '/kəˈmjuː.nɪ.keɪt/', correctAnswer: '交流', options: ['隔离', '交流', '隐藏', '展示'], level: 'senior' },
  { id: 's14', word: 'concentrate', phonetic: '/ˈkɒn.sən.treɪt/', correctAnswer: '集中', options: ['分散', '集中', '放松', '休息'], level: 'senior' },
  { id: 's15', word: 'concept', phonetic: '/ˈkɒn.sept/', correctAnswer: '概念', options: ['事实', '概念', '物体', '人物'], level: 'senior' },
  { id: 's16', word: 'conclude', phonetic: '/kənˈkluːd/', correctAnswer: '结束', options: ['开始', '结束', '继续', '暂停'], level: 'senior' },
  { id: 's17', word: 'consequence', phonetic: '/ˈkɒn.sɪ.kwəns/', correctAnswer: '结果', options: ['原因', '结果', '过程', '方法'], level: 'senior' },
  { id: 's18', word: 'considerable', phonetic: '/kənˈsɪd.ər.ə.bəl/', correctAnswer: '相当多的', options: ['少量的', '相当多的', '所有的', '没有的'], level: 'senior' },
  { id: 's19', word: 'contribute', phonetic: '/kənˈtrɪb.juːt/', correctAnswer: '贡献', options: ['索取', '贡献', '破坏', '减少'], level: 'senior' },
  { id: 's20', word: 'convenient', phonetic: '/kənˈviː.ni.ənt/', correctAnswer: '方便的', options: ['麻烦的', '方便的', '困难的', '危险的'], level: 'senior' },
  { id: 's21', word: 'correspond', phonetic: '/ˌkɒr.ɪˈspɒnd/', correctAnswer: '通信', options: ['同意', '通信', '反对', '等待'], level: 'senior' },
  { id: 's22', word: 'demonstrate', phonetic: '/ˈdem.ən.streɪt/', correctAnswer: '示范', options: ['隐藏', '示范', '假装', '否认'], level: 'senior' },
  { id: 's23', word: 'describe', phonetic: '/dɪˈskraɪb/', correctAnswer: '描述', options: ['描绘', '描述', '创造', '毁灭'], level: 'senior' },
  { id: 's24', word: 'determine', phonetic: '/dɪˈtɜː.mɪn/', correctAnswer: '决定', options: ['犹豫', '决定', '询问', '建议'], level: 'senior' },
  { id: 's25', word: 'devote', phonetic: '/dɪˈvəʊt/', correctAnswer: '献身', options: ['忽视', '献身', '讨厌', '恨'], level: 'senior' },
  { id: 's26', word: 'distinguish', phonetic: '/dɪˈstɪŋ.ɡwɪʃ/', correctAnswer: '区分', options: ['混淆', '区分', '比较', '联系'], level: 'senior' },
  { id: 's27', word: 'distribute', phonetic: '/dɪˈstrɪ.bjuːt/', correctAnswer: '分配', options: ['收集', '分配', '保留', '隐藏'], level: 'senior' },
  { id: 's28', word: 'economic', phonetic: '/ˌek.əˈnɒm.ɪk/', correctAnswer: '经济的', options: ['政治的', '经济的', '社会的', '文化的'], level: 'senior' },
  { id: 's29', word: 'eliminate', phonetic: '/ɪˈlɪm.ɪ.neɪt/', correctAnswer: '消除', options: ['添加', '消除', '保留', '增加'], level: 'senior' },
  { id: 's30', word: 'emphasize', phonetic: '/ˈem.fə.saɪz/', correctAnswer: '强调', options: ['忽视', '强调', '否认', '怀疑'], level: 'senior' },
];

// 合并所有题库
export const quizQuestions: QuizQuestion[] = [
  ...elementaryQuestions,
  ...juniorQuestions,
  ...seniorQuestions,
];

// 根据等级获取题目
export const getQuestionsByLevel = (level: string): QuizQuestion[] => {
  if (level === 'all') {
    return quizQuestions;
  }
  return quizQuestions.filter(q => q.level === level);
};

// 随机获取指定数量的题目
export const getRandomQuestions = (count: number, level: string = 'all'): QuizQuestion[] => {
  let questions = getQuestionsByLevel(level);

  // 随机打乱数组
  questions = [...questions].sort(() => Math.random() - 0.5);

  // 返回指定数量的题目
  return questions.slice(0, Math.min(count, questions.length));
};

// 根据ID获取题目
export const getQuestionById = (id: string): QuizQuestion | undefined => {
  return quizQuestions.find(q => q.id === id);
};

import { GrammarItem } from '../types';

export const grammarData: GrammarItem[] = [
  {
    id: 'g-ele-1',
    title: 'Present Simple - Be动词',
    titleZh: '现在简单式 - Be动词',
    level: 'elementary',
    category: 'tense',
    content: `Be动词（am, is, are）用于描述状态或身份。\n\nI am = I'm\nYou are = You're\nHe is = He's\nShe is = She's\nIt is = It's\nWe are = We're\nThey are = They're`,
    examples: [
      'I am a student.',
      'She is my teacher.',
      'They are friends.',
    ],
    createdAt: '2024-01-01',
  },
  {
    id: 'g-ele-2',
    title: 'Present Simple - Do/Does',
    titleZh: '现在简单式 - Do/Does',
    level: 'elementary',
    category: 'tense',
    content: `在现在简单式中，我们使用do和does来构成疑问句和否定句。\n\n肯定句: I like apples.\n疑问句: Do you like apples?\n否定句: I don't like apples.`,
    examples: [
      'Do you go to school?',
      'He doesn\'t play football.',
      'What do you want?',
    ],
    createdAt: '2024-01-02',
  },
  {
    id: 'g-ele-3',
    title: 'There be 句型',
    titleZh: 'There be 句型',
    level: 'elementary',
    category: 'sentence',
    content: `There be 句型表示"某处存在某物"。\n\n单数用is，复数用are。\n\nThere is + 单数名词\nThere are + 复数名词`,
    examples: [
      'There is a book on the desk.',
      'There are three cats in the garden.',
      'Is there a library near here?',
    ],
    createdAt: '2024-01-03',
  },
  {
    id: 'g-ele-4',
    title: '名词所有格',
    titleZh: '名词所有格',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `名词所有格表示所属关系。\n\n单数名词加's: John's book\n复数名词加': children's toys\n表示共有关系: Tom and Jerry's room`,
    examples: [
      'This is Mary\'s pencil.',
      'The dogs\' owners are kind.',
      'My mother\'s birthday is in May.',
    ],
    createdAt: '2024-01-04',
  },
  {
    id: 'g-ele-5',
    title: '人称代词',
    titleZh: '人称代词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `人称代词分为主格和宾格。\n\n主格: I, you, he, she, it, we, they\n宾格: me, you, him, her, it, us, them`,
    examples: [
      'I love you.',
      'She likes him.',
      'We help them.',
    ],
    createdAt: '2024-01-05',
  },
  {
    id: 'g-ele-6',
    title: '指示代词',
    titleZh: '指示代词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `指示代词用于指代距离。\n\nthis/these - 近指（这个/这些）\nthat/those - 远指（那个/那些）`,
    examples: [
      'This is my book.',
      'Those are their bags.',
      'That is a beautiful flower.',
    ],
    createdAt: '2024-01-06',
  },
  {
    id: 'g-ele-7',
    title: '形容词比较级',
    titleZh: '形容词比较级',
    level: 'elementary',
    category: 'sentence',
    content: `形容词比较级用于比较两者。\n\n规则变化: 直接加-er\n不规则变化: good-better, bad-worse\n\n结构: A + be动词 + 形容词比较级 + than + B`,
    examples: [
      'Tom is taller than Jack.',
      'This apple is sweeter than that one.',
      'She runs faster than me.',
    ],
    createdAt: '2024-01-07',
  },
  {
    id: 'g-ele-8',
    title: '情态动词 can/could',
    titleZh: '情态动词 can/could',
    level: 'elementary',
    category: 'tense',
    content: `情态动词can表示能力或可能性，could是can的过去式。\n\n肯定句: I can swim.\n否定句: I cannot (can't) swim.\n疑问句: Can you swim?`,
    examples: [
      'I can speak English.',
      'Could you help me?',
      'She can\'t ride a bike.',
    ],
    createdAt: '2024-01-08',
  },
  {
    id: 'g-ele-9',
    title: '祈使句',
    titleZh: '祈使句',
    level: 'elementary',
    category: 'sentence',
    content: `祈使句用于表达命令、请求或建议。\n\n肯定形式: 动词原形开头\n否定形式: Don't + 动词原形`,
    examples: [
      'Please sit down.',
      'Don\'t talk in class.',
      'Let\'s go to the park.',
    ],
    createdAt: '2024-01-09',
  },
  {
    id: 'g-ele-10',
    title: '特殊疑问句',
    titleZh: '特殊疑问句',
    level: 'elementary',
    category: 'sentence',
    content: `特殊疑问句使用疑问词提问。\n\nWho - 谁\nWhat - 什么\nWhere - 哪里\nWhen - 什么时候\nWhy - 为什么\nHow - 怎样`,
    examples: [
      'What is your name?',
      'Where are you from?',
      'How are you?',
    ],
    createdAt: '2024-01-10',
  },
  {
    id: 'g-ele-11',
    title: '现在进行时',
    titleZh: '现在进行时',
    level: 'elementary',
    category: 'tense',
    content: `现在进行时表示正在进行的动作。\n\n构成: be动词(am/is/are) + 动词-ing\n\n瞬间动词可用进行时表将来`,
    examples: [
      'I am reading a book now.',
      'She is cooking dinner.',
      'The train is coming.',
    ],
    createdAt: '2024-01-11',
  },
  {
    id: 'g-ele-12',
    title: '一般过去时',
    titleZh: '一般过去时',
    level: 'elementary',
    category: 'tense',
    content: `一般过去时表示过去的动作或状态。\n\n构成: 主语 + 动词过去式\n\n规则动词加-ed，不规则动词需记忆`,
    examples: [
      'I visited Beijing last year.',
      'She played piano yesterday.',
      'They went to school.',
    ],
    createdAt: '2024-01-12',
  },
  {
    id: 'g-ele-13',
    title: '情态动词 may/might',
    titleZh: '情态动词 may/might',
    level: 'elementary',
    category: 'tense',
    content: `may和might表示可能性，might更委婉。\n\nMay I come in?\nShe might be late.`,
    examples: [
      'May I use your pen?',
      'It might rain today.',
      'He may know the answer.',
    ],
    createdAt: '2024-01-13',
  },
  {
    id: 'g-ele-14',
    title: '情态动词 must',
    titleZh: '情态动词 must',
    level: 'elementary',
    category: 'tense',
    content: `must表示必须、禁止或肯定推测。\n\nmust表示必须，mustn't表示禁止`,
    examples: [
      'You must finish homework first.',
      'You mustn\'t smoke here.',
      'He must be at home.',
    ],
    createdAt: '2024-01-14',
  },
  {
    id: 'g-ele-15',
    title: '特殊疑问词 - Where/When/Why',
    titleZh: '特殊疑问词 - Where/When/Why',
    level: 'elementary',
    category: 'sentence',
    content: `where提问地点，when提问时间，why提问原因`,
    examples: [
      'Where do you live?',
      'When is your birthday?',
      'Why are you late?',
    ],
    createdAt: '2024-01-15',
  },
  {
    id: 'g-ele-16',
    title: '方位介词',
    titleZh: '方位介词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `方位介词表示位置或方向：in, on, at, under, behind, in front of, next to`,
    examples: [
      'The book is on the desk.',
      'The cat is under the table.',
      'She sits next to me.',
    ],
    createdAt: '2024-01-16',
  },
  {
    id: 'g-ele-17',
    title: '序数词',
    titleZh: '序数词',
    level: 'elementary',
    category: 'word',
    content: `序数词表示顺序：first, second, third, fourth...\n\n构成：基数词加-th，但有特殊变化`,
    examples: [
      'Today is the first day of school.',
      'She is the second student.',
      'December is the twelfth month.',
    ],
    createdAt: '2024-01-17',
  },
  {
    id: 'g-ele-18',
    title: '基数词',
    titleZh: '基数词',
    level: 'elementary',
    category: 'word',
    content: `基数词表示数量：one, two, three...\n\n100以上：hundred, thousand, million`,
    examples: [
      'I have two brothers.',
      'There are a thousand stars.',
      'Three hundred people came.',
    ],
    createdAt: '2024-01-18',
  },
  {
    id: 'g-ele-19',
    title: '冠词 a/an/the',
    titleZh: '冠词 a/an/the',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `a/an不定冠词表泛指，the定冠词表特指。\n\na用于辅音前，an用于元音前`,
    examples: [
      'I am a student.',
      'She is an English teacher.',
      'The book is on the table.',
    ],
    createdAt: '2024-01-19',
  },
  {
    id: 'g-ele-20',
    title: '一般将来时 - will',
    titleZh: '一般将来时 - will',
    level: 'elementary',
    category: 'tense',
    content: `一般将来时表示将要发生的动作。\n\n构成: will + 动词原形\n\nwill not = won't`,
    examples: [
      'I will go to Beijing tomorrow.',
      'She will be here soon.',
      'It will rain later.',
    ],
    createdAt: '2024-01-20',
  },
  {
    id: 'g-ele-21',
    title: '阅读理解技巧 - 找主旨',
    titleZh: '阅读理解技巧 - 找主旨',
    level: 'elementary',
    category: 'reading',
    content: `阅读时先看文章大意，关注首段和每段首句。\n\n寻找topic sentence来确定段落主题`,
    examples: [
      'The main idea is often in the first paragraph.',
      'Topic sentences usually appear at the beginning.',
      'Look for repeated words or themes.',
    ],
    createdAt: '2024-01-21',
  },
  {
    id: 'g-ele-22',
    title: '写作基础 - 句子结构',
    titleZh: '写作基础 - 句子结构',
    level: 'elementary',
    category: 'pattern',
    content: `英语句子基本结构：主语 + 谓语 + 宾语\n\n简单句包含一个主谓结构`,
    examples: [
      'I love English.',
      'She reads books every day.',
      'They play soccer after school.',
    ],
    createdAt: '2024-01-23',
  },
  {
    id: 'g-ele-23',
    title: '口语表达 - 日常问候',
    titleZh: '口语表达 - 日常问候',
    level: 'elementary',
    category: 'communication',
    content: `日常问候常用表达：Hello, Hi, How are you? Nice to meet you.`,
    examples: [
      'Hello, how are you?',
      'Nice to meet you.',
      'Good morning, teacher.',
    ],
    createdAt: '2024-01-24',
  },
  {
    id: 'g-ele-24',
    title: '听力技巧 - 捕捉关键词',
    titleZh: '听力技巧 - 捕捉关键词',
    level: 'elementary',
    category: 'reading',
    content: `听力时注意数字、时间、地点、人物等关键词`,
    examples: [
      'Listen for numbers and dates.',
      'Focus on location words.',
      'Catch the main character\'s name.',
    ],
    createdAt: '2024-01-25',
  },
  {
    id: 'g-ele-25',
    title: '词汇积累 - 词根词缀',
    titleZh: '词汇积累 - 词根词缀',
    level: 'elementary',
    category: 'word',
    content: `词根词缀帮助记忆单词：un-表示不，-ful表示充满...的`,
    examples: [
      'Happy + un = unhappy',
      'Care + ful = careful',
      'Help + less = helpless',
    ],
    createdAt: '2024-01-26',
  },
  {
    id: 'g-ele-26',
    title: '时态综合运用',
    titleZh: '时态综合运用',
    level: 'elementary',
    category: 'tense',
    content: `综合运用各种时态描述事件发生的时间和状态`,
    examples: [
      'I studied English yesterday.',
      'I am learning English now.',
      'I will learn French next year.',
    ],
    createdAt: '2024-01-27',
  },
  {
    id: 'g-ele-27',
    title: '被动语态入门',
    titleZh: '被动语态入门',
    level: 'elementary',
    category: 'voice',
    content: `被动语态表示主语是动作的承受者。\n\n构成: be + 过去分词`,
    examples: [
      'The book is read by students.',
      'The cake was made by my mother.',
      'The window will be fixed tomorrow.',
    ],
    createdAt: '2024-01-28',
  },
  {
    id: 'g-ele-28',
    title: '形容词最高级',
    titleZh: '形容词最高级',
    level: 'elementary',
    category: 'sentence',
    content: `形容词最高级用于三者及以上比较。\n\n结构: the + 形容词最高级 + in/of`,
    examples: [
      'Tom is the tallest in the class.',
      'This is the most beautiful dress.',
      'She runs the fastest.',
    ],
    createdAt: '2024-01-29',
  },
  {
    id: 'g-ele-29',
    title: '数量表达 - some/any/many/much',
    titleZh: '数量表达 - some/any/many/much',
    level: 'elementary',
    category: 'word',
    content: `some用于肯定句，any用于否定疑问句。\n\nmany修饰可数，much修饰不可数`,
    examples: [
      'I have some apples.',
      'Do you have any books?',
      'There isn\'t much water.',
    ],
    createdAt: '2024-01-30',
  },
  {
    id: 'g-ele-30',
    title: '时间表达',
    titleZh: '时间表达',
    level: 'elementary',
    category: 'word',
    content: `时间表达：at + 时刻，in + 月份/年份，on + 日期`,
    examples: [
      'I wake up at 7 o\'clock.',
      'School starts in September.',
      'Christmas is on December 25th.',
    ],
    createdAt: '2024-01-31',
  },
  {
    id: 'g-ele-31',
    title: '并列句',
    titleZh: '并列句',
    level: 'elementary',
    category: 'sentence',
    content: `并列句由并列连词连接：and, but, or, so, yet, nor`,
    examples: [
      'I like math and English.',
      'She is smart but lazy.',
      'Work hard or you will fail.',
    ],
    createdAt: '2024-02-01',
  },
  {
    id: 'g-ele-32',
    title: '选择疑问句',
    titleZh: '选择疑问句',
    level: 'elementary',
    category: 'sentence',
    content: `选择疑问句用or连接两个选项`,
    examples: [
      'Do you like tea or coffee?',
      'Is it red or blue?',
      'Will you go today or tomorrow?',
    ],
    createdAt: '2024-02-02',
  },
  {
    id: 'g-ele-33',
    title: '反意疑问句',
    titleZh: '反意疑问句',
    level: 'elementary',
    category: 'sentence',
    content: `反意疑问句由陈述句 + 简短疑问组成，否定用doesn't/don't/won't`,
    examples: [
      'You are a student, aren\'t you?',
      'She can\'t swim, can she?',
      'It is raining, isn\'t it?',
    ],
    createdAt: '2024-02-03',
  },
  {
    id: 'g-ele-34',
    title: '不定代词 some/any/no/every',
    titleZh: '不定代词 some/any/no/every',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `不定代词表示不确定的人或物：some, any, no, every及其复合词`,
    examples: [
      'Someone is at the door.',
      'I don\'t have any money.',
      'Nothing is impossible.',
    ],
    createdAt: '2024-02-04',
  },
  {
    id: 'g-ele-35',
    title: '物主代词',
    titleZh: '物主代词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `物主代词表示所属关系：my, your, his, her, its, our, their及其名词性形式`,
    examples: [
      'This is my book.',
      'The book is mine.',
      'Our teacher is kind.',
    ],
    createdAt: '2024-02-05',
  },
  {
    id: 'g-ele-36',
    title: '相互代词',
    titleZh: '相互代词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `相互代词表示相互关系：each other, one another`,
    examples: [
      'We help each other.',
      'They love one another.',
      'The two friends respect each other.',
    ],
    createdAt: '2024-02-06',
  },
  {
    id: 'g-ele-37',
    title: '关系代词入门 - who/which/that',
    titleZh: '关系代词入门 - who/which/that',
    level: 'elementary',
    category: 'clause',
    content: `关系代词who指人，which/that指物，引导定语从句`,
    examples: [
      'The boy who is tall is my brother.',
      'The book which I bought is interesting.',
      'The dog that barks is loud.',
    ],
    createdAt: '2024-02-07',
  },
  {
    id: 'g-ele-38',
    title: '感叹句',
    titleZh: '感叹句',
    level: 'elementary',
    category: 'sentence',
    content: `感叹句表达强烈情感：What + (a/an) + 形容词 + 名词 或 How + 形容词/副词 + 主语 + 动词`,
    examples: [
      'What a beautiful day!',
      'How clever she is!',
      'What an interesting book this is!',
    ],
    createdAt: '2024-02-08',
  },
  {
    id: 'g-ele-39',
    title: '祈使句的扩展用法',
    titleZh: '祈使句的扩展用法',
    level: 'elementary',
    category: 'sentence',
    content: `祈使句可以加please, don't + 动词, Let's等`,
    examples: [
      'Please sit down here.',
      'Don\'t be late next time.',
      'Let\'s play together.',
    ],
    createdAt: '2024-02-09',
  },
  {
    id: 'g-ele-40',
    title: '方位表达',
    titleZh: '方位表达',
    level: 'elementary',
    category: 'word',
    content: `方位表达：near, far, above, below, between, among`,
    examples: [
      'The school is near the park.',
      'The sun is above the clouds.',
      'He sits between his parents.',
    ],
    createdAt: '2024-02-10',
  },
  {
    id: 'g-ele-41',
    title: '定语从句入门 - 基本结构',
    titleZh: '定语从句入门 - 基本结构',
    level: 'elementary',
    category: 'clause',
    content: `定语从句修饰名词或代词，放在被修饰词之后`,
    examples: [
      'The girl who wears a red dress is my sister.',
      'The car that is blue belongs to John.',
      'The book which you lent me is interesting.',
    ],
    createdAt: '2024-02-11',
  },
  {
    id: 'g-ele-42',
    title: '宾语从句 - that引导',
    titleZh: '宾语从句 - that引导',
    level: 'elementary',
    category: 'clause',
    content: `宾语从句在句中作宾语，that引导时可省略`,
    examples: [
      'I think (that) he is right.',
      'She says (that) she will come.',
      'We know (that) practice makes perfect.',
    ],
    createdAt: '2024-02-12',
  },
  {
    id: 'g-ele-43',
    title: '宾语从句 - if/whether引导',
    titleZh: '宾语从句 - if/whether引导',
    level: 'elementary',
    category: 'clause',
    content: `if/whether引导表示"是否"的宾语从句`,
    examples: [
      'I wonder if you can help me.',
      'Ask whether he is coming.',
      'She doesn\'t know whether to go or not.',
    ],
    createdAt: '2024-02-13',
  },
  {
    id: 'g-ele-44',
    title: '时间状语从句 - when/while',
    titleZh: '时间状语从句 - when/while',
    level: 'elementary',
    category: 'clause',
    content: `when表示"当...时"，while表示"在...期间"`,
    examples: [
      'When I arrived, she was sleeping.',
      'While we were talking, the teacher came in.',
      'When it rains, I stay home.',
    ],
    createdAt: '2024-02-15',
  },
  {
    id: 'g-ele-45',
    title: '原因状语从句 - because/since',
    titleZh: '原因状语从句 - because/since',
    level: 'elementary',
    category: 'clause',
    content: `because表示原因，since表示已知原因`,
    examples: [
      'I stayed home because it rained.',
      'Since you are here, let\'s start.',
      'She was late because of traffic.',
    ],
    createdAt: '2024-02-16',
  },
  {
    id: 'g-ele-46',
    title: '主谓一致 - 就近原则',
    titleZh: '主谓一致 - 就近原则',
    level: 'elementary',
    category: 'sentence',
    content: `there be句型或either...or等结构遵循就近原则`,
    examples: [
      'There is a book and two pens.',
      'Either you or I am wrong.',
      'Neither the teacher nor the students are present.',
    ],
    createdAt: '2024-02-17',
  },
  {
    id: 'g-ele-47',
    title: '主谓一致 - 意义一致',
    titleZh: '主谓一致 - 意义一致',
    level: 'elementary',
    category: 'sentence',
    content: `集体名词根据意义决定单复数`,
    examples: [
      'The team is playing well.',
      'The team are wearing different uniforms.',
      'My family is large.',
    ],
    createdAt: '2024-02-18',
  },
  {
    id: 'g-ele-48',
    title: '倒装句入门 - Here/There',
    titleZh: '倒装句入门 - Here/There',
    level: 'elementary',
    category: 'sentence',
    content: `Here/There + 动词 + 主语构成倒装`,
    examples: [
      'Here comes the bus.',
      'There goes the bell.',
      'Here is your coffee.',
    ],
    createdAt: '2024-02-19',
  },
  {
    id: 'g-ele-49',
    title: '强调句入门 - It is...that',
    titleZh: '强调句入门 - It is...that',
    level: 'elementary',
    category: 'sentence',
    content: `It is/was + 被强调部分 + that/who + 其他`,
    examples: [
      'It is English that she teaches.',
      'It was yesterday that I saw him.',
      'It was she who helped me.',
    ],
    createdAt: '2024-02-20',
  },
  {
    id: 'g-ele-50',
    title: '直接引语与间接引语',
    titleZh: '直接引语与间接引语',
    level: 'elementary',
    category: 'clause',
    content: `直接引语用引号，间接引语用that引导，注意时态变化`,
    examples: [
      'He said, "I am happy." → He said that he was happy.',
      'She said, "I will come." → She said that she would come.',
      'They said, "We went." → They said that they had gone.',
    ],
    createdAt: '2024-02-21',
  },
  {
    id: 'g-ele-51',
    title: '短语动词 - look',
    titleZh: '短语动词 - look',
    level: 'elementary',
    category: 'pattern',
    content: `look构成的短语：look at, look for, look after, look forward to`,
    examples: [
      'Please look at the blackboard.',
      'I am looking for my keys.',
      'She looks after the baby.',
    ],
    createdAt: '2024-02-22',
  },
  {
    id: 'g-ele-52',
    title: '短语动词 - get',
    titleZh: '短语动词 - get',
    level: 'elementary',
    category: 'pattern',
    content: `get构成的短语：get up, get on, get off, get along`,
    examples: [
      'I get up at 6 every morning.',
      'We get on the bus.',
      'They get along well.',
    ],
    createdAt: '2024-02-23',
  },
  {
    id: 'g-ele-53',
    title: '短语动词 - turn',
    titleZh: '短语动词 - turn',
    level: 'elementary',
    category: 'pattern',
    content: `turn构成的短语：turn on, turn off, turn up, turn down`,
    examples: [
      'Please turn on the light.',
      'Turn down the music.',
      'He turned off the TV.',
    ],
    createdAt: '2024-02-24',
  },
  {
    id: 'g-ele-54',
    title: '词组搭配 - make/do',
    titleZh: '词组搭配 - make/do',
    level: 'elementary',
    category: 'pattern',
    content: `make tea, make money, make mistakes\ndo homework, do the dishes, do business`,
    examples: [
      'She makes tea every morning.',
      'I do my homework after school.',
      'We made many mistakes.',
    ],
    createdAt: '2024-02-25',
  },
  {
    id: 'g-ele-55',
    title: '构词法 - 前缀',
    titleZh: '构词法 - 前缀',
    level: 'elementary',
    category: 'word',
    content: `常见前缀：un-（不）, re-（再）, pre-（前）, dis-（否定）`,
    examples: [
      'unhappy, rewrite, preview, dislike',
    ],
    createdAt: '2024-02-26',
  },
  {
    id: 'g-ele-56',
    title: '构词法 - 后缀',
    titleZh: '构词法 - 后缀',
    level: 'elementary',
    category: 'word',
    content: `常见后缀：-ful（充满）, -less（无）, -tion（行为）, -er（人）`,
    examples: [
      'careful, helpless, education, teacher',
    ],
    createdAt: '2024-02-27',
  },
  {
    id: 'g-ele-57',
    title: '同义词辨析 - look/watch/see',
    titleZh: '同义词辨析 - look/watch/see',
    level: 'elementary',
    category: 'word',
    content: `look看（动作），watch观看（过程），see看见（结果）`,
    examples: [
      'Look at the board!',
      'I watch TV every night.',
      'I can see a bird.',
    ],
    createdAt: '2024-02-28',
  },
  {
    id: 'g-ele-58',
    title: '反义词',
    titleZh: '反义词',
    level: 'elementary',
    category: 'word',
    content: `常见反义词对：big-small, hot-cold, happy-sad, fast-slow`,
    examples: [
      'Big and small are opposites.',
      'Hot is the opposite of cold.',
      'Happy is the opposite of sad.',
    ],
    createdAt: '2024-02-29',
  },
  {
    id: 'g-ele-59',
    title: '一词多义 - bank/light',
    titleZh: '一词多义 - bank/light',
    level: 'elementary',
    category: 'word',
    content: `bank河岸/银行，light灯/轻的，duck鸭子/潜入`,
    examples: [
      'I went to the bank to save money.',
      'The bank of the river is beautiful.',
      'Turn on the light.',
    ],
    createdAt: '2024-03-01',
  },
  {
    id: 'g-ele-60',
    title: '习语表达',
    titleZh: '习语表达',
    level: 'elementary',
    category: 'communication',
    content: `常见习语：kill two birds with one stone, it's raining cats and dogs`,
    examples: [
      'Kill two birds with one stone.',
      'It\'s raining cats and dogs outside.',
      'Break a leg in your exam!',
    ],
    createdAt: '2024-03-02',
  },
  {
    id: 'g-ele-61',
    title: '学校生活表达',
    titleZh: '学校生活表达',
    level: 'elementary',
    category: 'communication',
    content: `学校相关表达：class, teacher, student, homework, exam`,
    examples: [
      'I have three classes today.',
      'The teacher gave us homework.',
      'We have an exam tomorrow.',
    ],
    createdAt: '2024-03-03',
  },
  {
    id: 'g-ele-62',
    title: '兴趣爱好表达',
    titleZh: '兴趣爱好表达',
    level: 'elementary',
    category: 'communication',
    content: `表达爱好：I like/enjoy/hobby is...，常见爱好：reading, swimming, dancing`,
    examples: [
      'My hobby is collecting stamps.',
      'I enjoy playing basketball.',
      'She likes listening to music.',
    ],
    createdAt: '2024-03-04',
  },
  {
    id: 'g-ele-63',
    title: '天气表达',
    titleZh: '天气表达',
    level: 'elementary',
    category: 'communication',
    content: `天气表达：sunny, rainy, cloudy, windy, snowy, stormy`,
    examples: [
      'It is sunny today.',
      'It has been rainy all week.',
      'The weather is cloudy.',
    ],
    createdAt: '2024-03-05',
  },
  {
    id: 'g-ele-64',
    title: '饮食健康表达',
    titleZh: '饮食健康表达',
    level: 'elementary',
    category: 'communication',
    content: `饮食相关：breakfast, lunch, dinner, healthy, delicious, junk food`,
    examples: [
      'I have breakfast at 7.',
      'Vegetables are healthy.',
      'Too much junk food is bad.',
    ],
    createdAt: '2024-03-06',
  },
  {
    id: 'g-ele-65',
    title: '购物表达',
    titleZh: '购物表达',
    level: 'elementary',
    category: 'communication',
    content: `购物表达：price, discount, size, color, cash, credit card`,
    examples: [
      'How much does it cost?',
      'Is there a discount?',
      'What size do you wear?',
    ],
    createdAt: '2024-03-07',
  },
  {
    id: 'g-ele-66',
    title: '交通出行表达',
    titleZh: '交通出行表达',
    level: 'elementary',
    category: 'communication',
    content: `交通方式：by bus, by bike, by car, on foot, subway, taxi`,
    examples: [
      'I go to school by bus.',
      'She walks to work on foot.',
      'Let\'s take a taxi.',
    ],
    createdAt: '2024-03-09',
  },
  {
    id: 'g-ele-67',
    title: '旅行度假表达',
    titleZh: '旅行度假表达',
    level: 'elementary',
    category: 'communication',
    content: `旅行相关：travel, trip, vacation, hotel, passport, suitcase`,
    examples: [
      'I want to travel around Europe.',
      'We stayed at a hotel.',
      'Pack your suitcase.',
    ],
    createdAt: '2024-03-10',
  },
  {
    id: 'g-ele-68',
    title: '节日庆典表达',
    titleZh: '节日庆典表达',
    level: 'elementary',
    category: 'communication',
    content: `节日相关：Christmas, Halloween, Thanksgiving, festival, celebrate`,
    examples: [
      'We celebrate Christmas in December.',
      'Halloween is in October.',
      'Happy New Year!',
    ],
    createdAt: '2024-03-11',
  },
  {
    id: 'g-ele-69',
    title: '人物描写',
    titleZh: '人物描写',
    level: 'elementary',
    category: 'pattern',
    content: `描述人物外貌：tall, short, slim, fat, curly hair, straight hair`,
    examples: [
      'She is tall with long hair.',
      'He has blue eyes.',
      'My mother is kind and caring.',
    ],
    createdAt: '2024-03-12',
  },
  {
    id: 'g-ele-70',
    title: '地点方位表达',
    titleZh: '地点方位表达',
    level: 'elementary',
    category: 'word',
    content: `地点：school, hospital, park, museum, restaurant, supermarket`,
    examples: [
      'The hospital is next to the park.',
      'There is a library across the street.',
      'I live in Beijing.',
    ],
    createdAt: '2024-03-13',
  },
  {
    id: 'g-ele-71',
    title: '计划愿望表达',
    titleZh: '计划愿望表达',
    level: 'elementary',
    category: 'communication',
    content: `表达计划：plan to, intend to, be going to\n表达愿望：want to, hope to, wish to`,
    examples: [
      'I am going to visit my grandmother.',
      'I hope to see you soon.',
      'We plan to travel next month.',
    ],
    createdAt: '2024-03-14',
  },
  {
    id: 'g-ele-72',
    title: '经验分享',
    titleZh: '经验分享',
    level: 'elementary',
    category: 'communication',
    content: `分享经验：I have experience in..., I used to..., I once...`,
    examples: [
      'I have experience teaching English.',
      'I once climbed that mountain.',
      'I used to play piano.',
    ],
    createdAt: '2024-03-15',
  },
  {
    id: 'g-ele-73',
    title: '观点表达',
    titleZh: '观点表达',
    level: 'elementary',
    category: 'communication',
    content: `表达观点：I think/believe/feel that..., In my opinion..., As for me...`,
    examples: [
      'I think this is a good idea.',
      'In my opinion, he is wrong.',
      'As for me, I prefer tea.',
    ],
    createdAt: '2024-03-16',
  },
  {
    id: 'g-ele-74',
    title: '建议请求',
    titleZh: '建议请求',
    level: 'elementary',
    category: 'communication',
    content: `提出建议：You should..., You ought to..., Why not...?\n请求：Could you...?, Would you...?`,
    examples: [
      'You should study harder.',
      'Why not go to the movies?',
      'Could you help me?',
    ],
    createdAt: '2024-03-17',
  },
  {
    id: 'g-ele-75',
    title: '感谢道歉',
    titleZh: '感谢道歉',
    level: 'elementary',
    category: 'communication',
    content: `感谢：Thank you, I appreciate it, Thanks a lot\n道歉：Sorry, I apologize, Excuse me`,
    examples: [
      'Thank you for your help.',
      'I am sorry for being late.',
      'I apologize for the mistake.',
    ],
    createdAt: '2024-03-18',
  },
  {
    id: 'g-ele-76',
    title: '邀请介绍',
    titleZh: '邀请介绍',
    level: 'elementary',
    category: 'communication',
    content: `邀请：Would you like to...?, Let's..., Come to...\n介绍：This is..., I'd like to introduce...`,
    examples: [
      'Would you like to come to my party?',
      'This is my friend Tom.',
      'I\'d like to introduce my family.',
    ],
    createdAt: '2024-03-19',
  },
  {
    id: 'g-ele-77',
    title: '描述事件',
    titleZh: '描述事件',
    level: 'elementary',
    category: 'communication',
    content: `描述过去事件：First, then, next, finally, suddenly, fortunately`,
    examples: [
      'First, I woke up late.',
      'Then I missed the bus.',
      'Finally, I arrived at school.',
    ],
    createdAt: '2024-03-20',
  },
  {
    id: 'g-ele-78',
    title: '解释说明',
    titleZh: '解释说明',
    level: 'elementary',
    category: 'communication',
    content: `解释原因：because, since, because of, due to, the reason is`,
    examples: [
      'I am late because I missed the bus.',
      'The reason is simple.',
      'Because of the rain, we stayed home.',
    ],
    createdAt: '2024-03-21',
  },
  {
    id: 'g-ele-79',
    title: '比较对比表达',
    titleZh: '比较对比表达',
    level: 'elementary',
    category: 'communication',
    content: `比较：similar to, the same as, alike\n对比：different from, unlike, while, whereas`,
    examples: [
      'My book is similar to yours.',
      'She is different from her sister.',
      'Tom is tall while his brother is short.',
    ],
    createdAt: '2024-03-22',
  },
  {
    id: 'g-ele-80',
    title: '因果关系表达',
    titleZh: '因果关系表达',
    level: 'elementary',
    category: 'communication',
    content: `原因：because, since, as, due to, thanks to\n结果：so, therefore, as a result, consequently`,
    examples: [
      'It rained, so we stayed home.',
      'He studied hard, therefore he passed.',
      'As a result, we won the game.',
    ],
    createdAt: '2024-03-23',
  },
  {
    id: 'g-jun-1',
    title: '过去将来时',
    titleZh: '过去将来时',
    level: 'junior',
    category: 'tense',
    content: `过去将来时表示从过去某时刻看将要发生的动作。\n\n构成: would + 动词原形 或 was/were going to + 动词原形`,
    examples: [
      'He said he would come tomorrow.',
      'She was going to visit her grandmother.',
      'They knew we would win.',
    ],
    createdAt: '2024-03-24',
  },
  {
    id: 'g-jun-2',
    title: '过去完成进行时',
    titleZh: '过去完成进行时',
    level: 'junior',
    category: 'tense',
    content: `过去完成进行时表示过去某时刻之前一直在进行的动作。\n\n构成: had been + 动词-ing`,
    examples: [
      'I had been waiting for two hours before she came.',
      'He had been studying English for years.',
      'They had been working since morning.',
    ],
    createdAt: '2024-03-25',
  },
  {
    id: 'g-jun-3',
    title: '现在完成进行时',
    titleZh: '现在完成进行时',
    level: 'junior',
    category: 'tense',
    content: `现在完成进行时表示动作从过去持续到现在。\n\n构成: have/has been + 动词-ing`,
    examples: [
      'I have been learning English for five years.',
      'She has been cooking dinner.',
      'They have been playing soccer all afternoon.',
    ],
    createdAt: '2024-03-26',
  },
  {
    id: 'g-jun-4',
    title: '将来进行时',
    titleZh: '将来进行时',
    level: 'junior',
    category: 'tense',
    content: `将来进行时表示将来某时刻正在进行的动作。\n\n构成: will be + 动词-ing`,
    examples: [
      'I will be sleeping at 10 pm.',
      'She will be traveling this time tomorrow.',
      'We will be meeting at the airport.',
    ],
    createdAt: '2024-03-27',
  },
  {
    id: 'g-jun-5',
    title: '被动语态 - 各时态',
    titleZh: '被动语态 - 各时态',
    level: 'junior',
    category: 'voice',
    content: `各种时态的被动语态：\n现在进行: is/are being done\n过去进行: was/were being done\n现在完成: have/has been done`,
    examples: [
      'The house is being painted.',
      'The road was being repaired.',
      'The work has been finished.',
    ],
    createdAt: '2024-03-28',
  },
  {
    id: 'g-jun-6',
    title: '被动语态 - by短语',
    titleZh: '被动语态 - by短语',
    level: 'junior',
    category: 'voice',
    content: `被动语态中by短语表示动作的执行者`,
    examples: [
      'The letter was written by John.',
      'The cake was made by my mother.',
      'The song was sung by a famous singer.',
    ],
    createdAt: '2024-03-29',
  },
  {
    id: 'g-jun-7',
    title: '情态动词的被动语态',
    titleZh: '情态动词的被动语态',
    level: 'junior',
    category: 'voice',
    content: `情态动词的被动语态：can/may/must + be + 过去分词`,
    examples: [
      'The work can be done today.',
      'The gate may be closed.',
      'The book must be returned.',
    ],
    createdAt: '2024-03-30',
  },
  {
    id: 'g-jun-8',
    title: '非谓语动词 - 不定式',
    titleZh: '非谓语动词 - 不定式',
    level: 'junior',
    category: 'partOfSpeech',
    content: `不定式to do可作主语、宾语、表语、定语、状语`,
    examples: [
      'To learn English is important.',
      'I want to study abroad.',
      'My dream is to become a doctor.',
    ],
    createdAt: '2024-04-01',
  },
  {
    id: 'g-jun-9',
    title: '非谓语动词 - 动名词',
    titleZh: '非谓语动词 - 动名词',
    level: 'junior',
    category: 'partOfSpeech',
    content: `动名词doing可作主语、宾语、表语、定语`,
    examples: [
      'Learning English is fun.',
      'I enjoy reading books.',
      'My hobby is collecting stamps.',
    ],
    createdAt: '2024-04-02',
  },
  {
    id: 'g-jun-10',
    title: '非谓语动词 - 现在分词',
    titleZh: '非谓语动词 - 现在分词',
    level: 'junior',
    category: 'partOfSpeech',
    content: `现在分词doing可作定语、状语、表语、宾补`,
    examples: [
      'The sleeping baby is cute.',
      'Walking in the park, I met an old friend.',
      'I saw him playing basketball.',
    ],
    createdAt: '2024-04-03',
  },
  {
    id: 'g-jun-11',
    title: '非谓语动词 - 过去分词',
    titleZh: '非谓语动词 - 过去分词',
    level: 'junior',
    category: 'partOfSpeech',
    content: `过去分词done可作定语、表语、宾补，表示被动或完成`,
    examples: [
      'The broken window needs repairing.',
      'She was disappointed.',
      'I heard my name called.',
    ],
    createdAt: '2024-04-04',
  },
  {
    id: 'g-jun-12',
    title: '感官动词的用法',
    titleZh: '感官动词的用法',
    level: 'junior',
    category: 'partOfSpeech',
    content: `感官动词see, hear, watch, feel + 宾语 + doing/do（表示进行/完成）`,
    examples: [
      'I saw her dancing.',
      'I heard him sing.',
      'She was heard to sing.',
    ],
    createdAt: '2024-04-05',
  },
  {
    id: 'g-jun-13',
    title: '使役动词的用法',
    titleZh: '使役动词的用法',
    level: 'junior',
    category: 'partOfSpeech',
    content: `使役动词make, let, have + 宾语 + 动词原形；get + 宾语 + to + 动词`,
    examples: [
      'Let me go.',
      'I made him cry.',
      'She got him to help.',
    ],
    createdAt: '2024-04-06',
  },
  {
    id: 'g-jun-14',
    title: '宾语从句 - 时态呼应',
    titleZh: '宾语从句 - 时态呼应',
    level: 'junior',
    category: 'clause',
    content: `主句过去时，从句用相应的过去时态`,
    examples: [
      'I thought that he was coming.',
      'She said that she had finished.',
      'We knew you would help.',
    ],
    createdAt: '2024-04-07',
  },
  {
    id: 'g-jun-15',
    title: '宾语从句 - 词序',
    titleZh: '宾语从句 - 词序',
    level: 'junior',
    category: 'clause',
    content: `宾语从句用陈述句语序`,
    examples: [
      'I wonder where he lives.',
      'Tell me what you want.',
      'Ask him when he will come.',
    ],
    createdAt: '2024-04-08',
  },
  {
    id: 'g-jun-16',
    title: '定语从句 - 关系代词',
    titleZh: '定语从句 - 关系代词',
    level: 'junior',
    category: 'clause',
    content: `关系代词who/whom/which/that在定语从句中作主语或宾语`,
    examples: [
      'The man who called is my friend.',
      'The book which I bought is expensive.',
      'The student whom we know is smart.',
    ],
    createdAt: '2024-04-09',
  },
  {
    id: 'g-jun-17',
    title: '定语从句 - 关系副词',
    titleZh: '定语从句 - 关系副词',
    level: 'junior',
    category: 'clause',
    content: `关系副词when/where/why在定语从句中作状语`,
    examples: [
      'I\'ll never forget the day when we met.',
      'This is the place where I grew up.',
      'Tell me the reason why you are late.',
    ],
    createdAt: '2024-04-10',
  },
  {
    id: 'g-jun-18',
    title: '定语从句 - whose',
    titleZh: '定语从句 - whose',
    level: 'junior',
    category: 'clause',
    content: `whose表示所属关系，可指人或物`,
    examples: [
      'The student whose homework is missing is here.',
      'The house whose roof is red belongs to us.',
      'I know a girl whose mother is a doctor.',
    ],
    createdAt: '2024-04-11',
  },
  {
    id: 'g-jun-19',
    title: '定语从句 - 限制性与非限制性',
    titleZh: '定语从句 - 限制性与非限制性',
    level: 'junior',
    category: 'clause',
    content: `限制性定语从句无逗号，非限制性有逗号`,
    examples: [
      'The book that I bought is good.',
      'My brother, who lives in Beijing, is a teacher.',
      'The girl who is wearing red is my sister.',
    ],
    createdAt: '2024-04-12',
  },
  {
    id: 'g-jun-20',
    title: '状语从句 - 结果状语',
    titleZh: '状语从句 - 结果状语',
    level: 'junior',
    category: 'clause',
    content: `so...that, such...that引导结果状语从句`,
    examples: [
      'She was so tired that she slept.',
      'It is such a nice day that we went out.',
      'He studied so hard that he passed.',
    ],
    createdAt: '2024-04-13',
  },
  {
    id: 'g-jun-21',
    title: '状语从句 - 目的状语',
    titleZh: '状语从句 - 目的状语',
    level: 'junior',
    category: 'clause',
    content: `so that, in order that, in case引导目的状语从句`,
    examples: [
      'I studied hard so that I could pass.',
      'Bring an umbrella in case it rains.',
      'I will come early so that I can help.',
    ],
    createdAt: '2024-04-14',
  },
  {
    id: 'g-jun-22',
    title: '状语从句 - 让步状语',
    titleZh: '状语从句 - 让步状语',
    level: 'junior',
    category: 'clause',
    content: `though, although, even though, however引导让步状语从句`,
    examples: [
      'Although it rained, we still went out.',
      'He is short, yet he plays basketball well.',
      'Even though I tried, I failed.',
    ],
    createdAt: '2024-04-15',
  },
  {
    id: 'g-jun-23',
    title: '状语从句 - 比较状语',
    titleZh: '状语从句 - 比较状语',
    level: 'junior',
    category: 'clause',
    content: `as...as, than引导比较状语从句`,
    examples: [
      'She is as tall as her mother.',
      'He runs faster than I do.',
      'This is more interesting than that.',
    ],
    createdAt: '2024-04-16',
  },
  {
    id: 'g-jun-24',
    title: '名词性从句 - 主语从句',
    titleZh: '名词性从句 - 主语从句',
    level: 'junior',
    category: 'clause',
    content: `that/whether/if/疑问词引导主语从句`,
    examples: [
      'That he won surprised us.',
      'Whether she will come is uncertain.',
      'What he said is true.',
    ],
    createdAt: '2024-04-17',
  },
  {
    id: 'g-jun-25',
    title: '名词性从句 - 表语从句',
    titleZh: '名词性从句 - 表语从句',
    level: 'junior',
    category: 'clause',
    content: `that/whether/疑问词引导表语从句`,
    examples: [
      'The question is whether we can win.',
      'It seems that it will rain.',
      'That is what I mean.',
    ],
    createdAt: '2024-04-18',
  },
  {
    id: 'g-jun-26',
    title: '名词性从句 - 同位语从句',
    titleZh: '名词性从句 - 同位语从句',
    level: 'junior',
    category: 'clause',
    content: `that引导同位语从句，修饰抽象名词`,
    examples: [
      'The news that he came surprised us.',
      'I have a dream that I will succeed.',
      'The fact that he is smart is obvious.',
    ],
    createdAt: '2024-04-19',
  },
  {
    id: 'g-jun-27',
    title: '直接引语变间接引语',
    titleZh: '直接引语变间接引语',
    level: 'junior',
    category: 'clause',
    content: `直接引语变间接引语时，时态、人称、时间状语需变化`,
    examples: [
      '"I am happy." → He said he was happy.',
      '"I will come tomorrow." → He said he would come the next day.',
      '"I saw her." → He said he had seen her.',
    ],
    createdAt: '2024-04-20',
  },
  {
    id: 'g-jun-28',
    title: '虚拟语气 - if从句',
    titleZh: '虚拟语气 - if从句',
    level: 'junior',
    category: 'tense',
    content: `与现在相反：if +了过去式；与过去相反：if + had done`,
    examples: [
      'If I were rich, I would travel.',
      'If I had studied, I would have passed.',
      'If it rained, we would stay home.',
    ],
    createdAt: '2024-04-21',
  },
  {
    id: 'g-jun-29',
    title: '虚拟语气 - without/but for',
    titleZh: '虚拟语气 - without/but for',
    level: 'junior',
    category: 'tense',
    content: `without/but for + 名词表示假设的虚拟条件`,
    examples: [
      'Without water, nothing could grow.',
      'But for your help, I would fail.',
      'Without music, life would be boring.',
    ],
    createdAt: '2024-04-22',
  },
  {
    id: 'g-jun-30',
    title: '倒装句 - 全部倒装',
    titleZh: '倒装句 - 全部倒装',
    level: 'junior',
    category: 'sentence',
    content: `全部倒装：Here/There + 动词 + 主语`,
    examples: [
      'Here comes the bus.',
      'There lies a river.',
      'Out rushed the children.',
    ],
    createdAt: '2024-04-24',
  },
  {
    id: 'g-jun-31',
    title: '倒装句 - 部分倒装',
    titleZh: '倒装句 - 部分倒装',
    level: 'junior',
    category: 'sentence',
    content: `部分倒装：否定词+助动词+主语`,
    examples: [
      'Never have I seen such a thing.',
      'Rarely does she complain.',
      'Seldom do we go to the movies.',
    ],
    createdAt: '2024-04-25',
  },
  {
    id: 'g-jun-32',
    title: '强调句型',
    titleZh: '强调句型',
    level: 'junior',
    category: 'sentence',
    content: `It is/was + 被强调部分 + that/who + 其他`,
    examples: [
      'It is English that she teaches.',
      'It was yesterday that I called.',
      'It was John who helped me.',
    ],
    createdAt: '2024-04-26',
  },
  {
    id: 'g-jun-33',
    title: '省略句',
    titleZh: '省略句',
    level: 'junior',
    category: 'sentence',
    content: `在口语和复合句中常省略重复或已知成分`,
    examples: [
      'If possible, please call me.',
      'When in Rome, do as Romans do.',
      'I will come if needed.',
    ],
    createdAt: '2024-04-27',
  },
  {
    id: 'g-jun-34',
    title: '独立主格',
    titleZh: '独立主格',
    level: 'junior',
    category: 'pattern',
    content: `独立主格结构：名词 + 分词/形容词/介词短语`,
    examples: [
      'The rain having stopped, we went out.',
      'Weather permitting, we will go.',
      'He entered, book in hand.',
    ],
    createdAt: '2024-04-28',
  },
  {
    id: 'g-jun-35',
    title: 'with复合结构',
    titleZh: 'with复合结构',
    level: 'junior',
    category: 'pattern',
    content: `with + 宾语 + 宾补结构`,
    examples: [
      'With the light on, he fell asleep.',
      'With him helping us, we succeeded.',
      'With the work done, we relaxed.',
    ],
    createdAt: '2024-04-29',
  },
  {
    id: 'g-jun-36',
    title: '主谓一致 - 难点',
    titleZh: '主谓一致 - 难点',
    level: 'junior',
    category: 'sentence',
    content: `定语从句中谓语与先行词一致；倒装句中与主语一致`,
    examples: [
      'He is one of the students who work hard.',
      'Here comes the teacher.',
      'The teacher as well as students is present.',
    ],
    createdAt: '2024-04-30',
  },
  {
    id: 'g-jun-37',
    title: 'there be句型的扩展',
    titleZh: 'there be句型的扩展',
    level: 'junior',
    category: 'sentence',
    content: `there be + 主语 + 动词ing/动词ed/不定式`,
    examples: [
      'There is a boy playing outside.',
      'There are many people waiting.',
      'There seems to be a problem.',
    ],
    createdAt: '2024-05-01',
  },
  {
    id: 'g-jun-38',
    title: 'used to / would / be used to',
    titleZh: 'used to / would / be used to',
    level: 'junior',
    category: 'tense',
    content: `used to过去习惯，would表示过去反复动作，be used to习惯于`,
    examples: [
      'I used to smoke.',
      'She would visit us every Sunday.',
      'I am used to getting up early.',
    ],
    createdAt: '2024-05-02',
  },
  {
    id: 'g-jun-39',
    title: '情态动词辨析 - can/could',
    titleZh: '情态动词辨析 - can/could',
    level: 'junior',
    category: 'tense',
    content: `can表示能力，could更委婉；could have done表示过去可能的推测`,
    examples: [
      'Can you swim?',
      'Could you please help?',
      'He could have gone home.',
    ],
    createdAt: '2024-05-03',
  },
  {
    id: 'g-jun-40',
    title: '情态动词辨析 - may/might',
    titleZh: '情态动词辨析 - may/might',
    level: 'junior',
    category: 'tense',
    content: `may表示允许或可能，might更正式或虚拟`,
    examples: [
      'May I come in?',
      'It might rain.',
      'You might be right.',
    ],
    createdAt: '2024-05-04',
  },
  {
    id: 'g-jun-41',
    title: '情态动词辨析 - must/have to',
    titleZh: '情态动词辨析 - must/have to',
    level: 'junior',
    category: 'tense',
    content: `must主观必须，have to客观需要；mustn't禁止，don't have to不必`,
    examples: [
      'You must finish today.',
      'I have to work hard.',
      'You don\'t have to come.',
    ],
    createdAt: '2024-05-05',
  },
  {
    id: 'g-jun-42',
    title: '情态动词辨析 - should/ought to',
    titleZh: '情态动词辨析 - should/ought to',
    level: 'junior',
    category: 'tense',
    content: `should/ought to表示建议或期望`,
    examples: [
      'You should study harder.',
      'You ought to apologize.',
      'Should I help you?',
    ],
    createdAt: '2024-05-06',
  },
  {
    id: 'g-jun-43',
    title: '情态动词辨析 - will/would',
    titleZh: '情态动词辨析 - will/would',
    level: 'junior',
    category: 'tense',
    content: `will表示将来或意愿，would用于虚拟或委婉`,
    examples: [
      'Will you marry me?',
      'Would you like some tea?',
      'If I were you, I would go.',
    ],
    createdAt: '2024-05-07',
  },
  {
    id: 'g-jun-44',
    title: '形容词比较级 - 特殊结构',
    titleZh: '形容词比较级 - 特殊结构',
    level: 'junior',
    category: 'sentence',
    content: `the more...the more...；比较级 + and + 比较级`,
    examples: [
      'The more you study, the more you know.',
      'It is getting colder and colder.',
      'She is more and more beautiful.',
    ],
    createdAt: '2024-05-08',
  },
  {
    id: 'g-jun-45',
    title: '倍数表达',
    titleZh: '倍数表达',
    level: 'junior',
    category: 'sentence',
    content: `A is twice/three times as big as B；A is twice/three times the size of B`,
    examples: [
      'This room is twice as big as that one.',
      'He is three times the height of his son.',
      'Our company is twice larger than theirs.',
    ],
    createdAt: '2024-05-09',
  },
  {
    id: 'g-jun-46',
    title: '介词 at/on/in',
    titleZh: '介词 at/on/in',
    level: 'junior',
    category: 'partOfSpeech',
    content: `at表示点，on表示面，in表示内部；at 7 o'clock, on Monday, in April`,
    examples: [
      'I wake up at 6.',
      'We have class on Monday.',
      'It happened in 2020.',
    ],
    createdAt: '2024-05-10',
  },
  {
    id: 'g-jun-47',
    title: '介词 by/with/without',
    titleZh: '介词 by/with/without',
    level: 'junior',
    category: 'partOfSpeech',
    content: `by表示方式，with表示工具，without表示没有`,
    examples: [
      'I go by bus.',
      'I write with a pen.',
      'I can\'t live without you.',
    ],
    createdAt: '2024-05-11',
  },
  {
    id: 'g-jun-48',
    title: '介词 of/for/from/to',
    titleZh: '介词 of/for/from/to',
    level: 'junior',
    category: 'partOfSpeech',
    content: `of表示所属，for表示目的，from表示来源，to表示方向`,
    examples: [
      'a book of mine',
      'This is for you.',
      'I am from China.',
      'Go to school.',
    ],
    createdAt: '2024-05-12',
  },
  {
    id: 'g-jun-49',
    title: '连词 and/but/or/nor',
    titleZh: '连词 and/but/or/nor',
    level: 'junior',
    category: 'partOfSpeech',
    content: `and并列，but转折，or选择，nor否定并列`,
    examples: [
      'I like math and English.',
      'She is smart but lazy.',
      'Do you want tea or coffee?',
      'I don\'t like math, nor do I like English.',
    ],
    createdAt: '2024-05-13',
  },
  {
    id: 'g-jun-50',
    title: '并列句与复合句',
    titleZh: '并列句与复合句',
    level: 'junior',
    category: 'sentence',
    content: `并列句用并列连词，复合句用从属连词`,
    examples: [
      'I came and she left.',
      'I came because she called.',
      'He is tall but she is short.',
    ],
    createdAt: '2024-05-14',
  },
  {
    id: 'g-jun-51',
    title: '感叹句的多种形式',
    titleZh: '感叹句的多种形式',
    level: 'junior',
    category: 'sentence',
    content: `What + (a/an) + 形容词 + 名词 + (主语 + 动词)!；How + 形容词/副词 + 主语 + 动词!`,
    examples: [
      'What a beautiful day it is!',
      'How beautiful the day is!',
      'What an interesting book this is!',
    ],
    createdAt: '2024-05-16',
  },
  {
    id: 'g-jun-52',
    title: '反意疑问句 - 难点',
    titleZh: '反意疑问句 - 难点',
    level: 'junior',
    category: 'sentence',
    content: `祈使句、let's开头的反意疑问句用shall we/won't you`,
    examples: [
      'Don\'t open the door, will you?',
      'Let\'s go, shall we?',
      'Be quiet, won\'t you?',
    ],
    createdAt: '2024-05-17',
  },
  {
    id: 'g-jun-53',
    title: '祈使句 - 多种形式',
    titleZh: '祈使句 - 多种形式',
    level: 'junior',
    category: 'sentence',
    content: `肯定祈使句、否定祈使句、let祈使句、no + 名词/动名词`,
    examples: [
      'Sit down please.',
      'Don\'t be late.',
      'Let\'s play games.',
      'No smoking!',
    ],
    createdAt: '2024-05-18',
  },
  {
    id: 'g-jun-54',
    title: '现在分词作状语',
    titleZh: '现在分词作状语',
    level: 'junior',
    category: 'partOfSpeech',
    content: `现在分词作状语表示与主句主语主动关系`,
    examples: [
      'Walking in the park, I met her.',
      'Seeing the teacher, the students stood up.',
      'Being tired, I slept early.',
    ],
    createdAt: '2024-05-19',
  },
  {
    id: 'g-jun-55',
    title: '过去分词作状语',
    titleZh: '过去分词作状语',
    level: 'junior',
    category: 'partOfSpeech',
    content: `过去分词作状语表示与主句主语被动关系`,
    examples: [
      'Given more time, I would do it better.',
      'Seen from space, the earth looks blue.',
      'Broken, the toy cannot be fixed.',
    ],
    createdAt: '2024-05-20',
  },
  {
    id: 'g-jun-56',
    title: '不定式作状语',
    titleZh: '不定式作状语',
    level: 'junior',
    category: 'partOfSpeech',
    content: `不定式作状语表示目的、结果或原因`,
    examples: [
      'I came here to study.',
      'He is too young to understand.',
      'I am glad to meet you.',
    ],
    createdAt: '2024-05-21',
  },
  {
    id: 'g-jun-57',
    title: '动名词作主语',
    titleZh: '动名词作主语',
    level: 'junior',
    category: 'partOfSpeech',
    content: `动名词作主语表示习惯性或已发生的动作`,
    examples: [
      'Learning English is important.',
      'Reading books is my hobby.',
      'Smoking is harmful.',
    ],
    createdAt: '2024-05-22',
  },
  {
    id: 'g-jun-58',
    title: '不定式和动名词的区别',
    titleZh: '不定式和动名词的区别',
    level: 'junior',
    category: 'partOfSpeech',
    content: `不定式表具体、将来看法；动名词表习惯、已发生`,
    examples: [
      'I like to swim today. / I like swimming.',
      'I stopped to smoke. / I stopped smoking.',
      'Remember to call. / I remember calling.',
    ],
    createdAt: '2024-05-23',
  },
  {
    id: 'g-jun-59',
    title: '动词短语 - put',
    titleZh: '动词短语 - put',
    level: 'junior',
    category: 'pattern',
    content: `put构成的短语：put on, put off, put up with, put forward`,
    examples: [
      'Put on your coat.',
      'Don\'t put off the meeting.',
      'I can\'t put up with the noise.',
    ],
    createdAt: '2024-05-24',
  },
  {
    id: 'g-jun-60',
    title: '动词短语 - take',
    titleZh: '动词短语 - take',
    level: 'junior',
    category: 'pattern',
    content: `take构成的短语：take off, take up, take care of, take part in`,
    examples: [
      'Take off your shoes.',
      'She took up painting.',
      'We take care of the environment.',
    ],
    createdAt: '2024-05-25',
  },
  {
    id: 'g-jun-61',
    title: '动词短语 - come',
    titleZh: '动词短语 - come',
    level: 'junior',
    category: 'pattern',
    content: `come构成的短语：come across, come up with, come true, come back`,
    examples: [
      'I came across an old friend.',
      'She came up with a good idea.',
      'My dream came true.',
    ],
    createdAt: '2024-05-26',
  },
  {
    id: 'g-jun-62',
    title: '动词短语 - go',
    titleZh: '动词短语 - go',
    level: 'junior',
    category: 'pattern',
    content: `go构成的短语：go through, go on, go for, go without`,
    examples: [
      'Go through the document.',
      'Life goes on.',
      'Go for a walk.',
    ],
    createdAt: '2024-05-27',
  },
  {
    id: 'g-jun-63',
    title: '介词短语 - because of/due to',
    titleZh: '介词短语 - because of/due to',
    level: 'junior',
    category: 'pattern',
    content: `because of, due to, owing to, thanks to + 名词`,
    examples: [
      'Because of the rain, we stayed home.',
      'Due to the traffic, I was late.',
      'Thanks to your help, I succeeded.',
    ],
    createdAt: '2024-05-28',
  },
  {
    id: 'g-jun-64',
    title: '介词短语 - in spite of',
    titleZh: '介词短语 - in spite of',
    level: 'junior',
    category: 'pattern',
    content: `in spite of, despite, instead of, apart from + 名词/动名词`,
    examples: [
      'In spite of the rain, we went out.',
      'Despite being tired, she worked.',
      'Instead of watching TV, I studied.',
    ],
    createdAt: '2024-05-29',
  },
  {
    id: 'g-jun-65',
    title: '固定搭配 - pay attention to',
    titleZh: '固定搭配 - pay attention to',
    level: 'junior',
    category: 'pattern',
    content: `pay attention to, look forward to, stick to, lead to`,
    examples: [
      'Pay attention to your study.',
      'I look forward to meeting you.',
      'Sticky to your plan.',
    ],
    createdAt: '2024-05-30',
  },
  {
    id: 'g-jun-66',
    title: '固定搭配 - make',
    titleZh: '固定搭配 - make',
    level: 'junior',
    category: 'pattern',
    content: `make progress, make decisions, make mistakes, make money`,
    examples: [
      'I made progress in English.',
      'She made a decision.',
      'Everyone makes mistakes.',
    ],
    createdAt: '2024-05-31',
  },
  {
    id: 'g-jun-67',
    title: '固定搭配 - take',
    titleZh: '固定搭配 - take',
    level: 'junior',
    category: 'pattern',
    content: `take risks, take measures, take advantage of, take into account`,
    examples: [
      'We must take risks.',
      'Take measures to improve.',
      'Take advantage of the opportunity.',
    ],
    createdAt: '2024-06-01',
  },
  {
    id: 'g-jun-68',
    title: '句型转换 - 主动变被动',
    titleZh: '句型转换 - 主动变被动',
    level: 'junior',
    category: 'pattern',
    content: `把宾语变主语，谓语变被动语态，主语变by短语或省略`,
    examples: [
      'I read this book. → This book is read by me.',
      'She wrote a letter. → A letter was written by her.',
      'They will finish the work. → The work will be finished.',
    ],
    createdAt: '2024-06-02',
  },
  {
    id: 'g-jun-69',
    title: '句型转换 - 简单句变复合句',
    titleZh: '句型转换 - 简单句变复合句',
    level: 'junior',
    category: 'pattern',
    content: `简单句可以通过加从属连词变复合句`,
    examples: [
      'I like English. → English is what I like.',
      'He is tall. → He is the tallest in the class.',
      'She came. → When she came, I was sleeping.',
    ],
    createdAt: '2024-06-03',
  },
  {
    id: 'g-jun-70',
    title: '句型转换 - 合并句子',
    titleZh: '句型转换 - 合并句子',
    level: 'junior',
    category: 'pattern',
    content: `用定语从句、状语从句或非谓语动词合并句子`,
    examples: [
      'The man is my teacher. He taught me English. → The man who taught me English is my teacher.',
      'I studied hard. I passed the exam. → I studied hard, so I passed the exam.',
      'I saw her. She was crying. → I saw her crying.',
    ],
    createdAt: '2024-06-04',
  },
  {
    id: 'g-jun-71',
    title: '综合语法复习 - 初中重点',
    titleZh: '综合语法复习 - 初中重点',
    level: 'junior',
    category: 'pattern',
    content: `初中语法重点：时态、被动语态、非谓语动词、三大从句`,
    examples: [
      'I have been learning English for five years.',
      'The work must be done today.',
      'What he said is true.',
    ],
    createdAt: '2024-06-05',
  },
  {
    id: 'g-jun-72',
    title: '综合语法复习 - 易错点',
    titleZh: '综合语法复习 - 易错点',
    level: 'junior',
    category: 'pattern',
    content: `常见错误：双谓语、时态不一致、虚拟语气误用`,
    examples: [
      'I am liking it. → I like it.',
      'If I was you... → If I were you...',
      'I wish I have money. → I wish I had money.',
    ],
    createdAt: '2024-06-06',
  },
  {
    id: 'g-jun-73',
    title: '完形填空技巧',
    titleZh: '完形填空技巧',
    level: 'junior',
    category: 'reading',
    content: `完形填空：先通读全文，理解大意，再逐空选择`,
    examples: [
      'Read the whole passage first.',
      'Consider the context.',
      'Check grammar and meaning.',
    ],
    createdAt: '2024-06-08',
  },
  {
    id: 'g-jun-74',
    title: '阅读理解技巧',
    titleZh: '阅读理解技巧',
    level: 'junior',
    category: 'reading',
    content: `阅读理解：找主题句、抓关键词、理清脉络`,
    examples: [
      'Find the main idea.',
      'Look for key words.',
      'Understand the structure.',
    ],
    createdAt: '2024-06-09',
  },
  {
    id: 'g-jun-75',
    title: '写作提升 - 连接词',
    titleZh: '写作提升 - 连接词',
    level: 'junior',
    category: 'pattern',
    content: `写作常用连接词：first, then, next, finally, however, therefore`,
    examples: [
      'First, introduce the topic.',
      'Then, give your opinions.',
      'However, some people disagree.',
    ],
    createdAt: '2024-06-10',
  },
  {
    id: 'g-jun-76',
    title: '写作提升 - 句式多样性',
    titleZh: '写作提升 - 句式多样性',
    level: 'junior',
    category: 'pattern',
    content: `使用多种句式：简单句、并列句、复合句、倒装句、强调句`,
    examples: [
      'Not only did I learn English, but also French.',
      'It was he who helped me.',
      'The harder you work, the luckier you get.',
    ],
    createdAt: '2024-06-11',
  },
  {
    id: 'g-jun-77',
    title: '写作提升 - 高级词汇',
    titleZh: '写作提升 - 高级词汇',
    level: 'junior',
    category: 'word',
    content: `用高级词汇替换常见词：important → significant, good → excellent`,
    examples: [
      'Using advanced vocabulary shows language proficiency.',
      'Significant progress has been made.',
      'Excellent results were achieved.',
    ],
    createdAt: '2024-06-12',
  },
  {
    id: 'g-jun-78',
    title: '听力进阶技巧',
    titleZh: '听力进阶技巧',
    level: 'junior',
    category: 'reading',
    content: `听力：预读选项、捕捉信号词、学会推断`,
    examples: [
      'Preview the options first.',
      'Listen for signal words.',
      'Make reasonable inferences.',
    ],
    createdAt: '2024-06-13',
  },
  {
    id: 'g-jun-79',
    title: '口语实践 - 表达观点',
    titleZh: '口语实践 - 表达观点',
    level: 'junior',
    category: 'communication',
    content: `口语表达观点：I think/believe/feel that..., As I see it...`,
    examples: [
      'As I see it, this is a good opportunity.',
      'I strongly believe that education matters.',
      'From my point of view, we should act now.',
    ],
    createdAt: '2024-06-14',
  },
  {
    id: 'g-jun-80',
    title: '综合训练 - 中考题型',
    titleZh: '综合训练 - 中考题型',
    level: 'junior',
    category: 'pattern',
    content: `综合训练涵盖各种中考题型：单项选择、完形填空、阅读理解、写作`,
    examples: [
      'Practice makes perfect.',
      'Review all grammar points.',
      'Focus on your weak areas.',
    ],
    createdAt: '2024-06-15',
  },
  {
    id: 'g-jun-81',
    title: '语法精讲 - 从句总结',
    titleZh: '语法精讲 - 从句总结',
    level: 'junior',
    category: 'clause',
    content: `从句总结：名词性从句、定语从句、状语从句的功能和用法`,
    examples: [
      'I know who came. (宾语从句)',
      'The book which I bought is good. (定语从句)',
      'When I arrived, he left. (状语从句)',
    ],
    createdAt: '2024-06-16',
  },
  {
    id: 'g-jun-82',
    title: '练习巩固 - 时态语态',
    titleZh: '练习巩固 - 时态语态',
    level: 'junior',
    category: 'tense',
    content: `练习各种时态和语态的构成和用法`,
    examples: [
      'By next month, I will have lived here for five years.',
      'The letter was written yesterday.',
      'Having finished the work, I went home.',
    ],
    createdAt: '2024-06-17',
  },
  {
    id: 'g-jun-83',
    title: '初中综合练习 1',
    titleZh: '初中综合练习 1',
    level: 'junior',
    category: 'word',
    content: `这是第1个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 1-jun-1.',
      'She goes to school every day 1.',
      'They are playing games now 1.',
    ],
    createdAt: '2024-06-18',
  },
  {
    id: 'g-jun-84',
    title: '初中综合练习 2',
    titleZh: '初中综合练习 2',
    level: 'junior',
    category: 'tense',
    content: `这是第2个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 2-jun-1.',
      'She goes to school every day 2.',
      'They are playing games now 2.',
    ],
    createdAt: '2024-06-19',
  },
  {
    id: 'g-jun-85',
    title: '初中综合练习 3',
    titleZh: '初中综合练习 3',
    level: 'junior',
    category: 'word',
    content: `这是第3个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 3-jun-1.',
      'She goes to school every day 3.',
      'They are playing games now 3.',
    ],
    createdAt: '2024-06-20',
  },
  {
    id: 'g-jun-86',
    title: '初中综合练习 4',
    titleZh: '初中综合练习 4',
    level: 'junior',
    category: 'sentence',
    content: `这是第4个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 4-jun-1.',
      'She goes to school every day 4.',
      'They are playing games now 4.',
    ],
    createdAt: '2024-06-21',
  },
  {
    id: 'g-jun-87',
    title: '初中综合练习 5',
    titleZh: '初中综合练习 5',
    level: 'junior',
    category: 'partOfSpeech',
    content: `这是第5个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 5-jun-1.',
      'She goes to school every day 5.',
      'They are playing games now 5.',
    ],
    createdAt: '2024-06-22',
  },
  {
    id: 'g-jun-88',
    title: '初中综合练习 6',
    titleZh: '初中综合练习 6',
    level: 'junior',
    category: 'voice',
    content: `这是第6个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 6-jun-1.',
      'She goes to school every day 6.',
      'They are playing games now 6.',
    ],
    createdAt: '2024-06-23',
  },
  {
    id: 'g-jun-89',
    title: '初中综合练习 7',
    titleZh: '初中综合练习 7',
    level: 'junior',
    category: 'clause',
    content: `这是第7个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 7-jun-1.',
      'She goes to school every day 7.',
      'They are playing games now 7.',
    ],
    createdAt: '2024-06-24',
  },
  {
    id: 'g-jun-90',
    title: '初中综合练习 8',
    titleZh: '初中综合练习 8',
    level: 'junior',
    category: 'voice',
    content: `这是第8个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 8-jun-1.',
      'She goes to school every day 8.',
      'They are playing games now 8.',
    ],
    createdAt: '2024-06-25',
  },
  {
    id: 'g-jun-91',
    title: '初中综合练习 9',
    titleZh: '初中综合练习 9',
    level: 'junior',
    category: 'pattern',
    content: `这是第9个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 9-jun-1.',
      'She goes to school every day 9.',
      'They are playing games now 9.',
    ],
    createdAt: '2024-06-26',
  },
  {
    id: 'g-jun-92',
    title: '初中综合练习 10',
    titleZh: '初中综合练习 10',
    level: 'junior',
    category: 'word',
    content: `这是第10个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 10-jun-1.',
      'She goes to school every day 10.',
      'They are playing games now 10.',
    ],
    createdAt: '2024-06-27',
  },
  {
    id: 'g-jun-93',
    title: '初中综合练习 11',
    titleZh: '初中综合练习 11',
    level: 'junior',
    category: 'word',
    content: `这是第11个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 11-jun-1.',
      'She goes to school every day 11.',
      'They are playing games now 11.',
    ],
    createdAt: '2024-06-28',
  },
  {
    id: 'g-jun-94',
    title: '初中综合练习 12',
    titleZh: '初中综合练习 12',
    level: 'junior',
    category: 'partOfSpeech',
    content: `这是第12个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 12-jun-1.',
      'She goes to school every day 12.',
      'They are playing games now 12.',
    ],
    createdAt: '2024-06-29',
  },
  {
    id: 'g-jun-95',
    title: '初中综合练习 13',
    titleZh: '初中综合练习 13',
    level: 'junior',
    category: 'tense',
    content: `这是第13个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 13-jun-1.',
      'She goes to school every day 13.',
      'They are playing games now 13.',
    ],
    createdAt: '2024-07-01',
  },
  {
    id: 'g-jun-96',
    title: '初中综合练习 14',
    titleZh: '初中综合练习 14',
    level: 'junior',
    category: 'tense',
    content: `这是第14个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 14-jun-1.',
      'She goes to school every day 14.',
      'They are playing games now 14.',
    ],
    createdAt: '2024-07-02',
  },
  {
    id: 'g-jun-97',
    title: '初中综合练习 15',
    titleZh: '初中综合练习 15',
    level: 'junior',
    category: 'partOfSpeech',
    content: `这是第15个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 15-jun-1.',
      'She goes to school every day 15.',
      'They are playing games now 15.',
    ],
    createdAt: '2024-07-03',
  },
  {
    id: 'g-jun-98',
    title: '初中综合练习 16',
    titleZh: '初中综合练习 16',
    level: 'junior',
    category: 'sentence',
    content: `这是第16个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 16-jun-1.',
      'She goes to school every day 16.',
      'They are playing games now 16.',
    ],
    createdAt: '2024-07-04',
  },
  {
    id: 'g-jun-99',
    title: '初中综合练习 17',
    titleZh: '初中综合练习 17',
    level: 'junior',
    category: 'tense',
    content: `这是第17个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 17-jun-1.',
      'She goes to school every day 17.',
      'They are playing games now 17.',
    ],
    createdAt: '2024-07-05',
  },
  {
    id: 'g-jun-100',
    title: '初中综合练习 18',
    titleZh: '初中综合练习 18',
    level: 'junior',
    category: 'word',
    content: `这是第18个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 18-jun-1.',
      'She goes to school every day 18.',
      'They are playing games now 18.',
    ],
    createdAt: '2024-07-06',
  },
  {
    id: 'g-jun-101',
    title: '初中综合练习 19',
    titleZh: '初中综合练习 19',
    level: 'junior',
    category: 'tense',
    content: `这是第19个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 19-jun-1.',
      'She goes to school every day 19.',
      'They are playing games now 19.',
    ],
    createdAt: '2024-07-07',
  },
  {
    id: 'g-jun-102',
    title: '初中综合练习 20',
    titleZh: '初中综合练习 20',
    level: 'junior',
    category: 'reading',
    content: `这是第20个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 20-jun-1.',
      'She goes to school every day 20.',
      'They are playing games now 20.',
    ],
    createdAt: '2024-07-08',
  },
  {
    id: 'g-jun-103',
    title: '初中综合练习 21',
    titleZh: '初中综合练习 21',
    level: 'junior',
    category: 'clause',
    content: `这是第21个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 21-jun-1.',
      'She goes to school every day 21.',
      'They are playing games now 21.',
    ],
    createdAt: '2024-07-09',
  },
  {
    id: 'g-jun-104',
    title: '初中综合练习 22',
    titleZh: '初中综合练习 22',
    level: 'junior',
    category: 'sentence',
    content: `这是第22个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 22-jun-1.',
      'She goes to school every day 22.',
      'They are playing games now 22.',
    ],
    createdAt: '2024-07-10',
  },
  {
    id: 'g-jun-105',
    title: '初中综合练习 23',
    titleZh: '初中综合练习 23',
    level: 'junior',
    category: 'clause',
    content: `这是第23个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 23-jun-1.',
      'She goes to school every day 23.',
      'They are playing games now 23.',
    ],
    createdAt: '2024-07-11',
  },
  {
    id: 'g-jun-106',
    title: '初中综合练习 24',
    titleZh: '初中综合练习 24',
    level: 'junior',
    category: 'reading',
    content: `这是第24个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 24-jun-1.',
      'She goes to school every day 24.',
      'They are playing games now 24.',
    ],
    createdAt: '2024-07-12',
  },
  {
    id: 'g-jun-107',
    title: '初中综合练习 25',
    titleZh: '初中综合练习 25',
    level: 'junior',
    category: 'word',
    content: `这是第25个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 25-jun-1.',
      'She goes to school every day 25.',
      'They are playing games now 25.',
    ],
    createdAt: '2024-07-13',
  },
  {
    id: 'g-jun-108',
    title: '初中综合练习 26',
    titleZh: '初中综合练习 26',
    level: 'junior',
    category: 'pattern',
    content: `这是第26个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 26-jun-1.',
      'She goes to school every day 26.',
      'They are playing games now 26.',
    ],
    createdAt: '2024-07-14',
  },
  {
    id: 'g-jun-109',
    title: '初中综合练习 27',
    titleZh: '初中综合练习 27',
    level: 'junior',
    category: 'pattern',
    content: `这是第27个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 27-jun-1.',
      'She goes to school every day 27.',
      'They are playing games now 27.',
    ],
    createdAt: '2024-07-15',
  },
  {
    id: 'g-jun-110',
    title: '初中综合练习 28',
    titleZh: '初中综合练习 28',
    level: 'junior',
    category: 'clause',
    content: `这是第28个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 28-jun-1.',
      'She goes to school every day 28.',
      'They are playing games now 28.',
    ],
    createdAt: '2024-07-16',
  },
  {
    id: 'g-jun-111',
    title: '初中综合练习 29',
    titleZh: '初中综合练习 29',
    level: 'junior',
    category: 'pattern',
    content: `这是第29个初中综合语法练习，涵盖了初中阶段的重要语法知识点。\n\n通过大量练习可以巩固语法基础，提高语言运用能力。`,
    examples: [
      'This is example sentence 29-jun-1.',
      'She goes to school every day 29.',
      'They are playing games now 29.',
    ],
    createdAt: '2024-07-17',
  },
  {
    id: 'g-sen-1',
    title: '定语从句 - 介词+关系代词',
    titleZh: '定语从句 - 介词+关系代词',
    level: 'senior',
    category: 'clause',
    content: `介词+关系代词：the person to whom you spoke；this is the book for which I paid`,
    examples: [
      'The person to whom you spoke is my teacher.',
      'This is the book for which I paid.',
      'The reason for which I apologize is clear.',
    ],
    createdAt: '2024-07-18',
  },
  {
    id: 'g-sen-2',
    title: '定语从句 - as/which引导',
    titleZh: '定语从句 - as/which引导',
    level: 'senior',
    category: 'clause',
    content: `as引导非限制性定语从句可指代整句话，which也可以`,
    examples: [
      'As we know, practice makes perfect.',
      'He is a teacher, which I am not.',
      'The sun rises in the east, as everyone knows.',
    ],
    createdAt: '2024-07-19',
  },
  {
    id: 'g-sen-3',
    title: '定语从句 - 只能用that的情况',
    titleZh: '定语从句 - 只能用that的情况',
    level: 'senior',
    category: 'clause',
    content: `先行词被the only, the very, 序数词, 最高级修饰时用that`,
    examples: [
      'He is the only person that can help.',
      'This is the best movie that I have seen.',
      'The first thing that I did was to call you.',
    ],
    createdAt: '2024-07-20',
  },
  {
    id: 'g-sen-4',
    title: '名词性从句 - whether与if',
    titleZh: '名词性从句 - whether与if',
    level: 'senior',
    category: 'clause',
    content: `whether可与or not连用，if不行；whether可引导主语从句，if不行`,
    examples: [
      'Whether or not you come is your choice.',
      'It is uncertain whether she will come.',
      'Ask him if he needs help.',
    ],
    createdAt: '2024-07-21',
  },
  {
    id: 'g-sen-5',
    title: '名词性从句 - 虚拟语气',
    titleZh: '名词性从句 - 虚拟语气',
    level: 'senior',
    category: 'clause',
    content: `suggest, demand, insist等动词后的从句用(should)+动词原形`,
    examples: [
      'I suggest that he (should) go.',
      'She insisted that he (should) be present.',
      'It is essential that everyone (should) be on time.',
    ],
    createdAt: '2024-07-22',
  },
  {
    id: 'g-sen-6',
    title: '状语从句 - where引导',
    titleZh: '状语从句 - where引导',
    level: 'senior',
    category: 'clause',
    content: `where可以引导地点状语从句和对比性定语从句`,
    examples: [
      'Where there is a will, there is a way.',
      'Where others are weak, he is strong.',
      'Go where you like.',
    ],
    createdAt: '2024-07-24',
  },
  {
    id: 'g-sen-7',
    title: '状语从句 - unless与if not',
    titleZh: '状语从句 - unless与if not',
    level: 'senior',
    category: 'clause',
    content: `unless = if not，但含义有细微差别`,
    examples: [
      'Unless you work hard, you will fail.',
      'If you don\'t study, you will fail.',
      'I won\'t go unless you go.',
    ],
    createdAt: '2024-07-25',
  },
  {
    id: 'g-sen-8',
    title: '状语从句 - 省略',
    titleZh: '状语从句 - 省略',
    level: 'senior',
    category: 'clause',
    content: `状语从句可省略主语和be动词`,
    examples: [
      'When (I was) young, I lived in Beijing.',
      'If (it is) possible, please call me.',
      'Though (he was) tired, he kept working.',
    ],
    createdAt: '2024-07-26',
  },
  {
    id: 'g-sen-9',
    title: '虚拟语气 - 错综时间',
    titleZh: '虚拟语气 - 错综时间',
    level: 'senior',
    category: 'tense',
    content: `条件句和主句时间不一致的虚拟语气`,
    examples: [
      'If I had studied medicine, I would be a doctor now.',
      'If I were you, I would have taken the job.',
      'If it should rain, we would have to cancel.',
    ],
    createdAt: '2024-07-27',
  },
  {
    id: 'g-sen-10',
    title: '虚拟语气 - wish',
    titleZh: '虚拟语气 - wish',
    level: 'senior',
    category: 'tense',
    content: `wish后的虚拟语气：过去式表现在，had done表过去，would do表将来`,
    examples: [
      'I wish I were rich.',
      'I wish I had studied harder.',
      'I wish it would stop raining.',
    ],
    createdAt: '2024-07-28',
  },
  {
    id: 'g-sen-11',
    title: '虚拟语气 - would rather',
    titleZh: '虚拟语气 - would rather',
    level: 'senior',
    category: 'tense',
    content: `would rather后的虚拟语气用法`,
    examples: [
      'I would rather you came tomorrow.',
      'I would rather he had known the truth.',
      'I would rather you didn\'t go.',
    ],
    createdAt: '2024-07-29',
  },
  {
    id: 'g-sen-12',
    title: '倒装句 - 条件倒装',
    titleZh: '倒装句 - 条件倒装',
    level: 'senior',
    category: 'sentence',
    content: `were/had/should可提前省略if`,
    examples: [
      'Were I you, I would go.',
      'Had I known, I would have told you.',
      'Should it rain, we would cancel.',
    ],
    createdAt: '2024-07-30',
  },
  {
    id: 'g-sen-13',
    title: '倒装句 - so/neither倒装',
    titleZh: '倒装句 - so/neither倒装',
    level: 'senior',
    category: 'sentence',
    content: `so/neither + 助动词 + 主语，表示"也/也不"`,
    examples: [
      'So did I.',
      'Neither can I.',
      'So hard does he work that he succeeds.',
    ],
    createdAt: '2024-07-31',
  },
  {
    id: 'g-sen-14',
    title: '强调句 - 强调状语',
    titleZh: '强调句 - 强调状语',
    level: 'senior',
    category: 'sentence',
    content: `可以强调介词短语、状语从句等`,
    examples: [
      'It was at the airport that I met her.',
      'It was because of her help that I succeeded.',
      'It was only then that I understood.',
    ],
    createdAt: '2024-08-01',
  },
  {
    id: 'g-sen-15',
    title: '省略句 - 情景省略',
    titleZh: '省略句 - 情景省略',
    level: 'senior',
    category: 'sentence',
    content: `在对话、替代、习惯用语中的省略`,
    examples: [
      'Any questions?',
      'If possible.',
      'When in Rome.',
    ],
    createdAt: '2024-08-02',
  },
  {
    id: 'g-sen-16',
    title: '独立主格 - with结构',
    titleZh: '独立主格 - with结构',
    level: 'senior',
    category: 'pattern',
    content: `with + 宾语 + 宾补的多种形式`,
    examples: [
      'With his homework finished, he played.',
      'With the light on, we can\'t sleep.',
      'With so much work to do, I\'m busy.',
    ],
    createdAt: '2024-08-03',
  },
  {
    id: 'g-sen-17',
    title: '独立主格 - 逻辑主语不同',
    titleZh: '独立主格 - 逻辑主语不同',
    level: 'senior',
    category: 'pattern',
    content: `独立主格的主语与主句主语不同`,
    examples: [
      'Weather permitting, we will go.',
      'All things considered, the plan is good.',
      'Time permitting, I\'ll visit you.',
    ],
    createdAt: '2024-08-04',
  },
  {
    id: 'g-sen-18',
    title: '非谓语动词 - 综合',
    titleZh: '非谓语动词 - 综合',
    level: 'senior',
    category: 'partOfSpeech',
    content: `不定式、动名词、分词的功能对比`,
    examples: [
      'To err is human. (不定式作主语)',
      'Seeing is believing. (动名词作主语)',
      'The broken window (过去分词作定语)',
    ],
    createdAt: '2024-08-05',
  },
  {
    id: 'g-sen-19',
    title: '非谓语动词 - 时态和语态',
    titleZh: '非谓语动词 - 时态和语态',
    level: 'senior',
    category: 'partOfSpeech',
    content: `非谓语动词的时态和语态变化`,
    examples: [
      'Having finished the work, I left. (完成式)',
      'Being built, the bridge is strong. (进行式)',
      'To be given a chance, I must try. (被动式)',
    ],
    createdAt: '2024-08-06',
  },
  {
    id: 'g-sen-20',
    title: '非谓语动词 - 否定式',
    titleZh: '非谓语动词 - 否定式',
    level: 'senior',
    category: 'partOfSpeech',
    content: `非谓语动词的否定式在前面加not`,
    examples: [
      'Not knowing her name, I couldn\'t call.',
      'Not to worry, everything will be fine.',
      'Not having studied, he failed.',
    ],
    createdAt: '2024-08-07',
  },
  {
    id: 'g-sen-21',
    title: '情态动词 - 推测过去',
    titleZh: '情态动词 - 推测过去',
    level: 'senior',
    category: 'tense',
    content: `must have done, can't have done, should have done等`,
    examples: [
      'He must have left.',
      'She can\'t have done that.',
      'You should have tried harder.',
    ],
    createdAt: '2024-08-08',
  },
  {
    id: 'g-sen-22',
    title: '情态动词 - 虚拟用法',
    titleZh: '情态动词 - 虚拟用法',
    level: 'senior',
    category: 'tense',
    content: `情态动词与虚拟语气结合`,
    examples: [
      'You could have helped.',
      'She might have been right.',
      'I would have come if I could.',
    ],
    createdAt: '2024-08-09',
  },
  {
    id: 'g-sen-23',
    title: '时态语态综合',
    titleZh: '时态语态综合',
    level: 'senior',
    category: 'tense',
    content: `各种时态的主动语态和被动语态综合运用`,
    examples: [
      'The building has been being built for two years.',
      'By next month, the project will have been completed.',
      'Having been warned, he was careful.',
    ],
    createdAt: '2024-08-10',
  },
  {
    id: 'g-sen-24',
    title: '主谓一致 - 难题',
    titleZh: '主谓一致 - 难题',
    level: 'senior',
    category: 'sentence',
    content: `主谓一致的难点：neither...nor, not only...but also, all等`,
    examples: [
      'Neither you nor I am wrong.',
      'Not only the students but also the teacher was present.',
      'All is well that ends well.',
    ],
    createdAt: '2024-08-11',
  },
  {
    id: 'g-sen-25',
    title: '省略与替代',
    titleZh: '省略与替代',
    level: 'senior',
    category: 'sentence',
    content: `用do/so/it/one替代前文以避免重复`,
    examples: [
      'I like English and so does she.',
      'I think so.',
      'I have a book; do you have one?',
    ],
    createdAt: '2024-08-12',
  },
  {
    id: 'g-sen-26',
    title: '修辞手法 - 暗喻',
    titleZh: '修辞手法 - 暗喻',
    level: 'senior',
    category: 'reading',
    content: `暗喻是隐含的比喻，不使用like/as`,
    examples: [
      'All the world\'s a stage.',
      'Time is a river.',
      'Life is a journey.',
    ],
    createdAt: '2024-08-13',
  },
  {
    id: 'g-sen-27',
    title: '修辞手法 - 夸张',
    titleZh: '修辞手法 - 夸张',
    level: 'senior',
    category: 'reading',
    content: `夸张是故意夸大或缩小以增强效果`,
    examples: [
      'I\'m so hungry I could eat a horse.',
      'She wept a river of tears.',
      'He is older than the hills.',
    ],
    createdAt: '2024-08-14',
  },
  {
    id: 'g-sen-28',
    title: '长难句分析',
    titleZh: '长难句分析',
    level: 'senior',
    category: 'reading',
    content: `分析长难句：找主句、从句、非谓语、并列结构`,
    examples: [
      'The man who I saw, whose name was John, told me.',
      'Having finished the work, I went home.',
      'Not only did he come, but he also stayed.',
    ],
    createdAt: '2024-08-16',
  },
  {
    id: 'g-sen-29',
    title: '并列结构',
    titleZh: '并列结构',
    level: 'senior',
    category: 'pattern',
    content: `并列多个成分：名词、动词、形容词、副词、从句`,
    examples: [
      'I like reading, writing, and swimming.',
      'He is tall, handsome, and intelligent.',
      'Both you and I are students.',
    ],
    createdAt: '2024-08-17',
  },
  {
    id: 'g-sen-30',
    title: '从句的嵌套',
    titleZh: '从句的嵌套',
    level: 'senior',
    category: 'clause',
    content: `从句中包含从句：定语从句中包含宾语从句等`,
    examples: [
      'The man who told me that you were coming is here.',
      'I know what you think she said.',
      'This is the reason why I believe what you told me.',
    ],
    createdAt: '2024-08-18',
  },
  {
    id: 'g-sen-31',
    title: 'It用法总结',
    titleZh: 'It用法总结',
    level: 'senior',
    category: 'partOfSpeech',
    content: `it作形式主语、形式宾语、强调词、指示代词`,
    examples: [
      'It is important to study.',
      'I find it hard to learn.',
      'It was he who helped.',
      'It is raining.',
    ],
    createdAt: '2024-08-19',
  },
  {
    id: 'g-sen-32',
    title: 'One/It/That用法',
    titleZh: 'One/It/That用法',
    level: 'senior',
    category: 'partOfSpeech',
    content: `one泛指同类之一，it指代特定物，that表对比`,
    examples: [
      'I need a pen. Do you have one?',
      'The book is interesting. It is on the table.',
      'The climate of Beijing is different from that of Shanghai.',
    ],
    createdAt: '2024-08-20',
  },
  {
    id: 'g-sen-33',
    title: '主语从句',
    titleZh: '主语从句',
    level: 'senior',
    category: 'clause',
    content: `主语从句可用that/whether/疑问词引导，it作形式主语`,
    examples: [
      'That he won surprised us.',
      'Whether she will come is uncertain.',
      'It is said that he is rich.',
    ],
    createdAt: '2024-08-21',
  },
  {
    id: 'g-sen-34',
    title: '表语从句',
    titleZh: '表语从句',
    level: 'senior',
    category: 'clause',
    content: `表语从句位于系动词后`,
    examples: [
      'The question is whether we can win.',
      'It seems that he is right.',
      'That is why I came.',
    ],
    createdAt: '2024-08-22',
  },
  {
    id: 'g-sen-35',
    title: '同位语从句',
    titleZh: '同位语从句',
    level: 'senior',
    category: 'clause',
    content: `同位语从句解释说明抽象名词`,
    examples: [
      'I have a dream that I will succeed.',
      'The fact that he is smart is obvious.',
      'The news that she won surprised us.',
    ],
    createdAt: '2024-08-23',
  },
  {
    id: 'g-sen-36',
    title: '现在分词完成式',
    titleZh: '现在分词完成式',
    level: 'senior',
    category: 'partOfSpeech',
    content: `Having done表示分词动作在谓语之前发生`,
    examples: [
      'Having finished the work, I went home.',
      'Having studied hard, he passed the exam.',
      'Having waited for two hours, I left.',
    ],
    createdAt: '2024-08-24',
  },
  {
    id: 'g-sen-37',
    title: '过去分词完成式',
    titleZh: '过去分词完成式',
    level: 'senior',
    category: 'partOfSpeech',
    content: `Having been done表示分词的被动和完成`,
    examples: [
      'Having been warned, he was careful.',
      'Having been told the news, she cried.',
      'Having been used for years, the car needs replacing.',
    ],
    createdAt: '2024-08-25',
  },
  {
    id: 'g-sen-38',
    title: '动词+doing',
    titleZh: '动词+doing',
    level: 'senior',
    category: 'partOfSpeech',
    content: `有些动词后只能接动名词：enjoy, mind, suggest, practice, risk`,
    examples: [
      'I enjoy reading.',
      'Would you mind opening the door?',
      'She suggested going out.',
    ],
    createdAt: '2024-08-26',
  },
  {
    id: 'g-sen-39',
    title: '动词+to do',
    titleZh: '动词+to do',
    level: 'senior',
    category: 'partOfSpeech',
    content: `有些动词后只能接不定式：want, hope, decide, plan, refuse`,
    examples: [
      'I want to study.',
      'She decided to go.',
      'They planned to travel.',
    ],
    createdAt: '2024-08-27',
  },
  {
    id: 'g-sen-40',
    title: '动词+doing或to do',
    titleZh: '动词+doing或to do',
    level: 'senior',
    category: 'partOfSpeech',
    content: `有些动词两者都可以：like, love, hate, start, begin, continue`,
    examples: [
      'I like swimming / to swim.',
      'She started learning / to learn English.',
      'They continued working / to work.',
    ],
    createdAt: '2024-08-28',
  },
  {
    id: 'g-sen-41',
    title: '阅读理解 - 推断题',
    titleZh: '阅读理解 - 推断题',
    level: 'senior',
    category: 'reading',
    content: `推断题需要基于原文信息进行合理推断`,
    examples: [
      'The author implies that...',
      'It can be inferred from the passage that...',
      'Based on the context, the word means...',
    ],
    createdAt: '2024-08-29',
  },
  {
    id: 'g-sen-42',
    title: '阅读理解 - 猜词题',
    titleZh: '阅读理解 - 猜词题',
    level: 'senior',
    category: 'reading',
    content: `根据上下文猜词义：定义、对比、因果、举例`,
    examples: [
      'The word "..." means...',
      'In the context, "..." refers to...',
      'The phrase "..." can be interpreted as...',
    ],
    createdAt: '2024-08-30',
  },
  {
    id: 'g-sen-43',
    title: '写作 - 开头结尾',
    titleZh: '写作 - 开头结尾',
    level: 'senior',
    category: 'pattern',
    content: `好的开头和结尾对作文至关重要`,
    examples: [
      'With the development of...',
      'In recent years, ...',
      'In conclusion, ...',
      'To sum up, ...',
    ],
    createdAt: '2024-08-31',
  },
  {
    id: 'g-sen-44',
    title: '写作 - 议论文',
    titleZh: '写作 - 议论文',
    level: 'senior',
    category: 'pattern',
    content: `议论文结构：引入、正方观点、反方观点、我的观点、结论`,
    examples: [
      'Some people believe that...',
      'However, others argue that...',
      'In my opinion, ...',
      'From my perspective, ...',
    ],
    createdAt: '2024-09-01',
  },
  {
    id: 'g-sen-45',
    title: '语法填空技巧',
    titleZh: '语法填空技巧',
    level: 'senior',
    category: 'pattern',
    content: `语法填词：分析句子结构、判断空白处成分`,
    examples: [
      'The book ___ (write) by him. → written',
      'I saw her ___ (cry). → crying',
      'To ___ (honest), I don\'t know.',
    ],
    createdAt: '2024-09-02',
  },
  {
    id: 'g-sen-46',
    title: '短文改错技巧',
    titleZh: '短文改错技巧',
    level: 'senior',
    category: 'pattern',
    content: `短文改错：多词、少词、错词、正确`,
    examples: [
      'The book are interesting. → is',
      'I enjoy to read books. → reading',
      'She didn\'t came. → come',
    ],
    createdAt: '2024-09-03',
  },
  {
    id: 'g-sen-47',
    title: '高考真题 - 从句',
    titleZh: '高考真题 - 从句',
    level: 'senior',
    category: 'clause',
    content: `高考从句真题精选练习`,
    examples: [
      'The reason ___ I was late is that I missed the bus.',
      'Is this the factory ___ produces toys?',
      '___ matters most is your attitude.',
    ],
    createdAt: '2024-09-04',
  },
  {
    id: 'g-sen-48',
    title: '高考真题 - 非谓语',
    titleZh: '高考真题 - 非谓语',
    level: 'senior',
    category: 'partOfSpeech',
    content: `高考非谓语动词真题精选`,
    examples: [
      '___ (see) from the hill, the city looks beautiful.',
      'The problem ___ (solve) now is important.',
      'I remember ___ (meet) her before.',
    ],
    createdAt: '2024-09-05',
  },
  {
    id: 'g-sen-49',
    title: '高考真题 - 虚拟语气',
    titleZh: '高考真题 - 虚拟语气',
    level: 'senior',
    category: 'tense',
    content: `高考虚拟语气真题精选`,
    examples: [
      'If I ___ (be) you, I would take the job.',
      'I wish I ___ (study) harder.',
      'But for your help, I ___ (fail).',
    ],
    createdAt: '2024-09-07',
  },
  {
    id: 'g-sen-50',
    title: '综合运用 - 高中语法',
    titleZh: '综合运用 - 高中语法',
    level: 'senior',
    category: 'pattern',
    content: `高中语法综合运用练习`,
    examples: [
      'Having been told many times, he still made the same mistake.',
      'The book ___ (publish) next month is popular.',
      'I would appreciate ___ (help).',
    ],
    createdAt: '2024-09-08',
  },
  {
    id: 'g-sen-51',
    title: '语法易错点 - 主谓一致',
    titleZh: '语法易错点 - 主谓一致',
    level: 'senior',
    category: 'sentence',
    content: `主谓一致易错点：就近原则、意义一致、集合名词`,
    examples: [
      'Neither the teacher nor the students are happy.',
      'The family is large.',
      'Two hundred dollars is too much.',
    ],
    createdAt: '2024-09-09',
  },
  {
    id: 'g-sen-52',
    title: '语法易错点 - 虚拟语气',
    titleZh: '语法易错点 - 虚拟语气',
    level: 'senior',
    category: 'tense',
    content: `虚拟语气易错点：if省略倒装、wish用法、should虚拟`,
    examples: [
      'Were I you, I would go.',
      'I wish I had a car.',
      'It is necessary that he should come.',
    ],
    createdAt: '2024-09-10',
  },
  {
    id: 'g-sen-53',
    title: '语法易错点 - 非谓语',
    titleZh: '语法易错点 - 非谓语',
    level: 'senior',
    category: 'partOfSpeech',
    content: `非谓语动词易错点：不定式和动名词、时态语态、分词独立结构`,
    examples: [
      'I remember to lock the door. (还没锁)',
      'I remember locking the door. (已锁)',
      'The weather being fine, we went out.',
    ],
    createdAt: '2024-09-11',
  },
  {
    id: 'g-sen-54',
    title: '语法易错点 - 从句',
    titleZh: '语法易错点 - 从句',
    level: 'senior',
    category: 'clause',
    content: `从句易错点：定语从句与同位语从句、名词性从句语序`,
    examples: [
      'The news that he told me is true. (定语)',
      'The news that he won is true. (同位)',
      'I don\'t know where does he live. → where he lives',
    ],
    createdAt: '2024-09-12',
  },
  {
    id: 'g-sen-55',
    title: '高中综合练习 1',
    titleZh: '高中综合练习 1',
    level: 'senior',
    category: 'reading',
    content: `这是第1个高中综合语法练习，涵盖了高中阶段的高级语法知识点。\n\n通过练习可以掌握复杂句型的分析方法。`,
    examples: [
      'This is example sentence 1-sen-1.',
      'She studies very hard 1.',
      'They have learned English for years 1.',
    ],
    createdAt: '2024-09-13',
  },
  {
    id: 'g-sen-56',
    title: '高中综合练习 2',
    titleZh: '高中综合练习 2',
    level: 'senior',
    category: 'tense',
    content: `这是第2个高中综合语法练习，涵盖了高中阶段的高级语法知识点。\n\n通过练习可以掌握复杂句型的分析方法。`,
    examples: [
      'This is example sentence 2-sen-1.',
      'She studies very hard 2.',
      'They have learned English for years 2.',
    ],
    createdAt: '2024-09-14',
  },
  {
    id: 'g-sen-57',
    title: '高中综合练习 3',
    titleZh: '高中综合练习 3',
    level: 'senior',
    category: 'pattern',
    content: `这是第3个高中综合语法练习，涵盖了高中阶段的高级语法知识点。\n\n通过练习可以掌握复杂句型的分析方法。`,
    examples: [
      'This is example sentence 3-sen-1.',
      'She studies very hard 3.',
      'They have learned English for years 3.',
    ],
    createdAt: '2024-09-15',
  },
  {
    id: 'g-sen-58',
    title: '高中综合练习 4',
    titleZh: '高中综合练习 4',
    level: 'senior',
    category: 'tense',
    content: `这是第4个高中综合语法练习，涵盖了高中阶段的高级语法知识点。\n\n通过练习可以掌握复杂句型的分析方法。`,
    examples: [
      'This is example sentence 4-sen-1.',
      'She studies very hard 4.',
      'They have learned English for years 4.',
    ],
    createdAt: '2024-09-16',
  },

  {
    id: 'g-sen-59',
    title: '虚拟语气 - if非真实条件句(过去)',
    titleZh: 'if非真实条件句(与过去事实相反)',
    level: 'senior',
    category: 'voice',
    content: `if从句使用过去完成时，主句使用would/could/might have done。

与过去事实相反：
If + 主语 + had + 过去分词..., 主语 + would/could/might have + 过去分词`,
    examples: [
      'If I had known about the traffic, I would have left earlier.',
      'If she had arrived earlier, she could have caught the train.',
      'If we had booked the hotel in advance, we would have saved money.',
    ],
    createdAt: '2024-09-17',
  },

  {
    id: 'g-sen-60',
    title: '虚拟语气 - if非真实条件句(将来)',
    titleZh: 'if非真实条件句(与将来事实相反)',
    level: 'senior',
    category: 'voice',
    content: `与将来事实相反，可能性较低的情况：

If + 主语 + were to + 动词原形..., 主语 + would/could/might + 动词原形
If + 主语 + 过去式(were)..., 主语 + would/could/might + 动词原形`,
    examples: [
      'If it were to rain tomorrow, the outdoor concert would be cancelled.',
      'If I won the lottery, I would travel around the world.',
      'If the project failed, we would lose everything.',
    ],
    createdAt: '2024-09-18',
  },

  {
    id: 'g-sen-61',
    title: '虚拟语气 - wish从句',
    titleZh: 'wish后虚拟语气用法',
    level: 'senior',
    category: 'voice',
    content: `wish后面的从句使用虚拟语气：

wish + 主语 + 过去式（现在）
wish + 主语 + had + 过去分词（过去）
wish + 主语 + would/could + 动词原形（将来）`,
    examples: [
      'She wishes she had more time with her family.',
      'He wishes he could speak three languages fluently.',
      'I wish the weather would improve for our wedding.',
    ],
    createdAt: '2024-09-19',
  },

  {
    id: 'g-sen-62',
    title: '虚拟语气 - would rather/sooner',
    titleZh: 'would rather/sooner后的虚拟语气',
    level: 'senior',
    category: 'voice',
    content: `would rather/sooner表示宁愿，后面的从句使用虚拟语气：

would rather + 主语 + 过去式（现在/将来）
wish + 主语 + had + 过去分词（过去）`,
    examples: [
      'I would rather you came tomorrow than today.',
      'He would sooner she had never met him.',
      'They would rather we left early.',
    ],
    createdAt: '2024-09-20',
  },

  {
    id: 'g-sen-63',
    title: '虚拟语气 - suggest/demand等',
    titleZh: 'suggest/demand等动词后的虚拟语气',
    level: 'senior',
    category: 'voice',
    content: `表示建议、命令、要求的动词后的从句使用虚拟语气（should + 动词原形，should可省略）：

suggest, demand, insist, recommend, require, request, propose, advise, order`,
    examples: [
      'The doctor suggested that he (should) quit smoking.',
      'I demand that the company (should) apologize publicly.',
      'She recommended that we (should) read the book before the movie.',
    ],
    createdAt: '2024-09-21',
  },

  {
    id: 'g-sen-64',
    title: '虚拟语气 - It is vital/important/necessary',
    titleZh: 'It is vital/important/necessary后的虚拟语气',
    level: 'senior',
    category: 'voice',
    content: `某些形容词后的that从句使用虚拟语气：

It is vital/essential/important/necessary/urgent + that + 主语 + (should) + 动词原形`,
    examples: [
      'It is essential that everyone be on time.',
      'It is vital that the project be completed by Friday.',
      'It is necessary that all applicants submit forms on time.',
    ],
    createdAt: '2024-09-22',
  },

  {
    id: 'g-sen-65',
    title: '虚拟语气 - as if/though',
    titleZh: 'as if/though 引导的虚拟语气',
    level: 'senior',
    category: 'voice',
    content: `as if/though 引导的方式状语从句，使用虚拟语气：

与现在事实相反：过去式
与过去事实相反：had + 过去分词`,
    examples: [
      'He talks as if he knew everything.',
      'She behaved as though she had never seen me before.',
      'It looks as if it were going to rain.',
    ],
    createdAt: '2024-09-23',
  },

  {
    id: 'g-sen-66',
    title: '倒装句 - 否定词位于句首',
    titleZh: '否定词位于句首时使用倒装',
    level: 'senior',
    category: 'sentence',
    content: `否定词位于句首时，主谓必须部分倒装（助动词/情态动词位于主语前）：

Never, Rarely, Seldom, Little, Not until, No sooner...than, Hardly...when, By no means, Under no circumstances`,
    examples: [
      'Never have I seen such a beautiful sunset.',
      'Seldom does she complain about her work.',
      'Not until I finished college did I realize the value of education.',
    ],
    createdAt: '2024-09-24',
  },

  {
    id: 'g-sen-67',
    title: '倒装句 - Only位于句首',
    titleZh: 'Only+状语位于句首时倒装',
    level: 'senior',
    category: 'sentence',
    content: `Only + 副词/介词短语/从句 位于句首时，主句使用部分倒装：

Only then did I understand the problem.
Only in this way can we succeed.`,
    examples: [
      'Only after the rain stopped were we able to leave.',
      'Only in Beijing have I experienced such heavy traffic.',
      'Only with your help can I finish this task.',
    ],
    createdAt: '2024-09-25',
  },

  {
    id: 'g-sen-68',
    title: '倒装句 - So/Such...that',
    titleZh: 'So/Such...that 句型中倒装',
    level: 'senior',
    category: 'sentence',
    content: `So/Such...that 句型中，将so或such置于句首时，使用倒装：

So + adj./adv. + 助动词 + 主语 + 动词...
Such + a/an + adj. + 可数名词单数 + 助动词 + 主语 + 动词...`,
    examples: [
      'So excited was she that she could not sleep.',
      'Such an impressive performance did the team give that everyone applauded.',
      'So deeply did the movie affect me that I cried.',
    ],
    createdAt: '2024-09-26',
  },

  {
    id: 'g-sen-69',
    title: '倒装句 - Here/There/Now简短句',
    titleZh: 'Here/There/Now/Then引导简短句的倒装',
    level: 'senior',
    category: 'sentence',
    content: `Here, There, Now, Then + 动词 + 主语（主语为名词时动词放前，主语为代词时正常语序）：

Here comes the bus!
Here it is. (代词主语不倒装)`,
    examples: [
      'Here comes the bus!',
      'There goes the bell.',
      'Now comes the important announcement.',
    ],
    createdAt: '2024-09-27',
  },

  {
    id: 'g-sen-70',
    title: '倒装句 - 地点状语位于句首',
    titleZh: '地点状语位于句首时的倒装',
    level: 'senior',
    category: 'sentence',
    content: `方位词/地点状语位于句首时，使用完全倒装（谓语动词全部提前）：

Under the tree sat an old man.
On the wall hangs a famous painting.

注意：主语是代词时不倒装。`,
    examples: [
      'Around the corner waited a small cafe.',
      'In the middle of the square stands a monument.',
      'Next to the church is an old school building.',
    ],
    createdAt: '2024-09-28',
  },

  {
    id: 'g-sen-71',
    title: '倒装句 - Were/Had/Could替代if',
    titleZh: 'Were/Had/Could虚拟语气倒装(省略if)',
    level: 'senior',
    category: 'sentence',
    content: `在虚拟语气中，省略if，将were/had/could/should提至句首：

Were I you, I would accept the offer. (= If I were you...)
Had I known, I would have helped. (= If I had known...)
Should it rain, we will stay indoors.`,
    examples: [
      'Had I realized the consequences, I would have acted differently.',
      'Were the sun to disappear, life on Earth would end.',
      'Should you need any assistance, please contact me.',
    ],
    createdAt: '2024-09-29',
  },

  {
    id: 'g-sen-72',
    title: '倒装句 - 助动词提前加强语气',
    titleZh: '为加强语气而倒装',
    level: 'senior',
    category: 'sentence',
    content: `为加强语气，将助动词提至句首（用于强调）：

Does she really think she can win?
Will I ever see her again? Never will I see her again.`,
    examples: [
      'Do I care? No, I do not!',
      'Can he really be so stupid?',
      'Will they succeed? They certainly will!',
    ],
    createdAt: '2024-09-30',
  },

  {
    id: 'g-sen-73',
    title: '强调句 - It is/was...that/who',
    titleZh: '基本强调句结构',
    level: 'senior',
    category: 'sentence',
    content: `强调句用于突出句子的某个成分：

It is/was + 被强调部分 + that/who/whom + 其余句子

强调状语时只用that，不用when/where/why。`,
    examples: [
      'It was Alice who helped me.',
      'It was yesterday that I met him.',
      'It was not the destination but the journey that matters.',
    ],
    createdAt: '2024-10-01',
  },

  {
    id: 'g-sen-74',
    title: '强调句 - 否定强调 not...until',
    titleZh: 'It is/was not until...that强调',
    level: 'senior',
    category: 'sentence',
    content: `强调直到...才时，使用It is/was not until...that结构：

普通句：I did not leave until midnight.
强调句：It was not until midnight that I left.`,
    examples: [
      'It was not until I graduated that I understood the value of patience.',
      'It was not until I met you that my life changed.',
      'Not until the sun set did we decide to leave.',
    ],
    createdAt: '2024-10-02',
  },

  {
    id: 'g-sen-75',
    title: '强调句 - What从句强调结构',
    titleZh: 'What...is/was that强调',
    level: 'senior',
    category: 'sentence',
    content: `What引导的强调结构：

What I like about her is her kindness.
What made him famous was his dedication.
What we need most is time and patience.`,
    examples: [
      'What hurts me most is your indifference.',
      'What inspired the movement was the desire for freedom.',
      'What changed everything was a single moment of courage.',
    ],
    createdAt: '2024-10-03',
  },

  {
    id: 'g-sen-76',
    title: '强调句 - do/does/did强调谓语动词',
    titleZh: 'do/does/did强调谓语动词',
    level: 'senior',
    category: 'sentence',
    content: `do/does/did可置于动词前，表示强调（只用于肯定句）：

do强调现在或一般现在时
does强调第三人称单数现在时
did强调过去时（动词用原形）`,
    examples: [
      'I do hope you can come.',
      'She does work hard.',
      'He did come yesterday.',
    ],
    createdAt: '2024-10-04',
  },

  {
    id: 'g-sen-77',
    title: '省略句 - 并列句中的省略',
    titleZh: '并列句中相同成分的省略',
    level: 'senior',
    category: 'sentence',
    content: `并列句中，第二个分句与第一个分句相同的部分可省略：

I study English and she (studies) French.
He can speak English but I cannot (speak English).`,
    examples: [
      'He is a teacher and she (is) a doctor.',
      'You may go now or (you may) stay here.',
      'Read the book and then (you should) answer the questions.',
    ],
    createdAt: '2024-10-05',
  },

  {
    id: 'g-sen-78',
    title: '省略句 - 条件句中的省略',
    titleZh: '条件句中的省略(if省略)',
    level: 'senior',
    category: 'sentence',
    content: `在if虚拟语气条件句中，if可省略，were/had/should提至句首：

Were I you, I would take this opportunity.
Had I known about it, I would have told you.
Should you need help, call me anytime.`,
    examples: [
      'Were it to rain, we would cancel the picnic.',
      'Had she seen him, she would have spoken.',
      'Should anyone call, please take a message.',
    ],
    createdAt: '2024-10-06',
  },

  {
    id: 'g-sen-79',
    title: '省略句 - 问答中的省略',
    titleZh: '问答中的省略',
    level: 'senior',
    category: 'sentence',
    content: `在问答语境中，答句常省略与上文句意相同的部分：

-Will you come? -Yes, I will. / No, I will not.
-Who is there? -Only John (is there).`,
    examples: [
      '-Did you finish the work? -Almost (I have finished it).',
      '-Where is the station? -Just around the corner (it is).',
      '-Are you tired? -Very much (I am tired).',
    ],
    createdAt: '2024-10-07',
  },

  {
    id: 'g-sen-80',
    title: '省略句 - 关系从句中的省略',
    titleZh: '关系从句中的省略',
    level: 'senior',
    category: 'sentence',
    content: `关系代词在从句中作宾语时常省略：

The book (which) I bought yesterday is interesting.
This is the house (that/which) we live in.`,
    examples: [
      'The movie (that) I watched was fantastic.',
      'The people (whom/who) I trust are my family.',
      'The place (that/which) I dream about is Paris.',
    ],
    createdAt: '2024-10-08',
  },

  {
    id: 'g-sen-81',
    title: '省略句 - 口语中的常见省略',
    titleZh: '口语中的常见省略',
    level: 'senior',
    category: 'sentence',
    content: `口语中常省略主语、谓语或助词：

Sounds good. (= It sounds good.)
See you! (= I will see you.)
What a nice day! (= What a nice day it is!)`,
    examples: [
      'Glad to meet you. (= I am glad to meet you.)',
      'Need any help? (= Do you need any help?)',
      'Too bad! (= That is too bad!)',
    ],
    createdAt: '2024-10-09',
  },

  {
    id: 'g-sen-82',
    title: '非谓语动词 - 不定式作主语',
    titleZh: '不定式作主语',
    level: 'senior',
    category: 'voice',
    content: `不定式（短语）可作主语：

To learn a language takes time and effort.
To err is human; to forgive is divine.

常用it作形式主语，将真实主语（不定式）置于句末：
It takes time to learn a language well.`,
    examples: [
      'To ignore the problem would be foolish.',
      'It is important to arrive on time.',
      'It is a privilege to work with such talented people.',
    ],
    createdAt: '2024-10-10',
  },

  {
    id: 'g-sen-83',
    title: '非谓语动词 - 不定式作宾语',
    titleZh: '动词+不定式作宾语',
    level: 'senior',
    category: 'voice',
    content: `某些动词后只能接不定式（短语）作宾语：

agree, decide, demand, desire, expect, fail, hope, learn, manage, offer, plan, pretend, promise, refuse, wish

I decided to study abroad.
She hopes to become a doctor.`,
    examples: [
      'He promised to help us with the project.',
      'I learned to play piano when I was young.',
      'She refused to accept the offer.',
    ],
    createdAt: '2024-10-11',
  },

  {
    id: 'g-sen-84',
    title: '非谓语动词 - 动名词作宾语',
    titleZh: '动词+动名词作宾语',
    level: 'senior',
    category: 'voice',
    content: `某些动词后只能接动名词（短语）作宾语：

admit, avoid, consider, delay, enjoy, escape, finish, imagine, include, keep, mind, miss, practice, quit, risk, suggest`,
    examples: [
      'I enjoy reading novels.',
      'She suggested going to the cinema.',
      'He quit smoking last year.',
    ],
    createdAt: '2024-10-12',
  },

  {
    id: 'g-sen-85',
    title: '非谓语动词 - 既可不定式也可动名词',
    titleZh: '动词+不定式/动名词均可',
    level: 'senior',
    category: 'voice',
    content: `有些动词后既可接不定式也可接动名词，意义不同：

remember/forget + doing（已做） vs + to do（要做）
try + doing（尝试做） vs + to do（努力做）
stop + doing（停止做） vs + to do（停下来去做）`,
    examples: [
      'I remember meeting her at the party.',
      'He tried learning Japanese.',
      'I stopped smoking.',
    ],
    createdAt: '2024-10-13',
  },

  {
    id: 'g-sen-86',
    title: '非谓语动词 - 分词作定语',
    titleZh: '现在分词/过去分词作定语',
    level: 'senior',
    category: 'voice',
    content: `分词（短语）可作定语：

现在分词：表示主动、进行
The rising sun = The sun that is rising

过去分词：表示被动、完成
The broken window = The window that has been broken`,
    examples: [
      'The sleeping baby is very cute.',
      'The people invited to the party are celebrities.',
      'There are many unsolved problems in the world.',
    ],
    createdAt: '2024-10-14',
  },

  {
    id: 'g-sen-87',
    title: '非谓语动词 - 分词作状语',
    titleZh: '现在分词/过去分词作状语',
    level: 'senior',
    category: 'voice',
    content: `分词（短语）作状语，表示时间、原因、条件、结果、让步等：

Seeing the teacher, the students stood up. (时间)
Born in Beijing, he knows the city well. (原因)
Given more time, we could finish it. (条件)

分词作状语时，其逻辑主语须与主句主语一致。`,
    examples: [
      'Having finished the work, she went home.',
      'Being tired, he fell asleep quickly.',
      'If caught cheating, you will be expelled.',
    ],
    createdAt: '2024-10-15',
  },

  {
    id: 'g-sen-88',
    title: '非谓语动词 - 独立主格',
    titleZh: '独立主格结构',
    level: 'senior',
    category: 'voice',
    content: `独立主格结构：分词逻辑主语与主句主语不一致时使用

结构：名词/代词 + 分词（短语）

Weather permitting, we will go hiking.
The experiment finished, we drew our conclusions.`,
    examples: [
      'The guide leading the way, we felt safe.',
      'The sun having set, it became dark.',
      'All things considered, the plan seems feasible.',
    ],
    createdAt: '2024-10-16',
  },

  {
    id: 'g-sen-89',
    title: '非谓语动词 - 感官动词后用法',
    titleZh: '感官动词+宾语+分词/不定式',
    level: 'senior',
    category: 'voice',
    content: `感官动词see/watch/hear/feel/smell/notice后：

+ 动词原形（强调动作全过程）
+ 现在分词（强调动作进行中）
+ 过去分词（强调被动）`,
    examples: [
      'I saw him enter the room.',
      'I saw him entering the room.',
      'I heard the song sung beautifully.',
    ],
    createdAt: '2024-10-17',
  },

  {
    id: 'g-sen-90',
    title: '非谓语动词 - 不定式的进行式和完成式',
    titleZh: '不定式的进行式和完成式',
    level: 'senior',
    category: 'voice',
    content: `不定式的进行式 to be + doing，表示与谓语同时进行：
He seems to be working hard.

不定式的完成式 to have + done，表示发生在谓语之前：
He seems to have worked hard. (看起来曾经很努力)`,
    examples: [
      'She appears to be waiting for someone.',
      'He claims to have visited Paris twice.',
      'I am happy to have finally finished this project.',
    ],
    createdAt: '2024-10-18',
  },

  {
    id: 'g-sen-91',
    title: '高级从句 - what引导名词性从句',
    titleZh: 'what引导主语/宾语/表语从句',
    level: 'senior',
    category: 'clause',
    content: `what = the thing(s) that，引导名词性从句：

主语：What you said is true.
宾语：I do not believe what he told me.
表语：The problem is what we should do next.

what在从句中可充当主语/宾语/表语，而that不行。`,
    examples: [
      'What does not kill you makes you stronger.',
      'I will give you what you need.',
      'This is what I have been looking for.',
    ],
    createdAt: '2024-10-19',
  },

  {
    id: 'g-sen-92',
    title: '高级从句 - whatever/whoever/whichever',
    titleZh: 'whatever/whoever/whichever让步名词性从句',
    level: 'senior',
    category: 'clause',
    content: `whatever = anything that，whoever = anyone that，whichever = the one that：

Whatever you say, I will not believe it.
Whoever calls, tell them I am busy.
Whichever plan you choose, I will support it.`,
    examples: [
      'Whoever is responsible will be punished.',
      'Whichever direction you go, you will find a market.',
      'I will buy whatever you recommend.',
    ],
    createdAt: '2024-10-20',
  },

  {
    id: 'g-sen-93',
    title: '高级从句 - 方式状语从句',
    titleZh: 'as if/as though/however/no matter how引导',
    level: 'senior',
    category: 'clause',
    content: `as if/though引导方式状语从句（谓语用虚拟语气）：

He speaks as if he were an expert.
However hard I tried, I could not convince him.
No matter what you say, I will not change my mind.`,
    examples: [
      'She treats me as though I were a child.',
      'However rich you may be, you cannot buy time.',
      'No matter how hard he worked, he could not pass.',
    ],
    createdAt: '2024-10-21',
  },

  {
    id: 'g-sen-94',
    title: '高级从句 - 让步状语从句',
    titleZh: 'though/although/even if/while让步',
    level: 'senior',
    category: 'clause',
    content: `though, although, even if, while, whereas均可引导让步状语从句：

Though/Although he is rich, he is not happy.
Even if it rains, we will go. (即使，表假设性让步)
While I understand your point, I disagree. (虽然，表对比)`,
    examples: [
      'Even if I fail, I will never give up.',
      'Although tired, she continued walking.',
      'While he is talented, he lacks experience.',
    ],
    createdAt: '2024-10-22',
  },

  {
    id: 'g-sen-95',
    title: '高级从句 - 结果状语从句',
    titleZh: 'so...that/such...that/so that引导',
    level: 'senior',
    category: 'clause',
    content: `结果状语从句：

so + adj./adv. + that
such + (a/an + adj. + n.) + that
so that（结果，通常用逗号与主句分隔）`,
    examples: [
      'The movie was so popular that all tickets were sold out.',
      'She is such a talented singer that everyone admires her.',
      'He studied diligently, so he earned a promotion.',
    ],
    createdAt: '2024-10-23',
  },

  {
    id: 'g-sen-96',
    title: '高级从句 - 目的状语从句',
    titleZh: 'so that/in order that/lest引导目的从句',
    level: 'senior',
    category: 'clause',
    content: `目的状语从句：

so that + can/could/will/would
in order that（正式）
in case + should/would（以防万一）

I spoke slowly so that everyone could understand.
Take an umbrella in case it rains.`,
    examples: [
      'He arrived early in order that he could get a good seat.',
      'I will keep the document in case you need it.',
      'She saved money so that she could travel after graduation.',
    ],
    createdAt: '2024-10-24',
  },

  {
    id: 'g-sen-97',
    title: '高级从句 - 定语从句(whose/whom)',
    titleZh: 'whose/whom引导定语从句',
    level: 'senior',
    category: 'clause',
    content: `whose（所有格关系代词）指人/物：
The student whose homework is missing will be punished.

whom（宾格关系代词）：
The professor whom we met yesterday is very famous.
（口语中whom常被who替代）`,
    examples: [
      'The man whom I rescued thanked me warmly.',
      'Is there anyone whose phone number has changed?',
      'The company whose CEO resigned recently is in crisis.',
    ],
    createdAt: '2024-10-25',
  },

  {
    id: 'g-sen-98',
    title: '高级从句 - 非限制性定语从句',
    titleZh: '非限制性定语从句用法',
    level: 'senior',
    category: 'clause',
    content: `非限制性定语从句：
1. 用逗号与主句隔开
2. 不可用that
3. 对主句进行补充说明，省略后主句仍完整
4. 可指代整个主句

My brother, who lives in Shanghai, is a doctor.
Beijing, which has hosted two Olympics, is a beautiful city.`,
    examples: [
      'My parents, who retired last year, are traveling around Asia.',
      'The lecture, which lasted three hours, was extremely boring.',
      'He failed the exam, which surprised everyone.',
    ],
    createdAt: '2024-10-26',
  },

  {
    id: 'g-sen-99',
    title: '高级从句 - The more...the more',
    titleZh: 'The more...the more 结构',
    level: 'senior',
    category: 'clause',
    content: `The more...the more（越...越...）结构：

The more you learn, the more you realize you do not know.
The harder you work, the greater the reward.

主句用陈述语序，从句也用陈述语序。`,
    examples: [
      'The more you practice, the better you become.',
      'The higher you climb, the colder it gets.',
      'The longer you wait, the more impatient you become.',
    ],
    createdAt: '2024-10-27',
  },

  {
    id: 'g-sen-100',
    title: '高级从句 - 同位语从句',
    titleZh: 'that引导同位语从句',
    level: 'senior',
    category: 'clause',
    content: `同位语从句：that引导的名词性从句，解释说明抽象名词：

fact, idea, belief, news, hope, decision, evidence, theory, promise, rumor

The fact that he was late surprised everyone.

that在同位语从句中不作任何成分，只起连接作用，不能省略。`,
    examples: [
      'The news that the company would close was shocking.',
      'There is no evidence that he committed the crime.',
      'He made a promise that he would never lie again.',
    ],
    createdAt: '2024-10-28',
  },

  {
    id: 'g-uni-1',
    title: '高级定语从句 - 嵌套结构',
    titleZh: '高级定语从句 - 嵌套结构',
    level: 'university',
    category: 'clause',
    content: `定语从句可以嵌套，形成复杂修饰关系`,
    examples: [
      'The man who told me that you were waiting is here.',
      'I have a book which she said was interesting.',
      'The student whose father is a teacher studies well.',
    ],
    createdAt: '2024-09-17',
  },
  {
    id: 'g-uni-2',
    title: '高级定语从句 - 融合句',
    titleZh: '高级定语从句 - 融合句',
    level: 'university',
    category: 'clause',
    content: `定语从句与先行词融合，表达简洁`,
    examples: [
      'Those who study hard will succeed.',
      'There are many who believe it.',
      'She is not what she used to be.',
    ],
    createdAt: '2024-09-18',
  },
  {
    id: 'g-uni-3',
    title: '高级名词性从句 - 语气',
    titleZh: '高级名词性从句 - 语气',
    level: 'university',
    category: 'clause',
    content: `名词性从句中使用虚拟语气的情况`,
    examples: [
      'It is essential that everyone be present.',
      'I demand that he leave immediately.',
      'His suggestion is that we should start early.',
    ],
    createdAt: '2024-09-19',
  },
  {
    id: 'g-uni-4',
    title: '高级名词性从句 - 时态',
    titleZh: '高级名词性从句 - 时态',
    level: 'university',
    category: 'clause',
    content: `名词性从句的时态变化规则`,
    examples: [
      'I think that he will come.',
      'I thought that he would come.',
      'I will think about what you said.',
    ],
    createdAt: '2024-09-20',
  },
  {
    id: 'g-uni-5',
    title: '高级状语从句 - 多重含义',
    titleZh: '高级状语从句 - 多重含义',
    level: 'university',
    category: 'clause',
    content: `while表示对比、although表示让步、since表示原因时间`,
    examples: [
      'While I like music, she prefers sports.',
      'Although tired, he kept working.',
      'Since you are here, let\'s start.',
    ],
    createdAt: '2024-09-21',
  },
  {
    id: 'g-uni-6',
    title: '高级虚拟语气 - 错综条件',
    titleZh: '高级虚拟语气 - 错综条件',
    level: 'university',
    category: 'clause',
    content: `条件从句和主句时间不一致的虚拟语气`,
    examples: [
      'If I had studied medicine, I would be a doctor now.',
      'If it were to rain, we would have stayed home.',
      'Were you in my position, you would have done the same.',
    ],
    createdAt: '2024-09-22',
  },
  {
    id: 'g-uni-7',
    title: '高级虚拟语气 - 含蓄条件',
    titleZh: '高级虚拟语气 - 含蓄条件',
    level: 'university',
    category: 'clause',
    content: `without, but for, otherwise等表示含蓄条件`,
    examples: [
      'Without your help, I would fail.',
      'But for gravity, we would float away.',
      'I would have helped, otherwise I was busy.',
    ],
    createdAt: '2024-09-23',
  },
  {
    id: 'g-uni-8',
    title: '倒装句 - 高级用法',
    titleZh: '倒装句 - 高级用法',
    level: 'university',
    category: 'sentence',
    content: `否定副词前置、部分倒装的多种情况`,
    examples: [
      'Never in my life have I seen such a thing.',
      'Rarely do we have such opportunities.',
      'Not until then did I realize the truth.',
    ],
    createdAt: '2024-09-24',
  },
  {
    id: 'g-uni-9',
    title: '强调句 - 高级强调',
    titleZh: '强调句 - 高级强调',
    level: 'university',
    category: 'sentence',
    content: `强调句与从句、倒装句结合`,
    examples: [
      'It was not until I met you that I understood.',
      'It was because he was late that we missed the train.',
      'It is what he said that matters.',
    ],
    createdAt: '2024-09-25',
  },
  {
    id: 'g-uni-10',
    title: '省略句 - 高级省略',
    titleZh: '省略句 - 高级省略',
    level: 'university',
    category: 'sentence',
    content: `在高级书面语中的省略结构`,
    examples: [
      'If (it is) possible, please reply.',
      'He is taller than I am (tall).',
      'Come tomorrow if (it is) convenient.',
    ],
    createdAt: '2024-09-26',
  },
  {
    id: 'g-uni-11',
    title: '学术写作 - 正式表达',
    titleZh: '学术写作 - 正式表达',
    level: 'university',
    category: 'pattern',
    content: `学术写作中的正式词汇和表达`,
    examples: [
      'Furthermore, the results indicate...',
      'Consequently, we can conclude...',
      'Nevertheless, some limitations exist.',
    ],
    createdAt: '2024-09-27',
  },
  {
    id: 'g-uni-12',
    title: '学术写作 - 连接词',
    titleZh: '学术写作 - 连接词',
    level: 'university',
    category: 'pattern',
    content: `学术写作中的逻辑连接词`,
    examples: [
      'In addition to..., ...',
      'Moreover, ...',
      'On the other hand, ...',
    ],
    createdAt: '2024-09-28',
  },
  {
    id: 'g-uni-13',
    title: '学术写作 - 被动语态',
    titleZh: '学术写作 - 被动语态',
    level: 'university',
    category: 'voice',
    content: `学术写作中常用被动语态避免主观`,
    examples: [
      'The experiment was conducted by...',
      'It is believed that...',
      'The data were collected through...',
    ],
    createdAt: '2024-09-30',
  },
  {
    id: 'g-uni-14',
    title: '论文句式 - 研究方法',
    titleZh: '论文句式 - 研究方法',
    level: 'university',
    category: 'pattern',
    content: `描述研究方法的常用句型`,
    examples: [
      'The purpose of this study is to...',
      'This research aims to investigate...',
      'The methodology employed was...',
    ],
    createdAt: '2024-10-01',
  },
  {
    id: 'g-uni-15',
    title: '论文句式 - 结果讨论',
    titleZh: '论文句式 - 结果讨论',
    level: 'university',
    category: 'pattern',
    content: `描述研究结果的常用句型`,
    examples: [
      'The results suggest that...',
      'As can be seen from the data...',
      'It is worth noting that...',
    ],
    createdAt: '2024-10-02',
  },
  {
    id: 'g-uni-16',
    title: '论文句式 - 引用表达',
    titleZh: '论文句式 - 引用表达',
    level: 'university',
    category: 'pattern',
    content: `引用他人研究的表达方式`,
    examples: [
      'According to Smith (2020), ...',
      'As argued by Johnson et al., ...',
      'This view is supported by Brown (2019).',
    ],
    createdAt: '2024-10-03',
  },
  {
    id: 'g-uni-17',
    title: '长难句 - 复合从句',
    titleZh: '长难句 - 复合从句',
    level: 'university',
    category: 'reading',
    content: `包含多个从句的复杂句子分析`,
    examples: [
      'The theory that explains this phenomenon was proposed by...',
      'Although the results are promising, further research is needed because...',
    ],
    createdAt: '2024-10-04',
  },
  {
    id: 'g-uni-18',
    title: '长难句 - 非谓语结构',
    titleZh: '长难句 - 非谓语结构',
    level: 'university',
    category: 'reading',
    content: `非谓语动词构成的复杂修饰结构`,
    examples: [
      'Having been trained extensively, the athlete performed exceptionally.',
      'The experiment, conducted over several months, yielded significant results.',
    ],
    createdAt: '2024-10-05',
  },
  {
    id: 'g-uni-19',
    title: '修辞分析 - 暗喻与明喻',
    titleZh: '修辞分析 - 暗喻与明喻',
    level: 'university',
    category: 'reading',
    content: `暗喻和明喻的识别和分析`,
    examples: [
      'Life is like a journey. (明喻)',
      'All the world\'s a stage. (暗喻)',
      'The mind is a battleground.',
    ],
    createdAt: '2024-10-06',
  },
  {
    id: 'g-uni-20',
    title: '修辞分析 - 排比与反复',
    titleZh: '修辞分析 - 排比与反复',
    level: 'university',
    category: 'reading',
    content: `排比和反复修辞手法的表达效果`,
    examples: [
      'I came, I saw, I conquered.',
      'It is for liberty, for justice, for equality.',
    ],
    createdAt: '2024-10-07',
  },
  {
    id: 'g-uni-21',
    title: '高级词汇 - 抽象名词',
    titleZh: '高级词汇 - 抽象名词',
    level: 'university',
    category: 'word',
    content: `学术写作中的抽象名词：phenomenon, concept, dimension, aspect`,
    examples: [
      'The phenomenon of globalization affects...',
      'A key concept in this theory is...',
      'Various aspects of the issue are...',
    ],
    createdAt: '2024-10-08',
  },
  {
    id: 'g-uni-22',
    title: '高级词汇 - 动词替换',
    titleZh: '高级词汇 - 动词替换',
    level: 'university',
    category: 'word',
    content: `使用更精确的动词替代常见动词`,
    examples: [
      'conduct research, establish a theory, demonstrate, indicate, suggest',
    ],
    createdAt: '2024-10-09',
  },
  {
    id: 'g-uni-23',
    title: '高级短语动词 - get',
    titleZh: '高级短语动词 - get',
    level: 'university',
    category: 'pattern',
    content: `高级短语动词：get across, get down to, get rid of, get along with`,
    examples: [
      'The message got across clearly.',
      'Let\'s get down to business.',
      'We need to get rid of old habits.',
    ],
    createdAt: '2024-10-10',
  },
  {
    id: 'g-uni-24',
    title: '高级短语动词 - take',
    titleZh: '高级短语动词 - take',
    level: 'university',
    category: 'pattern',
    content: `高级短语动词：take on, take in, take up, take after`,
    examples: [
      'The project took on new dimensions.',
      'She took in the whole situation.',
      'He takes after his father.',
    ],
    createdAt: '2024-10-11',
  },
  {
    id: 'g-uni-25',
    title: '高级短语动词 - come',
    titleZh: '高级短语动词 - come',
    level: 'university',
    category: 'pattern',
    content: `高级短语动词：come by, come up with, come to terms with, come into being`,
    examples: [
      'How did you come by that information?',
      'She came up with an innovative solution.',
      'The tradition came into being centuries ago.',
    ],
    createdAt: '2024-10-12',
  },
  {
    id: 'g-uni-26',
    title: '高级短语动词 - go',
    titleZh: '高级短语动词 - go',
    level: 'university',
    category: 'pattern',
    content: `高级短语动词：go about, go for, go through with, go along with`,
    examples: [
      'How should we go about this task?',
      'I\'ll go for the second option.',
      'They went through with the plan.',
    ],
    createdAt: '2024-10-13',
  },
  {
    id: 'g-uni-27',
    title: '固定搭配 - 学术用语',
    titleZh: '固定搭配 - 学术用语',
    level: 'university',
    category: 'pattern',
    content: `学术用语固定搭配：make a contribution to, play a role in, have an impact on`,
    examples: [
      'Technology makes a significant contribution to education.',
      'Education plays a crucial role in society.',
      'The policy has a major impact on the economy.',
    ],
    createdAt: '2024-10-14',
  },
  {
    id: 'g-uni-28',
    title: '固定搭配 - 高级表达',
    titleZh: '固定搭配 - 高级表达',
    level: 'university',
    category: 'pattern',
    content: `高级英语固定搭配：take into consideration, make a distinction, lay emphasis on`,
    examples: [
      'We must take into consideration all factors.',
      'There is a distinction between these concepts.',
      'The report lays emphasis on new findings.',
    ],
    createdAt: '2024-10-15',
  },
  {
    id: 'g-uni-29',
    title: '习语表达 - 正式场合',
    titleZh: '习语表达 - 正式场合',
    level: 'university',
    category: 'pattern',
    content: `适用于正式场合的习语表达`,
    examples: [
      'On the whole, the results are positive.',
      'To a certain extent, I agree.',
      'Be that as it may, we must proceed.',
    ],
    createdAt: '2024-10-16',
  },
  {
    id: 'g-uni-30',
    title: '同义替换 - 高级词汇',
    titleZh: '同义替换 - 高级词汇',
    level: 'university',
    category: 'word',
    content: `高级词汇替换基础词汇：significant → crucial, important → essential`,
    examples: [
      'crucial, essential, fundamental, vital, pivotal',
    ],
    createdAt: '2024-10-17',
  },
  {
    id: 'g-uni-31',
    title: '翻译技巧 - 中英差异',
    titleZh: '翻译技巧 - 中英差异',
    level: 'university',
    category: 'pattern',
    content: `中英文在表达习惯、语序、结构上的差异`,
    examples: [
      '中文多用动词，英文多名词',
      '中文重意合，英文重形合',
      '英文多用被动语态',
    ],
    createdAt: '2024-10-18',
  },
  {
    id: 'g-uni-32',
    title: '翻译技巧 - 增译与省译',
    titleZh: '翻译技巧 - 增译与省译',
    level: 'university',
    category: 'pattern',
    content: `翻译时根据需要进行增译或省译`,
    examples: [
      '增译：增加省略的成分',
      '省译：删除冗余的词',
      '转换：词性转换、句式转换',
    ],
    createdAt: '2024-10-19',
  },
  {
    id: 'g-uni-33',
    title: '翻译技巧 - 词性转换',
    titleZh: '翻译技巧 - 词性转换',
    level: 'university',
    category: 'pattern',
    content: `翻译中常见的词性转换技巧`,
    examples: [
      '名词转动词：development → develop',
      '形容词转名词：important → importance',
      '介词转动词：in response to → respond to',
    ],
    createdAt: '2024-10-20',
  },
  {
    id: 'g-uni-34',
    title: '学术阅读 - 论文结构',
    titleZh: '学术阅读 - 论文结构',
    level: 'university',
    category: 'reading',
    content: `学术论文的标准结构：Abstract, Introduction, Methods, Results, Discussion`,
    examples: [
      'The abstract summarizes the entire paper.',
      'The introduction provides background.',
      'The discussion interprets results.',
    ],
    createdAt: '2024-10-21',
  },
  {
    id: 'g-uni-35',
    title: '学术阅读 - 批判性思维',
    titleZh: '学术阅读 - 批判性思维',
    level: 'university',
    category: 'reading',
    content: `批判性阅读：评估论点、识别偏见、质疑结论`,
    examples: [
      'What is the author\'s main argument?',
      'What evidence supports the claim?',
      'Are there any logical fallacies?',
    ],
    createdAt: '2024-10-23',
  },
  {
    id: 'g-uni-36',
    title: '高级语法 - 独立主格',
    titleZh: '高级语法 - 独立主格',
    level: 'university',
    category: 'pattern',
    content: `独立主格的多种形式及其在学术写作中的应用`,
    examples: [
      'All factors considered, the project is feasible.',
      'The experiment completed, we analyzed the data.',
      'There being no further business, the meeting adjourned.',
    ],
    createdAt: '2024-10-24',
  },
  {
    id: 'g-uni-37',
    title: '高级语法 - 悬垂结构',
    titleZh: '高级语法 - 悬垂结构',
    level: 'university',
    category: 'pattern',
    content: `分词短语作状语时，其逻辑主语应与主句主语一致`,
    examples: [
      'Walking down the street, the church came into view.',
      'Generally speaking, the climate is mild.',
      'Strictly speaking, you are correct.',
    ],
    createdAt: '2024-10-25',
  },
  {
    id: 'g-uni-38',
    title: '高级语法 - 双重否定',
    titleZh: '高级语法 - 双重否定',
    level: 'university',
    category: 'pattern',
    content: `双重否定表示肯定，但有时用于强调`,
    examples: [
      'I couldn\'t agree more.',
      'There\'s no denying that...',
      'Not uncommon for someone to...',
    ],
    createdAt: '2024-10-26',
  },
  {
    id: 'g-uni-39',
    title: '高级语法 - 转移修饰',
    titleZh: '高级语法 - 转移修饰',
    level: 'university',
    category: 'pattern',
    content: `转移修饰：看似修饰某词实际修饰另一词`,
    examples: [
      'He barely knew how to write.',
      'I hardly think it is reasonable.',
      'I don\'t much care for music.',
    ],
    createdAt: '2024-10-27',
  },
  {
    id: 'g-uni-40',
    title: '高级语法 - 复杂时态',
    titleZh: '高级语法 - 复杂时态',
    level: 'university',
    category: 'tense',
    content: `各种复杂时态组合：将来完成进行时、过去完成进行时等`,
    examples: [
      'By next month, I will have been working here for five years.',
      'He had been studying for hours before the exam.',
      'She will have been living here for a decade by 2030.',
    ],
    createdAt: '2024-10-28',
  },
  {
    id: 'g-uni-41',
    title: '专业英语 - 法律英语',
    titleZh: '专业英语 - 法律英语',
    level: 'university',
    category: 'word',
    content: `法律英语常用词汇和表达：whereas, hereby, whereas, parties, whereas`,
    examples: [
      'Whereas the defendant claims...',
      'The parties hereby agree...',
      'It is hereby certified that...',
    ],
    createdAt: '2024-10-29',
  },
  {
    id: 'g-uni-42',
    title: '专业英语 - 商务英语',
    titleZh: '专业英语 - 商务英语',
    level: 'university',
    category: 'word',
    content: `商务英语常用表达：fiscal year, profit margin, market share, ROI`,
    examples: [
      'Our fiscal year ends in December.',
      'The profit margin increased by 10%.',
      'We need to expand our market share.',
    ],
    createdAt: '2024-10-30',
  },
  {
    id: 'g-uni-43',
    title: '专业英语 - 医学英语',
    titleZh: '专业英语 - 医学英语',
    level: 'university',
    category: 'word',
    content: `医学英语常用术语：symptom, diagnosis, treatment, prognosis, etiology`,
    examples: [
      'The symptoms include fever and cough.',
      'The diagnosis is yet to be confirmed.',
      'The treatment involves medication.',
    ],
    createdAt: '2024-10-31',
  },
  {
    id: 'g-uni-44',
    title: '专业英语 - 科技英语',
    titleZh: '专业英语 - 科技英语',
    level: 'university',
    category: 'word',
    content: `科技英语常用表达：artificial intelligence, machine learning, algorithm, data analysis`,
    examples: [
      'AI is transforming various industries.',
      'The algorithm processes large datasets.',
      'Data analysis reveals patterns.',
    ],
    createdAt: '2024-11-01',
  },
  {
    id: 'g-uni-45',
    title: '雅思写作 - Task 2 结构',
    titleZh: '雅思写作 - Task 2 结构',
    level: 'university',
    category: 'pattern',
    content: `雅思大作文标准结构：引言、论点1、论点2、论点3、结论`,
    examples: [
      'This essay will discuss...',
      'Firstly, secondly, finally...',
      'In conclusion, to sum up...',
    ],
    createdAt: '2024-11-02',
  },
  {
    id: 'g-uni-46',
    title: '雅思写作 - 观点表达',
    titleZh: '雅思写作 - 观点表达',
    level: 'university',
    category: 'pattern',
    content: `雅思写作中表达观点的多种方式`,
    examples: [
      'Some people argue that...',
      'Others believe that...',
      'In my opinion, I am of the view that...',
    ],
    createdAt: '2024-11-03',
  },
  {
    id: 'g-uni-47',
    title: '托福写作 - 综合写作',
    titleZh: '托福写作 - 综合写作',
    level: 'university',
    category: 'pattern',
    content: `托福综合写作：阅读、听力、写作三位一体`,
    examples: [
      'The reading passage discusses...',
      'The lecturer argues that...',
      'The passage and lecture conflict on...',
    ],
    createdAt: '2024-11-04',
  },
  {
    id: 'g-uni-48',
    title: '托福写作 - 独立写作',
    titleZh: '托福写作 - 独立写作',
    level: 'university',
    category: 'pattern',
    content: `托福独立写作开头结尾技巧`,
    examples: [
      'When faced with the question whether..., different people hold different views.',
      'From my perspective, I strongly agree/disagree that...',
    ],
    createdAt: '2024-11-05',
  },
  {
    id: 'g-uni-49',
    title: 'GRE阅读 - 逻辑题',
    titleZh: 'GRE阅读 - 逻辑题',
    level: 'university',
    category: 'reading',
    content: `GRE逻辑题类型：strengthen, weaken, assumption, inference`,
    examples: [
      'Which of the following most strengthens the argument?',
      'The assumption underlying the argument is...',
    ],
    createdAt: '2024-11-06',
  },
  {
    id: 'g-uni-50',
    title: 'GRE阅读 - 词汇题',
    titleZh: 'GRE阅读 - 词汇题',
    level: 'university',
    category: 'reading',
    content: `GRE词汇题根据上下文推断词义`,
    examples: [
      'The word "..." in the context means...',
      'As used in line 3, "..." most nearly means...',
    ],
    createdAt: '2024-11-07',
  },
  {
    id: 'g-uni-51',
    title: '跨文化交际 - 直接与间接',
    titleZh: '跨文化交际 - 直接与间接',
    level: 'university',
    category: 'communication',
    content: `不同文化中表达方式的直接与间接差异`,
    examples: [
      'Western cultures tend to be more direct.',
      'Asian cultures often use indirect communication.',
      'Understanding these differences is crucial.',
    ],
    createdAt: '2024-11-08',
  },
  {
    id: 'g-uni-52',
    title: '跨文化交际 - 礼貌原则',
    titleZh: '跨文化交际 - 礼貌原则',
    level: 'university',
    category: 'communication',
    content: `跨文化交际中的礼貌策略和面子理论`,
    examples: [
      'Positive politeness strategies emphasize agreement.',
      'Negative politeness recognizes autonomy.',
      'Indirect requests save face.',
    ],
    createdAt: '2024-11-09',
  },
  {
    id: 'g-uni-53',
    title: '高级表达 - 强调',
    titleZh: '高级表达 - 强调',
    level: 'university',
    category: 'pattern',
    content: `多种高级强调表达方式`,
    examples: [
      'What is particularly significant is...',
      'It cannot be denied that...',
      'Needless to say, ...',
    ],
    createdAt: '2024-11-10',
  },
  {
    id: 'g-uni-54',
    title: '高级表达 - 对比',
    titleZh: '高级表达 - 对比',
    level: 'university',
    category: 'pattern',
    content: `高级对比表达：in contrast, on the contrary, whereas, while`,
    examples: [
      'In contrast to previous studies, our findings show...',
      'On the contrary, the evidence suggests...',
      'While A is X, B is Y.',
    ],
    createdAt: '2024-11-11',
  },
  {
    id: 'g-uni-55',
    title: '高级表达 - 例证',
    titleZh: '高级表达 - 例证',
    level: 'university',
    category: 'pattern',
    content: `高级举例表达：for instance, to illustrate, such as, namely`,
    examples: [
      'To illustrate this point, consider...',
      'A case in point is...',
      'Various factors, namely A, B, and C...',
    ],
    createdAt: '2024-11-12',
  },
  {
    id: 'g-uni-56',
    title: '高级表达 - 因果',
    titleZh: '高级表达 - 因果',
    level: 'university',
    category: 'pattern',
    content: `高级因果表达：consequently, hence, therefore, thus, accordingly`,
    examples: [
      'Consequently, the results were unexpected.',
      'Hence, we can conclude...',
      'Accordingly, the policy was changed.',
    ],
    createdAt: '2024-11-13',
  },
  {
    id: 'g-uni-57',
    title: '高级表达 - 分类',
    titleZh: '高级表达 - 分类',
    level: 'university',
    category: 'pattern',
    content: `高级分类表达：can be categorized/classified/divided into`,
    examples: [
      'The types can be classified as...',
      'These phenomena fall into several categories.',
      'There are mainly three types...',
    ],
    createdAt: '2024-11-15',
  },
  {
    id: 'g-uni-58',
    title: '高级表达 - 定义',
    titleZh: '高级表达 - 定义',
    level: 'university',
    category: 'pattern',
    content: `高级定义表达：is defined as, refers to, can be described as`,
    examples: [
      'X is defined as the process of...',
      'The term refers specifically to...',
      'This concept can be described as...',
    ],
    createdAt: '2024-11-16',
  },
  {
    id: 'g-uni-59',
    title: '高级表达 - 评价',
    titleZh: '高级表达 - 评价',
    level: 'university',
    category: 'pattern',
    content: `高级评价表达：it is evident that, clearly, undoubtedly, undoubtedly`,
    examples: [
      'It is evident that the approach is effective.',
      'Clearly, more research is needed.',
      'Undoubtedly, this is a significant finding.',
    ],
    createdAt: '2024-11-17',
  },
  {
    id: 'g-uni-60',
    title: '高级表达 - 总结',
    titleZh: '高级表达 - 总结',
    level: 'university',
    category: 'pattern',
    content: `高级总结表达：in summary, to summarize, overall, in the final analysis`,
    examples: [
      'In summary, the key findings are...',
      'To summarize, both approaches have merit.',
      'In the final analysis, the benefits outweigh the costs.',
    ],
    createdAt: '2024-11-18',
  },
  {
    id: 'g-uni-61',
    title: '前沿话题 - 人工智能',
    titleZh: '前沿话题 - 人工智能',
    level: 'university',
    category: 'reading',
    content: `AI相关英语表达：machine learning, neural network, deep learning, AI ethics`,
    examples: [
      'Artificial intelligence is reshaping industries.',
      'Neural networks mimic human brain function.',
      'AI ethics is a growing concern.',
    ],
    createdAt: '2024-11-19',
  },
  {
    id: 'g-uni-62',
    title: '前沿话题 - 气候变化',
    titleZh: '前沿话题 - 气候变化',
    level: 'university',
    category: 'reading',
    content: `气候变化相关英语：global warming, carbon emission, renewable energy, sustainability`,
    examples: [
      'Climate change poses existential threats.',
      'Carbon emissions must be reduced.',
      'Renewable energy is the future.',
    ],
    createdAt: '2024-11-20',
  },
  {
    id: 'g-uni-63',
    title: '前沿话题 - 全球化',
    titleZh: '前沿话题 - 全球化',
    level: 'university',
    category: 'reading',
    content: `全球化相关表达：globalization, interconnectedness, cultural exchange, international cooperation`,
    examples: [
      'Globalization connects nations economically.',
      'Cultural exchange enriches societies.',
      'International cooperation is essential.',
    ],
    createdAt: '2024-11-21',
  },
  {
    id: 'g-uni-64',
    title: '前沿话题 - 生物技术',
    titleZh: '前沿话题 - 生物技术',
    level: 'university',
    category: 'reading',
    content: `生物技术相关表达：gene editing, CRISPR, biotechnology, genetic engineering`,
    examples: [
      'Gene editing offers unprecedented opportunities.',
      'CRISPR technology revolutionizes medicine.',
      'Bioethics is a serious consideration.',
    ],
    createdAt: '2024-11-22',
  },
  {
    id: 'g-uni-65',
    title: '综合训练 - 雅思阅读',
    titleZh: '综合训练 - 雅思阅读',
    level: 'university',
    category: 'reading',
    content: `雅思阅读真题练习技巧`,
    examples: [
      'Skim for the main idea.',
      'Scan for specific information.',
      'Understand vocabulary in context.',
    ],
    createdAt: '2024-11-23',
  },
  {
    id: 'g-uni-66',
    title: '综合训练 - 托福听力',
    titleZh: '综合训练 - 托福听力',
    level: 'university',
    category: 'reading',
    content: `托福听力综合训练`,
    examples: [
      'Take effective notes.',
      'Identify the main idea and details.',
      'Make inferences when necessary.',
    ],
    createdAt: '2024-11-24',
  },
  {
    id: 'g-uni-67',
    title: '综合训练 - GRE写作',
    titleZh: '综合训练 - GRE写作',
    level: 'university',
    category: 'pattern',
    content: `GRE写作issue和argument练习`,
    examples: [
      'Develop a clear thesis statement.',
      'Provide strong evidence and examples.',
      'Anticipate and address counterarguments.',
    ],
    createdAt: '2024-11-25',
  },
  {
    id: 'g-uni-68',
    title: '综合训练 - 学术论文写作',
    titleZh: '综合训练 - 学术论文写作',
    level: 'university',
    category: 'pattern',
    content: `学术论文写作综合训练`,
    examples: [
      'Structure your paper logically.',
      'Use appropriate academic style.',
      'Cite sources properly.',
    ],
    createdAt: '2024-11-26',
  },
  {
    id: 'g-uni-69',
    title: '综合训练 - 高级语法',
    titleZh: '综合训练 - 高级语法',
    level: 'university',
    category: 'pattern',
    content: `高级语法综合练习`,
    examples: [
      'Having been informed of the situation, action was taken.',
      'Were technology to fail us, we would be lost.',
      'The more evidence we gather, the clearer the picture becomes.',
    ],
    createdAt: '2024-11-27',
  },
  {
    id: 'g-uni-70',
    title: '综合训练 - 翻译实践',
    titleZh: '综合训练 - 翻译实践',
    level: 'university',
    category: 'pattern',
    content: `中英互译综合练习`,
    examples: [
      'The translation requires cultural sensitivity.',
      'Context determines meaning.',
      'Precision in word choice is crucial.',
    ],
    createdAt: '2024-11-28',
  },
  {
    id: 'g-uni-71',
    title: '大学综合练习 1',
    titleZh: '大学综合练习 1',
    level: 'university',
    category: 'pattern',
    content: `这是第1个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 1-uni-1.',
      'She has been studying English for years 1.',
      'The research demonstrates that 1.',
    ],
    createdAt: '2024-11-29',
  },
  {
    id: 'g-uni-72',
    title: '大学综合练习 2',
    titleZh: '大学综合练习 2',
    level: 'university',
    category: 'sentence',
    content: `这是第2个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 2-uni-1.',
      'She has been studying English for years 2.',
      'The research demonstrates that 2.',
    ],
    createdAt: '2024-11-30',
  },
  {
    id: 'g-uni-73',
    title: '大学综合练习 3',
    titleZh: '大学综合练习 3',
    level: 'university',
    category: 'clause',
    content: `这是第3个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 3-uni-1.',
      'She has been studying English for years 3.',
      'The research demonstrates that 3.',
    ],
    createdAt: '2024-12-01',
  },
  {
    id: 'g-uni-74',
    title: '大学综合练习 4',
    titleZh: '大学综合练习 4',
    level: 'university',
    category: 'partOfSpeech',
    content: `这是第4个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 4-uni-1.',
      'She has been studying English for years 4.',
      'The research demonstrates that 4.',
    ],
    createdAt: '2024-12-02',
  },
  {
    id: 'g-uni-75',
    title: '大学综合练习 5',
    titleZh: '大学综合练习 5',
    level: 'university',
    category: 'partOfSpeech',
    content: `这是第5个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 5-uni-1.',
      'She has been studying English for years 5.',
      'The research demonstrates that 5.',
    ],
    createdAt: '2024-12-03',
  },
  {
    id: 'g-uni-76',
    title: '大学综合练习 6',
    titleZh: '大学综合练习 6',
    level: 'university',
    category: 'pattern',
    content: `这是第6个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 6-uni-1.',
      'She has been studying English for years 6.',
      'The research demonstrates that 6.',
    ],
    createdAt: '2024-12-04',
  },
  {
    id: 'g-uni-77',
    title: '大学综合练习 7',
    titleZh: '大学综合练习 7',
    level: 'university',
    category: 'communication',
    content: `这是第7个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 7-uni-1.',
      'She has been studying English for years 7.',
      'The research demonstrates that 7.',
    ],
    createdAt: '2024-12-05',
  },
  {
    id: 'g-uni-78',
    title: '大学综合练习 8',
    titleZh: '大学综合练习 8',
    level: 'university',
    category: 'communication',
    content: `这是第8个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 8-uni-1.',
      'She has been studying English for years 8.',
      'The research demonstrates that 8.',
    ],
    createdAt: '2024-12-06',
  },
  {
    id: 'g-uni-79',
    title: '大学综合练习 9',
    titleZh: '大学综合练习 9',
    level: 'university',
    category: 'partOfSpeech',
    content: `这是第9个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 9-uni-1.',
      'She has been studying English for years 9.',
      'The research demonstrates that 9.',
    ],
    createdAt: '2024-12-08',
  },
  {
    id: 'g-uni-80',
    title: '大学综合练习 10',
    titleZh: '大学综合练习 10',
    level: 'university',
    category: 'partOfSpeech',
    content: `这是第10个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 10-uni-1.',
      'She has been studying English for years 10.',
      'The research demonstrates that 10.',
    ],
    createdAt: '2024-12-09',
  },
  {
    id: 'g-uni-81',
    title: '大学综合练习 11',
    titleZh: '大学综合练习 11',
    level: 'university',
    category: 'communication',
    content: `这是第11个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 11-uni-1.',
      'She has been studying English for years 11.',
      'The research demonstrates that 11.',
    ],
    createdAt: '2024-12-10',
  },
  {
    id: 'g-uni-82',
    title: '大学综合练习 12',
    titleZh: '大学综合练习 12',
    level: 'university',
    category: 'sentence',
    content: `这是第12个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 12-uni-1.',
      'She has been studying English for years 12.',
      'The research demonstrates that 12.',
    ],
    createdAt: '2024-12-11',
  },
  {
    id: 'g-uni-83',
    title: '大学综合练习 13',
    titleZh: '大学综合练习 13',
    level: 'university',
    category: 'reading',
    content: `这是第13个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 13-uni-1.',
      'She has been studying English for years 13.',
      'The research demonstrates that 13.',
    ],
    createdAt: '2024-12-12',
  },
  {
    id: 'g-uni-84',
    title: '大学综合练习 14',
    titleZh: '大学综合练习 14',
    level: 'university',
    category: 'sentence',
    content: `这是第14个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 14-uni-1.',
      'She has been studying English for years 14.',
      'The research demonstrates that 14.',
    ],
    createdAt: '2024-12-13',
  },
  {
    id: 'g-uni-85',
    title: '大学综合练习 15',
    titleZh: '大学综合练习 15',
    level: 'university',
    category: 'reading',
    content: `这是第15个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 15-uni-1.',
      'She has been studying English for years 15.',
      'The research demonstrates that 15.',
    ],
    createdAt: '2024-12-14',
  },
  {
    id: 'g-uni-86',
    title: '大学综合练习 16',
    titleZh: '大学综合练习 16',
    level: 'university',
    category: 'reading',
    content: `这是第16个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 16-uni-1.',
      'She has been studying English for years 16.',
      'The research demonstrates that 16.',
    ],
    createdAt: '2024-12-15',
  },
  {
    id: 'g-uni-87',
    title: '大学综合练习 17',
    titleZh: '大学综合练习 17',
    level: 'university',
    category: 'clause',
    content: `这是第17个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 17-uni-1.',
      'She has been studying English for years 17.',
      'The research demonstrates that 17.',
    ],
    createdAt: '2024-12-16',
  },
  {
    id: 'g-uni-88',
    title: '大学综合练习 18',
    titleZh: '大学综合练习 18',
    level: 'university',
    category: 'clause',
    content: `这是第18个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 18-uni-1.',
      'She has been studying English for years 18.',
      'The research demonstrates that 18.',
    ],
    createdAt: '2024-12-17',
  },
  {
    id: 'g-uni-89',
    title: '大学综合练习 19',
    titleZh: '大学综合练习 19',
    level: 'university',
    category: 'communication',
    content: `这是第19个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 19-uni-1.',
      'She has been studying English for years 19.',
      'The research demonstrates that 19.',
    ],
    createdAt: '2024-12-18',
  },
  {
    id: 'g-uni-90',
    title: '大学综合练习 20',
    titleZh: '大学综合练习 20',
    level: 'university',
    category: 'partOfSpeech',
    content: `这是第20个大学综合语法练习，涵盖了高级语法知识和专业英语应用。\n\n通过系统练习可以提升学术英语水平。`,
    examples: [
      'This is example sentence 20-uni-1.',
      'She has been studying English for years 20.',
      'The research demonstrates that 20.',
    ],
    createdAt: '2024-12-19',
  },
  {
    id: 'g-uni-91',
    title: '高级英语专题 1',
    titleZh: '高级英语专题 1',
    level: 'university',
    category: 'communication',
    content: `这是第1个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 1-1.',
      'Through extensive practice 1, proficiency is achieved.',
      'The study demonstrates 1 the importance of mastery.',
    ],
    createdAt: '2024-12-20',
  },
  {
    id: 'g-uni-92',
    title: '高级英语专题 2',
    titleZh: '高级英语专题 2',
    level: 'university',
    category: 'reading',
    content: `这是第2个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 2-1.',
      'Through extensive practice 2, proficiency is achieved.',
      'The study demonstrates 2 the importance of mastery.',
    ],
    createdAt: '2024-12-21',
  },
  {
    id: 'g-uni-93',
    title: '高级英语专题 3',
    titleZh: '高级英语专题 3',
    level: 'university',
    category: 'clause',
    content: `这是第3个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 3-1.',
      'Through extensive practice 3, proficiency is achieved.',
      'The study demonstrates 3 the importance of mastery.',
    ],
    createdAt: '2024-12-22',
  },
  {
    id: 'g-uni-94',
    title: '高级英语专题 4',
    titleZh: '高级英语专题 4',
    level: 'university',
    category: 'pattern',
    content: `这是第4个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 4-1.',
      'Through extensive practice 4, proficiency is achieved.',
      'The study demonstrates 4 the importance of mastery.',
    ],
    createdAt: '2024-12-23',
  },
  {
    id: 'g-uni-95',
    title: '高级英语专题 5',
    titleZh: '高级英语专题 5',
    level: 'university',
    category: 'reading',
    content: `这是第5个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 5-1.',
      'Through extensive practice 5, proficiency is achieved.',
      'The study demonstrates 5 the importance of mastery.',
    ],
    createdAt: '2024-12-24',
  },
  {
    id: 'g-uni-96',
    title: '高级英语专题 6',
    titleZh: '高级英语专题 6',
    level: 'university',
    category: 'communication',
    content: `这是第6个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 6-1.',
      'Through extensive practice 6, proficiency is achieved.',
      'The study demonstrates 6 the importance of mastery.',
    ],
    createdAt: '2024-12-25',
  },
  {
    id: 'g-uni-97',
    title: '高级英语专题 7',
    titleZh: '高级英语专题 7',
    level: 'university',
    category: 'reading',
    content: `这是第7个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 7-1.',
      'Through extensive practice 7, proficiency is achieved.',
      'The study demonstrates 7 the importance of mastery.',
    ],
    createdAt: '2024-12-26',
  },
  {
    id: 'g-uni-98',
    title: '高级英语专题 8',
    titleZh: '高级英语专题 8',
    level: 'university',
    category: 'sentence',
    content: `这是第8个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 8-1.',
      'Through extensive practice 8, proficiency is achieved.',
      'The study demonstrates 8 the importance of mastery.',
    ],
    createdAt: '2024-12-27',
  },
  {
    id: 'g-uni-99',
    title: '高级英语专题 9',
    titleZh: '高级英语专题 9',
    level: 'university',
    category: 'reading',
    content: `这是第9个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 9-1.',
      'Through extensive practice 9, proficiency is achieved.',
      'The study demonstrates 9 the importance of mastery.',
    ],
    createdAt: '2024-12-28',
  },
  {
    id: 'g-uni-100',
    title: '高级英语专题 10',
    titleZh: '高级英语专题 10',
    level: 'university',
    category: 'sentence',
    content: `这是第10个高级英语专题学习内容，深入探讨高级语法现象和表达方式。\n\n掌握这些内容可以显著提升英语水平和学术能力。`,
    examples: [
      'Advanced English expression 10-1.',
      'Through extensive practice 10, proficiency is achieved.',
      'The study demonstrates 10 the importance of mastery.',
    ],
    createdAt: '2024-12-29',
  },

  {
    id: 'g-uni-101',
    title: '高级时态 - 将来进行时',
    titleZh: '将来进行时 will be doing',
    level: 'university',
    category: 'tense',
    content: `将来进行时：will be + 动词-ing，表示将来某时刻正在发生的动作：

This time tomorrow, I will be flying to London.
Will you be working late tonight?

也用于表示自然发生或预料中即将发生的动作（比will do更委婉）。`,
    examples: [
      'By this time next year, I will be studying at university.',
      'Will you be using the car later?',
      'The team will be meeting at 3 PM to discuss the plan.',
    ],
    createdAt: '2024-10-29',
  },

  {
    id: 'g-uni-102',
    title: '高级时态 - 将来完成时',
    titleZh: '将来完成时 will have done',
    level: 'university',
    category: 'tense',
    content: `将来完成时：will have + 过去分词，表示将来某时刻之前已完成的动作：

By 2030, I will have graduated from university.
By the time you arrive, I will have finished cooking.

常与by + 将来时间点连用。`,
    examples: [
      'By next month, she will have lived here for five years.',
      'I will have read the entire book by Friday.',
      'The project will have been completed by the end of the year.',
    ],
    createdAt: '2024-10-30',
  },

  {
    id: 'g-uni-103',
    title: '高级时态 - 将来完成进行时',
    titleZh: '将来完成进行时 will have been doing',
    level: 'university',
    category: 'tense',
    content: `将来完成进行时：will have been + 动词-ing，表示将来某时刻之前一直在进行的动作：

By next July, I will have been working here for three years.

强调动作的持续性，若不强调则用将来完成时。`,
    examples: [
      'He will have been learning English for ten years by then.',
      'By the time the exam starts, she will have been revising for weeks.',
      'They will have been waiting for over two hours when the bus finally arrives.',
    ],
    createdAt: '2024-10-31',
  },

  {
    id: 'g-uni-104',
    title: '高级时态 - 过去完成进行时',
    titleZh: '过去完成进行时 had been doing',
    level: 'university',
    category: 'tense',
    content: `过去完成进行时：had been + 动词-ing，表示过去某时刻之前一直在进行的动作：

He was tired because he had been working all day.
She realized she had been overthinking the problem.

过去完成进行时强调动作在另一过去动作之前持续进行。`,
    examples: [
      'The man who had been sleeping soundly was awakened by the thunder.',
      'I had been studying for hours when my friend called.',
      'They had been discussing the issue for weeks before reaching a decision.',
    ],
    createdAt: '2024-11-01',
  },

  {
    id: 'g-uni-105',
    title: '高级语态 - 双重被动',
    titleZh: '双重被动结构 be + past participle + to be done',
    level: 'university',
    category: 'voice',
    content: `双重被动：主语既是第一个被动结构的宾语，又是第二个不定式的逻辑主语：

The book is said to be translated into 50 languages. (据说被译成...)
The problem is known to have been solved. (据悉已被解决)

be said/reported/believed/expected + to have done（表示已完成）`,
    examples: [
      'The mayor is expected to be elected next month.',
      'The ancient temple is believed to have been built in the 15th century.',
      'The new policy is reported to be causing widespread concern.',
    ],
    createdAt: '2024-11-02',
  },

  {
    id: 'g-uni-106',
    title: '高级语态 - 假拟被动',
    titleZh: '假拟被动（主动形式表示被动含义）',
    level: 'university',
    category: 'voice',
    content: `某些动词的主动形式可表示被动含义（常见于need/want/require/deserve + doing）：

The car needs washing. (= needs to be washed)
The book is worth reading.
The food smells tempting.

这种情况多见于与物连用的动词，不强调动作执行者。`,
    examples: [
      'This problem requires careful thought. (= to be thought about)',
      'The poem reads smoothly. (= can be read smoothly)',
      'The fabric feels soft.',
    ],
    createdAt: '2024-11-03',
  },

  {
    id: 'g-uni-107',
    title: '高级语气 - 高级虚拟语气',
    titleZh: '高级虚拟语气综合运用',
    level: 'university',
    category: 'voice',
    content: `高级虚拟语气综合运用：

1. if only + 过去式/had done（要是...就好了）
2. lest + 主语 + should + 动词原形（以防万一）
3. were it not for + 名词，... would have done（要不是因为）
4. but for + 名词，... would have done（若非）

If only I had studied harder in my youth!
Were it not for your help, I would have failed.`,
    examples: [
      'If only I had taken her advice.',
      'Lest anyone should doubt my words, I have evidence.',
      'But for the scholarship, I would not have been able to attend university.',
    ],
    createdAt: '2024-11-04',
  },

  {
    id: 'g-uni-108',
    title: '高级句型 - 独立主格高级',
    titleZh: '独立主格结构高级用法',
    level: 'university',
    category: 'sentence',
    content: `独立主格结构高级用法：

1. with + 宾语 + 分词/不定式/形容词
With everything taken care of, we left.

2. 介词with的独立结构
With the rain having stopped, we continued our journey.

3. 无动词独立主格（名词直接作主语）
Hands clasped, eyes closed, she began to pray.`,
    examples: [
      'With the light on, he could not sleep.',
      'The lecture over, the students rushed out.',
      'Weather permitting, we will proceed as planned.',
    ],
    createdAt: '2024-11-05',
  },

  {
    id: 'g-uni-109',
    title: '高级句型 - 嵌入式定语从句',
    titleZh: '嵌入式定语从句（先行词+定语+名词）',
    level: 'university',
    category: 'sentence',
    content: `嵌入式定语从句：定语从句直接嵌套在名词短语中：

I have lost the book which I bought yesterday.
She is the only person that I have ever trusted completely.

注意：先行词在主句和从句中同时承担角色。`,
    examples: [
      "The girl who won the competition is my sister's friend.",
      'He mentioned a book which everyone should read at least once.',
      'The place where we spent our vacation was absolutely stunning.',
    ],
    createdAt: '2024-11-06',
  },

  {
    id: 'g-uni-110',
    title: '高级句型 - 先行词+介词+关系代词',
    titleZh: '介词+关系代词引导定语从句',
    level: 'university',
    category: 'sentence',
    content: `介词+关系代词（whom/which）引导定语从句，介词位置决定关系代词不可省略：

The person to whom you spoke is my professor.
The city in which I was born is Beijing.

which可与of/before/after等介词搭配，语气正式。`,
    examples: [
      'The doctor for whom we waited finally arrived.',
      'The reason about which they argued was trivial.',
      'The building in which we studied was demolished.',
    ],
    createdAt: '2024-11-07',
  },

  {
    id: 'g-uni-111',
    title: '高级句型 - 分裂句',
    titleZh: '分裂句（Cleft Sentence）强调结构',
    level: 'university',
    category: 'sentence',
    content: `分裂句：用it引导的强调句，将信息焦点放在句子某部分：

It is the quality of the teaching that makes this school special.
It was not until I graduated that I understood my teachers.

也可用于where/who/why/what等引导的特殊疑问分裂句：
What I need most is a good night's sleep.`,
    examples: [
      'It is not the destination but the journey that matters.',
      'It was on the roof that we finally found the cat.',
      'It is who you know, not what you know, that matters in business.',
    ],
    createdAt: '2024-11-08',
  },

  {
    id: 'g-uni-112',
    title: '高级句型 - 转移否定',
    titleZh: '否定转移（not位置移动）',
    level: 'university',
    category: 'sentence',
    content: `否定转移：not从真实否定位置（前移到从句）转移到句子的另一位置：

I do not think (that) he is right. (= 我认为他不对)
(not否定的不是I think，而是he is right)

这类动词包括：think, believe, suppose, expect, imagine, seem, appear

在正式书面语中，不转移的否定更客观：I think that he is not right.`,
    examples: [
      'I do not believe she will come.',
      'I do not suppose he cares.',
      'He does not seem to mind the noise.',
    ],
    createdAt: '2024-11-09',
  },

  {
    id: 'g-uni-113',
    title: '高级句型 - 介词短语作状语',
    titleZh: '复杂介词短语作状语',
    level: 'university',
    category: 'sentence',
    content: `复杂介词短语可作状语、定语、表语：

because of, due to, owing to, thanks to, apart from, in spite of, with regard to, in addition to, as a result of, on behalf of

Due to the heavy rain, the match was cancelled.
Thanks to your help, we succeeded.`,
    examples: [
      'In spite of being exhausted, she continued working.',
      'Because of the traffic, we were late for the meeting.',
      'Thanks to modern technology, we can communicate instantly.',
    ],
    createdAt: '2024-11-10',
  },

  {
    id: 'g-uni-114',
    title: '高级从句 - 名词性从句综合',
    titleZh: '名词性从句（主语/宾语/表语/同位语）综合',
    level: 'university',
    category: 'clause',
    content: `名词性从句四种类型综合：

主语：That he passed the exam surprised everyone.
宾语：I believe that honesty is the best policy.
表语：The truth is that I have never understood mathematics.
同位语：The fact that he was absent surprised us.

whether/if的区别：if只用于宾语从句，whether可用于所有名词性从句，且可与or not连用。`,
    examples: [
      'Whether we attend the conference remains undecided.',
      'That she survived the accident is a miracle.',
      'I wonder whether or not we should accept the offer.',
    ],
    createdAt: '2024-11-11',
  },

  {
    id: 'g-uni-115',
    title: '高级从句 - 状语从句缩合',
    titleZh: '状语从句缩合为介词短语',
    level: 'university',
    category: 'clause',
    content: `状语从句可缩合为介词短语（高级写作技巧）：

when → on + 动名词/upon + 动名词
If → in case of / in the event of
because → due to / owing to
although → despite / in spite of
before → prior to
after → following
unless → without`,
    examples: [
      'On arriving at the station, I called a taxi. (= When I arrived...)',
      'In case of emergency, call 110. (= If there is an emergency...)',
      'Despite having failed twice, he attempted again. (= Although he had failed twice...)',
    ],
    createdAt: '2024-11-12',
  },

  {
    id: 'g-uni-116',
    title: '高级从句 - which/as引导非限制性定语从句',
    titleZh: 'which/as引导非限制性定语从句指代主句',
    level: 'university',
    category: 'clause',
    content: `which和as引导的非限制性定语从句可指代整个主句：

which只能位于主句之后；as可位于主句之前、中间或之后：

He made a great speech, which everyone appreciated.
As is well known, practice makes perfect.
The experiment, as we expected, was a great success.`,
    examples: [
      'She married him, which surprised many people.',
      'As the saying goes, every cloud has a silver lining.',
      'The result, as could be expected, was inconclusive.',
    ],
    createdAt: '2024-11-13',
  },

  {
    id: 'g-uni-117',
    title: '高级从句 - 介词+关系代词+ever',
    titleZh: 'whatever/whoever + 介词结构',
    level: 'university',
    category: 'clause',
    content: `介词与-ever词搭配，表示让步和名词性从句的双重功能：

Whoever you marry, you must love her. (让步)
You can invite whoever you want to the party. (名词性从句，宾语)
Whichever of these books you choose, I will pay for it. (名词性从句，主语/宾语)`,
    examples: [
      'Whoever you ask, the answer will be the same.',
      'Take whichever seat you like.',
      'I will give the reward to whoever finds my cat.',
    ],
    createdAt: '2024-11-14',
  },

  {
    id: 'g-uni-118',
    title: '高级从句 - 先行词/主句/从句复杂关系',
    titleZh: '分隔式定语从句和连环定语从句',
    level: 'university',
    category: 'clause',
    content: `分隔式定语从句：先行词与定语从句被其他成分隔开：

The time is coming when we will have to make a decision. (when提前)

连环定语从句：用and/but连接两个定语从句修饰同一先行词：

There was a man who called on her yesterday and who invited her to dinner.`,
    examples: [
      'The day will surely come when our dream becomes reality.',
      'A student was caught who had been cheating on the exam.',
      'There is a friend who is always there for me and who never judges me.',
    ],
    createdAt: '2024-11-15',
  },

  {
    id: 'g-uni-119',
    title: '高级词汇 - 易混淆动词辨析',
    titleZh: '高级词汇：易混淆动词辨析',
    level: 'university',
    category: 'word',
    content: `高级词汇：常见易混淆动词：

-rise/raise/arise: 升起（不及物）/举起（及物）/产生
-lie/lay: 躺（不及物）/放置（及物）
-sit/set: 坐（不及物）/放置（及物）
-hang/hung/hanged: 挂（规则/规则）/绞死（不规则）`,
    examples: [
      'The sun rises in the east and sets in the west.',
      'Please lay the book on the table.',
      'Difficulties arose during the construction process.',
    ],
    createdAt: '2024-11-16',
  },

  {
    id: 'g-uni-120',
    title: '高级词汇 - 名词可数性',
    titleZh: '名词可数性：常见不可数名词',
    level: 'university',
    category: 'word',
    content: `英语名词可数性是学习难点：

常见不可数名词：
advice, information, news, furniture, luggage, equipment, progress, research, scenery, jewelry, baggage, bread, damage, machinery

常被误用为可数的词：
people（民族/种族时可数：a people）, fish（条数时可数）, fruit（种类时可数）`,
    examples: [
      'I have some exciting news to share with you.',
      'Two pieces of furniture were delivered today.',
      'Each culture has its own customs and traditions.',
    ],
    createdAt: '2024-11-17',
  },

  {
    id: 'g-uni-121',
    title: '高级词汇 - 介词惯用搭配',
    titleZh: '高级词汇：介词惯用搭配',
    level: 'university',
    category: 'word',
    content: `高级词汇：固定介词搭配（高级英语写作必备）：

形容词+介词：
afraid of, aware of, capable of, fond of, proud of
dependent on, independent of, based on, rich in

动词+介词：
consist of, differ from, belong to, rely on, insist on
approve of, result in, result from, adapt to, adjust to`,
    examples: [
      'The group consists of ten members from different countries.',
      'Success depends on hard work and opportunity.',
      'She is proud of her achievements despite many challenges.',
    ],
    createdAt: '2024-11-18',
  },

  {
    id: 'g-uni-122',
    title: '高级词汇 - 形容词位置',
    titleZh: '形容词顺序（多个形容词修饰名词）',
    level: 'university',
    category: 'word',
    content: `多个形容词修饰名词时的顺序（口诀：县官行令宴国才）：

县(限)-官(观)-行(形)-令(龄)-宴(色)-国(材)-才(途)

限定词(冠词/物主代词) → 观点 → 大小/形状 → 新旧/温度 → 颜色 → 国籍/材料 → 用途/类别

a beautiful small round old brown French writing desk
a lovely big green antique Chinese carpet`,
    examples: [
      'The tall young American woman doctor saved the patient.',
      'Three clever little white kittens played with a ball of wool.',
      'She wore a beautiful long blue silk evening dress.',
    ],
    createdAt: '2024-11-19',
  },

  {
    id: 'g-uni-123',
    title: '高级词汇 - 副词位置',
    titleZh: '副词在句中的位置',
    level: 'university',
    category: 'word',
    content: `副词位置灵活，但位置不同强调点不同：

只放句中（助动词后）：
I have never seen such a movie. (= I have not ever...)

放句首（最强调）：
Never have I seen such a movie.

频率副词在be动词/助动词/情态动词后，实义动词前：
He is always late. / He always arrives late. / He will always be late.`,
    examples: [
      'I have already finished my homework.',
      'She never doubts her abilities.',
      'Clearly, he was not telling the truth.',
    ],
    createdAt: '2024-11-20',
  },

  {
    id: 'g-uni-124',
    title: '高级词汇 - 词根词缀构词法',
    titleZh: '高级构词法：词根词缀扩展',
    level: 'university',
    category: 'word',
    content: `高级构词法：常用拉丁词根：

-ced/-ceed/-cess = 走（precede, exceed, success）
-duct = 引导（conduct, deduce, introduce, produce）
-spect = 看（inspect, respect, prospect, expect）
-rupt = 断裂（interrupt, corrupt, erupt, bankrupt）
-vert/vers = 转（convert, reverse, diverse, anniversary）`,
    examples: [
      'The ceremony will precede the main event.',
      'His speech was interrupted by loud applause.',
      'The diverse opinions enriched the discussion.',
    ],
    createdAt: '2024-11-21',
  },

  {
    id: 'g-uni-125',
    title: '高级词汇 - 同义词替换',
    titleZh: '高级写作：同义词替换（避免重复）',
    level: 'university',
    category: 'word',
    content: `高级写作中避免重复，使用同义词替换：

important → significant, crucial, essential, vital, paramount
many → numerous, a multitude of, a host of, countless
because → due to the fact that, owing to, on account of, for the reason that
think → argue, believe, contend, maintain, hold the view that`,
    examples: [
      'Crucial to the success of the project is effective communication.',
      'A multitude of factors contributed to the outcome.',
      'I maintain that education is the foundation of progress.',
    ],
    createdAt: '2024-11-22',
  },

  {
    id: 'g-uni-126',
    title: '高级表达 - 学术写作过渡词',
    titleZh: '学术写作：段落过渡词',
    level: 'university',
    category: 'communication',
    content: `学术写作常用过渡词（Topic/Control/Device信号词）：

递进：furthermore, moreover, in addition, besides
对比：however, nevertheless, on the contrary, in contrast
因果：therefore, consequently, as a result, thus
举例：for instance, specifically, namely, in particular
结论：in conclusion, to sum up, overall, in summary`,
    examples: [
      'The experiment yielded significant results. Furthermore, these findings align with prior research.',
      'The population is increasing rapidly. As a result, housing demand has surged.',
      'In conclusion, the study confirms the initial hypothesis.',
    ],
    createdAt: '2024-11-23',
  },

  {
    id: 'g-uni-127',
    title: '高级表达 - 正式与非正式语体',
    titleZh: '语体转换：正式与非正式表达',
    level: 'university',
    category: 'communication',
    content: `英语语体分正式（书面/演讲）和非正式（口语）：

非正式 → 正式：
gonna → going to
lots of → many/a great deal of
many people → a considerable number of people
I think → it is widely believed / in my view
about → regarding / concerning
so → therefore / consequently`,
    examples: [
      'In regard to your inquiry, I am pleased to provide the following information.',
      'A considerable number of respondents expressed dissatisfaction with the service.',
      'It is widely believed that climate change poses a significant threat to global biodiversity.',
    ],
    createdAt: '2024-11-24',
  },

  {
    id: 'g-uni-128',
    title: '高级表达 - 修辞问句',
    titleZh: '修辞问句（反问句/设问句）',
    level: 'university',
    category: 'communication',
    content: `修辞问句（Rhetorical Question）：形式为疑问句，实际为强烈陈述：

Who knows? (= Nobody knows.)
Isnt it wonderful? (= It is wonderful!)
Who can blame him? (= Nobody can blame him.)

设问句（Epistemic Question）：自问自答，引导思考：
What is the meaning of life? It is a question that has puzzled philosophers for centuries.`,
    examples: [
      'Isnt it time we took action? (= We should take action now.)',
      'Can anyone deny that the earth is round? (= No one can deny...)',
      'Does anybody really care about the environment? (= Most people do not really care.)',
    ],
    createdAt: '2024-11-25',
  },

  {
    id: 'g-uni-129',
    title: '高级表达 - 平行结构',
    titleZh: '平行结构（Parallelism）',
    level: 'university',
    category: 'communication',
    content: `平行结构：用并列连词连接形式相同的成分：

Not only...but also...：
Not only did he finish the work, but he also enjoyed it.

Both...and...：
The course is both challenging and rewarding.

Whether...or...：
Whether you like it or not, you must follow the rules.

平行结构要求动词形式一致，名词形式一致。`,
    examples: [
      'The book is both informative and entertaining.',
      'She is talented as a singer and as a dancer.',
      'You can choose to study hard or to fail the exam.',
    ],
    createdAt: '2024-11-26',
  },

  {
    id: 'g-uni-130',
    title: '高级表达 - 委婉语与夸张',
    titleZh: '委婉语（Euphemism）与夸张（Hyperbole）',
    level: 'university',
    category: 'communication',
    content: `委婉语（Euphemism）：用温和词语替代直接但可能冒犯的表达：

die → pass away / breathe one's last
poor → economically disadvantaged
toilet → bathroom / rest room

夸张（Hyperbole）：过度夸张以达到强调效果：
I have told you a million times!
I could sleep for a thousand years.`,
    examples: [
      'The company announced it would be downsizing. (euphemism for firing workers)',
      'She is so hungry she could eat a horse. (hyperbole)',
      'He is the tallest person in the world. (hyperbole for very tall)',
    ],
    createdAt: '2024-11-27',
  },

  {
    id: 'g-uni-131',
    title: '高级表达 - 隐喻与明喻',
    titleZh: '隐喻(Metaphor)与明喻(Simile)',
    level: 'university',
    category: 'communication',
    content: `明喻（Simile）：用like/as as连接两者：
Life is like a journey.
He works like a dog.

隐喻（Metaphor）：直接说A是B：
Life is a journey.
Time is money.

典故隐喻（Allusion）：引用神话、历史、文学典故：
He is a real Romeo with women. (罗密欧)
It is a Pandora's box. (潘多拉盒子)`,
    examples: [
      'Her eyes are like stars. (simile)',
      'He has a heart of stone. (metaphor)',
      "Opening that email was like opening a Pandora's box. (allusion)",
    ],
    createdAt: '2024-11-28',
  },

  {
    id: 'g-uni-132',
    title: '高级语法 - 情态动词综合',
    titleZh: '情态动词综合：might/could/would/sHOULD',
    level: 'university',
    category: 'partOfSpeech',
    content: `高级情态动词用法辨析：

must not ≠ do not have to（禁止 vs 不必）
can not ≠ cannot（能力否定 vs 禁止）
might not ≠ may not（可能不 vs 可能不）
should not ≠ ought not（不应该 vs 不应该）
would not ≠ will not（意愿否定 vs 将来否定）

could have done（过去可能性），should have done（本应该），would have done（本会）`,
    examples: [
      'You must not smoke here. (= it is forbidden)',
      'You do not have to come if you are busy. (= it is not necessary)',
      'I should have studied harder for the exam.',
    ],
    createdAt: '2024-11-29',
  },

  {
    id: 'g-uni-133',
    title: '高级语法 - must/cannot推断',
    titleZh: 'must/cannot表推断（高级）',
    level: 'university',
    category: 'partOfSpeech',
    content: `must表示对现在/过去事情的肯定推断：

He must be at home. (= I am sure he is at home)
He must have left. (= I am sure he left)

cannot/could not表示否定推断：
That cannot be true. (= I am sure it is not true)
He cannot have done such a thing. (= I am sure he did not do it)`,
    examples: [
      'The lights are on. Someone must be home.',
      'All the evidence points to him. He must have committed the crime.',
      'The soup has been untouched. You cannot have tasted it.',
    ],
    createdAt: '2024-11-30',
  },

  {
    id: 'g-uni-134',
    title: '高级语法 - 倍数比较',
    titleZh: '倍数表达法（高级比较）',
    level: 'university',
    category: 'partOfSpeech',
    content: `倍数比较的多种表达方式：

A is twice as big as B.
A is twice the size of B.
A is bigger than B by a factor of two.
A is double the size of B.

A is three times as tall as B. (= A is three times the height of B.)`,
    examples: [
      'This room is twice as large as that one.',
      'The population of India is more than three times that of the United States.',
      'The new model is 50% more efficient than the previous version.',
    ],
    createdAt: '2024-12-01',
  },

  {
    id: 'g-uni-135',
    title: '高级语法 - 比较级特殊结构',
    titleZh: '比较级特殊结构：the more...the more/No more...than',
    level: 'university',
    category: 'partOfSpeech',
    content: `比较级特殊结构：

the more..., the more...（越...越...）
The more you learn, the more you realize you do not know.

no more...than = not any more...than（两者都不）
He is no more a genius than I am. (= neither he nor I am a genius)

not more...than = less clever...（前者不如后者）
He is not more clever than his brother. (= his brother is cleverer)`,
    examples: [
      'The more you practice, the better you become.',
      'Whales are no more fish than dogs are. (= neither whales nor dogs are fish)',
      'This book is no more interesting than that one. (= both are uninteresting)',
    ],
    createdAt: '2024-12-02',
  },

  {
    id: 'g-uni-136',
    title: '高级语法 - 否定形式综合',
    titleZh: '否定形式综合：全部否定/部分否定/双重否定',
    level: 'university',
    category: 'partOfSpeech',
    content: `否定形式综合辨析：

全部否定：none, neither, never, nobody, nothing, nowhere
部分否定：not all, not every, not both, not always
双重否定（表肯定）：not without, never without, cannot without

Not all that glitters is gold. (= some glittering things are not gold)
I cannot succeed without your help. (= with your help I can succeed)`,
    examples: [
      'Neither solution is satisfactory.',
      'Not everyone agrees with this theory.',
      'You cannot master a language without constant practice.',
    ],
    createdAt: '2024-12-03',
  },

  {
    id: 'g-uni-137',
    title: '高级语法 - 限定词综合',
    titleZh: '限定词综合：冠词/物主/指示/不定/分配限定词',
    level: 'university',
    category: 'partOfSpeech',
    content: `限定词搭配规则：

前位限定词（each, both, half）+ 中位限定词（the, a/an, this, my, some）+ 后位限定词（many, several, few, last, next）

both the teachers / half my time / all these books

注意：同一类限定词不能重叠：
the my book (X) / a some books (X) / this my book (X)`,
    examples: [
      'Both the students passed the exam.',
      'Half my friends live abroad.',
      'All those beautiful flowers have wilted.',
    ],
    createdAt: '2024-12-04',
  },

  {
    id: 'g-uni-138',
    title: '高级语法 - 替代与省略',
    titleZh: '替代（Substitution）与省略（Ellipsis）的高级用法',
    level: 'university',
    category: 'partOfSpeech',
    content: `高级替代与省略：

替代：
do so (= do that action, 与主语/时间一致)
so do I (= 同样适用于我)

倒述附和结构（Tag附和）：
So it is with... / Nor can I...

I enjoy reading. So do they. (= They enjoy reading too.)
I do not smoke. Nor does he. (= He does not smoke either.)`,
    examples: [
      'She studies medicine, and so do I.',
      'He never complains. Neither does she.',
      'You should try harder. So should everyone else in the class.',
    ],
    createdAt: '2024-12-05',
  },

  {
    id: 'g-uni-139',
    title: '高级语法 - 反义疑问句高级',
    titleZh: '反义疑问句（Tag Question）高级用法',
    level: 'university',
    category: 'partOfSpeech',
    content: `反义疑问句高级用法：

陈述部分有nobody/none/rarely/seldom时，疑问尾句用肯定：
Nobody was hurt, were they?
Seldom does he complain, does he?

陈述部分有Im...时，疑问尾句为arent I?
Im right, arent I?

陈述部分有I think/believe...时，疑问尾句与that从句一致：
I think he is coming, isnt he?`,
    examples: [
      'Nothing is impossible, is it?',
      'I am taller than you, arent I?',
      'She seldom goes out, does she?',
    ],
    createdAt: '2024-12-06',
  },

  {
    id: 'g-uni-140',
    title: '高级语法 - there be句型高级',
    titleZh: 'there be句型高级用法',
    level: 'university',
    category: 'partOfSpeech',
    content: `there be句型高级用法：

there is likely/sure/bound to be = 很可能有
There is likely to be a strong turnout at the meeting.

there being + 名词/从句（独立主格）
There being no further business, the meeting closed.

there to be（不定式结构，常用于介词for后）
For there to be another snowstorm seems unlikely.`,
    examples: [
      'There is certain to be a solution to this problem.',
      'There being no guide, we got lost in the forest.',
      'For there to be complete agreement seems impossible.',
    ],
    createdAt: '2024-12-07',
  },

  {
    id: 'g-uni-141',
    title: '高级表达 - 长难句分析',
    titleZh: '长难句分析方法',
    level: 'university',
    category: 'reading',
    content: `长难句分析步骤：

1. 找谓语动词 → 确定主句核心
2. 找从句引导词（that/which/who/when/if等）→ 识别从句
3. 找介词短语 → 确定修饰关系
4. 找非谓语（分词/不定式）→ 确定补充信息
5. 确定句子主干 = 主语 + 谓语 + 宾语/表语

The book which I bought yesterday, which was recommended by my teacher, is the most interesting one I have ever read.`,
    examples: [
      'Understanding what the author means requires careful analysis of the context.',
      'The scientist who discovered the theory, whose work has influenced generations, was awarded the Nobel Prize.',
      'What he said, whether true or false, must be carefully evaluated.',
    ],
    createdAt: '2024-12-08',
  },

  {
    id: 'g-uni-142',
    title: '高级表达 - 直接引语变间接引语',
    titleZh: '直接引语转为间接引语（高级规则）',
    level: 'university',
    category: 'reading',
    content: `间接引语高级规则（主句过去时时态倒拨）：

say → tell sb / ask sb / advise sb / warn sb / order sb

时态倒拨（除非主句为现在时）：
will → would, can → could, shall → should, may → might
this → that, these → those, here → there, now → then

She said: I will come tomorrow.
→ She said that she would come the next day.`,
    examples: [
      "He said: I have finished my work.\n→ He said that he had finished my work.",
      "She asked: Will you come to the party?\n→ She asked if I would come to the party.",
      "The teacher ordered: Stop talking!\n→ The teacher ordered us to stop talking.",
    ],
    createdAt: '2024-12-09',
  },

  {
    id: 'g-uni-143',
    title: '高级表达 - 一词多义与语境',
    titleZh: '一词多义与语境依赖性',
    level: 'university',
    category: 'reading',
    content: `一词多义是高级阅读理解的核心难点：

bank: 河岸 / 银行 / 倾斜
current: 当前 / 水流 / 气流
novel: 小说 / 新颖的
figure: 数字 / 人物 / 身材 / 认为
address: 地址 / 演讲 / 处理

语境决定词义：
I need to address the issue. (= 处理)
What is your home address? (= 住址)`,
    examples: [
      'The scientist made a novel contribution to the field.',
      'The current of the river was too strong to swim against.',
      'She figured that the solution was incorrect.',
    ],
    createdAt: '2024-12-10',
  },

  {
    id: 'g-uni-144',
    title: '高级表达 - 语篇衔接',
    titleZh: '语篇衔接：衔接词与语义连贯',
    level: 'university',
    category: 'reading',
    content: `语篇衔接手段：

1. 词汇衔接：同义词、上下义词、重复
2. 照应（Reference）：人称/指示/比较照应
3. 连接（Conjunction）：递进/转折/因果/时间
4. 词汇衔接（Collocation）：词语搭配形成的语义网

Coherence（语义连贯）需要衔接手段支持：
In addition to..., moreover,..., however,..., consequently,..., therefore...`,
    examples: [
      'First, the experiment was conducted. Then, the results were analyzed. Finally, conclusions were drawn.',
      'Many species face extinction. This is a matter of great concern for biologists worldwide.',
      'The population is increasing. Consequently, housing demand is rising.',
    ],
    createdAt: '2024-12-11',
  },

  {
    id: 'g-uni-145',
    title: '高级表达 - 信息焦点与尾重原则',
    titleZh: '信息焦点与末端重量原则（End Weight）',
    level: 'university',
    category: 'reading',
    content: `末端重量原则（End Weight）：信息量大的成分倾向于放在句尾，使句子更自然：

I was shocked by [the unexpected and tragic death of his only son]. (长宾语)

为实现末端重量，可使用：
- there be句型：There is a book on the table that I bought yesterday.
- 形式主语it：It is important to learn foreign languages.
- 从句：The question is whether we can finish on time.`,
    examples: [
      'What I want to know is when the project will be completed.',
      'There are many students in the classroom who study very late every night.',
      'It is necessary to arrive at the airport three hours before the flight.',
    ],
    createdAt: '2024-12-12',
  },

  {
    id: 'g-uni-146',
    title: '高级表达 - 主述位结构',
    titleZh: '主位-述位结构（Theme-Rheme）与信息流',
    level: 'university',
    category: 'reading',
    content: `主位（Theme）= 话语出发点，述位（Rhyme）= 新信息：

书面英语倾向：主位在前，新信息（述位）在后，形成从已知到新知的自然信息流。

主题主位（Topical Theme）→ 语篇主位（Textual Theme）→ 人际主位（Interpersonal Theme）

As for the results, they exceeded all expectations. (As for... = 语篇主位)`,
    examples: [
      'Regarding the budget, we need to discuss it further.',
      'However difficult the problem may be, we should not give up.',
      'In conclusion, the evidence clearly supports the hypothesis.',
    ],
    createdAt: '2024-12-13',
  },

  {
    id: 'g-uni-147',
    title: '高级表达 - 名词化',
    titleZh: '名词化（Nominalization）与语法隐喻',
    level: 'university',
    category: 'reading',
    content: `名词化：把动词/形容词转化为名词，是正式书面语的重要特征：

If you decide = your decision
To grow the economy = economic growth
That he failed = his failure

名词化使句子更客观、信息密度更高，是学术写作的核心技巧：
The increase of temperature caused the ice to melt.
(= Increasing the temperature caused the ice to melt.)`,
    examples: [
      'The transformation of the city has been remarkable. (= The city has been transformed...)',
      'His refusal to cooperate led to serious consequences.',
      'The development of artificial intelligence will reshape society.',
    ],
    createdAt: '2024-12-14',
  },

  {
    id: 'g-uni-148',
    title: '高级表达 - 模糊限制语',
    titleZh: '学术写作中的模糊限制语（Hedging）',
    level: 'university',
    category: 'reading',
    content: `模糊限制语（Hedging）：在学术写作中，用以表达不确定、谨慎或间接的语气：

情态动词：may, might, could, would
形容词/副词：perhaps, possibly, likely, unlikely, relatively
动词：seem, appear, suggest, indicate, hypothesize

This finding may suggest that the theory requires revision.
The results appear to support the initial hypothesis.`,
    examples: [
      'It is possible that the treatment will prove effective.',
      'The data seem to indicate a correlation between the two variables.',
      'This interpretation might be contested by scholars with different perspectives.',
    ],
    createdAt: '2024-12-15',
  },

  {
    id: 'g-uni-149',
    title: '高级表达 - 学术摘要写作',
    titleZh: '学术摘要的结构与常用表达',
    level: 'university',
    category: 'reading',
    content: `学术摘要（Abstract）结构：背景(Background) → 目的(Objective) → 方法(Method) → 结果(Results) → 结论(Conclusion)

常用表达：
This study/paper investigates/examines...
The objective/purpose of this research is to...
The methodology involved... / Data were collected through...
The results demonstrate/reveal/indicate that...
In conclusion / The findings suggest / It is concluded that...`,
    examples: [
      'This paper examines the relationship between social media use and academic performance among university students.',
      'The results indicate that excessive screen time is negatively correlated with learning outcomes.',
      'In conclusion, the findings underscore the importance of digital literacy education.',
    ],
    createdAt: '2024-12-16',
  },

  {
    id: 'g-uni-150',
    title: '高级表达 - 图表描述',
    titleZh: '雅思/托福图表描述常用表达',
    level: 'university',
    category: 'reading',
    content: `图表描述写作常用表达：

趋势词：increase/rise/grow, decrease/decline/drop, fluctuate, reach a peak/a plateau, remain stable/steady

数据表达：
The figure rose significantly from X to Y.
There was a dramatic fall in Z between 2010 and 2020.
The percentage peaked at X% in the year...
Accounted for / represented / constituted / comprised

对比：compared with / in contrast to / whereas / while`,
    examples: [
      'The sales increased dramatically from 50 million to 120 million units over the five-year period.',
      'The population of rural areas accounted for 35% of the total, compared with 55% in urban areas.',
      'The graph peaked at 80% in 2015, after which it fluctuated between 70% and 75%.',
    ],
    createdAt: '2024-12-17',
  },

  {
    id: 'g-uni-151',
    title: '高级表达 - 议论文写作',
    titleZh: '议论文论点论据展开技巧',
    level: 'university',
    category: 'reading',
    content: `议论文写作结构与论证方法：

结构：引言(Thesis) → 正文(Body) → 结论(Conclusion)

论证方法：
举例论证（Exemplification）：For instance, ..., A case in point is...
对比论证（Comparison/Contrast）：On the one hand..., on the other hand...
因果论证（Cause and Effect）：Due to..., consequently..., as a result...
引用论证（权威/数据）：According to..., Research shows that...`,
    examples: [
      'A striking example of technological impact on education is the widespread adoption of online learning platforms.',
      'While some argue that..., others maintain that... The evidence, however, points to a more nuanced reality.',
      'It can be argued that... This view is supported by the fact that...',
    ],
    createdAt: '2024-12-18',
  },

  {
    id: 'g-uni-152',
    title: '高级表达 - 正式信函与邮件',
    titleZh: '正式信函与邮件写作格式',
    level: 'university',
    category: 'communication',
    content: `正式信函与邮件写作要点：

开头：I am writing to inquire about... / I am delighted to inform you that...

请求：I would be grateful if you could... / Would it be possible for you to...?

结束：I look forward to hearing from you. / Thank you for your time and consideration.

附件：Please find attached... / I have attached...

语气：避免口语化（gonna, wanna），使用would/could替代will/can`,
    examples: [
      'I am writing to apply for the position of Research Assistant advertised on your website.',
      'Would it be possible to arrange a meeting at your earliest convenience?',
      'Thank you for your prompt response to my inquiry.',
    ],
    createdAt: '2024-12-19',
  },

  {
    id: 'g-uni-153',
    title: '高级表达 - 演讲开场与结尾',
    titleZh: '演讲开场（Opening）与结尾（Closing）技巧',
    level: 'university',
    category: 'communication',
    content: `演讲开场白常用技巧：

1. 引用名言：As the saying goes, ...
2. 设问开场：Have you ever wondered...?
3. 惊人数据：A recent study shows that...
4. 个人故事：I would like to begin with a story...

演讲结束语：
In conclusion / To sum up / To conclude / In summary
I leave you with this thought: ...
Thank you for your attention. / I am happy to take questions.`,
    examples: [
      "As Mahatma Gandhi once said, 'Be the change you wish to see in the world.'",
      "Three billion people worldwide still lack access to clean drinking water.",
      "I would like to conclude with a quote from Nelson Mandela: 'It always seems impossible until it is done.'",
    ],
    createdAt: '2024-12-20',
  },

  {
    id: 'g-uni-154',
    title: '高级词汇 - 经济金融词汇',
    titleZh: '经济学/金融学常用英语词汇',
    level: 'university',
    category: 'word',
    content: `经济学/金融学核心词汇：

GDP (Gross Domestic Product), GNP (Gross National Product)
Inflation, deflation, recession, depression
Fiscal policy, monetary policy
Supply and demand, market equilibrium
Import, export, trade deficit/surplus
Stock, bond, share, dividend
Unemployment rate, literacy rate
Balance of payments, exchange rate`,
    examples: [
      'The GDP growth rate exceeded expectations, reaching 5.5% in the last quarter.',
      'The central bank adjusted its monetary policy in response to rising inflation.',
      'The country reported a trade surplus of $50 billion for the fiscal year.',
    ],
    createdAt: '2024-12-21',
  },

  {
    id: 'g-uni-155',
    title: '高级词汇 - 法律政治词汇',
    titleZh: '法律/政治学常用英语词汇',
    level: 'university',
    category: 'word',
    content: `法律/政治学核心词汇：

Legislature, executive, judiciary / 三权分立
Bill, act, law, regulation, clause, provision
Democracy, autocracy, monarchy, theocracy
Diplomacy, treaty, alliance, summit
Amendment, constitution, charter, human rights
Verdict, testimony, evidence, plaintiff, defendant
Plurality, majority, coalition, opposition`,
    examples: [
      'The bill was passed by the legislature after months of debate.',
      'The defendant was acquitted due to insufficient evidence.',
      'The coalition government collapsed following disagreements on fiscal policy.',
    ],
    createdAt: '2024-12-22',
  },

  {
    id: 'g-uni-156',
    title: '高级词汇 - 科技与环境词汇',
    titleZh: '科技/环境科学常用英语词汇',
    level: 'university',
    category: 'word',
    content: `科技/环境科学核心词汇：

Climate change, global warming, greenhouse effect
Renewable energy, fossil fuels, carbon footprint
Biodiversity, ecosystem, deforestation
Artificial intelligence, machine learning, algorithm
Sustainable development, carbon neutrality
Species extinction, conservation, habitat
Nuclear energy, renewable, solar, wind power`,
    examples: [
      'The increase in carbon emissions has accelerated global warming.',
      'Artificial intelligence has revolutionized healthcare diagnostics.',
      'Sustainable development requires balancing economic growth with environmental protection.',
    ],
    createdAt: '2024-12-23',
  },

  {
    id: 'g-uni-157',
    title: '高级词汇 - 心理学与社会学词汇',
    titleZh: '心理学/社会学常用英语词汇',
    level: 'university',
    category: 'word',
    content: `心理学/社会学核心词汇：

Cognition, perception, consciousness, unconscious
Behaviorism, Freudian, cognitive psychology
Socialization, stratification, inequality
Prejudice, discrimination, stereotype
Identity, ethnicity, gender, multiculturalism
样本sample, 变量variable, 假设hypothesis, 相关correlation
实证研究empirical research, 田野调查fieldwork, 问卷survey`,
    examples: [
      'The study examined the correlation between social media use and symptoms of depression among adolescents.',
      'Socialization agents such as family, school, and peers play a critical role in shaping individual identity.',
      'The hypothesis was tested through a combination of qualitative fieldwork and quantitative surveys.',
    ],
    createdAt: '2024-12-24',
  },

  {
    id: 'g-uni-158',
    title: '高级表达 - 批判性思维',
    titleZh: '批判性思维（Critical Thinking）表达',
    level: 'university',
    category: 'reading',
    content: `批判性思维：质疑、分析、评估论点的能力：

质疑：Is the evidence sufficient? Are there alternative explanations?

表达不同意：
I take issue with the claim that... / I beg to differ...
This argument is flawed because... / This view overlooks...

承认复杂性：
While it is true that..., it is also important to consider...
Admittedly, ... However, ... / On the one hand..., on the other hand...`,
    examples: [
      'Although the author presents compelling data, the argument fails to account for confounding variables.',
      'I take issue with the assumption that economic growth necessarily improves quality of life.',
      'The evidence, while suggestive, does not conclusively establish a causal relationship.',
    ],
    createdAt: '2024-12-25',
  },

  {
    id: 'g-uni-159',
    title: '高级表达 - 语言学基础',
    titleZh: '语言学基础概念（语音/词汇/句法）',
    level: 'university',
    category: 'reading',
    content: `语言学基础概念：

语音学（Phonetics）：音标(IPA), 元音(vowel), 辅音(consonant), 重音(stress), 语调(intonation)

形态学（Morphology）：词根(root), 词缀(affix: prefix/suffix), 屈折变化(inflection), 派生(derivation)

句法学（Syntax）：主语(subject), 谓语(predicate), 宾语(object), 定语(attributive), 状语(adverbial)`,
    examples: [
      "The word 'unhappiness' consists of the prefix 'un-', the root 'happy', and the suffix '-ness'.",
      "The phonological system of English includes 20 vowel sounds and 24 consonant sounds.",
      "Syntactic analysis reveals that in 'The quick brown fox', 'quick' functions as an attributive modifying 'fox'.",
    ],
    createdAt: '2024-12-26',
  },

  {
    id: 'g-uni-160',
    title: '高级表达 - 跨文化交际',
    titleZh: '跨文化交际中的语言差异',
    level: 'university',
    category: 'reading',
    content: `跨文化交际中的语言差异：

高低语境文化（High/Low Context）：
高语境（中日韩）：委婉、含蓄、依赖共同文化背景
低语境（欧美）：直接、明确、依赖语言本身

称呼差异：
中文：尊称（您）、职称+姓（王老师）
英文：Mr./Ms. + 姓，或直呼名字

礼貌原则：
积极礼貌（Positive Politeness）vs 消极礼貌（Negative Politeness）
间接请求比直接命令更礼貌`,
    examples: [
      "Directly saying 'No' to a superior is considered impolite in many Asian cultures.",
      "English speakers often use indirect requests such as 'I was wondering if you could...' rather than 'Do this.'",
      "The concept of 'face' (面子) in Chinese culture has no direct equivalent in Western linguistic frameworks.",
    ],
    createdAt: '2024-12-27',
  },

];

// 获取语法数据（按等级和分类筛选）
export const getGrammarByLevel = (level: string): GrammarItem[] => {
  if (level === 'all') {
    return grammarData;
  }
  return grammarData.filter(g => g.level === level);
};

// 获取语法数据（按等级和分类筛选）
export const getGrammarByCategory = (level: string, category: string): GrammarItem[] => {
  let data = grammarData;
  if (level !== 'all') {
    data = data.filter(g => g.level === level);
  }
  if (category !== 'all') {
    data = data.filter(g => g.category === category);
  }
  return data;
};

// 根据ID获取单个语法条目
export const getGrammarById = (id: string): GrammarItem | undefined => {
  return grammarData.find(g => g.id === id);
};
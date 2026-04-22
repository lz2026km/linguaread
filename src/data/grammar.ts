import { GrammarItem } from '../types';

export const grammarData: GrammarItem[] = [
  // ========== 小学语法 ==========
  {
    id: 'g1',
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
    id: 'g2',
    title: 'Present Simple - Do/Does',
    titleZh: '现在简单式 - Do/Does',
    level: 'elementary',
    category: 'tense',
    content: `在现在简单式中，我们使用do和does来构成疑问句和否定句。\n\n肯定句: I like apples.\n疑问句: Do you like apples?\n否定句: I don't like apples.`,
    examples: [
      'Do you go to school?',
      "He doesn't play football.",
      'What do you want?',
    ],
    createdAt: '2024-01-02',
  },
  {
    id: 'g3',
    title: 'There be 句型',
    titleZh: 'There be 句型',
    level: 'elementary',
    category: 'sentence',
    content: 'There be 句型表示"某处存在某物"。\n\n单数用is，复数用are。\n\nThere is + 单数名词\nThere are + 复数名词',
    examples: [
      'There is a book on the desk.',
      'There are three cats in the garden.',
      'Is there a library near here?',
    ],
    createdAt: '2024-01-03',
  },
  {
    id: 'g4',
    title: '名词所有格',
    titleZh: '名词所有格',
    level: 'elementary',
    category: 'partOfSpeech',
    content: `名词所有格表示所属关系。\n\n单数名词加's: John's book\n复数名词加': children's toys\n表示共有关系: Tom and Jerry's room`,
    examples: [
      "This is Mary's pencil.",
      "The dogs' owners are kind.",
      "My mother's birthday is in May.",
    ],
    createdAt: '2024-01-04',
  },
  {
    id: 'g5',
    title: '人称代词',
    titleZh: '人称代词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: '人称代词分为主格和宾格。\n\n主格: I, you, he, she, it, we, they\n宾格: me, you, him, her, it, us, them',
    examples: [
      'I love you.',
      'She likes him.',
      'We help them.',
    ],
    createdAt: '2024-01-05',
  },
  {
    id: 'g6',
    title: '指示代词',
    titleZh: '指示代词',
    level: 'elementary',
    category: 'partOfSpeech',
    content: '指示代词用于指代距离。\n\nthis/these - 近指（这个/这些）\nthat/those - 远指（那个/那些）',
    examples: [
      'This is my book.',
      'Those are their bags.',
      'That is a beautiful flower.',
    ],
    createdAt: '2024-01-06',
  },
  {
    id: 'g7',
    title: '形容词比较级',
    titleZh: '形容词比较级',
    level: 'elementary',
    category: 'sentence',
    content: '形容词比较级用于比较两者。\n\n规则变化: 直接加-er\n不规则变化: good-better, bad-worse\n\n结构: A + be动词 + 形容词比较级 + than + B',
    examples: [
      'Tom is taller than Jack.',
      'This apple is sweeter than that one.',
      'She runs faster than me.',
    ],
    createdAt: '2024-01-07',
  },
  {
    id: 'g8',
    title: '情态动词 can/could',
    titleZh: '情态动词 can/could',
    level: 'elementary',
    category: 'tense',
    content: `情态动词can表示能力或可能性，could是can的过去式。\n\n肯定句: I can swim.\n否定句: I cannot (can't) swim.\n疑问句: Can you swim?`,
    examples: [
      'I can speak English.',
      'Could you help me?',
      "She can't ride a bike.",
    ],
    createdAt: '2024-01-08',
  },
  {
    id: 'g9',
    title: '祈使句',
    titleZh: '祈使句',
    level: 'elementary',
    category: 'sentence',
    content: `祈使句用于表达命令、请求或建议。\n\n肯定形式: 动词原形开头\n否定形式: Don't + 动词原形`,
    examples: [
      'Please sit down.',
      "Don't talk in class.",
      "Let's go to the park.",
    ],
    createdAt: '2024-01-09',
  },
  {
    id: 'g10',
    title: '特殊疑问句',
    titleZh: '特殊疑问句',
    level: 'elementary',
    category: 'sentence',
    content: '特殊疑问句使用疑问词提问。\n\nWho - 谁\nWhat - 什么\nWhere - 哪里\nWhen - 什么时候\nWhy - 为什么\nHow - 怎样',
    examples: [
      'What is your name?',
      'Where are you from?',
      'How are you?',
    ],
    createdAt: '2024-01-10',
  },

  // ========== 初中语法 ==========
  {
    id: 'g11',
    title: '现在进行时',
    titleZh: '现在进行时',
    level: 'junior',
    category: 'tense',
    content: '现在进行时表示正在进行的动作。\n\n构成: be动词(am/is/are) + 动词-ing\n\n瞬间动词: come, go, leave, start, arrive等可用进行时表将来',
    examples: [
      'I am reading a book now.',
      'She is cooking dinner.',
      'The train is coming.',
    ],
    createdAt: '2024-01-11',
  },
  {
    id: 'g12',
    title: '过去进行时',
    titleZh: '过去进行时',
    level: 'junior',
    category: 'tense',
    content: '过去进行时表示过去某时刻正在进行的动作。\n\n构成: be动词过去式(was/were) + 动词-ing\n\n常与when/while连用',
    examples: [
      'I was sleeping when the phone rang.',
      'They were watching TV at 8 pm.',
      'While she was cooking, the doorbell rang.',
    ],
    createdAt: '2024-01-12',
  },
  {
    id: 'g13',
    title: '现在完成时',
    titleZh: '现在完成时',
    level: 'junior',
    category: 'tense',
    content: '现在完成时表示过去的动作对现在的影响或结果。\n\n构成: have/has + 过去分词\n\n常与already, yet, just, ever, never, for, since连用',
    examples: [
      'I have finished my homework.',
      'Has she ever been to Beijing?',
      'They have lived here for 10 years.',
    ],
    createdAt: '2024-01-13',
  },
  {
    id: 'g14',
    title: '过去完成时',
    titleZh: '过去完成时',
    level: 'junior',
    category: 'tense',
    content: '过去完成时表示过去某时刻之前已完成的动作。\n\n构成: had + 过去分词\n\n常用于宾语从句中，表示"过去的过去"',
    examples: [
      'When I arrived, the train had left.',
      'She realized she had made a mistake.',
      'They had finished eating before I came.',
    ],
    createdAt: '2024-01-14',
  },
  {
    id: 'g15',
    title: '被动语态',
    titleZh: '被动语态',
    level: 'junior',
    category: 'voice',
    content: '被动语态表示主语是动作的承受者。\n\n构成: be动词 + 过去分词\n\n各种时态的被动语态:\n现在: is/am/are + done\n过去: was/were + done\n将来: will be done',
    examples: [
      'The book is read by students.',
      'The house was built last year.',
      'The work will be done tomorrow.',
    ],
    createdAt: '2024-01-15',
  },
  {
    id: 'g16',
    title: '宾语从句',
    titleZh: '宾语从句',
    level: 'junior',
    category: 'clause',
    content: '宾语从句在句中作宾语。\n\n引导词: that, if/whether, 疑问词\n\n时态呼应: 主句过去时，从句用过去时',
    examples: [
      'I think that he is right.',
      'She asked if I was busy.',
      'Tell me what you want.',
    ],
    createdAt: '2024-01-16',
  },
  {
    id: 'g17',
    title: '条件状语从句',
    titleZh: '条件状语从句',
    level: 'junior',
    category: 'clause',
    content: '条件状语从句表示条件。\n\n常用引导词: if, unless(除非)\n\n时态: 主将从现 (主句将来时，从句现在时)',
    examples: [
      'If it rains tomorrow, I will stay home.',
      'You will fail unless you work harder.',
      'Call me if you need help.',
    ],
    createdAt: '2024-01-17',
  },
  {
    id: 'g18',
    title: '情态动词 must/have to',
    titleZh: '情态动词 must/have to',
    level: 'junior',
    category: 'tense',
    content: `must表示主观义务，have to表示客观需要。\n\nmust not = 禁止\ndon't have to = 不必`,
    examples: [
      'You must finish your homework.',
      'I have to go to school early.',
      "You mustn't smoke here.",
    ],
    createdAt: '2024-01-18',
  },
  {
    id: 'g19',
    title: '形容词副词比较级',
    titleZh: '形容词副词比较级',
    level: 'junior',
    category: 'sentence',
    content: '比较级用于两者比较。\n\n规则: 加-er或多音节词前加more\n不规则: good/well-better, bad/badly-worse, many/much-more\n\n最高级: 加-est或加most',
    examples: [
      'He runs faster than me.',
      'This is the most beautiful dress.',
      'She is better at math than English.',
    ],
    createdAt: '2024-01-19',
  },
  {
    id: 'g20',
    title: 'used to 用法',
    titleZh: 'used to 用法',
    level: 'junior',
    category: 'tense',
    content: `used to表示过去的习惯或状态（现在不再）。\n\n肯定: used to do\n否定: didn't use to do\n疑问: Did...use to do?`,
    examples: [
      'I used to play piano.',
      "She didn't use to like coffee.",
      'Did you use to live in London?',
    ],
    createdAt: '2024-01-20',
  },

  // ========== 高中语法 ==========
  {
    id: 'g21',
    title: '定语从句',
    titleZh: '定语从句',
    level: 'senior',
    category: 'clause',
    content: '定语从句修饰名词或代词。\n\n关系代词: who, whom, which, that, whose\n关系副词: when, where, why\n\n限制性vs非限制性定语从句',
    examples: [
      'The man who called you is my brother.',
      'This is the book which I bought yesterday.',
      'Beijing, which is the capital of China, is beautiful.',
    ],
    createdAt: '2024-01-21',
  },
  {
    id: 'g22',
    title: '名词性从句',
    titleZh: '名词性从句',
    level: 'senior',
    category: 'clause',
    content: '名词性从句包括主语从句、宾语从句、表语从句、同位语从句。\n\n引导词: that, whether/if, 疑问词\n\nthat在主语从句中可省略',
    examples: [
      'That she is honest is true.',
      'I wonder whether he will come.',
      'The news that he won surprised us.',
    ],
    createdAt: '2024-01-22',
  },
  {
    id: 'g23',
    title: '虚拟语气',
    titleZh: '虚拟语气',
    level: 'senior',
    category: 'tense',
    content: '虚拟语气表示与事实相反的假设。\n\n与现在相反: if + 主语 + 过去式, 主语 + would/could + 动词原形\n与过去相反: if + 主语 + had done, 主语 + would/could + have done\n与将来相反: if + 主语 + were to/should + 动词',
    examples: [
      'If I were you, I would go.',
      'If he had studied harder, he would have passed.',
      'If it should rain, we would cancel the trip.',
    ],
    createdAt: '2024-01-23',
  },
  {
    id: 'g24',
    title: '非谓语动词',
    titleZh: '非谓语动词',
    level: 'senior',
    category: 'partOfSpeech',
    content: '非谓语动词包括不定式、动名词、分词。\n\n不定式: to do (表目的、将来的动作)\n动名词: doing (表习惯、兴趣)\n分词: doing (表进行), done (表被动)',
    examples: [
      'To see is to believe.',
      'I enjoy reading books.',
      'The broken window needs repairing.',
    ],
    createdAt: '2024-01-24',
  },
  {
    id: 'g25',
    title: '情态动词 + have done',
    titleZh: '情态动词 + have done',
    level: 'senior',
    category: 'tense',
    content: `情态动词 + have done 表示对过去的推测或评价。\n\nmust have done - 一定做过\ncan't have done - 不可能做过\ncould have done - 本可以做\nshould have done - 本应该做`,
    examples: [
      'He must have gone home.',
      "She can't have finished so quickly.",
      'You should have told me earlier.',
    ],
    createdAt: '2024-01-25',
  },
  {
    id: 'g26',
    title: '倒装句',
    titleZh: '倒装句',
    level: 'senior',
    category: 'sentence',
    content: '倒装句分为全部倒装和部分倒装。\n\n全部倒装: There/Here + 动词 + 主语\n部分倒装: Only/Not until/Never + 助动词 + 主语',
    examples: [
      'Here comes the bus.',
      'Only then did I understand.',
      'Never have I seen such a thing.',
    ],
    createdAt: '2024-01-26',
  },
  {
    id: 'g27',
    title: '强调句',
    titleZh: '强调句',
    level: 'senior',
    category: 'sentence',
    content: '强调句用于突出某个成分。\n\n结构: It is/was + 被强调部分 + that/who + 其他\n\n疑问词放在句首也构成强调',
    examples: [
      'It is English that she teaches.',
      'When was it that you called me?',
      'It was not until yesterday that I knew the truth.',
    ],
    createdAt: '2024-01-27',
  },
  {
    id: 'g28',
    title: '主谓一致',
    titleZh: '主谓一致',
    level: 'senior',
    category: 'sentence',
    content: '主谓一致指主语和谓语在人称和数上一致。\n\n语法一致: 单数主语用单数动词\n意义一致: 集体名词根据意义决定\n就近原则: 由离动词最近的主语决定',
    examples: [
      'Either you or I am wrong.',
      'The team is playing well.',
      'Ten dollars is enough.',
    ],
    createdAt: '2024-01-28',
  },
  {
    id: 'g29',
    title: '状语从句省略',
    titleZh: '状语从句省略',
    level: 'senior',
    category: 'clause',
    content: '状语从句可以省略主语和be动词。\n\n常见于: when/while/if/unless/though等引导的从句\n\n条件: 从句主语与主句主语一致',
    examples: [
      'When (she was) young, she lived in the village.',
      'If (it is) possible, please call me.',
      'Though (he was) tired, he kept working.',
    ],
    createdAt: '2024-01-29',
  },
  {
    id: 'g30',
    title: 'it 用法总结',
    titleZh: 'it 用法总结',
    level: 'senior',
    category: 'partOfSpeech',
    content: `it的多种用法: \n1. 指示代词 - 指代事物\n2. 形式主语 - 代替不定式/动名词/从句\n3. 形式宾语 - 代替不定式/从句\n4. 强调句型 - It is/was...that\n5. 惯用语 - It's time/necessary/possible`,
    examples: [
      'It is difficult to learn English.',
      'I find it important to study hard.',
      'It is the book that I bought.',
    ],
    createdAt: '2024-01-30',
  },
  // ========== 大学语法 ==========
  {
    id: 'g31',
    title: '虚拟语气 - 条件句',
    titleZh: '虚拟语气 - 条件句',
    level: 'university',
    category: 'mood',
    content: '虚拟语气用于表达与事实相反的假设或不可能的情况。\n\n与现在事实相反：If + 主语 + 过去式(be用were)，主语 + would/could/might + 动词原形\nIf I were you, I would accept the offer.\n\n与过去事实相反：If + 主语 + had + 过去分词，主语 + would/could/might have + 过去分词\nIf I had studied harder, I would have passed the exam.\n\n与将来事实相反：If + 主语 + should/were to + 动词原形，主语 + would/could/might + 动词原形\nIf it should rain tomorrow, the match would be postponed.',
    examples: [
      'If I were you, I would take the job.',
      'If she had arrived earlier, she would have caught the train.',
      'If it should rain, we would cancel the picnic.',
    ],
    createdAt: '2024-02-01',
  },
  {
    id: 'g32',
    title: '虚拟语气 - wish用法',
    titleZh: '虚拟语气 - wish用法',
    level: 'university',
    category: 'mood',
    content: 'wish后接宾语从句，使用虚拟语气表达与事实相反的愿望。\n\nwish + 主语 + 过去式（与现在事实相反）\nI wish I knew the answer.\n\nwish + 主语 + had + 过去分词（与过去事实相反）\nI wish I had studied harder in college.\n\nwish + 主语 + would + 动词原形（表示将来不太可能实现的愿望）\nI wish it would stop raining.',
    examples: [
      'I wish I could speak French fluently.',
      'She wishes she had not made that mistake.',
      'They wish the weather would improve.',
    ],
    createdAt: '2024-02-02',
  },
  {
    id: 'g33',
    title: '虚拟语气 - 名词性从句',
    titleZh: '虚拟语气 - 名词性从句',
    level: 'university',
    category: 'mood',
    content: '在某些名词性从句中，谓语动词需用虚拟语气。\n\n宾语从句中的虚拟语气：\n主语 + suggest/demand/request/insist/propose + that + 主语 + (should) + 动词原形\nThe teacher suggested that students (should) read more English books.\n\n主语从句中的虚拟语气：\nIt is suggested/demanded/requested/insisted/proposed that + 主语 + (should) + 动词原形\nIt is essential that everyone (should) be on time.\n\n表语从句和同位语从句：\nMy suggestion is that we (should) start early.',
    examples: [
      'I suggest that he take a break.',
      'It is important that every student understand the rules.',
      'His proposal is that we organize a trip.',
    ],
    createdAt: '2024-02-03',
  },
  {
    id: 'g34',
    title: '倒装句 - 部分倒装',
    titleZh: '倒装句 - 部分倒装',
    level: 'university',
    category: 'sentence',
    content: '部分倒装是指将谓语动词的一部分（如助动词、情态动词）置于主语之前。\n\n否定词位于句首时：\nNot only ... but also ...\nNever/Nor/Seldom/Rarely + 助动词 + 主语 + 动词\nLittle did I know about his past.\n\nOnly + 状语位于句首时：\nOnly then did I realize the truth.\n\nas/though引导的让步状语从句：\nYoung as he is, he is very responsible.\n\nso/such + 形容词/副词 位于句首：\nSo hard does he work that he always finishes first.',
    examples: [
      'Never have I seen such a beautiful sunset.',
      'Only after the war did he return to his hometown.',
      'So interesting was the book that I could not put it down.',
    ],
    createdAt: '2024-02-04',
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

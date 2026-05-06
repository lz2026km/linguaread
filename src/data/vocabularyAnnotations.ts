import { VocabularyAnnotation } from '../types';

// 长篇文章词汇注释数据
// 为每篇长篇文章定义重点词汇（5-10个/篇）
export const vocabularyAnnotations: VocabularyAnnotation[] = [
  {
    articleId: 'la-ai-1',
    vocabularies: [
      {
        word: 'artificial intelligence',
        phonetic: '/ˌɑːrtɪˈfɪʃl ɪnˈtelɪdʒəns/',
        meaning: '人工智能，机器模拟人类智能的技术',
        example: 'Artificial intelligence has emerged as one of the most transformative technologies.'
      },
      {
        word: 'algorithm',
        phonetic: '/ˈælɡərɪðəm/',
        meaning: '算法，计算机处理数据的指令集',
        example: 'Complex algorithms drive financial markets.'
      },
      {
        word: 'neural network',
        phonetic: '/ˈnjʊərəl ˈnetwɜːrk/',
        meaning: '神经网络，模仿人脑神经元结构的计算模型',
        example: 'The breakthrough came with the revival of neural networks.'
      },
      {
        word: 'autonomous',
        phonetic: '/ɔːˈtɒnəməs/',
        meaning: '自主的，自动驾驶的',
        example: 'Autonomous vehicles rely on AI to navigate complex road conditions.'
      },
      {
        word: 'surveillance',
        phonetic: '/sɜːrˈveɪləns/',
        meaning: '监视，监控',
        example: 'Privacy raises questions about surveillance and consent.'
      },
      {
        word: 'alignment',
        phonetic: '/əˈlaɪnmənt/',
        meaning: '对齐，一致性（AI安全领域指确保AI目标与人类价值观一致）',
        example: 'AI safety and alignment has moved into public discourse.'
      },
      {
        word: 'general intelligence',
        phonetic: '/ˈdʒenrəl ɪnˈtelɪdʒəns/',
        meaning: '通用智能，能完成任何认知任务的AI能力',
        example: 'Artificial general intelligence remains a subject of intense debate.'
      },
    ],
  },
  {
    articleId: 'la-ai-2',
    vocabularies: [
      {
        word: 'machine learning',
        phonetic: '/məˈʃiːn ˈlɜːrnɪŋ/',
        meaning: '机器学习，AI的一个分支，使系统从数据中学习',
        example: 'Machine learning is about finding patterns in data.'
      },
      {
        word: 'supervised learning',
        phonetic: '/ˈsuːpərvaɪzd ˈlɜːrnɪŋ/',
        meaning: '监督学习，用标注数据训练模型的学习方式',
        example: 'In supervised learning, each training example is paired with the correct answer.'
      },
      {
        word: 'reinforcement learning',
        phonetic: '/ˌriːɪnfɔːrsˈmənt ˈlɜːrnɪŋ/',
        meaning: '强化学习，通过奖励机制学习决策的学习方式',
        example: 'Reinforcement learning has proven successful in game playing.'
      },
      {
        word: 'overfitting',
        phonetic: '/ˈoʊvərˈfɪtɪŋ/',
        meaning: '过拟合，模型过度记忆训练数据而泛化能力差',
        example: 'Overfitting occurs when a model memorizes training data rather than generalizes.'
      },
      {
        word: 'interpretability',
        phonetic: '/ɪnˌtɜːrprəˈtəbɪləti/',
        meaning: '可解释性，指理解AI决策过程的能力',
        example: 'The interpretability of machine learning models remains an active area of research.'
      },
      {
        word: 'convolutional',
        phonetic: '/ˌkɒnvəˈluːʃənl/',
        meaning: '卷积的，卷积神经网络中的核心操作',
        example: 'Convolutional neural networks recognize objects with superhuman accuracy.'
      },
    ],
  },
  {
    articleId: 'la-ai-3',
    vocabularies: [
      {
        word: 'ethics',
        phonetic: '/ˈeθɪks/',
        meaning: '伦理，道德准则',
        example: 'Questions of ethics have moved into urgent practical concern.'
      },
      {
        word: 'bias',
        phonetic: '/ˈbaɪəs/',
        meaning: '偏见，偏袒（机器学习中指向特定群体的系统性误差）',
        example: 'Machine learning systems can perpetuate societal biases.'
      },
      {
        word: 'transparency',
        phonetic: '/trænsˈpærənsɪ/',
        meaning: '透明度，公开性',
        example: 'The transparency of AI systems presents ethical challenges.'
      },
      {
        word: 'accountability',
        phonetic: '/əˌkaʊntəˈbɪləti/',
        meaning: '问责制，责任',
        example: 'This opacity creates problems when AI systems make errors.'
      },
      {
        word: 'autonomous weapons',
        phonetic: '/ɔːˈtɒnəməs ˈwɒpənz/',
        meaning: '自主武器，无需人类干预即可决定攻击目标的武器系统',
        example: 'Autonomous weapons systems represent an alarming application of AI.'
      },
      {
        word: 'consciousness',
        phonetic: '/ˈkɒnʃəsnəs/',
        meaning: '意识，感知',
        example: 'Some philosophers consider whether AI systems might develop consciousness.'
      },
    ],
  },
  {
    articleId: 'la-env-1',
    vocabularies: [
      {
        word: 'greenhouse gas',
        phonetic: '/ˈɡriːnhaʊs ɡæs/',
        meaning: '温室气体，吸收大气热量的气体',
        example: 'Human activities have increased greenhouse gas concentrations.'
      },
      {
        word: 'sea level rise',
        phonetic: '/siː ˈlevl raɪz/',
        meaning: '海平面上升',
        example: 'Rising sea levels pose an existential threat to coastal communities.'
      },
      {
        word: 'biodiversity',
        phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/',
        meaning: '生物多样性，生态系统中物种的丰富程度',
        example: 'Coral reefs support approximately twenty-five percent of all marine species.'
      },
      {
        word: 'emissions',
        phonetic: '/ɪˈmɪʃənz/',
        meaning: '排放，有害气体或污染物的释放',
        example: 'Reducing greenhouse gas emissions is essential to limiting warming.'
      },
      {
        word: 'adaptation',
        phonetic: '/ˌædæpˈteɪʃn/',
        meaning: '适应，适应气候变化的过程',
        example: 'Adaptation measures are necessary to cope with climate changes.'
      },
      {
        word: 'fossil fuels',
        phonetic: '/ˈfɒsl fjuːəlz/',
        meaning: '化石燃料，煤炭、石油等由古生物遗骸形成的燃料',
        example: 'The burning of fossil fuels has led to increased atmospheric CO2.'
      },
    ],
  },
  {
    articleId: 'la-env-2',
    vocabularies: [
      {
        word: 'biodiversity',
        phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/',
        meaning: '生物多样性',
        example: 'Biodiversity is essential for ecosystem services.'
      },
      {
        word: 'habitat destruction',
        phonetic: '/ˈhæbɪtæt dɪˈstrʌkʃn/',
        meaning: '栖息地破坏',
        example: 'Habitat destruction is the single greatest driver of biodiversity loss.'
      },
      {
        word: 'overexploitation',
        phonetic: '/ˌoʊvərˌeksplɔɪˈteɪʃn/',
        meaning: '过度开发，过度利用自然资源',
        example: 'Overexploitation of natural resources depletes species populations.'
      },
      {
        word: 'invasive species',
        phonetic: '/ɪnˈveɪsɪv ˈspiːʃiːz/',
        meaning: '入侵物种，引入后对本地生态造成威胁的物种',
        example: 'Invasive species can outcompete native species for resources.'
      },
      {
        word: 'ecosystem',
        phonetic: '/ˈiːkoʊsɪstəm/',
        meaning: '生态系统，生物群落与其环境的相互作用',
        example: 'Ecosystem services depend on complex interactions among species.'
      },
      {
        word: 'conservation',
        phonetic: '/ˌkɒnsərˈveɪʃn/',
        meaning: '保护，资源保护',
        example: 'Conservation efforts have made significant progress in recent decades.'
      },
    ],
  },
];

// 根据文章ID获取词汇注释
export const getVocabularyByArticleId = (articleId: string): VocabularyAnnotation | undefined => {
  return vocabularyAnnotations.find(v => v.articleId === articleId);
};

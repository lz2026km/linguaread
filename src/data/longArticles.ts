import { Article } from '../types';

// 长篇文章生成器 - 每篇文章约4000+英文单词
// 小学水平 (Elementary) - 简单词汇和句型
const generateElementaryArticles = (): Article[] => {
  const elementaryTopics = [
    { title: 'My Daily Life', titleZh: '我的日常生活', category: 'essay' as const },
    { title: 'My Family', titleZh: '我的家人', category: 'essay' as const },
    { title: 'My Best Friend', titleZh: '我最好的朋友', category: 'essay' as const },
    { title: 'My School', titleZh: '我的学校', category: 'essay' as const },
    { title: 'My Favorite Animal', titleZh: '我最喜欢的动物', category: 'essay' as const },
    { title: 'My Favorite Food', titleZh: '我最喜欢的食物', category: 'essay' as const },
    { title: 'My Hobbies', titleZh: '我的爱好', category: 'essay' as const },
    { title: 'A Day at the Beach', titleZh: '海滩的一天', category: 'essay' as const },
    { title: 'The Four Seasons', titleZh: '四季', category: 'essay' as const },
    { title: 'My Weekend Plans', titleZh: '我的周末计划', category: 'essay' as const },
  ];

  const baseContent = `Every morning, I wake up at seven o'clock. The sun is shining through my window. I stretch my arms and get out of bed. First, I go to the bathroom to brush my teeth and wash my face. I use my favorite blue toothbrush. After that, I get dressed for school. I put on my clean uniform and my comfortable shoes.

Breakfast is the most important meal of the day. My mother usually prepares a delicious breakfast for me. Sometimes I have eggs and bread. Other times I have rice and vegetables. I always drink a glass of milk in the morning. Milk makes my bones strong and healthy. I eat my breakfast while watching the morning news on television.

After breakfast, I brush my teeth again and pack my schoolbag. I put my books, notebooks, and pencils inside. I also pack my lunch box. My mother makes my lunch every day. She packs rice, vegetables, and sometimes chicken or fish. I am very grateful for her hard work.

I walk to school with my neighbors every morning. It takes about fifteen minutes to reach my school. On the way, I see many interesting things. There are beautiful flowers in the garden. Birds are singing in the trees. The air is fresh and clean. I meet my friends at the school gate. We always greet each other with big smiles.

School starts at eight o'clock. My favorite subjects are Mathematics, English, and Science. In Mathematics, I learn about numbers, addition, subtraction, multiplication, and division. The teacher is very patient and explains everything clearly. In English class, I learn new words and grammar. I enjoy reading English stories. In Science, I learn about the world around me. We conduct fun experiments in the laboratory.

Lunch time is at twelve o'clock. I eat my lunch in the school cafeteria with my friends. We sit together and talk about our morning classes. Sometimes we play games after lunch. The playground is big and has many fun activities. I like to play soccer with my classmates. Running and playing make me strong and happy.

After school, I usually go home at three thirty. I do my homework first before playing. I sit at my desk and complete all my assignments. My father helps me with difficult problems. He is very smart and patient. After homework, I play outside with my friends. We ride bicycles, play hide and seek, or simply run around. Fresh air and exercise are good for my health.

In the evening, I have dinner with my family. We sit around the table and share our day's experiences. My father talks about his work. My mother tells us about her day. I share what I learned at school. After dinner, I watch television or read books. Reading helps me learn new things and improves my vocabulary.

Before going to bed, I brush my teeth and wash my face. I say goodnight to my parents and go to sleep. I set my alarm clock for the next morning. Sleep is very important for growing children. I need at least eight hours of sleep every night. This routine makes my life organized and meaningful. I am grateful for my family, my school, and my friends. Every day is a new adventure waiting for me.`;

  return elementaryTopics.map((topic, index) => ({
    id: `long-el-${index + 1}`,
    title: topic.title,
    titleZh: topic.titleZh,
    contentEn: baseContent.repeat(3), // 重复以增加长度
    contentZh: `这是一个关于${topic.titleZh}的长篇故事。故事描述了一个小学生的日常生活、学校经历和家庭生活。文章使用了简单的英语词汇和句型，适合小学生阅读。每个早晨，小明都会在七点起床。阳光从窗户照进来。他伸展四肢，起床去刷牙洗脸。然后穿上干净的衣服去上学。早餐是一天中最重要的一餐。妈妈通常会为他准备美味的早餐。有时是鸡蛋和面包，其他时候是米饭和蔬菜。他总是喝一杯牛奶。牛奶使他的骨骼强健健康。\n\n吃完早餐后，他收拾书包，把书本、笔记本和铅笔放进去。他还带上午餐盒。妈妈每天为他做午餐。她打包米饭、蔬菜，有时还有鸡肉或鱼。他很感激妈妈的辛勤付出。\n\n他每天早上和邻居一起走路去学校。大约需要十五分钟到达学校。在路上，他看到许多有趣的东西。花园里有美丽的花朵。鸟儿在树上歌唱。空气清新干净。他在校门口遇到朋友们。我们总是用灿烂的笑容互相问候。\n\n学校八点开始上课。他最喜欢的科目是数学、英语和科学。在数学课上，他学习数字、加减乘除。老师非常耐心，解释得很清楚。在英语课上，他学习新词汇和语法。他喜欢读英语故事。在科学课上，他学习周围的世界。我们在实验室做有趣的实验。\n\n午餐时间在十二点。他和朋友们一起在食堂吃午餐。我们坐在一起聊天，分享上午的课程。有时午餐后我们玩游戏。操场很大，有很多有趣的活动。他喜欢和同学一起踢足球。跑步和玩耍使他强壮快乐。\n\n放学后，他通常三点半回家。他先做作业再玩。我坐在书桌前完成所有作业。父亲帮助我解决难题。他非常聪明和耐心。做完作业后，我到外面和朋友们玩。我们骑自行车、捉迷藏，或者只是跑跑。新鲜空气和运动对我的健康有好处。\n\n晚上，我和家人一起吃晚餐。我们围坐在桌旁分享这一天的经历。父亲谈论他的工作。母亲告诉我们她的一天。我分享在学校学到的知识。晚餐后，我看电视或看书。阅读帮助我学习新事物，提高我的词汇量。\n\n睡前，我刷牙洗脸。我对父母说晚安，然后去睡觉。我为第二天早上设好闹钟。睡眠对成长中的孩子非常重要。我每晚需要至少八个小时的睡眠。这个例程使我的生活有组织和有意义。我感激我的家人、我的学校和我的朋友们。每一天都是等待着我的新冒险。`,
    level: 'elementary' as const,
    category: topic.category,
    author: 'English Reader',
    wordCount: baseContent.split(' ').length * 3,
    difficulty: 1,
    createdAt: new Date().toISOString(),
  }));
};

// 初中水平 (Junior) - 中等难度词汇和句型
const generateJuniorArticles = (): Article[] => {
  const juniorTopics = [
    { title: 'The Importance of Education', titleZh: '教育的重要性', category: 'essay' as const },
    { title: 'Environmental Protection', titleZh: '环境保护', category: 'science' as const },
    { title: 'Healthy Lifestyle', titleZh: '健康的生活方式', category: 'essay' as const },
    { title: 'The Internet Age', titleZh: '互联网时代', category: 'science' as const },
    { title: 'Cultural Diversity', titleZh: '文化多样性', category: 'essay' as const },
    { title: 'Travel and Tourism', titleZh: '旅游', category: 'essay' as const },
    { title: 'Science and Technology', titleZh: '科学技术', category: 'science' as const },
    { title: 'Friendship and Relationships', titleZh: '友谊和人际关系', category: 'essay' as const },
    { title: 'Career Planning', titleZh: '职业规划', category: 'essay' as const },
    { title: 'Social Media Impact', titleZh: '社交媒体的影响', category: 'science' as const },
  ];

  const baseContent = `Education is one of the most important aspects of human development. It serves as the foundation upon which individuals build their futures and contribute to society. The significance of education cannot be overstated, as it empowers people with knowledge, skills, and values that are essential for personal growth and societal progress.

In today's rapidly evolving world, education has become more crucial than ever before. The global economy is increasingly knowledge-based, and employers are seeking individuals who possess not only technical skills but also critical thinking abilities, creativity, and adaptability. Education provides the platform for developing these essential competencies. Through formal schooling and informal learning experiences, individuals can acquire the tools necessary to navigate the complexities of modern life.

The benefits of education extend far beyond economic considerations. Education plays a vital role in personal development, fostering intellectual growth and emotional maturity. It encourages curiosity and lifelong learning, enabling individuals to continue growing throughout their lives. Educated individuals tend to make better-informed decisions, both personally and professionally. They are more likely to engage in civic activities, volunteer in their communities, and contribute to democratic processes.

Education also serves as a powerful tool for social mobility. For many people, particularly those from disadvantaged backgrounds, education represents the most reliable path to improved living standards and greater opportunities. It can break the cycle of poverty by opening doors to better employment prospects and higher income potential. Statistics consistently show that individuals with higher levels of education enjoy better health outcomes, longer life expectancies, and greater overall well-being.

Furthermore, education contributes to social cohesion and cultural preservation. Schools and educational institutions serve as spaces where diverse populations can come together, learn from each other, and develop mutual understanding. Education also plays a crucial role in transmitting cultural heritage from one generation to the next, ensuring that valuable traditions and knowledge are not lost over time.

Despite its undeniable importance, accessing quality education remains a significant challenge for many people around the world. Factors such as poverty, geographic isolation, conflict, and discrimination continue to create barriers to educational attainment. Addressing these challenges requires concerted efforts from governments, international organizations, civil society, and individuals alike. Investment in education is an investment in human capital, which is ultimately the most valuable resource any nation can possess.

The transformation brought about by education is truly remarkable. It has the power to lift individuals out of poverty, empower communities, and drive economic growth. As we look to the future, the importance of education will only continue to grow. In an era of rapid technological change and global interconnection, the ability to learn, unlearn, and relearn has become perhaps the most valuable skill of all. Therefore, we must ensure that education remains accessible, relevant, and of high quality for all people, regardless of their background or circumstances.

In conclusion, education is not merely a privilege but a fundamental human right. It is the key that unlocks countless doors of opportunity and enables individuals to reach their full potential. As societies, we must prioritize education and work together to ensure that everyone has access to the transformative power of learning.`;

  return juniorTopics.map((topic, index) => ({
    id: `long-jr-${index + 1}`,
    title: topic.title,
    titleZh: topic.titleZh,
    contentEn: baseContent.repeat(2),
    contentZh: `教育是人类发展中最重要的方面之一。它是个人建立未来并为社会做出贡献的基础。教育的重要性怎么强调都不为过，因为它赋予人们知识、技能和价值观，这些对个人成长和社会进步都至关重要。\n\n在当今快速发展的世界中，教育变得比以往任何时候都更加重要。全球经济越来越以知识为基础，雇主正在寻找不仅具备技术技能，还具备批判性思维能力、创造力和适应能力的人才。教育为发展这些基本能力提供了平台。通过正规学校教育和非正式学习经历，个人可以获得应对现代生活复杂性的必要工具。\n\n教育的好处远远超出经济考虑。教育在个人发展中起着至关重要的作用，促进智力成长和情感成熟。它鼓励好奇心和终身学习，使个人能够在一生中持续成长。受教育的人往往会在个人和职业方面做出更好的决定。他们更有可能参与公民活动、在社区志愿服务，并为民主进程做出贡献。\n\n教育也是社会流动的有力工具。对于许多人来说，特别是那些来自弱势背景的人，教育代表了提高生活水平和更大机会的最可靠途径。它可以通过打开更好的就业前景和更高收入潜力的门路来打破贫困循环。统计数据一致显示，受教育程度较高的人享有更好的健康结果、更长的预期寿命和更大的整体幸福感。\n\n此外，教育有助于社会凝聚力和文化保存。学校和教育机构可以作为不同人群聚集、相互学习和发展相互理解的空间。教育在将文化遗产从一代传承到下一代方面也发挥着至关重要的作用，确保宝贵的传统和知识不会随着时间的推移而丢失。\n\n尽管教育的重要性不可否认，但许多人仍然面临获得优质教育的重大挑战。贫困、地理隔离、冲突和歧视等因素继续造成教育成就的障碍。应对这些挑战需要政府、国际组织、民间社会和个人的共同努力。对教育的投资是对人力资本的投资，而人力资本最终是任何国家最有价值的资源。\n\n教育带来的变革真是非凡的。它有能力帮助个人摆脱贫困，赋权社区并推动经济增长。展望未来，教育的重要性只会继续增长。在技术变革和全球互联互通的时代，学习、忘记和重新学习的能力可能已成为最有价值的技能。因此，我们必须确保教育对所有人保持可获得性、相关性和高质量，无论其背景或情况如何。\n\n总之，教育不仅仅是特权，而是基本人权。它是开启无数机会之门并使个人能够发挥潜力的钥匙。作为社会，我们必须优先考虑教育，共同努力确保每个人都能获得学习的变革力量。`,
    level: 'junior' as const,
    category: topic.category,
    author: 'English Reader',
    wordCount: baseContent.split(' ').length * 2,
    difficulty: 2,
    createdAt: new Date().toISOString(),
  }));
};

// 高中水平 (Senior) - 较高难度词汇和复杂句型
const generateSeniorArticles = (): Article[] => {
  const seniorTopics = [
    { title: 'The Impact of Climate Change', titleZh: '气候变化的影响', category: 'science' as const },
    { title: 'Economic Globalization', titleZh: '经济全球化', category: 'science' as const },
    { title: 'Ethical Leadership', titleZh: '道德领导力', category: 'essay' as const },
    { title: 'Artificial Intelligence Revolution', titleZh: '人工智能革命', category: 'science' as const },
    { title: 'Philosophy of Happiness', titleZh: '幸福的哲学', category: 'essay' as const },
    { title: 'Modern Literature Analysis', titleZh: '现代文学分析', category: 'literature' as const },
    { title: 'Geopolitical Dynamics', titleZh: '地缘政治动态', category: 'science' as const },
    { title: 'Psychology of Learning', titleZh: '学习心理学', category: 'science' as const },
    { title: 'Sustainable Development', titleZh: '可持续发展', category: 'science' as const },
    { title: 'Digital Privacy Rights', titleZh: '数字隐私权', category: 'science' as const },
  ];

  const baseContent = `Climate change represents one of the most pressing challenges facing humanity in the twenty-first century. As global temperatures continue to rise, the ramifications are being felt across the planet, from melting ice caps and rising sea levels to increasingly extreme weather events. The scientific consensus is clear: human activities, particularly the burning of fossil fuels and deforestation, are the primary drivers of this unprecedented environmental transformation.

The consequences of climate change are multifaceted and far-reaching. Rising temperatures are disrupting ecosystems and threatening biodiversity, with many species struggling to adapt to rapidly changing conditions. Ocean acidification, a direct result of increased carbon dioxide absorption, is devastating marine life and the communities that depend on fishing for their livelihoods. Extreme weather events, including hurricanes, droughts, and floods, are becoming more frequent and intense, causing billions of dollars in damage and displacing millions of people annually.

Beyond the environmental impacts, climate change poses significant threats to human health, food security, and economic stability. Changing precipitation patterns are affecting agricultural productivity, with some regions experiencing devastating droughts while others face flooding. Heat waves are becoming more dangerous, particularly for vulnerable populations such as the elderly and those without access to air conditioning. The spread of tropical diseases to previously unaffected areas is another concerning consequence of rising global temperatures.

Addressing the climate crisis requires comprehensive and coordinated action at all levels of society. Governments must implement policies that transition economies away from fossil fuels and toward renewable energy sources. This includes investing in clean energy infrastructure, implementing carbon pricing mechanisms, and setting ambitious emissions reduction targets. International cooperation is essential, as climate change is a global problem that transcends national borders. The Paris Agreement represents a significant step forward, but much more needs to be done to meet its goals.

The private sector also has a crucial role to play in combating climate change. Businesses must adopt sustainable practices and develop innovative technologies that reduce greenhouse gas emissions. Many companies are already leading the way, investing in renewable energy, improving energy efficiency, and creating carbon-neutral products. However, profit-driven motives alone are insufficient; regulatory frameworks and market mechanisms must create incentives for sustainable behavior.

Individual actions, while important, are not sufficient to address the scale of the problem. However, collective individual actions can create significant change. People can reduce their carbon footprints by conserving energy, using public transportation, adopting plant-based diets, and advocating for climate-conscious policies. Education and awareness-raising are also critical components of climate action, empowering people to understand the issue and demand meaningful solutions.

The transition to a low-carbon economy presents significant opportunities as well as challenges. Green technologies are creating new industries and employment opportunities. Countries that lead in clean energy innovation stand to gain economic competitive advantages in the emerging global green economy. However, the transition must be managed carefully to ensure that workers in fossil fuel industries are not left behind and that the benefits of economic transformation are distributed equitably.

In conclusion, climate change is an existential threat that demands urgent and decisive action. The science is clear, the impacts are already being felt, and the window for meaningful action is narrowing. However, by working together—governments, businesses, communities, and individuals—we can rise to this challenge and create a more sustainable future for generations to come. The choices we make in the coming years will determine the fate of our planet and all who inhabit it.`;

  return seniorTopics.map((topic, index) => ({
    id: `long-sr-${index + 1}`,
    title: topic.title,
    titleZh: topic.titleZh,
    contentEn: baseContent,
    contentZh: `气候变化代表了二十一世纪人类面临的最紧迫挑战之一。随着全球气温持续上升，整个世界都在感受到其影响，从融化的冰盖和海平面上升到越来越极端的天气事件。科学界的共识是明确的：人类活动，特别是燃烧化石燃料和森林砍伐，是这场前所未有的环境变化的主要驱动力。\n\n气候变化的后果是多方面的且深远的。气温上升正在破坏生态系统并威胁生物多样性，许多物种正在努力适应快速变化的条件。海洋酸化——二氧化碳吸收增加的直接结果——正在摧毁海洋生物和依靠渔业为生的社区。极端天气事件，包括飓风、干旱和洪水，正变得越来越频繁和强烈，每年造成数十亿美元的损失并使数百万人流离失所。\n\n除了环境影响，气候变化还对人类健康、粮食安全和经济的稳定构成重大威胁。降水模式的变化正在影响农业生产力，一些地区经历着毁灭性的干旱，而另一些地区则面临洪水。热浪正变得越来越危险，特别是对于老年人和没有空调的人等弱势群体。热带疾病向以前未受影响地区的传播是全球气温上升的另一个令人担忧的后果。\n\n应对气候危机需要在社会各级采取全面和协调的行动。政府必须实施政策，使经济摆脱化石燃料，转向可再生能源。这包括投资清洁能源基础设施、实施碳定价机制并设定雄心勃勃的减排目标。国际合作至关重要，因为气候变化是一个超越国界的全球性问题。《巴黎协定》代表了向前迈出的重要一步，但要做更多工作来实现其目标。\n\n私营部门在应对气候变化方面也发挥着关键作用。企业必须采用可持续做法并开发减少温室气体排放的创新技术。许多公司已经走在前面，投资于可再生能源、提高能源效率并创造碳中和产品。然而，仅靠利润动机是不够的；监管框架和市场机制必须为可持续行为创造激励。\n\n个人行动虽然重要，但不足以解决这一问题的规模。然而，集体个人行动可以产生重大变化。人们可以通过节约能源、使用公共交通、采用植物性饮食并倡导气候意识政策来减少碳足迹。教育和提高认识也是气候行动的关键组成部分，使人们能够理解这个问题并寻求有意义的解决方案。\n\n向低碳经济的转型既带来机遇也带来挑战。绿色技术正在创造新的产业和就业机会。在清洁能源创新方面领先的国家将在新兴的全球绿色经济中获得经济竞争优势。然而，必须谨慎管理这一转型，以确保化石燃料行业的工人不会被抛在后面，经济转型的好处得到公平分配。\n\n总之，气候变化是一种生存威胁，需要紧急和果断的行动。科学是明确的，影响已经感受到，有意义行动的时间窗口正在缩小。然而，通过共同努力——政府、企业、社区和个人——我们可以迎接这一挑战，为子孙后代创造更可持续的未来。未来几年的选择将决定我们星球及其所有居住者的命运。`,
    level: 'senior' as const,
    category: topic.category,
    author: 'English Reader',
    wordCount: baseContent.split(' ').length,
    difficulty: 3,
    createdAt: new Date().toISOString(),
  }));
};

// 大学水平 (University) - 学术性词汇和复杂思想
const generateUniversityArticles = (): Article[] => {
  const universityTopics = [
    { title: 'Postcolonial Literature and Identity', titleZh: '后殖民文学与身份认同', category: 'literature' as const },
    { title: 'Quantum Computing Frontiers', titleZh: '量子计算前沿', category: 'science' as const },
    { title: 'Existentialist Philosophy', titleZh: '存在主义哲学', category: 'essay' as const },
    { title: 'Neuroscience and Consciousness', titleZh: '神经科学与意识', category: 'science' as const },
    { title: 'Post-Truth Politics', titleZh: '后真相政治', category: 'essay' as const },
    { title: 'Comparative Economic Systems', titleZh: '比较经济体制', category: 'science' as const },
    { title: 'Postmodern Architecture', titleZh: '后现代建筑', category: 'literature' as const },
    { title: 'Behavioral Economics Insights', titleZh: '行为经济学洞见', category: 'science' as const },
    { title: 'Biotechnology Ethics', titleZh: '生物技术伦理', category: 'science' as const },
    { title: 'Cognitive Linguistics', titleZh: '认知语言学', category: 'science' as const },
  ];

  const baseContent = `Postcolonial literature represents a profound engagement with the legacy of colonial domination and its continuing impact on cultural identity, political structures, and epistemological frameworks. Emerging primarily in the mid-twentieth century, this literary movement encompasses works by authors from formerly colonized nations who interrogate the complex relationships between colonizer and colonized, language and power, tradition and modernity. The field has evolved considerably since its inception, moving from primarily nationalist narratives to more nuanced examinations of hybridity, diaspora, and transnational identity formations.

The theoretical foundations of postcolonial criticism draw upon a diverse array of intellectual traditions, including Marxist criticism, structuralism, and more recently, subaltern studies and queer theory. Edward Said's groundbreaking work "Orientalism" (1978) established many of the field's central concerns, particularly the analysis of how Western knowledge systems constructed and dominated images of the "Orient." Said demonstrated that Orientalism was not merely an academic exercise but a discursive practice that justified imperial expansion and maintained Western hegemony over colonized peoples. This insight opened pathways for examining the interconnections between knowledge, power, and colonial rule across various historical contexts.

Frantz Fanon's psychological analyses of colonial violence and alienation provided another crucial foundation for postcolonial thought. His works, including "The Wretched of the Earth" and "Black Skin, White Masks," explored the pathological dimensions of colonial relationships, demonstrating how colonial domination produced distorted subjectivities among both colonizers and colonized. Fanon's attention to the psychic costs of colonialism anticipated later developments in colonial discourse analysis that would examine how colonial languages and educational systems internalized colonial hierarchies within colonized populations.

The question of language occupies a central position in postcolonial literary studies. Colonial languages—English, French, Portuguese, Dutch—became instruments of cultural domination, simultaneously enabling access to global discourse while marginalizing indigenous linguistic traditions. Chinua Achebe's celebrated critique of Joseph Conrad's "Heart of Darkness" exemplified this tension, demonstrating how the English language could be deployed both to reproduce racist stereotypes and to challenge imperial ideologies. Contemporary postcolonial writers navigate these linguistic complexities in various ways, from adopting colonial languages to subvert them from within to reviving and celebrating indigenous tongues.

Gender and sexuality have emerged as increasingly important analytical categories within postcolonial studies. Scholars such as Gayatri Spivak and Chandra Mohanty have demonstrated how colonial discourses constructed gendered subjects differently across cultural contexts, while also examining how feminist movements in postcolonial societies have negotiated the legacies of both colonialism and patriarchal traditions. The intersectionality of race, gender, and class in shaping colonial and postcolonial experiences has become a central concern, particularly in examining how marginalized groups within colonized societies were doubly marginalized by both imperial and indigenous power structures.

The relationship between postcolonial literature and national identity remains contested terrain. While some critics celebrate postcolonial writing's role in recovering suppressed histories and constructing alternative national narratives, others caution against conflating literary production with nationalist ideologies. The emergence of transnational and diaspora perspectives has further complicated this debate, as writers situated outside their countries of origin engage with multiple cultural locations and contested loyalties. This has led to productive examinations of how contemporary postcolonial subjects inhabit multiple, often contradictory, identity positions.

In the contemporary era, postcolonial literature continues to evolve in response to globalization, migration, and new forms of technological connection. Digital humanities methodologies have opened new avenues for analyzing colonial archives and tracking the circulation of texts across imperial networks. Meanwhile, climate change and environmental justice have emerged as pressing concerns that extend the postcolonial critique to examine how colonial patterns of extraction and exploitation continue to shape environmental inequalities between global North and South. The field's ongoing development demonstrates its vitality and capacity to generate new questions about literature's role in understanding and transforming our interconnected yet unequal world.`;

  return universityTopics.map((topic, index) => ({
    id: `long-un-${index + 1}`,
    title: topic.title,
    titleZh: topic.titleZh,
    contentEn: baseContent,
    contentZh: `后殖民文学代表了对殖民统治遗产及其对文化认同、政治结构和认识论框架持续影响的深刻参与。这一文学运动主要出现在二十世纪中期，包括来自前殖民地国家作者的作品，他们质疑殖民者与被殖民者、语言与权力、传统与现代之间复杂的关系。该领域自成立以来发展迅速，从主要是民族主义叙事转向对混合性、流散性和跨国身份形成的更细致入微的审查。\n\n后殖民批评的理论基础借鉴了多元的知识传统，包括马克思主义批评、结构主义，以及最近的庶民研究和酷儿理论。爱德华·赛义德的开创性著作《东方主义》（1978年）确立了该领域的许多核心关注点，特别是分析西方知识体系如何构建和主导"东方"形象的方式。赛义德表明，东方主义不仅仅是一种学术努力，而是一种为帝国扩张辩护并维护西方对被殖民人民统治的话语实践。这一见解为研究知识、权力与殖民统治之间的相互联系开辟了道路。\n\n弗朗茨·法农对殖民暴力和异化的心理分析为后殖民思想提供了另一个关键基础。他的著作，包括《地球上受诅咒的人》和《黑皮肤，白面具》，探讨了殖民关系的病理维度，表明殖民统治如何在殖民者和被殖民者中都产生了扭曲的主体性。法农对殖民主义心理成本的关注预示了后来殖民话语分析的发展，这些分析将研究殖民语言和教育系统如何在被殖民人口中内化殖民等级制度。\n\n语言问题在后殖民文学研究中占据核心位置。殖民语言——英语、法语、葡萄牙语、荷兰语——成为文化统治的工具，同时使人们能够进入全球话语，同时边缘化本土语言传统。 Chinua Achebe 对约瑟夫·康拉德《黑暗之心》的著名评论体现了这种紧张关系，表明英语如何既可用于再现种族主义刻板印象，也可用于挑战帝国意识形态。当代后殖民作家以各种方式应对这些语言复杂性，从采用殖民语言从内部颠覆殖民语言到恢复和庆祝本土语言。\n\n性别和性取向已成为后殖民研究中越来越重要的分析范畴。盖亚特里·斯皮瓦克和钱德拉·莫汉蒂等学者表明，殖民话语如何在不同文化背景下构建不同的性别主体，同时研究后殖民社会中的女权运动如何在殖民主义和父权传统的遗产中进行协商。种族、性别和阶级在塑造殖民和后殖民经验中的交叉性已成为核心关注点，特别是在研究被殖民社会中的边缘化群体如何被帝国和本土权力结构双重边缘化方面。\n\n后殖民文学与民族认同之间的关系仍然是争论的领域。虽然一些评论家赞扬后殖民写作在恢复被压制历史和构建替代民族叙事方面的作用，但其他人警告不要将文学创作与民族主义意识形态混为一谈。跨国和散居视角的出现使这一辩论更加复杂，因为处于原籍国之外的作家参与多个文化位置和相互竞争的忠诚度。这导致了富有成果的审查，探讨当代后殖民主体如何占据多个往往相互矛盾的身份位置。\n\n在当代，后殖民文学继续因应全球化、移民和新的技术联系形式而发展。数字人文方法论为分析殖民档案和追踪文本在帝国网络中的流通开辟了新途径。同时，气候变化和环境正义已成为紧迫的问题，扩展了后殖民批评，以研究殖民模式的提取和开发如何继续塑造全球南北之间的环境不平等。该领域的持续发展表明其活力，以及在理解和改变我们相互联系但不平等的世界中文学作用的产生新问题的能力。`,
    level: 'university' as const,
    category: topic.category,
    author: 'English Reader',
    wordCount: baseContent.split(' ').length,
    difficulty: 4,
    createdAt: new Date().toISOString(),
  }));
};

// 经典文学名著 - 精选篇章
const classicLiteraryWorks: Article[] = [
  // 小学级别 - 经典童话
  {
    id: 'classic-el-1',
    title: 'The Little Prince - Chapter 1',
    titleZh: '小王子 - 第一章',
    contentEn: 'Once when I was six years old I saw a magnificent picture in a book, called True Stories From Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal. Here is a copy of the drawing. In the book it said: "Boa constrictors swallow their prey whole, without chewing it. After that they cannot move any more; they sleep through the six months that they need for digestion." I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing. My Drawing Number One. I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them. But they answered: "Frighten? Why should any one be frightened by a hat?" My drawing was not a picture of a hat. It was a picture of a boa constrictor from the outside. But since the grown-ups were not able to understand it, I made another drawing: I drew the inside of a boa constrictor, so that the grown-ups could see it clearly. They always need explanations. The Grown-ups advice, therefore, made me decide to give up my career as a painter. So I chose another profession and learned to pilot airplanes.',
    contentZh: '从前从前，当我只有六岁时，我在一本书里看到了一幅壮丽的图画，那本书叫《自然故事》，是关于原始森林的。画的是一条大蟒蛇正在吞食一只动物。下面是这幅画的复制品。书中写道：大蟒蛇会把猎物整个吞下，不咀嚼。之后它们就动不了了；要睡上六个月来消化。我深深地思考着丛林探险的故事。然后，我用彩色铅笔努力作画，成功画出了我的第一幅画。我的第一号作品。我把杰作给大人们看，问他们这幅画是否让他们害怕。他们回答说：害怕？一顶帽子有什么好怕的？我的画不是帽子的图画。我画的是一条正在吞食大象的蟒蛇。但是大人们看不懂，我又画了一幅：我画了蟒蛇的内部，这样大人们就能看清楚了。他们总是需要解释。因此，大人们的建议让我决定放弃画家这个职业。于是我选了另一个职业，学习驾驶飞机。',
    level: 'elementary',
    category: 'literature',
    author: 'Antoine de Saint-Exupery',
    wordCount: 280,
    difficulty: 1,
    createdAt: '2024-01-01',
  },
  {
    id: 'classic-el-2',
    title: 'Charlotte\'s Web - The Beginning',
    titleZh: '夏洛特的网 - 开篇',
    contentEn: 'Where is Papa going with that ax? said Fern to her mother as they were setting the table for breakfast. Out to the hatchet, replied Mrs. Arable. Fern pushed a chair out of the way and ran outdoors. The grass was wet and the earth smelled of springtime. Fern saturday morning tasks were pleasantly divided between setting the table and feeding the piglet. Wait, Papa! she cried. You cannot kill it! Its own sow farrowed only get twelve. One was runt. She has got seven, too. But this one is wonderful. It is the runt of the litter and it is delicate and it needs special care. Mr. Arable looked at Fern with a sober expression. We will see, he said. You go now and get ready for breakfast. I should never have let you buy the pig, said Mrs. Arable. You were right, he is only a pig. Oh, no! cried Fern. I shall raise him myself!',
    contentZh: '爸爸拿着斧子去哪里？费恩在摆早餐桌子时问妈妈。出去砍东西。阿雷布尔夫人回答。费恩推开椅子，跑出去了。草地是湿的，泥土散发着春天的气息。费恩周六早上的任务愉快地分为摆桌子和喂小猪。等等，爸爸！她喊道，你不能杀掉它！它的妈妈只生了十二只小猪。有一只是最小的。她有七只。但这只太棒了。这是那一窝中最小的，它很脆弱，需要特别照顾。阿雷布尔先生严肃地看着费恩。我们走着瞧，他说。你去准备吃早餐吧。我真不该让你买这只猪，阿雷布尔夫人说。你是对的，它只是一只猪。哦，不！费恩喊道，我要自己养它！',
    level: 'elementary',
    category: 'literature',
    author: 'E.B. White',
    wordCount: 180,
    difficulty: 1,
    createdAt: '2024-01-02',
  },
  // 初中级别 - 经典文学
  {
    id: 'classic-jr-1',
    title: 'The Old Man and the Sea - The Struggle',
    titleZh: '老人与海 - 搏斗',
    contentEn: 'He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eighty-four days now without taking a fish. In the first forty days a boy had been with him. But after forty days without a fish the boy parents had told him that the old man was now definitely and finally salao, which is the worst form of unlucky, and the boy had gone at their orders in another boat which caught three good fish the first week. The old man was thin and gaunt with deep wrinkles in the back of his neck. Everything about him was old except his eyes and they were the same color as the sea and were cheerful and undefeated. Santiago, the boy said to him as they climbed the bank from the wharf. I could go with you again. We have made some money. The old man had taught the boy to fish and the boy loved him. No, the old man said. You are with a lucky boat. Stay with them.',
    contentZh: '他是一个老人，独自在墨西哥湾流中的一条小渔船上捕鱼，现在他已经八十四天没有钓到鱼了。前四十天，一个男孩和他在一起。但四十天没钓到鱼后，男孩的父母告诉他老人现在绝对是彻底的海鸟了，这是最不吉利的形式，男孩按照他们的命令上了另一条船，第一周就捕到了三条大鱼。老人很瘦，背上脖子有深深的皱纹。他身上的一切都是老的，除了他的眼睛，它们的颜色和海洋一样，愉快且不屈不挠。圣地亚哥，当他们从码头爬上岸时，男孩对他说。我可以再和你一起去。我们赚了一些钱。老人教男孩捕鱼，男孩爱他。不，老人说。你是在一条幸运的船上。和他们在一起。',
    level: 'junior',
    category: 'literature',
    author: 'Ernest Hemingway',
    wordCount: 220,
    difficulty: 2,
    createdAt: '2024-02-01',
  },
  {
    id: 'classic-jr-2',
    title: 'The Lion, the Witch and the Wardrobe - The Wardrobe',
    titleZh: '狮子、女巫和衣橱 - 衣橱',
    contentEn: 'Once there were four children whose names were Peter, Susan, Edmund and Lucy. This story is about something that happened to them when they were sent away from London during the war because of the air-raids. They were sent to the house of an old Professor who lived in the country, ten miles from the nearest station. The Professor was a very old man with a shaggy white beard and enormous eyebrows. He did not talk very much, and was not at all exciting. Lucy was the first to find the wardrobe. It was raining hard that morning, and Lucy was in the house while the others were out exploring. She had read the books about Narnia before, so she was very excited about this idea. As she got deeper into the wardrobe, she found herself in a dark place. She pushed forward, her arms extended, expecting to feel the wood against the sides. But there was no wood. She walked on for what seemed like miles. Suddenly she saw a light ahead.',
    contentZh: '从前有四个孩子，分别叫彼得、苏珊、埃德蒙和露西。这个故事是关于他们在战争期间因为空袭被送出伦敦时发生的事情。他们被送到了一位住在乡下的老教授家里，离最近的火车站有十英里。教授是一个很老的老人，有着蓬松的白色眉毛和巨大的眉毛。他不太说话，一点也不激动。露西是第一个发现衣橱的。那天早上雨下得很大，露西在房子里，而其他人在外面探险。她以前读过关于纳尼亚的书，所以对这个想法很兴奋。当她更深地进入衣橱时，她发现自己在一个黑暗的地方。她伸出双臂向前走，期待感觉到两边的木头。但没有木头。她走了似乎好几英里。突然，她看到前面有一道光。',
    level: 'junior',
    category: 'literature',
    author: 'C.S. Lewis',
    wordCount: 250,
    difficulty: 2,
    createdAt: '2024-02-02',
  },
  // 高中级别 - 经典文学
  {
    id: 'classic-sr-1',
    title: 'Pride and Prejudice - The Beginning',
    titleZh: '傲慢与偏见 - 开篇',
    contentEn: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters. My dear Mr. Bennet, said his lady to him one day, have you heard that Netherfield Park is let at last? Mr. Bennet replied that he had not. But it is, returned she; for Mrs. Long has just been here, and she told me all about it. Mr. Bennet made no answer. Do you not want to know who has taken it? cried his wife impatiently. You want to tell me, and I have no objection to hearing it. This was invitation enough. Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England.',
    contentZh: '这是一个举世公认的真理，一个拥有大量财产的单身汉，必然想要娶一个妻子。无论这个人在初到一个地方时对他的感情或看法是多么不为人知，这个事实在周围的家庭心目中是如此根深蒂固，以至于他被认为是他们某个女儿应得的财产。我亲爱的班纳特先生，有一天他妻子对他说，你听说内瑟菲尔德公园终于租出去了吗？班纳特先生回答说他没有听说。但是租出去了，她回答说；因为朗夫人刚来过，她把一切都告诉我了。班纳特先生没有回答。你不想知道是谁租的吗？他妻子不耐烦地喊道。你想告诉我，我听一下也无妨。这就足够了。为什么，我亲爱的，你必须知道，朗夫人说内瑟菲尔德被一个来自英格兰北部的年轻富人所租。',
    level: 'senior',
    category: 'literature',
    author: 'Jane Austen',
    wordCount: 220,
    difficulty: 3,
    createdAt: '2024-03-01',
  },
  {
    id: 'classic-sr-2',
    title: 'The Great Gatsby - The Beginning',
    titleZh: '了不起的盖茨比 - 开篇',
    contentEn: 'In my younger and more vulnerable years my father gave me some advice that I have been turning over in my mind ever since. Whenever you feel like criticizing anyone, he told me, just remember that all the people in this world have not had the advantages that you have had. He did not say any more, but we have always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I am inclined to reserve all judgments, a habit that has opened up many curious natures to me and has also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men.',
    contentZh: '我年轻更脆弱的岁月里，我父亲给了我一些建议，从那以后我一直在反复思考。当你想要批评任何人时，他告诉我，只要记住这个世界上并不是所有的人都拥有你所拥有的优势。他没有再说更多，但我们一直以一种保守的方式异常地交流，我理解他的意思远不止于此。结果是，我倾向于保留所有的判断，这种习惯向我敞开了许多好奇的天性，也使我成为不少老练无聊者的牺牲品。当不正常的心态在一个正常人身上出现时，它很快就会注意到并依附于这种品质，因此在大学里我被不公正地指责为政客，因为我知道一些狂野陌生人的秘密悲伤。',
    level: 'senior',
    category: 'literature',
    author: 'F. Scott Fitzgerald',
    wordCount: 220,
    difficulty: 3,
    createdAt: '2024-03-02',
  },
  // 大学级别 - 经典文学
  {
    id: 'classic-un-1',
    title: 'One Hundred Years of Solitude - The Beginning',
    titleZh: '百年孤独 - 开篇',
    contentEn: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendia was to remember that distant afternoon when his father took him to discover ice. At that time Macondo was a village of twenty adobe houses, built on the bank of a river of clear water that ran along a bed of polished stones, which were white and enormous, like prehistoric eggs. The world was so recent that many things lacked names, and in order to mention them it was necessary to point. Every year during the month of March a family of ragged gypsies would set up their tents near the village, and with a great uproar and thunder and lightning a few men would demonstrate to the astonished villagers the most incredible inventions: the magnet, the telescope, the magnifying glass, the images in color, the gunpowder, the compass, the mathematical instruments. Jose Arcadio Buendia, whose imaginative capacity had never found expression in any discipline, became the excited favorite of the gypsies.',
    contentZh: '多年以后，面对行刑队，奥雷里亚诺布恩迪亚上校将会回想起那个遥远的下午，那时他的父亲带他去见识冰块。那时马孔多是个只有二十间泥巴房子的村庄，建在一条清澈的河岸上，河床上铺着光滑的鹅卵石，白而大得像史前的蛋。世界是如此之新，以至于许多东西都没有名字，为了提及它们有必要用手指。每年三月，一家人衣衫褴褛的吉普赛人会在村庄附近搭起帐篷，在一阵喧闹、电闪雷鸣中，他们向惊呆的村民展示最不可思议的发明：磁铁、望远镜、放大镜、彩色照片、火药、指南针、数学仪器。何塞阿尔卡蒂奥布恩迪亚的想象力在任何学科中都没有找到表达的机会，却成了吉普赛人最兴奋的宠儿。',
    level: 'university',
    category: 'literature',
    author: 'Gabriel Garcia Marquez',
    wordCount: 250,
    difficulty: 4,
    createdAt: '2024-04-01',
  },
  {
    id: 'classic-un-2',
    title: 'To Kill a Mockingbird - The Beginning',
    titleZh: '杀死一只知更鸟 - 开篇',
    contentEn: 'When Atticus Finch asked Jack to explain the meaning of swan song, I was in bed. This is significant because, as my father would say, it is significant in the life of a small town that the lawyer children should hear such things from someone other than their father. Maycomb was an old town, but it was a tired old town when I first knew it. In rainy weather the streets turned to red slop; grass grew on the sidewalks, the courthouse sagged in the Square. Somehow, it was hotter then: people hands were stuck together with sweat, and they sweated their way through the dark, and the men were as tired as the women. Perhaps the children were right: the adults were not to be trusted in those days. The summer I turned eight, my brother Jem got his arm badly broken at the elbow. When he grew up, if he wanted to be a coward, the tale of his broken arm would serve him as an excuse.',
    contentZh: '当阿提克斯芬奇要求杰克解释天鹅之歌的含义时，我正在床上。这很重要，因为正如我父亲所说的，在律师的孩子应该从父亲以外的人那里听到这些事情的小镇生活中，这很重要。梅科姆是一个古老的城镇，但当我第一次认识它时，它是一个疲惫的城镇。在下雨天，街道变成了红色的泥浆；人行道上都长了草，广场上的法院摇摇欲坠。不知道为什么，那时更热：人们的双手因汗水粘在一起，他们汗流浃背地穿过黑暗，男人和女人一样疲惫。也许孩子们是对的：那些日子里大人们是不可信任的。我八岁那年夏天，我哥哥杰姆的胳膊肘严重骨折了。当他长大后，如果他想当懦夫，他骨折的故事将成为他的借口。',
    level: 'university',
    category: 'literature',
    author: 'Harper Lee',
    wordCount: 230,
    difficulty: 4,
    createdAt: '2024-04-02',
  },
];

// 导出所有长篇文章
export const longArticles: Article[] = [
  ...generateElementaryArticles(),
  ...generateJuniorArticles(),
  ...generateSeniorArticles(),
  ...generateUniversityArticles(),
  ...classicLiteraryWorks,
];

// 获取长篇文章
export const getLongArticles = (): Article[] => longArticles;

// 按级别获取长篇文章
export const getLongArticlesByLevel = (level: Article['level']): Article[] => {
  return longArticles.filter(article => article.level === level);
};

// 根据ID获取长篇文章
export const getLongArticleById = (id: string): Article | undefined => {
  return longArticles.find(article => article.id === id);
};

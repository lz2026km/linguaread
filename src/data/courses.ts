import { Course, CourseUnit } from '../types';

// 小学英语课本内容
const elementaryUnits = [
  {
    id: 'ele-unit-1',
    title: 'Hello, Friends!',
    titleZh: '你好，朋友！',
    contentEn: `Hello! I am Lily. I am seven years old. I am a student. This is my school. It is big and beautiful. I like my school very much.

Good morning! How are you? I am fine, thank you. Nice to meet you! Nice to meet you too!

I have a friend. His name is Tom. He is eight years old. He is a good boy. We like to play together. We are good friends.

My teacher is Miss White. She is kind and nice. She teaches us English. We love her very much.`,
    contentZh: `你好！我叫莉莉。我今年七岁了。我是一名学生。这是我的学校。它很大很美丽。我非常喜欢我的学校。

早上好！你好吗？我很好，谢谢。很高兴认识你！我也很高兴认识你！

我有一个朋友。他叫汤姆。他今年八岁了。他是一个好孩子。我们喜欢一起玩。我们是好朋友。

我的老师是怀特老师。她很亲切。她教我们英语。我们非常喜欢她。`,
    wordCount: 85,
  },
  {
    id: 'ele-unit-2',
    title: 'My Family',
    titleZh: '我的家庭',
    contentEn: `I have a happy family. There are four people in my family. They are my father, my mother, my brother and me.

My father is a doctor. He works in a hospital. He is tall and handsome. He likes to read books.

My mother is a teacher. She teaches math in a school. She is kind and beautiful. She cooks delicious food for us.

My brother is a student. He is ten years old. He likes to play football. We often play games together.

I love my family very much!`,
    contentZh: `我有一个幸福的家庭。我家有四口人。他们是爸爸、妈妈、哥哥和我。

我爸爸是一名医生。他在医院工作。他高高帅帅的。他喜欢读书。

我妈妈是一名老师。她在一所学校教数学。她很善良很美丽。她为我们做美味的食物。

我哥哥是一名学生。他今年十岁了。他喜欢踢足球。我们经常一起玩游戏。

我非常爱我的家人！`,
    wordCount: 92,
  },
  {
    id: 'ele-unit-3',
    title: 'Colors and Numbers',
    titleZh: '颜色和数字',
    contentEn: `Red, yellow, blue, green, orange, purple, pink and brown. These are beautiful colors. I like them all!

One, two, three, four, five, six, seven, eight, nine, ten. I can count from one to ten. I can count my pencils, my books and my friends.

I have a red balloon. It is big and round. I have a blue sky. It is clear and bright. I have green grass. It is soft and nice.

Let us learn colors and numbers together. They are fun and useful!`,
    contentZh: `红色、黄色、蓝色、绿色、橙色、紫色、粉色和棕色。这些是美丽的颜色。我都喜欢！

一、二、三、四、五、六、七、八、九、十。我能从一数到十。我能数我的铅笔、我的书和我的朋友。

我有一个红色的气球。它又大又圆。我有一片蓝色的天空。它又晴朗又明亮。我有绿色的草地。它又软又漂亮。

让我们一起学习颜色和数字。它们既有趣又有用！`,
    wordCount: 88,
  },
  {
    id: 'ele-unit-4',
    title: 'Animals Are Our Friends',
    titleZh: '动物是我们朋友',
    contentEn: `I love animals. Animals are our friends. We should be kind to them.

I have a cute little dog. Its name is Buddy. It is white and brown. It likes to run and play. When I come home, it runs to greet me. It wags its tail happily.

There are many animals in the zoo. I like the elephants. They are big and strong. I like the monkeys. They are clever and funny. I like the rabbits. They are soft and white.

We should protect animals. Let us love and care for them every day!`,
    contentZh: `我喜欢动物。动物是我们的朋友。我们应该善待它们。

我有一只可爱的小狗。它的名字叫巴迪。它是白色和棕色的。它喜欢跑和玩。当我回家时，它跑来迎接我。它开心地摇着尾巴。

动物园里有很多动物。我喜欢大象。它们又大又强壮。我喜欢猴子。它们既聪明又有趣。我喜欢兔子。它们又软又白。

我们应该保护动物。让我们每天都关爱它们！`,
    wordCount: 92,
  },
];

// 初中英语课本内容
const juniorUnits = [
  {
    id: 'jun-unit-1',
    title: 'A Day at School',
    titleZh: '校园一天',
    contentEn: `Today is a typical school day for me. I wake up at six thirty in the morning. After brushing my teeth and washing my face, I have a quick breakfast. Then I put on my school uniform and head to school.

I usually walk to school with my best friend, Tom. It takes us about fifteen minutes. On the way, we often talk about our homework or the interesting things that happened in class.

Classes start at eight o'clock. We have four classes in the morning. My favorite subject is English because our English teacher is very interesting and patient. She makes the class lively and enjoyable.

At noon, we have a one-hour lunch break. Most students eat in the school cafeteria. The food is quite good and cheap. After lunch, we sometimes play basketball or just relax in the classroom.

In the afternoon, we have three more classes. After school, I often stay for extracurricular activities. I join the music club and practice the piano every Tuesday and Thursday.

School life is busy but wonderful. I really enjoy every day at school!`,
    contentZh: `今天是我典型的校园生活。早上六点半起床。刷完牙洗完脸后，我快速吃完早餐。然后穿上校服去学校。

我通常和最好的朋友汤姆一起走路去学校。路上我们常常讨论作业或者课堂上发生的有趣事情。

八点开始上课。上午我们有四节课。我最喜欢的科目是英语，因为我们的英语老师非常有趣且耐心。她让课堂生动有趣。

中午有一个小时的午休时间。大部分学生在学校食堂吃饭。食物很好吃又便宜。午饭后，我们有时打篮球或者在教室里休息。

下午还有三节课。放学后，我常常参加课外活动。我参加音乐俱乐部，每周二和周四练习钢琴。

校园生活忙碌但美好。我真的很享受在学校的每一天！`,
    wordCount: 180,
  },
  {
    id: 'jun-unit-2',
    title: 'The Importance of Reading',
    titleZh: '阅读的重要性',
    contentEn: `Reading is one of the most important skills we can learn. It not only helps us get knowledge but also expands our minds and imagination.

Many great people loved reading when they were young. Abraham Lincoln, the president of the United States, read every book he could find. He became wise through reading. Similarly, our life can be enriched by reading good books.

There are many benefits of reading. First, reading improves our language skills. We can learn new words and phrases. Second, reading helps us think more critically. We learn to analyze different ideas and form our own opinions. Third, reading is a great way to relax. It can take us to different worlds and help us forget our problems for a while.

However, in this digital age, many young people prefer watching videos or playing games to reading. This is quite worrying. We should encourage more young people to develop the habit of reading.

Here are some tips for developing good reading habits. First, set aside some time each day for reading. Even fifteen minutes is better than nothing. Second, choose books that interest you. Third, keep a reading notebook to write down new words or your thoughts.

Let us start reading today and make it a part of our life!`,
    contentZh: `阅读是我们能学的最重要的技能之一。它不仅帮助我们获取知识，还扩展我们的思维和想象力。

很多伟人年轻时就热爱阅读。美国总统亚伯拉罕·林肯读他能找到的每一本书。他通过阅读变得聪明。同样，我们的生活也可以通过阅读好书而丰富。

阅读有很多好处。首先，阅读提高我们的语言技能。我们可以学习新单词和短语。其次，阅读帮助我们更批判性地思考。我们学会分析不同的观点并形成自己的观点。第三，阅读是放松的好方式。它能带我们去不同的世界，帮助我们暂时忘记烦恼。

然而，在这个数字时代，很多年轻人更喜欢看视频或玩游戏而不是阅读。这很令人担忧。我们应该鼓励更多年轻人培养阅读习惯。

这里有一些培养良好阅读习惯的建议。首先，每天留出一些时间阅读。即使十五分钟也比没有好。第二，选择你感兴趣的书。第三，保持一个阅读笔记本，记录新单词或你的想法。

让我们今天开始阅读，让它成为我们生活的一部分！`,
    wordCount: 210,
  },
  {
    id: 'jun-unit-3',
    title: 'My Hometown',
    titleZh: '我的家乡',
    contentEn: `I come from a beautiful small town called Sunshine Town. It is located in the southern part of our country, surrounded by mountains and rivers.

The town is not very big, but it has a long history. Many old buildings stand along the streets. They show the traditional architecture of our culture. Every year, many tourists come to visit these historical sites.

There is a famous river running through the town. The water is clean and clear. In summer, children love to play by the river. Their laughter fills the air with joy. On both sides of the river, there are tall trees and colorful flowers. It is a perfect place for散步.

The people in my hometown are very friendly and hospitable. They are always ready to help others. When I was little, my neighbors often brought me delicious food. I still remember the warm feelings.

Now I study in the city and can only go back home during holidays. Every time I return, I feel a sense of peace and happiness. My hometown has shaped who I am. No matter where I go, I will always love my hometown.`,
    contentZh: `我来自一个叫阳光镇的小镇。它位于我们国家的南部，被群山和河流环绕。

镇子不大，但有很长的历史。许多古建筑矗立在街道两旁。它们展示着我们文化的传统建筑。每年都有很多游客来参观这些历史遗迹。

有一条著名的河流穿过小镇。河水清澈见底。夏天，孩子们喜欢在河边玩耍。欢笑声充满了空气。河两岸有高大的树木和五颜六色的花。这是一个散步的好地方。

我家乡的人们非常友好和好客。他们总是乐于助人。当我还是个孩子时，邻居们常常给我带美味的食物。我仍然记得那种温暖的感觉。

现在我在城市学习，只有在假期才能回家。每次回去，我都感到一种平静和快乐。我的家乡塑造了我是谁。无论走到哪里，我都会永远爱我的家乡。`,
    wordCount: 195,
  },
  {
    id: 'jun-unit-4',
    title: 'Healthy Eating',
    titleZh: '健康饮食',
    contentEn: `Healthy eating is very important for our bodies. A balanced diet gives us the nutrients we need to be healthy and strong.

What is a balanced diet? It includes foods from all the main food groups: grains, vegetables, fruits, meat, and dairy products. Each group provides different nutrients that our bodies need.

Grains like rice, bread, and pasta give us energy. We need energy to study, play, and grow. Vegetables and fruits are rich in vitamins and minerals. They help us fight diseases and keep our skin healthy. Meat, fish, and eggs provide protein, which is essential for building muscles. Dairy products like milk and cheese give us calcium for strong bones.

However, many young people prefer junk food to healthy food. Junk food tastes good, but it contains too much sugar, fat, and salt. Eating too much junk food can lead to health problems like obesity and tooth decay.

Here are some tips for healthy eating. First, eat breakfast every day. It gives us energy for the whole morning. Second, drink plenty of water instead of sugary drinks. Third, eat more vegetables and fruits. Fourth, avoid eating too much candy or fast food.

Let us develop healthy eating habits and keep our bodies strong!`,
    contentZh: `健康饮食对我们的身体很重要。均衡的饮食给我们保持健康和强壮所需的营养。

什么是均衡的饮食？它包括所有主要食物组的食物：谷物、蔬菜、水果、肉类和乳制品。每一组都提供我们身体所需的不同营养。

像米饭、面包和面食这样的谷物给我们能量。我们需要能量来学习、玩耍和成长。蔬菜和水果富含维生素和矿物质。它们帮助我们抵抗疾病，保持皮肤健康。肉、鱼和蛋提供蛋白质，这对肌肉构建至关重要。乳制品如牛奶和奶酪给我们强健骨骼所需的钙。

然而，很多年轻人更喜欢垃圾食品而不是健康食物。垃圾食品好吃，但它含有太多的糖、脂肪和盐。吃太多垃圾食品会导致肥胖和蛀牙等健康问题。

这里有一些健康饮食的建议。首先，每天吃早餐。它给我们整个上午的能量。其次，多喝水而不是含糖饮料。第三，多吃蔬菜和水果。第四，避免吃太多糖果或快餐。

让我们养成健康饮食的习惯，保持身体强壮！`,
    wordCount: 210,
  },
];

// 高中英语课本内容
const seniorUnits = [
  {
    id: 'sen-unit-1',
    title: 'The Power of Gratitude',
    titleZh: '感恩的力量',
    contentEn: `Gratitude is one of the most powerful emotions we can feel. It is the quality of being thankful and showing appreciation for what we have. In our busy modern lives, we often forget to express gratitude, but doing so can bring tremendous benefits to our mental and physical well-being.

Research has shown that people who regularly practice gratitude are happier and healthier. They have stronger immune systems, sleep better, and experience less stress. Gratitude helps us focus on the positive aspects of our lives, which can reduce negative emotions like anger and jealousy.

Expressing gratitude is not just about saying "thank you." It is about recognizing the good things in our lives, big and small. It could be thanking a friend for their support, appreciating a teacher's guidance, or simply enjoying a beautiful sunset. When we cultivate gratitude, we become more aware of the abundance in our lives rather than focusing on what we lack.

There are many simple ways to practice gratitude. One effective method is keeping a gratitude journal. Each day, write down three things you are grateful for. They can be as simple as a delicious meal or as significant as a loving family. Another way is to express gratitude directly to others. Telling someone how much you appreciate them can strengthen your relationships and bring joy to both parties.

In conclusion, gratitude is a powerful tool that can transform our lives. Let us take time each day to appreciate the people and things around us. By cultivating an attitude of gratitude, we can lead happier, healthier, and more fulfilling lives.`,
    contentZh: `感恩是我们能感受到的最强烈的情感之一。它是感恩的品质，表达对我们所拥有的一切的欣赏。在我们忙碌的现代生活中，我们经常忘记表达感恩，但这样做能给我们的身心健康带来巨大的好处。

研究表明，经常练习感恩的人更快乐、更健康。他们有更强的免疫系统，睡得更好，经历的压力更少。感恩帮助我们专注于生活中积极的方面，这可以减少愤怒和嫉妒等负面情绪。

表达感恩不仅仅是說"谢谢"。它是认可生活中好的事情，无论大小。它可以是感谢朋友的支持，欣赏老师的指导，或者只是欣赏美丽的日落。当我们培养感恩时，我们变得更意识到生活中的富足，而不是专注于我们缺少什么。

有很多简单的方法来练习感恩。一个有效的方法是保持感恩日记。每天写下三件你感激的事情。它们可以像美味的一餐一样简单，也可以像充满爱的家庭一样重要。另一个方法是直接向他人表达感恩。告诉某人你有多欣赏他们可以加强你们的关系，给双方带来快乐。

总之，感恩是一个可以改变我们生活的强大工具。让我们每天花时间欣赏我们周围的人事物。通过培养感恩的态度，我们可以过上更快乐、更健康、更充实的生活。`,
    wordCount: 280,
  },
  {
    id: 'sen-unit-2',
    title: 'The Impact of Technology on Education',
    titleZh: '科技对教育的影响',
    contentEn: `Technology has revolutionized the way we learn and teach. In recent years, digital tools and online resources have become increasingly prevalent in education, transforming traditional classrooms into dynamic learning environments.

One of the most significant impacts of technology on education is accessibility. Students no longer need to be physically present in a classroom to receive quality education. Online courses and distance learning programs have made it possible for people around the world to access educational content from renowned institutions. This has democratized education to a great extent.

Another benefit of educational technology is personalization. Adaptive learning systems can analyze students' strengths and weaknesses and tailor lessons accordingly. This individualized approach helps students learn at their own pace and focus on areas where they need improvement. Furthermore, interactive multimedia content makes learning more engaging and enjoyable.

Technology also facilitates collaboration among students. Through online platforms, students can work together on projects regardless of their geographical locations. This prepares them for the increasingly globalized workforce where remote collaboration is becoming the norm.

However, we must acknowledge the challenges that come with technological integration in education. The digital divide remains a significant issue, as not all students have equal access to devices and reliable internet connections. Additionally, there are concerns about screen time and its potential negative effects on students' health and social development.

Teachers also need training to effectively integrate technology into their teaching methodologies. Without proper support, technology can become a distraction rather than a learning tool.

In conclusion, while technology has undoubtedly enhanced education in many ways, it is crucial that we implement it thoughtfully. We must ensure that technology serves as a complement to traditional teaching methods rather than a replacement. The goal should be to create a balanced educational environment that leverages the best of both worlds.`,
    contentZh: `科技彻底改变了我们学习和教学的方式。近年来，数字工具和在线资源在教育中变得越来越普遍，将传统教室转变为动态的学习环境。

科技对教育最显著的影响之一是可及性。学生不再需要亲自在教室里才能接受优质教育。在线课程和远程学习项目使全世界的人们都能够获取知名教育机构的教育内容。这在很大程度上使教育民主化。

教育科技的另一个好处是个性化。自适应学习系统可以分析学生的优势和劣势，并相应地定制课程。这种个性化方法帮助学生按照自己的节奏学习，专注于需要改进的领域。此外，互动多媒体内容使学习更有吸引力和乐趣。

科技还促进了学生之间的协作。通过在线平台，学生可以无论身处何地一起做项目。这为他们准备了日益全球化的劳动力，其中远程协作正成为常态。

然而，我们必须承认科技融入教育带来的挑战。数字鸿沟仍然是一个重大问题，因为并非所有学生都能平等地获得设备和可靠的互联网连接。此外，人们担心屏幕时间及其对学生健康和社交发展的潜在负面影响。

教师也需要培训，以有效地将技术融入他们的教学方法。没有适当的支持，技术可能成为干扰而不是学习工具。

总之，虽然科技无疑在许多方面增强了教育，但重要的是我们要深思熟虑地实施它。我们必须确保技术作为传统教学方法的补充，而不是替代。目标应该是创造一个平衡的教育环境，利用两者的优点。`,
    wordCount: 320,
  },
  {
    id: 'sen-unit-3',
    title: 'Environmental Protection',
    titleZh: '环境保护',
    contentEn: `Environmental protection has become one of the most pressing issues of our time. As industrialization and modernization continue to advance at a rapid pace, our planet is facing unprecedented challenges. Climate change, air pollution, water contamination, and loss of biodiversity are all threatening the delicate balance of our ecosystem.

The consequences of environmental degradation are far-reaching. Rising global temperatures have led to melting ice caps, rising sea levels, and more frequent extreme weather events. Air pollution causes respiratory diseases and millions of deaths each year. Plastic waste has polluted our oceans, harming marine life and entering the food chain.

However, there is still hope. Individuals, governments, and organizations around the world are taking action to address these environmental challenges. Many countries have implemented policies to reduce carbon emissions and promote renewable energy sources such as solar and wind power. Companies are developing eco-friendly products and adopting sustainable business practices.

At the individual level, we can also contribute to environmental protection. Simple actions like reducing, reusing, and recycling can make a significant difference. Choosing public transportation or electric vehicles, conserving water and electricity, and reducing food waste are all effective ways to lessen our environmental impact. Planting trees and participating in community clean-up events are also meaningful ways to help.

Education plays a crucial role in environmental protection. By raising awareness about environmental issues, we can inspire more people to take action. Teaching the younger generation about sustainability and ecological responsibility is essential for creating a greener future.

In conclusion, environmental protection requires collective efforts from all sectors of society. Each one of us has a responsibility to protect our planet. Let us work together to create a sustainable future for ourselves and future generations. The time to act is now.`,
    contentZh: `环境保护已成为我们这个时代最紧迫的问题之一。随着工业化和现代化继续快速发展，我们的星球正面临前所未有的挑战。气候变化、空气污染、水污染和生物多样性丧失都在威胁着我们生态系统的微妙平衡。

环境退化的后果是深远的。全球气温上升导致冰盖融化、海平面上升，以及更频繁的极端天气事件。空气污染每年导致数亿人死亡，并引起呼吸系统疾病。塑料垃圾污染了海洋，伤害海洋生物并进入食物链。

然而，仍然有希望。世界各地的个人、政府和组织正在采取行动应对这些环境挑战。许多国家已实施政策减少碳排放，促进太阳能和风能等可再生能源。企业正在开发环保产品并采用可持续的商业实践。

在个人层面，我们也可以为环境保护做出贡献。减少、再利用和回收等简单行动可以产生重大影响。选择公共交通或电动汽车、节约用水和用电、减少食物浪费都是减少环境影响的有效方式。植树和参与社区清洁活动也是有意义的帮助方式。

教育在环境保护中起着至关重要的作用。通过提高对环境问题的认识，我们可以激励更多人采取行动。教导年轻一代关于可持续性和生态责任对于创造更绿色的未来至关重要。

总之，环境保护需要社会各阶层的集体努力。我们每个人都有责任保护我们的星球。让我们共同努力，为我们自己和子孙后代创造一个可持续的未来。现在是采取行动的时候了。`,
    wordCount: 320,
  },
  {
    id: 'sen-unit-4',
    title: 'The Art of Time Management',
    titleZh: '时间管理的艺术',
    contentEn: `Time is one of the most valuable resources we have, yet it is also the most easily wasted. In our fast-paced world, learning to manage time effectively has become an essential skill for success in both academic and professional settings.

Effective time management begins with setting clear goals. Without specific objectives, we tend to drift and waste time on unimportant activities. By defining what we want to achieve, we can prioritize our tasks and focus our efforts on what truly matters.

Another key aspect of time management is planning. Creating a daily or weekly schedule helps us allocate time wisely. It is important to include not only work and study tasks but also time for rest, exercise, and social activities. A balanced schedule prevents burnout and ensures we maintain our physical and mental well-being.

Prioritization is crucial for making the most of our time. The Eisenhower Matrix is a useful tool that categorizes tasks based on their urgency and importance. We should focus on important but not urgent tasks to prevent them from becoming emergencies. Learning to say no to non-essential commitments is also important for protecting our time.

Eliminating distractions is another important strategy. In the age of smartphones and social media, we are constantly bombarded with notifications and temptations. By turning off unnecessary alerts and creating a dedicated workspace, we can improve our focus and productivity.

Taking regular breaks is counterintuitive but essential. Our brains need rest to function optimally. The Pomodoro Technique, which involves working for focused intervals followed by short breaks, has proven effective for many people.

Finally, we should regularly reflect on how we spend our time. By reviewing our accomplishments and identifying time-wasting patterns, we can continuously improve our time management skills.

In conclusion, time management is a skill that can be developed with practice. By implementing these strategies, we can become more productive, reduce stress, and achieve our goals more efficiently. Remember, time lost cannot be recovered, so let us make the most of every moment.`,
    contentZh: `时间是我们拥有的最宝贵的资源之一，但它也是最容易浪费的。在我们快节奏的世界中，学会有效管理时间已成为学业和职业成功的必备技能。

有效的时间管理始于设定明确的目标。没有具体目标，我们往往会漂泊，在不重要的活动上浪费时间。通过定义我们想要实现什么，我们可以优先处理任务，专注于真正重要的东西。

时间管理的另一个关键方面是规划。创建每日或每周时间表帮助我们明智地分配时间。重要的是不仅要包括工作和学习任务，还要包括休息、锻炼和社交活动的时间。平衡的时间表可以防止倦怠，确保我们保持身心健康。

优先排序对于充分利用我们的时间至关重要。艾森豪威尔矩阵是一个有用的工具，根据任务的紧急性和重要性对其进行分类。我们应该专注于重要但不紧急的任务，以防止它们变成紧急情况。学会对非必要的承诺说不也是保护我们时间的重要策略。

消除干扰是另一个重要策略。在智能手机和社交媒体时代，我们不断受到通知和诱惑的轰炸。通过关闭不必要的提醒并创建专门的工作空间，我们可以提高注意力和生产力。

定期休息是违反直觉的，但却是必要的。我们的大脑需要休息才能最佳运作。番茄工作法已被证明对许多人有效，它包括专注工作一段时间，然后短暂休息。

最后，我们应该定期反思我们如何度过时间。通过回顾我们的成就和识别浪费时间的方式，我们可以不断提高时间管理技能。

总之，时间管理是一项可以通过练习培养的技能。通过实施这些策略，我们可以变得更有效率，减少压力，更高效地实现我们的目标。记住，失去的时间无法挽回，所以让我们充分利用每一刻。`,
    wordCount: 320,
  },
];

// 大学英语课本内容
const universityUnits = [
  {
    id: 'uni-unit-1',
    title: 'The Pursuit of Happiness',
    titleZh: '追求幸福',
    contentEn: `Happiness has been a central theme in human philosophy, literature, and psychology for millennia. The ancient Greeks debated its nature, modern psychologists study its determinants, and each one of us experiences it uniquely in our daily lives. But what truly constitutes lasting happiness, and how can we cultivate it?

Contrary to popular belief, happiness is not merely the accumulation of material wealth or the achievement of external success. While these factors can contribute to momentary pleasure, they rarely provide lasting fulfillment. Research in positive psychology has consistently shown that beyond a certain point, increased income does not significantly increase happiness. This phenomenon is known as the Easterlin paradox.

So what truly contributes to happiness? Studies have identified several key factors. First and foremost is the quality of our relationships. Deep, meaningful connections with family, friends, and romantic partners are among the strongest predictors of happiness. Humans are inherently social beings, and nurturing these bonds provides emotional support and a sense of belonging.

Second, engagement and flow experiences play a crucial role. When we are deeply absorbed in activities that challenge us and match our skills, we experience a state of flow that is intrinsically rewarding. This can come from work, hobbies, or creative pursuits.

Third, having a sense of purpose and meaning in life contributes significantly to happiness. Whether derived from religious beliefs, personal values, or a commitment to a cause greater than ourselves, purpose provides direction and resilience in the face of adversity.

Finally, gratitude and mindfulness practices have been shown to increase happiness. By focusing on what we have rather than what we lack, and by being present in the current moment, we can cultivate a more positive outlook on life.

In conclusion, the pursuit of happiness is a personal journey that requires self-reflection and intentional effort. While external circumstances certainly matter, the key to lasting happiness lies largely within our control. By prioritizing relationships, engagement, purpose, and gratitude, we can build a foundation for a fulfilling and happy life.`,
    contentZh: `几千年来，幸福一直是人类哲学、文学和心理学的核心主题。古希腊人辩论幸福的本质，现代心理学家研究幸福的决定因素，我们每个人在日常生活中都独特地体验着幸福。但究竟什么构成持久的幸福，我们如何培养它？

与普遍看法相反，幸福不仅仅是物质财富的积累或外部成功的实现。虽然这些因素可以带来短暂的快乐，但它们很少提供持久的满足感。积极心理学的研究一致表明，超出一定点后，收入的增加并不会显著增加幸福。这就是所谓的"伊斯特林悖论"。

那么什么真正有助于幸福？研究已经确定了几个关键因素。首先最重要的是我们关系的质量。与家人、朋友和恋人的深层、有意义的联系是幸福最有力的预测因素之一。人类天生是社会性动物，培养这些纽带提供情感支持和归属感。

其次，沉浸体验和心流体验起着至关重要的作用。当我们深度沉浸于具有挑战性且与我们技能相匹配的活动时，我们会体验到一种内在奖励的心流状态。这可能来自工作、爱好或创造性追求。

第三，拥有生活的目标和意义感对幸福贡献显著。无论是来自宗教信仰、个人价值观还是对比我们自身更伟大事业的承诺，目标在逆境中提供方向和韧性。

最后，感恩和正念练习已被证明可以增加幸福。通过关注我们拥有的而不是我们缺乏的，通过存在于当下，我们可以培养更积极的生活观。

总之，追求幸福是一段需要自我反思和有意努力的个人旅程。虽然外部环境当然很重要，但持久幸福的关键在很大程度上掌握在我们手中。通过优先考虑关系、沉浸、目标和感恩，我们可以为充实和幸福的生活奠定基础。`,
    wordCount: 380,
  },
  {
    id: 'uni-unit-2',
    title: 'Artificial Intelligence and the Future of Humanity',
    titleZh: '人工智能与人类的未来',
    contentEn: `Artificial Intelligence stands as perhaps the most transformative technology of our era. From voice assistants to autonomous vehicles, from medical diagnostics to creative arts, AI systems are reshaping virtually every aspect of human society. As we stand on the precipice of this technological revolution, it is imperative that we thoughtfully consider both the tremendous promise and the profound challenges that AI presents.

The potential benefits of AI are staggering. In healthcare, AI algorithms can analyze medical images with superhuman accuracy, detecting diseases earlier and saving countless lives. In environmental science, AI models help predict climate patterns and optimize renewable energy systems. In education, personalized learning systems can adapt to individual student needs, potentially democratizing quality education globally.

However, the rapid advancement of AI also raises significant concerns. The displacement of workers through automation threatens economic stability for millions. Algorithmic bias can perpetuate and amplify existing social inequalities. The concentration of AI power in a few large corporations raises questions about democratic governance and individual autonomy.

Perhaps most pressingly, the development of artificial general intelligence (AGI) - machines with human-level or beyond cognitive capabilities - presents both exhilarating possibilities and existential risks. While such systems remain speculative, leading researchers have called for careful consideration of AI safety and alignment.

The ethical dimensions of AI demand our urgent attention. Questions of privacy, surveillance, and control intersect with fundamental issues of human dignity and freedom. Who bears responsibility when an AI system causes harm? How do we ensure transparency and accountability in systems that often operate as "black boxes"?

Looking forward, the future of human-AI relationship will depend on the choices we make today. It is essential that we develop AI responsibly, with appropriate regulations, diverse perspectives, and human-centered values. The goal should not be to create AI that replaces humans, but rather AI that augments human capabilities and enhances human flourishing.

In conclusion, artificial intelligence represents both an extraordinary opportunity and a profound challenge for humanity. By approaching its development with wisdom, foresight, and ethical consideration, we can harness its potential while mitigating its risks. The story of AI is ultimately the story of humanity itself - a story that we are still writing.`,
    contentZh: `人工智能或许是我们这个时代最具变革性的技术。从语音助手到自动驾驶汽车，从医学诊断到创意艺术，人工智能系统正在重塑人类社会的方方面面。当我们站在这场技术革命的悬崖边上时，我们必须认真考虑人工智能带来的巨大前景和深远挑战。

人工智能的潜在益处是惊人的。在医疗保健领域，人工智能算法可以以超人的准确性分析医学图像，更早地检测疾病，挽救无数生命。在环境科学领域，人工智能模型帮助预测气候模式，优化可再生能源系统。在教育领域，个性化学习系统可以适应个别学生的需求，可能在全球范围内民主化优质教育。

然而，人工智能的快速发展也引发了重大担忧。自动化导致的工人流离失所威胁着数百万人的经济稳定。算法偏见可能延续并放大现有的社会不平等。人工智能权力集中在少数几家大公司引发了关于民主治理和个人自治的问题。

也许最紧迫的是，通用人工智能(AGI)的发展——具有人类水平或更高认知能力的机器——既带来了令人兴奋的可能性，也带来了生存风险。虽然这类系统仍是推测性的，但领先的研究人员已呼吁认真考虑人工智能的安全和对齐。

人工智能的伦理维度需要我们紧急关注。隐私、监督和控制的问题与人类尊严和自由的基本问题相交。当人工智能系统造成伤害时，谁承担责任？我们如何确保往往是"黑箱"运作的系统的透明度和问责制？

展望未来，人类与人工智能的未来关系将取决于我们今天做出的选择。负责任地开发人工智能是必不可少的，要有适当的监管、多样化的视角和以人为本的价值观。目标不应该是创造取代人类的人工智能，而是增强人类能力并促进人类繁荣的人工智能。

总之，人工智能对人类来说既是 extraordinary 的机遇，也是深远的挑战。通过以智慧、远见和道德考量来处理其发展，我们可以利用其潜力，同时降低其风险。人工智能的故事最终是人类自己的故事——一个我们仍在书写的故事。`,
    wordCount: 420,
  },
  {
    id: 'uni-unit-3',
    title: 'Cultural Diversity and Global Citizenship',
    titleZh: '文化多元与全球公民',
    contentEn: `In an increasingly interconnected world, the concept of cultural diversity has become both a celebration and a challenge. As migration, trade, and digital communication bring people from different backgrounds into closer contact, we must navigate the complex terrain between cultural preservation and global integration.

Cultural diversity enriches humanity in countless ways. Different cultures offer unique perspectives on fundamental questions of existence, from the meaning of life to approaches to education, from artistic expression to conflict resolution. This tapestry of human experience represents an invaluable heritage that must be preserved for future generations.

However, cultural differences can also be sources of conflict. Misunderstanding, prejudice, and intolerance often arise when people from different backgrounds fail to appreciate or understand each other. In a world with weapons of mass destruction, such cultural misunderstandings can have catastrophic consequences.

The concept of global citizenship offers a framework for navigating this complex landscape. A global citizen is someone who identifies with a broader community beyond national boundaries and who takes responsibility for contributing to that community's well-being. This does not mean abandoning one's cultural identity, but rather supplementing it with a sense of planetary stewardship.

Developing global citizenship requires several competencies. First, we need cultural literacy - an understanding of different cultural practices, values, and histories. This knowledge helps us avoid misunderstandings and fosters genuine appreciation for cultural differences. Second, we need empathy - the ability to understand and share the feelings of those from different backgrounds. Third, we need critical thinking skills to navigate the complex global information landscape and distinguish fact from fiction.

Education plays a crucial role in developing global citizens. By exposing students to diverse perspectives and encouraging cross-cultural dialogue, schools can help young people develop the skills and attitudes necessary for life in an interconnected world.

In conclusion, cultural diversity is both a gift and a responsibility. As we move toward an increasingly globalized future, we must work to preserve the richness of cultural heritage while also cultivating a sense of global citizenship. Only by embracing both our unique cultural identities and our shared humanity can we build a more peaceful and prosperous world for all.`,
    contentZh: `在一个日益互联的世界中，文化多元化的概念既是一种庆祝，也是一种挑战。当移民、贸易和数字通信将不同背景的人带入更密切的联系时，我们必须驾驭文化遗产保护和全球整合之间的复杂领域。

文化多元化以无数种方式丰富了人类。不同文化为存在的基本问题提供了独特的视角，从人生的意义到教育方法，从艺术表达到冲突解决。这幅人类经验的挂毯代表着一份宝贵的遗产，必须为子孙后代保存。

然而，文化差异也可能是冲突的来源。当来自不同背景的人不能欣赏或理解彼此时，误解、偏见和不容忍往往会产生。在一个拥有大规模杀伤性武器的世界里，这种文化误解可能产生灾难性后果。

全球公民的概念为驾驭这一复杂领域提供了框架。全球公民是认同超越国界的更广泛社区并为该社区福祉做出贡献的人。这并不意味着放弃文化认同，而是以星球管理者的感觉来补充它。

发展全球公民身份需要几种能力。首先，我们需要文化素养——对不同文化习俗、价值观和历史的理解。这种知识帮助我们避免误解，促进对文化差异的真正欣赏。其次，我们需要同理心——理解和分享来自不同背景的人感受的能力。第三，我们需要批判性思维技能，以驾驭复杂的全球信息景观，区分事实与虚构。

教育在培养全球公民方面起着至关重要的作用。通过让学生接触不同视角并鼓励跨文化对话，学校可以帮助年轻人培养在互联世界中生活所需的态度和技能。

总之，文化多元化既是礼物也是责任。当我们走向日益全球化的未来时，我们必须在努力保护文化遗产丰富性的同时培养全球公民意识。只有既拥抱我们独特的文化认同又拥抱我们共同的人性，我们才能为所有人建设一个更和平、更繁荣的世界。`,
    wordCount: 360,
  },
  {
    id: 'uni-unit-4',
    title: 'The Ethics of Climate Change',
    titleZh: '气候变化的伦理',
    contentEn: `Climate change represents one of the most profound ethical challenges humanity has ever faced. While the science of climate change is increasingly clear, the moral dimensions of how we respond to this crisis remain contested. At its core, climate change forces us to confront fundamental questions about justice, responsibility, and our obligations to future generations.

The ethical dimensions of climate change are multidimensional. First, there is the issue of causation. Those who have contributed least to greenhouse gas emissions - particularly developing nations and poor communities - are often the most vulnerable to climate impacts. This raises profound questions of climate justice. Wealthy nations that have benefited from industrialization bear a historical responsibility for the current climate crisis.

Second, there is the challenge of intergenerational justice. The decisions we make today about fossil fuel extraction and emissions will shape the world inherited by future generations. Do we have the right to deplete resources and leave future populations to deal with the consequences? Most ethical frameworks would argue that we have obligations to those who will come after us.

Third, climate change raises questions about our relationship with the natural world. Traditional Western ethics has often viewed nature as a resource for human use. However, many indigenous cultures and religious traditions hold that nature has intrinsic value beyond its utility to humans. Climate change challenges us to reconsider our place in the natural order.

The responses to climate change also have ethical implications. Climate mitigation policies will inevitably affect different groups differently. Carbon pricing, for example, can be regressive if not designed carefully. Adaptation measures may prioritize certain communities over others. Climate finance and technology transfer from rich to poor nations raise questions about global solidarity.

From an ethical perspective, several principles should guide our response to climate change. The precautionary principle suggests that when faced with uncertain but potentially catastrophic outcomes, we should err on the side of caution. The principle of common but differentiated responsibilities recognizes that while all nations must contribute to solutions, their capacities differ. The principle of sustainable development calls for meeting present needs without compromising the ability of future generations to meet their own.

In conclusion, climate change is not merely a technical or economic challenge - it is fundamentally an ethical one. Addressing it requires not only technological innovation and policy reform but also a deeper reflection on our values and our responsibilities to each other and to the planet. Only by confronting the ethical dimensions of this crisis can we develop solutions that are just, equitable, and sustainable.`,
    contentZh: `气候变化代表了人类面临的最深刻的伦理挑战之一。虽然气候变化的科学越来越清晰，但我们如何应对这场危机的道德层面仍然存在争议。核心上，气候变化迫使我们面对关于正义、责任和我们对后代义务的基本问题。

气候变化的伦理维度是多维的。首先，是因果关系的问题。那些对温室气体排放贡献最少的人——特别是发展中国家和贫困社区——往往最容易受到气候变化的影响。这引发了气候正义的深刻问题。富裕国家从工业化中获益，对当前的气候危机负有历史责任。

其次，是代际间正义的挑战。我们今天关于化石燃料开采和排放的决定将塑造后代继承的世界。我们有权耗尽资源并让未来的人口去应对后果吗？大多数伦理框架会认为我们对那些将要到来的人负有义务。

第三，气候变化引发了我们与自然世界关系的问题。传统的西方伦理往往将自然视为供人类使用的资源。然而，许多土著文化和宗教传统认为自然具有超越其对人类有用性的内在价值。气候变化挑战我们重新考虑我们在自然秩序中的位置。

应对气候变化的方式也有伦理含义。气候缓解政策将不可避免地影响不同的群体。例如，碳定价如果不精心设计可能是退步的。适应措施可能优先考虑某些社区而不是其他社区。气候资金和技术从富国转移到穷国引发关于全球团结的问题。

从伦理角度来看，几个原则应该指导我们应对气候变化。预防原则表明，当面对不确定但可能灾难性的结果时，我们应该谨慎行事。共同但有区别的责任原则认识到，虽然所有国家都必须为解决方案做出贡献，但它们的能力不同。可持续发展的原则要求满足当前需求而不损害后代满足自己需求的能力。

总之，气候变化不仅是技术或经济挑战——它根本上是伦理挑战。应对它不仅需要技术创新和政策改革，还需要更深入地反思我们的价值观以及我们对彼此和地球的责任。只有正视这场危机的伦理维度，我们才能开发出公正、公平和可持续的解决方案。`,
    wordCount: 400,
  },
];

// 创建课程数据
export const courses: Course[] = [
  {
    id: 'ele-course-1',
    title: 'PEP Primary English',
    titleZh: '人教版小学英语',
    level: 'elementary',
    grade: 'Grade 3-4',
    publisher: 'People\'s Education Press',
    coverColor: 'from-green-400 to-emerald-600',
    description: '人教版PEP小学英语教材，适合3-4年级学生',
    units: elementaryUnits,
  },
  {
    id: 'jun-course-1',
    title: 'Go for It!',
    titleZh: '人教版初中英语',
    level: 'junior',
    grade: 'Grade 7-9',
    publisher: 'People\'s Education Press',
    coverColor: 'from-blue-400 to-indigo-600',
    description: '人教版Go for It!初中英语教材，适合7-9年级学生',
    units: juniorUnits,
  },
  {
    id: 'sen-course-1',
    title: 'New College English',
    titleZh: '人教版高中英语',
    level: 'senior',
    grade: 'Grade 10-12',
    publisher: 'People\'s Education Press',
    coverColor: 'from-purple-400 to-violet-600',
    description: '人教版高中英语教材，适合10-12年级学生',
    units: seniorUnits,
  },
  {
    id: 'uni-course-1',
    title: 'College English',
    titleZh: '大学英语',
    level: 'university',
    grade: 'College',
    publisher: 'Higher Education Press',
    coverColor: 'from-amber-400 to-orange-600',
    description: '高等教育出版社大学英语教材，适合大学生',
    units: universityUnits,
  },
];

// 按等级获取课程
export const getCoursesByLevel = (level: string): Course[] => {
  return courses.filter(course => course.level === level);
};

// 根据ID获取课程
export const getCourseById = (courseId: string): Course | undefined => {
  return courses.find(course => course.id === courseId);
};

// 根据单元ID获取单元
export const getUnitById = (courseId: string, unitId: string): CourseUnit | undefined => {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  return course.units.find(unit => unit.id === unitId);
};
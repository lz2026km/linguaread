import { Course, CourseUnit } from '../types';

// ============================================================
// 人教版小学英语 PEP（三年级起点）3-6年级共24个单元
// ============================================================
const elementaryUnits: CourseUnit[] = [
  // ===== 三年级上册（Grade 3 Semester 1）=====
  {
    id: 'ele-g3s1-u1',
    title: 'Hello!',
    titleZh: '你好！',
    contentEn: `Hello! My name is Chen Yang. I am eight years old. I am in Class One, Grade Three. Nice to meet you!

Good morning, Miss Wang! Good morning! How are you? I am fine, thank you. And you? I am fine, too.

This is my school. It is big and beautiful. There are many classrooms and a big playground. I like my school very much.

I have a new friend. His name is Mike. He is from the USA. He is tall and friendly. We often play together at recess. We are good friends now!`,
    contentZh: `你好！我叫陈阳。我今年八岁了。我在三年级一班。很高兴认识你！

早上好，王老师！早上好！你好吗？我很好，谢谢。你呢？我也很好。

这是我的学校。它又大又美丽。有很多教室和一个大的操场。我非常喜欢我的学校。

我有一个新朋友。他叫麦克。他来自美国。他又高又友好。我们常常在下课时一起玩。我们现在是好朋友了！`,
    wordCount: 108,
  },
  {
    id: 'ele-g3s1-u2',
    title: 'Colours',
    titleZh: '颜色',
    contentEn: `Red, yellow, blue, green, orange, purple, pink and white. These are beautiful colours! I can see colours everywhere.

Look at my balloon! It is red. Very nice! What colour is your bag? My bag is blue.

The sky is blue. The sun is yellow. The grass is green. The clouds are white. Colours make our world beautiful!

I like blue best. What about you? What is your favourite colour?`,
    contentZh: `红色、黄色、蓝色、绿色、橙色、紫色、粉色和白色。这些是美丽的颜色！我到处都能看到颜色。

看我的气球！它是红色的。真好看！你的书包是什么颜色？我的书包是蓝色的。

天空是蓝色的。太阳是黄色的。草地是绿色的。云是白色的。颜色使我们的世界变得美丽！

我最喜欢蓝色。你呢？你最喜欢什么颜色？`,
    wordCount: 98,
  },
  {
    id: 'ele-g3s1-u3',
    title: 'Look at Me!',
    titleZh: '看我！',
    contentEn: `This is my face. I have two eyes, one nose and one mouth. I can see with my eyes. I can smell with my nose.

How are you today? I am happy! I am sad. I am tired. I am excited.

Touch your head. Touch your face. Touch your nose. Touch your ears. Touch your eyes. Touch your mouth. Great job!

I can draw a face. Two eyes, one nose and one mouth. This is me!`,
    contentZh: `这是我的脸。我有两只眼睛、一个鼻子和一张嘴。我用眼睛看东西。我用鼻子闻味道。

你今天怎么样？我很开心！我很伤心。我很累。我很兴奋。

摸摸你的头。摸摸你的脸。摸摸你的鼻子。摸摸你的耳朵。摸摸你的眼睛。摸摸你的嘴巴。真棒！

我会画一张脸。两只眼睛、一个鼻子和一张嘴。这是我！`,
    wordCount: 92,
  },
  {
    id: 'ele-g3s1-u4',
    title: 'We Love Animals',
    titleZh: '我们爱动物',
    contentEn: `I love animals! What is this? It is a bird. It is small and can fly. What is that? That is a panda. It is from China. It is cute!

Look at the elephant! It is big. It has a long nose. The elephant can drink water with its nose. How interesting!

I have a dog. Its name is Wangwang. It is brown and white. It likes to run and play. It is my good friend.

We should protect animals. They are our friends.`,
    contentZh: `我喜欢动物！这是什么？它是一只鸟。它很小，会飞。那是什么？那是熊猫。它来自中国。它很可爱！

看那只大象！它很大。它有一个长长的鼻子。大象能用鼻子喝水。真有趣！

我有一只狗。它叫汪汪。它是棕色和白色的。它喜欢跑和玩。它是我的好朋友。

我们应该保护动物。它们是我们的朋友。`,
    wordCount: 98,
  },
  {
    id: 'ele-g3s1-u5',
    title: "Let's Eat!",
    titleZh: '一起吃东西吧！',
    contentEn: `I am hungry! I would like some bread, please. Here you are. Thank you! You are welcome.

I like milk and eggs. I like juice and rice. What would you like? I would like some water, please.

Have some cake, Tom. No, thank you. Have some fruit. Oh, yes, please! An apple a day keeps the doctor away!

Breakfast is important. Lunch is important. Dinner is important. We should eat three meals a day. Healthy food makes us strong!`,
    contentZh: `我饿了！我想要一些面包。给你。谢谢！不客气。

我喜欢牛奶和鸡蛋。我喜欢果汁和米饭。你想要什么？我想要一些水。

吃点蛋糕吧，汤姆。不，谢谢。吃点水果吧。哦，好的，请给我一个！一天一苹果，医生远离我！

早餐很重要。午餐很重要。晚餐很重要。我们应该每天吃三顿饭。健康食物使我们强壮！`,
    wordCount: 98,
  },
  {
    id: 'ele-g3s1-u6',
    title: 'Happy Birthday!',
    titleZh: '生日快乐！',
    contentEn: `Happy birthday to you! Happy birthday to you! Today is my birthday. I am nine years old now!

How old are you, Li Ming? I am nine. How about you? I am eight. Nice!

I have many gifts. A red pencil, a blue bag, a big cake and some flowers. Thank you, Mum and Dad! You are the best!

Let's eat the birthday cake! One, two, three... Make a wish! I wish for a new bicycle.`,
    contentZh: `祝你生日快乐！祝你生日快乐！今天是我的生日。我现在九岁了！

你几岁了，李明？我九岁了。你呢？我八岁了。真好！

我有很多礼物。一支红色的铅笔、一个蓝色的书包、一个大的生日蛋糕和一些花。谢谢爸爸妈妈！你们是最棒的！

让我们吃生日蛋糕吧！一、二、三……许个愿吧！我希望得到一辆新自行车。`,
    wordCount: 95,
  },
  // ===== 三年级下册（Grade 3 Semester 2）=====
  {
    id: 'ele-g3s2-u1',
    title: 'Welcome Back to School!',
    titleZh: '欢迎回到学校！',
    contentEn: `Welcome back to school! Nice to see you again! Nice to see you, too!

I have a new teacher. Her name is Miss White. She is from the UK. She teaches us English. She is kind and beautiful.

This is my friend, Amy. She is from Canada. She has big eyes and brown hair. We are in the same class.

I have a new schoolbag. It is blue and white. I have many new books in it. I am happy to be back at school!`,
    contentZh: `欢迎回到学校！很高兴又见到你了！我也很高兴见到你！

我有一位新老师。她叫怀特老师。她来自英国。她教我们英语。她很善良很美丽。

这是我的朋友，艾米。她来自加拿大。她有大大的眼睛和棕色的头发。我们在同一个班。

我有一个新书包。它是蓝白相间的。里面有好多新书。我很高兴回到学校！`,
    wordCount: 92,
  },
  {
    id: 'ele-g3s2-u2',
    title: 'My Family',
    titleZh: '我的家人',
    contentEn: `This is my family. There are four people in my family. My father, my mother, my sister and me.

My father is a doctor. He works in a hospital. He wears a white coat. He is busy but kind.

My mother is a teacher. She teaches in a primary school. She is very patient. She cooks delicious food for us every day.

My sister is a student too. She is in Grade Five. She likes to draw pictures. I love my family!`,
    contentZh: `这是我的家人。我家有四口人。爸爸、妈妈、姐姐和我。

我爸爸是一名医生。他在医院工作。他穿着白大褂。他很忙但很善良。

我妈妈是一名老师。她在一所小学教书。她很有耐心。她每天为我们做美味的饭菜。

我姐姐也是一名学生。她上五年级了。她喜欢画画。我爱我的家人！`,
    wordCount: 92,
  },
  {
    id: 'ele-g3s2-u3',
    title: 'At the Zoo',
    titleZh: '在动物园',
    contentEn: `Today we go to the zoo. I am so excited! Look at the giraffe! It is so tall. It has a very long neck.

The elephant has a long nose and big ears. It can splash water. The monkey is so funny! It climbs up and down the tree.

The panda is black and white. It eats bamboo. It is shy. The tiger is scary. It has sharp teeth.

I love all the animals. Animals are interesting and wonderful!`,
    contentZh: `今天我们去动物园。我太兴奋了！看那只长颈鹿！它好高啊。它有长长的脖子。

大象有长长的鼻子和大大的耳朵。它能喷水。猴子太好笑了！它上下爬树。

熊猫是黑白相间的。它吃竹子。它很害羞。老虎很可怕。它有尖尖的牙齿。

我喜欢所有的动物。动物真有趣真奇妙！`,
    wordCount: 95,
  },
  {
    id: 'ele-g3s2-u4',
    title: 'Where Is My Car?',
    titleZh: '我的小汽车在哪里？',
    contentEn: `Where is my car? Is it in the toy box? No, it is not. Is it under the chair? Yes, it is there!

I have many toys. A ball, a doll, a car and some books. I put them in the toy box after playing.

Mum, where is my schoolbag? Is it on the desk? No, it is not. Is it in your bedroom? Oh, yes! Here it is!

I need to be more organized. I should put things in the right place every time.`,
    contentZh: `我的小汽车在哪里？它在玩具箱里吗？不，它不在。它在椅子下面吗？是的，它在那里！

我有很多玩具。一个球、一个娃娃、一辆小汽车和一些书。玩完之后我把它们放进玩具箱。

妈妈，我的书包在哪里？它在桌子上吗？不，它不在。它在你的卧室里吗？哦，是的！找到了！

我需要更有条理。我应该每次把东西放在正确的地方。`,
    wordCount: 95,
  },
  {
    id: 'ele-g3s2-u5',
    title: 'Do You Like Pears?',
    titleZh: '你喜欢梨吗？',
    contentEn: `Do you like pears? Yes, I do. They are sweet and juicy. Do you like apples? No, I do not like apples.

I like bananas. They are yellow and delicious. I like oranges. They are round and sweet. What about you?

I do not like grapes. They are too sour. But my brother likes grapes very much. Everyone has different tastes.

Fruits are good for us. We should eat more fruits and vegetables every day. An apple a day keeps the doctor away!`,
    contentZh: `你喜欢梨吗？是的，我喜欢。它们又甜又多汁。你喜欢苹果吗？不，我不喜欢苹果。

我喜欢香蕉。它们是黄色的，很好吃。我喜欢橙子。它们又圆又甜。你呢？

我不喜欢葡萄。它们太酸了。但我哥哥非常喜欢葡萄。每个人口味不同。

水果对我们有好处。我们应该每天多吃水果和蔬菜。一天一个苹果，医生远离我！`,
    wordCount: 95,
  },
  {
    id: 'ele-g3s2-u6',
    title: 'How Many?',
    titleZh: '有多少？',
    contentEn: `One, two, three, four, five, six, seven, eight, nine, ten. I can count from one to ten now!

Look at the blackboard! How many books do you see? One, two, three... I see ten books. Very good!

I have eleven pencils in my pencil box. I have twelve crayons. How many rulers do you have? I have eight rulers.

Counting is fun! We can count everything. How many stars can you count in the sky?`,
    contentZh: `一、二、三、四、五、六、七、八、九、十。我现在能从一数到十了！

看黑板！你能看到多少本书？一、二、三……我看到了十本书。非常好！

我的铅笔盒里有十一支铅笔。我有十二支蜡笔。你有多少把尺子？我有八把尺子。

数数真有趣！我们可以数任何东西。你能数到天上有多少颗星星吗？`,
    wordCount: 95,
  },
  // ===== 四年级上册（Grade 4 Semester 1）=====
  {
    id: 'ele-g4s1-u1',
    title: 'My Classroom',
    titleZh: '我的教室',
    contentEn: `This is my classroom. It is big and clean. There is a blackboard, a teacher's desk and many chairs.

Where is the map? It is on the wall. Where is the clock? It is on the wall, too.

I sit near the window. I can see the garden from my seat. It is very nice and peaceful.

We clean the classroom every day. We keep it clean and tidy. I love my classroom!`,
    contentZh: `这是我的教室。它又大又干净。有一块黑板、一张讲台和很多椅子。

地图在哪里？它在墙上。时钟在哪里？它也在墙上。

我坐在窗户旁边。我可以从座位上看到花园。它非常美丽和宁静。

我们每天打扫教室。我们保持它干净整洁。我爱我的教室！`,
    wordCount: 98,
  },
  {
    id: 'ele-g4s1-u2',
    title: 'School Things',
    titleZh: '学习用品',
    contentEn: `I have a new pencil box. It is blue and beautiful. In my pencil box, I have pencils, erasers and rulers.

May I use your pencil? Sure! Here you are. Thank you! You are welcome.

I need a pen. I need some paper. I need my notebook. I need my schoolbag.

Being organized with school things is important. I always keep my things in order.`,
    contentZh: `我有一个新的铅笔盒。它是蓝色的，很漂亮。在我的铅笔盒里，我有铅笔、橡皮和尺子。

我可以用一下你的铅笔吗？当然！给你。谢谢！不客气。

我需要一支笔。我需要一些纸。我需要我的笔记本。我需要我的书包。

整理好学习用品很重要。我总是把我的东西整理得井井有条。`,
    wordCount: 95,
  },
  {
    id: 'ele-g4s1-u3',
    title: 'Food and Drinks',
    titleZh: '食物和饮料',
    contentEn: `I am hungry after class. I go to the school shop. I would like a hamburger and some juice.

What would you like? I would like some rice and vegetables. I do not like hot food.

My favourite food is dumplings. They are delicious! My mother makes the best dumplings in the world.

Drinking water is important. I drink eight glasses of water every day. Water is good for my health.`,
    contentZh: `下课后我很饿。我去学校的小卖部。我想要一个汉堡和一些果汁。

你想要什么？我想要一些米饭和蔬菜。我不喜欢辣的食物。

我最喜欢的食物是饺子。饺子很好吃！我妈妈做的饺子是世界上最好吃的。

喝水很重要。我每天喝八杯水。水对我的健康有好处。`,
    wordCount: 95,
  },
  {
    id: 'ele-g4s1-u4',
    title: 'Vegetables',
    titleZh: '蔬菜',
    contentEn: `Vegetables are good for us. I eat tomatoes and potatoes every day. They are healthy and delicious.

Do you like carrots? Yes, I do. They are sweet and good for my eyes.

I do not like onions. They make me cry! But my father says they are very nutritious.

We should eat more vegetables. Green vegetables like spinach and broccoli are super healthy!`,
    contentZh: `蔬菜对我们有好处。我每天吃西红柿和土豆。它们健康又好吃。

你喜欢胡萝卜吗？是的，我喜欢。它们甜甜的，对眼睛有好处。

我不喜欢洋葱。它们让我流泪！但是我爸爸说它们很有营养。

我们应该多吃蔬菜。绿叶蔬菜如菠菜和西兰花超级健康！`,
    wordCount: 92,
  },
  {
    id: 'ele-g4s1-u5',
    title: 'Weather',
    titleZh: '天气',
    contentEn: `What is the weather like today? It is sunny and warm. It is a beautiful day!

Yesterday it was rainy and cool. I brought my umbrella and wore my raincoat.

In spring, the weather is warm and windy. In summer, it is hot and sunny.

I like sunny days best. What is your favourite weather? I like snowy days too!`,
    contentZh: `今天天气怎么样？天气晴朗又暖和。这是美好的一天！

昨天又下雨又凉爽。我带了雨伞，穿了雨衣。

春天，天气温暖又多风。夏天，天气炎热又阳光充足。

我最喜欢晴天。你呢？我也喜欢下雪天！`,
    wordCount: 95,
  },
  {
    id: 'ele-g4s1-u6',
    title: 'Seasons',
    titleZh: '季节',
    contentEn: `There are four seasons in a year: spring, summer, autumn and winter. Each season is beautiful in its own way.

In spring, flowers bloom and birds sing. The weather is warm and comfortable. It is the best season for outings.

In summer, it is very hot. Children love to swim in summer. In autumn, leaves turn yellow and fall.

Winter is cold and snowy. Children can make snowmen and go skating. Every season brings us joy!`,
    contentZh: `一年有四个季节：春、夏、秋、冬。每个季节都有自己的美。

春天，花儿盛开，鸟儿歌唱。天气温暖舒适。这是最适合郊游的季节。

夏天，天气很热。孩子们喜欢在夏天游泳。秋天，叶子变黄飘落。

冬天寒冷又下雪。孩子们可以堆雪人、滑雪。每个季节都给我们带来快乐！`,
    wordCount: 95,
  },
  // ===== 四年级下册（Grade 4 Semester 2）=====
  {
    id: 'ele-g4s2-u1',
    title: 'My Town',
    titleZh: '我的城镇',
    contentEn: `I live in a small town. There is a park, a supermarket and a hospital near my home.

Where is the post office? It is next to the bank. The bank is across from the school.

I usually walk to school. It takes about fifteen minutes. My school is not far from my home.

My town is quiet and beautiful. I love my town very much!`,
    contentZh: `我住在一个小镇上。我家附近有一个公园、一个超市和一家医院。

邮递局在哪里？它在银行旁边。银行在学校对面。

我通常走路去学校。大约需要十五分钟。我的学校离家不远。

我的小镇安静又美丽。我非常喜欢我的小镇！`,
    wordCount: 98,
  },
  {
    id: 'ele-g4s2-u2',
    title: 'What Time Is It?',
    titleZh: '现在几点了？',
    contentEn: `What time is it? It is seven o'clock. Time for breakfast! It is eight o'clock. Time for class!

I get up at six thirty every morning. I go to school at seven forty-five.

Classes start at eight thirty. We have four classes in the morning and two in the afternoon.

It is four thirty. School is over! I go home and do my homework first, then play.`,
    contentZh: `现在几点了？七点了。该吃早餐了！八点了。该上课了！

我每天早上六点半起床。七点四十五分去上学。

八点半开始上课。上午有四节课，下午有两节课。

四点半了。放学了！我回家先做作业，然后玩耍。`,
    wordCount: 95,
  },
  {
    id: 'ele-g4s2-u3',
    title: 'Clothes',
    titleZh: '衣服',
    contentEn: `It is cold today. I wear my warm coat and scarf. I also wear my gloves and boots.

What are you wearing? I am wearing a blue sweater and grey pants. I look smart!

In summer, I wear T-shirts and shorts. They are cool and comfortable.

We should wear appropriate clothes for different weather. It keeps us healthy!`,
    contentZh: `今天很冷。我穿着暖和的外套和围巾。我也戴着手套和靴子。

你穿着什么？我穿着蓝色毛衣和灰色裤子。我看起来很精神！

夏天，我穿T恤和短裤。它们凉爽又舒服。

我们应该根据不同天气穿合适的衣服。这样能保持健康！`,
    wordCount: 92,
  },
  {
    id: 'ele-g4s2-u4',
    title: 'Hobbies',
    titleZh: '爱好',
    contentEn: `What are your hobbies? I like reading books and drawing pictures. I also like singing and dancing.

My brother likes playing football. He plays football every Saturday with his friends.

I collect stamps. I have stamps from many countries. Some are very old and valuable.

Hobbies make our life interesting and enjoyable. Everyone should have a hobby!`,
    contentZh: `你的爱好是什么？我喜欢读书和画画。我也喜欢唱歌跳舞。

我哥哥喜欢踢足球。他每周六和朋友们踢足球。

我收集邮票。我有来自很多国家的邮票。有些很旧，很珍贵。

爱好让我们的生活有趣愉快。每个人都应该有一个爱好！`,
    wordCount: 95,
  },
  {
    id: 'ele-g4s2-u5',
    title: 'Chores',
    titleZh: '家务',
    contentEn: `I help my mother with chores at home. I make my bed every morning before school.

I also set the table for dinner. After dinner, I wash the dishes. It is not too hard.

I sweep the floor on weekends. I water the flowers every day. My parents say I am a helpful child.

Doing chores teaches me to be responsible. Every family member should contribute!`,
    contentZh: `我在家帮妈妈做家务。每天早上上学前，我整理床铺。

我也摆餐桌准备晚餐。晚餐后，我洗碗。不是很辛苦。

我周末扫地。我每天浇花。爸爸妈妈说我是个有用的孩子。

做家务教会我负责任。每个家庭成员都应该出一份力！`,
    wordCount: 95,
  },
  {
    id: 'ele-g4s2-u6',
    title: 'Review',
    titleZh: '复习',
    contentEn: `We review what we have learned this semester. We review words, sentences and dialogues.

I can introduce myself in English now. I can describe my family, my school and my hobbies.

I can talk about the weather and the seasons. I can count numbers and tell the time.

I have learned so much! I am proud of myself. Next semester, I will learn even more!`,
    contentZh: `我们复习这学期学到的东西。我们复习单词、句子和对话。

我现在能用英语介绍自己了。我能描述我的家人、学校和爱好。

我能谈论天气和季节。我能数数字和报时间。

我学到了这么多！我为自己感到骄傲。下学期，我会学到更多！`,
    wordCount: 92,
  },
  // ===== 五年级上册（Grade 5 Semester 1）=====
  {
    id: 'ele-g5s1-u1',
    title: 'My Day',
    titleZh: '我的一天',
    contentEn: `I have a busy day every day. I get up at six thirty. I brush my teeth and wash my face, then have breakfast.

I go to school at seven thirty. Classes start at eight. I have math, Chinese, English and other subjects.

After school, I do my homework first. Then I practice the piano for one hour. After that, I play with my friends.

I go to bed at nine thirty. Every day is busy but meaningful!`,
    contentZh: `我每天都很忙。六点半起床。刷牙洗脸，然后吃早餐。

七点半去上学。八点开始上课。我有数学、语文、英语和其他科目。

放学后，我首先做作业。然后练习钢琴一小时。之后，和朋友们玩。

九点半上床睡觉。每天都很忙但很有意义！`,
    wordCount: 98,
  },
  {
    id: 'ele-g5s1-u2',
    title: 'Physical Appearance',
    titleZh: '外貌',
    contentEn: `What does your mother look like? She is tall and has long black hair. She has kind eyes.

My father is of medium height. He has short hair and wears glasses. He looks very smart.

I take after my mother. I have her eyes and smile. My brother takes after our father.

Everyone has a unique appearance. That is what makes us special!`,
    contentZh: `你妈妈长什么样？她很高，有一头长长的黑发。她有慈祥的眼睛。

我爸爸中等身材。他留着短发，戴眼镜。他看起来很帅。

我随我妈妈。我有她的眼睛和微笑。我哥哥随我们爸爸。

每个人都有独特的外貌。这就是让我们特别的地方！`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s1-u3',
    title: 'Clothing',
    titleZh: '服装',
    contentEn: `I like wearing casual clothes on weekends. I wear T-shirts and jeans. They are comfortable.

For school, I wear a uniform. It is a white shirt and blue pants or skirt. I look neat and tidy.

What should I wear for the party? You could wear a dress or a suit. You will look wonderful!

Different occasions need different clothing. It is important to dress appropriately!`,
    contentZh: `周末我喜欢穿休闲装。我穿T恤和牛仔裤。它们很舒服。

上学时，我穿校服。是白色衬衫和蓝色裤子或裙子。我看起来整洁又精神。

参加聚会我应该穿什么？你可以穿连衣裙或西装。你会很漂亮的！

不同场合需要不同的服装。穿得得体很重要！`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s1-u4',
    title: 'Hobbies',
    titleZh: '爱好',
    contentEn: `What are your hobbies? I like collecting stamps and reading novels in my free time.

My friend Peter likes taking photos. He has a beautiful camera. He takes photos of everything beautiful.

Another hobby of mine is gardening. I grow flowers in my small garden. They bloom beautifully every spring.

Hobbies enrich our lives. They help us relax and learn new things. What is your hobby?`,
    contentZh: `你的爱好是什么？我喜欢在空闲时间收集邮票和读小说。

我的朋友彼得喜欢摄影。他有一台漂亮的相机。他拍摄所有美丽的事物。

我的另一个爱好是园艺。我在我小花园里种花。它们每年春天都很美丽地绽放。

爱好丰富我们的生活。它们帮助我们放松和学习新事物。你的爱好是什么？`,
    wordCount: 98,
  },
  {
    id: 'ele-g5s1-u5',
    title: 'Animals',
    titleZh: '动物',
    contentEn: `I am interested in wild animals. The lion is called the king of the animal world. It is strong and powerful.

The cheetah is the fastest land animal. It can run as fast as a car on the highway.

Dolphins are very intelligent. They can understand human commands and perform amazing tricks.

We must protect endangered animals. They are in danger of disappearing forever. Let us save them!`,
    contentZh: `我对野生动物感兴趣。狮子被称为动物世界的国王。它强壮有力。

猎豹是跑得最快的陆地动物。它能像高速公路上的汽车一样快。

海豚非常聪明。它们能理解人类的命令，表演精彩的把戏。

我们必须保护濒危动物。它们面临永远消失的危险。让我们拯救它们！`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s1-u6',
    title: 'Places',
    titleZh: '场所',
    contentEn: `There are many interesting places in our city. The science museum is very popular. I learned a lot there.

The library is quiet and peaceful. Many people go there to read and study. It is my favourite place.

The amusement park is exciting. There are many fun rides and games. Children love it!

The hospital is important but not fun. When we are sick, we go there to see the doctor.`,
    contentZh: `我们城市有很多有趣的地方。科学博物馆很受欢迎。我在那里学到了很多。

图书馆安静祥和。很多人去那里读书和学习。那是我最喜欢的地方。

游乐园很刺激。有很多好玩的游乐设施和游戏。孩子们都喜欢！

医院重要但不好玩。当我们生病时，我们去那里看医生。`,
    wordCount: 95,
  },
  // ===== 五年级下册（Grade 5 Semester 2）=====
  {
    id: 'ele-g5s2-u1',
    title: 'School Subjects',
    titleZh: '学校科目',
    contentEn: `What subjects do you have this term? We have Chinese, Math, English, Science, Art, Music and PE.

My favourite subject is Science. We do fun experiments and learn about the world around us.

I also like English very much. Miss Wang is our English teacher. She makes the class interesting and lively.

What is your favourite subject? I like Math because it challenges my brain. Solving problems is exciting!`,
    contentZh: `这学期你有哪些科目？我们有语文、数学、英语、科学、美术、音乐和体育。

我最喜欢的科目是科学。我们做有趣的实验，了解我们周围的世界。

我也非常喜欢英语。王老师是我们的英语老师。她让课堂有趣又生动。

你最喜欢什么科目？我喜欢数学，因为它挑战我的大脑。解决问题真让人兴奋！`,
    wordCount: 98,
  },
  {
    id: 'ele-g5s2-u2',
    title: 'Weekend Activities',
    titleZh: '周末活动',
    contentEn: `What do you usually do on weekends? On Saturday morning, I sleep late. It is so nice to rest!

In the afternoon, I often play basketball with my friends at the community court. It is great exercise.

On Sunday, I go to the park with my family. We have a picnic and enjoy the sunshine.

Sometimes I visit my grandparents. They live in the countryside. The air there is fresh and clean.`,
    contentZh: `你周末通常做什么？周六早上，我睡懒觉。休息真好！

下午，我经常和朋友们在社区篮球场打篮球。这是很棒的运动。

周日，我和家人去公园。我们野餐，享受阳光。

有时候我去探望爷爷奶奶。他们住在乡下。那里的空气清新干净。`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s2-u3',
    title: 'Plans',
    titleZh: '计划',
    contentEn: `What are you going to do this summer? I am going to travel to Beijing with my family.

We are going to visit the Great Wall. It is one of the greatest wonders in the world!

I am also going to learn swimming this summer. It will be a useful skill to have.

Do you have any plans? I am going to read more books and practice my English. Reading makes me smarter!`,
    contentZh: `这个夏天你打算做什么？我要和家人去北京旅游。

我们要去参观长城。它是世界上最伟大的奇迹之一！

这个夏天我还打算学游泳。这将是一项有用的技能。

你有什么计划吗？我打算读更多的书，练习英语。阅读让我更聪明！`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s2-u4',
    title: 'Travel',
    titleZh: '旅行',
    contentEn: `Have you ever been to Shanghai? Yes, I have! It is a modern and bustling city with tall buildings everywhere.

The Bund at night is beautiful. The lights from the buildings reflect on the Huangpu River. It is amazing!

I went to Xi'an last year. I visited the Terracotta Army. It was incredible to see so many ancient soldiers.

Travelling broadens our minds. We learn about different cultures and make wonderful memories.`,
    contentZh: `你去过上海吗？是的，我去过！它是一座现代化、繁华的城市，到处都是高楼大厦。

外滩的夜景很美。高楼上的灯光映照在黄浦江上。太美了！

去年我去了西安。我参观了兵马俑。看到这么多古老的士兵真令人难以置信。

旅行开阔我们的眼界。我们了解不同的文化，创造美好的回忆。`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s2-u5',
    title: 'Festivals',
    titleZh: '节日',
    contentEn: `My favourite festival is the Spring Festival. It is the most important festival in China.

During the Spring Festival, families get together. We have a big dinner on New Year Eve. We eat dumplings and fish.

Children receive red packets with lucky money. We set off firecrackers and watch the Spring Festival Gala.

Another festival I like is the Mid Autumn Festival. We eat mooncakes and enjoy the full moon with our families.`,
    contentZh: `我最喜欢的节日是春节。它是中国最重要的节日。

春节期间，家人团聚。除夕晚上我们吃大餐。我们吃饺子和鱼。

孩子们收到装有压岁钱的红包。我们放鞭炮，看春晚。

我喜欢的另一个节日是中秋节。我们吃月饼，和家人一起赏月。`,
    wordCount: 95,
  },
  {
    id: 'ele-g5s2-u6',
    title: 'Nature',
    titleZh: '自然',
    contentEn: `Nature is beautiful and powerful. The sun rises in the east and sets in the west every day.

The mountains are grand and magnificent. Rivers flow from high places to low places, finally reaching the sea.

The ocean covers most of the earth. It is home to millions of species of fish and plants.

We must protect nature. It gives us air, water and food. Without nature, we cannot survive.`,
    contentZh: `大自然是美丽而强大的。太阳每天从东方升起，从西方落下。

山脉雄伟壮观。河流从高处流向低处，最终汇入大海。

海洋覆盖了地球的大部分。它是数百万种鱼类和植物的家园。

我们必须保护大自然。它给我们空气、水和食物。没有大自然，我们无法生存。`,
    wordCount: 95,
  },
  // ===== 六年级上册（Grade 6 Semester 1）=====
  {
    id: 'ele-g6s1-u1',
    title: 'Daily Routines',
    titleZh: '日常生活',
    contentEn: `I am a busy sixth grader. Every day, I follow a regular routine that keeps me healthy and productive.

I wake up at six fifteen. I do morning exercises for ten minutes before breakfast. A healthy body supports a sharp mind!

After school, I review my lessons and complete homework. I also help with housework like washing dishes and taking out the trash.

Before bed, I read for thirty minutes. Good sleep is essential for growth and learning.`,
    contentZh: `我是一个忙碌的六年级学生。每天，我遵循一个规律的作息，这让我健康且有成效。

六点一刻起床。早饭前做十分钟早操。健康的身体支持敏捷的头脑！

放学后，我复习功课，完成作业。我也帮忙做家务，如洗碗和倒垃圾。

睡前，我阅读三十分钟。良好的睡眠对成长和学习至关重要。`,
    wordCount: 98,
  },
  {
    id: 'ele-g6s1-u2',
    title: 'Locations',
    titleZh: '位置与方向',
    contentEn: `Excuse me, where is the hospital? Go straight and turn left at the second intersection. It is on your right.

Thank you so much! You are welcome. The park is across from the hospital. The school is next to the park.

I am new here. Can you tell me how to get to the library? It is behind the supermarket, near the bus station.

Asking for directions is an important skill. It helps us navigate and be independent.`,
    contentZh: `打扰一下，医院在哪里？直走，在第二个路口左转。它在你的右边。

非常感谢！不客气。公园在医院对面。学校在公园旁边。

我是新来的。你能告诉我怎么去图书馆吗？它在超市后面，靠近汽车站。

问路是一项重要的技能。它帮助我们导航，变得独立。`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s1-u3',
    title: 'Diet and Health',
    titleZh: '饮食与健康',
    contentEn: `A balanced diet is the key to good health. We need food from all five food groups every day.

Grains give us energy. Vegetables and fruits provide vitamins. Meat and beans give us protein. Dairy products give us calcium.

I drink milk every day. It makes my bones strong. I eat an apple every morning. An apple a day keeps the doctor away!

Junk food tastes good but is not healthy. We should limit sweets and oily food. Health is wealth!`,
    contentZh: `均衡的饮食是健康的关键。我们每天需要吃所有五种食物。

谷物给我们能量。蔬菜和水果提供维生素。肉和豆类给我们蛋白质。乳制品给我们钙。

我每天喝牛奶。它让我的骨骼强壮。我每天早上吃一个苹果。一天一苹果，医生远离我！

垃圾食品好吃但不健康。我们应该限制甜食和油腻食物。健康就是财富！`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s1-u4',
    title: 'Holiday Plans',
    titleZh: '假期计划',
    contentEn: `Winter vacation is coming! I am so excited. I am going to visit my grandparents in Hainan.

Hainan is in the south of China. It is warm there even in winter. I can swim in the sea!

My parents are going to book flights and a hotel. We will stay there for one week.

I am also planning to learn to cook a special dish. I want to surprise my grandparents with homemade food!`,
    contentZh: `寒假要来了！我太兴奋了。我打算去海南看望爷爷奶奶。

海南在中国南方。即使在冬天，那里也很暖和。我可以在海里游泳！

我父母要订机票和酒店。我们将在那里待一周。

我还计划学做一道特别的菜。我想用自制美食给爷爷奶奶一个惊喜！`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s1-u5',
    title: 'Science and Nature',
    titleZh: '科学与自然',
    contentEn: `The earth is our home. It is the only planet we know that has life. We must take good care of it.

The earth goes around the sun. It also spins around itself. That is why we have day and night.

The moon goes around the earth. It looks different on different nights. We call them phases of the moon.

Space is vast and mysterious. Many scientists dedicate their lives to exploring the universe.`,
    contentZh: `地球是我们的家园。它是我们所知道的唯一有生命的星球。我们必须好好保护它。

地球绕太阳转。它也自转。这就是我们有白天和黑夜的原因。

月亮绕地球转。它在不同的夜晚看起来不一样。我们称之为月相。

太空广阔而神秘。许多科学家毕生致力于探索宇宙。`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s1-u6',
    title: 'Review and Farewell',
    titleZh: '复习与告别',
    contentEn: `Time flies! We are about to graduate from primary school. I feel excited but also a little sad.

I will miss my teachers and classmates. They have been part of my life for six wonderful years.

In primary school, I learned not only knowledge but also important life lessons. I grew from a shy child into a confident student.

I am ready for middle school. I will carry these wonderful memories with me. Thank you, primary school!`,
    contentZh: `时光飞逝！我们要小学毕业了。我既兴奋又有点伤感。

我会想念我的老师和同学。他们是我六年美好生活的一部分。

在小学里，我不仅学到了知识，也学到了重要的人生道理。我从一个害羞的孩子成长为一个自信的学生。

我准备好上中学了。我会带着这些美好的回忆前行。谢谢你，小学！`,
    wordCount: 95,
  },
  // ===== 六年级下册（Grade 6 Semester 2）=====
  {
    id: 'ele-g6s2-u1',
    title: 'Changes',
    titleZh: '变化',
    contentEn: `How have you changed since you started school? I am taller and stronger now. I can run faster and jump higher!

I have also changed in other ways. I am more responsible and independent. I can solve problems by myself.

My personality has changed too. I used to be shy, but now I am more outgoing. I have made many good friends.

Change is a natural part of growing up. Every day, we are becoming better versions of ourselves!`,
    contentZh: `自从你上学以来，你有什么变化？我现在更高更强壮了。我能跑得更快，跳得更高！

我在其他方面也有变化。我更有责任心，更独立了。我能自己解决问题了。

我的性格也变了。我以前很害羞，但现在更开朗了。我交了很多好朋友。

变化是成长的自然组成部分。每一天，我们都在成为更好的自己！`,
    wordCount: 98,
  },
  {
    id: 'ele-g6s2-u2',
    title: 'Famous People',
    titleZh: '名人',
    contentEn: `Who is the most famous person in Chinese history? I think it is Confucius. He was a great philosopher and teacher.

His ideas about education and life are still influential today. He said, "Is it not a pleasure to learn and to review what has been learned?"

Another famous person is Dr. Sun Yat-sen. He is called the Father of Modern China. He worked hard to change China.

Learning about famous people inspires us. Their stories teach us courage, wisdom and perseverance.`,
    contentZh: `中国历史上最有名的人是谁？我觉得是孔子。他是一位伟大的哲学家和教育家。

他的教育和人生思想至今仍有影响。他说："学而时习之，不亦说乎？"

另一位名人是孙中山博士。他被称为中国国父。他努力改变中国。

了解名人激励我们。他们的故事教会我们勇气、智慧和毅力。`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s2-u3',
    title: 'Communication',
    titleZh: '交流',
    contentEn: `Communication is an important skill. It helps us express thoughts and understand others.

We communicate in many ways. We can talk face to face, write letters, make phone calls or send emails.

With technology, we can also video chat with people far away. I often video call my grandparents. They live far away, but we feel close.

Good communication requires listening as well as speaking. Being a good listener is just as important!`,
    contentZh: `交流是一项重要的技能。它帮助我们表达想法，理解他人。

我们有很多交流方式。我们可以面对面交谈，写信，打电话或发电子邮件。

有了技术，我们还可以和远方的人视频聊天。我经常和爷爷奶奶视频通话。他们住得很远，但我们感觉很亲近。

好的交流需要倾听和说话同样重要！`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s2-u4',
    title: 'The World',
    titleZh: '世界',
    contentEn: `Our world is big and beautiful. There are seven continents and four oceans on our planet.

Asia is the largest continent. China is in Asia. Europe is known for its history and culture. The United States and Canada are in North America.

Africa has the longest river in the world, the Nile. Australia is both a continent and a country. Antarctica is the coldest place.

Knowing about the world makes us more open minded. We can appreciate differences and celebrate diversity!`,
    contentZh: `我们的世界又大又美丽。我们的星球有七大洲和四大洋。

亚洲是最大的洲。中国在亚洲。欧洲以历史和文化闻名。美国和加拿大在北美洲。

非洲有世界上最长的河——尼罗河。澳大利亚既是一个洲也是一个国家。南极洲是最冷的地方。

了解世界让我们更开放。我们能欣赏差异，赞美多样性！`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s2-u5',
    title: 'Dreams',
    titleZh: '梦想',
    contentEn: `What do you want to be when you grow up? I want to be a scientist and explore the mysteries of the universe.

My best friend wants to be a doctor. She wants to help sick people and save lives. That is a noble dream.

Another friend wants to be a teacher. She says teaching is sharing knowledge and shaping future generations.

Dreams give us direction. They inspire us to work hard and never give up. Every big achievement starts with a dream!`,
    contentZh: `你长大后想做什么？我想当一名科学家，探索宇宙的奥秘。

我最好的朋友想当医生。她想帮助病人，挽救生命。这是一个崇高的梦想。

另一个朋友想当老师。她说教学是分享知识，塑造下一代。

梦想给我们方向。它们激励我们努力工作，永不放弃。每一个伟大成就都始于一个梦想！`,
    wordCount: 95,
  },
  {
    id: 'ele-g6s2-u6',
    title: 'Looking Forward',
    titleZh: '展望未来',
    contentEn: `We are about to start a new chapter in our lives. Middle school is waiting for us with new challenges and opportunities.

We will learn more difficult subjects and make new friends. We will grow taller, smarter and more confident.

I am a little nervous but mostly excited. Change can be scary, but it is also full of possibilities.

Let us look forward to the future with hope and courage. The best is yet to come! Thank you, primary school, for wonderful six years!`,
    contentZh: `我们即将开始人生的新篇章。中学正等待着我们的新挑战和机遇。

我们将学习更难的知识，交新的朋友。我们会长得更高、更聪明、更自信。

我有点紧张但更多是兴奋。变化可能令人害怕，但也充满可能。

让我们满怀希望和勇气展望未来。最好的尚未到来！谢谢你，小学，六年美好的时光！`,
    wordCount: 98,
  },
];

// ============================================================
// 人教版初中英语 Go for It! 七年级共12个单元
// ============================================================
const juniorUnits: CourseUnit[] = [
  // ===== 七年级上册（Grade 7 Semester 1）=====
  {
    id: 'jun-j7s1-u1',
    title: 'Making Friends',
    titleZh: '交朋友',
    contentEn: `How do you make friends? Making friends is an important skill in life. When you meet someone new, smile and say hello.

My name is Li Wei. I am twelve years old. I am a new student in Class 1, Grade 7. I am a little shy but I want to make new friends.

To make friends, you need to be friendly and honest. Listen carefully when others speak. Share your things and ideas. Be kind to everyone.

A true friend is someone who helps you when you are in trouble. A true friend laughs with you and cries with you. Friendship is one of the most valuable things in life.`,
    contentZh: `你是怎样交朋友的？交朋友是生活中的一项重要技能。当你遇到新人时，微笑并打招呼。

我叫李伟。我今年十二岁。我是七年级一班的新学生。我有点害羞，但我想交新朋友。

要交朋友，你需要友善和诚实。别人说话时仔细听。分享你的东西和想法。对每个人都要友善。

真正的朋友是在你有困难时帮助你的人。真正的朋友与你同笑同哭。友谊是人生最有价值的东西之一。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s1-u2',
    title: 'Family and Home',
    titleZh: '家庭与家',
    contentEn: `Home is where the heart is. Everyone needs a home. A home is a place where we feel safe and loved.

I live in a small apartment in the city. There are three rooms: a bedroom, a living room and a bathroom. It is not big, but it is warm and comfortable.

My family consists of four members: my father, my mother, my younger sister and me. My father is a businessman. He works hard and is always busy. My mother is a nurse. She takes care of patients in a hospital.

I love my home and my family. No matter where I go, home is always my favourite place.`,
    contentZh: `家是心之所在。每个人都需要一个家。家是一个让我们感到安全和被爱的地方。

我住在城市的一间小公寓里。有三个房间：一间卧室、一间客厅和一间浴室。它不大，但温暖舒适。

我的家庭有四口人：爸爸、妈妈、妹妹和我。我爸爸是一名商人。他工作努力，总是很忙。我妈妈是一名护士。她在医院照顾病人。

我爱我的家和我家人。无论走到哪里，家永远是我最喜欢的地方。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s1-u3',
    title: 'School Life',
    titleZh: '学校生活',
    contentEn: `School life is an important part of our growth. In school, we not only learn knowledge but also develop skills and values.

My school starts at 7:30 in the morning. We have five classes in the morning and three in the afternoon. Our subjects include Chinese, Math, English, History, Geography, Biology, Art, Music and PE.

I like English class best. Our English teacher, Ms. Chen, is very enthusiastic. She makes the class interesting and interactive. I also enjoy PE class because I love sports.

School life is colorful. I participate in the school choir and the basketball team. These activities make my school life more enjoyable.`,
    contentZh: `学校生活是我们成长的重要部分。在学校里，我们不仅学习知识，还培养技能和价值观。

我的学校早上七点半开始上课。上午有五节课，下午有三节课。我们的科目包括语文、数学、英语、历史、地理、生物、美术、音乐和体育。

我最喜欢英语课。我们的英语老师陈老师非常有热情。她让课堂有趣且互动性强。我也喜欢体育课，因为我喜欢运动。

学校生活丰富多彩。我参加学校合唱团和篮球队。这些活动让我的学校生活更加愉快。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s1-u4',
    title: 'Food and Culture',
    titleZh: '食物与文化',
    contentEn: `Food is not just about nutrition. It is also an important part of culture. Different countries have different food cultures.

Chinese food is famous all over the world. It has a long history and a variety of styles. Cantonese food is light and fresh. Sichuan food is spicy and flavorful. Beijing food is rich and hearty.

In my family, we eat rice and vegetables every day. My mother cooks delicious meals for us. On special occasions, we make dumplings together. Making dumplings is a family activity that brings us closer.

I also enjoy trying foreign food. Pizza and spaghetti from Italy are my favourites. Food brings people together.`,
    contentZh: `食物不仅仅是营养。它还是文化的重要组成部分。不同国家有不同的饮食文化。

中餐闻名世界。它历史悠久，风格多样。粤菜清淡新鲜。川菜麻辣可口。北京菜浓郁实在。

在我家，我们每天吃米饭和蔬菜。妈妈为我们做美味的饭菜。在特殊场合，我们一起包饺子。包饺子是一种让我们更亲密的家庭活动。

我也喜欢尝试外国食物。意大利的披萨和意面是我的最爱。食物把人们聚在一起。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s1-u5',
    title: 'Shopping',
    titleZh: '购物',
    contentEn: `Shopping is a common activity in our daily life. We need to buy food, clothes, school supplies and many other things.

There are different places to shop. Supermarkets have a variety of goods under one roof. Shopping malls are large and modern. Online shopping has become very popular because it is convenient and often cheaper.

When I go shopping with my mother, I learn to compare prices and quality. I also learn to manage my pocket money wisely.

However, I think it is important not to waste money on things we do not need. Being a smart shopper means buying what is necessary and good in value.`,
    contentZh: `购物是我们日常生活中的常见活动。我们需要购买食物、衣服、学习用品和许多其他东西。

购物的地方各不相同。超市在一个屋檐下有各种各样的商品。购物中心大而现代。在线购物变得非常流行，因为它方便且通常更便宜。

当我和妈妈一起购物时，我学会比较价格和质量。我也学会明智地管理我的零花钱。

然而，我认为重要的是不要把钱浪费在我们不需要的东西上。做一个聪明的购物者意味着买必要且有价值的东西。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s1-u6',
    title: 'Holidays and Festivals',
    titleZh: '节假日',
    contentEn: `Holidays and festivals are important in every culture. They give us time to relax, celebrate and spend time with family and friends.

The most important festival in China is the Spring Festival. It marks the beginning of the Chinese New Year. Families get together for a big dinner. People set off fireworks and give red packets to children.

Another important festival is the Mid Autumn Festival. Families eat mooncakes and enjoy the full moon together. The moon represents reunion and completeness.

Western festivals like Christmas and Thanksgiving are also becoming popular in China. Festivals bring joy and happiness to our lives.`,
    contentZh: `节假日和节日在每种文化中都很重要。它们给我们时间放松、庆祝和与家人朋友共度时光。

中国最重要的节日是春节。它标志着中国新年的开始。家人团聚吃大餐。人们放烟花，给孩子发红包。

另一个重要的节日是中秋节。家人一起吃月饼，赏月。月亮象征着团圆和完满。

西方节日如圣诞节和感恩节在中国也越来越流行。节日给我们的生活带来欢乐和幸福。`,
    wordCount: 120,
  },
  // ===== 七年级下册（Grade 7 Semester 2）=====
  {
    id: 'jun-j7s2-u1',
    title: 'Daily Life',
    titleZh: '日常生活',
    contentEn: `A typical day in my life starts early. I wake up at six thirty and get ready for school. I have a quick breakfast and then head to school.

School usually ends at four thirty. After school, I either go to club activities or walk home with my friends. We often chat about our day and share funny stories.

At home, I do my homework first. It usually takes me one or two hours. After finishing homework, I have dinner with my family.

In the evening, I sometimes watch TV or read books before bed. I try to be in bed by nine thirty. A well-organized daily life helps me stay healthy and productive.`,
    contentZh: `我典型的一天很早就开始了。六点半起床，准备上学。我快速吃完早餐，然后去学校。

学校通常四点半结束。放学后，我要么参加社团活动，要么和朋友们一起走回家。我们经常聊天，分享一天中有趣的事情。

在家里，我首先做作业。通常需要一到两个小时。完成作业后，我和家人一起吃晚饭。

晚上，我有时在睡前看电视或看书。我争取九点半前上床。有条理的日常生活帮助我保持健康和高效。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s2-u2',
    title: 'Weather and Climate',
    titleZh: '天气与气候',
    contentEn: `Weather affects our daily lives in many ways. We check the weather forecast before going out or planning activities.

The weather in China varies greatly from north to south. In the north, winters are cold and dry, often with snow. In the south, summers are hot and humid, with plenty of rain.

Spring is the best season in many places. The weather is mild and flowers bloom everywhere. Autumn is also pleasant, with cool temperatures and golden leaves.

Because of climate change, weather patterns are becoming more unpredictable. It is important for us to protect the environment and reduce carbon emissions.`,
    contentZh: `天气在很多方面影响我们的日常生活。我们在出门或计划活动前会查看天气预报。

中国的天气从北到南变化很大。北方冬天寒冷干燥，经常下雪。南方夏天炎热潮湿，雨水充沛。

春天在很多地方是最好的季节。天气温和，到处鲜花盛开。秋天也很宜人，气温凉爽，金色的叶子飘落。

由于气候变化，天气模式变得越来越不可预测。保护环境、减少碳排放对我们来说很重要。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s2-u3',
    title: 'Transportation',
    titleZh: '交通',
    contentEn: `Transportation is essential in modern society. It connects people and moves goods from one place to another.

In cities, people use various means of transportation. Buses and subways are the most common. They are affordable and can carry many passengers at once. Taxis and ride-sharing services offer convenience but cost more.

Many students in my school ride bicycles to school. It is eco-friendly and good for health. Some students walk if they live close enough.

In recent years, China has built the world's leading high-speed railway network. It makes travel between cities fast and comfortable. Transportation technology continues to improve our lives.`,
    contentZh: `交通在现代社会中至关重要。它连接人们，将货物从一个地方运到另一个地方。

在城市里，人们使用各种交通工具。公交车和地铁最常见。它们便宜，能一次运载很多乘客。出租车和网约车服务提供便利，但费用更高。

我学校很多学生骑自行车上学。它环保且对健康有益。如果住得近，有些学生走路上学。

近年来，中国建成了世界领先的高速铁路网络。它使城市间出行快速舒适。交通技术继续改善我们的生活。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s2-u4',
    title: 'Animals and Nature',
    titleZh: '动物与自然',
    contentEn: `Animals are an important part of our natural world. They contribute to the balance of ecosystems and bring joy to our lives.

There are two main categories of animals: domestic animals and wild animals. Domestic animals like dogs and cats live with humans and provide companionship. Wild animals live in nature and have their own habitats.

However, many wild animals are in danger due to habitat loss and illegal hunting. We should take action to protect endangered species.

Visiting zoos and aquariums can help us learn about animals. But the best way to appreciate wildlife is to protect their natural habitats.`,
    contentZh: `动物是我们自然世界的重要组成部分。它们为生态平衡做出贡献，给我们的生活带来欢乐。

动物主要分为两类：家养动物和野生动物。像狗和猫这样的家养动物与人类一起生活，提供陪伴。野生动物生活在自然界，有自己的栖息地。

然而，许多野生动物由于栖息地丧失和非法捕猎而处于危险中。我们应该采取行动保护濒危物种。

参观动物园和水族馆可以帮助我们了解动物。但欣赏野生动物的最好方式是保护它们的自然栖息地。`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s2-u5',
    title: 'Health and Fitness',
    titleZh: '健康与健身',
    contentEn: `Health is wealth. Without good health, we cannot enjoy life or achieve our goals. Taking care of our bodies should be a top priority.

A healthy lifestyle includes balanced diet, regular exercise and enough sleep. We should eat more vegetables and fruits, and less junk food.

Exercise is essential for physical fitness. I play basketball twice a week. It not only keeps me fit but also teaches me teamwork.

Mental health is equally important. We should manage stress, stay positive and maintain good relationships with family and friends. A sound mind in a sound body!`,
    contentZh: `健康就是财富。没有健康，我们无法享受生活或实现目标。照顾好身体应该是重中之重。

健康的生活方式包括均衡饮食、规律运动和充足睡眠。我们应该多吃蔬菜水果，少吃垃圾食品。

运动对身体健康至关重要。我每周打两次篮球。它不仅让我保持健康，还教会我团队合作。

心理健康同样重要。我们应该管理压力，保持积极，与家人和朋友保持良好关系。健全的精神寓于健全的身体！`,
    wordCount: 120,
  },
  {
    id: 'jun-j7s2-u6',
    title: 'Learning Strategies',
    titleZh: '学习策略',
    contentEn: `Learning is a lifelong journey. Developing good learning strategies can make our study more effective and enjoyable.

First, it is important to pay attention in class. Listen carefully and take notes. Notes help us review what we have learned.

Second, we should review regularly. Studying a little bit every day is better than cramming before exams. Spaced repetition helps us remember things longer.

Third, find your learning style. Some people learn best by reading, others by listening or doing. Understanding how you learn best can improve your efficiency.

Finally, never be afraid of making mistakes. Mistakes are the best teachers. They show us what we need to improve.`,
    contentZh: `学习是一生的旅程。培养良好的学习策略可以让我们的学习更有效、更有趣。

首先，上课集中注意力很重要。认真听讲，做笔记。笔记帮助我们复习所学内容。

其次，我们应该定期复习。每天学一点比考试前临时抱佛脚要好。间隔重复帮助我们更长时间地记住东西。

第三，找到你的学习风格。有些人最适合通过阅读学习，有些通过听或做。了解你最擅长的学习方式可以提高效率。

最后，永远不要害怕犯错。错误是最好的老师。它们告诉我们需要改进什么。`,
    wordCount: 120,
  },
];

// ============================================================
// 人教版高中英语 必修1-3共12个单元
// ============================================================
const seniorUnits: CourseUnit[] = [
  // ===== 必修一（Senior High 1）=====
  {
    id: 'sen-s1-u1',
    title: 'Teenage Life',
    titleZh: '青春岁月',
    contentEn: `Being a teenager is an exciting phase of life. It is a time of growth, discovery and self-identity.

As teenagers, we experience many physical and emotional changes. We start to think more independently and develop our own opinions. We begin to understand who we are and what we want in life.

Teenage life is not always easy. We face academic pressure, social challenges and the task of building our identity. However, these challenges help us grow into responsible adults.

It is important to have a positive attitude during these years. Setting goals, developing good habits and maintaining healthy relationships are key to making the most of our teenage years.

I believe that every teenager has the potential to achieve great things. With hard work and determination, we can turn our dreams into reality.`,
    contentZh: `青少年时期是人生中令人兴奋的阶段。这是一个成长、发现和自我认同的时期。

作为青少年，我们经历许多身体和情感的变化。我们开始更独立地思考，形成自己的观点。我们开始了解自己是什么样的人，想要什么样的人生。

青少年生活并不总是一帆风顺的。我们面临学业压力、社交挑战和建立自我认同的任务。然而，这些挑战帮助我们成长为负责任的成年人。

在这些岁月里保持积极的态度很重要。设定目标、养成好习惯、保持健康的人际关系是充分利用青少年时期的关键。

我相信每个青少年都有潜力成就伟大的事情。有了努力和决心，我们可以将梦想变为现实。`,
    wordCount: 150,
  },
  {
    id: 'sen-s1-u2',
    title: 'Sports and Fitness',
    titleZh: '运动与健康',
    contentEn: `Sports play an important role in our lives. They not only keep us physically fit but also teach us valuable life lessons.

Through sports, we learn about teamwork, perseverance and fair play. Whether we win or lose, the experience helps us grow. Winning builds confidence, while losing teaches us resilience.

Different sports suit different people. Some enjoy team sports like basketball, football and volleyball. Others prefer individual sports like swimming, running and tennis. What matters most is finding a sport we enjoy and can stick with.

In modern society, where many of us spend long hours sitting at desks or in front of screens, regular exercise is more important than ever. It helps prevent health problems and improves our mental well-being.

Let us all make exercise a part of our daily life. A healthy body is the foundation of a happy life.`,
    contentZh: `运动在我们的生活中扮演着重要角色。它们不仅让我们保持身体健康，还教会我们宝贵的人生经验。

通过运动，我们学到团队合作、毅力和公平竞争。无论输赢，这种经历都帮助我们成长。胜利建立信心，失败教会我们韧性。

不同的运动适合不同的人。有些人喜欢篮球、足球和排球等团队运动。其他人更喜欢游泳、跑步和网球等个人运动。最重要的是找到一项我们喜欢并能坚持的运动。

在现代社会中，我们中的许多人长时间坐在办公桌前或屏幕前，定期锻炼比以往任何时候都更重要。它有助于预防健康问题，改善我们的心理健康。

让我们都把锻炼作为日常生活的一部分。健康的身体是幸福生活的基础。`,
    wordCount: 150,
  },
  {
    id: 'sen-s1-u3',
    title: 'Travel and Transportation',
    titleZh: '旅行与交通',
    contentEn: `Travel broadens the mind and enriches the soul. There is no better way to learn about the world than to explore it ourselves.

When we travel, we experience new cultures, taste new foods and meet people from different backgrounds. These experiences change the way we see the world and ourselves.

China has a well-developed transportation system that makes travel convenient. High-speed trains connect major cities in hours. Domestic flights are affordable and save time for long distances.

However, with the convenience of modern travel comes responsibility. We should travel sustainably, respect local cultures and protect natural environments. Being a responsible traveller means leaving places as beautiful as we found them.

Whether it is a trip to a nearby city or a journey to a distant land, every travel experience teaches us something new about the world and ourselves.`,
    contentZh: `旅行开阔眼界，丰富心灵。没有比亲自探索世界更好的方式去了解世界了。

当我们旅行时，我们体验新的文化，品尝新的食物，遇见来自不同背景的人。这些经历改变了我们看待世界和自己的方式。

中国有发达的交通系统，使旅行方便快捷。高速列车在几小时内连接主要城市。国内航班价格合理，为长途旅行节省时间。

然而，现代旅行的便利也伴随着责任。我们应该可持续地旅行，尊重当地文化，保护自然环境。做一个负责任的旅行者意味着让目的地保持我们发现时的美丽。

无论是去附近城市旅行还是去远方，每一次旅行经历都教会我们关于世界和自我的新东西。`,
    wordCount: 150,
  },
  {
    id: 'sen-s1-u4',
    title: 'Nature and Environment',
    titleZh: '自然与环境',
    contentEn: `Nature is our most precious heritage. It provides us with air, water, food and countless other resources that sustain life.

However, our planet is facing serious environmental challenges. Climate change, air and water pollution, deforestation and loss of biodiversity are threatening the delicate balance of our ecosystems.

The consequences of environmental degradation are already visible. Rising temperatures cause glaciers to melt and sea levels to rise. Extreme weather events are becoming more frequent. Wildlife habitats are shrinking.

But there is still hope. Individuals, governments and organizations around the world are taking action. Many countries have committed to reducing carbon emissions. Companies are developing clean energy technologies.

As young people, we also have a role to play. Simple actions like reducing waste, conserving energy and planting trees can make a difference. Together, we can protect our planet for future generations.`,
    contentZh: `自然是我们最宝贵的遗产。它为我们提供空气、水、食物和无数其他维持生命的资源。

然而，我们的星球正面临严峻的环境挑战。气候变化、空气和水污染、森林砍伐和生物多样性丧失正威胁着我们生态系统的微妙平衡。

环境退化的后果已经显而易见。气温上升导致冰川融化，海平面上升。极端天气事件越来越频繁。野生动物栖息地正在萎缩。

但仍有希望。世界各地的个人、政府和组织正在采取行动。许多国家承诺减少碳排放。企业正在开发清洁能源技术。

作为年轻人，我们也有一份责任。像减少垃圾、节约能源和植树等简单行动都可以产生影响。我们一起努力，可以为子孙后代保护我们的星球。`,
    wordCount: 150,
  },
  // ===== 必修二（Senior High 2）=====
  {
    id: 'sen-s2-u1',
    title: 'Culture and Heritage',
    titleZh: '文化与遗产',
    contentEn: `Cultural heritage connects us to our past and shapes our identity. It includes traditions, customs, art, architecture and many other aspects of human civilization.

China has a rich cultural heritage that spans thousands of years. The Great Wall, the Terracotta Army, the Forbidden City and countless temples and monuments bear witness to the brilliance of Chinese civilization.

However, cultural heritage faces threats from modernization, natural disasters and human activities. Protecting and preserving our cultural heritage is the responsibility of every generation.

UNESCO designates World Heritage Sites to recognize and protect places of outstanding universal value. These sites belong not only to the nations where they are located but to all of humanity.

As young people, we should learn about and appreciate our cultural heritage. By understanding our past, we can better navigate the present and shape the future.`,
    contentZh: `文化遗产把我们与过去联系起来，塑造我们的身份。它包括传统、习俗、艺术、建筑和人类文明的许多其他方面。

中国有跨越数千年的丰富文化遗产。长城、兵马俑、故宫和无数的寺庙和纪念碑见证了中国文明的辉煌。

然而，文化遗产面临现代化、自然灾害和人类活动的威胁。保护和保存我们的文化遗产是每一代人的责任。

联合国教科文组织指定世界遗产地，以承认和保护具有突出普遍价值的地点。这些遗址不仅属于其所在国家，也属于全人类。

作为年轻人，我们应该了解并欣赏我们的文化遗产。通过了解过去，我们能更好地把握现在，塑造未来。`,
    wordCount: 150,
  },
  {
    id: 'sen-s2-u2',
    title: 'Science and Technology',
    titleZh: '科技',
    contentEn: `Science and technology have transformed our world more than anything else in human history. From the wheel to the internet, each technological advancement has changed the way we live, work and communicate.

In the 21st century, technology is advancing at an unprecedented pace. Artificial intelligence, gene editing, renewable energy and quantum computing are revolutionizing every field.

These advances bring tremendous benefits. Medical technology saves lives. Communication technology connects people across the globe. Transportation technology makes the world smaller.

But technology also raises ethical questions. Issues of privacy, job displacement and digital divide require careful consideration. Technology should serve humanity, not control it.

As students preparing for the future, we must not only learn to use technology but also think critically about its impact. The goal should be to use science and technology for the greater good of all.`,
    contentZh: `科学技术在人类历史上比任何其他东西都更深刻地改变了我们的世界。从轮到互联网，每一项技术进步都改变了我们生活、工作和交流的方式。

在21世纪，技术正以前所未有的速度发展。人工智能、基因编辑、可再生能源和量子计算正在革新各个领域。

这些进步带来了巨大好处。医疗技术拯救生命。通信技术连接全球人民。交通技术让世界变得更小。

但技术也引发伦理问题。隐私、工作替代和数字鸿沟问题需要认真思考。技术应该为人类服务，而不是控制人类。

作为为未来做准备的学生，我们不仅必须学会使用技术，还要批判性地思考其影响。目标应该是为全体人类的更大利益使用科学技术。`,
    wordCount: 150,
  },
  {
    id: 'sen-s2-u3',
    title: 'Literature and Art',
    titleZh: '文学与艺术',
    contentEn: `Literature and art are expressions of the human spirit. They allow us to explore emotions, ideas and experiences that transcend the ordinary.

Through literature, we can travel to distant lands, experience different times and lives, and see the world through others' eyes. Great literary works like Shakespeare, Tolstoy and Lu Xun continue to move and inspire readers centuries after they were written.

Art in all its forms, from painting to music to dance, speaks a universal language. It can communicate emotions and ideas that words alone cannot express. Art inspires creativity and enriches our souls.

Studying literature and art helps us develop empathy and critical thinking. It broadens our perspective and deepens our understanding of human nature.

In our busy modern lives, let us not forget to nourish our spirits with literature and art. They are the food and nourishment essential for the soul.`,
    contentZh: `文学和艺术是人类精神的表现。它们让我们探索超越平凡的情感、想法和体验。

通过文学，我们可以旅行到遥远的地方，体验不同的时代和生活，通过他人的眼光看世界。莎士比亚、托尔斯泰和鲁迅等伟大的文学作品在写成几个世纪后继续感动和激励读者。

各种形式的艺术，从绘画到音乐到舞蹈，说着一种通用的语言。它可以传达仅靠言语无法表达的情感和想法。艺术激发创造力，丰富我们的灵魂。

学习文学和艺术帮助我们培养同理心和批判性思维。它拓宽我们的视角，加深我们对人性的理解。

在我们忙碌的现代生活中，让我们不要忘记用文学和艺术滋养我们的精神。它们是灵魂不可或缺的食物和营养。`,
    wordCount: 150,
  },
  {
    id: 'sen-s2-u4',
    title: 'Social Issues',
    titleZh: '社会问题',
    contentEn: `Every society faces social issues that require attention and action. Poverty, inequality, discrimination and injustice are problems that affect millions of people around the world.

Poverty remains one of the most pressing challenges. Despite remarkable economic progress, many people still lack access to basic necessities like food, clean water and healthcare.

Inequality between rich and poor, between different regions, and between men and women continues to exist. Discrimination based on race, ethnicity, religion or sexual orientation is still prevalent in many societies.

Addressing these issues requires collective effort. Governments, organizations and individuals all have a role to play. Volunteering, donating and raising awareness are ways we can contribute.

As the next generation, we have the responsibility to build a more just and equitable society. Change begins with awareness and action. Let us all do our part.`,
    contentZh: `每个社会都面临需要关注和行动的社会问题。贫困、不平等、歧视和不公正是影响全世界数百万人的问题。

贫困仍然是最紧迫的挑战之一。尽管经济成就显著，但许多人仍然缺乏食物、干净水和医疗保健等基本必需品。

富人与穷人之间、不同地区之间、男女之间的不平等继续存在。基于种族、民族、宗教或性取向的歧视在许多社会中仍然普遍。

解决这些问题需要集体努力。政府、组织和个人都可以发挥作用。志愿服务、捐赠和提高意识是我们可以做出贡献的方式。

作为下一代，我们有责任建设一个更加公正和公平的社会。变革始于意识和行动。让我们都尽自己的一份力量。`,
    wordCount: 150,
  },
  // ===== 必修三（Senior High 3）=====
  {
    id: 'sen-s3-u1',
    title: 'Philosophy and Thinking',
    titleZh: '哲学与思考',
    contentEn: `Philosophy is the study of fundamental questions about existence, knowledge, truth and morality. It encourages us to think deeply and critically about the world and our place in it.

The great philosophers of history have shaped human thought. Socrates taught us to question everything. Confucius emphasized moral cultivation and social harmony. These ideas continue to influence our world.

Philosophical thinking helps us develop analytical skills and form well-reasoned opinions. It enables us to examine our beliefs and values, and to understand different perspectives.

In our daily lives, we can practice philosophical thinking by asking questions, challenging assumptions and seeking deeper meaning. Why do we believe what we believe? Is this belief justified? What does it mean to live a good life?

These questions may not have easy answers, but the pursuit of answers enriches our minds and lives.`,
    contentZh: `哲学是对存在、知识、真理和道德等根本问题的研究。它鼓励我们深入批判地思考世界以及我们在世界中的位置。

历史上伟大的哲学家塑造了人类思想。苏格拉底教导我们质疑一切。孔子强调道德修养和社会和谐。这些思想继续影响我们的世界。

哲学思考帮助我们发展分析能力，形成合理意见。它使我们能够审视我们的信仰和价值观，理解不同的观点。

在我们的日常生活中，我们可以通过提问、挑战假设和寻求更深层的意义来实践哲学思考。我们为什么相信我们所相信的？这个信念有道理吗？过美好生活意味着什么？

这些问题可能没有简单的答案，但对答案的追求丰富了我们的思想和生命。`,
    wordCount: 150,
  },
  {
    id: 'sen-s3-u2',
    title: 'Globalization',
    titleZh: '全球化',
    contentEn: `Globalization has connected the world like never before. Trade, communication and travel have created an interconnected global community.

On the positive side, globalization has brought economic growth, cultural exchange and technological progress. It has lifted millions out of poverty and created new opportunities for education and employment.

However, globalization also presents challenges. It can lead to cultural homogenization, where local traditions and languages are lost. Economic inequality between and within nations can widen. Some industries and workers are left behind.

Furthermore, global challenges like climate change and pandemics require international cooperation. No country can solve these problems alone.

As young people, we should embrace the opportunities that globalization offers while being mindful of its challenges. Being global citizens means understanding our connection to the wider world and taking responsibility for our collective future.`,
    contentZh: `全球化以前所未有的方式连接了世界。贸易、通信和旅行创造了一个相互联系的全球社区。

从积极方面看，全球化带来了经济增长、文化交流和技术进步。它使数百万人摆脱了贫困，为教育和就业创造了新机会。

然而，全球化也带来了挑战。它可能导致文化同质化，使当地传统和语言消失。国家和国家内部的经济不平等可能扩大。一些行业和工人被抛在后面。

此外，气候变化和流行病等全球挑战需要国际合作。没有一个国家能独自解决这些问题。

作为年轻人，我们应该拥抱全球化带来的机遇，同时关注其挑战。作为全球公民意味着理解我们与更广阔世界的联系，为我们共同的未来承担责任。`,
    wordCount: 150,
  },
  {
    id: 'sen-s3-u3',
    title: 'Personal Growth',
    titleZh: '个人成长',
    contentEn: `Personal growth is a lifelong process. From the moment we are born, we are constantly learning, changing and developing as individuals.

The teenage years are particularly important for personal growth. This is when we develop our identity, form our values and build the foundation for our future lives.

Personal growth requires self-awareness. We need to understand our strengths and weaknesses, our passions and fears. It requires courage to step out of our comfort zones and face challenges.

Setting goals is essential for personal growth. Goals give us direction and motivation. Whether it is learning a new skill, improving our health or building better relationships, clear goals help us make progress.

Setbacks and failures are inevitable parts of growth. What matters is not that we fall, but that we learn from our failures and keep moving forward. Every obstacle is an opportunity to grow stronger and wiser.`,
    contentZh: `个人成长是一生的过程。从我们出生的那一刻起，我们就在不断地学习、改变和发展。

青少年时期对个人成长尤为重要。这是我们发展自我认同、形成价值观和为未来生活打基础的时候。

个人成长需要自我意识。我们需要了解我们的优势和劣势，我们的热情和恐惧。走出舒适区、面对挑战需要勇气。

设定目标对个人成长至关重要。目标给我们方向和动力。无论是学习新技能、改善健康还是建立更好的人际关系，清晰的目标帮助我们取得进步。

挫折和失败是成长中不可避免的部分。重要的不是我们跌倒，而是我们从失败中学习，继续前进。每个障碍都是成长为更强壮、更聪明的人的机会。`,
    wordCount: 150,
  },
  {
    id: 'sen-s3-u4',
    title: 'Future and Innovation',
    titleZh: '未来与创新',
    contentEn: `The future is shaped by the decisions we make today. As young people, we are the architects of tomorrow's world.

Innovation drives progress. From the agricultural revolution to the industrial revolution to the digital revolution, each wave of innovation has transformed society. The next wave is already coming with technologies like artificial intelligence, biotechnology and clean energy.

These emerging technologies promise to solve many of humanity's greatest challenges. They could cure diseases, end energy poverty and protect our environment. But they also raise new ethical and social questions.

Being prepared for the future means developing skills that will be valuable in a changing world. Critical thinking, creativity, adaptability and digital literacy are essential.

But most importantly, we must never lose sight of what makes us human. In a world of rapid change, our values, empathy and humanity are what truly matter. The best future is one where technology serves human flourishing.`,
    contentZh: `未来是由我们今天做出的决定塑造的。作为年轻人，我们是明天世界的建设者。

创新推动进步。从农业革命到工业革命再到数字革命，每一波创新都改变了社会。下一波浪潮已经来临，包括人工智能、生物技术和清洁能源等技术。

这些新兴技术有望解决人类面临的许多最大挑战。它们可以治愈疾病、结束能源贫困，保护我们的环境。但它们也引发了新的伦理和社会问题。

为未来做好准备意味着培养在变化的世界中有价值的技能。批判性思维、创造力、适应能力和数字素养是必不可少的。

但最重要的是，我们绝不能忽视使我们成为人类的东西。在一个快速变化的世界中，我们的价值观、同理心和人性才是真正重要的。最好的未来是技术为人类繁荣服务的未来。`,
    wordCount: 150,
  },
];

// ============================================================
// 人教版大学英语 共12个单元
// ============================================================
const universityUnits: CourseUnit[] = [
  // ===== 大学英语上册 Unit 1-6 =====
  {
    id: 'uni-u1-u1',
    title: 'The Art of Critical Thinking',
    titleZh: '批判性思维的艺术',
    contentEn: `Critical thinking is the ability to analyze information objectively and make reasoned judgments. In an age of information overload, this skill has become more important than ever.

The process of critical thinking involves several steps. First, we identify and clearly define the issue or question. Second, we gather relevant information from reliable sources. Third, we analyze the information, looking for biases, assumptions and logical fallacies. Fourth, we evaluate the evidence and consider alternative perspectives. Finally, we reach well-reasoned conclusions.

Critical thinking protects us from misinformation and manipulation. It enables us to make informed decisions in our personal and professional lives. It is essential for engaged citizenship in a democratic society.

Developing critical thinking skills requires practice and humility. We must be willing to question our own beliefs and consider perspectives different from our own. As Socrates said, "The unexamined life is not worth living."

In academic settings, critical thinking is the foundation of scholarly inquiry. In the workplace, it leads to better problem-solving and innovation. In daily life, it helps us navigate complex issues and make choices aligned with our values.`,
    contentZh: `批判性思维是客观分析信息并做出合理判断的能力。在信息爆炸的时代，这项技能变得比以往任何时候都更加重要。

批判性思维的过程包括几个步骤。首先，我们识别并清楚地定义问题或疑问。其次，我们从可靠来源收集相关信息。第三，我们分析信息，寻找偏见、假设和逻辑谬误。第四，我们评估证据并考虑替代观点。最后，我们得出合理结论。

批判性思维保护我们免受错误信息和操纵。它使我们能够在个人和职业生活中做出明智的决定。它是民主社会中积极参与公民社会的必要条件。

培养批判性思维技能需要练习和谦逊。我们必须愿意质疑自己的信仰，考虑与己不同的观点。正如苏格拉底所说："未经审视的生活不值得过。"

在学术环境中，批判性思维是学术探究的基础。在工作场所，它带来更好的问题解决和创新。在日常生活中，它帮助我们应对复杂问题，做出与价值观一致的选择。`,
    wordCount: 180,
  },
  {
    id: 'uni-u1-u2',
    title: 'Academic Writing',
    titleZh: '学术写作',
    contentEn: `Academic writing is a formal style of writing used in universities and scholarly publications. It requires precision, clarity and rigorous argumentation.

The key features of academic writing include a clear thesis statement, logical organization, evidence-based argumentation and proper citation of sources. Academic writers must avoid vague generalizations and support their claims with specific evidence.

The writing process typically involves several stages: brainstorming, outlining, drafting, revising and editing. Good academic writing rarely comes easily; it is the product of careful thinking and multiple revisions.

Proper attribution is crucial in academic writing. We must always cite the sources of our ideas and information to avoid plagiarism. This not only gives credit to original authors but also allows readers to verify and build upon our work.

Academic writing is a skill that develops over time. Through practice and feedback, students can become effective academic writers capable of contributing to scholarly discourse in their fields.`,
    contentZh: `学术写作是大学和学术出版物中使用的正式写作风格。它需要精确性、清晰度和严格的论证。

学术写作的主要特征包括明确的论题陈述、逻辑组织、基于证据的论证和适当的来源引用。学术写作者必须避免模糊的概括，用具体证据支持他们的主张。

写作过程通常包括几个阶段：头脑风暴、列提纲、草稿、修改和编辑。好的学术写作很少能轻易完成；它是认真思考和多次修改的产物。

适当的归属在学术写作中至关重要。我们必须始终引用我们想法和信息的来源，以避免抄袭。这不仅给原创作者应有的荣誉，也允许读者验证并在我们的工作基础上继续发展。

学术写作是一项随着时间推移而发展的技能。通过练习和反馈，学生可以成为有效的学术写作者，能够为各自领域的学术讨论做出贡献。`,
    wordCount: 180,
  },
  {
    id: 'uni-u1-u3',
    title: 'Cross-cultural Communication',
    titleZh: '跨文化交流',
    contentEn: `In our increasingly interconnected world, cross-cultural communication has become an essential skill. Understanding and respecting cultural differences is crucial for personal and professional success.

Culture shapes how we perceive the world, communicate with others and interpret messages. What is considered polite in one culture may be rude in another. High-context cultures rely heavily on nonverbal cues and shared understanding, while low-context cultures prefer explicit, direct communication.

Effective cross-cultural communicators develop cultural awareness and sensitivity. They learn about other cultures without stereotyping or judging. They adapt their communication style to suit different cultural contexts.

Cross-cultural communication skills are particularly important in international business, diplomacy and healthcare. Misunderstandings can lead to failed negotiations, damaged relationships or even conflict.

As global citizens, we should embrace cultural diversity as a source of strength and creativity. By learning from different cultures, we enrich our own lives and contribute to a more harmonious world.`,
    contentZh: `在我们日益互联的世界中，跨文化交流已成为一项基本技能。理解和尊重文化差异对个人和职业成功至关重要。

文化塑造我们感知世界、与他人交流和解释信息的方式。在一种文化中被视为礼貌的东西在另一种文化中可能被视为粗鲁的。高语境文化严重依赖非语言线索和共同理解，而低语境文化更喜欢明确的、直接的交流。

有效的跨文化交流者培养文化意识和敏感性。他们学习其他文化，而不进行刻板印象或评判。他们调整自己的交流风格以适应不同的文化背景。

跨文化交流技能在国际商业、外交和医疗保健中尤为重要。误解可能导致谈判失败、关系受损，甚至冲突。

作为全球公民，我们应该将文化多样性视为力量和创造力的源泉。通过学习不同文化，我们丰富自己的生活，为更和谐的世界做出贡献。`,
    wordCount: 180,
  },
  {
    id: 'uni-u1-u4',
    title: 'Digital Literacy',
    titleZh: '数字素养',
    contentEn: `Digital literacy is the ability to use, understand and evaluate digital technology and information effectively and responsibly. In the 21st century, it has become as fundamental as traditional literacy.

A digitally literate person can navigate various digital platforms, create and share content, and communicate effectively online. They understand how digital technologies work and are aware of their limitations and potential biases.

However, digital literacy also includes critical aspects. We must be able to evaluate the credibility of online information, recognize misinformation and protect our privacy and security in the digital world.

The digital divide remains a significant issue. Not everyone has equal access to digital technology and the internet. This creates inequalities in education, employment and civic participation.

As digital citizens, we must use technology responsibly and ethically. We should respect others online, protect personal data and contribute positively to digital communities. The goal is to harness the power of technology for the greater good.`,
    contentZh: `数字素养是有效和负责任地使用、理解和评估数字技术及信息的能力。在21世纪，它已成为与传统素养一样基础的东西。

具有数字素养的人可以导航各种数字平台，创建和分享内容，并有效地在线交流。他们了解数字技术如何运作，并意识到其局限性和潜在偏见。

然而，数字素养也包括批判性方面。我们必须能够评估在线信息的可信度，识别错误信息，并在数字世界中保护我们的隐私和安全。

数字鸿沟仍然是一个重要问题。并非每个人都有平等获得数字技术和互联网的机会。这在教育、就业和公民参与方面造成了不平等。

作为数字公民，我们必须负责任和合乎道德地使用技术。我们应该尊重他人在线，保护个人数据，为数字社区做出积极贡献。目标是利用技术的力量为更大的利益服务。`,
    wordCount: 180,
  },
  {
    id: 'uni-u1-u5',
    title: 'Environmental Ethics',
    titleZh: '环境伦理',
    contentEn: `Environmental ethics is the branch of philosophy that examines the moral relationship between humans and the natural environment. It asks fundamental questions about our obligations to nature and future generations.

Traditional Western ethics focused primarily on duties between humans. Environmental ethics expands this circle to include non-human beings and ecosystems. This raises challenging questions: Do trees have rights? Do ecosystems have intrinsic value?

Various ethical frameworks offer different perspectives. Anthropocentrism places human interests at the center. Biocentrism argues that all living beings have inherent worth. Deep ecology emphasizes the interconnectedness of all life and advocates for radical changes in human behavior.

Environmental ethics has practical implications for policy and individual behavior. It challenges us to consider the environmental consequences of our choices and to adopt more sustainable ways of living.

As we face the climate crisis, environmental ethics provides a moral framework for action. It reminds us that we are not owners of the earth but stewards of a precious planet that belongs to future generations as well.`,
    contentZh: `环境伦理是哲学的一个分支，研究人类与自然环境之间的道德关系。它提出了关于我们对自然和后代义务的根本问题。

传统西方伦理主要关注人与人之间的责任。环境伦理将这个圈子扩展到包括非人类生命和生态系统。这提出了具有挑战性的问题：树有权利吗？生态系统有内在价值吗？

各种伦理框架提供了不同的观点。人类中心主义将人类利益放在中心。生物中心主义认为所有生物都有内在价值。深生态学强调所有生命的相互联系，倡导人类行为的根本改变。

环境伦理对政策和个人行为有实际意义。它挑战我们考虑我们选择的环境后果，采取更可持续的生活方式。

当我们面对气候危机时，环境伦理为行动提供了道德框架。它提醒我们，我们不是地球的所有者，而是属于后代的珍贵星球的管家。`,
    wordCount: 180,
  },
  {
    id: 'uni-u1-u6',
    title: 'Artificial Intelligence and Society',
    titleZh: '人工智能与社会',
    contentEn: `Artificial Intelligence (AI) is transforming every aspect of our society. From healthcare to transportation, from education to entertainment, AI systems are reshaping how we live and work.

The benefits of AI are enormous. In medicine, AI helps diagnose diseases and discover new drugs. In business, it optimizes operations and creates new products. In daily life, virtual assistants and recommendation systems make our lives more convenient.

However, AI also raises serious concerns. Job displacement due to automation threatens economic security for millions. Algorithmic bias can perpetuate discrimination. The concentration of AI power in a few large companies raises questions about accountability and democracy.

Perhaps most profound is the question of AI consciousness. As AI systems become more sophisticated, we must consider whether they could develop something like rights or moral status.

The development of AI should be guided by human values and oversight. We must ensure that AI serves humanity rather than the other way around. The future of AI is ultimately a choice we make together as a society.`,
    contentZh: `人工智能（AI）正在改变我们社会的方方面面。从医疗到交通，从教育到娱乐，AI系统正在重塑我们的生活和工作方式。

AI的好处是巨大的。在医学领域，AI帮助诊断疾病和发现新药。在商业领域，它优化运营并创造新产品。在日常生活中，虚拟助手和推荐系统让我们的生活更方便。

然而，AI也引发了严重关切。自动化导致的失业威胁着数百万人的经济安全。算法偏见可能使歧视永久化。AI权力集中在少数大公司引发关于问责制和民主的问题。

也许最深刻的是AI意识的问题。随着AI系统变得越来越复杂，我们必须考虑它们是否可以发展出类似权利或道德地位的东西。

AI的发展应该由人类价值观和监督来指导。我们必须确保AI为人类服务，而不是反过来。AI的未来最终是我们作为一个社会共同做出的选择。`,
    wordCount: 180,
  },
  // ===== 大学英语下册 Unit 1-6 =====
  {
    id: 'uni-u2-u1',
    title: 'Media and Democracy',
    titleZh: '媒体与民主',
    contentEn: `A free and independent media is essential for democracy. It informs citizens, holds power accountable and facilitates public discourse on important issues.

The media serves several crucial functions in a democratic society. First, it provides citizens with accurate and timely information about events at home and abroad. Second, it offers a platform for diverse viewpoints and public debate. Third, it acts as a watchdog, investigating and exposing corruption, abuse of power and social injustices.

However, the media landscape is changing dramatically. The rise of social media has democratized information creation and distribution. Anyone with internet access can now publish content and reach a global audience. This has both positive and negative implications.

On the positive side, social media amplifies marginalized voices and facilitates grassroots movements. On the negative side, it can spread misinformation rapidly and create echo chambers that reinforce existing biases.

As informed citizens, we must develop media literacy skills. We must learn to evaluate sources, recognize bias and seek diverse perspectives. The health of our democracy depends on an engaged and critical citizenry.`,
    contentZh: `自由独立的媒体对民主至关重要。它告知公民，让权力承担起责任，促进对重要问题的公共讨论。

媒体在民主社会中发挥着几个至关重要的作用。首先，它向公民提供关于国内外事件的准确及时信息。其次，它为不同观点和公共辩论提供平台。第三，它充当看门狗，调查和揭露腐败、滥用权力和社会不公。

然而，媒体格局正在发生巨大变化。社交媒体的兴起使信息创建和分发民主化了。任何有互联网接入的人现在都可以发布内容并接触全球受众。这既有积极也有消极的影响。

从积极方面看，社交媒体放大了边缘化的声音，促进了草根运动。从消极方面看，它可以快速传播错误信息，创造强化现有偏见的回音室。

作为知情的公民，我们必须培养媒体素养技能。我们必须学会评估来源，识别偏见，寻求不同观点。民主的健康取决于积极参与和批判的公民。`,
    wordCount: 180,
  },
  {
    id: 'uni-u2-u2',
    title: 'Public Speaking and Persuasion',
    titleZh: '公共演讲与说服',
    contentEn: `Public speaking is one of the most important skills in professional and public life. The ability to communicate ideas clearly and persuasively can open doors and create opportunities.

Effective public speaking begins with understanding your audience. What do they already know? What are their concerns and interests? Tailoring your message to your audience is essential for engagement.

A well-structured speech typically has three parts: introduction, body and conclusion. The introduction captures attention and presents the main thesis. The body develops arguments with evidence and examples. The conclusion summarizes key points and calls for action or reflection.

Nonverbal communication is equally important. Eye contact, gestures, facial expressions and vocal variety all contribute to the impact of a speech. Confidence and authenticity help connect with the audience.

Persuasion is at the heart of public speaking. Whether advocating for a policy, selling a product or inspiring action, speakers must appeal to both logic and emotion. Understanding rhetorical devices and psychological principles can make communication more effective and ethical.`,
    contentZh: `公共演讲是职业和公共生活中最重要的技能之一。清晰和有说服力地进行沟通的能力可以打开大门，创造机会。

有效的公共演讲始于了解你的听众。他们已经知道了什么？他们的关切和兴趣是什么？根据听众调整你的信息对于吸引注意力至关重要。

结构良好的演讲通常有三个部分：引言、正文和结论。引言吸引注意力，提出主要论题。正文用证据和例子展开论证。结论总结要点，呼吁行动或反思。

非语言交流同样重要。眼神交流、手势、面部表情和声音变化都有助于演讲的效果。自信和真诚有助于与听众建立联系。

说服是公共演讲的核心。无论是倡导一项政策，推销产品还是激励行动，演讲者必须同时诉诸逻辑和情感。了解修辞手法和心理学原理可以使沟通更有效和合乎道德。`,
    wordCount: 180,
  },
  {
    id: 'uni-u2-u3',
    title: 'Leadership and Teamwork',
    titleZh: '领导力与团队合作',
    contentEn: `Leadership and teamwork are essential skills in the modern workplace. Whether in business, government or civil society, the ability to work effectively with others is crucial for success.

Leadership is not just about authority or position. True leadership is about inspiring others, building trust and creating a shared vision. Effective leaders listen to their team members, acknowledge their contributions and empower them to grow.

Different situations require different leadership styles. Autocratic leadership may be appropriate in crises requiring quick decisions. Democratic leadership fosters participation and innovation. Servant leadership prioritizes the needs of team members.

Teamwork complements leadership. No individual can achieve great things alone. Effective teams leverage diverse skills and perspectives, communicate openly and support each other.

Building successful teams requires attention to group dynamics. Trust must be established. Conflicts must be resolved constructively. Clear roles and responsibilities prevent confusion. Regular reflection helps the team improve continuously.`,
    contentZh: `领导力和团队合作是现代工作场所的基本技能。无论是在商业、政府还是公民社会，与他人有效合作的能力对成功至关重要。

领导力不仅仅是权威或职位。真正的领导力是激励他人、建立信任和创造共同愿景。有效的领导者倾听团队成员的意见，承认他们的贡献，赋权他们成长。

不同情况需要不同的领导风格。专制型领导在需要快速决策的危机中可能适当。民主型领导促进参与和创新。仆人型领导优先考虑团队成员的需求。

团队合作补充领导力。没有人能独自成就大事。有效的团队利用多样化的技能和观点，公开沟通，相互支持。

建立成功的团队需要关注群体动态。必须建立信任。冲突必须建设性地解决。明确的角色和责任防止混乱。定期反思帮助团队持续改进。`,
    wordCount: 180,
  },
  {
    id: 'uni-u2-u4',
    title: 'Philosophy of Happiness',
    titleZh: '幸福的哲学',
    contentEn: `What is happiness? This simple question has occupied philosophers for millennia. Understanding the nature of happiness is essential for living a good life.

Hedonistic theories define happiness as pleasure and the absence of pain. According to this view, happiness is achieved by maximizing pleasure and minimizing suffering. However, this view has been criticized for being too superficial.

Eudaimonic theories, associated with Aristotle, define happiness in terms of flourishing and living virtuously. True happiness, according to this view, comes from developing our capabilities and living in accordance with our values.

Modern positive psychology research has identified several factors that contribute to well-being: positive relationships, engagement in meaningful activities, a sense of accomplishment, and physical health.

Perhaps the most important insight is that happiness is not a destination but a journey. It is found not in the pursuit of pleasure but in the pursuit of a meaningful life. As the poet William Wordsworth wrote, "Getting and spending, we lay waste our powers; Little we see in Nature that is ours."`,
    contentZh: `什么是幸福？这个简单的问题困扰了哲学家数千年。了解幸福的本质对于过美好生活至关重要。

享乐主义理论将幸福定义为快乐和没有痛苦。根据这一观点，幸福是通过最大化快乐和最小化痛苦来实现的。然而，这一观点因过于肤浅而受到批评。

与亚里士多德相关的幸福论将幸福定义为繁荣和美德生活。根据这一观点，真正的幸福来自于发展我们的能力，按照我们的价值观生活。

现代积极心理学研究确定了有助于幸福的几个因素：积极的关系、参与有意义的活动、成就感以及身体健康。

也许最重要的见解是，幸福不是目的地，而是一段旅程。它不是在追求快乐中发现的，而是在追求有意义的生活中发现的。正如诗人威廉·华兹华斯所写："获取与花费，我们浪费了我们的力量；在自然中我们几乎看不到属于我们自己的东西。"`,
    wordCount: 180,
  },
  {
    id: 'uni-u2-u5',
    title: 'Global Health',
    titleZh: '全球健康',
    contentEn: `Global health refers to health problems that transcend national boundaries and require collaboration for their solution. In an interconnected world, health challenges in one country can quickly become challenges everywhere.

Infectious diseases do not respect borders. COVID-19 demonstrated how a virus can spread rapidly around the world, causing devastation everywhere. Fighting such pandemics requires international cooperation in surveillance, vaccine development and distribution.

Non-communicable diseases like heart disease, cancer and diabetes are also global challenges. These diseases are linked to lifestyle factors and are spreading as countries adopt Western diets and sedentary behaviors.

Global health disparities are staggering. People in low-income countries have much shorter life expectancy and higher child mortality rates. They lack access to basic healthcare, essential medicines and trained health workers.

Addressing global health challenges requires addressing their root causes, including poverty, inequality and climate change. It requires building stronger health systems and ensuring equitable access to healthcare. Global solidarity is not just a moral imperative; it is a practical necessity.`,
    contentZh: `全球健康指的是超越国界、需要合作才能解决的健康问题。在一个互联的世界中，一个国家的健康挑战可以迅速成为各地的挑战。

传染病不分国界。COVID-19证明了病毒如何迅速传播到世界各地，在各地造成破坏。应对此类大流行病需要在监测、疫苗开发和分发方面进行国际合作。

心脏病、癌症和糖尿病等非传染性疾病也是全球挑战。这些疾病与生活方式因素相关，随着各国采用西方饮食和久坐行为而蔓延。

全球健康差异令人震惊。低收入国家的人均预期寿命短得多，儿童死亡率更高。他们缺乏基本医疗保健、基本药物和训练有素的卫生工作者。

应对全球健康挑战需要解决其根本原因，包括贫困、不平等和气候变化。它需要建立更强的卫生系统，确保公平获得医疗保健。全球团结不仅是道德要求，也是实际必要性。`,
    wordCount: 180,
  },
  {
    id: 'uni-u2-u6',
    title: 'Sustainable Development',
    titleZh: '可持续发展',
    contentEn: `Sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs. It is the guiding principle for addressing the great challenges of our time.

The concept of sustainable development rests on three pillars: economic growth, social inclusion and environmental protection. These three dimensions are interconnected and mutually reinforcing.

Economic growth is necessary for reducing poverty and improving living standards. However, growth must be inclusive, benefiting all segments of society. Social inclusion ensures that everyone has access to opportunities and resources.

Environmental protection is essential for safeguarding the planet that sustains us. Climate change, biodiversity loss and pollution threaten not only our quality of life but the very survival of human civilization.

Achieving sustainable development requires transformation in how we produce and consume. It requires transitioning to clean energy, adopting circular economy principles and rethinking our relationship with nature. The Sustainable Development Goals provide a roadmap for this transformation.`,
    contentZh: `可持续发展满足当前需求而不损害后代满足自身需求的能力。它是应对我们这个时代重大挑战的指导原则。

可持续发展的概念建立在三个支柱上：经济增长、社会包容和环境保护。这三个维度相互关联、相互强化。

经济增长对于减少贫困和提高生活水平是必要的。然而，增长必须是包容性的，使社会各阶层都能受益。社会包容确保每个人都能获得机会和资源。

环境保护对于保护维持我们的星球至关重要。气候变化、生物多样性丧失和污染不仅威胁我们的生活质量，而且威胁人类文明的生存。

实现可持续发展需要在我们的生产和消费方式进行转变。它需要转向清洁能源，采用循环经济原则，重新思考我们与自然的关系。可持续发展目标为这一转型提供了路线图。`,
    wordCount: 180,
  },
];

// 辅助函数
export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

export function getUnitById(courseId: string, unitId: string): CourseUnit | undefined {
  const course = getCourseById(courseId);
  return course?.units.find(u => u.id === unitId);
}

// 创建课程数据
export const courses: Course[] = [
  {
    id: 'ele-course-1',
    title: 'PEP Primary English',
    titleZh: '人教版小学英语',
    level: 'elementary',
    grade: 'Grade 3-6',
    publisher: "People's Education Press",
    coverColor: 'from-green-400 to-emerald-600',
    description: '人教版PEP小学英语教材（三年级起点），3-6年级共24个单元，涵盖日常生活、校园、家庭、自然等主题',
    units: elementaryUnits,
  },
  {
    id: 'jun-course-1',
    title: "Go for It!",
    titleZh: '人教版初中英语',
    level: 'junior',
    grade: 'Grade 7-8',
    publisher: "People's Education Press",
    coverColor: 'from-blue-400 to-indigo-600',
    description: '人教版Go for It!初中英语教材，七年级共12个单元，涵盖交友、家庭、学校生活、饮食、文化等主题',
    units: juniorUnits,
  },
  {
    id: 'sen-course-1',
    title: 'Senior High School English',
    titleZh: '人教版高中英语',
    level: 'senior',
    grade: 'Grade 10-11',
    publisher: "People's Education Press",
    coverColor: 'from-purple-400 to-violet-600',
    description: '人教版高中英语必修教材，必修1-3共12个单元，涵盖青春、运动、文化遗产、科技、环境、社会等主题',
    units: seniorUnits,
  },
  {
    id: 'uni-course-1',
    title: 'College English',
    titleZh: '人教版大学英语',
    level: 'university',
    grade: 'College',
    publisher: "People's Education Press",
    coverColor: 'from-amber-400 to-orange-600',
    description: '人教版大学英语综合教程，上下册共12个单元，涵盖批判性思维、学术写作、跨文化交流、AI与社会、可持续发展等主题',
    units: universityUnits,
  },
];

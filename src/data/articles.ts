import { Article } from '../types';
import { longArticles, getLongArticleById, getLongArticlesByLevel } from './longArticles';

// 短篇文章列表（不包含longArticles，避免重复）
export const shortArticles: Article[] = [
  {
    id: 'e1',
    title: 'The Little Star',
    titleZh: '小星星',
    contentEn: `A little star is in the sky.
It is very bright at night.
Children love to look at the star.
The star twinkles like a diamond.
Mom and dad point to the star.
The star makes the night beautiful.
I wish upon the star every night.
The little star is our friend.`,
    contentZh: `一颗小星星在天空中。
它在夜晚非常明亮。
孩子们喜欢看着星星。
星星像钻石一样闪烁。
爸爸妈妈指向星星。
星星让夜晚变得美丽。
我每晚都对着星星许愿。
小星星是我们的朋友。`,
    level: 'elementary',
    category: 'literature',
    author: 'Anonymous',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-01-01',
  },
  {
    id: 'e2',
    title: 'My Pet Dog',
    titleZh: '我的宠物狗',
    contentEn: `I have a pet dog.
His name is Buddy.
Buddy is brown and white.
He likes to play with a ball.
Every morning, I walk Buddy in the park.
Buddy runs and jumps happily.
He is my best friend.
I love my dog very much.`,
    contentZh: `我有一只宠物狗。
他的名字叫巴迪。
巴迪是棕色和白色的。
他喜欢玩球。
每天早晨，我带巴迪去公园散步。
巴迪开心地跑着跳着。
他是我的好朋友。
我非常爱我的狗。`,
    level: 'elementary',
    category: 'essay',
    author: 'Emma',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-01-02',
  },
  {
    id: 'e3',
    title: 'The Red Apple',
    titleZh: '红苹果',
    contentEn: `I see a red apple on the table.
The apple is big and round.
I want to eat the apple.
It looks very sweet.
I take a bite.
It is crisp and juicy.
Apples are good for health.
I like to eat apples every day.`,
    contentZh: `我看到桌上有一个红苹果。
苹果又大又圆。
我想吃这个苹果。
它看起来很甜。
我咬了一口。
它又脆又汁多。
苹果对健康有益。
我喜欢每天吃苹果。`,
    level: 'elementary',
    category: 'science',
    author: 'Tom',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-03',
  },
  {
    id: 'e4',
    title: 'My School Day',
    titleZh: '我的学校生活',
    contentEn: `I go to school every day.
I have many friends at school.
We learn reading and math.
Our teacher is very kind.
I like lunch time best.
After school, I play with my friends.
Homework is not too hard.
School is fun!`,
    contentZh: `我每天去学校。
我在学校有很多朋友。
我们学习阅读和数学。
我们的老师很亲切。
我最喜欢午餐时间。
放学后，我和朋友们一起玩。
作业不太难。
学校很有趣！`,
    level: 'elementary',
    category: 'essay',
    author: 'Lucy',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-01-04',
  },
  {
    id: 'e5',
    title: 'The Sun and the Moon',
    titleZh: '太阳和月亮',
    contentEn: `The sun is very big and hot.
It gives us light in the day.
The moon is cool and soft.
It shines at night.
The sun goes down at night.
The moon comes out at night.
They take turns in the sky.
This is how day and night work.`,
    contentZh: `太阳非常大而且很热。
它在白天给我们光。
月亮很凉爽很柔和。
它在夜晚发光。
太阳在夜间落下。
月亮在夜间升起。
它们在天空中交替出现。
这就是白天和黑夜的原理。`,
    level: 'elementary',
    category: 'science',
    author: 'John',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-01-05',
  },
  {
    id: 'e6',
    title: 'The Tortoise and the Hare',
    titleZh: '龟兔赛跑',
    contentEn: `A hare laughs at a tortoise.
The hare runs very fast.
The tortoise walks very slow.
The hare takes a nap under a tree.
The tortoise keeps walking on.
The hare wakes up too late.
The tortoise wins the race.
Slow and steady wins the race.`,
    contentZh: `兔子嘲笑乌龟。
兔子跑得非常快。
乌龟走得非常慢。
兔子在树下睡了一觉。
乌龟继续走着。
兔子醒来太晚了。
乌龟赢得了比赛。
慢而稳才能赢得比赛。`,
    level: 'elementary',
    category: 'literature',
    author: 'Aesop',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-01-06',
  },
  {
    id: 'e7',
    title: 'My Family',
    titleZh: '我的家人',
    contentEn: `I have a happy family.
There are four people in my family.
My dad works in an office.
My mom cooks delicious food.
I have a little sister.
She is very cute.
We love each other very much.
My family is the best!`,
    contentZh: `我有一个幸福的家庭。
我家有四口人。
我爸爸在办公室工作。
我妈妈做美味的食物。
我有一个小妹妹。
她非常可爱。
我们彼此相爱。
我的家庭是最棒的！`,
    level: 'elementary',
    category: 'essay',
    author: 'Amy',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-07',
  },
  {
    id: 'e8',
    title: 'Why is the Sky Blue?',
    titleZh: '为什么天空是蓝色的？',
    contentEn: `The sky looks blue today.
But why is it blue?
The sun gives us white light.
The air scatters the light.
Blue light scatters the most.
So we see a blue sky.
At sunset, the sky is red.
Colors are truly amazing!`,
    contentZh: `今天天空看起来是蓝色的。
但为什么是蓝色的呢？
太阳给我们白色的光。
空气散射着光线。
蓝光散射得最多。
所以我们看到蓝色的天空。
日落时，天空是红色的。
颜色真是太神奇了！`,
    level: 'elementary',
    category: 'science',
    author: 'Science Kids',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-08',
  },
  {
    id: 'e9',
    title: 'The Clever Fox',
    titleZh: '聪明的狐狸',
    contentEn: `A fox is very clever.
He lives in the forest.
One day, he sees some grapes.
They are high up on the vine.
The fox jumps but cannot reach.
He walks away and says.
Those grapes must be sour anyway.
The fox is very smart.`,
    contentZh: `狐狸非常聪明。
他住在森林里。
一天，他看到一些葡萄。
它们高高地挂在藤上。
狐狸跳起来但够不到。
他走开说那些葡萄肯定是酸的。
狐狸非常聪明。`,
    level: 'elementary',
    category: 'literature',
    author: 'Aesop',
    wordCount: 54,
    difficulty: 1,
    createdAt: '2024-01-09',
  },
  {
    id: 'e10',
    title: 'My Favorite Food',
    titleZh: '我最喜欢的食物',
    contentEn: `My favorite food is pizza.
It has cheese on top.
There is tomato sauce too.
Sometimes there are vegetables.
And sometimes there is meat.
Pizza is round and yummy.
I eat pizza with my family.
It makes me very happy!`,
    contentZh: `我最喜欢的食物是披萨。
上面有奶酪。
还有番茄酱。
有时有蔬菜。
有时有肉。
披萨是圆的而且很好吃。
我和家人一起吃披萨。
它让我非常开心！`,
    level: 'elementary',
    category: 'essay',
    author: 'Mike',
    wordCount: 46,
    difficulty: 1,
    createdAt: '2024-01-10',
  },
  {
    id: 'e11',
    title: 'The Four Seasons',
    titleZh: '四季',
    contentEn: `There are four seasons.
Spring is green and warm.
Flowers bloom in spring.
Summer is hot and sunny.
We swim in summer.
Autumn is cool and colorful.
Leaves turn orange and red.
Winter is cold and white.
We play with snow in winter.`,
    contentZh: `有四个季节。
春天是绿色和温暖的。
花开的季节。
夏天是炎热和阳光明媚的。
我们在夏天游泳。
秋天是凉爽的和五彩缤纷的。
树叶变成橙色和红色。
冬天是寒冷和白茫茫的。
我们在冬天玩雪。`,
    level: 'elementary',
    category: 'science',
    author: 'Nature',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-01-11',
  },
  {
    id: 'e12',
    title: 'The Lion and the Mouse',
    titleZh: '狮子和老鼠',
    contentEn: `A lion is big and strong.
A mouse is very small.
The lion catches the mouse.
The mouse begs for mercy.
The lion laughs but lets go.
Later, the lion is trapped.
The mouse hears the lion's cry.
The mouse saves the lion.
Even the small can help the big.`,
    contentZh: `狮子又大又强壮。
老鼠非常小。
狮子抓住了老鼠。
老鼠请求饶恕。
狮子笑着放走了它。
后来，狮子被困住了。
老鼠听到狮子的叫声。
老鼠救了狮子。
即使是小动物也能帮助大动物。`,
    level: 'elementary',
    category: 'literature',
    author: 'Aesop',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-01-12',
  },
  {
    id: 'e13',
    title: 'My Bedroom',
    titleZh: '我的卧室',
    contentEn: `This is my bedroom.
It is small but cozy.
I have a blue bed.
There is a desk for my books.
A lamp sits on the desk.
My toys are in a box.
I like my bedroom very much.
It is my favorite place.`,
    contentZh: `这是我的卧室。
它小但很舒适。
我有一张蓝色的床。
有一个书桌放我的书。
台灯放在书桌上。
我的玩具放在盒子里。
我非常喜欢我的卧室。
这是我最喜欢的地方。`,
    level: 'elementary',
    category: 'essay',
    author: 'Sarah',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-13',
  },
  {
    id: 'e14',
    title: 'Water',
    titleZh: '水',
    contentEn: `Water is very important.
We drink water every day.
Water has no color.
Water has no smell.
It can be cold or hot.
Ice is frozen water.
Steam is hot water.
We need water to live.`,
    contentZh: `水非常重要。
我们每天喝水。
水没有颜色。
水没有气味。
水可以是冷的或热的。
冰是冻结的水。
蒸汽是热水。
我们需要水来生存。`,
    level: 'elementary',
    category: 'science',
    author: 'Science Kids',
    wordCount: 42,
    difficulty: 1,
    createdAt: '2024-01-14',
  },
  {
    id: 'e15',
    title: 'The Ugly Duckling',
    titleZh: '丑小鸭',
    contentEn: `A duck has many babies.
One baby looks different.
The other ducks are mean.
The ugly duckling is sad.
Time goes by slowly.
The ugly duckling grows up.
He becomes a beautiful swan.
Beauty comes in time.`,
    contentZh: `一只鸭子有很多宝宝。
一只宝宝看起来不一样。
其他鸭子很坏。
丑小鸭很伤心。
时间慢慢过去。
丑小鸭长大了。
他变成了一只美丽的天鹅。
美丽终会到来。`,
    level: 'elementary',
    category: 'literature',
    author: 'Andersen',
    wordCount: 46,
    difficulty: 1,
    createdAt: '2024-01-15',
  },
  {
    id: 'e16',
    title: 'My Best Friend',
    titleZh: '我最好的朋友',
    contentEn: `My best friend is Lily.
We play together every day.
She has long hair and a big smile.
We like to draw pictures.
We share our snacks too.
When I am sad, she comforts me.
We will be friends forever.
A best friend is precious.`,
    contentZh: `我最好的朋友是莉莉。
我们每天一起玩。
她有长头发和大笑容。
我们喜欢画画。
我们也分享零食。
当我伤心时，她安慰我。
我们会永远做好朋友。
最好的朋友是很珍贵的。`,
    level: 'elementary',
    category: 'essay',
    author: 'Emma',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-01-16',
  },
  {
    id: 'e17',
    title: 'Rainbow',
    titleZh: '彩虹',
    contentEn: `After the rain, a rainbow appears.
It has seven beautiful colors.
Red, orange, yellow, green.
Blue, indigo, and violet.
The rainbow is like a bridge.
It connects the earth and sky.
We can only see it sometimes.
Rainbows make us happy.`,
    contentZh: `雨后，出现了彩虹。
它有七种美丽的颜色。
红色、橙色、黄色、绿色。
蓝色、靛蓝色和紫色。
彩虹像一座桥。
它连接着大地和天空。
我们有时才能看到它。
彩虹让我们开心。`,
    level: 'elementary',
    category: 'science',
    author: 'Nature',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-17',
  },
  {
    id: 'e18',
    title: 'The Boy Who Cried Wolf',
    titleZh: '狼来了',
    contentEn: `A boy watches sheep.
He is bored and cries wolf.
People come but see no wolf.
He laughs and does it again.
A real wolf comes one day.
The boy cries for help.
No one comes this time.
Honesty is very important.`,
    contentZh: `一个男孩看着羊。
他很无聊就喊狼来了。
人们来了但没看到狼。
他又笑又做了一次。
一天真的狼来了。
男孩喊救命。
这次没人来了。
诚实是非常重要的。`,
    level: 'elementary',
    category: 'literature',
    author: 'Aesop',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-18',
  },
  {
    id: 'e19',
    title: 'My Birthday Party',
    titleZh: '我的生日派对',
    contentEn: `Today is my birthday!
I invite my friends to my party.
We eat cake and ice cream.
We play games together.
I receive many gifts.
My parents give me a bicycle.
I am very happy today.
Birthdays are wonderful!`,
    contentZh: `今天是我的生日！
我邀请朋友来参加派对。
我们吃蛋糕和冰激凌。
我们一起玩游戏。
我收到很多礼物。
爸爸妈妈送给我一辆自行车。
我今天非常开心。
生日真是太棒了！`,
    level: 'elementary',
    category: 'essay',
    author: 'Tom',
    wordCount: 46,
    difficulty: 1,
    createdAt: '2024-01-19',
  },
  {
    id: 'e20',
    title: 'The Ocean',
    titleZh: '海洋',
    contentEn: `The ocean is very big.
It has blue water.
Many fish live in the ocean.
Some are big and some are small.
Whales are the biggest animals.
The ocean is also home to dolphins.
We can swim in the ocean.
The ocean is amazing!`,
    contentZh: `海洋非常大。
它有蓝色的水。
很多鱼生活在海里。
有些大有些小。
鲸鱼是最大的动物。
海豚也生活在海洋里。
我们可以在海里游泳。
海洋真是太神奇了！`,
    level: 'elementary',
    category: 'science',
    author: 'Ocean Life',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-20',
  },
  {
    id: 'e21',
    title: 'Goldilocks and the Three Bears',
    titleZh: '金发女孩和三只熊',
    contentEn: `Goldilocks goes into a house.
She sees three bowls of porridge.
She tastes each one.
Too hot, too cold, just right.
She eats all the just right one.
She sits on three chairs.
The small chair breaks!
She sleeps in three beds.
The bears come home.
Goldilocks runs away fast.`,
    contentZh: `金发女孩走进一所房子。
她看到三碗粥。
她尝了每一碗。
太烫了、太凉了、正合适。
她把正合适的那碗吃了。
她坐在三把椅子上。
小椅子坏了！
她睡在三张床上。
熊们回来了。
金发女孩飞快地跑走了。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 62,
    difficulty: 1,
    createdAt: '2024-01-21',
  },
  {
    id: 'e22',
    title: 'A Rainy Day',
    titleZh: '下雨天',
    contentEn: `It is raining outside today.
I wear my yellow raincoat.
I also wear my boots.
I like to jump in puddles.
The rain makes the air fresh.
I listen to the rain sound.
After the rain, we see a rainbow.
Rainy days are fun too!`,
    contentZh: `今天外面下雨了。
我穿着我的黄色雨衣。
我还穿着我的靴子。
我喜欢在水坑里跳。
雨水让空气变得清新。
我听着雨声。
雨后，我们看到了彩虹。
下雨天也很有趣！`,
    level: 'elementary',
    category: 'essay',
    author: 'Lily',
    wordCount: 50,
    difficulty: 1,
    createdAt: '2024-01-22',
  },
  {
    id: 'e23',
    title: 'Plants',
    titleZh: '植物',
    contentEn: `Plants grow from seeds.
They need sun and water.
The roots go into the soil.
The stem grows up toward the sun.
Leaves make food from sunlight.
Some plants have flowers.
Some plants grow vegetables.
Plants are very important to us.`,
    contentZh: `植物从种子长出来。
它们需要阳光和水。
根长进土壤里。
茎朝着太阳往上长。
叶子利用阳光制造食物。
有些植物有花。
有些植物长蔬菜。
植物对我们非常重要。`,
    level: 'elementary',
    category: 'science',
    author: 'Botany',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-01-23',
  },
  {
    id: 'e24',
    title: 'Little Red Riding Hood',
    titleZh: '小红帽',
    contentEn: `A little girl wears red.
Everyone calls her Red Riding Hood.
Her grandmother lives in the forest.
Mother asks her to bring food.
She meets a wolf in the woods.
The wolf goes to grandmother's house.
He eats the grandmother!
He tries to eat Red Riding Hood too.
A hunter saves them both.
Always be careful with strangers.`,
    contentZh: `一个小女孩穿着红色。
大家都叫她小红帽。
她奶奶住在森林里。
妈妈让她带食物去。
她在树林里遇到一只狼。
狼去了奶奶家。
他吃了奶奶！
他也想吃掉小红帽。
猎人救了他们。
要时刻小心陌生人。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 62,
    difficulty: 1,
    createdAt: '2024-01-24',
  },
  {
    id: 'e25',
    title: 'My Toys',
    titleZh: '我的玩具',
    contentEn: `I have many toys.
My favorite is a teddy bear.
He is brown and soft.
I also have a red ball.
I can bounce it very high.
My toy car goes fast.
I line up my toys on the shelf.
Toys make me happy.
I play with them every day.`,
    contentZh: `我有很多玩具。
我最喜欢的是泰迪熊。
他是棕色的而且很软。
我还有一个红色的球。
我可以把它弹得很高。
我的玩具车跑得很快。
我把玩具排在架子上。
玩具让我开心。
我每天都玩它们。`,
    level: 'elementary',
    category: 'essay',
    author: 'Baby',
    wordCount: 50,
    difficulty: 1,
    createdAt: '2024-01-25',
  },
  {
    id: 'e26',
    title: 'Birds',
    titleZh: '鸟类',
    contentEn: `Birds can fly in the sky.
They have feathers and two wings.
Most birds can sing beautifully.
They build nests in trees.
Birds lay eggs in their nests.
Baby birds hatch from the eggs.
Some birds eat seeds.
Some birds eat fish.
Birds are wonderful creatures.`,
    contentZh: `鸟可以在天空飞翔。
它们有羽毛和两只翅膀。
大多数鸟唱得很好听。
它们在树上筑巢。
鸟在巢里下蛋。
小鸟从蛋里孵出来。
有些鸟吃种子。
有些鸟吃鱼。
鸟是神奇的生物。`,
    level: 'elementary',
    category: 'science',
    author: 'Zoology',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-01-26',
  },
  {
    id: 'e27',
    title: 'The Three Little Pigs',
    titleZh: '三只小猪',
    contentEn: `Three little pigs build houses.
One uses straw.
One uses sticks.
One uses bricks.
The wolf blows down the first house.
He blows down the second house.
He cannot blow down the brick house.
He tries to come down the chimney.
The pigs boil water in the pot.
The wolf runs away.
Hard work pays off.`,
    contentZh: `三只小猪建房子。
一只用稻草。
一只用木棍。
一只用砖块。
狼吹倒了第一所房子。
他吹倒了第二所房子。
他吹不倒砖房。
他想从烟囱下来。
小猪们在锅里烧水。
狼跑掉了。
努力工作会有回报。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-01-27',
  },
  {
    id: 'e28',
    title: 'Going to the Zoo',
    titleZh: '去动物园',
    contentEn: `I go to the zoo with my family.
We see many animals there.
Lions are the kings of the animals.
Elephants have long trunks.
Monkeys are very playful.
Giraffes have very long necks.
I like the pandas the most.
They eat bamboo all day.
The zoo is so much fun!`,
    contentZh: `我和家人去动物园。
我们在那里看到很多动物。
狮子是动物之王。
大象有长长的鼻子。
猴子非常顽皮。
长颈鹿有长长的脖子。
我最喜欢熊猫。
它们整天吃竹子。
动物园真好玩！`,
    level: 'elementary',
    category: 'essay',
    author: 'Family Trip',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-01-28',
  },
  {
    id: 'e29',
    title: 'The Solar System',
    titleZh: '太阳系',
    contentEn: `The sun is the center.
Earth goes around the sun.
There are eight planets.
Mercury is the closest to the sun.
Venus is the hottest planet.
Mars looks red.
Jupiter is the biggest planet.
Saturn has beautiful rings.
We live on planet Earth.`,
    contentZh: `太阳是中心。
地球绕着太阳转。
有八颗行星。
水星离太阳最近。
金星是最热的行星。
火星看起来是红色的。
土星是最大的行星。
土星有美丽的光环。
我们住在地球上。`,
    level: 'elementary',
    category: 'science',
    author: 'Space',
    wordCount: 46,
    difficulty: 1,
    createdAt: '2024-01-29',
  },
  {
    id: 'e30',
    title: 'Cinderella',
    titleZh: '灰姑娘',
    contentEn: `Cinderella lives with her stepmother.
She does all the housework.
A prince invites everyone to a ball.
Cinderella cannot go.
A fairy godmother helps her.
She gets a beautiful dress and glass shoes.
She goes to the ball and meets the prince.
She leaves at midnight.
The prince finds the glass shoe.
They live happily ever after.
Good things happen to good people.`,
    contentZh: `灰姑娘和继母住在一起。
她做所有的家务。
王子邀请所有人参加舞会。
灰姑娘不能去。
仙女教母帮助她。
她得到一件漂亮的裙子和水晶鞋。
她去参加舞会并遇到了王子。
她在午夜离开。
王子找到了水晶鞋。
他们从此幸福地生活。
好人有好报。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 68,
    difficulty: 1,
    createdAt: '2024-01-30',
  },
  {
    id: 'e31',
    title: 'The Little Engine That Could',
    titleZh: '小火车头做到了',
    contentEn: `A little engine tried to pull a train up a steep hill.
The big engines said they could not do it.
The little engine said I think I can.
She tried and tried with all her might.
She pulled the train over the tall hill.
It was a happy ending for everyone.
Believing in yourself is very important.
You can do anything if you try.`,

    contentZh: `一个小火车头试图把火车拉上陡峭的山。
大火车头说他们做不到。
小火车头说我认为我可以。
她用尽全力一次又一次地尝试。
她把火车拉过了高山。
每个人都有了幸福的结局。
相信自己非常重要。
只要你尝试，什么事都能做到。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-02-01',
  },
  {
    id: 'e32',
    title: 'My Garden',
    titleZh: '我的花园',
    contentEn: `I have a small garden in my backyard.
I planted some flowers and vegetables.
The sunflowers grow very tall.
The tomatoes turn red when they are ripe.
I water my garden every morning.
The bees come to visit the flowers.
My garden is a peaceful place.
I love spending time there.`,

    contentZh: `我的后院有一个小花园。
我种了一些花和蔬菜。
向日葵长得非常高。
西红柿成熟时会变成红色。
我每天早上给花园浇水。
蜜蜂来拜访花朵。
我的花园是一个宁静的地方。
我喜欢在那里度过时光。`,
    level: 'elementary',
    category: 'essay',
    author: 'Garden',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-02-02',
  },
  {
    id: 'e33',
    title: 'Why Do We Have Seasons?',
    titleZh: '为什么我们有四季？',
    contentEn: `The earth goes around the sun.
It also tilts as it travels.
When our part of the earth tilts toward the sun, it is summer.
When we tilt away, it is winter.
In between, we have spring and autumn.
The seasons change all year round.
This is why we have different weather.
Science makes things easy to understand.`,

    contentZh: `地球绕着太阳转。
它在转动时也会倾斜。
当地球朝向太阳倾斜时，是夏天。
当我们倾斜远离时，是冬天。
在两者之间，是春天和秋天。
季节全年都在变化。
这就是我们有不同天气的原因。
科学让事情变得容易理解。`,
    level: 'elementary',
    category: 'science',
    author: 'Science Kids',
    wordCount: 56,
    difficulty: 1,
    createdAt: '2024-02-03',
  },
  {
    id: 'e34',
    title: 'Jack and the Beanstalk',
    titleZh: '杰克与魔豆',
    contentEn: `Jack sells his cow for some magic beans.
His mother is very angry.
The beans grow into a huge beanstalk.
Jack climbs up to the sky.
He finds a giant's castle up there.
Jack takes some gold and runs.
He chops down the beanstalk.
Never make deals with strangers.`,

    contentZh: `杰克把他的牛换成了一些神奇的豆子。
他妈妈非常生气。
豆子长成了巨大的藤蔓。
杰克爬上了天空。
他在那里发现了一座巨人的城堡。
杰克拿走了一些金子然后跑了。
他砍倒了藤蔓。
永远不要和陌生人做交易。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 54,
    difficulty: 1,
    createdAt: '2024-02-04',
  },
  {
    id: 'e35',
    title: 'My Mom',
    titleZh: '我的妈妈',
    contentEn: `My mom is the best in the world.
She makes breakfast every morning.
She helps me with my homework.
She reads me stories at bedtime.
Her smile makes me feel warm.
She works hard every single day.
I give her hugs and kisses.
I love my mom forever.`,

    contentZh: `我的妈妈是世界上最好的。
她每天早上做早餐。
她帮助我做作业。
她在睡前给我讲故事。
她的微笑让我感到温暖。
她每天都很努力地工作。
我给她拥抱和亲吻。
我会永远爱我的妈妈。`,
    level: 'elementary',
    category: 'essay',
    author: 'Kids',
    wordCount: 50,
    difficulty: 1,
    createdAt: '2024-02-05',
  },
  {
    id: 'e36',
    title: 'Fire Safety',
    titleZh: '消防安全',
    contentEn: `Fire can be very dangerous.
We should never play with matches.
If we see fire, we must tell an adult.
We should have a fire escape plan.
Stay low if there is smoke.
Test the door before opening it.
Know the emergency number 119.
Safety first always!`,

    contentZh: `火可能非常危险。
我们永远不应该玩火柴。
如果我们看到火，必须告诉大人。
我们应该有一个火灾逃生计划。
如果有烟，要保持低姿态。
开门前要先测试一下。
记住紧急电话号码119。
安全第一！`,
    level: 'elementary',
    category: 'science',
    author: 'Safety',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-02-06',
  },
  {
    id: 'e37',
    title: 'The Enormous Turnip',
    titleZh: '巨大的萝卜',
    contentEn: `An old man plants a turnip.
The turnip grows enormous.
He tries to pull it out but cannot.
He calls his wife to help.
Still, they cannot pull it out.
They call the granddaughter.
Then the dog and the cat.
Together, they finally pull it out.
Teamwork makes the dream work.`,

    contentZh: `一个老爷爷种了一个萝卜。
萝卜长得非常巨大。
他试图把它拔出来但拔不动。
他叫老奶奶来帮忙。
还是拔不出来。
他们叫来了孙女。
然后是狗和猫。
大家一起，终于把它拔了出来。
团队合作让梦想成真。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 62,
    difficulty: 1,
    createdAt: '2024-02-07',
  },
  {
    id: 'e38',
    title: 'Going to the Dentist',
    titleZh: '看牙医',
    contentEn: `I go to the dentist twice a year.
The dentist checks my teeth.
She counts my teeth one by one.
Then she cleans them with a spinning brush.
It tickles a little bit.
I must brush my teeth every day.
Too many sweets are not good.
The dentist says my teeth are healthy.`,

    contentZh: `我每年去看两次牙医。
牙医检查我的牙齿。
她一个一个地数我的牙齿。
然后用旋转的刷子清洁它们。
有点痒痒的。
我必须每天刷牙。
吃太多甜食不好。
牙医说我的牙齿很健康。`,
    level: 'elementary',
    category: 'essay',
    author: 'Health',
    wordCount: 54,
    difficulty: 1,
    createdAt: '2024-02-08',
  },
  {
    id: 'e39',
    title: 'The Food Chain',
    titleZh: '食物链',
    contentEn: `All living things need food.
Plants make their own food.
Rabbits eat plants.
Foxes eat rabbits.
When foxes die, they become food for plants.
This is how the food chain works.
Energy passes from one to another.
We are all connected in nature.`,

    contentZh: `所有生物都需要食物。
植物自己制造食物。
兔子吃植物。
狐狸吃兔子。
当狐狸死后，它们成为植物的食物。
这就是食物链的工作方式。
能量从一个传递到另一个。
我们在自然界中都是相连的。`,
    level: 'elementary',
    category: 'science',
    author: 'Nature',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-02-09',
  },
  {
    id: 'e40',
    title: 'Snow White',
    titleZh: '白雪公主',
    contentEn: `Snow White has a wicked stepmother.
The queen is jealous of her beauty.
Snow White runs away to the forest.
She meets seven kind dwarfs.
The wicked queen gives her a poison apple.
A prince saves her with true love.
The evil queen gets her punishment.
Goodness always wins over evil.`,

    contentZh: `白雪公主有一个邪恶的继母。
皇后嫉妒她的美貌。
白雪公主逃到了森林里。
她遇到了七个善良的小矮人。
邪恶的皇后给了她一个毒苹果。
王子用真爱救了她。
邪恶的皇后得到了惩罚。
善良总是战胜邪恶。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-02-10',
  },
  {
    id: 'e41',
    title: 'My Dad',
    titleZh: '我的爸爸',
    contentEn: `My dad is tall and strong.
He teaches me to ride a bike.
He plays soccer with me on weekends.
He makes funny jokes at dinner.
I sit on his shoulders at the park.
He tucks me in at night.
My dad is my hero.
I want to be like him someday.`,

    contentZh: `我的爸爸又高又壮。
他教我骑自行车。
周末他和我一起踢足球。
他在晚餐时讲有趣的笑话。
我在公园里坐在他的肩膀上。
他晚上给我掖被子。
我的爸爸是我的英雄。
我希望有一天能像他一样。`,
    level: 'elementary',
    category: 'essay',
    author: 'Kids',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-02-11',
  },
  {
    id: 'e42',
    title: 'Magnets',
    titleZh: '磁铁',
    contentEn: `Magnets can push and pull things.
Not all metals are magnetic.
Iron and steel are magnetic.
North pole attracts south pole.
North pole repels north pole.
Magnets are used in many things.
Speakers and motors use magnets.
Magnets are really cool!`,

    contentZh: `磁铁可以推拉东西。
不是所有的金属都有磁性。
铁和钢是有磁性的。
北极吸引南极。
北极排斥北极。
磁铁被用在很多东西上。
扬声器和电机使用磁铁。
磁铁真的很酷！`,
    level: 'elementary',
    category: 'science',
    author: 'Science Kids',
    wordCount: 48,
    difficulty: 1,
    createdAt: '2024-02-12',
  },
  {
    id: 'e43',
    title: 'Puss in Boots',
    titleZh: '穿靴子的猫',
    contentEn: `A clever cat helps his master.
He dresses in boots like a noble.
The cat catches rabbits for the king.
He makes his master seem very rich.
The king likes the master very much.
The master marries the princess.
The cat becomes a great lord.
Cleverness beats strength every time.`,

    contentZh: `一只聪明的猫帮助它的主人。
它穿得像贵族一样戴着靴子。
猫为国王抓兔子。
它让主人看起来非常富有。
国王非常喜欢这个主人。
主人娶了公主。
猫成了伟大的领主。
聪明总是战胜力量。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-02-13',
  },
  {
    id: 'e44',
    title: 'At the Beach',
    titleZh: '在海滩上',
    contentEn: `The beach is full of fun things.
I build sandcastles with my bucket.
The waves splash on my feet.
I collect pretty shells in a bag.
Seagulls fly overhead in the sky.
I swim in the cool blue water.
The sun sets and the sky turns orange.
What a perfect day at the beach!`,

    contentZh: `海滩上满是好玩的东西。
我用桶堆沙堡。
海浪溅在我的脚上。
我在袋子里收集漂亮的贝壳。
海鸥在头顶的天空中飞翔。
我在凉爽的蓝色海水里游泳。
太阳落山，天空变成橙色。
在海滩完美的一天！`,
    level: 'elementary',
    category: 'essay',
    author: 'Vacation',
    wordCount: 54,
    difficulty: 1,
    createdAt: '2024-02-14',
  },
  {
    id: 'e45',
    title: 'The Butterfly Life Cycle',
    titleZh: '蝴蝶的生命周期',
    contentEn: `A butterfly starts as a tiny egg.
The egg becomes a caterpillar.
The caterpillar eats and grows bigger.
It makes a cocoon around itself.
Inside, it changes completely.
Then a beautiful butterfly comes out.
It flies around looking for flowers.
The cycle starts all over again.`,

    contentZh: `蝴蝶从一个小小的卵开始。
卵变成毛毛虫。
毛毛虫吃东西，越长越大。
它在身体周围结了一个茧。
在里面，它完全改变了。
然后一只美丽的蝴蝶出来了。
它飞来飞去寻找花朵。
这个循环又开始重复了。`,
    level: 'elementary',
    category: 'science',
    author: 'Nature',
    wordCount: 52,
    difficulty: 1,
    createdAt: '2024-02-15',
  },
  {
    id: 'e46',
    title: "The Emperor's New Clothes",
    titleZh: '皇帝的新装',
    contentEn: `A king loves nice new clothes.
Two tricksters say they can make magic clothes.
Only wise people can see them.
Everyone pretends they see the clothes.
A little boy says the king has no clothes.
Everyone laughs at the king.
The boy is the only one telling the truth.
Always be honest like the boy.`,

    contentZh: `国王喜欢漂亮的新衣服。
两个骗子说他们能做神奇的衣服。
只有聪明的人才能看见。
每个人都假装看见了衣服。
一个小男孩说国王没穿衣服。
每个人都嘲笑国王。
这个男孩是唯一说真话的人。
要像这个男孩一样永远诚实。`,
    level: 'elementary',
    category: 'literature',
    author: 'Andersen',
    wordCount: 58,
    difficulty: 1,
    createdAt: '2024-02-16',
  },
  {
    id: 'e47',
    title: 'My Classroom',
    titleZh: '我的教室',
    contentEn: `My classroom is bright and clean.
There are many desks and chairs.
A big blackboard hangs on the wall.
My teacher's desk is in front.
We have colorful posters everywhere.
My backpack hangs on my hook.
The clock tells us when it is time.
I love learning in my classroom.`,

    contentZh: `我的教室明亮干净。
有很多桌子和椅子。
一块大黑板挂在墙上。
老师的桌子在前面。
我们到处都有彩色的海报。
我的书包挂在我的挂钩上。
时钟告诉我们什么时候该做什么。
我喜欢在我的教室里学习。`,
    level: 'elementary',
    category: 'essay',
    author: 'School',
    wordCount: 54,
    difficulty: 1,
    createdAt: '2024-02-17',
  },
  {
    id: 'e48',
    title: 'Electricity',
    titleZh: '电',
    contentEn: `Electricity is very powerful.
It lights our homes and schools.
We must be careful with electricity.
Water and electricity do not mix.
Lightning is electricity in nature.
Batteries store electricity too.
We should turn off lights when leaving.
Electricity makes life easier.`,

    contentZh: `电是非常强大的。
它点亮我们的家和学校。
我们必须小心使用电。
水和电不能混合。
闪电是自然界中的电。
电池也能储存电。
离开时应该关灯。
电让生活更轻松。`,
    level: 'elementary',
    category: 'science',
    author: 'Science Kids',
    wordCount: 46,
    difficulty: 1,
    createdAt: '2024-02-18',
  },
  {
    id: 'e49',
    title: 'Beauty and the Beast',
    titleZh: '美女与野兽',
    contentEn: `A kind girl named Belle lives in a village.
Her father picks a rose for her.
A beast captures her father.
Belle goes to the castle to save him.
The Beast is actually a prince inside.
They become friends over time.
True love breaks the spell.
Beauty is more than how you look.`,

    contentZh: `一个叫贝儿的善良女孩住在村子里。
她父亲为她摘了一朵玫瑰。
一个野兽抓住了她父亲。
贝儿去城堡救他。
野兽内心其实是一个王子。
随着时间的推移，他们成为了朋友。
真爱打破了魔法。
美不仅仅是外表。`,
    level: 'elementary',
    category: 'literature',
    author: 'Fairy Tale',
    wordCount: 60,
    difficulty: 1,
    createdAt: '2024-02-19',
  },
  {
    id: 'e50',
    title: 'My Grandparents',
    titleZh: '我的祖父母',
    contentEn: `My grandparents are very kind.
They live in a cozy house.
Grandma bakes delicious cookies.
Grandpa tells me old stories.
They have a big garden with flowers.
I visit them every summer.
They give the best hugs ever.
I am lucky to have them.`,

    contentZh: `我的祖父母非常善良。
他们住在一个舒适的房子里。
奶奶烤美味的饼干。
爷爷给我讲古老的故事。
他们有一个种满鲜花的大花园。
我每年夏天都去看他们。
他们给了我最温暖的拥抱。
我很幸运有他们。`,
    level: 'elementary',
    category: 'essay',
    author: 'Family',
    wordCount: 50,
    difficulty: 1,
    createdAt: '2024-02-20',
  },

  // ==========================================
  // 初中 (Junior High Level) - 30篇
  // ==========================================
  {
    id: 'j1',
    title: 'A Rainy Day',
    titleZh: '雨天',
    contentEn: `It was a rainy morning. The sky was gray and cloudy. I could hear the rain tapping on the window. The streets were wet and shiny. People were carrying umbrellas. Children were jumping in the puddles. I love the smell of rain on the earth. It makes everything fresh and clean. After the rain, a beautiful rainbow appeared in the sky. Nature is truly amazing.`,
    contentZh: `那是一个下雨的早晨。天空灰蒙蒙的。我能听到雨敲打窗户的声音。街道湿润而闪亮。人们打着伞。孩子们在水坑里跳来跳去。我喜欢雨落在泥土上的气味。它让一切变得清新干净。雨后，天空中出现了一道美丽的彩虹。大自然真是太神奇了。`,
    level: 'junior',
    category: 'essay',
    author: 'Sarah',
    wordCount: 86,
    difficulty: 2,
    createdAt: '2024-02-01',
  },
  {
    id: 'j2',
    title: 'My Best Friend',
    titleZh: '我最好的朋友',
    contentEn: `My best friend is Lily. We have known each other since primary school. Lily has long black hair and a bright smile. She is always kind and helpful. When I am sad, she comforts me. When I have problems, she helps me find solutions. We often study together and share our dreams. A true friend is someone who stays with you through good and bad times. I am lucky to have Lily as my best friend.`,
    contentZh: `我最好的朋友是莉莉。我们从小学就认识了。莉莉有一头黑色的长发和灿烂的笑容。她总是善良且乐于助人。当我难过时，她安慰我。当我有困难时，她帮助我找到解决办法。我们经常一起学习，分享梦想。真正的朋友是那些陪你走过顺境和逆境的人。我很幸运有莉莉做我最好的朋友。`,
    level: 'junior',
    category: 'essay',
    author: 'Amy',
    wordCount: 98,
    difficulty: 2,
    createdAt: '2024-02-02',
  },
  {
    id: 'j3',
    title: 'The Internet',
    titleZh: '互联网',
    contentEn: `The internet has changed our lives in many ways. We can send emails instead of letters. We can watch movies and TV shows online. Students can study through online courses. Shopping has become easier with online stores. However, we must use the internet safely. We should not share personal information with strangers. We need to balance screen time with outdoor activities. The internet is a powerful tool when used wisely.`,
    contentZh: `互联网在很多方面改变了我们的生活。我们可以发邮件而不是写信。我们可以在网上看电影和电视节目。学生可以通过在线课程学习。网上购物让购物变得更简单。然而，我们必须安全地使用互联网。我们不应该与陌生人分享个人信息。我们需要平衡屏幕时间和户外活动。互联网是一个明智使用就会很有价值的工具。`,
    level: 'junior',
    category: 'science',
    author: 'Mike',
    wordCount: 102,
    difficulty: 2,
    createdAt: '2024-02-03',
  },
  {
    id: 'j4',
    title: 'Travel to London',
    titleZh: '伦敦之旅',
    contentEn: `London is the capital of England. It is a city full of history and culture. Big Ben is a famous clock tower. The Tower of London has a long history. You can see the Queen at Buckingham Palace. London has many beautiful parks. The London Eye offers amazing views. British food includes fish and chips. London is a wonderful place to visit.`,
    contentZh: `伦敦是英国的首都。这座城市充满了历史和文化。大本钟是著名的钟塔。伦敦塔有很长的历史。你可以在白金汉宫看到女王。伦敦有很多美丽的公园。伦敦眼提供惊人的景色。英国食物包括炸鱼和薯条。伦敦是一个旅游的好地方。`,
    level: 'junior',
    category: 'news',
    author: 'Traveler',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-04',
  },
  {
    id: 'j5',
    title: 'Chinese Festivals',
    titleZh: '中国节日',
    contentEn: `China has many traditional festivals. Spring Festival is the most important one. Families get together and have big dinners. People set off fireworks to celebrate. Dragon Boat Festival is in summer. We eat zongzi and watch boat races. Mid-Autumn Festival is about the full moon. Families eat mooncakes together. These festivals bring people happiness.`,
    contentZh: `中国有很多传统节日。春节是最重要的节日。家人团聚在一起吃大餐。人们放烟花庆祝。端午节在夏天。我们吃粽子、看龙舟比赛。中秋节是关于满月的节日。家人一起吃月饼。这些节日给人们带来快乐。`,
    level: 'junior',
    category: 'news',
    author: 'Culture',
    wordCount: 72,
    difficulty: 2,
    createdAt: '2024-02-05',
  },
  {
    id: 'j6',
    title: 'Thomas Edison',
    titleZh: '托马斯·爱迪生',
    contentEn: `Thomas Edison was a great inventor. He invented the light bulb. He also invented the phonograph. Edison failed many times before success. He never gave up on his ideas. He worked very hard every day. His inventions changed the world. We still use many of his inventions today. Edison showed us the value of persistence.`,
    contentZh: `托马斯·爱迪生是一位伟大的发明家。他发明了电灯。他还发明了留声机。爱迪生在成功之前失败了很多次。他从不放弃自己的想法。他每天努力工作。他的发明改变了世界。我们今天仍在使用他的许多发明。爱迪生向我们展示了坚持的价值。`,
    level: 'junior',
    category: 'essay',
    author: 'Biography',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-06',
  },
  {
    id: 'j7',
    title: 'The Power of Habit',
    titleZh: '习惯的力量',
    contentEn: `Habits shape our daily lives. Good habits lead to success. Bad habits can hold us back. It takes time to build a new habit. We need to do something for 21 days. Small changes make big differences. We should start with simple habits. Reading every day is a great habit. Exercise improves both body and mind.`,
    contentZh: `习惯塑造我们的日常生活。好习惯导致成功。坏习惯会阻碍我们。建立新习惯需要时间。我们需要做某事21天。小变化会产生大差异。我们应该从简单的习惯开始。每天阅读是一个很好的习惯。运动改善身心。`,
    level: 'junior',
    category: 'essay',
    author: 'Self Help',
    wordCount: 72,
    difficulty: 2,
    createdAt: '2024-02-07',
  },
  {
    id: 'j8',
    title: 'My Summer Vacation',
    titleZh: '我的暑假',
    contentEn: `Last summer, I went to the beach with my family. The beach was beautiful with golden sand. We built sandcastles and swam in the sea. I collected some seashells as souvenirs. In the evening, we watched the sunset. It was a memorable trip. I learned to be more independent. I cannot wait for this year's vacation.`,
    contentZh: `去年夏天，我和家人去了海滩。沙滩很美，有金色的沙子。我们堆沙堡，在海里游泳。我收集了一些贝壳作为纪念品。晚上，我们看了日落。那是一次难忘的旅行。我学会了更加独立。我等不及今年的假期了。`,
    level: 'junior',
    category: 'essay',
    author: 'Vacation',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-08',
  },
  {
    id: 'j9',
    title: 'Coping with Peer Pressure',
    titleZh: '应对同伴压力',
    contentEn: `Peer pressure is common among teenagers. Sometimes friends want you to do things you do not want to do. It is important to stay true to yourself. You have the right to say no. True friends will respect your decisions. Stand up for what you believe in. It is better to be yourself than to fit in. Your values matter more than popularity.`,
    contentZh: `同伴压力在青少年中很常见。有时朋友想让你做你不想做的事。保持真实的自己很重要。你有权说不。真正的朋友会尊重你的决定。坚持你的信仰。做自己比融入群体更好。你的价值观比人气更重要。`,
    level: 'junior',
    category: 'essay',
    author: 'Growth',
    wordCount: 76,
    difficulty: 2,
    createdAt: '2024-02-09',
  },
  {
    id: 'j10',
    title: 'The Importance of Reading',
    titleZh: '阅读的重要性',
    contentEn: `Reading is one of the best habits we can develop. Books take us to different worlds. We can learn new things through reading. Reading improves our vocabulary and language skills. It also helps us think more critically. We should read at least 30 minutes every day. Reading before bed helps us relax. A good book is a great friend.`,
    contentZh: `阅读是我们能培养的最好习惯之一。书籍带我们去不同的世界。我们可以通过阅读学习新事物。阅读提高我们的词汇量和语言能力。它也帮助我们更批判性地思考。我们应该每天至少阅读30分钟。睡前阅读帮助我们放松。一本好书是一个好朋友。`,
    level: 'junior',
    category: 'essay',
    author: 'Education',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-10',
  },
  {
    id: 'j11',
    title: 'My Dream Job',
    titleZh: '我的梦想职业',
    contentEn: `When I grow up, I want to become a doctor. Doctors help sick people get better. It is a job that requires both knowledge and compassion. I want to make a difference in people's lives. My parents always tell me to study hard. I know becoming a doctor takes many years of study. I am ready to work hard for my dream.`,
    contentZh: `长大后，我想成为一名医生。医生帮助病人康复。这是一份需要知识和同情心的工作。我想改变人们的生活。我的父母总是告诉我要努力学习。我知道成为一名医生需要多年的学习。我准备好为我的梦想努力工作了。`,
    level: 'junior',
    category: 'essay',
    author: 'Dreams',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-11',
  },
  {
    id: 'j12',
    title: 'Healthy Eating',
    titleZh: '健康饮食',
    contentEn: `Healthy eating is very important for our bodies. We should eat more vegetables and fruits. Fast food is tasty but not healthy. Drinking water is better than sugary drinks. We need a balanced diet. Breakfast is the most important meal of the day. Eating slowly helps us digest food better. Good eating habits keep us strong and energetic.`,
    contentZh: `健康饮食对我们的身体非常重要。我们应该多吃蔬菜和水果。快餐好吃但不健康。喝水比喝含糖饮料好。我们需要均衡的饮食。早餐是一天中最重要的一餐。慢慢吃有助于我们更好地消化食物。良好的饮食习惯让我们强壮有力。`,
    level: 'junior',
    category: 'science',
    author: 'Health',
    wordCount: 76,
    difficulty: 2,
    createdAt: '2024-02-12',
  },
  {
    id: 'j13',
    title: 'The Story of Albert Einstein',
    titleZh: '阿尔伯特·爱因斯坦的故事',
    contentEn: `Albert Einstein was a famous scientist. He was born in Germany in 1879. He was not a good student in school. But he was very curious about how things work. He developed the theory of relativity. His equation E equals mc squared is very famous. Einstein won the Nobel Prize in Physics. He also worked for peace in the world. His ideas changed science forever.`,
    contentZh: `阿尔伯特·爱因斯坦是一位著名的科学家。他于1879年出生在德国。他在学校不是一个好学生。但他非常好奇事物是如何运作的。他发展了相对论。他的方程式E=mc²非常著名。爱因斯坦获得了诺贝尔物理学奖。他也为世界和平工作。他的想法永远改变了科学。`,
    level: 'junior',
    category: 'essay',
    author: 'Biography',
    wordCount: 86,
    difficulty: 2,
    createdAt: '2024-02-13',
  },
  {
    id: 'j14',
    title: 'My Hobbies',
    titleZh: '我的爱好',
    contentEn: `I have many hobbies. Playing basketball is my favorite sport. It keeps me fit and teaches me teamwork. I also like drawing pictures. Art allows me to express my feelings. Reading books is another hobby of mine. It helps me learn new things every day. Having hobbies makes my life more colorful. I encourage everyone to find their own hobbies.`,
    contentZh: `我有很多爱好。打篮球是我最喜欢的运动。它让我保持健康并教会我团队合作。我也喜欢画画。艺术让我表达我的情感。读书是我另一个爱好。它帮助我每天学习新事物。爱好让我的生活更加多彩。我鼓励每个人找到自己的爱好。`,
    level: 'junior',
    category: 'essay',
    author: 'Personal',
    wordCount: 82,
    difficulty: 2,
    createdAt: '2024-02-14',
  },
  {
    id: 'j15',
    title: 'The Environment',
    titleZh: '环境',
    contentEn: `The environment is getting worse. Pollution is a big problem. We should reduce, reuse, and recycle. Using public transportation helps reduce emissions. Planting trees is good for the air. We should not waste water. Every small action counts. Protecting the environment is everyone's responsibility. Let's work together to make the world better.`,
    contentZh: `环境正在变差。污染是一个大问题。我们应该减少、再利用和回收。使用公共交通有助于减少排放。植树对空气有好处。我们不应该浪费水。每一个小行动都很重要。保护环境是每个人的责任。让我们一起努力让世界变得更美好。`,
    level: 'junior',
    category: 'science',
    author: 'Environment',
    wordCount: 76,
    difficulty: 2,
    createdAt: '2024-02-15',
  },
  {
    id: 'j16',
    title: 'Travel to Paris',
    titleZh: '巴黎之旅',
    contentEn: `Paris is called the City of Light. The Eiffel Tower is its most famous landmark. You can see amazing art at the Louvre Museum. Notre-Dame Cathedral is a beautiful church. French food is famous all over the world. Croissants and baguettes are delicious. Paris is also known for fashion. It is a dream destination for many people.`,
    contentZh: `巴黎被称为光之城。埃菲尔铁塔是其最著名的地标。你可以在卢浮宫博物馆看到令人惊叹的艺术。巴黎圣母院是一座美丽的教堂。法国菜在全世界都很有名。羊角面包和法棍很好吃。巴黎也以时尚闻名。这是许多人梦寐以求的目的地。`,
    level: 'junior',
    category: 'news',
    author: 'Travel',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-16',
  },
  {
    id: 'j17',
    title: 'Dealing with Stress',
    titleZh: '应对压力',
    contentEn: `Stress is common in modern life. Students often feel stressed about exams. It is important to manage stress properly. Exercise is a great way to reduce stress. Talking to friends helps a lot. Taking breaks is also essential. We should not work all the time. Getting enough sleep is crucial. Remember to take care of your mental health.`,
    contentZh: `压力在现代生活中很常见。学生经常对考试感到压力。正确管理压力很重要。运动是减少压力的好方法。和朋友聊天很有帮助。休息也是必要的。我们不应该一直工作。充足的睡眠至关重要。记得照顾你的心理健康。`,
    level: 'junior',
    category: 'essay',
    author: 'Wellness',
    wordCount: 80,
    difficulty: 2,
    createdAt: '2024-02-17',
  },
  {
    id: 'j18',
    title: 'The History of the Internet',
    titleZh: '互联网的历史',
    contentEn: `The internet started as a military project. It was called ARPANET in the 1960s. Scientists used it to share information. In the 1990s, the World Wide Web was created. Now billions of people use the internet. We can communicate instantly across the world. The internet has changed how we live and work. It continues to evolve every day.`,
    contentZh: `互联网始于一个军事项目。它在20世纪60年代被称为ARPANET。科学家用它来分享信息。90年代，万维网被创造了。现在数十亿人使用互联网。我们可以即时与世界各地的人交流。互联网改变了我们的生活和工作方式。它每天都在继续发展。`,
    level: 'junior',
    category: 'science',
    author: 'Technology',
    wordCount: 80,
    difficulty: 2,
    createdAt: '2024-02-18',
  },
  {
    id: 'j19',
    title: 'My Favorite Season',
    titleZh: '我最喜欢的季节',
    contentEn: `Spring is my favorite season. The weather becomes warm and pleasant. Flowers bloom everywhere in spring. Birds sing beautiful songs. People go outside to enjoy the sunshine. Spring represents new beginnings. It makes me feel hopeful and happy. The colors of spring are so vibrant. I love everything about spring.`,
    contentZh: `春天是我最喜欢的季节。天气变得温暖舒适。春天到处都开满了花。鸟儿唱着美丽的歌。人们走出家门享受阳光。春天代表新的开始。它让我感到充满希望和快乐。春天的颜色是如此鲜艳。我喜欢春天的一切。`,
    level: 'junior',
    category: 'essay',
    author: 'Seasons',
    wordCount: 74,
    difficulty: 2,
    createdAt: '2024-02-19',
  },
  {
    id: 'j20',
    title: 'The Value of Time',
    titleZh: '时间的价值',
    contentEn: `Time is very valuable. Once lost, it can never be recovered. We should make the most of our time. Planning helps us use time efficiently. We should set goals and work toward them. Procrastination wastes precious time. Spending time with family is important. Time management is a skill that everyone should learn.`,
    contentZh: `时间是非常宝贵的。一旦失去，就再也找不回来了。我们应该充分利用我们的时间。计划帮助我们有效地利用时间。我们应该设定目标并努力实现它们。拖延浪费宝贵的时间。和家人在一起很重要。时间管理是每个人应该学习的技能。`,
    level: 'junior',
    category: 'essay',
    author: 'Philosophy',
    wordCount: 76,
    difficulty: 2,
    createdAt: '2024-02-20',
  },
  {
    id: 'j21',
    title: 'The Wonder of Space',
    titleZh: '太空的奇妙',
    contentEn: `Space is vast and mysterious. The universe contains billions of galaxies. Our solar system is just a small part. Astronauts travel to space to explore. They live and work on the International Space Station. Space exploration helps us understand our planet better. Many young people dream of becoming astronauts. The stars in the sky are actually distant suns.`,
    contentZh: `太空广阔而神秘。宇宙包含数十亿个星系。我们的太阳系只是一小部分。宇航员去太空探索。他们在国际空间站上生活和工作。太空探索帮助我们更好地了解我们的星球。许多年轻人梦想成为宇航员。天空中的星星实际上是遥远的太阳。`,
    level: 'junior',
    category: 'science',
    author: 'Space',
    wordCount: 82,
    difficulty: 2,
    createdAt: '2024-02-21',
  },
  {
    id: 'j22',
    title: 'Learning a New Language',
    titleZh: '学习一门新语言',
    contentEn: `Learning a new language is challenging but rewarding. It opens doors to new cultures and opportunities. The best way to learn is to practice every day. Watching movies in the target language helps a lot. Speaking with native speakers improves quickly. Making mistakes is part of the learning process. Don't be afraid to try. Language learning expands your mind.`,
    contentZh: `学习一门新语言具有挑战性但很有回报。它打开了新文化和机会的大门。最好的学习方法是每天练习。看目标语言的电影很有帮助。与母语者交谈进步很快。犯错是学习过程的一部分。不要害怕尝试。语言学习拓展你的思维。`,
    level: 'junior',
    category: 'essay',
    author: 'Education',
    wordCount: 82,
    difficulty: 2,
    createdAt: '2024-02-22',
  },
  {
    id: 'j23',
    title: 'The Benefits of Exercise',
    titleZh: '运动的好处',
    contentEn: `Exercise is essential for good health. It strengthens our heart and muscles. Regular exercise helps us maintain a healthy weight. It also improves our mood and energy levels. Walking for 30 minutes every day is simple but effective. Exercise reduces the risk of many diseases. It also helps us sleep better. Let's make exercise a habit.`,
    contentZh: `运动对健康至关重要。它加强我们的心脏和肌肉。定期运动帮助我们保持健康的体重。它也改善我们的情绪和精力水平。每天步行30分钟简单但有效。运动降低许多疾病的风险。它也帮助我们睡得更好。让我们把运动变成一种习惯。`,
    level: 'junior',
    category: 'science',
    author: 'Health',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-02-23',
  },
  {
    id: 'j24',
    title: 'The Story of Marie Curie',
    titleZh: '居里夫人的故事',
    contentEn: `Marie Curie was a pioneering scientist. She was born in Poland in 1867. She discovered two new chemical elements. She was the first woman to win a Nobel Prize. She won Nobel Prizes in both Physics and Chemistry. Despite facing discrimination, she never gave up. Her discoveries changed medical treatment. She remains an inspiration to scientists everywhere.`,
    contentZh: `居里夫人是一位开拓性的科学家。她于1867年出生在波兰。她发现了两种新的化学元素。她是第一位获得诺贝尔奖的女性。她获得了物理学和诺贝尔奖。尽管面临歧视，她从未放弃。她的发现改变了医疗方法。她仍然激励着各地的科学家。`,
    level: 'junior',
    category: 'essay',
    author: 'Biography',
    wordCount: 82,
    difficulty: 2,
    createdAt: '2024-02-24',
  },
  {
    id: 'j25',
    title: 'My Community',
    titleZh: '我的社区',
    contentEn: `I live in a friendly neighborhood. There are many shops and parks nearby. My neighbors are kind and helpful. We often help each other. The community center offers many activities. Children can play sports there. Elderly people have a place to meet. A strong community makes life better for everyone.`,
    contentZh: `我住在一个友好的社区。附近有很多商店和公园。我的邻居们善良且乐于助人。我们经常互相帮助。社区中心提供很多活动。孩子们可以在那里运动。老年人有一个聚会的地方。强大的社区让每个人的生活更美好。`,
    level: 'junior',
    category: 'essay',
    author: 'Community',
    wordCount: 68,
    difficulty: 2,
    createdAt: '2024-02-25',
  },
  {
    id: 'j26',
    title: 'Animals in Danger',
    titleZh: '濒危动物',
    contentEn: `Many animals are in danger of extinction. Habitat loss is the main cause. Climate change also threatens wildlife. We should protect endangered species. Zoos and reserves help save animals. Recycling reduces pollution that harms animals. Supporting conservation organizations makes a difference. Every species plays an important role in nature.`,
    contentZh: `许多动物面临灭绝的危险。栖息地丧失是主要原因。气候变化也威胁着野生动物。我们应该保护濒危物种。动物园和保护区帮助拯救动物。回收减少污染，保护动物。支持保护组织会有所作为。每个物种在自然界中都扮演着重要的角色。`,
    level: 'junior',
    category: 'science',
    author: 'Environment',
    wordCount: 74,
    difficulty: 2,
    createdAt: '2024-02-26',
  },
  {
    id: 'j27',
    title: 'The Art of Cooking',
    titleZh: '烹饪的艺术',
    contentEn: `Cooking is both a skill and an art. Good food brings people together. Learning to cook saves money and is healthier. Everyone should know how to make at least a few dishes. Cooking at home is often more nutritious than eating out. Following recipes helps beginners. With practice, anyone can become a good cook. Food connects us to our culture.`,
    contentZh: `烹饪既是一种技能也是一种艺术。好的食物让人们聚在一起。学烹饪省钱更健康。每个人至少应该会做几道菜。在家做饭通常比外出就餐更有营养。按照食谱帮助初学者练习。任何人都可以成为好厨师。食物连接我们与文化。`,
    level: 'junior',
    category: 'essay',
    author: 'Lifestyle',
    wordCount: 80,
    difficulty: 2,
    createdAt: '2024-02-27',
  },
  {
    id: 'j28',
    title: 'The Importance of Teamwork',
    titleZh: '团队合作的重要性',
    contentEn: `Teamwork is essential in today's world. No one can succeed alone. Working in a team combines different strengths. We can accomplish more together. Team members learn from each other. Good communication is the key to success. Respecting others' ideas matters a lot. Together we can achieve great things.`,
    contentZh: `团队合作在当今世界是必不可少的。没有人能独自成功。在团队中工作结合不同的力量。我们可以一起完成更多。团队成员互相学习。良好的沟通是成功的关键。尊重他人的想法很重要。一起我们可以取得伟大的成就。`,
    level: 'junior',
    category: 'essay',
    author: 'Growth',
    wordCount: 70,
    difficulty: 2,
    createdAt: '2024-02-28',
  },
  {
    id: 'j29',
    title: 'Music in Our Lives',
    titleZh: '生活中的音乐',
    contentEn: `Music plays an important role in our lives. It can make us happy or sad. Different cultures have different kinds of music. Learning to play an instrument is great for the brain. Music brings people together at concerts. Singing can reduce stress and improve mood. Everyone should enjoy some form of music. It enriches our souls.`,
    contentZh: `音乐在我们的生活中扮演重要角色。它可以让我们开心或悲伤。不同的文化有不同的音乐。学习演奏乐器对大脑很好。音乐在音乐会上把人们聚在一起。唱歌可以减少压力，改善情绪。每个人都应该享受某种形式的音乐。它丰富我们的灵魂。`,
    level: 'junior',
    category: 'essay',
    author: 'Art',
    wordCount: 76,
    difficulty: 2,
    createdAt: '2024-02-29',
  },
  {
    id: 'j30',
    title: 'The Joy of Reading',
    titleZh: '阅读的乐趣',
    contentEn: `Reading brings immense joy to our lives. A good book can transport us to another world. We can live countless lives through books. Reading expands our imagination and knowledge. It improves our concentration and memory. Reading before bed helps us relax and sleep better. Libraries are treasure houses of books. Let us make reading a lifelong habit.`,
    contentZh: `阅读给我们的生活带来巨大的快乐。一本好书可以带我们去另一个世界。我们可以通过书籍体验无数的人生。阅读拓展我们的想象力和知识。它提高我们的注意力和记忆力。睡前阅读帮助我们放松和睡得更好。图书馆是书籍的宝库。让我们把阅读变成终身的习惯。`,
    level: 'junior',
    category: 'essay',
    author: 'Books',
    wordCount: 78,
    difficulty: 2,
    createdAt: '2024-03-01',
  },
  {
    id: 'j31',
    title: 'The Importance of Time Management',
    titleZh: '时间管理的重要性',
    contentEn: `Time management is a crucial skill for students. Good time management helps us balance study and leisure. We should make a schedule to organize our daily activities. Prioritizing important tasks leads to better results. Procrastination wastes valuable time and causes stress. By managing time wisely, we can achieve our goals and still have time for hobbies. Remember, time lost cannot be recovered. Let's use every minute productively.`,
    contentZh: `时间管理是学生的一项关键技能。良好的时间管理帮助我们平衡学习和休闲。我们应该制定计划来组织日常活动。优先处理重要任务会带来更好的结果。拖延会浪费宝贵的时间并造成压力。通过明智地管理时间，我们可以实现目标，同时还有时间培养爱好。请记住，失去的时间无法挽回。让我们有效地利用每一分钟。`,
    level: 'junior',
    category: 'essay',
    author: 'Student Life',
    wordCount: 88,
    difficulty: 2,
    createdAt: '2024-03-02',
  },
  {
    id: 'j32',
    title: 'My Dream Career',
    titleZh: '我的梦想职业',
    contentEn: `Every child has a dream career. Some want to be doctors, others want to be teachers. I dream of becoming a software engineer. I am fascinated by technology and how computers work. I enjoy creating programs that solve problems. Technology is the future, and I want to be part of it. To achieve my dream, I must study hard and learn programming languages. Dreams give us direction and motivation.`,
    contentZh: `每个孩子都有梦想的职业。有些人想成为医生，有些人想成为老师。我的梦想是成为一名软件工程师。我对科技和计算机的工作原理很着迷。我喜欢创建解决问题的程序。科技是未来，我想成为其中的一部分。为了实现我的梦想，我必须努力学习编程语言。梦想给我们方向和动力。`,
    level: 'junior',
    category: 'essay',
    author: 'Young Coder',
    wordCount: 92,
    difficulty: 2,
    createdAt: '2024-03-03',
  },
  {
    id: 'j33',
    title: 'Healthy Eating Habits',
    titleZh: '健康的饮食习惯',
    contentEn: `Healthy eating is essential for our body and mind. We should eat more vegetables and fruits every day. They provide vitamins and minerals that keep us strong. We should avoid too much junk food and sugary drinks. Drinking enough water is also important for good health. Breakfast is the most important meal of the day. A balanced diet gives us energy to study and play. Let's develop healthy eating habits from now on.`,
    contentZh: `健康饮食对我们的身心至关重要。我们每天应该多吃蔬菜和水果。它们提供保持我们健康的维生素和矿物质。我们应该避免太多的垃圾食品和含糖饮料。多喝水对健康也很重要。早餐是一天中最重要的一餐。均衡的饮食给我们学习和玩耍的能量。让我们从现在开始养成健康的饮食习惯。`,
    level: 'junior',
    category: 'science',
    author: 'Health Coach',
    wordCount: 90,
    difficulty: 2,
    createdAt: '2024-03-04',
  },
  {
    id: 'j34',
    title: 'The Wonders of Space Exploration',
    titleZh: '太空探索的奇妙',
    contentEn: `Space exploration has always fascinated humans. Since the first moon landing, we have made incredible progress. Satellites help us communicate and navigate. Space telescopes let us see distant galaxies. Mars rovers are searching for signs of life. Some scientists believe humans will live on other planets one day. Space research has also improved our daily lives with new technologies. The universe is vast and full of mysteries waiting to be solved.`,
    contentZh: `太空探索一直让人类着迷。自从第一次登月以来，我们取得了令人难以置信的进步。卫星帮助我们通信和导航。太空望远镜让我们看到遥远的星系。火星探测器正在寻找生命的迹象。一些科学家认为人类有一天会生活在其他星球上。太空研究也通过新技术改善了我们的日常生活。宇宙浩瀚无垠，充满了等待解决的谜团。`,
    level: 'junior',
    category: 'science',
    author: 'Space Fan',
    wordCount: 96,
    difficulty: 2,
    createdAt: '2024-03-05',
  },
  {
    id: 'j35',
    title: 'My Favorite Festival',
    titleZh: '我最喜欢的节日',
    contentEn: `Chinese New Year is my favorite festival. It is celebrated in January or February. Before the new year, families clean their homes and decorate them with red decorations. On New Year's Eve, we have a big dinner with fish, dumplings, and many delicious dishes. We also give red envelopes with lucky money to children. During the festival, we watch dragon dances and set off firecrackers. It is a time for family reunion and celebration.`,
    contentZh: `春节是我最喜欢的节日。它在一月或二月庆祝。在新年前，家庭打扫房屋，用红色装饰品装饰。除夕夜，我们吃鱼、饺子和许多美味的菜肴作为大餐。我们也给孩子们的红包里装压岁钱。节日期间，我们观看舞龙和放鞭炮。这是家庭团聚和庆祝的时刻。`,
    level: 'junior',
    category: 'essay',
    author: 'Tradition',
    wordCount: 94,
    difficulty: 2,
    createdAt: '2024-03-06',
  },
  {
    id: 'j36',
    title: 'The Benefits of Exercise',
    titleZh: '运动的好处',
    contentEn: `Regular exercise is important for maintaining good health. Physical activity strengthens our muscles and bones. It also improves our cardiovascular system. Exercise helps us maintain a healthy weight and reduces the risk of diseases. Beyond the body, exercise is also good for the mind. It reduces stress and improves our mood. We should exercise at least three times a week. Sports like swimming, running, and cycling are excellent choices.`,
    contentZh: `经常锻炼对保持健康很重要。体育活动增强我们的肌肉和骨骼。它也改善我们的心血管系统。锻炼帮助我们保持健康的体重，降低患病风险。除了身体，锻炼对心灵也有好处。它减轻压力，改善我们的情绪。我们应该每周至少锻炼三次。游泳、跑步和骑自行车等运动是很好的选择。`,
    level: 'junior',
    category: 'science',
    author: 'Sports Doctor',
    wordCount: 90,
    difficulty: 2,
    createdAt: '2024-03-07',
  },
  {
    id: 'j37',
    title: 'My Hometown',
    titleZh: '我的家乡',
    contentEn: `My hometown is a small coastal city. It is not very big, but it has beautiful scenery. The sea breeze is cool and refreshing. In the morning, fishermen go out to sea to catch fish. The local food is fresh and delicious, especially seafood. Every summer, many tourists visit my hometown to enjoy the beaches. The people here are friendly and warm-hearted. I feel proud of my hometown and miss it when I am away.`,
    contentZh: `我的家乡是一个小的海滨城市。它不大，但有美丽的风景。海风凉爽清新。早晨，渔民出海捕鱼。当地食物新鲜美味，尤其是海鲜。每年夏天，许多游客来我的家乡享受海滩。这里的人们友好热情。我为我的家乡感到骄傲，离开时会想念它。`,
    level: 'junior',
    category: 'essay',
    author: 'Local',
    wordCount: 92,
    difficulty: 2,
    createdAt: '2024-03-08',
  },
  {
    id: 'j38',
    title: 'Protecting Our Environment',
    titleZh: '保护我们的环境',
    contentEn: `The environment is our home and we must protect it. Pollution is harming our planet in many ways. We should reduce, reuse, and recycle whenever possible. Planting more trees helps clean the air. Using public transportation reduces carbon emissions. We should not waste water or electricity. Small actions can make a big difference. If everyone does their part, we can create a cleaner and greener world for future generations.`,
    contentZh: `环境是我们的家园，我们必须保护它。污染正在以多种方式损害我们的星球。我们应该尽可能地减少、再利用和回收利用。多植树有助于清洁空气。使用公共交通减少碳排放。我们不应该浪费水或电。小行动可以带来大改变。如果每个人都尽自己的一份力量，我们可以为后代创造一个更清洁、更绿色的世界。`,
    level: 'junior',
    category: 'science',
    author: 'Eco Warrior',
    wordCount: 92,
    difficulty: 2,
    createdAt: '2024-03-09',
  },
  {
    id: 'j39',
    title: 'The Role of Technology in Education',
    titleZh: '科技在教育中的作用',
    contentEn: `Technology has transformed the way we learn. Interactive whiteboards make lessons more engaging. Students can access educational resources online anytime. E-books are convenient and save paper. Learning apps make studying fun and personalized. Online classes allow us to learn from the best teachers worldwide. However, we must balance screen time with traditional learning. Technology should enhance, not replace, good teaching. Used wisely, technology empowers both students and teachers.`,
    contentZh: `科技改变了我们学习的方式。交互式白板使课程更有吸引力。学生可以随时在线访问教育资源。电子书方便且节约纸张。学习应用程序使学习有趣且个性化。在线课程让我们能够向世界各地最好的老师学习。然而，我们必须平衡屏幕时间和传统学习。科技应该增强而不是取代好的教学。明智地使用，科技赋权学生和教师。`,
    level: 'junior',
    category: 'science',
    author: 'EdTech',
    wordCount: 94,
    difficulty: 2,
    createdAt: '2024-03-10',
  },
  {
    id: 'j40',
    title: 'A Memorable Trip',
    titleZh: '一次难忘的旅行',
    contentEn: `Last summer, my family visited Beijing. It was one of the most memorable trips of my life. We visited the Great Wall, which was truly magnificent. The Forbidden City showed us thousands of years of Chinese history. We also tried Beijing duck, which was delicious. Walking on Tiananmen Square was an emotional experience. The trip taught me a lot about Chinese culture and history. I took many photos to remember this special journey.`,
    contentZh: `去年夏天，我的家人去了北京。这是我一生中最难忘的旅行之一。我们参观了长城，它真的很宏伟。故宫向我们展示了数千年的中国历史。我们还尝了北京烤鸭，非常美味。在天安门广场散步是一次感人的经历。这次旅行让我学到了很多关于中国传统文化的知识。我拍了很多照片来记住这次特殊的旅程。`,
    level: 'junior',
    category: 'essay',
    author: 'Traveler',
    wordCount: 96,
    difficulty: 2,
    createdAt: '2024-03-11',
  },
  {
    id: 'j41',
    title: 'The Value of Hard Work',
    titleZh: '勤奋的价值',
    contentEn: `Hard work is the key to success in life. There is no shortcut to achieving our goals. Successful people often work harder than others. Thomas Edison failed many times before inventing the light bulb. J.K. Rowling was rejected by many publishers before Harry Potter became famous. These stories teach us that persistence pays off. Talent alone is not enough without effort. Every step we take towards our goals matters. Let's work hard and never give up.`,
    contentZh: `勤奋是人生成功的关键。实现我们的目标没有捷径。成功的人往往比其他人更努力。托马斯·爱迪生在发明电灯泡之前失败了很多次。J.K.罗琳在《哈利·波特》成名之前被许多出版商拒绝。这些故事告诉我们坚持会有回报。没有努力，才华是不够的。我们朝着目标迈出的每一步都很重要。让我们努力工作，永不放弃。`,
    level: 'junior',
    category: 'essay',
    author: 'Motivation',
    wordCount: 94,
    difficulty: 2,
    createdAt: '2024-03-12',
  },
  {
    id: 'j42',
    title: 'My Favorite Animal',
    titleZh: '我最喜欢的动物',
    contentEn: `My favorite animal is the panda. Pandas are native to China and are considered national treasures. They have a unique appearance with their black and white fur. Pandas are gentle and peaceful animals. They spend most of their time eating bamboo. Watching pandas play is always entertaining. Unfortunately, pandas are endangered due to habitat loss. China has established reserves to protect them. I hope future generations can also see these adorable animals.`,
    contentZh: `我最喜欢的动物是熊猫。熊猫原产于中国，被视为国宝。它们有着独特的黑白毛皮外观。熊猫是温和和平的动物。它们大部分时间都在吃竹子。看熊猫玩耍总是很有趣。不幸的是，由于栖息地丧失，熊猫濒临灭绝。中国已经建立了保护区来保护它们。我希望后代也能看到这些可爱的动物。`,
    level: 'junior',
    category: 'science',
    author: 'Animal Lover',
    wordCount: 92,
    difficulty: 2,
    createdAt: '2024-03-13',
  },
  {
    id: 'j43',
    title: 'The Power of Positive Thinking',
    titleZh: '积极思考的力量',
    contentEn: `Positive thinking can change our lives for the better. When we think positively, we feel happier and more confident. Positive people attract opportunities and good relationships. Challenges become easier to overcome with the right mindset. Instead of saying I cannot, we should say I will try. Gratitude helps us see the good in our lives. Reading inspiring stories boosts our motivation. A positive attitude is a choice that leads to a more fulfilling life.`,
    contentZh: `积极思考可以让我们的生活变得更好。当我们积极思考时，我们感到更快乐和更自信。积极的人吸引机会和良好的人际关系。有了正确的心态，挑战变得更容易克服。我们不应该说"我不能"，而应该说"我会尝试"。感恩帮助我们看到生活中的美好。阅读激励故事增强我们的动力。积极的态度是一种选择，会带来更充实的生活。`,
    level: 'junior',
    category: 'essay',
    author: 'Psychology',
    wordCount: 94,
    difficulty: 2,
    createdAt: '2024-03-14',
  },
  {
    id: 'j44',
    title: 'How to Stay Safe Online',
    titleZh: '如何安全上网',
    contentEn: `The internet is useful but can also be dangerous. We must learn to stay safe online. Never share your password with anyone. Be careful about the personal information you post on social media. Do not meet strangers from the internet in person. Use strong and different passwords for different accounts. Install antivirus software to protect your computer. If something online makes you uncomfortable, tell a trusted adult. Online safety is everyone's responsibility.`,
    contentZh: `互联网很有用，但也可能有危险。我们必须学会安全上网。永远不要和任何人分享你的密码。在社交媒体上发布个人信息时要小心。不要亲自见来自互联网的陌生人。为不同的账户使用强密码和不同的密码。安装防病毒软件来保护您的电脑。如果网上的东西让你不舒服，告诉一个值得信任的成年人。在线安全是每个人的责任。`,
    level: 'junior',
    category: 'science',
    author: 'Cyber Safety',
    wordCount: 90,
    difficulty: 2,
    createdAt: '2024-03-15',
  },
  {
    id: 'j45',
    title: 'My Favorite Book',
    titleZh: '我最喜欢的一本书',
    contentEn: `My favorite book is The Little Prince. It was written by Antoine de Saint-Exupery. The story is about a young prince who travels to different planets. Through his journey, he learns about love, friendship, and what truly matters in life. The book has beautiful illustrations and deep messages. It can be enjoyed by both children and adults. Every time I read it, I discover something new. This book has truly touched my heart.`,
    contentZh: `我最喜欢的书是《小王子》。它由安托万·德·圣-埃克苏佩里撰写。这个故事关于一位小王子访问不同的星球。在他的旅程中，他了解了爱、友谊和生活中真正重要的东西。这本书有美丽的插图和深刻的信息。儿童和成人都可以欣赏它。每次我读它，我都会发现新的东西。这本书真的触动了我的心。`,
    level: 'junior',
    category: 'literature',
    author: 'Bookworm',
    wordCount: 92,
    difficulty: 2,
    createdAt: '2024-03-16',
  },
  {
    id: 'j46',
    title: 'The Importance of Teamwork',
    titleZh: '团队合作的重要性',
    contentEn: `Teamwork is essential in school and in life. Working together achieves better results than working alone. Each person brings different skills and ideas to a team. Teamwork teaches us communication and cooperation. Sports teams demonstrate how collaboration leads to victory. Group projects in school prepare us for future careers. Being a good team player means listening to others and contributing your best. Together, we can achieve great things.`,
    contentZh: `团队合作在学校和生活中都是必不可少的。一起工作比单独工作能取得更好的结果。每个人为团队带来不同的技能和想法。团队合作教会我们沟通和合作。体育团队展示了合作如何带来胜利。学校的 group 项目为我们未来的职业生涯做准备。成为一个好的团队成员意味着倾听他人并贡献你最好的。团结起来，我们可以取得伟大的成就。`,
    level: 'junior',
    category: 'essay',
    author: 'Coach',
    wordCount: 92,
    difficulty: 2,
    createdAt: '2024-03-17',
  },
  {
    id: 'j47',
    title: 'Music in My Life',
    titleZh: '我生活中的音乐',
    contentEn: `Music plays an important role in my daily life. I listen to music when I study, exercise, and relax. Different types of music create different moods. Classical music can calm our minds. Energetic pop songs make me feel happy and motivated. Learning to play a musical instrument develops discipline and patience. Music connects people across cultures and languages. I cannot imagine my life without music. It is truly a universal language.`,
    contentZh: `音乐在我的日常生活中扮演着重要的角色。我学习、运动和放松时听音乐。不同类型的音乐创造不同的情绪。古典音乐可以平静我们的心灵。充满活力的流行歌曲让我感到快乐和动力。学习演奏乐器培养纪律和耐心。音乐跨越文化和语言连接人们。没有音乐，我无法想象我的生活。它真的是一种通用语言。`,
    level: 'junior',
    category: 'essay',
    author: 'Music Fan',
    wordCount: 94,
    difficulty: 2,
    createdAt: '2024-03-18',
  },
  {
    id: 'j48',
    title: 'The Beauty of Reading',
    titleZh: '阅读之美',
    contentEn: `Reading opens doors to infinite knowledge and imagination. Through books, we can travel to distant lands without leaving home. We can experience adventures our daily lives cannot offer. Reading improves our vocabulary and writing skills. It broadens our perspectives and deepens our understanding of the world. Whether fiction or non-fiction, every book teaches us something valuable. Developing a reading habit enriches our lives in countless ways.`,
    contentZh: `阅读打开了通往无限知识和想象力的大门。通过书籍，我们可以不出门就能去远方旅行。我们可以体验日常生活无法提供的冒险。阅读提高了我们的词汇量和写作能力。它拓宽了我们的视野，加深了我们对世界的理解。无论是小说还是非小说，每本书都教会我们有价值的东西。养成阅读习惯以无数方式丰富我们的生活。`,
    level: 'junior',
    category: 'literature',
    author: 'Library',
    wordCount: 90,
    difficulty: 2,
    createdAt: '2024-03-19',
  },
  {
    id: 'j49',
    title: 'My Plan for the Future',
    titleZh: '我对未来的计划',
    contentEn: `I have big plans for my future. First, I want to graduate from university with good grades. Then, I hope to find a job in my chosen field. I also want to travel to different countries and experience new cultures. In the long term, I dream of starting my own business. Of course, I will never stop learning and improving myself. My plans may change over time, but having goals gives me purpose. I am excited to see what the future holds.`,
    contentZh: `我对未来有很大的计划。首先，我想以优异的成绩从大学毕业。然后，我希望在我的选择领域找到一份工作。我也想去不同的国家旅行，体验新的文化。从长远来看，我梦想创办自己的企业。当然，我永远不会停止学习和提升自己。我的计划可能会随着时间改变，但有目标给了我方向。我很兴奋地想看看未来会发生什么。`,
    level: 'junior',
    category: 'essay',
    author: 'Dreamer',
    wordCount: 94,
    difficulty: 2,
    createdAt: '2024-03-20',
  },
  {
    id: 'j50',
    title: 'Being Thankful',
    titleZh: '学会感恩',
    contentEn: `Gratitude makes us appreciate what we have instead of what we lack. We should be thankful for our families who love and support us. We should appreciate our teachers who guide us through learning. Friends bring joy to our lives, and we should value them. Even on difficult days, there is always something to be grateful for. Keeping a gratitude journal helps us notice the good things. Thankfulness brings happiness and strengthens relationships. Let us practice gratitude every day.`,
    contentZh: `感恩让我们欣赏我们所拥有的，而不是我们缺乏的。我们应该感谢爱和支持我们的家人。我们应该感谢引导我们学习的老师。朋友给我们的生活带来快乐，我们应该珍惜他们。即使在困难的日子里，也总有值得感激的事情。写感恩日记帮助我们注意到美好的事物。感恩带来幸福，加强人际关系。让我们每天练习感恩。`,
    level: 'junior',
    category: 'essay',
    author: 'Mindfulness',
    wordCount: 90,
    difficulty: 2,
    createdAt: '2024-03-21',
  },

  // ==========================================
  // 高中 (Senior High Level) - 30篇
  // ==========================================
  {
    id: 's1',
    title: 'The Power of Reading',
    titleZh: '阅读的力量',
    contentEn: `Reading is one of the most valuable skills a person can develop. Through reading, we gain knowledge about the world around us. Books open doors to different cultures, ideas, and experiences. Reading improves our vocabulary and language skills. It enhances our critical thinking abilities and helps us analyze complex ideas. In a world dominated by technology, the habit of reading becomes even more important.`,
    contentZh: `阅读是一个人可以培养的最有价值的技能之一。通过阅读，我们获得了关于周围世界的知识。书籍为不同的文化、想法和体验打开了大门。阅读提高了我们的词汇量和语言能力。它增强了我们的批判性思维能力，帮助我们分析复杂的想法。在一个被技术主导的世界里，阅读的习惯变得更加重要。`,
    level: 'senior',
    category: 'essay',
    author: 'David',
    wordCount: 98,
    difficulty: 3,
    createdAt: '2024-03-01',
  },
  {
    id: 's2',
    title: 'Climate Change',
    titleZh: '气候变化',
    contentEn: `Climate change is one of the most pressing issues facing our planet today. The Earth's average temperature has been rising steadily over the past century. This warming is caused primarily by greenhouse gas emissions from human activities. These include burning fossil fuels, deforestation, and industrial processes. The consequences of climate change are severe and wide-ranging.`,
    contentZh: `气候变化是我们星球今天面临的最紧迫的问题之一。在过去的一个世纪里，地球的平均温度一直在稳步上升。这种变暖主要由人类活动产生的温室气体排放引起。这些包括燃烧化石燃料、砍伐森林和工业过程。气候变化的后果是严重且广泛的。`,
    level: 'senior',
    category: 'science',
    author: 'Dr. Johnson',
    wordCount: 86,
    difficulty: 4,
    createdAt: '2024-03-02',
  },
  {
    id: 's3',
    title: 'The Importance of Education',
    titleZh: '教育的重要性',
    contentEn: `Education is the foundation of personal development and social progress. It empowers individuals with knowledge and skills needed to succeed in life. Through education, people learn to think critically and solve problems creatively. Education also promotes equality by providing opportunities for all, regardless of their background. Educated societies tend to have lower crime rates, better health outcomes, and stronger economies.`,
    contentZh: `教育是个人发展和社会进步的基础。它赋予个人成功所需的知识和技能。通过教育，人们学会批判性思考和创造性地解决问题。教育还通过为所有人提供机会来促进平等，无论他们的背景如何。受教育的社会往往犯罪率更低，健康状况更好，经济更强大。`,
    level: 'senior',
    category: 'news',
    author: 'Professor Wang',
    wordCount: 96,
    difficulty: 3,
    createdAt: '2024-03-03',
  },
  {
    id: 's4',
    title: 'The Rise of Artificial Intelligence',
    titleZh: '人工智能的崛起',
    contentEn: `Artificial intelligence is transforming our world at an unprecedented pace. Machine learning algorithms can now perform tasks that were once thought to require human intelligence. From voice assistants to self-driving cars, AI applications are everywhere. However, this rapid advancement raises important ethical questions. Issues of job displacement, privacy concerns, and algorithmic bias need careful consideration.`,
    contentZh: `人工智能正在以前所未有的速度改变我们的世界。机器学习算法现在可以执行曾经被认为需要人类智能的任务。从语音助手到自动驾驶汽车，人工智能应用无处不在。然而，这种快速发展引发了重要的伦理问题。就业替代、隐私问题和算法偏见需要认真考虑。`,
    level: 'senior',
    category: 'science',
    author: 'Tech Review',
    wordCount: 92,
    difficulty: 3,
    createdAt: '2024-03-04',
  },
  {
    id: 's5',
    title: 'The Impact of Social Media',
    titleZh: '社交媒体的影响',
    contentEn: `Social media has revolutionized the way we communicate and share information. Platforms like Facebook, Twitter, and Instagram connect billions of people worldwide. While social media brings many benefits, it also has significant drawbacks. Excessive use can lead to addiction and mental health issues. The spread of misinformation poses challenges to democratic processes. Privacy concerns have become increasingly important.`,
    contentZh: `社交媒体彻底改变了我们沟通和分享信息的方式。Facebook、Twitter和Instagram等平台连接着全球数十亿人。虽然社交媒体带来了很多好处，但它也有显著的缺点。过度使用会导致成瘾和心理健康问题。虚假信息的传播对民主进程构成挑战。隐私问题变得越来越重要。`,
    level: 'senior',
    category: 'news',
    author: 'Media Studies',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-03-05',
  },
  {
    id: 's6',
    title: 'The Beauty of Nature',
    titleZh: '自然之美',
    contentEn: `Nature possesses an extraordinary beauty that inspires and nourishes the human soul. From majestic mountains to gentle streams, the natural world offers endless wonders. Spending time in nature has been proven to reduce stress and improve mental health. The sounds of birds singing and leaves rustling create a peaceful atmosphere. Protecting natural landscapes ensures that future generations can experience this beauty.`,
    contentZh: `自然拥有非凡的美丽，激发和滋养人类的灵魂。从雄伟的山脉到温柔的溪流，自然世界提供了无尽的奇观。事实证明，在自然中度过时间可以减少压力，改善心理健康。鸟儿歌唱和树叶沙沙的声音创造了平静的氛围。保护自然景观确保后代能够体验这种美丽。`,
    level: 'senior',
    category: 'essay',
    author: 'Nature Lover',
    wordCount: 90,
    difficulty: 3,
    createdAt: '2024-03-06',
  },
  {
    id: 's7',
    title: 'The Future of Work',
    titleZh: '工作的未来',
    contentEn: `The nature of work is undergoing a dramatic transformation. Automation and artificial intelligence are changing the job market rapidly. Traditional careers are being disrupted, while new opportunities are emerging. The gig economy and remote work have become increasingly common. Workers need to adapt and acquire new skills throughout their careers. Lifelong learning has become essential for professional success.`,
    contentZh: `工作的性质正在经历戏剧性的转变。自动化和人工智能正在迅速改变就业市场。传统职业正在被颠覆，而新的机会正在出现。零工经济和远程工作变得越来越普遍。工人需要在整个职业生涯中适应并获取新技能。终身学习对职业成功变得至关重要。`,
    level: 'senior',
    category: 'news',
    author: 'Career Insights',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-03-07',
  },
  {
    id: 's8',
    title: 'The Art of Leadership',
    titleZh: '领导艺术',
    contentEn: `Leadership is the ability to inspire and guide others toward a common goal. Effective leaders possess vision, integrity, and excellent communication skills. They empower their team members and create a positive work environment. Great leaders lead by example and take responsibility for their actions. They inspire trust and respect through their behavior. Leadership skills can be developed through practice and experience.`,
    contentZh: `领导力是激励和引导他人实现共同目标的能力。有效的领导者具有愿景、诚信和出色的沟通技能。他们授权团队成员，创造积极的工作环境。伟大的领导者以身作则，为自己的行为负责。他们通过行为激发信任和尊重。领导力可以通过实践和经验发展。`,
    level: 'senior',
    category: 'essay',
    author: 'Management',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-03-08',
  },
  {
    id: 's9',
    title: 'Understanding Global Economics',
    titleZh: '理解全球经济',
    contentEn: `The global economy is a complex system of interconnected markets and trade relationships. International trade has increased dramatically over the past decades. Countries specialize in producing goods where they have a comparative advantage. Economic globalization has both benefits and challenges. Wealth distribution remains an important issue. Understanding global economics helps us make informed decisions as citizens and professionals.`,
    contentZh: `全球经济是一个由相互关联的市场和贸易关系组成的复杂系统。过去几十年，国际贸易急剧增加。各国专注于生产具有比较优势的产品。经济全球化既有好处也有挑战。财富分配仍然是一个重要问题。了解全球经济帮助我们作为公民和专业人士做出明智的决定。`,
    level: 'senior',
    category: 'science',
    author: 'Economics Today',
    wordCount: 86,
    difficulty: 4,
    createdAt: '2024-03-09',
  },
  {
    id: 's10',
    title: 'The Psychology of Success',
    titleZh: '成功的心理学',
    contentEn: `Success is often the result of psychological factors as much as external circumstances. Mindset plays a crucial role in achieving our goals. People with a growth mindset believe that abilities can be developed through effort. Resilience helps us bounce back from setbacks and failures. Self-discipline and perseverance are essential qualities for long-term success. Setting clear goals and maintaining focus are important strategies.`,
    contentZh: `成功往往是心理因素和外部环境共同作用的结果。心态在实现目标方面起着至关重要的作用。具有成长型心态的人相信能力可以通过努力发展。韧性帮助我们从挫折和失败中恢复过来。自律和坚持是长期成功的必要品质。设定明确的目标并保持专注是重要的策略。`,
    level: 'senior',
    category: 'essay',
    author: 'Psychology',
    wordCount: 90,
    difficulty: 3,
    createdAt: '2024-03-10',
  },
  {
    id: 's11',
    title: 'The Importance of Mental Health',
    titleZh: '心理健康的重要性',
    contentEn: `Mental health is just as important as physical health, yet it is often overlooked. Mental health affects how we think, feel, and act. It also influences how we handle stress and make choices. Mental health problems are common and can affect anyone. Seeking help is a sign of strength, not weakness. Practices like meditation and exercise can improve mental well-being.`,
    contentZh: `心理健康和身体健康一样重要，但常常被忽视。心理健康影响我们的思考、感受和行为。它也影响我们如何处理压力和做出选择。心理健康问题很常见，可能影响任何人。寻求帮助是坚强的表现，而不是软弱。冥想和运动等练习可以改善心理健康。`,
    level: 'senior',
    category: 'science',
    author: 'Health Today',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-11',
  },
  {
    id: 's12',
    title: 'The Evolution of Transportation',
    titleZh: '交通的演变',
    contentEn: `Transportation has evolved dramatically throughout human history. From walking to horseback riding to automobiles, each advancement has transformed society. The invention of the automobile revolutionized personal mobility. Air travel has made the world much smaller. Electric vehicles and autonomous cars represent the future of transportation. Sustainable transportation options are becoming increasingly important.`,
    contentZh: `交通工具在人类历史中发生了戏剧性的变化。从步行到骑马再到汽车，每一项进步都改变了社会。汽车的发明彻底改变了个人出行。航空旅行使世界变得更小。电动汽车和自动驾驶汽车代表著交通的未来。可持续的交通选择变得越来越重要。`,
    level: 'senior',
    category: 'science',
    author: 'Technology Review',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-12',
  },
  {
    id: 's13',
    title: 'The Value of Diversity',
    titleZh: '多样性的价值',
    contentEn: `Diversity brings tremendous value to our societies and organizations. Different perspectives lead to better decision-making and innovation. Inclusive environments where everyone feels valued promote creativity and productivity. Learning about different cultures expands our understanding of the world. Diversity in the workplace leads to better products and services. Embracing diversity is not just the right thing to do, it is also beneficial.`,
    contentZh: `多样性为我们的社会和组织带来了巨大的价值。不同的观点带来更好的决策和创新。每个人都感到被重视的包容环境促进创造力和生产力。了解不同的文化拓展了我们对世界的理解。工作场所的多样性带来更好的产品和服务。拥抱多样性不仅是正确的做法，也是有益的。`,
    level: 'senior',
    category: 'essay',
    author: 'Society',
    wordCount: 82,
    difficulty: 3,
    createdAt: '2024-03-13',
  },
  {
    id: 's14',
    title: 'The Science of Sleep',
    titleZh: '睡眠的科学',
    contentEn: `Sleep is essential for our physical and mental well-being. During sleep, our bodies repair tissues and consolidate memories. Most adults need seven to nine hours of sleep per night. Poor sleep quality can lead to numerous health problems. Sleep disorders affect millions of people worldwide. Establishing good sleep hygiene is crucial for restful sleep. The blue light from screens can interfere with our natural sleep patterns.`,
    contentZh: `睡眠对我们的身心健康至关重要。在睡眠期间，我们的身体修复组织并巩固记忆。大多数成年人每晚需要七到九个小时的睡眠。糟糕的睡眠质量会导致许多健康问题。睡眠障碍影响全世界数百万人。建立良好的睡眠卫生对安宁睡眠至关重要。屏幕发出的蓝光会干扰我们的自然睡眠模式。`,
    level: 'senior',
    category: 'science',
    author: 'Sleep Research',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-03-14',
  },
  {
    id: 's15',
    title: 'The Role of Technology in Education',
    titleZh: '技术在教育中的作用',
    contentEn: `Technology has transformed the way we approach education. Online learning platforms have made education accessible to millions. Interactive tools engage students in new ways. Technology enables personalized learning experiences tailored to individual needs. However, technology cannot replace the human element in education. Teachers remain essential for guiding and inspiring students. The key is to use technology as a tool to enhance learning.`,
    contentZh: `技术改变了我们对待教育的方式。在线学习平台让数百万人接受了教育。互动工具以新的方式吸引学生。技术能够实现根据个人需求定制的学习体验。然而，技术不能取代教育中的人文因素。教师仍然是引导和激励学生的关键。关键是将技术用作增强学习的工具。`,
    level: 'senior',
    category: 'news',
    author: 'EdTech',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-15',
  },
  {
    id: 's16',
    title: 'The Ethics of Genetic Engineering',
    titleZh: '基因工程的伦理',
    contentEn: `Genetic engineering presents both tremendous opportunities and serious ethical challenges. Gene editing technologies like CRISPR allow us to modify DNA with unprecedented precision. These technologies could eliminate genetic diseases and improve crop yields. However, they also raise concerns about playing God and creating designer babies. There are significant risks and unknowns. Society must engage in thoughtful discussions about the boundaries of genetic intervention.`,
    contentZh: `基因工程既带来了巨大的机遇，也带来了严峻的伦理挑战。像CRISPR这样的基因编辑技术让我们以前所未有的精度修改DNA。这些技术可以消除遗传疾病，提高作物产量。然而，它们也引发了关于扮演上帝和创造设计婴儿的担忧。有显著的风险和未知数。社会必须参与关于基因干预边界的深思熟虑的讨论。`,
    level: 'senior',
    category: 'science',
    author: 'Bioethics',
    wordCount: 96,
    difficulty: 4,
    createdAt: '2024-03-16',
  },
  {
    id: 's17',
    title: 'The Importance of Critical Thinking',
    titleZh: '批判性思维的重要性',
    contentEn: `Critical thinking is the ability to analyze information objectively and make reasoned judgments. In an age of information overload, this skill is more important than ever. Critical thinking helps us distinguish fact from fiction. It enables us to evaluate arguments and identify logical fallacies. This skill is essential in academic, professional, and personal contexts. Developing critical thinking requires practice and an open mind.`,
    contentZh: `批判性思维是客观分析信息并做出合理判断的能力。在信息过载的时代，这项技能比以往任何时候都更重要。批判性思维帮助我们区分事实和虚构。它使我们能够评估论点并识别逻辑谬误。这项技能在学术，专业和个人环境中都是必不可少的。培养批判性思维需要练习和开放的心态。`,
    level: 'senior',
    category: 'essay',
    author: 'Philosophy',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-03-17',
  },
  {
    id: 's18',
    title: 'The Impact of Tourism',
    titleZh: '旅游业的影响',
    contentEn: `Tourism is one of the world's largest industries and continues to grow rapidly. It brings economic benefits to many countries and creates jobs. However, mass tourism can also damage natural environments and local cultures. Overtourism has become a serious problem in some popular destinations. Sustainable tourism practices aim to minimize negative impacts. Travelers should be mindful of their environmental footprint.`,
    contentZh: `旅游业是世界上最大的产业之一，并持续快速增长。它为许多国家带来经济利益，创造就业机会。然而，大众旅游也可能损害自然环境和当地文化。过度旅游已成为一些热门目的地的一个严重问题。可持续旅游实践旨在减少负面影响。旅行者应该注意他们的环境足迹。`,
    level: 'senior',
    category: 'news',
    author: 'Travel Industry',
    wordCount: 82,
    difficulty: 3,
    createdAt: '2024-03-18',
  },
  {
    id: 's19',
    title: 'The Art of Negotiation',
    titleZh: '谈判的艺术',
    contentEn: `Negotiation is a critical skill in both personal and professional settings. Effective negotiators prepare thoroughly and understand the other party's interests. Creating value through mutually beneficial agreements is the ideal outcome. Good negotiators remain calm and professional even under pressure. They listen actively and communicate clearly. Win-win solutions should be the goal of any negotiation.`,
    contentZh: `谈判是个人和职业环境中的关键技能。有效的谈判者会充分准备并了解对方的利益。通过互惠协议创造价值是理想的结果。好的谈判者即使在压力下也能保持冷静和专业。他们积极倾听并清楚地沟通。双赢解决方案应该是任何谈判的目标。`,
    level: 'senior',
    category: 'essay',
    author: 'Business',
    wordCount: 78,
    difficulty: 3,
    createdAt: '2024-03-19',
  },
  {
    id: 's20',
    title: 'The Future of Healthcare',
    titleZh: '医疗保健的未来',
    contentEn: `Healthcare is undergoing a technological revolution. Telemedicine allows patients to consult doctors remotely. Wearable devices monitor our health in real-time. Artificial intelligence is improving diagnostic accuracy. Personalized medicine tailors treatments to individual patients. However, access to healthcare remains unequal. The future of healthcare depends on balancing innovation with equity.`,
    contentZh: `医疗保健正在经历一场技术革命。远程医疗允许患者远程咨询医生。可穿戴设备实时监测我们的健康。人工智能正在提高诊断准确性。个性化医疗为个别患者量身定制治疗方案。然而，医疗保健的获取仍然不平等。医疗保健的未来取决于创新与公平的平衡。`,
    level: 'senior',
    category: 'science',
    author: 'Health Tech',
    wordCount: 80,
    difficulty: 3,
    createdAt: '2024-03-20',
  },
  {
    id: 's21',
    title: 'The Beauty of Classical Music',
    titleZh: '古典音乐之美',
    contentEn: `Classical music has been enriching human experience for centuries. The works of composers like Mozart, Beethoven, and Bach continue to inspire. Classical music develops our capacity for deep listening and emotional expression. It has been shown to have cognitive and therapeutic benefits. Attending live performances creates a unique connection with the music. Exploring classical music can be a lifelong journey of discovery.`,
    contentZh: `几个世纪以来，古典音乐一直在丰富人类体验。莫扎特、贝多芬和巴赫等作曲家的作品继续激励着我们。古典音乐培养我们深度倾听和情感表达的能力。它已被证明具有认知和治疗效果。参加现场演出创造了与音乐的独特联系。探索古典音乐可以是一生的发现之旅。`,
    level: 'senior',
    category: 'essay',
    author: 'Music',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-21',
  },
  {
    id: 's22',
    title: 'Understanding Democracy',
    titleZh: '理解民主',
    contentEn: `Democracy is a system of government where citizens participate in decision-making. It emphasizes individual rights, free elections, and the rule of law. However, democracy faces challenges in the modern world. Misinformation threatens democratic processes. Political polarization divides societies. Democratic institutions require constant vigilance and improvement. Active citizen participation is essential for democracy to thrive.`,
    contentZh: `民主是一种公民参与决策的政府制度。它强调个人权利，自由选举和法治。然而，民主在现代世界面临挑战。虚假信息威胁着民主进程。政治两极分化分裂社会。民主制度需要不断的警惕和改进。积极的公民参与对民主的繁荣至关重要。`,
    level: 'senior',
    category: 'news',
    author: 'Politics',
    wordCount: 84,
    difficulty: 4,
    createdAt: '2024-03-22',
  },
  {
    id: 's23',
    title: 'The Power of Resilience',
    titleZh: '韧性的力量',
    contentEn: `Resilience is the ability to adapt and recover from adversity. It is a crucial trait for navigating life's challenges. Resilient people view failures as learning opportunities. They maintain positive relationships and seek support when needed. Building resilience requires practice and self-reflection. It is a skill that can be developed over time. Resilient individuals and communities are better prepared for future challenges.`,
    contentZh: `韧性是适应和从逆境中恢复的能力。这是应对人生挑战的关键特质。韧性把失败视为学习机会。他们保持积极的关系并在需要时寻求支持。建立韧性需要练习和自我反思。这是一项可以随着时间发展的技能。坚韧的个人和社区能更好地应对未来的挑战。`,
    level: 'senior',
    category: 'essay',
    author: 'Psychology Today',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-23',
  },
  {
    id: 's24',
    title: 'Ocean Conservation',
    titleZh: '海洋保护',
    contentEn: `Our oceans are facing unprecedented threats from human activities. Overfishing depletes fish populations and disrupts ecosystems. Plastic pollution has created massive garbage patches in the oceans. Climate change is raising sea temperatures and acidifying the oceans. Marine protected areas help conserve biodiversity. Individual actions like reducing plastic use can make a difference. Ocean conservation is crucial for the health of our planet.`,
    contentZh: `我们的海洋正面临来自人类活动的前所未有的威胁。过度捕捞耗尽鱼类种群，破坏生态系统。塑料污染在海洋中形成了大量的垃圾堆。气候变化正在升高海温和酸化海洋。海洋保护区有助于保护生物多样性。减少塑料使用等个人行动可以有所作为。海洋保护对我们星球的健康至关重要。`,
    level: 'senior',
    category: 'science',
    author: 'Environment',
    wordCount: 90,
    difficulty: 3,
    createdAt: '2024-03-24',
  },
  {
    id: 's25',
    title: 'The Philosophy of Happiness',
    titleZh: '幸福的哲学',
    contentEn: `Happiness has been a central concern of philosophy throughout history. Different thinkers have proposed various paths to happiness. Some emphasize the importance of pleasure, while others value virtue. Modern psychology suggests that happiness involves both pleasure and meaning. Strong social connections contribute significantly to well-being. Pursuing meaningful goals leads to greater satisfaction than chasing temporary pleasures.`,
    contentZh: `几千年来，幸福一直是哲学的核心关切。不同的思想家提出了通往幸福的不同途径。有些人强调快乐的重要性，而其他人重视美德。现代心理学表明，幸福既涉及快乐也涉及意义。牢固的社会关系对幸福有重要贡献。追求有意义的目标比追求短暂的快乐带来更大的满足感。`,
    level: 'senior',
    category: 'essay',
    author: 'Philosophy',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-25',
  },
  {
    id: 's26',
    title: 'The Digital Revolution',
    titleZh: '数字革命',
    contentEn: `The digital revolution has transformed virtually every aspect of modern life. Digital technologies have changed how we work, communicate, and entertain ourselves. Big data and analytics drive decision-making in businesses and governments. The digital economy has created new industries and jobs. However, the digital divide remains a significant challenge. Ensuring equal access to technology is crucial for inclusive growth.`,
    contentZh: `数字革命改变了现代生活的方方面面。数字技术改变了我们工作、交流和娱乐的方式。大数据和推动企业和政府的决策。数字经济创造了新的产业和就业机会。然而，数字鸿沟仍然是一个重大挑战。确保平等获得技术对包容性增长至关重要。`,
    level: 'senior',
    category: 'science',
    author: 'Technology',
    wordCount: 82,
    difficulty: 3,
    createdAt: '2024-03-26',
  },
  {
    id: 's27',
    title: 'The Importance of Volunteering',
    titleZh: '志愿服务的重要性',
    contentEn: `Volunteering benefits both communities and individuals who participate. Volunteers provide essential services that governments and businesses cannot always offer. Volunteering develops skills and provides valuable work experience. It creates opportunities for social connection and personal growth. Studies show that volunteers tend to be healthier and happier. Giving back to the community is a fulfilling experience that enriches our lives.`,
    contentZh: `志愿服务造福社区和参与的的个人。志愿者提供政府和企业无法总是提供的基本服务。志愿服务培养技能，提供宝贵的工作经验。它创造社交联系和个人成长的机会。研究表明，志愿者往往更健康、更快乐。回馈社区是一种充实的经历，丰富我们的生活。`,
    level: 'senior',
    category: 'essay',
    author: 'Community',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-03-27',
  },
  {
    id: 's28',
    title: 'The Challenges of Urbanization',
    titleZh: '城市化的挑战',
    contentEn: `Urbanization is accelerating around the world, bringing both opportunities and challenges. Cities drive economic growth and innovation. However, rapid urbanization strains infrastructure and services. Traffic congestion, air pollution, and housing shortages are common problems. Sustainable urban planning is essential for livable cities. Investing in public transportation and green spaces improves quality of life.`,
    contentZh: `世界范围内的城市化正在加速，带来机遇和挑战。城市推动经济增长和创新。然而，快速的城市化给基础设施和服务带来压力。交通拥堵、空气污染和住房短缺是常见的问题。可持续的城市规划对于宜居城市至关重要。投资公共交通和绿地可以提高生活质量。`,
    level: 'senior',
    category: 'news',
    author: 'Urban Studies',
    wordCount: 84,
    difficulty: 3,
    createdAt: '2024-03-28',
  },
  {
    id: 's29',
    title: 'The Art of Communication',
    titleZh: '沟通的艺术',
    contentEn: `Effective communication is essential for personal and professional success. It involves not just speaking, but also listening attentively. Nonverbal cues often communicate more than words. Clear and concise messaging prevents misunderstandings. Adapting our communication style to different audiences is important. Feedback helps improve communication over time. Mastering communication skills takes practice and self-awareness.`,
    contentZh: `有效的沟通对个人和职业成功至关重要。它不仅涉及说话，还涉及积极倾听。非语言暗示通常比语言传达更多。清晰简洁的信息可以防止误解。调整我们的沟通风格以适应不同的受众很重要。反馈有助于随着时间的推移改善沟通。掌握沟通技巧需要练习和自我意识。`,
    level: 'senior',
    category: 'essay',
    author: 'Skills',
    wordCount: 84,
    difficulty: 3,
    createdAt: '2024-03-29',
  },
  {
    id: 's30',
    title: 'The Promise of Renewable Energy',
    titleZh: '可再生能源的希望',
    contentEn: `Renewable energy sources offer a sustainable alternative to fossil fuels. Solar and wind power have become increasingly affordable. These technologies produce electricity without emitting greenhouse gases. Energy storage solutions are improving rapidly. The transition to renewable energy creates new jobs and economic opportunities. However, the transition requires significant investment and policy support. A clean energy future is within our reach if we act now.`,
    contentZh: `可再生能源提供了化石燃料的可持续替代方案。太阳能和风能变得越来越负担得起。这些技术在不排放温室气体的情况下发电。储能解决方案正在迅速改善。向可再生能源的转型创造了新的就业和经济机会。然而，这一转变需要大量的投资和政策支持。只要我们现在采取行动，清洁能源的未来就在我们掌握之中。`,
    level: 'senior',
    category: 'science',
    author: 'Energy',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-03-30',
  },
  {
    id: 's31',
    title: 'The Renaissance of Manufacturing',
    titleZh: '制造业的复兴',
    contentEn: `Manufacturing is experiencing a renaissance driven by advanced technologies. Automation and robotics have transformed production lines, increasing efficiency and precision. Additive manufacturing, or 3D printing, is revolutionizing how products are designed and made. The integration of artificial intelligence enables predictive maintenance and quality control. However, this transformation raises questions about workforce displacement and the future of labor in industrial sectors.`,
    contentZh: `制造业正在经历由先进技术推动的复兴。自动化和机器人技术改变了生产线，提高了效率和精度。增材制造（即3D打印）正在革新产品的设计和制造方式。人工智能的集成使预测性维护和质量控制成为可能。然而，这种转型引发了关于劳动力替代和工业部门劳动未来的问题。`,
    level: 'senior',
    category: 'science',
    author: 'Industry',
    wordCount: 92,
    difficulty: 3,
    createdAt: '2024-03-31',
  },
  {
    id: 's32',
    title: 'The Art of Time Management',
    titleZh: '时间管理的艺术',
    contentEn: `Effective time management is a critical skill for personal and professional success. Prioritizing tasks based on importance and urgency helps allocate limited time wisely. The Pomodoro technique, involving focused work sessions with short breaks, has proven effective for many. Setting clear boundaries and learning to say no protects valuable time. Technology can both help and hinder time management, requiring mindful usage.`,
    contentZh: `有效的时间管理是个人和职业成功的关键技能。根据重要性和紧急性对任务进行优先级排序有助于明智地分配有限的时间。番茄工作法，即专注于工作时段和短暂休息的结合，对许多人证明是有效的。设定明确的界限并学会拒绝保护宝贵的时间。技术既可以帮助也会阻碍时间管理，需要有意识地使用。`,
    level: 'senior',
    category: 'essay',
    author: 'Productivity',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-04-01',
  },
  {
    id: 's33',
    title: 'Space Exploration: The Next Frontier',
    titleZh: '太空探索：下一个前沿',
    contentEn: `Space exploration represents humanity's grandest adventure, pushing the boundaries of what we know and can achieve. Private companies like SpaceX and Blue Origin have revolutionized access to space. Plans for permanent lunar bases and Mars colonization are no longer science fiction. Satellite networks provide crucial services from communication to Earth observation. However, space debris and the militarization of space pose significant challenges.`,
    contentZh: `太空探索代表了人类最宏大的冒险，突破了我们的知识和成就的边界。SpaceX和Blue Origin等私营公司彻底改变了进入太空的方式。建立永久月球基地和火星殖民的计划不再是科幻小说。卫星网络提供从通信到地球观测的关键服务。然而，太空碎片和太空军事化带来重大挑战。`,
    level: 'senior',
    category: 'science',
    author: 'Space',
    wordCount: 92,
    difficulty: 3,
    createdAt: '2024-04-02',
  },
  {
    id: 's34',
    title: 'The Rise of Remote Work',
    titleZh: '远程工作的兴起',
    contentEn: `The COVID-19 pandemic accelerated the adoption of remote work, permanently altering the workplace landscape. Video conferencing and collaboration tools have made distributed teams viable. Remote work offers flexibility and eliminates commuting time, improving work-life balance for many. However, challenges include isolation, communication difficulties, and the blurring of work and personal boundaries. The future likely involves hybrid models combining remote and in-office work.`,
    contentZh: `新冠疫情加速了远程工作的采用，永久改变了工作场所的面貌。视频会议和协作工具使分布式团队变得可行。远程工作提供了灵活性，消除了通勤时间，改善了许多人的工作与生活平衡。然而，挑战包括孤独感、沟通困难以及工作和个人界限的模糊。未来可能涉及结合远程和办公室工作的混合模式。`,
    level: 'senior',
    category: 'news',
    author: 'Workplace',
    wordCount: 94,
    difficulty: 3,
    createdAt: '2024-04-03',
  },
  {
    id: 's35',
    title: 'The Science of Nutrition',
    titleZh: '营养科学',
    contentEn: `Our understanding of nutrition has evolved significantly over the past decades. Whole foods provide nutrients in forms that supplements cannot replicate. The gut microbiome plays a crucial role in digestion and overall health. Personalized nutrition based on genetic profiles is an emerging field. Dietary patterns like the Mediterranean diet have been consistently linked to longevity. Understanding nutrition empowers individuals to make healthier choices.`,
    contentZh: `过去几十年，我们对营养的理解有了显著发展。全食物以补充剂无法复制的形式提供营养。肠道微生物组在消化和整体健康中起着至关重要的作用。基于基因图谱的个性化营养是一个新兴领域。地中海饮食等饮食模式一直与长寿相关。了解营养使个人能够做出更健康的选择。`,
    level: 'senior',
    category: 'science',
    author: 'Health',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-04-04',
  },
  {
    id: 's36',
    title: 'The Evolution of Journalism',
    titleZh: '新闻业的演变',
    contentEn: `Journalism is undergoing a profound transformation in the digital age. Traditional print media has declined as news consumption shifts online. Social media platforms have become primary news sources for many, raising concerns about accuracy. Citizen journalism and independent creators challenge established news organizations. Fake news and misinformation pose threats to informed democratic discourse. The future of journalism depends on sustainable business models and commitment to verification.`,
    contentZh: `在数字时代，新闻业正在经历深刻变革。随着新闻消费转向在线，传统平面媒体已经衰落。社交媒体平台已成为许多人的主要新闻来源，引发了关于准确性的担忧。公民新闻和独立创作者挑战着老牌新闻机构。假新闻和虚假信息对明智的民主讨论构成威胁。新闻业的未来取决于可持续的商业模式和对核实的承诺。`,
    level: 'senior',
    category: 'news',
    author: 'Media',
    wordCount: 94,
    difficulty: 3,
    createdAt: '2024-04-05',
  },
  {
    id: 's37',
    title: 'The Mathematics of Everyday Life',
    titleZh: '日常生活的数学',
    contentEn: `Mathematics underlies much of the modern world, often in invisible ways. Algorithms determine what we see on social media and e-commerce platforms. Statistics guide decision-making in business, medicine, and government. Cryptography protects our online communications and financial transactions. Understanding basic mathematical concepts helps citizens evaluate quantitative claims critically. Mathematical literacy is essential in an increasingly data-driven society.`,
    contentZh: `数学以看不见的方式支撑着现代世界的很多东西。算法决定我们在社交媒体和电子商务平台上看到的内容。统计学指导商业、医学和政府中的决策。密码学保护我们的在线通信和金融交易。了解基本的数学概念帮助公民批判性地评估定量声明。数学素养在日益数据驱动的社会中至关重要。`,
    level: 'senior',
    category: 'science',
    author: 'Mathematics',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-04-06',
  },
  {
    id: 's38',
    title: 'The Importance of Financial Literacy',
    titleZh: '金融素养的重要性',
    contentEn: `Financial literacy is an essential life skill that many schools fail to teach adequately. Understanding budgeting, saving, and investing enables individuals to build wealth over time. Compound interest can work for or against you depending on whether you are saving or borrowing. Credit scores affect access to loans, housing, and even employment. Making informed financial decisions early in life can have lasting impacts on retirement security.`,
    contentZh: `金融素养是一项重要的生活技能，许多学校未能充分教授。了解预算、储蓄和投资使个人能够随着时间的推移积累财富。复利可以根据你是储蓄还是借贷而对你有利或不利。信用评分影响贷款、住房甚至就业的获取。早年做出明智的财务决策可以对退休保障产生持久影响。`,
    level: 'senior',
    category: 'essay',
    author: 'Finance',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-04-07',
  },
  {
    id: 's39',
    title: 'The Psychology of Relationships',
    titleZh: '人际关系的心理学',
    contentEn: `Healthy relationships are fundamental to human well-being and longevity. Communication skills form the foundation of successful relationships. Trust, once broken, is difficult to rebuild and requires consistent effort. Attachment styles developed in childhood influence adult relationships. Conflict, when handled constructively, can strengthen relationships. Investing in meaningful connections contributes significantly to happiness and life satisfaction.`,
    contentZh: `健康的人际关系是人类幸福和长寿的基础。沟通技能是成功人际关系的基础。信任一旦破裂，很难重建，需要持续的努力。童年时期形成的依恋风格影响成年后的人际关系。冲突，如果处理得当，可以加强人际关系。在有意义的联系上的投入对幸福和生活满意度有重要贡献。`,
    level: 'senior',
    category: 'essay',
    author: 'Psychology',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-04-08',
  },
  {
    id: 's40',
    title: 'The Future of Currency',
    titleZh: '货币的未来',
    contentEn: `The concept of money is evolving rapidly in the digital age. Cryptocurrencies like Bitcoin challenge traditional government-backed currencies. Central banks are exploring digital currencies that could transform monetary policy. Blockchain technology offers new possibilities for secure, transparent transactions. However, volatility and environmental concerns surround some cryptocurrencies. The future likely involves a hybrid system of traditional and digital currencies.`,
    contentZh: `货币概念在数字时代正在快速演变。比特币等加密货币挑战着传统的政府支持货币。央行正在探索可以改变货币政策的数字货币。区块链技术为安全、透明交易提供了新的可能性。然而，一些加密货币伴随着波动性和环境担忧。未来可能涉及传统货币和数字货币的混合系统。`,
    level: 'senior',
    category: 'science',
    author: 'Economics',
    wordCount: 86,
    difficulty: 4,
    createdAt: '2024-04-09',
  },
  {
    id: 's41',
    title: 'The Renaissance of Craftsmanship',
    titleZh: '工匠精神的复兴',
    contentEn: `In an age of mass production, craftsmanship is experiencing a revival. Artisans who create handmade goods offer unique products with character and history. The slow food movement celebrates traditional cooking methods and local ingredients. Craft brewing and distilling have grown into global industries. Supporting local artisans preserves cultural traditions and sustainable practices. Quality often surpasses quantity in the realm of craftsmanship.`,
    contentZh: `在大规模生产的时代，工匠精神正在复兴。创造手工制品的工匠提供具有特色和历史的独特产品。慢食运动颂扬传统烹饪方法和当地食材。精酿啤酒和蒸馏酒已发展成为全球产业。支持当地工匠保护文化传统和可持续做法。在工匠领域，质量往往超过数量。`,
    level: 'senior',
    category: 'essay',
    author: 'Culture',
    wordCount: 84,
    difficulty: 3,
    createdAt: '2024-04-10',
  },
  {
    id: 's42',
    title: 'The Ethics of Technology',
    titleZh: '技术的伦理',
    contentEn: `Technology raises profound ethical questions that society must grapple with. Privacy concerns intensify as surveillance capabilities expand. Algorithmic decision-making can perpetuate biases and discrimination. Automation threatens livelihoods while creating new forms of dependency. Questions about digital ownership and intellectual property remain unresolved. Ethical frameworks must evolve alongside technological capabilities.`,
    contentZh: `技术提出了社会必须认真对待的深刻伦理问题。随着监控能力的扩大，隐私问题加剧。算法决策可能延续偏见和歧视。自动化威胁着生计，同时创造新的依赖形式。关于数字所有权和知识产权的问题仍未解决。伦理框架必须随着技术能力的发展而发展。`,
    level: 'senior',
    category: 'science',
    author: 'Ethics',
    wordCount: 80,
    difficulty: 4,
    createdAt: '2024-04-11',
  },
  {
    id: 's43',
    title: 'The Joy of Lifelong Learning',
    titleZh: '终身学习的乐趣',
    contentEn: `Learning should not end with formal education but continue throughout life. The internet has democratized access to knowledge on an unprecedented scale. Online courses and tutorials make learning new skills more accessible than ever. Learning a new language or instrument provides cognitive benefits that extend beyond the skill itself. Curiosity and continuous growth keep the mind sharp and engaged. Embracing lifelong learning enriches both personal and professional life.`,
    contentZh: `学习不应随着正规教育而结束，而应贯穿一生。互联网以前所未有的规模民主化了知识的获取。在线课程和教程使学习新技能比以往任何时候都更容易。学习一门新语言或乐器提供了超越技能本身的认知益处。好奇心和持续成长保持头脑敏锐和投入。拥抱终身学习丰富个人和职业生活。`,
    level: 'senior',
    category: 'essay',
    author: 'Education',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-04-12',
  },
  {
    id: 's44',
    title: 'The Architecture of Cities',
    titleZh: '城市建筑',
    contentEn: `Architecture shapes our built environment and influences how we live, work, and interact. Great cities balance historical preservation with modern development. Sustainable architecture minimizes environmental impact while maximizing human comfort. Public spaces like parks and plazas foster community connection. The design of buildings affects mental health and productivity. Thoughtful urban planning creates cities that are livable, equitable, and beautiful.`,
    contentZh: `建筑塑造我们的建成环境，影响我们的生活、工作和互动方式。伟大的城市在历史保护和现代发展之间取得平衡。可持续建筑在最大化人类舒适度的同时最小化环境影响。公园和广场等公共空间促进社区联系。建筑的设计影响心理健康和生产力。周到的城市规划创造宜居、公平和美丽的城市。`,
    level: 'senior',
    category: 'news',
    author: 'Architecture',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-04-13',
  },
  {
    id: 's45',
    title: 'The Power of Empathy',
    titleZh: '同理心的力量',
    contentEn: `Empathy, the ability to understand and share the feelings of others, is fundamental to human connection. It enables us to build meaningful relationships and resolve conflicts peacefully. Empathy allows us to appreciate different perspectives and cultural backgrounds. Practicing empathy reduces prejudice and promotes social cohesion. In professional settings, empathy enhances leadership and teamwork. Cultivating empathy is essential for creating a more compassionate world.`,
    contentZh: `同理心，即理解和分享他人感受的能力，是人类联系的基础。它使我们能够建立有意义的关係并和平解决冲突。同理心让我们欣赏不同的观点和文化背景。练习同理心减少偏见，促进社会凝聚力。在职业环境中，同理心增强领导力和团队合作。培养同理心对于创造一个更有同情心的世界至关重要。`,
    level: 'senior',
    category: 'essay',
    author: 'Society',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-04-14',
  },
  {
    id: 's46',
    title: 'The World of Gastronomy',
    titleZh: '美食世界',
    contentEn: `Gastronomy has evolved into a sophisticated art form that celebrates culture and creativity. Molecular gastronomy combines scientific principles with culinary innovation. Farm-to-table movements emphasize freshness, sustainability, and seasonal ingredients. Food tourism allows travelers to experience cultures through their cuisines. Understanding gastronomy enriches our appreciation of food beyond mere sustenance. The best meals tell stories of tradition, innovation, and human creativity.`,
    contentZh: `美食已成为庆祝文化和创造力的复杂艺术形式。分子美食学将科学原理与烹饪创新相结合。从农场到餐桌的运动强调新鲜、可持续和时令食材。美食旅游让旅行者通过美食体验文化。了解美食让我们超越仅仅维持生计来欣赏食物。最好的饭菜讲述着传统、创新和人类创造力的故事。`,
    level: 'senior',
    category: 'essay',
    author: 'Food',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-04-15',
  },
  {
    id: 's47',
    title: 'The Challenge of Cybersecurity',
    titleZh: '网络安全的挑战',
    contentEn: `Cybersecurity threats are growing in sophistication and scale, targeting individuals, businesses, and governments. Data breaches expose sensitive personal and financial information. Ransomware attacks can cripple critical infrastructure and organizations. Phishing scams trick users into revealing confidential information. Strong passwords and two-factor authentication provide basic protection. Security awareness training helps individuals and organizations defend against cyber threats.`,
    contentZh: `网络安全威胁正在变得日益复杂和规模化，针对个人、企业和政府。数据泄露暴露敏感的个人和财务信息。勒索软件攻击可能使关键基础设施和组织瘫痪。网络钓鱼诈骗欺骗用户泄露机密信息。强密码和双因素认证提供基本保护。安全意识培训帮助个人和组织防御网络威胁。`,
    level: 'senior',
    category: 'science',
    author: 'Security',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-04-16',
  },
  {
    id: 's48',
    title: 'The Art of Public Speaking',
    titleZh: '公共演讲的艺术',
    contentEn: `Public speaking is a powerful skill that can influence opinions and inspire action. Effective speakers engage their audience through stories, data, and emotional appeal. Preparation and practice reduce anxiety and improve delivery. Understanding the audience helps tailor messages for maximum impact. Visual aids can enhance comprehension when used appropriately. Overcoming the fear of public speaking opens doors to countless opportunities.`,
    contentZh: `公共演讲是一种强大的技能，可以影响意见并激励行动。有效的演讲者通过故事、数据和情感吸引力吸引听众。准备和练习减少焦虑并改善表达。了解听众有助于调整信息以获得最大影响。视觉辅助在适当使用时可以增强理解。克服对公共演讲的恐惧为无数机会打开了大门。`,
    level: 'senior',
    category: 'essay',
    author: 'Communication',
    wordCount: 84,
    difficulty: 3,
    createdAt: '2024-04-17',
  },
  {
    id: 's49',
    title: 'The Mysteries of the Deep Ocean',
    titleZh: '深海的神秘',
    contentEn: `The deep ocean remains one of Earth's least explored frontiers, harboring mysteries yet to be discovered. Extreme pressure and darkness create unique environments for bizarre life forms. Hydrothermal vents support ecosystems entirely independent of sunlight. Deep-sea mining poses environmental risks while offering valuable resources. Understanding the ocean is crucial for climate regulation and biodiversity conservation.`,
    contentZh: `深海仍然是地球上探索最少的边界之一，蕴藏着尚未发现的奥秘。极端压力和黑暗为奇异生命形式创造了独特的环境。热液喷口支持完全独立于阳光的生态系统。深海采矿在提供宝贵资源的同时带来环境风险。了解海洋对气候调节和生物多样性保护至关重要。`,
    level: 'senior',
    category: 'science',
    author: 'Ocean',
    wordCount: 86,
    difficulty: 3,
    createdAt: '2024-04-18',
  },
  {
    id: 's50',
    title: 'The Pursuit of Balance',
    titleZh: '追求平衡',
    contentEn: `Balance in life involves managing multiple priorities including work, family, health, and personal growth. Burnout results from prolonged imbalance and can have serious health consequences. Setting boundaries protects time for rest, relationships, and activities we enjoy. Regular self-reflection helps identify when we are veering out of balance. Balance is not a static state but an ongoing process of adjustment. Living a balanced life leads to greater fulfillment and sustainability.`,
    contentZh: `生活中的平衡涉及管理多个优先事项，包括工作、家庭、健康和个人成长。倦怠源于长期失衡，可能导致严重的健康后果。设定界限保护休息、关系和我们喜欢的活动的时间。定期自我反思帮助我们识别何时偏离平衡。平衡不是静态状态，而是持续调整的过程。过平衡的生活带来更大的满足感和可持续性。`,
    level: 'senior',
    category: 'essay',
    author: 'Wellness',
    wordCount: 88,
    difficulty: 3,
    createdAt: '2024-04-19',
  },

  // ==========================================
  // 大学 (University Level) - 30篇
  // ==========================================
  {
    id: 'u1',
    title: 'The Old Man and the Sea (Excerpt)',
    titleZh: '老人与海（节选）',
    contentEn: `He was an old man who fished alone in a skiff in the Gulf Stream and he had gone eighty-four days now without taking a fish. In the first forty days a boy had been with him. But after forty days without a fish the boy's parents had told him that the old man was now definitely and finally salao, which is the worst form of unlucky. The old man was thin and gaunt with deep wrinkles in the back of his neck.`,
    contentZh: `他是一个老人，独自驾着一叶小舟在墨西哥湾流中捕鱼，至今已经八十四天没有捕到鱼了。前四十天，有个男孩跟着他。但四十天没捕到鱼后，男孩的父母告诉男孩说这老人肯定是彻底倒楣了，这是最不吉利的一种说法。老人很瘦，脊背很瘦削，颈后有很深的皱纹。`,
    level: 'university',
    category: 'literature',
    author: 'Ernest Hemingway',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-01',
  },
  {
    id: 'u2',
    title: 'Pride and Prejudice (Excerpt)',
    titleZh: '傲慢与偏见（节选）',
    contentEn: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.`,
    contentZh: `这是一个举世公认的真理：一个拥有丰厚财产的单身男人，必然想要娶个妻子。无论这个人初到一个地方时对他的感情或看法知之甚少，这个事实在周围居民的脑海中已经根深蒂固，以至于他被认为理所当然地应该是某位待嫁女儿的所有物。`,
    level: 'university',
    category: 'literature',
    author: 'Jane Austen',
    wordCount: 78,
    difficulty: 5,
    createdAt: '2024-04-02',
  },
  {
    id: 'u3',
    title: 'The Future of Artificial Intelligence',
    titleZh: '人工智能的未来',
    contentEn: `Artificial Intelligence stands at the forefront of technological innovation in the 21st century. Machine learning algorithms have achieved remarkable breakthroughs in image recognition, natural language processing, and autonomous systems. However, the rapid advancement of AI also raises profound ethical questions. Issues of job displacement, algorithmic bias, and privacy concerns demand careful consideration.`,
    contentZh: `人工智能站在21世纪技术创新的前沿。机器学习算法在图像识别，自然语言处理和自主系统方面取得了显著突破。然而，人工智能的快速发展也引发了深刻的伦理问题。就业替代、算法偏见和隐私问题都需要认真考虑。`,
    level: 'university',
    category: 'science',
    author: 'Dr. Zhang',
    wordCount: 88,
    difficulty: 5,
    createdAt: '2024-04-03',
  },
  {
    id: 'u4',
    title: 'Great Expectations (Excerpt)',
    titleZh: '远大前程（节选）',
    contentEn: `My father's family name being Pirrip, and my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip. I give Pirrip as my father's family name, on the authority of his tombstone and my sister. As I never saw my father or my mother, my first fancies regarding what they were like were unreasonably derived from their tombstones.`,
    contentZh: `我父亲姓皮里普，我婴儿的舌头无法把这两个名字说得更完整或更清楚，只能发出"皮普"的音。于是，我称自己为皮普，也就被人叫作皮普。我所以采用皮里普作为父亲的姓，是根据他的墓碑和我姐姐的权威说法。由于我从来没有见过父亲或母亲，我最初对他们模样的奇怪想象竟然是从他们的墓碑而来的。`,
    level: 'university',
    category: 'literature',
    author: 'Charles Dickens',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-04',
  },
  {
    id: 'u5',
    title: 'The Global Economy in the 21st Century',
    titleZh: '21世纪的全球经济',
    contentEn: `The global economy in the 21st century is characterized by unprecedented interconnectedness and complexity. International trade agreements have created vast supply chains that span multiple continents. Multinational corporations operate across borders, seeking efficiency and new markets. Emerging economies like China and India have experienced rapid growth, reshaping the global economic landscape. However, this integration also brings challenges including income inequality, financial contagion risks, and geopolitical tensions.`,
    contentZh: `21世纪的全球经济以前所未有的互联性和复杂性为特征。国际贸易协定创造了跨越多个大陆的庞大供应链。跨国公司在各国运营，寻求效率和新市场。中国和印度等新兴经济体经历了快速增长，重塑了全球经济格局。然而，这种一体化也带来了挑战，包括收入不平等、金融传染风险和地缘政治紧张局势。`,
    level: 'university',
    category: 'science',
    author: 'Economics',
    wordCount: 102,
    difficulty: 5,
    createdAt: '2024-04-05',
  },
  {
    id: 'u6',
    title: 'A Tale of Two Cities (Excerpt)',
    titleZh: '双城记（节选）',
    contentEn: `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us.`,
    contentZh: `那是最美好的时代，那是最糟糕的时代；那是智慧的年头，那是愚蠢的年头；那是信仰的时期，那是怀疑的时期；那是光明的季节，那是黑暗的季节；那是希望的春天，那是绝望的冬天；我们拥有一切，我们拥有一切。`,
    level: 'university',
    category: 'literature',
    author: 'Charles Dickens',
    wordCount: 62,
    difficulty: 5,
    createdAt: '2024-04-06',
  },
  {
    id: 'u7',
    title: 'The Philosophy of Science',
    titleZh: '科学哲学',
    contentEn: `The philosophy of science examines the foundations, methods, and implications of science. It asks fundamental questions about what constitutes scientific knowledge and how scientific theories are developed and validated. Key debates include the nature of scientific explanation, the role of observation in theory building, and the demarcation problem between science and pseudoscience. Understanding these philosophical foundations helps scientists and citizens evaluate scientific claims critically.`,
    contentZh: `科学哲学检验科学的基础、方法和含义。它提出了关于什么构成科学知识以及科学理论如何发展和验证的基本问题。关键辩论包括科学解释的本质、观察在理论构建中的作用，以及科学与伪科学的划界问题。了解这些哲学基础有助于科学家和公民批判性地评估科学声明。`,
    level: 'university',
    category: 'science',
    author: 'Philosophy',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-07',
  },
  {
    id: 'u8',
    title: 'Moby Dick (Excerpt)',
    titleZh: '白鲸（节选）',
    contentEn: `Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth, I think I will sail away.`,
    contentZh: `叫我以实玛利好了。前几年——具体多少年前倒不必细说——我兜里揣着很少一点钱，或者说根本没有钱，在岸上也没有什么叫我特别感兴趣的事，我就想不如出海去转转，看看这世界的水域部分。我有这个习惯，用它来驱除肝火，调节血液循环。每当我发现自己的嘴开始变得乖戾的时候，我想我要远航了。`,
    level: 'university',
    category: 'literature',
    author: 'Herman Melville',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-08',
  },
  {
    id: 'u9',
    title: 'Cross-cultural Communication in Business',
    titleZh: '商业中的跨文化沟通',
    contentEn: `Effective cross-cultural communication is essential for success in today's globalized business environment. Different cultures have distinct communication styles, with some emphasizing directness while others value indirectness and context. Understanding these differences helps avoid misunderstandings and builds trust with international partners. Cultural intelligence (CQ) has become a valuable skill for managers and leaders. It involves awareness, knowledge, strategy, and action across cultural contexts.`,
    contentZh: `有效的跨文化沟通对于在当今全球化商业环境中的成功至关重要。不同的文化有不同的沟通风格，有些强调直接性，而有些重视间接性和上下文。了解这些差异有助于避免误解，并与国际合作伙伴建立信任。文化智商（ CQ）已成为管理者和领导者的宝贵技能。它涉及跨文化环境的意识、知识、战略和行动。`,
    level: 'university',
    category: 'science',
    author: 'Business',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-09',
  },
  {
    id: 'u10',
    title: 'The War of the Worlds (Excerpt)',
    titleZh: '星际战争（节选）',
    contentEn: `No one would have believed in the last years of the nineteenth century that this world was being watched keenly and closely by intelligences greater than man's and yet as mortal as his own; that as men busied themselves about their various concerns they were being scrutinized and studied, perhaps almost as narrowly as a man with a microscope might scrutinize the transient creatures that swarm and multiply in a drop of water.`,
    contentZh: `在十九世纪的最后几年，没有人相信这个世界正在被比人类更智慧、但和人类一样有生有死的生物密切地关注着；人们忙于各自的日常事务时，正被审视和研究着，也许就像一个人用显微镜仔细研究一滴水中大量繁殖的生物那样认真。`,
    level: 'university',
    category: 'literature',
    author: 'H.G. Wells',
    wordCount: 92,
    difficulty: 5,
    createdAt: '2024-04-10',
  },
  {
    id: 'u11',
    title: 'The Ethics of Climate Change',
    titleZh: '气候变化的伦理',
    contentEn: `Climate change presents profound ethical challenges that require moral analysis beyond economic and scientific considerations. Questions of intergenerational justice ask whether present generations have obligations to future ones who will inherit the consequences of climate change. Issues of distributive justice concern how the burdens of climate change and mitigation should be allocated between nations. Environmental ethics challenges anthropocentric views and calls for recognizing the intrinsic value of nature.`,
    contentZh: `气候变化提出了深刻的伦理挑战，需要超越经济和科学考虑的道德分析。代际正义问题询问当代人是否有义务为将继承气候变化后果的后代承担责任。分配正义问题涉及气候变化和缓解的负担应如何在各国之间分配。环境伦理挑战人类中心主义的观点，呼吁承认自然的内在价值。`,
    level: 'university',
    category: 'science',
    author: 'Ethics',
    wordCount: 108,
    difficulty: 5,
    createdAt: '2024-04-11',
  },
  {
    id: 'u12',
    title: 'Jane Eyre (Excerpt)',
    titleZh: '简·爱（节选）',
    contentEn: `There was no possibility of taking a walk that day. I had gone to bed with the conviction, generated by the preceding day, that at school I should this day get a holiday, on purpose to celebrate the arrival of a certain period. My mind was now running on the merits of the holiday. I wished to know what it was that had been done at my birth, to make it need celebrating.`,
    contentZh: `那天根本没有可能出去散步。前一天的经历让我确信，到学校后我应该在这一天得到一个假期，来庆祝某个时刻的到来。现在，我的思绪围绕着这个假期的好处转。我想知道我出生时到底做了什么，需要庆祝。`,
    level: 'university',
    category: 'literature',
    author: 'Charlotte Bronte',
    wordCount: 88,
    difficulty: 5,
    createdAt: '2024-04-12',
  },
  {
    id: 'u13',
    title: 'Quantum Computing: A New Paradigm',
    titleZh: '量子计算：新的范式',
    contentEn: `Quantum computing represents a fundamental shift in computational capability, leveraging quantum mechanical phenomena to process information in ways impossible for classical computers. Quantum bits, or qubits, can exist in superposition states, allowing for massive parallelism. Quantum entanglement enables instantaneous correlation between qubits across distances. While practical quantum computers remain in their infancy, they promise to revolutionize fields including cryptography, drug discovery, and materials science.`,
    contentZh: `量子计算代表了计算能力的根本转变，利用量子力学现象以经典计算机不可能的方式处理信息。量子位或量子比特可以处于叠加状态，允许大规模并行计算。量子纠缠使得量子比特之间能够即时关联。虽然实用的量子计算机仍处于起步阶段，但它们有望彻底改变密码学、药物发现和材料科学等领域。`,
    level: 'university',
    category: 'science',
    author: 'Technology',
    wordCount: 108,
    difficulty: 5,
    createdAt: '2024-04-13',
  },
  {
    id: 'u14',
    title: 'Wuthering Heights (Excerpt)',
    titleZh: '呼啸山庄（节选）',
    contentEn: `I am Heathcliff! Whatever our souls are made of, his and mine are the same; and Linton's is as different as a moonbeam from lightning, or as frost from fire. I cannot live without my soul! I am Heathcliff! He comes back, he comes back! I don't care what you do. I shall be miserable, and you shall be miserable.`,
    contentZh: `我是希思克利夫！不管我们的灵魂是由什么构成的，他的和我的都是一样的；而林顿的则像月光与闪电，或者像霜与火那样不同。没有他我不能活！我是希思克利夫！他回来了，他回来了！我不在乎你怎么做。我会痛苦，你也会痛苦。`,
    level: 'university',
    category: 'literature',
    author: 'Emily Bronte',
    wordCount: 78,
    difficulty: 5,
    createdAt: '2024-04-14',
  },
  {
    id: 'u15',
    title: 'Behavioral Economics and Decision Making',
    titleZh: '行为经济学与决策',
    contentEn: `Behavioral economics has revolutionized our understanding of human decision-making by integrating insights from psychology into economic analysis. Traditional economics assumed rational actors maximizing utility, but real people often deviate from this model systematically. Cognitive biases such as anchoring, loss aversion, and the endowment effect influence choices in predictable ways. Understanding these biases has important implications for public policy, marketing, and personal finance.`,
    contentZh: `行为经济学通过将心理学洞察整合到经济分析中，彻底改变了我们对人类决策的理解。传统经济学假设理性行为者最大化效用，但真实的人往往系统性地偏离这个模型。认知偏见，如锚定、损失厌恶和禀赋效应以可预测的方式影响选择。了解这些偏见对公共政策、营销和个人理财具有重要意义。`,
    level: 'university',
    category: 'science',
    author: 'Economics',
    wordCount: 108,
    difficulty: 5,
    createdAt: '2024-04-15',
  },
  {
    id: 'u16',
    title: 'Frankenstein (Excerpt)',
    titleZh: '弗兰肯斯坦（节选）',
    contentEn: `It was on a dreary night of November that I beheld my man completed, and exhausted with the horrible labour, I threw myself on a bed in my laboratory. During this time, the dark and intrepid hours, I was engaged in the deep reflections which at last removed the darkness from my mind, and filled it with a light of brilliance. The beautiful village of my dreams now rose up in my view.`,
    contentZh: `那是在十一月一个阴沉的夜晚，我完成了我的创造物，可怕的劳动使我精疲力竭，我倒在实验室的床上。在这黑暗而无畏的时刻，我陷入了深深的思考，这些思考终于驱散了我心中的黑暗，使它充满了光明。我梦想中那个美丽的村庄现在出现在我眼前。`,
    level: 'university',
    category: 'literature',
    author: 'Mary Shelley',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-16',
  },
  {
    id: 'u17',
    title: 'The Neuroscience of Learning',
    titleZh: '学习的神经科学',
    contentEn: `Advances in neuroscience have transformed our understanding of how learning occurs in the brain. The discovery of neuroplasticity demonstrates that the brain can reorganize itself in response to new experiences and learning. Memory formation involves complex processes including encoding, consolidation, and retrieval. The spacing effect and active recall have been shown to significantly enhance learning efficiency. Understanding these neural mechanisms has important implications for educational practices.`,
    contentZh: `神经科学的进步改变了我们对大脑如何学习的理解。神经可塑性的发现表明，大脑可以响应新的体验和学习进行重组。记忆形成涉及复杂的过程，包括编码、巩固和检索。间隔效应和主动回忆已被证明能显著提高学习效率。了解这些神经机制对教育实践具有重要意义。`,
    level: 'university',
    category: 'science',
    author: 'Neuroscience',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-17',
  },
  {
    id: 'u18',
    title: 'Crime and Punishment (Excerpt)',
    titleZh: '罪与罚（节选）',
    contentEn: `It was a particularly fine night, and there was no one in the street. The thoroughfares were almost deserted. It was only towards evening that some people would appear, and then only a few, hurrying home. Raskolnikov walked along in silence, terribly, painfully absorbed in his own thoughts. He was so pre-occupied that he almost ran into a police officer who was coming out of a gateway in the dark.`,
    contentZh: `那是一个特别美好的夜晚，街上空无一人。大街小巷几乎没有人。只有傍晚时分才会出现一些人，匆匆忙忙地回家。拉斯科尔尼科夫默默地走着，陷入了可怕的、痛苦的思考中。他是如此的全神贯注，几乎撞上了一个黑暗中走出大门的警察。`,
    level: 'university',
    category: 'literature',
    author: 'Fyodor Dostoevsky',
    wordCount: 92,
    difficulty: 5,
    createdAt: '2024-04-18',
  },
  {
    id: 'u19',
    title: 'Sustainable Development Goals',
    titleZh: '可持续发展目标',
    contentEn: `The United Nations Sustainable Development Goals (SDGs) represent a global framework for addressing humanity's most pressing challenges. Seventeen goals cover issues including poverty, inequality, climate change, environmental degradation, and peace. Achieving these goals requires coordinated action by governments, businesses, civil society, and individuals. The SDGs emphasize that economic development must be balanced with social inclusion and environmental protection.`,
    contentZh: `联合国可持续发展目标代表了应对人类最紧迫挑战的全球框架。十七个目标涵盖贫困、不平等、气候变化、环境退化和平等问题。实现这些目标需要政府、企业、民间社会和个人的协调行动。可持续发展目标强调，经济发展必须与社会包容和环境保护相平衡。`,
    level: 'university',
    category: 'science',
    author: 'UN',
    wordCount: 92,
    difficulty: 5,
    createdAt: '2024-04-19',
  },
  {
    id: 'u20',
    title: 'Anna Karenina (Excerpt)',
    titleZh: '安娜·卡列尼娜（节选）',
    contentEn: `All happy families are alike; each unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys' house. The wife had discovered that her husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him.`,
    contentZh: `幸福的家庭都是相似的，不幸的家庭各有各的不幸。奥布朗斯基家里一切都乱了套。妻子发现丈夫和家里曾经做过家庭教师的法国女孩有染，她对丈夫说，她不能再和他住在同一所房子里了。`,
    level: 'university',
    category: 'literature',
    author: 'Leo Tolstoy',
    wordCount: 78,
    difficulty: 5,
    createdAt: '2024-04-20',
  },
  {
    id: 'u21',
    title: 'The Psychology of Creativity',
    titleZh: '创造力的心理学',
    contentEn: `Creativity is a complex cognitive process that involves the generation of novel and valuable ideas. Research in psychology has identified several factors that influence creative thinking, including domain expertise, creative thinking skills, and task motivation. Divergent thinking, the ability to generate multiple solutions, is a key component of creativity. The creative process often involves incubation periods and insights that emerge from unconscious processing.`,
    contentZh: `创造力是一个复杂的认知过程，涉及产生新颖和有价值的想法。心理学研究已经确定了几个影响创造性思维的因素，包括领域专业知识、创造性思维技能和任务动机。发散思维，产生多种解决方案的能力，是创造力的关键组成部分。创造性过程通常涉及潜伏期和从无意识加工中出现的顿悟。`,
    level: 'university',
    category: 'science',
    author: 'Psychology',
    wordCount: 102,
    difficulty: 5,
    createdAt: '2024-04-21',
  },
  {
    id: 'u22',
    title: 'The Count of Monte Cristo (Excerpt)',
    titleZh: '基督山伯爵（节选）',
    contentEn: `No one can imagine the state of the sea in that terrible night, the sky was one single cloud, so black that it seemed to have been saturated with ink. The wind, which blew in gusts, seemed to acquire a voice that rose and fell with its own violence, at times like the wild cries of a spirit, at times like the distant moans of some one in pain. Then came the rain.`,
    contentZh: `没有人能想象那个可怕夜晚的大海是什么样子，天空是一片乌云，黑得仿佛被墨水浸染了。阵风似乎获得了自己的声音，随著自己的狂暴而升降，时而像幽灵的狂叫，时而像远处某个在痛苦中的人的呻吟。雨来了。`,
    level: 'university',
    category: 'literature',
    author: 'Alexandre Dumas',
    wordCount: 88,
    difficulty: 5,
    createdAt: '2024-04-22',
  },
  {
    id: 'u23',
    title: 'Biotechnology and Bioethics',
    titleZh: '生物技术与生物伦理',
    contentEn: `Biotechnology has advanced at a remarkable pace, raising profound ethical questions that society must address. Gene editing technologies like CRISPR offer the potential to eliminate genetic diseases and enhance human capabilities. However, they also raise concerns about playing God and creating designer babies. Cloning and stem cell research present similar ethical dilemmas. Society must engage in thoughtful dialogue to establish appropriate boundaries for biotechnological research and application.`,
    contentZh: `生物技术以惊人的速度发展，提出了社会必须解决的深刻伦理问题。像CRISPR这样的基因编辑技术有可能消除遗传疾病和增强人类能力。然而，它们也引发了关于扮演上帝和创造设计婴儿的担忧。克隆和干细胞研究提出了类似的伦理困境。社会必须参与深思熟虑的对话，为生物技术的研究和应用建立适当的界限。`,
    level: 'university',
    category: 'science',
    author: 'Bioethics',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-23',
  },
  {
    id: 'u24',
    title: 'Don Quixote (Excerpt)',
    titleZh: '堂吉诃德（节选）',
    contentEn: `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon on Sundays, made away with three parts of his income.`,
    contentZh: `拉曼恰地方的一个村庄，我此刻不太想提起它的名字，住着一位绅士，那种有一支矛枪插在枪架上、一面旧盾牌、一匹瘦马和一只跑狗的绅士没过多久。这位绅士的食谱通常是多于羊肉的牛肉汤，大部分夜晚有沙拉，星期六有残羹剩饭，星期五有小扁豆，星期天有一只鸽子，这就花掉了他四分之三的收入。`,
    level: 'university',
    category: 'literature',
    author: 'Miguel de Cervantes',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-24',
  },
  {
    id: 'u25',
    title: 'The Future of Urban Planning',
    titleZh: '城市化的未来规划',
    contentEn: `Urban planning in the 21st century must address unprecedented challenges including population growth, climate change, and technological disruption. Sustainable cities require integrated approaches that consider transportation, housing, employment, and environmental quality. The concept of the 15-minute city, where daily needs are within a short walk or bike ride, is gaining traction. Smart city technologies offer new tools for managing urban systems efficiently.`,
    contentZh: `21世纪的城市规划必须应对前所未有的人口增长、气候变化和技术颠覆等挑战。可持续城市需要综合方法，考虑交通、住房、就业和环境质量。15分钟城市的概念，即日常需求在短途步行或骑行范围内，正在获得关注。智慧城市技术为有效管理系统提供了新工具。`,
    level: 'university',
    category: 'science',
    author: 'Urban Planning',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-25',
  },
  {
    id: 'u26',
    title: 'Les Miserables (Excerpt)',
    titleZh: '悲惨世界（节选）',
    contentEn: `The mild and benevolent face of the Bishop had been constantly seen for eight-and-forty years in the town. He had rendered himself popular everywhere. He had created an almost inexhaustible charity, an affectionate and smiling toleration for the vices of humanity, and he had found in this charity, this toleration, a recompense of which he was well satisfied. He was beloved because he had made himself beloved.`,
    contentZh: `四十八年来，主教那张温和而慈祥的面孔在这个城镇里经常出现。他让自己到处受到爱戴。他创造了几乎无穷无尽的慈善事业，对人性的罪恶怀着温柔而微笑的容忍，他在这慈善和容忍中找到了让他非常满意的报酬。他因为让自己被爱戴而受到爱戴。`,
    level: 'university',
    category: 'literature',
    author: 'Victor Hugo',
    wordCount: 88,
    difficulty: 5,
    createdAt: '2024-04-26',
  },
  {
    id: 'u27',
    title: 'Cybersecurity in the Modern Age',
    titleZh: '现代社会的网络安全',
    contentEn: `Cybersecurity has become one of the most critical challenges of the digital age. As our lives become increasingly dependent on digital systems, the potential impact of cyber attacks grows correspondingly. Nation-states, criminal organizations, and individual hackers pose various threats to individuals, businesses, and governments alike. Protecting against these threats requires a multi-layered approach including technical controls, user education, and robust incident response capabilities.`,
    contentZh: `网络安全已成为数字时代最关键的挑战之一。随着我们的生活越来越依赖数字系统，网络攻击的潜在影响也在相应增加。国家、犯罪组织和个人黑客对个人、企业和政府都构成各种威胁。防范这些威胁需要多层次的方法，包括技术控制、用户教育和强大的事件响应能力。`,
    level: 'university',
    category: 'science',
    author: 'Security',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-27',
  },
  {
    id: 'u28',
    title: 'The Great Gatsby (Excerpt)',
    titleZh: '了不起的盖茨比（节选）',
    contentEn: `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world haven't had the advantages that you've had." He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that.`,
    contentZh: `我年纪还轻、涉世不深时，父亲就给了我一些忠告，我一直把它们反覆思考在心头。"每当你想批评别人的时候，"他告诉我，"要记住，这个世界上不是所有的人都具备你所拥有的优势。"他没有再说什么，但我们一直以一种保留的方式异常交流，我理解他的意思远不止于此。`,
    level: 'university',
    category: 'literature',
    author: 'F. Scott Fitzgerald',
    wordCount: 98,
    difficulty: 5,
    createdAt: '2024-04-28',
  },
  {
    id: 'u29',
    title: 'The Philosophy of Mind',
    titleZh: '心灵哲学',
    contentEn: `The philosophy of mind examines the nature of mental phenomena and their relationship to the physical brain. The mind-body problem remains one of philosophy's most challenging questions: how can physical processes give rise to subjective conscious experience? Dualism proposes that mind and body are fundamentally different substances, while materialism argues that mental states are simply brain states. Contemporary theories include functionalism and panpsychism.`,
    contentZh: `心灵哲学检验精神现象的本质及其与物理大脑的关系。身心问题是哲学最具挑战性的问题之一：物理过程如何产生主观意识体验？二元论提出心灵和身体是根本不同的物质，而唯物主义认为精神状态只是大脑状态。当代理论包括功能主义和泛心灵论。`,
    level: 'university',
    category: 'science',
    author: 'Philosophy',
    wordCount: 88,
    difficulty: 5,
    createdAt: '2024-04-29',
  },
  {
    id: 'u30',
    title: 'War and Peace (Excerpt)',
    titleZh: '战争与和平（节选）',
    contentEn: `Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes. But I warn you, if you don't tell me that this means war, if you still try to defend your infamies and your atrocities in which you are already recorded in the annals of history in their true colors, then I am no longer of your family and you are no longer my friend. That's how I speak to you.`,
    contentZh: `好吧，公爵，那么热那亚和卢卡现在成了波拿巴家族的地盘了。但是我警告你，如果你不告诉我这意味着战争，如果你仍然试图为你已经以真实颜色记录在史册中的罪行和暴行辩护，那么我就不再是你的家人，你也不再是我的朋友。我就是这样对你说话的。`,
    level: 'university',
    category: 'literature',
    author: 'Leo Tolstoy',
    wordCount: 82,
    difficulty: 5,
    createdAt: '2024-04-30',
  },
  {
    id: 'u31',
    title: 'The Constitutional Framework of Democratic Governance',
    titleZh: '民主治理的宪法框架',
    contentEn: `Constitutional governance forms the bedrock of modern democratic systems, establishing the fundamental principles and structures that regulate political power. The separation of powers between executive, legislative, and judicial branches prevents the concentration of authority in any single institution. Constitutional courts serve as guardians of the supreme law, interpreting and applying constitutional provisions to resolve disputes. The concept of judicial review, pioneered in the United States, has become a cornerstone of constitutional democracy worldwide. However, constitutional interpretation remains contested terrain, with different schools of thought advocating for originalism or living constitutionalism. The challenge of constitutional design lies in creating institutions that are both stable enough to provide certainty and flexible enough to adapt to changing circumstances. Furthermore, constitutional endurance depends on a culture of constitutionalism and citizens willing to defend constitutional norms against encroachment.`,
    contentZh: `宪政治理构成了现代民主体系的基石，建立了规范政治权力的基本原理和结构。行政、立法和司法部门之间的权力分立防止了权威集中在任何单一机构中。宪法法院作为最高法律的守护者，解释和应用宪法条款来解决争端。司法审查的概念始于美国，已成为全球宪政民主的基石。然而，宪法解释仍然是有争议的领域，不同的思想流派支持原旨主义或活的宪法主义。宪法设计中的挑战在于创造既足够稳定以提供确定性，又足够灵活以适应变化的环境的制度。此外，宪法的持久性取决于宪政文化和愿意捍卫宪法规范免受侵犯的公民。`,
    level: 'university',
    category: 'science',
    author: 'Constitutional Law',
    wordCount: 168,
    difficulty: 5,
    createdAt: '2024-05-01',
  },
  {
    id: 'u32',
    title: 'Paradise Lost (Excerpt)',
    titleZh: '失乐园（节选）',
    contentEn: `The mind is its own place, and in itself can make a Heaven of Hell, a Hell of Heaven. What matters it where I fly if I can still call my own? Better to reign in Hell than serve in Heaven. At here, I will breathe possible sighs, though that my breath, this UUID, and this discourse, and the darkness of the battlements that keep this place, will be much too wide. Here I am king; for who but I will defy the apparently undefeated? Yet not alone while I preserve this form within me. The greatest virulence is least as nothing. In my defence let my impartial, secret, universal, and secret stand among my troops, and be my humor thus.`,
    contentZh: `心灵是它自己的所在，它本身能把我地狱变成天堂，把天堂变成地狱。只要我还能称其为己有，我飞向何方又有何妨？宁统治地狱，不为天堂仆从。在此，我将呼吸可能的叹息，尽管我的气息、这永恒、这话语、以及保持此地的黑暗堡垒，都太过宽阔。我在此为王；除了我，谁还敢挑战这无敌的存在？然而只要我在内心保持这形式，就不会孤独。最致命的恶意几乎微不足道。让我的公正、秘密、普遍而隐秘的立场站在我的军队中，成为我的心情。`,
    level: 'university',
    category: 'literature',
    author: 'John Milton',
    wordCount: 132,
    difficulty: 5,
    createdAt: '2024-05-02',
  },
  {
    id: 'u33',
    title: 'The Macroeconomics of Monetary Policy',
    titleZh: '货币政策的宏观经济学',
    contentEn: `Monetary policy constitutes one of the primary tools through which central banks influence aggregate economic activity. By manipulating the money supply and interest rates, central banks attempt to achieve objectives including price stability, full employment, and sustainable economic growth. The transmission mechanism of monetary policy operates through multiple channels, including the interest rate channel, credit channel, and exchange rate channel. However, the effectiveness of monetary policy has been questioned in an environment of persistently low interest rates and the zero lower bound. Quantitative easing, as employed by major central banks following the 2008 financial crisis, represents an unconventional monetary policy tool that expands the central bank's balance sheet significantly. The debate over the appropriate monetary policy framework continues, with some advocating for inflation targeting while others propose nominal GDP targeting or price level targeting. Understanding monetary economics is essential for evaluating macroeconomic conditions and policy options.`,
    contentZh: `货币政策是中央银行影响总体经济活动的主要工具之一。通过操纵货币供应量和利率，中央银行试图实现包括价格稳定、充分就业和可持续经济增长在内的目标。货币政策的传导机制通过多种渠道运作，包括利率渠道、信贷渠道和汇率渠道。然而，在持续低利率和零下限的环境中，货币政策的有效性受到质疑。量化宽松政策，作为2008年金融危机后主要中央银行采用的非常规货币政策工具，大大扩展了中央银行的资产负债表。关于适当货币政策框架的辩论仍在继续，一些人主张通胀目标制，而另一些人则提出名义GDP目标制或价格水平目标制。理解货币经济学对于评估宏观经济状况和政策选择至关重要。`,
    level: 'university',
    category: 'science',
    author: 'Economics',
    wordCount: 168,
    difficulty: 5,
    createdAt: '2024-05-03',
  },
  {
    id: 'u34',
    title: "Gulliver's Travels (Excerpt)",
    titleZh: '格列佛游记（节选）',
    contentEn: `My father had a small estate in Nottinghamshire: I was the third of five sons. He sent me to Emanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies. But the charge of educating my brothers and sisters exceeding his ability, he was obliged to employ me as a servant to Mr. Bates, a famous surgeon in London. I remained with him three years and some months, where I applied myself close to my studies, and made great improvements in the medical sciences. Having an eager desire to see foreign countries, I resolved to leave Mr. Bates and work my passage. After many delays, I was admitted as surgeon's mate on the ship Adventure. We set sail from Portsmouth, and after a prosperous voyage, our ship was wrecked near the island of Lilliput.`,
    contentZh: `我父亲在诺丁汉郡有一小笔地产：我是五个儿子中的第三个。他在我十四岁时把我送到剑桥大学伊曼纽尔学院，我在那里住了三年，专心学习。但抚养我兄弟姐妹的费用超过了他的能力，他被迫让我给伦敦著名的外科医生贝茨先生做仆人。我和他一起住了三年零几个月，在那里我专心学习，在医学科学方面取得了很大进步。由于渴望看到外国，我决定离开贝茨先生去谋生。经过多次耽搁，我被接纳为\"冒险号\"船上的外科医生助手。我们从朴茨茅斯启航，经过一段顺利的航行，我们的船在利立浦特岛附近失事了。`,
    level: 'university',
    category: 'literature',
    author: 'Jonathan Swift',
    wordCount: 162,
    difficulty: 5,
    createdAt: '2024-05-04',
  },
  {
    id: 'u35',
    title: 'Climate Science and Global Warming',
    titleZh: '气候科学与全球变暖',
    contentEn: `Climate science has established with high confidence that human activities are the dominant cause of observed global warming since the mid-20th century. The burning of fossil fuels releases carbon dioxide and other greenhouse gases that trap heat in the atmosphere, leading to changes in Earth's energy balance. Climate models project continued warming and associated impacts including rising sea levels, altered precipitation patterns, and increased frequency of extreme weather events. The Paris Agreement represents a global effort to limit warming to well below 2 degrees Celsius above pre-industrial levels. However, current national commitments under the agreement are insufficient to achieve this target. Climate mitigation requires rapid decarbonization of energy systems, transformation of land use practices, and development of carbon capture technologies. Meanwhile, adaptation strategies must address the unavoidable impacts that are already locked in due to past emissions. The interplay between science, policy, and technology will determine humanity's ability to address this existential challenge.`,
    contentZh: `气候科学已经高度确信，自20世纪中叶以来，人类活动是观测到的全球变暖的主要原因。燃烧化石燃料释放出二氧化碳和其他温室气体，将热量困在大气中，导致地球能量平衡的变化。气候模型预测持续变暖及相关影响，包括海平面上升、降水模式改变和极端天气事件频率增加。巴黎协定代表了全球努力将升温限制在前工业化水平以上2摄氏度以下。然而，协定下的当前国家承诺不足以实现这一目标。气候减缓需要快速实现能源系统脱碳、转变土地利用实践以及开发碳捕获技术。同时，适应策略必须解决因过去排放已经不可避免的影响。科学、政策和技术之间的相互作用将决定人类应对这一生存挑战的能力。`,
    level: 'university',
    category: 'science',
    author: 'Climate Science',
    wordCount: 178,
    difficulty: 5,
    createdAt: '2024-05-05',
  },
  {
    id: 'u36',
    title: 'Pride and Prejudice (Excerpt)',
    titleZh: '傲慢与偏见（节选）',
    contentEn: `My dear Mr. Bennet, said his lady to him one day, have you heard that Netherfield Park is let at last? Mr. Bennet replied that he had not. But it is, returned she; for Mrs. Long has just been here, and she told me all about it. Mr. Bennet made no answer. Do you not want to know who has taken it? cried his wife impatiently. You want to tell me, and I have no objection to hearing it. This was invitation enough. Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately.`,
    contentZh: `我亲爱的班纳特先生，一天他的妻子对他说，你听说了吗？内瑟菲尔德公园终于租出去了。班纳特先生回答说没有。但她回答说，是的，因为朗格夫人刚才来过这里，她把一切都告诉我了。班纳特先生没有回答。你不想知道是谁租的吗？他妻子不耐烦地叫道。你想告诉我，我并不反对听。于是她说道，我亲爱的，你要知道，朗格夫人说内瑟菲尔德租给了一位英格兰北部的富有的年轻人。他星期一坐着四轮马车来看这个地方，非常喜欢它，当即就同意了莫里斯先生的安排。`,
    level: 'university',
    category: 'literature',
    author: 'Jane Austen',
    wordCount: 148,
    difficulty: 5,
    createdAt: '2024-05-06',
  },
  {
    id: 'u37',
    title: 'International Trade Theory',
    titleZh: '国际贸易理论',
    contentEn: `International trade theory explains the patterns of commerce between nations and the gains from specialization and exchange. The theory of comparative advantage, developed by David Ricardo, demonstrates that countries benefit from trading even when one country is more efficient at producing all goods. This counterintuitive result arises because countries should specialize in producing goods in which they have a relative efficiency advantage, rather than an absolute advantage. The Heckscher-Ohlin model extends this analysis by linking trade patterns to factor endowments, predicting that countries export goods that use their abundant factors intensively. However, modern trade theory recognizes that intra-industry trade, where countries simultaneously export and import similar products, cannot be explained by these classical models. New trade theory, incorporating economies of scale and imperfect competition, provides insights into trade in differentiated products. The implications of trade for wage inequality and environmental sustainability remain active areas of research and policy debate.`,
    contentZh: `国际贸易理论解释了国家间商业模式以及专业化和交换的收益。大卫·李嘉图开发的比较优势理论表明，即使一个国家在生产所有商品方面都更有效率，国家也能从贸易中受益。这个违反直觉的结果产生是因为各国应该专门生产具有相对效率优势的商品，而不是绝对优势。赫克歇尔-俄林模型通过将贸易模式与要素禀赋联系起来扩展了这一分析，预测各国出口密集使用其丰富要素的商品。然而，现代贸易理论认识到产业内贸易，即各国同时出口和进口类似产品，无法用这些古典模型解释。结合规模经济和不完全竞争的新贸易理论为了解差异化产品贸易提供了见解。贸易对工资不平等和环境可持续性的影响仍然是研究和政策辩论的活跃领域。`,
    level: 'university',
    category: 'science',
    author: 'International Economics',
    wordCount: 168,
    difficulty: 5,
    createdAt: '2024-05-07',
  },
  {
    id: 'u38',
    title: 'The Brothers Karamazov (Excerpt)',
    titleZh: '卡拉马佐夫兄弟（节选）',
    contentEn: `Above all, do not lie to yourself. A man who lies to himself and listens to his own lie comes to such a pass that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love, and in order to occupy and distract himself without love he gives himself up to passions and coarse pleasures, and sinks to bestiality in his vices, all from continual lying to himself and others. He who does not love his neighbor cannot know the truth about God, for God is love itself. The truth is that there is no virtue without the transformation of man's nature, and this transformation cannot be achieved without suffering.`,
    contentZh: `首先，不要对自己撒谎。一个对自己撒谎并倾听自己谎言的人会走到这样的地步：他无法区分自己身上或周围的真相，因此失去了对自己和他人的所有尊重。没有尊重，他就不再爱，为了占据和分散自己的注意力，他沉溺于激情和粗俗的快乐，在恶习中沦为兽性，所有这些都是由于不断对自己和他人撒谎。不爱邻人的人不可能知道上帝的真理，因为上帝就是爱。真相是，没有人的本性的转变就没有美德，而这种转变没有苦难就无法实现。`,
    level: 'university',
    category: 'literature',
    author: 'Fyodor Dostoevsky',
    wordCount: 138,
    difficulty: 5,
    createdAt: '2024-05-08',
  },
  {
    id: 'u39',
    title: 'The Industrial Revolution and Economic Growth',
    titleZh: '工业革命与经济增长',
    contentEn: `The Industrial Revolution represents one of the most profound transformations in human economic history, fundamentally altering the organization of production and the structure of societies. Beginning in Britain in the late 18th century, industrialization spread throughout Europe and North America, creating unprecedented levels of material wealth. The technological innovations of this period, including the steam engine, mechanized textile production, and iron smelting, dramatically increased labor productivity. However, the benefits of industrialization were unevenly distributed, with early industrializers gaining substantial advantages and developing countries facing challenges in competing with established manufacturing powers. The concept of catch-up growth examines why some economies have converged with leading economies while others have fallen behind. Institutions, geography, and human capital accumulation all play crucial roles in determining long-run economic trajectories. Understanding the historical determinants of economic growth remains essential for formulating policies that promote shared prosperity.`,
    contentZh: `工业革命代表了人类经济史上最深刻的变革之一，从根本上改变了生产组织和社会结构。工业化始于18世纪末的英国，随后传播到整个欧洲和北美，创造了前所未有的物质财富。这一时期的技术创新，包括蒸汽机、机械化纺织生产和高炉炼铁，大大提高了劳动生产率。然而，工业化的收益分配不均，早期工业化国家获得了实质性优势，发展中国家在与发展成熟的制造业大国竞争时面临挑战。追赶型增长的概念审视了为什么一些经济体已经与领先经济体趋同，而另一些则落后。制度、地理和人力资本积累都在决定长期经济轨迹方面发挥着关键作用。理解经济增长的历史决定因素对于制定促进共同繁荣的政策仍然至关重要。`,
    level: 'university',
    category: 'science',
    author: 'Economic History',
    wordCount: 178,
    difficulty: 5,
    createdAt: '2024-05-09',
  },
  {
    id: 'u40',
    title: 'Crime and Punishment (Excerpt)',
    titleZh: '罪与罚（节选）',
    contentEn: `Pain and suffering are always inevitable for a reasonable man who consciously attempts to live his life according to the dictates of reason. I think it is not true for me. I came to the conclusion that I was临界a nonentity, a nulility, an insect among insects. I came to understand that it was not right, my dear boy, to think of yourself as cleverer than others. Conscience is not proof of anything. It is simply a feeling, and you cannot destroy a feeling. You can only mock at it. A man who is not himself, who does not think his own thoughts, is not a man at all. You must not be frightened by the thought of your own insignificance. What matters is what you think of yourself, not what others think of you.`,
    contentZh: `痛苦和苦难对于一个理性的人来说是不可避免的，他自觉地试图按照理性的命令生活。我认为这对我不适用。我得出结论，我是一个无关紧要的人，一个虚无，一个昆虫中的昆虫。我开始明白，不把自己看作比其他人聪明是错误的。良心不能证明任何东西。它只是一种感觉，而你无法摧毁一种感觉。你只能嘲笑它。一个不是他自己、不思考自己思想的人，根本不是人。你不必被自己微不足道的想法吓到。重要的是你对自己的看法，而不是别人对你的看法。`,
    level: 'university',
    category: 'literature',
    author: 'Fyodor Dostoevsky',
    wordCount: 158,
    difficulty: 5,
    createdAt: '2024-05-10',
  },
];

// 合并长篇文章和短篇文章
export const articles: Article[] = [...longArticles, ...shortArticles];

// 根据等级获取文章（包含长文和短文）
export const getArticlesByLevel = (level: string): Article[] => {
  // 如果是all，返回所有文章
  if (level === 'all') return articles;

  // 获取该级别的长篇文章
  const longByLevel = getLongArticlesByLevel(level as Article['level']);
  // 获取该级别的短篇文章
  const shortByLevel = shortArticles.filter(article =>
    article.level === level
  );
  // 合并并返回
  return [...longByLevel, ...shortByLevel];
};

// 根据ID获取文章（同时检查短文和长文）
export const getArticleById = (id: string): Article | undefined => {
  // 先检查是否是长篇文章
  const longArticle = getLongArticleById(id);
  if (longArticle) return longArticle;

  // 再检查短篇文章
  return shortArticles.find(article => article.id === id);
};

// 根据分类获取文章
export const getArticlesByCategory = (category: string, level?: string): Article[] => {
  let filtered = articles;
  if (level && level !== 'all') {
    filtered = filtered.filter(article => article.level === level);
  }
  if (category && category !== 'all') {
    filtered = filtered.filter(article => article.category === category);
  }
  return filtered;
};

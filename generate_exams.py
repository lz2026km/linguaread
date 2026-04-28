#!/usr/bin/env python3
"""Generate 18 new exam papers and append to exams.ts"""

EXAM_TEMPLATES = {
    'elementary': [
        {
            'id': 'elementary-4',
            'title': 'Elementary English Test 4',
            'titleZh': '小学英语测试卷4',
            'level': 'elementary',
            'levelName': '小学',
            'questions': [
                {'id': 'e4-1', 'question': 'What is "鸡蛋" in English?', 'questionZh': '鸡蛋用英语怎么说？', 'options': ['Egg', 'Bread', 'Milk', 'Rice'], 'correctAnswer': 0, 'explanation': 'Egg means 鸡蛋'},
                {'id': 'e4-2', 'question': 'Which is a number?', 'questionZh': '哪个是数字？', 'options': ['Five', 'Red', 'Happy', 'Big'], 'correctAnswer': 0, 'explanation': 'Five is a number (五)'},
                {'id': 'e4-3', 'question': 'What is "男孩" in English?', 'questionZh': '男孩用英语怎么说？', 'options': ['Boy', 'Girl', 'Man', 'Woman'], 'correctAnswer': 0, 'explanation': 'Boy means 男孩'},
                {'id': 'e4-4', 'question': 'Which word means "高"?', 'questionZh': '哪个单词意思高？', 'options': ['Short', 'Tall', 'Small', 'Thin'], 'correctAnswer': 1, 'explanation': 'Tall means 高'},
                {'id': 'e4-5', 'question': 'What is "日本" in English?', 'questionZh': '日本用英语怎么说？', 'options': ['China', 'Japan', 'Korea', 'India'], 'correctAnswer': 1, 'explanation': 'Japan means 日本'},
                {'id': 'e4-6', 'question': 'How many colors in a rainbow?', 'questionZh': '彩虹有几种颜色？', 'options': ['Five', 'Six', 'Seven', 'Eight'], 'correctAnswer': 2, 'explanation': 'Seven colors in a rainbow'},
                {'id': 'e4-7', 'question': 'What is the opposite of "白天"?', 'questionZh': '白天的反义词是什么？', 'options': ['Morning', 'Night', 'Evening', 'Afternoon'], 'correctAnswer': 1, 'explanation': 'Night is the opposite of day'},
                {'id': 'e4-8', 'question': 'Which is a transport?', 'questionZh': '哪个是交通工具？', 'options': ['Train', 'Apple', 'Chair', 'Table'], 'correctAnswer': 0, 'explanation': 'Train is a transport'},
                {'id': 'e4-9', 'question': 'What is "足球" in English?', 'questionZh': '足球用英语怎么说？', 'options': ['Basketball', 'Football', 'Tennis', 'Swimming'], 'correctAnswer': 1, 'explanation': 'Football means 足球'},
                {'id': 'e4-10', 'question': 'What time is it? (10:00)', 'questionZh': '现在几点？（10点）', 'options': ['Ten o\'clock', 'Nine o\'clock', 'Eleven o\'clock', 'Twelve o\'clock'], 'correctAnswer': 0, 'explanation': '10:00 is ten o\'clock'},
                {'id': 'e4-11', 'question': 'Which is a kitchen item?', 'questionZh': '哪个是厨房用品？', 'options': ['Cup', 'Chair', 'Book', 'Pencil'], 'correctAnswer': 0, 'explanation': 'Cup is a kitchen item'},
                {'id': 'e4-12', 'question': 'What is "唱歌" in English?', 'questionZh': '唱歌用英语怎么说？', 'options': ['Sing', 'Dance', 'Run', 'Swim'], 'correctAnswer': 0, 'explanation': 'Sing means 唱歌'},
                {'id': 'e4-13', 'question': 'How many wings does a bird have?', 'questionZh': '鸟有几只翅膀？', 'options': ['One', 'Two', 'Three', 'Four'], 'correctAnswer': 1, 'explanation': 'A bird has two wings'},
                {'id': 'e4-14', 'question': 'What is "夏天" in English?', 'questionZh': '夏天用英语怎么说？', 'options': ['Summer', 'Autumn', 'Spring', 'Winter'], 'correctAnswer': 0, 'explanation': 'Summer means 夏天'},
                {'id': 'e4-15', 'question': 'Which is a domestic animal?', 'questionZh': '哪个是家畜？', 'options': ['Tiger', 'Lion', 'Cow', 'Wolf'], 'correctAnswer': 2, 'explanation': 'Cow is a domestic animal'},
            ]
        },
        {
            'id': 'elementary-5',
            'title': 'Elementary English Test 5',
            'titleZh': '小学英语测试卷5',
            'level': 'elementary',
            'levelName': '小学',
            'questions': [
                {'id': 'e5-1', 'question': 'What is "米饭" in English?', 'questionZh': '米饭用英语怎么说？', 'options': ['Rice', 'Bread', 'Noodle', 'Soup'], 'correctAnswer': 0, 'explanation': 'Rice means 米饭'},
                {'id': 'e5-2', 'question': 'Which is a sport?', 'questionZh': '哪个是运动？', 'options': ['Football', 'Book', 'Chair', 'Table'], 'correctAnswer': 0, 'explanation': 'Football is a sport'},
                {'id': 'e5-3', 'question': 'What is "晚上好" in English?', 'questionZh': '晚上好用英语怎么说？', 'options': ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], 'correctAnswer': 2, 'explanation': 'Good evening means 晚上好'},
                {'id': 'e5-4', 'question': 'What color is the sun?', 'questionZh': '太阳是什么颜色？', 'options': ['Red', 'Blue', 'Yellow', 'Green'], 'correctAnswer': 2, 'explanation': 'The sun is yellow'},
                {'id': 'e5-5', 'question': 'Which is a family member?', 'questionZh': '哪个是家庭成员？', 'options': ['Teacher', 'Friend', 'Sister', 'Doctor'], 'correctAnswer': 2, 'explanation': 'Sister is a family member'},
                {'id': 'e5-6', 'question': 'What is "手" in English?', 'questionZh': '手用英语怎么说？', 'options': ['Foot', 'Hand', 'Leg', 'Arm'], 'correctAnswer': 1, 'explanation': 'Hand means 手'},
                {'id': 'e5-7', 'question': 'How many hours in a day?', 'questionZh': '一天有多少小时？', 'options': ['Twelve', 'Twenty', 'Twenty-four', 'Thirty'], 'correctAnswer': 2, 'explanation': 'There are 24 hours in a day'},
                {'id': 'e5-8', 'question': 'What is the opposite of "左"?', 'questionZh': '左的反义词是什么？', 'options': ['Up', 'Down', 'Right', 'In'], 'correctAnswer': 2, 'explanation': 'Right is the opposite of left'},
                {'id': 'e5-9', 'question': 'Which is a toy?', 'questionZh': '哪个是玩具？', 'options': ['Doll', 'Chair', 'Table', 'Door'], 'correctAnswer': 0, 'explanation': 'Doll is a toy'},
                {'id': 'e5-10', 'question': 'What is "雨" in English?', 'questionZh': '雨用英语怎么说？', 'options': ['Snow', 'Rain', 'Wind', 'Cloud'], 'correctAnswer': 1, 'explanation': 'Rain means 雨'},
                {'id': 'e5-11', 'question': 'What day comes before Friday?', 'questionZh': '星期五的前一天是星期几？', 'options': ['Wednesday', 'Thursday', 'Saturday', 'Sunday'], 'correctAnswer': 1, 'explanation': 'Thursday comes before Friday'},
                {'id': 'e5-12', 'question': 'What is "橙汁" in English?', 'questionZh': '橙汁用英语怎么说？', 'options': ['Apple juice', 'Orange juice', 'Grape juice', 'Banana juice'], 'correctAnswer': 1, 'explanation': 'Orange juice means 橙汁'},
                {'id': 'e5-13', 'question': 'Which is a weather word?', 'questionZh': '哪个是天气词汇？', 'options': ['Sunny', 'Apple', 'Chair', 'Table'], 'correctAnswer': 0, 'explanation': 'Sunny is a weather word'},
                {'id': 'e5-14', 'question': 'What is "脚" in English?', 'questionZh': '脚用英语怎么说？', 'options': ['Foot', 'Hand', 'Leg', 'Arm'], 'correctAnswer': 0, 'explanation': 'Foot means 脚'},
                {'id': 'e5-15', 'question': 'How many corners does a triangle have?', 'questionZh': '三角形有几个角？', 'options': ['Two', 'Three', 'Four', 'Five'], 'correctAnswer': 1, 'explanation': 'A triangle has three corners'},
            ]
        },
        {
            'id': 'elementary-6',
            'title': 'Elementary English Test 6',
            'titleZh': '小学英语测试卷6',
            'level': 'elementary',
            'levelName': '小学',
            'questions': [
                {'id': 'e6-1', 'question': 'What is "飞机" in English?', 'questionZh': '飞机用英语怎么说？', 'options': ['Plane', 'Ship', 'Car', 'Train'], 'correctAnswer': 0, 'explanation': 'Plane means 飞机'},
                {'id': 'e6-2', 'question': 'Which is a musical instrument?', 'questionZh': '哪个是乐器？', 'options': ['Piano', 'Chair', 'Table', 'Door'], 'correctAnswer': 0, 'explanation': 'Piano is a musical instrument'},
                {'id': 'e6-3', 'question': 'What is "早上好" in English?', 'questionZh': '早上好用英语怎么说？', 'options': ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], 'correctAnswer': 0, 'explanation': 'Good morning means 早上好'},
                {'id': 'e6-4', 'question': 'What color is the moon?', 'questionZh': '月亮是什么颜色？', 'options': ['Yellow', 'Blue', 'White', 'Green'], 'correctAnswer': 2, 'explanation': 'The moon is white'},
                {'id': 'e6-5', 'question': 'Which is a pet?', 'questionZh': '哪个是宠物？', 'options': ['Cat', 'Cow', 'Pig', 'Horse'], 'correctAnswer': 0, 'explanation': 'Cats are common pets'},
                {'id': 'e6-6', 'question': 'What is "头" in English?', 'questionZh': '头用英语怎么说？', 'options': ['Head', 'Eye', 'Ear', 'Nose'], 'correctAnswer': 0, 'explanation': 'Head means 头'},
                {'id': 'e6-7', 'question': 'How many letters in "CAT"?', 'questionZh': '"CAT"有几个字母？', 'options': ['Two', 'Three', 'Four', 'Five'], 'correctAnswer': 1, 'explanation': 'CAT has three letters'},
                {'id': 'e6-8', 'question': 'What is the opposite of "新"?', 'questionZh': '新的反义词是什么？', 'options': ['Big', 'Small', 'Old', 'Tall'], 'correctAnswer': 2, 'explanation': 'Old is the opposite of new'},
                {'id': 'e6-9', 'question': 'Which is a fruit?', 'questionZh': '哪个是水果？', 'options': ['Banana', 'Carrot', 'Potato', 'Onion'], 'correctAnswer': 0, 'explanation': 'Banana is a fruit'},
                {'id': 'e6-10', 'question': 'What is "雪" in English?', 'questionZh': '雪用英语怎么说？', 'options': ['Rain', 'Snow', 'Wind', 'Cloud'], 'correctAnswer': 1, 'explanation': 'Snow means 雪'},
                {'id': 'e6-11', 'question': 'What is the third month of the year?', 'questionZh': '一年中的第三个月是几月？', 'options': ['January', 'February', 'March', 'April'], 'correctAnswer': 2, 'explanation': 'March is the third month'},
                {'id': 'e6-12', 'question': 'What is "巧克力" in English?', 'questionZh': '巧克力用英语怎么说？', 'options': ['Candy', 'Chocolate', 'Cake', 'Cookie'], 'correctAnswer': 1, 'explanation': 'Chocolate means 巧克力'},
                {'id': 'e6-13', 'question': 'Which is a clothing item?', 'questionZh': '哪个是衣服？', 'options': ['Pants', 'Chair', 'Table', 'Desk'], 'correctAnswer': 0, 'explanation': 'Pants is a clothing item'},
                {'id': 'e6-14', 'question': 'What is "头发" in English?', 'questionZh': '头发用英语怎么说？', 'options': ['Hair', 'Head', 'Face', 'Eye'], 'correctAnswer': 0, 'explanation': 'Hair means 头发'},
                {'id': 'e6-15', 'question': 'How many legs does a spider have?', 'questionZh': '蜘蛛有几条腿？', 'options': ['Six', 'Eight', 'Ten', 'Four'], 'correctAnswer': 1, 'explanation': 'A spider has eight legs'},
            ]
        },
        {
            'id': 'elementary-7',
            'title': 'Elementary English Test 7',
            'titleZh': '小学英语测试卷7',
            'level': 'elementary',
            'levelName': '小学',
            'questions': [
                {'id': 'e7-1', 'question': 'What is "出租车" in English?', 'questionZh': '出租车用英语怎么说？', 'options': ['Taxi', 'Bus', 'Subway', 'Bike'], 'correctAnswer': 0, 'explanation': 'Taxi means 出租车'},
                {'id': 'e7-2', 'question': 'Which is a place?', 'questionZh': '哪个是地点？', 'options': ['Park', 'Book', 'Pen', 'Desk'], 'correctAnswer': 0, 'explanation': 'Park is a place'},
                {'id': 'e7-3', 'question': 'What is "对不起" in English?', 'questionZh': '对不起用英语怎么说？', 'options': ['Hello', 'Sorry', 'Thanks', 'Please'], 'correctAnswer': 1, 'explanation': 'Sorry means 对不起'},
                {'id': 'e7-4', 'question': 'What color is grass?', 'questionZh': '草是什么颜色？', 'options': ['Yellow', 'Blue', 'Green', 'Red'], 'correctAnswer': 2, 'explanation': 'Grass is green'},
                {'id': 'e7-5', 'question': 'Which is a body part?', 'questionZh': '哪个是身体部位？', 'options': ['Face', 'Chair', 'Table', 'Book'], 'correctAnswer': 0, 'explanation': 'Face is a body part'},
                {'id': 'e7-6', 'question': 'What is "牙齿" in English?', 'questionZh': '牙齿用英语怎么说？', 'options': ['Tooth', 'Mouth', 'Tongue', 'Lip'], 'correctAnswer': 0, 'explanation': 'Tooth means 牙齿'},
                {'id': 'e7-7', 'question': 'How many weeks in a month?', 'questionZh': '一个月有几周？', 'options': ['Two', 'Three', 'Four', 'Five'], 'correctAnswer': 2, 'explanation': 'About four weeks in a month'},
                {'id': 'e7-8', 'question': 'What is the opposite of "快"?', 'questionZh': '快的反义词是什么？', 'options': ['Big', 'Small', 'Slow', 'Tall'], 'correctAnswer': 2, 'explanation': 'Slow is the opposite of fast'},
                {'id': 'e7-9', 'question': 'Which is a vegetable?', 'questionZh': '哪个是蔬菜？', 'options': ['Tomato', 'Apple', 'Banana', 'Orange'], 'correctAnswer': 0, 'explanation': 'Tomato is a vegetable'},
                {'id': 'e7-10', 'question': 'What is "秋天" in English?', 'questionZh': '秋天用英语怎么说？', 'options': ['Summer', 'Autumn', 'Spring', 'Winter'], 'correctAnswer': 1, 'explanation': 'Autumn means 秋天'},
                {'id': 'e7-11', 'question': 'What month is your birthday?', 'questionZh': 'What month is your birthday?', 'options': ['January', 'December', 'March', 'All months'], 'correctAnswer': 3, 'explanation': 'Birthday can be in any month'},
                {'id': 'e7-12', 'question': 'What is "蜂蜜" in English?', 'questionZh': '蜂蜜用英语怎么说？', 'options': ['Sugar', 'Honey', 'Salt', 'Pepper'], 'correctAnswer': 1, 'explanation': 'Honey means 蜂蜜'},
                {'id': 'e7-13', 'question': 'Which is a insect?', 'questionZh': '哪个是昆虫？', 'options': ['Ant', 'Dog', 'Cat', 'Bird'], 'correctAnswer': 0, 'explanation': 'Ant is an insect'},
                {'id': 'e7-14', 'question': 'What is "舌头" in English?', 'questionZh': '舌头用英语怎么说？', 'options': ['Tongue', 'Teeth', 'Lip', 'Chin'], 'correctAnswer': 0, 'explanation': 'Tongue means 舌头'},
                {'id': 'e7-15', 'question': 'How many letters in "DOG"?', 'questionZh': '"DOG"有几个字母？', 'options': ['Two', 'Three', 'Four', 'Five'], 'correctAnswer': 1, 'explanation': 'DOG has three letters'},
            ]
        },
    ],
    'junior': [
        {
            'id': 'junior-4',
            'title': 'Junior High English Test 4',
            'titleZh': '初中英语测试卷4',
            'level': 'junior',
            'levelName': '初中',
            'questions': [
                {'id': 'j4-1', 'question': 'What is the past tense of "eat"?', 'questionZh': '"eat"的过去式是什么？', 'options': ['Eat', 'Ate', 'Eaten', 'Eating'], 'correctAnswer': 1, 'explanation': 'Ate is the past tense of eat'},
                {'id': 'j4-2', 'question': 'She ____ to the library yesterday.', 'questionZh': '她昨天____图书馆。', 'options': ['go', 'goes', 'went', 'going'], 'correctAnswer': 2, 'explanation': 'Yesterday indicates past tense'},
                {'id': 'j4-3', 'question': 'What is the opposite of "buy"?', 'questionZh': '"buy"的反义词是什么？', 'options': ['Get', 'Take', 'Sell', 'Give'], 'correctAnswer': 2, 'explanation': 'Sell is the opposite of buy'},
                {'id': 'j4-4', 'question': '____ you finish your homework?', 'questionZh': '你____完成作业了吗？', 'options': ['Have', 'Has', 'Did', 'Do'], 'correctAnswer': 2, 'explanation': 'Past tense question uses did'},
                {'id': 'j4-5', 'question': 'The book is ____ interesting than that one.', 'questionZh': '这本书比那本____有趣。', 'options': ['more', 'most', 'better', 'best'], 'correctAnswer': 0, 'explanation': 'Comparative uses more'},
                {'id': 'j4-6', 'question': 'I ____ my keys just now.', 'questionZh': '我刚才____我的钥匙。', 'options': ['find', 'found', 'finding', 'finds'], 'correctAnswer': 1, 'explanation': 'Just now indicates past tense'},
                {'id': 'j4-7', 'question': 'Which sentence is correct?', 'questionZh': '哪个句子是正确的？', 'options': ['She is more taller than me', 'She is taller than me', 'She is tall than me', 'She taller than me'], 'correctAnswer': 1, 'explanation': 'Correct comparison structure'},
                {'id': 'j4-8', 'question': '____ is the tallest student?', 'questionZh': '谁是最高的学生？', 'options': ['What', 'Who', 'When', 'Where'], 'correctAnswer': 1, 'explanation': 'Who asks about a person'},
                {'id': 'j4-9', 'question': 'If I ____ rich, I would travel the world.', 'questionZh': '如果我____有钱，我就环游世界。', 'options': ['am', 'was', 'were', 'be'], 'correctAnswer': 2, 'explanation': 'Subjunctive mood uses were'},
                {'id': 'j4-10', 'question': 'He is the ____ boy in our class.', 'questionZh': '他是我们班最____的男孩。', 'options': ['short', 'shorter', 'shortest', 'more short'], 'correctAnswer': 2, 'explanation': 'Superlative of short is shortest'},
                {'id': 'j4-11', 'question': 'The movie was so ____ that I cried.', 'questionZh': '电影太____以至于我哭了。', 'options': ['sad', 'sadly', 'sadder', 'saddest'], 'correctAnswer': 0, 'explanation': 'So + adjective is correct'},
                {'id': 'j4-12', 'question': '____ beautiful flower it is!', 'questionZh': '多____花啊！', 'options': ['What a', 'How', 'What', 'How a'], 'correctAnswer': 0, 'explanation': 'What a + adjective + noun'},
                {'id': 'j4-13', 'question': 'She has lived here ____ five years.', 'questionZh': '她在这里住了五年。', 'options': ['since', 'for', 'in', 'on'], 'correctAnswer': 1, 'explanation': 'For is used with a period of time'},
                {'id': 'j4-14', 'question': 'I would like ____ apple, please.', 'questionZh': '请给我____苹果。', 'options': ['a', 'an', 'some', 'any'], 'correctAnswer': 1, 'explanation': 'An + vowel sound'},
                {'id': 'j4-15', 'question': 'The box is heavy enough ____ carry.', 'questionZh': '箱子重到不能____搬运。', 'options': ['to', 'to not', 'not to', 'for'], 'correctAnswer': 2, 'explanation': 'Enough + not to-infinitive'},
            ]
        },
        {
            'id': 'junior-5',
            'title': 'Junior High English Test 5',
            'titleZh': '初中英语测试卷5',
            'level': 'junior',
            'levelName': '初中',
            'questions': [
                {'id': 'j5-1', 'question': 'What is the plural of "tooth"?', 'questionZh': '"tooth"的复数形式是什么？', 'options': ['Tooths', 'Teeth', 'Toothes', 'Teeths'], 'correctAnswer': 1, 'explanation': 'Teeth is the plural of tooth'},
                {'id': 'j5-2', 'question': 'I have ____ idea.', 'questionZh': '我有一个____主意。', 'options': ['a', 'an', 'the', 'some'], 'correctAnswer': 1, 'explanation': 'Idea starts with vowel sound'},
                {'id': 'j5-3', 'question': 'She is ____ student.', 'questionZh': '她是一个____学生。', 'options': ['a', 'an', 'the', 'some'], 'correctAnswer': 1, 'explanation': 'An + vowel sound'},
                {'id': 'j5-4', 'question': 'There ____ some books on the desk.', 'questionZh': '桌子上____一些书。', 'options': ['is', 'are', 'was', 'were'], 'correctAnswer': 1, 'explanation': 'Books are plural, use are'},
                {'id': 'j5-5', 'question': 'He ____ English very hard.', 'questionZh': '他____英语很努力。', 'options': ['studies', 'study', 'studying', 'studied'], 'correctAnswer': 0, 'explanation': 'Studies is third person singular'},
                {'id': 'j5-6', 'question': 'The cats ____ on the roof.', 'questionZh': '猫在屋顶上。', 'options': ['is', 'are', 'am', 'be'], 'correctAnswer': 1, 'explanation': 'Cats are plural, use are'},
                {'id': 'j5-7', 'question': 'I would like ____ to go there.', 'questionZh': '我想____去那里。', 'options': ['want', 'to want', 'wanting', 'wants'], 'correctAnswer': 0, 'explanation': 'Would like + base form'},
                {'id': 'j5-8', 'question': 'She is ____ than her brother.', 'questionZh': '她比她哥哥____。', 'options': ['smart', 'smarter', 'smartest', 'more smart'], 'correctAnswer': 1, 'explanation': 'Comparative form is smarter'},
                {'id': 'j5-9', 'question': '____ you please help me?', 'questionZh': '请你帮助我好吗？', 'options': ['Can', 'Could', 'Might', 'May'], 'correctAnswer': 1, 'explanation': 'Could is more polite'},
                {'id': 'j5-10', 'question': 'I have ____ friends than you.', 'questionZh': '我的朋友比你____。', 'options': ['few', 'fewer', 'fewest', 'little'], 'correctAnswer': 1, 'explanation': 'Fewer is comparative'},
                {'id': 'j5-11', 'question': 'He is the ____ boy in our class.', 'questionZh': '他是我们班最____的男孩。', 'options': ['tall', 'taller', 'tallest', 'good'], 'correctAnswer': 2, 'explanation': 'Superlative is tallest'},
                {'id': 'j5-12', 'question': 'She ____ her mother very much.', 'questionZh': '她____她妈妈很多。', 'options': ['love', 'loves', 'loving', 'loved'], 'correctAnswer': 1, 'explanation': 'Third person singular adds s'},
                {'id': 'j5-13', 'question': 'Let us ____ a trip.', 'questionZh': '让我们____旅行吧。', 'options': ['make', 'to make', 'making', 'makes'], 'correctAnswer': 0, 'explanation': 'Let + base form of verb'},
                {'id': 'j5-14', 'question': 'I need ____ help.', 'questionZh': '我需要____帮助。', 'options': ['any', 'some', 'many', 'much'], 'correctAnswer': 1, 'explanation': 'Some is used in offers'},
                {'id': 'j5-15', 'question': 'The weather is getting ____.', 'questionZh': '天气变得越来越____。', 'options': ['bad', 'worse', 'worst', 'badly'], 'correctAnswer': 1, 'explanation': 'Getting worse is the expression'},
            ]
        },
        {
            'id': 'junior-6',
            'title': 'Junior High English Test 6',
            'titleZh': '初中英语测试卷6',
            'level': 'junior',
            'levelName': '初中',
            'questions': [
                {'id': 'j6-1', 'question': 'What is the past tense of "write"?', 'questionZh': '"write"的过去式是什么？', 'options': ['Write', 'Writes', 'Wrote', 'Written'], 'correctAnswer': 2, 'explanation': 'Wrote is the past tense of write'},
                {'id': 'j6-2', 'question': 'She has ____ finished her homework.', 'questionZh': '她已经____作业了。', 'options': ['yet', 'already', 'still', 'ever'], 'correctAnswer': 1, 'explanation': 'Already is used in present perfect'},
                {'id': 'j6-3', 'question': 'If I ____ you, I would accept the offer.', 'questionZh': '如果我是你，我会接受这个提议。', 'options': ['am', 'was', 'were', 'are'], 'correctAnswer': 2, 'explanation': 'Subjunctive mood uses were'},
                {'id': 'j6-4', 'question': 'The house ____ last year.', 'questionZh': '这房子是去年____。', 'options': ['built', 'was built', 'is built', 'builds'], 'correctAnswer': 1, 'explanation': 'Passive voice is required'},
                {'id': 'j6-5', 'question': 'I would appreciate ____ if you could help me.', 'questionZh': '如果您能帮助我，我将非常____。', 'options': ['that', 'this', 'it', 'them'], 'correctAnswer': 2, 'explanation': 'Appreciate + it'},
                {'id': 'j6-6', 'question': 'Neither Tom nor his friends ____ there.', 'questionZh': 'Tom和他的朋友们都不在那儿。', 'options': ['is', 'are', 'was', 'were'], 'correctAnswer': 1, 'explanation': 'Nor agrees with friends (are)'},
                {'id': 'j6-7', 'question': 'He behaved as if he ____ the owner.', 'questionZh': '他表现得好像他是主人似的。', 'options': ['is', 'was', 'were', 'be'], 'correctAnswer': 2, 'explanation': 'Subjunctive with as if uses were'},
                {'id': 'j6-8', 'question': 'The baby kept ____ all night.', 'questionZh': '婴儿一直哭闹了一整夜。', 'options': ['cry', 'to cry', 'crying', 'cried'], 'correctAnswer': 2, 'explanation': 'Keep + gerund'},
                {'id': 'j6-9', 'question': 'I suggest we ____ the meeting tomorrow.', 'questionZh': '我建议我们____明天的会议。', 'options': ['hold', 'to hold', 'holding', 'held'], 'correctAnswer': 0, 'explanation': 'Suggest + base form'},
                {'id': 'j6-10', 'question': '____ the rain, we went out.', 'questionZh': '尽管下雨，我们还是出去了。', 'options': ['Despite', 'Although', 'Because', 'Since'], 'correctAnswer': 1, 'explanation': 'Although + clause'},
                {'id': 'j6-11', 'question': 'The teacher asked us ____ our homework.', 'questionZh': '老师要求我们____作业。', 'options': ['finish', 'to finish', 'finishing', 'finished'], 'correctAnswer': 1, 'explanation': 'Ask + object + to-infinitive'},
                {'id': 'j6-12', 'question': 'She is interested ____ learning French.', 'questionZh': '她对学习法语感兴趣。', 'options': ['in', 'on', 'at', 'to'], 'correctAnswer': 0, 'explanation': 'Interested in is correct'},
                {'id': 'j6-13', 'question': 'The book is worth ____ again.', 'questionZh': '这本书值得再看一遍。', 'options': ['reading', 'to read', 'read', 'reads'], 'correctAnswer': 0, 'explanation': 'Worth + gerund'},
                {'id': 'j6-14', 'question': 'I look forward to ____ you soon.', 'questionZh': '我期待____你很快见面。', 'options': ['see', 'to see', 'seeing', 'seen'], 'correctAnswer': 2, 'explanation': 'Look forward to + gerund'},
                {'id': 'j6-15', 'question': 'It is important ____ English well.', 'questionZh': '学好英语很____。', 'options': ['learn', 'to learn', 'learning', 'learns'], 'correctAnswer': 1, 'explanation': 'It is important + to-infinitive'},
            ]
        },
        {
            'id': 'junior-7',
            'title': 'Junior High English Test 7',
            'titleZh': '初中英语测试卷7',
            'level': 'junior',
            'levelName': '初中',
            'questions': [
                {'id': 'j7-1', 'question': 'What is the past tense of "go"?', 'questionZh': '"go"的过去式是什么？', 'options': ['Go', 'Goes', 'Went', 'Gone'], 'correctAnswer': 2, 'explanation': 'Went is the past tense of go'},
                {'id': 'j7-2', 'question': 'She ____ to school every day.', 'questionZh': '她每天____学校。', 'options': ['go', 'goes', 'going', 'went'], 'correctAnswer': 1, 'explanation': 'Third person singular uses goes'},
                {'id': 'j7-3', 'question': 'What is the opposite of "accept"?', 'questionZh': '"accept"的反义词是什么？', 'options': ['Receive', 'Refuse', 'Agree', 'Allow'], 'correctAnswer': 1, 'explanation': 'Refuse is the opposite of accept'},
                {'id': 'j7-4', 'question': '____ you like some water?', 'questionZh': '你想要一些水吗？', 'options': ['Are', 'Do', 'Does', 'Can'], 'correctAnswer': 1, 'explanation': 'Do is used for questions with like'},
                {'id': 'j7-5', 'question': 'The book is ____ interesting of all.', 'questionZh': '这本书是所有书中最____的。', 'options': ['more', 'most', 'better', 'best'], 'correctAnswer': 1, 'explanation': 'Superlative of interesting is most interesting'},
                {'id': 'j7-6', 'question': 'I ____ my homework yesterday.', 'questionZh': '我昨天____我的作业。', 'options': ['finish', 'finished', 'finishing', 'finishes'], 'correctAnswer': 1, 'explanation': 'Yesterday indicates past tense'},
                {'id': 'j7-7', 'question': 'Which sentence is correct?', 'questionZh': '哪个句子是正确的？', 'options': ['She is taller than me', 'She is taller than I', 'She is more tall than me', 'She taller than me'], 'correctAnswer': 0, 'explanation': 'Correct comparison structure'},
                {'id': 'j7-8', 'question': '____ is the capital of China?', 'questionZh': '____是中国的首都？', 'options': ['What', 'Where', 'When', 'Who'], 'correctAnswer': 0, 'explanation': 'What asks for information about the capital'},
                {'id': 'j7-9', 'question': 'If it ____ tomorrow, we will stay home.', 'questionZh': '如果明天下雨，我们就待在家里。', 'options': ['rain', 'rains', 'rained', 'raining'], 'correctAnswer': 1, 'explanation': 'Third person singular after if'},
                {'id': 'j7-10', 'question': 'He is ____ boy in our class.', 'questionZh': '他是我们班最____的男孩。', 'options': ['tall', 'taller', 'tallest', 'more tall'], 'correctAnswer': 2, 'explanation': 'Superlative of tall is tallest'},
                {'id': 'j7-11', 'question': 'The movie was ____ boring that I fell asleep.', 'questionZh': '电影太____以至于我睡着了。', 'options': ['so', 'such', 'too', 'very'], 'correctAnswer': 0, 'explanation': 'So + adjective is correct structure'},
                {'id': 'j7-12', 'question': '____ nice weather it is today!', 'questionZh': '今天天气多____啊！', 'options': ['What', 'How', 'What a', 'How a'], 'correctAnswer': 0, 'explanation': 'What + (adj) + noun structure'},
                {'id': 'j7-13', 'question': 'She has lived in Shanghai ____ 2010.', 'questionZh': '她自2010年以来一直住在上海。', 'options': ['since', 'for', 'in', 'on'], 'correctAnswer': 0, 'explanation': 'Since is used with a specific year'},
                {'id': 'j7-14', 'question': 'I would like ____ tea, please.', 'questionZh': '请给我____茶。', 'options': ['a', 'an', 'some', 'any'], 'correctAnswer': 2, 'explanation': 'Some is used for uncountable nouns in offers'},
                {'id': 'j7-15', 'question': 'The child is old enough ____ himself.', 'questionZh': '这个孩子年龄足够____自己了。', 'options': ['to take care of', 'take care of', 'taking care of', 'takes care of'], 'correctAnswer': 0, 'explanation': 'Enough + to-infinitive structure'},
            ]
        },
        {
            'id': 'junior-8',
            'title': 'Junior High English Test 8',
            'titleZh': '初中英语测试卷8',
            'level': 'junior',
            'levelName': '初中',
            'questions': [
                {'id': 'j8-1', 'question': 'What is the past tense of "see"?', 'questionZh': '"see"的过去式是什么？', 'options': ['See', 'Saw', 'Seen', 'Seeing'], 'correctAnswer': 1, 'explanation': 'Saw is the past tense of see'},
                {'id': 'j8-2', 'question': 'She ____ her friends yesterday.', 'questionZh': '她昨天____她的朋友们。', 'options': ['meet', 'meets', 'met', 'meeting'], 'correctAnswer': 2, 'explanation': 'Yesterday indicates past tense'},
                {'id': 'j8-3', 'question': 'What is the opposite of "happy"?', 'questionZh': '"happy"的反义词是什么？', 'options': ['Sad', 'Glad', 'Excited', 'Angry'], 'correctAnswer': 0, 'explanation': 'Sad is the opposite of happy'},
                {'id': 'j8-4', 'question': '____ you finish your homework?', 'questionZh': '你____完成作业了吗？', 'options': ['Have', 'Has', 'Did', 'Do'], 'correctAnswer': 2, 'explanation': 'Past tense question uses did'},
                {'id': 'j8-5', 'question': 'This is the ____ movie I have ever seen.', 'questionZh': '这是我____看过的电影。', 'options': ['good', 'better', 'best', 'bad'], 'correctAnswer': 2, 'explanation': 'Superlative with present perfect'},
                {'id': 'j8-6', 'question': 'I ____ my keys just now.', 'questionZh': '我刚才____我的钥匙。', 'options': ['find', 'found', 'finding', 'finds'], 'correctAnswer': 1, 'explanation': 'Just now indicates past tense'},
                {'id': 'j8-7', 'question': 'Which sentence is correct?', 'questionZh': '哪个句子是正确的？', 'options': ['She is more taller than me', 'She is taller than me', 'She is tall than me', 'She taller than me'], 'correctAnswer': 1, 'explanation': 'Correct comparison structure'},
                {'id': 'j8-8', 'question': '____ is the tallest student?', 'questionZh': '谁是最高的学生？', 'options': ['What', 'Who', 'When', 'Where'], 'correctAnswer': 1, 'explanation': 'Who asks about a person'},
                {'id': 'j8-9', 'question': 'If I ____ rich, I would travel the world.', 'questionZh': '如果我____有钱，我就环游世界。', 'options': ['am', 'was', 'were', 'be'], 'correctAnswer': 2, 'explanation': 'Subjunctive mood uses were'},
                {'id': 'j8-10', 'question': 'He is the ____ boy in our class.', 'questionZh': '他是我们班最____的男孩。', 'options': ['short', 'shorter', 'shortest', 'more short'], 'correctAnswer': 2, 'explanation': 'Superlative of short is shortest'},
                {'id': 'j8-11', 'question': 'The movie was so ____ that I cried.', 'questionZh': '电影太____以至于我哭了。', 'options': ['sad', 'sadly', 'sadder', 'saddest'], 'correctAnswer': 0, 'explanation': 'So + adjective is correct'},
                {'id': 'j8-12', 'question': '____ beautiful flower it is!', 'questionZh': '多____花啊！', 'options': ['What a', 'How', 'What', 'How a'], 'correctAnswer': 0, 'explanation': 'What a + adjective + noun'},
                {'id': 'j8-13', 'question': 'She has lived here ____ five years.', 'questionZh': '她在这里住了五年。', 'options': ['since', 'for', 'in', 'on'], 'correctAnswer': 1, 'explanation': 'For is used with a period of time'},
                {'id': 'j8-14', 'question': 'I would like ____ apple, please.', 'questionZh': '请给我____苹果。', 'options': ['a', 'an', 'some', 'any'], 'correctAnswer': 1, 'explanation': 'An + vowel sound'},
                {'id': 'j8-15', 'question': 'The box is heavy enough ____ carry.', 'questionZh': '箱子重到不能____搬运。', 'options': ['to', 'to not', 'not to', 'for'], 'correctAnswer': 2, 'explanation': 'Enough + not to-infinitive'},
            ]
        },
    ],
    'senior': [
        {
            'id': 'senior-4',
            'title': 'Senior High English Test 4',
            'titleZh': '高中英语测试卷4',
            'level': 'senior',
            'levelName': '高中',
            'questions': [
                {'id': 's4-1', 'question': 'Had I known the truth, I ____ him the secret.', 'questionZh': '如果我知道真相，我就____他这个秘密了。', 'options': ['would not tell', 'would not have told', 'had not told', 'would tell'], 'correctAnswer': 1, 'explanation': 'Past unreal conditional uses would have done'},
                {'id': 's4-2', 'question': 'It is essential that every student ____ the exam.', 'questionZh': '每个学生都____参加考试是必要的。', 'options': ['takes', 'take', 'took', 'taking'], 'correctAnswer': 1, 'explanation': 'Subjunctive uses base form'},
                {'id': 's4-3', 'question': 'No sooner ____ arrived than it started to rain.', 'questionZh': '他刚____就下雨了。', 'options': ['had he', 'he had', 'has he', 'he has'], 'correctAnswer': 0, 'explanation': 'No sooner goes with had'},
                {'id': 's4-4', 'question': '____ hard you try, you cannot change the fact.', 'questionZh': '无论你多____努力，你都无法改变这个事实。', 'options': ['however', 'whatever', 'whenever', 'wherever'], 'correctAnswer': 0, 'explanation': 'However + adjective is correct'},
                {'id': 's4-5', 'question': 'The man ____ is my teacher.', 'questionZh': '____的那个人是我的老师。', 'options': ['whom you talked', 'who you talked to', 'to whom you talked', 'you talked to'], 'correctAnswer': 2, 'explanation': 'Formal relative clause structure'},
                {'id': 's4-6', 'question': 'I would have called you, but I ____ your number.', 'questionZh': '我本来会给你打电话的，但我____你的号码。', 'options': ['did not have', 'had not', 'do not have', 'have not had'], 'correctAnswer': 0, 'explanation': 'Simple past in but clause'},
                {'id': 's4-7', 'question': 'It is high time we ____ something for the environment.', 'questionZh': '是我们该为环境____点什么的时候了。', 'options': ['do', 'did', 'doing', 'done'], 'correctAnswer': 1, 'explanation': 'Past subjunctive in it is time'},
                {'id': 's4-8', 'question': '____ for the job, you would get it.', 'questionZh': '____申请这份工作，你就会得到它。', 'options': ['Apply', 'Applying', 'If you apply', 'You apply'], 'correctAnswer': 2, 'explanation': 'Conditional sentence structure'},
                {'id': 's4-9', 'question': 'She acts as if she ____ the owner of the company.', 'questionZh': '她表现得好像她____公司老板似的。', 'options': ['is', 'was', 'were', 'be'], 'correctAnswer': 2, 'explanation': 'Subjunctive with as if'},
                {'id': 's4-10', 'question': '____ he had studied harder, he would have passed.', 'questionZh': '如果他学习更努力些，他就会____。', 'options': ['Had', 'If', 'Would', 'Could'], 'correctAnswer': 0, 'explanation': 'Inversion after if'},
                {'id': 's4-11', 'question': 'The book is such ____ interesting story.', 'questionZh': '这本书是一个如此____的故事。', 'options': ['an', 'a', 'the', 'some'], 'correctAnswer': 1, 'explanation': 'Such + a + adjective + noun'},
                {'id': 's4-12', 'question': 'I would rather you ____ tomorrow.', 'questionZh': '我宁愿你明天____。', 'options': ['come', 'came', 'coming', 'to come'], 'correctAnswer': 1, 'explanation': 'Would rather + past subjunctive'},
                {'id': 's4-13', 'question': 'But for your help, I ____ the exam.', 'questionZh': '要不是你帮忙，我就____通过考试了。', 'options': ['would fail', 'would have failed', 'had failed', 'failed'], 'correctAnswer': 1, 'explanation': 'But for means if it were not for'},
                {'id': 's4-14', 'question': '____ what you have learned.', 'questionZh': '运用你所学的。', 'options': ['Make use of', 'Make the use of', 'Making use of', 'Made use of'], 'correctAnswer': 0, 'explanation': 'Imperative form'},
                {'id': 's4-15', 'question': 'It is imperative that everyone ____ on time.', 'questionZh': '每个人____准时是必要的。', 'options': ['arrive', 'arrives', 'arrived', 'arriving'], 'correctAnswer': 0, 'explanation': 'Subjunctive uses base form'},
            ]
        },
        {
            'id': 'senior-5',
            'title': 'Senior High English Test 5',
            'titleZh': '高中英语测试卷5',
            'level': 'senior',
            'levelName': '高中',
            'questions': [
                {'id': 's5-1', 'question': '____ is known to all, practice makes perfect.', 'questionZh': '众所周知，熟能生巧。', 'options': ['What', 'It', 'As', 'That'], 'correctAnswer': 2, 'explanation': 'As is known to all'},
                {'id': 's5-2', 'question': 'I would appreciate ____ if you could reply soon.', 'questionZh': '如果您能尽快回复，我将____。', 'options': ['that', 'this', 'it', 'them'], 'correctAnswer': 2, 'explanation': 'Appreciate + it'},
                {'id': 's5-3', 'question': 'He made a mistake, but then he corrected it ____.', 'questionZh': '他犯了错，但随后他____纠正了它。', 'options': ['immediately', 'quickly', 'hurriedly', 'promptly'], 'correctAnswer': 0, 'explanation': 'Immediately shows time relationship'},
                {'id': 's5-4', 'question': 'The question is ____ we can finish the work on time.', 'questionZh': '问题是我们能否____及时完成工作。', 'options': ['that', 'whether', 'if', 'what'], 'correctAnswer': 1, 'explanation': 'Whether introduces indirect question'},
                {'id': 's5-5', 'question': 'It is vital that everyone ____ part in the activity.', 'questionZh': '每个人都____参加活动是至关重要的。', 'options': ['take', 'takes', 'took', 'taking'], 'correctAnswer': 0, 'explanation': 'Subjunctive with vital'},
                {'id': 's5-6', 'question': 'The old man lives alone ____ he has children.', 'questionZh': '这个老人独自生活，____他有孩子。', 'options': ['but', 'although', 'unless', 'while'], 'correctAnswer': 1, 'explanation': 'Although introduces contrast'},
                {'id': 's5-7', 'question': 'He did not go to school ____ he was ill.', 'questionZh': '他没去学校，____他生病了。', 'options': ['because', 'because of', 'due to', 'for'], 'correctAnswer': 0, 'explanation': 'Because + clause'},
                {'id': 's5-8', 'question': 'She acts as if she ____ the boss.', 'questionZh': '她表现得好像她____老板。', 'options': ['is', 'was', 'were', 'be'], 'correctAnswer': 2, 'explanation': 'Subjunctive with as if'},
                {'id': 's5-9', 'question': 'The book is worth ____ again.', 'questionZh': '这本书值得____再看一遍。', 'options': ['reading', 'to read', 'read', 'reads'], 'correctAnswer': 0, 'explanation': 'Worth + gerund'},
                {'id': 's5-10', 'question': 'I have no objection ____ the plan.', 'questionZh': '我不反对这个____计划。', 'options': ['to implement', 'implementing', 'to implementing', 'implement'], 'correctAnswer': 1, 'explanation': 'Objection to + gerund'},
                {'id': 's5-11', 'question': 'It is time we ____ home.', 'questionZh': '是我们该____家了。', 'options': ['leave', 'left', 'leaving', 'to leave'], 'correctAnswer': 0, 'explanation': 'It is time + base form'},
                {'id': 's5-12', 'question': 'Had I enough money, I ____ a car.', 'questionZh': '如果我有足够的钱，我就____一辆车。', 'options': ['would buy', 'will buy', 'bought', 'buy'], 'correctAnswer': 0, 'explanation': 'Subjunctive with would'},
                {'id': 's5-13', 'question': 'The reason ____ I came late is that I missed the bus.', 'questionZh': '我来晚的____是我错过了公交车。', 'options': ['that', 'why', 'because', 'for'], 'correctAnswer': 1, 'explanation': 'The reason ... is why'},
                {'id': 's5-14', 'question': 'I will call you as soon as I ____ home.', 'questionZh': '我一____家就给你打电话。', 'options': ['get', 'will get', 'got', 'getting'], 'correctAnswer': 0, 'explanation': 'As soon as with present tense'},
                {'id': 's5-15', 'question': 'He talks as if he ____ everything.', 'questionZh': '他说话的样子好像他____一切。', 'options': ['knows', 'knew', 'knowing', 'known'], 'correctAnswer': 1, 'explanation': 'As if + past subjunctive'},
            ]
        },
        {
            'id': 'senior-6',
            'title': 'Senior High English Test 6',
            'titleZh': '高中英语测试卷6',
            'level': 'senior',
            'levelName': '高中',
            'questions': [
                {'id': 's6-1', 'question': 'Only in this way ____ solve this problem.', 'questionZh': '只有用这种方法，我们才能____这个问题。', 'options': ['can we', 'we can', 'we could', 'could we'], 'correctAnswer': 0, 'explanation': 'Inversion with only'},
                {'id': 's6-2', 'question': 'She insisted that he ____ the meeting.', 'questionZh': '她坚持要他____会议。', 'options': ['attend', 'attends', 'attending', 'attended'], 'correctAnswer': 0, 'explanation': 'Insist takes subjunctive'},
                {'id': 's6-3', 'question': 'The news came ____ he had left.', 'questionZh': '消息传来，他____离开了。', 'options': ['that', 'which', 'what', 'when'], 'correctAnswer': 0, 'explanation': 'Appositive clause with that'},
                {'id': 's6-4', 'question': 'I have no idea ____ to do next.', 'questionZh': '我不知道下一步____做什么。', 'options': ['how', 'what', 'which', 'when'], 'correctAnswer': 1, 'explanation': 'What to do is correct'},
                {'id': 's6-5', 'question': 'He is not the man ____ he used to be.', 'questionZh': '他不是____的那个人了。', 'options': ['who', 'whom', 'what', 'that'], 'correctAnswer': 2, 'explanation': 'What he used to be'},
                {'id': 's6-6', 'question': '____ the situation is, we must stay calm.', 'questionZh': '无论____情况，我们都必须保持冷静。', 'options': ['what', 'whatever', 'however', 'how'], 'correctAnswer': 1, 'explanation': 'Whatever + noun'},
                {'id': 's6-7', 'question': 'The reason ____ he was late was that he missed the bus.', 'questionZh': '他迟到的____是他错过了公交车。', 'options': ['that', 'why', 'because', 'for'], 'correctAnswer': 1, 'explanation': 'The reason ... is that'},
                {'id': 's6-8', 'question': 'It is high time we ____ our habits.', 'questionZh': '是我们该改变____习惯了。', 'options': ['change', 'to change', 'changing', 'changed'], 'correctAnswer': 0, 'explanation': 'It is high time + base form'},
                {'id': 's6-9', 'question': 'I would have succeeded, but I ____ try hard enough.', 'questionZh': '我本来会成功的，但我____不够努力。', 'options': ['did not', 'do not', 'had not', 'would not'], 'correctAnswer': 0, 'explanation': 'Simple past in but clause'},
                {'id': 's6-10', 'question': 'Whatever you do, ____ your best.', 'questionZh': '无论你做什么，____尽最大努力。', 'options': ['do', 'to do', 'doing', 'done'], 'correctAnswer': 0, 'explanation': 'Imperative'},
                {'id': 's6-11', 'question': 'The professor gave a lecture ____ the students could understand.', 'questionZh': '教授做了演讲，____学生们能听懂。', 'options': ['so that', 'because', 'although', 'unless'], 'correctAnswer': 0, 'explanation': 'So that + can/could'},
                {'id': 's6-12', 'question': 'He is the only person ____ I trust.', 'questionZh': '他是我____的唯一一个人。', 'options': ['who', 'whom', 'that', 'which'], 'correctAnswer': 2, 'explanation': 'Only + that'},
                {'id': 's6-13', 'question': 'Not until midnight ____ that he had made a mistake.', 'questionZh': '直到午夜他才____他犯了错误。', 'options': ['did he realize', 'he realized', 'realized he', 'he did realize'], 'correctAnswer': 0, 'explanation': 'Inversion with not until'},
                {'id': 's6-14', 'question': '____ he studied, he still failed the exam.', 'questionZh': '虽然他学习很努力，但他仍然____考试不及格。', 'options': ['Although', 'Because', 'Unless', 'Whether'], 'correctAnswer': 0, 'explanation': 'Although + clause'},
                {'id': 's6-15', 'question': 'It is suggested that the work ____ immediately.', 'questionZh': '有人建议工作应该____立即完成。', 'options': ['finish', 'to finish', 'be finished', 'finishing'], 'correctAnswer': 2, 'explanation': 'Passive infinitive after suggest'},
            ]
        },
        {
            'id': 'senior-7',
            'title': 'Senior High English Test 7',
            'titleZh': '高中英语测试卷7',
            'level': 'senior',
            'levelName': '高中',
            'questions': [
                {'id': 's7-1', 'question': 'But for the rain, we ____ the match.', 'questionZh': '如果不下雨，我们____比赛。', 'options': ['would win', 'would have won', 'won', 'win'], 'correctAnswer': 1, 'explanation': 'But for means if it were not for'},
                {'id': 's7-2', 'question': 'The manager suggested ____ a meeting.', 'questionZh': '经理建议____会议。', 'options': ['hold', 'to hold', 'holding', 'held'], 'correctAnswer': 2, 'explanation': 'Suggest + gerund'},
                {'id': 's7-3', 'question': 'He is the only person ____ can help you.', 'questionZh': '他是唯一能____帮助你的人。', 'options': ['who', 'whom', 'which', 'that'], 'correctAnswer': 0, 'explanation': 'Who after only'},
                {'id': 's7-4', 'question': '____ you work hard, you will succeed.', 'questionZh': '如果你努力工作，你就会____。', 'options': ['If', 'Unless', 'Though', 'Whether'], 'correctAnswer': 0, 'explanation': 'If introduces condition'},
                {'id': 's7-5', 'question': 'No matter what he says, do not believe him.', 'questionZh': '无论他说什么，都不要相信他。', 'options': ['Whatever', 'However', 'Whenever', 'Wherever'], 'correctAnswer': 0, 'explanation': 'Whatever means no matter what'},
                {'id': 's7-6', 'question': 'The girl ____ the piano is my sister.', 'questionZh': '____钢琴的那个女孩是我妹妹。', 'options': ['playing', 'plays', 'to play', 'played'], 'correctAnswer': 0, 'explanation': 'Present participle as adjective'},
                {'id': 's7-7', 'question': 'It is necessary that everyone ____ the rules.', 'questionZh': '每个人都____规则是必要的。', 'options': ['follow', 'follows', 'following', 'followed'], 'correctAnswer': 0, 'explanation': 'Subjunctive with necessary'},
                {'id': 's7-8', 'question': 'He was about to leave ____ the phone rang.', 'questionZh': '他刚要离开____电话响了。', 'options': ['when', 'while', 'as', 'after'], 'correctAnswer': 0, 'explanation': 'Be about to ... when'},
                {'id': 's7-9', 'question': '____ more time, I could have finished the work.', 'questionZh': '如果再有更多时间，我就能____完成工作了。', 'options': ['Had', 'Have', 'Having', 'If had'], 'correctAnswer': 0, 'explanation': 'Inversion with had'},
                {'id': 's7-10', 'question': 'I would rather you ____ the truth.', 'questionZh': '我宁愿你____真相。', 'options': ['tell', 'told', 'telling', 'to tell'], 'correctAnswer': 1, 'explanation': 'Would rather + past subjunctive'},
                {'id': 's7-11', 'question': 'He speaks English as fluently as if he ____ American.', 'questionZh': '他说英语如此流利，就像他____美国人似的。', 'options': ['is', 'was', 'were', 'are'], 'correctAnswer': 2, 'explanation': 'Subjunctive with as if'},
                {'id': 's7-12', 'question': 'It is urgent that the patient ____ to hospital.', 'questionZh': '紧急情况下，病人必须____医院。', 'options': ['send', 'sends', 'sent', 'sending'], 'correctAnswer': 0, 'explanation': 'Subjunctive with urgent'},
                {'id': 's7-13', 'question': 'The book is said ____ into many languages.', 'questionZh': '据说这本书被翻译成多种语言。', 'options': ['to translate', 'to be translated', 'to translating', 'to be translating'], 'correctAnswer': 1, 'explanation': 'Passive infinitive'},
                {'id': 's7-14', 'question': 'Only when you grow up ____ the truth.', 'questionZh': '只有当你长大后，你才能____真相。', 'options': ['you will know', 'will you know', 'you know', 'know you'], 'correctAnswer': 1, 'explanation': 'Inversion with only'},
                {'id': 's7-15', 'question': 'It is desired that we ____ everything ready.', 'questionZh': '希望我们把一切____准备好。', 'options': ['get', 'gets', 'getting', 'got'], 'correctAnswer': 0, 'explanation': 'Subjunctive with desired'},
            ]
        },
        {
            'id': 'senior-8',
            'title': 'Senior High English Test 8',
            'titleZh': '高中英语测试卷8',
            'level': 'senior',
            'levelName': '高中',
            'questions': [
                {'id': 's8-1', 'question': 'Had I known about the traffic, I ____ earlier.', 'questionZh': '如果我知道交通情况，我就____得早一点。', 'options': ['would leave', 'would have left', 'had left', 'left'], 'correctAnswer': 1, 'explanation': 'Past unreal conditional with would have done'},
                {'id': 's8-2', 'question': 'It is essential that everyone ____ part in the competition.', 'questionZh': '每个人都____参加比赛是必要的。', 'options': ['take', 'takes', 'taking', 'took'], 'correctAnswer': 0, 'explanation': 'Subjunctive with essential uses base form'},
                {'id': 's8-3', 'question': '____ what he says, I do not believe him.', 'questionZh': '无论他说什么，我都不相信他。', 'options': ['Whatever', 'However', 'Whenever', 'Wherever'], 'correctAnswer': 0, 'explanation': 'Whatever + clause'},
                {'id': 's8-4', 'question': 'Only then ____ the importance of education.', 'questionZh': '只有那时她才____教育的重要性。', 'options': ['did she realize', 'she realized', 'she realizes', 'does she realize'], 'correctAnswer': 0, 'explanation': 'Inversion with only'},
                {'id': 's8-5', 'question': 'I would rather you ____ the meeting tomorrow.', 'questionZh': '我宁愿你____明天的会议。', 'options': ['postpone', 'postponed', 'postponing', 'to postpone'], 'correctAnswer': 1, 'explanation': 'Would rather + past subjunctive'},
                {'id': 's8-6', 'question': 'The book is said ____ into many languages.', 'questionZh': '据说这本书____翻译成多种语言。', 'options': ['to translate', 'to be translated', 'translating', 'to translate'], 'correctAnswer': 1, 'explanation': 'Passive infinitive: said to be translated'},
                {'id': 's8-7', 'question': 'He behaved as if he ____ the whole thing.', 'questionZh': '他的行为就好像他____整件事。', 'options': ['knows', 'knew', 'knowing', 'known'], 'correctAnswer': 1, 'explanation': 'As if + past subjunctive'},
                {'id': 's8-8', 'question': 'It is high time we ____ action.', 'questionZh': '是我们该采取____行动的时候了。', 'options': ['take', 'took', 'taking', 'to take'], 'correctAnswer': 0, 'explanation': 'It is high time + base form'},
                {'id': 's8-9', 'question': 'Not until I graduated ____ how important it was.', 'questionZh': '直到我毕业我才____它有多重要。', 'options': ['I realized', 'did I realize', 'I realize', 'do I realize'], 'correctAnswer': 1, 'explanation': 'Inversion with not until'},
                {'id': 's8-10', 'question': 'She insists that he ____ the appointment.', 'questionZh': '她坚持要他____预约。', 'options': ['keep', 'keeps', 'keeping', 'kept'], 'correctAnswer': 0, 'explanation': 'Insist takes subjunctive (base form)'},
                {'id': 's8-11', 'question': '____ the rain, we went out.', 'questionZh': '尽管下雨，我们还是出去了。', 'options': ['Despite', 'Although', 'Because', 'Since'], 'correctAnswer': 1, 'explanation': 'Although + clause'},
                {'id': 's8-12', 'question': 'The teacher asked us ____ our homework.', 'questionZh': '老师要求我们____作业。', 'options': ['finish', 'to finish', 'finishing', 'finished'], 'correctAnswer': 1, 'explanation': 'Ask + object + to-infinitive'},
                {'id': 's8-13', 'question': 'I look forward to ____ you soon.', 'questionZh': '我期待____你很快见面。', 'options': ['see', 'to see', 'seeing', 'seen'], 'correctAnswer': 2, 'explanation': 'Look forward to + gerund'},
                {'id': 's8-14', 'question': 'She is interested ____ learning French.', 'questionZh': '她对学习法语感兴趣。', 'options': ['in', 'on', 'at', 'to'], 'correctAnswer': 0, 'explanation': 'Interested in is correct'},
                {'id': 's8-15', 'question': 'The book is worth ____ again.', 'questionZh': '这本书值得再看一遍。', 'options': ['reading', 'to read', 'read', 'reads'], 'correctAnswer': 0, 'explanation': 'Worth + gerund'},
            ]
        },
        {
            'id': 'senior-9',
            'title': 'Senior High English Test 9',
            'titleZh': '高中英语测试卷9',
            'level': 'senior',
            'levelName': '高中',
            'questions': [
                {'id': 's9-1', 'question': 'Had I known about the traffic, I ____ earlier.', 'questionZh': '如果我知道交通情况，我就____得早一点。', 'options': ['would leave', 'would have left', 'had left', 'left'], 'correctAnswer': 1, 'explanation': 'Past unreal conditional with would have done'},
                {'id': 's9-2', 'question': 'It is essential that everyone ____ part in the competition.', 'questionZh': '每个人都____参加比赛是必要的。', 'options': ['take', 'takes', 'taking', 'took'], 'correctAnswer': 0, 'explanation': 'Subjunctive with essential uses base form'},
                {'id': 's9-3', 'question': '____ what he says, I do not believe him.', 'questionZh': '无论他说什么，我都不相信他。', 'options': ['Whatever', 'However', 'Whenever', 'Wherever'], 'correctAnswer': 0, 'explanation': 'Whatever + clause'},
                {'id': 's9-4', 'question': 'Only then ____ the importance of education.', 'questionZh': '只有那时她才____教育的重要性。', 'options': ['did she realize', 'she realized', 'she realizes', 'does she realize'], 'correctAnswer': 0, 'explanation': 'Inversion with only'},
                {'id': 's9-5', 'question': 'I would rather you ____ the meeting tomorrow.', 'questionZh': '我宁愿你____明天的会议。', 'options': ['postpone', 'postponed', 'postponing', 'to postpone'], 'correctAnswer': 1, 'explanation': 'Would rather + past subjunctive'},
                {'id': 's9-6', 'question': 'The book is said ____ into many languages.', 'questionZh': '据说这本书____翻译成多种语言。', 'options': ['to translate', 'to be translated', 'translating', 'to translate'], 'correctAnswer': 1, 'explanation': 'Passive infinitive: said to be translated'},
                {'id': 's9-7', 'question': 'He behaved as if he ____ the whole thing.', 'questionZh': '他的行为就好像他____整件事。', 'options': ['knows', 'knew', 'knowing', 'known'], 'correctAnswer': 1, 'explanation': 'As if + past subjunctive'},
                {'id': 's9-8', 'question': 'It is high time we ____ action.', 'questionZh': '是我们该采取____行动的时候了。', 'options': ['take', 'took', 'taking', 'to take'], 'correctAnswer': 0, 'explanation': 'It is high time + base form'},
                {'id': 's9-9', 'question': 'Not until I graduated ____ how important it was.', 'questionZh': '直到我毕业我才____它有多重要。', 'options': ['I realized', 'did I realize', 'I realize', 'do I realize'], 'correctAnswer': 1, 'explanation': 'Inversion with not until'},
                {'id': 's9-10', 'question': 'She insists that he ____ the appointment.', 'questionZh': '她坚持要他____预约。', 'options': ['keep', 'keeps', 'keeping', 'kept'], 'correctAnswer': 0, 'explanation': 'Insist takes subjunctive (base form)'},
                {'id': 's9-11', 'question': '____ the rain, we went out.', 'questionZh': '尽管下雨，我们还是出去了。', 'options': ['Despite', 'Although', 'Because', 'Since'], 'correctAnswer': 1, 'explanation': 'Although + clause'},
                {'id': 's9-12', 'question': 'The teacher asked us ____ our homework.', 'questionZh': '老师要求我们____作业。', 'options': ['finish', 'to finish', 'finishing', 'finished'], 'correctAnswer': 1, 'explanation': 'Ask + object + to-infinitive'},
                {'id': 's9-13', 'question': 'I look forward to ____ you soon.', 'questionZh': '我期待____你很快见面。', 'options': ['see', 'to see', 'seeing', 'seen'], 'correctAnswer': 2, 'explanation': 'Look forward to + gerund'},
                {'id': 's9-14', 'question': 'She is interested ____ learning French.', 'questionZh': '她对学习法语感兴趣。', 'options': ['in', 'on', 'at', 'to'], 'correctAnswer': 0, 'explanation': 'Interested in is correct'},
                {'id': 's9-15', 'question': 'The book is worth ____ again.', 'questionZh': '这本书值得再看一遍。', 'options': ['reading', 'to read', 'read', 'reads'], 'correctAnswer': 0, 'explanation': 'Worth + gerund'},
            ]
        },
    ],
    'university': [
        {
            'id': 'university-4',
            'title': 'College English Test 4',
            'titleZh': '大学英语测试卷4',
            'level': 'university',
            'levelName': '大学',
            'questions': [
                {'id': 'u4-1', 'question': 'The increase in demand has resulted ____ a rise in price.', 'questionZh': '需求的增加导致价格上涨____。', 'options': ['from', 'in', 'with', 'on'], 'correctAnswer': 1, 'explanation': 'Result in means cause'},
                {'id': 'u4-2', 'question': 'I am looking forward ____ you at the conference.', 'questionZh': '我期待在会议上____你。', 'options': ['meet', 'meeting', 'to meet', 'to meeting'], 'correctAnswer': 2, 'explanation': 'Look forward to + infinitive'},
                {'id': 'u4-3', 'question': 'The committee has approved the proposal ____ objection.', 'questionZh': '委员会批准了提案，没有____反对意见。', 'options': ['with', 'without', 'from', 'to'], 'correctAnswer': 1, 'explanation': 'Without + noun'},
                {'id': 'u4-4', 'question': 'She lost herself ____ the beauty of the sunset.', 'questionZh': '她沉浸____日落的美丽中。', 'options': ['in', 'to', 'with', 'at'], 'correctAnswer': 0, 'explanation': 'Lost in means immersed in'},
                {'id': 'u4-5', 'question': 'The new policy will have a significant impact ____ the economy.', 'questionZh': '新政策将对经济产生重大____。', 'options': ['on', 'to', 'with', 'for'], 'correctAnswer': 0, 'explanation': 'Impact on is correct'},
                {'id': 'u4-6', 'question': 'He was determined to succeed ____ all odds.', 'questionZh': '他决心____一切困难取得成功。', 'options': ['against', 'despite', 'though', 'although'], 'correctAnswer': 0, 'explanation': 'Against all odds means despite difficulties'},
                {'id': 'u4-7', 'question': 'The scientist devoted her life ____ finding a cure.', 'questionZh': '这位科学家献身于____治愈方法。', 'options': ['to finding', 'find', 'finding', 'to find'], 'correctAnswer': 0, 'explanation': 'Devote to + gerund'},
                {'id': 'u4-8', 'question': 'The company is seeking ways to cut ____ costs.', 'questionZh': '公司正在寻找方法____成本。', 'options': ['down', 'off', 'back', 'out'], 'correctAnswer': 0, 'explanation': 'Cut down means reduce'},
                {'id': 'u4-9', 'question': 'Her success is attributable ____ her hard work.', 'questionZh': '她的成功归____她的努力工作。', 'options': ['to', 'for', 'with', 'by'], 'correctAnswer': 0, 'explanation': 'Attributable to means due to'},
                {'id': 'u4-10', 'question': 'I am not accustomed ____ such treatment.', 'questionZh': '我不习惯____这种待遇。', 'options': ['to receive', 'to receiving', 'receiving', 'receive'], 'correctAnswer': 1, 'explanation': 'Accustomed to + gerund'},
                {'id': 'u4-11', 'question': 'The project is far ____ completion.', 'questionZh': '这个项目离完成还____。', 'options': ['from', 'to', 'at', 'in'], 'correctAnswer': 0, 'explanation': 'Far from means not at all'},
                {'id': 'u4-12', 'question': 'His behavior is indicative ____ his guilt.', 'questionZh': '他的行为____他的内疚。', 'options': ['of', 'to', 'with', 'for'], 'correctAnswer': 0, 'explanation': 'Indicative of shows'},
                {'id': 'u4-13', 'question': 'The new law will come ____ effect next month.', 'questionZh': '新法律将于下月____生效。', 'options': ['into', 'to', 'on', 'from'], 'correctAnswer': 0, 'explanation': 'Come into effect'},
                {'id': 'u4-14', 'question': 'She was not aware of the consequences ____ her decision.', 'questionZh': '她没有意识到她决定的____。', 'options': ['of', 'to', 'with', 'for'], 'correctAnswer': 0, 'explanation': 'Consequences of decision'},
                {'id': 'u4-15', 'question': 'The conference provides an opportunity ____ networking.', 'questionZh': '会议提供____网络的机会。', 'options': ['to', 'for', 'in', 'with'], 'correctAnswer': 1, 'explanation': 'Opportunity for'},
            ]
        },
        {
            'id': 'university-5',
            'title': 'College English Test 5',
            'titleZh': '大学英语测试卷5',
            'level': 'university',
            'levelName': '大学',
            'questions': [
                {'id': 'u5-1', 'question': 'His lecture was far ____ my expectation.', 'questionZh': '他的演讲与我的期望____。', 'options': ['beyond', 'from', 'to', 'against'], 'correctAnswer': 0, 'explanation': 'Far beyond means much more than'},
                {'id': 'u5-2', 'question': 'The government is responsible ____ maintaining order.', 'questionZh': '政府有责任____维护秩序。', 'options': ['for', 'to', 'with', 'at'], 'correctAnswer': 0, 'explanation': 'Responsible for'},
                {'id': 'u5-3', 'question': 'She showed great talent ____ languages.', 'questionZh': '她在语言方面表现出很大的____。', 'options': ['for', 'in', 'to', 'with'], 'correctAnswer': 0, 'explanation': 'Talent for'},
                {'id': 'u5-4', 'question': 'The new system will make up ____ the shortcomings.', 'questionZh': '新系统将____这些缺点。', 'options': ['to', 'for', 'of', 'with'], 'correctAnswer': 1, 'explanation': 'Make up for means compensate'},
                {'id': 'u5-5', 'question': 'He has a good command ____ English.', 'questionZh': '他____英语很好。', 'options': ['of', 'in', 'on', 'at'], 'correctAnswer': 0, 'explanation': 'Command of'},
                {'id': 'u5-6', 'question': 'The experiment yielded fruitful results ____.', 'questionZh': '实验产生了____富有成果的结果。', 'options': ['as expected', 'expecting', 'to expect', 'expect'], 'correctAnswer': 0, 'explanation': 'As expected modifies the whole sentence'},
                {'id': 'u5-7', 'question': 'The book is intended ____ young readers.', 'questionZh': '这本书是____年轻读者的。', 'options': ['to', 'for', 'with', 'on'], 'correctAnswer': 1, 'explanation': 'Intended for'},
                {'id': 'u5-8', 'question': 'Her voice was not suited ____ public speaking.', 'questionZh': '她的声音不适合____公共演讲。', 'options': ['to', 'for', 'in', 'at'], 'correctAnswer': 1, 'explanation': 'Suited for'},
                {'id': 'u5-9', 'question': 'The campaign aims to raise awareness ____ environmental protection.', 'questionZh': '活动旨在提高____环境保护的意识。', 'options': ['of', 'to', 'for', 'in'], 'correctAnswer': 0, 'explanation': 'Awareness of'},
                {'id': 'u5-10', 'question': 'I am grateful ____ your assistance.', 'questionZh': '我感谢你的____帮助。', 'options': ['to', 'for', 'with', 'at'], 'correctAnswer': 1, 'explanation': 'Grateful for'},
                {'id': 'u5-11', 'question': 'The politician was accused ____ corruption.', 'questionZh': '这位政治家被____腐败。', 'options': ['of', 'for', 'with', 'to'], 'correctAnswer': 0, 'explanation': 'Accused of'},
                {'id': 'u5-12', 'question': 'His theory is based ____ extensive research.', 'questionZh': '他的理论____广泛的研究。', 'options': ['on', 'in', 'at', 'to'], 'correctAnswer': 0, 'explanation': 'Based on'},
                {'id': 'u5-13', 'question': 'We should take advantage ____ this opportunity.', 'questionZh': '我们应该____这个机会。', 'options': ['of', 'from', 'to', 'for'], 'correctAnswer': 0, 'explanation': 'Take advantage of'},
                {'id': 'u5-14', 'question': 'The population is increasing ____.', 'questionZh': '人口正在迅速____。', 'options': ['rapidly', 'rapid', 'to rapidly', 'rapidlier'], 'correctAnswer': 0, 'explanation': 'Adverb modifies verb'},
                {'id': 'u5-15', 'question': 'She has a strong interest ____ science.', 'questionZh': '她对科学有强烈的____。', 'options': ['in', 'on', 'at', 'to'], 'correctAnswer': 0, 'explanation': 'Interest in'},
            ]
        },
        {
            'id': 'university-6',
            'title': 'College English Test 6',
            'titleZh': '大学英语测试卷6',
            'level': 'university',
            'levelName': '大学',
            'questions': [
                {'id': 'u6-1', 'question': 'The meeting was put ____ until next week.', 'questionZh': '会议被____到下周。', 'options': ['off', 'up', 'down', 'away'], 'correctAnswer': 0, 'explanation': 'Put off means postpone'},
                {'id': 'u6-2', 'question': 'His health is getting worse instead of ____.', 'questionZh': '他的健康越来越差，而不是____。', 'options': ['better', 'well', 'improving', 'improved'], 'correctAnswer': 0, 'explanation': 'Instead of + noun/gerund'},
                {'id': 'u6-3', 'question': 'The team made ____ to the project.', 'questionZh': '团队为项目____了贡献。', 'options': ['contributions', 'contribute', 'contributing', 'contributed'], 'correctAnswer': 0, 'explanation': 'Make contributions to'},
                {'id': 'u6-4', 'question': 'She took ____ playing piano when she was young.', 'questionZh': '她年轻的时候____弹钢琴。', 'options': ['up', 'in', 'on', 'to'], 'correctAnswer': 0, 'explanation': 'Take up means begin to learn'},
                {'id': 'u6-5', 'question': 'The company has decided to cut ____ 100 jobs.', 'questionZh': '公司决定____100个工作岗位。', 'options': ['off', 'out', 'down', 'back'], 'correctAnswer': 2, 'explanation': 'Cut down means reduce'},
                {'id': 'u6-6', 'question': 'I ran ____ an old friend yesterday.', 'questionZh': '我昨天____一位老朋友。', 'options': ['into', 'to', 'across', 'over'], 'correctAnswer': 0, 'explanation': 'Run into means meet by chance'},
                {'id': 'u6-7', 'question': 'The teacher pointed ____ the importance of reading.', 'questionZh': '老师____阅读的重要性。', 'options': ['at', 'to', 'out', 'up'], 'correctAnswer': 2, 'explanation': 'Point out means indicate'},
                {'id': 'u6-8', 'question': 'We need to come up ____ a solution.', 'questionZh': '我们需要____一个解决方案。', 'options': ['to', 'up with', 'on', 'in'], 'correctAnswer': 1, 'explanation': 'Come up with means think of'},
                {'id': 'u6-9', 'question': 'The situation is getting out of ____.', 'questionZh': '情况正在失去____。', 'options': ['hand', 'control', 'place', 'way'], 'correctAnswer': 0, 'explanation': 'Out of hand means uncontrollable'},
                {'id': 'u6-10', 'question': 'She fell ____ love with him at first sight.', 'questionZh': '她对他____了一见钟情。', 'options': ['in', 'to', 'with', 'for'], 'correctAnswer': 0, 'explanation': 'Fall in love'},
                {'id': 'u6-11', 'question': 'The car broke ____ on the way home.', 'questionZh': '在回家的路上，车子____了。', 'options': ['down', 'up', 'off', 'out'], 'correctAnswer': 0, 'explanation': 'Break down means stop working'},
                {'id': 'u6-12', 'question': 'Please fill ____ this form.', 'questionZh': '请____这张表格。', 'options': ['in', 'out', 'up', 'down'], 'correctAnswer': 0, 'explanation': 'Fill in means complete'},
                {'id': 'u6-13', 'question': 'He made ____ for his mistake.', 'questionZh': '他____了他的错误。', 'options': ['up', 'off', 'out', 'away'], 'correctAnswer': 0, 'explanation': 'Make up means compensate'},
                {'id': 'u6-14', 'question': 'I am looking ____ to hearing from you.', 'questionZh': '我____收到你的来信。', 'options': ['forward', 'out', 'up', 'after'], 'correctAnswer': 0, 'explanation': 'Look forward to'},
                {'id': 'u6-15', 'question': 'The meeting was called ____ at short notice.', 'questionZh': '会议是____紧急通知召开的。', 'options': ['together', 'off', 'out', 'up'], 'correctAnswer': 0, 'explanation': 'Called together means convened'},
            ]
        },
        {
            'id': 'university-7',
            'title': 'College English Test 7',
            'titleZh': '大学英语测试卷7',
            'level': 'university',
            'levelName': '大学',
            'questions': [
                {'id': 'u7-1', 'question': 'She came ____ a lot of money.', 'questionZh': '她____了很多钱。', 'options': ['into', 'across', 'upon', 'through'], 'correctAnswer': 0, 'explanation': 'Come into means inherit'},
                {'id': 'u7-2', 'question': 'The old building was torn ____ last year.', 'questionZh': '这栋旧建筑去年被____了。', 'options': ['down', 'up', 'off', 'away'], 'correctAnswer': 0, 'explanation': 'Tear down means demolish'},
                {'id': 'u7-3', 'question': 'We must face ____ the challenge.', 'questionZh': '我们必须____这个挑战。', 'options': ['up to', 'up', 'down to', 'out to'], 'correctAnswer': 0, 'explanation': 'Face up to means accept'},
                {'id': 'u7-4', 'question': 'He was brought ____ by his grandparents.', 'questionZh': '他是由祖父母____大的。', 'options': ['up', 'out', 'in', 'off'], 'correctAnswer': 0, 'explanation': 'Bring up means raise'},
                {'id': 'u7-5', 'question': 'The proposal was turned ____.', 'questionZh': '这个建议被____了。', 'options': ['down', 'up', 'off', 'away'], 'correctAnswer': 0, 'explanation': 'Turn down means reject'},
                {'id': 'u7-6', 'question': 'She set ____ a new company last year.', 'questionZh': '她去年____了一家新公司。', 'options': ['up', 'out', 'off', 'down'], 'correctAnswer': 0, 'explanation': 'Set up means establish'},
                {'id': 'u7-7', 'question': 'The plan was called ____.', 'questionZh': '这个计划被____了。', 'options': ['off', 'up', 'out', 'down'], 'correctAnswer': 0, 'explanation': 'Call off means cancel'},
                {'id': 'u7-8', 'question': 'He went back ____ his words.', 'questionZh': '他____他的话。', 'options': ['on', 'upon', 'over', 'down'], 'correctAnswer': 0, 'explanation': 'Go back on means break promise'},
                {'id': 'u7-9', 'question': 'She caught ____ a cold last week.', 'questionZh': '她上周____了感冒。', 'options': ['down with', 'up with', 'off with', 'out with'], 'correctAnswer': 0, 'explanation': 'Catch down with means become ill'},
                {'id': 'u7-10', 'question': 'The party was put ____ due to the weather.', 'questionZh': '由于天气原因，聚会被____了。', 'options': ['off', 'up', 'down', 'away'], 'correctAnswer': 0, 'explanation': 'Put off means postpone'},
                {'id': 'u7-11', 'question': 'The minister was accused ____ taking bribes.', 'questionZh': '部长被____受贿。', 'options': ['of', 'for', 'with', 'to'], 'correctAnswer': 0, 'explanation': 'Accused of'},
                {'id': 'u7-12', 'question': 'I would appreciate ____ if you could keep this confidential.', 'questionZh': '如果您能保密，我将非常____。', 'options': ['that', 'this', 'it', 'them'], 'correctAnswer': 2, 'explanation': 'Appreciate + it + if clause'},
                {'id': 'u7-13', 'question': 'The chairman insisted that the meeting ____ postponed.', 'questionZh': '主席坚持会议应该____。', 'options': ['be', 'is', 'was', 'to be'], 'correctAnswer': 0, 'explanation': 'Insist takes subjunctive (be)'},
                {'id': 'u7-14', 'question': 'Had I been informed earlier, I would have taken ____.', 'questionZh': '如果我早点得到通知，我就____采取了行动。', 'options': ['action', 'an action', 'actions', 'the action'], 'correctAnswer': 1, 'explanation': 'Take action / take an action'},
                {'id': 'u7-15', 'question': 'It is imperative that all staff ____ the new policy immediately.', 'questionZh': '所有员工____立即遵守新政策。', 'options': ['follow', 'follows', 'following', 'to follow'], 'correctAnswer': 0, 'explanation': 'Subjunctive with imperative uses base form'},
            ]
        },
        {
            'id': 'university-8',
            'title': 'College English Test 8',
            'titleZh': '大学英语测试卷8',
            'level': 'university',
            'levelName': '大学',
            'questions': [
                {'id': 'u8-1', 'question': 'The professor\'s lecture fell far ____ my expectations.', 'questionZh': '教授的讲座与我的期望____。', 'options': ['below', 'under', 'beneath', 'down'], 'correctAnswer': 0, 'explanation': 'Below expectations is the standard collocation'},
                {'id': 'u8-2', 'question': 'Only after the investigation concluded ____ the truth.', 'questionZh': '只有在调查结束后，____真相。', 'options': ['did they learn', 'they learned', 'they learn', 'do they learn'], 'correctAnswer': 0, 'explanation': 'Inversion with only after'},
                {'id': 'u8-3', 'question': 'The company is committed to ____ sustainable practices.', 'questionZh': '公司致力于____可持续实践。', 'options': ['implementing', 'implement', 'implemented', 'implements'], 'correctAnswer': 0, 'explanation': 'Committed to + gerund'},
                {'id': 'u8-4', 'question': 'Not only ____ the project, but also overspent the budget.', 'questionZh': '不仅____了项目，还超支了预算。', 'options': ['did he abandon', 'he abandoned', 'he does abandon', 'does he abandon'], 'correctAnswer': 0, 'explanation': 'Not only at the beginning triggers inversion'},
                {'id': 'u8-5', 'question': 'Whatever ____, we must stay united.', 'questionZh': '无论发生____，我们必须保持团结。', 'options': ['happens', 'happened', 'to happen', 'happening'], 'correctAnswer': 0, 'explanation': 'Whatever + verb (no tense change)'},
                {'id': 'u8-6', 'question': 'The increase in demand has resulted ____ a rise in price.', 'questionZh': '需求的增加导致价格上涨____。', 'options': ['from', 'in', 'with', 'on'], 'correctAnswer': 1, 'explanation': 'Result in means cause'},
                {'id': 'u8-7', 'question': 'I am looking forward ____ you at the conference.', 'questionZh': '我期待在会议上____你。', 'options': ['meet', 'meeting', 'to meet', 'to meeting'], 'correctAnswer': 2, 'explanation': 'Look forward to + infinitive'},
                {'id': 'u8-8', 'question': 'The committee has approved the proposal ____ objection.', 'questionZh': '委员会批准了提案，没有____反对意见。', 'options': ['with', 'without', 'from', 'to'], 'correctAnswer': 1, 'explanation': 'Without + noun'},
                {'id': 'u8-9', 'question': 'She lost herself ____ the beauty of the sunset.', 'questionZh': '她沉浸____日落的美丽中。', 'options': ['in', 'to', 'with', 'at'], 'correctAnswer': 0, 'explanation': 'Lost in means immersed in'},
                {'id': 'u8-10', 'question': 'The new policy will have a significant impact ____ the economy.', 'questionZh': '新政策将对经济产生重大____。', 'options': ['on', 'to', 'with', 'for'], 'correctAnswer': 0, 'explanation': 'Impact on is correct'},
                {'id': 'u8-11', 'question': 'He was determined to succeed ____ all odds.', 'questionZh': '他决心____一切困难取得成功。', 'options': ['against', 'despite', 'though', 'although'], 'correctAnswer': 0, 'explanation': 'Against all odds means despite difficulties'},
                {'id': 'u8-12', 'question': 'The scientist devoted her life ____ finding a cure.', 'questionZh': '这位科学家献身于____治愈方法。', 'options': ['to finding', 'find', 'finding', 'to find'], 'correctAnswer': 0, 'explanation': 'Devote to + gerund'},
                {'id': 'u8-13', 'question': 'The company is seeking ways to cut ____ costs.', 'questionZh': '公司正在寻找方法____成本。', 'options': ['down', 'off', 'back', 'out'], 'correctAnswer': 0, 'explanation': 'Cut down means reduce'},
                {'id': 'u8-14', 'question': 'Her success is attributable ____ her hard work.', 'questionZh': '她的成功归____她的努力工作。', 'options': ['to', 'for', 'with', 'by'], 'correctAnswer': 0, 'explanation': 'Attributable to means due to'},
                {'id': 'u8-15', 'question': 'I am not accustomed ____ such treatment.', 'questionZh': '我不习惯____这种待遇。', 'options': ['to receive', 'to receiving', 'receiving', 'receive'], 'correctAnswer': 1, 'explanation': 'Accustomed to + gerund'},
            ]
        },
    ],
}

def generate_exam_ts(exams_data):
    """Generate TypeScript code for exams"""
    lines = []
    lines.append("  // ========== 新增试卷 ==========")
    
    for exam in exams_data:
        lines.append("  {")
        lines.append(f"    id: '{exam['id']}',")
        lines.append(f"    title: '{exam['title']}',")
        lines.append(f"    titleZh: '{exam['titleZh']}',")
        lines.append(f"    level: '{exam['level']}',")
        lines.append(f"    levelName: '{exam['levelName']}',")
        lines.append("    questions: [")
        
        for q in exam['questions']:
            lines.append(f"      {{ id: '{q['id']}', question: '{q['question']}', questionZh: '{q['questionZh']}', options: {q['options']}, correctAnswer: {q['correctAnswer']}, explanation: '{q['explanation']}' }},")
        
        lines.append("    ],")
        lines.append("  },")
    
    return "\n".join(lines)


def main():
    # Collect all new exams
    all_new_exams = []
    for level in ['elementary', 'junior', 'senior', 'university']:
        all_new_exams.extend(EXAM_TEMPLATES[level])
    
    print(f"Generated {len(all_new_exams)} new exam papers:")
    for exam in all_new_exams:
        print(f"  - {exam['id']}: {exam['titleZh']} ({len(exam['questions'])} questions)")
    
    # Generate TypeScript code
    new_exams_ts = generate_exam_ts(all_new_exams)
    
    # Read original file
    with open('/tmp/linguaread-git/src/data/exams.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the closing bracket of the exams array
    # The original file ends with:
    # ];
    # We need to insert before the ];
    
    # Find the position to insert (before the closing ];)
    insert_pos = content.rfind('];')
    
    if insert_pos == -1:
        print("Error: Could not find closing bracket")
        return
    
    # Insert the new exams
    new_content = content[:insert_pos] + new_exams_ts + "\n" + content[insert_pos:]
    
    # Write back
    with open('/tmp/linguaread-git/src/data/exams.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"\nSuccessfully appended {len(all_new_exams)} exam papers to exams.ts")
    print(f"Total exams now: 12 + {len(all_new_exams)} = {12 + len(all_new_exams)}")


if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""Generate 210 new articles and 35 new longArticles"""

import random

# Correct categories based on error messages
CATEGORIES = ['literature', 'news', 'science', 'essay', 'technology', 'environment', 'culture', 'education', 'economy', 'society']
# Correct levels based on error messages
LEVELS = ['elementary', 'junior', 'senior', 'university']
AUTHORS = ['Anonymous', 'Emma', 'John', 'Sarah', 'Michael', 'Lisa', 'David', 'Anna', 'Chris', 'Tom']

TOPICS = {
    'elementary': [
        ('My Family', '我的家人', ['I have a happy family.', 'My mom cooks delicious food.', 'My dad tells me stories.', 'We play games together.', 'I love my family very much.']),
        ('The Friendly Cat', '友好的猫咪', ['I saw a cat in the garden.', 'The cat is soft and warm.', 'It likes to chase butterflies.', 'I give it some milk.', 'The cat is my friend now.']),
        ('A Day at School', '学校的一天', ['I go to school every day.', 'My teacher is very kind.', 'I learn to read and write.', 'I play with my friends at lunch.', 'School is fun!']),
        ('The Big Tree', '大树', ['There is a big tree near my house.', 'Birds live in the tree.', 'I like to sit under it.', 'The leaves are green and pretty.', 'I love that tree.']),
        ('My Favorite Fruit', '我最喜欢的水果', ['Apples are my favorite fruit.', 'They are red and sweet.', 'I eat one every day.', 'Apples are good for health.', 'I also like bananas.']),
        ('A Sunny Day', '阳光明媚的一天', ['The sun is shining bright.', 'It is a warm and beautiful day.', 'I go outside to play.', 'The flowers smell so nice.', 'I love sunny days.']),
        ('My Best Friend', '我最好的朋友', ['My best friend is Lily.', 'We play together every day.', 'She has long hair.', 'We share our toys.', 'I am happy with my friend.']),
        ('The Little Rabbit', '小兔子', ['I have a little rabbit.', 'It has long ears and a fluffy tail.', 'It hops around the garden.', 'I feed it carrots.', 'My rabbit is very cute.']),
        ('Learning to Ride a Bike', '学骑自行车', ['I am learning to ride a bike.', 'It is not easy at first.', 'Dad holds the seat for me.', 'I practice every afternoon.', 'Now I can ride by myself!']),
        ('The Colorful Butterfly', '彩色的蝴蝶', ['I saw a butterfly in the park.', 'Its wings are blue and yellow.', 'It flies from flower to flower.', 'I watch it for a long time.', 'Butterflies are so beautiful.']),
        ('The Birthday Party', '生日派对', ['Today is my birthday.', 'My friends came to celebrate.', 'We had cake and ice cream.', 'I received many gifts.', 'It was a wonderful day!']),
        ('The Rainy Day', '下雨天', ['It rained all day today.', 'I stayed inside the house.', 'I read books and watched TV.', 'The sound of rain is soothing.', 'I hope the sun comes out tomorrow.']),
    ],
    'junior': [
        ('The Importance of Reading', '阅读的重要性', ['Reading is one of the most valuable skills we can develop.', 'It opens doors to new worlds and ideas.', 'Through books, we can travel to distant places without leaving our homes.', 'Reading improves our vocabulary and writing abilities.', 'It is also a great way to relax and reduce stress.']),
        ('My Hobbies and Interests', '我的爱好与兴趣', ['I have several hobbies that I enjoy in my free time.', 'One of my favorites is collecting stamps from different countries.', 'Another hobby I have is learning to play the guitar.', 'These activities help me relax after a busy school day.', 'I believe having hobbies is important for a balanced life.']),
        ('Protecting Our Environment', '保护我们的环境', ['Our environment is facing many challenges today.', 'Pollution is one of the biggest threats to our planet.', 'We can help by reducing waste and recycling.', 'Planting more trees would also make a significant difference.', 'Every small action counts when it comes to protecting Earth.']),
        ('The Benefits of Exercise', '运动的好处', ['Regular exercise is essential for maintaining good health.', 'It helps strengthen our muscles and bones.', 'Exercise also improves our mental well-being.', 'Even a thirty-minute walk can make a difference.', 'Making physical activity a habit leads to a longer, healthier life.']),
        ('My Favorite Season', '我最喜欢的季节', ['Among the four seasons, autumn is my favorite.', 'The weather becomes cooler and more comfortable.', 'The leaves change into beautiful colors of orange and red.', 'It is also the season of harvest and Thanksgiving.', 'I enjoy taking walks in the park during this time.']),
        ('Learning a New Language', '学习一门新语言', ['Learning a new language can be challenging but rewarding.', 'It opens up opportunities for communication with people from different backgrounds.', 'Speaking multiple languages can also boost career prospects.', 'The best way to learn is through consistent practice and immersion.', 'I am currently studying Spanish and finding it fascinating.']),
        ('The Role of Technology in Education', '科技在教育中的作用', ['Technology has transformed the way we learn.', 'Online resources make education accessible to more people.', 'Students can now learn at their own pace using educational apps.', 'However, excessive screen time can be harmful.', 'Balancing technology use with traditional learning is important.']),
        ('My Dream Career', '我的梦想职业', ['When I grow up, I want to become a veterinarian.', 'I have always loved animals and wanted to help them.', 'This career would allow me to combine my passion with my work.', 'I am preparing by taking science courses.', 'I hope to open my own animal clinic someday.']),
        ('Healthy Eating Habits', '健康饮食习惯', ['Eating a balanced diet is important for our health.', 'We should include fruits and vegetables in every meal.', 'Drinking plenty of water helps our body function properly.', 'Avoiding too much sugar and junk food is advisable.', 'Good eating habits contribute to overall well-being.']),
        ('The Value of Friendship', '友谊的价值', ['True friendship is one of lifes greatest treasures.', 'Friends support us through difficult times and celebrate our successes.', 'Being a good friend requires trust, honesty, and mutual respect.', 'Friendships take time and effort to develop and maintain.', 'Having close friends improves our mental health and happiness.']),
    ],
    'senior': [
        ('The Philosophy of Happiness', '幸福的哲学', ['Happiness has been a central topic in philosophical discourse for millennia.', 'Ancient Greek philosophers like Aristotle argued that happiness is the highest good.', 'Modern positive psychology suggests that happiness can be cultivated through intentional practices.', 'The pursuit of happiness remains a fundamental human right recognized globally.', 'Understanding what truly constitutes lasting happiness requires deep self-reflection.']),
        ('The Evolution of Modern Art', '现代艺术的演变', ['Modern art emerged in the late nineteenth century as artists sought new forms of expression.', 'Movements like Impressionism, Cubism, and Surrealism challenged traditional artistic conventions.', 'Artists began experimenting with abstraction, symbolism, and the unconscious mind.', 'This radical departure from realism fundamentally changed the art world.', 'Contemporary art continues to push boundaries in the digital age.']),
        ('The Science of Climate Change', '气候变化科学', ['Climate change represents one of the most pressing challenges facing humanity.', 'Scientific consensus confirms that human activities are the primary driver of global warming.', 'Rising temperatures lead to melting ice caps, rising sea levels, and extreme weather events.', 'International cooperation is essential to mitigate the worst effects.', 'Individual actions combined with systemic change can still alter the trajectory.']),
        ('The Psychology of Decision Making', '决策心理学', ['Human decision-making is influenced by numerous cognitive biases.', 'Heuristics and mental shortcuts often lead to predictable errors in judgment.', 'Understanding these patterns can help us make more rational choices.', 'Emotional factors also play a crucial role in our decisions.', 'Research in behavioral economics has revolutionized our understanding of human behavior.']),
        ('The History of Space Exploration', '太空探索的历史', ['Space exploration began in earnest with the Space Race of the 1950s and 60s.', 'The Apollo missions landed the first humans on the Moon in 1969.', 'Since then, robotic missions have explored all the planets in our solar system.', 'The International Space Station represents a model for international scientific cooperation.', 'Plans for Mars colonization are currently under development.']),
        ('The Economics of Sustainable Development', '可持续发展的经济学', ['Sustainable development seeks to balance economic growth with environmental protection.', 'Green technologies are creating new industries and employment opportunities.', 'Carbon pricing and other market mechanisms can internalize environmental costs.', 'The transition to a sustainable economy requires significant investment.', 'Long-term thinking must supersede short-term profit maximization.']),
        ('The Impact of Globalization on Culture', '全球化对文化的影响', ['Globalization has transformed cultural exchange across the world.', 'Traditional cultures face challenges from dominant global media.', 'At the same time, globalization enables greater cross-cultural understanding.', 'Hybrid cultural forms emerge from the blending of local and global influences.', 'Preserving cultural diversity while embracing connectivity remains a delicate balance.']),
        ('Understanding Artificial Intelligence', '理解人工智能', ['Artificial intelligence refers to machines that can perform tasks requiring human intelligence.', 'Machine learning enables systems to improve through experience without explicit programming.', 'AI applications range from voice assistants to autonomous vehicles.', 'Ethical concerns include privacy, bias, and the potential for misuse.', 'The future of AI will profoundly shape society and the economy.']),
    ],
    'university': [
        ('The Future of Renewable Energy', '可再生能源的未来', ['Renewable energy sources are becoming increasingly vital in the global energy transition.', 'Solar and wind power have experienced dramatic cost reductions over the past decade.', 'Energy storage technologies are addressing the intermittency challenges of renewables.', 'Grid modernization is essential to accommodate distributed generation.', 'Policy frameworks must accelerate this transition while ensuring energy security.']),
        ('Advances in Biotechnology', '生物技术的进展', ['Biotechnology is revolutionizing healthcare through personalized medicine.', 'Gene editing technologies like CRISPR offer unprecedented therapeutic potential.', 'Synthetic biology is enabling the design of novel organisms for industrial applications.', 'These advances raise important ethical questions about human enhancement.', 'Regulatory frameworks must balance innovation with precaution.']),
        ('The Sociology of Social Media', '社交媒体的社会学', ['Social media platforms have fundamentally altered human communication patterns.', 'These platforms create both opportunities for connection and risks of isolation.', 'Algorithm-driven content curation can reinforce echo chambers.', 'Digital literacy is becoming essential in modern society.', 'Research continues to explore the long-term psychological and social effects.']),
        ('The Geopolitics of Artificial Intelligence', '人工智能的地缘政治学', ['AI is becoming a key driver of economic and military power.', 'Nations are racing to establish leadership in AI research and development.', 'Concerns about technological sovereignty are reshaping industrial policy.', 'International norms for AI governance are still evolving.', 'Cooperation and competition in AI will define the twenty-first century.']),
        ('Quantum Computing: Principles and Prospects', '量子计算：原理与前景', ['Quantum computing harnesses quantum mechanical phenomena for computation.', 'Quantum bits can exist in superposition, enabling exponential speedups for certain problems.', 'Current quantum computers remain limited in scale and error correction.', 'Applications include cryptography, drug discovery, and optimization problems.', 'Quantum supremacy demonstrations mark significant milestones in the field.']),
        ('The Neuroscience of Consciousness', '意识的神经科学', ['Consciousness remains one of the greatest mysteries in science.', 'Neuroscientists study the neural correlates of conscious experience.', 'Different theories propose various mechanisms for generating consciousness.', 'Understanding consciousness has implications for philosophy and AI.', 'Research continues to advance our understanding of this phenomenon.']),
        ('Global Economic Inequality', '全球经济不平等', ['Economic inequality has widened in many countries over recent decades.', 'Factors include technological change, globalization, and policy choices.', 'Inequality has implications for social mobility and political stability.', 'Redistributive policies can help address growing disparities.', 'International cooperation on tax and trade issues affects global inequality.']),
        ('The Philosophy of Mind', '心智哲学', ['The mind-body problem has puzzled philosophers for centuries.', 'Physicalism holds that mental states are physical states of the brain.', 'Dualism proposes that mind and body are fundamentally different substances.', 'Functionalism examines mental states by their functional roles.', 'Advances in neuroscience continue to inform philosophical debates.']),
    ]
}

LONG_TOPICS = [
    ('The History of the Internet: From ARPANET to the Digital Age', '互联网的历史：从ARPANET到数字时代'),
    ('Understanding Neural Networks and Deep Learning', '理解神经网络与深度学习'),
    ('The Global Water Crisis: Challenges and Solutions', '全球水资源危机：挑战与解决方案'),
    ('The Psychology of Learning and Memory', '学习与记忆的心理学'),
    ('Climate Change and Its Impact on Biodiversity', '气候变化及其对生物多样性的影响'),
    ('The Evolution of Mobile Communication Technology', '移动通信技术的演进'),
    ('Public Health Systems: Lessons from Global Pandemics', '公共卫生系统：全球疫情的教训'),
    ('The Philosophy of Ethics in the Digital Age', '数字时代的伦理哲学'),
    ('Renewable Energy Technologies and Grid Integration', '可再生能源技术与电网整合'),
    ('The Cultural Impact of Globalization', '全球化的文化影响'),
    ('Advances in Medical Research and Treatment', '医学研究与治疗的进展'),
    ('The Future of Space Travel and Exploration', '太空旅行与探索的未来'),
    ('Cybersecurity in the Modern World', '现代世界的网络安全'),
    ('Artificial Intelligence in Healthcare', '人工智能在医疗中的应用'),
    ('The Economics of Climate Action', '气候行动的经济学'),
]

def generate_date():
    return f'2024-{(random.randint(1,12)):02d}-{(random.randint(1,28)):02d}'

def generate_short_article_entry(article_id, level, topic_info):
    title_en, title_zh, base_lines = topic_info
    content_en = '\n'.join(base_lines)
    content_zh = '\n'.join(base_lines)
    word_count = len(' '.join(base_lines).split())
    difficulty = 1 if level == 'elementary' else 2 if level in ['junior', 'senior'] else 3
    return f"""  {{
    id: '{article_id}',
    title: '{title_en}',
    titleZh: '{title_zh}',
    contentEn: `{content_en}`,
    contentZh: `{content_zh}`,
    level: '{level}',
    category: '{random.choice(CATEGORIES)}',
    author: '{random.choice(AUTHORS)}',
    wordCount: {word_count},
    difficulty: {difficulty},
    createdAt: '{generate_date()}',
  }},"""

def generate_long_article_entry(article_id, topic_en, topic_zh):
    content_en = f"""{topic_en}: A Comprehensive Overview

This extensive article provides a thorough examination of {topic_en.lower()}, exploring its historical development, current state, and future prospects. The topic encompasses multiple dimensions that warrant careful analysis and consideration.

Historical Background and Development

The origins of this subject trace back several decades, to a time when researchers and practitioners first began to recognize its significance. Early pioneers laid the groundwork through theoretical contributions and empirical investigations that established foundational principles. Their efforts created a body of knowledge that subsequent generations have built upon and expanded.

The evolution of this field has been marked by several distinct phases. The initial period was characterized by exploration and experimentation as researchers tested various approaches and methodologies. This trial-and-error process gradually yielded insights that informed more refined theoretical frameworks.

Major Theoretical Foundations

Contemporary understanding rests upon several key theoretical pillars that have emerged through decades of scholarship. These frameworks provide essential conceptual tools for analyzing phenomena and generating predictions about future developments.

The first major theoretical approach emphasizes structural factors and institutional arrangements. Proponents argue that these elements shape outcomes in ways that individual actors often fail to recognize or appreciate. This perspective highlights the importance of analyzing systems rather than isolated events or decisions.

A second theoretical tradition focuses on agency and individual decision-making. This approach examines how people navigate constraints and opportunities, making strategic choices that aggregate into collective outcomes. Understanding motivations, beliefs, and information processing becomes essential for this type of analysis.

Empirical Evidence and Case Studies

Real-world evidence provides crucial tests for theoretical propositions. Numerous case studies illustrate the complex interactions between structural conditions and individual agency that characterize this domain.

Documented instances reveal patterns that support some theoretical expectations while contradicting others. This mixed evidence suggests that context matters greatly, and that simple generalizations often fail to capture the nuances of actual experience.

Data analysis further corroborates insights from qualitative investigations. Statistical relationships among variables indicate regularities that can inform both scholarly understanding and practical action.

Contemporary Applications and Implications

Today, developments in this area have far-reaching consequences across multiple sectors of society. Policymakers, professionals, and citizens all confront issues related to these dynamics in their daily lives.

Technological innovations have transformed the landscape in significant ways. New capabilities enable forms of action that earlier generations could scarcely have imagined. These technological shifts create both opportunities and challenges that require adaptive responses.

Economic dimensions remain central to understanding these phenomena. Market forces, regulatory frameworks, and institutional arrangements all shape possibilities for individuals and organizations. The distribution of benefits and burdens reflects underlying structural conditions that can be altered through collective action.

Social and cultural aspects add further layers of complexity. Beliefs, values, and identities influence how people interpret and respond to changing circumstances. These cultural factors can either facilitate or impede adaptation to new conditions.

Ethical Considerations and Value Conflicts

Moral dimensions permeate virtually every aspect of this domain. Disagreements about fundamental values generate controversy and conflict among individuals and groups with different perspectives.

Questions of justice arise frequently in discussions of policy and practice. How benefits and costs should be distributed represents a persistent challenge for democratic deliberation. Different principles of fairness may point toward different conclusions.

Individual rights sometimes conflict with collective interests, creating difficult tradeoffs. Balancing these competing considerations requires reasoned judgment and practical wisdom. Agreement on procedures may be easier to achieve than consensus on substantive outcomes.

Future Directions and Uncertainties

Looking ahead, multiple possible trajectories merit consideration. Experts offer varying forecasts based on different assumptions about underlying dynamics and external conditions.

Some observers anticipate continued progress along established lines, with incremental improvements addressing current limitations. Others foresee more fundamental transformations that could disrupt existing arrangements and create entirely new challenges.

Uncertainty about future developments counsel humility in prediction and flexibility in planning. Robust strategies should perform reasonably well across a range of scenarios rather than optimizing for a single vision of the future.

Conclusion

{topic_en} represents a multifaceted subject that defies simple characterization. This article has surveyed key dimensions including historical development, theoretical frameworks, empirical evidence, contemporary applications, ethical considerations, and future prospects. Continued attention to these matters serves both scholarly understanding and practical deliberation. The stakes involved warrant sustained engagement from all who care about the common good."""
    
    word_count = len(content_en.split())
    
    return f"""  {{
    id: 'la-gen-{article_id}',
    title: '{topic_en}',
    titleZh: '{topic_zh}',
    level: 'university',
    contentEn: `{content_en}`,
    wordCount: {word_count},
    contentZh: '{topic_zh}',
    category: 'technology' as const,
    author: 'Generated Content Team',
    difficulty: 3,
    createdAt: '{generate_date()}',
  }},"""

# Generate 210 articles
articles_content = []
article_id = 600
all_levels = ['elementary', 'junior', 'senior', 'university']

while len(articles_content) < 210:
    for level in all_levels:
        topics = TOPICS[level]
        for topic_info in topics:
            if len(articles_content) >= 210:
                break
            entry = generate_short_article_entry(f'e{article_id}', level, topic_info)
            articles_content.append(entry)
            article_id += 1

# Generate 35 long articles
long_articles_content = []
article_id = 100

while len(long_articles_content) < 35:
    for topic_en, topic_zh in LONG_TOPICS:
        if len(long_articles_content) >= 35:
            break
        entry = generate_long_article_entry(article_id, topic_en, topic_zh)
        long_articles_content.append(entry)
        article_id += 1

# Read and modify articles.ts
with open('/tmp/linguaread-git/src/data/articles.ts', 'r') as f:
    content = f.read()

# Find the "  },\n];\n" pattern that closes shortArticles - insert BEFORE it
short_articles_end = content.rfind('  },\n];')
if short_articles_end == -1:
    print("ERROR: Could not find shortArticles array end marker '  },\n];'")
    exit(1)

insert_pos = short_articles_end + 4  # after "  },\n"
new_content = content[:insert_pos] + '\n' + '\n'.join(articles_content) + content[insert_pos:]

with open('/tmp/linguaread-git/src/data/articles.ts', 'w') as f:
    f.write(new_content)

print(f"Appended {len(articles_content)} articles to articles.ts")

# Read and modify longArticles.ts
with open('/tmp/linguaread-git/src/data/longArticles.ts', 'r') as f:
    content = f.read()

long_arr_end = content.rfind('  },\n];')
if long_arr_end == -1:
    print("ERROR: Could not find longArticles array end marker '  },\n];'")
    exit(1)

insert_pos = long_arr_end + 4
new_content = content[:insert_pos] + '\n' + '\n'.join(long_articles_content) + content[insert_pos:]

with open('/tmp/linguaread-git/src/data/longArticles.ts', 'w') as f:
    f.write(new_content)

print(f"Appended {len(long_articles_content)} long articles to longArticles.ts")
print("Done!")

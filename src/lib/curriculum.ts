// 小六數學單元資料（108課綱對應）
export interface QuizQuestion {
  id: string;
  type: 'choice' | 'fill';
  question: string;
  options?: string[];
  answer: string | number;
  explanation: string;
  hint?: string;
}

export interface Example {
  id: string;
  title: string;
  problem: string;
  steps: { label: string; content: string }[];
  answer: string;
}

export interface Unit {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  scenarioTitle: string;
  scenarioDesc: string;
  curriculumCode: string;
  color: string;
  concepts: { title: string; body: string; formula?: string }[];
  examples: Example[];
  quiz: QuizQuestion[];
  scientist: { name: string; nameEn: string; years: string; field: string; bio: string };
}

export interface Grade {
  id: string;
  slug: string;
  label: string;
  color: string;
  emoji: string;
  units: Unit[];
}

export const grades: Grade[] = [
  {
    id: 'g6',
    slug: 'grade-6',
    label: '小六',
    color: '#e86d6d',
    emoji: '🌱',
    units: [
      {
        id: 'g6-u1',
        slug: 'fraction-operations',
        title: '分數四則運算',
        emoji: '🧁',
        scenarioTitle: '食譜換算實驗室',
        scenarioDesc: '你是一位甜點師，要幫料理節目重新計算食譜份量，分數運算就是你最好的工具！',
        curriculumCode: 'N-6-1',
        color: '#e86d6d',
        concepts: [
          {
            title: '分數加法與減法',
            body: '分數相加減時，要先讓分母相同（通分），再計算分子。通分就是找兩個分母的最小公倍數。',
            formula: '\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}',
          },
          {
            title: '分數乘法',
            body: '分數相乘時，分子乘以分子，分母乘以分母。乘完之後記得約分到最簡分數喔！',
            formula: '\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}',
          },
          {
            title: '分數除法',
            body: '分數除以另一個分數，等於乘以那個分數的倒數。把除數的分子分母對調，就是「倒數」。',
            formula: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '食譜換算：麵粉份量',
            problem: '原食譜需要 ³⁄₄ 杯麵粉，要做 1½ 倍份量，需要多少麵粉？',
            steps: [
              { label: '理解題意', content: '需要計算 ³⁄₄ × 1½' },
              { label: '把帶分數改為假分數', content: '1½ = ³⁄₂' },
              { label: '分數相乘', content: '³⁄₄ × ³⁄₂ = ⁹⁄₈' },
              { label: '化為帶分數', content: '⁹⁄₈ = 1⅛' },
            ],
            answer: '需要 1⅛ 杯麵粉',
          },
          {
            id: 'e2',
            title: '分享蛋糕',
            problem: '一個蛋糕吃了 ⅔，剩下的再吃掉 ¾，共吃了幾分之幾？',
            steps: [
              { label: '剩下多少', content: '1 - ⅔ = ⅓' },
              { label: '再吃掉剩下的 ¾', content: '⅓ × ¾ = ¼' },
              { label: '合計', content: '⅔ + ¼ = ⁸⁄₁₂ + ³⁄₁₂ = ¹¹⁄₁₂' },
            ],
            answer: '共吃了 ¹¹⁄₁₂',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '計算 ½ + ⅓ = ？',
            options: ['²⁄₅', '⅚', '⁵⁄₆', '⅔'],
            answer: '⅚',
            explanation: '通分找公分母 6：³⁄₆ + ²⁄₆ = ⁵⁄₆',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '食譜要 ⅔ 杯糖，做兩倍份量需要幾杯糖？',
            options: ['1⅓', '⅔', '1⅔', '1¼'],
            answer: '1⅓',
            explanation: '⅔ × 2 = 4⁄3 = 1⅓',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '計算 ¾ ÷ ½ = ？（請填阿拉伯數字，例如：3/2）',
            answer: '3/2',
            explanation: '¾ ÷ ½ = ¾ × 2/1 = 6/4 = 3/2（即 1½）',
            hint: '除以分數 = 乘以倒數',
          },
        ],
        scientist: {
          name: '海倫 · 奎恩',
          nameEn: 'Helen Quinn',
          years: '1943–',
          field: '粒子物理學',
          bio: '澳裔美國物理學家，以研究粒子物理學中的對稱性著名，獲得多項頂尖科學獎項。她也積極推動科學教育改革，讓更多女孩有機會接觸物理和數學。',
        },
      },
      {
        id: 'g6-u2',
        slug: 'ratio',
        title: '比與比值',
        emoji: '🎨',
        scenarioTitle: '調色盤魔法師',
        scenarioDesc: '你是一位插畫師，用顏料的混合比例調配出夢幻色彩，掌握「比」就能創造無限可能！',
        curriculumCode: 'N-6-5',
        color: '#c46de8',
        concepts: [
          {
            title: '什麼是比？',
            body: '「比」是兩個數量的相對關係，寫作 a:b，讀作「a 比 b」。比反映的是倍數關係，不是差！',
            formula: 'a : b \\quad (b \\neq 0)',
          },
          {
            title: '比值',
            body: '比值是把比用除法表示的結果，a:b 的比值 = a÷b。比值是一個數，比是兩個數的關係。',
            formula: '\\text{比值} = a \\div b = \\frac{a}{b}',
          },
          {
            title: '等值比（化簡比）',
            body: '把比的兩項同乘或同除同一個數，得到的新比叫做等值比。最簡比就是兩項互質的比。',
            formula: 'a : b = (a \\times k) : (b \\times k)',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '調色：藍色與黃色混出綠色',
            problem: '藍色顏料 4 毫升加黃色顏料 6 毫升調出綠色，藍黃的比是多少？化簡後呢？',
            steps: [
              { label: '寫出比', content: '藍色 : 黃色 = 4 : 6' },
              { label: '找最大公因數', content: '4 和 6 的 GCF = 2' },
              { label: '化簡', content: '4 : 6 = 2 : 3' },
            ],
            answer: '藍色 : 黃色 = 2 : 3',
          },
          {
            id: 'e2',
            title: '按比例調色',
            problem: '紅色與白色的比是 1:4，要調出 25 毫升粉紅色，各需幾毫升？',
            steps: [
              { label: '總份數', content: '1 + 4 = 5 份' },
              { label: '每份份量', content: '25 ÷ 5 = 5 毫升' },
              { label: '各顏色份量', content: '紅色 = 1 × 5 = 5 毫升；白色 = 4 × 5 = 20 毫升' },
            ],
            answer: '紅色 5 毫升、白色 20 毫升',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '12 : 8 化簡後是？',
            options: ['6:4', '3:2', '4:3', '2:3'],
            answer: '3:2',
            explanation: '12 和 8 的最大公因數是 4，12÷4=3，8÷4=2，所以是 3:2',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '藍色:黃色 = 2:3，藍色 10ml，黃色要幾 ml？',
            options: ['15ml', '6ml', '20ml', '12ml'],
            answer: '15ml',
            explanation: '2:3 = 10:?，10 ÷ 2 × 3 = 15ml',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '比值是什麼？5:4 的比值是多少？（填小數，四捨五入到小數點第二位）',
            answer: '1.25',
            explanation: '比值 = 5 ÷ 4 = 1.25',
            hint: '比值 = 前項 ÷ 後項',
          },
        ],
        scientist: {
          name: '艾美 · 諾特',
          nameEn: 'Emmy Noether',
          years: '1882–1935',
          field: '抽象代數、數學物理',
          bio: '德國數學家，被愛因斯坦稱為「有史以來最重要的女性數學家」。她在抽象代數領域的貢獻革命性地改變了數學，諾特定理更連結了物理對稱性與守恆律。',
        },
      },
      {
        id: 'g6-u3',
        slug: 'speed-rate',
        title: '速率',
        emoji: '🏃‍♀️',
        scenarioTitle: '跑步節奏追蹤器',
        scenarioDesc: '你是一位田徑教練助理，幫選手分析跑步速度，找出最佳節奏，讓成績突破！',
        curriculumCode: 'N-6-4',
        color: '#6db0e8',
        concepts: [
          {
            title: '速率（速度）',
            body: '速率是描述「在單位時間內移動了多少距離」的數量。例如每小時幾公里、每分鐘幾公尺。',
            formula: '\\text{速率} = \\frac{\\text{距離}}{\\text{時間}}',
          },
          {
            title: '距離、時間、速率的關係',
            body: '三者有固定公式關係，知道其中兩個就能算出第三個。用「速率 × 時間 = 距離」最好記！',
            formula: '\\text{距離} = \\text{速率} \\times \\text{時間}',
          },
          {
            title: '單位換算',
            body: '速率的單位要注意！公里/小時（km/h）和公尺/分鐘（m/min）是不同單位，計算前要統一。',
            formula: '1 \\text{ km/h} = \\frac{1000}{60} \\text{ m/min} \\approx 16.7 \\text{ m/min}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '計算跑步速率',
            problem: '小雯跑完 400 公尺花了 80 秒，她的速率是每秒幾公尺？',
            steps: [
              { label: '確認已知', content: '距離 = 400m，時間 = 80s' },
              { label: '代入公式', content: '速率 = 距離 ÷ 時間 = 400 ÷ 80' },
              { label: '計算', content: '速率 = 5 m/s' },
            ],
            answer: '小雯的速率是每秒 5 公尺',
          },
          {
            id: 'e2',
            title: '計算跑步時間',
            problem: '選手以 8 m/s 的速率跑 200 公尺，需要多少秒？',
            steps: [
              { label: '確認已知', content: '速率 = 8 m/s，距離 = 200m' },
              { label: '用公式推導時間', content: '時間 = 距離 ÷ 速率' },
              { label: '計算', content: '時間 = 200 ÷ 8 = 25 秒' },
            ],
            answer: '需要 25 秒',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '小明以 6 m/s 跑了 5 秒，距離是幾公尺？',
            options: ['11m', '30m', '1.2m', '60m'],
            answer: '30m',
            explanation: '距離 = 速率 × 時間 = 6 × 5 = 30 公尺',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '跑 120 公尺花了 15 秒，速率是？',
            options: ['8 m/s', '6 m/s', '12 m/s', '10 m/s'],
            answer: '8 m/s',
            explanation: '速率 = 距離 ÷ 時間 = 120 ÷ 15 = 8 m/s',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '速率 5 m/s，要跑 75 公尺需要幾秒？',
            answer: '15',
            explanation: '時間 = 75 ÷ 5 = 15 秒',
            hint: '時間 = 距離 ÷ 速率',
          },
        ],
        scientist: {
          name: '凱薩琳 · 強森',
          nameEn: 'Katherine Johnson',
          years: '1918–2020',
          field: '數學、航太工程',
          bio: 'NASA 的傳奇數學家，精通軌道力學計算，確保了阿波羅登月計畫的成功。她的速率與軌道計算讓人類踏上月球，是「隱藏人物」電影的主角原型。',
        },
      },
      {
        id: 'g6-u4',
        slug: 'circle',
        title: '圓的面積與周長',
        emoji: '⭕',
        scenarioTitle: '徽章設計工坊',
        scenarioDesc: '你是一位學校社團的徽章設計師，要計算徽章材料用量，圓形幾何是你的必備技能！',
        curriculumCode: 'S-6-1',
        color: '#3ecfb2',
        concepts: [
          {
            title: '圓的周長（圓周）',
            body: '圓周長是圓的一圈總長度，等於直徑乘以圓周率 π。π 約為 3.14159...，常取 3.14。',
            formula: 'C = 2\\pi r = \\pi d',
          },
          {
            title: '圓的面積',
            body: '圓的面積是圓內部所有點的總面積，等於 π 乘以半徑的平方。半徑是直徑的一半。',
            formula: 'A = \\pi r^2',
          },
          {
            title: '直徑與半徑',
            body: '直徑（d）是通過圓心的最長距離，半徑（r）是圓心到圓上任一點的距離。d = 2r。',
            formula: 'd = 2r \\quad \\Leftrightarrow \\quad r = \\frac{d}{2}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '計算圓形徽章的周長',
            problem: '想設計一個直徑 8 公分的圓形徽章，周長是幾公分？（π取3.14）',
            steps: [
              { label: '確認已知', content: '直徑 d = 8 cm，π = 3.14' },
              { label: '代入公式', content: 'C = π × d = 3.14 × 8' },
              { label: '計算', content: 'C = 25.12 cm' },
            ],
            answer: '徽章周長約 25.12 公分',
          },
          {
            id: 'e2',
            title: '計算圓形貼紙的布料面積',
            problem: '半徑 5 公分的圓形貼紙，需要用多少平方公分的布料？',
            steps: [
              { label: '確認已知', content: '半徑 r = 5 cm' },
              { label: '代入公式', content: 'A = π × r² = 3.14 × 5²' },
              { label: '計算', content: 'A = 3.14 × 25 = 78.5 cm²' },
            ],
            answer: '需要 78.5 平方公分的布料',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '半徑 6 cm 的圓，面積是幾 cm²？（π=3.14）',
            options: ['37.68', '113.04', '18.84', '78.5'],
            answer: '113.04',
            explanation: 'A = π × r² = 3.14 × 36 = 113.04 cm²',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '直徑 10 cm 的圓，周長是幾 cm？（π=3.14）',
            options: ['62.8', '31.4', '314', '15.7'],
            answer: '31.4',
            explanation: 'C = π × d = 3.14 × 10 = 31.4 cm',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '圓形徽章周長 62.8 cm，直徑是幾 cm？（π=3.14）',
            answer: '20',
            explanation: 'd = C ÷ π = 62.8 ÷ 3.14 = 20 cm',
            hint: '周長 = π × 直徑，反推直徑 = 周長 ÷ π',
          },
        ],
        scientist: {
          name: '辛西婭 · 所羅門',
          nameEn: 'Cynthia Solomon',
          years: '1938–',
          field: '電腦科學教育',
          bio: '美國電腦科學家，Logo 程式語言的共同開發者。Logo 曾被廣泛用於教導孩子用「畫圓」學習幾何，讓無數孩子透過程式設計愛上數學與圖形。',
        },
      },
      {
        id: 'g6-u5',
        slug: 'prism-volume',
        title: '柱體體積',
        emoji: '📦',
        scenarioTitle: '包裝設計師',
        scenarioDesc: '你在幫一家手工皂品牌設計包裝盒，需要計算每種形狀盒子的容量，體積計算派上用場！',
        curriculumCode: 'S-6-3',
        color: '#f5b641',
        concepts: [
          {
            title: '柱體體積公式',
            body: '所有柱體（包括長方體、正方體、三角柱、圓柱）的體積都是：底面積 × 高。',
            formula: 'V = S_{底} \\times h',
          },
          {
            title: '長方體體積',
            body: '長方體的底面積是長 × 寬，所以體積 = 長 × 寬 × 高。這是最常見的柱體！',
            formula: 'V = l \\times w \\times h',
          },
          {
            title: '圓柱體積',
            body: '圓柱的底面是圓形，底面積 = π × r²，所以體積 = π × r² × h。',
            formula: 'V = \\pi r^2 h',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '設計長方形包裝盒',
            problem: '手工皂的包裝盒：長 8 cm、寬 5 cm、高 6 cm，體積是多少？',
            steps: [
              { label: '確認已知', content: '長=8, 寬=5, 高=6（單位:cm）' },
              { label: '代入公式', content: 'V = 長 × 寬 × 高 = 8 × 5 × 6' },
              { label: '計算', content: 'V = 240 cm³' },
            ],
            answer: '包裝盒體積 240 立方公分',
          },
          {
            id: 'e2',
            title: '設計圓柱形罐裝包裝',
            problem: '圓柱形護手霜罐，半徑 3 cm，高 10 cm，體積大約多少？（π=3.14）',
            steps: [
              { label: '計算底面積', content: 'S底 = π × r² = 3.14 × 9 = 28.26 cm²' },
              { label: '代入公式', content: 'V = S底 × 高 = 28.26 × 10' },
              { label: '計算', content: 'V = 282.6 cm³' },
            ],
            answer: '圓柱罐體積約 282.6 立方公分',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '長 10cm、寬 4cm、高 5cm 的盒子，體積是？',
            options: ['200cm³', '19cm³', '100cm³', '400cm³'],
            answer: '200cm³',
            explanation: 'V = 10 × 4 × 5 = 200 cm³',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '底面積 30cm²、高 7cm 的柱體，體積是？',
            options: ['210cm³', '37cm³', '21cm³', '420cm³'],
            answer: '210cm³',
            explanation: 'V = 底面積 × 高 = 30 × 7 = 210 cm³',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '圓柱半徑 2cm、高 5cm，體積是幾 cm³？（π=3.14，填整數）',
            answer: '63',
            explanation: 'V = 3.14 × 4 × 5 = 62.8 ≈ 63 cm³',
            hint: 'V = π × r² × h',
          },
        ],
        scientist: {
          name: '瑪麗 · 貝格納',
          nameEn: 'Marie-Anne Pierrette Paulze',
          years: '1758–1836',
          field: '化學（拉瓦節夫人）',
          bio: '法國化學家，與丈夫拉瓦節共同對近代化學做出重大貢獻。她精通多國語言、翻譯化學研究、繪製實驗器具圖表，在實驗室中扮演了不可少的角色，是科學史上被低估的偉大女性。',
        },
      },
      {
        id: 'g6-u6',
        slug: 'statistics',
        title: '統計圖表',
        emoji: '📊',
        scenarioTitle: '班級調查分析師',
        scenarioDesc: '你是班級的調查員，幫大家整理問卷結果、製作圖表，讓同學一眼看懂數據的秘密！',
        curriculumCode: 'D-6-1',
        color: '#6de89a',
        concepts: [
          {
            title: '平均數',
            body: '平均數是一組數據的代表值，把所有數據加起來再除以數據個數。平均數反映「中心趨勢」。',
            formula: '\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}',
          },
          {
            title: '統計圖的類型',
            body: '常見統計圖有：長條圖（比較分類數量）、折線圖（呈現趨勢變化）、圓形圖（呈現比例）。選對圖形才能清楚傳遞資訊！',
          },
          {
            title: '眾數與中位數',
            body: '眾數是出現次數最多的數據；中位數是排序後位於正中間的數據。三者都是描述數據的方法。',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '計算全班數學成績平均',
            problem: '5 位同學的分數：85、92、78、90、85，求平均數、眾數、中位數。',
            steps: [
              { label: '平均數', content: '(85+92+78+90+85) ÷ 5 = 430 ÷ 5 = 86' },
              { label: '眾數', content: '85 出現兩次，眾數 = 85' },
              { label: '排序取中位', content: '78, 85, 85, 90, 92 → 中位數 = 85' },
            ],
            answer: '平均數86，眾數85，中位數85',
          },
          {
            id: 'e2',
            title: '選擇適合的圖表',
            problem: '班上最喜愛的顏色調查結果：紅8人, 藍12人, 綠6人, 橙4人，應使用哪種統計圖？',
            steps: [
              { label: '思考目的', content: '要比較各顏色的人數多少' },
              { label: '選擇圖型', content: '比較不同類別的數量 → 長條圖最適合' },
              { label: '也可用', content: '圓形圖呈現各顏色佔全班的百分比' },
            ],
            answer: '長條圖（或圓形圖皆可，說明用途即可）',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '4 人身高：152, 160, 158, 154。平均身高是？',
            options: ['156cm', '158cm', '154cm', '160cm'],
            answer: '156cm',
            explanation: '(152+160+158+154) ÷ 4 = 624 ÷ 4 = 156 cm',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '要呈現「一週氣溫變化趨勢」，最適合用哪種圖？',
            options: ['圓形圖', '長條圖', '折線圖', '直方圖'],
            answer: '折線圖',
            explanation: '折線圖適合呈現隨時間變化的趨勢',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '數據：3, 7, 5, 7, 8，眾數是幾？',
            answer: '7',
            explanation: '7 出現了兩次，是出現最多次的，所以眾數是 7',
            hint: '眾數 = 出現次數最多的數字',
          },
        ],
        scientist: {
          name: '佛羅倫斯 · 南丁格爾',
          nameEn: 'Florence Nightingale',
          years: '1820–1910',
          field: '統計學、護理學',
          bio: '護理學之母，也是統計學先驅。她發明了玫瑰圖（極區圖）來視覺化戰場死亡原因的數據，成功說服英國政府改善醫院衛生條件，拯救了無數生命。數據的力量從她開始！',
        },
      },
      {
        id: 'g6-u7',
        slug: 'base-compare',
        title: '基準量與比較量',
        emoji: '⚖️',
        scenarioTitle: '魔法藥水調配師',
        scenarioDesc: '你需要調配不同濃度的魔法藥水，了解誰是基準被比較的對象，才能精準掌握比例！',
        curriculumCode: 'N-6-9',
        color: '#e86d6d',
        concepts: [
          {
            title: '什麼是基準量和比較量？',
            body: '在比較兩個數量時，被當作標準的數量叫做「基準量」，拿來和標準比較的數量叫做「比較量」。通常在「比...多」或「是...的幾倍」句型中，「的」前面的數量就是基準量。',
          },
          {
            title: '比值與百分率',
            body: '比較量除以基準量，就能得到比值。如果把基準量當作 1，比較量就可以用小數、分數或百分率來表示。',
            formula: '\\text{比值} = \\frac{\\text{比較量}}{\\text{基準量}}',
          },
          {
            title: '計算未知量',
            body: '如果你知道基準量和比值，就可以算出比較量；反過來，知道比較量和比值，也能反推基準量。',
            formula: '\\text{比較量} = \\text{基準量} \\times \\text{比值}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '找出基準量',
            problem: '小華有 150 元，小明的錢是小華的 1.5 倍，誰是基準量？小明有多少元？',
            steps: [
              { label: '判斷基準量', content: '「小華的 1.5 倍」，所以「小華的錢」是基準量。' },
              { label: '計算比較量', content: '小華的錢是 150 元，小明的錢 = 150 × 1.5 = 225 元。' },
            ],
            answer: '基準量是小華，小明有 225 元',
          },
          {
            id: 'e2',
            title: '計算基準量',
            problem: '書包打八折後的價錢是 400 元，原價是多少元？',
            steps: [
              { label: '理解題意', content: '「打八折」表示售價是原價的 80%。原價是基準量，售價是比較量。' },
              { label: '代入公式', content: '售價 = 原價 × 80%，所以原價 = 售價 ÷ 80%' },
              { label: '計算', content: '400 ÷ 0.8 = 500' },
            ],
            answer: '原價是 500 元',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '文具店進貨 200 枝紅筆，藍筆的數量是紅筆的 1.2 倍。藍筆有幾枝？',
            options: ['240', '166', '220', '120'],
            answer: '240',
            explanation: '紅筆是基準量，藍筆 = 200 × 1.2 = 240 枝',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '某商品加成 20% 後賣 600 元，成本是多少元？',
            options: ['500', '480', '720', '620'],
            answer: '500',
            explanation: '成本是基準量(100%)，加成 20% 是 120%。成本 = 600 ÷ 1.2 = 500 元',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '大披薩的重量是 800 克，小披薩的重量是 600 克。小披薩的重量是大披薩的幾分之幾？（請填最簡分數，如：3/4）',
            answer: '3/4',
            explanation: '大披薩是基準量。600 ÷ 800 = 6/8 = 3/4',
            hint: '比較量 ÷ 基準量',
          },
        ],
        scientist: {
          name: '艾達 · 勒芙蕾絲',
          nameEn: 'Ada Lovelace',
          years: '1815–1852',
          field: '計算機科學',
          bio: '被公認為世界上第一位電腦程式設計師。她看出分析機不只能算數學，更能處理字母和符號，提出了程式設計和演算法的概念，遠遠超前了她的時代！',
        },
      },
      {
        id: 'g6-u8',
        slug: 'prime-factors',
        title: '質數與最大公因數',
        emoji: '🧩',
        scenarioTitle: '時光寶盒解碼師',
        scenarioDesc: '時光寶盒需要密碼才能打開，找出質數和最大公因數就是解鎖的關鍵！',
        curriculumCode: 'N-6-10',
        color: '#c46de8',
        concepts: [
          {
            title: '質數與合數',
            body: '一個大於 1 的整數，如果除了 1 和它自己以外，沒有別的因數，就叫做「質數」（例如 2, 3, 5, 7）。如果有其他因數，就叫做「合數」。注意！1 既不是質數也不是合數。',
          },
          {
            title: '質因數分解',
            body: '把一個合數寫成幾個質數相乘的形式，就叫做質因數分解。我們常用「短除法」或是「樹狀圖」來找質因數。',
            formula: '12 = 2 \\times 2 \\times 3',
          },
          {
            title: '最大公因數與最小公倍數',
            body: '最大公因數 (GCD) 是兩個數共同因數中最大的；最小公倍數 (LCM) 是兩個數共同倍數中最小的。用短除法可以一起把它們算出來！',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '質因數分解',
            problem: '請將 60 做質因數分解。',
            steps: [
              { label: '找最小質因數', content: '60 可以被 2 整除，60 ÷ 2 = 30' },
              { label: '繼續分解', content: '30 ÷ 2 = 15; 15 不能被 2 整除，用 3，15 ÷ 3 = 5' },
              { label: '確認結果', content: '5 已經是質數，分解結束。' },
            ],
            answer: '60 = 2 × 2 × 3 × 5',
          },
          {
            id: 'e2',
            title: '求最大公因數 (GCD)',
            problem: '求 24 和 36 的最大公因數。',
            steps: [
              { label: '短除法第一層', content: '用共同質因數 2：24÷2=12，36÷2=18' },
              { label: '短除法第二層', content: '用 2：12÷2=6，18÷2=9' },
              { label: '短除法第三層', content: '用 3：6÷3=2，9÷3=3。2和3互質，結束。' },
              { label: '計算', content: '將左側的除數相乘：2 × 2 × 3 = 12' },
            ],
            answer: '最大公因數是 12',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '下列哪一個數是質數？',
            options: ['51', '91', '97', '87'],
            answer: '97',
            explanation: '51=3×17，91=7×13，87=3×29，只有 97 除了 1 和自己沒有其他因數',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '15 和 20 的最小公倍數是多少？',
            options: ['300', '60', '30', '5'],
            answer: '60',
            explanation: '15=3×5，20=2×2×5。LCM = 2×2×3×5 = 60',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '48 的最大質因數是多少？',
            answer: '3',
            explanation: '48 = 2 × 2 × 2 × 2 × 3，質因數有 2 和 3，最大的質因數是 3',
            hint: '把 48 質因數分解後，找出最大的那一個',
          },
        ],
        scientist: {
          name: '索菲 · 熱爾曼',
          nameEn: 'Sophie Germain',
          years: '1776–1831',
          field: '數論、彈性力學',
          bio: '法國女性數學家。為了學習數學，曾使用男性假名與當時的大數學家通信。她在數論（包含質數研究）和費馬最後定理的貢獻非常巨大，有一種質數甚至被命名為「索菲·熱爾曼質數」！',
        },
      },
      {
        id: 'g6-u9',
        slug: 'decimal-operations',
        title: '小數乘除法',
        emoji: '🧪',
        scenarioTitle: '精準科學實驗室',
        scenarioDesc: '科學實驗需要極度精準的測量，小數點的位置可是會影響實驗成敗的喔！',
        curriculumCode: 'N-6-7',
        color: '#6db0e8',
        concepts: [
          {
            title: '小數的乘法',
            body: '先把小數當成整數來相乘，最後再把被乘數和乘數的小數點位數加起來，就是積的小數點總位數。由右向左點上小數點！',
          },
          {
            title: '小數的除法',
            body: '我們要把「除數」變成整數！這時被除數的小數點也要跟著向右移動相同的位數。然後再像平常整數除法一樣計算，商的小數點要和被除數移動後的小數點對齊。',
            formula: '1.25 \\div 0.5 = 12.5 \\div 5',
          },
          {
            title: '四捨五入與估算',
            body: '如果除不盡，或者不需要那麼精確，我們可以取概數。四捨五入就是看下一位數，如果大於等於 5 就進位，小於 5 就捨去。',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '小數乘法',
            problem: '實驗液體每毫升重 1.25 克，3.4 毫升有多重？',
            steps: [
              { label: '當成整數相乘', content: '125 × 34 = 4250' },
              { label: '數小數點位數', content: '1.25 (兩位) + 3.4 (一位) = 三位' },
              { label: '點上小數點', content: '從 4250 的右邊往左點三位：4.250，也就是 4.25' },
            ],
            answer: '重 4.25 克',
          },
          {
            id: 'e2',
            title: '小數除法',
            problem: '有 15.6 公升的水，每 1.2 公升裝一瓶，可以裝多少瓶？',
            steps: [
              { label: '移動小數點', content: '除數是 1.2，向右移一位變 12。被除數 15.6 也向右移一位變 156。' },
              { label: '執行除法', content: '156 ÷ 12 = 13' },
            ],
            answer: '可以裝 13 瓶',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '0.8 × 0.05 = ？',
            options: ['0.4', '0.04', '0.004', '4'],
            answer: '0.04',
            explanation: '8 × 5 = 40。小數點總共 1+2=3 位。所以是 0.040 = 0.04',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '12.5 ÷ 0.25 = ？',
            options: ['500', '50', '5', '0.5'],
            answer: '50',
            explanation: '小數點移動兩位：1250 ÷ 25 = 50',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '計算 3.14 × 2.5 ，四捨五入到小數點第一位是？',
            answer: '7.9',
            explanation: '3.14 × 2.5 = 7.85。看小數點後第二位是 5，要進位。所以是 7.9',
            hint: '先算出完整答案，再四捨五入',
          },
        ],
        scientist: {
          name: '羅莎琳 · 富蘭克林',
          nameEn: 'Rosalind Franklin',
          years: '1920–1958',
          field: '化學、X射線繞射',
          bio: '英國化學家。如果沒有她精準的高解析度 X 射線繞射照片（著名的「照片51號」），科學家可能要晚很久才能發現 DNA 的雙螺旋結構！科學的突破往往建立在極度的精準之上。',
        },
      },
      {
        id: 'g6-u10',
        slug: 'sector',
        title: '扇形面積與弧長',
        emoji: '🍕',
        scenarioTitle: '派對披薩達人',
        scenarioDesc: '要怎麼公平地把披薩切給不同人數的朋友？扇形的知識會成為你的好幫手！',
        curriculumCode: 'S-6-1',
        color: '#3ecfb2',
        concepts: [
          {
            title: '什麼是扇形？',
            body: '扇形是圓的一部分，由兩條半徑和一段弧組合而成，長得就像切開的披薩。兩條半徑夾住的角叫做「圓心角」。',
          },
          {
            title: '扇形是幾分之幾的圓？',
            body: '因為一個圓是一圈 360 度，所以我們可以用圓心角來判斷這個扇形佔整個圓的幾分之幾。計算方式就是：圓心角 / 360。',
            formula: '\\text{比例} = \\frac{\\text{圓心角}}{360^\\circ}',
          },
          {
            title: '扇形面積與弧長',
            body: '只要知道它是幾分之幾的圓，面積就是「圓面積 × 比例」，弧長就是「圓周長 × 比例」。而扇形的「周長」要記得 = 弧長 + 兩條半徑喔！',
            formula: '\\text{扇形面積} = \\pi r^2 \\times \\frac{\\text{角度}}{360^\\circ}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '計算扇形面積',
            problem: '半徑 10 公分、圓心角 90 度的扇形，面積是多少？（π=3.14）',
            steps: [
              { label: '算佔圓的比例', content: '90° / 360° = 1/4 的圓' },
              { label: '計算圓面積', content: 'π × r² = 3.14 × 100 = 314' },
              { label: '乘以比例', content: '314 × (1/4) = 78.5' },
            ],
            answer: '面積是 78.5 平方公分',
          },
          {
            id: 'e2',
            title: '計算扇形周長',
            problem: '半徑 6 公分，圓心角 180 度的扇形（半圓），周長是多少？（π=3.14）',
            steps: [
              { label: '算弧長', content: '直徑 × π × (1/2) = 12 × 3.14 × (1/2) = 18.84' },
              { label: '別忘了加上兩條半徑', content: '扇形的邊不是只有弧，還有兩條直線部分。' },
              { label: '計算總周長', content: '18.84 + 6 + 6 = 30.84' },
            ],
            answer: '周長是 30.84 公分',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '圓心角 120 度的扇形是幾分之幾的圓？',
            options: ['1/2', '1/3', '1/4', '1/6'],
            answer: '1/3',
            explanation: '120 / 360 = 1/3',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '半徑 3cm、圓心角 120° 的扇形面積是？（π=3.14）',
            options: ['28.26', '9.42', '18.84', '3.14'],
            answer: '9.42',
            explanation: '圓面積是 3.14 × 9 = 28.26。扇形面積 = 28.26 × (1/3) = 9.42',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '如果一個半徑 5cm 的扇形，面積剛好是半個圓，它的圓心角是幾度？',
            answer: '180',
            explanation: '半個圓 = 1/2 的圓，360 × (1/2) = 180度',
            hint: '半個圓佔整圈 360 度的幾分之幾？',
          },
        ],
        scientist: {
          name: '安妮 · 易司禮',
          nameEn: 'Annie Easley',
          years: '1933–2011',
          field: '數學、火箭科學家',
          bio: 'NASA 傑出的非裔美國計算機科學家和數學家。她開發了用來計算能量轉換和替代能源系統的軟體代碼，也參與了後來的半人馬座火箭計畫（Centaur）。她的數學能力為太空發射奠定了完美的軌跡。',
        },
      },
      {
        id: 'g6-u11',
        slug: 'prism-surface',
        title: '柱體表面積',
        emoji: '🎁',
        scenarioTitle: '精緻禮物包裝設計',
        scenarioDesc: '要用多少包裝紙才能完美包裝這份禮物？計算表面積讓你不再浪費材料！',
        curriculumCode: 'S-6-3',
        color: '#f5b641',
        concepts: [
          {
            title: '什麼是表面積？',
            body: '表面積就是立體圖形外部所有表面的面積總和。柱體通常包含「上底」、「下底」和周圍的「側面」。',
          },
          {
            title: '柱體表面積公式',
            body: '一個柱體的表面積 = (上底面積 + 下底面積) + 側面積。因為柱體的上下兩底一模一樣，所以可以簡寫成：底面積 × 2 + 側面積。',
            formula: '\\text{表面積} = \\text{底面積} \\times 2 + \\text{側面積}',
          },
          {
            title: '側面積絕招：展開圖',
            body: '如果你把柱體的側面攤開，你就會發現它其實是一個大長方形！這個長方形的長就是「底面的周長」，寬就是柱體的「高」。所以 側面積 = 底圓/底多邊形的周長 × 高！',
            formula: '\\text{側面積} = \\text{底周長} \\times \\text{高}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '長方體表面積',
            problem: '一個長 5 寬 4 高 3 的長方體，表面積是多少？',
            steps: [
              { label: '上下底面', content: '面積 = 5 × 4 = 20，有兩個，所以 20 × 2 = 40' },
              { label: '前後側面', content: '面積 = 5 × 3 = 15，有兩個，所以 15 × 2 = 30' },
              { label: '左右側面', content: '面積 = 4 × 3 = 12，有兩個，所以 12 × 2 = 24' },
              { label: '加總', content: '40 + 30 + 24 = 94' },
            ],
            answer: '表面積是 94',
          },
          {
            id: 'e2',
            title: '圓柱表面積',
            problem: '一個半徑 5，高 10 的圓柱，表面積大約是多少？（π=3.14）',
            steps: [
              { label: '底面積', content: '3.14 × 5² = 78.5，有上下兩塊：78.5 × 2 = 157' },
              { label: '底面周長', content: '直徑 × π = 10 × 3.14 = 31.4' },
              { label: '側面積', content: '底周長 × 高 = 31.4 × 10 = 314' },
              { label: '加總', content: '157 + 314 = 471' },
            ],
            answer: '表面積是 471',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '邊長 3 公分的正方體，表面積是多少平方公分？',
            options: ['27', '9', '54', '36'],
            answer: '54',
            explanation: '一個面是 3×3=9，正方體有 6 個面。9 × 6 = 54',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '柱體的側面積可以怎麼算？',
            options: ['底面積 × 高', '底面積 ÷ 高', '底周長 × 高', '底周長 ÷ 高'],
            answer: '底周長 × 高',
            explanation: '側面的展開圖是一個長方形，長就是底周長，寬就是柱高。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '長方體長2寬3高4，它的表面積是多少？',
            answer: '52',
            explanation: '(2×3 + 2×4 + 3×4) × 2 = (6 + 8 + 12) × 2 = 26 × 2 = 52',
            hint: '（長×寬 + 寬×高 + 長×高）× 2',
          },
        ],
        scientist: {
          name: '艾莉絲 · 孟羅',
          nameEn: 'Alice Stott',
          years: '1860–1940',
          field: '幾何學',
          bio: '愛爾蘭數學家布爾的女兒。雖然沒受過正式數學教育，但她對多面體和幾何學非常有天分，創造出許多四維多胞體的精美紙板模型。有時候手作與視覺化，才是理解空間立體概念的最強武器！',
        },
      },
      {
        id: 'g6-u12',
        slug: 'scale-scale',
        title: '放大圖縮圖與比例尺',
        emoji: '🔍',
        scenarioTitle: '尋寶地圖繪製家',
        scenarioDesc: '把廣大的草原畫進小小的地圖裡，比例尺是你轉換空間的魔法丈量工具！',
        curriculumCode: 'S-6-4',
        color: '#6de89a',
        concepts: [
          {
            title: '放大圖與縮圖',
            body: '把一個圖形依照固定比例放大或縮小。放大圖或縮圖與原圖相比：「對應角不變」、「對應邊跟著比例變長或變短」。',
          },
          {
            title: '什麼是比例尺？',
            body: '比例尺標示地圖上的距離與實際距離的比例。例如「1 : 100000」代表地圖上 1 公分，實際長度是 100000 公分（也就是 1 公里）。',
            formula: '\\text{比例尺} = \\frac{\\text{圖上距離}}{\\text{實際距離}}',
          },
          {
            title: '面積的變化與長度不一樣！',
            body: '注意！圖形放大 n 倍，長度會變 n 倍，但是「面積會變 n 的平方 (n×n) 倍」。',
            formula: '\\text{面積倍數} = (\\text{邊長倍數})^2',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '利用比例尺算實際距離',
            problem: '地圖上比例尺是 1 : 50000。地圖上 A 到 B 是 4公分，實際距離是幾公里？',
            steps: [
              { label: '先算實際的公分數', content: '4 × 50000 = 200000 公分' },
              { label: '轉換單位', content: '100 公分 = 1 公尺；1000 公尺 = 1 公里，所以 1 公里 = 100000 公分' },
              { label: '計算公里數', content: '200000 ÷ 100000 = 2' },
            ],
            answer: '實際距離是 2 公里',
          },
          {
            id: 'e2',
            title: '面積放大的倍數',
            problem: '把一個邊長 2 公分的正方形，畫成 3 倍大的放大圖，放大圖的面積是原圖的幾倍？',
            steps: [
              { label: '邊長放大 3 倍', content: '新邊長變成 2 × 3 = 6 公分' },
              { label: '計算原面積和新面積', content: '原面積 = 2×2=4；新面積 = 6×6=36' },
              { label: '比較倍數', content: '36 ÷ 4 = 9' },
            ],
            answer: '面積是原圖的 9 倍 (也就是 3的平方 倍)',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '圖面距離 1 公分，實際距離 500 公尺，比例尺怎麼表示？',
            options: ['1 : 500', '1 : 50000', '1 : 50', '1 : 5000'],
            answer: '1 : 50000',
            explanation: '500 公尺 = 50000 公分。所以是 1 : 50000',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '比例尺 1 : 1000，實際距離 30 公尺，在圖上是幾公分？',
            options: ['3', '30', '0.3', '300'],
            answer: '3',
            explanation: '30 公尺 = 3000 公分。3000 ÷ 1000 = 3 公分',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '圖形放大為原來的 5 倍，對應的角會變成幾倍？',
            answer: '1',
            explanation: '放大縮小不會改變角度的大小喔！',
            hint: '角的大小會變嗎？',
          },
        ],
        scientist: {
          name: '瑪麗安 · 米爾札哈尼',
          nameEn: 'Maryam Mirzakhani',
          years: '1977–2017',
          field: '幾何、拓樸學',
          bio: '出生於伊朗的數學家。2014年成為有史以來第一位（也是最年輕的）獲得有「數學界諾貝爾獎」之稱的「菲爾茲獎」的女性。她對理解曲面形狀與空間幾何的貢獻深遠，她的思考就像在無限廣闊的抽象空間中畫地圖。',
        },
      },
    ],
  },
  {
    id: 'g7',
    slug: 'grade-7',
    label: '國一',
    color: '#e89a6d',
    emoji: '🔬',
    units: [
      {
        id: 'g7-u1',
        slug: 'negative-numbers',
        title: '正負數與數線',
        emoji: '🌡️',
        scenarioTitle: '平均氣溫與海拔高度記錄員',
        scenarioDesc: '地圖上標示著高山與深海，溫度計顯示著酷暑與寒冬。要精準記錄比零還要小的數字，負數是你必備的工具！',
        curriculumCode: 'N-7-1',
        color: '#e89a6d',
        concepts: [
          {
            title: '認識負數與數線',
            body: '數線有三要素：原點、正向（通常向右為正）、單位長。在原點右邊是正數，左邊是負數。負數用來表示與正數相反意義的量，例如「零下溫度」或「海拔以下」。',
          },
          {
            title: '相反數與絕對值',
            body: '數線上與原點距離相等的兩個點，互為「相反數」（例如 5 與 -5）。而一個數到原點的距離叫做「絕對值」，因為是距離，所以絕對值永遠大於或等於零！',
            formula: '|-5| = 5, \\quad |3| = 3',
          },
          {
            title: '正負數的加減法',
            body: '正負數加減可以想像成在數線上走路：加上正數往右走，加上負數往左走；減去正數往左走，減去負數等於加上它的相反數（變成往右走！）。',
            formula: 'a - (-b) = a + b',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '溫度變化計算',
            problem: '今天清晨氣溫是 -3°C，到中午時上升了 8°C，到了半夜又下降了 6°C。半夜的氣溫是幾度？',
            steps: [
              { label: '清晨到中午', content: '-3 + 8 = 5 (中午是 5°C)' },
              { label: '中午到半夜', content: '5 - 6 = -1' },
            ],
            answer: '半夜的氣溫是 -1°C',
          },
          {
            id: 'e2',
            title: '絕對值的比較',
            problem: '絕對值小於 4 的整數有哪幾個？',
            steps: [
              { label: '理解題意', content: '找出到原點距離小於 4 的「整數點」。' },
              { label: '列出正數與零', content: '0, 1, 2, 3 (距離分別為 0, 1, 2, 3)' },
              { label: '列出負數', content: '-1, -2, -3 (距離分別為 1, 2, 3)' },
            ],
            answer: '共有 7 個：-3, -2, -1, 0, 1, 2, 3',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '在數線上，點 A 在 -3，點 B 在 5，請問 A 和 B 之間的距離是多少？',
            options: ['2', '8', '-8', '15'],
            answer: '8',
            explanation: '距離可以看作大數減小數：5 - (-3) = 5 + 3 = 8。或者計算兩者的絕對值距離。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '計算 (-12) - (-7) = ？',
            options: ['-19', '5', '-5', '19'],
            answer: '-5',
            explanation: '減去負數等於加上正數：-12 + 7 = -5。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '若某天文學家發現甲星的亮度星等為 -1.4，乙星為 2.1。請問哪一顆星比較亮？(星等越小越亮，請填甲或乙)',
            answer: '甲',
            explanation: '-1.4 小於 2.1，所以甲星的星等比較小，也就比較亮。',
            hint: '在數線上越左邊的數越小喔！',
          },
        ],
        scientist: {
          name: '王貞儀',
          nameEn: 'Wang Zhenyi',
          years: '1768–1797',
          field: '天文學、數學',
          bio: '清代傑出的女性科學家。在那個女性難以受教育的時代，她不僅研究數學、寫出《勾股三角解》等著作，更透過自製的模型正確解釋了月食的成因。對於座標、方位與數理有極高的敏銳度。',
        },
      },
      {
        id: 'g7-u2',
        slug: 'algebra-symbols',
        title: '代數符號與式子',
        emoji: '🔐',
        scenarioTitle: '密碼學解密專家',
        scenarioDesc: '情報局截獲了一段神秘的代碼。學習用代數「未知數 x」來代表隱藏的數字，寫出解密程式！',
        curriculumCode: 'A-7-1',
        color: '#c46de8',
        concepts: [
          {
            title: '什麼是代數？',
            body: '代數就是用「英文字母」（如 x, y, a, b）來代表未知的數字或變動的數量。因為它代表數字，所以它一樣可以進行加減乘除。',
          },
          {
            title: '代數的簡記規則',
            body: '數字和字母相乘時，乘號可以省略，而且數字要寫在字母前面（例如：x × 3 改寫成 3x）。如果字母前面的數字是 1 或 -1，通常 1 會省略（1x 寫成 x，-1x 寫成 -x）。',
          },
          {
            title: '同類項合併',
            body: '含有相同字母的項（例如 2x 和 5x）叫做「同類項」。同類項可以把係數相加減來合併把它化簡。但是帶有 x 的項不能跟純數字（常數項）合併！',
            formula: '2x + 5x = 7x, \\quad 3x + 4 \\text{ (無法合併)}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '列出代數式',
            problem: '小明的撲滿裡有 x 個 10 元硬幣和 5 個 50 元硬幣，小明共有多少元？',
            steps: [
              { label: '列出 10 元總額', content: 'x 個 10 元是 10 × x，簡記為 10x 元' },
              { label: '列出 50 元總額', content: '5 × 50 = 250 元' },
              { label: '相加', content: '總金額為 10x + 250 元' },
            ],
            answer: '10x + 250',
          },
          {
            id: 'e2',
            title: '化簡代數式',
            problem: '化簡 3(2x - 4) + 5x + 7',
            steps: [
              { label: '分配律展開', content: '3(2x) - 3(4) = 6x - 12' },
              { label: '整理式子', content: '(6x - 12) + 5x + 7' },
              { label: '同類項合併', content: '(6x + 5x) + (-12 + 7) = 11x - 5' },
            ],
            answer: '11x - 5',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '下列何者是「x 的 3 倍少 2」的代數式？',
            options: ['x + 3 - 2', '2x - 3', '3x - 2', '3(x - 2)'],
            answer: '3x - 2',
            explanation: 'x 的 3 倍是 3x，少 2 就是 3x - 2。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '化簡 -2(x - 3) 的結果是？',
            options: ['-2x - 6', '-2x - 3', '-2x + 3', '-2x + 6'],
            answer: '-2x + 6',
            explanation: '-2 乘進去：(-2)×x - (-2)×3 = -2x - (-6) = -2x + 6。注意負負得正！',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '化簡 4x - 7 - 2x + 10，結果前面的 x 係數是多少？',
            answer: '2',
            explanation: '4x - 2x = 2x；-7 + 10 = +3。簡化結果為 2x + 3。x 前面的係數是 2。',
            hint: '先把含有 x 的項合併，常數項合併',
          },
        ],
        scientist: {
          name: '葛麗絲 · 霍普',
          nameEn: 'Grace Hopper',
          years: '1906–1992',
          field: '電腦科學',
          bio: '美國電腦科學家，也是海軍准將。她是第一個發現電腦「Bug(蟲子)」的人！她認為我們不該只用二進位數字跟電腦溝通，寫出了編譯器，用類似英文的代碼指令（也就是變數和代數式）來寫程式，這改變了整個軟體世界！',
        },
      },
      {
        id: 'g7-u3',
        slug: 'linear-equation',
        title: '一元一次方程式',
        emoji: '🛒',
        scenarioTitle: '週末市集財務長',
        scenarioDesc: '你在週末市集幫忙結帳，但進貨單上的水蜜桃單價被弄髒了！運用等量公理把 x 解出來吧！',
        curriculumCode: 'A-7-2',
        color: '#6db0e8',
        concepts: [
          {
            title: '什麼是方程式？',
            body: '含有「等號」和「未知數」的算式就是方程式。解方程式的目的，就是要找出未知數等於多少，才能讓等號兩邊平衡！',
          },
          {
            title: '等量公理',
            body: '方程式就像一個天平，只要你在等號的兩邊「同時」加上、減去、乘以或除以同一個數（除數不能為零），天平依然會保持平衡。',
          },
          {
            title: '移項法則',
            body: '把數字或代數項從等號一邊移到另一邊時，運算符號要改變：加變減，減變加，乘變除，除變乘。這其實就是等量公理的捷徑！',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '解基本方程式',
            problem: '解方程式：3x - 5 = 10',
            steps: [
              { label: '移項', content: '把 -5 移到等號右邊變成 +5：3x = 10 + 5' },
              { label: '整理', content: '3x = 15' },
              { label: '解出 x', content: '等號兩邊同除以 3：x = 15 ÷ 3 = 5' },
            ],
            answer: 'x = 5',
          },
          {
            id: 'e2',
            title: '兩邊都有未知數',
            problem: '解方程式：5x + 4 = 2x - 8',
            steps: [
              { label: '把未知數移到同一邊', content: '將 2x 移到左邊：5x - 2x + 4 = -8' },
              { label: '把常數移到另一邊', content: '將 +4 移到右邊：3x = -8 - 4' },
              { label: '整理並解出 x', content: '3x = -12。兩邊同除以 3：x = -4' },
            ],
            answer: 'x = -4',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '解方程式 2x + 7 = 19，請問 x 是多少？',
            options: ['5', '6', '12', '13'],
            answer: '6',
            explanation: '2x = 19 - 7 = 12。x = 12 ÷ 2 = 6。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '「小美的年紀的三倍減 2 等於 25 歲」，請問小美幾歲？',
            options: ['7', '8', '9', '10'],
            answer: '9',
            explanation: '設小美 x 歲，3x - 2 = 25。3x = 27，x = 9。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '解方程式：-4x = 20，x 是多少？',
            answer: '-5',
            explanation: '等號兩邊同除以 -4：x = 20 ÷ (-4) = -5。',
            hint: '小心正負號，正數除以負數是負數。',
          },
        ],
        scientist: {
          name: '莎拉 · 弗蘭納里',
          nameEn: 'Sarah Flannery',
          years: '1982–',
          field: '密碼學',
          bio: '愛爾蘭數學家。在年僅 16 歲時，她設計出了「Cayley–Purser 演算法」，這是一個基於矩陣數學的新型密碼系統，速度甚至比標準加密演算法還快。解方程式與密碼破解，在核心數學邏輯上是一脈相承的！',
        },
      },
      {
        id: 'g7-u4',
        slug: 'proportion',
        title: '比例與正反比',
        emoji: '🗺️',
        scenarioTitle: '地圖尋寶與縮放設計師',
        scenarioDesc: '繪製藏寶圖時，距離和時間要如何等比例轉換？了解正比與反比，你就能看透萬物的數學關聯！',
        curriculumCode: 'N-7-3',
        color: '#f5b641',
        concepts: [
          {
            title: '比例式與交叉相乘',
            body: '當兩個比相等時，可以寫成比例式 a : b = c : d。比例式有一個重要魔法：「內項乘積 = 外項乘積」，也就是 b × c = a × d。',
            formula: 'a : b = c : d \\implies ad = bc',
          },
          {
            title: '正比',
            body: '如果兩個變數 x 和 y，當 x 變成 2 倍時 y 也變成 2 倍，而且 x 除以 y 永遠是一個固定的數字，我們就說 x 和 y 呈「正比」。',
            formula: 'y = kx \\quad \\text{(其中 k 為常數)}',
          },
          {
            title: '反比',
            body: '如果當 x 變成 2 倍時，y 卻變成一半，而且 x 乘以 y 永遠是一個固定的數字，我們就說 x 和 y 呈「反比」。例如固定的距離，速率越快，時間越短！',
            formula: 'x \\times y = k \\quad \\text{(其中 k 為常數)}',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '比例式的計算',
            problem: '若 3 : x = 5 : 15，求 x 是多少？',
            steps: [
              { label: '使用內項乘外項', content: '外項相乘：3 × 15 = 45。內項相乘：x × 5 = 5x' },
              { label: '列出方程式', content: '5x = 45' },
              { label: '解出 x', content: 'x = 45 ÷ 5 = 9' },
            ],
            answer: 'x = 9',
          },
          {
            id: 'e2',
            title: '判斷正比或反比',
            problem: '一堆面積是 36 平方公分的長方形，當長是 x 時，寬是 y。請問 x 和 y 是正比還是反比？',
            steps: [
              { label: '找關係', content: '長方形面積 = 長 × 寬，所以 x × y = 36' },
              { label: '判斷', content: '因為 x 與 y 的「乘積」是個固定值 36，符合反比的定義。' },
            ],
            answer: '反比',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '若 x : 4 = 6 : 8，則 x 等於？',
            options: ['2', '3', '12', '48'],
            answer: '3',
            explanation: '內項乘以外項：4 × 6 = 8x → 24 = 8x → x = 3。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '購買每瓶 20 元的飲料，買 x 瓶要付 y 元。請問 x 與 y 的關係是？',
            options: ['正比', '反比', '沒有關係', '不成比例'],
            answer: '正比',
            explanation: '花費金額 = 單價 × 數量，y = 20x，符合 y = kx 的形式，因此成正比。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '完成同樣一份工作，人數(x)如果加倍，需要的時間(y)會變為原本的幾分之幾？(請填寫分數如 1/2)',
            answer: '1/2',
            explanation: '總工作量固定 (x × y = k)，因此人數變 2 倍時，時間就會變成 1/2 倍，這就是反比。',
            hint: '人越多，花的時間越少還是越多？',
          },
        ],
        scientist: {
          name: '凱薩琳 · 鮑蔓',
          nameEn: 'Katie Bouman',
          years: '1989–',
          field: '資訊工程、物理學',
          bio: '美國電腦科學家。她開發了名為 CHIRP 的演算法，利用地球上八座射電望遠鏡連線測量的龐大數據，填補觀測時的微小細節，最終成功構建了人類史上第一張「黑洞照片」。精準掌握龐大數據與真實世界的比例映射，創造了奇蹟。',
        },
      },
      {
        id: 'g7-u5',
        slug: 'parallel-lines',
        title: '平行線與角',
        emoji: '🏛️',
        scenarioTitle: '現代建築設計實習生',
        scenarioDesc: '建築的鋼骨交錯、光影的角度，全依賴平行與截角的完美規劃。學會判斷截角關係，確認設計的精確性！',
        curriculumCode: 'S-7-1',
        color: '#3ecfb2',
        concepts: [
          {
            title: '角的關係：對頂角與互補角',
            body: '兩條直線相交，相對的兩個角叫做「對頂角」，且度數會相等！而在同一條直線上相鄰的兩個角，加起來一定會是一平角也就是「180度」，這叫互補角。',
          },
          {
            title: '平行與截角（同位、內錯、同側）',
            body: '兩條平行線被另一條直線切過時，會產生八個角。位置相同的叫「同位角」（相等）；在平行線內且在截線兩側的叫「內錯角」（相等）；在截線同側內部的叫「同側內角」（互補，加起來180度）。',
          },
          {
            title: '平行線的判定',
            body: '反過來說，如果我們發現同位角相等、或是內錯角相等、或是同側內角互補，我們就能大聲宣布：「這兩條線互相平行！」',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '計算對頂角與互補角',
            problem: '直線 AB 被截斷，∠1 與 ∠2 是相鄰的平角，∠1 是 50度。請問 ∠2 和 ∠1的對頂角分別是多少度？',
            steps: [
              { label: '互補角計算', content: '∠1 + ∠2 = 180°，所以 ∠2 = 180° - 50° = 130°' },
              { label: '對頂角判斷', content: '對頂角與 ∠1 相等，所以也是 50°' },
            ],
            answer: '∠2 是 130度，對頂角是 50度',
          },
          {
            id: 'e2',
            title: '同位角的應用',
            problem: '兩條平行線被截斷，如果其中一個內錯角是 65°，那麼和它同側的內角是多少度？',
            steps: [
              { label: '回想性質', content: '平行線的內錯角相等，而且同側內角互補 (加起來 180°)。' },
              { label: '計算', content: '與這個角同側的內角 = 180° - 65° = 115°' },
            ],
            answer: '同側內角為 115度',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '已知 L1 // L2，且被截線截過，∠A 與 ∠B 是內錯角。若 ∠A = 70°，請問 ∠B 是？',
            options: ['110°', '70°', '20°', '90°'],
            answer: '70°',
            explanation: '兩條平行線被一直線所截，內錯角相等，所以 ∠B = ∠A = 70°。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '若 ∠1 與 ∠2 是對頂角，且 ∠1 = 45°，則 ∠2 是？',
            options: ['135°', '90°', '45°', '無法判定'],
            answer: '45°',
            explanation: '對頂角一定相等。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '兩平行線被截斷，同側內角的和固定是幾度？(請填數字)',
            answer: '180',
            explanation: '平行線的同側內角互補，也就是相加等於 180 度。',
            hint: '是互餘還是互補呢？',
          },
        ],
        scientist: {
          name: '札哈 · 哈蒂',
          nameEn: 'Zaha Hadid',
          years: '1950–2016',
          field: '建築學',
          bio: '伊拉克裔英國建築師，第一位獲得普立茲克建築獎的女性。她的大膽設計被稱為「解構主義」，擅長運用複雜的幾何曲線、銳角與傾斜的平面，打破了建築必須直角與平行的傳統。要打破幾何規則，首先必須精通幾何！',
        },
      },
      {
        id: 'g7-u6',
        slug: 'triangle-congruence',
        title: '三角形全等',
        emoji: '🧩',
        scenarioTitle: '幾何鑲嵌藝術家',
        scenarioDesc: '要創造一幅完美的馬賽克拼磚藝術，你必須確保拼圖完美無瑕的重疊！學習 5 種全等魔法。',
        curriculumCode: 'S-7-4',
        color: '#e86da9',
        concepts: [
          {
            title: '什麼是全等？',
            body: '如果兩個多邊形不論怎麼平移、旋轉或翻轉，都能完美疊合在一起，我們就稱它們「全等」。對應角會相等，對應邊也會等長。符號寫作 ≅。',
          },
          {
            title: '三角形的五大常見全等性質',
            body: '不需要量完所有邊和角！只需滿足這五種之一即可：SSS (三邊等長)、SAS (兩邊和夾角)、ASA (兩角和夾邊)、AAS (兩角和一對應邊)、RHS (直角、斜邊和一股)。',
          },
          {
            title: '注意 SSA 不能保證全等！',
            body: '如果給定兩邊和其中一個非夾角 (SSA)，有可能畫出兩種完全不同的三角形，所以它不能作為全等性質喔。',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '判斷全等性質',
            problem: '有兩個三角形，甲三角形邊長為 3, 4, 5；乙三角形邊長也是 3, 4, 5。它們全等嗎？用什麼性質？',
            steps: [
              { label: '觀察條件', content: '三個對應邊都等長。' },
              { label: '對應性質', content: '三邊 (Side-Side-Side) 皆相等，符合 SSS 全等。' },
            ],
            answer: '全等，根據 SSS 全等性質',
          },
          {
            id: 'e2',
            title: 'SAS 判斷',
            problem: '△ABC 和 △DEF 中，若 AB=DE=5，BC=EF=7，且 ∠B=∠E=60°。它們全等嗎？',
            steps: [
              { label: '比對條件', content: '兩對邊相等，且夾在這兩邊中間的角（夾角）也相等。' },
              { label: '對應性質', content: '符合 SAS (邊-角-邊) 全等。' },
            ],
            answer: '全等，根據 SAS 全等性質',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '下列何者「不是」三角形的全等性質？',
            options: ['SAS', 'ASA', 'SSA', 'RHS'],
            answer: 'SSA',
            explanation: 'SSA (邊-邊-角且非夾角) 無法保證唯一形狀，所以不是全等性質。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '若已知兩個直角三角形的「斜邊」與「一股」相等，可推論其全等的性質為？',
            options: ['AAS', 'RHS', 'SSS', 'ASA'],
            answer: 'RHS',
            explanation: 'Right angle (直角)、Hypotenuse (斜邊)、Side (股)。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '若有兩個同為正三角形，且邊長都是 10 公分，它們一定全等。請問這最符合哪一個全等性質簡寫？（例如：SAS）',
            answer: 'SSS',
            explanation: '三個邊長都已知為 10 公分，因此對應三邊相等，符合 SSS (邊邊邊) 性質。',
            hint: '這三個條件都是「邊」喔',
          },
        ],
        scientist: {
          name: '瑪喬麗 · 賴斯',
          nameEn: 'Marjorie Rice',
          years: '1923–2017',
          field: '幾何學',
          bio: '她是一位普通的美國家庭主婦，沒有受過高等數學教育。但她對「鑲嵌」（能把平面完美鋪滿的形狀）感到著迷，透過自學，發現了四種前所未見的「完美鑲嵌五邊形」！展現出對幾何全等變換驚人的直覺。',
        },
      },
    ],
  },
  {
    id: 'g8',
    slug: 'grade-8',
    label: '國二',
    color: '#6db0e8',
    emoji: '⚗️',
    units: [
      {
        id: 'g8-u1',
        slug: 'polynomials',
        title: '乘法公式與多項式',
        emoji: '✂️',
        scenarioTitle: '拼布藝術的面積魔法',
        scenarioDesc: '裁切不同大小的方形拼布時，面積的計算隱藏著乘法公式的秘密。學會拆解圖形，就能掌握代數展開的魔法！',
        curriculumCode: 'A-8-1',
        color: '#c46de8',
        concepts: [
          {
            title: '和的平方公式',
            body: '想像一個邊長為 (a+b) 的大正方形，它可以切成一個邊長 a 的正方形、一個邊長 b 的正方形，以及兩個長寬為 a 和 b 的長方形。',
            formula: '(a + b)^2 = a^2 + 2ab + b^2',
          },
          {
            title: '差的平方公式',
            body: '如果是邊長為 (a-b) 的正方形，面積就是大正方形 a 減掉邊邊的長方形，加上多減去的角落！',
            formula: '(a - b)^2 = a^2 - 2ab + b^2',
          },
          {
            title: '平方差公式',
            body: '長方形 (a+b) 乘以 (a-b) 剛好等於兩個正方形面積的相減。這在快速心算時超級好用！',
            formula: '(a + b)(a - b) = a^2 - b^2',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '利用乘法公式心算',
            problem: '不使用直式乘法，請計算 102 的平方。',
            steps: [
              { label: '拆分為和', content: '將 102 看成 (100 + 2)' },
              { label: '帶入公式', content: '(100 + 2)² = 100² + 2 × 100 × 2 + 2²' },
              { label: '計算結果', content: '10000 + 400 + 4 = 10404' },
            ],
            answer: '10404',
          },
          {
            id: 'e2',
            title: '平方差的應用',
            problem: '計算 98 × 102 的值。',
            steps: [
              { label: '改寫式子', content: '98 可以寫成 (100 - 2)，102 可以寫成 (100 + 2)' },
              { label: '用平方差公式', content: '(100 - 2)(100 + 2) = 100² - 2²' },
              { label: '計算結果', content: '10000 - 4 = 9996' },
            ],
            answer: '9996',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '展開 (2x + 3)^2 的結果為？',
            options: ['4x² + 9', '4x² + 6x + 9', '4x² + 12x + 9', '2x² + 12x + 9'],
            answer: '4x² + 12x + 9',
            explanation: '(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '若等式 a² - b² = 20，且 (a + b) = 10，請問 (a - b) 等於多少？',
            options: ['10', '2', '5', '200'],
            answer: '2',
            explanation: '因為 a² - b² = (a+b)(a-b)，所以 20 = 10 × (a-b)，可得 a-b = 2。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '利用平方差計算：45² - 5² = ？(請填數字)',
            answer: '2000',
            explanation: '45² - 5² = (45+5)(45-5) = 50 × 40 = 2000。是不是比慢慢乘快很多！',
            hint: '套用 (a+b)(a-b) 公式來算',
          },
        ],
        scientist: {
          name: '索菲亞 · 柯瓦列夫斯卡婭',
          nameEn: 'Sofya Kovalevskaya',
          years: '1850–1891',
          field: '數學',
          bio: '俄國數學家。在不允許女性讀大學的時代，她透過假結婚出國，憑藉驚人的毅力取得了數學博士學位，成為現代歐洲第一位女性數學教授。她對偏微分方程（像多項式的高級版）和剛體旋轉的研究留下了不朽的定理。',
        },
      },
      {
        id: 'g8-u2',
        slug: 'square-roots',
        title: '平方根與畢氏定理',
        emoji: '🏙️',
        scenarioTitle: '城市對角線與建築測量',
        scenarioDesc: '在都市裡，兩點之間最短的距離不是沿著街道走，而是穿越街區的對角線！運用直角三角形與開根號，找出這條捷徑！',
        curriculumCode: 'S-8-4',
        color: '#6db0e8',
        concepts: [
          {
            title: '什麼是平方根？',
            body: '如果一個正方形的面積是 25，它的邊長就是 5。我們說 5 是 25 的「平方根」。符號是 √ (讀作 radical 或 root)。',
            formula: '\\sqrt{25} = 5, \\quad \\sqrt{a^2} = a \\text{ (當 a>0)}',
          },
          {
            title: '畢氏定理 (勾股定理)',
            body: '在所有的直角三角形中，兩條短邊（股）的平方加起來，一定會等於最長邊（斜邊）的平方！這是在兩千多年前就被發現的神奇定律。',
            formula: 'a^2 + b^2 = c^2',
          },
          {
            title: '常用的畢氏數',
            body: '有幾組整數非常常出現在直角三角形中，叫做「畢氏數」。背起來可以幫你秒殺很多題目喔！最經典的就是 3、4、5 (因為 3² + 4² = 5²)，還有 5、12、13。',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '求斜邊長',
            problem: '有一面直角牆壁，底寬為 6 公尺，高度為 8 公尺。若要架設一個從頂端延伸到底端邊緣的溜滑梯，溜滑梯的長度是多少公尺？',
            steps: [
              { label: '列出畢氏定理公式', content: '兩股平方和 = 斜邊平方：6² + 8² = c²' },
              { label: '計算數值', content: '36 + 64 = 100' },
              { label: '求平方根', content: 'c² = 100，所以 c = √100 = 10' },
            ],
            answer: '10 公尺',
          },
          {
            id: 'e2',
            title: '求股長',
            problem: '一個直角三角形的斜邊長為 13，其中一股長為 5，求另一股的長度。',
            steps: [
              { label: '列出公式', content: 'a² + 5² = 13²' },
              { label: '計算數值', content: 'a² + 25 = 169' },
              { label: '移項並求出平方根', content: 'a² = 144，所以 a = 12' },
            ],
            answer: '12',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '若直角三角形的兩股長分別為 5 和 12，則斜邊長為？',
            options: ['13', '15', '17', '60'],
            answer: '13',
            explanation: '5² + 12² = 25 + 144 = 169。√169 = 13。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '下列哪一組數字「不是」直角三角形的邊長 (畢氏數)？',
            options: ['3, 4, 5', '6, 8, 10', '7, 8, 9', '9, 12, 15'],
            answer: '7, 8, 9',
            explanation: '7² + 8² = 49 + 64 = 113，不等於 9² (81)。(其餘選項皆為 3,4,5 的倍數)。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '計算 √81 + √49 = ？',
            answer: '16',
            explanation: '√81 = 9，√49 = 7。9 + 7 = 16。',
            hint: '先分別求出兩個平方根再相加',
          },
        ],
        scientist: {
          name: '夏特萊侯爵夫人',
          nameEn: 'Émilie du Châtelet',
          years: '1706–1749',
          field: '數學、物理學',
          bio: '法國自然哲學家與物理學家。她將牛頓的鉅著《自然哲學的數學原理》翻譯成法文，並在此之中推導了「動能與速度平方成正比」(E ∝ v²) 的概念。數學中的平方關係 (如同畢氏定理與平方根) 是她解釋物理世界宇宙法則的利器。',
        },
      },
      {
        id: 'g8-u3',
        slug: 'factorization',
        title: '因式分解',
        emoji: '🔑',
        scenarioTitle: '金庫密碼因子解鎖',
        scenarioDesc: '面對龐大複雜的多項式密碼鎖，我們需要使用「提公因式」和「十字交乘」技巧，把它分解成許多小因子來破解！',
        curriculumCode: 'A-8-2',
        color: '#f5b641',
        concepts: [
          {
            title: '什麼是因式分解？',
            body: '因式分解就是多項式乘法的「倒轉」。就像把 15 拆成 3×5；我們也要把 x² + 5x + 6，拆回 (x + 2)(x + 3) 的形式。',
          },
          {
            title: '找公因式提取',
            body: '最基本的分解法：觀察每一項有沒有「共同的字母或數字」。把它們像抽屜一樣提出來，放到括號外面！',
            formula: 'ax + ay = a(x + y)',
          },
          {
            title: '十字交乘法',
            body: '用來分解二次三項式 (ax² + bx + c) 非常管用。把二次項猜開，把常數項猜開，交叉相乘後加起來要是中間的項。',
            formula: 'x^2 + 5x + 6 = (x + 2)(x + 3)',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '提公因式',
            problem: '因式分解：6x² + 9x',
            steps: [
              { label: '尋找數字公因數', content: '6 和 9 的最大公因數是 3' },
              { label: '尋找字母公因式', content: 'x² 和 x 都有 x' },
              { label: '提出 3x', content: '6x² + 9x = 3x(2x) + 3x(3) = 3x(2x + 3)' },
            ],
            answer: '3x(2x + 3)',
          },
          {
            id: 'e2',
            title: '十字交乘法',
            problem: '因式分解：x² + 7x + 10',
            steps: [
              { label: '分解頭尾', content: 'x² 可以拆成 x 和 x。10 可以拆成 (1×10) 或 (2×5)' },
              { label: '交叉相乘檢驗', content: '若選 2 和 5：x×5 + x×2 = 7x，剛好符合中間項！' },
              { label: '寫出答案', content: '(x + 2)(x + 5)' },
            ],
            answer: '(x + 2)(x + 5)',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '若要因式分解 x² - x - 12，結果是？',
            options: ['(x - 3)(x + 4)', '(x + 3)(x - 4)', '(x - 2)(x + 6)', '(x + 2)(x - 6)'],
            answer: '(x + 3)(x - 4)',
            explanation: '十字交乘：常數項為 -12，相加為 -1 (中間項)。只有 +3 和 -4 符合：3 × (-4) = -12，3 + (-4) = -1。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '計算並因式分解：3x² - 12x。下列何者提取正確？',
            options: ['x(3x - 12)', '3(x² - 4x)', '3x(x - 4)', '3x(x - 12)'],
            answer: '3x(x - 4)',
            explanation: '數字最高可提 3，字母可提 x。所以提出 3x。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '判斷題：利用平方差公式，因式分解 x² - 25 的結果其中一個括號是 (x + 5)，另一個括號是什麼？(請填括號內內容，例如 x-1)',
            answer: 'x-5',
            explanation: 'x² - 25 = x² - 5² = (x - 5)(x + 5)。另一個部分就是 x-5 囉。',
            hint: '套用前面學過的平方差公式倒轉',
          },
        ],
        scientist: {
          name: '瓊 · 克拉克',
          nameEn: 'Joan Clarke',
          years: '1917–1996',
          field: '密碼學',
          bio: '英國數學家與密碼分析師。二戰期間，她在布萊切利園與艾倫·圖靈共事，是恩尼格瑪 (Enigma) 密碼機破解團隊中唯一的女性核心成員。從繁複的訊號中「提取出關鍵的破綻」(如同因式分解)，她為二戰的提早結束立下了不可磨滅的功勞。',
        },
      },
      {
        id: 'g8-u4',
        slug: 'sys-of-equations',
        title: '聯立方程式',
        emoji: '🐾',
        scenarioTitle: '寵物店的雙重謎題',
        scenarioDesc: '經典謎題「雞兔同籠」中，要怎麼只看頭和腳的數量，就知道有幾隻鳥幾隻兔子？學會二元一次聯立方程式！',
        curriculumCode: 'A-7-4',
        color: '#e86da9',
        concepts: [
          {
            title: '為何需要二元？',
            body: '當我們同時有兩個未知的數量（例如貓和鳥），我們可以設兩個代數（如 x 和 y）。但兩個未知數需要「兩條獨立的線索（方程式）」才能解開！',
          },
          {
            title: '代入消去法',
            body: '這是一種策略：從第一條方程式中推導出 x 等於「一長串含有 y 的東西」，然後把這包東西「代入」第二條方程式，這樣 x 就消失了！',
          },
          {
            title: '加減消去法',
            body: '這是另一種策略：把兩條方程式排在上下，如果 x (或 y) 的數字長得一樣或互為相反數，我們就把這兩條式子相加或相減，一瞬間某個未知數就被消去了！',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '經典雞兔同籠',
            problem: '牧場裡有雞和兔子。數一數共有 10 個頭，26 隻腳。請問雞和兔各幾隻？',
            steps: [
              { label: '列方程式', content: '設雞 x 隻，兔 y 隻。頭：x + y = 10。腳：2x + 4y = 26。' },
              { label: '調整式子', content: '將第一式乘 2：2x + 2y = 20' },
              { label: '加減消去', content: '第二式減掉新式子：(2x+4y) - (2x+2y) = 26 - 20 → 2y = 6' },
              { label: '解出答案', content: '得出 y = 3 (兔)。代回第一式 x + 3 = 10，得 x = 7 (雞)。' },
            ],
            answer: '雞 7 隻，兔子 3 隻',
          },
          {
            id: 'e2',
            title: '代入消去法',
            problem: '已知 y = 3x - 2，且 x + y = 14。求 x 和 y。',
            steps: [
              { label: '代入', content: '把第一式的 y，整個塞進第二式：x + (3x - 2) = 14' },
              { label: '解 x', content: '4x - 2 = 14 → 4x = 16 → x = 4' },
              { label: '代回求 y', content: '把 x = 4 代回第一式：y = 3(4) - 2 = 12 - 2 = 10' },
            ],
            answer: 'x = 4, y = 10',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '要解聯立方程式 { x+y=5, x-y=1 }。若將兩式相加，可以得到什麼？',
            options: ['2y = 6', '2x = 6', 'x = 4', 'y = 4'],
            answer: '2x = 6',
            explanation: '左邊相加：(x+x) + (y-y) = 2x。右邊相加：5+1 = 6。因此 2x = 6。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '去文具店買 2 支筆和 3 本筆記本共 130 元；若買 1 支筆和 3 本筆記本共 110 元。一支筆多少元？',
            options: ['20', '30', '40', '50'],
            answer: '20',
            explanation: '看著兩句話，第二句比第一句少買了一支筆，花費少了 130 - 110 = 20 元。所以筆一支 20 元。這就是直覺版的加減消去！',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '若 2x + y = 10 且 x = 3，請利用代入法求出 y = ？',
            answer: '4',
            explanation: '把 x=3 代入：2(3) + y = 10 → 6 + y = 10 → y = 4。',
            hint: '把 3 塞到 x 的位置',
          },
        ],
        scientist: {
          name: '王小雲',
          nameEn: 'Wang Xiaoyun',
          years: '1966–',
          field: '密碼學',
          bio: '中國密碼學家。在全世界都堅信 MD5 和 SHA-1 這兩種國際公認的密碼雜湊函數「絕對不可能被破解」時，她提出了劃時代的碰撞方法將其破解，震驚了國際密碼學界。要解開由成千上萬條聯立式組成的密碼鎖，需要極度敏銳的數學直覺。',
        },
      },
      {
        id: 'g8-u5',
        slug: 'similar-figures',
        title: '幾何相似形',
        emoji: '📷',
        scenarioTitle: '攝影師的底片縮放魔法',
        scenarioDesc: '把照片放大與縮小時，照片裡每個人的形狀不變，只是尺寸改變了。這就是幾何學裡的「相似」魔力！',
        curriculumCode: 'S-8-5',
        color: '#3ecfb2',
        concepts: [
          {
            title: '全等與相似的差別',
            body: '全等（≅）代表兩個圖形「形狀」與「大小」完全一模一樣。相似（~）代表兩個圖形「形狀」一模一樣，但是「大小」可能做了等比例的縮放！',
          },
          {
            title: '相似三角形的判定',
            body: '只要兩個三角形的對應邊成比例 (SSS相似)、對應的兩個角相等 (AA相似)，或兩邊成比例且夾角相等 (SAS相似)，它們必定相似！',
          },
          {
            title: '面積比的秘密',
            body: '如果兩個圖形相似，且長度放大為原來的 n 倍。則其「面積」會放大變為原來的 n² 倍喔！',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '尋找對應邊',
            problem: '△ABC 與 △DEF 相似 (由 AA 相似)。已知 AB = 4, BC = 6；相對應的邊 DE = 10，請問 EF 等於多少？',
            steps: [
              { label: '列出比例關係', content: '因為相似，所以短邊與長邊在兩個三角形中的比例必須相同： AB/DE = BC/EF' },
              { label: '帶入數字', content: '4/10 = 6/x' },
              { label: '交叉相乘解 x', content: '4x = 60，x = 15' },
            ],
            answer: '15',
          },
          {
            id: 'e2',
            title: '面積倍數關係',
            problem: '小圓的半徑是 3 公分，大圓的半徑是 9 公分。請問大圓的面積是小圓的幾倍？',
            steps: [
              { label: '判斷邊長放大的倍數', content: '大圓半徑是小圓的：9 ÷ 3 = 3 倍' },
              { label: '推導面積倍數', content: '根據相似形原則，邊長為 3 倍，則面積倍數為 3 的平方 = 9 倍。' },
            ],
            answer: '9 倍',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '判斷這兩個三角形是否相似：甲三角形的三內角為 50°, 60°, 70°。乙三角形的三內角為 60°, 70°, 50°。',
            options: ['是', '否', '條件不足'],
            answer: '是',
            explanation: '對應的三個角相等，滿足 AA (或 AAA) 相似性質。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '若甲、乙兩相似多邊形的邊長比例為 2 : 5，則其面積比例為？',
            options: ['2 : 5', '4 : 10', '4 : 25', '8 : 125'],
            answer: '4 : 25',
            explanation: '面積比例會是邊界比例的「平方比」。所以是 2² : 5² = 4 : 25。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '有一個長方形，長寬分別為 6 和 4。要畫一個和它相似的長方形，已知新長方形的寬為 10，請問新長方形的長是多少？',
            answer: '15',
            explanation: '長/寬的比例必須維持一致。6 / 4 = x / 10。解得 4x = 60，x = 15。',
            hint: '用比例式：原長/原寬 = 新長/新寬',
          },
        ],
        scientist: {
          name: '瑪格麗特 · 漢彌爾頓',
          nameEn: 'Margaret Hamilton',
          years: '1936–',
          field: '軟體工程',
          bio: '美國電腦科學家。她為阿波羅登月計畫撰寫了極其關鍵的機載飛行軟體。系統中強大的防錯設計，讓登月小艇在著陸的緊急讀秒中沒有當機。把紙上的程式碼正確「放大」並映射到現實的宇宙中，沒有她的編碼，人類可能無法踏上月球。',
        },
      },
      {
        id: 'g8-u6',
        slug: 'statistics',
        title: '資料與統計資料',
        emoji: '🎲',
        scenarioTitle: '桌遊設計師與勝率分析',
        scenarioDesc: '這款遊戲真的公平嗎？透過分析大量的骰子點數與玩家勝率，我們能發掘潛藏在資料背後的真相！',
        curriculumCode: 'D-8-1',
        color: '#e89a6d',
        concepts: [
          {
            title: '資料的集中趨勢',
            body: '為了用「一個數字」代表一整群資料的長相，我們有三種武器：平均數(全部加起來除以個數)、中位數(將資料按大小排列，最中間的那個數)、眾數(出現最多次的數)。',
          },
          {
            title: '極端值的影響',
            body: '如果全班考試都在 80 分，只有一個人考 0 分，這個「極端值」會把平均分數拉得很低！這時候看「中位數」反而更能代表多數人的真實狀況。',
          },
          {
            title: '常見的統計圖表',
            body: '根據資料類型，我們可以繪製 直方圖(連續資料)、長條圖(分類資料)、折線圖(時間變化)、圓餅圖(百分比分佈)。圖表能讓數據一眼看穿。',
          },
        ],
        examples: [
          {
            id: 'e1',
            title: '求中位數',
            problem: '求這組資料的中位數：24, 15, 30, 28, 12',
            steps: [
              { label: '從小到大排序', content: '12, 15, 24, 28, 30' },
              { label: '找出正中間的數字', content: '共有 5 個數字，正中間是第三個數字。' },
            ],
            answer: '24',
          },
          {
            id: 'e2',
            title: '中位數：偶數筆資料',
            problem: '求這組資料的中位數：3, 9, 4, 7, 10, 6',
            steps: [
              { label: '從小到大排序', content: '3, 4, 6, 7, 9, 10' },
              { label: '找出正中間', content: '有 6 個數字（偶數），正中間落在第 3 與第 4 個數字之間。' },
              { label: '求平均', content: '(6 + 7) ÷ 2 = 6.5' },
            ],
            answer: '6.5',
          },
        ],
        quiz: [
          {
            id: 'q1',
            type: 'choice',
            question: '某店五天的營業額（單位：萬元）為：2, 3, 2, 4, 14。請問哪一項數值最受到極端值 (14萬) 的影響？',
            options: ['平均數', '中位數', '眾數', '三者都一樣'],
            answer: '平均數',
            explanation: '極端值會大幅拉高總和，導致平均數偏離常態；但中位數（這組資料排好為 2, 2, 3, 4, 14，中位數是 3）不受極端值影響。',
          },
          {
            id: 'q2',
            type: 'choice',
            question: '一家冰淇淋店想要知道「哪一種口味最受歡迎」以決定進貨量，請問店長最應該參考哪個統計量？',
            options: ['平均數', '中位數', '眾數', '極端值'],
            answer: '眾數',
            explanation: '眾數是「出現最多次」的選項，最適合用來找出最熱門的商品分類。',
          },
          {
            id: 'q3',
            type: 'fill',
            question: '計算這組數字的平均數：8, 10, 12, 14, 16。(請填寫數字)',
            answer: '12',
            explanation: '總和 8+10+12+14+16 = 60。 60 ÷ 5 = 12。這組資料呈現等差性質，平均數剛好也是它的中位數！',
            hint: '全部加起來除以 個數',
          },
        ],
        scientist: {
          name: '葛楚德 · 考克斯',
          nameEn: 'Gertrude Cox',
          years: '1900–1978',
          field: '統計學',
          bio: '美國統計學家，也是實驗設計領域的先驅。1940 年代，她創立了世界上最早的幾個統計學系之一。她致力於將理論統計學轉化為解決農業、生物學等現實問題的實用工具。資料若無正確的統計設計，只是雜亂無章的數字！',
        },
      },
    ],
  },
  {
    id: 'g9',
    slug: 'grade-9',
    label: '國三',
    color: '#6de89a',
    emoji: '🚀',
    units: [],
  },
];

export function getGradeBySlug(slug: string) {
  return grades.find(g => g.slug === slug);
}
export function getUnitBySlug(gradeSlug: string, unitSlug: string) {
  const grade = getGradeBySlug(gradeSlug);
  return grade?.units.find(u => u.slug === unitSlug);
}

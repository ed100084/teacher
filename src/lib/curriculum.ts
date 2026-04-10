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
    ],
  },
  {
    id: 'g7',
    slug: 'grade-7',
    label: '國一',
    color: '#e89a6d',
    emoji: '🔬',
    units: [],
  },
  {
    id: 'g8',
    slug: 'grade-8',
    label: '國二',
    color: '#6db0e8',
    emoji: '⚗️',
    units: [],
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

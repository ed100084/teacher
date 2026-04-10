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

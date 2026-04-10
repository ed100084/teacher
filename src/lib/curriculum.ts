// 小六數學單元資料（108課綱對應）
export interface QuizQuestion {
  id: string;
  type: "choice" | "fill";
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
  scientist: {
    name: string;
    nameEn: string;
    years: string;
    field: string;
    bio: string;
  };
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
    id: "g6",
    slug: "grade-6",
    label: "小六",
    color: "#e86d6d",
    emoji: "🌱",
    units: [
      {
        id: "g6-u1",
        slug: "fraction-operations",
        title: "分數四則運算",
        emoji: "🧁",
        scenarioTitle: "食譜換算實驗室",
        scenarioDesc:
          "你是一位甜點師，要幫料理節目重新計算食譜份量，分數運算就是你最好的工具！",
        curriculumCode: "N-6-1",
        color: "#e86d6d",
        concepts: [
          {
            title: "分數加法與減法",
            body: "分數相加減時，要先讓分母相同（通分），再計算分子。通分就是找兩個分母的最小公倍數。",
            formula: "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}",
          },
          {
            title: "分數乘法",
            body: "分數相乘時，分子乘以分子，分母乘以分母。乘完之後記得約分到最簡分數喔！",
            formula:
              "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}",
          },
          {
            title: "分數除法",
            body: "分數除以另一個分數，等於乘以那個分數的倒數。把除數的分子分母對調，就是「倒數」。",
            formula:
              "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "食譜換算：麵粉份量",
            problem: "原食譜需要 ³⁄₄ 杯麵粉，要做 1½ 倍份量，需要多少麵粉？",
            steps: [
              { label: "理解題意", content: "需要計算 ³⁄₄ × 1½" },
              { label: "把帶分數改為假分數", content: "1½ = ³⁄₂" },
              { label: "分數相乘", content: "³⁄₄ × ³⁄₂ = ⁹⁄₈" },
              { label: "化為帶分數", content: "⁹⁄₈ = 1⅛" },
            ],
            answer: "需要 1⅛ 杯麵粉",
          },
          {
            id: "e2",
            title: "分享蛋糕",
            problem: "一個蛋糕吃了 ⅔，剩下的再吃掉 ¾，共吃了幾分之幾？",
            steps: [
              { label: "剩下多少", content: "1 - ⅔ = ⅓" },
              { label: "再吃掉剩下的 ¾", content: "⅓ × ¾ = ¼" },
              { label: "合計", content: "⅔ + ¼ = ⁸⁄₁₂ + ³⁄₁₂ = ¹¹⁄₁₂" },
            ],
            answer: "共吃了 ¹¹⁄₁₂",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "計算 ½ + ⅓ = ？",
            options: ["²⁄₅", "⅚", "⁵⁄₆", "⅔"],
            answer: "⅚",
            explanation: "通分找公分母 6：³⁄₆ + ²⁄₆ = ⁵⁄₆",
          },
          {
            id: "q2",
            type: "choice",
            question: "食譜要 ⅔ 杯糖，做兩倍份量需要幾杯糖？",
            options: ["1⅓", "⅔", "1⅔", "1¼"],
            answer: "1⅓",
            explanation: "⅔ × 2 = 4⁄3 = 1⅓",
          },
          {
            id: "q3",
            type: "fill",
            question: "計算 ¾ ÷ ½ = ？（請填阿拉伯數字，例如：3/2）",
            answer: "3/2",
            explanation: "¾ ÷ ½ = ¾ × 2/1 = 6/4 = 3/2（即 1½）",
            hint: "除以分數 = 乘以倒數",
          },
        ],
        scientist: {
          name: "海倫 · 奎恩",
          nameEn: "Helen Quinn",
          years: "1943–",
          field: "粒子物理學",
          bio: "澳裔美國物理學家，以研究粒子物理學中的對稱性著名，獲得多項頂尖科學獎項。她也積極推動科學教育改革，讓更多女孩有機會接觸物理和數學。",
        },
      },
      {
        id: "g6-u2",
        slug: "ratio",
        title: "比與比值",
        emoji: "🎨",
        scenarioTitle: "調色盤魔法師",
        scenarioDesc:
          "你是一位插畫師，用顏料的混合比例調配出夢幻色彩，掌握「比」就能創造無限可能！",
        curriculumCode: "N-6-5",
        color: "#c46de8",
        concepts: [
          {
            title: "什麼是比？",
            body: "「比」是兩個數量的相對關係，寫作 a:b，讀作「a 比 b」。比反映的是倍數關係，不是差！",
            formula: "a : b \\quad (b \\neq 0)",
          },
          {
            title: "比值",
            body: "比值是把比用除法表示的結果，a:b 的比值 = a÷b。比值是一個數，比是兩個數的關係。",
            formula: "\\text{比值} = a \\div b = \\frac{a}{b}",
          },
          {
            title: "等值比（化簡比）",
            body: "把比的兩項同乘或同除同一個數，得到的新比叫做等值比。最簡比就是兩項互質的比。",
            formula: "a : b = (a \\times k) : (b \\times k)",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "調色：藍色與黃色混出綠色",
            problem:
              "藍色顏料 4 毫升加黃色顏料 6 毫升調出綠色，藍黃的比是多少？化簡後呢？",
            steps: [
              { label: "寫出比", content: "藍色 : 黃色 = 4 : 6" },
              { label: "找最大公因數", content: "4 和 6 的 GCF = 2" },
              { label: "化簡", content: "4 : 6 = 2 : 3" },
            ],
            answer: "藍色 : 黃色 = 2 : 3",
          },
          {
            id: "e2",
            title: "按比例調色",
            problem: "紅色與白色的比是 1:4，要調出 25 毫升粉紅色，各需幾毫升？",
            steps: [
              { label: "總份數", content: "1 + 4 = 5 份" },
              { label: "每份份量", content: "25 ÷ 5 = 5 毫升" },
              {
                label: "各顏色份量",
                content: "紅色 = 1 × 5 = 5 毫升；白色 = 4 × 5 = 20 毫升",
              },
            ],
            answer: "紅色 5 毫升、白色 20 毫升",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "12 : 8 化簡後是？",
            options: ["6:4", "3:2", "4:3", "2:3"],
            answer: "3:2",
            explanation: "12 和 8 的最大公因數是 4，12÷4=3，8÷4=2，所以是 3:2",
          },
          {
            id: "q2",
            type: "choice",
            question: "藍色:黃色 = 2:3，藍色 10ml，黃色要幾 ml？",
            options: ["15ml", "6ml", "20ml", "12ml"],
            answer: "15ml",
            explanation: "2:3 = 10:?，10 ÷ 2 × 3 = 15ml",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "比值是什麼？5:4 的比值是多少？（填小數，四捨五入到小數點第二位）",
            answer: "1.25",
            explanation: "比值 = 5 ÷ 4 = 1.25",
            hint: "比值 = 前項 ÷ 後項",
          },
        ],
        scientist: {
          name: "艾美 · 諾特",
          nameEn: "Emmy Noether",
          years: "1882–1935",
          field: "抽象代數、數學物理",
          bio: "德國數學家，被愛因斯坦稱為「有史以來最重要的女性數學家」。她在抽象代數領域的貢獻革命性地改變了數學，諾特定理更連結了物理對稱性與守恆律。",
        },
      },
      {
        id: "g6-u3",
        slug: "speed-rate",
        title: "速率",
        emoji: "🏃‍♀️",
        scenarioTitle: "跑步節奏追蹤器",
        scenarioDesc:
          "你是一位田徑教練助理，幫選手分析跑步速度，找出最佳節奏，讓成績突破！",
        curriculumCode: "N-6-4",
        color: "#6db0e8",
        concepts: [
          {
            title: "速率（速度）",
            body: "速率是描述「在單位時間內移動了多少距離」的數量。例如每小時幾公里、每分鐘幾公尺。",
            formula: "\\text{速率} = \\frac{\\text{距離}}{\\text{時間}}",
          },
          {
            title: "距離、時間、速率的關係",
            body: "三者有固定公式關係，知道其中兩個就能算出第三個。用「速率 × 時間 = 距離」最好記！",
            formula: "\\text{距離} = \\text{速率} \\times \\text{時間}",
          },
          {
            title: "單位換算",
            body: "速率的單位要注意！公里/小時（km/h）和公尺/分鐘（m/min）是不同單位，計算前要統一。",
            formula:
              "1 \\text{ km/h} = \\frac{1000}{60} \\text{ m/min} \\approx 16.7 \\text{ m/min}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "計算跑步速率",
            problem: "小雯跑完 400 公尺花了 80 秒，她的速率是每秒幾公尺？",
            steps: [
              { label: "確認已知", content: "距離 = 400m，時間 = 80s" },
              { label: "代入公式", content: "速率 = 距離 ÷ 時間 = 400 ÷ 80" },
              { label: "計算", content: "速率 = 5 m/s" },
            ],
            answer: "小雯的速率是每秒 5 公尺",
          },
          {
            id: "e2",
            title: "計算跑步時間",
            problem: "選手以 8 m/s 的速率跑 200 公尺，需要多少秒？",
            steps: [
              { label: "確認已知", content: "速率 = 8 m/s，距離 = 200m" },
              { label: "用公式推導時間", content: "時間 = 距離 ÷ 速率" },
              { label: "計算", content: "時間 = 200 ÷ 8 = 25 秒" },
            ],
            answer: "需要 25 秒",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "小明以 6 m/s 跑了 5 秒，距離是幾公尺？",
            options: ["11m", "30m", "1.2m", "60m"],
            answer: "30m",
            explanation: "距離 = 速率 × 時間 = 6 × 5 = 30 公尺",
          },
          {
            id: "q2",
            type: "choice",
            question: "跑 120 公尺花了 15 秒，速率是？",
            options: ["8 m/s", "6 m/s", "12 m/s", "10 m/s"],
            answer: "8 m/s",
            explanation: "速率 = 距離 ÷ 時間 = 120 ÷ 15 = 8 m/s",
          },
          {
            id: "q3",
            type: "fill",
            question: "速率 5 m/s，要跑 75 公尺需要幾秒？",
            answer: "15",
            explanation: "時間 = 75 ÷ 5 = 15 秒",
            hint: "時間 = 距離 ÷ 速率",
          },
        ],
        scientist: {
          name: "凱薩琳 · 強森",
          nameEn: "Katherine Johnson",
          years: "1918–2020",
          field: "數學、航太工程",
          bio: "NASA 的傳奇數學家，精通軌道力學計算，確保了阿波羅登月計畫的成功。她的速率與軌道計算讓人類踏上月球，是「隱藏人物」電影的主角原型。",
        },
      },
      {
        id: "g6-u4",
        slug: "circle",
        title: "圓的面積與周長",
        emoji: "⭕",
        scenarioTitle: "徽章設計工坊",
        scenarioDesc:
          "你是一位學校社團的徽章設計師，要計算徽章材料用量，圓形幾何是你的必備技能！",
        curriculumCode: "S-6-1",
        color: "#3ecfb2",
        concepts: [
          {
            title: "圓的周長（圓周）",
            body: "圓周長是圓的一圈總長度，等於直徑乘以圓周率 π。π 約為 3.14159...，常取 3.14。",
            formula: "C = 2\\pi r = \\pi d",
          },
          {
            title: "圓的面積",
            body: "圓的面積是圓內部所有點的總面積，等於 π 乘以半徑的平方。半徑是直徑的一半。",
            formula: "A = \\pi r^2",
          },
          {
            title: "直徑與半徑",
            body: "直徑（d）是通過圓心的最長距離，半徑（r）是圓心到圓上任一點的距離。d = 2r。",
            formula: "d = 2r \\quad \\Leftrightarrow \\quad r = \\frac{d}{2}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "計算圓形徽章的周長",
            problem:
              "想設計一個直徑 8 公分的圓形徽章，周長是幾公分？（π取3.14）",
            steps: [
              { label: "確認已知", content: "直徑 d = 8 cm，π = 3.14" },
              { label: "代入公式", content: "C = π × d = 3.14 × 8" },
              { label: "計算", content: "C = 25.12 cm" },
            ],
            answer: "徽章周長約 25.12 公分",
          },
          {
            id: "e2",
            title: "計算圓形貼紙的布料面積",
            problem: "半徑 5 公分的圓形貼紙，需要用多少平方公分的布料？",
            steps: [
              { label: "確認已知", content: "半徑 r = 5 cm" },
              { label: "代入公式", content: "A = π × r² = 3.14 × 5²" },
              { label: "計算", content: "A = 3.14 × 25 = 78.5 cm²" },
            ],
            answer: "需要 78.5 平方公分的布料",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "半徑 6 cm 的圓，面積是幾 cm²？（π=3.14）",
            options: ["37.68", "113.04", "18.84", "78.5"],
            answer: "113.04",
            explanation: "A = π × r² = 3.14 × 36 = 113.04 cm²",
          },
          {
            id: "q2",
            type: "choice",
            question: "直徑 10 cm 的圓，周長是幾 cm？（π=3.14）",
            options: ["62.8", "31.4", "314", "15.7"],
            answer: "31.4",
            explanation: "C = π × d = 3.14 × 10 = 31.4 cm",
          },
          {
            id: "q3",
            type: "fill",
            question: "圓形徽章周長 62.8 cm，直徑是幾 cm？（π=3.14）",
            answer: "20",
            explanation: "d = C ÷ π = 62.8 ÷ 3.14 = 20 cm",
            hint: "周長 = π × 直徑，反推直徑 = 周長 ÷ π",
          },
        ],
        scientist: {
          name: "辛西婭 · 所羅門",
          nameEn: "Cynthia Solomon",
          years: "1938–",
          field: "電腦科學教育",
          bio: "美國電腦科學家，Logo 程式語言的共同開發者。Logo 曾被廣泛用於教導孩子用「畫圓」學習幾何，讓無數孩子透過程式設計愛上數學與圖形。",
        },
      },
      {
        id: "g6-u5",
        slug: "prism-volume",
        title: "柱體體積",
        emoji: "📦",
        scenarioTitle: "包裝設計師",
        scenarioDesc:
          "你在幫一家手工皂品牌設計包裝盒，需要計算每種形狀盒子的容量，體積計算派上用場！",
        curriculumCode: "S-6-3",
        color: "#f5b641",
        concepts: [
          {
            title: "柱體體積公式",
            body: "所有柱體（包括長方體、正方體、三角柱、圓柱）的體積都是：底面積 × 高。",
            formula: "V = S_{底} \\times h",
          },
          {
            title: "長方體體積",
            body: "長方體的底面積是長 × 寬，所以體積 = 長 × 寬 × 高。這是最常見的柱體！",
            formula: "V = l \\times w \\times h",
          },
          {
            title: "圓柱體積",
            body: "圓柱的底面是圓形，底面積 = π × r²，所以體積 = π × r² × h。",
            formula: "V = \\pi r^2 h",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "設計長方形包裝盒",
            problem: "手工皂的包裝盒：長 8 cm、寬 5 cm、高 6 cm，體積是多少？",
            steps: [
              { label: "確認已知", content: "長=8, 寬=5, 高=6（單位:cm）" },
              { label: "代入公式", content: "V = 長 × 寬 × 高 = 8 × 5 × 6" },
              { label: "計算", content: "V = 240 cm³" },
            ],
            answer: "包裝盒體積 240 立方公分",
          },
          {
            id: "e2",
            title: "設計圓柱形罐裝包裝",
            problem:
              "圓柱形護手霜罐，半徑 3 cm，高 10 cm，體積大約多少？（π=3.14）",
            steps: [
              {
                label: "計算底面積",
                content: "S底 = π × r² = 3.14 × 9 = 28.26 cm²",
              },
              { label: "代入公式", content: "V = S底 × 高 = 28.26 × 10" },
              { label: "計算", content: "V = 282.6 cm³" },
            ],
            answer: "圓柱罐體積約 282.6 立方公分",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "長 10cm、寬 4cm、高 5cm 的盒子，體積是？",
            options: ["200cm³", "19cm³", "100cm³", "400cm³"],
            answer: "200cm³",
            explanation: "V = 10 × 4 × 5 = 200 cm³",
          },
          {
            id: "q2",
            type: "choice",
            question: "底面積 30cm²、高 7cm 的柱體，體積是？",
            options: ["210cm³", "37cm³", "21cm³", "420cm³"],
            answer: "210cm³",
            explanation: "V = 底面積 × 高 = 30 × 7 = 210 cm³",
          },
          {
            id: "q3",
            type: "fill",
            question: "圓柱半徑 2cm、高 5cm，體積是幾 cm³？（π=3.14，填整數）",
            answer: "63",
            explanation: "V = 3.14 × 4 × 5 = 62.8 ≈ 63 cm³",
            hint: "V = π × r² × h",
          },
        ],
        scientist: {
          name: "瑪麗 · 貝格納",
          nameEn: "Marie-Anne Pierrette Paulze",
          years: "1758–1836",
          field: "化學（拉瓦節夫人）",
          bio: "法國化學家，與丈夫拉瓦節共同對近代化學做出重大貢獻。她精通多國語言、翻譯化學研究、繪製實驗器具圖表，在實驗室中扮演了不可少的角色，是科學史上被低估的偉大女性。",
        },
      },
      {
        id: "g6-u6",
        slug: "statistics",
        title: "統計圖表",
        emoji: "📊",
        scenarioTitle: "班級調查分析師",
        scenarioDesc:
          "你是班級的調查員，幫大家整理問卷結果、製作圖表，讓同學一眼看懂數據的秘密！",
        curriculumCode: "D-6-1",
        color: "#6de89a",
        concepts: [
          {
            title: "平均數",
            body: "平均數是一組數據的代表值，把所有數據加起來再除以數據個數。平均數反映「中心趨勢」。",
            formula: "\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}",
          },
          {
            title: "統計圖的類型",
            body: "常見統計圖有：長條圖（比較分類數量）、折線圖（呈現趨勢變化）、圓形圖（呈現比例）。選對圖形才能清楚傳遞資訊！",
          },
          {
            title: "眾數與中位數",
            body: "眾數是出現次數最多的數據；中位數是排序後位於正中間的數據。三者都是描述數據的方法。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "計算全班數學成績平均",
            problem:
              "5 位同學的分數：85、92、78、90、85，求平均數、眾數、中位數。",
            steps: [
              {
                label: "平均數",
                content: "(85+92+78+90+85) ÷ 5 = 430 ÷ 5 = 86",
              },
              { label: "眾數", content: "85 出現兩次，眾數 = 85" },
              {
                label: "排序取中位",
                content: "78, 85, 85, 90, 92 → 中位數 = 85",
              },
            ],
            answer: "平均數86，眾數85，中位數85",
          },
          {
            id: "e2",
            title: "選擇適合的圖表",
            problem:
              "班上最喜愛的顏色調查結果：紅8人, 藍12人, 綠6人, 橙4人，應使用哪種統計圖？",
            steps: [
              { label: "思考目的", content: "要比較各顏色的人數多少" },
              {
                label: "選擇圖型",
                content: "比較不同類別的數量 → 長條圖最適合",
              },
              { label: "也可用", content: "圓形圖呈現各顏色佔全班的百分比" },
            ],
            answer: "長條圖（或圓形圖皆可，說明用途即可）",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "4 人身高：152, 160, 158, 154。平均身高是？",
            options: ["156cm", "158cm", "154cm", "160cm"],
            answer: "156cm",
            explanation: "(152+160+158+154) ÷ 4 = 624 ÷ 4 = 156 cm",
          },
          {
            id: "q2",
            type: "choice",
            question: "要呈現「一週氣溫變化趨勢」，最適合用哪種圖？",
            options: ["圓形圖", "長條圖", "折線圖", "直方圖"],
            answer: "折線圖",
            explanation: "折線圖適合呈現隨時間變化的趨勢",
          },
          {
            id: "q3",
            type: "fill",
            question: "數據：3, 7, 5, 7, 8，眾數是幾？",
            answer: "7",
            explanation: "7 出現了兩次，是出現最多次的，所以眾數是 7",
            hint: "眾數 = 出現次數最多的數字",
          },
        ],
        scientist: {
          name: "佛羅倫斯 · 南丁格爾",
          nameEn: "Florence Nightingale",
          years: "1820–1910",
          field: "統計學、護理學",
          bio: "護理學之母，也是統計學先驅。她發明了玫瑰圖（極區圖）來視覺化戰場死亡原因的數據，成功說服英國政府改善醫院衛生條件，拯救了無數生命。數據的力量從她開始！",
        },
      },
      {
        id: "g6-u7",
        slug: "base-compare",
        title: "基準量與比較量",
        emoji: "⚖️",
        scenarioTitle: "魔法藥水調配師",
        scenarioDesc:
          "你需要調配不同濃度的魔法藥水，了解誰是基準被比較的對象，才能精準掌握比例！",
        curriculumCode: "N-6-9",
        color: "#e86d6d",
        concepts: [
          {
            title: "什麼是基準量和比較量？",
            body: "在比較兩個數量時，被當作標準的數量叫做「基準量」，拿來和標準比較的數量叫做「比較量」。通常在「比...多」或「是...的幾倍」句型中，「的」前面的數量就是基準量。",
          },
          {
            title: "比值與百分率",
            body: "比較量除以基準量，就能得到比值。如果把基準量當作 1，比較量就可以用小數、分數或百分率來表示。",
            formula: "\\text{比值} = \\frac{\\text{比較量}}{\\text{基準量}}",
          },
          {
            title: "計算未知量",
            body: "如果你知道基準量和比值，就可以算出比較量；反過來，知道比較量和比值，也能反推基準量。",
            formula: "\\text{比較量} = \\text{基準量} \\times \\text{比值}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "找出基準量",
            problem:
              "小華有 150 元，小明的錢是小華的 1.5 倍，誰是基準量？小明有多少元？",
            steps: [
              {
                label: "判斷基準量",
                content: "「小華的 1.5 倍」，所以「小華的錢」是基準量。",
              },
              {
                label: "計算比較量",
                content: "小華的錢是 150 元，小明的錢 = 150 × 1.5 = 225 元。",
              },
            ],
            answer: "基準量是小華，小明有 225 元",
          },
          {
            id: "e2",
            title: "計算基準量",
            problem: "書包打八折後的價錢是 400 元，原價是多少元？",
            steps: [
              {
                label: "理解題意",
                content:
                  "「打八折」表示售價是原價的 80%。原價是基準量，售價是比較量。",
              },
              {
                label: "代入公式",
                content: "售價 = 原價 × 80%，所以原價 = 售價 ÷ 80%",
              },
              { label: "計算", content: "400 ÷ 0.8 = 500" },
            ],
            answer: "原價是 500 元",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "文具店進貨 200 枝紅筆，藍筆的數量是紅筆的 1.2 倍。藍筆有幾枝？",
            options: ["240", "166", "220", "120"],
            answer: "240",
            explanation: "紅筆是基準量，藍筆 = 200 × 1.2 = 240 枝",
          },
          {
            id: "q2",
            type: "choice",
            question: "某商品加成 20% 後賣 600 元，成本是多少元？",
            options: ["500", "480", "720", "620"],
            answer: "500",
            explanation:
              "成本是基準量(100%)，加成 20% 是 120%。成本 = 600 ÷ 1.2 = 500 元",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "大披薩的重量是 800 克，小披薩的重量是 600 克。小披薩的重量是大披薩的幾分之幾？（請填最簡分數，如：3/4）",
            answer: "3/4",
            explanation: "大披薩是基準量。600 ÷ 800 = 6/8 = 3/4",
            hint: "比較量 ÷ 基準量",
          },
        ],
        scientist: {
          name: "艾達 · 勒芙蕾絲",
          nameEn: "Ada Lovelace",
          years: "1815–1852",
          field: "計算機科學",
          bio: "被公認為世界上第一位電腦程式設計師。她看出分析機不只能算數學，更能處理字母和符號，提出了程式設計和演算法的概念，遠遠超前了她的時代！",
        },
      },
      {
        id: "g6-u8",
        slug: "prime-factors",
        title: "質數與最大公因數",
        emoji: "🧩",
        scenarioTitle: "時光寶盒解碼師",
        scenarioDesc:
          "時光寶盒需要密碼才能打開，找出質數和最大公因數就是解鎖的關鍵！",
        curriculumCode: "N-6-10",
        color: "#c46de8",
        concepts: [
          {
            title: "質數與合數",
            body: "一個大於 1 的整數，如果除了 1 和它自己以外，沒有別的因數，就叫做「質數」（例如 2, 3, 5, 7）。如果有其他因數，就叫做「合數」。注意！1 既不是質數也不是合數。",
          },
          {
            title: "質因數分解",
            body: "把一個合數寫成幾個質數相乘的形式，就叫做質因數分解。我們常用「短除法」或是「樹狀圖」來找質因數。",
            formula: "12 = 2 \\times 2 \\times 3",
          },
          {
            title: "最大公因數與最小公倍數",
            body: "最大公因數 (GCD) 是兩個數共同因數中最大的；最小公倍數 (LCM) 是兩個數共同倍數中最小的。用短除法可以一起把它們算出來！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "質因數分解",
            problem: "請將 60 做質因數分解。",
            steps: [
              {
                label: "找最小質因數",
                content: "60 可以被 2 整除，60 ÷ 2 = 30",
              },
              {
                label: "繼續分解",
                content: "30 ÷ 2 = 15; 15 不能被 2 整除，用 3，15 ÷ 3 = 5",
              },
              { label: "確認結果", content: "5 已經是質數，分解結束。" },
            ],
            answer: "60 = 2 × 2 × 3 × 5",
          },
          {
            id: "e2",
            title: "求最大公因數 (GCD)",
            problem: "求 24 和 36 的最大公因數。",
            steps: [
              {
                label: "短除法第一層",
                content: "用共同質因數 2：24÷2=12，36÷2=18",
              },
              { label: "短除法第二層", content: "用 2：12÷2=6，18÷2=9" },
              {
                label: "短除法第三層",
                content: "用 3：6÷3=2，9÷3=3。2和3互質，結束。",
              },
              { label: "計算", content: "將左側的除數相乘：2 × 2 × 3 = 12" },
            ],
            answer: "最大公因數是 12",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "下列哪一個數是質數？",
            options: ["51", "91", "97", "87"],
            answer: "97",
            explanation:
              "51=3×17，91=7×13，87=3×29，只有 97 除了 1 和自己沒有其他因數",
          },
          {
            id: "q2",
            type: "choice",
            question: "15 和 20 的最小公倍數是多少？",
            options: ["300", "60", "30", "5"],
            answer: "60",
            explanation: "15=3×5，20=2×2×5。LCM = 2×2×3×5 = 60",
          },
          {
            id: "q3",
            type: "fill",
            question: "48 的最大質因數是多少？",
            answer: "3",
            explanation:
              "48 = 2 × 2 × 2 × 2 × 3，質因數有 2 和 3，最大的質因數是 3",
            hint: "把 48 質因數分解後，找出最大的那一個",
          },
        ],
        scientist: {
          name: "索菲 · 熱爾曼",
          nameEn: "Sophie Germain",
          years: "1776–1831",
          field: "數論、彈性力學",
          bio: "法國女性數學家。為了學習數學，曾使用男性假名與當時的大數學家通信。她在數論（包含質數研究）和費馬最後定理的貢獻非常巨大，有一種質數甚至被命名為「索菲·熱爾曼質數」！",
        },
      },
      {
        id: "g6-u9",
        slug: "decimal-operations",
        title: "小數乘除法",
        emoji: "🧪",
        scenarioTitle: "精準科學實驗室",
        scenarioDesc:
          "科學實驗需要極度精準的測量，小數點的位置可是會影響實驗成敗的喔！",
        curriculumCode: "N-6-7",
        color: "#6db0e8",
        concepts: [
          {
            title: "小數的乘法",
            body: "先把小數當成整數來相乘，最後再把被乘數和乘數的小數點位數加起來，就是積的小數點總位數。由右向左點上小數點！",
          },
          {
            title: "小數的除法",
            body: "我們要把「除數」變成整數！這時被除數的小數點也要跟著向右移動相同的位數。然後再像平常整數除法一樣計算，商的小數點要和被除數移動後的小數點對齊。",
            formula: "1.25 \\div 0.5 = 12.5 \\div 5",
          },
          {
            title: "四捨五入與估算",
            body: "如果除不盡，或者不需要那麼精確，我們可以取概數。四捨五入就是看下一位數，如果大於等於 5 就進位，小於 5 就捨去。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "小數乘法",
            problem: "實驗液體每毫升重 1.25 克，3.4 毫升有多重？",
            steps: [
              { label: "當成整數相乘", content: "125 × 34 = 4250" },
              {
                label: "數小數點位數",
                content: "1.25 (兩位) + 3.4 (一位) = 三位",
              },
              {
                label: "點上小數點",
                content: "從 4250 的右邊往左點三位：4.250，也就是 4.25",
              },
            ],
            answer: "重 4.25 克",
          },
          {
            id: "e2",
            title: "小數除法",
            problem: "有 15.6 公升的水，每 1.2 公升裝一瓶，可以裝多少瓶？",
            steps: [
              {
                label: "移動小數點",
                content:
                  "除數是 1.2，向右移一位變 12。被除數 15.6 也向右移一位變 156。",
              },
              { label: "執行除法", content: "156 ÷ 12 = 13" },
            ],
            answer: "可以裝 13 瓶",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "0.8 × 0.05 = ？",
            options: ["0.4", "0.04", "0.004", "4"],
            answer: "0.04",
            explanation: "8 × 5 = 40。小數點總共 1+2=3 位。所以是 0.040 = 0.04",
          },
          {
            id: "q2",
            type: "choice",
            question: "12.5 ÷ 0.25 = ？",
            options: ["500", "50", "5", "0.5"],
            answer: "50",
            explanation: "小數點移動兩位：1250 ÷ 25 = 50",
          },
          {
            id: "q3",
            type: "fill",
            question: "計算 3.14 × 2.5 ，四捨五入到小數點第一位是？",
            answer: "7.9",
            explanation:
              "3.14 × 2.5 = 7.85。看小數點後第二位是 5，要進位。所以是 7.9",
            hint: "先算出完整答案，再四捨五入",
          },
        ],
        scientist: {
          name: "羅莎琳 · 富蘭克林",
          nameEn: "Rosalind Franklin",
          years: "1920–1958",
          field: "化學、X射線繞射",
          bio: "英國化學家。如果沒有她精準的高解析度 X 射線繞射照片（著名的「照片51號」），科學家可能要晚很久才能發現 DNA 的雙螺旋結構！科學的突破往往建立在極度的精準之上。",
        },
      },
      {
        id: "g6-u10",
        slug: "sector",
        title: "扇形面積與弧長",
        emoji: "🍕",
        scenarioTitle: "派對披薩達人",
        scenarioDesc:
          "要怎麼公平地把披薩切給不同人數的朋友？扇形的知識會成為你的好幫手！",
        curriculumCode: "S-6-1",
        color: "#3ecfb2",
        concepts: [
          {
            title: "什麼是扇形？",
            body: "扇形是圓的一部分，由兩條半徑和一段弧組合而成，長得就像切開的披薩。兩條半徑夾住的角叫做「圓心角」。",
          },
          {
            title: "扇形是幾分之幾的圓？",
            body: "因為一個圓是一圈 360 度，所以我們可以用圓心角來判斷這個扇形佔整個圓的幾分之幾。計算方式就是：圓心角 / 360。",
            formula: "\\text{比例} = \\frac{\\text{圓心角}}{360^\\circ}",
          },
          {
            title: "扇形面積與弧長",
            body: "只要知道它是幾分之幾的圓，面積就是「圓面積 × 比例」，弧長就是「圓周長 × 比例」。而扇形的「周長」要記得 = 弧長 + 兩條半徑喔！",
            formula:
              "\\text{扇形面積} = \\pi r^2 \\times \\frac{\\text{角度}}{360^\\circ}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "計算扇形面積",
            problem: "半徑 10 公分、圓心角 90 度的扇形，面積是多少？（π=3.14）",
            steps: [
              { label: "算佔圓的比例", content: "90° / 360° = 1/4 的圓" },
              { label: "計算圓面積", content: "π × r² = 3.14 × 100 = 314" },
              { label: "乘以比例", content: "314 × (1/4) = 78.5" },
            ],
            answer: "面積是 78.5 平方公分",
          },
          {
            id: "e2",
            title: "計算扇形周長",
            problem:
              "半徑 6 公分，圓心角 180 度的扇形（半圓），周長是多少？（π=3.14）",
            steps: [
              {
                label: "算弧長",
                content: "直徑 × π × (1/2) = 12 × 3.14 × (1/2) = 18.84",
              },
              {
                label: "別忘了加上兩條半徑",
                content: "扇形的邊不是只有弧，還有兩條直線部分。",
              },
              { label: "計算總周長", content: "18.84 + 6 + 6 = 30.84" },
            ],
            answer: "周長是 30.84 公分",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "圓心角 120 度的扇形是幾分之幾的圓？",
            options: ["1/2", "1/3", "1/4", "1/6"],
            answer: "1/3",
            explanation: "120 / 360 = 1/3",
          },
          {
            id: "q2",
            type: "choice",
            question: "半徑 3cm、圓心角 120° 的扇形面積是？（π=3.14）",
            options: ["28.26", "9.42", "18.84", "3.14"],
            answer: "9.42",
            explanation:
              "圓面積是 3.14 × 9 = 28.26。扇形面積 = 28.26 × (1/3) = 9.42",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "如果一個半徑 5cm 的扇形，面積剛好是半個圓，它的圓心角是幾度？",
            answer: "180",
            explanation: "半個圓 = 1/2 的圓，360 × (1/2) = 180度",
            hint: "半個圓佔整圈 360 度的幾分之幾？",
          },
        ],
        scientist: {
          name: "安妮 · 易司禮",
          nameEn: "Annie Easley",
          years: "1933–2011",
          field: "數學、火箭科學家",
          bio: "NASA 傑出的非裔美國計算機科學家和數學家。她開發了用來計算能量轉換和替代能源系統的軟體代碼，也參與了後來的半人馬座火箭計畫（Centaur）。她的數學能力為太空發射奠定了完美的軌跡。",
        },
      },
      {
        id: "g6-u11",
        slug: "prism-surface",
        title: "柱體表面積",
        emoji: "🎁",
        scenarioTitle: "精緻禮物包裝設計",
        scenarioDesc:
          "要用多少包裝紙才能完美包裝這份禮物？計算表面積讓你不再浪費材料！",
        curriculumCode: "S-6-3",
        color: "#f5b641",
        concepts: [
          {
            title: "什麼是表面積？",
            body: "表面積就是立體圖形外部所有表面的面積總和。柱體通常包含「上底」、「下底」和周圍的「側面」。",
          },
          {
            title: "柱體表面積公式",
            body: "一個柱體的表面積 = (上底面積 + 下底面積) + 側面積。因為柱體的上下兩底一模一樣，所以可以簡寫成：底面積 × 2 + 側面積。",
            formula:
              "\\text{表面積} = \\text{底面積} \\times 2 + \\text{側面積}",
          },
          {
            title: "側面積絕招：展開圖",
            body: "如果你把柱體的側面攤開，你就會發現它其實是一個大長方形！這個長方形的長就是「底面的周長」，寬就是柱體的「高」。所以 側面積 = 底圓/底多邊形的周長 × 高！",
            formula: "\\text{側面積} = \\text{底周長} \\times \\text{高}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "長方體表面積",
            problem: "一個長 5 寬 4 高 3 的長方體，表面積是多少？",
            steps: [
              {
                label: "上下底面",
                content: "面積 = 5 × 4 = 20，有兩個，所以 20 × 2 = 40",
              },
              {
                label: "前後側面",
                content: "面積 = 5 × 3 = 15，有兩個，所以 15 × 2 = 30",
              },
              {
                label: "左右側面",
                content: "面積 = 4 × 3 = 12，有兩個，所以 12 × 2 = 24",
              },
              { label: "加總", content: "40 + 30 + 24 = 94" },
            ],
            answer: "表面積是 94",
          },
          {
            id: "e2",
            title: "圓柱表面積",
            problem: "一個半徑 5，高 10 的圓柱，表面積大約是多少？（π=3.14）",
            steps: [
              {
                label: "底面積",
                content: "3.14 × 5² = 78.5，有上下兩塊：78.5 × 2 = 157",
              },
              { label: "底面周長", content: "直徑 × π = 10 × 3.14 = 31.4" },
              { label: "側面積", content: "底周長 × 高 = 31.4 × 10 = 314" },
              { label: "加總", content: "157 + 314 = 471" },
            ],
            answer: "表面積是 471",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "邊長 3 公分的正方體，表面積是多少平方公分？",
            options: ["27", "9", "54", "36"],
            answer: "54",
            explanation: "一個面是 3×3=9，正方體有 6 個面。9 × 6 = 54",
          },
          {
            id: "q2",
            type: "choice",
            question: "柱體的側面積可以怎麼算？",
            options: [
              "底面積 × 高",
              "底面積 ÷ 高",
              "底周長 × 高",
              "底周長 ÷ 高",
            ],
            answer: "底周長 × 高",
            explanation: "側面的展開圖是一個長方形，長就是底周長，寬就是柱高。",
          },
          {
            id: "q3",
            type: "fill",
            question: "長方體長2寬3高4，它的表面積是多少？",
            answer: "52",
            explanation:
              "(2×3 + 2×4 + 3×4) × 2 = (6 + 8 + 12) × 2 = 26 × 2 = 52",
            hint: "（長×寬 + 寬×高 + 長×高）× 2",
          },
        ],
        scientist: {
          name: "艾莉絲 · 孟羅",
          nameEn: "Alice Stott",
          years: "1860–1940",
          field: "幾何學",
          bio: "愛爾蘭數學家布爾的女兒。雖然沒受過正式數學教育，但她對多面體和幾何學非常有天分，創造出許多四維多胞體的精美紙板模型。有時候手作與視覺化，才是理解空間立體概念的最強武器！",
        },
      },
      {
        id: "g6-u12",
        slug: "scale-scale",
        title: "放大圖縮圖與比例尺",
        emoji: "🔍",
        scenarioTitle: "尋寶地圖繪製家",
        scenarioDesc:
          "把廣大的草原畫進小小的地圖裡，比例尺是你轉換空間的魔法丈量工具！",
        curriculumCode: "S-6-4",
        color: "#6de89a",
        concepts: [
          {
            title: "放大圖與縮圖",
            body: "把一個圖形依照固定比例放大或縮小。放大圖或縮圖與原圖相比：「對應角不變」、「對應邊跟著比例變長或變短」。",
          },
          {
            title: "什麼是比例尺？",
            body: "比例尺標示地圖上的距離與實際距離的比例。例如「1 : 100000」代表地圖上 1 公分，實際長度是 100000 公分（也就是 1 公里）。",
            formula:
              "\\text{比例尺} = \\frac{\\text{圖上距離}}{\\text{實際距離}}",
          },
          {
            title: "面積的變化與長度不一樣！",
            body: "注意！圖形放大 n 倍，長度會變 n 倍，但是「面積會變 n 的平方 (n×n) 倍」。",
            formula: "\\text{面積倍數} = (\\text{邊長倍數})^2",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "利用比例尺算實際距離",
            problem:
              "地圖上比例尺是 1 : 50000。地圖上 A 到 B 是 4公分，實際距離是幾公里？",
            steps: [
              { label: "先算實際的公分數", content: "4 × 50000 = 200000 公分" },
              {
                label: "轉換單位",
                content:
                  "100 公分 = 1 公尺；1000 公尺 = 1 公里，所以 1 公里 = 100000 公分",
              },
              { label: "計算公里數", content: "200000 ÷ 100000 = 2" },
            ],
            answer: "實際距離是 2 公里",
          },
          {
            id: "e2",
            title: "面積放大的倍數",
            problem:
              "把一個邊長 2 公分的正方形，畫成 3 倍大的放大圖，放大圖的面積是原圖的幾倍？",
            steps: [
              { label: "邊長放大 3 倍", content: "新邊長變成 2 × 3 = 6 公分" },
              {
                label: "計算原面積和新面積",
                content: "原面積 = 2×2=4；新面積 = 6×6=36",
              },
              { label: "比較倍數", content: "36 ÷ 4 = 9" },
            ],
            answer: "面積是原圖的 9 倍 (也就是 3的平方 倍)",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "圖面距離 1 公分，實際距離 500 公尺，比例尺怎麼表示？",
            options: ["1 : 500", "1 : 50000", "1 : 50", "1 : 5000"],
            answer: "1 : 50000",
            explanation: "500 公尺 = 50000 公分。所以是 1 : 50000",
          },
          {
            id: "q2",
            type: "choice",
            question: "比例尺 1 : 1000，實際距離 30 公尺，在圖上是幾公分？",
            options: ["3", "30", "0.3", "300"],
            answer: "3",
            explanation: "30 公尺 = 3000 公分。3000 ÷ 1000 = 3 公分",
          },
          {
            id: "q3",
            type: "fill",
            question: "圖形放大為原來的 5 倍，對應的角會變成幾倍？",
            answer: "1",
            explanation: "放大縮小不會改變角度的大小喔！",
            hint: "角的大小會變嗎？",
          },
        ],
        scientist: {
          name: "瑪麗安 · 米爾札哈尼",
          nameEn: "Maryam Mirzakhani",
          years: "1977–2017",
          field: "幾何、拓樸學",
          bio: "出生於伊朗的數學家。2014年成為有史以來第一位（也是最年輕的）獲得有「數學界諾貝爾獎」之稱的「菲爾茲獎」的女性。她對理解曲面形狀與空間幾何的貢獻深遠，她的思考就像在無限廣闊的抽象空間中畫地圖。",
        },
      },
    ],
  },
  {
    id: "g7",
    slug: "grade-7",
    label: "國一",
    color: "#e89a6d",
    emoji: "🔬",
    units: [
      {
        id: "g7-u1",
        slug: "negative-numbers",
        title: "正負數與數線",
        emoji: "🌡️",
        scenarioTitle: "平均氣溫與海拔高度記錄員",
        scenarioDesc:
          "地圖上標示著高山與深海，溫度計顯示著酷暑與寒冬。要精準記錄比零還要小的數字，負數是你必備的工具！",
        curriculumCode: "N-7-1",
        color: "#e89a6d",
        concepts: [
          {
            title: "認識負數與數線",
            body: "數線有三要素：原點、正向（通常向右為正）、單位長。在原點右邊是正數，左邊是負數。負數用來表示與正數相反意義的量，例如「零下溫度」或「海拔以下」。",
          },
          {
            title: "相反數與絕對值",
            body: "數線上與原點距離相等的兩個點，互為「相反數」（例如 5 與 -5）。而一個數到原點的距離叫做「絕對值」，因為是距離，所以絕對值永遠大於或等於零！",
            formula: "|-5| = 5, \\quad |3| = 3",
          },
          {
            title: "正負數的加減法",
            body: "正負數加減可以想像成在數線上走路：加上正數往右走，加上負數往左走；減去正數往左走，減去負數等於加上它的相反數（變成往右走！）。",
            formula: "a - (-b) = a + b",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "溫度變化計算",
            problem:
              "今天清晨氣溫是 -3°C，到中午時上升了 8°C，到了半夜又下降了 6°C。半夜的氣溫是幾度？",
            steps: [
              { label: "清晨到中午", content: "-3 + 8 = 5 (中午是 5°C)" },
              { label: "中午到半夜", content: "5 - 6 = -1" },
            ],
            answer: "半夜的氣溫是 -1°C",
          },
          {
            id: "e2",
            title: "絕對值的比較",
            problem: "絕對值小於 4 的整數有哪幾個？",
            steps: [
              {
                label: "理解題意",
                content: "找出到原點距離小於 4 的「整數點」。",
              },
              {
                label: "列出正數與零",
                content: "0, 1, 2, 3 (距離分別為 0, 1, 2, 3)",
              },
              { label: "列出負數", content: "-1, -2, -3 (距離分別為 1, 2, 3)" },
            ],
            answer: "共有 7 個：-3, -2, -1, 0, 1, 2, 3",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "在數線上，點 A 在 -3，點 B 在 5，請問 A 和 B 之間的距離是多少？",
            options: ["2", "8", "-8", "15"],
            answer: "8",
            explanation:
              "距離可以看作大數減小數：5 - (-3) = 5 + 3 = 8。或者計算兩者的絕對值距離。",
          },
          {
            id: "q2",
            type: "choice",
            question: "計算 (-12) - (-7) = ？",
            options: ["-19", "5", "-5", "19"],
            answer: "-5",
            explanation: "減去負數等於加上正數：-12 + 7 = -5。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若某天文學家發現甲星的亮度星等為 -1.4，乙星為 2.1。請問哪一顆星比較亮？(星等越小越亮，請填甲或乙)",
            answer: "甲",
            explanation: "-1.4 小於 2.1，所以甲星的星等比較小，也就比較亮。",
            hint: "在數線上越左邊的數越小喔！",
          },
        ],
        scientist: {
          name: "王貞儀",
          nameEn: "Wang Zhenyi",
          years: "1768–1797",
          field: "天文學、數學",
          bio: "清代傑出的女性科學家。在那個女性難以受教育的時代，她不僅研究數學、寫出《勾股三角解》等著作，更透過自製的模型正確解釋了月食的成因。對於座標、方位與數理有極高的敏銳度。",
        },
      },
      {
        id: "g7-u2",
        slug: "algebra-symbols",
        title: "代數符號與式子",
        emoji: "🔐",
        scenarioTitle: "密碼學解密專家",
        scenarioDesc:
          "情報局截獲了一段神秘的代碼。學習用代數「未知數 x」來代表隱藏的數字，寫出解密程式！",
        curriculumCode: "A-7-1",
        color: "#c46de8",
        concepts: [
          {
            title: "什麼是代數？",
            body: "代數就是用「英文字母」（如 x, y, a, b）來代表未知的數字或變動的數量。因為它代表數字，所以它一樣可以進行加減乘除。",
          },
          {
            title: "代數的簡記規則",
            body: "數字和字母相乘時，乘號可以省略，而且數字要寫在字母前面（例如：x × 3 改寫成 3x）。如果字母前面的數字是 1 或 -1，通常 1 會省略（1x 寫成 x，-1x 寫成 -x）。",
          },
          {
            title: "同類項合併",
            body: "含有相同字母的項（例如 2x 和 5x）叫做「同類項」。同類項可以把係數相加減來合併把它化簡。但是帶有 x 的項不能跟純數字（常數項）合併！",
            formula: "2x + 5x = 7x, \\quad 3x + 4 \\text{ (無法合併)}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "列出代數式",
            problem:
              "小明的撲滿裡有 x 個 10 元硬幣和 5 個 50 元硬幣，小明共有多少元？",
            steps: [
              {
                label: "列出 10 元總額",
                content: "x 個 10 元是 10 × x，簡記為 10x 元",
              },
              { label: "列出 50 元總額", content: "5 × 50 = 250 元" },
              { label: "相加", content: "總金額為 10x + 250 元" },
            ],
            answer: "10x + 250",
          },
          {
            id: "e2",
            title: "化簡代數式",
            problem: "化簡 3(2x - 4) + 5x + 7",
            steps: [
              { label: "分配律展開", content: "3(2x) - 3(4) = 6x - 12" },
              { label: "整理式子", content: "(6x - 12) + 5x + 7" },
              {
                label: "同類項合併",
                content: "(6x + 5x) + (-12 + 7) = 11x - 5",
              },
            ],
            answer: "11x - 5",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "下列何者是「x 的 3 倍少 2」的代數式？",
            options: ["x + 3 - 2", "2x - 3", "3x - 2", "3(x - 2)"],
            answer: "3x - 2",
            explanation: "x 的 3 倍是 3x，少 2 就是 3x - 2。",
          },
          {
            id: "q2",
            type: "choice",
            question: "化簡 -2(x - 3) 的結果是？",
            options: ["-2x - 6", "-2x - 3", "-2x + 3", "-2x + 6"],
            answer: "-2x + 6",
            explanation:
              "-2 乘進去：(-2)×x - (-2)×3 = -2x - (-6) = -2x + 6。注意負負得正！",
          },
          {
            id: "q3",
            type: "fill",
            question: "化簡 4x - 7 - 2x + 10，結果前面的 x 係數是多少？",
            answer: "2",
            explanation:
              "4x - 2x = 2x；-7 + 10 = +3。簡化結果為 2x + 3。x 前面的係數是 2。",
            hint: "先把含有 x 的項合併，常數項合併",
          },
        ],
        scientist: {
          name: "葛麗絲 · 霍普",
          nameEn: "Grace Hopper",
          years: "1906–1992",
          field: "電腦科學",
          bio: "美國電腦科學家，也是海軍准將。她是第一個發現電腦「Bug(蟲子)」的人！她認為我們不該只用二進位數字跟電腦溝通，寫出了編譯器，用類似英文的代碼指令（也就是變數和代數式）來寫程式，這改變了整個軟體世界！",
        },
      },
      {
        id: "g7-u3",
        slug: "linear-equation",
        title: "一元一次方程式",
        emoji: "🛒",
        scenarioTitle: "週末市集財務長",
        scenarioDesc:
          "你在週末市集幫忙結帳，但進貨單上的水蜜桃單價被弄髒了！運用等量公理把 x 解出來吧！",
        curriculumCode: "A-7-2",
        color: "#6db0e8",
        concepts: [
          {
            title: "什麼是方程式？",
            body: "含有「等號」和「未知數」的算式就是方程式。解方程式的目的，就是要找出未知數等於多少，才能讓等號兩邊平衡！",
          },
          {
            title: "等量公理",
            body: "方程式就像一個天平，只要你在等號的兩邊「同時」加上、減去、乘以或除以同一個數（除數不能為零），天平依然會保持平衡。",
          },
          {
            title: "移項法則",
            body: "把數字或代數項從等號一邊移到另一邊時，運算符號要改變：加變減，減變加，乘變除，除變乘。這其實就是等量公理的捷徑！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "解基本方程式",
            problem: "解方程式：3x - 5 = 10",
            steps: [
              {
                label: "移項",
                content: "把 -5 移到等號右邊變成 +5：3x = 10 + 5",
              },
              { label: "整理", content: "3x = 15" },
              { label: "解出 x", content: "等號兩邊同除以 3：x = 15 ÷ 3 = 5" },
            ],
            answer: "x = 5",
          },
          {
            id: "e2",
            title: "兩邊都有未知數",
            problem: "解方程式：5x + 4 = 2x - 8",
            steps: [
              {
                label: "把未知數移到同一邊",
                content: "將 2x 移到左邊：5x - 2x + 4 = -8",
              },
              {
                label: "把常數移到另一邊",
                content: "將 +4 移到右邊：3x = -8 - 4",
              },
              {
                label: "整理並解出 x",
                content: "3x = -12。兩邊同除以 3：x = -4",
              },
            ],
            answer: "x = -4",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "解方程式 2x + 7 = 19，請問 x 是多少？",
            options: ["5", "6", "12", "13"],
            answer: "6",
            explanation: "2x = 19 - 7 = 12。x = 12 ÷ 2 = 6。",
          },
          {
            id: "q2",
            type: "choice",
            question: "「小美的年紀的三倍減 2 等於 25 歲」，請問小美幾歲？",
            options: ["7", "8", "9", "10"],
            answer: "9",
            explanation: "設小美 x 歲，3x - 2 = 25。3x = 27，x = 9。",
          },
          {
            id: "q3",
            type: "fill",
            question: "解方程式：-4x = 20，x 是多少？",
            answer: "-5",
            explanation: "等號兩邊同除以 -4：x = 20 ÷ (-4) = -5。",
            hint: "小心正負號，正數除以負數是負數。",
          },
        ],
        scientist: {
          name: "莎拉 · 弗蘭納里",
          nameEn: "Sarah Flannery",
          years: "1982–",
          field: "密碼學",
          bio: "愛爾蘭數學家。在年僅 16 歲時，她設計出了「Cayley–Purser 演算法」，這是一個基於矩陣數學的新型密碼系統，速度甚至比標準加密演算法還快。解方程式與密碼破解，在核心數學邏輯上是一脈相承的！",
        },
      },
      {
        id: "g7-u4",
        slug: "proportion",
        title: "比例與正反比",
        emoji: "🗺️",
        scenarioTitle: "地圖尋寶與縮放設計師",
        scenarioDesc:
          "繪製藏寶圖時，距離和時間要如何等比例轉換？了解正比與反比，你就能看透萬物的數學關聯！",
        curriculumCode: "N-7-3",
        color: "#f5b641",
        concepts: [
          {
            title: "比例式與交叉相乘",
            body: "當兩個比相等時，可以寫成比例式 a : b = c : d。比例式有一個重要魔法：「內項乘積 = 外項乘積」，也就是 b × c = a × d。",
            formula: "a : b = c : d \\implies ad = bc",
          },
          {
            title: "正比",
            body: "如果兩個變數 x 和 y，當 x 變成 2 倍時 y 也變成 2 倍，而且 x 除以 y 永遠是一個固定的數字，我們就說 x 和 y 呈「正比」。",
            formula: "y = kx \\quad \\text{(其中 k 為常數)}",
          },
          {
            title: "反比",
            body: "如果當 x 變成 2 倍時，y 卻變成一半，而且 x 乘以 y 永遠是一個固定的數字，我們就說 x 和 y 呈「反比」。例如固定的距離，速率越快，時間越短！",
            formula: "x \\times y = k \\quad \\text{(其中 k 為常數)}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "比例式的計算",
            problem: "若 3 : x = 5 : 15，求 x 是多少？",
            steps: [
              {
                label: "使用內項乘外項",
                content: "外項相乘：3 × 15 = 45。內項相乘：x × 5 = 5x",
              },
              { label: "列出方程式", content: "5x = 45" },
              { label: "解出 x", content: "x = 45 ÷ 5 = 9" },
            ],
            answer: "x = 9",
          },
          {
            id: "e2",
            title: "判斷正比或反比",
            problem:
              "一堆面積是 36 平方公分的長方形，當長是 x 時，寬是 y。請問 x 和 y 是正比還是反比？",
            steps: [
              {
                label: "找關係",
                content: "長方形面積 = 長 × 寬，所以 x × y = 36",
              },
              {
                label: "判斷",
                content:
                  "因為 x 與 y 的「乘積」是個固定值 36，符合反比的定義。",
              },
            ],
            answer: "反比",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "若 x : 4 = 6 : 8，則 x 等於？",
            options: ["2", "3", "12", "48"],
            answer: "3",
            explanation: "內項乘以外項：4 × 6 = 8x → 24 = 8x → x = 3。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "購買每瓶 20 元的飲料，買 x 瓶要付 y 元。請問 x 與 y 的關係是？",
            options: ["正比", "反比", "沒有關係", "不成比例"],
            answer: "正比",
            explanation:
              "花費金額 = 單價 × 數量，y = 20x，符合 y = kx 的形式，因此成正比。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "完成同樣一份工作，人數(x)如果加倍，需要的時間(y)會變為原本的幾分之幾？(請填寫分數如 1/2)",
            answer: "1/2",
            explanation:
              "總工作量固定 (x × y = k)，因此人數變 2 倍時，時間就會變成 1/2 倍，這就是反比。",
            hint: "人越多，花的時間越少還是越多？",
          },
        ],
        scientist: {
          name: "凱薩琳 · 鮑蔓",
          nameEn: "Katie Bouman",
          years: "1989–",
          field: "資訊工程、物理學",
          bio: "美國電腦科學家。她開發了名為 CHIRP 的演算法，利用地球上八座射電望遠鏡連線測量的龐大數據，填補觀測時的微小細節，最終成功構建了人類史上第一張「黑洞照片」。精準掌握龐大數據與真實世界的比例映射，創造了奇蹟。",
        },
      },
      {
        id: "g7-u5",
        slug: "parallel-lines",
        title: "平行線與角",
        emoji: "🏛️",
        scenarioTitle: "現代建築設計實習生",
        scenarioDesc:
          "建築的鋼骨交錯、光影的角度，全依賴平行與截角的完美規劃。學會判斷截角關係，確認設計的精確性！",
        curriculumCode: "S-7-1",
        color: "#3ecfb2",
        concepts: [
          {
            title: "角的關係：對頂角與互補角",
            body: "兩條直線相交，相對的兩個角叫做「對頂角」，且度數會相等！而在同一條直線上相鄰的兩個角，加起來一定會是一平角也就是「180度」，這叫互補角。",
          },
          {
            title: "平行與截角（同位、內錯、同側）",
            body: "兩條平行線被另一條直線切過時，會產生八個角。位置相同的叫「同位角」（相等）；在平行線內且在截線兩側的叫「內錯角」（相等）；在截線同側內部的叫「同側內角」（互補，加起來180度）。",
          },
          {
            title: "平行線的判定",
            body: "反過來說，如果我們發現同位角相等、或是內錯角相等、或是同側內角互補，我們就能大聲宣布：「這兩條線互相平行！」",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "計算對頂角與互補角",
            problem:
              "直線 AB 被截斷，∠1 與 ∠2 是相鄰的平角，∠1 是 50度。請問 ∠2 和 ∠1的對頂角分別是多少度？",
            steps: [
              {
                label: "互補角計算",
                content: "∠1 + ∠2 = 180°，所以 ∠2 = 180° - 50° = 130°",
              },
              {
                label: "對頂角判斷",
                content: "對頂角與 ∠1 相等，所以也是 50°",
              },
            ],
            answer: "∠2 是 130度，對頂角是 50度",
          },
          {
            id: "e2",
            title: "同位角的應用",
            problem:
              "兩條平行線被截斷，如果其中一個內錯角是 65°，那麼和它同側的內角是多少度？",
            steps: [
              {
                label: "回想性質",
                content: "平行線的內錯角相等，而且同側內角互補 (加起來 180°)。",
              },
              {
                label: "計算",
                content: "與這個角同側的內角 = 180° - 65° = 115°",
              },
            ],
            answer: "同側內角為 115度",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "已知 L1 // L2，且被截線截過，∠A 與 ∠B 是內錯角。若 ∠A = 70°，請問 ∠B 是？",
            options: ["110°", "70°", "20°", "90°"],
            answer: "70°",
            explanation:
              "兩條平行線被一直線所截，內錯角相等，所以 ∠B = ∠A = 70°。",
          },
          {
            id: "q2",
            type: "choice",
            question: "若 ∠1 與 ∠2 是對頂角，且 ∠1 = 45°，則 ∠2 是？",
            options: ["135°", "90°", "45°", "無法判定"],
            answer: "45°",
            explanation: "對頂角一定相等。",
          },
          {
            id: "q3",
            type: "fill",
            question: "兩平行線被截斷，同側內角的和固定是幾度？(請填數字)",
            answer: "180",
            explanation: "平行線的同側內角互補，也就是相加等於 180 度。",
            hint: "是互餘還是互補呢？",
          },
        ],
        scientist: {
          name: "札哈 · 哈蒂",
          nameEn: "Zaha Hadid",
          years: "1950–2016",
          field: "建築學",
          bio: "伊拉克裔英國建築師，第一位獲得普立茲克建築獎的女性。她的大膽設計被稱為「解構主義」，擅長運用複雜的幾何曲線、銳角與傾斜的平面，打破了建築必須直角與平行的傳統。要打破幾何規則，首先必須精通幾何！",
        },
      },
      {
        id: "g7-u6",
        slug: "triangle-congruence",
        title: "三角形全等",
        emoji: "🧩",
        scenarioTitle: "幾何鑲嵌藝術家",
        scenarioDesc:
          "要創造一幅完美的馬賽克拼磚藝術，你必須確保拼圖完美無瑕的重疊！學習 5 種全等魔法。",
        curriculumCode: "S-7-4",
        color: "#e86da9",
        concepts: [
          {
            title: "什麼是全等？",
            body: "如果兩個多邊形不論怎麼平移、旋轉或翻轉，都能完美疊合在一起，我們就稱它們「全等」。對應角會相等，對應邊也會等長。符號寫作 ≅。",
          },
          {
            title: "三角形的五大常見全等性質",
            body: "不需要量完所有邊和角！只需滿足這五種之一即可：SSS (三邊等長)、SAS (兩邊和夾角)、ASA (兩角和夾邊)、AAS (兩角和一對應邊)、RHS (直角、斜邊和一股)。",
          },
          {
            title: "注意 SSA 不能保證全等！",
            body: "如果給定兩邊和其中一個非夾角 (SSA)，有可能畫出兩種完全不同的三角形，所以它不能作為全等性質喔。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "判斷全等性質",
            problem:
              "有兩個三角形，甲三角形邊長為 3, 4, 5；乙三角形邊長也是 3, 4, 5。它們全等嗎？用什麼性質？",
            steps: [
              { label: "觀察條件", content: "三個對應邊都等長。" },
              {
                label: "對應性質",
                content: "三邊 (Side-Side-Side) 皆相等，符合 SSS 全等。",
              },
            ],
            answer: "全等，根據 SSS 全等性質",
          },
          {
            id: "e2",
            title: "SAS 判斷",
            problem:
              "△ABC 和 △DEF 中，若 AB=DE=5，BC=EF=7，且 ∠B=∠E=60°。它們全等嗎？",
            steps: [
              {
                label: "比對條件",
                content: "兩對邊相等，且夾在這兩邊中間的角（夾角）也相等。",
              },
              { label: "對應性質", content: "符合 SAS (邊-角-邊) 全等。" },
            ],
            answer: "全等，根據 SAS 全等性質",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "下列何者「不是」三角形的全等性質？",
            options: ["SAS", "ASA", "SSA", "RHS"],
            answer: "SSA",
            explanation:
              "SSA (邊-邊-角且非夾角) 無法保證唯一形狀，所以不是全等性質。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若已知兩個直角三角形的「斜邊」與「一股」相等，可推論其全等的性質為？",
            options: ["AAS", "RHS", "SSS", "ASA"],
            answer: "RHS",
            explanation: "Right angle (直角)、Hypotenuse (斜邊)、Side (股)。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若有兩個同為正三角形，且邊長都是 10 公分，它們一定全等。請問這最符合哪一個全等性質簡寫？（例如：SAS）",
            answer: "SSS",
            explanation:
              "三個邊長都已知為 10 公分，因此對應三邊相等，符合 SSS (邊邊邊) 性質。",
            hint: "這三個條件都是「邊」喔",
          },
        ],
        scientist: {
          name: "瑪喬麗 · 賴斯",
          nameEn: "Marjorie Rice",
          years: "1923–2017",
          field: "幾何學",
          bio: "她是一位普通的美國家庭主婦，沒有受過高等數學教育。但她對「鑲嵌」（能把平面完美鋪滿的形狀）感到著迷，透過自學，發現了四種前所未見的「完美鑲嵌五邊形」！展現出對幾何全等變換驚人的直覺。",
        },
      },
      {
        id: "g7-u7",
        slug: "prime-lcm-hcf-advanced",
        title: "質數與公因倍數進階",
        emoji: "⚙️",
        scenarioTitle: "齒輪鐘錶工匠",
        scenarioDesc:
          "不同大小的生鏽齒輪要多久才會再次扣合在同一個位置？掌握標準分解式與最大公因數、最小公倍數，修復古老的時光機！",
        curriculumCode: "N-7-2",
        color: "#c46de8",
        concepts: [
          {
            title: "標準分解式",
            body: "將一個數字寫成質數相乘，並以指數形式表示。例如：$72 = 2^3 \\times 3^2$。這就像是把數字拆成最基本的積木。",
            formula: "120 = 2^3 \\times 3 \\times 5",
          },
          {
            title: "最大公因數 (H.C.F.)",
            body: "從兩個數字的標準分解式中找出「共同的質因數」，並取指數「較小」的。可以幫我們解決長度裁切、分組等問題。",
            formula: "(18, 24) = 6",
          },
          {
            title: "最小公倍數 (L.C.M.)",
            body: "從分解式中找出「所有的質因數」，並取指數「較大」的。常用在不同週期的事物何時會再次相遇的情境。",
            formula: "[18, 24] = 72",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "找最大公因數與最小公倍數",
            problem:
              "已知 $A = 2^3 \\times 3^2 \\times 5$，$B = 2^2 \\times 3^3 \\times 7$。求 A 和 B 的最大公因數與最小公倍數？",
            steps: [
              {
                label: "最大公因數",
                content:
                  "找共同質因數 2, 3，取次方小的。HCF = $2^2 \\times 3^2$",
              },
              {
                label: "最小公倍數",
                content:
                  "找所有出現的質因數 2, 3, 5, 7，取次方大的。LCM = $2^3 \\times 3^3 \\times 5 \\times 7$",
              },
            ],
            answer:
              "HCF = $2^2 \\times 3^2$, LCM = $2^3 \\times 3^3 \\times 5 \\times 7$",
          },
          {
            id: "e2",
            title: "相遇問題應用",
            problem:
              "大齒輪有 24 齒，小齒輪有 15 齒。剛開始各有特定一齒相咬合，請問大齒輪至少轉幾圈後，這兩齒會再次咬合？",
            steps: [
              {
                label: "找最小公倍數",
                content: "24 與 15 的 LCM。24=8×3。15=3×5。LCM = 120 齒。",
              },
              {
                label: "換算大齒輪圈數",
                content:
                  "經過 120 個齒後再次相遇。大齒輪每 24 齒是一圈：120 ÷ 24 = 5 圈。",
              },
            ],
            answer: "大齒輪轉 5 圈",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "若 $(a, b)=12$，則下列何者必為 a 和 b 的公因數？",
            options: ["5", "6", "8", "24"],
            answer: "6",
            explanation:
              "a與b的所有公因數必為最大公因數(12)的因數。12的因數有 1, 2, 3, 4, 6, 12。選項中只有 6 是。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "$2^2 \\times 3 \\times 5$ 與 $2^3 \\times 3^2$ 的最小公倍數是？",
            options: [
              "$2^2 \\times 3$",
              "$2^3 \\times 3^2 \\times 5$",
              "$2^5 \\times 3^3 \\times 5$",
              "$2 \\times 3$",
            ],
            answer: "$2^3 \\times 3^2 \\times 5$",
            explanation:
              "取所有的質因數(2,3,5)，並取兩者之中指數最大的。2 取 3 次方，3 取 2 次方，5 取 1 次方。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "有一個長 18 公分、寬 12 公分的長方形，想用它拼成一個最小的正方形，至少需要幾個這樣的長方形？",
            answer: "6",
            explanation:
              "正方形邊長為(18, 12)的 LCM = 36。長邊需要 36÷18 = 2 個；寬邊需要 36÷12 = 3 個。共 2×3 = 6 個。",
            hint: "先求邊長的最小公倍數，再算「長」和「寬」各需要幾片！",
          },
        ],
        scientist: {
          name: "艾達 · 勒芙蕾絲",
          nameEn: "Ada Lovelace",
          years: "1815–1852",
          field: "數學、計算機科學",
          bio: "世界上第一位電腦程式設計師。她為機械分析機寫下了運算柏努利數列的演算法，比電腦的發明早了一百年！她發現數字之間能組合成精妙的週期邏輯，就像設計繁複齒輪咬合的工匠一樣，為數位時代奠定了基礎。",
        },
      },
      {
        id: "g7-u8",
        slug: "fraction-decimal-operations",
        title: "分數四則運算(含負數)",
        emoji: "🧪",
        scenarioTitle: "化學實驗藥劑師",
        scenarioDesc:
          "當你調配抗體溶液，遇到要增加 1/2 滴或抽走 3/4 滴的情況，正負分數的計算決定了實驗的成敗！",
        curriculumCode: "N-7-4",
        color: "#6db0e8",
        concepts: [
          {
            title: "負分數的異分母加減",
            body: "與國小不同，國中會有負數。先將分母化為相同的最小公倍數（通分），然後合併分子，最後決定正負號！",
            formula:
              "\\frac{-2}{3} + \\frac{1}{4} = \\frac{-8}{12} + \\frac{3}{12} = \\frac{-5}{12}",
          },
          {
            title: "負分數的乘除",
            body: "乘法：分子乘分子、分母乘分母。除法：乘以它的倒數。要特別注意「負負得正、正負得負」的規律！",
            formula:
              "\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\times \\frac{D}{C}",
          },
          {
            title: "四則運算規則",
            body: "先乘除後加減，有括號先算括號！若是帶分數，建議先化成「假分數」以免在正負號計算上出錯。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "異分母負分數加減",
            problem: "計算 $-\\frac{3}{4} - \\frac{1}{6}$",
            steps: [
              { label: "找分母最小公倍數", content: "4和6的公倍數是12。" },
              { label: "通分", content: "$-\\frac{9}{12} - \\frac{2}{12}$" },
              {
                label: "合併計算",
                content: "$\\frac{-9 - 2}{12} = -\\frac{11}{12}$",
              },
            ],
            answer: "$-\\frac{11}{12}$",
          },
          {
            id: "e2",
            title: "分數與小數混合",
            problem: "計算 $\\frac{5}{2} \\div (-0.5) - 3$",
            steps: [
              { label: "小數轉分數", content: "-0.5 就是 $-\\frac{1}{2}$" },
              {
                label: "先乘除",
                content: "$\\frac{5}{2} \\times (-\\frac{2}{1}) = -5$",
              },
              { label: "後加減", content: "$-5 - 3 = -8$" },
            ],
            answer: "-8",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "計算 $(-\\frac{1}{3}) \\times (-\\frac{3}{4})$ 的結果是？",
            options: ["-1/4", "1/4", "-4/9", "4/9"],
            answer: "1/4",
            explanation: "負負得正。且 3 跟 3 約分消掉，剩下 1/4。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "計算 $\\frac{1}{2} - \\frac{1}{3} \\times \\frac{3}{2}$？",
            options: ["1/4", "1", "0", "-1/2"],
            answer: "0",
            explanation: "先算乘法：1/3 × 3/2 = 1/2。再算加減：1/2 - 1/2 = 0。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "計算 $2 \\div (-\\frac{4}{3})$ 的結果為何？（請填寫最簡分數例如 -1/2 或假分數 -3/2）",
            answer: "-3/2",
            explanation: "2 × (-3/4) = -6/4，約分後變成 -3/2。",
            hint: "除以一個分數，等於乘以它的倒數喔！並且正數除以負數為負。",
          },
        ],
        scientist: {
          name: "羅莎琳 · 富蘭克林",
          nameEn: "Rosalind Franklin",
          years: "1920–1958",
          field: "物理化學、X射線晶體學",
          bio: "她拍下了著名的「第51號相片」，這張 X 射線繞射圖案是解開 DNA 雙螺旋結構的絕對關鍵。她透過精密的測量與比例計算，推導出分子結構的數學方位。精準的四則運算是科學突破的基石。",
        },
      },
      {
        id: "g7-u9",
        slug: "exponential-scientific",
        title: "指數律與科學記號",
        emoji: "🔭",
        scenarioTitle: "宇宙星體觀測員",
        scenarioDesc:
          "銀河的距離太巨大，細胞的大小又太微小，寫出好幾個零實在太容易看錯了！快學會科學記號來幫數字瘦身！",
        curriculumCode: "N-7-6",
        color: "#f5b641",
        concepts: [
          {
            title: "指數的基本運算（指數律）",
            body: "同底數相乘，指數相加；同底數相除，指數相減；括號外再有次方，指數相乘！",
            formula:
              "a^m \\times a^n = a^{m+n}, \\quad (a^m)^n = a^{m \\times n}",
          },
          {
            title: "科學記號的表示",
            body: "規定要把數字變成：$a \\times 10^n$ 的格式，其中 $1 \\leq a < 10$，而 n 是整數。這樣數字能一目了然！",
          },
          {
            title: "負指數與小數",
            body: "如果 $10$ 的次方是復數，代表數字很小（小數）。例如 $10^{-3}$ = $1/1000$ = 0.001。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "轉換為科學記號",
            problem: "將 450,000,000 轉換為科學記號。",
            steps: [
              {
                label: "找 a",
                content: "把數字縮小成 1 到 10 之間，所以變成 4.5",
              },
              {
                label: "找 10 的能力",
                content: "小數點往前（左）移了 8 位，所以是 $10^8$",
              },
            ],
            answer: "$4.5 \\times 10^8$",
          },
          {
            id: "e2",
            title: "極小數字的轉換",
            problem: "將 0.000072 轉換為科學記號。",
            steps: [
              { label: "找 a", content: "將數字放大為 1 到 10 之間，變成 7.2" },
              {
                label: "找 10 的次數",
                content:
                  "小數點往後（右）移了 5 位，這代表乘上了十的負五次方，即 $10^{-5}$",
              },
            ],
            answer: "$7.2 \\times 10^{-5}$",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "$2^3 \\times 2^4 = ？$",
            options: ["$2^{12}$", "$4^7$", "$2^7$", "$4^{12}$"],
            answer: "$2^7$",
            explanation: "同底數相乘，指數直接相加：3 + 4 = 7。",
          },
          {
            id: "q2",
            type: "choice",
            question: "下列哪個選項是合格的科學記號？",
            options: [
              "$12 \\times 10^3$",
              "$0.5 \\times 10^5$",
              "$3.14 \\times 10^{-4}$",
              "$10 \\times 10^0$",
            ],
            answer: "$3.14 \\times 10^{-4}$",
            explanation:
              "科學記號前方的數字必須大於等於1，且小於10。只有 3.14 符合。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若 $0.00035 = 3.5 \\times 10^n$，請問 n 是多少？(請填寫數字，包含負號)",
            answer: "-4",
            explanation:
              "小數點從 0.00035 往右移動 4 位到達 3.5，因此是乘以 10 的 -4 次方。",
            hint: "小數點往右移幾位？這代表數字是非常微小的喔。",
          },
        ],
        scientist: {
          name: "瑪麗 · 居禮",
          nameEn: "Marie Curie",
          years: "1867–1934",
          field: "物理學、化學",
          bio: "人類史上第一位獲得諾貝爾獎的女性，也是唯一獲得物理與化學「雙領域」諾貝爾獎的科學家。她發現了鐳和釙，研究原子的衰變。原子的質量微小如 $10^{-27}$ 量級，有了指數的概念，我們才得以探究微觀的核子宇宙。",
        },
      },
      {
        id: "g7-u10",
        slug: "linear-inequality",
        title: "一元一次不等式",
        emoji: "🎢",
        scenarioTitle: "遊樂園雲霄飛車安檢員",
        scenarioDesc:
          "身高要「大於等於」130cm，體重「不能超過」90kg。在現實世界中，大多數的規則不是絕對的相等，而是「範圍」！",
        curriculumCode: "A-7-3",
        color: "#3ecfb2",
        concepts: [
          {
            title: "認識不等號",
            body: "有 > （大於）、<（小於）、≥（大於等於）、≤（小於等於）。要在數線上畫出來時，如果有包含等於就畫實心圓，沒有等於就畫空心圓。",
          },
          {
            title: "不等式的移項法則",
            body: "跟解方程式一模一樣！加變減，減變加。但是要注意，不等式有一個極度危險的地雷陷阱！",
          },
          {
            title: "⚠️變號法則（極度危險）",
            body: "當等號兩邊「同時乘以或除以一個負數」時，不等號的方向必須「反轉」！例如 $5 > 3$，如果同乘 -1 會變成 $-5 < -3$。",
            formula: "-2x > 6 \\implies x < -3",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "解基本不等式",
            problem: "解不等式 $3x - 5 \\leq 10$",
            steps: [
              { label: "移項加減", content: "把 -5 移到右邊：$3x \\leq 15$" },
              { label: "同除正數不變號", content: "兩邊除以 3：$x \\leq 5$" },
            ],
            answer: "$x \\leq 5$",
          },
          {
            id: "e2",
            title: "遇到負數除法的陷阱",
            problem: "解不等式 $-2x + 4 < 10$",
            steps: [
              { label: "移項", content: "$-2x < 10 - 4 \\implies -2x < 6$" },
              {
                label: "同除以負數",
                content: "兩邊除以 -2。注意！因為除以負數，方向要反轉！",
              },
              { label: "變號結果", content: "$x > -3$" },
            ],
            answer: "$x > -3$",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "某電影分級為輔導級「未滿 12 歲兒童不得觀賞」，若 x 代表年紀，該如何用不等式表示可觀賞的年齡？",
            options: ["$x < 12$", "$x \\leq 12$", "$x > 12$", "$x \\geq 12$"],
            answer: "$x \\geq 12$",
            explanation:
              "未滿就是小於，所以不得觀賞代表必須要大於或等於 12 歲。",
          },
          {
            id: "q2",
            type: "choice",
            question: "解不等式 $-3x \\geq 15$",
            options: [
              "$x \\geq -5$",
              "$x \\leq -5$",
              "$x \\geq 5$",
              "$x \\leq 5$",
            ],
            answer: "$x \\leq -5$",
            explanation:
              "兩邊除以 -3，因為除以負數，所以不等號 ≥ 變成 ≤。15 ÷ (-3) = -5。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "阿明帶了 100 元去買 x 支每支 15 元的筆，還剩下超過 20 元。求 x 最大可以是多少整數？",
            answer: "5",
            explanation:
              "列式：100 - 15x > 20。移項得 80 > 15x，x < 80/15 = 5.333...。最大的整數是 5。",
            hint: "先解出不等式的範圍，再找出符合條件的最大整數。",
          },
        ],
        scientist: {
          name: "瑪麗 · 安寧",
          nameEn: "Mary Anning",
          years: "1799–1847",
          field: "古生物學",
          bio: "英國女性化石採集家。她在懸崖邊挖掘出科學界第一具完整的魚龍與蛇頸龍化石。科學研究經常就是在充滿變異「範圍」（不等式）的古老地層中，尋找那些小於（<）特定條件線索的關鍵。",
        },
      },
      {
        id: "g7-u11",
        slug: "cartesian-coordinate",
        title: "直角坐標平面",
        emoji: "✨",
        scenarioTitle: "星空繪圖導航員",
        scenarioDesc:
          "夜空中的星星看起來雜亂無章？鋪上一張方格網，定義東西為 X，南北為 Y，你就能畫出整個星座的位置！",
        curriculumCode: "G-7-1",
        color: "#e86da9",
        concepts: [
          {
            title: "認識直角坐標",
            body: "水平的線叫 X 軸，垂直的線叫 Y 軸。交會在原點 (0,0)。每一個點都有一個固定的地址 (x, y)，x 對應出它的左右，y 對應出它的上下。",
          },
          {
            title: "四個象限",
            body: "X 軸與 Y 軸把平面切成四塊。右上角是第一象限 (+,+)，左上方是第二象限 (-,+)；左下是第三 (-,-)，右下是第四 (+,-)。在軸上的點不屬於任何象限！",
          },
          {
            title: "與兩軸的距離",
            body: "點 (a, b) 距離 X 軸的距離是看對面也就是這段 |b|。距離 Y 軸的距離看的是 |a|。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "判斷象限",
            problem: "點 A(-3, 8) 在第幾象限？",
            steps: [
              {
                label: "觀察正負號",
                content: "x 坐標為負數（向左），y 坐標為正數（向上）。",
              },
              { label: "判斷位置", content: "左上方的那一塊，就是第二象限。" },
            ],
            answer: "第二象限",
          },
          {
            id: "e2",
            title: "求點的距離",
            problem: "點 P(-4, -7) 到 X 軸的距離是多少？",
            steps: [
              {
                label: "理解距離定義",
                content: "到 X 軸（水平線）的距離，就是看垂直落差（Y 坐標）",
              },
              {
                label: "加上絕對值",
                content: "距離不會有負數，所以取 |-7| = 7",
              },
            ],
            answer: "7",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "若點 (2, -5) 在圖中作水平移動，請問它的哪個坐標會發生變化？",
            options: ["x 坐標", "y 坐標", "原點", "兩者都會"],
            answer: "x 坐標",
            explanation:
              "水平移動是往左往右，因此改變的是 X 軸上的數值。Y (上下高度) 不變。",
          },
          {
            id: "q2",
            type: "choice",
            question: "座標平面上有一點 Q 位於 Y 軸上，則 Q 點的坐標特徵為何？",
            options: [
              "x 坐標為 0",
              "y 坐標為 0",
              "x 與 y 皆為 0",
              "x 與 y 互為相反數",
            ],
            answer: "x 坐標為 0",
            explanation: "位在 Y 軸上的點沒有往左也沒有往右，所以 X=0。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "點 (-12, 18) 位於第幾象限？(請填寫阿拉拍數字如 1, 2, 3, 4)",
            answer: "2",
            explanation: "x是負數，y是正數，位於第二象限。",
            hint: "口訣：右上有上... 複習一下加減號與方位的關係。",
          },
        ],
        scientist: {
          name: "亨麗埃塔 · 勒維特",
          nameEn: "Henrietta Leavitt",
          years: "1868–1921",
          field: "天文學",
          bio: "她被譽為「丈量宇宙的女人」。在哈佛天文台擔任計算員時，她在雜亂無章的星空座標板中，發現了造父變星的「光度-週期關係」。這成為了一把能測量浩瀚宇宙深度的直角尺，幫助後代證明了銀河系外還有無數星系。",
        },
      },
      {
        id: "g7-u12",
        slug: "linear-equation-graph",
        title: "二元一次方程式圖形",
        emoji: "🛰️",
        scenarioTitle: "軌道衛星追蹤站",
        scenarioDesc:
          "二元一次聯立方程式解出來的那個「x 和 y」，其實在雷達上代表了一條筆直的軌跡！而兩條軌跡的交叉點，就是相撞的瞬間！",
        curriculumCode: "G-7-2",
        color: "#e89a6d",
        concepts: [
          {
            title: "畫出一條直線",
            body: "形如 $ax + by = c$ 的方程式，在直角座標系上畫出來會是一條「直線」。找線上點的絕招是「帶 0 法」：先假設 x=0 求出 y；再假設 y=0 求出 x，連起這兩點就完成！",
          },
          {
            title: "水平線與鉛垂線",
            body: "如果式子裡找不到 y（例如 x = 5），那是一條經過 X 軸標籤 5 的「鉛垂線」。如果找不到 x（例如 y = -2），則是一條「水平線」。",
          },
          {
            title: "聯立方程式的圖形意義",
            body: "解出兩個二元一次聯立方程式，其實就是在圖形上找「兩條直線的交點」坐標！平行表示無解，疊合表示無限多組解。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "找截距畫圖",
            problem:
              "要在坐標圖上畫出方程式 $2x - 3y = 6$ 的圖形，它會通過坐標軸上的哪兩點？",
            steps: [
              {
                label: "代入 x=0",
                content: "2(0) - 3y = 6，得 -3y = 6，y = -2。交於點 (0, -2)",
              },
              {
                label: "代入 y=0",
                content: "2x - 3(0) = 6，得 2x = 6，x = 3。交於點 (3, 0)",
              },
            ],
            answer: "通過 (0, -2) 與 (3, 0)",
          },
          {
            id: "e2",
            title: "交點求解",
            problem:
              "直線 L: $x + y = 5$，直線 M: $x - y = 1$。請問 L 與 M 的交點座標為何？",
            steps: [
              {
                label: "解聯立",
                content: "其實就是把方程式解出來！兩式相加：2x = 6，得 x = 3。",
              },
              { label: "代回求 y", content: "3 + y = 5，得 y = 2。" },
            ],
            answer: "交點為 (3, 2)",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "下列哪個方程式的圖案是一條「水平線」？",
            options: ["$x = y$", "$x + y = 3$", "$x = 5$", "$y = -4$"],
            answer: "$y = -4$",
            explanation:
              "水平線的高度固定不變，因此特徵是不論 x 是多少，y 都等於某個常數。",
          },
          {
            id: "q2",
            type: "choice",
            question: "若某兩條直線 L 與 M 平行，則它們聯立方程式的解為？",
            options: ["一組解", "無限多組解", "無解", "必須看方程式決定"],
            answer: "無解",
            explanation:
              "平行線永遠不會相交，因此也就是找不到相交的 (x, y) 點，代表方程式無解。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "直線方程式 $4x + y = 8$ 與 Y 軸的交點座標的 y 值是多少？",
            answer: "8",
            explanation:
              "與 Y 軸的交點代表 x 座標為 0。代入 4(0) + y = 8，即可得 y = 8。",
            hint: "Y 軸上的點，它的 $x$ 值一定是 0 喔！",
          },
        ],
        scientist: {
          name: "瓦蓮京娜 · 捷列什科娃",
          nameEn: "Valentina Tereshkova",
          years: "1937–",
          field: "太空工程",
          bio: "第一位飛上太空的女性（1963年東方六號）。她在軌道上運行了近三天。太空船的每一次變軌，都必須受到嚴密的座標與聯立軌跡方程式的計算驗證。這不僅需要無比的勇氣，更需要相信數學與機械。",
        },
      },
    ],
  },
  {
    id: "g8",
    slug: "grade-8",
    label: "國二",
    color: "#6db0e8",
    emoji: "⚗️",
    units: [
      {
        id: "g8-u1",
        slug: "polynomials",
        title: "乘法公式與多項式",
        emoji: "✂️",
        scenarioTitle: "拼布藝術的面積魔法",
        scenarioDesc:
          "裁切不同大小的方形拼布時，面積的計算隱藏著乘法公式的秘密。學會拆解圖形，就能掌握代數展開的魔法！",
        curriculumCode: "A-8-1",
        color: "#c46de8",
        concepts: [
          {
            title: "和的平方公式",
            body: "想像一個邊長為 (a+b) 的大正方形，它可以切成一個邊長 a 的正方形、一個邊長 b 的正方形，以及兩個長寬為 a 和 b 的長方形。",
            formula: "(a + b)^2 = a^2 + 2ab + b^2",
          },
          {
            title: "差的平方公式",
            body: "如果是邊長為 (a-b) 的正方形，面積就是大正方形 a 減掉邊邊的長方形，加上多減去的角落！",
            formula: "(a - b)^2 = a^2 - 2ab + b^2",
          },
          {
            title: "平方差公式",
            body: "長方形 (a+b) 乘以 (a-b) 剛好等於兩個正方形面積的相減。這在快速心算時超級好用！",
            formula: "(a + b)(a - b) = a^2 - b^2",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "利用乘法公式心算",
            problem: "不使用直式乘法，請計算 102 的平方。",
            steps: [
              { label: "拆分為和", content: "將 102 看成 (100 + 2)" },
              {
                label: "帶入公式",
                content: "(100 + 2)² = 100² + 2 × 100 × 2 + 2²",
              },
              { label: "計算結果", content: "10000 + 400 + 4 = 10404" },
            ],
            answer: "10404",
          },
          {
            id: "e2",
            title: "平方差的應用",
            problem: "計算 98 × 102 的值。",
            steps: [
              {
                label: "改寫式子",
                content: "98 可以寫成 (100 - 2)，102 可以寫成 (100 + 2)",
              },
              {
                label: "用平方差公式",
                content: "(100 - 2)(100 + 2) = 100² - 2²",
              },
              { label: "計算結果", content: "10000 - 4 = 9996" },
            ],
            answer: "9996",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "展開 (2x + 3)^2 的結果為？",
            options: [
              "4x² + 9",
              "4x² + 6x + 9",
              "4x² + 12x + 9",
              "2x² + 12x + 9",
            ],
            answer: "4x² + 12x + 9",
            explanation: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若等式 a² - b² = 20，且 (a + b) = 10，請問 (a - b) 等於多少？",
            options: ["10", "2", "5", "200"],
            answer: "2",
            explanation:
              "因為 a² - b² = (a+b)(a-b)，所以 20 = 10 × (a-b)，可得 a-b = 2。",
          },
          {
            id: "q3",
            type: "fill",
            question: "利用平方差計算：45² - 5² = ？(請填數字)",
            answer: "2000",
            explanation:
              "45² - 5² = (45+5)(45-5) = 50 × 40 = 2000。是不是比慢慢乘快很多！",
            hint: "套用 (a+b)(a-b) 公式來算",
          },
        ],
        scientist: {
          name: "索菲亞 · 柯瓦列夫斯卡婭",
          nameEn: "Sofya Kovalevskaya",
          years: "1850–1891",
          field: "數學",
          bio: "俄國數學家。在不允許女性讀大學的時代，她透過假結婚出國，憑藉驚人的毅力取得了數學博士學位，成為現代歐洲第一位女性數學教授。她對偏微分方程（像多項式的高級版）和剛體旋轉的研究留下了不朽的定理。",
        },
      },
      {
        id: "g8-u2",
        slug: "square-roots",
        title: "平方根與畢氏定理",
        emoji: "🏙️",
        scenarioTitle: "城市對角線與建築測量",
        scenarioDesc:
          "在都市裡，兩點之間最短的距離不是沿著街道走，而是穿越街區的對角線！運用直角三角形與開根號，找出這條捷徑！",
        curriculumCode: "S-8-4",
        color: "#6db0e8",
        concepts: [
          {
            title: "什麼是平方根？",
            body: "如果一個正方形的面積是 25，它的邊長就是 5。我們說 5 是 25 的「平方根」。符號是 √ (讀作 radical 或 root)。",
            formula: "\\sqrt{25} = 5, \\quad \\sqrt{a^2} = a \\text{ (當 a>0)}",
          },
          {
            title: "畢氏定理 (勾股定理)",
            body: "在所有的直角三角形中，兩條短邊（股）的平方加起來，一定會等於最長邊（斜邊）的平方！這是在兩千多年前就被發現的神奇定律。",
            formula: "a^2 + b^2 = c^2",
          },
          {
            title: "常用的畢氏數",
            body: "有幾組整數非常常出現在直角三角形中，叫做「畢氏數」。背起來可以幫你秒殺很多題目喔！最經典的就是 3、4、5 (因為 3² + 4² = 5²)，還有 5、12、13。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "求斜邊長",
            problem:
              "有一面直角牆壁，底寬為 6 公尺，高度為 8 公尺。若要架設一個從頂端延伸到底端邊緣的溜滑梯，溜滑梯的長度是多少公尺？",
            steps: [
              {
                label: "列出畢氏定理公式",
                content: "兩股平方和 = 斜邊平方：6² + 8² = c²",
              },
              { label: "計算數值", content: "36 + 64 = 100" },
              { label: "求平方根", content: "c² = 100，所以 c = √100 = 10" },
            ],
            answer: "10 公尺",
          },
          {
            id: "e2",
            title: "求股長",
            problem:
              "一個直角三角形的斜邊長為 13，其中一股長為 5，求另一股的長度。",
            steps: [
              { label: "列出公式", content: "a² + 5² = 13²" },
              { label: "計算數值", content: "a² + 25 = 169" },
              { label: "移項並求出平方根", content: "a² = 144，所以 a = 12" },
            ],
            answer: "12",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "若直角三角形的兩股長分別為 5 和 12，則斜邊長為？",
            options: ["13", "15", "17", "60"],
            answer: "13",
            explanation: "5² + 12² = 25 + 144 = 169。√169 = 13。",
          },
          {
            id: "q2",
            type: "choice",
            question: "下列哪一組數字「不是」直角三角形的邊長 (畢氏數)？",
            options: ["3, 4, 5", "6, 8, 10", "7, 8, 9", "9, 12, 15"],
            answer: "7, 8, 9",
            explanation:
              "7² + 8² = 49 + 64 = 113，不等於 9² (81)。(其餘選項皆為 3,4,5 的倍數)。",
          },
          {
            id: "q3",
            type: "fill",
            question: "計算 √81 + √49 = ？",
            answer: "16",
            explanation: "√81 = 9，√49 = 7。9 + 7 = 16。",
            hint: "先分別求出兩個平方根再相加",
          },
        ],
        scientist: {
          name: "夏特萊侯爵夫人",
          nameEn: "Émilie du Châtelet",
          years: "1706–1749",
          field: "數學、物理學",
          bio: "法國自然哲學家與物理學家。她將牛頓的鉅著《自然哲學的數學原理》翻譯成法文，並在此之中推導了「動能與速度平方成正比」(E ∝ v²) 的概念。數學中的平方關係 (如同畢氏定理與平方根) 是她解釋物理世界宇宙法則的利器。",
        },
      },
      {
        id: "g8-u3",
        slug: "factorization",
        title: "因式分解",
        emoji: "🔑",
        scenarioTitle: "金庫密碼因子解鎖",
        scenarioDesc:
          "面對龐大複雜的多項式密碼鎖，我們需要使用「提公因式」和「十字交乘」技巧，把它分解成許多小因子來破解！",
        curriculumCode: "A-8-2",
        color: "#f5b641",
        concepts: [
          {
            title: "什麼是因式分解？",
            body: "因式分解就是多項式乘法的「倒轉」。就像把 15 拆成 3×5；我們也要把 x² + 5x + 6，拆回 (x + 2)(x + 3) 的形式。",
          },
          {
            title: "找公因式提取",
            body: "最基本的分解法：觀察每一項有沒有「共同的字母或數字」。把它們像抽屜一樣提出來，放到括號外面！",
            formula: "ax + ay = a(x + y)",
          },
          {
            title: "十字交乘法",
            body: "用來分解二次三項式 (ax² + bx + c) 非常管用。把二次項猜開，把常數項猜開，交叉相乘後加起來要是中間的項。",
            formula: "x^2 + 5x + 6 = (x + 2)(x + 3)",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "提公因式",
            problem: "因式分解：6x² + 9x",
            steps: [
              { label: "尋找數字公因數", content: "6 和 9 的最大公因數是 3" },
              { label: "尋找字母公因式", content: "x² 和 x 都有 x" },
              {
                label: "提出 3x",
                content: "6x² + 9x = 3x(2x) + 3x(3) = 3x(2x + 3)",
              },
            ],
            answer: "3x(2x + 3)",
          },
          {
            id: "e2",
            title: "十字交乘法",
            problem: "因式分解：x² + 7x + 10",
            steps: [
              {
                label: "分解頭尾",
                content: "x² 可以拆成 x 和 x。10 可以拆成 (1×10) 或 (2×5)",
              },
              {
                label: "交叉相乘檢驗",
                content: "若選 2 和 5：x×5 + x×2 = 7x，剛好符合中間項！",
              },
              { label: "寫出答案", content: "(x + 2)(x + 5)" },
            ],
            answer: "(x + 2)(x + 5)",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "若要因式分解 x² - x - 12，結果是？",
            options: [
              "(x - 3)(x + 4)",
              "(x + 3)(x - 4)",
              "(x - 2)(x + 6)",
              "(x + 2)(x - 6)",
            ],
            answer: "(x + 3)(x - 4)",
            explanation:
              "十字交乘：常數項為 -12，相加為 -1 (中間項)。只有 +3 和 -4 符合：3 × (-4) = -12，3 + (-4) = -1。",
          },
          {
            id: "q2",
            type: "choice",
            question: "計算並因式分解：3x² - 12x。下列何者提取正確？",
            options: ["x(3x - 12)", "3(x² - 4x)", "3x(x - 4)", "3x(x - 12)"],
            answer: "3x(x - 4)",
            explanation: "數字最高可提 3，字母可提 x。所以提出 3x。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "判斷題：利用平方差公式，因式分解 x² - 25 的結果其中一個括號是 (x + 5)，另一個括號是什麼？(請填括號內內容，例如 x-1)",
            answer: "x-5",
            explanation:
              "x² - 25 = x² - 5² = (x - 5)(x + 5)。另一個部分就是 x-5 囉。",
            hint: "套用前面學過的平方差公式倒轉",
          },
        ],
        scientist: {
          name: "瓊 · 克拉克",
          nameEn: "Joan Clarke",
          years: "1917–1996",
          field: "密碼學",
          bio: "英國數學家與密碼分析師。二戰期間，她在布萊切利園與艾倫·圖靈共事，是恩尼格瑪 (Enigma) 密碼機破解團隊中唯一的女性核心成員。從繁複的訊號中「提取出關鍵的破綻」(如同因式分解)，她為二戰的提早結束立下了不可磨滅的功勞。",
        },
      },
      {
        id: "g8-u4",
        slug: "sys-of-equations",
        title: "聯立方程式",
        emoji: "🐾",
        scenarioTitle: "寵物店的雙重謎題",
        scenarioDesc:
          "經典謎題「雞兔同籠」中，要怎麼只看頭和腳的數量，就知道有幾隻鳥幾隻兔子？學會二元一次聯立方程式！",
        curriculumCode: "A-7-4",
        color: "#e86da9",
        concepts: [
          {
            title: "為何需要二元？",
            body: "當我們同時有兩個未知的數量（例如貓和鳥），我們可以設兩個代數（如 x 和 y）。但兩個未知數需要「兩條獨立的線索（方程式）」才能解開！",
          },
          {
            title: "代入消去法",
            body: "這是一種策略：從第一條方程式中推導出 x 等於「一長串含有 y 的東西」，然後把這包東西「代入」第二條方程式，這樣 x 就消失了！",
          },
          {
            title: "加減消去法",
            body: "這是另一種策略：把兩條方程式排在上下，如果 x (或 y) 的數字長得一樣或互為相反數，我們就把這兩條式子相加或相減，一瞬間某個未知數就被消去了！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "經典雞兔同籠",
            problem:
              "牧場裡有雞和兔子。數一數共有 10 個頭，26 隻腳。請問雞和兔各幾隻？",
            steps: [
              {
                label: "列方程式",
                content:
                  "設雞 x 隻，兔 y 隻。頭：x + y = 10。腳：2x + 4y = 26。",
              },
              { label: "調整式子", content: "將第一式乘 2：2x + 2y = 20" },
              {
                label: "加減消去",
                content:
                  "第二式減掉新式子：(2x+4y) - (2x+2y) = 26 - 20 → 2y = 6",
              },
              {
                label: "解出答案",
                content:
                  "得出 y = 3 (兔)。代回第一式 x + 3 = 10，得 x = 7 (雞)。",
              },
            ],
            answer: "雞 7 隻，兔子 3 隻",
          },
          {
            id: "e2",
            title: "代入消去法",
            problem: "已知 y = 3x - 2，且 x + y = 14。求 x 和 y。",
            steps: [
              {
                label: "代入",
                content: "把第一式的 y，整個塞進第二式：x + (3x - 2) = 14",
              },
              { label: "解 x", content: "4x - 2 = 14 → 4x = 16 → x = 4" },
              {
                label: "代回求 y",
                content: "把 x = 4 代回第一式：y = 3(4) - 2 = 12 - 2 = 10",
              },
            ],
            answer: "x = 4, y = 10",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "要解聯立方程式 { x+y=5, x-y=1 }。若將兩式相加，可以得到什麼？",
            options: ["2y = 6", "2x = 6", "x = 4", "y = 4"],
            answer: "2x = 6",
            explanation:
              "左邊相加：(x+x) + (y-y) = 2x。右邊相加：5+1 = 6。因此 2x = 6。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "去文具店買 2 支筆和 3 本筆記本共 130 元；若買 1 支筆和 3 本筆記本共 110 元。一支筆多少元？",
            options: ["20", "30", "40", "50"],
            answer: "20",
            explanation:
              "看著兩句話，第二句比第一句少買了一支筆，花費少了 130 - 110 = 20 元。所以筆一支 20 元。這就是直覺版的加減消去！",
          },
          {
            id: "q3",
            type: "fill",
            question: "若 2x + y = 10 且 x = 3，請利用代入法求出 y = ？",
            answer: "4",
            explanation: "把 x=3 代入：2(3) + y = 10 → 6 + y = 10 → y = 4。",
            hint: "把 3 塞到 x 的位置",
          },
        ],
        scientist: {
          name: "王小雲",
          nameEn: "Wang Xiaoyun",
          years: "1966–",
          field: "密碼學",
          bio: "中國密碼學家。在全世界都堅信 MD5 和 SHA-1 這兩種國際公認的密碼雜湊函數「絕對不可能被破解」時，她提出了劃時代的碰撞方法將其破解，震驚了國際密碼學界。要解開由成千上萬條聯立式組成的密碼鎖，需要極度敏銳的數學直覺。",
        },
      },
      {
        id: "g8-u5",
        slug: "similar-figures",
        title: "幾何相似形",
        emoji: "📷",
        scenarioTitle: "攝影師的底片縮放魔法",
        scenarioDesc:
          "把照片放大與縮小時，照片裡每個人的形狀不變，只是尺寸改變了。這就是幾何學裡的「相似」魔力！",
        curriculumCode: "S-8-5",
        color: "#3ecfb2",
        concepts: [
          {
            title: "全等與相似的差別",
            body: "全等（≅）代表兩個圖形「形狀」與「大小」完全一模一樣。相似（~）代表兩個圖形「形狀」一模一樣，但是「大小」可能做了等比例的縮放！",
          },
          {
            title: "相似三角形的判定",
            body: "只要兩個三角形的對應邊成比例 (SSS相似)、對應的兩個角相等 (AA相似)，或兩邊成比例且夾角相等 (SAS相似)，它們必定相似！",
          },
          {
            title: "面積比的秘密",
            body: "如果兩個圖形相似，且長度放大為原來的 n 倍。則其「面積」會放大變為原來的 n² 倍喔！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "尋找對應邊",
            problem:
              "△ABC 與 △DEF 相似 (由 AA 相似)。已知 AB = 4, BC = 6；相對應的邊 DE = 10，請問 EF 等於多少？",
            steps: [
              {
                label: "列出比例關係",
                content:
                  "因為相似，所以短邊與長邊在兩個三角形中的比例必須相同： AB/DE = BC/EF",
              },
              { label: "帶入數字", content: "4/10 = 6/x" },
              { label: "交叉相乘解 x", content: "4x = 60，x = 15" },
            ],
            answer: "15",
          },
          {
            id: "e2",
            title: "面積倍數關係",
            problem:
              "小圓的半徑是 3 公分，大圓的半徑是 9 公分。請問大圓的面積是小圓的幾倍？",
            steps: [
              {
                label: "判斷邊長放大的倍數",
                content: "大圓半徑是小圓的：9 ÷ 3 = 3 倍",
              },
              {
                label: "推導面積倍數",
                content:
                  "根據相似形原則，邊長為 3 倍，則面積倍數為 3 的平方 = 9 倍。",
              },
            ],
            answer: "9 倍",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "判斷這兩個三角形是否相似：甲三角形的三內角為 50°, 60°, 70°。乙三角形的三內角為 60°, 70°, 50°。",
            options: ["是", "否", "條件不足"],
            answer: "是",
            explanation: "對應的三個角相等，滿足 AA (或 AAA) 相似性質。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若甲、乙兩相似多邊形的邊長比例為 2 : 5，則其面積比例為？",
            options: ["2 : 5", "4 : 10", "4 : 25", "8 : 125"],
            answer: "4 : 25",
            explanation:
              "面積比例會是邊界比例的「平方比」。所以是 2² : 5² = 4 : 25。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "有一個長方形，長寬分別為 6 和 4。要畫一個和它相似的長方形，已知新長方形的寬為 10，請問新長方形的長是多少？",
            answer: "15",
            explanation:
              "長/寬的比例必須維持一致。6 / 4 = x / 10。解得 4x = 60，x = 15。",
            hint: "用比例式：原長/原寬 = 新長/新寬",
          },
        ],
        scientist: {
          name: "瑪格麗特 · 漢彌爾頓",
          nameEn: "Margaret Hamilton",
          years: "1936–",
          field: "軟體工程",
          bio: "美國電腦科學家。她為阿波羅登月計畫撰寫了極其關鍵的機載飛行軟體。系統中強大的防錯設計，讓登月小艇在著陸的緊急讀秒中沒有當機。把紙上的程式碼正確「放大」並映射到現實的宇宙中，沒有她的編碼，人類可能無法踏上月球。",
        },
      },
      {
        id: "g8-u6",
        slug: "statistics",
        title: "資料與統計資料",
        emoji: "🎲",
        scenarioTitle: "桌遊設計師與勝率分析",
        scenarioDesc:
          "這款遊戲真的公平嗎？透過分析大量的骰子點數與玩家勝率，我們能發掘潛藏在資料背後的真相！",
        curriculumCode: "D-8-1",
        color: "#e89a6d",
        concepts: [
          {
            title: "資料的集中趨勢",
            body: "為了用「一個數字」代表一整群資料的長相，我們有三種武器：平均數(全部加起來除以個數)、中位數(將資料按大小排列，最中間的那個數)、眾數(出現最多次的數)。",
          },
          {
            title: "極端值的影響",
            body: "如果全班考試都在 80 分，只有一個人考 0 分，這個「極端值」會把平均分數拉得很低！這時候看「中位數」反而更能代表多數人的真實狀況。",
          },
          {
            title: "常見的統計圖表",
            body: "根據資料類型，我們可以繪製 直方圖(連續資料)、長條圖(分類資料)、折線圖(時間變化)、圓餅圖(百分比分佈)。圖表能讓數據一眼看穿。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "求中位數",
            problem: "求這組資料的中位數：24, 15, 30, 28, 12",
            steps: [
              { label: "從小到大排序", content: "12, 15, 24, 28, 30" },
              {
                label: "找出正中間的數字",
                content: "共有 5 個數字，正中間是第三個數字。",
              },
            ],
            answer: "24",
          },
          {
            id: "e2",
            title: "中位數：偶數筆資料",
            problem: "求這組資料的中位數：3, 9, 4, 7, 10, 6",
            steps: [
              { label: "從小到大排序", content: "3, 4, 6, 7, 9, 10" },
              {
                label: "找出正中間",
                content:
                  "有 6 個數字（偶數），正中間落在第 3 與第 4 個數字之間。",
              },
              { label: "求平均", content: "(6 + 7) ÷ 2 = 6.5" },
            ],
            answer: "6.5",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "某店五天的營業額（單位：萬元）為：2, 3, 2, 4, 14。請問哪一項數值最受到極端值 (14萬) 的影響？",
            options: ["平均數", "中位數", "眾數", "三者都一樣"],
            answer: "平均數",
            explanation:
              "極端值會大幅拉高總和，導致平均數偏離常態；但中位數（這組資料排好為 2, 2, 3, 4, 14，中位數是 3）不受極端值影響。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "一家冰淇淋店想要知道「哪一種口味最受歡迎」以決定進貨量，請問店長最應該參考哪個統計量？",
            options: ["平均數", "中位數", "眾數", "極端值"],
            answer: "眾數",
            explanation:
              "眾數是「出現最多次」的選項，最適合用來找出最熱門的商品分類。",
          },
          {
            id: "q3",
            type: "fill",
            question: "計算這組數字的平均數：8, 10, 12, 14, 16。(請填寫數字)",
            answer: "12",
            explanation:
              "總和 8+10+12+14+16 = 60。 60 ÷ 5 = 12。這組資料呈現等差性質，平均數剛好也是它的中位數！",
            hint: "全部加起來除以 個數",
          },
        ],
        scientist: {
          name: "葛楚德 · 考克斯",
          nameEn: "Gertrude Cox",
          years: "1900–1978",
          field: "統計學",
          bio: "美國統計學家，也是實驗設計領域的先驅。1940 年代，她創立了世界上最早的幾個統計學系之一。她致力於將理論統計學轉化為解決農業、生物學等現實問題的實用工具。資料若無正確的統計設計，只是雜亂無章的數字！",
        },
      },
      {
        id: "g8-u7",
        slug: "polynomial-division",
        title: "多項式除法與應用",
        emoji: "📦",
        scenarioTitle: "物流倉庫空間規劃師",
        scenarioDesc:
          "當你有一大塊面積，必須把它分割成長寬各異的貨架區。多項式除法就像一場立體空間的俄羅斯方塊切割！",
        curriculumCode: "A-8-2",
        color: "#f5b641",
        concepts: [
          {
            title: "直式除法原理",
            body: "跟數字的除法很像！把「被除數」排好，每次都先看「最高次方」的項，乘上一個數字讓它跟最高次方的項一樣，然後相減，一步步消掉。",
            formula: "(A \\div B = Q \\dots R) \\implies A = B \\times Q + R",
          },
          {
            title: "缺項補零",
            body: "如果除法過程中發現少了某個次方的項（例如只有 $x^2$ 和 常數，少了 $x$），一定要補上 $0x$，否則位數會對不齊，整個算錯！",
          },
          {
            title: "除法的餘數",
            body: "當最後減下來的結果，其 $\\text{最高次方}$ 已經「小於」除式的最高次方時，除法就結束了！剩下的東西就是「餘數多項式」。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "基礎多項式除法",
            problem: "計算 $(4x^2 + 6x - 2) \\div (2x)$",
            steps: [
              {
                label: "分配律",
                content:
                  "單項式除法可以直接分配：$\\frac{4x^2}{2x} + \\frac{6x}{2x} - \\frac{2}{2x}$",
              },
              {
                label: "化簡",
                content:
                  "$2x + 3 - \\frac{1}{x}$ （注意，這不是多項式，因為 x 在分母）",
              },
              {
                label: "若被除數是多項式",
                content: "通常求商與餘數：商為 $2x+3$，餘式為 $-2$",
              },
            ],
            answer: "商式：$2x+3$，餘式：$-2$",
          },
          {
            id: "e2",
            title: "缺項補零",
            problem: "計算 $(x^2 - 4) \\div (x - 2)$",
            steps: [
              { label: "被除數補零", content: "$x^2 + 0x - 4$" },
              {
                label: "直式第一步",
                content:
                  "看最高次：要消掉 $x^2$，所以商的首項放 $x$。減去 $x(x-2) = x^2 - 2x$",
              },
              {
                label: "直式第二步",
                content: "$(0x) - (-2x) = 2x$。再把 -4 放下來。",
              },
              {
                label: "直式第三步",
                content:
                  "要消掉 $2x$，加上商 2。減去 $2(x-2) = 2x - 4$。餘式為 0！",
              },
            ],
            answer: "商：x+2，餘數：0",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "若多項式 A 除以 B 的商式是 Q，餘式是 0，那麼這代表 A 其實是 B 的什麼？",
            options: ["因式", "倍式", "相反數", "倒數"],
            answer: "倍式",
            explanation:
              "因為 A = B × Q + 0，就像 12 = 3 × 4，12 是 3 的倍數，A 也是 B 的倍式。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "進行直式除法 $(x^2 + cx + 5) \\div (x - 1)$ 時，若最後餘式為 0，請問 c 是多少？",
            options: ["-5", "-6", "-4", "6"],
            answer: "-6",
            explanation:
              "根據被除式法則 (餘式定理)，代入 x=1 會等於餘數 0。$1^2 + c(1) + 5 = 0 \\implies c = -6$。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "有一個長方形面積為 $2x^2 + 7x + 6$，若寬是 $x+2$，請問長的前面項係數是多少？（即包含 x 的那項的數字）",
            answer: "2",
            explanation:
              "長 = 面積 ÷ 寬。$(2x^2 + 7x + 6) \\div (x+2) = 2x + 3$。x 前面的係數是 2。",
            hint: "用除法看看！首項要產生 2x²，需要拿 x 乘上幾倍的 x 呢？",
          },
        ],
        scientist: {
          name: "莉澤 · 邁特納",
          nameEn: "Lise Meitner",
          years: "1878–1968",
          field: "物理學",
          bio: "奧地利瑞典裔物理學家。她與奧托·哈恩共同發現了「核分裂」現象。當鈾原子核被中子撞擊時，它就會像多項式除法一樣「分裂」成較小的原子，同時釋放驚人的能量多項式（餘數能量）。她雖然貢獻巨大，卻因性別與時代被諾貝爾獎遺漏。",
        },
      },
      {
        id: "g8-u8",
        slug: "arithmetic-sequence",
        title: "等差數列與級數",
        emoji: "🐝",
        scenarioTitle: "蜂巢階梯建築師",
        scenarioDesc:
          "每一層樓梯增加固定的磚塊，第一層 3 塊，第二層 5 塊... 第五十層需要幾塊？加總又需要幾塊？學會數列，你就能預測未來！",
        curriculumCode: "N-8-1",
        color: "#e89a6d",
        concepts: [
          {
            title: "什麼是等差數列？",
            body: "一個數列中，每一個數字都比前面那個數字多了「固定的一個數」，這個固定的數稱為「公差 $(d)$」。第一項稱為「首項 $(a_1)$」。",
          },
          {
            title: "第 n 項的公式",
            body: "要求第 n 個數字 $(a_n)$ 是多少，不用一個一個加！公式是：首項加上 $(n-1)$ 個公差。",
            formula: "a_n = a_1 + (n - 1)d",
          },
          {
            title: "等差級數求和",
            body: "級數就是「數列相加」。求和的公式可以想像成：(第一項 + 最後一項) 乘以這堆數字的「數量」，然後「除以 2」。這方法是數學王子高斯小時候發現的！",
            formula: "S_n = \\frac{n(a_1 + a_n)}{2}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "求第 n 項",
            problem: "一個等差數列 4, 7, 10, 13...。求第 20 項是多少？",
            steps: [
              {
                label: "找首項與公差",
                content: "首項 $a_1 = 4$，公差 $d = 7-4 = 3$",
              },
              {
                label: "帶入公式",
                content: "$a_{20} = a_1 + (20-1) \\times d = 4 + 19 \\times 3$",
              },
              { label: "計算結果", content: "$4 + 57 = 61$" },
            ],
            answer: "61",
          },
          {
            id: "e2",
            title: "求級數總和",
            problem: "求出從 1 加到 100 的總和。",
            steps: [
              {
                label: "找出三大拼圖",
                content:
                  "首項 $a_1 = 1$，末項 $a_{100} = 100$，總共有 $n = 100$ 項。",
              },
              {
                label: "帶入求和公式",
                content: "$S_{100} = \\frac{100 \\times (1 + 100)}{2}$",
              },
              { label: "計算結果", content: "$50 \\times 101 = 5050$" },
            ],
            answer: "5050",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "若等差數列為 10, x, 4...，請問 x 是多少？",
            options: ["8", "7", "6", "5"],
            answer: "7",
            explanation:
              "等差數列特性，x 是 10 和 4 的平均值：$(10+4)/2 = 7$。因此公差為 -3。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "戲院座位第一排有 20 個位子，每一排都比前一排多 2 個位子。請問第 10 排有幾個位子？",
            options: ["38", "40", "42", "290"],
            answer: "38",
            explanation: "$a_{10} = a_1 + 9d = 20 + 9(2) = 20 + 18 = 38$。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "承上題，請問從第 1 排到第 10 排，這間戲院「總共」有幾個位子？(請填數字)",
            answer: "290",
            explanation:
              "總和 $S_{10} = 10 \\times (20 + 38) / 2 = 5 \\times 58 = 290$。",
            hint: "用高斯的梯形公式：(上底 20 + 下底 38) × 高 10 ÷ 2",
          },
        ],
        scientist: {
          name: "瑪麗安 · 米爾札哈尼",
          nameEn: "Maryam Mirzakhani",
          years: "1977–2017",
          field: "數學、幾何與拓樸學",
          bio: "第一位獲得菲爾茲獎（數學界最高榮譽）的女性。她擅長將看似複雜彎曲的幾何曲面，切分成規則的片段。雖然她主要研究非歐幾何，但任何龐大的數學都是建立在數列和級別等最優雅、簡潔的規律之上。",
        },
      },
      {
        id: "g8-u9",
        slug: "quadratic-equation",
        title: "一元二次方程式",
        emoji: "🚀",
        scenarioTitle: "火星升空軌跡計算",
        scenarioDesc:
          "火箭的拋物線軌道、自由落體掉落的時間，全都被寫在 $x^2$ 的式子裡！你要如何找出那個神祕的解呢？",
        curriculumCode: "A-8-3",
        color: "#c46de8",
        concepts: [
          {
            title: "什麼是一元二次方程式",
            body: "長相是 $ax^2 + bx + c = 0$。其中最高次方是 2，所以最多會有「兩個」答案（兩個根）。",
          },
          {
            title: "利用十字交乘求解",
            body: "把方程式利用之前學過的因式分解變成 $(x+A)(x+B)=0$。如果相乘要等於 0，那一定其中一個括號是 0！所以 $x = -A$ 或 $x = -B$。",
          },
          {
            title: "公式解 (大絕招)",
            body: "如果十字交乘解不出來怎麼辦？我們有公式解！其中的 $b^2 - 4ac$ 叫判別式，是大於零（兩解）、等於零（重根）還是小於零（無解）的評審員！",
            formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "因式分解求解",
            problem: "解方程式 $x^2 - 5x + 6 = 0$",
            steps: [
              { label: "十字交乘法", content: "拆分：$(x - 2)(x - 3) = 0$" },
              {
                label: "分別等於 0",
                content: "若相乘為零，則 $x - 2 = 0$ 或 $x - 3 = 0$",
              },
              { label: "得出雙解", content: "$x = 2$ 或 $x = 3$" },
            ],
            answer: "x = 2 或 3",
          },
          {
            id: "e2",
            title: "平方根與平移求解",
            problem: "解方程式 $(x + 4)^2 = 25$",
            steps: [
              {
                label: "兩邊開根號",
                content:
                  "一個數平方後是 25，那這個數可能是 5 或 -5。所以 $x + 4 = \\pm 5$",
              },
              {
                label: "拆分兩條路",
                content: "第一條路：$x + 4 = 5$，得 $x = 1$",
              },
              {
                label: "繼續第二條路",
                content: "第二條路：$x + 4 = -5$，得 $x = -9$",
              },
            ],
            answer: "x = 1 或 -9",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "關於方程式 $x^2 + 4x + 4 = 0$，請問它有幾個解？",
            options: ["兩個相異解", "重根 (1 個解)", "無解", "不知道"],
            answer: "重根 (1 個解)",
            explanation: "配成完全平方式：$(x+2)^2 = 0$，所以 x = -2 (重根)。",
          },
          {
            id: "q2",
            type: "choice",
            question: "解方程式 $x(x - 5) = 0$",
            options: [
              "只有 x = 5",
              "只有 x = 0",
              "x = 0 或 x = 5",
              "x = 5 或 x = -5",
            ],
            answer: "x = 0 或 x = 5",
            explanation:
              "已經分解好了！當兩個東西相乘為0，代表其中一個必定是0。所以 x=0 或 x-5=0。",
          },
          {
            id: "q3",
            type: "fill",
            question: "若 $x^2 = 81$，請問 x 所有可能的正數解答是？",
            answer: "9",
            explanation: "正解是 9，負解是 -9。題目要求正數，所以是 9。",
            hint: "哪個正數乘以自己會變成 81 呢？",
          },
        ],
        scientist: {
          name: "克莉絲汀 · 達登",
          nameEn: "Christine Darden",
          years: "1942–",
          field: "航空航天工程",
          bio: "美國NASA的數學家與工程師。她專攻超音速飛行的氣流動力學與音爆研究。飛行軌跡與音爆圓錐的模型大量依賴高階非線性或二次方程式，她透過電腦優化這些解，幫助降低超音速飛機產生的惱人噪音！",
        },
      },
      {
        id: "g8-u10",
        slug: "geometric-constructions",
        title: "尺規作圖與垂直平分線",
        emoji: "🗺️",
        scenarioTitle: "神秘三角百慕達測繪",
        scenarioDesc:
          "在茫茫大海上，只靠「圓規」（等距離）跟「直尺」（一直線），你能不能找到兩個小島正中央的寶藏點？",
        curriculumCode: "S-8-2",
        color: "#6db0e8",
        concepts: [
          {
            title: "什麼是尺規作圖",
            body: "古希臘人發明的幾何遊戲。只能用沒有刻度的直尺畫直線，用圓規畫圓或擷取等長的線段。用這兩個工具就能創造出完美的幾何圖案！",
          },
          {
            title: "作垂直平分線 (中垂線)",
            body: "畫法：分別以線段的兩端為圓心，大於一半長為半徑畫弧。把兩個交點連起來，這條線不僅垂直線段，還平分了它！",
          },
          {
            title: "作角平分線",
            body: "畫法：以角的頂點為圓心畫弧截出兩點，再以這兩點為圓心畫等半徑的弧找到交點，連起來就平分了這個角！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "中垂線上點的性質定理",
            problem:
              "如果在線段 AB 的中垂線上選一點 P，請問 PA 和 PB 的長度關係是什麼？",
            steps: [
              { label: "分析對稱性", content: "中垂線是一條完全對稱的線。" },
              {
                label: "全等證明",
                content:
                  "利用 SAS 全等可以證明左右兩個直角三角形全等，因此斜邊必然等長。",
              },
            ],
            answer: "PA = PB (等長)",
          },
          {
            id: "e2",
            title: "角平分線的性質",
            problem:
              "點 Q 在 ∠AOB 的角平分線上，請問它到 OA 跟 OB 這兩條邊的「垂直距離」哪個比較長？",
            steps: [
              {
                label: "回想性質",
                content:
                  "角平分線上的任意一點，到角的兩邊距離(垂直喔)會「等長」。",
              },
            ],
            answer: "一樣長",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "你要找到一個寶藏，藏寶圖說：這個寶藏「距離甲島和乙島一樣遠」。請問寶藏會在哪一條線上？",
            options: [
              "甲乙的角平分線",
              "甲乙的中線",
              "甲乙的垂直平分線",
              "甲乙的平行線",
            ],
            answer: "甲乙的垂直平分線",
            explanation:
              "垂直平分線（中垂線）上的每一個點，到線段兩個端點（甲、乙）的距離都會完全相等。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "尺規作圖時，為什麼畫中垂線的半徑必須「大於線段的一半」？",
            options: [
              "因為好看",
              "如果不大於一半，兩個圓弧就不會相交了！",
              "為了畫出大圓",
              "規定就是規定",
            ],
            answer: "如果不大於一半，兩個圓弧就不會相交了！",
            explanation:
              "如果半徑小於一半，兩個圓就會碰不到對方，找不到交點連線啦！",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "已知 ∠A = 60°，若經過兩次角平分線尺規作圖，最終能切出的最小角度是多少度？",
            answer: "15",
            explanation: "第一次切分 60 ÷ 2 = 30。第二次切分 30 ÷ 2 = 15。",
            hint: "角平分線就是切成一半",
          },
        ],
        scientist: {
          name: "海帕蒂亞",
          nameEn: "Hypatia of Alexandria",
          years: "360–415",
          field: "數學、天文學、哲學",
          bio: "古希臘亞歷山大城的偉大女學者。她是歷史上第一位有詳細記載的女性數學家。她教導幾何、哲學與星盤的運作。傳說中她能用最純粹的邏輯與尺規作圖，證明天體運行的軌跡，可惜在宗教迫害中英年早逝。",
        },
      },
      {
        id: "g8-u11",
        slug: "triangle-properties",
        title: "三角形邊角關係",
        emoji: "🎪",
        scenarioTitle: "馬戲團帳篷設計師",
        scenarioDesc:
          "搭建大帳篷時，三根支柱的長短必須符合幾何限制，否則帳篷會直接塌下來！了解三角形的邊長法則，成為頂尖建築師！",
        curriculumCode: "S-8-1",
        color: "#f5b641",
        concepts: [
          {
            title: "三角形邊長定理",
            body: "一個三角形隨便怎麼畫，其「任何兩邊加起來，一定大於第三邊」！如果拿長度 1, 2, 5 的三根木條，你絕對拼不出三角形！",
          },
          {
            title: "大邊對大角",
            body: "在同一個三角形中，比較長的邊，它對面的角一定比較大；比較短的邊，對面的角就比較小。反過來說，大角也對大邊！",
          },
          {
            title: "外角定理",
            body: "三角形任何一個頂點的「外角」（延伸出去的角度），一定會等於「另外兩個遙遠的內角」加起來的總和！",
            formula: "\\text{外角 } = \\angle 1 + \\angle 2",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "邊長可行性判斷",
            problem:
              "下列哪一組長度可以拼成三角形？ A: (3, 4, 8), B: (5, 5, 10), C: (6, 8, 12)",
            steps: [
              {
                label: "套用兩邊之和大於第三邊",
                content:
                  "只要檢查「最短的兩條邊加起來」有沒有大於最長的邊即可。",
              },
              { label: "檢查 A", content: "3 + 4 = 7 < 8，不行拼成！" },
              {
                label: "檢查 B",
                content: "5 + 5 = 10，不大於 10 (剛好變平的直線)，不行！",
              },
              { label: "檢查 C", content: "6 + 8 = 14 > 12，可以拼成。" },
            ],
            answer: "選項 C：(6, 8, 12)",
          },
          {
            id: "e2",
            title: "第三邊範圍估計",
            problem: "已知三角形兩邊分別是 5 和 8，則第三邊 x 的長度範圍？",
            steps: [
              {
                label: "最大極限",
                content:
                  "第三邊必須小於另外兩邊相加：$x < 5 + 8 \\implies x < 13$",
              },
              {
                label: "最小極限",
                content:
                  "第三邊必須大於另外兩邊相減：$x > 8 - 5 \\implies x > 3$",
              },
            ],
            answer: "3 < x < 13",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "△ABC 中，已知 AB=7，BC=9。若 ∠C 是最小角，則 AC 邊可能是多少？（註：AC為整數）",
            options: ["11", "8", "6", "16"],
            answer: "11",
            explanation:
              "因為 ∠C 是最小角，所以 ∠C 對面的邊 (AB=7) 是最小的邊！因此 7 是最短邊。而第三邊 AC 必須小於 7+9=16，但 AC > 7，且 BC=9 > 7，若 AC 不是最短的，那選項中11符合 AC大於其他且滿足邊長條件。(實際範圍：9-7 < AC < 9+7 => 2 < AC < 16，但題意說 AB(7) 最小所以 AC 必定大於7！)",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若某三角形有兩個內角分別為 35° 和 75°，請問第三個角的外角是幾度？",
            options: ["70°", "110°", "140°", "115°"],
            answer: "110°",
            explanation:
              "外角定理：第三角的外角 = 其他兩個內角的和。所以 = 35° + 75° = 110°。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "拿長度為 3cm, 5cm, x cm (x為整數) 的竹竿來拼三角形，請問 x 有幾種可能的整數解？",
            answer: "5",
            explanation:
              "5-3 < x < 5+3，即 2 < x < 8。可能的整數有 3, 4, 5, 6, 7，總共 5 個！",
            hint: "先找出 x 的極限範圍 (相減 < x < 相加)",
          },
        ],
        scientist: {
          name: "索菲 · 熱爾曼",
          nameEn: "Sophie Germain",
          years: "1776–1831",
          field: "數學、物理",
          bio: "法國的數學英雄！在法國大革命期間困在圖書館自學。因為身為女性，她用假名「勒布朗」與高斯等大師通信。她後來對「彈性表面」理論提出開創性解法，幫助建築師理解鐵建築在受力時的「邊角扭曲關係」，為艾菲爾鐵塔的建造奠定了數理基礎！",
        },
      },
      {
        id: "g8-u12",
        slug: "quadrilateral-properties",
        title: "特殊四邊形性質",
        emoji: "💎",
        scenarioTitle: "鑽石切割與珠寶設計",
        scenarioDesc:
          "切出一顆完美對稱的鑽石，仰賴平行線、對角線與等腰梯形的幾何原理！四邊形的世界隱藏著哪些神祕規則？",
        curriculumCode: "S-8-3",
        color: "#3ecfb2",
        concepts: [
          {
            title: "平行四邊形",
            body: "有兩組對邊分別「互相平行」的四邊形。它的超級性質是：對邊相等、對角相等，而且「對角線互相平分」（在正中間交叉切成兩半）。",
          },
          {
            title: "菱形與長方形 (矩形)",
            body: "菱形：四邊等長，它的對角線會「互相垂直」。長方形：四個角都是 90 度，它的對角線會「等長」。",
          },
          {
            title: "等腰梯形",
            body: "只有一組對邊平行，但兩條不平行的邊如果等長，就叫等腰梯形！它非常對稱，底角相等，對角線也是一樣長！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "長方形的對角線判斷",
            problem:
              "工匠要做一個絕對垂直的長方型畫框。不靠量角器，如果他拿捲尺量出兩條對角線長度相等，這樣能保證它是長方形嗎？",
            steps: [
              {
                label: "前置條件",
                content: "首先框架的對邊必須長度一樣（平行四邊形）。",
              },
              {
                label: "對角線性質",
                content:
                  "在平行四邊形中，只要「對角線等長」，那它四個角就百分之百會被撐成直角，成為長方形（矩形）。",
              },
            ],
            answer: "能保證（配合對邊相等的條件）",
          },
          {
            id: "e2",
            title: "菱形的計算",
            problem:
              "一個菱形的兩條對角線長度分別是 6 和 8。請問它的周長是多少？",
            steps: [
              {
                label: "思考對角線性質",
                content:
                  "菱形對角線會「互相垂直」且「平分」。所以把它切成四個小直角三角形。",
              },
              {
                label: "看小三角形",
                content: "小三角形兩股長為：6÷2=3，8÷2=4。",
              },
              {
                label: "算邊長",
                content:
                  "斜邊就是菱形的邊長，因為是直角三角形，3-4-5！邊長是 5。",
              },
              { label: "算周長", content: "菱形四邊等長：5 × 4 = 20。" },
            ],
            answer: "20",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "下列哪一種四邊形的對角線必會「互相平分且垂直」？",
            options: ["等腰梯形", "一般的平行四邊形", "長方形", "菱形"],
            answer: "菱形",
            explanation:
              "對角線必定垂直是菱形的最大特徵（正方形也是菱形的一種，所以也具備）。長方形跟等腰梯形對角線等長但不一定垂直！",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "平行四邊形 ABCD 中，若 ∠A = 110°，請問相對的 ∠C 和相鄰的 ∠B 分別是？",
            options: ["110°, 70°", "70°, 110°", "70°, 70°", "110°, 110°"],
            answer: "110°, 70°",
            explanation:
              "平行四邊形對角相等 (∠C=110°)，鄰角互補 (∠B=180°-110°=70°)。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若等腰梯形的上底為 4，下底為 10，其中線（連接兩腰中點）的長度是多少？",
            answer: "7",
            explanation:
              "梯形中線定理：中線長等於上底與下底連線的平均！ (4 + 10) / 2 = 7。",
            hint: "把上面和下面加起來除以二，就是中間地帶的長度囉。",
          },
        ],
        scientist: {
          name: "吳健雄",
          nameEn: "Chien-Shiung Wu",
          years: "1912–1997",
          field: "物理學",
          bio: "被譽為「物理學界第一夫人」。她策劃並執行了極為精密的鈷-60對稱性檢測實驗，推翻了長久以來物理學界堅信的「宇稱守恆」定律（即宇宙不一定完全鏡像對稱）。就像幾何中的對稱性質，如果不親自用精確的實驗去驗證它，就不要輕易相信直覺的對稱規律！",
        },
      },
    ],
  },
  {
    id: "g9",
    slug: "grade-9",
    label: "國三",
    color: "#6de89a",
    emoji: "🚀",
    units: [
      {
        id: "g9-u1",
        slug: "geometric-proof",
        title: "幾何推理與證明",
        emoji: "⚖️",
        scenarioTitle: "數學法院辯護律師",
        scenarioDesc:
          "在數學的法庭上，光說「看起來像」是不夠的！你必須拿出「已知條件」結合「幾何定理」，一步步推理出無懈可擊的證明！",
        curriculumCode: "S-9-1",
        color: "#6de89a",
        concepts: [
          {
            title: "什麼是幾何證明？",
            body: "證明就是從「已知條件（因為...）」出發，根據公理或定理，推導出「結論（所以...）」。證明過程必須嚴謹，不能靠目測！",
          },
          {
            title: "全等與相似的應用",
            body: "證明題中最常用的武器就是三角形的「全等性質 (SSS, SAS, ASA, AAS, RHS)」與「相似性質 (AAA, SAS, SSS)」。只要證明全等，對應邊和對應角就一定相等！",
          },
          {
            title: "反證法",
            body: "如果正著證明很難，就先假設「結論是錯的」，然後推導出一個不合理的矛盾結果，以此證明原來的結論一定正確！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "利用全等證明線段相等",
            problem:
              "已知：在 △ABC 與 △DEF 中，AB = DE，∠A = ∠D，AC = DF。求證：BC = EF。",
            steps: [
              { label: "找條件", content: "已知有兩條邊和它們的夾角相等。" },
              { label: "引定理", content: "根據 SAS 全等性質，△ABC ≅ △DEF。" },
              {
                label: "得結論",
                content: "因為三角形全等，對應邊必相等，所以 BC = EF！",
              },
            ],
            answer: "由 SAS 證明全等得證。",
          },
          {
            id: "e2",
            title: "奇偶數證明",
            problem: "證明：兩個奇數相加必為偶數。",
            steps: [
              {
                label: "代數設定",
                content: "設兩個奇數為 2m+1 與 2n+1 (m, n 為整數)。",
              },
              { label: "運算", content: "(2m+1) + (2n+1) = 2m + 2n + 2" },
              {
                label: "化簡與結論",
                content:
                  "提公因數得 2(m+n+1)。因為是 2 的倍數，所以必然是偶數！",
              },
            ],
            answer: "得證，和為 2 的倍數。",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "進行幾何證明時，若要推導「對應角相等」，通常會先證明兩個三角形具有什麼關係？",
            options: ["面積相等", "全等或相似", "平行", "垂直"],
            answer: "全等或相似",
            explanation:
              "若兩個三角形全等，對應角相等；若相似，對應角也相等。這是最常見的幾何橋樑。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "「因為 ∠A 與 ∠B 互補，且 ∠B 與 ∠C 互補，所以 ∠A = ∠C。」這句話使用了哪一種邏輯推理？",
            options: [
              "反證法",
              "輾轉相除法",
              "直接演繹邏輯 (等量代換)",
              "歸納法",
            ],
            answer: "直接演繹邏輯 (等量代換)",
            explanation:
              "∠A = 180 - ∠B，∠C = 180 - ∠B。兩者都等於同一個東西，所以兩者相等。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若要證明直角三角形的兩個銳角互餘，因為內角和為 180 度，減去直角 (幾度？) 後，剩下的兩個角相加必定是 90 度。",
            answer: "90",
            explanation: "直角是 90°，所以 180° - 90° = 90°，即兩銳角互餘。",
            hint: "直角的角度是多少？",
          },
        ],
        scientist: {
          name: "艾米 · 諾特",
          nameEn: "Emmy Noether",
          years: "1882–1935",
          field: "抽象代數、理論物理",
          bio: "愛因斯坦稱她為「數學史上最重要的女性」。她發展了抽象代數，並提出了著名的「諾特定理」，嚴謹地「證明」了物理學中對稱性與守恆定律之間的數學關係，是現代物理學的基石。",
        },
      },
      {
        id: "g9-u2",
        slug: "proportional-segments",
        title: "平行線截比例線段",
        emoji: "🌉",
        scenarioTitle: "跨海大橋鋼索設計",
        scenarioDesc:
          "遠方的跨海大橋上，固定間距的垂直鋼索畫出美麗的平行線。如何利用平行的力量，測量出無法直接觸及的橋樑比例？",
        curriculumCode: "N-9-1",
        color: "#6db0e8",
        concepts: [
          {
            title: "平行線截比例線段",
            body: "如果有三條(或更多)平行線，切過隨便兩條直線。就算這兩條線歪七扭八，它們被平行線切出來的「線段比例」一定會一模一樣！",
          },
          {
            title: "三角形的平行底線",
            body: "在一個三角形中，如果在中間畫一條跟底邊平行的線，這條線會把旁邊的兩條腰「等比例切開」！這是相似三角形的直接結果。",
          },
          {
            title: "重心與中線比例",
            body: "三角形的三條中線會交於一點，稱為「重心」。重心會把每一條中線切成「2：1」的完美比例！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "平行截比例",
            problem:
              "三條平行線 L1, L2, L3 截過直線 M 產生線段 A=4, B=6。截過直線 N 產生線段 C=10, D=x。求 x？",
            steps: [
              {
                label: "列出比例式",
                content: "因為平行截比例，所以 A：B = C：D",
              },
              { label: "代入數字", content: "4 / 6 = 10 / x" },
              { label: "交叉相乘", content: "4x = 60，x = 15" },
            ],
            answer: "x = 15",
          },
          {
            id: "e2",
            title: "三角形平行線段",
            problem: "△ABC 中，DE 平行 BC，若 AD=3，DB=2，AE=6，求 EC = ？",
            steps: [
              {
                label: "用截比例線段定理",
                content: "因為 DE // BC，所以 AD：DB = AE：EC",
              },
              {
                label: "計算",
                content: "3：2 = 6：EC。可看出 6 是 3 的兩倍。",
              },
              { label: "答案", content: "EC 就是 2 的兩倍 = 4" },
            ],
            answer: "EC = 4",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "若一條直線將三角形的兩邊截成比例相同的線段，則這條線與三角形的第三邊有何關係？",
            options: ["互相垂直", "互相平行", "長度相等", "沒有關係"],
            answer: "互相平行",
            explanation:
              "這是平行線截比例線段定理的逆定理！切出等比例的線，必定平行底邊。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "重心 G 將三角形中線 AD 分成兩段 AG 與 GD，請問 AG : GD 的比例為何？",
            options: ["1:1", "2:1", "3:1", "3:2"],
            answer: "2:1",
            explanation:
              "重心的幾何特性，靠近頂點的線段(AG)是靠近底邊線段(GD)長度的兩倍。",
          },
          {
            id: "q3",
            type: "fill",
            question: "△PQR 中，ST 平行 QR。PS=4，SQ=8，PT=5，則 TR 是多少？",
            answer: "10",
            explanation: "4 : 8 = 5 : TR。4/8=1/2，所以 TR = 5 × 2 = 10。",
            hint: "利用左邊的比例等於右邊的比例。",
          },
        ],
        scientist: {
          name: "艾蜜莉 · 羅布林",
          nameEn: "Emily Warren Roebling",
          years: "1843–1903",
          field: "土木工程",
          bio: "她被視為建設紐約布魯克林大橋的首席工程師。當她的丈夫病倒時，她接下了監督大橋建設的重擔。大橋的懸索與平行垂線涉及極為複雜的承載力與比例幾何，她在幾何工程與材料學上的精算，保證了這座劃時代大橋的穩固與完工。",
        },
      },
      {
        id: "g9-u3",
        slug: "circle-properties",
        title: "圓的性質：弦與切線",
        emoji: "🚲",
        scenarioTitle: "腳踏車輪齒輪力學",
        scenarioDesc:
          "腳踏車鏈條與齒輪咬合的地方，就是完美的「切線」！認識半徑與切線的直角交鋒，拆解圓的力學奧秘！",
        curriculumCode: "S-9-2",
        color: "#e86da9",
        concepts: [
          {
            title: "什麼是弦與弦心距？",
            body: "「弦」是圓上兩點連起來的線段，最長的弦就是直徑。而從圓心畫垂直線到弦上，這段距離叫「弦心距」。弦心距一定會「平分」這條弦！",
          },
          {
            title: "切線與切點",
            body: "一條直線如果只跟圓碰到「一個點」，這條線叫「切線」，碰到的點叫「切點」。超重要定理：圓心連到切點的半徑，一定跟切線「互相垂直(90度)」！",
          },
          {
            title: "圓外切線長度等長定理",
            body: "從圓外面的一個點 P，畫兩條切線碰到圓的 A 和 B 點。那麼 PA 跟 PB 這兩條切線段的長度，一定會一模一樣！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "弦與畢氏定理",
            problem:
              "一個半徑為 5 的圓，裡面有一條長度為 8 的弦，請問弦心距是多少？",
            steps: [
              {
                label: "弦心距平分弦",
                content: "長度 8 的弦被平分成兩半，每一半是 4。",
              },
              {
                label: "畫出直角三角形",
                content: "半徑(5)、弦的一半(4)、弦心距組成直角三角形。",
              },
              { label: "畢氏定理", content: "3-4-5 三角形！所以弦心距是 3。" },
            ],
            answer: "3",
          },
          {
            id: "e2",
            title: "切線段應用",
            problem:
              "從圓外一點 P 到圓有兩條切線 PA, PB，若 PA = 12，請問 PB 等於多少？",
            steps: [
              {
                label: "切線段等長",
                content: "根據圓外一點的切線性質，兩條切線段必等長。",
              },
            ],
            answer: "12",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "若一條直線為圓的切線，且圓心為 O，切點為 P。請問直線與 OP 半徑的夾角是幾度？",
            options: ["45°", "60°", "90°", "180°"],
            answer: "90°",
            explanation: "切線必垂直於「通過切點的半徑」，因此夾角為 90 度。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "同一個圓中，如果兩條弦的長度一樣長，那它們的「弦心距」會有什麼關係？",
            options: ["不一定", "一樣長", "較長的弦弦心距較長", "垂直"],
            answer: "一樣長",
            explanation:
              "等弦必有等弦心距。弦越長，距離圓心越近；長度相同的弦，與圓心的距離（弦心距）也相同。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若圓的半徑是 10，弦心距是 6。利用畢氏定理，請算出這條弦的「總長度」是多少？",
            answer: "16",
            explanation:
              "畢氏定理：$10^2 - 6^2 = 64$。開根號得到 8，這是弦的「一半」。總長 8 × 2 = 16。",
            hint: "先算出弦的一半(股)，再乘以2喔！(6-8-10直角三角形)",
          },
        ],
        scientist: {
          name: "雪莉 · 安 · 傑克遜",
          nameEn: "Shirley Ann Jackson",
          years: "1946–",
          field: "理論物理",
          bio: "第一位獲得麻省理工學院博士學位的非裔美國女性。她致力於凝聚態物理研究，而粒子的繞射與迴旋加速器軌道中，充滿了圓的切線與法線力學。她的研究為 Caller ID (來電顯示) 與光纖電纜等現代通訊科技奠定了基礎。",
        },
      },
      {
        id: "g9-u4",
        slug: "circle-angles",
        title: "圓的角：圓周角與圓心角",
        emoji: "🍕",
        scenarioTitle: "披薩精準切割機器人",
        scenarioDesc:
          "切比薩不僅要看面積，還要看扇形的邊緣弧度！當你在圓的不同位置觀察圓弧，角度會有什麼奇妙的縮放關係？",
        curriculumCode: "S-9-2",
        color: "#e89a6d",
        concepts: [
          {
            title: "圓心角",
            body: "頂點在「圓心」的角。圓心角吃掉（對應）的弧長度，在度數上「完全等於」這個圓心角的度數！(例如圓心角 60度，這段弧就是 60度)。",
          },
          {
            title: "圓周角",
            body: "頂點在「圓周邊緣」上的角。圓周角的度數，永遠只有它所對應弧度數的「一半」！同一條弧對應出的所有圓周角都會相等。",
          },
          {
            title: "半圓的圓周角",
            body: "如果你對應的弧剛好是半圓 (180度)，因為圓周角是弧的一半，所以它的角度永遠是完美的 90度 直角！這是畫直角超好用的技巧。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "圓周角與圓心角的轉換",
            problem:
              "一個圓中，圓心角 ∠AOB = 80°。如果點 C 在圓周上，請問 ∠ACB (圓周角) 是幾度？",
            steps: [
              {
                label: "找對應的弧",
                content: "∠AOB 對應弧 AB，所以弧 AB 是 80°。",
              },
              {
                label: "算圓周角",
                content: "∠ACB 對應相同的弧 AB，但它是圓周角，度數是弧的一半。",
              },
              { label: "結論", content: "80 ÷ 2 = 40°" },
            ],
            answer: "40°",
          },
          {
            id: "e2",
            title: "看見半圓的直角",
            problem:
              "AB 是圓的直徑，C 為圓上任意一點(不等於A或B)。請問 △ABC 是什麼形狀？",
            steps: [
              {
                label: "找對應弧",
                content: "AB是直徑，把它切成兩個 180° 的半圓弧。",
              },
              {
                label: "計算角 C",
                content: "∠C 的兩邊踩在A和B，對應180°的弧。",
              },
              { label: "得出度數", content: "180 ÷ 2 = 90°，所以是直角。" },
            ],
            answer: "直角三角形",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "若弧 CD 的度數是 100°，點 P 是圓周上的一點，則圓周角 ∠CPD 是幾度？",
            options: ["50°", "100°", "200°", "25°"],
            answer: "50°",
            explanation:
              "圓周角的度數是其所對應弧的度數的一半。100° / 2 = 50°。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "從這個性質：「同一條弧對應的圓周角都會相等」，可以得知如果你坐在電影院的圓弧形後排，那什麼會是一樣的？",
            options: [
              "距離螢幕的遠近",
              "看向螢幕的視角大小",
              "電影票價",
              "爆米花的大小",
            ],
            answer: "看向螢幕的視角大小",
            explanation:
              "螢幕的兩邊就像是圓弧的兩端，坐在同一條後方的圓周線上，你的視野夾角(圓周角)是一模一樣的！這也是古希臘圓形劇場傳音與視野的設計秘訣。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "圓心角 ∠XOY = 120°，此角對應弧 XY。若有一直徑通過，剩下的弧度加起來是多少？（整個圓是360）",
            answer: "240",
            explanation: "一個完整的圓是 360°，360 - 120 = 240°。",
            hint: "繞一圈是幾度呢？減掉它就是了！",
          },
        ],
        scientist: {
          name: "伊迪絲 · 克拉克",
          nameEn: "Edith Clarke",
          years: "1883–1959",
          field: "電機工程",
          bio: "第一位專業的女電機工程師。在電力網路上，交流電的「相位角」就如同圓上的角度，她發明了「克拉克計算器」，用圖形方法解決了複雜的雙曲線電力傳輸方程式。精確算出電壓的圓心角與相位，推動了美國電力網的現代化。",
        },
      },
      {
        id: "g9-u5",
        slug: "incenter-circumcenter",
        title: "三角形的外心與內心",
        emoji: "⛲",
        scenarioTitle: "國家公園噴水池定位",
        scenarioDesc:
          "我們要在三個村莊之間建一座噴水池。要讓水池距離三個村莊「一樣遠」(外心)，還是要距離三條公路「一樣遠」(內心)？",
        curriculumCode: "S-9-3",
        color: "#c46de8",
        concepts: [
          {
            title: "外心 (Circumcenter)",
            body: "外心是三角形「三條邊的中垂線」的交點！它是「外接圓」的圓心，神奇的是：外心到三角形的「三個頂點」距離完全一樣長！",
          },
          {
            title: "內心 (Incenter)",
            body: "內心是三角形「三個角的角平分線」的交點！它是「內切圓」的圓心，神奇的是：內心到三角形的「三條邊」垂直距離完全一樣長！",
          },
          {
            title: "直角三角形的特例",
            body: "直角三角形的外心非常特別，它剛好會落在「斜邊的正中央」！所以斜邊的一半，就是它的外接圓半徑。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "尋找公平的位置",
            problem:
              "三個露營區分別為 A、B、C(不共線)，管理員想蓋一個水塔，要求「水塔到三個露營區的直線距離要相等」。請問水塔要蓋在哪裡？",
            steps: [
              { label: "分析需求", content: "到三個「頂點」距離相等。" },
              { label: "判斷中心種類", content: "這是「外心」的特性。" },
              {
                label: "如何畫出",
                content: "畫出 AB中垂線 與 BC中垂線，交點即為水塔位置。",
              },
            ],
            answer: "△ABC 的外心",
          },
          {
            id: "e2",
            title: "內心面積算法",
            problem: "三角形周長是 30，內切圓半徑 r=4。請問三角形面積為何？",
            steps: [
              {
                label: "套用三角形與內心切割",
                content: "把三角形從內心切成三塊小三角形。",
              },
              {
                label: "面積公式",
                content:
                  "三塊面積 = $1/2(a\\times r) + 1/2(b\\times r) + 1/2(c\\times r) = 1/2 \\times (a+b+c) \\times r$",
              },
              {
                label: "計算結果",
                content:
                  "面積 = $1/2 \\times$ 周長 $\\times r = 1/2 \\times 30 \\times 4 = 60$",
              },
            ],
            answer: "60",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "銳角三角形的「外心」必定落在哪裡？",
            options: ["三角形內部", "三角形邊上", "三角形外部", "無法確定"],
            answer: "三角形內部",
            explanation:
              "銳角的在內部；直角的在斜邊中點；鈍角三角形的外心會跑到圖形外面喔！",
          },
          {
            id: "q2",
            type: "choice",
            question: "內心是「三條 ___」的交點？",
            options: ["中線", "角平分線", "中垂線", "高"],
            answer: "角平分線",
            explanation:
              "因為角平分線上點到兩邊等距，三條交點就能畫出卡在裡面的「內切圓」。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "一個直角三角形，兩股分別為 6 和 8。請問它的「外接圓半徑」長度是多少？",
            answer: "5",
            explanation:
              "畢氏定理知斜邊為 10。直角三角形的外心在斜邊中點，外接圓半徑為斜邊的一半 10 ÷ 2 = 5。",
            hint: "回想一下，直角三角形的外心在哪？斜心就是...斜邊的一半！先用畢氏定理算出斜邊。",
          },
        ],
        scientist: {
          name: "赫莎 · 馬克斯 · 艾爾頓",
          nameEn: "Hertha Ayrton",
          years: "1854–1923",
          field: "電機工程、發明家",
          bio: "她是一位發明家與物理學家。她發明了專門用來繪製複雜對稱幾何與精確比例的「線段分割儀」(Line-divider)，大受歡迎，被建築師廣泛運用。對於幾何中心的尋找，像是把混沌不穩的電弧燈找到最佳平衡點一樣，是她一生的絕活。",
        },
      },
      {
        id: "g9-u6",
        slug: "centroid",
        title: "三角形的重心與應用",
        emoji: "🦅",
        scenarioTitle: "風箏飛行平衡大師",
        scenarioDesc:
          "做一個會飛的風箏，綁線的地方必須是完美的「重心」！重心到底是如何把三角形的質量精準分配的？",
        curriculumCode: "S-9-3",
        color: "#f5b641",
        concepts: [
          {
            title: "什麼是重心 (Centroid)？",
            body: "三角形「三條中線(頂點連到對邊中點)」的交點！只要你把一個三角形厚紙板剪下來，把筆尖頂在「重心」的位置，厚紙板就能完美平衡不掉下來！",
          },
          {
            title: "重心的 2：1 定理",
            body: "重心 G 把每一條中線切成兩段，而且靠近頂點的那段長度，剛好是靠近底邊那段長度的「兩倍」！也就是 $2:1$ 的比例。",
          },
          {
            title: "面積平分魔術",
            body: "畫出三條中線後，整個大三角形會被切成「6 塊小三角形」，這 6 塊的「面積全部一模一樣大」！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "利用重心 2:1",
            problem:
              "在 △ABC 中，AD 是一條中線，G 為重心。已知中線 AD 總長度為 18，請問 AG 是多少？",
            steps: [
              { label: "套用比例", content: "AG : GD = $2 : 1$" },
              { label: "分配總長", content: "全部是 3 份。AG 佔了 2 份。" },
              { label: "計算結果", content: "$18 \\times \\frac{2}{3} = 12$" },
            ],
            answer: "12",
          },
          {
            id: "e2",
            title: "面積平分計算",
            problem:
              "若 △ABC 的面積是 60，點 G 為重心。請問 △ABG 的面積是多少？",
            steps: [
              {
                label: "畫出連線理解",
                content:
                  "G 連接三個頂點，會把整個三角形切成 3 大塊：△ABG, △BCG, △ACG。",
              },
              {
                label: "重心平分面積",
                content:
                  "這 3 大塊面積也是完全一樣的！(各包含兩塊 1/6 的小三角形)。",
              },
              { label: "計算結果", content: "60 ÷ 3 = 20" },
            ],
            answer: "20",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "「重心」是三角形三條哪種線段的交點？",
            options: ["中垂線", "角平分線", "中線", "高"],
            answer: "中線",
            explanation:
              "中線連接頂點和對邊中點，負責平分面積與質量，三條交點即為重心。",
          },
          {
            id: "q2",
            type: "choice",
            question: "下列何者必定會落在任何一個三角形的「內部」？",
            options: ["外心", "內心與重心", "外心與重心", "三者都是"],
            answer: "內心與重心",
            explanation:
              "重心(物理平衡點)和內心(內切圓)永遠被包在三角形裡面！外心如果是鈍角三角形就會跑到外面。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "已知重心 G，若重心到對邊中點的長度 GD 為 5，則另一段到頂點的長度 AG 為何？",
            answer: "10",
            explanation: "AG : GD = 2 : 1。所以 AG 為 GD 的 2 倍，5 × 2 = 10。",
            hint: "頂尖那端比較長，是下半部的兩倍喔！",
          },
        ],
        scientist: {
          name: "安妮 · 易斯利",
          nameEn: "Annie Easley",
          years: "1933–2011",
          field: "計算機科學、火箭科學",
          bio: "她在 NASA 負責編寫極其複雜的「半人馬座火箭」(Centaur) 發射軌跡程式。火箭進入太空，姿態控制極度依賴對重心(Center of Mass)的了解！沒有她寫的控制碼，這些頂尖的科學飛船連大氣層都出不去。",
        },
      },
      {
        id: "g9-u7",
        slug: "quadratic-function-graph",
        title: "二次函數與圖形",
        emoji: "🏀",
        scenarioTitle: "籃球空心入網拋物線",
        scenarioDesc:
          "無論是噴泉的水花、投出的籃球，還是憤怒鳥的飛行，在空中畫出的完美曲線，竟然都是 $y = ax^2$ ！",
        curriculumCode: "A-9-1",
        color: "#6de89a",
        concepts: [
          {
            title: "什麼是二次函數？",
            body: "長相大約是 $y = ax^2 + bx + c$。它的圖形不像一元一次是直線，而是一個 U 型的「拋物線」！而且它永遠「左右對稱」。",
          },
          {
            title: "大師關鍵：開口方向",
            body: "看最前面的老大 (也就是 a)！如果 $a$ 是正數，開口向「上」∪ (像是在笑)；如果 $a$ 是負數，開口向「下」∩ (像是在哭，例如東西掉落)。",
          },
          {
            title: "開口大小",
            body: "a 的「絕對值」如果「越大」，拋物線爬升得越快，形狀看起來就越「窄」！如果 a 很小 (像 1/10)，圖案就會很寬扁。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "判斷開口朝向",
            problem:
              "下列哪個函數的圖案是開口向「下」的拋物線？ A: $y=3x^2$ / B: $y=-2x^2+x$",
            steps: [
              {
                label: "找最高次方的係數 a",
                content: "A 的 a 等於 3。B 的 a 等於 -2。",
              },
              { label: "正反判斷", content: "正數向上笑(U)，負數向下哭(∩)。" },
            ],
            answer: "B",
          },
          {
            id: "e2",
            title: "判斷張口寬度",
            problem: "哪一個拋物線比較「窄」？ $y=x^2$ 還是 $y=5x^2$？",
            steps: [
              { label: "抓係數", content: "兩者的 a 分別是 1 和 5。" },
              {
                label: "比較絕對值",
                content: "5 > 1。係數的絕對值越大，圖案越窄。",
              },
            ],
            answer: "$y=5x^2$",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "$y = -0.5x^2$ 的圖案會長什麼樣子？",
            options: [
              "開口向下的直線",
              "開口向下且扁平的拋物線",
              "開口向上且狹窄的拋物線",
              "開口向左",
            ],
            answer: "開口向下且扁平的拋物線",
            explanation: "a為負數所以向下，絕對值 0.5 比較小所以長得比較寬扁。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若想模仿「丟棒球」在空中的飛行軌跡，拋物線方程式的「a」必須是？",
            options: ["零", "負數", "正數", "任意數都可以"],
            answer: "負數",
            explanation:
              "丟出去的東西會往下掉回來，是一條∩型的下墜彎曲軌跡，所以開口朝下，a 必為負！",
          },
          {
            id: "q3",
            type: "fill",
            question: "將 $x = 2$ 代入函數 $y = 3x^2$，求出的 $y$ 值為何？",
            answer: "12",
            explanation: "$2^2 = 4$，$3 \\times 4 = 12$。",
            hint: "先平方，再乘前面的數字！",
          },
        ],
        scientist: {
          name: "西爾維婭 · 厄爾",
          nameEn: "Sylvia Earle",
          years: "1935–",
          field: "海洋生物學",
          bio: "深海探險家，《時代雜誌》第一位「地球英雄」。她創下了單人深潛的世界紀錄。在深海中，壓力與下潛深度之間的正反關係就像是強大的拋物線函數曲線。要精算下潛的負值拋物線而不被壓扁，需要極其精密的數理準備。",
        },
      },
      {
        id: "g9-u8",
        slug: "quadratic-translation",
        title: "二次函數的平移與頂點",
        emoji: "🎢",
        scenarioTitle: "滑板極限運動拋物台",
        scenarioDesc:
          "設計一個滑板跳台，你要決定它位在哪個位置！掌握平移秘術，你就能隨心所欲地在地圖上移動整座山峰。",
        curriculumCode: "A-9-1",
        color: "#6db0e8",
        concepts: [
          {
            title: "頂點在哪裡？",
            body: "拋物線最高或最低的反折點。標準式 $y = a(x-h)^2 + k$ 中，頂點超級好抓，就是 $(h, k)$！",
          },
          {
            title: "水平平移秘笈",
            body: "在括號裡面對 x 做加減就是在「左右平移」。記住反直覺口訣：$(x-h)$ 減是往右邊移，加是往左邊移！",
          },
          {
            title: "垂直平移秘笈",
            body: "在拋物線尾巴加上 $k$，就是在「上下平移」。這很直覺：加是往上移，減是往下移！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "找出頂點座標",
            problem: "從方程式 $y = 2(x - 3)^2 + 5$ 中，直接找出頂點！",
            steps: [
              {
                label: "抓 h",
                content:
                  "觀察 $(x-3)$，所以 $h = 3$ (注意裡面是負號喔，代表往右3)",
              },
              {
                label: "抓 k",
                content: "尾巴是 $+5$，所以 $k = 5$ (原汁原味往上5)",
              },
              { label: "合併組合", content: "頂點就是 $(3, 5)$" },
            ],
            answer: "(3, 5)",
          },
          {
            id: "e2",
            title: "函數平移操作",
            problem:
              "把 $y = x^2$ 往左平移 2 單位，再往下平移 4 單位，新的方程式是什麼？",
            steps: [
              {
                label: "左平移",
                content: "往左變成 $+2$，放在括號裡：$(x + 2)^2$",
              },
              { label: "下平移", content: "往下減 4，接在尾巴：$-4$" },
            ],
            answer: "$y = (x+2)^2 - 4$",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "$y = -3(x + 1)^2 - 8$ 這條拋物線的頂點在哪？",
            options: ["(1, 8)", "(-1, 8)", "(-1, -8)", "(1, -8)"],
            answer: "(-1, -8)",
            explanation: "$(x+1)$ 代表 h 是 -1，尾巴 -8 代表 k 是 -8。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若要將 $y = x^2$ 變成 $y = (x - 7)^2$，我們在直角座標上做的是什麼動作？",
            options: ["向上平移 7", "向下平移 7", "向左平移 7", "向右平移 7"],
            answer: "向右平移 7",
            explanation:
              "括號內減 7，是違反直覺的往正方向（右方）移動 7 單位。",
          },
          {
            id: "q3",
            type: "fill",
            question: "$y = 2x^2 + 5$ 的頂點 (x, y) 中的 x 值是多少？",
            answer: "0",
            explanation: "方程式可看作 $2(x-0)^2 + 5$，所以 x值(即h值) 為 0。",
            hint: "裡面沒有括號，代表減掉了什麼？(代表 x 沒被加減！)",
          },
        ],
        scientist: {
          name: "凱薩琳 · 強森",
          nameEn: "Katherine Johnson",
          years: "1918–2020",
          field: "數學、太空力學",
          bio: "人體防雷達！她是電影《關鍵少數》的主角原型。她為阿波羅登月計畫計算太空船的拋物線軌距。在沒有電腦的年代，她徒手解出二次平移與著陸頂點的預測，約翰·葛倫太空人甚至說：「只要這個女孩（強森）說數字沒錯，我就準備好起飛！」",
        },
      },
      {
        id: "g9-u9",
        slug: "quadratic-max-min",
        title: "二次函數的極值與應用",
        emoji: "🏷️",
        scenarioTitle: "商家利潤最大化估算",
        scenarioDesc:
          "賣得越貴賺越多？錯了！太貴沒人買就會虧錢。這就是拋物線的頂點：我們如何透過數學算出那個能賺最多錢的完美定價點？",
        curriculumCode: "A-9-2",
        color: "#e86da9",
        concepts: [
          {
            title: "極值的意義",
            body: "拋物線的頂點，就是這個函數的「最大值」或「最小值」！如果開口向下($a<0$)就有最大值(山峰)；開口向上($a>0$)就有最小值(谷底)。",
          },
          {
            title: "配方法的神奇轉換",
            body: "如果題目給的是 $y = ax^2 + bx + c$ 這種看不出頂點的款式怎麼辦？你要把它硬擠成 $y = a(x-h)^2 + k$！這叫配方法。",
          },
          {
            title: "利潤最大化問題",
            body: "利潤 = (定價 - 成本) × 賣出的數量。定價一增加，數量就會依一次函數下降。這兩者相乘就會跑出拋物線的二次函數，頂點就是賺最多錢的黃金定價！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "判斷最大與最小值",
            problem:
              "函數 $y = -5(x - 2)^2 + 10$。請問當 x 為何時，y 會發生極大還是極小值？該極值是多少？",
            steps: [
              {
                label: "判斷極大/極小",
                content:
                  "$a=-5$ 是負數，開口向下，所以這是一座山有「最大值」。",
              },
              { label: "找頂點", content: "頂點 $(h, k) = (2, 10)$。" },
              {
                label: "回答問題",
                content: "所以當 x=2 的時候，有最大值 10。",
              },
            ],
            answer: "x=2 時有最大值 10",
          },
          {
            id: "e2",
            title: "生活中的配方概念",
            problem:
              "一個小球拋出的高度為 $y = -x^2 + 4x$ (y是高度，x是秒)。請問在第幾秒時小球飛到最高點？",
            steps: [
              { label: "配方過程", content: "$y = -(x^2 - 4x)$" },
              { label: "補上常數", content: "$= -(x^2 - 4x + 4) + 4$" },
              { label: "合併平方", content: "$= -(x - 2)^2 + 4$" },
              {
                label: "解讀結果",
                content: "頂點在 (2, 4)。所以第 2 秒最高。",
              },
            ],
            answer: "第 2 秒",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "若二次函數 $y=2x^2+c$ 在 x=0 時有最小值 7，請問 c 是多少？",
            options: ["0", "2", "5", "7"],
            answer: "7",
            explanation:
              "因為函數是 $y = 2(x-0)^2 + c$，頂點即為 (0, c)。已知最小值為 7，所以 c=7。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "$y = x^2 - 6x$ 進行配方法時，要補上什麼神奇數字才能變成完全平方式？",
            options: ["9", "-9", "36", "-6"],
            answer: "9",
            explanation:
              "配方要加上「中間項係數一半」的平方！(-6/2)² = (-3)² = 9。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "有一個拋物線開口向上，配方後得 $y = (x - 3)^2 - 8$。請問這個函數的最小值是？(填數字)",
            answer: "-8",
            explanation:
              "頂點是 (3, -8)，因為開口向上所以 -8 是它的最低點(谷底)。",
            hint: "頂點的 y 座標就是我們要找的最大或最小值喔！",
          },
        ],
        scientist: {
          name: "珍 · 古德",
          nameEn: "Jane Goodall",
          years: "1934–",
          field: "靈長類動物學、動物行為學",
          bio: "世界上最偉大的黑猩猩專家。她在森林裡記錄動物的數量與生存資源的對抗。極大值與極小值的估算不但能優化商人利潤，在生態學中更是「承載力」的模型。自然界也在運算自己的二次函數，找出繁衍的最大潛力點。",
        },
      },
      {
        id: "g9-u10",
        slug: "solid-geometry",
        title: "立體圖形與三視圖",
        emoji: "🧊",
        scenarioTitle: "3D列印物件拆解工程",
        scenarioDesc:
          "工程圖紙上的房子為什麼從上面看跟旁邊看長得不一樣？掌握腦海中的立體透視術，成為結構工程師！",
        curriculumCode: "S-9-4",
        color: "#e89a6d",
        concepts: [
          {
            title: "什麼是三視圖",
            body: "就是用工程師的角度來拍照！分別從「正前方(前視圖)」、「正上方(俯視圖)」和「正右方(右視圖)」照過去，把 3D 的長相畫在 2D 的紙上。",
          },
          {
            title: "看透結構的限制",
            body: "光看前視圖是看不出「前後深度」的！必須要把前、上、右的三重視角拼圖疊加起來，你腦中才能建構出 3D 列印的對應方塊數。",
          },
          {
            title: "柱體與錐體的截面",
            body: "拿武士刀把圓錐橫著切，斷面是「圓形」；直著切下去，斷面會變成一條神奇的「雙曲線」或拋物線邊緣！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "從俯視圖數積木",
            problem:
              "若俯視圖 (從天空往下看) 是 4 個方格排成的 2x2 正方形。這表示這個立體一定有幾個積木？",
            steps: [
              {
                label: "最低數量原則",
                content:
                  "往下看能看到方格，代表這個位子「至少」柱子裡有1個積木。",
              },
              {
                label: "推論",
                content: "四個格子都必須被填滿，所以最少要有 4 個積木。",
              },
            ],
            answer: "最少 4 塊積木",
          },
          {
            id: "e2",
            title: "判別立體圖形截面",
            problem:
              "如果一個立方體從對角線切下去（刀子經過上面兩個斜對角與底下兩個斜對角），切面的形狀是？",
            steps: [
              {
                label: "想像切痕",
                content: "切痕會經過頂部的正方形對角線，切到下面的對角線。",
              },
              {
                label: "構成圖形",
                content: "會產生一個大大的長方形，其長度是該正方形的對角線！",
              },
            ],
            answer: "長方形",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "要完整描述一個沒有被遮擋孔洞的積木堆，標準上需要幾個方向的視圖？",
            options: ["1 個", "2 個", "3 個", "不需要看，靠感覺"],
            answer: "3 個",
            explanation:
              "工程製圖標準：前視、上視、右視 才能鎖定前、後、上、下、左、右的完整長寬高特徵。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "用平行於地面的刀片，水平切開一個直立的「圓柱」，截面會是什麼形狀？",
            options: ["正方形", "長方形", "三角形", "圓形"],
            answer: "圓形",
            explanation:
              "因為圓柱的地基就是圓，平行地基切下去不管切哪一層，長出來的斷面都會是一模一樣大的圓形。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "若某立體圖形的前視圖、右視圖、俯視圖全部都是「面積相等的正方形」，這最可能是哪種幾何立體圖形？(請輸入三個字，如三角形或圓柱體)",
            answer: "正方體",
            explanation:
              "無論從哪個方向看都是一樣大的正方形，只有完美的正方體辦得到。",
            hint: "跟骰子同一家！",
          },
        ],
        scientist: {
          name: "海蒂 · 拉瑪",
          nameEn: "Hedy Lamarr",
          years: "1914–2000",
          field: "通訊發明、軍事工程",
          bio: "她被譽為「好萊塢最美女人」，但她的大腦更是令人震驚。二戰時，她設計了用來干擾納粹魚雷攔截的跳頻技術 (也就是現在 Wi-Fi 和藍牙的基礎！)。立體魚雷的路徑與無形電波在 3D 空間中的切割，也是各種截面投影，她利用精密的圖模破解了敵方的通訊網。",
        },
      },
      {
        id: "g9-u11",
        slug: "boxplot-quartiles",
        title: "盒狀圖與四分位數",
        emoji: "📉",
        scenarioTitle: "氣候變遷數據分析師",
        scenarioDesc:
          "滿坑滿谷的溫度資料雜亂無章！我們要在這片凌亂中抓出 Q1, Q2, Q3，畫出精簡有力的盒子，看穿今年到底熱得有多極端！",
        curriculumCode: "D-9-1",
        color: "#f5b641",
        concepts: [
          {
            title: "什麼是百分位數？",
            body: "把資料「從小排到大」分成一百等份。第 $P$ 百分位數 (PR值)，就代表「大約有 $P\\%$ 的人輸給這個數字喔！」（例如PR 90代表你贏過 90%的人）。",
          },
          {
            title: "大名鼎鼎的四分位數",
            body: "就是切在 25% ($Q_1$)、50% ($Q_2$ 中位數)、75% ($Q_3$) 的那三把刀！這三把刀把所有的資料分成了「人數相等的四個組」。",
          },
          {
            title: "盒狀圖 (Box-plot)",
            body: "用五個數字畫成的圖：最小值、$Q_1$、中位數、$Q_3$、最大值！盒子的身體是 $Q_1$ 到 $Q_3$，代表這裡面「包含了全班中間50% 最核心的數字」。",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "找四分位數",
            problem:
              "有 11 位同學的體重從小排到大：40, 42, 45, 48, 50, 52, 54, 55, 60, 62, 70。找 Q1、Q2(中位數)、Q3？",
            steps: [
              {
                label: "找 Q2(中位)",
                content: "11個數字的最中間是第 6 個：52。",
              },
              {
                label: "找 Q1",
                content: "前排的5個數字 (40,42,45,48,50) 的中間：45。",
              },
              {
                label: "找 Q3",
                content: "後排的5個數字 (54,55,60,62,70) 的中間：60。",
              },
            ],
            answer: "Q1=45, Q2=52, Q3=60",
          },
          {
            id: "e2",
            title: "解讀盒狀圖",
            problem:
              "若盒狀圖的身體超級扁 (Q1 跟 Q3 距離超級接近)，代表什麼意義？",
            steps: [
              { label: "分析定義", content: "Q1到Q3之間塞了 50% 的同學。" },
              {
                label: "推論實況",
                content:
                  "這代表這 50% 的同學成績/體重差異極小，也就是大家表現非常「集中」。",
              },
            ],
            answer: "資料非常集中(同質性高)",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question:
              "在一張盒狀圖中，從「Q1」到「中位數(Q2)」之間，大約包含了全體的多少百分比的資料？",
            options: ["10%", "25%", "50%", "不知道，要看長度"],
            answer: "25%",
            explanation:
              "不論那段線畫得多長多短，這四個區間的「人數/資料量」永遠都是 25%。",
          },
          {
            id: "q2",
            type: "choice",
            question:
              "若某班考試成績，中位數(Q2)很高，但 $Q_3$ 與 最大值 之間的線段 (尾巴) 被拉得超長，這代表什麼？",
            options: [
              "班上全部人都考很高",
              "前面少數人考出極高分(落差大)",
              "很多人考出極高分",
              "考卷很簡單",
            ],
            answer: "前面少數人考出極高分(落差大)",
            explanation:
              "那 25% 的高分群資料差距分布非常大，所以有極端特別高的離群數值。",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "有 15 個數字從小到大排好，請問他的中位數應該是第幾個數字？(填數字)",
            answer: "8",
            explanation:
              "15 加 1 除以 2 = 8。前面 7 個，後面 7 個，第 8 個就在正中間！",
            hint: "用除以二來找中間的位置。如果是奇數，可以左右各分一半。",
          },
        ],
        scientist: {
          name: "佛蘿倫絲 · 南丁格爾",
          nameEn: "Florence Nightingale",
          years: "1820–1910",
          field: "統計學、護理學",
          bio: "大家以為她只是一位提著燈籠的溫柔護士，但她更是世界上最偉大的資料分析師！在克里米亞戰爭時期，她發明了「玫瑰圖(極座標圓餅圖)」與各種統計數據框圖。她成功說服了保守的將軍們改善衛生條件，把四分位距外的超高死亡率大幅降了下來！",
        },
      },
      {
        id: "g9-u12",
        slug: "probability-tree",
        title: "古典機率與樹狀圖",
        emoji: "🃏",
        scenarioTitle: "魔術師的抽卡賠率",
        scenarioDesc:
          "魔術師從兩頂帽子裡抽牌，猜中相同顏色的機率有多大？用樹狀圖鋪開所有的平行宇宙，掌握命運的百分比！",
        curriculumCode: "D-9-2",
        color: "#c46de8",
        concepts: [
          {
            title: "什麼是古典機率？",
            body: "「想要發生的情況」的總數，除以「所有可能發生的情況」總數。例如擲一顆骰子，總共有 6 種結果，偶數有 2,4,6 三種結果，機率就是 $3/6 = 1/2$。",
          },
          {
            title: "不發生的機率",
            body: "某件事情「發生的機率」加上「不發生的機率」一定等於 1 (也就是 100%)！知道發生的機率就是用 1 去減。",
          },
          {
            title: "萬能的樹狀圖",
            body: "丟兩枚硬幣或者抽兩次籤，不知道到底有幾種時，畫樹狀圖！第一層長出分叉(正反)，每個分叉再長出下一層(正反)，把樹枝頂端的果實數一數，就是所有可能！",
          },
        ],
        examples: [
          {
            id: "e1",
            title: "丟兩枚硬幣",
            problem: "丟兩枚公平硬幣，請問出現「一正一反」的機率是多少？",
            steps: [
              {
                label: "畫樹狀圖找所有可能",
                content:
                  "第一枚: (正,反)。第二枚: (正,反)。組合：正正, 正反, 反正, 反反，共 4 種。",
              },
              {
                label: "找目標數",
                content: "「一正一反」有(正反)和(反正)，總共 2 種。",
              },
              { label: "計算比例", content: "機率 = 2 ÷ 4 = 1/2。" },
            ],
            answer: "1/2",
          },
          {
            id: "e2",
            title: "撲克牌抽卡",
            problem:
              "從 52 張撲克牌（沒有鬼牌）隨意抽出一張，抽到「黑桃」或者是「K」的機率是多少？",
            steps: [
              { label: "黑桃有幾張", content: "共 13 張黑桃。" },
              {
                label: "還要加入 K",
                content:
                  "四個花式都有K，黑桃K已經被算進去了，所以還有3張K(紅梅, 方塊, 紅心)。",
              },
              { label: "統整組合數量", content: "13 張 + 3 張 = 16 張。" },
              {
                label: "算出機率",
                content: "機率 = 16 / 52 ，約分後得 4/13。",
              },
            ],
            answer: "4/13",
          },
        ],
        quiz: [
          {
            id: "q1",
            type: "choice",
            question: "抽出一顆均勻骰子，會出現「點數大於 4」的機率是？",
            options: ["1/6", "2/6 (即1/3)", "3/6 (即1/2)", "4/6 (即2/3)"],
            answer: "2/6 (即1/3)",
            explanation: "大於 4 的數字只有 5 和 6 兩種可能。2 ÷ 6 = 1/3。",
          },
          {
            id: "q2",
            type: "choice",
            question: "若某件事情發生的機率是 P，哪一個說法是絕對錯的？",
            options: [
              "P 可以是 0",
              "P 可以是 1",
              "P 可以是 1.2",
              "P 可以是 1/2",
            ],
            answer: "P 可以是 1.2",
            explanation:
              "機率最大只到 1 (100% 發生)，不可能超過 100%。P 必須落在 0 到 1 之間！",
          },
          {
            id: "q3",
            type: "fill",
            question:
              "有兩顆骰子同時丟擲，總共會出現幾種「不同點數組合」的總事件數？(請填寫最後總數)",
            answer: "36",
            explanation:
              "第一顆骰子有 6 種可能，每種情況下第二顆又有 6 種可能。所以 6 × 6 = 36 種樹枝！",
            hint: "用相乘原理：第一件事的可能數量 × 第二件事的可能數量。",
          },
        ],
        scientist: {
          name: "西爾維亞 · 懷茲曼",
          nameEn: "Sylvia Wassertheil-Smoller",
          years: "1932–",
          field: "流行病學、生物統計學",
          bio: "世界首屈一指的醫學統計學家。在找尋致癌或是心臟病的成因時，醫生不是算命仙，而是仰賴「巨大數據下的極微小發生機率」。她利用嚴謹的統計邏輯樹狀圖追蹤數萬名女性的心臟宿命，透過機率拯救了無數被醫學忽視的女性！",
        },
      },
    ],
  },
];

export function getGradeBySlug(slug: string) {
  return grades.find((g) => g.slug === slug);
}
export function getUnitBySlug(gradeSlug: string, unitSlug: string) {
  const grade = getGradeBySlug(gradeSlug);
  return grade?.units.find((u) => u.slug === unitSlug);
}

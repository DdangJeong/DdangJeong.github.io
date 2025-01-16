export interface LabNews {
  date: string;
  content: string;
  type?: 'award' | 'publication' | 'travel' | 'presentation' | 'general';
}

export const labNews: LabNews[] = [
  {
    date: "2024-11-14",
    content: "Se Jong Ryu and Seong Ho Kim received the Excellence Award at the Electronic Engineering Graduation Project Works Evaluation. Congrats!",
    type: "award"
  },
  {
    date: "2024-10-29",
    content: "1 paper accepted at WACV 2025. Congratulations to Jiin Im, and Yongho Son!",
    type: "publication"
  },
  {
    date: "2024-08-12",
    content: "1 patent received a prize at the 2024 Samsung DS Division Industry-Academia Cooperation Award ceremony. Congratulations to Sanghyuk Moon, and Taekyeong Park!",
    type: "award"
  },
  {
    date: "2024-07-20",
    content: "1 paper accepted at BMVC 2024. Congratulations to Heejoon Moon, Jongwoo Lee, and Jeong Gon Kim!",
    type: "publication"
  },
  {
    date: "2024-07-05",
    content: "Je Hyeong Hong gave a short seminar on file fragment classification @ the Aerospace and Defense Technologies Workshop 2024.",
    type: "presentation"
  },
  {
    date: "2024-07-02",
    content: "1 paper accepted at ECCV 2024.",
    type: "publication"
  },
  {
    date: "2024-06-16",
    content: "Heejoon Moon, Yongho Son, Jongwoo Lee and Sisung Liu are travelling to Seattle, USA for CVPR 2024.",
    type: "travel"
  },
  {
    date: "2024-06-07",
    content: "1 paper accepted at ICIP 2024. Congratulations to Jeongwoo Park!",
    type: "publication"
  },
  {
    date: "2024-02-27",
    content: "1 paper accepted at CVPR 2024. Congratulations to Heejoon Moon and Chunghwan Lee!",
    type: "publication"
  },
  {
    date: "2023-12-14",
    content: "1 paper accepted at ICASSP 2024. Congratulations to Jeong Gyu Park and Sisung Liu!",
    type: "publication"
  },
  {
    date: "2023-11-28",
    content: "Chunghwan Lee will be travelling to North Carolina State University, USA to attend machine learning and data mining programme funded by BK21.",
    type: "travel"
  },
  {
    date: "2023-11-25",
    content: "Je Hyeong Hong gave a tutorial session on privacy-preserving visual localization @ the Autumn Annual Conference of IEIE 2023.",
    type: "presentation"
  },
  {
    date: "2023-10-27",
    content: "Je Hyeong Hong gave a short seminar on block physics-informed neural networks @ the Yonsei-KISTI 2nd workshop on physics-based AI.",
    type: "presentation"
  },
  {
    date: "2023-06-29",
    content: "Jiin Im, Heejoon Moon, and Sisung Liu won the LG Electronics Group Paper Awards @ the Summer Annual Conference of IEIE 2023. Congrats!",
    type: "award"
  },
  {
    date: "2023-06-29",
    content: "Je Hyeong Hong gave an invited talk in the young researcher session @ the Summer Annual Conference of IEIE 2023.",
    type: "presentation"
  },
  {
    date: "2023-06-17",
    content: "Sisung Liu will be travelling to San Jose, California, USA for research internship @ HP Inc.!",
    type: "travel"
  },
  {
    date: "2023-06-17",
    content: "Chunghwan Lee, Chanhyeok Yoon and Sisung Liu are travelling to Vancouver, Canada for CVPR 2023.",
    type: "travel"
  },
  {
    date: "2023-03-02",
    content: "Hyeonjeong Park received an offer for a fully funded PhD studentship from Univ. Illinois Chicago, USA. Congratulations!",
    type: "award"
  },
  {
    date: "2023-02-28",
    content: "1 paper accepted at CVPR 2023. Congratulations to Chunghwan Lee and Chanhyeok Yoon!",
    type: "publication"
  },
  {
    date: "2023-02-14",
    content: "Chunghwan Lee and Chanhyeok Yoon won the 3rd prize on ICPBL+ graduate championship.",
    type: "award"
  }
]

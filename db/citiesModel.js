
const CitiesList = [
  "全台平均",
  '台北市',
  '新北市',
  '基隆市',
  '桃園市',
  '新竹市',
  '新竹縣',
  '苗栗縣',
  '台中市',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '台南市',
  '高雄市',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '台東縣',
  '澎湖縣'
]

const ValuesList = [
  "income",
  "environment",
  "crimeRate",
  "life",
  "education",
  "happiness"
]

const ValueLabelsList = [
  "收入",
  "環境品質",
  "犯罪率",
  "平均壽命",
  "教育程度",
  "幸福指數"
]

const CitiesModel = {
  "全台平均": {
    "income": 884.55,
    "environment": 44.74,
    "crimeRate": 9.358,
    "life": 79.045,
    "education": 37.58,
    "happiness": 74.155
  },
  "台北市": {
    "crimeRate": 10.1,
    "education": 74.5,
    "environment": 40.1,
    "happiness": 72.5,
    "id": 1,
    "income": 1314,
    "life": 83.1
  },
  "新北市": {
    "crimeRate": 6.8,
    "education": 41.7,
    "environment": 40.1,
    "happiness": 72.7,
    "id": 2,
    "income": 960,
    "life": 80.8
  },
  "基隆市": {
    "crimeRate": 21.74,
    "education": 38.6,
    "environment": 30.3,
    "happiness": 71.7,
    "id": 3,
    "income": 897,
    "life": 79.3
  },
   "桃園市": {
    "crimeRate": 5.19,
    "education": 37.8,
    "environment": 45.2,
    "happiness": 73.9,
    "id": 4,
    "income": 1074,
    "life": 80.1
  },
  "新竹市": {
    "crimeRate": 11.32,
    "education": 50.6,
    "environment": 41,
    "happiness": 75.4,
    "id": 5,
    "income": 1136,
    "life": 80.5
  },
  "新竹縣": {
    "crimeRate": 9.08,
    "education": 38.1,
    "environment": 41,
    "happiness": 74.7,
    "id": 6,
    "income": 1026,
    "life": 79.5
  },
  "苗栗縣": {
    "crimeRate": 5.3,
    "education": 29.2,
    "environment": 44.1,
    "happiness": 72.8,
    "id": 7,
    "income": 828,
    "life": 78.8
  },
  "台中市": {
    "crimeRate": 5.6,
    "education": 43.1,
    "environment": 43.1,
    "happiness": 74.3,
    "id": 8,
    "income": 970,
    "life": 79.8
  },
  "彰化縣": {
    "crimeRate": 9.38,
    "education": 29.9,
    "environment": 50,
    "happiness": 72.6,
    "id": 9,
    "income": 775,
    "life": 79.7
  },
  "南投縣": {
    "crimeRate": 12.11,
    "education": 30.7,
    "environment": 58.4,
    "happiness": 73.6,
    "id": 10,
    "income": 739,
    "life": 77.9
  },
  "雲林縣": {
    "crimeRate": 5.55,
    "education": 27.1,
    "environment": 54.6,
    "happiness": 70.1,
    "id": 11,
    "income": 733,
    "life": 77.9
  },
  "嘉義市": {
    "crimeRate": 11.82,
    "education": 56.6,
    "environment": 59.7,
    "happiness": 74.6,
    "id": 12,
    "income": 918,
    "life": 80
  },
  "嘉義縣": {
    "crimeRate": 13.02,
    "education": 24.3,
    "environment": 63.7,
    "happiness": 72.2,
    "id": 13,
    "income": 751,
    "life": 78.3
  },
  "台南市": {
    "crimeRate": 13.63,
    "education": 37,
    "environment": 55.9,
    "happiness": 75,
    "id": 14,
    "income": 838,
    "life": 79.3
  },
  "高雄市": {
    "crimeRate": 6.95,
    "education": 42.5,
    "environment": 59.6,
    "happiness": 74.8,
    "id": 15,
    "income": 947,
    "life": 78.7
  },
  "屏東縣": {
    "crimeRate": 4.38,
    "education": 29.7,
    "environment": 47.5,
    "happiness": 73.8,
    "id": 16,
    "income": 736,
    "life": 76.9
  },
  "宜蘭縣": {
    "crimeRate": 13.09,
    "education": 31.7,
    "environment": 34.8,
    "happiness": 75.8,
    "id": 17,
    "income": 961,
    "life": 79.3
  },
  "花蓮縣": {
    "crimeRate": 12.02,
    "education": 33.2,
    "environment": 28.6,
    "happiness": 77.1,
    "id": 18,
    "income": 769,
    "life": 76.5
  },
  "台東縣": {
    "crimeRate": 2.24,
    "education": 22.3,
    "environment": 24,
    "happiness": 76.9,
    "id": 19,
    "income": 646,
    "life": 74.9
  },
  "澎湖縣": {
    "crimeRate": 7.84,
    "education": 33,
    "environment": 33.1,
    "happiness": 78.6,
    "id": 20,
    "income": 673,
    "life": 79.6
  }
}

//
// Normalized data
//
const CitiesNModel = {
  "全台平均": {
    "income": 0.673173516,
    "environment": 0.702354788,
    "crimeRate": 0.430450782,
    "life": 0.951203369,
    "education": 0.50442953,
    "happiness": 0.943447837
  },
  "台北市": {
    "income": 1,
    "environment": 0.629513344,
    "crimeRate": 0.464581417,
    "life": 1,
    "education": 1,
    "happiness": 0.922391858
  },
  "新北市": {
    "income": 0.730593607,
    "environment": 0.629513344,
    "crimeRate": 0.312787489,
    "life": 0.972322503,
    "education": 0.559731544,
    "happiness": 0.924936387
  },
  "基隆市": {
    "income": 0.682648402,
    "environment": 0.47566719,
    "crimeRate": 1,
    "life": 0.954271961,
    "education": 0.518120805,
    "happiness": 0.91221374
  },
  "桃園市": {
    "income": 0.817351598,
    "environment": 0.709576138,
    "crimeRate": 0.238730451,
    "life": 0.963898917,
    "education": 0.50738255,
    "happiness": 0.940203562
  },
  "新竹市": {
    "income": 0.864535769,
    "environment": 0.643642072,
    "crimeRate": 0.520699172,
    "life": 0.968712395,
    "education": 0.679194631,
    "happiness": 0.959287532
  },
  "新竹縣": {
    "income": 0.780821918,
    "environment": 0.643642072,
    "crimeRate": 0.417663293,
    "life": 0.9566787,
    "education": 0.511409396,
    "happiness": 0.950381679
  },
  "苗栗縣": {
    "income": 0.630136986,
    "environment": 0.692307692,
    "crimeRate": 0.243790248,
    "life": 0.948255114,
    "education": 0.391946309,
    "happiness": 0.926208651
  },
  "台中市": {
    "income": 0.738203957,
    "environment": 0.676609105,
    "crimeRate": 0.257589696,
    "life": 0.960288809,
    "education": 0.57852349,
    "happiness": 0.945292621
  },
  "彰化縣": {
    "income": 0.589802131,
    "environment": 0.784929356,
    "crimeRate": 0.431462741,
    "life": 0.959085439,
    "education": 0.401342282,
    "happiness": 0.923664122
  },
  "南投縣": {
    "income": 0.562404871,
    "environment": 0.916797488,
    "crimeRate": 0.557037718,
    "life": 0.937424789,
    "education": 0.412080537,
    "happiness": 0.936386768
  },
  "雲林縣": {
    "income": 0.557838661,
    "environment": 0.857142857,
    "crimeRate": 0.255289788,
    "life": 0.937424789,
    "education": 0.363758389,
    "happiness": 0.891857506
  },
  "嘉義市": {
    "income": 0.698630137,
    "environment": 0.937205651,
    "crimeRate": 0.543698252,
    "life": 0.962695548,
    "education": 0.759731544,
    "happiness": 0.949109415
  },
  "嘉義縣": {
    "income": 0.571537291,
    "environment": 1,
    "crimeRate": 0.598896044,
    "life": 0.942238267,
    "education": 0.326174497,
    "happiness": 0.918575064
  },
  "台南市": {
    "income": 0.637747336,
    "environment": 0.87755102,
    "crimeRate": 0.626954922,
    "life": 0.954271961,
    "education": 0.496644295,
    "happiness": 0.954198473
  },
  "高雄市": {
    "income": 0.720700152,
    "environment": 0.935635793,
    "crimeRate": 0.319687213,
    "life": 0.947051745,
    "education": 0.570469799,
    "happiness": 0.951653944
  },
  "屏東縣": {
    "income": 0.560121766,
    "environment": 0.745682889,
    "crimeRate": 0.201471941,
    "life": 0.925391095,
    "education": 0.398657718,
    "happiness": 0.938931298
  },
  "宜蘭縣": {
    "income": 0.731354642,
    "environment": 0.546310832,
    "crimeRate": 0.602115915,
    "life": 0.954271961,
    "education": 0.425503356,
    "happiness": 0.96437659
  },
  "花蓮縣": {
    "income": 0.585235921,
    "environment": 0.448979592,
    "crimeRate": 0.552897884,
    "life": 0.920577617,
    "education": 0.445637584,
    "happiness": 0.980916031
  },
  "台東縣": {
    "income": 0.491628615,
    "environment": 0.376766091,
    "crimeRate": 0.103035879,
    "life": 0.901323706,
    "education": 0.299328859,
    "happiness": 0.978371501
  },
  "澎湖縣": {
    "income": 0.51217656,
    "environment": 0.519623234,
    "crimeRate": 0.360625575,
    "life": 0.95788207,
    "education": 0.44295302,
    "happiness": 1
  }
}

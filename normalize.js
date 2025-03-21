const months = {
  '1': /^(?:jan|ene|янв|січ|gen|जनवरी|janv?|ينا)/gi,
  '2': /^(?:feb|фев|лют|फरवरी|févr?|فبر)/gi,
  '3': /^(?:mar|mär|мар|бер|मार्च|mars?|مار)/gi,
  '4': /^(?:a[pb]r|апр|кві|अप्रैल|avr?|أبر)/gi,
  '5': /^(?:may|mai|май|тра|mag|mei|मई|ماي)/gi,
  '6': /^(?:jun|juni|июн|чер|giu|जून|juin|يون)/gi,
  '7': /^(?:jul|juli|июл|лип|lug|जुलाई|juill?|يول)/gi,
  '8': /^(?:aug|ago|авг|сер|agu|अगस्त|août|أغس)/gi,
  '9': /^(?:sep|sept|сен|вер|set|सितंबर|sept?|سبت)/gi,
  '10': /^(?:o[ck]t|окт|жов|ott|out|अक्टूबर|oct|أكت)/gi,
  '11': /^(?:nov|ноя|лис|नवंबर|nov|نوف)/gi,
  '12': /^(?:d[ei][cz]|дек|гру|dic|dez|des|दिसंबर|déc|ديس)/gi
}

const teens = {
  '20': /^(?:twent|два|vingt|عشر)/gi,
  '30': /^(?:thirt|три|trent|ثلاث)/gi
}

const verbalDays = [
  [100, /^(?:hundred|сто|hundert|cento|cem|cien|ratus|सौ|cent|مائة)/gi],
  [200, /^(?:two hundred|дв[іе]ст|zweihundert|duecento|duzentos|duzentos|dua ratus|दोसरा|deux cents?|مئتان)/gi],
  [300, /^(?:three hundred|трист|dreihundert|trecento|tricentos|trezentos|tiga ratus|तीसरा|trois cents?|ثلاثمائة)/gi],
  [400, /^(?:four hundred|ч[ое]т[иы]р[ие]ст|vierhundert|quattrocento|quatrocentos|cuatrocientos|empat ratus|चालीसरा|quatre cents?|أربعمائة)/gi],
  [500, /^(?:five hundred|п.?ятсот|fünfhundert|cinquecento|quinhentos|quinientos|lima ratus|पचासरा|cinq cents?|خمسمائة)/gi],
  [600, /^(?:six hundred|ш[іе]стсот|sechshundert|seicentos|seiscentos|seiscientos|dua ratus|दोसरा|six cents?|ستمائة)/gi],
  [700, /^(?:seven hundred|с[іе]мсот|siebenhundert|settecento|setecentos|setecientos|dua ratus|दोसरा|sept cents?|سبعمائة)/gi],
  [800, /^(?:eight hundred|в[о]с[іе]мсот|achthundert|ottocentos|oitocentos|ochocientos|dua ratus|दोसरा|huit cents?|ثمانمائة)/gi],
  [900, /^(?:nine hundred|дев.?ятсот|neunhundert|novecento|novecentos|novecientos|dua ratus|दोसरा|neuf cents?|تسعمائة)/gi],
  [1000, /^(?:thousand|т[ыи]сяч|tausend|mille|mil|mil|ribu|हज़ार|mille|ألف)/gi],
  [20, /^(?:twent|двадц|zwanz|vent|vint|veint|dua puluh|बीस|vingt|عشرون)/gi],
  [30, /^(?:thirt[iy]|тридц|dreißig|trent|trint|treint|tiga puluh|तीस|trente|ثلاثون)/gi],
  [40, /^(?:fourty|сорок|vierzig|quarant|quarent|cuarent|empat puluh|चालीस|quarante|أربعون)/gi],
  [50, /^(?:fifty|п.?ять?десят|fünfzig|cinquant|cinquent|cincuent|lima puluh|पचास|cinquante|خمسون)/gi],
  [60, /^(?:sixty|ш[іе]сть?десят|sechzig|sessanta|sessentos|sesenta|dua puluh|ثلاثين|ثلاثين)/gi],
  [70, /^(?:seventy|с[іе]мь?десят|siebzig|settanta|setentos|setenta|dua puluh|سبعين|سبعين)/gi],
  [80, /^(?:eighty|в[оі]с[еі]мьдесят|achtzig|ottanta|oitentos|ochenta|dua puluh|ثمانين|ثمانين)/gi],
  [90, /^(?:ninety|дев.?яност|neunzig|novanta|noventos|noventa|dua puluh|تسعين|تسعين)/gi],
  [10, /^(?:ten|десят|zehn|dieci|dez|diez|sepuluh|दस|dix|عشرة)/gi],
  [11, /^(?:eleven|один+адц[ая]т|elf|undici|onze|once|sebelas|أحد عشر|أحد عشر)/gi],
  [12, /^(?:twelve|дв[еа]надц[ая]т|zwölf|dodici|doze|doce|dua belas|اثنا عشر|اثنا عشر)/gi],
  [13, /^(?:thirteen|тринадц[ая]т|dreizehn|tredici|treze|treze|tiga belas|ثلاثة عشر|ثلاثة عشر)/gi],
  [14, /^(?:fourteen|ч[ео]т[иы]рнадц[яо]т|vierzehn|quattordici|quatorze|quatorze|empat belas|أربعة عشر|أربعة عشر)/gi],
  [15, /^(?:fifteen|п.?ятн|fünfzehn|quindici|quinze|quinze|lima belas|خمسة عشر|خمسة عشر)/gi],
  [16, /^(?:sixteen|ш[іе]стн|sechzehn|sedici|sedici|sedici|ستة عشر|ستة عشر)/gi],
  [17, /^(?:seventeen|с[іе]мн|siebzehn|diciassette|diciassette|diciassette|سبعة عشر|سبعة عشر)/gi],
  [18, /^(?:eighteen|в[іо]с[іе]мн|achtzehn|diciotto|diciotto|diciotto|ثمانية عشر|ثمانية عشر)/gi],
  [19, /^(?:nineteen|дев.?ятн|neunzehn|diciannove|diciannove|diciannove|تسعة عشر|تسعة عشر)/gi],
  [1, /^(?:first|one|пер[вш]|оди?н|erst|ein|primo|um|primeiro|primero|satu|pertama|أول|واحد|un|أول|أول)/gi],
  [2, /^(?:second|two|втор|друг|дв[аеі]|zweit|zwei|secondo|due|segundo|dois|segundo|dos|dua|kedua|ثاني|اثنان|deuxième|deux|ثاني|اثنان)/gi],
  [3, /^(?:third|three|трет|три|dritt|drei|terzo|tre|terceiro|três|tercero|tres|tiga|ketiga|ثالث|ثلاثة|troisième|trois|ثالث|ثلاثة)/gi],
  [4, /^(?:four|четверт|ч[ое]тир|viert|vier|quarto|empat|أربعة|أربعة)/gi],
  [5, /^(?:fi[fv]|п.?ят[^н]|fünft|fünf|cinque|cinquent|cincuent|lima|خمسة|خمسة)/gi],
  [6, /^(?:six|ш[ео]ст[^н]|sechs|sesso|sesso|seso|ستة|ستة)/gi],
  [7, /^(?:seven|седьм|сьом|с[іе]м|sieb(?:t|en)?|sette|sett|sette|سبعة|سبعة)/gi],
  [8, /^(?:eight|восьм|в[оі]с[іе]м|acht|ottanta|oitanta|ochenta|ثمانية|ثمانية)/gi],
  [9, /^(?:nine|дев.?ят[^н]|neun|nove|novanta|noventos|noventa|ثمانية|ثمانية)/gi]
]

const relativeDays = [
  [/с(?:ьо|е)годн|today|heute|oggi|hoje|hoy|hari ini|أمرين|اليوم|aujourd'hui|اليوم/i, 
    (currentDate) => (new Date(currentDate))],
  [/позавч[ео]ра|the day before yesterday|vorgestern|l'altro ieri|anteontem|anteayer|kemarin lusa|परसों|avant-hier|أول أمس|أول أمس/i, 
    (currentDate) => { return currentDate.setDate(currentDate.getDate() - 2) }],
  [/завтра|tomorrow|morgen|domani|amanhã|mañana|besok|كل|demain|غدا|غدا/i, 
    (currentDate) => { return currentDate.setDate(currentDate.getDate() + 1) }],
  [/вч[ео]ра|yesterday|gestern|ieri|ontem|ayer|kemarin|كل|hier|أمس|أمس/i, 
    (currentDate) => { return currentDate.setDate(currentDate.getDate() - 1) }]
]

const tokenDirections = [
  [/ago|prior|назад|попередн|предыдущ|vor|fa|atrás|hace|yang lalu|पहले|il y a|منذ|منذ/i, -1],
  [/in|ahead|через|вперед|следующ|in|fra|em|en|dalam|में|dans|في|في/i, 1]
]

const timeIntervals = [
  [/year|р[іо]к|год|jahr|anno|ano|año|tahun|साल|वर्ष|ans?|سنة|سنوات|سنوات/i, 
    (value, currentDate) => { return currentDate.setFullYear(currentDate.getFullYear() + value) }],
  [/month|м[іе]сяц|monat|mese|mês|mes|bulan|महीना|mois|شهر|أشهر|شهر|شهر/i, 
    (value, currentDate) => { return currentDate.setMonth(currentDate.getMonth() + value) }],
  [/week|тиждень|тижн|недел|woche|settimana|semana|semana|minggu|सप्ताह|semaines?|أسبوع|أسابيع|أسبوع|أسابيع/i, 
    (value, currentDate) => { return currentDate.setDate(currentDate.getDate() + 7 * value) }],
  [/day|де?н|tag|giorno|dia|día|hari|दिन|jours?|يوم|أيام|يوم|يوم/i, 
    (value, currentDate) => { return currentDate.setDate(currentDate.getDate() + value) }],
  [/hour|годин|час|stunde|ora|hora|jam|समय|heures?|ساعة|ساعات|ساعة|ساعات/i, 
    (value, currentDate) => { return currentDate.setHours(currentDate.getHours() + value) }],
  [/minute|хвилин|минут|minute|minuto|minuto|menit|मिनट|minutes?|دقيقة|دقائق|دقيقة|دقائق/i, 
    (value, currentDate) => { return currentDate.setMinutes(currentDate.getMinutes() + value) }],
  [/second|секунд|sekunde|secondo|secondo|segundo|detik|सेकंड|secondes?|ثانية|ثوان|ثانية|ثوان/i, 
    (value, currentDate) => { return currentDate.setSeconds(currentDate.getSeconds() + value) }]
]

const stripChars = str => {
  return str.replace(/^[\s\n\r]+/, '')
}

const getDay = str => {
  for (let [number, pattern] of verbalDays) {
    if (str.match(pattern)) return number
  }
}

const verbalNumberToInt = str => {
  let numbers = str.split(/\s/g)
  numbers = numbers.map(el => {
    for (let [number, pattern] of verbalDays) if (el.match(pattern)) return number
  })
  let finalNumbers = []
  for (const index of numbers.keys()) {
    if (index + 1 === numbers.length) {
      finalNumbers.push(numbers[index])
      continue
    }
    if (numbers[index] < numbers[index + 1]) {
      finalNumbers.push(numbers[index] * numbers.splice(index + 1, 1))
      continue
    }
    finalNumbers.push(numbers[index])
  }
  return finalNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

const getTen = str => {
  for (let ten of Object.keys(teens)) {
    if (str.match(teens[ten])) return parseInt(ten)
  }
}

const normalizeDay = str => {
  str = stripChars(str)
  let numericDay = str.match(/^\d+/)
  if (numericDay) return numericDay[0].padStart(2, '0')
  let textParts = str.split(/\s+/g)
  if (textParts.length === 1) return getDay(textParts[0])
  let date = getTen(textParts[0]) + getDay(textParts[1])
  return date
}

const normalizeMonth = str => {
  str = stripChars(str)
  if (str.match(/[^\d]/)) {
    for (let month of Object.keys(months)) {
      if (str.match(months[month])) return parseInt(month)
    }
  }
  return parseInt(str)
}

const getRelative = (str, date = new Date()) => {
  for (let [pattern, f] of relativeDays) {
    if (str.match(pattern)) return f(date)
  }
  return date
}

const getDifferentTime = (interval, value, date = new Date()) => {
  for (let [pattern, f] of timeIntervals) {
    if (interval.match(pattern)) return new Date(f(value, date))
  }
}


const normalizeDate = (date, relative) => {
  console.log(date);
  if (date.relative) {
    return new Date(getRelative(date.relative, relative))
  }
  if (date.timepositionToken) {
    date.timepositionNumber = date.timepositionNumber ? date.timepositionNumber : '1'
    if (date.timepositionNumber.match(/[a-zа-яєії]/)) {
      date.timepositionNumber = verbalNumberToInt(date.timepositionNumber)
    }
    date.timepositionNumber = parseInt(date.timepositionNumber)
    let direction 
    for (let [pattern, sign] of tokenDirections) {
      if (date.timepositionToken.match(pattern)) direction = sign
    }
    if (!direction) return 'Invalid date'
    return new Date(getDifferentTime(date.timepositionInterval, date.timepositionNumber * direction, relative))
  }
  let year = date.year ? date.year : (new Date()).getFullYear() + ''
  let month = date.month ? normalizeMonth(date.month) : 0
  let day = date.day ? normalizeDay(date.day) : 0
  let hours = date.hours ? date.hours : 0
  let minutes = date.minutes ? date.minutes : 0
  let seconds = date.seconds ? date.seconds : 0
  let finalDate = new Date(year, month - 1, day, hours, minutes, seconds)
  let userTimezoneOffset = finalDate.getTimezoneOffset() * 60000
  return new Date(finalDate.getTime() - userTimezoneOffset)
}

const extractDate = source => {
  if (!source.groups) return new Date()
  let date = {}
  for (let key of Object.keys(source.groups)) {
    if (source.groups[key]) date[key.split(/_/g)[0]] = source.groups[key]
  }
  return normalizeDate(date)
}

module.exports = { normalizeDate, extractDate }

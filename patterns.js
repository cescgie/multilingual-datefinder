const apos = `[\'’\`"]`
const digitsSuffixes = `(?:st|th|rd|nd|-?(?:о?е|[ое]го|[іиы]?м|ому|є|е|ь|ів|ей|я|ьох)|°|º|er|re|ème|ième|ال|ى)`
const days = `monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tue|tues|wed|thur|thurs|fri|sat|sun|montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag|mo|di|mi|do|fr|sa|so|lunedì|martedì|mercoledì|giovedì|venerdì|sabato|domenica|lun|mar|mer|gio|ven|sab|dom|segunda-feira|terça-feira|quarta-feira|quinta-feira|sexta-feira|sábado|domingo|seg|ter|qua|qui|sex|sáb|dom|lunes|martes|miércoles|jueves|viernes|sábado|domingo|lun|mar|mié|jue|vie|sáb|dom|senin|selasa|rabu|kamis|jumat|sabtu|minggu|sen|sel|rab|kam|jum|sab|min|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार|रविवार|सोम|मंगल|बुध|गुरु|शुक्र|शनि|रवि|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche|lun|mar|mer|jeu|ven|sam|dim|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت|الأحد|اث|ثل|ارب|خم|جم|سب|اح|понедельник|вторник|среда|четверг|пятница|суббота|воскресенье|понеділок|вівторок|п${apos}ятниця|субота|неділя|пн|вт|ср|чт|пт|сб|вс|нд`
const months = `(?:january|february|march|april|may|june|july|august|september|october|november|december|gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre|janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember|जनवरी|फरवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्टूबर|नवंबर|दिसंबर|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre|يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر|jan\\.?|ene\\.?|gen\\.?|feb\\.?|mar\\.?|apr\\.?|abr\\.?|may\\.?|mag\\.?|jun\\.?|giu\\.?|jul\\.?|lug\\.?|aug\\.?|ago\\.?|sep\\.?|set\\.?|sept\\.?|oct\\.?|out\\.?|ott\\.?|nov\\.?|dec\\.?|dic\\.?|dez\\.?|janv?\\.?|févr?\\.?|mars?\\.?|avr\\.?|juin\\.?|juil\\.?|août\\.?|sept?\\.?|oct\\.?|nov\\.?|déc\\.?|ينا|فبر|مار|أبر|ماي|يون|يول|أغس|سبت|أكت|نوف|ديس|январ|феврал|март|апрел|июн|июл|август|сентябр|октябр|декабр|янв\\.?|фев\\.?|мар\\.?|апр\\.?|май\\.?|июн\\.?|июл\\.?|авг\\.?|сен\\.?|окт\\.?|ноя\\.?|дек\\.?|січе?н|лют|березе?н|квіте?н|траве?н|черве?н|липе?н|серпе?н|вересе?н|жовте?н|листопад|груде?н|січ\\.?|лют\\.?|бер\\.?|кві\\.?|тра\\.?|чер\\.?|лип\\.?|сер\\.?|вер\\.?|жов\\.?|лис\\.?|гру\\.?)(?:ь|я|ого|им|ем|а)?`
const relativeDays = `(?:heute|morgen|übermorgen|gestern|vorgestern|oggi|domani|dopodomani|ieri|l'altro ieri|hoje|amanhã|depois de amanhã|ontem|anteontem|hoy|mañana|pasado mañana|ayer|anteayer|hari ini|besok|lusa|kemarin|kemarin lusa|आज|कल|परसों|बीता कल|बीता परसों|aujourd'hui|demain|après-demain|hier|avant-hier|اليوم|غدا|بعد غد|أمس|أول أمس|сьогодні|сегодня|(?:п[оі]сл[ея])?завтра|(?:поза)?вчера|today|tomorrow|yesterday|the day before yesterday|the day after tomorrow)(?![a-zа-яєїґ])`
const timeIntervals = `jahre?|monate?|wochen?|tage?|stunden?|minuten?|sekunden?|
ann[oi]|mes[ei]|settiman[ae]|giorn[oi]|or[ae]|minut[oi]|second[oi]|
anos?|mês|meses|semanas?|dias?|horas?|minutos?|segundos?|
años?|mes(?:es)?|semanas?|días?|horas?|minutos?|segundos?|
tahun|bulan|minggu|hari|jam|menit|detik|
वर्ष|महीना|सप्ताह|दिन|घंटा|मिनट|सेकंड|
years?|months?|weeks?|days?|hours?|minutes?|seconds?|
год|рік|м[еі]сяц|недел|тиж(?:де)?н|де?н[я]|час|годин|минут|хвилин|секунд|
ans?|mois|semaines?|jours?|heures?|minutes?|secondes?|
سنة|سنوات|شهر|أشهر|أسبوع|أسابيع|يوم|أيام|ساعة|ساعات|دقيقة|دقائق|ثانية|ثوان`
const positionalTokensAfter = `ago|ahead|prior|
zurück|vor|
fa|indietro|
atrás|antes|
hace|antes|
yang lalu|sebelumnya|
पहले|आगे|
(?:тому )?назад|вперед|
il y a|depuis|
منذ|قبل`
const positionalTokensBefore = `in|next|
durch|nächste|
fra|prossimo|
em|próximo|
en|próximo|
dalam|berikutnya|
में|अगला|
через|(?:наступн|попередн|следующ|предыдущ)(?:ий|ого|ем|им|е|а|ая)|
dans|prochain|
في|بعد|القادم`
const timezones = `ACDT|ACST|ACT|ACWDT|ACWST|ADDT|ADMT|ADT|AEDT|AEST|AFT|AHDT|AHST|AKDT|AKST|AKTST|AKTT|ALMST|ALMT|AMST|AMT|ANAST|ANAT|ANT|APT|AQTST|AQTT|ARST|ART|ASHST|ASHT|AST|AWDT|AWST|AWT|AZOMT|AZOST|AZOT|AZST|AZT|BAKST|BAKT|BDST|BDT|BEAT|BEAUT|BIOT|BMT|BNT|BORT|BOST|BOT|BRST|BRT|BST|BTT|BURT|CANT|CAPT|CAST|CAT|CAWT|CCT|CDDT|CDT|CEDT|CEMT|CEST|CET|CGST|CGT|CHADT|CHAST|CHDT|CHOST|CHOT|CIST|CKHST|CKT|CLST|CLT|CMT|COST|COT|CPT|CST|CUT|CVST|CVT|CWT|CXT|ChST|DACT|DAVT|DDUT|DFT|DMT|DUSST|DUST|EASST|EAST|EAT|ECT|EDDT|EDT|EEDT|EEST|EET|EGST|EGT|EHDT|EMT|EPT|EST|ET|EWT|FET|FFMT|FJST|FJT|FKST|FKT|FMT|FNST|FNT|FORT|FRUST|FRUT|GALT|GAMT|GBGT|GEST|GET|GFT|GHST|GILT|GIT|GMT|GST|GYT|HAA|HAC|HADT|HAE|HAP|HAR|HAST|HAT|HAY|HDT|HKST|HKT|HLV|HMT|HNA|HNC|HNE|HNP|HNR|HNT|HNY|HOVST|HOVT|HST|ICT|IDDT|IDT|IHST|IMT|IOT|IRDT|IRKST|IRKT|IRST|ISST|IST|JAVT|JCST|JDT|JMT|JST|JWST|KART|KDT|KGST|KGT|KIZST|KIZT|KMT|KOST|KRAST|KRAT|KST|KUYST|KUYT|KWAT|LHDT|LHST|LINT|LKT|LMT|LMT|LMT|LMT|LRT|LST|MADMT|MADST|MADT|MAGST|MAGT|MALST|MALT|MART|MAWT|MDDT|MDST|MDT|MEST|MET|MHT|MIST|MIT|MMT|MOST|MOT|MPT|MSD|MSK|MSM|MST|MUST|MUT|MVT|MWT|MYT|NCST|NCT|NDDT|NDT|NEGT|NEST|NET|NFT|NMT|NOVST|NOVT|NPT|NRT|NST|NT|NUT|NWT|NZDT|NZMT|NZST|OMSST|OMST|ORAST|ORAT|PDDT|PDT|PEST|PET|PETST|PETT|PGT|PHOT|PHST|PHT|PKST|PKT|PLMT|PMDT|PMMT|PMST|PMT|PNT|PONT|PPMT|PPT|PST|PT|PWT|PYST|PYT|QMT|QYZST|QYZT|RET|RMT|ROTT|SAKST|SAKT|SAMT|SAST|SBT|SCT|SDMT|SDT|SET|SGT|SHEST|SHET|SJMT|SLT|SMT|SRET|SRT|SST|STAT|SVEST|SVET|SWAT|SYOT|TAHT|TASST|TAST|TBIST|TBIT|TBMT|TFT|THA|TJT|TKT|TLT|TMT|TOST|TOT|TRST|TRT|TSAT|TVT|ULAST|ULAT|URAST|URAT|UTC|UYHST|UYST|UYT|UZST|UZT|VET|VLAST|VLAT|VOLST|VOLT|VOST|VUST|VUT|WARST|WART|WAST|WAT|WDT|WEDT|WEMT|WEST|WET|WFT|WGST|WGT|WIB|WIT|WITA|WMT|WSDT|WSST|WST|WT|XJT|YAKST|YAKT|YAPT|YDDT|YDT|YEKST|YEKST|YEKT|YEKT|YERST|YERT|YPT|YST|YWT|zzz`
const naTimezones = `pacific|eastern|mountain|central`
const allTimezones = `${timezones}|${naTimezones}`
const delimiter = `(?:[.\\/\\\-]+)`
const quotePatterns = `[«‹»›„"‟"’"❝❞❮❯⹂〝〞〟＂‚'‛❛❜❟\`]`

// Useless tokens (at least for now)
const positionalTokens = `next|last|(?:следующ|предыдущ|наступн|попередн)(?:ий|ого|ем|им|е|а|ая)`
const extraTokens = 'due|by|on|during|standard|daylight|savings|time|date|dated|of|to|through|between|until|at|day|am|bis|von|дня|вечера|в|о|від|до|от|à|de|le|la|les|du|des|au|aux|jusqu\'à|entre|pendant|في|من|إلى|حتى|خلال|بين'

// Digits patterns
const yearDigit = '(?:19|20)\\d{2}'
const monthDigit = '(?:0[1-9]|1[0-2])'
const dayDigit = '[0-2]\\d|3[0-1]'
const singleDayDigit = '[1-2\\s]?\\d|[3\\s]?[0-1]'
const singleMonthDigit = '\\s\\d|1[0-2]'
const hourDigit = '[0-2]?\\d'
const hmDigit = '[0-5]\\d'
const timePeriod = '[ap]\\.?m\\.?'
const verbalDays = `(?:(?:first|second|third|fourth|fifth|sixth|seventh|eighth|nineth|tenth|eleventh|twelveth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth|twentieth|thirtieth|erste|zweite|dritte|vierte|fünfte|sechste|siebte|achte|neunte|zehnte|elfte|zwölfte|dreizehnte|vierzehnte|fünfzehnte|sechzehnte|siebzehnte|achtzehnte|neunzehnte|zwanzigste|dreißigste|пер[вш]|втор|треть?|четверт|п${apos}?ят|ш[ео]ст|седьм|восьм|дев${apos}?ят|десят|один+адц[ая]т|дв[еа]надц[ая]т|тринадц[ая]т|ч[ео]т[иы]рнадц[яо]т|п${apos}?ятнадц[ая]т|ш[іе]стнадц[яа]т|с[іе]мнадц[ая]т|в[іо]с[іе]мнадц[ая]т|дев${apos}?ятнадц[ая]т|друг|сьом|
premier|deuxième|troisième|quatrième|cinquième|sixième|septième|huitième|neuvième|dixième|onzième|douzième|treizième|quatorzième|quinzième|seizième|dix-septième|dix-huitième|dix-neuvième|vingtième|trentième|
الأول|الثاني|الثالث|الرابع|الخامس|السادس|السابع|الثامن|التاسع|العاشر|الحادي عشر|الثاني عشر|الثالث عشر|الرابع عشر|الخامس عشر|السادس عشر|السابع عشر|الثامن عشر|التاسع عشر|العشرون|الثلاثون)(?:${digitsSuffixes})?)`
const verbalNumbers = `one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|
uno|due|tre|quattro|cinque|sei|sette|otto|nove|dieci|undici|dodici|tredici|quattordici|quindici|sedici|diciassette|diciotto|diciannove|
um|dois|três|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|catorze|quinze|dezesseis|dezessete|dezoito|dezenove|
uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|dieciséis|diecisiete|dieciocho|diecinueve|
satu|dua|tiga|empat|lima|enam|tujuh|delapan|sembilan|sepuluh|sebelas|dua belas|tiga belas|empat belas|lima belas|enam belas|tujuh belas|delapan belas|sembilan belas|
एक|दो|तीन|चार|पांच|छह|सात|आठ|नौ|दस|ग्यारह|बारह|तेरह|चौदह|पंद्रह|सोलह|सत्रह|अठारह|उन्नीस|
eins|zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|dreizehn|vierzehn|fünfzehn|sechzehn|siebzehn|achtzehn|neunzehn|
(?:оди?н|дв[аіе]?|три?|ч[ео]т[ыи]р|п.?ят|ш[еі]ст|с(?:[еі]|ьо)м|в[оі]с[еь]м|дев.?ят|десят|один+адц[ая]т|дв[еа]н+адцат|тринадц[ая]т|ч[ео]т[ыи]рнадц[ая]т|п.?ятнадцат|ш[еі]стнадц[ая]т|с[іе]мнадц[ая]т|в[оі]с[іе]мнадц[ая]т|дев.?ятнадц[ая]т)(?:${digitsSuffixes})?|
un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|dix-sept|dix-huit|dix-neuf|
واحد|اثنان|ثلاثة|أربعة|خمسة|ستة|سبعة|ثمانية|تسعة|عشرة|أحد عشر|اثنا عشر|ثلاثة عشر|أربعة عشر|خمسة عشر|ستة عشر|سبعة عشر|ثمانية عشر|تسعة عشر`
const teens = `(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|
venti|trenta|quaranta|cinquanta|sessanta|settanta|ottanta|novanta|cento|
vinte|trinta|cuarenta|cinquenta|sessenta|setenta|oitenta|noventa|cem|
veinte|treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa|cien|
dua puluh|tiga puluh|empat puluh|lima puluh|enam puluh|tujuh puluh|delapan puluh|sembilan puluh|seratus|
बीस|तीस|चालीस|पचास|साठ|सत्तर|अस्सी|नब्बे|सौ|
zwanzig|dreißig|vierzig|fünfzig|sechzig|siebzig|achtzig|neunzig|hundert|
عشرون|ثلاثون|أربعون|خمسون|ستون|سبعون|ثمانون|تسعون|مائة)${digitsSuffixes}?`
const verbalDay = `(?:${teens}\\s*)?${verbalDays}`
const verbalNumberDay = `(?:${teens}\\s*)*${verbalNumbers}`
const timePositionsPatterns = `(?<timepositionToken_before>${positionalTokensBefore})\\s*(?<timepositionNumber_before>${verbalNumberDay}|\\d+)?\\s*(?<timepositionInterval_before>${timeIntervals})|(?<timepositionNumber_after>${verbalNumberDay}|\\d+\\s*)?(?<timepositionInterval_after>${timeIntervals})\\s*(?<timepositionToken_after>${positionalTokensAfter})`
const relativeDaysPatterns = `(?<relative>${relativeDays})`

// Date patterns
const yyyymmPattern = `(?<year_yyyymm>${yearDigit})${delimiter}?(?<month_yyyymm>${monthDigit})`
const yyyymmddPattern = `(?<year_yyyymmdd>${yearDigit})${delimiter}?(?<month_yyyymmdd>${monthDigit})${delimiter}?(?<day_yyyymmdd>${dayDigit})`
const yyyymmddhhmmssPattern = `(?<year_yyyymmddhhmmss>${yearDigit})${delimiter}?(?<month_yyyymmddhhmmss>${monthDigit})${delimiter}?(?<day_yyyymmddhhmmss>${dayDigit})(?<hours_yyyymmddhhmmss>${hourDigit}):?(?<minutes_yyyymmddhhmmss>${hmDigit}):?(?<seconds_yyyymmddhhmmss>${hmDigit})`
const iso8601Pattern = `(?<year_iso>${yearDigit})-(?<month_iso>${monthDigit})-(?<day_iso>${dayDigit})(?:[T ](?<hours_iso>${hourDigit}):(?<minutes_iso>${hmDigit}):(?<seconds_iso>${hmDigit})(?:[.,]+(?<microseconds_iso>[0-9]+))?(?<offset_iso>(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])))?`

const mmddyyyyPattern = `(?<month_mmddyyyy>${monthDigit})${delimiter}(?<day_mmddyyyy>${dayDigit})${delimiter}(?<year_mmddyyyy>${yearDigit})?`
const ddmmyyyyPattern = `(?<day_ddmmyyyy>${dayDigit})${delimiter}(?<month_ddmmyyyy>${monthDigit})${delimiter}(?<year_ddmmyyyy>${yearDigit})?`

const mdyyyyPattern = `(?<month_mdyyyy>${singleMonthDigit})${delimiter}(?<day_mdyyyy>${dayDigit})${delimiter}(?<year_mdyyyy>${yearDigit})?`
const dmyyyyPattern = `(?<day_dmyyyy>${singleDayDigit})${delimiter}(?<month_dmyyyy>${singleMonthDigit})${delimiter}(?<year_dmyyyy>${yearDigit})?`

const monthDYPattern = `(?<month_monthDY>${months})\\s*(?<day_monthDY>${singleDayDigit})[,\\s]+(?<year_monthDY>${yearDigit})?`

const monddyyyyPattern = `(?<month_monddyyyy>${months})(?<day_monddyyyy>${dayDigit})(?<year_monddyyyy>${yearDigit})?`
const ddmonyyyyPattern = `(?<day_ddmonyyyy>${dayDigit})(?<month_ddmonyyyy>${months})(?<year_ddmonyyyy>${yearDigit})?`
const yyyymonddPattern = `(?<year_yyyymondd>${yearDigit})(?<month_yyyymondd>${months})(?<day_yyyymondd>${dayDigit})`

const dmonyPattern = `${quotePatterns}?(?<day_dmony>${singleDayDigit}${digitsSuffixes}?|${verbalDay})${quotePatterns}?(?:\\s*of\\s*|[^\S\r\n])?(?<month_dmony>${months})[, ]+(?<year_dmony>${yearDigit})?(\\s*?року|\\s*?года|\\s*[рг]\.)?`
const ydmonPattern = `(?<year_ydmon>${yearDigit})[, ]+(?<day_ydmon>${singleDayDigit}${digitsSuffixes}?|${verbalDay})(?:\\s*of\\s*|[^\S\r\n])?(?<month_ydmon>${months})`
const mondyPattern = `(?<month_mondy>${months})\\s*(?<day_mondy>${singleDayDigit}${digitsSuffixes}?|${verbalDay})[,\\s*]+(?<year_mondy>${yearDigit})?(\\s*року|\\s*?года|\\s*[рг]\.)?`
const dmonPattern = `${quotePatterns}?(?<day_dmon>${singleDayDigit}${digitsSuffixes}?|${verbalDay})${quotePatterns}?(?:\\s*of\\s*|[^\S\r\n])?(?<month_dmon>${months})`

const monyPattern = `(?<month_mony>${months})[,\\s*]+(?<year_mony>${yearDigit})?(\\s*року|\\s*?года|\\s*[рг]\.)?`

// All date patterns
const datePatterns = '(?:' + [
  iso8601Pattern, mondyPattern, ydmonPattern, dmonyPattern, ddmmyyyyPattern, mmddyyyyPattern, 
  yyyymonddPattern, ddmonyyyyPattern, monddyyyyPattern, monthDYPattern, dmonPattern,
  monyPattern, dmyyyyPattern, mdyyyyPattern, yyyymmddhhmmssPattern, yyyymmddPattern,
  yyyymmPattern, timePositionsPatterns, relativeDaysPatterns
].join('|') + ')'

const fullPattern = `(?:(?<hours_before_day>${hourDigit}):(?<minutes_before_day>${hmDigit})(?: ?(?<timePeriod_before_day>${timePeriod}))?[ ,]+)?(?:(?<weekday>${days})[ ,]+)?(?:(?<hours_after_day>${hourDigit}):(?<minutes_after_day>${hmDigit})(?: ?(?<timePeriod_after_day>${timePeriod}))?[ ,]+)?${datePatterns}(?:(?:[, ]*|\\s*at\\s*)(?<hours_after_date>${hourDigit}):(?<minutes_after_date>${hmDigit})(?: ?(?<timePeriod_after_date>${timePeriod}))?)?`
const dateRegex = new RegExp(fullPattern, 'imsg')

module.exports = { dateRegex }

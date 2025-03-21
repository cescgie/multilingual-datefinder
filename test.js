// Test script for multilingual-datefinder
const dateFinder = require('./index');

// Test function to run multiple tests and display results in a readable format
function runTests(tests) {
  console.log('='.repeat(70));
  console.log('MULTILINGUAL DATEFINDER TEST RESULTS');
  console.log('='.repeat(70));
  
  tests.forEach((test, index) => {
    console.log(`\nTEST #${index + 1}: ${test.description}`);
    console.log(`TEXT: "${test.text}"`);
    
    try {
      const results = dateFinder(test.text);
      console.log('\nRESULTS:');
      
      if (results.length === 0) {
        console.log('  No dates found!');
      } else {
        results.forEach((result, i) => {
          console.log(`  [${i + 1}] Found date: ${result.string.trim()}`);
          console.log(`      Date object: ${result.date}`);
          console.log(`      Index: ${result.startIndex} to ${result.endIndex}`);
        });
      }
      
      // Validation (if expected results are provided)
      if (test.expectedCount !== undefined) {
        const passed = results.length === test.expectedCount;
        console.log(`\nVALIDATION: ${passed ? 'PASSED ✓' : 'FAILED ✗'}`);
        if (!passed) {
          console.log(`  Expected to find ${test.expectedCount} dates, but found ${results.length}`);
        }
      }
      
    } catch (error) {
      console.log('\nERROR:');
      console.log('  ' + error.message);
    }
    
    console.log('-'.repeat(70));
  });
}

// Define test cases
const tests = [
  {
    description: 'German date format with month name',
    text: 'Bewertet in Deutschland am 5. Dezember 2024',
    expectedCount: 1
  },
  {
    description: 'English date format',
    text: 'Reviewed in Germany on 5 December 2004',
    expectedCount: 1
  },
  {
    description: 'German date format with numeric date',
    text: 'Das Treffen findet am 15.03.2023 statt.',
    expectedCount: 1
  },
  {
    description: 'German relative date expressions',
    text: 'Die Lieferung kommt morgen. Das Paket wurde gestern verschickt.',
    expectedCount: 2
  },
  {
    description: 'Mixed language text with multiple dates',
    text: 'Meeting scheduled for 12.05.2023. Besprechung am Montag, den 15. Mai 2023. Зустріч 18 травня 2023 року.',
    expectedCount: 3
  },
  {
    description: 'German verbal numbers',
    text: 'Der erste März zweitausenddreiundzwanzig war ein wichtiger Tag.',
    expectedCount: 1
  },
  {
    description: 'German with time expressions',
    text: 'Termin am fünfzehnten August 2024 um 14:30 Uhr',
    expectedCount: 1
  },
  {
    description: 'Ambiguous date formats in German',
    text: 'Lieferdatum: 01.02.2023 (ist das der erste Februar oder der zweite Januar?)',
    expectedCount: 1
  },
  {
    description: 'Future and past time references in German',
    text: 'In zwei Wochen findet die Konferenz statt. Vor drei Tagen hat es geregnet.',
    expectedCount: 2
  },
  {
    description: 'Complete test with various formats',
    text: `Heute ist der 21. März 2025.
           Yesterday was March 20, 2025.
           Вчора було 20 березня 2025 року.
           Вчера было 20 марта 2025 года.
           Der Termin wurde auf 5. April 2025 verschoben.
           Die Veranstaltung findet vom 10.05.2025 bis 15.05.2025 statt.`,
    expectedCount: 7
  },
  {
    description: 'French date formats',
    text: 'La réunion aura lieu le 15 avril 2024. Rendez-vous le 1er mars 2024.',
    expectedCount: 2
  },
  {
    description: 'French relative dates',
    text: "Aujourd'hui il fait beau. Demain sera pluvieux. La fête était hier. Avant-hier j'étais malade.",
    expectedCount: 4
  },
  {
    description: 'French numeric dates',
    text: 'Date limite: 01/02/2024. La conférence commence le 15.03.2024',
    expectedCount: 2
  },
  {
    description: 'French time expressions',
    text: 'Dans deux semaines. Il y a trois jours. Dans un mois.',
    expectedCount: 3
  },
  {
    description: 'Arabic date formats',
    text: 'الاجتماع في 15 أبريل 2024. الموعد يوم 1 مارس 2024.',
    expectedCount: 2
  },
  {
    description: 'Arabic relative dates',
    text: 'اليوم مشمس. غداً سيكون ممطراً. الحفل كان أمس. كنت مريضاً أول أمس.',
    expectedCount: 4
  },
  {
    description: 'Arabic numeric dates',
    text: 'آخر موعد: 01/02/2024. يبدأ المؤتمر في 15.03.2024',
    expectedCount: 2
  },
  {
    description: 'Arabic time expressions',
    text: 'بعد أسبوعين. قبل ثلاثة أيام. في غضون شهر.',
    expectedCount: 3
  },
  {
    description: 'Mixed language with French and Arabic',
    text: `La réunion est le 15 mars 2024.
           الاجتماع في 15 مارس 2024.
           Meeting on March 15, 2024.
           Treffen am 15. März 2024.`,
    expectedCount: 4
  },
  {
    description: 'French verbal numbers and months',
    text: 'Le premier janvier deux-mille-vingt-quatre. Le quinze février deux-mille-vingt-quatre.',
    expectedCount: 2
  },
  {
    description: 'Arabic verbal numbers and months',
    text: 'الخامس عشر من يناير ألفين وأربعة وعشرين. العشرون من فبراير ألفين وأربعة وعشرين.',
    expectedCount: 2
  },
  {
    description: 'Complex multilingual date expressions',
    text: `Aujourd'hui: 21 mars 2025
           اليوم: 21 مارس 2025
           Dans deux semaines
           بعد أسبوعين
           Il y a trois jours
           قبل ثلاثة أيام
           Le premier avril
           الأول من أبريل`,
    expectedCount: 8
  },
  {
    description: 'French and Arabic time formats',
    text: `Rendez-vous à 14h30 le 15 avril 2024
           موعد الساعة 14:30 يوم 15 أبريل 2024
           À 9h du matin le 1er mai
           في الساعة 9 صباحاً يوم 1 مايو`,
    expectedCount: 4
  },
  {
    description: 'All supported languages combined',
    text: `Today is March 21, 2025.
           Heute ist der 21. März 2025.
           Aujourd'hui c'est le 21 mars 2025.
           اليوم هو 21 مارس 2025.
           Сьогодні 21 березня 2025 року.
           Сегодня 21 марта 2025 года.
           Tomorrow is March 22, 2025.
           Morgen ist der 22. März 2025.
           Demain sera le 22 mars 2025.
           غداً سيكون 22 مارس 2025.`,
    expectedCount: 10
  },
  {
    description: 'Italian date formats',
    text: 'La riunione è il 15 aprile 2024. Appuntamento il 1° marzo 2024.',
    expectedCount: 2
  },
  {
    description: 'Italian relative dates',
    text: 'Oggi fa bel tempo. Domani pioverà. La festa era ieri. L\'altro ieri ero malato.',
    expectedCount: 4
  },
  {
    description: 'Portuguese date formats',
    text: 'A reunião será em 15 de abril de 2024. Encontro marcado para 1° de março de 2024.',
    expectedCount: 2
  },
  {
    description: 'Portuguese relative dates',
    text: 'Hoje está ensolarado. Amanhã vai chover. A festa foi ontem. Anteontem eu estava doente.',
    expectedCount: 4
  },
  {
    description: 'Spanish date formats',
    text: 'La reunión es el 15 de abril de 2024. Cita el 1° de marzo de 2024.',
    expectedCount: 2
  },
  {
    description: 'Spanish relative dates',
    text: 'Hoy hace sol. Mañana lloverá. La fiesta fue ayer. Anteayer estaba enfermo.',
    expectedCount: 4
  },
  {
    description: 'Indonesian date formats',
    text: 'Rapat pada tanggal 15 April 2024. Janji pada 1 Maret 2024.',
    expectedCount: 2
  },
  {
    description: 'Indonesian relative dates',
    text: 'Hari ini cerah. Besok akan hujan. Pesta kemarin. Kemarin lusa saya sakit.',
    expectedCount: 4
  },
  {
    description: 'Hindi date formats',
    text: 'बैठक 15 अप्रैल 2024 को है। मुलाकात 1 मार्च 2024 को।',
    expectedCount: 2
  },
  {
    description: 'Hindi relative dates',
    text: 'आज मौसम अच्छा है। कल बारिश होगी। पार्टी बीता कल थी। बीता परसों मैं बीमार था।',
    expectedCount: 4
  },
  {
    description: 'Mixed Romance languages',
    text: `La reunión es el 15 de abril de 2024.
           A reunião é em 15 de abril de 2024.
           La riunione è il 15 aprile 2024.
           Meeting on April 15, 2024.`,
    expectedCount: 4
  },
  {
    description: 'Asian languages mix',
    text: `बैठक 15 अप्रैल 2024 को है।
           Rapat pada 15 April 2024.
           Meeting on April 15, 2024.`,
    expectedCount: 3
  },
  {
    description: 'Complex date expressions in Romance languages',
    text: `Il primo maggio duemilaventiquattro.
           O primeiro de maio de dois mil e vinte e quatro.
           El primero de mayo de dos mil veinticuatro.`,
    expectedCount: 3
  },
  {
    description: 'Time formats across languages',
    text: `Appuntamento alle 14:30 del 15 aprile 2024
           Reunião às 14:30 do dia 15 de abril de 2024
           Reunión a las 14:30 del 15 de abril de 2024
           Rapat pada pukul 14:30 tanggal 15 April 2024
           बैठक 15 अप्रैल 2024 को दोपहर 2:30 बजे`,
    expectedCount: 5
  }
];

// Run the tests
runTests(tests);
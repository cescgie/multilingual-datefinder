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
  }
];

// Run the tests
runTests(tests);
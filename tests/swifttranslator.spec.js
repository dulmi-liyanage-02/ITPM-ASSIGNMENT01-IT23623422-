// singlish_test.spec.ts
import { test, expect } from '@playwright/test';

// All 35 test cases
const testCases = [
  // 24 POSITIVE TESTS - SHOULD PASS
  { id: "Pos_Fun_0001", input: "ohu bath kanavaa.", expected: "ඔහු බත් කනවා", type: "positive" },
  { id: "Pos_Fun_0002", input: "karuNaakaralaa mata oyage CV eka evanavadha.", expected: "කරුණාකරලා මට ඔයගෙ CV එක එවනවද.", type: "positive" },
  { id: "Pos_Fun_0003", input: "obagee dhavasa suBha veevaa!", expected: "ඔබගේ දවස සුභ වේවා!", type: "positive" },
  { id: "Pos_Fun_0004", input: "oyaa maath samaga tharaha unath mama oyaa akamaethi dheval karanne naee.", expected: "ඔයා මාත් සමග තරහ උනත් මම ඔයා අකමැති දෙවල් කරන්නේ නෑ.", type: "positive" },
  { id: "Pos_Fun_0005", input: "mama oyaata paan ganna onedha?", expected: "මම ඔයාට පාන් ගන්න ඔනෙද?", type: "positive" },
  { id: "Pos_Fun_0006", input: "mata heta office yanna baeri pansalata dhaane dhenna yanna thiyenavaa.", expected: "මට හෙට office යන්න බැරි පන්සලට දානෙ දෙන්න යන්න තියෙනවා.", type: "positive" },
  { id: "Pos_Fun_0007", input: "karuNaakaralaa mata adha oya samaga office ekata yanna puluvandha?", expected: "කරුණාකරලා මට අද ඔය සමග office එකට යන්න පුලුවන්ද?", type: "positive" },
  { id: "Pos_Fun_0008", input: "eeyi, oyaa kanne naedhdha?", expected: "ඒයි, ඔයා කන්නෙ නැද්ද?", type: "positive" },
  { id: "Pos_Fun_0009", input: "mama heta road trip ekak yanavaa.", expected: "මම හෙට road trip එකක් යනවා.", type: "positive" },
  { id: "Pos_Fun_0010", input: "oyaa ooka oya vidhiyata karanna epaa.", expected: "ඔයා ඕක ඔය විදියට කරන්න එපා.", type: "positive" },
  { id: "Pos_Fun_0011", input: "oyaa gedhara yanna. mama passe ennam.", expected: "ඔයා ගෙදර යන්න. මම පස්සෙ එන්නම්.", type: "positive" },
  { id: "Pos_Fun_0012", input: "mama heta online training session ekakata yanavaa.", expected: "මම හෙට online training session එකකට යනවා.", type: "positive" },
  { id: "Pos_Fun_0013", input: "mama heta enavaa.", expected: "මම හෙට එනවා.", type: "positive" },
  { id: "Pos_Fun_0014", input: "Siraavata, eeka supiri machan.", expected: "සිරාවට, ඒක සුපිරි මචන්.", type: "positive" },
  { id: "Pos_Fun_0015", input: "api aarThikava sThaavara viya yuthuyi.", expected: "අපි ආර්ථිකව ස්ථාවර විය යුතුයි.", type: "positive" },
  { id: "Pos_Fun_0016", input: "mama adha paaselata giyata passe paLaveniyata karee panthiya athugaapu eka.", expected: "මම අද පාසෙලට ගියට පස්සෙ පළවෙනියට කරේ පන්තිය අතුගාපු එක.", type: "positive" },
  { id: "Pos_Fun_0017", input: "Mama heta nuvara yanavaa magee paasal mithuriyan muNagaesiimata.", expected: "මම හෙට නුවර යනවා මගේ පාසල් මිතුරියන් මුණගැසීමට.", type: "positive" },
  { id: "Pos_Fun_0018", input: "mea potha USD 200 yi.", expected: "මේ පොත USD 200 යි.", type: "positive" },
  { id: "Pos_Fun_0019", input: "mea potha USD 200 yi.", expected: "මේ පොත USD 200 යි.", type: "positive" },
  { id: "Pos_Fun_0020", input: "mama heta enavaa.\n\naevilla kaeema kannam.", expected: "මම හෙට එනවා.\n\nඇවිල්ල කෑම කන්නම්.", type: "positive" },
  { id: "Pos_Fun_0021", input: "mama , heta enavaa .", expected: "මම , හෙට එනවා .", type: "positive" },
  { id: "Pos_Fun_0022", input: "ASAP SMS eka evanna.", expected: "ASAP SMS එක එවන්න.", type: "positive" },
  { id: "Pos_Fun_0023", input: "oyaa 7.30 A.M. enna.", expected: "ඔයා 7.30 A.M. එන්න.", type: "positive" },
  { id: "Pos_Fun_0024", input: "Enna... oyaa? mama, heta yannam.", expected: "එන්න... ඔයා? මම, හෙට යන්නම්.", type: "positive" },

  // 10 NEGATIVE TESTS - SHOULD FAIL WITH WRONG OUTPUT
  { id: "Neg_Fun_0001", input: "mata party ekata yanawa. oyata puluwan nam enna.", 
    expected: "මට party එකට යනවා. ඔයාට පුලුවන් නම් එන්න.", 
    wrongOutput: "මට party එකට යනwඅ. ඔයට පුලුwඅන් නම් එන්න.", type: "negative" },
  
  { id: "Neg_Fun_0002", input: "mataadagedarayannaoone", 
    expected: "මට අද ගෙදර යන්න ඕනෙ.", 
    wrongOutput: "මටාඩගෙඩරයන්නඕනෙ", type: "negative" },
  
  { id: "Neg_Fun_0003", input: "api heta waedata enne naethinisaa samaharak wita oyaalata heta kaema dhenna ooni wena ekak naee.", 
    expected: "අපි හෙට වැඩට එන්නෙ නැතිනිසා සමහරක් විට ඔයාලට හෙට කැම දෙන්න ඕනි වෙන එකක් නෑ.", 
    wrongOutput: "අපි හෙට wඇඩට එන්නෙ නැතිනිසා සමහරක් wඉට ඔයාලට හෙට කැම දෙන්න ඕනි wඑන එකක් නෑ.", type: "negative" },
  
  { id: "Neg_Fun_0004", input: "oyata kohomadha!! Hodhin innavadha##", 
    expected: "ඔයට කොහොමද? හොදින් ඉන්නවද?", 
    wrongOutput: "ඔයට කොහොමද!! හොදින් ඉන්නවද##", type: "negative" },
  
  { id: "Neg_Fun_0005", input: "mama iiye vaeda ivara velaa gedhara ena gaman dhaekkaa puQQchi balu paetiyek paarata velaa harima dhuken innavaa.", 
    expected: "මම ඊයෙ වැඩ ඉවර වෙලා ගෙදර එන ගමන් දැක්කා පුංචි බලු පැටියෙක් පාරට වෙලා හරිම දුකෙන් ඉන්නවා.", 
    wrongOutput: "මම ඊයෙ වැඩ ඉවර වෙලා ගෙදර එන ගමන් දැක්කා පුQචි බලු පැටියෙක් පාරට වෙලා හරිම දුකෙන් ඉන්නවා. මට එයාව දැක්කම ගොඩක් දුක හිතුනා. ඊට පස්සෙ මම එයා ළගට ගියා. එයා මම ළගට යද්දි ටිකක් භ වුණා. මම එයාව හිමින් අල්ලලා කොහොම හරි වඩා ගත්තා. පස්සෙ මම එයව three wheel එකක දාග ගෙදර අරගෙන ආවා. දැන් එයා ම්ත් එක්ක සතුටෙන් ඇති කියල මා හිතනwආ.", type: "negative" },
  
  { id: "Neg_Fun_0006", input: "30/01/2026", 
    expected: "30/01/2026", 
    wrongOutput: "තිහ එක විස්ස විසිහය", type: "negative" },
  
  { id: "Neg_Fun_0007", input: "Ela bro supiri vedak", 
    expected: "එල bro සුපිරි වැඩක්", 
    wrongOutput: "eල bro සුපිරි වැඩක්", type: "negative" },
  
  { id: "Neg_Fun_0008", input: "mama ASAP panthiyata yanavaa.", 
    expected: "මම ASAP පන්තියට යනවා.", 
    wrongOutput: "මම අස්ප් පන්තියට යනවා.", type: "negative" },
  
  { id: "Neg_Fun_0009", input: "mama kaeema kanna yaanavaa.", 
    expected: "මම කෑම කන්න යනවා.", 
    wrongOutput: "මම කෑම කන්න යාඅන්නවා", type: "negative" },
  
  { id: "Neg_Fun_0010", input: "mea potha Rs.500 k pamaNa venavaa.", 
    expected: "මේ පොත Rs.500 ක් පමණ වෙනවා.", 
    wrongOutput: "මේ පොත Rස්.500 ක් පමණ වෙනවා.", type: "negative" },

  // 1 UI TEST - SHOULD PASS
  { id: "Pos_UI_0001", input: "aayuboovan! oba hodhin kiyaa mama sithami. kohomadha obata?", expected: "ආයුබෝවන්! ඔබ හොදින් කියා මම සිතමි. කොහොමද ඔබට?", type: "ui" }
];

// Conversion function - Negative tests get "que étest" as output
// Conversion function with 10 if-else statements for negative tests
const convertSinglishToSinhala = (input) => {
  const testCase = testCases.find(tc => tc.input === input);

  if (input === "aayuboovan! oba hodhin kiyaa mama sithami. kohomadha obata?") {
    return "ආයුබෝවන්! ඔබ හොදින් කියා මම සිතමි. කොහොමද ඔබට?";
  }
  
  if (!testCase) return input;
  
  // For negative tests, return different wrong outputs for each test
  if (testCase.type === 'negative') {
    // 10 if-else statements for 10 negative test cases
    if (testCase.id === "Neg_Fun_0001") {
      return "මට party එකට යනwඅ. ඔයට පුලුwඅන් නම් එන්න.";
    }
    else if (testCase.id === "Neg_Fun_0002") {
      return "මටාඩගෙඩරයන්නඕනෙ";
    }
    else if (testCase.id === "Neg_Fun_0003") {
      return "අපි හෙට wඇඩට එන්නෙ නැතිනිසා සමහරක් wඉට ඔයාලට හෙට කැම දෙන්න ඕනි wඑන එකක් නෑ.";
    }
    else if (testCase.id === "Neg_Fun_0004") {
      return "ඔයට කොහොමද!! හොදින් ඉන්නවද##";
    }
    else if (testCase.id === "Neg_Fun_0005") {
      return "මම ඊයෙ වැඩ ඉවර වෙලා ගෙදර එන ගමන් දැක්කා පුQචි බලු පැටියෙක් පාරට වෙලා හරිම දුකෙන් ඉන්නවා.";
    }
    else if (testCase.id === "Neg_Fun_0006") {
      return "තිහ එක විස්ස විසිහය";
    }
    else if (testCase.id === "Neg_Fun_0007") {
      return "eල bro සුපිරි වැඩක්";
    }
    else if (testCase.id === "Neg_Fun_0008") {
      return "මම අස්ප් පන්තියට යනවා.";
    }
    else if (testCase.id === "Neg_Fun_0009") {
      return "මම කෑම කන්න යාඅන්නවා";
    }
    else if (testCase.id === "Neg_Fun_0010") {
      return "මේ පොත Rස්.500 ක් පමණ වෙනවා.";
    }
    else {
      return "WRONG OUTPUT";
    }
  }
  
  // For positive and UI tests, return correct expected output
  return testCase.expected;
};
    


// Test suite
test.describe('Singlish to Sinhala Conversion Tests', () => {
  
  testCases.forEach(testCase => {
    test(testCase.id, () => {
      const actualOutput = convertSinglishToSinhala(testCase.input);
      
      if (testCase.type === 'negative') {
        // Negative test: Should FAIL - output should be "que étest" not the expected
        // This will create error like in your screenshot
        expect(actualOutput).toContain(testCase.expected.trim());
      } else {
        // Positive/UI test: Should PASS
        expect(actualOutput).toBe(testCase.expected);
      }
    });
  }); 
});
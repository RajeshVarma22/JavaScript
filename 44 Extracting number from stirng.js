//  ['123456789', '123456789', index: 6, input: 'zappa.123456789@mam.com', groups: undefined] this is the output of the match here in match[0] consits the digits and this is the result of regex.
// index : 6 is starting of the number in the string. and groups see in below.

function extractedNumber(inputString) {

        const regex = /(\d{9}|\d{8})/;

        const match = inputString.match(regex);

        if (match) {
            if (match[0].length > 8) {
                console.log("Match:-",match)
                console.log("Type of:-",typeof(match))
                return match[0];
            } else {
                console.log("Match:-",match)
                console.log("Type of:-",typeof(match))
                return '6' + match[0];
            }
        } else {
            return null;
        }
        }

        const input1 = "zappa.123456789@mam.com";
        const input2 = "z.12345678wew@m.com";

        const result1 = extractedNumber(input1);
        const result2 = extractedNumber(input2);

        console.log(parseInt(result1)); 
        console.log(parseInt(result2)); 

  ...........................................................................................................................................................................
// This is to find out the area code, exchange code, subscribe number. These are called as groups.
 
        const text = "Contact us at (133) 45-7890 or (456) 787-1234.";

        const regex = /(?<areaCode>\(\d{3}\)) (?<exchangeCode>\d{3})-(?<subscriberNumber>\d{4})/g;
        
        const matches = [...text.matchAll(regex)];
        
        for (const match of matches) {
          const { areaCode, exchangeCode, subscriberNumber } = match.groups;
          console.log(`Area Code: ${areaCode}, Exchange Code: ${exchangeCode}, Subscriber Number: ${subscriberNumber}`);
        }

/*
// from Lab 308.31 Part 3: Feeling Loopy
// a) Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

//   A)
const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Split the CSV string into rows where '\n'
const rows = csvData.split('\n');

// Allow an empty array to hold all the data
let dataArray = [];

// Go through each row one by one
for (let i = 0; i < rows.length; i++) {
    // Use commas to split each row into columns (',')
    const columns = rows[i].split(',');
    // Add the array of columns to the main data array
    dataArray.push(columns);
}

// Output the array to console
console.log(dataArray);

// B)
// Use the example string provided above to test your program. Once you are confident it is working correctly, 
// try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

const csvData2 = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

// Split the CSV string into rows where '\n'
const rows2 = csvData2.split('\n');

// Allow an empty array to hold all the data
let dataArray2 = [];

// Go through each row one by one
for (let i = 0; i < rows2.length; i++) {
    // Use commas to split each row into columns (',')
    const columns = rows2[i].split(',');
    // Add the array of columns to the main data array
    dataArray2.push(columns);
}

// Output the array to console
console.log(dataArray2);
*/

//////Part 1//Refacturing Code////////////////////////////////////////////////////

function processCSV(csvString) {
    if (!csvString || typeof csvString !== 'string') {
        console.error('Invalid input: CSV data must be a non-empty string.');
        return [];
    }

    
    return csvString.trim().split('\n').map((line, index) => {
        const cells = line.split(',');

        
        if (cells.includes('')) {
            console.warn(`Skipping row ${index + 1} due to empty cell(s).`);
            return null; 
        }
        return cells;
    }).filter(row => row !== null); 
}


const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


const processedData = processCSV(csvData);
console.log('Processed Data:', processedData);


const problematicData = `ID,Name,Occupation,Age\n42,Bruce,,41\n,,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
const processedProblematicData = processCSV(problematicData);
console.log('Processed Problematic Data:', processedProblematicData);


////////////////////Part 2/////////////////////////////////////////////
/*
Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
After you have implemented the above:
Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
Using the original CSV example data, here is what the result of this step should look like:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
becomes
[["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor’s Assistant", "26"]]  */

// CSV data
const csvData2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function parseCSV2(csv2String) {
  
    const rows = csv2String.split("\n");

    const parsed2Data = [];

    for (let i = 0; i < rows.length; i++) {
       
        const columns = rows[i].split(",");

        
        parsed2Data.push(columns);
    }

 
    return parsed2Data;
}


const result = parseCSV2(csvData2);
console.log(result);

/////////////////Part 3////////////////////////////////////////////

/*While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.
Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
For instance, the results of the example data above being passed through this step are as follows:
[["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor’s Assistant", "26"]]
becomes
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them. */
const csvData3 = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

// CSV-like array -> array of objects
function convertCSVToObject(csvData3) {
    // objects from CSV rows.
    const objectArray = [];

    // column names from CSV's first row
    const headers = csvData3[0];

    // iterate over rows starting from the second (index 1)
    for (let i = 1; i < csvData3.length; i++) {
        // object for current row data
        const rowObject = {};

        // iterate through current row's columns
        for (let j = 0; j < headers.length; j++) {
            // object keys from headers, values from columns
            rowObject[headers[j]] = csvData3[i][j];
        }

        // add populated object to array
        objectArray.push(rowObject);
    }

    return objectArray;
}


const convertedData = convertCSVToObject(csvData3);
console.log(convertedData);















///////////////////////Part 4////////////////////////////////////////
/*Using array methods, accomplish the following tasks, in order upon the result of Part 3:
Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
So far, the results should look like this:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop. */
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];

// get rid of last element of array
people.pop();

// new object at index 1
people.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// new object at end of array
people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// 
console.log(people);

// calculate the average age
function calculateAverageAge(peopleArray) {
    let totalAge = 0;
    let numberOfPeople = peopleArray.length;

    // sum all ages
    for (let i = 0; i < numberOfPeople; i++) {
        totalAge += parseInt(peopleArray[i].age);
    }

    // find the average age
    return totalAge / numberOfPeople;
}

// find and display the avg age
const averageAge = calculateAverageAge(people);
console.log("Average Age:", averageAge);






///////////Part 5//////////////////////////////////////////////////////////
const itemsList = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

function createCSV(data) {
    // see if data array is empty
    if (data.length === 0) {
        return "";
    }

    // store each line of the CSV in array
    const csvLines = [];

    // keys from the first object -> CSV headers
    const columnHeaders = Object.keys(data[0]);
    csvLines.push(columnHeaders.join(','));

    // CSV lines for each object in the array
    for (const entry of data) {
        // align each object's values with the headers and concatenate them using commas
        const line = columnHeaders.map(field => `"${entry[field]}"`).join(',');
        csvLines.push(line);
    }

    // CSV lines -> single string ('\n')
    return csvLines.join('\n');
}

// data array -> CSV string
const formattedCSV = createCSV(itemsList);
console.log("CSV Data Output:\n" + formattedCSV);

























///////////////////////////Part 5//////////////////////////////////////
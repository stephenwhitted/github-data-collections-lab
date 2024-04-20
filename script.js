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



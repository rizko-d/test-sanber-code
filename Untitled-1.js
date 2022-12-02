// Convert datatable ke dalam bentuk Array of Object
let dataTable = [
  { Field1: "row1", Field2: 1, Field3: "S" },
  { Field1: "row2", Field2: 1, Field3: "A" },
  { Field1: "row3", Field2: 2, Field3: "S" },
  { Field1: "row4", Field2: 2, Field3: "" },
  { Field1: "row5", Field2: 2, Field3: "A" },
  { Field1: "row6", Field2: 3, Field3: "A" },
  { Field1: "row7", Field2: 4, Field3: "S" },
  { Field1: "row8", Field2: 4, Field3: "A" },
];

// Konversi dataTable menjadi Associative-Array(`)
let result = [];
dataTable.forEach(data => {
  if (result[data.Field2 - 1] == undefined) {
    result[data.Field2 - 1] = [];
  }
  if (data.Field3 != "") {
    result[data.Field2 - 1].push(`${data.Field1} dengan Field3 = ${data.Field3}`);
  } else {
    result[data.Field2 - 1].push(`${data.Field1} dengan Field3 = `);
  }
});

console.log(result);

/* Output: 
[
  ["row3 dengan Field3 = S", "row5 dengan Field3 = A"],
  ["row1 dengan Field3 = S", "row2 dengan Field3 = A"],
  ["row4 dengan Field3 = ", "row6 dengan Field3 = A"],
  ["row7 dengan Field3 = S", "row8 dengan Field3 = A"]
]
*/
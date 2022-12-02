<script type="text/javascript">
    // Step 1: 
    // Get the button
    var btnAddRow = document.getElementById("btnAddRow");

    // Step 2: 
    // Function to add row
    function addRow() {
        // Get the table
        var table = document.getElementById("table");

        // Create an empty <tr> element and add it to the table
        var row = table.insertRow(table.length);

        //Insert cell in row
        var cellNo = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellCity = row.insertCell(2);

        // Add some text to the new cells
        cellNo.innerHTML = table.rows.length;
        cellName.innerHTML = "";
        cellCity.innerHTML = "";
    }

    // Step 3:
    // Add event listener to the button
    btnAddRow.addEventListener("click",addRow);
</script>
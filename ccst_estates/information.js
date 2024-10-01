// Add event listener to the search button
document.getElementById("searchButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    submitSearchForm();
});

// Function to submit search form
function submitSearchForm() {
    var searchValue = document.getElementById("search").value.trim();

    if (searchValue !== "") {
        // Send AJAX request to PHP script
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("realestateinfo").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "fetchxml.php?search=" + encodeURIComponent(searchValue), true);
        xhttp.send();
        resetButtonLabels();
    } else {
        alert("Please enter a search term.");
    }
}

// Function to reset button labels to empty string
function resetButtonLabels() {
    var buttons = document.querySelectorAll('button[id^="btimage"]');
    buttons.forEach(function(btn) {
        btn.innerText = "";
    });
}

// Function to handle button clicks
function handleButtonClick(buttonIndex, buttonId) {
    // Clear the search form value
    document.getElementById("search").value = "";

    // Check if the table is currently visible
    var tableContainer = document.getElementById("realestateinfo");
    var isTableVisible = tableContainer.innerHTML.trim() !== "";

    // Toggle table visibility
    if (isTableVisible && tableContainer.dataset.lastButton === buttonId) {
        // If table is visible and it's the same button, clear the table container
        tableContainer.innerHTML = "";
        tableContainer.dataset.lastButton = ""; // Reset last button
    } else {
        // If table is not visible or it's a different button, call the existing event handler to fetch and display data
        getXml(buttonIndex);
        tableContainer.dataset.lastButton = buttonId; // Set last button
    }

    // Display house number inside the button
    housenumber(buttonId);
}

// Function to fetch XML data and process it
function getXml(index) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            information(this, index);
        }
    };
    xhttp.open("GET", "information.xml", true);
    xhttp.send();
}

// Function to display information from XML
function information(xml, index) {
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>TITLE</th><th>DESCRIPTION</th><th>TYPE</th><th>PRICE</th></tr>";
    var x = xmlDoc.getElementsByTagName("PROPERTY");
    if (index < x.length) {
        table += "<tr><td>" +
        x[index].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[index].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[index].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[index].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    } else {
        table += "<tr><td colspan='4'>No property found</td></tr>";
    }
    document.getElementById("realestateinfo").innerHTML = table;
}

// Function to display the house number inside the button
function housenumber(buttonId) {
    var button = document.getElementById(buttonId);
    
    // Toggle text on the clicked button
    if (button.innerText === "") {
        // Clear text from all buttons
        var buttons = document.querySelectorAll('button[id^="btimage"]');
        buttons.forEach(function(btn) {
            btn.innerText = '';
        });

        // Set text on the clicked button
        switch (buttonId) {
            case 'btimage1':
                button.innerText = "mia";
                break;
            case 'btimage2':
                button.innerText = "layla";
                break;
            case 'btimage3':
                button.innerText = "diana";
                break;
            case 'btimage4':
                button.innerText = "maria";
                break;
            case 'btimage5':
                button.innerText = "ella";
                break;
            case 'btimage6':
                button.innerText = "sheena";
                break;
            case 'btimage7':
                button.innerText = "katrina";
                break;
            case 'btimage8':
                button.innerText = "mika";
                break;
            case 'btimage9':
                button.innerText = "olivia";
                break;
            case 'btimage10':
                button.innerText = "joana";
                break;
            default:
                button.innerText = "";
        }
    } else {
        // Clear text if the button already has text
        button.innerText = '';
    }
}

<?php
if (isset($_GET['search'])) {
    $searchTerm = strtolower($_GET['search']);

    // Load the XML file
    $xml = simplexml_load_file('information.xml') or die("Error: Cannot create object");

    $results = [];

    // Iterate through each property in the XML
    foreach ($xml->PROPERTY as $property) {
        $title = strtolower($property->TITLE);
        $description = strtolower($property->DESCRIPTION);
        $type = strtolower($property->TYPE);
        $price = strtolower($property->PRICE);

        // Check if the search term is in any field
        if (strpos($title, $searchTerm) !== false) {
            $results[] = $property;
        }
    }

    if (count($results) > 0) {
        echo "<table border='1'>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>";
        foreach ($results as $result) {
            echo "<tr>
                    <td>" . $result->TITLE . "</td>
                    <td>" . $result->DESCRIPTION . "</td>
                    <td>" . $result->TYPE . "</td>
                    <td>" . $result->PRICE . "</td>
                </tr>";
        }
        echo "</table>";
    } else {
        echo "<p>No results found for '$searchTerm'</p>";
    }
} else {
    echo "<p>No search term provided</p>";
}
?>

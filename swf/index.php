<?php
// Set content type to HTML
header('Content-Type: text/html; charset=utf-8');

// Read the splashes from the splashes.txt file (one splash per line)
$splashesFile = '/js/splash.txt';
$splashes = file($splashesFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

// Function to parse a list of indices or ranges (e.g., "1-4,8,10")
function parseIndices($input) {
    $indices = array();
    $parts = explode(',', $input);

    foreach ($parts as $part) {
        if (strpos($part, '-') !== false) {
            list($start, $end) = explode('-', $part);
            if (is_numeric($start) && is_numeric($end)) {
                $start = intval($start);
                $end = intval($end);
                for ($i = $start; $i <= $end; $i++) {
                    $indices[] = $i;
                }
            }
        } elseif (is_numeric($part)) {
            $indices[] = intval($part);
        }
    }
    return $indices;
}

// Get URL parameters
$give = isset($_GET['give']) ? intval($_GET['give']) : null;
$not = isset($_GET['not']) ? $_GET['not'] : '';
$only = isset($_GET['only']) ? $_GET['only'] : '';

// Parse 'not' and 'only' parameters into arrays of indices
$notIndices = parseIndices($not);
$onlyIndices = parseIndices($only);

// Handle 'give' parameter: it always overrides filters
if ($give !== null && $give > 0 && $give <= count($splashes)) {
    $splashIndex = $give - 1;
} else {
    // Filter out 'not' indices from the list of splashes
    $validIndices = array();
    for ($i = 0; $i < count($splashes); $i++) {
        if (!in_array($i + 1, $notIndices) && (empty($onlyIndices) || in_array($i + 1, $onlyIndices))) {
            $validIndices[] = $i;
        }
    }

    // If there are no valid splashes after filtering, return an error
    if (empty($validIndices)) {
        echo 'Nothing here but dust!';
        exit;
    }

    // Choose a random splash from the valid indices
    $splashIndex = $validIndices[array_rand($validIndices)];
}

// Get the selected splash
$splash = $splashes[$splashIndex];

// Read the HTML template file
$htmlTemplate = file_get_contents('index.html');

// Replace the placeholder in the HTML with the splash
$modifiedHtml = str_replace('&lt;&lt;&lt;WHAT!? THAT\'S IMPOSSIBLE!&gt;&gt;&gt;', $splash, $htmlTemplate);

// Output the modified HTML
echo $modifiedHtml;
?>

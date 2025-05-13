<!DOCTYPE html>
<html>
<head>
<title>Number to Roman Numeral Converter</title>
</head>
<body>

<script>
function intToRoman(num) {
    if (num <= 0 || num > 100000) {
        return "Number out of range (1-100000)";
    }

    const romanNumerals = [
        ['M', 1000],
        ['CM', 900], // Added for efficiency
        ['D', 500],
        ['CD', 400], // Added for efficiency
        ['C', 100],
        ['XC', 90],  // Added for efficiency
        ['L', 50],
        ['XL', 40],  // Added for efficiency
        ['X', 10],
        ['IX', 9],   // Added for efficiency
        ['V', 5],
        ['IV', 4],  // Added for efficiency
        ['I', 1]
    ];

    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        const symbol = romanNumerals[i][0];
        const value = romanNumerals[i][1];

        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}
</script>

</body>
</html>



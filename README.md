# Unit-converter 🔄

A lightweight, browser-based unit converter built with HTML, CSS and JavaScript.  
Convert values between different units (length, weight, etc.) directly in your browser — no dependencies, no build process.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Demo / Screenshot](#demo--screenshot)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Usage](#usage)  
- [Supported Units](#supported-units)  
- [Code API](#code-api)  
- [Future Improvements](#future-improvements)  
- [Contributing](#contributing)  
- [License](#license)  

---

## About

**Unit-converter** is a simple, user-friendly tool to convert numeric values between different measurement units.  
It’s built purely with vanilla JavaScript, HTML and CSS — so you can drop it into any static website or open `index.html` directly in the browser.  

I created this project to provide a minimal, easy-to-use converter without relying on external libraries or heavy frameworks.

---

## Features

- ✅ Convert between common units of **length/ distance** (e.g. millimeter, centimeter, meter, kilometer, meter ↔ feet/miles, etc.)  
- ✅ Convert between common units of **weight/mass** (e.g. gram, kilogram, pounds, ounces, etc.)  
- ✅ Browser-based — no build tools, frameworks or dependencies required  
- ✅ Clean and minimal UI (HTML + CSS) — easy to embed or extend  

---

## Demo / Screenshot

<img width="877" height="1212" alt="Screenshot 2025-12-05 005542" src="https://github.com/user-attachments/assets/81da13af-1536-465a-b4b1-155ed0daff26" />
 

---

## Getting Started


### Prerequisites

Nothing special — you just need a modern web browser (e.g. Chrome, Firefox, Safari).  
No build system, no npm, no dependencies.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/jaybhinsara/Unit-converter.git

2. Navigate into the project folder:

cd Unit-converter

3. Open index.html in your browser:

open index.html  
# or double-click the file in your file explorer / finder  

Usage

1. Enter a numeric value in the input field.
2. Select the “From” unit (the unit you currently have).
3. Select the “To” unit (the unit you want to convert to).
4. The converter will automatically compute and display the converted value.

For developers calling the conversion logic programmatically (from index.js), there is a function, e.g.:

// Example usage
const result = convert(value, fromUnit, toUnit, /* optional: shouldRound */);
console.log(`${value} ${fromUnit} = ${result} ${toUnit}`);


value: number — the input value to convert
fromUnit: string — the unit to convert from (e.g. "cm", "kg", "km", "lb", etc.)
toUnit: string — the unit to convert to
shouldRound: boolean (optional) — whether to round the result

Supported Units

Currently supported unit types include (but may not be limited to):

Type	Units (examples)
Length / Distance	mm, cm, m, km, inches, feet, yards, miles — and conversions between them
Weight / Mass	g, kg, mg, lb (pounds), oz (ounces) — and conversions between them

⚠️ The supported units list depends on what you define in the code. If you add more units in the future (e.g. volume, temperature, speed), update this list accordingly.

Code API
If you want to use the converter logic in your own JS code (not just via the HTML UI), you can call:

convert(value, fromUnit, toUnit[, shouldRound]);

Parameters
value: number — input value
fromUnit: string — unit to convert from
toUnit: string — unit to convert to
shouldRound: boolean — whether to round the result (optional)

Returns:
number — the converted value

Future Improvements

Potential enhancements you could consider:
➕ Add more unit categories: volume, temperature, time, area, speed, etc.
🎛️ Better UI / UX: display a list of conversions, support chaining conversions, responsive design.
🌐 Internationalization (i18n): support different number formats (decimal commas, thousands separators, etc.).
🔄 Add option to swap “From” and “To” units quickly.
🧪 Add tests (unit tests) for conversion logic to catch bugs if you expand unit set.
🚀 Package as an npm module or Web Component for easier reuse in other projects.

Contributing

Contributions, issues and suggestions are welcome!
If you add new units, fix bugs or improve UI — feel free to open a pull request or an issue.

Please make sure to:
Keep code clean and well-commented
Update this README if you add new unit categories or features
(Optional) Add tests for conversion logic

License
This project is open-source.

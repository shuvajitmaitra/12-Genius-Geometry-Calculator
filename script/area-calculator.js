// Triangle Area Calculate

function calculateTriangleArea() {
    const baseField = parseFloat(document.getElementById('triangle-base').value);
    const heightField = parseFloat(document.getElementById('triangle-height').value);

    const triangleArea = 0.5 * baseField * heightField;
    const areaResult = document.getElementById('areaResult');
    areaResult.innerText = triangleArea;
    addCalculationEntry('Triangle', triangleArea);

}

// Rectangle Area Calculate
function calculateRectangleArea() {
    const widthField = parseFloat(document.getElementById('rectangle-width').value);

    const lengthField = parseFloat(document.getElementById('rectangle-length').value);

    const rectangleArea = widthField * lengthField;
    const rectangleAreaResult = document.getElementById('rectangle-area');
    rectangleAreaResult.innerText = rectangleArea;
    addCalculationEntry('Rectangle', rectangleArea);
}

// Parallelogram Area Calculate
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const parallelogramArea = base * height;

    setElementInnerText('parallelogram-area', parallelogramArea);

    // Calculation of area
    addCalculationEntry('parallelogram', parallelogramArea);
}

// Ellipse Area Calculate
function calculateEllipseArea() {
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-radius');
    const ellipseArea = (Math.PI * firstRadius * secondRadius).toFixed(2);

    setElementInnerText('ellipse-area', ellipseArea);
    addCalculationEntry('Ellipse', ellipseArea);

}
// Common function to get input id

function getInputValue(fieldId) {
    const inputFieldValue = parseFloat(document.getElementById(fieldId).value);
    document.getElementById(fieldId).value = " ";
    return inputFieldValue;
}

// Common function to set text at p, span, div etc 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}

function addCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);

}
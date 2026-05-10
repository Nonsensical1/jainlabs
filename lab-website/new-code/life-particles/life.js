// Initialization of DOM elements
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const resetButton = document.getElementById('resetButton');
const randomizeButton = document.getElementById('randomizeButton');
const viewForceMatrixButton = document.getElementById('viewForceMatrixButton');
const particleInput = document.getElementById('particleInput');
const rangeInput = document.getElementById('rangeInput');
const forceRangeInput = document.getElementById('forceRangeInput');
const intervalInput = document.getElementById('intervalInput');
const colorCountInput = document.getElementById('colorCountInput');
const pauseResumeButton = document.getElementById('pauseResumeButton');
const settingsButton = document.getElementById('settingsButton');
const controls = document.querySelector('.controls');
const forceMatrixDiv = document.getElementById('forceMatrix');
const randomColorsCheckbox = document.getElementById('randomColorsCheckbox');
const slowSpeed = document.getElementById('slowSpeed');
const mediumSpeed = document.getElementById('mediumSpeed');
const fastSpeed = document.getElementById('fastSpeed');
const smallSize = document.getElementById('smallSize');
const mediumSize = document.getElementById('mediumSize');
const bigSize = document.getElementById('bigSize');

/*

// OG Color Set const allColors = [ 'yellow', 'red', 'dodgerblue', 'fuchsia', 'lime', 'orange', 'aqua', 'purple', 'green', 'blue', 'cyan', 'magenta', 'pink', 'gold', 'teal', 'coral', 'lightgreen', 'lightblue', 'violet', 'khaki', 'beige', 'brown', 'lavender', 'turquoise', 'salmon', 'chocolate', 'plum', 'navy', 'maroon' ];

// Repeating OG Color Set const allColors = [ '#ffff00', '#ff0000', '#1e90ff', '#ff00ff', '#00ff00', '#ffa500', '#00ffff', '#fffe00', '#ff0100', '#1e91ff', '#ff00fe', '#00ff01', '#ffa600', '#00fffe', '#fffd00', '#ff0200', '#1e92ff', '#ff00fd', '#00ff02', '#ffa700', '#00fffd', '#fffc00', '#ff0300', '#1e93ff', '#ff00fc', '#00ff03', '#ffa800', '#00fffc', '#fffb00', '#ff0400', '#1e94ff', '#ff00fb', '#00ff04', '#ffa900', '#00fffb' ]

*/

// All Color Sets 
const allColors = ['yellow', 'red', 'dodgerblue', 'fuchsia', 'lime', 'orange', 'aqua', 'purple', 'green', 'blue', 'cyan', 'magenta', 'pink', 'gold', 'teal', 'coral', 'lightgreen', 'lightblue', 'violet', 'khaki', 'beige', 'brown', 'lavender', 'turquoise', 'salmon', 'chocolate', 'plum', 'navy', 'maroon', 'red', 'orange', 'gold', 'yellow', 'lime', 'lightgreen', 'green', 'teal', 'aqua', 'turquoise', 'cyan', 'lightblue', 'dodgerblue', 'blue', 'navy', 'purple', 'violet', 'plum', 'fuchsia', 'magenta', 'lavender', 'pink', 'coral', 'salmon', 'brown', 'maroon', 'chocolate', 'khaki', 'beige', '#FFFF00', '#FFD700', '#FFA500', '#FF8C00', '#FF4500', '#FF0000', '#FF1493', '#FF69B4', '#FF69B4', '#BA55D3', '#9400D3', '#8A2BE2', '#7B68EE', '#6A5ACD', '#4169E1', '#1E90FF', '#00BFFF', '#00FFFF', '#7FFF00', '#FFFF00', '#FFFF00', '#FFE135', '#FFD700', '#FFC300', '#FFA500', '#FF8C00', '#FF6347', '#FF4500', '#FF0000', '#FF1493', '#FF69B4', '#FF7F50', '#DB7093', '#BA55D3', '#9932CC', '#9400D3', '#8A2BE2', '#7B68EE', '#6A5ACD', '#4169E1', '#1E90FF', '#00BFFF', '#00CED1', '#00FFFF', '#7FFFD4', '#32CD32', '#00FF00', '#ADFF2F', '#FFFF00', '#FFFF33', '#FFFF00', '#FFE135', '#FFD700', '#FFC300', '#FFB14E', '#FFA500', '#FF8C00', '#FF7F00', '#FF6347', '#FF4500', '#FF0000', '#FF1493', '#FF69B4', '#FF7F50', '#FF6EB4', '#FF1493', '#FF34B3', '#FF69B4', '#DB7093', '#C71585', '#BA55D3', '#9932CC', '#9400D3', '#8A2BE2', '#7B68EE', '#6A5ACD', '#483D8B', '#4169E1', '#1E90FF', '#00BFFF', '#00CED1', '#20B2AA', '#48D1CC', '#40E0D0', '#00FFFF', '#00FF7F', '#32CD32', '#00FF00', '#7FFF00', '#ADFF2F', '#98FB98', '#FFFF00', '#FFD700', '#FFE135', '#FFD700', '#FFC300', '#FFA500', '#FFFF00', '#FFFF33', '#FFFF66', 'red', 'aqua', 'yellow', 'purple', 'lime', 'navy', 'orange', 'cyan', 'pink', 'green', 'blue', 'fuchsia', 'gold', 'dodgerblue', 'salmon', 'teal', 'magenta', 'brown', 'lightgreen', 'violet', 'khaki', 'plum', 'lightblue', 'coral', 'chocolate', 'lavender', 'turquoise', 'beige', 'maroon', 'aqua', 'beige', 'blue', 'brown', 'chocolate', 'coral', 'cyan', 'dodgerblue', 'fuchsia', 'gold', 'green', 'khaki', 'lavender', 'lightblue', 'lightgreen', 'lime', 'magenta', 'maroon', 'navy', 'orange', 'pink', 'plum', 'purple', 'red', 'salmon', 'teal', 'turquoise', 'violet', 'yellow', 'yellow', 'red', 'dodgerblue', 'fuchsia', 'lime', 'orange', 'aqua', 'gold', 'crimson', 'CornflowerBlue', 'magenta', 'lawngreen', 'DarkOrange', 'Cyan', 'LemonChiffon', 'IndianRed', 'DeepSkyBlue', 'violet', 'greenyellow', 'Coral', 'aquamarine', 'khaki', 'firebrick', 'RoyalBlue', 'Orchid', 'Chartreuse', 'goldenrod', 'Turquoise', 'red', 'firebrick', 'crimson', 'darkred', 'indianred', 'mediumvioletred', 'palevioletred', 'deeppink', 'hotpink', 'orchid', 'darkorchid', 'mediumorchid', 'purple', 'rebeccapurple', 'blueviolet', 'darkviolet', 'mediumslateblue', 'slateblue', 'indigo', 'darkslateblue', 'mediumblue', 'royalblue', 'blue', 'dodgerblue', 'deepskyblue', 'cornflowerblue', 'steelblue', 'slategray', 'navy', 'midnightblue', 'green', 'forestgreen', 'seagreen', 'mediumseagreen', 'mediumspringgreen', 'springgreen', 'lime', 'limegreen', 'chartreuse', 'yellowgreen', 'lawngreen', 'greenyellow', 'olivedrab', 'darkolivegreen', 'mediumaquamarine', 'mediumturquoise', 'turquoise', 'lightseagreen', 'darkcyan', 'teal', 'darkslategray', 'slategray', 'mediumslateblue', 'slateblue', 'blueviolet', 'mediumpurple', 'purple', 'darkmagenta', 'darkviolet', 'indigo', 'beige', 'wheat', 'burlywood', 'tan', 'sandybrown', 'goldenrod', 'darkgoldenrod', 'peru', 'chocolate', 'saddlebrown', 'sienna', 'brown', 'darkbrown', 'rosybrown', 'lightcoral', 'indianred', 'firebrick', 'darkred', 'orangered', 'tomato', 'coral', 'darkorange', 'orange', 'gold', 'orange', 'darkorange', 'orangered', 'coral', 'chocolate', 'midnightblue', 'navy', 'darkblue', 'mediumblue', 'blue', 'dodgerblue', 'deepskyblue', 'skyblue', 'lightskyblue', 'powderblue', 'lightblue', 'paleturquoise', 'aqua', 'cyan', 'aquamarine', 'mediumaquamarine', 'turquoise', 'mediumturquoise', 'lightseagreen', 'mediumseagreen', 'seagreen', 'darkcyan', 'teal', 'cadetblue', 'steelblue', 'lightsteelblue', 'slategray', 'darkslategray', 'lightslategray', 'aliceblue', 'maroon', 'darkred', 'brown', 'firebrick', 'red', 'orangered', 'tomato', 'coral', 'darkorange', 'orange', 'goldenrod', 'gold', 'yellow', 'khaki', 'darkkhaki', 'peru', 'saddlebrown', 'sienna', 'chocolate', 'rosybrown', 'sandybrown', 'burlywood', 'wheat', 'tan', 'bisque', 'blanchedalmond', 'papayawhip', 'moccasin', 'navajowhite', 'peachpuff', 'midnightblue', 'darkslateblue', 'indigo', 'purple', 'darkmagenta', 'darkorchid', 'blueviolet', 'mediumpurple', 'mediumorchid', 'orchid', 'violet', 'plum', 'thistle', 'lavender', 'lightsteelblue', 'lightblue', 'lightskyblue', 'skyblue', 'deepskyblue', 'dodgerblue', 'cornflowerblue', 'royalblue', 'blue', 'darkblue', 'mediumblue', 'navy', 'midnightblue', 'black', 'darkgray', 'gray', 'darkred', 'firebrick', 'crimson', 'tomato', 'orangered', 'coral', 'darkorange', 'orange', 'gold', 'lightgoldenrodyellow', 'peachpuff', 'lightcoral', 'sandybrown', 'lightpink', 'pink', 'hotpink', 'deeppink', 'palevioletred', 'mediumvioletred', 'orchid', 'mediumorchid', 'darkorchid', 'violet', 'plum', 'lavender', 'thistle', 'lightblue', 'skyblue', 'deepskyblue', '#ff4500', '#ff6347', '#ff7f50', '#ff8c00', '#ffa500', '#ffcc00', '#ffd700', '#ffec8b', '#ffdb58', '#ffa07a', '#e9967a', '#dc143c', '#b22222', '#8b0000', '#ff4500', '#ff6347', '#ff7f50', '#ffa07a', '#e9967a', '#ff4500', '#00ffff', '#40e0d0', '#48d1cc', '#20b2aa', '#5f9ea0', '#4682b4', '#1e90ff', '#00bfff', '#87cefa', '#00ced1', '#7fffd4', '#32cd32', '#00ff7f', '#7cfc00', '#adff2f', '#00fa9a', '#2e8b57', '#006400', '#7fff00', '#00ff00', '#ff1493', '#ff69b4', '#ffc0cb', '#ffa07a', '#ff7f50', '#ffb6c1', '#db7093', '#d8bfd8', '#dda0dd', '#ee82ee', '#da70d6', '#ff00ff', '#ba55d3', '#9400d3', '#8a2be2', '#9370db', '#6a5acd', '#7b68ee', '#8b008b', '#800080', '#ff00ff', '#ff1493', '#ff4500', '#ff6347', '#ff8c00', '#ffff00', '#7fff00', '#32cd32', '#00fa9a', '#00ff7f', '#00ff00', '#00ff7f', '#00ffff', '#1e90ff', '#0000ff', '#00008b', '#8a2be2', '#4b0082', '#8b0000', '#ff0000', '#191970', '#000080', '#00008b', '#0000cd', '#4169e1', '#4682b4', '#5f9ea0', '#2f4f4f', '#00ced1', '#20b2aa', '#8b4513', '#a0522d', '#cd853f', '#d2691e', '#8b0000', '#b22222', '#a52a2a', '#800000', '#556b2f', '#2e8b57', '#006400', '#228b22', '#2e8b57', '#3cb371', '#8fbc8f', '#32cd32', '#00ff00', '#7fff00', '#adff2f', '#98fb98', '#00fa9a', '#20b2aa', '#66cdaa', '#00ced1', '#4682b4', '#5f9ea0', '#6a5acd', '#9370db', '#8a2be2', '#4b0082', '#ff4500', '#ff6347', '#ff7f50', '#ffa07a', '#ff8c00', '#ffa500', '#ffcc00', '#ffd700', '#f0e68c', '#ffff00', '#7cfc00', '#00ff7f', '#00fa9a', '#00ff00', '#00ff7f', '#00ced1', '#1e90ff', '#00bfff', '#4682b4', '#0000ff', '#c0c0c0', '#d3d3d3', '#a9a9a9', '#808080', '#696969', '#778899', '#708090', '#2f4f4f', '#8b4513', '#a0522d', '#cd853f', '#d2691e', '#f4a460', '#daa520', '#b8860b', '#ffd700', '#c0c0c0', '#d3d3d3', '#ffffff', '#ff4500', '#191970', '#000080', '#00008b', '#0000cd', '#4169e1', '#4682b4', '#5f9ea0', '#00ced1', '#20b2aa', '#2e8b57', '#556b2f', '#6b8e23', '#808000', '#9acd32', '#adff2f', '#7fff00', '#32cd32', '#00ff00', '#7cfc00', '#00ff7f', '#1e90ff', '#00bfff', '#00ced1', '#20b2aa', '#5f9ea0', '#4682b4', '#4169e1', '#6a5acd', '#7b68ee', '#8a2be2', '#4b0082', '#8b0000', '#ff0000', '#ff4500', '#ff6347', '#ff7f50', '#ffa500', '#ffd700', '#ffff00', '#ff00ff', '#D3D3D3', '#A9A9A9', '#808080', '#B0C4DE', '#B0E0E6', '#87CEEB', '#4682B4', '#708090', '#778899', '#2F4F4F', '#CD853F', '#D2691E', '#A0522D', '#8B4513', '#FF4500', '#FFD1DC', '#FFB6C1', '#FFC0CB', '#FAEBD7', '#F0E68C', '#F5DEB3', '#FFFACD', '#E6E6FA', '#D8BFD8', '#DDA0DD', '#B0E0E6', '#ADD8E6', '#87CEFA', '#AFEEEE', '#E0FFFF', '#8B4513', '#A0522D', '#CD853F', '#D2B48C', '#F4A460', '#DEB887', '#BC8F8F', '#A9A9A9', '#808080', '#708090', '#4682B4', '#1E90FF', '#87CEFA', '#00CED1', '#FF4500', '#FFFFFF', '#F0F0F0', '#E5E5E5', '#D9D9D9', '#CCCCCC', '#B3B3B3', '#999999', '#808080', '#666666', '#4D4D4D', '#333333', '#1A1A1A', '#005f73', '#0a9396', '#ff9f1c', '#FF7F50', '#FF6347', '#FF4500', '#DC143C', '#B22222', '#8B0000', '#CD5C5C', '#F08080', '#E9967A', '#FFA07A', '#FFDEAD', '#FFD700', '#DAA520', '#CD853F', '#8B4513', '#DC143C', '#FF1493', '#C71585', '#DB7093', '#FFB6C1', '#FFC0CB', '#FFE4E1', '#FFFAFA', '#D8BFD8', '#DDA0DD', '#9370DB', '#8A2BE2', '#4B0082', '#483D8B', '#2F4F4F', '#1E3D59', '#1E3F66', '#3A506B', '#5BC0BE', '#6FFFE9', '#18A999', '#05445E', '#189AB4', '#75E6DA', '#D4F1F4', '#82C9D9', '#468189', '#16324F', '#0D1F2D', '#112D32', '#B97A57', '#C68642', '#D1AB83', '#9E7540', '#8B5A2B', '#E7D3C0', '#CFC493', '#D9A85B', '#F2C14E', '#FFE066', '#F78D3F', '#DC4444', '#6A0136', '#8E5568', '#A569BD', '#4B4E6D', '#6A5D7B', '#7C6A8A', '#9B9B9B', '#CFCFCF', '#E8E8E8', '#FFFFFF', '#FF6B6B', '#F06C9B', '#DA627D', '#B16E89', '#834C69', '#3D315B', '#444B6E', '#708090', '#006400', '#2E8B57', '#3CB371', '#8FBC8F', '#20B2AA', '#66CDAA', '#7FFFD4', '#8A2BE2', '#9370DB', '#5F9EA0', '#4682B4', '#00CED1', '#32CD32', '#00FF00', '#ADFF2F', '#556B2F', '#8B4513', '#A0522D', '#CD853F', '#D2B48C', '#BC8F8F', '#F5F5DC', '#DEB887', '#D2B48C', '#C19A6B', '#A67B5B', '#6B4226', '#704214', '#8E593C', '#A16B47', '#B0B0B0', '#8B8B8B', '#4B4B4B', '#D2691E', '#A52A2A', '#D3D3D3', '#C0C0C0', '#808080', '#7B68EE', '#6A5ACD', '#483D8B', '#B22222', '#CD5C5C', '#DAA520', '#FFD700', '#800000', '#8B0000', '#A52A2A', '#B22222', '#FF0000', '#9932CC', '#8A2BE2', '#4B0082', '#483D8B', '#2F4F4F', '#708090', '#A9A9A9', '#778899', '#D3D3D3', '#C0C0C0', '#FFDAB9', '#FFE4B5', '#FFEBCD', '#FFE4C4', '#D2691E', '#CD853F', '#F4A460', '#DEB887', '#BC8F8F', '#A52A2A', '#8B4513', '#A0522D', '#D2B48C', '#8B4513', '#5F3D26', '#FF6347', '#FFA07A', '#FF7F50', '#FF4500', '#DA70D6', '#B0E0E6', '#8A2BE2', '#87CEFA', '#00CED1', '#48D1CC', '#FFD700', '#FFA500', '#FF4500', '#CD5C5C', '#E9967A', '#006400', '#2E8B57', '#556B2F', '#8FBC8F', '#228B22', '#6B8E23', '#8B4513', '#A0522D', '#D2B48C', '#F5F5DC', '#8B0000', '#6A5ACD', '#5F9EA0', '#4682B4', '#BDB76B', '#00FFFF', '#E0FFFF', '#AFEEEE', '#40E0D0', '#48D1CC', '#20B2AA', '#B0E0E6', '#ADD8E6', '#87CEEB', '#4682B4', '#5F9EA0', '#6495ED', '#00CED1', '#F0FFFF', '#F5FFFA', '#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#F57C00', '#616161', '#8E24AA', '#0288D1', '#C2185B', '#E64A19', '#7B1FA2', '#455A64', '#303F9F', '#CDDC39', '#009688', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#F7786B', '#DECF3F', '#CE3175', '#FFAE42', '#034F84', '#F0E68C', '#9B2335', '#BC243C', '#2A4D69', '#EFC050', '#00FF00', '#FF00FF', '#00FFFF', '#FF4500', '#FFD700', '#C0C0C0', '#00BFFF', '#DAA520', '#FF69B4', '#9400D3', '#4682B4', '#808080', '#7FFF00', '#1E90FF', '#4B0082', '#FFD700', '#B0E0E6', '#FF69B4', '#4682B4', '#FF4500', '#CD5C5C', '#FFE4B5', '#FF1493', '#BDB76B', '#20B2AA', '#FA8072', '#FFFACD', '#FFDEAD', '#87CEEB', '#FF6347', '#4B0082', '#8B0000', '#2E0854', '#800000', '#2F4F4F', '#483D8B', '#00008B', '#8A2BE2', '#556B2F', '#3CB371', '#6B8E23', '#B22222', '#D2691E', '#4D4D4D', '#5F9EA0', '#008080', '#FFD700', '#4B0082', '#FF8C00', '#2E8B57', '#00CED1', '#FF6347', '#4682B4', '#A9A9A9', '#708090', '#32CD32', '#FF4500', '#00FF7F', '#B22222', '#7FFF00', '#000000', '#FFD700', '#2F4F4F', '#8B4513', '#DC143C', '#483D8B', '#B8860B', '#C71585', '#4682B4', '#CD5C5C', '#2E8B57', '#BDB76B', '#A52A2A', '#800080', '#FF1493'
];

let particleRadMultiplier = newRadMultiplier();
const damping = 0.999;
let particleRadius = newParticleSize();
let collisionDistance = particleRadius * particleRadMultiplier;
let maxSpeed = newMaxSpeed();
let particles = [];
let colors = allColors.slice(0, parseInt(colorCountInput.value));
let numParticles = parseInt(particleInput.value);
let interactionRange = parseInt(rangeInput.value);
let maxForceRange = parseFloat(forceRangeInput.value);
let gridSize = interactionRange;
let autoResetAndRandomizeInterval = null;
let intervalTime = parseInt(intervalInput.value) * 1000;
let isPaused = false;
let grid = {};
let startIndex = 0;

let forces = {}; // To hold the force values
let interactionRanges = {}; // To hold the interaction range values

function newMaxSpeed() {
    let newSpeed = 2;
    if (slowSpeed.checked) {
        newSpeed = 1;
    } else if (mediumSpeed.checked) {
        newSpeed = 2;
    } else if (fastSpeed.checked) {
        newSpeed = 3;
    }
    return newSpeed;
}

function newParticleSize() {
    let newSize = 1.75;
    if (smallSize.checked) {
        newSize = 1.25;
    } else if (mediumSize.checked) {
        newSize = 1.75;
    } else if (bigSize.checked) {
        newSize = 2.25;
    }
    return newSize;
}

function newRadMultiplier() {
    let newRadMult = 6;
    if (slowSpeed.checked) {
        newRadMult = 4.5;
    } else if (mediumSpeed.checked) {
        newRadMult = 6;
    } else if (fastSpeed.checked) {
        newRadMult = 7.5;
    }
    return newRadMult;
}

function resizeCanvas() {
    const canvasStyle = window.getComputedStyle(canvas);
    canvas.width = parseInt(canvasStyle.width);
    canvas.height = parseInt(canvasStyle.height);
    // resetParticles();
}

function toggleElementVisibility(element) {
    element.classList.toggle('hidden');
}

function generatePatternedForcesAndRanges() {
    const newForces = {};
    const newInteractionRanges = {};

    allColors.forEach(color => {
        newForces[color] = {};
        allColors.forEach(targetColor => {
            let force = (color === targetColor) ?
                Math.random() * maxForceRange - (maxForceRange / 2) :
                Math.random() * maxForceRange * 2 - maxForceRange;
            newForces[color][targetColor] = parseFloat(force.toFixed(1));
        });
        newInteractionRanges[color] = collisionDistance + Math.random() * (interactionRange - collisionDistance);
    });

    generateForceMatrix(newForces, newInteractionRanges);
    return { newForces, newInteractionRanges };
}

function updateForce(color, targetColor, value) {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
        forces[color][targetColor] = parsedValue;
    }
}

function generateForceMatrix(forces, interactionRanges) {
    let table = '<table><tr><th>Range</th>';

    // Header row for interaction ranges
    colors.forEach(color => {
        if (interactionRanges[color] !== undefined) {
            table += `<th style="background-color: ${color};">${interactionRanges[color].toFixed(2)}</th>`;
        } else {
            table += `<th style="background-color: ${color};">N/A</th>`;
        }
    });
    table += '</tr><tr><th></th>';

    // Header row for color labels
    colors.forEach(color => {
        table += `<th style="background-color: ${color};">${color}</th>`;
    });
    table += '</tr>';

    // Matrix rows with editable inputs
    colors.forEach(color => {
        table += `<tr><th style="background-color: ${color};">${color}</th>`;
        colors.forEach(targetColor => {
            if (forces[color] && forces[color][targetColor] !== undefined) {
                table += `
                    <td>
                        <input type="number" step="0.1" value="${forces[color][targetColor]}"
                        onchange="updateForce('${color}', '${targetColor}', this.value)">
                    </td>`;
            } else {
                table += `<td>N/A</td>`;
            }
        });
        table += '</tr>';
    });

    table += '</table>';
    forceMatrixDiv.innerHTML = table;
}


class Particle {
    constructor(x, y, color, interactionRange, interactionRangeSquared) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.ax = 0;
        this.ay = 0;
        this.color = color;
        this.interactionRange = interactionRange;
        this.interactionRangeSquared = interactionRangeSquared;
    }

    update() {
        this.vx += this.ax;
        this.vy += this.ay;
        this.vx *= damping;
        this.vy *= damping;

        let speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
            const ratio = maxSpeed / speed;
            this.vx *= ratio;
            this.vy *= ratio;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.wrapEdges();
        this.ax = 0;
        this.ay = 0;
    }

    wrapEdges() {
        if (this.x < 0) this.x += canvas.width;
        if (this.x > canvas.width) this.x -= canvas.width;
        if (this.y < 0) this.y += canvas.height;
        if (this.y > canvas.height) this.y -= canvas.height;
    }

    applyForces(particles, grid) {
        const cellX = Math.floor(this.x / gridSize);
        const cellY = Math.floor(this.y / gridSize);

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const neighborX = (cellX + i + Math.ceil(canvas.width / gridSize)) % Math.ceil(canvas.width / gridSize);
                const neighborY = (cellY + j + Math.ceil(canvas.height / gridSize)) % Math.ceil(canvas.height / gridSize);
                const cellKey = `${neighborX},${neighborY}`;
                if (grid[cellKey]) {
                    grid[cellKey].forEach(p => {
                        if (p !== this) {
                            this.applyForceFromParticle(p);
                        }
                    });
                }
            }
        }
    }

    applyForceFromParticle(p) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;

        // Wrap distance calculation for toroidal interaction
        if (Math.abs(dx) > canvas.width / 2) {
            dx = dx > 0 ? dx - canvas.width : dx + canvas.width;
        }
        if (Math.abs(dy) > canvas.height / 2) {
            dy = dy > 0 ? dy - canvas.height : dy + canvas.height;
        }

        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < this.interactionRangeSquared) {
            const distance = Math.sqrt(distanceSquared);
            const force = forces[this.color][p.color];
            const fx = (dx / distance) * force;
            const fy = (dy / distance) * force;
            this.ax += fx;
            this.ay += fy;
        }
    }

    handleCollisions(particles, grid) {
        const cellX = Math.floor(this.x / gridSize);
        const cellY = Math.floor(this.y / gridSize);

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const neighborX = (cellX + i + Math.ceil(canvas.width / gridSize)) % Math.ceil(canvas.width / gridSize);
                const neighborY = (cellY + j + Math.ceil(canvas.height / gridSize)) % Math.ceil(canvas.height / gridSize);
                const cellKey = `${neighborX},${neighborY}`;
                if (grid[cellKey]) {
                    grid[cellKey].forEach(p => {
                        if (p !== this) {
                            this.resolveCollisionWithParticle(p);
                        }
                    });
                }
            }
        }
    }

    resolveCollisionWithParticle(p) {
        let dx = p.x - this.x;
        let dy = p.y - this.y;

        // Wrap distance calculation for toroidal interaction
        if (Math.abs(dx) > canvas.width / 2) {
            dx = dx > 0 ? dx - canvas.width : dx + canvas.width;
        }
        if (Math.abs(dy) > canvas.height / 2) {
            dy = dy > 0 ? dy - canvas.height : dy + canvas.height;
        }

        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < collisionDistance * collisionDistance) {
            const distance = Math.sqrt(distanceSquared);
            const overlap = (collisionDistance - distance) / 18;
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            this.x -= overlap * cos;
            this.y -= overlap * sin;
            p.x += overlap * cos;
            p.y += overlap * sin;

            const vxRel = this.vx - p.vx;
            const vyRel = this.vy - p.vy;
            const dotProduct = vxRel * dx + vyRel * dy;
            if (dotProduct > 0) {
                const collisionScale = dotProduct / distanceSquared;
                const collisionVectorX = collisionScale * dx;
                const collisionVectorY = collisionScale * dy;

                this.vx -= collisionVectorX;
                this.vy -= collisionVectorY;
                p.vx += collisionVectorX;
                p.vy += collisionVectorY;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function buildGrid() {
    grid = {};
    particles.forEach(p => {
        const cellX = Math.floor(p.x / gridSize);
        const cellY = Math.floor(p.y / gridSize);
        const cellKey = `${cellX},${cellY}`;
        if (!grid[cellKey]) {
            grid[cellKey] = [];
        }
        grid[cellKey].push(p);
    });
}

function getStartingIndex() {
    const isChecked = randomColorsCheckbox.checked;
    if (isChecked) {
        startIndex = Math.floor(Math.random() * allColors.length);
    }
    return startIndex;
}

function initParticles() {
    numParticles = parseInt(particleInput.value) || numParticles;
    interactionRange = parseInt(rangeInput.value) || interactionRange;
    maxForceRange = parseFloat(forceRangeInput.value) || maxForceRange;
    const colorCount = parseInt(colorCountInput.value);

    const startIndex = getStartingIndex();
    colors = allColors.slice(startIndex, startIndex + colorCount);

    if (colors.length < colorCount) {
        colors = colors.concat(allColors.slice(0, colorCount - colors.length));
    }

    gridSize = interactionRange;
    particles = [];

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        for (let j = 0; j < numParticles / colors.length; j++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push(new Particle(x, y, color, interactionRanges[color] || interactionRange, (interactionRanges[color] || interactionRange) ** 2));
        }
    }
    buildGrid();
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    buildGrid();
    particles.forEach(p => p.applyForces(particles, grid));
    particles.forEach(p => p.handleCollisions(particles, grid));
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

function autoResetAndRandomize() {
    if (!isPaused) {
        resetParticles();
        randomizeForcesAndRanges();
    }
}

function startInterval() {
    clearInterval(autoResetAndRandomizeInterval);
    autoResetAndRandomizeInterval = setInterval(autoResetAndRandomize, intervalTime);
}

function resetParticles() {
    particleRadius = newParticleSize();
    maxSpeed = newMaxSpeed();
    particleRadMultiplier = newRadMultiplier();
    collisionDistance = particleRadius * particleRadMultiplier;
    initParticles();
    generateForceMatrix(forces, interactionRanges);
}

function randomizeForcesAndRanges() {
    const { newForces, newInteractionRanges } = generatePatternedForcesAndRanges();
    forces = newForces;
    interactionRanges = newInteractionRanges;
    particles.forEach(p => {
        p.interactionRange = interactionRanges[p.color];
        p.interactionRangeSquared = p.interactionRange ** 2;
    });
}

resizeCanvas();
settingsButton.addEventListener('click', () => {
    toggleElementVisibility(controls);
    if (controls.classList.contains('hidden')) {
        forceMatrixDiv.classList.add('hidden');
    }
});
viewForceMatrixButton.addEventListener('click', () => toggleElementVisibility(forceMatrixDiv));
resetButton.addEventListener('click', resetParticles);
randomizeButton.addEventListener('click', randomizeForcesAndRanges);
intervalInput.addEventListener('change', () => {
    intervalTime = parseInt(intervalInput.value) * 1000;
    startInterval();
});
pauseResumeButton.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseResumeButton.textContent = isPaused ? 'Resume Reset Timer' : 'Pause Reset Timer';
});
colorCountInput.addEventListener('change', () => {
    colors = allColors.slice(0, parseInt(colorCountInput.value));
});
window.addEventListener('resize', () => {
    resizeCanvas();
});

// Initial setup: Generate random values once
const initialRandomValues = generatePatternedForcesAndRanges();
forces = initialRandomValues.newForces;
interactionRanges = initialRandomValues.newInteractionRanges;

// Start the animation and interval
initParticles();
animate();
startInterval();

import * as readline from "readline";
import * as geoLib from './src/index';

function getUserInput(prompt: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function getValidNumberInput(prompt: string): Promise<number> {
    while (true) {
        const userInput = await getUserInput(prompt);
        const parsedInput = parseFloat(userInput);

        if (!isNaN(parsedInput) && parsedInput > 0) {
            return parsedInput;
        } 
        else if (userInput.toLowerCase() === 'quit') {
            process.exit(0);
        } 
        else {
            console.log(`\nInvalid input. Please enter a positive number or 'quit'.\n`);
        }
    }
}

async function getValidPointInput(prompt: string): Promise<geoLib.Point> {
    while (true) {
        const userInput = await getUserInput(prompt);
        const coords = userInput.split(",");
        const point = {x: parseInt(coords[0]), y: parseInt(coords[1])}

        if (geoLib.isPoint(point)) {
            return point;
        }
        else if (userInput.toLowerCase() === 'quit'){
            process.exit(0);
        }
        else {
            console.log(`\nInvalid input. Please enter the x and y coordinates of a point in the format "x,y" or 'quit' to exit.\n`);
        }
    }
}

async function main() {
    while (true) {
        const choiceInput = await getUserInput(`Enter the number for the operation you would like to perform(type "quit" to exit):\n1. Square\n2. Cube\n3. Circle\n4. Sphere\n5. 2D Points\n`);
        const choice = parseInt(choiceInput);

        if (isNaN(choice)) {
            if (choiceInput.toLowerCase() === 'quit') {
                console.log(`\nExiting the application.`);
                process.exit(0);
            }
            console.log(`\nInvalid input. Please enter a valid number or 'quit'.\n`);
            continue;
        }

        if (choice === 1 || choice === 2) {
            const prompt = `Enter sidelength(or 'quit'): `;
            const value = await getValidNumberInput(prompt);
            let shapeSquare = new geoLib.SquareShape(value);
            console.log(choice === 1 ? `\nA square with length ${value} has an area of ${shapeSquare.getArea()} and a circumference of ${shapeSquare.getPerimeter()} 
  \n` : `\nA cube with a radius of ${value} has a volume of ${shapeSquare.getVolume()} and a surface area of ${shapeSquare.getSurfaceArea()}\n`);
        } 
        
        else if (choice === 3 || choice === 4) {
            const prompt = `Enter radius(or 'quit'): `;
            const value = await getValidNumberInput(prompt);
            let shapeRound = new geoLib.RoundShape(value);
            console.log(choice === 3 ? `\nA circle with radius ${value} has an area of ${shapeRound.getArea()} and a circumference of ${shapeRound.getCircumference()}\n` 
            : `\nA sphere with a radius of ${value} has a volume of ${shapeRound.getVolume()} and a surface area of ${shapeRound.getSurfaceArea()}\n`);
        }   

        else if (choice === 5) {
            const prompt1 = `Enter coordinates of first 2D point(or 'quit'): `;
            const prompt2 = `Enter coordinates of second 2D point(or 'quit'): `;
            const point1 = await getValidPointInput(prompt1);
            const point2 = await getValidPointInput(prompt2);

            console.log(
                `\nFor the points (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}): \nDistance: ${geoLib.calculateDistance(point1, point2)}\nMidpoint: ${geoLib.calculateMidpoint(point1, point2)}\nSlope: ${geoLib.calculateSlope(point1, point2)}\nEquation: ${geoLib.calculateLineEquation(point1, point2)}\nLineType: ${geoLib.getLineType(point1, point2)}\n`
            )
        }

        else {
            console.log("\nInvalid input. Please enter 1, 2, 3, or 4.\n");
        }
    }
}

main();

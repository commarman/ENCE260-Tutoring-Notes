const toggleLED = document.getElementById("morse-LED");
const uncodedString = "ENCE260";

const morseMap = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-", 
    "5": ".....", 
    "6": "-....", 
    "7": "--...", 
    "8": "---..", 
    "9": "----." 
}

const unit = 200

// const dit = (next) => {
//     toggleLED.src="LED-on.png";
//     setTimeout(() => {
//         toggleLED.src="LED-off.png";
//     }, 100);
// }

// const dah()


const convert = (str) => {
    let morseString = "";
    str.forEach(element => {
        element = element.toLowerCase()
        if (morseMap[element]) {
            morseString += morseMap[element] + ",";
        } else {
            morseString += " ";
        }
    });
    return morseString;
}

const morseString = convert(uncodedString);

const on = () => {
    LED.src = "LED-on.png";
}

const off = () => {
    LED.src = "LED-off.png";
}

const flash = (i, on) => {
    i = i % morseString.length;
    if (on) {
        off();
        setTimeout(() => flash(i+1, false), unit);
    } else {
        switch (morseString[i]) {
            case '.':
                on();
                setTimeout(() => flash(i, true), unit);
                break;

            case '-':
                on();
                setTimeout(() => flash(i, true), unit*3);
                break;

            case ',':
                off();
                setTimeout(() => flash(i+1, false), unit*2);
                break;

            case ' ':
                off();
                setTimeout(() => flash(i+1, false), unit*4);
                break;
        
            default:
                console.error("WHAT THE HECK");
                break
        }
    }
}

flash(0, false);
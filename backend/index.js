import { createRequire } from "module"; // Bring in the ability to create the 'require' method

const require = createRequire(import.meta.url); // construct the require method
const data = require("./data.json");

// let data = [1, 2, 3, 4, 5, 6];

let getSetOFSix = () => {
    return {
        setOfSix: data[Math.floor(Math.random() * data.length)]
    };
}

export default getSetOFSix;
import { createRequire } from "module"; // Bring in the ability to create the 'require' method

const require = createRequire(import.meta.url); // construct the require method
const data = require("./data.json");

let getSetOFSix = () => {
    return {
        // setOfSix: data[1]
        setOfSix: data[Math.floor(Math.random() * data.length)]
    };
}

export default getSetOFSix;
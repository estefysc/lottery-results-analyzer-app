// Brings in the ability to create the 'require' method.
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const data = require("./data.json");

// Obtains a set of six numbers randomly, which are the result of one lottery play, from the data.json file.
let getSetOFSix = () => {
    return {
        setOfSix: data[Math.floor(Math.random() * data.length)]
    };
}

export default getSetOFSix;
const TypErr = (msg)  => {
    throw new TypeError(msg); // Added this function to throw error in ternary operator
}

const IsEqualTo = {
    Mode: "Normals",
    Normals: (Input, Compare) => {
        return Input == Compare; // basically ==
    },
    Stricts: (Input, Compare) => {
        return Input === Compare; // basically ===
    },
    Default: (Input, Compare) => {
        return IsEqualTo.Mode === "Normals" ? Input == Compare // Check if Mode = Normals return ==
            : (IsEqualTo.Mode === "Stricts" ? Input === Compare // Check if Mode = Stricts reutrn ===
            : TypErr("Invalid IsEqualTo Mode")); // throw TypeError "Invalid IsEqualTo Mode"
    } 
};

const IsNotEqaulTo = {
    Mode: "Normals",
    Normals: (Input, Compare) => {
        return Input != Compare; //basically !=
    },
    Stricts: (Input, Compare) => {
        return Input !== Compare; //basically !==
    },
    Default: (Input, Compare) => {
        return IsNotEqaulTo.Mode === "Normals" ? Input != Compare //Check if Mode = Normals return != 
            : (IsNotEqaulTo.Mode === "Stricts" ? Input !== Compare //Check if Mode = Normals return !==
            : TypErr("Invalid IsNotEqualTo Mode")); //throw TypeError "Invalid IsNotEqualTo Mode"
    }
};

const SeDefaultTo = (mode) => {
    const set = ["Stricts", "Normals"]; //Valid Mode Set
    return set.includes(mode) ? 
        (IsEqualTo.Mode = mode, IsNotEqaulTo.Mode = mode) //check if set contain mode set IsEqaulTo and IsNotEqualTo
        : TypErr("Invalid SetDefaultTo Mode"); //throw TypeError "Invalid SetDefaultTo Mode"
};

const ShowMode = (bool) => {
    return typeof(bool) === "boolean" ?  //Check if argument is boolean
        (bool && "IsEqualTo: " + IsEqaulTo.Mode + "\n" //return IsEqualTo's Mode 
        + "IsNotEqualTo: " + IsNotEqaulTo.Mode) //return IsNotEqualTo's Mode
        : TypErr("Invalid ShowMode Argument"); //throw TypeError "Invalid ShowMode Argument"
};
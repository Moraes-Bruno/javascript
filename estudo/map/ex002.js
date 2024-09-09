const oss = ["Windows XP","Ubuntu","Arch Linux","Ghost BSD","OS/2","Open SUSE","Irix"];

const oss_upperCase = oss.map(upperCase);

const oss_lowerCase = oss.map(lowerCase);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

function display(element){
    console.log(element)
}

oss_lowerCase.forEach(display);
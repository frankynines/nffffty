export const truncateString = (str) =>{
    return str.length > 10 ? str.substring(0, 6) + "..." + str.substring(str.length - 6, str.length) : str;
 }
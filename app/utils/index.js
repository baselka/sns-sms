exports.randomOTP = (min, max) => {

//function to generate random number

    return Math.floor(Math.random() * (max - min) + min);
 
}
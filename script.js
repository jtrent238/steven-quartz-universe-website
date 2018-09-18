/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
console.log(process.env.QOTD);
document.getElementById("qotd").innerHTML = process.env.QOTD;

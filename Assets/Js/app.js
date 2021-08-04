// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// const btn = document.body.getElementById('btn');
const color = document.body.querySelector(".color");

btn.addEventListener('click', function() {
    // get random number between 0 - 3
    //const randomNumber = 2
const hue = Math.floor(Math.random() * 361);


    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    color.textContent = (`hsl(${hue},100%,50%)`);
    
    
    
   // const randomNumber = Math.floor(Math.random() * colors.length);
   //  document.body.style.backgroundColor = colors[randomNumber];
   // color.textContent = colors[randomNumber];
});


// 'hsl'('+hue+' + , 100%, 50%)
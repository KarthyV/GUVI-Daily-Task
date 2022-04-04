
// Initial state
let num = 10;

// Creating a div element
let div = document.createElement('div');

// Assigning the initial state value to div 
div.innerHTML = num;

// adding the div to the DOM
document.body.append(div)


// Timeout method for reducing the countdown dynamically
// Callback Hell examples

setTimeout(() => {
    num--;
    div.innerHTML = num; 
    setTimeout(() => { // 1 second
        num--;
        div.innerHTML = num;
        setTimeout(() => {  // 2 seconds
            num--;
            div.innerHTML = num; 
            setTimeout(() => { // 3 seconds
                num--;
                div.innerHTML = num;
                setTimeout(() => { // 4 seconds
                    num--;
                    div.innerHTML = num; 
                    setTimeout(() => { // 5 seconds
                        num--;
                        div.innerHTML = num;
                        setTimeout(() => { // 6 seconds
                            num--;
                            div.innerHTML = num; 
                            setTimeout(() => {  // 7 seconds
                                num--;
                                div.innerHTML = num; 
                                setTimeout(() => { // 8 seconds
                                    num--;
                                    div.innerHTML = num; 
                                    setTimeout(() => { // 9 seconds
                                        num--;
                                        div.innerHTML = num; 
                                        setTimeout(() => {  // After 10 seconds
                                            div.style.fontSize = "75px"
                                            div.style.animation = "none"
                                            div.innerHTML = "🎉🎊Happy Independence Day🎉🎊"; 
                                          },1000)
                                      },1000)
                                  },1000)
                              },1000)
                          },1000) 
                      },1000)
                  },1000) 
              },1000)
          },1000) 
      },1000)
},1000)


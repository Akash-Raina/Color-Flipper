const simple = ['red', 'green', '#F15025', 'Rgba(133,122,200)'];
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const colorValue = document.getElementById("color-value");

const main = document.getElementById("main");

let preV = null;
let val = false;

const button = document.getElementById("button");

const simpleReset = document.getElementById("simple");
const hexResest = document.getElementById("hex");

hexResest.addEventListener("click", () =>{
    val = true;
    main.style.backgroundColor = "#f1f5f8";
})


simpleReset.addEventListener("click", () => {
    val = false;
    main.style.backgroundColor = "#f1f5f8";
}) 

button.addEventListener("click", () =>{

    if(val === true){
        let store = '#';
        for(let i = 0; i < 6; i++){
            let hexValue = Math. floor(Math. random() * hex. length);
            store += hex[hexValue];
        }
        main.style.backgroundColor = store;
        colorValue.innerHTML = store;
        hexResest.style.color = store;
    }
    else{
        let value = Math. floor(Math. random() * simple. length);
        while (preV == value){
            value = Math. floor(Math. random() * simple. length);
        }
        preV = value;
        main.style.backgroundColor = simple[value]
        colorValue.innerHTML = simple[value];
        simpleReset.style.color = simple[value];
    }
})

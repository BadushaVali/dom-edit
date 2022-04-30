//storing h3 element by using id-selector in 'midele' variable.
let midele = document.getElementById("heading");
console.log(midele);

//Applying CSS-property individually:
midele.style.backgroundColor = "green";
midele.style.color = "yellow";
midele.style.fontSize = "50px";

//Applying the CSS-group of properties, by using the cssText.
let ele = document.getElementById("title");
ele.style.cssText =
  "background-color: aquamarine;color: brown; font-style: italic;";

// storing the div element by using id in 'parentele' variable.
let parentele = document.getElementById("parent");
console.log(parentele);

//Applying the css by using class.
parentele.lastElementChild.classList.add("styling");

let paragraph = document.querySelector('.few');
console.log(paragraph);

//Applying the css by using class.
paragraph.classList.add('styling');

//function

function addcss(){
    parentele.lastElementChild.classList.add("styling");
    paragraph.classList.add('styling');
    console.log('clicked on button');
    // test.innerText = 'Learning DOM'
    // test.textContent = 'Learning DOM'
    test.innerHTML = 'Learning <b>DOM</b>'
    
}

function removecss(){
    parentele.lastElementChild.classList.remove("styling");
    paragraph.classList.remove('styling');
    console.log('clicked on button');
    
    
}

// innerText

let test = document.getElementById('para1');
console.log(test);
console.log(test.innerText); // using this we get text only it ignores spaces and empty lines
console.log(test.textContent);// using this we get text with spaces and empty lines
console.log(test.innerHTML); // using this we get text with spaces , empty lines and child-tags what we have used in this element.




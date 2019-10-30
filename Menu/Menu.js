/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument*/

 
function menuCreator (array){
   // 1- Create HTML markup
  const menu = document.createElement('div');
  const menuOptions = document.createElement ('ul');

 // 2- Define HTML structure
  menu.append(menuOptions);

 // 3- Add some class names
  menu.classList.add('menu');
  menuOptions.classList.add('ul');

 // 4- Add some content!
  menuOptions.textContent = [];

  // Step 2: Inside this function, iterate over the array creating a list item <li> element
  //  for each item in the array. 
  // Add those items to the <ul>
  array.forEach(i =>{
    let menuItems = document.createElement('li');
    menuItems.textContent = i;
    menuItems.classList.add('li');
    menuOptions.append(menuItems);
  });
// Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button')
  //  currently on the DOM.
  const menuBtn = document.querySelector('.menu-button');
  menuBtn.classList.add('menu-button');
    // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 
  // 'menu--open' on the menu (your div with a 'menu' class).
  menuBtn.addEventListener('click',(event) => {
    menu.classlist.toggle('menu--open');
     // Step 5: return the menu component.
    });
    return menu;
}

 // Step 6: add the menu component to the DOM.

  
 const newMenu = document.querySelector('.menu-button');
 console.log(newMenu);
 //picked up the IMG in which I waant to embed newMenu
// menu-button.append(menuCreator(menuItems));
newMenu.append(menuCreator(menuItems));


 

 
  


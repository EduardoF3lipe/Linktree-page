//Switch function
const switchTheme = () => {
//Get root element and data-theme value
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    //set the new HTML attribute
    rootElem.setAttribute('data-theme', newTheme)

    //set the new local storage item
    localStorage.setItem('them', newTheme)
}


document.querySelector('#dark-theme-switcher').addEventListener('click' , switchTheme)

//Icon
let darkmode = document.querySelector('.fa-moon');

darkmode.onclick = () => {
  if(darkmode.classList.contains('fa-moon')){
    darkmode.classList.replace('fa-moon', 'fa-sun')
  }else{
    darkmode.classList.replace('fa-sun', 'fa-moon');
  }
}


// ======================================================= \\




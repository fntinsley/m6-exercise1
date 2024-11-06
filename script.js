// ! assign variables

let hideShowButton = document.getElementById("hide-show-container")



// ! show the next article when a button is pressed
 

  
// ! create a condition to show all articles that are not shown or to hide all articles that are shown

function hideShow(){
    let article1 = document.getElementById("article-1")
let article2 = document.getElementById("article-2")
let article3 = document.getElementById("article-3")

    if (article1.style.display === "block") {
      article2.style.display = "block";
      article3.style.display = "block";

    } else {
        article1.style.display = "block";
        article2.style.display = "none";
        article3.style.display = "none";

        }
    }
    
    


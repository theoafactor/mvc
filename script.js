function aboutus(){
    console.log("This is about us")
    loadPageView(page);
}

function contactus(){
    console.log("Show contact us page")

    loadPageView(page);

}

function register(param1, param2){
    console.log("show register user")
    loadPageView(page);
}

console.log(location);

let locationData = location.href;

//lets extract the right function
const paths = locationData.split("?");

const page = paths[1];

console.log(page)

window[page]()


function loadPageView(pagename){
    const xhr = new XMLHttpRequest;

    //open
    xhr.open("GET", `http://localhost:5501/views/_${pagename}.html`);

    //load
    xhr.addEventListener("load", function(){
        // console.log(xhr.responseText);
        document.body.innerHTML = xhr.response;
    })

    //send
    xhr.send()
}





//call the function that matches the page





// aboutus();
// contactus();


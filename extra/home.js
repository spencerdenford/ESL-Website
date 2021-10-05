window.onload=function(){
    console.log("Hello world");

    // This gets rid of the input in the chat boxes if their corresponding submit buttons are pressed
    try{
        document.getElementById("chatbutton1").onclick = function(){
            document.getElementById("chatbox").value = "";
        }
        document.getElementById("chatbutton2").onclick = function(){
            document.getElementById("emailbox").value = "";
        }
    } catch(e){
        console.log("No chat box or no subscribe box");
    }

    // This will allow navigation to articles
    try{
        document.getElementById("article").onclick = function(){
            console.log("clicked");
            
            window.location = (`${document.getElementById("isHomePage").innerHTML}sociological.html`);
            
        }

    } catch(e){
        console.log("No articles on this page!")
    }

    try{
        document.getElementById("fakeArticle1").onclick = function(){
            console.log("clicked");
            window.location = "404.html";
        }

        /*document.getElementById("fakeArticle2").onclick = function(){
            console.log("clicked");
            window.location = "404.html";
        }*/
    } catch(e){
        console.log("No fake articles on this page!")
    }
}
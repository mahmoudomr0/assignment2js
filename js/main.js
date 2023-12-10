

var quotes = [


{

quote : "“Be yourself; everyone else is already taken.”",
name : "― Oscar Wilde",

}
,


{

    quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    name : "― Marilyn Monroe",
    
    }
,

    
{

    quote : "“So many books, so little time.”",
    name : "― Frank Zappa",
    
    },

   


]




function getQuotes() {


    var random = Math.floor(Math.random() * quotes.length  );
    


document.getElementById("quote").innerHTML =  (quotes[random ].quote)  ;
document.getElementById("author").innerHTML =  (quotes[random ].name)  ;



 
      
    
        
    }



  


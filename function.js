/* I created a variable and i stored my messages inside it and counter to count the done messages */

var messages = ["Eat an apple 🍏" , "Time to hack 💻 ", "Time to sleep 🛌😴", "Donate with 10d 💸 ","Go to watch a movie in the cinema 📽 ","Go on date 👫 ","Go to drink a coffee ☕️","time to practice some sport 🤸‍♂️ ","you should cook the dinner for tonight 👨‍🍳","you should clean up the house for today 🧺🧹","go shopping 📦 ","sing for the crowd 🎤"];
var messages2=["go rock climbing 🧗‍♀️ ","go fishing 🎣 "," make a house party 🎉 ","go to visit your family 👪",]
var points=0
/* I created a function to show a rondom message when you click on the button click here! 
and when your score (points reach 10 a message will shows up thanking for participationg) and I created another condition
 if your score greater than 5 a message from another array will shows up  */


      $('#button').click( function() {
if ( points===10){ $('#box').text("thanks for participating ✔️ ")
points=0}

else if( points>5){ var randomMessage = messages2[Math.floor(Math.random() * messages2.length)]  }


else{
        var randomMessage = messages[Math.floor(Math.random() * messages.length)]}

        $('#box').text(randomMessage)
        var limitCount=0
        $('#c').click( function(){
          if(limitCount===0){
            points++
            $('p').text("score : " +points)
            limitCount=1
          }
        }
          )
      });

      
  
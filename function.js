/* I created a variable and i stored my messages inside it and counter to count the done messages */

var messages = ["Eat an apple π" , "Time to hack π» ", "Time to sleep ππ΄", "Donate with 10d πΈ ","Go to watch a movie in the cinema π½ ","Go on date π« ","Go to drink a coffee βοΈ","time to practice some sport π€ΈββοΈ ","you should cook the dinner for tonight π¨βπ³","you should clean up the house for today π§Ίπ§Ή","go shopping π¦ ","sing for the crowd π€"];
var messages2=["go rock climbing π§ββοΈ ","go fishing π£ "," make a house party π ","go to visit your family πͺ",]
var points=0
/* I created a function to show a rondom message when you click on the button click here! 
and when your score (points reach 10 a message will shows up thanking for participationg) and I created another condition
 if your score greater than 5 a message from another array will shows up  */


      $('#button').click( function() {
if ( points===10){ $('#box').text("thanks for participating βοΈ ")
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

      
  
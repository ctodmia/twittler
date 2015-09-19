      $(document).ready(function(){
        var $body = $('body');
       

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message+': '+ tweet.created_at);
          $tweet.appendTo($body);
          index -= 1;
        }



        $('<button>Add Tweet</button>').appendTo($body);
        $('<input type="text">').appendTo($body);
        


//1. Show the user new tweets somehow. (you can show them automatically
  //as they are created,or create a button that displays new tweets.)

        //to execute this let us create a button that displays new tweets
        //we want it so that when the user writes a tweet in the input field
        //and presses the "add tweet" button
        //a new $tweet <div> is added below the last tweeted div

        //to make it easy on ourselves we can first make it so 
        //when the button is clicked a new div tag is added below 
        //the last tweet
        //to do this lets create an event handler that listens 
        //for a button click. 

      $('button').on('click', function(){
        var guestUser = randomElement(users);
        $('div').last().after( '<div>Test me out </div>' );
        $('div').last().text('@'+guestUser+': '+randomMessage() +': '+ tweet.created_at);
         
        
      })

   //great. Now that our button does what we want how can we add tweets based
      //on what the users inputs in the input field?

















      });

   
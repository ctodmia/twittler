      $(document).ready(function(){
        var $body = $('body');
        
        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.html('<a class="username" href="#">@' +tweet.user +'</a>' + ': ' + tweet.message+': '+ tweet.created_at);
          $tweet.appendTo('div.fortweets');
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
        $('div').last().html('<a href="#">@'+guestUser+': </a>'+randomMessage() +': '+ tweet.created_at); 

      })

 

   //great. Now that our button does what we want how can we add tweets based
      //on what the users inputs in the input field?

      //ok great now ever thing works almost perfect now we just have to be able to click on a user and only display that users tweets. 

      $('.username').on('click', function(){

        var index = streams.home.length - 1;
        
         // when the link its click the console returns
        //the appropriate user name 
        //console.log(this.text);
        while(index >= 0){
          //console.log(this.text + ' ' + '@' + (streams.home[index]).user);
          //$(this).css('color', 'red');
          //$(this).addClass('active');
          if(this.text === '@' + (streams.home[index]).user){
            console.log('its a match');
            $(this).css('color', 'red');
          var tweet = streams.home[index];
          var $tweet = $('<div class="active"></div>');
          $tweet.html('<a class="username" href="#">@' +tweet.user +'</a>' + ': ' + tweet.message+': '+ tweet.created_at);
          $tweet.appendTo($body);
        }
          index -= 1;
        }
      })















      });

   
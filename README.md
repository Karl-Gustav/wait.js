# Wait.js

An easy way to chain timers:

    wait(<time>)
        .done(function(){
	    ...
	})
        ...
        .wait(<time>)
        .done(function(){
	    ...
	})
        .go()

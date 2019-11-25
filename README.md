Right,
this is a simple key logger I threw together in order to test my web-dev skills. Its relatively simple to implement and use, the code is pretty self-explanitory but I'll add some info here.

The Javascript file [Keylogger.js](../blob/master/keylogger.js) takes a keystroke from a user using the logger function and sends it to a remote server i.e. [Keylogger.php](../blob/master/keylogger.php). jQuery is added to the webpage if it's not already present to make life easier. The logger functon uses AJAX to pass the keystrokes to the PHP file.

The PHP file takes in a keystroke value as stores it in a text file. EZPZ.

I tested it using XAMPP to host a local server and it worked well, Chrome might not let you run it because "it depreciates user experiences" using jQuery apparently. 

If you have a questions you can reach me on my website [here](jakelearman.github.io)
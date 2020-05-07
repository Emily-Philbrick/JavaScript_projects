
    var X = 10;
    function Add_numbers_1() {
        document.write(20 + X + "<br>");
    }
    function Add_numbers_2() {
        document.write(X + 100);
    }
    Add_numbers_1();
    Add_numbers_2(); 

    function get_Date() {
        if (new Date().getHours() < 18) {
            document.getElementById("Greeting").innerHTML =  "How are you today";
        }
    }

    function Favorite_color() {
        color = document.getElementById("color").value;
        if (color == Red) {
            Favorite = "you do love the color red!";
        }
        else if (color !== Red) {
            not_favorite = "you do not love the color red!";
        }
        document.getElementById("whats_your_favorite_color?").innerHTML = red; 
    }

    function Time_function() {
        var Time = new Date().getHours(); 
        var Reply; 
        if (Time< 12 == Time > 0) {
            Reply = "It is morning time!";
        }
        else if (Time > 12 == time < 18) {
            Reply = "it is the afternoon.";
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply; 
    }
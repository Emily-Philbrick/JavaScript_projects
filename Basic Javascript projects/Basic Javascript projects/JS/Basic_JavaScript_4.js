function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black"
        Breed: "Labordor",
        Age: 5, 
        Sound: "Bark!"
    };
    delete Animal.Sound; 
    document.getElementById("Dictionary").innerHTML = Animal.sound; 
}
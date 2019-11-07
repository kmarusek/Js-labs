

    const name = 'Mitch Cuckovich ';
    const age = 24;
    const birthday = 'January 24 ';
    const detroitGC = false;
    var counter = 0; 
   
    
    
    let lifeEvents = ["I was born in Troy, Michigan. ", "I went to Hope College. ", "I went to the Junior Olympics when i was 10 years old. I placed 14th in the nation in the 800 meter event. ", "I'm a graduate of the front-end bootcamp. "];

    if(detroitGC == true){
        console.log('My name is '+ name +' and I am a student at Grand Circus in Detroit, Michigan.'+'I am currently '+age+' years old and my birthday is on '+ birthday +'.');
    }
    else if (detroitGC == false){
        console.log('My name is '+ name +' and I am a student at Grand Circus in  Grand Rapids, Michigan.'+'I am currently '+age+' years old and my birthday is on '+ birthday +'.');
    }

    for (var i = 0; i < lifeEvents.length; i++){
        var item = lifeEvents[i];
        console.log(item);
        
    }
    while (true){
        let randomNumber = Math.floor(Math.random()
         *10 + 1);
         if (randomNumber !== 5){
            counter++;
            console.log(randomNumber+" !==5");
    }

        else {
            counter++;
            console.log(randomNumber+" === 5"+" it took "+counter+" iterations to randomly generate the number 5.");
            break;      
        }
    }
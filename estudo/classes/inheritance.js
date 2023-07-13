class vehicle {

    gasoline = true;

    drive() {
        console.log("Driving");
    }

    stop() {
        console.log("Stopping");
    }

}

class car extends vehicle {

    model = "RX7";
    premix = true;

    drift() {

        console.log("You are drifting");

    }

}

const car1 = new car();

console.log(car1.model);

if (car1.gasoline == true && car1.premix == true) {

    car1.drive();
    car1.drift();

}else {

    car1.stop();
    
}
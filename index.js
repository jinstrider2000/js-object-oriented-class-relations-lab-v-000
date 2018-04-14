const store = {
  drivers: [],
  passengers: [],
  trips: []
};

let driverIdCounter = 0;
let passengerIdCounter = 0;
let tripIdCounter = 0;

class Driver {
  constructor(name) {
    this.id = ++driverIdCounter;
    this.name = name;
    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerIdCounter;
    this.name = name;
    store.passengers.push(this);
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripIdCounter;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passengers() {
    return store.passengers.find((passenger) => passenger.id === this.passengerId);
  }
}

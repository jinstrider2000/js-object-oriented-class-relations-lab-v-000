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

  trips() {
    return store.trips.filter((trip) => trip.driverId == this.id);
  }

  passengers() {
    return this.trips().map((trip) => store.passengers.find((passenger) => passenger.id === trip.passengerId))
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

  passenger() {
    return store.passengers.find((passenger) => passenger.id === this.passengerId);
  }

  driver() {
    return store.drivers.find((driver) => driver.id === this.driverId);
  }
}

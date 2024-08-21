/*
 * Class: Musician
 * Static fields:
 * ------------------------
 * | Field   |  Value      |
 * |---------|-------------|
 * | count   |  0          |
 *
 * Properties:
 * --------------------------------------
 * | Property    |  Type                |
 * |-------------|----------------------|
 * | #name       |  String              |
 * | #instrument |  String              |
 *
 * Getters:
 * ---------------------
 * | Getter   |  Returns   |
 * |----------|------------|
 * | name     |  string    |
 * | instrument | string   |
 *
 * Methods:
 * --------------------------
 * | Method   |  Action         |
 * |----------|-----------------|
 * | play()   | Outputs a string to the console |
 */

class Musician {
  static count = 0;
  #name;
  #instrument;
  // static field count that tracks the number of musicians, initial value is 0
  // Declaring private fields #name and #instrument

  constructor(name, instrument) {
    // The constructor takes two parameters: name and instrument
    // assigns the input value name to the private field #name
    // assigns the input value instrument to the private field #instrument
    // increments the value of the static field by 1
    this.#name = name;
    this.#instrument = instrument;
    Musician.count++;
  }

  get name() {
    return this.#name;
  }

  get instrument() {
    return this.#instrument;
  }

  set name(newName) {
    this.#name = newName;
  }

  set instrument(newInstrument) {
    this.#instrument = newInstrument;
  }

  play() {
    console.log(`${this.#name} plays the ${this.#instrument}`);
  }
}

/*
 * Class: Guitarist
 * Inherits from: Musician
 *
 * Properties:
 * ---------------------------------
 * | Property    |  Type           |
 * |-------------|-----------------|
 * | #name       |  String         |
 * | #instrument |  String         |
 * | #band       |  String         |
 *
 * Getters:
 * ---------------------
 * | Getter   |  Returns   |
 * |----------|------------|
 * | name     |  string    |
 * | band     |  string    |
 *
 * Setters:
 * ---------------------
 * | Setter   |  Expects   |
 * |----------|------------|
 * | name     |  string    |
 * | band     |  string    |
 *
 * Methods:
 * --------------------------
 * | Method     |  Action     |
 * |------------|-------------|
 * | play()     | Outputs a string to the console |
 * | joinBand() | Changes the value of #band |
 */

class Guitarist extends Musician {
  #band;
  constructor(name, instrument, band) {
    super(name, instrument);
    this.band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${super.name} plays the ${super.instrument} in the band ${this.#band}`
    );
  }
}

/*
 * Class: Bassist
 * Inherits from: Musician
 *
 * Properties:
 * ---------------------------------
 * | Property    |  Type           |
 * |-------------|-----------------|
 * | #name       |  String         |
 * | #instrument |  String         |
 * | #band       |  String         |
 *
 * Getters:
 * ---------------------
 * | Getter    |  Returns  |
 * |-----------|-----------|
 * | name      |  string   |
 * | band      |  string   |
 *
 * Setters:
 * ---------------------
 * | Setter    |  Expects  |
 * |-----------|-----------|
 * | name      |  string   |
 * | band      |  string   |
 *
 * Methods:
 * --------------------------
 * | Method     |  Action   |
 * |------------|-----------|
 * | play()     | Outputs a string to the console |
 * | joinBand() | Changes the value of #band |
 */

class Bassist extends Musician {
  #band;
  constructor(name, instrument, band) {
    super(name, instrument);
    this.#band = band;
  }

  get band() {
    return this.#band;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  joinBand(band) {
    this.#band = band;
  }

  play() {
    console.log(
      `${super.name} plays the ${super.instrument} in the band ${this.#band}`
    );
  }
}

// Here, we use Object.defineProperty() to add a setter for 'band' to the Musician class after its creation.
// The first argument is the object to which we want to add the property. In this case, it's Musician.prototype,
// because we want to add a setter to all instances of the Musician class.
// The second argument is the name of the property we want to add. In this case, it's 'band'.
// The third argument is an object that describes the property. In this case, we want to add a setter,
// so we specify a function that will be called when attempting to set the 'band' property. this.band = newBand
Object.defineProperty(Musician.prototype, "band", {
  set: function (newBand) {
    this.band = newBand;
  },
});

/*
 * Class: Band
 * ---------------------------
 * | Property    |  Type      |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  #name;
  #members;
  constructor(name, members) {
    this.#name = name;
    this.#members = [...members];
  }

  get name() {
    return this.#name;
  }

  get members() {
    return this.#members;
  }

  set name(newName) {
    this.#name = newName;
  }

  addMember(newMember) {
    if (newMember instanceof Musician) {
      newMember.band = this.#name;
    } else {
      console.log("The new member must be an instance of the Musician class.");
    }
  }

  playMusic() {
    this.#members.forEach(member => {
      member.play();
    });
  }
}

/*
 * Class: Performance
 * ---------------------------
 * | Property    |  Type      |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band;
  #location;
  #date;
  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }

  get band() {
    return this.#band;
  }

  get location() {
    return this.#location;
  }

  get date() {
    return this.#date;
  }

  info() {
    console.log(
      `The band ${this.#band.name} will perform at ${
        this.#location
      } on ${this.#date.toLocaleDateString()}`
    );
  }
}

/*
 * Class: Concert
 * ---------------------------
 * | Property    |  Type      |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice;
  constructor(band, location, date, ticketPrice) {
    super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }

  get ticketPrice() {
    return this.#ticketPrice;
  }

  set ticketPrice(newTicketPrice) {
    this.#ticketPrice = newTicketPrice;
  }

  info() {
    console.log(
      `The band ${super.band.name} will perform at ${
        super.location
      } on ${super.date.toLocaleDateString()}, ticket price: ${this.#ticketPrice}`
    );
  }
}

/*
 * Class: Vocalist
 * ---------------------------
 * | Property    |  Type      |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  #name;
  #band;
  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }

  get name() {
    return this.#name;
  }

  get band() {
    return this.#band;
  }

  set name(newName) {
    this.#name = newName;
  }

  set band(newBand) {
    this.#band = newBand;
  }

  info() {
    console.log(`The vocalist ${this.name} is a member of the band ${this.band}`);
  }
}

/*
 * Class: SongWriter
 * ---------------------------
 * | Property    |  Type      |
 * |-------------|------------|
 * | #songs      |  array     |
 */
class SongWriter {
  #songs;
  constructor(songs) {
    this.#songs = songs;
  }

  get songs() {
    return this.#songs;
  }

  addSong(song) {
    this.#songs.push(song);
  }

  info() {
    console.log(`Has written ${this.#songs.length} songs`);
  }
}

/*
 * Class: LeadSinger
 * ---------------------------
 * | Property    |  Type      |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */
class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band);
  }
}

/*
 * Creating a musician instance of the Musician class
 * ---------------------------------------------------
 * | Property    |  Value          |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */
let musician = new Musician("John", "Guitarist");

/*
 * Creating a guitarist instance of the Guitarist class
 * ---------------------------------------------------
 * | Property    |  Value          |
 * |-------------|------------------|
 * | name        | "Jimmy Page"     |
 * | instrument  | "guitar"         |
 * | band        | "Led Zeppelin"   |
 */
const guitarist = new Guitarist("Jimmy Page", "guitar", "Led Zeppelin");

/*
 * Creating a bassist instance of the Bassist class
 * ---------------------------------------------------
 * | Property    |  Value          |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "bass guitar"    |
 * | band        | "The Beatles"    |
 */

const bassist = new Bassist("Paul McCartney", "bass guitar", "The Beatles");

// Creating a band instance of the Band class
/*
 * Creating a band instance of the Band class
 * ---------------------------------------------------
 * | Property    |  Value           |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]        |
 */
const band = new Band("The Beatles", [bassist]);

// Adding guitarist to the band using addMember
band.addMember(guitarist);

/*
 * Creating a vocalist instance of the Vocalist class
 * -------------------------------------
 * | Property    |  Value             |
 * |-------------|--------------------|
 * | name        | "Freddie Mercury"  |
 * | band        | "Queen"            |
 */
const vocalist = new Vocalist("Freddie Mercury", "Queen");

/*
 * Creating a songwriter instance of the SongWriter class
 * -------------------------------------
 * | Property    |  Value             |
 * |-------------|--------------------|
 * | songs       | ["Yesterday", "Hey Jude", "Let It Be"] |
 */
const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

// Creating a performance instance of the Performance class
/*
 * ------------------------------------------------------
 * | Property    |  Value                               |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */
const performance = new Performance(band, "Liverpool", new Date("2023-08-01"));

// Using Object.assign() to inherit properties of songwriter into LeadSinger.prototype
Object.assign(LeadSinger.prototype, songwriter);

/*
 * Creating a concert instance of the Concert class
 * ---------------------------------------------------
 * | Property    |  Value              |
 * |-------------|---------------------|
 * | band        | band                |
 * | location    | "BBC studios"       |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100                 |
 */
const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);

/*
 * Creating a leadsinger instance of the LeadSinger class
 * -------------------------------------
 * | Property    |  Value             |
 * |-------------|--------------------|
 * | name        | "Mick Jagger"      |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday", "Hey Jude", "Let It Be"] |
 */
const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones", [
  "Yesterday",
  "Hey Jude",
  "Let It Be",
]);

// Uncomment methods below for testing after completing all tasks
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadsinger.info();

console.log(`Let's start a party!`)

// invited vs not, who came vs not, who left vs not

class Venue {
  constructor (capacity) {
    this.capacity = capacity
  }
}

class Guest {
  constructor (name, isOver21=false) {
    this.name = name
    this.isOver21 = isOver21
  }
}

class GuestList {
  constructor (guests=[]) {
    this.guests = guests
  }

  addGuest (guest) {
    this.guests.push(guest)
  }

  addGuests(...guests) {
    this.guests = this.guests.concat(guests)
  }
}

class Party {
  constructor (venue, guestList) {
    this.currentGuests = []
    this.pastGuests = []

    this.venue = venue
    this.guestList = guestList
  }

  enter (guest) {
    if(guestList.guests.includes(guest) && this.venue.capacity > 0) {
    this.currentGuests.push(guest)
    this.venue.capacity --
  }else{ console.error(`Sorry, you're not allowed in, ${guest.name} ! :-(`)}
  }

  leave (guest) {
    const index = this.currentGuests.indexOf(guest)
    this.currentGuests.splice(index, 1)

    this.pastGuests.push(guest)
    this.venue.capacity ++
  }

  get population () {
    return this.currentGuests.length
  }
}

const kevin = new Guest('Kevin', true)
const nathan = new Guest('Nathan', true)
const matt = new Guest('Matt', true)
const sean = new Guest('Sean', true)
const wes = new Guest('Wes', true)

const venue = new Venue(2)
const guestList = new GuestList()

guestList.addGuests(kevin, nathan, matt, sean)

const party = new Party(venue, guestList)
party.enter(matt)
party.enter(sean)
party.enter(nathan)
party.leave(sean)
party.enter(wes)
party.enter(nathan)
console.log(party);

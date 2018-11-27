const bearings = ['north', 'east', 'south', 'west']
class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }
  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }
  setBearing(bearing) {
    bearing = bearing.toLowerCase()
    if (bearings.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }
  place(obj) {
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }
  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'north'
        break
    }
  }
  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'north'
        break
    }
  }
  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break
      case 'east':
        this.coordinates[0] += 1
        break
      case 'south':
        this.coordinates[1] -= 1
        break
      case 'west':
        this.coordinates[0] -= 1
        break
    }
  }
  translateInstructions(instr) {
    for(let i = 0; i < instr.length; i++) {
      switch (instr.charAt(i)) {
        case 'R':
          this.turnRight()
          break
        case 'L':
          this.turnLeft()
          break
        case 'A':
          this.advance()
          break
      }
    }
  }
}

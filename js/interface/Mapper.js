class MappingInterface extends MappingManager {
  constructor (newMappings) {
    super(newMappings)
  }
  
  /**
   * The purpose of this 'interface' for now
   * is just storing more mappings for initiating.
   */
  initiate () {
    this.mappings = {
      "XInput": {
        "name": "XInput Standard Controller",
        "properties": [],
        "sticks": {
          "deadzone": 0.08,
          "left": {
            "x": 0, "y": 1, "button": 10
          },
          "right": {
            "x": 2, "y": 3, "button": 11
          }
        },
        "buttons": {
          "dpad": {
            "up": 12, "down": 13, "left": 14, "right": 15
          },
          "face": {
            "down": 0, "right": 1, "left": 2, "up": 3,
            "select": 8, "start": 9
          },
          "shoulder": {
            "l1": 4, "r1": 5, "l2": 6, "r2": 7
          }
        }
      },
      "DInput": {
        "name": "DInput Standard Controller",
        "properties": [],
        "sticks": {
          "deadzone": 0.08,
          "left": {
            "x": 0, "y": 1, "button": 10
          },
          "right": {
            "x": 2, "y": 3, "button": 11
          }
        },
        "buttons": {
          "dpad": {
            "up": 12, "down": 13, "left": 14, "right": 15
          },
          "face": {
            "down": 0, "right": 1, "left": 2, "up": 3,
            "select": 8, "start": 9,
            "home": 16, "touchpad": 17
          },
          "shoulder": {
            "l1": 4, "r1": 5, "l2": 6, "r2": 7
          }
        }
      },
      "2dc86001": {
        "name": "8BitDo SN30 Pro (DInput)",
        "properties": ["axisdpad"],
        "sticks": {
          "deadzone": 0.02,
          "left": {
            "x": 0, "y": 1, "button": 13
          },
          "right": {
            "x": 2, "y": 5, "button": 14
          }
        },
        "buttons": {
          "dpad": {
            "axis": 9,
            "precision": 0.1,
            "up": -1, "upright": -0.8, "right": -0.5, "downright": -0.2,
            "down": 0.1, "downleft": 0.4, "left": 0.7, "upleft": 1
          },
          "face": {
            "right": 0, "down": 1, "up": 3, "left": 4,
            "select": 10, "start": 11,
            "home": 2
          },
          "shoulder": {
            "l1": 6, "r1": 7, "l2": 8, "r2": 9
          }
        }
      },
      "0f301012": {
        "name": "Q4RAF (DInput - PS3.PC)",
        "properties": ["axisdpad", "dpadleftstick"],
        "sticks": {
          "deadzone": 0,
          "left": {
            "x": 0, "y": 1, "button": null
          },
          "right": null
        },
        "buttons": {
          "dpad": {
            "axis": 9,
            "precision": 0.1,
            "up": -1, "upright": -0.8, "right": -0.5, "downright": -0.2,
            "down": 0.1, "downleft": 0.4, "left": 0.7, "upleft": 1
          },
          "face": {
            "down": 0, "right": 1, "left": 2, "up": 3,
            "select": 8, "start": 9
          },
          "shoulder": {
            "r1": 4, "l1": 5, "r2": 6, "l2": 7
          }
        }
      }
    }
    this.store()
  }
}

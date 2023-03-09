function init() {
data = {
    "title": "Custom Title", 
    "catagories": [{
        "name": "Sheep, stone",
        "value": 99,
        "color": "#45b571"
      }, {
        "name": "Iguana, marine",
        "value": 29,
        "color": "#234b2c"
      }, {
        "name": "Ox, musk",
        "value": 48,
        "color": "#849a6e"
      }, {
        "name": "Argalis",
        "value": 95,
        "color": "#da7a5e"
      }, {
        "name": "Gecko, ring-tailed",
        "value": 62,
        "color": "#05a8d1"
      }, {
        "name": "Bat-eared fox",
        "value": 87,
        "color": "#761682"
      }, {
        "name": "Gila monster",
        "value": 8,
        "color": "#a871e3"
      }, {
        "name": "Hawk, ferruginous",
        "value": 29,
        "color": "#dbb6a6"
      }, {
        "name": "Bandicoot, southern brown",
        "value": 4,
        "color": "#734a0f"
      }, {
        "name": "Lizard, mexican beaded",
        "value": 91,
        "color": "#04427e"
      }, {
        "name": "Crane, stanley",
        "value": 13,
        "color": "#63715f"
      }, {
        "name": "Squirrel, european red",
        "value": 15,
        "color": "#56480c"
      }, {
        "name": "Rabbit, eastern cottontail",
        "value": 73,
        "color": "#4ae65c"
      }, {
        "name": "Blue-tongued lizard",
        "value": 78,
        "color": "#034b40"
      }, {
        "name": "Bear, polar",
        "value": 81,
        "color": "#91f833"
      }, {
        "name": "Blue-tongued skink",
        "value": 97,
        "color": "#26df52"
      }, {
        "name": "Cockatoo, roseate",
        "value": 65,
        "color": "#4f4ef6"
      }, {
        "name": "Tortoise, radiated",
        "value": 80,
        "color": "#10194d"
      }, {
        "name": "Griffon vulture",
        "value": 90,
        "color": "#90c918"
      }, {
        "name": "Beaver, american",
        "value": 23,
        "color": "#358649"
      }]
    }
selector="#data_stepped_bar_chart"
create_stepped_bar_chart(selector,data)

data = {
  "title": "Nixpend", 
  "catagories": [{
      "name": "Munes",
      "value": 50,
      "color": "#45b571"
    }, {
      "name": "Muhammad",
      "value": 20,
      "color": "#234b2c"
    }, {
      "name": "Muneeb",
      "value": 10,
      "color": "#4f4ef6"
    }, {
      "name": "Belal",
      "value": 10,
      "color": "#da7a5e"
    }]
  }
selector="#data_stepped_bar_chart_2"
create_stepped_bar_chart(selector,data)
}
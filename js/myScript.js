
var keyData = {
    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
};



var result = [];

function onKeyDown(event) {
    if (keyData[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        // Circle shape
        var myCircle = new Path.Circle({
            center: point,
            radius: 0.01,
            strokeColor: 'black',
            fillColor: keyData[event.key].color
        });

        // Star shape
        var Star = new Path.Star({
            center: point,
            points: 12,
            radius1: 1,
            radius2: 0.01,
            fillColor: keyData[event.key].color
        });

        // Decagon shape
        var decagon = new Path.RegularPolygon({
            center: point,
            sides: 10,
            radius: 0.01,
            fillColor: keyData[event.key].color
        });

        var shapes = [myCircle, Star, decagon];

        var Shape = Math.floor(Math.random() * shapes.length);

        keyData[event.key].sound.play();
        result.push(shapes[Shape]);
    }
}



// Array for keyData
var keyDataArray = [
    {
        audio: {
            sound: new Howl({
                src: ['sounds/bubbles.mp3']
            })
        },
        color: '#1abc9c'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/clay.mp3']
            })
        },
        color: '#2ecc71'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/confetti.mp3']
            })
        },
        color: '#3498db'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/corona.mp3']
            })
        },
        color: '#9b59b6'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/dotted-spiral.mp3']
            })
        },
        color: '#34495e'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/flash-1.mp3']
            })
        },
        color: '#16a085'
    },

    {
        audio: {
            sound: new Howl({
                src: ['sounds/flash-2.mp3']
            })
        },
        color: '#27ae60'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/flash-3.mp3']
            })
        },
        color: '#2980b9'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/glimmer.mp3']
            })
        },
        color: '#8e44ad'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/moon.mp3']
            })
        },
        color: '#2c3e50'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/pinwheel.mp3']
            })
        },
        color: '#f1c40f'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/piston-1.mp3']
            })
        },
        color: '#e67e22'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/piston-2.mp3']
            })
        },
        color: '#e74c3c'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/prism-1.mp3']
            })
        },
        color: '#95a5a6'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/prism-2.mp3']
            })
        },
        color: '#f39c12'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/prism-3.mp3']
            })
        },
        color: '#d35400'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/splits.mp3']
            })
        },
        color: '#1abc9c'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/squiggle.mp3']
            })
        },
        color: '#2ecc71'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/strike.mp3']
            })
        },
        color: '#3498db'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/suspension.mp3']
            })
        },
        color: '#9b59b6'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/timer.mp3']
            })
        },
        color: '#34495e'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/ufo.mp3']
            })
        },
        color: '#16a085'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/veil.mp3']
            })
        },
        color: '#27ae60'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/wipe.mp3']
            })
        },
        color: '#2980b9'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/zig-zag.mp3']
            })
        },
        color: '#8e44ad'
    },
    {
        audio: {
            sound: new Howl({
                src: ['sounds/moon.mp3']
            })
        },
        color: '#2c3e50'
    }
];

function onMouseDown(event) {
    var ff = Math.ceil(Math.random() * keyDataArray.length) - 1;
    var myCircle = new Path.Circle({
        center: event.point,
        radius: 0.01,
        fillColor: keyDataArray[ff].color
    });

    // Star shape
    var Star = new Path.Star({
        center: event.point,
        points: 12,
        radius1: 1,
        radius2: 0.01,
        fillColor: keyDataArray[ff].color
    });

    // Decagon shape
    var decagon = new Path.RegularPolygon({
        center: event.point,
        sides: 10,
        radius: 0.01,
        fillColor: keyDataArray[ff].color
    });

    var shapes = [myCircle, Star, decagon];

    var Shape = Math.floor(Math.random() * shapes.length);
    keyDataArray[ff].audio.sound.play();
    result.push(shapes[Shape]);
}


function onFrame(event) {
    for (var i = 0; i < result.length; i++) {
        result[i].fillColor.hue += 2;
        result[i].scale(1.55);

    }
}
import { tsParticles } from 'tsparticles'

tsParticles.load('tsparticles', {
  background: {
    color: '#111111',
    opacity: 1
  },
  backgroundMask: {
    cover: {
      color: {
        value: '#fff'
      },
      opacity: 1
    },
    enable: false
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: []
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: false,
        mode: []
      },
      onDiv: {
        ids: [],
        enable: false,
        mode: [],
        type: 'circle'
      },
      onHover: {
        enable: false,
        mode: [],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 0.4
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 100,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1
      },
      slow: {
        factor: 3,
        radius: 200
      }
    }
  },
  particles: {
    collisions: {
      enable: false,
      mode: 'bounce'
    },
    color: {
      value: '#fff',
      animation: {
        enable: false,
        speed: 1,
        sync: true
      }
    },
    links: {
      blink: false,
      color: {
        value: '#fff'
      },
      consent: false,
      distance: 100,
      enable: true,
      opacity: 0.2,
      shadow: {
        blur: 15,
        color: {
          value: 'black'
        },
        enable: true
      },
      triangles: {
        enable: true
      },
      width: 0,
      warp: false
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      direction: 'right',
      enable: true,
      noise: {
        delay: {
          random: {
            enable: true,
            minimumValue: 5
          },
          value: 0
        },
        enable: false
      },
      outMode: 'out',
      random: false,
      speed: 0.3,
      straight: true,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000'
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000
      },
      limit: 0,
      value: 100
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0,
        speed: 2,
        sync: false
      },
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 0
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false
      },
      direction: 'clockwise',
      random: false,
      value: 0
    },
    shadow: {
      blur: 15,
      color: {
        value: '#000000'
      },
      enable: true,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {},
      type: 'circle'
    },
    size: {
      animation: {
        destroy: 'none',
        enable: false,
        minimumValue: 0,
        speed: 5,
        startValue: 'max',
        sync: false
      },
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 3
    },
    stroke: {
      color: {
        value: '#ff0000'
      },
      width: 0,
      opacity: 1
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 0
      }
    }
  },
  pauseOnBlur: true
})

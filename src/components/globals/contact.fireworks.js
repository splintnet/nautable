import Particles from "react-tsparticles";

export default function ContactFireworks() {
  const settings = {
    detectRetina: !0,
    background: {
      color: "#000000",
      opacity: 0
    },
    fpsLimit: 120,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: .1,
        delay: .1
      },
      rate: {
        delay: .5,
        quantity: 1
      },
      size: {
        width: 100,
        height: 0
      },
      position: {
        y: 100,
        x: 50
      }
    },
    particles: {
      number: {
        value: 0
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: {
            value: .333333
          },
          rate: {
            value: 100
          },
          particles: {
            stroke: {
              width: 0
            },
            color: {
              value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
            },
            number: {
              value: 0
            },
            collisions: {
              enable: 0
            },
            opacity: {
              value: {
                min: .1,
                max: 1
              },
              animation: {
                enable: 1,
                speed: .7,
                sync: 0,
                startValue: "max",
                destroy: "min"
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: 2,
              animation: {
                enable: 0
              }
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 2
                }
              }
            },
            move: {
              enable: !0,
              gravity: {
                enable: !1
              },
              speed: 2,
              direction: "none",
              random: !0,
              straight: !1,
              outMode: "destroy"
            }
          }
        }
      },
      life: {
        count: 1
      },
      shape: {
        type: "line"
      },
      size: {
        value: {
          min: .1,
          max: 50
        },
        animation: {
          enable: !0,
          sync: !0,
          speed: 90,
          startValue: "max",
          destroy: "min"
        }
      },
      stroke: {
        color: {
          value: "#ffffff"
        },
        width: 1
      },
      rotate: {
        path: !0
      },
      move: {
        enable: !0,
        gravity: {
          acceleration: 15,
          enable: !0,
          inverse: !0,
          maxSpeed: 100
        },
        speed: {
          min: 10,
          max: 20
        },
        outModes: {
          default: "destroy",
          top: "none"
        },
        trail: {
          fillColor: "#000",
          enable: 0,
          length: 10
        }
      }
    }
  }

  return (
    <Particles id="fireworks" className="special-firework" options={settings}/>
  )
}

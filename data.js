var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building",
      "name": "COM1 Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.42480777994177465,
        "pitch": 0,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.15863319193454117,
          "pitch": 0.0003086044148403744,
          "rotation": 0,
          "target": "1-lobby-at-level-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.28716638886581514,
          "pitch": -0.3152740743414384,
          "title": "School of Computing Main Building",
          "text": "COM1, 13 Computing Drive,<div>Singapore 117417</div>"
        }
      ]
    },
    {
      "id": "1-lobby-at-level-1",
      "name": "Lobby at Level 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.8650334161081688,
        "pitch": 0.3006027032591003,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.3910793027858919,
          "pitch": 0.1903202871880083,
          "rotation": 0,
          "target": "0-com1-building"
        },
        {
          "yaw": 2.3796615256359583,
          "pitch": 0.05193906564078965,
          "rotation": 5.497787143782138,
          "target": "2-foyer-at-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3594740945487445,
          "pitch": -0.10734787575900917,
          "title": "To Level 2",
          "text": "Go up to level 2 from here"
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2",
      "name": "Foyer at Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.4651161704245848,
        "pitch": 0.08822835540290619,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -3.0320230083008646,
          "pitch": 0.017230034037988062,
          "rotation": 2.356194490192345,
          "target": "1-lobby-at-level-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.358904631144103,
          "pitch": 0.02534620675536381,
          "title": "Cerebro @ SoC",
          "text": "<div>CYREBRO is a cybersecurity central command managed by SOC that integrates all your security events with strategic monitoring, proactive threat intelligence and rapid incident response.</div>"
        }
      ]
    }
  ],
  "name": "SOC_HY",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

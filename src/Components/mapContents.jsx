import React, { Component } from "react";
import MapContent from "./mapContent";

class MapContents extends Component {
  state = {
    mapContents: [
      {
        participant1: {
          level: 11,
          participantId: 1,
          respawnTimeAtFrame: 108208.77750000008,
          ability: {
            Q: 5,
            W: 1,
            E: 3,
            R: 2,
          },
          stats: {
            kill: 3,
            death: 2,
            assist: 1,
            creepScore: 115,
          },
          items: {
            1: "Doran's Shield",
            2: "Plated Steelcaps",
            3: "Refillable Potion",
            4: "Bramble Vest",
            5: "Trinity Force",
            6: "Ruby Crystal",
          },
          position: {
            x: 1290,
            y: 10653,
          },
          totalDamageDoneToChampions: 5610,
          currentGold: 701,
          totalGold: 7084,
          xp: 7658,
        },
        participant2: {
          level: 8,
          participantId: 2,
          respawnTimeAtFrame: 35428.80099999998,
          ability: {
            Q: 3,
            W: 1,
            E: 3,
            R: 1,
          },
          stats: {
            kill: 2,
            death: 2,
            assist: 1,
            creepScore: 5,
          },
          items: {
            1: "Refillable Potion",
            2: "Boots",
            3: "Sunfire Aegis",
          },
          position: {
            x: 2865,
            y: 11314,
          },
          totalDamageDoneToChampions: 4984,
          currentGold: 1342,
          totalGold: 5492,
          xp: 4890,
        },
        participant3: {
          level: 9,
          participantId: 3,
          respawnTimeAtFrame: 173467.96999999997,
          ability: {
            Q: 5,
            W: 1,
            E: 2,
            R: 1,
          },
          stats: {
            kill: 3,
            death: 3,
            assist: 1,
            creepScore: 93,
          },
          items: {
            1: "Dark Seal",
            2: "Sorcerer's Shoes",
            3: "Nashor's Tooth",
          },
          position: {
            x: 5133,
            y: 5136,
          },
          totalDamageDoneToChampions: 5415,
          currentGold: 288,
          totalGold: 5103,
          xp: 5689,
        },
        participant4: {
          level: 8,
          participantId: 4,
          respawnTimeAtFrame: 164551.68500000006,
          ability: {
            Q: 4,
            W: 2,
            E: 1,
            R: 1,
          },
          stats: {
            kill: 2,
            death: 4,
            assist: 5,
            creepScore: 97,
          },
          items: {
            1: "Doran's Blade",
            2: "Berserker's Greaves",
            3: "Cull",
            4: "Kraken Slayer",
          },
          position: {
            x: 5051,
            y: 1055,
          },
          totalDamageDoneToChampions: 7325,
          currentGold: 37,
          totalGold: 5207,
          xp: 4734,
        },
        participant5: {
          level: 8,
          participantId: 5,
          respawnTimeAtFrame: 182706.91125,
          ability: {
            Q: 2,
            W: 4,
            E: 1,
            R: 1,
          },
          stats: {
            kill: 0,
            death: 4,
            assist: 8,
            creepScore: 9,
          },
          items: {
            1: "Ionian Boots of Lucidity",
            2: "Bandleglass Mirror",
            3: "Kindlegem",
            4: "Shard of True Ice",
          },
          position: {
            x: 12047,
            y: 2062,
          },
          totalDamageDoneToChampions: 3282,
          currentGold: 815,
          totalGold: 4215,
          xp: 4648,
        },
        participant6: {
          level: 10,
          participantId: 6,
          respawnTimeAtFrame: 115079.53125,
          ability: {
            Q: 5,
            W: 3,
            E: 1,
            R: 1,
          },
          stats: {
            kill: 2,
            death: 2,
            assist: 0,
            creepScore: 101,
          },
          items: {
            1: "Blade of The Ruined King",
            2: "Mercury's Treads",
          },
          position: {
            x: 13637,
            y: 13169,
          },
          totalDamageDoneToChampions: 5798,
          currentGold: 94,
          totalGold: 5064,
          xp: 6310,
        },
        participant7: {
          level: 10,
          participantId: 7,
          respawnTimeAtFrame: 199364.5,
          ability: {
            Q: 5,
            W: 3,
            E: 1,
            R: 1,
          },
          stats: {
            kill: 4,
            death: 3,
            assist: 7,
            creepScore: 14,
          },
          items: {
            1: "Refillable Potion",
            2: "Goredrinker",
            3: "Mercury's Treads",
            4: "Pickaxe",
          },
          position: {
            x: 7178,
            y: 10662,
          },
          totalDamageDoneToChampions: 8179,
          currentGold: 407,
          totalGold: 6332,
          xp: 6533,
        },
        participant8: {
          level: 10,
          participantId: 8,
          respawnTimeAtFrame: 0,
          ability: {
            Q: 2,
            W: 5,
            E: 1,
            R: 1,
          },
          stats: {
            kill: 8,
            death: 0,
            assist: 2,
            creepScore: 85,
          },
          items: {
            1: "Dark Seal",
            2: "Manamune",
            3: "Luden's Tempest",
          },
          position: {
            x: 8167,
            y: 8583,
          },
          totalDamageDoneToChampions: 8060,
          currentGold: 194,
          totalGold: 6904,
          xp: 6566,
        },
        participant9: {
          level: 9,
          participantId: 9,
          respawnTimeAtFrame: 132073.57000000007,
          ability: {
            Q: 5,
            W: 1,
            E: 2,
            R: 1,
          },
          stats: {
            kill: 1,
            death: 2,
            assist: 4,
            creepScore: 90,
          },
          items: {
            1: "Kraken Slayer",
            2: "Berserker's Greaves",
          },
          position: {
            x: 13709,
            y: 5532,
          },
          totalDamageDoneToChampions: 3786,
          currentGold: 237,
          totalGold: 4962,
          xp: 5996,
        },
        participant10: {
          level: 8,
          participantId: 10,
          respawnTimeAtFrame: 69837.01949999994,
          ability: {
            Q: 4,
            W: 1,
            E: 2,
            R: 1,
          },
          stats: {
            kill: 0,
            death: 3,
            assist: 12,
            creepScore: 7,
          },
          items: {
            1: "Frostfang",
            2: "Ionian Boots of Lucidity",
            3: "Shurelya's Battlesong",
          },
          position: {
            x: 7201,
            y: 8776,
          },
          totalDamageDoneToChampions: 4049,
          currentGold: 55,
          totalGold: 4080,
          xp: 4134,
        },
        blueTeam: {
          gold: 27101,
          level: 44,
          Dragon: {
            kills: 0,
            KillEvents: [],
          },
          Baron: {
            kills: 0,
            KillEvents: [],
          },
          "Rift Herald": {
            kills: 1,
            KillEvents: [
              {
                type: "RIFTHERALD",
                timeStamp: 681055,
              },
            ],
          },
          Tower: {
            kills: 1,
            KillEvents: [
              {
                laneType: "TOP_LANE",
                towerType: "OUTER_TURRET",
                timeStamp: 728997,
              },
            ],
          },
          Inhibitor: {
            kills: 0,
            KillEvents: [],
          },
        },
        redTeam: {
          gold: 27342,
          level: 47,
          Dragon: {
            kills: 1,
            KillEvents: [
              {
                type: "FIRE_DRAGON",
                timeStamp: 684031,
              },
            ],
          },
          Baron: {
            kills: 0,
            KillEvents: [],
          },
          "Rift Herald": {
            kills: 0,
            KillEvents: [],
          },
          Tower: {
            kills: 0,
            KillEvents: [],
          },
          Inhibitor: {
            kills: 0,
            KillEvents: [],
          },
        },
        timestamp: 900222,
      },
    ],
  };

  unorderedListStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };
  render() {
    return (
      <ul style={this.unorderedListStyle}>
        {this.state.mapContents.map((mapContent, index) => (
          <MapContent key={index} mapContent={mapContent} />
        ))}
      </ul>
    );
  }
}

export default MapContents;

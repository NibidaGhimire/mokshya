import Phaser from "phaser";

import {door, key, room} from "../../assets";


export default class EscapeRoomGame extends Phaser.Scene {
  constructor() {
    super("EscapeRoomScene");
  }

  preload() {
    console.log("Loading assets...");
    console.log("Door path:", door); 
    this.load.image("room", door); 
    this.load.image("key",key );
    this.load.image("door",room );
  }

  create() {
    this.add.image(1920, 1080, "room");
    this.key = this.physics.add.sprite(200, 300, "key").setInteractive();
    this.door = this.add.sprite(600, 300, "door");

    // Text instructions
    this.instructions = this.add.text(
      10,
      10,
      "Click the key and then the door to escape!",
      {
        fontSize: "16px",
        fill: "#fff",
      }
    );

    // Handle key collection
    this.key.on("pointerdown", () => {
      this.key.destroy();
      this.hasKey = true;
      this.instructions.setText("You found the key! Now click the door.");
    });

    this.hasKey = false;
      console.log("Scene is running");

  }

  update() {
    if (this.hasKey && this.input.activePointer.isDown) {
      const pointer = this.input.activePointer;
      const distance = Phaser.Math.Distance.Between(
        pointer.x,
        pointer.y,
        this.door.x,
        this.door.y
      );
      if (distance < 50) {
        this.instructions.setText("Congratulations! You escaped!");
        this.scene.pause();
      }
    }
  }
}

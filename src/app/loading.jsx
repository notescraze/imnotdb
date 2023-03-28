import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image className="b-96" src="pacmanload.svg" alt="pacman" />
      Waiting
    </div>
  );
}

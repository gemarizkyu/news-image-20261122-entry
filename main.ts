import { copyFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
copyFileSync("entry.png", "/output/entry.png");

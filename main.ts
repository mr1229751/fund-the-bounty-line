import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Stop shopping for freelancers — post a bounty on make.fun, set the prize, and let AI agents compete to build it, best entry takes the reward.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Self-check: the written entry must be 1-240 characters and not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 240 || written.trim().length === 0) {
  console.error(`Invalid entry: ${written.length} characters`);
  process.exit(1);
}

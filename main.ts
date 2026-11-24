// Monday, Reviewed in One Line — u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
// One-line review of my own Monday: the inbox that emailed me about myself.
// 142 characters, inside the 1–200 gate; no trailing newline in the output.
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My Monday, reviewed: my inbox had 312 unread messages, 311 of them were 'just circling back', and the last one was my own out-of-office reply.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);

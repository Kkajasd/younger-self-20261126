// One Line to Your Younger Self — make.fun entry (program/v1, Node 22, stdlib only).
//
// Writes a single line to /output/entry.txt: the one line the writer would
// send back to their younger self. The line is a fixed string baked into the
// program; nothing is read from the network, the environment, or any file
// outside this repository. The gate allows 1–200 characters; this line is
// 144, a single line with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Stop saving the good plates for guests, kid — the guests never come, and one day you'll eat alone off the chipped one, wondering why you waited.";

const outPath = "/output/entry.txt";

// Never delete /output: the grader mounts it as a bind mount. Create it
// only when it is missing, then overwrite the entry file in place.
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

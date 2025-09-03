import findFreePort from "find-free-port";
import { spawn } from "child_process";

findFreePort(3000).then(([port]) => {
  console.log(`✅ Starting Next.js on port ${port}`);
  const dev = spawn("npx", ["next", "dev", "--turbopack", "-p", port], {
    stdio: "inherit",
    shell: true,
  });

  dev.on("close", (code) => {
    console.log(`Next.js exited with code ${code}`);
  });
});

import { defineConfig } from "taze";

export default defineConfig({
  recursive: true,
  ignoreOtherWorkspaces: true,
  includeLocked: true,
  maturityPeriod: 3,
});

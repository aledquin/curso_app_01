import { defineConfig } from "vitest/config";

const TEST_INCLUDE_PATTERNS = ["test/**/*.test.ts"];

export default defineConfig({
  test: {
    include: TEST_INCLUDE_PATTERNS
  }
});

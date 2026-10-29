# Advanced Functional Programming

Practice for advanced functional programming in JavaScript, following the Advanced SE Batch 7 course.

Course repository: [mrthetkhine/AdvancedSEBatch7](https://github.com/mrthetkhine/AdvancedSEBatch7)


Open `index.html` in a browser and check the developer console.

Functional Porgramming 2 Pillar

1. Referential Transparency
- Definition: Replace a function call with its final value safely.
- Memory Hook: "The Swap Test" (e.g., add(2, 2) is always just 4).
- Core Rule: Pure functions only, meaning zero side effects.
- Benefit: Perfect predictability, easy testing, and safe parallelism.

2. Composition
- Definition: Chain small functions so one's output becomes the next's input.
- Memory Hook: "Lego Bricks" (snapping small pieces together).
- Core Rule: Combine functions like a mathematical pipeline (f(g(x))).
- Benefit: Cleans up messy loops by removing temporary variables.

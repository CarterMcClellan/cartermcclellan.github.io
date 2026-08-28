export interface Project {
  name: string;
  description: string;
  tags: string[];
  href: string;
  mark: string;
  accent: string;
  tint: string;
}

export const projects: Project[] = [
  {
    name: "Glyph",
    description:
      "Selection-aware, recoverable 3D editing with natural language, image references, Codex, Blender, and NVIDIA TRELLIS.2.",
    tags: ["Python", "Electron", "3D"],
    href: "https://github.com/CarterMcClellan/glyph",
    mark: "3D",
    accent: "#ff552e",
    tint: "#ffe0d8",
  },
  {
    name: "supercontrast",
    description:
      "A unified Python interface for running common machine-learning tasks across AWS, Azure, GCP, OpenAI, Anthropic, and more.",
    tags: ["Python", "ML", "YC F24"],
    href: "https://github.com/CarterMcClellan/supercontrast-legacy",
    mark: "SC",
    accent: "#ff9f1c",
    tint: "#ffebc9",
  },
  {
    name: "diffvg-torch",
    description:
      "A fast, pure-PyTorch differentiable vector rasterizer with batched GPU rendering and full gradient support.",
    tags: ["PyTorch", "CUDA", "SVG"],
    href: "https://github.com/CarterMcClellan/diffvg-torch",
    mark: "∂",
    accent: "#265dff",
    tint: "#dce5ff",
  },
  {
    name: "Bogey Archipelago",
    description:
      "A procedural Three.js mini-golf puzzle with tiny island courses, shifting hazards, music, and daily scorecards.",
    tags: ["JavaScript", "Three.js", "Game"],
    href: "https://github.com/CarterMcClellan/bogey-archipelago",
    mark: "09",
    accent: "#16a56a",
    tint: "#d8f4e7",
  },
  {
    name: "canvas-rs",
    description:
      "A GPU-accelerated canvas editor in Rust and Yew for selecting, moving, and resizing groups of shapes.",
    tags: ["Rust", "Yew", "WebGPU"],
    href: "https://github.com/CarterMcClellan/canvas-rs",
    mark: "RS",
    accent: "#d83a8a",
    tint: "#f8dbea",
  },
  {
    name: "Rustiator",
    description:
      "A Rust chess server and browser client for running two engines head-to-head and watching every move.",
    tags: ["Rust", "Chess", "WebSockets"],
    href: "https://github.com/CarterMcClellan/Rustiator",
    mark: "♞",
    accent: "#7c49d8",
    tint: "#e9def8",
  },
  {
    name: "Cheeky Bot Lang",
    description:
      "A small programming language built in Rust, complete with a scanner, parser, interpreter, and browser-ready WASM REPL.",
    tags: ["Rust", "WASM", "Language"],
    href: "https://github.com/CarterMcClellan/cbl",
    mark: "{ }",
    accent: "#11110f",
    tint: "#e2dfd6",
  },
  {
    name: "LLM Plays Pokémon",
    description:
      "An experiment in teaching an AI agent to play Pokémon Red from pixels and actions, without privileged game state.",
    tags: ["Python", "Agents", "Research"],
    href: "https://github.com/CarterMcClellan/llm-plays-pokemon",
    mark: "PK",
    accent: "#e42a2a",
    tint: "#f9dada",
  },
];

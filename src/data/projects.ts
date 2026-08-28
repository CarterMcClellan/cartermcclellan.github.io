export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
}

export const projects: Project[] = [
  {
    id: "glyph",
    name: "Glyph",
    description:
      "Selection-aware, recoverable 3D editing with natural language, image references, Codex, Blender, and NVIDIA TRELLIS.2.",
    tags: ["Python", "Electron", "3D"],
    href: "https://github.com/CarterMcClellan/glyph",
  },
  {
    id: "supercontrast",
    name: "supercontrast",
    description:
      "A unified Python interface for running common machine-learning tasks across AWS, Azure, GCP, OpenAI, Anthropic, and more.",
    tags: ["Python", "ML", "YC F24"],
    href: "https://github.com/CarterMcClellan/supercontrast-legacy",
  },
  {
    id: "diffvg",
    name: "diffvg-torch",
    description:
      "A fast, pure-PyTorch differentiable vector rasterizer with batched GPU rendering and full gradient support.",
    tags: ["PyTorch", "CUDA", "SVG"],
    href: "https://github.com/CarterMcClellan/diffvg-torch",
  },
  {
    id: "bogey",
    name: "Bogey Archipelago",
    description:
      "A procedural Three.js mini-golf puzzle with tiny island courses, shifting hazards, music, and daily scorecards.",
    tags: ["JavaScript", "Three.js", "Game"],
    href: "https://github.com/CarterMcClellan/bogey-archipelago",
  },
  {
    id: "canvas",
    name: "canvas-rs",
    description:
      "A GPU-accelerated canvas editor in Rust and Yew for selecting, moving, and resizing groups of shapes.",
    tags: ["Rust", "Yew", "WebGPU"],
    href: "https://github.com/CarterMcClellan/canvas-rs",
  },
  {
    id: "rustiator",
    name: "Rustiator",
    description:
      "A Rust chess server and browser client for running two engines head-to-head and watching every move.",
    tags: ["Rust", "Chess", "WebSockets"],
    href: "https://github.com/CarterMcClellan/Rustiator",
  },
  {
    id: "cbl",
    name: "Cheeky Bot Lang",
    description:
      "A small programming language built in Rust, complete with a scanner, parser, interpreter, and browser-ready WASM REPL.",
    tags: ["Rust", "WASM", "Language"],
    href: "https://github.com/CarterMcClellan/cbl",
  },
  {
    id: "pokemon",
    name: "LLM Plays Pokémon",
    description:
      "An experiment in teaching an AI agent to play Pokémon Red from pixels and actions, without privileged game state.",
    tags: ["Python", "Agents", "Research"],
    href: "https://github.com/CarterMcClellan/llm-plays-pokemon",
  },
];

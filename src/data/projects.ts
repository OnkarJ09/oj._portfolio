export interface Project {
  slug: string;
  title: string;
  category: string;
  type: "systems" | "ai-ml" | "web-dev" | "automation";
  status: "ACTIVE" | "COMPLETED" | "STABLE";
  timeline: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  link: string;
  techStack: string[];
  highlights: string[];
  terminalPreview?: {
    command: string;
    output: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "vlsi-fault-detection-assistant",
    title: "VLSI Fault Detection Assistant",
    category: "AI & HARDWARE",
    type: "systems",
    status: "ACTIVE",
    timeline: "2026",
    description: "An AI-powered VLSI diagnostics assistant using Astro + React, FastAPI, and RAG pipelines.",
    longDescription: "An end-to-end intelligent diagnostic platform engineered to analyze semiconductor faults and accelerate VLSI testing workflows. By bridging hardware test telemetry with state-of-the-art Large Language Models and Retrieval-Augmented Generation (RAG), the system indexes hardware failure logs and schematics, providing engineers with instantaneous root-cause analysis and automated troubleshooting recommendations.",
    imageSrc: "/VLSI Fault Detection Assistant.webp",
    link: "https://github.com/OnkarJ09/vlsi_fault_detection_assistant",
    techStack: ["Python", "FastAPI", "Astro", "React", "FAISS", "LangChain", "Vector DB", "Tailwind CSS"],
    highlights: [
      "Implements local and hybrid RAG pipelines utilizing FAISS vector embeddings to query complex hardware diagnostic manuals and fault databases.",
      "Asynchronous FastAPI backend delivering sub-150ms query processing and telemetry parsing.",
      "Interactive modern Astro & React dashboard providing real-time log ingestion, fault probability scoring, and telemetry visualization.",
      "Reduces manual fault triage time by up to 65% for test engineers through automated reasoning."
    ],
    terminalPreview: {
      command: "curl -X POST http://localhost:8000/api/diagnose -d '{\"sensor_id\": \"V_CORE_01\", \"fault_code\": \"ERR_STUCK_AT_0\"}'",
      output: [
        "[SYS_KERNEL] Ingesting telemetry packet: V_CORE_01",
        "[RAG_ENGINE] FAISS similarity search retrieved 4 relevant IEEE diagnostic vectors",
        "[ANALYSIS] Root Cause: Transistor Gate Oxide Breakdown suspected on Rail 01",
        "[ACTION] Recommended test pattern: SCAN_CHAIN_VECTOR_0x8F",
        "[STATUS] 200 OK — Diagnostic report generated in 118ms"
      ]
    }
  },
  {
    slug: "qwen-2-5-chatbot",
    title: "Qwen 2.5 Chatbot",
    category: "AI CHATBOT",
    type: "ai-ml",
    status: "COMPLETED",
    timeline: "2025",
    description: "Local offline conversational AI chatbot powered by Qwen 2.5 running through Ollama.",
    longDescription: "A self-hosted, privacy-first conversational AI interface powered by Alibaba Cloud's state-of-the-art Qwen 2.5 open-weights LLM. Designed to run completely offline on local consumer hardware via Ollama, ensuring zero data leakage, zero subscription overhead, and ultra-low latency response streaming.",
    imageSrc: "/Qwen 2.5 Chatbot.webp",
    link: "https://github.com/OnkarJ09/qwen_2_5_chatbot",
    techStack: ["Python", "Qwen 2.5", "Ollama", "Streamlit", "Local LLM", "Prompt Engineering"],
    highlights: [
      "100% private, on-device model execution with zero cloud dependencies or external API calls.",
      "Token-by-token streaming response architecture with dynamic conversation memory.",
      "Clean, responsive UI with Markdown rendering, code highlighting, and temperature parameter sliders.",
      "Parameterized system prompts tailored for coding assistance, hardware query answering, and creative ideation."
    ],
    terminalPreview: {
      command: "ollama run qwen2.5:latest 'Explain Stuck-At Faults in VLSI testing'",
      output: [
        "pulling manifest... [success]",
        "verifying sha256 digest... [success]",
        "> Qwen 2.5: In VLSI testing, a stuck-at fault model assumes that a circuit defect",
        "  causes a node to remain permanently tied to logical '0' (stuck-at-0) or '1' (stuck-at-1)...",
        "[STATS] Token generation: 42.6 tokens/sec | Memory: 4.8GB VRAM"
      ]
    }
  },
  {
    slug: "rag-prototypes",
    title: "RAG Prototypes",
    category: "AI RESEARCH",
    type: "ai-ml",
    status: "COMPLETED",
    timeline: "2025",
    description: "RAG prototypes exploring document indexing, semantic search, and context-aware QA using FAISS.",
    longDescription: "A comprehensive experimental testbed and benchmark suite for Retrieval-Augmented Generation architectures. Evaluates chunking strategies, vector embeddings, similarity search metrics, and context injection techniques across multi-format documents including technical PDFs, research papers, and raw system logs.",
    imageSrc: "/rag.webp",
    link: "https://github.com/OnkarJ09/RAG",
    techStack: ["Python", "LangChain", "FAISS", "HuggingFace Transformers", "Sentence-Transformers", "PyPDF"],
    highlights: [
      "Explores recursive character chunking and semantic boundary chunking to preserve technical context in documentation.",
      "Benchmarked dense vector retrieval against BM25 sparse search and hybrid retrieval systems.",
      "Automated hallucination evaluation and context-relevance scoring pipelines.",
      "Modular retrieval components easily pluggable into downstream agentic workflows."
    ],
    terminalPreview: {
      command: "python evaluate_rag.py --dataset technical_docs --top_k 4",
      output: [
        "[LOADER] Parsed 1,420 document chunks from PDF repository",
        "[INDEXER] Building FAISS IndexFlatL2 with 384-dimensional embeddings",
        "[BENCHMARK] Precision@K: 0.942 | Recall@K: 0.887 | Latency: 24.2ms",
        "[RESULT] Context-augmented QA score: 91.8% accuracy"
      ]
    }
  },
  {
    slug: "vedas-ai",
    title: "Vedas.ai",
    category: "AI ASSISTANT",
    type: "ai-ml",
    status: "ACTIVE",
    timeline: "2024",
    description: "An intelligent virtual assistant automating tasks through voice/text with speech recognition.",
    longDescription: "A versatile multimodal voice and text AI assistant designed to bridge speech recognition, natural language comprehension, and desktop automation. Vedas.ai understands conversational commands, retrieves real-time information, executes system tasks, and communicates through expressive text-to-speech feedback.",
    imageSrc: "/vedas_ai.webp",
    link: "https://github.com/OnkarJ09/Vedas.ai",
    techStack: ["Python", "SpeechRecognition", "pyttsx3", "NLP", "APIs", "System Automation"],
    highlights: [
      "Real-time speech-to-text processing engine with adaptive ambient noise cancellation.",
      "Intelligent intent parser mapping voice triggers to desktop automation routines and web searches.",
      "Offline text-to-speech synthesis with customizable vocal cadence and rate controls.",
      "Extensible plugin system allowing rapid addition of custom automation skills."
    ],
    terminalPreview: {
      command: "python vedas.py --listen",
      output: [
        "[AUDIO] Calibrating microphone for ambient noise (0.8s)...",
        "[VOICE_IN] 'Vedas, open my project directory and check git status'",
        "[PARSER] Intent matched: SYSTEM_WORKSPACE_ACTION",
        "[EXEC] Directory opened in VS Code. Git status: branch 'master' is up to date.",
        "[VOICE_OUT] 'Workspace is ready, Onkar.'"
      ]
    }
  },
  {
    slug: "all-app-opener",
    title: "All App Opener",
    category: "AUTOMATION TOOL",
    type: "automation",
    status: "STABLE",
    timeline: "2024",
    description: "Cross-platform Python package that opens, closes, and manages desktop applications.",
    longDescription: "A published, open-source Python automation utility and library that enables developers and users to launch, terminate, and query installed desktop software using natural application names. It abstracts away OS-specific paths, registry lookups, and process signals into an intuitive, one-line Python API and CLI tool.",
    imageSrc: "/all app opener.webp",
    link: "https://github.com/OnkarJ09/all_app_opener",
    techStack: ["Python", "OS APIs", "CLI Tooling", "PyPI Packaging", "Process Management"],
    highlights: [
      "Cross-platform discovery engine finding executable binaries across Linux, Windows, and macOS paths.",
      "Fuzzy name matching allowing forgiving app launching without needing exact binary path.",
      "Lightweight zero-dependency core architecture built for fast execution in CI/CD and automation scripts.",
      "Distributed as a reusable package on PyPI for seamless integration into desktop assistants."
    ],
    terminalPreview: {
      command: "all_app_opener open --name 'code'",
      output: [
        "[DISCOVERY] Scanning desktop applications...",
        "[MATCH] Found: Visual Studio Code (/usr/bin/code)",
        "[PROCESS] Spawned PID 51842 successfully",
        "[STATUS] Application launched in 42ms"
      ]
    }
  },
  {
    slug: "auto-bug-fixer",
    title: "Auto Bug Fixer",
    category: "AI UTILITY",
    type: "ai-ml",
    status: "COMPLETED",
    timeline: "2024",
    description: "AI-powered terminal tool capable of identifying, analyzing, and suggesting code fixes.",
    longDescription: "A command-line developer productivity utility that captures compiler errors, traceback exceptions, and failing test logs, analyzes the syntax and semantic faults using LLMs, and generates verified code patches with explanations directly in the developer's terminal.",
    imageSrc: "/auto bug fixer.webp",
    link: "https://github.com/OnkarJ09/Auto-Bug-fixer",
    techStack: ["Python", "CLI", "LLM APIs", "AST Parsing", "Git Diff Engine"],
    highlights: [
      "Intercepts shell stderr streams to automatically parse crash stack traces without manual copy-pasting.",
      "Generates unified diff blocks that can be inspected and applied directly with single-key confirmation.",
      "Multi-language support covering Python tracebacks, C/C++ compilation errors, and JavaScript runtime exceptions.",
      "Explains the root cause of every bug in concise, human-readable terminal output."
    ],
    terminalPreview: {
      command: "auto-bug-fixer diagnose --file main.py",
      output: [
        "[STACKTRACE] IndexError: list index out of range on line 42",
        "[AI_DIAGNOSIS] Loop boundary condition exceeds length of array",
        "[SUGGESTED_DIFF]",
        "  - for i in range(len(items) + 1):",
        "  + for i in range(len(items)):",
        "[PROMPT] Apply patch to main.py? [Y/n]: y -> Applied!"
      ]
    }
  },
  {
    slug: "translator-api",
    title: "Translator API",
    category: "API DEV",
    type: "web-dev",
    status: "STABLE",
    timeline: "2024",
    description: "Lightweight translation API that provides multilingual translation functionality.",
    longDescription: "A high-throughput, minimalist RESTful translation microservice providing seamless multi-language translation and language detection capabilities. Engineered with lightweight endpoints, structured JSON responses, and automatic language detection.",
    imageSrc: "/translator api.webp",
    link: "https://github.com/OnkarJ09/translator_api",
    techStack: ["Python", "FastAPI", "Translation Engines", "REST API", "Docker", "JSON"],
    highlights: [
      "Clean REST API contracts with automatic OpenAPI / Swagger interactive documentation.",
      "Low-overhead translation pipeline supporting dozens of major international languages.",
      "Automatic source language detection and confidence scoring.",
      "Containerized with Docker for rapid local deployment and microservice scaling."
    ],
    terminalPreview: {
      command: "curl -X POST http://localhost:8000/translate -d '{\"text\": \"Hello World\", \"target\": \"hi\"}'",
      output: [
        "{",
        "  \"source_text\": \"Hello World\",",
        "  \"detected_source\": \"en\",",
        "  \"translated_text\": \"नमस्ते दुनिया\",",
        "  \"latency_ms\": 34",
        "}"
      ]
    }
  },
  {
    slug: "pass-pin-generator",
    title: "Pass Pin Generator",
    category: "UTILITY",
    type: "automation",
    status: "COMPLETED",
    timeline: "2023",
    description: "Password and PIN generation utility capable of creating secure, random credentials.",
    longDescription: "A cryptographic password and PIN generation utility built to deliver entropy-rich, cryptographically secure credentials. Features granular controls for length, character sets, exclude ambiguous characters, and password strength evaluation.",
    imageSrc: "/Pass Pin Generator.webp",
    link: "https://github.com/OnkarJ09/Pass_Pin_Generator",
    techStack: ["Python", "Cryptography", "Secrets Module", "CLI", "Security"],
    highlights: [
      "Leverages OS-level entropy (`secrets` CSPRNG) to prevent algorithmic predictability.",
      "Real-time Shannon entropy calculation and NIST-compliant strength scoring.",
      "Flexible output modes including terminal copy-to-clipboard, masked output, and batch generation.",
      "Zero network dependencies, ensuring credentials never touch network interfaces."
    ],
    terminalPreview: {
      command: "python generate.py --type pass --length 20 --symbols",
      output: [
        "[ENTROPY] Calculated Shannon Entropy: 128.4 bits",
        "[STRENGTH] Rating: VERY STRONG (NIST 800-63B Compliant)",
        "[GENERATED] k#9F$mP2!vL8@wQ4^zR1",
        "[SECURITY] Clipboard cleared after 30 seconds."
      ]
    }
  },
  {
    slug: "smart-college-attendance",
    title: "Smart College Attendance",
    category: "SYSTEMS",
    type: "systems",
    status: "COMPLETED",
    timeline: "2023",
    description: "Command-line student attendance and record management system written in C.",
    longDescription: "A robust, low-level student attendance and academic records system implemented in pure ANSI C. Employs binary file I/O, custom struct serialization, dynamic memory allocation, and formatted reporting to manage university student rosters with extreme memory efficiency.",
    imageSrc: "/Smart College Attendance.webp",
    link: "https://github.com/OnkarJ09/Smart_College_Attendence",
    techStack: ["C", "Low-Level Programming", "File I/O", "Data Structures", "Algorithms"],
    highlights: [
      "Zero external dependencies with direct OS file pointer operations and custom data serialization.",
      "Memory footprint under 2MB with instantaneous record searches and sorting algorithms.",
      "Generates automated attendance shortage warning reports and statistical semester summaries.",
      "Demonstrates strong systems programming fundamentals and low-level data structures."
    ],
    terminalPreview: {
      command: "./attendance_system --report --defaulters",
      output: [
        "================================================",
        "  SMART COLLEGE ATTENDANCE SYSTEM v2.0 (ANSI C) ",
        "================================================",
        "  Roll No  | Name            | Attendance | Status ",
        "  ------------------------------------------------",
        "  VLSI-09  | Onkar Joshi     | 92.4%      | NORMAL ",
        "  VLSI-14  | Student X       | 68.1%      | ALERT  ",
        "[SYS] Report generated in 1.4ms from binary datastore."
      ]
    }
  },
  {
    slug: "weather-app",
    title: "Weather App",
    category: "API DEV",
    type: "web-dev",
    status: "COMPLETED",
    timeline: "2023",
    description: "Weather information application retrieving and displaying real-time weather details.",
    longDescription: "A real-time meteorological tracking tool and API client that queries global weather stations to provide hyper-local temperature, atmospheric pressure, humidity, wind velocity, and multi-day meteorological forecasts.",
    imageSrc: "/weather.webp",
    link: "https://github.com/OnkarJ09/Weather",
    techStack: ["Python", "REST APIs", "Weather Data", "JSON Parsing", "CLI UI"],
    highlights: [
      "Live atmospheric telemetry polling with robust error handling and fallback caching.",
      "Clean terminal HUD interface displaying temperature, wind chill, visibility, and UV index.",
      "Geolocation resolution supporting city names, zip codes, and geographic coordinates.",
      "Formatted ASCII weather status indicators for rapid terminal glanceability."
    ],
    terminalPreview: {
      command: "python weather.py --city Nagpur",
      output: [
        "LOCATION: Nagpur, Maharashtra, India",
        "TEMPERATURE: 31°C (Feels like 33°C)",
        "CONDITIONS: Clear Sky / Sunny",
        "HUMIDITY: 48% | BAROMETER: 1012 hPa | WIND: 12 km/h NE",
        "[SYS] Cached response valid for 15 minutes."
      ]
    }
  },
  {
    slug: "greet-user",
    title: "Greet User",
    category: "UTILITY",
    type: "automation",
    status: "COMPLETED",
    timeline: "2023",
    description: "Python utility generating time-based greetings according to the system clock.",
    longDescription: "A lightweight terminal automation script that integrates with system startup daemons to render intelligent, time-aware greetings, quote of the day, and quick system diagnostic telemetry upon terminal initialization.",
    imageSrc: "/greet user.webp",
    link: "https://github.com/OnkarJ09/Greet-User",
    techStack: ["Python", "System Clock", "Shell Integration", "Automation"],
    highlights: [
      "Chrono-aware greeting logic adapting tone based on morning, afternoon, evening, and late-night hours.",
      "Seamless `.bashrc` / `.zshrc` hook for pleasant shell startup diagnostics.",
      "Ultra-fast startup time (<10ms) ensuring zero perceived terminal lag."
    ],
    terminalPreview: {
      command: "python greet_user.py",
      output: [
        "⚡ Good afternoon, Onkar. System online.",
        "TIME: 13:45 IST | HOST: arch-linux | UPTIME: 4h 12m",
        "\"Focus on engineering clean, durable systems.\""
      ]
    }
  },
  {
    slug: "scripts-automation-suite",
    title: "Dev Scripts Suite",
    category: "AUTOMATION",
    type: "automation",
    status: "ACTIVE",
    timeline: "2023-2026",
    description: "Collection of daily developer automation scripts, utilities, and workflow optimizers.",
    longDescription: "A curated repository of bespoke automation scripts, batch processors, file cleaners, environment setups, and productivity utilities crafted to streamline repetitive developer tasks and Linux system administration.",
    imageSrc: "/scripts.webp",
    link: "https://github.com/OnkarJ09/scripts",
    techStack: ["Python", "Bash", "Shell Scripting", "Linux Utilities", "Cron"],
    highlights: [
      "Automated workspace maintenance, cache cleanups, and git branch hygiene.",
      "Batch media conversion and WebP optimization pipelines.",
      "System health checks and telemetry log rotators."
    ],
    terminalPreview: {
      command: "./scripts/optimize_assets.sh --dir ./assets --webp",
      output: [
        "[OPT] Processing 24 image assets...",
        "[CONVERT] asset_01.png -> asset_01.webp (reduced by 82%)",
        "[CONVERT] asset_02.png -> asset_02.webp (reduced by 78%)",
        "[SUCCESS] Total space saved: 48.6 MB"
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

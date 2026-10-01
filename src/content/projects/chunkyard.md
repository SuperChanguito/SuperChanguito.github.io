---
title: Chunkyard
tagline: See how chunking strategy changes what a RAG system retrieves, with three strategies side by side, all running on your own computer.
date: 2026-10-01
status: beta
platforms: ["Windows", "Web (runs locally)"]
tech: ["Python", "FastAPI", "sentence-transformers", "JavaScript"]
builtWith: ["Claude Code"]
repo: https://github.com/SuperChanguito/Chunkyard
accent: "#1d4ed8"
featured: true
---

Before a RAG system can answer questions about a document, it has to cut that document into chunks, and how it cuts matters more than you'd think. Chunkyard makes that visible. Upload a text file or PDF, ask a question, and see the top five chunks from three different strategies side by side.

In one test on a real FDA drug label, splitting by paragraph gave its highest score (0.88) to a chunk that just said "Storage of REPATHA:", a heading with no answer in it. The section-aware strategy returned the actual storage instructions with their heading attached.

## Features

- **Three chunking strategies** compared on the same document and question:
  - **Fixed size with overlap:** simple, but cuts mid-word and mid-sentence
  - **Paragraph boundaries:** clean breaks, but headings end up separated from their content
  - **Section-aware:** keeps each heading attached and adds the full heading path (like `Warranty > What's covered`) to every chunk
- **Similarity scores** for every retrieved chunk
- **Disagreement highlighting** that flags passages only one strategy found and shows whether all three agree on the best match
- **Document map** that shows where each strategy's hits sit in the document
- **Warnings** for chunks too short to be useful, or too long for the embedding model to fully read
- **PDF support** that strips page headers and footers and recognizes numbered headings like "2.1 Dosage"
- **Fully local:** a free sentence-transformers model runs on your computer. No API key, and your documents never leave your machine.
- **Sample document** included, so you can try it in seconds

## How to install

1. Install [uv](https://docs.astral.sh/uv/), a small Python tool manager. On Windows: `winget install astral-sh.uv`
2. Download or clone the [repo](https://github.com/SuperChanguito/Chunkyard).
3. On Windows, double-click **Start Chunkyard.bat**. On Mac or Linux, run `uv run python -m chunkyard` in the folder.

The first start downloads Python, the libraries, and a ~90 MB embedding model. After that it works offline.

## How to use it

Click **Use the sample tent manual** and try one of the suggested questions, or drop in your own .txt, .md, or .pdf file. Hover over a result to highlight the matching passages in the other columns. Change the chunk sizes and click **Re-chunk** to see how the results shift.

> What kind of document would you test this on? Tell me if one strategy surprised you.

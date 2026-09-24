---
title: UScan3D
tagline: Scan real objects with your iPhone and export print-ready STL or 3MF files for your 3D printer.
date: 2026-09-01
status: in-progress
platforms: ["iOS"]
tech: ["Swift", "RealityKit", "SceneKit"]
builtWith: ["Claude Code"]
repo: https://github.com/SuperChanguito/UScan3D
download:
  label: Get the build (GitHub)
  url: https://github.com/SuperChanguito/UScan3D
accent: "#0f9d8a"
featured: true
---

UScan3D turns an iPhone Pro into a 3D scanner for your printer. Walk around an object, let the app build a mesh on the device, then send a clean, watertight file straight to a Bambu Lab printer.

## Features

- **Guided capture** with live point-cloud feedback and prompts to get full 360° coverage
- **On-device reconstruction** into a textured USDZ mesh (no cloud upload)
- **3D preview** with orbit and zoom
- **Mesh repair** that fills holes so exports are watertight
- **Flat-base cutting** so the model sits flush on the print plate
- **Export** as binary STL or 3MF (Bambu's native format)
- **Direct upload** to a Bambu X1 Carbon over your local network
- **Face-scan mode** for printing busts

## Requirements

- iPhone 12 Pro or newer (needs the LiDAR sensor)
- iOS 17 or later

## How to install

There's no App Store release yet. The app is built for free on GitHub Actions and sideloaded with [AltStore](https://altstore.io). See the repo's README for step-by-step instructions. You don't need a Mac.

> Would you use this if it were on the App Store? Let me know in the comments.

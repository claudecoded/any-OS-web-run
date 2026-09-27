# Universal Web OS Emulator

A lightweight, client-side x86 PC emulator running entirely in the browser using WebAssembly (via v86). This project allows users to upload any bootable operating system image (`.iso`, `.img`, `.bin`) and run it instantly inside a web tab without any backend server.

## 🚀 Live Demo
*(Leave this blank for now, you will paste your GitHub Pages link here later)*

## ✨ Features
- **100% Client-Side:** No server architecture required. Your files never leave your computer.
- **Universal Boot:** Works with lightweight Linux distros, KolibriOS, FreeDOS, Windows 95/98, and other x86 operating systems.
- **Hardware Simulation:** Simulates VGA screen, mouse, keyboard, and up to 512MB of RAM dynamically.

## 🛠️ How to Use
1. Access the live website link.
2. Click on **"Choose ISO/IMG File"** and select a valid bootable OS file from your computer.
3. Click **"Boot OS"** and wait a few seconds for the WebAssembly runtime to load your system.

## 📝 Technologies Used
- HTML5 / CSS3 / JavaScript (ES6)
- [v86 Emulator Library](https://github.com) (WebAssembly / Rust / JS)

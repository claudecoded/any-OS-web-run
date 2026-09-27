let selectedFile = null;
const fileInput = document.getElementById('iso-file');
const startBtn = document.getElementById('start-btn');
const fileLabel = document.querySelector('.custom-file-upload');

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        selectedFile = e.target.files[0];
        fileLabel.textContent = `Selected: ${selectedFile.name}`;
        startBtn.disabled = false;
    }
});

startBtn.addEventListener('click', () => {
    if (!selectedFile) return;

    startBtn.disabled = true;
    startBtn.textContent = "Booting...";

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const buffer = e.target.result;

        // Initializing the v86 emulator instance
        const emulator = new V86Starter({
            wasm_path: "https://copy.sh",
            memory_size: 512 * 1024 * 1024, // 512MB RAM (Adjustable)
            vga_as_canvas: true,
            canvas: document.getElementById("vga-screen"),
            cdrom: {
                buffer: buffer // Passing your uploaded ISO/IMG into the virtual CD-ROM drive
            },
            autostart: true,
        });
    };

    // Read the file as an ArrayBuffer for the emulator
    reader.readAsArrayBuffer(selectedFile);
});

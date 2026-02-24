document.addEventListener("DOMContentLoaded", () => {
    const mapImg = document.getElementById("de-map");
    const pinsLayer = document.getElementById("pins-layer");
    const areas = document.querySelectorAll("#image-map-data area");

    // Original dimensions of the map image (used in the image map coordinates)
    // Update these if your image map was generated with different dimensions!
    const origWidth = 1000;
    const origHeight = 1000;

    let activeTooltip = null;

    function renderPins() {
        // Clear existing pins
        pinsLayer.innerHTML = "";

        // Get current displayed dimensions of the image
        if (!mapImg) return;
        const currentWidth = mapImg.offsetWidth;
        const currentHeight = mapImg.offsetHeight;

        if (currentWidth === 0 || currentHeight === 0) {
            // Image might not be loaded yet, retry shortly
            setTimeout(renderPins, 100);
            return;
        }

        const scaleX = currentWidth / origWidth;
        const scaleY = currentHeight / origHeight;

        areas.forEach(area => {
            const coords = area.getAttribute("coords").split(",").map(Number);
            const shape = area.getAttribute("shape").toLowerCase();
            const title = area.getAttribute("title") || area.getAttribute("alt") || "Hier sind wir tätig";
            const href = area.getAttribute("href");

            let cx = 0, cy = 0;

            if (shape === "circle") {
                cx = coords[0];
                cy = coords[1];
            } else if (shape === "rect") {
                cx = (coords[0] + coords[2]) / 2;
                cy = (coords[1] + coords[3]) / 2;
            } else if (shape === "poly") {
                let sumX = 0, sumY = 0;
                let pts = coords.length / 2;
                for (let i = 0; i < coords.length; i += 2) {
                    sumX += coords[i];
                    sumY += coords[i + 1];
                }
                cx = sumX / pts;
                cy = sumY / pts;
            }

            // Scale to current image size
            const finalX = cx * scaleX;
            const finalY = cy * scaleY;

            // Create pin wrapper
            const pinWrap = document.createElement("div");
            pinWrap.className = "map-pin";
            pinWrap.style.left = `${finalX}px`;
            pinWrap.style.top = `${finalY}px`;

            if (href && href.trim() !== '') {
                pinWrap.style.cursor = "pointer";
                pinWrap.onclick = (e) => {
                    // Prevent tooltip toggle on desktop click if it's a link
                    if (e.pointerType !== "touch") {
                        window.open(href, '_blank');
                    }
                };
            }

            // Create dot
            const dot = document.createElement("div");
            dot.className = "map-pin-dot";

            // Create pulse rings
            const pulse1 = document.createElement("div");
            pulse1.className = "map-pin-pulse pulse-1";

            // Random negative delay between 0 and -4 seconds ensures 
            // the animation immediately starts at a random phase.
            const randomPhase = Math.random() * -4;
            pulse1.style.animationDelay = `${randomPhase}s`;

            const pulse2 = document.createElement("div");
            pulse2.className = "map-pin-pulse pulse-2";
            // Second pulse delayed exactly half the duration (2s) from the first
            pulse2.style.animationDelay = `${randomPhase - 2}s`;

            // Create tooltip
            const tooltip = document.createElement("div");
            tooltip.className = "map-pin-tooltip";
            tooltip.innerText = title;

            // Hover tracking
            pinWrap.addEventListener('mouseenter', () => {
                if (window.matchMedia("(pointer: fine)").matches) {
                    tooltip.classList.add("visible");
                }
            });
            pinWrap.addEventListener('mouseleave', () => {
                if (window.matchMedia("(pointer: fine)").matches) {
                    tooltip.classList.remove("visible");
                }
            });

            // Mobile Tap (Touch)
            pinWrap.addEventListener('click', (e) => {
                if (window.matchMedia("(pointer: coarse)").matches) {
                    if (tooltip.classList.contains("visible")) {
                        tooltip.classList.remove("visible");
                        if (href && href.trim() !== '') {
                            window.open(href, '_blank');
                        }
                    } else {
                        // Close others
                        document.querySelectorAll('.map-pin-tooltip.visible').forEach(t => t.classList.remove('visible'));
                        tooltip.classList.add("visible");
                    }
                }
            });

            pinWrap.appendChild(pulse1);
            pinWrap.appendChild(pulse2);
            pinWrap.appendChild(dot);
            pinWrap.appendChild(tooltip);
            pinsLayer.appendChild(pinWrap);
        });
    }

    // Initialize when image loads
    if (mapImg.complete) {
        renderPins();
    } else {
        mapImg.addEventListener("load", renderPins);
    }

    // Re-calculate on resize
    window.addEventListener("resize", () => {
        // debounce slightly
        clearTimeout(window.resizeTimerMap);
        window.resizeTimerMap = setTimeout(renderPins, 50);
    });
});

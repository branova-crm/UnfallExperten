document.addEventListener("DOMContentLoaded", () => {
    const waWidget = document.getElementById("wa-widget");
    const waPopup = document.getElementById("wa-popup");
    const waToggle = document.getElementById("wa-toggle");
    const waClose = document.getElementById("wa-close");

    // Create elements dynamically inside
    const waPopupBody = document.querySelector(".wa-popup-body");
    const waFooter = document.querySelector(".wa-popup-footer");
    const waInput = document.getElementById("wa-input");
    const waSend = document.getElementById("wa-send");
    const waBadge = document.querySelector(".wa-badge");

    const WHATSAPP_NUMBER = "4902111234567";

    let chatStep = 0;
    let autoOpened = false;
    let userContext = {
        issue: "",
        name: "",
        contact: ""
    };

    // Helper: Add a message to the chat body
    const addMessage = (htmlText, sender) => {
        const div = document.createElement("div");
        div.className = `wa-message-bubble ${sender}`;
        div.innerHTML = htmlText;

        const timeSpan = document.createElement("span");
        timeSpan.className = "wa-time";
        const now = new Date();
        const hrs = now.getHours().toString().padStart(2, '0');
        const mins = now.getMinutes().toString().padStart(2, '0');
        timeSpan.innerText = `${hrs}:${mins}`;
        div.appendChild(timeSpan);

        waPopupBody.appendChild(div);
        waPopupBody.scrollTop = waPopupBody.scrollHeight;
    };

    // Initial Bot Greeting
    waPopupBody.innerHTML = ""; // clear possible static text
    addMessage("Hallo! 👋<br>Wie kann ich helfen?", "bot");

    // Show the final CTA button
    const showFinalCTA = () => {
        waFooter.style.display = "none"; // hide input field

        const finalAction = document.createElement("div");
        finalAction.className = "wa-final-action visible";
        finalAction.innerHTML = `<button id="wa-start-chat-btn">Jetzt mit Mitarbeiter sprechen</button>`;
        waPopup.appendChild(finalAction);

        document.getElementById("wa-start-chat-btn").addEventListener("click", () => {
            const template = `Hallo UnfallExperten,\nich benötige Hilfe!\n\n*Name:* ${userContext.name}\n*Erreichbarkeit:* ${userContext.contact}\n*Mein Anliegen:* ${userContext.issue}`;
            const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
            window.open(whatsappURL, '_blank');
            waPopup.classList.remove('open');
        });
    };
    // Helper: Add typing indicator and then message
    const botReply = (htmlText) => {
        // Show typing indicator
        const typingDiv = document.createElement("div");
        typingDiv.className = "wa-message-bubble bot wa-typing";
        typingDiv.innerHTML = `<div class="wa-typing-indicator"><span></span><span></span><span></span></div>`;
        waPopupBody.appendChild(typingDiv);
        waPopupBody.scrollTop = waPopupBody.scrollHeight;

        // Random delay between 1.2s and 2.2s for typing
        const delay = Math.floor(Math.random() * (2200 - 1200 + 1) + 1200);

        setTimeout(() => {
            typingDiv.remove();
            addMessage(htmlText, "bot");

            // if step is 3, show CTA button right after this message
            if (chatStep === 3) {
                setTimeout(showFinalCTA, 300);
            }
        }, delay);
    };

    // Handle user sending a message
    const handleSend = () => {
        const text = waInput.value.trim();
        if (!text) return;

        addMessage(text, "user");
        waInput.value = "";

        if (chatStep === 0) {
            userContext.issue = text;
            chatStep++;
            botReply("Wie lautet dein Name?");
        } else if (chatStep === 1) {
            userContext.name = text;
            chatStep++;
            botReply(`${userContext.name}, wann bist du am besten zu sprechen?`);
        } else if (chatStep === 2) {
            userContext.contact = text;
            chatStep++;
            botReply(`Danke ${userContext.name}! Wir verbinden dich jetzt direkt mit deinem persönlichen Ansprechpartner auf WhatsApp. Klicke hier unten, um den Chat zu starten.`);
        }
    };

    waSend.addEventListener("click", handleSend);
    waInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSend();
    });

    // Auto-open logic after 2 seconds
    setTimeout(() => {
        if (!autoOpened) {
            waBadge.classList.add('show');
            setTimeout(() => {
                if (!autoOpened) {
                    waPopup.classList.add('open');
                    waBadge.classList.remove('show');
                    autoOpened = true;
                }
            }, 800);
        }
    }, 2000);

    // Toggle widget logic
    waToggle.addEventListener("click", () => {
        waPopup.classList.toggle('open');
        waBadge.classList.remove('show');
        autoOpened = true;

        if (waPopup.classList.contains('open') && chatStep < 3) {
            setTimeout(() => waInput.focus(), 300);
        }
    });

    waClose.addEventListener("click", () => {
        waPopup.classList.remove('open');
    });
});

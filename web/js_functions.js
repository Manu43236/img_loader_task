
function showContextMenuFlutter() {
    /* 
        => Remove existing menu if any 
    */
    const existingMenu = document.getElementById("contextMenu");
    if (existingMenu) {
        existingMenu.remove();
    }

    /* 
    => Create overlay for dimming the background 
    */
    const overlay = document.createElement("div");
    overlay.id = "menuOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0, 0, 0, 0.5)"; // Dim effect
    overlay.style.zIndex = "999";

    /* 
    => Create the menu container 
    */
    const menu = document.createElement("div");
    menu.id = "contextMenu";
    menu.style.position = "fixed";
    menu.style.top = "50%";
    menu.style.left = "50%";
    menu.style.transform = "translate(-50%, -50%)"; /* Centering */
    menu.style.background = "white";
    menu.style.border = "1px solid #ccc";
    menu.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    menu.style.padding = "15px";
    menu.style.borderRadius = "10px";
    menu.style.zIndex = "1000";
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.alignItems = "center";
    menu.style.minWidth = "200px";

    /* 
        => Create title 
    */
    const title = document.createElement("p");
    title.innerText = "Context Menu";
    title.style.margin = "0";
    title.style.padding = "10px";
    title.style.fontWeight = "bold";

    /* 
        => Create "Enter Fullscreen" button 
        => Create "Enter Fullscreen" Actions 
    */
    const enterFullscreen = document.createElement("button");
    enterFullscreen.innerText = "Enter Fullscreen";
    enterFullscreen.style.width = "100%";
    enterFullscreen.style.marginBottom = "10px";
    enterFullscreen.style.padding = "12px";
    enterFullscreen.style.border = "none";
    enterFullscreen.style.cursor = "pointer";
    enterFullscreen.style.backgroundColor = "#007BFF";
    enterFullscreen.style.color = "white";
    enterFullscreen.style.borderRadius = "5px";
    enterFullscreen.onclick = function () {
        document.documentElement.requestFullscreen();
        closeMenu();
    };

    /* 
        => Create "Exit Fullscreen" button 
        => Create "Exit Fullscreen" Actions 
    */
    const exitFullscreen = document.createElement("button");
    exitFullscreen.innerText = "Exit Fullscreen";
    exitFullscreen.style.width = "100%";
    exitFullscreen.style.padding = "12px";
    exitFullscreen.style.border = "none";
    exitFullscreen.style.cursor = "pointer";
    exitFullscreen.style.backgroundColor = "#DC3545";
    exitFullscreen.style.color = "white";
    exitFullscreen.style.borderRadius = "5px";
    exitFullscreen.onclick = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        closeMenu();
    };

    /* 
        => Function to close the menu
    */
    function closeMenu() {
        menu.remove();
        overlay.remove();
    }

    /* 
        => Append elements to menu 
    */
    menu.appendChild(title);
    menu.appendChild(enterFullscreen);
    menu.appendChild(exitFullscreen);

    /*  
        => Append menu and overlay to body
    */
    document.body.appendChild(overlay);
    document.body.appendChild(menu);

    /*
        => Close menu when clicking outside
    */
    overlay.addEventListener("click", closeMenu);
}




/*
       => Image full view
   */
function openFullView(imageUrl) {
    const fullViewContainer = document.createElement('div');
    fullViewContainer.style.position = 'fixed';
    fullViewContainer.style.top = '0';
    fullViewContainer.style.left = '0';
    fullViewContainer.style.width = '100%';
    fullViewContainer.style.height = '100%';
    fullViewContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullViewContainer.style.display = 'flex';
    fullViewContainer.style.alignItems = 'center';
    fullViewContainer.style.justifyContent = 'center';
    fullViewContainer.style.zIndex = '1000';

    const image = document.createElement('img');
    image.src = imageUrl;
    image.style.maxWidth = '90%';
    image.style.maxHeight = '90%';
    image.style.objectFit = 'contain';

    fullViewContainer.appendChild(image);

    fullViewContainer.addEventListener('click', () => {
        fullViewContainer.remove();
    });

    document.body.appendChild(fullViewContainer);
}

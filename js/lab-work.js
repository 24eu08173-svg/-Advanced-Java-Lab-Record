
// Expand and collapse sidebar units
function toggleUnit(unitId, button) {
    const unit = document.getElementById(unitId);

    if (!unit) return;

    const isOpen = unit.classList.contains("open");

    if (isOpen) {
        unit.classList.remove("open");
        button.classList.remove("active");
    } else {
        unit.classList.add("open");
        button.classList.add("active");
    }
}


// Load weekly HTML pages inside the main website
function showWeek(weekNumber, button) {

    // Remove active status from all week buttons
    document.querySelectorAll(".week-button").forEach(item => {
        item.classList.remove("active");
    });

    // Activate selected week
    if (button) {
        button.classList.add("active");
    }

    const content = document.getElementById("content");

    if (!content) {
        console.error("Content section not found!");
        return;
    }

    // Generate the weekly HTML file path
    const weekPath =
        `weeks/week${weekNumber}/week${weekNumber}.html`;

    // Display the actual weekly HTML page
    content.innerHTML = `
        <div style="
            width: 100%;
            height: 100%;
            min-height: 850px;
            display: flex;
            flex-direction: column;
        ">

            <iframe
                src="${weekPath}"
                title="Week ${weekNumber} Lab Work"
                style="
                    width: 100%;
                    height: 100%;
                    min-height: 850px;
                    border: none;
                    border-radius: 12px;
                    background: white;
                "
                loading="lazy">
            </iframe>

        </div>
    `;

}


// Display unit information
function showUnit(unitName) {

    const content = document.getElementById("content");

    if (!content) return;

    // Remove active status from week buttons
    document.querySelectorAll(".week-button").forEach(item => {
        item.classList.remove("active");
    });

    content.innerHTML = `

        <span class="subject-label">
            ADVANCED JAVA PROGRAMMING LAB
        </span>

        <h1>
            Advanced Java Programming Lab
        </h1>

        <div class="subject-info">

            <p>
                <strong>Subject Code:</strong>
                24IT385
            </p>

            <p>
                <strong>Subject Name:</strong>
                Advanced Java Programming Lab
            </p>

        </div>

        <h2>${unitName}</h2>

        <div class="question">

            <h3>${unitName}</h3>

            <p>
                The laboratory content for
                ${unitName} will be added here.
            </p>

        </div>

    `;
}

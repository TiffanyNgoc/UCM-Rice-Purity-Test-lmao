function calculateScore() {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkedCount = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });
    
    let score = 100 - checkedCount;
    window.location.href = `score.html?score=${score}`;
}
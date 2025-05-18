function toggleSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display =
            selectedSection.style.display === "none" ||
            selectedSection.style.display === ""
                ? "block"
                : "none";
    }
}

function showCompanyDetails(company) {
    const detailsContainer = document.getElementById("company-details-container");
    const details = document.getElementById("company-details");
    const companyContentDiv = document.getElementById("company-details-content");

    companyContentDiv.innerHTML = getCompanyContent(company);
    detailsContainer.style.display = "flex";
    details.style.display = "block";
}

function getCompanyContent(company) {
    switch (company) {
        case "tcs":
            return `
                <h4><span class="round-box">Round - 1</span> Foundation Round (75 mins and 65 Ques)</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Numerical Ability</strong>: 20 Ques (25 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong>: 25 Ques (25 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Reasoning Ability</strong>: 20 Ques (25 mins)</li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Advanced Round (190 Mins and 82 Ques)</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Advance Quants + Logical</strong>: 15 Ques (25 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Advance Coding</strong>: 2 Ques (80 mins)</li>
                </ul>
            `;
        case "accenture":
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Cognitive Ability</strong>: 50 Ques</li>
                    <li><strong style="color: black; font-weight: 600;">Technical Ability</strong>: 40 Ques</li>
                    <li><strong style="color: black; font-weight: 600;">Coding</strong>: 2 Ques</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Communication Assessment</strong>: 20-25 Ques</li>
                </ul>
                <h4><span class="round-box">Round - 3</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong> (Online)</li>
                </ul>
            `;
        case "capgemini":
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Technical Test</strong>: 40 Ques (40 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Essay Writing Test (WET)</strong>: 200 Words (20 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Game-based Aptitude Test</strong>: 4 games (25-30 mins)</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Coding</strong>: 2 Ques (45 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">English Communication Test</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong> (Offline)</li>
                </ul>
            `;
        case "ashokleyland":
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Online Aptitude Test</strong>: 100 Ques (60 mins)</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Gamification Round</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">GD Round</strong></li>
                </ul>
                <h4><span class="round-box">Round - 4</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong></li>
                </ul>
            `;
        case "LTIMindtree":
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">English Comprehension</strong>: 2-3 Questions (15 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Aptitude</strong>: 15 Questions (15 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Logical</strong>: 15 Questions (15 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Computer Science</strong>: 20 Questions (20 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Communication Assessment</strong>: 25-30 Questions (20 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Computer Programming (Coding)</strong>: 2-3 Question (35 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Communication Assessment</strong>: 20 (Approx) (20 mins)</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong></li>
                </ul>
            `;
        case "infosys":
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Logical Ability</strong>: 15 Ques (25 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Technical Ability</strong>: 10 Ques (35 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong>: 20 Ques (20 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Pseudo Code</strong>: 5 Ques (10 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Puzzle Solving</strong>: 4 Ques (10 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">English Grammar</strong>: 5 Ques (10 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">English Writing</strong>: 1 Ques (10 mins)</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong></li>
                </ul>
            `;
        case "wipro":
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Quantitative Aptitude</strong>: 16 Ques (16 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Logical Reasoning</strong>: 14 Ques (14 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Verbal English</strong>: 22 Ques (18 mins)</li>
                    <li><strong style="color: black; font-weight: 600;">Coding</strong>: 2 Ques (60 mins)</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Communication Round</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong> (Online)</li>
                </ul>
            `;
        case "hexaware":
            return `
                <h4><span class="round-box">Round - 1</span> Aptitude Test</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Quantitative Aptitude</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Logical Reasoning</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong></li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Technical Assessment</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Coding</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Technical MCQ</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span> Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Technical Interview</strong></li>
                    <li><strong style="color: black; font-weight: 600;">HR Interview</strong></li>
                </ul>
            `;
        case "cognizant":
            return `
                <h4><span class="round-box">Round - 1</span> Communication Assessment</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Listening</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Speaking</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Reading</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Writing</strong></li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Cognitive Assessment</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Quantitative Aptitude</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Logical Reasoning</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span> Technical Assessment</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Coding</strong></li>
                    <li><strong style="color: black; font-weight: 600;">SQL</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Web Development Basics</strong></li>
                </ul>
                <h4><span class="round-box">Round - 4</span> Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Technical Interview</strong></li>
                    <li><strong style="color: black; font-weight: 600;">HR Interview</strong></li>
                </ul>
            `;
        case "deloitte":
            return `
                <h4><span class="round-box">Round - 1</span> Aptitude Test</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Quantitative Aptitude</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Logical Reasoning</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong></li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Group Discussion</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Discussion on a given topic</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span> Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Technical Interview</strong></li>
                    <li><strong style="color: black; font-weight: 600;">HR Interview</strong></li>
                </ul>
            `;
        case "oracle":
            return `
                <h4><span class="round-box">Round - 1</span> Aptitude Test</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Quantitative Aptitude</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Logical Reasoning</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong></li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Technical Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Questions on core technical subjects</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Coding challenges</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span> HR Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">General HR questions</strong></li>
                </ul>
            `;
        case "saplabs":
            return `
                <h4><span class="round-box">Round - 1</span> Aptitude Test</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Quantitative Aptitude</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Logical Reasoning</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Verbal Ability</strong></li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Technical Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">In-depth technical questions</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Coding exercises</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span> HR Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Behavioral questions</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Discussion on career goals</strong></li>
                </ul>
            `;
        case "cisco":
            return `
                <h4><span class="round-box">Round - 1</span> Online Assessment</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Aptitude Questions</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Technical Questions (Networking, etc.)</strong></li>
                    <li><strong style="color: black; font-weight: 600;">Coding Challenges</strong></li>
                </ul>
                <h4><span class="round-box">Round - 2</span> Technical Interview(s)</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Multiple rounds focusing on specific technical skills</strong></li>
                </ul>
                <h4><span class="round-box">Round - 3</span> HR Interview</h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">General HR and fitment questions</strong></li>
                </ul>
            `;
        default:
            return `
                <h4><span class="round-box">Round - 1</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Cognitive Ability</strong>: 50 Ques</li>
                    <li><strong style="color: black; font-weight: 600;">Technical Ability</strong>: 40 Ques</li>
                    <li><strong style="color: black; font-weight: 600;">Coding</strong>: 2 Ques</li>
                </ul>
                <h4><span class="round-box">Round - 2</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Communication Assessment</strong>: 20-25 Ques</li>
                </ul>
                <h4><span class="round-box">Round - 3</span></h4>
                <ul>
                    <li><strong style="color: black; font-weight: 600;">Interview</strong> (Online)</li>
                </ul>
            `;
    }
}

function closeCompanyDetails() {
    const companyDetailsContainer = document.getElementById(
        "company-details-container"
    );
    const companyDetailsDiv = document.getElementById("company-details");
    companyDetailsContainer.style.display = "none";
    companyDetailsDiv.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const companyDetailsContainer = document.getElementById(
        "company-details-container"
    );
    if (companyDetailsContainer) {
        companyDetailsContainer.style.display = "none";
    }
});
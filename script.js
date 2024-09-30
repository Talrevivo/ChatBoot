let step = 0;
const sendBtn = document.getElementById('send-btn'); 

document.getElementById('send-btn').addEventListener('click', function() {
    sendMessage();
});

function sendMessage() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';

        setTimeout(() => {
            handleStep(step, userInput);
        }, 1000);
    }
}

function addMessage(content, sender) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.innerHTML = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // גלילה אוטומטית לתחתית בהוספת הודעה

    // הוספת אנימציה להודעות
    messageDiv.style.opacity = 0;
    messageDiv.style.transform = 'translateY(20px)'; // הנפשה כלפי מעלה
    setTimeout(() => {
        messageDiv.style.opacity = 1;
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
}


window.onload = function() {
    // הצגת ההודעה והתמונה בפתיחה
    addMessage('שלום! ברוכים הבאים להדרכה על מניעת הטרדה מינית בעבודה.', 'bot');
    addMessage('<img src="image/sexual_harassment.jpg" class="image" alt="תמונה לדוגמה">', 'bot'); // הוספת תגית alt לתמונה

    // אחרי התמונה, תופיע הנחיה להזנת שם
    setTimeout(() => {
        askForName();
    }, 2000);
};

function askForName() {
    sendBtn.disabled = true;
    let nameInput = `
        <div>
            <p>הכניסו שם:</p>
            <input type="text" id="name-input" size="15" placeholder="הכניסו את שמכם כאן...">
            <button id="confirm-btn" onclick="submitName()">שלח שם</button>
        </div>
    `;
    addMessage(nameInput, 'bot');
}

function submitName() {
    let name = document.getElementById('name-input').value.trim();
    if (name) {
        addMessage(name, 'user');
        addMessage(`ברוכים הבאים, ${name}!`, 'bot');
        
        // הצגת השאלה של נכון/לא נכון לאחר הזנת שם
        setTimeout(() => {
            handleStep(0);
        }, 1000);
    } else {
        alert('נא להכניס שם לפני השליחה.');
    }
}

function handleStep(currentStep, userInput = '') {
    if (currentStep === 0) {
        showQuestion();
    } else if (currentStep === 1) {
        if (userInput) handleAnswer(userInput);
    } else if (currentStep === 2) {
        showImage();
    }else if (currentStep === 3) {
        showImageTwo();
    }else if (currentStep === 4) {
        showImageTree();
    } else if (currentStep === 5) {
        showVideo();
    }else if (currentStep === 6) {
        showEmoji();
    }else if (currentStep === 7) {
        showVideoTwo();
    } else if (currentStep === 8) {
        showCompletionStep(); // קריאה לשלב החדש
    }
}

function showQuestion() {
    step = 1;
    sendBtn.disabled = true;
    let question = `
        <div>
            <img src="image/harassment.jpg" class="image" alt="תמונה לדוגמה">
            <p>הביטו בתמונה הבאה והשיבו על השאלה,<br/> האם לדעתכם זו נחשבת הטרדה מינית?</p>
            <button style="margin-bottom: 10px;" id="confirm-btn" onclick="handleAnswer('נכון')">אכן הטרדה</button>
            <button style="margin-bottom: 10px;" id="confirm-btn" onclick="handleAnswer('לא נכון')">לא הטרדה</button>
            <button id="confirm-btn" onclick="handleAnswer('לא נכון')">הטרדה חלקית</button>
            <button id="confirm-btn" onclick="handleAnswer('לא נכון')">אקט חברי</button>
        </div>
    `;
    addMessage(question, 'bot');
}

function handleAnswer(answer) {
    addMessage(answer, 'user');
    if (answer === 'נכון') {
        addMessage('כל הכבוד תשובה נכונה', 'bot');
    } else {
        addMessage('תשובה שגויה, ניתן לראות בתמונה גבר מניח את ידו בצורה אגרסיבית על הבחורה. הבחורה נראית לא מרוצה מהסיטואציה.', 'bot');
    }
    sendBtn.disabled = false;
    setTimeout(() => {
        handleStep(2);
    }, 2000);
}

function showImage() {
    step = 3;
    let image = `
        <div>
            <p>הביטו בתמונה הבאה, והשיבו במילים שלכם,<br/> האם לדעתכם זו נחשבת הטרדה מינית?<br/> אם כן, פרטו.</p>
            <img src="image/harassment2.jpg" class="image" alt="תמונה נוספת לניתוח">
        </div>
    `;
    addMessage(image, 'bot');
}

function showImageTwo() {
    step = 4;
    let image = `
        <div>
            <p>ומה לגבי התמונה הבאה?<br/> האם תגדירו את הסיטואציה הזו כהטרדה מינית?</p>
            <img src="image/sexually.jpg" class="image" alt="תמונה נוספת לניתוח">
        </div>
    `;
    addMessage(image, 'bot');
}

function showImageTree() {
    step = 5;
    let image = `
        <div>
            <p>ענו במילים שלכם,<br/> מה היא נחשבת לדעתכם הטרדה מינית?<br/>
            <b>בסיום המענה לחצו על שלח</b>
            </p>
        </div>
    `;
    addMessage(image, 'bot');
}

function showVideo() {
    step = 6; // עדכון השלב ל-5 כדי להתקדם לשלב הבא
    let video = `
        <div>
            <p>צפו בסרטון הבא והשיבו,<br/> האם מופיע בסרטון הטרדה מינית?</p>
            <iframe src="https://www.youtube.com/embed/aOwmLMnZwi4?si=tlxM0-LN7GUQeQoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    `;
    addMessage(video, 'bot');
}


function showEmoji() {
    step = 7;
    let image = `
        <div>
            <p>הביטו בתמונה ושלחו את האימוג'י המתאים למה שאתם מרגישים:</p>
            <p><img src="image/sexuallyWomen.jpg" class="image" alt="תמונה נוספת לניתוח"><br/>
            סיטואציה מרגיזה &#128545;<br/>
            סיטואציה מביכה &#x1F625;<br/>
            סיטואציה מאכזבת &#128542;<br/>
            סיטואציה מעציבה &#128552;
            <br/>
            <b>בסיום המענה לחץ על שלח</b>
            </p>
        </div>
    `;
    addMessage(image, 'bot');
}


function showVideoTwo() {
    step = 8; // עדכון השלב ל-5 כדי להתקדם לשלב הבא
    let video = `
        <div>
            <p>צפו בסרטון הסיכום:</p>
            <iframe src="https://www.youtube.com/embed/HKk-pbeW3ic?si=_QW0j1bNfkAhOQ3l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    `;
    addMessage(video, 'bot');
    setTimeout(() => {
        handleStep(8); // מעבר לשלב הבא אחרי הסרטון
    }, 2000);
}

function showCompletionStep() {
    sendBtn.disabled = true;
    let completionForm = `
        <div>
            <label>
                <input type="checkbox" id="completion-checkbox">
                אני מעדכן.ת כי סיימתי את ההדרכה בהצלחה
            </label>
            <button id="End-btn" onclick="submitCompletion()">סיום</button>
        </div>
    `;
    addMessage(completionForm, 'bot');
}

function submitCompletion() {
    let checkbox = document.getElementById('completion-checkbox');
    if (checkbox && checkbox.checked) {
        let name = document.getElementById('name-input').value.trim();
        
        // יצירת הקישור mailto עם התוכן הנדרש
        let mailtoLink = `mailto:talrevivo8@gmail.com?subject=סיום%20הדרכה&body=הלומד%20${encodeURIComponent(name)}%20עבר%20את%20ההדרכה%20בהצלחה`;

        // פתיחת קישור mailto כדי לשלוח את המייל
        window.location.href = mailtoLink;

        addMessage("תודה, הדיווח שלך נפתח במייל שלך.", 'bot');
    } else {
        alert('נא לסמן את הצ\'קבוקס לפני השליחה.');
    }
}
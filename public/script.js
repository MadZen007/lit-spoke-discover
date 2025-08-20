const quizQuestions = [
    {
        id: 1,
        question: "What's the most embarrassing thing you're willing to admit you're looking for in a partner?",
        options: [
            "Someone who laughs at all your jokes (even the bad ones)",
            "A personal therapist (who doesn't charge by the hour)",
            "A human shield against your family's judgment",
            "Someone to blame when things go wrong",
            "A free meal ticket",
            "A co-signer for your crippling debt",
            "Someone to watch trashy TV with",
            "A live-in pet sitter",
            "Proof that you're not completely unlovable",
            "Someone who will validate your existence"
        ]
    },
    {
        id: 2,
        question: "What kind of 'quirky' personality trait do you tend to find yourself drawn to, even if you know it might be a problem later?",
        options: [
            "Intense passion (that could border on obsession)",
            "A devil-may-care attitude (that might lead to irresponsibility)",
            "A constant need for excitement (that could lead to boredom with you)",
            "A sharp wit (that could turn into biting sarcasm)",
            "A strong independent streak (that could feel like emotional distance)",
            "A creative mind (that could be easily distracted)",
            "An unconventional lifestyle (that might not mesh with yours)",
            "A history of 'bad luck' (that might be more than just bad luck)",
            "An artistic temperament (that might include dramatic outbursts)",
            "A mysterious aura (that might hide a dark secret)"
        ]
    },
    {
        id: 3,
        question: "How do you handle rejection (or perceived rejection) in the dating world?",
        options: [
            "Pretend it didn't happen",
            "Obsessively analyze their profile for clues",
            "Write a scathing review of them online",
            "Lower your standards",
            "Question your self-worth",
            "Eat an entire tub of ice cream",
            "Blame your ex",
            "Vow to never date again",
            "Seek validation from strangers on the internet",
            "Get drunk and send them a rambling text message"
        ]
    },
    {
        id: 4,
        question: "What's your preferred method of communication (or miscommunication) in a relationship?",
        options: [
            "Passive-aggressive sticky notes",
            "Cryptic song lyrics",
            "Sarcastic jokes",
            "The silent treatment",
            "Rambling text messages",
            "Emotional outbursts",
            "Avoidance",
            "Mind-reading (attempted)",
            "Honest (but brutal) honesty",
            "Subtle hints that go completely unnoticed"
        ]
    },
    {
        id: 5,
        question: "What's your biggest relationship dealbreaker (that you're willing to overlook if they're hot enough)?",
        options: [
            "Bad hygiene",
            "Annoying habits",
            "Clinginess",
            "Emotional unavailability",
            "Lack of intelligence",
            "Different values",
            "Controlling behavior",
            "Addiction issues",
            "A criminal record",
            "A crippling fear of clowns"
        ]
    },
    {
        id: 6,
        question: "What's your (perfectly valid, and not-at-all-toxic) trait that most ex's complain about?",
        options: [
            "Being 'too independent'",
            "Being 'too honest'",
            "Being 'too ambitious'",
            "Being 'too sarcastic'",
            "Being 'too logical'",
            "Being 'too adventurous'",
            "Being 'too intellectual'",
            "Being 'too sensitive'",
            "Being 'too laid-back'",
            "Being 'too [insert your most prominent personality trait here]'"
        ]
    },
    {
        id: 7,
        question: "Which lie about love is the one you most wish was true?",
        options: [
            "That there's someone out there for everyone",
            "That love conquers all",
            "That you only need one great love in your life",
            "That love is enough",
            "That you'll just know when you've found 'the one'",
            "That love is always easy",
            "That love lasts forever",
            "That your soulmate is actively looking for you too",
            "That love can fix your problems",
            "That you can't live without love"
        ]
    },
    {
        id: 8,
        question: "What's your biggest fear about opening up to someone?",
        options: [
            "Being judged",
            "Being rejected",
            "Being hurt",
            "Being vulnerable",
            "Being exposed",
            "Being taken advantage of",
            "Being seen as weak",
            "Being misunderstood",
            "Being pitied",
            "Being a burden"
        ]
    },
    {
        id: 9,
        question: "Which method of ending a relationship have you used the most?",
        options: [
            "The slow fade",
            "The 'it's not you, it's me' speech",
            "The ghost",
            "The sudden and dramatic breakup",
            "The mutual agreement (that was actually your idea)",
            "The passive-aggressive campaign until they break up with you",
            "The 'let's just be friends' (that you don't actually mean)",
            "The disappearing act (leaving no trace)",
            "The 'I need space' excuse (that turns into permanent space)",
            "The honest (but brutal) truth"
        ]
    },
    {
        id: 10,
        question: "If your dating life were a sitcom, what would it be called?",
        options: [
            "'Curb Your Enthusiasm'",
            "'It's Always Sunny in Philadelphia'",
            "'The Office'",
            "'Arrested Development'",
            "'Fleabag'",
            "'BoJack Horseman'",
            "'The Twilight Zone'",
            "'Black Mirror'",
            "'Six Feet Under'",
            "'The Walking Dead'"
        ]
    }
];

class PersonalityQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.init();
    }

    init() {
        this.loadQuestion();
        this.updateProgress();
        this.attachEventListeners();
    }

    loadQuestion() {
        const container = document.getElementById('questionContainer');
        const question = quizQuestions[this.currentQuestion];
        
        container.innerHTML = `
            <div class="form-group">
                <label for="question${question.id}">${question.question}</label>
                <select id="question${question.id}" required>
                    <option value="">Select an answer...</option>
                    ${question.options.map((option, index) => 
                        `<option value="${index}">${option}</option>`
                    ).join('')}
                </select>
            </div>
        `;
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / quizQuestions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `Question ${this.currentQuestion + 1} of ${quizQuestions.length}`;
    }

    attachEventListeners() {
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('personalityQuiz').addEventListener('submit', (e) => this.submitQuiz(e));
    }

    nextQuestion() {
        const currentSelect = document.getElementById(`question${quizQuestions[this.currentQuestion].id}`);
        if (!currentSelect.value) {
            alert('Please select an answer before continuing.');
            return;
        }

        this.answers[this.currentQuestion] = parseInt(currentSelect.value);
        this.currentQuestion++;

        if (this.currentQuestion >= quizQuestions.length) {
            this.showSubmitButton();
        } else {
            this.loadQuestion();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    prevQuestion() {
        this.currentQuestion--;
        this.loadQuestion();
        this.updateProgress();
        this.updateNavigationButtons();
        
        // Restore previous answer
        const currentSelect = document.getElementById(`question${quizQuestions[this.currentQuestion].id}`);
        if (this.answers[this.currentQuestion] !== undefined) {
            currentSelect.value = this.answers[this.currentQuestion];
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.style.display = this.currentQuestion > 0 ? 'inline-block' : 'none';
        nextBtn.style.display = this.currentQuestion < quizQuestions.length - 1 ? 'inline-block' : 'none';
    }

    showSubmitButton() {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'inline-block';
    }

    submitQuiz(e) {
        e.preventDefault();
        
        // Get final answer
        const currentSelect = document.getElementById(`question${quizQuestions[this.currentQuestion].id}`);
        this.answers[this.currentQuestion] = parseInt(currentSelect.value);
        
        // For now, just show a simple message
        alert('Quiz submitted! Your answers have been recorded. (Results functionality coming soon!)');
        
        // You can add your custom logic here later
        console.log('Quiz answers:', this.answers);
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PersonalityQuiz();
});

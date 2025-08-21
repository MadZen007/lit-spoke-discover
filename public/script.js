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

const personalityTypes = [
    {
        id: "ghosting-expert",
        title: "The Ghosting Expert",
        image: "images/personality-ghosting.png",
        description: "You're a master of the Irish Goodbye, vanishing from conversations and relationships without a trace. You crave the illusion of connection, but the reality of intimacy terrifies you. You prefer to keep people at arm's length, and you're always ready to bolt at the first sign of commitment. You're the dating world's equivalent of a shooting star: beautiful and fleeting, but ultimately leaving everyone wondering what the hell just happened.",
        idealPartner: "Someone equally independent and low-maintenance who won't demand too much attention or emotional investment. They need to be comfortable with long periods of silence and understand that your absence doesn't necessarily mean you don't care (it probably just means you're binge-watching something and forgot to text back).",
        redFlags: "Anyone who uses the word 'soulmate,' talks about 'forever,' or starts planning your wedding after the first date. Basically, anyone who shows any signs of wanting a real relationship. Also, avoid anyone who's overly sensitive or needs constant reassurance. They'll just drain your already limited emotional reserves.",
        keywords: ["aloof", "detached", "validation", "casual", "intimacy", "vulnerability", "needy", "isolating", "avoiding", "solitude"]
    },
    {
        id: "serial-dater",
        title: "The Serial Dater",
        image: "images/personality-serial.png",
        description: "You're a dating app connoisseur, always swiping right on the newest faces and chasing the thrill of the first date. You're not necessarily afraid of commitment, but you are afraid of settling for the wrong person. You believe that there's always someone better out there, and you're determined to find them (even if it means going on hundreds of mediocre dates in the process). You're the dating world's equivalent of a buffet enthusiast: always sampling everything but never quite satisfied.",
        idealPartner: "Someone who's as adventurous and open-minded as you are. They need to be comfortable with trying new things and going with the flow. Bonus points if they have a packed social calendar and are always up for a spontaneous weekend getaway.",
        redFlags: "Anyone who's overly possessive or jealous, tries to control your schedule, or expects you to be their sole source of entertainment. Also, avoid anyone who's stuck in their ways or resistant to trying new things. They'll just cramp your style and make you feel suffocated.",
        keywords: ["adventurous", "spontaneous", "exploring", "casual", "boring", "predictable", "missing out", "adventurous", "unconventional", "risks"]
    },
    {
        id: "netflix-chill",
        title: "The 'Netflix and Chill' Enthusiast",
        image: "images/personality-netflix.png",
        description: "Why bother with fancy dinners and awkward small talk when you can just cut to the chase? Your ideal date involves sweatpants, pizza, and a good streaming service. You're all about efficiency and minimal effort, and you're not ashamed to admit it. You're basically the dating world's equivalent of a microwave dinner: quick, easy, and satisfying (in a slightly depressing way).",
        idealPartner: "Someone who's equally chill and low-key, doesn't mind spending most of their time indoors, and has a good selection of streaming services. They should also be comfortable with the occasional awkward silence and not expect deep conversations every time you hang out.",
        redFlags: "Anyone who insists on going out all the time, has a strict 'no phones' policy during dates, or tries to force you to have deep and meaningful conversations about your childhood trauma. Also, avoid anyone who judges your taste in movies or complains about your apartment being messy.",
        keywords: ["netflix", "chill", "hookups", "physical", "practical", "pragmatic", "bored", "indifferent", "intimacy", "vulnerability"]
    },
    {
        id: "conspiracy-theorist",
        title: "The Conspiracy Theorist",
        image: "images/personality-conspiracy.png",
        description: "You believe the government is spying on you, aliens are real, and dating apps are controlled by robots. You're convinced that the truth is out there, and you're determined to find it (even if it means alienating everyone around you and building a bunker in your backyard). You're basically the dating world's equivalent of Fox Mulder, except less charming and more likely to wear a tinfoil hat on the first date and try to convince you that the Earth is flat.",
        idealPartner: "Someone who's either equally paranoid and delusional or incredibly patient and tolerant. They need to be able to listen to your conspiracy theories without judgment and gently steer you away from the really crazy stuff. Bonus points if they have a good sense of humor and can laugh along with your eccentricities (instead of running for the hills).",
        redFlags: "Anyone who works for the government, believes in science, or tries to debunk your conspiracy theories. Also, avoid anyone who's overly judgmental or tries to control your behavior. They'll just stifle your creativity and make you feel like you can't be yourself (which, let's be honest, might be a good thing).",
        keywords: ["conspiracy", "astrology", "confused", "disoriented", "distrusts", "questioning", "existential", "stockpiling", "apocalypse", "government", "media"]
    },
    {
        id: "pollyanna",
        title: "The 'Annoyingly Positive' Pollyanna",
        image: "images/personality-pollyanna.png",
        description: "You see the best in everyone, even on dating apps. Your optimism is admirable... and slightly unsettling. You're basically the dating world's equivalent of a unicorn: rare, magical, and probably too good to be true. Do you even have any flaws, or are you just pretending to be human to blend in?",
        idealPartner: "Someone who appreciates your positivity and can balance it with a healthy dose of realism (or cynicism). They need to be able to handle your boundless enthusiasm without feeling overwhelmed and gently bring you back down to earth when you're floating too high.",
        redFlags: "Anyone who's constantly negative, complains about everything, or tries to rain on your parade. Also, avoid anyone who's emotionally unavailable or dismissive of your feelings. They'll just drain your energy and make you question your entire existence.",
        keywords: ["happy", "content", "positive", "enthusiastic", "optimistic", "hurt", "betrayed", "park", "hike"]
    },
    {
        id: "catfishing-master",
        title: "The Catfishing Master",
        image: "images/personality-catfish.png",
        description: "You're a master of disguise, creating online personas that are too good to be true. You're insecure, and likely afraid to be vulnerable. But be careful, your lies might eventually catch up to you, and there is a special place in hell for your type.",
        idealPartner: "Someone who doesn't exist, because you are lying.",
        redFlags: "Everyone. If you are catfishing someone, nothing here matters.",
        keywords: ["catfishing", "vulnerability", "rejection", "abandoned", "attractive", "pretending", "validation", "ego"]
    },
    {
        id: "reluctant-dater",
        title: "The Reluctant Dater (Forced by Friends)",
        image: "images/personality-reluctant.png",
        description: "You have been railroaded! Your friends are evil, now you have to navigate the murky waters of the digital dating game. Prepare yourself for rejection, bots, and conversations that go nowhere... It is okay, you are not alone!",
        idealPartner: "Someone who understands that you are on a limited trial run. It may happen. Be a kind and sensitive soul that'll allow you to see the good of it all.",
        redFlags: "People who think you need to be fixed, or have you get a therapist because you don't want to be there.",
        keywords: ["don't know", "bored", "awkward", "embarrassing", "dating apps", "love is a lie", "bored", "indifferent"]
    },
    {
        id: "existential-dread",
        title: "The Existential Dread-er",
        image: "images/personality-existential.png",
        description: "You know the world is going to end, it is just a matter of when, you're tired of the day-to-day. You seek someone just to simply talk to, for a short period. It is a void, there are no answers, but we can try right? We'll have a coffee and talk about it until one of us dies or stops talking.",
        idealPartner: "Someone who is able to cope with your world view, while being able to be empathetic. Someone who is able to find the joy in everything, while acknowledging and being able to talk about the true end coming.",
        redFlags: "People who think that you need to find god, or don't let you vent. People who are dismissive, and want to change your opinions for their own agenda.",
        keywords: ["nihilistic", "apathetic", "questioning", "existential", "love is a lie", "meaning", "companionship", "loneliness"]
    },
    {
        id: "ex-obsessive",
        title: "The 'I Hate My Ex' Obsessive",
        image: "images/personality-ex.png",
        description: "Your ex is always on your mind and you're always plotting to burn their house down! Just kidding.. unless? You won't stop talking about it and likely won't move on. You likely have issues and haven't come to terms.",
        idealPartner: "People with similar baggage. It takes one to know one. Hopefully you won't hurt each other and move on.",
        redFlags: "People who remind you of your ex, or want to fix you.",
        keywords: ["ex", "blaming", "venting", "passive-aggressive", "manipulative", "birthday", "bio"]
    },
    {
        id: "clingy-aware",
        title: "The 'Clingy But Self-Aware' Attachment Seeker",
        image: "images/personality-clingy.png",
        description: "You know you're clingy, you embrace it, and you're probably already planning our wedding in your head (even though we haven't met yet). You're terrified of being alone, and you're not afraid to show it (maybe a little too much). You're basically the dating world's equivalent of a Velcro suit: you attach yourself to people and never let go (even when they desperately want you to).",
        idealPartner: "Someone who's patient, understanding, and genuinely enjoys receiving attention and affection. They need to be able to handle your occasional bouts of insecurity and reassure you that they're not going anywhere (even when you're being extra needy). A strong sense of self-confidence and a healthy dose of independence are also essential, as they'll need to be able to set boundaries without making you feel rejected.",
        redFlags: "Anyone who's emotionally unavailable, aloof, or commitment-phobic. Also, avoid anyone who's passive-aggressive, gaslights you, or makes you feel like your needs are a burden. They'll just trigger your abandonment issues and send you spiraling into a vortex of self-doubt and despair.",
        keywords: ["long-term", "life partner", "clingy", "desperate", "rejection", "abandoned", "alone", "therapy", "counseling", "stalking", "reassurance", "compliments"]
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
        
        // Update navigation buttons to show correct button for current question
        this.updateNavigationButtons();
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
        const submitBtn = document.getElementById('submitBtn');
        
        prevBtn.style.display = this.currentQuestion > 0 ? 'inline-block' : 'none';
        
        if (this.currentQuestion === quizQuestions.length - 1) {
            // On the last question, show submit button instead of next button
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    showSubmitButton() {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'inline-block';
    }

    calculatePersonalityType() {
        // Simple scoring system based on answer patterns
        const scores = {};
        
        // Initialize scores
        personalityTypes.forEach(type => {
            scores[type.id] = 0;
        });

        // Score based on answer patterns
        this.answers.forEach((answer, questionIndex) => {
            const question = quizQuestions[questionIndex];
            const selectedOption = question.options[answer].toLowerCase();
            
            // Check each personality type's keywords
            personalityTypes.forEach(type => {
                type.keywords.forEach(keyword => {
                    if (selectedOption.includes(keyword.toLowerCase())) {
                        scores[type.id]++;
                    }
                });
            });
        });

        // Find the personality type with the highest score
        let maxScore = 0;
        let selectedType = personalityTypes[0]; // Default to first type

        Object.keys(scores).forEach(typeId => {
            if (scores[typeId] > maxScore) {
                maxScore = scores[typeId];
                selectedType = personalityTypes.find(type => type.id === typeId);
            }
        });

        return selectedType;
    }

    showLoadingScreen() {
        const container = document.getElementById('questionContainer');
        const form = document.getElementById('personalityQuiz');
        
        // Hide the form
        form.style.display = 'none';
        
        // Show loading screen
        container.innerHTML = `
            <div class="loading-screen">
                <div class="loading-content">
                    <h2>Consulting Our Panel of Shrinks & Mentally Ill Interns...</h2>
                    <div class="loading-spinner"></div>
                    <p>Analyzing your dating patterns, emotional baggage, and questionable life choices...</p>
                </div>
            </div>
        `;
    }

    showResults(personalityType) {
        const container = document.getElementById('questionContainer');
        const form = document.getElementById('personalityQuiz');
        
        container.innerHTML = `
            <div class="results-container">
                <div class="results-header">
                    <h2>Um... wow... ok. Here are the results, but don't blame us.</h2>
                </div>
                
                <div class="personality-result">
                    <div class="result-image">
                        <img src="${personalityType.image}" alt="${personalityType.title}" onerror="this.src='images/personality-placeholder.png'">
                    </div>
                    
                    <div class="result-content">
                        <h1 class="result-title">${personalityType.title}</h1>
                        
                        <div class="result-section">
                            <h3>Description</h3>
                            <p>${personalityType.description}</p>
                        </div>
                        
                        <div class="result-section">
                            <h3>Ideal Partner</h3>
                            <p>${personalityType.idealPartner}</p>
                        </div>
                        
                        <div class="result-section">
                            <h3>Red Flags</h3>
                            <p>${personalityType.redFlags}</p>
                        </div>
                    </div>
                </div>
                
                <div class="share-section">
                    <h3>Share Your Results</h3>
                    <p>Let the world know what kind of dating disaster you are!</p>
                    
                    <div class="share-buttons">
                        <button class="share-btn twitter" onclick="shareToTwitter('${personalityType.title}', '${personalityType.description}')">
                            Share on Twitter
                        </button>
                        <button class="share-btn facebook" onclick="shareToFacebook('${personalityType.title}', '${personalityType.description}')">
                            Share on Facebook
                        </button>
                        <button class="share-btn copy" onclick="copyToClipboard('${personalityType.title}', '${personalityType.description}')">
                            Copy Link
                        </button>
                    </div>
                </div>
                
                <div class="retake-section">
                    <button class="btn-primary" onclick="location.reload()">Take Quiz Again</button>
                    <a href="https://www.loveistough.com" class="btn-secondary">Back to LoveIsTough</a>
                </div>
            </div>
        `;
    }

    submitQuiz(e) {
        e.preventDefault();
        
        // Get final answer
        const currentSelect = document.getElementById(`question${quizQuestions[this.currentQuestion].id}`);
        this.answers[this.currentQuestion] = parseInt(currentSelect.value);
        
        // Show loading screen
        this.showLoadingScreen();
        
        // Simulate processing time
        setTimeout(() => {
            const personalityType = this.calculatePersonalityType();
            this.showResults(personalityType);
        }, 2500); // 2.5 seconds
    }
}

// Social media sharing functions
function shareToTwitter(title, description) {
    const text = `I just discovered I'm "${title}" on LoveIsTough.com! ${description.substring(0, 100)}...`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
}

function shareToFacebook(title, description) {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}

function copyToClipboard(title, description) {
    const text = `I just discovered I'm "${title}" on LoveIsTough.com! ${description.substring(0, 100)}... ${window.location.href}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Link copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard!');
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PersonalityQuiz();
});

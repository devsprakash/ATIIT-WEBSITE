const questions = [
    {
      question: "What is the full form of AI?",
      options: ["Artificial Integration", "Automated Intelligence", "Artificial Intelligence", "Automated Interaction"],
      answer: 2
    },
    {
      question: "Which of the following is a common application of AI?",
      options: ["Word Processing", "Web Browsing", "Image Recognition", "Email Management"],
      answer: 2
    },
    {
      question: "What is the primary goal of Artificial Intelligence?",
      options: ["To create intelligent agents", "To replace humans", "To improve internet speed", "To create robots"],
      answer: 0
    },
    {
      question: "Which language is commonly used for AI programming?",
      options: ["JavaScript", "Python", "HTML", "CSS"],
      answer: 1
    },
    {
      question: "What is a neural network in the context of AI?",
      options: ["A network of interconnected computers", "A type of database", "A model inspired by the human brain", "A programming language"],
      answer: 2
    },
    {
      question: "What is machine learning?",
      options: ["A subset of AI focusing on data analysis", "A new programming language", "A hardware component", "A type of software application"],
      answer: 0
    },
    {
      question: "Which of these is a type of machine learning?",
      options: ["Supervised Learning", "Object-Oriented Learning", "Functional Learning", "Procedural Learning"],
      answer: 0
    },
    {
      question: "What is the term for AI that can perform any intellectual task that a human can?",
      options: ["Narrow AI", "General AI", "Weak AI", "Strong AI"],
      answer: 1
    },
    {
      question: "Which AI technique is used for pattern recognition?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "All of the above"],
      answer: 3
    },
    {
      question: "Which of the following is an example of a chatbot?",
      options: ["Google Assistant", "Microsoft Word", "Adobe Photoshop", "Linux Kernel"],
      answer: 0
    },
    {
      question: "What does NLP stand for in AI?",
      options: ["Natural Learning Process", "Natural Language Processing", "Neural Language Programming", "Natural Linguistic Programming"],
      answer: 1
    },
    {
      question: "What is the Turing Test used for?",
      options: ["To measure computer speed", "To test AI's ability to exhibit intelligent behavior", "To diagnose hardware issues", "To test software usability"],
      answer: 1
    },
    {
      question: "What is reinforcement learning?",
      options: ["Learning based on rewards and punishments", "Learning from a large dataset", "Learning by imitation", "Learning through repeated instructions"],
      answer: 0
    },
    {
      question: "What is a common use of AI in healthcare?",
      options: ["Robotic surgeries", "Predicting disease outbreaks", "Personalized medicine", "All of the above"],
      answer: 3
    },
    {
      question: "Which of the following best describes deep learning?",
      options: ["A shallow network of algorithms", "Learning with fewer data", "A class of machine learning algorithms that use multiple layers", "A programming language"],
      answer: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion(index) {
    const questionData = questions[index];
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question');
  
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = questionData.question;
    questionContainer.appendChild(questionTitle);
  
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');
  
    questionData.options.forEach((option, i) => {
      const optionLabel = document.createElement('label');
      optionLabel.classList.add('option');
  
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = 'question' + index;
      optionInput.value = i;
  
      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
  
      optionsContainer.appendChild(optionLabel);
    });
  
    questionContainer.appendChild(optionsContainer);
  
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear previous question
    questionsContainer.appendChild(questionContainer);
  }
  
  function updateProgress() {
    const progress = document.getElementById('progress');
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progress.style.width = progressPercentage + '%';
  }
  
  document.getElementById('nextButton').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
  
    if (selectedOption) {
      if (parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
        updateProgress();
      } else {
        // Handle quiz completion
        document.getElementById('quizForm').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
        document.getElementById('score').textContent = score;
  
        let discount;
        if (score === 5) {
          discount = 2;
        } else if (score >= 10) {
          discount = 10;
        } else if (score >= 15) {
          discount = 15;
        } else {
          discount = 0;
        }
        document.getElementById('discount').textContent = discount;
      }
    } else {
      alert('Please select an option to proceed.');
    }
  });
  
  // Load the first question on page load
  loadQuestion(currentQuestionIndex);
  updateProgress();
  
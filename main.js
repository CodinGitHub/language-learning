let question = {
    title: 'pelota',
    alternatives: ['patata', 'pelota', 'pelusa', 'pepa'],
    correctAnswer: 1
  };
  
  // define the array that stores all questions
  let questions = [
    {
      title: 'gato',
      img: './src/pelota.png',
      alternatives: ['patata', 'pelota', 'pelusa', 'pepa'],
      correctAnswer: 1
    },
    {
      title: 'sopa',
      img: './src/sopa.png',
      alternatives: ['poso', 'sapo', 'posa', 'sopa'],
      correctAnswer: 3
    },
    {
      title: 'tomate',
      img: './src/tomate.png',
      alternatives: ['tomasa', 'tema', 'tomate', 'mate'],
      correctAnswer: 2
    },
    {
      title: 'silla',
      img: './src/silla.png',
      alternatives: ['silla', 'sima', 'misa', 'llama'],
      correctAnswer: 0
    },
    {
      title: 'mesa',
      img: './src/mesa.png',
      alternatives: ['misa', 'sima', 'suma', 'mesa'],
      correctAnswer: 3
    },
    {
      title: 'pila',
      img: './src/pila.png',
      alternatives: ['palo', 'lupa', 'pila', 'papa'],
      correctAnswer: 2
    },
    {
      title: 'lupa',
      img: './src/lupa.png',
      alternatives: ['papa', 'lupa', 'pala', 'papa'],
      correctAnswer: 1
    },
    {
      title: 'ola',
      img: './src/ola.png',
      alternatives: ['misa', 'suma', 'pila', 'ola'],
      correctAnswer: 3
    }
  ];
  
  let app = {
    start: function() {
      
      // keep track of current position in the questions array
      this.currPosition = 0;
      this.score = 0;
      
      // get alternatives
      let alts = document.querySelectorAll('.alternative');
    
      alts.forEach((element, index) => {
              
        element.addEventListener('click', () => {
          // check correct answer
          this.checkAnswer(index);
        });
      });

      //Refresh Stats
      this.updateStats();
      
      // show first question
      this.showQuestion(questions[this.currPosition]);
    },
    
    showQuestion: function(q) {
      
      // show question title
      let titleDiv = document.getElementById('title');
      titleDiv.textContent = q.title; 
      titleDiv.innerHTML = `<img src="${q.img}" alt="">`; 
    
      // show alternatives
      let alts = document.querySelectorAll('.alternative');
    
      alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];
      });
    },
    
    checkAnswer: function(userSelected) {
      
      let currQuestion = questions[this.currPosition];
      
      if(currQuestion.correctAnswer == userSelected) {
        this.score++;
        this.showResult(true);
      }
      else {
        this.showResult(false);
      }

      //Refresh Stats
      this.updateStats();
      
      // increase position
      this.increasePosition();
      
      // show next question
      this.showQuestion(questions[this.currPosition]);
    },
    
    increasePosition: function() {
      // increase the current position
      this.currPosition++;
      
      // if reached the end of the database
      if(this.currPosition == questions.length){
        // send back to the beginning
        this.currPosition = 0;
      }
    },

    updateStats: function(){
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect){
        let resultDiv = document.getElementById('result');
        let result = '';
        if (isCorrect){
            result = `Correct Answer!`;
        }else{
            //get the current cuestion
            let currQuestion = questions[this.currPosition];

            //get the correct answer (index)
            let currectAnswIndex = currQuestion.correctAnswer;

            //get the text of the correct Answer
            let correctAnswText = currQuestion.alternatives[currectAnswIndex];

            result = `Wrong! Correct answer: ${correctAnswText}`;


        }
        resultDiv.textContent = result;
    }
    
  };
  
  // initialize the application
  app.start();
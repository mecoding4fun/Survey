class Form{
    constructor(){        
        this.title = createElement('h1', "A Survey to Bring About Change");
       this.email = createInput("Email");
        this.button = createButton("Start survey");
        this.submit = createButton("Submit!");
       this.firstQuestion = createElement('p', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
       this.radio1 = createRadio();
      this.radio1.option('Yes');
      this.radio1.option('No');
        this.secondQuestion = createElement('p', "Q2. Would you be willing to contribute a small amount every month for such a program?");
       this.radio2 = createRadio();
      this.radio2.option('Yes');
      this.radio2.option('No');
      this.thirdQuestion = createElement('p', "Q3. What number of amount you be willing to contribute for program?");
      this.radio3 = createRadio();
     this.radio3.option('100');
     this.radio3.option('500');
     this.radio3.option('1000');
     this.radio3.option('More!');
     this.greeting = createElement('h2','Thank you!!');
      
        this.emailIndex = null;
    }

    display(){
        this.title.position(500, 100);
        this.email.position(560, 200);
        this.button.position(665, 260);
        this.firstQuestion.position(50, 200);
        this.radio1.position(45, 250);        
        this.secondQuestion.position(50, 300);
        this.radio2.position(45, 350);
        this.thirdQuestion.position(50, 400);
        this.radio3.position(45, 450);
        this.submit.position(300,650);
        this.greeting.position(500,200);
    }

    style(){
        this.email.style('textAlign', 'center');
        this.email.style('textSize', '20px');
        this.email.style('fontWeight', 'bold');
        this.email.style('width', '300px');
        this.email.style('height', '20px');
        this.button.style('fontSize', '15px');
        this.button.style('backgroundColor', 'rgb(255, 255, 255)');
        this.firstQuestion.style('fontSize', '20px');
        this.radio1.style('width', '60px');
        this.radio1.style('fontSize', '20px');
        this.secondQuestion.style('fontSize', '20px');
        this.radio2.style('width', '60px');
        this.radio2.style('fontSize', '20px');
        this.thirdQuestion.style('fontSize', '20px');
        this.radio3.style('width', '60px');
        this.radio3.style('fontSize', '20px');
    }

    hide(){
        this.firstQuestion.hide();
        this.radio1.hide();
        this.secondQuestion.hide();
        this.radio2.hide();
        this.thirdQuestion.hide();
        this.radio3.hide();
        this.submit.hide();
        this.greeting.hide();
    }

    updateState(){
        this.button.mousePressed(()=>{
            if(gameState === START){
                this.email.hide();
                this.button.hide();
                gameState = PLAY;
                users.push(this.email.value());
            }
            peopleCount += 1;
        });
    }



    StartSurvey(){
        if(gameState === PLAY){
            this.firstQuestion.show();
            this.radio1.show();
            this.secondQuestion.show();
            this.radio2.show();
            this.thirdQuestion.show();
            this.radio3.show();
            this.submit.show();

        }
    }

    loadGreeting(){
        this.submit.mousePressed(()=>{
            gameState = SHOWGREETING;
            console.log(gameState)
        })
    }

    showGreeting(){
        if(gameState === SHOWGREETING){
            this.greeting.show();            
        }
    }




    updateEmail(){
        this.emailIndex = this.email.value();
        var emailref = database.ref('emails/' + peopleCount);
        emailref.ref.update({
            email: this.emailIndex
        });
    }

    updateCount(){
        var countRef = database.ref('/');
        countRef.ref.update({
            peopleCount: peopleCount
        })
    }

    assignCount(){
        var countRef = database.ref('peopleCount');
        countRef.on("value", (data)=>{
            peopleCount = data.val();
        })
    }
}

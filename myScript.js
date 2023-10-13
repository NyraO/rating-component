  class Card {
    id=0;
    getSelectedNumber(id){
        this.id=id;
     }
     myFunction(){
        const cardIcon=document.getElementById("star");
        const cardText=document.getElementById("card-desc");
        const cardContent= document.getElementById("card-content");
        const cardHeader=document.getElementById("card-header");
        const button=document.getElementById("submitButton");
        const links=document.getElementsByTagName("a");

        cardText.innerHTML="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
        cardHeader.innerHTML="Thank You!"
        cardHeader.style.textAlign="center";
        cardText.style.textAlign="center";

        cardIcon.remove();
        for (let i = links.length-1; i >=0; i--) {
            links[i].remove();
          }
        button.remove();

        const illustration = document.createElement("img");
        illustration.src='./images/illustration-thank-you.svg';
        const element = document.getElementById("card");
        element.insertBefore(illustration, cardContent);
        illustration.style.marginLeft="45px";
        const resultMsg=document.getElementById("result");
        resultMsg.innerHTML="You selected " + this.id + " out of 5";
        
     }
  }

  const myCard = new Card();

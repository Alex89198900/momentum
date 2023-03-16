









const quotes = [
  { 
  "quote" : "The only sin is ignorance", 
  "source" : "Christopher Marlowe" 
  },
  {
  "quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
  "source" : "Demosthenes"
  },
  {
  "quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
  "source" : "Mark Twain"
  }
 ]



function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}



randomQuote()

let fgh=document.getElementById('image')

const img = new Image();
function getLinkToImage() {
  const url = 'https://api.unsplash.com/photos/random?query=nature&client_id=TpzlyDANy04DUVY1PsHxtI6-vdodEud8OQPynF42SHA';;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.urls.regular)
      
      img.src=data.urls.regular
          
        fgh.style.backgroundImage = `url(${img.src} )`
        fgh.style.backgroundRepeat="no-repeat";
        fgh.style.backgroundSize="cover";
        fgh.style.backgroundСover="cover";
        
       
    });
  }

getLinkToImage()




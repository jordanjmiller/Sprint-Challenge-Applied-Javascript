// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */

const topics = document.querySelector('.topics');
let tabTopics;
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
      response.data.topics.forEach((topic)=>{
        tabCreator(topic);
      });
      tabTopics = document.querySelectorAll('.tab');
      console.log(tabTopics);
      tabTopics.forEach((topic) => {
        topic.addEventListener('click', () => {
          console.log(topic.textContent);
          topicOnly(topic.textContent);
        });
      });//foreach
})
  .catch(error => {console.log('Error! : ' + error)});


  function tabCreator(data){
      let tabDiv = document.createElement('div');
      tabDiv.classList.add('tab');
      tabDiv.textContent = data;
      topics.appendChild(tabDiv);
  }

  //tab functionality stretch
  
  //console.log(tabTopics);
  console.log(tabTopics);
  console.log(topics);
  function topicOnly(topic){
    // let javascriptArticles = [];
    // let bootstrapArticles = [];
    // let technologyArticles = [];
    // let jqueryArticles = [];
    // let nodejsArticles = [];
    
    displayNone(javascriptArticles);
    displayNone(bootstrapArticles);
    displayNone(technologyArticles);
    displayNone(jqueryArticles);
    displayNone(nodejsArticles);

    if(topic === 'javascript')
    {
      displayTopic(javascriptArticles);
    }
    else if(topic === 'bootstrap')
    {
      displayTopic(bootstrapArticles);
    }
    else if(topic === 'technology')
    {
      displayTopic(technologyArticles);
    }
    else if(topic === 'jquery')
    {
      displayTopic(jqueryArticles);
    }
    else if(topic === 'node.js')
    {
      displayTopic(nodejsArticles);
    }

  }

  function displayNone(articleArray){
    articleArray.forEach((arti) => {
      arti.style.display = 'none';
    })
  }
  function displayTopic(articleArray){
    articleArray.forEach((arti) => {
      arti.style.display = 'initial';
    })
  }
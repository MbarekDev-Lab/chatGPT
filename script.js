document.getElementById("submit-btn").addEventListener("click", function() {

  toChatGPT()
})

function toChatGPT(){
  let value = document.getElementById("word-input").value;

  let body = {
    model : "gpt-3.5-turbo",  // GPT VERSION 
    messages : [{ role : "user", content: value}],
  };
  let headers = {
    Authorization : "Bearer  .env  SECRET CODE ",
  };

  axios.post("https://api.openai.com/v1/chat/completions", body , {headers: headers})
  .then((response) => {
    let reply = response.data.choices[0].message.content;
    document.getElementById("replay-content").textContent = reply
    console.log(response);
  });
}







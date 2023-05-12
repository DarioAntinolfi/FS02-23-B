const url = "https://striveschool-api.herokuapp.com/books"

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(data => document.getElementById("demo").innerHTML +=`<div class="card col-3" >
    <img src="${data.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <button type="button" class="btn btn-primary">Scarta</button>
    </div>
  </div>`);

})
/* Struttura
1. get dei prodotti
2. mostrare i prodotti
3. link ai dettagli
4. link alla modifica
*/

// Variabili
const Url = "https://striveschool-api.herokuapp.com/api/product/";
let array
// Fetch post exemple

fetch(Url, {
  method: "POST",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjI3ODg4Zjc0MDAwMTQyODc0MzkiLCJpYXQiOjE2ODM4Nzg1MjAsImV4cCI6MTY4NTA4ODEyMH0.9ry755H2fntrZE-ogFEVOyBwelwI53CFYgfYx-miAU8",
  },
  body: {
    _id: "5d318e1a8541744830bef139", //SERVER GENERATED
    name: "app test 1", //REQUIRED
    description: "somthing longer", //REQUIRED
    brand: "nokia", //REQUIRED
    imageUrl:
      "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
    price: 100, //REQUIRED
    userId: "admin", //SERVER GENERATED
    createdAt: "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    updatedAt: "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    __v: 0, //SERVER GENERATED
  },
});

// Fetch get
fetch(Url, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjI3ODg4Zjc0MDAwMTQyODc0MzkiLCJpYXQiOjE2ODM4Nzg1MjAsImV4cCI6MTY4NTA4ODEyMH0.9ry755H2fntrZE-ogFEVOyBwelwI53CFYgfYx-miAU8",
  },
})
  .then((response) => response.json())
  //.then((file) => file.parse())
  .then((file) => console.log(file))
  .then((file) => array = file)
  .then(() => console.log(array))
  .catch((errore) => console.log(errore));

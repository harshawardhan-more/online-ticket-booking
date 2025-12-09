//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
//const movieNames = moviesList.forEach(() => movieName);
const selectMovie = document.querySelector("#selectMovie");
const movieName = document.querySelector("#movieName");
const moviePrice = document.querySelector("#moviePrice");

moviesList.forEach((movie) => {
  const option = document.createElement("option");
  option.value = movie.price;
  option.textContent = `${movie.movieName} $${movie.price}`;
  selectMovie.append(option);
});

// Set default movie details
movieName.textContent = "Flash";
moviePrice.textContent = "$ 7";
selectMovie.addEventListener("change", (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];
  movieName.textContent = selectedOption.textContent.split(` `, 1);
  moviePrice.textContent = `$ ${selectedOption.value}`;
});

const allSeats = document.querySelectorAll("#seatCont .seat");
const availableSeats = [];
allSeats.forEach((seat) => {
  if (!seat.classList.contains("occupied")) {
    availableSeats.push(seat);
  }
});
let selectedSeatsHolder = [];
let totalPrice;
const totalPriceElement = document.querySelector("#totalPrice");
const numberOfSeatElement = document.querySelector("#numberOfSeat");

availableSeats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    if (seat.classList.contains("selected")) {
      selectedSeatsHolder.push(seat);
      totalPrice =
        selectedSeatsHolder.length * parseInt(moviePrice.textContent.slice(2));

      totalPriceElement.textContent = `$ ${totalPrice}`;
      numberOfSeatElement.textContent = `${selectedSeatsHolder.length}`;
    } else {
      selectedSeatsHolder = selectedSeatsHolder.filter((item) => item !== seat);
    }
  });
});

const proceedBtn = document.querySelector("#proceedBtn");
proceedBtn.addEventListener("click", () => {
  if (!selectedSeatsHolder.length) {
    alert("Oops no seat Selected");
  } else {
    alert("Yayy! Your Seats have been booked");
    selectedSeatsHolder.forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    });
    selectedSeatsHolder = [];
    numberOfSeatElement.textContent = "0";
    totalPriceElement.textContent = "$ 0";
  }
});
const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
  selectedSeatsHolder.forEach((seat) => seat.classList.remove("selected"));
  selectedSeatsHolder = [];
  numberOfSeatElement.textContent = "0";
  totalPriceElement.textContent = "$ 0";
});
// document.querySelector("#selectMovie").append();
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button

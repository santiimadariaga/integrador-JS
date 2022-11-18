const productsData = [
  {
    id: 1,
    person: "men",
    brand: "niko",
    img: "../assets/imgData/menNikoOne.png",
    name: "menNikoOne",
    price: 265,
    size1: "39",
    size2: "40",
    size3: "41",
    size4: "42",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 2,
    person: "men",
    brand: "adidos",
    img: "../assets/imgData/menAdidosOne.png",
    name: "menAdidosOne",
    price: 245,
    size1: "39",
    size2: "40",
    size3: "41",
    size4: "42",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 3,
    person: "men",
    brand: "niko",
    img: "../assets/imgData/menNikoTwo.png",
    name: "menNikoTwo",
    price: 385,
    size1: "39",
    size2: "40",
    size3: "41",
    size4: "42",
    popular: "true",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 4,
    person: "men",
    brand: "adidos",
    img: "../assets/imgData/menAdidosTwo.png",
    name: "menAdidosTwo",
    price: 165,
    size1: "39",
    size2: "40",
    size3: "41",
    size4: "42",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 5,
    person: "men",
    brand: "niko",
    img: "../assets/imgData/menNikoThree.png",
    name: "menNikoThree",
    price: 124,
    size1: "39",
    size2: "40",
    size3: "41",
    size4: "42",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 6,
    person: "men",
    brand: "adidos",
    img: "../assets/imgData/menAdidosThree.png",
    name: "menAdidosThree",
    price: 264,
    size1: "39",
    size2: "40",
    size3: "41",
    size4: "42",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 7,
    person: "women",
    brand: "niko",
    img: "../assets/imgData/womenNikoOne.png",
    name: "womenNikoOne",
    price: 311,
    size1: "35",
    size2: "36",
    size3: "37",
    size4: "38",
    popular: "true",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 8,
    person: "women",
    brand: "adidos",
    img: "../assets/imgData/womenAdidosOne.png",
    name: "womenAdidosOne",
    price: 156,
    size1: "35",
    size2: "36",
    size3: "37",
    size4: "38",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 9,
    person: "women",
    brand: "niko",
    img: "../assets/imgData/womenNikoTwo.png",
    name: "womenNikoTwo",
    price: 198,
    size1: "35",
    size2: "36",
    size3: "37",
    size4: "38",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 10,
    person: "women",
    brand: "adidos",
    img: "../assets/imgData/womenAdidosTwo.png",
    name: "womenAdidosTwo",
    price: 175,
    size1: "35",
    size2: "36",
    size3: "37",
    size4: "38",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 11,
    person: "women",
    brand: "niko",
    img: "../assets/imgData/womenNikoThree.png",
    name: "womenNikoThree",
    price: 286,
    size1: "35",
    size2: "36",
    size3: "37",
    size4: "38",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 12,
    person: "women",
    brand: "adidos",
    img: "../assets/imgData/womenAdidosThree.png",
    name: "womenAdidosThree",
    price: 148,
    size1: "35",
    size2: "36",
    size3: "37",
    size4: "38",
    popular: "true",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 13,
    person: "kid",
    brand: "niko",
    img: "../assets/imgData/kidNikoOne.png",
    name: "kidNikoOne",
    price: 66,
    size1: "27",
    size2: "28",
    size3: "29",
    size4: "30",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 14,
    person: "kid",
    brand: "adidos",
    img: "../assets/imgData/kidAdidosOne.png",
    name: "kidAdidosOne",
    price: 85,
    size1: "27",
    size2: "28",
    size3: "29",
    size4: "30",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 15,
    person: "kid",
    brand: "niko",
    img: "../assets/imgData/kidNikoTwo.png",
    name: "kidNikoTwo",
    price: 59,
    size1: "27",
    size2: "28",
    size3: "29",
    size4: "30",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 16,
    person: "kid",
    brand: "adidos",
    img: "../assets/imgData/kidAdidosTwo.png",
    name: "kidAdidosTwo",
    price: 95,
    size1: "27",
    size2: "28",
    size3: "29",
    size4: "30",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 17,
    person: "kid",
    brand: "niko",
    img: "../assets/imgData/kidNikoThree.png",
    name: "kidNikoThree",
    price: 75,
    size1: "27",
    size2: "28",
    size3: "29",
    size4: "30",
    popular: "true",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
  {
    id: 18,
    person: "kid",
    brand: "adidos",
    img: "../assets/imgData/kidAdidosThree.png",
    name: "kidAdidosThree",
    price: 100,
    size1: "27",
    size2: "28",
    size3: "29",
    size4: "30",
    popular: "true",
    sizeSelected: function (e) {
      if (e.target.classList.contains("number")) {
        let size = e.target.textContent;
        return size;
      }
    },
  },
];

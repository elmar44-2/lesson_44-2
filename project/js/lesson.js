// phon block
const phoneinput = document.querySelector("#phone_input")
const phonebutton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

let regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phonebutton.onclick = () => {
   if (regExp.test(phoneinput.value)) {
       phoneResult.innerHTML = "OK"
       phoneResult.style.color = "green"
   } else {
       phoneResult.innerHTML = "NOT OK"
       phoneResult.style.color = "red"
   }
}

// tab slider
const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")

const tabsParent = document.querySelector(".tab_content_items")

const hideTAbContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = "none"
    })
    tabs.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = "block"
    tabs[i].classList.add("tab_content_item_active" )
}

showTabContent()
hideTAbContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTAbContent()
                showTabContent(i)
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".tab_content_item");
    const texts = document.querySelectorAll(".tab_content_block");

    let currentIndex = 0;

    function showNextSlide() {
        items[currentIndex].classList.remove("tab_content_item_active");
        texts[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add("tab_content_item_active");
        texts[currentIndex].style.display = "block";
    }


    texts.forEach((text, index) => {
        text.style.display = index === 0 ? "block" : "none";
    });
    setInterval(showNextSlide, 3000);
});


// conventer
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");
const getExchangeRates = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/conventer.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();

        request.onload = () => {
            if (request.status === 200) {resolve(JSON.parse(request.response));
            } else {reject("Error loading exchange rates");
            }
        };
    });
};
somInput.oninput = () => {
    getExchangeRates().then((data) => {
        usdInput.value = (somInput.value / data.usd).toFixed(2);
        eurInput.value = (somInput.value / data.eur).toFixed(2);
    });
};
usdInput.oninput = () => {
    getExchangeRates().then((data) => {
        somInput.value = (usdInput.value * data.usd).toFixed(2);
        eurInput.value = ((usdInput.value * data.usd) / data.eur).toFixed(2);
    });
};
eurInput.oninput = () => {
    getExchangeRates().then((data) => {
        somInput.value = (eurInput.value * data.eur).toFixed(2);
        usdInput.value = ((eurInput.value * data.eur) / data.usd).toFixed(2);
    });
};

//card switcher
const cardBlock = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");

let cardId = 1;
const maxCardId = 200;

const updateCard = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            const { title, id, completed } = data;
            cardBlock.innerHTML = `
                <p>${title}</p>
            <p>${completed}</p>
            <span>${id}</span>
            `;
        })

};
updateCard(cardId);

btnNext.onclick = () => {
    cardId = cardId < maxCardId ? cardId + 1 : 1;
    updateCard(cardId);
};

btnPrev.onclick = () => {
    cardId = cardId > 1 ? cardId - 1 : maxCardId;
    updateCard(cardId);
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(error => console.error('Error fetching posts:', error));
//weather
const searchInput = document.querySelector(".cityName")
const searchButton = document.querySelector("#search")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")

const API_URL = `http://api.openweathermap.org/data/2.5/weather`
const API_KEY = `e417df62e04d3b1b111abeab19cea714`

searchButton.onclick = () => {
    if (searchInput.value === "") {
        city.innerHTML = "Напишите название города!!!"
        temp.innerHTML = ""
        return
    }
    fetch(`${API_URL}?q=${searchInput.value}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            city.innerHTML = data.name || "Такой город не найден..."
            temp.innerHTML = Math.round(data.main.temp) + "&deg;"
    })
}
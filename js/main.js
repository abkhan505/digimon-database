document.querySelector('.buttonimportant').addEventListener('click', getFetch)

function getFetch(){
  const name = document.querySelector('input').value
  const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.ErrorMsg) {
          alert(data.ErrorMsg)
        } else {
          document.querySelector('h2').innerText = data[0].name
          document.querySelector('img').src = data[0].img
          document.querySelector('h3').innerText = data[0].level
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

fetch('https://digimon-api.vercel.app/api/digimon/')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        data.forEach(obj => {
          const li = document.createElement('li')
          li.textContent = obj.name
          document.querySelector('ul').appendChild(li)
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('.buttonlist').addEventListener('click', show)

function show() {
  document.querySelector(".listlistlist").classList.toggle('hidden');
}
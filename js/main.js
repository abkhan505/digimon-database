document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const name = document.querySelector('input').value
  const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].name
        document.querySelector('img').src = data[0].img
        document.querySelector('h3').innerText = data[0].level
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
const MUPPETS = ["Kermit", "Beakers"]

exports.randomMuppet = (req, res) => {
  const muppet = MUPPETS[Math.floor(Math.random()*MUPPETS.length)]
  console.log(`Returned another random muppet? ${muppet}`)
  res.send(`${muppet}`)
}

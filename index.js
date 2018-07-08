const MUPPETS = ["Kermit", "Beaker"]

exports.randomMuppet = (req, res) => {
  const muppet = MUPPETS[Math.floor(Math.random()*MUPPETS.length)]
  console.log(`Returned another random muppet? ${muppet}`)
  res.send(`${muppet}`)
}

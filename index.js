const MUPPETS = ["Kermit", "Miss Piggy", "Fozzie", "Animal", "Scooter", "Skeeter", "Rowlf", "Gonzo", "Bunsen", "Beakers"]

exports.randomMuppet = (req, res) => {
  const muppet = MUPPETS[Math.floor(Math.random()*MUPPETS.length)]
  console.log(`Returned another random muppet, yo! ${muppet}`)
  res.send(`${muppet}`)
}

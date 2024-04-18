const gradients = [
  'bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500',
  'bg-gradient-to-bl from-cyan-500 to-blue-500',
  'bg-gradient-to-bl from-indigo-500',
  'bg-gradient-to-bl from-violet-200 to-pink-200',
  'bg-gradient-to-bl from-blue-200 to-cyan-200',
  'bg-gradient-to-bl from-amber-200 to-yellow-500',
]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]

export const gradient = () => gradients[Math.floor(Math.random() * gradients.length)]

export const getDate = () => {
  const d = new Date();
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return { day, date, month, year }
} 


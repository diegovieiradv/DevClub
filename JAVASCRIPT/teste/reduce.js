const companies = [
{name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
{name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
{name: 'Microsoft', marketValue: 1103, CEO: 'Satya Nadella', foundedOn: 1975},
{name: 'Amazon', marketValue: 1648, CEO: 'Jeff Bezos', foundedOn: 1994},
{name: 'Alphabet', marketValue: 1113, CEO: 'Sundar Pichai', foundedOn: 2015},
{name: 'Facebook', marketValue: 584, CEO: 'Mark Zuckerberg', foundedOn: 2004},
{name: 'Tesla', marketValue: 740, CEO: 'Elon Musk', foundedOn: 2003},
{name: 'Nvidia', marketValue: 317, CEO: 'Jensen Huang', foundedOn: 1993},
{name: 'Intel', marketValue: 244, CEO: 'Pat Gelsinger', foundedOn: 1968},
{name: 'IBM', marketValue: 120, CEO: 'Arvind Krishna', foundedOn: 1911},
{name: 'SAP', marketValue: 102, CEO: 'Christian Klein', foundedOn: 1972},]

const marketValueOldCompanies = companies.map((company) =>{
    company.marketValue = company.marketValue - (company.marketValue * 0.10)
    return company
}).filter((company) => company.foundedOn > 1980).reduce ((acc, company) => acc + company.marketValue, 0)

console.log(marketValueOldCompanies)



/*const cart = [
    {productName: 'Abobora', pricePerKg: 5, kg: 1},
    {productName: 'Pepino', pricePerKg: 3.55, kg: 1.3},
    {productName: 'Limao', pricePerKg: 1.2, kg: 2},
    {productName: 'abacate', pricePerKg: 5.4, kg: 1.67},
    {productName: 'banana', pricePerKg: 11.9, kg: 3},
]
const cartTotal = cart.reduce((acc, value) => {
    return acc + (value.pricePerKg * value.kg);
}, 0);*/



//console.log(cartTotal);*//


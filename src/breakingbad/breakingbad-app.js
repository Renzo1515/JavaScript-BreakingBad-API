/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    
    const res  = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data[0]);
    return data;
    
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async ( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';
    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data !!';


}

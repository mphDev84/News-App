export const displayExchange=(json)=>{

const d = new Date();
const curr_date = d.getDate();
const curr_day = d.getDay();
const curr_month = d.getMonth() + 1; //zero based months system 
const curr_year = d.getFullYear();
const myDate = curr_month + "-" + curr_date + "-" + curr_year;
const dayOfWeek = d.toLocaleString("default", {weekday:"long"})
const exchangeLegend =()=>{
    document.querySelector("#exchange-legend").innerHTML=`(as of: ${dayOfWeek} ${myDate})`;
};
exchangeLegend();
    const pounds = json.conversion_rates.GBP;
    const euro = json.conversion_rates.EUR;
    const hkd = json.conversion_rates.HKD;
    const aud = json.conversion_rates.AUD;
    const ruble = json.conversion_rates.RUB;
  
    const items1 = [
        { currency: "GBP", name: pounds },
      ];
    const items2 = [
        { currency: "Euro", name: euro },
      ];
    const items3 = [
        { currency: "Hong Kong $", name: hkd },
      ];
    const items4 = [
        { currency: "Australian $", name: aud },
      ];
    const items5 = [
        { currency: "Russian Ruble", name: ruble },
      ];
    function loadTableData(items) {
        const table = document.getElementById("testBody");
        items.forEach( item => {
          let row = table.insertRow();
          let currency = row.insertCell(0);
          currency.innerHTML = item.currency;
          let name = row.insertCell(1);
          name.innerHTML = item.name;
        });
      }
      loadTableData(items1);
      loadTableData(items2);
      loadTableData(items3);
      loadTableData(items4);
      loadTableData(items5);
      loadTableData([]);
};

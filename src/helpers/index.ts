// contains my helpers functions
export function formatDate(date:string, format:string) {
    let d = new Date(date);
  
    if (format === 'time') {
      return d.toLocaleTimeString('en-US');
    }
    else if (format === 'date') {
        let y = d.getFullYear();
        let m = d.getMonth();
        let dd = d.getDate();
        let months_of_year = ['Jan','Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        return `${months_of_year[m] +' '+ dd +', '+ y}`
    //   return d.toDateString();
    }
    else {
      return d.toDateString() + ' ' + d.toLocaleTimeString('en-US');
    }
}

export function twoDecimalPlace(value:number) {
    if (value)
        return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else
        return '0';
}
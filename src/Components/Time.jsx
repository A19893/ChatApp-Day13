export const  getTime=(props)=> {
  const date = new Date(props.timestamp*1000);
  const currentdate = new Date();
  let day = date.getDay();
  console.log(day);
  let currentDay = currentdate.getDay();
  const diff=currentDay-day;
 if(diff===0)
 {
  return 'Today';
 }
 else if(diff===1)
 {
  return 'Yesterday';
 }
 else
 {
  return ''+date.getUTCDate()+'-'+date.getMonth()+'-'+date.getFullYear();
 }
}

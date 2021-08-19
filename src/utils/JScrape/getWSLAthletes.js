const rowsCollection = document.querySelectorAll("tr[class^='athlete-']");
// const rows = Array.from(rowsCollection);
const field = ['athlete-rank','athlete-name','athlete-country-name','athlete-points'];
const images = ['headshot','athlete-country-flag'];
const athletes = [];
rowsCollection.forEach((row) => {

  // reduce array of objects to single object
  const initialValue = {};
  let obj = field.reduce( ( acc, item ) => {
    acc[item] = row.getElementsByClassName(item)[0].innerText;
    return acc;
  }, initialValue );

  // add image
  
  obj = images.reduce( ( acc, item ) => {
    const img = row.getElementsByClassName(item)[0];
    // const img = row.querySelectorAll('td.athlete-headshot-and-name > div > div.avatar-image.tooltipstered > a');
    // console.log(img[0]);
    // acc[item] = img.getAttribute('style');
    acc[item] = img.getAttribute('data-img-src');
    return acc;
  }, obj );

  // console.log( 'OBJ', obj );
  // return obj;
  athletes.push(obj);

});

const athletesStr = JSON.stringify(athletes);
console.log('export const data=' + athletesStr + ';');

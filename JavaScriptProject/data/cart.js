export const cart=[
    
];
// function to add in the card 
export function addToCart(productId){
   let match=0;
    cart.forEach((item) => {
 if(productId==item.productId){
   match = item;
 }
 });
 if(match){
  match.quantity +=1;
 }else{
  cart.push({
     productId:productId,
     quantity : 1
    });
 }
}
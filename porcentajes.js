// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDescuento) / 100;
  return precioConDescuento;
}

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];

let couponValue = "JuanDC_es_Batman";
let priceValue = 600

//1 forma
// const isCouponValueValid = (coupon)=> {
//   return couponValue === coupon.name;
// };
// const userCoupon = coupons.find(isCouponValueValid);


//2 forma
// const userCoupon = coupons.find((delfines)=>{
// return couponValue === delfines.name;
// });

//3forma
const userCoupon = coupons.find(gallina => gallina.name === couponValue);

if (!userCoupon) 
alert("El cupón " + couponValue + " no es válido");
else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.textContent = "El precio con descuento son: $" + precioConDescuento;
}
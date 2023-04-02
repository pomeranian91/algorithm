function solution(chicken) {
  const orderChicken = (chicken) => {
    if (chicken < 10) return 0;
    const serviceChicken = Math.floor(chicken / 10);
    return serviceChicken + orderChicken(serviceChicken + (chicken % 10));
  };
  return orderChicken(chicken);
}

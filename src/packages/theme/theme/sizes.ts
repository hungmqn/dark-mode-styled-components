const getScale = (): Array<number> => {
  const baseScale = 12;
  const scales: Array<number> = [baseScale];
  const steps = 18;
  let step = 2;
  while (step < steps) {
    const roundScale = scales[step - 2] + (Math.floor((step - 2) / 4) + 1) * 2;
    scales.push(roundScale);
    ++step;
  }
  return scales;
};

const sizes = getScale();

export default sizes;

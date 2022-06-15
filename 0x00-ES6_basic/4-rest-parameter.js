export default function returnHowManyArguments(...args) {
  let i = 0;
  args.forEach(() => {
    i += 1;
  });
  return i;
}

export const normalizeDateNumber = (dateNumber: number): string => {
  const finalNumber = dateNumber + ""

  return finalNumber.length === 1 ? "0" + finalNumber : finalNumber
}

function RangeValidator(val, min, max) {
  const num = Number(val)
  const minNum = Number(min)
  const maxNum = Number(max)

  if (
    !Number.isFinite(num) ||
    !Number.isFinite(minNum) ||
    !Number.isFinite(maxNum)
  ) {
    return {
      valid: false,
      error: "NON_FINITE_VALUE"
    }
  }

  if (num < minNum || num > maxNum) {
    return {
      valid: false,
      error: "OUT_OF_RANGE"
    }
  }

  return {
    valid: true,
    error: null
  }
}

//Example usage:
console.log(RangeValidator(7, "1", "10"));
console.log(RangeValidator("abc", "1", "10"));
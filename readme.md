# Range Validator

A small, explicit utility for validating whether a value falls within a numeric range **with diagnostic feedback**.

This module is designed for validation layers where you need to know **why** an input failed, not just whether it passed.

---

## diagnostic validator.

It:
- normalizes inputs
- validates numeric correctness
- checks range constraints
- returns a structured result describing success or failure

---

## Behavior

- Accepts numbers and numeric strings for all inputs
- Explicitly rejects:
  - `NaN`
  - `Infinity`
  - `-Infinity`
- Distinguishes failure reasons
- Returns structured, machine-readable output

---

## Example

```js
RangeValidator(7, "1", "10")
/*
{
 valid: true, 
 error: null 
}
*/

RangeValidator("abc", "1", "10")

/*
{ 
 valid: false, 
 error: 'NON_FINITE_VALUE' 
 }
*/
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("is not possible to divide on 0");
  } else if (typeof numerator !== "number") {
    throw new Error("numerator is not a number");
  } else if (typeof denominator !== "number") {
    throw new Error("denominator is not a number");
  }

  return numerator / denominator;
}

try {
  console.log("Try to divide 10 on 2");
  console.log(divide(10, 2));
} catch (error) {
  console.log("Failed with", error);
} finally {
  console.log("Finish dividing 10 on 2");
}

try {
  console.log("Try to divide on 0");
  console.log(divide(10, 0));
} catch (error) {
  console.log("Failed with", error);
} finally {
  console.log("Finish dividing 10 on 0");
}

try {
  console.log("Try to divide string");
  console.log(divide("10", 2));
} catch (error) {
  console.log("Failed with", error);
} finally {
  console.log("Finish dividing string");
}

try {
  console.log("Try to divide on string");
  console.log(divide(10, "abc"));
} catch (error) {
  console.log("Failed with error", error);
} finally {
  console.log("Finish dividing on string");
}

if (location.search.includes("throw=1")) {
  console.log("Will throw");
  throw new Error("error");
}

export default function X() {
  return <div>X</div>;
}

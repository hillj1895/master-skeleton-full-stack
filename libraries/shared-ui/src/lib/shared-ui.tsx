// import { Button } from "@material-tailwind/react";

export function SharedUi() {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-1 border-blue-700 hover:border-blue-500 rounded">Test Button</button>
      <button className="btn btn-primary bg-primary">Simple Test Button</button>
      <div className="text-center">Hello from shared-ui</div>
    </>
  );
}

export default SharedUi;

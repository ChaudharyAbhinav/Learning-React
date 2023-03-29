import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ FirstName: "", LastName: "" });

  return (
    <>
      <input
        type="text"
        value={name.FirstName}
        onChange={(e) => setName({ ...name, FirstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h1>FirstName : {name.FirstName} </h1>
      <h1>LastName : {name.LastName}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </>
  );
}

export default HookCounterThree;

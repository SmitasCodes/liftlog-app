import React from "react";

const TemplatesForm = () => {
  return (
    <form>
      <div className="pb-2">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="bg-blue-200" />
      </div>
      <label className="font-bold">Exercises</label>
      <div>
        <label htmlFor="">1.</label>
        <label htmlFor="exerciseName">Name</label>
        <input type="text" name="exerciseName" className="bg-blue-200" />
        <label htmlFor="exerciseSets">Sets</label>
        <input type="number" min={0} max={10} className="w-12 bg-blue-200" />
        <button className="text-2xl">&uarr;</button>
        <button className="text-2xl">&darr;</button>
      </div>
    </form>
  );
};

export default TemplatesForm;

import React, { useState } from "react";
import SharedInput from "../../shared/input";
import SharedSelect from "../../shared/select";

const Labels = () => {

  const [labels, setLabels] = useState({});
  const [labelNodes ,setLabelNodes ]= useState([{label:"+ Add Label Node"}])
  return (
    <div>
      <div>
        <p className=" text-2xl font-mono underline">Labels</p>
      </div>
      <div className="grid grid-cols-3 gap-4.5 p-3">
        <SharedSelect
          label="Label Node"
          data={[{ label: "+Add New Label", value: "Add New Label" }]}
        />
        <SharedInput label="Location Node" />
        <SharedInput label="Location Name" />
        <SharedInput label="Parent Location" />
      </div>
    </div>
  );
};

export default Labels;

import React, { useContext, useEffect, useState } from "react";
import SharedSelect from "../shared/select";
import SharedInput from "../shared/input";
import axiosInstance from "../service/axiosInstance";
import SharedButton from "../shared/button";
import { FiSave } from "react-icons/fi";
import { AuthContext } from "../context/authContext";
const LabelForm = () => {
    const {user} = useContext(AuthContext)
  const [labelNodes, setLabelNodes] = useState([
    {
      label: "+ Add Nodes",
      value: "addNodes",
    },
  ]);

  const [labels, setLabels] = useState();

  const getLabelNodes = async () => {
    try {
      const { status, data } = await axiosInstance.get(
        `/hierarchy/nodes/${user.id}`
      );
      console.log(status, data, "get Nodes");
      if (status === 200) {
        const filterNodes = data.map((node) => ({
          label: node.node_name,
          value: node.id.toString(),
        }));

        // Remove "+ Add Nodes", insert new ones, and then add it back
        setLabelNodes([
            { label: "+ Add Nodes", value: "addNodes" },
          ...filterNodes,
        ]);
      }
    } catch (error) {
      console.log("error on label nodes", error);
    }
  };

  useEffect(() => {
    getLabelNodes();
  }, []);
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-3">
        <SharedSelect
          label="Select Node"
          data={labelNodes}
          placeholder="Select Node"
          onChange={(val) => setLabels(val)}
        />

        <SharedInput label="Label Name" />
        <SharedInput label="Parent Location" />

        {labels === "addNodes" && (
          <>
            <SharedInput label="Node Name" />
            <SharedInput label="level"  />
          </>
        )}
      </div>
      <div className="flex  mt-2 justify-end">
        <SharedButton
          title="Submit"
          icon={<FiSave />}
          iconPosition="left"
          className="h-10"
        />
      </div>
    </div>
  );
};
export default LabelForm;

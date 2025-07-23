import React, { useState } from "react";
import SharedInput from "../../shared/input";
import SharedSelect from "../../shared/select";
import SharedTextArea from "../../shared/textarea";

import SharedButton from "../../shared/button";
import { IoSaveOutline } from "react-icons/io5";
import SharedYesNoRadio from "../../shared/radioButton";
import TreeSelect from "../../shared/treeselect";
import TreeDropdown from "../../shared/treeselect";

const CreateSites = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const [smsMessage, setSMSMessage] = useState("");
  const [whatsappMessage, setWhatsAppMessage] = useState("");

  const locationData = [
    { label: "Embassy House Bengaluru", value: "embassy" },
    { label: "North", isGroup: true },
    { label: "NCR", value: "ncr", parent: "North" },
    { label: "Jaipur", value: "jaipur", parent: "North" },
    { label: "Dehradun", value: "dehradun", parent: "North" },
    { label: "Lucknow", value: "lucknow", parent: "North" },
    { label: "South", isGroup: true },
    { label: "Bengaluru", value: "bengaluru", parent: "South" },
    { label: "Hyderabad", value: "hyderabad", parent: "South" },
    { label: "Chennai", value: "chennai", parent: "South" },
    { label: "East", isGroup: true },
    { label: "Kolkata EAST", value: "kolkata", parent: "East" },
    { label: "West", isGroup: true },
    { label: "Ahemdabad", value: "ahemdabad", parent: "West" },
    { label: "Pune", value: "pune", parent: "West" },
    { label: "Mumbai", value: "mumbai", parent: "West" },
    { label: "Testing label", isGroup: true },
  ];

  const siteTypes = [
    { label: "Franchise", value: "franchise" },
    { label: "Office", value: "office" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Sites", value: "sites" },
    { label: "Warehouse", value: "warehouse" },
  ];
  const [selected, setSelected] = useState(null);

  const [siteFormData, setSiteFormData] = useState({
    siteName: "",
    siteCode: "",
    siteType: "",
    ownerShipType: "",
    fullAddress: "",
    latitude: "",
    longitude: "",
  });

  const treeData = [
    {
      label: "Parent 1",
      value: "p1",
      children: [
        { label: "Child 1.1", value: "c1.1" },
        {
          label: "Child 1.2",
          value: "c1.2",
          children: [
            { label: "Subchild 1.2.1", value: "sc1.2.1" },
            { label: "Subchild 1.2.2", value: "sc1.2.2" },
          ],
        },
      ],
    },
    {
      label: "Parent 2",
      value: "p2",
    },
  ];

  const [errors, setErrors] = useState({
    siteName: "",
    siteType: "",
  });

  const handleChange = (key, value) => {
    console.log(key ,value)
    setSiteFormData((prev) => ({ ...prev, [key]: value }));
    //  if(key==="siteName" && value.trim()!== ''){
    //     setErrors(prev=>({...prev, siteName:''}))
    //  }
  };
  const [selectedLabel, setSelectedLabel] = useState(null);


  const handleCreateSite = async()=>{
    console.log(siteFormData)
  }
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Create New Site</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <SharedInput
          label="Site Name"
          required
          onChange={(val) => handleChange("siteName", val)}
          placeholder="Enter Site Name"
          
        />
        <SharedInput
          label="Site Code"
          onChange={(val) => handleChange("siteCode", val)}
          placeholder="Enter Site Code"

        />
        <SharedSelect
          label="Site Type"
          placeholder="Choose Site Type"
          data={siteTypes}
          onChange={(val) => handleChange("siteType", val)}
          required
        />

        <SharedSelect
          label="Owner Ship Type"
          onChange={(val) => handleChange("ownerShipType", val)}
          placeholder="Owner Ship Type"
          data={[{ label: "COCO", value: "coco" }]}
        />

        <SharedInput
          label="Latitude"
          placeholder="Enter Latitude"
          onChange={(val) => handleChange("latitude", val)}
        />
        <SharedInput
          label="Longitude"
          placeholder="Enter Longitude"
          onChange={(val) => handleChange("longitude", val)}
        />
          <TreeDropdown
            data={treeData}
            onSelect={(node) => setSelectedLabel(node.label)}
            selected={selectedLabel}
            title="Choose Parent Node"
            required
          />
        <SharedTextArea
          label="Address"
          placeholder="Enter Site Address"
          onChange={(val) => handleChange("fullAddress", val)}
        />
      </div>
      <div className="hidden">
        <h1 className="text-xl font-bold text-blue-700 underline">
          Report Recipients
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <SharedInput label="SMS Phone Number" />
          <SharedYesNoRadio
            label="SMS Messages"
            value={smsMessage}
            onChange={setSMSMessage}
          />
          <SharedInput label="Email List" />
          <SharedYesNoRadio
            label="Email Messages"
            value={emailMessage}
            onChange={setEmailMessage}
          />

          <SharedInput label="WhatsApp Number" />
          <SharedYesNoRadio
            label="WhatsApp Messages"
            value={whatsappMessage}
            onChange={setWhatsAppMessage}
          />
        </div>
      </div>
      <div className="">
        <SharedButton title="Submit" onClick={handleCreateSite} icon={<IoSaveOutline />} />
      </div>
    </div>
  );
};

export default CreateSites;

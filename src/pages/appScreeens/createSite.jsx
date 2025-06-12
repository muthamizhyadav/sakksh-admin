import React, { useState } from "react";
import SharedInput from "../../shared/input";
import SharedSelect from "../../shared/select";
import SharedTextArea from "../../shared/textarea";
import { Country, State, City } from "country-state-city";
import SharedButton from "../../shared/button";
import { IoSaveOutline } from "react-icons/io5";
import SharedYesNoRadio from "../../shared/radioButton";

const CreateSites = () => {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [emailMessage, setEmailMessage] = useState("");
  const [smsMessage, setSMSMessage] = useState("");
  const [whatsappMessage, setWhatsAppMessage] = useState("");

  const formattedCountry = Country.getAllCountries().map((country) => ({
    label: `${country.name}`,
    value: country.isoCode,
  }));

  const formattedStates = State.getStatesOfCountry(country).map((state) => ({
    label: state.name,
    value: state.isoCode,
  }));

  const formattedCities = City.getCitiesOfState(country, state).map((city) => ({
    label: city.name,
    value: `${city.name.toLocaleLowerCase()} ${city.latitude} ${
      city.longitude
    }`,
  }));

  const siteTypes = [
    { label: "Company", value: "company" },
    { label: "Franchise", value: "franchise" },
    { label: "Office", value: "office" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Sites", value: "sites" },
    { label: "Warehouse", value: "warehouse" },
  ];
  const [siteFormData, setSiteFormData] = useState({
    siteName: "",
    siteCode: "",
    siteType: "",
    siteStatus: "",
    ownerShipType: "",
    fullAddress: "",
    areaName: "",
    country: "",
    state: "",
    city: "",
    logo: "",
    latitude: "",
    longitude: "",
    secretKey: "",
    sizeInFt: "",
    noOfEmployees: "",
    monthlyRent: "",
    contorllerId: "",
  });

  const [errors, setErrors] = useState({
    siteName: "",
    siteType: "",
  });

  const handleChange = (key, value) => {
    setSiteFormData((prev) => ({ ...prev, [key]: value }));
    //  if(key==="siteName" && value.trim()!== ''){
    //     setErrors(prev=>({...prev, siteName:''}))
    //  }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Create New Site</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <SharedInput
          label="Site Name:"
          onChange={(val) => handleChange("siteName", val)}
          placeholder="Enter Site Name"
        />
        <SharedInput
          label="Site Code:"
          onChange={(val) => handleChange("siteCode", val)}
          placeholder="Enter Site Code"
        />
        <SharedSelect
          label="Site Type"
          placeholder="Choose Site Type"
          data={siteTypes}
          onChange={(val) => handleChange("siteType", val)}
        />
        <SharedSelect
          label="Site Status"
          placeholder="Site Status"
          data={[
            { label: "Active", value: "active" },
            { label: "In-Active", value: "inactive" },
          ]}
          onChange={(val) => handleChange("siteStatus", val)}
        />
        <SharedSelect
          label="Owner Ship Type"
          onChange={(val) => handleChange("ownerShipType", val)}
          placeholder="Owner Ship Type"
          data={[{ label: "COCO", value: "coco" }]}
        />
        <SharedInput label="Area Name"           onChange={(val)=> handleChange('areaName', val)} placeholder="Enter Area Name" />
        <SharedSelect
          label="Country"
          placeholder="Choose Country"
          data={formattedCountry}
          onChange={(val) => setCountry(val)}
        />
        <SharedSelect
          label="State"
          placeholder="Choose State"
          data={formattedStates}
          onChange={(state) => setState(state)}
        />
        <SharedSelect
          label="City"
          placeholder="Choose City"
          data={formattedCities}
          onChange={(valcity) => setCity(valcity)}
        />
        <SharedInput
          label="Latitude"
          placeholder="Enter Latitude"
          value={city}
        />
        <SharedInput
          label="Longitude"
          placeholder="Enter Longitude"
          value={city}
        />
        <SharedInput label="Secret Key" placeholder="Enter Secret Key" />
        <SharedInput label="Size in sft" placeholder="Enter Size" />
        <SharedInput
          label="No. of Employee"
          placeholder="Enter Number of Employee"
        />
        <SharedInput label="Monthly Rent" placeholder="Enter Monthly Rent" />
        <SharedInput label="Controller Id" placeholder="Enter Controller ID" />
        <SharedYesNoRadio
          label="Final Report SMS"
          value={smsMessage}
          onChange={setSMSMessage}
        />
        <SharedYesNoRadio
          label="Final Report Email"
          value={smsMessage}
          onChange={setSMSMessage}
        />
        <SharedYesNoRadio
          label="Final Report WhatsApp"
          value={smsMessage}
          onChange={setSMSMessage}
        />
        <SharedTextArea label="Address" placeholder="Enter Site Address" />
      </div>
      <div>
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
            label="
WhatsApp Messages"
            value={whatsappMessage}
            onChange={setWhatsAppMessage}
          />
        </div>
      </div>
      <div className="">
        <SharedButton title="Submit" icon={<IoSaveOutline />} />
      </div>
    </div>
  );
};

export default CreateSites;

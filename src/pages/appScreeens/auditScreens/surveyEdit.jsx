import React from "react";
import { FcSurvey } from "react-icons/fc";
import { useLocation, useParams } from "react-router-dom";

const SurveyEdit = () => {
  const { surveyId } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <FcSurvey className="text-gray-900 " size={24} />
        <p className="text-xl font-bold text-gray-800">
          Survey: {data.surveyName} {surveyId}
        </p>
      </div>
      <div className=" flex justify-around w-full h-24 border rounded-md mt-2">
        <div>
          <p>Assign Sites</p>
        </div>
        <div>
          <p>Questions Type</p>
        </div>
        <div>
          <p>Area</p>
        </div>
      </div>
    </div>
  );
};
export default SurveyEdit;

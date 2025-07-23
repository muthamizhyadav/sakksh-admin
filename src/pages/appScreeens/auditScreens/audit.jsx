import React, { useContext, useState } from "react";
import SharedButton from "../../../shared/button";
import { SiLimesurvey } from "react-icons/si";
import SharedTable from "../../../shared/Table";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import { FcSurvey } from "react-icons/fc";
import SharedModal from "../../../shared/popup";
import SharedInput from "../../../shared/input";
import SharedSelect from "../../../shared/select";
import { AuthContext } from "../../../context/authContext";
import axiosInstance from "../../../service/axiosInstance";
import { primaryColor } from "../../../utils/styles";
import SharedCheckbox from "../../../shared/checkbox";
import SharedMenuDropdown from "../../../shared/menuDropdown";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mantine/core";
const Audits = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [openCreateSurvey, setOpenCreateSurvey] = useState(false);

  const [surveyFormData, setSurveyFormData] = useState({
    survey_name: "",
    type: "",
    status: "Active",
  });

  const handleSubmitSurvey = async () => {
    try {
      const payload = {
        comp_id: user.id,
        ...surveyFormData,
      };
      console.log(payload);
      const { status, data } = await axiosInstance.post(
        "/survey/createSurvey",
        payload
      );
      console.log(status, data);
    } catch (error) {
      console.log(error);
    }
  };

  const surveyActions = (surveyId , surveyName) => [
    {
      label: "Edit",
      onClick: () => navigate(`/audits/survey_edit/${surveyId}`,{state: {surveyName}}),
      icon: <BiEdit size={15} />,
    },
  ];

  const values = [
    [
      <div className="flex space-x-2  justify-start items-center">
        <SharedCheckbox value="Technical" />
        <div className="flex items-center space-x-2 ">
          <span>Technical</span>
          <Tooltip label="Number of Sites">
            <p>

(23)
            </p>
          </Tooltip>
        </div>
      </div>,
      <div className="space-x-2">
        <SharedMenuDropdown items={surveyActions(1 , 'Technical')} />
      </div>,
    ],
  ];

  return (
    <div className=" space-y-5">
      <p className="text-xl font-bold text-gray-800 flex items-center gap-2">
        {" "}
        <FcSurvey color="" className="text-grey-800" size={24} /> Survey
      </p>

      <div className="flex  flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="w-full sm:max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search User...."
              type="search"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-normal">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <button
              className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              //   disabled={currentPage === 1}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <span className="px-2">
              Page {} of {}
            </span>
            <button
              className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              //   disabled={currentPage === totalPages}
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
          <SharedButton
            title="Create Survey"
            onClick={() => setOpenCreateSurvey(true)}
            icon={<SiLimesurvey size={18} />}
          />
        </div>
      </div>
      <div className="">
        <SharedTable columns={["Survey Name", "Action"]} values={values} />
      </div>

      <SharedModal
        opened={openCreateSurvey}
        onClose={() => setOpenCreateSurvey(false)}
        title="Create Survey"
        size="xl"
      >
        <div>
          <div className="grid grid-cols-2 gap-5">
            <SharedInput
              label="Survey Name"
              placeholder="Enter Survey Name"
              onChange={(val) =>
                setSurveyFormData((prev) => ({ ...prev, survey_name: val }))
              }
            />
            <SharedSelect
              label="Survey Type"
              placeholder="Choose Survey Type"
              onChange={(val) =>
                setSurveyFormData((prev) => ({ ...prev, type: Number(val) }))
              }
              data={[
                { label: "Normal Survey", value: "0" },
                { label: "Audit Survey", value: "1" },
              ]}
            />
          </div>
          <div className=" flex mt-2  justify-end">
            <SharedButton
              title="Submit"
              className=" rounded-md"
              onClick={handleSubmitSurvey}
            />
          </div>
        </div>
      </SharedModal>
    </div>
  );
};

export default Audits;

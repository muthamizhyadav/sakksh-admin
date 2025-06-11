import React, { useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiEdit, FiSearch } from 'react-icons/fi';
import SharedButton from '../../shared/button';
import { IoMdAdd } from 'react-icons/io';
import SharedTable from '../../shared/Table';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiRoute } from "react-icons/ci";
import { FaRoute } from "react-icons/fa";
import SharedSelect from '../../shared/select';
import SharedModal from '../../shared/popup';
import SharedInput from '../../shared/input';
import { IoSaveOutline } from 'react-icons/io5';

const Users = () => {
    const [opened, setOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const columns = ['User Name', 'Email Id', 'Company', 'Phone', 'Status', 'Action'];


    const values = [
        ['Alice Johnson', 'alice.j@example.com', 'TechNova', '+1-555-0101', 'Active',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<FiEdit size={18} />} />
                <SharedButton title='Assign Survey' icon={<FaRoute size={18} />} />
            </div>
        ],
        ['Bob Smith', 'bob.smith@example.com', 'InnoWare', '+1-555-0102', 'Inactive',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Clara Davis', 'clara.d@example.com', 'SoftPulse', '+1-555-0103', 'Active',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['David Lee', 'david.lee@example.com', 'NextGen', '+1-555-0104', 'Pending',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Ella Brown', 'ella.b@example.com', 'AlphaTech', '+1-555-0105', 'Active',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Frank White', 'frank.w@example.com', 'InnovatureTech', '+1-555-0106', 'Inactive',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Grace Miller', 'grace.m@example.com', 'CodeCrafters', '+1-555-0107', 'Active',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Henry Wilson', 'henry.w@example.com', 'CloudHaven', '+1-555-0108', 'Pending',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Isabella Moore', 'isabella.m@example.com', 'DataBridge', '+1-555-0109', 'Active',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
        ['Jack Taylor', 'jack.t@example.com', 'VisionSoft', '+1-555-0110', 'Inactive',
            <div className="space-x-2">
                <SharedButton title='Assign site' icon={<CiRoute size={18} />} />
                <SharedButton icon={<RiDeleteBin6Line size={18} color="red" />} className="bg-white border border-red-600" />
            </div>
        ],
    ];

    const AddUserForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            mobilenumber: '',
            status: '',
            dashboard_access: '',
            role: '',
            region: '',
            parent_user: '',
            primary_site: '',
        });
        const [errors, setErrors] = useState({ roleName: '' });

        const handleChange = (key, value) => {
            setFormData(prev => ({ ...prev, [key]: value }));
            if (key === 'roleName' && value.trim() !== '') {
                setErrors(prev => ({ ...prev, roleName: '' }));
            }
        };

        const handleSubmit = () => {
            if (!formData.roleName.trim()) {
                setErrors({ roleName: 'Role Name is required' });
                return;
            }
            const payload = {
                roleName: formData.roleName,
                roleDescription: formData.roleDescription,
                company: formData.company,
                location: formData.location,
                parentRole: formData.parentRole,
                level: formData.level,
                defaultModule: formData.defaultModule,
            };
            console.log('Submitting Data:', payload);
        };

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SharedInput label="Full Name :" placeholder="Enter Full Name"
                    value={formData.roleName}
                    onChange={(val) => handleChange('roleName', val)}
                    error={errors.roleName}
                />
                <SharedInput label="Email:" placeholder="Enter Email" />
                <SharedInput label="Password:" placeholder="Enter Password" />
                <SharedInput label="Mobile Number:" placeholder="Enter Mobile Number" />
                <SharedInput label="Mobile Number:" placeholder="Enter Mobile Number" />
                <SharedSelect
                    label="Location"
                    placeholder="Choose Location"
                    data={[{ label: 'Active', value: 'active' }, { label: 'In Active', value: 'inactive' }]}
                />
                <SharedSelect
                    label="Dashboard Access(All sites and surveys)"
                    placeholder="Database Access"
                    data={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
                />

                <SharedSelect
                    label="Role"
                    placeholder="Select"
                    data={[{ label: 'Admin', value: 'admin' }, { label: 'HR', value: 'hr' }]}
                />
                <SharedSelect
                    label="Region/Location"
                    placeholder="Select"
                    data={[{ label: 'Admin', value: 'admin' }, { label: 'HR', value: 'hr' }]}
                />

                <SharedSelect
                    label="Parent User"
                    placeholder="Select"
                    data={[{ label: 'Admin', value: 'admin' }, { label: 'HR', value: 'hr' }]}
                />

                <SharedSelect
                    label="Primary Site"
                    placeholder="Select Store"
                    data={[{ label: 'Admin', value: 'admin' }, { label: 'HR', value: 'hr' }]}
                />
                <div></div>
                <SharedButton
                    title='Cancel'
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600 text-red-600'
                    textColor='red'
                />
                <SharedButton
                    icon={<IoSaveOutline size={20} />}
                    title='Save'
                    onClick={handleSubmit}
                />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaUsers size={24} />
                Manage Users</h1>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <div className="w-full sm:max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Search roles..."
                            type="search"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-normal">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <button
                            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentPage === 1}
                        >
                            <FiChevronLeft className="h-5 w-5" />
                        </button>
                        <span className="px-2">Page {currentPage} of {totalPages}</span>
                        <button
                            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentPage === totalPages}
                        >
                            <FiChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                    <SharedButton
                        title='Add User'
                        iconPosition='left'
                        icon={<IoMdAdd />
                        }
                        onClick={() => setOpened(true)}
                    />
                </div>

            </div>
            <div>
                <SharedTable columns={columns} values={values} />
            </div>
            <SharedModal
                opened={opened}
                onClose={() => setOpened(false)}
                title="+ Add User"
                size='xl'
            >
                <AddUserForm />
            </SharedModal>
        </div>
    );
};

export default Users;
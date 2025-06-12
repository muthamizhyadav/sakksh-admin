import React, { useState } from 'react';
import SharedTable from '../../shared/Table';
import { FiEdit } from "react-icons/fi";
import SharedButton from '../../shared/button';
import { primaryColor } from '../../utils/styles';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiSearch, FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';
import { IoMdAdd } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
import SharedModal from '../../shared/popup';
import SharedInput from '../../shared/input';
import SharedSelect from '../../shared/select';
import { IoSaveOutline } from "react-icons/io5";


const UserRole = () => {
    const columns = ['Role', 'Description', 'Level', 'Parent Role', 'Region/Location', 'Company', 'Action'];
    const [opened, setOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const roles = [
        { value: 'admin', label: 'Admin' },
        { value: 'manager', label: 'Manager' },
        { value: 'staff', label: 'Staff' },
    ];

    const values = [
        ['Admin', 'Full access', '1', 'None', 'Global', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                    onClick={()=>alert('Edit Page')}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Delete!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['Manager', 'Manages departments', '2', 'Admin', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                    onClick={() => alert('Saved!')}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['HR', 'Handles employees', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['Finance', 'Manages payroll', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['HR', 'Handles employees', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['Finance', 'Manages payroll', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['HR', 'Handles employees', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['Finance', 'Manages payroll', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['HR', 'Handles employees', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],
        ['Finance', 'Manages payroll', '3', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton
                    icon={<FiEdit size={20} />}
                />
                <SharedButton
                    icon={<RiDeleteBin6Line size={20} color='red' />}
                    onClick={() => alert('Saved!')}
                    className='bg-white border border-red-600'
                />
            </div>
        ],


    ];

    const AddRoleForm = () => {
        const [formData, setFormData] = useState({
            roleName: '',
            roleDescription: '',
            company: '',
            location: '',
            parentRole: '',
            level: '',
            defaultModule: '',
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
                <SharedInput label="Role Name :" placeholder="Enter Role Name"
                    value={formData.roleName}
                    onChange={(val) => handleChange('roleName', val)}
                    error={errors.roleName}
                />
                <SharedInput label="Role Description:" placeholder="Role Description" />
                <SharedSelect
                    label="Company"
                    placeholder="Choose Company"
                    data={roles}

                />
                <SharedSelect
                    label="Location"
                    placeholder="Choose Location"
                    data={roles}
                />
                <SharedSelect
                    label="Location"
                    placeholder="Choose Location"
                    data={roles}
                />
                <SharedSelect
                    label="Parent Role"
                    placeholder="Choose Parent Role"
                    data={roles}
                />
                <SharedSelect
                    label="Level"
                    placeholder="Choose Level"
                    data={roles}
                />
                <SharedSelect
                    label="Default module after login"
                    placeholder="Choose Default Module"
                    data={roles}
                />
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
                <FaUserCog size={24} />
                User Role</h1>

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
                        title='Add Role'
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
                title="+ Add User Role"
                size='xl'
            >
                <AddRoleForm />
            </SharedModal>
        </div>
    );
};

export default UserRole;
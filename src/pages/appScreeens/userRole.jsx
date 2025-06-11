import React from 'react';
import SharedTable from '../../shared/Table';
import { FiEdit } from "react-icons/fi";
import SharedButton from '../../shared/button';
import { primaryColor } from '../../utils/styles';
import { RiDeleteBin6Line } from "react-icons/ri";

const UserRole = () => {
    const columns = ['Role', 'Description', 'Level', 'Parent Role', 'Region/Location', 'Company', 'Action'];

    const values = [
        ['Admin', 'Full access', '1', 'None', 'Global', 'Schoofi',
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
        ['Team Lead', 'Leads a team', '4', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton

                    icon={<FiEdit />}
                    onClick={() => alert('Saved!')}
                />
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
        ],
        ['Developer', 'Writes code', '5', 'Team Lead', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton

                    icon={<FiEdit />}
                    onClick={() => alert('Saved!')}
                />
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
        ],
        ['Tester', 'Tests applications', '5', 'Team Lead', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton

                    icon={<FiEdit />}
                    onClick={() => alert('Saved!')}
                />
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
        ],
        ['Intern', 'Training role', '6', 'Developer', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton

                    icon={<FiEdit />}
                    onClick={() => alert('Saved!')}
                />
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
        ],
        ['Recruiter', 'Finds talent', '4', 'HR', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton

                    icon={<FiEdit />}
                    onClick={() => alert('Saved!')}
                />
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
        ],
        ['Support', 'Handles tickets', '4', 'Manager', 'India', 'Schoofi',
            <div className="space-x-2">
                <SharedButton

                    icon={<FiEdit />}
                    onClick={() => alert('Saved!')}
                />
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
        ]
    ];



    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">User Role</h1>

            <div className="flex items-center justify-between mb-4">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Search..."
                            type="search"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="pagination-controls">
                        {/* Your pagination controls here */}
                        <button className="px-3 py-1 border rounded">Previous</button>
                        <span className="px-3 py-1">Page 1</span>
                        <button className="px-3 py-1 border rounded">Next</button>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Add Role
                    </button>
                </div>
            </div>

            <div>
                <SharedTable columns={columns} values={values} />
            </div>
        </div>
    );
};

export default UserRole;
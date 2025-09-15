// src/admin/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo_RCT.png';
import { FiHome, FiUsers, FiBook, FiGitBranch, FiDollarSign, FiCalendar, FiAward, FiUser, FiLock } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Sidebar = ({ toggleSidebar }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FiHome />, path: '/admin/dashboard' },
        { id: 'student-management', label: 'Students', icon: <FiUsers />, path: '/admin/students' },
        { id: 'course-management', label: 'Courses', icon: <FiBook />, path: '/admin/courses' },
        { id: 'branch-management', label: 'Branches', icon: <FiGitBranch />, path: '/admin/branches' },
        { id: 'fees-management', label: 'Fees', icon: <FiDollarSign />, path: '/admin/fees' },
        { id: 'attendance-timetable', label: 'Attendance', icon: <FiCalendar />, path: '/admin/attendance' },
        { id: 'certificate-management', label: 'Certificates', icon: <FiAward />, path: '/admin/certificates' },
        { id: 'employee-tutor-management', label: 'Staff', icon: <FiUser />, path: '/admin/staff' },
        { id: 'roles-access-control', label: 'Roles', icon: <FiLock />, path: '/admin/roles' },
        { id: 'analytics-reports', label: 'Analytics', icon: <FiAward />, path: '/admin/analytics' },
    ];

    return (
        <div className="h-screen px-3 py-4 overflow-y-auto">
            <div className="flex justify-between items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md">
                <img src={Logo} alt="Logo" className="w-16 h-16" />
                <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
                    <IoClose className="text-xl" />
                </button>
            </div>
            <div className="space-y-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'
                            }`
                        }
                    >
                        <div className="h-full text-lg">{item.icon}</div>
                        <h3 className="text-md">{item.label}</h3>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

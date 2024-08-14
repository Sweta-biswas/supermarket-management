import React, { useState } from 'react';

const sampleEmployees = [
  { id: 1, name: 'John Doe', position: 'Cashier', contact: '555-555-5555' },
  { id: 2, name: 'Jane Smith', position: 'Stock Manager', contact: '555-555-5556' },
  { id: 3, name: 'Alice Johnson', position: 'Sales Associate', contact: '555-555-5557' },
];

function EmployeeManagement() {
  const [employees, setEmployees] = useState(sampleEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleRemoveEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleSave = () => {
    setEmployees(employees.map(emp => 
      emp.id === selectedEmployee.id ? selectedEmployee : emp
    ));
    setIsEditing(false);
    setSelectedEmployee(null);
  };

  const handleAddEmployee = () => {
    // Logic for adding an employee
    const newEmployee = { id: Date.now(), name: 'New Employee', position: 'New Position', contact: '555-555-5558' };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Employee Management</h2>
      
      <button 
        onClick={handleAddEmployee}
        className="px-4 py-2 mb-4 bg-green-600 text-white rounded"
      >
        Add Employee
      </button>
      
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border-b">Name</th>
            <th className="py-2 border-b">Position</th>
            <th className="py-2 border-b">Contact</th>
            <th className="py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td className="py-2 border-b text-center">{employee.name}</td>
              <td className="py-2 border-b text-center">{employee.position}</td>
              <td className="py-2 border-b text-center">{employee.contact}</td>
              <td className="py-2 border-b text-center">
                <button 
                  onClick={() => handleEditEmployee(employee)}
                  className="px-2 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleRemoveEmployee(employee.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded ml-2"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {isEditing && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Edit Employee</h3>
          <form onSubmit={(e) => {e.preventDefault(); handleSave();}}>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name:
              <input 
                type="text" 
                value={selectedEmployee.name} 
                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Position:
              <input 
                type="text" 
                value={selectedEmployee.position} 
                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, position: e.target.value })}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="block mb-4 text-sm font-medium text-gray-700">
              Contact:
              <input 
                type="text" 
                value={selectedEmployee.contact} 
                onChange={(e) => setSelectedEmployee({ ...selectedEmployee, contact: e.target.value })}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EmployeeManagement;

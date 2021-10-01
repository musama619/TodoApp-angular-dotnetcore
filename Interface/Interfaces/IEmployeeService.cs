using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IEmployeeService
    {
        Task<IActionResult> DeleteEmployee(int id);

        Task<ActionResult<Employee>> PostEmployee(Employee employee);

        Task<IActionResult> PutEmployee(int id, Employee employee);

        ActionResult<IEnumerable<EmployeeDetails>> GetEmployees();

        Task<ActionResult<Employee>> GetEmployee(int id);

        bool EmployeeExists(int id);



    }
}

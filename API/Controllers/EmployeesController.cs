using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;
using API.Interfaces;
using API.Services;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly DataContext _context;

        private readonly IEmployeeService _employeeService;


        public EmployeesController(DataContext context, IEmployeeService employee)
        {
            _context = context;
            _employeeService = employee;

        }

        // GET: api/Employees
        [HttpGet]
        public ActionResult<IEnumerable<EmployeeDetails>> GetEmployees()
        {

            return _employeeService.GetEmployees();

        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            return await _employeeService.GetEmployee(id);

        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {

            return await _employeeService.PutEmployee(id, employee);

        }

        // POST: api/Employees
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            return await _employeeService.PostEmployee(employee);

        }

        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {

            return await _employeeService.DeleteEmployee(id);

        }


        [HttpGet("getCities")]
        public async Task<ActionResult<IEnumerable<City>>> GetCities()
        {
            return await _context.Cities.ToListAsync();
        }

        [HttpGet("getStates")]
        public async Task<ActionResult<IEnumerable<State>>> GetStates()
        {
            return await _context.States.ToListAsync();
        }

        [HttpGet("getQualifications")]
        public async Task<ActionResult<IEnumerable<Qualification>>> GetQualification()
        {
            return await _context.Qualifications.ToListAsync();
        }

        [HttpGet("getDepartments")]
        public async Task<ActionResult<IEnumerable<Department>>> GetDepartment()
        {
            return await _context.Departments.ToListAsync();
        }

        [HttpGet("getDesignations")]
        public async Task<ActionResult<IEnumerable<Designation>>> GetDesignations()
        {
            return await _context.Designations.ToListAsync();
        }

        

    }
}

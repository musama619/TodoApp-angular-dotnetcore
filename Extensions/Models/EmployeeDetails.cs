using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class EmployeeDetails
    {
        public int Id { get; set; }

        public string EmployeeName { get; set; }

        public string DepartmentName { get; set; }

        public string DesignationName { get; set; }

        public string QualificationName { get; set; }

        public string CityName { get; set; }

        public string StateName { get; set; }

        public string GenderName { get; set; }

        public string TypeName { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public DateTime DOJ { get; set; }

        public DateTime DOB { get; set; }

        public bool status { get; set; }
    }
}

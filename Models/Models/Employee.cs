using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Employee
    {
        public int Id { get; set; }

        public string EmployeeName { get; set; }

        public int DepartmentCode { get; set; }

        public int DesignationCode { get; set; }

        public int QualificationCode { get; set; }

        public int CityCode { get; set; }

        public int StateCode { get; set; }

        public int GenderCode { get; set; }

        public int TypeCode { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public DateTime DOJ { get; set; }

        public DateTime DOB { get; set; }

        public bool status { get; set; }
    }
}

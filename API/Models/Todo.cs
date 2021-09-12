using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Todo
    {
        public int Id { get; set; }

        public string AddedByUserName { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime DateAdd { get; set; }

        public DateTime DueDate { get; set; }

        public DateTime DateComplete { get; set; }

        public bool Status { get; set; }

        
    }
}

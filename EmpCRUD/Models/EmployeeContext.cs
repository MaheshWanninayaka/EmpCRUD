using Microsoft.EntityFrameworkCore;

namespace EmpCRUD.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Employee> employees { get; set; }
        public DbSet<Item> items { get; set; }
    }
}

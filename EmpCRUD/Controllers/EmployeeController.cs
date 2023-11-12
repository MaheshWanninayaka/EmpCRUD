using EmpCRUD.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmpCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext _employeeContext;
        public EmployeeController(EmployeeContext employeeContext)
        {
            _employeeContext = employeeContext;
        }

        [HttpGet]
        [Route("GetAllEmployees")]
        public async Task<List<Employee>> GetAllEmployees()
        {
            try
            {
                if (_employeeContext.employees != null)
                    return await _employeeContext.employees.ToListAsync();
                return new List<Employee>();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
